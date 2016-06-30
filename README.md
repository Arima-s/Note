# Note

# HTML  
    
    
    #doctype 
        （1）<!DOCTYPE>声明位于位于HTML文档中的第一行，处于 <html> 标签之前。告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。
        （2）标准模式的排版 和JS运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作。

    #HTML5 为什么只需要写 <!DOCTYPE HTML>？
    
         HTML5 不基于 SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）；
         而HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。
     
    #行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？
        首先：CSS规范规定，每个元素都有display属性，确定该元素的类型，每个元素都有默认的display值，如div的display默认值为“block”，则为“块级”元素；span默认display属性值为“inline”，是“行内”元素。
        
        （1）行内元素有：a b span img input select strong（强调的语气）
        （2）块级元素有：div ul ol li dl dt dd h1 h2 h3 h4…p
        
        （3）常见的空元素：
            <br> <hr> <img> <input> <link> <meta>
            鲜为人知的是：
            <area> <base> <col> <command> <embed> <keygen> <param> <source> <track> <wbr>
            
    #页面导入样式时，使用link和@import有什么区别？
    
    （1）link属于XHTML标签，除了加载CSS外，还能用于定义RSS, 定义rel连接属性等作用；而@import是CSS提供的，只能用于加载CSS;
    
    （2）页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;
    
    （3）import是CSS2.1 提出的，只在IE5以上才能被识别，而link是XHTML标签，无兼容问题;
    
    介绍一下你对浏览器内核的理解？
    
        主要分成两部分：渲染引擎(layout engineer或Rendering Engine)和JS引擎。
        渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。
        JS引擎则：解析和执行javascript来实现网页的动态效果。
        最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。
    
    常见的浏览器内核有哪些？
    
        Trident内核：IE,MaxThon,TT,The World,360,搜狗浏览器等。[又称MSHTML]
        Gecko内核：Netscape6及以上版本，FF,MozillaSuite/SeaMonkey等
        Presto内核：Opera7及以上。      [Opera内核原为：Presto，现为：Blink;]
        Webkit内核：Safari,Chrome等。   [ Chrome的：Blink（WebKit的分支）]
        
    html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？
    
    * HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。
          绘画 canvas;
          用于媒介回放的 video 和 audio 元素;
          本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失;
          sessionStorage 的数据在浏览器关闭后自动删除;
          语意化更好的内容元素，比如 article、footer、header、nav、section;
          表单控件，calendar、date、time、email、url、search;
          新的技术webworker, websocket, Geolocation;
    
      移除的元素：
          纯表现的元素：basefont，big，center，font, s，strike，tt，u;
          对可用性产生负面影响的元素：frame，frameset，noframes；
    
    * 支持HTML5新标签：
         IE8/IE7/IE6支持通过document.createElement方法产生的标签，
         可以利用这一特性让这些浏览器支持HTML5新标签，
         浏览器支持新标签后，还需要添加标签默认的样式。
    
         当然也可以直接使用成熟的框架、比如html5shim;
         <!--[if lt IE 9]>
            <script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>
         <![endif]-->
    
    * 如何区分HTML5： DOCTYPE声明\新增的结构元素\功能元素
    
    
    简述一下你对HTML语义化的理解？
    
        1，去掉或者丢失样式的时候能够让页面呈现出清晰的结构
        2，有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；
        3，方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；
        4，便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。
        
    HTML5的离线储存怎么使用，工作原理能不能解释一下？
        在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。
        原理：HTML5的离线存储是基于一个新建的.appcache文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。
    
        如何使用：
          1、页面头部像下面一样加入一个manifest的属性；
          2、在cache.manifest文件的编写离线存储的资源；
              CACHE MANIFEST
              #v0.11
              CACHE:
              js/app.js
              css/style.css
              NETWORK:
              resourse/logo.png
              FALLBACK:
              / /offline.html
          3、在离线状态时，操作window.applicationCache进行需求实现。    
          
    浏览器是怎么对HTML5的离线储存资源进行管理和加载的呢？
    
        在线的情况下，浏览器发现html头部有manifest属性，它会请求manifest文件，如果是第一次访问app，那么浏览器就会根据manifest文件的内容下载相应的资源并且进行离线存储。如果已经访问过app并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器 会对比新的manifest文件与旧的manifest文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。
        离线的情况下，浏览器就直接使用离线存储的资源。
    
    请描述一下 cookies，sessionStorage 和 localStorage 的区别？
    
        cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。
        cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递。
        sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。
        
        存储大小：
            cookie数据大小不能超过4k。
            sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。
        
        有期时间：
            localStorage    存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；
            sessionStorage  数据在当前浏览器窗口关闭后自动删除。
            cookie          设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭
    
    iframe有那些缺点？
    
        *iframe会阻塞主页面的Onload事件；
        *搜索引擎的检索程序无法解读这种页面，不利于SEO;
        
        *iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。
        
        使用iframe之前需要考虑这两个缺点。如果需要使用iframe，最好是通过javascript
        动态给iframe添加src属性值，这样可以绕开以上两个问题。
    
    Label的作用是什么？是怎么用的？
    
      label标签来定义表单控制间的关系,当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。
      <label for="Name">Number:</label>
      <input type=“text“name="Name" id="Name"/>
      <label>Date:<input type="text" name="B"/></label>
    
    HTML5的form如何关闭自动完成功能？
    
        给不想要提示的 form 或某个 input 设置为 autocomplete=off。
    
    如何实现浏览器内多个标签页之间的通信? (阿里)
    
        WebSocket、SharedWorker；
        也可以调用localstorge、cookies等本地存储方式；
        
        localstorge另一个浏览上下文里被添加、修改或删除时，它都会触发一个事件，
        我们通过监听事件，控制它的值来进行页面信息通信；
        注意quirks：Safari 在无痕模式下设置localstorge值时会抛出 QuotaExceededError 的异常；
    webSocket如何兼容低浏览器？(阿里)
    
        Adobe Flash Socket 、
        ActiveX HTMLFile (IE) 、
        基于 multipart 编码发送 XHR 、
        基于长轮询的 XHR
    
    页面可见性（Page Visibility API） 可以有哪些用途？
    
        通过 visibilityState 的值检测页面当前是否可见，以及打开网页的时间等;
        在页面被切换到其他后台进程的时候，自动暂停音乐或视频的播放；
    
    如何在页面上实现一个圆形的可点击区域？
    
        1、map+area或者svg
        2、border-radius
        3、纯js实现 需要求一个点在不在圆上简单算法、获取鼠标坐标等等
    
    实现不使用 border 画出1px高的线，在不同浏览器的标准模式与怪异模式下都能保持一致的效果。
    
        <div style="height:1px;overflow:hidden;background:red"></div>
    
    网页验证码是干嘛的，是为了解决什么安全问题。
    
        区分用户是计算机还是人的公共全自动程序。可以防止恶意破解密码、刷票、论坛灌水；
        有效防止黑客对某一个特定注册用户用特定程序暴力破解方式进行不断的登陆尝试。
    
    title与h1的区别、b与strong的区别、i与em的区别？
    
        title属性没有明确意义只表示是个标题，H1则表示层次明确的标题，对页面信息的抓取也有很大的影响；
        
        strong是标明重点内容，有语气加强的含义，使用阅读设备阅读网络时：<strong>会重读，而<B>是展示强调内容。
        
        i内容展示为斜体，em表示强调的文本；
        
        Physical Style Elements -- 自然样式标签
        b, i, u, s, pre
        Semantic Style Elements -- 语义样式标签
        strong, em, ins, del, code
        应该准确使用语义样式标签, 但不能滥用, 如果不能确定时首选使用自然样式标签。

    #CSS

        介绍一下标准的CSS的盒子模型？低版本IE的盒子模型有什么不同的？
        
        （1）有两种， IE 盒子模型、W3C 盒子模型；
        （2）盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border)；
        （3）区  别： IE的content部分把 border 和 padding计算了进去;
        CSS选择符有哪些？哪些属性可以继承？
        
        *   1.id选择器（ # myid）
            2.类选择器（.myclassname）
            3.标签选择器（div, h1, p）
            4.相邻选择器（h1 + p）
            5.子选择器（ul > li）
            6.后代选择器（li a）
            7.通配符选择器（ * ）
            8.属性选择器（a[rel = "external"]）
            9.伪类选择器（a:hover, li:nth-child）
        
        *   可继承的样式： font-size font-family color, UL LI DL DD DT;
        
        *   不可继承的样式：border padding margin width height ;
        CSS优先级算法如何计算？
        
        *   优先级就近原则，同权重情况下样式定义最近者为准;
        
        *   载入样式以最后载入的定位为准;
        
        优先级为:
           !important >  id > class > tag
            important 比 内联优先级高
        CSS3新增伪类有那些？
        
            举例：
            p:first-of-type 选择属于其父元素的首个 <p> 元素的每个 <p> 元素。
            p:last-of-type  选择属于其父元素的最后 <p> 元素的每个 <p> 元素。
            p:only-of-type  选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。
            p:only-child        选择属于其父元素的唯一子元素的每个 <p> 元素。
            p:nth-child(2)  选择属于其父元素的第二个子元素的每个 <p> 元素。
        
            :after          在元素之前添加内容,也可以用来做清除浮动。
            :before         在元素之后添加内容
            :enabled        
            :disabled       控制表单控件的禁用状态。
            :checked        单选框或复选框被选中。
        如何居中div？如何居中一个浮动元素？如何让绝对定位的div居中？
        
        给div设置一个宽度，然后添加margin:0 auto属性
        
        div{
            width:200px;
            margin:0 auto;
         }
        居中一个浮动元素
        
          确定容器的宽高 宽500 高 300 的层
          设置层的外边距
        
         .div {
              width:500px ; height:300px;//高度可以不设
              margin: -150px 0 0 -250px;
              position:relative;         //相对定位
              background-color:pink;     //方便看效果
              left:50%;
              top:50%;
         }
        让绝对定位的div居中
        
          position: absolute;
          width: 1200px;
          background: none;
          margin: 0 auto;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
        display有哪些值？说明他们的作用。
        
          block         象块类型元素一样显示。
          none          缺省值。象行内元素类型一样显示。
          inline-block  象行内元素一样显示，但其内容象块类型元素一样显示。
          list-item     象块类型元素一样显示，并添加样式列表标记。
          table         此元素会作为块级表格来显示
          inherit       规定应该从父元素继承 display 属性的值
        position的值relative和absolute定位原点是？
        
          absolute
            生成绝对定位的元素，相对于值不为 static的第一个父元素进行定位。
          fixed （老IE不支持）
            生成绝对定位的元素，相对于浏览器窗口进行定位。
          relative
            生成相对定位的元素，相对于其正常位置进行定位。
          static
            默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right z-index 声明）。
          inherit
            规定从父元素继承 position 属性的值。
        CSS3有哪些新特性？
        
          新增各种CSS选择器  （: not(.input)：所有 class 不是“input”的节点）
          圆角           （border-radius:8px）
          多列布局        （multi-column layout）
          阴影和反射        （Shadow\Reflect）
          文字特效      （text-shadow、）
          文字渲染      （Text-decoration）
          线性渐变      （gradient）
          旋转          （transform）
          增加了旋转,缩放,定位,倾斜,动画，多背景
          transform:\scale(0.85,0.90)\ translate(0px,-30px)\ skew(-9deg,0deg)\Animation:
        请解释一下CSS3的Flexbox（弹性盒布局模型）,以及适用场景？
        
         .
        用纯CSS创建一个三角形的原理是什么？
        
        把上、左、右三条边隐藏掉（颜色设为 transparent）
        #demo {
          width: 0;
          height: 0;
          border-width: 20px;
          border-style: solid;
          border-color: transparent transparent red transparent;
        }
        一个满屏 品 字布局 如何设计?
        
        简单的方式：
            上面的div宽100%，
            下面的两个div分别宽50%，
            然后用float或者inline使其不换行即可
        经常遇到的浏览器的兼容性有哪些？原因，解决方法是什么，常用hack的技巧 ？
        
        * png24位的图片在iE6浏览器上出现背景，解决方案是做成PNG8.
        
        * 浏览器默认的margin和padding不同。解决方案是加一个全局的*{margin:0;padding:0;}来统一。
        
        * IE6双边距bug:块属性标签float后，又有横行的margin情况下，在ie6显示margin比设置的大。
        
          浮动ie产生的双倍距离 #box{ float:left; width:10px; margin:0 0 0 100px;}
        
          这种情况之下IE会产生20px的距离，解决方案是在float的标签样式控制中加入 ——_display:inline;将其转化为行内属性。(_这个符号只有ie6会识别)
        
          渐进识别的方式，从总体中逐渐排除局部。
        
          首先，巧妙的使用“\9”这一标记，将IE游览器从所有情况中分离出来。
          接着，再次使用“+”将IE8和IE7、IE6分离开来，这样IE8已经独立识别。
        
          css
              .bb{
                  background-color:#f1ee18;/*所有识别*/
                  .background-color:#00deff\9; /*IE6、7、8识别*/
                  +background-color:#a200ff;/*IE6、7识别*/
                  _background-color:#1e0bd1;/*IE6识别*/
              }
        
        *  IE下,可以使用获取常规属性的方法来获取自定义属性,
           也可以使用getAttribute()获取自定义属性;
           Firefox下,只能使用getAttribute()获取自定义属性。
           解决方法:统一通过getAttribute()获取自定义属性。
        
        *  IE下,even对象有x,y属性,但是没有pageX,pageY属性;
           Firefox下,event对象有pageX,pageY属性,但是没有x,y属性。
        
        *  解决方法：（条件注释）缺点是在IE浏览器下可能会增加额外的HTTP请求数。
        
        *  Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示,
           可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决。
        
        超链接访问过后hover样式就不出现了 被点击访问过的超链接样式不在具有hover和active了解决方法是改变CSS属性的排列顺序:
        L-V-H-A :  a:link {} a:visited {} a:hover {} a:active {}
        li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？
        
        行框的排列会受到中间空白（回车\空格）等的影响，因为空格也属于字符,这些空白也会被应用样式，占据空间，所以会有间隔，把字符大小设为0，就没有空格了。
        为什么要初始化CSS样式。
        
        - 因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。
        
        - 当然，初始化样式会对SEO有一定的影响，但鱼和熊掌不可兼得，但力求影响最小的情况下初始化。
        
        最简单的初始化方法： * {padding: 0; margin: 0;} （强烈不建议）
        
        淘宝的样式初始化代码：
        body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }
        body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53; }
        h1, h2, h3, h4, h5, h6{ font-size:100%; }
        address, cite, dfn, em, var { font-style:normal; }
        code, kbd, pre, samp { font-family:couriernew, courier, monospace; }
        small{ font-size:12px; }
        ul, ol { list-style:none; }
        a { text-decoration:none; }
        a:hover { text-decoration:underline; }
        sup { vertical-align:text-top; }
        sub{ vertical-align:text-bottom; }
        legend { color:#000; }
        fieldset, img { border:0; }
        button, input, select, textarea { font-size:100%; }
        table { border-collapse:collapse; border-spacing:0; }
        absolute的containing block(容器块)计算方式跟正常流有什么不同？
        
        无论属于哪种，都要先找到其祖先元素中最近的 position 值不为 static 的元素，然后再判断：
        1、若此元素为 inline 元素，则 containing block 为能够包含这个元素生成的第一个和最后一个 inline box 的 padding box (除 margin, border 外的区域) 的最小矩形；
        2、否则,则由这个祖先元素的 padding box 构成。
        如果都找不到，则为 initial containing block。
        
        补充：
        1. static(默认的)/relative：简单说就是它的父元素的内容框（即去掉padding的部分）
        2. absolute: 向上找最近的定位为absolute/relative的元素
        3. fixed: 它的containing block一律为根元素(html/body)，根元素也是initial containing block
        CSS里的visibility属性有个collapse属性值是干嘛用的？在不同浏览器下以后什么区别？
        
        position跟display、margin collapse、overflow、float这些特性相互叠加后会怎么样？
        
        对BFC规范(块级格式化上下文：block formatting context)的理解？
        
        （W3C CSS 2.1 规范中的一个概念,它是一个独立容器，决定了元素如何对其内容进行定位,以及与其他元素的关系和相互作用。）
         一个页面是由很多个 Box 组成的,元素的类型和 display 属性,决定了这个 Box 的类型。
         不同类型的 Box,会参与不同的 Formatting Context（决定如何渲染文档的容器）,因此Box内的元素会以不同的方式渲染,也就是说BFC内部的元素和外部的元素不会互相影响。
        css定义的权重
        
        以下是权重的规则：标签的权重为1，class的权重为10，id的权重为100，以下例子是演示各种定义的权重值：
        
        /*权重为1*/
        div{
        }
        /*权重为10*/
        .class1{
        }
        /*权重为100*/
        #id1{
        }
        /*权重为100+1=101*/
        #id1 div{
        }
        /*权重为10+1=11*/
        .class1 div{
        }
        /*权重为10+10+1=21*/
        .class1 .class2 div{
        }
        
        如果权重相同，则最后定义的样式会起作用，但是应该避免这种情况出现
        请解释一下为什么会出现浮动和什么时候需要清除浮动？清除浮动的方式
        
        移动端的布局用过媒体查询吗？
        
        使用 CSS 预处理器吗？喜欢那个？
        
        SASS (SASS、LESS没有本质区别，只因为团队前端都是用的SASS)
        CSS优化、提高性能的方法有哪些？
        
        浏览器是怎样解析CSS选择器的？
        
        在网页中的应该使用奇数还是偶数的字体？为什么呢？
        
        margin和padding分别适合什么场景使用？
        
        抽离样式模块怎么写，说出思路，有无实践经验？[阿里航旅的面试题]
        
        元素竖向的百分比设定是相对于容器的高度吗？
        
        全屏滚动的原理是什么？用到了CSS的那些属性？
        
        什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的IE？
        
        视差滚动效果，如何给每页做不同的动画？（回到顶部，向下滑动要再次出现，和只出现一次分别怎么做？）
        
        ::before 和 :after中双冒号和单冒号 有什么区别？解释一下这2个伪元素的作用。
        
        如何修改chrome记住密码后自动填充表单的黄色背景 ？
        
        你对line-height是如何理解的？
        
        设置元素浮动后，该元素的display值是多少？（自动变成display:block）
        
        怎么让Chrome支持小于12px 的文字？
        
        让页面里的字体变清晰，变细用CSS怎么做？（-webkit-font-smoothing: antialiased;）
        
        font-style属性可以让它赋值为“oblique” oblique是什么意思？
        
        position:fixed;在android下无效怎么处理？
        
        如果需要手动写动画，你认为最小时间间隔是多久，为什么？（阿里）
        
        多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60＊1000ms ＝ 16.7ms
        display:inline-block 什么时候会显示间隙？(携程)
        
        移除空格、使用margin负值、使用font-size:0、letter-spacing、word-spacing
        overflow: scroll时不能平滑滚动的问题怎么处理？
        
        有一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度。
        
        png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过webp？
        
        什么是Cookie 隔离？（或者说：请求资源的时候不要让它带cookie怎么做）
        
        如果静态文件都放在主域名下，那静态文件请求的时候都带有的cookie的数据提交给server的，非常浪费流量，
        所以不如隔离开。
        
        因为cookie有域的限制，因此不能跨域提交请求，故使用非主要域名的时候，请求头中就不会带有cookie数据，
        这样可以降低请求头的大小，降低请求时间，从而达到降低整体请求延时的目的。
        
        同时这种方式不会将cookie传入Web Server，也减少了Web Server对cookie的处理分析环节，
        提高了webserver的http请求的解析速度。
        style标签写在body后与body前有什么区别？
        
        什么是CSS 预处理器 / 后处理器？
        
        - 预处理器例如：LESS、Sass、Stylus，用来预编译Sass或less，增强了css代码的复用性，
          还有层级、mixin、变量、循环、函数等，具有很方便的UI组件模块化开发能力，极大的提高工作效率。
        
        - 后处理器例如：PostCSS，通常被视为在完成的样式表中根据CSS规范处理CSS，让其更有效；目前最常做的
          是给CSS属性添加浏览器私有前缀，实现跨浏览器兼容性的问题。






    
