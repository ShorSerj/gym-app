import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
      <Tabs
          screenOptions={{
              // цвет заливки иконки когда активна
              tabBarActiveTintColor: '#ffd33d',
              // цвет заливки хедера
              headerStyle: {
                  backgroundColor: '#25292e',
              },
              headerShadowVisible: false,
              // цвет заголовка в хедере
              headerTintColor: '#fff',
              // цвет футера
              tabBarStyle: {
                  backgroundColor: '#25292e',
              },
          }}
      >

      {/*    туториал по иконкам https://docs.expo.dev/guides/icons/#expovector-icons */}
      <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color, focused }) => (
                  <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
              ),
            }}
        />
        <Tabs.Screen
            name="about"
            options={{
              title: 'About',
              tabBarIcon: ({ color, focused }) => (
                  <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
              ),
            }}
        />
      </Tabs>
  );
}
