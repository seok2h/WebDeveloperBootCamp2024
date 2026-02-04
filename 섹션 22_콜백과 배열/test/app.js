function greet(name) {
    console.log(`Hello, ${name}`);
}

function run(callback) {
    callback('Alex');
}

run(greet);
