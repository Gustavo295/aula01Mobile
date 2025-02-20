import { Text, View } from "react-native";
import Style from "./Style";

export default function Sum({number1, number2}){
    console.log({number1,number2});
    const sum = number1+number2
    return(
        <View>
            <Text style={Style.text2}>Primeiro número: {number1}</Text>
            <Text style={Style.text2}>Segundo número: {number2}</Text>
            <Text style={Style.text2}>Resultado: {sum}</Text>
        </View>
    )
}