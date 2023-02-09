import React, { useState } from "react";
import List from "./componets/List";
import "./App.css";
import AddToList from "./componets/addToList";

export interface PState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}
function App() {
  const [people, setPeople] = useState<PState["people"]>([
    {
      name: "asad",
      age: 43,
      url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80",
      note: "this is s",
    },
    {
      name: "dsfsd",
      age: 343,
      url: "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80",
      note: "bash sdksd ge",
    },
  ]);

  return (
    <div className="App">
      <h1> People invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
