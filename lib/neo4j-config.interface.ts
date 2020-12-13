import { ModuleMetadata } from "@nestjs/common";
import { Connection, DriverConstructor } from "cypher-query-builder";

export type Neo4jScheme =
  | "neo4j"
  | "neo4j+s"
  | "neo4j+scc"
  | "bolt"
  | "bolt+s"
  | "bolt+scc";

export type Neo4jOptions = {
  scheme: Neo4jScheme;
  host: string;
  port: number | string;
  username: string;
  password: string;
  database?: string;
};

export type ConnectionWithDriver = Connection & {
  driver: DriverConstructor;
};

export type Neo4jAsyncOptions = Pick<ModuleMetadata, "imports"> & {
  useFactory: () => Promise<Neo4jOptions>;
  inject?: any[];
};
