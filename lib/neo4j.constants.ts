import { Neo4jOptions } from "./neo4j-config.interface";

export const NEO4J = "NEO4J_CONNECTION";
export const NEO4J_MODULE_OPTIONS = "NEO4J_MODULE_OPTIONS";

export const defaultOptions: Neo4jOptions = {
  scheme: "neo4j",
  host: "localhost",
  port: 7687,
  username: "neo4j",
  password: "neo4j",
};
