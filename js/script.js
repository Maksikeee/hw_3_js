//задание 1
console.log(`\n --------------Задание 1--------------`);
let z;
for (z=1; z<=50; z++) {
	console.log(z);
}

//Задание 2
let i = 89;
while(i>=11){
	
	document.write(`${i} </br>`);
	i--;
}

//Задание 3
console.log(`\n --------------Задание 3--------------`);
let sum = 0;
for(i=0; i<=100; i++){
	sum += i;
	
}
console.log(sum);

//Задание 4
console.log(`\n --------------Задание 4--------------`);
sum = 0;
for(i=1; i<=5; i++){
	for(let j=0; j<=i; j++){
		sum += j;
	}
	console.log(sum);
	sum = 0;
}


//Задание 5
console.log(`\n --------------Задание 5--------------`);

for(i=8; i<=56; i++){
	if(i%2===0){
		console.log(i)
	}
}

i = 8;
while(i<=56){
	if(i%2===0){
		console.log(i);
		i++;
	} else {
		i++;
	}
}

//Задание 6
console.log(`\n --------------Задание 6--------------`);
for(i=2; i<=10; i++){
	for(j=1; j<=10; j++){
		console.log(`${i} * ${j} = ${i*j}`);
	}
	console.log('\n');
}

//Задание 7
console.log(`\n --------------Задание 7--------------`);
let result;
for(let n=1000; n>=50;){
	n = n/2;
	if(n<50){
		console.log(n);
	}else{
		continue;
	}
}

//Задание 8
let sum8 = 0;
let numbers8 = 0;
while(true){
	let number8 = +prompt('Введите число');
	if(isNaN(number8) && number8 !==''){
		alert('Введено не число');
	}else if(number8===0 || number8===''){
		break;
	}else{
		sum8+=number8;
		numbers8+=1;
	}
}
let mean = sum8/numbers8;
console.log(mean);
console.log(sum8);

// //Задание 9
console.log(`\n --------------Задание 9--------------`);
let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let arr = str.split(' ').map(Number);
let max = arr[0];
let min = arr[0];

for(i=0; i<arr.length-1; i++){
	if(arr[i]>max){
		max = arr[i];
	}else if(arr[i]<min){
		min = arr[i];
	}
}
console.log(max);
console.log(min);

//Задание 10
console.log(`\n --------------Задание 10--------------`);

let str10 = prompt('Введите число');
let arr10 = str10.split('').map(Number);
let numbers = 0;
let sum10 = 0;

console.log(`\n Разбиваем число на цифры`);
for(i=0; i<str10.length; i++){
	console.log(arr10[i]);
	numbers += 1;
}
console.log(`\n Кол-во цифр в числе`);
console.log(numbers);

console.log(`\n Сумма цифр в числе`);
for(i=0; i<str10.length; i++){
	sum10 += arr10[i];
}
console.log(sum10);

console.log(`\n Меняет порядок числа на обратный`);
for(i=str10.length-1; i>=0; i--){
	console.log(arr10[i]);
}


























