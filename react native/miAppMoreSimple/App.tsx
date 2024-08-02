import { StyleSheet, View, ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import PokemonCard from './components/PokemonCard';
import { usePokemon } from './hooks/usePokemon';
import { useState } from 'react';

export default function App() {
  const [offset, setOffset] = useState(0);
  const { loading, pokemons } = usePokemon(offset);
  const LIMIT=25;

  if (loading && pokemons.length === 0) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => (
          <PokemonCard name={item.name} id={offset + index + 1} />
        )}
        onEndReached={() => setOffset((old) => old + LIMIT)}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    color: '#1e1e1e'
  },
  text: {
    fontSize: 20,
    color: '#1e1e1e',
  },
});
