import * as _ezuikit_utils_service_dist_types_fetch from '@ezuikit/utils-service/dist/types/fetch';
import * as EZopenPlayer from '@ezuikit/player-ezopen';
import EZopenPlayer__default, { EZopenPlayerOptions, WaterMarkParams, MirrorFlipCommand } from '@ezuikit/player-ezopen';
export { EZopenPlayerOptions } from '@ezuikit/player-ezopen';
import { LoggerCls } from '@ezuikit/utils-logger';
import { EzopenURL } from '@ezuikit/utils-tools';
import Service from '@ezuikit/utils-service';
import EventEmitter from 'eventemitter3';
import I18n from '@ezuikit/utils-i18n';

interface ISimpleThemeOptions extends EZopenPlayerOptions {
    poster?: string;
    ignoreDownloadSnapshot?: false;
    customErrorDom?: string;
    errorWrapClassName?: string;
    customLoadingDom?: string;
    loadingText?: string;
    initText?: string;
}

interface MessageOptions {
    errorWrapClassName?: string;
    customErrorHtml?: string | (() => string) | null;
}
declare class Message {
    private readonly _options;
    $messageContainer: HTMLDivElement;
    private _timer;
    _prefixCls: string;
    constructor(id: string, options?: MessageOptions);
    /**
     * @description 展示错误
     * @param {string} html 错误内容
     * @param {number} duration 自动关闭的延时(单位秒) 默认0 不自动关闭
     * @returns {void}
     */
    show(html: string, duration?: number): void;
    showError(html: string, duration?: number): void;
    /**
     * @description 隐藏错误
     * @param {boolean} clear 是否清除内容 默认不清楚
     * @returns {void}
     */
    hide(clear?: boolean): void;
    /**
     * @description 清除错误内容并隐藏
     * @returns {void}
     */
    clear(): void;
    /**
     * @private
     */
    private _show;
    /**
     * @private
     */
    private _hide;
    /**
     * @description 销毁错误
     * @example
     * ```js
     * error.destroy()
     * ```
     */
    destroy(): void;
}

interface LoadingOptions {
    customLoadingHtml?: string | null;
    loadingText?: string | null;
    loadingClass?: string;
}
declare class Loading {
    private readonly _options;
    $loadingContainer: HTMLElement;
    _prefixCls: string;
    private readonly _$container;
    private _loading;
    constructor(id: string, options?: LoadingOptions);
    /**
     * @description loading 态
     */
    get loading(): boolean;
    /**
     * @description 展示loading
     * @param {string} html 展示内容 支持 html dom 字符串
     * @returns {void}
     */
    show(html?: string): void;
    /**
     * @description 隐藏loading
     * @param {boolean} clear 是否清除内容 默认不清楚
     * @returns {void}
     */
    hide(): void;
    /**
     * @description 销毁错误
     * @example
     * ```js
     * loading.destroy()
     * ```
     */
    destroy(): void;
    private _renderHtml;
}

type ThemePlugin = (player?: EZopenPlayer__default) => void;
declare class SimpleTheme {
    $container: HTMLElement;
    message: Message;
    version: '__VERSION__';
    /**
     * 插件名是唯一的， 后面插入的同名插件会覆盖前一个
     */
    static plugins: Map<string, ThemePlugin>;
    loading: Loading;
    player: EZopenPlayer__default;
    logger: LoggerCls;
    i18n: I18n;
    event: EventEmitter;
    service: Service;
    _options: ISimpleThemeOptions;
    urlInfo: Partial<EzopenURL>;
    constructor(options: ISimpleThemeOptions);
    /**
     * @description 播放
     * @param options
     * @returns
     */
    play(options?: Partial<Pick<EZopenPlayerOptions, 'url' | 'accessToken'>>): Promise<unknown>;
    /**
     * @description 暂停播放 并断流
     * @param {boolean} stopStream 是否断流
     * @returns
     */
    pause(stopStream?: boolean): Promise<unknown>;
    /**
     * @description 恢复
     * @param {string} time 回放播放的开始时间 格式（YYYYMMDDhhmmss）
     * @returns
     */
    resume(time: string): Promise<unknown>;
    /**
     * @description 断流并停止播放, 不可恢复（resume）
     */
    stop(): Promise<unknown>;
    /**
     * @description 销毁(播放器和dom)并断流
     * @returns
     */
    destroy(): Promise<void>;
    /**
     * @description 截图
     * @param {string} name 文件名 默认时间戳（new Date().getTime()）
     * @param {"jpeg"} fmt 图片格式  只支持 jpeg
     * @param {"base64"} type 文件格式 默认base64
     * @param {boolean} download 是否直接下载 默认不直接下载
     * @returns 返回base64字符
     */
    snapshot(name?: string, fmt?: 'jpeg', type?: 'base64', download?: boolean): Promise<EZopenPlayer.IResult<{
        fileName?: string | undefined;
        base64?: string | undefined;
    } | null>>;
    /**
     * @description 设置画面尺寸， resize的值会被记录
     * @param width 画面宽
     * @param height 画面高
     * @returns {Promise}
     */
    resize(width?: number, height?: number): Promise<{
        width: number;
        height: number;
    }>;
    /**
     *
     * @returns
     */
    /**
     * @description 全屏, 这里宽和高不会被记录， resize的值会被记录
     * @param {number} width 画面宽
     * @param {number} height 画面高
     * @returns {Promise}
     */
    fullScreen(width?: number, height?: number): Promise<void>;
    /**
     * @description 退出全屏
     * @returns
     */
    exitScreen(): Promise<void>;
    /**
     * 设置音量
     * @param volume 音量  0：表示静音
     * @returns
     */
    setVolume(volume: number): number | undefined;
    /**
     * @description 获取帧信息
     * @returns {object}
     */
    getFrameInfo(): {
        codecType: number;
        width: number;
        height: number;
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        second: number;
    };
    /**
     * @description 设置播放视频区域 （仅视频不是画布）
     * @param {number} left 视频展示区域 x轴开始位置
     * @param {number} right 视频展示区域 x轴结束位置
     * @param {number} top 视频展示区域 y轴开始位置
     * @param {number} bottom 视频展示区域 y轴结束位置
     * @param {boolean} flag
     * @param {boolean} isFullscreen 当页面旋转 90° 时 需要宽高互换 需要 设置为true
     * @returns {boolean}
     */
    setDisplayRegion(left: number, right: number, top: number, bottom: number, flag?: boolean, isFullscreen?: boolean): boolean;
    /**
     * @description 获取当前正在播放视频的时间 （单位秒(s)）
     * @returns {number}
     */
    getOSDTime(): number;
    /**
     * @description 插件管理
     * @param {PlayerPlugin} plugin 插件
     */
    use(plugin: any): void;
    /**
     * @description 设置矫正类型和分屏的id
     * @param {Object} type 矫正类型  参考 src/ezopen/constants.js
     * @param {string=} ids 如果分屏矫正，需要传入分屏canvas的id字符串列表 如 canvas1,canvas2,canvas3
     * @returns {Array<{code: number, msg: string, port: number, id: string}>} // code= 0 成功， -1 失败
     * @returns
     */
    setFECCorrectType(type: any, ids?: string): Promise<unknown>;
    /**
     * @description 设置 2D 鱼眼矫正旋转参数
     * @param {number} fishSubPort 鱼眼端口 主屏默认为 0
     * @param {Object} param2d
     */
    setFEC2DParam(fishSubPort: number, param2d: object): any;
    /**
     * @description 设置 3D 矫正视角参数
     * @param {object} param
     * @returns {Promise<boolean>}  true: 成功  false: 失败  undefined: 不支持
     */
    setFEC3DViewParam(param: object): Promise<boolean>;
    /**
     * @description  获取 3D 矫正视角参数
     * @param {object} param
     * @returns {Promise<object>}
     */
    get3DViewParam(param: object): Promise<unknown>;
    /**
     * 设置封面
     * @param {string} poster 封面封面地址
     * @returns {void}
     *
     */
    setPoster(poster: string): void;
    /**
     * @description 设置播放速度 仅回放生效 （本地回放设置倍速需要设备本身支持）
     * @param {0.5 | 1 | 2 | 4} rate  2的倍数
     * @returns
     *
     * @FIXME:
     */
    setPlaybackRate(rate: number): void;
    /**
     * @description 设置回放开始取流的时间（sdk 回放需要设备本身支持）
     * @param {string} startTime 开始时间 YYYYMMDDThhmmssZ
     * @param {string} stopTime 开始时间 YYYYMMDDThhmmssZ
     */
    seek(startTime: string, stopTime: string): Promise<void>;
    /**
     * @description 获取配置
     * @returns
     */
    getOptions(): ISimpleThemeOptions;
    /**
     * @description 获取版本号
     * @returns {string}
     */
    getVersion(): string;
    /**
     * @description 设置水印
     * @param {WaterMarkParams} params
     * @returns {Promise<any>}
     */
    setWaterMarkFont(params: WaterMarkParams): Promise<unknown>;
    /**
     * @description 镜像翻转 (需要设备本身支持， 可以重能力集中获取)
     * @link https://open.ys7.com/help/59?h=%E9%95%9C%E5%83%8F%E7%BF%BB%E8%BD%AC#device_ptz-api3
     * @param {MirrorFlipCommand} command  0-上下, 1-左右, 2-中心
     *
     * @returns {Promise}
     */
    setMirrorFlip(command: MirrorFlipCommand): Promise<_ezuikit_utils_service_dist_types_fetch.Response<any, undefined>>;
    /**
     * @description  安装插件
     * @param plugins
     */
    static install(name: string, plugin: any): void;
    /**
     * @description 批量安装插件
     * @param plugins
     */
    static installs(plugins: Array<{
        name: string;
        plugin: any;
    }>): void;
    private _registerEvents_;
}

export { type ISimpleThemeOptions, type ThemePlugin, SimpleTheme as default };
