# `@ezuikit/theme-simple`

播放器极简主题，包括 message 和 loading

## 使用

```ts
const SimpleTheme = require('@ezuikit/theme-simple');

const theme = new SimpleTheme({
  id: 'video-container', // 视频容器ID
  accessToken: "",
  url: "",
  width: 600,
  height: 400,
  staticPath: "/" // 复制 dist 下PlayCtrlWasm 放置在服务器静态资源路径下
});

```

