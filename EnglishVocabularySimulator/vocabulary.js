const addWordFormDisplay = document.querySelector('.bg-img-addword');
const optionsCatalog = document.querySelector('#select-options');
const addWordForm = document.querySelector('.addWordsForm');
const formInput = document.querySelectorAll('.addWordsForm input');
const popupBlock = document.getElementById('popup-block');
const btnStartStudying = document.querySelector('.start-vocabulary');
const modal = $.modal();
const modalCloseBtn = document.querySelector('.modal-close');

optionsCatalog.addEventListener('click', optionsReaction);
addWordForm.addEventListener('submit', getFormData);
modalCloseBtn.addEventListener('click', modal.close);
btnStartStudying.addEventListener('click', modal.open);

console.log(popupBlock);
console.log(btnStartStudying);

function optionsReaction(event){
    // Get all available options
    const options = document.querySelectorAll('.option');
    options.forEach(function (option) {
        switch (event.target.value) {
            case 'add-words':
                addWordFormDisplay.style.display = 'table';
                break;
            case 'train-vocabulary':
                addWordFormDisplay.style.display = 'none';
                break;
        }
    });
}

function getFormData(event) {
    // prevent Devault submission
    event.preventDefault();
    let newObject = {};
    const url = 'https://fc5dde2d5d91.ngrok.io/word';

    for (let i = 0; i < formInput.length; i++) {
        newObject['Id'] = Math.random();
        newObject[formInput[i].id] = formInput[i].value
    }

    let dataToSend = JSON.stringify(newObject);
    let dataReceived;

    fetch(url, {
        mode: "no-cors",
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: dataToSend
    })
        .then(resp => {
            if (resp.status === 200) {
                return resp.json()
            } else {
                console.log("Status: " + resp.status)
                return Promise.reject("server")
            }
        })
        .then(dataJson => {
            dataReceived = JSON.parse(dataJson)
        })
        .catch(err => {
            if (err === "server") return
            console.log(err)
        })
    console.log(`Received: ${dataReceived}`)
}

