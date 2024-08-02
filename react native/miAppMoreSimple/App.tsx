import { StyleSheet, View, ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import PokemonCard from './components/Card';
import { usePokemon } from './hooks/pokemonHook';
import { useState } from 'react';

export default function App() {
  const [offset, setOffset] = useState(0);
  const { loading, pokemons } = usePokemon(offset);

  if (loading) {
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
          <PokemonCard name={item.name} id={index + 1} />
        )}
        onEndReached={() => setOffset((old) => old + 25)}
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
  
});
