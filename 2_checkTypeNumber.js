const checkTypeNumber = (givenNumber) => {
    let output

    if ( givenNumber %2 == 0){
        return output = 'GENAP'
    } else if (givenNumber &2 == 1){
        return output = 'GANJIL'
    } else {
        return output = 'Error: Invalid Data Type'
    }

}

console.log(checkTypeNumber ());