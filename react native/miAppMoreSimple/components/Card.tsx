import { Image, StyleSheet, Text, View } from 'react-native';

type Props = {
  id: number;
  name: string;
};

function getImageUrl(id: number) {
  return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png';
}

function PokemonCard({ id, name }: Props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: getImageUrl(id) }} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    color: '#lelele',
  },
  image: {
   width:75,
    height:75,
  },
});

export default PokemonCard;