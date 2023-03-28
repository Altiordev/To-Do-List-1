const form = document.querySelector('.form'),
    list = document.querySelector('#name'),
    cardId = document.querySelector('#cardId'),
    cards = document.querySelector('.cards');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!list.value == '') {
        const card = {
            name: list.value
        }

        cardId.value = Date.now()

        localStorage.setItem(cardId.value, JSON.stringify(card))
    } else {

    }

    render()

    form.reset()
})

render()

function render() {
    cards.innerHTML = '';

    for (const key in localStorage) {

        if (localStorage.hasOwnProperty(key)) {
            const objCard = JSON.parse(localStorage.getItem(key));

            const wrapperToDo = document.createElement('div');
            wrapperToDo.classList.add('wrapperToDo');

            const input = document.createElement('input');
            input.classList.add('toDoList')
            input.value = objCard.name
            input.setAttribute("disabled", "");

            const removeBtn = document.createElement('button');
            removeBtn.title = 'O‘chirish'
            removeBtn.classList.add('removeBtn');
            removeBtn.innerHTML = `<i class="fa-solid fa-trash-can" style="color: #e4a11b;"></i>`;

            const editBtn = document.createElement('button');
            editBtn.title = 'Tahrirlash'
            editBtn.classList.add('editBtn');
            editBtn.innerHTML = `<i class="fa-solid fa-pencil"></i>`;

            const confirmEditBtn = document.createElement('button');
            confirmEditBtn.title = 'Tasdiqlash'
            confirmEditBtn.classList.add('confirmEditBtn');
            confirmEditBtn.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #00fa04;"></i>`;

            const checked = document.createElement('input');
            checked.title = 'Bajarildi'
            checked.type = "checkbox"
            checked.classList.add('inpCheck');


            wrapperToDo.appendChild(input);
            wrapperToDo.appendChild(removeBtn);
            wrapperToDo.appendChild(editBtn);
            wrapperToDo.appendChild(confirmEditBtn);
            wrapperToDo.appendChild(checked);

            checked.addEventListener('click', () => {
                input.classList.toggle('text-dec');
                editBtn.classList.toggle('none');
            })

            editBtn.addEventListener('click', () => {
                input.toggleAttribute("disabled");
                input.classList.toggle('outline');
                confirmEditBtn.classList.toggle('active');
                editBtn.classList.toggle('active');
            })

            confirmEditBtn.addEventListener('click', () => {
                input.toggleAttribute("disabled");
                input.classList.toggle('outline');
                confirmEditBtn.classList.toggle('active');
                editBtn.classList.toggle('active');
                const card = {
                    name: input.value
                }
                localStorage.setItem(cardId.value, JSON.stringify(card))
            })

            removeBtn.addEventListener('click', () => {
                localStorage.removeItem(key);
                cards.removeChild(wrapperToDo);
            })
            cards.insertBefore(wrapperToDo, cards.firstChild);
            // cards.appendChild(wrapperToDo)
        }

    }

}