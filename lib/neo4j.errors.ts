export class ConnectionError extends Error {
  public details: any;
  constructor(oldError: Error) {
    super();
    this.message = "Connection to Neo4j DB was not esteblished";
    this.name = "Connection error";
    this.stack = oldError.stack;
    this.details = oldError.message;
  }
}
