function cityInfo(city) {

    console.log(`name -> ${city.name}`);
    console.log(`area -> ${city.area}`);
    console.log(`population -> ${city.population}`);
    console.log(`country -> ${city.country}`);
    console.log(`postCode -> ${city.postCode}`);

}
let myCity = {
    name: 'Varna',
    area: 1,
    population: 2,
    country: 'Bulgaria',
    postCode: 1111
}
cityInfo(myCity)