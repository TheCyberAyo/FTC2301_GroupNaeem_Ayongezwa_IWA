// const 1-root = document(order1),
// const 1-biscuits: document(biscuits),
// const 1-donuts: document(donuts),
// const 1-pancakes: document(pancakes),
// const 1-status: document(status)

// const 2-root = document(order2),
// const 2-biscuits: document(biscuits),
// const 2-donuts: document(donuts),
// const 2-pancakes: document(pancakes),
// const 2-status: document(status)

// const 3-root = document(order3),
// const 3-biscuits: document(biscuits),
// const 3-donuts: document(donuts),
// const 3-pancakes: document(pancakes),
// const 3-status: document(status)

// 1-biscuits= 1-root.biscuits,
// 1-donuts = 1-root.donuts,
// 1-pancakes = 1-root.pancakes,
// 1-status = 1-root.status ? Delivered : Pending

// 2-biscuits= 2-root.biscuits,
// 2-donuts = 2-root.donuts,
// 2-pancakes = 2-root.pancakes,
// 2-status = 2-root.status ? Delivered : Pending

// 3-biscuits= 3-root.biscuits,
// 3-donuts = 3-root.donuts,
// 3-pancakes = 3-root.pancakes,
// 3-status = 3-root.status ? Delivered : Pending

const order1 = document.querySelector('[data-key="order1"]'); //fixed 1-order to order1, to correspond with HTML, add .querySelector find target
const order1Biscuits = order1.querySelector('.biscuits .count'); //to specify value of count of specified item using Data Key
const order1Donuts = order1.querySelector('.donuts .count');
const order1Pancakes = order1.querySelector('.pancakes .count');
const order1Status = order1.querySelector('.status dd');

const order2 = document.querySelector('[data-key="order2"]');
const order2Biscuits = order2.querySelector('.biscuits .count');
const order2Donuts = order2.querySelector('.donuts .count');
const order2Pancakes = order2.querySelector('.pancakes .count');
const order2Status = order2.querySelector('.status dd');


const order3 = document.querySelector('[data-key="order3"]');
const order3Biscuits = order3.querySelector('.biscuits .count');
const order3Donuts = order3.querySelector('.donuts .count');
const order3Pancakes = order3.querySelector('.pancakes .count');
const order3Status = order3.querySelector('.status dd');


order1Biscuits.textContent = order1.dataset.biscuits; //textContent
order1Donuts.textContent = order1.dataset.donuts;
order1Pancakes.textContent = order1.dataset.pancakes;
order1Status.textContent = order1.dataset.delivered === "true" ? "Delivered" : "Pending";

order2Biscuits.textContent = order2.dataset.biscuits;
order2Donuts.textContent = order2.dataset.donuts;
order2Pancakes.textContent = order2.dataset.pancakes;
order2Status.textContent = order2.dataset.delivered === "true" ? "Delivered" : "Pending";

order3Biscuits.textContent = order3.dataset.biscuits;
order3Donuts.textContent = order3.dataset.donuts;
order3Pancakes.textContent = order3.dataset.pancakes;
order3Status.textContent = order3.dataset.delivered === "true" ? "Delivered" : "Pending";