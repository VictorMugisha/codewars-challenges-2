function friend(friends) {
    return friends.filter(friend => friend.length === 4)
}

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));