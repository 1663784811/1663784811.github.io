---
article: false
title: 01.LVGL
icon: check
---

[原文引用、尊重作者](https://www.yuque.com/icheima/vzsofu/wg88r3lxttcoxbg5)

## 1.图层

LVGL具有图层概念,从顶层到底层依次是sys_layer层、top_layer层、act_scr层。

![44.png](img%2F44.png)
top_layer层及sys_layer层用来创建一些随处可见的内容。
top_layer层可以用来创建菜单栏,弹出窗口等...
鼠标光标可以放在所有层的上面以确保它始终可见,也就是放在sys_layer层。
一般都是在act_scr层创建各种控件(widgets),也就是objects对象。

## 2.objects
在LVGL中,用户界面的基本构建块是对象,也称为Widgets。例如Button、Label、Image、List、图表或文本区域。<br>
创建objects对象并显示在act_scr层上:
```c
// 当前画面
lv_obj_t* screen = lv_scr_act();
```
objects基本属性:<br>
● 位置：void lv_obj_set_pos(lv_obj_t * obj, lv_coord_t x, lv_coord_t y)<br>
● 尺寸：void lv_obj_set_size(lv_obj_t * obj, lv_coord_t w, lv_coord_t h)<br>
● align：void lv_obj_align(lv_obj_t * obj, lv_align_t align, lv_coord_t x_ofs, lv_coord_t y_ofs)<br>
● 样式：void lv_style_init(lv_style_t * style);<br>



2.1 位置
objects设置位置的方法如下:
参数1:objects对象
参数2和参数3:坐标x和y
实现代码:
2.2 尺寸
objects设置尺寸的方法如下:
参数1:objects对象
参数2:宽度
参数3:高度
实现代码:
2.3 align
lv_obj_align用来设置obj在父控件中的显示位置,定义如下:
参数1:objects对象
参数2:展示方式
参数3:在x方向的偏移
参数4:在y方向的偏移
实现代码:
常见的展示方式有:
LV_ALIGN_DEFAULT = 0,
LV_ALIGN_TOP_LEFT,  
LV_ALIGN_TOP_MID,  
LV_ALIGN_TOP_RIGHT,
LV_ALIGN_BOTTOM_LEFT,
LV_ALIGN_BOTTOM_MID,
LV_ALIGN_BOTTOM_RIGHT,
LV_ALIGN_LEFT_MID,
LV_ALIGN_RIGHT_MID,
LV_ALIGN_CENTER
2.4 样式
Styles用于设置对象的外观。样式是一个lv_style_t类型的变量,它可以保存边框宽度、文本颜色等属性。
创建样式变量:
1
static lv_style_t style;
初始化样式方法:
1
void lv_style_init(lv_style_t * style);
给objects添加style:
1
void lv_obj_add_style(lv_obj_t * obj, lv_style_t * style, lv_style_selector_t selector)
参数1:objects对象
参数2:style样式
参数3:设置obj的状态或part,这里默认写0即可
经常设置的样式:
//设置obj的宽度和高度
```c
void lv_style_set_width(lv_style_t * style, lv_coord_t value);
void lv_style_set_height(lv_style_t * style, lv_coord_t value);
```
//设置obj的x和y坐标
```c
void lv_style_set_x(lv_style_t * style, lv_coord_t value);
void lv_style_set_y(lv_style_t * style, lv_coord_t value);
```
//设置背景圆角半径
```c
void lv_style_set_radius(lv_style_t * style, lv_coord_t value);
```
//上下左右的padding值
```c
void lv_style_set_pad_top(lv_style_t * style, lv_coord_t value);
void lv_style_set_pad_bottom(lv_style_t * style, lv_coord_t value)
void lv_style_set_pad_left(lv_style_t * style, lv_coord_t value);
void lv_style_set_pad_right(lv_style_t * style, lv_coord_t value);
```
// 设置背景颜色
```c
lv_style_set_bg_color(&style1,lv_palette_main(LV_PALETTE_PINK));
```
代码实现:
```c
void first_screen(){
    //创建样式
    static lv_style_t style;
    //初始化
    lv_style_init(&style);
    //设置宽度和高度
    lv_style_set_width(&style,100);
    lv_style_set_height(&style,100);
    //设置圆角半径
    lv_style_set_radius(&style, 20);
    //设置x坐标
    lv_style_set_x(&style,100);
    lv_style_set_y(&style,100);
    //创建显示对象
    lv_obj_t * obj = lv_obj_create(lv_scr_act());
    //设置样式
    lv_obj_add_style(obj, &style, 0);
}
```
