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

const root1 = document.querySelector('[data-key="order1"]'); //1-root to root1(syntax correction), found target key
const order1Biscuits = root1.querySelector('.biscuits .count'); //to specify value of count of specified item using Data Key
const order1Donuts = root1.querySelector('.donuts .count'); //querySelected class donuts and targeted class count
const order1Pancakes = root1.querySelector('.pancakes .count'); //use of classes to target
const order1Status = root1.querySelector('.status dd'); //use of class and element to target

order1Biscuits.textContent = root1.dataset.biscuits; //textContent to alter text in target
order1Donuts.textContent = root1.dataset.donuts;
order1Pancakes.textContent = root1.dataset.pancakes;
order1Status.textContent = root1.dataset.delivered === "true" ? "Delivered" : "Pending";

const order2 = document.querySelector('[data-key="order2"]');  //changed root to order and rearranged
const order2Biscuits = order2.querySelector('.biscuits .count');
const order2Donuts = order2.querySelector('.donuts .count');
const order2Pancakes = order2.querySelector('.pancakes .count');
const order2Status = order2.querySelector('.status dd');

order2Biscuits.textContent = order2.dataset.biscuits;
order2Donuts.textContent = order2.dataset.donuts;
order2Pancakes.textContent = order2.dataset.pancakes;
order2Status.textContent = order2.dataset.delivered === "true" ? "Delivered" : "Pending";

const order3 = document.querySelector('[data-key="order3"]');
const order3Biscuits = order3.querySelector('.biscuits .count');
const order3Donuts = order3.querySelector('.donuts .count');
const order3Pancakes = order3.querySelector('.pancakes .count');
const order3Status = order3.querySelector('.status dd');


order3Biscuits.textContent = order3.dataset.biscuits;
order3Donuts.textContent = order3.dataset.donuts;
order3Pancakes.textContent = order3.dataset.pancakes;
order3Status.textContent = order3.dataset.delivered === "true" ? "Delivered" : "Pending";