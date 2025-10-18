import { View, Text, Button, Alert } from "react-native";
import { Link, router } from "expo-router";

import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import FullLogo from "@/components/fullLogo";

import { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors, fonts } from "@/constants/colors";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', email: "", password: "", confirmpassword: "" });

  // const submit = async () => {
  //     const { email, password } = form;

  //     if(!email || !password) return Alert.alert('Error', 'Please enter valid email address & password.');

  //     setIsSubmitting(true)

  //     try {
  //         await signIn({ email, password });

  //         router.replace('/');
  //     } catch(error: any) {
  //         Alert.alert('Error', error.message);
  //         Sentry.captureEvent(error);
  //     } finally {
  //         setIsSubmitting(false);
  //     }
  // }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={[styles.main_view]}>
        <FullLogo />
        <Text
          style={[
            styles.text,
            { fontFamily: fonts.poppinsMedium, marginBottom: 30 },
          ]}
        >
          Create Your Account
        </Text>


            <CustomInput
                placeholder="Enter your full name"
                value={form.name}
                onChangeText={(text) => setForm((prev) => ({ ...prev, name: text }))}
                label="Full name"
            />

        

        <CustomInput
          placeholder="Enter your email"
          value={form.email}
          onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
          label="Email"
          keyboardType="email-address"
        />
        <CustomInput
          placeholder="Enter your password"
          value={form.password}
          onChangeText={(text) =>
            setForm((prev) => ({ ...prev, password: text }))
          }
          label="Password"
          secureTextEntry={true}
        />

        

            <CustomInput
                placeholder="Confirm your password"
                value={form.confirmpassword}
                onChangeText={(text) => setForm((prev) => ({ ...prev, name: text }))}
                label="Confirm Password"
            />

        <CustomButton
          title="Register"
          isLoading={isSubmitting}
          // onPress={submit}
        />

        <View style={[styles.second_view]}>
          <Text style={[styles.link, { color: colors.text }]}>
            Already have an account?
          </Text>
          <Link
            href="/sign-in"
            style={[styles.link, { color: colors.primary }]}
          >
            Sign In
          </Link>
        </View>
     
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background_gradient,
  },
  main_view: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 25,
    padding: 20,
    backgroundColor: colors.background_gradient,
  },

  link: {
    alignSelf: "center",
    color: colors.text,
    fontFamily: fonts.poppinsMedium,
  },

  second_view: {
    alignSelf: "center",

    flexDirection: "row",
    gap: 5,
    marginTop: 20,
  },
  text: {
    fontSize: 24,
    color: colors.text,
    alignSelf: "center",
    fontFamily: fonts.poppinsLight,
  },
});

export default SignUp;

