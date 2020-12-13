<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="190" alt="Nest Logo" /></a>
  <a href="https://neo4j.com/" target="blank"><span>and</span><img src="https://dist.neo4j.com/wp-content/uploads/neo4j_logo-325x150-226x100.png" width="160" alt="Neo4j Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest

  <p align="center">Connect your application you a native graph database.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Neo4j](https://neo4j.com/) [Cypher-query-builder](https://github.com/jamesfer/cypher-query-builder) module for [Nest](https://github.com/nestjs/nest).

## Installation

```bash
$ npm i --save nestjs-cypher-query-builder cypher-query-builder
```

## Quick Start

Just two methods are supported now:

- `.forRoot(options)`

  where `options` is

  ```ts
  type Neo4jOptions = {
    scheme: "neo4j" | "neo4j+s" | "neo4j+scc" | "bolt" | "bolt+s" | "bolt+scc";
    host: string;
    port: number | string;
    username: string;
    password: string;
    database?: string;
  };
  ```

- `.forRootAsync(asyncOptions)`

  where `asyncOptions` is

  ```ts
  type Neo4jAsyncOptions =  {
  imports: NestImport[],
  useFactory: async (...yourInjectedServices): Promise<Neo4jOptions> {},
  injects?: [...yourInjectedServices]
  }
  ```

Add Neo4jModule for your `app.module.ts` file as:

Sync

```ts
@Module({
  imports:[
    // ...
    Neo4jModule.forRoot({
      scheme: 'neo4j',
      host: 'localhost',
      port: 7687,
      username: 'neo4j',
      password: 'neo4j',
    })
    // ...
  ],
  //...
```

Async

```ts
@Module({
  imports:[
    // ...
    Neo4jModule.forRootAsync({
      imports: [ConfigsModule],
      useFactory: async (opt: any): Promise<any> => {
        console.log(3, opt);
        return params
      },
      inject: [ DbConfigService ]
    })
```

In your service you might use it now:

```ts
import { NEO4J } from 'neo4j-cypher-query-builder';
import { Connection, node } from 'cypher-query-builder';

// ...
@Injectable()  / @Controller()
class YourService/YourController
  constructor(
    // Here you might inject it
    @Inject(NEO4J) private readonly neo4jConnection: Connection
  ) {}

  // ...

  // you might use cypher-query-builder functionality all the time now
  public async someFunc(...args: any[]): Promise<any> {
    return this.neo4jConnection
      .match([node('n', 'Movie')])
      .return('n')
      .limit(25)
      .run()
  }
```

## License

Nest is [MIT licensed](LICENSE).
