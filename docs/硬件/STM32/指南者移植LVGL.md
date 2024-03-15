---
article: false
title: 指南者移植LVGL
icon: check
---
[实验代码](https://github.com/1663784811/1663784811.github.io/tree/main/file)

### 第一步：下载LVGL
[GitHub下载地址](https://github.com/lvgl/lvgl/releases/tag/v8.2.0)

### 第二步: 删除不必要的文件
修改lv_conf_template.h  为  lv_conf.h  <br/>
保留下面文件 <br/>
![img_9.png](img%2Fimg_9.png)
examples 目录下只保留 porting 文件

![img_10.png](img%2Fimg_10.png)

### 第三步: 添加组
新建目录
```text
Middlewares
 └─LVGL
    ├─GUI
    │  └─lvgl        lvgl 源码存放目录
    └─GUI_APP
```
添加组
```text
Middlewares/lvgl/examples/porting
Middlewares/lvgl/src/core
Middlewares/lvgl/src/draw
Middlewares/lvgl/src/extra
Middlewares/lvgl/src/font
Middlewares/lvgl/src/gpu
Middlewares/lvgl/src/hal
Middlewares/lvgl/src/misc
Middlewares/lvgl/src/widgets
Middlewares/LVGL/GUI_APP
```
![img_11.png](img%2Fimg_11.png)

### 第三步: 添加.c文件到组
Middlewares/lvgl/examples/porting
```text
lvgl/examples/porting 目录
    lv_port_disp_template.c
    lv_port_indev_template.c
```
Middlewares/lvgl/src/core
```text
lvgl/src/core 目录所有文件

```
Middlewares/lvgl/src/draw
```text
lvgl/src/draw 目录所有文件
 注：除了以下文件夹的文件
    nxp_pxp
    nxp_vglite
    sdl
    stm32_dma2d
    
```
Middlewares/lvgl/src/extra
```text
lvgl/src/extra 目录所有文件
 注：除了以下文件夹的文件
    libs
```
Middlewares/lvgl/src/font
```text
lvgl/src/font 目录所有文件
```
Middlewares/lvgl/src/gpu
```text
lvgl\src\draw\sdl  所有文件
lvgl\src\draw\stm32_dma2d  所有文件

```
Middlewares/lvgl/src/hal
```text
lvgl/src/hal  所有文件
```
Middlewares/lvgl/src/misc
```text
lvgl/src/misc  所有文件
```
Middlewares/lvgl/src/widgets
```text
lvgl/src/widgets  所有文件
```


### 第四步: 添加.h 文件目录
```text
..\..\Middlewares\LVGL\GUI
..\..\Middlewares\LVGL\GUI\lvgl
..\..\Middlewares\LVGL\GUI\lvgl\src
..\..\Middlewares\LVGL\GUI\lvgl\examples\porting
```
![img_12.png](img%2Fimg_12.png)

### 第五步: 修改代码并编译,无报错说明添加没问题
![img_13.png](img%2Fimg_13.png)


### 第六步： 初始化触摸屏和LCD驱动 







