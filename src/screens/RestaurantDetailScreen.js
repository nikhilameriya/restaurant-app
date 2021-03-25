import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import config from "../config";

const RestaurantDetailScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

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

const styles = StyleSheet.create({
  detailsLayout: {
    marginLeft: 20,
  },
  galleryLayout: {
    margin: 15
  },
  titleStyle: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    // fontWeight: "regular",
    tintColor: "gray",
  },
  name: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
  image: {
    justifyContent: "center",
    height: 200,
    width: "100%",
  },
});

export default RestaurantDetailScreen;
