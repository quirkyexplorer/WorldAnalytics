'use client'
import {Continent, ContinentListProps} from "../types/types"


export default function Continents ( {continents} : ContinentListProps) {

    return (
      

            <div  className="flex flex-col min-h-screen">
            
                <h1 className="text-3xl font-bold underline flex flex-col items-center">this the main page</h1>
                <div className="flex-1 flex flex-col items-center  justify-center">
                    <div  className="flex flex-row justify-evenly w-dvw">  
                    {continents.map( ( {id, name} : Continent) => {

                        return (
                        <div className="h-12 w-32 " key={id} >
                        
                        <div className="text-center">{name}</div>
                        
                        </div>
                        );

                    })}
                    </div>

                </div>

            </div>


    );
}