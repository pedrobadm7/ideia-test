import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';
import { useTheme } from 'styled-components';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { DetailsScreen } from '../screens/DetailsScreen';
import { FileReader } from '../screens/FileReader';

const { Navigator: TabNavigator, Screen: TabScreen } = createBottomTabNavigator();
const { Navigator: DetailsNavigator, Screen: DetailsStackScreen } = createNativeStackNavigator();
const { Navigator: StackNavigator, Screen: StackScreen } = createNativeStackNavigator();

function DetailScreenFlow() {
  return (
    <DetailsNavigator
      screenOptions={{
        headerShown: false
      }}
    >
      <DetailsStackScreen
        name='Detalhes'
        component={DetailsScreen as any}
      />
      <DetailsStackScreen 
        name='Files'
        component={FileReader}
      />
    </DetailsNavigator>
  )
}

function MainTabNavigatorFlow() {
  const theme = useTheme();

  return (
    <TabNavigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 88,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0
        }
      }}
    >
      <TabScreen
        name='Listagem'
        component={Dashboard}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name='format-list-bulleted'
              size={size}
              color={color}
            />
          )
        }}
      />
      <TabScreen
        name='Cadastro'
        component={Register}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name='attach-file'
              size={size}
              color={color}
            />
          )
        }}
      />
      <TabScreen
        name='Resumo'
        component={Register}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name='subject'
              size={size}
              color={color}
            />
          )
        }}
      />
    </TabNavigator>
  )
}

export function AppRoutes() {

  return (
    <NavigationContainer>
      <StackNavigator
        screenOptions={{
          headerShown: false
        }}
      >
        <StackScreen
          name='ListagemFlow'
          component={MainTabNavigatorFlow}
        />
        <StackScreen
          name='MainFlow'
          component={DetailScreenFlow}
        />
      </StackNavigator>
    </NavigationContainer>

  )
}