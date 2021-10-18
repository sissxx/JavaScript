function gramophone(nameOfBand, album, songFromAlbum) {

    let time = nameOfBand.length * album.length * songFromAlbum.length / 2;

    //let rotations = Math.ceil(time / 2.5);
    let rotations = 0;
    while (time > 0) {
        rotations++;
        time -= 2.5;
    }
    console.log(`The plate was rotated ${rotations} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')