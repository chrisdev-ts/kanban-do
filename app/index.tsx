import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Login() {
  return (
    <View className="flex-1 bg-white">
      <View className="bg-gray-400 pb-10">
        <View className="items-center mt-16">
          <View className="w-32 h-32 bg-gray-200 rounded-full" />
          <Text className="text-white text-2xl font-bold mt-6">
            Bienvenido
          </Text>
          <Text className="text-white text-2xl font-bold">de nuevo</Text>
        </View>
      </View>

      {/* Formulario */}
      <View className="flex-1 px-4 mt-10">
        <Text className="text-gray-500 mb-2">Correo electrónico</Text>
        <TextInput
          placeholder="Introduce tu correo electrónico"
          placeholderTextColor="#9CA3AF"
          className="border border-gray-300 rounded-xl px-4 py-3 mb-6"
        />

        <Text className="text-gray-500 mb-2">Contraseña</Text>
        <TextInput
          placeholder="Introduce tu contraseña"
          placeholderTextColor="#9CA3AF"
          secureTextEntry
          className="border border-gray-300 rounded-xl px-4 py-3 mb-8"
        />

        <TouchableOpacity className="bg-gray-400 py-4 rounded-xl mb-6">
          <Text className="text-white text-center font-semibold">
            Iniciar sesión
          </Text>
        </TouchableOpacity>

        <Text className="text-center text-gray-500">
          ¿No tienes cuenta?{" "}
          <Link href="/register" className="font-bold">
            Regístrate
          </Link>
        </Text>
      </View>
    </View>
  );
}
