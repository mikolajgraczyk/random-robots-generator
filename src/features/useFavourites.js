import { useState, useEffect } from "react";

const getDataFromLocalStorage = () =>
  JSON.parse(localStorage.getItem("favourites")) || [];

export const useFavourites = () => {
  const [favourites, setFavourites] = useState(getDataFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  return [favourites, setFavourites];
};
