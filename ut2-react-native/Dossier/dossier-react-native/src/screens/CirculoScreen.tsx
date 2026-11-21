import { Color } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, TouchableOpacity, View, Text } from "react-native";

type Direccion = "row" | "column";
type Envoltura = "nowrap" | "wrap";

export default function Circulo() {
    const [colores, setColores] = useState<string[]>([]);
    const [flexWrap, setFlexWrap] = useState<Envoltura>("nowrap");
    const [flexDirec, setFlexDirec] = useState<Direccion>("row");
    function randomcolor() {
        const r = Math.min(255, Math.random() * 256);
        const g = Math.min(255, Math.random() * 256);
        const b = Math.min(255,(Math.random() * 256));
      setColores([...colores, `rgb(${r}, ${g}, ${b})`]);
    }
    function changeFlexDirec() {
        setFlexDirec(flexDirec === "row" ? "column" : "row");
    }

    function changeFlexWrap() {
        setFlexWrap(flexWrap === "nowrap" ? "wrap" : "nowrap");
    }
    return (
        <View>
            <TouchableOpacity style={styles.boton1} onPress={randomcolor}>
                <Text>AGREGAR CIRCULO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boton2} onPress={changeFlexWrap}>
                <Text >{flexWrap}Pulse para Cambiar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boton3} onPress={changeFlexDirec}>
                <Text>{flexDirec}Pulse para Cambiar</Text>
            </TouchableOpacity>
            <View
                style={{
                    flex: 1,
                    flexDirection: flexDirec,
                    flexWrap: flexWrap,
                    gap: 8,
                }}
            >
                {colores.map((color, index) => (
                    <View
                        key={index}
                        style={{
                            width: 100,
                            height: 60,
                            borderRadius: 30,
                            backgroundColor: color,
                        }}
                    />
                ))}
            </View>
        </View>
    );
}






const styles = StyleSheet.create({
    boton1: {
        width: 300,
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 8,
    },
    boton2: {
        width: 300,
        backgroundColor: "red",
        padding: 10,
        borderRadius: 8,
        marginTop: 10,
    },
    boton3: {
        width: 300,
        backgroundColor: "yellow",
        padding: 10,
        borderRadius: 8,
        marginTop: 10,
        marginBottom:10,
    },
});
