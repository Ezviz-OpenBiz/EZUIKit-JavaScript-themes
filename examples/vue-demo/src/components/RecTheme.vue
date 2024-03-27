<template>
  <div class="hello-ezuikit-js">
    <div id="video-container" style="width: 600px; height: 400px"></div>
    <div>
      <div>
        <label for="url">URL：</label>
        <input
          id="url"
          name="url"
          style="width: 500px"
          value="ezopen://open.ys7.com/BA5918431/1.rec"
        />
      </div>
      <div>
        <label for="accessToken">accessToken</label>
        <input
          id="accessToken"
          name="accessToken"
          style="width: 500px"
          value="at.5wm2tpskagod1qjkcf36yoxq2mjjh2x6-86tenfu1od-0dd60jv-zid3bzdez"
        />
      </div>
      <button v-on:click="handleInit">初始化</button>
    </div>
    <div>
      <button v-on:click="stop">stop</button>
      <button v-on:click="play">play</button>
      <button v-on:click="openSound">openSound</button>
      <button v-on:click="closeSound">closeSound</button>
      <button v-on:click="capturePicture">capturePicture</button>
      <button v-on:click="fullScreen">fullScreen</button>
      <button v-on:click="getOSDTime">getOSDTime</button>
      <button v-on:click="destroy">销毁</button>
    </div>
  </div>
</template>

<script>
import RecTheme from '@ezviz/theme-rec';
var player = null;

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted: () => {
    console.group('mounted 组件挂载完毕状态===============》');
    // fetch("https://open.ys7.com/jssdk/ezopen/demo/token")
    //  .then((response) => response.json())
    //  .then((res) => {
    //    var accessToken = res.data.accessToken;
    //
    //    window.player = player;
    //  });
  },
  methods: {
    init(url, accessToken) {
      if (player) {
        player.destroy();
        player = null;
      }

      player = new RecTheme({
        id: 'video-container', // 视频容器ID
        accessToken: accessToken,
        url: url,
        width: 600,
        height: 400,
        staticPath: window.location.protocol == 'http:' ? '/' : '/ezuikit_themes/rec'
      });
    },
    handleInit() {
      const url = document.getElementById('url').value;
      const accessToken = document.getElementById('accessToken').value;
      this.init(url, accessToken);
    },
    play() {
      var playPromise = player.play();
      playPromise.then((data) => {
        console.log('promise 获取 数据', data);
      });
    },
    stop() {
      var stopPromise = player.stop();
      stopPromise.then((data) => {
        console.log('promise 获取 数据', data);
      });
    },
    getOSDTime() {
      console.log(player.getOSDTime());
    },
    capturePicture() {
      player.snapshot().then((res) => {
        console.log(res);
      });
    },
    openSound() {
      player.setVolume(0.8);
    },
    closeSound() {
      player.setVolume(0);
    },
    fullScreen() {
      player.fullScreen();
    },
    destroy() {
      var destroyPromise = player.destroy();
      destroyPromise.then((data) => {
        console.log('promise 获取 数据', data);
      });
      player = null;
    }
  }
};
</script>
