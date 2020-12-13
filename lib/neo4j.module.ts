import { DynamicModule, Global, Module } from "@nestjs/common";
import { Connection } from "cypher-query-builder";

import { NEO4J, NEO4J_MODULE_OPTIONS, defaultOptions } from "./neo4j.constants";
import {
  Neo4jOptions,
  ConnectionWithDriver,
  Neo4jAsyncOptions,
} from "./neo4j-config.interface";
import { ConnectionError } from "./neo4j.errors";

const createProvider = async (
  options: Neo4jOptions = defaultOptions
): Promise<Connection> => {
  const connection = new Connection(
    `${options.scheme}://${options.host}:${options.port}`,
    {
      username: options.username,
      password: options.password,
    }
  ) as ConnectionWithDriver;
  try {
    await connection.driver.verifyConnectivity();
  } catch (error) {
    throw new ConnectionError(error);
  }
  return connection;
};

@Global()
@Module({})
export class Neo4jModule {
  static forRoot(config: Neo4jOptions): DynamicModule {
    const provider = {
      provide: NEO4J,
      useFactory: async (): Promise<Connection> => createProvider(config),
    };

    return {
      module: Neo4jModule,

      providers: [provider],
      exports: [provider],
    };
  }

  static forRootAsync(asyncOptions: Neo4jAsyncOptions): DynamicModule {
    const connectionProvider = {
      provide: NEO4J,
      useFactory: async (options: Neo4jOptions) => {
        return createProvider(options);
      },
      inject: [NEO4J_MODULE_OPTIONS],
    };

    return {
      module: Neo4jModule,
      imports: asyncOptions.imports,
      providers: [
        {
          provide: NEO4J_MODULE_OPTIONS,
          useFactory: asyncOptions.useFactory,
          inject: asyncOptions.inject || [],
        },
        connectionProvider,
      ],
      exports: [connectionProvider],
    };
  }
}
