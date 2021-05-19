import React from "react";
import FlightCard from "./FlightCard";

function FlightCardList({ results }) {
    let data = [];
    if (results) {
        data = results.legs || [];
    }
    console.log(data);

    for (let i = 0; i <= data.length - 1; i++) {
        console.log(data[i].routeInfo.from.name)
    }
    

    return (
        <div className="result">
            {data.map((item) => (
                <FlightCard key={item.id} flight={item} items={data} />
            ))}
        </div>
    );
}

export default FlightCardList;
