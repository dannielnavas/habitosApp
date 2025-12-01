import { StyleSheet, Text, View } from "react-native";
export default function HabitGreeting({ name }: { name: string }) {
    const fecha = new Date();
    const hora = fecha.getHours();
    const saludo = hora < 12 ? 'Buenos dias' : hora < 18 ? 'Buenas tardes' : 'Buenas noches';
  return (
      <View style={styles.container}>
        <Text style={styles.title}>{saludo} {name}!</Text>
        <Text style={styles.subtitle}>Hoy es {fecha.toLocaleDateString()} - {hora} horas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        gap: 4,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',

    },
    subtitle: {
        fontSize: 12,
        color: '#475569',
    },
});
