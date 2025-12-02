import { StyleSheet, Text, View } from "react-native";
import { ThemedText } from "./themed-text";

type Props = {
    title: string;
    streak: number;
    isCompleted?: boolean;
    priority?: 'low' | 'medium' | 'high';
}

const priorityColors = {
    low: {
        backgroundColor: '#ecfccb',
        color: '#3f6212',
    },
    medium: {
        backgroundColor: '#fef9c3',
        color: '#92400e',
    },
    high: {
        backgroundColor: '#ffe4e6',
        color: '#9f1239',
    },
};
export default function HabitCard({ title, streak, isCompleted = false, priority = 'low' }: Props) {
    const priorityColor = priorityColors[priority];
    return (
        <View style={[styles.card, isCompleted && styles.cardDone]}>
            <View style={styles.row}>
                <ThemedText style={styles.title}>{title}</ThemedText>


                <ThemedText style={[styles.badge, { color: priorityColor?.color, backgroundColor: priorityColor?.backgroundColor }]}>{priority.toUpperCase()}</ThemedText>
            </View>
            <View style={styles.row}>
                {isCompleted && <ThemedText style={styles.badge}>✔️ Hoy</ThemedText>}
                <Text style={styles.streakDone}>🔥 {streak} días seguidos</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        gap: 6,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        width: '100%',
        maxWidth: 290,
        alignSelf: 'center',
    },
    cardDone: {
        borderColor: '#22c55e',
        borderWidth: 1,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#0f172a',
    },
    badge: {
        fontSize: 12,
        color: '#16a34a',
    },
    streakDone: {
        fontSize: 12,
        color: '#475569',
    },
});
