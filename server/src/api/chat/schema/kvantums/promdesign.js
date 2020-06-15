import response from './response'

export default {
    '1.4.1': {
        message: 'Что из этого не является элементом дизайна?',
        buttons: ['Линия', 'Фигура', 'Единство'],
        next: '1.4.2',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'eдинство'
        }
    },
    '1.4.2': {
        message: 'Это первый цвет, на который реагирует человеческий глаз, когда он попадает в поле зрения:',
        buttons: ['Красный', 'Синий', 'Белый'],
        next: '1.4.3',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'красный'
        }
    },
    '1.4.3': {
        message: 'Расположение графических и текстовых объектов - это…',
        buttons: ['Организация', 'Воркфлоу', 'Композиция'],
        next: '1.4.4',
        score: 10,
        response: response.low,
        func: (message) => {
            return message.toLowerCase() == 'композиция'
        }
    },

    '1.4.4': {
        message: 'Комплиментарный цвет синего - это…',
        buttons: ['Красный', 'Зеленый', 'Оранжевый'],
        next: '1.4.5',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'оранжевый'
        }
    },
    '1.4.5': {
        message: 'Изображение, сделанное в векторе…',
        buttons: ['Ограничено размером', 'Масштабируется', 'Открывается в Фотошопе'],
        next: '1.4.6',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'масштабируется'
        }
    },
    '1.4.6': {
        message: 'Каким из перечисленных материалов на данный момент невозможно печатать на 3д принтере:',
        buttons: ['Бетон', 'Стекло', 'Металл'],
        next: '1.4.7',
        score: 10,
        response: response.middle,
        func: (message) => {
            return message.toLowerCase() == 'стекло'
        }
    },

    '1.4.7': {
        message: 'В каком формате нельзя показывать проект клиенту?',
        buttons: ['.jpg', '.psd', '.gif'],
        next: '1.4.8',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == '.psd'
        }
    },
    '1.4.8': {
        message: 'Техника  изображения пространственных объектов на какой-либо поверхности в соответствии с теми кажущимися сокращениями их размеров, изменениями очертаний формы и светотеневых отношений, которые наблюдаются в натуре.',
        buttons: ['Перспектива', 'Ретроспектива', 'Натюрморт'],
        next: '1.4.9',
        score: 10,
        func: (message) => {
            return message.toLowerCase() == 'перспектива'
        }
    },
    '1.4.9': {
        message: 'Для 3д печати применяется много материалов. Какой из  перечисленных пластиков производится из растительного сырья:',
        buttons: ['PETg', 'PLA', 'ABS'],
        next: '2',
        score: 10,
        response: response.high,
        func: (message) => {
            return message.toLowerCase() == 'pla'
        }
    },
}