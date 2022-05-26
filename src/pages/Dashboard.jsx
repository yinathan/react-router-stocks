import { Link } from "react-router-dom";
import stockData from "../stock-data";

export default function Dashboard() {
  
    return(
        <div className="container">
            {stockData.map((ele) => {
              return(
                <Link key={ele.symbol} to={`/stocks/${ele.symbol}`}>
                  <h2>{ele.name}  ({ele.symbol})</h2>
                </Link>
              )
            })}
        </div>
    )
}