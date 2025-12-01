import { StyleSheet, Text, View } from "react-native";

type Props = {
    title: string;
    streak: number;
    isCompleted?: boolean;
}
export default function HabitCard({ title, streak, isCompleted = false }: Props) {

    return (
        <View style={[styles.card, isCompleted && styles.cardDone]}>
            <View style={styles.row}>
                <Text style={styles.title}>{title}</Text>
                {isCompleted && <Text style={styles.badge}>✔️ Hoy</Text>}
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
