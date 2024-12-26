import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,a as d}from"./app-NZfegjwb.js";const l={},s=d(`<h3 id="画点" tabindex="-1"><a class="header-anchor" href="#画点" aria-hidden="true">#</a> 画点</h3><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>/******************************************************************************
      函数说明：在指定位置画点
      入口数据：x,y 画点坐标
                color 点的颜色
      返回值：  无
******************************************************************************/
void LCD_DrawPoint(u16 x,u16 y,u16 color)
{
	LCD_Address_Set(x,y,x,y);//设置光标位置 
	LCD_WR_DATA(color);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="填充" tabindex="-1"><a class="header-anchor" href="#填充" aria-hidden="true">#</a> 填充</h3><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>/******************************************************************************
      函数说明：在指定区域填充颜色
      入口数据：xsta,ysta   起始坐标
                xend,yend   终止坐标
								color       要填充的颜色
      返回值：  无
******************************************************************************/
void LCD_Fill(u16 xsta,u16 ysta,u16 xend,u16 yend,u16 color)
{          
	u16 i,j; 
	LCD_Address_Set(xsta,ysta,xend-1,yend-1);//设置显示范围
	for(i=ysta;i&lt;yend;i++)
	{													   	 	
		for(j=xsta;j&lt;xend;j++)
		{
			LCD_WR_DATA(color);
		}
	} 					  	    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="画线" tabindex="-1"><a class="header-anchor" href="#画线" aria-hidden="true">#</a> 画线</h3><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>/******************************************************************************
      函数说明：画线
      入口数据：x1,y1   起始坐标
                x2,y2   终止坐标
                color   线的颜色
      返回值：  无
******************************************************************************/
void LCD_DrawLine(u16 x1,u16 y1,u16 x2,u16 y2,u16 color)
{
	u16 t; 
	int xerr=0,yerr=0,delta_x,delta_y,distance;
	int incx,incy,uRow,uCol;
	//计算坐标增量 
	delta_x=x2-x1;
	delta_y=y2-y1;
	//画线起点坐标
	uRow=x1;
	uCol=y1;
	
	if(delta_x&gt;0){
		//设置单步方向 
		incx=1;
	}else if (delta_x==0){
		//垂直线 
		incx=0;
	}else {
		incx=-1;
		delta_x = -delta_x;
	}
	
	if(delta_y&gt;0){
		incy=1;
	} else if (delta_y==0){
		//水平线 
		incy=0;
	} else {
		incy=-1;
		delta_y = -delta_y;
	}

	if(delta_x&gt;delta_y){
		//选取基本增量坐标轴 
		distance=delta_x;
	} else {
	 distance=delta_y;
	}
	
	for(t=0;t&lt;distance+1;t++)
	{
	    //画点
		LCD_DrawPoint(uRow,uCol,color);
		
		xerr+=delta_x;
		yerr+=delta_y;
		
		if(xerr&gt;distance)
		{
			xerr-=distance;
			uRow+=incx;
		}
		if(yerr&gt;distance)
		{
			yerr-=distance;
			uCol+=incy;
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="画矩形" tabindex="-1"><a class="header-anchor" href="#画矩形" aria-hidden="true">#</a> 画矩形</h3><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>/******************************************************************************
      函数说明：画矩形
      入口数据：x1,y1   起始坐标
                x2,y2   终止坐标
                color   矩形的颜色
      返回值：  无
******************************************************************************/
void LCD_DrawRectangle(u16 x1, u16 y1, u16 x2, u16 y2,u16 color)
{
	LCD_DrawLine(x1,y1,x2,y1,color);
	LCD_DrawLine(x1,y1,x1,y2,color);
	LCD_DrawLine(x1,y2,x2,y2,color);
	LCD_DrawLine(x2,y1,x2,y2,color);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="画圆" tabindex="-1"><a class="header-anchor" href="#画圆" aria-hidden="true">#</a> 画圆</h3><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>/******************************************************************************
      函数说明：画圆
      入口数据：x0,y0   圆心坐标
                r       半径
                color   圆的颜色
      返回值：  无
******************************************************************************/
void Draw_Circle(u16 x0,u16 y0,u8 r,u16 color)
{
	int a,b;
	a=0;b=r;	  
	while(a&lt;=b)
	{
		LCD_DrawPoint(x0-b,y0-a,color);             //3           
		LCD_DrawPoint(x0+b,y0-a,color);             //0           
		LCD_DrawPoint(x0-a,y0+b,color);             //1                
		LCD_DrawPoint(x0-a,y0-b,color);             //2             
		LCD_DrawPoint(x0+b,y0+a,color);             //4               
		LCD_DrawPoint(x0+a,y0-b,color);             //5
		LCD_DrawPoint(x0+a,y0+b,color);             //6 
		LCD_DrawPoint(x0-b,y0+a,color);             //7
		a++;
		//判断要画的点是否过远
		if((a*a+b*b)&gt;(r*r)){
			b--;
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示汉字符" tabindex="-1"><a class="header-anchor" href="#显示汉字符" aria-hidden="true">#</a> 显示汉字符</h3><h3 id="放大缩小字符" tabindex="-1"><a class="header-anchor" href="#放大缩小字符" aria-hidden="true">#</a> 放大缩小字符</h3>`,12),a=[s];function v(r,t){return n(),e("div",null,a)}const b=i(l,[["render",v],["__file","06.液晶屏算法.html.vue"]]);export{b as default};
