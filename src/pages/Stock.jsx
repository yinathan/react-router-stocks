import stockData from "../stock-data"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"


export default function Stock() {
    let params = useParams()
        return(

        
        <div>
            {stockData.filter(stock => stock.symbol.includes(`${params.symbolId}`)).map(filteredStock => (
                <div>
                    <h2>Name: {filteredStock.name}</h2>
                    <h2>Price: {filteredStock.lastPrice} </h2>
                </div>
            ))}
        </div>
    )
}