import { StyleSheet, View, ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import PokemonCard from './components/PokemonCard';
import { usePokemon } from './hooks/usePokemon';
import { useState } from 'react';
import React from 'react';

export default function App() {
  const [offset, setOffset] = useState(0);
  const { loading, pokemons } = usePokemon(offset);
  const LIMIT = 25;

  if (loading && pokemons.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.logo}><img src="./assets/logo.png" alt="no hay logo" style={{width:'30%'}}/></View>
      <FlatList
      
        data={pokemons}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PokemonCard name={item.name} id={item.id} types={item.types} />
          
        )}
        onEndReached={() => setOffset((old) => old + LIMIT)}
        onEndReachedThreshold={0.5}
        contentContainerStyle={styles.listContent}
      />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo:
  {
backgroundColor: 'red',
alignItems: 'center',


  },
  container: {

    flex: 1,
    backgroundColor: '#eee',
    padding: 10,
   
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    paddingBottom: 20,
  },
});
