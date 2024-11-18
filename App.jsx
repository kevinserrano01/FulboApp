import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <Header />
      <Text>Pagina de Bienvenida</Text>
      <StatusBar style="auto" />
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({});
