const questions = [
    'Ты сегодня мылась?',  'Любишь?',  'Во сколько проснулась?',  'Пила кофе?', 'Что делаешь?','Какие планы на вечер?','Когда день твой рождения?','Кушать?',
]

const answers = ['Да', 'Нет', 'Не сегодня', 'Возможно', 'Отвали от меня!', 'Приходи ко мне', 'Сейчас будет горячо', 'Что есть, то есть', 'Ты', 'Буду', 'Я пошел',]
  
const generateBtn = document.querySelector('.btn')
const answerBtn = document.querySelector('#ans')
const header = document.querySelector('#del')

const q = document.querySelector('.question')
const a = document.querySelector('.answer')

// Вешаем событие на кнопку и генируруем случайный вопрос из массива
generateBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * questions.length)
    //console.log(random);
    let randomQuestion = questions[random]
    //console.log(randomQuestion);
    q.innerHTML = randomQuestion
    header.remove()
    a.innerHTML = ''
    //!!!! Добавить что бы при нажатии на кнопку новый вопрос, ответ удалялся и продолжили играть
    
})

// Вешаем событие на кнопку и генируруем случайный ответ из массива
answerBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * answers.length)
    //console.log(random);
    let randomQuestion = answers[random]
    //console.log(randomQuestion);
    a.innerHTML = randomQuestion
})