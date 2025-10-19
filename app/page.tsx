import Image from "next/image";
import { useId } from "react";
import type { Continent } from "./types/types";
import Continents from "./components/Continents";






export default function Home() {
  const id = useId();
  const continents : Continent[] = [{id: 0, name: "Africa"}, {id: 1, name: "North America"}, {id: 2, name: "South America"}, {id: 3, name: "Asia"}, {id: 4, name: "Oceania"}, {id: 5, name: "Antartica"}, {id: 6, name: "Europe"}];


  return (
    <div>
        <Continents continents={continents} ></Continents>
    </div>
  );
}
