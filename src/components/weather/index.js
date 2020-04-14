import React from "react"
import { Card, Modal, Button } from "semantic-ui-react"

export default (props) => {
  const name = props.weather.name
  const weather = props.weather.weather[0].main
  const temp = props.weather.main.temp
  const feels_like = props.weather.main.feels_like
  const temp_min = props.weather.main.temp_min
  const temp_max = props.weather.main.temp_max
  const pressure = props.weather.main.pressure
  const humidity = props.weather.main.humidity
  const wind_speed = props.weather.wind.speed
  const lon = props.weather.coord.lon
  const lat = props.weather.coord.lat
  const icon = `http://openweathermap.org/img/wn/${props.weather.weather[0].icon}.png`

  return (
    <Card>
      <Card.Content
        header={
          <p>
            Weather for {name}
            <img src={icon} />
          </p>
        }
      />
      <Card.Content>
        <p>
          It is {temp}
          {"\xB0"}F.
        </p>
        <p>
          Feels like it's {feels_like}
          {"\xB0"}F.
        </p>
      </Card.Content>
      <Card.Content>
        <Modal
          trigger={<Button>More Information</Button>}
          header={`Latitude: ${lat} Longitude: ${lon}`}
          content={
            <>
              <p>
                The high will be {temp_max}
                {"\xB0"}F and the low will be {temp_min}
                {"\xB0"}F
              </p>
              <p>Wind Speed: {wind_speed} mph</p>
              <p>Weather: {weather}</p>
              <p>Humidity: {humidity}%</p>
              <p>Pressure: {pressure} hPa</p>
            </>
          }
          actions={[{ key: "done", content: "Done", positive: true }]}
        />
      </Card.Content>
    </Card>
  )
}
