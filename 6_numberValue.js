function getAngkaTerbesarKedua (dataNumbers){
    
    let biggest = -1, second = -1

    for (let i = 0; i < dataNumbers.length; i++){
        if ( dataNumbers[i] > biggest) {
            second = biggest;
            biggest = dataNumbers[i]
        } else if ( dataNumbers[i] > second && dataNumbers[i] != biggest){
            second = dataNumbers[i]
        }
    }
    return second
}
dataNumbers = [12, 25, 35, 45, 22, 20, 65]
console.log(getAngkaTerbesarKedua(dataNumbers));