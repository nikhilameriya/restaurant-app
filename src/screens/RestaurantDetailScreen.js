import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
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
  const { name, price, photos, rating, review_count } = result;
  return (
    <View>
      <View style={styles.detailsLayout}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subtitle}>
          {`${rating} Stars, ${review_count} Reviews`}
        </Text>
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
