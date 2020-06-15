import response from './response'

export default {
    '1.2.1': {
        message: 'Сколько винтов у квадрокоптера?',
        buttons: ['2 винта', '4 винта', '8 винтов'],
        next: '1.2.2',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == '4 винта'
        }
    },
    '1.2.2': {
        message: 'Какая часть квадрокоптера является главной?',
        buttons: ['Мотор', 'Рама', 'Полётный контроллер'],
        next: '1.2.3',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'полётный контроллер'
        }
    },
    '1.2.3': {
        message: 'Какая самая известная фирма по производству коптеров?',
        buttons: ['Syma', 'Tarot', 'DJI'],
        next: '1.2.4',
        score: 10,
        response: response.low,
        func: (message) => {
            return message.toLowerCase() == 'dji'
        }
    },

    '1.2.4': {
        message: 'Что такое БПЛА?',
        buttons: ['Квадрокоптер', 'Дрон', 'Дельтаплан'],
        next: '1.2.5',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'дрон'
        }
    },
    '1.2.5': {
        message: 'Как называется вертолет с 5 винтами?',
        buttons: ['Гексакоптер', 'Тетракоптер', 'Пентакоптер'],
        next: '1.2.6',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'пентакоптер'
        }
    },
    '1.2.6': {
        message: 'Чем отличается коллекторный мотор от бесколлекторного?',
        buttons: ['Составными частями', 'Размером', 'Весом'],
        next: '1.2.7',
        score: 10,
        response: response.middle,
        func: (message) => {
            return message.toLowerCase() == 'составными частями'
        }
    },

    '1.2.7': {
        message: 'В каком году был запущен один из первых квадрокоптеров?',
        buttons: ['1911', '1922', '1933'],
        next: '1.2.8',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == '1922'
        }
    },
    '1.2.8': {
        message: 'Что такое тангаж?',
        buttons: ['Угол подъема', 'Угол атаки', 'Курс судна'],
        next: '1.2.9',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'угол подъема'
        }
    },
    '1.2.9': {
        message: 'За что отвечает датчик гироскоп?',
        buttons: ['Положение коптера', 'Угол наклона', 'Направление движения'],
        next: '2',
        score: 10,
        response: response.high,
        func: (message) => {
            return message.toLowerCase() == 'угол наклона'
        }
    },
}