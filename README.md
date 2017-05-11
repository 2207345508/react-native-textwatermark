# react-native-textwatermark
自定义文字水印，（ios / android）

# Install
npm install react-native-textwatermark

# Usage
```js
import React, { Component } from 'react';
export default class ExampleComponent extends Component {
  constructor(props, context) {
    super(props, context);
  }
  
  render() {
    return (
      <WaterMark
      text = {'hello world'}
      />
     );
  }
};
```
# Container Style 
```js
 <WaterMark
        text = {'hello world'}
        canvasWid:  width ,                                                          //水印画布的宽度
        canvasHei:  height,                                                          //水印画布的高度
        rotate:     "335",                                                           //文字旋转角度
        txtSpace:   50,                                                              //水印文字之间的行间距
        txtLines:   Platform.OS ==='ios' ?3 :4,                                      //水印的列数
        txtOriginY: 0,                                                               //文字距离画布上边界的距离
        txtFont:    13,                                                              //水印字体大小
        txtColor:   "rgba(217,217,217,0.5)",                                         //水印字体颜色
      />
```

