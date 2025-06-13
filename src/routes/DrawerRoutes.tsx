import { Home } from "@/app/Home";
import { Product } from "@/app/Product";
import {
  DrawerScreenProps,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";

export type DrawerRoutesList = {
  home: undefined;
  product: undefined | { id: string };
};

export type DrawerRoutesProps<T extends keyof DrawerRoutesList> =
  DrawerScreenProps<DrawerRoutesList, T>;

const Drawer = createDrawerNavigator<DrawerRoutesList>();

export const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      initialRouteName={"home"}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#2c4681",
        drawerInactiveTintColor: "#4444",
      }}
    >
      <Drawer.Screen
        name={"home"}
        component={Home}
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={"product"}
        component={Product}
        options={{
          title: "Produto",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="add-circle" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
