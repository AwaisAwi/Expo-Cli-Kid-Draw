import React, { Component } from "react";
import { Image, StyleSheet, View,FlatList, Dimensions, AsyncStorage } from "react-native";
import ToolBar from "../../../../component/ToolBar";
import AppText from "../../../../component/Text";
import styleApp from "../../../../../res/style/style";
import { sizeFont, sizeWidth, sizeHeight } from "../../../../util/Size";
import IconCircleButton from "../../../../component/IconCircleButton";
import NavigationActions from "../../../../router/NavigationActions";
import {COLOR_APP_RED, COLOR_APP_SAVE, COLOR_APP_CLEAR} from "../../../../../res/style/AppStyle";
import Svg from 'react-native-svg';
import ColorPen from "../../../../component/ColorPen";
import Color from "../../../../component/Color";
import Pen from "../../../../component/Pen";
import Shape from "../../../../component/Shape";
import Shape2 from "../../../../component/Shape2";
import ShapePan from "../../../../component/ShapePan";
import ShapeKai from "../../../../component/ShapeKai";
import ShapeKai2 from "../../../../component/ShapeKai2";
import ShapeKai3 from "../../../../component/ShapeKai3";
import ShapeAnimals from "../../../../component/ShapeAnimals";
import ShapeAnimals2 from "../../../../component/ShapeAnimals2";
import ShapeObjects from "../../../../component/ShapeObjects";
import Button from "../../../../component/Button";
import { strings } from "../../../../config/i18n/i18n";
import { COLOR_DATA , PEN_DATA, NUMBER_SACLE, NUMBER_PATH} from "../../../../../Constant";
const {width, height} = Dimensions.get('window');

import {inject, observer} from "mobx-react";
@inject('paintStore')
@observer
export default class LetPaintingScreen extends Component {

  constructor(props) {
    super(props);
    this.state={
      isload: false
    }
  } 

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam("item");
    const paint = navigation.getParam("paint");
    //console.log("render Paint");
    //console.log(this.state.width, this.state.height);
    numberScale = this.props.paintStore.pNumber * NUMBER_SACLE;
    numberPath = this.props.paintStore.pNumber * this.props.paintStore.numberPath;
    //console.log(this.props.paintStore.pNumber);
    /*
    drawShape = paint == "Animals"
      ? <Svg  width={item.size.width *numberScale} height={item.size.height * numberScale}>
          {
            item.data.map((itemData, index) =>
                <ShapeKai3 paint={paint} numberScale={numberScale} numberPath={numberPath} data={itemData} idPath={itemData.number - 1} id={item.id} name={item.name} mau={"red"} isPaint={true} key={index}/>)
          }
        </Svg>
      : <Svg  width={item.size.width *numberScale} height={item.size.height * numberScale}>
          {
            item.data.map((itemData, index) =>
                <ShapeKai3 paint={paint} numberScale={numberScale} numberPath={numberPath} data={itemData} idPath={itemData.number - 1} id={item.id} name={item.name} mau={"red"} isPaint={true} key={index}/>)
          }
        </Svg>*/
    
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={require("../../../../../res/images_paint/background/backgroundA_2x.png")}
        />
        {this.renderToolbar()}
        <View
          style={{
            flex: 1,
            alignItems: "center"
          }}
        >
          <View style={styles.contentHeader}>
            <Button
              onPress={() => this.onPressSave(item, paint)}
              style={styles.button_save}
              text={strings("common.save")}
              iconLeft = {require("../../../../../res/images_paint/buttons/save.png")}
            />
            <Button
              onPress={() => this.onPressClear(item, paint)}
              style={styles.button_clear}
              textStyle={{color: "#FFF200"}}
              text={strings("common.clear")}
              iconLeft = {require("../../../../../res/images_paint/buttons/bin.png")}
            />
          </View>

          <View style={styles.contentImage}> 
            
            <Svg  width={item.size.width *numberScale} height={item.size.height * numberScale}>
              {
                item.data.map((itemData, index) =>
                    <ShapeKai3 paint={paint} numberScale={numberScale} numberPath={numberPath} data={itemData} idPath={itemData.number - 1} id={item.id} name={item.name} mau={"red"} isPaint={true} key={index}/>)
              }
            </Svg>

            <View style={styles.contentImageKai}>          

            <Svg  width={item.size.width *numberScale} height={item.size.height * numberScale}>
              {
                item.data.map((itemData, index) =>
                    <Shape paint={paint} numberScale={numberScale} numberPath={numberPath} data={itemData} idPath={itemData.number - 1} id={item.id} name={item.name} mau={"red"} isPaint={true} key={index}/>)
              }
            </Svg>
          </View>
          </View>

          <View style={styles.contentColor}>

            <View style={styles.contentPenColor}>

              <FlatList
                  data={COLOR_DATA}
                  style={{
                    margin: sizeWidth(0),
                  }}
                  
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  numColumns={1}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={this.renderItemPen}
                />
            </View>
            

            <View style={styles.contentPen}>
              <FlatList
                    data={PEN_DATA}
                    style={{
                      margin: sizeWidth(0),
                    }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    numColumns={1}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.renderItemSelectPen}
                  />
            </View>
          </View>
         
        </View>
      </View>
    );
  }


  onPressSave(item, paint){
    // Save paintedList
    this.props.paintStore.addPaintedList(paint, item.name);
    AsyncStorage.setItem("paintedList", JSON.stringify({paintedList: this.props.paintStore.paintedList}));

    // Save AsyncStore
    item.data.map((shape, shapeIndex) =>{
      keyName = item.name + shapeIndex;
      listDataStore = paint == "Animals" ? this.props.paintStore.pointAnimals[item.id].point[shapeIndex].listData : this.props.paintStore.pointObjects[item.id].point[shapeIndex].listData;
      AsyncStorage.setItem(keyName, JSON.stringify({listDataStore: listDataStore}));
      });

    const { navigation } = this.props;
    const studiedAlphabets = navigation.getParam("studiedAlphabet");
    const studiedNumber = navigation.getParam("studiedNumber");
    NavigationActions.navigate("LetPainted", {
      item: item,
      paint: paint,
      needIndexFromNavigation: true,
      isNumber: false,
      studiedAlphabet: studiedAlphabets,
      studiedNumber: studiedNumber
    });
  }

  onPressClear(item, paint){
    paint === "Animals" ? this.props.paintStore.resetAnimals(item.name) : this.props.paintStore.resetObjects(item.name);
    //this.props.paintStore.removePaintedList(item.name);
  }


  renderItemPen = ({ item , index}) => {
    numberSelectPen = this.props.paintStore.getNumberSelectPen();
    source = numberSelectPen == 1 ? item.img_1
              : numberSelectPen == 2 ? item.img_2
              : numberSelectPen == 3 ? item.img_3
              : numberSelectPen == 4 ? item.img_4
              : null;
    if (numberSelectPen == 4)
    {
      stylesImg = styles.ImgColorPen4;
    }
    else
    {
      stylesImg = styles.ImgColor;
    }

    return (
      <Color source={source} id={item.id} isPen={false} onPress={this._onPressItem(item)} styleTouch={styles.TouchColor} styleImg={stylesImg}  key={index} />
    );
    
  };

  _onPressItem(item){
    return(event) =>{
        //this.setState({colorDraw: item.color});
        this.props.paintStore.setColor(item.color);
        this.props.paintStore.setColorPen(item.id);
    }
  }

  renderItemSelectPen = ({ item , index}) => {
    if(item.id == 3)
    {
      return (
        <View style={styles.selectPen}>
            <Pen source={item.image} id={item.id} isPen={true} onPress={this._onPressItemPen(item)} styleTouch={styles.TouchPen} styleImg={styles.ImgPen4} key={index} />
        </View>
        
      );
    }
    else {
      return (
        <View style={styles.selectPen}>
            <Pen source={item.image} id={item.id} isPen={true} onPress={this._onPressItemPen(item)} styleTouch={styles.TouchPen} styleImg={styles.ImgPen} key={index} />
        </View>
        
      );
    }  
  };

  _onPressItemPen(item){
    return(event) =>{
      if (item.id == 4){
        this.props.paintStore.setColor("white");
        this.props.paintStore.setStrokeColor(30);
      }
      else
      {
        index = this.props.paintStore.getColorPenIsTrue();
        const color = COLOR_DATA[index].color;
        this.props.paintStore.setColor(color);
        this.props.paintStore.setStrokeColor(item.strokeWidth);
      }
      this.props.paintStore.setSelectPen(item.id);
      this.setState({isload: !this.state.isload})    
    }
  }

  renderToolbar = () => {
    return (
      <ToolBar
        right={this.renderToolbarRight()}
        center={
          <AppText style={styleApp.ToolBarText}>
          </AppText>
        }
      />
    );
  };

  renderToolbarRight = () => {
    return (
      <IconCircleButton
        onPress={() => this.onPressHome()}
        styleButton={{
          marginRight: sizeWidth(5)
        }}
        backgroundColor={"#8871FF"}
        source={require("../../../../../res/images_paint/buttons/home.png")}
      />
    );
  };


  onPressHome = () => {
    const { navigation } = this.props;
    const isNumber = navigation.getParam("isNumber");
    NavigationActions.navigate("Paint", {
      studiedNumber: navigation.getParam("studiedNumber"),
      studiedAlphabet: navigation.getParam("studiedAlphabet")
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    resizeMode: "stretch",
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  view_control: {
    marginBottom: sizeWidth(2),
    flexDirection: "row",
    width: "80%",
    alignContent: "center",
    justifyContent: "space-between"
  },
  icon_mode: {
    height: sizeWidth(17),
    width: sizeWidth(17)
  },
  text: {
    fontWeight: "bold",
    fontSize: sizeFont(5),
    color: "#595959",
    marginTop: sizeWidth(8)
  },
  text_number: {
    fontWeight: "bold",
    fontSize: sizeFont(5),
    color: "#595959"
  },
  button_save: {
    width: sizeWidth(35),
    backgroundColor: COLOR_APP_SAVE,
  },
  button_clear: {
    width: sizeWidth(35),
    backgroundColor: COLOR_APP_CLEAR,
  },
  contentImage: {
    marginTop: sizeHeight(4),
    alignItems: "center",
    justifyContent: "center",
    height: sizeHeight(40.5),
    width: sizeWidth(90.5),
    backgroundColor: "#fff", 
    borderRadius: sizeWidth(6),
    flexDirection: "row",
  },
  contentImageKai: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    height: sizeHeight(40.5),
    width: sizeWidth(90.5),
    borderRadius: sizeWidth(6),
    flexDirection: "row",
  },
  contentColor: {
    flex: 1,
    marginTop: sizeHeight(4),
    height: sizeHeight(35.5),
    width: "100%",
    backgroundColor: "#fff", 
    borderTopLeftRadius: sizeWidth(6),
    alignItems: "center",
    justifyContent: "center",
  },
  contentPenColor: {
    flex: 1,
    paddingHorizontal: sizeWidth(5),
    height: sizeHeight(10.5),
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: sizeWidth(6), 
    alignItems: "center",
    justifyContent: "center",
  },
  contentPen: {
    flex: 2,
    paddingHorizontal: sizeWidth(5),
    height: sizeHeight(25),
    width: "100%",
    backgroundColor: "#8B8FFF", 
    borderTopLeftRadius: sizeWidth(6),
    alignItems: "center",
    justifyContent: "center",
  },
  selectPen: {
    flex: 1,
    marginHorizontal: sizeWidth(3),
    marginVertical: sizeHeight(4),
    borderRadius: sizeWidth(20),
    backgroundColor: "#CED0FF",
    alignItems: "center",
    justifyContent: "center",
  },
  TouchColor: {
    paddingTop: sizeHeight(10),
    width: sizeWidth(8.5),
    height: sizeHeight(8.5),
  },
  TouchPen: { 
    width: sizeWidth(10),
    height: sizeHeight(6),
  },

  ImgColor: {
    resizeMode: "center",
    width: sizeWidth(5.5),
  },
  ImgColorPen4 : {
    resizeMode: "center",
    width: sizeWidth(8),
    height: sizeHeight(8.5),
  },
  ImgPen: {
    resizeMode: "center",
    width: sizeWidth(5),
  },
  ImgPen4 : {
    resizeMode: "center",
    width: sizeWidth(8),
  },
  contentHeader: {
    height: sizeHeight(8),
    width: sizeWidth(90.5),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: 'row',
  }
});
