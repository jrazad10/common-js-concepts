function add(a, b) {
    const total = a + b;
    // console.log(total);
    if (b > 5) {
        const sum = 25 + a + b;
        console.log(sum);
    } else {
        const sum = 5 + a + b;
        var current = sum;
    }
    console.log(current);
    return total;
}
console.log(add(5, 3));