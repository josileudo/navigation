import { NavigationContainer } from "@react-navigation/native";
import { DrawerRoutes } from "./DrawerRoutes";

export const Routes = () => {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
};
