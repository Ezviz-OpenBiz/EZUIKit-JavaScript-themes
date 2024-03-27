import SimpleTheme, { ISimpleThemeOptions, EZopenPlayerOptions } from '@ezuikit/theme-simple';

/**
 * 插件参数类型
 * @WARN 时间轴和日历不可以
 */
interface ControlsParam {
    /** hl: header-left; hr: header-right; fl: footer-left; fr: footer-left; bl: bottom-left; br: bottom-right */
    position: 'hl' | 'hr' | 'fl' | 'fr' | 'bl' | 'br';
    /** 插件名是唯一的， 后面插入的同名插件会覆盖前一个 */
    name: string;
    oldName?: string;
}
/**
 * 回放类型  顺序相关 可以对应UI上的排版 默认空数组
 * local: 本地存储回放
 * cloud: 云存储回放
 * cloud_record: 云录制回放
 */
type IRecTypes = Array<'local' | 'cloud' | 'cloud_record'>;
/**
 * 有循序相关性
 */
type IControls = Array<'play' | 'snapshot' | 'volume' | 'record' | 'zoom' | 'playbackRate' | 'webFullscreen' | 'fullscreen' | 'timeline' | 'datepicker' | 'deviceInfo' | 'recTypes' | ControlsParam>;
interface RecThemeOptions extends ISimpleThemeOptions {
    template?: string;
    /** 回放类型 */
    recTypes: IRecTypes;
    header: boolean;
    /** 控制控件 */
    controls: IControls;
    headerHeight: number;
    footerHeight: number;
    isMobile: boolean;
    /** 是否使用seek 功能 支持seek 不用断流 */
    useSeek: boolean;
    themeData?: any;
}

declare class RecTheme extends SimpleTheme {
    static version: '__VERSION__';
    options: RecThemeOptions;
    static $container: HTMLElement;
    private readonly _plugins;
    mobileFullScreen: boolean;
    constructor(options: Partial<RecThemeOptions>);
    /**
     * @description 播放
     * @param options
     * @returns
     */
    play(options?: Partial<Pick<EZopenPlayerOptions, 'url' | 'accessToken'>>): Promise<unknown>;
    /**
     * 渲染皮肤
     */
    private _renderThemeSkin;
    /**
     * @description 设置和并输入的配置项
     * @param {Partial<RecThemeOptions>} options
     * @returns {Object}
     */
    private static _mergeOptions;
    private _renderThemeData;
    private _renderHeaderFooter;
    private _renderPlugins;
    /**
     * @description 根据_plugins渲染插件
     */
    private _renderControls;
    /**
     * @description 渲染控件
     * @param {ControlsParam} controls
     */
    private _renderControl;
    /**
     * @description 给插件传参和改变插件this指向
     */
    private _pluginsCall;
    private _registerEvents;
    /**
     * @description 全屏
     * @returns {Promise<void>}
     */
    fullScreen(): Promise<void>;
    /**
     * @description web全屏
     * @returns
     */
    webFullScreen(): Promise<void>;
    /**
     * @description 退出全屏
     * @returns
     */
    exitScreen(): Promise<void>;
    /**
     * @description 设置主题尺寸， resize的值会被记录
     * @param width 宽
     * @param height 高
     * @returns {Promise}
     */
    resize(width: number, height: number): Promise<{
        width: number;
        height: number;
    }>;
    /**
     * @description 获取配置
     * @returns {object}
     */
    getOptions(): RecThemeOptions;
    /**
     * @description 销毁
     */
    destroy(): Promise<void>;
    /**
     * @description 获取版本号
     * @returns {string}
     */
    getVersion(): "__VERSION__";
}

export { type RecThemeOptions, RecTheme as default };
