function parimpar(n){
    if(n % 2 == 0){
        return 'PAR'
    } else {
        return 'IMPAR'
    }
}
p = 1
var res = parimpar(p++)
console.log(res)
