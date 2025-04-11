import { Stack } from "expo-router"
import "../global.css"

export default function RootLayout() {
  return (
    <Stack>
      {/* Ocultar header en login */}
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />

      {/* Ocultar header en register */}
      <Stack.Screen
        name="register"
        options={{ headerShown: false }}
      />

    </Stack>
  );
}