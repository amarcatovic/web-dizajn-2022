const API_KEY = 'vaš api key';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
const DONE_TYPING_INTERVAL = 1000;

let typingTimer;
let currentCityData;
let tempImgPath = "";
let queryDailyData = {
    q: '',
    units: 'metric',
    appid: API_KEY
}

class CurrentCityData {

    setRain(rain){
        this.rain = rain ?? "0%"
        return this
    }

    setIcon(icon){
        this.icon = icon
        return this
    }

    setLon(lon){
        this.lon = lon
        return this
    }

    setLat(lat){
        this.lat = lat
        return this
    }

    setPressure(pressure){
        this.pressure = pressure ?? "0"
        return this
    }

    setMaxTemp(maxTemp){
        this.maxTemp = maxTemp
        return this
    }

    setMinTemp(minTemp){
        this.minTemp = minTemp
        return this
    }

    setSnow(snow){
        this.snow = snow ?? "0%" 
        return this
    }

    setHumidity(humidity){
        this.humidity = humidity
        return this
    }

    setCity(city){
        this.city = city
        return this
    }

    setDate(date){
        this.date = date
        return this
    }

    setTemp(temp){
        this.temp = temp
        return this
    }

    setDescription(description){
        this.description = description
        return this
    }

    setWindSpeed(windSpeed){
        this.windSpeed = windSpeed
        return this
    }

    build(){
        return this
    }
}


const convertTimestampToDate = (timestamp, locales, options) => {
    let date = new Date(timestamp)
    return date.toLocaleDateString(locales, options);
}

const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response);
    }
    return response.json()
}

const fetchData = (url) => {
    fetch(
        url + new URLSearchParams(queryDailyData)
    )
    .then(handleErrors)
    .then((data) => {
        let result = data.list[0];
        let weather = result.weather[0]
        let main = result.main
        let coord = result.coord
        currentCityData = new CurrentCityData()
            .setCity(result.name)
            .setDate(convertTimestampToDate(result.dt, 'en-us', { weekday: 'long', month: 'long', day: 'numeric' }))
            .setIcon(weather.icon)
            .setTemp(main.temp)
            .setDescription(weather.description)
            .setWindSpeed(result.wind.speed)
            .setRain(result.rain)
            .setSnow(result.snow)
            .setHumidity(main.humidity)
            .setPressure(main.pressure)
            .setMinTemp(main.temp_min)
            .setMaxTemp(main.temp_max)
            .setLat(coord.lat)
            .setLon(coord.lon)
            .build()

        generateTodayData()
        return fetch(`https://source.unsplash.com/1600x900/?'${currentCityData.description}'`)
    })
    .then((response)=>{
        return response.blob()
    })
    .then((blob) => {
        URL.revokeObjectURL(tempImgPath)
        tempImgPath = URL.createObjectURL(blob)
        console.log(tempImgPath)
        document.body.style.backgroundImage = `url(${tempImgPath})`
    })
    .catch((reason) => {
        alert(reason)
    })
}

document
    .querySelector('.search')
    .addEventListener('keyup', (event) => {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(() => { onCityNameSearch(event.target.value) }, DONE_TYPING_INTERVAL);
    })

const onCityNameSearch = (city) => {
    queryDailyData.q = city;
    fetchData(BASE_URL + 'find?');
}

const generateTodayData = () => {
    document.getElementById('city').innerHTML = currentCityData.city
    document.getElementById('date').innerHTML = currentCityData.date
    document.getElementById('temp').innerHTML = currentCityData.temp
    document.getElementById('description').innerHTML = currentCityData.description
    let icon = document.createElement('img');
    icon.src = `https://openweathermap.org/img/wn/${currentCityData.icon}@4x.png`

    const iconContainer = document.getElementById('icon-container')
    iconContainer.replaceChildren()
    iconContainer.append(icon)

    const descArray = ['Min Temp', 'Max Temp', 'Humidity', 'Rain', 'Snow', 'WindSpeed']
    const infoArray = [currentCityData.minTemp,
    currentCityData.maxTemp,
    currentCityData.humidity,
    currentCityData.rain,
    currentCityData.snow,
    currentCityData.windSpeed]

    const parentElement = document.getElementById('info-details')

    let elements = []

    for (let i = 0; i < 6; i++) {
        let wrapper = document.createElement('div')
        wrapper.className = 'weather-info__text-info'

        let valueElement = document.createElement('h2')
        let valueTextNode = document.createTextNode(infoArray[i])
        valueElement.append(valueTextNode)

        let descriptionElement = document.createElement('p')
        let descriptionTextNode = document.createTextNode(descArray[i])

        descriptionElement.append(descriptionTextNode)
        wrapper.append(valueElement)
        wrapper.append(descriptionElement)
        elements.push(wrapper)
    }

    parentElement.replaceChildren(...elements)
}