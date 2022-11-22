import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'

class NewWeather extends Component {
  state = {
    search: '',
    name: '',
    ram: true,
    loader: true,
    dataList: [],
    error: false,
  }

  componentDidMount() {
    console.log("uday")
    const getData = async () => {
      this.setState({loader: true})
      const {search} = this.state
      const url = `https://api.openweathermap.org/data/2.5/weather?q=goa&appid=c3e89bc97eb6bd54a4b2b7ea34b98c35`

      const response = await fetch(url)
      console.log(response)

      const data = await response.json()
      console.log(data)
      this.setState({loader: false, dataList: data})
    }
    getData()
  }

  goHome = () => {
    console.log(this.props)
    const {history} = this.props
    history.replace('/')
  }

  searchCity = event => {
    this.setState({search: event.target.value})
  }

  getData12 = async () => {
    this.setState({loader: true})
    const {search} = this.state
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=c3e89bc97eb6bd54a4b2b7ea34b98c35`

    const response = await fetch(url)
    console.log(response)
    const data = await response.json()
    console.log(data)
    this.setState({loader: false, dataList: data, error: false})
  }

  SubmitCity = async () => {
    console.log('data')
    this.setState({loader: true})
    const {search} = this.state
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c3e89bc97eb6bd54a4b2b7ea34b98c35`

    const response = await fetch(url)

    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.setState({loader: false, dataList: data})
    } else {
      this.setState({loader: false, error: true})
    }
  }

  render() {
    const {loader, dataList, error} = this.state
    console.log(dataList)
    return (
      <div>
        <div className="backgroundNew">
          <h1 style={{color: 'yellow', fontFamily: 'lobster'}}>
            Check The Weather Of Any City
          </h1>
          <input
            type="text"
            className="input"
            placeholder="Enter the City name"
            onChange={this.searchCity}
          />
          <button
            type="button"
            style={{
              backgroundColor: '#00ff00',
              color: 'white',
              marginTop: '20px',
              padding: '10px',
              borderRadius: '8px',
              borderWidth: '0px',
              width: '20vw',
              cursor: 'pointer',
            }}
            onClick={this.SubmitCity}
          >
            Search
          </button>
          <button
            style={{
              backgroundColor: 'red',
              color: 'white',
              padding: '10px',
              borderRadius: '8px',
              borderWidth: '0px',
              width: '20vw',
              marginTop: '4vh',
              cursor: 'pointer',
            }}
            type="button"
            onClick={this.goHome}
          >
            Back
          </button>
        </div>
        <div
          style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}
        >
          {!loader ? (
            <>
              {!error ? (
                <div style={{display: 'fex', flexDirection: 'column'}}>
                  <div
                    style={{
                      textAlign: 'center',
                      backgroundImage:
                        'linear-gradient(to right top, #07ebe7, #eb07d4)',
                      width: '30vw',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      borderRadius: '8px',
                      height: '55vh',
                      marginLeft: '70vh',
                    }}
                  >
                    <div>
                      <h1 style={{color: 'white'}}>{dataList.name}</h1>
                    </div>
                    <h1 style={{color: 'white'}}>
                      {(dataList.main.temp - 273.15).toFixed(2)} °C
                    </h1>
                    <div style={{justifyContent: 'center'}}>
                      <img
                        src={`https://openweathermap.org/img/wn/${dataList.weather[0].icon}@2x.png`}
                        alt={dataList.name}
                        className="weatherImage"
                        style={{color: 'white'}}
                      />
                    </div>
                    <h2 style={{color: 'white'}}>{dataList.weather[0].main}</h2>
                  </div>
                  <div
                    style={{display: 'flex', justifyContent: 'space-between'}}
                  >
                    <div
                      style={{
                        backgroundColor: 'yellow',
                        width: '20vw',
                        margin: '30px',
                        textAlign: 'center',
                        borderRadius: '8px',
                      }}
                    >
                      <img
                        src="https://img.icons8.com/color/512/snowflake.png"
                        alt="cool"
                        style={{width: '30%'}}
                      />
                      <h3 style={{color: 'red', fontFamily: 'lobster'}}>
                        Coldest Temperature:{' '}
                        {(dataList.main.temp_min - 273.15).toFixed(2)} °C
                      </h3>
                    </div>
                    <div
                      style={{
                        backgroundColor: 'yellow',
                        width: '20vw',
                        margin: '30px',
                        textAlign: 'center',
                        borderRadius: '8px',
                      }}
                    >
                      <img
                        src="https://img.icons8.com/parakeet/512/summer.png"
                        alt="cool"
                        style={{width: '30%'}}
                      />
                      <h3 style={{color: 'red', fontFamily: 'lobster'}}>
                        Warmest Temperature:{' '}
                        {(dataList.main.temp_max - 273.15).toFixed(2)} °C
                      </h3>
                    </div>
                    <div
                      style={{
                        backgroundColor: 'yellow',
                        width: '20vw',
                        margin: '30px',
                        textAlign: 'center',
                        borderRadius: '8px',
                      }}
                    >
                      <img
                        src="https://img.icons8.com/external-justicon-flat-justicon/512/external-humidity-weather-justicon-flat-justicon.png"
                        alt="cool"
                        style={{width: '30%'}}
                      />
                      <h3 style={{color: 'red', fontFamily: 'lobster'}}>
                        Humidity :{dataList.main.humidity}
                      </h3>
                    </div>
                    <div
                      style={{
                        backgroundColor: 'yellow',
                        width: '20vw',
                        margin: '30px',
                        textAlign: 'center',
                        borderRadius: '8px',
                      }}
                    >
                      <img
                        src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-pressure-weather-flaticons-lineal-color-flat-icons.png"
                        alt="cool"
                        style={{width: '30%'}}
                      />
                      <h3 style={{color: 'red', fontFamily: 'lobster'}}>
                        Pressure :{dataList.main.pressure}
                      </h3>
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: 'yellow',
                      width: '20vw',
                      margin: '30px',
                      textAlign: 'center',
                      borderRadius: '8px',
                      marginLeft: '80vh',
                      padding: '10px',
                    }}
                  >
                    <img
                      src="https://img.icons8.com/color/512/windsock.png"
                      alt="cool"
                      style={{width: '30%'}}
                    />
                    <h3 style={{color: 'red', fontFamily: 'lobster'}}>
                      Wind Speed : {dataList.wind.speed}
                    </h3>
                  </div>
                </div>
              ) : (
                <div className="background1">
                  <h2 style={{color: 'White', fontFamily: 'cursive'}}>
                    City Not Found! Retry Again
                  </h2>
                  <button
                    type="button"
                    style={{
                      backgroundColor: '#00ff00',
                      color: 'white',
                      padding: '10px',
                      borderRadius: '8px',
                      borderWidth: '0px',
                      width: '5vw',
                      cursor: 'pointer',
                    }}
                    onClick={this.getData12}
                  >
                    Retry
                  </button>
                </div>
              )}
            </>
          ) : (
            <div>
              <Loader type="Hearts" color="Red" style={{height: '10vh'}} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default NewWeather
