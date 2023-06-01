function add(...params) {
    let sum =0;
params.forEach(element => {
    sum += element;
});
    return sum;
}

module.exports = {add}