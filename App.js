import React from "react";
import {Text, StyleSheet, View} from "react-native";
import FirstComponent,{SecondComponent} from "./Components/ManyComponents"
import Style from "./Components/Style";
import Sum from "./Components/Sum";

export default function App(){
  return(
    <View style={Style.container}>
      <Text style={Style.defaultText}>Aula04Mobile</Text>
      {/* <FirstComponent/>
      <SecondComponent/> */}
      <Sum number1={6} number2={9}/>
    </View>
  )
}
