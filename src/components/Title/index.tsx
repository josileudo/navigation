import {TextProps, Text} from "react-native";

export const Title = ({children, ...rest}: TextProps) => {
    return  (
        <Text style={{fontSize: 24, fontWeight: 700}} {...rest}>{children}</Text>
    )
}
