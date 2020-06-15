import response from './response'

export default {
    '1.8.1': {
        message: 'Арсений выиграл 2 партии, Матвей проиграл 2 партии, 1 партию они сыграли вничью. Сколько партий сыграно?',
        buttons: ['1', '2', '3'],
        next: '1.8.2',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == '3'
        }
    },
    '1.8.2': {
        message: 'Как называется игровое шахматное поле?',
        buttons: ['Палка', 'Доска', 'Коробка'],
        next: '1.8.3',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'доска'
        }
    },
    '1.8.3': {
        message: 'Фигуры какого цвета всегда начинают партию первыми?',
        buttons: ['Белые', 'Черные', 'По очереди'],
        next: '1.8.4',
        score: 10,
        response: response.low,
        func: (message) => {
            return message.toLowerCase() == 'белые'
        }
    },

    '1.8.4': {
        message: 'Какая страна считается родиной шахмат?',
        buttons: ['Индия', 'Россия', 'Англия'],
        next: '1.8.5',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'индия'
        }
    },
    '1.8.5': {
        message: 'Кто придумал шахматную игру?',
        buttons: ['Гарри Каспаров', 'Мудрец Сисса', 'Гомер'],
        next: '1.8.6',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'мудрец сисса'
        }
    },
    '1.8.6': {
        message: 'Самое высокое звание, которое дают шахматистам?',
        buttons: ['Мастер', 'Кандидат в мастера', 'Гроссмейстер'],
        next: '1.8.7',
        score: 10,
        response: response.middle,
        func: (message) => {
            return message.toLowerCase() == 'гроссмейстер'
        }
    },

    '1.8.7': {
        message: 'Как называют партию по быстрым шахматам?',
        buttons: ['Блиц', 'Этюд', 'Цейтнот'],
        next: '1.8.8',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'блиц'
        }
    },
    '1.8.8': {
        message: 'Кто оставался чемпионом мира по шахматам дольше всех в истории?',
        buttons: ['Эммануэль Ласкер', 'Вильгельм Стейниц', 'Владимир Крамник'],
        next: '1.8.9',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'эммануэль ласкер'
        }
    },
    '1.8.9': {
        message: 'Какой период в шахматном мире принято называть «смутным временем»?',
        buttons: ['1993 по 2006', 'конец 2016', '2000 по 2019'],
        next: '2',
        score: 10,
        response: response.high,
        func: (message) => {
            return message.toLowerCase() == '1993 по 2006'
        }
    },
}