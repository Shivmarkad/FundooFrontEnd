
let token = localStorage.getItem('token');
var array;

$.ajax({
    url: "http://localhost:3000/api/v1/note",
    type: "GET",
    headers: {
        'Authorization': token
    },
    success: function (result) {
        console.log("Notes fetched Successfully")
        array = result.data;
        console.log(array);
        array.map(mapNotes);
    }
})

function mapNotes(item) {
    const notes_area = document.getElementById("notes")
    const noteEle = document.createElement("div")
    const hdtag = document.createElement("h4")
    hdtag.innerHTML = item.title;
    const para = document.createElement("p")
    para.innerHTML = item.description;

    noteEle.appendChild(hdtag)
    noteEle.appendChild(para)

    noteEle.classList.add('note_element')

    notes_area.appendChild(noteEle)
}
