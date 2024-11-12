// // annotation(명시하다).ts

// const num = 10;
// const coffee = "커피";

// const num1: Number = 10; // 여기에는 숫자만 들어올 수 있습니다.

// // 떡볶이
// const food: String = "떡볶이";

// // 배열
// const numList: number[] = [1, 2, 3, 4, 5];

// quiz1. student 타입은 이름, 나이, 전공을 가지는 변수를 만들어주세요

// const student: { name: string; age: number; major: string } = {
//   name: "최보리",
//   age: 9,
//   major: "짖기",
// };

// 학생 타입 배열 만들어주셈 - 배열은 오브젝트

const studentlist: { name: string; age: number; major: string }[] = [
  { age: 21, major: "태권도", name: "장미" },
  { age: 36, major: "화학", name: "덕구" },
];

const helloName = (name: string) => `${name} 안녕!`;
