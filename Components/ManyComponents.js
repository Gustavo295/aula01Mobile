import { Text } from "react-native";
import Style from "./Style";

const FirstComponent = ()=>{
    return(
        <Text style={Style.text2}>Primeiro Componente</Text>
    )
}

const SecondComponent = ()=>{
    return(
        <Text style={Style.text2}>Segundo Componente</Text>
    )
}
export default FirstComponent;
export {SecondComponent}
