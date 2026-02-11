function printNumber(n) {
    var sum = 0;
    for (var i = 0; i < n; i++) {
        if (i % 2 === 0) {
            sum += sum;
            console.log(sum);
        }
    }
}
printNumber(10);
