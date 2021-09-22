var elMainForm = document.querySelector('.main-form')
var elMainInput = document.querySelector('.input-execution');
var elInputAuthor = document.querySelector('.input-author');
var elMainBtn = document.querySelector('.main-btn');
var elExecutionList = document.querySelector('.execution_list');
var elAuthorList = document.querySelector('.author_list');
var elBtnList = document.querySelector('.btn_list');
var resultArays = [];

elMainForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    var inputMainValue = elMainInput.value.trim();
    var inputAuthorValue = elInputAuthor.value.trim();

    elMainInput.value = null;
    elInputAuthor.value = null; 

    var resultObject = {
        id:resultArays.length,
        execution: inputMainValue,
        author: inputAuthorValue,
        btn: 'Button'
    }

    resultArays.push(resultObject);

    for(var item of resultArays) {
        var newLi = document.createElement('li');

        newLi.textContent = item.execution;

        newLi.classList.add('execution__item');
        newLi.classList.add('p-2');

        elExecutionList.appendChild(newLi);
    }

    for(var item of resultArays) {
        var newLi = document.createElement('li');

        newLi.textContent = item.author;

        newLi.classList.add('author__item');
        newLi.classList.add('p-2');

        elAuthorList.appendChild(newLi);
    }


        var newLi = document.createElement('li');
        var newBtn = document.createElement('button');
        
        newBtn.textContent = item.btn;

        newBtn.classList.add('btn-primary');
        newBtn.classList.add('btn');
        newLi.classList.add('btn_list');
        newLi.classList.add('nav');
        newLi.classList.add('flex-column');
        newLi.classList.add('mb-3');

        newLi.appendChild(newBtn);

        elBtnList.appendChild(newLi);


    resultObject.execution = null;
    resultObject.author = null;
})