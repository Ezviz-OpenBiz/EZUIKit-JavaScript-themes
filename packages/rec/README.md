# @ezuikit/theme-rec

回放主题，支持ezopen私有协议播放器

## 使用

```ts
const RecTheme = require('@ezuikit/theme-rec');

const theme = new RecTheme({
  id: 'video-container', // 视频容器ID
  accessToken: "",
  url: "",
  width: 600,
  height: 400,
  staticPath: "/" // 复制 dist 下PlayCtrlWasm 放置在服务器静态资源路径下
});
```
