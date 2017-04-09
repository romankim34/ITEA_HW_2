// 1. Переглянути код нижче, запустити в себе на комп'ютері розібратись чому він працює так а не інакше.

var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2
d = b++; alert(d); // 1
c = (2+ ++a); alert(c); // 5
d = (2+ b++); alert(d); // 4
alert(a); // 3
alert(b); // 3

//  2. Переписати if...else з використанням оператора ?



var message;
if (login == 'Вася') {
  message = 'Привіт';
} else if (login == 'Директор') {
  message = 'Ласкаво просимо';
} else if (login == '') {
  message = 'Немає логіна';
} else {
  message = '';
}


// переписал


message = ( login == 'Вася' ) ? 'Привіт':
          (login == 'Директор') ? 'Ласкаво просимо':
          (login == '') ? 'Немає логіна' : '';
          




// 3.
// Написати код який буде питати два числа (prompt);
// Написати програму яка буде перемножувати два числа;
// Якщо перше число більше за друго то буде показувати різницю першого і другого, якщо перше число менше за друго - суму;
// В результаті повинно вивести добуток, різницю або суму (alert).


var firstDig, secondDig, result;

firstDig = +prompt ('Введите первое число');
secondDig = +prompt ('Введите второе число');

if ( firstDig > secondDig ) {
  result = firstDig - secondDig;
} else if ( firstDig < secondDig ) {
  result = firstDig + secondDig;
} else if ( firstDig == secondDig ) {
  result = firstDig * secondDig;
};

alert (result);




/*
4.
Написати код який буде питати логін (prompt);
Якщо користувач вводить Адмін, то питає пароль, якщо нажав відміна (escape) – виводить Вхід відмінено якщо вводить щось інше – Я вас не знаю!;
Пароль перевіряти так. Якщо введений пароль пароль, то виводить Ласкаво просимо!, інакше – Пароль неправильний, при відміні – Вхід відмінено.
*/


var password, login = prompt( 'Введите логин' );

if( login === 'admin' ) {

  password = prompt('Введите пароль');
  if ( password === 'пароль') {
    alert('Добро пожаловать');
  } else if( (password !== 'пароль') && ( password != null ) && ( password != '' ) ) {
    alert('Пароль неправильний');
  } else if( ( password == null ) || ( password == '' ) ) {
    alert( 'Вход отменён' );
  };

} else if( ( login !== 'admin' ) && ( login != null ) && ( login !== '' ) ) {
  alert('Я Вас не знаю');
} else if (( login == null ) || ( login == '' ) ) {
  alert( 'Вход отменён' );
};





















