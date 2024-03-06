import React, { useState, useEffect, createContext } from "react";
import { fetchdatafromapi } from '../utils/api';

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(true);
    const [searchResults, setSearchResults] = useState([]);
    const [selectCategories, setselectCategories] = useState('New');
    const [mobileMenu, setmobileMenu] = useState(false);

    useEffect(() => {
        fetchSelectedCategoryData(selectCategories);
    }, [selectCategories]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true);
        fetchdatafromapi(`search/?q=${query}`)
            .then(({contents}) => {
                console.log(contents);
                setSearchResults(contents);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Context.Provider
            value={{
                loading,setLoading,
                searchResults,
                selectCategories,
                setselectCategories,
                mobileMenu,
                setmobileMenu
            }}
        >
            {props.children}
        </Context.Provider>
    );
};
