
let token = localStorage.getItem('token');
const notes_area = document.getElementById("notes")
const note_buttons = document.querySelector('.button_menu')

let array;

$.ajax({
    url: "http://localhost:3000/api/v1/note",
    type: "GET",
    headers: {
        'Authorization': 'bearer ' + token
    },
    success: function (result) {
        console.log("Notes fetched Successfully")
        array = result.data;
        console.log(array);
        displayNotes(array)
    }
})


function displayNotes(array) {
    document.getElementById('notes').innerHTML = array.map(note =>
        `<div class="note_element" id="${note._id}">
           <p id="${note._id}">${note.title}</p>
           <p id="${note._id}" >${note.description}</p>
            <div class="note_buttons" id="button_icons">
                <img src="../img/alert.png" alt="alert">
                <img src="../img/person_add.png" alt="add_person">
                <img src="../img/color_pallet.png" alt="color" id="color_pallet">
                <img src="../img/img.png" alt="img">
                <img id="${note._id}" src="../img/archieve.png" alt="archieve" id="archieve" onclick="archieve(event)">
                <img src="../img/more_vert.png" alt="more" id = "more">
                <div class="popupMenu" >
                    <button onclick = "trash(event)" id=${note._id}>delete</button>
                    <button>delete</button>
            </div>
                <div class="hidden" id="colors">
                    <img src="../img/sky_blue.png" data-color="#87CEEB" alt="sky_blue" class="color_options">
                    <img src="../img/yellow.png" data-color="#eff840" alt="yello" class="color_options">
                    <img src="../img/green.jpg" data-color="#77f258" alt="green" class="color_options">
                </div>
            </div>
        </div>` 
)}

function archieve(event){
    const ele = event.target;
    const id = ele.id;
    console.log(id)

    $.ajax({
        url: `http://localhost:3000/api/v1/note/archieve/${id}`,
        type: "PUT",
        headers: {
            'Authorization': 'bearer ' + token
        },
        success: function (result) {
            console.log("Notes archieved Successfully")
            console.log(result);
        }})
}

function trash(event){
    const ele = event.target;
    const id = ele.id;
    console.log(id)

    $.ajax({
        url: `http://localhost:3000/api/v1/note/trash/${id}`,
        type: "PUT",
        headers: {
            'Authorization': 'bearer ' + token
        },
        success: function (result) {
            console.log("Notes trashed Successfully")
            console.log(result);
        }})
}

