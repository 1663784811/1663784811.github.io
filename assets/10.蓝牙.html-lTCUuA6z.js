import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as d,a as i}from"./app-9bsADgkM.js";const r={},n=i(`<h2 id="经典蓝牙" tabindex="-1"><a class="header-anchor" href="#经典蓝牙" aria-hidden="true">#</a> 经典蓝牙</h2><h2 id="低功耗蓝牙" tabindex="-1"><a class="header-anchor" href="#低功耗蓝牙" aria-hidden="true">#</a> 低功耗蓝牙</h2><p>40个信道( 3个播信道、其它为数据信道 )</p><h3 id="广播" tabindex="-1"><a class="header-anchor" href="#广播" aria-hidden="true">#</a> 广播</h3><p>一个广播数据包最长37个字节</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0-6  mac地址
6-37 为若干个AD structure

AD structure 包含：长度(1个字节)、类型(1个字节)、内容(n个字节)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>广播分类：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.可连接非定向
2.可连接定向
3.不可连接非定向
4.可扫描非定向
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="扫描响应" tabindex="-1"><a class="header-anchor" href="#扫描响应" aria-hidden="true">#</a> 扫描响应</h3><h3 id="状态切换" tabindex="-1"><a class="header-anchor" href="#状态切换" aria-hidden="true">#</a> 状态切换</h3><h3 id="服务与特性" tabindex="-1"><a class="header-anchor" href="#服务与特性" aria-hidden="true">#</a> 服务与特性</h3><h2 id="bluedroid-的作用" tabindex="-1"><a class="header-anchor" href="#bluedroid-的作用" aria-hidden="true">#</a> bluedroid 的作用</h2><p>管理蓝牙连接、数据传输、配对和服务发现等功能</p>`,13),s=[n];function t(c,l){return a(),d("div",null,s)}const o=e(r,[["render",t],["__file","10.蓝牙.html.vue"]]);export{o as default};
