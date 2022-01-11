import * as React from 'react';
import{
    Component
} from 'react'
import {View, StyleSheet, PanResponder} from 'react-native';
import Svg, {
    Path,
    G,
    ClipPath,
    Defs,
    Use
  } from 'react-native-svg';

import PathOld from "../component/PathOld";

import {inject, observer} from "mobx-react";
@inject('paintStore')
@observer

export default class ShapeKai extends Component {
  constructor(props){
    super(props);

    this.state={
        data: this.props.data,
        paint: this.props.paint,
        numberScale: this.props.numberScale,
        numberPath: this.props.numberPath,
      };
  

    this._panResponder = PanResponder.create({

        // Ask to be the responder:
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
  
        onPanResponderTerminationRequest: (evt, gestureState) => true,
        onPanResponderTerminate: (evt, gestureState) => {},
        onShouldBlockNativeResponder: (evt, gestureState) => {return true;},
  
        onPanResponderGrant: (evt, gestureState) => {
  
          this._Press(evt, this.state.data);
        },
        onPanResponderMove: (evt, gestureState) => {
          this._Move(evt, this.state.data);
        },
  
        onPanResponderRelease: (evt, gestureState) => {
            dataShape = this.state.paint === "Animals" ? this.props.paintStore.getPointStoreAnimals(this.state.data.number, this.props.name):this.props.paintStore.getPointStoreObjects(this.state.data.number, this.props.name);
            dataPath = this._CreatePath(dataShape.path);
            this._Release(evt, this.state.data, dataPath);
        },
          
      });
  }

  _Press(e, data)
  {
    if (data.isColor && this.props.isPaint)
    {   
        if (this.props.paint === "Animals")
        {
            this.props.paintStore.addPathAnimals({x: e.nativeEvent.locationX, y: e.nativeEvent.locationY}, data.number, this.props.name);
        }
        else if (this.props.paint === "Objects")
        {
            this.props.paintStore.addPathObjects({x: e.nativeEvent.locationX, y: e.nativeEvent.locationY}, data.number, this.props.name);
        }
    }
    this._refData._update(false);

  }

  _Move(e, data)
  {
    if (data.isColor && this.props.isPaint)
    {
        
        if (this.props.paint === "Animals")
        {
            this.props.paintStore.addPathAnimals({x: e.nativeEvent.locationX, y: e.nativeEvent.locationY}, data.number, this.props.name);
        }
        else if (this.props.paint === "Objects")
        {
            this.props.paintStore.addPathObjects({x: e.nativeEvent.locationX, y: e.nativeEvent.locationY}, data.number, this.props.name);
        }
    }
  }

  _Release(e, data, dataPath)
    {
      if(this.props.isPaint)
      {
        if (this.props.paint === "Animals")
        {
          this.props.paintStore.addPointAnimals({color:this.props.paintStore.color, data: dataPath, strokeWidth: this.props.paintStore.strokeColor}, data.number, this.props.name);
          this.props.paintStore.resetPathAnimals( data.number, this.props.name);
        }
        else if (this.props.paint === "Objects")
        {
          this.props.paintStore.addPointObjects({color:this.props.paintStore.color, data: dataPath, strokeWidth: this.props.paintStore.strokeColor }, data.number, this.props.name);
          this.props.paintStore.resetPathObjects(data.number, this.props.name);
        }
      } 
      this._refData._update(true);   
    }

  _CreatePath(path)
  {
    let dStr = "";
    //alert(path.length);
    if (path.length != 0)
    {
        var xM = 1;
        var yM = 1;

        dStr = "M " + path[0].x * xM + " " + path[0].y * yM;
        for (var i = 1; i < path.length - 2;) {
        var a = 2;

        while (i + a < path.length - 2 && Math.sqrt(Math.pow(path[i].x - path[i + a].x, 2) + Math.pow(path[i].y - path[i + a].y, 2)) < 5)
            a++;
        var xc = (path[i].x * xM + path[i + a].x * xM) / 2;
        var yc = (path[i].y * yM + path[i + a].y * yM) / 2;
        dStr += " Q " + (path[i].x * xM) + " " + (path[i].y * yM) + ", " + xc + " " + yc
        i += a;
        }
    }
    return dStr;
  }

  render() {
    data= this.state.data;
    numberScale= this.state.numberScale;
    numberPath= this.state.numberPath;
    paint = this.state.paint;
    dataShape = this.state.paint === "Animals" ? this.props.paintStore.getPointStoreAnimals(this.state.data.number, this.props.name):this.props.paintStore.getPointStoreObjects(this.state.data.number, this.props.name);
    dataPath = this._CreatePath(dataShape.path);

    if (dataPath != null)
    {
      return (
        <G>
          <Defs>
              <Path  id={"path" + data.number}
                  d = {data.d}
                  stroke={data.stroke} 
                  strokeWidth="0.8"
                  opacity={data.opacity}
                  x = {this.props.paintStore.posX}
                  y = {this.props.paintStore.posY}
                  />
  
                  <Use id={"shape" + data.number} href={"#path" + data.number} />            
            </Defs>
            
            <ClipPath id={"clip" + data.number}>
                <Use transform={{  scale: numberScale}}  id={"shape" + data.number} href={"#path" + data.number} x = {this.props.paintStore.posX} y = {this.props.paintStore.posY}/>
            </ClipPath>
            
           <Use transform={{scale: numberScale}}   href={"#shape" + data.number}  fill={data.fill} />
           
           <G clipPath={"url(#clip" + data.number + ")"}>

            <PathOld listData={dataShape.listData} numberPath={numberPath} strokeWidth={this.props.paintStore.strokeColor} onRef={ref => (this._refData = ref)}/>
            <Path
                d={dataPath}
                fill="none"
                stroke={this.props.paintStore.color}
                strokeWidth={this.props.paintStore.strokeColor}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </G>

            <Use {...this._panResponder.panHandlers} transform={{scale: numberScale}}   href={"#shape" + data.number}  fill={"none"} />

          </G>
      );
    }

    return null;
    
  }
}


