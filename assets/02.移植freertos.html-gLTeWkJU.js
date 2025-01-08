import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,a as s}from"./app-6dCYJLII.js";const d="/assets/img-W794azK9.png",l="/assets/img_1-OdSHXnvb.png",a="/assets/img_2-gdzOBMzw.png",v="/assets/img_4-GePvBD_f.png",t="/assets/img_3-Fg0umwWu.png",r={},u=s('<h3 id="导入文件" tabindex="-1"><a class="header-anchor" href="#导入文件" aria-hidden="true">#</a> 导入文件</h3><p>导入 FreeRTOS/Source 目录下的文件</p><p>FreeRTOS/Source/portable 目录只保留 <br> Keil <br> MemMang <br> RVDS <br></p><p>FreeRTOS/Source/portable/RVDS 目录只保留 <br> ARM_CM3</p><h3 id="导入" tabindex="-1"><a class="header-anchor" href="#导入" aria-hidden="true">#</a> 导入</h3><p><img src="'+d+'" alt="img.png"></p><p><img src="'+l+'" alt="img_1.png"></p><p><img src="'+a+`" alt="img_2.png"></p><h3 id="添加-freertosconfig-h-并修改配置" tabindex="-1"><a class="header-anchor" href="#添加-freertosconfig-h-并修改配置" aria-hidden="true">#</a> 添加 FreeRTOSConfig.h 并修改配置</h3><p>FreeRTOSConfig.h 文件在 FreeRTOS/Demo/CORTEX_STM32F103_Keil 目录下</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>#define vPortSVCHandler SVC_Handler
#define xPortPendSVHandler PendSV_Handler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+v+'" alt="img_4.png"></p><p><img src="'+t+`" alt="img_3.png"></p><h3 id="编写测试程序" tabindex="-1"><a class="header-anchor" href="#编写测试程序" aria-hidden="true">#</a> 编写测试程序</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include &quot;delay.h&quot;
#include &quot;sys.h&quot;
#include &quot;led.h&quot;
#include &quot;lcd_init.h&quot;
#include &quot;lcd.h&quot;
#include &quot;pic.h&quot;
#include &quot;FreeRTOS.h&quot;
#include &quot;task.h&quot;


void start_task(void *param);
void lcd_task(void *param);

#define START_TASK_PRIO		1           //任务优先级
#define START_STK_SIZE 		128         //任务堆栈大小
#define LCD_TASK_PRIO		2
#define LCD_STK_SIZE 		50 



TaskHandle_t StartTask_Handler;
TaskHandle_t LCDTask_Handler;




int main(void)
{
	delay_init();
	LED_Init();//LED初始化
	LCD_Init();//LCD初始化
	LCD_Fill(0,0,LCD_W,LCD_H,WHITE);
	LED=0;
	
	xTaskCreate(
		start_task,                 //任务函数
		&quot;start_task&quot;,        				 //任务名称
		START_STK_SIZE,     			 //任务堆栈大小
		NULL, 							       //传递给任务函数的参数
		START_TASK_PRIO,          //任务优先级
		&amp;StartTask_Handler         //任务句柄     
	);
	vTaskStartScheduler();          //开启任务调度
}



void start_task(void *param)
{
    taskENTER_CRITICAL();       //进入临界区
    
    //创建LED0任务
    xTaskCreate(lcd_task, &quot;lcd0_task&quot;, LCD_STK_SIZE, NULL, LCD_TASK_PRIO, &amp;LCDTask_Handler);

    vTaskDelete(StartTask_Handler);
    taskEXIT_CRITICAL();        //退出临界区
}



void lcd_task(void *param)
{
	u8 i,j;
	float t=0;
	while(1)
	{
		LCD_ShowChinese(0,0,&quot;中景园电子&quot;,RED,WHITE,32,0);
		LCD_ShowString(0,40,&quot;LCD_W:&quot;,RED,WHITE,16,0);
		LCD_ShowIntNum(48,40,LCD_W,3,RED,WHITE,16);
		LCD_ShowString(80,40,&quot;LCD_H:&quot;,RED,WHITE,16,0);
		LCD_ShowIntNum(128,40,LCD_H,3,RED,WHITE,16);
		LCD_ShowString(80,40,&quot;LCD_H:&quot;,RED,WHITE,16,0);
		LCD_ShowString(0,70,&quot;Increaseing Nun:&quot;,RED,WHITE,16,0);
		LCD_ShowFloatNum1(128,70,t,4,RED,WHITE,16);
		t+=0.11;
		for(j=0;j&lt;3;j++)
		{
			for(i=0;i&lt;6;i++)
			{
				LCD_ShowPicture(40*i,120+j*40,40,40,gImage_1);
			}
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>

 第二章 FreeRTOS创建任务

 第三章  FreeRTOS任务管理

第四章  FreeRTOS消息队列

第五章  FreeRTOS信号量

第六章  FreeRTOS互斥量

第七章  FreeRTOS事件组

第八章  FreeRTOS任务通知

第九章  FreeRTOS软件定时器

第十章  FreeRTOS内存管理

第十一章  FreeRTOS中断管理




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),c=[u];function m(b,o){return n(),e("div",null,c)}const T=i(r,[["render",m],["__file","02.移植freertos.html.vue"]]);export{T as default};
