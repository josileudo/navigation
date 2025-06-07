import {Home} from "@/app/Home";
import {Product} from "@/app/Product";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

export type StackRoutesList = {
    home: undefined;
    product: undefined;
}

const Stack = createNativeStackNavigator<StackRoutesList>()

export const StackRoutes = () => {
    return (
        <Stack.Navigator
            initialRouteName={'home'}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={'home'} component={Home} />
            <Stack.Screen name={'product'} component={Product} />
        </Stack.Navigator>
    )
}
