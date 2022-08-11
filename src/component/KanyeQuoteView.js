import { useState, useEffect } from "react";
import ListFavorite from "./ListFavorite";
import { addFavorite } from "../actions";
import { useDispatch } from "react-redux/es/exports";

export default function KanyeQuoteView() {
  const dispatch = useDispatch();
  const [quote, setQuote] = useState("");

  //function to fetch quote from api
  const fetchQuote = async () => {
    const response = await fetch("https://api.kanye.rest");
    const result = await response.json();
    setQuote(result.quote);
  };

  //fetch initial quote
  useEffect(() => {
    fetchQuote();
  }, []);

  //call a fetchQuote function
  const handleClick = () => {
    fetchQuote();
  };

  //function submit for add quote value to redux store
  const handleAddFavorite = () => {
    dispatch(addFavorite(quote));
  };

  return (
    <section>
      <img
        src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
        alt="W3Schools.com"
        style={{ width: "300px" }}
      />
      <h1>Kanye-West Quote</h1>
      <h3>{quote}</h3>
      <button onClick={handleClick}>Get Quote</button>
      <button onClick={handleAddFavorite}>Add Favorite</button>
      <ListFavorite />
    </section>
  );
}
