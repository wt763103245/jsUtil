/*
 * @Author: 萌新王
 * @Date: 2023-07-26 14:08:49
 * @LastEditors: 萌新王
 * @LastEditTime: 2023-07-27 15:18:04
 * @FilePath: \OneDrive\util\js\cocos2d-js\class.js
 * @Email: 763103245@qq.com
 * @Qq: 763103245
 */
import { UtilWt } from '../cocos2d_js.js';
//cocos2dJs 示例
/**cc类 */
export var cocos2dJs = cocos2dJs || {};
cocos2dJs.cc = cocos2dJs.cc || {};
cocos2dJs.cc.Node = {
    /**点击监听 */
    addClickEventListener: UtilWt.cc.Node.addClickEventListener,
};
/**@type {ccui} */
cocos2dJs.ccui = cocos2dJs.ccui || {};
/**@type {ccui.Widget} ccui控件 */
cocos2dJs.ccui.Widget = {
    /**@type {Number} 触摸开始 */
    TOUCH_BEGAN: ccui.Widget.TOUCH_BEGAN,
    /**@type {Number} 触摸中 */
    TOUCH_MOVED: ccui.Widget.TOUCH_MOVED,
    /**@type {Number} 触摸结束 */
    TOUCH_ENDED: ccui.Widget.TOUCH_ENDED,
};
