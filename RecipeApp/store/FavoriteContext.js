import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoriteContextProvider({ children }) {
  const [favoriteFoodIds, setFavoriteFood] = useState([]);

  function addFavorite(id) {
    setFavoriteFood((current) => [...current, id]);
  }

  function removeFavorite(id) {
    setFavoriteFood((current) => current.filter((foodId) => foodId !== foodId));
  }

  const value = {
    ids: favoriteFoodIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return <FavoriteContext.Provider  value={value}   >{children}</FavoriteContext.Provider>;
}



export default FavoriteContextProvider
