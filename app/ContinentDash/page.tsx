import Continents from "../components/Continents";
import { Continent } from "../types/types";

export default function WorldDash () {
      const continents : Continent[] = [{id: 0, name: "Africa"}, {id: 1, name: "North America"}, {id: 2, name: "South America"}, {id: 3, name: "Asia"}, {id: 4, name: "Oceania"}, {id: 5, name: "Antartica"}, {id: 6, name: "Europe"}];
      
    return (
        <Continents continents={continents} ></Continents>
    );
}