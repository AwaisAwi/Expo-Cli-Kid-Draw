import React, { Component } from "react";
import _ from "lodash";
import { Image, StyleSheet, View } from "react-native";
import ToolBar from "../../../component/ToolBar";
import styleApp from "../../../../res/style/style";
import AppText from "../../../component/Text";
import { strings } from "../../../config/i18n/i18n";
import CardView from "../../../component/CardView";

import { sizeWidth } from "../../../util/Size";
import NavigationActions from "../../../router/NavigationActions";
import { AsyncStorage } from "react-native";



export default class PaintScreen extends Component {
  state = {
    isLoading: true,
    studiedAlphabet: [],
    studiedNumber: []
  };

  componentDidMount() {
    AsyncStorage.getAllKeys((error, keys) => {
      AsyncStorage.multiGet(keys, (error, stores) => {
        const alphabets = [];
        const numbers = [];
        stores.map((result, i, store) => {
          // get at each store's key/value so you can work with it
          if (store[i] != null) {
            //data provide is [key: value] - value [[]]
            if (store[i][0] == "learned_alphabets") {
              alphabets.push(JSON.parse(store[i][1]));
            }

            if (store[i][0] == "learned_numbers") {
              numbers.push(JSON.parse(store[i][1]));
            }
          }
          if (i == keys.length - 1) {
            this.setState({
              isLoading: false,
              studiedAlphabet: alphabets[0],
              studiedNumber: numbers[0]
            });
          }
        });
      });
    });
  }

  render() {
    if (!this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Image
            style={styles.backgroundImage}
            source={require("../../../../res/images_paint/background/backgroundA_2x.png")}
          />
          <Image
          style={styles.newPaintImage}
          source={require("../../../../res/images_paint/mainScreen/new_paint_ball_2x.png")}
        />
          {this.renderToolbar()}
          <View
            style={{
              width: "100%",
              alignItems: "center",
              position: "absolute",
              top: sizeWidth(20)
            }}
          >
            {this.renderAnimal()}
            {this.renderObject()}
          </View>
        </View>
      );
    } else {
      return null;
    }
  }

  renderToolbar = () => {
    return (
      <ToolBar
        center={
          <AppText style={styleApp.ToolBarText}>
            {strings("paint.title")}
          </AppText>
        }
      />
    );
  };

  renderAnimal = () => {
    return (
      <CardView
        image={require("../../../../res/images_paint/newPaintingScreen/animals_2x.png")}
        styleImg={styles.styleAnimal}
        title={strings("paint.animals")}
        backgroundColor={"#fff989"}
        colorButton={"#FE6230"}
        onPress={() =>
          NavigationActions.navigate("PaintAnimals", {
            studiedNumber: this.state.studiedNumber,
            studiedAlphabet: this.state.studiedAlphabet
          })
        }
      />
    );
  };

  renderObject = () => {
    const { studiedAlphabet } = this.state;

    return (
      <CardView
        image={require("../../../../res/images_paint/newPaintingScreen/object_2x.png")}
        styleImg={styles.styleObject}
        title={strings("paint.objects")}
        backgroundColor={"#B29FFF"}
        colorButton={"#FE6230"}
        onPress={() =>
          NavigationActions.navigate("PaintObjects", {
            studiedNumber: this.state.studiedNumber,
            studiedAlphabet: this.state.studiedAlphabet
          })
        }
      />
    );
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
    width: "100%",
    height: "100%"
  },
  styleAnimal: {
    resizeMode: "center",
    width: sizeWidth(70),
    height: sizeWidth(50),
    marginLeft: sizeWidth(-5),
  },
  styleObject: {
    resizeMode: "center",
    width: sizeWidth(70),
    height: sizeWidth(50),
    marginLeft: sizeWidth(-5),
  }
});
