/**
 * Задача 1.
 *
 * Напишите функцию postpone, которая выводит в консоль счетчик с задержкой.
 *
 * Функция принимает 3 параметра:
 * - Первый параметр `start` — число, c которого начнется отсчет;
 * - Второй параметр `end` — верхний порог, до которого будет идти отсчет;
 * - Третий параметр `delay` — это время в `мс` между выводами.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит валидацию входных параметров на тип number;
 * - Обязательно использование таймера setTimeout и цикла for;
 * - Функция должна уметь считать в обе стороны.
 */

// Решение
function postpone(start, end, delay) {
    const increment = start < end ? 1 : -1;
    let currValue = start;

    function go() {
        setTimeout(function () {
            console.log(currValue);

            if (currValue !== end) {
                currValue += increment;
                go();
            }
        }, delay);
    }

    go();
}

postpone(1, 3, 1000);
// 1
// 2
// 3
postpone(3, 1, 1001);
// 3
// 2
// 1

exports.postpone = postpone;
