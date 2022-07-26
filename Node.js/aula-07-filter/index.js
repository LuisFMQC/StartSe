import { getPeople } from './StarWarsService.js';

async function main() {
    const starWarsPeople = await getPeople(1);
    const starWarsPeopleFiltred = starWarsPeople.filter(person => person.height < 200).map((person) => {
        return { name: person.name, height: person.height };
    });
    console.log(starWarsPeopleFiltred);
}

main();