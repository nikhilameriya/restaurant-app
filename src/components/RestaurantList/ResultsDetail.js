import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { RatingComponent } from '../../shared/components/RatingComponent';
import styles from './styles';

const ResultsDetail = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: restaurant.image_url }} style={styles.image} />
      <Text style={styles.name}>{restaurant.name}</Text>
      <RatingComponent restaurant={restaurant} />
    </View>
  );
};

export default ResultsDetail;
