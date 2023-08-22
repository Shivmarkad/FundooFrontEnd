
let token = localStorage.getItem('token');
let array;

$.ajax({
    url:"http://localhost:3000/api/v1/note",
    type:"GET",
    headers:{
        'Authorization':token
    },
    success: function(result){
        console.log("Notes fetched Successfully")
        array = result.data;
        console.log(array);

    }
})