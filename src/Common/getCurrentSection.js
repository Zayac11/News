export const getCurrentSection = (section) => {

    switch (section) {
        case 'sport': {
            return 'Спорт'
        }
        case 'world': {
            return 'Мир'
        }
        case 'internet': {
            return 'Интернет'
        }
        case 'politics': {
            return 'Политика'
        }
        case 'economic': {
            return 'Экономика'
        }
        case 'culture': {
            return 'Культура'
        }
        case 'science': {
            return 'Наука'
        }
        default: {
            return 'Главная'
        }
    }
};
