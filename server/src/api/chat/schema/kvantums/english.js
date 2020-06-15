import response from './response'

export default {
    '1.6.1': {
        message: 'Столица Великобритании?',
        buttons: ['Лондон', 'Эдинбург', 'Вашингтон'],
        next: '1.6.2',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'лондон'
        }
    },
    '1.6.2': {
        message: 'На каком языке говорят в Великобритании?',
        buttons: ['Английский', 'Французский', 'Немецкий'],
        next: '1.6.3',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'английский'
        }
    },
    '1.6.3': {
        message: 'Что такое Биг Бен?',
        buttons: ['Башня', 'Часы', 'Колокол'],
        next: '1.6.4',
        score: 10,
        response: response.low,
        func: (message) => {
            return message.toLowerCase() == 'колокол'
        }
    },

    '1.6.4': {
        message: 'Любимый цветок англичан?',
        buttons: ['Роза', 'Пион', 'Хризантема'],
        next: '1.6.5',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'роза'
        }
    },
    '1.6.5': {
        message: 'Сколько лет Лондону?',
        buttons: ['более 2000 лет', 'менее 2000 лет', 'более 3000 лет'],
        next: '1.6.6',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'более 2000 лет'
        }
    },
    '1.6.6': {
        message: 'Кто является официальной главой государства?',
        buttons: ['Король или королева', 'Президент', 'Премьер-министр'],
        next: '1.6.7',
        score: 10,
        response: response.middle,
        func: (message) => {
            return message.toLowerCase() == 'король или королева'
        }
    },

    '1.6.7': {
        message: 'Choose the noun that cannot be used with the adjective.',
        buttons: ['design', 'architecture', 'detonator'],
        next: '1.6.8',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'detonator'
        }
    },
    '1.6.8': {
        message: 'Choose the noun that cannot be used with the adjective.',
        buttons: ['gravity', 'protection', 'daylight harvesting'],
        next: '1.6.9',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'gravity'
        }
    },
    '1.6.9': {
        message: 'Choose the adjectives with the same or similar meaning.',
        buttons: ['inadequate-minor', 'negligible-insignificant', 'slight-bright '],
        next: '2',
        score: 10,
        response: response.high,
        func: (message) => {
            return message.toLowerCase() == 'negligible-insignificant'
        }
    },
}