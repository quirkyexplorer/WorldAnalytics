import ContinentLayout from "./ContinentLayout";
import { Continent } from "../types/types";
import { getContinentsStats } from "../api/continentsStats/route";

export default async function WorldDash () {
      const continents : Continent[] = [{id: 0, name: "Africa"}, 
        {id: 1, name: "North America"}, {id: 2, name: "South America"}, 
        {id: 3, name: "Asia"}, {id: 4, name: "Oceania"}, {id: 5, name: "Antartica"}, 
        {id: 6, name: "Europe"}];

     const stats = await getContinentsStats();

    console.log("stats", stats);
            

    return (
        <ContinentLayout  ></ContinentLayout>
    );
}