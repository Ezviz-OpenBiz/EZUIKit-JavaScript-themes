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
          value="ezopen://open.ys7.com/C11633138/1.hd.live"
        />
      </div>
      <div>
        <label for="accessToken">accessToken</label>
        <input
          id="accessToken"
          name="accessToken"
          style="width: 500px"
          value="at.4fc8s8gk01shnb8g0mvjqw8u9uzmcbnu-17523mpv4s-04ebcas-fw6psw97l"
        />
      </div>
      <button v-on:click="handleInit">初始化</button>
    </div>
    <div>
      <button v-on:click="stop">stop</button>
      <button v-on:click="play">play</button>
      <button v-on:click="openSound">openSound</button>
      <button v-on:click="closeSound">closeSound</button>
      <button v-on:click="startSave">startSave</button>
      <button v-on:click="stopSave">stopSave</button>
      <button v-on:click="capturePicture">capturePicture</button>
      <button v-on:click="fullScreen">fullScreen</button>
      <button v-on:click="getOSDTime">getOSDTime</button>
      <button v-on:click="ezopenStartTalk">开始对讲</button>
      <button v-on:click="ezopenStopTalk">结束对讲</button>
      <button v-on:click="destroy">销毁</button>
    </div>
  </div>
</template>

<script>
import EZUIKit from "@ezviz/ezuikit-test";
var player = null;

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted: () => {
    console.group("mounted 组件挂载完毕状态===============》");
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

      player = new EZUIKit.EZUIKitPlayer({
        id: "video-container", // 视频容器ID
        accessToken: accessToken,
        url: url,
        // simple - 极简版; pcLive-pc直播；pcRec-pc回放；mobileLive-移动端直播；mobileRec-移动端回放;security - 安防版;voice-语音版;
        template: "pcLive",
        plugin: ["talk"], // 加载插件，talk-对讲
        width: 600,
        height: 400,
        staticPath:
          window.location.protocol == "http:"
            ? "/ezuikit_static"
            : "/ezuikit_js/ezuikit_static",
      });
    },
    handleInit() {
      const url = document.getElementById("url").value;
      const accessToken = document.getElementById("accessToken").value;
      this.init(url, accessToken);
    },
    play() {
      var playPromise = player.play();
      playPromise.then((data) => {
        console.log("promise 获取 数据", data);
      });
    },
    stop() {
      var stopPromise = player.stop();
      stopPromise.then((data) => {
        console.log("promise 获取 数据", data);
      });
    },
    getOSDTime() {
      var getOSDTimePromise = player.getOSDTime();
      getOSDTimePromise.then((data) => {
        console.log("promise 获取 数据", data);
      });
    },
    capturePicture() {
      var capturePicturePromise = player.capturePicture(
        `${new Date().getTime()}`
      );
      capturePicturePromise.then((data) => {
        console.log("promise 获取 数据", data);
      });
    },
    openSound() {
      var openSoundPromise = player.openSound();
      openSoundPromise.then((data) => {
        console.log("promise 获取 数据", data);
      });
    },
    closeSound() {
      var openSoundPromise = player.closeSound();
      openSoundPromise.then((data) => {
        console.log("promise 获取 数据", data);
      });
    },
    startSave() {
      var startSavePromise = player.startSave(`${new Date().getTime()}`);
      startSavePromise.then((data) => {
        console.log("promise 获取 数据", data);
      });
    },
    stopSave() {
      var stopSavePromise = player.stopSave();
      stopSavePromise.then((data) => {
        console.log("promise 获取 数据", data);
      });
    },
    ezopenStartTalk() {
      player.startTalk();
    },
    ezopenStopTalk() {
      player.stopTalk();
    },
    fullScreen() {
      player.fullScreen();
    },
    destroy() {
      var destroyPromise = player.destroy();
      destroyPromise.then((data) => {
        console.log("promise 获取 数据", data);
      });
      player = null;
    },
  },
};
</script>
