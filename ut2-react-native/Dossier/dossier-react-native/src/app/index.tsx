
import Circulo from "@/screens/CirculoScreen";
import InicioScreen from "../screens/InicioScreen";
import PrincipalScreen from "../screens/PrincipalScreen";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
    return (
        <SafeAreaView style={{ flex: 1,paddingHorizontal: 16 ,paddingVertical:30}}>
            <Circulo />
        </SafeAreaView>
    );
}
