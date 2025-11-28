import { Button, StyleSheet, Text, View } from 'react-native';


export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sobre mi</Text>
      <Button title="Click me" onPress={() => alert('Button pressed')} color="#000" />
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
