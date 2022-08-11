import { useSelector } from "react-redux/es/exports";

export default function ListQuote() {
  //access inputed quotes from redux store
  const myQuotes = useSelector((state) => state.myQuotes);

  //show all my qoute lis
  return (
    <ol>
      {myQuotes.map((quote) => (
        <li key={quote}>{quote}</li>
      ))}
    </ol>
  );
}
