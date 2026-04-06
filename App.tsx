import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';


//Tela do Sobre 
import Sobre from './telas/Sobre'

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
                ? 'paw'
                : 'paw-outline'; 
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
  return <NavigationContainer>
            <Menu />
          </NavigationContainer>;
}


