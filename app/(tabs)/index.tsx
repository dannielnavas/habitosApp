import HabitCard from '@/components/HabitCard';
import HabitGreeting from '@/components/HabitGreeting';
import ProfileHeader from '@/components/ProfileHeader';
import Screen from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useCallback, useMemo, useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

type Habit = {
  id: string;
  title: string;
  streak: number;
  isCompleted: boolean;
  priority: 'low' | 'medium' | 'high';
}
const INITIAL_HABITS: Habit[] = [
  { id: '1', title: 'Leer', streak: 10, isCompleted: true, priority: 'low' },
  { id: '2', title: 'Ejercitarse', streak: 5, isCompleted: false, priority: 'medium' },
  { id: '3', title: 'Dormir temprano', streak: 7, isCompleted: true, priority: 'high' },
  { id: '4', title: 'Comer saludable', streak: 3, isCompleted: false, priority: 'low' },
  { id: '5', title: 'Beber agua', streak: 2, isCompleted: true, priority: 'medium' },
  { id: '6', title: 'Meditar', streak: 1, isCompleted: false, priority: 'low' },
];

export default function HomeScreen() {
  const [items, setItems] = useState<Habit[]>(INITIAL_HABITS);
  const [nuevo, setNuevo] = useState<string>('');

  const border = useThemeColor({}, 'border');
  const surface = useThemeColor({}, 'surface');
  const primary = useThemeColor({}, 'primary');
  const onPrimary = useThemeColor({}, 'onPrimary');
  const text = useThemeColor({}, 'text');
  const muted = useThemeColor({}, 'muted');

  const handleToggle = useCallback((id: string) => {
    setItems(prev => prev.map(h => {
      if (h.id !== id) return h;
      const completed = !h.isCompleted;
      return {
        ...h,
        isCompleted: completed,
        streak: completed ? h.streak + 1 : Math.max(0, h.streak - 1),
      }
    }).sort((a, b) => b.streak - a.streak))
  }, [])

  const addHabilt = useCallback(() => {
    const title = nuevo.trim();
    if (!title) return;
    setItems(prev => [...prev, { id: Math.random().toString(), title, streak: 0, isCompleted: false, priority: 'low' }])
    setNuevo('');
  }, [nuevo])

  const total = items.length;
  const completed = useMemo(() => items.filter(h => h.isCompleted).length, [items]) // guarda en la memoria el resultado de la funcion


  return (
    // <View style={styles.container}>
    //   <Text style={styles.text}>Mi primera app con React Native</Text>
    //   <Text style={styles.text}>Nombre: {name}</Text>
    //   <Text style={styles.text}>Edad: {age}</Text>
    //   <Text style={styles.text}>Es desarrollador: {isDeveloper ? 'Si' : 'No'}</Text>
    //   <Text style={styles.text}>Hobbies: {hobbies.join(', ')}</Text>
    //   <Text style={styles.text}>{saludo}</Text>
    //   <Link href="/(tabs)/about">About me</Link>
    // </View>
    <Screen>
      {/* <View style={styles.container}> */}
      <ProfileHeader name='Daniel Navas' role='Desarrollador' />
      <HabitGreeting name='DanielDev' />
      <View style={[styles.row, { alignItems: 'center' }]}>
        <TextInput
          style={[styles.input, { borderColor: border, backgroundColor: surface, color: text }]}
          placeholder='Agregar nueva habilidad'
          value={nuevo}
          onChangeText={setNuevo}
          onSubmitEditing={addHabilt}
        />
        <Pressable
          style={[styles.addBtn, { backgroundColor: primary }]}
          onPress={addHabilt}
        >
          <ThemedText>Agregar</ThemedText>
        </Pressable>
      </View>
      {items.map((habit) => (
        <HabitCard key={habit.id} title={habit.title} streak={habit.streak} isCompleted={habit.isCompleted} priority={habit.priority} onToggle={() => handleToggle(habit.id)} />
      ))}
      {/* </View> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    gap: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  row: { flexDirection: "row", gap: 8 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  addBtn: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
