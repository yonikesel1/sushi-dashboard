import logo from "./logo.svg";
import "./App.css";
import { createClient } from "urql";
import { useEffect, useState } from "react";
import { Token } from "graphql";

const APIURL = "https://api.thegraph.com/subgraphs/name/sushiswap/exchange";

const query = `
query {
  pairs(orderBy: reserveUSD, orderDirection: desc){
    id
    name
    reserveUSD
    reserveETH
    token0{
      symbol
    }
    token1{
      symbol
    }
    token0Price
    token1Price
  }
}
`;

const client = createClient({
  url: APIURL,
});

const pairsSelect = document.getElementById("pairs-select");

function App() {
  const [pairs, setPairs] = useState(null);

  async function fetchData() {
    const response = await client.query(query).toPromise();
    console.log("response", response);
    setPairs(response.data.pairs);
    response.data.pairs.array.forEach((pair) => {
      const option = document.createElement("option");
      option.value = pair.id;
      option.innerText = pair.name;
      pairsSelect.append(option);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <select id="pairs-select">
        <option selected hidden>
          Select a Pair
        </option>
      </select>
      {pairs?.map((pair, _index) => (
        <div key={_index}>
          <p>{pair.name}</p>
          <p>{pair.reserveUSD}</p>
          <p>{pair.token0.symbol}</p>
          <p>{pair.token0Price}</p>
          <p>{pair.token1.symbol}</p>
          <p>{pair.token1Price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
