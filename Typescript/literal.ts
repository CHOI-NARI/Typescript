// 서브웨이
// 샌드위치 = {빵,치즈,토핑,소스1,소스2}
// 쿠키 = {이름}
// 음료 = {이름}

type Bread = "화이트" | "하티" | "파마산" | "위트" | "허니오트" | "플랫브래드";
type Cheese = "아메리칸" | "슈레드" | "모짜렐라";
type Topping =
  | "토마토"
  | "올리브"
  | "아보카도"
  | "양상추"
  | "양파"
  | "계란"
  | "피망";
type Source =
  | "마요네즈"
  | "머스타드"
  | "사우스웨스트"
  | "허니 머스타드"
  | "후추";

type Sandwich = {
  bread: Bread;
  cheese: Cheese;
  topping: Topping;
  saurce1: Source;
  saurce2: Source;
};

type Cookie = {
  cookieName: "더블초코칩" | "오트밀" | "라즈베리" | "마카다미아";
};
type Drink1 = { drinkName: "콜라" | "사이다" | "제로콜라" | "탄산수" };

const comboSet: Sandwich & Cookie & Drink1 = {
  bread: "파마산",
  cheese: "모짜렐라",
  cookieName: "더블초코칩",
  drinkName: "콜라",
  saurce1: "후추",
  saurce2: "마요네즈",
  topping: "올리브",
};
