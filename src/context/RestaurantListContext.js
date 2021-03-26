import React, { useEffect, createContext, useState } from 'react';
import { database } from '../database'

export const RestaurantListContext = createContext({});

export const RestaurantListContextProvider = props => {
  // Initial values are obtained from the props
  const {
    restaurantList: initialRestaurantList,
    children
  } = props;

  // Use State to store the values
  const [restaurantList, setRestaurantList] = useState(initialRestaurantList);

  useEffect(() => {
    refreshRestarauntList()
  }, [])

  const addNewList = list => {
    return database.insertRestaurantList(list, refreshRestarauntList)
  };

  const refreshRestarauntList = () => {
    return database.getRestaurantList(setRestaurantList)
  }

  // Make the context object:
  const restaurantListContext = {
    restaurantList,
    addNewList
  };

  // pass the value in provider and return
  return <RestaurantListContext.Provider value={restaurantListContext}>{children}</RestaurantListContext.Provider>;
};