
import { View, Text } from "react-native";
import './globals.css'
import Splash from "./splash";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Splash />
    </View>
    </SafeAreaView>
  );
}
      