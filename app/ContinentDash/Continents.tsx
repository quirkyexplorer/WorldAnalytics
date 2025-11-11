'use client'
import {Continent, ContinentListProps} from "../types/types"
import { useState } from "react";
import ContinentLayout from "./ContinentLayout";

export default function Continents ( {continents} : ContinentListProps) {

    const [currContinent, setCurrContinent] = useState(continents[0]);

    const toggleContinentTab = (continent: Continent) => { 
         
         setCurrContinent(continent);
    }

    //console.log("setting continent to ", currContinent );
    return (
            <div  className="flex flex-col min-h-screen">
                <div className="flex-1 flex flex-col items-center  justify-begin pt-12">
                    <div  className="flex flex-row justify-evenly w-dvw">  
                        {continents.map( ( continent : Continent) => {
                            return (
                            <button onClick={() => toggleContinentTab(continent)} className="h-12 w-32 " key={continent.id} >
                                <div className={`text-center border rounded ${
                                    currContinent.id === continent.id ?
                                    "bg-blue-500"
                                    : "bg-black" 
                                }`}>{continent.name}</div>
                            </button>
                            );
                        })}


                    </div>
{/* 
                        {
                            currContinent && <ContinentLayout continentName={currContinent.name} />
                        } */}
                </div>
            </div>
    );
}