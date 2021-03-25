import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import styles from './styles';

const ResultsDetail = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: restaurant.image_url }} style={styles.image} />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>
        {restaurant.rating} Stars, {restaurant.review_count} Reviews
      </Text>
    </View>
  );
};

export default ResultsDetail;
