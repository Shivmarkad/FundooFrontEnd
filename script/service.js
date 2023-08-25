
let token = localStorage.getItem('token');
const notes_area = document.getElementById("notes")
const note_buttons = document.querySelector('.button_menu')

let array;

$.ajax({
    url: "http://localhost:3000/api/v1/note",
    type: "GET",
    headers: {
        'Authorization': 'bearer '+ token
    },
    success: function (result) {
        console.log("Notes fetched Successfully")
        array = result.data;
        console.log(array);
        array.map(mapAllNotes);
    }
})

function mapAllNotes(item) {

    const noteEle = document.createElement("div")
    const hdtag = document.createElement("h4")
    hdtag.innerHTML = item.title;

    const para = document.createElement("p")
    para.innerHTML = item.description;
    const clone_ele = note_buttons.cloneNode(true)

    clone_ele.removeChild(clone_ele.querySelector('.close'))

    clone_ele.classList.add('note_buttons')
    noteEle.appendChild(hdtag)
    noteEle.appendChild(para)
    noteEle.appendChild(clone_ele)
    noteEle.classList.add('note_element')

    const firstNote = notes_area.firstChild;

    if (firstNote) {
        notes_area.insertBefore(noteEle, firstNote); 
    } else {
        notes_area.appendChild(noteEle)
    }
}

// function mapArchieveNotes() {
    
//     notes_area.innerHTML = '';
//     for(let i in array){
//         console.log(array[i].title)
//         if (array[i].isArchieve) {
//             mapAllNotes(array[i]);
//         }
//     }
// }

// function mapTrashedNotes() {
//     notes_area.innerHTML = '';
//     for(i in array){
//         if (array[i].isTrash) {
//             mapAllNotes(array[i]);
//         }
//     }
// }