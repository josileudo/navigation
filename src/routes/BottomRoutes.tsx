import { Home } from "@/app/Home";
import { Product } from "@/app/Product";
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

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
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name={"home"} component={Home} />
      <Tab.Screen name={"product"} component={Product} />
    </Tab.Navigator>
  );
};
