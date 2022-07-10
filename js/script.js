// Задание 1
let name = prompt('ваше имя');
	 age = prompt('возраст');
	 city = prompt('город проживания');
	 phone = prompt('телефон');
	 email = prompt('почта');
	 company = prompt('место работы');
console.log(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}.`);

//Задание 2
let bday = 2022 - age;
console.log(`${name} родился в ${bday} году.`);

//Задание 3
let str = prompt('Введите строку из 6-ти цифр');
	 str1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
	 str2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
str1 == str2 ? alert('Да') : alert('Нет');

//Задание 4
let a = prompt('Введите число');
a > 0 ? alert('Верно') : alert('Неверно');

//Задание 5
a = 10;
let b = 2;

if(a + b > 1) {
	alert(`Сумма: ${a + b}, разность: ${a - b}, произведение: ${a * b}, частное: ${a / b}, квадрат: ${Math.pow(a + b, 2)}.`);
} else {
	alert(`Сумма: ${a + b}, разность: ${a - b}, произведение: ${a * b}, частное: ${a / b}.`);
}

//Задание 6
if(a > 2 && a < 11 || b >= 6 && b < 14) {
	alert('Верно');
} else {
	alert('Неверно');
}

//Задание 7
let n = prompt('Введите число от 0 до 59');

switch(true) {
	case n >= 0 && n <=14 :
		alert('Первая четверть часа');
		break;

	case n >= 15 && n <=29 :
		alert('Вторая четверть часа');
		break;

	case n >= 30 && n <=44 :
		alert('Третья четверть часа');
		break;

	case n >= 45 && n <=59 :
		alert('Четвертая четверть часа');
		break;

	default:
		alert('Неверное значение.');
}

//Задание 8
let day = prompt('Введите число от 1 до 31');

switch(true) {

	case day >=1 && day <= 10 :
		alert('Первая декада месяца');
		break;

	case day >=11 && day <= 20 :
		alert('Вторая декада месяца');
		break;

	case day >=21 && day <= 31 :
		alert('Третья декада месяца');
		break;

	default :
		alert('Неверное число');
}

//Задание 9
let days = prompt('Введите число');
	 year = days / 365;
	 month = days % 365 / 31;
	 week = days % 365 % 31 / 7;
	 day = days % 365 % 31 % 7;
	 hour = days % 1 *24;
	 minutes = hour % 1 * 60;
	 seconds = minutes % 1 * 60;




switch(true) {

	case days < 0 :
		console.log('Неверное значение.')
		break;

	case true :
		switch(true){
			case year >= 0 && year < 1 :
				console.log('Меньше года');
				break;
			case year >= 1 :
				console.log(`${Math.trunc(year)} year`);
				break;
		}

	case true :
		switch(true) {
			case month >= 0 && month < 1 :
				console.log('Меньше месяца');
				break;
			case month >= 1 :
				console.log(`${Math.trunc(month)} month`);
				break;
		}

	case true :
		switch(true) {
			case week >= 0 && week < 1 :
				console.log('Меньше недели');
				break;
			case week >= 1 :
				console.log(`${Math.trunc(week)} week`);
				break;
		}

	case day >= 1 :
		console.log(`${Math.trunc(day)} day, ${Math.trunc(minutes)} minutes, ${Math.trunc(seconds)} seconds.`);
		break;

}

//Задание 10

let month1 = Math.ceil(days % 365 / 31);

switch(true) {
	case month1 >= 3 && month1 <= 5 :
		console.log(`${month1} месяц года Весна`);
		break;

	case month1 >= 6 && month1 <= 8 :
		console.log(`${month1} месяц года Лето`);
		break;

	case month1 >= 9 && month1 <= 11 :
		console.log(`${month1} месяц года Осень`);
		break;

	default :
		console.log(`${month1} месяц года Зима`);
}

























