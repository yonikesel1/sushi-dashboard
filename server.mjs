import { Token } from "graphql";
import pkg from "urql";
const { createClient } = pkg;
import "isomorphic-unfetch";
//const express = require("express");
import express from "express";
const app = express();

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

app.get("/", (req, res) => {
  res.send("Creating Order out of Chaos \n By Yoni and Laurence");
});

app.get("/yoni", (req, res) => {
  res.send("Yoni");
});

async function fetchData() {
  const response = await client.query(query).toPromise();
  console.log("response1234", response);
  return response;
}

app.get("/Pairs", async (req, res) => {
  // const response = fetchData();
  const response = await client.query(query).toPromise();
  console.log("responseaSDASDASD", response);
  res.send(response.data.pairs[1].name);
});

/* Port 8080 */
app.listen(8080, () => {
  console.log("Server is listening on port 8080...");
});
