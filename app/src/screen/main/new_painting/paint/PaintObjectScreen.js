import React, { Component } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import _ from "lodash";
import ToolBar from "../../../../component/ToolBar";
import AppText from "../../../../component/Text";
import styleApp from "../../../../../res/style/style";
import { strings } from "../../../../config/i18n/i18n";
import { OBJECTS_DATA } from "../../../../../Constant";
import { sizeFont, sizeWidth, sizeHeight } from "../../../../util/Size";
import NavigationActions from "../../../../router/NavigationActions";
export default class LearnAlphabetScreen extends Component {
  state = {
    studiedAlphabet: [],
    studiedNumber: []
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={require("../../../../../res/images_paint/background/backgroundA_2x.png")}
        />
         <Image
          style={styles.newPaintImage}
          source={require("../../../../../res/images_paint/newPaintingScreen/imgListPaint_2x.png")}
        />
        {this.renderToolbar()}
        {this.renderObjects()}
      </View>
    );
  }

  renderToolbar = () => {
    return (
      <ToolBar
        center={
          <AppText style={styleApp.ToolBarText}>
            {strings("paint.listObject")}
          </AppText>
        }
      />
    );
  };

  renderObjects = () => {
    return (
      <FlatList
        data={OBJECTS_DATA}
        style={{
          margin: sizeWidth(2)
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this.renderItemObject}
      />
    );
  };

  renderItemObject = ({ item }) => {
    const { navigation } = this.props;
    const Img = item.image;
    return (
      <TouchableOpacity
        onPress={() => this.onPressObject({ item })}
        style={[
          styles.view,
          { backgroundColor: "#fff" }
        ]}
      >
        <Image source={item.url} style={{resizeMode: "center", width: sizeWidth(22.4)}} />      
      </TouchableOpacity>
    );
  };



  onPressObject = ({ item }) => {
    const { navigation } = this.props;
    const studiedAlphabets = navigation.getParam("studiedAlphabet");
    const studiedNumber = navigation.getParam("studiedNumber");
    
    NavigationActions.navigate("LetNewPaint", {
      paint: item.paint,
      item: item,
      currentIndex: OBJECTS_DATA.findIndex(letter => letter.id == item.id),
      needIndexFromNavigation: true,
      isNumber: false,
      studiedAlphabet: studiedAlphabets,
      studiedNumber: studiedNumber
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
  newPaintImage: {
    position: "absolute",
    left: "-8%",
    width: "128%",
    height: "100%"
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: sizeWidth(16.4),
    height: sizeHeight(16.4),
    marginHorizontal: sizeWidth(8),
    marginVertical: sizeWidth(6),
    borderRadius: sizeWidth(6)
  }
});
