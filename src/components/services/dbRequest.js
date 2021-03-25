import { database } from '../../components/database'

// All these stuffs can be put through contexts but less bandwidth gonna limit me
const refreshRestarauntList = () => {
    return getRestaurantList();
}

export const addNewList = list => {
    return database.insertRestaurantList(list, refreshRestarauntList)
};

export const getRestaurantList = () => {
    return database.getRestaurantList()
}

export const refreshList = () => {
    return database.getRestaurantList()
}