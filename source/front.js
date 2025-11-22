/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */

!function(){"use strict";function e(e){function t(t,n){var s,h,k=t==window,y=n&&void 0!==n.message?n.message:void 0;if(n=e.extend({},e.blockUI.defaults,n||{}),!n.ignoreIfBlocked||!e(t).data("blockUI.isBlocked")){if(n.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,n.overlayCSS||{}),s=e.extend({},e.blockUI.defaults.css,n.css||{}),n.onOverlayClick&&(n.overlayCSS.cursor="pointer"),h=e.extend({},e.blockUI.defaults.themedCSS,n.themedCSS||{}),y=void 0===y?n.message:y,k&&p&&o(window,{fadeOut:0}),y&&"string"!=typeof y&&(y.parentNode||y.jquery)){var m=y.jquery?y[0]:y,v={};e(t).data("blockUI.history",v),v.el=m,v.parent=m.parentNode,v.display=m.style.display,v.position=m.style.position,v.parent&&v.parent.removeChild(m)}e(t).data("blockUI.onUnblock",n.onUnblock);var g,I,w,U,x=n.baseZ;g=e(r||n.forceIframe?'<iframe class="blockUI" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+n.iframeSrc+'"></iframe>':'<div class="blockUI" style="display:none"></div>'),I=e(n.theme?'<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+x++ +';display:none"></div>':'<div class="blockUI blockOverlay" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),n.theme&&k?(U='<div class="blockUI '+n.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:fixed">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):n.theme?(U='<div class="blockUI '+n.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:absolute">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):U=k?'<div class="blockUI '+n.blockMsgClass+' blockPage" style="z-index:'+(x+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+n.blockMsgClass+' blockElement" style="z-index:'+(x+10)+';display:none;position:absolute"></div>',w=e(U),y&&(n.theme?(w.css(h),w.addClass("ui-widget-content")):w.css(s)),n.theme||I.css(n.overlayCSS),I.css("position",k?"fixed":"absolute"),(r||n.forceIframe)&&g.css("opacity",0);var C=[g,I,w],S=e(k?"body":t);e.each(C,function(){this.appendTo(S)}),n.theme&&n.draggable&&e.fn.draggable&&w.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var O=f&&(!e.support.boxModel||e("object,embed",k?null:t).length>0);if(u||O){if(k&&n.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%"),(u||!e.support.boxModel)&&!k)var E=d(t,"borderTopWidth"),T=d(t,"borderLeftWidth"),M=E?"(0 - "+E+")":0,B=T?"(0 - "+T+")":0;e.each(C,function(e,t){var o=t[0].style;if(o.position="absolute",2>e)k?o.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+n.quirksmodeOffsetHack+') + "px"'):o.setExpression("height",'this.parentNode.offsetHeight + "px"'),k?o.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):o.setExpression("width",'this.parentNode.offsetWidth + "px"'),B&&o.setExpression("left",B),M&&o.setExpression("top",M);else if(n.centerY)k&&o.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),o.marginTop=0;else if(!n.centerY&&k){var i=n.css&&n.css.top?parseInt(n.css.top,10):0,s="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+i+') + "px"';o.setExpression("top",s)}})}if(y&&(n.theme?w.find(".ui-widget-content").append(y):w.append(y),(y.jquery||y.nodeType)&&e(y).show()),(r||n.forceIframe)&&n.showOverlay&&g.show(),n.fadeIn){var j=n.onBlock?n.onBlock:c,H=n.showOverlay&&!y?j:c,z=y?j:c;n.showOverlay&&I._fadeIn(n.fadeIn,H),y&&w._fadeIn(n.fadeIn,z)}else n.showOverlay&&I.show(),y&&w.show(),n.onBlock&&n.onBlock.bind(w)();if(i(1,t,n),k?(p=w[0],b=e(n.focusableElements,p),n.focusInput&&setTimeout(l,20)):a(w[0],n.centerX,n.centerY),n.timeout){var W=setTimeout(function(){k?e.unblockUI(n):e(t).unblock(n)},n.timeout);e(t).data("blockUI.timeout",W)}}}function o(t,o){var s,l=t==window,a=e(t),d=a.data("blockUI.history"),c=a.data("blockUI.timeout");c&&(clearTimeout(c),a.removeData("blockUI.timeout")),o=e.extend({},e.blockUI.defaults,o||{}),i(0,t,o),null===o.onUnblock&&(o.onUnblock=a.data("blockUI.onUnblock"),a.removeData("blockUI.onUnblock"));var r;r=l?e("body").children().filter(".blockUI").add("body > .blockUI"):a.find(">.blockUI"),o.cursorReset&&(r.length>1&&(r[1].style.cursor=o.cursorReset),r.length>2&&(r[2].style.cursor=o.cursorReset)),l&&(p=b=null),o.fadeOut?(s=r.length,r.stop().fadeOut(o.fadeOut,function(){0===--s&&n(r,d,o,t)})):n(r,d,o,t)}function n(t,o,n,i){var s=e(i);if(!s.data("blockUI.isBlocked")){t.each(function(e,t){this.parentNode&&this.parentNode.removeChild(this)}),o&&o.el&&(o.el.style.display=o.display,o.el.style.position=o.position,o.el.style.cursor="default",o.parent&&o.parent.appendChild(o.el),s.removeData("blockUI.history")),s.data("blockUI.static")&&s.css("position","static"),"function"==typeof n.onUnblock&&n.onUnblock(i,n);var l=e(document.body),a=l.width(),d=l[0].style.width;l.width(a-1).width(a),l[0].style.width=d}}function i(t,o,n){var i=o==window,l=e(o);if((t||(!i||p)&&(i||l.data("blockUI.isBlocked")))&&(l.data("blockUI.isBlocked",t),i&&n.bindEvents&&(!t||n.showOverlay))){var a="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";t?e(document).bind(a,n,s):e(document).unbind(a,s)}}function s(t){if("keydown"===t.type&&t.keyCode&&9==t.keyCode&&p&&t.data.constrainTabKey){var o=b,n=!t.shiftKey&&t.target===o[o.length-1],i=t.shiftKey&&t.target===o[0];if(n||i)return setTimeout(function(){l(i)},10),!1}var s=t.data,a=e(t.target);return a.hasClass("blockOverlay")&&s.onOverlayClick&&s.onOverlayClick(t),a.parents("div."+s.blockMsgClass).length>0?!0:0===a.parents().children().filter("div.blockUI").length}function l(e){if(b){var t=b[e===!0?b.length-1:0];t&&t.focus()}}function a(e,t,o){var n=e.parentNode,i=e.style,s=(n.offsetWidth-e.offsetWidth)/2-d(n,"borderLeftWidth"),l=(n.offsetHeight-e.offsetHeight)/2-d(n,"borderTopWidth");t&&(i.left=s>0?s+"px":"0"),o&&(i.top=l>0?l+"px":"0")}function d(t,o){return parseInt(e.css(t,o),10)||0}e.fn._fadeIn=e.fn.fadeIn;var c=e.noop||function(){},r=/MSIE/.test(navigator.userAgent),u=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),f=(document.documentMode||0,e.isFunction(document.createElement("div").style.setExpression));e.blockUI=function(e){t(window,e)},e.unblockUI=function(e){o(window,e)},e.growlUI=function(t,o,n,i){var s=e('<div class="growlUI"></div>');t&&s.append("<h1>"+t+"</h1>"),o&&s.append("<h2>"+o+"</h2>"),void 0===n&&(n=3e3);var l=function(t){t=t||{},e.blockUI({message:s,fadeIn:"undefined"!=typeof t.fadeIn?t.fadeIn:700,fadeOut:"undefined"!=typeof t.fadeOut?t.fadeOut:1e3,timeout:"undefined"!=typeof t.timeout?t.timeout:n,centerY:!1,showOverlay:!1,onUnblock:i,css:e.blockUI.defaults.growlCSS})};l();s.css("opacity");s.mouseover(function(){l({fadeIn:0,timeout:3e4});var t=e(".blockMsg");t.stop(),t.fadeTo(300,1)}).mouseout(function(){e(".blockMsg").fadeOut(1e3)})},e.fn.block=function(o){if(this[0]===window)return e.blockUI(o),this;var n=e.extend({},e.blockUI.defaults,o||{});return this.each(function(){var t=e(this);n.ignoreIfBlocked&&t.data("blockUI.isBlocked")||t.unblock({fadeOut:0})}),this.each(function(){"static"==e.css(this,"position")&&(this.style.position="relative",e(this).data("blockUI.static",!0)),this.style.zoom=1,t(this,o)})},e.fn.unblock=function(t){return this[0]===window?(e.unblockUI(t),this):this.each(function(){o(this,t)})},e.blockUI.version=2.7,e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var p=null,b=[]}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}();

// jQuery toastr version 2.1.4
$('head').append('<link rel="stylesheet" type="text/css" href="//cdn.xuansiwei.com/common/lib/vuexy/7.0.0/app-assets/vendors/css/extensions/toastr.min.css">');
$('head').append('<link rel="stylesheet" type="text/css" href="//cdn.xuansiwei.com/common/lib/vuexy/7.0.0/app-assets/css/plugins/extensions/ext-component-toastr.css">');
// 兼容性样式
$('head').append(`<style>
    .toast:after {
        top: calc(15px + (24px - 1rem) / 2);
        left: calc(1rem + (24px - 1rem) / 2);
    }
</style>`);
!function (a) { a(["jquery"], function (a) { return function () { function h(a, b, c) { return u({ type: e.error, iconClass: v().iconClasses.error, message: a, optionsOverride: c, title: b }) } function i(c, d) { return c || (c = v()), b = a("#" + c.containerId), b.length ? b : (d && (b = r(c)), b) } function j(a, b, c) { return u({ type: e.info, iconClass: v().iconClasses.info, message: a, optionsOverride: c, title: b }) } function k(a) { c = a } function l(a, b, c) { return u({ type: e.success, iconClass: v().iconClasses.success, message: a, optionsOverride: c, title: b }) } function m(a, b, c) { return u({ type: e.warning, iconClass: v().iconClasses.warning, message: a, optionsOverride: c, title: b }) } function n(a, c) { var d = v(); b || i(d), q(a, d, c) || p(d) } function o(c) { var d = v(); return b || i(d), c && 0 === a(":focus", c).length ? void w(c) : void (b.children().length && b.remove()) } function p(c) { for (var d = b.children(), e = d.length - 1; e >= 0; e--)q(a(d[e]), c) } function q(b, c, d) { var e = !(!d || !d.force) && d.force; return !(!b || !e && 0 !== a(":focus", b).length) && (b[c.hideMethod]({ duration: c.hideDuration, easing: c.hideEasing, complete: function () { w(b) } }), !0) } function r(c) { return b = a("<div/>").attr("id", c.containerId).addClass("toast-container").addClass(c.positionClass), b.appendTo(a(c.target)), b } function s() { return { tapToDismiss: !0, toastClass: "toast", containerId: "toast-container", debug: !1, showMethod: "fadeIn", showDuration: 300, showEasing: "swing", onShown: void 0, hideMethod: "fadeOut", hideDuration: 1e3, hideEasing: "swing", onHidden: void 0, closeMethod: !1, closeDuration: !1, closeEasing: !1, closeOnHover: !0, extendedTimeOut: 1e3, iconClasses: { error: "toast-error", info: "toast-info", success: "toast-success", warning: "toast-warning" }, iconClass: "toast-info", positionClass: "toast-top-right", timeOut: 5e3, titleClass: "toast-title", messageClass: "toast-message", escapeHtml: !1, target: "body", closeHtml: '<button type="button">&times;</button>', closeClass: "toast-close-button", newestOnTop: !0, preventDuplicates: !1, progressBar: !1, progressClass: "toast-progress", rtl: !1 } } function t(a) { c && c(a) } function u(c) { function q(a) { return null == a && (a = ""), a.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") } function r() { y(), A(), B(), C(), D(), E(), z(), s() } function s() { var a = ""; switch (c.iconClass) { case "toast-success": case "toast-info": a = "polite"; break; default: a = "assertive" }j.attr("aria-live", a) } function u() { e.closeOnHover && j.hover(I, H), !e.onclick && e.tapToDismiss && j.click(G), e.closeButton && n && n.click(function (a) { a.stopPropagation ? a.stopPropagation() : void 0 !== a.cancelBubble && a.cancelBubble !== !0 && (a.cancelBubble = !0), e.onCloseClick && e.onCloseClick(a), G(!0) }), e.onclick && j.click(function (a) { e.onclick(a), G() }) } function x() { j.hide(), j[e.showMethod]({ duration: e.showDuration, easing: e.showEasing, complete: e.onShown }), e.timeOut > 0 && (h = setTimeout(G, e.timeOut), o.maxHideTime = parseFloat(e.timeOut), o.hideEta = (new Date).getTime() + o.maxHideTime, e.progressBar && (o.intervalId = setInterval(J, 10))) } function y() { c.iconClass && j.addClass(e.toastClass).addClass(f) } function z() { e.newestOnTop ? b.prepend(j) : b.append(j) } function A() { if (c.title) { var a = c.title; e.escapeHtml && (a = q(c.title)), k.append(a).addClass(e.titleClass), j.append(k) } } function B() { if (c.message) { var a = c.message; e.escapeHtml && (a = q(c.message)), l.append(a).addClass(e.messageClass), j.append(l) } } function C() { e.closeButton && (n.addClass(e.closeClass).attr("role", "button"), j.prepend(n)) } function D() { e.progressBar && (m.addClass(e.progressClass), j.prepend(m)) } function E() { e.rtl && j.addClass("rtl") } function F(a, b) { if (a.preventDuplicates) { if (b.message === g) return !0; g = b.message } return !1 } function G(b) { var c = b && e.closeMethod !== !1 ? e.closeMethod : e.hideMethod, d = b && e.closeDuration !== !1 ? e.closeDuration : e.hideDuration, f = b && e.closeEasing !== !1 ? e.closeEasing : e.hideEasing; if (!a(":focus", j).length || b) return clearTimeout(o.intervalId), j[c]({ duration: d, easing: f, complete: function () { w(j), clearTimeout(h), e.onHidden && "hidden" !== p.state && e.onHidden(), p.state = "hidden", p.endTime = new Date, t(p) } }) } function H() { (e.timeOut > 0 || e.extendedTimeOut > 0) && (h = setTimeout(G, e.extendedTimeOut), o.maxHideTime = parseFloat(e.extendedTimeOut), o.hideEta = (new Date).getTime() + o.maxHideTime) } function I() { clearTimeout(h), o.hideEta = 0, j.stop(!0, !0)[e.showMethod]({ duration: e.showDuration, easing: e.showEasing }) } function J() { var a = (o.hideEta - (new Date).getTime()) / o.maxHideTime * 100; m.width(a + "%") } var e = v(), f = c.iconClass || e.iconClass; if ("undefined" != typeof c.optionsOverride && (e = a.extend(e, c.optionsOverride), f = c.optionsOverride.iconClass || f), !F(e, c)) { d++ , b = i(e, !0); var h = null, j = a("<div/>"), k = a("<div/>"), l = a("<div/>"), m = a("<div/>"), n = a(e.closeHtml), o = { intervalId: null, hideEta: null, maxHideTime: null }, p = { toastId: d, state: "visible", startTime: new Date, options: e, map: c }; return r(), x(), u(), t(p), e.debug && console && console.log(p), j } } function v() { return a.extend({}, s(), f.options) } function w(a) { b || (b = i()), a.is(":visible") || (a.remove(), a = null, 0 === b.children().length && (b.remove(), g = void 0)) } var b, c, g, d = 0, e = { error: "error", info: "info", success: "success", warning: "warning" }, f = { clear: n, remove: o, error: h, getContainer: i, info: j, options: {}, subscribe: k, success: l, version: "2.1.3", warning: m }; return f }() }) }("function" == typeof define && define.amd ? define : function (a, b) { "undefined" != typeof module && module.exports ? module.exports = b(require("jquery")) : window.toastr = b(window.jQuery) });

function addToastr() {
    $('head').append('<link rel="stylesheet" type="text/css" href="//cdn.xuansiwei.com/common/lib/vuexy/7.0.0/app-assets/vendors/css/extensions/toastr.min.css">');
    $('head').append('<link rel="stylesheet" type="text/css" href="//cdn.xuansiwei.com/common/lib/vuexy/7.0.0/app-assets/css/plugins/extensions/ext-component-toastr.css">');
    // 兼容性样式
    $('head').append(`<style>
        .toast:after {
            top: calc(15px + (24px - 1rem) / 2);
            left: calc(1rem + (24px - 1rem) / 2);
        }
    </style>`);
    $('body').append('<script src="//cdn.xuansiwei.com/common/lib/vuexy/7.0.0/app-assets/vendors/js/extensions/toastr.min.js"></script>')
}
// http请求相关
const jiaogeiwo_http = {
    get: (url, {showLoading = false, showError = true, showSuccess = false} = {}) => {
        showLoading && $.blockUI({
            message: '<div class="spinner-border text-white" role="status"></div>',
            css: {
                backgroundColor: 'transparent',
                border: '0'
            },
            overlayCSS: {
                opacity: 0.5
            }
        });
        const token = localStorage.getItem('token');
        return fetch(url.indexOf('http') === 0 ? url : `${jiaogeiwo.vars.origin}/api/admin/md/${jiaogeiwo.vars.dir}/${jiaogeiwo.vars.project}/${url}`, {
                headers: {
                    Authorization: token
                },
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 0) {
                    showSuccess && toastr['success']('', data.message || '保存成功', {
                        positionClass: 'toast-top-center',
                        showMethod: 'slideDown',
                        hideMethod: 'slideUp',
                        closeButton: true,
                        tapToDismiss: false,
                        rtl: false
                    });
                    return data;
                }
                if (data.status === -1 && data.message === '无效的token') {
                    localStorage.setItem('lastpath', location.pathname + location.search);
                    location.href = '/member/auth/login.html';
                }
                showError && toastr['error'](data.message, '错误', {
                    positionClass: 'toast-top-center',
                    showMethod: 'slideDown',
                    hideMethod: 'slideUp',
                    closeButton: true,
                    tapToDismiss: false,
                    rtl: false
                });
                return Promise.reject(data);
            })
            .finally(() => {
                console.info('finally')
                showLoading && $.unblockUI();
            })
    },
    post: (url, data = {}, {showLoading = true, showError = true, showSuccess = true} = {}) => {
        showLoading && $.blockUI({
            message: '<div class="spinner-border text-white" role="status"></div>',
            css: {
                backgroundColor: 'transparent',
                border: '0'
            },
            overlayCSS: {
                opacity: 0.5
            }
        });
        const token = localStorage.getItem('token');
        return fetch(url.indexOf('http') === 0 ? url : `${jiaogeiwo.vars.origin}/api/admin/md/${jiaogeiwo.vars.dir}/${jiaogeiwo.vars.project}/${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 0) {
                showSuccess && toastr['success']('', data.message || '保存成功', {
                    positionClass: 'toast-top-center',
                    showMethod: 'slideDown',
                    hideMethod: 'slideUp',
                    closeButton: true,
                    tapToDismiss: false,
                    rtl: false
                });
                return data;
            }
            if (data.status === -1 && data.message === '无效的token') {
                localStorage.setItem('lastpath', location.pathname + location.search);
                location.href = '/member/auth/login.html';
            }
            showError && toastr['error'](data.message, '错误', {
                positionClass: 'toast-top-center',
                showMethod: 'slideDown',
                hideMethod: 'slideUp',
                closeButton: true,
                tapToDismiss: false,
                rtl: false
            });
            return Promise.reject(data);
        })
        .finally(() => {
            console.info('finally')
            showLoading && $.unblockUI();
        })
    }
};
// 购物车相关
const jiaogeiwo_cart = {
    init: function() {
        return Promise.resolve()
            .then(() => {
                // 同步购物车数据
                if (localStorage.getItem('token')) {
                    return jiaogeiwo.http.get('user-cartGet')
                        .then((data) => {
                            console.info(data);
                            if (data.data && data.data.cart) {
                                localStorage.setItem('cart', data.data.cart);
                                jiaogeiwo.cart.items = JSON.parse(localStorage.getItem('cart')) || {};
                            }
                            if (data.grade_info) {// 会员折扣
                                if (data.grade_info.rate > 0 && data.grade_info.rate <= 1) {
                                    jiaogeiwo.cart.getDiscount = function() {
                                        return jiaogeiwo.cart.getPrices() * (1 - data.grade_info.rate);
                                    };
                                } else {
                                    console.warn('等级折扣率需在0.1-0.9之间，1为无折扣');
                                }
                            }
                        })
                }
                return Promise.resolve();
            })
            .then(() => {
                // 同步运费、税费
                return jiaogeiwo.http.get('order-config')
                    .then((data) => {
                        console.info(data);
                        if (data.data) {
                            jiaogeiwo.cart.getShipping = function() {// 运费
                                var freight_money = 0;
                                if (data.data.freights) {
                                    data.data.freights.sort((a, b) => a.order_money - b.order_money).forEach(freight => {
                                        if (jiaogeiwo.cart.getPrices() > freight.order_money) {
                                            freight_money = freight.freight_money;
                                        }
                                    });
                                }
                                if (data.data.weight) {
                                    const curr_weight = jiaogeiwo.cart.getWeight();
                                    if (curr_weight <= data.data.weight.weight_init) { // 重量小于起始重量
                                        freight_money += +data.data.weight.weight_price;
                                    } else {
                                        freight_money += +(data.data.weight.weight_price) + (Math.ceil((curr_weight - data.data.weight.weight_init) / data.data.weight.weight_prev) * data.data.weight.weight_prev_price);
                                    }
                                }
                                return freight_money;
                            };
                        }
                        if (data.data && data.data.taxs) {
                            jiaogeiwo.cart.getTax = function() { // 税费
                                if (order && order.shipping) {
                                    const tax = data.data.taxs.find(item => item.country === order.shipping.country && item.state === order.shipping.state);
                                    if (tax) {
                                        return tax.tax_money;
                                    }
                                }
                                return 0;
                            };
                        }
                    })
            })
            .then(() => {
                // 同步优惠券
            })
            .then(() => {
                // 渲染购物车
                jiaogeiwo.cart.renderCart();
            })
    },
    /* 
        item必须包含字段: id(产品id), price(单价), img(缩略图), title(标题), intro(描述)
    */
    items: JSON.parse(localStorage.getItem('cart')) || {},
    _save: function() {
        const cartData = JSON.stringify(this.items);
        localStorage.setItem('cart', cartData);
        this.renderCart();

        // 同步购物车数据
        if (localStorage.getItem('token')) {
            jiaogeiwo.http.post('user-cartSave', {
                cart: cartData
            }, {showLoading: false, showSuccess: false});
        }
    },
    getAll: function() {
        return Object.keys(this.items).map(key => {
            return this.items[key];
        });
    },
    getPrices: function() {// 商品总价格
        return this.getAll().reduce((m, n) => {
            return m + n.item.price * n.size
        }, 0)
    },
    getShipping: function() {// 运费
        return 0;
    },
    getWeight: function() {
        return this.getAll().reduce((m, n) => {
            return m + (n.item.weight || 0) * n.size
        }, 0) 
    },
    getDiscount: function() { // 折扣
        return 0;
    },
    getTax: function() { // 税费
        return 0;
    },
    getTotal: function() {// 总价格 = 商品总价格 + 运费 + 优惠券 + 税费 + 折扣
        return this.getPrices() + this.getShipping() + this.getTax() - this.getDiscount();
    },
    add: function(item, size = 1) { // 添加购物车
        if (this.items[item.id]) {
            this.items[item.id].size = +this.items[item.id].size + (+size);
        } else {
            this.items[item.id] = {
                size,
                item
            }
        }
        this._save();
        toastr['success']('Added Item In Your Cart 🛒', 'Success!', {
            closeButton: true,
            tapToDismiss: false,
            showMethod: 'slideDown',
            hideMethod: 'slideUp',
            timeOut: 2000,
        });
        // 添加后事件，通常用于更新购物车数字
        this.on.countChange();
    },
    plus: function(id) { // 增加数量
        if (this.items[id]) {
            this.items[id].size = this.items[id].size + 1;
            this._save();
        }
    },
    subtract: function (id) { // 减少数量
        if (this.items[id]) {
            if (this.items[id].size > 1) {
                this.items[id].size = this.items[id].size - 1;
            } else {
                delete this.items[id];
            }
            this._save();
        }
    },
    setSize: function(id, si) { // 改变商品数量
        if (this.items[id]) {
            this.items[id].size = si;
            this._save();
        }
    },
    delete: function(id) {
        if (this.items[id]) {
            delete this.items[id];
            this._save();    
        }
        // 删除后事件，通常用于更新购物车数字
        this.on.countChange();
    },
    deleteAll: function() {
        this.items = {};
        this._save();
        // 删除后事件，通常用于更新购物车数字
        this.on.countChange();
    },
    getCouponCode: function() { // 获取优惠码
        return '';
    },
    useCoupon: function(code) { // 使用优惠券
        return jiaogeiwo.http.get(`coupon-search?coupon_code=${code}&amount=${this.getPrices()}`)
            .then(data => {
                console.info(data);
                if (data.isFind) {
                    const coupon = data.data;
                    this.getDiscount = function() { // 折扣
                        if (coupon.discount_type === '固定的金额') {
                            return +coupon.coupon_amount
                        }
                        if (coupon.discount_type === '百分比折扣') {
                            return this.getPrices() * coupon.coupon_amount;
                        }
                        return 0;
                    };
                    this.getCouponCode = function() {
                        return coupon.coupon_code;
                    }
                }
            })
            .then(() => {
                // 渲染购物车
                jiaogeiwo.cart.renderCart();
            })
    },
    renderCart: function() {},
    on: {
        countChange: function() {
            // 公司栏目组件的购物车数量变化，如果不是用的公司栏目组件，可以重写这个方法
            $('.header-cart .navigation-badge').text(jiaogeiwo.cart.getAll().length);
        }
    }
};
// 心愿单相关
const jiaogeiwo_wishlist = {
    init: function() {
        return Promise.resolve()
            .then(() => {
                // 同步心愿单数据
                if (localStorage.getItem('token')) {
                    return jiaogeiwo.http.get('user-wishlistGet')
                        .then((data) => {
                            console.info(data);
                            if (data.data && data.data.wishlist) {
                                localStorage.setItem('wishlist', data.data.wishlist);
                                jiaogeiwo.wishlist.items = JSON.parse(localStorage.getItem('wishlist')) || {};
                            }
                        })
                }
                return Promise.resolve();
            })
            .then(() => {
                // 渲染心愿单
                jiaogeiwo.wishlist.renderWishList();
            })
    },
    /* 
        item必须包含字段: id(产品id), price(单价), img(缩略图), title(标题), intro(描述)
    */
    items: JSON.parse(localStorage.getItem('wishlist')) || [],
    _save: function() {
        const wishlistData = JSON.stringify(this.items);
        localStorage.setItem('wishlist', wishlistData);
        this.renderWishList();

        // 同步心愿单数据
        if (localStorage.getItem('token')) {
            jiaogeiwo.http.post('user-wishlistSave', {
                wishlist: wishlistData
            }, {showLoading: false, showSuccess: false});
        }
    },
    getAll: function() {
        return this.items;
    },
    add: function(item) { // 添加心愿单
        if (!this.items.find(it => it.id === item.id)) { // 找不到才添加到心愿单里面
            this.items.push(item);
        }
        this._save();
        toastr['success']('', 'Added to wishlist ❤️', {
            closeButton: true,
            tapToDismiss: false,
            showMethod: 'slideDown',
            hideMethod: 'slideUp',
            timeOut: 2000,
        });
        // 添加后事件，通常用于更新心愿单数字
        this.on.countChange();
    },
    delete: function(id) {
        this.items = this.items.filter(it => it.id !== id);
        this._save();
        
        // 删除后事件，通常用于更新心愿单数字
        this.on.countChange();
    },
    deleteAll: function() {
        this.items = {};
        this._save();
        // 删除后事件，通常用于更新心愿单数字
        this.on.countChange();
    },
    renderWishList: function() {},
    on: {
        countChange: function() {
            
        }
    }
};
// sku相关
const jiaogeiwo_sku = {
    product_id: null, // 产品id
    skus_str: null, // 多规格产品字符串
    attr_selector: null, // 属性选择器
    stock_count: null, // 单规格库存
    current_sku: null, // 多规格: 当前选中sku
    init: function(props) {
        // 重写属性、方法
        Object.keys(props).forEach(key => this[key] = props[key]);
        $(this.attr_selector).on('change', () => {
            const attr_sort_str = $(this.attr_selector).filter(':checked').map((index, elem) => $(elem).val()).get().sort().toString();
            const skus = this.skus_str.split(';').map(item => item.split('=')).map(arr => [arr[0], arr[1].split(',').sort().toString(), arr[2], arr[3], +arr[4]]);
            const index = skus.findIndex(item => item[1] === attr_sort_str);
            this.changeSkuByIndex(index);
        });

        // 获取动态库存
        jiaogeiwo.http.get(`${jiaogeiwo.vars.origin}/api/product-stock-get/${jiaogeiwo.vars.project}/${this.product_id}`)
            .then((data) => {
                console.info(data);
                if (data.data.skus) {
                    this.skus_str = data.data.skus;
                    this.changeSkuByIndex(0);
                } else if (data.data.stock_count) {
                    this.stock_count = data.data.stock_count;
                    // 修改库存展示
                    this.renderStock({sku_stock_count: data.data.stock_count});
                } else {
                    // 修改售罄展示
                    this.renderSellout();
                }
            })
    },
    renderPrice: function() {},
    renderStock: function() {},
    renderSellout: function() {},
    changeSkuByIndex: function(index) {
        const skus = this.skus_str.split(';').map(item => item.split('=')).map(arr => [arr[0], arr[1].split(','), arr[2], arr[3], +arr[4]]);
        const [sku_id, sku_attrs, sku_old_price, sku_current_price, sku_stock_count] = skus[index];
        this.current_sku = {sku_index: index, sku_id, sku_attrs, sku_old_price, sku_current_price, sku_stock_count};
        if (sku_stock_count) {
            // 修改金额展示
            this.renderPrice(this.current_sku);

            // 修改库存展示
            this.renderStock(this.current_sku);
        } else {
            // 修改售罄展示
            this.renderSellout();
        }
    }
};
// 多货币
/**
 * 使用代码
 jiaogeiwo.currency.init()
    .then((current_currency_symbol) => {
        $('#currency_change').html(jiaogeiwo.currency.currencys.map(item => {
            return '<option ' + (current_currency_symbol === item.currency_symbol ? 'selected' : '') + ' value="' + item.currency_symbol + '">' + item.currency_symbol + '</option>';
        }));

        // 替换货币值
        if (current_currency_symbol) {
            const current_currency_obj = jiaogeiwo.currency.currencys.find(item => item.currency_symbol === current_currency_symbol)
            $('[currency]').each((index, elem) => {
                $(elem).html(current_currency_obj.currency_symbol + ($(elem).attr('currency') * current_currency_obj.currency_ratio).toFixed(2))
            })
        }
    })
 */
const jiaogeiwo_currency = {
    currencys: [],
    init: function() {
        // 获取动态库存
        return jiaogeiwo.http.get('order-config')
            .then((data) => {
                console.info(data);
                if (data.data.currencys) {
                    this.currencys = data.data.currencys;
                    const default_currency = data.data.currencys.find(item => item.currency_is_default.length > 0) || {};
                    const current_currency_symbol = localStorage.getItem('current_currency_symbol') || default_currency.currency_symbol;
                    return current_currency_symbol;
                }
            })
    },
    change: function(value) {
        localStorage.setItem('current_currency_symbol', value);
        location.reload();
    }
}
if (typeof toastr !== 'object') {
    addToastr();
}
window.jiaogeiwo = {
    ...window.jiaogeiwo,
    http: jiaogeiwo_http,
    cart: jiaogeiwo_cart,
    wishlist: jiaogeiwo_wishlist,
    sku: jiaogeiwo_sku,
    currency: jiaogeiwo_currency
};