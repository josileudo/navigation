import {View} from "react-native";

export const Header = ({ children }: {children: React.ReactNode}) => {
    return  (
        <View style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: 'space-between',
            marginBottom: 54,
        }}>
            {children}
        </View>
    )
}
