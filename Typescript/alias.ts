type Student = { name: string; age: number; major: string };

const kim: Student = {
  name: "하빈",
  age: 22,
  major: "물리학과",
};

const list1: Student[] = [
  { name: "명수", age: 23, major: "미대생" },
  { name: "재석", age: 25, major: "의대생" },
];

// Coffee 타입알리아스 만들고
// 이름, 샷갯수, 성분 문자열 배열
// 변수 하나 만들고 쉬는시간

type Coffee = { name: string; shot: number; ingredient: string };

const coffeeList: Coffee[] = [
  { name: "아메리카노", shot: 2, ingredient: "커피콩" },
  { name: "라떼", shot: 4, ingredient: "milk" },
];

type Person = { name: string; age: number };
type University = { major: string; studentId: string };
type PartTime = { place: string; wage: number };

const song: Person & University = {
  name: "송유빈",
  age: 24,
  major: "컴퓨터공학과",
  studentId: "20181111",
};
const lee: Person & PartTime = {
  name: "이소룡",
  age: 68,
  place: "incheon",
  wage: 10000,
};

type Hamburger = { hamburgerName: string; hamburgerKcal: number };
type SideMenu = { sideName: string; sideKcal: string };
type Drink = { drinkName: string; drinkKcal: number };

const guest1: Hamburger = { hamburgerName: "상하이버거", hamburgerKcal: 400 };
const guest2: Hamburger & Drink = {
  hamburgerName: "치즈버거",
  hamburgerKcal: 300,
  drinkName: "제로콜라",
  drinkKcal: 0,
};
