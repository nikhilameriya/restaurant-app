import React, { useState } from "react";
import { RefreshControl, ActivityIndicator, Text, ScrollView } from "react-native";

import { SearchBar } from "../components/SearchBar/index";
import getResterauntList from "../components/services/getResterauntList";
import RestaurantList from "../components/RestaurantList/index";

const HomeScreen = () => {
  const [term, setTerm] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [searchApi, results, isBusy, errorMessage] = getResterauntList();

  const onRefresh = async () => {
    setRefreshing(true);
    await searchApi("");
    setRefreshing(false);
  };

  const filterResultByPrice = (price) => results.filter(result => result.price === price);

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {isBusy && <ActivityIndicator />}
      
      {/* Loader generally been managed though navigator level through redux state */}
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        <RestaurantList
          restaurants={filterResultByPrice("$")}
          title="Cost Effective"
        />
        <RestaurantList
          restaurants={filterResultByPrice("$$")}
          title="Bit Pricier"
        />
        <RestaurantList
          restaurants={filterResultByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

export default HomeScreen;
