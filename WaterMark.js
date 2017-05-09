
/**
 * 水印
 * Created by cjp on 17/5/3.
 */

import React, {Component, PropTypes} from "react";

import {
    Dimensions,
    Platform
} from "react-native";
import Svg, {
    G,
}from 'react-native-svg'
import SvgText from './SvgText'

let {height , width} = Dimensions.get('window')

class WaterMark extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let {canvasWid , canvasHei , rotate , txtSpace , txtLines ,  txtOriginY , txtFont , txtColor , text} = {...this.props}
        let cos =  Math.cos( (360 - parseInt(rotate)) * (180 / Math.PI))

        let space = (parseInt(txtSpace) +  (parseInt(txtFont) * 2))
        let beveling = space / cos
        let opposite =  Math.sqrt((beveling * beveling ) -  (space * space ))

        let sideLength = canvasWid + canvasHei
        let rowNum =  Math.ceil(sideLength / beveling)
        let txtContent = text.repeat(txtLines)

        let arr = []
        let x = canvasWid / 2
        let y = txtOriginY
        for (let i = 0 ; i <= rowNum; i++) {
            let svgTxt =
                <G key={i}
                >
                    <SvgText
                        x = {x}
                        y={y}
                        stroke="transparent"
                        fill= {txtColor}
                        textAnchor="middle"
                        fontSize= {txtFont}
                    >{txtContent}</SvgText>
                </G>

            y = y + txtSpace
            x = x - Math.ceil(opposite) - (parseInt(txtFont)/ 2)
            arr.push(svgTxt)
        }

        return(
            <Svg
                pointerEvents="none"
                height={canvasHei}
                width={canvasWid}
                style={{backgroundColor: 'transparent' , position: 'absolute'}}    //画布默认是透明的
            >
                <G
                    rotate= {rotate}>
                    {arr}
                </G>
            </Svg>
        )
    }
}


WaterMark.defaultProps = {
    canvasWid:  width ,                                                          //水印画布的宽度
    canvasHei:  height,                                                          //水印画布的高度
    rotate:     "335",                                                           //文字旋转角度
    txtSpace:   50,                                                              //水印文字之间的行间距
    txtLines:   Platform.OS ==='ios' ?3 :4,                                      //水印的列数
    txtOriginY: 0,                                                               //文字距离画布上边界的距离
    txtFont:    13,                                                              //水印字体大小
    txtColor:   "rgba(217,217,217,0.8)",                                         //水印字体颜色
    text:       '',                                                              //水印文字内容

}



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

/**
 * 获取水印
 * @param obj = {
 *  canvasWid:  width,                                                           //水印画布的宽度
    canvasHei:  height,                                                          //水印画布的高度
    rotate:     "335",                                                           //文字旋转角度
    txtSpace:   50,                                                              //水印文字之间的行间距
    txtLines:   3,                                                               //水印的列数
    txtOriginX: width/2,                                                         //取画布总长度的一半
    txtOriginY: 0,                                                               //文字距离画布上边界的距离
    txtFont:    13,                                                              //水印字体大小
    txtColor:   "rgba(217,217,217,0.8)",                                         //水印字体颜色
    text:       '',
 * }
 * @returns {XML}
 */

var getWatermark = function (obj) {

    return  (
        <WaterMark
            {...obj}
        />
    )
}

export {WaterMark , getWatermark}


