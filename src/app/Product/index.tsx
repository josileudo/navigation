import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { StackRoutesProps } from "@/routes/StackRoutes";
import { Text, View } from "react-native";

export const Product = ({ navigation, route }: StackRoutesProps<"product">) => {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <ButtonIcon
          name={"arrow-circle-left"}
          onPress={() => navigation.goBack()}
        />
        <Title>Product</Title>
      </Header>

      <Text>{route.params.id}</Text>
    </View>
  );
};
