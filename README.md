# npm-csr

快速切换 `npm` 源

<br />

## 动机 🦕

不想每次记住太长的镜像地址

<br />
<br />

## 使用 🦖

### 安装

```shell
npm i npm-csr -g
```

<br />

### 命令式

#### npm

```shell
# 切换为 npm 源
npm-csr npm
```

#### taobao

```shell
# 切换为淘宝源
npm-csr taobao
```

<br />

### 编程式

```ts
const { setNpmRegistry } = require('npm-csr')

// 切换为 npm 源
await setNpmRegistry('npm')

// 切换为 cnpm 源
await setNpmRegistry('taobao')
```

<br />
<br />
<br />

## License

Made with [markthree](https://github.com/markthree)

Published under [MIT License](./LICENSE).

<br />
