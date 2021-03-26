import { useEffect, useState, useContext } from "react";
import axiosRequest from './axiosRequest'
import { getRestaurantList } from './dbRequest'

// Context to get db methods defined in RestaurantListContext
import { RestaurantListContext } from '../../context/RestaurantListContext';

// All the request calls should be through saga's(If we're using Redux-Saga)
export default () => {
    const [results, setResults] = useState([]);
    const [isBusy, setBusyStatus] = useState(true);  // loading state
    const [errorMessage, setErrorMessage] = useState("");

    const restaurantListContext = useContext(RestaurantListContext)
    const { restaurantList, addNewList, refreshRestarauntList } = restaurantListContext;

    const searchApi = async (searchTerm) => {
        try {
            const response = await axiosRequest("search", searchTerm);
            setResults(response.data.businesses);
            if (getRestaurantList()) {
                refreshRestarauntList(response.data.businesses)
            }
            else {
                addNewList(response.data.businesses);
            }
            setBusyStatus(false);
        } catch (err) {
            console.log(err);
            // setErrorMessage("Something went wrong");
            setResults(getRestaurantList()); // Ideally there should be a connectionChange listner which queries last updated data from sqlite db
            setBusyStatus(false);
        }
    };

    //Mounted to get api result with default param "pasta"
    useEffect(() => {
        searchApi("");
    }, []);

    return [searchApi, results, isBusy, errorMessage];
};
