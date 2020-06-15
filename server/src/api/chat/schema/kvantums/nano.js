import response from './response'

export default {
    '1.3.1': {
        message: 'Приставка нано- означает:',
        buttons: ['Очень маленькое', 'Среднего размера', 'Большое'],
        next: '1.3.2',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'очень маленькое'
        }
    },
    '1.3.2': {
        message: 'Фанаты Гарри Поттера точно знают, что алхимики занимались поиском:',
        buttons: ['Малахита', 'Философского камня', 'Алатырь-камня'],
        next: '1.3.3',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'философского камня'
        }
    },
    '1.3.3': {
        message: 'Какое вещество светится в темноте?',
        buttons: ['Фосфор', 'Кальций', 'Рубидий'],
        next: '1.3.4',
        score: 10,
        response: response.low,
        func: (message) => {
            return message.toLowerCase() == 'фосфор'
        }
    },

    '1.3.4': {
        message: 'Самым распространенным химическим элементом является:',
        buttons: ['Гелий', 'Водород', 'Азот'],
        next: '1.3.5',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'водород'
        }
    },
    '1.3.5': {
        message: 'Какой антибиотик изобрели самым первым?',
        buttons: ['Амоксициллин', 'Макропид', 'Пенициллин'],
        next: '1.3.6',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'пенициллин'
        }
    },
    '1.3.6': {
        message: 'Какое вещество сублимирует (переходит из твёрдого состояния в газообразное), выделяя малиновые пары?',
        buttons: ['Йод', 'Хлор', 'Бром'],
        next: '1.3.7',
        score: 10,
        response: response.middle,
        func: (message) => {
            return message.toLowerCase() == 'йод'
        }
    },

    '1.3.7': {
        message: 'Каких птиц брали в шахты, т.к. они чувствительны к содержанию метана в воздухе?',
        buttons: ['Колибри', 'Попугай', 'Канарейка'],
        next: '1.3.8',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'канарейка'
        }
    },
    '1.3.8': {
        message: 'Чем пахнет бытовой газ?',
        buttons: ['Природным газом', 'Одорантом', 'Дезодорантом'],
        next: '1.3.9',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'одорантом'
        }
    },
    '1.3.9': {
        message: 'Какой драгоценный металл спас Александра Македонского и военачальников от отравления?',
        buttons: ['Золото', 'Серебро', 'Платина'],
        next: '2',
        score: 10,
        response: response.high,
        func: (message) => {
            return message.toLowerCase() == 'серебро'
        }
    },
}