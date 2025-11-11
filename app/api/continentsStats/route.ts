import { NextResponse } from "next/server"
import { prisma } from "@/prisma/prisma";
import { country_Continent } from "@prisma/client";

export async function getContinentsStats() {

    // finding the specific enums. 
    // in world database, continents are stored as enums
    // therefore making an array of strings wont do when we loop 
    // looking for a string continent when prisma requires the enum continent. 
   const continents = await prisma.country.findMany({
    where: { Continent:  { not: "Antarctica"}    
    },
    distinct: ["Continent"],
    select: { Continent: true },
    orderBy: { Continent: "asc" },
  });

  // finding top5 and bottom5 per continent 
    const perContinent = await Promise.all(
        continents.map(async ({Continent}) =>{
            const [topPop, topLife, topGnp, bottomPop, bottomLife, bottomGnp] = await Promise.all([
                prisma.country.findMany({
                    where: { Continent },
                    orderBy: { Population: "desc"},
                    take: 5,
                    select: { Name: true, Population: true },
                }),
                prisma.country.findMany({
                    where: { Continent, LifeExpectancy: {not: null}},
                    orderBy: { LifeExpectancy: "desc"},
                    take: 5,
                    select: { Name: true, LifeExpectancy: true},
                }),
                prisma.country.findMany({
                    where: { Continent, GNP: {not: null}},
                    orderBy: { GNP: "desc"},
                    take: 5,
                    select: { Name: true, GNP: true}
                }),
                prisma.country.findMany({
                    where: { Continent },
                    orderBy: { Population: "asc"},
                    take: 5,
                    select: { Name: true, Population: true },
                }),
                prisma.country.findMany({
                    where: { Continent, LifeExpectancy: {not: null}},
                    orderBy: { LifeExpectancy: "asc"},
                    take: 5,
                    select: { Name: true, LifeExpectancy: true},
                }),
                prisma.country.findMany({
                    where: { Continent, GNP: {not: null}},
                    orderBy: { GNP: "asc"},
                    take: 5,
                    select: { Name: true, GNP: true}
                }),
            ]);

            return {
                continent: Continent, 
                top5: {
                    population: topPop,
                    lifeExpectancy: topLife,
                    gnp: topGnp,
                },
                bottom5: {
                    population: bottomPop,
                    lifeExpectancy: bottomLife,
                    gnp: bottomGnp,
                },
            };
        }),
    );

    const averages = await prisma.country.groupBy({
        by: ["Continent"],
        where: { Continent:  { not: "Antarctica"}    
             },
        _avg: {
            Population: true,
            LifeExpectancy: true,
            GNP: true,
        },
        orderBy: { Continent: "asc" },
    });

    const averagesRounded = averages.map(({ Continent, _avg: { Population, LifeExpectancy, GNP }}) => {
        const avgPopulation = Population? Math.round(Number(Population.toFixed(1))) : null;
        const avgLifeExpectancy = LifeExpectancy? Math.round(Number(LifeExpectancy.toFixed(1))) : null;
        const avgGNP =   GNP? Math.round(Number(GNP.toFixed(1))) : null;
         return { Continent, avgPopulation, avgLifeExpectancy, avgGNP }
    });
   
    return {
        averagesRounded,
        perContinent
    };
}