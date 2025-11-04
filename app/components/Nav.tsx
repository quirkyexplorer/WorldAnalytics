import Link from "next/link";

export default function Nav() {
    return(
        <div className="flex flex-row gap-4 justify-evenly pt-12">
            <div className="h-24 w-1/4 border-solid border-4 border-white  rounded-md
               text-center " >
                <Link href="/WorldDash">World</Link> 
            </div>
            <div className="h-24 w-1/4 border-solid border-4 border-white  rounded-md
               text-center " >
                <Link href="/ContinentDash">Continents</Link> 
            </div>
            <div className="h-24 w-1/4 border-solid border-4 border-white  rounded-md
               text-center " >
                <Link href="/CountriesDash">Countries</Link> 
            </div>
            <div className="h-24 w-1/4 border-solid border-4 border-white  rounded-md
               text-center " >
                <Link href="/">Home</Link> 
            </div>
        </div>
    );
}