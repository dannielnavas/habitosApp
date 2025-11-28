import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  const name = 'Daniel';
  const age = 35;
  const isDeveloper = true;
  const hobbies = ['Programar', 'Jugar', 'Ver peliculas'];
  const date = new Date();
  const hours = date.getHours();
  const saludo = hours < 12 ? 'Buenos dias' : hours < 18 ? 'Buenas tardes' : 'Buenas noches';



  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mi primera app con React Native</Text>
      <Text style={styles.text}>Nombre: {name}</Text>
      <Text style={styles.text}>Edad: {age}</Text>
      <Text style={styles.text}>Es desarrollador: {isDeveloper ? 'Si' : 'No'}</Text>
      <Text style={styles.text}>Hobbies: {hobbies.join(', ')}</Text>
      <Text style={styles.text}>{saludo}</Text>
      <Link href="/(tabs)/about">About me</Link>
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
