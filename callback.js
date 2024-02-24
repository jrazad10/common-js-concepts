function greeting(greetingHandler, name) {
    greetingHandler(name);
}

// const numbers = [45,54,60,70];
// const laptop = {
//     name: 'laptop',
//     price: 45000,
//     memory: '8gb'
// }


function greetingHandler(name) {
    console.log('good morning', name);
}


function greetEvening(name){
    console.log('good evening', name);
}

function greetNight(name){
    console.log('good night', name);
}
greeting(greetingHandler, 'tom')
greeting(greetingHandler, 'azad')
greeting(greetEvening, 'azaddd')
greeting(greetNight, 'rrr')