// index.js

/**
 * Додає два числа.
 * @param {number} a - Перше число.
 * @param {number} b - Друге число.
 * @returns {number} - Сума чисел.
 */
function add(a, b) {
    return a + b;
  }
  
  /**
   * Перевіряє, чи слово є паліндромом.
   * @param {string} word - Слово для перевірки.
   * @returns {boolean} - true, якщо слово є паліндромом, false — якщо ні.
   */
  function isPalindrome(word) {
    const cleaned = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
  }
  

  module.exports = { add, isPalindrome };
  