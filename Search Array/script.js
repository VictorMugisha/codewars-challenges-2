 // VALIDATION
    // Loop through given arrayToSearch and validate each element
        // For each element, check two things, if it's an array and 
        // if it contains exactly two elements
    // Validate also the querry, checking if it's an array and it
    // contains two elements

    // SOLVING THE PROBLEM
    // Loop through an arrayToSearch again
        // For each element compare the string version of it to 
        // the string version of querry array
            // If they are the same, I just return the index
            // If the elements expire, I just return -1


var searchArray = function (arrayToSearch, query) {
    for (let array of arrayToSearch) {
        if (!Array.isArray(array) || array.length !== 2) {
            throw new Error("The input arrayToSearch is not valid")
        }
    }

    if (!Array.isArray(query) || query.length !== 2) {
        throw new Error("The querry is not valid")
    }

    // IMPLEMENTATION
    let strQuery = JSON.stringify(query)
    for (let [index, array] of arrayToSearch.entries()) {
        let strRep = JSON.stringify(array)
        if (strQuery === strRep) {
            return index
        }
    }
    return -1
}