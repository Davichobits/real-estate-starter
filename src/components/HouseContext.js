import { useState, useEffect, createContext } from "react";

// import data
import { housesData } from "../data";

// create context
export const HouseContext = createContext();

export const HouseContextProvider = ({children}) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(true);


  return (
    <HouseContext.Provider value={{
      country,
      setCountry,
      countries,
      setCountries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      houses,
      loading
    }}>
      {children}
    </HouseContext.Provider>
  );
};