// import React from 'react'
// import { View, Text } from 'react-native';
// const Splash = () => {
//   return (
//     <View>
//       <Text>Splash</Text>
//     </View>
    
//   )
// }

// export default Splash



import React, { useEffect, useRef } from "react";
import { View, Text, Image, Animated, StyleSheet, Easing } from "react-native";
import { useRouter } from "expo-router"; // If you're using expo-router
import {colors} from "@/constants/colors";
import FullLogo from "@/components/fullLogo";


const SplashScreen = () => {
  const lineAnim = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  useEffect(() => {
    // Animate the curvy line (width expansion)
    Animated.sequence([
      Animated.timing(lineAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: false,
      }),
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start(() => {
 
      setTimeout(() => {
        router.replace("/sign-in"); 
      }, 5000);
    });
  }, []);

  const lineWidth = lineAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "60%"],
  });

  return (
    <View style={styles.container}>
      <FullLogo />
      <Animated.Text style={[styles.tagline, { opacity: textOpacity }]}>
        Welcome to a healthier you!
      </Animated.Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center",
    minWidth: '100%',
    minHeight: '100%',
  },
  logo: {
    width: 180,
    height: 180,
  },

  tagline: {
    marginTop: 20,
    fontSize: 18,
    color: colors.primary,
    fontWeight: "600",
    fontFamily: "Poppins-SemiBold",
  },
});
