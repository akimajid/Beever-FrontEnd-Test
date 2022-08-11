import { useState } from "react";
import ListQuote from "./ListQuote";
import { addQuote } from "../actions";
import { useDispatch } from "react-redux/es/exports";

export default function PersonalQuoteView() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  //Input value to state
  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  //function saved qoute to redux
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addQuote(value.trim())); //check if there same value
    setValue(""); //set value to empty sting after done
  };

  return (
    <section className="add-quote-section">
      <hr />
      <h2>My Quotes</h2>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <ListQuote />
    </section>
  );
}
