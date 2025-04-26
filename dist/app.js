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
