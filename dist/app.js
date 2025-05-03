"use strict";
// ПРАВИЛО ХОРОШОГО ТОНУ - ВСЮ ТИПІЗАЦІЮ ВИНОСИМО НА ВЕРХ ФАЙЛУ, АБО В ОКРЕМИЙ ФАЙЛ ТА ІМПОРТУЄМО
// ТПИЗАЦІЯ ПРОСТИХ ТИПІВ
// const prace = 123;
// const massage = "hello world";
// const isOpenModal = false;
// const basket = null;
// const data = undefined;
//якщо ми не типізуємо дані у зміних то у typeScript НЕЯВНА типізація
// ЯВНА ТИПІЗАЦІЯ:
const prace = 123;
const massage = "hello world";
const isOpenModal = false;
const basket = null;
const data = undefined;
// Якщо в зміній ми плануємо змінювати значення бажано її типізувати
let myAge = 15;
// myAge = "15"; буде помилка бо вона неявно типізована і чекає число
// ТИПІЗАЦІЯ СКЛАДНИХ ТИПІВ
// типізація  масивів
const numbers = [1, 2, 3, 4, 5];
const user = {
    name: "Lorens",
    age: "75", // 75 
};
// const lesson: LessonType = "javaScript"; // буде помилка тому що lesson чекає рядок "typeScript"
// це може використовуватись у бібліотеках, наприклад: у "UI material" де припустимо в кнопці тіки три значення
// type Size = "small" | "medium" | "large";
// ТИП ДАНИХ any використовується у ситуації коли ми у зміну бажаємо отримати будь який тип даних; ДОЗВОЛЯЄ ПЕРЕПИСАТИ ІНШИЙ ТИП
// зручний для тестування коду наприклад немає часу на типізацію даних;
// НЕ РЕКОМЕНДОВАНИЙ
let someData = 1345;
someData = "test";
someData = false;
// Тип unknown - невідомий тип, схожий на any - ігнорує перевірку типів, АЛЕ при зміні значення надає помилку на відміну від any;
let someInfo = "test";
someInfo = 12343.68976758;
// someInfo.toFixed(3);
// Тип enum може більше конкретизувати значення і дозволяє не хардкодити (робити динамічними) їх 
// перший спосіб типізації:
// type Size = "small" | "medium" | "large";
// const button: Size = "large";
// другий сопсіб типізації:
var Sizes;
(function (Sizes) {
    Sizes["small"] = "small";
    Sizes["medium"] = "medium";
    Sizes["large"] = "large";
})(Sizes || (Sizes = {}));
const button = Sizes.large;
// Типізація функцій
// у функції можемо типізувати параметри та значення функції
// У функції треба типізувати дані які будуть вертатися в return,
// це робимо після параметрів - ставимо : і прописуємо тип даних який має вернути функція
// function makeMessage (num1: number, num2: number): string {
//     return `Число 1 це - ${num1}, 2 це - ${num2}`;
// };
// console.log(makeMessage(1, 2));
// Що коли функція нічого не повертає? вказуємо void
function makeMessage(num1, num2) {
    console.log(`Число 1 це - ${num1}, 2 це - ${num2}`);
}
;
makeMessage(1, 2);
function makeUser(name, age) {
    return {
        name,
        age
    };
}
;
console.log(makeUser("Anny", 15));
const hero = {
    name: "Hero",
    ep: 15,
    classHero: "wizard",
    health: 150,
    run(a, b) {
        const ab = a + b;
        return `Герой ${this.name} здійснив побіг`;
    }
};
console.log(hero.run("Hero", 54));
const student = {
    course: "typeScript",
    duration: 12,
    mark: 10,
};
const teacher = {
    course: "typeScript",
    duration: 12,
};
console.log(student);
console.log(teacher);
const product1 = {
    id: 44,
    qty: 53,
    price: 10
};
const frontEnd = {
    murkUp: 'html css',
    programming: 'javaScript',
    frameWorks: 'React Ecspress Node.js',
};
const pyton = {
    frontEnd: 'web-programing, flask and jango',
    beckEnd: 'data-siense, mashine-learnig',
};
const design = {
    webDesign: 'figma, UX /UI',
    grafickDesign: 'photoShop, illustrator, lightRoom ',
    motionDesign: 'afterEffects, premier',
};
const math = {
    lesNameMath: "math",
    lesTimeMath: 45,
    lesClassMath: 103
};
const english = {
    lesNameEng: "english",
    lesTimeeng: 45,
};
const pixelArtArtist = {
    style: "pixel art",
    paintingTime: 45,
    nameArtist: "Josh",
    price: 105,
    paintingName: "ah-one"
};
const paintingBuyer = {
    wallet: 2500,
    nameBuyer: "Oleg",
    paintingName: "ah-one"
};
const platformBay = {
    buyer: "Oleg",
    seller: "Josh",
    buyingPainting: "ah-one",
    pricePainting: 105
};
// -----------GENERIC-----------
// Дженеріки забезпучують типізацію функції чи класу, але не прив'язуються до аргументів які прийдуть у функцію/клас
// Дженерік це змінна, тобто динамічний тип даних. Для дженерік використовуємо <>
// function showInfo(msg: string): string{
//     return `Передане повідомлення: ${msg}`
// }
// const output: string = showInfo('Hi');
// console.log(output); // в даній функції ми маємо преедавати завжди рядок
// нижче ми хочем зробити типізацію динамічною
function showInfo(msg1, msg2) {
    return `Передане повідомлення: ${msg1}, ${msg2}`;
}
const output1 = showInfo('Hi', 'g');
const output2 = showInfo(4892, 'k');
console.log(output1, output2);
// створимо функцію яка буде приймати масив будь якого типу
// додає до кожного елемента масива step та вертає оновлений масив
function arrPlusStep(arr, step) {
    return arr.map(item => {
        return item + step;
    });
}
const res1 = arrPlusStep([1, 2, 3], 5);
// const res2 = arrPlusStep<string[], string>(['a', 'b', 'c'], ' d');
console.log(res1);
// extends - це свого роду як первірка замість if, таким чином ми робимо додаткову валідацію аргументів
// якщо переданий аргумент буде відповідати умові extends то тоді цей аргумент буде вважатися валідним
const savedPasswords = '12345';
function checkUser(user) {
    if (savedPasswords === user.password) {
        return `Ви автирозовані!\nLOGIN: ${user.login}\nPASSWORD: ${user.password}`;
    }
    return `Ви не автирозовані!`;
}
console.log(checkUser({
    login: "Name",
    password: "12345"
}));
console.log(checkUser({
    login: "Name",
    password: 12345
}));
// Написати функццію яка приймає два числа і додає їх(калькулятор)
const inputNumberOne = document.querySelector(".numberOne");
const inputNumberTwo = document.querySelector(".numberTwo");
const buttonElementSum = document.querySelector(".buttonSum");
const buttonElementDifference = document.querySelector(".buttonDifference");
const buttonElementMultiplier = document.querySelector(".buttonMultiplier");
const buttonElementDivision = document.querySelector(".buttonDivision");
function calculatorFunctionSum(num1, num2) {
    const sum = num1 + num2;
    console.log(sum);
}
;
function calculatorFunctionDifference(num1, num2) {
    const sum = num1 - num2;
    console.log(sum);
}
;
function calculatorFunctionMultiplier(num1, num2) {
    const sum = num1 * num2;
    console.log(sum);
}
;
function calculatorFunctionDivision(num1, num2) {
    const sum = num1 / num2;
    console.log(sum);
}
;
buttonElementSum.addEventListener("click", () => {
    calculatorFunctionSum(Number(inputNumberOne.value), Number(inputNumberTwo.value));
});
buttonElementDifference.addEventListener("click", () => {
    calculatorFunctionDifference(Number(inputNumberOne.value), Number(inputNumberTwo.value));
});
buttonElementMultiplier.addEventListener("click", () => {
    calculatorFunctionMultiplier(Number(inputNumberOne.value), Number(inputNumberTwo.value));
});
buttonElementDivision.addEventListener("click", () => {
    calculatorFunctionDivision(Number(inputNumberOne.value), Number(inputNumberTwo.value));
});
// Напиши скрипт пошуку логіна
//  - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
//  - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
const inputForm = document.querySelector('.inputLogin');
const btnSubmit = document.querySelector('.buttonSubmitForm');
const formSent = document.querySelector('.formLogin');
const logins = ['Stepan', '123123', 'qqwwpro'];
formSent.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(typeof inputForm.value)
    // console.log(logins.find((elem) => elem === inputForm.value))
    // logins.filter((elem) => elem === inputForm.value)
    if (logins.find((elem) => elem === inputForm.value)) {
        alert('логін знайдено');
    }
    else {
        alert('логін не знайдено');
    }
    // logins.map((data) => {
    // //     if (inputForm.value === data) {
    // //         alert("w")
    // //     } else {
    // //         alert("wawda")
    // //     }
    // //     console.log(data)
    // })
});
// ? Напишіть функцію, яка отримує масив об'єктів і повертає масив імен з тих об'єктів,
// ? які мають вік більше 18 років.
const users = [
    {
        firstName: 'Semen',
        lastName: 'Antipyuk',
        age: 15
    }, {
        firstName: 'Michael',
        lastName: 'Ivanov',
        age: 15
    }, {
        firstName: 'Mykita',
        lastName: 'Pupkin',
        age: 20,
    }, {
        firstName: 'Ivan',
        lastName: 'Llalala',
        age: 22,
    }
];
const ageFilter = (users) => {
    const filtredNamesUsers = users.filter(user => user.age >= 18).map(user => user.firstName);
    return filtredNamesUsers;
};
console.log(ageFilter(users));
// Зробити статистику всіх тегів. Назву тега потрібно зробити ключем,
//  значення якого буде кількістьповторень тегів в масиві. Якщо властивість з ключем tag є,
//  збільшуємо його значення на 1 якщо властивості немає с таким ключем що в tag, створити і записати 1
const statsEl = document.querySelector('.stats');
const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];
let stats = {};
tweets.forEach((tweet) => {
    tweet.tags.forEach((tag) => {
        if (tag in stats) {
            stats[tag] = stats[tag] + 1;
        }
        else {
            stats[tag] = 1;
        }
    });
});
console.log(stats);
Object.keys(stats).forEach((stat) => {
    statsEl.innerHTML += `${stat} - ${stats[stat]}<br>`;
});
