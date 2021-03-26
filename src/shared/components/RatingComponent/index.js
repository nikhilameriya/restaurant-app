import React from "react";
import { Text } from "react-native";

import styles from './styles';

export const RatingComponent = ({ restaurant }) => {
  return (
    <>
      <Text style={styles.subtitle}>
        {restaurant.rating} Stars, {restaurant.review_count} Reviews
      </Text>
    </>
  );
};

