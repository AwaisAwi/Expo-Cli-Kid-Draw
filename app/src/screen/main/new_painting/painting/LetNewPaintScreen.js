import React, { Component } from "react";
import { Image, StyleSheet, View, Dimensions } from "react-native";
import ToolBar from "../../../../component/ToolBar";
import AppText from "../../../../component/Text";
import styleApp from "../../../../../res/style/style";
import { strings } from "../../../../config/i18n/i18n";
import { sizeFont, sizeWidth, sizeHeight} from "../../../../util/Size";
import IconCircleButton from "../../../../component/IconCircleButton";
import Swiper from "react-native-swiper";
import Button from "../../../../component/Button";
import Icons from "../../../../component/Icon";
import NavigationActions from "../../../../router/NavigationActions";
import { AsyncStorage } from "react-native";
import { saveLearnedData } from "../../../../util/Store";
import {COLOR_APP_BLUE, COLOR_APP_RED} from "../../../../../res/style/AppStyle";
import {ANIMALS_DATA, OBJECTS_DATA} from "../../../../../Constant";
export default class LetNewPaintScreen extends Component {
  state = {
    page: 0,
    isTouchNext: false
  };

  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const currentIndex = navigation.getParam("currentIndex");
    this.state = {
      page: currentIndex,
      isTouchNext: false,
      
    };
  }

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam("item");
    const paint = navigation.getParam("paint");
    const page = this.state.page;
    const Img = item.imageColor;
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
          <View style={styles.contentImage}>
            <Image
              style={styles.backgroundImage}
              resizeMode={"stretch"}
              source={item.backgroundImg}
            />
            <Img height={sizeHeight(50)} width={sizeWidth(50)} />     
          </View>
          <Button
            onPress={() => this.onPressNext(item, paint)}
            style={styles.button_replay}
            text={strings("common.next")}
            iconRight = {require("../../../../../res/images_paint/buttons/next.png")}
          />
           <Button
            onPress={() => this.onPressPainting(item, paint)}
            style={styles.button_painting}
            text={strings("common.painting")}
            iconRight = {require("../../../../../res/images_paint/buttons/paint.png")}
          />
        </View>
      </View>
    );
  }


  onPressNext = (item, paint) => {
    
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
  };

  onPressPainting = (item, paint) => {
    const { navigation } = this.props;
    const studiedAlphabets = navigation.getParam("studiedAlphabet");
    const studiedNumber = navigation.getParam("studiedNumber");
    
    NavigationActions.navigate("LetPaint", {
      paint: paint,
      item: item,
      needIndexFromNavigation: true,
      isNumber: false,
      studiedAlphabet: studiedAlphabets,
      studiedNumber: studiedNumber
    });
  };

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
    flex: 1,
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
  button_replay: {
    marginBottom: sizeWidth(3),
    width: sizeWidth(60),
    marginTop: sizeWidth(5),
    paddingVertical: sizeWidth(2),
    backgroundColor: COLOR_APP_BLUE,
  },
  button_painting: {
    marginBottom: sizeWidth(3),
    width: sizeWidth(60),
    marginTop: sizeWidth(5),
    paddingVertical: sizeWidth(2),
    backgroundColor: COLOR_APP_RED,
    
  },
  contentImage: {
    height: sizeHeight(60.5),
    width: sizeWidth(80.5),
    borderRadius: sizeWidth(6),
    alignItems: "center",
    justifyContent: "center",
  }
});
