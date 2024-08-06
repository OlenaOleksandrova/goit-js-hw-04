const profile = {
    username: "Jacob",
    playTime: 300,
};
function changeUsername(newName) {
this.username = newName
}

function updatePlayTime(hours) {
        this.playTime += hours
    
}
function getInfo() {
    return `${sername} has ${amount} active hours!`
    }
    
console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]

// 


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"