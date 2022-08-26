function checkEmail (email){

    let validEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/

    if (email.match(validEmail)){
        return output = 'VALID'
    } 
    else if (email == ''){
        return 'ERROR : Email cannot be empty'
    }
    else {
        return output = 'INVALID'
    }
}

console.log(checkEmail('moechtarwira@gmail.com'));