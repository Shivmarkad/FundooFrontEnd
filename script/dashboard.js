const description = document.getElementById('description');
const closeNote = document.getElementById('closeNote');
const title = document.getElementById('title');
const button_icons = document.getElementById('button_icons');
const note = document.querySelector('.note');
const allNotes = document.querySelector('.all_notes');

function addnote(title, desc) {
    let data = {
        title: title,
        description: desc
    };
    let token = localStorage.getItem('token');
    $.ajax({
        url: "http://localhost:3000/api/v1/note",
        type: "POST",
        headers: {
            'Authorization': token
        },
        data: data,
        success: function (result) {
            console.log("Note created Successfully")
            console.log(result)
        }
    });

    const htmlData = `<div class="note_element">
    <span class="note_element_title">${title}</span>
    <p class="note_element_desc">${desc}</p> 
</div>`

    allNotes.insertAdjacentHTML('beforeend', htmlData);
    document.body.appendChild(allNotes);
}

description.addEventListener('click', () => {
    title.style.display = 'block';
    button_icons.style.display = 'flex';
    note.classList.add('after_focus');
});
document.addEventListener('click', (event) => {
    if (!event.target.closest('.after_focus')) {
        button_icons.style.display = 'none';
        title.style.display = 'none';
        note.classList.remove('after_focus');
    }
});

closeNote.addEventListener('click', () => {
    const ttl = document.getElementById('title').value;
    const desc = document.getElementById('description').value;

    console.log(ttl, desc);

    if (ttl == "" && desc == "") {
        title.style.display = "none";
        button_icons.style.display = "none";
        note.classList.remove('after_focus');
    } else {
        addnote(ttl, desc);
    }
})


const colorPallet = document.getElementById('color_pallet');
const colors = document.getElementById('colors');

const noteEle = document.querySelector('.note_element');

colorPallet.addEventListener('click', () => {
    colors.classList.toggle('hidden');
});

colors.addEventListener('click', (event) => {
    const selectedColor = event.target.getAttribute('data-color');
    if (selectedColor) {
        noteEle.style.backgroundColor = selectedColor;
        colors.classList.add('hidden');
    }
});