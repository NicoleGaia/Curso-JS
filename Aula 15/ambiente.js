var num = [8,2,7,1,6]
//num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)

/*for(p = 0; p< num.length; p = p + 1){
    console.log(`A posição ${p} tem o valor ${num[p]}`)
}*/

for(p in num){
    console.log(`A posição ${p} tem o valor ${num[p]}`)
}

p = num.indexOf(2)
console.log(`O valor 2 esrá na posição ${p}`)