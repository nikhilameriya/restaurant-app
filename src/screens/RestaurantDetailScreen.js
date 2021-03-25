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
  debugger;
  return (
    <View>
      <View>
        <Text>{name}</Text>
        <Text>
          {price}
        </Text>
        <Text style={styles.subtitle}>
          {rating} Stars, {review_count} Reviews
      </Text>
      </View>
      <FlatList
        data={photos}
        keyExtractor={(photo) => photo}
        renderItem={(item) => {
          return <Image style={styles.image} source={{ uri: item.item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    justifyContent: "center",
    height: 200,
    width: 300,
  },
});

export default RestaurantDetailScreen;
