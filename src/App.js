import { useState, useEffect } from "react";

export default function App() {
  const [quotes, setQuotes] = useState([]);

  // useEffect(function loadData() {
  //   getQuotes();
  // }, []);

  async function getQuotes() {
    const getDataFromApi = await fetch("https://type.fit/api/quotes");
    const result = await getDataFromApi.json();
    // console.log(result);
    setQuotes(result);
  }
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <tbody>
            {quotes.map((quote, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{quote.text}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* <h1>{advice}</h1> */}
        <button onClick={getQuotes}>
          Want to see some interesting Quotes ?
        </button>
        {/* <Message count={count} /> */}
      </div>
    </div>
  );
}
