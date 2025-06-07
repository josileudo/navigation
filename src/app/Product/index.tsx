import {ButtonIcon} from "@/components/ButtonIcon";
import {Header} from "@/components/Header";
import {Title} from "@/components/Title";
import {StackRoutesList} from "@/routes/StackRoutes";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {View} from "react-native";

type Props = NativeStackScreenProps<StackRoutesList, 'product'>

export const Product = ({navigation}: Props) => {

    return (
        <View style={{flex: 1, padding: 32, paddingTop: 54}}>
            <Header >
                <ButtonIcon name={"arrow-circle-left"} onPress={() => navigation.goBack()}/>
                <Title>Product</Title>
            </Header>
        </View>
    )
}
