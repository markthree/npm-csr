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

#### 获取

```shell
# 获取当前源
npm-csr
```

#### 切换 npm

```shell
# 切换为 npm 源
npm-csr npm
```

#### 切换 cnpm

```shell
# 切换为 cnpm 源
npm-csr cnpm
```

<br />

### 编程式

```ts
const {
  setNpmRegistry,
  getCurrentNpmRegistry,
} = require("npm-csr");

// 切换为 npm 源
await setNpmRegistry("npm");

// 切换为 cnpm 源
await setNpmRegistry("cnpm");

// 获取当前 npm 源
await getCurrentNpmRegistry();
```

<br />
<br />
<br />

## License

Made with [markthree](https://github.com/markthree)

Published under [MIT License](./LICENSE).

<br />
