<script lang="ts" setup>
import RecTheme from '@ezviz/theme-rec';
import { onMounted } from 'vue';
interface IPlayer {
  play: Function;
  stop: Function;
  getOSDTime: Function;
  snapshot: Function;
  setVolume: Function;
  fullScreen: Function;
  destroy: Function;
}
let player: IPlayer;

const play = () => {
  const playPromise = player.play();
  playPromise.then((data: any) => {
    console.log('promise 获取 数据', data);
  });
};

const stop = () => {
  const stopPromise = player.stop();
  stopPromise.then((data: any) => {
    console.log('promise 获取 数据', data);
  });
};

const getOSDTime = () => {
  console.log(player.getOSDTime());
};

const capturePicture = () => {
  player.snapshot().then((res: any) => {
    console.log(res);
  });
};

const openSound = () => {
  player.setVolume(0.8);
};

const closeSound = () => {
  player.setVolume(0);
};

const fullScreen = () => {
  player.fullScreen();
};

const destroy = () => {
  const destroyPromise = player.destroy();
  player = null!;
  destroyPromise.then((data: any) => {
    console.log('promise 获取 数据', data);
  });
};

const init = (url: string, accessToken: string) => {
  if (player) {
    player.destroy();
    player = null!;
  }

  player = new RecTheme({
    id: 'video-container', // 视频容器ID
    accessToken: accessToken,
    url: url,
    width: 600,
    height: 400,
    // isMobile: true,
    staticPath: window.location.protocol == 'http:' ? '/' : '/ezuikit_themes/rec'
  });
};

const handleInit = () => {
  const url = (document.getElementById('url') as HTMLInputElement).value;
  const accessToken = (document.getElementById('accessToken') as HTMLInputElement).value;
  init(url, accessToken);
};
</script>

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
      <button @click="handleInit">初始化</button>
    </div>
    <div>
      <button @click="stop">stop</button>
      <button @click="play">play</button>
      <button @click="openSound">openSound</button>
      <button @click="closeSound">closeSound</button>
      <button @click="capturePicture">capturePicture</button>
      <button @click="fullScreen">fullScreen</button>
      <button @click="getOSDTime">getOSDTime</button>
      <button @click="destroy">销毁</button>
    </div>
  </div>
</template>
