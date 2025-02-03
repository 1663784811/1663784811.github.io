import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a as d}from"./app-ycMh-tgS.js";const s={},l=d(`<p>队列是为了任务与任务、任务与中断之间的通信而准备的</p><p>队列不是属于某个特别指定的任务的</p><p>入队阻塞</p><p>出队阻塞</p><h3 id="使用队列模块的典型流程如下" tabindex="-1"><a class="header-anchor" href="#使用队列模块的典型流程如下" aria-hidden="true">#</a> 使用队列模块的典型流程如下</h3><p>创建消息队列。 xQueueCreate()</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>/* 定义一个创建信息返回值，默认为pdPASS */
BaseType_t xReturn = pdPASS;

//进入临界区
taskENTER_CRITICAL(); 
  
/* 创建Test_Queue */
Test_Queue = xQueueCreate((UBaseType_t ) QUEUE_LEN,/* 消息队列的长度 */
                            (UBaseType_t ) QUEUE_SIZE);/* 消息的大小 */
if(NULL != Test_Queue)
    printf(&quot;创建Test_Queue消息队列成功!\\r\\n&quot;);

taskEXIT_CRITICAL();     //退出临界区
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>消息队列静态创建函数 xQueueCreateStatic()</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code> /* 创建一个可以最多可以存储 10 个 64 位变量的队列 */
 #define QUEUE_LENGTH 10
 
 #define ITEM_SIZE sizeof( uint64_t )
 
 /* 该变量用于存储队列的数据结构 */
 
 static StaticQueue_t xStaticQueue;
 
 /* 该数组作为队列的存储区域，大小至少有 uxQueueLength * uxItemSize 个字节 */
 
 uint8_t ucQueueStorageArea[ QUEUE_LENGTH * ITEM_SIZE ]; 
 
void vATask( void *pvParameters )
 {
 QueueHandle_t xQueue;
 
 /* 创建一个队列 */ 
 xQueue = xQueueCreateStatic( QUEUE_LENGTH, /* 队列深度 */ 
 ITEM_SIZE, /* 队列数据单元的单位 */ 
 ucQueueStorageArea,/* 队列的存储区域 */ 
 &amp;xStaticQueue ); /* 队列的数据结构 */ 
 /* 剩下的其他代码 */
 }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写队列操作。</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>/* 等同于xQueueSendToBack
 * 往队列尾部写入数据，如果没有空间，阻塞时间为xTicksToWait
 */
BaseType_t xQueueSend(
                                QueueHandle_t    xQueue,
                                const void       *pvItemToQueue,
                                TickType_t       xTicksToWait
                            );
 
/* 
 * 往队列尾部写入数据，如果没有空间，阻塞时间为xTicksToWait
 */
BaseType_t xQueueSendToBack(
                                QueueHandle_t    xQueue,
                                const void       *pvItemToQueue,
                                TickType_t       xTicksToWait
                            );
 
 
/* 
 * 往队列尾部写入数据，此函数可以在中断函数中使用，不可阻塞
 */
BaseType_t xQueueSendToBackFromISR(
                                      QueueHandle_t xQueue,
                                      const void *pvItemToQueue,
                                      BaseType_t *pxHigherPriorityTaskWoken
                                   );
 
/* 
 * 往队列头部写入数据，如果没有空间，阻塞时间为xTicksToWait
 */
BaseType_t xQueueSendToFront(
                                QueueHandle_t    xQueue,
                                const void       *pvItemToQueue,
                                TickType_t       xTicksToWait
                            );
 
/* 
 * 往队列头部写入数据，此函数可以在中断函数中使用，不可阻塞
 */
BaseType_t xQueueSendToFrontFromISR(
                                      QueueHandle_t xQueue,
                                      const void *pvItemToQueue,
                                      BaseType_t *pxHigherPriorityTaskWoken
                                   );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>读队列操作。 xQueueReceive()</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>static void Receive_Task(void* parameter)
{	
  BaseType_t xReturn = pdTRUE;/* 定义一个创建信息返回值，默认为pdTRUE */
  uint32_t r_queue;	/* 定义一个接收消息的变量 */
  while (1)
  {
    xReturn = xQueueReceive( Test_Queue,    /* 消息队列的句柄 */
                             &amp;r_queue,      /* 发送的消息内容 */
                             portMAX_DELAY); /* 等待时间 一直等 */
    if(pdTRUE == xReturn)
      printf(&quot;本次接收到的数据是%d\\n\\n&quot;,r_queue);
    else
      printf(&quot;数据接收出错,错误代码0x%lx\\n&quot;,xReturn);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除队列。 vQueueDelete()</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>#define QUEUE_LENGTH 5
#define QUEUE_ITEM_SIZE 4
 
int main( void )
{
  QueueHandle_t xQueue;
 /* 创建消息队列 */
 xQueue = xQueueCreate( QUEUE_LENGTH, QUEUE_ITEM_SIZE );
 
 if ( xQueue == NULL ) {
    /* 消息队列创建失败 */
   } else {
    /* 删除已创建的消息队列 */ 
    vQueueDelete( xQueue ); 
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复位 xQueueReset（） 队列刚被创建时，里面没有数据； 使用过程中可以调用xQueueReset()把队列恢复为初始状态，此函数原型为</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>/* pxQueue : 复位哪个队列;
 * 返回值: pdPASS(必定成功)
 */
BaseType_t xQueueReset( QueueHandle_t pxQueue);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),u=[l];function v(a,r){return i(),n("div",null,u)}const t=e(s,[["render",v],["__file","05.FreeRTOS消息队列.html.vue"]]);export{t as default};
