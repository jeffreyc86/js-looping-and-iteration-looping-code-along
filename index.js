// Code your solutions in this file
function writeCards (array, string) {
    let arr = []
    for (let i = 0; i < array.length; i++) {
        arr.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`)
    }
    return arr
}

function countDown(num){
    let i = 0
    while (num >= i){
        console.log(num--)
    }
}