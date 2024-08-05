import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import  getTypeColor  from './TypeColor';

type Props = {
  id: number;
  name: string;
  types: string[];
};

function getImageUrl(id: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}


    

function PokemonCard({ id, name, types }: Props) {
  const primaryTypeColor = getTypeColor(types[0]);
  return (
   
         <View style={[styles.card, { backgroundColor: primaryTypeColor }]}>


      <Image style={styles.image} source={{ uri: getImageUrl(id) }} />
      <View style={styles.infoContainer}>
      <Text style={styles.number}>#{id.toString().padStart(3, '0')}</Text>
        <Text style={styles.name}>
          {name.charAt(0).toUpperCase() + name.slice(1)} 
        </Text>
      
        <View style={styles.typeContainer}>
          {types.map((type) => (
            <Text  style={[styles.type, { backgroundColor: getTypeColor(type) }]}>
              {type.toUpperCase()}
            </Text>
          ))}
        </View>
    
      </View>
  +
    </View>
  
    
  );
}



const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 3,
    margin: 10,
    padding: 10,

  
  },





  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  number: {
    fontSize: 16,
    color: '#555',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  typeContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  type: {
    padding: 5,
    borderRadius: 5,
    color: 'white',
    fontSize: 12,
    marginRight: 5,
    textAlign: 'center',

    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,

    
  },
});

export default PokemonCard;
