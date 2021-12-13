function solve(listOfSongs) {
    let numberOfSongs = listOfSongs.shift();  // first element will be the number of songs 
    let typeOfSong = listOfSongs.pop(); // the the last element will be Type List/"all"

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

    }

    let songs = [];

    for (let i = 0; i < numberOfSongs; i++) {
        // let tokens = listOfSongs[i].split('_');
        // let typeList = tokens[0];
        // let  name = tokens[1];
        // let time = tokens[2];

        let [typeList, name, time] = listOfSongs[i].split('_');
        songs.push(new Song(typeList, name, time));

    }

    if (typeOfSong == 'all') {
        songs.forEach(i => console.log(i.name));
    } else {
        let filteres = songs.filter(i => i.typeList === typeOfSong);
        filteres.forEach(i => console.log(i.name));
    }

}
solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'
])