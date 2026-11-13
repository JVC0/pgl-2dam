import Caja from "@/components/Caja";
import { useState } from "react";

import { Button, StyleSheet, Text, View } from "react-native";

export default function CajaScreen() {
    const [valorFlex, setValorFlex] = useState(0);
    
    return (
        <View style={styles.caja}>
            <Text>Contenedor Principal</Text>
            <Caja nombre={""} bg="brown" />
            <Caja nombre={""} bg="blue" />
            <Caja nombre={""} bg="green" />
            <Button title="Incrementar" onPress={() => setValorFlex((n) => n + 1)}/>
            <Button title="Incrementar" onPress={() => setValorFlex((n) => n - 1)}/>
        </View>
    );
}
const styles = StyleSheet.create({
    caja: {
        height: 100,
        width: 100,
        justifyContent: "center",
        alignItems: "center", 
        gap:3,
    },
    
});
