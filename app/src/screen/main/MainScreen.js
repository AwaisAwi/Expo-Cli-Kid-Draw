import React, { Component } from "react";
import { Image, StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import CardView from "../../component/CardView";
import Text from "../../component/Text";
import Icons from "../../component/Icon";
import { strings } from "../../config/i18n/i18n";
import NavigationActions from "../../router/NavigationActions";
import { sizeHeight , sizeWidth, sizeFont} from "../../util/Size";
import { ANIMALS_DATA, COLOR_DATA, OBJECTS_DATA, SOUND} from "../../../Constant";
import PaintList from "../../component/PaintList";
import new_painting from "../../../res/images_paint/mainScreen/new_painting.svg"
import { Audio } from "expo-av";


import {inject, observer} from "mobx-react";
@inject('paintStore')
@observer
export default class MainScreen extends Component {
  constructor(props){
    super(props);
    state = {
      isPlaying: false,
    };
  }
 
  componentDidMount() {
    this._playRecording();
  }

  componentWillUnmount() {
  }

  async _playRecording() {
    try{
      //alert("Kai");
      const { sound } = await Audio.Sound.createAsync(
        SOUND[0].sound,
        {
          shouldPlay: true,
          isLooping: true,
        },
        this._updateScreenForSoundStatus);
      this.sound = sound;
      this.setState({
        isPlaying: true
      });
    }catch (error)
    {
      console.log(error);
    }
    
  }

  _updateScreenForSoundStatus = (status) => {
    
  };

  async _pauseAndPlayRecording() {
    if (this.sound != null) {
      if (this.state.isPlaying == true) {
        console.log('playing..');
        await this.sound.playAsync(); 
      }
    }
  }

  render() {
    //this._pauseAndPlayRecording()
    var paintedList = this.props.paintStore.paintedList;
    var DataPaint = [];

    paintedList.map((item, index) => {
      paintItem = item.paint =="Animals" ? ANIMALS_DATA.find(animal => animal.name == item.name):
                  OBJECTS_DATA.find(object => object.name == item.name);

      DataPaint.push(paintItem)
    });

  
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={require("../../../res/images_paint/background/background_2x.png")}
        />
       
        <View style={styles.contentHeader}>      
        </View>
        {this.renderNewPainting()}
        <TouchableOpacity onPress={() => this.OnPressPaintedList(DataPaint)} style={styles.button}>
            <Text style={styles.title}>Your last painting</Text>
            <Icons style={{marginLeft: 15}} source={require("../../../res/images_paint/buttons/next_arrow_2x.png")}/>
          </TouchableOpacity>
        <View style={styles.contentColor}>
          
          <FlatList
              data={DataPaint}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              numColumns={1}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this.renderItemPainted}
            />
          </View>
   
      </View>
    );
  }

  OnPressPaintedList(DataPaint){
    if(DataPaint.length != 0){
      NavigationActions.navigate("PaintedList", {
        studiedNumber: [],
        studiedAlphabet: [],
        DataPaint: DataPaint,
      })
    }
    
  }

  renderItemPainted = ({ item , index}) => {
    var backgroundColor = Math.floor(Math.random() * 11);
    return (
      <View style={[styles.painted, {backgroundColor: COLOR_DATA[backgroundColor].color}]}>
          <PaintList key={index} item={item}  onPress={this._onPressItemPen(item)} />
      </View>
      
    );
  };

 

  _onPressItemPen(item){
    return(event) =>{
      NavigationActions.navigate("LetNewPaint", {
        paint: item.paint,
        item: item,
        currentIndex: 0,
        needIndexFromNavigation: true,
        isNumber: false,
        studiedAlphabet: [],
        studiedNumber: []
      });
    }
  }

  renderNewPainting = () => {
    return (
      <CardView
        image={require("../../../res/images_paint/mainScreen/new_painting_2xx.png")}
        Img={new_painting}
        title={strings("menu.new_painting")}
        backgroundColor={"#fff"}
        style={styles.newPainting}
        styleImg={styles.styleImg}
        styleTitle={{fontSize: sizeFont(5.5)}}
        styleButton={{width: sizeWidth(30), height: sizeWidth(30)}}
        colorButton={"#00A100"}
        onPress={() => {
          //this._playRecording();
          NavigationActions.navigate("Paint")
        }}
      />
    );
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  backgroundImage: {
    resizeMode: "stretch",
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  contentHeader: {
    height: sizeHeight(16.5),
    width: sizeWidth(80.5),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: 'row',
  },
  contentColor: {
    height: sizeHeight(20.5),
    width: sizeWidth(70),
    alignItems: "center",
    justifyContent: "center",
  },
  painted: {
    flex: 1,
    marginHorizontal: sizeWidth(2),
    height: sizeHeight(18.5),
    width: sizeHeight(14.5),
    borderRadius: sizeWidth(3),
    backgroundColor: "#FF5C00",
    alignItems: "center",
    justifyContent: "center",
  },
  newPainting: {
    width: sizeWidth(70),
    height: sizeWidth(80),
  },
  styleImg: {
    resizeMode: "center",
    width: sizeWidth(70),
    height: sizeWidth(70),
    marginTop: sizeWidth(-10.5),
    marginRight: sizeWidth(3),
  },
  title: {
      fontWeight: 'bold',
      fontSize: sizeFont(4.5),
      color: 'black',
  },
  button: {
      margin: sizeWidth(2),
      alignItems: 'center',
      flexDirection: 'row',
      height: sizeHeight(5),
      width: sizeWidth(70),

  }
});
