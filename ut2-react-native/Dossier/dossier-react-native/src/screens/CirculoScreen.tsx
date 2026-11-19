import { useState } from "react";
import { Alert, Button, StyleProp, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View, ViewStyle } from "react-native";

export default function Circulo() {
    let [colores, setColores] = useState<string[]>([]);
    const [index, setIndex] = useState(0);
    function randomcolor() {
      
        const r = Math.min(255, Math.random() * 256);
        const g = Math.min(255, Math.random() * 256);
        const b = Math.min(255,(Math.random() * 256));
      setColores([...colores, `rgb(${r}, ${g}, ${b})`]);
      setIndex(index + 1);
    }
    return (
      <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
        <Button onPress={randomcolor} title={"Añdir circulo"}></Button>
        {colores.map((color) => (
          <View
            key={index}
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: color ,
            }}
          />
        ))}
      </View>
    );
}






const styles = StyleSheet.create({
    boton: {
        height: 90,
        width: 90,

    }
});
