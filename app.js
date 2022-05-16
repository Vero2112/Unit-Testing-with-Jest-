
// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
// console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


const fromEuroToDollar = (euro) => {
    let dolares  = euro * oneEuroIs["USD"] 
    return dolares
}
// console.log(fromEuroToDollar(1))


const fromDollarToYen = (dollars) => {
    let oneDollarIs = oneEuroIs["JPY"] /oneEuroIs["USD"] 
    let yen = financial2(dollars * oneDollarIs)

    return yen
}
// console.log(typeof(fromDollarToYen(1.2) )    )


const fromYenToPound = (yen) => {
    let oneYenIs = oneEuroIs["GBP"] /oneEuroIs["JPY"]
    let total = financial3(oneYenIs * yen)
    let pound = total
    return pound
}
// console.log(typeof(fromYenToPound(127.9)))
console.log(fromYenToPound(3.5))


function financial2(x) {
    return (Number.parseFloat(x).toFixed(2))*1;
  }
  function financial3(x) {
    return Number.parseFloat(x).toFixed(3)*1;
  }


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };