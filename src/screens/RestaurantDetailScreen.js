import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { RatingComponent } from '../shared/components/RatingComponent';
import config from "../config";

import styles from './styles';

const RestaurantDetailScreen = ({ navigation, route }) => {
  const [result, setResult] = useState(null);
  const { id } = route.params;

  const getResult = async (id) => {
    //get the details of restaurant based on id
    const response = await config.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }
  const { name, photos } = result;
  return (
    <View>
      <View style={styles.detailsLayout}>
        <Text style={styles.name}>{name}</Text>
        <RatingComponent restaurant={result} />
      </View>
      <View style={styles.galleryLayout}>
        <FlatList
          data={photos}
          keyExtractor={(photo) => photo}
          renderItem={(item) => {
            return <Image style={styles.image} source={{ uri: item.item }} />;
          }}
        />
      </View>
    </View>
  );
};

export default RestaurantDetailScreen;
