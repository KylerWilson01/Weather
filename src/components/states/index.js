import React, { useState } from "react"
import axios from "axios"

import { Input, Button } from "semantic-ui-react"

import Weather from "../weather"

export default (props) => {
  const [zip, setZip] = useState("")
  const [weather, setWeather] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=763b859d5b19f215d0682c7595bbf47a&units=imperial`
      )
      .then((resp) => setWeather(resp.data))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="number"
          placeholder="Zip Code"
          onInput={(e) => setZip(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
      {weather ? (
        <Weather weather={weather} zip={zip} />
      ) : (
        <h1>Please Enter Your Zip Code.</h1>
      )}
    </>
  )
}
