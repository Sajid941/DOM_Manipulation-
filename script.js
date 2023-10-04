let id = 0;
function addStudent(){
    id += 1;
    let name = document.getElementById('name').value;
    let classroll = document.getElementById('classRoll').value;
    let boardroll = document.getElementById('boardRoll').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;


    document.getElementById('studentList').innerHTML += "<tr><td>"+id+"</td><td>"+name+"</td><td>"+classroll+"</td><td>"+boardroll+"</td><td>"+phone+"</td><td>"+address+"</td></tr>";
}

    let noc = document.getElementById('name');
    let counter = document.getElementById('counter');
    maxlength = noc.getAttribute('maxlength');
    noc.onkeyup = () => {
        counter.innerText =noc.value.length;
    }
