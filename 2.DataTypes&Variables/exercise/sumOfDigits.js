function sumDigit(number){

    let numberAsStr = number.toString(); // правим числото стринг 
    let sum = 0;

    for(let newNumber of numberAsStr){ //  нова променлива, която пази всеки един индекст от стринга, знае кога започва и свършва цикъла
        sum+= Number(newNumber); // превръшаме всеки един индекс от стринг в число

    }
    console.log(sum);

}
sumDigit(245678)