import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    title: string
}

export function Button({ title, activeOpacity=0.8 }: Props) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={activeOpacity}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}