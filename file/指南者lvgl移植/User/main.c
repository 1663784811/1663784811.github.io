#include "stm32f10x.h"
#include "./usart/bsp_usart.h"	
#include "./lcd/bsp_ili9341_lcd.h"
#include "./flash/bsp_spi_flash.h"
#include "./core/lv_obj.h"
#include "lv_port_disp_template.h"
#include "bsp_GeneralTim.h"


int time = 0;



int main(void)
{	
	char dispBuff[100];
	//初始化
	USART_Config();
	
	ILI9341_Init ();
	GENERAL_TIM_Init();
	
	lv_init();
	lv_port_disp_init();
	// lv_port_indev_init();
	// ===========================
	
	
	
	printf("\r\n ********** 液晶屏中文显示程序（任意大小）*********** \r\n"); 
	printf("\r\n 若汉字显示不正常，请阅读工程中的readme.txt文件说明，根据要求给FLASH重刷字模数据\r\n"); 


	lv_obj_t* switch_obj = lv_switch_create(lv_scr_act());
  lv_obj_set_size(switch_obj, 120, 60);
	lv_obj_align(switch_obj,LV_ALIGN_CENTER, 0, 0);
	
	lv_obj_t * btn = lv_btn_create(lv_scr_act());
	lv_obj_set_pos(btn, 120, 200);
	lv_obj_set_size(btn, 120, 50);  
	// lv_obj_set_event_cb(btn, btn_event_cb); 
	lv_obj_t * label = lv_label_create(btn);
	lv_label_set_text(label, "Button");
	
	while ( 1 )
	{
		sprintf(dispBuff,"显示整型变量： %d ",time/1000);
		ILI9341_DispStringLine_EN_CH(LINE(5),dispBuff);
	  lv_timer_handler();
	}
		
}
