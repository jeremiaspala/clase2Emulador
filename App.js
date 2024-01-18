import { View, Text, StatusBar, StyleSheet, Image } from "react-native";
let nombre = "Jeremías";
const App = () =>{
return (
  <View style = {style.container}>
    <StatusBar></StatusBar>
    <Text style= {style.texto}>Hola {nombre}!</Text>
  </View>
);
}

export default App;

const style = StyleSheet.create({
  container:{
    backgroundColor: "green",
    flex:1
  },
  texto:{
    color: "white"
  }
})