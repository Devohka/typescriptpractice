
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



// =========================== ДИНАМІЧНА ТИПІЗАЦІЯ ===========================
// ДИНАМІЧНИЙ ТИП ЗАСТОСОВУЄМО КОЛИ НЕЗНАЄМО СКІЛЬКИ БУДЕ КЛЮЧІВ ТА З ЯКИМИ НАЗВАМИ І ЗНАЧЕННЯМИ АЛЕ ТИПИ ДАННИХ У НИХ БУДУТЬ ОДНАКОВІ

// type FrontEnd = {
//   murkUp: string
//   programming: string
//   frameWorks: string
// } дубляж однакової схеми

// const frontEnd: FrontEnd = {
//   murkUp: 'html css',
//   programming: 'javaScript',
//   frameWorks: 'React Ecspress Node.js',
// }

// type Pyton = {
//   frontEnd: string
//   beckEnd: string
// } дубляж однакової схеми

// const pyton: Pyton = {
//   frontEnd: 'web-programing, flask and jango',
//   beckEnd: 'data-siense, mashine-learnig',
// }

// type Design = {
//   webDesign: string
//   grafickDesign: string
//   motionDesign: string
// } дубляж однакової схеми

// const design: Design = {
//   webDesign: 'figma, UX /UI',
//   grafickDesign: 'photoShop, illustrator, lightRoom ',
//   motionDesign: 'afterEffects, premier',
// }

// ми створили під кожен курс свою типізацію і бачимо, що типи повторюються, тому ми можемо обєднати всі типи в один шаблон як динамічну типізацію

type Course = {
    [key: string]: string
}

const frontEnd: Course = {
  murkUp: 'html css',
  programming: 'javaScript',
  frameWorks: 'React Ecspress Node.js',
}
const pyton: Course = {
  frontEnd: 'web-programing, flask and jango',
  beckEnd: 'data-siense, mashine-learnig',
}
const design: Course = {
  webDesign: 'figma, UX /UI',
  grafickDesign: 'photoShop, illustrator, lightRoom ',
  motionDesign: 'afterEffects, premier',
}



// Динамічна типізація розкладу уроків

type Les = {
    [key: string]: string | number,

}

const math: Les = {
    lesNameMath: "math",
    lesTimeMath: 45,
    lesClassMath: 103
}

const english: Les = {
    lesNameEng: "english",
    lesTimeeng: 45,
    
}



// створити тип для об'єкта де ключ є рядок а значення або рядок, або число створити декілька об'єктів такого типу

type Picture = {
    [key: string]: string | number,
}

const pixelArtArtist: Picture = {
    style: "pixel art",
    paintingTime: 45,
    nameArtist: "Josh",
    price: 105,
    paintingName: "ah-one"
}

const paintingBuyer: Picture = {
    wallet: 2500,
    nameBuyer: "Oleg",
    paintingName: "ah-one"
}


const platformBay: Picture = {
    buyer: "Oleg",
    seller: "Josh",
    buyingPainting: "ah-one",
    pricePainting: 105
}


// -----------GENERIC-----------

// Дженеріки забезпучують типізацію функції чи класу, але не прив'язуються до аргументів які прийдуть у функцію/клас
// Дженерік це змінна, тобто динамічний тип даних. Для дженерік використовуємо <>
// function showInfo(msg: string): string{
//     return `Передане повідомлення: ${msg}`
// }

// const output: string = showInfo('Hi');

// console.log(output); // в даній функції ми маємо преедавати завжди рядок

// нижче ми хочем зробити типізацію динамічною

function showInfo<M,N>(msg1: M, msg2: N): string{ // динамічно підставляємо тип у дженерік <M>
    return `Передане повідомлення: ${msg1}, ${msg2}`
}

const output1: string = showInfo<string,string>('Hi','g');
const output2: string = showInfo<number,string>(4892,'k');

console.log(output1, output2);

// створимо функцію яка буде приймати масив будь якого типу
// додає до кожного елемента масива step та вертає оновлений масив
function arrPlusStep<N extends number[],S extends number>(arr: N,step: S): number[]{
    return arr.map(item => {
        return item + step
    })
}

const res1 = arrPlusStep<number[],number>([1, 2, 3], 5);
// const res2 = arrPlusStep<string[], string>(['a', 'b', 'c'], ' d');
console.log(res1);

// extends - це свого роду як первірка замість if, таким чином ми робимо додаткову валідацію аргументів
// якщо переданий аргумент буде відповідати умові extends то тоді цей аргумент буде вважатися валідним

const savedPasswords = '12345';

function checkUser<U extends {
    login: string,
    password: number | string,
}>(user: U, ): string {
    if (savedPasswords === user.password){
        return `Ви автирозовані!\nLOGIN: ${user.login}\nPASSWORD: ${user.password}`;
    }
    return `Ви не автирозовані!`
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

const inputNumberOne = document.querySelector(".numberOne")! as HTMLInputElement;
const inputNumberTwo = document.querySelector(".numberTwo")! as HTMLInputElement;

const buttonElementSum = document.querySelector(".buttonSum")! as HTMLButtonElement;
const buttonElementDifference = document.querySelector(".buttonDifference")! as HTMLButtonElement;
const buttonElementMultiplier = document.querySelector(".buttonMultiplier")! as HTMLButtonElement;
const buttonElementDivision = document.querySelector(".buttonDivision")! as HTMLButtonElement;

function calculatorFunctionSum<N extends number, M extends number>(num1: N, num2: M): void {
    const sum: number = num1 + num2;
    console.log(sum);
};

function calculatorFunctionDifference<N extends number, M extends number>(num1: N, num2: M): void {
    const sum: number = num1 - num2;
    console.log(sum);
};

function calculatorFunctionMultiplier<N extends number, M extends number>(num1: N, num2: M): void {
    const sum: number = num1 * num2;
    console.log(sum);
};


function calculatorFunctionDivision<N extends number, M extends number>(num1: N, num2: M): void {
    const sum: number = num1 / num2;
    console.log(sum);
};

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


const inputForm = document.querySelector('.inputLogin')! as HTMLInputElement
const btnSubmit = document.querySelector(
  '.buttonSubmitForm'
)! as HTMLButtonElement
const formSent = document.querySelector('.formLogin')! as HTMLFormElement

const logins: string[] = ['Stepan', '123123', 'qqwwpro']

formSent.addEventListener('submit', (e) => {
  e.preventDefault()
  // console.log(typeof inputForm.value)
  // console.log(logins.find((elem) => elem === inputForm.value))
  // logins.filter((elem) => elem === inputForm.value)
  if (logins.find((elem) => elem === inputForm.value)) {
    alert('логін знайдено')
  } else {
    alert('логін не знайдено')
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

const users: { firstName: string, lastName: string, age: number }[] = [
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
const ageFilter = (users: { firstName: string, lastName: string, age: number }[]) => {
    const filtredNamesUsers = users.filter(user => user.age >= 18).map(user => user.firstName);
    return filtredNamesUsers
}
console.log(ageFilter(users));


// Зробити статистику всіх тегів. Назву тега потрібно зробити ключем,
//  значення якого буде кількістьповторень тегів в масиві. Якщо властивість з ключем tag є,
//  збільшуємо його значення на 1 якщо властивості немає с таким ключем що в tag, створити і записати 1

const statsEl = document.querySelector('.stats') as HTMLDivElement;

type Tweet = {
    id: string,
    likes: number,
    tags: string[]
}

type Obj = {
    [key: string]: number
}

const tweets: Tweet[] = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

let stats: Obj = {};

tweets.forEach((tweet: Tweet) => {
    tweet.tags.forEach((tag: string) => {
        if (tag in stats) {
            stats[tag] = stats[tag]+1;
        } else {
            stats[tag] = 1;
        }
    })
});

console.log(stats);
Object.keys(stats).forEach((stat: string) => {
    statsEl.innerHTML += `${stat} - ${stats[stat]}<br>`
});