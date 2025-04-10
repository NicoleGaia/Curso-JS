/*function fatorial(n){
    var fat = 1
    for(c = n; c > 1; c = c - 1){
        fat *= c
    }
        return fat
}
console.log(fatorial(4))*/

function fatorial(n){
    if(n == 1){
        return 1
    } else{
        return n*= fatorial(n-1)
    }
}
console.log(fatorial(4))
//RECURSIVIDADE