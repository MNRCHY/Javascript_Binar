function getSplitName (personName){
    let result
    let splited = personName.split (' ')

    if (splited.length > 3){
        return 'This function only for 3 characters name'
    } else {
        return result = 'first name : ' + splited [0] + '\n' + 'middle name : ' + splited [1] + '\n' + 'last name : ' + splited [2]
    }

}

console.log (getSplitName('Muhamad Moechtar Wirakusumah'));