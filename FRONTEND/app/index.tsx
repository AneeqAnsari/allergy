
import { View, Text, Button } from "react-native";
import { Link } from "expo-router";
import CustomButton from "@/components/CustomButton";
import './globals.css'
import Splash from "./splash";
import colors from '../constants/colors'

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Splash />
      <Text style={{color:colors.secondary}}>Checking colors</Text>
      <Link href="/sign-in" asChild>
        <CustomButton title="Go to Sign" />
      </Link>
    </View>
  );
}
      