import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { SearchInput } from "../../shared/components/Input/SearchInput";
import styles from './styles';

export const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <SearchInput
        onEndEditing={onTermSubmit}
        value={term}
        onChangeText={onTermChange}
      />
      <AntDesign name="search1" style={styles.iconStyle} />
    </View>
  );
};
