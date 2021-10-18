function cone(radius, height) {


    let sBig = Math.PI * radius * radius;
    let sSmall = Math.sqrt((radius * radius) + (height * height))
    let b = Math.PI * radius * sSmall;
    let volume = (sBig * height) / 3;
    console.log('volume = ' + volume.toFixed(4));
    let sOne = sBig + b;
    console.log('area = ' + sOne.toFixed(4));

}
cone(3.3, 7.8)