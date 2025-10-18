import {Stack} from "expo-router";

export default function AuthLayout() {
    // const { isAuthenticated } = useAuthStore();

    // if(isAuthenticated) return <Redirect href="/" />

    return (     
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="sign-up" />
    </Stack>
       

    )
}
