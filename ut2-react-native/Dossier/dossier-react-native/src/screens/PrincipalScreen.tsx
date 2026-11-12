import Caja from "@/components/Caja";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function CajaScreen() {
    const [contador, setContador] = useState(0);
    return (
        <View style={styles.caja}>
            <Text>Contenedor Principal</Text>
            <Caja nombre={""} bg="brown" />
            <Caja nombre={""} bg="blue" />
            <Caja nombre={""} bg="green" />
        </View>
    );
}
const styles = StyleSheet.create({
    caja: {
        height: 100,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
    },
});
