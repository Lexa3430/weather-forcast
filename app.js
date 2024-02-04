
document.getElementById('searchButton').addEventListener('click', function() {
    var state = document.getElementById('stateInput').value;
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + state + ',us&units=imperial&APPID=00a0842eb96f72a55141b325806f2c76')
        .then(response => response.json())
        .then(data => {
            document.getElementById('state').innerText = state;
            document.getElementById('temperature').innerText = data.main.temp + '°F';
            document.getElementById('description').innerText = data.weather[0].description;
        })
        .catch(error => console.error('Error:', error));
});


  
