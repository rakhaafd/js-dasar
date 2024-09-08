let hitungMundur = function(n){
    if ( n === -1 ){
        console.log('duarr')
        return
    }
    console.log(n)
    hitungMundur(n - 1)
}
hitungMundur(18)