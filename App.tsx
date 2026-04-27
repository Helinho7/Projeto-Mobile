import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';

//Fonte
import { useFonts, Montserrat_500Medium, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat";

//Tela do Sobre 
import Sobre from './telas/Sobre'
import { View } from "react-native";

//Configuração do Menu
const Tab = createBottomTabNavigator();

//Cria a estrutura do Menu
function Menu(){
  return <Tab.Navigator
          screenOptions={({route})=>({
            tabBarIcon: ({focused, color}) => {
              let iconName; 
               if(route.name=== "Sobre") {
                iconName = focused 
                ? 'paw'
                : 'paw-outline';               
              } else if(route.name=== "Sobre2") {
                iconName = focused 
                ? 'paw'
                : 'paw-outline'; 
              } if(route.name=== "Sobre3") {
                iconName = focused 
                ? 'cut'
                : 'cut-outline'; 
              }

                return <Ionicons name={iconName} size={24} color={color}/>
            },

            headerShown: false,
            tabBarActiveTintColor: 'purple',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Sobre" component={Sobre}/>
          <Tab.Screen name="Sobre2" component={Sobre}/>
          <Tab.Screen name="Sobre3" component={Sobre}/>
        </Tab.Navigator>
}

export default function App() {


  //CARREGA A FONTE 
  const [fonteCarregada] = useFonts({"Montserrat": Montserrat_500Medium,
                                      "MontBold": Montserrat_600SemiBold});

  //verifica se a fonte está carregada
  if(!fonteCarregada){
    return<View></View>
  }
  
  return <NavigationContainer>
            <Menu />
          </NavigationContainer>;
}


