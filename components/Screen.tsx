import { StyleSheet, View } from "react-native";

type Props = {
    children: React.ReactNode;
}

export default function Screen({ children }: Props) {
    return <View style={styles.screen}>{children}</View>;
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#f8fafc',
        paddingHorizontal: 16,
        paddingVertical: 20,
        gap: 16,
    },
});
