function loadData() {
    var request = new XMLHttpRequest();

    request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
 
    request.onload = function () {
        // begin accessing JSON data here
        var data = JSON.parse(this.response);
        console.log(data)
        if (request.status >= 200 && request.status < 400) {
            data.forEach(movie => { console.log(movie.title); });
            myFunction(data);
            } else {
            console.log('error');
        }
    }
    request.send();
}

function myFunction(data) {
    var i;
    var table = document.getElementById("movie-table");
    for (i = data.length; i > 0; i--) { 
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = i;
        var link = "file:///home/fresher1001/Desktop/Demo.02/chitiet.html?"+i;
        var a = '<a href='+link+'>'+data[i-1].title+'</a>';
        cell2.innerHTML = a;
    }
}

loadData();
