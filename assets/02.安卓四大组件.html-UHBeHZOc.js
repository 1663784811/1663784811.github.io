import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,a as d}from"./app-QVpU4N0f.js";const v={},s=d(`<h2 id="android四大组件详解" tabindex="-1"><a class="header-anchor" href="#android四大组件详解" aria-hidden="true">#</a> android四大组件详解</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
1、activity
    Activity可以看成是安卓系统的根本，在这个根本上才可以进行其他的工作，
    因为在安卓系统里运行的所有的程序，它的流程都必须在【Activity】中运行，
    所有他是最基本的模块。它的作用是一个框架或页面，每个程序会有多个【Activity】组成。
    （1）一个Activity通常就是一个单独的屏幕（窗口）。
    （2）Activity之间通过Intent进行通信。
    （3）android应用中每一个Activity都必须要在AndroidManifest.xml配置文件中声明，否则系统将不识别也不执行该Activity。

2、service
    Service是安卓里非常很重要的组件，它的地位和优先级别是与活动相似的，
    不过Service不能够自己运行，它只能在安卓的后台运行。
    它的作用就是与安卓的其他逐渐进行交互，举个简单例子：
    当我们打开手机上音乐播放器并将它放到后台，此时播放的音乐就是由Service在负责控制。
    1）service用于在后台完成用户指定的操作。service分为两种：
        started（启动）：当应用程序组件（如activity）调用startService()方法启动服务时，服务处于started状态。
        bound（绑定）：当应用程序组件调用bindService()方法绑定到服务时，服务处于bound状态。
    2）startService()与bindService()区别：
        started service（启动服务）是由其他组件调用startService()方法启动的，这导致服务的onStartCommand()方法被调用。
        当服务是started状态时，其生命周期与启动它的组件无关，并且可以在后台无限期运行，即使启动服务的组件已经被销毁。
        因此，服务需要在完成任务后调用stopSelf()方法停止，或者由其他组件调用stopService()方法停止。
        使用bindService()方法启用服务，调用者与服务绑定在了一起，调用者一旦退出，服务也就终止，大有“不求同时生，必须同时死”的特点。
    3）开发人员需要在应用程序配置文件中声明全部的service，使用&lt;service&gt;&lt;/service&gt;标签。
    4）Service通常位于后台运行，它一般不需要与用户交互，因此Service组件没有图形用户界面。
        Service组件需要继承Service基类。Service组件通常用于为其他组件提供后台服务或监控其他组件的运行状态。



3、content provider（内容提供商）
    内容提供商这个组件是专门为第三方应用而设计的，它非常的灵活，而且相当重要，它会为所有的应用准备一个内容窗口，
    并且保留数据库、文件，作用就是我们在使用这些第三方软件的时候，可以有效的访问，并且保护里面的数据。
    1）android平台提供了Content Provider使一个应用程序的指定数据集提供给其他应用程序。其他应用可以通过ContentResolver类从该内容提供者中获取或存入数据。
    2）只有需要在多个应用程序间共享数据是才需要内容提供者。例如，通讯录数据被多个应用程序使用，且必须存储在一个内容提供者中。它的好处是统一数据访问方式。
    3）ContentProvider实现数据共享。ContentProvider用于保存和获取数据，并使其对所有应用程序可见。这是不同应用程序间共享数据的唯一方式，因为android没有提供所有应用共同访问的公共存储区。
    4）开发人员不会直接使用ContentProvider类的对象，大多数是通过ContentResolver对象实现对ContentProvider的操作。
    5）ContentProvider使用URI来唯一标识其数据集，这里的URI以content://作为前缀，表示该数据由ContentProvider来管理。


4、broadcast receiver（广播接收器）
    在安卓系统中，广播接收器并不是直接就可以看到的，它是程序之间传递信息时的一种机制，
    作用就是接收或者发送通知。通俗的来说广播接收器更像是一种传递组件，它能够将信息接收，
    甚至还可以对它进行过滤然后进行响应。
    1）你的应用可以使用它对外部事件进行过滤，只对感兴趣的外部事件(如当电话呼入时，或者数据网络可用时)进行接收并做出响应。
    广播接收器没有用户界面。然而，它们可以启动一个activity或serice来响应它们收到的信息，
    或者用NotificationManager来通知用户。通知可以用很多种方式来吸引用户的注意力，
    例如闪动背灯、震动、播放声音等。一般来说是在状态栏上放一个持久的图标，用户可以打开它并获取消息。
    2）广播接收者的注册有两种方法，分别是程序动态注册和AndroidManifest文件中进行静态注册。
    3）动态注册广播接收器特点是当用来注册的Activity关掉后，广播也就失效了。
    静态注册无需担忧广播接收器是否被关闭，只要设备是开启状态，广播接收器也是打开着的。
    也就是说哪怕app本身未启动，该app订阅的广播在触发时也会对它起作用。





</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[s];function l(c,a){return e(),n("div",null,r)}const u=i(v,[["render",l],["__file","02.安卓四大组件.html.vue"]]);export{u as default};
