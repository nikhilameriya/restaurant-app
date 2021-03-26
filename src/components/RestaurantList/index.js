import React from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from "react-native";
import ResultsDetail from "./ResultsDetail";

import styles from './styles';

const renderRestaurantList = ({ item }, navigation) => {
    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate("RestaurantDetails", { id: item.id })
            }>
            <ResultsDetail restaurant={item} />
        </TouchableOpacity>
    )
}

const RestaurantList = ({ title, restaurants, navigation }) => {
    return (
        <View style={styles.listContainer}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={restaurants}
                keyExtractor={(restaurant) => restaurant.id}
                renderItem={(item) => renderRestaurantList(item, navigation)}
            />
        </View>
    );
};

export default RestaurantList;
