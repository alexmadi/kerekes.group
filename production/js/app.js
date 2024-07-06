var globalVar = true;

document.addEventListener("DOMContentLoaded", function(event) {
    console.log('DOMContentLoaded');
    toggleDialog();
    openDiaolog();
    closeDiaolog();
    // document.querySelector('.js_button').onclick = function(e) {
    //   console.log('test 2');
    // }
    // document.querySelector('.js_button').addEventListener('click', function(){
    //      console.log('test 0');
    // });
});

function openDiaolog() {
    var dialog_ClassName = document.getElementsByClassName('js_dialog')[0]; // @ret HTMLCollection
    var dialog_TagName = document.getElementsByTagName('div'); // @ret HTMLCollection
    var dialog_Id = document.getElementById('dialog_id');
    var dialog_querySelector = document.querySelector('.js_dialog');
    var openDiaologBtnId = document.querySelector('.js_button');

    openDiaologBtnId.addEventListener('click', function(e) {
        dialog_Id.classList.add('active');
    });

    // dialog_ClassName.style.width='500px';

    // dialog_ClassName.classList.toggle("active");
    // dialog.toggle("active");

    // console.log(dialog_ClassName, 'dialog_ClassName');
    // console.log(dialog_Id, 'dialog_Id');
    // console.log(dialog_TagName, 'dialog_TagName');
    // console.log(dialog_querySelector, 'dialog_querySelector');

    //globalVar  = '1111111';
    //console.log(globalVar, ' - globalVar 1');
    //showVariable();
}

function closeDiaolog() {
    var closeButton_ClassName = document.getElementsByClassName('js_dialog_close')[0]; // @ret HTMLCollection
    var dialog_Id = document.getElementById('dialog_id');

    closeButton_ClassName.addEventListener('click', function(e) {
        e.preventDefault();
        dialog_Id.classList.remove('active');
    });
}

function toggleDialog() {
    var dialog_Id = document.getElementById('dialog_id');
    var openDiaologBtnId = document.getElementById('js_button_2_Id');

    openDiaologBtnId.addEventListener('click', function(e) {
        e.preventDefault();
        dialog_Id.classList.toggle('active');

        //globalVar = '2222222';
        //console.log(globalVar, ' - globalVar 2');
        //showVariable();
    });
}

appendListItems();

function appendListItems() {
    var count = 3;
    var list = document.getElementsByClassName('js_list');

    for (var i = 1; i <= count; i++) {
        list[0].innerHTML += '<li>List item' + i + '</li>';
    }
}

getDialogElement();

function getDialogElement() {
    var dialogElements = document.getElementsByClassName('js_dialog_inner'),
        content = '',
        dialogDisplay = document.querySelector('.js_dialog_display');

    for (var i = 0; i < dialogElements.length; i++) {
        dialogElements[i].addEventListener('click', function() {
            content = this.innerHTML;
            console.log(this);
            dialogDisplay.innerHTML = content;
            console.log(this.parentNode.removeChild(this))
        });
    }
}

/**
 * DataTypes list
 */

// DataTypes();

function DataTypes() {
    console.log('undefined -', typeof undefined);
    console.log('0 -', typeof 0);
    console.log('true -', typeof true);
    console.log('string -', typeof "foo");
    console.log('{} -', typeof {});
    console.log('null -', typeof null);
    console.log('function(){} -', typeof function(){});
}

/**
 * ToFixed how works
 */

// toFixedFunc();

function toFixedFunc() {
    var n = 12.445;
    console.log(n.toFixed(2)) // - string
}

/**
 * Operations with string
 */

// symbolsFunc();
function symbolsFunc() {
    var str = "jQuery";
    console.log( str.charAt(0) ); // "j"
    var str1 = "строка";
    str1 = str1[3] + str1[4] + str1[5];
    console.log( str1 ); // ока
    // Для поиска подстроки есть метод indexOf(подстрока[, начальная_позиция]).
    // Он возвращает позицию, на которой находится подстрока или -1, если ничего не найдено. Например:
    var str2 = "Widget with id";
    console.log( str2.indexOf("Widget") ); // 0, т.к. "Widget" найден прямо в начале str
    console.log( str2.indexOf("id") ); // 1, т.к. "id" найден, начиная с позиции 1
    console.log( str2.indexOf("widget") ); // -1, не найдено, так как поиск учитывает регистр

    var str3 = "Widget";
    if (~str3.indexOf("get")) {
        console.log( 'совпадение есть!' );
    }

    var str4 = "Ослик Иа-Иа посмотрел на виадук"; // ищем в этой строке
    var target = "Иа"; // цель поиска

    var pos = 0;
    while (true) {
      var foundPos = str4.indexOf(target, pos);
      if (foundPos == -1) break;
      console.log( foundPos , 'str4'); // нашли на этой позиции
      pos = foundPos + 1; // продолжить поиск со следующей
    }
    // substring(start [, end])
    var str5 = "stringify";
    console.log(str5.substring(0,1), '-substring(start [, end]) - (0,1)'); // "s", символы с позиции 0 по 1 не включая 1.
    var str5 = "stringify";
    console.log(str5.substring(2), '-substring(start [, end]) - (2)'); // ringify, символы с позиции 2 до конца
    // substr(start [, length])
    var str6 = "stringify";
    str6 = str6.substr(2,4); // ring, со 2-й позиции 4 символа
    console.log(str6);
    // slice(start [, end])
    console.log( "testme".slice(-2) ); // "me", от 2 позиции с конца
    console.log( "testme".slice(1, -1) ); // "estm", от 1 позиции до первой с конца.
    // to uppercase first letter
    function ucFirst(str) {
      if (!str) return str;
      return str[0].toUpperCase() + str.slice(1);
    }
    console.log( ucFirst("вася") );

    function checkSpam(str) {
      var lowerStr = str.toLowerCase();

      return !!(~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx'));
    }
}


// [Arrays]

function arraysFunc() {
    var arr = ['One', 'Two', 'Three'];

    var arrToStr = arr.join('<')
    var str = 'Some, Some1, Some2';
    var arr2 = str.split(',');
    var arr3 = ["Я", "сейчас", "изучаю", "JavaScript"];
    arr3.splice(0, 0, "Мы", "изучаем")
    var arr4 = ["Почему", "надо", "учить", "JavaScript"];
    var arr4Sliced = arr4.slice(1, 3);
    // console.log(arr4Sliced);

    var scores = [1,2,3];
    scores.push(4);
    // or
    scores = [...scores, 5]
   // console.log(scores);

   var array1 = [1, 4, 9, 16];

    // pass a function to map
    // const map1 = array1.map(x => x * 2);
    var map1 = array1.map(function(x) {
        return x = x * 3;
    })

    console.log(map1);
    // expected output: Array [2, 8, 18, 32]

}

arraysFunc();

function objectsFunc() {
    var person = {};
    person.name = 'Вася';
    person.age = 25; // запишем ещё одно свойство: с именем 'age' и значением 25
    // console.log( person.name + ': ' + person.age );
    //delete person.age;
    if ("name" in person) {
     // console.log( "Свойство name существует!" );
    }
    person['name'] = 'Вася1'; // то же что и person.name = 'Вася'
    var person = {};
    person.age = 25;
    var key = 'age';
   // console.log( person[key] ); // выведет person['age']

    var menuSetup = {
        width: 300,
        height: 200,
        title: "Menu"
    };

    // то же самое, что:

    // var menuSetup = {};
    //     menuSetup.width = 300;
    //     menuSetup.height = 200;
    //     menuSetup.title = 'Menu';
    // }
    console.log(person);

    // var animal = function({
    //     getAge: function() {
    //         console.log('123');
    //     }
    // })

    class Animal {
        constructor (params) {
            this.name = params.name;
            this.birthYear = params.birthYear;
        }

        getAge () {
            let currentYear = new Date().getFullYear();
            return currentYear - this.birthYear;
        }
    }

    var Cat = new Animal({
        'name': 'Lora',
        'birthYear': 2000
    });

    class Human extends Animal {
       // constructor (params) {
            // this.
           // super.surname = params.surname;
       // }

        sayName() {
            return 'My name is ' + this.name;
        }
    }
    var me = new Human({
        'name': 'Alex',
        'birthYear': 1993,
        'surname': 'Madi'
    });

    console.log(me.sayName());
    console.log(me.getAge());



    const adrian = {
        fullName: 'Adrian Oprea',
        occupation: 'Software developer',
        age: 31,
        website: 'https://oprea.rocks'
    };
    const bill = {
        ...adrian,
        fullName: 'Bill Gates',
        website: 'https://microsoft.com'
    };

    // console.log(bill);
}
// objectsFunc();


// Var Scope test
//showVariable();

function showVariable() {
    console.log(globalVar, ' - globalVar 0');
}

// minMax(2,3,5,70);

function minMax(nums) {
    var maxNum = minNum = 0;

    for (var i=0; i<arguments.length; i++) {
        if (arguments[i] > maxNum) {
            maxNum = arguments[i];
        }
        //console.log(arguments[i]);

        // Math.max(1, 2, 3, 4);
        // Math.min(1, 2, 3, 4);

        // var numbers = [1, 2, 3, 4];
        // Math.max.apply(null, numbers)
        // Math.min.apply(null, numbers)

        // var numbers = [1, 2, 3, 4];
        // Math.max(...numbers)
        // Math.min(...numbers)

        // arguments.prototype.max = function() {
        //   return Math.max.apply(null, this);
        // };

        // arguments.prototype.min = function() {
        //   return Math.min.apply(null, this);
        // };
    }
    maxNum = Math.max.apply(null, arguments);
    minNum = Math.min.apply(null, arguments);
    console.log(maxNum, 'maxNum', minNum, 'minNum');
}

function sortNumber(a,b) {
    return a - b;
}

// sortNumbers(2,3,5,70);

// function sortNumbers(nums) {
//     var newArr = arguments;
//     newArr.sort(sortNumber);
//     console.log(newArr);
// }

function sortNumber(a,b) {
        console.log(a - b);

    return a - b;
}

function mainSortNumber() {
    var numArray = [140000, 104, 3, 99];
    numArray.sort(sortNumber);
    console.log(numArray.join(","));
}

//mainSortNumber();

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
function mainCompareNumeric() {
    var arr = [ 20, 4, 2, 15 ];

    arr.sort(compareNumeric);
    arr.reverse();
    console.log(arr);  // 1, 2, 15
}

//mainCompareNumeric();

var print_names = function() {
    for (var i=0; i<arguments.length; i++) {
        console.log(arguments[i]);
    }
}

//print_names('Alex','Mark');

function formSubmit(evt) {
    return false
    var arr = [ 20, 4, 2, 15 ];
    var value_1 = document.getElementById('js_input_1').value ;
    console.log(value_1);  // 1, 2, 15
}
//formSubmit();
// *Arrays : methods*

function strToArr() {
    var names = 'Маша, Петя, Марина, Василий';

    var arr = names.split(', ');

    for (var i = 0; i < arr.length; i++) {
        console.log( 'Вам сообщение ' + arr[i] );
    }
}
//strToArr();

// У метода split есть необязательный второй аргумент – ограничение на количество элементов в массиве. Если их больше, чем указано – остаток массива будет отброшен:
//console.log( "a,b,c,d".split(',', 2) ); // a,b

// Разбивка по буквам
function strDiv() {
    var str = "тест";

    console.log( str.split('') ); // т,е,с,т
}
//strDiv();

function strJoin() {
    var arr = ['Маша', 'Петя', 'Марина', 'Василий'];
    var str = arr.join(';');
    console.log( str );
}
//strJoin();

// Удаление из массива    - http://learn.javascript.ru/array-methods#удаление-из-массива
function deleteArrItem() {
    var arr = ["Я", "иду", "домой"];
    delete arr[1]; // значение с индексом 1 удалено
    // теперь arr = ["Я", undefined, "домой"];
    console.log( arr[1] ); // undefined
}
//deleteArrItem();

function funcXY(x,y) {
    return x * y;
}
//console.log(funcXY(2,4));


/*          CLOASURES           */

// function createCounter() {
//    var numberOfCalls = 0;
//    return function() {
//       console.log(++numberOfCalls)
//       return ++numberOfCalls;

//    }
// }
// var fn = createCounter();
// fn(); //1
// fn(); //2
// fn(); //3

// var fn = (function() {
//    var numberOfCalls = 0;
//    return function() {
//      console.log(++numberOfCalls)
//       return ++ numberOfCalls;
//    }
// })();

// fn()
// fn()
// fn()

// var createHelloFunction = function(name) {
//    return function() {
//        console.log('Hello, ' + name);
//    }
// }
// var sayHelloHabrahabr = createHelloFunction('Habrahabr');
// sayHelloHabrahabr(); //alerts «Hello, Habrahabr»
// sayHelloHabrahabr(); //alerts «Hello, Habrahabr»

showLinkIndex();
//https://myrusakov.ru/javascript-closures.html
function showLinkIndex() {
    var links = document.getElementsByClassName('js_link');

///////
// BAD
//////

    // for (var i = 0; i < links.length; i++) {
    //    links[i].onclick = function(e) {
    //         e.preventDefault();
    //         console.log(i);
    //    }
    // }

///////
// GOOD (CLOASURES)
//////

    for (var i = 0; i < links.length; i++) {
        (function(i) {
            links[i].onclick = function(e) {
                e.preventDefault();
               // console.log(i,'link');
            }
        })(i);
    }
}

/*    END      CLOASURES           */



// PROTOTYPES
//
// function Person(firstName, lastName, born) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.born = born;
// }
//
// Person.prototype.age = function() {
//     var now = new Date();
//     return now.getFullYear() - this.born;
// }
//
// var iam = new Person('Sasha', 'Madi', 1993);
//
// console.dir(iam);


class Person {
    constructor(firstName, lastName, born) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.born = born;
    }

    age() {
        var now = new Date();
        return now.getFullYear() - this.born;
    }
}

const iam = new Person('Sasha', 'Madi', 1993);


function Counter() {
    var count = 0;

    return function() {
        count++;
        return count;
    }
}



// call / apply

// Создадим простой объект, чтобы использовать его в качестве контекста
var context = { foo: "bar" };

// Функция, которая возвращает свойство «foo» контекста «this»
function returnFoo () {
  return this.foo;
}

// Свойства не существует в текущей области видимости, поэтому undefined
// console.log(returnFoo()); // => undefined

// Но если мы свяжем эту функцию с контекстом
var bound = returnFoo.bind(context);

// Свойство теперь в области видимости
// console.log(bound()); // => "bar"

// Существует несколько способов связывания функции с контекстом
// Call и apply позволяют вам вызывать функцию с нужным контекстом
returnFoo.call(context); // => bar
returnFoo.apply(context); // => bar

// Так же можно вложить функцию в объект
context.returnFoo = returnFoo;
context.returnFoo(); // => bar

//

// var counter = Counter();
// console.log(counter());
// console.log(counter());
//
// var secondCounter = Counter();
// console.log(secondCounter());
// console.log(secondCounter());
// console.log(secondCounter());



// for (var i = 0; i < 10; i++) {
//  // (function(i) {
//     setTimeout(function() {
//         console.log(i);
//     },0);
//     //console.log(i);
//     //})(i);
// }


// // with jQuery
// $(document).ready(function(){ /* ... */ });

// // shorter jQuery version
// $(function(){ /* ... */ });

// without jQuery (doesn't work in older IEs)
// document.addEventListener('DOMContentLoaded', function(){
//     // your code goes here
// }, false);

// // and here's the trick (works everywhere)
// function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
// // use like
// r(function(){
//     alert('DOM Ready!');
// });


// $(document).ready(function(){


// });


// Arrays



/*
$('.projects_carousel.owl-carousel').owlCarousel({
    autoplay: true,
    nav: true,
    mouseDrag: false,
    loop: true,

    responsiveClass:true,
    responsive:{
        0:{
            items: 1,
            nav: false,
            mouseDrag: true,
            stagePadding: 50,
            margin: 10,
        },
        768:{
            items:3,
        },
        1000:{
            items:4,
            nav:true,

        }
    }
});
$('.project_carousel.owl-carousel').owlCarousel({
    autoplay: false,
    items: 1,
    nav: true,
    mouseDrag: false,
    loop: true,

    responsive:{
        0:{
          // autoplay: false,
          touchDrag: false,
          mouseDrag: false,

        },
        768:{

        },
        1000:{


        }
    }

});

$('.slider.owl-carousel').owlCarousel({
    autoplay: false,
    items: 1,
    nav: true,
    mouseDrag: true,
    loop:true,

    responsive:{
        0:{
          // autoplay: false,
           stagePadding: 40,

        },
        768:{

        },
        1000:{

        }
    },



});
$('.faq_slider.owl-carousel').owlCarousel({
    autoplay: true,
    items: 1,
    nav: true,
    mouseDrag: false,
    loop:true,

    responsive:{
        0:{
          // autoplay: false,
           stagePadding: 40,

        },
        768:{

        },
        1000:{

        }
    }
});
*/
