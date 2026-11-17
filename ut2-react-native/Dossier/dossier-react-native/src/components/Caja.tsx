import { useState } from "react";
import { Alert, StyleProp, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View, ViewStyle } from "react-native";

type Props = { nombre: string; bg?: string; style?: StyleProp<ViewStyle>; };
export default function Caja({ nombre, bg = "green",style }: Props) {
    const [valorFlex, setValorFlex] = useState(0);
    return (
        <View style={[styles.caja, { backgroundColor: bg, flex: valorFlex, },style ]}>
            <Text>{nombre}</Text>
            <View style={styles.boton}>
                <TouchableHighlight style={styles.boton} onPress={() => { setValorFlex((n) => n + 1); Alert.alert('Pulsado'); }} underlayColor="#ddd">
                    <Text>Botón destacado</Text>
                </TouchableHighlight>
                <TouchableOpacity style={styles.boton} onPress={() => { setValorFlex((n) => n - 1), Alert.alert('Pulsado'); }}>
                    <Text>Botón con opacidad</Text>
                </TouchableOpacity>
            </View>
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
    boton: {
        height: 90,
        width: 90,

    }
});
