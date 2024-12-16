import { Text, TouchableOpacity } from "react-native";
import Util from "./util";

export default class Word {
  constructor(wordConfig) {
    this.index = wordConfig.index;
    this._placeFirstWord = wordConfig._placeFirstWord;
    this._placeOtherWord = wordConfig._placeOtherWord;
    this.text = wordConfig.text;
    this.value = wordConfig.value;
    this.fontFactor = wordConfig.fontFactor;
    this.fontOffset = wordConfig.fontOffset;
    this.minValue = wordConfig.minValue;

    this.fontFamily = wordConfig.fontFamily;
    this.font = null;
    this.color = wordConfig.color;

    this._onWordPress = wordConfig.onWordPress;

    if (this.color === null || this.color === "") {
      this.color = Util.getRandomColor();
    }
    this.view = null;
    this.width = null;
    this.height = null;
    this._init();
  }

  _init() {
    this._setFont();
    this._setViewSize();
  }

  _setFont() {
    this.font = Math.floor(
      (this.value - this.minValue) * this.fontFactor + this.fontOffset
    );
  }

  _setViewSize() {
    const buttonStyle = {
      position: "absolute",
      left: 0,
      top: 0,
    };
    const textStyle = {
      fontSize: this.font,
      lineHeight: this.font,
      transform: [{ rotate: "0deg" }],
      color: this.color,
    };
    if (this.fontFamily && this.fontFamily !== "") {
      textStyle.fontFamily = this.fontFamily;
    }

    this.view = (
      <TouchableOpacity
        key={this.index}
        style={buttonStyle}
        onPress={() => this._onPress()}
        onLayout={(event) => this._onLayout(event)}
      >
        <Text style={textStyle}>{this.text}</Text>
      </TouchableOpacity>
    );
  }

  _onPress() {
    if (this._onWordPress) {
      this._onWordPress({ text: this.text, value: this.value });
    }
  }

  _onLayout(event) {
    const { width, height } = event.nativeEvent.layout;
    this.width = width;
    this.height = height;
    if (this.index === 0) {
      this._placeFirstWord(this);
    } else {
      this._placeOtherWord(this);
    }
  }
}
