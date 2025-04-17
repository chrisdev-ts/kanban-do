import { Stack } from "expo-router";
import "../global.css";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Stack>
      {/* Pantallas sin header */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />

      {/* Pantallas con header personalizado */}
      <Stack.Screen
        name="projects"
        options={{
          title: "Mis proyectos",
          headerStyle: {
            backgroundColor: "#426CAA",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "semibold",
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => console.log("Opciones presionadas")}
              className="mr-4"
            >
              <Feather name="settings" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="boards"
        options={{
          title: "Mis tareas",
          headerStyle: {
            backgroundColor: "#426CAA",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "semibold",
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => console.log("Opciones presionadas")}
              className="mr-4"
            >
              <Feather name="settings" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
