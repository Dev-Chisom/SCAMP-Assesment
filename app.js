function fibNumber(n) {
    if (n <= 1) {
        return n;
    }else{
    return fibNumber(n - 1) + fibNumber(n - 2);
 }
}

 console.log(fibNumber(1))
 console.log(fibNumber(5))
 console.log(fibNumber(7))
 console.log(fibNumber(9))
 console.log(fibNumber(11))