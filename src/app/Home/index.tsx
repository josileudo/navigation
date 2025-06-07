import {ButtonIcon} from "@/components/ButtonIcon";
import {Header} from "@/components/Header";
import {Title} from "@/components/Title";
import {useNavigation} from "@react-navigation/native";
import {Text, View} from "react-native";

export const Home = () => {
    const navigator = useNavigation();

    return (
        <View style={{flex: 1, padding: 32, paddingTop: 54}}>
           <Header >
               <Title>Home</Title>
               <ButtonIcon name={"add-circle"} onPress={() => navigator.navigate("product")}/>
           </Header>
        </View>
    )
}
