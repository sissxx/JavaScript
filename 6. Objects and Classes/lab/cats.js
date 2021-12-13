function solve(list) {
    
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }

    }

    let cats = [];
    for (let catData of list) {
        // let catData = list[i].split(' ');
        // let name, age;
        // [name, age] = [catData[0], catData[1]];
        
        let tokens = catData.split(' ');
        let name = tokens[0];
        let age = tokens[1];

        // cats.push(new Cat(name, age));
        let cat = new Cat(name, age);
        cats.push(cat);
        
    }

    for(let cat of cats){
        cat.meow();
    }

}

solve(['Mellow 2', 'Tom 5'])