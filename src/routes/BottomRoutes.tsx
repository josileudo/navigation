import { Home } from "@/app/Home";
import { Product } from "@/app/Product";
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

export type BottomRoutesList = {
  home: undefined;
  product: undefined | { id: string };
};

export type BottomRoutesProps<T extends keyof BottomRoutesList> =
  BottomTabScreenProps<BottomRoutesList, T>;

const Tab = createBottomTabNavigator<BottomRoutesList>();

export const BottomRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName={"home"}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2c4681",
        tabBarInactiveTintColor: "#4444",
        tabBarLabelPosition: "beside-icon",
        animation: "shift",
      }}
    >
      <Tab.Screen
        name={"home"}
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"product"}
        component={Product}
        options={{
          title: "Produto",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
