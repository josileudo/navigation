import {ButtonIcon} from "@/components/ButtonIcon";
import {Header} from "@/components/Header";
import {Title} from "@/components/Title";
import {useNavigation} from "@react-navigation/native";
import {View} from "react-native";

export const Product = () => {
    const navigator = useNavigation();

    return (
        <View style={{flex: 1, padding: 32, paddingTop: 54}}>
            <Header >
                <ButtonIcon name={"arrow-circle-left"} onPress={() => navigator.goBack()}/>
                <Title>Product</Title>
            </Header>
        </View>
    )
}
