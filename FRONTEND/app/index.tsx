
import { View, Text, Button } from "react-native";
import { Link } from "expo-router";
import CustomButton from "@/components/CustomButton";
import './globals.css'
import Splash from "./splash";

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Splash />
      <Link href="/sign-in" asChild>
        <CustomButton title="Go to Sign" />
      </Link>
    </View>
  );
}
      