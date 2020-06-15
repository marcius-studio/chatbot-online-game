import response from './response'

export default {
    '1.1.1': {
        message: 'В какой стране впервые начали использовать робособак Boston Dynamics, которые патрулируют парки и просят соблюдать социальную дистанцию?',
        buttons: ['Сингапур', 'Бразилия', 'Франция'],
        next: '1.1.2',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'сингапур'
        }
    },
    '1.1.2': {
        message: 'Какие признаки подскажут, что для этой работы нужен робот?',
        buttons: ['Экстремальные условия', 'Квалификация сотрудников', 'Необычный подход'],
        next: '1.1.3',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'экстремальные условия'
        }
    },
    '1.1.3': {
        message: 'Выберите правильное определение робота.',
        buttons: ['Автоматизированное устройство', 'Искуственный интеллект', 'Механическое устройство'],
        next: '1.1.4',
        score: 10,
        response: response.low,
        func: (message) => {
            return message.toLowerCase() == 'автоматизированное устройство'
        }
    },

    '1.1.4': {
        message: 'Выполнение каких задач пока еще нельзя передать роботам? ',
        buttons: ['Исследование вулканов', 'Выращивание семян', 'Диагностика больного'],
        next: '1.1.5',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'диагностика больного'
        }
    },
    '1.1.5': {
        message: 'Какой из компонентов робота называют "мышцами"?',
        buttons: ['Привод', 'Пьезодвигатель', 'Двигатель'],
        next: '1.1.6',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'привод'
        }
    },
    '1.1.6': {
        message: 'Компания  ООО «КБ Аврора», которая специализируется на робототехнике и автономном управлении наземными транспортными средствами, базируется в городе:',
        buttons: ['Москва', 'Воронеж', 'Рязань'],
        next: '1.1.7',
        score: 10,
        response: response.middle,
        func: (message) => {
            return message.toLowerCase() == 'рязань'
        }
    },

    '1.1.7': {
        message: 'Как называется робот с двумя ведущими и одним опорным колесом?',
        buttons: ['Интегральный', 'Ортогональный', 'Дифференциальный'],
        next: '1.1.8',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'дифференциальный'
        }
    },
    '1.1.8': {
        message: 'Что означает аббревиатура RPM, которая встречается на моторах?',
        buttons: ['Момент вращения', 'Обороты в минуту', 'Скорость вращения'],
        next: '1.1.9',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'обороты в минуту'
        }
    },
    '1.1.9': {
        message: 'Кто впервые в печати использовал слово "роботика"?',
        buttons: ['Йозеф', 'Айзек Азимов', 'Карел Чапек'],
        next: '2',
        score: 10,
        response: response.high,
        func: (message) => {
            return message.toLowerCase() == 'айзек азимов'
        }
    },
}