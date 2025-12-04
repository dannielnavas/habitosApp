import { FlatList, View } from 'react-native';

import QuickAddShips from '@/components/QuickAddShips';
import Screen from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { useState } from 'react';

export default function TabTwoScreen() {
  const [picked, setPicked] = useState<string[]>([]);
  const onPick = (title: string) => setPicked((prev) => prev.includes(title) ? prev : [...prev, title]);

  return (
    <Screen>
      <View>
        <ThemedText style={{ fontWeight: '700', fontSize: 18 }}>Sugeridos para hoy</ThemedText>

        <QuickAddShips onPick={onPick} />
        <ThemedText>Selecciona las habilidades que quieres agregar</ThemedText>

        <FlatList data={picked} keyExtractor={item => item} renderItem={({ item }) => <ThemedText>{item}</ThemedText>} ListEmptyComponent={<ThemedText>No hay habilidades seleccionadas</ThemedText>} />
      </View>
    </Screen>
  );
}
