import { useEffect, useState } from "react";
import axiosRequest from './axiosRequest'
import { addNewList, getRestaurantList, refreshList } from './dbRequest'

// All the request calls should be through saga's(If we're using Redux-Saga)
export default () => {
    const [results, setResults] = useState([]);
    // loading state
    const [isBusy, setBusyStatus] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (searchTerm) => {
        try {
            const response = await axiosRequest("search", searchTerm);
            setResults(response.data.businesses);
            if (getRestaurantList()) {
                refreshList(response.data.businesses)
            }
            else {
                addNewList(response.data.businesses);
            }
            setBusyStatus(false);
        } catch (err) {
            console.log(err);
            // setErrorMessage("Something went wrong");
            // Ideally there should be a connectionChange listner which queries last updated data from sqlite db
            setResults(getRestaurantList());
            setBusyStatus(false);
        }
    };

    //Mounted to get api result with default param "pasta"
    useEffect(() => {
        searchApi("");
    }, []);

    return [searchApi, results, isBusy, errorMessage];
};
