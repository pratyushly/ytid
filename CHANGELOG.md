# ytid

## 1.1.0

### Minor Changes

- c109c85: expand dataset to include words / phrases from Spanish

## 1.0.0

### Major Changes

- ace2831: first release

  Create URL friendly short IDs just like YouTube.

  #### Installation

  Using npm:

  ```shell
  npm i ytid
  ```

  Using yarn:

  ```shell
  yarn add ytid
  ```

  Using pnpm:

  ```shell
  pnpm i ytid
  ```

  #### Usage

  With ES6 (ECMAScript):

  ```javascript
  import { ytid } from "ytid";

  console.log(ytid()); // gocwRvLhDf8
  ```

  With CommonJS:

  ```javascript
  const { ytid } = require("ytid");

  console.log(ytid()); // dQw4w9WgXcQ
  ```

## 0.3.0

### Minor Changes

- 746b243: ensure that id doesn't contain any profane word

## 0.2.0

### Minor Changes

- cf21329: package now creates IDs just like YouTube
