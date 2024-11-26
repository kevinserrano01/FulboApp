import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainNavigator from "./src/navigation/MainNavigator";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react'

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(async () => {
      await SplashScreen.hideAsync();
      setIsReady(true);
    }, 3000); // esperar 3 segundos antes de mostrar la pantalla principal

    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return null; // renderizar una pantalla de carga
  }


  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainNavigator />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </Provider>
    

  );
}

const styles = StyleSheet.create({});
