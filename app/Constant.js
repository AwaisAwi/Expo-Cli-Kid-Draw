import React from 'react';
import {
  Platform,
  StatusBar
} from "react-native";
import {
  isIPhoneX
} from "./src/util/Device";
import {
  sizeWidth
} from "./src/util/Size";
import {
  strings
} from "./src/config/i18n/i18n";

import bee from "./res/images_paint/animals/bee.svg";
import bird from "./res/images_paint/animals/bird.svg";
import bulldog from "./res/images_paint/animals/bulldog.svg";
import butterfly from "./res/images_paint/animals/butterfly.svg";
import cat from "./res/images_paint/animals/cat.svg";
import crab from "./res/images_paint/animals/crab.svg";
import dolphin from "./res/images_paint/animals/dolphin.svg";
import drakefly from "./res/images_paint/animals/drakefly.svg";
import duck from "./res/images_paint/animals/duck.svg";
import fish from "./res/images_paint/animals/fish.svg";
import frog from "./res/images_paint/animals/frog.svg";
import jellyfish from "./res/images_paint/animals/jellyfish.svg";
import owl from "./res/images_paint/animals/owl.svg";
import penguin from "./res/images_paint/animals/penguin.svg";
import pig from "./res/images_paint/animals/pig.svg";
import snail from "./res/images_paint/animals/snail.svg";
import spider from "./res/images_paint/animals/spider.svg";
import toucan from "./res/images_paint/animals/toucan.svg";
import turtle from "./res/images_paint/animals/turtle.svg";
import whale from "./res/images_paint/animals/whale.svg";

import beeColor from "./res/images_paint/animals_color/bee.svg";
import birdColor from "./res/images_paint/animals_color/bird.svg";
import bulldogColor from "./res/images_paint/animals_color/bulldog.svg";
import butterflyColor from "./res/images_paint/animals_color/butterfly.svg";
import catColor from "./res/images_paint/animals_color/cat.svg";
import crabColor from "./res/images_paint/animals_color/crab.svg";
import dolphinColor from "./res/images_paint/animals_color/dolphin.svg";
import drakeflyColor from "./res/images_paint/animals_color/drakefly.svg";
import duckColor from "./res/images_paint/animals_color/duck.svg";
import fishColor from "./res/images_paint/animals_color/fish.svg";
import frogColor from "./res/images_paint/animals_color/frog.svg";
import jellyfishColor from "./res/images_paint/animals_color/jellyfish.svg";
import owlColor from "./res/images_paint/animals_color/owl.svg";
import penguinColor from "./res/images_paint/animals_color/penguin.svg";
import pigColor from "./res/images_paint/animals_color/pig.svg";
import snailColor from "./res/images_paint/animals_color/snail.svg";
import spiderColor from "./res/images_paint/animals_color/spider.svg";
import toucanColor from "./res/images_paint/animals_color/toucan.svg";
import turtleColor from "./res/images_paint/animals_color/turtle.svg";
import whaleColor from "./res/images_paint/animals_color/whale.svg";

import ball from "./res/images_paint/objects/ball.svg";
import boat from "./res/images_paint/objects/boat.svg";
import boombox from "./res/images_paint/objects/boombox.svg";
import fake_taxi from "./res/images_paint/objects/fake_taxi.svg";
import flying_car from "./res/images_paint/objects/flying_car.svg";
import gameboy from "./res/images_paint/objects/gameboy.svg";
import hamberger from "./res/images_paint/objects/hamberger.svg";
import milf from "./res/images_paint/objects/milf.svg";
import mushroom from "./res/images_paint/objects/mushroom.svg";
import robot from "./res/images_paint/objects/robot.svg";
import rocket from "./res/images_paint/objects/rocket.svg";

import ballColor from "./res/images_paint/objects_color/ball.svg";
import boatColor from "./res/images_paint/objects_color/boat.svg";
import boomboxColor from "./res/images_paint/objects_color/boombox.svg";
import fake_taxiColor from "./res/images_paint/objects_color/fake_taxi.svg";
import flying_carColor from "./res/images_paint/objects_color/flying_car.svg";
import gameboyColor from "./res/images_paint/objects_color/gameboy.svg";
import hambergerColor from "./res/images_paint/objects_color/hamberger.svg";
import milfColor from "./res/images_paint/objects_color/milf.svg";
import mushroomColor from "./res/images_paint/objects_color/mushroom.svg";
import robotColor from "./res/images_paint/objects_color/robot.svg";
import rocketColor from "./res/images_paint/objects_color/rocket.svg";

import penA_1 from "./res/images_paint/pen/A/penA_1.svg";
import penA_2 from "./res/images_paint/pen/A/penA_2.svg";
import penA_3 from "./res/images_paint/pen/A/penA_3.svg";
import penA_4 from "./res/images_paint/pen/A/penA_4.svg";
import penA_5 from "./res/images_paint/pen/A/penA_5.svg";
import penA_6 from "./res/images_paint/pen/A/penA_6.svg";
import penA_7 from "./res/images_paint/pen/A/penA_7.svg";
import penA_8 from "./res/images_paint/pen/A/penA_8.svg";
import penA_9 from "./res/images_paint/pen/A/penA_9.svg";
import penA_10 from "./res/images_paint/pen/A/penA_10.svg";
import penA_11 from "./res/images_paint/pen/A/penA_11.svg";
import penA_12 from "./res/images_paint/pen/A/penA_12.svg";

import penB_1 from "./res/images_paint/pen/B/penB_1.svg";
import penB_2 from "./res/images_paint/pen/B/penB_2.svg";
import penB_3 from "./res/images_paint/pen/B/penB_3.svg";
import penB_4 from "./res/images_paint/pen/B/penB_4.svg";
import penB_5 from "./res/images_paint/pen/B/penB_5.svg";
import penB_6 from "./res/images_paint/pen/B/penB_6.svg";
import penB_7 from "./res/images_paint/pen/B/penB_7.svg";
import penB_8 from "./res/images_paint/pen/B/penB_8.svg";
import penB_9 from "./res/images_paint/pen/B/penB_9.svg";
import penB_10 from "./res/images_paint/pen/B/penB_10.svg";
import penB_11 from "./res/images_paint/pen/B/penB_11.svg";
import penB_12 from "./res/images_paint/pen/B/penB_12.svg";

import penC_1 from "./res/images_paint/pen/C/penC_1.svg";
import penC_2 from "./res/images_paint/pen/C/penC_2.svg";
import penC_3 from "./res/images_paint/pen/C/penC_3.svg";
import penC_4 from "./res/images_paint/pen/C/penC_4.svg";
import penC_5 from "./res/images_paint/pen/C/penC_5.svg";
import penC_6 from "./res/images_paint/pen/C/penC_6.svg";
import penC_7 from "./res/images_paint/pen/C/penC_7.svg";
import penC_8 from "./res/images_paint/pen/C/penC_8.svg";
import penC_9 from "./res/images_paint/pen/C/penC_9.svg";
import penC_10 from "./res/images_paint/pen/C/penC_10.svg";
import penC_11 from "./res/images_paint/pen/C/penC_11.svg";
import penC_12 from "./res/images_paint/pen/C/penC_12.svg";

import penD_1 from "./res/images_paint/pen/D/penD_1.svg";
import penD_2 from "./res/images_paint/pen/D/penD_2.svg";
import penD_3 from "./res/images_paint/pen/D/penD_3.svg";
import penD_4 from "./res/images_paint/pen/D/penD_4.svg";
import penD_5 from "./res/images_paint/pen/D/penD_5.svg";
import penD_6 from "./res/images_paint/pen/D/penD_6.svg";
import penD_7 from "./res/images_paint/pen/D/penD_7.svg";
import penD_8 from "./res/images_paint/pen/D/penD_8.svg";
import penD_9 from "./res/images_paint/pen/D/penD_9.svg";
import penD_10 from "./res/images_paint/pen/D/penD_10.svg";
import penD_11 from "./res/images_paint/pen/D/penD_11.svg";
import penD_12 from "./res/images_paint/pen/D/penD_12.svg";

import pencil from "./res/images_paint/pen/stylePen/pencil.svg";
import paint_brush from "./res/images_paint/pen/stylePen/paint-brush.svg";
import crayon from "./res/images_paint/pen/stylePen/crayon.svg";
import brush from "./res/images_paint/pen/stylePen/brush.svg";
import eraser from "./res/images_paint/pen/stylePen/eraser.svg";

const STATUS_BAR_IOS_HEIGHT = isIPhoneX() ? 30 : 20;
export const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? STATUS_BAR_IOS_HEIGHT : StatusBar.currentHeight;
export const BOTTOM_BAR_HEIGHT = isIPhoneX() ? 34 : 0;
export const TOOL_BAR_HEIGHT = sizeWidth(12) + STATUS_BAR_HEIGHT

// Zoom  shape
export const NUMBER_SACLE = 0.5;
export const NUMBER_PATH = NUMBER_SACLE / 4;

export const TUTORIAL_DATA = [{
  id: 0,
  image: require('./res/images_paint/onB/tutorial_2x_1.png'),
  background_image: require('./res/images_paint/onB/OnB_2x_1.png'),
  title: strings('tutorial.tutorial_title_1'),
  backgroundColor: "#006C39",
  content: strings('tutorial.tutorial_content_1'),
  button: strings('tutorial.button_started'),
},
{
  id: 1,
  image: require('./res/images_paint/onB/tutorial_2x_2.png'),
  background_image: require('./res/images_paint/onB/OnB_2x_2.png'),
  title: strings('tutorial.tutorial_title_2'),
  backgroundColor: "#656AFF",
  content: strings('tutorial.tutorial_content_2'),
  button: strings('tutorial.button_ship'),
  dot: require("./res/images_paint/onB/dot2_2x.png"),
},
{
  id: 2,
  image: require('./res/images_paint/onB/tutorial_2x_3.png'),
  background_image: require('./res/images_paint/onB/OnB_2x_3.png'),
  title: strings('tutorial.tutorial_title_3'),
  backgroundColor: "#C3184E",
  content: strings('tutorial.tutorial_content_3'),
  button: strings('tutorial.button_ship'),
  dot: require("./res/images_paint/onB/dot3_2x.png"),
},
{
  id: 3,
  image: require('./res/images_paint/onB/tutorial_2x_4.png'),
  background_image: require('./res/images_paint/onB/OnB_2x_4.png'),
  title: strings('tutorial.tutorial_title_4'),
  backgroundColor: "#971993",
  content: strings('tutorial.tutorial_content_4'),
  button: strings('tutorial.button_let_go'),
}
]

export const COLOR_DATA = [
  {
    id: 0,
    img_1: require('./res/images_paint/pen/B/penB_2x_1.png'),
    img_2: require('./res/images_paint/pen/A/penA_2x_1.png'),
    img_3: require('./res/images_paint/pen/C/penC_2x_1.png'),
    img_4: require('./res/images_paint/pen/D/penD_2x_1.png'),
    img_5: require('./res/images_paint/pen/A/penA_2x_1.png'),
  
    imgP_1: penB_1,
    imgP_2: penA_1,
    imgP_3: penC_1,
    imgP_4: penD_1,
    imgP_5: penA_1,
  
    color: "#7FC325"
  },
  {
    id: 1,
    img_1: require('./res/images_paint/pen/B/penB_2x_2.png'),
    img_2: require('./res/images_paint/pen/A/penA_2x_2.png'),
    img_3: require('./res/images_paint/pen/C/penC_2x_2.png'),
    img_4: require('./res/images_paint/pen/D/penD_2x_2.png'),
    img_5: require('./res/images_paint/pen/A/penA_2x_2.png'),
  
    imgP_1: penB_2,
    imgP_2: penA_2,
    imgP_3: penC_2,
    imgP_4: penD_2,
    imgP_5: penA_2,
  
    color: "#006C39"
  },
  {
    id: 2,
    img_1: require('./res/images_paint/pen/B/penB_2x_3.png'),
    img_2: require('./res/images_paint/pen/A/penA_2x_3.png'),
    img_3: require('./res/images_paint/pen/C/penC_2x_3.png'),
    img_4: require('./res/images_paint/pen/D/penD_2x_3.png'),
    img_5: require('./res/images_paint/pen/A/penA_2x_3.png'),
  
    imgP_1: penB_3,
    imgP_2: penA_3,
    imgP_3: penC_3,
    imgP_4: penD_3,
    imgP_5: penA_3,
  
    color: "#00C8BA"
  },
  {
    id: 3,
    img_1: require('./res/images_paint/pen/B/penB_2x_4.png'),
    img_2: require('./res/images_paint/pen/A/penA_2x_4.png'),
    img_3: require('./res/images_paint/pen/C/penC_2x_4.png'),
    img_4: require('./res/images_paint/pen/D/penD_2x_4.png'),
    img_5: require('./res/images_paint/pen/A/penA_2x_4.png'),
  
    imgP_1: penB_4,
    imgP_2: penA_4,
    imgP_3: penC_4,
    imgP_4: penD_4,
    imgP_5: penA_4,
  
    color: "#656AFF"
  },
  {
    id: 4,
    img_1: require('./res/images_paint/pen/B/penB_2x_5.png'),
    img_2: require('./res/images_paint/pen/A/penA_2x_5.png'),
    img_3: require('./res/images_paint/pen/C/penC_2x_5.png'),
    img_4: require('./res/images_paint/pen/D/penD_2x_5.png'),
    img_5: require('./res/images_paint/pen/A/penA_2x_5.png'),
  
    imgP_1: penB_5,
    imgP_2: penA_5,
    imgP_3: penC_5,
    imgP_4: penD_5,
    imgP_5: penA_5,
  
    color: "#51008E"
  },
  {
    id: 5,
    img_1: require('./res/images_paint/pen/B/penB_2x_6.png'),
    img_2: require('./res/images_paint/pen/A/penA_2x_6.png'),
    img_3: require('./res/images_paint/pen/C/penC_2x_6.png'),
    img_4: require('./res/images_paint/pen/D/penD_2x_6.png'),
    img_5: require('./res/images_paint/pen/A/penA_2x_6.png'),
  
    imgP_1: penB_6,
    imgP_2: penA_6,
    imgP_3: penC_6,
    imgP_4: penD_6,
    imgP_5: penA_6,
  
    color: "#971993"
  },
  {
    id: 6,
    img_1: require('./res/images_paint/pen/B/penB_2x_7.png'),
    img_2: require('./res/images_paint/pen/A/penA_2x_7.png'),
    img_3: require('./res/images_paint/pen/C/penC_2x_7.png'),
    img_4: require('./res/images_paint/pen/D/penD_2x_7.png'),
    img_5: require('./res/images_paint/pen/A/penA_2x_7.png'),
  
    imgP_1: penB_7,
    imgP_2: penA_7,
    imgP_3: penC_7,
    imgP_4: penD_7,
    imgP_5: penA_7,
  
    color: "#C3184E"
  },
  {
    id: 7,
    img_1: require('./res/images_paint/pen/B/penB_2x_8.png'),
    img_2: require('./res/images_paint/pen/A/penA_2x_8.png'),
    img_3: require('./res/images_paint/pen/C/penC_2x_8.png'),
    img_4: require('./res/images_paint/pen/D/penD_2x_8.png'),
    img_5: require('./res/images_paint/pen/A/penA_2x_8.png'),
  
    imgP_1: penB_8,
    imgP_2: penA_8,
    imgP_3: penC_8,
    imgP_4: penD_8,
    imgP_5: penA_8,
  
    color: "#ED1C24"
  },
  {
    id: 8,
    img_1: require('./res/images_paint/pen/B/penB_2x_9.png'),
    img_2: require('./res/images_paint/pen/A/penA_2x_9.png'),
    img_3: require('./res/images_paint/pen/C/penC_2x_9.png'),
    img_4: require('./res/images_paint/pen/D/penD_2x_9.png'),
    img_5: require('./res/images_paint/pen/A/penA_2x_9.png'),
  
    imgP_1: penB_9,
    imgP_2: penA_9,
    imgP_3: penC_9,
    imgP_4: penD_9,
    imgP_5: penA_9,
  
    color: "#F1592A"
  },
  {
    id: 9,
    img_1: require('./res/images_paint/pen/B/penB_2x_10.png'),
    img_2: require('./res/images_paint/pen/A/penA_2x_10.png'),
    img_3: require('./res/images_paint/pen/C/penC_2x_10.png'),
    img_4: require('./res/images_paint/pen/D/penD_2x_10.png'),
    img_5: require('./res/images_paint/pen/A/penA_2x_10.png'),
  
    imgP_1: penB_10,
    imgP_2: penA_10,
    imgP_3: penC_10,
    imgP_4: penD_10,
    imgP_5: penA_10,
  
    color: "#F8981E"
  },
  {
    id: 10,
    img_1: require('./res/images_paint/pen/B/penB_2x_11.png'),
    img_2: require('./res/images_paint/pen/A/penA_2x_11.png'),
    img_3: require('./res/images_paint/pen/C/penC_2x_11.png'),
    img_4: require('./res/images_paint/pen/D/penD_2x_11.png'),
    img_5: require('./res/images_paint/pen/A/penA_2x_11.png'),
  
    imgP_1: penB_11,
    imgP_2: penA_11,
    imgP_3: penC_11,
    imgP_4: penD_11,
    imgP_5: penA_11,
  
    color: "#FCB040"
  },
  {
    id: 11,
    img_1: require('./res/images_paint/pen/B/penB_2x_12.png'),
    img_2: require('./res/images_paint/pen/A/penA_2x_12.png'),
    img_3: require('./res/images_paint/pen/C/penC_2x_12.png'),
    img_4: require('./res/images_paint/pen/D/penD_2x_12.png'),
    img_5: require('./res/images_paint/pen/A/penA_2x_12.png'),
  
    imgP_1: penB_12,
    imgP_2: penA_12,
    imgP_3: penC_12,
    imgP_4: penD_12,
    imgP_5: penA_12,
  
    color: "#FFF200"
  }
  
]

export const PEN_DATA = [{
  id: 0,
  image: require('./res/images_paint/pen/stylePen/pencil_2x.png'),
  imageP: pencil,
  strokeWidth: 10,
},
{
  id: 1,
  image: require('./res/images_paint/pen/stylePen/paint-brush_2x.png'),
  imageP: paint_brush,
  strokeWidth: 20,
},
{
  id: 2,
  image: require('./res/images_paint/pen/stylePen/crayon_2x.png'),
  imageP: crayon,
  strokeWidth: 35,
},
{
  id: 3,
  image: require('./res/images_paint/pen/stylePen/brush_2x.png'),
  imageP: brush,
  strokeWidth: 50,
},
{
  id: 4,
  image: require('./res/images_paint/pen/stylePen/eraser_2x.png'),
  imageP: eraser,
  strokeWidth: 10,
}
]

export const SOUND = [
  {
    action: "background",
    sound: require('./res/assets/sounds/draw/backgroundMusic.mp3'),
  },
  {
    action: "click",
    sound: require('./res/assets/sounds/draw/click.mp3'),
  },
  {
    action: "draw",
    sound: require('./res/assets/sounds/draw/draw.mp3'),
  }
]

export const ANIMALS_DATA = [
  {
    id: 0,
    name: "bee",
    paint: "Animals",
    size: { width: 82, height: 79 },
    image: bee,
    imageColor: beeColor,
    url: require('../app/res/images_paint/animals/bee_2x.png'),
    url_color: require('../app/res/images_paint/animals_color/bee.png'),
    backgroundImg: require('../app/res/images_paint/newPaint/garden2.png'),
    data: [
      {
        number: 1,
        d: "M14.0283 40.1768L11.9819 40.7319C8.15177 41.7708 4.61692 43.6889 1.65802 46.3336C0.780986 47.1175 0.780986 48.49 1.65802 49.2741C4.61692 51.9188 8.15177 53.8369 11.9819 54.876L14.0282 55.4311L14.0283 40.1768Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 2,
        d: "M34.9405 35.6391H45.7458C53.0911 35.6391 59.0458 29.6845 59.0458 22.3391C59.0458 14.9938 53.0913 9.03906 45.7458 9.03906C38.4005 9.03906 32.4458 14.9936 32.4458 22.3391V33.1444C32.446 34.5222 33.5628 35.6391 34.9405 35.6391Z",
        fill: "#fff",
        stroke: "none",
        opacity: "none",
        isColor: true,

      },
      {
        number: 3,
        d: "M34.9405 35.6391H45.7458C53.0911 35.6391 59.0458 29.6845 59.0458 22.3391C59.0458 14.9938 53.0913 9.03906 45.7458 9.03906C38.4005 9.03906 32.4458 14.9936 32.4458 22.3391V33.1444C32.446 34.5222 33.5628 35.6391 34.9405 35.6391Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 4,
        d: "M18.7484 77.2987C18.134 77.2987 17.5147 77.1076 16.9845 76.7114C15.6793 75.7361 15.4123 73.8873 16.3878 72.5821C18.627 69.5862 18.627 66.6631 18.627 62.2382C18.627 60.609 19.9478 59.2881 21.5772 59.2881C23.2065 59.2881 24.5273 60.6089 24.5273 62.2382C24.5273 67.0256 24.5273 71.5475 21.1137 76.1145C20.5345 76.8897 19.6468 77.2987 18.7484 77.2987Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 5,
        d: "M21.5772 59.2886C19.948 59.2886 18.627 60.6094 18.627 62.2387C18.627 64.1611 18.6267 65.7998 18.4431 67.2844C20.2025 68.1512 22.1217 68.7429 24.1456 69.0009C24.5261 66.7853 24.5273 64.5428 24.5273 62.2387C24.5273 60.6094 23.2064 59.2886 21.5772 59.2886Z",
        fill: "#fff",
        stroke: "none",
        opacity: "0.14",
        isColor: true,

      },
      {
        number: 6,
        d: "M30.2266 77.2987C29.6122 77.2987 28.9925 77.1076 28.4627 76.7114C27.1575 75.7359 26.8905 73.8873 27.8659 72.5821C30.1055 69.5862 30.1055 66.6629 30.1055 62.2382C30.1055 60.609 31.4262 59.2881 33.0556 59.2881C34.685 59.2881 36.0058 60.6089 36.0058 62.2382C36.0058 67.0256 36.0058 71.5475 32.592 76.1145C32.0127 76.8897 31.1252 77.2987 30.2266 77.2987Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 7,
        d: "M41.7053 77.2987C41.091 77.2987 40.4716 77.1076 39.9414 76.7114C38.6364 75.7361 38.3692 73.8873 39.3447 72.5821C41.5839 69.5862 41.5839 66.6631 41.5839 62.2382C41.5839 60.609 42.9047 59.2881 44.5341 59.2881C46.1635 59.2881 47.4842 60.6089 47.4842 62.2382C47.4842 67.0256 47.4842 71.5475 44.0706 76.1145C43.4914 76.8897 42.6038 77.2987 41.7053 77.2987Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 8,
        d: "M44.5337 59.2886C42.9044 59.2886 41.5835 60.6094 41.5835 62.2387C41.5835 64.9987 41.5834 67.1744 41.0399 69.1479H47.0765C47.4829 66.8845 47.4838 64.5937 47.4838 62.2387C47.4838 60.6094 46.1629 59.2886 44.5337 59.2886Z",
        fill: "#fff",
        stroke: "none",
        opacity: "0.14",
        isColor: true,

      },
      {
        number: 9,
        d: "M53.1836 77.2987C52.5692 77.2987 51.9497 77.1076 51.4197 76.7114C50.1145 75.7361 49.8475 73.8873 50.823 72.5821C53.0623 69.5862 53.0623 66.6631 53.0623 62.2382C53.0623 60.609 54.3831 59.2881 56.0125 59.2881C57.6419 59.2881 58.9627 60.6089 58.9627 62.2382C58.9627 67.0256 58.9627 71.5475 55.5491 76.1145C54.9695 76.8897 54.082 77.2987 53.1836 77.2987Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 10,
        d: "M56.0123 59.2886C54.383 59.2886 53.0621 60.6094 53.0621 62.2387C53.0621 64.7559 53.0615 66.7869 52.6493 68.6219C54.9376 68.0594 57.0555 67.064 58.9113 65.727C58.9621 64.5772 58.9624 63.4161 58.9624 62.2387C58.9623 60.6094 57.6415 59.2886 56.0123 59.2886Z",
        fill: "#fff",
        stroke: "none",
        opacity: "0.14",
        isColor: true,

      },
      {
        number: 11,
        d: "M48.2952 65.9843H26.4678C16.4266 65.9843 8.28674 57.8443 8.28674 47.8032C8.28674 37.7619 16.4267 29.6221 26.4678 29.6221H48.2952C58.3363 29.6221 66.4763 37.7621 66.4763 47.8032C66.4763 57.8443 58.3363 65.9843 48.2952 65.9843Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 12,
        d: "M33.0555 59.2886C31.4263 59.2886 30.1054 60.6094 30.1054 62.2387C30.1054 64.9986 30.1052 67.1744 29.5618 69.1479H35.5983C36.0047 66.8845 36.0057 64.5937 36.0057 62.2387C36.0055 60.6094 34.6847 59.2886 33.0555 59.2886Z",
        fill: "#fff",
        stroke: "none",
        opacity: "0.14",
        isColor: true,

      },
      {
        number: 13,
        d: "M26.4674 29.6221C26.1146 29.6221 25.7646 29.6332 25.4168 29.653C18.3823 38.2714 18.7615 57.28 28.6321 65.9844H45.329C35.4468 57.2699 35.0779 38.226 42.1383 29.6221H26.4674Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 14,
        d: "M32.1091 35.6391H21.3038C13.9585 35.6391 8.00378 29.6845 8.00378 22.3391C8.00378 14.9938 13.9583 9.03906 21.3038 9.03906C28.6491 9.03906 34.6038 14.9936 34.6038 22.3391V33.1444C34.6036 34.5222 33.4868 35.6391 32.1091 35.6391Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 15,
        d: "M57.1514 55.1704C70.3225 55.1704 80.9999 46.0832 80.9999 34.8735C80.9999 23.6639 70.3225 14.5767 57.1514 14.5767C43.9803 14.5767 33.303 23.6639 33.303 34.8735C33.303 46.0832 43.9803 55.1704 57.1514 55.1704Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 16,
        d: "M46.5268 38.2317C49.0781 38.2317 51.1462 36.5847 51.1462 34.5531C51.1462 32.5215 49.0781 30.8745 46.5268 30.8745C43.9756 30.8745 41.9075 32.5215 41.9075 34.5531C41.9075 36.5847 43.9756 38.2317 46.5268 38.2317Z",
        fill: "#F27281",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 17,
        d: "M71.5659 38.2317C74.1171 38.2317 76.1853 36.5847 76.1853 34.5531C76.1853 32.5215 74.1171 30.8745 71.5659 30.8745C69.0147 30.8745 66.9465 32.5215 66.9465 34.5531C66.9465 36.5847 69.0147 38.2317 71.5659 38.2317Z",
        fill: "#F27281",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 18,
        d: "M51.4172 31.723C50.7699 31.723 50.2454 31.1985 50.2454 30.5511C50.2454 29.985 49.7847 29.5244 49.2187 29.5244C48.6524 29.5244 48.1918 29.985 48.1918 30.5511C48.1918 31.1985 47.6672 31.723 47.0199 31.723C46.3726 31.723 45.848 31.1985 45.848 30.5511C45.848 28.6925 47.3602 27.1807 49.2187 27.1807C51.0771 27.1807 52.5891 28.6927 52.5891 30.5511C52.5891 31.1983 52.0646 31.723 51.4172 31.723Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 19,
        d: "M71.0712 31.723C70.4238 31.723 69.8993 31.1985 69.8993 30.5511C69.8993 29.985 69.4387 29.5244 68.8726 29.5244C68.3063 29.5244 67.8457 29.985 67.8457 30.5511C67.8457 31.1985 67.3212 31.723 66.6738 31.723C66.0265 31.723 65.502 31.1985 65.502 30.5511C65.502 28.6925 67.0141 27.1807 68.8726 27.1807C70.7312 27.1807 72.243 28.6927 72.243 30.5511C72.243 31.1983 71.7185 31.723 71.0712 31.723Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 20,
        d: "M59.0457 35.3546C57.8132 35.3546 56.6412 34.8209 55.8301 33.8904C55.4048 33.4024 55.4556 32.6623 55.9434 32.237C56.4317 31.8113 57.1717 31.8623 57.5968 32.3502C57.9629 32.7702 58.4911 33.011 59.0457 33.011C59.6006 33.011 60.1287 32.7702 60.4946 32.3502C60.9198 31.8624 61.66 31.8115 62.1481 32.237C62.6359 32.6623 62.6865 33.4024 62.2614 33.8904C61.4503 34.8209 60.2782 35.3546 59.0457 35.3546Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 21,
        d: "M48.7464 20.0315C48.1767 20.0315 47.6769 19.6151 47.5892 19.0345C47.1947 16.4215 47.2524 5.352 54.883 2.98044C55.501 2.78809 56.1577 3.13387 56.3499 3.75184C56.5421 4.36981 56.1967 5.02653 55.5786 5.21872C53.1378 5.97731 51.4242 8.10841 50.4858 11.5528C49.7041 14.4218 49.7113 17.3897 49.9069 18.6847C50.0035 19.3247 49.5631 19.9218 48.9231 20.0184C48.8636 20.0272 48.8047 20.0315 48.7464 20.0315Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 22,
        d: "M55.2312 7.49787C57.1082 7.49787 58.6298 5.97627 58.6298 4.09928C58.6298 2.22229 57.1082 0.700684 55.2312 0.700684C53.3542 0.700684 51.8326 2.22229 51.8326 4.09928C51.8326 5.97627 53.3542 7.49787 55.2312 7.49787Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 23,
        d: "M65.5545 20.0315C64.9848 20.0315 64.485 19.6151 64.3973 19.0345C64.0028 16.4215 64.0605 5.352 71.6911 2.98044C72.3088 2.78809 72.9658 3.13387 73.158 3.75184C73.35 4.36981 73.0048 5.02653 72.3867 5.21872C69.9458 5.97731 68.2323 8.10841 67.2939 11.5528C66.5122 14.4217 66.5194 17.3897 66.715 18.6847C66.8116 19.3247 66.3713 19.9218 65.7313 20.0184C65.6717 20.0272 65.6128 20.0315 65.5545 20.0315Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 24,
        d: "M72.0387 7.49787C73.9157 7.49787 75.4373 5.97627 75.4373 4.09928C75.4373 2.22229 73.9157 0.700684 72.0387 0.700684C70.1617 0.700684 68.6401 2.22229 68.6401 4.09928C68.6401 5.97627 70.1617 7.49787 72.0387 7.49787Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      }
    ]
  },
  {
    id: 1,
    name: "bird",
    paint: "Animals",
    size: { width: 82, height: 79 },
    image: bird,
    imageColor: birdColor,
    url: require('../app/res/images_paint/animals/bird_2x.png'),
    url_color: require('../app/res/images_paint/animals_color/bird.png'),
    backgroundImg: require('../app/res/images_paint/newPaint/snail.png'),
    data: [
      {
        number: 1,
        d: "M69.8096 42.6079C74.6204 40.529 82.5999 32.8914 80.7182 28.5365C78.8363 24.1817 67.8057 24.7589 62.9949 26.8378C58.1841 28.9167 55.8098 34.1321 57.6916 38.487C59.5734 42.8418 64.9988 44.6868 69.8096 42.6079Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 2,
        d: "M18.262 77.0413C13.9762 77.0413 11.3323 72.3624 13.5434 68.6911L22.1862 54.3413H31.1007L23.3735 73.5855C22.5352 75.6732 20.5117 77.0413 18.262 77.0413Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 3,
        d: "M30.6561 77.0408C26.506 77.0408 23.6702 72.8464 25.2166 68.9952L31.1008 54.3408H40.0154L36.4032 72.333C35.8535 75.071 33.4486 77.0408 30.6561 77.0408Z",
        fill: "#fff",
        stroke: "none",
        opacity: "none",
        isColor: true,

      },
      {
        number: 4,
        d: "M30.6561 77.0408C26.506 77.0408 23.6702 72.8464 25.2166 68.9952L31.1008 54.3408H40.0154L36.4032 72.333C35.8535 75.071 33.4486 77.0408 30.6561 77.0408Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 5,
        d: "M42.8632 77.0408C39.0333 77.0408 36.1615 73.5353 36.9154 69.7803L40.0151 54.3408H48.9297V70.9744C48.9297 74.3249 46.2137 77.0408 42.8632 77.0408Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 6,
        d: "M36.7022 7.27252L36.7021 7.2725C35.541 6.44538 34.1189 6.13104 32.6829 6.39418C31.5026 6.61168 30.3708 5.82862 30.1544 4.65001L30.1543 4.64978C29.938 3.47011 30.7189 2.33811 31.8989 2.12176L31.8989 2.12175C34.4879 1.64722 37.0936 2.21797 39.2224 3.73449C41.3293 5.23543 42.7629 7.53373 43.1473 10.0543C43.3282 11.2401 42.5135 12.3474 41.3286 12.5286C41.2173 12.5458 41.1071 12.5538 40.9989 12.5538C39.9432 12.5538 39.0174 11.7851 38.8533 10.7093L36.7022 7.27252ZM36.7022 7.27252C37.8684 8.10321 38.6478 9.36211 38.8533 10.7092L36.7022 7.27252Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 7,
        d: "M67.0963 39.3012C67.0963 22.2743 55.4126 8.47119 41.0001 8.47119C26.5876 8.47119 14.9038 22.2743 14.9038 39.3012C14.9038 56.3281 26.5876 61.8259 41.0001 61.8259C55.4126 61.8259 67.0963 56.3281 67.0963 39.3012Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 8,
        d: "M34.1577 36.4794C36.7419 36.4794 38.8368 34.8111 38.8368 32.7531C38.8368 30.6952 36.7419 29.0269 34.1577 29.0269C31.5735 29.0269 29.4786 30.6952 29.4786 32.7531C29.4786 34.8111 31.5735 36.4794 34.1577 36.4794Z",
        fill: "#FFA6BB",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 9,
        d: "M59.5204 36.4794C62.1045 36.4794 64.1994 34.8111 64.1994 32.7531C64.1994 30.6952 62.1045 29.0269 59.5204 29.0269C56.9362 29.0269 54.8413 30.6952 54.8413 32.7531C54.8413 34.8111 56.9362 36.4794 59.5204 36.4794Z",
        fill: "#FFA6BB",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 10,
        d: "M46.1742 25.9936L43.1262 29.6736C42.6048 30.3031 42.6801 31.2334 43.2959 31.7709L45.8273 33.9801C46.4073 34.4862 47.2718 34.4862 47.8518 33.9801L50.3832 31.7709C50.999 31.2334 51.0743 30.3031 50.5529 29.6736L47.505 25.9936C47.1595 25.5764 46.5196 25.5764 46.1742 25.9936Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 11,
        d: "M39.1124 29.8698C38.4652 29.8698 37.9405 29.3452 37.9405 28.6979C37.9405 28.1159 37.4671 27.6426 36.8852 27.6426C36.3034 27.6426 35.8301 28.1159 35.8301 28.6979C35.8301 29.3452 35.3054 29.8698 34.6582 29.8698C34.011 29.8698 33.4863 29.3452 33.4863 28.6979C33.4863 26.8237 35.011 25.2988 36.8852 25.2988C38.7595 25.2988 40.2843 26.8237 40.2843 28.6979C40.2843 29.3451 39.7598 29.8698 39.1124 29.8698Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 12,
        d: "M59.021 29.8698C58.3736 29.8698 57.8491 29.3452 57.8491 28.6979C57.8491 28.1159 57.3757 27.6426 56.7938 27.6426C56.2119 27.6426 55.7385 28.1159 55.7385 28.6979C55.7385 29.3452 55.2139 29.8698 54.5666 29.8698C53.9192 29.8698 53.3947 29.3452 53.3947 28.6979C53.3947 26.8237 54.9196 25.2988 56.7938 25.2988C58.668 25.2988 60.1928 26.8237 60.1928 28.6979C60.1928 29.3451 59.6683 29.8698 59.021 29.8698Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 13,
        d: "M38.3904 66.1445C36.7035 66.1445 35.3362 64.7771 35.3362 63.0903V59.7134C35.3362 58.0265 36.7035 56.6592 38.3904 56.6592C40.0773 56.6592 41.4446 58.0265 41.4446 59.7134V63.0903C41.4446 64.7771 40.0773 66.1445 38.3904 66.1445Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 14,
        d: "M54.2496 66.1445C55.9365 66.1445 57.3038 64.7771 57.3038 63.0903V59.7134C57.3038 58.0265 55.9365 56.6592 54.2496 56.6592C52.5627 56.6592 51.1954 58.0265 51.1954 59.7134V63.0903C51.1954 64.7771 52.5627 66.1445 54.2496 66.1445Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 15,
        d: "M12.1904 42.6079C7.37966 40.529 -0.599872 32.8914 1.28185 28.5365C3.16372 24.1817 14.1943 24.7589 19.0051 26.8378C23.8159 28.9167 26.1903 34.1321 24.3084 38.487C22.4267 42.8418 17.0012 44.6868 12.1904 42.6079Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      }
    ]
  },
  {
    id: 2,
    name: "bulldog",
    paint: "Animals",
    size: { width: 82, height: 67 },
    image: bulldog,
    imageColor: bulldogColor,
    url: require('../app/res/images_paint/animals/bulldog_2x.png'),
    url_color: require('../app/res/images_paint/animals_color/bulldog.png'),
    backgroundImg: require('../app/res/images_paint/newPaint/garden.png'),
    data: [
      {
        number: 1,
        d: "M8.63359 57.5777C5.905 57.5777 3.85781 56.7825 2.54875 55.2141C1.50672 53.9654 1 52.3025 1 50.1305C1 48.6761 2.17906 47.4971 3.63359 47.4971C5.08812 47.4971 6.26719 48.6761 6.26719 50.1305C6.26719 51.2779 6.47125 51.6936 6.59281 51.8393C6.83922 52.1344 7.60203 52.3105 8.63391 52.3105C10.0883 52.3105 11.2675 53.4896 11.2675 54.9441C11.2672 56.3986 10.0881 57.5777 8.63359 57.5777Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,

      },
      {
        number: 2,
        d: "M8.63352 52.31C7.6018 52.31 6.83883 52.1339 6.59243 51.8388C6.47102 51.6932 6.2668 51.2772 6.2668 50.13C6.2668 49.5547 6.08008 49.0239 5.76696 48.5908C4.75055 51.0113 4.07071 53.608 3.78571 56.3224C5.02742 57.1549 6.64914 57.5774 8.63321 57.5774C10.0876 57.5774 11.2668 56.3983 11.2668 54.9438C11.2671 53.4893 10.0881 52.31 8.63352 52.31Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "0.05",
        isColor: true,

      },
      {
        number: 3,
        d: "M50.3092 58.9061V55.169C50.3092 53.2889 48.7852 51.7646 46.9049 51.7646C45.0247 51.7646 43.5005 53.2887 43.5005 55.169V61.8132C43.5005 63.7893 45.1025 65.3915 47.0788 65.3915H51.9386C53.2795 65.3915 54.3666 64.3045 54.3666 62.9636C54.3666 61.6226 53.2795 60.5356 51.9386 60.5356C51.0388 60.5354 50.3092 59.8059 50.3092 58.9061Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,

      },
      {
        number: 4,
        d: "M36.5254 63.1825H9.48851C7.30351 63.1825 5.5321 61.4111 5.5321 59.2261C5.5321 44.045 17.8388 31.7383 33.0199 31.7383H53.0226V46.685C53.0227 55.7962 45.6365 63.1825 36.5254 63.1825Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,

      },
      {
        number: 5,
        d: "M33.0203 31.7378C27.4773 31.7378 22.3187 33.38 18.001 36.2022C18.4142 41.9409 22.7638 46.5867 28.3653 47.4533C29.4815 47.6259 30.5349 48.092 31.4306 48.7803C35.9631 52.263 41.9415 54.3803 48.4949 54.3803C49.4014 54.3803 50.2968 54.3398 51.179 54.2608C52.3548 51.9914 53.0229 49.4169 53.0229 46.6847V31.7379H33.0203V31.7378Z",
        fill: "#fff",
        stroke: "none",
        opacity: "0.05",
        isColor: false,

      },
      {
        number: 6,
        d: "M13.3764 40.7939C13.1144 40.7939 12.8556 40.8074 12.5989 40.8277C8.78422 45.0593 6.26562 50.4818 5.66937 56.4705C7.44937 58.7757 10.2386 60.2619 13.3764 60.2619C18.7522 60.2619 23.1103 55.9038 23.1103 50.528C23.1103 45.1519 18.7522 40.7939 13.3764 40.7939Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,

      },
      {
        number: 7,
        d: "M18.8948 59.3634L19.3931 54.692C19.6531 52.2551 17.7431 50.1309 15.2924 50.1309C10.1535 50.1309 5.58447 53.4005 3.92619 58.2645C2.73431 61.7605 5.33322 65.3924 9.02697 65.3924H23.8945C24.4743 65.3924 24.9443 64.9224 24.9443 64.3426C24.9443 62.2405 23.2403 60.5365 21.1382 60.5365H19.9493C19.319 60.5362 18.8278 59.9901 18.8948 59.3634Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,

      },
      {
        number: 8,
        d: "M36.4497 58.907V55.17C36.4497 53.2898 34.9256 51.7656 33.0453 51.7656C31.1652 51.7656 29.6409 53.2897 29.6409 55.17V61.8142C29.6409 63.7903 31.243 65.3925 33.2192 65.3925H38.0791C39.42 65.3925 40.507 64.3055 40.507 62.9645C40.507 61.6236 39.42 60.5366 38.0791 60.5366C37.1792 60.5364 36.4497 59.8069 36.4497 58.907Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,

      },
      {
        number: 9,
        d: "M50.4703 52.4045C64.6294 52.4045 76.1076 42.5228 76.1076 30.3331C76.1076 18.1434 64.6294 8.26172 50.4703 8.26172C36.3112 8.26172 24.8329 18.1434 24.8329 30.3331C24.8329 42.5228 36.3112 52.4045 50.4703 52.4045Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,

      },
      {
        number: 10,
        d: "M55.8672 42.7409C55.8672 45.7214 53.4509 48.1376 50.4704 48.1376C47.49 48.1376 45.0737 45.7214 45.0737 42.7409V35.5381H55.867V42.7409H55.8672Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,

      },
      {
        number: 11,
        d: "M50.4704 43.5039C49.7647 43.5039 49.1926 42.9319 49.1926 42.2261V36.2388C49.1926 35.5331 49.7646 34.9609 50.4704 34.9609C51.176 34.9609 51.7482 35.533 51.7482 36.2388V42.2261C51.7482 42.9319 51.1762 43.5039 50.4704 43.5039Z",
        fill: "#fff",
        stroke: "none",
        opacity: "0.15",
        isColor: false,

      },
      {
        number: 12,
        d: "M76.013 28.4346C76.0078 28.4316 76.0028 28.4285 75.9977 28.4255C75.9855 28.2546 75.9702 28.0844 75.9545 27.9146C74.5548 16.8635 63.6802 8.2627 50.4708 8.2627C37.2619 8.2627 26.3878 16.8627 24.9872 27.9129C24.9716 28.0833 24.9564 28.2539 24.9439 28.4254C24.9388 28.4283 24.9338 28.4314 24.9286 28.4346C24.8666 29.0607 24.8331 29.6938 24.8331 30.3336C24.8331 38.1096 29.5048 44.9457 36.5631 48.8769C41.1003 47.9218 45.0955 45.4972 48.0278 42.1225C49.3097 40.6474 51.632 40.6474 52.9139 42.1225C55.8463 45.4972 59.8416 47.9218 64.3786 48.8769C71.4369 44.9455 76.1086 38.1096 76.1086 30.3336C76.1083 29.6938 76.075 29.0607 76.013 28.4346Z",
        fill: "#fff",
        stroke: "none",
        opacity: "0.1",
        isColor: false,

      },
      {
        number: 13,
        d: "M75.9976 24.7247C75.0395 11.4622 63.9773 1 50.4707 1C36.9642 1 25.902 11.4622 24.9439 24.7247C21.9564 26.4312 19.9415 29.6453 19.9415 33.3322C19.9415 40.1223 25.4461 45.6266 32.2359 45.6266C38.5417 45.6266 44.1929 42.835 48.0276 38.4217C49.3095 36.9466 51.6318 36.9466 52.9137 38.4217C56.7484 42.835 62.3998 45.6266 68.7054 45.6266C75.4956 45.6266 80.9998 40.122 80.9998 33.3322C80.9998 29.6453 78.9848 26.4314 75.9976 24.7247Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,

      },
      {
        number: 14,
        d: "M46.7194 1.27344C34.9679 2.99969 25.8135 12.7119 24.9443 24.7214C27.8276 27.5259 31.7615 29.2556 36.1015 29.2556C44.9421 29.2556 52.1089 22.0889 52.1089 13.2481C52.1088 8.4825 50.0241 4.20594 46.7194 1.27344Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,

      },
      {
        number: 15,
        d: "M25.194 19.9828C20.6687 19.0172 18.4985 13.831 20.9874 9.9302L22.6351 7.34801C25.2677 3.22223 30.1854 1.16426 34.9719 2.18567C38.0016 2.83207 39.4546 6.30442 37.7882 8.91582L32.7419 16.8244C31.1312 19.3488 28.1224 20.6075 25.194 19.9828Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,

      },
      {
        number: 16,
        d: "M75.7473 19.9828C80.2726 19.0172 82.4428 13.831 79.9539 9.9302L78.3062 7.34801C75.6735 3.22223 70.7559 1.16426 65.9693 2.18567C62.9396 2.83207 61.4867 6.30442 63.1531 8.91582L68.1993 16.8244C69.8101 19.3488 72.8187 20.6075 75.7473 19.9828Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,
      },
      {
        number: 17,
        d: "M55.6014 31.0344L54.4074 32.4566C52.3532 34.9031 48.5886 34.9031 46.5344 32.4566L45.3402 31.0344C44.7249 30.3016 45.2458 29.1841 46.2028 29.1841H54.7392C55.6956 29.1841 56.2166 30.3016 55.6014 31.0344Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,

      },
      {
        number: 18,
        d: "M39.2007 20.6953C39.0473 20.6953 38.9229 20.8197 38.9229 20.9731V22.8759C38.9229 23.0294 39.0473 23.1538 39.2007 23.1538C39.3541 23.1538 39.4785 23.0294 39.4785 22.8759V20.9733L39.2007 20.6953ZM39.2007 20.6953C39.3539 20.6953 39.4784 20.8194 39.4785 20.9731L39.2007 20.6953Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,

      },
      {
        number: 19,
        d: "M61.4628 20.9731C61.4628 20.8197 61.5872 20.6953 61.7406 20.6953C61.8941 20.6953 62.0185 20.8196 62.0185 20.9731V22.8759C62.0185 23.0294 61.8941 23.1538 61.7406 23.1538C61.5872 23.1538 61.4628 23.0294 61.4628 22.8759V20.9731Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,
      }
    ]
  },
  {
    id: 3,
    name: "butterfly",
    paint: "Animals",
    size: { width: 82, height: 57 },
    image: butterfly,
    imageColor: butterflyColor,
    url: require('../app/res/images_paint/animals/butterfly_2x.png'),
    url_color: require('../app/res/images_paint/animals_color/butterfly.png'),
    backgroundImg: require('../app/res/images_paint/newPaint/garden.png'),
    data: [
      {
        number: 1,
        d: "M28.2626 22.5756C28.2626 15.0471 22.1597 8.94434 14.6314 8.94434C7.10293 8.94434 1.00012 15.0473 1.00012 22.5756C1.00012 29.3543 5.94903 34.9748 12.4303 36.0275C10.4611 38.0868 9.24918 40.8764 9.24918 43.9507C9.24918 50.2853 14.3843 55.4204 20.7189 55.4204C27.0534 55.4204 32.1886 50.2853 32.1886 43.9507L28.2626 22.5756Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 2,
        d: "M14.6416 25.5464C17.1486 24.5072 18.3386 21.6326 17.2994 19.1257C16.2603 16.6188 13.3856 15.4289 10.8787 16.4681C8.37167 17.5072 7.18173 20.3819 8.22084 22.8888C9.25996 25.3957 12.1346 26.5855 14.6416 25.5464Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 3,
        d: "M21.1976 47.5149C22.7886 46.8554 23.5438 45.0309 22.8843 43.4399C22.2248 41.8488 20.4004 41.0936 18.8093 41.7531C17.2183 42.4126 16.4631 44.2371 17.1226 45.8281C17.7821 47.4192 19.6065 48.1744 21.1976 47.5149Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 4,
        d: "M53.7373 22.5756C53.7373 15.0471 59.8403 8.94434 67.3686 8.94434C74.8969 8.94434 80.9998 15.0473 80.9998 22.5756C80.9998 29.3543 76.0509 34.9748 69.5697 36.0275C71.5389 38.0868 72.7508 40.8764 72.7508 43.9507C72.7508 50.2853 67.6156 55.4204 61.2811 55.4204C54.9466 55.4204 49.8114 50.2853 49.8114 43.9507L53.7373 22.5756Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 5,
        d: "M73.8164 22.89C74.8555 20.3831 73.6656 17.5084 71.1586 16.4693C68.6516 15.4301 65.7769 16.62 64.7378 19.1269C63.6987 21.6338 64.8886 24.5084 67.3956 25.5476C69.9026 26.5867 72.7773 25.3969 73.8164 22.89Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 6,
        d: "M64.9239 45.838C65.5833 44.2469 64.8282 42.4225 63.2371 41.763C61.6461 41.1035 59.8216 41.8586 59.1621 43.4497C58.5026 45.0408 59.2578 46.8652 60.8489 47.5247C62.4399 48.1842 64.2644 47.429 64.9239 45.838Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 7,
        d: "M54.913 40.4689C54.913 48.1528 48.6839 55.4202 41 55.4202C33.3161 55.4202 27.087 48.153 27.087 40.4689C27.087 32.7849 33.3161 25.9736 41 25.9736C48.6839 25.9736 54.913 32.785 54.913 40.4689Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 8,
        d: "M41.0001 36.7144C51.3567 36.7144 59.7523 29.1674 59.7523 19.8577C59.7523 10.548 51.3567 3.00098 41.0001 3.00098C30.6436 3.00098 22.2479 10.548 22.2479 19.8577C22.2479 29.1674 30.6436 36.7144 41.0001 36.7144Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 9,
        d: "M33.7813 23.2981C33.7813 25.1546 31.8915 26.6595 29.5602 26.6595C27.229 26.6595 25.3391 25.1545 25.3391 23.2981C25.3391 21.4417 27.229 19.9365 29.5602 19.9365C31.8915 19.9365 33.7813 21.4415 33.7813 23.2981Z",
        fill: "#EDA1AB",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 10,
        d: "M48.2186 23.2981C48.2186 25.1546 50.1085 26.6595 52.4397 26.6595C54.771 26.6595 56.6608 25.1545 56.6608 23.2981C56.6608 21.4417 54.771 19.9365 52.4397 19.9365C50.1085 19.9365 48.2186 21.4415 48.2186 23.2981Z",
        fill: "#EDA1AB",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 11,
        d: "M30.2656 20.5007C29.6183 20.5007 29.0937 19.976 29.0937 19.3288V17.5171C29.0937 16.8699 29.6183 16.3452 30.2656 16.3452C30.9129 16.3452 31.4375 16.8699 31.4375 17.5171V19.3288C31.4375 19.976 30.9128 20.5007 30.2656 20.5007Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 12,
        d: "M44.4031 20.7153C44.4031 18.6121 42.8795 18.4146 40.9998 18.4146C39.1203 18.4146 37.5966 18.6122 37.5966 20.7153C37.5966 22.8185 39.1203 24.5235 40.9998 24.5235C42.8794 24.5236 44.4031 22.8186 44.4031 20.7153Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 13,
        d: "M51.7341 20.5007C51.0867 20.5007 50.5622 19.976 50.5622 19.3288V17.5171C50.5622 16.8699 51.0867 16.3452 51.7341 16.3452C52.3814 16.3452 52.906 16.8699 52.906 17.5171V19.3288C52.906 19.976 52.3814 20.5007 51.7341 20.5007Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 14,
        d: "M35.3767 10.116C34.9145 10.116 34.4765 9.84085 34.2912 9.38648C33.3489 7.07679 30.1659 4.01007 27.4793 2.82367C26.8873 2.5621 26.6193 1.87023 26.8809 1.2782C27.1424 0.686167 27.8345 0.418511 28.4264 0.679605C31.6843 2.11867 35.2887 5.62726 36.4614 8.50101C36.7057 9.10023 36.4184 9.78429 35.819 10.0288C35.674 10.0879 35.524 10.116 35.3767 10.116Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 15,
        d: "M46.6232 10.1162C46.4759 10.1162 46.326 10.0882 46.181 10.029C45.5816 9.78449 45.2941 9.10058 45.5387 8.50121C46.7113 5.62746 50.3157 2.11871 53.5737 0.679805C54.1659 0.418242 54.8577 0.686367 55.1191 1.2784C55.3807 1.87043 55.1127 2.5623 54.5207 2.82387C51.8343 4.01027 48.6513 7.07715 47.7088 9.38668C47.5234 9.8409 47.0854 10.1162 46.6232 10.1162Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,
      },
      {
        number: 16,
        d: "M27.1809 42.1001C27.284 43.0085 27.4712 43.9038 27.735 44.7746C31.1173 45.8717 35.9086 46.859 41 46.859C46.0914 46.859 50.8826 45.8717 54.265 44.7746C54.5287 43.9038 54.7158 43.0085 54.819 42.1001C51.6592 43.294 46.5319 44.5153 41 44.5153C35.4681 44.5153 30.3409 43.2942 27.1809 42.1001Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      }
    ]
  },
  {
    id: 4,
    name: "cat",
    paint: "Animals",
    size: { width: 74, height: 81 },
    image: cat,
    imageColor: catColor,
    url: require('../app/res/images_paint/animals/cat_2x.png'),
    url_color: require('../app/res/images_paint/animals_color/cat.png'),
    backgroundImg: require('../app/res/images_paint/newPaint/cat.png'),
    data: [
      {
        number: 1,
        d: "M42.8051 74.1866C40.9984 74.1866 39.5342 72.7223 39.5342 70.9157C39.5342 69.1096 40.9984 67.6454 42.8051 67.6454C52.1611 67.6454 53.1054 63.7038 54.8186 56.5492C56.3738 50.0575 58.3086 41.9789 68.1212 37.1309C69.7399 36.3313 71.7015 36.9948 72.5017 38.6146C73.3019 40.2339 72.6378 42.1956 71.0186 42.9957C63.9556 46.4851 62.6073 52.1138 61.1797 58.0733C60.2636 61.8983 59.3163 65.854 56.7327 68.9375C53.7731 72.4696 49.2174 74.1866 42.8051 74.1866Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 2,
        d: "M18.9289 78.4071L18.9288 78.4071C15.7176 74.5994 14.2671 71.3998 13.8066 68.6304C13.3471 65.868 13.8549 63.4292 14.7466 61.1005C15.1947 59.93 15.7364 58.796 16.3011 57.6582C16.4209 57.4166 16.5423 57.174 16.6641 56.9306C17.1092 56.0408 17.5594 55.141 17.959 54.2474C18.8331 52.2929 19.5283 50.2388 19.4963 48.0254H42.4575C42.4255 50.2388 43.1207 52.2929 43.9948 54.2474C44.3945 55.141 44.8446 56.0408 45.2898 56.9307C45.4115 57.174 45.5329 57.4167 45.6528 57.6582C46.2174 58.796 46.7591 59.93 47.2073 61.1005C48.0989 63.4292 48.6067 65.868 48.1473 68.6304C47.6867 71.3998 46.2362 74.5994 43.025 78.4071L43.025 78.4071C42.1713 79.4194 40.9013 80 39.5633 80H22.3905C21.0525 80 19.7825 79.4194 18.9289 78.4071Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 3,
        d: "M43.5295 5.54526C43.5295 5.54526 48.347 0.186374 57.1361 1.10617C58.4532 1.24411 59.5433 2.1987 59.8247 3.49326C60.6127 7.1218 61.4525 14.9953 56.4678 22.4612L43.5295 5.54526Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 4,
        d: "M52.3878 19.7369C55.7857 14.6484 55.7918 9.29932 55.2821 5.90881C55.2418 5.90881 55.2009 5.9082 55.1607 5.9082C50.0483 5.9082 47.2072 8.79334 47.1785 8.82569L52.3878 19.7369Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 5,
        d: "M18.4247 5.54526C18.4247 5.54526 13.6072 0.186374 4.81874 1.10617C3.50099 1.24411 2.4109 2.1987 2.13014 3.49326C1.34218 7.1218 0.501724 14.9953 5.48647 22.4612L18.4247 5.54526Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 6,
        d: "M9.56668 19.7369C6.16885 14.6484 6.16274 9.29932 6.67239 5.90881C6.71328 5.90881 6.75356 5.9082 6.79446 5.9082C11.9062 5.9082 14.748 8.79334 14.7766 8.82569L9.56668 19.7369Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 7,
        d: "M56.5779 31.6404C56.5779 35.3356 55.807 38.2109 54.4956 40.4572C53.1855 42.7009 51.3003 44.3783 48.9726 45.624C44.2752 48.1378 37.8379 48.8618 30.9769 48.8618C24.116 48.8618 17.6787 48.1378 12.9813 45.624C10.6536 44.3783 8.76837 42.7009 7.45833 40.4572C6.14684 38.2109 5.37598 35.3356 5.37598 31.6404C5.37598 21.9333 8.74099 14.8925 13.5795 10.276C18.433 5.64521 24.8296 3.396 30.9769 3.396C37.1243 3.396 43.5209 5.64521 48.3744 10.276C53.2129 14.8925 56.5779 21.9333 56.5779 31.6404Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 8,
        d: "M43.1033 30.2802C42.4368 30.2802 41.896 29.7394 41.896 29.0729V26.7151C41.896 26.048 42.4368 25.5078 43.1033 25.5078C43.7704 25.5078 44.3106 26.048 44.3106 26.7151V29.0729C44.3106 29.7394 43.7704 30.2802 43.1033 30.2802Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 9,
        d: "M44.7091 33.7456H41.498C40.8309 33.7456 40.2908 33.2048 40.2908 32.5383C40.2908 31.8718 40.8309 31.3311 41.498 31.3311H44.7091C45.3762 31.3311 45.9164 31.8718 45.9164 32.5383C45.9164 33.2048 45.3762 33.7456 44.7091 33.7456Z",
        fill: "#FD9AC8",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 10,
        d: "M18.8506 30.2802C18.1835 30.2802 17.6433 29.7394 17.6433 29.0729V26.7151C17.6433 26.048 18.1835 25.5078 18.8506 25.5078C19.5171 25.5078 20.0579 26.048 20.0579 26.7151V29.0729C20.0579 29.7394 19.5171 30.2802 18.8506 30.2802Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 11,
        d: "M20.4565 33.7456H17.2449C16.5784 33.7456 16.0376 33.2048 16.0376 32.5383C16.0376 31.8718 16.5784 31.3311 17.2449 31.3311H20.4565C21.123 31.3311 21.6638 31.8718 21.6638 32.5383C21.6638 33.2048 21.123 33.7456 20.4565 33.7456Z",
        fill: "#FD9AC8",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 12,
        d: "M30.9771 33.6128C29.7833 33.6128 28.6615 33.1129 27.8991 32.2401C27.4603 31.7384 27.5116 30.9754 28.0139 30.5366C28.5156 30.0977 29.2785 30.149 29.7174 30.6513C30.0207 30.9986 30.4803 31.1982 30.9771 31.1982C31.4746 31.1982 31.9336 30.9992 32.2375 30.6513C32.6764 30.149 33.4387 30.0977 33.941 30.5366C34.4427 30.9754 34.494 31.7384 34.0551 32.2401C33.2928 33.1123 32.171 33.6128 30.9771 33.6128Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 13,
        d: "M30.9771 63.1123C30.3105 63.1123 29.7698 63.6531 29.7698 64.3196V80.9999H32.1843V64.3196C32.1843 63.6531 31.6442 63.1123 30.9771 63.1123Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 14,
        d: "M22.3668 63.1205C21.7046 63.0436 21.1059 63.519 21.0289 64.1813C20.982 64.5896 19.9505 73.9908 23.8555 81.0001H26.4592C26.4599 80.784 26.4031 80.5655 26.2822 80.3678C22.3919 74.0366 23.4136 64.5816 23.4276 64.4584C23.5039 63.7961 23.0291 63.1974 22.3668 63.1205Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 15,
        d: "M35.4949 81.0005H38.0986C42.0037 73.9918 40.9728 64.59 40.9252 64.1816C40.8483 63.5194 40.2489 63.0445 39.5873 63.1214C38.925 63.1977 38.4502 63.7971 38.5265 64.4593C38.5375 64.5539 39.5781 74.0113 35.6725 80.3688C35.551 80.5659 35.4943 80.7844 35.4949 81.0005Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,
      }
    ]
  },
  {
    id: 5,
    name: "crab",
    paint: "Animals",
    size: { width: 82, height: 76 },
    image: crab,
    imageColor: crabColor,
    url: require('../app/res/images_paint/animals/crab_2x.png'),
    url_color: require('../app/res/images_paint/animals_color/crab.png'),
    backgroundImg: require('../app/res/images_paint/newPaint/beach.png'),
    data: [
      {
        number: 1,
        d: "M10.2101 30.8027C9.73744 29.2668 9.6751 27.6112 10.0667 26.0077L11.2953 20.9766C11.6817 19.3918 10.7113 17.7935 9.1265 17.4071C7.54166 17.0207 5.94337 17.991 5.55697 19.5758L4.32837 24.6054C3.73087 27.0527 3.77149 29.5743 4.39415 31.9438L7.6415 33.2529L10.2101 30.8027Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 2,
        d: "M71.7898 30.8027C72.2624 29.2668 72.3248 27.6112 71.9332 26.0077L70.7046 20.9766C70.3182 19.3918 71.2885 17.7935 72.8735 17.4071C74.4584 17.0207 76.0567 17.991 76.4431 19.5758L77.6717 24.6054C78.2692 27.0527 78.2285 29.5743 77.6059 31.9438L74.3585 33.2529L71.7898 30.8027Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 3,
        d: "M17.4555 41.2042C17.4555 42.8362 16.1339 44.1578 14.5019 44.1578C13.0977 44.1578 12.5069 43.5012 10.7517 41.5518C9.97202 40.686 8.91046 39.486 7.59905 37.9873C6.05655 36.2252 4.97295 34.1493 4.39404 31.9434C5.90639 30.4631 8.19311 29.9771 10.2101 30.8024C10.5781 32.0024 11.1958 33.1282 12.0447 34.097C15.1231 37.6142 16.0447 38.5999 16.3148 38.8717C17.01 39.4135 17.4555 40.2556 17.4555 41.2042Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 4,
        d: "M64.5444 41.2042C64.5444 42.8362 65.8659 44.1578 67.498 44.1578C68.9022 44.1578 69.493 43.5012 71.2481 41.5518C72.0278 40.686 73.0894 39.486 74.4008 37.9873C75.9433 36.2252 77.0269 34.1493 77.6058 31.9434C76.0935 30.4631 73.8067 29.9771 71.7897 30.8024C71.4217 32.0024 70.8041 33.1282 69.9552 34.097C66.8767 37.6142 65.9552 38.5999 65.685 38.8717C64.9898 39.4135 64.5444 40.2556 64.5444 41.2042Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 5,
        d: "M11.6567 57.9014C10.8027 59.579 10.985 61.4897 11.5977 63.2398C11.9487 64.244 12.4195 65.1959 12.9631 66.109L12.9952 66.1631C13.5403 67.0745 13.2416 68.2526 12.3302 68.7976C11.4745 69.3075 10.3758 69.0693 9.79687 68.2828C8.99343 67.1976 8.29468 66.0465 7.73108 64.8178C6.31499 61.7343 6.02123 58.347 7.52514 55.2245C7.61624 55.0356 7.71249 54.8515 7.81718 54.6709H10.8948L11.6567 57.9014Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 6,
        d: "M20.0836 51.0167C20.0836 51.0167 18.9157 51.8656 17.1621 53.1415C15.341 54.4631 13.0913 55.5431 11.871 57.5162C11.7916 57.6428 11.7208 57.7711 11.6566 57.9011C9.90971 57.5195 8.48018 56.2926 7.81689 54.6706C9.1858 52.2706 11.5958 50.5204 13.6328 48.7297C15.2599 47.2986 16.3468 46.3448 16.3468 46.3448C17.589 45.2528 19.481 45.3743 20.5729 46.6165C21.7157 47.9164 21.476 49.999 20.0836 51.0167Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 7,
        d: "M23.6959 63.5308C23.3071 65.3727 23.9796 67.1702 25.026 68.7011C25.6259 69.5797 26.3281 70.3764 27.0901 71.1169L27.1351 71.1607C27.8984 71.8989 27.916 73.1143 27.1776 73.8775C26.4839 74.5921 25.3609 74.6477 24.5974 74.0388C23.5396 73.1997 22.5657 72.2696 21.7021 71.2297C19.5334 68.6202 18.3695 65.4255 19.0102 62.0195C19.0491 61.8133 19.0943 61.6106 19.1484 61.4092L22.1202 60.6094L23.6959 63.5308Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 8,
        d: "M30.0447 54.6931C30.0447 54.6931 29.1375 55.8164 27.7758 57.5042C26.3608 59.2536 24.4689 60.8812 23.8033 63.1036C23.7597 63.2464 23.7244 63.3886 23.6963 63.5309C21.9103 63.6166 20.2111 62.8033 19.1489 61.4094C19.8471 58.7361 21.7196 56.4197 23.2213 54.1611C24.4205 52.3562 25.2222 51.1529 25.2222 51.1529C26.138 49.7758 27.9964 49.4014 29.3738 50.317C30.8149 51.2751 31.1247 53.3486 30.0447 54.6931Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 9,
        d: "M70.3435 57.9014C71.1975 59.579 71.0152 61.4897 70.4025 63.2398C70.0514 64.244 69.5807 65.1959 69.0371 66.109L69.005 66.1631C68.4599 67.0745 68.7586 68.2526 69.67 68.7976C70.5257 69.3075 71.6244 69.0693 72.2033 68.2828C73.0068 67.1976 73.7055 66.0465 74.2691 64.8178C75.6852 61.7343 75.979 58.347 74.4751 55.2245C74.384 55.0356 74.2877 54.8515 74.183 54.6709H71.1054L70.3435 57.9014Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 10,
        d: "M61.9166 51.0167C61.9166 51.0167 63.0846 51.8656 64.8382 53.1415C66.6593 54.4631 68.909 55.5431 70.1293 57.5162C70.2087 57.6428 70.2795 57.7711 70.3437 57.9011C72.0906 57.5195 73.5201 56.2926 74.1834 54.6706C72.8145 52.2706 70.4045 50.5204 68.3674 48.7297C66.7404 47.2986 65.6535 46.3448 65.6535 46.3448C64.4113 45.2528 62.5193 45.3743 61.4274 46.6165C60.2846 47.9164 60.5243 49.999 61.9166 51.0167Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 11,
        d: "M58.3042 63.5308C58.693 65.3727 58.0205 67.1702 56.9741 68.7011C56.3742 69.5797 55.6721 70.3764 54.91 71.1169L54.865 71.1607C54.1017 71.8989 54.0841 73.1143 54.8225 73.8775C55.5163 74.5921 56.6392 74.6477 57.4027 74.0388C58.4605 73.1997 59.4344 72.2696 60.298 71.2297C62.4668 68.6202 63.6307 65.4255 62.9899 62.0195C62.951 61.8133 62.9058 61.6106 62.8518 61.4092L59.8799 60.6094L58.3042 63.5308Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 12,
        d: "M51.9557 54.6931C51.9557 54.6931 52.8628 55.8164 54.2246 57.5042C55.6396 59.2536 57.5315 60.8812 58.1971 63.1036C58.2407 63.2464 58.276 63.3886 58.3041 63.5309C60.0901 63.6166 61.7894 62.8033 62.8515 61.4094C62.1534 58.7361 60.2808 56.4197 58.7791 54.1611C57.5799 52.3562 56.7782 51.1529 56.7782 51.1529C55.8624 49.7758 54.0039 49.4014 52.6266 50.317C51.1855 51.2751 50.8757 53.3486 51.9557 54.6931Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 13,
        d: "M41.0002 53.268C44.9112 53.268 48.7637 53.7392 52.5415 54.805C54.6624 55.4033 56.8029 56.2919 59.0293 56.2751C65.8896 56.2236 70.9742 50.1565 70.5647 43.129C69.6492 27.4129 54.4907 17.916 41.0002 17.916C27.5099 17.916 12.3513 27.4131 11.4358 43.129C11.0264 50.1565 16.111 56.2236 22.9711 56.2751C25.1974 56.2919 27.338 55.4034 29.4588 54.805C33.2368 53.7394 37.0893 53.268 41.0002 53.268Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 14,
        d: "M21.7185 11.3802C21.6591 10.6875 20.7727 10.4287 20.3632 10.9905C19.1964 12.5906 17.4618 13.802 16.0607 14.5981C14.9475 15.2306 13.5817 14.3544 13.6938 13.0789C14.0589 8.92453 16.4169 5.86421 17.5083 4.65202C17.8061 4.32139 17.7518 3.80702 17.3942 3.54186C15.6975 2.28358 13.6222 1.54248 11.3797 1.54248C5.6472 1.54248 1 6.37843 1 12.3442C1 18.3099 5.6472 23.1458 11.3797 23.1458C17.1122 23.1458 21.7594 18.3097 21.7594 12.3442C21.7594 12.0192 21.7457 11.6978 21.7185 11.3802Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 15,
        d: "M60.2815 11.3793C60.3409 10.6867 61.2273 10.4279 61.6369 10.9896C62.8036 12.5898 64.5383 13.8012 65.9394 14.5973C67.0525 15.2298 68.4183 14.3536 68.3062 13.0781C67.9411 8.92371 65.5831 5.86339 64.4917 4.6512C64.1939 4.32057 64.2483 3.8062 64.6056 3.54104C66.3023 2.2826 68.3776 1.5415 70.6201 1.5415C76.3528 1.5415 80.9998 6.37761 80.9998 12.3431C80.9998 18.3086 76.3526 23.1447 70.6201 23.1447C64.8876 23.1447 60.2404 18.3086 60.2404 12.3431C60.2406 12.0184 60.2544 11.697 60.2815 11.3793Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,
      },
      {
        number: 16,
        d: "M27.3919 48.7063C26.7252 48.7063 26.1847 48.1658 26.1847 47.4991V45.0363C26.1847 44.3696 26.7252 43.8291 27.3919 43.8291C28.0586 43.8291 28.5991 44.3696 28.5991 45.0363V47.4991C28.5992 48.1658 28.0588 48.7063 27.3919 48.7063Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 17,
        d: "M54.6079 48.7063C53.9412 48.7063 53.4007 48.1658 53.4007 47.4991V45.0363C53.4007 44.3696 53.9412 43.8291 54.6079 43.8291C55.2747 43.8291 55.8151 44.3696 55.8151 45.0363V47.4991C55.8153 48.1658 55.2748 48.7063 54.6079 48.7063Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 18,
        d: "M41 50.0206C39.3427 50.0206 37.7874 49.3286 36.7325 48.122C36.2938 47.62 36.3449 46.8573 36.8469 46.4186C37.3489 45.9798 38.1116 46.0309 38.5503 46.5329C39.1466 47.215 40.0392 47.6061 40.9999 47.6061C41.9605 47.6061 42.8535 47.215 43.4496 46.5329C43.8883 46.0308 44.651 45.9797 45.153 46.4186C45.655 46.8575 45.7063 47.62 45.2674 48.122C44.2128 49.3287 42.6574 50.0206 41 50.0206Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      }
    ]
  }, {
    id: 6,
    name: "dolphin",
    paint: "Animals",
    size: { width: 85, height: 80 },
    image: dolphin,
    imageColor: dolphinColor,
    url: require('../app/res/images_paint/animals/dolphin_2x.png'),
    url_color: require('../app/res/images_paint/animals_color/dolphin.png'),
    backgroundImg: require('../app/res/images_paint/newPaint/forest.png'),
    data: [
      {
        number: 1,
        d: "M68.9708 17.3152C68.8458 17.1449 68.7343 16.9961 68.6378 16.8693C69.8011 14.9629 72.1383 13.6392 74.6035 12.7575C77.6655 11.6628 77.7534 7.39006 74.7532 6.15704L74.753 6.15694C68.9605 3.7781 63.9171 3.85425 60.312 4.53669C58.5125 4.87734 57.0731 5.36848 56.077 5.77822C55.6626 5.9487 55.3243 6.10535 55.068 6.23165C46.8065 0.689903 38.4524 0.158319 31.6499 1.84982C24.772 3.56004 19.3861 7.5714 17.3097 11.0582C15.5098 14.0806 13.9311 15.153 12.1009 15.8947C11.4358 16.1643 10.757 16.3833 9.99039 16.6307C9.62168 16.7497 9.23265 16.8752 8.81504 17.016C7.55988 17.4394 6.1491 17.9712 4.53996 18.8131L4.53992 18.8131C3.25056 19.4878 2.34463 20.3175 1.76961 21.2606C1.19338 22.2057 0.986812 23.2036 1.00074 24.1529L1.00074 24.1529C1.05069 27.5538 3.90316 30.1951 7.24492 30.2023C33.4974 30.2625 48.5754 38.6236 57.0849 46.8557C61.3503 50.982 63.9895 55.0991 65.5599 58.1745C66.3451 59.7121 66.8626 60.9884 67.1821 61.8736C67.2342 62.018 67.2811 62.152 67.323 62.2749C67.2845 62.2872 67.2451 62.3 67.205 62.3133C66.4843 62.5516 65.4985 62.9545 64.4067 63.6185C62.214 64.9521 59.6159 67.3268 57.8868 71.4738C56.8569 73.9427 59.483 76.3644 61.86 75.0891L61.8602 75.089C64.2941 73.7824 67.5082 72.6978 70.8049 73.3672C73.8355 73.9829 76.2743 75.8869 78.0461 77.8246L78.0463 77.8248C79.8964 79.8468 83.2535 78.3546 82.9855 75.6239L82.9855 75.6237C82.6027 71.7302 81.3461 66.592 77.4818 63.5945C81.3705 50.3657 79.124 38.6361 75.8843 30.1932C74.2365 25.8988 72.3289 22.4459 70.8309 20.0633C70.0816 18.8715 69.4338 17.9459 68.9708 17.3152Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,

      },
      {
        number: 2,
        d: "M81.5381 72.7765C80.8636 73.5247 79.5996 73.6847 78.7842 72.7935C76.9385 70.7751 74.3237 68.7054 71.004 68.031C67.3791 67.2943 63.9148 68.4948 61.3873 69.8516C60.8264 70.1525 60.2423 70.1348 59.7589 69.9133C59.4213 70.5102 59.1027 71.1572 58.8098 71.8591C58.1378 73.4704 59.8492 75.0335 61.3873 74.2083C63.9148 72.8521 67.3791 71.6516 71.004 72.3877C74.3237 73.0621 76.9385 75.1318 78.7842 77.1502C79.9866 78.4643 82.1643 77.4951 81.9903 75.7226C81.8976 74.7815 81.7535 73.7848 81.5381 72.7765Z",
        fill: "#fff",
        stroke: "none",
        opacity: "none",
        isColor: true,

      },
      {
        number: 3,
        d: "M36.0967 23.9675C22.492 21.5932 9.43469 23.4188 2.07873 24.9502C2.5133 27.38 4.69836 29.197 7.24719 29.2025C60.2166 29.3239 68.5857 62.9812 68.5857 62.9812C68.2806 40.5746 56.8017 27.5802 36.0967 23.9675Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,

      },
      {
        number: 4,
        d: "M7.24719 29.2028C60.2166 29.3242 68.5857 62.9815 68.5857 62.9815C68.5607 61.134 68.4576 59.3523 68.2818 57.633C66.3976 52.0678 54.7802 24.9547 7.24719 24.8461C6.4757 24.8442 5.7384 24.6758 5.07189 24.3755C5.06213 24.3773 5.05358 24.3792 5.04382 24.3804C4.24548 24.522 3.48925 24.6654 2.78002 24.8076C2.54076 24.8552 2.307 24.9034 2.07873 24.9504C2.5133 27.3803 4.69836 29.1973 7.24719 29.2028Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,

      },
      {
        number: 5,
        d: "M33.0755 21.8301C33.0755 21.8301 33.9007 47.1572 45.3966 49.0811C51.3238 50.0735 47.9314 37.4588 54.4115 28.699",
        fill: "#fff",
        stroke: "none",
        opacity: "none",
        isColor: true,

      },
      {
        number: 6,
        d: "M33.0755 21.8301C33.0755 21.8301 33.9007 47.1572 45.3966 49.0811C51.3238 50.0735 47.9314 37.4588 54.4115 28.699L33.0755 21.8301Z",
        fill: "none",
        stroke: "#000",
        opacity: "none",
        isColor: true,

      },
      {
        number: 7,
        d: "M48.2012 31.9228C46.0741 38.6721 45.6731 46.1123 43.2592 48.4084C43.9275 48.7252 44.6385 48.9547 45.3966 49.0811C51.3237 50.0735 47.9314 37.4587 54.4115 28.6996C51.8053 27.8603 49.0245 29.3111 48.2012 31.9228Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,

      },
      {
        number: 8,
        d: "M25.4144 16.6922V16.6924C25.4144 16.8066 25.3219 16.8994 25.2072 16.8994C25.0927 16.8994 25 16.8067 25 16.6922V14.0202C25 13.9057 25.0927 13.813 25.2072 13.813C25.3217 13.813 25.4144 13.9057 25.4144 14.0202V16.6922Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,

      }
    ]
  },
  {
    id: 7,
    name: "drakefly",
    paint: "Animals",
    size: { width: 82, height: 54 },
    image: drakefly,
    imageColor: drakeflyColor,
    url: require('../app/res/images_paint/animals/drakefly_2x.png'),
    url_color: require('../app/res/images_paint/animals_color/drakefly.png'),
    backgroundImg: require('../app/res/images_paint/newPaint/forest.png'),
    data: [
      {
        number: 1,
        d: "M40.5759 29.4905C42.2378 31.1525 44.8617 31.3582 46.7618 29.9757L65.3854 16.4278C69.5633 13.3888 70.0381 7.33537 66.3846 3.68241C62.731 0.0288489 56.6781 0.503702 53.6386 4.68156L40.0912 23.3046C38.7082 25.2052 38.9139 27.8291 40.5759 29.4905Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 2,
        d: "M32.7803 52.929C32.0986 52.929 31.4132 52.6995 30.848 52.2283C29.5674 51.1608 29.3947 49.2559 30.4628 47.9754C33.3089 44.5623 32.6772 40.4791 32.0467 38.349C31.5737 36.7492 32.4868 35.0695 34.0859 34.5965C35.6838 34.1235 37.3647 35.036 37.8383 36.6357C39.493 42.2302 38.4957 47.7734 35.1009 51.8432C34.504 52.5598 33.6452 52.929 32.7803 52.929Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 3,
        d: "M45.6441 52.929C44.9618 52.929 44.2763 52.6995 43.7118 52.2283C42.4306 51.1608 42.2585 49.2559 43.3266 47.9754C46.1727 44.5623 45.5404 40.4791 44.9105 38.349C44.4369 36.7492 45.3499 35.0695 46.9491 34.5965C48.547 34.1235 50.2279 35.036 50.7015 36.6357C52.3568 42.2302 51.3595 47.7734 47.9647 51.8432C47.3678 52.5598 46.509 52.929 45.6441 52.929Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 4,
        d: "M57.6803 40.0646H8.50793C4.36121 40.0646 1 36.7034 1 32.5573C1 28.4105 4.36121 25.0493 8.50793 25.0493H57.6803V40.0646Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 5,
        d: "M26.1038 25.0493H28.4475V40.0646H26.1038V25.0493Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 6,
        d: "M8.50793 25.0493C4.36121 25.0493 1 28.4105 1 32.5573C1 36.7034 4.36121 40.0646 8.50793 40.0646H22.8896C18.5177 35.5272 17.9434 30.8965 20.2621 25.0493H8.50793Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 7,
        d: "M48.481 44.7999H46.7068C42.5875 44.7999 38.8509 42.3848 37.1602 38.6287C35.4214 34.7676 35.4214 30.3468 37.1602 26.4857C38.8509 22.7296 42.5875 20.3145 46.7068 20.3145H48.481C51.6164 20.3145 54.1585 22.856 54.1585 25.9913V39.123C54.1585 42.2584 51.6164 44.7999 48.481 44.7999Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,
      },
      {
        number: 8,
        d: "M81 33.0273C81 42.3163 72.8292 46.7316 62.7499 46.7316C52.6705 46.7316 44.4991 42.3163 44.4991 33.0273C44.4991 23.7384 52.6699 16.2085 62.7499 16.2085C72.8292 16.2085 81 23.7384 81 33.0273Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 9,
        d: "M56.2515 32.0682C55.6045 32.0682 55.0796 31.5439 55.0796 30.8964V29.5396C55.0796 28.892 55.6045 28.3677 56.2515 28.3677C56.899 28.3677 57.4233 28.892 57.4233 29.5396V30.8964C57.4233 31.5433 56.899 32.0682 56.2515 32.0682Z",
        fill: "#222",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 10,
        d: "M72.601 32.0682C71.9534 32.0682 71.4291 31.5439 71.4291 30.8964V29.5396C71.4291 28.892 71.9534 28.3677 72.601 28.3677C73.2479 28.3677 73.7728 28.892 73.7728 29.5396V30.8964C73.7728 31.5433 73.2479 32.0682 72.601 32.0682Z",
        fill: "#222",
        stroke: "none",
        opacity: "none",
        isColor: false,
      },
      {
        number: 11,
        d: "M64.4265 33.1104C63.2613 33.1104 62.1542 32.6062 61.3876 31.7267C60.9621 31.2391 61.0134 30.4987 61.5017 30.0733C61.9894 29.6485 62.7297 29.6991 63.1545 30.1874C63.4762 30.5555 63.9394 30.7673 64.4265 30.7673C64.9136 30.7673 65.3768 30.5555 65.6979 30.1874C66.1233 29.6991 66.8636 29.6485 67.3513 30.0733C67.8396 30.4987 67.8902 31.2391 67.4654 31.7267C66.6988 32.6062 65.591 33.1104 64.4265 33.1104Z",
        fill: "#222",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 12,
        d: "",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 13,
        d: "M57.8549 33.9495C57.8549 32.2594 56.1343 30.8892 54.0121 30.8892C51.8899 30.8892 50.1693 32.2594 50.1693 33.9495C50.1693 35.6389 51.8899 37.0092 54.0121 37.0092C56.1343 37.0092 57.8549 35.6389 57.8549 33.9495Z",
        fill: "#fff",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 14,
        d: "M78.6831 33.9495C78.6831 32.2594 76.9625 30.8892 74.8403 30.8892C72.7181 30.8892 70.9976 32.2594 70.9976 33.9495C70.9976 35.6389 72.7181 37.0092 74.8403 37.0092C76.9625 37.0092 78.6831 35.6389 78.6831 33.9495Z",
        fill: "#fff",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 15,
        d: "M38.7142 29.4905C37.0522 31.1525 34.4283 31.3582 32.5277 29.9757L13.9046 16.4278C9.72679 13.3888 9.25193 7.33537 12.9055 3.68241C16.5591 0.0288489 22.6119 0.503702 25.6515 4.68156L39.1988 23.3046C40.5813 25.2052 40.3762 27.8291 38.7142 29.4905Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,
      },
      {
        number: 16,
        d: "M13.1051 25.0493H15.4489V40.0646H13.1051V25.0493Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      }
    ]
  },
  {
    id: 8,
    name: "duck",
    paint: "Animals",
    size: { width: 81, height: 72 },
    image: duck,
    imageColor: duckColor,
    url: require('../app/res/images_paint/animals/duck_2x.png'),
    url_color: require('../app/res/images_paint/animals_color/duck.png'),
    backgroundImg: require('../app/res/images_paint/newPaint/dog.png'),
    data: [
      {
        number: 1,
        d: "M47.357 63.4251H42.9632V57.9683H36.2557V66.865C36.2557 68.6695 37.7187 70.1325 39.5232 70.1325H47.357C49.2092 70.1325 50.7107 68.6311 50.7107 66.7787C50.7106 64.9267 49.2092 63.4251 47.357 63.4251Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 2,
        d: "M29.5986 19.854C29.5986 9.53561 37.8833 1.03566 48.1733 1.00011C58.4987 0.964375 66.8802 9.32372 66.88 19.6407V33.0512C66.88 46.2602 56.1721 56.9681 42.9631 56.9681H24.9169C11.7079 56.9681 1 46.2602 1 33.0512V24.55C1 23.3347 2.38228 22.6358 3.36097 23.3561L3.94535 22.5622L3.36098 23.3561C6.66621 25.7888 10.6627 27.1009 14.7666 27.1009H22.3516C26.354 27.1009 29.5986 23.8565 29.5986 19.854Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 3,
        d: "M80 23.2764C80 26.6997 73.6978 29.4747 65.9238 29.4747C58.1497 29.4747 51.8475 27.8669 51.8475 23.2764C51.8475 18.6859 58.1497 17.0781 65.9238 17.0781C73.6978 17.078 80 19.8531 80 23.2764Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 4,
        d: "M43.5421 22.1863C45.9517 22.1863 47.905 20.6305 47.905 18.7113C47.905 16.7921 45.9517 15.2363 43.5421 15.2363C41.1326 15.2363 39.1793 16.7921 39.1793 18.7113C39.1793 20.6305 41.1326 22.1863 43.5421 22.1863Z",
        fill: "#FFA6BB",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 5,
        d: "M49.6736 16.2066C49.0264 16.2066 48.5018 15.682 48.5018 15.0347C48.5018 13.9903 47.6521 13.1406 46.6077 13.1406C45.5633 13.1406 44.7136 13.9903 44.7136 15.0347C44.7136 15.682 44.1889 16.2066 43.5417 16.2066C42.8946 16.2066 42.3699 15.682 42.3699 15.0347C42.3699 12.698 44.271 10.7969 46.6077 10.7969C48.9446 10.7969 50.8455 12.698 50.8455 15.0347C50.8455 15.6819 50.3208 16.2066 49.6736 16.2066Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 6,
        d: "M34.1365 48.3017C26.4907 50.9651 18.1335 46.9262 15.4701 39.2804L15.3709 38.9956C14.9904 37.9032 15.9576 36.8179 17.0863 37.0706C18.5287 37.3935 20.0326 37.307 21.4285 36.8207L29.1946 34.1154C33.112 32.7507 37.394 34.8203 38.7587 38.7376C40.1234 42.6551 38.0538 46.9371 34.1365 48.3017Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 7,
        d: "M36.0182 63.4251H31.6245V57.9683H24.9171V66.865C24.9171 68.6695 26.3801 70.1325 28.1846 70.1325H36.0184C37.8706 70.1325 39.3721 68.6311 39.3721 66.7787C39.372 64.9267 37.8704 63.4251 36.0182 63.4251Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      }
    ]
  },
  {
    id: 9,
    name: "fish",
    paint: "Animals",
    size: { width: 82, height: 56 },
    image: fish,
    imageColor: fishColor,
    url: require('../app/res/images_paint/animals/fish_2x.png'),
    url_color: require('../app/res/images_paint/animals_color/fish.png'),
    backgroundImg: require('../app/res/images_paint/newPaint/under_sea.png'),
    data: [
      {
        number: 1,
        d: "M21.5663 31.347C24.7609 28.1522 24.5717 22.7833 19.0747 17.2863C14.0014 12.213 7.23985 11.0339 3.58344 10.7869C2.12063 10.6881 0.906881 11.9014 1.00563 13.3641C1.25251 17.0203 2.43157 23.7822 7.50516 28.8558C8.58047 29.9311 9.65047 30.8013 10.7005 31.4838C11.1913 31.8027 11.1913 32.515 10.7005 32.8339C9.65047 33.5164 8.58047 34.3867 7.50516 35.4619C2.43141 40.5358 1.25251 47.2978 1.00563 50.9541C0.906881 52.4166 2.12047 53.6295 3.58297 53.5308C7.23922 53.2839 14.0011 52.1048 19.0747 47.0313C24.5717 41.5342 24.7609 36.1653 21.5663 32.9705C21.1172 32.5216 21.1172 31.7959 21.5663 31.347Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 2,
        d: "M20.9416 32.5191C20.6347 32.5191 20.3285 32.3994 20.0985 32.1613L9.22473 20.9005C8.77519 20.4349 8.78816 19.693 9.25363 19.2435C9.71941 18.7938 10.4611 18.8069 10.9107 19.2724L21.7844 30.5332C22.2339 30.9988 22.221 31.7406 21.7555 32.1902C21.528 32.4097 21.2347 32.5191 20.9416 32.5191Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 3,
        d: "M10.0672 45.4032C9.77426 45.4032 9.48083 45.294 9.25333 45.0743C8.78786 44.6248 8.77473 43.8829 9.22442 43.4173L20.0982 32.1565C20.5475 31.6912 21.2896 31.6781 21.7552 32.1276C22.2207 32.5772 22.2336 33.319 21.7841 33.7847L10.9104 45.0454C10.6805 45.2836 10.3741 45.4032 10.0672 45.4032Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 4,
        d: "M67.7452 13.845C65.9032 7.45376 60.2949 3.16079 50.9616 2.20173C37.0982 0.777199 22.2352 3.96236 33.5672 14.8991L67.7452 13.845Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 5,
        d: "M39.8392 6.2349C39.2483 5.97053 38.5551 6.23506 38.2908 6.82584C38.0264 7.41662 38.2909 8.10975 38.8817 8.37428C41.3372 9.47334 42.9886 11.2299 43.7897 13.5952C43.9551 14.0837 44.4109 14.3915 44.8995 14.3915C45.0242 14.3915 45.1509 14.3715 45.2756 14.3293C45.8886 14.1216 46.2172 13.4565 46.0095 12.8435C44.9906 9.83475 42.9147 7.61146 39.8392 6.2349ZM57.6976 13.3758C57.4212 11.3162 55.0042 7.33396 52.6814 5.79506C52.1417 5.43787 51.4147 5.58521 51.0572 6.12474C50.6997 6.66428 50.8472 7.39146 51.3867 7.74896C53.0442 8.84709 55.1784 12.2258 55.3745 13.6874C55.4536 14.276 55.9567 14.7037 56.5345 14.7037C56.5864 14.7037 56.639 14.7002 56.6918 14.6932C57.3334 14.6071 57.7836 14.0174 57.6976 13.3758Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 6,
        d: "M81 32.1588C81 46.1945 68.4893 54.1178 53.8188 54.1178C35.1349 54.1178 22.4732 44.7499 17.2348 34.6672C16.4193 33.0977 16.4193 31.2199 17.2348 29.6503C22.4732 19.5677 35.1348 10.1997 53.8188 10.1997C68.4893 10.1997 81 18.123 81 32.1588Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 7,
        d: "M46.5195 24.1947C47.1668 24.1947 47.6914 23.67 47.6914 23.0228C47.6914 22.3757 47.1668 21.851 46.5195 21.851C45.5462 21.851 44.7546 21.0593 44.7546 20.0861C44.7546 19.113 45.5462 18.3213 46.5195 18.3213C47.1668 18.3213 47.6914 17.7966 47.6914 17.1494C47.6914 16.5022 47.1668 15.9775 46.5195 15.9775C44.254 15.9775 42.4109 17.8207 42.4109 20.0861C42.4109 21.236 42.8862 22.2763 43.6501 23.0228C42.8864 23.7692 42.4109 24.8097 42.4109 25.9594C42.4109 28.2249 44.254 30.068 46.5195 30.068C47.1668 30.068 47.6914 29.5433 47.6914 28.8961C47.6914 28.2489 47.1668 27.7242 46.5195 27.7242C45.5462 27.7242 44.7546 26.9325 44.7546 25.9594C44.7546 24.9864 45.5462 24.1947 46.5195 24.1947Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 8,
        d: "M36.0947 30.0681C36.7419 30.0681 37.2666 29.5434 37.2666 28.8962C37.2666 28.249 36.7419 27.7243 36.0947 27.7243C35.1216 27.7243 34.3298 26.9326 34.3298 25.9595C34.3298 24.9864 35.1216 24.1948 36.0947 24.1948C36.7419 24.1948 37.2666 23.6701 37.2666 23.0229C37.2666 22.3758 36.7419 21.8511 36.0947 21.8511C33.8292 21.8511 31.9861 23.694 31.9861 25.9595C31.9861 27.1094 32.4614 28.1498 33.2253 28.8962C32.4616 29.6426 31.9861 30.6831 31.9861 31.8329C31.9861 34.0984 33.8292 35.9415 36.0947 35.9415C36.7419 35.9415 37.2666 35.4168 37.2666 34.7697C37.2666 34.1225 36.7419 33.5978 36.0947 33.5978C35.1216 33.5978 34.3298 32.8061 34.3298 31.8329C34.3298 30.8598 35.1216 30.0681 36.0947 30.0681Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 9,
        d: "M55.1716 47.6884C52.9062 47.6884 51.063 45.8453 51.063 43.5798C51.063 41.3143 52.9062 39.4712 55.1716 39.4712C55.819 39.4712 56.3435 39.9959 56.3435 40.6431C56.3435 41.2903 55.819 41.8149 55.1716 41.8149C54.1985 41.8149 53.4068 42.6067 53.4068 43.5798C53.4068 44.5529 54.1984 45.3446 55.1716 45.3446C55.819 45.3446 56.3435 45.8693 56.3435 46.5165C56.3435 47.1637 55.8188 47.6884 55.1716 47.6884Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 10,
        d: "M34.5084 44.5272C37.3944 47.4131 41.2663 48.2823 44.2749 45.2736C50.2322 39.3163 50.6347 32.5406 48.5649 30.4708C46.4949 28.4009 39.7192 28.8034 33.762 34.7608C30.7533 37.7694 31.6225 41.6413 34.5084 44.5272Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 11,
        d: "M39.898 35.5854C39.4405 35.1278 38.6984 35.1278 38.2408 35.5854L32.3884 41.4378C32.6826 42.1565 33.0986 42.8575 33.6184 43.5223L39.8981 37.2428C40.3556 36.7851 40.3556 36.0431 39.898 35.5854ZM43.4503 39.1378C42.9926 38.6801 42.2508 38.6801 41.793 39.1378L35.5134 45.4173C36.1783 45.9371 36.8792 46.3531 37.598 46.6473L43.4505 40.795C43.908 40.3373 43.908 39.5953 43.4503 39.1378Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 12,
        d: "M56.6936 34.3948C58.5929 34.3948 60.1326 33.1686 60.1326 31.6559C60.1326 30.1432 58.5929 28.917 56.6936 28.917C54.7942 28.917 53.2545 30.1432 53.2545 31.6559C53.2545 33.1686 54.7942 34.3948 56.6936 34.3948Z",
        fill: "#F27281",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 13,
        d: "M75.3357 34.3948C77.2351 34.3948 78.7748 33.1686 78.7748 31.6559C78.7748 30.1432 77.2351 28.917 75.3357 28.917C73.4364 28.917 71.8967 30.1432 71.8967 31.6559C71.8967 33.1686 73.4364 34.3948 75.3357 34.3948Z",
        fill: "#F27281",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 14,
        d: "M60.3346 29.8471C59.6873 29.8471 59.1627 29.3225 59.1627 28.6753C59.1627 28.4187 58.9541 28.21 58.6976 28.21C58.441 28.21 58.2324 28.4187 58.2324 28.6753C58.2324 29.3225 57.7079 29.8471 57.0605 29.8471C56.4132 29.8471 55.8887 29.3225 55.8887 28.6753C55.8887 27.1264 57.1487 25.8662 58.6976 25.8662C60.2463 25.8662 61.5065 27.1262 61.5065 28.6753C61.5065 29.3226 60.9818 29.8471 60.3346 29.8471Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 15,
        d: "M74.9682 29.8471C74.3208 29.8471 73.7963 29.3225 73.7963 28.6753C73.7963 28.4187 73.5876 28.21 73.331 28.21C73.0744 28.21 72.8658 28.4187 72.8658 28.6753C72.8658 29.3225 72.3413 29.8471 71.694 29.8471C71.0466 29.8471 70.5221 29.3225 70.5221 28.6753C70.5221 27.1264 71.7821 25.8662 73.331 25.8662C74.8799 25.8662 76.1401 27.1262 76.1401 28.6753C76.1401 29.3226 75.6155 29.8471 74.9682 29.8471Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,
      },
      {
        number: 16,
        d: "M66.0142 32.5514C65.0098 32.5514 64.055 32.1165 63.3941 31.3584C62.9687 30.8704 63.0197 30.1303 63.5076 29.705C63.9955 29.2798 64.7356 29.3304 65.1611 29.8185C65.3766 30.0659 65.6875 30.2078 66.0142 30.2078C66.3408 30.2078 66.6517 30.0659 66.8672 29.8185C67.2925 29.3307 68.0323 29.28 68.5206 29.705C69.0084 30.1303 69.0594 30.8704 68.6342 31.3584C67.9733 32.1165 67.0184 32.5514 66.0142 32.5514Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      }
    ]
  },
  {
    id: 10,
    name: "frog",
    paint: "Animals",
    size: { width: 68, height: 82 },
    image: frog,
    imageColor: frogColor,
    url: require('../app/res/images_paint/animals/frog_2x.png'),
    url_color: require('../app/res/images_paint/animals_color/frog.png'),
    backgroundImg: require('../app/res/images_paint/newPaint/sea.png'),
    data: [
      {
        number: 1,
        d: "M36.3331 80.7778C35.8078 80.9691 35.2313 81.0439 34.638 80.975C32.603 80.7381 31.1452 78.8964 31.3819 76.8614L31.6303 74.7255L28.9039 72.8555C26.1694 70.9798 24.7536 67.6544 25.2969 64.3834L26.2983 58.3519C26.6336 56.3308 28.5442 54.9642 30.5656 55.2997C32.5867 55.6353 33.9533 57.5458 33.6178 59.567L32.6164 65.5989C32.5433 66.0384 32.7335 66.485 33.1008 66.737L37.6722 69.8725C38.8069 70.6509 39.4178 71.9936 39.2586 73.3606L38.7514 77.7191C38.5838 79.1608 37.6103 80.313 36.3331 80.7778Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 2,
        d: "M58.0668 72.8673C56.7895 73.3322 55.3032 73.0755 54.2479 72.0784L51.0579 69.0658C50.0571 68.1208 49.6621 66.6997 50.031 65.3739L51.5176 60.0334C51.6371 59.6044 51.4957 59.14 51.1574 58.8506L46.5129 54.8734C44.9566 53.5408 44.7755 51.1989 46.108 49.6426C47.4409 48.0862 49.7824 47.9051 51.3388 49.2378L55.9832 53.2147C58.5018 55.3709 59.5548 58.8286 58.6656 62.023L57.779 65.208L59.3423 66.6845C60.8318 68.0912 60.899 70.4392 59.4923 71.9287C59.0823 72.3628 58.5921 72.6762 58.0668 72.8673Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 3,
        d: "M51.527 45.1052C49.9941 45.6632 48.2187 45.156 47.2313 43.7599C46.048 42.0872 46.4448 39.7722 48.1174 38.5889L60.886 29.5566C62.5595 28.373 64.874 28.7702 66.0571 30.4429C67.2404 32.1155 66.8437 34.4305 65.171 35.6138L52.4024 44.6461C52.1256 44.8419 51.8309 44.9946 51.527 45.1052Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 4,
        d: "M23.498 55.3071C23.1939 55.4177 22.8705 55.49 22.5323 55.5182L6.94516 56.8064C4.90328 56.9752 3.11125 55.4566 2.9425 53.4147C2.77375 51.3729 4.29141 49.5815 6.33406 49.4119L21.9213 48.1236C23.9631 47.9549 25.7552 49.4735 25.9239 51.5154C26.0648 53.2193 25.0306 54.7493 23.498 55.3071Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 5,
        d: "M53.6883 38.4509C50.7571 30.397 40.2939 26.8112 30.3181 30.4418C20.3423 34.0725 14.6315 43.5447 17.5627 51.5987C20.4939 59.6526 30.9571 63.2384 40.9329 59.6078C50.9087 55.9771 56.6195 46.5049 53.6883 38.4509Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 6,
        d: "M34.9993 43.3019C29.184 45.4185 26.549 52.8474 29.114 59.8949C29.2147 60.1719 29.3229 60.4435 29.4365 60.7108C33.0201 61.3455 37.0144 61.0335 40.9338 59.6069C44.8532 58.1804 48.1136 55.8518 50.4508 53.0621C50.366 52.7843 50.2741 52.5068 50.1733 52.2297C47.6083 45.1826 40.8146 41.1854 34.9993 43.3019Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 7,
        d: "M49.8471 11.1725C49.6187 10.9515 49.4611 10.6678 49.4062 10.3547C49.2939 9.71326 49.1254 9.07279 48.895 8.43951C46.7601 2.57404 40.2746 -0.450178 34.4092 1.68467C32.8878 2.23842 31.5592 3.08638 30.4611 4.1392C30.19 4.39904 29.8386 4.55545 29.4645 4.58888C26.8476 4.82373 24.1859 5.40545 21.555 6.3631C18.924 7.32076 16.5111 8.58592 14.3554 10.0881C14.0473 10.3028 13.6776 10.409 13.3029 10.3842C11.785 10.2837 10.2221 10.4879 8.70074 11.0417C2.83527 13.1765 -0.188947 19.662 1.9459 25.5275C2.17637 26.1608 2.45902 26.7597 2.78527 27.3233C2.94449 27.5984 3.00621 27.917 2.97308 28.2331C2.65965 31.2345 2.99058 34.2797 4.05777 37.212C8.40308 49.1508 21.6175 50.1223 35.6262 45.0236C49.635 39.9248 59.1331 30.6864 54.7878 18.7478C53.7204 15.8156 52.0165 13.2703 49.8471 11.1725Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 8,
        d: "M19.3572 27.071C18.5527 24.8604 15.6497 23.8876 12.8731 24.8981C10.0966 25.9087 8.49793 28.5198 9.30245 30.7304C10.107 32.9409 13.01 33.9137 15.7866 32.9032C18.5631 31.8927 20.1618 29.2815 19.3572 27.071Z",
        fill: "#FFA6BB",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 9,
        d: "M36.5483 20.8114C37.3528 23.0219 40.2558 23.9947 43.0324 22.9842C45.8089 21.9737 47.4076 19.3625 46.6031 17.152C45.7986 14.9414 42.8955 13.9686 40.119 14.9791C37.3424 15.9896 35.7438 18.6008 36.5483 20.8114Z",
        fill: "#FFA6BB",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 10,
        d: "M13.4494 25.0391C12.9707 25.0391 12.5213 24.7437 12.348 24.2677L11.5627 22.1101C11.3413 21.5018 11.6549 20.8294 12.263 20.608C12.8713 20.3868 13.5438 20.7004 13.7651 21.3085L14.5504 23.4662C14.7718 24.0745 14.4582 24.7468 13.8501 24.9682C13.7177 25.0163 13.5824 25.0391 13.4494 25.0391Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 11,
        d: "M28.1588 24.5072C26.1474 25.2392 23.9233 24.2022 23.1913 22.1908L22.2275 19.543C22.0277 18.9939 22.3108 18.3867 22.8599 18.1869L28.1554 16.2594C28.7044 16.0596 29.3116 16.3427 29.5114 16.8917L30.4752 19.5396C31.2072 21.5511 30.1702 23.7752 28.1588 24.5072Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 12,
        d: "M39.0158 15.7335C38.5371 15.7335 38.0877 15.4381 37.9144 14.9621L37.1291 12.8045C36.9077 12.1963 37.2213 11.5238 37.8294 11.3024C38.4379 11.081 39.1101 11.3948 39.3315 12.0028L40.1168 14.1604C40.3382 14.7687 40.0246 15.441 39.4165 15.6624C39.2841 15.7107 39.1488 15.7335 39.0158 15.7335Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 13,
        d: "M46.5502 34.2837C47.1986 34.2837 47.7242 33.758 47.7242 33.1096C47.7242 32.4612 47.1986 31.9355 46.5502 31.9355C45.9017 31.9355 45.3761 32.4612 45.3761 33.1096C45.3761 33.758 45.9017 34.2837 46.5502 34.2837Z",
        fill: "#000",
        stroke: "none",
        opacity: "0.1",
        isColor: false,

      },
      {
        number: 14,
        d: "M5.90478 20.8647C6.55319 20.8647 7.07884 20.3391 7.07884 19.6907C7.07884 19.0422 6.55319 18.5166 5.90478 18.5166C5.25636 18.5166 4.73071 19.0422 4.73071 19.6907C4.73071 20.3391 5.25636 20.8647 5.90478 20.8647Z",
        fill: "#000",
        stroke: "none",
        opacity: "0.1",
        isColor: false,

      },
      {
        number: 15,
        d: "M23.3315 54.8081C23.9799 54.8081 24.5056 54.2824 24.5056 53.634C24.5056 52.9856 23.9799 52.46 23.3315 52.46C22.6831 52.46 22.1575 52.9856 22.1575 53.634C22.1575 54.2824 22.6831 54.8081 23.3315 54.8081Z",
        fill: "#000",
        stroke: "none",
        opacity: "0.1",
        isColor: false,
      },
      {
        number: 16,
        d: "M49.3032 28.7163C49.9516 28.7163 50.4773 28.1906 50.4773 27.5422C50.4773 26.8938 49.9516 26.3682 49.3032 26.3682C48.6548 26.3682 48.1292 26.8938 48.1292 27.5422C48.1292 28.1906 48.6548 28.7163 49.3032 28.7163Z",
        fill: "#000",
        stroke: "none",
        opacity: "0.1",
        isColor: false,

      }
    ]
  },
  {
    id: 11,
    name: "jellyfish",
    paint: "Animals",
    size: { width: 74, height: 83 },
    image: jellyfish,
    imageColor: jellyfishColor,
    url: require('../app/res/images_paint/animals/jellyfish_2x.png'),
    url_color: require('../app/res/images_paint/animals_color/jellyfish.png'),
    backgroundImg: require('../app/res/images_paint/newPaint/under_sea.png'),
    data: [
      {
        number: 1,
        d: "M10.6645 75.8639C10.174 75.8639 9.67558 75.7712 9.19308 75.5757C7.18605 74.7623 6.21808 72.4759 7.03152 70.4687C9.39949 64.6248 9.28574 61.4137 9.15386 57.6954C8.99808 53.2982 8.82152 48.3142 12.5096 39.5928C13.3531 37.5981 15.6542 36.665 17.6487 37.5084C19.6432 38.3518 20.5765 40.6528 19.7331 42.6473C16.7206 49.7706 16.8523 53.485 16.9917 57.4176C17.1346 61.4493 17.2965 66.0193 14.3001 73.4137C13.682 74.9389 12.214 75.8639 10.6645 75.8639Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 2,
        d: "M21.6304 81C20.4701 81 19.3213 80.4875 18.5476 79.5053C17.2073 77.8041 17.4999 75.3386 19.201 73.9983C22.8688 71.1086 23.0738 66.3874 23.1048 58.9238C23.1346 51.7172 23.1683 43.5488 28.3001 36.2397C29.5444 34.4672 31.9901 34.0392 33.7626 35.2836C35.5349 36.528 35.9632 38.9738 34.7187 40.7461C31.0007 46.0419 30.9735 52.6072 30.9473 58.9563C30.9319 62.6574 30.916 66.4847 30.149 69.9917C29.1951 74.3536 27.2015 77.6791 24.0543 80.1588C23.3357 80.7252 22.4799 81 21.6304 81Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 3,
        d: "M63.3347 75.8639C63.8252 75.8639 64.3236 75.7712 64.8061 75.5757C66.8132 74.7623 67.7811 72.4759 66.9677 70.4687C64.5997 64.6248 64.7135 61.4137 64.8454 57.6954C65.0011 53.2982 65.1777 48.3142 61.4896 39.5928C60.6461 37.5981 58.3451 36.665 56.3505 37.5084C54.356 38.3518 53.4227 40.6528 54.2662 42.6473C57.2787 49.7706 57.1469 53.485 57.0076 57.4176C56.8646 61.4493 56.7027 66.0193 59.6991 73.4137C60.3172 74.9389 61.7851 75.8639 63.3347 75.8639Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 4,
        d: "M52.3687 81C53.529 81 54.6777 80.4875 55.4515 79.5053C56.7918 77.8041 56.4991 75.3386 54.7982 73.9983C51.1304 71.1086 50.9254 66.3874 50.8944 58.9238C50.8646 51.7172 50.8308 43.5488 45.6991 36.2397C44.4547 34.4672 42.0091 34.0392 40.2366 35.2836C38.4643 36.528 38.036 38.9738 39.2805 40.7461C42.9985 46.0419 43.0257 52.6072 43.0519 58.9563C43.0672 62.6574 43.0832 66.4847 43.8502 69.9917C44.8041 74.3536 46.7977 77.6791 49.9449 80.1588C50.6635 80.7252 51.5193 81 52.3687 81Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 5,
        d: "M61.4907 39.5932C60.6472 37.5985 58.3462 36.6654 56.3516 37.509C54.3571 38.3524 53.4238 40.6534 54.2674 42.648C55.8077 46.2901 56.5249 49.0398 56.8404 51.3844C57.4151 51.4466 58.0032 51.4837 58.6065 51.4837L58.7154 51.4834C60.771 51.4687 62.7638 51.1334 64.6407 50.5037C64.2594 47.568 63.386 44.0748 61.4907 39.5932Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 6,
        d: "M50.5265 49.8915C50.0149 45.2934 48.7702 40.6128 45.6999 36.2397C44.4555 34.4673 42.0099 34.0392 40.2374 35.2836C38.4651 36.5279 38.0368 38.9737 39.2813 40.7461C40.9112 43.0675 41.8316 45.633 42.3538 48.3172C44.8702 48.5747 47.304 49.0151 49.6293 49.6384C49.9215 49.7169 50.2204 49.8022 50.5265 49.8915Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 7,
        d: "M33.7638 35.2835C31.9911 34.0393 29.5457 34.4671 28.3013 36.2396C25.231 40.6128 23.9863 45.2934 23.4747 49.8915C23.7807 49.8021 24.0794 49.7168 24.3719 49.6385C26.6974 49.0153 29.1311 48.5749 31.6475 48.3173C32.1697 45.6331 33.0904 43.0678 34.72 40.7462C35.9641 38.9737 35.5361 36.5279 33.7638 35.2835Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 8,
        d: "M17.6491 37.5089C15.6546 36.6655 13.3536 37.5986 12.51 39.5931C10.6147 44.0747 9.74127 47.568 9.35986 50.5034C11.2367 51.1331 13.2296 51.4684 15.2852 51.4831C15.2852 51.4831 15.3941 51.4834 15.3942 51.4834C15.9975 51.4834 16.5855 51.4464 17.1602 51.3842C17.4758 49.0395 18.1931 46.2898 19.7331 42.6478C20.5769 40.6533 19.6436 38.3525 17.6491 37.5089Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 9,
        d: "M37.0002 43.2178C41.7033 43.2178 46.3358 43.7564 50.879 44.9741C53.4294 45.6577 56.0035 46.6731 58.6808 46.6539C66.9307 46.5952 73.0447 39.6622 72.5526 31.632C71.4515 13.6734 53.223 1 37.0002 1C20.7777 1 2.54912 13.6734 1.44803 31.6322C0.955838 39.6623 7.0699 46.5953 15.3197 46.6541C17.9969 46.6733 20.5711 45.6578 23.1216 44.9742C27.6646 43.7564 32.2972 43.2178 37.0002 43.2178Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 10,
        d: "M6.27709 31.6322C7.32365 14.5598 23.849 2.265 39.4147 1.09281C38.6066 1.03203 37.801 1 37.0002 1C20.7777 1 2.54912 13.6734 1.44803 31.6322C0.955838 39.6623 7.0699 46.5953 15.3197 46.6541C16.1229 46.6597 16.9163 46.5711 17.703 46.4278C10.7241 45.1723 5.8349 38.8455 6.27709 31.6322Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 11,
        d: "M22.2356 34.1894C21.5688 34.1894 21.0284 33.649 21.0284 32.9822V30.3102C21.0284 29.6435 21.5688 29.103 22.2356 29.103C22.9025 29.103 23.4428 29.6435 23.4428 30.3102V32.9822C23.443 33.649 22.9025 34.1894 22.2356 34.1894Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,
      },
      {
        number: 12,
        d: "M51.7635 34.1894C51.0966 34.1894 50.5563 33.649 50.5563 32.9822V30.3102C50.5563 29.6435 51.0966 29.103 51.7635 29.103C52.4304 29.103 52.9707 29.6435 52.9707 30.3102V32.9822C52.9707 33.649 52.4302 34.1894 51.7635 34.1894Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 13,
        d: "M36.9998 35.6153C35.2313 35.6153 33.5717 34.8774 32.4469 33.5903C32.008 33.0883 32.0592 32.3258 32.5611 31.8869C33.0631 31.448 33.8258 31.4991 34.2645 32.0011C34.9311 32.7635 35.928 33.2006 36.9997 33.2006C38.0716 33.2006 39.0684 32.7635 39.7347 32.0013C40.1733 31.4991 40.9363 31.4478 41.438 31.8869C41.94 32.3256 41.9914 33.0883 41.5524 33.5903C40.428 34.8774 38.7684 35.6153 36.9998 35.6153Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      }
    ]
  },
  {
    id: 12,
    name: "owl",
    paint: "Animals",
    size: { width: 82, height: 74 },
    image: owl,
    imageColor: owlColor,
    url: require('../app/res/images_paint/animals/owl_2x.png'),
    url_color: require('../app/res/images_paint/animals_color/owl.png'),
    backgroundImg: require('../app/res/images_paint/newPaint/forest_night.png'),
    data: [
      {
        number: 1,
        d: "M20.1769 54.1611C16.5726 57.9765 6.35788 62.5933 2.54241 58.9887C-1.27306 55.3844 2.75538 44.9237 6.35991 41.1083C9.96429 37.2928 15.9794 37.1217 19.7949 40.7261C23.6104 44.3304 23.7815 50.3456 20.1769 54.1611Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 2,
        d: "M61.8232 54.1611C65.4276 57.9765 75.6423 62.5933 79.4579 58.9887C83.2734 55.3844 79.245 44.9237 75.6404 41.1083C72.0361 37.2928 66.0209 37.1217 62.2054 40.7261C58.3898 44.3304 58.2187 50.3456 61.8232 54.1611Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 3,
        d: "M73.5854 38.3177C73.5854 18.6181 58.9963 2.64844 40.9999 2.64844C23.0035 2.64844 8.41443 18.6181 8.41443 38.3177C8.41443 58.0172 23.0035 66.4463 40.9999 66.4463C58.9963 66.4463 73.5854 58.0172 73.5854 38.3177Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 4,
        d: "M41.0001 23.1504C29.2157 23.1504 19.6626 33.5254 19.6626 46.3235C19.6626 53.8351 22.9545 60.5107 28.0559 64.7451C32.0238 65.8938 36.4001 66.4462 41.0001 66.4462C45.6001 66.4462 49.9763 65.894 53.9443 64.7451C59.0457 60.5107 62.3376 53.8352 62.3376 46.3235C62.3374 33.5254 52.7845 23.1504 41.0001 23.1504Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 5,
        d: "M40.9999 49.6778C40.7 49.6778 40.4 49.5634 40.1713 49.3345L37.1775 46.3409C36.7199 45.8833 36.7199 45.1412 37.1775 44.6836C37.6352 44.2259 38.3772 44.2259 38.8347 44.6836L40.9999 46.8487L43.1649 44.6837C43.6225 44.2261 44.3646 44.2261 44.8222 44.6837C45.2799 45.1414 45.2799 45.8834 44.8222 46.3411L41.8285 49.3347C41.5997 49.5634 41.2997 49.6778 40.9999 49.6778Z",
        fill: "#000",
        stroke: "none",
        opacity: "0.1",
        isColor: false,

      },
      {
        number: 6,
        d: "M31.5948 55.4519C31.284 55.4519 30.9859 55.3284 30.7662 55.1086L27.7724 52.1148C27.3148 51.6572 27.3148 50.9152 27.7724 50.4575C28.2301 49.9998 28.9721 49.9998 29.4296 50.4575L31.5946 52.6227L33.7596 50.4575C34.2173 49.9998 34.9593 49.9998 35.4168 50.4575C35.8745 50.9152 35.8745 51.6572 35.4168 52.1148L32.4232 55.1086C32.2037 55.3284 31.9056 55.4519 31.5948 55.4519Z",
        fill: "#000",
        stroke: "none",
        opacity: "0.1",
        isColor: false,

      },
      {
        number: 7,
        d: "M50.405 55.4519C50.0942 55.4519 49.7961 55.3285 49.5764 55.1087L46.5828 52.1149C46.1251 51.6572 46.1251 50.9152 46.5828 50.4576C47.0405 49.9999 47.7825 49.9997 48.24 50.4576L50.405 52.6227L52.57 50.4576C53.0277 49.9999 53.7697 49.9999 54.2273 50.4576C54.685 50.9152 54.685 51.6572 54.2273 52.1149L51.2336 55.1087C51.0139 55.3285 50.7159 55.4519 50.405 55.4519Z",
        fill: "#000",
        stroke: "none",
        opacity: "0.1",
        isColor: false,

      },
      {
        number: 8,
        d: "M74.5698 1.51778C68.9256 4.78965 62.5173 6.51278 55.9933 6.51278H26.0066C19.4825 6.51278 13.0742 4.78965 7.43 1.51778C5.42062 0.352935 2.9825 2.14981 3.51062 4.41168C4.55875 8.90028 7.04047 13.1136 11.7012 15.1551C10.1881 17.739 9.31984 20.7464 9.31984 23.957C9.31984 33.5912 17.1298 41.4012 26.7641 41.4012C32.6412 41.4012 37.8395 38.4947 41.0002 34.0406C44.1608 38.4947 49.3589 41.4012 55.2362 41.4012C64.8705 41.4012 72.6805 33.5912 72.6805 23.957C72.6805 20.7464 71.8122 17.739 70.2991 15.1551C74.9598 13.1134 77.4416 8.90028 78.4897 4.41168C79.0175 2.14981 76.5794 0.352935 74.5698 1.51778Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 9,
        d: "M26.764 34.9859C32.8546 34.9859 37.7921 30.0485 37.7921 23.9578C37.7921 17.8671 32.8546 12.9297 26.764 12.9297C20.6733 12.9297 15.7358 17.8671 15.7358 23.9578C15.7358 30.0485 20.6733 34.9859 26.764 34.9859Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 10,
        d: "M55.2356 34.9859C61.3263 34.9859 66.2638 30.0485 66.2638 23.9578C66.2638 17.8671 61.3263 12.9297 55.2356 12.9297C49.145 12.9297 44.2075 17.8671 44.2075 23.9578C44.2075 30.0485 49.145 34.9859 55.2356 34.9859Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 11,
        d: "M38.864 28.1937L38.864 28.1937L36.339 30.4696L36.3389 30.4696C35.7169 31.0302 35.5927 31.9591 36.0457 32.6637C36.0457 32.6637 36.0457 32.6637 36.0457 32.6637L40.3138 39.3014L40.3138 39.3014C40.635 39.8009 41.3651 39.8009 41.6863 39.3014L41.6863 39.3014L45.9544 32.6637L45.9544 32.6637C46.4074 31.9593 46.2832 31.0304 45.6611 30.4696L38.864 28.1937ZM38.864 28.1937C40.0778 27.0995 41.9222 27.0995 43.1361 28.1937C43.1362 28.1937 43.1362 28.1937 43.1362 28.1937L45.6611 30.4696L38.864 28.1937Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 12,
        d: "M31.5805 72.8479C28.9204 72.8479 26.7638 70.6913 26.7638 68.0312V64.8616C26.7638 62.2015 28.9204 60.0449 31.5805 60.0449C34.2407 60.0449 36.3972 62.2015 36.3972 64.8616V68.0312C36.3974 70.6913 34.2408 72.8479 31.5805 72.8479Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 13,
        d: "M50.4192 72.8479C53.0794 72.8479 55.2359 70.6913 55.2359 68.0312V64.8616C55.2359 62.2015 53.0794 60.0449 50.4192 60.0449C47.759 60.0449 45.6025 62.2015 45.6025 64.8616V68.0312C45.6025 70.6913 47.759 72.8479 50.4192 72.8479Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 14,
        d: "M26.9055 25.9551C26.2583 25.9551 25.7336 25.4304 25.7336 24.7832V22.4043C25.7336 21.7571 26.2583 21.2324 26.9055 21.2324C27.5527 21.2324 28.0774 21.7571 28.0774 22.4043V24.7832C28.0774 25.4304 27.5527 25.9551 26.9055 25.9551Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 15,
        d: "M55.0944 25.9551C54.4472 25.9551 53.9225 25.4304 53.9225 24.7832V22.4043C53.9225 21.7571 54.4472 21.2324 55.0944 21.2324C55.7416 21.2324 56.2663 21.7571 56.2663 22.4043V24.7832C56.2663 25.4304 55.7416 25.9551 55.0944 25.9551Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,
      }
    ]
  },
  {
    id: 13,
    name: "penguin",
    paint: "Animals",
    size: { width: 82, height: 80 },
    image: penguin,
    imageColor: penguinColor,
    url: require('../app/res/images_paint/animals/penguin_2x.png'),
    url_color: require('../app/res/images_paint/animals_color/penguin.png'),
    backgroundImg: require('../app/res/images_paint/newPaint/Winter.png'),
    data: [
      {
        number: 1,
        d: "M10.3606 52.8914C5.98354 51.2982 -0.12974 45.7684 1.18042 42.1687C2.49057 38.569 10.7282 38.2625 15.1051 39.8556C19.4821 41.4487 21.0432 45.3217 19.7331 48.9214C18.4229 52.5211 14.7374 54.4843 10.3606 52.8914Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 2,
        d: "M71.6394 52.8914C76.0164 51.2982 82.1297 45.7686 80.8196 42.1687C79.5094 38.569 71.2717 38.2625 66.8949 39.8556C62.5178 41.4487 60.9567 45.3217 62.2669 48.9214C63.5771 52.5211 67.2625 54.4843 71.6394 52.8914Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 3,
        d: "M41.0001 69.123C54.9617 69.123 66.2456 66.3073 69.6715 54.9965C74.1662 40.1571 65.3394 8.25586 41.0001 8.25586C16.6609 8.25586 7.83405 40.1571 12.3287 54.9965C15.7547 66.3073 27.0386 69.123 41.0001 69.123Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 4,
        d: "M58.2008 47.2652C57.3483 45.5268 57.7081 43.4495 59.0689 42.072C61.4022 39.7101 62.8158 36.4384 62.727 32.8355C62.562 26.1357 57.1088 20.6593 50.4097 20.4673C47.4072 20.3812 44.6322 21.339 42.4184 23.0035C41.5825 23.6321 40.4177 23.6321 39.5816 23.0035C37.3678 21.339 34.5928 20.3812 31.5903 20.4673C24.8913 20.6593 19.438 26.1357 19.273 32.8355C19.1842 36.4382 20.5978 39.7099 22.9311 42.0718C24.2919 43.4493 24.6517 45.5266 23.7992 47.2651C21.2755 52.4113 19.6772 58.4612 18.962 64.2565C24.342 67.9857 32.1302 69.1232 41 69.1232C49.8698 69.1232 57.658 67.9857 63.038 64.2565C62.3228 58.4613 60.7245 52.4116 58.2008 47.2652Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 5,
        d: "M40.9999 41.2395C42.9916 41.2395 45.1266 39.4353 45.5547 36.365C46.0735 32.6444 43.5155 31.8516 40.9999 31.8516C38.4843 31.8516 35.9263 32.6444 36.445 36.365C36.8732 39.4353 39.0082 41.2395 40.9999 41.2395Z",
        fill: "none",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 6,
        d: "M28.0673 37.4435C30.4259 37.4435 32.3379 35.9208 32.3379 34.0425C32.3379 32.1643 30.4259 30.6416 28.0673 30.6416C25.7087 30.6416 23.7966 32.1643 23.7966 34.0425C23.7966 35.9208 25.7087 37.4435 28.0673 37.4435Z",
        fill: "#F27281",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 7,
        d: "M53.9328 37.4435C56.2914 37.4435 58.2035 35.9208 58.2035 34.0425C58.2035 32.1643 56.2914 30.6416 53.9328 30.6416C51.5742 30.6416 49.6622 32.1643 49.6622 34.0425C49.6622 35.9208 51.5742 37.4435 53.9328 37.4435Z",
        fill: "#F27281",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 8,
        d: "M32.5888 31.5141C31.9416 31.5141 31.4169 30.9894 31.4169 30.3422C31.4169 29.8675 31.0307 29.4814 30.556 29.4814C30.0813 29.4814 29.6952 29.8677 29.6952 30.3422C29.6952 30.9894 29.1705 31.5141 28.5233 31.5141C27.8761 31.5141 27.3514 30.9894 27.3514 30.3422C27.3514 28.5752 28.7889 27.1377 30.556 27.1377C32.323 27.1377 33.7607 28.5752 33.7607 30.3422C33.7607 30.9894 33.236 31.5141 32.5888 31.5141Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 9,
        d: "M53.4768 31.5141C52.8295 31.5141 52.305 30.9894 52.305 30.3422C52.305 29.8675 51.9187 29.4814 51.444 29.4814C50.9695 29.4814 50.5833 29.8677 50.5833 30.3422C50.5833 30.9894 50.0587 31.5141 49.4114 31.5141C48.764 31.5141 48.2395 30.9894 48.2395 30.3422C48.2395 28.5752 49.677 27.1377 51.444 27.1377C53.2112 27.1377 54.6487 28.5752 54.6487 30.3422C54.6487 30.9894 54.124 31.5141 53.4768 31.5141Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 10,
        d: "M35.1229 71.744H29.9988C28.447 71.744 27.1888 70.4859 27.1888 68.934C27.1888 67.3821 28.447 66.124 29.9988 66.124H35.1229C36.6748 66.124 37.9329 67.3821 37.9329 68.934C37.9327 70.4859 36.6748 71.744 35.1229 71.744Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 11,
        d: "M46.8773 71.744H52.0014C53.5532 71.744 54.8114 70.4859 54.8114 68.934C54.8114 67.3821 53.5532 66.124 52.0014 66.124H46.8773C45.3254 66.124 44.0673 67.3821 44.0673 68.934C44.0675 70.4859 45.3254 71.744 46.8773 71.744Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      }
    ]
  },
  {
    id: 14,
    paint: "Animals",
    name: "pig",
    size: { width: 80, height: 81 },
    image: pig,
    imageColor: pigColor,
    url: require('../app/res/images_paint/animals/pig_2x.png'),
    url_color: require('../app/res/images_paint/animals_color/pig.png'),
    backgroundImg: require('../app/res/images_paint/newPaint/dog.png'),
    data: [
      {
        number: 1,
        d: "M5.95325 17.7683C6.24561 22.0658 7.89539 27.9026 13.6534 33.0881L28.6925 16.3901C22.9351 11.204 16.9579 10.1718 12.6537 10.3293C8.73524 10.4728 5.68775 13.8565 5.95325 17.7683Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,

      },
      {
        number: 2,
        d: "M13.2433 21.3563C13.4435 23.5731 14.3511 26.4942 17.2448 29.101L25.1012 20.3779C22.2069 17.7717 19.207 17.1735 16.9817 17.2053C14.7606 17.237 13.0431 19.1444 13.2433 21.3563Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 3,
        d: "M73.9764 17.7683C73.6841 22.0658 72.0343 27.9026 66.2769 33.0881L51.2372 16.3901C56.9952 11.204 62.9718 10.1718 67.276 10.3293C71.1945 10.4728 74.242 13.8565 73.9764 17.7683Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 4,
        d: "M66.6864 21.3563C66.4862 23.5731 65.5792 26.4942 62.6849 29.101L54.8285 20.3779C57.7228 17.7717 60.7227 17.1735 62.948 17.2053C65.1691 17.237 66.8866 19.1444 66.6864 21.3563Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 5,
        d: "M21.7621 75.2839C18.9948 75.2839 16.7511 73.0403 16.7511 70.2729V59.9556H26.7731V70.2729C26.7731 73.0403 24.5294 75.2839 21.7621 75.2839Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 6,
        d: "M58.1677 75.2839C55.4004 75.2839 53.1567 73.0403 53.1567 70.2729V59.9556H63.1787V70.2729C63.1787 73.0403 60.9357 75.2839 58.1677 75.2839Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 7,
        d: "M69.8682 46.7532C69.8682 30.2383 56.4801 12.001 39.9652 12.001C23.4497 12.001 10.0616 30.2383 10.0616 46.7532C10.0616 55.1925 13.5571 61.1794 19.1797 65.0167C21.3531 66.5005 22.6715 68.9462 22.6715 71.578V74.9893C22.6715 77.7566 24.9152 80.0002 27.6825 80.0002C30.4504 80.0002 32.6935 77.7566 32.6935 74.9893V72.9641C32.6935 71.3632 34.0558 70.0936 35.6512 70.223C37.0599 70.3365 38.4998 70.3933 39.9646 70.3933C41.4294 70.3933 42.8699 70.3365 44.278 70.223C45.8734 70.0936 47.2357 71.3632 47.2357 72.9641V74.9893C47.2357 77.7566 49.4794 80.0002 52.2467 80.0002C55.014 80.0002 57.2577 77.7566 57.2577 74.9893V71.578C57.2577 68.9462 58.576 66.5005 60.7495 65.0167C66.3727 61.1794 69.8682 55.1925 69.8682 46.7532Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 8,
        d: "M52.2711 47.953C52.2711 42.2401 46.7615 37.6094 39.9652 37.6094C33.1683 37.6094 27.6587 42.2401 27.6587 47.953C27.6587 53.6659 33.1683 58.2966 39.9652 58.2966C46.7615 58.2966 52.2711 53.6659 52.2711 47.953Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 9,
        d: "M35.4565 52.3763C34.0149 52.3763 32.8461 51.2075 32.8461 49.7659V46.1404C32.8461 44.6987 34.0149 43.5293 35.4565 43.5293C36.8988 43.5293 38.067 44.6987 38.067 46.1404V49.7659C38.0676 51.2075 36.8988 52.3763 35.4565 52.3763Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 10,
        d: "M44.4733 52.3763C43.031 52.3763 41.8622 51.2075 41.8622 49.7659V46.1404C41.8622 44.6987 43.031 43.5293 44.4733 43.5293C45.9149 43.5293 47.0837 44.6987 47.0837 46.1404V49.7659C47.0837 51.2075 45.9149 52.3763 44.4733 52.3763Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 11,
        d: "M52.948 38.5028C52.2809 38.5028 51.7407 37.9626 51.7407 37.2955V35.2917C51.7407 34.6246 52.2809 34.0845 52.948 34.0845C53.6151 34.0845 54.1553 34.6246 54.1553 35.2917V37.2955C54.1553 37.9626 53.6145 38.5028 52.948 38.5028Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 12,
        d: "M26.9818 38.5028C26.3153 38.5028 25.7745 37.9626 25.7745 37.2955V35.2917C25.7745 34.6246 26.3153 34.0845 26.9818 34.0845C27.6489 34.0845 28.1891 34.6246 28.1891 35.2917V37.2955C28.1891 37.9626 27.6489 38.5028 26.9818 38.5028Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      }
    ]
  },
  {
    id: 15,
    paint: "Animals",
    name: "snail",
    size: { width: 82, height: 58 },
    image: snail,
    imageColor: snailColor,
    url: require('../app/res/images_paint/animals/snail_2x.png'),
    url_color: require('../app/res/images_paint/animals_color/snail.png'),
    backgroundImg: require('../app/res/images_paint/newPaint/snail.png'),
    data: [
      {
        number: 1,
        d: "M61.3394 56.9665H4.04627C2.14127 56.9665 0.704079 55.2373 1.0522 53.3645C2.40908 46.0674 8.77611 40.7754 16.1981 40.7754H61.3392L61.3394 56.9665Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 2,
        d: "M55.0564 24.9637C55.0564 32.3979 51.5417 39.0404 46.0275 43.4296C40.8636 43.4296 39.5939 48.8941 30.2453 48.8941C16.5425 48.8941 5.43408 38.1801 5.43408 24.9637C5.43408 11.7473 16.5425 1.0332 30.2453 1.0332C43.9481 1.0332 55.0564 11.7473 55.0564 24.9637Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 3,
        d: "M74.9697 18.6931C75.1288 18.4031 75.4309 18.2203 75.7617 18.2203H75.7669C78.657 18.2203 81 15.8773 81 12.9872C81 9.97625 78.4574 7.55922 75.402 7.7664C72.8744 7.93781 70.8053 9.94281 70.5592 12.4644C70.4822 13.2542 70.582 14.0116 70.8225 14.7034C70.9069 14.9464 70.8822 15.2125 70.7522 15.4344C68.5172 19.2483 67.3906 23.2494 66.9077 26.4819C66.8033 27.1803 66.1188 27.6323 65.4345 27.4575C64.1286 27.1237 62.7558 26.9456 61.3392 26.9456C60.0756 26.9456 58.8472 27.0878 57.6697 27.3555C57.1103 27.4827 56.5988 27.0075 56.7006 26.4431C57.1134 24.1569 57.9227 21.3939 59.4038 18.693C59.5627 18.4031 59.865 18.2203 60.1956 18.2203H60.2009C63.0911 18.2203 65.4341 15.8773 65.4341 12.9872C65.4341 9.97656 62.8917 7.55953 59.8367 7.76625C57.3089 7.93734 55.2395 9.94234 54.9933 12.4639C54.9161 13.2541 55.0161 14.012 55.2569 14.7041C55.3411 14.9464 55.3166 15.2119 55.1867 15.4333C52.1017 20.6972 51.128 26.3178 51.0445 29.7817C51.0322 30.2952 50.8077 30.7766 50.4284 31.123C47.4381 33.8548 45.5764 37.6984 45.5764 41.9562C45.5764 50.2464 52.6336 56.967 61.3392 56.967C70.0448 56.967 77.102 50.2464 77.102 41.9562C77.102 37.8111 75.3375 34.0587 72.4848 31.3425C72.1011 30.977 71.88 30.4734 71.8917 29.9436C71.9456 27.5181 72.5941 23.0252 74.9697 18.6931Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 4,
        d: "M61.0815 14.7871C60.4342 14.7871 59.9097 14.2624 59.9097 13.6152V12.3521C59.9097 11.7049 60.4342 11.1802 61.0815 11.1802C61.7289 11.1802 62.2534 11.7049 62.2534 12.3521V13.6152C62.2534 14.2624 61.7289 14.7871 61.0815 14.7871Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 5,
        d: "M53.4937 39.1322C55.3356 39.1322 56.8287 37.9431 56.8287 36.4763C56.8287 35.0094 55.3356 33.8203 53.4937 33.8203C51.6518 33.8203 50.1587 35.0094 50.1587 36.4763C50.1587 37.9431 51.6518 39.1322 53.4937 39.1322Z",
        fill: "#F27281",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 6,
        d: "M71.5717 39.1322C73.4136 39.1322 74.9067 37.9431 74.9067 36.4763C74.9067 35.0094 73.4136 33.8203 71.5717 33.8203C69.7298 33.8203 68.2367 35.0094 68.2367 36.4763C68.2367 37.9431 69.7298 39.1322 71.5717 39.1322Z",
        fill: "#F27281",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 7,
        d: "M62.533 37.6481C61.4772 37.6481 60.4735 37.1909 59.7791 36.394C59.3538 35.906 59.4049 35.1657 59.8929 34.7406C60.3807 34.3156 61.1211 34.3662 61.5461 34.8542C61.7955 35.1402 62.1552 35.3043 62.533 35.3043C62.911 35.3043 63.2708 35.1402 63.5202 34.854C63.9454 34.3662 64.6858 34.3154 65.1735 34.7406C65.6615 35.1659 65.7121 35.9062 65.2869 36.394C64.5924 37.1909 63.5886 37.6481 62.533 37.6481Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 8,
        d: "M76.6476 14.7871C76.0002 14.7871 75.4757 14.2624 75.4757 13.6152V12.3521C75.4757 11.7049 76.0002 11.1802 76.6476 11.1802C77.2948 11.1802 77.8195 11.7049 77.8195 12.3521V13.6152C77.8195 14.2624 77.2948 14.7871 76.6476 14.7871Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 9,
        d: "M27.9692 13.3345C21.1095 13.3345 15.5288 18.9153 15.5288 25.7751C15.5288 26.4223 16.0533 26.947 16.7006 26.947C17.348 26.947 17.8725 26.4223 17.8725 25.7751C17.8725 20.2076 22.4019 15.6782 27.9692 15.6782C35.09 15.6782 40.8833 21.4715 40.8833 28.5923C40.8833 37.6548 33.5105 45.0278 24.4477 45.0278C19.5508 45.0278 14.8278 43.292 11.1055 40.1921C13.6648 43.1812 16.963 45.5593 20.7294 47.0693C21.9513 47.2685 23.1942 47.3715 24.4477 47.3715C34.8025 47.3715 43.227 38.9473 43.227 28.5923C43.2272 20.179 36.3825 13.3345 27.9692 13.3345Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 10,
        d: "M36.6032 10.7812C37.2435 10.7812 37.7626 10.2621 37.7626 9.62178C37.7626 8.98147 37.2435 8.4624 36.6032 8.4624C35.9629 8.4624 35.4438 8.98147 35.4438 9.62178C35.4438 10.2621 35.9629 10.7812 36.6032 10.7812Z",
        fill: "#000",
        stroke: "none",
        opacity: "0.1",
        isColor: false,

      },
      {
        number: 11,
        d: "M44.9328 13.5106C45.5731 13.5106 46.0922 12.9916 46.0922 12.3513C46.0922 11.711 45.5731 11.1919 44.9328 11.1919C44.2925 11.1919 43.7734 11.711 43.7734 12.3513C43.7734 12.9916 44.2925 13.5106 44.9328 13.5106Z",
        fill: "#000",
        stroke: "none",
        opacity: "0.1",
        isColor: false,

      },
      {
        number: 12,
        d: "M40.3749 14.6703C41.0152 14.6703 41.5343 14.1512 41.5343 13.5109C41.5343 12.8706 41.0152 12.3516 40.3749 12.3516C39.7346 12.3516 39.2156 12.8706 39.2156 13.5109C39.2156 14.1512 39.7346 14.6703 40.3749 14.6703Z",
        fill: "#000",
        stroke: "none",
        opacity: "0.1",
        isColor: false,

      },
      {
        number: 13,
        d: "M18.2078 36.7846C18.8481 36.7846 19.3672 36.2655 19.3672 35.6252C19.3672 34.9849 18.8481 34.4658 18.2078 34.4658C17.5675 34.4658 17.0485 34.9849 17.0485 35.6252C17.0485 36.2655 17.5675 36.7846 18.2078 36.7846Z",
        fill: "#000",
        stroke: "none",
        opacity: "0.1",
        isColor: false,

      },
      {
        number: 14,
        d: "M11.6391 19.2187C12.2794 19.2187 12.7985 18.6996 12.7985 18.0593C12.7985 17.419 12.2794 16.8999 11.6391 16.8999C10.9988 16.8999 10.4797 17.419 10.4797 18.0593C10.4797 18.6996 10.9988 19.2187 11.6391 19.2187Z",
        fill: "#000",
        stroke: "none",
        opacity: "0.1",
        isColor: false,

      },
      {
        number: 15,
        d: "M21.925 40.7748C22.5653 40.7748 23.0844 40.2557 23.0844 39.6154C23.0844 38.9751 22.5653 38.4561 21.925 38.4561C21.2847 38.4561 20.7656 38.9751 20.7656 39.6154C20.7656 40.2557 21.2847 40.7748 21.925 40.7748Z",
        fill: "#000",
        stroke: "none",
        opacity: "0.1",
        isColor: false,
      },
      {
        number: 16,
        d: "M25.0687 36.0531C25.709 36.0531 26.2281 35.5341 26.2281 34.8938C26.2281 34.2534 25.709 33.7344 25.0687 33.7344C24.4284 33.7344 23.9093 34.2534 23.9093 34.8938C23.9093 35.5341 24.4284 36.0531 25.0687 36.0531Z",
        fill: "#000",
        stroke: "none",
        opacity: "0.1",
        isColor: false,

      }
    ]
  },
  {
    id: 16,
    paint: "Animals",
    name: "spider",
    size: { width: 82, height: 79 },
    image: spider,
    imageColor: spiderColor,
    url: require('../app/res/images_paint/animals/spider_2x.png'),
    url_color: require('../app/res/images_paint/animals_color/spider.png'),
    backgroundImg: require('../app/res/images_paint/newPaint/garden.png'),
    data: [
      {
        number: 1,
        d: "M39.02 1H43.843V33.9669H39.02V1Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,
      },
      {
        number: 2,
        d: "M25.3165 33.9667C24.9228 33.9667 24.5249 33.8654 24.1611 33.6524L14.8649 28.2062C14.4242 27.948 13.9005 27.8937 13.4183 28.0524L6.67943 31.1096C5.52708 31.6321 4.17027 31.1225 3.64781 29.9707C3.12535 28.8184 3.63499 27.4616 4.78673 26.9391L11.6147 23.841C11.6642 23.819 11.7142 23.7983 11.7649 23.7793C13.5569 23.1153 15.5307 23.288 17.1799 24.2542L26.4762 29.7003C27.5675 30.34 27.9337 31.7432 27.2947 32.8339C26.868 33.5614 26.1026 33.9667 25.3165 33.9667Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,
      },
      {
        number: 3,
        d: "M3.29009 46.5584C2.71758 46.5584 2.14507 46.3454 1.70073 45.9169C0.790086 45.0392 0.763841 43.589 1.64153 42.679L6.3272 37.8182C7.66692 36.4406 9.52422 35.7497 11.4279 35.9126L22.1628 36.8355C23.4225 36.9441 24.3564 38.0531 24.2477 39.3135C24.1397 40.5733 23.0301 41.5065 21.7703 41.3985L11.0361 40.4756C10.5063 40.4311 9.98869 40.6233 9.6176 41.0048L4.93926 45.8577C4.48943 46.324 3.89006 46.5584 3.29009 46.5584Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,
      },
      {
        number: 4,
        d: "M7.40637 66.5389C7.16101 66.5389 6.91138 66.4992 6.66663 66.4156C5.46973 66.0067 4.83069 64.7054 5.23901 63.5085L7.62854 56.5096C8.15771 54.7005 9.448 53.2326 11.1777 52.4764L21.0496 48.1606C22.208 47.654 23.5581 48.1826 24.0653 49.341C24.5719 50.5001 24.0427 51.8502 22.8843 52.3568L13.0125 56.6732C12.5248 56.8862 12.1628 57.3025 12.0194 57.8151C12.0078 57.8554 11.995 57.8957 11.9816 57.936L9.57312 64.9886C9.24841 65.9401 8.35913 66.5389 7.40637 66.5389Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,
      },
      {
        number: 5,
        d: "M19.4333 77.4512C19.404 77.4512 19.3753 77.4506 19.3466 77.4493C18.0825 77.4023 17.0956 76.3403 17.1426 75.0763L17.4173 67.6971C17.4752 65.8008 18.3786 64.0375 19.8941 62.8729L28.4384 56.3098C29.4418 55.5389 30.8792 55.7275 31.6494 56.7309C32.4197 57.7337 32.2317 59.1711 31.2283 59.942L22.6846 66.5051C22.2622 66.8292 22.0108 67.3205 21.9943 67.8522L21.7196 75.246C21.6739 76.4813 20.6588 77.4512 19.4333 77.4512Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,
      },
      {
        number: 6,
        d: "M56.6843 33.9667C57.0773 33.9667 57.4759 33.8654 57.8397 33.6524L67.1359 28.2062C67.576 27.948 68.0997 27.8937 68.5824 28.0524L75.3213 31.1096C76.4731 31.6321 77.8299 31.1225 78.3529 29.9707C78.8754 28.8184 78.3651 27.4616 77.2134 26.9391L70.3854 23.841C70.3366 23.819 70.2865 23.7983 70.2353 23.7793C68.4433 23.1153 66.4694 23.288 64.8202 24.2542L55.524 29.7003C54.4327 30.34 54.0665 31.7432 54.7061 32.8339C55.1321 33.5614 55.8975 33.9667 56.6843 33.9667Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,
      },
      {
        number: 7,
        d: "M78.7107 46.5584C79.2826 46.5584 79.8551 46.3454 80.2994 45.9169C81.2101 45.0392 81.2369 43.589 80.3586 42.679L75.6729 37.8182C74.3332 36.4406 72.4759 35.7497 70.5722 35.9126L59.8379 36.8355C58.5776 36.9441 57.6437 38.0531 57.7524 39.3135C57.8604 40.5733 58.97 41.5065 60.2304 41.3985L70.9647 40.4756C71.4939 40.4311 72.0114 40.6233 72.3825 41.0048L77.0615 45.8577C77.5107 46.324 78.1101 46.5584 78.7107 46.5584Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,
      },
      {
        number: 8,
        d: "M74.5938 66.5389C74.8392 66.5389 75.0888 66.4992 75.3342 66.4156C76.5311 66.0067 77.1701 64.7054 76.7612 63.5085L74.3717 56.5096C73.8431 54.7005 72.5528 53.2326 70.8225 52.4764L60.9513 48.1606C59.7922 47.654 58.4421 48.1826 57.9355 49.341C57.4289 50.5001 57.9575 51.8502 59.1165 52.3568L68.9878 56.6732C69.4754 56.8862 69.838 57.3025 69.9814 57.8151C69.993 57.8554 70.0052 57.8957 70.0192 57.936L72.4271 64.988C72.7518 65.9401 73.6417 66.5389 74.5938 66.5389Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,
      },
      {
        number: 9,
        d: "M62.5675 77.4512C62.5962 77.4512 62.6248 77.4506 62.6541 77.4493C63.9176 77.4023 64.9045 76.3403 64.8575 75.0763L64.5835 67.6971C64.5249 65.8008 63.6215 64.0375 62.106 62.8729L53.5617 56.3098C52.5589 55.5389 51.1209 55.7275 50.3507 56.7309C49.5804 57.7337 49.7684 59.1711 50.7718 59.942L59.3161 66.5051C59.7379 66.8292 59.9893 67.3205 60.0058 67.8522L60.2805 75.246C60.3263 76.4813 61.3419 77.4512 62.5675 77.4512Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,
      },
      {
        number: 10,
        d: "M39.02 19.0557H43.843V33.9672H39.02V19.0557Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,
      },
      {
        number: 11,
        d: "M44.1299 23.8848H38.7332C26.9711 23.8848 17.4355 33.4203 17.4355 45.1824C17.4355 56.9451 26.9711 66.48 38.7332 66.48H44.1299C55.8926 66.48 65.4275 56.9451 65.4275 45.1824C65.4275 33.4203 55.8926 23.8848 44.1299 23.8848Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,
      },
      {
        number: 12,
        d: "M22.2646 45.1824C22.2646 33.4203 31.7996 23.8848 43.5623 23.8848H38.7332C26.9711 23.8848 17.4355 33.4203 17.4355 45.1824C17.4355 56.9451 26.9711 66.48 38.7332 66.48H43.5623C31.7996 66.48 22.2646 56.9451 22.2646 45.1824Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,
      },
      {
        number: 13,
        d: "M29.9429 50.1942C29.8284 50.1942 29.7356 50.1015 29.7356 49.9869V47.3337C29.7356 47.2192 29.8284 47.1265 29.9429 47.1265C30.0574 47.1265 30.1501 47.2192 30.1501 47.3337V49.9869C30.1501 50.1015 30.0574 50.1942 29.9429 50.1942Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,
      },
      {
        number: 14,
        d: "M52.0577 50.1942C51.9432 50.1942 51.8505 50.1015 51.8505 49.9869V47.3337C51.8505 47.2192 51.9432 47.1265 52.0577 47.1265C52.172 47.1265 52.265 47.2195 52.265 47.3337V49.9869C52.265 50.1012 52.172 50.1942 52.0577 50.1942Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,
      },
      {
        number: 15,
        d: "M43.8437 49.3972L43.8432 49.3968C43.7575 49.3218 43.6263 49.3303 43.5508 49.4166L42.7981 48.7582L43.5515 49.4158C42.9114 50.1491 41.973 50.5431 41 50.5431C40.027 50.5431 39.0886 50.1491 38.4485 49.4158L39.2018 48.7583L38.4492 49.4166C38.3737 49.3303 38.2425 49.3218 38.1568 49.3968C38.07 49.4727 38.0617 49.6037 38.1368 49.6896C38.8346 50.4878 39.874 50.9577 41 50.9577C42.126 50.9577 43.1654 50.4878 43.8632 49.6896L43.8437 49.3972ZM43.8437 49.3972C43.9298 49.4724 43.9388 49.6028 43.8634 49.6894L43.8437 49.3972Z",
        fill: "#fff",
        stroke: "#000",
        opacity: "none",
        isColor: true,
      }
    ]
  },
  {
    id: 17,
    paint: "Animals",
    name: "toucan",
    size: { width: 82, height: 74 },
    image: toucan,
    imageColor: toucanColor,
    url: require('../app/res/images_paint/animals/toucan_2x.png'),
    url_color: require('../app/res/images_paint/animals_color/toucan.png'),
    backgroundImg: require('../app/res/images_paint/newPaint/forest_night.png'),
    data: [
      {
        number: 1,
        d: "M46.2994 63.8916V67.99C46.2994 70.5622 44.2142 72.6473 41.6422 72.6473C39.07 72.6473 36.9849 70.5622 36.9849 67.99V63.8916C36.9849 61.3194 39.07 59.2344 41.6422 59.2344C44.2144 59.2344 46.2994 61.3194 46.2994 63.8916Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 2,
        d: "M54.7115 66.2822C56.9465 68.5172 60.6976 68.0843 62.3369 65.382C68.2315 55.6643 66.9812 42.8298 58.5859 34.4345L54.0715 29.9201C49.1634 25.012 41.1681 24.8251 36.1967 29.6692C31.1455 34.5911 31.1056 42.6764 36.0773 47.6481L54.7115 66.2822Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 3,
        d: "M58.3567 60.24C58.0568 60.24 57.7568 60.1256 57.5281 59.8968L53.4203 55.789C52.9626 55.3312 52.9626 54.5894 53.4203 54.1317C53.8779 53.6742 54.62 53.6742 55.0775 54.1317L59.1853 58.2395C59.6429 58.6973 59.6429 59.4392 59.1853 59.897C58.9565 60.1256 58.6565 60.24 58.3567 60.24Z",
        fill: "#fff",
        stroke: "none",
        opacity: "0.1",
        isColor: false,

      },
      {
        number: 4,
        d: "M78.5193 27.4H37.299V4.77002H60.8508C71.979 4.77002 81 13.7911 81 24.9192C81 26.2894 79.8893 27.4 78.5193 27.4Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 5,
        d: "M62.0308 4.80469C62.4611 12.0691 63.9676 20.9231 67.4412 27.3995H78.5191C79.8892 27.3995 80.9998 26.2887 80.9998 24.9187C80.9998 14.1869 72.6094 5.41594 62.0308 4.80469Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 6,
        d: "M36.9642 1.35302C27.4867 1.28271 19.7817 8.94443 19.7817 18.4057V57.8407L3.48203 61.3613C2.03375 61.6741 1 62.955 1 64.4368C1 66.1744 2.40875 67.5832 4.14641 67.5832H29.3966V67.5829C30.6894 67.5911 32.0172 67.3361 33.3145 66.7747C45.4188 61.5369 53.8881 49.4869 53.8881 35.4586V18.6196C53.8881 9.21661 46.367 1.42271 36.9642 1.35302Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 7,
        d: "M52.2214 11.1894C47.1003 7.79586 38.4042 6.88023 33.2324 13.6977C27.0286 21.8754 31.9852 48.5566 39.9614 62.956C48.4063 56.7479 53.8878 46.7441 53.8878 35.4591V18.6201C53.888 15.9696 53.2903 13.4473 52.2214 11.1894Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 8,
        d: "M32.2893 63.8916V67.99C32.2893 70.5622 30.2041 72.6473 27.6321 72.6473C25.0599 72.6473 22.9747 70.5622 22.9747 67.99V63.8916C22.9747 61.3194 25.0599 59.2344 27.6321 59.2344C30.2041 59.2344 32.2893 61.3194 32.2893 63.8916Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 9,
        d: "M12.0396 62.3435C12.0396 65.5043 14.998 67.8507 18.068 67.099C29.1075 64.3957 37.2989 54.4362 37.2989 42.5635V36.1793C37.2989 29.2382 31.7775 23.4524 24.8369 23.3624C17.7849 23.2709 12.0396 28.9601 12.0396 35.991C12.0396 35.9909 12.0396 62.3435 12.0396 62.3435Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 10,
        d: "M45.3459 19.9828C44.6987 19.9828 44.174 19.4582 44.174 18.8109C44.174 17.954 43.477 17.2568 42.6201 17.2568C41.7632 17.2568 41.066 17.954 41.066 18.8109C41.066 19.4582 40.5414 19.9828 39.8942 19.9828C39.247 19.9828 38.7223 19.4582 38.7223 18.8109C38.7223 16.6615 40.4707 14.9131 42.6201 14.9131C44.7693 14.9131 46.5178 16.6615 46.5178 18.8109C46.5178 19.4581 45.9931 19.9828 45.3459 19.9828Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 11,
        d: "M20.048 57.6387C19.4008 57.6387 18.8761 57.1142 18.8761 56.4669V49.0034C18.8761 48.3561 19.4008 47.8315 20.048 47.8315C20.6952 47.8315 21.2199 48.3561 21.2199 49.0034V56.4669C21.2199 57.114 20.6952 57.6387 20.048 57.6387Z",
        fill: "#fff",
        stroke: "none",
        opacity: "0.1",
        isColor: false,

      },
      {
        number: 12,
        d: "M29.3967 50.1756C28.7495 50.1756 28.2249 49.6511 28.2249 49.0037V43.1943C28.2249 42.547 28.7495 42.0225 29.3967 42.0225C30.0439 42.0225 30.5686 42.547 30.5686 43.1943V49.0037C30.5686 49.6511 30.0439 50.1756 29.3967 50.1756Z",
        fill: "#fff",
        stroke: "none",
        opacity: "0.1",
        isColor: false,

      }
    ]
  },
  {
    id: 18,
    paint: "Animals",
    name: "turtle",
    size: { width: 82, height: 46 },
    image: turtle,
    imageColor: turtleColor,
    url: require('../app/res/images_paint/animals/turtle_2x.png'),
    url_color: require('../app/res/images_paint/animals_color/turtle.png'),
    backgroundImg: require('../app/res/images_paint/newPaint/beach.png'),
    data: [
      {
        number: 1,
        d: "M44.2788 43.8136L48.2296 39.8628C52.6437 35.4487 53.8644 28.7629 51.2948 23.0738C50.5801 21.4918 48.5042 21.1134 47.2768 22.3402L40.2792 29.3379C37.2762 32.3408 36.4462 36.8891 38.1942 40.7594L39.1506 42.8773C40.0631 44.8963 42.7126 45.3797 44.2788 43.8136Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 2,
        d: "M5.24131 24.4914L4.41564 22.4092H61.707L60.881 24.4914L60.881 24.4915C59.3201 28.428 55.5143 31.0128 51.2795 31.0128H14.8434C10.6086 31.0128 6.80288 28.428 5.24135 24.4915C5.24134 24.4915 5.24132 24.4914 5.24131 24.4914Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 3,
        d: "M26 25H29V31H26V25Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 4,
        d: "M36.7684 43.8136L40.7192 39.8628C45.1333 35.4487 46.354 28.7629 43.7838 23.0738C43.0697 21.4918 40.9939 21.1134 39.7665 22.3402L32.7688 29.3379C29.7659 32.3408 28.9358 36.8891 30.6838 40.7594L31.6402 42.8773C32.5521 44.8963 35.2016 45.3797 36.7684 43.8136Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 5,
        d: "M13.3951 43.8136L17.3453 39.8628C21.76 35.4487 22.9801 28.7629 20.4105 23.0738C19.6958 21.4918 17.62 21.1134 16.3932 22.3402L9.39552 29.3379C6.39259 32.3408 5.5619 36.8891 7.31056 40.7594L8.26698 42.8773C9.17884 44.8963 11.8284 45.3797 13.3951 43.8136Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 6,
        d: "M33.0612 1.4375C23.016 1.4375 13.6031 6.33984 7.84448 14.571L3.05994 21.4094H63.063L58.2784 14.571C52.5198 6.33984 43.1069 1.4375 33.0612 1.4375Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 7,
        d: "M15.2601 20.199C15.464 20.3406 15.6971 20.4083 15.9278 20.4083C16.2989 20.4083 16.6633 20.2325 16.891 19.9048L24.5851 8.82385C26.6841 9.70947 29.1847 10.2643 31.8891 10.3888V17.5275C31.8891 18.1744 32.414 18.6993 33.061 18.6993C33.7086 18.6993 34.2329 18.1744 34.2329 17.5275V10.3888C36.938 10.2643 39.4386 9.70947 41.5376 8.82385L49.2311 19.9048C49.4587 20.2325 49.8237 20.4083 50.1948 20.4083C50.4255 20.4083 50.6587 20.3406 50.8619 20.199C51.3935 19.8297 51.5254 19.0997 51.1567 18.5681L43.6396 7.7417C45.0129 6.88477 46.1036 5.85266 46.8244 4.68994C46.1177 4.33655 45.3981 4.00879 44.6662 3.71094C42.8657 6.26404 38.2124 8.07373 33.061 8.07373C27.9097 8.07373 23.2563 6.26404 21.4564 3.71094C20.724 4.00879 20.0044 4.33655 19.2976 4.68994C20.0184 5.85266 21.1091 6.88477 22.483 7.7417L14.9659 18.5681C14.5967 19.0997 14.7285 19.8297 15.2601 20.199Z",
        fill: "#222222",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 8,
        d: "M61.2405 25.2916H4.88245C2.73828 25.2916 1 23.5533 1 21.4092C1 19.265 2.73828 17.5273 4.88245 17.5273H61.2405C63.3846 17.5273 65.1229 19.265 65.1229 21.4092C65.1229 23.5533 63.3846 25.2916 61.2405 25.2916Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 9,
        d: "M22.9885 17.5273H4.88245C2.73828 17.5273 1 19.265 1 21.4092C1 23.5533 2.73828 25.2916 4.88245 25.2916H24.4448C22.828 23.3257 21.8124 20.0145 22.9885 17.5273Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 10,
        d: "M70.563 29.766H58.5861C53.4274 29.766 49.2452 25.5839 49.2452 20.4252C49.2452 12.6157 55.5758 6.28516 63.3853 6.28516H67.9562C75.1602 6.28516 81 12.125 81 19.329C81 25.0931 76.3271 29.766 70.563 29.766Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 11,
        d: "M58.085 19.3763C57.4374 19.3763 56.9131 18.8514 56.9131 18.2045V16.8599C56.9131 16.2129 57.4374 15.688 58.085 15.688C58.7319 15.688 59.2568 16.2129 59.2568 16.8599V18.2045C59.2568 18.8514 58.7319 19.3763 58.085 19.3763Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 12,
        d: "M74.2831 19.3763C73.6355 19.3763 73.1112 18.8514 73.1112 18.2045V16.8599C73.1112 16.2129 73.6355 15.688 74.2831 15.688C74.9301 15.688 75.455 16.2129 75.455 16.8599V18.2045C75.455 18.8514 74.9301 19.3763 74.2831 19.3763Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 13,
        d: "M66.1835 20.4082C65.0269 20.4082 63.9264 19.9071 63.1647 19.0337C62.7399 18.5454 62.7906 17.8056 63.2788 17.3802C63.7665 16.9548 64.5069 17.0061 64.9317 17.4938C65.2478 17.8563 65.7044 18.0644 66.1835 18.0644C66.6626 18.0644 67.1192 17.8563 67.4353 17.4938C67.8601 17.0061 68.6011 16.9548 69.0888 17.3802C69.5765 17.8056 69.6277 18.5454 69.2023 19.0337C68.4412 19.9071 67.3407 20.4082 66.1835 20.4082Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      }
    ]
  },
  {
    id: 19,
    paint: "Animals",
    name: "whale",
    size: { width: 82, height: 65 },
    image: whale,
    imageColor: whaleColor,
    url: require('../app/res/images_paint/animals/whale_2x.png'),
    url_color: require('../app/res/images_paint/animals_color/whale.png'),
    backgroundImg: require('../app/res/images_paint/newPaint/sea.png'),
    data: [
      {
        number: 1,
        d: "M57.6747 18.709C37.2339 18.709 25.0177 39.629 15.6025 42.562C14.8598 39.6955 12.5503 37.412 9.54234 36.7824L4.7025 35.7696C2.79344 35.3702 1 36.8271 1 38.7776C1 42.9037 3.55875 46.5284 7.30859 47.9737C3.55875 49.419 1 53.0437 1 57.1698C1 59.1202 2.79344 60.5771 4.7025 60.1777L9.54234 59.1649C12.6289 58.519 14.9798 56.1315 15.6575 53.1599C26.9009 54.2993 47.763 63.309 57.6747 63.309C70.5569 63.309 81 53.3249 81 41.009C81 28.693 70.5569 18.709 57.6747 18.709Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 2,
        d: "M21.3317 54.1554C32.9457 56.8128 49.2578 63.3089 57.6745 63.3089C68.9671 63.3089 78.3848 55.6365 80.5373 45.447C56.4418 37.8129 43.8743 53.6648 21.3317 54.1554Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 3,
        d: "M35.455 51.8818C31.0957 53.1312 26.4737 54.0436 21.3317 54.1554C27.8062 55.6368 35.7403 58.3109 42.9529 60.3878C39.5325 58.0036 37.1023 55.0775 35.455 51.8818Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 4,
        d: "M55.3337 39.6475C57.3784 39.6475 59.036 38.3276 59.036 36.6993C59.036 35.071 57.3784 33.751 55.3337 33.751C53.2889 33.751 51.6313 35.071 51.6313 36.6993C51.6313 38.3276 53.2889 39.6475 55.3337 39.6475Z",
        fill: "#fff",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 5,
        d: "M75.4014 39.6475C77.4462 39.6475 79.1038 38.3276 79.1038 36.6993C79.1038 35.071 77.4462 33.751 75.4014 33.751C73.3567 33.751 71.6991 35.071 71.6991 36.6993C71.6991 38.3276 73.3567 39.6475 75.4014 39.6475Z",
        fill: "#fff",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 6,
        d: "M57.4915 34.9301C56.8443 34.9301 56.3196 34.4055 56.3196 33.7582V32.4507C56.3196 31.8033 56.8443 31.2788 57.4915 31.2788C58.1386 31.2788 58.6633 31.8033 58.6633 32.4507V33.7582C58.6633 34.4055 58.1388 34.9301 57.4915 34.9301Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,


      },
      {
        number: 7,
        d: "M73.244 34.9301C72.5968 34.9301 72.0721 34.4055 72.0721 33.7582V32.4507C72.0721 31.8033 72.5968 31.2788 73.244 31.2788C73.8912 31.2788 74.4159 31.8033 74.4159 32.4507V33.7582C74.4159 34.4055 73.8912 34.9301 73.244 34.9301Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 8,
        d: "M65.3678 35.9338C64.2333 35.9338 63.1545 35.4424 62.4078 34.5858C61.9826 34.0979 62.0334 33.3577 62.5214 32.9324C63.0093 32.5072 63.7495 32.5582 64.1748 33.046C64.4761 33.3918 64.9109 33.59 65.3678 33.59C65.8247 33.59 66.2595 33.3916 66.5608 33.046C66.9861 32.558 67.7262 32.5074 68.2142 32.9324C68.7022 33.3577 68.7529 34.0979 68.3278 34.5858C67.5812 35.4424 66.5023 35.9338 65.3678 35.9338Z",
        fill: "#000",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 9,
        d: "M48.0588 16.637C47.4117 16.637 46.887 16.1125 46.887 15.4651V13.1206C46.887 12.4733 47.4117 11.9487 48.0588 11.9487C48.706 11.9487 49.2307 12.4733 49.2307 13.1206V15.4651C49.2307 16.1123 48.706 16.637 48.0588 16.637Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 10,
        d: "M46.8872 7.45771C46.8737 5.01679 44.884 3.03516 42.4399 3.03516C41.7928 3.03516 41.2681 2.51063 41.2681 1.86328C41.2681 1.21594 41.7928 0.691406 42.4399 0.691406C44.7737 0.691406 46.8362 1.87453 48.0592 3.67281C49.2821 1.87453 51.3446 0.691406 53.6785 0.691406C54.3257 0.691406 54.8504 1.21594 54.8504 1.86328C54.8504 2.51063 54.3257 3.03516 53.6785 3.03516C51.2262 3.03516 49.231 5.03031 49.231 7.48266C49.231 7.49196 49.2309 7.50125 49.2307 7.5105V8.55383C49.2307 9.20117 48.706 9.7257 48.0588 9.7257C47.4117 9.7257 46.887 9.20117 46.887 8.55383V7.48242C46.887 7.47416 46.887 7.46592 46.8872 7.45771Z",
        fill: "#fff",
        stroke: "none",
        opacity: "none",
        isColor: true,

      },
      {
        number: 11,
        d: "M46.8872 7.45771L47.3873 7.46803L47.3872 7.45494L46.8872 7.45771ZM48.0592 3.67281L47.6457 3.95399L48.0592 4.56193L48.4726 3.95399L48.0592 3.67281ZM49.2307 7.5105L48.7307 7.49886V7.5105H49.2307ZM47.3872 7.45494C47.3722 4.73916 45.1592 2.53516 42.4399 2.53516V3.53516C44.6087 3.53516 46.3753 5.29443 46.3872 7.46047L47.3872 7.45494ZM42.4399 2.53516C42.0689 2.53516 41.7681 2.23444 41.7681 1.86328H40.7681C40.7681 2.78681 41.5167 3.53516 42.4399 3.53516V2.53516ZM41.7681 1.86328C41.7681 1.49212 42.0689 1.19141 42.4399 1.19141V0.191406C41.5167 0.191406 40.7681 0.939752 40.7681 1.86328H41.7681ZM42.4399 1.19141C44.6007 1.19141 46.5116 2.2863 47.6457 3.95399L48.4726 3.39164C47.1608 1.46276 44.9467 0.191406 42.4399 0.191406V1.19141ZM48.4726 3.95399C49.6068 2.2863 51.5176 1.19141 53.6785 1.19141V0.191406C51.1716 0.191406 48.9575 1.46276 47.6457 3.39164L48.4726 3.95399ZM53.6785 1.19141C54.0496 1.19141 54.3504 1.49212 54.3504 1.86328H55.3504C55.3504 0.939752 54.6018 0.191406 53.6785 0.191406V1.19141ZM54.3504 1.86328C54.3504 2.23444 54.0496 2.53516 53.6785 2.53516V3.53516C54.6018 3.53516 55.3504 2.78681 55.3504 1.86328H54.3504ZM53.6785 2.53516C50.95 2.53516 48.731 4.75417 48.731 7.48266H49.731C49.731 5.30645 51.5023 3.53516 53.6785 3.53516V2.53516ZM48.731 7.48266C48.731 7.48807 48.731 7.49347 48.7308 7.49886L49.7306 7.52214C49.7309 7.50902 49.731 7.49586 49.731 7.48266H48.731ZM48.7307 7.5105V8.55383H49.7307V7.5105H48.7307ZM48.7307 8.55383C48.7307 8.92499 48.4299 9.2257 48.0588 9.2257V10.2257C48.9821 10.2257 49.7307 9.47736 49.7307 8.55383H48.7307ZM48.0588 9.2257C47.6877 9.2257 47.387 8.92499 47.387 8.55383H46.387C46.387 9.47736 47.1356 10.2257 48.0588 10.2257V9.2257ZM47.387 8.55383V7.48242H46.387V8.55383H47.387ZM47.387 7.48242C47.387 7.47763 47.387 7.47283 47.3871 7.46803L46.3873 7.44738C46.3871 7.45902 46.387 7.4707 46.387 7.48242H47.387Z",
        fill: "#222222",
        stroke: "none",
        opacity: "none",
        isColor: false,

      },
      {
        number: 12,
        d: "M38.1534 53.0289C36.099 53.0289 34.5643 51.1398 34.9851 49.1289L36.052 44.0305C36.8629 40.155 40.2801 37.3789 44.2395 37.3789C47.1402 37.3789 49.3071 40.0463 48.7129 42.8855L48.3184 44.7709C47.3116 49.5825 43.0691 53.0291 38.1534 53.0289Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 13,
        d: "M58.3073 44.4519C58.1058 47.8262 57.0598 50.6751 55.1798 52.9367C52.1633 56.565 46.9683 58.7494 39.7316 59.4384C41.5402 59.9811 43.3245 60.5037 45.0528 60.9798C50.3456 59.7959 54.3456 57.6061 56.982 54.435C59.3061 51.6397 60.5434 48.1286 60.6759 43.9839C59.8783 44.1201 59.0897 44.2781 58.3073 44.4519Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      },
      {
        number: 14,
        d: "M55.8076 63.2169C56.4648 63.2762 57.0895 63.3086 57.6746 63.3086C59.8842 63.3086 62.0212 63.0138 64.0468 62.4648C70.8256 58.5328 74.037 52.1458 73.3278 43.78C72.5228 43.6645 71.729 43.5728 70.9479 43.5078C71.9907 53.6661 66.7993 60.4298 55.8076 63.2169Z",
        fill: "#fff",
        stroke: "#222",
        opacity: "none",
        isColor: true,

      }
    ]
  }
]

export const OBJECTS_DATA = [{
  id: 0,
  paint: "Objects",
  name: "ball",
  size: { width: 82, height: 82 },
  image: ball,
  imageColor: ballColor,
  url: require('../app/res/images_paint/objects/ball_2x.png'),
  url_color: require('../app/res/images_paint/objects_color/ball.png'),
  backgroundImg: require('../app/res/images_paint/newPaint/city.png'),
  data: [
    {
      number: 1,
      d: "M56.2002 28.6001C56.2002 43.843 43.843 56.2002 28.6001 56.2002C13.3572 56.2002 1 43.843 1 28.6001C1 13.3572 13.3572 1 28.6001 1C43.843 1 56.2002 13.3572 56.2002 28.6001Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 2,
      d: "M26.4282 28.5999C26.4282 29.7991 27.4008 30.7717 28.6001 30.7717C29.7993 30.7717 30.7719 29.7991 30.7719 28.5999V4.39941C30.7719 3.19921 29.799 2.22754 28.6001 2.22754C27.4011 2.22754 26.4282 3.19921 26.4282 4.39941V28.5999Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 3,
      d: "M27.929 30.6653L27.929 30.6653C28.1484 30.7366 28.3747 30.7722 28.6 30.7722C29.5151 30.7722 30.3664 30.1901 30.6653 29.2718L30.6655 29.2714C31.0364 28.1303 30.4121 26.9053 29.2719 26.5343L29.2715 26.5342L6.25614 19.0565C6.25595 19.0564 6.25576 19.0564 6.25557 19.0563C5.11322 18.6842 3.88882 19.3107 3.51817 20.4497L3.5178 20.4509C3.1483 21.591 3.77162 22.8162 4.91263 23.1867C4.91278 23.1867 4.91293 23.1868 4.91308 23.1868L27.929 30.6653ZM28.9625 27.4852C29.5777 27.6854 29.9146 28.3464 29.7145 28.9623C29.5533 29.4573 29.0943 29.7722 28.6 29.7722C28.4803 29.7722 28.3583 29.7533 28.238 29.7142L5.22166 22.2356C4.60642 22.036 4.26951 21.375 4.46909 20.7592L28.9625 27.4852Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 4,
      d: "M13.0989 49.9355C13.4839 50.2158 13.9325 50.3504 14.3745 50.3504C15.0422 50.3504 15.7067 50.0413 16.1326 49.4548C16.1327 49.4547 16.1328 49.4546 16.1329 49.4545L30.3574 29.8766L30.3576 29.8763C31.0625 28.9056 30.8463 27.5477 29.8772 26.8431C28.9062 26.1369 27.5478 26.3533 26.8432 27.3226L26.8431 27.3228L12.6182 46.9017L12.618 46.9019C11.9137 47.872 12.128 49.2304 13.0989 49.9355ZM13.0989 49.9355C13.0984 49.9351 13.0978 49.9347 13.0973 49.9343L13.6866 49.1264M13.0989 49.9355C13.0989 49.9355 13.099 49.9356 13.0991 49.9356L13.6866 49.1264M13.6866 49.1264C13.8941 49.2778 14.1352 49.3504 14.3745 49.3504C14.7364 49.3504 15.0941 49.1832 15.3236 48.867L29.5484 29.2888C29.9287 28.7651 29.8121 28.0321 29.289 27.6518L13.4272 47.4895C13.047 48.0131 13.1629 48.7462 13.6866 49.1264Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 5,
      d: "M52.7309 20.7591C52.5307 20.1432 51.8691 19.8063 51.2545 20.0065L50.9454 19.0554L50.9448 19.0557L27.9291 26.5341L27.929 26.5341C26.7884 26.9049 26.1638 28.1295 26.5343 29.2706L52.7309 20.7591ZM52.7309 20.7591C52.9305 21.3743 52.5936 22.0359 51.9783 22.2355M52.7309 20.7591L51.9783 22.2355M52.2869 23.1867C52.2871 23.1866 52.2872 23.1866 52.2874 23.1865L52.2869 23.1867ZM52.2869 23.1867L29.271 30.6652M52.2869 23.1867L29.271 30.6652M29.271 30.6652L29.271 30.6652C29.0516 30.7365 28.8253 30.7721 28.6001 30.7721C27.6859 30.7721 26.8331 30.1909 26.5345 29.2713L29.271 30.6652ZM51.9783 22.2355L28.962 29.7141L51.9783 22.2355Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 6,
      d: "M30.3567 27.3222L30.3573 27.3231L44.5813 46.9015C45.2874 47.8725 45.071 49.2309 44.1017 49.9355C43.7168 50.2155 43.2683 50.3507 42.8259 50.3507C42.1585 50.3507 41.4936 50.0423 41.0678 49.4551L30.3567 27.3222ZM30.3567 27.3222C29.6512 26.3533 28.2942 26.1382 27.3238 26.8429C26.3536 27.5473 26.137 28.9057 26.8429 29.8768C26.843 29.8769 26.843 29.877 26.8431 29.8771C26.8431 29.8771 26.8431 29.8771 26.8432 29.8772L41.0668 49.4537L30.3567 27.3222Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 7,
      d: "M20.7882 2.12305L26.5029 6.27527C27.7535 7.18347 29.4467 7.18347 30.6973 6.27527L36.412 2.12305C33.9346 1.39368 31.3137 1 28.6001 1C25.8865 1 23.265 1.39368 20.7882 2.12305Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 8,
      d: "M1.00488 27.8473L6.7196 23.6957C7.97021 22.7869 8.49329 21.1768 8.01599 19.7064L5.83276 12.9883C4.37341 15.119 3.18933 17.4902 2.35071 20.0708C1.51209 22.6514 1.07629 25.2661 1.00488 27.8473Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 9,
      d: "M19.3575 54.6121L17.1743 47.8945C16.697 46.4242 15.3268 45.4287 13.7808 45.4287H6.71716C8.29248 47.4752 10.1821 49.3344 12.377 50.9292C14.5724 52.524 16.9241 53.7466 19.3575 54.6121Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 10,
      d: "M56.1954 27.8473L50.4807 23.6957C49.2301 22.7869 48.707 21.1768 49.1843 19.7064L51.3676 12.9883C52.8269 15.119 54.011 17.4902 54.8496 20.0708C55.6882 22.6514 56.124 25.2661 56.1954 27.8473Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 11,
      d: "M37.8433 54.6121L40.0259 47.8945C40.5032 46.4242 41.8734 45.4287 43.4194 45.4287H50.483C48.9077 47.4752 47.0187 49.3344 44.8232 50.9292C42.6278 52.524 40.2761 53.7466 37.8433 54.6121Z",
      fill: "#fff",
      stroke: "none",
      opacity: "none",
      isColor: false,

    },
    {
      number: 12,
      d: "M26.5028 18.8823L20.0062 23.6028C18.7556 24.511 18.232 26.1217 18.7099 27.592L21.1916 35.2294C21.6688 36.6997 23.0391 37.6952 24.5851 37.6952H32.6155C34.1609 37.6952 35.5312 36.6997 36.0091 35.2294L38.4907 27.592C38.968 26.1217 38.445 24.511 37.1944 23.6028L30.6978 18.8823C29.4466 17.9741 27.7534 17.9741 26.5028 18.8823Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 13,
      d: "M27.0899 74.4219C27.1985 77.9986 30.0684 80.8684 33.6451 80.9771C41.543 81.217 55.8759 79.7045 67.7906 67.7904C79.7046 55.8758 81.2171 41.5429 80.9772 33.6449C80.8686 30.0683 77.9987 27.1984 74.422 27.0898C66.5241 26.8499 52.1912 28.363 40.2765 40.277C28.3625 52.1911 26.85 66.524 27.0899 74.4219Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 14,
      d: "M28.6308 76.6409C28.2917 76.9848 28.2469 77.5218 28.5242 77.9171C29.0428 78.6564 29.687 79.2998 30.4252 79.8183C30.825 80.0991 31.3692 80.0499 31.7121 79.702L79.3699 31.3591C79.709 31.0151 79.7537 30.4777 79.476 30.0823C78.9575 29.3441 78.314 28.6997 77.5739 28.1811C77.1741 27.9009 76.6305 27.9503 76.2879 28.298L28.6308 76.6409Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 15,
      d: "M61.2468 40.3203L40.3203 61.2468C39.1009 62.4662 39.1009 64.4434 40.3203 65.6627L42.4046 67.7471C43.624 68.9665 45.6012 68.9665 46.8206 67.7471L67.7471 46.8206C68.9665 45.6012 68.9665 43.624 67.7471 42.4046L65.6627 40.3203C64.4434 39.1009 62.4662 39.1009 61.2468 40.3203Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 16,
      d: "M46.9397 46.9394L46.9397 46.9394C46.0914 47.7877 46.0914 49.1631 46.9397 50.0114L47.6468 49.3043L46.9397 50.0114L58.056 61.1277C58.4805 61.5522 59.0387 61.7636 59.592 61.7636C60.1462 61.7636 60.7041 61.5509 61.1273 61.1277C61.9756 60.2794 61.9756 58.9041 61.1273 58.0558L50.0115 46.9399C50.0113 46.9398 50.0112 46.9396 50.011 46.9394C49.1629 46.0907 47.7876 46.0916 46.9397 46.9394Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 17,
      d: "M40.7256 53.1538L40.7251 53.1543C39.8768 54.0026 39.8768 55.378 40.7251 56.2262L51.8414 67.3426C52.2659 67.7671 52.8241 67.9785 53.3774 67.9785C53.9318 67.9785 54.4891 67.7657 54.9124 67.3435L54.9138 67.3421C55.7606 66.4942 55.7613 65.1192 54.9133 64.2713L43.7964 53.1543L43.0893 53.8614L43.7964 53.1543C42.9485 52.3064 41.5735 52.3071 40.7256 53.1538Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,
    },
    {
      number: 18,
      d: "M53.1537 43.7959L53.1542 43.7964L64.2702 54.9118C64.2705 54.9121 64.2708 54.9124 64.2711 54.9127C64.6945 55.3367 65.2525 55.5493 65.8065 55.5493C66.3605 55.5493 66.9186 55.3367 67.3421 54.9125C68.1905 54.0644 68.1896 52.6892 67.3419 51.8414C67.3419 51.8414 67.3418 51.8414 67.3418 51.8414L56.2261 40.7251L56.2261 40.7251C55.3778 39.8768 54.0025 39.8768 53.1542 40.7251L53.1537 40.7256C52.3067 41.5737 52.3067 42.9477 53.1537 43.7959Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    }
  ]
},
{
  id: 1,
  paint: "Objects",
  name: "fake_taxi",
  size: { width: 82, height: 56 },
  image: fake_taxi,
  imageColor: fake_taxiColor,
  url: require('../app/res/images_paint/objects/fake_taxi_2x.png'),
  url_color: require('../app/res/images_paint/objects_color/fake_taxi.png'),
  backgroundImg: require('../app/res/images_paint/newPaint/city.png'),
  data: [
    {
      number: 1,
      d: "M64.9757 23.7084L62.7371 13.9784C61.974 10.6617 59.0217 8.31152 55.6184 8.31152H26.3818C22.9785 8.31152 20.0262 10.6618 19.2631 13.9784L17.0245 23.7084C16.797 24.6976 15.9164 25.3986 14.9014 25.3986H9.17668C6.38339 25.3986 4.11902 27.6629 4.11902 30.4562V44.254H77.8814V30.4562C77.8814 27.6629 75.617 25.3986 72.8237 25.3986H67.099C66.0839 25.3984 65.2034 24.6975 64.9757 23.7084Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 2,
      d: "M39.8623 8.31152H26.382C22.9787 8.31152 20.0262 10.6618 19.2632 13.9784L17.0246 23.7084C16.797 24.6976 15.9165 25.3986 14.9015 25.3986H9.17668C6.38339 25.3986 4.11902 27.6629 4.11902 30.4562V44.254H44.3339C37.7956 34.9298 38.5492 17.5718 39.8623 8.31152Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 3,
      d: "M19.4054 52.4743C23.9557 51.3987 26.7725 46.838 25.6969 42.2878C24.6213 37.7375 20.0606 34.9207 15.5103 35.9963C10.96 37.0719 8.14319 41.6326 9.2188 46.1829C10.2944 50.7332 14.8551 53.55 19.4054 52.4743Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 4,
      d: "M18.3208 47.8862C20.337 47.4096 21.5851 45.3888 21.1085 43.3725C20.6319 41.3563 18.6111 40.1082 16.5948 40.5848C14.5786 41.0614 13.3305 43.0822 13.8071 45.0985C14.2837 47.1147 16.3045 48.3628 18.3208 47.8862Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 5,
      d: "M7.60187 47.7841H2.37812C1.61703 47.7841 1 47.1671 1 46.406V41.6496C1 40.8885 1.61703 40.2715 2.37812 40.2715H7.60203C8.36312 40.2715 8.98016 40.8885 8.98016 41.6496V46.406C8.98 47.1671 8.36312 47.7841 7.60187 47.7841Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 6,
      d: "M72.7926 46.2313C73.8682 41.681 71.0514 37.1203 66.5011 36.0447C61.9508 34.9691 57.3901 37.7859 56.3145 42.3362C55.2389 46.8865 58.0557 51.4471 62.606 52.5228C67.1563 53.5984 71.717 50.7816 72.7926 46.2313Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 7,
      d: "M68.2042 45.1465C68.6808 43.1303 67.4327 41.1094 65.4165 40.6328C63.4002 40.1562 61.3794 41.4043 60.9028 43.4206C60.4262 45.4368 61.6743 47.4577 63.6905 47.9343C65.7068 48.4109 67.7276 47.1627 68.2042 45.1465Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 8,
      d: "M74.3981 47.7841H79.622C80.3831 47.7841 81.0002 47.1671 81.0002 46.406V41.6496C81.0002 40.8885 80.3831 40.2715 79.622 40.2715H74.3981C73.6371 40.2715 73.02 40.8885 73.02 41.6496V46.406C73.0202 47.1671 73.6371 47.7841 74.3981 47.7841Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 9,
      d: "M42.8339 31.751H46.5014V35.4185H42.8339V31.751Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 10,
      d: "M39.1661 31.751H42.8336V35.4185H39.1661V31.751Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 11,
      d: "M35.4985 31.751H39.166V35.4185H35.4985V31.751Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 12,
      d: "M50.1689 35.4186H46.5012V31.751H49.3162C49.787 31.751 50.1687 32.1327 50.1687 32.6036V35.4186H50.1689Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 13,
      d: "M31.8312 35.4186H35.4988V31.751H32.6838C32.2129 31.751 31.8312 32.1327 31.8312 32.6036V35.4186Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 14,
      d: "M42.8339 35.4189H46.5014V39.0864H42.8339V35.4189Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 15,
      d: "M39.1661 35.4189H42.8336V39.0864H39.1661V35.4189Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 16,
      d: "M35.4985 35.4189H39.166V39.0864H35.4985V35.4189Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 17,
      d: "M49.3165 39.0864H46.5015V35.4189H50.1691V38.2339C50.169 38.7047 49.7872 39.0864 49.3165 39.0864Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,
    },
    {
      number: 18,
      d: "M32.6837 39.0864H35.4987V35.4189H31.8311V38.2339C31.8312 38.7047 32.2129 39.0864 32.6837 39.0864Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 19,
      d: "M51.5989 1.27881H49.3149C48.1628 1.27881 47.1483 2.03709 46.8222 3.14193L45.2957 8.31178H55.6182L54.0916 3.14193C53.7653 2.03709 52.7508 1.27881 51.5989 1.27881Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 20,
      d: "M75.2004 30.4561H77.8809V36.8553H75.2004C73.996 36.8553 73.0198 35.879 73.0198 34.6747V32.6367C73.0198 31.4323 73.996 30.4561 75.2004 30.4561Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,
    },
    {
      number: 21,
      d: "M6.79949 30.4561H4.11902V36.8553H6.79964C8.00402 36.8553 8.98027 35.879 8.98027 34.6747V32.6367C8.98011 31.4323 8.00386 30.4561 6.79949 30.4561Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,
    },
    {
      number: 22,
      d: "M34.4293 12.9482H25.7796C24.8285 12.9482 24.0068 13.6123 23.8071 14.5421L22.0002 22.9573C21.7305 24.2134 22.688 25.3982 23.9727 25.3982H34.4293C35.5435 25.3982 36.4468 24.495 36.4468 23.3807V14.9657C36.4468 13.8515 35.5435 12.9482 34.4293 12.9482Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 23,
      d: "M44.0176 12.9482H52.6673C53.6183 12.9482 54.4401 13.6123 54.6398 14.5421L56.4467 22.9573C56.7164 24.2134 55.7589 25.3982 54.4742 25.3982H44.0176C42.9034 25.3982 42.0001 24.495 42.0001 23.3807V14.9657C42.0001 13.8515 42.9034 12.9482 44.0176 12.9482Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 24,
      d: "M60.1287 22.7632C60.4587 24.3004 61.8174 25.3984 63.3896 25.3984H67.099C66.084 25.3984 65.2034 24.6975 64.9759 23.7082L62.7373 13.9782C62.6555 13.6229 62.5473 13.2796 62.4174 12.9482H59.7499C58.8604 12.9482 58.1974 13.7686 58.3841 14.6384L60.1287 22.7632Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 25,
      d: "M34.4291 25.3984C35.5433 25.3984 36.4466 24.4951 36.4466 23.3809V14.9657C36.4466 14.6311 36.3638 14.3161 36.2196 14.0381L24.8593 25.3984H34.4291Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 26,
      d: "M44.0175 12.9482C42.9033 12.9482 42 13.8515 42 14.9657V23.3809C42 23.4559 42.0048 23.5296 42.0128 23.6026L52.6672 12.9482H44.0175Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 27,
      d: "M44.0175 12.9482C42.9033 12.9482 42 13.8515 42 14.9657V23.3809C42 23.4559 42.0048 23.5296 42.0128 23.6026L52.6672 12.9482H44.0175Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    }
  ]
},
{
  id: 2,
  paint: "Objects",
  name: "gameboy",
  size: { width: 66, height: 82 },
  image: gameboy,
  imageColor: gameboyColor,
  url: require('../app/res/images_paint/objects/gameboy_2x.png'),
  url_color: require('../app/res/images_paint/objects_color/gameboy.png'),
  backgroundImg: require('../app/res/images_paint/newPaint/city.png'),
  data: [
    {
      number: 1,
      d: "M8.81238 22.9246H4.72424C2.823 22.9246 1.28125 21.3828 1.28125 19.481V17.4137C1.28125 15.5125 2.823 13.9707 4.72424 13.9707H8.81238V22.9246Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 2,
      d: "M8.81238 41.0001H4.72424C2.823 41.0001 1.28125 39.4584 1.28125 37.5571V31.4939C1.28125 29.592 2.823 28.0503 4.72424 28.0503H8.81238V41.0001Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 3,
      d: "M44.9611 81H14.2683C9.60828 81 5.8302 77.2219 5.8302 72.5613V9.43872C5.82959 4.77808 9.60828 1 14.2683 1H56.4131C61.0737 1 64.8518 4.77808 64.8518 9.43872V61.1093C64.8518 72.095 55.9462 81 44.9611 81Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 4,
      d: "M49.7456 41.0001H20.9364C17.9615 41.0001 15.55 38.5886 15.55 35.6144V15.853C15.55 12.8782 17.9615 10.4673 20.9364 10.4673H49.7456C52.7198 10.4673 55.1313 12.8782 55.1313 15.853V35.6144C55.1313 38.5886 52.7198 41.0001 49.7456 41.0001Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 5,
      d: "M28.2539 52.3413H24.9879V49.0747C24.9879 47.3102 23.5566 45.8789 21.7921 45.8789C20.027 45.8789 18.5963 47.3102 18.5963 49.0747V52.3413H15.3297C13.5646 52.3413 12.1339 53.772 12.1339 55.5371C12.1339 57.3016 13.5646 58.7329 15.3297 58.7329H18.5963V61.9989C18.5963 63.764 20.027 65.1947 21.7921 65.1947C23.5566 65.1947 24.9879 63.764 24.9879 61.9989V58.7329H28.2539C30.0184 58.7329 31.4497 57.3016 31.4497 55.5371C31.4497 53.772 30.019 52.3413 28.2539 52.3413Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 6,
      d: "M46.0261 55.5375C46.0261 57.8153 44.1792 59.6622 41.9008 59.6622C39.6229 59.6622 37.776 57.8153 37.776 55.5375C37.776 53.259 39.6229 51.4121 41.9008 51.4121C44.1792 51.4121 46.0261 53.259 46.0261 55.5375Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 7,
      d: "M58.448 55.5375C58.448 57.8153 56.6017 59.6622 54.3232 59.6622C52.0454 59.6622 50.1985 57.8153 50.1985 55.5375C50.1985 53.259 52.0454 51.4121 54.3232 51.4121C56.6017 51.4121 58.448 53.259 58.448 55.5375Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 8,
      d: "M32.8743 71.962L29.6565 75.1798C28.7019 76.1344 27.1541 76.1344 26.1995 75.1798C25.2449 74.2252 25.2449 72.6774 26.1995 71.7228L29.4172 68.505C30.3718 67.5504 31.9197 67.5504 32.8743 68.505C33.8289 69.4596 33.8289 71.0074 32.8743 71.962Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 9,
      d: "M44.4819 71.962L41.2648 75.1798C40.3102 76.1344 38.7623 76.1344 37.8077 75.1798C36.8531 74.2252 36.8531 72.6774 37.8077 71.7228L41.0249 68.505C41.9801 67.5504 43.5273 67.5504 44.4819 68.505C45.4365 69.4596 45.4365 71.0074 44.4819 71.962Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 10,
      d: "M45.2894 26.3969C44.6223 26.3969 44.0822 25.8567 44.0822 25.1896V23.1858C44.0822 22.5187 44.6223 21.9785 45.2894 21.9785C45.9565 21.9785 46.4967 22.5187 46.4967 23.1858V25.1896C46.4967 25.8567 45.9565 26.3969 45.2894 26.3969Z",
      fill: "#000",
      stroke: "none",
      opacity: "none",
      isColor: false,

    },
    {
      number: 11,
      d: "M25.392 26.3969C24.7249 26.3969 24.1847 25.8567 24.1847 25.1896V23.1858C24.1847 22.5187 24.7249 21.9785 25.392 21.9785C26.0591 21.9785 26.5992 22.5187 26.5992 23.1858V25.1896C26.5992 25.8567 26.0591 26.3969 25.392 26.3969Z",
      fill: "#000",
      stroke: "none",
      opacity: "none",
      isColor: false,

    },
    {
      number: 12,
      d: "M36.1651 23.9835C35.8948 24.3808 35.5005 24.4284 35.3406 24.4284C35.1806 24.4284 34.7796 24.3851 34.516 23.9835C34.1498 23.4262 33.4015 23.2712 32.8442 23.6374C32.287 24.0036 32.1319 24.7519 32.4981 25.3092C33.1286 26.2699 34.1913 26.843 35.3406 26.843C36.4899 26.843 37.5525 26.2699 38.183 25.3092C38.5492 24.7519 38.3942 24.0036 37.8369 23.6374C37.6324 23.5032 36.7291 23.1559 36.1651 23.9835Z",
      fill: "#000",
      stroke: "none",
      opacity: "none",
      isColor: false,

    }
  ]
},
{
  id: 3,
  paint: "Objects",
  name: "hamberger",
  size: { width: 83, height: 82 },
  image: hamberger,
  imageColor: hambergerColor,
  url: require('../app/res/images_paint/objects/hamberger_2x.png'),
  url_color: require('../app/res/images_paint/objects_color/hamberger.png'),
  backgroundImg: require('../app/res/images_paint/newPaint/city.png'),
  data: [
    {
      number: 1,
      d: "M70.2986 80.0427H11.7013C5.79125 80.0427 1 75.2514 1 69.3408V67.6721C1 64.2725 3.75573 61.5161 7.15538 61.5161H74.8445C78.2441 61.5161 80.9998 64.2725 80.9998 67.6721V69.3408C80.9998 75.2514 76.2086 80.0427 70.2986 80.0427Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 2,
      d: "M76.1844 31.1866H5.81589C2.35155 31.1866 0.0230586 27.6355 1.40428 24.4581C5.01939 16.142 11.7235 9.55574 20.103 6.08895C33.4843 0.553683 48.5154 0.553683 61.8973 6.08895C70.2762 9.55513 76.9809 16.142 80.596 24.4581C81.9772 27.6349 79.6488 31.1866 76.1844 31.1866Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 3,
      d: "M73.677 48.3701H8.323C5.38354 48.3701 3.00073 50.7529 3.00073 53.6918V56.1948C3.00073 59.1343 5.38354 61.5171 8.323 61.5171H73.677C76.6165 61.5171 78.9993 59.1343 78.9993 56.1948V53.6918C78.9993 50.7523 76.6165 48.3701 73.677 48.3701Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 4,
      d: "M8.323 48.3698C5.38354 48.3698 3.00073 50.7526 3.00073 53.6914V56.1945C3.00073 59.1339 5.38354 61.5167 8.323 61.5167H42.8231C39.4692 58.512 39.2965 52.4823 41.509 48.3691H8.323V48.3698Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 5,
      d: "M55.8445 57.8315C55.1975 57.8315 54.6726 57.3066 54.6726 56.6597C54.6726 56.3594 54.4285 56.1152 54.1282 56.1152C53.8279 56.1152 53.5837 56.3594 53.5837 56.6597C53.5837 57.3066 53.0588 57.8315 52.4119 57.8315C51.7643 57.8315 51.24 57.3066 51.24 56.6597C51.24 55.0673 52.5358 53.7715 54.1282 53.7715C55.7206 53.7715 57.0164 55.0673 57.0164 56.6597C57.0164 57.3073 56.4915 57.8315 55.8445 57.8315Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 6,
      d: "M34.2284 58.6895C32.636 58.6895 31.3402 57.3937 31.3402 55.8013C31.3402 54.2089 32.636 52.9131 34.2284 52.9131C34.8754 52.9131 35.4003 53.4374 35.4003 54.085C35.4003 54.7319 34.8754 55.2568 34.2284 55.2568C33.9281 55.2568 33.684 55.501 33.684 55.8013C33.684 56.1016 33.9281 56.3457 34.2284 56.3457C34.8754 56.3457 35.4003 56.8706 35.4003 57.5176C35.4003 58.1652 34.8754 58.6895 34.2284 58.6895Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 7,
      d: "M13.5633 57.2238C12.8242 57.2238 12.0844 56.9419 11.5211 56.3791C10.395 55.253 10.395 53.4207 11.5211 52.294C11.9789 51.8369 12.721 51.8369 13.1782 52.294C13.636 52.7518 13.636 53.494 13.1782 53.9518C12.9664 54.1635 12.9664 54.5096 13.1782 54.722C13.3174 54.8606 13.4791 54.8813 13.5633 54.8813C13.6476 54.8813 13.8099 54.8606 13.9485 54.722C14.4062 54.2643 15.1484 54.2643 15.6056 54.722C16.0633 55.1798 16.0633 55.9214 15.6056 56.3791C15.0428 56.9419 14.3031 57.2238 13.5633 57.2238Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 8,
      d: "M68.7913 57.078C68.4917 57.078 68.1914 56.9632 67.9631 56.7343C67.5053 56.2766 67.5053 55.535 67.9631 55.0772C68.1755 54.8648 68.1755 54.5194 67.9631 54.307C67.7507 54.0946 67.4052 54.0946 67.1928 54.307C66.7351 54.7647 65.9929 54.7647 65.5351 54.307C65.0773 53.8492 65.078 53.107 65.5351 52.6493C66.6612 51.5232 68.4941 51.5232 69.6202 52.6493C70.7463 53.776 70.7463 55.6082 69.6202 56.7343C69.3913 56.9632 69.0916 57.078 68.7913 57.078Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 9,
      d: "M72.6467 31.187H9.35327C7.65039 31.187 6.26978 32.5676 6.26978 34.2705V36.6948C6.26978 38.3977 7.65039 39.7783 9.35327 39.7783H72.6467C74.3496 39.7783 75.7302 38.3977 75.7302 36.6948V34.2705C75.7302 32.5676 74.3496 31.187 72.6467 31.187Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 10,
      d: "M39.7616 31.187H9.35327C7.65039 31.187 6.26978 32.5676 6.26978 34.2705V36.6948C6.26978 38.3977 7.65039 39.7783 9.35327 39.7783H39.7616C37.7798 38.604 37.8433 32.8618 39.7616 31.187Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 11,
      d: "M7.1554 61.5166C3.75574 61.5166 1 64.2723 1 67.672V69.3413C1 75.2513 5.79126 80.0426 11.7013 80.0426H50.8413C46.5579 77.0189 43.0203 66.6899 46.6219 61.5166H7.1554Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 12,
      d: "M73.2632 39.7783H8.73682C6.88623 39.7783 5.38599 41.2786 5.38599 43.1292V45.0188C5.38599 46.87 6.88623 48.3696 8.73682 48.3696H73.2632C75.1138 48.3696 76.614 46.87 76.614 45.0188V43.1292C76.614 41.2786 75.1138 39.7783 73.2632 39.7783Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 13,
      d: "M42.499 39.7783H8.73682C6.88623 39.7783 5.38599 41.2786 5.38599 43.1292V45.0188C5.38599 46.87 6.88623 48.3696 8.73682 48.3696H43.5702C41.7855 46.295 41.3424 42.3943 42.499 39.7783Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 14,
      d: "M36.9447 39.7783L28.7935 52.1508C27.4666 54.1643 24.5125 54.1643 23.1862 52.1508L15.0349 39.7783H36.9447Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 15,
      d: "M23.0154 12.8267C22.3684 12.8267 21.8435 12.3024 21.8435 11.6548V10.3169C21.8435 9.66931 22.3684 9.14502 23.0154 9.14502C23.663 9.14502 24.1873 9.66931 24.1873 10.3169V11.6548C24.1873 12.3024 23.663 12.8267 23.0154 12.8267Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 16,
      d: "M41 13.8741C40.353 13.8741 39.8281 13.3499 39.8281 12.7023V11.3638C39.8281 10.7168 40.353 10.1919 41 10.1919C41.647 10.1919 42.1719 10.7168 42.1719 11.3638V12.7023C42.1719 13.3499 41.647 13.8741 41 13.8741Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 17,
      d: "M12.0986 23.0586C11.4517 23.0586 10.9268 22.5343 10.9268 21.8867V20.5488C10.9268 19.9012 11.4517 19.377 12.0986 19.377C12.7456 19.377 13.2705 19.9012 13.2705 20.5488V21.8867C13.2705 22.5343 12.7456 23.0586 12.0986 23.0586Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,
    },
    {
      number: 18,
      d: "M58.9846 12.8267C58.337 12.8267 57.8127 12.3024 57.8127 11.6548V10.3169C57.8127 9.66931 58.337 9.14502 58.9846 9.14502C59.6316 9.14502 60.1565 9.66931 60.1565 10.3169V11.6548C60.1565 12.3024 59.6316 12.8267 58.9846 12.8267Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 19,
      d: "M69.9014 23.0586C69.2544 23.0586 68.7295 22.5343 68.7295 21.8867V20.5488C68.7295 19.9012 69.2544 19.377 69.9014 19.377C70.5483 19.377 71.0732 19.9012 71.0732 20.5488V21.8867C71.0732 22.5343 70.5483 23.0586 69.9014 23.0586Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 20,
      d: "M31.2677 19.1489C30.6207 19.1489 30.0958 18.6246 30.0958 17.9771C30.0958 17.0762 29.3634 16.3438 28.4631 16.3438C27.5623 16.3438 26.8298 17.0762 26.8298 17.9771C26.8298 18.6246 26.3049 19.1489 25.658 19.1489C25.011 19.1489 24.4861 18.6246 24.4861 17.9771C24.4861 15.7841 26.2701 14 28.4631 14C30.6555 14 32.4396 15.7841 32.4396 17.9771C32.4396 18.6246 31.9153 19.1489 31.2677 19.1489Z",
      fill: "#000",
      stroke: "none",
      opacity: "none",
      isColor: false,
    },
    {
      number: 21,
      d: "M56.342 19.1489C55.6951 19.1489 55.1702 18.6246 55.1702 17.9771C55.1702 17.0762 54.4377 16.3438 53.5369 16.3438C52.6366 16.3438 51.9042 17.0762 51.9042 17.9771C51.9042 18.6246 51.3793 19.1489 50.7323 19.1489C50.0847 19.1489 49.5604 18.6246 49.5604 17.9771C49.5604 15.7841 51.3445 14 53.5369 14C55.7299 14 57.5139 15.7841 57.5139 17.9771C57.5139 18.6246 56.9896 19.1489 56.342 19.1489Z",
      fill: "#000",
      stroke: "none",
      opacity: "none",
      isColor: false,
    },
    {
      number: 22,
      d: "M40.9998 23.7832C39.5209 23.7832 38.1141 23.1423 37.1412 22.0254C36.7158 21.5371 36.7664 20.7973 37.2547 20.3719C37.743 19.9465 38.4827 19.9978 38.9081 20.4855C39.4361 21.0915 40.1984 21.4394 40.9998 21.4394C41.8012 21.4394 42.5635 21.0915 43.0921 20.4855C43.5169 19.9978 44.2573 19.9471 44.7456 20.3719C45.2332 20.7973 45.2839 21.5371 44.8591 22.0254C43.8856 23.1423 42.4787 23.7832 40.9998 23.7832Z",
      fill: "#000",
      stroke: "none",
      opacity: "none",
      isColor: false,

    }
  ]
},
{
  id: 4,
  paint: "Objects",
  name: "robot",
  size: { width: 70, height: 82 },
  image: robot,
  imageColor: robotColor,
  url: require('../app/res/images_paint/objects/robot_2x.png'),
  url_color: require('../app/res/images_paint/objects_color/robot.png'),
  backgroundImg: require('../app/res/images_paint/newPaint/city.png'),
  data: [
    {
      number: 1,
      d: "M58.9008 44.1421H68.1586C68.2739 44.7268 68.3331 45.3311 68.3331 45.9481V50.4739H58.9008L57.0093 47.308L58.9008 44.1421Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 2,
      d: "M63.6169 53.5576L68.3331 56.6417V59.511C68.3331 62.116 66.2219 64.2272 63.6169 64.2272C61.0126 64.2272 58.9014 62.1154 58.9014 59.511V56.6417L63.6169 53.5576Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 3,
      d: "M23.5669 65.5093L18.7622 67.4862V75.7644H28.371V67.4862L23.5669 65.5093Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 4,
      d: "M46.3287 65.5093L51.1334 67.4862V75.7644H41.5247V67.4862L46.3287 65.5093Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 5,
      d: "M28.371 60.3805V67.4862H18.7622V60.3805L23.5669 57.9238L28.371 60.3805Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 6,
      d: "M23.5663 73.2012C20.2563 73.2012 17.5732 75.8849 17.5732 79.1948C17.5732 80.1921 18.3813 81.0002 19.3787 81.0002H27.7545C28.7518 81.0002 29.5599 80.1921 29.5599 79.1948C29.5599 75.8849 26.8762 73.2012 23.5663 73.2012Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 7,
      d: "M41.5247 60.3805V67.4862H51.1334V60.3805L46.3287 57.9238L41.5247 60.3805Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 8,
      d: "M46.3293 73.2012C49.6399 73.2012 52.323 75.8849 52.323 79.1948C52.323 80.1921 51.5143 81.0002 50.5176 81.0002H42.1417C41.1444 81.0002 40.3357 80.1921 40.3357 79.1948C40.3357 75.8849 43.0194 73.2012 46.3293 73.2012Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 9,
      d: "M58.9008 36.5137C63.4918 36.5137 67.3169 39.7955 68.1586 44.1418H58.9008L56.4752 40.3278L58.9008 36.5137Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 10,
      d: "M58.9008 50.4736H68.3331V56.6412H58.9008L56.048 53.5571L58.9008 50.4736Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 11,
      d: "M10.9949 44.1421H1.73706C1.6217 44.7268 1.5625 45.3311 1.5625 45.9481V50.4739H10.9949L12.8864 47.308L10.9949 44.1421Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 12,
      d: "M6.27869 53.5576L1.5625 56.6417V59.511C1.5625 62.116 3.67432 64.2272 6.27869 64.2272C8.88367 64.2272 10.9949 62.1154 10.9949 59.511V56.6417L6.27869 53.5576Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 13,
      d: "M10.9949 36.5137C6.40381 36.5137 2.57874 39.7955 1.73706 44.1418H10.9949L13.421 40.3278L10.9949 36.5137Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 14,
      d: "M10.9949 50.4736H1.5625V56.6412H10.9949L13.8483 53.5571L10.9949 50.4736Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 15,
      d: "M11.1615 12.0918C9.81323 12.0918 8.72009 13.1843 8.72009 14.5332V22.8975C8.72009 24.2457 9.81323 25.3389 11.1615 25.3389H16.1987V12.0918H11.1615Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 16,
      d: "M58.7347 12.0918C60.083 12.0918 61.1761 13.1843 61.1761 14.5332V22.8975C61.1761 24.2457 60.083 25.3389 58.7347 25.3389H53.6975V12.0918H58.7347Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 17,
      d: "M51.4771 1H18.4186C16.3074 1 14.5959 2.71143 14.5959 4.82263V36.1294H55.3003V4.82263C55.2997 2.71143 53.5883 1 51.4771 1Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,
    },
    {
      number: 18,
      d: "M23.2477 1H18.4186C16.3074 1 14.5959 2.71143 14.5959 4.82263V36.1294H19.425V4.82263C19.425 2.71143 21.1365 1 23.2477 1Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 19,
      d: "M30.5664 18.8755H29.0314C27.453 18.8755 26.1743 20.1554 26.1743 21.7344C26.1743 22.5242 26.4929 23.2371 27.0105 23.7546C27.5281 24.271 28.2428 24.5914 29.0314 24.5914H30.5664L33.0518 21.7332L30.5664 18.8755Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 20,
      d: "M39.3292 18.8755H34.9481L33.0518 21.7332L34.9481 24.5914H39.3292L41.5253 21.7332L39.3292 18.8755Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,
    },
    {
      number: 21,
      d: "M43.7219 21.7344C43.7219 23.3127 42.4426 24.5914 40.8643 24.5914H39.3292V18.8755H40.8643C41.6528 18.8755 42.3676 19.1959 42.8851 19.7135C43.4027 20.2292 43.7219 20.944 43.7219 21.7344Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,
    },
    {
      number: 22,
      d: "M30.5664 18.8755H34.9481V24.5914H30.5664V18.8755Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 23,
      d: "M41.5247 60.3805V64.4052H51.1334V60.3805L46.3287 57.9238L41.5247 60.3805Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 24,
      d: "M18.7622 60.3805V64.4052H28.371V60.3805L23.5669 57.9238L18.7622 60.3805Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 25,
      d: "M55.3107 32.9243H14.5856C12.6025 32.9243 10.9955 34.5314 10.9955 36.5144V56.7909C10.9955 58.7733 12.6025 60.381 14.5856 60.381H55.3107C57.2931 60.381 58.9008 58.7733 58.9008 56.7909V36.5144C58.9008 34.5314 57.2931 32.9243 55.3107 32.9243Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 26,
      d: "M15.824 56.7909V36.5144C15.824 34.5314 17.4316 32.9243 19.4141 32.9243H14.5856C12.6025 32.9243 10.9955 34.5314 10.9955 36.5144V56.7909C10.9955 58.7733 12.6025 60.3804 14.5856 60.3804H19.4141C17.4316 60.381 15.824 58.7733 15.824 56.7909Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 27,
      d: "M40.6927 46.6522C40.6927 48.7622 38.9819 50.473 36.8719 50.473C34.762 50.473 33.0518 48.7622 33.0518 46.6522C33.0518 44.5422 34.762 42.832 36.8719 42.832C38.9819 42.832 40.6927 44.5422 40.6927 46.6522Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 28,
      d: "M53.0896 46.6522C53.0896 48.7622 51.3788 50.473 49.2688 50.473C47.1594 50.473 45.4486 48.7622 45.4486 46.6522C45.4486 44.5422 47.1594 42.832 49.2688 42.832C51.3788 42.832 53.0896 44.5422 53.0896 46.6522Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 29,
      d: "M26.3208 42.832H18.5272C17.5769 42.832 16.8066 43.6023 16.8066 44.5526V48.7524C16.8066 49.7028 17.5769 50.473 18.5272 50.473H26.3208C27.2711 50.473 28.0414 49.7028 28.0414 48.7524V44.5526C28.0414 43.6023 27.2711 42.832 26.3208 42.832Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 30,
      d: "M23.9709 18.1974C23.3038 18.1974 22.7637 17.6566 22.7637 16.9901V14.3625C22.7637 13.6954 23.3038 13.1553 23.9709 13.1553C24.6375 13.1553 25.1782 13.6954 25.1782 14.3625V16.9901C25.1782 17.6566 24.6375 18.1974 23.9709 18.1974Z",
      fill: "#000",
      stroke: "none",
      opacity: "none",
      isColor: false,

    },
    {
      number: 31,
      d: "M45.9253 18.1974C45.2582 18.1974 44.718 17.6566 44.718 16.9901V14.3625C44.718 13.6954 45.2582 13.1553 45.9253 13.1553C46.5918 13.1553 47.1326 13.6954 47.1326 14.3625V16.9901C47.1326 17.6566 46.5918 18.1974 45.9253 18.1974Z",
      fill: "#000",
      stroke: "none",
      opacity: "none",
      isColor: false,

    }
  ]
},
{
  id: 5,
  paint: "Objects",
  name: "rocket",
  size: { width: 62, height: 82 },
  image: rocket,
  imageColor: rocketColor,
  url: require('../app/res/images_paint/objects/rocket_2x.png'),
  url_color: require('../app/res/images_paint/objects_color/rocket.png'),
  backgroundImg: require('../app/res/images_paint/newPaint/city.png'),
  data: [
    {
      number: 1,
      d: "M31.086 81.0002C35.522 81.0002 41.1665 75.7634 42.6851 67.0183C44.0059 59.4103 44.3025 54.605 31.086 54.605C17.8694 54.605 18.1667 59.4103 19.4875 67.0183C21.0054 75.7634 26.6499 81.0002 31.086 81.0002Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 2,
      d: "M20.7833 49.9126C9.65351 49.9126 -0.196348 58.9348 2.12299 71.4263C2.55207 73.7371 5.65387 74.1564 6.70063 72.0519C8.89179 67.647 12.9958 63.4343 21.6671 63.4343L20.7833 49.9126Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 3,
      d: "M41.3887 49.9126C52.5184 49.9126 62.3683 58.9348 60.0495 71.4263C59.6205 73.7371 56.5187 74.1564 55.4713 72.0519C53.2801 67.647 49.1761 63.4343 40.5049 63.4343L41.3887 49.9126Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 4,
      d: "M48.7283 61.9649C51.7929 39.2427 48.3572 17.9469 37.4746 4.14505C34.2178 0.014801 27.9544 0.014801 24.6981 4.14505C13.8156 17.9469 10.3799 39.2427 13.4439 61.9649C13.6569 63.5451 14.9997 64.7292 16.5945 64.7292H45.5783C47.1731 64.7292 48.5153 63.5451 48.7283 61.9649Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 5,
      d: "M39.4326 29.0887C39.4326 33.6981 35.696 37.4353 31.0861 37.4353C26.4767 37.4353 22.7395 33.6981 22.7395 29.0887C22.7395 24.4788 26.4767 20.7422 31.0861 20.7422C35.696 20.7422 39.4326 24.4788 39.4326 29.0887Z",
      fill: "#fff",
      stroke: "none",
      opacity: "none",
      isColor: true,

    },
    {
      number: 6,
      d: "M31.0861 39.5154C25.3365 39.5154 20.6594 34.8383 20.6594 29.0887C20.6594 23.3392 25.3365 18.6621 31.0861 18.6621C36.8356 18.6621 41.5127 23.3392 41.5127 29.0887C41.5127 34.8383 36.8356 39.5154 31.0861 39.5154ZM31.0861 22.8223C27.6309 22.8223 24.8202 25.6335 24.8202 29.0887C24.8202 32.5439 27.6309 35.3552 31.0861 35.3552C34.5413 35.3552 37.3525 32.5439 37.3525 29.0887C37.3525 25.6335 34.5413 22.8223 31.0861 22.8223Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 7,
      d: "M43.4037 13.8992C41.7362 10.3091 39.7385 7.00159 37.3936 4.04321C34.177 -0.0144043 27.9954 -0.0144043 24.7788 4.04321C22.4338 7.00159 20.4362 10.3091 18.7687 13.8992C21.6752 14.606 25.0931 15.1388 31.0862 15.1388C37.0792 15.1388 40.4978 14.606 43.4037 13.8992Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 8,
      d: "M12.7439 55.4839C12.9172 57.6274 13.1504 59.7899 13.444 61.9652C13.657 63.546 14.9998 64.7295 16.5946 64.7295H45.5784C47.1732 64.7295 48.5154 63.546 48.7284 61.9652C49.022 59.7899 49.2551 57.6274 49.4285 55.4839H12.7439Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 9,
      d: "M31.5841 51.4199H30.588C29.3215 51.4199 28.2943 52.4471 28.2943 53.7136V71.1239C28.2943 72.391 29.3215 73.4176 30.588 73.4176H31.5841C32.8506 73.4176 33.8778 72.391 33.8778 71.1239V53.7136C33.8778 52.4471 32.8506 51.4199 31.5841 51.4199Z",
      fill: "#fff",
      stroke: "#000",
      opacity: "none",
      isColor: true,

    },
    {
      number: 10,
      d: "M23.0449 45.6926C22.3979 45.6926 21.873 45.1677 21.873 44.5208V43.1719C21.873 42.5243 22.3979 42 23.0449 42C23.6925 42 24.2168 42.5243 24.2168 43.1719V44.5208C24.2168 45.1677 23.6925 45.6926 23.0449 45.6926Z",
      fill: "#000",
      stroke: "none",
      opacity: "none",
      isColor: false,

    },
    {
      number: 11,
      d: "M39.2949 45.6926C38.6479 45.6926 38.123 45.1677 38.123 44.5208V43.1719C38.123 42.5243 38.6479 42 39.2949 42C39.9419 42 40.4668 42.5243 40.4668 43.1719V44.5208C40.4668 45.1677 39.9425 45.6926 39.2949 45.6926Z",
      fill: "#000",
      stroke: "none",
      opacity: "none",
      isColor: false,

    },
    {
      number: 12,
      d: "M31.1697 46.7282C30.0101 46.7282 28.9071 46.2259 28.1442 45.3501C27.7188 44.8624 27.7701 44.122 28.2577 43.6966C28.746 43.2712 29.4858 43.3225 29.9112 43.8102C30.2292 44.1751 30.6875 44.3845 31.1697 44.3845C31.6519 44.3845 32.1103 44.1751 32.4283 43.8102C32.8537 43.3225 33.594 43.2718 34.0817 43.6966C34.57 44.122 34.6207 44.8624 34.1952 45.3501C33.4323 46.2259 32.3294 46.7282 31.1697 46.7282Z",
      fill: "#000",
      stroke: "none",
      opacity: "none",
      isColor: false,

    }
  ]
}]