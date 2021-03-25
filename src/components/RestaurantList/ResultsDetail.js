import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

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

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    borderRadius: 4,
    height: 100,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
  },
  subtitle: {
    fontSize: 14,
    // fontWeight: "regular",
    tintColor: "gray",
  },
});

export default ResultsDetail;
