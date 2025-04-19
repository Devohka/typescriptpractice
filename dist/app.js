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
