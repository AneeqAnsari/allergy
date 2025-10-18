import { View, Text, Button, Alert } from "react-native";
import { Link, router } from "expo-router";

import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import FullLogo from "@/components/fullLogo";

import { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors, fonts } from "@/constants/colors";

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

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
          Sign In To Your Account
        </Text>

        <CustomInput
          placeholder="Enter your email or username"
          value={form.email}
          onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
          label="Email or Username"
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

        <CustomButton
          title="Sign In"
          isLoading={isSubmitting}
          // onPress={submit}
        />

        <Link href="/" style={[styles.link]}>
          Forgot Password?
        </Link>

        <View style={[styles.second_view]}>
          <Text style={[styles.link, { color: colors.text }]}>
            Don&apos;t have an account?
          </Text>
          <Link
            href="/sign-up"
            style={[styles.link, { color: colors.primary }]}
          >
            Register
          </Link>
        </View>
        <Text style={styles.link}>Or</Text>
        <CustomButton
          title="Sign In with Google"
          style={{
            backgroundColor: "white",
            color: colors.primary,
            borderWidth: 1,
            borderColor: colors.primary,
          }}
          textStyle={{
            color: colors.primary,
            fontFamily: fonts.poppinsMedium,
          }}
        />
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

export default SignIn;
