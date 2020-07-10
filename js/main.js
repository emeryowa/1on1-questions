const UI = {
    button: document.getElementById('randomize-button'),
    result: {
        container: document.getElementById('result'),
        title: document.querySelector('#result .title'),
        subtitle: document.querySelector('#result .subtitle'),
    }
}

var questions = [];

fetchQuestions();

UI.button.addEventListener('click', pickQuestion);

function fetchQuestions() {
    console.log('Fetching questions...')
    const url = 'questions.json';
    fetch(url, {
        method : 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        response => response.json() 
    ).then(
        json => questions = json
    );
}

function pickQuestion() {
    console.log('Picking question...');

    if (!questions.length) {
        alert('Questions are still loading. Please have a little more patience.');
        return;
    }

    console.log(questions);

    var question = questions[Math.floor(Math.random() * questions.length)];
    console.log(question);

    UI.result.title.innerHTML = question.question;
    UI.result.subtitle.innerHTML = `In category <strong>${question.category}</strong>`;
    UI.result.container.classList.add('is-block');
    UI.result.container.classList.remove('is-hidden');
}
