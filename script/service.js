let token = localStorage.getItem('token');
const notes_area = document.getElementById("notes")
const note_buttons = document.querySelector('.button_menu')

var array;

function getAllNOtes(listType = "allNotes") {

    $.ajax({
        url: "http://localhost:3000/api/v1/note",
        type: "GET",
        headers: {
            'Authorization': 'bearer ' + token
        },
        success: function (result) {
            array = result.data;
            console.log(result.message)

            if (listType == "allNotes") {
                let allArray = array.filter((items => {
                    return items.isArchieve == false && items.isTrash == false;
                }))
                displayNotes(allArray)
                console.log(allArray)
            }
            if (listType == "archive") {
                let archiveArray = array.filter((items => {
                    return items.isArchieve == true;
                }))
                console.log(listType)
                displayNotes(archiveArray)
            }
            if (listType == "trash") {
                let trashArray = array.filter((items => {
                    return items.isTrash == true;
                }))
                console.log(listType)
                displayNotes(trashArray)
            }
        }
    })
}


function displayNotes(array) {
    document.getElementById('notes').innerHTML = array.map(note =>
        ` <div class="note_element" id="note_element${note._id}">
        <p id="${note._id}" >${note.title}</p>
        <p id="${note._id}" >${note.description}</p>
        <div class="note_buttons" id="button_icons">
            <img src="../img/alert.png" alt="alert">
            <img src="../img/person_add.png" alt="add_person">
            <img src="../img/color_pallet.png" alt="color" id="color_pallet">
                <div class="hidden" id="colors">
                    <img src="../img/sky_blue.png" data-color="#87CEEB" alt="sky_blue" class="color_options">
                    <img src="../img/yellow.png" data-color="#eff840" alt="yello" class="color_options">
                    <img src="../img/green.jpg" data-color="#77f258" alt="green" class="color_options">
                </div>
            
                <img id="${note._id}" src="../img/archieve.png" alt="archieve" onclick="archieve(event)">
                <img id="${note._id}" class="more" onclick = "moreOptions(event)" title="more" src="../img/more_vert.png" alt=""> 
            <div class="dropdown-content" id="moreOpsBox${note._id}">
                <a id="${note._id}" onclick="trash(event)">delete</a>
                <a >About</a>
                <a >Contact</a>
            </div>
        </div>
    </div>`
    )
}

function archieve(event) {
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
        }
    })
}

function trash(event) {
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
        }
    })
}

const noteElement = document.getElementById('note_element${note._id}')


getAllNOtes()