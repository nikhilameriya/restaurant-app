import React from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";

import styles from './styles';

const RestaurantList = ({ title, restaurants, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={restaurants}
                keyExtractor={(restaurant) => restaurant.id}
                renderItem={}
            />
        </View>
    );
};

export default withNavigation(RestaurantList);
