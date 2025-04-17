import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";
import Svg, { Path } from "react-native-svg";
import { MaterialIcons, Feather } from "@expo/vector-icons";

const WaveHeader = () => (
  <Svg
    height="60"
    width="100%"
    viewBox="0 0 1440 60"
    style={{ position: "absolute", bottom: -1 }}
    preserveAspectRatio="none"
  >
    <Path
      fill="#FFFF"
      d="M0,0L48,10C96,20,192,40,288,48C384,56,480,52,576,45.3C672,38,768,28,864,32C960,36,1056,52,1152,56C1248,60,1344,52,1392,48L1440,44L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
    />
  </Svg>
);

export default function Login() {
  return (
    <View className="flex-1 bg-white">
      {/* Encabezado */}
      <View className="bg-primary relative" style={{ paddingBottom: 40 }}>
        <View className="items-center pt-16 pb-12 px-4F">
          <Image
            className="mb-6"
            source={require("./../assets/images/logo-ligth.png")}
            style={{ width: 120, height: 120 }}
            resizeMode="contain"
          />
          <Text className="text-white text-3xl font-bold">
            Bienvenido de nuevo
          </Text>
        </View>
        <WaveHeader />
      </View>

      {/* Formulario */}
      <View className="flex-1 px-4 pt-8">
        {/* Campo Email */}
        <View className="mb-4">
          <Text className="text-secondary text-base font-medium mb-2">
            Correo electrónico
          </Text>
          <View className="flex-row items-center border border-gray-200 rounded-xl px-4 py-3">
            <MaterialIcons
              name="email"
              size={20}
              color="#52677D"
              className="mr-2"
            />
            <TextInput
              placeholder="Introduce tu correo electrónico"
              placeholderTextColor="#52677D"
              className="flex-1 text-secondary ml-2"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        {/* Campo Contraseña */}
        <View className="mb-4">
          <Text className="text-secondary text-base font-medium mb-2">
            Contraseña
          </Text>
          <View className="flex-row items-center border border-gray-200 rounded-xl px-4 py-3 ">
            <Feather name="lock" size={20} color="#52677D" className="mr-2" />
            <TextInput
              placeholder="Introduce tu contraseña"
              placeholderTextColor="#52677D"
              secureTextEntry
              className="flex-1 text-secondary ml-2"
            />
          </View>
          <TouchableOpacity className="self-end mt-4">
            <Text className="text-primary text-sm font-medium">
              ¿Olvidaste tu contraseña?
            </Text>
          </TouchableOpacity>
        </View>

        {/* Botón de Login */}
        <TouchableOpacity
          className="bg-primary py-3 rounded-xl mb-4"
          activeOpacity={0.8}
        >
          <Link
            href="/projects"
            className="text-white text-center font-semibold text-lg"
          >
            Iniciar sesión
          </Link>
        </TouchableOpacity>

        {/* Separador */}
        <View className="flex-row items-center justify-center mb-4">
          <View className="flex-1 h-px bg-gray-200" />
          <Text className="text-gray-400 mx-4">o</Text>
          <View className="flex-1 h-px bg-gray-200" />
        </View>

        {/* Enlace a registro */}
        <Text className="text-center text-secondary text-base">
          ¿No tienes cuenta?{" "}
          <Link href="/register" className="font-semibold text-primary">
            Regístrate
          </Link>
        </Text>
      </View>
    </View>
  );
}
