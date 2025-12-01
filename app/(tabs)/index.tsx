import HabitCard from '@/components/HabitCard';
import HabitGreeting from '@/components/HabitGreeting';
import { StyleSheet, View } from 'react-native';


export default function HomeScreen() {
  const name = 'Daniel';
  const age = 35;
  const isDeveloper = true;
  const hobbies = ['Programar', 'Jugar', 'Ver peliculas'];
  const date = new Date();
  const hours = date.getHours();
  const saludo = hours < 12 ? 'Buenos dias' : hours < 18 ? 'Buenas tardes' : 'Buenas noches';

  const habits = [
    { title: 'Leer', streak: 10, isCompleted: true },
    { title: 'Ejercitarse', streak: 5, isCompleted: false },
    { title: 'Dormir temprano', streak: 7, isCompleted: true },
    { title: 'Comer saludable', streak: 3, isCompleted: false },
    { title: 'Beber agua', streak: 2, isCompleted: true },
    { title: 'Meditar', streak: 1, isCompleted: false },
  ];

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
    <View style={styles.container}>
      <HabitGreeting name={name} />
      {habits.map((habit) => (
        <HabitCard key={habit.title} title={habit.title} streak={habit.streak} isCompleted={habit.isCompleted} />
      ))}
    </View>
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
});
