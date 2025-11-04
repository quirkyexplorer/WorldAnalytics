import Image from "next/image";
import { useId } from "react";
import type { Continent } from "./types/types";
import Continents from "./components/Continents";

export default function Home() {
  const id = useId();

  return (
    <div className="flex flex-col gap items-center">
      <div>this website is just an exercise to create a dashboard</div>
      <div>feel free to explore</div>
    </div>
  );
}
