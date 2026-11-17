import Caja from "@/components/Caja";

import { StyleSheet, Text, View } from "react-native";

export default function CajaScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Contenedor Principal</Text>
            <View style={styles.filaCajas}>
                <Caja nombre={""} bg="brown" />
                <Caja nombre={""} bg="blue" />
                <Caja nombre="Caja B" style={{ borderRadius: 20, borderWidth: 7 }} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    titulo: {
        marginBottom: 15,
        fontSize: 18,
        fontWeight: "bold",
    },
    filaCajas: {
        flexDirection: "row", 
        width: "100%",       
        gap: 6,
    },
});
