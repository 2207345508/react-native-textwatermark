# react-native-WaterMark
自定义背景水印

Usage
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

Container Style
 WaterMark.propTypes = {
    canvasWid:  PropTypes.oneOfType([PropTypes.string , PropTypes.number]),     //水印画布的宽度
    canvasHei:  PropTypes.oneOfType([PropTypes.string , PropTypes.number]),     //水印画布的高度
    rotate:     PropTypes.oneOfType([PropTypes.string , PropTypes.number]),     //文字旋转角度
    txtSpace:   PropTypes.oneOfType([PropTypes.string , PropTypes.number]),     //水印文字之间的行间距
    txtLines:   PropTypes.oneOfType([PropTypes.string , PropTypes.number]),     //水印的列数
    txtOriginY: PropTypes.oneOfType([PropTypes.string , PropTypes.number]),     //文字距离画布上边界的距离
    txtFont:    PropTypes.oneOfType([PropTypes.string , PropTypes.number]),     //水印字体大小
    txtColor:   PropTypes.string,                                               //水印字体颜色
    text:       PropTypes.string,                                               //水印文字内容
 }

