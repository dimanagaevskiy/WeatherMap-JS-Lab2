var map = L.map('map').setView([50.4, 30.52], 3); // переменная с вложеной картой, координаты setView([координаты], зум)

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,            // максимальный зум
  id: 'mapbox/dark-v10',  // тема карты
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1Ijoicm9tYW4wMSIsImEiOiJja2FjZGlyeTQxZnJhMzZxd2l0d3E1eXFjIn0.nbSZ1mtMKkfd29tl5vFDow'
  }).addTo(map);   // добавление на карту

async function weather(lat, long) {   // функция погоды
  const key = '816244795976363d695ba3d0d36842aa';   //  ключ API OpenWeather
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`);
  const rezult = await response.json();
  console.log(rezult);
  const weather = rezult['weather'][0];
  console.log('Получение погоды успешно!');  // лог в консоль текста

  var myIcon = L.icon({   // переменная для иконки
    iconUrl: `http://openweathermap.org/img/w/${weather.icon}.png`,   // стиль иконок
    iconSize: [50, 50],
    iconAnchor: [25, 25],

    });

  L.marker([lat, long], {   // создание маркеров
    title: weather.description,
    icon: myIcon
    }).addTo(map);
  }

weather(40.71, -74.005);   // координаты городов
weather(50.4, 30.52);
weather(49.2, 28.48);
weather(-33.9, 151.26);
