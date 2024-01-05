// Components/MyNewsCard.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Linking } from 'react-native';

const MyNewsCard = () => {
  const [currnewsdata, setNewsData] = useState();

  const fetchNewsData = async () => {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines?country=in&apiKey=95d2617f6b5b4e8c8ca6f1102de505d5'
      );
      const newsData = await response.json();
      setNewsData(newsData.articles);
    } catch (error) {
      console.error('Error fetching news data:', error);
    }
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    currnewsdata && (
      <FlatList
        data={currnewsdata}
        keyExtractor={(item) => item.url}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.mynewscard}>
              <Text style={styles.newstitle}>{item.title}</Text>
              <View style={{ flex: 0, width: '100%', alignItems: 'center' }}>
                <Image source={{ uri: item.urlToImage }} style={{ width: '100%', height: 200 }} />
              </View>
              <Text style={styles.newsdescription}>{item.description}</Text>
              <TouchableOpacity style={styles.readmorecontainer} onPress={()=>{Linking.openURL(item.url)}}>
                <Text style={styles.readmorebtn}>Read More {'>'}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    )
  );
};

const styles = StyleSheet.create({
  mynewscard: {
    marginTop: 10,
    borderColor: '#8899a6',
    borderWidth: 1,
    backgroundColor: '#00000000',
    width: '96%',
    borderRadius: 10,
    marginLeft:8
  },
  newstitle: {
    color: '#fff',
    fontSize: 25,
    padding: 5,
    fontWeight: '700',
  },
  newsdescription: {
    color: '#fff',
    fontSize: 17,
    margin: 10,
  },
  readmorecontainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  readmorebtn: {
    backgroundColor: '#192734',
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
});

export default MyNewsCard;
