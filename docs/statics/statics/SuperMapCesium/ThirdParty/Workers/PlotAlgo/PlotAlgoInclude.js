/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

﻿/* COPYRIGHT 2012 SUPERMAP
 * 本程序只能在有效的授权许可下使用。
 * 未经许可，不得以任何手段擅自使用或传播。*/

/**
 * @requires SuperMap/BaseTypes.js
 */

/**
 * Namespace: SuperMap.Lang
 * 国际化的命名空间，包含多种语言和方法库来设置和获取当前的语言。
 */
var SuperMap = window.SuperMap = window.SuperMap || {};

/***
 * @private
 * @type {{translate: SuperMap.PlotLang.translate}}
 */
SuperMap.PlotLang = {
    /**
     * APIMethod: translate
     * 从当前语言字符串的字典查找key。
     *     getCode获取的值用来判断合适的字典。字典存储在 <SuperMap.Lang> 方法中。
     *
     * Parameters:
     * key - {String} 字典中i18n字符串值的关键字.
     * context - {Object} <SuperMap.String.format> 使用此参数。
     *
     * Returns:
     * {String} 国际化的字符串。
     */
    translate: function(key, context) {
        var dictionary = SuperMap.PlotLang["zh-CN"];
        var message = dictionary && dictionary[key];
        if(!message) {
            // Message not found, fall back to message key
            message = key;
        }
        if(context) {
            message = SuperMap.String.format(message, context);
        }
        return message;
    }

};


/**
 * @private
 * APIMethod: SuperMap.plotI18n
 *  <SuperMap.Lang.translate> 的别名.  当前语言字符串的字典查找key。
 *  getCode获取的值用来判断合适的字典。字典存储在 <SuperMap.Lang> 方法中。
 *
 * Parameters:
 * key - {String} 字典中i18n字符串值的关键字.
 * context - {Object} <SuperMap.String.format> 使用此参数。
 *
 * Returns:
 * {String} 国际化的字符串。
 */
SuperMap.plotI18n = SuperMap.PlotLang.translate;


/**
 * @private
 * */
SuperMap.PlotLang["zh-CN"] = {
	//字体
	'SongTi':"宋体",
    //text
	'text':"文本",
    'textSizeLabel':"字体大小",
    'textSizeTitle':"字体大小",
    'textFaceNameLabel':"字体",
    'textFaceNameTitle':"字体",
    'textAlignLabel':"水平对齐方式",
    'textAlignTitle':"文本的水平对齐方式",
    'textVerticalAlignmentLabel':"垂直对齐方式",
    'textVerticalAlignmentTitle':"文本的垂直对齐方式",
    'textHaloRadiusLabel':"文本边框宽度",
    'textHaloRadiusTitle':"文本的外围边框的宽度",
    'textHaloColorLabel':"文本边框颜色",
    'textHaloColorTitle':"文本的外围边框的颜色",
    'textFillLabel':"文本颜色",
    'textFillTitle':"文本的颜色值",
    'textOpacityLabel':"透明度",
    'textOpacityTitle':"文本的透明度",
    'textDxLabel':"横向偏移",
    'textDxTitle':"文本的横向偏移值",
    'textDyLabel':"纵向偏移值",
    'textDyTitle':"文本的纵向偏移值",
    'textCompOpLabel':"叠加方式",
    'textCompOpTitle':"文本之间相互叠加里使用的覆盖或者是异或等运算方式",
    'expandingPointContent':"展",
    'volleyPointContent':"齐",
    'rendezvousPointContent':"会",
    'supplyPointContent':"补",
    //symbolAlgo
	//JB
    'symbolAlgo_17703':"加",
    'symbolAlgo_17704':"急",
    'symbolAlgo_21600':"冲",
    'symbolAlgo_28000_1':"危",
    'symbolAlgo_28000_2':"中",
    'symbolAlgo_28000_3':"轻",
    'symbolAlgo_315':"突击",
    'symbolAlgo_31304':"慑阻",
    'symbolAlgo_3010301':"调",
    'symbolAlgo_3010303':"出",
    'symbolAlgo_3010304':"协",

	//WJ
    'symbolAlgo_2121505':"火",
    'symbolAlgo_2121506':"墩",
    'symbolAlgo_2121507':"复",
    'symbolAlgo_2121601':"遥",
    'symbolAlgo_2121602':"障",
    'symbolAlgo_30010':"?",
    'symbolAlgo_3001101':"集",
    'symbolAlgo_3001102':"暴",
    'symbolAlgo_3001103':"骚",
    'symbolAlgo_3001104':"私",
    'symbolAlgo_3001105':"盗",
    'symbolAlgo_30020':"水",
    'symbolAlgo_3002001':"震",
    'symbolAlgo_3002004':"火",
    'symbolAlgo_30025':"滞",
    'symbolAlgo_5010301':"调",
    'symbolAlgo_5010303':"出",
    'symbolAlgo_5010304':"协",
    'symbolAlgo_5010401':"JZ",
    'symbolAlgo_5022001':"ZD0",
    'symbolAlgo_5034801':"催",
    "symbolAlgo_60203":"避",
    'symbolAlgo_60301':"爆",
    'symbolAlgo_6030101':"挖",
    'symbolAlgo_6030102':"浇",
    'symbolAlgo_6030103':"砌",
    'symbolAlgo_6030104':"装",
    'symbolAlgo_6030105':"石",
    'symbolAlgo_6030106':"沙",
    'symbolAlgo_6030107':"练",
    'symbolAlgo_60304':"隧",
    'symbolAlgo_3002501':"踏",
    'symbolAlgo_30026':"灾",
    'symbolAlgo_40104':"缉",
    'symbolAlgo_4030301':"标",
    'symbolAlgo_4030302':"劝",
    'symbolAlgo_4030303':"疏",
    'symbolAlgo_40304':"警",
    'symbolAlgo_4030401':"警",

    //basic symbol
    'polyLine':"折线",
    'parallelogram':"平行四边形",
    'circle':"圆",
    'ellipse':"椭圆",
    'annotation':"注记",
    'regularPolygon':"正多边形",
    'polygon':"多边形",
    'bezier':"贝塞尔曲线",
    'closedBesselCurve':"闭合贝塞尔曲线",
    'kidney':"集结地",
    'brace':"大括号",
    'trapezoid':"梯形",
    'rectangle':"矩形",
    'chord':"弓形",
    'sector':"扇形",
    'arc':"弧线",
    'parallel':"平行线",
    'annoframe':"注记指示框",
    'tooltipBoxM':"多角标注框",
    'runway':"跑道线",
    'curveEight':"八字形",
    'arrowLine':"箭头线",
    'pathText':"沿线注记",
    'concentricCircle':"同心圆",
    'combinedCircle':"组合圆",
    'freeCurve':"自由线",
    'nodeChain':"节点链",
    'lineMarking':"线型标注",
    'symbolTextBox':"标注框",

    'parallelFlatArrow':"平行平耳箭头",
    'multipleArrow':"多箭头",
    'trapezoidalFlatArrow':"梯形平耳箭头",
    'besselPointArrow':"贝塞尔尖耳箭头",
    'besselArrow':"普通贝塞尔箭头",
    'doubleArrow':"钳击箭头",
    'brokenSpaceTriangleArrow':"折线空三角箭头",
    'besselDovetailArrow':"贝塞尔燕尾箭头",
    'ordinaryLineArrow':"普通折线箭头",
    'besselPointedEarsTailArrow':"贝塞尔尖耳燕尾箭头",
    'besselTipArrow':"贝塞尔尖耳单点箭头",
    'besselArrowNoGraph':"普通贝塞尔箭头(不随图)",
    'brokenSpaceTriangleArrowNoGraph':"折线空三角箭头(不随图)",
    'besselPointedEarsTailArrowNoGraph':"贝塞尔尖耳燕尾箭头(不随图)",
    'ordinaryLineArrowNoGraph':"普通折线箭头(不随图)",
    'combianationArrow':"组合箭头",
    'symbolAlgo_311':'进攻方向',
    'symbolAlgo_317':'钳击',

    //new obj
    'airDeployment':"空军兵力部署",
    'airRoute':"空军航线",
    'arcRegion':"扇形区域",
    'flagGroup':"多旗",
    'lineRelation':"对象间连线",
    'polygonRegion':"多边形区域管理",
    'navyRoute':"海军航线",
    'missileRoute':"导弹航线",
    'navyDeployment':"海军兵力部署",
    'satelliteTimeWindows':"卫星时间窗",
    'satellite':"卫星",
    'symbolText':"对象标注",
    'symbolText1':"对象标注(带指示线)",
    'interferenceBeam':"干扰波束",
    'groupObject':"组合对象",

    //routeNodeTypeName
    'RENDEZVOUS': "会合点",
    'EXPANDING': "展开点",
    'VOLLEY': "齐射点",
    'STANDBY': "待机点",
    'SUPPLY': "补给点",
    'TAKEOFF': "起飞点",
    'INITIAL': "初始点",
    'VISUALINITAL': "可视初始点",
    'LANCH': "发射点",
    'TURNING': "转弯点",
    'AIMING': "瞄准点",
    'COMMONROUTE': "普通航路点",
    'WEAPONLAUNCH': "武器发射点",
    'TARGET': "目标点",
    'ATTACK':"攻击点",
    'SUPPRESS':"压制点",
    'EIGHTSPIRAL':"八字盘旋点",
    'HAPPYVALLEY':"跑马圈点",

    'LITERATESIGN':"标牌文字",

    'undoStackOverflow': '撤销的栈溢出',

    //Mapviewer
    'noContent':'无内容',
    'lableTitle': '_标签图层'

};



/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*!
 * 
 *     iclient9-leaflet.(http://iclient.supermap.io)
 *     Copyright© 2000-2017 SuperMap Software Co. Ltd
 *     license: Apache-2.0
 *     version: v9.0.1
 * 

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*!
 * 
 *     iclient9-plot-jbalgosymbol.(http://iclient.supermapol.com)
 *     Copyright© 2000-2017 SuperMap Software Co. Ltd
 *     license: undefined
 *     version: v9.1.0
 * 
 */

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*!
 * 
 *     iclient9-plot-leaflet.(http://iclient.supermapol.com)
 *     Copyright© 2000-2017 SuperMap Software Co. Ltd
 *     license: undefined
 *     version: v9.1.0
 * 
 */
!function(t){function e(o){if(i[o])return i[o].exports;var n=i[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,o){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=139)}([function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),a=(o(i(11)),o(i(12)),function(){function t(e){n(this,t),this.RTOD=57.29577951308232,this.DTOR=.017453292519943295,this.maxEditPts=0,this.minEditPts=0,this.libID=null,this.code=null,this.symbolType=null,this.symbolName=null,this.isEdit=!1,this.controlPoints=null,this.scalePoints=null,this.scaleValues=null,this.subSymbols=null,this.style=null,this.subSymbolDefaultPixelSize=30,this.map=null,this.graphicObject2D=null,this.components=[],e=e||{},this.controlPoints=[],this.scalePoints=[],this.scaleValues=[],this.subSymbols=[],this.components=[],this.textContent="",this.style=null,SuperMap.Util.extend(this,e),0===this.libID&&null===this.symbolType?this.symbolType=this.code:null===this.symbolType&&(this.symbolType=SuperMap.Plot.SymbolType.ALGOSYMBOL),null===this.subSymbolScaleValue&&(this.subSymbolScaleValue=.1),0!==this.minEditPts&&0!==this.maxEditPts||this.setMinAndMaxEditPts()}return s(t,[{key:"getScaleValues",value:function(){return this.graphicObject2D?this.graphicObject2D.scaleValues:this.scaleValues}},{key:"setScaleValues",value:function(t){this.graphicObject2D?this.graphicObject2D.scaleValues=t:this.scaleValues=t}},{key:"clearScaleValues",value:function(){this.graphicObject2D?this.graphicObject2D.scaleValues=[]:this.scaleValues=[]}},{key:"getSubSymbols",value:function(){return this.graphicObject2D?this.graphicObject2D.subSymbols:this.subSymbols}},{key:"setSubSymbols",value:function(t){this.graphicObject2D?this.graphicObject2D.subSymbols=t:this.subSymbols=t}},{key:"getControlPoints",value:function(){if(this.graphicObject2D&&!this.equalControlPoints()){this.controlPoints=[];for(var t=0;t<this.graphicObject2D.getLatLngs().length;t++)this.controlPoints.push(new SuperMap.Geometry.Point(this.graphicObject2D.getLatLngs()[t].lng,this.graphicObject2D.getLatLngs()[t].lat))}return this.controlPoints}},{key:"setControlPoints",value:function(t){if(this.graphicObject2D){for(var e=[],i=0;i<t.length;i++)e.push(L.latLng(t[i].y,t[i].x));this.graphicObject2D._latLngs=e}else this.controlPoints=t}},{key:"clearControlPoints",value:function(){this.graphicObject2D?this.graphicObject2D._latLngs=[]:this.controlPoints=[]}},{key:"addControlPoints",value:function(t,e){this.graphicObject2D?e<this.graphicObject2D.getLatLngs().length?(this.graphicObject2D._latLngs[e].lat=t.y,this.graphicObject2D._latLngs[e].lng=t.x):this.graphicObject2D._latLngs.push(L.latLng(t.y,t.x)):e<this.controlPoints.length?(this.controlPoints[e].y=t.y,this.controlPoints[e].x=t.x):this.controlPoints.push(t)}},{key:"equalControlPoints",value:function(){if(this.graphicObject2D){if(this.graphicObject2D.getLatLngs().length!==this.controlPoints.length)return!1;for(var t=0;t<this.controlPoints.length;t++)if(this.graphicObject2D.getLatLngs()[t].lat!==this.controlPoints[t].y||this.graphicObject2D.getLatLngs()[t].lng!==this.controlPoints[t].x)return!1;return!0}return!0}},{key:"getIsEdit",value:function(){return this.graphicObject2D?this.graphicObject2D.isEdit:this.isEdit}},{key:"getStyle",value:function(){return this.graphicObject2D?this.graphicObject2D.style:this.style}},{key:"addScalePoint",value:function(t,e){if(t&&null!==t){void 0!==e&&null!==e||(e=this.getScalePoints().length<0?0:this.getScalePoints().length);var i=new SuperMap.Geometry.Point(t.x,t.y);i.isScalePoint=!0,i.tag=e,this.graphicObject2D?this.graphicObject2D.scalePoints.push(i):this.scalePoints.push(i)}}},{key:"clearScalePoints",value:function(){this.graphicObject2D?this.graphicObject2D.scalePoints=[]:this.scalePoints=[]}},{key:"getScalePoints",value:function(){return this.graphicObject2D?this.graphicObject2D.scalePoints:this.scalePoints}},{key:"setScalePoints",value:function(t){return this.graphicObject2D?this.graphicObject2D.scalePoints=t:this.scalePoints=t}}]),s(t,[{key:"destroy",value:function(){this.minEditPts=null,this.maxEditPts=null,this.controlPoints.length=0,this.controlPoints=null,this.scalePoints.length=0,this.scalePoints=null,this.scaleValues.length=0,this.scaleValues=null,this.subSymbols.length=0,this.subSymbols=null,this.subSymbolSize=0,this.map=null,this.symbolType=null,this.symbolName=null,this.textContent=null,this.components=[],this.radius=null,this.islocationCircle=!1,this.tipPoint=null,this.roundBox=null,this.textBoxType=null,this.style=null}},{key:"clearComponents",value:function(){if(this.components=[],this.clearScalePoints(),this.maxEditPts<this.controlPoints.length&&this.symbolType!==SuperMap.Plot.SymbolType.ELLIPSESYMBOL){var t=this.controlPoints.shift(),e=this.controlPoints.pop();this.controlPoints=[],this.controlPoints.push(t,e)}}},{key:"calculateParts",value:function(){if(this.clearComponents(),this.controlPoints=SuperMap.Plot.PlottingUtil.clearSamePts(this.controlPoints),this.controlPoints.length>=this.minEditPts){var t={textContent:this.textContent,type:this.symbolType,surroundLineFlag:!1,positionPoints:this.controlPoints,style:{}};if(t.type===SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL&&t.positionPoints.push(t.positionPoints[0]),this.symbolType===SuperMap.Plot.SymbolType.PARALLELLINE){if(this.controlPoints&&this.controlPoints.length>=3){var e=!1;void 0!==this.controlPoints[0].z&&(e=!0);var i=SuperMap.Plot.PlottingUtil.distance(this.controlPoints[0],this.controlPoints[1]);SuperMap.Plot.PlottingUtil.isRight(this.controlPoints[0],this.controlPoints[1],this.controlPoints[2])&&(i=-i);for(var o=[],n=1;n<this.controlPoints.length;n++)o.push(this.controlPoints[n].clone());var s=SuperMap.Plot.PlottingUtil.parallel(o,i);if(this.controlPoints[0].x=s[0].x,this.controlPoints[0].y=s[0].y,e)for(var a=0;a<o.length;a++)s[a].z=o[a].z;this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,o),this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,s)}}else this.components.push(t)}else this.controlPoints.length>=2&&this.controlPoints.length<this.minEditPts&&this.calAssistantLine()}},{key:"setMinAndMaxEditPts",value:function(){if(0===this.libID)switch(this.code){case SuperMap.Plot.SymbolType.TEXTSYMBOL:this.minEditPts=1,this.maxEditPts=1;break;case SuperMap.Plot.SymbolType.CIRCLESYMBOL:case SuperMap.Plot.SymbolType.RECTANGLESYMBOL:this.minEditPts=2,this.maxEditPts=2;break;case SuperMap.Plot.SymbolType.ARCSYMBOL:case SuperMap.Plot.SymbolType.CHORDSYMBOL:case SuperMap.Plot.SymbolType.PIESYMBOL:case SuperMap.Plot.SymbolType.ELLIPSESYMBOL:case SuperMap.Plot.SymbolType.PARALLELOGRAM:this.minEditPts=3,this.maxEditPts=3;break;case SuperMap.Plot.SymbolType.POLYLINESYMBOL:case SuperMap.Plot.SymbolType.POLYBEZIERSYMBOL:this.minEditPts=2,this.maxEditPts=9999;break;case SuperMap.Plot.SymbolType.PARALLELLINE:case SuperMap.Plot.SymbolType.POLYBEZIERCLOSESYMBOL:case SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL:this.minEditPts=3,this.maxEditPts=9999;break;case SuperMap.Plot.SymbolType.KIDNEY:this.minEditPts=2,this.maxEditPts=3}}},{key:"addCell",value:function(t,e,i,o){if(t&&e){var n={};n.type=t,n.textContent=o,n.positionPoints=e,n.style=i&&null!==i?i:{surroundLineFlag:!1},this.components.push(n)}}},{key:"getDefaultSubSymbolSize",value:function(){var t=this.getLonLatDistanceFromPixel(this.subSymbolDefaultPixelSize);if(0===t){if(0!==this.subSymbolSize)return this.subSymbolSize;for(var e=0,i=0;i<this.controlPoints.length-1;i++)e+=SuperMap.Plot.PlottingUtil.distance(this.controlPoints[i],this.controlPoints[i+1]);t=.3*e}return t}},{key:"getLonLatDistanceFromPixel",value:function(t){if(null===this.map)return 0;var e,i;if(L.Map&&this.map instanceof L.Map){var o=this.map.layerPointToLatLng(L.point(0,0)),n=this.map.layerPointToLatLng(L.point(t,0));e=new SuperMap.Geometry.Point(o.lng,o.lat),i=new SuperMap.Geometry.Point(n.lng,n.lat)}return SuperMap.Plot.PlottingUtil.distance(e,i)}},{key:"getTextBounds",value:function(t,e){" "===e&&(e="_");var i=document.createElement("span");document.body.appendChild(i),i.style.width="auto",i.style.height="auto",t.fontSize&&(i.style.fontSize=new String(t.fontSize)+"px"),t.fontFamily&&(i.style.fontFamily=t.fontFamily),t.fontWeight&&(i.style.fontWeight=t.fontWeight),i.style.position="absolute",i.style.visibility="hidden",i.innerHTML=e;var o=new SuperMap.Bounds(i.clientLeft,i.clientTop+i.clientHeight-6,i.clientLeft+i.clientWidth,i.clientTop+4),n=new SuperMap.Bounds(0,0,0,0);if(L.Map&&this.map instanceof L.Map){var s=this.map.layerPointToLatLng(L.point(o.left,o.top)),a=this.map.layerPointToLatLng(L.point(o.right,o.bottom));n.left+=s.lng,n.top+=a.lat,n.right+=a.lng,n.bottom+=s.lat,n.add(-s.lng,-s.lat)}return document.body.removeChild(i),n}},{key:"getCircleLonLat",value:function(t,e){if(null===this.map)return L.latLng(0,0);if(L.Map&&this.map instanceof L.Map){var i=this.map.latLngToLayerPoint(L.latLng(t.y,t.x));return i.x+=e,this.map.layerPointToLatLng(L.point(i.x,i.y)).lng-t.x}}},{key:"freeCurveBoundsPixelToLatLng",value:function(t){if(null===this.map)return L.latLng(0,0);if(L.Map&&this.map instanceof L.Map){var e=this.map.layerPointToLatLng(L.point(t.left,t.top)),i=this.map.layerPointToLatLng(L.point(t.right,t.bottom));return new SuperMap.Bounds(e.lng,i.lat,i.lng,e.lat)}}},{key:"calAssistantLine",value:function(){var t=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints);this.symbolType===SuperMap.Plot.SymbolType.ANNOFRAMESYMBOL&&(t.splice(1,0,new SuperMap.Plot.Point(this.controlPoints[1].x,this.controlPoints[0].y)),t.push(new SuperMap.Plot.Point(this.controlPoints[0].x,this.controlPoints[1].y)),t.push(new SuperMap.Plot.Point(this.controlPoints[0].x,this.controlPoints[0].y)));var e={type:24,surroundLineFlag:!1,positionPoints:t,style:{color:"#0000ff",opacity:1,weight:1,dashArray:"5, 5",strokeColor:"#0000ff",strokeOpacity:1,strokeWidth:2,strokeDashstyle:"dash",lineColorLimit:!0,lineTypeLimit:!0,lineWidthLimit:!0,surroundLineFlag:!1}};this.components.push(e)}},{key:"getSubSymbolScaleValue",value:function(t){void 0===t&&(t=.3);var e=this.getControlPoints();if(!this.getIsEdit()||this.constantSize){for(var i=0,o=0;o<e.length-1;o++)i+=SuperMap.Plot.PlottingUtil.distance(e[o],e[o+1]);var n=this.getDefaultSubSymbolSize();this.subSymbolScaleValue=n/i,this.constantSize||(this.subSymbolScaleValue>t||this.subSymbolScaleValue<=0)&&(this.subSymbolScaleValue=t),this.subSymbolScaleValue<=0&&(this.subSymbolScaleValue=t)}return this.subSymbolScaleValue}},{key:"modifyPoint",value:function(t,e){if(this.controlPoints=this.getControlPoints(),0===this.libID&&31===this.code){if(0===t)return this.controlPoints[0].x=(this.controlPoints[1].x+this.controlPoints[3].x)/2,void(this.controlPoints[0].y=(this.controlPoints[1].y+this.controlPoints[3].y)/2);var i=-1;0===(i=(t+2)%4)&&(i=4);var o=SuperMap.Plot.PlottingUtil.distance(this.controlPoints[0],this.controlPoints[t]),n=SuperMap.Plot.PlottingUtil.findPointInLine(this.controlPoints[0],this.controlPoints[i],o),s=new SuperMap.Geometry.Point(2*this.controlPoints[0].x-n.x,2*this.controlPoints[0].y-n.y);if(L.Map&&this.map instanceof L.Map)var a=this.map.latLngToLayerPoint(L.latLng(n.y,n.x)),l=this.map.latLngToLayerPoint(L.latLng(s.y,s.x));var r=!1;(SuperMap.Plot.PlottingUtil.equalFuzzy(a.x-l.x,0)||SuperMap.Plot.PlottingUtil.equalFuzzy(a.y-l.y,0))&&(r=!0),r?(this.addControlPoints(s,i),this.addControlPoints(n,t)):(this.addControlPoints(s,t),this.addControlPoints(n,i))}this.calculateParts()}},{key:"computeSubSymbol",value:function(t,e,i,o,n,s){if(null===t.symbolData||null===t.symbolData.innerCells)return null;void 0===n&&(n=0),void 0===s&&(s=0);for(var a=SuperMap.Plot.AnalysisSymbol.analysisSymbolCells(t.symbolData),l=0,r=0,u=0,p=0,h=0;h<a.length;h++){var c=SuperMap.Plot.Primitives.getSpatialData(a[h].type,a[h].positionPoints,a[h].textContent,0,a[h].isCalculate);for(m=0,b=c.length;m<b;m++)l<c[m].x&&(l=c[m].x),r<c[m].y&&(r=c[m].y),u>c[m].x&&(u=c[m].x),p>c[m].y&&(p=c[m].y)}var y=new SuperMap.Geometry.Point(l,r),g=new SuperMap.Geometry.Point(u,p),d=(y.y-g.y)/i,f=(y.x-g.x)/i,S=f>d?f:d,P=new SuperMap.Geometry.Point(.5*(y.x+g.x),.5*(y.y+g.y));P.x+=n*(y.x-g.x),P.y+=s*(y.y-g.y);for(var m=0,b=a.length;m<b;m++){for(var L=0,M=a[m].positionPoints.length;L<M;L++)a[m].positionPoints[L].x-=P.x,a[m].positionPoints[L].y-=P.y,a[m].positionPoints[L].x/=S,a[m].positionPoints[L].y/=S,SuperMap.Plot.PlottingUtil.rotateAngle(new SuperMap.Geometry.Point(0,0),o*Math.PI/180,a[m].positionPoints[L]),a[m].positionPoints[L].x+=e.x,a[m].positionPoints[L].y+=e.y;a[m].type===SuperMap.Plot.SymbolType.TEXTSYMBOL&&(a[m].style.fontSize=Math.ceil(a[m].style.fontSize/2)),c.style=a[m].style,a[m].isCalculate=!1,this.components.push(a[m])}return a}},{key:"addArrow",value:function(t){if(t.length<2)return t;var e=0,i=SuperMap.Plot.PlottingUtil.polylineDistance(this.controlPoints)*(e=(this.getIsEdit(),.5*this.getSubSymbolScaleValue())),o=t[t.length-1];if(t.length>2){for(var n=-1,s=t.length-2;s>=0;s--)if(i<SuperMap.Plot.PlottingUtil.distance(o,t[s])){n=s;break}t.splice(n+1,t.length-n),t.push(o)}this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,t);var a=t[t.length-2],l=t[t.length-1],r=i;if(void 0===a)return t;if(!(SuperMap.Plot.PlottingUtil.distance(a,l)<i)){var u=SuperMap.Plot.PlottingUtil.radian(a,l)*this.RTOD,p=SuperMap.Plot.PlottingUtil.circlePoint(l,r,r,u+157.5),h=SuperMap.Plot.PlottingUtil.circlePoint(l,r,r,u+202.5),c={surroundLineFlag:!1,fillLimit:!0,fillColor:this.getStyle().color,lineTypeLimit:!0,fill:!0};this.addCell(SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,[p,t[t.length-1],h],c,!0)}}},{key:"calculateforHead",value:function(t,e,i,o){for(var n=0,s=0;s<t.length-1;s++)n+=SuperMap.Plot.PlottingUtil.distance(t[s],t[s+1]);for(var a=n*o,l=SuperMap.Plot.PlottingUtil.clonePoints(e.arrowBodyPts);SuperMap.Plot.PlottingUtil.distance(i[0],i[1])<a&&!(l.length<3);){if(!(SuperMap.Plot.PlottingUtil.distance(i[0],l[l.length-3])<a)){var r=SuperMap.Plot.PlottingUtil.projectPoint(i[0],l[l.length-2],l[l.length-3]),u=SuperMap.Plot.PlottingUtil.distance(i[0],r),p=SuperMap.Plot.PlottingUtil.findPointInLine(r,l[l.length-3],Math.sqrt(a*a-u*u));l.splice(l.length-2,1,p),i.splice(1,1,p);break}i.splice(1,1),l.splice(l.length-2,1),i.push(l[l.length-2])}return l}},{key:"ComputeZValue",value:function(t,e,i){var o=SuperMap.Plot.PlottingUtil.pointProjectToSegment(t,e,i),n=new SuperMap.Geometry.Point(o.projectPoint.x,o.projectPoint.y),s=SuperMap.Plot.PlottingUtil.distance(e,i),a=SuperMap.Plot.PlottingUtil.distance(e,t),l=SuperMap.Plot.PlottingUtil.distance(i,t);if(!o.isOnline){if(a>=s)return i.z;if(l>=s)return e.z}return n.x!=e.x&&e.x!=i.x?e.z+(n.x-e.x)/(e.x-i.x)*(e.z-i.z):n.y!=e.y&&e.y!=i.y?e.z+(n.y-e.y)/(e.y-i.y)*(e.z-i.z):0==(a=SuperMap.Plot.PlottingUtil.distance(e,n))?e.z:e.z-(e.z-i.z)*(a/s)}},{key:"ComputeBeizerZValueByDis",value:function(t,e,i){if(t.length<2)return!1;for(var o=[],n=0;n<t.length;n++)o.push({x:t[n].x,y:t[n].y});var s=SuperMap.Plot.PlottingUtil.polylineDistance(o);if(0==s)return!1;var a=SuperMap.Plot.PlottingUtil.polylineDistance(e),l=[];l.push(o[0]);for(var r=-1,u=0,p=e[0],n=1;n<o.length;n++){l.push(o[n]);var h=SuperMap.Plot.PlottingUtil.polylineDistance(l)/s,c=a*h,y=SuperMap.Plot.PlottingUtil.getPtsIndexByDistance(c,e),g=y.index,d=y.pts;if(y.bfind){for(var f=t[n-1].z,S=t[n].z,P=a*(h-u),m=0,b=++r;b<=g;b++){var L=f+(S-f)*((m+=b==r?SuperMap.Plot.PlottingUtil.distance(p,e[b]):SuperMap.Plot.PlottingUtil.distance(e[b-1],e[b]))/P);i.push({x:e[b].x,y:e[b].y,z:L})}r=g}u=h,p=d}for(n=r+1;n<e.length;n++)i.push({x:e[n].x,y:e[n].y,z:t[t.length-1].z});return!0}},{key:"ComputeHeight",value:function(t,e,i,o){if(i!=o)if(0==t.length);else if(1==t.length)e.push({x:t[0].x,y:t[0].y,z:i});else if(2==t.length)e.push({x:t[0].x,y:t[0].y,z:i}),e.push({x:t[1].x,y:t[1].y,z:o});else{var n=SuperMap.Plot.PlottingUtil.polylineDistance(t);if(0!=n){var s=[];s.push(t[0]),e.push({x:t[0].x,y:t[0].y,z:i});for(l=1;l<t.length-1;l++){s.push(t[l]);var a=i+(o-i)*SuperMap.Plot.PlottingUtil.polylineDistance(s)/n;e.push({x:t[l].x,y:t[l].y,z:a})}e.push({x:t[t.length-1].x,y:t[t.length-1].y,z:o})}else for(l=0;l<t.length;l++)e.push({x:t[l].x,y:t[l].y,z:i})}else for(var l=0;l<t.length;l++)e.push({x:t[l].x,y:t[l].y,z:i})}}]),t}());e.default=a,SuperMap.Geometry.AlgoSymbol=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.algoSymbol=e.AlgoSymbol=void 0;var o=i(2),n=i(8),s=e.AlgoSymbol=o.GraphicObject.extend({superMapAlgoSymbol:null,scalePoints:null,scaleValues:null,subSymbolScaleValue:null,constantSize:!1,arrowHeadType:0,arrowBodyType:0,arrowTailType:0,initialize:function(t,e,i,n){this.scalePoints=[],this.scaleValues=[],this.symbolType=0===t?e:SuperMap.Plot.SymbolType.ALGOSYMBOL,o.GraphicObject.prototype.initialize.call(this,t,e,i,n),this._setDefaultOptions(n),this._setBasicSymbolName(),this.superMapAlgoSymbol=SuperMap.AlgoSymbolFactory.createAlgo(n),this.superMapAlgoSymbol&&(this.minEditPts=this.superMapAlgoSymbol.minEditPts,this.maxEditPts=this.superMapAlgoSymbol.maxEditPts,this.subSymbols=this.superMapAlgoSymbol.subSymbols,this.scaleValues=this.superMapAlgoSymbol.scaleValues,this.subSymbolScaleValue=this.superMapAlgoSymbol.subSymbolScaleValue,this.superMapAlgoSymbol.style&&(this.style=this.superMapAlgoSymbol.style))},onAdd:function(t){this.superMapAlgoSymbol&&(this.superMapAlgoSymbol.map=t._map),o.GraphicObject.prototype.onAdd.call(this,t)},getArrowHeadType:function(){return this.arrowHeadType},setArrowHeadType:function(t){1016===this.code&&this.arrowHeadType!==t&&(this.arrowHeadType=t,this.redraw())},getArrowTailType:function(){return this.arrowTailType},setArrowTailType:function(t){1016===this.code&&this.arrowTailType!==t&&(this.arrowTailType=t,this.redraw())},getArrowBodyType:function(){return this.arrowBodyType},setArrowBodyType:function(t){1016===this.code&&this.arrowBodyType!==t&&(this.arrowBodyType=t,this.redraw())},setRotate:function(t){this.dRotate=t,0!==this.textContent.length&&(void 0===this.style.labelRotation?this.style.labelRotation=-t:this.style.labelRotation+=-t),null===this.anchorPoint&&(this.anchorPoint=this.getBounds().getCenter()),this._rotate(t,this.anchorPoint),this.symbolType===SuperMap.Plot.SymbolType.CONCENTRICCIRCLE&&this.superMapAlgoSymbol&&(this.superMapAlgoSymbol.startAngle+=t,this.superMapAlgoSymbol.endAngle+=t);for(var e=0,i=this.avoidRegions.length;e<i;e++)L.Util.rotateLatLngs(this.avoidRegions[e].getLatLngs(),this.anchorPoint,t)},getScaleByMap:function(){return this.scaleByMap},setScaleByMap:function(t){this.scaleByMap=t},setSurroundLineType:function(t){this.surroundLineType=t,this.redraw()},setSubSymbol:function(t,e,i){if(null!==i&&void 0!==i||(i=this.libID),e<this.subSymbols.length)this.subSymbols[e].libID=i,this.subSymbols[e].code=t;else{if(this.subSymbols.length!==e)return;this.subSymbols.push(new SuperMap.Plot.SubSymbol(i,t))}if(this.superMapAlgoSymbol){var o=new SuperMap.GetSymbolInfoParameters;o.libID=this.subSymbols[e].libID,o.code=this.subSymbols[e].code,L.supermap.symbolInfoService(this.serverUrl).getSymbolInfo(o,function(t){this.subSymbols[e].symbolData=t.result,this.redraw()},this)}else{var n=new SuperMap.GetSymbolInfoParameters;n.libID=this.libID,n.code=this.code,n.inputPoints=L.Util.latLngsToSuperMapPoints(this.getLatLngs()),n.subSymbols=this.subSymbols,L.supermap.symbolInfoService(this.serverUrl).getSymbolInfo(n,function(t){this.symbolData.innerCells=t.result.innerCells,this.redraw()},this)}},move:function(t,e){if(o.GraphicObject.prototype._move.call(this,t,e),0!==this.scalePoints.length&&L.Util.moveLatLngs(this.scalePoints,t,e),null!==this.symbolData&&this.symbolData.innerCells)for(var i=0;i<this.symbolData.innerCells.length;i++)for(var n=0;n<this.symbolData.innerCells[i].positionPoints.length;n++)this.symbolData.innerCells[i].positionPoints[n].x+=e,this.symbolData.innerCells[i].positionPoints[n].y+=t;if(null!==this.symbolData&&this.symbolData.innerCells)for(s=0;s<this.symbolData.scalePoints.length;s++)this.symbolData.scalePoints[s].x+=e,this.symbolData.scalePoints[s].y+=t;for(var s=0,a=this.avoidRegions.length;s<a;s++)L.Util.moveLatLngs(this.avoidRegions[s].getLatLngs(),t,e);this._updateSymbolTexts()},_parseSymbolData:function(){if(o.GraphicObject.prototype._parseSymbolData.call(this),null!==this.symbolData){if(void 0!==this.symbolData.subSymbolScaleValue&&null!==this.symbolData.subSymbolScaleValue&&(this.subSymbolScaleValue=this.symbolData.subSymbolScaleValue),void 0!==this.symbolData.strokeWidth&&null!==this.symbolData.strokeWidth&&(this.strokeWidth=this.symbolData.strokeWidth),void 0!==this.symbolData.constantSize&&null!==this.symbolData.constantSize&&(this.constantSize=this.symbolData.constantSize),void 0!==this.symbolData.baseScale&&null!==this.symbolData.baseScale&&(this.baseScale=this.symbolData.baseScale),this.symbolData.scaleValues&&0!==this.symbolData.scaleValues.length){this.scaleValues=[];for(var t=0;t<this.symbolData.scaleValues.length;t++)this.scaleValues.push(this.symbolData.scaleValues[t])}this.symbolData.hasOwnProperty("arrowTailType")&&(this.arrowTailType=this.symbolData.arrowTailType),this.symbolData.hasOwnProperty("arrowBodyType")&&(this.arrowBodyType=this.symbolData.arrowBodyType),this.symbolData.hasOwnProperty("arrowHeadType")&&(this.arrowHeadType=this.symbolData.arrowHeadType)}},_setSymbolData:function(t){if(o.GraphicObject.prototype._setSymbolData.call(this,t),null!==this.symbolData&&this.superMapAlgoSymbol){if(this.symbolData.subSymbolScaleValue=this.subSymbolScaleValue,this.symbolData.baseScale=this.baseScale,this.symbolData.strokeWidth=this.strokeWidth,this.symbolData.constantSize=this.constantSize,null!==this.annotationPosition&&void 0!==this.annotationPosition&&(this.symbolData.annotationPosition=this.annotationPosition),this.symbolData.hasOwnProperty("scaleValues")&&null!==this.symbolData.scaleValues)for(var e=0;e<this.scaleValues.length;e++)this.symbolData.scaleValues.length>e?this.symbolData.scaleValues[e]=this.scaleValues[e]:this.symbolData.scaleValues.push(this.scaleValues[e]);else this.symbolData.scaleValues=[],this.symbolData.scaleValues=this.scaleValues;1016===this.code&&(this.symbolData.arrowTailType=this.arrowTailType,this.symbolData.arrowBodyType=this.arrowBodyType,this.symbolData.arrowHeadType=this.arrowHeadType)}},_calculateParts:function(){if("none"!==this.style.display)if(this.textContent&&""!==this.textContent&&"???"!==this.textContent||this.symbolType!==SuperMap.Plot.SymbolType.TEXTSYMBOL||(this.textContent="Test"),0!==this.textContent.length&&0!==this.dRotate&&(void 0===this.style.labelRotation?this.style.labelRotation=-this.dRotate:this.style.labelRotation+=-this.dRotate),this.superMapAlgoSymbol&&0!==this.getLatLngs().length){if(this._sendDataToAlgo(),this.superMapAlgoSymbol.calculateParts(),this._getDatafromAlgo(),this._transSymbolCellsToLayers(this.superMapAlgoSymbol.components),this._setBasicSymbolText(),this.symbolType===SuperMap.Plot.SymbolType.ELLIPSESYMBOL){if(3===this.superMapAlgoSymbol.controlPoints.length){var t=new SuperMap.Geometry.Point(2*this.superMapAlgoSymbol.controlPoints[0].x-this.superMapAlgoSymbol.controlPoints[1].x,2*this.superMapAlgoSymbol.controlPoints[0].y-this.superMapAlgoSymbol.controlPoints[1].y);this.superMapAlgoSymbol.controlPoints.push(t);e=new SuperMap.Geometry.Point(2*this.superMapAlgoSymbol.controlPoints[0].x-this.superMapAlgoSymbol.controlPoints[2].x,2*this.superMapAlgoSymbol.controlPoints[0].y-this.superMapAlgoSymbol.controlPoints[2].y);this.superMapAlgoSymbol.controlPoints.push(e)}else if(5===this.superMapAlgoSymbol.controlPoints.length){var e=new SuperMap.Geometry.Point(2*this.superMapAlgoSymbol.controlPoints[0].x-this.superMapAlgoSymbol.controlPoints[2].x,2*this.superMapAlgoSymbol.controlPoints[0].y-this.superMapAlgoSymbol.controlPoints[2].y);this.superMapAlgoSymbol.controlPoints[4].x=e.x,this.superMapAlgoSymbol.controlPoints[4].y=e.y}this.latLngs=L.Util.superMapPointsToLatLngs(this.superMapAlgoSymbol.controlPoints)}}else!this.superMapAlgoSymbol&&this.getLatLngs().length>=this.minEditPts&&(this._calAccessServerSymbol(),this._setBasicSymbolText())},_calAccessServerSymbol:function(){for(var t=SuperMap.Plot.AnalysisSymbol.analysisSymbolCells(this.symbolData),e=0;e<t.length;e++)t[e].type===SuperMap.Plot.SymbolType.TEXTSYMBOL&&(t[e].style.fontSize*=2);this._transSymbolCellsToLayers(t),this._analysisAlgoBasicInfo(!1),0!==this.symbolData.subSymbols.length&&0===this.subSymbols.length&&this._analysisAlgoBasicInfo(!0)},_analysisAlgoBasicInfo:function(t){if(this.symbolData.scaleValues&&0!==this.symbolData.scaleValues.length){this.scaleValues=[];for(i=0;i<this.symbolData.scaleValues.length;i++)this.scaleValues.push(this.symbolData.scaleValues[i])}if(t&&this.symbolData.subSymbols)for(var e=0;e<this.symbolData.subSymbols.length;e++)this.subSymbols.push(new SuperMap.Plot.SubSymbol(this.symbolData.libID,this.symbolData.subSymbols[e]));if(this.symbolData.scalePoints&&0!==this.symbolData.scalePoints.length){this.scalePoints=[];for(var i=0;i<this.symbolData.scalePoints.length;i++)this.scalePoints.push(L.latLng(this.symbolData.scalePoints[i].y,this.symbolData.scalePoints[i].x))}},_modifyPoint:function(t,e){if(e=new SuperMap.Geometry.Point(e.lng,e.lat),e.isScalePoint=!0,this._isSubSymbolWithinPolygon(e)){if(this._clearComponents(),this._sendDataToAlgo(),this.superMapAlgoSymbol.isEdit=this.isEdit,this.superMapAlgoSymbol.modifyPoint(t,e),this._getDatafromAlgo(),this.symbolType===SuperMap.Plot.SymbolType.ELLIPSESYMBOL){if(this.isCalculate=!1,this.superMapAlgoSymbol.calculateParts(),this._transSymbolCellsToLayers(this.superMapAlgoSymbol.components),this.symbolType===SuperMap.Plot.SymbolType.ELLIPSESYMBOL)for(var i=0;i<this.superMapAlgoSymbol.components.length;i++)this.superMapAlgoSymbol.components[i].isCalculate=this.isCalculate;if(3===this.superMapAlgoSymbol.controlPoints.length){var o=new SuperMap.Geometry.Point(2*this.superMapAlgoSymbol.controlPoints[0].x-this.superMapAlgoSymbol.controlPoints[1].x,2*this.superMapAlgoSymbol.controlPoints[0].y-this.superMapAlgoSymbol.controlPoints[1].y);this.superMapAlgoSymbol.controlPoints.push(o);n=new SuperMap.Geometry.Point(2*this.superMapAlgoSymbol.controlPoints[0].x-this.superMapAlgoSymbol.controlPoints[2].x,2*this.superMapAlgoSymbol.controlPoints[0].y-this.superMapAlgoSymbol.controlPoints[2].y);this.superMapAlgoSymbol.controlPoints.push(n)}else if(5===this.superMapAlgoSymbol.controlPoints.length){var n=new SuperMap.Geometry.Point(2*this.superMapAlgoSymbol.controlPoints[0].x-this.superMapAlgoSymbol.controlPoints[2].x,2*this.superMapAlgoSymbol.controlPoints[0].y-this.superMapAlgoSymbol.controlPoints[2].y);this.superMapAlgoSymbol.controlPoints[4].x=n.x,this.superMapAlgoSymbol.controlPoints[4].y=n.y}this.latLngs=L.Util.superMapPointsToLatLngs(this.superMapAlgoSymbol.controlPoints)}else this._transSymbolCellsToLayers(this.superMapAlgoSymbol.components);this._calculateAvoidRegions()}},_isSubSymbolWithinPolygon:function(t){if(123!==this.libID)return!0;switch(this.code){case 3002002:case 3002004:case 3002005:return SuperMap.Plot.PlottingUtil.ptIsInPolygon(this.superMapAlgoSymbol.controlPoints,t)}},_reView:function(){if(void 0!==this.prevStrokeWidth&&this.prevStrokeWidth!==this.style.weight&&(this.strokeWidth=this.style.weight),this.fromZoom!==this._map.getZoom()){var t=this.getBounds();if(!0===this.isEdit&&t.isValid()){var e=this._map.getZoomScale(this._map.getZoom(),this.fromZoom);if(this.dScale*=e,void 0!==this.strokeWidth&&null!==this.strokeWidth||(this.strokeWidth=this.style.weight),void 0===this.baseScale){var i=Math.abs(t.getEast()-t.getWest()),o=Math.abs(t.getNorth()-t.getSouth());i<o&&(i=o);var s=this.strokeWidth/.5*5,a=this._map.layerPointToLatLng(L.point(0,0)),l=this._map.layerPointToLatLng(L.point(s,0)),r=Math.sqrt((a.lat-l.lat)*(a.lat-l.lat)+(a.lng-l.lng)*(a.lng-l.lng));this.baseScale=r/i}if(this.dScale<=this.baseScale){this.scaleStrokeWidth=!0;var s=this.strokeWidth/.5*5,u=this.dScale*s/this.baseScale;this.style.weight=Math.round(u/10),this.style.weight>=this.strokeWidth&&(this.style.weight=this.strokeWidth),this.style.weight<=.5&&(this.style.weight=.5)}else!0===this.scaleStrokeWidth&&(this.style.weight=this.strokeWidth,this.scaleStrokeWidth=!1),this.strokeWidth=this.style.weight;this.prevStrokeWidth=this.style.weight,this.textContent.length>0&&(this.style.fontSize*=e);for(var p in this.components)this.components[p]instanceof n.Text&&(this.components[p].options.fontSize*=e),this.layer._map.getRenderer(this.layer)instanceof L.Canvas&&(!0!==this.components[p].options.fill||"LINEAR"!==this.style.fillGradientMode&&"RADIAL"!==this.style.fillGradientMode||this._computeGradientInCanvas(this.components[p],this.components[p].options,this.style));22!==this.libID||1012!==this.code&&1013!==this.code&&1014!==this.code&&1015!==this.code||(this.dScale>=1?(this.constantSize=!0,this.redraw()):this.constantSize=!1),this._updateSymbolTexts(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues)}this.fromZoom=this._map.getZoom(),1!==this.surroundLineType&&2!==this.surroundLineType||this.redraw(),0!==this.avoidRegions.length&&this.redraw(),this.symbolType===SuperMap.Plot.SymbolType.TEXTSYMBOL&&this.isSelected&&this._map.getPlotEditControl()&&this._map.getPlotEditControl().fire(SuperMap.Plot.Event.featuresmodified,{features:[this]})}},_rotate:function(t,e){if(this.symbolType===SuperMap.Plot.SymbolType.TEXTSYMBOL)for(var i in this.components)this.components[i].options.labelRotation=this.style.labelRotation,this.components[i].redraw();else{L.Util.rotateLatLngs(this.getLatLngs(),e,t),L.Util.rotateLatLngs(this.scalePoints,e,t);Math.PI;var o=new SuperMap.Geometry.Point(e.lng,e.lat);if(SuperMap.AlgoSymbolFactory.isAccessServer(this.libID,this.code)){var n=new SuperMap.GetSymbolInfoParameters;n.libID=this.libID,n.code=this.code,n.inputPoints=L.Util.latLngsToSuperMapPoints(this.getLatLngs()),n.scaleValues=this.scaleValues,n.subSymbols=this.subSymbols,L.supermap.symbolInfoService(this.serverUrl).getSymbolInfo(n,function(t){this.symbolData.innerCells=t.result.innerCells,this.symbolData.scalePoints=t.result.scalePoints,this.symbolData.scaleValues=t.result.scaleValues,this.redraw(),this._updateSymbolTexts()},this)}else if(this.superMapAlgoSymbol){for(var s=0;s<this.superMapAlgoSymbol.controlPoints.length;s++)this.superMapAlgoSymbol.controlPoints[s]=SuperMap.Plot.PlottingUtil.rotateAngle(o,t,this.superMapAlgoSymbol.controlPoints[s]);for(var a=0;a<this.superMapAlgoSymbol.scalePoints.length;a++)this.superMapAlgoSymbol.scalePoints[a]=SuperMap.Plot.PlottingUtil.rotateAngle(o,t,this.superMapAlgoSymbol.scalePoints[a])}this.redraw(),this._updateSymbolTexts()}},_resize:function(t,e){o.GraphicObject.prototype._resize.call(this,t,e);var i=new SuperMap.Geometry.Point(e.lng,e.lat);if(this.superMapAlgoSymbol){for(var n=0;n<this.superMapAlgoSymbol.controlPoints.length;n++)SuperMap.Plot.PlottingUtil.resize(i,t,this.superMapAlgoSymbol.controlPoints[n]);for(a=0;a<this.superMapAlgoSymbol.scalePoints.length;a++)SuperMap.Plot.PlottingUtil.resize(i,t,this.superMapAlgoSymbol.scalePoints[a]);this._getDatafromAlgo()}else{for(var s=0;s<this.symbolData.innerCells.length;s++)for(var a=0;a<this.symbolData.innerCells[s].positionPoints.length;a++){var l=new SuperMap.Geometry.Point(this.symbolData.innerCells[s].positionPoints[a].x,this.symbolData.innerCells[s].positionPoints[a].y);SuperMap.Plot.PlottingUtil.resize(i,t,l),this.symbolData.innerCells[s].positionPoints[a].x=l.x,this.symbolData.innerCells[s].positionPoints[a].y=l.y}for(var r=0;r<this.symbolData.scalePoints.length;r++){var u=new SuperMap.Geometry.Point(this.symbolData.scalePoints[r].x,this.symbolData.scalePoints[r].y);SuperMap.Plot.PlottingUtil.resize(i,t,u),this.symbolData.scalePoints[r].x=u.x,this.symbolData.scalePoints[r].y=u.y}}},_setDefaultOptions:function(t){t.libID=this.libID,t.code=this.code,t.controlPoints=L.Util.latLngsToSuperMapPoints(this.latLngs),t.surroundLineType=this.surroundLineType,t.subSymbols=this.subSymbols,t.scaleValues=this.scaleValues,t.textContent=this.textContent,t.subSymbolScaleValue=this.subSymbolScaleValue,t.constantSize=this.constantSize,t.isEdit=this.isEdit,t.style=this.style,t.symbolName=this.symbolName,1016===this.code&&(t.arrowHeadType=this.arrowHeadType,t.arrowBodyType=this.arrowBodyType,t.arrowTailType=this.arrowTailType)},_sendDataToAlgo:function(){this.superMapAlgoSymbol.controlPoints=L.Util.latLngsToSuperMapPoints(this.getLatLngs()),this.superMapAlgoSymbol.subSymbols=this.subSymbols,this.superMapAlgoSymbol.scaleValues=this.scaleValues,this.superMapAlgoSymbol.textContent=this.textContent,this.superMapAlgoSymbol.subSymbolScaleValue=this.subSymbolScaleValue,this.superMapAlgoSymbol.constantSize=this.constantSize,1016===this.code&&(this.superMapAlgoSymbol.arrowHeadType=this.arrowHeadType,this.superMapAlgoSymbol.arrowBodyType=this.arrowBodyType,this.superMapAlgoSymbol.arrowTailType=this.arrowTailType)},_getDatafromAlgo:function(){this.subSymbols=this.superMapAlgoSymbol.subSymbols,this.scalePoints=L.Util.superMapPointsToLatLngs(this.superMapAlgoSymbol.scalePoints),this.scaleValues=this.superMapAlgoSymbol.scaleValues,this.subSymbolScaleValue=this.superMapAlgoSymbol.subSymbolScaleValue,this.superMapAlgoSymbol.annotationPosition&&(this.annotationPosition=this.superMapAlgoSymbol.annotationPosition)},_setBasicSymbolName:function(){if(0===this.libID)switch(this.code){case SuperMap.Plot.SymbolType.TEXTSYMBOL:this.symbolName="文本";break;case SuperMap.Plot.SymbolType.CIRCLESYMBOL:this.symbolName="圆";break;case SuperMap.Plot.SymbolType.RECTANGLESYMBOL:this.symbolName="矩形";break;case SuperMap.Plot.SymbolType.ARCSYMBOL:this.symbolName="弧线";break;case SuperMap.Plot.SymbolType.CHORDSYMBOL:this.symbolName="弓形";break;case SuperMap.Plot.SymbolType.PIESYMBOL:this.symbolName="扇形";break;case SuperMap.Plot.SymbolType.ELLIPSESYMBOL:this.symbolName="椭圆";break;case SuperMap.Plot.SymbolType.PARALLELOGRAM:this.symbolName="平行四边形";break;case SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL:this.symbolName="多边形";break;case SuperMap.Plot.SymbolType.POLYLINESYMBOL:this.symbolName="折线";break;case SuperMap.Plot.SymbolType.POLYBEZIERSYMBOL:this.symbolName="贝赛尔曲线";break;case SuperMap.Plot.SymbolType.POLYBEZIERCLOSESYMBOL:this.symbolName="闭合贝塞尔曲线";break;case SuperMap.Plot.SymbolType.PARALLELLINE:this.symbolName="平行线";break;case SuperMap.Plot.SymbolType.KIDNEY:this.symbolName="集结地";break;case SuperMap.Plot.SymbolType.ANNOFRAMESYMBOL:this.symbolName="注记指示框";break;case SuperMap.Plot.SymbolType.ARROWLINE:this.symbolName="箭头线";break;case SuperMap.Plot.SymbolType.COMBINATIONALCIRCLE:this.symbolName="组合圆";break;case SuperMap.Plot.SymbolType.CONCENTRICCIRCLE:this.symbolName="同心圆";break;case SuperMap.Plot.SymbolType.CURVEEIGHT:this.symbolName="八字形";break;case SuperMap.Plot.SymbolType.FREECURVE:this.symbolName="自由线";break;case SuperMap.Plot.SymbolType.ANNOFRAMESYMBOLM:this.symbolName="多角标注框";break;case SuperMap.Plot.SymbolType.LINEMARKING:this.symbolName="线型标注";break;case SuperMap.Plot.SymbolType.LINERELATION:this.symbolName="对象间连线";break;case SuperMap.Plot.SymbolType.NODECHAIN:this.symbolName="节点链";break;case SuperMap.Plot.SymbolType.PATHTEXT:this.symbolName="沿线注记";break;case SuperMap.Plot.SymbolType.POLYGONREGION:this.symbolName="多边形区域管理";break;case SuperMap.Plot.SymbolType.RUNWAY:this.symbolName="跑道线";break;case SuperMap.Plot.SymbolType.SYMBOLTEXTBOX:this.symbolName="标注框";break;case SuperMap.Plot.SymbolType.REGULARPOLYGON:this.symbolName="正多边形";break;case SuperMap.Plot.SymbolType.BRACESYMBOL:this.symbolName="大括号";break;case SuperMap.Plot.SymbolType.TRAPEZOIDSYMBOL:this.symbolName="梯形"}else if(421===this.libID)switch(this.code){case 311:this.symbolName="进攻方向";break;case 315:this.symbolName="突击";break;case 317:this.symbolName="钳击"}else{var t=L.supermap.plotting.getControl(this._map,this.serverUrl).getSymbolLibManager();this.symbolName=t.getSymbolName(this.libID,this.code)}},getTextContent:function(){return this.textContent},_setBasicSymbolText:function(){if(0===this.libID&&this.code===SuperMap.Plot.SymbolType.CIRCLESYMBOL||this.code===SuperMap.Plot.SymbolType.RECTANGLESYMBOL||this.code===SuperMap.Plot.SymbolType.ARCSYMBOL||this.code===SuperMap.Plot.SymbolType.CHORDSYMBOL||this.code===SuperMap.Plot.SymbolType.PIESYMBOL||this.code===SuperMap.Plot.SymbolType.ELLIPSESYMBOL||this.code===SuperMap.Plot.SymbolType.PARALLELOGRAM||this.code===SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL||this.code===SuperMap.Plot.SymbolType.POLYLINESYMBOL||this.code===SuperMap.Plot.SymbolType.POLYBEZIERSYMBOL||this.code===SuperMap.Plot.SymbolType.POLYBEZIERCLOSESYMBOL||this.code===SuperMap.Plot.SymbolType.PARALLELLINE||this.code===SuperMap.Plot.SymbolType.KIDNEY||this.code===SuperMap.Plot.SymbolType.REGULARPOLYGON||this.code===SuperMap.Plot.SymbolType.TRAPEZOIDSYMBOL){this.textContent=SuperMap.PlotUtil.trim(this.textContent);var t=this.getBounds();if(this.textContent&&null!==this.textContent&&0!==this.textContent.length&&null!==t&&t.isValid()){var e=L.latLng((t.getSouth()+t.getNorth())/2,(t.getEast()+t.getWest())/2),i=SuperMap.PlotUtil.cloneObject(this.style);i.surroundLineFlag=!1,i.labelAlign="cm",i.fontSize=this.style.fontSize,i.fontSizeLimit=!1;this._createAndDrawLayer(34,[e],i,this.textContent)}}}}),a=e.algoSymbol=function(t,e,i,o){return new s(t,e,i,o)};L.supermap.plotting.algoSymbol=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.GraphicObject=void 0;var o=i(4),n=i(8),s=i(39),a=e.GraphicObject=o.PlottingObject.extend({surroundLineType:null,scaleByMap:null,latLngs:[],initialize:function(t,e,i,n){this.geoSymbolTexts=[],this.subAssociatedUuids=[],this.latLngs=i||[],o.PlottingObject.prototype.initialize.call(this,t,e,i,n),null===this.surroundLineType&&(this.surroundLineType=SuperMap.Plot.AlgoSurroundLineType.NONE)},destroy:function(){o.PlottingObject.prototype.destroy.call(this),this.surroundLineType=null,this.scaleByMap=null,this.latLngs=[]},setLatLngs:function(t){return this.latLngs=t,this.redraw()},getLatLngs:function(){return this.latLngs},addLatLng:function(t){if(this.latLngs[this.latLngs.length-1].lat!==t.lat||this.latLngs[this.latLngs.length-1].lng!==t.lng)return this.latLngs.push(t),this.redraw()},setScaleByMap:function(t){this.scaleByMap=t},getScaleByMap:function(){return this.scaleByMap},getSurroundLineType:function(){return this.surroundLineType},setSurroundLineType:function(t){},_resizeLatLngs:function(t,e,i,o){if(this.symbolType!==SuperMap.Plot.SymbolType.SATELLITETIMEWINDOWS){var n=this._resizeBounds(t,e,i);if(!(SuperMap.Plot.PlottingUtil.equalFuzzy(n.getWest(),n.getEast())&&SuperMap.Plot.PlottingUtil.equalFuzzy(n.getNorth(),n.getSouth())||SuperMap.Plot.PlottingUtil.equalFuzzy(i.getWest(),i.getEast())&&SuperMap.Plot.PlottingUtil.equalFuzzy(i.getNorth(),i.getSouth()))){var s=SuperMap.Plot.PlottingUtil.equalFuzzy(i.getWest(),i.getEast())?0:(n.getEast()-n.getWest())/(i.getEast()-i.getWest()),a=SuperMap.Plot.PlottingUtil.equalFuzzy(i.getNorth(),i.getSouth())?0:(n.getNorth()-n.getSouth())/(i.getNorth()-i.getSouth()),l=L.latLng((i.getNorth()+i.getSouth())/2,(i.getWest()+i.getEast())/2),r=L.latLng((n.getNorth()+n.getSouth())/2,(n.getWest()+n.getEast())/2);if(this.symbolType===SuperMap.Plot.SymbolType.ANNOFRAMESYMBOL||this.symbolType===SuperMap.Plot.SymbolType.ANNOFRAMESYMBOLM||this.symbolType===SuperMap.Plot.SymbolType.SYMBOLTEXTBOX||this.symbolType===SuperMap.Plot.SymbolType.LINEMARKING)this.latLngs[0].lng=r.lng+(o[0].lng-l.lng)*s,this.latLngs[0].lat=r.lat+(o[0].lat-l.lat)*a,this.latLngs[1].lng=r.lng+(o[1].lng-l.lng)*s,this.latLngs[1].lat=r.lat+(o[1].lat-l.lat)*a;else for(var u=0;u<o.length;u++)this.latLngs[u].lng=r.lng+(o[u].lng-l.lng)*s,this.latLngs[u].lat=r.lat+(o[u].lat-l.lat)*a}}},_getLatLng:function(t,e,i){var o=0,n=0;switch(t){case 1:o=e.getWest()+i.lng,n=e.getNorth()+i.lat;break;case 3:o=e.getEast()+i.lng,n=e.getNorth()+i.lat;break;case 6:o=e.getWest()+i.lng,n=e.getSouth()+i.lat;break;case 8:o=e.getEast()+i.lng,n=e.getSouth()+i.lat;break;case 2:o=(e.getEast()+e.getWest())/2,n=e.getNorth()+i.lat;break;case 4:o=e.getWest()+i.lng,n=(e.getNorth()+e.getSouth())/2;break;case 5:o=e.getEast()+i.lng,n=(e.getNorth()+e.getSouth())/2;break;case 7:o=(e.getEast()+e.getWest())/2,n=e.getSouth()+i.lat}return L.latLng(n,o)},_setSymbolData:function(t){if(o.PlottingObject.prototype._setSymbolData.call(this,t),this.symbolData){SuperMap.Plot.AnalysisSymbol.setStyle(this.style,this.symbolData),this.symbolData.scaleByMap=this.scaleByMap,this.symbolData.surroundLineType=this.surroundLineType,this.symbolData.algoMaxEditPts=this.maxEditPts,this.symbolData.algoMinEditPts=this.minEditPts,this.symbolData.hasOwnProperty("localePoints")||(this.symbolData.localePoints=[]);var e=this.getLatLngs().length;this.symbolType===SuperMap.Plot.SymbolType.ELLIPSESYMBOL&&(e=3);for(var i=0;i<e;i++)this.symbolData.localePoints.length>i?(this.symbolData.localePoints[i].x=this.getLatLngs()[i].lng,this.symbolData.localePoints[i].y=this.getLatLngs()[i].lat):this.symbolData.localePoints.push({x:this.getLatLngs()[i].lng,y:this.getLatLngs()[i].lat,z:0})}},_parseSymbolData:function(){if(o.PlottingObject.prototype._parseSymbolData.call(this),null!==this.symbolData&&(this.style=SuperMap.Plot.AnalysisSymbol.getStyle(this.symbolData),this.maxEditPts=this.symbolData.algoMaxEditPts,this.minEditPts=this.symbolData.algoMinEditPts,void 0!==this.symbolData.isEdit&&(this.isEdit=this.symbolData.isEdit),void 0!==this.symbolData.scaleByMap&&(this.scaleByMap=this.symbolData.scaleByMap),this.surroundLineType=this.symbolData.surroundLineType,this.symbolData.localePoints)){this.latLngs=[];for(var t=0;t<this.symbolData.localePoints.length;t++)this.latLngs.push(L.latLng(this.symbolData.localePoints[t].y,this.symbolData.localePoints[t].x))}},_modifyPoint:function(){},_transSymbolCellsToLayers:function(t){for(e=0;e<t.length;e++)1===this.symbolType?t[e].positionPoints=SuperMap.Plot.Primitives.getSpatialData(t[e].type,t[e].positionPoints,t[e].angle,!1):t[e].positionPoints=SuperMap.Plot.Primitives.getSpatialData(t[e].type,t[e].positionPoints,t[e].angle,t[e].isCalculate);0!==t.length&&(this._addFillCells(t),this._addSurroundLineCells(t));for(var e=0;e<t.length;e++)t[e].positionPoints=L.Util.superMapPointsToLatLngs(t[e].positionPoints),this._createAndDrawLayer(t[e].type,t[e].positionPoints,t[e].style,t[e].textContent)},_isPolylineType:function(t){switch(t){case 24:case 44:case 48:case 290:case 400:case 590:return!0;default:return!1}},_createAndDrawLayer:function(t,e,i,o,n){var s=this._createLayer(t,e,o,n);return this._isPolylineType(t)&&(i.fillLimit=!0,i.fill=!1),this._copyStyleForCell(i,this.style,s),L.setOptions(s,i),this._addComponents(s),s},_createLayer:function(t,e,i,o){var n=null;switch(t){case 24:case 44:case 48:case 290:case 400:case 590:n=L.polyline(e,{smoothFactor:0});break;case 29:case 31:case 32:case 28:case 410:case 370:case 380:case 390:case 320:case 321:case 350:case 360:n=L.polygon(e,{smoothFactor:0});break;case 26:n=L.rectangle(e);break;case 34:n=L.supermap.plotting.text(e,{text:i});break;case 2e3:n=L.circle(e[0],o)}return n},_addFillCells:function(t){if(this._isCanFill()){var e=SuperMap.PlotUtil.cloneObject(t[0]);e.type=SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,e.style?(e.style.weight=0,e.style.lineWidthLimit=!0):e.style={surroundLineFlag:!1,weight:0,lineWidthLimit:!0},t.push(e)}},_addSurroundLineCells:function(t){if(this.symbolType!==SuperMap.Plot.SymbolType.DOTSYMBOL){if(this.symbolType===SuperMap.Plot.SymbolType.TEXTSYMBOL)return null;if(this.surroundLineType===SuperMap.Plot.AlgoSurroundLineType.NONE)return null;if(this.style.lineWidthLimit&&0===this.style.weight)return null;var e=[],i=0,o=[],n={},s={},a={},l={};if(this.surroundLineType===SuperMap.Plot.AlgoSurroundLineType.INNER||this.surroundLineType===SuperMap.Plot.AlgoSurroundLineType.OUT){var r=this.surroundLineType===SuperMap.Plot.AlgoSurroundLineType.OUT?1:-1,u=this.style.surroundLineWidth/2+this.style.weight/2,p=this._map.layerPointToLatLng(L.point(0,0)),h=this._map.layerPointToLatLng(L.point(u,0)),c=new SuperMap.Geometry.Point(p.lng,p.lat),y=new SuperMap.Geometry.Point(h.lng,h.lat);i=SuperMap.Plot.PlottingUtil.distance(c,y)}n={surroundLineFlag:!0,fill:!1,fillLimit:!0,fillColorLimit:!0};for(var g=0,d=t.length;g<d;g++)if(0!==t[g].style.weight&&t[g].type!==SuperMap.Plot.SymbolType.TEXTSYMBOL){if(this.surroundLineType===SuperMap.Plot.AlgoSurroundLineType.INNER||this.surroundLineType===SuperMap.Plot.AlgoSurroundLineType.OUT){var f=SuperMap.Plot.PlottingUtil.innerOutlineDir(t[g].positionPoints)*r*i;if(this._isPolylineType(t[g].type)||t[g].positionPoints.push(t[g].positionPoints[0]),0===(e=SuperMap.Plot.PlottingUtil.getSurroundLinePts(t[g].positionPoints,f)).length)continue;s={type:t[g].type,positionPoints:e,style:n},t.splice(++g,0,s),++d}if(this.surroundLineType===SuperMap.Plot.AlgoSurroundLineType.ALL){if(0===(e=SuperMap.Plot.PlottingUtil.clonePoints(t[g].positionPoints)).length)continue;if(s={type:t[g].type,positionPoints:e,style:n},t.splice(++g,0,s),++d,0===(o=SuperMap.Plot.PlottingUtil.clonePoints(t[g].positionPoints)).length)continue;l={surroundLineFlag:!1,fill:!1,fillLimit:!0,fillColorLimit:!0},a={type:t[g].type,positionPoints:o,style:l},t.splice(++g,0,a),++d}}}},_isCanFill:function(){if(22===this.libID)switch(this.code){case 1001:case 1002:case 1004:case 1006:case 1011:return!0;default:return!1}else if(100===this.libID)switch(this.code){case 25200:return!0;default:return!1}else if(421===this.libID)switch(this.code){case 311:case 317:case 318:return!0;default:return!1}else{if(123!==this.libID)return!1;switch(this.code){case 30025:case 3002501:case 30026:return!0;default:return!1}}},_updateSymbolTexts:function(){for(var t=0;t<this.geoSymbolTexts.length;t++){var e=this.geoSymbolTexts[t];if(null===e||void 0===e)return;e.style.display=this.style.display,e.redraw()}},_rotate:function(t,e){for(var i in this.components)this.components[i]instanceof a?this.components[i]._rotate(t,e):(this.components[i]instanceof s.PointImage&&(this.components[i].options.rotation+=-t),this.components[i]instanceof n.Text&&(this.components[i].options.labelRotation?(this.components[i].options.labelRotation+=-t,this.symbolType===SuperMap.Plot.SymbolType.DOTSYMBOL&&0===this.components[i].options.labelRotation&&(this.components[i].options.labelRotation=360)):this.components[i].options.labelRotation=-t),L.Util.rotateLatLngs(this.components[i].getLatLngs(),e,t),this.components[i].setLatLngs(this.components[i].getLatLngs()));L.Util.rotateLatLngs(this.getLatLngs(),e,t)},_move:function(t,e){for(var i=0,o=this.components.length;i<o;i++)L.Util.moveLatLngs(this.components[i].getLatLngs(),t,e),this.components[i].setLatLngs(this.components[i].getLatLngs()),this._renderer instanceof L.Canvas&&(!0!==this.components[i].options.fill||"LINEAR"!==this.style.fillGradientMode&&"RADIAL"!==this.style.fillGradientMode||this._computeGradientInCanvas(this.components[i],this.components[i].options,this.style));L.Util.moveLatLngs(this.getLatLngs(),t,e)},_resize:function(t,e){isNaN(t)&&(t=1),this.symbolType===SuperMap.Plot.SymbolType.TEXTSYMBOL&&(this.style.fontSize*=t);for(var i in this.components)this.components[i]instanceof a?this.components[i]._resize(t,e):(this.components[i]instanceof s.PointImage&&(this.components[i].options.graphicWidth*=t,this.components[i].options.graphicHeight*=t),this.components[i]instanceof n.Text&&(this.components[i].options.fontSize*=t),L.Util.resizeLatLngs(this.components[i].getLatLngs(),e,t),this.components[i].setLatLngs(this.components[i].getLatLngs()));L.Util.resizeLatLngs(this.getLatLngs(),e,t)},_computeGradientInCanvas:function(t,e,i){if(t.getBounds().isValid()){var o=t.getBounds(),n=this._map.latLngToLayerPoint(L.latLng(o.getNorth(),o.getWest())),s=this._map.latLngToLayerPoint(L.latLng(o.getSouth(),o.getEast())),a=this._map.latLngToLayerPoint(o.getCenter()),l=Math.abs(n.x-s.x)>Math.abs(n.y-s.y)?Math.abs(n.x-s.x):Math.abs(n.y-s.y);e.fill=!0,e.fillOpacity=1,"LINEAR"===i.fillGradientMode&&(e.fillColor=this._map.getRenderer(t)._ctx.createLinearGradient(n.x,n.y,s.x,n.y)),"RADIAL"===i.fillGradientMode&&(e.fillColor=this._map.getRenderer(t)._ctx.createRadialGradient(a.x,a.y,0,a.x,a.y,l)),e.fillColor.addColorStop(0,SuperMap.PlotUtil.colorRGBA(i.fillColor,i.fillOpacity)),e.fillColor.addColorStop(1,SuperMap.PlotUtil.colorRGBA(i.fillBackColor,i.fillBackOpacity))}},_computeGradientInSVG:function(t,e,i){this.layer._renderer._container.defs||(this.layer._renderer._container.defs=L.SVG.create("defs"));var o,n,s;"LINEAR"===i.fillGradientMode&&(o=document.getElementById("linearGradient_"+this._leaflet_id)),"RADIAL"===i.fillGradientMode&&(o=document.getElementById("radialGradient_"+this._leaflet_id)),null===o?("LINEAR"===i.fillGradientMode&&((o=L.SVG.create("linearGradient")).setAttributeNS(null,"x1",0),o.setAttributeNS(null,"y1",0),o.setAttributeNS(null,"x2",1),o.setAttributeNS(null,"y2",0),o.setAttributeNS(null,"id","linearGradient_"+this._leaflet_id)),"RADIAL"===i.fillGradientMode&&((o=L.SVG.create("radialGradient")).setAttributeNS(null,"cx",.5),o.setAttributeNS(null,"cy",.5),o.setAttributeNS(null,"fx",.5),o.setAttributeNS(null,"fy",.5),o.setAttributeNS(null,"r",1),o.setAttributeNS(null,"id","radialGradient_"+this._leaflet_id)),(n=L.SVG.create("stop")).setAttributeNS(null,"offset",0),n.setAttributeNS(null,"style","stop-color:"+SuperMap.PlotUtil.colorRGBA(i.fillColor,i.fillOpacity)),(s=L.SVG.create("stop")).setAttributeNS(null,"offset",1),s.setAttributeNS(null,"style","stop-color:"+SuperMap.PlotUtil.colorRGBA(i.fillBackColor,i.fillBackOpacity)),o.appendChild(n),o.appendChild(s),this.layer._renderer._container.defs.appendChild(o),this.layer._renderer._container.appendChild(this.layer._renderer._container.defs)):(o.firstChild.setAttributeNS(null,"style","stop-color:"+SuperMap.PlotUtil.colorRGBA(i.fillColor,i.fillOpacity)),o.lastChild.setAttributeNS(null,"style","stop-color:"+SuperMap.PlotUtil.colorRGBA(i.fillBackColor,i.fillBackOpacity))),e.fill=!0,e.fillOpacity=1,e.fillColor="url(#"+o.id+")"},_copyStyleForCell:function(t,e,i){if(e.display&&"none"===e.display)t.display=e.display;else{if(!0===t.surroundLineFlag)this.surroundLineType===SuperMap.Plot.AlgoSurroundLineType.ALL?t.weight=2*e.surroundLineWidth+e.weight:t.weight=e.surroundLineWidth,t.color=e.surroundLineColor,t.opacity=e.surroundLineColorOpacity,t.dashArray=null;else if(t.lineWidthLimit||(t.weight=e.weight),t.lineColorLimit||(t.color=e.color,t.opacity=e.opacity),!t.lineTypeLimit){if(e.lineSymbolID){e.lineSymbolID=parseInt(e.lineSymbolID);var o=2*e.weight,s=3*e.weight;1===e.lineSymbolID?e.dashArray=[s,o].join(","):2===e.lineSymbolID?e.dashArray=[0,o].join(","):3===e.lineSymbolID?e.dashArray=[s,o,0,o].join(","):4===e.lineSymbolID?e.dashArray=[s,o,0,o,0,o].join(","):e.dashArray=null}t.dashArray=e.dashArray}t.strokeLinecap||void 0===e.strokeLinecap||(t.strokeLinecap=e.strokeLinecap),t.fillLimit||i instanceof n.Text?t.fillColorLimit||(t.fillColor=t.strokeColor,t.fillOpacity=t.strokeOpacity):"LINEAR"===e.fillGradientMode||"RADIAL"===e.fillGradientMode?(this.layer._map.getRenderer(this.layer)instanceof L.Canvas&&this._computeGradientInCanvas(i,t,e),this.layer._map.getRenderer(this.layer)instanceof L.SVG&&this._computeGradientInSVG(i,t,e)):(this._removeGradientNodeInSVG(),t.fill=e.fill,t.fillColor=e.fillColor,t.fillOpacity=e.fillOpacity),t.fontSizeLimit&&!1!==t.fontSizeLimit||(t.fontSize=e.fontSize),t.fontColorLimit&&!1!==t.fontColorLimit||(t.fontColor=e.fontColor),void 0===t.labelAlign&&void 0!==e.labelAlign&&(t.labelAlign=e.labelAlign),void 0===t.labelRotation&&void 0!==e.labelRotation&&(t.labelRotation=e.labelRotation),!0!==t.fontSizeLimit&&!0!==t.fontColorLimit&&(void 0!==e.fontWeight&&(t.fontWeight=e.fontWeight),void 0!==e.fontStyle&&(t.fontStyle=e.fontStyle),void 0!==e.fontStroke&&(t.fontStroke=e.fontStroke),void 0!==!e.fontStrokeColor&&(t.fontStrokeColor=e.fontStrokeColor),void 0!==e.fontStrokeWidth&&(t.fontStrokeWidth=e.fontStrokeWidth),void 0!==e.fontBackground&&(t.fontBackground=e.fontBackground),void 0!==e.fontBackgroundColor&&(t.fontBackgroundColor=e.fontBackgroundColor),void 0!==e.fontShadow&&(t.fontShadow=e.fontShadow),void 0!==e.fontShadowColor&&(t.fontShadowColor=e.fontShadowColor),void 0!==e.fontShadowOffsetX&&(t.fontShadowOffsetX=e.fontShadowOffsetX),void 0!==e.fontShadowOffsetY&&(t.fontShadowOffsetY=e.fontShadowOffsetY),void 0!==e.fontSpace&&(t.fontSpace=e.fontSpace),void 0!==e.fontPercent&&(t.fontPercent=e.fontPercent),void 0!==e.fontFamily&&(t.fontFamily=e.fontFamily),void 0!==e.fontOpacity&&(t.fontOpacity=e.fontOpacity)),"none"===e.display?t.display=e.display:t.display="display",t.graphicWidth<0&&(t.graphicWidth=Math.abs(t.graphicWidth)),t.graphicHeight<0&&(t.graphicHeight=Math.abs(t.graphicHeight)),t.fontSize<0&&(t.fontSize=Math.abs(t.fontSize))}}});L.supermap.plotting.GraphicObject=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.ArrowToolKit=SuperMap.Plot.ArrowToolKit=SuperMap.Plot.ArrowToolKit||{};SuperMap.Plot.ArrowToolKit.ConstValue={MAX_ARRAY_SIZE:128,sv_AtScaleParameter:1.5,sv_AtLenDivAtWidth:1.35,sv_AtWidthDivAwWidth:.5,DUOJIANTOU_TAIL_RATE_1:8,DUOJIANTOU_TAIL_RATE_2:3,DUOJIANTOU_TAIL_RATE_3:.6},SuperMap.Plot.ArrowToolKit.ArrowTailType={ARROWTAIL_NONE:0,ARROWTAIL_LINE:1,ARROWTAIL_CURVE:2,ARROWTAIL_COATTAIL:3,ARROWTAIL_COATTAIL_POLYBODY:4},SuperMap.Plot.ArrowToolKit.ArrowHeadType={ARROWHEAD_POLYLINE:0,ARROWHEAD_TRIANGLE:1,ARROWHEAD_COATTAIL:2,ARROWHEAD_TRIANGLE_SOLID:3,ARROWHEAD_WITH_EAR:4,ARROWHEAD_WITHOUT_EAR:5},SuperMap.Plot.ArrowToolKit.ArrowBodyType={ARROWBODY_POLYLINE:0,ARROWBODY_POLYBEZIER:1,ARROWBODY_PARALLEL:2,ARROWBODY_TRAPEZOID:3,ARROWBODY_MULTIPOLYBEZIER:4},SuperMap.Plot.ArrowToolKit.parallel=function(t,e){var i={};return i.leftParallelPts=[],i.rightParallelPts=[],1===t.length||2===t.length&&t[0].x===t[1].x&&t[0].y===t[1].y?i:(i.leftParallelPts=SuperMap.Plot.PlottingUtil.parallel(t,e),i.rightParallelPts=SuperMap.Plot.PlottingUtil.parallel(t,-e),i)},SuperMap.Plot.ArrowToolKit.trapezoid=function(t,e,i){var o={};if(o.leftParallelPts=[],o.rightParallelPts=[],1===t.length||2===t.length&&t[0].x===t[1].x&&t[0].y===t[1].y)return o;for(var n=0;n<t.length-1;n++){t[n].x===t[n+1].x&&t[n].y===t[n+1].y&&(o.leftParallelPts.push(o.leftParallelPts[o.leftParallelPts.length-1]),o.rightParallelPts.push(o.rightParallelPts[o.rightParallelPts.length-1]));var s=t[n+1];s=SuperMap.Plot.PlottingUtil.rotate(t[n],0,1,s),o.leftParallelPts.push(SuperMap.Plot.PlottingUtil.findPointInLine(t[n],s,e)),s=t[n],s=SuperMap.Plot.PlottingUtil.rotate(t[n+1],0,-1,s),o.leftParallelPts.push(SuperMap.Plot.PlottingUtil.findPointInLine(t[n+1],s,i)),s=t[n+1],s=SuperMap.Plot.PlottingUtil.rotate(t[n],0,-1,s),o.rightParallelPts.push(SuperMap.Plot.PlottingUtil.findPointInLine(t[n],s,e)),s=t[n],s=SuperMap.Plot.PlottingUtil.rotate(t[n+1],0,1,s),o.rightParallelPts.push(SuperMap.Plot.PlottingUtil.findPointInLine(t[n+1],s,i))}return o},SuperMap.Plot.ArrowToolKit.generateArrowBodyShapePts=function(t,e,i){var o={};switch(i){case SuperMap.Plot.ArrowToolKit.ArrowBodyType.ARROWBODY_PARALLEL:case SuperMap.Plot.ArrowToolKit.ArrowBodyType.ARROWBODY_TRAPEZOID:var n=e[0],s=e[1],a=e[2],l=(e[3],e[4],SuperMap.Plot.PlottingUtil.equalFuzzy(a,0));if(!l&&t.length>2){var r=t.length;t.splice(2,r-2)}var u=SuperMap.Plot.PlottingUtil.polylineDistance(t);SuperMap.Plot.PlottingUtil.distance(t[t.length-2],t[t.length-1]);o.arrowTouLen=u*n;for(var p=SuperMap.Plot.PlottingUtil.findPointInPolyLine(t,u-o.arrowTouLen).pt,h=[],c=o.arrowTouLen*a,y=o.arrowTouLen*s,g=t.length-1,d=0;d<g;d++)h.push(t[d]);h.push(p);var f={};f.leftParallelPts=[],f.rightParallelPts=[],f=!0===l?SuperMap.Plot.ArrowToolKit.parallel(h,y):SuperMap.Plot.ArrowToolKit.trapezoid(h,c,y);var S=t[t.length-1];t[t.length-1]=p,t.push(S);var P=null;return o.leftBodyPts=f.leftParallelPts,o.rightBodyPts=f.rightParallelPts,o.OpectrlPoints=P,o;case SuperMap.Plot.ArrowToolKit.ArrowBodyType.ARROWBODY_MULTIPOLYBEZIER:var m=SuperMap.Plot.PlottingUtil.polylineDistance(t);if(0==m)return;var b=(P=SuperMap.Plot.ArrowToolKit.OperateCtrlPts(t)).length;b--;var L=SuperMap.Plot.ArrowToolKit.generateMultiBezier(P,b,e,m);t=[];for(d=0;d<P.length;d++)t.push(P[d]);o.arrowTouLen=L.arrowTouLen,o.leftBodyPts=L.leftBodyPts,o.rightBodyPts=L.rightBodyPts,o.OpectrlPoints=P}return o},SuperMap.Plot.ArrowToolKit.generateArrowHeadShapePts=function(t,e,i,o,n){var s=[];switch(n){case SuperMap.Plot.ArrowToolKit.ArrowHeadType.ARROWHEAD_WITH_EAR:case SuperMap.Plot.ArrowToolKit.ArrowHeadType.ARROWHEAD_WITHOUT_EAR:var a=i[0],l=i[1],r=0,u=0;3==i.length&&(r=i[2]),4==i.length&&(r=i[2],u=i[3]);var p=0;if(!SuperMap.Plot.PlottingUtil.equalFuzzy(r,0)&&!SuperMap.Plot.PlottingUtil.equalFuzzy(u,0)){var h=SuperMap.Plot.PlottingUtil.clonePoints(t);h.splice(h.length-1,1),p=SuperMap.Plot.PlottingUtil.polylineDistance(h)*r*u}var c=new SuperMap.Geometry.Point((e[0].x+e[1].x)/2,(e[0].y+e[1].y)/2);if(SuperMap.Plot.PlottingUtil.equalFuzzy(l,0)){var y=o*a,g=t[t.length-1];return g=SuperMap.Plot.PlottingUtil.rotate(c,0,1,g),s.push(SuperMap.Plot.PlottingUtil.findPointInLine(c,g,y)),s.push(t[t.length-1]),g=t[t.length-1],g=SuperMap.Plot.PlottingUtil.rotate(c,0,-1,g),s.push(SuperMap.Plot.PlottingUtil.findPointInLine(c,g,y)),s}var d=o*l,f=SuperMap.Plot.PlottingUtil.getExcentrePointOnSegmentByScale(d,c,t[t.length-1]);d=o*a,d+=p;var S=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(d,t[t.length-1],f),P=S.pntLeft,m=S.pntRight,b=t[t.length-1];return s.push(m),s.push(b),s.push(P),s}},SuperMap.Plot.ArrowToolKit.generateArrowBodyShapePtsBySingleLine=function(t,e,i){var o=0,n=[];if(2>t.length)return{arrowHeadLen:o,arrowBodyPts:n};for(var s=0,a=0;a<t.length-1;a++)s+=SuperMap.Plot.PlottingUtil.distance(t[a],t[a+1]);var l=SuperMap.Plot.PlottingUtil.equalFuzzy(e,0);switch(o=s*e,i){case SuperMap.Plot.ArrowToolKit.ArrowBodyType.ARROWBODY_POLYLINE:if(l)n=n.concat(t);else if(-1!==(c=SuperMap.Plot.PlottingUtil.findPointInPolyLine(t,s-o)).index){for(a=0;a<c.index;a++)n.push(t[a]);n.push(c.pt)}break;case SuperMap.Plot.ArrowToolKit.ArrowBodyType.ARROWBODY_POLYBEZIER:if(2==t.length)if(l)n=n.concat(t);else{var r=SuperMap.Plot.PlottingUtil.findPoint(t[1],t[0],o,0);n.push(t[0]),n.push(r)}else{var u=SuperMap.Plot.PlottingUtil.generateBeizerPointsNoCtrlPt(t);if(l)n=n.concat(u);else{for(var p=1.5*o,h=0,a=0;a<u.length-1;a++)h+=SuperMap.Plot.PlottingUtil.distance(u[a],u[a+1]);var c=SuperMap.Plot.PlottingUtil.findPointInPolyLine(u,h-p);if(-1!==c.index){for(a=0;a<c.index;a++)n.push(u[a]);n.push(c.pt)}}}}return{arrowHeadLen:o,arrowBodyPts:n}},SuperMap.Plot.ArrowToolKit.generateArrowHeadShapePtsBySingleLine=function(t,e,i,o,n,s){var a=[];if(2>t)return a;for(var l=0,r=0;r<t.length-1;r++)l+=SuperMap.Plot.PlottingUtil.distance(t[r],t[r+1]);y=l*o;switch(s){case SuperMap.Plot.ArrowToolKit.ArrowHeadType.ARROWHEAD_POLYLINE:var u=SuperMap.Plot.PlottingUtil.findPoint(e[e.length-1],e[e.length-2],y,22.5),p=SuperMap.Plot.PlottingUtil.findPoint(e[e.length-1],e[e.length-2],y,-22.5);a.push(u),a.push(t[t.length-1]),a.push(p);break;case SuperMap.Plot.ArrowToolKit.ArrowHeadType.ARROWHEAD_TRIANGLE:var h=SuperMap.Plot.PlottingUtil.findPointInPolyLine(t,l-n),c=SuperMap.Plot.PlottingUtil.findPoint(i[0],i[1],n,180),y=SuperMap.Plot.PlottingUtil.distance(h.pt,c);y=2*Math.sqrt(y*y/3);var u=SuperMap.Plot.PlottingUtil.findPoint(c,h.pt,y,22.5),p=SuperMap.Plot.PlottingUtil.findPoint(c,h.pt,y,-22.5);a.push(u),a.push(c),a.push(p),a.push(u);break;case SuperMap.Plot.ArrowToolKit.ArrowHeadType.ARROWHEAD_TRIANGLE_SOLID:var g=e[e.length-1],d=e[e.length-2],f=SuperMap.Plot.PlottingUtil.findPoint(g,d,y,0),u=SuperMap.Plot.PlottingUtil.findPoint(g,f,y,22.5),p=SuperMap.Plot.PlottingUtil.findPoint(g,f,y,-22.5);a.push(u),a.push(g),a.push(p),a.push(u);break;case SuperMap.Plot.ArrowToolKit.ArrowHeadType.ARROWHEAD_COATTAIL:var S=e.length,d=e[S-1];y=2*Math.sqrt(y*y/3);var u=SuperMap.Plot.PlottingUtil.findPoint(e[S-1],e[S-2],y,20),p=SuperMap.Plot.PlottingUtil.findPoint(e[S-1],e[S-2],y,-20),P=SuperMap.Plot.PlottingUtil.findPoint(e[S-1],e[S-2],y/2,0);a.push(d),a.push(u),a.push(P),a.push(p),a.push(d)}return a},SuperMap.Plot.ArrowToolKit.generateArrowTailShapePts=function(t,e,i,o){for(var n=e.length,s=[],a=0,l=0;l<t.length-1;l++)a+=SuperMap.Plot.PlottingUtil.distance(t[l],t[l+1]);var r=a*i;switch(o){case SuperMap.Plot.ArrowToolKit.ArrowTailType.ARROWTAIL_NONE:break;case SuperMap.Plot.ArrowToolKit.ArrowTailType.ARROWTAIL_LINE:var u=SuperMap.Plot.PlottingUtil.findPoint(t[0],t[1],r,90),p=SuperMap.Plot.PlottingUtil.findPoint(t[0],t[1],r,-90);s.push(u),s.push(p);break;case SuperMap.Plot.ArrowToolKit.ArrowTailType.ARROWTAIL_CURVE:var h=new SuperMap.Geometry.Point(.5*(e[0].x+e[n-1].x),.5*(e[0].y+e[n-1].y)),c=SuperMap.Plot.PlottingUtil.distance(e[0],e[n-1]),y=SuperMap.Plot.PlottingUtil.getIncentrePointOnSegmentByScale(c*i,h,t[t.length-1]),g=new SuperMap.Geometry.Point(0,0),d=new SuperMap.Geometry.Point(0,0);SuperMap.Plot.PlottingUtil.getTrianglePoints(SuperMap.Plot.ArrowToolKit.ConstValue.DUOJIANTOU_TAIL_RATE_1,SuperMap.Plot.ArrowToolKit.ConstValue.DUOJIANTOU_TAIL_RATE_2,e[0],y,e[n-1],g,d);var f=new SuperMap.Geometry.Point(0,0);SuperMap.Plot.PlottingUtil.getTrapezoidPoints(SuperMap.Plot.ArrowToolKit.ConstValue.DUOJIANTOU_TAIL_RATE_3,e[0],y,g,f);var S=new SuperMap.Geometry.Point(0,0);SuperMap.Plot.PlottingUtil.getTrapezoidPoints(SuperMap.Plot.ArrowToolKit.ConstValue.DUOJIANTOU_TAIL_RATE_3,e[n-1],y,d,S);break;case SuperMap.Plot.ArrowToolKit.ArrowTailType.ARROWTAIL_COATTAIL:var P=SuperMap.Plot.PlottingUtil.findPoint(t[0],t[1],r,157.5),m=SuperMap.Plot.PlottingUtil.findPoint(t[0],t[1],r,-157.5);s.push(P),s.push(t[0]),s.push(m);break;case SuperMap.Plot.ArrowToolKit.ArrowTailType.ARROWTAIL_COATTAIL_POLYBODY:var h=new SuperMap.Geometry.Point(.5*(e[0].x+e[n-1].x),.5*(e[0].y+e[n-1].y)),c=SuperMap.Plot.PlottingUtil.distance(e[0],e[n-1]),b=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(c*i,e[0],h);s.push(e[n-1]),s.push(b.pntLeft),s.push(e[0])}return s},SuperMap.Plot.ArrowToolKit.OperateCtrlPts=function(t){var e=SuperMap.Plot.PlottingUtil.clonePoints(t);if(3==e.length){var i=((e[0].x+e[1].x)/2+e[2].x)/2,o=((e[0].y+e[1].y)/2+e[2].y)/2,n=new SuperMap.Geometry.Point(i,o),s=e[2].clone();e[2]=n,e.push(s)}return e},SuperMap.Plot.ArrowToolKit.generateMultiBezier=function(t,e,i,o){var n=0,s=[],a=[],l=[],r=[],u=[],p=[],h=[],c=[],y=i[0],g=i[1],d=(i[2],i[3],(t[0].x+t[1].x)/2),f=(t[0].y+t[1].y)/2,S=Math.abs(d-t[2].x),P=Math.abs(f-t[2].y),m=0;if(S>0&&P>0){var b=1/(d-t[2].x),L=-1/(f-t[2].y),M=1*t[2].y/(f-t[2].y)-1*t[2].x/(d-t[2].x);m=Math.abs(b*t[0].x+L*t[0].y+M)/Math.sqrt(b*b+L*L)}else P<=1e-4?m=Math.abs(f-t[1].y):S<=1e-4&&(m=Math.abs(d-t[1].x));var v=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(m,t[2],new SuperMap.Geometry.Point(d,f)),_=SuperMap.Plot.PlottingUtil.pointIsRightToLine(t[1],t[2],t[0]);_?(l[1]=t[1],r[1]=t[0]):(l[1]=t[0],r[1]=t[1]),t[1]=new SuperMap.Geometry.Point((t[0].x+t[1].x)/2,(t[0].y+t[1].y)/2);var T=Math.sqrt((v.pntLeft.x-v.pntRight.x)*(v.pntLeft.x-v.pntRight.x)+(v.pntLeft.y-v.pntRight.y)*(v.pntLeft.y-v.pntRight.y))*SuperMap.Plot.ArrowToolKit.ConstValue.sv_AtWidthDivAwWidth,x=(n=T*SuperMap.Plot.ArrowToolKit.ConstValue.sv_AtLenDivAtWidth)*g;SuperMap.Plot.PlottingUtil.equalFuzzy(y,0)||(x=(n=o*y)*g);var O=SuperMap.Plot.PlottingUtil.distance(t[e],t[e-1]),A=2*n;O<A&&(x=(n=O/2)*g),t.push(t[e]);var w,D;w=0,D=0;var E=0,I=[];for(E=2;E<=e;E++)w+=SuperMap.Plot.PlottingUtil.distance(t[E],t[E-1]);for(w-=n,E=2;E<=e-1;E++)D+=SuperMap.Plot.PlottingUtil.distance(t[E],t[E-1]),I[E]=x+(T-x)*Math.pow((w-D)/w,SuperMap.Plot.ArrowToolKit.ConstValue.sv_AtScaleParameter);I[e]=x;var N,C=new SuperMap.Geometry.Point(0,0),R=new SuperMap.Geometry.Point(0,0),U=new SuperMap.Geometry.Point(0,0);for(E=2;E<=e-1;E++)SuperMap.Plot.PlottingUtil.getTrianglePoints(0,3,t[E-1],t[E],t[E+1],R,U),E==e-1&&SuperMap.Plot.PlottingUtil.getTrapezoidPoints(.5,t[e],t[e-1],U,C),N=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(I[E],R,t[E]),(_=SuperMap.Plot.PlottingUtil.pointIsRightToLine(U,R,N.pntRight))?(l[E]=new SuperMap.Geometry.Point(N.pntRight.x,N.pntRight.y),r[E]=new SuperMap.Geometry.Point(N.pntLeft.x,N.pntLeft.y)):(l[E]=new SuperMap.Geometry.Point(N.pntLeft.x,N.pntLeft.y),r[E]=new SuperMap.Geometry.Point(N.pntRight.x,N.pntRight.y));Math.sqrt(1*(t[e].x-C.x)*(t[e].x-C.x)+1*(t[e].y-C.y)*(t[e].y-C.y))>0&&(t[e]=SuperMap.Plot.PlottingUtil.getIncentrePointOnSegmentByScale(n,t[e],C)),N=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(x,t[e+1],t[e]),(_=SuperMap.Plot.PlottingUtil.pointIsRightToLine(t[e],t[e+1],N.pntLeft))?(r[e]=new SuperMap.Geometry.Point(N.pntLeft.x,N.pntLeft.y),l[e]=new SuperMap.Geometry.Point(N.pntRight.x,N.pntRight.y)):(r[e]=new SuperMap.Geometry.Point(N.pntRight.x,N.pntRight.y),l[e]=new SuperMap.Geometry.Point(N.pntLeft.x,N.pntLeft.y));var G;for(E=2;E<e;E++)SuperMap.Plot.PlottingUtil.getTrianglePoints(3,3,l[E-1],l[E],l[E+1],R,U),u[E]=new SuperMap.Geometry.Point(R.x,R.y),p[E]=new SuperMap.Geometry.Point(U.x,U.y),SuperMap.Plot.PlottingUtil.getTrianglePoints(3,3,r[E-1],r[E],r[E+1],R,U),h[E]=new SuperMap.Geometry.Point(R.x,R.y),c[E]=new SuperMap.Geometry.Point(U.x,U.y),2==E&&(SuperMap.Plot.PlottingUtil.getTrapezoidPoints(.5,l[1],l[2],u[2],C),p[1]=new SuperMap.Geometry.Point(C.x,C.y),SuperMap.Plot.PlottingUtil.getTrapezoidPoints(.5,r[1],r[2],h[2],C),c[1]=new SuperMap.Geometry.Point(C.x,C.y)),E==e-1&&(A=(O=SuperMap.Plot.PlottingUtil.distance(l[e],l[e-1]))/3,(G=SuperMap.Plot.PlottingUtil.getExcentrePointOnSegmentByScale(A,t[e],t[e+1])).x+=l[e].x-t[e].x,G.y+=l[e].y-t[e].y,A=(O=T-x)*Math.pow(A/w,SuperMap.Plot.ArrowToolKit.ConstValue.sv_AtScaleParameter),N=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(A,l[e],G),u[e]=new SuperMap.Geometry.Point(N.pntLeft.x,N.pntLeft.y),A=(O=SuperMap.Plot.PlottingUtil.distance(r[e],r[e-1]))/3,(G=SuperMap.Plot.PlottingUtil.getExcentrePointOnSegmentByScale(A,t[e],t[e+1])).x+=r[e].x-t[e].x,G.y+=r[e].y-t[e].y,A=(O=T-x)*Math.pow(A/w,SuperMap.Plot.ArrowToolKit.ConstValue.sv_AtScaleParameter),N=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(A,r[e],G),h[e]=new SuperMap.Geometry.Point(N.pntRight.x,N.pntRight.y));return s=SuperMap.Plot.ArrowToolKit.genArrowBody(e,l,u,p),a=SuperMap.Plot.ArrowToolKit.genArrowBody(e,r,h,c),{arrowTouLen:n,leftBodyPts:s,rightBodyPts:a}},SuperMap.Plot.ArrowToolKit.genArrowBody=function(t,e,i,o){var n=new SuperMap.Plot.Path2D;if(!(t<2)){n.MoveTo(e[1]);for(var s=1;s<=t-1;s++)n.CubicTo(o[s],i[s+1],e[s+1]);var a=[];return n.ToSubPathPolygons(a),a[0]}}},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.PlottingObject=void 0;var n=i(19),s=i(8),a=(o(i(105)),o(i(28)),e.PlottingObject=L.Evented.extend({dragging:null,uuid:null,libID:null,code:null,minEditPts:1,maxEditPts:1,symbolType:null,symbolName:null,isSelected:!1,enableEdit:!0,note:"",extendProperty:null,custom:null,symbolData:null,dRotate:null,dScale:null,textContent:null,annotationPosition:4,subSymbols:null,fromZoom:null,style:null,isLocked:!1,anchorPoint:null,avoidRegions:null,ownerGroup:null,geoSymbolTexts:null,isEdit:!1,components:null,options:{},_defaultStyle:{display:"display",color:"#ff0000",dashArray:"",opacity:"1.00",weight:2,surroundLineColor:"#ffff00",surroundLineColorOpacity:"1.00",surroundLineWidth:4,fill:!1,fillColor:"#ff0000",fillOpacity:"0.31",fillBackColor:"#ff0000",fillBackOpacity:"1.00",fillGradientMode:"NONE",fontColor:"#000000",fontFamily:"Microsoft YaHei",fontSize:"12",labelAlign:"lt",labelRotation:-0,labelXOffset:0,labelYOffset:0},initialize:function(t,e,i,o){this.components=[],this.libID=t,this.code=e,this.extendProperty=new SuperMap.Plot.ExtendProperty,this.avoidRegions=[],this.subSymbols=[],this.geoSymbolTexts=[],this.dRotate=0,this.dScale=1,this.textContent="",this.associatedUuid="",o&&o.symbolData&&(this._removeRedundancySymbolData(o.symbolData),this.symbolData=SuperMap.PlotUtil.cloneObject(o.symbolData),this._parseSymbolData(),delete o.symbolData),this._mergeDefaultStyle(),SuperMap.Util.extend(this,o),null===this.uuid&&(this.uuid=SuperMap.PlotUtil.generateUuid()),null===this.style&&(this.style=SuperMap.PlotUtil.cloneObject(this._defaultStyle));for(var n=0;n<this.avoidRegions.length;n++)this.avoidRegions[n].associatedUuid=this.uuid},onAdd:function(t){this.layer=t,this._renderer=t._renderer,this._map=t._map,this.redraw(),this.isEdit=!0,n.PlottingObjectDrag&&(this.dragging||(this.dragging=new n.PlottingObjectDrag(this))),null===this.fromZoom&&(this.fromZoom=this._map.getZoom())},_clearComponents:function(){for(var t=0;t<this.components.length;t++)this.components[t].removeEventParent(this),this.components[t]instanceof a?(this.components[t]._clearComponents(),this.components[t]._removeGradientNodeInSVG()):(this.components[t].onRemove(),delete this.components[t]);this.components=[]},_removeGradientNodeInSVG:function(){if(this.layer._renderer._container.defs){var t=document.getElementById("linearGradient_"+this._leaflet_id);null!==t&&this.layer._renderer._container.defs.removeChild(t),null!==(t=document.getElementById("radialGradient_"+this._leaflet_id))&&this.layer._renderer._container.defs.removeChild(t)}},_addComponents:function(t){t._map=this._map,t._renderer=this._renderer,t.addEventParent(this),t instanceof a?t.onAdd(this.layer):t.onAdd(),this.components.push(t)},_project:function(){var t=this;t._pxBounds=new L.Bounds,t.components.map(function(e){e instanceof a&&e._project(),e._pxBounds&&e._pxBounds.isValid()&&(t._pxBounds.extend(e._pxBounds.min),t._pxBounds.extend(e._pxBounds.max))})},getBounds:function(){var t=this;return t._bounds=new L.LatLngBounds,t.components.map(function(e){t._bounds.extend(e.getBounds())}),t._bounds},clone:function(){var t=SuperMap.PlotUtil.cloneObject(this.getSymbolData());t.uuid=SuperMap.PlotUtil.generateUuid();var e=SuperMap.PlotUtil.cloneObject(this.style);return L.supermap.plotting.PlottingObject.createSymbol(this.libID,this.code,null,{symbolData:t,serverUrl:this.serverUrl},e)},setStyle:function(t){SuperMap.Util.extend(this.style,t),this.redraw(),this.symbolType===SuperMap.Plot.SymbolType.TEXTSYMBOL&&this.isSelected&&"none"!==this.style.display&&this.fire(SuperMap.Plot.Event.reseteditmarkersvalues)},setScale:function(t){},setRotate:function(t){},setTextPosition:function(t){},setTextContent:function(t){this.textContent=t,this.redraw(),this.symbolType===SuperMap.Plot.SymbolType.TEXTSYMBOL&&this.isSelected&&this.fire(SuperMap.Plot.Event.reseteditmarkersvalues)},getLocked:function(){return this.isLocked},setLocked:function(t){if(this.isLocked!==t){if(this.isLocked=t,this.symbolType===SuperMap.Plot.SymbolType.GROUPOBJECT)for(var e=0;e<this.components.length;e++)this.components[e].isLocked=t;this.fire(SuperMap.Plot.Event.reseteditmarkers)}},getScale:function(){return this.dScale},getRotate:function(){return this.dRotate},getSubSymbols:function(){return this.subSymbols},getTextPosition:function(){return this.annotationPosition},getTextContent:function(){return this.textContent},getExtendProperty:function(){return this.extendProperty},addAvoidRegion:function(t){t.symbolType===SuperMap.Plot.SymbolType.AVOIDREGION&&(this.avoidRegions.push(t),t.associatedUuid=this.uuid,this.redraw())},removeAvoidRegions:function(t){void 0===t&&(t=this.avoidRegions.slice()),SuperMap.Util.isArray(t)||(t=[t]);for(var e=0;e<t.length;e++){var i=t[e];if(i.symbolType===SuperMap.Plot.SymbolType.AVOIDREGION)for(var o=0;o<this.avoidRegions.length;o++)if(this.avoidRegions[o]===i){this.avoidRegions.splice(o,1);break}}this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues)},getSymbolData:function(){return this._setSymbolData(),this.symbolData},redraw:function(){this._clearComponents(),this._redrawComponents()},_redrawComponents:function(){"none"!==this.style.display&&(this._calculateParts(),this._calculateAvoidRegions())},_calculateAvoidRegions:function(){if(0!==this.avoidRegions.length){for(var t=this.components.slice(),e=0;e<this.components.length;e++)this.components[e].removeEventParent(this),this.components[e]instanceof a||(this.components[e].onRemove(),delete this.components[e]);this.components=[];for(var i=0;i<this.avoidRegions.length;i++)if(0!==this.avoidRegions[i].getLatLngs().length){var o=this.avoidRegions[i];t=this._layersWithoutAvoidRegion(o,t)}for(e=0;e<t.length;e++)this._addComponents(t[e])}},_layersWithoutAvoidRegion:function(t,e){for(var i=[],o=0;o<e.length;o++){var n=e[o];if(n instanceof a)i=i.concat(this._layersWithoutAvoidRegion(t,n.components)),n._clearComponents();else{if(1===t._relationToLayer(n))continue;if(n instanceof s.Text||0!==t._relationToLayer(n))i.push(n);else if(n instanceof L.Polygon){c={};c=SuperMap.Util.copyAttributes(c,n.options);var l=L.Util.latLngsToSuperMapPoints(n.getLatLngs()[0][0]),r=L.Util.latLngsToSuperMapPoints(n.getLatLngs()[0][n.getLatLngs()[0].length-1]);SuperMap.Plot.PlottingUtil.isSamePt(l[0],r[0])||n.getLatLngs()[0].push(n.getLatLngs()[0][0]);var l=L.Util.latLngsToSuperMapPoints(n.getLatLngs()[0][0]),r=L.Util.latLngsToSuperMapPoints(n.getLatLngs()[0][n.getLatLngs()[0].length-1]);SuperMap.Plot.PlottingUtil.isSamePt(l[0],r[0])||n.getLatLngs()[0].push(n.getLatLngs()[0][0]);for(var u=0;u<n.getLatLngs().length;u++)for(var p=t._getWithoutPts(n.getLatLngs()[u],!0),h=0;h<p.length;h++){y=L.polyline(L.Util.superMapPointsToLatLngs(p[h]),c);i.push(y)}}else if(n instanceof L.Polyline){var c={};c=SuperMap.Util.copyAttributes(c,n.options),!0===this._isCanFill()&&0===this.components.length&&(n.options.weight=0,this._addComponents(n));for(var p=t._getWithoutPts(n.getLatLngs(),!1),h=0;h<p.length;h++){c.fill=!1;var y=L.polyline(L.Util.superMapPointsToLatLngs(p[h]),c);i.push(y)}}}}return i},_isDot:function(){return this.symbolType===SuperMap.Plot.SymbolType.DOTSYMBOL||this.symbolType===SuperMap.Plot.SymbolType.GROUPOBJECT||this.symbolType===SuperMap.Plot.SymbolType.FLAGGROUP||this.symbolType===SuperMap.Plot.SymbolType.ROUTENODE||this.symbolType===SuperMap.Plot.SymbolType.AIRDEPLOYMENT||this.symbolType===SuperMap.Plot.SymbolType.NAVYDEPLOYMENT},_resizeOffset:function(t,e,i){var o=L.latLng(0,0);switch(e){case 1:o.lng=t.lng-i.getWest(),o.lat=t.lat-i.getNorth();break;case 3:o.lng=t.lng-i.getEast(),o.lat=t.lat-i.getNorth();break;case 6:o.lng=t.lng-i.getWest(),o.lat=t.lat-i.getSouth();break;case 8:o.lng=t.lng-i.getEast(),o.lat=t.lat-i.getSouth();break;case 2:o.lng=0,o.lat=t.lat-i.getNorth();break;case 4:o.lng=t.lng-i.getWest(),o.lat=0;break;case 5:o.lng=t.lng-i.getEast(),o.lat=0;break;case 7:o.lng=0,o.lat=t.lat-i.getSouth()}return o},_resizeBounds:function(t,e,i){var o=i.getWest(),n=i.getEast(),s=i.getNorth(),a=i.getSouth();switch(e){case 1:s=t.lat,o=t.lng;break;case 3:s=t.lat,n=t.lng;break;case 6:o=t.lng,a=t.lat;break;case 8:n=t.lng,a=t.lat;break;case 2:s=t.lat;break;case 4:o=t.lng;break;case 5:n=t.lng;break;case 7:a=t.lat}var l=new L.LatLngBounds;return l._southWest=L.latLng(a,o),l._northEast=L.latLng(s,n),l},_getHandleCount:function(){switch(this.symbolType){case SuperMap.Plot.SymbolType.ELLIPSESYMBOL:case SuperMap.Plot.SymbolType.CIRCLESYMBOL:case SuperMap.Plot.SymbolType.ARCSYMBOL:case SuperMap.Plot.SymbolType.CHORDSYMBOL:case SuperMap.Plot.SymbolType.PIESYMBOL:case SuperMap.Plot.SymbolType.AVOIDREGION:case SuperMap.Plot.SymbolType.LINERELATION:case SuperMap.Plot.SymbolType.SYMBOLTEXT:case SuperMap.Plot.SymbolType.SYMBOLTEXT1:return this.getLatLngs().length+9;default:return 9}},_getHandlePointsByBounds:function(t){if(void 0!==t&&null!==t||(t=this.getBounds()),null!==t){var e=this._map.latLngToLayerPoint(L.latLng(t.getNorth(),t.getEast()));e.x+=5,e.y-=5;var i=this._map.latLngToLayerPoint(L.latLng(t.getNorth(),t.getWest()));i.x-=5,i.y-=5;var o=this._map.latLngToLayerPoint(L.latLng(t.getSouth(),t.getEast()));o.x+=5,o.y+=5;var n=this._map.latLngToLayerPoint(L.latLng(t.getSouth(),t.getWest()));n.x-=5,n.y+=5;for(var s=L.point((e.x+i.x)/2,e.y),a=L.point(e.x,(e.y+o.y)/2),l=L.point((o.x+n.x)/2,o.y),r=L.point(i.x,(i.y+n.y)/2),u=this._map.layerPointToLatLng(e),p=this._map.layerPointToLatLng(i),h=this._map.layerPointToLatLng(o),c=this._map.layerPointToLatLng(n),y=this._map.layerPointToLatLng(a),g=this._map.layerPointToLatLng(l),d=this._map.layerPointToLatLng(r),f=this._map.layerPointToLatLng(s),S=[p.clone(),f.clone(),u.clone(),d.clone(),y.clone(),c.clone(),g.clone(),h.clone()],P=1,m=0;m<S.length;m++)S[m].nHandle=P++;return S}},_getHandleAndRotatePoints:function(){var t={};t.handlePoints=[],t.rotatePoints=[];var e=this.getBounds();if(!e.isValid())return t;this._getHandleCount()>9?this.symbolType===SuperMap.Plot.SymbolType.REGULARPOLYGON?(t.handlePoints.push(this.getLatLngs()[0].clone()),t.handlePoints.push(this.getLatLngs()[this.getLatLngs().length-1].clone())):t.handlePoints=L.Util.cloneLatLngs(this.getLatLngs()):t.handlePoints=this._getHandlePointsByBounds(e);for(var i=0;i<t.handlePoints.length;i++)t.handlePoints[i].tag=i;if(!0===this.getLocked())return t;if(this.symbolType!==SuperMap.Plot.SymbolType.ANNOFRAMESYMBOL&&this.symbolType!==SuperMap.Plot.SymbolType.LINERELATION&&this.symbolType!==SuperMap.Plot.SymbolType.SYMBOLTEXT&&this.symbolType!==SuperMap.Plot.SymbolType.SYMBOLTEXT1&&this.symbolType!==SuperMap.Plot.SymbolType.SYMBOLTEXTBOX&&this.symbolType!==SuperMap.Plot.SymbolType.LINEMARKING&&this.symbolType!==SuperMap.Plot.SymbolType.ANNOFRAMESYMBOLM&&this.symbolType!==SuperMap.Plot.SymbolType.ROUTENODE&&this.symbolType!==SuperMap.Plot.SymbolType.LITERATESIGN&&this.symbolType!==SuperMap.Plot.SymbolType.SATELLITETIMEWINDOWS&&this.symbolType!==SuperMap.Plot.SymbolType.AVOIDREGION&&this.symbolType!==SuperMap.Plot.SymbolType.NAVYDEPLOYMENT&&this.symbolType!==SuperMap.Plot.SymbolType.RECTANGLESYMBOL&&this.symbolType!==SuperMap.Plot.SymbolType.AIRDEPLOYMENT){var o=this._map.latLngToLayerPoint(L.latLng(e.getNorth(),e.getEast())),n=L.point(o.x+15,o.y-15),s=this._map.layerPointToLatLng(n);s.isRotatePoint=!0,t.rotatePoints=[s]}return t},_parseSymbolData:function(){if(null!==this.symbolData){if(this.libID=parseInt(this.symbolData.libID),this.code=parseInt(this.symbolData.code),this.symbolType=this.symbolData.symbolType,this.symbolName=this.symbolData.symbolName,this.textContent=this.symbolData.textContent,void 0!==this.symbolData.dScale?this.dScale=this.symbolData.dScale:this.dScale=this.symbolData.scale2D.x,void 0!==this.symbolData.dRotate?this.dRotate=this.symbolData.dRotate:this.dRotate=this.symbolData.rotate2D.x,void 0!==this.symbolData.uuid&&(this.uuid=this.symbolData.uuid),void 0!==this.symbolData.associatedUuid&&(this.associatedUuid=this.symbolData.associatedUuid),void 0!==this.symbolData.annotationPosition&&(this.annotationPosition=this.symbolData.annotationPosition),void 0!==this.symbolData.isLocked&&(this.isLocked=this.symbolData.isLocked),void 0!==this.symbolData.note&&(this.note=this.symbolData.note),void 0!==this.symbolData.custom&&(this.custom=this.symbolData.custom),this.symbolData.extendProperty)for(var t=0;t<this.symbolData.extendProperty.length;t++){var e=this.symbolData.extendProperty[t];this.extendProperty.addProperty(e.key,e.value)}if(this.symbolData.hasOwnProperty("subSymbols")&&this.symbolData.subSymbols&&0!==this.symbolData.subSymbols.length){this.subSymbols=[];for(n=0;n<this.symbolData.subSymbols.length;n++){var i=this.symbolData.subSymbols[n].libID;void 0===i&&(i=this.libID);var o=this.symbolData.subSymbols[n].code;if(void 0!==o){s={};void 0!==this.symbolData.subSymbols[n]&&(s.symbolData=this.symbolData.subSymbols[n].symbolData),void 0!==this.symbolData.subSymbols[n].textContent&&(s.textContent=this.symbolData.subSymbols[n].textContent),void 0!==this.symbolData.subSymbols[n].totalNum&&(s.totalNum=this.symbolData.subSymbols[n].totalNum),this.subSymbols.push(new SuperMap.Plot.SubSymbol(i,o,s))}}}if(this.symbolData.avoidRegions&&0!==this.symbolData.avoidRegions.length)for(var n=0;n<this.symbolData.avoidRegions.length;n++){var s={libID:0,code:SuperMap.Plot.SymbolType.AVOIDREGION,map:this._map,symbolData:this.symbolData.avoidRegions[n][0]},a=L.supermap.plotting.avoidRegion(0,SuperMap.Plot.SymbolType.AVOIDREGION,[],s);a.style=SuperMap.Plot.AnalysisSymbol.getStyle(this.symbolData.avoidRegions[n][1]),this.avoidRegions.push(a)}}},_setSymbolData:function(t){if(void 0===t&&(t=!0),null===this.symbolData&&(this.symbolData={}),this.symbolData.hasOwnProperty("type")||(this.symbolData.type="GRAPHICOBJECT"),this.symbolData.hasOwnProperty("rotate2D")?this.symbolData.rotate2D.x=this.dRotate:this.symbolData.rotate2D={x:this.dRotate,y:0,z:0},this.symbolData.hasOwnProperty("scale2D")?this.symbolData.scale2D.x=this.dScale:this.symbolData.scale2D={x:this.dScale,y:0,z:0},this.symbolData.libID=this.libID,this.symbolData.code=this.code,this.symbolData.isEdit=!0,this.symbolData.uuid=this.uuid,this.symbolData.symbolType=this.symbolType,this.symbolData.symbolName=this.symbolName,this.symbolData.associatedUuid=this.associatedUuid,this.symbolData.annotationPosition=this.annotationPosition,this.symbolData.textContent=this.textContent,this.symbolData.isLocked=this.isLocked,this.symbolData.note=this.note,this.symbolData.custom=this.custom,this.symbolType!==SuperMap.Plot.SymbolType.DOTSYMBOL&&this.symbolType!==SuperMap.Plot.SymbolType.GROUPOBJECT){this.symbolData.subSymbols=[];for(s=0;s<this.getSubSymbols().length;s++){var e=this.getSubSymbols()[s];t?this.symbolData.subSymbols.push({libID:e.libID,code:e.code,symbolData:e.symbolData,textContent:e.textContent,totalNum:e.totalNum}):this.symbolData.subSymbols.push({libID:e.libID,code:e.code,textContent:e.textContent,totalNum:e.totalNum})}}this.symbolData.extendProperty=[];for(var i=this.getExtendProperty().getPropertyCount(),o=0;o<i;o++){var n=this.getExtendProperty().getPropertyByIndex(o);this.symbolData.extendProperty.push({key:n.key,value:n.value})}this.symbolData.avoidRegions=[];for(var s=0;s<this.avoidRegions.length;s++){var a={};SuperMap.Plot.AnalysisSymbol.setStyle(this.avoidRegions[s].style,a),this.symbolData.avoidRegions.push([this.avoidRegions[s].getSymbolData(),a])}},_getSymbolWayType:function(){return 22===this.libID&&1016===this.code?0===this.getArrowBodyType()?SuperMap.Plot.AddPoint_WayType.POLYLINE:SuperMap.Plot.AddPoint_WayType.CURVE:SuperMap.AlgoSymbolFactory.getSymbolWayType(this.libID,this.code)},_reView:function(){},_mergeDefaultStyle:function(){var t=L.supermap.plotting.getControl(this._map,this.serverUrl).getDefaultStyle();if(t&&!0===t.defaultFlag&&!1===this.isEdit){if(this.symbolType===SuperMap.Plot.SymbolType.DOTSYMBOL){if(-1!==t.dotSymbolSize){var e=this.symbolSizeInLib.w;if(this.symbolSizeInLib.h>this.symbolSizeInLib.w&&(e=this.symbolSizeInLib.h),0===e||0===t.dotSymbolSize)0!==this.symbolSize.w&&0!==this.symbolSize.h||(this.symbolSize.w=this.symbolSizeInLib.w,this.symbolSize.h=this.symbolSizeInLib.h);else{var i=t.dotSymbolSize/e;this.symbolSize.w=i*this.symbolSizeInLib.w,this.symbolSize.h=i*this.symbolSizeInLib.h}}-1!==t.dotTextSpace&&(this.space=t.dotTextSpace),-1!==t.flagTextSize&&(this.flagTextSize=t.flagTextSize)}this.symbolType!==SuperMap.Plot.SymbolType.DOTSYMBOL&&this.symbolType!==SuperMap.Plot.SymbolType.ALGOSYMBOL||(-1!==t.maxScale&&(this.maxScale=t.maxScale),-1!==t.minScale&&(this.minScale=t.minScale)),-1!==t.scaleByMap&&(this.scaleByMap=t.scaleByMap)}},_removeRedundancySymbolData:function(t){null!==t&&(t.hasOwnProperty("center")&&delete t.center,t.hasOwnProperty("id")&&delete t.id,t.hasOwnProperty("parts")&&delete t.parts,t.hasOwnProperty("points")&&delete t.points,t.hasOwnProperty("position")&&delete t.position,t.hasOwnProperty("prjCoordSys")&&delete t.prjCoordSys,t.hasOwnProperty("rotationX")&&delete t.rotationX,t.hasOwnProperty("rotationY")&&delete t.rotationY,t.hasOwnProperty("rotationZ")&&delete t.rotationZ,t.hasOwnProperty("scaleX")&&delete t.scaleX,t.hasOwnProperty("scaleY")&&delete t.scaleY,t.hasOwnProperty("scaleZ")&&delete t.scaleZ)},destroy:function(){this.dragging=null,this.uuid=null,this.libID=null,this.code=null,this.minEditPts=0,this.maxEditPts=0,this.symbolType=null,this.symbolName=null,this.isSelected=!1,this.enableEdit=!1,this.note="",this.extendProperty=null,this.custom=null,this.symbolData=null,this.dScale=null,this.textContent=null,this.annotationPosition=null,this.subSymbols=null,this.fromZoom=null,this.style=null,this.isLocked=!1,this.anchorPoint=null,this.avoidRegions=null,this.ownerGroup=null,this.geoSymbolTexts=null,this.isEdit=null,this.layer.removeFeatures(this),this._render=null,this.layer=null},toGeoJsonStr:function(){return this.getSymbolData(),SuperMap.PlotUtil.toJSON(this.symbolData)}}));L.supermap.plotting.PlottingObject=a,a.prototype._containsPoint=function(t){if(this.symbolType!==SuperMap.Plot.SymbolType.TEXTSYMBOL)return!1;for(var e in this.components)if(this.components[e]._containsPoint(t))return!0;return!1}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Route=void 0;var o=i(4),n=i(7),s=i(1),a=i(17),l=i(38),r=i(18),u=e.Route=o.PlottingObject.extend({routeNodes:[],nextRouteNodeType:SuperMap.Plot.RouteNodeType.TURNING,arrRoutePts:[],initialize:function(t,e,i,n){this.scaleByMap=!0,this.minEditPts=1,this.maxEditPts=9999,this.routeNodes=[],this.arrRoutePts=[],o.PlottingObject.prototype.initialize.call(this,t,e,i,n)},destroy:function(){this.routeNodes=null,this.arrRoutePts=null,o.PlottingObject.prototype.destroy.apply(this,arguments)},highlight:function(t){this.highlightFlag=!0,this.highlightStyle=t;for(var e in this.components)if(this.components[e]instanceof s.AlgoSymbol){var i=SuperMap.Util.copyAttributes(this.components[e].style,t);this.components[e].setStyle(i)}},unhighlight:function(){for(var t in this.components)if(this.components[t]instanceof s.AlgoSymbol){var e=SuperMap.Util.copyAttributes(this.components[t].style,this.style);this.components[t].setStyle(e)}this.highlightFlag=!1,this.highlightStyle=null},blinkRoute:function(t,e,i,o){void 0===i&&(i=2),void 0===t&&(t={color:"#ff0000"}),void 0===e&&(e={color:"#0000ff"}),void 0===o&&(o=300);for(var n=[],a=0;a<i;a++)n.push(t),n.push(e);!0===this.highlightFlag&&this.highlightStyle&&null!==this.highlightStyle?n.push(this.highlightStyle):n.push(this.lineStyle);for(var l=this,r=n.length,u=0;u<r;u++)setTimeout(function(){for(var t in l.components)if(l.components[t]instanceof s.AlgoSymbol){var e=SuperMap.Util.copyAttributes(l.components[t].style,n[0]);l.components[t].setStyle(e)}n.splice(0,1)},o*u)},applyTextStyle:function(t){for(var e in this.components)(this.components[e]instanceof a.LiterateSign||this.components[e]instanceof l.PathText)&&this.components[e].setStyle(SuperMap.Util.copyAttributes(this.components[e].style,t));for(var i=0;i<this.routeNodes.length;i++)for(var o=0;o<this.routeNodes[i].towardNodes.length;o++)this.routeNodes[i].towardNodes[o].style=SuperMap.Util.copyAttributes(this.routeNodes[i].towardNodes[o].style,t)},applyLineStyle:function(t){for(var e in this.components)this.components[e]instanceof a.LiterateSign||this.components[e]instanceof l.PathText||this.components[e]instanceof r.RouteNode||this.components[e].setStyle(SuperMap.Util.copyAttributes(this.components[e].style,t));this.style=SuperMap.Util.copyAttributes(this.style,t)},applyNodeStyle:function(t){for(var e in this.components)this.components[e]instanceof r.RouteNode&&this.components[e].setStyle(SuperMap.Util.copyAttributes(this.components[e].style,t));for(var i=0;i<this.routeNodes.length;i++)this.routeNodes[i].style=SuperMap.Util.copyAttributes(this.routeNodes[i].style,t)},deleteRouteNode:function(t){if(null!==this._getNodeByUuid(t.id)){var e=this._getNodeFeature(t);e.isSelected&&null!==this._map.getPlotEditControl()&&this._map.getPlotEditControl().unselectFeatures(e),this.arrRoutePts=[];for(var i=0;i<this.routeNodes.length;i++)for(var o=0;o<this.routeNodes[i].towardNodes.length;o++)if(this.routeNodes[i].towardNodes[o].routeNodeId!==t.id);else{this.routeNodes[i].towardNodes.splice(o,1);for(n=0;n<t.towardNodes.length;n++)t.towardNodes[n].routeNodeId!==this.routeNodes[i].id&&this.routeNodes[i].towardNodes.push(t.towardNodes[n])}for(var n=0;n<this.routeNodes.length;n++)this.routeNodes[n].id===t.id&&this.routeNodes.splice(n,1);this.redraw()}},updateRouteNode:function(t){if(0!==this.arrRoutePts.length){this.arrRoutePts=[];var e=this._getNodeByUuid(t.id);if(null!==e?e=t:this.routeNodes.push(t),this.redraw(),this.highlightFlag){var i=SuperMap.Util.cloneObject(this.highlightStyle);this.highlightStyle&&SuperMap.Util.copyAttributes(i,this.highlightStyle),this.highlight(i)}}else{var o=this._getNodeFeature(t);if(null!==o){o.routeNode=t,o.redraw();for(var n=this._getFeatureStartWith(t),s=0;s<n.length;s++)n[s].latLngs[0]=L.latLng(t.y,t.x),n[s].redraw();for(var a=this._getFeatureEndWith(t),l=0;l<a.length;l++)a[l].latLngs[1]=L.latLng(t.y,t.x),a[l].redraw();return}}},insertRouteNode:function(t,e,i,o,n,s,a,l){if(void 0===o&&(o=!0),this.arrRoutePts=[],o&&i)for(var r=0;r<e.towardNodes.length;r++)e.towardNodes[r].routeNodeId===i.id&&e.towardNodes.splice(r,1);if(null===this._getNodeByUuid(t.id)&&this.routeNodes.push(t),e){for(var u=!1,p=0;p<e.towardNodes.length;p++)e.towardNodes[p].routeNodeId===t.id&&(u=!0);!1===u&&((c=new SuperMap.Plot.TowardNode).routeNodeId=t.id,void 0!==n&&(c.textContent=n),void 0!==s&&(c.relLineText=s),e.towardNodes.push(c))}if(i){for(var h=!1,p=0;p<t.towardNodes.length;p++)t.towardNodes[p].routeNodeId===i.id&&(h=!0);if(!1===h){var c=new SuperMap.Plot.TowardNode;c.routeNodeId=i.id,void 0!==a&&(c.textContent=a),void 0!==l&&(c.relLineText=l),t.towardNodes.push(c)}}this.redraw()},addRouteNode:function(t,e,i,o){if(null===this._getNodeByUuid(t.id)&&(this.arrRoutePts=[],this.routeNodes.push(t)),e){for(var n=!1,s=0;s<e.towardNodes.length;s++)e.towardNodes[s].routeNodeId===t.id&&(n=!0);if(!1===n){var a=new SuperMap.Plot.TowardNode;a.routeNodeId=t.id,void 0!==i&&(a.textContent=i),void 0!==o&&(a.relLineText=o),e.towardNodes.push(a)}}this.redraw()},_addRouteNodeByNode:function(t,e,i){if(null===this._getNodeByUuid(t.id))return null;var o=new SuperMap.Plot.RouteNode;if(o.x=t.x,o.y=t.y,o.name="",o.type=this.nextRouteNodeType,!0===e)(n=new SuperMap.Plot.TowardNode).routeNodeId=t.id,o.towardNodes.push(n);else if(!0===i){var n=new SuperMap.Plot.TowardNode;n.routeNodeId=o.id,t.towardNodes.push(n)}return this.routeNodes.push(o),this.redraw(),this._getNodeFeature(o)},_addRouteNodeByPosWithoutLast:function(t,e){for(var i=0;i<this.routeNodes.length;i++){var o=this.routeNodes[i];if(null!==o&&(o.towardNodes&&null!==o.towardNodes))for(var n=0;n<o.towardNodes.length;n++){var s=this._getNodeByUuid(o.towardNodes[n].routeNodeId);if(null!==s){var a=SuperMap.Plot.PlottingUtil.computePointToLineMinDis({x:t.lng,y:t.lat},[{x:o.x,y:o.y},{x:s.x,y:s.y}]);if(-1!==a.index&&a.minDis<e){var l=new SuperMap.Plot.RouteNode;l.x=t.lng,l.y=t.lat,l.type=this.nextRouteNodeType,l.name="",l.towardNodes.push(o.towardNodes[n]),o.towardNodes.splice(n,1);var r=new SuperMap.Plot.TowardNode;return r.routeNodeId=l.id,o.towardNodes.push(r),this.arrRoutePts=[],this.routeNodes.push(l),this.redraw(),this._getNodeFeature(l)}}}}return null},_addRouteNodeByPos:function(t,e){for(var i=[],o=0;o<this.routeNodes.length;o++){var n=this.routeNodes[o];if(null!==n&&(n.towardNodes&&null!==n.towardNodes)){0===n.towardNodes.length&&i.push(n);for(var s=0;s<n.towardNodes.length;s++){var a=this._getNodeByUuid(n.towardNodes[s].routeNodeId);if(null!==a){var l=SuperMap.Plot.PlottingUtil.computePointToLineMinDis({x:t.lng,y:t.lat},[{x:n.x,y:n.y},{x:a.x,y:a.y}]);if(-1!==l.index&&l.minDis<e)return(r=new SuperMap.Plot.RouteNode).x=t.lng,r.y=t.lat,r.type=this.nextRouteNodeType,r.name=(this.routeNodes.length+1).toString(),r.towardNodes.push(n.towardNodes[s]),n.towardNodes.splice(s,1),(u=new SuperMap.Plot.TowardNode).routeNodeId=r.id,n.towardNodes.push(u),this.arrRoutePts=[],this.routeNodes.push(r),void this.redraw()}}}}var r=new SuperMap.Plot.RouteNode;if(r.x=t.lng,r.y=t.lat,0!==this.routeNodes.length?r.type=this.nextRouteNodeType:r.type=SuperMap.Plot.RouteNodeType.AIMING,r.name=(this.routeNodes.length+1).toString(),0!==i.length){var u=new SuperMap.Plot.TowardNode;u.routeNodeId=r.id,i[0].towardNodes.push(u)}this.routeNodes.push(r),this.redraw()},setNextRouteNodeType:function(t){this.nextRouteNodeType=t},_getNodeFeature:function(t){for(var e in this.components)if(this.components[e]instanceof r.RouteNode&&this.components[e].routeNode.id===t.id)return this.components[e];return null},_getFeatureStartWith:function(t){var e=[];for(var i in this.components)this.components[i]._startRouteNode&&this.components[i]._startRouteNode===t.id&&e.push(this.components[i]);return e},_getFeatureEndWith:function(t){var e=[];for(var i in this.components)this.components[i]._endRouteNode&&this.components[i]._endRouteNode===t.id&&e.push(this.components[i]);return e},_selectNodeLayer:function(t,e){L.Util.isArray(t)||(t=[t]);for(var i in this.components)if((this.components[i]instanceof r.RouteNode||this.components[i]instanceof a.LiterateSign)&&this.components[i].getBounds().contains(t))return this.components[i];return null},redraw:function(){if(this._initRoute(),this.arrRoutePts&&0!==this.arrRoutePts.length)for(e=0;e<this.arrRoutePts.length;e++){var t=this.arrRoutePts[e];t.length<2||((a=L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.POLYLINESYMBOL,t,{enableEdit:!1},this.style)).route=this,this._addComponents(a))}for(var e=0;e<this.routeNodes.length;e++){var i=this.routeNodes[e];if(null!==i&&(i.towardNodes&&null!==i.towardNodes)){for(var o=0;o<i.towardNodes.length;o++){var n=this._getNodeByUuid(i.towardNodes[o].routeNodeId);if(null!==n){var s=[];if(s.push(L.latLng(i.y,i.x)),s.push(L.latLng(n.y,n.x)),0===this.arrRoutePts.length){var a=L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.POLYLINESYMBOL,s,{enableEdit:!1},this.style);this._addComponents(a),a._startRouteNode=i.id,a._endRouteNode=n.id}var l=i.towardNodes[o].textContent;if(null!==l){var r=i.towardNodes[o].relLineText;void 0!==r&&null!==r||(r=SuperMap.Plot.RelLineText.ONLEFTLINE);var u=SuperMap.Util.copyAttributes(SuperMap.PlotUtil.cloneObject(this.style),i.towardNodes[o].style),p=L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.PATHTEXT,s,{relLineText:r,showPathLine:!1,textContent:l,enableEdit:!1},u);this._addComponents(p),p._startRouteNode=i.id,p._endRouteNode=n.id}}}this._createRouteNode(i)}}this._finishRoute()},_initRoute:function(){this.prevRouteNode=[],this.prevLiterateSign=[];for(var t=0;t<this.components.length;t++)this.components[t]instanceof r.RouteNode?this.prevRouteNode.push(this.components[t]):this.components[t]instanceof a.LiterateSign?this.prevLiterateSign.push(this.components[t]):this.components[t]._clearComponents();this.components=[]},_finishRoute:function(){for(t=0;t<this.prevRouteNode.length;t++)this.prevRouteNode[t]._clearComponents();for(var t=0;t<this.prevLiterateSign.length;t++)this.prevLiterateSign[t]._clearComponents();this.prevRouteNode=[],this.prevLiterateSign=[]},_createRouteNode:function(t){if(null!==t){for(var e=0;e<this.prevRouteNode.length;){if(this.prevRouteNode[e].routeNode.id===t.id)return this.prevRouteNode[e].routeNode=t,this.prevRouteNode[e].redraw(),this.components.push(this.prevRouteNode[e]),void this.prevRouteNode.splice(e,1);e++}var i=SuperMap.Util.copyAttributes(SuperMap.PlotUtil.cloneObject(this.style),t.style),o=L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.ROUTENODE,[L.latLng(t.y,t.x)],{routeNode:t,route:this},i);this._addComponents(o)}},_addComponents:function(t){n.GroupObject.prototype._addComponents.call(this,t)},_clearComponents:function(){n.GroupObject.prototype._clearComponents.call(this)},clone:function(){var t=SuperMap.PlotUtil.cloneObject(this.getSymbolData());return t.uuid=SuperMap.PlotUtil.generateUuid(),L.supermap.plotting.PlottingObject.createSymbol(this.libID,this.code,null,{symbolData:t,serverUrl:this.serverUrl})},_parseSymbolData:function(){if(o.PlottingObject.prototype._parseSymbolData.call(this),this.symbolData){this.routeNodes=this.symbolData.routeNodes,this.routeNodes=[];for(i=0;i<this.symbolData.routeNodes.length;i++){var t=new SuperMap.Plot.RouteNode;null===this.symbolData.routeNodes[i].id&&void 0===this.symbolData.routeNodes[i].id||(t.id=this.symbolData.routeNodes[i].id),t.type=this.symbolData.routeNodes[i].type,t.name=this.symbolData.routeNodes[i].name,t.rotate=this.symbolData.routeNodes[i].rotate,this.symbolData.routeNodes[i].hasOwnProperty("positionPoint")?(t.x=this.symbolData.routeNodes[i].positionPoint.x,t.y=this.symbolData.routeNodes[i].positionPoint.y):(t.x=this.symbolData.routeNodes[i].x,t.y=this.symbolData.routeNodes[i].y),t.towardNodes=[];for(s=0;s<this.symbolData.routeNodes[i].towardNodes.length;s++){var e=new SuperMap.Plot.TowardNode;e.routeNodeId=this.symbolData.routeNodes[i].towardNodes[s].routeNodeId,e.relLineText=this.symbolData.routeNodes[i].towardNodes[s].relLineText,e.textContent=this.symbolData.routeNodes[i].towardNodes[s].textContent,e.offsetX=this.symbolData.routeNodes[i].towardNodes[s].offsetX,e.offsetY=this.symbolData.routeNodes[i].towardNodes[s].offsetY,e.style=this.symbolData.routeNodes[i].towardNodes[s].style,t.towardNodes.push(e)}t.style=this.symbolData.routeNodes[i].style,this.routeNodes.push(t)}this.arrRoutePts=[];for(var i=0;i<this.symbolData.arrRoutePts.length;i++){for(var n=[],s=0;s<this.symbolData.arrRoutePts[i].length;s++)this.symbolData.arrRoutePts[i][s].hasOwnProperty("x")&&this.symbolData.arrRoutePts[i][s].hasOwnProperty("y")?n.push(L.latLng(this.symbolData.arrRoutePts[i][s].y,this.symbolData.arrRoutePts[i][s].x)):n.push(L.latLng(this.symbolData.arrRoutePts[i][s].lat,this.symbolData.arrRoutePts[i][s].lng));this.arrRoutePts.push(n)}this.lineStyle=this.symbolData.lineStyle}},_setSymbolData:function(){o.PlottingObject.prototype._setSymbolData.call(this),this.symbolData&&(this.symbolData.routeNodes=this.routeNodes,this.symbolData.arrRoutePts=this.arrRoutePts,this.symbolData.lineStyle=this.lineStyle)},_getNodeByUuid:function(t){for(var e=0;e<this.routeNodes.length;e++)if(this.routeNodes[e].id===t)return this.routeNodes[e];return null},_reView:function(){if(this.fromZoom!==this._map.getZoom())for(var t in this.components)this.components[t].symbolType!==SuperMap.Plot.SymbolType.POLYLINESYMBOL&&this.components[t]._reView();this.fromZoom=this._map.getZoom(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues)}});L.supermap.plotting.Route=u},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=e.GOAnimation=L.Evented.extend({startTime:0,duration:5,repeat:!1,name:null,animationState:SuperMap.Plot.GOAnimationState.UNKNOWN,goFeature:null,animationGOFeature:null,innerStartTime:0,lastExecute:!1,pauseTime:0,ratio:0,symbolTexts:[],initialize:function(t){SuperMap.Util.extend(this,t)},destroy:function(){this.showAnimationFeature(!1),this.removeAnimationFeature(),this.goFeature=null,this.animationGOFeature=null,this.name=null,this.animationState=SuperMap.Plot.GOAnimationState.UNKNOWN;for(var t=0;t<this.symbolTexts.length;t++)this.symbolTexts[t]=null;this.symbolTexts=[]},setGOFeature:function(t){if(void 0===t||null===t||null===t.layer)return!1;var e=L.supermap.plotting.getControl().getGOAnimationManager();if(null===e.goAnimationLayer)return!1;if(this.goFeature=t,this.animationGOFeature=this.cloneGOFeature(t),null===this.animationGOFeature)return!1;if(e.goAnimationLayer.addFeatures(this.animationGOFeature),this.getGOAnimationType()===SuperMap.Plot.GOAnimationType.ANIMATION_WAY&&0!==t.geoSymbolTexts.length)for(var i=0;i<t.geoSymbolTexts.length;i++)if(null!==(s=t.geoSymbolTexts[i])){var o=s.getSymbolData();o.associatedUuid=this.animationGOFeature.uuid;var n={symbolData:o,map:s.map,serverUrl:s.serverUrl},s=L.supermap.plotting.PlottingObject.createSymbol(s.libID,s.code,null,n,null);this.symbolTexts.push(s),e.goAnimationLayer.addFeatures(s)}return this.showAnimationFeature(!1),!0},getGOFeature:function(){return this.goFeature},play:function(){var t=new Date;this.animationState===SuperMap.Plot.GOAnimationState.PAUSE?this.innerStartTime+=t.getTime()/1e3-this.pauseTime:this.innerStartTime=t.getTime()/1e3,this.lastExecute=!1,this.animationState=SuperMap.Plot.GOAnimationState.PLAYING;var e=L.supermap.plotting.getControl().getGOAnimationManager();this.goFeature.isSelected&&e.map.getPlotEditControl()&&e.map.getPlotEditControl().unselectFeatures(this.goFeature),this.showAnimationFeature(!0)},stop:function(){this.animationState=SuperMap.Plot.GOAnimationState.STOP},pause:function(){this.animationState=SuperMap.Plot.GOAnimationState.PAUSE;var t=new Date;this.pauseTime=t.getTime()/1e3},reset:function(){this.animationState=SuperMap.Plot.GOAnimationState.RESET,this.showAnimationFeature(!1)},execute:function(){return!1},canExecute:function(){if(this.animationState!==SuperMap.Plot.GOAnimationState.PLAYING)return!1;var t=(new Date).getTime()/1e3;if(this.innerStartTime+this.startTime>t)return!1;var e=this.getRatioByTime();return!(e>1&&this.lastExecute||e<0)},getRatioByTime:function(){if(this.animationState!==SuperMap.Plot.GOAnimationState.PLAYING)return 0;var t=(new Date).getTime()/1e3;if(this.innerStartTime+this.startTime>t)return 0;var e=(t-this.innerStartTime-this.startTime)/this.duration;return e>=1&&!this.lastExecute?this.repeat?(this.innerStartTime=(new Date).getTime()/1e3,e=0,this.lastExecute=!1,this.animationState=SuperMap.Plot.GOAnimationState.PLAYING):(e=1,this.lastExecute=!0,this.animationState=SuperMap.Plot.GOAnimationState.STOP):e<0&&(e=0),this.ratio=e,e},showAnimationFeature:function(t){if(null!==this.animationGOFeature&&null!==this.animationGOFeature.style&&(this.resetAnimationFeature(t),this.animationGOFeature.redraw()),null!==this.goFeature&&null!==this.goFeature.style){if(t){this.goFeature.style.display="none";for(e=0;e<this.goFeature.geoSymbolTexts.length;e++)this.goFeature.geoSymbolTexts[e].style.display="none"}else{this.goFeature.style.display="display";for(e=0;e<this.goFeature.geoSymbolTexts.length;e++)this.goFeature.geoSymbolTexts[e].style.display="display"}this.goFeature.redraw();for(var e=0;e<this.goFeature.geoSymbolTexts.length;e++)this.goFeature.geoSymbolTexts[e].redraw()}},resetAnimationFeature:function(t){if(this.animationGOFeature.symbolData=SuperMap.PlotUtil.cloneObject(this.goFeature.getSymbolData()),this.animationGOFeature.symbolData.uuid=this.animationGOFeature.uuid,this.animationGOFeature._parseSymbolData(),t){this.animationGOFeature.style.display="display";for(e=0;e<this.symbolTexts.length;e++)this.symbolTexts[e].style.display="display",this.symbolTexts[e].redraw()}else{this.animationGOFeature.style.display="none";for(var e=0;e<this.symbolTexts.length;e++)this.symbolTexts[e].style.display="none",this.symbolTexts[e].redraw();this.getGOAnimationType()===SuperMap.Plot.GOAnimationType.ANIMATION_WAY&&null!==this.pathFeature&&(this.pathFeature.options.opacity=0,this.pathFeature.redraw())}},cloneGOFeature:function(t){var e=null,i=L.supermap.plotting.getControl().getGOAnimationManager().goAnimations;if(null!==i)for(var o=0;o<i.length;o++){var n=i[o];if(n.goFeature===t){e=n.animationGOFeature;break}}return null===e&&((e=t.clone()).enableEdit=!1),e},removeAnimationFeature:function(){if(null!==this.animationGOFeature){var t=L.supermap.plotting.getControl().getGOAnimationManager(),e=t.goAnimations,i=!1;if(null!==e)for(n=0;n<e.length;n++){var o=e[n];if(o!==this&&o.animationGOFeature===this.animationGOFeature){i=!0;break}}if(!i){t.goAnimationLayer.removeFeatures(this.animationGOFeature);for(var n=0;n<this.symbolTexts.length;)t.goAnimationLayer.removeFeatures(symbolTexts[n])}}},getJSONData:function(){var t={};return t.goFeatureUuid=this.goFeature.uuid,t.name=this.name,t.startTime=this.startTime,t.duration=this.duration,t.repeat=this.repeat,t.type=this.getGOAnimationType(),t},fromJSONData:function(t){this.startTime=t.startTime,this.duration=t.duration,this.repeat=t.repeat}});L.supermap.plotting.GOAnimation=o},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.groupObject=e.GroupObject=void 0;var o=i(4),n=i(19),s=e.GroupObject=o.PlottingObject.extend({subObjects:[],initialize:function(t,e,i,n){this.subObjects=[],this.symbolName="组合对象",this.libID=0,this.code=SuperMap.Plot.SymbolType.GROUPOBJECT,this.symbolType=SuperMap.Plot.SymbolType.GROUPOBJECT,o.PlottingObject.prototype.initialize.call(this,t,e,i,n)},_addComponents:function(t){o.PlottingObject.prototype._addComponents.call(this,t),t.layer=this.layer,t.isEdit=!0,n.PlottingObjectDrag&&(t.dragging||(t.dragging=new n.PlottingObjectDrag(t))),null===t.fromZoom&&(t.fromZoom=this._map.getZoom()),this._map&&this._map.getPlotEditControl()&&t.enableEdit&&this._map.getPlotEditControl().enableEditFeatures(t)},_clearComponents:function(){this._map&&this._map.getPlotEditControl()&&this._map.getPlotEditControl().disableEditFeatures(this.components),o.PlottingObject.prototype._clearComponents.call(this)},_reView:function(){for(var t in this.components)this.components[t]._reView();this.fire(SuperMap.Plot.Event.reseteditmarkersvalues)},move:function(t,e){for(var i in this.subObjects)this.subObjects[i].move(t,e)},redraw:function(){if("none"!==this.style.display){if(0!==this.subObjects.length&&0===this.components.length)for(var t=0,e=this.subObjects.length;t<e;t++)void 0!==this.subObjects[t].layer&&this.subObjects[t].layer.removeFeatures(this.subObjects[t]),this.subObjects[t].ownerGroup=this,this.subObjects[t].enableEdit=!0,this._addComponents(this.subObjects[t])}else this._clearComponents()},setRotate:function(t){null===this.anchorPoint&&(this.anchorPoint=this.getBounds().getCenter()),this._rotate(t,this.anchorPoint),this.dRotate=t,this.fire(SuperMap.Plot.Event.reseteditmarkersvalues)},setScale:function(t){null===this.anchorPoint&&(this.anchorPoint=this.getBounds().getCenter()),this._resize(t/this.dScale,this.anchorPoint),this.dScale=t,this.fire(SuperMap.Plot.Event.reseteditmarkersvalues)},_unGroupObject:function(){var t=null;if(0!==this.subObjects.length){t=this.subObjects.slice(),this._clearComponents();for(var e=0,i=t.length;e<i;e++)this.layer.addFeatures(t[e]),t[e].ownerGroup=null}return t},removeComponents:function(t){SuperMap.Util.isArray(t)||(t=[t]);for(var e=[],i=0;i<t.length;i++){this.subObjects.splice(SuperMap.Util.indexOf(this.subObjects,t[i]),1);var o=SuperMap.Util.indexOf(this.components,t[i]);-1!==o&&(this.components[o]._clearComponents(),this.components.splice(o,1)),e.push(t[i])}for(var n=0;n<e.length;n++)e[n].addTo(this._map),e[n].ownerGroup=null;return e},setStyle:function(t){SuperMap.Util.extend(this.style,t);for(var e in this.components)this.components[e].symbolType===SuperMap.Plot.SymbolType.TEXTSYMBOL&&(t.labelAlign=this.components[e].style.labelAlign),this.components[e].setStyle(t)},_parseSymbolData:function(){if(null!==this.symbolData&&(o.PlottingObject.prototype._parseSymbolData.call(this),this.symbolData&&this.symbolData.subFeatures)){for(var t=[],e=0;e<this.symbolData.subFeatures.length;e++){var i=this.symbolData.subFeatures[e];i.uuid=SuperMap.PlotUtil.generateUuid();var n=L.supermap.plotting.PlottingObject.createSymbol(i.libID,i.code,null,{symbolData:i});t.push(n)}this.subObjects=t}},_setSymbolData:function(){if(o.PlottingObject.prototype._setSymbolData.call(this),this.symbolData){this.symbolData.subFeatures=[];for(var t=0;t<this.subObjects.length;t++)this.symbolData.subFeatures.push(this.subObjects[t].getSymbolData())}},_rotate:function(t,e){for(var i=0;i<this.components.length;i++)this.components[i].symbolType===SuperMap.Plot.SymbolType.TEXTSYMBOL?(void 0===this.components[i].style.labelRotation?this.components[i].style.labelRotation=-t:this.components[i].style.labelRotation+=-t,this.components[i].components[0].options.labelRotation=this.components[i].style.labelRotation,L.Util.rotateLatLngs(this.components[i].getLatLngs(),e,t),this.components[i].setLatLngs(this.components[i].getLatLngs())):this.components[i]._rotate(t,e)},_resize:function(t,e){for(var i=0;i<this.components.length;i++)this.components[i]instanceof s?this.components[i]._resize(t,e):0!==this.components[i].avoidRegions.length?(this.components[i]._resize(t,this.anchorPoint),this.components[i].redraw()):this.components[i]._resize(t,this.anchorPoint)},destroy:function(){o.PlottingObject.prototype.destroy.call(this),this.subObjects=[]}}),a=e.groupObject=function(t,e,i,o){return new s(t,e,i,o)};L.supermap.plotting.groupObject=a,L.supermap.plotting.GroupObject=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=e.Text=L.Path.extend({options:{text:"",labelAlign:"cm",labelRotation:0,fontColor:"#000000",fontSize:14,fontOpacity:1,fontFamily:"微软雅黑",fontWeight:"bold",fontStyle:"",fontSpace:0,fontPercent:100,fontStroke:!1,fontStrokeColor:"#ff0000",fontStrokeWidth:2,fontBackground:!1,fontBackgroundColor:"#ff0000",fontShadow:!1,fontShadowColor:"#ff0000",fontShadowOffsetX:0,fontShadowOffsetY:0,interactive:!0},_textNode:null,_backgroundTextNode:null,_shadowTextNode:null,_tspanNodeObj:null,initialize:function(t,e){L.setOptions(this,e),this._latlng=L.latLng(t[0]),this._text=this.options.text,this._tspanNodeObj={}},onAdd:function(){L.Path.prototype.onAdd.call(this)},onRemove:function(){this._removeNode(),L.Path.prototype.onRemove.call(this)},_removeNode:function(){this._textNode&&this._textNode.parentNode&&(L.DomUtil.remove(this._textNode),this.removeInteractiveTarget(this._textNode),delete this._textNode,this._textNode=null),this._backgroundTextNode&&this._backgroundTextNode.parentNode&&(this._renderer._rootGroup.removeChild(this._backgroundTextNode),delete this._backgroundTextNode,this._backgroundTextNode=null),this._shadowTextNode&&this._shadowTextNode.parentNode&&(this._renderer._rootGroup.removeChild(this._shadowTextNode),delete this._shadowTextNode,this._shadowTextNode=null),this._tspanNodeObj={},this._textNode&&(L.DomUtil.remove(this._textNode),this.removeInteractiveTarget(this._textNode),delete this._textNode,this._textNode=null),this._backgroundTextNode&&(delete this._backgroundTextNode,this._backgroundTextNode=null),this._shadowTextNode&&(delete this._shadowTextNode,this._shadowTextNode=null)},setLatLngs:function(t){return this._latlng=L.latLng(t[0]),this.redraw(),this.fire("move",{latlng:this._latlng})},getLatLngs:function(){return[this._latlng]},setText:function(t){return this.options.text=this._text=t,this.redraw()},getText:function(){return this._text},setStyle:function(t){var e=t&&t.text||this._text;return L.Path.prototype.setStyle.call(this,t),this.setText(e),this},getBounds:function(){return this._updateBounds(),this._bounds},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},getPxBounds:function(t){var e=1;this.options.fontPercent&&100!==this.options.fontPercent&&(e=this.options.fontPercent/100);var i=0,o=0,n=this.options.text.split("\n"),s=n.length;if(this._renderer instanceof L.Canvas){var a=[this.options.fontStyle?this.options.fontStyle:"normal","normal",this.options.fontWeight?this.options.fontWeight:"normal",this.options.fontSize?this.options.fontSize+"px":"1em",this.options.fontFamily?this.options.fontFamily:"sans-serif"].join(" ");this._renderer._ctx.font=a,this.options.fontSize=parseFloat(this.options.fontSize),null==(l=L.Canvas.LABEL_FACTOR[this.options.labelAlign[1]])&&(l=-.5),o=(r=this._renderer._ctx.measureText("Mg").height||this._renderer._ctx.measureText("xx").width)*l*(s-1)+r*s;for(M=0;M<s;M++)this.options.fontSpace&&0!=this.options.fontSpace||this.options.fontPercent&&100!=this.options.fontPercent?i<(u=(this._renderer._ctx.measureText(n[M]).width+this.options.fontSpace*(n[M].length-1))*e)&&(i=u):i<(u=this._renderer._ctx.measureText(n[M]).width)&&(i=u)}else if(this._renderer instanceof L.SVG){var l=L.SVG.LABEL_VFACTOR[this.options.labelAlign[1]];null==l&&(l=-.5);var r=this.options.fontSize;o=r*l*(s-1)+r*s;for(M=0;M<s;M++){var u=SuperMap.PlotUtil.getTextWidth(this.options,n[M]);i<u&&(i=u)}}this.options.fontSize<=7&&(i=0);var p=0,h=0,c=0,y=0,g=this.options.labelAlign||"cm";"lt"===g?(p=this._point.x,h=this._point.y,c=this._point.x+i,y=this._point.y+o):"ct"===g?(p=this._point.x-i/2,h=this._point.y,c=this._point.x+i/2,y=this._point.y+o):"rt"===g?(p=this._point.x-i,h=this._point.y,c=this._point.x,y=this._point.y+o):"lb"===g?(p=this._point.x,h=this._point.y-o,c=this._point.x+i,y=this._point.y):"cb"===g?(p=this._point.x-i/2,h=this._point.y-o,c=this._point.x+i/2,y=this._point.y):"rb"===g?(p=this._point.x-i,h=this._point.y-o,c=this._point.x,y=this._point.y):"lm"===g?(p=this._point.x,h=this._point.y-o/2,c=this._point.x+i,y=this._point.y+o/2):"cm"===g?(p=this._point.x-i/2,h=this._point.y-o/2,c=this._point.x+i/2,y=this._point.y+o/2):"rm"===g&&(p=this._point.x-i,h=this._point.y-o/2,c=this._point.x,y=this._point.y+o/2),t&&this.options.fontShadow&&(0!==this.options.fontShadowOffsetX||0!==this.options.fontShadowOffsetY)&&(this.options.fontShadowOffsetX>0?c+=this.options.fontShadowOffsetX:p+=this.options.fontShadowOffsetX,this.options.fontShadowOffsetY>0?y+=this.options.fontShadowOffsetY:h+=this.options.fontShadowOffsetY);for(var d in this._eventParents)if(this._eventParents[d].symbolType===SuperMap.Plot.SymbolType.TEXTSYMBOL&&0===this.options.fontPercent&&0===this.options.fontPercent){var f=c-p,S=(f+this.options.fontSpace*(this.options.text.length-1))*this.options.fontPercent/100-f;switch(g){case"lt":case"lm":case"lb":c+=S;break;case"rt":case"rm":case"rb":p-=S;break;case"ct":case"cm":case"cb":p-=S/2,c+=S/2}}var P=new L.Bounds;if(this.options.labelRotation&&0!==this.options.labelRotation){var m=[];m.push(L.point(p,h)),m.push(L.point(p,y)),m.push(L.point(c,h)),m.push(L.point(c,y));for(var b=this.options.labelRotation*(Math.PI/180),M=0;M<m.length;M++)SuperMap.Plot.PlottingUtil.rotateAngle(this._point,b,m[M]),P.extend(m[M])}else P=L.bounds(L.point(p,h),L.point(c,y));return P},_updateBounds:function(){this._pxBounds=this.getPxBounds(!0);var t=this._map.layerPointToLatLng(this._pxBounds.min),e=this._map.layerPointToLatLng(this._pxBounds.max);this._bounds=L.latLngBounds(t,e)},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateText(this)},_empty:function(){return this._text&&!this._renderer._bounds.intersects(this._pxBounds)}});L.supermap.plotting.text=function(t,e){return new o(t,e)},L.supermap.plotting.Text=o},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.plottingLayer=e.PlottingLayer=void 0;var o=i(7),n=i(2),s=i(16),a=i(10),l=i(34),r=i(4),u=i(5),p=e.PlottingLayer=a.PlottingLayerBase.extend({tolerancePixel:5,isLocked:!1,isEditable:!0,isSelected:!0,visibility:!0,getSelected:function(){return this.isSelected},setSelected:function(t){this.isSelected!==t&&(this.isSelected=t,this._map&&this._map.getPlotEditControl()&&(this.isSelected?this._map.getPlotEditControl().enableEditFeatures(this.features):this._map.getPlotEditControl().disableEditFeatures(this.features)))},getEditable:function(){return this.isEditable},setEditable:function(t){if(this.isEditable!==t&&(this.isEditable=t,this._map&&this._map.getPlotEditControl())){var e=this._map.getPlotEditControl().getSelectedFeatures();this._map.getPlotEditControl().unselectFeatures(this.features),this._map.getPlotEditControl().selectFeatures(e)}},getLocked:function(){return this.isLocked},setLocked:function(t){if(this.isLocked!==t&&(this.isLocked=t,this._map&&this._map.getPlotEditControl())){var e=this._map.getPlotEditControl().getSelectedFeatures();this._map.getPlotEditControl().unselectFeatures(this.features),this._map.getPlotEditControl().selectFeatures(e)}},getVisibility:function(){return this.visibility},setVisibility:function(t){this.visibility!==t&&(this.visibility=t,this.visibility?this._renderer._container.style.display="block":this._renderer._container.style.display="none")},initialize:function(t,e,i){a.PlottingLayerBase.prototype.initialize.call(this,t,e,i),this.setVisibility(this.visibility)},getFeatureByUuid:function(t){for(var e=0;e<this.features.length;e++)if(this.features[e].uuid===t)return this.features[e];return null},addFeatures:function(t){SuperMap.Util.isArray(t)||(t=[t]),a.PlottingLayerBase.prototype.addFeatures.call(this,t),this._map.getPlotEditControl()&&this.isSelected&&this._map.getPlotEditControl().enableEditFeatures(t)},createSymbol:function(t,e,i,o,n,s,a,l){if(s||(s={}),s.uuid=o,s.serverUrl=this.serverUrl,void 0!==s.symbolData&&null!==s.symbolData||!SuperMap.AlgoSymbolFactory.isAccessServer(t,e)){if(!(f=L.supermap.plotting.PlottingObject.createSymbol(t,e,i,s,n,l)).subSymbols||0===f.subSymbols.length||SuperMap.AlgoSymbolFactory.isAccessServer(t,e))return this.addFeatures(f),"function"==typeof a&&a({feature:f}),f;for(var r=[],u=0,p=f.subSymbols.length;u<p;u++)null===f.subSymbols[u].symbolData&&(f.subSymbols[u].symbolData=this._getSymbolDataFromCache(f.subSymbols[u].libID,f.subSymbols[u].code),null===f.subSymbols[u].symbolData&&-1===SuperMap.Util.indexOf(r,f.subSymbols[u])&&r.push(f.subSymbols[u]));for(var h=r.slice(),c=0;c<r.length;c++){d=new SuperMap.GetSymbolInfoParameters({libID:r[c].libID,code:r[c].code});L.supermap.symbolInfoService(this.serverUrl).getSymbolInfo(d,function(t){this._cacheSymbolData(t.result);for(var e=0,i=f.subSymbols.length;e<i;e++)if(null===f.subSymbols[e].symbolData&&f.subSymbols[e].libID===t.result.libID&&f.subSymbols[e].code===t.result.code){var o=SuperMap.Util.indexOf(h,f.subSymbols[e]);-1!==o&&h.splice(o,1),f.subSymbols[e].symbolData=SuperMap.PlotUtil.cloneObject(t.result)}0===h.length&&(f.isEdit=!1,this.addFeatures(f),"function"==typeof a&&a({feature:f}))},this)}if(0===r.length)return this.addFeatures(f),"function"==typeof a&&a({feature:f}),f}else{var y=null,g=!1;if(s.hasOwnProperty("negativeImage")||s.hasOwnProperty("symbolRank")||s.hasOwnProperty("surroundLineType")?g=!0:y=this._getSymbolDataFromCache(t,e),!y||g){var d=new SuperMap.GetSymbolInfoParameters({libID:t,code:e});i&&(d.inputPoints=L.Util.latLngsToSuperMapPoints(i)),s.hasOwnProperty("negativeImage")&&(d.negativeImage=s.negativeImage),s.hasOwnProperty("symbolRank")&&(d.symbolRank=s.symbolRank),s.hasOwnProperty("surroundLineType")&&(d.surroundLineType=s.surroundLineType),L.supermap.symbolInfoService(this.serverUrl).getSymbolInfo(d,function(o){g||o.result.symbolType!==SuperMap.Plot.SymbolType.DOTSYMBOL||this._cacheSymbolData(o.result),s.symbolData=SuperMap.PlotUtil.cloneObject(o.result);var r=L.supermap.plotting.PlottingObject.createSymbol(t,e,i,s,n,l);this.addFeatures(r),"function"==typeof a&&a({feature:r})},this)}else{s.symbolData=y;var f=L.supermap.plotting.PlottingObject.createSymbol(t,e,i,s,n,l);this.addFeatures(f),"function"==typeof a&&a({feature:f})}}},createGroupObject:function(t,e){var i=[];for(var s in t)t[s]&&t[s]instanceof n.GraphicObject&&i.push(t[s]);if(i.length>1){var a=new o.GroupObject(0,SuperMap.Plot.SymbolType.GROUPOBJECT,[],{subObjects:i,uuid:e});return this.addFeatures(a),a}return null},unGroupObject:function(t){var e=[];return t.symbolType===SuperMap.Plot.SymbolType.GROUPOBJECT||t.symbolType===SuperMap.Plot.SymbolType.FLAGGROUP?(e=t._unGroupObject(),this.removeFeatures(t),t.destroy()):e.push(t),e},createInterferenceBeam:function(t,e,i,o,n,s){n||(n={}),n.associatedUuid=t,n.uuid=i,n.custom=s;var a=L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.INTERFERENCEBEAM,e,n,o,s);return this.addFeatures(a),a},createSatellite:function(t,e,i,o,n,s,a,l,r){var u=this._getSymbolDataFromCache(t,e);if(null===u){var p=new SuperMap.GetSymbolInfoParameters({libID:t,code:e});L.supermap.symbolInfoService(this.serverUrl).getSymbolInfo(p,function(u){this._cacheSymbolData(u.result),a||(a={}),a.serverUrl=this.serverUrl,a.orbitPoints=i,a.textContent=o,a.uuid=n,a.custom=r,a.subSymbol={libID:t,code:e,symbolData:SuperMap.PlotUtil.cloneObject(u.result),textContent:o};var p=L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.SATELLITE,[],a,s,r);this.addFeatures(p),"function"==typeof l&&l({feature:p})},this)}else{a||(a={}),a.serverUrl=this.serverUrl,a.orbitPoints=i,a.textContent=o,a.uuid=n,a.custom=r,a.subSymbol={libID:t,code:e,symbolData:u,textContent:o};var h=L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.SATELLITE,[],a,s,r);this.addFeatures(h),"function"==typeof l&&l({feature:h})}},createSatelliteTimeWindows1:function(t,e,i,o,n,s){n||(n={}),n.associatedUuid=t,n.timeWindows=e,n.custom=s,n.type="Number",n.uuid=i;var a=L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.SATELLITETIMEWINDOWS,[],n,o,s);return this.addFeatures(a),a},createSatelliteTimeWindows2:function(t,e,i,o,n,s){n||(n={}),n.associatedUuid=t,n.timeWindows=e,n.custom=s,n.type="Time",n.uuid=i;var a=L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.SATELLITETIMEWINDOWS,[],n,o,s);return this.addFeatures(a),a},createSymbolText:function(t,e,i,o,n,s){n||(n={}),n.associatedUuid=t,n.symbolTexts=e,n.custom=s,n.uuid=i;var a=L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.SYMBOLTEXT,[],n,o,s);return SuperMap.Plot.AnalysisSymbol.mergeDefaultStyleToLayer(a),o&&SuperMap.Util.extend(a.style,o),this.addFeatures(a),a},createSymbolText1:function(t,e,i,o,n,s){n||(n={}),n.associatedUuid=t,n.textContent=e,n.custom=s,n.uuid=i;var a=L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.SYMBOLTEXT1,[],n,o,s);return this.addFeatures(a),a},createNavyDeployment:function(t,e,i,o,n,s,a){if(n||(n={}),n.associatedUuid=t,n.custom=a,n.serverUrl=this.serverUrl,e&&0!==e.length){for(var l=[],r=0,u=e.length;r<u;r++)null===e[r].symbolData&&(e[r].symbolData=this._getSymbolDataFromCache(e[r].libID,e[r].code),null===e[r].symbolData&&-1===SuperMap.Util.indexOf(l,e[r])&&l.push(e[r]));if(0!==l.length)for(var p=l.slice(),h=0;h<l.length;h++){var c=new SuperMap.GetSymbolInfoParameters({libID:l[h].libID,code:l[h].code});L.supermap.symbolInfoService(this.serverUrl).getSymbolInfo(c,function(t){this._cacheSymbolData(t.result);for(var i=0,l=e.length;i<l;i++)if(null===e[i].symbolData&&e[i].libID===t.result.libID&&e[i].code===t.result.code){var r=SuperMap.Util.indexOf(p,e[i]);-1!==r&&p.splice(r,1),e[i].symbolData=SuperMap.PlotUtil.cloneObject(t.result)}if(0===p.length){n.subSymbols=e;var u=L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.NAVYDEPLOYMENT,[],n,o,a);this.addFeatures(u),"function"==typeof s&&s({feature:u})}},this)}else{n.subSymbols=e;var y=L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.NAVYDEPLOYMENT,[],n,o,a);this.addFeatures(y),"function"==typeof s&&s({feature:y})}}},createAirDeployment:function(t,e,i,o,n,s,a){if(n||(n={}),n.associatedUuid=t,n.custom=a,n.serverUrl=this.serverUrl,e&&0!==e.length){for(var l=[],r=0,u=e.length;r<u;r++)null===e[r].symbolData&&(e[r].symbolData=this._getSymbolDataFromCache(e[r].libID,e[r].code),null===e[r].symbolData&&-1===SuperMap.Util.indexOf(l,e[r])&&l.push(e[r]));if(0!==l.length)for(var p=l.slice(),h=0;h<l.length;h++){var c=new SuperMap.GetSymbolInfoParameters({libID:l[h].libID,code:l[h].code});L.supermap.symbolInfoService(this.serverUrl).getSymbolInfo(c,function(t){this._cacheSymbolData(t.result);for(var i=0,l=e.length;i<l;i++)if(null===e[i].symbolData&&e[i].libID===t.result.libID&&e[i].code===t.result.code){var r=SuperMap.Util.indexOf(p,e[i]);-1!==r&&p.splice(r,1),e[i].symbolData=SuperMap.PlotUtil.cloneObject(t.result)}if(0===p.length){n.subSymbols=e;var u=L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.AIRDEPLOYMENT,[],n,o,a);this.addFeatures(u),"function"==typeof s&&s({feature:u})}},this)}else{n.subSymbols=e;var y=L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.AIRDEPLOYMENT,[],n,o,a);this.addFeatures(y),"function"==typeof s&&s({feature:y})}}},createNavyRoute:function(t,e,i,o,n,s){n||(n={}),n.routeNodes=e,n.uuid=i,n.custom=s,n.arrRoutePts=t;var a=L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.NAVYROUTE,[],n,o,s);return this.addFeatures(a),a},createMissileRoute:function(t,e,i,o,n,s){n||(n={}),n.routeNodes=e,n.uuid=i,n.custom=s,n.arrRoutePts=t;var a=L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.MISSILEROUTE,[],n,o,s);return this.addFeatures(a),a},createAirRoute:function(t,e,i,o,n,s){n||(n={}),n.routeNodes=e,n.uuid=i,n.custom=s,n.arrRoutePts=t;var a=L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.AIRROUTE,[],n,o,s);return this.addFeatures(a),a},createFlags:function(t,e,i){for(var o=[],n=0;n<t.length;n++)100===t[n].libID&&t[n].code>=2800&&t[n].code<=2900&&o.push(t[n]);var a=null;return o.length>1&&(a=new s.FlagGroup(0,SuperMap.Plot.SymbolType.FLAGGROUP,[],{subObjects:o,ratio:e,uuid:i}),this.addFeatures(a)),a},createArcRegion:function(t,e,i,o,n,s,a,l,r,u,p){r||(r={}),r.centerPoint=t,r.radius=e,r.startAngle=i,r.endAngle=o,r.textContent=n,r.textPosition=s,r.uuid=a,r.custom=p,r.spatialAnalystUrl=this.spatialAnalystUrl;var h=new SuperMap.BufferDistance({value:1e3*r.radius}),c=new SuperMap.BufferSetting({endType:SuperMap.BufferEndType.ROUND,leftDistance:h,rightDistance:h,semicircleLineSegment:36}),y=new SuperMap.GeometryBufferAnalystParameters({sourceGeometry:L.marker(r.centerPoint),sourceGeometrySRID:parseInt(this._map.options.crs.code.split(":")[1]),bufferSetting:c}),g=this;L.supermap.spatialAnalystService(this.spatialAnalystUrl).bufferAnalysis(y,function(t){r.circlePts=[];for(var e=t.result.resultGeometry.points,i=0,o=e.length;i<o;i++)r.circlePts.push(new SuperMap.Geometry.Point(e[i].x,e[i].y));var n=L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.ARCREGION,[],r,l,p);g.addFeatures(n),"function"==typeof u&&u({feature:n})},SuperMap.DataFormat.ISERVER)},geoJsonToFeature:function(t,e){var i=JSON.parse(t),o=parseInt(i.libID),n=parseInt(i.code);if(i.isEdit=!0,SuperMap.AlgoSymbolFactory.isAccessServer(o,n)){(l={}).negativeImage=i.negativeImage,l.symbolRank=parseInt(i.symbolRank),l.surroundLineType=parseInt(i.surroundLineType);var s=!1;(l.negativeImage||0!==l.surroundLineType||0!==l.symbolRank)&&(s=!0);var a=this._getSymbolDataFromCache(o,n);if(s||null===a){d=new SuperMap.GetSymbolInfoParameters({libID:o,code:n,negativeImage:l.negativeImage,symbolRank:l.symbolRank,surroundLineType:l.surroundLineType,inputPoints:i.localePoints,subSymbols:i.subSymbols});L.supermap.symbolInfoService(this.serverUrl).getSymbolInfo(d,function(t){if(t.result.libID&&t.result.code){t.result.symbolType!==SuperMap.Plot.SymbolType.DOTSYMBOL||s||this._cacheSymbolData(t.result),a=SuperMap.Util.cloneObject(t.result),SuperMap.Plot.AnalysisSymbol.mergeSymbolDataAndServerData(i,a);var l={symbolData:i,serverUrl:this.serverUrl},r=L.supermap.plotting.PlottingObject.createSymbol(o,n,null,l);this.addFeatures(r),"function"==typeof e&&e({feature:r})}},this)}else{SuperMap.Plot.AnalysisSymbol.mergeSymbolDataAndServerData(i,a);var l={symbolData:i,serverUrl:this.serverUrl},r=L.supermap.plotting.PlottingObject.createSymbol(o,n,null,l);this.addFeatures(r),"function"==typeof e&&e({feature:r})}}else if(i.subSymbols&&0!==i.subSymbols.length){for(var u=[],p=0,h=i.subSymbols.length;p<h;p++)if(!i.subSymbols[p].symbolData){var c=L.supermap.plotting.getControl(this._map,this.serverUrl).getSymbolLibManager().getSymbolLibByLibId(i.subSymbols[p].libID);c&&c.querySymbolbyKey(n.toString()).length>0&&(i.subSymbols[p].symbolData=this._getSymbolDataFromCache(i.subSymbols[p].libID,i.subSymbols[p].code),null===i.subSymbols[p].symbolData&&-1===SuperMap.Util.indexOf(u,i.subSymbols[p])&&u.push(i.subSymbols[p]))}for(var y=u.slice(),g=0;g<u.length;g++){var d=new SuperMap.GetSymbolInfoParameters({libID:u[g].libID,code:u[g].code});L.supermap.symbolInfoService(this.serverUrl).getSymbolInfo(d,function(t){this._cacheSymbolData(t.result);for(var s=0,a=i.subSymbols.length;s<a;s++)if(null===i.subSymbols[s].symbolData&&i.subSymbols[s].libID===t.result.libID&&i.subSymbols[s].code===t.result.code){var l=SuperMap.Util.indexOf(y,i.subSymbols[s]);-1!==l&&y.splice(l,1),i.subSymbols[s].symbolData=SuperMap.PlotUtil.cloneObject(t.result)}if(0===y.length){var r={symbolData:i,serverUrl:this.serverUrl,symbolType:i.symbolType},u=L.supermap.plotting.PlottingObject.createSymbol(o,n,null,r);this.addFeatures(u),"function"==typeof e&&e({feature:u})}},this)}if(0===u.length){var l={symbolData:i,serverUrl:this.serverUrl,symbolType:i.symbolType},r=L.supermap.plotting.PlottingObject.createSymbol(o,n,null,l);this.addFeatures(r),"function"==typeof e&&e({feature:r})}}else{var l={symbolData:i,serverUrl:this.serverUrl,symbolType:i.symbolType},r=L.supermap.plotting.PlottingObject.createSymbol(o,n,null,l);this.addFeatures(r),"function"==typeof e&&e({feature:r})}},_getFeatureFromEvent:function(t){var e=null;if(!this._map)return e;if(this.isSelected)for(var i=this._map.layerPointToLatLng(L.point(0,0)),o=this._map.layerPointToLatLng(L.point(this._clickTolerance(),0)),n=new SuperMap.Geometry.Point(i.lng,i.lat),s=new SuperMap.Geometry.Point(o.lng,o.lat),a=SuperMap.Plot.PlottingUtil.distance(n,s),l=this.features.length-1;l>=0&&null===(e=this._selectFeature(this.features[l],t.latlng,a));l--);return e},_getSymbolDataFromCache:function(t,e){var i=L.supermap.plotting.getControl(this._map,this.serverUrl).getSymbolLibManager().getSymbolLibByLibId(t);return null!==i?i.getSymbolData(e):null},_cacheSymbolData:function(t){var e=L.supermap.plotting.getControl(this._map,this.serverUrl).getSymbolLibManager().getSymbolLibByLibId(t.libID);null!==e&&e.cacheSymbolData(t)},_isAvoidRegion:function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];if(0!==e.length){var o=null;if(0===e[0].avoidRegions.length)return e[0];if(o=new l.AvoidRegionControl(e[0]),this._map.addControl(o),!0){for(var n=0,s=e[0].avoidRegions.length;n<s;n++)this.removeFeatures(e[0].avoidRegions[n]);return this._map.removeControl(o),!1,e[0]}}},_selectFeature:function(t,e,i){if(null==t)return null;if(void 0!==t.style&&null!==t.style&&"none"===t.style.display)return null;if(!(t instanceof r.PlottingObject))return null;if(t instanceof o.GroupObject){for(a=0;a<t.components.length;a++)if(this._selectFeature(t.components[a],e,i))return t.isSelected?t.components[a]:t}else if(t instanceof u.Route){for(a=0;a<t.components.length;a++)if(this._selectFeature(t.components[a],e,i))return t.components[a]===SuperMap.Plot.SymbolType.ROUTENODE||t.components[a]===SuperMap.Plot.SymbolType.LITERATESIGN?t.components[a]:t}else if(t.symbolType===SuperMap.Plot.SymbolType.SYMBOLTEXT){for(a=0;a<t.components.length;a++)if(this._selectFeature(e,i,t.components[a]))return t}else if(t.symbolType===SuperMap.Plot.SymbolType.ROUTENODE||t.symbolType===SuperMap.Plot.SymbolType.LITERATESIGN){var n=t.getBounds();if(n&&n.isValid()&&e.lng>=n.getWest()&&e.lng<=n.getEast()&&e.lat>=n.getSouth()&&e.lat<=n.getNorth())return t}else for(var s=this._map.latLngToLayerPoint(e),a=0,l=t.components.length;a<l;a++)if(t.components[a]._containsPoint&&t.components[a]._containsPoint(s))return t;return null}}),h=e.plottingLayer=function(t,e,i){return new p(t,e,i)};L.supermap.plotting.plottingLayer=h},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PlottingLayerBase=void 0;var o=i(7),n=i(4),s=i(14),a=i(5);e.PlottingLayerBase=L.Path.extend({name:"",serverUrl:null,features:null,initialize:function(t,e,i){i=i||{},L.setOptions(this,i),this.name=t,this.serverUrl=e,this.features=[]},destroy:function(){this.name="",this.serverUrl=null,this.features=null},beforeAdd:function(t){L.Path.prototype.beforeAdd.call(this,t)},onAdd:function(t){L.Path.prototype.onAdd.call(this,t),this._map=t;var e=this;this._map.on("zoomend",function(){for(var t=0;t<e.features.length;t++)e.features[t]._reView()})},onRemove:function(){L.Path.prototype.onRemove.call(this),this.removeAllFeatures()},addFeatures:function(t){SuperMap.Util.isArray(t)||(t=[t]);for(var e=0;e<t.length;)t[e]instanceof n.PlottingObject||t[e]instanceof s.AvoidRegion?(this.features.push(t[e]),t[e].onAdd(this),e++):t.splice(e,1)},removeFeatures:function(t){SuperMap.Util.isArray(t)||(t=[t]);for(var e=0,i=t.length;e<i;e++){var l=t[e];if(l instanceof n.PlottingObject||t[e]instanceof s.AvoidRegion){(l instanceof o.GroupObject||l instanceof a.Route)&&this._map&&this._map.getPlotEditControl()&&this._map.getPlotEditControl().disableEditFeatures(l.components),this._map&&this._map.getPlotEditControl()&&this._map.getPlotEditControl().disableEditFeatures(l),l.symbolType===SuperMap.Plot.SymbolType.ROUTENODE&&l.route&&l.route.deleteRouteNode(l.routeNode),l.symbolType!==SuperMap.Plot.SymbolType.SYMBOLTEXT&&l.symbolType!==SuperMap.Plot.SymbolType.SYMBOLTEXT1||l.removeSymbolTextsFromDotSymbol(l.associatedUuid),l.symbolType===SuperMap.Plot.SymbolType.LINERELATION&&(l.startAssociatedUuid&&l.removeJoinLineFromDotSymbol(l.startAssociatedUuid),l.endAssociatedUuid&&l.removeJoinLineFromDotSymbol(l.endAssociatedUuid)),l.ownerGroup?(l.ownerGroup.removeComponents(),this.removeFeatures(l)):(l._clearComponents(),l.geoSymbolTexts&&l.geoSymbolTexts.length>0&&this.removeFeatures(l.geoSymbolTexts));var r=SuperMap.Util.indexOf(this.features,l);-1!==r&&this.features.splice(r,1)}}this._update()},getFeatures:function(){return this.features.slice()},removeAllFeatures:function(){this.removeFeatures(this.features.slice()),this.features=[]},_setCursorStyle:function(t){void 0===t&&(t="");var e=!1;if(this._map.getPlottingLayers().length>1){var i=this._map.getPlottingLayers();for(var o in i)i[o]._renderer instanceof L.Canvas?i[o]._renderer._container.style.cursor=t:i[o]._renderer instanceof L.SVG&&(i[o]._renderer._rootGroup.style.cursor=t);e=!0}e||(this._renderer instanceof L.Canvas?this._renderer._container.style.cursor=t:this._renderer instanceof L.SVG&&(this._renderer._rootGroup.style.cursor=t,this._map._panes.overlayPane.style.cursor=t,this._map._panes.overlayPane.style.width=this._renderer._svgSize.x+"px",this._map._panes.overlayPane.style.height=this._renderer._svgSize.y+"px"))},_update:function(){this._map&&this._updatePath()},_containsPoint:function(t){return!1},_updatePath:function(){this._renderer._drawPlottingLayers(this._getLayersInBounds())},_project:function(){var t=this;t._pxBounds=L.bounds(L.point(0,0),L.point(0,0)),t._getLayersInBounds().map(function(e){e._project(),t._pxBounds.extend(e._pxBounds.min),t._pxBounds.extend(e._pxBounds.max)})},_getLayersInBounds:function(){var t=[],e=this._map.getBounds();return this.features.map(function(i){var o=i.getBounds();o.isValid()&&e.contains(o)&&t.push(i)}),t},bringToBack:function(){return L.Path.prototype.beforeAdd.call(this),this._map&&(L.DomUtil.toBack(this._getContainer()),this._setAutoZIndex(Math.max)),this},bringToFront:function(){return L.Path.prototype.bringToFront.call(this),this._map&&(L.DomUtil.toFront(this._getContainer()),this._setAutoZIndex(Math.min)),this},_setAutoZIndex:function(t){for(var e,i=this.getPane().children,o=-t(-1/0,1/0),n=0,s=i.length;n<s;n++)e=i[n].style.zIndex,i[n]!==this._container&&e&&(o=t(o,+e));isFinite(o)&&(this.options.zIndex=o+t(-1,1),this._updateZIndex())},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_getContainer:function(){return this._renderer._container}})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.Plot=SuperMap.Plot=SuperMap.Plot||{};SuperMap.Plot.SymbolType={DOTSYMBOL:1,ALGOSYMBOL:2,TEXTSYMBOL:34,ELLIPSESYMBOL:31,CIRCLESYMBOL:29,RECTANGLESYMBOL:26,ARBITRARYPOLYGONSYMBOL:32,POLYLINESYMBOL:24,PARALLELOGRAM:28,ARCSYMBOL:44,REGULARPOLYGON:410,CHORDSYMBOL:370,PIESYMBOL:380,KIDNEY:390,POLYBEZIERSYMBOL:590,PARALLELLINE:48,BRACESYMBOL:400,ANNOFRAMESYMBOL:320,ANNOFRAMESYMBOLM:321,TRAPEZOIDSYMBOL:350,POLYBEZIERCLOSESYMBOL:360,GROUPOBJECT:1e3,LINERELATION:1001,INTERFERENCEBEAM:1002,POLYGONREGION:1003,ARCREGION:1004,AIRROUTE:1005,NAVYROUTE:1006,MISSILEROUTE:1007,NAVYDEPLOYMENT:1008,AIRDEPLOYMENT:1009,SATELLITE:1010,SATELLITETIMEWINDOWS:1011,SYMBOLTEXT:1012,RUNWAY:1013,CURVEEIGHT:1014,ROUTENODE:1015,ARROWLINE:1016,PATHTEXT:1017,LITERATESIGN:1018,CONCENTRICCIRCLE:1019,FLAGGROUP:1020,SYMBOLTEXT1:1021,COMBINATIONALCIRCLE:1022,FREECURVE:1023,SYMBOLTEXTBOX:1024,NODECHAIN:1025,LINEMARKING:1026,AVOIDREGION:1027},SuperMap.Plot.LineRelation={SOLID:0,DASH:1,ARROW:2},SuperMap.Plot.AlgoSurroundLineType={NONE:0,INNER:1,OUT:2,ALL:3},SuperMap.Plot.RouteNodeType={RENDEZVOUS:"RENDEZVOUS",EXPANDING:"EXPANDING",VOLLEY:"VOLLEY",STANDBY:"STANDBY",SUPPLY:"SUPPLY",TAKEOFF:"TAKEOFF",INITIAL:"INITIAL",VISUALINITAL:"VISUALINITAL",LANCH:"LANCH",TURNING:"TURNING",AIMING:"AIMING",COMMONROUTE:"COMMONROUTE",WEAPONLAUNCH:"WEAPONLAUNCH",TARGET:"TARGET",ATTACK:"ATTACK",SUPPRESS:"SUPPRESS",EIGHTSPIRAL:"EIGHTSPIRAL",HAPPYVALLEY:"HAPPYVALLEY"},SuperMap.Plot.RelLineText={ONLINE:0,ONLEFTLINE:1,ONRIGHTLINE:2,ONBOTHLINE:3},SuperMap.Plot.RadiusLineType={NONE:0,SOLID:1,ARROW:2},SuperMap.Plot.AnnoPosition={LEFTTOP:0,LEFTBOTTOM:1,RIGHTTOP:2,RIGHTBOTTOM:3,TOP:4,BOTTOM:5,LEFT:6,RIGHT:7},SuperMap.Plot.ArrowLineType={DOUBLELINE:0,TRIANGLESOLID:1,NONE:2},SuperMap.Plot.TextBoxType={WITHTIPBOX:0,RECTBOX:1,LINEBOX:2,NONEBOX:3},SuperMap.Plot.PositionOffsetType={LINE:0,GRADIENTLINE:1},SuperMap.Plot.AlignType={LEFT:0,RIGHT:1,UP:2,DOWN:3,VERTICALCENTER:4,HORIZONTALCENTER:5},SuperMap.Plot.AddPoint_WayType={UNKNOWN:0,POLYLINE:1,CURVE:2},SuperMap.Plot.EditMode={ADDCONTROLPOINT:0,EDITCONTROLPOINT:1,EDITCIRCUMRECTANGLE:2}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.PlottingUtil=SuperMap.Plot.PlottingUtil=SuperMap.Plot.PlottingUtil||{};SuperMap.Plot.PlottingUtil.getSurroundLinePts=function(t,e){for(var i=[],o=[],n=0;n<t.length-1;n++){var s,a,l=[];if(!SuperMap.Plot.PlottingUtil.equalFuzzy(t[n].x,t[n+1].x)||!SuperMap.Plot.PlottingUtil.equalFuzzy(t[n].y,t[n+1].y)){l.push(t[n]),l.push(t[n+1]);var r=SuperMap.Plot.PlottingUtil.parallel(l,e);if(s=r[0],a=r[1],0!=i.length){var u=SuperMap.Plot.PlottingUtil.intersectLines(s,a,i[0],i[1]);if(u.isIntersectLines){var p=u.intersectPoint,h=SuperMap.Plot.PlottingUtil.distance(s,a);SuperMap.Plot.PlottingUtil.distance(p,a)>2*h?o.push(a):(o[o.length-1]=p,o.push(a))}else o.push(a)}else o.push(s),o.push(a);(i=[]).push(o[o.length-2]),i.push(o[o.length-1])}}if(t[0].x===t[t.length-1].x&&t[0].y===t[t.length-1].y&&1<o.length){var c=SuperMap.Plot.PlottingUtil.intersectLines(o[0],o[1],o[o.length-2],o[o.length-1]);if(c.isIntersectLines){var y=c.intersectPoint;o[o.length-1]=y,o[0]=y}}return o},SuperMap.Plot.PlottingUtil.getDataFromServer=function(t,e,i,o,n,s,a,l){var r;void 0!==s&&(r=s);var u=new SuperMap.GetSymbolInfoService(t);u.events.on({processCompleted:a,processFailed:l,scope:r});var p=new SuperMap.GetSymbolInfoParameters;p.libID=e,p.code=i,n&&SuperMap.Util.extend(p,n),o&&null!==o&&(SuperMap.Util.isArray(o)||(o=[o]),p.inputPoints=o),u.processAsync(p)},SuperMap.Plot.PlottingUtil.innerOutlineDir=function(t){function e(t,e){function i(t){var e=Math.atan2(t.y,t.x);return e<0&&(e+=2*Math.PI),e}var o=i(e)-i(t);return o<-Math.PI&&(o+=2*Math.PI),o>Math.PI&&(o-=2*Math.PI),o}if(t.length<3)return 1;for(var i=0,o={x:0,y:0},n={x:0,y:0},s=2;s<t.length;s++)n.x=t[s].x-t[s-1].x,n.y=t[s].y-t[s-1].y,o.x=t[s-1].x-t[s-2].x,o.y=t[s-1].y-t[s-2].y,i+=e(o,n);return n.x=t[1].x-t[0].x,n.y=t[1].y-t[0].y,o.x=t[0].x-t[t.length-1].x,o.y=t[0].y-t[t.length-1].y,(i+=e(o,n))>=0?-1:1},SuperMap.Plot.PlottingUtil.isNear=function(t,e){return e||(e=1e-18),t<e&&t>-e},SuperMap.Plot.PlottingUtil.equalFuzzy=function(t,e,i){return i||(i=1e-18),Math.abs(t-e)<=i},SuperMap.Plot.PlottingUtil.intersectLines=function(t,e,i,o){var n={};if(n.isIntersectLines=!1,t.x===e.x&&t.y===e.y||i.x===o.x&&i.y===o.y)return n;var s=e.x-t.x,a=e.y-t.y,l=o.x-i.x,r=o.y-i.y,u=s*r-l*a;if(this.isNear(u))return n;var p=(s*(t.y-i.y)-a*(t.x-i.x))/u,h=new SuperMap.Geometry.Point(0,0);return h.x=p*l+i.x,h.y=p*r+i.y,n.isIntersectLines=!0,n.intersectPoint=h,n},SuperMap.Plot.PlottingUtil.getEnvelopePoints=function(t){function e(t,e,i){for(var o=t.components[0].components,n=new SuperMap.Geometry.Point(0,0),s=0;s<o.length-1;s++)if(this.intersectLineSegs(e,i,o[s],o[s+1],n))return n;return null}function i(t,e){if(0===t.length||this.equalFuzzy(e[0].x,e[e.length-1].x,.5)&&this.equalFuzzy(e[0].y,e[e.length-1].y,.5))return e;for(var o=e[e.length-1],n=0;n<t.length;n++)if(this.equalFuzzy(t[n][0].x,o.x,.5)&&this.equalFuzzy(t[n][0].y,o.y,.5)){if(e=e.concat(t[n]),t.splice(n,1),void 0!==(a=i(t,e))&&0!==a.length)return a}else if(this.equalFuzzy(t[n][t[n].length-1].x,o.x,.5)&&this.equalFuzzy(t[n][t[n].length-1].y,o.y,.5)){for(var s=t[n].length-1;s>=0;s--)e.push(t[n][s]);t.splice(n,1);var a=i(t,e);if(void 0!==a&&0!==a.length)return a}return e}if(SuperMap.Util.isArray(t)||(t=[t]),0===t.length)return[];if(1===t.length)return t[0];for(n=0;n<t.length;n++)for(c=n+1;c<t.length;)!function(t,e){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(t[i].x!==e[i].x||t[i].y!==e[i].y)return!1;return!0}(t[n],t[c])?c++:t.splice(c,1);for(var o=[],n=0;n<t.length;n++)o.push(new SuperMap.Geometry.Polygon([new SuperMap.Geometry.LinearRing(t[n])]));for(var s=[],n=0;n<t.length;n++){var a=[],l=[],r=-1,u=-1,p=o.slice();p.splice(n,1);for(var h={},c=0;c<t[n].length;c++)if(function(t,e,i){for(var o=0;o<t.length;o++)if(t[o].containsPoint(e))return i.index=o,!0;return!1}(p,t[n][c],h)){if(0!==l.length){var y=e(o[h.index],t[n][c-1],t[n][c]);y&&y!==t[n][c-1]&&y!==t[n][c]&&l.push(y),a.push(l),l=[]}}else 0===c&&(r=a.length),c===t[n].length-1&&(u=a.length),0===l.length&&void 0!==h.index&&(y=e(o[h.index],t[n][c-1],t[n][c]))&&y!==t[n][c-1]&&y!==t[n][c]&&l.push(y),l.push(t[n][c].clone());if(0!==l.length&&a.push(l),r<a.length&&u<a.length&&r!==u){for(var g=0;g<a[r].length;g++)a[u].push(a[r][g]);a.splice(r,1)}s=s.concat(a)}for(var d=[];0!==s.length;){var f=s[0];s.splice(0,1);var S=i(s,f);void 0!==S&&(f=S),f.length>2&&d.push(f)}return d},SuperMap.Plot.PlottingUtil.isRight=function(t,e,i){var o=e,n=i,s=e,a=t;return(n.x-o.x)*(a.y-s.y)-(a.x-s.x)*(n.y-o.y)<0},SuperMap.Plot.PlottingUtil.radian=function(t,e){var i,o,n=0;return t instanceof L.LatLng&&e instanceof L.LatLng?(i=e.lng-t.lng,o=e.lat-t.lat):(i=e.x-t.x,o=e.y-t.y),(n=Math.atan2(o,i))<0&&(n+=2*Math.PI),n},SuperMap.Plot.PlottingUtil.findBisectorPoint=function(t,e,i,o){var n=this.radian(e,t),s=(n+this.radian(e,i))/2,a=Math.cos(s-n+Math.PI/2),l=o;this.isNear(a,.15)||(l=o/a);var r=e.x+l*Math.cos(s),u=e.y+l*Math.sin(s);return new SuperMap.Geometry.Point(r,u)},SuperMap.Plot.PlottingUtil.findPoint=function(t,e,i,o){if(t===e||Math.abs(i)<1e-18)return t;var n=this.radian(t,e)+o*Math.PI/180,s=t.x+i*Math.cos(n),a=t.y+i*Math.sin(n);return new SuperMap.Geometry.Point(s,a)},SuperMap.Plot.PlottingUtil.isSameQuadrant=function(t,e,i,o){var n=(e.x-t.x)*(o.x-i.x),s=(e.y-t.y)*(o.y-i.y);return!(Math.abs(n)<1e-18&&Math.abs(s)<1e-18)&&((n>0||Math.abs(n)<1e-18)&&(s>0||Math.abs(s)<1e-18))},SuperMap.Plot.PlottingUtil.isCross=function(t,e,i,o){var n=new SuperMap.Geometry.Point(0,0);return!(!this.intersectLineSegs(t,e,i,o,n)||n==t||n===e||n===i||n==o)},SuperMap.Plot.PlottingUtil.intersectLineSegs=function(t,e,i,o,n){if(this.equalFuzzy(t.x,e.x)&&SuperMap.Plot.PlottingUtil.equalFuzzy(t.y,e.y))return n.x=t.x,n.y=t.y,!1;if(this.equalFuzzy(i.x,o.x)&&this.equalFuzzy(i.y,o.y))return n.x=i.x,n.y=i.y,!1;var s=0,a=0;if(s=t.x>e.x?t.x:e.x,a=t.x<e.x?t.x:e.x,i.x-s>1e-16&&o.x-s>1e-16||i.x-a<-1e-16&&o.x-a<-1e-16)return!1;if(s=t.y>e.y?t.y:e.y,a=t.y<e.y?t.y:e.y,i.y-s>1e-16&&o.y-s>1e-16||i.y-a<-1e-16&&o.y-a<-1e-16)return!1;var l=e.x-t.x,r=e.y-t.y,u=o.x-i.x,p=o.y-i.y,h=t.x-i.x,c=t.y-i.y,y=l*p-u*r,g=y;if(Math.abs(l)>1e-18&&Math.abs(u)>1e-18&&(g/=l*u),Math.abs(g)<1e-18)return t===i?(n.x=t.x,n.y=t.y,!this.isSameQuadrant(t,e,i,o)):e===o?(n.x=e.x,n.y=e.y,!this.isSameQuadrant(t,e,i,o)):t===o?(n.x=t.x,n.y=t.y,this.isSameQuadrant(t,e,i,o)):e===i&&(n.x=e.x,n.y=e.y,this.isSameQuadrant(t,e,i,o));var d=(l*c-r*h)/y,f=(u*c-p*h)/y;return!(d<0&&(Math.abs(d*u)>1e-16||Math.abs(d*p)>1e-16))&&(!(d>1&&(Math.abs((d-1)*u)>1e-16||Math.abs((d-1)*p)>1e-16))&&(!(f<0&&(Math.abs(f*l)>1e-16||Math.abs(f*r)>1e-16))&&(!(f>1&&(Math.abs((f-1)*l)>1e-16||Math.abs((f-1)*r)>1e-16))&&(Math.abs(d)<1e-18?(n.x=i.x,n.y=i.y,!0):Math.abs(d-1)<1e-18?(n.x=o.x,n.y=o.y,!0):Math.abs(f)<1e-18?(n.x=t.x,n.y=t.y,!0):Math.abs(f-1)<1e-18?(n.x=e.x,n.y=e.y,!0):!(d<0&&(Math.abs(d*u)>1e-16||Math.abs(d*p)>1e-16))&&(!(d>1&&(Math.abs((d-1)*u)>1e-16||Math.abs((d-1)*p)>1e-16))&&(!(f<0&&(Math.abs(f*l)>1e-16||Math.abs(f*r)>1e-16))&&(!(f>1&&(Math.abs((f-1)*l)>1e-16||Math.abs((f-1)*r)>1e-16))&&(n.x=d*u+i.x,n.y=d*p+i.y,!0))))))))},SuperMap.Plot.PlottingUtil.parallel=function(t,e){var i=[];if(!t||null===t||t.length<2)return i;var o=!1;t.length>3&&t[0].x===t[t.length-1].x&&t[0].y===t[t.length-1].y&&(o=!0),o?(i[0]=this.findBisectorPoint(t[t.length-2],t[0],t[1],e),i[t.length-1]=i[0]):(i[0]=this.findPoint(t[0],t[1],e,90),i[t.length-1]=this.findPoint(t[t.length-1],t[t.length-2],-e,90));for(var n=t[0],s=t[1],a=t[1],l=1;l<t.length-1;l++)if(s=t[l],t[l]!==t[l-1]&&(n=t[l-1]),t[l]!==t[l+1]){a=t[l+1];u=this.findBisectorPoint(n,s,a,e);this.isCross(n,i[l-1],s,u)&&(u=i[l-1]),i[l]=u}else{for(var r=l;r<nPntCount-1;){if(pSrc[r]!==pSrc[r+1]){a=pSrc[r+1];break}r++}if(r<nPntCount-1){var u=this.FindBisectorPoint(n,s,a,e);for(this.isCross(n,pntResults[l-1],s,u)&&(u=pntResults[l-1]);l<r;)pntResults[l]=u,l++;l=r-1}}return i},SuperMap.Plot.PlottingUtil.distance=function(t,e){return Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y))},SuperMap.Plot.PlottingUtil.projectPoint=function(t,e,i){if(e===i)return e;var o=new SuperMap.Geometry.Point(0,0),n=i.x-e.x,s=e.y-i.y,a=n*n,l=s*s,r=n*s,u=n*n+s*s;return o.x=(r*(e.y-t.y)+e.x*l+t.x*a)/u,o.y=(r*(e.x-t.x)+e.y*a+t.y*l)/u,o},SuperMap.Plot.PlottingUtil.pointToLineDis=function(t,e,i){var o=this.projectPoint(t,e,i);return this.distance(t,o)},SuperMap.Plot.PlottingUtil.pointToPloyLineDis=function(t,e,i){if(e===i)return this.distance(t,e);var o=(e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y),n=(i.x-t.x)*(i.x-t.x)+(i.y-t.y)*(i.y-t.y),s=(e.x-i.x)*(e.x-i.x)+(e.y-i.y)*(e.y-i.y),a=(o+s-n)/(2*s);a<0?a=0:a>1&&(a=1);var l=(i.x-e.x)*a+e.x,r=(i.y-e.y)*a+e.y,u=(l-t.x)*(l-t.x)+(r-t.y)*(r-t.y);return Math.sqrt(u)},SuperMap.Plot.PlottingUtil.isCounterClockwise=function(t,e,i){return(i.x-e.x)*(t.y-e.y)-(t.x-e.x)*(i.y-e.y)>0},SuperMap.Plot.PlottingUtil.clearSamePts=function(t){for(var e=t.length,i=0;i<e-1;)this.equalFuzzy(t[i].x,t[i+1].x)&&this.equalFuzzy(t[i].y,t[i+1].y)?(t.splice(i,1),e--):i++;return t},SuperMap.Plot.PlottingUtil.getBeizerCtrlPt=function(t){var e=[],i=t.length;if(i<3)for(n=0;n!=i;++n)e[n]=t[n].clone();else{for(var o=0,n=0;n<3*i-2;n+=3)e[n]=t[o].clone(),e[n+1]=new SuperMap.Geometry.Point(0,0),e[n+2]=new SuperMap.Geometry.Point(0,0),o++;for(n=1;n<i-1;n++)SuperMap.Plot.PlottingUtil.getTrianglePoints(8,3,t[n-1],t[n],t[n+1],e[3*n-1],e[3*n+1]);SuperMap.Plot.PlottingUtil.getTrapezoidPoints(.6,e[0],e[3],e[2],e[1]),SuperMap.Plot.PlottingUtil.getTrapezoidPoints(.6,e[3*i-3],e[3*i-6],e[3*i-5],e[3*i-4]),e[3*i-1]=e[3*i-2]=t[i-1].clone()}return e},SuperMap.Plot.PlottingUtil.generateBeizerPointsNoCtrlPt=function(t){var e=SuperMap.Plot.PlottingUtil.getBeizerCtrlPt(t);return SuperMap.Plot.PlottingUtil.generateBeizerPointsWithCtrlPt(e)},SuperMap.Plot.PlottingUtil.generateBeizerPointsWithCtrlPt=function(t){var e=t.length,i=[];if(t.length<3)for(o=0;o<e;o++)i[o]=t[o].clone();else{e/=3;for(var o=0;o<3*e&&!(o+4>=3*e);o+=3){var n=t[o].x,s=t[o].y,a=t[o+1].x,l=t[o+1].y,r=t[o+2].x,u=t[o+2].y,p=t[o+3].x,h=t[o+3].y;if(SuperMap.Plot.PlottingUtil.equalFuzzy(n,a,1e-10)&&SuperMap.Plot.PlottingUtil.equalFuzzy(s,l,1e-10)&&SuperMap.Plot.PlottingUtil.equalFuzzy(r,p,1e-10)&&SuperMap.Plot.PlottingUtil.equalFuzzy(u,h,1e-10))i.push(new SuperMap.Geometry.Point(n,s)),i.push(new SuperMap.Geometry.Point(r,u));else for(var c=0;c<=1;c+=.03125){var y,g,d,f,S=c*c,P=S*c;y=1-3*c+3*S-P,g=3*(c-2*S+P),d=3*(S-P),f=P;var m=new SuperMap.Geometry.Point(y*n+g*a+d*r+f*p,y*s+g*l+d*u+f*h);i.push(m)}}}return i},SuperMap.Plot.PlottingUtil.computeBeizerPoints=function(t,e,i){var o=SuperMap.Plot.PlottingUtil.polylineDistance(e),n=[],s=[],a=[];if(t){s.push(e[0]);var l=i[0],r=i[1],u=e[0].x+o*l,p=e[0].y+o*r;s.push(new SuperMap.Geometry.Point(u,p)),n.push(new SuperMap.Geometry.Point(u,p));for(f=1;f<e.length-1;f++){var l=i[4*f-2],r=i[4*f-1],u=e[f].x+o*l,p=e[f].y+o*r;s.push(new SuperMap.Geometry.Point(u,p)),n.push(new SuperMap.Geometry.Point(u,p)),s.push(new SuperMap.Geometry.Point(e[f].x,e[f].y)),l=i[4*f],r=i[4*f+1],u=e[f].x+o*l,p=e[f].y+o*r,s.push(new SuperMap.Geometry.Point(u,p)),n.push(new SuperMap.Geometry.Point(u,p))}var h=e.length-1;l=i[4*h-2],r=i[4*h-1],u=e[h].x+o*l,p=e[h].y+o*r,s.push(new SuperMap.Geometry.Point(u,p)),n.push(new SuperMap.Geometry.Point(u,p)),s.push(new SuperMap.Geometry.Point(e[h].x,e[h].y)),s.push(new SuperMap.Geometry.Point(e[h].x,e[h].y)),s.push(new SuperMap.Geometry.Point(e[h].x,e[h].y)),a=SuperMap.Plot.PlottingUtil.generateBeizerPointsWithCtrlPt(s)}else{i=[];var c=(s=SuperMap.Plot.PlottingUtil.getBeizerCtrlPt(e))[1].x-s[0].x,y=s[1].y-s[0].y,g=c/o,d=y/o;i.push(g),i.push(d),n.push(s[1]);for(var f=1;f<e.length-1;f++){var g=(c=s[3*f-1].x-s[3*f].x)/o,d=(y=s[3*f-1].y-s[3*f].y)/o;i.push(g),i.push(d),n.push(s[3*f-1]);var S=(s[3*f+1].x-s[3*f].x)/o,P=(s[3*f+1].y-s[3*f].y)/o;i.push(S),i.push(P),n.push(s[3*f+1])}g=(c=s[3*(e.length-1)-1].x-s[3*(e.length-1)].x)/o,d=(y=s[3*(e.length-1)-1].y-s[3*(e.length-1)].y)/o,i.push(g),i.push(d),n.push(s[3*(e.length-1)-1]),a=SuperMap.Plot.PlottingUtil.generateBeizerPointsWithCtrlPt(s)}return{scalePoints:n,scaleValues:i,beizerPoints:a}},SuperMap.Plot.PlottingUtil.getTrianglePoints=function(t,e,i,o,n,s,a){var l=i.x,r=i.y,u=o.x,p=o.y,h=n.x,c=n.y;SuperMap.Plot.PlottingUtil.getPointsByTriangle(t,e,l,r,u,p,h,c,s,a)},SuperMap.Plot.PlottingUtil.getPointsByTriangle=function(t,e,i,o,n,s,a,l,r,u){var p=n+(a-i),h=s+(l-o),c=0,y=0;if(i==a)c=i,y=h;else if(o==l)c=p,y=o;else{var g=1*(l-o)/(a-i),d=o-i*g;y=g*(c=(h+p/g-d)/(g+1/g))+d}var f=Math.sqrt(1*(n-p)*(n-p)+1*(s-h)*(s-h)),S=Math.sqrt(1*(i-n)*(i-n)+1*(o-s)*(o-s)),P=Math.sqrt(1*(n-a)*(n-a)+1*(s-l)*(s-l)),m=0;p=c+(p-c)*(m=S+P?1+(P-S)*t/(P+S):1),h=y+(h-y)*m,0==f&&(f=1),r.x=n+(n-p)*S/(e*f),r.y=s+(s-h)*S/(e*f),u.x=n+(p-n)*P/(e*f),u.y=s+(h-s)*P/(e*f)},SuperMap.Plot.PlottingUtil.getTrapezoidPoints=function(t,e,i,o,n){var s=e.x,a=e.y,l=i.x,r=i.y,u=o.x,p=o.y;return SuperMap.Plot.PlottingUtil.getPointsByTrapezoid(t,s,a,l,r,u,p,n)},SuperMap.Plot.PlottingUtil.getPointsByTrapezoid=function(t,e,i,o,n,s,a,l){var r=0,u=0,p=0,h=0;if(0==Math.abs(i-n))r=e+o-s,u=a;else if(0==Math.abs(e-o))r=s,u=i+n-a;else{var c=1*(i-n)/(e-o),y=a-c*s;u=c*(r=((n+i)/2+(e+o)/(2*c)-y)/(c+1/c))+y,r=2*r-s,u=2*u-a}var g=Math.sqrt(1*(e-o)*(e-o)+1*(i-n)*(i-n)),d=Math.sqrt(1*(e-r)*(e-r)+1*(i-u)*(i-u));return g>0?(p=e+(o-e)*d/g,h=i+(n-i)*d/g):(p=e,h=i),l.x=p+(r-p)*t,l.y=h+(u-h)*t,l},SuperMap.Plot.PlottingUtil.pointIsOnPolyLine=function(t,e,i){if(SuperMap.Plot.PlottingUtil.equalFuzzy(t.x,e.x)&&SuperMap.Plot.PlottingUtil.equalFuzzy(t.y,e.y)||SuperMap.Plot.PlottingUtil.equalFuzzy(t.x,i.x)&&SuperMap.Plot.PlottingUtil.equalFuzzy(t.y,i.y))return!0;var o=t.x-e.x,n=t.y-e.y,s=t.x-i.x,a=t.y-i.y,l=(o*s+n*a)/(Math.sqrt(o*o+n*n)*Math.sqrt(s*s+a*a));return!!SuperMap.Plot.PlottingUtil.equalFuzzy(l,-1,.1)},SuperMap.Plot.PlottingUtil.pointIsOnPolyLines=function(t,e){if(!e||null===e||0===e.length)return{isOnPolyLine:!1,index:-1};for(var i=!1,o=-1,n=0;n<e.length-1;n++)if(i=SuperMap.Plot.PlottingUtil.pointIsOnPolyLine(t,e[n],e[n+1])){o=n;break}return{isOnPolyLine:i,index:o}},SuperMap.Plot.PlottingUtil.computePointToLineMinDis=function(t,e){for(var i=-1,o=-1,n=0;n<e.length-1;n++){var s=e[n],a=e[n+1],l=SuperMap.Plot.PlottingUtil.projectPoint(t,s,a);if(SuperMap.Plot.PlottingUtil.pointIsOnPolyLine(l,s,a)){var r=SuperMap.Plot.PlottingUtil.distance(t,l);i<0?(i=r,o&&(o=n)):i>r&&(i=r,o=n)}}return o&&i<0&&(o=-1),{minDis:i,index:o}},SuperMap.Plot.PlottingUtil.findPointInLine=function(t,e,i){if(t===e||Math.abs(i)<1e-18)return t;var o=e.x-t.x,n=e.y-t.y,s=i/Math.sqrt(o*o+n*n),a=t.x+o*s,l=t.y+n*s;return new SuperMap.Geometry.Point(a,l)},SuperMap.Plot.PlottingUtil.operateControlPoints=function(t){var e=t,i=e.length;if(3==i){var o=new SuperMap.Geometry.Point(0,0);SuperMap.Plot.PlottingUtil.getTrapezoidPoints(1,t[0],t[1],t[2],o),e.push(o)}if(i>4&&(e.splice(4,i-4),i=e.length),SuperMap.Plot.PlottingUtil.pointIsRightToLine(t[0],t[1],e[2])){n=e[0];e[0]=e[1],e[1]=n}if(!SuperMap.Plot.PlottingUtil.pointIsRightToVerticle(e[0],e[1],e[2])){var n=e[2];e[2]=e[3],e[3]=n}return e},SuperMap.Plot.PlottingUtil.pointIsRightToLine=function(t,e,i){return(e.x-t.x)*(i.y-t.y)-(i.x-t.x)*(e.y-t.y)<0},SuperMap.Plot.PlottingUtil.pointIsRightToVerticle=function(t,e,i){var o=new SuperMap.Geometry.Point(.5*(e.x+t.x),.5*(e.y+t.y)),n=new SuperMap.Geometry.Point(e.x-t.x,e.y-t.y),s=new SuperMap.Geometry.Point(i.x-o.x,i.y-o.y);return n.x*s.x+n.y*s.y>0},SuperMap.Plot.PlottingUtil.linePnt=function(t,e,i){var o=SuperMap.Plot.PlottingUtil.distance(t,e);if(0==o)return t;var n=i/o;return SuperMap.Plot.PlottingUtil.findPointOnLineByRatio(n,t,e)},SuperMap.Plot.PlottingUtil.findPointOnLineByRatio=function(t,e,i){var o=new SuperMap.Geometry.Point(0,0);return o.x=e.x+(i.x-e.x)*t,o.y=e.y+(i.y-e.y)*t,o},SuperMap.Plot.PlottingUtil.rotateAngle=function(t,e,i){var o=e,n=Math.cos(o),s=Math.sin(o),a=i.x-t.x,l=i.y-t.y;return i.x=a*n-l*s+t.x,i.y=a*s+l*n+t.y,i},SuperMap.Plot.PlottingUtil.resize=function(t,e,i){return i.x=t.x+e*(i.x-t.x),i.y=t.y+e*(i.y-t.y),i},SuperMap.Plot.PlottingUtil.findPointInPolyLine=function(t,e){if(e<0||t.length<2)return{index:-1,pt:null};if(Math.abs(e)<1e-18)return{index:0,pt:t[0]};for(var i=0,o=0;o<t.length-1;o++)if((i+=SuperMap.Plot.PlottingUtil.distance(t[o],t[o+1]))>e||SuperMap.Plot.PlottingUtil.equalFuzzy(i,e)){var n=i-e,s=t[o+1],a=t[o],l=n/SuperMap.Plot.PlottingUtil.distance(s,a),r=new SuperMap.Geometry.Point(0,0);return r.x=s.x+(a.x-s.x)*l,r.y=s.y+(a.y-s.y)*l,{index:o,pt:r}}return{index:-1,pt:null}},SuperMap.Plot.PlottingUtil.polylineDistance=function(t){if(0===t.length)return 0;for(var e=0,i=0;i<t.length-1;i++)e+=SuperMap.Plot.PlottingUtil.distance(t[i],t[i+1]);return e},SuperMap.Plot.PlottingUtil.rotate=function(t,e,i,o){var n=o.x-t.x,s=o.y-t.y,a=n*e-s*i+t.x,l=n*i+s*e+t.y;return new SuperMap.Geometry.Point(a,l)},SuperMap.Plot.PlottingUtil.getIncentrePointOnSegmentByScale=function(t,e,i){var o=e.x,n=e.y,s=i.x,a=i.y,l=Math.sqrt(1*(o-s)*(o-s)+1*(n-a)*(n-a)),r=0,u=0;return 0==l?(r=o,u=n):(r=o+(s-o)*t/l,u=n+(a-n)*t/l),new SuperMap.Geometry.Point(r,u)},SuperMap.Plot.PlottingUtil.getExcentrePointOnSegmentByScale=function(t,e,i){var o=e.x,n=e.y,s=i.x,a=i.y,l=0,r=0,u=Math.sqrt(1*(o-s)*(o-s)+1*(n-a)*(n-a));return 0===u?(l=o,r=n):(l=o+(o-s)*t/u,r=n+(n-a)*t/u),new SuperMap.Geometry.Point(l,r)},SuperMap.Plot.PlottingUtil.getSidePointsOfLine=function(t,e,i){var o=e.x,n=e.y,s=i.x,a=i.y,l=Math.sqrt(1*(o-s)*(o-s)+1*(n-a)*(n-a)),r=0,u=0;0==l?(u=0,r=t):(r=t*(o-s)/l,u=t*(n-a)/l);var p=-u+s,h=+r+a,c=+u+s,y=-r+a;return{pntLeft:new SuperMap.Geometry.Point(c,y),pntRight:new SuperMap.Geometry.Point(p,h)}},SuperMap.Plot.PlottingUtil.pointProjectToSegment=function(t,e,i){var o,n,s=0,a=0,l=0,r=1;if(a=e.x!==t.x?(e.y-t.y)/(e.x-t.x):1.7976931348623157e308,l=i.x!==t.x?(i.y-t.y)/(i.x-t.x):1.7976931348623157e308,s=i.y!==e.y?(i.x-e.x)/(e.y-i.y):1.7976931348623157e308,o=e.x>=t.x&&e.y>=t.y?1:e.x<t.x&&e.y>t.y?2:e.x<=t.x&&e.y<=t.y?3:4,n=i.x>t.x&&i.y>t.y?1:i.x<t.x&&i.y>t.y?2:i.x<t.x&&i.y<t.y?3:4,o==n)(a<s&&l<s||a>s&&l>s)&&(r=0);else switch(o){case 1:(4==n&&a<s||2==n&&a>s)&&(r=0);break;case 2:(1==n&&a<s||3==n&&a>s)&&(r=0);break;case 3:(2==n&&a<s||4==n&&a>s)&&(r=0);break;case 4:(3==n&&a<s||1==n&&a>s)&&(r=0)}var u=new SuperMap.Geometry.Point(0,0);return SuperMap.Plot.PlottingUtil.equalFuzzy(s-1.7976931348623157e308,0)?(u.x=t.x,u.y=e.y):SuperMap.Plot.PlottingUtil.equalFuzzy(s,0)?(u.x=e.x,u.y=t.y):(u.x=(s*(e.y-t.y)+s*s*t.x+e.x)/(s*s+1),u.y=t.y+s*(u.x-t.x)),{isOnline:1===r,projectPoint:u}},SuperMap.Plot.PlottingUtil.coordinateTrans=function(t,e,i){var o=SuperMap.Plot.PlottingUtil.distance(new SuperMap.Geometry.Point(0,0),e),n=SuperMap.Plot.PlottingUtil.radian(new SuperMap.Geometry.Point(0,0),e)+i*Math.PI/180,s=o*Math.cos(n)+t.x,a=o*Math.sin(n)+t.y;return new SuperMap.Geometry.Point(s,a)},SuperMap.Plot.PlottingUtil.triangleHeightAndPartBottomLen=function(t,e,i){var o,n,s=(i.x-e.x)*(i.x-e.x)+(i.y-e.y)*(i.y-e.y),a=Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y)),l=Math.sqrt((t.x-i.x)*(t.x-i.x)+(t.y-i.y)*(t.y-i.y));if(0==l||0==a)o=0,n=0;else if(0==s)o=a,n=0;else{var r=(a*a+l*l-s)/2/a/l,u=0;r>=1?(r=1,u=0):u=Math.sqrt(1-r*r),o=l*r,n=l*u}return{dLen1:o,dLen2:n}},SuperMap.Plot.PlottingUtil.paraLine=function(t,e,i){var o=[];if(2>t.length)return o;if(i){r=t[1].clone();r=SuperMap.Plot.PlottingUtil.rotateAngle(t[0],Math.PI/2,r),o.push(SuperMap.Plot.PlottingUtil.linePnt(t[0],r,e));for(u=1;u<t.length-1;u++)if(!SuperMap.Plot.PlottingUtil.equalFuzzy(t[u].x,t[u+1].x)||!SuperMap.Plot.PlottingUtil.equalFuzzy(t[u].y,t[u+1].y)){for(var n=SuperMap.Plot.PlottingUtil.radian(t[u],t[u+1]),s=(p=SuperMap.Plot.PlottingUtil.radian(t[u],t[u-1]))-n;s<0;)s+=2*Math.PI;var a,l=s/2;a=l>Math.PI/2?l-Math.PI/2:Math.PI/2-l;y=e/Math.cos(a);r=t[u+1].clone(),r=SuperMap.Plot.PlottingUtil.rotateAngle(t[u],l,r),o.push(SuperMap.Plot.PlottingUtil.linePnt(t[u],r,y))}r=t[t.length-2].clone(),r=SuperMap.Plot.PlottingUtil.rotateAngle(t[t.length-1],-1*Math.PI/2,r),o.push(SuperMap.Plot.PlottingUtil.linePnt(t[t.length-1],r,e))}else{var r=t[1].clone();r=SuperMap.Plot.PlottingUtil.rotateAngle(t[0],-Math.PI/2,r),o.push(SuperMap.Plot.PlottingUtil.linePnt(t[0],r,e));for(var u=1;u<t.length-1;u++)if(!SuperMap.Plot.PlottingUtil.equalFuzzy(t[u].x,t[u+1].x)||!SuperMap.Plot.PlottingUtil.equalFuzzy(t[u].y,t[u+1].y)){for(var n=SuperMap.Plot.PlottingUtil.radian(t[u],t[u+1]),p=SuperMap.Plot.PlottingUtil.radian(t[u],t[u-1]),s=p-n;s<0;)s+=2*Math.PI;var h,c=Math.PI-s/2;h=c>Math.PI/2?c-Math.PI/2:Math.PI/2-c;var y=e/Math.cos(h);r=t[u-1].clone(),r=SuperMap.Plot.PlottingUtil.rotateAngle(t[u],c,r),o.push(SuperMap.Plot.PlottingUtil.linePnt(t[u],r,y))}r=t[t.length-2].clone(),r=SuperMap.Plot.PlottingUtil.rotateAngle(t[t.length-1],Math.PI/2,r),o.push(SuperMap.Plot.PlottingUtil.linePnt(t[t.length-1],r,e))}return o},SuperMap.Plot.PlottingUtil.circlePoint=function(t,e,i,o){o*=Math.PI/180;var n=t.x+e*Math.cos(o),s=t.y+i*Math.sin(o);return new SuperMap.Geometry.Point(n,s)},SuperMap.Plot.PlottingUtil.getPolygonCenterPt=function(t){if(!t||null===t||0===t.length)return null;for(var e=0,i=0,o=0;o<t.length;o++)e+=t[o].x,i+=t[o].y;return new SuperMap.Geometry.Point(e/t.length,i/t.length)},SuperMap.Plot.PlottingUtil.ptIsInPolygon=function(t,e){if(!t||null===t||0===t.length)return!1;for(var i=0,o=t.length,n=0;n<o;n++){var s=t[n],a=t[(n+1)%o];if(s.y!==a.y){var l=s.y<a.y?s.y:a.y,r=s.y>a.y?s.y:a.y;e.y<l||e.y>r||(e.y-s.y)*(a.x-s.x)/(a.y-s.y)+s.x>e.x&&i++}}return i%2==1},SuperMap.Plot.PlottingUtil.projectPtOnPolyLine=function(t,e){if(2>e.length)return{index:-1,pt:null};for(var i=0;i<e.length-1;i++){var o=SuperMap.Plot.PlottingUtil.pointProjectToSegment(t,e[i],e[i+1]);if(o.isOnline)return{index:i,pt:o.projectPoint}}return{index:-1,pt:null}},SuperMap.Plot.PlottingUtil.isPloyClockwise=function(t){var e=SuperMap.Plot.PlottingUtil.clonePoints(t),i=e.length;if(!(i<3)){var o=e[0].y*(e[i-1].x-e[1].x);e.push(e[0].clone());for(var n=1;n<i;++n)o+=e[n].y*(e[n-1].x-e[n+1].x);return o>0?0:1}},SuperMap.Plot.PlottingUtil.isSamePt=function(t,e){return!(!SuperMap.Plot.PlottingUtil.equalFuzzy(t.x,e.x)||!SuperMap.Plot.PlottingUtil.equalFuzzy(t.y,e.y))},SuperMap.Plot.PlottingUtil.getPtsIndexByDistance=function(t,e){var i=SuperMap.Plot.PlottingUtil.findPointInPolyLine(e,t);return{index:i.index,pts:i.pt,bfind:-1!==i.index}},SuperMap.Plot.PlottingUtil.ptInBounds=function(t,e){return t.x>e.left&&t.x<e.right&&t.y<e.top&&t.y>e.bottom},SuperMap.Plot.PlottingUtil.InnerAngle=function(t,e,i){if(t==e||t==i)return 0;var o=SuperMap.Plot.PlottingUtil.distance(t,e),n=SuperMap.Plot.PlottingUtil.distance(t,i),s=SuperMap.Plot.PlottingUtil.distance(e,i),a=(o*o+n*n-s*s)/(2*o*n);return a>1&&SuperMap.Plot.PlottingUtil.equalFuzzy(a,1)?a=1:a<1&&SuperMap.Plot.PlottingUtil.equalFuzzy(a,-1)&&(a=-1),Math.acos(a)},SuperMap.Plot.PlottingUtil.plumbLineLen=function(t,e,i){return SuperMap.Plot.PlottingUtil.distance(t,e)*Math.sin(SuperMap.Plot.PlottingUtil.InnerAngle(e,t,i))},SuperMap.Plot.PlottingUtil.paraPolygon=function(t,e,i){var o=[],n=SuperMap.Plot.PlottingUtil.clonePoints(t),s=n.length;if(s<2)return o;r=new SuperMap.Geometry.Point(0,0);if(i){if(s<3)r=n[1].clone(),SuperMap.Plot.PlottingUtil.rotateAngle(n[0],Math.PI,r),o.push(SuperMap.Plot.PlottingUtil.linePnt(n[0],r,e));else{for(var a=SuperMap.Plot.PlottingUtil.radian(n[0],n[1]),l=(p=SuperMap.Plot.PlottingUtil.radian(n[0],n[n.length-1]))-a;l<0;)l+=2*Math.PI;h=(c=l/2)>Math.PI/2?c-Math.PI/2:Math.PI/2-c;y=e/Math.cos(h);r=n[1].clone(),r=SuperMap.Plot.PlottingUtil.rotateAngle(n[0],c,r),o.push(SuperMap.Plot.PlottingUtil.linePnt(n[0],r,y))}for(u=1;u<s-1;u++){for(var a=SuperMap.Plot.PlottingUtil.radian(n[u],n[u+1]),l=(p=SuperMap.Plot.PlottingUtil.radian(n[u],n[u-1]))-a;l<0;)l+=2*Math.PI;h=(c=l/2)>Math.PI/2?c-Math.PI/2:Math.PI/2-c;y=e/Math.cos(h);r=n[u+1].clone(),r=SuperMap.Plot.PlottingUtil.rotateAngle(n[u],c,r),o.push(SuperMap.Plot.PlottingUtil.linePnt(n[u],r,y))}if(s<3)r=n[s-2].clone(),SuperMap.Plot.PlottingUtil.rotateAngle(n[s-1],0,r),o.push(SuperMap.Plot.PlottingUtil.linePnt(n[s-1],r,e));else{for(var a=SuperMap.Plot.PlottingUtil.radian(n[s-1],n[0]),l=(p=SuperMap.Plot.PlottingUtil.radian(n[s-1],n[s-2]))-a;l<0;)l+=2*Math.PI;h=(c=l/2)>Math.PI/2?c-Math.PI/2:Math.PI/2-c;y=e/Math.cos(h);r=n[0].clone(),r=SuperMap.Plot.PlottingUtil.rotateAngle(n[s-1],c,r),o.push(SuperMap.Plot.PlottingUtil.linePnt(n[s-1],r,y))}}else{if(s<3){var r=n[1].clone();SuperMap.Plot.PlottingUtil.rotateAngle(n[0],0,r),o.push(SuperMap.Plot.PlottingUtil.linePnt(n[0],r,e))}else{for(var a=SuperMap.Plot.PlottingUtil.radian(n[0],n[1]),l=(p=SuperMap.Plot.PlottingUtil.radian(n[0],n[s-1]))-a;l<0;)l+=2*Math.PI;h=(c=Math.PI-l/2)>Math.PI/2?c-Math.PI/2:Math.PI/2-c;y=e/Math.cos(h);r=n[s-1].clone(),r=SuperMap.Plot.PlottingUtil.rotateAngle(n[0],c,r),o.push(SuperMap.Plot.PlottingUtil.linePnt(n[0],r,y))}for(var u=1;u<s-1;u++){for(var a=SuperMap.Plot.PlottingUtil.radian(n[u],n[u+1]),l=(p=SuperMap.Plot.PlottingUtil.radian(n[u],n[u-1]))-a;l<0;)l+=2*Math.PI;h=(c=Math.PI-l/2)>Math.PI/2?c-Math.PI/2:Math.PI/2-c;y=e/Math.cos(h);r=n[u-1].clone(),r=SuperMap.Plot.PlottingUtil.rotateAngle(n[u],c,r),o.push(SuperMap.Plot.PlottingUtil.linePnt(n[u],r,y))}if(s<3)r=n[s-2].clone(),SuperMap.Plot.PlottingUtil.rotateAngle(n[s-1],Math.PI,r),o.push(SuperMap.Plot.PlottingUtil.linePnt(n[s-1],r,e));else{for(var a=SuperMap.Plot.PlottingUtil.radian(n[s-1],n[0]),p=SuperMap.Plot.PlottingUtil.radian(n[s-1],n[s-2]),l=p-a;l<0;)l+=2*Math.PI;var h,c=Math.PI-l/2;h=c>Math.PI/2?c-Math.PI/2:Math.PI/2-c;var y=e/Math.cos(h);r=n[s-2].clone(),r=SuperMap.Plot.PlottingUtil.rotateAngle(n[s-1],c,r),o.push(SuperMap.Plot.PlottingUtil.linePnt(n[s-1],r,y))}}return o},SuperMap.Plot.PlottingUtil.getOutRectangleDis=function(t){if(2>t.length)return 0;for(var e=t[0].x,i=t[0].x,o=t[0].y,n=t[0].y,s=1;s<t.length;s++)e<t[s].x&&(e=t[s].x),i>t[s].x&&(i=t[s].x),o<t[s].y&&(o=t[s].y),n>t[s].y&&(n=t[s].y);return SuperMap.Plot.PlottingUtil.distance(new SuperMap.Geometry.Point(e,o),new SuperMap.Geometry.Point(i,n))},SuperMap.Plot.PlottingUtil.clonePoints=function(t){var e=[];if(void 0===t||null===t)return e;if(SuperMap.Util.isArray(t)||(t=[t]),t&&null!==t)for(var i=0;i<t.length;i++)void 0!==t[i]&&null!==t[i]&&e.push(t[i].clone());return e}},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=o(i(0)),u=(o(i(3)),function(t){function e(t){n(this,e);var i=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.MAX_ARRAY_SIZE=128,i.sv1_DefaultAtLenDivAbLen=0,i.sv2_DefaultAjWidthDivAtLen=.148,i.sv3_DefaultAeWidthDivAtLen=.4,i.sv4_DefaultAeLenDivAtLen=.312,i.sv_AtScaleParameter=1.5,i.sv_AtLenDivAtWidth=1.35,i.sv_AtWidthDivAwWidth=.5,i.sv_defaultAwLenDivAbLen=.15,i.CLASS_NAME="SuperMap.Geometry.AlgoSymbol1004",i.symbolType=SuperMap.Plot.SymbolType.ALGOSYMBOL,i.symbolName||(i.symbolName="贝塞尔尖耳箭头"),i.minEditPts=3,i.maxEditPts=512,i.clearScalePoints(),0===i.getScaleValues().length&&(i.getScaleValues().push(i.sv1_DefaultAtLenDivAbLen),i.getScaleValues().push(i.sv2_DefaultAjWidthDivAtLen),i.getScaleValues().push(i.sv3_DefaultAeWidthDivAtLen),i.getScaleValues().push(i.sv4_DefaultAeLenDivAtLen)),i}return a(e,r["default"]),l(e,[{key:"calculateParts",value:function(){this.clearComponents(),this.applyUse()}},{key:"applyUse",value:function(){var t=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints);if((t=SuperMap.Plot.PlottingUtil.clearSamePts(t)).length>=2&&t.length<this.minEditPts&&this.calAssistantLine(),!(t.length<this.minEditPts)){var e=this.arrowMeshs(t);SuperMap.Plot.PlottingUtil.clearSamePts(e.shapePts);var i=SuperMap.Plot.PlottingUtil.clonePoints(t),o=i.length,n=!1;if(void 0!==i[0].z&&(n=!0),n){for(var s=e.leftBodyPts,a=e.rightBodyPts,l=e.arrowHeadPts,r=e.shapePts,u=[],p=0;p<r.length;p++)u.push({x:r[p].x,y:r[p].y,z:0});if(0==r.length)return!1;T=this.updateScalePoints(t);if(this.clearScalePoints(),3!=T.length)T=[];else for(p=0;p<T.length;p++)T[p].isScalePoint=!0,T[p].tag=p,this.addScalePoint(T[p]);var h=[],c={x:(i[0].x+i[1].x)/2,y:(i[0].y+i[1].y)/2},y={x:(s[s.length-1].x+a[0].x)/2,y:(s[s.length-1].y+a[0].y)/2},g=this.ComputeZValue(y,i[o-1],i[o-2]),d=0,f=0;s[0].x==i[0].x&&s[0].y==i[0].y?(d=i[0].z,f=i[1].z):(d=i[1].z,f=i[0].z),h.push({x:c.x,y:c.y,z:d});for(p=2;p<o-1;p++)h.push(i[p]);h.push({x:y.x,y:y.y,z:g});var S=[];this.ComputeBeizerZValueByDis(h,s,S),(h=[]).push({x:y.x,y:y.y,z:g});for(p=o-2;p>=2;p--)h.push(i[p]);h.push({x:c.x,y:c.y,z:f});var P=[];this.ComputeBeizerZValueByDis(h,a,P);for(var m=[],b=0;b<l.length;b++){var L=this.ComputeZValue(l[b],i[o-1],i[o-2]);m.push({x:l[b].x,y:l[b].y,z:L})}if(S.length>0&&P.length>0&&m.length>0){u=(u=(u=(u=[]).concat(S)).concat(m)).concat(P),this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,u,{surroundLineFlag:!1});for(var M=[],p=0;p<T.length;p++){var v=this.ComputeZValue(T[p],i[o-1],i[o-2]),_=new SuperMap.Geometry.Point(T[p].x,T[p].y);_.z=v,M.push(_)}this.clearScalePoints(),3!=T.length?T=[]:this.setScalePoints(this.getScalePoints().concat(M))}}else{if(0==e.shapePts.length)return;this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,e.shapePts,{surroundLineFlag:!1});var T=this.updateScalePoints(t);if(this.clearScalePoints(),3!=T.length)T=[];else for(p=0;p<T.length;p++)T[p].isScalePoint=!0,T[p].tag=p,this.addScalePoint(T[p])}}}},{key:"modifyPoint",value:function(t,e){if(!0===e.isScalePoint){var i=SuperMap.Plot.PlottingUtil.clonePoints(this.getControlPoints());i=SuperMap.Plot.PlottingUtil.clearSamePts(i),this.getScaleValues().length<4&&(this.getScaleValues().push(this.sv1_DefaultAtLenDivAbLen),this.getScaleValues().push(this.sv2_DefaultAjWidthDivAtLen),this.getScaleValues().push(this.sv3_DefaultAeWidthDivAtLen),this.getScaleValues().push(this.sv4_DefaultAeLenDivAtLen));var o=i.length;if(o<=2)return;var n=this.operateCtrlPts(i);o=n.length,o--;var s,a,l,r,u=this.calcScaleValueCount(i.length);if(this.getScaleValues().length<u){var p=this.calcDefaultScaleValues(o);s=p[0],a=p[1],l=p[2],r=p[3]}else s=this.getScaleValues()[0],a=this.getScaleValues()[1],l=this.getScaleValues()[2],r=this.getScaleValues()[3];for(var h=SuperMap.Plot.PlottingUtil.polylineDistance(i),c=[],y=0;y<this.getScalePoints().length;y++)c.push(this.getScalePoints()[y].clone());if(0==c.length)return;c[t]=e.clone();var g,d,y=o-1;g=o<=3?new SuperMap.Geometry.Point((n[0].x+n[1].x)/2,(n[0].y+n[1].y)/2):n[y-1].clone();var f=new SuperMap.Geometry.Point(0,0),S=new SuperMap.Geometry.Point(0,0),P=new SuperMap.Geometry.Point(0,0);SuperMap.Plot.PlottingUtil.getTrianglePoints(0,3,g,n[y],n[y+1],S,P),SuperMap.Plot.PlottingUtil.getTrapezoidPoints(.5,n[o],n[o-1],P,f),d=f.clone();var m,b,L,M,v,_,T=SuperMap.Plot.PlottingUtil.triangleHeightAndPartBottomLen(n[o],d,c[2]);m=T.dLen1,b=T.dLen2,0==m&&(m=.1),b=m,s=(m/=r+1)/h,1==t?(M=(T=SuperMap.Plot.PlottingUtil.triangleHeightAndPartBottomLen(n[o],d,c[1])).dLen1,l=(v=T.dLen2)/m,r=(M-m)/m):0==t?(m=(T=SuperMap.Plot.PlottingUtil.triangleHeightAndPartBottomLen(n[o],d,c[0])).dLen1,a=(L=T.dLen2)/m,(_=SuperMap.Plot.PlottingUtil.distance(n[o],n[o-1]))<2*m&&(m=.5*_),M=(T=SuperMap.Plot.PlottingUtil.triangleHeightAndPartBottomLen(n[o],d,c[1])).dLen1,l=(v=T.dLen2)/m,(r=(b-m)/m)<.1&&(l=v/(m=b/(1+(r=.1))),a=L/m),s=m/h):2==t&&(s=m/h),L=m*a,(_=SuperMap.Plot.PlottingUtil.distance(n[o],n[o-1]))<2*m&&(L=(m=.5*_)*a,s=m/h),this.getScaleValues()[0]=s,this.getScaleValues()[1]=a,this.getScaleValues()[2]=l,this.getScaleValues()[3]=r}this.calculateParts()}},{key:"arrowMeshs",value:function(t){var e=[],i=[],o=[],n=[],s=SuperMap.Plot.PlottingUtil.clonePoints(t),a=SuperMap.Plot.ArrowToolKit.generateArrowBodyShapePts(s,this.getScaleValues(),SuperMap.Plot.ArrowToolKit.ArrowBodyType.ARROWBODY_MULTIPOLYBEZIER),l=a.arrowTouLen,r=a.leftBodyPts,u=a.rightBodyPts;if(!SuperMap.Plot.PlottingUtil.equalFuzzy(l,0)){var p=[];p.push(r[r.length-1]),p.push(u[u.length-1]);var h=[];h.push(this.getScaleValues()[2]),h.push(this.getScaleValues()[3]),h.push(0),h.push(0);var c=SuperMap.Plot.ArrowToolKit.generateArrowHeadShapePts(s,p,h,l,SuperMap.Plot.ArrowToolKit.ArrowHeadType.ARROWHEAD_WITH_EAR),y=[];y.push(r[0]),y.push(u[0]);SuperMap.Plot.ArrowToolKit.generateArrowTailShapePts(t,y,.2,SuperMap.Plot.ArrowToolKit.ArrowTailType.ARROWTAIL_COATTAIL_POLYBODY);for(g=0;g<r.length;g++)e.push(r[g]),i.push(r[g]);for(g=0;g<c.length;g++)e.push(c[g]),n.push(c[g]);for(var g=u.length-1;g>=0;g--)e.push(u[g]),o.push(u[g])}return{shapePts:e,leftBodyPts:i,rightBodyPts:o,arrowHeadPts:n}}},{key:"updateScalePoints",value:function(t){var e=t.length,i=[];if(!(e<3)){var o=SuperMap.Plot.PlottingUtil.polylineDistance(t);if(!SuperMap.Plot.PlottingUtil.equalFuzzy(o,0)){var n=this.operateCtrlPts(t);e=n.length,e--;for(var s=[],a=0;a<this.getScaleValues().length;a++)s.push(this.getScaleValues()[a]);var l=this.genArrowBodyPts(o,n,s),r=l.ArrowBodyCenterPts,u=this.genAtPts(e,r,s,l.ArrowTouLen),p=this.calc3rdScalePt(e,r,s,l.ArrowTouLen);return i.push(new SuperMap.Geometry.Point(l.LeftBodyPtsTemp[e].x,l.LeftBodyPtsTemp[e].y)),i.push(new SuperMap.Geometry.Point(u[2].x,u[2].y)),i.push(new SuperMap.Geometry.Point(p.x,p.y)),i}}}},{key:"operateCtrlPts",value:function(t){var e=SuperMap.Plot.PlottingUtil.clonePoints(t);if(3===e.length){var i=((e[0].x+e[1].x)/2+e[2].x)/2,o=((e[0].y+e[1].y)/2+e[2].y)/2,n=new SuperMap.Geometry.Point(i,o),s=e[2];e[2]=n,e.push(s)}return e}},{key:"genArrowBodyPts",value:function(t,e,i){var o,n=[],s=[],a=[],l=[],r=[],u=[],p=e.length;p--;var h,c;if(i.length<this.calcScaleValueCount(p)){var y=this.calcDefaultScaleValues(p);h=y[0],c=y[1],y[2],y[3]}else h=i[0],c=i[1],i[2],i[3];var g=SuperMap.Plot.PlottingUtil.clonePoints(e),d=(g[0].x+g[1].x)/2,f=(g[0].y+g[1].y)/2,S=Math.abs(d-g[2].x),P=Math.abs(f-g[2].y),m=0;if(S>0&&P>0){var b=1/(d-g[2].x),L=-1/(f-g[2].y),M=1*g[2].y/(f-g[2].y)-1*g[2].x/(d-g[2].x);m=Math.abs(b*g[0].x+L*g[0].y+M)/Math.sqrt(b*b+L*L)}else P<=1e-4?m=Math.abs(f-g[1].y):S<=1e-4&&(m=Math.abs(d-g[1].x));var v=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(m,g[2],new SuperMap.Geometry.Point(d,f)),_=SuperMap.Plot.PlottingUtil.pointIsRightToLine(g[1],g[2],g[0]);_?(n[1]=g[1],s[1]=g[0]):(n[1]=g[0],s[1]=g[1]),g[1]=new SuperMap.Geometry.Point((g[0].x+g[1].x)/2,(g[0].y+g[1].y)/2);var T=Math.sqrt((v.pntLeft.x-v.pntRight.x)*(v.pntLeft.x-v.pntRight.x)+(v.pntLeft.y-v.pntRight.y)*(v.pntLeft.y-v.pntRight.y))*this.sv_AtWidthDivAwWidth,x=(o=T*this.sv_AtLenDivAtWidth)*c;SuperMap.Plot.PlottingUtil.equalFuzzy(h,0)||(x=(o=t*h)*c);var O=SuperMap.Plot.PlottingUtil.distance(g[p],g[p-1]),A=2*o;O<A&&(x=(o=O/2)*c),g.push(g[p].clone());var w,D;w=0,D=0;var E=0,I=[];for(E=2;E<=p;E++)w+=SuperMap.Plot.PlottingUtil.distance(g[E],g[E-1]);for(w-=o,E=2;E<=p-1;E++)D+=SuperMap.Plot.PlottingUtil.distance(g[E],g[E-1]),I[E]=x+(T-x)*Math.pow((w-D)/w,this.sv_AtScaleParameter);I[p]=x;var N,C=new SuperMap.Geometry.Point(0,0),R=new SuperMap.Geometry.Point(0,0),U=new SuperMap.Geometry.Point(0,0);for(E=2;E<=p-1;E++)SuperMap.Plot.PlottingUtil.getTrianglePoints(0,3,g[E-1],g[E],g[E+1],R,U),E==p-1&&SuperMap.Plot.PlottingUtil.getTrapezoidPoints(.5,g[p],g[p-1],U,C),N=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(I[E],R,g[E]),(_=SuperMap.Plot.PlottingUtil.pointIsRightToLine(U,R,N.pntRight))?(n[E]=new SuperMap.Geometry.Point(N.pntRight.x,N.pntRight.y),s[E]=new SuperMap.Geometry.Point(N.pntLeft.x,N.pntLeft.y)):(n[E]=new SuperMap.Geometry.Point(N.pntLeft.x,N.pntLeft.y),s[E]=new SuperMap.Geometry.Point(N.pntRight.x,N.pntRight.y));Math.sqrt(1*(g[p].x-C.x)*(g[p].x-C.x)+1*(g[p].y-C.y)*(g[p].y-C.y))>0&&(g[p]=SuperMap.Plot.PlottingUtil.getIncentrePointOnSegmentByScale(o,g[p],C)),N=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(x,g[p+1],g[p]),(_=SuperMap.Plot.PlottingUtil.pointIsRightToLine(g[p],g[p+1],N.pntLeft))?(s[p]=new SuperMap.Geometry.Point(N.pntLeft.x,N.pntLeft.y),n[p]=new SuperMap.Geometry.Point(N.pntRight.x,N.pntRight.y)):(s[p]=new SuperMap.Geometry.Point(N.pntRight.x,N.pntRight.y),n[p]=new SuperMap.Geometry.Point(N.pntLeft.x,N.pntLeft.y));var G;for(E=2;E<p;E++)SuperMap.Plot.PlottingUtil.getTrianglePoints(3,3,n[E-1],n[E],n[E+1],R,U),a[E]=new SuperMap.Geometry.Point(R.x,R.y),l[E]=new SuperMap.Geometry.Point(U.x,U.y),SuperMap.Plot.PlottingUtil.getTrianglePoints(3,3,s[E-1],s[E],s[E+1],R,U),r[E]=new SuperMap.Geometry.Point(R.x,R.y),u[E]=new SuperMap.Geometry.Point(U.x,U.y),2==E&&(SuperMap.Plot.PlottingUtil.getTrapezoidPoints(.5,n[1],n[2],a[2],C),l[E]=new SuperMap.Geometry.Point(C.x,C.y),SuperMap.Plot.PlottingUtil.getTrapezoidPoints(.5,s[1],s[2],r[2],C),u[E]=new SuperMap.Geometry.Point(C.x,C.y)),E==p-1&&(A=(O=SuperMap.Plot.PlottingUtil.distance(n[p],n[p-1]))/3,(G=SuperMap.Plot.PlottingUtil.getExcentrePointOnSegmentByScale(A,g[p],g[p+1])).x+=n[p].x-g[p].x,G.y+=n[p].y-g[p].y,A=(O=T-x)*Math.pow(A/w,this.sv_AtScaleParameter),N=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(A,n[p],G),a[p]=new SuperMap.Geometry.Point(N.pntLeft.x,N.pntLeft.y),A=(O=SuperMap.Plot.PlottingUtil.distance(s[p],s[p-1]))/3,(G=SuperMap.Plot.PlottingUtil.getExcentrePointOnSegmentByScale(A,g[p],g[p+1])).x+=s[p].x-g[p].x,G.y+=s[p].y-g[p].y,A=(O=T-x)*Math.pow(A/w,this.sv_AtScaleParameter),N=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(A,s[p],G),r[p]=new SuperMap.Geometry.Point(N.pntRight.x,N.pntRight.y));return{ArrowBodyCenterPts:SuperMap.Plot.PlottingUtil.clonePoints(g),LeftBodyPtsTemp:n,RightBodyPtsTemp:s,LeftBodyPtsLeftCtrlPts:a,LeftBodyPtsRightCtrlPts:l,RightBodyPtsLeftCtrlPts:r,RightBodyPtsRightCtrlPts:u,ArrowTouLen:o}}},{key:"calcScaleValueCount",value:function(t){return 4}},{key:"calcDefaultScaleValues",value:function(t){var e=[];return e.push(this.sv1_DefaultAtLenDivAbLen),e.push(this.sv2_DefaultAjWidthDivAtLen),e.push(this.sv3_DefaultAeWidthDivAtLen),e.push(this.sv4_DefaultAeLenDivAtLen),e}},{key:"genAtPts",value:function(t,e,i,o){var n=i[2],s=[],a=o*i[3],l=SuperMap.Plot.PlottingUtil.getExcentrePointOnSegmentByScale(a,e[t],e[t+1]);a=o*n;var r=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(a,e[t+1],l);return s.push(new SuperMap.Geometry.Point(r.pntLeft.x,r.pntLeft.y)),s.push(e[t+1]),s.push(new SuperMap.Geometry.Point(r.pntRight.x,r.pntRight.y)),s}},{key:"calc3rdScalePt",value:function(t,e,i,o){i[2];var n=o*i[3];return SuperMap.Plot.PlottingUtil.getExcentrePointOnSegmentByScale(n,e[t],e[t+1])}}]),e}());e.default=u,SuperMap.Geometry.AlgoSymbol1004=u},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.avoidRegion=e.AvoidRegion=void 0;var o=i(19),n=i(8),s=e.AvoidRegion=L.Evented.extend({options:{},uuid:null,associatedUuid:null,libID:null,code:null,maxEditPts:0,minEditPts:0,symbolType:null,latLngs:[],style:{fill:!1,color:"#0000ff",lineSymbolID:2,opacity:1,weight:1},components:[],initialize:function(t,e,i,o){this.components=[],this.minEditPts=3,this.maxEditPts=9999,this.libID=0,this.code=SuperMap.Plot.SymbolType.AVOIDREGION,this.symbolType=SuperMap.Plot.SymbolType.AVOIDREGION,this.symbolName="避让区域",o.style&&(this.style=SuperMap.PlotUtil.cloneObject(o.style)),o&&o.symbolData&&this._parseSymbolData(o.symbolData),L.Util.isArray(i)||(i=[i]),i.length>0&&(this.latLngs=L.Util.isArray(i)?i:[i]),SuperMap.Util.extend(this,o),void 0!==this.uuid&&null!==this.uuid||(this.uuid=SuperMap.PlotUtil.generateUuid())},destroy:function(){this.libID=null,this.code=null,this.symbolType=null,this.symbolName=null,this.uuid=null,this.associatedUuid=null,this.minEditPts=null,this.maxEditPts=null,this.latLngs=null,this.components=[]},onAdd:function(t){this.layer=t,this._renderer=t._renderer,this._map=t._map,this.redraw(),o.PlottingObjectDrag&&(this.dragging||(this.dragging=new o.PlottingObjectDrag(this)))},_clearComponents:function(){for(var t=0;t<this.components.length;t++)this.components[t].removeEventParent(this),this.components[t].onRemove(),delete this.components[t];this.components=[]},_addComponents:function(t){t._map=this._map,t._renderer=this._renderer,t.addEventParent(this),t.onAdd(),this.components.push(t)},_project:function(){var t=this;t._pxBounds=L.bounds(L.point(0,0),L.point(0,0)),t.components.map(function(e){t._pxBounds.extend(e._pxBounds.min),t._pxBounds.extend(e._pxBounds.max)})},getBounds:function(){var t=this;return t._bounds=new L.LatLngBounds,t.components.map(function(e){t._bounds.extend(e.getBounds())}),t._bounds},setLatLngs:function(t){return this.latLngs=t,this.redraw()},getLatLngs:function(){return this.latLngs},addLatLng:function(t){if(this.latLngs[this.latLngs.length-1].lat!==t.lat||this.latLngs[this.latLngs.length-1].lng!==t.lng)return this.latLngs.push(t),this.redraw()},redraw:function(){if(this._clearComponents(),this.getLatLngs().length>=this.minEditPts){t=new L.Polygon(this.getLatLngs(),{smoothFactor:.05});this._addComponents(t),t.setStyle(this.style)}else if(this.getLatLngs().length>=2&&this.getLatLngs().length<this.minEditPts){var t=new L.Polyline(this.getLatLngs(),{smoothFactor:.05});this._addComponents(t),t.setStyle(this.style)}},_modifyPoint:function(t,e){this.redraw(),this._map.getFeatureByUuid(this.associatedUuid).redraw()},move:function(t,e){L.Util.moveLatLngs(this.getLatLngs(),t,e),this.redraw(),null!==this._map&&void 0!==this._map&&this._map.getFeatureByUuid(this.associatedUuid).redraw()},rotate:function(t,e){L.Util.rotateLatLngs(this.getLatLngs(),e,t),null!==this._map&&void 0!==this._map&&this._map.getFeatureByUuid(this.associatedUuid).redraw()},_reView:function(){},_parseSymbolData:function(t){if(null!==t&&(this.libID=t.libID,this.code=t.code,this.symbolType=t.symbolType,this.maxEditPts=t.algoMaxEditPts,this.minEditPts=t.algoMinEditPts,void 0!==t.uuid&&(this.uuid=t.uuid),void 0!==t.associatedUuid&&(this.associatedUuid=t.associatedUuid),this.latLngs=[],t.controlPoints))for(var e=0;e<t.controlPoints.length;e++)this.latLngs.push(L.latLng(t.controlPoints[e].y,t.controlPoints[e].x))},getSymbolData:function(){var t={};t.uuid=this.uuid,t.associatedUuid=this.associatedUuid,t.libID=this.libID,t.code=this.code,t.symbolType=this.symbolType,t.algoMaxEditPts=this.maxEditPts,t.algoMinEditPts=this.minEditPts,t.controlPoints=[];for(var e=0;e<this.latLngs.length;e++)t.controlPoints.push({x:this.getLatLngs()[e].lng,y:this.getLatLngs()[e].lat,z:0});return t},clone:function(){var t=SuperMap.PlotUtil.cloneObject(this.getSymbolData());return t.uuid=SuperMap.PlotUtil.generateUuid(),L.supermap.plotting.avoidRegion(0,SuperMap.Plot.SymbolType.AVOIDREGION,L.Util.cloneLatLngs(this.getLatLngs()),{symbolData:t,style:SuperMap.PlotUtil.cloneObject(this.style)})},_containsPoint:function(t){var e=L.Util.latLngsToSuperMapPoints(this.getLatLngs());e.push(e[0].clone());for(var i,o,n,s,a,l,r,u=SuperMap.Number.limitSigDigs,p=u(t.x,14),h=u(t.y,14),c=e.length-1,y=0,g=0;g<c;++g)if(i=e[g],n=u(i.x,14),s=u(i.y,14),o=e[g+1],a=u(o.x,14),l=u(o.y,14),s!==l){if((r=u(function(t,e,i,o,n){return(o-e)/(n-i)*(t-n)+o}(h,n,s,a,l),14))===p&&(s<l&&h>=s&&h<=l||s>l&&h<=s&&h>=l)){y=-1;break}r<=p||n!==a&&(r<Math.min(n,a)||r>Math.max(n,a))||(s<l&&h>=s&&h<l||s>l&&h<s&&h>=l)&&++y}else if(h===s&&(n<=a&&p>=n&&p<=a||n>=a&&p<=n&&p>=a)){y=-1;break}return-1===y?1:!!(1&y)},_relationToLayer:function(t){var e=2,i=[];if(t instanceof L.Polygon)(i=L.Util.latLngsToSuperMapPoints(t.getLatLngs()[0])).push(i[0].clone());else if(t instanceof L.Polyline)i=L.Util.latLngsToSuperMapPoints(t.getLatLngs());else if(t instanceof n.Text){var o=t.getBounds();i.push(new SuperMap.Geometry.Point(o.left,o.top)),i.push(new SuperMap.Geometry.Point(o.left,o.bottom)),i.push(new SuperMap.Geometry.Point(o.right,o.bottom)),i.push(new SuperMap.Geometry.Point(o.top,o.right))}if(0===i.length)e=2;else{var s=this._containsPoint(i[0]);s&&(e=1);for(l=1;l<i.length;l++)if(s!==this._containsPoint(i[l])){e=0;break}if(2===e){var a=L.Util.latLngsToSuperMapPoints(this.getLatLngs());a.push(a[0].clone());for(var l=0;l<i.length-1;l++){for(var r=0;r<a.length-1;r++)if(SuperMap.Plot.PlottingUtil.isCross(i[l],i[l+1],a[r],a[r+1])){e=0;break}if(0===e)break}}}return e},_getWithoutPts:function(t,e){var i=L.Util.latLngsToSuperMapPoints(t);!0===e&&i[0].x!==i[i.length-1].x&&i[0].y!==i[i.length-1].y&&i.push(i[0]);for(var o=[],n=[],s=0;s<i.length;s++)if(this._containsPoint(i[s])||n.push(i[s].clone()),s<=i.length-2)for(var a=this._intersectSegs(i[s],i[s+1]),l=0;l<a.length;l++)n.push(a[l].clone()),n.length>1&&(o.push(n),n=[]);0!==n.length&&o.push(n);var r=o.length;if(!0===e&&r>1&&SuperMap.Plot.PlottingUtil.equalFuzzy(o[0][0].x,o[r-1][o[r-1].length-1].x)&&SuperMap.Plot.PlottingUtil.equalFuzzy(o[0][0].y,o[r-1][o[r-1].length-1].y)){for(var u=0;u<o[0].length;u++)o[r-1].push(o[0][u]);o.splice(0,1)}return o},_intersectSegs:function(t,e){var i=L.Util.latLngsToSuperMapPoints(this.getLatLngs());i.push(i[0].clone()),i[0].x!==i[i.length-1].x&&i[0].y!==i[i.length-1].y&&i.push(i[0]);for(var o=[],n=0;n<i.length-1;n++){var s=new SuperMap.Geometry.Point;SuperMap.Plot.PlottingUtil.intersectLineSegs(t,e,i[n],i[n+1],s)&&o.push(s)}for(var a=[];o.length>0;)if(1===o.length)a.push(o[0]),o.splice(0,1);else{for(var l=0,r=SuperMap.Plot.PlottingUtil.distance(t,o[0]),u=1;u<o.length;u++)SuperMap.Plot.PlottingUtil.distance(t,o[u])<r&&(r=SuperMap.Plot.PlottingUtil.distance(t,o[u]),l=u);a.push(o[l]),o.splice(l,1)}return a}}),a=e.avoidRegion=function(t,e,i,o){return new s(t,e,i,o)};L.supermap.plotting.avoidRegion=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.dotSymbol=e.DotSymbol=void 0;var o=i(2),n=i(36),s=i(8),a=e.DotSymbol=o.GraphicObject.extend({symbolSizeInLib:null,dRotate:0,initialScale:null,textDisplay:!0,symbolSize:null,positionOffset:!1,positionOffsetType:null,positionOffsetX:null,positionOffsetY:null,symbolRank:null,negativeImage:null,middleMarkBounds:null,maxScale:5,minScale:1,space:7,deployments:null,joinLines:null,initialize:function(t,e,i,n){if(this.symbolType=SuperMap.Plot.SymbolType.DOTSYMBOL,this.minEditPts=1,this.maxEditPts=1,this.joinLines=[],this.deployments=[],this.symbolSizeInLib=new SuperMap.Size(0,0),this.symbolSize=new SuperMap.Size(0,0),o.GraphicObject.prototype.initialize.call(this,t,e,i,n),null===this.positionOffsetType&&(this.positionOffsetType=SuperMap.Plot.PositionOffsetType.LINE),null===this.positionOffsetX&&(this.positionOffsetX=0),null===this.positionOffsetY&&(this.positionOffsetY=0),void 0===this.actualScale&&(this.actualScale=this.dScale),this.dScale>this.maxScale?this.dScale=this.maxScale:this.dScale<this.minScale&&(this.dScale=this.minScale),(null===this.symbolSize||0===this.symbolSize.w&&0===this.symbolSize.h)&&(this.symbolSize.w=this.symbolSizeInLib.w,this.symbolSize.h=this.symbolSizeInLib.h),null===this.initialScale){var s=this.symbolSizeInLib.w,a=this.symbolSize.w;this.symbolSizeInLib.w<this.symbolSizeInLib.h&&(s=this.symbolSizeInLib.h,a=this.symbolSize.h),this.initialScale=a/s,isNaN(this.initialScale)||this.initialScale===1/0||(this.symbolSize.w=this.initialScale*this.dScale*this.symbolSizeInLib.w,this.symbolSize.h=this.initialScale*this.dScale*this.symbolSizeInLib.h,void 0===this.fontSize&&(void 0===this.style.fontSize&&(this.style.fontSize=12),this.fontSize=this.style.fontSize/this.initialScale))}},destroy:function(){if(this.symbolRank=null,this.negativeImage=null,this.annotationIndex=-1,this.textPosition=null,this.symbolSizeInLib=null,this.symbolSize=null,this.middleMarkBounds=null,this.positionOffsetX=null,this.positionOffsetY=null,null!==this.joinLines&&void 0!==this.joinLines)for(var t=0;t<this.joinLines.length;t++)null!==this.joinLines[t]&&(this.joinLines[t].startAssociatedUuid===this.uuid&&(this.joinLines[t].startAssociatedUuid=null),this.joinLines[t].endAssociatedUuid===this.uuid&&(this.joinLines[t].endAssociatedUuid=null));this.joinLines=[],this.deployments=[],o.GraphicObject.prototype.destroy.call(this)},_reView:function(){if(void 0!==this.prevStrokeWidth&&this.prevStrokeWidth!==this.style.weight&&(this.strokeWidth=this.style.weight,this.prevStrokeWidth=this.style.weight),void 0!==this.prevFontSize&&this.prevFontSize!==this.style.fontSize&&(this.fontSize=this.style.fontSize/this.dScale/this.initialScale,this.prevFontSize=this.style.fontSize),void 0!==this.prevSpace&&this.prevSpace*this.dScale!==this.space&&(this.prevSpace=this.space/this.dScale),this.fromZoom!==this._map.getZoom()){if(this.scaleByMap&&!1!==this.scaleByMap)if(void 0===this.actualScale&&(this.actualScale=this.dScale),void 0===this.prevScale&&(this.prevScale=this.dScale),this.actualScale*=this._map.getZoomScale(this._map.getZoom(),this.fromZoom),this.actualScale>this.maxScale?this.dScale=this.maxScale:this.actualScale<this.minScale?this.dScale=this.minScale:this.dScale=this.actualScale,this.dScale!==this.prevScale){var t=this.initialScale*this.dScale;this.symbolSize.w=t*this.symbolSizeInLib.w,this.symbolSize.h=t*this.symbolSizeInLib.h,void 0===this.prevSpace&&(this.prevSpace=this.space),void 0===this.strokeWidth&&(this.strokeWidth=this.style.weight);var e=this.strokeWidth/.5*5;if(this.symbolSize.w<e&&this.symbolSize.h<e){this.scaleStrokeWidth=!0;var i=this.symbolSize.w>this.symbolSize.h?this.symbolSize.w:this.symbolSize.h;this.style.weight=Math.round(i/10),this.style.weight>=this.weight&&(this.style.weight=this.weight),this.style.weight<=.5&&(this.style.weight=.5)}else!0===this.scaleStrokeWidth&&(this.scaleStrokeWidth=!1),this.style.weight=this.strokeWidth;if(this.prevStrokeWidth=this.style.weight,this.style.fontSize=this.style.fontSize*this._map.getZoomScale(this._map.getZoom(),this.fromZoom),this.prevFontSize=this.style.fontSize,0!==this.textContent.length&&8===this.annotationPosition){var o=this.middleMarkBounds.scale(this.dScale*this.initialScale,this.anchorPoint),n=96*o.getWidth()/25.4/10,a=96*o.getHeight()/25.4/10;this.components[this._annotationId].options.graphicWidth=n,this.components[this._annotationId].options.graphicHeight=a}for(var l in this.components)l===this._annotationId&&this.components[l]instanceof s.Text?this.components[l].options.fontSize=this.style.fontSize:l!==this._annotationId&&this.components[l]instanceof s.Text?this.components[l].options.fontSize=t*(this.components[l].options.fontSize/this.prevScale/this.initialScale):l!==this._annotationId&&!0!==this.components[l].isLeadLine&&(this.components[l].options.weight=this.style.weight);for(var r=0;r<this.geoSymbolTexts.length;r++){var u=this.geoSymbolTexts[r];null!==u&&u._calculateParts()}var p=this.dScale/this.prevScale,h=this._map.getZoomScale(this._map.getZoom(),this.fromZoom);p!==h&&this._resizeCells(p*(1/h),this.getLatLngs()[0]),this._renderer instanceof L.Canvas&&p===h&&!0===this.positionOffset&&(this._clearComponents(),this._calculateParts()),this.prevScale=this.dScale}else{y=this._map.getZoomScale(this.fromZoom,this._map.getZoom());this._resizeCells(y,this.getLatLngs()[0])}else{for(var c=0;c<this.geoSymbolTexts.length;c++)this.geoSymbolTexts[c].fromZoom=this._map.getZoom();var y=this._map.getZoomScale(this.fromZoom,this._map.getZoom()),g=this.getLatLngs()[0];this._resizeCells(y,g)}this.fromZoom=this._map.getZoom(),this._updateSymbolTexts(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues),this.isSelected&&this._map.getPlotEditControl()&&this._map.getPlotEditControl().fire(SuperMap.Plot.Event.featuresmodified,{features:[this]})}},setLatLngs:function(t){for(o=0;o<this.deployments.length;o++){var e=this.deployments[o];null!==e&&(e.symbolType!==SuperMap.Plot.SymbolType.NAVYDEPLOYMENT&&e.symbolType!==SuperMap.Plot.SymbolType.AIRDEPLOYMENT||(e.style.display=this.style.display,e.redraw()))}for(o=0;o<this.joinLines.length;o++){var i=this.joinLines[o];null!==i&&(i.style.display=this.style.display,i.redraw())}for(var o=0;o<this.geoSymbolTexts.length;o++){var n=this.geoSymbolTexts[o];null!==n&&(n.style.display=this.style.display,n.redraw())}return this.latLngs=t,this.redraw()},getSpace:function(){return this.space},setSpace:function(t){this.space!==t&&(this.space=t,0!==this.textContent.length&&this._handleAnnotation())},setRotate:function(t){if(!isNaN(t)){var e=t-this.dRotate;this.dRotate=t;for(var i=0,o=this.avoidRegions.length;i<o;i++)L.Util.rotateLatLngs(this.avoidRegions[i].getLatLngs(),this.getLatLngs()[0],e);this.redraw(),this._updateSymbolTexts(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues)}},getScale:function(){return this.initialScale},setScale:function(t){isNaN(t)||(this.initialScale=t,this.symbolSize.w=this.initialScale*this.dScale*this.symbolSizeInLib.w,this.symbolSize.h=this.initialScale*this.dScale*this.symbolSizeInLib.h,this.style.fontSize=this.fontSize*this.dScale*this.initialScale,this.prevFontSize=this.style.fontSize,this.redraw(),this._updateSymbolTexts())},setPositionOffset:function(t){this.positionOffset!==t&&(this.positionOffset=t,!1===this.positionOffset&&(this.positionOffsetX=0,this.positionOffsetY=0),this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues))},getPositionOffset:function(){return this.positionOffset},setPositionOffsetType:function(t){this.positionOffsetType!==t&&(this.positionOffsetType=t,this.positionOffset&&(this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues)))},getPositionOffsetType:function(){return this.positionOffsetType},setTextContent:function(t){this.textContent=t,this._handleAnnotation()},setTextPosition:function(t){8===t&&!1===this.symbolData.middleMarkExist||this.annotationPosition!==t&&(this.annotationPosition=t,this._handleAnnotation())},getSymbolSize:function(){return this.symbolSize},setSymbolSize:function(t,e){if(0===this.symbolSizeInLib.w||0===this.symbolSizeInLib.h)this.initialScale=1;else{var i=t/this.dScale/this.symbolSizeInLib.w,o=e/this.dScale/this.symbolSizeInLib.h;this.initialScale!==i?this.initialScale=i:this.initialScale!==o&&(this.initialScale=o)}null===this.symbolSize&&(this.symbolSize=new SuperMap.Size(0,0)),this.symbolSize.w=this.initialScale*this.dScale*this.symbolSizeInLib.w,this.symbolSize.h=this.initialScale*this.dScale*this.symbolSizeInLib.h,void 0===this.fontSize?this.fontSize=this.style.fontSize/this.dScale/this.initialScale:this.style.fontSize=this.fontSize*this.dScale*this.initialScale,this.prevFontSize=this.style.fontSize,this._map&&(this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues))},setSurroundLineType:function(t){if(this.surroundLineType!==t){var e=new SuperMap.GetSymbolInfoParameters;e.libID=this.libID,e.code=this.code,e.negativeImage=this.negativeImage,e.symbolRank=this.symbolRank,e.surroundLineType=t,L.supermap.symbolInfoService(this.serverUrl).getSymbolInfo(e,function(t){this.symbolData.innerCells=t.result.innerCells,this.surroundLineType=t.result.surroundLineType,this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues),this._map&&this._map.getPlotEditControl()&&this._map.getPlotEditControl().fire(SuperMap.Plot.Event.featuresmodified,{features:[this]})},this)}},getSymbolRank:function(){return this.symbolRank},setSymbolRank:function(t){if(this.symbolRank!==t){var e=new SuperMap.GetSymbolInfoParameters;e.libID=this.libID,e.code=this.code,e.symbolRank=t,e.negativeImage=this.negativeImage,e.surroundLineType=this.surroundLineType,L.supermap.symbolInfoService(this.serverUrl).getSymbolInfo(e,function(t){this.symbolData.innerCells=t.result.innerCells,this.symbolRank=t.result.symbolRank,this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues),this._map&&this._map.getPlotEditControl()&&this._map.getPlotEditControl().fire(SuperMap.Plot.Event.featuresmodified,{features:[this]})},this)}},getNegativeImage:function(){return this.negativeImage},setNegativeImage:function(t){if(this.negativeImage!==t){var e=new SuperMap.GetSymbolInfoParameters;e.libID=this.libID,e.code=this.code,e.negativeImage=t,e.symbolRank=this.symbolRank,e.surroundLineType=this.surroundLineType,L.supermap.symbolInfoService(this.serverUrl).getSymbolInfo(e,function(t){this.symbolData.innerCells=t.result.innerCells,this.negativeImage=t.result.negativeImage,this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues),this._map&&this._map.getPlotEditControl()&&this._map.getPlotEditControl().fire(SuperMap.Plot.Event.featuresmodified,{features:[this]})},this)}},move:function(t,e){if(this.hasOwnProperty("_eventParents")&&null!==this._eventParents)for(var i=0,s=Object.values(this._eventParents).length;i<s;i++){var a=Object.values(this._eventParents)[i];if(a.symbolType===SuperMap.Plot.SymbolType.FLAGGROUP&&!1===a.isSelected)return void this.fire(SuperMap.Plot.Event.reseteditmarkersvalues)}if(this.positionOffset){var l=this._map.latLngToLayerPoint(L.latLng(this.getLatLngs()[0].lat+t,this.getLatLngs()[0].lng+e)),r=this._map.latLngToLayerPoint(this.getLatLngs()[0]);this.positionOffsetX+=(l.x-r.x)/this.dScale,this.positionOffsetY+=(l.y-r.y)/this.dScale,this.redraw()}else o.GraphicObject.prototype._move.call(this,t,e);if(null!==this.joinLines&&0<this.joinLines.length)for(i=0;i<this.joinLines.length;i++){var u=this.joinLines[i];null!==u&&(u instanceof n.LineRelation&&u.redraw())}if(null!==this.deployments&&0<this.deployments.length)for(i=0;i<this.deployments.length;i++){var p=this.deployments[i];if(null!==p&&(p.symbolType===SuperMap.Plot.SymbolType.NAVYDEPLOYMENT||p.symbolType===SuperMap.Plot.SymbolType.AIRDEPLOYMENT))for(var h in p.components)p.components[h].symbolType===SuperMap.Plot.SymbolType.ANNOFRAMESYMBOL&&(p.components[h].latLngs[2]=this.latLngs[0],p.components[h].redraw())}for(var c=0,s=this.avoidRegions.length;c<s;c++)L.Util.moveLatLngs(this.avoidRegions[c].getLatLngs(),t,e);this._updateSymbolTexts()},getBounds:function(){var t=new L.LatLngBounds;for(var e in this.components){var i=this.components[e];i.isLeadLine||i.isAnnotation||t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t},getBoundsWithText:function(){var t=new L.LatLngBounds;for(var e in this.components){var i=this.components[e];i.isLeadLine||t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t},_setSymbolData:function(t){if(o.GraphicObject.prototype._setSymbolData.call(this,t),this.symbolData){this.symbolData.hasOwnProperty("type")||(this.symbolData.type="GRAPHICOBJECT"),this.symbolData.symbolRank=this.symbolRank,this.symbolData.negativeImage=this.negativeImage,this.symbolData.space=this.space,this.symbolData.flagTextSize=this.flagTextSize,this.symbolData.maxScale=this.maxScale,this.symbolData.minScale=this.minScale,this.symbolData.textDisplay=this.textDisplay,this.symbolData.initialScale=this.initialScale,this.symbolData.actualScale=this.actualScale,void 0!==this.fontSize&&(this.symbolData.fontSize=this.fontSize),void 0!==this.strokeWidth&&(this.symbolData.strokeWidth=this.strokeWidth);var e=25.4*this.symbolSize.w*10/96,i=25.4*this.symbolSize.h*10/96;this.symbolData.symbolSize={x:e,y:i};var n=25.4*this.symbolSizeInLib.w*10/96,s=25.4*this.symbolSizeInLib.h*10/96;this.symbolData.symbolSizeInLib={x:n,y:s},this.symbolData.positionOffset=this.positionOffset,this.symbolData.positionOffsetType=this.positionOffsetType,this.symbolData.positionOffsetX=this.positionOffsetX,this.symbolData.positionOffsetY=this.positionOffsetY}},_parseBasicData:function(){if(this.symbolName=this.symbolData.symbolName,void 0!==this.symbolData.symbolSizeInLib?(this.symbolSizeInLib.w=Math.round(96*this.symbolData.symbolSizeInLib.x/25.4/10),this.symbolSizeInLib.h=Math.round(96*this.symbolData.symbolSizeInLib.y/25.4/10)):void 0!==this.symbolData.symbolSize&&(this.symbolSizeInLib.w=Math.round(96*this.symbolData.symbolSize.x/25.4/10),this.symbolSizeInLib.h=Math.round(96*this.symbolData.symbolSize.y/25.4/10)),null===this.initialScale||isNaN(this.initialScale)||this.initialScale===1/0){var t=L.supermap.plotting.getControl(this.map,this.serverUrl).getDefaultStyle();if(t&&!0===t.defaultFlag&&this.symbolType===SuperMap.Plot.SymbolType.DOTSYMBOL&&-1!==t.dotSymbolSize){var e=this.symbolSizeInLib.w;if(this.symbolSizeInLib.h>this.symbolSizeInLib.w&&(e=this.symbolSizeInLib.h),0===e||0===t.dotSymbolSize)this.symbolSize.w=this.symbolSizeInLib.w,this.symbolSize.h=this.symbolSizeInLib.h;else if(0!==this.symbolSize.w||0===this.symbolData.symbolSize.x||0!==this.symbolSize.h||0===this.symbolData.symbolSize.y||this.minEditPts)if(0!==this.symbolSize.w||0!==this.symbolSize.h);else{var i=t.dotSymbolSize/e;this.symbolSize.w=i*this.symbolSizeInLib.w,this.symbolSize.h=i*this.symbolSizeInLib.h}else{this.symbolSize.w=96*this.symbolData.symbolSize.x/25.4/10,this.symbolSize.h=96*this.symbolData.symbolSize.y/25.4/10;var o=this.symbolSize.w/this.dScale/this.symbolSizeInLib.w,n=this.symbolSize.h/this.dScale/this.symbolSizeInLib.h;this.initialScale!==o?this.initialScale=o:this.initialScale!==n&&(this.initialScale=n),this.symbolSize.w=this.initialScale*this.dScale*this.symbolSizeInLib.w,this.symbolSize.h=this.initialScale*this.dScale*this.symbolSizeInLib.h}}var s=this.symbolSizeInLib.w,a=this.symbolSize.w;this.symbolSizeInLib.w<this.symbolSizeInLib.h&&(s=this.symbolSizeInLib.h,a=this.symbolSize.h),this.initialScale=a/s,this.symbolSize.w=this.initialScale*this.dScale*this.symbolSizeInLib.w,this.symbolSize.h=this.initialScale*this.dScale*this.symbolSizeInLib.h,(void 0===this.fontSize||isNaN(this.fontSize))&&(void 0===this.style.fontSize&&(this.style.fontSize=12),this.fontSize=this.style.fontSize/this.initialScale)}this.anchorPoint=new SuperMap.Geometry.Point(this.symbolData.anchorPoint.x,this.symbolData.anchorPoint.y),this.middleMarkBounds=new SuperMap.Bounds(this.symbolData.middleMarkBounds.leftBottom.x,this.symbolData.middleMarkBounds.leftBottom.y,this.symbolData.middleMarkBounds.rightTop.x,this.symbolData.middleMarkBounds.rightTop.y),this.symbolRank=this.symbolData.symbolRank,this.negativeImage=this.symbolData.negativeImage},_parseSymbolData:function(){if(o.GraphicObject.prototype._parseSymbolData.call(this),null!==this.symbolData){if(void 0!==this.symbolData.symbolSizeInLib?(this.symbolSizeInLib.w=Math.round(96*this.symbolData.symbolSizeInLib.x/25.4/10),this.symbolSizeInLib.h=Math.round(96*this.symbolData.symbolSizeInLib.y/25.4/10)):this.symbolData.innerCells&&(this.symbolSizeInLib.w=Math.round(96*this.symbolData.symbolSize.x/25.4/10),this.symbolSizeInLib.h=Math.round(96*this.symbolData.symbolSize.y/25.4/10)),this.symbolRank=this.symbolData.symbolRank,this.negativeImage=this.symbolData.negativeImage,void 0!==this.symbolData.anchorPoint&&(this.anchorPoint=new SuperMap.Geometry.Point(this.symbolData.anchorPoint.x,this.symbolData.anchorPoint.y)),void 0!==this.symbolData.middleMarkBounds&&null!==this.symbolData.middleMarkBounds&&(this.middleMarkBounds=new SuperMap.Bounds(this.symbolData.middleMarkBounds.leftBottom.x,this.symbolData.middleMarkBounds.leftBottom.y,this.symbolData.middleMarkBounds.rightTop.x,this.symbolData.middleMarkBounds.rightTop.y)),void 0!==this.symbolData.actualScale&&null!==this.symbolData.actualScale&&(this.actualScale=this.symbolData.actualScale),void 0!==this.symbolData.fontSize&&null!==this.symbolData.fontSize&&(this.fontSize=this.symbolData.fontSize),void 0!==this.symbolData.strokeWidth&&void 0!==this.symbolData.strokeWidth&&(this.strokeWidth=this.symbolData.strokeWidth),void 0!==this.symbolData.space&&null!==this.symbolData.space&&(this.space=this.symbolData.space),void 0!==this.symbolData.flagTextSize&&null!==this.symbolData.flagTextSize&&(this.flagTextSize=this.symbolData.flagTextSize),void 0!==this.symbolData.maxScale&&null!==this.symbolData.maxScale&&(this.maxScale=this.symbolData.maxScale),void 0!==this.symbolData.minScale&&null!==this.symbolData.minScale&&(this.minScale=this.symbolData.minScale),void 0!==this.symbolData.textDisplay&&null!==this.symbolData.textDisplay&&(this.textDisplay=this.symbolData.textDisplay),void 0!==this.symbolData.initialScale&&null!==this.symbolData.initialScale){this.initialScale=this.symbolData.initialScale;var t=this.initialScale*this.symbolSizeInLib.w*this.dScale,e=this.initialScale*this.symbolSizeInLib.h*this.dScale;this.symbolSize=new SuperMap.Size(t,e),this.symbolSize.w=t,this.symbolSize.h=e}else if(!1!==this.isEdit){var i=96*this.symbolData.symbolSize.x/25.4/10,n=96*this.symbolData.symbolSize.y/25.4/10;this.setSymbolSize(i,n)}void 0!==this.symbolData.positionOffset&&null!==this.symbolData.positionOffset&&(this.positionOffset=this.symbolData.positionOffset),void 0!==this.symbolData.positionOffsetType&&null!==this.symbolData.positionOffsetType&&(this.positionOffsetType=this.symbolData.positionOffsetType),void 0!==this.symbolData.positionOffsetX&&null!==this.symbolData.positionOffsetX&&(this.positionOffsetX=this.symbolData.positionOffsetX),void 0!==this.symbolData.positionOffsetY&&null!==this.symbolData.positionOffsetY&&(this.positionOffsetY=this.symbolData.positionOffsetY)}},_calculateParts:function(){if(!(this.getLatLngs().length<this.minEditPts)&&"none"!==this.style.display){var t=SuperMap.Plot.AnalysisSymbol.analysisSymbolCells(this.symbolData),e=this._map.latLngToLayerPoint(this.getLatLngs()[0]);!0===this.positionOffset&&(e.x+=this.positionOffsetX*this.dScale,e.y+=this.positionOffsetY*this.dScale);for(var i=this.initialScale*this.dScale,o=0,n=t.length;o<n;o++){var s=t[o];s.type===SuperMap.Plot.SymbolType.TEXTSYMBOL&&(s.style.fontSize=i*(s.style.fontSize/2),s.style.labelRotation+=-this.dRotate);for(var a=0,l=s.positionPoints.length;a<l;a++){s.positionPoints[a].x-=this.symbolData.anchorPoint.x,s.positionPoints[a].y-=this.symbolData.anchorPoint.y,s.positionPoints[a].x=s.positionPoints[a].x*i,s.positionPoints[a].y=s.positionPoints[a].y*i;var r=this.dRotate*(Math.PI/180);SuperMap.Plot.PlottingUtil.rotateAngle({x:0,y:0},r,s.positionPoints[a]),s.positionPoints[a]=this._transitionPoint(s.positionPoints[a],e)}s.positionPoints=L.Util.latLngsToSuperMapPoints(s.positionPoints)}this._transSymbolCellsToLayers(t),this._generateLeadLine(),this._annotationId=-1,this.isNotRedrawText||void 0!==this.isNotRedrawText||this._handleAnnotation(),this._updateSymbolTexts(),this._bounds=this.getBounds()}},_generateLeadLine:function(){if(this.positionOffset)if(this.positionOffsetType===SuperMap.Plot.PositionOffsetType.LINE){var t=this._map.latLngToLayerPoint(this.getLatLngs()[0]),e=L.point(t.x+this.positionOffsetX*this.dScale,t.y+this.positionOffsetY*this.dScale),i=this._map.layerPointToLatLng(e),o=[this.getLatLngs()[0].clone(),i];this._createAndDrawLayer(24,o,{surroundLineFlag:!1,lineTypeLimit:!0}).isLeadLine=!0}else{var n,s,t=this._map.latLngToLayerPoint(this.getLatLngs()[0]),e=L.point(t.x+this.positionOffsetX*this.dScale,t.y+this.positionOffsetY*this.dScale),i=this._map.layerPointToLatLng(e),a=new SuperMap.Geometry.Point(this.getLatLngs()[0].lng,this.getLatLngs()[0].lat),l=new SuperMap.Geometry.Point(i.lng,i.lat),r=180*SuperMap.Plot.PlottingUtil.radian(a,l)/Math.PI;if(r>45&&r<135||r>225&&r<315){var u=L.point(e.x-this.style.weight/2,e.y),p=L.point(e.x+this.style.weight/2,e.y);n=this._map.layerPointToLatLng(u),s=this._map.layerPointToLatLng(p)}else{var u=L.point(e.x,e.y-this.style.weight/2),p=L.point(e.x,e.y+this.style.weight/2);n=this._map.layerPointToLatLng(u),s=this._map.layerPointToLatLng(p)}o=[this.getLatLngs()[0],n,s];this._createAndDrawLayer(32,o,{surroundLineFlag:!1,lineWidthLimit:!0,weight:0,fillLimit:!0,fill:!0}).isLeadLine=!0}},_handleAnnotation:function(){-1!==this._annotationId&&(this.components[this._annotationId].removeEventParent(this),this.components[this._annotationId].onRemove(),delete this.components[this._annotationId],this.components.splice(this._annotationId,1),this._annotationId=-1),this.textContent=SuperMap.PlotUtil.trim(this.textContent);var t=this.getBounds();if(this.textContent&&null!==this.textContent&&0!==this.textContent.length&&null!==t&&t.isValid()){var e=SuperMap.PlotUtil.cloneObject(this.style),i=this.space*this.dScale,o=null;if(0===this.annotationPosition){e.labelAlign="rb";n=L.latLng(t.getNorth(),t.getWest());(s=this._map.latLngToLayerPoint(n)).x-=i,o=this._map.layerPointToLatLng(s)}else if(1===this.annotationPosition){e.labelAlign="rt";n=L.latLng(t.getSouth(),t.getWest());(s=this._map.latLngToLayerPoint(n)).x-=i,o=this._map.layerPointToLatLng(s)}else if(2===this.annotationPosition){e.labelAlign="lb";n=L.latLng(t.getNorth(),t.getEast());(s=this._map.latLngToLayerPoint(n)).x+=i,o=this._map.layerPointToLatLng(s)}else if(3===this.annotationPosition){e.labelAlign="lt";n=L.latLng(t.getSouth(),t.getEast());(s=this._map.latLngToLayerPoint(n)).x+=i,o=this._map.layerPointToLatLng(s)}else if(4===this.annotationPosition){e.labelAlign="cb";n=L.latLng(t.getNorth(),(t.getWest()+t.getEast())/2);(s=this._map.latLngToLayerPoint(n)).y-=i,o=this._map.layerPointToLatLng(s)}else if(5===this.annotationPosition){e.labelAlign="ct";n=L.latLng(t.getSouth(),(t.getWest()+t.getEast())/2);(s=this._map.latLngToLayerPoint(n)).y+=i,o=this._map.layerPointToLatLng(s)}else if(6===this.annotationPosition){e.labelAlign="rm";n=L.latLng((t.getSouth()+t.getNorth())/2,t.getWest());(s=this._map.latLngToLayerPoint(n)).x-=i,o=this._map.layerPointToLatLng(s)}else if(7===this.annotationPosition){e.labelAlign="lm";var n=L.latLng((t.getSouth()+t.getNorth())/2,t.getEast()),s=this._map.latLngToLayerPoint(n);s.x+=i,o=this._map.layerPointToLatLng(s)}else if(8===this.annotationPosition&&this.symbolData.middleMarkExist){var a=this.middleMarkBounds.scale(this.dScale*this.initialScale,this.anchorPoint),l=new SuperMap.Geometry.Point((a.left+a.right)/2,(a.top+a.bottom)/2);if(this.negativeImage){var r=SuperMap.Plot.PlottingUtil.projectPoint(l,new SuperMap.Geometry.Point(this.anchorPoint.x,100),new SuperMap.Geometry.Point(this.anchorPoint.x,this.anchorPoint.y));SuperMap.Plot.PlottingUtil.rotateAngle(r,Math.PI,l)}l.x-=this.anchorPoint.x,l.y-=this.anchorPoint.y;var u=this.dRotate*(Math.PI/180);SuperMap.Plot.PlottingUtil.rotateAngle(new SuperMap.Geometry.Point(0,0),u,l);var p=this._map.latLngToLayerPoint(this.getLatLngs()[0]);!0===this.positionOffset&&(p.x+=this.positionOffsetX*this.dScale,p.y+=this.positionOffsetY*this.dScale);var h=96*a.getWidth()/25.4/10,c=96*a.getHeight()/25.4/10;e.graphicWidth=h,e.graphicHeight=c,o=this._transitionPoint(l,p),this.positionOffset}if(8===this.annotationPosition&&this.symbolData.middleMarkExist){e.rotation=-this.dRotate,e.labelAlign="cm",e.graphicOpacity=1,e.fontColor=this.style.fontColor,e.fontFamily=this.style.fontFamily,e.fontWeight=this.style.fontWeight,e.fontStyle=this.style.fontStyle,e.externalGraphic=this._getTextGraphic(this.textContent,e);var y={externalGraphic:e.externalGraphic,graphicWidth:e.graphicWidth,graphicHeight:e.graphicHeight,rotation:-this.dRotate},g=L.supermap.plotting.pointImage([o],y);this._annotationId=this.components.length,this._addComponents(g)}else 8!==this.annotationPosition&&(void 0!==this.prevFontSize&&this.prevFontSize!==this.style.fontSize&&(this.fontSize=this.style.fontSize/this.dScale/this.initialScale,this.prevFontSize=this.style.fontSize),void 0!==this.fontSize?(this.style.fontSize=this.fontSize*this.dScale*this.initialScale,this.prevFontSize=this.style.fontSize):(this.fontSize=this.style.fontSize/this.dScale/this.initialScale,this.prevFontSize=this.style.fontSize),e.fontSize=this.style.fontSize,e.fontSizeLimit=!1,e.labelRotation=0,this._annotationId=this.components.length,(g=this._createAndDrawLayer(34,[o],e,this.textContent)).isAnnotation=!0)}},_getTextGraphic:function(t,e){var i=SuperMap.PlotUtil.cloneObject(e);i.fontPercent=100,i.fontSpace=0,void 0!==this.flagTextSize?i.fontSize=this.flagTextSize:i.fontSize=60,i.labelAlign="cm";var o=document.createElement("canvas"),n=SuperMap.PlotUtil.getTextWidth(i,t);o.width=n+20,o.height=parseFloat(i.fontSize)+10,document.body.appendChild(o);var s=o.getContext("2d");s.fillStyle=i.fontColor,s.globalAlpha=i.fontOpacity||1;var a=[i.fontStyle?i.fontStyle:"normal","normal",i.fontWeight?i.fontWeight:"normal",i.fontSize?new String(i.fontSize)+"px":"1em",i.fontFamily?i.fontFamily:"sans-serif"].join(" ");if(s.fillText)s.font=a,s.textAlign="center",s.textBaseline="middle",s.fillText(t,o.width/2,o.height/2);else if(s.mozDrawText){s.mozTextStyle=a;var l=-.5;L.PlotCanvas.LABEL_FACTOR[e.labelAlign[0]],null==l&&(l=-.5);var r=-.5;L.PlotCanvas.LABEL_FACTOR[e.labelAlign[1]],null==r&&(r=-.5);var u=[0,0],p=s.mozMeasureText("xx");u[1]+=p*(1+r*numRows);var h=u[0]+l*s.mozMeasureText(t),c=u[1]+p;s.translate(h,c),s.mozDrawText(t),s.translate(-h,-c)}var y=o.toDataURL("image/png","image/octet-stream");return document.body.removeChild(o),y},_transitionPoint:function(t,e){var i=e.x+t.x*(96/254),o=e.y-t.y*(96/254);return this._map.layerPointToLatLng(L.point(i,o))},_resizeCells:function(t,e){for(var i in this.components)L.Util.resizeLatLngs(this.components[i].getLatLngs(),e,t),this.components[i].setLatLngs(this.components[i].getLatLngs()),this._renderer instanceof L.Canvas&&(!0!==this.components[i].options.fill||"LINEAR"!==this.style.fillGradientMode&&"RADIAL"!==this.style.fillGradientMode||this._computeGradientInCanvas(this.components[i],this.components[i].options,this.style))},_rotate:function(t,e){o.GraphicObject.prototype._rotate.call(this,t,e),this.dRotate+=t},_resize:function(t,e){o.GraphicObject.prototype._resize.call(this,t,e),this.initialScale*=t,this.symbolSize.w=this.initialScale*this.dScale*this.symbolSizeInLib.w,this.symbolSize.h=this.initialScale*this.dScale*this.symbolSizeInLib.h,this.style.fontSize=this.fontSize*this.dScale*this.initialScale,this.prevFontSize=this.style.fontSize}}),l=e.dotSymbol=function(t,e,i,o){return new a(t,e,i,o)};L.supermap.plotting.dotSymbol=l},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.flagGroup=e.FlagGroup=void 0;var o=i(7),n=e.FlagGroup=o.GroupObject.extend({ratio:null,scalePoints:null,scaleValues:null,initialize:function(t,e,i,n){o.GroupObject.prototype.initialize.call(this,t,e,i,n),this.libID=0,this.code=SuperMap.Plot.SymbolType.FLAGGROUP,this.symbolType=SuperMap.Plot.SymbolType.FLAGGROUP,this.symbolName="多旗",n.subObjects&&(this.subObjects=n.subObjects),null===this.ratio&&(this.ratio=.8)},destroy:function(){o.GroupObject.prototype.destroy.call(this),this.ratio=[]},setRotate:function(t){isNaN(t)||(this.dRotate+=t,this.redraw())},redraw:function(){if("none"!==this.style.display){if(L.Util.isArray(this.ratio)||(this.ratio=[this.ratio]),0===this.components.length&&0!==this.subObjects.length)for(var t=0,e=this.subObjects.length;t<e;t++)this.layer&&this.layer.removeFeatures(this.subObjects[t]),this.subObjects[t].enableEdit=!0,this.subObjects[t].ownerGroup=this,this._addComponents(this.subObjects[t]);if(0!==this.components.length){this.scalePoints=[],this.components[0].setRotate(this.dRotate);var i=L.latLng(this.components[0].getLatLngs()[0].lat,this.components[0].getLatLngs()[0].lng),o=this._map.latLngToLayerPoint(i);!0===this.components[0].positionOffset&&(o.x+=this.components[0].positionOffsetX,o.y+=this.components[0].positionOffsetY),i=this._map.layerPointToLatLng(o),this.anchorPoint=i.clone();var n=new L.latLng(i);n.tag=0,this.scalePoints.push(n);for(var s=1,e=this.components.length;s<e;s++){for(;this.ratio.length<s;)this.ratio.push(this.ratio[this.ratio.length-1]);var a=this.ratio[s-1],l=this.components[s-1],r=this._calculateFlagTop(l),u=L.Util.cloneLatLngs(l.getLatLngs())[0],p=this._map.latLngToLayerPoint(u);!0===l.positionOffset&&(p.x+=l.positionOffsetX,p.y+=l.positionOffsetY),u=this._map.layerPointToLatLng(p),r=this._pointRotate(this.dRotate,u,r);var h=this._findPointOnLineByRatio(a,u,r);this.components[s].dRotate=this.dRotate,this.components[s].setLatLngs([h]);var c=new L.latLng(h);c.tag=s,this.scalePoints.push(c)}}}else this._clearComponents()},_pointRotate:function(t,e,i){t*=Math.PI/180;var o=Math.sqrt(Math.pow(e.lng-i.lng,2)+Math.pow(e.lat-i.lat,2)),n=t+Math.atan2(i.lat-e.lat,i.lng-e.lng);return i.lng=e.lng+o*Math.cos(n),i.lat=e.lat+o*Math.sin(n),i},_findPointOnLineByRatio:function(t,e,i){var o=new L.latLng(0,0);return o.lng=e.lng+(i.lng-e.lng)*t,o.lat=e.lat+(i.lat-e.lat)*t,o},_calculateFlagTop:function(t){var e=t.dRotate;t.dRotate=0,0===t.dRotate&&(t.isNotRedrawText=!0,t.redraw(),delete t.isNotRedrawText);var i=t.getBounds();return t.dRotate=e,t.redraw(),t.initialScale>=0?t.negativeImage?new L.latLng(i.getNorth(),i.getEast()):new L.latLng(i.getNorth(),i.getWest()):t.negativeImage?new L.latLng(i.getSouth(),i.getWest()):new L.latLng(i.getSouth(),i.getEast())},_projectPoint:function(t,e,i){if(e===i)return e;var o=new L.latLng(0,0),n=i.lng-e.lng,s=e.lat-i.lat,a=n*n,l=s*s,r=n*s,u=n*n+s*s;return o.lng=(r*(e.lat-t.lat)+e.lng*l+t.lng*a)/u,o.lat=(r*(e.lng-t.lng)+e.lat*a+t.lat*l)/u,o},_modifyPoint:function(t,e){if(0===t)this.subObjects[0].setLatLngs([e]);else{var i=this.subObjects[t-1].latLngs[0],o=this._calculateFlagTop(this.subObjects[t-1]);o=this._pointRotate(this.dRotate,this.subObjects[0].latLngs[0],o);var n=Math.sqrt(Math.pow(i.lng-o.lng,2)+Math.pow(i.lat-o.lat,2)),s=this._projectPoint(e,i,o),a=Math.sqrt(Math.pow(i.lng-s.lng,2)+Math.pow(i.lat-s.lat,2));this.ratio[t-1]=a/n}this.redraw()},_reView:function(){for(var t in this.components)this.components[t].scaleByMap=this.scaleByMap,this.components[t]._reView();this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues)},_parseSymbolData:function(){o.GroupObject.prototype._parseSymbolData.call(this),this.symbolData&&(this.ratio=this.symbolData.ratio)},_setSymbolData:function(){o.GroupObject.prototype._setSymbolData.call(this),this.symbolData&&(this.symbolData.ratio=this.ratio)}}),s=e.flagGroup=function(t,e,i,o){return new n(t,e,i,o)};L.supermap.plotting.flagGroup=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LiterateSign=void 0;var o=i(2);e.LiterateSign=o.GraphicObject.extend({route:null,towardNode:null,startRouteNode:null,textAnchor:null,space:null,inner:null,setPosition:function(t){this.textPosition=t,this._calculateOffset()},initialize:function(t,e,i,n){this.symbolName="标牌文字",this.symbolType=SuperMap.Plot.SymbolType.LITERATESIGN,o.GraphicObject.prototype.initialize.call(this,t,e,i,n)},destroy:function(){this.space=null,this.inner=null,this.textAnchor=null,o.GraphicObject.prototype.destroy.call(this)},_calculateParts:function(){if(null!==this.startRouteNode&&null!==this.towardNode&&null!==this.towardNode.textContent&&0!==this.towardNode.textContent.length){for(var t=this.route._getNodeByUuid(this.towardNode.routeNodeId),e=new SuperMap.Geometry.Point(this.startRouteNode.x,this.startRouteNode.y),i=new SuperMap.Geometry.Point(t.x,t.y),o=L.latLng((e.y+i.y)/2,(e.x+i.x)/2),n=SuperMap.PlotUtil.getTextCount(this.towardNode.textContent[0]),s=1;s<this.towardNode.textContent.length;s++){var a=SuperMap.PlotUtil.getTextCount(this.towardNode.textContent[s]);n<a&&(n=a)}if(null===this.towardNode.offsetX||null===this.towardNode.offsetY){var l=this.space+(this.dScale*this.style.fontSize+1)*n/2,r=this._innerOutlineDir(),u=this._map.layerPointToLatLng(L.point(0,0)),p=this._map.layerPointToLatLng(L.point(l,0)),h=new SuperMap.Geometry.Point(u.lng,u.lat),c=new SuperMap.Geometry.Point(p.lng,p.lat),y=r*SuperMap.Plot.PlottingUtil.distance(h,c);!0===this.inner&&(y=-y);var g=SuperMap.Plot.PlottingUtil.parallel([e,i],y);this.latLngs=[];var d=L.latLng((g[0].y+g[1].y)/2,(g[0].x+g[1].x)/2);this.latLngs.push(d);var f=this._map.latLngToLayerPoint(o),S=this._map.latLngToLayerPoint(d);this.towardNode.offsetX=S.x-f.x,this.towardNode.offsetY=S.y-f.y}else{var P=this._map.latLngToLayerPoint(o),m=L.point(P.x+this.towardNode.offsetX,P.y+this.towardNode.offsetY),b=this._map.layerPointToLatLng(m);0===this.latLngs.length?this.latLngs.push(b):this.latLngs[0]=b}for(var M=180*SuperMap.Plot.PlottingUtil.radian(e,i)/Math.PI,v=this._getTextContentsCells(n),s=0;s<v.length;s++){var _=v[s];_.positionPoints=SuperMap.Plot.Primitives.getSpatialData(_.type,_.positionPoints,_.angle);for(var T=[],x=0;x<_.positionPoints.length;x++)T.push(SuperMap.Plot.PlottingUtil.coordinateTrans(new SuperMap.Geometry.Point(this.latLngs[0].lng,this.latLngs[0].lat),_.positionPoints[x],M));var O=L.Util.superMapPointsToLatLngs(T);_.type===SuperMap.Plot.SymbolType.TEXTSYMBOL?0!==_.textContent.length&&(_.style.labelRotation=90-M,this._createAndDrawLayer(SuperMap.Plot.SymbolType.TEXTSYMBOL,O,_.style,_.textContent)):this._createAndDrawLayer(_.type,O,_.style,_.textContent)}}},_innerOutlineDir:function(){for(var t=[],e=0;e<this.route.routeNodes.length;e++)t.push(new SuperMap.Geometry.Point(this.route.routeNodes[e].x,this.route.routeNodes[e].y));return SuperMap.Plot.PlottingUtil.innerOutlineDir(t)},move:function(t,e){for(var i in this.components)L.Util.moveLatLngs(this.components[i].getLatLngs(),t,e),this.components[i].setLatLngs(this.components[i].getLatLngs());L.Util.moveLatLngs(this.getLatLngs(),t,e),this._calculateOffset()},_reView:function(){this.scaleByMap&&!1!==this.scaleByMap?(this.dScale*=this._map.getZoomScale(this._map.getZoom(),this.fromZoom),this.dScale>5?this.dScale=5:this.dScale<1&&(this.dScale=1),this.redraw()):this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues),this.fromZoom=this._map.getZoom()},_calculateOffset:function(){var t=this.route._getNodeByUuid(this.towardNode.routeNodeId),e=L.latLng((this.startRouteNode.y+t.y)/2,(this.startRouteNode.x+t.x)/2),i=this._map.latLngToLayerPoint(e),o=this._map.latLngToLayerPoint(this.latLngs[0]);this.towardNode.offsetX=o.x-i.x,this.towardNode.offsetY=o.y-i.y},_getTextContentsCells:function(t){var e=this.towardNode.textContent,i=(this.route._getNodeByUuid(this.towardNode.routeNodeId),this.dScale*this.style.fontSize+1),o=this._map.layerPointToLatLng(L.point(0,0)),n=this._map.layerPointToLatLng(L.point(i,0)),s=SuperMap.Plot.PlottingUtil.distance({x:o.lng,y:o.lat},{x:n.lng,y:n.lat}),a=s,l=s*t,r=e.length+2,u=[],p=r*a*.5,h=new Object;h.type=SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,h.positionPoints=[],h.positionPoints.push(new SuperMap.Geometry.Point(p,0)),h.positionPoints.push(new SuperMap.Geometry.Point(-2*a+p,.5*l)),h.positionPoints.push(new SuperMap.Geometry.Point(-r*a+p,.5*l)),h.positionPoints.push(new SuperMap.Geometry.Point(-r*a+p,-.5*l)),h.positionPoints.push(new SuperMap.Geometry.Point(-2*a+p,-.5*l)),h.style={surroundLineFlag:!1,fontSize:12},u.push(h);for(var c=1;c<=e.length;c++){var y=new Object;y.type=SuperMap.Plot.SymbolType.POLYLINESYMBOL,y.positionPoints=[],y.positionPoints.push(new SuperMap.Geometry.Point(-(c+1)*a+p,.5*l)),y.positionPoints.push(new SuperMap.Geometry.Point(-(c+1)*a+p,-.5*l)),y.style={surroundLineFlag:!1,fontSize:12},u.push(y);var g=new Object;g.type=SuperMap.Plot.SymbolType.TEXTSYMBOL,g.positionPoints=[],g.positionPoints.push(new SuperMap.Geometry.Point(-(.5+c+1)*a+p,0)),g.textContent=e[c-1],g.style={surroundLineFlag:!1,fontSize:12,fontFamily:"Microsoft YaHei"},g.style.labelAlign="cm",u.push(g)}var d=new SuperMap.Geometry.Point(-1.4*a+p,0),f=new Object;f.type=SuperMap.Plot.SymbolType.TEXTSYMBOL,f.positionPoints=[],f.positionPoints.push(d),f.textContent=this.towardNode.index.toString(),f.style={surroundLineFlag:!1,fontSize:12,fontSizeLimit:!0,fontFamily:"Microsoft YaHei"},f.style.labelAlign="cm",u.push(f);var S=new Object;return S.type=SuperMap.Plot.SymbolType.CIRCLESYMBOL,S.positionPoints=[],S.positionPoints.push(d),S.positionPoints.push(new SuperMap.Geometry.Point(d.x,.4*a)),S.style={surroundLineFlag:!1,fontSize:12},u.push(S),u}})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.RouteNode=void 0;var o=i(2),n=i(17);e.RouteNode=o.GraphicObject.extend({route:null,routeNode:null,_isFirstNode:function(){for(var t=0;t<this.route.routeNodes.length;t++)for(var e=0;e<this.route.routeNodes[t].towardNodes.length;e++)if(this.route.routeNodes[t].towardNodes[e].routeNodeId===this.routeNode.id)return!1;return!0},_isLastNode:function(){return 0===this.routeNode.towardNodes.length},setType:function(t){this.routeNode.type=t,this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues)},setName:function(t){this.routeNode.name=t,this.redraw()},setPosition:function(t,e){this.routeNode.y=this.latLngs[0].lat=t,this.routeNode.x=this.latLngs[0].lng=e;for(l=0;l<this.route.routeNodes.length;l++)this.route.routeNodes[l].routeNodeId===this.routeNode.id&&(this.route.routeNodes[l].x=this.routeNode.x,this.route.routeNodes[l].y=this.routeNode.y);if(0!==this.route.arrRoutePts.length){if(this.route.arrRoutePts=[],this.route.redraw(),this.route.highlightFlag){var i=SuperMap.Util.cloneObject(this.route.highlightStyle);this.route.highlightStyle&&SuperMap.Util.copyAttributes(i,this.route.highlightStyle),this.route.highlight(i)}}else{for(var o=this.route._getFeatureStartWith(this.routeNode),s=0;s<o.length;s++)o[s]instanceof n.LiterateSign||(o[s].latLngs[0]=L.latLng(t,e)),o[s].redraw();for(var a=this.route._getFeatureEndWith(this.routeNode),l=0;l<a.length;l++)a[l]instanceof n.LiterateSign||(a[l].latLngs[1]=L.latLng(t,e)),a[l].redraw();this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues)}},setRotate:function(t){this.routeNode.type===SuperMap.Plot.RouteNodeType.STANDBY&&this.routeNode.rotate!==t&&(this.routeNode.rotate=t,this.redraw())},getRotate:function(){return this.routeNode.rotate},initialize:function(t,e,i,n){o.GraphicObject.prototype.initialize.call(this,t,e,i,n),this.symbolName=SuperMap.Plot.RouteNodePrimitives.getRouteNodeNameByType(this.routeNode.type),this.symbolType=SuperMap.Plot.SymbolType.ROUTENODE,this.anchorPoint=L.latLng(0,0)},destroy:function(){this.route=null,this.routeNode=null,o.GraphicObject.prototype.destroy.call(this)},_calculateParts:function(){if(0===this.getLatLngs().length?this.latLngs=[L.latLng(this.routeNode.y,this.routeNode.x)]:(this.latLngs[0].lat=this.routeNode.y,this.latLngs[0].lng=this.routeNode.x),this.latLngs.length>=this.minEditPts){if(this.routeNode.type===SuperMap.Plot.RouteNodeType.STANDBY){var t=SuperMap.Plot.RouteNodePrimitives.getRouteNodeCells(this.routeNode.type,!1,this.routeNode.rotate);this._transformSymbolCellsToGeometrys(t);var e=SuperMap.Plot.RouteNodePrimitives.getRouteNodeCells(this.routeNode.type,!0);this._transformSymbolCellsToGeometrys(e)}else{var i=SuperMap.Plot.RouteNodePrimitives.getRouteNodeCells(this.routeNode.type);this._transformSymbolCellsToGeometrys(i)}if(null!==this.routeNode.name&&""!==this.routeNode.name){var o=this.getBounds(),n=L.latLng(o.getNorth(),o.getEast()),s=this.routeNode.style;s.labelAlign="lb",this._createAndDrawLayer(SuperMap.Plot.SymbolType.TEXTSYMBOL,[n],s,this.routeNode.name).isNameLayer=!0}}},_transformSymbolCellsToGeometrys:function(t){for(var e=this._map.latLngToLayerPoint(this.latLngs[0]),i=0;i<t.length;i++){var o=t[i];o.type===SuperMap.Plot.SymbolType.TEXTSYMBOL&&(o.style.fontSize=this.dScale*o.style.fontSize,o.style.labelRotation+=-this.dRotate);for(var n=0;n<o.positionPoints.length;n++){o.positionPoints[n].x=o.positionPoints[n].x*this.dScale,o.positionPoints[n].y=o.positionPoints[n].y*this.dScale;var s=this.dRotate*(Math.PI/180);SuperMap.Plot.PlottingUtil.rotateAngle({x:this.anchorPoint.lng,y:this.anchorPoint.lat},s,o.positionPoints[n]),o.positionPoints[n]=this._transitionPoint(o.positionPoints[n],e)}o.positionPoints=L.Util.latLngsToSuperMapPoints(o.positionPoints)}this._transSymbolCellsToLayers(t)},_transitionPoint:function(t,e){var i=e.x+t.x*(96/254),o=e.y-t.y*(96/254);return this._map.layerPointToLatLng(L.point(i,o))},move:function(t,e){this.routeNode.x+=e,this.routeNode.y+=t,this.setPosition(this.routeNode.y,this.routeNode.x)},getBounds:function(){var t=new L.LatLngBounds;for(var e in this.components){var i=this.components[e];i.isNameLayer||t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t},_reView:function(){this.fromZoom!==this._map.getZoom()&&(this.scaleByMap&&!1!==this.scaleByMap?(this.dScale*=this._map.getZoomScale(this._map.getZoom(),this.fromZoom),this.dScale>5?this.dScale=5:this.dScale<1&&(this.dScale=1),this.redraw()):this.redraw(),this.fromZoom=this._map.getZoom(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues))}})},function(t,e,i){"use strict";function o(t,e){var i=t.x-e.x,o=t.y-e.y;return Math.sqrt(i*i+o*o)}Object.defineProperty(e,"__esModule",{value:!0});var n={mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},s={mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"},a=e.PlottingObjectDrag=L.Handler.extend({statics:{DRAGGING_CLS:"leaflet-plottingObject-draggable"},initialize:function(t){this._plottingObject=t,this._startPoint=null,this._dragStartPoint=null,this._mapDraggingWasEnabled=!1},addHooks:function(){this._plottingObject.on("mousedown",this._onDragStart,this),this._plottingObject.options.className=this._plottingObject.options.className?this._plottingObject.options.className+" "+a.DRAGGING_CLS:a.DRAGGING_CLS,this._plottingObject._plottingObject&&L.DomUtil.addClass(this._plottingObject._plottingObject,a.DRAGGING_CLS)},removeHooks:function(){this._plottingObject.off("mousedown",this._onDragStart,this),this._plottingObject.options.className=this._plottingObject.options.className.replace(new RegExp("\\s+"+a.DRAGGING_CLS),""),this._plottingObject._plottingObject&&L.DomUtil.removeClass(this._plottingObject._plottingObject,a.DRAGGING_CLS)},moved:function(){return this._plottingObject._dragMoved},_onDragStart:function(t){var e=t.originalEvent._simulated?"touchstart":t.originalEvent.type;this._mapDraggingWasEnabled=!1,this._startPoint=t.latlng.clone(),this._dragStartPoint=t.latlng.clone(),L.DomEvent.stop(t.originalEvent),L.DomUtil.addClass(this._plottingObject._map._container,"leaflet-dragging"),L.DomEvent.on(document,s[e],this._onDrag,this).on(document,n[e],this._onDragEnd,this),this._plottingObject._map.dragging.enabled()&&(this._plottingObject._map.dragging.disable(),this._mapDraggingWasEnabled=!0),this._plottingObject._dragMoved=!1},_onDrag:function(t){L.DomEvent.stop(t);var e=t.touches&&t.touches.length>=1?t.touches[0]:t,i=this._plottingObject._map.mouseEventToLatLng(e);if("touchmove"===t.type&&!this._plottingObject._dragMoved){var o=this._plottingObject._map.latLngToLayerPoint(this._dragStartPoint),n=this._plottingObject._map.mouseEventToContainerPoint(e);if(o.distanceTo(n)<=this._plottingObject._map.options.tapTolerance)return}var s=i.lat,a=i.lng,l=s-this._startPoint.lat,r=a-this._startPoint.lng;(l||r)&&(this._plottingObject._dragMoved||(this._plottingObject._dragMoved=!0,this._plottingObject.fire("dragstart",t)),this._startPoint.lat=s,this._startPoint.lng=a,this._plottingObject.fire("predrag",t),t.dLat=l,t.dLng=r,this._plottingObject.fire("drag",t))},_onDragEnd:function(t){var e=this._plottingObject._map.mouseEventToLatLng(t),i=this.moved();if(i&&L.DomEvent.stop(t),L.DomEvent.off(document,"mousemove touchmove",this._onDrag,this),L.DomEvent.off(document,"mouseup touchend",this._onDragEnd,this),i){this._plottingObject.fire("dragend",{distance:o(this._dragStartPoint,e)});var n=this._plottingObject._containsPoint;this._plottingObject._containsPoint=L.Util.falseFn,L.Util.requestAnimFrame(function(){L.DomEvent.skipped({type:"click"}),this._plottingObject._containsPoint=n},this)}this._startPoint=null,this._dragStartPoint=null,this._plottingObject._dragMoved=!1,this._mapDraggingWasEnabled&&(i&&L.DomEvent.fakeStop({type:"click"}),this._plottingObject._map.dragging.enable()),i&&(this._plottingObject.moveend=!0)}})},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),l=function t(e,i,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,i);if(void 0===n){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,i,o)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(o)},r=function(t){function e(t,i){o(this,e);var s=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));s.CLASS_NAME="SuperMap.GetLibIDsService",(i=i||{})&&SuperMap.Util.extend(s,i);var a,l=s;return a=l.url.substr(l.url.length-1,1),l.url+="/"==a?"symbolLibs.json?":"/symbolLibs.json?",s}return s(e,SuperMap.PlotCommonServiceBase),a(e,[{key:"destroy",value:function(){l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).call(this)}},{key:"processAsync",value:function(){var t=this;t.request({method:"GET",data:null,scope:t,success:t.serviceProcessCompleted,failure:t.serviceProcessFailed})}}]),e}();e.default=r,SuperMap.GetLibIDsService=r},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),l=function t(e,i,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,i);if(void 0===n){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,i,o)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(o)},r=function(t){function e(t,i){o(this,e);var s=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));s.CLASS_NAME="SuperMap.GetLibInfoService",(i=i||{})&&SuperMap.Util.extend(s,i);var a,l=s;return a=l.url.substr(l.url.length-1,1),l.url+="/"==a?"symbolLibs/":"/symbolLibs/",s}return s(e,SuperMap.PlotCommonServiceBase),a(e,[{key:"destroy",value:function(){l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).call(this)}},{key:"processAsync",value:function(t){var e=this;t&&null!==t.libID&&(e.libID=t.libID),e.url+=e.libID,e.url+=".json",e.request({method:"GET",data:null,scope:e,success:e.serviceProcessCompleted,failure:e.serviceProcessFailed})}}]),e}();e.default=r,SuperMap.GetLibInfoService=r},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),l=function t(e,i,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,i);if(void 0===n){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,i,o)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(o)},r=function(t){function e(t,i){o(this,e);var s=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));s.CLASS_NAME="SuperMap.GetSymbolInfoService",(i=i||{})&&SuperMap.Util.extend(s,i);var a,l=s;return a=l.url.substr(l.url.length-1,1),l.url+="/"==a?"graphicObject.json?":"/graphicObject.json?",s}return s(e,SuperMap.PlotCommonServiceBase),a(e,[{key:"destroy",value:function(){l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).call(this)}},{key:"processAsync",value:function(t){if(t){var e=this,i=null;i=SuperMap.GetSymbolInfoParameters.toUrlParameters(t),e.url+=i,"MSIE"===SuperMap.Browser.name.toUpperCase()&&(e.url=encodeURI(e.url)),e.request({method:"GET",params:null,scope:e,success:e.serviceProcessCompleted,failure:e.serviceProcessFailed})}}}]),e}();e.default=r,SuperMap.GetSymbolInfoService=r},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.PlotUtil=SuperMap.PlotUtil=SuperMap.PlotUtil||{};SuperMap.PlotUtil.generateUuid=function(){for(var t=[],e=0;e<36;e++)t[e]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);return t[14]="4",t[19]="0123456789abcdef".substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-",t.join("")},SuperMap.PlotUtil.cloneObject=function(t){return JSON.parse(JSON.stringify(t))},SuperMap.PlotUtil.colorRGBA=function(t,e){var i=t.substring(1,3),o=parseInt(i,16),n=t.substring(3,5),s=parseInt(n,16),a=t.substring(5);return"rgba("+o+","+s+","+parseInt(a,16)+","+e+")"},SuperMap.PlotUtil.colorRGBToString=function(t){var e=t.red.toString(16);e.length<2&&(e="0"+e);var i=t.green.toString(16);i.length<2&&(i="0"+i);var o=t.blue.toString(16);return o.length<2&&(o="0"+o),"#"+e+i+o},SuperMap.PlotUtil.colorStringToRGB=function(t){var e={},i=t.substring(1,3);e.red=parseInt(i,16);var o=t.substring(3,5);e.green=parseInt(o,16);var n=t.substring(5);return e.blue=parseInt(n,16),e},SuperMap.PlotUtil.decimalToHex=function(t){for(var e=t.toString(16);e.length<8;)e="0"+e;var i=e.substring(0,2),o=e.substring(2,4),n=e.substring(4,6);return{color:"#"+e.substring(6)+n+o,alpha:parseInt(i,16)/255}},SuperMap.PlotUtil.hexToDecimal=function(t,e){var i=t.substring(1,3),o=t.substring(3,5),n=t.substring(5)+o+i,s=parseInt(n,16),a=Math.round(255*e).toString(16);return parseInt(a+"000000",16)+s},SuperMap.PlotUtil.getAlign=function(t){return"TOPLEFT"===t?"lt":"TOPCENTER"===t?"ct":"TOPRIGHT"===t?"rt":"BOTTOMLEFT"===t?"lb":"BOTTOMCENTER"===t?"cb":"BOTTOMRIGHT"===t?"rb":"MIDDLELEFT"===t?"lm":"MIDDLECENTER"===t?"cm":"MIDDLERIGHT"===t?"rm":"lt"},SuperMap.PlotUtil.trim=function(t){return null===t?"":t.replace(/(^\s*)|(\s*$)/g,"")},SuperMap.PlotUtil.getTextWidth=function(t,e){" "===e&&(e="_");var i=document.createElement("span");document.body.appendChild(i),i.style.width="auto",i.style.height="auto",t.fontSize&&(i.style.fontSize=new String(t.fontSize)+"px"),t.fontFamily&&(i.style.fontFamily=t.fontFamily),t.fontWeight&&(i.style.fontWeight=t.fontWeight),i.style.position="absolute",i.style.visibility="hidden",i.style.display="inline-block",i.innerHTML=e;var o=i.clientWidth,n=e.length;return void 0===t.fontSpace&&void 0===t.fontPercent||(0!==t.fontSpace&&100!==t.fontPercent&&void 0!==t.fontSpace||void 0!==t.fontPercent?o=t.fontPercent/100*o+t.fontSpace*(t.fontPercent/100)*(n-1):0===t.fontSpace&&100!==t.fontPercent&&void 0!==t.fontPercent?o=t.fontPercent/100*o:0!==t.fontSpace&&100===t.fontPercent&&void 0!==t.fontSpace&&(o+=t.fontSpace*(n-1))),document.body.removeChild(i),o},SuperMap.PlotUtil.getTextCount=function(t){for(var e=0,i=0,o=0;o<t.length;o++)t.charCodeAt(o)>255?e++:i++;return e+i/2},SuperMap.PlotUtil.toJSON=function(t){var e=t;if(null==e)return null;switch(e.constructor){case String:return e='"'+e.replace(/(["\\])/g,"\\$1")+'"',e=e.replace(/\n/g,"\\n"),e=e.replace(/\r/g,"\\r"),e=e.replace("<","&lt;"),e=e.replace(">","&gt;"),e=e.replace(/%/g,"%2525"),e=e.replace(/&/g,"%26");case Array:for(var i=[],n=0,s=e.length;n<s;n++)i.push(this.toJSON(e[n]));return"["+i.join(",")+"]";case Number:return isFinite(e)?String(e):null;case Boolean:return String(e);case Date:return"{'__type':\"System.DateTime\",'Year':"+e.getFullYear()+",'Month':"+(e.getMonth()+1)+",'Day':"+e.getDate()+",'Hour':"+e.getHours()+",'Minute':"+e.getMinutes()+",'Second':"+e.getSeconds()+",'Millisecond':"+e.getMilliseconds()+",'TimezoneOffset':"+e.getTimezoneOffset()+"}";default:if(null!=e.toJSON&&"function"==typeof e.toJSON)return e.toJSON();if("object"===(void 0===e?"undefined":o(e))){if(e.length){for(var i=[],n=0,s=e.length;n<s;n++)i.push(this.toJSON(e[n]));return"["+i.join(",")+"]"}i=[];for(var a in e)"function"!=typeof e[a]&&"CLASS_NAME"!==a&&"parent"!==a&&i.push('"'+a+'":'+this.toJSON(e[a]));return i.length>0?"{"+i.join(",")+"}":"{}"}return e.toString()}},SuperMap.PlotUtil.copyFeature=function(t){var e=null;if(null!==t&&t.geometry){var i=t.geometry.clone();e=new SuperMap.Feature.Vector(i),t.style&&(e.style=SuperMap.Util.copyAttributes(e.style,t.style)),i.feature=e,i.calculateParts()}return e}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DrawGraphicObject=void 0;var o=i(5),n=i(2),s=i(10);e.DrawGraphicObject=L.Handler.extend({symbolData:null,plotting:null,_isDrawing:!1,libID:0,code:24,serverUrl:"",isFreeCure:!1,_drawingLayer:null,_tempDrawingLayer:null,_control:null,options:{tolerancePixel:6,allowIntersection:!0,repeatMode:!0,icon:new L.DivIcon({iconSize:new L.Point(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new L.DivIcon({iconSize:new L.Point(20,20),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"}),guidelineDistance:20,maxGuideLineLength:4e3,shapeOptions:{stroke:!0,color:"#3388ff",weight:4,opacity:.5,fill:!1,clickable:!0},metric:!0,feet:!0,nautic:!1,showLength:!0,zIndexOffset:2e3},initialize:function(t,e,i){this._map=t,this._drawingLayer=e,this._tempDrawingLayer=new s.PlottingLayerBase("drawControl-temportary"),this._container=t._container,this._overlayPane=t._panes.overlayPane,L.setOptions(this,i)},addHooks:function(){this._map&&(this._isDrawing=!1,this._markers=[],this._latlngs=[],this._markerGroup=new L.LayerGroup,this._map.addLayer(this._markerGroup),this._map.addLayer(this._tempDrawingLayer),this._mouseMarker||(this._mouseMarker=L.marker(this._map.getCenter(),{icon:L.divIcon({className:"leaflet-mouse-marker",iconAnchor:[20,20],iconSize:[40,40]}),opacity:0,zIndexOffset:this.options.zIndexOffset})),this._mouseMarker.on("mousedown",this._onMouseDown,this).on("mouseup",this._onMouseUp,this).addTo(this._map),this._map.on("mouseup",this._onMouseUp,this).on("mousemove",this._onMouseMove,this).on("zoomlevelschange",this._onZoomEnd,this).on("touchstart",this._onTouch,this).on("zoomend",this._onZoomEnd,this),this._map.getPlotEditControl()&&this._map.getPlotEditControl()._avoidEditing&&this._map.getPlotEditControl().avoidEdit(!1))},removeHooks:function(){this._isDrawing=!1,this._map.removeLayer(this._markerGroup),delete this._markerGroup,delete this._markers,delete this._latlngs,delete this.isFreeCure,this.plotting&&(this._tempDrawingLayer.removeFeatures(this.plotting),delete this.plotting,this.plotting=null),this._map.removeLayer(this._tempDrawingLayer),this._mouseMarker.off("mousedown",this._onMouseDown,this).off("mouseup",this._onMouseUp,this),this._map.removeLayer(this._mouseMarker),delete this._mouseMarker,this._map.off("mouseup",this._onMouseUp,this).off("mousemove",this._onMouseMove,this).off("zoomlevelschange",this._onZoomEnd,this).off("zoomend",this._onZoomEnd,this).off("touchstart",this._onTouch,this).off("click",this._onTouch,this)},deleteLastVertex:function(){if(!(this._markers.length<=1)){this._latlngs.pop();var t=this._markers.pop(),e=this.plotting.getLatLngs(),i=e.splice(-1,1)[0];this.plotting.setLatLngs(e),this._markerGroup.removeLayer(t),this.plotting.getLatLngs().length<2&&this._tempDrawingLayer.removeFeatures(this.plotting),this._vertexChanged(i,!1)}},addVertex:function(t){if(this._markers.push(this._createMarker(t)),this._latlngs.push(t),0===this.libID&&1023===this.code&&!0===this.isFreeCure)this.plotting.addLatLng(t);else if(SuperMap.AlgoSymbolFactory.isAccessServer(this.plotting.libID,this.plotting.code)&&this._latlngs.length>=this.plotting.minEditPts){var e=new SuperMap.GetSymbolInfoParameters({libID:this.libID,code:this.code});e.inputPoints=L.Util.latLngsToSuperMapPoints(this._latlngs),L.supermap.symbolInfoService(this._drawingLayer.serverUrl).getSymbolInfo(e,function(t){this.plotting.symbolData=t.result,this.plotting.setLatLngs(this._latlngs)},this)}else if(this.plotting instanceof o.Route){var i=this._map.layerPointToLatLng(L.point(0,0)),n=this._map.layerPointToLatLng(L.point(this.options.tolerancePixel,0)),s=SuperMap.Plot.PlottingUtil.distance({x:i.lng,y:i.lat},{x:n.lng,y:n.lat});this.plotting._addRouteNodeByPos(t,s)}else this.plotting.setLatLngs(this._latlngs);this._vertexChanged(t,!0)},_finishShape:function(){this._markers.length>1&&this._markers[this._markers.length-1].off("click",this._finishShape,this),0===this.libID&&this.code===SuperMap.Plot.SymbolType.FREECURVE&&!0===this.isFreeCure&&(this.plotting.latLngs=L.Util.superMapPointsToLatLngs(this.plotting.superMapAlgoSymbol.controlPoints),this.isFreeCure=!1),-1===this.plotting.libID&&(this.plotting.libID=this.libID,this.plotting.code=this.code);var t=this.plotting.clone();this._markerGroup.clearLayers(),this._markers=[],this._latlngs=[],this._tempDrawingLayer.removeFeatures(this.plotting),delete this.plotting,this._drawingLayer.addFeatures(t),this._drawingLayer._renderer instanceof L.SVG&&(t.isFirstAdd=!0),this._control.fire(SuperMap.Plot.Event.featureadded,{feature:t}),this._isDrawing=!1,this.options.repeatMode||this.disable()},_onZoomEnd:function(){this._markers},_onMouseMove:function(t){var e=this._map.mouseEventToLayerPoint(t.originalEvent),i=this._map.layerPointToLatLng(e);if(this._currentLatLng=i,!this.plotting||!0!==this._isDrawing||this.plotting instanceof o.Route){if(!1===this._isDrawing)if(this._isDrawing=!0,SuperMap.AlgoSymbolFactory.isAccessServer(this.libID,this.code))if(this.symbolData=this._drawingLayer._getSymbolDataFromCache(this.libID,this.code),null===this.symbolData){var n=new SuperMap.GetSymbolInfoParameters({libID:this.libID,code:this.code});L.supermap.symbolInfoService(this._drawingLayer.serverUrl).getSymbolInfo(n,function(t){this.libID!==t.result.libID||this.code!==t.result.code?this.symbolData=null:this.symbolData=t.result,this.plotting=L.supermap.plotting.PlottingObject.createSymbol(this.libID,this.code,[],{symbolData:this.symbolData,serverUrl:this._drawingLayer.serverUrl,map:this._map}),this._control.fire(SuperMap.Plot.Event.beforefeatureadded,{feature:this.plotting}),this._tempDrawingLayer.addFeatures(this.plotting),this.plotting.isEdit=!1},this)}else this.plotting=L.supermap.plotting.PlottingObject.createSymbol(this.libID,this.code,[],{symbolData:this.symbolData,serverUrl:this._drawingLayer.serverUrl,map:this._map}),this._control.fire(SuperMap.Plot.Event.beforefeatureadded,{feature:this.plotting}),this._tempDrawingLayer.addFeatures(this.plotting),this.plotting.isEdit=!1;else if(this.plotting=L.supermap.plotting.PlottingObject.createSymbol(this.libID,this.code,[],{serverUrl:this._drawingLayer.serverUrl,spatialAnalystUrl:this._drawingLayer.spatialAnalystUrl,map:this._map}),this.plotting.subSymbols&&0!==this.plotting.subSymbols.length){for(var s=[],a=0,l=this.plotting.subSymbols.length;a<l;a++)null===this.plotting.subSymbols[a].symbolData&&(this.plotting.subSymbols[a].symbolData=this._drawingLayer._getSymbolDataFromCache(this.plotting.subSymbols[a].libID,this.plotting.subSymbols[a].code),null===this.plotting.subSymbols[a].symbolData&&-1===SuperMap.Util.indexOf(s,this.plotting.subSymbols[a])&&s.push(this.plotting.subSymbols[a]));for(var r=s.slice(),u=0;u<s.length;u++){var p=new SuperMap.GetSymbolInfoParameters({libID:s[u].libID,code:s[u].code});L.supermap.symbolInfoService(this.serverUrl).getSymbolInfo(p,function(t){this._drawingLayer._cacheSymbolData(t.result);for(var e=0,i=this.plotting.subSymbols.length;e<i;e++)if(null===this.plotting.subSymbols[e].symbolData&&this.plotting.subSymbols[e].libID===t.result.libID&&this.plotting.subSymbols[e].code===t.result.code){var o=SuperMap.Util.indexOf(r,this.plotting.subSymbols[e]);-1!==o&&r.splice(o,1),this.plotting.subSymbols[e].symbolData=SuperMap.PlotUtil.cloneObject(t.result)}0===r.length&&(this._control.fire(SuperMap.Plot.Event.beforefeatureadded,{feature:this.plotting}),this._tempDrawingLayer.addFeatures(this.plotting),this.plotting.isEdit=!1)},this)}0===s.length&&(this._control.fire(SuperMap.Plot.Event.beforefeatureadded,{feature:this.plotting}),this._tempDrawingLayer.addFeatures(this.plotting),this.plotting.isEdit=!1)}else this._control.fire(SuperMap.Plot.Event.beforefeatureadded,{feature:this.plotting}),this._tempDrawingLayer.addFeatures(this.plotting),this.plotting.isEdit=!1}else{var h=L.Util.cloneLatLngs(this._latlngs);0===h.length?h.push(i):h[h.length-1].lat===i.lat&&h[h.length-1].lng===i.lng||h.push(i),0===this.libID&&this.code===SuperMap.Plot.SymbolType.FREECURVE&&!0===this.isFreeCure?this.plotting.addLatLng(i):this.plotting.symbolType!==SuperMap.Plot.SymbolType.DOTSYMBOL&&SuperMap.AlgoSymbolFactory.isAccessServer(this.plotting.libID,this.plotting.code)&&h.length>=this.plotting.minEditPts?((n=new SuperMap.GetSymbolInfoParameters({libID:this.libID,code:this.code})).inputPoints=L.Util.latLngsToSuperMapPoints(h),L.supermap.symbolInfoService(this._drawingLayer.serverUrl).getSymbolInfo(n,function(t){this.plotting.symbolData=t.result,this.plotting.setLatLngs(h)},this)):this.plotting.symbolType===SuperMap.Plot.SymbolType.ARCREGION?(this.plotting.latLngs=h,this.plotting._generateArcRegionFromServer()):this.plotting.setLatLngs(h)}this._mouseMarker.setLatLng(i),L.DomEvent.preventDefault(t.originalEvent)},_vertexChanged:function(){var t=this._markers.length;t>1&&this._markers[t-1].on("click",this._finishShape,this),t>2&&this._markers[t-2].off("click",this._finishShape,this)},_onMouseDown:function(t){if(!this._clickHandled&&!this._touchHandled&&!this._disableMarkers&&this._drawingLayer&&this._drawingLayer.isEditable&&this._drawingLayer._map){this._onMouseMove(t),this._clickHandled=!0,this._disableNewMarkers();var e=t.originalEvent,i=e.clientX,o=e.clientY;this._startPoint.call(this,i,o)}},_startPoint:function(t,e){0===this.libID&&this.code===SuperMap.Plot.SymbolType.FREECURVE&&(this.isFreeCure=!0),this._mouseDownOrigin=L.point(t,e)},_onMouseUp:function(t){if(!t||2!==t.button){!L.Browser.ie||null!==this._mouseDownOrigin&&void 0!==this._mouseDownOrigin||this._onMouseDown.call(this,t);var e=t.originalEvent,i=e.clientX,o=e.clientY;this._endPoint.call(this,i,o,t),this._clickHandled=null,L.DomEvent.stopPropagation(t)}},_endPoint:function(t,e,i){if(this._mouseDownOrigin){var o=L.point(t,e).distanceTo(this._mouseDownOrigin),s=this._calculateFinishDistance(i.latlng);this.plotting instanceof n.GraphicObject&&(this.plotting.getLatLngs().length>=this.plotting.maxEditPts||s<10&&L.Browser.touch)?this._finishShape():Math.abs(o)<9*(window.devicePixelRatio||1)&&this.addVertex(i.latlng),this._enableNewMarkers()}this._mouseDownOrigin=null},_onTouch:function(t){var e,i,o=t.originalEvent;!o.touches||!o.touches[0]||this._clickHandled||this._touchHandled||this._disableMarkers||(e=o.touches[0].clientX,i=o.touches[0].clientY,this._disableNewMarkers(),this._touchHandled=!0,this._startPoint.call(this,e,i),this._endPoint.call(this,e,i,t),this._touchHandled=null),this._clickHandled=null},_calculateFinishDistance:function(t){var e;if(this._markers.length>0){var i=this._markers[this._markers.length-1],o=this._map.latLngToContainerPoint(i.getLatLng()),n=new L.Marker(t,{icon:this.options.icon,zIndexOffset:2*this.options.zIndexOffset}),s=this._map.latLngToContainerPoint(n.getLatLng());e=o.distanceTo(s)}else e=1/0;return e},_createMarker:function(t){var e=new L.Marker(t,{icon:this.options.icon,zIndexOffset:2*this.options.zIndexOffset});return this._markerGroup.addLayer(e),e},_disableNewMarkers:function(){this._disableMarkers=!0},_enableNewMarkers:function(){setTimeout(function(){this._disableMarkers=!1}.bind(this),50)}})},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.sitDataManager=e.SitDataManager=void 0;o(i(23)),o(i(110)),o(i(107)),o(i(109)),o(i(106)),i(4),o(i(102)),o(i(97));var n=e.SitDataManager=L.Evented.extend({map:null,serverUrl:null,smlInfo:null,smlFileName:null,initialize:function(t,e,i){i&&SuperMap.Util.extend(this,i),t&&null!==t&&null===this.map&&(n.prototype.map=t),e&&null===this.serverUrl&&(n.prototype.serverUrl=e),null===this.smlInfo&&(n.prototype.smlInfo=new SuperMap.Plot.SMLInfoStruct),null===this.smlFileName&&(n.prototype.smlFileName="situationMap")},destroy:function(){n.prototype.map=null,n.prototype.smlInfo.destroy(),n.prototype.smlInfo=null,n.prototype.smlFileName=null,n.prototype.serverUrl=null},getSitDataLayers:function(){return this.map.getPlottingLayers()},openSmlData:function(t){if(this.smlInfo.fromJSON(t.smlInfo),t.mapInfo){var e=new SuperMap.Plot.MapInfoStruct;e.fromJSON(t.mapInfo),null!==e.zoom&&null!==e.centerX&&null!==e.centerY&&this.map.setView(L.latLng(e.centerY,e.centerX),e.zoom,{reset:!0})}var i=t.layerDatas;this.map.clearPlottingLayers();for(var o,n=0,s=i.length;n<s;n++)(o=i[n].useCanvas||i[n].useCanvas2?L.supermap.plotting.plottingLayer(i[n].layerName,this.serverUrl,{renderer:L.canvas()}):L.supermap.plotting.plottingLayer(i[n].layerName,this.serverUrl,{renderer:L.svg()})).spatialAnalystUrl=i[n].spatialAnalystUrl,this.map.addLayer(o),this._load(i[n],o),void 0!==i[n].isEditable&&null!==i[n].isEditable&&o.setEditable(i[n].isEditable),void 0!==i[n].isLocked&&null!==i[n].isLocked&&o.setLocked(i[n].isLocked),void 0!==i[n].visibility&&null!==i[n].visibility&&o.setVisibility(i[n].visibility)},addSmlData:function(t,e){this.smlInfo.fromJSON(t.smlInfo);for(var i=t.layerDatas,o=null,n=!1,s=0;s<i.length;s++)if(null!==i[s].layerName){var a=this.map.getLayersByName(i[s].layerName);if(0!==a.length?o=a[0]:e&&((o=L.supermap.plotting.plottingLayer(i[s].layerName,this.serverUrl)).spatialAnalystUrl=i[s].spatialAnalystUrl,this.map.addLayer(o)),t.mapInfo&&o&&!n){var l=new SuperMap.Plot.MapInfoStruct;l.fromJSON(t.mapInfo),null!==l.zoom&&null!==l.centerX&&null!==l.centerY&&this.map.setView(L.latLng(l.centerY,l.centerX),l.zoom,{reset:!0}),n=!0}null!==o&&this._load(i[s],o)}},addSmlDataToLayer:function(t,e){this.smlInfo.fromJSON(t.smlInfo);var i=t.layerDatas,o=null,n=this.map.getLayersByName(e);if(0!==n.length?o=n[0]:(o=L.supermap.plotting.plottingLayer(e,this.serverUrl),this.map.addLayer(o)),t.mapInfo&&o){var s=new SuperMap.Plot.MapInfoStruct;s.fromJSON(t.mapInfo),null!==s.zoom&&null!==s.centerX&&null!==s.centerY&&this.map.setView(L.latLng(s.centerY,s.centerX),s.zoom,{reset:!0})}for(var a=0;a<i.length;a++)this._load(i[a],o)},openSmlFile:function(t,e){var i=this.serverUrl+"smlInfos/",o=document.getElementById(t).value.split("\\"),n=o[o.length-1];i+=n;var s=this;""!==n&&$.ajaxFileUpload({url:i,secureuri:!1,fileElementId:t,dataType:"json",timeout:36e5,success:function(t,i){s.openSmlFileOnServer(n,e)},error:function(t,i,o){e({success:!1,message:"打开本地态势图文件失败"})}})},addSmlFile:function(t,e,i){var o=this.serverUrl+"smlInfos/",n=document.getElementById(t).value.split("\\"),s=n[n.length-1];o+=s;var a=this;""!==s&&$.ajaxFileUpload({url:o,secureuri:!1,fileElementId:t,dataType:"json",timeout:36e5,success:function(t,o){a.addSmlFileOnServer(s,e,i)},error:function(t,e,o){i({success:!1,message:"叠加本地态势图文件失败"})}})},uploadSmlFile:function(t,e){var i=this.serverUrl+"smlInfos/",o=document.getElementById(t).value.split("\\"),n=o[o.length-1];i+=n,""!==n&&$.ajaxFileUpload({url:i,secureuri:!1,fileElementId:t,dataType:"json",timeout:36e5,success:function(t,i){e({success:!0,message:"上传态势图文件成功"})},error:function(t,i,o){e({success:!1,message:"上传态势图文件失败"})}})},addSmlFileToLayer:function(t,e,i){var o=this.serverUrl+"smlInfos/",n=document.getElementById(t).value.split("\\"),s=n[n.length-1];o+=s;var a=this;""!==s&&$.ajaxFileUpload({url:o,secureuri:!1,fileElementId:t,dataType:"json",timeout:36e5,success:function(t,o){a.addSmlFileToLayerOnServer(s,e,i)},error:function(t,e,o){i({success:!1,message:"打开本地文件失败"})}})},addSmlFileOnServer:function(t,e,i){var o=new SuperMap.EditSmlFileParameters;o.method="GET",o.smlFileName=t,L.supermap.smlFileService(this.serverUrl).editSMLFile(o,function(t){if(t.result.succeed){var o=t.result;this.smlInfo.fromJSON(o.smlInfo);for(var n=o.layerDatas,s=null,a=!1,l=0;l<n.length;l++)if(null!==n[l].layerName){var r=this.map.getLayersByName(n[l].layerName);if(0!==r.length?s=r[0]:e&&((s=L.supermap.plotting.plottingLayer(n[l].layerName,this.serverUrl)).spatialAnalystUrl=n[l].spatialAnalystUrl,this.map.addLayer(s)),o.mapInfo&&s&&!a){var u=new SuperMap.Plot.MapInfoStruct;u.fromJSON(o.mapInfo),null!==u.zoom&&null!==u.centerX&&null!==u.centerY&&this.map.setView(L.latLng(u.centerY,u.centerX),u.zoom,{reset:!0}),a=!0}null!==s&&this._load(n[l],s)}null!==s&&"function"==typeof i?i({success:!0,smlFileName:this.smlFileName,sitDataLayers:this.map.getPlottingLayers()}):"function"==typeof i&&i({success:!1,message:"态势图文件不存在与当前态势图同名的图层"})}else"function"==typeof i&&i({success:!1,message:"从服务器上获取态势图文件失败"})},this)},addSmlFileToLayerOnServer:function(t,e,i){var o=new SuperMap.EditSmlFileParameters;o.method="GET",o.smlFileName=t,L.supermap.smlFileService(this.serverUrl).editSMLFile(o,function(t){if(t.result.succeed){var o=t.result;this.smlInfo.fromJSON(o.smlInfo);var n=o.layerDatas,s=null,a=this.map.getLayersByName(e);if(0!==a.length?s=a[0]:(s=L.supermap.plotting.plottingLayer(e,this.serverUrl),this.map.addLayer(s)),o.mapInfo&&s){var l=new SuperMap.Plot.MapInfoStruct;l.fromJSON(o.mapInfo),null!==l.zoom&&null!==l.centerX&&null!==l.centerY&&this.map.setView(L.latLng(l.centerY,l.centerX),l.zoom,{reset:!0})}for(var r=0;r<n.length;r++)this._load(n[r],s);"function"==typeof i&&i({success:!0,smlFileName:this.smlFileName,sitDataLayers:this.map.getPlottingLayers()})}else"function"==typeof i&&i({success:!1,message:"从服务器上获取态势图失败"})},this)},downloadSmlFileURL:function(t){return"smlFileDownload/"+t+".sml"},newSmlFile:function(){this.smlFileName="",this.smlInfo.destroy(),this.map.clearPlottingLayers()},saveSmlFile:function(t){var e=this.map.getPlottingLayers();this._save(this.smlFileName,e,!0,t)},saveAsSmlFile:function(t,e){var i=this.map.getPlottingLayers();this._save(t,i,!1,e)},getSMLInfo:function(t,e){var i=new SuperMap.EditSmlFileParameters;i.method="GET",i.smlFileName=t,L.supermap.smlFileService(this.serverUrl).editSMLFile(i,function(t){t.result.succeed&&"function"==typeof e?e({success:!0,smlInfo:t.result.smlInfo}):"function"==typeof e&&e({success:!1})},this)},getSMLInfos:function(t,e,i){var o=t*e,n=e,s=new SuperMap.GetSMLInfosParameters;s.start=o,s.count=n,L.supermap.smlFileService(this.serverUrl).getSMLInfos(s,function(t){t.result.succeed&&"function"==typeof i?i({success:!0,smlInfoList:t.result}):"function"==typeof i&&i({success:!1})},this)},_getCompletedInit:function(t,e){if(this.smlFileName=e,this.smlInfo.fromJSON(t.smlInfo),t.mapInfo){var i=new SuperMap.Plot.MapInfoStruct;i.fromJSON(t.mapInfo),null!==i.zoom&&null!==i.centerX&&null!==i.centerY&&this.map.setView(L.latLng(i.centerY,i.centerX),i.zoom,{reset:!0})}var o=t.layerDatas;this.map.clearPlottingLayers();for(var n,s=0,a=o.length;s<a;s++)(n=o[s].useCanvas||o[s].useCanvas2?L.supermap.plotting.plottingLayer(o[s].layerName,this.serverUrl,{renderer:L.canvas()}):L.supermap.plotting.plottingLayer(o[s].layerName,this.serverUrl,{renderer:L.svg()})).spatialAnalystUrl=o[s].spatialAnalystUrl,this.map.addLayer(n),this._load(o[s],n),void 0!==o[s].isEditable&&null!==o[s].isEditable&&n.setEditable(o[s].isEditable),void 0!==o[s].isLocked&&null!==o[s].isLocked&&n.setLocked(o[s].isLocked),void 0!==o[s].visibility&&null!==o[s].visibility&&n.setVisibility(o[s].visibility)},openSmlFileOnServer:function(t,e){var i=new SuperMap.EditSmlFileParameters;i.method="GET",i.smlFileName=t,L.supermap.smlFileService(this.serverUrl).editSMLFile(i,function(i){i.result.succeed?(this._getCompletedInit(i.result,t),"function"==typeof e&&e({success:!0,smlFileName:this.smlFileName,sitDataLayers:this.map.getPlottingLayers()})):"function"==typeof e&&e({success:!1,message:"打开已发布的态势图文件失败"})},this)},deleteSmlFileOnServer:function(t,e){var i=new SuperMap.EditSmlFileParameters;i.method="DELETE",i.smlFileName=t,L.supermap.smlFileService(this.serverUrl).editSMLFile(i,function(t){t.result.succeed&&"function"==typeof e?e({success:!0}):"function"==typeof e&&e({success:!1})},this)},_save:function(t,e,i,o){var n=new SuperMap.Plot.SitDataStruct;n.smlInfo=this.smlInfo;var s=new SuperMap.Plot.MapInfoStruct;s.zoom=this.map.getZoom(),s.centerX=this.map.getCenter().lng,s.centerY=this.map.getCenter().lat,n.mapInfo=s,n.layerDatas=[];for(var a=0;a<e.length;a++){var l=e[a].features,r=new SuperMap.Plot.LayerDataStruct;r.layerName=e[a].name,r.spatialAnalystUrl=e[a].spatialAnalystUrl,this.map instanceof L.Map?this.map.getRenderer(e[a])instanceof L.Canvas&&(r.useCanvas=!0):(r.useCanvas=e[a].useCanvas,r.useCanvas2=e[a].useCanvas2),r.isEditable=e[a].getEditable(),r.isLocked=e[a].getLocked(),r.visibility=e[a].getVisibility(),r.features=l,n.layerDatas.push(r)}var u=new SuperMap.EditSmlFileParameters;u.method="POST",u.sitData=n,u.smlFileName=t,u.isCover=i,L.supermap.smlFileService(this.serverUrl).editSMLFile(u,function(t){t.result.succeed&&"function"==typeof o?o({success:!0}):"function"==typeof o&&o({success:!1})},this)},_load:function(t,e){e.spatialAnalystUrl=t.spatialAnalystUrl;for(var i=0,o=t.features.length;i<o;i++){var n=t.features[i];if(null!==n){var s;n.resolution?n.resolution:n.fromZoom&&(s=n.fromZoom),!1===n.scaleByMap&&(s=this.map.getZoom()),n.hasOwnProperty("isEdit")||(n.isEdit=!0);var a=L.supermap.plotting.PlottingObject.createSymbol(n.libID,n.code,null,{serverUrl:this.serverUrl,symbolData:n,fromZoom:s,map:this.map});e.addFeatures(a)}}}}),s=e.sitDataManager=function(t,e,i){return new n(t,e,i)};L.supermap.plotting.sitDataManager=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=e.SymbolLib=L.Evented.extend({url:null,libID:null,symbolLibData:null,cachedSymbolList:null,needCacheList:null,symbolNames:null,initialize:function(t){this.cachedSymbolList={},this.needCacheList=[],t&&SuperMap.Util.extend(this,t),t&&t.url&&t.libID?(this.url=t.url,this.libID=t.libID):t&&t.symbolLibData&&(this.symbolLibData=t.symbolLibData,this.libID=this.symbolLibData.libID,this.initNeedCacheList())},destroy:function(){this.url=null,this.libID=null,this.symbolLibData=null},initializeAsync:function(){var t=new SuperMap.GetLibInfoParameter;t.libID=this.libID,L.supermap.symbolLibService(this.url).getLibInfo(t,function(t){t.result.succeed?(this.symbolLibData=t.result,this.libID=this.symbolLibData.libID,this.initNeedCacheList(),this.fire(SuperMap.Plot.Event.initializecompleted,{success:!0})):(this.libID=-1,this.fire(SuperMap.Plot.Event.initializecompleted,{success:!1}))},this)},getSymbolLibName:function(){return null===this.symbolLibData?null:this.symbolLibData.symbolLibName},getSymbolName:function(t){return null===this.symbolLibData?"":(null===this.symbolNames&&(this.symbolNames={},this.getSymbolNameFromList(this.symbolLibData.rootSymbolLibNode)),this.symbolNames[t])},getSymbolNameFromList:function(t){for(var e=0;e<t.childNodeCount;e++)"SYMBOL_GROUP"===t.childNodes[e].symbolNodeType?this.getSymbolNameFromList(t.childNodes[e]):"SYMBOL_NODE"===t.childNodes[e].symbolNodeType&&(this.symbolNames[t.childNodes[e].symbolCode]=t.childNodes[e].symbolName);return""},initNeedCacheList:function(){if(null===this.symbolLibData)return!1;this.initNeedCacheListForNode(this.symbolLibData.rootSymbolLibNode)},initNeedCacheListForNode:function(t,e){for(var i=0;i<t.childNodeCount;i++)"SYMBOL_GROUP"===t.childNodes[i].symbolNodeType?this.initNeedCacheListForNode(t.childNodes[i]):"SYMBOL_NODE"===t.childNodes[i].symbolNodeType&&"SYMBOL_DOT"===t.childNodes[i].symbolType&&this.needCacheList.push(t.childNodes[i].symbolCode)},cachedSymbols:function(){if(0!==this.needCacheList.length){for(var t=this.needCacheList.slice(),e=0,i=t.length;e<i;e++){var o=new SuperMap.GetSymbolInfoParameters;o.libID=this.libID,o.code=t[e],L.supermap.symbolInfoService(this.url).getSymbolInfo(o,function(t){t.result.succeed&&(this.cacheSymbolData(t.result),0===this.needCacheList.length&&this.fire(SuperMap.Plot.Event.cachecompleted,{success:!0}))},this)}this.cachedSymbolOK=!0}else this.fire(SuperMap.Plot.Event.cachecompleted,{success:!0})},getSymbolLibID:function(){return this.libID},getSymbolData:function(t){var e=null;return this.cachedSymbolList.hasOwnProperty(t)&&(e=SuperMap.PlotUtil.cloneObject(this.cachedSymbolList[t])),e},cacheSymbolData:function(t){var e=SuperMap.Util.indexOf(this.needCacheList,t.code);-1!==e&&(this.cachedSymbolList[t.code]=SuperMap.PlotUtil.cloneObject(t),this.needCacheList.splice(e,1))},getSymbolCount:function(){return null===this.symbolLibData?null:this.symbolLibData.symbolCount},querySymbolbyKey:function(t){return this.querySymbol(t,this.getRootSymbolInfo(),this.getRootSymbolIconUrl())},getClassFication:function(){return null===this.symbolLibData?null:this.symbolLibData.classFication},getCreateTime:function(){return null===this.symbolLibData?null:this.symbolLibData.createTime},getCreator:function(){return null===this.symbolLibData?null:this.symbolLibData.creator},getModifyTime:function(){return null===this.symbolLibData?null:this.symbolLibData.modifyTime},getRootSymbolIconUrl:function(){return null===this.symbolLibData?null:this.symbolLibData.rootSymbolIconUrl},getVersion:function(){return null===this.symbolLibData?null:this.symbolLibData.version},getRootSymbolInfo:function(){return null===this.symbolLibData?null:this.symbolLibData.rootSymbolLibNode},querySymbol:function(t,e,i){var o=[];if("SYMBOL_GROUP"===e.symbolNodeType)for(var n=0;n<e.childNodes.length;n++)for(var s=i+"/"+e.symbolName,a=this.querySymbol(t,e.childNodes[n],s),l=0;l<a.length;l++)o.push(a[l]);else t===e.symbolCode.toString()?(e.icon=i+"/"+e.symbolCode+".png",o.push(e)):-1!==e.symbolName.indexOf(t)&&(e.icon=i+"/"+e.symbolCode+".png",o.push(e));return o}}),n=e.symbolLib=function(t){return new o(t)};L.supermap.plotting.symbolLib=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.symbolLibManager=e.SymbolLibManager=void 0;var o=i(26),n=e.SymbolLibManager=L.Evented.extend({url:null,libIDs:null,symbolLibs:null,symbolLibJsons:null,isInializeOK:!1,initialize:function(t,e){n.prototype.url=t,null===this.libIDs&&(n.prototype.libIDs=[]),null===this.symbolLibs&&(n.prototype.symbolLibs=[]),null===this.symbolLibJsons&&(n.prototype.symbolLibJsons=[]),e&&SuperMap.Util.extend(this,e)},destroy:function(){n.prototype.url=null,n.prototype.libIDs=null,n.prototype.symbolLibs=null,n.prototype.symbolLibJsons=null,n.prototype.isInializeOK=!1,n.prototype.isInitialize=!1},initializeAsync:function(){this.isInitializeOK()?this.fire(SuperMap.Plot.Event.initializecompleted,{success:!0,libIDs:this.libIDs}):this.isInitialize||(n.prototype.isInitialize=!0,L.supermap.symbolLibService(this.url).getLibIDs(function(t){if(t.result.succeed){if(null!==this.libIDs&&0!==this.libIDs.length)for(var e=0;e<this.libIDs.length;e++){for(var i=!1,o=0;o<t.result.length;o++)if(n.prototype.libIDs[e]===t.result[o]){i=!0;break}!1===i&&n.prototype.libIDs.slice(e,1)}else n.prototype.libIDs=t.result;this.initializeSymbolLib()}else n.prototype.libIDs=[]},this))},initializeSymbolLib:function(){for(var t=this.libIDs.slice(),e=0,i=this.libIDs.length;e<i;e++){var s=new SuperMap.GetLibInfoParameter;s.libID=this.libIDs[e],L.supermap.symbolLibService(this.url).getLibInfo(s,function(e){if(e.result.succeed){var i=SuperMap.Util.indexOf(t,e.result.libID);-1!==i&&(t.splice(i,1),n.prototype.symbolLibJsons.push(e.result),n.prototype.symbolLibs.push(new o.SymbolLib({symbolLibData:e.result})),this.symbolLibs[this.symbolLibs.length-1].url=this.url),0===t.length&&(n.prototype.isInializeOK=!0,this.fire(SuperMap.Plot.Event.initializecompleted,{success:!0,libIDs:this.libIDs}))}},this)}},isInitializeOK:function(){return this.isInializeOK},getSymbolLibNumber:function(){return this.libIDs.length},getSymbolLibID:function(t){return t>=this.libIDs.length?-1:this.libIDs[t]},getSymbolLibJSONInfo:function(t){return t>=this.libIDs.length?null:this.symbolLibJsons[t]},getSymbolLibByIndex:function(t){return t>=this.libIDs.length?null:this.symbolLibs[t]},getSymbolLibByLibId:function(t){for(var e=0;e<this.symbolLibs.length;e++)if(t===this.symbolLibs[e].libID)return this.symbolLibs[e];return null},cacheSymbolLib:function(t){function e(){this.fire(SuperMap.Plot.Event.cachecompleted,{success:!0}),i.off(SuperMap.Plot.Event.cachecompleted,e)}var i=this.getSymbolLibByLibId(t);null!==i&&(i.on(SuperMap.Plot.Event.cachecompleted,e,this),i.cachedSymbols())},getSymbolName:function(t,e){var i=this.getSymbolLibByLibId(t);return null===i?"":i.getSymbolName(e)},findSymbolByName:function(t){for(var e=[],i=0;i<this.libIDs.length;i++)for(var o=this.getSymbolLibByLibId(this.libIDs[i]).querySymbolbyKey(t),n=0;n<o.length;n++)e.push(o[n]);return e},findSymbolByCode:function(t){for(var e=[],i=0;i<this.libIDs.length;i++)for(var o=this.getSymbolLibByLibId(this.libIDs[i]).querySymbolbyKey(t.toString()),n=0;n<o.length;n++)e.push(o[n]);return e}}),s=e.symbolLibManager=function(t,e){return new n(t,e)};L.supermap.plotting.symbolLibManager=s},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.AlgoSymbolFactory=void 0;o(i(65)),o(i(66)),o(i(67)),o(i(13)),o(i(29)),o(i(68)),o(i(30)),o(i(31)),o(i(32)),o(i(69)),o(i(70)),o(i(71)),o(i(72)),o(i(73)),o(i(74)),o(i(75)),o(i(76)),o(i(96)),o(i(77)),o(i(91)),o(i(78)),o(i(94)),o(i(83)),o(i(84)),o(i(93)),o(i(80)),o(i(79)),o(i(82)),o(i(87)),o(i(92)),o(i(81)),o(i(89)),o(i(86)),o(i(85)),o(i(90)),e.AlgoSymbolFactory=SuperMap.AlgoSymbolFactory=SuperMap.AlgoSymbolFactory||{};SuperMap.AlgoSymbolFactory.createAlgo=function(t){var e=t.libID,i=t.code;if(0===e)switch(i){case SuperMap.Plot.SymbolType.ANNOFRAMESYMBOL:return new SuperMap.Geometry.GeoTooltipBox(t);case SuperMap.Plot.SymbolType.ANNOFRAMESYMBOLM:return new SuperMap.Geometry.GeoTooltipBoxM(t);case SuperMap.Plot.SymbolType.PATHTEXT:return new SuperMap.Geometry.PathText(t);case SuperMap.Plot.SymbolType.ARROWLINE:return new SuperMap.Geometry.ArrowLine(t);case SuperMap.Plot.SymbolType.CURVEEIGHT:return new SuperMap.Geometry.CurveEight(t);case SuperMap.Plot.SymbolType.RUNWAY:return new SuperMap.Geometry.Runway(t);case SuperMap.Plot.SymbolType.CONCENTRICCIRCLE:return new SuperMap.Geometry.ConcentricCircle(t);case SuperMap.Plot.SymbolType.COMBINATIONALCIRCLE:return new SuperMap.Geometry.CombinationalCircle(t);case SuperMap.Plot.SymbolType.FREECURVE:return new SuperMap.Geometry.FreeCurve(t);case SuperMap.Plot.SymbolType.REGULARPOLYGON:return new SuperMap.Geometry.RegularPolygon(t);case SuperMap.Plot.SymbolType.BRACESYMBOL:return new SuperMap.Geometry.Brace(t);case SuperMap.Plot.SymbolType.TRAPEZOIDSYMBOL:return new SuperMap.Geometry.Trapezoid(t);case SuperMap.Plot.SymbolType.SYMBOLTEXTBOX:return new SuperMap.Geometry.SymbolTextBox(t);case SuperMap.Plot.SymbolType.NODECHAIN:return new SuperMap.Geometry.NodeChain(t);case SuperMap.Plot.SymbolType.LINERELATION:return new SuperMap.Geometry.LineRelation(t);case SuperMap.Plot.SymbolType.LINEMARKING:return new SuperMap.Geometry.LineMarking(t);case SuperMap.Plot.SymbolType.POLYGONREGION:return new SuperMap.Geometry.PolygonRegion(t);default:return new SuperMap.Geometry.AlgoSymbol(t)}else if(22===e)switch(i){case 1001:return new SuperMap.Geometry.AlgoSymbol1001(t);case 1002:return new SuperMap.Geometry.AlgoSymbol1002(t);case 1003:return new SuperMap.Geometry.AlgoSymbol1003(t);case 1004:return new SuperMap.Geometry.AlgoSymbol1004(t);case 1005:return new SuperMap.Geometry.AlgoSymbol1005(t);case 1006:return new SuperMap.Geometry.AlgoSymbol1006(t);case 1007:return new SuperMap.Geometry.AlgoSymbol1007(t);case 1008:return new SuperMap.Geometry.AlgoSymbol1008(t);case 1009:return new SuperMap.Geometry.AlgoSymbol1009(t);case 1010:return new SuperMap.Geometry.AlgoSymbol1010(t);case 1011:return new SuperMap.Geometry.AlgoSymbol1011(t);case 1012:return new SuperMap.Geometry.AlgoSymbol1012(t);case 1013:return new SuperMap.Geometry.AlgoSymbol1013(t);case 1014:return new SuperMap.Geometry.AlgoSymbol1014(t);case 1015:return new SuperMap.Geometry.AlgoSymbol1015(t);case 1016:return new SuperMap.Geometry.AlgoSymbol1016(t);default:return null}else{if(100===e&&void 0!==SuperMap.Geometry.JBAlgoSymbolFactory)return SuperMap.Geometry.JBAlgoSymbolFactory.getAlgoSymbol(e,i,t);if(123===e&&void 0!==SuperMap.Geometry.WJAlgoSymbolFactory)return SuperMap.Geometry.WJAlgoSymbolFactory.getAlgoSymbol(e,i,t);if(421!==e)return null;switch(i){case 311:return new SuperMap.Geometry.AlgoSymbol1004(t);case 315:return new SuperMap.Geometry.AlgoSymbol315(t);case 317:return new SuperMap.Geometry.AlgoSymbol1006(t);case 318:return new SuperMap.Geometry.AlgoSymbol1002(t);case 319:return new SuperMap.Geometry.AlgoSymbol15200(t);default:return null}}},SuperMap.AlgoSymbolFactory.getSymbolWayType=function(t,e){if(0===t)switch(e){case SuperMap.Plot.SymbolType.POLYLINESYMBOL:case SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL:return SuperMap.Plot.AddPoint_WayType.POLYLINE;case SuperMap.Plot.SymbolType.POLYBEZIERSYMBOL:case SuperMap.Plot.SymbolType.POLYBEZIERCLOSESYMBOL:return SuperMap.Plot.AddPoint_WayType.CURVE;default:return SuperMap.Plot.AddPoint_WayType.UNKNOWN}if(22===t)switch(e){case 1005:case 1008:case 1012:case 1014:return SuperMap.Plot.AddPoint_WayType.CURVE;case 1007:case 1009:case 1013:case 1015:return SuperMap.Plot.AddPoint_WayType.POLYLINE;default:return SuperMap.Plot.AddPoint_WayType.UNKNOWN}if(100===t&&void 0!==SuperMap.Geometry.JBAlgoSymbolFactory)return SuperMap.Geometry.JBAlgoSymbolFactory.getSymbolWayType(t,e);if(100!==t)return SuperMap.Plot.AddPoint_WayType.UNKNOWN;switch(e){case 15200:case 15201:case 16203:case 17703:case 17704:case 21400:case 21401:case 21500:case 21501:case 21502:case 21503:case 21504:case 21600:case 21900:case 22e3:case 22103:case 23800:case 24700:case 25201:case 25400:case 25601:case 25801:case 25901:case 26500:case 26501:case 26502:case 26503:case 26600:case 28900:case 29e3:case 29003:case 29903:case 3e4:case 30001:case 30002:case 30100:case 30102:case 30200:case 30201:case 30800:case 31803:case 33400:case 34900:case 34901:case 34902:case 35e3:case 36400:case 44200:case 3010102:case 3010103:case 3010104:case 3010105:case 3010106:case 3010107:case 3010108:case 3010301:case 3010302:case 3010303:case 3010304:return SuperMap.Plot.AddPoint_WayType.CURVE;case 12500:case 12502:case 16100:case 20300:case 25501:case 25502:case 25503:case 32900:case 34700:case 35200:case 36401:case 41200:case 41201:case 41202:case 42700:case 44400:return SuperMap.Plot.AddPoint_WayType.POLYLINE;default:return SuperMap.Plot.AddPoint_WayType.UNKNOWN}if(123===t&&void 0!==SuperMap.Geometry.WJAlgoSymbolFactory)return SuperMap.Geometry.WJAlgoSymbolFactory.getSymbolWayType(t,e);if(123!==t)return SuperMap.Plot.AddPoint_WayType.UNKNOWN;switch(e){case 21003:case 21207:case 2120701:case 2121503:case 21218:case 30008:case 3000801:case 3000802:case 3000803:case 3000804:case 3000805:case 3000806:case 3000807:case 3000808:case 3000809:case 30009:case 5021803:case 5022001:case 5022002:case 40301:case 4030101:case 4030102:case 4030103:case 4030104:case 40303:case 4030301:case 4030302:case 4030303:case 50101:case 5010101:case 50102:case 5010201:case 5010202:case 5010203:case 5010204:case 50103:case 5010301:case 5010302:case 5010303:case 5010304:case 50107:case 5010701:case 50210:case 50220:case 50221:case 50225:case 5030102:case 50303:case 5030301:case 50309:case 50320:case 5032001:case 5032002:case 5032003:case 50321:case 5032101:case 5032102:case 50322:case 5032201:case 50330:case 5033001:case 5034203:case 5035201:case 5035204:case 60205:case 90105:return SuperMap.Plot.AddPoint_WayType.CURVE;case 20915:case 2091502:case 2092101:case 2120702:case 21216:case 2121601:case 2121602:case 21605:case 30010:case 30011:case 3001101:case 3001102:case 3001103:case 3001104:case 3001105:case 30012:case 30020:case 3002001:case 3002002:case 3002005:case 30025:case 3002501:case 30026:case 40104:case 40302:case 4030201:case 4030202:case 4030203:case 4030204:case 50227:case 5035205:case 60301:case 6030101:case 6030102:case 6030103:case 6030104:case 6030105:case 6030106:case 6030107:case 70202:case 7020201:case 7020202:case 90107:return SuperMap.Plot.AddPoint_WayType.POLYLINE;default:return SuperMap.Plot.AddPoint_WayType.UNKNOWN}},SuperMap.AlgoSymbolFactory.isAccessServer=function(t,e){if(0===t||22===t)return!1;if(100===t&&void 0!==SuperMap.Geometry.JBAlgoSymbolFactory)return SuperMap.Geometry.JBAlgoSymbolFactory.isAccessServer(t,e);if(123===t&&void 0!==SuperMap.Geometry.WJAlgoSymbolFactory)return SuperMap.Geometry.WJAlgoSymbolFactory.isAccessServer(t,e);if(421!==t)return!0;switch(e){case 311:case 317:case 318:case 315:case 319:return!1;default:return!0}},SuperMap.AlgoSymbolFactory.getDefaultSubSymbols=function(t,e){return 100===t&&void 0!==SuperMap.Geometry.JBAlgoSymbolFactory?SuperMap.Geometry.JBAlgoSymbolFactory.getDefaultSubSymbols(t,e):123!==t||void 0===SuperMap.Geometry.WJAlgoSymbolFactory||SuperMap.Geometry.WJAlgoSymbolFactory.getDefaultSubSymbols(t,e)},SuperMap.AlgoSymbolFactory.setMinAndMaxEditPts=function(t,e){return 100===t&&void 0!==SuperMap.Geometry.JBAlgoSymbolFactory?SuperMap.Geometry.JBAlgoSymbolFactory.setMinAndMaxEditPts(t,e):123===t&&void 0!==SuperMap.Geometry.WJAlgoSymbolFactory?SuperMap.Geometry.WJAlgoSymbolFactory.setMinAndMaxEditPts(t,e):0}},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=o(i(0)),u=(o(i(3)),function(t){function e(t){n(this,e);var i=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.CLASS_NAME="SuperMap.Geometry.AlgoSymbol1005",i.symbolType=SuperMap.Plot.SymbolType.ALGOSYMBOL,i.symbolName="普通贝塞尔箭头",i.minEditPts=2,i.maxEditPts=99999,i}return a(e,r["default"]),l(e,[{key:"calculateParts",value:function(){this.clearComponents();var t=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints);if(!((t=SuperMap.Plot.PlottingUtil.clearSamePts(t)).length<this.minEditPts)){var e=SuperMap.Plot.ArrowToolKit.generateArrowBodyShapePtsBySingleLine(t,0,SuperMap.Plot.ArrowToolKit.ArrowBodyType.ARROWBODY_POLYBEZIER),i=[];i.push(e.arrowBodyPts[e.arrowBodyPts.length-1]),i.push(e.arrowBodyPts[e.arrowBodyPts.length-2]);var o=this.getSubSymbolScaleValue(),n=this.calculateforHead(t,e,i,o),s=SuperMap.Plot.ArrowToolKit.generateArrowHeadShapePtsBySingleLine(t,n,i,o,e.arrowHeadLen,SuperMap.Plot.ArrowToolKit.ArrowHeadType.ARROWHEAD_POLYLINE);this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,n),this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,s)}}}]),e}());e.default=u,SuperMap.Geometry.AlgoSymbol1005=u},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=o(i(0)),u=(o(i(3)),function(t){function e(t){n(this,e);var i=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.CLASS_NAME="SuperMap.Geometry.AlgoSymbol1007",i.symbolType=SuperMap.Plot.SymbolType.ALGOSYMBOL,i.symbolName="折线空三角箭头",i.minEditPts=2,i.maxEditPts=99999,i}return a(e,r["default"]),l(e,[{key:"calculateParts",value:function(){this.clearComponents();var t=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints);if(!((t=SuperMap.Plot.PlottingUtil.clearSamePts(t)).length<this.minEditPts)){var e=!1;void 0!==t[0].z&&(e=!0);var i=SuperMap.Plot.ArrowToolKit.generateArrowBodyShapePtsBySingleLine(t,0,SuperMap.Plot.ArrowToolKit.ArrowBodyType.ARROWBODY_POLYLINE),o=[];o.push(i.arrowBodyPts[i.arrowBodyPts.length-1]),o.push(i.arrowBodyPts[i.arrowBodyPts.length-2]);var n=this.getSubSymbolScaleValue(),s=this.calculateforHead(t,i,o,n),a=SuperMap.Plot.ArrowToolKit.generateArrowHeadShapePtsBySingleLine(t,s,o,n,i.arrowHeadLen,SuperMap.Plot.ArrowToolKit.ArrowHeadType.ARROWHEAD_TRIANGLE_SOLID);if(e){for(var l=t.length,r=[],u=[],p=0;p<l;++p)r.push({x:s[p].x,y:s[p].y,z:t[p].z});var h={x:t[l-1].x,y:t[l-1].y,z:t[l-1].z},c={x:t[l-2].x,y:t[l-2].y,z:t[l-2].z},y=this.ComputeZValue(s[l-1],h,c);r.push({x:s[l-1].x,y:s[l-1].y,z:y});for(var g=0;g<a.length;++g){var d=this.ComputeZValue(a[g],h,c);u.push({x:a[g].x,y:a[g].y,z:d})}this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,r);f={surroundLineFlag:!1,fillLimit:!0,fillColorLimit:!1,fillStyle:0};this.addCell(SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,u,f)}else{this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,s);var f={surroundLineFlag:!1,fillLimit:!0,fillColorLimit:!1,fillStyle:0};this.addCell(SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,a,f)}}}}]),e}());e.default=u,SuperMap.Geometry.AlgoSymbol1007=u},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=o(i(0)),u=(o(i(3)),function(t){function e(t){n(this,e);var i=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.CLASS_NAME="SuperMap.Geometry.AlgoSymbol1008",i.symbolType=SuperMap.Plot.SymbolType.ALGOSYMBOL,i.symbolName="贝塞尔燕尾箭头",i.minEditPts=2,i.maxEditPts=99999,i}return a(e,r["default"]),l(e,[{key:"calculateParts",value:function(){this.clearComponents();var t=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints);if(!((t=SuperMap.Plot.PlottingUtil.clearSamePts(t)).length<this.minEditPts)){var e=this.getSubSymbolScaleValue(),i=SuperMap.Plot.ArrowToolKit.generateArrowBodyShapePtsBySingleLine(t,0,SuperMap.Plot.ArrowToolKit.ArrowBodyType.ARROWBODY_POLYBEZIER),o=[];o.push(i.arrowBodyPts[i.arrowBodyPts.length-1]),o.push(i.arrowBodyPts[i.arrowBodyPts.length-2]);var n=this.calculateforHead(t,i,o,e),s=SuperMap.Plot.ArrowToolKit.generateArrowHeadShapePtsBySingleLine(t,n,o,e,i.arrowHeadLen,SuperMap.Plot.ArrowToolKit.ArrowHeadType.ARROWHEAD_COATTAIL);this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,n);var a={surroundLineFlag:!1,fillLimit:!0,fillStyle:!0};this.addCell(SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,s,a)}}}]),e}());e.default=u,SuperMap.Geometry.AlgoSymbol1008=u},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=o(i(0)),u=(o(i(3)),function(t){function e(t){n(this,e);var i=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.CLASS_NAME="SuperMap.Geometry.AlgoSymbol1009",i.symbolType=SuperMap.Plot.SymbolType.ALGOSYMBOL,i.symbolName="普通折线箭头",i.minEditPts=2,i.maxEditPts=99999,i}return a(e,r["default"]),l(e,[{key:"calculateParts",value:function(){this.clearComponents();var t=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints);if(!((t=SuperMap.Plot.PlottingUtil.clearSamePts(t)).length<this.minEditPts)){var e=!1;void 0!==t[0].z&&(e=!0);var i=SuperMap.Plot.ArrowToolKit.generateArrowBodyShapePtsBySingleLine(t,0,SuperMap.Plot.ArrowToolKit.ArrowBodyType.ARROWBODY_POLYLINE),o=[];o.push(i.arrowBodyPts[i.arrowBodyPts.length-1]),o.push(i.arrowBodyPts[i.arrowBodyPts.length-2]);var n=this.getSubSymbolScaleValue(),s=this.calculateforHead(t,i,o,n),a=SuperMap.Plot.ArrowToolKit.generateArrowHeadShapePtsBySingleLine(t,s,o,n,i.arrowHeadLen,SuperMap.Plot.ArrowToolKit.ArrowHeadType.ARROWHEAD_POLYLINE),l=SuperMap.Plot.ArrowToolKit.generateArrowTailShapePts(t,o,n,SuperMap.Plot.ArrowToolKit.ArrowTailType.ARROWTAIL_COATTAIL);if(e){for(var r=t.length,u=[],p=[],h=[],c=0;c<r;++c)u.push({x:s[c].x,y:s[c].y,z:t[c].z});var y,g={x:t[r-1].x,y:t[r-1].y,z:t[r-1].z},d={x:t[r-2].x,y:t[r-2].y,z:t[r-2].z};y=this.ComputeZValue(s[r-1],g,d),u.push({x:s[r-1].x,y:s[r-1].y,z:y});for(var f=0;f<a.length;++f)y=this.ComputeZValue(a[f],g,d),p.push({x:a[f].x,y:a[f].y,z:y});for(var S={x:t[1].x,y:t[1].y,z:t[1].z},P={x:t[0].x,y:t[0].y,z:t[0].z},m=0;m<l.length;++m)y=this.ComputeZValue(l[m],S,P),h.push({x:l[m].x,y:l[m].y,z:y});b={surroundLineFlag:!1};this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,u,b),this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,p),0!==h.length&&this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,h)}else{var b={surroundLineFlag:!1};this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,s,b),this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,a),0!==l.length&&this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,l)}}}}]),e}());e.default=u,SuperMap.Geometry.AlgoSymbol1009=u},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=(function(t){t&&t.__esModule}(i(95)),function(){function t(e,i,n){o(this,t),this.m_pData=null,this.CLASS_NAME="SuperMap.Plot.Path2D",e?(this.m_x=e,this.m_y=i,this.m_type=n):this.m_pData=null}return n(t,[{key:"MoveTo",value:function(t){this.ensureData(),this.detach();var e=this.getDataPtr();if(e.require_StartNewFigure=!1,0==e.elements[e.elements.length-1].GetType())e.elements[e.elements.length-1].SetPosition(t.x,t.y);else{var i=new SuperMap.Plot.Element(t.x,t.y,0);e.elements.push(i)}e.cStart=e.elements.length-1}},{key:"LineTo",value:function(t){this.ensureData(),this.detach();var e=this.getDataPtr();if(e.MaybeStartNewFigure(),e.elements[e.elements.length-1].GetX()!=t.x||e.elements[e.elements.length-1].GetY()!=t.y){var i=new SuperMap.Plot.Element(t.x,t.y,1);e.elements.push(i)}}},{key:"CurveTo",value:function(t,e,i){this.ensureData(),this.detach();var o=this.getDataPtr();if(o.elements[o.elements.length-1].GetX()!=t.x||o.elements[o.elements.length-1].GetY()!=t.y||t.x!=e.x||t.y!=e.y||e.x!=endPoint.x||e.y!=endPoint.y){o.MaybeStartNewFigure();var n=new SuperMap.Plot.Element(t.x,t.y,2),s=new SuperMap.Plot.Element(e.x,e.y,3),a=new SuperMap.Plot.Element(i.x,i.y,3);o.elements.push(n),o.elements.push(s),o.elements.push(a)}}},{key:"CubicTo",value:function(t,e,i){this.ensureData(),this.detach();var o=this.getDataPtr();if(o.elements[o.elements.length-1].GetX()!=t.x||o.elements[o.elements.length-1].GetY()!=t.y||t.x!=e.x||t.y!=e.y||e.x!=i.x||e.y!=i.y){o.MaybeStartNewFigure();var n=new SuperMap.Plot.Element(t.x,t.y,2),s=new SuperMap.Plot.Element(e.x,e.y,3),a=new SuperMap.Plot.Element(i.x,i.y,3);o.elements.push(n),o.elements.push(s),o.elements.push(a)}}},{key:"ToSubPathPolygons",value:function(t){var e,i,o=this.getDataPtr();if(this.IsEmpty())return!1;for(var n=[],s=this.GetElementCount(),a=0;a<s;a++){var l=o.elements[a];switch(l.GetType()){case 0:n.length>1&&t.push(n),n=[],e=l.GetX(),i=l.GetY(),n.push(new SuperMap.Geometry.Point(e,i));break;case 1:e=l.GetX(),i=l.GetY(),n.push(new SuperMap.Geometry.Point(e,i));break;case 2:3!=o.elements[a+1].GetType()||o.elements[a+1].GetType();for(var r=o.elements[a-1].GetX(),u=o.elements[a-1].GetY(),p=l.GetX(),h=l.GetY(),c=o.elements[a+1].GetX(),y=o.elements[a+1].GetY(),g=o.elements[a+2].GetX(),d=o.elements[a+2].GetY(),f=0;f<=1;f+=.03125){var S=f*f,P=S*f,m=1-3*f+3*S-P,b=3*(f-2*S+P),L=3*(S-P),M=P;n.push(new SuperMap.Geometry.Point(m*r+b*p+L*c+M*g,m*u+b*h+L*y+M*d))}a+=2}}return n.length>1&&t.push(n),!0}},{key:"ensureData",value:function(){null==this.m_pData&&this.ensureData_helper()}},{key:"ensureData_helper",value:function(){var t=new SuperMap.Plot.UGPath2DData,e=new SuperMap.Plot.Element(0,0,0);t.elements.push(e),null==this.m_pData||this.mtDeRef(m_pData.ref)||(this.m_pData=null),this.m_pData=t}},{key:"detach",value:function(){1!=this.m_pData.ref&&this.detach_helper(),this.setBoundsDirty(!0)}},{key:"detach_helper",value:function(){var t=new SuperMap.Plot.UGPath2DData;null==this.m_pData||this.mtDeRef(this.m_pData.ref)||(this.m_pData=null),this.m_pData=t}},{key:"setBoundsDirty",value:function(t){this.getDataPtr().isBoundsDirty=t}},{key:"getDataPtr",value:function(){return this.m_pData}},{key:"IsEmpty",value:function(){if(null==this.m_pData)return!0;var t=this.m_pData.elements.length;return 0==t||1==t&&0==this.m_pData.elements[0].GetType()}},{key:"GetElementCount",value:function(){return null!=this.m_pData?this.m_pData.elements.length:0}}],[{key:"mtRef",value:function(t){return 0!=++t}},{key:"mtDeRef",value:function(t){return 0!=--t}}]),t}());e.default=s,SuperMap.Plot.Path2D=s},function(t,e,i){"use strict";function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}Object.defineProperty(e,"__esModule",{value:!0}),e.AvoidRegionControl=void 0;i(133),i(14);var n,s=i(10);e.AvoidRegionControl=L.Control.extend((n={_mouseTolerance:10,_editMarkers:null,_editMode:SuperMap.Plot.EditMode.EDITCIRCUMRECTANGLE,feature:null,_temportary:null,options:{avoidRegionStyle:{fill:!1,color:"#0000ff",dashArray:"2, 2",opacity:1,weight:1},draggable:!0,avoidIcon:L.divIcon({className:"leaflet-supermap-plot-avoid-icon-path",iconSize:[8,8]}),icon:new L.DivIcon({iconSize:new L.Point(8,8),className:"leaflet-div-icon leaflet-editing-icon"})},initialize:function(t,e){if(L.version<"0.7")throw new Error("Leaflet.draw 0.2.3+ requires Leaflet 0.7.0+. Download latest from https://github.com/Leaflet/Leaflet/");L.Control.prototype.initialize.call(this,e),L.setOptions(this,e),this._temportary=new s.PlottingLayerBase("avoidRegionControl-temportary",this.serverUrl),this._editMarkers={},this.feature=t},onAdd:function(t){if(this.feature&&!this.feature.getLocked())return this.controlDiv=L.DomUtil.create("div","supermap-iclient-avoidregion"),this._map=t,this._markers=[],this._latlngs=[],this._markerGroup=new L.LayerGroup,this._map.addLayer(this._markerGroup),this._map.addLayer(this._temportary),this._map.on("mousemove",this._onMouseMove,this).on("click",this._onMapClick,this),this._showAvoidRegions(),this.controlDiv},onRemove:function(){this._hideAvoidRegions(),this._map.removeLayer(this._markerGroup),delete this._markerGroup,delete this._markers,delete this._latlngs,this.plotting&&(this._temportary.removeFeatures(this.plotting),delete this.plotting,this.plotting=null),this._map.removeLayer(this._temportary),delete this._temportary,this._map.off("mousemove",this._onMouseMove,this).off("click",this._onMapClick,this),this._map=null},_showAvoidRegions:function(){for(var t=0;t<this.feature.avoidRegions.length;t++){var e=this.feature.avoidRegions[t];this._temportary.addFeatures(e),this._selectFeature(e)}},_hideAvoidRegions:function(){for(var t=0;t<this.feature.avoidRegions.length;t++){var e=this.feature.avoidRegions[t];this._unselectFeature(e),this._temportary.removeFeatures(e)}},_selectFeature:function(t){t.symbolType===SuperMap.Plot.SymbolType.AVOIDREGION&&(this._collectEditMarkers(t),t.on("mousemove",this._onMouseMove,this).on("mouseout",this._onMouseOut,this).on("dragstart",this._onDragStart,this).on("drag",this._onDrag,this).on("dragend",this._onDragEnd,this),t.dragging.enable())},_unselectFeature:function(t){t.symbolType===SuperMap.Plot.SymbolType.AVOIDREGION&&(this._removeMarkers(t),t.off("mousemove",this._onMouseMove,this).off("mouseout",this._onMouseOut,this).off("dragstart",this._onDragStart,this).off("drag",this._onDrag,this).off("dragend",this._onDragEnd,this),t.dragging.disable())},_onDragEnd:function(t){this._collectEditMarkers(t.target)},_onMouseMove:function(t){t.target.layer._renderer._container.style.cursor="crosshair"},_onMouseOut:function(t){t.target.layer._renderer._container.style.cursor=""},_onMapClick:function(t){if(this.moveend)this.moveend=!1;else{var e=this._map.mouseEventToLayerPoint(t.originalEvent),i=this._map.layerPointToLatLng(e);this.plotting?this._addVertex(i):(this.plotting=L.supermap.plotting.avoidRegion(0,SuperMap.Plot.SymbolType.AVOIDREGION,[],{style:this.options.avoidRegionStyle}),this._temportary.addFeatures(this.plotting),this._addVertex(i)),L.DomEvent.preventDefault(t.originalEvent)}},_collectEditMarkers:function(t){var e=[];if(t.symbolType===SuperMap.Plot.SymbolType.AVOIDREGION)for(var i in t.getLatLngs()){var o=new L.LatLng(t.getLatLngs()[i].lat,t.getLatLngs()[i].lng),n=L.supermap.plotting.editMarker(o,{icon:this.options.avoidIcon,nHandle:-1,tag:i});this._addToMapAndBindMarker(n),e.push(n),n.owner=t}this._editMarkers[t.uuid]=e},_removeMarkers:function(t){var e=this._editMarkers[t.uuid];for(var i in e)this._unbindMarkerEvents(e[i]),this._map.removeLayer(e[i]);delete this._editMarkers[t.uuid]},_unbindMarkerEvents:function(t){t.off("mousemove",this._moveMove,this),t.off("mouseout",this._moveOut,this),t.off("click",this._removePoint,this),t.off("drag",this.redraw,this),t.dragging.disable()},_addToMapAndBindMarker:function(t){t.addTo(this._map),t.on("mousemove",this._moveMove,this),t.on("mouseout",this._moveOut,this),t.on("click",this._removePoint,this),t.on("drag",this._dragPoint,this),t.dragging.enable()},_removePoint:function(t){if(this._editMode===SuperMap.Plot.EditMode.ADDCONTROLPOINT&&t.target.owner.isSelected){var e=this._editMarkers[t.target.owner.uuid],i=e.indexOf(t.target);this._map.removeLayer(e[i]),e.splice(i,1),t.target.owner.latLngs.splice(i,1),t.target.owner.redraw()}},_dragPoint:function(t){var e=t.target.owner;if(e.symbolType===SuperMap.Plot.SymbolType.AVOIDREGION){var i=this._editMarkers[e.uuid],o=SuperMap.Util.indexOf(i,t.target);e.getLatLngs()[o]=t.latlng,e._modifyPoint(),this.moveend=!0}},_moveMove:function(t){t.target._icon.style.cursor="pointer"},_moveOut:function(t){t.target._icon.style.cursor=""},_addVertex:function(t){var e=new L.Marker(t,{icon:this.options.icon,zIndexOffset:2*this.options.zIndexOffset});this._markerGroup.addLayer(e),this._markers.push(e),this._latlngs.push(t),this.plotting.setLatLngs(this._latlngs);var i=this._markers.length;i>1&&this._markers[i-1].on("click",this._finishShape,this),i>2&&this._markers[i-2].off("click",this._finishShape,this)},_finishShape:function(){this._markers.length>1&&this._markers[this._markers.length-1].off("click",this._finishShape,this);var t=this.plotting.clone();this._markerGroup.clearLayers(),this._markers=[],this._latlngs=[],this._temportary.removeFeatures(this.plotting),delete this.plotting,this.plotting=null,this._temportary.addFeatures(t),this.feature.addAvoidRegion(t),this._selectFeature(t),t.on("contextmenu",function(t){})},_onDragStart:function(t){var e=t.target,i=this._editMarkers[e.uuid];for(var o in i)i[o].setOpacity(0)},_onDrag:function(t){t.target.move(t.dLat,t.dLng)}},o(n,"_onDragEnd",function(t){var e=t.target;this._collectEditMarkers(e),this.moveend=!0}),o(n,"_onMouseMove",function(t){var e=this._map.mouseEventToLayerPoint(t.originalEvent),i=this._map.layerPointToLatLng(e);if(this.plotting){var o=L.Util.cloneLatLngs(this._latlngs);0===o.length?o.push(i):o[o.length-1].lat===i.lat&&o[o.length-1].lng===i.lng||o.push(i),this.plotting.setLatLngs(o)}L.DomEvent.preventDefault(t.originalEvent)}),n))},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.PlotControl=L.Evented.extend({options:{position:"topright"},initialize:function(t){L.setOptions(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),o=t._controlCorners[i];return L.DomUtil.addClass(e,"leaflet-control"),-1!==i.indexOf("bottom")?o.insertBefore(e,o.firstChild):o.appendChild(e),this},remove:function(){return this._map?(L.DomUtil.remove(this._container),this.onRemove&&this.onRemove(this._map),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}});L.control=function(t){return new L.Control(t)},L.Map.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){function t(t,n){var s=i+t+" "+i+n;e[t+n]=L.DomUtil.create("div",s,o)}var e=this._controlCorners={},i="leaflet-",o=this._controlContainer=L.DomUtil.create("div",i+"control-container",this._container);t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){L.DomUtil.remove(this._controlContainer)}})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.lineRelation=e.LineRelation=void 0;var o=i(1),n=i(15),s=(function(t){t&&t.__esModule}(i(28)),e.LineRelation=o.AlgoSymbol.extend({startAssociatedUuid:null,endAssociatedUuid:null,lineRelationType:SuperMap.Plot.LineRelation.ARROW,setLineRelationType:function(t){this.lineRelationType!==t&&(this.lineRelationType=t,this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues))},getLineRelationType:function(){return this.lineRelationType},initialize:function(t,e,i,n){this.libID=0,this.code=SuperMap.Plot.SymbolType.LINERELATION,this.symbolType=SuperMap.Plot.SymbolType.LINERELATION,this.symbolName="连接线",o.AlgoSymbol.prototype.initialize.call(this,t,e,i,n)},onAdd:function(t){o.AlgoSymbol.prototype.onAdd.call(this,t),this.setJoinLineToDotSymbol(this.startAssociatedUuid),this.setJoinLineToDotSymbol(this.endAssociatedUuid)},setStartFeature:function(t){null!==this.startAssociatedUuid&&(this.removeJoinLineFromDotSymbol(this.startAssociatedUuid),this.startAssociatedUuid=null);var e=this._map.getFeatureByUuid(t);null!=e&&e instanceof n.DotSymbol&&(null!==this.endAssociatedUuid&&t===this.endAssociatedUuid||(this.startAssociatedUuid=t,this.setJoinLineToDotSymbol(this.startAssociatedUuid),null!==this.endAssociatedUuid&&this.setFeatures(this.startAssociatedUuid,this.endAssociatedUuid)))},setEndFeature:function(t){null!==this.endAssociatedUuid&&(this.removeJoinLineFromDotSymbol(this.endAssociatedUuid),this.endAssociatedUuid="");var e=this._map.getFeatureByUuid(t);null!==e&&e instanceof n.DotSymbol&&(null!==this.startAssociatedUuid&&t===this.startAssociatedUuid||(this.endAssociatedUuid=t,this.setJoinLineToDotSymbol(this.endAssociatedUuid),null!==this.startAssociatedUuid&&this.setFeatures(this.startAssociatedUuid,this.endAssociatedUuid)))},setFeatures:function(t,e){var i=this._map.getFeatureByUuid(t),o=this._map.getFeatureByUuid(e);null!==i&&null!==o&&i instanceof n.DotSymbol&&o instanceof n.DotSymbol&&(this.startAssociatedUuid=t,this.endAssociatedUuid=e,this.setJoinLineToDotSymbol(this.startAssociatedUuid),this.setJoinLineToDotSymbol(this.endAssociatedUuid),this.redraw())},destroy:function(){this.startFeature=null,this.endFeature=null,o.AlgoSymbol.prototype.destroy.call(this)},_calculateParts:function(){var t=null,e=this._map.getFeatureByUuid(this.startAssociatedUuid);if(null!==e){var i=L.Util.latLngsToSuperMapPoints(e.latLngs);null!==i&&0<i.length&&(t=i[0])}var o=null,n=this._map.getFeatureByUuid(this.endAssociatedUuid);if(null!==n){var s=L.Util.latLngsToSuperMapPoints(n.latLngs);null!==s&&0<s.length&&(o=s[0])}if(this.superMapAlgoSymbol.controlPoints=L.Util.latLngsToSuperMapPoints(this.latLngs),this.superMapAlgoSymbol.lineRelationType=this.lineRelationType,null!==t&&(0===this.superMapAlgoSymbol.controlPoints.length?this.superMapAlgoSymbol.controlPoints.push(t):this.superMapAlgoSymbol.controlPoints[0]=t),null!==o){if(0===this.superMapAlgoSymbol.controlPoints.length)return;1===this.superMapAlgoSymbol.controlPoints.length?this.superMapAlgoSymbol.controlPoints.push(o):this.superMapAlgoSymbol.controlPoints[this.superMapAlgoSymbol.controlPoints.length-1]=o}this.superMapAlgoSymbol.calculateParts(),this.latLngs=L.Util.superMapPointsToLatLngs(this.superMapAlgoSymbol.controlPoints),this._transSymbolCellsToLayers(this.superMapAlgoSymbol.components)},move:function(t,e){if(null!==t&&null!==e){for(var i in this.getLatLngs())this.getLatLngs()[i].lat+=t,this.getLatLngs()[i].lng+=e;for(var o=0,n=this.avoidRegions.length;o<n;o++)this.avoidRegions[o].move(t,e);this.redraw()}},_modifyPoint:function(t,e){if(0===t){var i=this.getFeatureByPoint(e);null!==i?this.setStartFeature(i.uuid):this.setStartFeature(null)}else if(this.getLatLngs().length-1===t){var o=this.getFeatureByPoint(e);null!==o?this.setEndFeature(o.uuid):this.setEndFeature(null)}this.redraw()},getFeatureByPoint:function(t){var e=this._map.latLngToLayerPoint(t),i=this.layer.features;for(var o in i)if(i[o]instanceof n.DotSymbol&&this._map.latLngToLayerPoint(i[o].getLatLngs()[0]).distanceTo(e)<5)return i[o];return null},setJoinLineToDotSymbol:function(t){var e=this._map.getFeatureByUuid(t);if(!(null==e||!e instanceof n.DotSymbol)){for(var i=!1,o=0;o<e.joinLines.length;o++)if(this===e.joinLines[o]){i=!0;break}i||e.joinLines.push(this)}},removeJoinLineFromDotSymbol:function(t){if(t&&"[object String]"===Object.prototype.toString.call(t)){var e=this._map.getFeatureByUuid(t);if(!(null===e||!e instanceof n.DotSymbol))for(var i=0,o=e.joinLines.length;i<o;i++)if(this===e.joinLines[i]){e.joinLines.splice(i,1);break}}},_parseSymbolData:function(){o.AlgoSymbol.prototype._parseSymbolData.call(this),this.symbolData&&(this.symbolData.hasOwnProperty("startAssociatedUuid")&&(this.startAssociatedUuid=this.symbolData.startAssociatedUuid),this.symbolData.hasOwnProperty("endAssociatedUuid")&&(this.endAssociatedUuid=this.symbolData.endAssociatedUuid),this.symbolData.hasOwnProperty("lineRelationType")&&(this.lineRelationType=this.symbolData.lineRelationType))},_setSymbolData:function(){o.AlgoSymbol.prototype._setSymbolData.call(this),this.symbolData&&(this.symbolData.endAssociatedUuid=this.endAssociatedUuid,this.symbolData.lineRelationType=this.lineRelationType,this.symbolData.startAssociatedUuid=this.startAssociatedUuid)}})),a=e.lineRelation=function(t,e,i,o){return new s(t,e,i,o)};L.supermap.plotting.lineRelation=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.navyDeployment=e.NavyDeployment=void 0;var o=i(7),n=e.NavyDeployment=o.GroupObject.extend({colNum:null,space:null,initialize:function(t,e,i,n){o.GroupObject.prototype.initialize.call(this,t,e,i,n),this.libID=0,this.code=SuperMap.Plot.SymbolType.NAVYDEPLOYMENT,this.symbolType=SuperMap.Plot.SymbolType.NAVYDEPLOYMENT,this.symbolName="海军兵力部署",null===this.colNum&&(this.colNum=1),null===this.space&&(this.space=10),null===this.scaleByMap&&(this.scaleByMap=!0)},destroy:function(){this.space=null,this.colNum=null,o.GroupObject.prototype.destroy.call(this)},redraw:function(){"none"!==this.style.display?this._redrawComponents():this._clearComponents()},_calculateParts:function(){var t=this.layer.getFeatureByUuid(this.associatedUuid);if(null!==t&&t.symbolType===SuperMap.Plot.SymbolType.DOTSYMBOL&&0!==t.latLngs.length){for(var e=!1,i=0;i<t.deployments.length;i++)if(this===t.deployments[i]){e=!0;break}if(e||t.deployments.push(this),0!==this.subObjects.length&&0===this.components.length)for(var i=0,o=this.subObjects.length;i<o;i++)this.subObjects[i].ownerGroup=this,this.subObjects[i].enableEdit=!0,this._addComponents(this.subObjects[i]);if(0===this.components.length){for(var n=L.Util.cloneLatLngs(t.latLngs[0]),s=this._map.latLngToLayerPoint(L.latLng(n[0].lat,n[0].lng)),a=this._transitionPoint(new SuperMap.Geometry.Point(this.space,0),s),l=Math.abs(a.lng-n[0].lng),r=new SuperMap.Geometry.Point(0,0),u=this._transitionPoint(r,s),p=new SuperMap.Geometry.Point(100,100),h=this._transitionPoint(p,s),c=new L.LatLngBounds(L.latLng(u.lat,u.lng),L.latLng(h.lat,h.lng)),y=Math.ceil(this._getSubSymbolCount(this.subSymbols.length-1)/this.colNum),g=Math.abs(c.getNorth()-c.getSouth())*y+l*(y+1),d=L.latLng(n[0].lat+g/2,n[0].lng-5*l),i=0;i<this.subSymbols.length;i++)for(var f=0;f<this.subSymbols[i].totalNum;f++){var S=this._getSubSymbolCount(i-1)+f+1,P=Math.ceil(S/y),m=S-y*(P-1);if(1!==P&&1===m){var b=this._calculateBounds();d.lng=b.getWest()}this.subSymbols[i].symbolData.textContent=this.subSymbols[i].textContent;for(var M=d.lng-(l+Math.abs(c.getWest()-c.getEast())/3),v=d.lat-m*(Math.abs(c.getNorth()-c.getSouth())+l),_=0,T=0,x=0,O=0,A=0;A<this.subSymbols[i].symbolData.innerCells.length;A++)for(var w=0;w<this.subSymbols[i].symbolData.innerCells[A].positionPoints.length;w++)_<=this.subSymbols[i].symbolData.innerCells[A].positionPoints[w].x&&(_=this.subSymbols[i].symbolData.innerCells[A].positionPoints[w].x),T>=this.subSymbols[i].symbolData.innerCells[A].positionPoints[w].x&&(T=this.subSymbols[i].symbolData.innerCells[A].positionPoints[w].x),x<=this.subSymbols[i].symbolData.innerCells[A].positionPoints[w].y&&(x=this.subSymbols[i].symbolData.innerCells[A].positionPoints[w].y),O>=this.subSymbols[i].symbolData.innerCells[A].positionPoints[w].y&&(O=this.subSymbols[i].symbolData.innerCells[A].positionPoints[w].y);var D=L.latLng(v,M),E=this._map.latLngToLayerPoint(L.latLng(v,M)),I=new SuperMap.Geometry.Point(_,(x+O)/2),N=new SuperMap.Geometry.Point(I.x,I.y),C=new SuperMap.Geometry.Point(this.subSymbols[i].symbolData.anchorPoint.x,this.subSymbols[i].symbolData.anchorPoint.y),R=this._transitionPoint(N,E),U=this._transitionPoint(C,E);D.lat+=U.lat-R.lat,D.lng+=U.lng-R.lng;var G=this.subSymbols[i].symbolData.libID,B=this.subSymbols[i].symbolData.code;this.subSymbols[i].symbolData.annotationPosition=6;var F=SuperMap.Util.cloneObject(this.subSymbols[i].symbolData),k=L.supermap.plotting.PlottingObject.createSymbol(G,B,D,{serverUrl:this.serverUrl,symbolData:F,scaleByMap:!0,minScale:0,maxScale:2048,space:0});k.enableEdit=!0,k.ownerGroup=this,this._addComponents(k),this.bounds=this._calculateBounds(),this.subObjects.push(k)}if(this.bounds=new L.LatLngBounds,this.bounds=this._calculateBounds(),null!==this.textContent&&0!==this.textContent.length){var j=L.latLng(n[0].lat+g/2+l,n[0].lng-5*l),z=L.supermap.plotting.PlottingObject.createSymbol(0,34,[j],{textContent:this.textContent,serverUrl:this.serverUrl});z.style.labelAlign="rb",z.style.scaleByMap=!0,z.enableEdit=!0,z.ownerGroup=this,this._addComponents(z),this.bounds.extend(z.getBounds()),this.subObjects.push(z)}var Y=new L.LatLngBounds(L.latLng(this.bounds.getSouth()-l,this.bounds.getWest()-l),L.latLng(this.bounds.getNorth()+l,this.bounds.getEast()+l)),V=[];V.push(L.latLng(Y.getNorth(),Y.getWest())),V.push(L.latLng(Y.getSouth(),Y.getEast()));var W=L.latLng(n[0].lat,n[0].lng);W.isFixedPos=!0,V.push(W);var H=L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.ANNOFRAMESYMBOL,V,{serverUrl:this.serverUrl});H.enableEdit=!0,H.ownerGroup=this,this.subObjects.splice(0,0,H),this._addComponents(H)}}},_reView:function(){for(var t in this.subObjects)this.subObjects[t].layer&&this.subObjects[t]._reView();this.fire(SuperMap.Plot.Event.reseteditmarkersvalues)},move:function(t,e){for(var i in this.subObjects)this.subObjects[i].move(t,e);this.fire(SuperMap.Plot.Event.reseteditmarkersvalues)},_resize:function(t,e){for(var i in this.subObjects)this.subObjects[i]._resize(t,this.anchorPoint)},_transitionPoint:function(t,e){var i=e.x+t.x*(96/254),o=e.y-t.y*(96/254);return this._map.layerPointToLatLng(L.point(i,o))},_getSubSymbolCount:function(t){var e=0;if(t<0)return e;t>this.subSymbols.length-1&&(t=this.subSymbols.length-1);for(var i=0;i<=t;i++)e+=this.subSymbols[t].totalNum;return e},_calculateBounds:function(){this.bounds=new L.LatLngBounds;for(var t in this.components)this.components[t].symbolType===SuperMap.Plot.SymbolType.DOTSYMBOL&&this.bounds.extend(this.components[t].getBoundsWithText());return this.bounds},_parseSymbolData:function(){o.GroupObject.prototype._parseSymbolData.call(this),this.symbolData&&(this.colNum=this.symbolData.colNum,this.speceDis=this.symbolData.speceDis,this.subSymbols=this.symbolData.subSymbols)},_setSymbolData:function(){o.GroupObject.prototype._setSymbolData.call(this),this.symbolData&&(this.symbolData.colNum=this.colNum,this.symbolData.speceDis=this.speceDis,this.symbolData.subSymbols=this.subSymbols)}}),s=e.navyDeployment=function(t,e,i,o){return new n(t,e,i,o)};L.supermap.plotting.navyDeployment=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.pathText=e.PathText=void 0;var o=i(1),n=e.PathText=o.AlgoSymbol.extend({relLineText:0,showPathLine:!0,showPathLineArrow:!1,isCurve:!1,isAvoid:!1,textToLineDistance:0,getRelLineText:function(){return this.relLineText},setRelLineText:function(t){this.relLineText!==t&&(this.relLineText=t,this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues))},getShowPathLine:function(){return this.showPathLine},setShowPathLine:function(t){this.showPathLine!==t&&(this.showPathLine=t,this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues))},getShowPathLineArrow:function(){return this.showPathLineArrow},setShowPathLineArrow:function(t){this.showPathLineArrow!==t&&(this.showPathLineArrow=t,this.showPathLine&&(this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues)))},getIsCurveLine:function(){return this.isCurve},setCurveLine:function(t){this.isCurve!==t&&(this.isCurve=t,this.showPathLine&&(this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues)))},getIsAvoidLine:function(){return this.isAvoid},setAvoidLine:function(t){this.isAvoid!==t&&(this.isAvoid=t,this.relLineText===SuperMap.Plot.RelLineText.ONLINE&&this.showPathLine&&(this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues)))},getSpace:function(){return this.textToLineDistance},setSpace:function(t){this.textToLineDistance!==t&&(this.textToLineDistance=t,this.relLineText!==SuperMap.Plot.RelLineText.ONLINE&&(this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues)))},initialize:function(t,e,i,n){this.code=SuperMap.Plot.SymbolType.PATHTEXT,this.libID=0,this.symbolType=SuperMap.Plot.SymbolType.PATHTEXT,this.symbolName="沿线注记",this.minEditPts=2,this.maxEditPts=9999,o.AlgoSymbol.prototype.initialize.call(this,t,e,i,n)},_parseSymbolData:function(){o.AlgoSymbol.prototype._parseSymbolData.call(this),this.symbolData&&(this.symbolData.hasOwnProperty("isAvoid")&&(this.isAvoid=this.symbolData.isAvoid),this.symbolData.hasOwnProperty("isCurve")&&(this.isCurve=this.symbolData.isCurve),this.symbolData.hasOwnProperty("relLineText")&&(this.relLineText=this.symbolData.relLineText),this.symbolData.hasOwnProperty("showPathLine")&&(this.showPathLine=this.symbolData.showPathLine),this.symbolData.hasOwnProperty("textToLineDistance")&&(this.textToLineDistance=this.symbolData.textToLineDistance),this.symbolData.hasOwnProperty("showPathLineArrow")&&(this.showPathLineArrow=this.symbolData.showPathLineArrow))},_setSymbolData:function(){o.AlgoSymbol.prototype._setSymbolData.call(this),this.symbolData&&(this.symbolData.isAvoid=this.isAvoid,this.symbolData.isCurve=this.isCurve,this.symbolData.relLineText=this.relLineText,this.symbolData.showPathLine=this.showPathLine,this.symbolData.textToLineDistance=this.textToLineDistance,this.symbolData.showPathLineArrow=this.showPathLineArrow)},_reView:function(){this.fromZoom!==this._map.getZoom()&&(this.redraw(),this.fromZoom=this._map.getZoom())},_setDefaultOptions:function(t){o.AlgoSymbol.prototype._setDefaultOptions.call(this,t),t.relLineText=this.relLineText,t.showPathLine=this.showPathLine,t.showPathLineArrow=this.showPathLineArrow,t.isCurve=this.isCurve,t.isAvoid=this.isAvoid,t.textToLineDistance=this.textToLineDistance},_sendDataToAlgo:function(){o.AlgoSymbol.prototype._sendDataToAlgo.call(this),this.superMapAlgoSymbol.relLineText=this.relLineText,this.superMapAlgoSymbol.showPathLine=this.showPathLine,this.superMapAlgoSymbol.showPathLineArrow=this.showPathLineArrow,this.superMapAlgoSymbol.isCurve=this.isCurve,this.superMapAlgoSymbol.isAvoid=this.isAvoid,this.superMapAlgoSymbol.textToLineDistance=this.textToLineDistance,this.superMapAlgoSymbol.style=this.style}}),s=e.pathText=function(t,e,i,o){return new n(t,e,i,o)};L.supermap.plotting.pathText=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=e.PointImage=L.Path.extend({options:{externalGraphic:"",graphicWidth:0,graphicHeight:0,graphicOpacity:1,graphicXOffset:void 0,graphicYOffset:void 0,rotation:0,graphicTitle:"",interactive:!0},_imageNode:null,initialize:function(t,e){L.setOptions(this,e),this._latlng=L.latLng(t[0])},onRemove:function(){this._imageNode&&this._imageNode.parentNode&&(this._renderer._rootGroup.removeChild(this._imageNode),delete this._imageNode,this._imageNode=null),this._imageNode&&(delete this._imageNode,this._imageNode=null),L.Path.prototype.onRemove.call(this)},setLatLngs:function(t){return this._latlng=L.latLng(t[0]),this.redraw(),this.fire("move",{latlng:this._latlng})},getLatLngs:function(){return[this._latlng]},getBounds:function(){return this._updateBounds()},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},getPxBounds:function(){var t=void 0!=this.options.graphicXOffset?this.options.graphicXOffset:-.5*this.options.graphicWidth,e=void 0!=this.options.graphicYOffset?this.options.graphicYOffset:-.5*this.options.graphicHeight,i=this._point.x+t,o=this._point.y+e,n=i+this.options.graphicWidth,s=o+this.options.graphicHeight,a=new L.Bounds;if(this.options.rotation&&0!==this.options.rotation){var l=[];l.push(L.point(i,o)),l.push(L.point(i,s)),l.push(L.point(n,o)),l.push(L.point(n,s));for(var r=this.options.rotation*(Math.PI/180),u=0;u<l.length;u++)SuperMap.Plot.PlottingUtil.rotateAngle(this._point,r,l[u]),a.extend(l[u])}else a=L.bounds(L.point(i,o),L.point(n,s));return a},_updateBounds:function(){this._pxBounds=this.getPxBounds();var t=this._map.layerPointToLatLng(this._pxBounds.min),e=this._map.layerPointToLatLng(this._pxBounds.max);this._bounds=L.latLngBounds(t,e)},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateImage(this)},_empty:function(){return this.options.externalGraphic&&!this._renderer._bounds.intersects(this._pxBounds)}});L.supermap.plotting.pointImage=function(t,e){return new o(t,e)},L.supermap.plotting.PointImage=o},function(t,e,i){"use strict";SuperMap.Plot.GOAnimationType={ANIMATION_UNKNOWN:-1,ANIMATION_WAY:0,ANIMATION_BLINK:1,ANIMATION_ATTRIBUTE:2,ANIMATION_SHOW:3,ANIMATION_ROTATE:4,ANIMATION_SCALE:5,ANIMATION_GROW:6},SuperMap.Plot.BlinkAnimationBlinkStyle={Blink_Frequency:0,Blink_Number:1},SuperMap.Plot.BlinkAnimationReplaceStyle={Replace_NoColor:0,Replace_Color:1},SuperMap.Plot.RotateDirection={ClockWise:0,AntiClockWise:1},SuperMap.Plot.WayPathType={POLYLINE:0,CURVE:1},SuperMap.Plot.GOAnimationState={UNKNOWN:0,PLAYING:1,PAUSE:2,STOP:3,RESET:4}},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),l=function t(e,i,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,i);if(void 0===n){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,i,o)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(o)},r=function(t){function e(t,i){o(this,e);var s=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));return s.CLASS_NAME="SuperMap.PlotCommonServiceBase",s}return s(e,SuperMap.CommonServiceBase),a(e,[{key:"destroy",value:function(){l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).call(this)}},{key:"_commit",value:function(t){"POST"!==t.method&&"PUT"!==t.method||(t.params&&(t.url=SuperMap.Util.urlAppend(t.url,SuperMap.Util.getParameterString(t.params||{}))),t.params=t.data),SuperMap.FetchRequest.commit(t.method,t.url,t.params,{headers:t.headers,withCredentials:t.withCredentials,timeout:t.async?0:null,proxy:t.proxy}).then(function(t){return t.text()}).then(function(e){var i=(new SuperMap.Format.JSON).read(e);i||(i={error:e}),i.error?(t.scope?SuperMap.Function.bind(t.failure,t.scope):t.failure)(i.error):(i.succeed=void 0==i.succeed||i.succeed,(t.scope?SuperMap.Function.bind(t.success,t.scope):t.success)(i))})}}]),e}();e.default=r,SuperMap.PlotCommonServiceBase=r},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=function(){function t(e,i,n,s,a){o(this,t),this.x=null,this.y=null,this.z=null,this.number=null,this.time=null,this.CLASS_NAME="SuperMap.Plot.OrbitPoint",this.x=parseFloat(e),this.y=parseFloat(i),(n||0==n)&&(this.z=parseFloat(n)),s&&(this.number=s),a&&(this.time=a)}return n(t,[{key:"destroy",value:function(){this.x=null,this.y=null,this.z=null,this.index=null,this.time=null}},{key:"clone",value:function(t){return null==t&&(t=new SuperMap.Plot.OrbitPoint(this.x,this.y,this.z)),SuperMap.Util.applyDefaults(t,this),t}}]),t}();e.default=s,SuperMap.Plot.OrbitPoint=s},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=function(){function t(e){o(this,t),this.id=null,this.x=null,this.y=null,this.z=null,this.type=null,this.name=null,this.rotate=0,this.towardNodes=null,this.style=null,this.CLASS_NAME="SuperMap.Plot.RouteNode",SuperMap.Util.extend(this,e),null===this.id&&(this.id=SuperMap.PlotUtil.generateUuid()),null===this.rotate&&(this.rotate=0),null===this.towardNodes&&(this.towardNodes=[]),null===this.style&&(this.style={})}return n(t,[{key:"destroy",value:function(){this.type=null,this.position=null,this.name=null,this.id=null,this.rotate=null,this.towardNodes&&null!==this.towardNodes||(this.towardNodes=null);for(var t=0;t<this.towardNodes.length;t++)this.towardNodes[t].destroy();this.towardNodes=null}},{key:"clone",value:function(){var e=new t({id:this.id,type:this.type,name:this.name,rotate:this.rotate,towardNodes:this.towardNodes});return e.positionPoint=this.positionPoint.clone(),e.style={},e.style=SuperMap.Util.copyAttributes(e.style,this.style),e}}]),t}();e.default=s,SuperMap.Plot.RouteNode=s},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=(function(t){t&&t.__esModule}(i(11)),function(){function t(e,i,n){o(this,t),this.libID=null,this.code=null,this.symbolData=null,this.textContent=null,this.totalNum=null,this.CLASS_NAME="SuperMap.Plot.SubSymbol",e&&(this.libID=e),i&&(this.code=i),n&&SuperMap.Util.extend(this,n)}return n(t,[{key:"destroy",value:function(){this.libID=null,this.code=null,this.symbolData=null,this.totalNum=null}},{key:"clone",value:function(){var t=new SuperMap.Plot.SubSymbol(this.libID,this.code);return t.symbolData={},t.symbolData=SuperMap.Util.copyAttributes(t.symbolData,this.symbolData),t.textContent=this.textContent,t.totalNum=this.totalNum,t}}]),t}());e.default=s,SuperMap.Plot.SubSymbol=s},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=function(){function t(e,i,n,s){o(this,t),this.textContent=null,this.textPosition=null,this.offsetX=null,this.offsetY=null,this.style=null,this.CLASS_NAME="SuperMap.Plot.SymbolText",this.textContent=e,this.textPosition=i,this.style=n,s&&SuperMap.Util.extend(this,s),void 0!==this.textContent&&null!==this.textContent||(this.textContent=""),void 0!==this.textPosition&&null!==this.textPosition||(this.textPosition=0),null===this.offsetX&&(this.offsetX=0),null===this.offsetY&&(this.offsetY=0)}return n(t,[{key:"destroy",value:function(){this.textContent=null,this.textPosition=null,this.offsetX=null,this.offsetY=null}}]),t}();e.default=s,SuperMap.Plot.SymbolText=s},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=function(){function t(e,i){o(this,t),this.startOrbitPoint=null,this.endOrbitPoint=null,this.CLASS_NAME="SuperMap.Plot.TimeWindowParameter",this.startOrbitPoint=e,this.endOrbitPoint=i}return n(t,[{key:"destroy",value:function(){this.startOrbitPoint=null,this.endOrbitPoint=null,this.type=null}}]),t}();e.default=s,SuperMap.Plot.TimeWindowParameter=s},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=function(){function t(e){o(this,t),this.routeNodeId=null,this.relLineText=null,this.index=null,this.textContent=null,this.offsetX=null,this.offsetY=null,this.style={fontSize:12,fontFamily:"Microsoft YaHei"},this.CLASS_NAME="SuperMap.Plot.TowardNode",SuperMap.Util.extend(this,e),null===this.relLineText&&(this.relLineText=SuperMap.Plot.RelLineText.ONLEFTLINE),null===this.index&&(this.index=0)}return n(t,[{key:"destroy",value:function(){this.routeNodeId=null,this.relLineText=null,this.textContent=null,this.style=null}},{key:"clone",value:function(){return new t({routeNodeId:this.routeNodeId,relLineText:this.relLineText,textContent:this.textContent,style:SuperMap.Util.cloneObject(this.style)})}}]),t}();e.default=s,SuperMap.Plot.TowardNode=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.AnalysisSymbol=SuperMap.Plot.AnalysisSymbol=SuperMap.Plot.AnalysisSymbol||{};SuperMap.Plot.AnalysisSymbol.analysisSymbolCells=function(t){var e=[];if(t&&t.innerCells){var i=t.innerCells;if(0!==i.length)for(var o=0,n=i.length;o<n;o++)e.push(function(t){var e={};if(e.positionPoints=[],t){if(e.type=t.type,e.surroundLineFlag=t.surroundLineFlag,e.textContent=t.textContent,e.style=SuperMap.Plot.AnalysisSymbol.getStyle(t),null!==t.positionPoints)for(var i=t.positionPoints,o=0,n=i.length;o<n;o++){var s=new SuperMap.Geometry.Point(i[o].x,i[o].y);e.positionPoints.push(s)}if(e.style.lineColorLimit=t.lineColorLimit,e.style.lineTypeLimit=t.lineTypeLimit,e.style.lineWidthLimit=t.lineWidthLimit,e.style.fillLimit=t.fillLimit,e.style.fillColorLimit=t.fillColorLimit,e.style.fontColorLimit=t.fontColorLimit,e.style.surroundLineLimit=t.surroundLineLimit,e.style.surroundLineFlag=e.surroundLineFlag,34==t.type?e.style.fontColorLimit=!0:e.style.fontColorLimit=t.fontColorLimit,e.type===SuperMap.Plot.SymbolType.RECTANGLESYMBOL){var a=e.positionPoints[0],l=e.positionPoints[1],r=a.clone(),u=new SuperMap.Geometry.Point(l.x,a.y),p=l.clone(),h=new SuperMap.Geometry.Point(a.x,l.y);e.positionPoints=[],e.positionPoints.push(r),e.positionPoints.push(u),e.positionPoints.push(p),e.positionPoints.push(h),e.type=SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL}e.type===SuperMap.Plot.SymbolType.TEXTSYMBOL&&(e.style.fontSizeLimit=!0)}return e}(i[o]))}return e},SuperMap.Plot.AnalysisSymbol.getStyle=function(t){var e={};return 1===t.style.fillSymbolID?e.fill=!1:e.fill=!0,void 0!==t.style.fillGradientMode&&null!==t.style.fillGradientMode&&(1===t.style.fillGradientMode?e.fillGradientMode="LINEAR":2===t.style.fillGradientMode?e.fillGradientMode="RADIAL":"LINEAR"!==t.style.fillGradientMode&&"RADIAL"!==t.style.fillGradientMode&&(e.fillGradientMode="NONE")),void 0!==t.style.fillForeColor&&(e.fillColor=SuperMap.PlotUtil.colorRGBToString(t.style.fillForeColor),e.fillOpacity=(t.style.fillForeColor.alpha/255).toFixed(2)),void 0!==t.style.fillBackColor&&(e.fillBackColor=SuperMap.PlotUtil.colorRGBToString(t.style.fillBackColor),e.fillBackOpacity=(t.style.fillBackColor.alpha/255).toFixed(2)),void 0!==t.style.lineColor&&(e.color=SuperMap.PlotUtil.colorRGBToString(t.style.lineColor),e.opacity=(t.style.lineColor.alpha/255).toFixed(2)),void 0!==t.style.lineWidth&&(e.weight=Math.ceil(96*t.style.lineWidth/25.4)),e.lineSymbolID=t.style.lineSymbolID,e.lineSymbolID||(e.dashArray=t.style.dashArray),t.textStyle2D&&null!==t.textStyle2D?(void 0!==t.textStyle2D.fontName&&(e.fontFamily=t.textStyle2D.fontName),void 0!==t.textStyle2D.fontHeight&&(e.fontSize=Math.round(2*t.textStyle2D.fontHeight)),void 0!==t.textStyle2D.foreColor&&(e.fontColor=SuperMap.PlotUtil.colorRGBToString(t.textStyle2D.foreColor)),void 0!==t.textStyle2D.align&&(e.labelAlign=SuperMap.PlotUtil.getAlign(t.textStyle2D.align)),void 0!==t.textStyle2D.rotation&&(e.labelRotation=-t.textStyle2D.rotation),e.labelXOffset=0,e.labelYOffset=0):t.textStyle&&null!==t.textStyle&&(void 0!==t.textStyle.fontName&&(e.fontFamily=t.textStyle.fontName),void 0!==t.textStyle.fontHeight&&(e.fontSize=t.textStyle.fontHeight),void 0!==t.textStyle.foreColor&&(e.fontColor=SuperMap.PlotUtil.colorRGBToString(t.textStyle.foreColor)),void 0!==t.textStyle.align&&(e.labelAlign=SuperMap.PlotUtil.getAlign(t.textStyle.align)),void 0!==t.textStyle.rotation&&(e.labelRotation=-t.textStyle.rotation),e.labelXOffset=0,e.labelYOffset=0),void 0!==t.style.fontOpacity&&(e.fontOpacity=t.style.fontOpacity),void 0!==t.style.fontStroke?e.fontStroke=t.style.fontStroke:t.textStyle2D&&void 0!==t.textStyle2D.outline&&(e.fontStroke=t.textStyle2D.outline),void 0!==t.style.fontStrokeColor?e.fontStrokeColor=t.style.fontStrokeColor:t.textStyle2D&&void 0!==t.textStyle2D.backColor&&t.textStyle2D&&null!==t.textStyle2D.backColor&&(e.fontStrokeColor=SuperMap.PlotUtil.colorRGBToString(t.textStyle2D.backColor)),void 0!==t.style.fontStrokeWidth&&(e.fontStrokeWidth=t.style.fontStrokeWidth),void 0!==t.style.fontBackground&&(e.fontBackground=t.style.fontBackground),void 0!==t.style.fontBackgroundColor&&(e.fontBackgroundColor=t.style.fontBackgroundColor),void 0!==t.style.fontShadow&&(e.fontShadow=t.style.fontShadow),void 0!==t.style.fontShadowColor&&(e.fontShadowColor=t.style.fontShadowColor),void 0!==t.style.fontShadowOffsetX&&(e.fontShadowOffsetX=t.style.fontShadowOffsetX),void 0!==t.style.fontShadowOffsetY&&(e.fontShadowOffsetY=t.style.fontShadowOffsetY),void 0!==t.style.fontSpace&&(e.fontSpace=t.style.fontSpace),void 0!==t.style.fontPercent&&(e.fontPercent=t.style.fontPercent),void 0!==t.style.fontWeight&&(e.fontWeight=t.style.fontWeight),void 0!==t.style.fontStyle&&(e.fontStyle=t.style.fontStyle),void 0!==t.surroundLineColor&&null!==t.surroundLineColor&&(e.surroundLineColor=SuperMap.PlotUtil.colorRGBToString(t.surroundLineColor),e.surroundLineColorOpacity=(t.surroundLineColor.alpha/255).toFixed(2)),void 0!==t.surroundLineWidth2D&&null!==t.surroundLineWidth2D?e.surroundLineWidth=Math.round(96*t.surroundLineWidth2D/25.4):void 0!==t.surroundLineWidth&&null!==t.surroundLineWidth&&(e.surroundLineWidth=Math.round(96*t.surroundLineWidth/25.4)),!1===t.visibility?e.display="none":e.display="display",e},SuperMap.Plot.AnalysisSymbol.setStyle=function(t,e){if(null!==e)return e.style||(e.style={}),e.textStyle2D||(e.textStyle2D={}),!1===t.fill?e.style.fillSymbolID=1:e.style.fillSymbolID=0,t.fillGradientMode&&(e.style.fillGradientMode=t.fillGradientMode),t.fillGradientMode&&("LINEAR"===t.fillGradientMode?e.style.fillGradientMode=1:"RADIAL"===t.fillGradientMode?e.style.fillGradientMode=2:e.style.fillGradientMode=0),t.fillColor&&(e.style.fillForeColor=SuperMap.PlotUtil.colorStringToRGB(t.fillColor)),t.fillOpacity&&(e.style.fillForeColor.alpha=255*t.fillOpacity),t.fillBackColor&&(e.style.fillBackColor=SuperMap.PlotUtil.colorStringToRGB(t.fillBackColor)),t.fillBackOpacity&&(e.style.fillBackColor.alpha=255*t.fillBackOpacity),t.color&&(e.style.lineColor=SuperMap.PlotUtil.colorStringToRGB(t.color)),t.opacity&&(e.style.lineColor.alpha=255*t.opacity),t.weight&&(e.style.lineWidth=25.4*t.weight/96),e.style.lineSymbolID=t.lineSymbolID,e.style.lineSymbolID||(e.style.dashArray=t.dashArray),t.fontFamily&&(e.textStyle2D&&null!=e.textStyle2D?e.textStyle2D.fontName=t.fontFamily:e.textStyle&&null!=e.textStyle&&(e.textStyle.fontName=t.fontFamily)),t.fontSize&&(e.textStyle2D&&null!=e.textStyle2D?e.textStyle2D.fontHeight=parseFloat(t.fontSize)/2:e.textStyle&&null!=e.textStyle&&(e.textStyle.fontHeight=t.fontSize)),t.fontColor&&(e.textStyle2D&&null!=e.textStyle2D?e.textStyle2D.foreColor=SuperMap.PlotUtil.colorStringToRGB(t.fontColor):e.textStyle&&null!=e.textStyle&&(e.textStyle.foreColor=SuperMap.PlotUtil.colorStringToRGB(t.fontColor))),t.labelRotation&&(e.textStyle2D&&null!=e.textStyle2D?e.textStyle2D.rotation=-t.labelRotation:e.textStyle&&null!=e.textStyle&&(e.textStyle.rotation=-t.labelRotation)),void 0!==t.fontOpacity&&(e.style.fontOpacity=t.fontOpacity),void 0!==t.fontStroke&&(e.textStyle2D.outline=t.fontStroke),void 0!==t.fontStrokeColor&&(e.textStyle2D.backColor=SuperMap.PlotUtil.colorStringToRGB(t.fontStrokeColor)),void 0!==t.fontStrokeWidth&&(e.style.fontStrokeWidth=t.fontStrokeWidth),void 0!==t.fontBackground&&(e.style.fontBackground=t.fontBackground),void 0!==t.fontBackgroundColor&&(e.style.fontBackgroundColor=t.fontBackgroundColor),void 0!==t.fontShadow&&(e.style.fontShadow=t.fontShadow),void 0!==t.fontShadowColor&&(e.style.fontShadowColor=t.fontShadowColor),void 0!==t.fontShadowOffsetX&&(e.style.fontShadowOffsetX=t.fontShadowOffsetX),void 0!==t.fontShadowOffsetY&&(e.style.fontShadowOffsetY=t.fontShadowOffsetY),void 0!==t.fontSpace&&(e.style.fontSpace=t.fontSpace),void 0!==t.fontPercent&&(e.style.fontPercent=t.fontPercent),void 0!==t.fontWeight&&(e.style.fontWeight=t.fontWeight),void 0!==t.fontStyle&&(e.style.fontStyle=t.fontStyle),t.surroundLineColor&&(e.surroundLineColor=SuperMap.PlotUtil.colorStringToRGB(t.surroundLineColor)),t.surroundLineColorOpacity&&(e.surroundLineColor.alpha=255*t.surroundLineColorOpacity),t.surroundLineWidth&&(e.surroundLineWidth2D=25.4*t.surroundLineWidth/96),void 0!==t.labelAlign&&("lt"===t.labelAlign?e.textStyle2D&&null!=e.textStyle2D?e.textStyle2D.align="TOPLEFT":e.textStyle&&null!=e.textStyle&&(e.textStyle.align="TOPLEFT"):"ct"===t.labelAlign?e.textStyle2D&&null!=e.textStyle2D?e.textStyle2D.align="TOPCENTER":e.textStyle&&null!=e.textStyle&&(e.textStyle.align="TOPCENTER"):"rt"===t.labelAlign?e.textStyle2D&&null!=e.textStyle2D?e.textStyle2D.align="TOPRIGHT":e.textStyle&&null!=e.textStyle&&(e.textStyle.align="TOPRIGHT"):"lb"===t.labelAlign?e.textStyle2D&&null!=e.textStyle2D?e.textStyle2D.align="BOTTOMLEFT":e.textStyle&&null!=e.textStyle&&(e.textStyle.align="BOTTOMLEFT"):"cb"===t.labelAlign?e.textStyle2D&&null!=e.textStyle2D?e.textStyle2D.align="BOTTOMCENTER":e.textStyle&&null!=e.textStyle&&(e.textStyle.align="BOTTOMCENTER"):"rb"===t.labelAlign?e.textStyle2D&&null!=e.textStyle2D?e.textStyle2D.align="BOTTOMRIGHT":e.textStyle&&null!=e.textStyle&&(e.textStyle.align="BOTTOMRIGHT"):"lm"===t.labelAlign?e.textStyle2D&&null!=e.textStyle2D?e.textStyle2D.align="MIDDLELEFT":e.textStyle&&null!=e.textStyle&&(e.textStyle.align="MIDDLELEFT"):"cm"===t.labelAlign?e.textStyle2D&&null!=e.textStyle2D?e.textStyle2D.align="MIDDLECENTER":e.textStyle&&null!=e.textStyle&&(e.textStyle.align="MIDDLECENTER"):"rm"===t.labelAlign&&(e.textStyle2D&&null!=e.textStyle2D?e.textStyle2D.align="MIDDLERIGHT":e.textStyle&&null!=e.textStyle&&(e.textStyle.align="MIDDLERIGHT"))),t.display&&"none"===t.display?e.visibility=!1:e.visibility=!0,t},SuperMap.Plot.AnalysisSymbol.mergeDefaultStyleToLayer=function(t){var e=L.supermap.plotting.getControl().getDefaultStyle(),i=t.style;e&&!0===e.defaultFlag&&!1===t.isEdit&&(i.color=e.lineColor,i.weight=e.lineWidth,i.opacity=e.lineOpacity,0===parseInt(e.lineType)||1===parseInt(e.lineType)||2===parseInt(e.lineType)||3===parseInt(e.lineType)||4===parseInt(e.lineType)?i.lineSymbolID=parseInt(e.lineType):i.dashArray=e.lineType.toString(),i.strokeLinecap=e.lineCap,i.fill=e.fill,i.fillColor=e.fillColor,i.fillOpacity=e.fillOpacity,i.fontColor=e.fontColor,i.fontOpacity=e.fontOpacity,i.fontSize=e.fontSize,i.fontFamily=e.fontFamily,i.fontWeight=e.fontWeight,i.fontStyle=e.fontStyle,i.fontStroke=e.fontStroke,i.fontStrokeColor=e.fontStrokeColor,i.fontStrokeWidth=e.fontStrokeWidth,i.fontBackground=e.fontBackground,i.fontBackgroundColor=e.fontBackgroundColor,i.fontShadow=e.fontShadow,i.fontShadowColor=e.fontShadowColor,i.fontShadowOffsetX=e.fontShadowOffsetX,i.fontShadowOffsetY=e.fontShadowOffsetY,i.fontSpace=e.fontSpace,i.fontPercent=e.fontPercent)},SuperMap.Plot.AnalysisSymbol.mergeSymbolDataAndServerData=function(t,e){t.hasOwnProperty("algoMinEditPts")||(t.algoMinEditPts=e.algoMinEditPts),t.hasOwnProperty("algoMaxEditPts")||(t.algoMaxEditPts=e.algoMaxEditPts),t.hasOwnProperty("innerCells")||(t.innerCells=SuperMap.Util.cloneObject(e.innerCells)),t.hasOwnProperty("symbolRanks")||(t.symbolRanks=SuperMap.Util.cloneObject(e.symbolRanks)),t.hasOwnProperty("symbolSizeInLib")||(t.symbolSizeInLib=SuperMap.Util.cloneObject(e.symbolSize)),t.hasOwnProperty("middleMarkExist")||(t.middleMarkExist=SuperMap.Util.cloneObject(e.middleMarkExist)),t.hasOwnProperty("middleMarkBounds")||(t.middleMarkBounds=SuperMap.Util.cloneObject(e.middleMarkBounds)),t.hasOwnProperty("anchorPoint")||(t.anchorPoint=SuperMap.Util.cloneObject(e.anchorPoint))},t.exports=SuperMap.Plot.AnalysisSymbol},function(t,e,i){"use strict";SuperMap.Plot.Event=SuperMap.Plot.Event||{},SuperMap.Plot.Event.beforefeatureadded="beforefeatureadded",SuperMap.Plot.Event.featureadded="featureadded",SuperMap.Plot.Event.beforefeaturesselected="beforefeaturesselected",SuperMap.Plot.Event.featuresselected="featuresselected",SuperMap.Plot.Event.beforefeaturesunselected="beforefeaturesunselected",SuperMap.Plot.Event.featuresunselected="featuresunselected",SuperMap.Plot.Event.beforefeaturesmodified="beforefeaturesmodified",SuperMap.Plot.Event.featuresmodified="featuresmodified",SuperMap.Plot.Event.initializecompleted="initializecompleted",SuperMap.Plot.Event.cachecompleted="cachecompleted",SuperMap.Plot.Event.reseteditmarkersvalues="reseteditmarkersvalues",SuperMap.Plot.Event.reseteditmarkers="reseteditmarkers"},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.Primitives=SuperMap.Plot.Primitives=SuperMap.Plot.Primitives||{};SuperMap.Plot.Primitives={nSegmentCount:72,initialize:function(t){},polyline:function(t){return t},parallelline:function(t){if(t&&t.length>=3){var e=SuperMap.Plot.PlottingUtil.distance(t[0],t[1]);SuperMap.Plot.PlottingUtil.isRight(t[0],t[1],t[2])&&(e=-e);for(var i=[],o=1;o<t.length;o++)i.push(t[o].clone());var n=SuperMap.Plot.PlottingUtil.parallel(i,e);return t[0].x=n[0].x,t[0].y=n[0].y,[i,n]}return[]},kidney:function(t,e){if(t){return e?this.getKendyShapePts(t):t}},bezier:function(t,e){if(t){var i=[];return i=e?SuperMap.Plot.PlottingUtil.generateBeizerPointsNoCtrlPt(t):t,SuperMap.Plot.PlottingUtil.clearSamePts(i),i}},loopbezier:function(t,e){if(t){t[0].x===t[t.length-1].x&&t[0].y===t[t.length-1].y||t.push(t[0]);var i=[];return i=e?SuperMap.Plot.PlottingUtil.generateBeizerPointsNoCtrlPt(t):t,SuperMap.Plot.PlottingUtil.clearSamePts(i),i}},parallelogram:function(t){if(t&&t.length>=3){var e=t[0].x+(t[2].x-t[1].x),i=t[0].y+(t[2].y-t[1].y),o=new SuperMap.Geometry.Point(e,i),n=[];return n.push.apply(n,t),n.push(o),n.push(n[0]),n}},polygon:function(t){if(t&&t.length>2)return t},circle:function(t){if(t&&2===t.length){for(var e=t[0],i=t[1],o=[],n=Math.sqrt((i.x-e.x)*(i.x-e.x)+(i.y-e.y)*(i.y-e.y)),s=360/this.nSegmentCount,a=0;a<this.nSegmentCount;a++){var l=(a*s+1)*Math.PI/180,r=new SuperMap.Geometry.Point(Math.cos(l)*n+e.x,Math.sin(l)*n+e.y);o[a]=r}return o}},rectangle:function(t,e,i,o){if(t&&2===t.length){var n=t[0],s=t[1],a=n.clone();return[a,new SuperMap.Geometry.Point(s.x,n.y),s.clone(),new SuperMap.Geometry.Point(n.x,s.y),a]}},sector:function(t){if(t&&t.length>=3){var e=this.getArcInfo(t[0],t[1],t[2]);e.dStartAngle*=Math.PI/180,e.dEndAngle*=Math.PI/180;var i=(e.dEndAngle-e.dStartAngle)/this.nSegmentCount,o=this.getArcSpatialData(e.pntCenter,e.dRadius,e.dRadius,0,e.dStartAngle,e.dEndAngle,i);if(o.push(e.pntCenter),0!==o.length)return o}},lune:function(t){if(t&&t.length>=3){var e=this.getArcInfo(t[0],t[1],t[2]);e.dStartAngle*=Math.PI/180,e.dEndAngle*=Math.PI/180;var i=(e.dEndAngle-e.dStartAngle)/this.nSegmentCount,o=this.getArcSpatialData(e.pntCenter,e.dRadius,e.dRadius,0,e.dStartAngle,e.dEndAngle,i);if(0!==o.length)return o}},arc:function(t){if(t&&t.length>=3){var e=this.getArcInfo(t[0],t[1],t[2]);e.dStartAngle*=Math.PI/180,e.dEndAngle*=Math.PI/180;var i=(e.dEndAngle-e.dStartAngle)/this.nSegmentCount,o=this.getArcSpatialData(e.pntCenter,e.dRadius,e.dRadius,0,e.dStartAngle,e.dEndAngle,i);if(0!==o.length)return o}},ellipse:function(t,e,i,o,n){if(!0===i){if((!o||null===o)&&t&&t.length>=3&&(o=SuperMap.Plot.PlottingUtil.distance(t[0],t[1])),(!n||null===n)&&t&&t.length>=3){var s=SuperMap.Plot.PlottingUtil.projectPoint(t[2],t[0],t[1]);n=SuperMap.Plot.PlottingUtil.distance(s,t[2])}}else n=SuperMap.Plot.PlottingUtil.distance(t[0],t[2]),o=SuperMap.Plot.PlottingUtil.distance(t[0],t[1]);if(e&&null!==e?e*=Math.PI/180:e=SuperMap.Plot.PlottingUtil.radian(t[0],t[1]),t&&t.length>0){var a=2*Math.PI,l=a/this.nSegmentCount,r=this.getArcSpatialData(t[0],o,n,e,0,a,l);if(!0===i){var u=Math.sin(e),p=Math.cos(e);t[2].x>t[1].x?(t[2].x=t[0].x-n*u,t[2].y=t[0].y+n*p):(t[2].x=t[0].x+n*u,t[2].y=t[0].y-n*p)}return r}},getArcSpatialData:function(t,e,i,o,n,s,a){var l=[];if(Math.abs(a)<1e-9)return l;for(;s<n;)s+=2*Math.PI;for(;s>n+2*Math.PI;)n+=2*Math.PI;var r=Math.cos(o)*e,u=Math.sin(o)*e,p=Math.cos(o)*i,h=Math.sin(o)*i,c=this.calcEllipseRadian(n,e,i),y=this.calcEllipseRadian(s,e,i);y-c<1e-5&&(y+=2*Math.PI);var g=Math.round(Math.abs((y-c)/a)+1);if(g<2)return l;for(var d=0;d<g-1;c+=a,d++){d===g-2&&(c=s);var f=t.x+r*Math.cos(c)-h*Math.sin(c),S=t.y+u*Math.cos(c)+p*Math.sin(c);l.push(new SuperMap.Geometry.Point(f,S))}return 0>l.length&&(l[l.length-1].x=t.x+r*Math.cos(y)-h*Math.sin(y),l[l.length-1].y=t.y+u*Math.cos(y)+p*Math.sin(y)),l},getArcInfo:function(t,e,i){var o={};o.pntCenter=new SuperMap.Geometry.Point(0,0),o.dRadius=0,o.dStartAngle=0,o.dEndAngle=0;var n=e.x-t.x,s=e.y-t.y;if(Math.abs(n)<1e-9){r={};(l={}).x=(e.x+t.x)/2,l.y=(e.y+t.y)/2,r.x=(e.x+i.x)/2,r.y=(e.y+i.y)/2;var a=0;Math.abs(i.x-e.x)>=1e-9&&(a=(i.y-e.y)/(i.x-e.x)),o.pntCenter.y=l.y,Math.abs(a)<1e-9?o.pntCenter.x=r.x:o.pntCenter.x=r.x-a*(l.y-r.y)}else{var l={},r={};l.x=(e.x+t.x)/2,l.y=(e.y+t.y)/2,r.x=(e.x+i.x)/2,r.y=(e.y+i.y)/2;var u=s/n,p=1;Math.abs(u)<1e-9?(o.pntCenter.x=l.x,Math.abs(i.x-e.x<1e-9)?o.pntCenter.y=r.y:o.pntCenter.y=-(i.x-e.x)/(i.y-e.y)*(o.pntCenter.x-r.x)+r.y):Math.abs(i.x-e.x)<1e-9?(o.pntCenter.y=r.y,o.pntCenter.x=-u*(o.pntCenter.y-l.y)+l.x):(p=(i.y-e.y)/(i.x-e.x),o.pntCenter.x=(u*p*(l.y-r.y)+p*l.x-u*r.x)/(p-u),o.pntCenter.y=(r.x-l.x+p*r.y-u*l.y)/(p-u))}var h=Math.atan2(t.y-o.pntCenter.y,t.x-o.pntCenter.x),c=Math.atan2(i.y-o.pntCenter.y,i.x-o.pntCenter.x);if(SuperMap.Plot.PlottingUtil.isCounterClockwise(t,e,i)){for(;h>=2*Math.PI;)h-=2*Math.PI;for(;h<0;)h+=2*Math.PI;for(;c>2*Math.PI;)c-=2*Math.PI;for(;c<h;)c+=2*Math.PI}else{for(;c>=2*Math.PI;)c-=2*Math.PI;for(;c<0;)c+=2*Math.PI;for(;h>2*Math.PI;)h-=2*Math.PI;for(;c>h;)h+=2*Math.PI;var y=h;h=c,c=y}return o.dRadius=Math.sqrt((o.pntCenter.x-t.x)*(o.pntCenter.x-t.x)+(o.pntCenter.y-t.y)*(o.pntCenter.y-t.y)),o.dEndAngle=180*c/Math.PI,o.dStartAngle=180*h/Math.PI,o},calcEllipseRadian:function(t,e,i){var o=t,n=e*Math.sin(t),s=i*Math.cos(t),a=Math.atan2(n,s);if(t>Math.PI)for(;o>Math.PI;)o-=2*Math.PI,a+=2*Math.PI;else if(t<-Math.PI)for(;o<-Math.PI;)o+=2*Math.PI,a-=2*Math.PI;return a},getKendyShapePts:function(t){var e=[];if(2>(t=SuperMap.Plot.PlottingUtil.clearSamePts(t)).length)return e;var i=this.calcShapePoints(t);if(12!=i.length)return e;i.push(i[0]),i.push(i[1]),i.splice(0,1);for(var o=0;o<i.length-3;o+=3){var n=[];n=this.getBezierPtsWithScalePts(i[o],i[o+1],i[o+2],i[o+3]),e=e.concat(n)}return e},calcShapePoints:function(t){var e=[],i=[],o=t.length;if(0!==o){if(1!==o){if(2==o){var n=this.calcProtudeC3(t[0],t[1]);i.push(t[0]),i.push(t[1]),i.push(n)}else if(i.push(t[0]),i.push(t[1]),i.push(t[2]),(SuperMap.Plot.PlottingUtil.isSamePt(t[0],t[2])||SuperMap.Plot.PlottingUtil.isSamePt(t[1],t[2]))&&(e.push(t[0]),e.push(t[1])),SuperMap.Plot.PlottingUtil.isSamePt(t[0],t[1]))return e.push(t[0]),void e.push(t[2]);i=this.reNormalizeKidneyCtrlPoints(i);var s=new SuperMap.Geometry.Point(0,0),a=new SuperMap.Geometry.Point(0,0);s.x=.5*(i[0].x+i[1].x),s.y=.5*(i[0].y+i[1].y),a.x=s.x-.1*(i[2].x-s.x),a.y=s.y-.1*(i[2].y-s.y);var l=this.GetPtsByTriangle(3,0,i[1],i[0],a);e.push(l.pr),e.push(a),e.push(l.pl);var r=this.GetPtsByTriangle(4,2,i[2],i[0],i[1]);e.push(r.pr),e.push(i[1]),e.push(r.pl);var u=this.GetPtsByTriangle(2,0,i[0],i[1],i[2]);e.push(u.pr),e.push(i[2]),e.push(u.pl);var p=this.GetPtsByTriangle(4,1,i[1],i[2],i[0]);return e.push(p.pr),e.push(i[0]),e.push(p.pl),e}e.push(t[0])}},calcProtudeC3:function(t,e){var i=new SuperMap.Geometry.Point(0,0),o=0;return i.x=.5*(t.x+e.x),i.y=.5*(t.y+e.y),o=SuperMap.Plot.PlottingUtil.distance(e,t)/2.7,this.GetPointsOfNormal(o,t,i).pt3},GetPointsOfNormal:function(t,e,i){var o=new SuperMap.Geometry.Point(0,0),n=new SuperMap.Geometry.Point(0,0),s=new SuperMap.Geometry.Point(0,0),a=0;return 0==(a=SuperMap.Plot.PlottingUtil.distance(e,i))?(s.y=0,s.x=t):(s.x=t*(e.x-i.x)/a,s.y=t*(e.y-i.y)/a),o.x=-s.y+i.x,o.y=s.x+i.y,n.x=s.y+i.x,n.y=-s.x+i.y,{pt3:o,pt4:n}},reNormalizeKidneyCtrlPoints:function(t){var e=[];e.push(new SuperMap.Geometry.Point(0,0)),e.push(new SuperMap.Geometry.Point(0,0)),e.push(new SuperMap.Geometry.Point(0,0));var i=t.length;if(i<2);else if(2==i)e[0]=t[0],e[1]=t[1],e[2]=this.calcProtudeC3(t[0],t[1]);else{var o=t[0],n=t[1],s=t[2],a=0,l=0,r=0;if(a=SuperMap.Plot.PlottingUtil.distance(n,o),l=SuperMap.Plot.PlottingUtil.distance(s,n),r=SuperMap.Plot.PlottingUtil.distance(o,s),l>=a&&l>=r){u=o.clone();o=s.clone(),s=u.clone()}else if(r>=a&&r>=l){u=s.clone();s=n.clone(),n=u.clone()}if(!SuperMap.Plot.PlottingUtil.isRight(s,o,n)){var u=o.clone();o=n.clone(),n=u.clone()}e[0]=o,e[1]=n,e[2]=s}return e},GetPtsByTriangle:function(t,e,i,o,n){var s=new SuperMap.Geometry.Point(0,0),a=(new SuperMap.Geometry.Point(0,0),0),l=0;return a=SuperMap.Plot.PlottingUtil.distance(n,i),l=SuperMap.Plot.PlottingUtil.distance(o,n),1==e&&(a*=2),2==e&&(l*=2),s.x=(a*o.x+l*i.x)/(a+l),s.y=(a*o.y+l*i.y)/(a+l),{pl:this.GetWhichPtOfNormal(t,i,s,n),pr:this.GetWhichPtOfNormal(t,o,s,n)}},GetWhichPtOfNormal:function(t,e,i,o){new SuperMap.Geometry.Point(0,0),new SuperMap.Geometry.Point(0,0);var n=0,s=0;s=SuperMap.Plot.PlottingUtil.distance(o,e)/t;var a=this.GetPointsOfNormal(s,i,o);return n=SuperMap.Plot.PlottingUtil.distance(e,a.pt4),s=SuperMap.Plot.PlottingUtil.distance(e,a.pt3),n>=s?a.pt3:a.pt4},getBezierPtsWithScalePts:function(t,e,i,o){var n=[],s=t.x,a=t.y,l=e.x,r=e.y,u=i.x,p=i.y,h=o.x,c=o.y;if(SuperMap.Plot.PlottingUtil.equalFuzzy(s,l,1e-10)&&SuperMap.Plot.PlottingUtil.equalFuzzy(a,r,1e-10)&&SuperMap.Plot.PlottingUtil.equalFuzzy(u,h,1e-10)&&SuperMap.Plot.PlottingUtil.equalFuzzy(p,c,1e-10))n.push(new SuperMap.Geometry.Point(s,a)),n.push(new SuperMap.Geometry.Point(u,p));else for(var y=0;y<=1;y+=.03125){var g,d,f,S,P=y*y,m=P*y;g=1-3*y+3*P-m,d=3*(y-2*P+m),f=3*(P-m),S=m;var b=new SuperMap.Geometry.Point(g*s+d*l+f*u+S*h,g*a+d*r+f*p+S*c);n.push(b)}return n},getSpatialData:function(t,e,i,o){switch(void 0!==o&&null!==o||(o=!0),t){case 24:return this.polyline(e);case 390:return this.kidney(e,o);case 590:return this.bezier(e,o);case 360:return this.loopbezier(e,o);case 28:return this.parallelogram(e);case 32:return this.polygon(e);case 29:return this.circle(e);case 26:return this.rectangle(e);case 380:return this.sector(e);case 370:return this.lune(e);case 44:return this.arc(e);case 31:return this.ellipse(e,i,o);case 48:return this.parallelline(e);default:return e}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.RouteNodePrimitives=SuperMap.Plot.RouteNodePrimitives=SuperMap.Plot.RouteNodePrimitives||{};SuperMap.Plot.RouteNodePrimitives={initialize:function(t){},rendezvousPoint:function(){var t=[],e=new Object;e.type=SuperMap.Plot.SymbolType.CIRCLESYMBOL,e.positionPoints=[],e.positionPoints.push(new SuperMap.Geometry.Point(0,0)),e.positionPoints.push(new SuperMap.Geometry.Point(0,30)),e.style={surroundLineFlag:!1,fillLimit:!0,fill:!1};var i=new Object;return i.type=SuperMap.Plot.SymbolType.TEXTSYMBOL,i.positionPoints=[],i.positionPoints.push(new SuperMap.Geometry.Point(0,0)),i.textContent="会",i.style={surroundLineFlag:!1,fontSize:14,fontSizeLimit:!0},i.style.labelAlign="cm",t.push(i),t.push(e),t},expandingPoint:function(){var t=[],e=new Object;e.type=SuperMap.Plot.SymbolType.CIRCLESYMBOL,e.positionPoints=[],e.positionPoints.push(new SuperMap.Geometry.Point(0,0)),e.positionPoints.push(new SuperMap.Geometry.Point(0,30)),e.style={surroundLineFlag:!1,fillLimit:!0,fill:!1};var i=new Object;return i.type=SuperMap.Plot.SymbolType.TEXTSYMBOL,i.positionPoints=[],i.positionPoints.push(new SuperMap.Geometry.Point(0,0)),i.textContent="展",i.style={surroundLineFlag:!1,fontSize:14,fontSizeLimit:!0},i.style.labelAlign="cm",t.push(i),t.push(e),t},volleyPoint:function(){var t=[],e=new Object;e.type=SuperMap.Plot.SymbolType.CIRCLESYMBOL,e.positionPoints=[],e.positionPoints.push(new SuperMap.Geometry.Point(0,0)),e.positionPoints.push(new SuperMap.Geometry.Point(0,30)),e.style={surroundLineFlag:!1,fillLimit:!0,fill:!1};var i=new Object;return i.type=SuperMap.Plot.SymbolType.TEXTSYMBOL,i.positionPoints=[],i.positionPoints.push(new SuperMap.Geometry.Point(0,0)),i.textContent="齐",i.style={surroundLineFlag:!1,fontSize:14,fontSizeLimit:!0},i.style.labelAlign="cm",t.push(i),t.push(e),t},standbyPoint_Outer:function(t,e){var i=[],o=new SuperMap.Geometry.Point(0,0),n=new SuperMap.Geometry.Point(0,30);t||(t=90);var s=new Object;s.type=SuperMap.Plot.SymbolType.POLYLINESYMBOL,s.positionPoints=[];for(P=t+10;P<170+t;P+=10){c=SuperMap.Plot.PlottingUtil.findPoint(o,n,30,P);s.positionPoints.push(c)}s.style={surroundLineFlag:!1,fillLimit:!0,fill:!1},i.push(s);var a=s.positionPoints[s.positionPoints.length-1],l=s.positionPoints[s.positionPoints.length-2],r=SuperMap.Plot.PlottingUtil.findPoint(a,l,9,22.5),u=SuperMap.Plot.PlottingUtil.findPoint(a,l,9,-22.5),p=new Object;p.type=SuperMap.Plot.SymbolType.POLYLINESYMBOL,p.positionPoints=[],p.positionPoints.push(r),p.positionPoints.push(a.clone()),p.positionPoints.push(u),p.style={surroundLineFlag:!1,fillLimit:!0,fill:!1},i.push(p);var h=new Object;h.type=SuperMap.Plot.SymbolType.POLYLINESYMBOL,h.positionPoints=[];for(P=190+t;P<350+t;P+=10){var c=SuperMap.Plot.PlottingUtil.findPoint(o,n,30,P);h.positionPoints.push(c)}h.style={surroundLineFlag:!1,fillLimit:!0,fill:!1},i.push(h);var y=h.positionPoints[h.positionPoints.length-1],g=h.positionPoints[h.positionPoints.length-2],d=SuperMap.Plot.PlottingUtil.findPoint(y,g,9,22.5),f=SuperMap.Plot.PlottingUtil.findPoint(y,g,9,-22.5),S=new Object;S.type=SuperMap.Plot.SymbolType.POLYLINESYMBOL,S.positionPoints=[],S.positionPoints.push(d),S.positionPoints.push(y.clone()),S.positionPoints.push(f),S.style={surroundLineFlag:!1,fillLimit:!0,fill:!1},i.push(S);for(var P=0;P<i.length;P++)for(var m=0;m<i[P].positionPoints.length;m++){var b=e*(Math.PI/180);SuperMap.Plot.PlottingUtil.rotateAngle(o,b,i[P].positionPoints[m])}return i},standbyPoint_Inner:function(){var t=[],e=new Object;e.type=SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,e.positionPoints=[],e.positionPoints.push(new SuperMap.Geometry.Point(-20,0)),e.positionPoints.push(new SuperMap.Geometry.Point(20,10)),e.positionPoints.push(new SuperMap.Geometry.Point(20,-10)),e.style={surroundLineFlag:!1,fillLimit:!0,fill:!1},t.push(e);var i=new Object;i.type=SuperMap.Plot.SymbolType.POLYLINESYMBOL,i.positionPoints=[],i.positionPoints.push(new SuperMap.Geometry.Point(-5,0)),i.positionPoints.push(new SuperMap.Geometry.Point(17,0)),i.style={surroundLineFlag:!1,fillLimit:!0,fill:!1},t.push(i);var o=new Object;return o.type=SuperMap.Plot.SymbolType.POLYLINESYMBOL,o.positionPoints=[],o.positionPoints.push(new SuperMap.Geometry.Point(-2,1.5)),o.positionPoints.push(new SuperMap.Geometry.Point(-5,0)),o.positionPoints.push(new SuperMap.Geometry.Point(-2,-1.5)),o.style={surroundLineFlag:!1,fillLimit:!0,fill:!1},t.push(o),t},supplyPoint:function(){var t=[],e=new Object;e.type=SuperMap.Plot.SymbolType.CIRCLESYMBOL,e.positionPoints=[],e.positionPoints.push(new SuperMap.Geometry.Point(0,0)),e.positionPoints.push(new SuperMap.Geometry.Point(0,30)),e.style={surroundLineFlag:!1,fillLimit:!0,fill:!1};var i=new Object;return i.type=SuperMap.Plot.SymbolType.TEXTSYMBOL,i.positionPoints=[],i.positionPoints.push(new SuperMap.Geometry.Point(0,0)),i.textContent="补",i.style={surroundLineFlag:!1,fontSize:14,fontSizeLimit:!0},i.style.labelAlign="cm",t.push(i),t.push(e),t},takeoffPoint:function(){var t=[],e=new Object;return e.type=SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,e.positionPoints=[],e.positionPoints.push(new SuperMap.Geometry.Point(-15,25)),e.positionPoints.push(new SuperMap.Geometry.Point(15,25)),e.positionPoints.push(new SuperMap.Geometry.Point(15,-25)),e.positionPoints.push(new SuperMap.Geometry.Point(0,-35)),e.positionPoints.push(new SuperMap.Geometry.Point(-15,-25)),e.positionPoints.push(new SuperMap.Geometry.Point(-15,25)),e.style={surroundLineFlag:!1,fillLimit:!0,fill:!1},t.push(e),t},initialPoint:function(){var t=[],e=new Object;return e.type=SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,e.positionPoints=[],e.positionPoints.push(new SuperMap.Geometry.Point(-30,30)),e.positionPoints.push(new SuperMap.Geometry.Point(30,30)),e.positionPoints.push(new SuperMap.Geometry.Point(30,-30)),e.positionPoints.push(new SuperMap.Geometry.Point(-30,-30)),e.style={surroundLineFlag:!1,fillLimit:!0,fill:!1},t.push(e),t},visualInitalPoint:function(){var t=[],e=new Object;return e.type=SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,e.positionPoints=[],e.positionPoints.push(new SuperMap.Geometry.Point(0,30)),e.positionPoints.push(new SuperMap.Geometry.Point(30,0)),e.positionPoints.push(new SuperMap.Geometry.Point(0,-30)),e.positionPoints.push(new SuperMap.Geometry.Point(-30,0)),e.style={surroundLineFlag:!1,fillLimit:!0,fill:!1},t.push(e),t},lanchPoint:function(){var t=[],e=new Object;return e.type=SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,e.positionPoints=[],e.positionPoints.push(new SuperMap.Geometry.Point(0,30)),e.positionPoints.push(new SuperMap.Geometry.Point(20,-30)),e.positionPoints.push(new SuperMap.Geometry.Point(-20,-30)),e.style={surroundLineFlag:!1,fillLimit:!0,fill:!1},t.push(e),t},turningPoint:function(){var t=[],e=new Object;return e.type=SuperMap.Plot.SymbolType.CIRCLESYMBOL,e.positionPoints=[],e.positionPoints.push(new SuperMap.Geometry.Point(0,0)),e.positionPoints.push(new SuperMap.Geometry.Point(0,30)),e.style={surroundLineFlag:!1,fillLimit:!0,fill:!1},t.push(e),t},aimingPoint:function(){var t=[],e=new Object;return e.type=SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,e.positionPoints=[],e.positionPoints.push(new SuperMap.Geometry.Point(0,-30)),e.positionPoints.push(new SuperMap.Geometry.Point(20,30)),e.positionPoints.push(new SuperMap.Geometry.Point(-20,30)),e.style={surroundLineFlag:!1,fillLimit:!0,fill:!1},t.push(e),t},targetPoint:function(){var t=[],e=new Object;return e.type=SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,e.positionPoints=[],e.positionPoints.push(new SuperMap.Geometry.Point(0,30)),e.positionPoints.push(new SuperMap.Geometry.Point(30,-30)),e.positionPoints.push(new SuperMap.Geometry.Point(-30,-30)),e.style={surroundLineFlag:!1,fillLimit:!0,fill:!1},t.push(e),t},eightSpiralPoint:function(){var t=[],e=new Object;e.type=SuperMap.Plot.SymbolType.CIRCLESYMBOL,e.positionPoints=[],e.positionPoints.push(new SuperMap.Geometry.Point(30,0)),e.positionPoints.push(new SuperMap.Geometry.Point(0,0)),e.style={surroundLineFlag:!1,fillLimit:!0,fill:!1};var i=new Object;return i.type=SuperMap.Plot.SymbolType.CIRCLESYMBOL,i.positionPoints=[],i.positionPoints.push(new SuperMap.Geometry.Point(-30,0)),i.positionPoints.push(new SuperMap.Geometry.Point(0,0)),i.style={surroundLineFlag:!1,fillLimit:!0,fill:!1},t.push(e),t.push(i),t},happyValleyPoint:function(){var t=[],e=new Object;e.type=SuperMap.Plot.SymbolType.POLYLINESYMBOL,e.positionPoints=[],e.positionPoints.push(new SuperMap.Geometry.Point(-30,20)),e.positionPoints.push(new SuperMap.Geometry.Point(30,20)),e.style={surroundLineFlag:!1,fillLimit:!0,fill:!1};var i=new Object;i.type=SuperMap.Plot.SymbolType.POLYLINESYMBOL,i.positionPoints=[],i.positionPoints.push(new SuperMap.Geometry.Point(30,-20)),i.positionPoints.push(new SuperMap.Geometry.Point(-30,-20)),i.style={surroundLineFlag:!1,fillLimit:!0,fill:!1};var o=new Object;o.type=SuperMap.Plot.SymbolType.ARCSYMBOL,o.positionPoints=[],o.positionPoints.push(new SuperMap.Geometry.Point(-30,20)),o.positionPoints.push(new SuperMap.Geometry.Point(-50,0)),o.positionPoints.push(new SuperMap.Geometry.Point(-30,-20)),o.style={surroundLineFlag:!1,fillLimit:!0,fill:!1};var n=new Object;return n.type=SuperMap.Plot.SymbolType.ARCSYMBOL,n.positionPoints=[],n.positionPoints.push(new SuperMap.Geometry.Point(30,20)),n.positionPoints.push(new SuperMap.Geometry.Point(50,0)),n.positionPoints.push(new SuperMap.Geometry.Point(30,-20)),n.style={surroundLineFlag:!1,fillLimit:!0,fill:!1},t.push(e),t.push(i),t.push(o),t.push(n),t},attackPoint:function(){var t=[],e=new Object;e.type=SuperMap.Plot.SymbolType.CIRCLESYMBOL,e.positionPoints=[],e.positionPoints.push(new SuperMap.Geometry.Point(0,0)),e.positionPoints.push(new SuperMap.Geometry.Point(0,30)),e.style={surroundLineFlag:!1,fillLimit:!0,fill:!1};var i=new Object;return i.type=SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,i.positionPoints=[],i.positionPoints.push(new SuperMap.Geometry.Point(0,20)),i.positionPoints.push(new SuperMap.Geometry.Point(20,-20)),i.positionPoints.push(new SuperMap.Geometry.Point(-20,-20)),i.style={surroundLineFlag:!1,fillLimit:!0,fill:!1},t.push(i),t.push(e),t},suppressPoint:function(){var t=[],e=new Object;e.type=SuperMap.Plot.SymbolType.CIRCLESYMBOL,e.positionPoints=[],e.positionPoints.push(new SuperMap.Geometry.Point(0,0)),e.positionPoints.push(new SuperMap.Geometry.Point(0,30)),e.style={surroundLineFlag:!1,fontSize:14};var i=new Object;return i.type=SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,i.positionPoints=[],i.positionPoints.push(new SuperMap.Geometry.Point(-15,15)),i.positionPoints.push(new SuperMap.Geometry.Point(15,15)),i.positionPoints.push(new SuperMap.Geometry.Point(15,-15)),i.positionPoints.push(new SuperMap.Geometry.Point(-15,-15)),i.style={surroundLineFlag:!1,fillLimit:!0,fill:!1},t.push(i),t.push(e),t},getRouteNodeCells:function(t,e,i){switch(t){case SuperMap.Plot.RouteNodeType.RENDEZVOUS:return this.rendezvousPoint();case SuperMap.Plot.RouteNodeType.EXPANDING:return this.expandingPoint();case SuperMap.Plot.RouteNodeType.VOLLEY:return this.volleyPoint();case SuperMap.Plot.RouteNodeType.STANDBY:return e?this.standbyPoint_Inner():this.standbyPoint_Outer(null,i);case SuperMap.Plot.RouteNodeType.SUPPLY:return this.supplyPoint();case SuperMap.Plot.RouteNodeType.TAKEOFF:return this.takeoffPoint();case SuperMap.Plot.RouteNodeType.INITIAL:return this.initialPoint();case SuperMap.Plot.RouteNodeType.VISUALINITAL:return this.visualInitalPoint();case SuperMap.Plot.RouteNodeType.LANCH:case SuperMap.Plot.RouteNodeType.WEAPONLAUNCH:return this.lanchPoint();case SuperMap.Plot.RouteNodeType.TURNING:case SuperMap.Plot.RouteNodeType.COMMONROUTE:return this.turningPoint();case SuperMap.Plot.RouteNodeType.AIMING:return this.aimingPoint();case SuperMap.Plot.RouteNodeType.TARGET:return this.targetPoint();case SuperMap.Plot.RouteNodeType.ATTACK:return this.attackPoint();case SuperMap.Plot.RouteNodeType.SUPPRESS:return this.suppressPoint();case SuperMap.Plot.RouteNodeType.EIGHTSPIRAL:return this.eightSpiralPoint();case SuperMap.Plot.RouteNodeType.HAPPYVALLEY:return this.happyValleyPoint();default:return[]}},getRouteNodeNameByType:function(t){switch(t){case SuperMap.Plot.RouteNodeType.RENDEZVOUS:return"会合点";case SuperMap.Plot.RouteNodeType.EXPANDING:return"展开点";case SuperMap.Plot.RouteNodeType.VOLLEY:return"齐射点";case SuperMap.Plot.RouteNodeType.STANDBY:return"待机点";case SuperMap.Plot.RouteNodeType.SUPPLY:return"补给点";case SuperMap.Plot.RouteNodeType.TAKEOFF:return"起飞点";case SuperMap.Plot.RouteNodeType.INITIAL:return"初始点";case SuperMap.Plot.RouteNodeType.VISUALINITAL:return"可视化初始点";case SuperMap.Plot.RouteNodeType.LANCH:return"发射点";case SuperMap.Plot.RouteNodeType.WEAPONLAUNCH:return"武器发射点";case SuperMap.Plot.RouteNodeType.TURNING:return"转弯点";case SuperMap.Plot.RouteNodeType.COMMONROUTE:return"普通航路点";case SuperMap.Plot.RouteNodeType.AIMING:return"目标瞄准点";case SuperMap.Plot.RouteNodeType.TARGET:return"目标点";case SuperMap.Plot.RouteNodeType.ATTACK:return"攻击点";case SuperMap.Plot.RouteNodeType.SUPPRESS:return"压制点";case SuperMap.Plot.RouteNodeType.EIGHTSPIRAL:return"八字盘旋点";case SuperMap.Plot.RouteNodeType.HAPPYVALLEY:return"跑马圈点";default:return""}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.drawControl=e.PlotDrawControl=void 0;var o=i(24),n=i(35),s=e.PlotDrawControl=n.PlotControl.extend({drawingLayer:null,initialize:function(t,e){if(L.version<"0.7")throw new Error("Leaflet.draw 0.2.3+ requires Leaflet 0.7.0+. Download latest from https://github.com/Leaflet/Leaflet/");this.drawingLayer=t,L.Control.prototype.initialize.call(this,e)},onAdd:function(t){var e=L.DomUtil.create("div","supermap-iclient");return this._map=t,this.handler=new o.DrawGraphicObject(this._map,this.drawingLayer),this.handler._control=this,e},onRemove:function(){this._map=null,this.handler=null},setDrawingLayer:function(t){this.drawingLayer=t,this.handler._drawingLayer=t,this.handler._tempDrawingLayer.serverUrl=t.serverUrl}}),a=e.drawControl=function(t,e){return new s(t,e)};L.supermap.plotting.drawControl=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.editControl=e.PlotEditControl=void 0;var o=i(4),n=i(7),s=i(2),a=i(5),l=i(18),r=i(16),u=i(9),p=i(34),h=i(35),c=e.PlotEditControl=h.PlotControl.extend({_dragStartScale:null,_dragStartRotate:null,_dragStartBounds:null,_dragStartLatLngs:null,_editMarkers:null,_disEditBox:null,_editFeatures:null,_mouseTolerance:10,_editMode:SuperMap.Plot.EditMode.EDITCIRCUMRECTANGLE,_avoidEditing:!1,selectedFeatures:[],options:{highlightFlag:!0,highlightStyle:{color:"#ffffff",opacity:1,weight:1},draggable:!0,editIcon:L.divIcon({className:"leaflet-supermap-plot-control-icon-path",iconSize:[10,10]}),scaleIcon:L.divIcon({className:"leaflet-supermap-plot-scale-icon-path",iconSize:[10,10]}),rotateIcon:L.divIcon({className:"leaflet-supermap-plot-rotate-icon-path",iconSize:[15,15]}),lockedIcon:L.divIcon({className:"leaflet-supermap-plot-locked-icon-path",iconSize:[10,10]}),avoidIcon:L.divIcon({className:"leaflet-supermap-plot-avoid-icon-path",iconSize:[8,8]})},initialize:function(t,e){if(L.version<"0.7")throw new Error("Leaflet.draw 0.2.3+ requires Leaflet 0.7.0+. Download latest from https://github.com/Leaflet/Leaflet/");L.Control.prototype.initialize.call(this,e),L.setOptions(this,e),this._editMarkers={},this._disEditBox={},this._dragStartScale={},this._dragStartRotate={},this._dragStartBounds={},this._dragStartLatLngs={},this._editFeatures={}},onAdd:function(t){this.controlDiv=L.DomUtil.create("div","supermap-iclient"),this._map=t,this._map.on("click",this._onMapClick,this),this._map._plotEditControl=this;for(var e=0;e<this._map.getPlottingLayers().length;e++)if(this._map.getPlottingLayers()[e].isSelected){this.enableEditFeatures(this._map.getPlottingLayers()[e].features);for(var i=0;i<this._map.getPlottingLayers()[e].features.length;i++)(this._map.getPlottingLayers()[e].features[i]instanceof n.GroupObject||this._map.getPlottingLayers()[e].features[i]instanceof a.Route)&&this.enableEditFeatures(this._map.getPlottingLayers()[e].features[i].components)}return this.controlDiv},onRemove:function(){this._map.off("click",this._onMapClick,this),this.unselectFeatures(),this._map._plotEditControl=null,this._map=null;for(var t in this._editFeatures)this._disableFeatureEdit(this._editFeatures[t])},enableEditFeatures:function(t){SuperMap.Util.isArray(t)||(t=[t]);for(var e=0;e<t.length;e++)t[e]instanceof o.PlottingObject&&(t[e].enableEdit=!0,this._editFeatures[t[e].uuid]=t[e],this._enableFeatureEdit(t[e]))},disableEditFeatures:function(t){SuperMap.Util.isArray(t)||(t=[t]);for(var e=0;e<t.length;e++)t[e]instanceof o.PlottingObject&&(t[e].enableEdit=!1,delete this._editFeatures[t[e].uuid],this._disableFeatureEdit(t[e]))},avoidEdit:function(t){if(void 0===t&&(t=!this._avoidEditing),this._avoidEditing!==t)if(t&&1===this.selectedFeatures.length&&!this.selectedFeatures[0].getLocked()){this._avoidRegionControl=new p.AvoidRegionControl(this.selectedFeatures[0]),this._map.addControl(this._avoidRegionControl);for(var e in this._editFeatures)this._disableFeatureEdit(this._editFeatures[e]);this._collectEditMarkers(this._avoidRegionControl.feature),this._avoidEditing=t}else if(!t){if(this._avoidRegionControl){for(var e in this._editFeatures)this._enableFeatureEdit(this._editFeatures[e]);if(!SuperMap.Util.isArray(this._avoidRegionControl.feature))var i=[this._avoidRegionControl.feature];this.selectFeatures(i),this._map.removeControl(this._avoidRegionControl),this._avoidRegionControl=null}this._avoidEditing=t}return this._avoidEditing},setEditMode:function(t){if(this._editMode!==t){this._editMode=t;for(var e=0;e<this.selectedFeatures.length;e++)this._collectEditMarkers(this.selectedFeatures[e])}},copy:function(){this.pasteGeoAry=[],this.pasteGeoSel=[];for(var t=0,e=this._map.getPlottingLayers().length;t<e;t++){var i=this._map.getPlottingLayers()[t];if(!0!==i.isLocked&&!1!==i.isEditable)for(var n=0,s=i.getFeatures().length;n<s;n++){var a=i.getFeatures()[n];if(a.isSelected&&!1===a.isLocked&&(a.layer=i,a instanceof o.PlottingObject))if(a.symbolType===SuperMap.Plot.SymbolType.ROUTENODE)this.pasteGeoAry.push(a.route);else if(this.pasteGeoAry.push(a),this.pasteGeoSel.push(a.isSelected),(a.symbolType===SuperMap.Plot.SymbolType.SATELLITETIMEWINDOWS||a.symbolType===SuperMap.Plot.SymbolType.SATELLITE)&&a.hasOwnProperty("timeWindows")&&0!==a.timeWindows.length)for(var l=0,e=a.timeWindows.length;l<e;l++)a.timeWindows[l].hasOwnProperty("symbolType")&&a.timeWindows[l].symbolType===SuperMap.Plot.SymbolType.SATELLITETIMEWINDOWS&&this.pasteGeoAry.push(a.timeWindows[l])}}},copyFeatures:function(t){this.pasteGeoAry=[],this.pasteGeoSel=[],SuperMap.Util.isArray(t)||(t=[t]);for(var e=0;e<t.length;e++){var i=t[e];i instanceof o.PlottingObject&&(this.pasteGeoAry.push(i),this.pasteGeoSel.push(i.isSelected),i.isSelected&&this.selectedFeatures.push(i))}},cut:function(){this.pasteGeoAry=[],this.pasteGeoSel=[];for(var t=[],e=this.getSelectedFeatures().slice(),i=0;i<e.length;i++){var n=e[i];if(!0!==n.layer.isLocked&&!1!==n.layer.isEditable&&(!1===n.isLocked&&n instanceof o.PlottingObject))if(n.symbolType===SuperMap.Plot.SymbolType.ROUTENODE)this.pasteGeoAry.push(n.route),this.pasteGeoSel.push(n.route.isSelected),n.layer.removeFeatures(n.route);else{if(this.pasteGeoAry.push(n),this.pasteGeoSel.push(n.isSelected),n.hasOwnProperty("geoSymbolTexts")&&0!==n.geoSymbolTexts.length)for(var s=0,a=n.geoSymbolTexts.length;s<a;s++)n.geoSymbolTexts[s].hasOwnProperty("isSelected")&&!0===n.geoSymbolTexts[s].isSelected&&t.push(n.geoSymbolTexts[s].clone());if((n.symbolType===SuperMap.Plot.SymbolType.SATELLITETIMEWINDOWS||n.symbolType===SuperMap.Plot.SymbolType.SATELLITE)&&n.hasOwnProperty("timeWindows")&&0!==n.timeWindows.length)for(var l=0,a=n.timeWindows.length;l<a;l++)n.timeWindows[l].hasOwnProperty("symbolType")&&n.timeWindows[l].symbolType===SuperMap.Plot.SymbolType.SATELLITETIMEWINDOWS&&(this.pasteGeoAry.push(n.timeWindows[l]),n.layer.removeFeatures(n.timeWindows[l]));n.layer.removeFeatures(n)}}if(0!==t.length)for(var s=0,r=t.length;s<r;s++){var u=t[s];if(u.symbolType===SuperMap.Plot.SymbolType.SYMBOLTEXT||u.symbolType===SuperMap.Plot.SymbolType.SYMBOLTEXT1)for(var i=0,a=this.pasteGeoAry.length;i<a;i++)u.associatedUuid===this.pasteGeoAry[i].uuid&&this.pasteGeoAry[i].geoSymbolTexts.push(t[s])}},cutFeatures:function(t){this.pasteGeoAry=[],this.pasteGeoSel=[],t=SuperMap.Util.isArray(t)?t.slice():[t];for(var e=0;e<t.length;e++){var i=t[e],n=i.layer;i instanceof o.PlottingObject&&(this.pasteGeoAry.push(i),this.pasteGeoSel.push(i.isSelected),i instanceof l.RouteNode?(i.isSelected&&this.unselectFeatures(i),n.removeFeatures(i.route)):n.removeFeatures(i),i.layer=n)}},paste:function(){return this._pasteToPosition.apply(this,arguments)},align:function(t){if(0!==this.getSelectedFeatures().length){var e=1,i=this.getSelectedFeatures().length,o=null,n=null,s=null,a=this.getSelectedFeatures()[0].getBounds();if(t===SuperMap.Plot.AlignType.LEFT)for(;e<i;e++)o=this.getSelectedFeatures()[e].getBounds(),n=a.getWest()-o.getWest(),this.getSelectedFeatures()[e].move(0,n),this._collectEditMarkers(this.getSelectedFeatures()[e]);if(t===SuperMap.Plot.AlignType.RIGHT)for(;e<i;e++)o=this.getSelectedFeatures()[e].getBounds(),n=a.getEast()-o.getEast(),this.getSelectedFeatures()[e].move(0,n),this._collectEditMarkers(this.getSelectedFeatures()[e]);if(t===SuperMap.Plot.AlignType.UP)for(;e<i;e++)o=this.getSelectedFeatures()[e].getBounds(),s=a.getNorth()-o.getNorth(),this.getSelectedFeatures()[e].move(s,0),this._collectEditMarkers(this.getSelectedFeatures()[e]);if(t===SuperMap.Plot.AlignType.DOWN)for(;e<i;e++)o=this.getSelectedFeatures()[e].getBounds(),s=a.getSouth()-o.getSouth(),this.getSelectedFeatures()[e].move(s,0),this._collectEditMarkers(this.getSelectedFeatures()[e]);if(t===SuperMap.Plot.AlignType.VERTICALCENTER)for(;e<i;e++)o=this.getSelectedFeatures()[e].getBounds(),s=a.getCenter().lat-o.getCenter().lat,this.getSelectedFeatures()[e].move(s,0),this._collectEditMarkers(this.getSelectedFeatures()[e]);if(t===SuperMap.Plot.AlignType.HORIZONTALCENTER)for(;e<i;e++)o=this.getSelectedFeatures()[e].getBounds(),n=a.getCenter().lng-o.getCenter().lng,this.getSelectedFeatures()[e].move(0,n),this._collectEditMarkers(this.getSelectedFeatures()[e])}},deleteSelectedFeatures:function(){if(0===Object.keys(this.getSelectedFeatures()).length)return null;if(Object.keys(this.getSelectedFeatures()).length)for(var t=this.getSelectedFeatures(),e=0,i=t.length;e<i;e++)t[e].layer.removeFeatures(t[e])},getSelectedFeatures:function(){return this.selectedFeatures.slice()},multiSelect:function(){L.DomEvent.on(this._map._container,"mousedown",this._onMapMouseDown,this),this._map.dragging.enabled()&&(this._map.dragging.disable(),this._mapDraggingWasEnabled=!0)},selectFeatures:function(t){if(SuperMap.Util.isArray(t)||(t=[t]),!1!==this.fire(SuperMap.Plot.Event.beforefeaturesselected,{features:t})){for(var e in t){var i=[];null!==t[e]._map&&t[e].enableEdit&&!1===t[e].isSelected&&(t[e].isSelected=!0,this.selectedFeatures.push(t[e]),this._collectEditMarkers(t[e]),this.options.draggable&&!t[e].layer.isLocked&&t[e].layer.isEditable&&t[e].dragging.enable(),null!==t[e].ownerGroup&&(t[e].ownerGroup.isSelected=!0),t[e]instanceof l.RouteNode&&(t[e].route.isSelected=!0,this.options.highlightFlag&&t[e].route.highlight(this.options.highlightStyle)),i.push(t[e]))}this.fire(SuperMap.Plot.Event.featuresselected,{features:i})}},unselectFeatures:function(t){if(void 0===t&&(t=this.selectedFeatures.slice()),SuperMap.Util.isArray(t)||(t=[t]),!1!==this.fire(SuperMap.Plot.Event.beforefeaturesunselected,{features:t})){for(var e=t.slice(),i=0;i<e.length;){var o=L.Util.indexOf(this.selectedFeatures,e[i]);-1!==o?(this._removeMarkers(e[i]),e[i].isSelected=!1,e[i].dragging.disable(),null!==e[i].ownerGroup&&(e[i].ownerGroup.isSelected=!1),e[i]instanceof l.RouteNode&&(e[i].route.isSelected=!1,e[i].route.unhighlight()),this.selectedFeatures.splice(o,1),i++):e.splice(i,1)}this.fire(SuperMap.Plot.Event.featuresunselected,{features:e})}},_onMapMouseDown:function(t){this.multiple=!1,L.DomUtil.disableTextSelection(),L.DomUtil.disableImageDrag(),this._startPoint=this._map.mouseEventToContainerPoint(t),L.DomEvent.on(document,{contextmenu:L.DomEvent.stop,mousemove:this._onMapMouseMove,mouseup:this._onMapMouseUp},this)},_onMapMouseMove:function(t){this.multiple||(this.multiple=!0,this._box=L.DomUtil.create("div","leaflet-zoom-box",this._map._container),L.DomUtil.addClass(this._map._container,"leaflet-crosshair")),this._endPoint=this._map.mouseEventToContainerPoint(t);var e=new L.Bounds(this._endPoint,this._startPoint),i=e.getSize();L.DomUtil.setPosition(this._box,e.min),this._box.style.width=i.x+"px",this._box.style.height=i.y+"px"},_onMapMouseUp:function(t){if(L.DomEvent.off(this._map._container,"mousedown",this._onMapMouseDown,this),this.multiple&&(L.DomUtil.remove(this._box),L.DomUtil.removeClass(this._map._container,"leaflet-crosshair")),L.DomUtil.enableTextSelection(),L.DomUtil.enableImageDrag(),L.DomEvent.off(document,{contextmenu:L.DomEvent.stop,mousemove:this._onMapMouseMove,mouseup:this._onMapMouseUp},this),this.multiple){var e=new L.LatLngBounds(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._endPoint)),i=null;0!==Object.values(this._editFeatures).length&&(i=Object.values(this._editFeatures));for(var o=[],n=0,s=i.length;n<s;n++)i[n].isSelected||(i[n]instanceof l.RouteNode||i[n].symbolType===SuperMap.Plot.SymbolType.LITERATESIGN?e.contains(i[n].route.getBounds().getCenter())&&-1===SuperMap.Util.indexOf(o,i[n].route)&&o.push(i[n].route):null!==i[n].ownerGroup?e.contains(i[n].ownerGroup.getBounds().getCenter())&&-1===SuperMap.Util.indexOf(o,i[n].ownerGroup)&&o.push(i[n].ownerGroup):i[n].getBounds().isValid()&&e.contains(i[n].getBounds().getCenter())&&o.push(i[n]));0!==o.length&&this.selectFeatures(o),this._mapDraggingWasEnabled&&this._map.dragging.enable(),this.multiple=!1}},_enableFeatureEdit:function(t){t instanceof o.PlottingObject&&t.on("click",this._onClick,this).on("mousemove",this._onMouseMove,this).on("mouseout",this._onMouseOut,this).on("dragstart",this._onDragStart,this).on("drag",this._onDrag,this).on("dragend",this._onDragEnd,this).on("reseteditmarkersvalues",this._onResetEditMarkersValues,this).on("reseteditmarkers",this._onResetEditMarkers,this)},_disableFeatureEdit:function(t){t instanceof o.PlottingObject&&(t.isSelected&&this.unselectFeatures(t),t.off("click",this._onClick,this).off("mousemove",this._onMouseMove,this).off("mouseout",this._onMouseOut,this).off("dragstart",this._onDragStart,this).off("drag",this._onDrag,this).off("dragend",this._onDragEnd,this).off("reseteditmarkersvalues",this._onResetEditMarkersValues,this).off("reseteditmarkers",this._onResetEditMarkers,this))},_onSelectedLayers:function(t){this.selectFeatures(t.target)},_onUnSelectLayers:function(t){this.unselectFeatures(t.target)},_onMouseMove:function(t){var e=t.target,i="";if(e.isSelected)if(this._editMode===SuperMap.Plot.EditMode.ADDCONTROLPOINT&&(SuperMap.Plot.AddPoint_WayType.UNKNOWN!==e._getSymbolWayType()||e instanceof l.RouteNode&&(e._isFirstNode()||e._isLastNode())))i="crosshair";else if(this._editMode===SuperMap.Plot.EditMode.ADDCONTROLPOINT&&e instanceof a.Route){var o=this._getAddPointTolerance(),n=e._selectNodeLayer(t.latlng,o);null===n||n instanceof l.RouteNode&&(n._isFirstNode()||n._isLastNode())?i="crosshair":null!==n&&(i="pointer")}else i="move";else i="pointer";e.layer._setCursorStyle(i)},_onMouseOut:function(t){t.target.layer._setCursorStyle()},_onDragStart:function(t){for(var e=0;e<this.selectedFeatures.length;e++)if(!this.selectedFeatures[e].getLocked()){var i=this._editMarkers[this.selectedFeatures[e].uuid];for(var o in i)i[o].setOpacity(0)}},_onDrag:function(t){for(var e=0;e<this.selectedFeatures.length;e++)if((this._editMode!==SuperMap.Plot.EditMode.ADDCONTROLPOINT||SuperMap.Plot.AddPoint_WayType.UNKNOWN===this.selectedFeatures[e]._getSymbolWayType())&&!this.selectedFeatures[e].getLocked()){if(this.selectedFeatures[e].symbolType===SuperMap.Plot.SymbolType.SYMBOLTEXT1||this.selectedFeatures[e].symbolType===SuperMap.Plot.SymbolType.AIRROUTE||this.selectedFeatures[e].symbolType===SuperMap.Plot.SymbolType.NAVYROUTE||this.selectedFeatures[e].symbolType===SuperMap.Plot.SymbolType.MISSILEROUTE)break;this.selectedFeatures[e].move(t.dLat,t.dLng)}},_onDragEnd:function(t){for(var e=0;e<this.selectedFeatures.length;e++)this.selectedFeatures[e].getLocked()||(this._collectEditMarkers(this.selectedFeatures[e]),this.selectedFeatures[e].graphic&&this.selectedFeatures[e].graphic.updateImage());this.fire(SuperMap.Plot.Event.featuresmodified,{features:this.selectedFeatures})},_onResetEditMarkers:function(t){-1!==L.Util.indexOf(this.selectedFeatures,t.target)&&this._collectEditMarkers(t.target)},_onResetEditMarkersValues:function(t){this._resetEditMarkersValue(t.target)},_onMapClick:function(t){if(!1!==this._onTriggerMapClick){if(this._startPoint&&this._endPoint)return this._startPoint=null,void(this._endPoint=null);for(var e=[],i=this._map.getPlottingLayers(),o=0;o<i.length;o++){var n=i[o]._getFeatureFromEvent(t);if(n){e.push(n);break}}this.unselectFeatures(),L.DomEvent.stopPropagation(t)}},_onClick:function(t){var e=t.target;if(e instanceof o.PlottingObject)if(e instanceof n.GroupObject&&e.moveend)e.moveend=!1;else if(null!==e.ownerGroup&&e.ownerGroup.moveend)e.ownerGroup.moveend=!1;else{if(this._editMode!==SuperMap.Plot.EditMode.ADDCONTROLPOINT)e instanceof n.GroupObject&&!e.isSelected?(!1===t.originalEvent.ctrlKey&&this.unselectFeatures(),this.selectFeatures(e)):e instanceof a.Route||e.isSelected||null!==e.ownerGroup&&!0!==e.ownerGroup.isSelected||(!1===t.originalEvent.ctrlKey&&this.unselectFeatures(),this.selectFeatures(e));else if(e instanceof a.Route||e.isSelected){if(!1===e.isLocked&&e.isSelected)if(e instanceof a.Route){i=this._getAddPointTolerance();if(null===(u=e._selectNodeLayer(t.latlng,i))){var i=this._getAddPointTolerance();null!==(u=e._addRouteNodeByPosWithoutLast(t.latlng,i))&&(this.unselectFeatures(),this.selectFeatures(u))}}else if(e instanceof l.RouteNode&&e.route.isSelected){var s=e._isFirstNode(),r=e._isLastNode();if(!0===s||!0===r){var u=e.route._addRouteNodeByNode(e.routeNode,s,r);null!==u&&(this.unselectFeatures(),this.selectFeatures(u))}else this.unselectFeatures(),this.selectFeatures(e)}else this._addPoint(e,t.latlng)}else{!1===t.originalEvent.ctrlKey&&this.unselectFeatures(),this.selectFeatures(e);e instanceof l.RouteNode&&((s=e._isFirstNode())||(r=e._isLastNode()))&&null!==(u=e.route._addRouteNodeByNode(e.routeNode,s,r))&&(this.unselectFeatures(),this.selectFeatures(u))}L.DomEvent.stopPropagation(t)}},_addPoint:function(t,e){if(null!==t&&void 0!==t&&!(t.getLatLngs().length>=t.maxEditPts)){var i=t._getSymbolWayType();if(SuperMap.Plot.AddPoint_WayType.UNKNOWN!==i){var o=new SuperMap.Geometry.Point(e.lng,e.lat),n=-1;SuperMap.Plot.AddPoint_WayType.CURVE===i&&(n=this._addPointByCurve(t,o)),SuperMap.Plot.AddPoint_WayType.POLYLINE===i&&(n=this._addPointByPolyLine(t,o));var s=L.Util.latLngsToSuperMapPoints(t.getLatLngs());if(n>0&&n<s.length){var a=L.supermap.plotting.editMarker(new L.LatLng(o.y,o.x),{icon:this.options.editIcon,nHandle:-1});if(a.owner=t,this._addToMapAndBindMarker(a),this._editMarkers[t.uuid].splice(n,0,a),s.splice(n,0,o),100!==t.libID||17703!==t.code&&17704!==t.code)t.latLngs=L.Util.superMapPointsToLatLngs(s);else{var l=SuperMap.Plot.PlottingUtil.computeBeizerPoints(!1,s,t.scaleValues);t.scalePoints=L.Util.superMapPointsToLatLngs(l.scalePoints),t.scaleValues=l.scaleValues,t.setLatLngs(L.Util.superMapPointsToLatLngs(s)),this._resetEditMarkersValue(t)}}}}},_addPointByCurve:function(t,e){var i=L.Util.latLngsToSuperMapPoints(t.getLatLngs()),o=SuperMap.Plot.PlottingUtil.generateBeizerPointsNoCtrlPt(i);if(2>o.length)return-1;for(var n=[],s=0,a=1,l=i.length;a<l;a++)for(var r=[],u=s,p=o.length;u<p;u++){if(SuperMap.Plot.PlottingUtil.equalFuzzy(i[a].x,o[u].x)&&SuperMap.Plot.PlottingUtil.equalFuzzy(i[a].y,o[u].y)){if(r.length<1)continue;r.push(o[u]),n.push(r),r=[],s=u;break}r.push(o[u])}for(var h=-1,c=-1,u=0;u<n.length;u++){var y=this._computePointToLineMinDis(e,n[u]).minDis;y<0||(c<0?(c=y,h=u+1):c>y&&(c=y,h=u+1))}return h},_addPointByPolyLine:function(t,e){var i=-1,o=L.Util.latLngsToSuperMapPoints(t.getLatLngs());return(i=this._computePointToLineMinDis(e,o).index)>=0&&i++,i},_computePointToLineMinDis:function(t,e){var i=this._getAddPointTolerance(),o=SuperMap.Plot.PlottingUtil.computePointToLineMinDis(t,e);return o.minDis>i&&(o.index=-1),o},_getAddPointTolerance:function(){var t=this._mouseTolerance,e=this._map.layerPointToLatLng(L.point(0,0)),i=this._map.layerPointToLatLng(L.point(t,0));return SuperMap.Plot.PlottingUtil.distance(new SuperMap.Geometry.Point(e.lng,e.lat),new SuperMap.Geometry.Point(i.lng,i.lat))},_collectEditMarkers:function(t){void 0!==this._editMarkers[t.uuid]&&this._removeMarkers(t);var e,i=[];if(t.layer instanceof u.PlottingLayer&&(t.layer.getLocked()||!t.layer.getEditable())){var o=t.getBounds();if(null!==o&&o.isValid()){var s=L.latLng(o.getNorth(),o.getEast()),a=L.latLng(o.getNorth(),o.getWest()),p=L.latLng(o.getSouth(),o.getEast()),h=L.latLng(o.getSouth(),o.getWest()),c=new L.Polygon([s,a,h,p],{smoothFactor:.5}),y={weight:1,opacity:.5,color:"#0000ff",fillOpacity:.3,fillColor:"#0000ff"};L.setOptions(c,y),this._map.addLayer(c),e=c}}else if(t.getLocked()){var g=t._getHandlePointsByBounds();for(var d in g){var f=new L.LatLng(g[d].lat,g[d].lng),S=L.supermap.plotting.editMarker(f,{icon:this.options.lockedIcon,nHandle:-3});this._addToMapAndBindMarker(S),S.owner=t,i.push(S)}}else if(t instanceof n.GroupObject||t instanceof l.RouteNode)if(t instanceof r.FlagGroup&&this._editMode!==SuperMap.Plot.EditMode.EDITCIRCUMRECTANGLE)for(var P=0;P<t.scalePoints.length;P++){var f=new L.LatLng(t.scalePoints[P].lat,t.scalePoints[P].lng),m=t.scalePoints[P].tag?t.scalePoints[P].tag:P,S=L.supermap.plotting.editMarker(f,{icon:this.options.scaleIcon,nHandle:t.enableEdit?-2:-3,tag:m});this._addToMapAndBindMarker(S),i.push(S),S.owner=t}else{var b=t._getHandleAndRotatePoints();for(var d in b.handlePoints){v=b.handlePoints[d].nHandle;(this._editMode!==SuperMap.Plot.EditMode.EDITCIRCUMRECTANGLE||t instanceof l.RouteNode)&&(v=-3);var f=new L.LatLng(b.handlePoints[d].lat,b.handlePoints[d].lng),S=L.supermap.plotting.editMarker(f,{icon:this.options.editIcon,nHandle:v,tag:d});this._addToMapAndBindMarker(S),S.owner=t,i.push(S)}if(this._editMode===SuperMap.Plot.EditMode.EDITCIRCUMRECTANGLE)for(var d in b.rotatePoints){var f=new L.LatLng(b.rotatePoints[d].lat,b.rotatePoints[d].lng),S=L.supermap.plotting.editMarker(f,{icon:this.options.rotateIcon,nHandle:0});this._addToMapAndBindMarker(S),i.push(S),S.owner=t}}else if(this._editMode===SuperMap.Plot.EditMode.EDITCIRCUMRECTANGLE){for(var d=0,M=(b=t._getHandleAndRotatePoints()).handlePoints.length;d<M;d++){var v=b.handlePoints[d].nHandle;!t.enableEdit||t.symbolType===SuperMap.Plot.SymbolType.TEXTSYMBOL||t.symbolType===SuperMap.Plot.SymbolType.ELLIPSESYMBOL&&0===parseInt(d)?v=-3:t._getHandleCount()>9&&(v=-1);var f=new L.LatLng(b.handlePoints[d].lat,b.handlePoints[d].lng),S=L.supermap.plotting.editMarker(f,{icon:this.options.editIcon,nHandle:v,tag:d});this._addToMapAndBindMarker(S),S.owner=t,i.push(S)}for(var d=0,M=b.rotatePoints.length;d<M;d++){var f=new L.LatLng(b.rotatePoints[d].lat,b.rotatePoints[d].lng),S=L.supermap.plotting.editMarker(f,{icon:this.options.rotateIcon,nHandle:t.enableEdit?0:-3});this._addToMapAndBindMarker(S),i.push(S),S.owner=t,this._lastPixel=this._map.latLngToLayerPoint(b.rotatePoints[0])}}else if(t.symbolType===SuperMap.Plot.SymbolType.REGULARPOLYGON){var _=[s=t.latLngs[0],a=t.components[0].getLatLngs()[0][0]];for(var d in _){S=L.supermap.plotting.editMarker(_[d],{icon:this.options.editIcon,nHandle:t.enableEdit?-1:-3,tag:d});this._addToMapAndBindMarker(S),i.push(S),S.owner=t}}else if(t.symbolType===SuperMap.Plot.SymbolType.PARALLELLINE){var T=L.Util.superMapPointsToLatLngs(t.superMapAlgoSymbol.controlPoints[0]);t.getLatLngs()[0]=L.latLng(T[0].lat,T[0].lng);for(var d in t.latLngs){var f=new L.LatLng(t.latLngs[d].lat,t.latLngs[d].lng),S=L.supermap.plotting.editMarker(f,{icon:this.options.editIcon,nHandle:t.enableEdit?-1:-3,tag:d});this._addToMapAndBindMarker(S),i.push(S),S.owner=t}}else if(t.symbolType===SuperMap.Plot.SymbolType.ELLIPSESYMBOL)for(var d in t.latLngs)if(0===parseInt(d)){var f=new L.LatLng(t.latLngs[d].lat,t.latLngs[d].lng),S=L.supermap.plotting.editMarker(f,{icon:this.options.editIcon,nHandle:-3,tag:d});this._addToMapAndBindMarker(S),i.push(S),S.owner=t}else{var f=new L.LatLng(t.latLngs[d].lat,t.latLngs[d].lng),S=L.supermap.plotting.editMarker(f,{icon:this.options.editIcon,nHandle:t.enableEdit?-1:-3,tag:d});this._addToMapAndBindMarker(S),i.push(S),S.owner=t}else if(t.symbolType!==SuperMap.Plot.SymbolType.SATELLITE){100===t.libID&&13700===t.code&&(t.getLatLngs()[t.getLatLngs().length-1]=t.components[0].getLatLngs()[t.components[0].getLatLngs().length-1]);for(var d in t.latLngs){var f=new L.LatLng(t.latLngs[d].lat,t.latLngs[d].lng),S=L.supermap.plotting.editMarker(f,{icon:this.options.editIcon,nHandle:t.enableEdit?-1:-3,tag:d});this._addToMapAndBindMarker(S),i.push(S),S.owner=t}for(var d in t.scalePoints){var f=new L.LatLng(t.scalePoints[d].lat,t.scalePoints[d].lng),m=t.scalePoints[d].tag?t.scalePoints[d].tag:d,S=L.supermap.plotting.editMarker(f,{icon:this.options.scaleIcon,nHandle:t.enableEdit?-2:-3,tag:m});this._addToMapAndBindMarker(S),i.push(S),S.owner=t}}this._editMarkers[t.uuid]=i,this._disEditBox[t.uuid]=e},_resetEditMarkersValue:function(t){if(this._editMarkers.hasOwnProperty(t.uuid)){var e=this._editMarkers[t.uuid],i=this._disEditBox[t.uuid];if(0!==this._map.getPlotEditControl().length||!t.layer.getLocked()&&t.layer.getEditable())if(t instanceof n.GroupObject||t instanceof l.RouteNode)if(t instanceof r.FlagGroup&&this._editMode!==SuperMap.Plot.EditMode.EDITCIRCUMRECTANGLE)for(var o in t.scalePoints)e[o]._latlng=t.scalePoints[o],e[o].update();else{u=t._getHandleAndRotatePoints();for(var s in u.handlePoints)e[s]._latlng=u.handlePoints[s],e[s].update();if(this._editMode===SuperMap.Plot.EditMode.EDITCIRCUMRECTANGLE){c=u.handlePoints.length;for(var a in u.rotatePoints)e[c+parseInt(a)]._latlng=u.rotatePoints[a],e[c+parseInt(a)].update()}}else if(this._editMode===SuperMap.Plot.EditMode.EDITCIRCUMRECTANGLE){var u=t._getHandleAndRotatePoints();for(var s in u.handlePoints)e[s]._latlng=u.handlePoints[s],e[s].update();c=u.handlePoints.length;for(var a in u.rotatePoints)e[c+parseInt(a)]._latlng=u.rotatePoints[a],e[c+parseInt(a)].update()}else if(void 0!==t.scalePoints&&null!==t.scalePoints||(t.scalePoints=[]),t.symbolType===SuperMap.Plot.SymbolType.REGULARPOLYGON){var p=[d=t.getLatLngs()[0],f=t.components[0].getLatLngs()[0][0]];for(var o in p)e[o]._latlng=p[o],e[o].update()}else if(t.symbolType===SuperMap.Plot.SymbolType.PARALLELLINE){var h=L.Util.superMapPointsToLatLngs(t.superMapAlgoSymbol.controlPoints[0]);t.getLatLngs()[0]=L.latLng(h[0].lat,h[0].lng);for(var s in t.getLatLngs())e[s]._latlng=t.getLatLngs()[s],e[s].update()}else if(t.getLatLngs().length+t.scalePoints.length===e.length){for(var s in t.getLatLngs())e[s]._latlng=t.getLatLngs()[s],e[s].update();var c=t.getLatLngs().length;for(var a in t.scalePoints){var y=c+parseInt(a);e[y]._latlng=t.scalePoints[a],e[y].update()}}else this._collectEditMarkers(t);else{var g=t.getBounds();if(null!==g&&g.isValid()){var d=L.latLng(g.getNorth(),g.getEast()),f=L.latLng(g.getNorth(),g.getWest()),S=L.latLng(g.getSouth(),g.getEast()),P=L.latLng(g.getSouth(),g.getWest());i.setLatLngs([d,f,P,S])}}}},_removeMarkers:function(t){var e=this._editMarkers[t.uuid];for(var i in e)this._unbindMarkerEvents(e[i]),this._map.removeLayer(e[i]);delete this._editMarkers[t.uuid];var o=this._disEditBox[t.uuid];o&&this._map.removeLayer(o),delete this._disEditBox[t.uuid]},_unbindMarkerEvents:function(t){t.off("mousemove",this._moveMove,this),t.off("mouseout",this._moveOut,this),-3!==t.options.nHandle&&(t.off("click",this._removePoint,this),t.off("dragstart",this._dragStart,this),t.off("drag",this.redraw,this),t.off("dragend",this._dragEnd,this),t.dragging.disable())},_addToMapAndBindMarker:function(t){t.addTo(this._map),t.on("mousemove",this._moveMove,this),t.on("mouseout",this._moveOut,this),-3!==t.options.nHandle&&(t.on("click",this._removePoint,this),t.on("dragstart",this._dragStart,this),t.on("drag",this._dragPoint,this),t.on("dragend",this._dragEnd,this),t.dragging.enable()),-3===t.options.nHandle&&(t.on("dragstart",this._dragStart,this),t.on("dragend",this._dragEnd,this),t.dragging.enable())},_moveMove:function(t){switch(t.target.options.nHandle){case 1:case 8:t.target._icon.style.cursor="se-resize";break;case 3:case 6:t.target._icon.style.cursor="ne-resize";break;case 4:case 5:t.target._icon.style.cursor="e-resize";break;case 2:case 7:t.target._icon.style.cursor="n-resize";break;case-1:case-2:t.target._icon.style.cursor="pointer";break;case 0:t.target._icon.style.cursor="default"}},_moveOut:function(t){t.target._icon.style.cursor=""},_removePoint:function(t){if(this._editMode===SuperMap.Plot.EditMode.ADDCONTROLPOINT&&t.target.owner.isSelected){var e=this._editMarkers[t.target.owner.uuid],i=e.indexOf(t.target);this._map.removeLayer(e[i]),e.splice(i,1),t.target.owner.latLngs.splice(i,1),t.target.owner.redraw()}},_dragStart:function(t){for(var e in this.selectedFeatures){var i=this.selectedFeatures[e];if(this._dragStartScale[i.uuid]=i.getScale(),this._dragStartRotate[i.uuid]=i.getRotate(),this._dragStartBounds[i.uuid]=i.getBounds(),i.symbolType===SuperMap.Plot.SymbolType.FLAGGROUP)i.anchorPoint=new L.latLng(i.getBounds().getSouth(),i.getBounds().getWest());else if(i.symbolType!==SuperMap.Plot.SymbolType.DOTSYMBOL){var o=i.getBounds();o.isValid()&&(i.anchorPoint=o.getCenter())}i instanceof s.GraphicObject&&(this._dragStartLatLngs[i.uuid]=L.Util.cloneLatLngs(i.getLatLngs()));var n=this._editMarkers[i.uuid];for(var a in n)-3===n[a].options.nHandle&&n[a].setOpacity(0),n[a].setOpacity(0)}this.oldLatLng=t.target._latlng},_dragEnd:function(t){for(var e=0;e<this.selectedFeatures.length;e++)this._collectEditMarkers(this.selectedFeatures[e]),this.selectedFeatures[e].graphic&&this.selectedFeatures[e].graphic.updateImage();this.fire(SuperMap.Plot.Event.featuresmodified,{features:this.selectedFeatures})},_dragPoint:function(t){if(!1!==this.fire(SuperMap.Plot.Event.beforefeaturesmodified,{features:this.selectedFeatures})){var e=t.target.owner;if(-3===t.target.options.nHandle||this._avoidRegionControl)this._avoidRegionControl&&this._collectEditMarkers(e);else{var i=this._editMarkers[e.uuid];SuperMap.Util.indexOf(i,t.target);this._editMode===SuperMap.Plot.EditMode.EDITCIRCUMRECTANGLE&&0===t.target.options.nHandle?this._dragRotate(t):this._editMode===SuperMap.Plot.EditMode.EDITCIRCUMRECTANGLE&&t.target.options.nHandle>0?this._dragResize(t,t.target.options.nHandle):this._dragLatLngs(t)}this.fire(SuperMap.Plot.Event.featuresmodified,{features:this.selectedFeatures})}},_dragRotate:function(t){var e=this,i=t.target.owner,o=null;o=i.symbolType===SuperMap.Plot.SymbolType.DOTSYMBOL?i.getLatLngs()[0]:i.anchorPoint;var n=this._map.latLngToLayerPoint(o);i.symbolType===SuperMap.Plot.SymbolType.DOTSYMBOL&&!0===i.positionOffset&&(n.x+=i.positionOffsetX*i.dScale,n.y+=i.positionOffsetY*i.dScale);var s=this._map.latLngToLayerPoint(t.latlng),a=this._map.latLngToLayerPoint(t.oldLatLng),l=s.x-n.x-(a.x-n.x),r=s.y-n.y-(a.y-n.y);if(0!==l&&0!==r){var u=180*(Math.atan2(a.y-n.y,a.x-n.x)-Math.atan2(s.y-n.y,s.x-n.x))/Math.PI,p=0;void 0!==this._lastPixel&&(p=180*(Math.atan2(this._lastPixel.y-n.y,this._lastPixel.x-n.x)-Math.atan2(s.y-n.y,s.x-n.x))/Math.PI),function(t,i){for(var o=0;o<e.selectedFeatures.length;o++){var n=0;n=e.selectedFeatures[o].symbolType===SuperMap.Plot.SymbolType.DOTSYMBOL?t+e._dragStartRotate[e.selectedFeatures[o].uuid]:i,(n%=360)<0&&(n+=360),e.selectedFeatures[o].setRotate(n)}}(u,p)}this._lastPixel=s},_dragResize:function(t,e){var i=this,o=t.target.owner,n=this._dragStartBounds[o.uuid],s=o._resizeOffset(t.latlng,e,n),a=o._resizeBounds(t.latlng,e,n),l=n.getEast()-n.getWest(),r=n.getNorth()-n.getSouth(),u=!0===Boolean(l)?(a.getEast()-a.getWest())/l:.5,p=!0===Boolean(r)?(a.getNorth()-a.getSouth())/r:.5;(function(t,n){for(var s=[],a=0;a<i.selectedFeatures.length;a++)if(!0!==i.selectedFeatures[a].getLocked())if(i.selectedFeatures[a]._isDot()){var l=i._dragStartScale[i.selectedFeatures[a].uuid],r=(l=!0===Boolean(l)?l:1)*t;r>0&&i.selectedFeatures[a].setScale(r)}else{if(9===i.selectedFeatures[a]._getHandleCount()&&e&&e>0){var u=i._dragStartBounds[i.selectedFeatures[a].uuid],p=i._dragStartLatLngs[i.selectedFeatures[a].uuid],h=i.selectedFeatures[a]._getLatLng(e,u,n);i.selectedFeatures[a]._resizeLatLngs(h,e,u,p)}if(0===i.selectedFeatures[a].libID&&i.selectedFeatures[a].code===SuperMap.Plot.SymbolType.ARCREGION)i.selectedFeatures[a]._generateArcRegionFromServer();else if(SuperMap.AlgoSymbolFactory.isAccessServer(i.selectedFeatures[a].libID,i.selectedFeatures[a].code)){var c=new SuperMap.GetSymbolInfoParameters;c.libID=i.selectedFeatures[a].libID,c.code=i.selectedFeatures[a].code,c.inputPoints=L.Util.latLngsToSuperMapPoints(i.selectedFeatures[a].getLatLngs()),c.scaleValues=i.selectedFeatures[a].scaleValues,c.subSymbols=i.selectedFeatures[a].subSymbols,s.push(i.selectedFeatures[a]),L.supermap.symbolInfoService(o.serverUrl).getSymbolInfo(c,function(t){for(var e=0;e<s.length;e++)s[e].libID===t.result.libID&&s[e].code===t.result.code&&(s[e].symbolData.innerCells=t.result.innerCells,s[e].symbolData.scalePoints=t.result.scalePoints,s[e].symbolData.scaleValues=t.result.scaleValues,s[e].redraw(),s[e]._updateSymbolTexts(),s.splice(0,1))},this)}else i.selectedFeatures[a].redraw(),i.selectedFeatures[a]._updateSymbolTexts()}})(2===e||7===e?p:4===e||5===e?u:u<p?u:p,s),this.oldLatLng=t.latlng},_dragLatLngs:function(t){var e=t.target.owner,i=this._editMarkers[e.uuid],o=SuperMap.Util.indexOf(i,t.target),n=!1;if(-2===t.target.options.nHandle&&(n=!0),SuperMap.AlgoSymbolFactory.isAccessServer(e.libID,e.code)){var s=(new Date).getTime(),a=this._map.latLngToLayerPoint(t.latlng);if(n&&void 0!==this._lastDragPixel&&null!==this._lastDragPixel&&!((Math.abs(a.x-this._lastDragPixel.x)>3||Math.abs(a.y-this._lastDragPixel.y)>3)&&s-this.lastDownTime>100))return;var l=new SuperMap.GetSymbolInfoParameters;l.libID=e.libID,l.code=e.code,n?(l.inputPoints=L.Util.latLngsToSuperMapPoints(e.getLatLngs()),l.scalePoints=L.Util.latLngsToSuperMapPoints(e.scalePoints),l.scaleValues=e.scaleValues,l.newScalePoint=new SuperMap.Geometry.Point(t.latlng.lng,t.latlng.lat),l.newScalePointIndex=parseInt(t.target.options.tag)):(e.getLatLngs()[o]=t.target.getLatLng(),l.inputPoints=L.Util.latLngsToSuperMapPoints(e.getLatLngs()),l.scaleValues=e.scaleValues),l.subSymbols=e.subSymbols,L.supermap.symbolInfoService(e.serverUrl).getSymbolInfo(l,function(t){e.symbolData.innerCells=t.result.innerCells,e.symbolData.scalePoints=t.result.scalePoints,e.symbolData.scaleValues=t.result.scaleValues,e.redraw(),e._updateSymbolTexts(),this._resetEditMarkersValue(e)},this),this._lastDragPixel=a,this.lastDownTime=(new Date).getTime()}else if(e.symbolType===SuperMap.Plot.SymbolType.ARCREGION){if(void 0===e.isRedraw&&(e.isRedraw=!0),e.isRedraw){e.getLatLngs()[o]=t.latlng;var r=t.target.getLatLng();-2===t.target.options.nHandle&&(r.isScalePoint=!0),e._modifyPoint(parseInt(t.target.options.tag),r)}}else if(-1===t.target.options.nHandle){switch(e.symbolType){case SuperMap.Plot.SymbolType.REGULARPOLYGON:1===o?e.getLatLngs()[e.getLatLngs().length-1]=t.latlng:e.getLatLngs()[0]=t.latlng;break;case SuperMap.Plot.SymbolType.ELLIPSESYMBOL:e.getLatLngs()[o]=t.latlng;break;case SuperMap.Plot.SymbolType.DOTSYMBOL:e.setLatLngs(e.positionOffset?[e.latLngs[0]]:[t.latlng]);break;default:e.getLatLngs()[o]=t.latlng}e.symbolType===SuperMap.Plot.SymbolType.LINERELATION||e.symbolType===SuperMap.Plot.SymbolType.SYMBOLTEXT||e.symbolType===SuperMap.Plot.SymbolType.SYMBOLTEXT1||e.symbolType===SuperMap.Plot.SymbolType.ELLIPSESYMBOL?e._modifyPoint(parseInt(t.target.options.tag),t.latlng):e.redraw(),e._updateSymbolTexts(),this._resetEditMarkersValue(e)}else if(-2===t.target.options.nHandle){if((r=t.target.getLatLng()).isScalePoint=!0,e._modifyPoint(parseInt(t.target.options.tag),r),e.symbolType===SuperMap.Plot.SymbolType.FLAGGROUP)for(var u=0,p=e.components.length;u<p;u++)e.components[u]._updateSymbolTexts();else e._updateSymbolTexts();this._resetEditMarkersValue(e)}},_pasteToPosition:function(){if(this.pasteGeoAry&&0!==this.pasteGeoAry.length){var t=null,e=null,i=this.pasteGeoAry.slice();if(0!==arguments.length){for(var s=new L.LatLngBounds,l=0,r=i.length;l<r;l++){var u=i[l];if(u instanceof n.GroupObject)for(y=0;y<u.subObjects.length;y++){var p=u.subObjects[y];s.extend(p._bounds)}else u instanceof o.PlottingObject&&s.extend(u._bounds)}t=s.getCenter()}0!==this.getSelectedFeatures().length&&this.unselectFeatures();var h=this._map.getPlottingLayers();for(var c in i)if(i[c]instanceof o.PlottingObject&&(e=i[c].clone()),0!==arguments.length&&null!==t){for(var y=0,g=h.length;y<g;y++)i[c].layer===h[y]&&h[y].addFeatures(e);if(e instanceof a.Route||e.move(arguments[0].lat-t.lat,arguments[0].lng-t.lng),this.selectFeatures(e),i[c]&&i[c].geoSymbolTexts)for(S=0;S<i[c].geoSymbolTexts.length;S++){(P=i[c].geoSymbolTexts[S].getSymbolData()).associatedUuid=e.uuid;for(var y in i)if(i[y].symbolType===SuperMap.Plot.SymbolType.SYMBOLTEXT||i[y].symbolType===SuperMap.Plot.SymbolType.SYMBOLTEXT1){d=i[c].layer.createSymbol(P.libID,P.code,null,{symbolData:P});this.selectFeatures(d),i.splice(y,1);break}}if(i[c]&&i[c].deployments)for(S=0;S<i[c].deployments.length;S++){(P=i[c].deployments[S].getSymbolData()).associatedUuid=e.uuid;for(var y in i)if(i[y].symbolType===SuperMap.Plot.SymbolType.NAVYDEPLOYMENT||i[y].symbolType===SuperMap.Plot.SymbolType.AIRDEPLOYMENT){f=i[c].layer.createSymbol(P.libID,P.code,null,{symbolData:P});this.selectFeatures(f),i.splice(y,1);break}}if(i[c]&&i[c].timeWindows)for(S=0;S<i[c].timeWindows.length;S++){(P=i[c].timeWindows[S].getSymbolData()).associatedUuid=e.uuid;for(var y in i)if(i[y].symbolType===SuperMap.Plot.SymbolType.SATELLITETIMEWINDOWS){m=i[c].layer.createSymbol(P.libID,P.code,null,{symbolData:P});this.selectFeatures(m),i.splice(y,1);break}}}else for(var y=0,g=h.length;y<g;y++)if(i[c].layer===h[y]){if(h[y].addFeatures(e),1012!==e.code&&this.selectFeatures(e),i[c]&&i[c].geoSymbolTexts)for(S=0;S<i[c].geoSymbolTexts.length;S++){(P=i[c].geoSymbolTexts[S].getSymbolData()).associatedUuid=e.uuid;for(var y in i)if(i[y].symbolType===SuperMap.Plot.SymbolType.SYMBOLTEXT||i[y].symbolType===SuperMap.Plot.SymbolType.SYMBOLTEXT1){var d=i[c].layer.createSymbol(P.libID,P.code,null,{symbolData:P});this.selectFeatures(d),i.splice(y,1);break}}if(i[c]&&i[c].deployments)for(S=0;S<i[c].deployments.length;S++){(P=i[c].deployments[S].getSymbolData()).associatedUuid=e.uuid;for(var y in i)if(i[y].symbolType===SuperMap.Plot.SymbolType.NAVYDEPLOYMENT||i[y].symbolType===SuperMap.Plot.SymbolType.AIRDEPLOYMENT){var f=i[c].layer.createSymbol(P.libID,P.code,null,{symbolData:P});this.selectFeatures(f),i.splice(y,1);break}}if(i[c]&&i[c].timeWindows)for(var S=0;S<i[c].timeWindows.length;S++){if(!i[c].timeWindows[S].hasOwnProperty("symbolType"))return;var P=i[c].timeWindows[S].getSymbolData();P.associatedUuid=e.uuid;for(var y in i)if(i[y].symbolType===SuperMap.Plot.SymbolType.SATELLITETIMEWINDOWS){var m=i[c].layer.createSymbol(P.libID,P.code,null,{symbolData:P});this.selectFeatures(m),i.splice(y,1);break}}}}},pasteToPositionAndLayer:function(t,e){var i=!0;e&&e instanceof u.PlottingLayer&&(i=!1);var o=!1;null!==t&&void 0!==t||(o=!0);var n=null,s=this.pasteGeoAry.slice();if(!o){for(var l=new L.LatLngBounds,r=0;r<s.length;r++){var p=s[r];p instanceof a.Route&&l.extend(p._bounds),l.extend(p._bounds)}n=l.getCenter()}for(c=0;c<this.selectedFeatures.length;c++){var h=this.selectedFeatures[c];this.unselectFeatures(h)}this.selectedFeatures=[];for(var c=0;c<s.length;c++)if(!0!==(h=s[c]).layer.isLocked&&!1!==h.layer.isEditable){var y=null;if(y=h instanceof a.Route?h.route.clone():h.clone(),i?h.layer.addFeatures(y):e.addFeatures(y),o||null===n||y instanceof a.Route||y.move(t.lat-n.lat,t.lng-n.lng),void 0!==this.pasteGeoSel&&this.pasteGeoSel.length>c&&!0===this.pasteGeoSel[c])if(h instanceof a.Route){var g=y.getNodeFeature(y.getNodeByUuid(h.routeNode.id));this.selectedFeatures(g)}else this.selectFeatures(y);if(s[c]&&s[c].geoSymbolTexts)for(S=0;S<s[c].geoSymbolTexts.length;S++){(P=s[c].geoSymbolTexts[S].getSymbolData()).associatedUuid=y.uuid;for(var r in s)if(s[r].symbolType===SuperMap.Plot.SymbolType.SYMBOLTEXT||s[r].symbolType===SuperMap.Plot.SymbolType.SYMBOLTEXT1){var d=s[c].layer.createSymbol(P.libID,P.code,null,{symbolData:P});this.selectFeatures(d),s.splice(r,1);break}}if(s[c]&&s[c].deployments)for(S=0;S<s[c].deployments.length;S++){(P=s[c].deployments[S].getSymbolData()).associatedUuid=y.uuid;for(var r in s)if(s[r].symbolType===SuperMap.Plot.SymbolType.NAVYDEPLOYMENT||s[r].symbolType===SuperMap.Plot.SymbolType.AIRDEPLOYMENT){var f=s[c].layer.createSymbol(P.libID,P.code,null,{symbolData:P});this.selectFeatures(f),s.splice(r,1);break}}if(s[c]&&s[c].timeWindows)for(var S=0;S<s[c].timeWindows.length;S++){var P=s[c].timeWindows[S].getSymbolData();P.associatedUuid=y.uuid;for(var r in s)if(s[r].symbolType===SuperMap.Plot.SymbolType.SATELLITETIMEWINDOWS){var m=s[c].layer.createSymbol(P.libID,P.code,null,{symbolData:P});this.selectFeatures(m),s.splice(r,1);break}}}}});L.Map.include({getPlotEditControl:function(){return this._plotEditControl?this._plotEditControl:null}});var y=e.editControl=function(t){return new c(t)};L.supermap.plotting.editControl=y},function(t,e,i){"use strict";L.Canvas.include({_drawPlottingGraphics:function(t){var e=this;e._ctx.clearRect(0,0,e._ctx.canvas.width,e._ctx.canvas.height),t.map(function(t){var i=e._map.latLngToLayerPoint(t.getLatLng()),o=i.x-t.getImage().anchor.x,n=i.y-t.getImage().anchor.y,s=t.getImage().img||t.getImage().canvas;return t.graphicHeight&&t.graphicWidth?e._ctx.drawImage(s,o,n,t.graphicHeight,t.graphicWidth):e._ctx.drawImage(s,o,n),t})},_drawPlottingLayers:function(t){t.map(function(t){t instanceof L.Polyline&&t._update(),t instanceof L.Polygon&&t._update()})},_updateTextPt:function(t,e){var i=e.options,o=1;100!==i.fontPercent&&(o=i.fontPercent/100),this._ctx.fillStyle=i.fontColor,!0===i.fontStroke&&(this._ctx.strokeStyle=i.fontStrokeColor,this._ctx.setLineDash([]),this._ctx.lineWidth=i.fontStrokeWidth),this._ctx.globalAlpha=i.fontOpacity||1;var n=[i.fontStyle?i.fontStyle:"normal","normal",i.fontWeight?i.fontWeight:"normal",i.fontSize?i.fontSize+"px":"1em",i.fontFamily?i.fontFamily:"sans-serif"].join(" "),s=i.text.split("\n"),a=s.length;if(this._ctx.fillText){this._ctx.font=n,this._ctx.textAlign=L.Canvas.LABEL_ALIGN[i.labelAlign[0]]||"center",this._ctx.textBaseline=L.Canvas.LABEL_ALIGN[i.labelAlign[1]]||"middle";var l=L.Canvas.LABEL_FACTOR[i.labelAlign[1]];null==l&&(l=-.5);var r=this._ctx.measureText("Mg").height||this._ctx.measureText("xx").width;t.y+=r*l*(a-1);for(var u=0;u<a;u++)if(0!=i.fontSpace){var p=0,h=this._ctx.measureText(s[u]).width+i.fontSpace*(s[u].length-1),c=i.labelAlign[0]||"c";"c"===c?p-=h/2-this._ctx.measureText(s[u][0]).width/2:"r"===c&&(p-=h-i.fontSize);var y=0,g=s[u].split(""),d="";this._ctx.save(),this._ctx.translate(t.x,t.y),0!=i.labelRotation&&this._ctx.rotate(i.labelRotation*Math.PI/180),this._ctx.scale(o,1);for(var f=0;f<g.length;f++)!0===i.fontStroke&&this._ctx.strokeText(g[f],p+y,r*u),this._ctx.fillText(g[f],p+y,r*u),d+=g[f],y=this._ctx.measureText(d).width+parseFloat(i.fontSpace)*(f+1);this._ctx.restore()}else this._ctx.save(),this._ctx.translate(t.x,t.y),0!=i.labelRotation&&this._ctx.rotate(i.labelRotation*Math.PI/180),this._ctx.scale(o,1),!0===i.fontStroke&&this._ctx.strokeText(s[u],0,r*u),this._ctx.fillText(s[u],0,r*u),this._ctx.restore()}},_updateText:function(t){if(void 0!=t.options.text&&!(t.options.fontSize<6)){for(var e in t._eventParents)if(t._eventParents[e].symbolType===SuperMap.Plot.SymbolType.DOTSYMBOL&&!1===t._eventParents[e].textDisplay)return;void 0===t.options.fontPercent&&(t.options.fontPercent=100),t.options.fontPercent<0&&(t.options.fontPercent=0),t.options.fontPercent>400&&(t.options.fontPercent=400),void 0===t.options.fontSpace&&(t.options.fontSpace=0),t.options.fontSpace>30?t.options.fontSpace=30:t.options.fontSpace<0&&(t.options.fontSpace=0);var i=t._latlng,o=this._map.latLngToLayerPoint(i);if(void 0!=o){if(t.options.labelXOffset||t.options.labelYOffset){var n=isNaN(t.options.labelXOffset)?0:t.options.labelXOffset,s=isNaN(t.options.labelYOffset)?0:t.options.labelYOffset;o.x+=n,o.y-=s}if(!0===t.options.fontBackground){this._ctx.font=[t.options.fontStyle?t.options.fontStyle:"normal","normal",t.options.fontWeight?t.options.fontWeight:"normal",t.options.fontSize?t.options.fontSize+"px":"1em",t.options.fontFamily?t.options.fontFamily:"sans-serif"].join(" ");var a=t.options.labelRotation;t.options.labelRotation=0;var l=t.getPxBounds();t.options.labelRotation=a;var r=l.min.x,u=l.min.y,p=l.max.x-l.min.x,h=l.max.y-l.min.y;this._ctx.fillStyle=t.options.fontBackgroundColor,this._ctx.globalAlpha=1,this._ctx.save(),this._ctx.translate(r,u),0!=t.options.labelRotation&&this._ctx.rotate(t.options.labelRotation*Math.PI/180),this._ctx.fillRect(0,0,p,h),this._ctx.restore()}if(!0===t.options.fontShadow){var c=L.point(o.x,o.y);if(t.options.fontShadowOffsetX&&(c.x+=t.options.fontShadowOffsetX),t.options.fontShadowOffsetY&&(c.y+=t.options.fontShadowOffsetY),0!==t.options.labelRotation){var y=o.x,g=o.y,d=t.options.labelRotation*Math.PI/180,f=Math.sqrt(Math.pow(c.x-y,2)+Math.pow(c.y-g,2)),S=d+Math.atan2(c.y-g,c.x-y);c.x=y+f*Math.cos(S),c.y=g+f*Math.sin(S)}var P=t.options.fontStroke;t.options.fontStroke=!1;var m=t.options.fontColor;t.options.fontColor=t.options.fontShadowColor,this._updateTextPt(c,t),t.options.fontColor=m,t.options.fontStroke=P}this._updateTextPt(o,t)}}},_updateImage:function(t){var e=this,i=function(){var t=this.style,i=t.graphicWidth||t.graphicHeight,o=t.graphicHeight||t.graphicWidth;i=i||2*t.pointRadius,o=o||2*t.pointRadius;var n=void 0!==t.graphicXOffset?t.graphicXOffset:-.5*i,s=void 0!==t.graphicYOffset?t.graphicYOffset:-.5*o,a=t.graphicOpacity||t.fillOpacity,l=this.point,r=l.x,u=l.y;if(!isNaN(r)&&!isNaN(u)){e._ctx.save();var p;t.rotation&&(p=t.rotation/180*Math.PI),e._ctx.translate(r,u),p&&e._ctx.rotate(p),e._ctx.translate(n,s),e._ctx.globalAlpha=a;var h=L.Canvas.drawImageScaleFactor||(L.Canvas.drawImageScaleFactor=/android 2.1/.test(navigator.userAgent.toLowerCase())?320/window.screen.width:1);e._ctx.drawImage(this.img,0,0,i*h,o*h),e._ctx.restore()}},o=new Image;"firefox"==SuperMap.Browser.name?(o.onload=function(){i.call({point:t._point,style:t.options,img:o}),o.onload=null},t.options.graphicTitle&&(o.title=t.options.graphicTitle),o.src=t.options.externalGraphic):(t.options.graphicTitle&&(o.title=t.options.graphicTitle),o.onload=function(){o.src=t.options.externalGraphic,i.call({point:t._point,style:t.options,img:o}),o.onload=null}),window.ActiveXObject||"ActiveXObject"in window?o.onload():o.complete&&o.onload()},_updateArc:function(t){if(this._drawing&&!t._empty()){var e=t._point,i=this._ctx,o=t._radius,n=(t._radiusY||o)/o,s=(360-t.options.endAngle)*(Math.PI/180),a=(360-t.options.startAngle)*(Math.PI/180);this._drawnLayers[t._leaflet_id]=t,1!==n&&(i.save(),i.scale(1,n)),i.beginPath(),i.arc(e.x,e.y/n,o,s,a,!1),1!==n&&i.restore(),this._fillStroke(i,t)}},_handleMouseHover:function(t,e){var i,o=null;for(var n in this._map._layers)if((i=this._map._layers[n])._drawFirst)for(var s=i._drawFirst;s;s=s.next)s.layer.options.interactive&&s.layer._containsPoint(e)&&!this._map._draggableMoved(s.layer)&&(o=s.layer);o!==this._hoveredLayer&&(this._handleMouseOut(t),o&&(L.DomUtil.addClass(this._container,"leaflet-interactive"),this._fireEvent([o],t,"mouseover"),this._hoveredLayer=o)),this._hoveredLayer&&this._fireEvent([this._hoveredLayer],t)},_onClick:function(t){var e,i=this._map.mouseEventToLayerPoint(t),o=[],n=[];for(var s in this._map._layers)if(this._map._layers[s]._drawFirst)for(var a=this._map._layers[s]._drawFirst;a;a=a.next)if(a.layer.options.interactive&&a.layer._containsPoint(i)&&!this._map._draggableMoved(a.layer)&&(e=a.layer).hasOwnProperty("_eventParents")&&null!==e._eventParents)for(var l in e._eventParents)n.push(e),o.push(e._eventParents[l]);if(e&&n.length>1){if(o.length>0){for(var r=!1,u=[],p=[],s=0,h=o.length;s<h;s++)o[s].isSelected&&o[s].moveend&&(r=!0),o[s].enableEdit&&(u.push(o[s]),p.push(n[s]));for(var s=0,c=u.length;s<c;s++){if(L.DomEvent.fakeStop(t),u[s].isSelected&&u[s].moveend){u[s].moveend=!1,this._fireEvent([p[s]],t),u[s].moveend=!0;break}if(u[s].isSelected&&u.length>1){this._fireEvent([p[s]],t);break}if(!r){this._fireEvent([p[p.length-1]],t);break}}}}else e&&(L.DomEvent.fakeStop(t),this._fireEvent([e],t))}}),L.Polyline.prototype._containsPoint=function(t,e){var i,o,n,s,a,l,r=this._clickTolerance()+5;if(!this._pxBounds.contains(t))return!1;for(i=0,s=this._parts.length;i<s;i++)for(o=0,n=(a=(l=this._parts[i]).length)-1;o<a;n=o++)if((e||0!==o)&&L.LineUtil.pointToSegmentDistance(t,l[n],l[o])<=r)return!0;return!1},L.supermap.plotting.Text.prototype._containsPoint=function(t){return this._pxBounds.contains(t)},L.supermap.plotting.PointImage.prototype._containsPoint=function(t){return this._pxBounds.contains(t)},L.Canvas.LABEL_ALIGN={l:"left",r:"right",t:"hanging",b:"alphabetic"},L.Canvas.LABEL_FACTOR={l:0,r:-1,t:0,b:-1},L.Canvas.drawImageScaleFactor=null},function(t,e,i){"use strict";L.SVG.include({_drawPlottingLayers:function(t){t.map(function(t){t instanceof L.Polyline&&t._update(),t instanceof L.Polygon&&t._update()})},getEvents:function(){var t=L.Renderer.prototype.getEvents.call(this);return t.zoomstart=this._onZoomStart,t.click=this._onClick,t.mousemove=this._onMousemove,t.mousedown=this._onMousedown,t},_fireFeatureEvt:function(t){var e=this;for(var i in t.target._targets){var o=t.target._targets[i];if(o.hasOwnProperty("_eventParents")&&null!==o._eventParents&&Object.values(o._eventParents)[0]instanceof L.supermap.plotting.PlottingObject&&o._bounds.isValid()&&o._bounds.contains(t.latlng)&&0!==function(t){for(var i=[],o=e._map.getPlottingLayers(),n=0,s=o.length;n<s;n++){var a=o[n]._getFeatureFromEvent(t);if(a){i.push(a);break}}return i}(t).length){if(function(t){for(var e in t._eventParents){var i=t._eventParents[e];return!(!i.hasOwnProperty("isFirstAdd")||!0!==i.isFirstAdd||(i.isFirstAdd=null,delete i.isFirstAdd,0))}}(o))break;o.fire(t.type,t,o);break}}},_onClick:function(t){t.target instanceof L.Map&&this._fireFeatureEvt(t),L.DomEvent.stopPropagation(t)},_onMousemove:function(t){this._map.dragging&&!1===this._map.dragging._enabled||(this._map._panes.overlayPane.style.width="0px",this._map._panes.overlayPane.style.height="0px",t.target instanceof L.Map&&this._fireFeatureEvt(t),L.DomEvent.stopPropagation(t))},_onMousedown:function(t){this._map.dragging&&!1===this._map.dragging._enabled&&this._map.dragging.enable(),t.target instanceof L.Map&&this._fireFeatureEvt(t),L.DomEvent.stopPropagation(t)},_updateTextPt:function(t,e,i,o){t.setAttributeNS(null,"x",e.x),t.setAttributeNS(null,"y",e.y),i.options.display&&t.setAttributeNS(null,"display",i.options.display),!0===i.options.fontStroke&&(i.options.fontStrokeColor&&t.setAttributeNS(null,"stroke",i.options.fontStrokeColor),i.options.fontStrokeWidth&&t.setAttributeNS(null,"stroke-width",i.options.fontStrokeWidth)),i.options.labelRotation&&t.setAttributeNS(null,"transform","rotate("+i.options.labelRotation+" "+e.x+","+e.y+")"),i.options.fontColor&&t.setAttributeNS(null,"fill",i.options.fontColor),i.options.fontOpacity&&t.setAttributeNS(null,"opacity",i.options.fontOpacity),i.options.fontFamily&&t.setAttributeNS(null,"font-family",i.options.fontFamily),i.options.fontSize&&t.setAttributeNS(null,"font-size",i.options.fontSize),i.options.fontWeight&&t.setAttributeNS(null,"font-weight",i.options.fontWeight),i.options.fontStyle&&t.setAttributeNS(null,"font-layer.options",i.options.fontStyle);var n;if(L.Browser.gecko){if(100!==i.options.fontPercent&&0!==i.options.fontSpace&&(n=i.options.fontSpace+i.options.fontPercent/100*parseFloat(i.options.fontSize)*i.options.text.length),100!==i.options.fontPercent&&0===i.options.fontSpace){var s=document.createElement("span");document.body.appendChild(s),s.style.width="auto",s.style.height="auto",i.options.fontSize&&(s.style.fontSize=new String(i.options.fontSize)+"px"),i.options.fontFamily&&(s.style.fontFamily=i.options.fontFamily),i.options.fontWeight&&(s.style.fontWeight=i.options.fontWeight),s.style.position="absolute",s.style.visibility="hidden",s.innerHTML=i.options.text;var a=s.clientWidth;n=i.options.fontPercent/100*a+i.options.text.length}t.setAttributeNS(null,"textLength",n),t.setAttributeNS(null,"lengthAdjust","spacingAndGlyphs")}t.setAttributeNS(null,"pointer-events","visible");var l=i.options.labelAlign||"cm";t.setAttributeNS(null,"text-anchor",L.SVG.LABEL_ALIGN[l[0]]||"middle"),!0===L.Browser.gecko&&t.setAttributeNS(null,"dominant-baseline",L.SVG.LABEL_ALIGN[l[1]]||"central");for(var r=i.options.text.split("\n"),u=r.length;t.childNodes.length>u;)t.removeChild(t.lastChild);for(var p=0;p<u;p++){var h=e.x;if(0!=i.options.fontSpace){m=SuperMap.PlotUtil.getTextWidth(i.options,r[p]);"c"===l[0]?h-=m/2:"r"===l[0]&&(h-=m);for(var c=0,y=r[p].split(""),g="",d=0;d<y.length;d++){S=o+"tspan"+p+d;i._tspanNodeObj&&i._tspanNodeObj[S]||(i._tspanNodeObj[S]=L.SVG.create("tspan"));P=i._tspanNodeObj[S];!1===L.Browser.gecko&&P.setAttributeNS(null,"baseline-shift",L.SVG.LABEL_VSHIFT[l[1]]||"-41.5%");var f=SuperMap.PlotUtil.getTextWidth(i.options,y[d]);P.setAttributeNS(null,"textLength",f),P.setAttributeNS(null,"lengthAdjust","spacingAndGlyphs"),P.setAttribute("x",h+c+f/2),0!==d?P.setAttribute("dy","0em"):0==p?(null==(b=L.SVG.LABEL_VFACTOR[l[1]])&&(b=-.5),P.setAttribute("dy",b*(u-1)+"em")):P.setAttribute("dy","1em");M=""===y[d]?" ":y[d];i.options.isUnicode?L.Browser.ie||L.Browser.ielt9?(this.element.innerHTML=M,P.textContent=this.element.innerHTML):P.innerHTML=M:P.textContent=M,P.parentNode||t.appendChild(P),g+=y[d],c=SuperMap.PlotUtil.getTextWidth(i.options,g)+parseFloat(i.options.fontSpace)*(i.options.fontPercent/100)}}else{var S=o+"tspan"+p;i._tspanNodeObj&&i._tspanNodeObj[S]||(i._tspanNodeObj[S]=L.SVG.create("tspan"));var P=i._tspanNodeObj[S];if(!1===L.Browser.gecko&&P.setAttributeNS(null,"baseline-shift",L.SVG.LABEL_VSHIFT[l[1]]||"-41.5%"),100!==i.options.fontPercent){var m=SuperMap.PlotUtil.getTextWidth(i.options,r[p]);P.setAttributeNS(null,"textLength",m),P.setAttributeNS(null,"lengthAdjust","spacingAndGlyphs")}if(P.setAttribute("x",e.x),0==p){var b=L.SVG.LABEL_VFACTOR[l[1]];null==b&&(b=-.5),P.setAttribute("dy",b*(u-1)+"em")}else P.setAttribute("dy","1em");var M=""===r[p]?" ":r[p];i.options.isUnicode?L.Browser.ie||L.Browser.ielt9?(this.element.innerHTML=M,P.textContent=this.element.innerHTML):P.innerHTML=M:P.textContent=M,P.parentNode||t.appendChild(P)}}t.parentNode||this._rootGroup.appendChild(t)},_updateText:function(t){if(t.options.text&&0!==t.options.text.length)if(t.options.fontSize<6||t.options.fontPercent<=0)t._removeNode();else{for(var e in t._eventParents)if(t._eventParents[e].symbolType===SuperMap.Plot.SymbolType.DOTSYMBOL&&!1===t._eventParents[e].textDisplay)return void t._removeNode();void 0===t.options.fontPercent&&(t.options.fontPercent=100),t.options.fontPercent<0&&(t.options.fontPercent=0),t.options.fontPercent>400&&(t.options.fontPercent=400),void 0===t.options.fontSpace&&(t.options.fontSpace=0),t.options.fontSpace>30?t.options.fontSpace=30:t.options.fontSpace<0&&(t.options.fontSpace=0);var i=t._latlng,o=this._map.latLngToLayerPoint(i);if(void 0!=o){if(L.Browser.ie||L.Browser.ielt9){var n=.35*parseFloat(t.options.fontSize);o.y=o.y-n}if(t.options.labelXOffset||t.options.labelYOffset){var s=isNaN(t.options.labelXOffset)?0:t.options.labelXOffset,a=isNaN(t.options.labelYOffset)?0:t.options.labelYOffset;o.x+=s,o.y-=a}if(!0===t.options.fontShadow){t._shadowTextNode&&t._shadowTextNode.parentNode||(t._shadowTextNode=L.SVG.create("text"),this._rootGroup.appendChild(t._shadowTextNode));var l=L.point(o.x,o.y);if(t.options.fontShadowOffsetX&&(l.x+=t.options.fontShadowOffsetX),t.options.fontShadowOffsetY&&(l.y+=t.options.fontShadowOffsetY),0!==t.options.labelRotation){var r=o.x,u=o.y,p=t.options.labelRotation*Math.PI/180,h=Math.sqrt(Math.pow(l.x-r,2)+Math.pow(l.y-u,2)),c=p+Math.atan2(l.y-u,l.x-r);l.x=r+h*Math.cos(c),l.y=u+h*Math.sin(c)}var y=t.options.fontStroke;t.options.fontStroke=!1;var g=t.options.fontColor;t.options.fontColor=t.options.fontShadowColor,this._updateTextPt(t._shadowTextNode,l,t,"shadow"),t.options.fontColor=g,t.options.fontStroke=y}else t._shadowTextNode&&t._shadowTextNode.parentNode&&(this._rootGroup.removeChild(t._shadowTextNode),delete t._shadowTextNode);if(t._textNode&&t._textNode.parentNode||(t._textNode=L.SVG.create("text"),this._rootGroup.appendChild(t._textNode),t.options.interactive&&L.DomUtil.addClass(t._textNode,"leaflet-interactive"),t.addInteractiveTarget(t._textNode)),this._updateTextPt(t._textNode,o,t,"label"),!0===t.options.fontBackground){var d=t._shadowTextNode;if(d&&d.parentNode||(d=t._textNode),!d||!d.parentNode)return;t._backgroundTextNode&&t._backgroundTextNode.parentNode||(t._backgroundTextNode=L.SVG.create("rect"),!0===t.options.fontShadow?this._rootGroup.insertBefore(t._backgroundTextNode,t._shadowTextNode):this._rootGroup.insertBefore(t._backgroundTextNode,t._textNode));var f=t._textNode.getBBox();t._backgroundTextNode.x.baseVal.value=f.x,t._backgroundTextNode.y.baseVal.value=f.y,t._backgroundTextNode.width.baseVal.value=f.width,t._backgroundTextNode.height.baseVal.value=f.height,t._backgroundTextNode.style.fill=t.options.fontBackgroundColor,t.options.labelRotation&&t._backgroundTextNode.setAttributeNS(null,"transform","rotate("+t.options.labelRotation+" "+o.x+","+o.y+")")}else t._backgroundTextNode&&t._backgroundTextNode.parentNode&&(this._rootGroup.removeChild(t._backgroundTextNode),delete t._backgroundTextNode)}else t._removeNode()}else t._removeNode()},_updateImage:function(t){if(t._imageNode&&t._imageNode.parentNode||(t._imageNode=L.SVG.create("image"),this._rootGroup.appendChild(t._imageNode)),t._imageNode.setAttributeNS(null,"cx",t._point.x),t._imageNode.setAttributeNS(null,"cy",t._point.y),t._imageNode.setAttributeNS(null,"r",1),t._imageNode.style.visibility="",t.options.graphicTitle){t._imageNode.setAttributeNS(null,"title",t.options.graphicTitle);var e=L.SVG.create("title");e.textContent=style.graphicTitle,t._imageNode.appendChild(e)}t.options.graphicWidth&&t.options.graphicHeight&&t._imageNode.setAttributeNS(null,"preserveAspectRatio","none");var i=t.options.graphicWidth||t.options.graphicHeight,o=t.options.graphicHeight||t.options.graphicWidth;i=i||2*t.options.pointRadius,o=o||2*t.options.pointRadius;var n=void 0!=t.options.graphicXOffset?t.options.graphicXOffset:-.5*i,s=void 0!=t.options.graphicYOffset?t.options.graphicYOffset:-.5*o,a=t.options.graphicOpacity||t.options.fillOpacity;t._imageNode.setAttributeNS(null,"x",(t._point.x+n).toFixed()),t._imageNode.setAttributeNS(null,"y",(t._point.y+s).toFixed()),t._imageNode.setAttributeNS(null,"width",i),t._imageNode.setAttributeNS(null,"height",o),t._imageNode.setAttributeNS("http://www.w3.org/1999/xlink","href",t.options.externalGraphic),t._imageNode.setAttributeNS(null,"style","opacity: "+a),t._imageNode.onclick=L.SVG.preventDefault;var l=t.options.rotation;void 0===l&&void 0===t._imageNode._rotation||!t._point||(t._imageNode._rotation=l,l|=0,t._imageNode.setAttributeNS(null,"transform","rotate("+l+" "+t._point.x+" "+t._point.y+")")),t._imageNode.setAttributeNS(null,"fill","none"),t._imageNode.setAttributeNS(null,"stroke","none"),t.options.pointerEvents?(t._imageNode.setAttributeNS(null,"pointer-events",t.options.pointerEvents),t._imageNode.style.pointerEvents=t.options.pointerEvents):(t._imageNode.setAttributeNS(null,"pointer-events","visiblepainted"),t._imageNode.style.pointerEvents="visiblepainted"),null!=t.options.cursor&&t._imageNode.setAttributeNS(null,"cursor",style.cursor)},_updateArc:function(t){if(this._drawing&&!t._empty()){var e=t._point,i=t._radius,o="a"+i+","+(t._radiusY||i)+" 0 1,0 ";sRadian=(360-t.options.endAngle)*(Math.PI/180),eRadian=(360-t.options.startAngle)*(Math.PI/180);var n=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+o+2*i+",0 "+o+2*-i+",0 ";this._setPath(t,n)}}}),L.SVG.LABEL_ALIGN={l:"start",r:"end",b:"bottom",t:"hanging"},L.SVG.LABEL_VSHIFT={t:"-83%",b:"0"},L.SVG.LABEL_VFACTOR={t:0,b:-1},L.SVG.preventDefault=function(t){t.preventDefault&&t.preventDefault()}},function(t,e,i){"use strict";var o=i(9);i(136),i(4);L.Map.include({getFeatureByUuid:function(t){var e=[];for(var i in this._layers)if(this._layers[i]instanceof o.PlottingLayer){var n=this._layers[i].getFeatureByUuid(t);null!==n&&e.push(n)}return 0===e.length?null:e[0]},getPlottingLayers:function(){var t=[],e=this._layers;for(var i in e)e[i]instanceof o.PlottingLayer&&t.push(e[i]);return t},clearPlottingLayers:function(){var t=this._layers;for(var e in t)t[e]instanceof o.PlottingLayer&&(t[e].removeAllFeatures(),this.removeLayer(t[e]))},getLayersByName:function(t){return this.getLayersBy("name",t)},getLayersBy:function(t,e){return this.getBy("_layers",t,e)},getBy:function(t,e,i){var o="function"==typeof i.test,n=[];for(var s in this[t])n.push(this[t][s]);return SuperMap.Array.filter(n,function(t){return t[e]===i||o&&i.test(t[e])})},latLngToLayerPoint:function(t){return this.project(L.latLng(t))._subtract(this.getPixelOrigin())}})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.plottingGraphicLayer=e.PlottingGraphicLayer=void 0;var o=i(134),n=i(135),s=i(137),a=e.PlottingGraphicLayer=L.Path.extend({cacheImages:null,graphics:null,_tempDrawingLayer:null,_currentLatLng:null,options:{renderer:L.canvas()},initialize:function(t){this._tempDrawingLayer=new s.GraphicEditLayer("temportary"),t=t||{},L.Util.setOptions(this,t),this.cacheImages={},this.graphics=[],this.selectGraphics=[]},getEvents:function(){var t={click:this._handleClick,mousemove:this._onMapMouseMove};return this._map._zoomAnimated&&(t.zoomanim=this._zoomAnim),t},_zoomAnim:function(t){var e=this._map.getZoomScale(t.zoom),i=this._map._getCenterOffset(t.center)._multiplyBy(-e).subtract(this._map._getMapPanePos());L.DomUtil.setTransform?L.DomUtil.setTransform(this._canvas,i,e):L.DomUtil.setPosition(this._canvas,i)},_onMapMouseMove:function(t){var e=this._getGraphicsInBounds();if(0!==e.length)for(var i=0,o=e.length;i<o;i++){var n=this._map.latLngToLayerPoint(e[i].getLatLng()),s=L.point(n.x-e[i].getImage().anchor.x,n.y-e[i].getImage().anchor.y),a=L.point(n.x+(e[i].getImage().size[0]-e[i].getImage().anchor.x),n.y+(e[i].getImage().size[1]-e[i].getImage().anchor.y));if(L.bounds(s,a).contains(this._map.latLngToLayerPoint(t.latlng))){this._tempDrawingLayer._renderer._container.style.cursor=e[i].getImage().feature.isSelected?"move":"pointer";break}this._tempDrawingLayer._renderer._container.style.cursor=""}},addFeatures:function(t){L.Util.isArray(t)||(t=[t]);for(var e=0,i=t.length;e<i;e++){var s=t[e],a=this._generateFromFeature(s);if(this.cacheImages[a]){this.cacheImages[a].imgCount++;var l=new o.DotSymbolStyle(s);l.canvas=this.cacheImages[a].img.canvas,l.anchor=this.cacheImages[a].img.anchor,l.size=this.cacheImages[a].img.size,l.pxBounds=this.cacheImages[a].img.pxBounds,this.graphics[e]=new n.PlottingGraphic({_latlng:s.getLatLngs()[0],_image:l,_uuid:a})}else{if(0===s.components.length){this._tempDrawingLayer.addFeatures(s);var r=new o.DotSymbolStyle(s);r.render(),this.cacheImages[a]={img:r.getCacheInfo(),imgCount:1},this.graphics[e]=new n.PlottingGraphic({_latlng:s.getLatLngs()[0],_image:r,_uuid:a})}this._tempDrawingLayer.removeFeatures(s)}this.graphics[e].layer=this,s.graphic=this.graphics[e]}this._update()},removeGraphics:function(t){L.Util.isArray(t)||(t=[t]);var e=this;t.map(function(t){var i=SuperMap.Util.indexOf(e.selectGraphics,t);-1!==i&&(t.updateImage(),e._tempDrawingLayer.removeFeatures(t.getImage().feature),e.selectGraphics.splice(i,1));var o=t.getUuid();e.cacheImages[o]&&0==--e.cacheImages[o].imgCount&&delete e.cacheImages[o],-1!==(i=SuperMap.Util.indexOf(e.graphics,t))&&e.graphics.splice(i,1),e._renderer._clear()}),this._update()},updateGraphics:function(t){L.Util.isArray(t)||(t=[t]);var e=this;t.map(function(t){var i=t.getUuid();e.cacheImages[i]&&0==--e.cacheImages[i].imgCount&&delete e.cacheImages[i],e._renderer._clear(),i=e._generateFromFeature(t.getImage().feature),e.cacheImages[i]||(t.getImage().render(),t.setUuid(i),t.setLatLng(t.getImage().feature.getLatLngs()[0]),e.cacheImages[i]={img:t.getImage().getCacheInfo(),imgCount:1})}),this._update()},removeAllGraphics:function(){var t=this;if(0!==this.selectGraphics.length)for(var e=0,i=this.selectGraphics.length;e<i;e++)this.selectGraphics[e].updateImage(),t._tempDrawingLayer.removeFeatures(this.selectGraphics[e].getImage().feature);this.selectGraphics=[],this.graphics=[],this.cacheImages={},this._update()},_generateFromFeature:function(t){return(t.libID+t.code+Math.round(t.symbolSize.w)+Math.round(t.symbolSize.h)+t.textContent+t.annotationPosition+t.style.color+t.style.weight+t.style.opacities+t.dashArray+t.fill+t.fillColor+t.dRotate).toString()},onAdd:function(){this._canvas=document.createElement("canvas");var t=this._map.getPixelBounds().getSize().x,e=this._map.getPixelBounds().getSize().y;this._canvas.width=t,this._canvas.height=e,this._ctx=this._canvas.getContext("2d"),L.Path.prototype.onAdd.call(this),this._map.addLayer(this._tempDrawingLayer)},onRemove:function(){L.Path.prototype.onRemove.call(this),this._map.removeLayer(this._tempDrawingLayer)},_update:function(){this._map&&this._updatePath()},_containsPoint:function(t){return!1},_updatePath:function(){this._renderer._drawPlottingGraphics(this._getGraphicsInBounds())},_project:function(){var t=this;t._getGraphicsInBounds().map(function(e){var i=t._map.latLngToLayerPoint(e.getLatLng()),o=L.point(i.x-e.getImage().anchor.x,i.y-e.getImage().anchor.y),n=L.point(i.x+(e.getImage().size[0]-e.getImage().anchor.x),i.y+(e.getImage().size[1]-e.getImage().anchor.y));e._pxBounds=L.bounds(o,n)}),t._pxBounds=L.bounds(L.point(0,0),L.point(this._canvas.width,this._canvas.height))},_getGraphicsInBounds:function(){var t=[],e=this._map.getBounds();return this.graphics.map(function(i){e.contains(i.getLatLng())&&t.push(i)}),t},_handleClick:function(t){var e=this;if(0!==this.selectGraphics.length)for(var i=0,o=this.selectGraphics.length;i<o;i++)this.selectGraphics[i].updateImage(),e._tempDrawingLayer.removeFeatures(this.selectGraphics[i].getImage().feature);this.selectGraphics=[];for(var n=e._getGraphicsInBounds(),s=0,o=n.length;s<o;s++){var a=e._map.latLngToLayerPoint(n[s].getLatLng()),l=L.point(a.x-n[s].getImage().anchor.x,a.y-n[s].getImage().anchor.y),r=L.point(a.x+(n[s].getImage().size[0]-n[s].getImage().anchor.x),a.y+(n[s].getImage().size[1]-n[s].getImage().anchor.y));if(L.bounds(l,r).contains(e._map.latLngToLayerPoint(t.latlng))){this.selectGraphics.push(n[s]);var u=e._generateFromFeature(n[s].getImage().feature);e.cacheImages[u]&&0==--e.cacheImages[u].imgCount&&delete e.cacheImages[u],e._tempDrawingLayer.addFeatures(n[s].getImage().feature),e._map.getPlotEditControl()&&(n[s].getImage().feature.enableEdit||e._map.getPlotEditControl().enableEditFeatures(n[s].getImage().feature),e._map.getPlotEditControl().selectFeatures(n[s].getImage().feature));break}}e._map.getPlotEditControl()&&(e._map.getPlotEditControl()._onTriggerMapClick=!1),L.DomEvent.stopPropagation(t)}}),l=e.plottingGraphicLayer=function(t){return new a(t)};L.supermap.plotting.graphicLayer=l},function(t,e,i){"use strict";var o=i(1),n=i(15),s=i(38),a=i(122),l=i(36),r=i(123),u=i(124),p=i(128),h=i(7),c=i(120),y=i(125),g=i(129),d=i(130),f=i(131),S=i(132),P=i(37),m=i(118),b=i(18),M=i(17),v=i(127),_=i(126),T=i(119),x=i(16),O=i(121),A=i(14);i(4);L.supermap.plotting.PlottingObject.createSymbol=function(t,e,i,w,D,E){w||(w={}),w.custom=E;var I=null;if(0===t)switch(e){case SuperMap.Plot.SymbolType.ARCREGION:I=new O.ArcRegion(t,e,i,w);break;case SuperMap.Plot.SymbolType.MISSILEROUTE:I=new _.MissileRoute(t,e,i,w);break;case SuperMap.Plot.SymbolType.NAVYROUTE:I=new v.NavyRoute(t,e,i,w);break;case SuperMap.Plot.SymbolType.AIRROUTE:I=new T.AirRoute(t,e,i,w);break;case SuperMap.Plot.SymbolType.LITERATESIGN:I=new M.LiterateSign(t,e,i,w);break;case SuperMap.Plot.SymbolType.ROUTENODE:I=new b.RouteNode(t,e,i,w);break;case SuperMap.Plot.SymbolType.ARROWLINE:I=new a.ArrowLine(t,e,i,w);break;case SuperMap.Plot.SymbolType.COMBINATIONALCIRCLE:I=new r.CombinationalCircle(t,e,i,w);break;case SuperMap.Plot.SymbolType.CONCENTRICCIRCLE:I=new u.ConcentricCircle(t,e,i,w);break;case SuperMap.Plot.SymbolType.POLYGONREGION:I=new p.PolygonRegion(t,e,i,w);break;case SuperMap.Plot.SymbolType.PATHTEXT:I=new s.PathText(t,e,i,w);break;case SuperMap.Plot.SymbolType.LINERELATION:I=new l.LineRelation(t,e,i,w);break;case SuperMap.Plot.SymbolType.GROUPOBJECT:I=new h.GroupObject(t,e,i,w);break;case SuperMap.Plot.SymbolType.ANNOFRAMESYMBOL:case SuperMap.Plot.SymbolType.ANNOFRAMESYMBOLM:case SuperMap.Plot.SymbolType.LINEMARKING:case SuperMap.Plot.SymbolType.SYMBOLTEXTBOX:I=new c.AnnotationFrame(t,e,i,w);break;case SuperMap.Plot.SymbolType.INTERFERENCEBEAM:I=new y.InterferenceBeam(t,e,i,w);break;case SuperMap.Plot.SymbolType.SATELLITE:I=new g.Satellite(t,e,i,w);break;case SuperMap.Plot.SymbolType.SATELLITETIMEWINDOWS:I=new d.SatelliteTimeWindows(t,e,i,w);break;case SuperMap.Plot.SymbolType.SYMBOLTEXT:I=new f.SymbolText(t,e,i,w);break;case SuperMap.Plot.SymbolType.SYMBOLTEXT1:I=new S.SymbolText1(t,e,i,w);break;case SuperMap.Plot.SymbolType.FLAGGROUP:I=new x.FlagGroup(t,e,i,w);break;case SuperMap.Plot.SymbolType.NAVYDEPLOYMENT:I=new P.NavyDeployment(t,e,i,w);break;case SuperMap.Plot.SymbolType.AIRDEPLOYMENT:I=new m.AirDeployment(t,e,i,w);break;case SuperMap.Plot.SymbolType.AVOIDREGION:return new A.AvoidRegion(t,e,i,w);default:I=new o.AlgoSymbol(t,e,i,w)}else I=w.symbolType===SuperMap.Plot.SymbolType.DOTSYMBOL||w.symbolData&&w.symbolData.symbolType===SuperMap.Plot.SymbolType.DOTSYMBOL?new n.DotSymbol(t,e,i,w):new o.AlgoSymbol(t,e,i,w);return SuperMap.Plot.AnalysisSymbol.mergeDefaultStyleToLayer(I),D&&SuperMap.Util.extend(I.style,D),i&&null!==i&&(SuperMap.Util.isArray(i)||(i=[i]),i.length>I.maxEditPts&&(i=i.slice(0,I.maxEditPts)),I.latLngs=L.Util.cloneLatLngs(i)),I}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Plotting=void 0;!function(t){t&&t.__esModule}(i(104));var o=i(25),n=i(27),s=i(138),a=null,l=e.Plotting=L.Evented.extend({serverUrl:null,map:null,defaultStyle:null,sitDataManager:null,symbolLibManager:null,clientID:null,animationManager:null,initialize:function(t,e,i){t&&null!==t&&(l.prototype.map=t),e&&(l.prototype.serverUrl=e),this.defaultStyle=new SuperMap.Plot.DefaultStyle,this.sitDataManager=new o.SitDataManager(this.map,this.serverUrl),this.symbolLibManager=new n.SymbolLibManager(this.serverUrl),this.animationManager=new s.GOAnimationManager(this.map,this.serverUrl)},destroy:function(){l.prototype.serverUrl=null,l.prototype.map=null,this.defaultStyle&&(this.defaultStyle.destroy(),this.defaultStyle=null),this.sitDataManager&&(this.sitDataManager.destroy(),this.sitDataManager=null),this.symbolLibManager&&(this.symbolLibManager.destroy(),this.symbolLibManager=null),this.clientID=null,null!==this.animationManager&&(this.animationManager.destroy(),this.animationManager=null),a=null},getDefaultStyle:function(){return this.defaultStyle},getSitDataManager:function(){return this.sitDataManager},getSymbolLibManager:function(){return this.symbolLibManager},getGOAnimationManager:function(){return this.animationManager},getClientID:function(){return this.clientID},setClientID:function(t){this.clientID=t},setMap:function(t){l.prototype.map=t,null===this.sitDataManager.map&&(o.SitDataManager.prototype.map=t),null===this.animationManager.map&&this.animationManager.setMap(t)},setPlotUrl:function(t){l.prototype.serverUrl=t,null===this.sitDataManager.serverUrl&&(o.SitDataManager.prototype.serverUrl=t),null===this.symbolLibManager.url&&(n.SymbolLibManager.prototype.url=t),null===this.animationManager.serverUrl&&(s.GOAnimationManager.prototype.serverUrl=t)}});L.supermap.plotting.getControl=function(t,e){return null===a&&(a=new l(t,e)),t&&null!==t&&null===a.map&&a.setMap(t),e&&null!==e&&null===a.serverUrl&&a.setPlotUrl(e),a}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.query=e.Query=void 0;var o=i(4),n=e.Query=L.Class.extend({map:null,initialize:function(t){t&&null!==t&&(this.map=t)},destroy:function(){this.map=null,delete this.map},captureGObject:function(t){var e=[];if(t){for(var i=this.map.getPlottingLayers(),n=0;n<i.length;n++){var s=i[n];for(var a in s.features){var l=s.features[a];l instanceof o.PlottingObject&&l.symbolType===SuperMap.Plot.SymbolType.DOTSYMBOL&&(t.lng===l.getLatLngs()[0].lng&&t.lat===l.getLatLngs()[0].lat&&e.push(l))}}return e}return 0},getGObjectsInPolygon:function(t){var e=[];if(t&&0!==t.length){if(L.Util.isArray(t)||(t=[t]),t.length<=2)return e;for(var i=this.map.getPlottingLayers(),n=0;n<i.length;n++){var s=i[n];for(var a in s.features){var l=s.features[a];if(l instanceof o.PlottingObject){var r=l.getBounds().getCenter();if(null===r)return;this._ptIsInPolygon(t,r)&&e.push(l)}}}return e}},_ptIsInPolygon:function(t,e){if(!t||null===t||0===t.length)return!1;for(var i=0,o=t.length,n=0;n<o;n++){var s=t[n],a=t[(n+1)%o];if(s.lat!==a.lat){var l=s.lat<a.lat?s.lat:a.lat,r=s.lat>a.lat?s.lat:a.lat;e.lat<l||e.lat>r||(e.lat-s.lat)*(a.lng-s.lng)/(a.lat-s.lat)+s.lng>e.lng&&i++}}return i%2==1},getGObjectsInCircle:function(t,e){if(t&&e){for(var i=[],n=this.map.getPlottingLayers(),s=0;s<n.length;s++){var a=n[s];for(var l in a.features){var r=a.features[l];if(r instanceof o.PlottingObject){var u=r.getBounds().getCenter();if(null===u)continue;Math.abs(e)>Math.sqrt(Math.pow(t.lng-u.lng,2)+Math.pow(t.lat-u.lat,2))&&i.push(r)}}}return i}},getGObjectsInRect:function(t,e){if(t&&e){for(var i=[],n=this.map.getPlottingLayers(),s=0;s<n.length;s++){var a=n[s];for(var l in a.features){var r=a.features[l];if(r instanceof o.PlottingObject){var u=r.getBounds().getCenter();if(null===u)continue;t.lng<e.lng&&t.lat>e.lat?u.lng>t.lng&&u.lng<e.lng&&u.lat<t.lat&&u.lat>e.lat&&i.push(r):u.lng<t.lng&&u.lng>e.lng&&u.lat<t.lat&&u.lat>e.lat&&i.push(r)}}}return i}}}),s=e.query=function(t){return new n(t)};L.supermap.plotting.query=s},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.smlFileService=e.SMLFileService=void 0;var n=o(i(101)),s=o(i(98)),a=(o(i(100)),e.SMLFileService=L.supermap.ServiceBase.extend({initialize:function(t,e){L.supermap.ServiceBase.prototype.initialize.call(this,t,e)},getSMLInfos:function(t,e,i){var o=this;return i||(i=o),new n.default(o.url,{eventListeners:{scope:i,processCompleted:e,processFailed:e}}).processAsync(t),o},editSMLFile:function(t,e,i){var o=this;return i||(i=o),new s.default(o.url,{eventListeners:{scope:i,processCompleted:e,processFailed:e}}).processAsync(t),o}})),l=e.smlFileService=function(t,e){return new a(t,e)};L.supermap.smlFileService=l},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.symbolInfoService=e.SymbolInfoService=void 0;var n=o(i(22)),s=(o(i(103)),e.SymbolInfoService=L.supermap.ServiceBase.extend({initialize:function(t,e){L.supermap.ServiceBase.prototype.initialize.call(this,t,e)},getSymbolInfo:function(t,e,i){var o=this;return i||(i=o),new n.default(o.url,{serverType:o.options.serverType,eventListeners:{scope:i,processCompleted:e,processFailed:e}}).processAsync(t),o}})),a=e.symbolInfoService=function(t,e){return new s(t,e)};L.supermap.symbolInfoService=a},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.symbolLibService=e.SymbolLibService=void 0;var n=o(i(20)),s=o(i(21)),a=(o(i(99)),e.SymbolLibService=L.supermap.ServiceBase.extend({initialize:function(t,e){L.supermap.ServiceBase.prototype.initialize.call(this,t,e)},getLibIDs:function(t,e){var i=this;return e||(e=i),new n.default(i.url,{eventListeners:{scope:e,processCompleted:t,processFailed:t}}).processAsync(),i},getLibInfo:function(t,e,i){var o=this;return i||(i=o),new s.default(o.url,{eventListeners:{scope:i,processCompleted:e,processFailed:e}}).processAsync(t),o}})),l=e.symbolLibService=function(t,e){return new a(t,e)};L.supermap.symbolLibService=l},function(t,e,i){"use strict";L.supermap.plotting=L.supermap.plotting||{},L.Util.latLngsToSuperMapPoints=function(t){var e=[];L.Util.isArray(t)||(t=[t]);for(var i=0;i<t.length;i++)e.push(new SuperMap.Geometry.Point(t[i].lng,t[i].lat));return e},L.Util.superMapPointsToLatLngs=function(t){var e=[];L.Util.isArray(t)||(t=[t]);for(var i=0;i<t.length;i++)e.push(L.latLng(t[i].y,t[i].x));return e},L.Util.cloneLatLngs=function(t){var e=[];L.Util.isArray(t)||(t=[t]);for(var i=0;i<t.length;i++)e.push(t[i].clone());return e},L.Util.moveLatLngs=function(t,e,i){L.Util.isArray(t)||(t=[t]);for(var o=0;o<t.length;o++)L.Util.isArray(t[o])?L.Util.moveLatLngs(t[o],e,i):(t[o].lat+=e,t[o].lng+=i)},L.Util.rotateLatLngs=function(t,e,i){L.Util.isArray(t)||(t=[t]);for(var o=i*(Math.PI/180),n=Math.cos(o),s=Math.sin(o),a=0;a<t.length;a++)if(L.Util.isArray(t[a]))L.Util.rotateLatLngs(t[a],e,i);else{var l=t[a].lat-e.lat,r=t[a].lng-e.lng;t[a].lat=r*s+l*n+e.lat,t[a].lng=r*n-l*s+e.lng}},L.Util.resizeLatLngs=function(t,e,i){L.Util.isArray(t)||(t=[t]);for(var o=0;o<t.length;o++)L.Util.isArray(t[o])?L.Util.resizeLatLngs(t[o],e,i):(t[o].lat=e.lat+i*(t[o].lat-e.lat),t[o].lng=e.lng+i*(t[o].lng-e.lng))}},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=o(i(0)),u=(o(i(3)),function(t){function e(t){n(this,e);var i=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.CLASS_NAME="SuperMap.Geometry.AlgoSymbol1001",i.symbolType=SuperMap.Plot.SymbolType.ALGOSYMBOL,i.minEditPts=2,i.maxEditPts=99999,i.symbolName="平行平耳箭头",0===i.getScaleValues().length&&(i.getScaleValues().push(.1),i.getScaleValues().push(.2),i.getScaleValues().push(0),i.getScaleValues().push(.3),i.getScaleValues().push(.08)),i}return a(e,r["default"]),l(e,[{key:"calculateParts",value:function(){this.clearComponents();var t=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints),e=(t=SuperMap.Plot.PlottingUtil.clearSamePts(t)).length;if(e>=this.minEditPts){this.clearScalePoints();var i=SuperMap.Plot.PlottingUtil.clonePoints(t),o=!1;void 0!==i[0].z&&(o=!0);var n=SuperMap.Plot.ArrowToolKit.generateArrowBodyShapePts(t,this.getScaleValues(),SuperMap.Plot.ArrowToolKit.ArrowBodyType.ARROWBODY_PARALLEL),s=n.arrowTouLen,a=n.leftBodyPts,l=n.rightBodyPts,r=[];r.push(a[a.length-1]),r.push(l[l.length-1]);var u=[];u.push(this.getScaleValues()[3]),u.push(this.getScaleValues()[4]),u.push(this.getScaleValues()[0]),u.push(this.getScaleValues()[1]);var p=SuperMap.Plot.ArrowToolKit.generateArrowHeadShapePts(t,r,u,s,SuperMap.Plot.ArrowToolKit.ArrowHeadType.ARROWHEAD_WITHOUT_EAR),h=[];if(o){for(var c=[],y=[],g=[],d=0;d<e-1;d++)y.push({x:a[d].x,y:a[d].y,z:i[d].z}),g.push({x:l[d].x,y:l[d].y,z:i[d].z});var f={x:i[e-2].x,y:i[e-2].y,z:i[e-2].z},S={x:i[e-1].x,y:i[e-1].y,z:i[e-1].z},P=this.ComputeZValue(a[e-1],S,f);y.push({x:a[e-1].x,y:a[e-1].y,z:P});var m=this.ComputeZValue(l[e-1],S,f);g.push({x:l[e-1].x,y:l[e-1].y,z:m});for(d=0;d<p.length;d++){var b=this.ComputeZValue(p[d],S,f);c.push({x:p[d].x,y:p[d].y,z:b})}h=(h=h.concat(y)).concat(c);for(M=g.length-1;M>=0;M--)h.push(g[M]);v=new SuperMap.Geometry.Point((r[0].x+r[1].x)/2,(r[0].y+r[1].y)/2);(_=new SuperMap.Geometry.Point(v.x,v.y)).isScalePoint=!0,_.tag=0,this.addScalePoint(_),(T=new SuperMap.Geometry.Point(a[a.length-1].x,a[a.length-1].y)).isScalePoint=!0,T.tag=1,this.addScalePoint(T),(x=new SuperMap.Geometry.Point(p[0].x,p[0].y)).isScalePoint=!0,x.tag=2,this.addScalePoint(x);for(d=0;d<this.getScalePoints().length;d++){var L=new SuperMap.Geometry.Point(this.getScalePoints()[d].x,this.getScalePoints()[d].y);this.getScalePoints()[d].z=this.ComputeZValue(L,S,f)}}else{h=(h=h.concat(a)).concat(p);for(var M=l.length-1;M>=0;M--)h.push(l[M]);var v=new SuperMap.Geometry.Point((r[0].x+r[1].x)/2,(r[0].y+r[1].y)/2),_=new SuperMap.Geometry.Point(v.x,v.y);_.isScalePoint=!0,_.tag=0,this.addScalePoint(_);var T=new SuperMap.Geometry.Point(a[a.length-1].x,a[a.length-1].y);T.isScalePoint=!0,T.tag=1,this.addScalePoint(T);var x=new SuperMap.Geometry.Point(p[0].x,p[0].y);x.isScalePoint=!0,x.tag=2,this.addScalePoint(x)}this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,h)}}},{key:"modifyPoint",value:function(t,e){if(!0===e.isScalePoint){var i=new SuperMap.Geometry.Point(this.getScalePoints()[0].x,this.getScalePoints()[0].y),o=new SuperMap.Geometry.Point(this.getScalePoints()[1].x,this.getScalePoints()[1].y),n=new SuperMap.Geometry.Point(this.getScalePoints()[2].x,this.getScalePoints()[2].y),s=this.getScaleValues()[0],a=SuperMap.Plot.PlottingUtil.polylineDistance(this.controlPoints),l=a*s;if(0==t){var r=SuperMap.Plot.PlottingUtil.pointProjectToSegment(e,this.controlPoints[this.controlPoints.length-2],this.controlPoints[this.controlPoints.length-1]),u=r.projectPoint;if(r.isOnline){g=SuperMap.Plot.PlottingUtil.distance(u,this.controlPoints[this.controlPoints.length-1]);this.getScaleValues()[0]=g/a}}else if(1==t){var u=SuperMap.Plot.PlottingUtil.pointProjectToSegment(e,o,n).projectPoint,p=SuperMap.Plot.PlottingUtil.distance(u,i);this.getScaleValues()[1]=p/l}else if(2==t){var h=SuperMap.Plot.PlottingUtil.pointProjectToSegment(e,this.controlPoints[1],n).projectPoint,c=SuperMap.Plot.PlottingUtil.pointProjectToSegment(h,i,this.controlPoints[1]),y=c.projectPoint,g=SuperMap.Plot.PlottingUtil.distance(y,i);!0===c.inOnline?this.getScaleValues()[4]=-g/l:this.getScaleValues()[4]=g/l}}this.calculateParts()}}]),e}());e.default=u,SuperMap.Geometry.AlgoSymbol1001=u},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=o(i(0)),u=(o(i(3)),o(i(33)),function(t){function e(t){n(this,e);var i=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.MIN_GEOPT_COUNT=2,i.MAX_GEOPT_COUNT=1024,i.SV1_defaultATLenDivABLen=0,i.SV2_defaultAYPosScale=.65,i.SV_AJCtrl=.6,i.SV_ArrowWoCtrl=.6,i.SV2_DefaultAJWidDiviedByATLen=.148,i.SV3_DefaultAEWidDividedByATLen=.4,i.SV4_DefaultAELenDividedByATLen=.3,i.SV_ATScaleParameter=1.25,i.SV_ATLenDividedByATWid=1.35,i.SV_ATWidDividedByArrowWeiWid=.5,i.AB_VERTEX_COUNT=4,i.MIN_PTCOUNT_PERARROW=3,i.ATL_DIV_AWW=.7,i.ATL_DIV_ABL=.12,i.ATL_DIV_ABL_1=.18,i.DEFAULT_ARROW_TAIL_POS=.12,i.DUOJIANTOU_TAIL_RATE_1=8,i.DUOJIANTOU_TAIL_RATE_2=3,i.DUOJIANTOU_TAIL_RATE_3=.6,i.AB_CTRLPT_RATE1=0,i.AB_CTRLPT_RATE2=3,i.AB_CTRLPT_RATE3=.5,i.MIN_SCALEVALUE=.1,i.MAX_SCALEVALUE=1,i.m_scalePoints=null,i.CLASS_NAME="SuperMap.Geometry.AlgoSymbol1002",i.symbolType=SuperMap.Plot.SymbolType.ALGOSYMBOL,i.symbolName="多箭头",i.minEditPts=3,i.maxEditPts=512,i.clearScalePoints(),i.m_scalePoints=[],i}return a(e,r["default"]),l(e,[{key:"calculateParts",value:function(){this.clearComponents(),this.m_scalePoints=[];var t=SuperMap.Plot.PlottingUtil.clearSamePts(this.controlPoints);if((t=SuperMap.Plot.PlottingUtil.clearSamePts(t)).length>=2&&t.length<this.minEditPts&&this.calAssistantLine(),!(t.length<this.minEditPts)){var e=this.operateCtrlPts(t),i=e.length,o=Math.floor(i/this.MIN_PTCOUNT_PERARROW),n=this.getScaleValues().length;if(n<2*o-1){0==n&&(this.getScaleValues().push(this.SV1_defaultATLenDivABLen),n++);for(var s=2*o-1-n,a=0;a<s;a+=2)this.getScaleValues().splice(n/2+1,0,this.SV1_defaultATLenDivABLen),this.getScaleValues().splice(this.getScaleValues().length,0,this.SV2_defaultAYPosScale)}else if(n>2*o-1){for(a=0;a<o;a++)this.getScaleValues().push(this.SV1_defaultATLenDivABLen);for(a=0;a<o-1;a++)this.getScaleValues().push(this.SV2_defaultAYPosScale)}var l=this.arrowMeshs(e);SuperMap.Plot.PlottingUtil.clearSamePts(l.shapePts);var r=!1;if(void 0!==t[0].z&&(r=!0),r){var u=this.operateCtrlPts3D(t),p=l.arrLeftPts2D,h=l.arrRightPts2D,c=l.arrHeadPts2D;l.shapePts;if(o!=p.length&&o!=h.length&&o!=c.length)return!1;for(var y=[],a=0;a<o;a++){for(var g=[],d=3*a;d<3*(a+1)&&d<u.length;d++)g.push(u[d]);y.push(g)}for(var f=[],S=[],P=[],a=0;a<o;a++)if(!(2>y[a].length)){for(var m=p[a][p[a].length-1],b=h[a][0],L=new SuperMap.Geometry.Point(.5*(m.x+b.x),.5*(m.y+b.y)),M=y[a][y[a].length-1],v=y[a][y[a].length-2],_=this.ComputeZValue(L,M,v),T={x:L.x,y:L.y,z:_},x=[],O=[],A=0;A<y[a].length-1;A++)if(0==a)O.push(y[a][A]);else{D={x:y[a][A].x,y:y[a][A].y,z:.5*(y[a][A].z+y[a-1][A].z)};O.push(D)}O.push(T),this.ComputeBeizerZValueByDis(O,p[a],x),f.push(x),x=[];var w=[];w.push(T);for(A=y[a].length-2;A>=0;A--)if(a==o-1)w.push(y[a][A]);else{var D={x:y[a][A].x,y:y[a][A].y,z:.5*(y[a][A].z+y[a+1][A].z)};w.push(D)}this.ComputeBeizerZValueByDis(w,h[a],x),S.push(x),x=[];for(var E=c[a],A=0;A<E.length;A++){_=this.ComputeZValue(E[A],M,v);x.push({x:E[A].x,y:E[A].y,z:_})}P.push(x)}for(var I=[],a=0;a<o;a++)I=(I=(I=I.concat(f[a])).concat(P[a])).concat(S[a]);return SuperMap.Plot.PlottingUtil.clearSamePts(I),l.shapePts.length>0&&this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,I,{surroundLineFlag:!1}),this.clearScalePoints(),this.setScalePoints(this.getScalePoints().concat(this.m_scalePoints)),!0}l.shapePts.length>0&&this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,l.shapePts,{surroundLineFlag:!1}),this.clearScalePoints();for(a=0;a<this.m_scalePoints.length;a++)this.m_scalePoints[a].isScalePoint=!0,this.m_scalePoints[a].tag=a,this.addScalePoint(this.m_scalePoints[a])}}},{key:"modifyPoint",value:function(t,e){if(!0===e.isScalePoint){var i=this.operateCtrlPts(this.controlPoints),o=i.length,n=Math.floor(o/this.MIN_PTCOUNT_PERARROW),s=0;if(t<n){var a=[],l=t*this.MIN_PTCOUNT_PERARROW;a[0]=i[l],a[1]=i[l+1],a[2]=i[l+2];var r=SuperMap.Plot.PlottingUtil.polylineDistance(a),u=new SuperMap.Geometry.Point(0,0),p=new SuperMap.Geometry.Point(0,0),h=new SuperMap.Geometry.Point(0,0);SuperMap.Plot.PlottingUtil.getTrianglePoints(this.AB_CTRLPT_RATE1,this.AB_CTRLPT_RATE2,a[0],a[1],a[2],u,p),SuperMap.Plot.PlottingUtil.getTrapezoidPoints(this.AB_CTRLPT_RATE3,a[2],a[1],p,h);(L=SuperMap.Plot.PlottingUtil.triangleHeightAndPartBottomLen(a[2],h,e)).dLen2;s=(M=L.dLen1)/(this.SV4_DefaultAELenDividedByATLen+1)/r}else{var c=[],y=[],g=(t-n)*this.MIN_PTCOUNT_PERARROW;c[0]=i[g],c[1]=i[g+1],c[2]=i[g+2];var d=(t-n+1)*this.MIN_PTCOUNT_PERARROW;y[0]=i[d],y[1]=i[d+1],y[2]=i[d+2];var f=new SuperMap.Geometry.Point(0,0),S=new SuperMap.Geometry.Point(0,0),P=new SuperMap.Geometry.Point(0,0);f.x=.5*(c[2].x+y[2].x),S.x=.5*(c[1].x+y[1].x),P.x=.5*(c[0].x+y[0].x),f.y=.5*(c[2].y+y[2].y),S.y=.5*(c[1].y+y[1].y),P.y=.5*(c[0].y+y[0].y);var m=SuperMap.Plot.PlottingUtil.distance(f,S),b=SuperMap.Plot.PlottingUtil.distance(P,S),L=SuperMap.Plot.PlottingUtil.triangleHeightAndPartBottomLen(f,S,e),M=(L.dLen2,L.dLen1);M<m?s=M/(m+b):((L=SuperMap.Plot.PlottingUtil.triangleHeightAndPartBottomLen(S,P,e)).dLen2,s=((M=L.dLen1)+m)/(m+b))}s>this.MAX_SCALEVALUE?s=this.MAX_SCALEVALUE:s<this.MIN_SCALEVALUE&&(s=this.MIN_SCALEVALUE),this.getScaleValues()[t]=s}this.calculateParts()}},{key:"arrowMeshs",value:function(t){var e=[],i=[],o=[],n=[],s=new SuperMap.Plot.Path2D,a=t.length,l=Math.floor(a/this.MIN_PTCOUNT_PERARROW),r=this.generateAWWidth(l,t),u=[],p=[],h=(new SuperMap.Geometry.Point(0,0),0),c=0,y=0,g=[];for(c=0,y=0;c<l;c++,y+=this.MIN_PTCOUNT_PERARROW){g[0]=t[y],g[1]=t[y+1],g[2]=t[y+2],h=this.getScaleValues()[c];var d=this.generateArrowBodyPts(g,r[c],h);h=d.dATLenDivABLen,u[c]=d.arrowBodyPts,p.push(h)}var f=[],S=0,P=0,m=0,b=[],L=[];for(c=0;c<l-1;c++,P+=this.MIN_PTCOUNT_PERARROW){m=P+this.MIN_PTCOUNT_PERARROW,b[0]=t[P],b[1]=t[P+1],b[2]=t[P+2],L[0]=t[m],L[1]=t[m+1],L[2]=t[m+2],S=this.getScaleValues()[l+c];var M=this.generateAYPts(b,u[c],L,u[c+1],S);f.push(M.arrowLeftYaoPts),f.push(M.arrowRightYaoPts)}var v=[],_=u[0],T=[],x=0,O=[];s.MoveTo(_[0]),s.CurveTo(_[1],_[2],_[3]),s.CurveTo(_[4],_[5],_[6]),s.ToSubPathPolygons(T),i.push(T[0]),x=T[0].length;for(I=7;I<10;I++)s.LineTo(_[I]);for(T=[],s.ToSubPathPolygons(T);x<T[0].length;x++)O.push(T[0][x]);for(n.push(O),v.push(_[0]),v.push(t[0]),c=1,y=this.MIN_PTCOUNT_PERARROW;c<l;c++,y+=this.MIN_PTCOUNT_PERARROW){var A=u[c],w=c+c-2,D=f[w];for(s.LineTo(D[0]),s.CurveTo(D[1],D[2],D[3]),T=[],O=[],s.ToSubPathPolygons(T);x<T[0].length;x++)O.push(T[0][x]);o.push(O);var E=f[w+1];for(s.CurveTo(E[1],E[2],E[3]),T=[],O=[],s.ToSubPathPolygons(T);x<T[0].length;x++)O.push(T[0][x]);i.push(O);for(var I=7;I<10;I++)s.LineTo(A[I]);for(T=[],O=[],s.ToSubPathPolygons(T);x<T[0].length;x++)O.push(T[0][x]);n.push(O),v.push(t[y].clone())}var N=u[l-1];for(s.LineTo(N[10]),s.CurveTo(N[11],N[12],N[13]),s.CurveTo(N[14],N[15],N[16]),T=[],O=[],s.ToSubPathPolygons(T);x<T[0].length;x++)O.push(T[0][x]);o.push(O),v.push(N[16]);var C=[];return s.ToSubPathPolygons(C),e=C[0],{shapePts:e,arrLeftPts2D:i,arrRightPts2D:o,arrHeadPts2D:n}}},{key:"operateCtrlPts",value:function(t){var e=SuperMap.Plot.PlottingUtil.clonePoints(t),i=e.length,o=Math.floor(i/this.MIN_PTCOUNT_PERARROW),n=i%this.MIN_PTCOUNT_PERARROW,s=new SuperMap.Geometry.Point;if(2==n&&(s.x=.5*(e[i-2].x+e[i-1].x),s.y=.5*(e[i-2].y+e[i-1].y),s.x==e[i-1].x&&s.y==e[i-1].y||(e.push(e[i-1].clone()),e[i-1]=s,i++,o++)),i>3)for(var a=o-1,l=0,r=a;l<a;r--,l++)for(var u=r*this.MIN_PTCOUNT_PERARROW,p=0;p<u;p+=this.MIN_PTCOUNT_PERARROW)if(!SuperMap.Plot.PlottingUtil.isRight(e[p+3],e[p+1],e[p+2])){var h=e[p];e[p]=e[p+3],e[p+3]=h,h=e[p+1],e[p+1]=e[p+4],e[p+4]=h,h=e[p+2],e[p+2]=e[p+5],e[p+5]=h}return e}},{key:"operateCtrlPts3D",value:function(t){var e=t,i=e.length,o=Math.floor(i/this.MIN_PTCOUNT_PERARROW),n={x:0,y:0,z:0};if(2==i%3&&(n.x=.5*(e[i-2].x+e[i-1].x),n.y=.5*(e[i-2].y+e[i-1].y),n.z=.5*(e[i-2].z+e[i-1].z),n.x==e[i-1].x&&n.y==e[i-1].y&&n.z==e[i-1].z||(e.push(e[i-1]),e[i-1]=n,i++,o++)),i>3)for(var s=o-1,a=0,l=s;a<s;l--,a++)for(var r=3*l,u=0;u<r;u+=3)if(!SuperMap.Plot.PlottingUtil.isRight(e[u+3],e[u+1],e[u+2])){var p=e[u];e[u]=e[u+3],e[u+3]=p,p=e[u+1],e[u+1]=e[u+4],e[u+4]=p,p=e[u+2],e[u+2]=e[u+5],e[u+5]=p}return e}},{key:"generateAWWidth",value:function(t,e){var i=[];if(t>0)if(1==t)i.push(0);else{var o=SuperMap.Plot.PlottingUtil.distance(e[0],e[this.MIN_PTCOUNT_PERARROW]);i.push(o);for(var n=1,s=this.MIN_PTCOUNT_PERARROW;n<t-1;n++,s+=this.MIN_PTCOUNT_PERARROW)o=.5*(SuperMap.Plot.PlottingUtil.distance(e[s-this.MIN_PTCOUNT_PERARROW],e[s])+SuperMap.Plot.PlottingUtil.distance(e[s],e[s+this.MIN_PTCOUNT_PERARROW])),i.push(o);o=SuperMap.Plot.PlottingUtil.distance(e[s-this.MIN_PTCOUNT_PERARROW],e[s]),i.push(o)}return i}},{key:"generateArrowBodyPts",value:function(t,e,i){var o=[],n=[],s=[],a=[],l=[],r=[],u=[],p=t.length-1;if(p<2)return i=0,{dATLenDivABLen:i,arrowBodyPts:o};var h=i,c=this.SV2_DefaultAJWidDiviedByATLen,y=this.SV3_DefaultAEWidDividedByATLen,g=this.SV4_DefaultAELenDividedByATLen,d=SuperMap.Plot.PlottingUtil.clonePoints(t),f=SuperMap.Plot.PlottingUtil.polylineDistance(d),S=0==e?f*this.ATL_DIV_ABL_1:(f+e)*this.ATL_DIV_ABL,P=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(S,d[1],d[0]);n[1]=P.pntLeft.clone(),s[1]=P.pntRight.clone();var m=0;m=SuperMap.Plot.PlottingUtil.equalFuzzy(h,0,1e-14)?S*this.ATL_DIV_AWW:f*h;var b=SuperMap.Plot.PlottingUtil.distance(d[1],d[2]);m+m>b&&(m=.5*b);var L=m*c;d.push(d[p].clone());var M=0,v=0;M=f-m;var _=[],T=0;for(T=2;T<=p;T++)v+=SuperMap.Plot.PlottingUtil.distance(d[T-1],d[T-2]),SuperMap.Plot.PlottingUtil.equalFuzzy(M,0,1e-14)?_[T]=0:SuperMap.Plot.PlottingUtil.equalFuzzy(M-v,0,1e-14)?_[T]=L:_[T]=L+(S-L)*Math.pow((M-v)/M,this.SV_ATScaleParameter);_[p+1]=L;var x=new SuperMap.Geometry.Point(0,0),O=new SuperMap.Geometry.Point(0,0),A=new SuperMap.Geometry.Point(0,0);for(T=2;T<=p;T++){SuperMap.Plot.PlottingUtil.getTrianglePoints(this.AB_CTRLPT_RATE1,this.AB_CTRLPT_RATE2,d[T-2],d[T-1],d[T],O,A),p==T&&SuperMap.Plot.PlottingUtil.getTrapezoidPoints(this.AB_CTRLPT_RATE3,d[p],d[p-1],A,x);P=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(_[T],O,d[T-1]);s[T]=P.pntLeft,n[T]=P.pntRight}var w=x.clone();if(SuperMap.Plot.PlottingUtil.distance(d[p],w)>0){var D=SuperMap.Plot.PlottingUtil.getIncentrePointOnSegmentByScale(m,d[p],x);d[p]=D.clone()}P=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(L,d[p+1],d[p]);for(n[p+1]=P.pntLeft,s[p+1]=P.pntRight,T=2;T<=p;T++)SuperMap.Plot.PlottingUtil.getTrianglePoints(this.AB_CTRLPT_RATE2,this.AB_CTRLPT_RATE2,n[T-1],n[T],n[T+1],O,A),a[T]=O.clone(),l[T]=A.clone(),SuperMap.Plot.PlottingUtil.getTrianglePoints(this.AB_CTRLPT_RATE2,this.AB_CTRLPT_RATE2,s[T-1],s[T],s[T+1],O,A),r[T]=O.clone(),u[T]=A.clone();SuperMap.Plot.PlottingUtil.getTrapezoidPoints(this.AB_CTRLPT_RATE3,n[1],n[2],a[2],x),l[1]=x.clone(),SuperMap.Plot.PlottingUtil.getTrapezoidPoints(this.AB_CTRLPT_RATE3,s[1],s[2],r[2],x),u[1]=x.clone();var E,I;I=SuperMap.Plot.PlottingUtil.distance(n[p+1],n[p])*(1/3),(E=SuperMap.Plot.PlottingUtil.getExcentrePointOnSegmentByScale(I,d[p],d[p+1])).x+=n[p+1].x-d[p].x,E.y+=n[p+1].y-d[p].y,I=(S-L)*Math.pow(I/M,this.SV_ATScaleParameter+.3),P=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(I,n[p+1],E),a[p+1]=P.pntLeft.clone(),I=SuperMap.Plot.PlottingUtil.distance(s[p+1],s[p])*(1/3),(E=SuperMap.Plot.PlottingUtil.getExcentrePointOnSegmentByScale(I,d[p],d[p+1])).x+=s[p+1].x-d[p].x,E.y+=s[p+1].y-d[p].y,I=(S-L)*Math.pow(I/M,this.SV_ATScaleParameter+.3),P=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(I,s[p+1],E),r[p+1]=P.pntRight.clone();var N=[],C=m*g,R=SuperMap.Plot.PlottingUtil.getExcentrePointOnSegmentByScale(C,d[p],d[p+1]);this.m_scalePoints.push(R.clone()),C=m*y,P=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(C,d[p+1],R),N.push(P.pntRight),N.push(d[p+1]),N.push(P.pntLeft);var U=[];for(U.push(n[p+1]),T=p;T>=1;T--)U.push(a[T+1]),U.push(l[T]),U.push(n[T]);var G=[];for(T=1;T<=p;T++)G.push(s[T]),G.push(u[T]),G.push(r[T+1]);G.push(s[p+1]),o.push.apply(o,G),o.push.apply(o,N),o.push.apply(o,U),i=m/f;var B=[];for(T=U.length-1;T>=0;T--)B.push(U[T]);return{dATLenDivABLen:i,arrowBodyPts:o}}},{key:"generateAYPts",value:function(t,e,i,o,n){var s=new SuperMap.Geometry.Point(.5*(t[2].x+i[2].x),.5*(t[2].y+i[2].y)),a=new SuperMap.Geometry.Point(.5*(t[1].x+i[1].x),.5*(t[1].y+i[1].y)),l=new SuperMap.Geometry.Point(.5*(t[0].x+i[0].x),.5*(t[0].y+i[0].y)),r=SuperMap.Plot.PlottingUtil.distance(s,a),u=SuperMap.Plot.PlottingUtil.distance(l,a),p=n*(r+u),h=new SuperMap.Geometry.Point(0,0),c=new SuperMap.Geometry.Point(0,0),y=new SuperMap.Geometry.Point(0,0);if(p>r){p=r+u-p,h=SuperMap.Plot.PlottingUtil.getIncentrePointOnSegmentByScale(p,l,a);var g=SuperMap.Plot.PlottingUtil.distance(t[1],t[0]),d=SuperMap.Plot.PlottingUtil.distance(i[1],i[0]);g=g*p/u,c=SuperMap.Plot.PlottingUtil.getIncentrePointOnSegmentByScale(g,t[0],t[1]),d=d*p/u,y=SuperMap.Plot.PlottingUtil.getIncentrePointOnSegmentByScale(d,i[0],i[1])}else{h=SuperMap.Plot.PlottingUtil.getIncentrePointOnSegmentByScale(p,s,a);var f=SuperMap.Plot.PlottingUtil.distance(t[1],t[2]),S=SuperMap.Plot.PlottingUtil.distance(i[1],i[2]);f=f*p/r,c=SuperMap.Plot.PlottingUtil.getIncentrePointOnSegmentByScale(f,t[2],t[1]),S=S*p/r,y=SuperMap.Plot.PlottingUtil.getIncentrePointOnSegmentByScale(S,i[2],i[1])}this.m_scalePoints.push(h.clone());var P=this.SV_ArrowWoCtrl*SuperMap.Plot.PlottingUtil.distance(h,c),m=this.SV_ArrowWoCtrl*SuperMap.Plot.PlottingUtil.distance(h,y),b=SuperMap.Plot.PlottingUtil.getIncentrePointOnSegmentByScale(P,h,c),L=SuperMap.Plot.PlottingUtil.getIncentrePointOnSegmentByScale(m,h,y),M=e[11].clone(),v=e[10].clone(),_=o[5].clone(),T=o[6].clone(),x=SuperMap.Plot.PlottingUtil.intersectLines(v,M,h,c),O=SuperMap.Plot.PlottingUtil.distance(x.intersectPoint,v),A=SuperMap.Plot.PlottingUtil.distance(v,h);O=O>A?this.SV_AJCtrl*A:this.SV_AJCtrl*O;var w=SuperMap.Plot.PlottingUtil.getIncentrePointOnSegmentByScale(O,v,M);M=w.clone(),e[11]=w.clone(),x=SuperMap.Plot.PlottingUtil.intersectLines(T,_,h,y),O=(O=SuperMap.Plot.PlottingUtil.distance(x.intersectPoint,T))>(A=SuperMap.Plot.PlottingUtil.distance(T,h))?this.SV_AJCtrl*A:this.SV_AJCtrl*O,_=(w=SuperMap.Plot.PlottingUtil.getIncentrePointOnSegmentByScale(O,T,_)).clone(),o[5]=w.clone();var D=[];D.push(v),D.push(M),D.push(b),D.push(h);var E=[];return E.push(h),E.push(L),E.push(_),E.push(T),{arrowLeftYaoPts:D,arrowRightYaoPts:E}}}]),e}());e.default=u,SuperMap.Geometry.AlgoSymbol1002=u},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=o(i(0)),u=(o(i(3)),function(t){function e(t){n(this,e);var i=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.CLASS_NAME="SuperMap.Geometry.AlgoSymbol1003",i.minEditPts=2,i.maxEditPts=2,i.symbolName="梯形平耳箭头",0===i.getScaleValues().length&&(i.getScaleValues().push(.3),i.getScaleValues().push(.28),i.getScaleValues().push(.433333),i.getScaleValues().push(.53),i.getScaleValues().push(0)),i}return a(e,r["default"]),l(e,[{key:"calculateParts",value:function(){this.clearComponents();var t=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints),e=(t=SuperMap.Plot.PlottingUtil.clearSamePts(t)).length;if(e>=this.minEditPts){if(SuperMap.Plot.PlottingUtil.equalFuzzy(this.controlPoints[0].x,this.controlPoints[1].x)&&SuperMap.Plot.PlottingUtil.equalFuzzy(this.controlPoints[0].y,this.controlPoints[1].y))return;var i=SuperMap.Plot.PlottingUtil.clonePoints(t),o=!1;void 0!==i[0].z&&(o=!0);var n=SuperMap.Plot.ArrowToolKit.generateArrowBodyShapePts(t,this.getScaleValues(),SuperMap.Plot.ArrowToolKit.ArrowBodyType.ARROWBODY_TRAPEZOID),s=n.arrowTouLen,a=n.leftBodyPts,l=n.rightBodyPts,r=[];r.push(a[a.length-1]),r.push(l[l.length-1]);var u=[];u.push(this.getScaleValues()[3]),u.push(this.getScaleValues()[4]),u.push(0),u.push(0);var p=SuperMap.Plot.ArrowToolKit.generateArrowHeadShapePts(t,r,u,s,SuperMap.Plot.ArrowToolKit.ArrowHeadType.ARROWHEAD_WITHOUT_EAR),h=[];h=(h=h.concat(a)).concat(p);for(var c=l.length-1;c>=0;c--)h.push(l[c]);if(h.push(a[0]),o){for(var y=[],g={x:i[1].x,y:i[1].y,z:i[1].z},d={x:i[0].x,y:i[0].y,z:i[0].z},f=0;f<h.length;f++){L=this.ComputeZValue(h[f],g,d);y.push({x:h[f].x,y:h[f].y,z:L})}M=new SuperMap.Geometry.Point((r[0].x+r[1].x)/2,(r[0].y+r[1].y)/2);(v=new SuperMap.Geometry.Point(M.x,M.y)).isScalePoint=!0,v.tag=0,this.addScalePoint(v),(_=new SuperMap.Geometry.Point(a[a.length-1].x,a[a.length-1].y)).isScalePoint=!0,_.tag=1,this.addScalePoint(_),(T=new SuperMap.Geometry.Point(p[0].x,p[0].y)).isScalePoint=!0,T.tag=2,this.addScalePoint(T);for(var S={x:i[e-1].x,y:i[e-1].y,z:i[e-1].z},P={x:i[e-2].x,y:i[e-2].y,z:i[e-2].z},m=[],f=0;f<this.getScalePoints().length;f++){var b={x:this.getScalePoints()[f].x,y:this.getScalePoints()[f].y},L=this.ComputeZValue(b,S,P);m.push({x:b.x,y:b.y,z:L})}this.clearScalePoints(),this.setScalePoints(m),this.addCell(SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,y)}else{var M=new SuperMap.Geometry.Point((r[0].x+r[1].x)/2,(r[0].y+r[1].y)/2),v=new SuperMap.Geometry.Point(M.x,M.y);v.isScalePoint=!0,v.tag=0,this.addScalePoint(v);var _=new SuperMap.Geometry.Point(a[a.length-1].x,a[a.length-1].y);_.isScalePoint=!0,_.tag=1,this.addScalePoint(_);var T=new SuperMap.Geometry.Point(p[0].x,p[0].y);T.isScalePoint=!0,T.tag=2,this.addScalePoint(T),this.addCell(SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,h)}}}},{key:"modifyPoint",value:function(t,e){if(!0===e.isScalePoint){var i=new SuperMap.Geometry.Point(this.getScalePoints()[0].x,this.getScalePoints()[0].y),o=new SuperMap.Geometry.Point(this.getScalePoints()[1].x,this.getScalePoints()[1].y),n=new SuperMap.Geometry.Point(this.getScalePoints()[2].x,this.getScalePoints()[2].y),s=this.getScaleValues()[0],a=SuperMap.Plot.PlottingUtil.polylineDistance(this.controlPoints),l=a*s;if(0==t){u=(r=SuperMap.Plot.PlottingUtil.pointProjectToSegment(e,this.controlPoints[0],this.controlPoints[1])).projectPoint;if(r.isOnline){d=SuperMap.Plot.PlottingUtil.distance(u,this.controlPoints[1]);this.getScaleValues()[0]=d/a}}else if(1==t){var r=SuperMap.Plot.PlottingUtil.pointProjectToSegment(e,o,n),u=r.projectPoint,p=SuperMap.Plot.PlottingUtil.distance(u,i),h=l*this.getScaleValues()[1];this.getScaleValues()[1]=p/l,this.getScaleValues()[2]=(l*this.getScaleValues()[2]+p-h)/l}else if(2==t){var c=SuperMap.Plot.PlottingUtil.pointProjectToSegment(e,this.controlPoints[1],n).projectPoint,y=SuperMap.Plot.PlottingUtil.pointProjectToSegment(c,i,this.controlPoints[1]),g=y.projectPoint,d=SuperMap.Plot.PlottingUtil.distance(g,i);!0===y.inOnline?this.getScaleValues()[4]=-d/l:this.getScaleValues()[4]=d/l}}this.calculateParts()}}]),e}());e.default=u,SuperMap.Geometry.AlgoSymbol1003=u},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=o(i(0)),u=(o(i(3)),o(i(33)),function(t){function e(t){n(this,e);var i=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.QIANJI_RATE1=9,i.QIANJI_RATE2=20,i.QIANJI_RATE4=5,i.QIANJI_RATE3=1/3,i.QIANJI_TAIL_RATE1=8,i.QIANJI_TAIL_RATE2=3,i.QIANJI_TAIL_RATE3=.6,i.SV1_Default=.25,i.SV1_MinValue=0,i.SV1_MaxValue=.5,i.DEFAULT_ARROW_TAIL_POS=.4,i.SCALE_VALUE_COUNT=1,i.MIN_LEN_LeftToRightCenter=1e-7,i.SCALE_AT=1/3,i.SCALE_ATAJ=1/7,i.SCALE_ATAE=1/3,i.SCALE_AW=2/3,i.SCALE_ATAJctrlDefSide=.8,i.SCALE_ATAJctrlSameSide=2/3,i.SCALE_MM_LEFT=.25,i.SCALE_MM_RIGHT=.75,i.BEZIER_K1=1/3,i.QIANJI_OPERATE_RATE1=1,i.m_dMaxDis=0,i.m_bIsAnimation=!1,i.m_scalePoints=[],i.CLASS_NAME="SuperMap.Geometry.AlgoSymbol1006",i.symbolType=SuperMap.Plot.SymbolType.ALGOSYMBOL,i.symbolName||(i.symbolName="钳击箭头"),i.minEditPts=3,i.maxEditPts=4,i.clearScalePoints(),0===i.getScaleValues().length&&i.getScaleValues().push(i.SV1_Default),i.m_dMaxDis=0,i.m_bIsAnimation=!1,i.m_scalePoints=[],i}return a(e,r["default"]),l(e,[{key:"calculateParts",value:function(){this.clearComponents(),this.m_scalePoints=[];var t=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints);if((t=SuperMap.Plot.PlottingUtil.clearSamePts(t)).length>=2&&t.length<this.minEditPts&&this.calAssistantLine(),!(t.length<this.minEditPts)){var e=SuperMap.Plot.PlottingUtil.clonePoints(t),i=e.length,o=!1;void 0!==e[0].z&&(o=!0);var n=this.arrowMeshs(t);if(o){for(var s=[],a=0;a<i;a++)s.push(e[a]);var l=n.LeftArowLeftBody,r=n.LeftArowHead,u=n.LeftArowRightBody,p=n.RightArowLeftBody,h=n.RightArowHead,c=n.RightArowRightBody;if(0==l.length)return!1;var y=[],g=[],d=[];if(3==s.length)l[0].x==s[0].x&&l[0].y==s[0].y?(g.push(s[0]),g.push(s[2]),d.push(s[1]),d.push(s[2])):(g.push(s[1]),g.push(s[2]),d.push(s[0]),d.push(s[2]));else{if(4!=s.length)return!1;l[0].x==s[0].x&&l[0].y==s[0].y?(g.push(s[0]),d.push(s[1])):(g.push(s[1]),d.push(s[0])),r[1].x==s[2].x&&r[1].y==s[2].y?(g.push(s[2]),d.push(s[3])):(g.push(s[3]),d.push(s[2]))}var f=new SuperMap.Geometry.Point;f=SuperMap.Plot.PlottingUtil.pointProjectToSegment(l[l.length-1],{x:g[0].x,y:g[0].y},{x:g[1].x,y:g[1].y}).projectPoint;var S=this.ComputeZValue(f,g[1],g[0]),P=[];this.ComputeHeight(l,P,g[0].z,S),y=y.concat(P);for(a=0;a<r.length;a++){f=SuperMap.Plot.PlottingUtil.pointProjectToSegment(r[a],{x:g[0].x,y:g[0].y},{x:g[1].x,y:g[1].y}).projectPoint;var m=this.ComputeZValue(f,g[1],g[0]);y.push({x:r[a].x,y:r[a].y,z:m})}f=SuperMap.Plot.PlottingUtil.pointProjectToSegment(u[0],{x:g[0].x,y:g[0].y},{x:g[1].x,y:g[1].y}).projectPoint;this.ComputeZValue(f,g[1],g[0]);f=SuperMap.Plot.PlottingUtil.pointProjectToSegment(u[u.length-1],{x:g[0].x,y:g[0].y},{x:g[1].x,y:g[1].y}).projectPoint;var b=this.ComputeZValue(f,g[1],g[0]);f=SuperMap.Plot.PlottingUtil.pointProjectToSegment(p[0],{x:d[0].x,y:d[0].y},{x:d[1].x,y:d[1].y}).projectPoint;var L=(this.ComputeZValue(f,d[1],d[0])+b)/2,M=[];this.ComputeHeight(u,M,S,L),y=y.concat(M),f=SuperMap.Plot.PlottingUtil.pointProjectToSegment(p[p.length-1],{x:d[0].x,y:d[0].y},{x:d[1].x,y:d[1].y}).projectPoint;var v=this.ComputeZValue(f,d[1],d[0]),_=[];this.ComputeHeight(p,_,L,v),y=y.concat(_);for(a=0;a<h.length;a++){f=SuperMap.Plot.PlottingUtil.pointProjectToSegment(h[a],{x:d[0].x,y:d[0].y},{x:d[1].x,y:d[1].y}).projectPoint;var T=this.ComputeZValue(f,d[1],d[0]);y.push({x:h[a].x,y:h[a].y,z:T})}f=SuperMap.Plot.PlottingUtil.pointProjectToSegment(c[0],{x:d[0].x,y:d[0].y},{x:d[1].x,y:d[1].y}).projectPoint;var x=this.ComputeZValue(f,d[1],d[0]),O=[];this.ComputeHeight(c,O,x,d[0].z),(y=y.concat(O)).length>0&&this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,y,{surroundLineFlag:!1}),this.m_scalePoints.length>0&&(this.m_scalePoints[0]={x:this.m_scalePoints[0].x,y:this.m_scalePoints[0].y,z:L});for(a=0;a<this.m_scalePoints.length;a++)this.m_scalePoints[a].isScalePoint=!0,this.m_scalePoints[a].tag=a,this.addScalePoint(this.m_scalePoints[a]);return!0}var A=n.shapePts;A.length>0&&this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,A,{surroundLineFlag:!1}),this.clearScalePoints();for(a=0;a<this.m_scalePoints.length;a++)this.m_scalePoints[a].isScalePoint=!0,this.m_scalePoints[a].tag=a,this.addScalePoint(this.m_scalePoints[a])}}},{key:"modifyPoint",value:function(t,e){if(!0===e.isScalePoint){var i,o=SuperMap.Plot.PlottingUtil.operateControlPoints(this.controlPoints),n=(o.length,new SuperMap.Geometry.Point((o[0].x+o[1].x)/2,(o[0].y+o[1].y)/2)),s=new SuperMap.Geometry.Point((o[2].x+o[3].x)/2,(o[2].y+o[3].y)/2),a=SuperMap.Plot.PlottingUtil.pointProjectToSegment(e,n,s);if(a.isOnline){var l=SuperMap.Plot.PlottingUtil.distance(a.projectPoint,n),r=SuperMap.Plot.PlottingUtil.distance(n,s);(i=SuperMap.Plot.PlottingUtil.equalFuzzy(l,0)?this.SV1_MinValue:l/r)>this.SV1_MaxValue&&(i=this.SV1_MaxValue)}else i=SuperMap.Plot.PlottingUtil.distance(a.projectPoint,n)<SuperMap.Plot.PlottingUtil.distance(a.projectPoint,s)?this.SV1_MinValue:this.SV1_MaxValue;this.clearScaleValues(),this.getScaleValues().push(i)}this.calculateParts()}},{key:"arrowMeshs",value:function(t){var e=new SuperMap.Plot.Path2D,i=(t.length,[]);this.m_bIsAnimation&&4==t.length?i=SuperMap.Plot.PlottingUtil.clonePoints(t):(i=SuperMap.Plot.PlottingUtil.operateControlPoints(t),void 0!==t[0].z&&(i[i.length-1].z=i[i.length-2].z));var o=this.getScaleValues()[0],n=SuperMap.Plot.PlottingUtil.distance(i[0],i[3]),s=SuperMap.Plot.PlottingUtil.distance(i[1],i[2]),a=(i[0].clone(),i[1].clone()),l=.5*(i[0].x+i[3].x),r=.5*(i[0].y+i[3].y),u=new SuperMap.Geometry.Point(l,r),p=.5*(i[1].x+i[2].x),h=.5*(i[1].y+i[2].y),c=new SuperMap.Geometry.Point(p,h),y=SuperMap.Plot.PlottingUtil.distance(u,c);y<this.MIN_LEN_LeftToRightCenter&&(y=this.MIN_LEN_LeftToRightCenter),u.x=l+n*(l-p)/(y*this.QIANJI_RATE1),u.y=r+n*(r-h)/(y*this.QIANJI_RATE1),c.x=p+s*(p-l)/(y*this.QIANJI_RATE1),c.y=h+s*(h-r)/(y*this.QIANJI_RATE1);var g=new SuperMap.Geometry.Point(0,0),d=new SuperMap.Geometry.Point(0,0);g.x=l+n*(l-p)/(y*this.QIANJI_RATE2),g.y=r+n*(r-h)/(y*this.QIANJI_RATE2),d.x=p+s*(p-l)/(y*this.QIANJI_RATE2),d.y=h+s*(h-r)/(y*this.QIANJI_RATE2);var f=new SuperMap.Geometry.Point((i[0].x+i[1].x)/2,(i[0].y+i[1].y)/2),S=new SuperMap.Geometry.Point((i[2].x+i[3].x)/2,(i[2].y+i[3].y)/2),P=i[3].x-(i[3].x-u.x)*this.SCALE_AT,m=i[3].y-(i[3].y-u.y)*this.SCALE_AT,b=i[2].x-(i[2].x-c.x)*this.SCALE_AT,L=i[2].y-(i[2].y-c.y)*this.SCALE_AT,M=new SuperMap.Geometry.Point(0,0),v=new SuperMap.Geometry.Point(0,0),_=new SuperMap.Geometry.Point(0,0),T=new SuperMap.Geometry.Point(0,0);v.x=P-(m-i[3].y)*this.SCALE_ATAJ,v.y=m+(P-i[3].x)*this.SCALE_ATAJ,M.x=P+(m-i[3].y)*this.SCALE_ATAJ,M.y=m-(P-i[3].x)*this.SCALE_ATAJ,T.x=b-(L-i[2].y)*this.SCALE_ATAJ,T.y=L+(b-i[2].x)*this.SCALE_ATAJ,_.x=b+(L-i[2].y)*this.SCALE_ATAJ,_.y=L-(b-i[2].x)*this.SCALE_ATAJ;var x=new SuperMap.Geometry.Point(0,0),O=new SuperMap.Geometry.Point(0,0),A=new SuperMap.Geometry.Point(0,0),w=new SuperMap.Geometry.Point(0,0);x.x=3*M.x-2*P-(i[3].x-P)*this.SCALE_ATAE,x.y=3*M.y-2*m-(i[3].y-m)*this.SCALE_ATAE,O.x=3*v.x-2*P-(i[3].x-P)*this.SCALE_ATAE,O.y=3*v.y-2*m-(i[3].y-m)*this.SCALE_ATAE,A.x=3*_.x-2*b-(i[2].x-b)*this.SCALE_ATAE,A.y=3*_.y-2*L-(i[2].y-L)*this.SCALE_ATAE,w.x=3*T.x-2*b-(i[2].x-b)*this.SCALE_ATAE,w.y=3*T.y-2*L-(i[2].y-L)*this.SCALE_ATAE,u.x=l+n*(l-p)/(y*this.QIANJI_RATE4),u.y=r+n*(r-h)/(y*this.QIANJI_RATE4),c.x=p+s*(p-l)/(y*this.QIANJI_RATE4),c.y=h+s*(h-r)/(y*this.QIANJI_RATE4);var D=new SuperMap.Geometry.Point(0,0);D.x=i[0].x+(u.x-i[0].x)*this.SCALE_AW,D.y=i[0].y+(u.y-i[0].y)*this.SCALE_AW;var E=new SuperMap.Geometry.Point(0,0);E.x=i[1].x+(c.x-i[1].x)*this.SCALE_AW,E.y=i[1].y+(c.y-i[1].y)*this.SCALE_AW;var I=new SuperMap.Geometry.Point(0,0);I.x=M.x+(u.x-M.x)*this.SCALE_ATAJctrlSameSide,I.y=M.y+(u.y-M.y)*this.SCALE_ATAJctrlSameSide;var N=new SuperMap.Geometry.Point(0,0);N.x=T.x+(c.x-T.x)*this.SCALE_ATAJctrlSameSide,N.y=T.y+(c.y-T.y)*this.SCALE_ATAJctrlSameSide;var C=new SuperMap.Geometry.Point(0,0);C.x=v.x+(g.x-v.x)*this.SCALE_ATAJctrlDefSide,C.y=v.y+(g.y-v.y)*this.SCALE_ATAJctrlDefSide;var R=new SuperMap.Geometry.Point(0,0);R.x=_.x+(d.x-_.x)*this.SCALE_ATAJctrlDefSide,R.y=_.y+(d.y-_.y)*this.SCALE_ATAJctrlDefSide;var U=new SuperMap.Geometry.Point(0,0);U.x=f.x+(S.x-f.x)*o,U.y=f.y+(S.y-f.y)*o,this.m_scalePoints.push(new SuperMap.Geometry.Point(U.x,U.y));var G=new SuperMap.Geometry.Point(0,0),B=new SuperMap.Geometry.Point(0,0);G.x=i[0].x+(i[3].x-i[0].x)*o,G.y=i[0].y+(i[3].y-i[0].y)*o,B.x=i[1].x+(i[2].x-i[1].x)*o,B.y=i[1].y+(i[2].y-i[1].y)*o,G.x=G.x+(U.x-G.x)*this.QIANJI_RATE3,G.y=G.y+(U.y-G.y)*this.QIANJI_RATE3,B.x=B.x+(U.x-B.x)*this.QIANJI_RATE3,B.y=B.y+(U.y-B.y)*this.QIANJI_RATE3;var F=[];F.push(i[0].clone()),F.push(D.clone()),F.push(I.clone()),F.push(M.clone()),e.MoveTo(F[0]),e.CurveTo(F[1],F[2],F[3]);var k,j=[],z=[],Y=[],V=[],W=[],H=[],X=[];for(e.ToSubPathPolygons(X),j=X[0],k=X[0].length,e.LineTo(x),e.LineTo(i[3]),e.LineTo(O),(F=[]).push(v),F.push(C),F.push(G),F.push(U),e.LineTo(F[0]),X=[],e.ToSubPathPolygons(X);k<X[0].length;k++)z.push(X[0][k]);for(k=X[0].length,e.CurveTo(F[1],F[2],F[3]),X=[],e.ToSubPathPolygons(X);k<X[0].length;k++)Y.push(X[0][k]);for(k=X[0].length,[],(F=[]).push(B),F.push(R),F.push(_),e.CurveTo(F[0],F[1],F[2]),X=[],e.ToSubPathPolygons(X);k<X[0].length;k++)V.push(X[0][k]);for(k=X[0].length,e.LineTo(A),e.LineTo(i[2]),e.LineTo(w),[],(F=[]).push(T),F.push(N),F.push(E),F.push(a),e.LineTo(F[0]),X=[],e.ToSubPathPolygons(X);k<X[0].length;k++)W.push(X[0][k]);for(k=X[0].length,e.CurveTo(F[1],F[2],F[3]),X=[],e.ToSubPathPolygons(X);k<X[0].length;k++)H.push(X[0][k]);return X=[],e.ToSubPathPolygons(X),{shapePts:X[0],LeftArowLeftBody:j,LeftArowHead:z,LeftArowRightBody:Y,RightArowLeftBody:V,RightArowHead:W,RightArowRightBody:H}}}]),e}());e.default=u,SuperMap.Geometry.AlgoSymbol1006=u},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=o(i(0)),u=(o(i(3)),function(t){function e(t){n(this,e);var i=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.CLASS_NAME="SuperMap.Geometry.AlgoSymbol1010",i.symbolType=SuperMap.Plot.SymbolType.ALGOSYMBOL,i.symbolName="贝塞尔尖耳燕尾箭头",i.minEditPts=3,i.maxEditPts=512,i.clearScalePoints(),0===i.getScaleValues().length&&(i.getScaleValues().push(0),i.getScaleValues().push(.148),i.getScaleValues().push(.4),i.getScaleValues().push(.312),i.getScaleValues().push(.2)),i}return a(e,r["default"]),l(e,[{key:"calculateParts",value:function(){this.clearComponents();var t=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints);if((t=SuperMap.Plot.PlottingUtil.clearSamePts(t)).length>=2&&t.length<this.minEditPts&&this.calAssistantLine(),!(t.length<this.minEditPts)){var e=this.arrowMeshs(t);if(SuperMap.Plot.PlottingUtil.clearSamePts(e.shapePts),0!=e.shapePts.length){this.addCell(SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,e.shapePts,{surroundLineFlag:!1}),this.clearScalePoints();for(var i=0;i<e.m_scalePoints.length;i++)this.addScalePoint(e.m_scalePoints[i])}}}},{key:"modifyPoint",value:function(t,e){if(!0===e.isScalePoint){var i=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints);this.getScaleValues().length<4&&(this.getScaleValues().push(0),this.getScaleValues().push(.148),this.getScaleValues().push(.4),this.getScaleValues().push(.312),this.getScaleValues().push(.2));var o=i.length;if(o<=2)return;var n,s,a,l;this.getScaleValues().length<4?(n=0,s=.148,a=.4,l=.312,.2):(n=this.getScaleValues()[0],s=this.getScaleValues()[1],a=this.getScaleValues()[2],l=this.getScaleValues()[3],this.getScaleValues()[4]);var r=SuperMap.Plot.PlottingUtil.polylineDistance(i),u=this.operateCtrlPts(i);o=u.length,o--;for(var p=[],h=0;h<this.getScalePoints().length;h++)p.push(this.getScalePoints()[h].clone());if(0==p.length)return;if(p[t]=e.clone(),3==t){var c=SuperMap.Plot.ArrowToolKit.generateArrowBodyShapePts(i,this.getScaleValues(),SuperMap.Plot.ArrowToolKit.ArrowBodyType.ARROWBODY_MULTIPOLYBEZIER),y=new SuperMap.Geometry.Point(.5*(c.leftBodyPts[0].x+c.rightBodyPts[0].x),.5*(c.leftBodyPts[0].y+c.rightBodyPts[0].y)),g=SuperMap.Plot.PlottingUtil.distance(c.leftBodyPts[0],c.rightBodyPts[0]);this.getScaleValues()[4]=SuperMap.Plot.PlottingUtil.distance(y,e)/g}else{var d,f,h=o-1;d=o<=3?new SuperMap.Geometry.Point((u[0].x+u[1].x)/2,(u[0].y+u[1].y)/2):u[h-1].clone();var S=new SuperMap.Geometry.Point(0,0),P=new SuperMap.Geometry.Point(0,0),m=new SuperMap.Geometry.Point(0,0);SuperMap.Plot.PlottingUtil.getTrianglePoints(0,3,d,u[h],u[h+1],P,m),SuperMap.Plot.PlottingUtil.getTrapezoidPoints(.5,u[o],u[o-1],m,S),f=S.clone();var b,L,M,v,_,T,x=SuperMap.Plot.PlottingUtil.triangleHeightAndPartBottomLen(u[o],f,p[2]);b=x.dLen1,L=x.dLen2,0==b&&(b=.1),L=b,n=(b/=l+1)/r,1==t?(v=(x=SuperMap.Plot.PlottingUtil.triangleHeightAndPartBottomLen(u[o],f,p[1])).dLen1,a=(_=x.dLen2)/b,l=(v-b)/b):0==t?(b=(x=SuperMap.Plot.PlottingUtil.triangleHeightAndPartBottomLen(u[o],f,p[0])).dLen1,s=(M=x.dLen2)/b,(T=SuperMap.Plot.PlottingUtil.distance(u[o],u[o-1]))<2*b&&(b=.5*T),v=(x=SuperMap.Plot.PlottingUtil.triangleHeightAndPartBottomLen(u[o],f,p[1])).dLen1,a=(_=x.dLen2)/b,(l=(L-b)/b)<.1&&(a=_/(b=L/(1+(l=.1))),s=M/b),n=b/r):2==t&&(n=b/r),M=b*s,(T=SuperMap.Plot.PlottingUtil.distance(u[o],u[o-1]))<2*b&&(M=(b=.5*T)*s,n=b/r),this.getScaleValues()[0]=n,this.getScaleValues()[1]=s,this.getScaleValues()[2]=a,this.getScaleValues()[3]=l}}this.calculateParts()}},{key:"arrowMeshs",value:function(t){var e=[],i=[],o=[],n=[],s=[],a=SuperMap.Plot.PlottingUtil.clonePoints(t),l=SuperMap.Plot.ArrowToolKit.generateArrowBodyShapePts(a,this.getScaleValues(),SuperMap.Plot.ArrowToolKit.ArrowBodyType.ARROWBODY_MULTIPOLYBEZIER),r=l.arrowTouLen,u=l.leftBodyPts,p=l.rightBodyPts;if(a=l.OpectrlPoints,!SuperMap.Plot.PlottingUtil.equalFuzzy(r,0)){var h=[];h.push(u[u.length-1]),h.push(p[p.length-1]);var c=[];c.push(this.getScaleValues()[2]),c.push(this.getScaleValues()[3]),c.push(0),c.push(0);var y=SuperMap.Plot.ArrowToolKit.generateArrowHeadShapePts(a,h,c,r,SuperMap.Plot.ArrowToolKit.ArrowHeadType.ARROWHEAD_WITH_EAR),g=[];g.push(u[0]),g.push(p[0]);for(var d=SuperMap.Plot.ArrowToolKit.generateArrowTailShapePts(t,g,this.getScaleValues()[4],SuperMap.Plot.ArrowToolKit.ArrowTailType.ARROWTAIL_COATTAIL_POLYBODY),f=0;f<u.length;f++)e.push(u[f]),i.push(u[f]);for(f=0;f<y.length;f++)e.push(y[f]),n.push(y[f]);for(f=p.length-1;f>=0;f--)e.push(p[f]),o.push(p[f]);for(f=1;f<d.length;f++)e.push(d[f]),s.push(d[f]);var S,P=a.length;P-=2;var m=r*this.getScaleValues()[3];S=SuperMap.Plot.PlottingUtil.getExcentrePointOnSegmentByScale(m,a[P],a[P+1]);var b=[],L=new SuperMap.Geometry.Point(i[i.length-1].x,i[i.length-1].y);L.isScalePoint=!0,L.tag=0,b.push(L),(L=new SuperMap.Geometry.Point(n[0].x,n[0].y)).isScalePoint=!0,L.tag=1,b.push(L),(L=new SuperMap.Geometry.Point(S.x,S.y)).isScalePoint=!0,L.tag=2,b.push(L),(L=new SuperMap.Geometry.Point(d[1].x,d[1].y)).isScalePoint=!0,L.tag=3,b.push(L)}return{shapePts:e,leftBodyPts:i,rightBodyPts:o,arrowHeadPts:n,arrowTailPts:s,m_scalePoints:b}}},{key:"operateCtrlPts",value:function(t){var e=SuperMap.Plot.PlottingUtil.clonePoints(t);if(3===e.length){var i=((e[0].x+e[1].x)/2+e[2].x)/2,o=((e[0].y+e[1].y)/2+e[2].y)/2,n=new SuperMap.Geometry.Point(i,o),s=e[2];e[2]=n,e.push(s)}return e}}]),e}());e.default=u,SuperMap.Geometry.AlgoSymbol1010=u},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),l=function(t){return t&&t.__esModule?t:{default:t}}(i(13)),r=function(t){function e(t){o(this,e);var i=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.sv1_DefaultAtLenDivAbLen=0,i.sv2_DefaultAjWidthDivAtLen=.148,i.sv3_DefaultAeWidthDivAtLen=.4,i.sv4_DefaultAeLenDivAtLen=.312,i.sv_arrowTailWidth=.05,i.CLASS_NAME="SuperMap.Geometry.AlgoSymbol1011",i.symbolType=SuperMap.Plot.SymbolType.ALGOSYMBOL,i.minEditPts=3,i.maxEditPts=512,i.symbolName="贝塞尔尖耳单点箭头",i.clearScalePoints(),5!==i.getScaleValues().length&&(i.clearScaleValues(),i.getScaleValues().push(i.sv1_DefaultAtLenDivAbLen),i.getScaleValues().push(i.sv2_DefaultAjWidthDivAtLen),i.getScaleValues().push(i.sv3_DefaultAeWidthDivAtLen),i.getScaleValues().push(i.sv4_DefaultAeLenDivAtLen),i.getScaleValues().push(i.sv_arrowTailWidth)),i}return s(e,l["default"]),a(e,[{key:"calculateParts",value:function(){this.clearComponents();var t=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints);if(!((t=SuperMap.Plot.PlottingUtil.clearSamePts(t)).length<2)){var e=SuperMap.Plot.PlottingUtil.polylineDistance(t);if(0!=e){var i=e*this.getScaleValues()[4],o=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(i,t[1],t[0]);void 0!==t[0].z&&(o.pntLeft.z=t[0].z,o.pntRight.z=t[0].z),this.controlPoints=[],this.controlPoints.push(o.pntLeft),this.controlPoints.push(o.pntRight);for(s=1;s<t.length;s++)this.controlPoints.push(t[s].clone());for(var n=[],s=0;s<this.getScaleValues().length;s++)n.push(this.getScaleValues()[s]);this.clearScaleValues();for(s=0;s<n.length-1;s++)this.getScaleValues().push(n[s]);SuperMap.Geometry.AlgoSymbol1004.prototype.calculateParts.apply(this,arguments);var a=o.pntRight.clone();a.isScalePoint=!0,a.tag=3,this.addScalePoint(a),this.controlPoints=SuperMap.Plot.PlottingUtil.clonePoints(t),this.clearScaleValues();for(s=0;s<n.length;s++)this.getScaleValues().push(n[s])}}}},{key:"modifyPoint",value:function(t,e){if(!0===e.isScalePoint){var i=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints);if(i.length<2)return;this.getScaleValues().length<5&&(this.clearScaleValues(),this.getScaleValues().push(this.sv1_DefaultAtLenDivAbLen),this.getScaleValues().push(this.sv2_DefaultAjWidthDivAtLen),this.getScaleValues().push(this.sv3_DefaultAeWidthDivAtLen),this.getScaleValues().push(this.sv4_DefaultAeLenDivAtLen),this.getScaleValues().push(this.sv_arrowTailWidth));var o=i[0].clone(),n=SuperMap.Plot.PlottingUtil.polylineDistance(i);if(0==(f=null))return;var s=n*this.getScaleValues()[4],a=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(s,i[1],i[0]);(i=[]).push(a.pntLeft),i.push(a.pntRight);for(P=1;P<this.controlPoints.length;P++)i.push(this.controlPoints[P].clone());var l=i.length,r=this.operateCtrlPts(i);l=r.length,l--;var u,p,h,c,y,g=this.calcScaleValueCount(i.length);if(g++,this.getScaleValues().length<g){var d=this.calcDefaultScaleValues(l);u=d[0],p=d[1],h=d[2],c=d[3],y=this.sv_arrowTailWidth}else u=this.getScaleValues()[0],p=this.getScaleValues()[1],h=this.getScaleValues()[2],c=this.getScaleValues()[3],y=this.getScaleValues()[4];for(var f=SuperMap.Plot.PlottingUtil.polylineDistance(i),S=[],P=0;P<this.getScalePoints().length;P++)S.push(this.getScalePoints()[P].clone());if(0==S.length)return;S[t]=e.clone();var m,b,P=l-1;m=l<=3?new SuperMap.Geometry.Point((r[0].x+r[1].x)/2,(r[0].y+r[1].y)/2):r[P-1].clone();var L=new SuperMap.Geometry.Point(0,0),M=new SuperMap.Geometry.Point(0,0),v=new SuperMap.Geometry.Point(0,0);SuperMap.Plot.PlottingUtil.getTrianglePoints(0,3,m,r[P],r[P+1],M,v),SuperMap.Plot.PlottingUtil.getTrapezoidPoints(.5,r[l],r[l-1],v,L),b=L.clone();var _,T,x,O,A,w,D=SuperMap.Plot.PlottingUtil.triangleHeightAndPartBottomLen(r[l],b,S[2]);_=D.dLen1,T=D.dLen2,0==_&&(_=.1),T=_,u=(_/=c+1)/f,1==t?(O=(D=SuperMap.Plot.PlottingUtil.triangleHeightAndPartBottomLen(r[l],b,S[1])).dLen1,h=(A=D.dLen2)/_,c=(O-_)/_):0==t?(_=(D=SuperMap.Plot.PlottingUtil.triangleHeightAndPartBottomLen(r[l],b,S[0])).dLen1,p=(x=D.dLen2)/_,(w=SuperMap.Plot.PlottingUtil.distance(r[l],r[l-1]))<2*_&&(_=.5*w),O=(D=SuperMap.Plot.PlottingUtil.triangleHeightAndPartBottomLen(r[l],b,S[1])).dLen1,h=(A=D.dLen2)/_,(c=(T-_)/_)<.1&&(h=A/(_=T/(1+(c=.1))),p=x/_),u=_/f):2==t?u=_/f:y=SuperMap.Plot.PlottingUtil.distance(e,o)/n,x=_*p,(w=SuperMap.Plot.PlottingUtil.distance(r[l],r[l-1]))<2*_&&(x=(_=.5*w)*p,u=_/f),this.getScaleValues()[0]=u,this.getScaleValues()[1]=p,this.getScaleValues()[2]=h,this.getScaleValues()[3]=c,this.getScaleValues()[4]=y}this.calculateParts()}},{key:"arrowMeshs",value:function(t){var e=[],i=[],o=[],n=[],s=SuperMap.Plot.PlottingUtil.clonePoints(t),a=SuperMap.Plot.ArrowToolKit.generateArrowBodyShapePts(s,this.getScaleValues(),SuperMap.Plot.ArrowToolKit.ArrowBodyType.ARROWBODY_MULTIPOLYBEZIER),l=a.arrowTouLen,r=a.leftBodyPts,u=a.rightBodyPts;if(!SuperMap.Plot.PlottingUtil.equalFuzzy(l,0)){var p=[];p.push(r[r.length-1]),p.push(u[u.length-1]);var h=[];h.push(this.getScaleValues()[2]),h.push(this.getScaleValues()[3]),h.push(0),h.push(0);var c=SuperMap.Plot.ArrowToolKit.generateArrowHeadShapePts(s,p,h,l,SuperMap.Plot.ArrowToolKit.ArrowHeadType.ARROWHEAD_WITH_EAR),y=[];y.push(r[0]),y.push(u[0]);SuperMap.Plot.ArrowToolKit.generateArrowTailShapePts(t,y,.2,SuperMap.Plot.ArrowToolKit.ArrowTailType.ARROWTAIL_COATTAIL_POLYBODY);for(g=0;g<r.length;g++)e.push(r[g]),i.push(r[g]);for(g=0;g<c.length;g++)e.push(c[g]),n.push(c[g]);for(var g=u.length-1;g>=0;g--)e.push(u[g]),o.push(u[g])}return{shapePts:e,leftBodyPts:i,rightBodyPts:o,arrowHeadPts:n}}},{key:"updateScalePoints",value:function(t){var e=t.length,i=[];if(!(e<3)){var o=SuperMap.Plot.PlottingUtil.polylineDistance(t);if(!SuperMap.Plot.PlottingUtil.equalFuzzy(o,0)){var n=this.operateCtrlPts(t);e=n.length,e--;for(var s=[],a=0;a<this.getScaleValues().length;a++)s.push(this.getScaleValues()[a]);var l=this.genArrowBodyPts(o,n,s),r=l.ArrowBodyCenterPts,u=this.genAtPts(e,r,s,l.ArrowTouLen),p=this.calc3rdScalePt(e,r,s,l.ArrowTouLen);return i.push(new SuperMap.Geometry.Point(l.LeftBodyPtsTemp[e].x,l.LeftBodyPtsTemp[e].y)),i.push(new SuperMap.Geometry.Point(u[2].x,u[2].y)),i.push(new SuperMap.Geometry.Point(p.x,p.y)),i}}}},{key:"operateCtrlPts",value:function(t){var e=SuperMap.Plot.PlottingUtil.clonePoints(t);if(3===e.length){var i=((e[0].x+e[1].x)/2+e[2].x)/2,o=((e[0].y+e[1].y)/2+e[2].y)/2,n=new SuperMap.Geometry.Point(i,o),s=e[2];e[2]=n,e.push(s)}return e}},{key:"genArrowBodyPts",value:function(t,e,i){var o,n=[],s=[],a=[],l=[],r=[],u=[],p=e.length;p--;var h,c;if(i.length<this.calcScaleValueCount(p)){var y=this.calcDefaultScaleValues(p);h=y[0],c=y[1],y[2],y[3]}else h=i[0],c=i[1],i[2],i[3];var g=SuperMap.Plot.PlottingUtil.clonePoints(e),d=(g[0].x+g[1].x)/2,f=(g[0].y+g[1].y)/2,S=Math.abs(d-g[2].x),P=Math.abs(f-g[2].y),m=0;if(S>0&&P>0){var b=1/(d-g[2].x),L=-1/(f-g[2].y),M=1*g[2].y/(f-g[2].y)-1*g[2].x/(d-g[2].x);m=Math.abs(b*g[0].x+L*g[0].y+M)/Math.sqrt(b*b+L*L)}else P<=1e-4?m=Math.abs(f-g[1].y):S<=1e-4&&(m=Math.abs(d-g[1].x));var v=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(m,g[2],new SuperMap.Geometry.Point(d,f)),_=SuperMap.Plot.PlottingUtil.pointIsRightToLine(g[1],g[2],g[0]);_?(n[1]=g[1],s[1]=g[0]):(n[1]=g[0],s[1]=g[1]),g[1]=new SuperMap.Geometry.Point((g[0].x+g[1].x)/2,(g[0].y+g[1].y)/2);var T=Math.sqrt((v.pntLeft.x-v.pntRight.x)*(v.pntLeft.x-v.pntRight.x)+(v.pntLeft.y-v.pntRight.y)*(v.pntLeft.y-v.pntRight.y))*this.sv_AtWidthDivAwWidth,x=(o=T*this.sv_AtLenDivAtWidth)*c;SuperMap.Plot.PlottingUtil.equalFuzzy(h,0)||(x=(o=t*h)*c);var O=SuperMap.Plot.PlottingUtil.distance(g[p],g[p-1]),A=2*o;O<A&&(x=(o=O/2)*c),g.push(g[p].clone());var w,D;w=0,D=0;var E=0,I=[];for(E=2;E<=p;E++)w+=SuperMap.Plot.PlottingUtil.distance(g[E],g[E-1]);for(w-=o,E=2;E<=p-1;E++)D+=SuperMap.Plot.PlottingUtil.distance(g[E],g[E-1]),I[E]=x+(T-x)*Math.pow((w-D)/w,this.sv_AtScaleParameter);I[p]=x;var N,C=new SuperMap.Geometry.Point(0,0),R=new SuperMap.Geometry.Point(0,0),U=new SuperMap.Geometry.Point(0,0);for(E=2;E<=p-1;E++)SuperMap.Plot.PlottingUtil.getTrianglePoints(0,3,g[E-1],g[E],g[E+1],R,U),E==p-1&&SuperMap.Plot.PlottingUtil.getTrapezoidPoints(.5,g[p],g[p-1],U,C),N=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(I[E],R,g[E]),(_=SuperMap.Plot.PlottingUtil.pointIsRightToLine(U,R,N.pntRight))?(n[E]=new SuperMap.Geometry.Point(N.pntRight.x,N.pntRight.y),s[E]=new SuperMap.Geometry.Point(N.pntLeft.x,N.pntLeft.y)):(n[E]=new SuperMap.Geometry.Point(N.pntLeft.x,N.pntLeft.y),s[E]=new SuperMap.Geometry.Point(N.pntRight.x,N.pntRight.y));Math.sqrt(1*(g[p].x-C.x)*(g[p].x-C.x)+1*(g[p].y-C.y)*(g[p].y-C.y))>0&&(g[p]=SuperMap.Plot.PlottingUtil.getIncentrePointOnSegmentByScale(o,g[p],C)),N=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(x,g[p+1],g[p]),(_=SuperMap.Plot.PlottingUtil.pointIsRightToLine(g[p],g[p+1],N.pntLeft))?(s[p]=new SuperMap.Geometry.Point(N.pntLeft.x,N.pntLeft.y),n[p]=new SuperMap.Geometry.Point(N.pntRight.x,N.pntRight.y)):(s[p]=new SuperMap.Geometry.Point(N.pntRight.x,N.pntRight.y),n[p]=new SuperMap.Geometry.Point(N.pntLeft.x,N.pntLeft.y));var G;for(E=2;E<p;E++)SuperMap.Plot.PlottingUtil.getTrianglePoints(3,3,n[E-1],n[E],n[E+1],R,U),a[E]=new SuperMap.Geometry.Point(R.x,R.y),l[E]=new SuperMap.Geometry.Point(U.x,U.y),SuperMap.Plot.PlottingUtil.getTrianglePoints(3,3,s[E-1],s[E],s[E+1],R,U),r[E]=new SuperMap.Geometry.Point(R.x,R.y),u[E]=new SuperMap.Geometry.Point(U.x,U.y),2==E&&(SuperMap.Plot.PlottingUtil.getTrapezoidPoints(.5,n[1],n[2],a[2],C),l[E]=new SuperMap.Geometry.Point(C.x,C.y),SuperMap.Plot.PlottingUtil.getTrapezoidPoints(.5,s[1],s[2],r[2],C),u[E]=new SuperMap.Geometry.Point(C.x,C.y)),E==p-1&&(A=(O=SuperMap.Plot.PlottingUtil.distance(n[p],n[p-1]))/3,(G=SuperMap.Plot.PlottingUtil.getExcentrePointOnSegmentByScale(A,g[p],g[p+1])).x+=n[p].x-g[p].x,G.y+=n[p].y-g[p].y,A=(O=T-x)*Math.pow(A/w,this.sv_AtScaleParameter),N=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(A,n[p],G),a[p]=new SuperMap.Geometry.Point(N.pntLeft.x,N.pntLeft.y),A=(O=SuperMap.Plot.PlottingUtil.distance(s[p],s[p-1]))/3,(G=SuperMap.Plot.PlottingUtil.getExcentrePointOnSegmentByScale(A,g[p],g[p+1])).x+=s[p].x-g[p].x,G.y+=s[p].y-g[p].y,A=(O=T-x)*Math.pow(A/w,this.sv_AtScaleParameter),N=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(A,s[p],G),r[p]=new SuperMap.Geometry.Point(N.pntRight.x,N.pntRight.y));return{ArrowBodyCenterPts:SuperMap.Plot.PlottingUtil.clonePoints(g),LeftBodyPtsTemp:n,RightBodyPtsTemp:s,LeftBodyPtsLeftCtrlPts:a,LeftBodyPtsRightCtrlPts:l,RightBodyPtsLeftCtrlPts:r,RightBodyPtsRightCtrlPts:u,ArrowTouLen:o}}},{key:"calcScaleValueCount",value:function(t){return 4}},{key:"calcDefaultScaleValues",value:function(t){var e=[];return e.push(this.sv1_DefaultAtLenDivAbLen),e.push(this.sv2_DefaultAjWidthDivAtLen),e.push(this.sv3_DefaultAeWidthDivAtLen),e.push(this.sv4_DefaultAeLenDivAtLen),e}},{key:"genAtPts",value:function(t,e,i,o){var n=i[2],s=[],a=o*i[3],l=SuperMap.Plot.PlottingUtil.getExcentrePointOnSegmentByScale(a,e[t],e[t+1]);a=o*n;var r=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(a,e[t+1],l);return s.push(new SuperMap.Geometry.Point(r.pntLeft.x,r.pntLeft.y)),s.push(e[t+1]),s.push(new SuperMap.Geometry.Point(r.pntRight.x,r.pntRight.y)),s}},{key:"calc3rdScalePt",value:function(t,e,i,o){i[2];var n=o*i[3];return SuperMap.Plot.PlottingUtil.getExcentrePointOnSegmentByScale(n,e[t],e[t+1])}}]),e}();e.default=r,SuperMap.Geometry.AlgoSymbol1011=r},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i(29)),l=function(t){function e(t){o(this,e);var i=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.CLASS_NAME="SuperMap.Geometry.AlgoSymbol1012",i.symbolType=SuperMap.Plot.SymbolType.ALGOSYMBOL,i.symbolName="普通贝塞尔箭头(不随图)",i.minEditPts=2,i.maxEditPts=99999,void 0!==t.scaleByMap&&null!==t.scaleByMap||(i.scaleByMap=!1),void 0!==t.constantSize&&null!==t.constantSize||!1!==i.getIsEdit()||(i.constantSize=!0),i.subSymbolDefaultPixelSize=15,i}return s(e,a["default"]),e}();e.default=l,SuperMap.Geometry.AlgoSymbol1012=l},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i(30)),l=function(t){function e(t){o(this,e);var i=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.CLASS_NAME="SuperMap.Geometry.AlgoSymbol1013",i.symbolType=SuperMap.Plot.SymbolType.ALGOSYMBOL,i.symbolName="折线空三角箭头(不随图)",i.minEditPts=2,i.maxEditPts=99999,void 0!==t.scaleByMap&&null!==t.scaleByMap||(i.scaleByMap=!1),void 0!==t.constantSize&&null!==t.constantSize||!1!==i.getIsEdit()||(i.constantSize=!0),i.subSymbolDefaultPixelSize=15,i}return s(e,a["default"]),e}();e.default=l,SuperMap.Geometry.AlgoSymbol1013=l},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i(31)),l=function(t){function e(t){o(this,e);var i=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.CLASS_NAME="SuperMap.Geometry.AlgoSymbol1014",i.symbolType=SuperMap.Plot.SymbolType.ALGOSYMBOL,i.symbolName="贝塞尔尖耳燕尾箭头(不随图)",i.minEditPts=2,i.maxEditPts=99999,void 0!==t.scaleByMap&&null!==t.scaleByMap||(i.scaleByMap=!1),void 0!==t.constantSize&&null!==t.constantSize||!1!==i.getIsEdit()||(i.constantSize=!0),i.subSymbolDefaultPixelSize=15,i}return s(e,a["default"]),e}();e.default=l,SuperMap.Geometry.AlgoSymbol1014=l},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i(32)),l=function(t){function e(t){o(this,e);var i=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.CLASS_NAME="SuperMap.Geometry.AlgoSymbol1015",i.symbolType=SuperMap.Plot.SymbolType.ALGOSYMBOL,i.minEditPts=2,i.maxEditPts=99999,void 0!==t.scaleByMap&&null!==t.scaleByMap||(i.scaleByMap=!1),void 0!==t.constantSize&&null!==t.constantSize||!1!==i.getIsEdit()||(i.constantSize=!0),i.subSymbolDefaultPixelSize=15,i}return s(e,a["default"]),e}();e.default=l,SuperMap.Geometry.AlgoSymbol1015=l},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=o(i(0)),u=(o(i(3)),function(t){function e(t){n(this,e);var i=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.arrowHeadType=0,i.arrowBodyType=0,i.arrowTailType=0,i.CLASS_NAME="SuperMap.Geometry.AlgoSymbol1016",i.symbolType=SuperMap.Plot.SymbolType.ALGOSYMBOL,i.symbolName="组合箭头",i.minEditPts=2,i.maxEditPts=99999,i}return a(e,r["default"]),l(e,[{key:"calculateParts",value:function(){this.clearComponents();var t=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints);if(!((t=SuperMap.Plot.PlottingUtil.clearSamePts(t)).length<this.minEditPts)){var e=SuperMap.Plot.ArrowToolKit.generateArrowBodyShapePtsBySingleLine(t,0,this.arrowBodyType),i=[];i.push(e.arrowBodyPts[e.arrowBodyPts.length-1]),i.push(e.arrowBodyPts[e.arrowBodyPts.length-2]);var o=this.getSubSymbolScaleValue(),n=this.calculateforHead(t,e,i,o),s=SuperMap.Plot.ArrowToolKit.generateArrowHeadShapePtsBySingleLine(t,n,i,o,e.arrowHeadLen,this.arrowHeadType),a=SuperMap.Plot.ArrowToolKit.generateArrowTailShapePts(n,i,o,this.arrowTailType);this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,n);var l,r;this.arrowHeadType===SuperMap.Plot.ArrowToolKit.ArrowHeadType.ARROWHEAD_COATTAIL||this.arrowHeadType===SuperMap.Plot.ArrowToolKit.ArrowHeadType.ARROWHEAD_TRIANGLE_SOLID?(l={surroundLineFlag:!1,fillLimit:!0,fillColorLimit:!1,fillStyle:0},r=SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL):r=SuperMap.Plot.SymbolType.POLYLINESYMBOL,this.addCell(r,s,l),0!==a.length&&this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,a)}}}]),e}());e.default=u,SuperMap.Geometry.AlgoSymbol1016=u},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),l=function t(e,i,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,i);if(void 0===n){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,i,o)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(o)},r=function(t){return t&&t.__esModule?t:{default:t}}(i(13)),u=function(t){function e(t){o(this,e);var i=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.CLASS_NAME="SuperMap.Geometry.AlgoSymbol315",i.symbolType=SuperMap.Plot.SymbolType.ALGOSYMBOL,i.symbolName="突击",i.minEditPts=3,i.maxEditPts=30,0===i.getScaleValues().length&&(i.getScaleValues().push(.2),i.getScaleValues().push(.2),i.getScaleValues().push(.4),i.getScaleValues().push(.4),i.getScaleValues().push(.1),i.getScaleValues().push(.2),i.getScaleValues().push(.1),i.getScaleValues().push(.2),i.getScaleValues().push(1),i.getScaleValues().push(1)),i}return s(e,r["default"]),a(e,[{key:"calculateParts",value:function(){this.clearComponents();var t=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints);if((t=SuperMap.Plot.PlottingUtil.clearSamePts(t)).length>=2&&t.length<this.minEditPts&&this.calAssistantLine(),!(t.length<this.minEditPts)){for(var e=0,i=0;i<t.length-1;i++)e+=SuperMap.Plot.PlottingUtil.distance(t[i],t[i+1]);this.getScaleValues()[0];SuperMap.Geometry.AlgoSymbol1004.prototype.applyUse.apply(this,arguments),this.getScaleValues().length<9&&(this.clearScaleValues(),this.getScaleValues().push(.2),this.getScaleValues().push(.2),this.getScaleValues().push(.4),this.getScaleValues().push(.4),this.getScaleValues().push(.1),this.getScaleValues().push(.2),this.getScaleValues().push(.1),this.getScaleValues().push(.2),this.getScaleValues().push(1),this.getScaleValues().push(1));var o,n=e*this.getScaleValues()[4],s=e*this.getScaleValues()[5],a=SuperMap.Plot.PlottingUtil.distance(t[1],t[0]),l=SuperMap.Plot.PlottingUtil.linePnt(t[1],t[0],a+s);o=(this.getScaleValues()[8],SuperMap.Plot.PlottingUtil.getSidePointsOfLine(n,t[1],l));var r,u=e*this.getScaleValues()[6],p=e*this.getScaleValues()[7],h=SuperMap.Plot.PlottingUtil.linePnt(t[0],t[1],a+p);r=(this.getScaleValues()[9],SuperMap.Plot.PlottingUtil.getSidePointsOfLine(u,t[0],h));var c=[];c.push(new SuperMap.Geometry.Point(o.pntLeft.x,o.pntLeft.y)),c.push(new SuperMap.Geometry.Point(t[0].x,t[0].y)),c.push(new SuperMap.Geometry.Point(t[1].x,t[1].y)),c.push(new SuperMap.Geometry.Point(r.pntRight.x,r.pntRight.y));var y=SuperMap.Plot.PlottingUtil.generateBeizerPointsNoCtrlPt(c);y=SuperMap.Plot.PlottingUtil.clearSamePts(y),this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,y),this.addScalePoint(o.pntLeft,3),this.addScalePoint(r.pntRight,4)}}},{key:"modifyPoint",value:function(t,i){if(!0===i.isScalePoint){var o=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints);o=SuperMap.Plot.PlottingUtil.clearSamePts(o);var n=SuperMap.Plot.PlottingUtil.polylineDistance(o),s=SuperMap.Plot.PlottingUtil.projectPoint(i,o[0],o[1]);if(t<=2&&l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"modifyPoint",this).call(this,t,i),3===t){var a=(u=SuperMap.Plot.PlottingUtil.distance(i,s))/n,r=(h=SuperMap.Plot.PlottingUtil.distance(s,o[0]))/n;this.getScaleValues()[4]=a,this.getScaleValues()[5]=r,SuperMap.Plot.PlottingUtil.pointIsRightToLine(o[0],o[1],i)?this.getScaleValues()[8]=1:this.getScaleValues()[8]=0}if(4===t){var u=SuperMap.Plot.PlottingUtil.distance(i,s),p=u/n,h=SuperMap.Plot.PlottingUtil.distance(s,o[1]),c=h/n;this.getScaleValues()[6]=p,this.getScaleValues()[7]=c,SuperMap.Plot.PlottingUtil.pointIsRightToLine(o[0],o[1],i)?this.getScaleValues()[9]=1:this.getScaleValues()[9]=0}}this.calculateParts()}}]),e}();e.default=u,SuperMap.Geometry.AlgoSymbol315=u},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),l=function(t){return t&&t.__esModule?t:{default:t}}(i(0)),r=function(t){function e(t){o(this,e);var i=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.arrowTypeStart=0,i.arrowTypeEnd=0,i.arrowAngle=45,i.CLASS_NAME="SuperMap.Geometry.ArrowLine",i.code=SuperMap.Plot.SymbolType.ARROWLINE,i.libID=0,i.symbolType=SuperMap.Plot.SymbolType.ARROWLINE,i.symbolName="箭头线",i.minEditPts=2,i.maxEditPts=2,null===i.arrowAngle&&(i.arrowAngle=45),i}return s(e,l["default"]),a(e,[{key:"calculateParts",value:function(){if(this.clearComponents(),!(null===this.controlPoints||this.controlPoints.length<this.minEditPts)){var t=SuperMap.Plot.PlottingUtil.polylineDistance(this.controlPoints);if(!this.getIsEdit()){var e=this.getDefaultSubSymbolSize();this.subSymbolScaleValue=.5*e/t,(this.subSymbolScaleValue>.3||this.subSymbolScaleValue<=0)&&(this.subSymbolScaleValue=.3),this.subSymbolScaleValue<=0&&(this.subSymbolScaleValue=.3)}this.arrowLength=this.subSymbolScaleValue*t;var i=this.arrowAngle*Math.PI/180/2,o=SuperMap.Plot.PlottingUtil.radian(this.controlPoints[1],this.controlPoints[0]),n=o-i,s=this.controlPoints[1].x+this.arrowLength*Math.cos(n),a=this.controlPoints[1].y+this.arrowLength*Math.sin(n),l=new SuperMap.Geometry.Point(s,a),r=o+i,u=this.controlPoints[1].x+this.arrowLength*Math.cos(r),p=this.controlPoints[1].y+this.arrowLength*Math.sin(r),h=new SuperMap.Geometry.Point(u,p),c=[];c.push(l),c.push(this.controlPoints[1].clone()),c.push(h);this.arrowTypeEnd===SuperMap.Plot.ArrowLineType.DOUBLELINE?SuperMap.Plot.SymbolType.POLYLINESYMBOL:SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL;var y={surroundLineFlag:!1,fillLimit:!0,lineTypeLimit:!0},g={surroundLineFlag:!1,fillLimit:!0,lineTypeLimit:!0},d=new SuperMap.Geometry.Point((s+u)/2,(a+p)/2);n=(o+=Math.PI)-i,s=this.controlPoints[0].x+this.arrowLength*Math.cos(n),a=this.controlPoints[0].y+this.arrowLength*Math.sin(n),l=new SuperMap.Geometry.Point(s,a),r=o+i,u=this.controlPoints[0].x+this.arrowLength*Math.cos(r),p=this.controlPoints[0].y+this.arrowLength*Math.sin(r),h=new SuperMap.Geometry.Point(u,p);var f=[];f.push(l),f.push(this.controlPoints[0].clone()),f.push(h);var S=this.arrowTypeStart===SuperMap.Plot.ArrowLineType.DOUBLELINE?SuperMap.Plot.SymbolType.POLYLINESYMBOL:SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,P=this.arrowTypeEnd===SuperMap.Plot.ArrowLineType.DOUBLELINE?SuperMap.Plot.SymbolType.POLYLINESYMBOL:SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,m=new SuperMap.Geometry.Point((s+u)/2,(a+p)/2),b=[];this.arrowTypeStart===SuperMap.Plot.ArrowLineType.DOUBLELINE?(b.push(this.controlPoints[0].clone()),this.addCell(S,f,y)):this.arrowTypeStart===SuperMap.Plot.ArrowLineType.TRIANGLESOLID?(b.push(m),this.addCell(S,f,y)):b.push(this.controlPoints[0].clone()),this.arrowTypeEnd===SuperMap.Plot.ArrowLineType.DOUBLELINE?(b.push(this.controlPoints[1].clone()),this.addCell(P,c,y)):this.arrowTypeEnd===SuperMap.Plot.ArrowLineType.TRIANGLESOLID?(b.push(d),this.addCell(P,c,g)):b.push(this.controlPoints[1].clone()),this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,b)}}},{key:"_setDefaultOptions",value:function(){l.default.prototype._setDefaultOptions.call(this),this.arrowTypeEnd=this.graphicObject2D.arrowTypeEnd,this.arrowTypeStart=this.graphicObject2D.arrowTypeStart}}]),e}();e.default=r,SuperMap.Geometry.ArrowLine=r},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),l=function(t){return t&&t.__esModule?t:{default:t}}(i(0)),r=function(t){function e(t){o(this,e);var i=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.CLASS_NAME="SuperMap.Geometry.Brace",i.code=SuperMap.Plot.SymbolType.BRACESYMBOL,i.libID=0,i.symbolType=SuperMap.Plot.SymbolType.BRACESYMBOL,i.minEditPts=2,i.maxEditPts=2,0===i.getScaleValues().length&&(i.getScaleValues().push(.1),i.getScaleValues().push(.1)),i}return s(e,l["default"]),a(e,[{key:"calculateParts",value:function(){this.clearComponents();var t=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints);if(!((t=SuperMap.Plot.PlottingUtil.clearSamePts(t)).length<this.minEditPts)){var e=t[0],i=t[1],o=SuperMap.Plot.PlottingUtil.distance(e,i);this.getScaleValues().length<2&&(this.clearScaleValues(),this.getScaleValues().push(.1),this.getScaleValues().push(.1));for(var n=this.getScaleValues()[0],s=this.getScaleValues()[1],a=new SuperMap.Geometry.Point(o*n,o*n),l=new SuperMap.Geometry.Point(o*(.5-s/2),0),r=new SuperMap.Geometry.Point(.5*o,-o*s),u=new SuperMap.Geometry.Point(o*(.5+s/2),0),p=new SuperMap.Geometry.Point(o*(1-n),o*n),h=[],c=180*Math.PI/180,y=270*Math.PI/180,g=3*Math.PI/180,d=c;d<=y;d+=g){f=new SuperMap.Geometry.Point(a.x+o*n,a.y);f=SuperMap.Plot.PlottingUtil.rotateAngle(a,d,f),h.push(f)}h.push(l),h.push(r),h.push(u),c=270*Math.PI/180,y=360*Math.PI/180;for(d=c;d<=y;d+=g){var f=new SuperMap.Geometry.Point(p.x+o*n,p.y);f=SuperMap.Plot.PlottingUtil.rotateAngle(p,d,f),h.push(f)}for(var S=SuperMap.Plot.PlottingUtil.radian(e,i),P=[],m=0;m<h.length;m++){var b=new SuperMap.Geometry.Point(h[m].x+e.x,h[m].y+e.y);b=SuperMap.Plot.PlottingUtil.rotateAngle(e,S,b),P.push(b)}this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,P),this.clearScalePoints();var L=new SuperMap.Geometry.Point(o*n,0),M=new SuperMap.Geometry.Point(L.x+e.x,L.y+e.y);(M=SuperMap.Plot.PlottingUtil.rotateAngle(e,S,M)).isScalePoint=!0,M.tag=0,this.addScalePoint(M);var v=new SuperMap.Geometry.Point(r.x+e.x,r.y+e.y);SuperMap.Plot.PlottingUtil.rotateAngle(e,S,v),v.isScalePoint=!0,v.tag=1,this.addScalePoint(v)}}},{key:"modifyPoint",value:function(t,e){if(!0===e.isScalePoint){var i=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints),o=SuperMap.Plot.PlottingUtil.distance(i[0],i[1]);if(0==t)(s=SuperMap.Plot.PlottingUtil.distance(i[0],e)/o)>0&&s<.4&&(this.getScaleValues()[0]=s);else if(1==t){var n=new SuperMap.Geometry.Point((i[0].x+i[1].x)/2,(i[0].y+i[1].y)/2),s=(new SuperMap.Geometry.Point(e.x,n.y),SuperMap.Plot.PlottingUtil.distance(e,n)/o);0<s&&.2>s&&(this.getScaleValues()[1]=s)}}this.calculateParts()}}]),e}();e.default=r,SuperMap.Geometry.Brace=r},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),l=function(t){return t&&t.__esModule?t:{default:t}}(i(0)),r=function(t){function e(t){o(this,e);var i=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.defaultRadius=60,i.radius=null,i.CLASS_NAME="SuperMap.Geometry.CombinationalCircle",i.radius=void 0!==t.radius||t.radius!==i.radius?t.radius:i.radius,i.code=SuperMap.Plot.SymbolType.COMBINATIONALCIRCLE,i.libID=0,i.symbolType=SuperMap.Plot.SymbolType.COMBINATIONALCIRCLE,i.symbolName="组合圆",i.minEditPts=1,i.maxEditPts=9999,i.angleRange=[],void 0!==i.defaultRadius&&null!==i.defaultRadius||(i.defaultRadius=60),i}return s(e,l["default"]),a(e,[{key:"calculateParts",value:function(){if(this.clearComponents(),this.controlPoints=SuperMap.Plot.PlottingUtil.clearSamePts(this.controlPoints),!(null===this.controlPoints||this.controlPoints.length<1)){var t=this.getCircleLonLat(this.controlPoints[0],this.defaultRadius);if(this.angleRange=[],void 0===this.radius||null===this.radius){this.radius=[];for(i=0;i<this.controlPoints.length;i++)this.radius.push(t),this.angleRange.push([{Start:0,End:360}])}else for(i=0;i<this.controlPoints.length;i++)void 0!==this.radius[i]&&null!==this.radius[i]||(this.radius[i]=t),this.angleRange.push([{Start:0,End:360}]);for(var e=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints),i=0;i<e.length;i++)if(0!==this.angleRange[i].length&&(0!==this.angleRange[i][0].Start||0!==this.angleRange[i][0].End))for(M=i+1;M<e.length;M++)if(0!==this.angleRange[M].length&&(0!==this.angleRange[M][0].Start||0!==this.angleRange[M][0].End)){var o=SuperMap.Plot.PlottingUtil.distance(e[i],e[M]);if(o<this.radius[i]+this.radius[M])if(o>Math.abs(this.radius[i]-this.radius[M]))for(var n=0;n<2;n++){var s,a;0==n?(a=i,s=SuperMap.Plot.PlottingUtil.radian(e[i],e[M])*this.RTOD,d=Math.acos((o*o+this.radius[i]*this.radius[i]-this.radius[M]*this.radius[M])/(2*o*this.radius[i]))*this.RTOD):(a=M,s=SuperMap.Plot.PlottingUtil.radian(e[M],e[i])*this.RTOD,d=Math.acos((o*o+this.radius[M]*this.radius[M]-this.radius[i]*this.radius[i])/(2*o*this.radius[M]))*this.RTOD);var l=s-d,r=s+d,u=l<0&&r>0||l>360||r>360;l=this.adjustAngle(l),r=this.adjustAngle(r);for(L=this.angleRange[a].length-1;L>=0;L--)if(u){if(r>this.angleRange[a][L].End||SuperMap.Plot.PlottingUtil.equalFuzzy(r,this.angleRange[a][L].End)){this.angleRange[a].splice(L,1);continue}if(r>this.angleRange[a][L].Start&&(this.angleRange[a][L].Start=r),l<this.angleRange[a][L].Start||SuperMap.Plot.PlottingUtil.equalFuzzy(l,this.angleRange[a][L].Start)){this.angleRange[a].splice(L,1);continue}l<this.angleRange[a][L].End&&(this.angleRange[a][L].End=l)}else if(l<this.angleRange[a][L].Start&&r>this.angleRange[a][L].End)this.angleRange[a].splice(L,1);else if(l>this.angleRange[a][L].Start&&r<this.angleRange[a][L].End)this.angleRange[a].push({Start:this.angleRange[a][L].Start,End:l}),this.angleRange[a].push({Start:r,End:this.angleRange[a][L].End}),this.angleRange[a].splice(L,1);else{if(l>this.angleRange[a][L].End)continue;if(l>this.angleRange[a][L].Start&&(this.angleRange[a][L].End=l),r<this.angleRange[a][L].Start)continue;r<this.angleRange[a][L].End&&(this.angleRange[a][L].Start=r)}}else{if(this.radius[i]<this.radius[M]){this.angleRange[i][0].Start=0,this.angleRange[i][0].End=0;break}this.angleRange[M][0].Start=0,this.angleRange[M][0].End=0}}for(var p=[],i=0;i<e.length;i++)if(0!==this.angleRange[i].length&&(0!==this.angleRange[i][0].Start||0!==this.angleRange[i][0].End))for(L=this.angleRange[i].length-1;L>=0;L--){for(var h=this.adjustAngle(this.angleRange[i][L].Start),c=this.adjustAngle(this.angleRange[i][L].End);c<h;)c+=360;if(c-h==360)this.addCell(SuperMap.Plot.SymbolType.CIRCLESYMBOL,[e[i],new SuperMap.Geometry.Point(e[i].x,e[i].y+this.radius[i])]);else{for(var y=[],g=(c-h)/72,d=h;d<c+g/2;d+=g){var f=e[i].x+this.radius[i]*Math.cos(d*this.DTOR),S=e[i].y+this.radius[i]*Math.sin(d*this.DTOR);y.push(new SuperMap.Geometry.Point(f,S))}this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,y),p.push(y)}}for(var P=[];0!==p.length;){var m=p[0];p.splice(0,1),void 0!==(m=this.generatePolygon(p,m))&&P.push(m)}for(var b=[],L=0;L<P.length;L++)b.push(P[L]);for(i=b.length-1;i>=0;i--)for(var M=0;M<b[i].length;M++){for(var L in b)if(parseInt(L)!==i){var v=b[L];if(SuperMap.Plot.PlottingUtil.ptIsInPolygon(v,b[i][M])){var _=i,T=parseInt(L);b[T].push(b[T][0]),b[_].push(b[_][0]),b[T]=b[T].concat(b[_]),b.splice(_,1);break}}if(!isNaN(_)&&!isNaN(T))break}for(var x=0;x<b.length;x++){var O={type:SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,positionPoints:b[x],style:{surroundLineFlag:!1,lineWidthLimit:!0,weight:0}};this.components.splice(0,0,O)}for(i=0;i<e.length;i++){var A=new SuperMap.Geometry.Point(e[i].x+this.radius[i],e[i].y);A.isScalePoint=!0,A.tag=i,this.addScalePoint(A)}}}},{key:"generatePolygon",value:function(t,e){if(0===t.length||SuperMap.Plot.PlottingUtil.equalFuzzy(e[0].x,e[e.length-1].x,1e-7)&&SuperMap.Plot.PlottingUtil.equalFuzzy(e[0].y,e[e.length-1].y,1e-7))return e;for(var i=e[e.length-1],o=0;o<t.length;o++)if(SuperMap.Plot.PlottingUtil.equalFuzzy(t[o][0].x,i.x,1e-7)&&SuperMap.Plot.PlottingUtil.equalFuzzy(t[o][0].y,i.y,1e-7)){if(e=e.concat(t[o]),t.splice(o,1),void 0!==(s=this.generatePolygon(t,e))&&0!==s.length)return s}else if(SuperMap.Plot.PlottingUtil.equalFuzzy(t[o][t[o].length-1].x,i.x,1e-7)&&SuperMap.Plot.PlottingUtil.equalFuzzy(t[o][t[o].length-1].y,i.y,1e-7)){for(var n=t[o].length-1;n>=0;n--)e.push(t[o][n]);t.splice(o,1);var s=this.generatePolygon(t,e);if(void 0!==s&&0!==s.length)return s}}},{key:"modifyPoint",value:function(t,e){if(!0===e.isScalePoint){if(t<0||t>=this.controlPoints.length)return;var i=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints),o=SuperMap.Plot.PlottingUtil.distance(i[t],e);this.radius[t]=o}this.calculateParts()}},{key:"adjustAngle",value:function(t){for(;t>360;)t-=360;for(;t<0;)t+=360;return t}}]),e}();e.default=r,SuperMap.Geometry.CombinationalCircle=r},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),l=function(t){return t&&t.__esModule?t:{default:t}}(i(0)),r=function(t){function e(t){o(this,e);var i=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.startAngle=0,i.endAngle=360,i.CLASS_NAME="SuperMap.Geometry.ConcentricCircle",i.startAngle=void 0!==t.startAngle||t.startAngle!==i.startAngle?t.startAngle:i.startAngle,i.endAngle=void 0!==t.endAngle||t.endAngle!==i.endAngle?t.endAngle:i.endAngle,i.libID=0,i.code=SuperMap.Plot.SymbolType.CONCENTRICCIRCLE,i.symbolType=SuperMap.Plot.SymbolType.CONCENTRICCIRCLE,i.symbolName="同心圆",i.minEditPts=3,i.maxEditPts=3,i}return s(e,l["default"]),a(e,[{key:"calculateParts",value:function(){this.clearComponents();var t=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints);if(!(null===(t=SuperMap.Plot.PlottingUtil.clearSamePts(t))||t.length<2)){for(2==t.length&&t.push(t[1].clone());this.startAngle>360;)this.startAngle-=360;for(;this.startAngle<0;)this.startAngle+=360;for(;this.endAngle>360;)this.endAngle-=360;for(;this.endAngle<0;)this.endAngle+=360;for(;this.endAngle<=this.startAngle;)this.endAngle+=360;for(var e=SuperMap.Plot.PlottingUtil.distance(t[0],t[1]),i=SuperMap.Plot.PlottingUtil.distance(t[0],t[2]),o=[],n=[],s=Math.PI/180,a=(this.endAngle-this.startAngle)/72,l=this.startAngle;l<this.endAngle+a/2;l+=a){var r=t[0].x+e*Math.cos(l*s),u=t[0].y+e*Math.sin(l*s),p=t[0].x+i*Math.cos(l*s),h=t[0].y+i*Math.sin(l*s);o.push(new SuperMap.Geometry.Point(r,u)),n.push(new SuperMap.Geometry.Point(p,h))}for(var c={surroundLineFlag:!1,lineWidthLimit:!0,weight:0},y=[],g=0;g<o.length;g++)y.push(o[g]);for(var d=n.length-1;d>=0;d--)y.push(n[d]);this.addCell(SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,y,c),this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,o),this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,n);var f=t[0].x+e/2*Math.cos(this.startAngle*s),S=t[0].y+e/2*Math.sin(this.startAngle*s),P=t[0].x+i/2*Math.cos(this.endAngle*s),m=t[0].y+i/2*Math.sin(this.endAngle*s),b=new SuperMap.Geometry.Point(f,S);b.isScalePoint=!0,b.tag=0,this.addScalePoint(b);var L=new SuperMap.Geometry.Point(P,m);L.isScalePoint=!0,L.tag=1,this.addScalePoint(L)}}},{key:"modifyPoint",value:function(t,e){if(!0===e.isScalePoint){for(var i=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints),o=180*SuperMap.Plot.PlottingUtil.radian(i[0],e)/Math.PI;o>360;)o-=360;for(;o<0;)o+=360;0==t?this.startAngle=o:1==t&&(this.endAngle=o)}this.calculateParts()}}]),e}();e.default=r,SuperMap.Geometry.ConcentricCircle=r},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),l=function t(e,i,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,i);if(void 0===n){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,i,o)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(o)},r=function(t){return t&&t.__esModule?t:{default:t}}(i(0)),u=function(t){function e(t){o(this,e);var i=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.CLASS_NAME="SuperMap.Geometry.CurveEight",i.libID=0,i.code=SuperMap.Plot.SymbolType.CURVEEIGHT,i.symbolType=SuperMap.Plot.SymbolType.CURVEEIGHT,i.symbolName="八字形",i.minEditPts=2,i.maxEditPts=3,i}return s(e,r["default"]),a(e,[{key:"destroy",value:function(){l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).call(this)}},{key:"calculateParts",value:function(){if(this.clearComponents(),this.controlPoints&&null!==this.controlPoints&&!(this.minEditPts>this.controlPoints.length))if(2===this.controlPoints.length){var t=this.controlPoints[0].clone(),e=this.controlPoints[1].clone(),i=SuperMap.Plot.PlottingUtil.distance(t,e)/2,o=180*SuperMap.Plot.PlottingUtil.radian(t,e)/Math.PI,n=new SuperMap.Geometry.Point((t.x+e.x)/2,(t.y+e.y)/2),s=SuperMap.Plot.PlottingUtil.circlePoint(n,i,i,o+90),a=SuperMap.Plot.PlottingUtil.circlePoint(n,3*i,3*i,o+90);this.addCell(SuperMap.Plot.SymbolType.CIRCLESYMBOL,[s,new SuperMap.Geometry.Point(s.x+i,s.y)]),this.addCell(SuperMap.Plot.SymbolType.CIRCLESYMBOL,[a,new SuperMap.Geometry.Point(a.x+i,a.y)])}else{var t=this.controlPoints[0].clone(),e=this.controlPoints[1].clone(),l=this.controlPoints[2].clone(),o=0;o=SuperMap.Plot.PlottingUtil.isRight(l,t,e)?180*SuperMap.Plot.PlottingUtil.radian(e,t)/Math.PI+90:180*SuperMap.Plot.PlottingUtil.radian(t,e)/Math.PI+90;var i=SuperMap.Plot.PlottingUtil.distance(t,e)/2,n=new SuperMap.Geometry.Point((t.x+e.x)/2,(t.y+e.y)/2),s=SuperMap.Plot.PlottingUtil.circlePoint(n,i,i,o),r=SuperMap.Plot.PlottingUtil.plumbLineLen(l,t,e);if(r<=4*i){a=SuperMap.Plot.PlottingUtil.circlePoint(n,3*i,3*i,o);this.addCell(SuperMap.Plot.SymbolType.CIRCLESYMBOL,[s,new SuperMap.Geometry.Point(s.x+i,s.y)]),this.addCell(SuperMap.Plot.SymbolType.CIRCLESYMBOL,[a,new SuperMap.Geometry.Point(a.x+i,a.y)])}else{for(var a=SuperMap.Plot.PlottingUtil.circlePoint(n,r-i,r-i,o),u=180*Math.acos(i/(r-2*i))/Math.PI,p=o-u,h=o-180+u,c=o-180-u+360,y=[],g=o+u-360;g<=p;g+=4){S=SuperMap.Plot.PlottingUtil.circlePoint(s,i,i,g);y.push(S)}var d=SuperMap.Plot.PlottingUtil.circlePoint(s,i,i,p);y.push(d);for(var f=[],g=h;g<c;g+=4){var S=SuperMap.Plot.PlottingUtil.circlePoint(a,i,i,g);f.push(S)}var P=SuperMap.Plot.PlottingUtil.circlePoint(a,i,i,c);f.push(P);var m=[];m=m.concat(y);for(g=f.length-1;g>=0;g--)m.push(f[g]);this.addCell(SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,m)}}}}]),e}();e.default=u,SuperMap.Geometry.CurveEight=u},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),l=function t(e,i,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,i);if(void 0===n){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,i,o)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(o)},r=function(t){return t&&t.__esModule?t:{default:t}}(i(0)),u=function(t){function e(t){o(this,e);var i=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.CLASS_NAME="SuperMap.Geometry.FreeCurve",i.code=SuperMap.Plot.SymbolType.FREECURVE,i.libID=0,i.symbolType=SuperMap.Plot.SymbolType.FREECURVE,i.symbolName="自由线",i.minEditPts=2,i.maxEditPts=9999,i}return s(e,r["default"]),a(e,[{key:"calculateParts",value:function(){if(this.clearComponents(),!(null===this.controlPoints||this.controlPoints.length<this.minEditPts)){this.clearScalePoints();var t=[];if(this.controlPoints.length<3)t.push(this.controlPoints[0]),t.push(this.controlPoints[1]);else{if(!this.getIsEdit()){var e=new SuperMap.Bounds(0,0,100,100),i=this.freeCurveBoundsPixelToLatLng(e),o=this.reSample(this.controlPoints,i.getWidth()/50);o.length<3&&(o=this.controlPoints),this.controlPoints=[],this.controlPoints=this.controlPoints.concat(o)}var n=SuperMap.Plot.PlottingUtil.computeBeizerPoints(this.getIsEdit(),this.controlPoints,this.getScaleValues());n.scalePoints=SuperMap.Plot.PlottingUtil.clearSamePts(n.scalePoints),n.scaleValues=SuperMap.Plot.PlottingUtil.clearSamePts(n.scaleValues),this.setScaleValues(n.scaleValues);for(var s=0,a=n.scalePoints.length;s<a;s++){var l=n.scalePoints[s];l.isScalePoint=!0,l.tag=s,this.addScalePoint(l)}t=SuperMap.Plot.PlottingUtil.clonePoints(n.beizerPoints)}this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,t)}}},{key:"modifyPoint",value:function(t,e){if(!0===e.isScalePoint){if(t<0||t>2*this.controlPoints.length-1)return;var i=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints);if(2>i.length)return;var o=SuperMap.Plot.PlottingUtil.polylineDistance(i),n=-1;n=t%2==0?Math.floor(t/2):Math.floor((t+1)/2);var s=(e.x-i[n].x)/o,a=(e.y-i[n].y)/o;this.getScaleValues()[2*t]=s,this.getScaleValues()[2*t+1]=a}this.calculateParts()}},{key:"parseSymbolData",value:function(){l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"parseSymbolData",this).call(this)}},{key:"setSymbolData",value:function(){l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setSymbolData",this).call(this)}},{key:"reSample",value:function(t,e){var i=[];if(null==t||e<0)return i;var o=t.length;if(o>2){var n=new SuperMap.Geometry.Point(0,0),s=0,a=0,l=0,r=2*Math.PI;n=t[0],i.push(n);for(var u=!1,p=!1,h=!1,c=1;c<o;c++)if(a=Math.sqrt((t[c].y-n.y)*(t[c].y-n.y)+(t[c].x-n.x)*(t[c].x-n.x)),SuperMap.Plot.PlottingUtil.equalFuzzy(0,a))u&&(n=t[c-1],c--,i.push(n),l=0,r=2*Math.PI,u=!1,p=!1,h=!1);else{var y=(t[c].x-n.x)/a,g=(t[c].y-n.y)/a;if(s=g>0||SuperMap.Plot.PlottingUtil.equalFuzzy(0,g)?Math.acos(y):2*Math.PI-Math.acos(y),r>2*Math.PI&&s+2*Math.PI<r?(s+=2*Math.PI,l<0&&(l+=2*Math.PI)):l<0&&s-2*Math.PI>l&&(s-=2*Math.PI,r>2*Math.PI&&(r-=2*Math.PI)),s>l&&s<r||SuperMap.Plot.PlottingUtil.equalFuzzy(0,s-l)||SuperMap.Plot.PlottingUtil.equalFuzzy(0,s-r)){var d=Math.atan(e/a);p?l<s-d&&(l=s-d):(p=!0,l=s-d),h?r>s+d&&(r=s+d):(h=!0,r=s+d),u=!0}else n=t[c-1],c--,i.push(n),l=0,r=2*Math.PI,u=!1,p=!1,h=!1}return i.push(t[o-1]),i}return i}},{key:"reSampleByAngle",value:function(t,e){var i=[],o=t.length;if(null==t||o<=0||e<=0)return i;for(var n=t,s=o,a=!1;SuperMap.Plot.PlottingUtil.equalFuzzy(n[0].x,n[s-1].x)&&SuperMap.Plot.PlottingUtil.equalFuzzy(n[0].y,n[s-1].y);){if((s-=1)<=0)return i;a=!0}var l,r,u=[];for(l=0;l<s;l++)u.push(0);for(u[0]=1,u[s-1]=1,r=0,l=1;l<s-1;l++)if(SuperMap.Plot.PlottingUtil.distance(n[r],n[l])>1e-10&&SuperMap.Plot.PlottingUtil.distance(n[r],n[l+1])>1e-10){var p=180*SuperMap.Plot.PlottingUtil.InnerAngle(n[l],n[r],n[l+1])/Math.PI;p>e&&p<180-e&&(u[l]=1,r++)}var h=0;for(l=0;l<s;l++)1==u[l]&&h++;if(h>0){for(a&&h++,i=[],r=0,l=0;l<s;l++)1==u[l]&&(i[r++]=n[l]);return a&&(i[r]=i[0]),i}return i}}]),e}();e.default=u,SuperMap.Geometry.FreeCurve=u},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),l=function t(e,i,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,i);if(void 0===n){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,i,o)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(o)},r=function(t){return t&&t.__esModule?t:{default:t}}(i(0)),u=function(t){function e(t){o(this,e);var i=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.CLASS_NAME="SuperMap.Geometry.GeoTooltipBox",i.minEditPts=3,i.maxEditPts=3,i.libID=0,i.code=SuperMap.Plot.SymbolType.ANNOFRAMESYMBOL,i.symbolType=SuperMap.Plot.SymbolType.ANNOFRAMESYMBOL,0===i.getScaleValues().length&&i.getScaleValues().push(.126),i}return s(e,r["default"]),a(e,[{key:"destroy",value:function(){this.type=null,this.position=null,this.index=null,l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).call(this)}},{key:"calculateParts",value:function(){this.clearComponents();var t=this.getScaleValues()[0];if(!(t<0||t>1))if(t=(1-t)/2,this.controlPoints.length>=this.minEditPts){this.controlPoints[2]&&(this.controlPoints[2].isFixedPos=!0);var e,i,o,n,s,a;this.controlPoints[0].x<this.controlPoints[1].x?(e=this.controlPoints[0].x,o=this.controlPoints[1].x):(e=this.controlPoints[1].x,o=this.controlPoints[0].x),this.controlPoints[0].y<this.controlPoints[1].y?(n=this.controlPoints[0].y,i=this.controlPoints[1].y):(n=this.controlPoints[1].y,i=this.controlPoints[0].y),s=this.controlPoints[2].x,a=this.controlPoints[2].y;var l=0,r=(i-n)/(o-e);l=s<e?a>i?Math.abs((a-i)/(s-e))>r?2:1:a<n&&Math.abs((a-n)/(s-e))>r?4:1:s>o?a>i?Math.abs((a-i)/(s-o))>r?2:3:a<n&&Math.abs((a-n)/(s-o))>r?4:3:a>i?2:a<n?4:0,this.clearScalePoints();var u=[];switch(u.push(new SuperMap.Geometry.Point(e,n)),u.push(new SuperMap.Geometry.Point(e,i)),u.push(new SuperMap.Geometry.Point(o,i)),u.push(new SuperMap.Geometry.Point(o,n)),l){case 0:break;case 1:this.addScalePoint(new SuperMap.Geometry.Point(e,i-(i-n)*t)),u.splice(l,0,new SuperMap.Geometry.Point(e,i-(i-n)*t)),u.splice(l,0,this.controlPoints[2].clone()),u.splice(l,0,new SuperMap.Geometry.Point(e,n+(i-n)*t));break;case 2:this.addScalePoint(new SuperMap.Geometry.Point(o-(o-e)*t,i)),u.splice(l,0,new SuperMap.Geometry.Point(o-(o-e)*t,i)),u.splice(l,0,this.controlPoints[2].clone()),u.splice(l,0,new SuperMap.Geometry.Point(e+(o-e)*t,i));break;case 3:this.addScalePoint(new SuperMap.Geometry.Point(o,i-(i-n)*t)),u.splice(l,0,new SuperMap.Geometry.Point(o,n+(i-n)*t)),u.splice(l,0,this.controlPoints[2].clone()),u.splice(l,0,new SuperMap.Geometry.Point(o,i-(i-n)*t));break;case 4:this.addScalePoint(new SuperMap.Geometry.Point(o-(o-e)*t,n)),u.splice(l,0,new SuperMap.Geometry.Point(e+(o-e)*t,n)),u.splice(l,0,this.controlPoints[2].clone()),u.splice(l,0,new SuperMap.Geometry.Point(o-(o-e)*t,n))}this.addCell(SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,u)}else if(this.controlPoints.length>=2&&this.controlPoints.length<this.minEditPts){var p={surroundLineFlag:!1};this.addCell(SuperMap.Plot.SymbolType.RECTANGLESYMBOL,this.controlPoints,p)}}},{key:"modifyPoint",value:function(t,e){if(!0===e.isScalePoint&&0==t){var i,o,n,s,a,l,r=this.getScalePoints()[0];this.controlPoints[0].x<this.controlPoints[1].x?(i=this.controlPoints[0].x,n=this.controlPoints[1].x):(i=this.controlPoints[1].x,n=this.controlPoints[0].x),this.controlPoints[0].y<this.controlPoints[1].y?(s=this.controlPoints[0].y,o=this.controlPoints[1].y):(s=this.controlPoints[1].y,o=this.controlPoints[0].y),a=this.controlPoints[2].x,l=this.controlPoints[2].y;var u=(o-s)/(n-i),p=.25;switch(a<i?l>o?Math.abs((l-o)/(a-i))>u?2:1:l<s&&Math.abs((l-s)/(a-i))>u?4:1:a>n?l>o?Math.abs((l-o)/(a-n))>u?2:3:l<s&&Math.abs((l-s)/(a-n))>u?4:3:l>o?2:l<s?4:0){case 1:case 3:var h=r.y+(e.y-r.y);h>o&&(h=o),h<(o+s)/2&&(h=(o+s)/2),p=1-2*(o-h)/(o-s);break;case 2:case 4:var c=r.x+(e.x-r.x);c>n&&(c=n),c<(i+n)/2&&(c=(i+n)/2),p=1-2*(n-c)/(n-i)}p<0&&(p=0),p>1&&(p=1),this.getScaleValues()[0]=p}this.calculateParts()}}]),e}();e.default=u,SuperMap.Geometry.GeoTooltipBox=u},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),l=function t(e,i,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,i);if(void 0===n){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,i,o)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(o)},r=function(t){return t&&t.__esModule?t:{default:t}}(i(0)),u=function(t){function e(t){o(this,e);var i=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.CLASS_NAME="SuperMap.Geometry.GeoTooltipBoxM",i.minEditPts=4,i.maxEditPts=4,i.libID=0,i.code=SuperMap.Plot.SymbolType.ANNOFRAMESYMBOLM,i.symbolType=SuperMap.Plot.SymbolType.ANNOFRAMESYMBOLM,i.symbolName="多角标注框",0===i.getScaleValues().length&&(i.getScaleValues().push(.126),i.getScaleValues().push(.126)),i}return s(e,r["default"]),a(e,[{key:"destroy",value:function(){this.type=null,this.position=null,this.index=null,l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destory",this).call(this)}},{key:"calculateParts",value:function(){this.clearComponents();var t=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints);if((t=SuperMap.Plot.PlottingUtil.clearSamePts(t)).length===this.minEditPts-1&&t.push(t[t.length-1].clone()),t.length>=this.minEditPts){this.controlPoints[2]&&(this.controlPoints[2].isFixedPos=!0),this.controlPoints[3]&&(this.controlPoints[3].isFixedPos=!0);var e=this.getScaleValues()[0];if(e<0||e>1)return;e=(1-e)/2;var i=this.getScaleValues()[1];if(i<0||i>1)return;i=(1-i)/2;var o,n,s,a,l,r;t[0].x<t[1].x?(o=t[0].x,s=t[1].x):(o=t[1].x,s=t[0].x),t[0].y<t[1].y?(a=t[0].y,n=t[1].y):(a=t[1].y,n=t[0].y),l=t[2].x,r=t[2].y;var u=this.getAction(l,r,o,n,s,a);l=t[3].x,r=t[3].y;var p=this.getAction(l,r,o,n,s,a);this.clearScalePoints();var h=[];if(h.push(new SuperMap.Geometry.Point(o,a)),h.push(new SuperMap.Geometry.Point(o,n)),h.push(new SuperMap.Geometry.Point(s,n)),h.push(new SuperMap.Geometry.Point(s,a)),u===p&&0!==u){switch(u){case 0:break;case 1:g=new SuperMap.Geometry.Point(o,a+(n-a)/2*e),d=new SuperMap.Geometry.Point(o,(n+a)/2-(n-a)/2*e),f=new SuperMap.Geometry.Point(o,(n+a)/2+(n-a)/2*i),S=new SuperMap.Geometry.Point(o,n-(n-a)/2*i);break;case 2:g=new SuperMap.Geometry.Point(o+(s-o)/2*e,n),d=new SuperMap.Geometry.Point((o+s)/2-(s-o)/2*e,n),f=new SuperMap.Geometry.Point((o+s)/2+(s-o)/2*i,n),S=new SuperMap.Geometry.Point(s-(s-o)/2*i,n);break;case 3:g=new SuperMap.Geometry.Point(s,n-(n-a)/2*e),d=new SuperMap.Geometry.Point(s,(n+a)/2+(n-a)/2*e),f=new SuperMap.Geometry.Point(s,(n+a)/2-(n-a)/2*i),S=new SuperMap.Geometry.Point(s,a+(n-a)/2*i);break;case 4:g=new SuperMap.Geometry.Point(s-(s-o)/2*e,a),d=new SuperMap.Geometry.Point((o+s)/2+(s-o)/2*e,a),f=new SuperMap.Geometry.Point((o+s)/2-(s-o)/2*i,a),S=new SuperMap.Geometry.Point(o+(s-o)/2*i,a)}var c=new SuperMap.Geometry.Point(0,0),y=SuperMap.Plot.PlottingUtil.intersectLineSegs(d,t[2],f,t[3],c);if(y&&SuperMap.Plot.PlottingUtil.equalFuzzy(c.x,d.x)&&SuperMap.Plot.PlottingUtil.equalFuzzy(c.y,d.y)&&(y=!1),y){switch(u){case 0:break;case 1:g.y+=(n-a)/2,d.y+=(n-a)/2,f.y-=(n-a)/2,S.y-=(n-a)/2;break;case 2:g.x+=(s-o)/2,d.x+=(s-o)/2,f.x-=(s-o)/2,S.x-=(s-o)/2;break;case 3:g.y-=(n-a)/2,d.y-=(n-a)/2,f.y+=(n-a)/2,S.y+=(n-a)/2;break;case 4:g.x-=(s-o)/2,d.x-=(s-o)/2,f.x+=(s-o)/2,S.x+=(s-o)/2}h.splice(u,0,d),h.splice(u,0,t[2].clone()),h.splice(u,0,g),h.splice(u,0,S),h.splice(u,0,t[3].clone()),h.splice(u,0,f)}else h.splice(u,0,S),h.splice(u,0,t[3].clone()),h.splice(u,0,f),h.splice(u,0,d),h.splice(u,0,t[2].clone()),h.splice(u,0,g);switch(u){case 0:break;case 1:case 2:this.addScalePoint(d),this.addScalePoint(S);break;case 3:case 4:this.addScalePoint(g),this.addScalePoint(f)}}else{var g,d,f,S;switch(u){case 0:this.addScalePoint(new SuperMap.Geometry.Point(0,0));break;case 1:g=new SuperMap.Geometry.Point(o,a+(n-a)*e),d=new SuperMap.Geometry.Point(o,n-(n-a)*e),this.addScalePoint(d);break;case 2:g=new SuperMap.Geometry.Point(o+(s-o)*e,n),d=new SuperMap.Geometry.Point(s-(s-o)*e,n),this.addScalePoint(d);break;case 3:g=new SuperMap.Geometry.Point(s,n-(n-a)*e),d=new SuperMap.Geometry.Point(s,a+(n-a)*e),this.addScalePoint(g);break;case 4:g=new SuperMap.Geometry.Point(s-(s-o)*e,a),d=new SuperMap.Geometry.Point(o+(s-o)*e,a),this.addScalePoint(g)}switch(p){case 0:this.addScalePoint(new SuperMap.Geometry.Point(0,0));break;case 1:f=new SuperMap.Geometry.Point(o,a+(n-a)*i),S=new SuperMap.Geometry.Point(o,n-(n-a)*i),this.addScalePoint(S);break;case 2:f=new SuperMap.Geometry.Point(o+(s-o)*i,n),S=new SuperMap.Geometry.Point(s-(s-o)*i,n),this.addScalePoint(S);break;case 3:f=new SuperMap.Geometry.Point(s,n-(n-a)*i),S=new SuperMap.Geometry.Point(s,a+(n-a)*i),this.addScalePoint(f);break;case 4:f=new SuperMap.Geometry.Point(s-(s-o)*i,a),S=new SuperMap.Geometry.Point(o+(s-o)*i,a),this.addScalePoint(f)}u>p?(0!==u&&(h.splice(u,0,d),h.splice(u,0,t[2].clone()),h.splice(u,0,g)),0!==p&&(h.splice(p,0,S),h.splice(p,0,t[3].clone()),h.splice(p,0,f))):(0!==p&&(h.splice(p,0,S),h.splice(p,0,t[3].clone()),h.splice(p,0,f)),0!==u&&(h.splice(u,0,d),h.splice(u,0,t[2].clone()),h.splice(u,0,g)))}this.addCell(SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,h,{surroundLineFlag:!1})}else if(t.length>=2&&t.length<this.minEditPts){var P={surroundLineFlag:!1};this.addCell(SuperMap.Plot.SymbolType.RECTANGLESYMBOL,t,P)}}},{key:"modifyPoint",value:function(t,e){if(!0===e.isScalePoint){var i,o,n,s,a,l,r=this.getScalePoints()[t];this.controlPoints[0].x<this.controlPoints[1].x?(i=this.controlPoints[0].x,n=this.controlPoints[1].x):(i=this.controlPoints[1].x,n=this.controlPoints[0].x),this.controlPoints[0].y<this.controlPoints[1].y?(s=this.controlPoints[0].y,o=this.controlPoints[1].y):(s=this.controlPoints[1].y,o=this.controlPoints[0].y),a=this.controlPoints[2].x,l=this.controlPoints[2].y;var u=this.getAction(a,l,i,o,n,s);a=this.controlPoints[3].x,l=this.controlPoints[3].y;var p=this.getAction(a,l,i,o,n,s),h=.25;if(u===p&&0!==u)switch(u){case 1:case 3:c=2*(e.y-r.y)/((o-s)/2);h=this.getScaleValues()[t]+c;break;case 2:case 4:c=2*(e.x-r.x)/((n-i)/2);h=this.getScaleValues()[t]+c}else switch(0===t?u:p){case 0:h=this.getScaleValues()[t];break;case 1:case 3:c=2*(e.y-r.y)/(o-s);h=this.getScaleValues()[t]+c;break;case 2:case 4:var c=2*(e.x-r.x)/(n-i);h=this.getScaleValues()[t]+c}h<0&&(h=0),h>1&&(h=1),this.getScaleValues()[t]=h}this.calculateParts()}},{key:"getAction",value:function(t,e,i,o,n,s){var a=(o-s)/(n-i);return t<i?e>o?Math.abs((e-o)/(t-i))>a?2:1:e<s&&Math.abs((e-s)/(t-i))>a?4:1:t>n?e>o?Math.abs((e-o)/(t-n))>a?2:3:e<s&&Math.abs((e-s)/(t-n))>a?4:3:e>o?2:e<s?4:0}}]),e}();e.default=u,SuperMap.Geometry.GeoTooltipBoxM=u},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),l=function t(e,i,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,i);if(void 0===n){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,i,o)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(o)},r=function(t){return t&&t.__esModule?t:{default:t}}(i(0)),u=function(t){function e(t){o(this,e);var i=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.islocationCircle=!1,i.tipPoint=null,i.textBoxType=null,i.CLASS_NAME="SuperMap.Geometry.LineMarking",i.minEditPts=2,i.maxEditPts=2,i.libID=0,i.code=SuperMap.Plot.SymbolType.LINEMARKING,i.symbolType=SuperMap.Plot.SymbolType.LINEMARKING,i.symbolName="线型标注",i.islocationCircle=null,null===i.textBoxType&&(i.textBoxType=SuperMap.Plot.TextBoxType.RECTBOX),0===i.getScaleValues().length&&(i.getScaleValues().push(.126),i.getScaleValues().push(.1),i.getScaleValues().push(-.3)),i}return s(e,r["default"]),a(e,[{key:"destroy",value:function(){this.islocationCircle=null,this.textBoxType=null,l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).call(this)}},{key:"calculateParts",value:function(){this.clearComponents();var t=this.getScaleValues()[0];if(!(t<0||t>1))if(t=(1-t)/2,this.controlPoints.length>=this.minEditPts){this.clearScalePoints();var e,i,o,n,s,a,l=[];if(this.controlPoints[0].x<this.controlPoints[1].x?(e=this.controlPoints[0].x,o=this.controlPoints[1].x):(e=this.controlPoints[1].x,o=this.controlPoints[0].x),this.controlPoints[0].y<this.controlPoints[1].y?(n=this.controlPoints[0].y,i=this.controlPoints[1].y):(n=this.controlPoints[1].y,i=this.controlPoints[0].y),l.push(new SuperMap.Geometry.Point(e,n)),l.push(new SuperMap.Geometry.Point(e,i)),l.push(new SuperMap.Geometry.Point(o,i)),l.push(new SuperMap.Geometry.Point(o,n)),null===this.tipPoint&&(this.tipPoint=new SuperMap.Geometry.Point,this.tipPoint.x=e+(o-e)*this.getScaleValues()[1],this.tipPoint.y=n+(i-n)*this.getScaleValues()[2]),!1===this.getIsEdit()&&(this.tipPoint.x=e+(o-e)*this.getScaleValues()[1],this.tipPoint.y=n+(i-n)*this.getScaleValues()[2]),this.islocationCircle&&this.addCell(SuperMap.Plot.SymbolType.CIRCLESYMBOL,[this.tipPoint,new SuperMap.Geometry.Point(this.tipPoint.x-.05,this.tipPoint.y-.05)]),this.addScalePoint(this.tipPoint,0),this.textBoxType===SuperMap.Plot.TextBoxType.RECTBOX||this.textBoxType===SuperMap.Plot.TextBoxType.LINEBOX){s=this.tipPoint.x,a=this.tipPoint.y;var r=0,u=(i-n)/(o-e),p=[];switch(r=s<e?a>i?Math.abs((a-i)/(s-e))>u?2:1:a<n&&Math.abs((a-n)/(s-e))>u?4:1:s>o?a>i?Math.abs((a-i)/(s-o))>u?2:3:a<n&&Math.abs((a-n)/(s-o))>u?4:3:a>i?2:a<n?4:0){case 0:break;case 1:l.splice(r,0,new SuperMap.Geometry.Point(e,i-(i-n)*t)),p.push(new SuperMap.Geometry.Point(e,i-(i-n)*t)),p.push(new SuperMap.Geometry.Point(this.tipPoint.x+.05,this.tipPoint.y+.05));break;case 2:l.splice(r,0,new SuperMap.Geometry.Point(o-(o-e)*t,i)),p.push(new SuperMap.Geometry.Point(o-(o-e)*t,i)),p.push(new SuperMap.Geometry.Point(this.tipPoint.x-.05,this.tipPoint.y-.05));break;case 3:l.splice(r,0,new SuperMap.Geometry.Point(o,n+(i-n)*t)),p.push(new SuperMap.Geometry.Point(o,i-(i-n)*t)),p.push(new SuperMap.Geometry.Point(this.tipPoint.x-.05,this.tipPoint.y-.05));break;case 4:l.splice(r,0,new SuperMap.Geometry.Point(e+(o-e)*t,n)),p.push(new SuperMap.Geometry.Point(o-(o-e)*t,n)),p.push(new SuperMap.Geometry.Point(this.tipPoint.x+.05,this.tipPoint.y+.05))}0!==p.length&&this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,p)}if(0!==l.length&&this.textBoxType===SuperMap.Plot.TextBoxType.RECTBOX)this.addCell(SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,l);else if(0!==l.length&&this.textBoxType===SuperMap.Plot.TextBoxType.LINEBOX){var h=[];switch(r){case 0:break;case 1:h=(h=(h=h.concat(l[0])).concat(l[1])).concat(l[2]);break;case 2:h=(h=(h=h.concat(l[1])).concat(l[2])).concat(l[3]);break;case 3:h=(h=(h=h.concat(l[2])).concat(l[3])).concat(l[4]);break;case 4:h=(h=(h=h.concat(l[3])).concat(l[4])).concat(l[0])}3===h.length?this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,h):this.addCell(SuperMap.Plot.SymbolType.RECTANGLESYMBOL,this.controlPoints)}}else this.controlPoints.length>=2&&this.controlPoints.length<this.minEditPts&&this.addCell(SuperMap.Plot.SymbolType.RECTANGLESYMBOL,this.controlPoints)}},{key:"modifyPoint",value:function(t,e){if(!0===e.isScalePoint)if(0===t)this.tipPoint.x=e.x,this.tipPoint.y=e.y;else if(1===t){var i,o,n,s,a,l,r=this.getScalePoints()[0];this.controlPoints[0].x<this.controlPoints[1].x?(i=this.controlPoints[0].x,n=this.controlPoints[1].x):(i=this.controlPoints[1].x,n=this.controlPoints[0].x),this.controlPoints[0].y<this.controlPoints[1].y?(s=this.controlPoints[0].y,o=this.controlPoints[1].y):(s=this.controlPoints[1].y,o=this.controlPoints[0].y),a=this.tipPoint.x,l=this.tipPoint.y;var u=(o-s)/(n-i),p=.25;switch(a<i?l>o?Math.abs((l-o)/(a-i))>u?2:1:l<s&&Math.abs((l-s)/(a-i))>u?4:1:a>n?l>o?Math.abs((l-o)/(a-n))>u?2:3:l<s&&Math.abs((l-s)/(a-n))>u?4:3:l>o?2:l<s?4:0){case 1:case 3:var h=r.y+(e.y-r.y);h>o&&(h=o),h<(o+s)/2&&(h=(o+s)/2),p=1-2*(o-h)/(o-s);break;case 2:case 4:var c=r.x+(e.x-r.x);c>n&&(c=n),c<(i+n)/2&&(c=(i+n)/2),p=1-2*(n-c)/(n-i)}p<0&&(p=0),p>1&&(p=1),this.getScaleValues()[0]=p}this.calculateParts()}}]),e}();e.default=u,SuperMap.Geometry.LineMarking=u},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),l=function t(e,i,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,i);if(void 0===n){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,i,o)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(o)},r=function(t){return t&&t.__esModule?t:{default:t}}(i(0)),u=function(t){function e(t){o(this,e);var i=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.subSectionCount=10,i.CLASS_NAME="SuperMap.Geometry.LineRelation",i.minEditPts=2,i.maxEditPts=2,i.libID=0,i.code=SuperMap.Plot.SymbolType.LINERELATION,i.symbolType=SuperMap.Plot.SymbolType.LINERELATION,i.symbolName="对象间连线",i}return s(e,r["default"]),a(e,[{key:"destroy",value:function(){this.subSectionCount=null,l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).call(this)}},{key:"calculateParts",value:function(){this.clearComponents();for(var t=0;t<this.controlPoints.length;t++)this.controlPoints[t].tag=t;var e=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints);null!==e&&e.length>=this.minEditPts&&this.computeLine(e)}},{key:"computeLine",value:function(t){this.components=[];var e=t[0],i=t[t.length-1];this.subSectionCount<=1&&(this.subSectionCount=10);var o=SuperMap.Plot.PlottingUtil.distance(e,i)/(2*this.subSectionCount-1);if(this.lineRelationType===SuperMap.Plot.LineRelation.SOLID)this.addCell(24,t,{surroundLineFlag:!1});else if(this.lineRelationType===SuperMap.Plot.LineRelation.DASH)for(a=0;a<this.subSectionCount;a++){var n=SuperMap.Plot.PlottingUtil.findPoint(e,i,2*a*o,0),s=SuperMap.Plot.PlottingUtil.findPoint(e,i,(2*a+1)*o,0);(u=[]).push(n),u.push(s),this.addCell(24,u,{surroundLineFlag:!1})}else if(this.lineRelationType===SuperMap.Plot.LineRelation.ARROW)for(var a=0;a<this.subSectionCount;a++){var n=SuperMap.Plot.PlottingUtil.findPoint(e,i,2*a*o,0),s=SuperMap.Plot.PlottingUtil.findPoint(e,i,(2*a+1)*o,0),l=SuperMap.Plot.PlottingUtil.findPoint(s,n,o,60),r=SuperMap.Plot.PlottingUtil.findPoint(s,n,o,-60),u=[];u.push(l),u.push(s),u.push(r),this.addCell(24,[l,s,r],{surroundLineFlag:!1})}}}]),e}();e.default=u,SuperMap.Geometry.LineRelation=u},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),l=function t(e,i,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,i);if(void 0===n){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,i,o)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(o)},r=function(t){return t&&t.__esModule?t:{default:t}}(i(0)),u=function(t){function e(t){o(this,e);var i=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.CLASS_NAME="SuperMap.Geometry.NodeChain",i.libID=0,i.code=SuperMap.Plot.SymbolType.NODECHAIN,i.symbolType=SuperMap.Plot.SymbolType.NODECHAIN,i.symbolName="节点链",i.minEditPts=2,i.maxEditPts=99999,0===i.getScaleValues().length&&(i.getScaleValues().push(0),null!==i.symbolData&&void 0!==i.symbolData?i.getScaleValues()[1]=.25*i.symbolData.subSymbolScaleValue:i.getScaleValues()[1]=.1),i}return s(e,r["default"]),a(e,[{key:"destroy",value:function(){l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).call(this)}},{key:"calculateParts",value:function(){if(this.clearComponents(),this.controlPoints&&null!==this.controlPoints){var t=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints);if(!((t=SuperMap.Plot.PlottingUtil.clearSamePts(t)).length<this.minEditPts)){this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,t),this.getIsEdit()||(this.getScaleValues()[1]=.25*this.getSubSymbolScaleValue());var e=SuperMap.Plot.PlottingUtil.polylineDistance(t),i=e*this.getScaleValues()[0],o=e*this.getScaleValues()[1];if(0<this.getSubSymbols().length&&null!==this.getSubSymbols()[0]&&void 0!==this.getSubSymbols()[0])if(this.getSubSymbols()[0].code>0)for(var n=0;n<t.length;n++){var s=new SuperMap.Geometry.Point(t[n].x,t[n].y+i);this.computeSubSymbol(this.getSubSymbols()[0],s,2*o,0)}else this.addCircles(t,i,o);else this.addCircles(t,i,o);var a=new SuperMap.Geometry.Point(t[0].x,t[0].y+i);this.addScalePoint(a);var l=SuperMap.Plot.PlottingUtil.circlePoint(a,o,o,90);this.addScalePoint(l)}}}},{key:"addCircles",value:function(t,e,i){for(var o={surroundLineFlag:!1,fillLimit:!0,fillColorLimit:!1,fillStyle:0},n=0;n<t.length;n++){var s=new SuperMap.Geometry.Point(t[n].x,t[n].y+e),a=this.getCirclePts(s,i);this.addCell(SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,a,o)}}},{key:"getCirclePts",value:function(t,e){for(var i=[],o=0;o<=360;o+=12){var n=SuperMap.Plot.PlottingUtil.circlePoint(t,e,e,o);i.push(n)}return i}},{key:"modifyPoint",value:function(t,e){if(!0===e.isScalePoint){var i=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints);if((i=SuperMap.Plot.PlottingUtil.clearSamePts(i)).length<this.minEditPts)return;var o=SuperMap.Plot.PlottingUtil.polylineDistance(i);if(0===t)this.getScaleValues()[0]=(e.y-i[0].y)/o;else if(1===t){var n=SuperMap.Plot.PlottingUtil.distance(e,i[0]);this.getScaleValues()[1]=n/o}}this.calculateParts()}}]),e}();e.default=u,SuperMap.Geometry.NodeChain=u},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=(function(t){t&&t.__esModule}(i(12)),function(){function t(e,i,n){o(this,t),this.m_x=0,this.m_y=0,this.m_type=0,this.CLASS_NAME="SuperMap.Plot.Element",this.m_x=e,this.m_y=i,this.m_type=n}return n(t,[{key:"GetX",value:function(){return this.m_x}},{key:"GetY",value:function(){return this.m_y}},{key:"GetType",value:function(){return this.m_type}},{key:"GetPosition",value:function(){return SuperMap.Geometry.Point(this.m_x,this.m_y)}},{key:"SetPosition",value:function(t,e){this.m_x=t,this.m_y=e}},{key:"GetType",value:function(){return this.m_type}},{key:"SetType",value:function(t){this.m_type=t}},{key:"IsCurveTo",value:function(){return 2==this.m_type}},{key:"IsLineTo",value:function(){return 1==this.m_type}},{key:"IsMoveTo",value:function(){return 0==this.m_type}},{key:"Equal",value:function(t){return SuperMap.Plot.PlottingUtil.equalFuzzy(this.m_x,t.m_x,1e-10)&&SuperMap.Plot.PlottingUtil.equalFuzzy(this.m_y,t.m_y,1e-10)&&this.m_type==t.m_type}},{key:"clone",value:function(){return new SuperMap.Plot.Path2D.Element(this.m_x,this.m_y,this.m_type)}}]),t}());e.default=s,SuperMap.Plot.Element=s},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),l=function(t){return t&&t.__esModule?t:{default:t}}(i(0)),r=function(t){function e(t){o(this,e);var i=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.relLineText=0,i.showPathLine=!0,i.showPathLineArrow=!1,i.isCurve=!1,i.isAvoid=!1,i.textToLineDistance=0,i.CLASS_NAME="SuperMap.Geometry.PathText",i.code=SuperMap.Plot.SymbolType.PATHTEXT,i.libID=0,i.symbolType=SuperMap.Plot.SymbolType.PATHTEXT,i.symbolName="沿线注记",i.minEditPts=2,i.maxEditPts=9999,i}return s(e,l["default"]),a(e,[{key:"getRelLineText",value:function(){if(this.graphicObject2D)return this.graphicObject2D.relLineText;this.relLineText}},{key:"getShowPathLine",value:function(){if(this.graphicObject2D)return this.graphicObject2D.showPathLine;this.showPathLine}},{key:"getShowPathLineArrow",value:function(){if(this.graphicObject2D)return this.graphicObject2D.showPathLineArrow;this.showPathLineArrow}},{key:"getIsCurve",value:function(){if(this.graphicObject2D)return this.graphicObject2D.isCurve;this.isCurve}},{key:"getIsAvoid",value:function(){if(this.graphicObject2D)return this.graphicObject2D.isAvoid;this.isAvoid}},{key:"getTextToLineDistance",value:function(){if(this.graphicObject2D)return this.graphicObject2D.textToLineDistance;this.textToLineDistance}}]),a(e,[{key:"calculateParts",value:function(){if(this.clearComponents(),this.controlPoints=SuperMap.Plot.PlottingUtil.clearSamePts(this.getControlPoints()),null!==this.controlPoints&&0!==this.controlPoints.length&&!(this.controlPoints.length<this.minEditPts)){SuperMap.Util.isArray(this.textContent)||(this.textContent=[this.textContent]);var t=[];if(t=this.getIsCurve()?SuperMap.Plot.PlottingUtil.generateBeizerPointsNoCtrlPt(this.controlPoints):SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints),this.getRelLineText()===SuperMap.Plot.RelLineText.ONBOTHLINE){this.relLineText=SuperMap.Plot.RelLineText.ONRIGHTLINE;var e=this.getTextPathPts(t,!1);this.showPathLine=this.getShowPathLine(),this.computeText(e,this.textContent[0],t),this.relLineText=SuperMap.Plot.RelLineText.ONLEFTLINE;var i=this.getShowPathLine();this.showPathLine=!1;var o=this.getTextPathPts(t,!0);this.textContent.length>1?this.computeText(o,this.textContent[1],t):this.computeText(o,this.textContent[0],t),this.relLineText=SuperMap.Plot.RelLineText.ONBOTHLINE,this.showPathLine=i}else{var n=[];n=this.getRelLineText()===SuperMap.Plot.RelLineText.ONRIGHTLINE?this.getTextPathPts(t,!1):this.getRelLineText()===SuperMap.Plot.RelLineText.ONLEFTLINE?this.getTextPathPts(t,!0):t,this.computeText(n,this.textContent[0],t)}}}},{key:"getTextPathPts",value:function(t,e){t=SuperMap.Plot.PlottingUtil.clearSamePts(t);var i=this.getLonLatDistanceFromPixel(this.getTextToLineDistance());if(0>=i)return SuperMap.Plot.PlottingUtil.clonePoints(t);var o=SuperMap.Plot.PlottingUtil.paraLine(t,i,e);return SuperMap.Plot.PlottingUtil.clearSamePts(o)}},{key:"computeText",value:function(t,e,i){if(!(t.length<2)){for(var o=e.length,n=t,s=n.length,a=0,l=0;l<n.length-1;l++)a+=SuperMap.Plot.PlottingUtil.distance(n[l],n[l+1]);var r={index:-1,pt:n[0]},u=0,p=0,h=180/Math.PI,c=this.getTextBounds(this.getStyle(),e),y="lm";y=this.relLineText===SuperMap.Plot.RelLineText.ONLINE?"lm":this.relLineText===SuperMap.Plot.RelLineText.ONLEFTLINE?"lb":"lt";var g=(a-c.getWidth())/2;g<=0&&(g=0);for(var d=[],l=0;l<o;l++){var f=this.getTextBounds(this.getStyle(),e.charAt(l));d.push(new SuperMap.Bounds(0,-c.getHeight(),f.getWidth(),0))}for(var S,P=!1,m=!1,b=0,L=0,M=[];u<=g&&p<s-1;)p++,u,u+=SuperMap.Plot.PlottingUtil.distance(n[p-1],n[p]);var v=SuperMap.Plot.PlottingUtil.findPointInPolyLine(n,g),_=SuperMap.Plot.PlottingUtil.radian(n[p-1],n[p])*h;_>180&&(_-=360),_<-180&&(_+=360),_>90&&_<=180?(b=-180,P=!0,m=!0):_>-180&&_<-90&&(b=180,P=!0,m=!0);0!=b?this.relLineText===SuperMap.Plot.RelLineText.ONLINE||(y=this.relLineText===SuperMap.Plot.RelLineText.ONLEFTLINE?"lt":"lb"):this.relLineText===SuperMap.Plot.RelLineText.ONLINE||(y=this.relLineText===SuperMap.Plot.RelLineText.ONLEFTLINE?"lb":"lt");for(l=0;l<o&&!(g>a);l++){var T=l;for(m&&(T=o-l-1),L=(S=d[T]).getWidth(),P&&(g+=L);u<=g&&p<s-1;)p++,u,u+=SuperMap.Plot.PlottingUtil.distance(n[p-1],n[p]);var x=(_=SuperMap.Plot.PlottingUtil.radian(n[p-1],n[p])*h)+b;if((r=SuperMap.Plot.PlottingUtil.findPointInPolyLine(n,g)).index<0)break;S.add(r.pt.x,r.pt.y);var O=e.charAt(T),A={};A.type=SuperMap.Plot.SymbolType.TEXTSYMBOL,A.textContent=O,A.positionPoints=[r.pt],A.style={surroundLineFlag:!1,labelAlign:y,labelRotation:-x},M.push(A),P||(g+=L)}var w=SuperMap.Plot.PlottingUtil.findPointInPolyLine(n,g);if(this.showPathLine){if(this.relLineText===SuperMap.Plot.RelLineText.ONLINE&&this.getIsAvoid()){if(v.index>=0){for(var D=[],l=0;l<=v.index;l++)D.push(i[l]);D.push(v.pt),this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,D)}if(w.index>=0){var E=[];E.push(w.pt);for(l=w.index+1;l<i.length;l++)E.push(i[l]);this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,E)}}else this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,i);this.getShowPathLineArrow()&&this.addArrow(i)}for(l=0;l<M.length;l++)this.components.push(M[l])}}},{key:"addArrow",value:function(t){if(t.length<2)return t;var e=0,i=SuperMap.Plot.PlottingUtil.polylineDistance(this.controlPoints)*(e=(this.getIsEdit(),null===this.getSubSymbolScaleValue()?.05:.5*this.getSubSymbolScaleValue())),o=t[t.length-1];if(t.length>2){for(var n=-1,s=t.length-2;s>=0;s--)if(i<SuperMap.Plot.PlottingUtil.distance(o,t[s])){n=s;break}t.splice(n+1,t.length-n),t.push(o)}var a=t[t.length-2],l=t[t.length-1],r=i;if(void 0===a)return t;if(!(SuperMap.Plot.PlottingUtil.distance(a,l)<i)){var u=SuperMap.Plot.PlottingUtil.radian(a,l)*this.RTOD,p=SuperMap.Plot.PlottingUtil.circlePoint(l,r,r,u+157.5),h=SuperMap.Plot.PlottingUtil.circlePoint(l,r,r,u+202.5),c={surroundLineFlag:!1,fillLimit:!0,fillColor:this.getStyle().color,lineTypeLimit:!0,fill:!0};this.addCell(SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,[p,t[t.length-1],h],c)}}}]),e}();e.default=r,SuperMap.Geometry.PathText=r},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),l=function t(e,i,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,i);if(void 0===n){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,i,o)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(o)},r=function(t){return t&&t.__esModule?t:{default:t}}(i(0)),u=function(t){function e(t){o(this,e);var i=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.annotationPosition=null,i.CLASS_NAME="SuperMap.Geometry.PolygonRegion",i.minEditPts=3,i.maxEditPts=9999,i.libID=0,i.code=SuperMap.Plot.SymbolType.POLYGONREGION,i.symbolType=SuperMap.Plot.SymbolType.POLYGONREGION,i.symbolName="多边形区域管理",0===i.getScaleValues().length&&i.getScaleValues().push(0),i}return s(e,r["default"]),a(e,[{key:"destroy",value:function(){l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).call(this)}},{key:"calculateParts",value:function(){this.clearComponents();var t=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints);if(null!==(t=SuperMap.Plot.PlottingUtil.clearSamePts(t))&&t.length>=this.minEditPts){this.addCell(32,t,{surroundLineFlag:!1});SuperMap.Plot.PlottingUtil.isPloyClockwise(t);if(this.textContent&&null!==this.textContent&&this.textContent.length>0){var e=[];this.annotationPosition>t.length&&(this.annotationPosition=0);var i={labelRotation:0,surroundLineFlag:!1,labelAlign:"lt"};if(0===this.annotationPosition)e=[SuperMap.Plot.PlottingUtil.getPolygonCenterPt(t)];else{var o=null,n=null;this.annotationPosition===t.length?(o=t[t.length-1],n=t[0]):(o=t[this.annotationPosition-1],n=t[this.annotationPosition]),i.labelRotation=-SuperMap.Plot.PlottingUtil.radian(o,n)/Math.PI*180;var s=this.getScaleValues()[0]*SuperMap.Plot.PlottingUtil.distance(o,n);e=[SuperMap.Plot.PlottingUtil.findPoint(o,n,s,0)]}this.addCell(34,e,i,this.textContent);var a=new SuperMap.Geometry.Point(e[0].x,e[0].y);a.isScalePoint=!0,a.tag=0,this.clearScalePoints(),this.addScalePoint(a)}}else this.controlPoints.length>=2&&this.controlPoints.length<this.minEditPts&&this.calAssistantLine()}},{key:"modifyPoint",value:function(t,e){if(!0===e.isScalePoint){for(var i=0,o=SuperMap.Plot.PlottingUtil.distance(e,this.controlPoints[0]),n=1;n<this.controlPoints.length;n++){var s=SuperMap.Plot.PlottingUtil.distance(e,this.controlPoints[n]);s<o&&(o=s,i=n)}var a=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints);(a=SuperMap.Plot.PlottingUtil.clearSamePts(a)).push(a[0].clone());var l=SuperMap.Plot.PlottingUtil.computePointToLineMinDis(e,a);if(-1===l.minDis)this.annotationPosition=i+1,this.offsetX=0,this.offsetY=0;else{var r=SuperMap.Plot.PlottingUtil.projectPoint(e,a[l.index],a[l.index+1]),u=SuperMap.Plot.PlottingUtil.distance(e,r),p=SuperMap.Plot.PlottingUtil.getPolygonCenterPt(this.controlPoints),h=SuperMap.Plot.PlottingUtil.distance(e,p);if(h<u&&h<o)this.annotationPosition=0,this.getScaleValues()[0]=0;else if(o<u&&o<h)this.annotationPosition=i+1,this.getScaleValues()[0]=0;else if(u<o&&u<h){this.annotationPosition=l.index+1;var c=null,y=null;this.annotationPosition===this.controlPoints.length?(c=this.controlPoints[this.controlPoints.length-1],y=this.controlPoints[0]):(c=this.controlPoints[this.annotationPosition-1],y=this.controlPoints[this.annotationPosition]);var g=SuperMap.Plot.PlottingUtil.distance(r,c),d=SuperMap.Plot.PlottingUtil.distance(c,y);this.getScaleValues()[0]=g/d}}}this.calculateParts()}},{key:"parseSymbolData",value:function(){l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"parseSymbolData",this).call(this),this.symbolData&&(this.annotationPosition=this.symbolData.annotationPosition)}},{key:"setSymbolData",value:function(){l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setSymbolData",this).call(this),this.symbolData&&(this.symbolData.annotationPosition=this.annotationPosition)}}]),e}();e.default=u,SuperMap.Geometry.PolygonRegion=u},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),l=function(t){return t&&t.__esModule?t:{default:t}}(i(0)),r=function(t){function e(t){o(this,e);var i=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.CLASS_NAME="SuperMap.Geometry.RegularPolygon",i.code=SuperMap.Plot.SymbolType.REGULARPOLYGON,i.libID=0,i.symbolType=SuperMap.Plot.SymbolType.REGULARPOLYGON,i.minEditPts=2,i.maxEditPts=9999,i}return s(e,l["default"]),a(e,[{key:"calculateParts",value:function(){this.clearComponents();var t=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints);if(!(null===(t=SuperMap.Plot.PlottingUtil.clearSamePts(t))||t.length<this.minEditPts)){var e=t.length,i=[],o=2*Math.PI/(e+1),n=SuperMap.Plot.PlottingUtil.radian(t[0],t[e-1]),s=SuperMap.Plot.PlottingUtil.distance(t[0],t[e-1]),a=new SuperMap.Geometry.Point(t[0].x+s,t[0].y).clone();a=SuperMap.Plot.PlottingUtil.rotateAngle(t[0],n,a),i.push(a.clone());for(var l=1;l<e+1;l++)a=SuperMap.Plot.PlottingUtil.rotateAngle(t[0],o,a),i.push(a.clone());i.push(i[0]),this.addCell(SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,i,{surroundLineFlag:!1,fill:!1}),this.textContent.length}}}]),e}();e.default=r,SuperMap.Geometry.RegularPolygon=r},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),l=function t(e,i,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,i);if(void 0===n){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,i,o)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(o)},r=function(t){return t&&t.__esModule?t:{default:t}}(i(0)),u=function(t){function e(t){o(this,e);var i=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.CLASS_NAME="SuperMap.Geometry.Runway",i.libID=0,i.code=SuperMap.Plot.SymbolType.RUNWAY,i.symbolType=SuperMap.Plot.SymbolType.RUNWAY,i.symbolName="跑道线",0===i.getScaleValues().length&&i.getScaleValues().push(.2),i.minEditPts=2,i.maxEditPts=2,i}return s(e,r["default"]),a(e,[{key:"destroy",value:function(){l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).call(this)}},{key:"calculateParts",value:function(){if(this.clearComponents(),this.controlPoints.length>=this.minEditPts){for(var t=this.controlPoints[0],e=this.controlPoints[1],i=SuperMap.Plot.PlottingUtil.distance(t,e),o=this.getScaleValues()[0]*i,n=SuperMap.Plot.PlottingUtil.parallel(this.controlPoints,o/2),s=SuperMap.Plot.PlottingUtil.parallel(this.controlPoints,-o/2),a=180*SuperMap.Plot.PlottingUtil.radian(t,e)/Math.PI,l=[],r=a+90;r<=a+270;r+=10){h=SuperMap.Plot.PlottingUtil.circlePoint(t,o/2,o/2,r);l.push(h)}for(var u=[],p=a-90;p<=a+90;p+=10){var h=SuperMap.Plot.PlottingUtil.circlePoint(e,o/2,o/2,p);u.push(h)}var c=[];(c=(c=(c=(c=c.concat(l)).concat(s)).concat(u)).concat(n)).push(c[0]),this.addCell(SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,c);var y=new SuperMap.Geometry.Point(l[0].x,l[0].y);this.addScalePoint(y)}}},{key:"modifyPoint",value:function(t,e){if(!0===e.isScalePoint&&0==t){var i=SuperMap.Plot.PlottingUtil.distance(e,this.controlPoints[0]),o=SuperMap.Plot.PlottingUtil.distance(this.controlPoints[0],this.controlPoints[1]);this.getScaleValues()[0]=2*i/o}this.calculateParts()}}]),e}();e.default=u,SuperMap.Geometry.Runway=u},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),l=function t(e,i,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,i);if(void 0===n){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,i,o)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(o)},r=function(t){return t&&t.__esModule?t:{default:t}}(i(0)),u=function(t){function e(t){o(this,e);var i=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.tipPoint=null,i.roundBox=null,i.textBoxType=null,i.CLASS_NAME="SuperMap.Geometry.SymbolTextBox",i.minEditPts=2,i.maxEditPts=2,i.libID=0,i.code=SuperMap.Plot.SymbolType.SYMBOLTEXTBOX,i.symbolType=SuperMap.Plot.SymbolType.SYMBOLTEXTBOX,i.symbolName="标注框",null===i.textBoxType&&(i.textBoxType=SuperMap.Plot.TextBoxType.WITHTIPBOX),0===i.getScaleValues().length&&(i.getScaleValues().push(.126),i.getScaleValues().push(.1),i.getScaleValues().push(-.3)),i}return s(e,r["default"]),a(e,[{key:"destroy",value:function(){this.roundBox=null,this.textBoxType=null,l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).call(this)}},{key:"calculateParts",value:function(){this.clearComponents();var t=this.getScaleValues()[0];if(!(t<0||t>1))if(t=(1-t)/2,this.controlPoints.length>=this.minEditPts){this.clearScalePoints();var e,i,o,n,s,a,l=[];this.controlPoints[0].x<this.controlPoints[1].x?(e=this.controlPoints[0].x,o=this.controlPoints[1].x):(e=this.controlPoints[1].x,o=this.controlPoints[0].x),this.controlPoints[0].y<this.controlPoints[1].y?(n=this.controlPoints[0].y,i=this.controlPoints[1].y):(n=this.controlPoints[1].y,i=this.controlPoints[0].y);var r=1,u=2,p=3,h=4;if(this.roundBox){var c=Math.max(e,o),y=Math.min(e,o),g=Math.max(i,n),d=Math.min(i,n),f=.1*Math.min(Math.abs(e-o),Math.abs(i-n)),S=new SuperMap.Geometry.Point(y+f,d+f),P=new SuperMap.Geometry.Point(y+f,g-f),m=new SuperMap.Geometry.Point(c-f,g-f),b=new SuperMap.Geometry.Point(c-f,d+f),L=this.calculateArc(S,f,3*Math.PI/2,Math.PI,-1,180),M=this.calculateArc(P,f,Math.PI,Math.PI/2,-1,180),v=this.calculateArc(m,f,Math.PI/2,0,-1,180),_=this.calculateArc(b,f,2*Math.PI,3*Math.PI/2,-1,180);r=L.length,u=L.length+M.length,p=L.length+M.length+v.length,h=L.length+M.length+v.length+_.length,l=L.concat(M,v,_)}else l.push(new SuperMap.Geometry.Point(e,n)),l.push(new SuperMap.Geometry.Point(e,i)),l.push(new SuperMap.Geometry.Point(o,i)),l.push(new SuperMap.Geometry.Point(o,n));if(this.textBoxType===SuperMap.Plot.TextBoxType.WITHTIPBOX){null===this.tipPoint&&(this.tipPoint=new SuperMap.Geometry.Point,this.tipPoint.x=e+(o-e)*this.getScaleValues()[1],this.tipPoint.y=n+(i-n)*this.getScaleValues()[2]),!1===this.getIsEdit()&&(this.tipPoint.x=e+(o-e)*this.getScaleValues()[1],this.tipPoint.y=n+(i-n)*this.getScaleValues()[2]),this.addScalePoint(this.tipPoint,0),s=this.tipPoint.x,a=this.tipPoint.y;var T=(i-n)/(o-e);switch(s<e?a>i?Math.abs((a-i)/(s-e))>T?2:1:a<n&&Math.abs((a-n)/(s-e))>T?4:1:s>o?a>i?Math.abs((a-i)/(s-o))>T?2:3:a<n&&Math.abs((a-n)/(s-o))>T?4:3:a>i?2:a<n?4:0){case 0:break;case 1:this.addScalePoint(new SuperMap.Geometry.Point(e,i-(i-n)*t)),l.splice(r,0,new SuperMap.Geometry.Point(e,i-(i-n)*t)),l.splice(r,0,this.tipPoint),l.splice(r,0,new SuperMap.Geometry.Point(e,n+(i-n)*t));break;case 2:this.addScalePoint(new SuperMap.Geometry.Point(o-(o-e)*t,i)),l.splice(u,0,new SuperMap.Geometry.Point(o-(o-e)*t,i)),l.splice(u,0,this.tipPoint),l.splice(u,0,new SuperMap.Geometry.Point(e+(o-e)*t,i));break;case 3:this.addScalePoint(new SuperMap.Geometry.Point(o,i-(i-n)*t)),l.splice(p,0,new SuperMap.Geometry.Point(o,n+(i-n)*t)),l.splice(p,0,this.tipPoint),l.splice(p,0,new SuperMap.Geometry.Point(o,i-(i-n)*t));break;case 4:this.addScalePoint(new SuperMap.Geometry.Point(o-(o-e)*t,n)),l.splice(h,0,new SuperMap.Geometry.Point(e+(o-e)*t,n)),l.splice(h,0,this.tipPoint),l.splice(h,0,new SuperMap.Geometry.Point(o-(o-e)*t,n))}}if(0!==l.length)if(this.textBoxType===SuperMap.Plot.TextBoxType.NONEBOX){var x={surroundLineFlag:!1,weight:0,lineWidthLimit:!0};this.addCell(SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,l,x)}else this.addCell(SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,l)}else this.controlPoints.length>=2&&this.controlPoints.length<this.minEditPts&&this.addCell(SuperMap.Plot.SymbolType.RECTANGLESYMBOL,this.controlPoints)}},{key:"move",value:function(t,e){for(var i=0,o=this.controlPoints.length;i<o;i++)this.controlPoints[i].move(t,e);this.calculateParts()}},{key:"modifyPoint",value:function(t,e){if(!0===e.isScalePoint)if(0===t)this.tipPoint.x=e.x,this.tipPoint.y=e.y;else if(1===t){var i,o,n,s,a,l,r=this.getScalePoints()[0];this.controlPoints[0].x<this.controlPoints[1].x?(i=this.controlPoints[0].x,n=this.controlPoints[1].x):(i=this.controlPoints[1].x,n=this.controlPoints[0].x),this.controlPoints[0].y<this.controlPoints[1].y?(s=this.controlPoints[0].y,o=this.controlPoints[1].y):(s=this.controlPoints[1].y,o=this.controlPoints[0].y),a=this.tipPoint.x,l=this.tipPoint.y;var u=(o-s)/(n-i),p=.25;switch(a<i?l>o?Math.abs((l-o)/(a-i))>u?2:1:l<s&&Math.abs((l-s)/(a-i))>u?4:1:a>n?l>o?Math.abs((l-o)/(a-n))>u?2:3:l<s&&Math.abs((l-s)/(a-n))>u?4:3:l>o?2:l<s?4:0){case 1:case 3:var h=r.y+(e.y-r.y);h>o&&(h=o),h<(o+s)/2&&(h=(o+s)/2),p=1-2*(o-h)/(o-s);break;case 2:case 4:var c=r.x+(e.x-r.x);c>n&&(c=n),c<(i+n)/2&&(c=(i+n)/2),p=1-2*(n-c)/(n-i)}p<0&&(p=0),p>1&&(p=1),this.getScaleValues()[0]=p}this.calculateParts()}},{key:"calculateArc",value:function(t,e,i,o,n,s){(!n||1!=n&&-1!=n)&&(n=-1),s||(s=360);for(var a=Math.PI/s/2,l=a*n,r=Math.abs(o-i),u=[],p=i,h=0;h<r;h+=a){var c=new SuperMap.Geometry.Point(Math.cos(p)*e+t.x,Math.sin(p)*e+t.y);u.push(c),p=(p=(p+=l)<0?p+2*Math.PI:p)>2*Math.PI?p-2*Math.PI:p}return u}}]),e}();e.default=u,SuperMap.Geometry.SymbolTextBox=u},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),l=function(t){return t&&t.__esModule?t:{default:t}}(i(0)),r=function(t){function e(t){o(this,e);var i=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.CLASS_NAME="SuperMap.Geometry.Trapezoid",i.code=SuperMap.Plot.SymbolType.TRAPEZOIDSYMBOL,i.libID=0,i.symbolType=SuperMap.Plot.SymbolType.TRAPEZOIDSYMBOL,i.minEditPts=3,i.maxEditPts=3,i}return s(e,l["default"]),a(e,[{key:"calculateParts",value:function(){this.clearComponents();var t=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints);if((t=SuperMap.Plot.PlottingUtil.clearSamePts(t)).length>=2&&t.length<this.minEditPts&&this.calAssistantLine(),!(t.length<this.minEditPts)){var e=[],i=t[0],o=t[1],n=t[2],s=new SuperMap.Geometry.Point(0,0);this.GetPointsByTrapezoid(1,n,o,i,s),e.push(i),e.push(o),e.push(n),e.push(s);var a=SuperMap.Plot.PlottingUtil.intersectLines(i,o,n,s),l=a.intersectPoint;a.isIntersectLines&&(l.x>i.x&&l.x<o.x||l.y>i.y&&l.y<o.y||l.x<i.x&&l.x>o.x||l.y<i.y&&l.y>o.y)&&(e[0]=s,e[3]=i),4==e.length&&this.addCell(SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,e)}}},{key:"GetPointsByTrapezoid",value:function(t,e,i,o,n){var s=e.x,a=e.y,l=i.x,r=i.y,u=o.x,p=o.y,h=0,c=0,y=0,g=0;if(SuperMap.Plot.PlottingUtil.equalFuzzy(Math.abs(a-r),0))h=s+l-u,c=p;else if(SuperMap.Plot.PlottingUtil.equalFuzzy(Math.abs(s-l),0))h=u,c=a+r-p;else{var d=1*(a-r)/(s-l),f=p-d*u;c=d*(h=((r+a)/2+(s+l)/(2*d)-f)/(d+1/d))+f,h=2*h-u,c=2*c-p}var S=Math.sqrt(1*(s-l)*(s-l)+1*(a-r)*(a-r)),P=Math.sqrt(1*(s-h)*(s-h)+1*(a-c)*(a-c));S>0?(y=s+(l-s)*P/S,g=a+(r-a)*P/S):(y=s,g=a);var m=y+(h-y)*t,b=g+(c-g)*t;n.x=m,n.y=b}}]),e}();e.default=r,SuperMap.Geometry.Trapezoid=r},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=(function(t){t&&t.__esModule}(i(88)),function(){function t(e){if(o(this,t),this.cStart=0,this.fillRule=0,this.require_StartNewFigure=!1,this.isBoundsDirty=!1,this.bounds=null,this.ref=1,this.elements=null,this.CLASS_NAME="SuperMap.Plot.UGPath2DData",e){this.cStart=e.cStart,this.fillRule=e.fillRule,this.require_StartNewFigure=e.require_StartNewFigure,this.isBoundsDirty=e.isBoundsDirty,this.bounds=new SuperMap.Bounds(e.bounds.left,e.bounds.bottom,e.bounds.right,e.bounds.top),this.ref=1,this.elements=[];for(var i=0;i<e.elements.length;i++)this.elements.push(e.elements[i].clone())}else this.ref=1,this.bounds=new SuperMap.Bounds(0,0,0,0),this.elements=[]}return n(t,[{key:"IsClosed",value:function(){var t=this.elements[this.cStart],e=this.elements[this.elements.length-1];return t.GetX()==e.GetX()&&t.GetY()==e.GetY()}},{key:"Close",value:function(){this.require_StartNewFigure=!0;var t=this.elements[this.cStart],e=this.elements[this.elements.length-1];t!=e&&(t.Equal(e)?e.SetPosition(t.GetX(),t.GetY()):this.elements.push(new SuperMap.Plot.Element(t.GetX(),t.GetY(),SuperMap.Plot.ElementType.LineToElement)))}},{key:"MaybeStartNewFigure",value:function(){if(this.require_StartNewFigure){var t=this.elements[this.elements.length-1].clone();t.SetType(0),this.elements.push(t),this.require_StartNewFigure=!1}}}]),t}());e.default=s,SuperMap.Plot.UGPath2DData=s},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),l=function(t){return t&&t.__esModule?t:{default:t}}(i(0)),r=function(t){function e(t){o(this,e);var i=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.CLASS_NAME="SuperMap.Geometry.AlgoSymbol15200",i.symbolType=SuperMap.Plot.SymbolType.ALGOSYMBOL,i.minEditPts=2,i.maxEditPts=99999,0===i.getScaleValues().length&&(i.getScaleValues().push(.05),i.getScaleValues().push(0),i.getScaleValues().push(.1),i.getScaleValues().push(.185)),i}return s(e,l["default"]),a(e,[{key:"calculateParts",value:function(){this.clearComponents();var t=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints);if(!((t=SuperMap.Plot.PlottingUtil.clearSamePts(t)).length<this.minEditPts)){var e=SuperMap.Plot.PlottingUtil.generateBeizerPointsNoCtrlPt(t);e=SuperMap.Plot.PlottingUtil.clearSamePts(e),this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,e);for(var i=0,o=0,n=e.length-1;o<n;o++)i+=SuperMap.Plot.PlottingUtil.distance(e[o],e[o+1]);for(var s=0,a=0,n=t.length-1;a<n;a++)s+=SuperMap.Plot.PlottingUtil.distance(t[a],t[a+1]);this.getIsEdit()||(this.getScaleValues()[0]=.5*this.getSubSymbolScaleValue());for(var l=this.getScaleValues()[0]*s,r=this.getScaleValues()[1],u=this.getScaleValues()[2]*s,p=.3*u,h=u;h<i;h+=u){var c=SuperMap.Plot.PlottingUtil.getPtsIndexByDistance(h,e);if(-1===c.index)return;var y=h+p,g=SuperMap.Plot.PlottingUtil.getPtsIndexByDistance(y,e);if(-1===g.index)return;var d=[],f=[];d.push(c.pts);var S=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(l,e[c.index],c.pts);0===r?d.push(new SuperMap.Geometry.Point(S.pntLeft.x,S.pntLeft.y)):d.push(new SuperMap.Geometry.Point(S.pntRight.x,S.pntRight.y)),f.push(g.pts);var P=SuperMap.Plot.PlottingUtil.getSidePointsOfLine(l,e[g.index],g.pts);if(0===r?f.push(new SuperMap.Geometry.Point(P.pntLeft.x,P.pntLeft.y)):f.push(new SuperMap.Geometry.Point(P.pntRight.x,P.pntRight.y)),u===h){this.clearScalePoints();var m=new SuperMap.Geometry.Point(d[1].x,d[1].y);m.isScalePoint=!0,m.tag=0,this.addScalePoint(m),(m=new SuperMap.Geometry.Point(d[0].x,d[0].y)).isScalePoint=!0,m.tag=1,this.addScalePoint(m)}this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,d),this.addCell(SuperMap.Plot.SymbolType.POLYLINESYMBOL,f)}}}},{key:"modifyPoint",value:function(t,e){if(!0===e.isScalePoint){var i=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints);if((i=SuperMap.Plot.PlottingUtil.clearSamePts(i)).length<this.minEditPts)return;for(var o=0,n=0,s=i.length-1;n<s;n++)o+=SuperMap.Plot.PlottingUtil.distance(i[n],i[n+1]);var a=SuperMap.Plot.PlottingUtil.generateBeizerPointsNoCtrlPt(i),l=new SuperMap.Geometry.Point(e.x,e.y);if(0===t){var r=SuperMap.Plot.PlottingUtil.findPointInPolyLine(a,o*this.getScaleValues()[2]);if(-1===r.index)return void this.calculateParts();var u=SuperMap.Plot.PlottingUtil.distance(r.pt,l)/o,p=SuperMap.Plot.PlottingUtil.pointIsRightToLine(a[0],a[1],e);this.getScaleValues()[1]=p?1:0,this.getScaleValues()[0]=u}else if(1===t){for(var h=0,c=-1,y=[],g=0,s=a.length-1;g<s;g++){var d=SuperMap.Plot.PlottingUtil.pointProjectToSegment(e,a[g],a[g+1]);if(d.isOnline){var f=SuperMap.Plot.PlottingUtil.distance(d.projectPoint,this.controlPoints[1]);0==h?(h=f,c=g,y=e):f<h&&(h=f,c=g,y=e)}}if(-1==c)return void this.calculateParts();for(var S=0,g=0,s=c-1;g<s;g++)S+=SuperMap.Plot.PlottingUtil.distance(a[g],a[g+1]);var P=(S+=SuperMap.Plot.PlottingUtil.distance(y,a[c]))/o;P>.7&&(P=.7),this.getScaleValues()[2]=P}}this.calculateParts()}}]),e}();e.default=r,SuperMap.Geometry.AlgoSymbol15200=r},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=function(){function t(e){o(this,t),this.method="POST",this.sitData=null,this.smlFileName="",this.isCover=!1,this.CLASS_NAME="SuperMap.EditSmlFileParameters",e&&SuperMap.Util.extend(this,e)}return n(t,[{key:"destroy",value:function(){var t=this;t.method="POST",t.sitData=null,t.isCover=!1,t.smlFileName=""}}],[{key:"toJsonParameters",value:function(t){if(t)return SuperMap.PlotUtil.toJSON(t.sitData)}}]),t}();e.default=s,SuperMap.EditSmlFileParameters=s},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),l=function t(e,i,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,i);if(void 0===n){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,i,o)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(o)},r=function(t){function e(t,i){o(this,e);var s=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));s.CLASS_NAME="SuperMap.EditSmlFileService",(i=i||{})&&SuperMap.Util.extend(s,i);var a=s;return a.events=new SuperMap.Events(a,null,a.EVENT_TYPES,!0),a.eventListeners instanceof Object&&a.events.on(a.eventListeners),s}return s(e,SuperMap.PlotCommonServiceBase),a(e,[{key:"destroy",value:function(){l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).call(this)}},{key:"processAsync",value:function(t){if(t){var e=this,i=t.method,o=e.url.substr(e.url.length-1,1);e.url+="/"==o?"smlInfos/":"/smlInfos/",e.url+=t.smlFileName+".json",e.url+="?isCover="+t.isCover;var n=null;t.method&&"POST"===t.method&&(n=SuperMap.EditSmlFileParameters.toJsonParameters(t)),e.request({method:i,data:n,scope:e,success:e.serviceProcessCompleted,failure:e.serviceProcessFailed})}}}]),e}();e.default=r,SuperMap.EditSmlFileService=r},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=function(){function t(e){o(this,t),this.libID=null,this.CLASS_NAME="SuperMap.GetLibInfoParameter",e&&SuperMap.Util.extend(this,e)}return n(t,[{key:"destroy",value:function(){this.libID=null}}]),t}();e.default=s,SuperMap.GetLibInfoParameter=s},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=function(){function t(e){o(this,t),this.start=null,this.count=null,this.CLASS_NAME="SuperMap.GetSMLInfosParameters",e&&SuperMap.Util.extend(this,e)}return n(t,[{key:"destroy",value:function(){var t=this;t.start=null,t.count=null}}],[{key:"toUrlParameters",value:function(t){if(t){var e="";return null!==t.start&&(e="?start="+t.start),!t.count||null===t.count&&0===t.count||(e+="&count="+t.count),e}}}]),t}();e.default=s,SuperMap.GetSMLInfosParameters=s},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),l=function t(e,i,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,i);if(void 0===n){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,i,o)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(o)},r=function(t){function e(t,i){o(this,e);var s=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));s.CLASS_NAME="SuperMap.GetSMLInfosService",(i=i||{})&&SuperMap.Util.extend(s,i);var a,l=s;return l.events=new SuperMap.Events(l,null,l.EVENT_TYPES,!0),l.eventListeners instanceof Object&&l.events.on(l.eventListeners),a=l.url.substr(l.url.length-1,1),l.url+="/"==a?"smlInfos":"/smlInfos",l.url+=".json",s}return s(e,SuperMap.PlotCommonServiceBase),a(e,[{key:"destroy",value:function(){l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).call(this)}},{key:"processAsync",value:function(t){if(t){var e=this;e.url+=SuperMap.GetSMLInfosParameters.toUrlParameters(t),e.request({method:"GET",data:null,scope:e,success:e.serviceProcessCompleted,failure:e.serviceProcessFailed})}}}]),e}();e.default=r,SuperMap.GetSMLInfosService=r},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=function(){function t(e){o(this,t),this.start=null,this.count=null,this.CLASS_NAME="SuperMap.GetSMLInfosParameters",e&&SuperMap.Util.extend(this,e)}return n(t,[{key:"destroy",value:function(){var t=this;t.start=null,t.count=null}}],[{key:"toUrlParameters",value:function(t){if(t){var e="";return null!==t.start&&(e="?start="+t.start),!t.count||null===t.count&&0===t.count||(e+="&count="+t.count),e}}}]),t}();e.default=s,SuperMap.GetSMLInfosParameters=s},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=function(){function t(e){if(o(this,t),this.libID=null,this.code=null,this.inputPoints=null,this.symbolRank=null,this.negativeImage=null,this.surroundLineType=null,this.subSymbols=null,this.scaleValues=null,this.scalePoints=null,this.newScalePoint=null,this.newScalePointIndex=null,this.CLASS_NAME="SuperMap.GetSymbolInfoParameters",!e)return this;SuperMap.Util.extend(this,e)}return n(t,[{key:"destroy",value:function(){var t=this;t.libID=null,t.code=null,t.inputPoints=null,t.symbolRank=null,t.negativeImage=null,t.surroundLineType=null,t.subSymbols=null,t.scaleValues=null,t.scalePoints=null,t.newScalePoint=null,t.newScalePointIndex=null}}],[{key:"toUrlParameters",value:function(t){if(t&&null!==t.libID&&null!==t.code){var e="libID="+t.libID+"&code="+t.code;if(t.inputPoints&&null!==t.inputPoints&&0!==t.inputPoints.length){e+="&inputPoints=[";for(i=0;i<t.inputPoints.length;i++)i===t.inputPoints.length-1?e+='{"x":'+t.inputPoints[i].x+', "y":'+t.inputPoints[i].y+"}]":e+='{"x":'+t.inputPoints[i].x+', "y":'+t.inputPoints[i].y+"},"}if(t.scalePoints&&null!==t.scalePoints&&0!==t.scalePoints.length){e+="&scalePoints=[";for(i=0;i<t.scalePoints.length;i++)i===t.scalePoints.length-1?e+='{"x":'+t.scalePoints[i].x+', "y":'+t.scalePoints[i].y+"}]":e+='{"x":'+t.scalePoints[i].x+', "y":'+t.scalePoints[i].y+"},"}if(t.scaleValues&&null!==t.scaleValues&&0!==t.scaleValues.length){e+="&scaleValues=[";for(i=0;i<t.scaleValues.length;i++)i===t.scaleValues.length-1?e+=t.scaleValues[i]+"]":e+=t.scaleValues[i]+","}if(t.subSymbols&&null!==t.subSymbols&&0!==t.subSymbols.length){e+="&subSymbols=[";for(var i=0;i<t.subSymbols.length;i++)i===t.subSymbols.length-1?e+=t.subSymbols[i].code+"]":e+=t.subSymbols[i].code+","}return t.newScalePoint&&null!==t.newScalePoint&&(e+='&newScalePoint={"x":'+t.newScalePoint.x+', "y":'+t.newScalePoint.y+"}"),t.newScalePointIndex&&null!==t.newScalePointIndex&&(e+="&newScalePointIndex="+t.newScalePointIndex),t.symbolRank&&null!==t.symbolRank&&(e+="&symbolRank="+t.symbolRank),t.negativeImage&&null!==t.negativeImage&&(e+="&negativeImage="+t.negativeImage),t.surroundLineType&&null!==t.surroundLineType&&(e+="&surroundLineType="+t.surroundLineType),e}}}]),t}();e.default=s,SuperMap.GetSymbolInfoParameters=s},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=function(){function t(e){o(this,t),this.lineColor="#ff0000",this.lineWidth=2,this.lineType=0,this.lineOpacity=1,this.lineCap="round",this.flagTextSize=60,this.maxScale=5,this.minScale=1,this.dotSymbolSize=40,this.dotTextSpace=7,this.scaleByMap=!1,this.fill=!1,this.fillColor="#ff0000",this.fillOpacity=.31,this.fontColor="#000000",this.fontOpacity=1,this.fontStroke=!1,this.fontStrokeColor="#ff0000",this.fontStrokeWidth="2px",this.fontBackground=!1,this.fontBackgroundColor="#ff0000",this.fontShadow=!1,this.fontShadowColor="#ff0000",this.fontShadowOffsetX=0,this.fontShadowOffsetY=0,this.fontSize=14,this.fontSpace=0,this.fontPercent=100,this.fontFamily="微软雅黑",this.fontWeight="bold",this.fontStyle="",this.defaultFlag=!1,this.CLASS_NAME="SuperMap.Plot.DefaultStyle",e&&SuperMap.Util.extend(this,e),this.parserConfiguration()}return n(t,[{key:"parserConfiguration",value:function(){"undefined"!=typeof DefaultStyleConfiguration&&(DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.flagTextSize&&(this.flagTextSize=parseFloat(DefaultStyleConfiguration.flagTextSize)),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.maxScale&&(this.maxScale=parseFloat(DefaultStyleConfiguration.maxScale)),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.minScale&&(this.minScale=parseFloat(DefaultStyleConfiguration.minScale)),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.dotSymbolSize&&(this.dotSymbolSize=parseFloat(DefaultStyleConfiguration.dotSymbolSize)),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.dotTextSpace&&(this.dotTextSpace=parseFloat(DefaultStyleConfiguration.dotTextSpace)),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.scaleByMap&&(this.scaleByMap=DefaultStyleConfiguration.scaleByMap),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.strokeWidth&&(this.lineWidth=parseFloat(DefaultStyleConfiguration.strokeWidth)),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.strokeColor&&(this.lineColor=DefaultStyleConfiguration.strokeColor),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.strokeOpacity&&(this.lineOpacity=parseFloat(DefaultStyleConfiguration.strokeOpacity)),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.strokeDashstyle&&(this.lineType=DefaultStyleConfiguration.strokeDashstyle),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.strokeLinecap&&(this.lineCap=DefaultStyleConfiguration.strokeLinecap),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.fill&&(this.fill=DefaultStyleConfiguration.fill),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.fillColor&&(this.fillColor=DefaultStyleConfiguration.fillColor),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.fillOpacity&&(this.fillOpacity=parseFloat(DefaultStyleConfiguration.fillOpacity)),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.fontColor&&(this.fontColor=DefaultStyleConfiguration.fontColor),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.fontOpacity&&(this.fontOpacity=parseFloat(DefaultStyleConfiguration.fontOpacity)),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.fontStroke&&(this.fontStroke=DefaultStyleConfiguration.fontStroke),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.fontStrokeColor&&(this.fontStrokeColor=DefaultStyleConfiguration.fontStrokeColor),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.fontStrokeWidth&&(this.fontStrokeWidth=parseFloat(DefaultStyleConfiguration.fontStrokeWidth)),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.fontBackground&&(this.fontBackground=DefaultStyleConfiguration.fontBackground),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.fontBackgroundColor&&(this.fontBackgroundColor=DefaultStyleConfiguration.fontBackgroundColor),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.fontShadow&&(this.fontShadow=DefaultStyleConfiguration.fontShadow),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.fontShadowColor&&(this.fontShadowColor=DefaultStyleConfiguration.fontShadowColor),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.fontShadowOffsetX&&(this.fontShadowOffsetX=DefaultStyleConfiguration.fontShadowOffsetX),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.fontShadowOffsetY&&(this.fontShadowOffsetY=DefaultStyleConfiguration.fontShadowOffsetY),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.fontSpace&&(this.fontSpace=parseInt(DefaultStyleConfiguration.fontSpace)),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.fontPercent&&(this.fontPercent=parseFloat(DefaultStyleConfiguration.fontPercent)),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.fontSize&&(this.fontSize=parseFloat(DefaultStyleConfiguration.fontSize)),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.fontFamily&&(this.fontFamily=DefaultStyleConfiguration.fontFamily),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.fontWeight&&(this.fontWeight=DefaultStyleConfiguration.fontWeight),DefaultStyleConfiguration&&void 0!==DefaultStyleConfiguration.fontStyle&&(this.fontStyle=DefaultStyleConfiguration.fontStyle))}},{key:"destroy",value:function(){this.lineColor=null,this.lineWidth=null,this.dotSymbolSize=null,this.lineType=null,this.defaultFlag=null,this.flagTextSize=null,this.maxScale=null,this.minScale=null,this.dotTextSpace=null,this.scaleByMap=null,this.lineOpacity=null,this.lineCap=null,this.fill=null,this.fillColor=null,this.fillOpacity=null,this.fontColor=null,this.fontOpacity=null,this.fontSize=null,this.fontFamily=null,this.fontWeight=null,this.fontStyle=null,this.fontPercent=null,this.fontSpace=null}}]),t}();e.default=s,SuperMap.Plot.DefaultStyle=s},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=(function(t){t&&t.__esModule}(i(108)),function(){function t(e){o(this,t),this.properties=null,this.CLASS_NAME="SuperMap.Plot.ExtendProperty",this.properties=[]}return n(t,[{key:"addProperty",value:function(t,e){var i=this.findProperty(t);return null==i?this.properties.push(new SuperMap.Plot.Property(t,e)):i.setValue(e),!0}},{key:"deleteProperty",value:function(t){for(var e=0;e<this.properties.length;e++)if(this.properties[e].key===t)return this.properties.slice(e,1),!0;return!1}},{key:"findProperty",value:function(t){for(var e=0;e<this.properties.length;e++)if(this.properties[e].key===t)return this.properties[e];return null}},{key:"getPropertyValue",value:function(t){for(var e=0;e<this.properties.length;e++)if(this.properties[e].key===t)return this.properties[e].value;return null}},{key:"getPropertyByIndex",value:function(t){return t<this.properties.length?this.properties[t]:null}},{key:"getPropertyCount",value:function(){return this.properties.length}},{key:"destroy",value:function(){this.properties=null}}]),t}());e.default=s,SuperMap.Plot.ExtendProperty=s},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=function(){function t(e){o(this,t),this.layerName=null,this.spatialAnalystUrl=null,this.useCanvas2=!1,this.useCanvas=!1,this.features=null,this.CLASS_NAME="SuperMap.Plot.LayerDataStruct",e&&SuperMap.Util.extend(this,e),e&&e.layerName&&(this.layerName=e.layerName),e&&e.spatialAnalystUrl&&(this.spatialAnalystUrl=e.spatialAnalystUrl),e&&e.useCanvas2&&(this.useCanvas2=e.useCanvas2),e&&e.useCanvas&&(this.useCanvas=e.useCanvas),e&&e.features&&(this.features=e.features)}return n(t,[{key:"destroy",value:function(){this.layerName=null,this.spatialAnalystUrl=null,this.useCanvas2=null,this.useCanvas=null,this.features=null}},{key:"toJSON",value:function(){for(var t=[],e=0;e<this.features.length;e++)t.push(this.features[e].getSymbolData());return'{"layerName":'+SuperMap.PlotUtil.toJSON(this.layerName)+', "spatialAnalystUrl":'+SuperMap.PlotUtil.toJSON(this.spatialAnalystUrl)+', "useCanvas2":'+SuperMap.PlotUtil.toJSON(this.useCanvas2)+', "useCanvas":'+SuperMap.PlotUtil.toJSON(this.useCanvas)+', "isEditable":'+SuperMap.PlotUtil.toJSON(this.isEditable)+', "isLocked":'+SuperMap.PlotUtil.toJSON(this.isLocked)+', "visibility":'+SuperMap.PlotUtil.toJSON(this.visibility)+',"features":'+SuperMap.PlotUtil.toJSON(t)+"}"}}]),t}();e.default=s,SuperMap.Plot.LayerDataStruct=s},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=function(){function t(e){o(this,t),this.zoom=null,this.centerX=null,this.centerY=null,this.CLASS_NAME="SuperMap.Plot.MapInfoStruct",e&&(this.zoom=e.zoom,this.centerX=e.centerX,this.centerY=e.centerY)}return n(t,[{key:"destroy",value:function(){this.zoom=null,this.centerX=null,this.centerY=null}},{key:"fromJSON",value:function(t){void 0!==t.zoom&&(this.zoom=t.zoom),void 0!==t.centerX&&(this.centerX=t.centerX),void 0!==t.centerY&&(this.centerY=t.centerY)}},{key:"toJSON",value:function(){return'{"zoom":'+SuperMap.PlotUtil.toJSON(this.zoom)+',"centerX":'+SuperMap.PlotUtil.toJSON(this.centerX)+',"centerY":'+SuperMap.PlotUtil.toJSON(this.centerY)+"}"}}]),t}();e.default=s,SuperMap.Plot.MapInfoStruct=s},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=function(){function t(e,i){o(this,t),this.key=null,this.value=null,this.CLASS_NAME="SuperMap.Plot.Property",e&&(this.key=e),i&&(this.value=i)}return n(t,[{key:"setKey",value:function(t){this.key=t}},{key:"getKey",value:function(){return this.key}},{key:"setValue",value:function(t){this.value=t}},{key:"getValue",value:function(){return this.value}},{key:"destroy",value:function(){this.key=null,this.value=null}},{key:"clone",value:function(){return new SuperMap.Plot.Property(this.key,this.value)}}]),t}();e.default=s,SuperMap.Plot.Property=s},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=function(){function t(e){o(this,t),this.SMLName="",this.SMLDesc="",this.SMLSeclevel="",this.SMLDepat="",this.SMLAuthor="",this.SMLTime="",this.CLASS_NAME="SuperMap.Plot.SMLInfoStruct",e&&(this.SMLName=e.SMLName,this.SMLDesc=e.SMLDesc,this.SMLSeclevel=e.SMLSeclevel,this.SMLDepat=e.SMLDepat,this.SMLAuthor=e.SMLAuthor,this.SMLTime=e.SMLTime)}return n(t,[{key:"destroy",value:function(){this.SMLName="",this.SMLDesc="",this.SMLAuthor="",this.SMLSeclevel="",this.SMLDepat="",this.SMLTime=""}},{key:"fromJSON",value:function(t){this.SMLName=t.SMLName,this.SMLDesc=t.SMLDesc,this.SMLSeclevel=t.SMLSeclevel,this.SMLDepat=t.SMLDepat,this.SMLAuthor=t.SMLAuthor,this.SMLTime=t.SMLTime}},{key:"toJSON",value:function(){return'{"SMLName":'+SuperMap.PlotUtil.toJSON(this.SMLName)+',"SMLDesc":'+SuperMap.PlotUtil.toJSON(this.SMLDesc)+',"SMLSeclevel":'+SuperMap.PlotUtil.toJSON(this.SMLSeclevel)+',"SMLDepat":'+SuperMap.PlotUtil.toJSON(this.SMLDepat)+',"SMLAuthor":'+SuperMap.PlotUtil.toJSON(this.SMLAuthor)+',"SMLTime":'+SuperMap.PlotUtil.toJSON(this.SMLTime)+"}"}}]),t}();e.default=s,SuperMap.Plot.SMLInfoStruct=s},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=function(){function t(e){o(this,t),this.smlInfo=null,this.mapInfo=null,this.layerDatas=null,this.CLASS_NAME="SuperMap.Plot.SitDataStruct",e&&e.smlInfo&&(this.smlInfo=e.smlInfo),e&&e.mapInfo&&(this.mapInfo=e.mapInfo),e&&e.layerDatas&&(this.layerDatas=e.layerDatas)}return n(t,[{key:"destroy",value:function(){this.smlInfo=null,this.mapInfo=null,this.layerDatas=null}}]),t}();e.default=s,SuperMap.Plot.SitDataStruct=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.GOAnimationAttribute=void 0;var o=i(6),n=e.GOAnimationAttribute=o.GOAnimation.extend({lineColorAnimation:!1,startLineColor:"#FF0000",endLineColor:"#0000FF",lineWidthAnimation:!1,startLineWidth:0,endLineWidth:5,surroundLineColorAnimation:!1,startSurroundLineColor:"#ffff00",endSurroundLineColor:"#00ffff",surroundLineWidthAnimation:!1,startSurroundLineWidth:0,endSurroundLineWidth:1,getGOAnimationType:function(){return SuperMap.Plot.GOAnimationType.ANIMATION_ATTRIBUTE},resetAnimationFeature:function(t){o.GOAnimation.prototype.resetAnimationFeature.call(this,t),t&&(this.animationGOFeature.style.color=this.startLineColor,this.animationGOFeature.style.weight=this.startLineWidth,this.animationGOFeature.style.surroundLineColor=this.startSurroundLineColor,this.animationGOFeature.style.surroundLineWidth=this.startSurroundLineWidth)},execute:function(){if(!this.canExecute())return!1;var t=this.ratio,e=this._executeLineColorAnimation(t),i=this._executeLineWidthAnimation(t),o=this._executeSurroundLineColorAnimation(t),n=this._executeSurroundLineWidthAnimation(t);return e||i||o||n},_executeLineColorAnimation:function(t){if(!this.lineColorAnimation)return!1;var e=SuperMap.PlotUtil.colorStringToRGB(this.startLineColor),i=SuperMap.PlotUtil.colorStringToRGB(this.endLineColor),o=parseInt(e.red+(i.red-e.red)*t),n=parseInt(e.green+(i.green-e.green)*t),s=parseInt(e.blue+(i.blue-e.blue)*t);return this.animationGOFeature.setStyle({color:SuperMap.PlotUtil.colorRGBToString({red:o,green:n,blue:s})}),!0},_executeLineWidthAnimation:function(t){return!!this.lineWidthAnimation&&(this.animationGOFeature.setStyle({weight:this.startLineWidth+(this.endLineWidth-this.startLineWidth)*t}),!0)},_executeSurroundLineColorAnimation:function(t){if(!this.surroundLineColorAnimation)return!1;var e=SuperMap.PlotUtil.colorStringToRGB(this.startSurroundLineColor),i=SuperMap.PlotUtil.colorStringToRGB(this.endSurroundLineColor),o=parseInt(e.red+(i.red-e.red)*t),n=parseInt(e.green+(i.green-e.green)*t),s=parseInt(e.blue+(i.blue-e.blue)*t);return this.animationGOFeature.setStyle({surroundLineColor:SuperMap.PlotUtil.colorRGBToString({red:o,green:n,blue:s})}),!0},_executeSurroundLineWidthAnimation:function(t){return!!this.surroundLineWidthAnimation&&(this.animationGOFeature.setStyle({surroundLineWidth:this.startSurroundLineWidth+(this.endSurroundLineWidth-this.startSurroundLineWidth)*t}),!0)},getJSONData:function(){var t=o.GOAnimation.prototype.getJSONData.call(this);return t.lineColorAnimation=this.lineColorAnimation,t.startLineColor=this.startLineColor,t.endLineColor=this.endLineColor,t.lineWidthAnimation=this.lineWidthAnimation,t.startLineWidth=this.startLineWidth,t.endLineWidth=this.endLineWidth,t.surroundLineColorAnimation=this.surroundLineColorAnimation,t.startSurroundLineColor=this.startSurroundLineColor,t.endSurroundLineColor=this.endSurroundLineColor,t.surroundLineWidthAnimation=this.surroundLineWidthAnimation,t.startSurroundLineWidth=this.startSurroundLineWidth,t.endSurroundLineWidth=this.endSurroundLineWidth,t},fromJSONData:function(t){o.GOAnimation.prototype.fromJSONData.call(this,t),this.lineColorAnimation=t.lineColorAnimation,this.startLineColor=t.startLineColor,this.endLineColor=t.endLineColor,this.lineWidthAnimation=t.lineWidthAnimation,this.startLineWidth=t.startLineWidth,this.endLineWidth=t.endLineWidth,this.surroundLineColorAnimation=t.surroundLineColorAnimation,this.startSurroundLineColor=t.startSurroundLineColor,this.endSurroundLineColor=t.endSurroundLineColor,this.surroundLineWidthAnimation=t.surroundLineWidthAnimation,this.startSurroundLineWidth=t.startSurroundLineWidth,this.endSurroundLineWidth=t.endSurroundLineWidth}});L.supermap.plotting.GOAnimationAttribute=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.GOAnimationBlink=void 0;var o=i(6),n=e.GOAnimationBlink=o.GOAnimation.extend({blinkInterval:500,blinkStyle:SuperMap.Plot.BlinkAnimationBlinkStyle.Blink_Frequency,blinkNumber:0,replaceStyle:SuperMap.Plot.BlinkAnimationReplaceStyle.Replace_NoColor,startColor:"#0000ff",endColor:"#ff0000",getGOAnimationType:function(){return SuperMap.Plot.GOAnimationType.ANIMATION_BLINK},execute:function(){if(!this.canExecute())return"none"===this.goFeature.style.display&&"none"===this.animationGOFeature.style.display&&(this.animationGOFeature.style.display="display",!0);var t=(new Date).getTime()/1e3,e=this.blinkInterval/1e3;return this.blinkStyle===SuperMap.Plot.BlinkAnimationBlinkStyle.Blink_Number&&(e=this.blinkInterval=this.duration/this.blinkNumber),(t-this.innerStartTime)%e<=e/2?this.replaceStyle===SuperMap.Plot.BlinkAnimationReplaceStyle.Replace_Color?(this.animationGOFeature.style.color=this.startColor,this.animationGOFeature.style.display="display"):this.animationGOFeature.style.display="none":(this.animationGOFeature.style.display="display",this.replaceStyle===SuperMap.Plot.BlinkAnimationReplaceStyle.Replace_Color&&(this.animationGOFeature.style.color=this.endColor)),this.animationGOFeature.redraw(),!0},getJSONData:function(){var t=o.GOAnimation.prototype.getJSONData.call(this);return t.blinkStyle=this.blinkStyle,t.blinkInterval=this.blinkInterval,t.blinkNumber=this.blinkNumber,t.replaceStyle=this.replaceStyle,t.startColor=this.startColor,t.endColor=this.endColor,t},fromJSONData:function(t){o.GOAnimation.prototype.fromJSONData.call(this,t),this.blinkStyle=t.blinkStyle,this.blinkInterval=t.blinkInterval,this.blinkNumber=t.blinkNumber,this.replaceStyle=t.replaceStyle,this.startColor=t.startColor,this.endColor=t.endColor}});L.supermap.plotting.GOAnimationBlink=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.GOAnimationGrow=void 0;var o=i(6),n=i(1),s=e.GOAnimationGrow=o.GOAnimation.extend({startScale:0,endScale:1,timeSpace:50,lastDrawTime:0,lineLength:0,controlPoints:[],initialize:function(t){o.GOAnimation.prototype.initialize.call(this,t),this.controlPoints=[],this.lineLength=0},getGOAnimationType:function(){return SuperMap.Plot.GOAnimationType.ANIMATION_GROW},_execute_1004:function(t){if(0===this.lineLength){this.controlPoints=L.Util.latLngsToSuperMapPoints(this.goFeature.getLatLngs());o=new SuperMap.Geometry.Point((this.controlPoints[0].x+this.controlPoints[1].x)/2,(this.controlPoints[0].y+this.controlPoints[1].y)/2);this.lineLength+=SuperMap.Plot.PlottingUtil.distance(o,this.controlPoints[2]);for(n=3;n<this.controlPoints.length;n++)this.lineLength+=SuperMap.Plot.PlottingUtil.distance(this.controlPoints[n-1],this.controlPoints[n])}if(0===t)return this._executeAndRatioIsZero(),!0;var e=[],i=[],o=new SuperMap.Geometry.Point((this.controlPoints[0].x+this.controlPoints[1].x)/2,(this.controlPoints[0].y+this.controlPoints[1].y)/2);i.push(o);for(var n=2;n<this.controlPoints.length;n++)i.push(this.controlPoints[n].clone());e.push(this.controlPoints[0]),e.push(this.controlPoints[1]);for(var s=this._findPos(this.lineLength*t,i),a=1;a<=s.pos;a++)e.push(i[a]);return e.push(s.pts),this.animationGOFeature.setLatLngs(L.Util.superMapPointsToLatLngs(e)),!0},_execute_1006:function(t){if(0===this.controlPoints.length){var e=L.Util.latLngsToSuperMapPoints(this.goFeature.getLatLngs());this.controlPoints=SuperMap.Plot.PlottingUtil.operateControlPoints(e)}if(0===t)return this._executeAndRatioIsZero(),!0;var i=this.controlPoints;if(4!=i.length)return!1;var o=i[0],n=i[1],s=i[2],a=i[3],l=SuperMap.Plot.PlottingUtil.distance(o,a),r=SuperMap.Plot.PlottingUtil.distance(n,s),u=SuperMap.Plot.PlottingUtil.linePnt(o,a,l*t),p=SuperMap.Plot.PlottingUtil.linePnt(n,s,r*t),h=[];return h.push(o),h.push(n),h.push(p),h.push(u),null!==this.animationGOFeature.superMapAlgoSymbol&&this.animationGOFeature.superMapAlgoSymbol.hasOwnProperty("m_bIsAnimation")&&(this.animationGOFeature.superMapAlgoSymbol.m_bIsAnimation=!0),this.animationGOFeature.setLatLngs(L.Util.superMapPointsToLatLngs(h)),this.animationGOFeature.superMapAlgoSymbol.m_bIsAnimation=!1,!0},_execute_1002:function(t){if(0===this.lineLength&&(this.controlPoints=L.Util.latLngsToSuperMapPoints(this.goFeature.getLatLngs()),this.lineLength=SuperMap.Plot.PlottingUtil.polylineDistance(this.controlPoints)),0===t)return this._executeAndRatioIsZero(),!0;for(var e=[],i=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints),o=this._findPos(this.lineLength*t,i),n=0;n<=o.pos;n++)e.push(i[n]);e.push(o.pts);var s=[];return e.length<3&&(s.push(e[0].clone()),s.push(new SuperMap.Geometry.Point((e[0].x+e[1].x)/2,(e[0].y+e[1].y)/2)),s.push(e[1].clone()),e=s),SuperMap.AlgoSymbolFactory.isAccessServer(this.animationGOFeature.libID,this.animationGOFeature.code)&&this.goFeature.symbolData.algoMinEditPts>e.length?(this._executeAndRatioIsZero(),!0):(this.animationGOFeature.setLatLngs(L.Util.superMapPointsToLatLngs(e)),!0)},_execute_Generalization:function(t){if(0===this.lineLength&&(this.controlPoints=L.Util.latLngsToSuperMapPoints(this.goFeature.getLatLngs()),this.lineLength=SuperMap.Plot.PlottingUtil.polylineDistance(this.controlPoints)),0===t)return this._executeAndRatioIsZero(),!0;for(var e=[],i=SuperMap.Plot.PlottingUtil.clonePoints(this.controlPoints),o=this._findPos(this.lineLength*t,i),n=0;n<=o.pos;n++)e.push(i[n]);return e.push(o.pts),SuperMap.AlgoSymbolFactory.isAccessServer(this.animationGOFeature.libID,this.animationGOFeature.code)&&this.goFeature.symbolData.algoMinEditPts>e.length?(this._executeAndRatioIsZero(),!0):(this.animationGOFeature.setLatLngs(L.Util.superMapPointsToLatLngs(e)),!0)},_execute_Rect:function(t){0===this.controlPoints.length&&(this.controlPoints=L.Util.latLngsToSuperMapPoints(this.goFeature.getLatLngs()));var e=new SuperMap.Geometry.Point((this.controlPoints[0].x+this.controlPoints[1].x)/2,(this.controlPoints[0].y+this.controlPoints[1].y)/2),i=Math.abs(this.controlPoints[0].x-this.controlPoints[1].x)/2*t,o=Math.abs(this.controlPoints[0].y-this.controlPoints[1].y)/2*t,n=new SuperMap.Geometry.Point(e.x-i,e.y+o),s=new SuperMap.Geometry.Point(e.x+i,e.y-o);return this.animationGOFeature.setLatLngs(L.Util.superMapPointsToLatLngs([n,s])),!0},_execute_Circle:function(t){0===this.controlPoints.length&&(this.controlPoints=L.Util.latLngsToSuperMapPoints(this.goFeature.getLatLngs()));var e=this.controlPoints[0].clone(),i=t*Math.sqrt((this.controlPoints[0].x-this.controlPoints[1].x)*(this.controlPoints[0].x-this.controlPoints[1].x)+(this.controlPoints[0].y-this.controlPoints[1].y)*(this.controlPoints[0].y-this.controlPoints[1].y));return this.animationGOFeature.setLatLngs(L.Util.superMapPointsToLatLngs([e,new SuperMap.Geometry.Point(e.x+i,e.y)])),!0},_execute_Kidney:function(t){if(0===this.controlPoints.length&&(this.controlPoints=L.Util.latLngsToSuperMapPoints(this.goFeature.getLatLngs())),0===t)return this._executeAndRatioIsZero(),!0;var e=[],i=this.controlPoints.length,o=SuperMap.Plot.PlottingUtil.getPolygonCenterPt(this.controlPoints);if(null===o)return this._executeAndRatioIsZero(),!0;for(var n=0;n<i;n++){var s=SuperMap.Plot.PlottingUtil.distance(o,this.controlPoints[n]),a=s*t;if(a>s)return!1;var l=SuperMap.Plot.PlottingUtil.linePnt(o,this.controlPoints[n],a);e.push(l)}return this.animationGOFeature.setLatLngs(L.Util.superMapPointsToLatLngs(e)),!0},_execute_RegularPloygon:function(t){if(0===this.controlPoints.length&&(this.controlPoints=L.Util.latLngsToSuperMapPoints(this.goFeature.getLatLngs())),0===t)return this._executeAndRatioIsZero(),!0;var e=this.controlPoints.length,i=SuperMap.Plot.PlottingUtil.distance(this.controlPoints[0],this.controlPoints[this.controlPoints.length-1])*t,o=new SuperMap.Geometry.Point(this.controlPoints[0].x+i,this.controlPoints[0].y),n=2*Math.PI/(e+1),s=Math.PI/2+this.animationGOFeature.dRotate,a=o;SuperMap.Plot.PlottingUtil.rotateAngle(this.controlPoints[0],s,a);var l=[];l.push(this.controlPoints[0].clone()),l.push(a);for(var r=a.clone(),u=1;u<e-1;u++)SuperMap.Plot.PlottingUtil.rotateAngle(this.controlPoints[0],n,r),l.push(r.clone());return this.animationGOFeature.setLatLngs(L.Util.superMapPointsToLatLngs(l)),!0},_execute_Ellipse:function(t){0===this.controlPoints.length&&(this.controlPoints=L.Util.latLngsToSuperMapPoints(this.goFeature.getLatLngs()));var e=SuperMap.Plot.PlottingUtil.findPointOnLineByRatio(t,this.controlPoints[0],this.controlPoints[1]),i=SuperMap.Plot.PlottingUtil.findPointOnLineByRatio(t,this.controlPoints[0],this.controlPoints[2]);return this.animationGOFeature.latLngs[1]=L.latLng(e.y,e.x),this.animationGOFeature.latLngs[2]=L.latLng(i.y,i.x),this.animationGOFeature.redraw(),!0},_execute_ArbitraryPolygon:function(t){0===this.controlPoints.length&&(this.controlPoints=L.Util.latLngsToSuperMapPoints(this.goFeature.getLatLngs()));var e=this.controlPoints.length,i=SuperMap.Plot.PlottingUtil.getPolygonCenterPt(this.controlPoints);if(null===i)return this._executeAndRatioIsZero(),!0;for(var o=[],n=0;n<e;n++){var s=SuperMap.Plot.PlottingUtil.distance(i,this.controlPoints[n])*t,a=SuperMap.Plot.PlottingUtil.linePnt(i,this.controlPoints[n],s);o.push(a)}return this.animationGOFeature.setLatLngs(L.Util.superMapPointsToLatLngs(o)),!0},_execute_ParallelLine:function(t){if(0===this.lineLength){this.controlPoints=L.Util.latLngsToSuperMapPoints(this.goFeature.getLatLngs());for(o=2;o<this.controlPoints.length;o++)this.lineLength+=SuperMap.Plot.PlottingUtil.distance(this.controlPoints[o-1],this.controlPoints[o])}for(var e=[],i=[],o=1;o<this.controlPoints.length;o++)i.push(this.controlPoints[o].clone());var n=this._findPos(this.lineLength*t,i);e.push(this.controlPoints[0].clone());for(o=0;o<=n.pos;o++)e.push(i[o]);return e.push(n.pts),this.animationGOFeature.setLatLngs(L.Util.superMapPointsToLatLngs(e)),!0},_execute_Polybezier:function(t){if(0===this.lineLength){this.controlPoints=L.Util.latLngsToSuperMapPoints(this.goFeature.getLatLngs());o=SuperMap.Plot.PlottingUtil.generateBeizerPointsNoCtrlPt(this.controlPoints);this.lineLength+=SuperMap.Plot.PlottingUtil.polylineDistance(o)}for(var e=[],i=[],o=SuperMap.Plot.PlottingUtil.generateBeizerPointsNoCtrlPt(this.controlPoints,i),n=this._findPos(this.lineLength*t,o),s=0;s<=n.pos;s++)e.push(o[s].clone());return e.push(n.pts),this.animationGOFeature.setLatLngs(L.Util.superMapPointsToLatLngs(e)),!0},_execute_CurveEight:function(t){0===this.controlPoints.length&&(this.controlPoints=L.Util.latLngsToSuperMapPoints(this.goFeature.getLatLngs()));for(var e=SuperMap.Plot.PlottingUtil.getPolygonCenterPt(this.controlPoints),i=[],o=0;o<this.controlPoints.length;o++){var n=SuperMap.Plot.PlottingUtil.distance(e,this.controlPoints[o])*t,s=SuperMap.Plot.PlottingUtil.linePnt(e,this.controlPoints[o],n);i.push(s)}return this.animationGOFeature.setLatLngs(L.Util.superMapPointsToLatLngs(i)),!0},_executeAndRatioIsZero:function(){this.animationGOFeature.setLatLngs([]),this.animationGOFeature.grow=SuperMap.AlgoSymbolFactory.isAccessServer(this.animationGOFeature.libID,this.animationGOFeature.code)},resetAnimationFeature:function(t){o.GOAnimation.prototype.resetAnimationFeature.call(this,t),this.lineLength=0,this.controlPoints=[]},execute:function(){if(!(this.goFeature instanceof n.AlgoSymbol))return!1;if(!this.canExecute())return!1;this.endScale>1&&(this.endScale=1);var t=(new Date).getTime();if(this.lastDrawTime>0&&t-this.timeSpace<this.lastDrawTime)return!1;var e=this.startScale+this.ratio*(this.endScale-this.startScale);return this.lastDrawTime=t,this._executeAnimation(e)},_executeAnimation:function(t){var e=!1,i=this.animationGOFeature.code,o=this.animationGOFeature.libID;if(0===o)switch(i){case SuperMap.Plot.SymbolType.KIDNEY:case SuperMap.Plot.SymbolType.POLYBEZIERCLOSESYMBOL:case SuperMap.Plot.SymbolType.PARALLELOGRAM:case SuperMap.Plot.SymbolType.TRAPEZOIDSYMBOL:e=this._execute_Kidney(t);break;case SuperMap.Plot.SymbolType.CIRCLESYMBOL:e=this._execute_Circle(t);break;case SuperMap.Plot.SymbolType.RECTANGLESYMBOL:e=this._execute_Rect(t);break;case SuperMap.Plot.SymbolType.REGULARPOLYGON:e=this._execute_RegularPloygon(t);break;case SuperMap.Plot.SymbolType.ELLIPSESYMBOL:e=this._execute_Ellipse(t);break;case SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL:case SuperMap.Plot.SymbolType.POLYGONREGION:e=this._execute_ArbitraryPolygon(t);break;case SuperMap.Plot.SymbolType.PARALLELLINE:e=this._execute_ParallelLine(t);break;case SuperMap.Plot.SymbolType.POLYBEZIERSYMBOL:e=this._execute_Polybezier(t);break;case SuperMap.Plot.SymbolType.PIESYMBOL:case SuperMap.Plot.SymbolType.CHORDSYMBOL:case SuperMap.Plot.SymbolType.ARCSYMBOL:case SuperMap.Plot.SymbolType.ANNOFRAMESYMBOL:return!1;case SuperMap.Plot.SymbolType.CURVEEIGHT:e=this._execute_CurveEight(t);break;default:e=this._execute_Generalization(t)}else if(22===o)switch(i){case 1004:case 2004:case 1010:e=this._execute_1004(t);break;case 1006:case 2006:e=this._execute_1006(t);break;case 1002:case 2002:e=this._execute_1002(t);break;case 32:case 3211:e=this._execute_ArbitraryPolygon(t);break;case 390:case 3911:e=this._execute_Kidney(t);break;default:e=this._execute_Generalization(t)}else if(100===o)switch(i){case 25200:e=this._execute_1004(t);break;default:e=this._execute_Generalization(t)}else if(421===o)switch(i){case 311:e=this._execute_1004(t);break;case 317:e=this._execute_1006(t);break;default:e=this._execute_Generalization(t)}else if(123===o)switch(i){case 60310:case 6031001:e=this._execute_1004(t);break;default:e=this._execute_Generalization(t)}else e=this._execute_Generalization(t);return this.animationGOFeature.grow=SuperMap.AlgoSymbolFactory.isAccessServer(this.animationGOFeature.libID,this.animationGOFeature.code),e},_findPos:function(t,e){var i,o=0,n=0;for(i=1;i<e.length&&(n=SuperMap.Plot.PlottingUtil.distance(e[i-1],e[i]),!(o+n>=t));i++)o+=n;var s=new Object;if(i<e.length)a=SuperMap.Plot.PlottingUtil.findPoint(e[i-1],e[i],t-o,0);else var a=new SuperMap.Geometry.Point(e[i-1].clone());return s.pos=i-1,s.pts=a,s},getJSONData:function(){var t=o.GOAnimation.prototype.getJSONData.call(this);return t.startScale=this.startScale,t.endScale=this.endScale,t},fromJSONData:function(t){o.GOAnimation.prototype.fromJSONData.call(this,t),this.startScale=t.startScale,this.endScale=t.endScale}});L.supermap.plotting.GOAnimationGrow=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.GOAnimationRotate=void 0;var o=i(6),n=e.GOAnimationRotate=o.GOAnimation.extend({rotateDirection:SuperMap.Plot.RotateDirection.ClockWise,startAngle:0,endAngle:360,getGOAnimationType:function(){return SuperMap.Plot.GOAnimationType.ANIMATION_ROTATE},resetAnimationFeature:function(t){this.animationGOFeature._rotate(this.goFeature.dRotate-this.animationGOFeature.dRotate,this.animationGOFeature.getLatLngs()[0]),o.GOAnimation.prototype.resetAnimationFeature.call(this,t)},execute:function(){if(this.goFeature.symbolType!==SuperMap.Plot.SymbolType.DOTSYMBOL)return!1;if(!this.canExecute())return!1;var t=this.ratio,e=this._getCurrentAngle(this.startAngle,this.endAngle,t),i=this.animationGOFeature.dRotate;return this.animationGOFeature._rotate(e-i,this.animationGOFeature.getLatLngs()[0]),!0},_getCurrentAngle:function(t,e,i){var o=0,n=e-t,s=parseInt(Math.abs(n/360));if(t!==e)if(this.rotateDirection===SuperMap.Plot.RotateDirection.AntiClockWise)n<0&&(n+=360*(2*s+1)),o=t+n*i;else{var a=0;o=t+(360-(n=0===(a=n<0?n+360*(s+1):n-360*s)?360*s:360-a+360*s)*i)}return o},getJSONData:function(){var t=o.GOAnimation.prototype.getJSONData.call(this);return t.rotateDirection=this.rotateDirection,t.startAngle=this.startAngle,t.endAngle=this.endAngle,t},fromJSONData:function(t){o.GOAnimation.prototype.fromJSONData.call(this,t),this.rotateDirection=t.rotateDirection,this.startAngle=t.startAngle,this.endAngle=t.endAngle}});L.supermap.plotting.GOAnimationRotate=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.GOAnimationScale=void 0;var o=i(6),n=e.GOAnimationScale=o.GOAnimation.extend({startScale:0,endScale:1,lastScale:null,getGOAnimationType:function(){return SuperMap.Plot.GOAnimationType.ANIMATION_SCALE},resetAnimationFeature:function(t){this.lastScale=null,this.animationGOFeature._resize(this.goFeature.initialScale/this.animationGOFeature.initialScale,this.animationGOFeature.getLatLngs()[0]),o.GOAnimation.prototype.resetAnimationFeature.call(this,t)},execute:function(){if(this.goFeature.symbolType!==SuperMap.Plot.SymbolType.DOTSYMBOL)return!1;if(!this.canExecute())return!1;this.lastScale=this.animationGOFeature.initialScale;var t=this.startScale;0===t&&(t=.1);var e=this.endScale;0===e&&(e=.1);var i=this.goFeature.initialScale*(t+this.ratio*(e-t));return this.animationGOFeature._resize(i/this.lastScale,this.animationGOFeature.getLatLngs()[0]),!0},getJSONData:function(){var t=o.GOAnimation.prototype.getJSONData.call(this);return t.startScale=this.startScale,t.endScale=this.endScale,t},fromJSONData:function(t){o.GOAnimation.prototype.fromJSONData.call(this,t),this.startScale=t.startScale,this.endScale=t.endScale}});L.supermap.plotting.GOAnimationScale=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.GOAnimationShow=void 0;var o=i(6),n=e.GOAnimationShow=o.GOAnimation.extend({showEffect:!1,finalDisplay:!1,getGOAnimationType:function(){return SuperMap.Plot.GOAnimationType.ANIMATION_SHOW},execute:function(){if(!this.canExecute())return!1;var t=this.ratio;return this.showEffect?this._executeHaveEffect(t):this._executeNoEffect(t),!0},_executeNoEffect:function(t){this.finalDisplay?this.animationGOFeature.style.display=1-t<.01?"display":"none":this.animationGOFeature.style.display=1-t<.01?"none":"display",this.animationGOFeature.redraw()},_executeHaveEffect:function(t){this.finalDisplay||(t=1-t);var e=parseFloat(t)<0?0:parseFloat(t);e=parseFloat(t)>1?1:parseFloat(t),this.animationGOFeature.style.display="display",this.animationGOFeature.style.opacity=e,this.animationGOFeature.style.fontOpacity=e,this.animationGOFeature.style.surroundLineColorOpacity=this.goFeature.style.surroundLineColorOpacity*t,this.animationGOFeature.style.fill&&(this.animationGOFeature.style.fillOpacity=this.goFeature.style.fillOpacity*t,this.animationGOFeature.style.fillBackOpacity=this.goFeature.style.fillBackOpacity*t),this.animationGOFeature.redraw()},getJSONData:function(){var t=o.GOAnimation.prototype.getJSONData.call(this);return t.showEffect=this.showEffect,t.finalDisplay=this.finalDisplay,t},fromJSONData:function(t){o.GOAnimation.prototype.fromJSONData.call(this,t),this.showEffect=t.showEffect,this.finalDisplay=t.finalDisplay}});L.supermap.plotting.GOAnimationShow=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.GOAnimationWay=void 0;var o=i(6),n=e.GOAnimationWay=o.GOAnimation.extend({showPath:!1,tangentDirection:!1,pathWidth:.5,pathColor:"#00FFFF",currentPt:null,pathType:SuperMap.Plot.WayPathType.POLYLINE,wayPoints:null,shapePoints:null,pathFeature:null,pathLength:0,destroy:function(){null!==this.pathFeature&&(L.supermap.plotting.getControl().getGOAnimationManager().map.removeLayer(this.pathFeature),this.pathFeature=null),o.GOAnimation.prototype.destroy.call(this)},getGOAnimationType:function(){return SuperMap.Plot.GOAnimationType.ANIMATION_WAY},setShowPath:function(t){this.showPath=t},resetAnimationFeature:function(t){o.GOAnimation.prototype.resetAnimationFeature.call(this,t);var e=this.goFeature.dRotate,i=this.animationGOFeature.dRotate;this.animationGOFeature._rotate(e-i,this.animationGOFeature.getLatLngs()[0]),t&&(null!==this.pathFeature&&null!==this.shapePoints||(this._makePath(),this.pathColor&&(this.pathFeature.options.color=this.pathColor),this.pathWidth&&(this.pathFeature.options.weight=this.pathWidth)),this.pathFeature.options.opacity=0,1!==this.animationGOFeature.symbolType&&(this.pathFeature.options.opacity=0),this.pathFeature.setStyle())},execute:function(){if(this.goFeature.symbolType!==SuperMap.Plot.SymbolType.DOTSYMBOL)return null!==this.pathFeature&&(this.pathFeature.options.opacity=0),!1;if(!this.canExecute())return!1;this.showPath&&0===this.pathFeature.options.opacity&&(this.pathFeature.options.opacity=1,this.pathFeature.setStyle());var t=this.ratio,e=t*this.pathLength,i=new Object,o=this._findPos(e,this.shapePoints,i);this.currentPt=o.clone();var n=this.animationGOFeature.getLatLngs()[0],s=o.y-n.lat,a=o.x-n.lng;if(this.animationGOFeature.move(s,a),this.tangentDirection){var l=i.angle;1===t&&(l=0);var r=this.animationGOFeature.dRotate;this.animationGOFeature._rotate(l-r,this.animationGOFeature.getLatLngs()[0])}return!0},setWayPoints:function(t){(!t||!SuperMap.Util.isArray(t)||2>t.length)&&(t=[this.goFeature.getLatLngs()[0],this.goFeature.getLatLngs()[0]]),this.wayPoints=[],this.wayPoints=L.Util.cloneLatLngs(t),null!==this.pathFeature&&(L.supermap.plotting.getControl().getGOAnimationManager().map.removeLayer(this.pathFeature),this.pathFeature.destroy(),this.pathFeature=null)},getWayPoints:function(){return this.wayPoints},getCurrentPt:function(){return this.currentPt},setPathColor:function(t){t&&(this.pathColor=t,this.pathFeature&&null!==this.pathFeature&&(this.pathFeature.options.color=this.pathColor,this.pathFeature.setStyle(this.pathFeature.options)))},getPathColor:function(){return this.pathColor},setPathWidth:function(t){t&&(this.pathWidth=t,this.pathFeature&&null!==this.pathWidth&&(this.pathFeature.options.weight=this.pathWidth,this.pathFeature.setStyle(this.pathFeature.options)))},getPathWidth:function(){return this.pathWidth},setPathType:function(t){void 0!==t&&null!==t&&this.pathType!==t&&(this.pathType=t,null!==this.pathFeature&&(L.supermap.plotting.getControl().getGOAnimationManager().map.removeLayer(this.pathFeature),this.pathFeature.destroy(),this.pathFeature=null))},getPathType:function(){return this.pathType},_makePath:function(){(null===this.wayPoints||2>this.wayPoints.length)&&(this.wayPoints=[this.goFeature.getLatLngs()[0],this.goFeature.getLatLngs()[0]]),null===this.pathFeature&&(this.pathType===SuperMap.Plot.WayPathType.POLYLINE?this.shapePoints=L.Util.latLngsToSuperMapPoints(this.wayPoints):this.shapePoints=SuperMap.Plot.PlottingUtil.generateBeizerPointsNoCtrlPt(L.Util.latLngsToSuperMapPoints(this.wayPoints)),this.pathFeature=L.polyline(L.Util.superMapPointsToLatLngs(this.shapePoints),SuperMap.PlotUtil.cloneObject(this.animationGOFeature.style)),L.supermap.plotting.getControl().getGOAnimationManager().map.addLayer(this.pathFeature)),this.pathLength=0;for(var t=1;t<this.shapePoints.length;t++)this.pathLength+=SuperMap.Plot.PlottingUtil.distance(this.shapePoints[t-1],this.shapePoints[t]);return this.pathFeature},_findPos:function(t,e,i){var o,n=0,s=0;for(o=1;o<e.length&&(s=SuperMap.Plot.PlottingUtil.distance(e[o-1],e[o]),!(n+s>=t));o++)n+=s;var a=SuperMap.Plot.PlottingUtil.findPoint(e[o-1],e[o],t-n,0);return this.tangentDirection&&(i.angle=SuperMap.Plot.PlottingUtil.radian(a,e[o])/Math.PI*180),a},getJSONData:function(){var t=o.GOAnimation.prototype.getJSONData.call(this);t.showPath=this.showPath,t.tangentDirection=this.tangentDirection,t.pathType=this.pathType,t.pathWidth=this.pathWidth,t.pathColor=this.pathColor,t.wayPoints=[];for(var e=0;e<this.wayPoints.length;e++)t.wayPoints.push({x:this.wayPoints[e].lng,y:this.wayPoints[e].lat});return t},fromJSONData:function(t){o.GOAnimation.prototype.fromJSONData.call(this,t),this.showPath=t.showPath,this.tangentDirection=t.tangentDirection,this.pathType=t.pathType,this.pathWidth=t.pathWidth,this.pathColor=t.pathColor;for(var e=[],i=0;i<t.wayPoints.length;i++)e.push(L.latLng(t.wayPoints[i].y,t.wayPoints[i].x));this.setWayPoints(e)}});L.supermap.plotting.GOAnimationWay=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.airDeployment=e.AirDeployment=void 0;var o=i(37),n=e.AirDeployment=o.NavyDeployment.extend({isShowTooltip:!0,getShowTooltip:function(){return this.isShowTooltip},setShowTooltip:function(t){if(this.isShowTooltip!==t)if(this.isShowTooltip=t,this.isShowTooltip&&0!==this.components.length){var e=this.layer.getFeatureByUuid(this.associatedUuid),i=L.Util.cloneLatLngs(e.latLngs[0]),o=this._map.latLngToLayerPoint(L.latLng(i[0].lat,i[0].lng)),n=this._transitionPoint(new SuperMap.Geometry.Point(this.space,0),o),s=Math.abs(n.lng-i[0].lng),a=new L.LatLngBounds(L.latLng(this.bounds.getSouth()-s,this.bounds.getWest()-s),L.latLng(this.bounds.getNorth()+s,this.bounds.getEast()+s)),l=[];l.push(L.latLng(a.getNorth(),a.getWest())),l.push(L.latLng(a.getSouth(),a.getEast()));var r=L.latLng(i[0].lat,i[0].lng);r.isFixedPos=!0,l.push(r);var u=L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.ANNOFRAMESYMBOL,l,{serverUrl:this.serverUrl});this._addComponents(u)}else for(var p in this.components)if(320===this.components[p].symbolType){this.subObjects.splice(SuperMap.Util.indexOf(this.subObjects,this.components[p]),1);var h=SuperMap.Util.indexOf(this.components,this.components[p]);if(-1!==h){this.components[h]._clearComponents(),this.components.splice(h,1);break}}},initialize:function(t,e,i,n){o.NavyDeployment.prototype.initialize.call(this,t,e,i,n),this.libID=0,this.code=SuperMap.Plot.SymbolType.AIRDEPLOYMENT,this.symbolType=SuperMap.Plot.SymbolType.AIRDEPLOYMENT,this.symbolName="空军兵力部署",null===this.isShowTooltip&&(this.isShowTooltip=!0)},destroy:function(){this.isShowTooltip=null,o.NavyDeployment.prototype.destroy.call(this)},_calculateParts:function(){var t=this.layer.getFeatureByUuid(this.associatedUuid);if(null!==t&&t.symbolType===SuperMap.Plot.SymbolType.DOTSYMBOL&&0!==t.latLngs.length){for(var e=!1,i=0;i<t.deployments.length;i++)if(this===t.deployments[i]){e=!0;break}if(e||t.deployments.push(this),0!==this.subObjects.length&&0===this.components.length)for(var i=0,o=this.subObjects.length;i<o;i++)this.subObjects[i].enableEdit=!0,this.subObjects[i].ownerGroup=this,this._addComponents(this.subObjects[i]);if(0===this.components.length){var n=L.Util.cloneLatLngs(t.latLngs[0]),s=this._map.latLngToLayerPoint(L.latLng(n[0].lat,n[0].lng)),a=this._transitionPoint(new SuperMap.Geometry.Point(this.space,0),s),l=Math.abs(a.lng-n[0].lng),r=new SuperMap.Geometry.Point(0,0),u=this._transitionPoint(r,s),p=new SuperMap.Geometry.Point(100,100),h=this._transitionPoint(p,s),c=new L.LatLngBounds(L.latLng(u.lat,u.lng),L.latLng(h.lat,h.lng)),y=Math.ceil(this._getSubSymbolCount(this.subSymbols.length-1)/this.colNum),g=Math.abs(c.getWest()-c.getEast())*this.colNum+l*(this.colNum-1),d=L.latLng(n[0].lat-l,n[0].lng-.5*g+.5*Math.abs(c.getEast()-c.getWest()));!0===this.isShowTooltip&&(d.lat-=4*l),this._setSubSymbolText();for(var f=[],i=0;i<this.subSymbols.length;i++)for(var S=0;S<this.subSymbols[i].totalNum;S++)f.push(this.subSymbols[i]);for(var P=0,i=0;i<y;i++){for(S=0;S<this.colNum&&!(P>=f.length);S++){var m=f[P];if(void 0!==m.symbolData&&null!==m.symbolData){for(var b=m.symbolData.libID,M=m.symbolData.code,v=d.lng+S*(l+Math.abs(c.getEast()-c.getWest())),_=d.lat-(2*l+Math.abs(c.getNorth()-c.getSouth())/2),T=0,x=0,O=0,A=0,w=0;w<m.symbolData.innerCells.length;w++)for(var D=0;D<m.symbolData.innerCells[w].positionPoints.length;D++)T<=m.symbolData.innerCells[w].positionPoints[D].x&&(T=m.symbolData.innerCells[w].positionPoints[D].x),x>=m.symbolData.innerCells[w].positionPoints[D].x&&(x=m.symbolData.innerCells[w].positionPoints[D].x),O<=m.symbolData.innerCells[w].positionPoints[D].y&&(O=m.symbolData.innerCells[w].positionPoints[D].y),A>=m.symbolData.innerCells[w].positionPoints[D].y&&(A=m.symbolData.innerCells[w].positionPoints[D].y);var E=L.latLng(_,v),I=this._map.latLngToLayerPoint(L.latLng(_,v)),N=new SuperMap.Geometry.Point((T+x)/2,O),C=new SuperMap.Geometry.Point(N.x,N.y),R=new SuperMap.Geometry.Point(f[P].symbolData.anchorPoint.x,f[P].symbolData.anchorPoint.y),U=this._transitionPoint(C,I),G=this._transitionPoint(R,I);E.lat+=G.lat-U.lat,E.lng+=G.lng-U.lng,m.symbolData.annotationPosition=5;var B=SuperMap.Util.cloneObject(m.symbolData),F=L.supermap.plotting.PlottingObject.createSymbol(b,M,E,{symbolData:B,scaleByMap:!0,minScale:0,maxScale:2048,space:0});F.enableEdit=!0,F.ownerGroup=this,this._addComponents(F),this.subObjects.push(F),P++}}this.bounds=this._calculateBounds(),d.lat=this.bounds.getSouth()}if(this.isShowTooltip){var k=new L.LatLngBounds(L.latLng(this.bounds.getSouth()-l,this.bounds.getWest()-l),L.latLng(this.bounds.getNorth()+l+1.2,this.bounds.getEast()+l)),j=[];j.push(L.latLng(k.getNorth(),k.getWest())),j.push(L.latLng(k.getSouth(),k.getEast()));var z=L.latLng(n[0].lat,n[0].lng);z.isFixedPos=!0,j.push(z);var Y=L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.ANNOFRAMESYMBOL,j,{serverUrl:this.serverUrl});Y.enableEdit=!0,Y.ownerGroup=this,this.subObjects.splice(0,0,Y),this._addComponents(Y)}}}},_setSubSymbolText:function(){for(var t=0;t<this.subSymbols.length;t++)null!==this.subSymbols[t].symbolData&&(this.subSymbols[t].symbolData.textContent=this.subSymbols[t].textContent)},_parseSymbolData:function(){o.NavyDeployment.prototype._parseSymbolData.call(this),this.symbolData&&(this.isShowTooltip=this.symbolData.isShowTooltip)},_setSymbolData:function(){o.NavyDeployment.prototype._setSymbolData.call(this),this.symbolData&&(this.symbolData.isShowTooltip=this.isShowTooltip)}}),s=e.airDeployment=function(t,e,i,o){return new n(t,e,i,o)};L.supermap.plotting.airDeployment=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.airRoute=e.AirRoute=void 0;var o=i(5),n=e.AirRoute=o.Route.extend({space:null,inner:null,initialize:function(t,e,i,n){o.Route.prototype.initialize.call(this,t,e,i,n),this.libID=0,this.code=SuperMap.Plot.SymbolType.AIRROUTE,this.symbolType=SuperMap.Plot.SymbolType.AIRROUTE,this.symbolName="空军航线",null===this.space&&(this.space=20),null===this.inner&&(this.inner=!1)},destroy:function(){this.space=null,this.inner=null,o.Route.prototype.destroy.call(this)},redraw:function(){if(this._initRoute(),void 0!==this.arrRoutePts&&null!==this.arrRoutePts)for(e=0;e<this.arrRoutePts.length;e++){var t=this.arrRoutePts[e];if(SuperMap.Util.isArray(t)&&!(t.length<2)){s=L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.POLYLINESYMBOL,t,{serverUrl:this.serverUrl,enableEdit:!1});this._addComponents(s)}}for(var e=0;e<this.routeNodes.length;e++){var i=this.routeNodes[e];if(null!==i&&(i.towardNodes&&null!==i.towardNodes)){for(var o=0;o<i.towardNodes.length;o++)if(!(!i.towardNodes[o]instanceof SuperMap.Plot.TowardNode)){var n=this._getNodeByUuid(i.towardNodes[o].routeNodeId);if(null!==n){if(0===this.arrRoutePts.length){(t=[]).push(L.latLng(i.y,i.x)),t.push(L.latLng(n.y,n.x));var s=L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.POLYLINESYMBOL,t,{enableEdit:!1});this._addComponents(s),s._startRouteNode=i.id,s._endRouteNode=n.id}this._createLiterateSign(i,i.towardNodes[o])}}this._createRouteNode(i)}}this._finishRoute()},_createLiterateSign:function(t,e){for(var i=0;i<this.prevLiterateSign.length;){if(this.prevLiterateSign[i]._startRouteNode===t.id&&this.prevLiterateSign[i]._endRouteNode===e.routeNodeId)return this.prevLiterateSign[i].startRouteNode=t,this.prevLiterateSign[i].towardNode=e,this.prevLiterateSign[i].redraw(),this.components.push(this.prevLiterateSign[i]),void this.prevLiterateSign.splice(i,1);i++}if(null!==e.textContent&&0!==e.textContent.length){var o=SuperMap.Util.copyAttributes(SuperMap.PlotUtil.cloneObject(this.style),e.style),n=L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.LITERATESIGN,null,{startRouteNode:t,towardNode:e,route:this,inner:this.inner,space:this.space},o);this._addComponents(n),n._startRouteNode=t.id,n._endRouteNode=e.routeNodeId}}}),s=e.airRoute=function(t,e,i,o){return new n(t,e,i,o)};L.supermap.plotting.airRoute=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AnnotationFrame=void 0;var o=i(1);e.AnnotationFrame=o.AlgoSymbol.extend({islocationCircle:!1,tipPoint:null,roundBox:null,textBoxType:null,setTextBoxType:function(t){this.textBoxType!==t&&(this.textBoxType=t,this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues))},getTextBoxType:function(){return this.textBoxType},setRoundBox:function(t){this.roundBox!==t&&(this.roundBox=t,this.textBoxType!==SuperMap.Plot.TextBoxType.NONEBOX&&this.redraw())},getRoundBox:function(){return this.roundBox},setLocationCircle:function(t){this.islocationCircle!==t&&(this.islocationCircle=t,this.textBoxType!==SuperMap.Plot.TextBoxType.NONEBOX&&this.redraw())},getLocationCircle:function(){return this.islocationCircle},move:function(t,e){L.Util.moveLatLngs(this.getLatLngs()[0],t,e),L.Util.moveLatLngs(this.getLatLngs()[1],t,e),this.setLatLngs(this.getLatLngs());for(var i=0,o=this.avoidRegions.length;i<o;i++)L.Util.moveLatLngs(this.avoidRegions[i].getLatLngs(),t,e)},redraw:function(){if(o.AlgoSymbol.prototype.redraw.call(this),this.symbolType===SuperMap.Plot.SymbolType.ANNOFRAMESYMBOL&&this.ownerGroup)for(var t=0;t<this.ownerGroup.components.length;t++)this.ownerGroup.components[t]!==this&&this.ownerGroup.components[t].redraw()},_resize:function(t,e){this.getLatLngs()[0]=L.latLng(e.lat+t*(this.getLatLngs()[0].lat-e.lat),e.lng+t*(this.getLatLngs()[0].lng-e.lng)),this.getLatLngs()[1]=L.latLng(e.lat+t*(this.getLatLngs()[1].lat-e.lat),e.lng+t*(this.getLatLngs()[1].lng-e.lng)),this.redraw()},_parseSymbolData:function(){o.AlgoSymbol.prototype._parseSymbolData.call(this),null!==this.symbolData&&(void 0!==this.symbolData.tipPoint&&null!==this.symbolData.tipPoint&&(this.tipPoint=this.symbolData.tipPoint),void 0!==this.symbolData.islocationCircle&&null!==this.symbolData.islocationCircle&&(this.islocationCircle=this.symbolData.islocationCircle),void 0!==this.symbolData.roundBox&&null!==this.symbolData.roundBox&&(this.roundBox=this.symbolData.roundBox),void 0!==this.symbolData.textBoxType&&null!==this.symbolData.textBoxType&&(this.textBoxType=this.symbolData.textBoxType),void 0!==this.symbolData.roundBox&&null!==this.symbolData.roundBox&&(this.roundBox=this.symbolData.roundBox))},_setSymbolData:function(t){o.AlgoSymbol.prototype._setSymbolData.call(this,t),null!==this.symbolData&&(null!==this.tipPoint&&void 0!==this.tipPoint&&(this.symbolData.tipPoint=this.tipPoint),null!==this.islocationCircle&&void 0!==this.islocationCircle&&(this.symbolData.islocationCircle=this.islocationCircle),null!==this.roundBox&&void 0!==this.roundBox&&(this.symbolData.roundBox=this.roundBox),null!==this.textBoxType&&void 0!==this.textBoxType&&(this.symbolData.textBoxType=this.textBoxType))},_calculateParts:function(){this.superMapAlgoSymbol&&0!==this.getLatLngs().length&&(this._sendDataToAlgo(),this.superMapAlgoSymbol.calculateParts(),this._getDataFromAlgo(),this._annotationContent(),this._transSymbolCellsToLayers(this.superMapAlgoSymbol.components))},_modifyPoint:function(t,e){if(e=new SuperMap.Geometry.Point(e.lng,e.lat),e.isScalePoint=!0,this._clearComponents(),this._sendDataToAlgo(),this.superMapAlgoSymbol.modifyPoint(t,e),this._getDataFromAlgo(),this._annotationContent(),this._transSymbolCellsToLayers(this.superMapAlgoSymbol.components),this.symbolType===SuperMap.Plot.SymbolType.ANNOFRAMESYMBOL&&this.ownerGroup)for(var i=0;i<this.ownerGroup.subObjects.length;i++)this.ownerGroup.subObjects[i]!==this&&this.ownerGroup.subObjects[i].redraw()},_annotationContent:function(){var t=this.textContent;if(0!==t.length){var e=SuperMap.PlotUtil.getTextWidth(this.style,t),i=this._map.latLngToLayerPoint(this.latLngs[0]),o=this._map.latLngToLayerPoint(this.latLngs[1]),n=parseFloat(Math.abs(o.x-i.x)),s=parseFloat(Math.abs(i.y-o.y));if(e>=n){var a=t.split("");t="";for(var l=1,r=parseFloat(this.style.fontSize)+2*this.style.weight+.2*parseFloat(this.style.fontSize)+l,u="",p=0,h=a.length;p<h&&r<=s;p++){if(u+=a[p],SuperMap.PlotUtil.getTextWidth(this.style,u)>=n){var c=a[p];if(a[p]="\n",l++,!((r=parseFloat(this.style.fontSize)*l+l+2*this.style.weight+.2*parseFloat(this.style.fontSize))<s))break;a[p]+=c,u=c}t+=a[p]}}if(0!==t.length){var y=L.latLng((this.latLngs[0].lat+this.latLngs[1].lat)/2,(this.latLngs[0].lng+this.latLngs[1].lng)/2),g=new SuperMap.Geometry.Point(y.lng,y.lat),d={},f=SuperMap.Plot.Primitives.getSpatialData(SuperMap.Plot.SymbolType.TEXTSYMBOL,[g],t);d.positionPoints=f,d.type=SuperMap.Plot.SymbolType.TEXTSYMBOL,d.textContent=t,d.style={surroundLineFlag:!1,labelAlign:"cm"},this.superMapAlgoSymbol.components.push(d)}}},_setDefaultOptions:function(t){o.AlgoSymbol.prototype._setDefaultOptions.call(this,t),t.tipPoint=this.tipPoint,t.islocationCircle=this.islocationCircle,t.roundBox=this.roundBox,t.textBoxType=this.textBoxType},_sendDataToAlgo:function(){this.superMapAlgoSymbol.controlPoints=L.Util.latLngsToSuperMapPoints(this.getLatLngs()),this.superMapAlgoSymbol.isEdit=this.isEdit,this.superMapAlgoSymbol.scaleValues=this.scaleValues,this.superMapAlgoSymbol.textContent=this.textContent,this.tipPoint&&(this.superMapAlgoSymbol.tipPoint=this.tipPoint),null!==this.islocationCircle&&void 0!==this.islocationCircle&&(this.superMapAlgoSymbol.islocationCircle=this.islocationCircle),null!==this.roundBox&&void 0!==this.roundBox&&(this.superMapAlgoSymbol.roundBox=this.roundBox),null!==this.textBoxType&&void 0!==this.textBoxType&&(this.superMapAlgoSymbol.textBoxType=this.textBoxType)},_getDataFromAlgo:function(){this.scalePoints=L.Util.superMapPointsToLatLngs(this.superMapAlgoSymbol.scalePoints),this.tipPoint=this.superMapAlgoSymbol.tipPoint,this.islocationCircle=this.superMapAlgoSymbol.islocationCircle,this.roundBox=this.superMapAlgoSymbol.roundBox,this.textBoxType=this.superMapAlgoSymbol.textBoxType}})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.arcRegion=e.ArcRegion=void 0;var o=i(1),n=e.ArcRegion=o.AlgoSymbol.extend({centerPoint:null,radius:null,startAngle:0,endAngle:360,textPosition:null,radiusText:null,radiusPosAngle:null,radiusLineType:null,subSymbolDefaultPixelSize:15,circlePts:null,spatialAnalystUrl:"",setRadius:function(t){this.radius!==t&&(this.radius=t,this.latLngs=[],this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues))},getRadius:function(){return this.radius},setStartAngle:function(t){this.startAngle!==t&&(this.startAngle=t,this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues))},getStartAngle:function(){return this.startAngle},setEndAngle:function(t){this.endAngle!==t&&(this.endAngle=t,this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues))},getEndAngle:function(){return this.endAngle},setTextPosition:function(t){this.textPosition!==t&&(this.textPosition=t,0!==this.textContent.length&&(this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues)))},setRadiusText:function(t,e){e>1&&(e=1),e<0&&(e=0),this.radiusText[e]!==t&&(this.radiusText[e]=t,this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues))},getRadiusText:function(t){return t>1&&(t=1),t<0&&(t=0),this.radiusText[t]},setRadiusTextPos:function(t){this.radiusPosAngle!==t&&(this.radiusPosAngle=t,0!==this.radiusText.length&&(this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues)))},getRadiusTextPos:function(){return this.radiusPosAngle},setRadiusLineType:function(t){this.radiusLineType!==t&&(this.radiusLineType=t,0!==this.radiusText.length&&(this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues)))},getRadiusLineType:function(){return this.radiusLineType},initialize:function(t,e,i,n){this.scalePoints=[],this.scaleValues=[],o.AlgoSymbol.prototype.initialize.call(this,t,e,i,n),this.libID=0,this.code=SuperMap.Plot.SymbolType.ARCREGION,this.symbolType=SuperMap.Plot.SymbolType.ARCREGION,this.symbolName="扇形区域",this.minEditPts=2,this.maxEditPts=4,null===this.circlePts&&(this.circlePts=[]),null===this.textPosition&&(this.textPosition=(this.startAngle+this.endAngle)/2),null===this.radiusText&&(this.radiusText=[]),null===this.radiusPosAngle&&(this.radiusPosAngle=(this.startAngle+this.endAngle)/2),null===this.radiusLineType&&(this.radiusLineType=SuperMap.Plot.RadiusLineType.SOLID),void 0!==n.constantSize&&null!==n.constantSize||!1!==this.isEdit||(this.constantSize=!0),this.subSymbolDefaultPixelSize=15},destroy:function(){this.centerPoint=null,this.radius=null,this.startAngle=null,this.endAngle=null,this.textPosition=null,this.radiusText=null,this.radiusPosAngle=null,this.radiusLineType=null,this.circlePts=null,o.AlgoSymbol.prototype.destroy.call(this)},_calculateParts:function(){if(this.scalePoints=[],0!==this.circlePts.length&&this.centerPoint&&this.radius){0===this.getLatLngs().length&&(this.latLngs=[this.centerPoint.clone()]),3===this.getLatLngs().length&&(this.startAngle=180*SuperMap.Plot.PlottingUtil.radian(this.latLngs[0],this.latLngs[2])/Math.PI),4===this.getLatLngs().length&&(this.endAngle=180*SuperMap.Plot.PlottingUtil.radian(this.latLngs[0],this.latLngs[3])/Math.PI),!0===this.isEdit&&this.getLatLngs().length>2&&this.getLatLngs().splice(2,this.getLatLngs().length-2),this.startAngle%=360,this.endAngle%=360,this.startAngle>this.endAngle&&(this.endAngle+=360);var t=[];if(SuperMap.Plot.PlottingUtil.equalFuzzy(this.startAngle,this.endAngle))t=L.Util.superMapPointsToLatLngs(SuperMap.Plot.PlottingUtil.clearSamePts(this.circlePts));else{var e=(t=this._getArcPts(this.startAngle,this.endAngle))[0].clone();e.isScalePoint=!0,e.tag=0;var i=t[t.length-1].clone();i.isScalePoint=!0,i.tag=1,this.scalePoints.push(e),this.scalePoints.push(i),t.push(this.centerPoint.clone())}this._createAndDrawLayer(SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,t,{surroundLineFlag:!1}),1===this.latLngs.length&&this.latLngs.push(t[Math.ceil(t.length/2)].clone()),this._textGeometry(),this._radiusGeometry()}},_textGeometry:function(){if(0!==this.textContent.length){var t=90,e=!1;this.textPosition%=360,this.endAngle>this.startAngle&&(this.textPosition<this.endAngle&&this.textPosition>this.startAngle?(this.endAngle-this.textPosition<t&&(t=this.endAngle-this.textPosition),this.textPosition-this.startAngle<t&&(t=this.textPosition-this.startAngle)):this.textPosition+360<this.endAngle&&this.textPosition+360>this.startAngle?(this.textPosition+=360,this.endAngle-this.textPosition<t&&(t=this.endAngle-this.textPosition),this.textPosition-this.startAngle<t&&(t=this.textPosition-this.startAngle)):e=!0),this.startAngle>this.endAngle&&(this.textPosition>this.startAngle||this.textPosition<this.endAngle?e=!0:(this.startAngle-this.textPosition<t&&(t=this.startAngle-this.textPosition),this.textPosition-this.endAngle<t&&(t=this.textPosition-this.endAngle))),2*t<4&&(e=!0);var i=null;if(!0===e){var o=this.getBounds().getCenter();this._createAndDrawLayer(34,[o],{surroundLineFlag:!1,labelAlign:"cm"},this.textContent),i=o.clone()}else{var n=this.textPosition+t,s=this.textPosition-t,a=this._getArcPts(s,n),l=SuperMap.Plot.RelLineText.ONLEFTLINE;SuperMap.Plot.PlottingUtil.isPloyClockwise(a)&&(l=SuperMap.Plot.RelLineText.ONRIGHTLINE);for(var r=SuperMap.Plot.PlottingUtil.clonePoints(a),u=[],p=r.length-1;p>=0;p--)u.push(r[p]);this._addComponents(L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.PATHTEXT,u,{textContent:this.textContent,showPathLine:!1,isCurve:!1,relLineText:l},this.style)),i=a[Math.ceil(a.length/2)].clone()}i.isScalePoint=!0,i.tag=2,this.scalePoints>0?this.scalePoints[0]=i:this.scalePoints.push(i)}},_radiusGeometry:function(){if(0!==this.radiusText.length){this.radiusPosAngle%=360;for(var t=new SuperMap.Geometry.Point(this.centerPoint.lng,this.centerPoint.lat),e=0,i=SuperMap.Plot.PlottingUtil.distance(t,this.circlePts[0]),o=1;o<this.circlePts.length;o++){var n=SuperMap.Plot.PlottingUtil.distance(t,this.circlePts[o]);n>i&&(i=n,e=o)}var s=SuperMap.Plot.PlottingUtil.isPloyClockwise(this.circlePts),a=180*SuperMap.Plot.PlottingUtil.radian(t,this.circlePts[e])/Math.PI,l=this.circlePts[e].clone(),r=(this.radiusPosAngle-a)*(Math.PI/180);SuperMap.Plot.PlottingUtil.rotateAngle(t,r,l);for(var u=this.circlePts[0].clone(),p=0;p<this.circlePts.length-1;p++){var h=180*SuperMap.Plot.PlottingUtil.radian(t,this.circlePts[p])/Math.PI,c=180*SuperMap.Plot.PlottingUtil.radian(t,this.circlePts[p+1])/Math.PI;if(1===s&&this.radiusPosAngle>=c&&this.radiusPosAngle<=h||0===s&&this.radiusPosAngle>=h&&this.radiusPosAngle<=c){if(!0===SuperMap.Plot.PlottingUtil.intersectLineSegs(t,l,this.circlePts[p],this.circlePts[p+1],u))break;u=Math.abs(this.radiusPosAngle-h)>=Math.abs(this.radiusPosAngle-c)?this.circlePts[p].clone():this.circlePts[p+1].clone();break}}var y=SuperMap.Plot.PlottingUtil.distance(t,u),g=L.latLng(u.y,u.x),d=[];if(d.push(this.centerPoint),d.push(g),SuperMap.Plot.RadiusLineType.NONE!==this.radiusLineType&&this._createAndDrawLayer(SuperMap.Plot.SymbolType.POLYLINESYMBOL,d,{surroundLineFlag:!1}),this.radiusLineType===SuperMap.Plot.RadiusLineType.ARROW){var f=this._map.unproject(L.point(this.subSymbolDefaultPixelSize,0)).lat;f/y>.3&&(f=.3*y);var S=SuperMap.Plot.PlottingUtil.findPoint(u,t,f,12.5),P=SuperMap.Plot.PlottingUtil.findPoint(u,t,f,-12.5),m=L.latLng(S.y,S.x),b=L.latLng(P.y,P.x),M=[];M.push(g.clone()),M.push(m),M.push(b),this._createAndDrawLayer(SuperMap.Plot.SymbolType.ARBITRARYPOLYGONSYMBOL,M,{surroundLineFlag:!1,fill:!0,fillLimit:!0,lineTypeLimit:!0})}SuperMap.Util.isArray(this.radiusText)||(this.radiusText=[this.radiusText]);var v,_;if(this.radiusText.length>=1){v=SuperMap.Plot.PlottingUtil.findPoint(t,u,.2*y,0),_=SuperMap.Plot.PlottingUtil.findPoint(t,u,.8*y,0);var T=SuperMap.Plot.PlottingUtil.findPoint(v,u,.02*y,90),x=SuperMap.Plot.PlottingUtil.findPoint(_,u,.02*y,90),O=L.latLng(T.y,T.x),A=L.latLng(x.y,x.x),w=SuperMap.Plot.RelLineText.ONLEFTLINE,D=[];T.x<x.x?(D.push(O),D.push(A)):(D.push(A),D.push(O),w=SuperMap.Plot.RelLineText.ONRIGHTLINE),this._addComponents(L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.PATHTEXT,D,{textContent:this.radiusText[0],showPathLine:!1,relLineText:w},this.style))}if(2===this.radiusText.length){var w=SuperMap.Plot.RelLineText.ONRIGHTLINE,E=SuperMap.Plot.PlottingUtil.findPoint(v,u,.02*y,270),I=SuperMap.Plot.PlottingUtil.findPoint(_,u,.02*y,270),N=L.latLng(E.y,E.x),C=L.latLng(I.y,I.x),R=[];E.x<I.x?(R.push(N),R.push(C)):(R.push(C),R.push(N),w=SuperMap.Plot.RelLineText.ONLEFTLINE),this._addComponents(L.supermap.plotting.PlottingObject.createSymbol(0,SuperMap.Plot.SymbolType.PATHTEXT,R,{textContent:this.radiusText[1],showPathLine:!1,relLineText:w},this.style))}var U=g.clone();U.isScalePoint=!0,U.tag=3,this.scalePoints>1?this.scalePoints[1]=U:this.scalePoints.push(U)}},_parseSymbolData:function(){if(o.AlgoSymbol.prototype._parseSymbolData.call(this),this.symbolData){if(this.centerPoint=L.latLng(this.symbolData.centerPoint.y,this.symbolData.centerPoint.x),this.endAngle=this.symbolData.endAngle,this.radius=this.symbolData.radius,this.radiusPosAngle=this.symbolData.radiusPosAngle,this.startAngle=this.symbolData.startAngle,this.textPosition=this.symbolData.textPosition,this.radiusLineType=this.symbolData.radiusLineType,this.radiusText=this.symbolData.radiusText,this.symbolData.circlePts){for(var t=[],e=0;e<this.symbolData.circlePts.length;e++)t.push(new SuperMap.Geometry.Point(this.symbolData.circlePts[e].x,this.symbolData.circlePts[e].y));0!==t.length&&(this.circlePts=t)}this.spatialAnalystUrl=this.symbolData.spatialAnalystUrl}},_setSymbolData:function(){this.latLngs=[],o.AlgoSymbol.prototype._setSymbolData.call(this),this.symbolData&&(this.symbolData.centerPoint||(this.symbolData.centerPoint={}),this.symbolData.centerPoint.x=this.centerPoint.lng,this.symbolData.centerPoint.y=this.centerPoint.lat,this.symbolData.endAngle=this.endAngle,this.symbolData.radius=this.radius,this.symbolData.radiusPosAngle=this.radiusPosAngle,this.symbolData.startAngle=this.startAngle,this.symbolData.textPosition=this.textPosition,this.symbolData.radiusLineType=this.radiusLineType,this.symbolData.radiusText=this.radiusText,this.symbolData.circlePts=this.circlePts,this.symbolData.spatialAnalystUrl=this.spatialAnalystUrl)},_reView:function(){void 0!==this.prevStrokeWidth&&this.prevStrokeWidth!==this.feature.style.strokeWidth&&(this.strokeWidth=this.style.strokeWidth),this.fromZoom!==this._map.getZoom()&&(!0===this.isEdit&&this.redraw(),this.fromZoom=this._map.getZoom())},_generateArcRegionFromServer:function(){if(void 0===this.isRedraw&&(this.isRedraw=!0),!1!==this.isRedraw&&null!==this._map)if(this.isRedraw=!1,this.latLngs.length<this.minEditPts)this.isRedraw=!0;else{if(this.latLngs.length>2)return this.redraw(),void(this.isRedraw=!0);if(null===this.centerPoint?this.centerPoint=this.latLngs[0].clone():(this.centerPoint.lat=this.latLngs[0].lat,this.centerPoint.lng=this.latLngs[0].lng),this.radius=this.latLngs[0].distanceTo(this.latLngs[1])/1e3,0!==this.radius){var t=new SuperMap.BufferDistance({value:1e3*this.radius}),e=new SuperMap.BufferSetting({endType:SuperMap.BufferEndType.ROUND,leftDistance:t,rightDistance:t,semicircleLineSegment:36}),i=new SuperMap.GeometryBufferAnalystParameters({sourceGeometry:L.marker(this.centerPoint),sourceGeometrySRID:parseInt(this._map.options.crs.code.split(":")[1]),bufferSetting:e}),o=this;L.supermap.spatialAnalystService(this.spatialAnalystUrl).bufferAnalysis(i,function(t){o.circlePts=[];for(var e=t.result.resultGeometry.points,i=0,n=e.length;i<n;i++)o.circlePts.push(new SuperMap.Geometry.Point(e[i].x,e[i].y));o.redraw(),o.isRedraw=!0},SuperMap.DataFormat.ISERVER)}else this.isRedraw=!0}},_modifyPoint:function(t,e){if(!0===e.isScalePoint){if(0===t)this.startAngle=180*SuperMap.Plot.PlottingUtil.radian(this.latLngs[0],e)/Math.PI;else if(1===t)this.endAngle=180*SuperMap.Plot.PlottingUtil.radian(this.latLngs[0],e)/Math.PI;else if(2===t)this.textPosition=180*SuperMap.Plot.PlottingUtil.radian(this.latLngs[0],e)/Math.PI;else if(3===t){var i=180*SuperMap.Plot.PlottingUtil.radian(this.latLngs[0],e)/Math.PI;this.startAngle%360==this.endAngle%360?this.radiusPosAngle=i:(i>this.startAngle&&i<this.endAngle||i+360>this.startAngle&&i+360<this.endAngle)&&(this.radiusPosAngle=i)}this.redraw(),this.isRedraw=!0}else this._generateArcRegionFromServer()},setRotate:function(t){if(this.dRotate=t,this._rotate(t,this.centerPoint),this.radiusPosAngle+=t,this.startAngle+=t,this.endAngle+=t,this.textPosition+=t,this.latLngs=[],0!==this.avoidRegions.length)for(var e=0,i=this.avoidRegions.length;e<i;e++)L.Util.rotateLatLngs(this.avoidRegions[e].getLatLngs(),this.centerPoint,t);this.redraw()},move:function(t,e){if(void 0===this.isMove&&(this.isMove=!0),!1!==this.isMove){this.isMove=!1;for(var i=0,o=this.avoidRegions.length;i<o;i++)L.Util.moveLatLngs(this.avoidRegions[i].getLatLngs(),t,e);L.Util.moveLatLngs([this.centerPoint],t,e),this.latLngs=[];var n=new SuperMap.BufferDistance({value:1e3*this.radius}),s=new SuperMap.BufferSetting({endType:SuperMap.BufferEndType.ROUND,leftDistance:n,rightDistance:n,semicircleLineSegment:36}),a=new SuperMap.GeometryBufferAnalystParameters({sourceGeometry:L.marker(this.centerPoint),sourceGeometrySRID:parseInt(this._map.options.crs.code.split(":")[1]),bufferSetting:s}),l=this;L.supermap.spatialAnalystService(this.spatialAnalystUrl).bufferAnalysis(a,function(t){l.circlePts=[];for(var e=t.result.resultGeometry.points,i=0,o=e.length;i<o;i++)l.circlePts.push(new SuperMap.Geometry.Point(e[i].x,e[i].y));l.redraw(),l.isMove=!0},SuperMap.DataFormat.ISERVER)}},_calculateRadius:function(){if(!this._radiusLng||!this._radiusLat){var t=this.centerPoint.lng,e=this.centerPoint.lat,i=this._map,o=i.options.crs;if(o.distance===L.CRS.Earth.distance){var n=Math.PI/180,s=1e3*this.radius/L.CRS.Earth.R/n,a=i.project([e+s,t]),l=i.project([e-s,t]),r=a.add(l).divideBy(2),u=i.unproject(r).lat,p=Math.acos((Math.cos(s*n)-Math.sin(e*n)*Math.sin(u*n))/(Math.cos(e*n)*Math.cos(u*n)))/n;(isNaN(p)||0===p)&&(p=s/Math.cos(Math.PI/180*e)),this._radiusLat=s,this._radiusLng=p}else{var h=o.unproject(o.project(this._latlng).subtract([this._mRadius,0]));this._point=i.latLngToLayerPoint(this._latlng),this._radius=this._point.x-i.latLngToLayerPoint(h).x}}},_getArcPts:function(t,e){var i=[];e%=360,(t%=360)<0&&(t+=360),e<0&&(e+=360);for(var o=new SuperMap.Geometry.Point(this.centerPoint.lng,this.centerPoint.lat),n=0,s=SuperMap.Plot.PlottingUtil.distance(o,this.circlePts[0]),a=1;a<this.circlePts.length;a++){var l=SuperMap.Plot.PlottingUtil.distance(o,this.circlePts[a]);l>s&&(s=l,n=a)}var r=0,u=0,p=this.circlePts[0].clone(),h=this.circlePts[0].clone(),c=(t-180*SuperMap.Plot.PlottingUtil.radian(o,this.circlePts[n])/Math.PI)*(Math.PI/180),y=new SuperMap.Geometry.Point(this.centerPoint.lng,this.centerPoint.lat),g=this.circlePts[n].clone();SuperMap.Plot.PlottingUtil.rotateAngle(y,c,g);var d=this.circlePts[n].clone();SuperMap.Plot.PlottingUtil.rotateAngle(y,c,d);for(var f=180*SuperMap.Plot.PlottingUtil.radian(o,this.circlePts[0])/Math.PI,S=f,P=SuperMap.Plot.PlottingUtil.isPloyClockwise(this.circlePts),m=0;m<this.circlePts.length-1;m++){M=b=180*SuperMap.Plot.PlottingUtil.radian(o,this.circlePts[m+1])/Math.PI;if(1===P&&M>S&&(M-=360),0===P&&M<S&&(M+=360),1===P&&t>=M&&t<=S||0===P&&t>=S&&t<=M){!0===SuperMap.Plot.PlottingUtil.intersectLineSegs(o,g,this.circlePts[m],this.circlePts[m+1],p)?r=0===P?m+1:m:(v=Math.abs(t-S))>=(_=Math.abs(t-M))?(r=m,p=this.circlePts[m].clone()):(r=m+1,p=this.circlePts[m+1].clone()),S=f;break}S=b}for(m=0;m<this.circlePts.length-1;m++){var b=180*SuperMap.Plot.PlottingUtil.radian(o,this.circlePts[m+1])/Math.PI,M=b;if(1===P&&M>S&&(M-=360),0===P&&M<S&&(M+=360),1===P&&e>=M&&e<=S||0===P&&e>=S&&e<=M){if(!0===SuperMap.Plot.PlottingUtil.intersectLineSegs(o,d,this.circlePts[m],this.circlePts[m+1],h))u=0===P?m:m+1;else{var v=Math.abs(e-S),_=Math.abs(e-M);v>=_?(u=m,h=this.circlePts[m].clone()):(u=m+1,h=this.circlePts[m+1].clone())}break}S=b}if(0===P)if(r<u){i.push(p);for(T=r;T<=u;T++)i.push(this.circlePts[T].clone());i.push(h)}else{i.push(p);for(T=r;T<this.circlePts.length;T++)i.push(this.circlePts[T].clone());for(T=0;T<=u;T++)i.push(this.circlePts[T].clone());i.push(h)}else if(1===P)if(u<r){i.push(p);for(T=r;T>=u;T--)i.push(this.circlePts[T].clone());i.push(h)}else{i.push(p);for(T=r;T>0;T--)i.push(this.circlePts[T].clone());for(var T=this.circlePts.length-1;T>=u;T--)i.push(this.circlePts[T].clone());i.push(h)}return L.Util.superMapPointsToLatLngs(SuperMap.Plot.PlottingUtil.clearSamePts(i))}}),s=e.arcRegion=function(t,e,i,o){return new n(t,e,i,o)};L.supermap.plotting.arcRegion=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ArrowLine=void 0;var o=i(1);e.ArrowLine=o.AlgoSymbol.extend({arrowTypeStart:0,arrowTypeEnd:0,getStartArrowType:function(){return this.arrowTypeStart},setStartArrowType:function(t){this.arrowTypeStart!==t&&(this.arrowTypeStart=t,this.redraw())},getEndArrowType:function(){return this.arrowTypeEnd},setEndArrowType:function(t){this.arrowTypeEnd!==t&&(this.arrowTypeEnd=t,this.redraw())},_parseSymbolData:function(){o.AlgoSymbol.prototype._parseSymbolData.call(this),this.symbolData&&(this.symbolData.hasOwnProperty("arrowTypeEnd")&&(this.arrowTypeEnd=this.symbolData.arrowTypeEnd),this.symbolData.hasOwnProperty("arrowTypeStart")&&(this.arrowTypeStart=this.symbolData.arrowTypeStart))},_setSymbolData:function(){o.AlgoSymbol.prototype._setSymbolData.call(this),this.symbolData&&(this.symbolData.arrowTypeEnd=this.arrowTypeEnd,this.symbolData.arrowTypeStart=this.arrowTypeStart)},_setDefaultOptions:function(t){o.AlgoSymbol.prototype._setDefaultOptions.call(this,t),t.arrowTypeEnd=this.arrowTypeEnd,t.arrowTypeStart=this.arrowTypeStart},_sendDataToAlgo:function(){o.AlgoSymbol.prototype._sendDataToAlgo.call(this),this.superMapAlgoSymbol.arrowTypeEnd=this.arrowTypeEnd,this.superMapAlgoSymbol.arrowTypeStart=this.arrowTypeStart}})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CombinationalCircle=void 0;var o=i(1);e.CombinationalCircle=o.AlgoSymbol.extend({radius:null,_parseSymbolData:function(){if(o.AlgoSymbol.prototype._parseSymbolData.call(this),this.symbolData&&this.symbolData.radius&&0!==this.symbolData.radius.length){this.radius=[];for(var t=0;t<this.symbolData.radius.length;t++)this.radius.push(this.symbolData.radius[t])}},_setSymbolData:function(){o.AlgoSymbol.prototype._setSymbolData.call(this),this.symbolData&&(this.symbolData.radius=this.radius)},_setDefaultOptions:function(t){o.AlgoSymbol.prototype._setDefaultOptions.call(this,t),t.radius=this.radius},_getDatafromAlgo:function(){o.AlgoSymbol.prototype._getDatafromAlgo.call(this),this.radius=this.superMapAlgoSymbol.radius}})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ConcentricCircle=void 0;var o=i(1);e.ConcentricCircle=o.AlgoSymbol.extend({startAngle:0,endAngle:360,_parseSymbolData:function(){o.AlgoSymbol.prototype._parseSymbolData.call(this),this.symbolData&&(this.symbolData.hasOwnProperty("startAngle")&&(this.startAngle=this.symbolData.startAngle),this.symbolData.hasOwnProperty("endAngle")&&(this.endAngle=this.symbolData.endAngle))},_setSymbolData:function(){o.AlgoSymbol.prototype._setSymbolData.call(this),this.symbolData&&(this.symbolData.startAngle=this.startAngle,this.symbolData.endAngle=this.endAngle)},_setDefaultOptions:function(t){o.AlgoSymbol.prototype._setDefaultOptions.call(this,t),t.startAngle=this.startAngle,t.endAngle=this.endAngle},_getDatafromAlgo:function(){o.AlgoSymbol.prototype._getDatafromAlgo.call(this),this.startAngle=this.superMapAlgoSymbol.startAngle,this.endAngle=this.superMapAlgoSymbol.endAngle}})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.interferenceBeam=e.InterferenceBeam=void 0;var o=i(2),n=e.InterferenceBeam=o.GraphicObject.extend({initialize:function(t,e,i,n){o.GraphicObject.prototype.initialize.call(this,t,e,i,n),this.libID=0,this.code=SuperMap.Plot.SymbolType.INTERFERENCEBEAM,this.symbolType=SuperMap.Plot.SymbolType.INTERFERENCEBEAM,this.symbolName="干扰波束",this.minEditPts=3,this.maxEditPts=9999},destroy:function(){o.GraphicObject.prototype.destroy.apply(this,arguments)},_calculateParts:function(){null!==this.getLatLngs()&&this.getLatLngs().length>=this.minEditPts&&this._createAndDrawLayer(32,this.latLngs,this.style,"")},move:function(t,e){L.Util.moveLatLngs(this.getLatLngs(),t,e);for(var i=0,o=this.avoidRegions.length;i<o;i++)this.avoidRegions[i].move(t,e);this.redraw()},setRotate:function(t){this.dRotate=t,null===this.anchorPoint&&(this.anchorPoint=this.getBounds().getCenter());for(var e in this.components)L.Util.rotateLatLngs(this.components[e].getLatLngs(),this.anchorPoint,t),this.components[e].setLatLngs(this.components[e].getLatLngs());for(var i=0,o=this.avoidRegions.length;i<o;i++)this.avoidRegions[i].rotate(this.dRotate,this.anchorPoint)},_reView:function(){}}),s=e.interferenceBeam=function(t,e,i,o){return new n(t,e,i,o)};L.supermap.plotting.interferenceBeam=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.missileRoute=e.MissileRoute=void 0;var o=i(5),n=e.MissileRoute=o.Route.extend({initialize:function(t,e,i,n){this.libID=0,this.code=SuperMap.Plot.SymbolType.MISSILEROUTE,this.symbolType=SuperMap.Plot.SymbolType.MISSILEROUTE,this.symbolName="导弹航线",o.Route.prototype.initialize.call(this,t,e,i,n)}}),s=e.missileRoute=function(t,e,i,o){return new n(t,e,i,o)};L.supermap.plotting.missileRoute=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.navyRoute=e.NavyRoute=void 0;var o=i(5),n=e.NavyRoute=o.Route.extend({initialize:function(t,e,i,n){this.libID=0,this.code=SuperMap.Plot.SymbolType.NAVYROUTE,this.symbolType=SuperMap.Plot.SymbolType.NAVYROUTE,this.symbolName="海军航线",o.Route.prototype.initialize.call(this,t,e,i,n)}}),s=e.navyRoute=function(t,e,i,o){return new n(t,e,i,o)};L.supermap.plotting.navyRoute=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.polygonRegion=e.PolygonRegion=void 0;var o=i(1),n=e.PolygonRegion=o.AlgoSymbol.extend({annotationPosition:0,setTextPosition:function(t){this.annotationPosition!==t&&(this.annotationPosition=t,0!==this.textContent.length&&this.redraw())},_setDefaultOptions:function(t){o.AlgoSymbol.prototype._setDefaultOptions.call(this,t),t.annotationPosition=this.annotationPosition},_sendDataToAlgo:function(){o.AlgoSymbol.prototype._sendDataToAlgo.call(this),this.superMapAlgoSymbol.annotationPosition=this.annotationPosition}}),s=e.polygonRegion=function(t,e,i,o){return new n(t,e,i,o)};L.supermap.plotting.polygonRegion=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Satellite=e.satellite=void 0;var o=i(2),n=(i(15),e.satellite=o.GraphicObject.extend({orbitPoints:[],subSymbol:null,visible:null,timeWindows:null,setVisible:function(t){this.visible!==t&&(this.visible=t,this.redraw(),null!==this._map.getPlotEditControl()&&this.isSelected&&this.fire(SuperMap.Plot.Event.reseteditmarkersvalues))},getBounds:function(){var t=this;return t._bounds=new L.LatLngBounds,t.components.map(function(e){e.symbolType===SuperMap.Plot.SymbolType.DOTSYMBOL?t._bounds.extend(e.getBoundsWithText()):t._bounds.extend(e.getBounds())}),t._bounds},getVisible:function(){return this.visible},initialize:function(t,e,i,n){this.libID=0,this.code=SuperMap.Plot.SymbolType.SATELLITE,this.symbolType=SuperMap.Plot.SymbolType.SATELLITE,this.symbolName="卫星",null===this.visible&&(this.visible=!0),null===this.timeWindows&&(this.timeWindows=[]),0===this.orbitPoints.length&&(this.orbitPoints=[]),o.GraphicObject.prototype.initialize.call(this,t,e,i,n)},_calculateParts:function(){if(null!==this.orbitPoints&&this.visible){if(null===this.latLngs||0===this.latLngs.length)this.latLngs=L.Util.superMapPointsToLatLngs(this.orbitPoints);else for(var t=0,e=this.latLngs.length;t<e;t++)this.orbitPoints[t].x=this.latLngs[t].lng,this.orbitPoints[t].y=this.latLngs[t].lat;this._createAndDrawLayer(24,L.Util.cloneLatLngs(this.latLngs),this.style,"")}var i=Math.floor(this.orbitPoints.length/2),o=new L.latLng(this.orbitPoints[i].y,this.orbitPoints[i].x),n=SuperMap.Plot.PlottingUtil.radian(o,new L.latLng(this.orbitPoints[i-1].y,this.orbitPoints[i-1].x));this.subSymbol.symbolData.dRotate=180*n/Math.PI,this.subSymbol.symbolData.textContent=this.textContent,this.subSymbol.symbolData.annotationPosition=7;var s={symbolData:SuperMap.Util.cloneObject(this.subSymbol.symbolData),serverUrl:this.serverUrl,enableEdit:!1,style:this.style,scaleByMap:!0},a=SuperMap.PlotUtil.cloneObject(this.style),l=L.supermap.plotting.PlottingObject.createSymbol(this.subSymbol.libID,this.subSymbol.code,[o],s,a);this._addComponents(l),l.isEdit=!0},_parseSymbolData:function(){if(o.GraphicObject.prototype._parseSymbolData.call(this),this.symbolData&&(this.symbolData.hasOwnProperty("subSymbol")&&(this.subSymbol=this.symbolData.subSymbol),this.symbolData.hasOwnProperty("visible")&&(this.visible=this.symbolData.visible),this.symbolData.hasOwnProperty("orbitPoints")&&0!==this.symbolData.orbitPoints.length)){this.orbitPoints=[];for(var t=0;t<this.symbolData.orbitPoints.length;t++)this.orbitPoints.push(new SuperMap.Plot.OrbitPoint(this.symbolData.orbitPoints[t].x,this.symbolData.orbitPoints[t].y,this.symbolData.orbitPoints[t].z,this.symbolData.orbitPoints[t].number,this.symbolData.orbitPoints[t].time))}},_setSymbolData:function(){o.GraphicObject.prototype._setSymbolData.call(this),this.symbolData&&(this.symbolData.subSymbol=this.subSymbol,this.symbolData.visible=this.visible,this.symbolData.orbitPoints=this.orbitPoints)},move:function(t,e){L.Util.moveLatLngs(this.getLatLngs(),t,e);for(var i=0,o=this.orbitPoints.length;i<o;i++)this.orbitPoints[i].x+=e,this.orbitPoints[i].y+=t;for(var i=0,n=this.timeWindows.length;i<n;i++){var s=this.timeWindows[i];null!==s&&s.redraw()}if(0!==this.avoidRegions.length)for(var a=0,o=this.avoidRegions.length;a<o;a++)L.Util.moveLatLngs(this.avoidRegions[a].getLatLngs(),t,e);if(!1===this.visible)for(i=0;i<this.components.length;i++)this.components[i].symbolType===SuperMap.Plot.SymbolType.DOTSYMBOL&&this.components[i].move(t,e);else this.redraw()},_resizeLatLngs:function(t,e,i){o.GraphicObject.prototype._resizeLatLngs.apply(this,arguments);for(var n=0,s=this.orbitPoints.length;n<s;n++)this.orbitPoints[n].x=this.latLngs[n].lng,this.orbitPoints[n].y=this.latLngs[n].lat;for(var n=0,a=this.timeWindows.length;n<a;n++){var l=this.timeWindows[n];null!==l&&l.redraw()}},setRotate:function(t){this.dRotate=t,null===this.anchorPoint&&(this.anchorPoint=this.getBounds().getCenter());for(var e=0,i=this.avoidRegions.length;e<i;e++)this.avoidRegions[e].rotate(t,this.anchorPoint);o.GraphicObject.prototype._rotate.call(this,t,this.anchorPoint);for(var n=0,i=this.orbitPoints.length;n<i;n++)this.orbitPoints[n].x=this.latLngs[n].lng,this.orbitPoints[n].y=this.latLngs[n].lat;for(n=0;n<this.timeWindows.length;n++){var s=this.timeWindows[n];null!==s&&s.redraw()}this.fire(SuperMap.Plot.Event.reseteditmarkersvalues)},_reView:function(){for(var t=0,e=this.components.length;t<e;t++)this.components[t].symbolType===SuperMap.Plot.SymbolType.DOTSYMBOL&&(this.components[t]._reView(),this.components[t]._handleAnnotation(),this.subSymbol.symbolData=SuperMap.Util.cloneObject(this.components[t].getSymbolData()))}})),s=e.Satellite=function(t,e,i,o){return new n(t,e,i,o)};L.supermap.plotting.satellite=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.satelliteTimeWindows=e.SatelliteTimeWindows=void 0;var o=i(2),n=e.SatelliteTimeWindows=o.GraphicObject.extend({timeWindows:[],type:null,initialize:function(t,e,i,n){this.libID=0,this.code=SuperMap.Plot.SymbolType.SATELLITETIMEWINDOWS,this.symbolType=SuperMap.Plot.SymbolType.SATELLITETIMEWINDOWS,this.symbolName="卫星时间窗",o.GraphicObject.prototype.initialize.call(this,t,e,i,n),null===this.type&&(this.type="Number")},_calculateParts:function(){if(this.associatedUuid){var t=this.layer.getFeatureByUuid(this.associatedUuid);if(null===t||null===t.orbitPoints)return}for(var e=!1,i=0;i<t.timeWindows.length;i++)if(this===t.timeWindows[i]){e=!0;break}if(e||t.timeWindows.push(this),null!==this.timeWindows)for(var o=t.orbitPoints,i=0;i<this.timeWindows.length;i++){var n,s;if("Number"===this.type){for(var a=0,l=o.length;a<l;a++)if(this.timeWindows[i].startOrbitPoint===o[a].number&&(n=a),this.timeWindows[i].endOrbitPoint===o[a].number){s=a;break}}else for(a=0;a<o.length;a++)if(this.timeWindows[i].startOrbitPoint===o[a].time&&(n=a),this.timeWindows[i].endOrbitPoint===o[a].time){s=a;break}for(var r=[],u=n;u<=s;u++)r.push(new L.latLng(o[u].y,o[u].x));0!==r.length&&this._createAndDrawLayer(24,r,{surroundLineFlag:!1,lineWidthLimit:!0,weight:4*t.style.weight+this.style.weight})}},calculateBounds:function(){this.bounds=null;var t=new L.Bounds,e=this.components;if(e)for(var i=0;i<e.length;i++)t.extend(e[i].getBounds());null!==t.left&&null!==t.bottom&&null!==t.right&&null!==t.top&&this.setBounds(t)},move:function(t,e){},_parseSymbolData:function(){o.GraphicObject.prototype._parseSymbolData.apply(this,arguments),this.symbolData&&(this.timeWindows=this.symbolData.timeWindows,this.type=this.symbolData.type)},_setSymbolData:function(){o.GraphicObject.prototype._setSymbolData.apply(this,arguments),this.symbolData&&(this.symbolData.timeWindows=this.timeWindows,this.symbolData.type=this.type)}}),s=e.satelliteTimeWindows=function(t,e,i,o){return new n(t,e,i,o)};L.supermap.plotting.satelliteTimeWindows=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.symbolText=e.SymbolText=void 0;var o=i(2),n=e.SymbolText=o.GraphicObject.extend({symbolTexts:[],addFrame:!1,getFrame:function(){return this.addFrame},setFrame:function(t){this.addFrame!==t&&(this.addFrame=t,this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues))},updateSymbolText:function(t,e){this.symbolTexts.length>e&&(this.symbolTexts[e]=t,this.redraw(),this.fire(SuperMap.Plot.Event.reseteditmarkersvalues))},removeSymbolTextsFromDotSymbol:function(t){if(t&&"string"==typeof t){var e=this.layer.getFeatureByUuid(t);if(e)for(var i=0,o=e.geoSymbolTexts.length;i<o;i++)if(this===e.geoSymbolTexts[i]){e.geoSymbolTexts.splice(i,1);break}}},initialize:function(t,e,i,n){this.libID=0,this.code=SuperMap.Plot.SymbolType.SYMBOLTEXT,this.symbolType=SuperMap.Plot.SymbolType.SYMBOLTEXT,this.symbolName="对象标注",o.GraphicObject.prototype.initialize.call(this,t,e,i,n)},_calculateParts:function(){this.latLngs=[];var t=[],e=this.symbolTexts;if(e.length>0){var i=this.layer.getFeatureByUuid(this.associatedUuid);if(null===i||void 0===i)return;for(var o=!1,n=i.geoSymbolTexts,s=0,a=n.length;s<a;s++)if(this===n[s]){o=!0;break}o||n.push(this);var l={surroundLineFlag:!1,lineColorLimit:!0,fillColorLimit:!0,lineWidthLimit:!0,lineTypeLimit:!0,fontColorLimit:!0,fontSizeLimit:!0,fillLimit:!0};this._calculateSize(i);var r=i.getBounds();if(!r||!r.isValid())return;for(var s=0,u=e.length;s<u;s++){this._mergeStyleToSymbolText(e[s]);var p=e[s].textContent;if(null!==p&&0!==p.length){if(e[s].textPosition=void 0===e[s].textPosition?0:e[s].textPosition,this.addFrame)var h=SuperMap.PlotUtil.getTextWidth(e[s].style,e[s].textContent);var c,y,g,d=L.point(0,0),f=L.point(0,0);switch(e[s].textPosition){case 0:e[s].style.labelAlign="rb",c=L.latLng(r.getNorth(),r.getWest()),(y=this._map.latLngToLayerPoint(c)).x-=e[s].offsetX,y.y-=e[s].offsetY,!0===this.addFrame&&(d.x=y.x,d.y=y.y,f.x=y.x-h,f.y=y.y-parseInt(e[s].style.fontSize));break;case 1:e[s].style.labelAlign="rt",c=L.latLng(r.getSouth(),r.getWest()),(y=this._map.latLngToLayerPoint(c)).x-=e[s].offsetX,y.y+=e[s].offsetY,!0===this.addFrame&&(d.x=y.x,d.y=y.y,f.x=y.x-h,f.y=y.y+parseInt(e[s].style.fontSize));break;case 2:e[s].style.labelAlign="lb",c=L.latLng(r.getNorth(),r.getEast()),(y=this._map.latLngToLayerPoint(c)).x+=e[s].offsetX,y.y-=e[s].offsetY,!0===this.addFrame&&(d.x=y.x,d.y=y.y,f.x=y.x+h,f.y=y.y-parseInt(e[s].style.fontSize));break;case 3:e[s].style.labelAlign="lt",c=L.latLng(r.getSouth(),r.getEast()),(y=this._map.latLngToLayerPoint(c)).x+=e[s].offsetX,y.y+=e[s].offsetY,!0===this.addFrame&&(d.x=y.x,d.y=y.y,f.x=y.x+h,f.y=y.y+parseInt(e[s].style.fontSize));break;case 4:e[s].style.labelAlign="cb",c=L.latLng(r.getNorth(),(r.getWest()+r.getEast())/2),(y=this._map.latLngToLayerPoint(c)).x+=e[s].offsetX,y.y-=e[s].offsetY,!0===this.addFrame&&(d.x=y.x-h/2,d.y=y.y,f.x=y.x+h/2,f.y=y.y-parseInt(e[s].style.fontSize));break;case 5:e[s].style.labelAlign="ct",c=L.latLng(r.getSouth(),(r.getWest()+r.getEast())/2),(y=this._map.latLngToLayerPoint(c)).x+=e[s].offsetX,y.y+=e[s].offsetY,!0===this.addFrame&&(d.x=y.x-h/2,d.y=y.y,f.x=y.x+h/2,f.y=y.y+parseInt(e[s].style.fontSize));break;case 6:e[s].style.labelAlign="rm",c=L.latLng((r.getSouth()+r.getNorth())/2,r.getWest()),(y=this._map.latLngToLayerPoint(c)).x-=e[s].offsetX,y.y+=e[s].offsetY,!0===this.addFrame&&(d.x=y.x,d.y=y.y+parseInt(e[s].style.fontSize)/2,f.x=y.x-h,f.y=y.y-parseInt(e[s].style.fontSize)/2);break;case 7:e[s].style.labelAlign="lm",c=L.latLng((r.getSouth()+r.getNorth())/2,r.getEast()),(y=this._map.latLngToLayerPoint(c)).x+=e[s].offsetX,y.y+=e[s].offsetY,!0===this.addFrame&&(d.x=y.x,d.y=y.y+parseInt(e[s].style.fontSize)/2,f.x=y.x+h,f.y=y.y-parseInt(e[s].style.fontSize)/2)}var S=this._map.layerPointToLatLng(y),P=SuperMap.Util.copyAttributes(l,this.symbolTexts[s].style);if(this.addFrame){var m=this._map.layerPointToLatLng(d),b=this._map.layerPointToLatLng(f),M={};M.positionPoints=[m,b],M.style=SuperMap.Util.cloneObject(P),M.type=SuperMap.Plot.SymbolType.RECTANGLESYMBOL,t.push(M);var v=null;v=1===i.symbolType?i.latLngs[0]:r.getCenter();var _={};_.positionPoints=[S,v],_.style=SuperMap.Util.cloneObject(P),_.type=SuperMap.Plot.SymbolType.POLYLINESYMBOL,t.push(_),g=L.latLng((b.lat-m.lat)/2+m.lat,(m.lng-b.lng)/2+b.lng)}else g=S;var T={};T.positionPoints=g,T.type=SuperMap.Plot.SymbolType.TEXTSYMBOL,T.style=SuperMap.Util.cloneObject(P),T.textContent=e[s].textContent,this.addFrame&&(T.style.labelAlign="cm"),t.push(T),this.latLngs.push(S)}}}for(var x,s=0;s<t.length;s++)x=L.Util.isArray(t[s].positionPoints)?t[s].positionPoints:[t[s].positionPoints],this._createAndDrawLayer(t[s].type,x,t[s].style,t[s].textContent)},destroy:function(){this.frame=!1,this.symbolTexts=null,o.GraphicObject.prototype.destroy.call(this)},_mergeStyleToSymbolText:function(t){if(null!==this.components){null!==t.style&&void 0!==t.style||(t.style={});for(var e in this.style)t.style.hasOwnProperty(e)||(t.style[e]=this.style[e])}},_calculateSize:function(t){this.scaleByMap=t.scaleByMap,!1===this.scaleByMap?this.fromZoom=this._map.getZoom():this.fromZoom<=this._map.getZoom()&&(this.dScale=t.dScale)},_modifyPoint:function(t,e){this._calculateOffset(t,e),this.redraw()},_calculateOffset:function(t,e){if(t<this.symbolTexts.length){var i=this.symbolTexts[t].textPosition,o=this._map.latLngToLayerPoint(e),n=this.layer.getFeatureByUuid(this.associatedUuid);if(null===n||void 0===n)return;var s,a,l=n.getBounds();0===i?(s=L.latLng(l.getNorth(),l.getWest()),a=this._map.latLngToLayerPoint(s),this.symbolTexts[t].offsetX=a.x-o.x,this.symbolTexts[t].offsetY=a.y-o.y):1===i?(s=L.latLng(l.getSouth(),l.getWest()),a=this._map.latLngToLayerPoint(s),this.symbolTexts[t].offsetX=a.x-o.x,this.symbolTexts[t].offsetY=o.y-a.y):2===i?(s=L.latLng(l.getNorth(),l.getEast()),a=this._map.latLngToLayerPoint(s),this.symbolTexts[t].offsetX=o.x-a.x,this.symbolTexts[t].offsetY=a.y-o.y):3===i?(s=L.latLng(l.getSouth(),l.getEast()),a=this._map.latLngToLayerPoint(s),this.symbolTexts[t].offsetX=o.x-a.x,this.symbolTexts[t].offsetY=o.y-a.y):4===i?(s=L.latLng(l.getNorth(),(l.getWest()+l.getEast())/2),a=this._map.latLngToLayerPoint(s),this.symbolTexts[t].offsetX=o.x-a.x,this.symbolTexts[t].offsetY=a.y-o.y):5===i?(s=L.latLng(l.getSouth(),(l.getWest()+l.getEast())/2),a=this._map.latLngToLayerPoint(s),this.symbolTexts[t].offsetX=o.x-a.x,this.symbolTexts[t].offsetY=o.y-a.y):6===i?(s=L.latLng((l.getNorth()+l.getSouth())/2,l.getWest()),a=this._map.latLngToLayerPoint(s),this.symbolTexts[t].offsetX=a.x-o.x,this.symbolTexts[t].offsetY=o.y-a.y):7===i&&(s=L.latLng((l.getNorth()+l.getSouth())/2,l.getEast()),a=this._map.latLngToLayerPoint(s),this.symbolTexts[t].offsetX=o.x-a.x,this.symbolTexts[t].offsetY=o.y-a.y)}},_reView:function(){this.fire(SuperMap.Plot.Event.reseteditmarkersvalues)},move:function(){},_parseSymbolData:function(){if(o.GraphicObject.prototype._parseSymbolData.call(this),this.symbolData){this.addFrame=this.symbolData.addFrame,this.symbolTexts=[];for(var t=0,e=this.symbolData.symbolTexts.length;t<e;t++){var i=new SuperMap.Plot.SymbolText;i.textContent=this.symbolData.symbolTexts[t].textContent,i.textPosition=this.symbolData.symbolTexts[t].textPosition,i.style=this.symbolData.symbolTexts[t].style,i.offsetX=this.symbolData.symbolTexts[t].offsetX,i.offsetY=this.symbolData.symbolTexts[t].offsetY,this.symbolTexts.push(i)}}},_setSymbolData:function(){o.GraphicObject.prototype._setSymbolData.call(this),this.symbolData&&(this.symbolData.symbolTexts=this.symbolTexts,this.symbolData.addFrame=this.addFrame)},setStyle:function(t){if(t.fontSize&&this.style.fontSize!==t.fontSize){SuperMap.Util.extend(this.style,t);for(var e=0,i=this.symbolTexts.length;e<i;e++)SuperMap.Util.copyAttributes(this.symbolTexts[e].style,t);this.redraw()}else{SuperMap.Util.extend(this.style,t);for(var o=0;o<this.symbolTexts.length;o++)SuperMap.Util.copyAttributes(this.symbolTexts[o].style,t);for(var n in this.components)delete t.labelAlign,SuperMap.Util.copyAttributes(this.components[n].options,t),this._copyStyleForCell(this.components[n].options,this.style,this.components[n]),this.components[n].setStyle(this.components[n].options)}}}),s=e.symbolText=function(t,e,i,o){return new n(t,e,i,o)};L.supermap.plotting.symbolText=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.symbolText1=e.SymbolText1=void 0;var o=i(2),n=e.SymbolText1=o.GraphicObject.extend({space:null,offsetX:null,offsetY:null,initialize:function(t,e,i,n){this.minEditPts=1,this.maxEditPts=1,this.libID=0,this.code=SuperMap.Plot.SymbolType.SYMBOLTEXT1,this.symbolType=SuperMap.Plot.SymbolType.SYMBOLTEXT1,this.symbolName="对象标注(带指示线)",null===this.space&&(this.space=10),null===this.offsetX&&(this.offsetX=60),null===this.offsetY&&(this.offsetY=30),o.GraphicObject.prototype.initialize.call(this,t,e,i,n)},destroy:function(){this.space=null,this.offsetX=null,this.offsetY=null,o.GraphicObject.prototype.destroy.call(this)},removeSymbolTextsFromDotSymbol:function(t){if(t&&"string"==typeof t){var e=this.layer.getFeatureByUuid(t);if(e)for(var i=0,o=e.geoSymbolTexts.length;i<o;i++)if(this===e.geoSymbolTexts[i]){e.geoSymbolTexts.splice(i,1);break}}},_calculateParts:function(){this.latLngs=[];var t=[],e=this.layer.getFeatureByUuid(this.associatedUuid);if(null!==e){for(var i=!1,o=0;o<e.geoSymbolTexts.length;o++)if(this===e.geoSymbolTexts[o]){i=!0;break}i||e.geoSymbolTexts.push(this),this._calculateSize(e);var n=e.latLngs[0],s=this._map.latLngToLayerPoint(n),a=new SuperMap.Pixel(s.x+this.offsetX,s.y+this.offsetY),l=this._map.layerPointToLatLng(a);0===this.latLngs.length?this.latLngs.push(l):(this.latLngs[0].lng=l.lng,this.latLngs[0].lat=l.lat);var r=L.Util.cloneLatLngs(this.latLngs[0]);r.push(n);var u={};u.style={surroundLineFlag:!1},u.style=SuperMap.Util.copyAttributes(u.style,this.style),u.positionPoints=r,u.type=24,t.push(u),SuperMap.Util.isArray(this.textContent)||(this.textContent=[this.textContent]);var p=this.textContent.length,h=this.style.fontSize*p+p+1,c=this._map.latLngToLayerPoint(L.latLng(this.latLngs[0].lat,this.latLngs[0].lng)),y=L.point(c.x,c.y-h/2),g=L.point(c.x,c.y+h/2),d=[this._map.layerPointToLatLng(y),this._map.layerPointToLatLng(g)],f={};f.positionPoints=d,f.style={surroundLineFlag:!1},f.style=SuperMap.Util.copyAttributes(f.style,this.style),f.type=24,t.push(f);var S=new SuperMap.Geometry.Point(this.latLngs[0].lng,this.latLngs[0].lat);if(0!==this.textContent.length){for(var P=e.getBounds(),m=new SuperMap.Geometry.Point((P.getWest()+P.getEast())/2,P.getNorth()),b=new SuperMap.Geometry.Point((P.getWest()+P.getEast())/2,P.getSouth()),M=SuperMap.Plot.PlottingUtil.pointIsRightToLine(m,b,S),v="",o=0;o<this.textContent.length;o++)v+=this.textContent[o],o!==this.textContent.length-1&&(v+="\r\n");var _=null;_=!0===M?L.point(c.x-this.space,c.y):L.point(c.x+this.space,c.y);var T={},x=this._map.layerPointToLatLng(_);T.positionPoints=x,T.type=34,T.textContent=v,T.style={},T.style=SuperMap.Util.copyAttributes(T.style,this.style),T.style.labelAlign=!0===M?"rm":"lm",t.push(T)}for(var O,o=0;o<t.length;o++)O=L.Util.isArray(t[o].positionPoints)?t[o].positionPoints:[t[o].positionPoints],this._createAndDrawLayer(t[o].type,O,t[o].style,t[o].textContent)}},_calculateSize:function(t){this.scaleByMap=t.scaleByMap,!1===this.scaleByMap?this.fromZoom=this._map.getZoom():this.fromZoom<=this._map.getZoom()&&(this.dScale=t.dScale),void 0!==this.prevOffsetX&&this.prevOffsetX!==this.offsetX&&(this.scaleBeforeOffsetX=this.offsetX/this.dScale,this.prevOffsetX=this.offsetX),!0===this.scaleByMap&&(void 0===this.scaleBeforeOffsetX&&(this.scaleBeforeOffsetX=this.offsetX),this.offsetX=this.scaleBeforeOffsetX*this.dScale,this.prevOffsetX=this.offsetX),void 0!==this.prevOffsetY&&this.prevOffsetY!==this.offsetY&&(this.scaleBeforeOffsetY=this.offsetY/this.dScale,this.prevOffsetY=this.offsetY),!0===this.scaleByMap&&(void 0===this.scaleBeforeOffsetY&&(this.scaleBeforeOffsetY=this.offsetY),this.offsetY=this.scaleBeforeOffsetY*this.dScale,this.prevOffsetY=this.offsetY),void 0!==this.prevStrokeWidth&&this.prevStrokeWidth!==this.style.weight&&(this.strokeWidth=this.style.weight,this.prevStrokeWidth=this.style.weight),!0===this.scaleByMap&&(void 0===this.weight&&(this.weight=this.style.weight),this.fromZoom<=this.map.getZoom()?this.style.weight=this.style.strokeWidth:this.style.weight=this.weight,this.prevStrokeWidth=this.style.weight),void 0!==this.prevFontSize&&this.prevFontSize!==this.style.fontSize&&(this.fontSize=this.style.fontSize/this.dScale,this.prevFontSize=this.style.fontSize),!0===this.scaleByMap&&(void 0===this.fontSize&&(this.fontSize=this.style.fontSize),this.style.fontSize=this.fontSize*this.dScale,this.prevFontSize=this.style.fontSize)},_reView:function(){this.fire(SuperMap.Plot.Event.reseteditmarkersvalues)},_modifyPoint:function(t,e){var i=this.layer.getFeatureByUuid(this.associatedUuid);if(null!==i){var o=this._map.latLngToLayerPoint(L.latLng(i.latLngs[0].lat,i.latLngs[0].lng)),n=this._map.latLngToLayerPoint(L.latLng(this.latLngs[0].lat,this.latLngs[0].lng));this.offsetX=n.x-o.x,this.offsetY=n.y-o.y,this.redraw()}},_parseSymbolData:function(){o.GraphicObject.prototype._parseSymbolData.call(this),this.symbolData&&(void 0!==this.symbolData.space&&(this.space=this.symbolData.space),void 0!==this.symbolData.offsetX&&(this.offsetX=this.symbolData.offsetX),void 0!==this.symbolData.offsetY&&(this.offsetY=this.symbolData.offsetY),void 0!==this.symbolData.scaleBeforeOffsetX&&(this.scaleBeforeOffsetX=this.symbolData.scaleBeforeOffsetX),void 0!==this.symbolData.scaleBeforeOffsetY&&(this.scaleBeforeOffsetY=this.symbolData.scaleBeforeOffsetY))},_setSymbolData:function(){o.GraphicObject.prototype._setSymbolData.call(this),this.symbolData&&(this.symbolData.space=this.space,this.symbolData.offsetX=this.offsetX,this.symbolData.offsetY=this.offsetY,void 0!==this.scaleBeforeOffsetX&&(this.symbolData.scaleBeforeOffsetX=this.scaleBeforeOffsetX),void 0!==this.scaleBeforeOffsetY&&(this.symbolData.scaleBeforeOffsetY=this.scaleBeforeOffsetY))}}),s=e.symbolText1=function(t,e,i,o){return new n(t,e,i,o)};L.supermap.plotting.symbolText1=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=e.EditMarker=L.Marker.extend({options:{nHandle:0,tag:0}});L.supermap.plotting.editMarker=function(t,e){return new o(t,e)}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.dotSymbolStyle=e.DotSymbolStyle=void 0;var o=i(8),n=i(39),s=e.DotSymbolStyle=L.Class.extend({feature:null,options:{extent:0},initialize:function(t,e){this.feature=t,e=e||{},L.Util.setOptions(this,e),this.canvasEle=document.createElement("canvas"),this.canvasEle.width=0,this.canvasEle.height=0,this._ctx=this.canvasEle.getContext("2d")},render:function(){this._computeImageSize(),this.canvasEle.width=this.size[0],this.canvasEle.height=this.size[1],this._ctx.clearRect(0,0,this.canvasEle.width,this.canvasEle.height),this.canvas=this._ctx.canvas,this._drawFeatures()},getCacheInfo:function(){return{canvas:this.canvas,anchor:this.anchor,size:this.size}},_computeImageSize:function(){var t=this.feature.getBoundsWithText(),e=new L.Bounds;e.extend(this.feature._map.latLngToLayerPoint(t.getNorthEast())),e.extend(this.feature._map.latLngToLayerPoint(t.getNorthWest())),e.extend(this.feature._map.latLngToLayerPoint(t.getSouthEast())),e.extend(this.feature._map.latLngToLayerPoint(t.getSouthWest())),this.leftTopPixel=L.point(e.min.x,e.min.y);var i=e.getSize(),o=this.feature.style.weight;i.x+=o+this.options.extent,i.y+=o+this.options.extent,this.anchor=this._latlngToLayerPoint(this.feature.getLatLngs())[0],this.size=[i.x,i.y]},_latlngToLayerPoint:function(t){for(var e=[],i=0;i<t.length;i++){var o=this.feature._map.latLngToLayerPoint(t[i]);o.x=o.x-this.leftTopPixel.x+(this.feature.style.weight+this.options.extent)/2,o.y=o.y-this.leftTopPixel.y+(this.feature.style.weight+this.options.extent)/2,e.push(o)}return e},_drawFeatures:function(){this._ctx.translate(0,0);for(var t in this.feature.components){var e=this.feature.components[t];n.PointImage&&e instanceof n.PointImage?this._drawImage(e):o.Text&&e instanceof o.Text?this._drawText(e):L.Rectangle&&e instanceof L.Rectangle?this._drawRectangle(e):L.Polygon&&e instanceof L.Polygon?this._drawPolygon(e):L.Polyline&&e instanceof L.Polyline&&this._drawPolyline(e)}},_drawPolyline:function(t){var e=this._latlngToLayerPoint(t.getLatLngs()),i=t.options;this._ctx.beginPath(),this._ctx.globalAlpha=i.opacity;var o=this._addDashArray(t);0!==o.length&&this._ctx.setLineDash(o),this._ctx.moveTo(e[0].x,e[0].y);for(var n=1,s=e.length;n<s;n++)this._ctx.lineTo(e[n].x,e[n].y);i.fill&&(this._ctx.globalCompositeOperation=!0===Boolean(this.feature.surroundLineType)?"destination-over":"source-over"),this._ctx.globalAlpha=i.opacity,this._ctx.strokeStyle=i.color,this._ctx.lineWidth=i.weight,this._ctx.stroke()},_drawRectangle:function(t){var e=this._latlngToLayerPoint(t.getLatLngs()[0]),i=t.options;this._ctx.beginPath(),this._ctx.globalAlpha=!0===i.fill?i.fillOpacity:i.opacity;var o=this._addDashArray(t);0!==o.length&&this._ctx.setLineDash(o),i.fill&&(this._ctx.globalCompositeOperation=!0===Boolean(this.feature.surroundLineType)?"destination-over":"source-over",this._ctx.fillStyle=SuperMap.PlotUtil.colorRGBA(this.feature.style.fillColor,this.feature.style.fillOpacity),this._ctx.fill()),this._ctx.strokeStyle=i.color,this._ctx.lineWidth=i.weight,this._ctx.strokeRect(e[0].x,e[0].y,e[1].x-e[0].x,e[1].y-e[0].y)},_drawPolygon:function(t){var e=this._latlngToLayerPoint(t.getLatLngs()[0]),i=t.options;this._ctx.beginPath(),this._ctx.globalAlpha=!0===i.fill?i.fillOpacity:i.opacity,this._ctx.setLineDash(this._addDashArray(t)),this._ctx.moveTo(e[0].x,e[0].y);for(var o=1,n=e.length;o<n;o++){var s=e[o].x,a=e[o].y;this._ctx.lineTo(s,a)}this._ctx.closePath(),i.fill&&(this._ctx.globalCompositeOperation=!0===Boolean(this.feature.surroundLineType)?"destination-over":"source-over",i.fillLimit?this._ctx.fillStyle=SuperMap.PlotUtil.colorRGBA(i.color,i.opacity):this._ctx.fillStyle=i.fillColor,this._ctx.fill(i.fillRule||"evenodd")),this._ctx.strokeStyle=i.color,this._ctx.lineWidth=i.weight,this._ctx.stroke()},_drawText:function(t){var e=this._latlngToLayerPoint(t.getLatLngs())[0],i=t.options,o=(i=SuperMap.Util.extend({fontColor:"#000000",labelAlign:"cm"},i)).fontSize.toLocaleString()+"px",n=[i.fontStyle?i.fontStyle:"normal","normal",i.fontWeight?i.fontWeight:"normal",i.fontSize?o:"1em",i.fontFamily?i.fontFamily:"sans-serif"].join(" ");this._ctx.globalAlpha=i.fontOpacity,this._ctx.fillStyle=SuperMap.PlotUtil.colorRGBA(i.fontColor,i.fontOpacity),this._ctx.font=n,this._ctx.fillText&&(this._ctx.textAlign=L.Canvas.LABEL_ALIGN[i.labelAlign[0]]||"center"),this._ctx.textBaseline=L.Canvas.LABEL_ALIGN[i.labelAlign[1]]||"middle",this._ctx.fillText(i.text,e.x,e.y)},_drawImage:function(t){var e=this,i=function(){var t=this.style,i=t.graphicWidth||t.graphicHeight,o=t.graphicHeight||t.graphicWidth;i=i||2*t.pointRadius,o=o||2*t.pointRadius;var n=void 0!==t.graphicXOffset?t.graphicXOffset:-.5*i,s=void 0!==t.graphicYOffset?t.graphicYOffset:-.5*o,a=t.graphicOpacity||t.fillOpacity,l=this.point,r=l.x,u=l.y;if(!isNaN(r)&&!isNaN(u)){e._ctx.save();var p;t.rotation&&(p=t.rotation/180*Math.PI),e._ctx.translate(r,u),p&&e._ctx.rotate(p),e._ctx.translate(n,s),e._ctx.globalAlpha=a;var h=L.Canvas.drawImageScaleFactor||(L.Canvas.drawImageScaleFactor=/android 2.1/.test(navigator.userAgent.toLowerCase())?320/window.screen.width:1);e._ctx.drawImage(this.img,0,0,i*h,o*h),e._ctx.restore()}},o=this._latlngToLayerPoint(t.getLatLngs())[0],n=t.options,s=new Image;s.src=n.externalGraphic,n.graphicTitle&&(s.title=n.graphicTitle),s.onload=function(){i.call({point:o,style:n,img:s}),s.onload=null},window.ActiveXObject||"ActiveXObject"in window?s.onload():s.complete&&s.onload()},_addDashArray:function(t){if(null===t||null===t.options.dashArray||void 0===t.options.dashArray||0===t.options.dashArray.length)return[0,0];var e=[];return t.options.dashArray.split(",").map(function(t,i,o){e.push(parseFloat(o[i]))}),e}}),a=e.dotSymbolStyle=function(t){return new s(t)};L.supermap.plotting.dotSymbolStyle=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.PlottingGraphic=L.Class.extend({options:{graphicWidth:0,graphicHeight:0},initialize:function(t){t=t||{},this._latlng=t._latlng,this._image=t._image,this._uuid=t._uuid},setLatLng:function(t){this._latlng=t},setImage:function(t){this._image=t},setUuid:function(t){this._uuid=t},getLatLng:function(){return this._latlng},getImage:function(){return this._image},getUuid:function(){return this._uuid},updateImage:function(){this.layer.updateGraphics(this)}})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.animationLayer=e.AnimationLayer=void 0;var o=i(10),n=e.AnimationLayer=o.PlottingLayerBase.extend({addFeatures:function(t){SuperMap.Util.isArray(t)||(t=[t]),o.PlottingLayerBase.prototype.addFeatures.call(this,t)}}),s=e.animationLayer=function(t,e){return new n(t,e)};L.supermap.plotting.animationLayer=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.GraphicEditLayer=void 0;var o=i(9);e.GraphicEditLayer=o.PlottingLayer.extend({})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.goAnimationManager=e.GOAnimationManager=void 0;var o=i(111),n=i(112),s=i(113),a=i(114),l=i(115),r=i(116),u=i(117),p=i(1),h=(i(5),e.GOAnimationManager=L.Evented.extend({serverUrl:null,goAnimations:null,map:null,goAnimationLayer:null,initialize:function(t,e){null===this.goAnimations&&(this.goAnimations=[]),t&&null!==t&&null===this.map&&this.setMap(t),e&&null===this.serverUrl&&(h.prototype.serverUrl=e)},destroy:function(){h.prototype.goAnimations=null,h.prototype.map.removeLayer(this.goAnimationLayer),this.goAnimationLayer.destroy(),h.prototype.goAnimationLayer=null,h.prototype.map=null,h.prototype.serverUrl=null},setMap:function(t){if(null===t)return!1;h.prototype.map=t;var e={displayInLayerSwitcher:!1};null===this.goAnimationLayer&&(h.prototype.goAnimationLayer=L.supermap.plotting.animationLayer("animation",e)),this.map.addLayer(this.goAnimationLayer)},createGOAnimation:function(t,e,i){var o=this.createGOAnimationByType(t,e);if(null===o)return null;var n;if(i._eventParents)for(var s in i._eventParents)n=i._eventParents[s];return i instanceof L.supermap.plotting.Route||n instanceof L.supermap.plotting.Route?null:o.setGOFeature(i)?(this.goAnimations.push(o),o):null},findGOAnimationByName:function(t){if(null===this.goAnimations||null===t||""===t)return null;for(var e=null,i=0;i<this.goAnimations.length;i++)if(this.goAnimations[i].name===t){e=this.goAnimations[i];break}return e},findGOAnimationsByFeature:function(t){var e=[];if(null===this.goAnimations||"undefined"===t||null===t)return e;for(var i=0;i<this.goAnimations.length;i++)this.goAnimations[i].getGOFeature()===t&&e.push(this.goAnimations[i]);return e},findGOAnimationsByUuid:function(t){var e=[];if(null===this.goAnimations||"undefined"===t||null===t)return e;var i=this.map.getFeatureByUuid(t);return this.findGOAnimationsByFeature(i)},removeGOAnimationByName:function(t){if(null===this.goAnimations||null===t||""===t)return!1;var e=this.findGOAnimationByName(t);return this.removeGOAnimation(e)},removeGOAnimation:function(t){if(null===this.goAnimations||null===t)return!1;for(var e=0;e<this.goAnimations.length;e++)if(this.goAnimations[e]===t){t.reset(),this.goAnimations.splice(e,1),t.destroy();break}return!0},removeAllGOAnimation:function(){if(null!==this.goAnimations){for(var t=0;t<this.goAnimations.length;t++)this.removeGOAnimation(this.goAnimations[t]);this.goAnimations=[]}},execute:function(){if(0===this.goAnimations.length)return!1;for(t=0;t<this.goAnimations.length;t++)this.goAnimations[t].execute();if(this.hasGrowAnimation())for(var t=0;t<this.goAnimations.length;t++)this.redrawFeature(this.goAnimations[t].animationGOFeature);return 0!==this.goAnimations.length||void 0},hasGrowAnimation:function(){if(null===this.goAnimations)return!1;for(var t=0;t<this.goAnimations.length;t++)if(!0===this.goAnimations[t].animationGOFeature.grow&&this.goAnimations[t].canExecute())return!0},redrawFeature:function(t){if(!(t.grow&&t instanceof p.AlgoSymbol))return!0;var e=new SuperMap.GetSymbolInfoParameters;e.libID=t.libID,e.code=t.code,e.surroundLineType=t.surroundLineType,e.inputPoints=L.Util.latLngsToSuperMapPoints(t.getLatLngs()),e.subSymbols=t.subSymbols,e.scaleValues=t.scaleValues,L.supermap.symbolInfoService(t.serverUrl).getSymbolInfo(e,function(e){t.symbolData.innerCells=e.result.innerCells,t.redraw()},this)},play:function(){if(0!==this.goAnimations.length)for(var t=0;t<this.goAnimations.length;t++)this.goAnimations[t].play()},stop:function(){if(0!==this.goAnimations.length)for(var t=0;t<this.goAnimations.length;t++)this.goAnimations[t].stop()},pause:function(){if(0!==this.goAnimations.length)for(var t=0;t<this.goAnimations.length;t++)this.goAnimations[t].pause()},reset:function(){if(0!==this.goAnimations.length)for(var t=0;t<this.goAnimations.length;t++)this.goAnimations[t].reset()},createGOAnimationByType:function(t,e){if(null===e||""===e||null===this.goAnimationLayer)return null;if(null!==this.findGOAnimationByName(e))return null;var i=null;switch(t){case SuperMap.Plot.GOAnimationType.ANIMATION_WAY:i=new u.GOAnimationWay;break;case SuperMap.Plot.GOAnimationType.ANIMATION_BLINK:i=new n.GOAnimationBlink;break;case SuperMap.Plot.GOAnimationType.ANIMATION_ATTRIBUTE:i=new o.GOAnimationAttribute;break;case SuperMap.Plot.GOAnimationType.ANIMATION_SHOW:i=new r.GOAnimationShow;break;case SuperMap.Plot.GOAnimationType.ANIMATION_ROTATE:i=new a.GOAnimationRotate;break;case SuperMap.Plot.GOAnimationType.ANIMATION_SCALE:i=new l.GOAnimationScale;break;case SuperMap.Plot.GOAnimationType.ANIMATION_GROW:i=new s.GOAnimationGrow;break;default:return null}return null!==i&&(i.name=e),i},getJSONData:function(){var t={};t.animations=[];for(var e=0;e<this.goAnimations.length;e++)t.animations.push(this.goAnimations[e].getJSONData());return t},fromJSONData:function(t){for(var e=0;e<t.animations.length;e++){var i=t.animations[e],o=i.goFeatureUuid,n=this.map.getFeatureByUuid(o),s=i.name,a=i.type;if(n&&s&&-1!==a){var l=this.createGOAnimation(a,s,n);null!==l&&l.fromJSONData(i)}}},saveEvoFile:function(t,e){},openEvoFileOnServer:function(t){}})),c=e.goAnimationManager=function(t,e,i){return new h(t,e,i)};L.supermap.plotting.goAnimationManager=c},function(t,e,i){i(11),i(45),i(43),i(47),i(44),i(42),i(46),i(40),i(49),i(48),i(12),i(23),i(50),i(51),i(41),i(22),i(21),i(20),i(64),i(59),i(60),i(26),i(27),i(25),i(52),i(24),i(53),i(54),i(55),i(62),i(63),i(61),i(56),i(58),i(9),t.exports=i(57)}]);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*!
 * 
 *     iclient9-plot-wjalgosymbol.(http://iclient.supermapol.com)
 *     Copyright© 2000-2017 SuperMap Software Co. Ltd
 *     license: undefined
 *     version: v9.1.0
 * 
 */

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (module, exports) {
	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
		return typeof obj;
	} : function (obj) {
		return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};

	/* @preserve
  * Leaflet 1.2.0+Detached: 1ac320ba232cb85b73ac81f3d82780c9d07f0d4e.1ac320b, a JS library for interactive maps. http://leafletjs.com
  * (c) 2010-2017 Vladimir Agafonkin, (c) 2010-2011 CloudMade
  */
	(function (global, factory) {
		( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.L = {});
	})(undefined, function (exports) {
		'use strict';

		var version = "1.2.0+HEAD.1ac320b";

		/*
   * @namespace Util
   *
   * Various utility functions, used by Leaflet internally.
   */

		var freeze = Object.freeze;
		Object.freeze = function (obj) {
			return obj;
		};

		// @function extend(dest: Object, src?: Object): Object
		// Merges the properties of the `src` object (or multiple objects) into `dest` object and returns the latter. Has an `L.extend` shortcut.
		function extend(dest) {
			var i, j, len, src;

			for (j = 1, len = arguments.length; j < len; j++) {
				src = arguments[j];
				for (i in src) {
					dest[i] = src[i];
				}
			}
			return dest;
		}

		// @function create(proto: Object, properties?: Object): Object
		// Compatibility polyfill for [Object.create](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
		var create = Object.create || function () {
			function F() {}
			return function (proto) {
				F.prototype = proto;
				return new F();
			};
		}();

		// @function bind(fn: Function, …): Function
		// Returns a new function bound to the arguments passed, like [Function.prototype.bind](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
		// Has a `L.bind()` shortcut.
		function bind(fn, obj) {
			var slice = Array.prototype.slice;

			if (fn.bind) {
				return fn.bind.apply(fn, slice.call(arguments, 1));
			}

			var args = slice.call(arguments, 2);

			return function () {
				return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
			};
		}

		// @property lastId: Number
		// Last unique ID used by [`stamp()`](#util-stamp)
		var lastId = 0;

		// @function stamp(obj: Object): Number
		// Returns the unique ID of an object, assiging it one if it doesn't have it.
		function stamp(obj) {
			/*eslint-disable */
			obj._leaflet_id = obj._leaflet_id || ++lastId;
			return obj._leaflet_id;
			/*eslint-enable */
		}

		// @function throttle(fn: Function, time: Number, context: Object): Function
		// Returns a function which executes function `fn` with the given scope `context`
		// (so that the `this` keyword refers to `context` inside `fn`'s code). The function
		// `fn` will be called no more than one time per given amount of `time`. The arguments
		// received by the bound function will be any arguments passed when binding the
		// function, followed by any arguments passed when invoking the bound function.
		// Has an `L.throttle` shortcut.
		function throttle(fn, time, context) {
			var lock, args, wrapperFn, later;

			later = function later() {
				// reset lock and call if queued
				lock = false;
				if (args) {
					wrapperFn.apply(context, args);
					args = false;
				}
			};

			wrapperFn = function wrapperFn() {
				if (lock) {
					// called too soon, queue to call later
					args = arguments;
				} else {
					// call and lock until later
					fn.apply(context, arguments);
					setTimeout(later, time);
					lock = true;
				}
			};

			return wrapperFn;
		}

		// @function wrapNum(num: Number, range: Number[], includeMax?: Boolean): Number
		// Returns the number `num` modulo `range` in such a way so it lies within
		// `range[0]` and `range[1]`. The returned value will be always smaller than
		// `range[1]` unless `includeMax` is set to `true`.
		function wrapNum(x, range, includeMax) {
			var max = range[1],
			    min = range[0],
			    d = max - min;
			return x === max && includeMax ? x : ((x - min) % d + d) % d + min;
		}

		// @function falseFn(): Function
		// Returns a function which always returns `false`.
		function falseFn() {
			return false;
		}

		// @function formatNum(num: Number, digits?: Number): Number
		// Returns the number `num` rounded to `digits` decimals, or to 5 decimals by default.
		function formatNum(num, digits) {
			var pow = Math.pow(10, digits || 5);
			return Math.round(num * pow) / pow;
		}

		// @function trim(str: String): String
		// Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
		function trim(str) {
			return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
		}

		// @function splitWords(str: String): String[]
		// Trims and splits the string on whitespace and returns the array of parts.
		function splitWords(str) {
			return trim(str).split(/\s+/);
		}

		// @function setOptions(obj: Object, options: Object): Object
		// Merges the given properties to the `options` of the `obj` object, returning the resulting options. See `Class options`. Has an `L.setOptions` shortcut.
		function setOptions(obj, options) {
			if (!obj.hasOwnProperty('options')) {
				obj.options = obj.options ? create(obj.options) : {};
			}
			for (var i in options) {
				obj.options[i] = options[i];
			}
			return obj.options;
		}

		// @function getParamString(obj: Object, existingUrl?: String, uppercase?: Boolean): String
		// Converts an object into a parameter URL string, e.g. `{a: "foo", b: "bar"}`
		// translates to `'?a=foo&b=bar'`. If `existingUrl` is set, the parameters will
		// be appended at the end. If `uppercase` is `true`, the parameter names will
		// be uppercased (e.g. `'?A=foo&B=bar'`)
		function getParamString(obj, existingUrl, uppercase) {
			var params = [];
			for (var i in obj) {
				params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + '=' + encodeURIComponent(obj[i]));
			}
			return (!existingUrl || existingUrl.indexOf('?') === -1 ? '?' : '&') + params.join('&');
		}

		var templateRe = /\{ *([\w_\-]+) *\}/g;

		// @function template(str: String, data: Object): String
		// Simple templating facility, accepts a template string of the form `'Hello {a}, {b}'`
		// and a data object like `{a: 'foo', b: 'bar'}`, returns evaluated string
		// `('Hello foo, bar')`. You can also specify functions instead of strings for
		// data values — they will be evaluated passing `data` as an argument.
		function template(str, data) {
			return str.replace(templateRe, function (str, key) {
				var value = data[key];

				if (value === undefined) {
					throw new Error('No value provided for variable ' + str);
				} else if (typeof value === 'function') {
					value = value(data);
				}
				return value;
			});
		}

		// @function isArray(obj): Boolean
		// Compatibility polyfill for [Array.isArray](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
		var isArray = Array.isArray || function (obj) {
			return Object.prototype.toString.call(obj) === '[object Array]';
		};

		// @function indexOf(array: Array, el: Object): Number
		// Compatibility polyfill for [Array.prototype.indexOf](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
		function indexOf(array, el) {
			for (var i = 0; i < array.length; i++) {
				if (array[i] === el) {
					return i;
				}
			}
			return -1;
		}

		// @property emptyImageUrl: String
		// Data URI string containing a base64-encoded empty GIF image.
		// Used as a hack to free memory from unused images on WebKit-powered
		// mobile devices (by setting image `src` to this string).
		var emptyImageUrl = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

		// inspired by http://paulirish.com/2011/requestanimationframe-for-smart-animating/

		function getPrefixed(name) {
			return window['webkit' + name] || window['moz' + name] || window['ms' + name];
		}

		var lastTime = 0;

		// fallback for IE 7-8
		function timeoutDefer(fn) {
			var time = +new Date(),
			    timeToCall = Math.max(0, 16 - (time - lastTime));

			lastTime = time + timeToCall;
			return window.setTimeout(fn, timeToCall);
		}

		var requestFn = window.requestAnimationFrame || getPrefixed('RequestAnimationFrame') || timeoutDefer;
		var cancelFn = window.cancelAnimationFrame || getPrefixed('CancelAnimationFrame') || getPrefixed('CancelRequestAnimationFrame') || function (id) {
			window.clearTimeout(id);
		};

		// @function requestAnimFrame(fn: Function, context?: Object, immediate?: Boolean): Number
		// Schedules `fn` to be executed when the browser repaints. `fn` is bound to
		// `context` if given. When `immediate` is set, `fn` is called immediately if
		// the browser doesn't have native support for
		// [`window.requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame),
		// otherwise it's delayed. Returns a request ID that can be used to cancel the request.
		function requestAnimFrame(fn, context, immediate) {
			if (immediate && requestFn === timeoutDefer) {
				fn.call(context);
			} else {
				return requestFn.call(window, bind(fn, context));
			}
		}

		// @function cancelAnimFrame(id: Number): undefined
		// Cancels a previous `requestAnimFrame`. See also [window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame).
		function cancelAnimFrame(id) {
			if (id) {
				cancelFn.call(window, id);
			}
		}

		var Util = (Object.freeze || Object)({
			freeze: freeze,
			extend: extend,
			create: create,
			bind: bind,
			lastId: lastId,
			stamp: stamp,
			throttle: throttle,
			wrapNum: wrapNum,
			falseFn: falseFn,
			formatNum: formatNum,
			trim: trim,
			splitWords: splitWords,
			setOptions: setOptions,
			getParamString: getParamString,
			template: template,
			isArray: isArray,
			indexOf: indexOf,
			emptyImageUrl: emptyImageUrl,
			requestFn: requestFn,
			cancelFn: cancelFn,
			requestAnimFrame: requestAnimFrame,
			cancelAnimFrame: cancelAnimFrame
		});

		// @class Class
		// @aka L.Class

		// @section
		// @uninheritable

		// Thanks to John Resig and Dean Edwards for inspiration!

		function Class() {}

		Class.extend = function (props) {

			// @function extend(props: Object): Function
			// [Extends the current class](#class-inheritance) given the properties to be included.
			// Returns a Javascript function that is a class constructor (to be called with `new`).
			var NewClass = function NewClass() {

				// call the constructor
				if (this.initialize) {
					this.initialize.apply(this, arguments);
				}

				// call all constructor hooks
				this.callInitHooks();
			};

			var parentProto = NewClass.__super__ = this.prototype;

			var proto = create(parentProto);
			proto.constructor = NewClass;

			NewClass.prototype = proto;

			// inherit parent's statics
			for (var i in this) {
				if (this.hasOwnProperty(i) && i !== 'prototype' && i !== '__super__') {
					NewClass[i] = this[i];
				}
			}

			// mix static properties into the class
			if (props.statics) {
				extend(NewClass, props.statics);
				delete props.statics;
			}

			// mix includes into the prototype
			if (props.includes) {
				checkDeprecatedMixinEvents(props.includes);
				extend.apply(null, [proto].concat(props.includes));
				delete props.includes;
			}

			// merge options
			if (proto.options) {
				props.options = extend(create(proto.options), props.options);
			}

			// mix given properties into the prototype
			extend(proto, props);

			proto._initHooks = [];

			// add method for calling all hooks
			proto.callInitHooks = function () {

				if (this._initHooksCalled) {
					return;
				}

				if (parentProto.callInitHooks) {
					parentProto.callInitHooks.call(this);
				}

				this._initHooksCalled = true;

				for (var i = 0, len = proto._initHooks.length; i < len; i++) {
					proto._initHooks[i].call(this);
				}
			};

			return NewClass;
		};

		// @function include(properties: Object): this
		// [Includes a mixin](#class-includes) into the current class.
		Class.include = function (props) {
			extend(this.prototype, props);
			return this;
		};

		// @function mergeOptions(options: Object): this
		// [Merges `options`](#class-options) into the defaults of the class.
		Class.mergeOptions = function (options) {
			extend(this.prototype.options, options);
			return this;
		};

		// @function addInitHook(fn: Function): this
		// Adds a [constructor hook](#class-constructor-hooks) to the class.
		Class.addInitHook = function (fn) {
			// (Function) || (String, args...)
			var args = Array.prototype.slice.call(arguments, 1);

			var init = typeof fn === 'function' ? fn : function () {
				this[fn].apply(this, args);
			};

			this.prototype._initHooks = this.prototype._initHooks || [];
			this.prototype._initHooks.push(init);
			return this;
		};

		function checkDeprecatedMixinEvents(includes) {
			if (!L || !L.Mixin) {
				return;
			}

			includes = isArray(includes) ? includes : [includes];

			for (var i = 0; i < includes.length; i++) {
				if (includes[i] === L.Mixin.Events) {
					console.warn('Deprecated include of L.Mixin.Events: ' + 'this property will be removed in future releases, ' + 'please inherit from L.Evented instead.', new Error().stack);
				}
			}
		}

		/*
   * @class Evented
   * @aka L.Evented
   * @inherits Class
   *
   * A set of methods shared between event-powered classes (like `Map` and `Marker`). Generally, events allow you to execute some function when something happens with an object (e.g. the user clicks on the map, causing the map to fire `'click'` event).
   *
   * @example
   *
   * ```js
   * map.on('click', function(e) {
   * 	alert(e.latlng);
   * } );
   * ```
   *
   * Leaflet deals with event listeners by reference, so if you want to add a listener and then remove it, define it as a function:
   *
   * ```js
   * function onClick(e) { ... }
   *
   * map.on('click', onClick);
   * map.off('click', onClick);
   * ```
   */

		var Events = {
			/* @method on(type: String, fn: Function, context?: Object): this
    * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
    *
    * @alternative
    * @method on(eventMap: Object): this
    * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
    */
			on: function on(types, fn, context) {

				// types can be a map of types/handlers
				if ((typeof types === 'undefined' ? 'undefined' : _typeof(types)) === 'object') {
					for (var type in types) {
						// we don't process space-separated events here for performance;
						// it's a hot path since Layer uses the on(obj) syntax
						this._on(type, types[type], fn);
					}
				} else {
					// types can be a string of space-separated words
					types = splitWords(types);

					for (var i = 0, len = types.length; i < len; i++) {
						this._on(types[i], fn, context);
					}
				}

				return this;
			},

			/* @method off(type: String, fn?: Function, context?: Object): this
    * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
    *
    * @alternative
    * @method off(eventMap: Object): this
    * Removes a set of type/listener pairs.
    *
    * @alternative
    * @method off: this
    * Removes all listeners to all events on the object.
    */
			off: function off(types, fn, context) {

				if (!types) {
					// clear all listeners if called without arguments
					delete this._events;
				} else if ((typeof types === 'undefined' ? 'undefined' : _typeof(types)) === 'object') {
					for (var type in types) {
						this._off(type, types[type], fn);
					}
				} else {
					types = splitWords(types);

					for (var i = 0, len = types.length; i < len; i++) {
						this._off(types[i], fn, context);
					}
				}

				return this;
			},

			// attach listener (without syntactic sugar now)
			_on: function _on(type, fn, context) {
				this._events = this._events || {};

				/* get/init listeners for type */
				var typeListeners = this._events[type];
				if (!typeListeners) {
					typeListeners = [];
					this._events[type] = typeListeners;
				}

				if (context === this) {
					// Less memory footprint.
					context = undefined;
				}
				var newListener = { fn: fn, ctx: context },
				    listeners = typeListeners;

				// check if fn already there
				for (var i = 0, len = listeners.length; i < len; i++) {
					if (listeners[i].fn === fn && listeners[i].ctx === context) {
						return;
					}
				}

				listeners.push(newListener);
			},

			_off: function _off(type, fn, context) {
				var listeners, i, len;

				if (!this._events) {
					return;
				}

				listeners = this._events[type];

				if (!listeners) {
					return;
				}

				if (!fn) {
					// Set all removed listeners to noop so they are not called if remove happens in fire
					for (i = 0, len = listeners.length; i < len; i++) {
						listeners[i].fn = falseFn;
					}
					// clear all listeners for a type if function isn't specified
					delete this._events[type];
					return;
				}

				if (context === this) {
					context = undefined;
				}

				if (listeners) {

					// find fn and remove it
					for (i = 0, len = listeners.length; i < len; i++) {
						var l = listeners[i];
						if (l.ctx !== context) {
							continue;
						}
						if (l.fn === fn) {

							// set the removed listener to noop so that's not called if remove happens in fire
							l.fn = falseFn;

							if (this._firingCount) {
								/* copy array in case events are being fired */
								this._events[type] = listeners = listeners.slice();
							}
							listeners.splice(i, 1);

							return;
						}
					}
				}
			},

			// @method fire(type: String, data?: Object, propagate?: Boolean): this
			// Fires an event of the specified type. You can optionally provide an data
			// object — the first argument of the listener function will contain its
			// properties. The event can optionally be propagated to event parents.
			fire: function fire(type, data, propagate) {
				if (!this.listens(type, propagate)) {
					return this;
				}

				var event = extend({}, data, { type: type, target: this });

				if (this._events) {
					var listeners = this._events[type];

					if (listeners) {
						this._firingCount = this._firingCount + 1 || 1;
						for (var i = 0, len = listeners.length; i < len; i++) {
							var l = listeners[i];
							l.fn.call(l.ctx || this, event);
						}

						this._firingCount--;
					}
				}

				if (propagate) {
					// propagate the event to parents (set with addEventParent)
					this._propagateEvent(event);
				}

				return this;
			},

			// @method listens(type: String): Boolean
			// Returns `true` if a particular event type has any listeners attached to it.
			listens: function listens(type, propagate) {
				var listeners = this._events && this._events[type];
				if (listeners && listeners.length) {
					return true;
				}

				if (propagate) {
					// also check parents for listeners if event propagates
					for (var id in this._eventParents) {
						if (this._eventParents[id].listens(type, propagate)) {
							return true;
						}
					}
				}
				return false;
			},

			// @method once(…): this
			// Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
			once: function once(types, fn, context) {

				if ((typeof types === 'undefined' ? 'undefined' : _typeof(types)) === 'object') {
					for (var type in types) {
						this.once(type, types[type], fn);
					}
					return this;
				}

				var handler = bind(function () {
					this.off(types, fn, context).off(types, handler, context);
				}, this);

				// add a listener that's executed once and removed after that
				return this.on(types, fn, context).on(types, handler, context);
			},

			// @method addEventParent(obj: Evented): this
			// Adds an event parent - an `Evented` that will receive propagated events
			addEventParent: function addEventParent(obj) {
				this._eventParents = this._eventParents || {};
				this._eventParents[stamp(obj)] = obj;
				return this;
			},

			// @method removeEventParent(obj: Evented): this
			// Removes an event parent, so it will stop receiving propagated events
			removeEventParent: function removeEventParent(obj) {
				if (this._eventParents) {
					delete this._eventParents[stamp(obj)];
				}
				return this;
			},

			_propagateEvent: function _propagateEvent(e) {
				for (var id in this._eventParents) {
					this._eventParents[id].fire(e.type, extend({ layer: e.target }, e), true);
				}
			}
		};

		// aliases; we should ditch those eventually

		// @method addEventListener(…): this
		// Alias to [`on(…)`](#evented-on)
		Events.addEventListener = Events.on;

		// @method removeEventListener(…): this
		// Alias to [`off(…)`](#evented-off)

		// @method clearAllEventListeners(…): this
		// Alias to [`off()`](#evented-off)
		Events.removeEventListener = Events.clearAllEventListeners = Events.off;

		// @method addOneTimeEventListener(…): this
		// Alias to [`once(…)`](#evented-once)
		Events.addOneTimeEventListener = Events.once;

		// @method fireEvent(…): this
		// Alias to [`fire(…)`](#evented-fire)
		Events.fireEvent = Events.fire;

		// @method hasEventListeners(…): Boolean
		// Alias to [`listens(…)`](#evented-listens)
		Events.hasEventListeners = Events.listens;

		var Evented = Class.extend(Events);

		/*
   * @class Point
   * @aka L.Point
   *
   * Represents a point with `x` and `y` coordinates in pixels.
   *
   * @example
   *
   * ```js
   * var point = L.point(200, 300);
   * ```
   *
   * All Leaflet methods and options that accept `Point` objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:
   *
   * ```js
   * map.panBy([200, 300]);
   * map.panBy(L.point(200, 300));
   * ```
   */

		function Point(x, y, round) {
			// @property x: Number; The `x` coordinate of the point
			this.x = round ? Math.round(x) : x;
			// @property y: Number; The `y` coordinate of the point
			this.y = round ? Math.round(y) : y;
		}

		Point.prototype = {

			// @method clone(): Point
			// Returns a copy of the current point.
			clone: function clone() {
				return new Point(this.x, this.y);
			},

			// @method add(otherPoint: Point): Point
			// Returns the result of addition of the current and the given points.
			add: function add(point) {
				// non-destructive, returns a new point
				return this.clone()._add(toPoint(point));
			},

			_add: function _add(point) {
				// destructive, used directly for performance in situations where it's safe to modify existing point
				this.x += point.x;
				this.y += point.y;
				return this;
			},

			// @method subtract(otherPoint: Point): Point
			// Returns the result of subtraction of the given point from the current.
			subtract: function subtract(point) {
				return this.clone()._subtract(toPoint(point));
			},

			_subtract: function _subtract(point) {
				this.x -= point.x;
				this.y -= point.y;
				return this;
			},

			// @method divideBy(num: Number): Point
			// Returns the result of division of the current point by the given number.
			divideBy: function divideBy(num) {
				return this.clone()._divideBy(num);
			},

			_divideBy: function _divideBy(num) {
				this.x /= num;
				this.y /= num;
				return this;
			},

			// @method multiplyBy(num: Number): Point
			// Returns the result of multiplication of the current point by the given number.
			multiplyBy: function multiplyBy(num) {
				return this.clone()._multiplyBy(num);
			},

			_multiplyBy: function _multiplyBy(num) {
				this.x *= num;
				this.y *= num;
				return this;
			},

			// @method scaleBy(scale: Point): Point
			// Multiply each coordinate of the current point by each coordinate of
			// `scale`. In linear algebra terms, multiply the point by the
			// [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
			// defined by `scale`.
			scaleBy: function scaleBy(point) {
				return new Point(this.x * point.x, this.y * point.y);
			},

			// @method unscaleBy(scale: Point): Point
			// Inverse of `scaleBy`. Divide each coordinate of the current point by
			// each coordinate of `scale`.
			unscaleBy: function unscaleBy(point) {
				return new Point(this.x / point.x, this.y / point.y);
			},

			// @method round(): Point
			// Returns a copy of the current point with rounded coordinates.
			round: function round() {
				return this.clone()._round();
			},

			_round: function _round() {
				this.x = Math.round(this.x);
				this.y = Math.round(this.y);
				return this;
			},

			// @method floor(): Point
			// Returns a copy of the current point with floored coordinates (rounded down).
			floor: function floor() {
				return this.clone()._floor();
			},

			_floor: function _floor() {
				this.x = Math.floor(this.x);
				this.y = Math.floor(this.y);
				return this;
			},

			// @method ceil(): Point
			// Returns a copy of the current point with ceiled coordinates (rounded up).
			ceil: function ceil() {
				return this.clone()._ceil();
			},

			_ceil: function _ceil() {
				this.x = Math.ceil(this.x);
				this.y = Math.ceil(this.y);
				return this;
			},

			// @method distanceTo(otherPoint: Point): Number
			// Returns the cartesian distance between the current and the given points.
			distanceTo: function distanceTo(point) {
				point = toPoint(point);

				var x = point.x - this.x,
				    y = point.y - this.y;

				return Math.sqrt(x * x + y * y);
			},

			// @method equals(otherPoint: Point): Boolean
			// Returns `true` if the given point has the same coordinates.
			equals: function equals(point) {
				point = toPoint(point);

				return point.x === this.x && point.y === this.y;
			},

			// @method contains(otherPoint: Point): Boolean
			// Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
			contains: function contains(point) {
				point = toPoint(point);

				return Math.abs(point.x) <= Math.abs(this.x) && Math.abs(point.y) <= Math.abs(this.y);
			},

			// @method toString(): String
			// Returns a string representation of the point for debugging purposes.
			toString: function toString() {
				return 'Point(' + formatNum(this.x) + ', ' + formatNum(this.y) + ')';
			}
		};

		// @factory L.point(x: Number, y: Number, round?: Boolean)
		// Creates a Point object with the given `x` and `y` coordinates. If optional `round` is set to true, rounds the `x` and `y` values.

		// @alternative
		// @factory L.point(coords: Number[])
		// Expects an array of the form `[x, y]` instead.

		// @alternative
		// @factory L.point(coords: Object)
		// Expects a plain object of the form `{x: Number, y: Number}` instead.
		function toPoint(x, y, round) {
			if (x instanceof Point) {
				return x;
			}
			if (isArray(x)) {
				return new Point(x[0], x[1]);
			}
			if (x === undefined || x === null) {
				return x;
			}
			if ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && 'x' in x && 'y' in x) {
				return new Point(x.x, x.y);
			}
			return new Point(x, y, round);
		}

		/*
   * @class Bounds
   * @aka L.Bounds
   *
   * Represents a rectangular area in pixel coordinates.
   *
   * @example
   *
   * ```js
   * var p1 = L.point(10, 10),
   * p2 = L.point(40, 60),
   * bounds = L.bounds(p1, p2);
   * ```
   *
   * All Leaflet methods that accept `Bounds` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * otherBounds.intersects([[10, 10], [40, 60]]);
   * ```
   */

		function Bounds(a, b) {
			if (!a) {
				return;
			}

			var points = b ? [a, b] : a;

			for (var i = 0, len = points.length; i < len; i++) {
				this.extend(points[i]);
			}
		}

		Bounds.prototype = {
			// @method extend(point: Point): this
			// Extends the bounds to contain the given point.
			extend: function extend(point) {
				// (Point)
				point = toPoint(point);

				// @property min: Point
				// The top left corner of the rectangle.
				// @property max: Point
				// The bottom right corner of the rectangle.
				if (!this.min && !this.max) {
					this.min = point.clone();
					this.max = point.clone();
				} else {
					this.min.x = Math.min(point.x, this.min.x);
					this.max.x = Math.max(point.x, this.max.x);
					this.min.y = Math.min(point.y, this.min.y);
					this.max.y = Math.max(point.y, this.max.y);
				}
				return this;
			},

			// @method getCenter(round?: Boolean): Point
			// Returns the center point of the bounds.
			getCenter: function getCenter(round) {
				return new Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, round);
			},

			// @method getBottomLeft(): Point
			// Returns the bottom-left point of the bounds.
			getBottomLeft: function getBottomLeft() {
				return new Point(this.min.x, this.max.y);
			},

			// @method getTopRight(): Point
			// Returns the top-right point of the bounds.
			getTopRight: function getTopRight() {
				// -> Point
				return new Point(this.max.x, this.min.y);
			},

			// @method getTopLeft(): Point
			// Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
			getTopLeft: function getTopLeft() {
				return this.min; // left, top
			},

			// @method getBottomRight(): Point
			// Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
			getBottomRight: function getBottomRight() {
				return this.max; // right, bottom
			},

			// @method getSize(): Point
			// Returns the size of the given bounds
			getSize: function getSize() {
				return this.max.subtract(this.min);
			},

			// @method contains(otherBounds: Bounds): Boolean
			// Returns `true` if the rectangle contains the given one.
			// @alternative
			// @method contains(point: Point): Boolean
			// Returns `true` if the rectangle contains the given point.
			contains: function contains(obj) {
				var min, max;

				if (typeof obj[0] === 'number' || obj instanceof Point) {
					obj = toPoint(obj);
				} else {
					obj = toBounds(obj);
				}

				if (obj instanceof Bounds) {
					min = obj.min;
					max = obj.max;
				} else {
					min = max = obj;
				}

				return min.x >= this.min.x && max.x <= this.max.x && min.y >= this.min.y && max.y <= this.max.y;
			},

			// @method intersects(otherBounds: Bounds): Boolean
			// Returns `true` if the rectangle intersects the given bounds. Two bounds
			// intersect if they have at least one point in common.
			intersects: function intersects(bounds) {
				// (Bounds) -> Boolean
				bounds = toBounds(bounds);

				var min = this.min,
				    max = this.max,
				    min2 = bounds.min,
				    max2 = bounds.max,
				    xIntersects = max2.x >= min.x && min2.x <= max.x,
				    yIntersects = max2.y >= min.y && min2.y <= max.y;

				return xIntersects && yIntersects;
			},

			// @method overlaps(otherBounds: Bounds): Boolean
			// Returns `true` if the rectangle overlaps the given bounds. Two bounds
			// overlap if their intersection is an area.
			overlaps: function overlaps(bounds) {
				// (Bounds) -> Boolean
				bounds = toBounds(bounds);

				var min = this.min,
				    max = this.max,
				    min2 = bounds.min,
				    max2 = bounds.max,
				    xOverlaps = max2.x > min.x && min2.x < max.x,
				    yOverlaps = max2.y > min.y && min2.y < max.y;

				return xOverlaps && yOverlaps;
			},

			isValid: function isValid() {
				return !!(this.min && this.max);
			}
		};

		// @factory L.bounds(corner1: Point, corner2: Point)
		// Creates a Bounds object from two corners coordinate pairs.
		// @alternative
		// @factory L.bounds(points: Point[])
		// Creates a Bounds object from the given array of points.
		function toBounds(a, b) {
			if (!a || a instanceof Bounds) {
				return a;
			}
			return new Bounds(a, b);
		}

		/*
   * @class LatLngBounds
   * @aka L.LatLngBounds
   *
   * Represents a rectangular geographical area on a map.
   *
   * @example
   *
   * ```js
   * var corner1 = L.latLng(40.712, -74.227),
   * corner2 = L.latLng(40.774, -74.125),
   * bounds = L.latLngBounds(corner1, corner2);
   * ```
   *
   * All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * map.fitBounds([
   * 	[40.712, -74.227],
   * 	[40.774, -74.125]
   * ]);
   * ```
   *
   * Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners _outside_ the [-180, 180] degrees longitude range.
   */

		function LatLngBounds(corner1, corner2) {
			// (LatLng, LatLng) or (LatLng[])
			if (!corner1) {
				return;
			}

			var latlngs = corner2 ? [corner1, corner2] : corner1;

			for (var i = 0, len = latlngs.length; i < len; i++) {
				this.extend(latlngs[i]);
			}
		}

		LatLngBounds.prototype = {

			// @method extend(latlng: LatLng): this
			// Extend the bounds to contain the given point

			// @alternative
			// @method extend(otherBounds: LatLngBounds): this
			// Extend the bounds to contain the given bounds
			extend: function extend(obj) {
				var sw = this._southWest,
				    ne = this._northEast,
				    sw2,
				    ne2;

				if (obj instanceof LatLng) {
					sw2 = obj;
					ne2 = obj;
				} else if (obj instanceof LatLngBounds) {
					sw2 = obj._southWest;
					ne2 = obj._northEast;

					if (!sw2 || !ne2) {
						return this;
					}
				} else {
					return obj ? this.extend(toLatLng(obj) || toLatLngBounds(obj)) : this;
				}

				if (!sw && !ne) {
					this._southWest = new LatLng(sw2.lat, sw2.lng);
					this._northEast = new LatLng(ne2.lat, ne2.lng);
				} else {
					sw.lat = Math.min(sw2.lat, sw.lat);
					sw.lng = Math.min(sw2.lng, sw.lng);
					ne.lat = Math.max(ne2.lat, ne.lat);
					ne.lng = Math.max(ne2.lng, ne.lng);
				}

				return this;
			},

			// @method pad(bufferRatio: Number): LatLngBounds
			// Returns bigger bounds created by extending the current bounds by a given percentage in each direction.
			pad: function pad(bufferRatio) {
				var sw = this._southWest,
				    ne = this._northEast,
				    heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio,
				    widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;

				return new LatLngBounds(new LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer), new LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));
			},

			// @method getCenter(): LatLng
			// Returns the center point of the bounds.
			getCenter: function getCenter() {
				return new LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
			},

			// @method getSouthWest(): LatLng
			// Returns the south-west point of the bounds.
			getSouthWest: function getSouthWest() {
				return this._southWest;
			},

			// @method getNorthEast(): LatLng
			// Returns the north-east point of the bounds.
			getNorthEast: function getNorthEast() {
				return this._northEast;
			},

			// @method getNorthWest(): LatLng
			// Returns the north-west point of the bounds.
			getNorthWest: function getNorthWest() {
				return new LatLng(this.getNorth(), this.getWest());
			},

			// @method getSouthEast(): LatLng
			// Returns the south-east point of the bounds.
			getSouthEast: function getSouthEast() {
				return new LatLng(this.getSouth(), this.getEast());
			},

			// @method getWest(): Number
			// Returns the west longitude of the bounds
			getWest: function getWest() {
				return this._southWest.lng;
			},

			// @method getSouth(): Number
			// Returns the south latitude of the bounds
			getSouth: function getSouth() {
				return this._southWest.lat;
			},

			// @method getEast(): Number
			// Returns the east longitude of the bounds
			getEast: function getEast() {
				return this._northEast.lng;
			},

			// @method getNorth(): Number
			// Returns the north latitude of the bounds
			getNorth: function getNorth() {
				return this._northEast.lat;
			},

			// @method contains(otherBounds: LatLngBounds): Boolean
			// Returns `true` if the rectangle contains the given one.

			// @alternative
			// @method contains (latlng: LatLng): Boolean
			// Returns `true` if the rectangle contains the given point.
			contains: function contains(obj) {
				// (LatLngBounds) or (LatLng) -> Boolean
				if (typeof obj[0] === 'number' || obj instanceof LatLng || 'lat' in obj) {
					obj = toLatLng(obj);
				} else {
					obj = toLatLngBounds(obj);
				}

				var sw = this._southWest,
				    ne = this._northEast,
				    sw2,
				    ne2;

				if (obj instanceof LatLngBounds) {
					sw2 = obj.getSouthWest();
					ne2 = obj.getNorthEast();
				} else {
					sw2 = ne2 = obj;
				}

				return sw2.lat >= sw.lat && ne2.lat <= ne.lat && sw2.lng >= sw.lng && ne2.lng <= ne.lng;
			},

			// @method intersects(otherBounds: LatLngBounds): Boolean
			// Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
			intersects: function intersects(bounds) {
				bounds = toLatLngBounds(bounds);

				var sw = this._southWest,
				    ne = this._northEast,
				    sw2 = bounds.getSouthWest(),
				    ne2 = bounds.getNorthEast(),
				    latIntersects = ne2.lat >= sw.lat && sw2.lat <= ne.lat,
				    lngIntersects = ne2.lng >= sw.lng && sw2.lng <= ne.lng;

				return latIntersects && lngIntersects;
			},

			// @method overlaps(otherBounds: Bounds): Boolean
			// Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
			overlaps: function overlaps(bounds) {
				bounds = toLatLngBounds(bounds);

				var sw = this._southWest,
				    ne = this._northEast,
				    sw2 = bounds.getSouthWest(),
				    ne2 = bounds.getNorthEast(),
				    latOverlaps = ne2.lat > sw.lat && sw2.lat < ne.lat,
				    lngOverlaps = ne2.lng > sw.lng && sw2.lng < ne.lng;

				return latOverlaps && lngOverlaps;
			},

			// @method toBBoxString(): String
			// Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
			toBBoxString: function toBBoxString() {
				return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
			},

			// @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
			// Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overriden by setting `maxMargin` to a small number.
			equals: function equals(bounds, maxMargin) {
				if (!bounds) {
					return false;
				}

				bounds = toLatLngBounds(bounds);

				return this._southWest.equals(bounds.getSouthWest(), maxMargin) && this._northEast.equals(bounds.getNorthEast(), maxMargin);
			},

			// @method isValid(): Boolean
			// Returns `true` if the bounds are properly initialized.
			isValid: function isValid() {
				return !!(this._southWest && this._northEast);
			}
		};

		// TODO International date line?

		// @factory L.latLngBounds(corner1: LatLng, corner2: LatLng)
		// Creates a `LatLngBounds` object by defining two diagonally opposite corners of the rectangle.

		// @alternative
		// @factory L.latLngBounds(latlngs: LatLng[])
		// Creates a `LatLngBounds` object defined by the geographical points it contains. Very useful for zooming the map to fit a particular set of locations with [`fitBounds`](#map-fitbounds).
		function toLatLngBounds(a, b) {
			if (a instanceof LatLngBounds) {
				return a;
			}
			return new LatLngBounds(a, b);
		}

		/* @class LatLng
   * @aka L.LatLng
   *
   * Represents a geographical point with a certain latitude and longitude.
   *
   * @example
   *
   * ```
   * var latlng = L.latLng(50.5, 30.5);
   * ```
   *
   * All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:
   *
   * ```
   * map.panTo([50, 30]);
   * map.panTo({lon: 30, lat: 50});
   * map.panTo({lat: 50, lng: 30});
   * map.panTo(L.latLng(50, 30));
   * ```
   */

		function LatLng(lat, lng, alt) {
			if (isNaN(lat) || isNaN(lng)) {
				throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
			}

			// @property lat: Number
			// Latitude in degrees
			this.lat = +lat;

			// @property lng: Number
			// Longitude in degrees
			this.lng = +lng;

			// @property alt: Number
			// Altitude in meters (optional)
			if (alt !== undefined) {
				this.alt = +alt;
			}
		}

		LatLng.prototype = {
			// @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
			// Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overriden by setting `maxMargin` to a small number.
			equals: function equals(obj, maxMargin) {
				if (!obj) {
					return false;
				}

				obj = toLatLng(obj);

				var margin = Math.max(Math.abs(this.lat - obj.lat), Math.abs(this.lng - obj.lng));

				return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);
			},

			// @method toString(): String
			// Returns a string representation of the point (for debugging purposes).
			toString: function toString(precision) {
				return 'LatLng(' + formatNum(this.lat, precision) + ', ' + formatNum(this.lng, precision) + ')';
			},

			// @method distanceTo(otherLatLng: LatLng): Number
			// Returns the distance (in meters) to the given `LatLng` calculated using the [Haversine formula](http://en.wikipedia.org/wiki/Haversine_formula).
			distanceTo: function distanceTo(other) {
				return Earth.distance(this, toLatLng(other));
			},

			// @method wrap(): LatLng
			// Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
			wrap: function wrap() {
				return Earth.wrapLatLng(this);
			},

			// @method toBounds(sizeInMeters: Number): LatLngBounds
			// Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
			toBounds: function toBounds(sizeInMeters) {
				var latAccuracy = 180 * sizeInMeters / 40075017,
				    lngAccuracy = latAccuracy / Math.cos(Math.PI / 180 * this.lat);

				return toLatLngBounds([this.lat - latAccuracy, this.lng - lngAccuracy], [this.lat + latAccuracy, this.lng + lngAccuracy]);
			},

			clone: function clone() {
				return new LatLng(this.lat, this.lng, this.alt);
			}
		};

		// @factory L.latLng(latitude: Number, longitude: Number, altitude?: Number): LatLng
		// Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).

		// @alternative
		// @factory L.latLng(coords: Array): LatLng
		// Expects an array of the form `[Number, Number]` or `[Number, Number, Number]` instead.

		// @alternative
		// @factory L.latLng(coords: Object): LatLng
		// Expects an plain object of the form `{lat: Number, lng: Number}` or `{lat: Number, lng: Number, alt: Number}` instead.

		function toLatLng(a, b, c) {
			if (a instanceof LatLng) {
				return a;
			}
			if (isArray(a) && _typeof(a[0]) !== 'object') {
				if (a.length === 3) {
					return new LatLng(a[0], a[1], a[2]);
				}
				if (a.length === 2) {
					return new LatLng(a[0], a[1]);
				}
				return null;
			}
			if (a === undefined || a === null) {
				return a;
			}
			if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object' && 'lat' in a) {
				return new LatLng(a.lat, 'lng' in a ? a.lng : a.lon, a.alt);
			}
			if (b === undefined) {
				return null;
			}
			return new LatLng(a, b, c);
		}

		/*
   * @namespace CRS
   * @crs L.CRS.Base
   * Object that defines coordinate reference systems for projecting
   * geographical points into pixel (screen) coordinates and back (and to
   * coordinates in other units for [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services). See
   * [spatial reference system](http://en.wikipedia.org/wiki/Coordinate_reference_system).
   *
   * Leaflet defines the most usual CRSs by default. If you want to use a
   * CRS not defined by default, take a look at the
   * [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet) plugin.
   */

		var CRS = {
			// @method latLngToPoint(latlng: LatLng, zoom: Number): Point
			// Projects geographical coordinates into pixel coordinates for a given zoom.
			latLngToPoint: function latLngToPoint(latlng, zoom) {
				var projectedPoint = this.projection.project(latlng),
				    scale = this.scale(zoom);

				return this.transformation._transform(projectedPoint, scale);
			},

			// @method pointToLatLng(point: Point, zoom: Number): LatLng
			// The inverse of `latLngToPoint`. Projects pixel coordinates on a given
			// zoom into geographical coordinates.
			pointToLatLng: function pointToLatLng(point, zoom) {
				var scale = this.scale(zoom),
				    untransformedPoint = this.transformation.untransform(point, scale);

				return this.projection.unproject(untransformedPoint);
			},

			// @method project(latlng: LatLng): Point
			// Projects geographical coordinates into coordinates in units accepted for
			// this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
			project: function project(latlng) {
				return this.projection.project(latlng);
			},

			// @method unproject(point: Point): LatLng
			// Given a projected coordinate returns the corresponding LatLng.
			// The inverse of `project`.
			unproject: function unproject(point) {
				return this.projection.unproject(point);
			},

			// @method scale(zoom: Number): Number
			// Returns the scale used when transforming projected coordinates into
			// pixel coordinates for a particular zoom. For example, it returns
			// `256 * 2^zoom` for Mercator-based CRS.
			scale: function scale(zoom) {
				return 256 * Math.pow(2, zoom);
			},

			// @method zoom(scale: Number): Number
			// Inverse of `scale()`, returns the zoom level corresponding to a scale
			// factor of `scale`.
			zoom: function zoom(scale) {
				return Math.log(scale / 256) / Math.LN2;
			},

			// @method getProjectedBounds(zoom: Number): Bounds
			// Returns the projection's bounds scaled and transformed for the provided `zoom`.
			getProjectedBounds: function getProjectedBounds(zoom) {
				if (this.infinite) {
					return null;
				}

				var b = this.projection.bounds,
				    s = this.scale(zoom),
				    min = this.transformation.transform(b.min, s),
				    max = this.transformation.transform(b.max, s);

				return new Bounds(min, max);
			},

			// @method distance(latlng1: LatLng, latlng2: LatLng): Number
			// Returns the distance between two geographical coordinates.

			// @property code: String
			// Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
			//
			// @property wrapLng: Number[]
			// An array of two numbers defining whether the longitude (horizontal) coordinate
			// axis wraps around a given range and how. Defaults to `[-180, 180]` in most
			// geographical CRSs. If `undefined`, the longitude axis does not wrap around.
			//
			// @property wrapLat: Number[]
			// Like `wrapLng`, but for the latitude (vertical) axis.

			// wrapLng: [min, max],
			// wrapLat: [min, max],

			// @property infinite: Boolean
			// If true, the coordinate space will be unbounded (infinite in both axes)
			infinite: false,

			// @method wrapLatLng(latlng: LatLng): LatLng
			// Returns a `LatLng` where lat and lng has been wrapped according to the
			// CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
			wrapLatLng: function wrapLatLng(latlng) {
				var lng = this.wrapLng ? wrapNum(latlng.lng, this.wrapLng, true) : latlng.lng,
				    lat = this.wrapLat ? wrapNum(latlng.lat, this.wrapLat, true) : latlng.lat,
				    alt = latlng.alt;

				return new LatLng(lat, lng, alt);
			},

			// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
			// Returns a `LatLngBounds` with the same size as the given one, ensuring
			// that its center is within the CRS's bounds.
			// Only accepts actual `L.LatLngBounds` instances, not arrays.
			wrapLatLngBounds: function wrapLatLngBounds(bounds) {
				var center = bounds.getCenter(),
				    newCenter = this.wrapLatLng(center),
				    latShift = center.lat - newCenter.lat,
				    lngShift = center.lng - newCenter.lng;

				if (latShift === 0 && lngShift === 0) {
					return bounds;
				}

				var sw = bounds.getSouthWest(),
				    ne = bounds.getNorthEast(),
				    newSw = new LatLng(sw.lat - latShift, sw.lng - lngShift),
				    newNe = new LatLng(ne.lat - latShift, ne.lng - lngShift);

				return new LatLngBounds(newSw, newNe);
			}
		};

		/*
   * @namespace CRS
   * @crs L.CRS.Earth
   *
   * Serves as the base for CRS that are global such that they cover the earth.
   * Can only be used as the base for other CRS and cannot be used directly,
   * since it does not have a `code`, `projection` or `transformation`. `distance()` returns
   * meters.
   */

		var Earth = extend({}, CRS, {
			wrapLng: [-180, 180],

			// Mean Earth Radius, as recommended for use by
			// the International Union of Geodesy and Geophysics,
			// see http://rosettacode.org/wiki/Haversine_formula
			R: 6371000,

			// distance between two geographical points using spherical law of cosines approximation
			distance: function distance(latlng1, latlng2) {
				var rad = Math.PI / 180,
				    lat1 = latlng1.lat * rad,
				    lat2 = latlng2.lat * rad,
				    a = Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos((latlng2.lng - latlng1.lng) * rad);

				return this.R * Math.acos(Math.min(a, 1));
			}
		});

		/*
   * @namespace Projection
   * @projection L.Projection.SphericalMercator
   *
   * Spherical Mercator projection — the most common projection for online maps,
   * used by almost all free and commercial tile providers. Assumes that Earth is
   * a sphere. Used by the `EPSG:3857` CRS.
   */

		var SphericalMercator = {

			R: 6378137,
			MAX_LATITUDE: 85.0511287798,

			project: function project(latlng) {
				var d = Math.PI / 180,
				    max = this.MAX_LATITUDE,
				    lat = Math.max(Math.min(max, latlng.lat), -max),
				    sin = Math.sin(lat * d);

				return new Point(this.R * latlng.lng * d, this.R * Math.log((1 + sin) / (1 - sin)) / 2);
			},

			unproject: function unproject(point) {
				var d = 180 / Math.PI;

				return new LatLng((2 * Math.atan(Math.exp(point.y / this.R)) - Math.PI / 2) * d, point.x * d / this.R);
			},

			bounds: function () {
				var d = 6378137 * Math.PI;
				return new Bounds([-d, -d], [d, d]);
			}()
		};

		/*
   * @class Transformation
   * @aka L.Transformation
   *
   * Represents an affine transformation: a set of coefficients `a`, `b`, `c`, `d`
   * for transforming a point of a form `(x, y)` into `(a*x + b, c*y + d)` and doing
   * the reverse. Used by Leaflet in its projections code.
   *
   * @example
   *
   * ```js
   * var transformation = L.transformation(2, 5, -1, 10),
   * 	p = L.point(1, 2),
   * 	p2 = transformation.transform(p), //  L.point(7, 8)
   * 	p3 = transformation.untransform(p2); //  L.point(1, 2)
   * ```
   */

		// factory new L.Transformation(a: Number, b: Number, c: Number, d: Number)
		// Creates a `Transformation` object with the given coefficients.
		function Transformation(a, b, c, d) {
			if (isArray(a)) {
				// use array properties
				this._a = a[0];
				this._b = a[1];
				this._c = a[2];
				this._d = a[3];
				return;
			}
			this._a = a;
			this._b = b;
			this._c = c;
			this._d = d;
		}

		Transformation.prototype = {
			// @method transform(point: Point, scale?: Number): Point
			// Returns a transformed point, optionally multiplied by the given scale.
			// Only accepts actual `L.Point` instances, not arrays.
			transform: function transform(point, scale) {
				// (Point, Number) -> Point
				return this._transform(point.clone(), scale);
			},

			// destructive transform (faster)
			_transform: function _transform(point, scale) {
				scale = scale || 1;
				point.x = scale * (this._a * point.x + this._b);
				point.y = scale * (this._c * point.y + this._d);
				return point;
			},

			// @method untransform(point: Point, scale?: Number): Point
			// Returns the reverse transformation of the given point, optionally divided
			// by the given scale. Only accepts actual `L.Point` instances, not arrays.
			untransform: function untransform(point, scale) {
				scale = scale || 1;
				return new Point((point.x / scale - this._b) / this._a, (point.y / scale - this._d) / this._c);
			}
		};

		// factory L.transformation(a: Number, b: Number, c: Number, d: Number)

		// @factory L.transformation(a: Number, b: Number, c: Number, d: Number)
		// Instantiates a Transformation object with the given coefficients.

		// @alternative
		// @factory L.transformation(coefficients: Array): Transformation
		// Expects an coeficients array of the form
		// `[a: Number, b: Number, c: Number, d: Number]`.

		function toTransformation(a, b, c, d) {
			return new Transformation(a, b, c, d);
		}

		/*
   * @namespace CRS
   * @crs L.CRS.EPSG3857
   *
   * The most common CRS for online maps, used by almost all free and commercial
   * tile providers. Uses Spherical Mercator projection. Set in by default in
   * Map's `crs` option.
   */

		var EPSG3857 = extend({}, Earth, {
			code: 'EPSG:3857',
			projection: SphericalMercator,

			transformation: function () {
				var scale = 0.5 / (Math.PI * SphericalMercator.R);
				return toTransformation(scale, 0.5, -scale, 0.5);
			}()
		});

		var EPSG900913 = extend({}, EPSG3857, {
			code: 'EPSG:900913'
		});

		// @namespace SVG; @section
		// There are several static functions which can be called without instantiating L.SVG:

		// @function create(name: String): SVGElement
		// Returns a instance of [SVGElement](https://developer.mozilla.org/docs/Web/API/SVGElement),
		// corresponding to the class name passed. For example, using 'line' will return
		// an instance of [SVGLineElement](https://developer.mozilla.org/docs/Web/API/SVGLineElement).
		function svgCreate(name) {
			return document.createElementNS('http://www.w3.org/2000/svg', name);
		}

		// @function pointsToPath(rings: Point[], closed: Boolean): String
		// Generates a SVG path string for multiple rings, with each ring turning
		// into "M..L..L.." instructions
		function pointsToPath(rings, closed) {
			var str = '',
			    i,
			    j,
			    len,
			    len2,
			    points,
			    p;

			for (i = 0, len = rings.length; i < len; i++) {
				points = rings[i];

				for (j = 0, len2 = points.length; j < len2; j++) {
					p = points[j];
					str += (j ? 'L' : 'M') + p.x + ' ' + p.y;
				}

				// closes the ring for polygons; "x" is VML syntax
				str += closed ? svg ? 'z' : 'x' : '';
			}

			// SVG complains about empty path strings
			return str || 'M0 0';
		}

		/*
   * @namespace Browser
   * @aka L.Browser
   *
   * A namespace with static properties for browser/feature detection used by Leaflet internally.
   *
   * @example
   *
   * ```js
   * if (L.Browser.ielt9) {
   *   alert('Upgrade your browser, dude!');
   * }
   * ```
   */

		var style$1 = document.documentElement.style;

		// @property ie: Boolean; `true` for all Internet Explorer versions (not Edge).
		var ie = 'ActiveXObject' in window;

		// @property ielt9: Boolean; `true` for Internet Explorer versions less than 9.
		var ielt9 = ie && !document.addEventListener;

		// @property edge: Boolean; `true` for the Edge web browser.
		var edge = 'msLaunchUri' in navigator && !('documentMode' in document);

		// @property webkit: Boolean;
		// `true` for webkit-based browsers like Chrome and Safari (including mobile versions).
		var webkit = userAgentContains('webkit');

		// @property android: Boolean
		// `true` for any browser running on an Android platform.
		var android = userAgentContains('android');

		// @property android23: Boolean; `true` for browsers running on Android 2 or Android 3.
		var android23 = userAgentContains('android 2') || userAgentContains('android 3');

		// @property opera: Boolean; `true` for the Opera browser
		var opera = !!window.opera;

		// @property chrome: Boolean; `true` for the Chrome browser.
		var chrome = userAgentContains('chrome');

		// @property gecko: Boolean; `true` for gecko-based browsers like Firefox.
		var gecko = userAgentContains('gecko') && !webkit && !opera && !ie;

		// @property safari: Boolean; `true` for the Safari browser.
		var safari = !chrome && userAgentContains('safari');

		var phantom = userAgentContains('phantom');

		// @property opera12: Boolean
		// `true` for the Opera browser supporting CSS transforms (version 12 or later).
		var opera12 = 'OTransition' in style$1;

		// @property win: Boolean; `true` when the browser is running in a Windows platform
		var win = navigator.platform.indexOf('Win') === 0;

		// @property ie3d: Boolean; `true` for all Internet Explorer versions supporting CSS transforms.
		var ie3d = ie && 'transition' in style$1;

		// @property webkit3d: Boolean; `true` for webkit-based browsers supporting CSS transforms.
		var webkit3d = 'WebKitCSSMatrix' in window && 'm11' in new window.WebKitCSSMatrix() && !android23;

		// @property gecko3d: Boolean; `true` for gecko-based browsers supporting CSS transforms.
		var gecko3d = 'MozPerspective' in style$1;

		// @property any3d: Boolean
		// `true` for all browsers supporting CSS transforms.
		var any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d) && !opera12 && !phantom;

		// @property mobile: Boolean; `true` for all browsers running in a mobile device.
		var mobile = typeof orientation !== 'undefined' || userAgentContains('mobile');

		// @property mobileWebkit: Boolean; `true` for all webkit-based browsers in a mobile device.
		var mobileWebkit = mobile && webkit;

		// @property mobileWebkit3d: Boolean
		// `true` for all webkit-based browsers in a mobile device supporting CSS transforms.
		var mobileWebkit3d = mobile && webkit3d;

		// @property msPointer: Boolean
		// `true` for browsers implementing the Microsoft touch events model (notably IE10).
		var msPointer = !window.PointerEvent && window.MSPointerEvent;

		// @property pointer: Boolean
		// `true` for all browsers supporting [pointer events](https://msdn.microsoft.com/en-us/library/dn433244%28v=vs.85%29.aspx).
		var pointer = !!(window.PointerEvent || msPointer);

		// @property touch: Boolean
		// `true` for all browsers supporting [touch events](https://developer.mozilla.org/docs/Web/API/Touch_events).
		// This does not necessarily mean that the browser is running in a computer with
		// a touchscreen, it only means that the browser is capable of understanding
		// touch events.
		var touch = !window.L_NO_TOUCH && (pointer || 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch);

		// @property mobileOpera: Boolean; `true` for the Opera browser in a mobile device.
		var mobileOpera = mobile && opera;

		// @property mobileGecko: Boolean
		// `true` for gecko-based browsers running in a mobile device.
		var mobileGecko = mobile && gecko;

		// @property retina: Boolean
		// `true` for browsers on a high-resolution "retina" screen.
		var retina = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1;

		// @property canvas: Boolean
		// `true` when the browser supports [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
		var canvas = function () {
			return !!document.createElement('canvas').getContext;
		}();

		// @property svg: Boolean
		// `true` when the browser supports [SVG](https://developer.mozilla.org/docs/Web/SVG).
		var svg = !!(document.createElementNS && svgCreate('svg').createSVGRect);

		// @property vml: Boolean
		// `true` if the browser supports [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language).
		var vml = !svg && function () {
			try {
				var div = document.createElement('div');
				div.innerHTML = '<v:shape adj="1"/>';

				var shape = div.firstChild;
				shape.style.behavior = 'url(#default#VML)';

				return shape && _typeof(shape.adj) === 'object';
			} catch (e) {
				return false;
			}
		}();

		function userAgentContains(str) {
			return navigator.userAgent.toLowerCase().indexOf(str) >= 0;
		}

		var Browser = (Object.freeze || Object)({
			ie: ie,
			ielt9: ielt9,
			edge: edge,
			webkit: webkit,
			android: android,
			android23: android23,
			opera: opera,
			chrome: chrome,
			gecko: gecko,
			safari: safari,
			phantom: phantom,
			opera12: opera12,
			win: win,
			ie3d: ie3d,
			webkit3d: webkit3d,
			gecko3d: gecko3d,
			any3d: any3d,
			mobile: mobile,
			mobileWebkit: mobileWebkit,
			mobileWebkit3d: mobileWebkit3d,
			msPointer: msPointer,
			pointer: pointer,
			touch: touch,
			mobileOpera: mobileOpera,
			mobileGecko: mobileGecko,
			retina: retina,
			canvas: canvas,
			svg: svg,
			vml: vml
		});

		/*
   * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
   */

		var POINTER_DOWN = msPointer ? 'MSPointerDown' : 'pointerdown';
		var POINTER_MOVE = msPointer ? 'MSPointerMove' : 'pointermove';
		var POINTER_UP = msPointer ? 'MSPointerUp' : 'pointerup';
		var POINTER_CANCEL = msPointer ? 'MSPointerCancel' : 'pointercancel';
		var TAG_WHITE_LIST = ['INPUT', 'SELECT', 'OPTION'];
		var _pointers = {};
		var _pointerDocListener = false;

		// DomEvent.DoubleTap needs to know about this
		var _pointersCount = 0;

		// Provides a touch events wrapper for (ms)pointer events.
		// ref http://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890

		function addPointerListener(obj, type, handler, id) {
			if (type === 'touchstart') {
				_addPointerStart(obj, handler, id);
			} else if (type === 'touchmove') {
				_addPointerMove(obj, handler, id);
			} else if (type === 'touchend') {
				_addPointerEnd(obj, handler, id);
			}

			return this;
		}

		function removePointerListener(obj, type, id) {
			var handler = obj['_leaflet_' + type + id];

			if (type === 'touchstart') {
				obj.removeEventListener(POINTER_DOWN, handler, false);
			} else if (type === 'touchmove') {
				obj.removeEventListener(POINTER_MOVE, handler, false);
			} else if (type === 'touchend') {
				obj.removeEventListener(POINTER_UP, handler, false);
				obj.removeEventListener(POINTER_CANCEL, handler, false);
			}

			return this;
		}

		function _addPointerStart(obj, handler, id) {
			var onDown = bind(function (e) {
				if (e.pointerType !== 'mouse' && e.pointerType !== e.MSPOINTER_TYPE_MOUSE && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
					// In IE11, some touch events needs to fire for form controls, or
					// the controls will stop working. We keep a whitelist of tag names that
					// need these events. For other target tags, we prevent default on the event.
					if (TAG_WHITE_LIST.indexOf(e.target.tagName) < 0) {
						preventDefault(e);
					} else {
						return;
					}
				}

				_handlePointer(e, handler);
			});

			obj['_leaflet_touchstart' + id] = onDown;
			obj.addEventListener(POINTER_DOWN, onDown, false);

			// need to keep track of what pointers and how many are active to provide e.touches emulation
			if (!_pointerDocListener) {
				// we listen documentElement as any drags that end by moving the touch off the screen get fired there
				document.documentElement.addEventListener(POINTER_DOWN, _globalPointerDown, true);
				document.documentElement.addEventListener(POINTER_MOVE, _globalPointerMove, true);
				document.documentElement.addEventListener(POINTER_UP, _globalPointerUp, true);
				document.documentElement.addEventListener(POINTER_CANCEL, _globalPointerUp, true);

				_pointerDocListener = true;
			}
		}

		function _globalPointerDown(e) {
			_pointers[e.pointerId] = e;
			_pointersCount++;
		}

		function _globalPointerMove(e) {
			if (_pointers[e.pointerId]) {
				_pointers[e.pointerId] = e;
			}
		}

		function _globalPointerUp(e) {
			delete _pointers[e.pointerId];
			_pointersCount--;
		}

		function _handlePointer(e, handler) {
			e.touches = [];
			for (var i in _pointers) {
				e.touches.push(_pointers[i]);
			}
			e.changedTouches = [e];

			handler(e);
		}

		function _addPointerMove(obj, handler, id) {
			var onMove = function onMove(e) {
				// don't fire touch moves when mouse isn't down
				if ((e.pointerType === e.MSPOINTER_TYPE_MOUSE || e.pointerType === 'mouse') && e.buttons === 0) {
					return;
				}

				_handlePointer(e, handler);
			};

			obj['_leaflet_touchmove' + id] = onMove;
			obj.addEventListener(POINTER_MOVE, onMove, false);
		}

		function _addPointerEnd(obj, handler, id) {
			var onUp = function onUp(e) {
				_handlePointer(e, handler);
			};

			obj['_leaflet_touchend' + id] = onUp;
			obj.addEventListener(POINTER_UP, onUp, false);
			obj.addEventListener(POINTER_CANCEL, onUp, false);
		}

		/*
   * Extends the event handling code with double tap support for mobile browsers.
   */

		var _touchstart = msPointer ? 'MSPointerDown' : pointer ? 'pointerdown' : 'touchstart';
		var _touchend = msPointer ? 'MSPointerUp' : pointer ? 'pointerup' : 'touchend';
		var _pre = '_leaflet_';

		// inspired by Zepto touch code by Thomas Fuchs
		function addDoubleTapListener(obj, handler, id) {
			var last,
			    touch$$1,
			    doubleTap = false,
			    delay = 250;

			function onTouchStart(e) {
				var count;

				if (pointer) {
					if (!edge || e.pointerType === 'mouse') {
						return;
					}
					count = _pointersCount;
				} else {
					count = e.touches.length;
				}

				if (count > 1) {
					return;
				}

				var now = Date.now(),
				    delta = now - (last || now);

				touch$$1 = e.touches ? e.touches[0] : e;
				doubleTap = delta > 0 && delta <= delay;
				last = now;
			}

			function onTouchEnd(e) {
				if (doubleTap && !touch$$1.cancelBubble) {
					if (pointer) {
						if (!edge || e.pointerType === 'mouse') {
							return;
						}
						// work around .type being readonly with MSPointer* events
						var newTouch = {},
						    prop,
						    i;

						for (i in touch$$1) {
							prop = touch$$1[i];
							newTouch[i] = prop && prop.bind ? prop.bind(touch$$1) : prop;
						}
						touch$$1 = newTouch;
					}
					touch$$1.type = 'dblclick';
					handler(touch$$1);
					last = null;
				}
			}

			obj[_pre + _touchstart + id] = onTouchStart;
			obj[_pre + _touchend + id] = onTouchEnd;
			obj[_pre + 'dblclick' + id] = handler;

			obj.addEventListener(_touchstart, onTouchStart, false);
			obj.addEventListener(_touchend, onTouchEnd, false);

			// On some platforms (notably, chrome<55 on win10 + touchscreen + mouse),
			// the browser doesn't fire touchend/pointerup events but does fire
			// native dblclicks. See #4127.
			// Edge 14 also fires native dblclicks, but only for pointerType mouse, see #5180.
			obj.addEventListener('dblclick', handler, false);

			return this;
		}

		function removeDoubleTapListener(obj, id) {
			var touchstart = obj[_pre + _touchstart + id],
			    touchend = obj[_pre + _touchend + id],
			    dblclick = obj[_pre + 'dblclick' + id];

			obj.removeEventListener(_touchstart, touchstart, false);
			obj.removeEventListener(_touchend, touchend, false);
			if (!edge) {
				obj.removeEventListener('dblclick', dblclick, false);
			}

			return this;
		}

		/*
   * @namespace DomEvent
   * Utility functions to work with the [DOM events](https://developer.mozilla.org/docs/Web/API/Event), used by Leaflet internally.
   */

		// Inspired by John Resig, Dean Edwards and YUI addEvent implementations.

		// @function on(el: HTMLElement, types: String, fn: Function, context?: Object): this
		// Adds a listener function (`fn`) to a particular DOM event type of the
		// element `el`. You can optionally specify the context of the listener
		// (object the `this` keyword will point to). You can also pass several
		// space-separated types (e.g. `'click dblclick'`).

		// @alternative
		// @function on(el: HTMLElement, eventMap: Object, context?: Object): this
		// Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
		function on(obj, types, fn, context) {

			if ((typeof types === 'undefined' ? 'undefined' : _typeof(types)) === 'object') {
				for (var type in types) {
					addOne(obj, type, types[type], fn);
				}
			} else {
				types = splitWords(types);

				for (var i = 0, len = types.length; i < len; i++) {
					addOne(obj, types[i], fn, context);
				}
			}

			return this;
		}

		var eventsKey = '_leaflet_events';

		// @function off(el: HTMLElement, types: String, fn: Function, context?: Object): this
		// Removes a previously added listener function. If no function is specified,
		// it will remove all the listeners of that particular DOM event from the element.
		// Note that if you passed a custom context to on, you must pass the same
		// context to `off` in order to remove the listener.

		// @alternative
		// @function off(el: HTMLElement, eventMap: Object, context?: Object): this
		// Removes a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`

		// @alternative
		// @function off(el: HTMLElement): this
		// Removes all known event listeners
		function off(obj, types, fn, context) {

			if ((typeof types === 'undefined' ? 'undefined' : _typeof(types)) === 'object') {
				for (var type in types) {
					removeOne(obj, type, types[type], fn);
				}
			} else if (types) {
				types = splitWords(types);

				for (var i = 0, len = types.length; i < len; i++) {
					removeOne(obj, types[i], fn, context);
				}
			} else {
				for (var j in obj[eventsKey]) {
					removeOne(obj, j, obj[eventsKey][j]);
				}
				delete obj[eventsKey];
			}

			return this;
		}

		function addOne(obj, type, fn, context) {
			var id = type + stamp(fn) + (context ? '_' + stamp(context) : '');

			if (obj[eventsKey] && obj[eventsKey][id]) {
				return this;
			}

			var handler = function handler(e) {
				return fn.call(context || obj, e || window.event);
			};

			var originalHandler = handler;

			if (pointer && type.indexOf('touch') === 0) {
				// Needs DomEvent.Pointer.js
				addPointerListener(obj, type, handler, id);
			} else if (touch && type === 'dblclick' && addDoubleTapListener && !(pointer && chrome)) {
				// Chrome >55 does not need the synthetic dblclicks from addDoubleTapListener
				// See #5180
				addDoubleTapListener(obj, handler, id);
			} else if ('addEventListener' in obj) {

				if (type === 'mousewheel') {
					obj.addEventListener('onwheel' in obj ? 'wheel' : 'mousewheel', handler, false);
				} else if (type === 'mouseenter' || type === 'mouseleave') {
					handler = function handler(e) {
						e = e || window.event;
						if (isExternalTarget(obj, e)) {
							originalHandler(e);
						}
					};
					obj.addEventListener(type === 'mouseenter' ? 'mouseover' : 'mouseout', handler, false);
				} else {
					if (type === 'click' && android) {
						handler = function handler(e) {
							filterClick(e, originalHandler);
						};
					}
					obj.addEventListener(type, handler, false);
				}
			} else if ('attachEvent' in obj) {
				obj.attachEvent('on' + type, handler);
			}

			obj[eventsKey] = obj[eventsKey] || {};
			obj[eventsKey][id] = handler;
		}

		function removeOne(obj, type, fn, context) {

			var id = type + stamp(fn) + (context ? '_' + stamp(context) : ''),
			    handler = obj[eventsKey] && obj[eventsKey][id];

			if (!handler) {
				return this;
			}

			if (pointer && type.indexOf('touch') === 0) {
				removePointerListener(obj, type, id);
			} else if (touch && type === 'dblclick' && removeDoubleTapListener) {
				removeDoubleTapListener(obj, id);
			} else if ('removeEventListener' in obj) {

				if (type === 'mousewheel') {
					obj.removeEventListener('onwheel' in obj ? 'wheel' : 'mousewheel', handler, false);
				} else {
					obj.removeEventListener(type === 'mouseenter' ? 'mouseover' : type === 'mouseleave' ? 'mouseout' : type, handler, false);
				}
			} else if ('detachEvent' in obj) {
				obj.detachEvent('on' + type, handler);
			}

			obj[eventsKey][id] = null;
		}

		// @function stopPropagation(ev: DOMEvent): this
		// Stop the given event from propagation to parent elements. Used inside the listener functions:
		// ```js
		// L.DomEvent.on(div, 'click', function (ev) {
		// 	L.DomEvent.stopPropagation(ev);
		// });
		// ```
		function stopPropagation(e) {

			if (e.stopPropagation) {
				e.stopPropagation();
			} else if (e.originalEvent) {
				// In case of Leaflet event.
				e.originalEvent._stopped = true;
			} else {
				e.cancelBubble = true;
			}
			skipped(e);

			return this;
		}

		// @function disableScrollPropagation(el: HTMLElement): this
		// Adds `stopPropagation` to the element's `'mousewheel'` events (plus browser variants).
		function disableScrollPropagation(el) {
			addOne(el, 'mousewheel', stopPropagation);
			return this;
		}

		// @function disableClickPropagation(el: HTMLElement): this
		// Adds `stopPropagation` to the element's `'click'`, `'doubleclick'`,
		// `'mousedown'` and `'touchstart'` events (plus browser variants).
		function disableClickPropagation(el) {
			on(el, 'mousedown touchstart dblclick', stopPropagation);
			addOne(el, 'click', fakeStop);
			return this;
		}

		// @function preventDefault(ev: DOMEvent): this
		// Prevents the default action of the DOM Event `ev` from happening (such as
		// following a link in the href of the a element, or doing a POST request
		// with page reload when a `<form>` is submitted).
		// Use it inside listener functions.
		function preventDefault(e) {
			if (e.preventDefault) {
				e.preventDefault();
			} else {
				e.returnValue = false;
			}
			return this;
		}

		// @function stop(ev): this
		// Does `stopPropagation` and `preventDefault` at the same time.
		function stop(e) {
			preventDefault(e);
			stopPropagation(e);
			return this;
		}

		// @function getMousePosition(ev: DOMEvent, container?: HTMLElement): Point
		// Gets normalized mouse position from a DOM event relative to the
		// `container` or to the whole page if not specified.
		function getMousePosition(e, container) {
			if (!container) {
				return new Point(e.clientX, e.clientY);
			}

			var rect = container.getBoundingClientRect();

			return new Point(e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop);
		}

		// Chrome on Win scrolls double the pixels as in other platforms (see #4538),
		// and Firefox scrolls device pixels, not CSS pixels
		var wheelPxFactor = win && chrome ? 2 * window.devicePixelRatio : gecko ? window.devicePixelRatio : 1;

		// @function getWheelDelta(ev: DOMEvent): Number
		// Gets normalized wheel delta from a mousewheel DOM event, in vertical
		// pixels scrolled (negative if scrolling down).
		// Events from pointing devices without precise scrolling are mapped to
		// a best guess of 60 pixels.
		function getWheelDelta(e) {
			return edge ? e.wheelDeltaY / 2 : // Don't trust window-geometry-based delta
			e.deltaY && e.deltaMode === 0 ? -e.deltaY / wheelPxFactor : // Pixels
			e.deltaY && e.deltaMode === 1 ? -e.deltaY * 20 : // Lines
			e.deltaY && e.deltaMode === 2 ? -e.deltaY * 60 : // Pages
			e.deltaX || e.deltaZ ? 0 : // Skip horizontal/depth wheel events
			e.wheelDelta ? (e.wheelDeltaY || e.wheelDelta) / 2 : // Legacy IE pixels
			e.detail && Math.abs(e.detail) < 32765 ? -e.detail * 20 : // Legacy Moz lines
			e.detail ? e.detail / -32765 * 60 : // Legacy Moz pages
			0;
		}

		var skipEvents = {};

		function fakeStop(e) {
			// fakes stopPropagation by setting a special event flag, checked/reset with skipped(e)
			skipEvents[e.type] = true;
		}

		function skipped(e) {
			var events = skipEvents[e.type];
			// reset when checking, as it's only used in map container and propagates outside of the map
			skipEvents[e.type] = false;
			return events;
		}

		// check if element really left/entered the event target (for mouseenter/mouseleave)
		function isExternalTarget(el, e) {

			var related = e.relatedTarget;

			if (!related) {
				return true;
			}

			try {
				while (related && related !== el) {
					related = related.parentNode;
				}
			} catch (err) {
				return false;
			}
			return related !== el;
		}

		var lastClick;

		// this is a horrible workaround for a bug in Android where a single touch triggers two click events
		function filterClick(e, handler) {
			var timeStamp = e.timeStamp || e.originalEvent && e.originalEvent.timeStamp,
			    elapsed = lastClick && timeStamp - lastClick;

			// are they closer together than 500ms yet more than 100ms?
			// Android typically triggers them ~300ms apart while multiple listeners
			// on the same event should be triggered far faster;
			// or check if click is simulated on the element, and if it is, reject any non-simulated events

			if (elapsed && elapsed > 100 && elapsed < 500 || e.target._simulatedClick && !e._simulated) {
				stop(e);
				return;
			}
			lastClick = timeStamp;

			handler(e);
		}

		var DomEvent = (Object.freeze || Object)({
			on: on,
			off: off,
			stopPropagation: stopPropagation,
			disableScrollPropagation: disableScrollPropagation,
			disableClickPropagation: disableClickPropagation,
			preventDefault: preventDefault,
			stop: stop,
			getMousePosition: getMousePosition,
			getWheelDelta: getWheelDelta,
			fakeStop: fakeStop,
			skipped: skipped,
			isExternalTarget: isExternalTarget,
			addListener: on,
			removeListener: off
		});

		/*
   * @namespace DomUtil
   *
   * Utility functions to work with the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)
   * tree, used by Leaflet internally.
   *
   * Most functions expecting or returning a `HTMLElement` also work for
   * SVG elements. The only difference is that classes refer to CSS classes
   * in HTML and SVG classes in SVG.
   */

		// @property TRANSFORM: String
		// Vendor-prefixed transform style name (e.g. `'webkitTransform'` for WebKit).
		var TRANSFORM = testProp(['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform']);

		// webkitTransition comes first because some browser versions that drop vendor prefix don't do
		// the same for the transitionend event, in particular the Android 4.1 stock browser

		// @property TRANSITION: String
		// Vendor-prefixed transition style name.
		var TRANSITION = testProp(['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']);

		// @property TRANSITION_END: String
		// Vendor-prefixed transitionend event name.
		var TRANSITION_END = TRANSITION === 'webkitTransition' || TRANSITION === 'OTransition' ? TRANSITION + 'End' : 'transitionend';

		// @function get(id: String|HTMLElement): HTMLElement
		// Returns an element given its DOM id, or returns the element itself
		// if it was passed directly.
		function get(id) {
			return typeof id === 'string' ? document.getElementById(id) : id;
		}

		// @function getStyle(el: HTMLElement, styleAttrib: String): String
		// Returns the value for a certain style attribute on an element,
		// including computed values or values set through CSS.
		function getStyle(el, style) {
			var value = el.style[style] || el.currentStyle && el.currentStyle[style];

			if ((!value || value === 'auto') && document.defaultView) {
				var css = document.defaultView.getComputedStyle(el, null);
				value = css ? css[style] : null;
			}
			return value === 'auto' ? null : value;
		}

		// @function create(tagName: String, className?: String, container?: HTMLElement): HTMLElement
		// Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element.
		function create$1(tagName, className, container) {
			var el = document.createElement(tagName);
			el.className = className || '';

			if (container) {
				container.appendChild(el);
			}
			return el;
		}

		// @function remove(el: HTMLElement)
		// Removes `el` from its parent element
		function _remove(el) {
			var parent = el.parentNode;
			if (parent) {
				parent.removeChild(el);
			}
		}

		// @function empty(el: HTMLElement)
		// Removes all of `el`'s children elements from `el`
		function empty(el) {
			while (el.firstChild) {
				el.removeChild(el.firstChild);
			}
		}

		// @function toFront(el: HTMLElement)
		// Makes `el` the last child of its parent, so it renders in front of the other children.
		function toFront(el) {
			var parent = el.parentNode;
			if (parent.lastChild !== el) {
				parent.appendChild(el);
			}
		}

		// @function toBack(el: HTMLElement)
		// Makes `el` the first child of its parent, so it renders behind the other children.
		function toBack(el) {
			var parent = el.parentNode;
			if (parent.firstChild !== el) {
				parent.insertBefore(el, parent.firstChild);
			}
		}

		// @function hasClass(el: HTMLElement, name: String): Boolean
		// Returns `true` if the element's class attribute contains `name`.
		function hasClass(el, name) {
			if (el.classList !== undefined) {
				return el.classList.contains(name);
			}
			var className = getClass(el);
			return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className);
		}

		// @function addClass(el: HTMLElement, name: String)
		// Adds `name` to the element's class attribute.
		function addClass(el, name) {
			if (el.classList !== undefined) {
				var classes = splitWords(name);
				for (var i = 0, len = classes.length; i < len; i++) {
					el.classList.add(classes[i]);
				}
			} else if (!hasClass(el, name)) {
				var className = getClass(el);
				setClass(el, (className ? className + ' ' : '') + name);
			}
		}

		// @function removeClass(el: HTMLElement, name: String)
		// Removes `name` from the element's class attribute.
		function removeClass(el, name) {
			if (el.classList !== undefined) {
				el.classList.remove(name);
			} else {
				setClass(el, trim((' ' + getClass(el) + ' ').replace(' ' + name + ' ', ' ')));
			}
		}

		// @function setClass(el: HTMLElement, name: String)
		// Sets the element's class.
		function setClass(el, name) {
			if (el.className.baseVal === undefined) {
				el.className = name;
			} else {
				// in case of SVG element
				el.className.baseVal = name;
			}
		}

		// @function getClass(el: HTMLElement): String
		// Returns the element's class.
		function getClass(el) {
			return el.className.baseVal === undefined ? el.className : el.className.baseVal;
		}

		// @function setOpacity(el: HTMLElement, opacity: Number)
		// Set the opacity of an element (including old IE support).
		// `opacity` must be a number from `0` to `1`.
		function _setOpacity(el, value) {
			if ('opacity' in el.style) {
				el.style.opacity = value;
			} else if ('filter' in el.style) {
				_setOpacityIE(el, value);
			}
		}

		function _setOpacityIE(el, value) {
			var filter = false,
			    filterName = 'DXImageTransform.Microsoft.Alpha';

			// filters collection throws an error if we try to retrieve a filter that doesn't exist
			try {
				filter = el.filters.item(filterName);
			} catch (e) {
				// don't set opacity to 1 if we haven't already set an opacity,
				// it isn't needed and breaks transparent pngs.
				if (value === 1) {
					return;
				}
			}

			value = Math.round(value * 100);

			if (filter) {
				filter.Enabled = value !== 100;
				filter.Opacity = value;
			} else {
				el.style.filter += ' progid:' + filterName + '(opacity=' + value + ')';
			}
		}

		// @function testProp(props: String[]): String|false
		// Goes through the array of style names and returns the first name
		// that is a valid style name for an element. If no such name is found,
		// it returns false. Useful for vendor-prefixed styles like `transform`.
		function testProp(props) {
			var style = document.documentElement.style;

			for (var i = 0; i < props.length; i++) {
				if (props[i] in style) {
					return props[i];
				}
			}
			return false;
		}

		// @function setTransform(el: HTMLElement, offset: Point, scale?: Number)
		// Resets the 3D CSS transform of `el` so it is translated by `offset` pixels
		// and optionally scaled by `scale`. Does not have an effect if the
		// browser doesn't support 3D CSS transforms.
		function setTransform(el, offset, scale) {
			var pos = offset || new Point(0, 0);

			el.style[TRANSFORM] = (ie3d ? 'translate(' + pos.x + 'px,' + pos.y + 'px)' : 'translate3d(' + pos.x + 'px,' + pos.y + 'px,0)') + (scale ? ' scale(' + scale + ')' : '');
		}

		// @function setPosition(el: HTMLElement, position: Point)
		// Sets the position of `el` to coordinates specified by `position`,
		// using CSS translate or top/left positioning depending on the browser
		// (used by Leaflet internally to position its layers).
		function setPosition(el, point) {

			/*eslint-disable */
			el._leaflet_pos = point;
			/*eslint-enable */

			if (any3d) {
				setTransform(el, point);
			} else {
				el.style.left = point.x + 'px';
				el.style.top = point.y + 'px';
			}
		}

		// @function getPosition(el: HTMLElement): Point
		// Returns the coordinates of an element previously positioned with setPosition.
		function getPosition(el) {
			// this method is only used for elements previously positioned using setPosition,
			// so it's safe to cache the position for performance

			return el._leaflet_pos || new Point(0, 0);
		}

		// @function disableTextSelection()
		// Prevents the user from generating `selectstart` DOM events, usually generated
		// when the user drags the mouse through a page with text. Used internally
		// by Leaflet to override the behaviour of any click-and-drag interaction on
		// the map. Affects drag interactions on the whole document.

		// @function enableTextSelection()
		// Cancels the effects of a previous [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection).
		var disableTextSelection;
		var enableTextSelection;
		var _userSelect;
		if ('onselectstart' in document) {
			disableTextSelection = function disableTextSelection() {
				on(window, 'selectstart', preventDefault);
			};
			enableTextSelection = function enableTextSelection() {
				off(window, 'selectstart', preventDefault);
			};
		} else {
			var userSelectProperty = testProp(['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);

			disableTextSelection = function disableTextSelection() {
				if (userSelectProperty) {
					var style = document.documentElement.style;
					_userSelect = style[userSelectProperty];
					style[userSelectProperty] = 'none';
				}
			};
			enableTextSelection = function enableTextSelection() {
				if (userSelectProperty) {
					document.documentElement.style[userSelectProperty] = _userSelect;
					_userSelect = undefined;
				}
			};
		}

		// @function disableImageDrag()
		// As [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection), but
		// for `dragstart` DOM events, usually generated when the user drags an image.
		function disableImageDrag() {
			on(window, 'dragstart', preventDefault);
		}

		// @function enableImageDrag()
		// Cancels the effects of a previous [`L.DomUtil.disableImageDrag`](#domutil-disabletextselection).
		function enableImageDrag() {
			off(window, 'dragstart', preventDefault);
		}

		var _outlineElement;
		var _outlineStyle;
		// @function preventOutline(el: HTMLElement)
		// Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline)
		// of the element `el` invisible. Used internally by Leaflet to prevent
		// focusable elements from displaying an outline when the user performs a
		// drag interaction on them.
		function preventOutline(element) {
			while (element.tabIndex === -1) {
				element = element.parentNode;
			}
			if (!element.style) {
				return;
			}
			restoreOutline();
			_outlineElement = element;
			_outlineStyle = element.style.outline;
			element.style.outline = 'none';
			on(window, 'keydown', restoreOutline);
		}

		// @function restoreOutline()
		// Cancels the effects of a previous [`L.DomUtil.preventOutline`]().
		function restoreOutline() {
			if (!_outlineElement) {
				return;
			}
			_outlineElement.style.outline = _outlineStyle;
			_outlineElement = undefined;
			_outlineStyle = undefined;
			off(window, 'keydown', restoreOutline);
		}

		var DomUtil = (Object.freeze || Object)({
			TRANSFORM: TRANSFORM,
			TRANSITION: TRANSITION,
			TRANSITION_END: TRANSITION_END,
			get: get,
			getStyle: getStyle,
			create: create$1,
			remove: _remove,
			empty: empty,
			toFront: toFront,
			toBack: toBack,
			hasClass: hasClass,
			addClass: addClass,
			removeClass: removeClass,
			setClass: setClass,
			getClass: getClass,
			setOpacity: _setOpacity,
			testProp: testProp,
			setTransform: setTransform,
			setPosition: setPosition,
			getPosition: getPosition,
			disableTextSelection: disableTextSelection,
			enableTextSelection: enableTextSelection,
			disableImageDrag: disableImageDrag,
			enableImageDrag: enableImageDrag,
			preventOutline: preventOutline,
			restoreOutline: restoreOutline
		});

		/*
   * @class PosAnimation
   * @aka L.PosAnimation
   * @inherits Evented
   * Used internally for panning animations, utilizing CSS3 Transitions for modern browsers and a timer fallback for IE6-9.
   *
   * @example
   * ```js
   * var fx = new L.PosAnimation();
   * fx.run(el, [300, 500], 0.5);
   * ```
   *
   * @constructor L.PosAnimation()
   * Creates a `PosAnimation` object.
   *
   */

		var PosAnimation = Evented.extend({

			// @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
			// Run an animation of a given element to a new position, optionally setting
			// duration in seconds (`0.25` by default) and easing linearity factor (3rd
			// argument of the [cubic bezier curve](http://cubic-bezier.com/#0,0,.5,1),
			// `0.5` by default).
			run: function run(el, newPos, duration, easeLinearity) {
				this.stop();

				this._el = el;
				this._inProgress = true;
				this._duration = duration || 0.25;
				this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);

				this._startPos = getPosition(el);
				this._offset = newPos.subtract(this._startPos);
				this._startTime = +new Date();

				// @event start: Event
				// Fired when the animation starts
				this.fire('start');

				this._animate();
			},

			// @method stop()
			// Stops the animation (if currently running).
			stop: function stop() {
				if (!this._inProgress) {
					return;
				}

				this._step(true);
				this._complete();
			},

			_animate: function _animate() {
				// animation loop
				this._animId = requestAnimFrame(this._animate, this);
				this._step();
			},

			_step: function _step(round) {
				var elapsed = +new Date() - this._startTime,
				    duration = this._duration * 1000;

				if (elapsed < duration) {
					this._runFrame(this._easeOut(elapsed / duration), round);
				} else {
					this._runFrame(1);
					this._complete();
				}
			},

			_runFrame: function _runFrame(progress, round) {
				var pos = this._startPos.add(this._offset.multiplyBy(progress));
				if (round) {
					pos._round();
				}
				setPosition(this._el, pos);

				// @event step: Event
				// Fired continuously during the animation.
				this.fire('step');
			},

			_complete: function _complete() {
				cancelAnimFrame(this._animId);

				this._inProgress = false;
				// @event end: Event
				// Fired when the animation ends.
				this.fire('end');
			},

			_easeOut: function _easeOut(t) {
				return 1 - Math.pow(1 - t, this._easeOutPower);
			}
		});

		/*
   * @class Map
   * @aka L.Map
   * @inherits Evented
   *
   * The central class of the API — it is used to create a map on a page and manipulate it.
   *
   * @example
   *
   * ```js
   * // initialize the map on the "map" div with a given center and zoom
   * var map = L.map('map', {
   * 	center: [51.505, -0.09],
   * 	zoom: 13
   * });
   * ```
   *
   */

		var Map = Evented.extend({

			options: {
				// @section Map State Options
				// @option crs: CRS = L.CRS.EPSG3857
				// The [Coordinate Reference System](#crs) to use. Don't change this if you're not
				// sure what it means.
				crs: EPSG3857,

				// @option center: LatLng = undefined
				// Initial geographic center of the map
				center: undefined,

				// @option zoom: Number = undefined
				// Initial map zoom level
				zoom: undefined,

				// @option minZoom: Number = *
				// Minimum zoom level of the map.
				// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
				// the lowest of their `minZoom` options will be used instead.
				minZoom: undefined,

				// @option maxZoom: Number = *
				// Maximum zoom level of the map.
				// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
				// the highest of their `maxZoom` options will be used instead.
				maxZoom: undefined,

				// @option layers: Layer[] = []
				// Array of layers that will be added to the map initially
				layers: [],

				// @option maxBounds: LatLngBounds = null
				// When this option is set, the map restricts the view to the given
				// geographical bounds, bouncing the user back if the user tries to pan
				// outside the view. To set the restriction dynamically, use
				// [`setMaxBounds`](#map-setmaxbounds) method.
				maxBounds: undefined,

				// @option renderer: Renderer = *
				// The default method for drawing vector layers on the map. `L.SVG`
				// or `L.Canvas` by default depending on browser support.
				renderer: undefined,

				// @section Animation Options
				// @option zoomAnimation: Boolean = true
				// Whether the map zoom animation is enabled. By default it's enabled
				// in all browsers that support CSS3 Transitions except Android.
				zoomAnimation: true,

				// @option zoomAnimationThreshold: Number = 4
				// Won't animate zoom if the zoom difference exceeds this value.
				zoomAnimationThreshold: 4,

				// @option fadeAnimation: Boolean = true
				// Whether the tile fade animation is enabled. By default it's enabled
				// in all browsers that support CSS3 Transitions except Android.
				fadeAnimation: true,

				// @option markerZoomAnimation: Boolean = true
				// Whether markers animate their zoom with the zoom animation, if disabled
				// they will disappear for the length of the animation. By default it's
				// enabled in all browsers that support CSS3 Transitions except Android.
				markerZoomAnimation: true,

				// @option transform3DLimit: Number = 2^23
				// Defines the maximum size of a CSS translation transform. The default
				// value should not be changed unless a web browser positions layers in
				// the wrong place after doing a large `panBy`.
				transform3DLimit: 8388608, // Precision limit of a 32-bit float

				// @section Interaction Options
				// @option zoomSnap: Number = 1
				// Forces the map's zoom level to always be a multiple of this, particularly
				// right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
				// By default, the zoom level snaps to the nearest integer; lower values
				// (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
				// means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
				zoomSnap: 1,

				// @option zoomDelta: Number = 1
				// Controls how much the map's zoom level will change after a
				// [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
				// or `-` on the keyboard, or using the [zoom controls](#control-zoom).
				// Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
				zoomDelta: 1,

				// @option trackResize: Boolean = true
				// Whether the map automatically handles browser window resize to update itself.
				trackResize: true
			},

			initialize: function initialize(id, options) {
				// (HTMLElement or String, Object)
				options = setOptions(this, options);

				this._initContainer(id);
				this._initLayout();

				// hack for https://github.com/Leaflet/Leaflet/issues/1980
				this._onResize = bind(this._onResize, this);

				this._initEvents();

				if (options.maxBounds) {
					this.setMaxBounds(options.maxBounds);
				}

				if (options.zoom !== undefined) {
					this._zoom = this._limitZoom(options.zoom);
				}

				if (options.center && options.zoom !== undefined) {
					this.setView(toLatLng(options.center), options.zoom, { reset: true });
				}

				this._handlers = [];
				this._layers = {};
				this._zoomBoundLayers = {};
				this._sizeChanged = true;

				this.callInitHooks();

				// don't animate on browsers without hardware-accelerated transitions or old Android/Opera
				this._zoomAnimated = TRANSITION && any3d && !mobileOpera && this.options.zoomAnimation;

				// zoom transitions run with the same duration for all layers, so if one of transitionend events
				// happens after starting zoom animation (propagating to the map pane), we know that it ended globally
				if (this._zoomAnimated) {
					this._createAnimProxy();
					on(this._proxy, TRANSITION_END, this._catchTransitionEnd, this);
				}

				this._addLayers(this.options.layers);
			},

			// @section Methods for modifying map state

			// @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
			// Sets the view of the map (geographical center and zoom) with the given
			// animation options.
			setView: function setView(center, zoom, options) {

				zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);
				center = this._limitCenter(toLatLng(center), zoom, this.options.maxBounds);
				options = options || {};

				this._stop();

				if (this._loaded && !options.reset && options !== true) {

					if (options.animate !== undefined) {
						options.zoom = extend({ animate: options.animate }, options.zoom);
						options.pan = extend({ animate: options.animate, duration: options.duration }, options.pan);
					}

					// try animating pan or zoom
					var moved = this._zoom !== zoom ? this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) : this._tryAnimatedPan(center, options.pan);

					if (moved) {
						// prevent resize handler call, the view will refresh after animation anyway
						clearTimeout(this._sizeTimer);
						return this;
					}
				}

				// animation didn't start, just reset the map view
				this._resetView(center, zoom);

				return this;
			},

			// @method setZoom(zoom: Number, options?: Zoom/pan options): this
			// Sets the zoom of the map.
			setZoom: function setZoom(zoom, options) {
				if (!this._loaded) {
					this._zoom = zoom;
					return this;
				}
				return this.setView(this.getCenter(), zoom, { zoom: options });
			},

			// @method zoomIn(delta?: Number, options?: Zoom options): this
			// Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
			zoomIn: function zoomIn(delta, options) {
				delta = delta || (any3d ? this.options.zoomDelta : 1);
				return this.setZoom(this._zoom + delta, options);
			},

			// @method zoomOut(delta?: Number, options?: Zoom options): this
			// Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
			zoomOut: function zoomOut(delta, options) {
				delta = delta || (any3d ? this.options.zoomDelta : 1);
				return this.setZoom(this._zoom - delta, options);
			},

			// @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
			// Zooms the map while keeping a specified geographical point on the map
			// stationary (e.g. used internally for scroll zoom and double-click zoom).
			// @alternative
			// @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
			// Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
			setZoomAround: function setZoomAround(latlng, zoom, options) {
				var scale = this.getZoomScale(zoom),
				    viewHalf = this.getSize().divideBy(2),
				    containerPoint = latlng instanceof Point ? latlng : this.latLngToContainerPoint(latlng),
				    centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale),
				    newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));

				return this.setView(newCenter, zoom, { zoom: options });
			},

			_getBoundsCenterZoom: function _getBoundsCenterZoom(bounds, options) {

				options = options || {};
				bounds = bounds.getBounds ? bounds.getBounds() : toLatLngBounds(bounds);

				var paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]),
				    paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]),
				    zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));

				zoom = typeof options.maxZoom === 'number' ? Math.min(options.maxZoom, zoom) : zoom;

				if (zoom === Infinity) {
					return {
						center: bounds.getCenter(),
						zoom: zoom
					};
				}

				var paddingOffset = paddingBR.subtract(paddingTL).divideBy(2),
				    swPoint = this.project(bounds.getSouthWest(), zoom),
				    nePoint = this.project(bounds.getNorthEast(), zoom),
				    center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);

				return {
					center: center,
					zoom: zoom
				};
			},

			// @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
			// Sets a map view that contains the given geographical bounds with the
			// maximum zoom level possible.
			fitBounds: function fitBounds(bounds, options) {

				bounds = toLatLngBounds(bounds);

				if (!bounds.isValid()) {
					throw new Error('Bounds are not valid.');
				}

				var target = this._getBoundsCenterZoom(bounds, options);
				return this.setView(target.center, target.zoom, options);
			},

			// @method fitWorld(options?: fitBounds options): this
			// Sets a map view that mostly contains the whole world with the maximum
			// zoom level possible.
			fitWorld: function fitWorld(options) {
				return this.fitBounds([[-90, -180], [90, 180]], options);
			},

			// @method panTo(latlng: LatLng, options?: Pan options): this
			// Pans the map to a given center.
			panTo: function panTo(center, options) {
				// (LatLng)
				return this.setView(center, this._zoom, { pan: options });
			},

			// @method panBy(offset: Point, options?: Pan options): this
			// Pans the map by a given number of pixels (animated).
			panBy: function panBy(offset, options) {
				offset = toPoint(offset).round();
				options = options || {};

				if (!offset.x && !offset.y) {
					return this.fire('moveend');
				}
				// If we pan too far, Chrome gets issues with tiles
				// and makes them disappear or appear in the wrong place (slightly offset) #2602
				if (options.animate !== true && !this.getSize().contains(offset)) {
					this._resetView(this.unproject(this.project(this.getCenter()).add(offset)), this.getZoom());
					return this;
				}

				if (!this._panAnim) {
					this._panAnim = new PosAnimation();

					this._panAnim.on({
						'step': this._onPanTransitionStep,
						'end': this._onPanTransitionEnd
					}, this);
				}

				// don't fire movestart if animating inertia
				if (!options.noMoveStart) {
					this.fire('movestart');
				}

				// animate pan unless animate: false specified
				if (options.animate !== false) {
					addClass(this._mapPane, 'leaflet-pan-anim');

					var newPos = this._getMapPanePos().subtract(offset).round();
					this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
				} else {
					this._rawPanBy(offset);
					this.fire('move').fire('moveend');
				}

				return this;
			},

			// @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
			// Sets the view of the map (geographical center and zoom) performing a smooth
			// pan-zoom animation.
			flyTo: function flyTo(targetCenter, targetZoom, options) {

				options = options || {};
				if (options.animate === false || !any3d) {
					return this.setView(targetCenter, targetZoom, options);
				}

				this._stop();

				var from = this.project(this.getCenter()),
				    to = this.project(targetCenter),
				    size = this.getSize(),
				    startZoom = this._zoom;

				targetCenter = toLatLng(targetCenter);
				targetZoom = targetZoom === undefined ? startZoom : targetZoom;

				var w0 = Math.max(size.x, size.y),
				    w1 = w0 * this.getZoomScale(startZoom, targetZoom),
				    u1 = to.distanceTo(from) || 1,
				    rho = 1.42,
				    rho2 = rho * rho;

				function r(i) {
					var s1 = i ? -1 : 1,
					    s2 = i ? w1 : w0,
					    t1 = w1 * w1 - w0 * w0 + s1 * rho2 * rho2 * u1 * u1,
					    b1 = 2 * s2 * rho2 * u1,
					    b = t1 / b1,
					    sq = Math.sqrt(b * b + 1) - b;

					// workaround for floating point precision bug when sq = 0, log = -Infinite,
					// thus triggering an infinite loop in flyTo
					var log = sq < 0.000000001 ? -18 : Math.log(sq);

					return log;
				}

				function sinh(n) {
					return (Math.exp(n) - Math.exp(-n)) / 2;
				}
				function cosh(n) {
					return (Math.exp(n) + Math.exp(-n)) / 2;
				}
				function tanh(n) {
					return sinh(n) / cosh(n);
				}

				var r0 = r(0);

				function w(s) {
					return w0 * (cosh(r0) / cosh(r0 + rho * s));
				}
				function u(s) {
					return w0 * (cosh(r0) * tanh(r0 + rho * s) - sinh(r0)) / rho2;
				}

				function easeOut(t) {
					return 1 - Math.pow(1 - t, 1.5);
				}

				var start = Date.now(),
				    S = (r(1) - r0) / rho,
				    duration = options.duration ? 1000 * options.duration : 1000 * S * 0.8;

				function frame() {
					var t = (Date.now() - start) / duration,
					    s = easeOut(t) * S;

					if (t <= 1) {
						this._flyToFrame = requestAnimFrame(frame, this);

						this._move(this.unproject(from.add(to.subtract(from).multiplyBy(u(s) / u1)), startZoom), this.getScaleZoom(w0 / w(s), startZoom), { flyTo: true });
					} else {
						this._move(targetCenter, targetZoom)._moveEnd(true);
					}
				}

				this._moveStart(true);

				frame.call(this);
				return this;
			},

			// @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
			// Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
			// but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
			flyToBounds: function flyToBounds(bounds, options) {
				var target = this._getBoundsCenterZoom(bounds, options);
				return this.flyTo(target.center, target.zoom, options);
			},

			// @method setMaxBounds(bounds: Bounds): this
			// Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
			setMaxBounds: function setMaxBounds(bounds) {
				bounds = toLatLngBounds(bounds);

				if (!bounds.isValid()) {
					this.options.maxBounds = null;
					return this.off('moveend', this._panInsideMaxBounds);
				} else if (this.options.maxBounds) {
					this.off('moveend', this._panInsideMaxBounds);
				}

				this.options.maxBounds = bounds;

				if (this._loaded) {
					this._panInsideMaxBounds();
				}

				return this.on('moveend', this._panInsideMaxBounds);
			},

			// @method setMinZoom(zoom: Number): this
			// Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
			setMinZoom: function setMinZoom(zoom) {
				this.options.minZoom = zoom;

				if (this._loaded && this.getZoom() < this.options.minZoom) {
					return this.setZoom(zoom);
				}

				return this;
			},

			// @method setMaxZoom(zoom: Number): this
			// Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
			setMaxZoom: function setMaxZoom(zoom) {
				this.options.maxZoom = zoom;

				if (this._loaded && this.getZoom() > this.options.maxZoom) {
					return this.setZoom(zoom);
				}

				return this;
			},

			// @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
			// Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
			panInsideBounds: function panInsideBounds(bounds, options) {
				this._enforcingBounds = true;
				var center = this.getCenter(),
				    newCenter = this._limitCenter(center, this._zoom, toLatLngBounds(bounds));

				if (!center.equals(newCenter)) {
					this.panTo(newCenter, options);
				}

				this._enforcingBounds = false;
				return this;
			},

			// @method invalidateSize(options: Zoom/Pan options): this
			// Checks if the map container size changed and updates the map if so —
			// call it after you've changed the map size dynamically, also animating
			// pan by default. If `options.pan` is `false`, panning will not occur.
			// If `options.debounceMoveend` is `true`, it will delay `moveend` event so
			// that it doesn't happen often even if the method is called many
			// times in a row.

			// @alternative
			// @method invalidateSize(animate: Boolean): this
			// Checks if the map container size changed and updates the map if so —
			// call it after you've changed the map size dynamically, also animating
			// pan by default.
			invalidateSize: function invalidateSize(options) {
				if (!this._loaded) {
					return this;
				}

				options = extend({
					animate: false,
					pan: true
				}, options === true ? { animate: true } : options);

				var oldSize = this.getSize();
				this._sizeChanged = true;
				this._lastCenter = null;

				var newSize = this.getSize(),
				    oldCenter = oldSize.divideBy(2).round(),
				    newCenter = newSize.divideBy(2).round(),
				    offset = oldCenter.subtract(newCenter);

				if (!offset.x && !offset.y) {
					return this;
				}

				if (options.animate && options.pan) {
					this.panBy(offset);
				} else {
					if (options.pan) {
						this._rawPanBy(offset);
					}

					this.fire('move');

					if (options.debounceMoveend) {
						clearTimeout(this._sizeTimer);
						this._sizeTimer = setTimeout(bind(this.fire, this, 'moveend'), 200);
					} else {
						this.fire('moveend');
					}
				}

				// @section Map state change events
				// @event resize: ResizeEvent
				// Fired when the map is resized.
				return this.fire('resize', {
					oldSize: oldSize,
					newSize: newSize
				});
			},

			// @section Methods for modifying map state
			// @method stop(): this
			// Stops the currently running `panTo` or `flyTo` animation, if any.
			stop: function stop() {
				this.setZoom(this._limitZoom(this._zoom));
				if (!this.options.zoomSnap) {
					this.fire('viewreset');
				}
				return this._stop();
			},

			// @section Geolocation methods
			// @method locate(options?: Locate options): this
			// Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
			// event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
			// and optionally sets the map view to the user's location with respect to
			// detection accuracy (or to the world view if geolocation failed).
			// Note that, if your page doesn't use HTTPS, this method will fail in
			// modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
			// See `Locate options` for more details.
			locate: function locate(options) {

				options = this._locateOptions = extend({
					timeout: 10000,
					watch: false
					// setView: false
					// maxZoom: <Number>
					// maximumAge: 0
					// enableHighAccuracy: false
				}, options);

				if (!('geolocation' in navigator)) {
					this._handleGeolocationError({
						code: 0,
						message: 'Geolocation not supported.'
					});
					return this;
				}

				var onResponse = bind(this._handleGeolocationResponse, this),
				    onError = bind(this._handleGeolocationError, this);

				if (options.watch) {
					this._locationWatchId = navigator.geolocation.watchPosition(onResponse, onError, options);
				} else {
					navigator.geolocation.getCurrentPosition(onResponse, onError, options);
				}
				return this;
			},

			// @method stopLocate(): this
			// Stops watching location previously initiated by `map.locate({watch: true})`
			// and aborts resetting the map view if map.locate was called with
			// `{setView: true}`.
			stopLocate: function stopLocate() {
				if (navigator.geolocation && navigator.geolocation.clearWatch) {
					navigator.geolocation.clearWatch(this._locationWatchId);
				}
				if (this._locateOptions) {
					this._locateOptions.setView = false;
				}
				return this;
			},

			_handleGeolocationError: function _handleGeolocationError(error) {
				var c = error.code,
				    message = error.message || (c === 1 ? 'permission denied' : c === 2 ? 'position unavailable' : 'timeout');

				if (this._locateOptions.setView && !this._loaded) {
					this.fitWorld();
				}

				// @section Location events
				// @event locationerror: ErrorEvent
				// Fired when geolocation (using the [`locate`](#map-locate) method) failed.
				this.fire('locationerror', {
					code: c,
					message: 'Geolocation error: ' + message + '.'
				});
			},

			_handleGeolocationResponse: function _handleGeolocationResponse(pos) {
				var lat = pos.coords.latitude,
				    lng = pos.coords.longitude,
				    latlng = new LatLng(lat, lng),
				    bounds = latlng.toBounds(pos.coords.accuracy),
				    options = this._locateOptions;

				if (options.setView) {
					var zoom = this.getBoundsZoom(bounds);
					this.setView(latlng, options.maxZoom ? Math.min(zoom, options.maxZoom) : zoom);
				}

				var data = {
					latlng: latlng,
					bounds: bounds,
					timestamp: pos.timestamp
				};

				for (var i in pos.coords) {
					if (typeof pos.coords[i] === 'number') {
						data[i] = pos.coords[i];
					}
				}

				// @event locationfound: LocationEvent
				// Fired when geolocation (using the [`locate`](#map-locate) method)
				// went successfully.
				this.fire('locationfound', data);
			},

			// TODO handler.addTo
			// TODO Appropiate docs section?
			// @section Other Methods
			// @method addHandler(name: String, HandlerClass: Function): this
			// Adds a new `Handler` to the map, given its name and constructor function.
			addHandler: function addHandler(name, HandlerClass) {
				if (!HandlerClass) {
					return this;
				}

				var handler = this[name] = new HandlerClass(this);

				this._handlers.push(handler);

				if (this.options[name]) {
					handler.enable();
				}

				return this;
			},

			// @method remove(): this
			// Destroys the map and clears all related event listeners.
			remove: function remove() {

				this._initEvents(true);

				if (this._containerId !== this._container._leaflet_id) {
					throw new Error('Map container is being reused by another instance');
				}

				try {
					// throws error in IE6-8
					delete this._container._leaflet_id;
					delete this._containerId;
				} catch (e) {
					/*eslint-disable */
					this._container._leaflet_id = undefined;
					/*eslint-enable */
					this._containerId = undefined;
				}

				_remove(this._mapPane);

				if (this._clearControlPos) {
					this._clearControlPos();
				}

				this._clearHandlers();

				if (this._loaded) {
					// @section Map state change events
					// @event unload: Event
					// Fired when the map is destroyed with [remove](#map-remove) method.
					this.fire('unload');
				}

				var i;
				for (i in this._layers) {
					this._layers[i].remove();
				}
				for (i in this._panes) {
					_remove(this._panes[i]);
				}

				this._layers = [];
				this._panes = [];
				delete this._mapPane;
				delete this._renderer;

				return this;
			},

			// @section Other Methods
			// @method createPane(name: String, container?: HTMLElement): HTMLElement
			// Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
			// then returns it. The pane is created as a child of `container`, or
			// as a child of the main map pane if not set.
			createPane: function createPane(name, container) {
				var className = 'leaflet-pane' + (name ? ' leaflet-' + name.replace('Pane', '') + '-pane' : ''),
				    pane = create$1('div', className, container || this._mapPane);

				if (name) {
					this._panes[name] = pane;
				}
				return pane;
			},

			// @section Methods for Getting Map State

			// @method getCenter(): LatLng
			// Returns the geographical center of the map view
			getCenter: function getCenter() {
				this._checkIfLoaded();

				if (this._lastCenter && !this._moved()) {
					return this._lastCenter;
				}
				return this.layerPointToLatLng(this._getCenterLayerPoint());
			},

			// @method getZoom(): Number
			// Returns the current zoom level of the map view
			getZoom: function getZoom() {
				return this._zoom;
			},

			// @method getBounds(): LatLngBounds
			// Returns the geographical bounds visible in the current map view
			getBounds: function getBounds() {
				var bounds = this.getPixelBounds(),
				    sw = this.unproject(bounds.getBottomLeft()),
				    ne = this.unproject(bounds.getTopRight());

				return new LatLngBounds(sw, ne);
			},

			// @method getMinZoom(): Number
			// Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
			getMinZoom: function getMinZoom() {
				return this.options.minZoom === undefined ? this._layersMinZoom || 0 : this.options.minZoom;
			},

			// @method getMaxZoom(): Number
			// Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
			getMaxZoom: function getMaxZoom() {
				return this.options.maxZoom === undefined ? this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom : this.options.maxZoom;
			},

			// @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean): Number
			// Returns the maximum zoom level on which the given bounds fit to the map
			// view in its entirety. If `inside` (optional) is set to `true`, the method
			// instead returns the minimum zoom level on which the map view fits into
			// the given bounds in its entirety.
			getBoundsZoom: function getBoundsZoom(bounds, inside, padding) {
				// (LatLngBounds[, Boolean, Point]) -> Number
				bounds = toLatLngBounds(bounds);
				padding = toPoint(padding || [0, 0]);

				var zoom = this.getZoom() || 0,
				    min = this.getMinZoom(),
				    max = this.getMaxZoom(),
				    nw = bounds.getNorthWest(),
				    se = bounds.getSouthEast(),
				    size = this.getSize().subtract(padding),
				    boundsSize = toBounds(this.project(se, zoom), this.project(nw, zoom)).getSize(),
				    snap = any3d ? this.options.zoomSnap : 1,
				    scalex = size.x / boundsSize.x,
				    scaley = size.y / boundsSize.y,
				    scale = inside ? Math.max(scalex, scaley) : Math.min(scalex, scaley);

				zoom = this.getScaleZoom(scale, zoom);

				if (snap) {
					zoom = Math.round(zoom / (snap / 100)) * (snap / 100); // don't jump if within 1% of a snap level
					zoom = inside ? Math.ceil(zoom / snap) * snap : Math.floor(zoom / snap) * snap;
				}

				return Math.max(min, Math.min(max, zoom));
			},

			// @method getSize(): Point
			// Returns the current size of the map container (in pixels).
			getSize: function getSize() {
				if (!this._size || this._sizeChanged) {
					this._size = new Point(this._container.clientWidth || 0, this._container.clientHeight || 0);

					this._sizeChanged = false;
				}
				return this._size.clone();
			},

			// @method getPixelBounds(): Bounds
			// Returns the bounds of the current map view in projected pixel
			// coordinates (sometimes useful in layer and overlay implementations).
			getPixelBounds: function getPixelBounds(center, zoom) {
				var topLeftPoint = this._getTopLeftPoint(center, zoom);
				return new Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
			},

			// TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
			// the map pane? "left point of the map layer" can be confusing, specially
			// since there can be negative offsets.
			// @method getPixelOrigin(): Point
			// Returns the projected pixel coordinates of the top left point of
			// the map layer (useful in custom layer and overlay implementations).
			getPixelOrigin: function getPixelOrigin() {
				this._checkIfLoaded();
				return this._pixelOrigin;
			},

			// @method getPixelWorldBounds(zoom?: Number): Bounds
			// Returns the world's bounds in pixel coordinates for zoom level `zoom`.
			// If `zoom` is omitted, the map's current zoom level is used.
			getPixelWorldBounds: function getPixelWorldBounds(zoom) {
				return this.options.crs.getProjectedBounds(zoom === undefined ? this.getZoom() : zoom);
			},

			// @section Other Methods

			// @method getPane(pane: String|HTMLElement): HTMLElement
			// Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
			getPane: function getPane(pane) {
				return typeof pane === 'string' ? this._panes[pane] : pane;
			},

			// @method getPanes(): Object
			// Returns a plain object containing the names of all [panes](#map-pane) as keys and
			// the panes as values.
			getPanes: function getPanes() {
				return this._panes;
			},

			// @method getContainer: HTMLElement
			// Returns the HTML element that contains the map.
			getContainer: function getContainer() {
				return this._container;
			},

			// @section Conversion Methods

			// @method getZoomScale(toZoom: Number, fromZoom: Number): Number
			// Returns the scale factor to be applied to a map transition from zoom level
			// `fromZoom` to `toZoom`. Used internally to help with zoom animations.
			getZoomScale: function getZoomScale(toZoom, fromZoom) {
				// TODO replace with universal implementation after refactoring projections
				var crs = this.options.crs;
				fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
				return crs.scale(toZoom) / crs.scale(fromZoom);
			},

			// @method getScaleZoom(scale: Number, fromZoom: Number): Number
			// Returns the zoom level that the map would end up at, if it is at `fromZoom`
			// level and everything is scaled by a factor of `scale`. Inverse of
			// [`getZoomScale`](#map-getZoomScale).
			getScaleZoom: function getScaleZoom(scale, fromZoom) {
				var crs = this.options.crs;
				fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
				var zoom = crs.zoom(scale * crs.scale(fromZoom));
				return isNaN(zoom) ? Infinity : zoom;
			},

			// @method project(latlng: LatLng, zoom: Number): Point
			// Projects a geographical coordinate `LatLng` according to the projection
			// of the map's CRS, then scales it according to `zoom` and the CRS's
			// `Transformation`. The result is pixel coordinate relative to
			// the CRS origin.
			project: function project(latlng, zoom) {
				zoom = zoom === undefined ? this._zoom : zoom;
				return this.options.crs.latLngToPoint(toLatLng(latlng), zoom);
			},

			// @method unproject(point: Point, zoom: Number): LatLng
			// Inverse of [`project`](#map-project).
			unproject: function unproject(point, zoom) {
				zoom = zoom === undefined ? this._zoom : zoom;
				return this.options.crs.pointToLatLng(toPoint(point), zoom);
			},

			// @method layerPointToLatLng(point: Point): LatLng
			// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
			// returns the corresponding geographical coordinate (for the current zoom level).
			layerPointToLatLng: function layerPointToLatLng(point) {
				var projectedPoint = toPoint(point).add(this.getPixelOrigin());
				return this.unproject(projectedPoint);
			},

			// @method latLngToLayerPoint(latlng: LatLng): Point
			// Given a geographical coordinate, returns the corresponding pixel coordinate
			// relative to the [origin pixel](#map-getpixelorigin).
			latLngToLayerPoint: function latLngToLayerPoint(latlng) {
				var projectedPoint = this.project(toLatLng(latlng))._round();
				return projectedPoint._subtract(this.getPixelOrigin());
			},

			// @method wrapLatLng(latlng: LatLng): LatLng
			// Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
			// map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
			// CRS's bounds.
			// By default this means longitude is wrapped around the dateline so its
			// value is between -180 and +180 degrees.
			wrapLatLng: function wrapLatLng(latlng) {
				return this.options.crs.wrapLatLng(toLatLng(latlng));
			},

			// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
			// Returns a `LatLngBounds` with the same size as the given one, ensuring that
			// its center is within the CRS's bounds.
			// By default this means the center longitude is wrapped around the dateline so its
			// value is between -180 and +180 degrees, and the majority of the bounds
			// overlaps the CRS's bounds.
			wrapLatLngBounds: function wrapLatLngBounds(latlng) {
				return this.options.crs.wrapLatLngBounds(toLatLngBounds(latlng));
			},

			// @method distance(latlng1: LatLng, latlng2: LatLng): Number
			// Returns the distance between two geographical coordinates according to
			// the map's CRS. By default this measures distance in meters.
			distance: function distance(latlng1, latlng2) {
				return this.options.crs.distance(toLatLng(latlng1), toLatLng(latlng2));
			},

			// @method containerPointToLayerPoint(point: Point): Point
			// Given a pixel coordinate relative to the map container, returns the corresponding
			// pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
			containerPointToLayerPoint: function containerPointToLayerPoint(point) {
				// (Point)
				return toPoint(point).subtract(this._getMapPanePos());
			},

			// @method layerPointToContainerPoint(point: Point): Point
			// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
			// returns the corresponding pixel coordinate relative to the map container.
			layerPointToContainerPoint: function layerPointToContainerPoint(point) {
				// (Point)
				return toPoint(point).add(this._getMapPanePos());
			},

			// @method containerPointToLatLng(point: Point): LatLng
			// Given a pixel coordinate relative to the map container, returns
			// the corresponding geographical coordinate (for the current zoom level).
			containerPointToLatLng: function containerPointToLatLng(point) {
				var layerPoint = this.containerPointToLayerPoint(toPoint(point));
				return this.layerPointToLatLng(layerPoint);
			},

			// @method latLngToContainerPoint(latlng: LatLng): Point
			// Given a geographical coordinate, returns the corresponding pixel coordinate
			// relative to the map container.
			latLngToContainerPoint: function latLngToContainerPoint(latlng) {
				return this.layerPointToContainerPoint(this.latLngToLayerPoint(toLatLng(latlng)));
			},

			// @method mouseEventToContainerPoint(ev: MouseEvent): Point
			// Given a MouseEvent object, returns the pixel coordinate relative to the
			// map container where the event took place.
			mouseEventToContainerPoint: function mouseEventToContainerPoint(e) {
				return getMousePosition(e, this._container);
			},

			// @method mouseEventToLayerPoint(ev: MouseEvent): Point
			// Given a MouseEvent object, returns the pixel coordinate relative to
			// the [origin pixel](#map-getpixelorigin) where the event took place.
			mouseEventToLayerPoint: function mouseEventToLayerPoint(e) {
				return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
			},

			// @method mouseEventToLatLng(ev: MouseEvent): LatLng
			// Given a MouseEvent object, returns geographical coordinate where the
			// event took place.
			mouseEventToLatLng: function mouseEventToLatLng(e) {
				// (MouseEvent)
				return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
			},

			// map initialization methods

			_initContainer: function _initContainer(id) {
				var container = this._container = get(id);

				if (!container) {
					throw new Error('Map container not found.');
				} else if (container._leaflet_id) {
					throw new Error('Map container is already initialized.');
				}

				on(container, 'scroll', this._onScroll, this);
				this._containerId = stamp(container);
			},

			_initLayout: function _initLayout() {
				var container = this._container;

				this._fadeAnimated = this.options.fadeAnimation && any3d;

				addClass(container, 'leaflet-container' + (touch ? ' leaflet-touch' : '') + (retina ? ' leaflet-retina' : '') + (ielt9 ? ' leaflet-oldie' : '') + (safari ? ' leaflet-safari' : '') + (this._fadeAnimated ? ' leaflet-fade-anim' : ''));

				var position = getStyle(container, 'position');

				if (position !== 'absolute' && position !== 'relative' && position !== 'fixed') {
					container.style.position = 'relative';
				}

				this._initPanes();

				if (this._initControlPos) {
					this._initControlPos();
				}
			},

			_initPanes: function _initPanes() {
				var panes = this._panes = {};
				this._paneRenderers = {};

				// @section
				//
				// Panes are DOM elements used to control the ordering of layers on the map. You
				// can access panes with [`map.getPane`](#map-getpane) or
				// [`map.getPanes`](#map-getpanes) methods. New panes can be created with the
				// [`map.createPane`](#map-createpane) method.
				//
				// Every map has the following default panes that differ only in zIndex.
				//
				// @pane mapPane: HTMLElement = 'auto'
				// Pane that contains all other map panes

				this._mapPane = this.createPane('mapPane', this._container);
				setPosition(this._mapPane, new Point(0, 0));

				// @pane tilePane: HTMLElement = 200
				// Pane for `GridLayer`s and `TileLayer`s
				this.createPane('tilePane');
				// @pane overlayPane: HTMLElement = 400
				// Pane for vector overlays (`Path`s), like `Polyline`s and `Polygon`s
				this.createPane('shadowPane');
				// @pane shadowPane: HTMLElement = 500
				// Pane for overlay shadows (e.g. `Marker` shadows)
				this.createPane('overlayPane');
				// @pane markerPane: HTMLElement = 600
				// Pane for `Icon`s of `Marker`s
				this.createPane('markerPane');
				// @pane tooltipPane: HTMLElement = 650
				// Pane for tooltip.
				this.createPane('tooltipPane');
				// @pane popupPane: HTMLElement = 700
				// Pane for `Popup`s.
				this.createPane('popupPane');

				if (!this.options.markerZoomAnimation) {
					addClass(panes.markerPane, 'leaflet-zoom-hide');
					addClass(panes.shadowPane, 'leaflet-zoom-hide');
				}
			},

			// private methods that modify map state

			// @section Map state change events
			_resetView: function _resetView(center, zoom) {
				setPosition(this._mapPane, new Point(0, 0));

				var loading = !this._loaded;
				this._loaded = true;
				zoom = this._limitZoom(zoom);

				this.fire('viewprereset');

				var zoomChanged = this._zoom !== zoom;
				this._moveStart(zoomChanged)._move(center, zoom)._moveEnd(zoomChanged);

				// @event viewreset: Event
				// Fired when the map needs to redraw its content (this usually happens
				// on map zoom or load). Very useful for creating custom overlays.
				this.fire('viewreset');

				// @event load: Event
				// Fired when the map is initialized (when its center and zoom are set
				// for the first time).
				if (loading) {
				}
			},
