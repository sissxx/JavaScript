function towns(list) {

    for (let townInfo of list) {
        //  let data = list[i].split(' | ');
        // let town = data[0];
        // let latitude = Number(data[1]);
        // let longitude = Number(data[2]);
        
        let [town, latitude, longitude] = townInfo.split(' | ');

        let obj = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        console.log(obj);

    }

}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
])