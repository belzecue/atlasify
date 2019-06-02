import { IOption } from "maxrects-packer";
import { Sheet } from "./geom/sheet";
/**
 * Options class for composor and maxrects-packer
 *
 * @property {boolean} options.square use square size (default is true)
 * @property {boolean} options.pot use power of 2 sizing (default is true)
 * @property {boolean} options.square use square size (default is false)
 * @property {boolean} options.allowRotation allow rotation wihile packing (default is false)
 *
 * @export
 * @interface Option
 * @export
 * @class Options
 * @implements {IOption}
 */
export declare class Options implements IOption {
    name: string;
    width: number;
    height: number;
    padding: number;
    type: string;
    /**
     * Atlas will automaticly shrink to the smallest possible square
     *
     * @type {boolean}
     * @memberof Options
     */
    smart: boolean;
    /**
     * Atlas size shall be power of 2
     *
     * @type {boolean}
     * @memberof Options
     */
    pot: boolean;
    /**
     * Atlas size shall be square
     *
     * @type {boolean}
     * @memberof Options
     */
    square: boolean;
    /**
     * Allow 90-degree rotation while packing
     *
     * @type {boolean}
     * @memberof Options
     */
    allowRotation: boolean;
    /**
     * Remove surrounding transparent pixels
     *
     * @type {boolean}
     * @memberof Options
     */
    trimAlpha: boolean;
    /**
     * Extrude amount of edge pixels, will automaticly `trimAlpha` first.
     *
     * @type {number}
     * @memberof Options
     */
    extrude: number;
    /**
     * Draw debug info onto atlas
     *
     * @type {boolean}
     * @memberof Options
     */
    debug: boolean;
    /**
     * Creates an instance of Options.
     * @param {string} [name='sprite'] output filename of atlas/spreadsheet (default is 'sprite.png')
     * @param {number} [width=2048] ouput texture atlas width (defaut: 2048)
     * @param {number} [height=2048] ouput texture atlas height (defaut: 2048)
     * @param {number} [padding=0] padding between images (Default: 0)
     * @memberof Options
     */
    constructor(name?: string, width?: number, height?: number, padding?: number, type?: string);
}
export interface ITemplateView {
    imageName: string;
    width: number;
    height: number;
    format: string;
    scale: number;
    rects: Sheet[];
    appInfo: any;
    base64Data?: IBase64Data;
}
export interface IBase64Data {
    prefix: string;
    data: string;
}
export declare class Atlasify {
    options: Options;
    /**
     * Creates an instance of Atlasify.
     *
     * @param {Options} options Atlasify Options class
     * @memberof Atlasify
     */
    constructor(options: Options);
    /**
     * Load arrays of pathalike images url and do packing
     *
     * @param {string[]} paths pathalike urls
     * @memberof Atlasify
     */
    load(paths: string[]): void;
    private imageFilePaths;
    private rects;
    private packer;
    private debugColor;
}
export { Sheet } from './geom/sheet';
