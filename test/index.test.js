const { add, isPalindrome } = require("../index");
const {test, expect} = require("eslint-plugin-jest")

test("Додає 2 + 3 і отримує 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("Перевіряє, що 'madam' є паліндромом", () => {
  expect(isPalindrome("madam")).toBe(true);
});

test("Перевіряє, що 'hello' не є паліндромом", () => {
  expect(isPalindrome("hello")).toBe(false);
});

test("Ігнорує регістр і символи у паліндромах", () => {
  expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
});
