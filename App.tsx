import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import Produtos from './produto/Index';
import ListaProdutos from './src/mocks/listaProdutos';

// Fonte
import { useFonts, Montserrat_500Medium, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat";

// Tela Sobre
import Sobre from './telas/Sobre';
import { View } from "react-native";

// Configuração do Menu
const Tab = createBottomTabNavigator();


// ✅ FUNÇÃO QUE LIGA A LISTA COM A TELA
function MenuProdutos() {
  return (
    <Produtos
      titulo={ListaProdutos.titulo}
      lista={ListaProdutos.lista}
    />
  );
}


// ✅ MENU
function Menu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName: any;

          if (route.name === "Sobre") {
            iconName = focused ? 'storefront' : 'storefront-outline';
          }
          else if (route.name === "Produtos") {
            iconName = focused ? 'cut' : 'cut-outline';
          }
          else if (route.name === "Conta") {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={24} color={color} />;
        },
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0f0f0f',
          borderTopColor: '#1e1e1e',
          borderTopWidth: 1,
          },
        tabBarActiveTintColor: '#c9960c',
        tabBarInactiveTintColor: 'gray',

      })}
    >
      {/* TELAS */}
      <Tab.Screen name="Sobre" component={Sobre} />
      <Tab.Screen name="Produtos" component={MenuProdutos} />
      <Tab.Screen name="Conta" component={Sobre} />

    </Tab.Navigator>
  );
}


// ✅ APP PRINCIPAL
export default function App() {

  const [fonteCarregada] = useFonts({
    "Montserrat": Montserrat_500Medium,
    "MontBold": Montserrat_600SemiBold,
  });

  if (!fonteCarregada) {
    return <View />;
  }

  return (
    <NavigationContainer>
      <Menu />
    </NavigationContainer>
  );
}
