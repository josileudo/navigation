import {TouchableOpacity, TouchableOpacityProps} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
    name: keyof typeof MaterialIcons.glyphMap;
}

export const ButtonIcon = ({name, ...rest}: Props) => {
    return (
        <TouchableOpacity {...rest}>
            <MaterialIcons name={name} size={32} />
        </TouchableOpacity>
    )
}
