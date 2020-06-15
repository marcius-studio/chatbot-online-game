import response from './response'

export default {
    '1.5.1': {
        message: 'Гусеница не длиннее червяка. Червяк не длиннее гусеницы. Кто длиннее?',
        buttons: ['Червяк', 'Гусеница', 'Одинаковые'],
        next: '1.5.2',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'одинаковые'
        }
    },
    '1.5.2': {
        message: 'У Олиной мамы 5 дочек: Аня, Валя, Галя, Даша. Как зовут пятую?',
        buttons: ['Белла', 'Оля', 'Ника'],
        next: '1.5.3',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'оля'
        }
    },
    '1.5.3': {
        message: 'В доме 4 этажа. Чем выше этаж, тем больше людей там живет. На какой этаж чаще ездит лифт?',
        buttons: ['1', '2', '3'],
        next: '1.5.4',
        score: 10,
        response: response.low,
        func: (message) => {
            return message.toLowerCase() == '1'
        }
    },

    '1.5.4': {
        message: 'В какой версии Windows впервые появился  «Синий экран смерти»?',
        buttons: ['Windows 95', 'Windows 98', 'Windows 3.1'],
        next: '1.5.5',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'windows 95'
        }
    },
    '1.5.5': {
        message: 'Как правильно перевести "Silicon Valley"?',
        buttons: ['Силиконовая долина', 'Кремниевая долина', 'Простая долина'],
        next: '1.5.6',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'кремниевая долина'
        }
    },
    '1.5.6': {
        message: 'От какого слова происходит название доменного имени .com?',
        buttons: ['commercial', 'communication', 'computer'],
        next: '1.5.7',
        score: 10,
        response: response.middle,
        func: (message) => {
            return message.toLowerCase() == 'commercial'
        }
    },

    '1.5.7': {
        message: 'Какое лакомство никогда не служило кодовым названием версии ОС Android?',
        buttons: ['Замороженный йогурт', 'Oreo', 'Арахисовая паста'],
        next: '1.5.8',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'арахисовая паста'
        }
    },
    '1.5.8': {
        message: 'Какой из этих суперкомпьютеров - российский?',
        buttons: ['Topaz', 'Vulcan', 'Christofari'],
        next: '1.5.9',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'christofari'
        }
    },
    '1.5.9': {
        message: 'Какая мелодия первая прозвучала на Марсе?',
        buttons: ['We Will Rock You', 'Happy Birthday', 'Jingle Bells'],
        next: '2',
        score: 10,
        response: response.high,
        func: (message) => {
            return message.toLowerCase() == 'happy birthday'
        }
    },
}