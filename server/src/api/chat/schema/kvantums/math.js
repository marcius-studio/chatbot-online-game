import response from './response'

export default {
    '1.7.1': {
        message: 'Найди число, которое делится на 5 без остатка, а при делении на 2, 3 и 4 даёт в остатке 1.',
        buttons: ['25', '12', '30'],
        next: '1.7.2',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == '25'
        }
    },
    '1.7.2': {
        message: 'Купили полтора килограмма персиков, полкилограмма черники и три с половиной килограмма яблок. Какова масса всей покупки?',
        buttons: ['5000г', '5050г', '5500г'],
        next: '1.7.3',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == '5500г'
        }
    },
    '1.7.3': {
        message: 'Как называется место, занимаемое цифрой в записи числа?',
        buttons: ['Разряд', 'Класс', 'Координата'],
        next: '1.7.4',
        score: 10,
        response: response.low,
        func: (message) => {
            return message.toLowerCase() == 'разряд'
        }
    },

    '1.7.4': {
        message: 'У трех девочек 10 карандашей. У Ани и Оли вместе 8 карандашей. У Оли и Кати вместе 5 карандашей. Сколько карандашей у Кати?',
        buttons: ['5', '2', '3'],
        next: '1.7.5',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == '2'
        }
    },
    '1.7.5': {
        message: 'Маме и дочке вместе 28 лет. Мама старше дочки на 22 года, сколько лет маме и дочке?',
        buttons: ['26 и 2', '25 и 3', '22 и 6'],
        next: '1.7.6',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == '25 и 3'
        }
    },
    '1.7.6': {
        message: 'Число яблок в корзине – двузначное. Яблоки можно разделить поровну между 2, 3 и 5 детьми, но нельзя разделить на 4. Сколько яблок в корзине?',
        buttons: ['30', '25', '40'],
        next: '1.7.7',
        score: 10,
        response: response.middle,
        func: (message) => {
            return message.toLowerCase() == '30'
        }
    },

    '1.7.7': {
        message: 'У ёжика было 3 целых яблока, 10 половинок и 8 четвертинок. Сколько это яблок?',
        buttons: ['10', '12', '14'],
        next: '1.7.8',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == '10'
        }
    },
    '1.7.8': {
        message: 'Ежемесячная плата за телефон составляет 280 рублей в месяц. Сколько рублей составит ежемесячная плата за телефон, если она вырастет на 5%?',
        buttons: ['294р', '285р', '295р'],
        next: '1.7.9',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == '294р'
        }
    },
    '1.7.9': {
        message: 'На столе лежит 100 листов бумаги. За каждые 10 секунд можно посчитать 10 листов. Сколько секунд понадобится, чтобы посчитать 80 листов?',
        buttons: ['80с', '20с', '100с'],
        next: '2',
        score: 10,
        response: response.high,
        func: (message) => {
            return message.toLowerCase() == '20с'
        }
    },
}