import React from "react";
import ToyCard from "./ToyCard";

const ToyTab = ({ toys }) => {
  return (
    <>
      
      <div className="my-10 grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {toys.map((toy) => (
          <ToyCard key={toy._id} toy={toy}></ToyCard>
        ))}
      </div>
    </>
  );
};

export default ToyTab;
