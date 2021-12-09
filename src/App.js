import React from "react";
import Header from "./components/Header";
import Travel from "./components/Travel";
import data from "./data";

export default function App() {
  const travelJournal = data.map((travelData) => {
    return <Travel key={travelData.id} travelData={travelData} />;
  });
  return (
    <div>
      <Header />
      {travelJournal}
    </div>
  );
}
