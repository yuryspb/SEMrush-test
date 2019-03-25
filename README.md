# Тестовое задание

## 1. Примеры верстки

1) [https://build-wgszxtqwli.now.sh/](https://build-wgszxtqwli.now.sh/) (Несколько разных страниц можно посмотреть по ссылкам «Homes», остальные ссылки нерабочие). Проект на гитхабе - [https://github.com/yuryspb/airbnb-demo-frontend](https://github.com/yuryspb/airbnb-demo-frontend)

2) [https://github.com/yuryspb/landing-test](https://github.com/yuryspb/landing-test)

В принципе, в остальных проектах на гитхабе верстка тоже моя.

## 2

Верстал с Less/Sass(преимущественно Sass) – используя миксины, импорт, вложенности, наследование, переменные.

Есть небольшой опыт с  jQuery.

Есть опыт в React, в том числе верстке и реализации компонентов. Для верстки под React  использовал styled-components. Пример верстки под React  в 1-м пункте по 1й ссылке.

По методологии БЭМ тоже верстал и соответственно знаком с концепцией (пример верстки  в 1-м пункте по 2й ссылке).

## 3
Был небольшой студенческий опыт в основном на С++ и С#.

## 4
Данная функция создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение. В метод также передаётся набор аргументов, которые будут установлены перед переданными в привязанную функцию аргументами при её вызове. Можно сказать, что эта функция аналог функции Function.prototype.bind(), но является совместимой со старыми версиями браузеров, где Function.prototype.bind() не работает.

```javascript
function bind(method, context) {                                       
    var args = Array.prototype.slice.call(arguments, 2);               
    return function() {                                                
        var a = args.concat(Array.prototype.slice.call(arguments, 0)); 
        return method.apply(context, a)                                
    }
}

var greeter = function(greeting, separator, emphasis, name) {
  console.log(greeting + separator + name + emphasis);
};

var greetHello = bind(greeter, null, "Hello", ", ", ".");
greetHello("Andrey"); // "Hello, Andrey."

var greetGoodbye = bind(greeter, null, "Goodbye", ", ");
greetGoodbye(".", "Maxim"); // "Goodbye, Maxim."
```

## 5
Функция "inArray" проверяет наличие элемента в выбранном массиве и возвращает "true" в случае успеха и "false" в обратном. 
```javascript
function inArray(num, array) {
  return array.indexOf(num) > -1;
}
Array.prototype.inArray = function(num) {
  return inArray(num, this);
}

console.log(inArray(15, [1, 10, 145, 8])); // false
console.log([23, 674, 4, 12].inArray(4)); // true
```
В ES6 можно воспользоваться "includes" вместо "indexOf", он сразу возвращает значение типа boolean.
```javascript
function inArray(num, array) {
  return array.includes(num);
}
Array.prototype.inArray = function(num) {
  return inArray(num, this);
}

console.log(inArray(15, [1, 10, 145, 8])); // false
console.log([23, 674, 4, 12].inArray(4)); // true
```
## 6
https://yuryspb.github.io/
Ну и собственно файлы здесь в проекте (https://github.com/yuryspb/SEMrush-test). С файловой структурой и сборкой ничего не делал, так как счел здесь это излишним. Примеры есть в других проектах.