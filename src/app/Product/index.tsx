import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { StackRoutesProps } from "@/routes/StackRoutes";
import { useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";

type RouteParams = StackRoutesProps<"product">;
export const Product = ({ navigation, route }: StackRoutesProps<"product">) => {
  const { params } = useRoute<RouteParams["route"]>();

  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <ButtonIcon
          name={"arrow-circle-left"}
          onPress={() => navigation.goBack()}
        />
        <Title>Product</Title>
      </Header>

      <Text>{params.id}</Text>
      {/* <Text>{route.params.id}</Text> */}
    </View>
  );
};
