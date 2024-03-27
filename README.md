# 主题

## 极简主题 (simple)

极简主题支持，实在萤石私有协议播放器基础上进行开发主题，功能包括基础api、loading 和 message等

### 使用

```ts
import SimpleTheme from '@ezuikit/theme-simple'

const theme = new SimpleTheme({
  id: "container",
  width: 600,
  height: 400,
  accessToken: 'at.3bvmj4ycamlgdwgw1ig1jruma0wpohl6-48zifyb39c-13t5am6-yukyi86mz',
  url: 'ezopen://open.ys7.com/G39444019/1.rec' // 可以在萤石开放平台设备管理中获取
})

theme.play()
```

### 文档

[极简主题文档](./packages/simple/docs)


## 回放主题 （rec）

回放主题继承了极简主题，并在其基础上对UI进行了扩展，并支持主题插件功能，用户可以自定插件

### 使用

```ts
import RecTheme from '@ezuikit/theme-rec'

const theme = new RecTheme({
  id: "container",
  width: 600,
  height: 400,
  accessToken: 'at.3bvmj4ycamlgdwgw1ig1jruma0wpohl6-48zifyb39c-13t5am6-yukyi86mz',
  url: 'ezopen://open.ys7.com/G39444019/1.rec' // 可以在萤石开放平台设备管理中获取
})

theme.play()
```

### 文档

[回放主题文档](./packages/rec/docs)

### 使用示例

- [react demo](./examples/react-demo/)
- [vue-demo](./examples/vue-demo/)
- [vue3-demo](./examples/vue3-demo/)
