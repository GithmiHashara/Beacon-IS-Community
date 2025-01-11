import { SessionProvider } from '@/context';
import { Slot } from 'expo-router';
//import { Slot } from 'expo-router';
import {StyleSheet, View, Text } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import "../global.css";

export default function RootLayout() {
  
  return (
   <SessionProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
                <Slot/>
      </GestureHandlerRootView>
   </SessionProvider>
  );
}
