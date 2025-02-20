import { Text, View } from "react-native";
import Style from "./Style";

export default function Sum({number1, number2}){
    console.log({number1,number2});
    const sum = number1+number2
    return(
        <View style={Style.body}>
            <Text style={Style.text2}>{number1}</Text>
            <Text style={Style.text2}>+ {number2}</Text>
            <Text style={Style.text2}>________</Text>
            <Text style={Style.text2}> {sum}</Text>
        </View>
    )
}