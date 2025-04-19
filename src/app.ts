
// ПРАВИЛО ХОРОШОГО ТОНУ - ВСЮ ТИПІЗАЦІЮ ВИНОСИМО НА ВЕРХ ФАЙЛУ, АБО В ОКРЕМИЙ ФАЙЛ ТА ІМПОРТУЄМО


// ТПИЗАЦІЯ ПРОСТИХ ТИПІВ


// const prace = 123;
// const massage = "hello world";
// const isOpenModal = false;
// const basket = null;
// const data = undefined;


//якщо ми не типізуємо дані у зміних то у typeScript НЕЯВНА типізація

// ЯВНА ТИПІЗАЦІЯ:

const prace: number = 123;
const massage: string = "hello world";
const isOpenModal: boolean = false;
const basket: null = null;
const data: undefined = undefined;

// Якщо в зміній ми плануємо змінювати значення бажано її типізувати

let myAge = 15;
// myAge = "15"; буде помилка бо вона неявно типізована і чекає число



// ТИПІЗАЦІЯ СКЛАДНИХ ТИПІВ

// типізація  масивів

const numbers: number[] = [1, 2, 3, 4, 5];
// numbers.push("5"); буде помилка бо вона типізована і чекає число


// типізація об'єктів

// const user = {
//     name: "Lorens",
//     age: 75,
// }

// типізуємо цей об'єкт

// const user: {name: string, age: number} = {
//     name: "Lorens",
//     age: 75,
// }


// типізуємо за іншим способом

type User = {  // Можна експортувати і в даному випадку назви ключів повині співпадати
    name: string,
    age: number | string
}

const user: User = {
    name: "Lorens",
    age: "75", // 75 
}

// user.login = "Anny"; //буде помилка тому що типізація User не очікує такий ключ

// типізація тиких слідкує чи всі властивстивості додані які вказані в типізації

type LessonType = "typeScript" // так можна зарезервувати значення;

// const lesson: LessonType = "javaScript"; // буде помилка тому що lesson чекає рядок "typeScript"
// це може використовуватись у бібліотеках, наприклад: у "UI material" де припустимо в кнопці тіки три значення

// type Size = "small" | "medium" | "large";


// ТИП ДАНИХ any використовується у ситуації коли ми у зміну бажаємо отримати будь який тип даних; ДОЗВОЛЯЄ ПЕРЕПИСАТИ ІНШИЙ ТИП
// зручний для тестування коду наприклад немає часу на типізацію даних;
// НЕ РЕКОМЕНДОВАНИЙ

let someData: any = 1345;

someData = "test";

someData = false;

// Тип unknown - невідомий тип, схожий на any - ігнорує перевірку типів, АЛЕ при зміні значення надає помилку на відміну від any;

let someInfo: unknown = "test";

someInfo = 12343.68976758;

// someInfo.toFixed(3);

// Тип enum може більше конкретизувати значення і дозволяє не хардкодити (робити динамічними) їх 

// перший спосіб типізації:
// type Size = "small" | "medium" | "large";
// const button: Size = "large";

// другий сопсіб типізації:
enum Sizes  {
    small = "small",
    medium = "medium",
    large = "large"
}
const button: Sizes = Sizes.large;



// Типізація функцій

// у функції можемо типізувати параметри та значення функції

// У функції треба типізувати дані які будуть вертатися в return,
// це робимо після параметрів - ставимо : і прописуємо тип даних який має вернути функція
// function makeMessage (num1: number, num2: number): string {
//     return `Число 1 це - ${num1}, 2 це - ${num2}`;
// };

// console.log(makeMessage(1, 2));

// Що коли функція нічого не повертає? вказуємо void

function makeMessage (num1: number, num2: number): void {
    console.log(`Число 1 це - ${num1}, 2 це - ${num2}`);
};

makeMessage(1, 2);


// Якщо функція повертає складний тип даних то можемо під нього зробити окремий type

type NewUser = {
    name: string,
    age: number
}

function makeUser(name: string, age: number): NewUser {
    return {
        name,
        age
    };
};

console.log(makeUser("Anny", 15));


// як типізувати метод об'єкту?


type Hero = {
    name: string,
    ep: number,
    classHero: string,
    health: number,

    run: (a: string, b: number) => string;
    
}

const hero: Hero = {
    name: "Hero",
    ep: 15,
    classHero: "wizard",
    health: 150,


    run(a, b) {
        const ab = a + b;
        return `Герой ${this.name} здійснив побіг`;
    }
}
console.log(hero.run("Hero", 54));



// 

type CourseUser = {
    course: string,
    duration: number,
    mark?: number // вказуємо що це поле не обов'язкове та може бути відсутнє
}

const student: CourseUser = {
    course: "typeScript",
    duration: 12,
    mark: 10,
}

const teacher: CourseUser = {
    course: "typeScript",
    duration: 12,
}

console.log(student);
console.log(teacher);

// індексовані влатсивості (index properties) використовємо коли є різні об'єкти, з різними наченнями, але з однаковою типізацією

// type Product = {
//     id: number,
//     qty: number,
//     price: number,
// }

// можемо зробити універсальний тип з динамічними ключами та значеннями

type Product = {
    [key: string]: number;
}
const product1:Product = {
    id: 44,
    qty: 53,
    price: 10
};