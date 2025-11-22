/**
 * 默认跳转到指定语言
 * 默认调整到英文: jumpLang('en');
 * 
 */
function jumpLang(lang) {
    // 只有直接访问域名才用
    if (location.pathname === '/') {
        location.href = '/' + lang;
    }
}

/**
 * 手机端显示pc端网页
 */
 function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        // window.location.href = 'm' + location.pathname + location.search;
        document.querySelector('head').innerHTML += '<meta name="viewport" content="width=1200px, initial-scale=0.3">'
    }
}

/**
 * 显示文章、产品模块的移动端详情字段
 */
function showMContent(m_content_url) {
    return `${m_content_url ? `<script src="//cdn.xuansiwei.com/${m_content_url}.js"></script>` : ''}`;
}

/**
 * 文章、产品详情实现图片异步加载
 */
function laodLazyPcContent(pc_content_url) {
    return `
        <div class="pc_content"></div>
        <script>
            $.ajax({
                url: '//cdn.xuansiwei.com/${pc_content_url}.txt', 
                async: false, 
                success: function(txt){
                    var content = txt.replace(/src="(.+?)"/g, (word, a) => \`src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" data-src="\${a}" style="max-width: 100%; min-height: 200px"\`);
                    $('.pc_content').html(content);
                }
            });
        </script>
    `
}

/**
 * 网站是否被嵌在iframe中
 */
function isIframe() {
    return self !== top;
}

/**
 * 301重定向
 */
function redirectToWWW() {
    if (location.hostname.split('.').length === 2) {
        location.href = location.protocol + '//www.' + location.host + location.pathname;
    }
}

/**
 * 屏蔽中国ip代码
 */
function shieldChina() {
    document.writeln('<script src="//pv.sohu.com/cityjson?ie=utf-8"></script>');
    document.writeln(`
        <script>
            // 屏蔽中国ip
            if (location.host.indexOf('caihongjianzhan.com') === -1 && /[\u4e00-\u9fa5]/g.test(returnCitySN.cname)) {
                location.href = "http://www.baidu.com";
            }
        </script>
    `);
}

/**
 * 禁止页面复制
 */
function banCopy() {
    document.writeln(`
        <script>  
            document.oncontextmenu=new Function("event.returnValue=false");  
            document.onselectstart=new Function("event.returnValue=false");  
        </script> 
    `);
}