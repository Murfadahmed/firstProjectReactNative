import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  const [fakeData, setFakeData] = useState([])
  useEffect(() => {
    const dumyItems = async () => {
      try {
        const api = await fetch('https://fakestoreapi.com/products');
        const data = await api.json();
        // console.log(data);
        setFakeData(data);
      } catch (error) {
        console.log(error);
      }
    };


    dumyItems();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{ textAlign: 'center', marginTop: 60 }}>{fakeData.length} products has found in list</Text>
        {fakeData.map((fake) => (
          <View key={fake.id} style={styles.moviesList}>
            <Image
              style={{ width: 200, height: 200, display: 'flex', alignItems: 'center', objectFit: 'cover', flexWrap: 'wrap' }}
              source={{ uri: fake.image }} />
            <Text style={styles.Text}>{fake.title}</Text>
            <Text style={styles.Text2}>{fake.description}</Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 10
  },
  Text2: {
    color: 'grey',
    fontWeight: 'bold',

    marginVertical: 10,
    textAlign: 'center'
  },
  moviesList: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 40,
  }
});

