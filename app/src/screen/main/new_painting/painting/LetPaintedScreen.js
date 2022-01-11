import React, { Component } from "react";
import { Image, StyleSheet, View,FlatList, Dimensions, AsyncStorage} from "react-native";
import ToolBar from "../../../../component/ToolBar";
import AppText from "../../../../component/Text";
import styleApp from "../../../../../res/style/style";
import { sizeFont, sizeWidth, sizeHeight } from "../../../../util/Size";
import IconCircleButton from "../../../../component/IconCircleButton";
import NavigationActions from "../../../../router/NavigationActions";
import {COLOR_APP_RED, COLOR_APP_BLUE} from "../../../../../res/style/AppStyle";
import Svg from 'react-native-svg';
import Color from "../../../../component/Color";
import Shape from "../../../../component/Shape";
import Shape2 from "../../../../component/Shape2";
import ShapePainted from "../../../../component/ShapePainted";
import Button from "../../../../component/Button";
import ButtonSwiper from "../../../../component/ButtonSwiper";
import { strings } from "../../../../config/i18n/i18n";
import {NUMBER_SACLE, NUMBER_PATH, ANIMALS_DATA, OBJECTS_DATA} from "../../../../../Constant";

import {inject, observer} from "mobx-react";
@inject('paintStore')
@observer
export default class LetPaintingScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam("item");
    const paint = navigation.getParam("paint");

    numberScale = this.props.paintStore.pNumber * this.props.paintStore.numberScale;
    numberPath = this.props.paintStore.pNumber * this.props.paintStore.numberPath;

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
            <Image style={{resizeMode: "center", height: sizeHeight(8)}} source={require("../../../../../res/images_paint/buttons/finish_2x.png")}/>
          </View>

          <View style={styles.contentImage}>
            <Svg  width={item.size.width * numberScale} height={item.size.height * numberScale}>
              {
                item.data.map((itemData, index) =>
                    <ShapePainted numberScale={numberScale} numberPath={numberPath} paint={paint} data={itemData} idPath={itemData.number - 1} id={item.id} name={item.name} mau={""} isPaint={false} key={index}/>)
              }
            </Svg>

            <View style={{position: "absolute", top: sizeWidth(55), width: sizeWidth(90.5), height: sizeHeight(10), alignItems: "center", flexDirection: "row", justifyContent:"space-between"}}>
              <Image style={{resizeMode: "center", marginLeft: sizeWidth(-6), marginTop: sizeWidth(10), width: sizeHeight(20), height: sizeHeight(20)}} source={require("../../../../../res/images_paint/buttons/fireworks_left_2x.png")}/>
              <Image style={{resizeMode: "center", marginRight: sizeWidth(-6),marginTop: sizeWidth(10), width: sizeHeight(20), height: sizeHeight(20)}} source={require("../../../../../res/images_paint/buttons/fireworks_right_2x.png")}/>
            </View>
            </View>  
  

          <View style={styles.contentColor}>
            <Button
                onPress={() => this.onPressTakePhoto(item)}
                style={styles.button_take}
                text={strings("common.take")}
                iconLeft = {require("../../../../../res/images_paint/buttons/camera_2x.png")}
            />
            <Button
                onPress={() => this.onPressNextPainting(item, paint)}
                style={styles.button_next}
                text={strings("common.nextPainting")}
                iconLeft = {require("../../../../../res/images_paint/buttons/picture_2x.png")}
            />
          </View>
         
        </View>
      </View>
    );
  }

  onPressTakePhoto(item){
   
  }

  onPressNextPainting(item, paint){
    DATA = paint === "Animals" ? ANIMALS_DATA : OBJECTS_DATA;
    currentIndex = DATA.findIndex(letter => letter.id == item.id)
    if (currentIndex === DATA.length - 1)
    {
      nextItem = DATA[0];
    }
    else
    {
      nextItem = DATA[currentIndex + 1];
    }

    NavigationActions.navigate("LetNewPaint", {
      paint: nextItem.paint,
      item: nextItem,
      currentIndex: currentIndex,
      needIndexFromNavigation: true,
      isNumber: false,
      studiedAlphabet: [],
      studiedNumber: []
    });
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
  button_take: {
    marginBottom: sizeWidth(3),
    width: sizeWidth(60),
    marginTop: sizeWidth(3),
    paddingVertical: sizeWidth(2),
    backgroundColor: COLOR_APP_BLUE,
  },
  button_next: {
    marginBottom: sizeWidth(3),
    width: sizeWidth(60),
    marginTop: sizeWidth(3),
    paddingVertical: sizeWidth(2),
    backgroundColor: COLOR_APP_BLUE,
    
  },
  contentImage: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    height: sizeHeight(40.5),
    width: sizeWidth(90.5),
    backgroundColor: "#fff", 
    borderRadius: sizeWidth(6),
  },
  contentColor: {
    marginTop: 20,
    height: sizeHeight(25.5),
    width: sizeWidth(90.5),
    alignItems: "center",
    justifyContent: "center",
  },
  contentHeader: {
    height: sizeHeight(8.5),
    width: sizeWidth(90.5),
    alignItems: "center",
  },
  image: {
      justifyContent: 'center',
      alignItems: 'center'
  },
  fireworks_left: {
    resizeMode: "center",
  },
  fireworks_right: {
    resizeMode: "center",
  }
});
