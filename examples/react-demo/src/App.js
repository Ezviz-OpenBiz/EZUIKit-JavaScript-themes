import React from 'react';
import RecTheme from '@ezviz/theme-rec';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.player = null; //定义播放器
  }
  componentDidMount() {
    // fetch('https://open.ys7.com/jssdk/ezopen/demo/token')
    // .then(response => response.json())
    // .then(res => {
    // });
  }

  init = (url, accessToken) => {
    if (this.player) {
      this.player.destroy();
      this.player = null;
    }

    this.player = new RecTheme({
      id: 'video-container', // 视频容器ID
      accessToken: accessToken,
      url: url,
      width: 600,
      height: 400,
      staticPath: window.location.protocol === 'http:' ? '/' : '/ezuikit_themes/rec'
    });
    window.player = this.player;
  };

  play = () => {
    var playPromise = this.player.play();
    playPromise.then((data) => {
      console.log('promise 获取 数据', data);
    });
  };
  stop = () => {
    var stopPromise = this.player.stop();
    stopPromise.then((data) => {
      console.log('promise 获取 数据', data);
    });
  };
  getOSDTime = () => {
    console.log(this.player.getOSDTime());
  };
  capturePicture = () => {
    this.player.snapshot().then((res) => {
      console.log(res);
    });
  };
  openSound = () => {
    this.player.setVolume(0.8);
  };
  closeSound = () => {
    this.player.setVolume(0);
  };

  fullScreen = () => {
    this.player.fullScreen();
  };

  destroy = () => {
    this.player.destroy();
    this.player = null;
  };

  handleInit = () => {
    const url = document.getElementById('url').value;
    const accessToken = document.getElementById('accessToken').value;
    this.init(url, accessToken);
  };

  render() {
    return (
      <div className="demo">
        <h2>视频模式使用示例：</h2>
        <div id="video-container" style={{ width: 600, height: 400 }}></div>
        <div>
          <div>
            <label htmlFor="url">URL：</label>
            <input
              id="url"
              name="url"
              style={{ width: 500 }}
              defaultValue="ezopen://open.ys7.com/BA5918431/1.rec"
            />
          </div>
          <div>
            <label htmlFor="accessToken">accessToken</label>
            <input
              id="accessToken"
              name="accessToken"
              style={{ width: 500 }}
              defaultValue="at.5wm2tpskagod1qjkcf36yoxq2mjjh2x6-86tenfu1od-0dd60jv-zid3bzdez"
            />
          </div>
          <button onClick={this.handleInit}>初始化</button>
        </div>
        <div>
          <button onClick={() => this.stop()}>stop</button>
          <button onClick={() => this.play()}>play</button>
          <button onClick={() => this.openSound()}>openSound</button>
          <button onClick={() => this.closeSound()}>closeSound</button>
          <button onClick={() => this.capturePicture()}>capturePicture</button>
          <button onClick={() => this.fullScreen()}>fullScreen</button>
          <button onClick={() => this.getOSDTime()}>getOSDTime</button>
          <button onClick={() => this.destroy()}>销毁</button>
        </div>
      </div>
    );
  }
}

export default App;
