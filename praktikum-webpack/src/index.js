import "./styles/index.css";

const numbers = [2, 3, 5];

// Стрелочная функция. Не запнётся ли на ней Internet Explorer?
const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); // 4, 6, 10

// теперь картинки можно импортировать,
// вебпак добавит в переменные правильные пути
import jordanImage from "./images/jordan.png";

const whoIsTheGoat = [
  // меняем исходные пути на переменные
  { name: "Michael Jordan", link: jordanImage },
];
