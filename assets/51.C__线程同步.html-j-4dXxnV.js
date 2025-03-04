import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a as d}from"./app-ML6kfvSb.js";const s={},a=d(`<h3 id="线程同步" tabindex="-1"><a class="header-anchor" href="#线程同步" aria-hidden="true">#</a> 线程同步</h3><p>线程同步（Thread Synchronization）用于协调多个线程对共享资源的访问，防止数据竞争（Race Condition）和不一致的问题。</p><h3 id="线程同步方法" tabindex="-1"><a class="header-anchor" href="#线程同步方法" aria-hidden="true">#</a> 线程同步方法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.互斥锁（mutex）、
2.条件变量（condition_variable）、
3.原子操作（atomic）


    方法	                        特点	                                **适用场景
std::mutex	            互斥锁，防止竞态	                        保护共享资源
std::lock_guard	        自动管理 mutex，防止死锁	                代码块锁
std::unique_lock	    手动 lock() / unlock()，支持条件变量	    复杂同步


std::condition_variable	线程等待 &amp; 唤醒	                        生产者-消费者

std::atomic	            无锁，轻量级	                            计数器、标志位


std::future	            获取线程返回值	                            异步任务
std::shared_mutex	    读多写少的场景	                            共享数据读写

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[a];function l(r,c){return i(),n("div",null,t)}const m=e(s,[["render",l],["__file","51.C__线程同步.html.vue"]]);export{m as default};
