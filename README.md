## Отчет по индивидуальной работе N2
#### Студент группы I2302 : Джуринский Андрей
#### Преподаватель: Нартя Никита

## Цель
Ознакомиться с продвинутыми функциями JS, включая асинзронный JS, обработку ошибок, модули и тд

## Создаю, экспортирую
Первым делом создаем функцию, для получения случайной активности
```js
export async function getRandomActivity() {
    const answer = await fetch('https://www.boredapi.com/api/activity/')
    if(answer.ok){
        const data = await answer.json()
        return data.activity
    }else{
        throw new Error ('К сожалению, произошла ошибка')
    }
}
```
С помощью функции `fetch` я отправляю GET запрос на получение активности, затем сохраняю ее в переменной `answer`.
`if(answer.ok)...` - проверяю, если запрос выполнен успешно. ***`.ok` - булево значение, которое указывает на то, успешен ли ответ. Если ответ успешен, то используем метод `.json()` для преобразование ответа и передачи его в переменную `data`. `await` - ожидание завершения. `throw new Error('...')` - создает экземпляр объекта ошибки с заданным сообщением и `throw` выбрасывает эту ошибку для ее приема в блок `catch`.

## Импортируем и дорабатываем
```js
import { getRandomActivity } from "./activity.js";
async function UpdateActivity(){
    try {
        const randomActText = await  getRandomActivity()
        document.getElementById('activity').innerText = randomActText  
    } catch (error) {
        document.getElementById('activity').innerText = error.message
    }
    setTimeout(() => {
        UpdateActivity()
    }, 60000);
}
UpdateActivity()
```
В первой строке я импортирую функцию `getRandomActivity` из модуля `activity.js`. Далее объявляю асинхронную функцию для позволения использования оператора `await`. Вызываю функцию и сохраняю результат в переменную `randomActText`.ПОлучениный текст присваивается одному из элементов html кода с `id('activity')`. Это все выполнялось в блоке `try`, тк данный блок кода может вызвать исключение. `catc (error)` выполнится, если в блоке try выйдет ошибка подключения. По тому же принципу хтмл текст будет присвоен тексту нашей ошибки(который мы утсановили раньше).
`setTimeout() => {UpdateActivity()}, 60000)}` - данная функция вызывает функцию `updateActivity` каждые 60 секунд.

## Ответы на вопросы
1. _Какое значение возвращает функция fetch?_
2. _Что представляет собой Promise?_
3. _Какие методы доступны у объекта Promise?_
4. _Каковы основные различия между использованием async / await и Promise?_
--------------------------------------------------------------
1) Функция `fetch` возвращает объект промис, которы1 является запросом к серверу и ожиданию подключения ответа
2) Промис является объектом - результатом асинхронной операциии. Он имеет три состояния:
`pending` - ожидание
`fulfulled` - выполнено
`rejected` - отклонено
3) Методы промис:
then() - обработка успешного выполнения операции
catch() - обработка ошибок
finally() - выполнение каких-либо действий после завершения операции (независимо от ее исхода)
4) Промис - метод работы с асинхронными операциями, который использует цепочку вызовов методом `then`, `cath`, `finally`. 
`async/await` - более понятен и читабелен по сравнению с цепочкой вызовов. `async` - объявление асинхронной функци; `await` - ждет выполнение промиса ил возвращение его ошибки, предварительно остановив выполнение функции
