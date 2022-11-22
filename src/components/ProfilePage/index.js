import './index.css'

const ProfilePage = props => {
  const ram = ''
  const goHome = () => {
    const {history} = props
    history.replace('/')
  }
  return (
    <div className="background34">
      <div className="background12">
        <div
          style={{
            borderRadius: '8px',
            margin: '30PX',
            padding: '10px',
            backgroundColor: 'yellow',
            textAlign: 'center',
          }}
        >
          <img
            src="https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/11492/2018/10/2/Campus%20View%20of%20Government%20Institute%20of%20Electronics_Campus-View.png"
            alt="college"
            style={{height: '50vh', borderRadius: '8px'}}
          />
          <h2 style={{color: '#ff0066', fontFamily: 'lobster'}}>
            Government Institute of Electronics, Secunderabad
          </h2>
        </div>
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '50vw',
              margin: '30px',
            }}
          >
            <div
              style={{
                textAlign: 'center',
                backgroundColor: 'yellow',
                width: '15vw',
                borderRadius: '8px',
                padding: '10px',
                color: 'red',
              }}
            >
              <h2>SIDHARTH</h2>
              <h3 style={{color: 'blue'}}>20054-CM-003</h3>
            </div>
            <div
              style={{
                textAlign: 'center',
                backgroundColor: 'yellow',
                width: '15vw',
                borderRadius: '8px',
                padding: '10px',
                color: 'red',
              }}
            >
              <h2>J.VARUN</h2>
              <h3 style={{color: 'blue'}}>20054-CM-005</h3>
            </div>
          </div>
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                width: '50vw',
                margin: '30px',
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                  backgroundColor: 'yellow',
                  width: '15vw',
                  borderRadius: '8px',
                  padding: '10px',
                  color: 'red',
                }}
              >
                <h2>S. BALRAJ</h2>
                <h3 style={{color: 'blue'}}>20054-CM-016</h3>
              </div>
              <div
                style={{
                  textAlign: 'center',
                  backgroundColor: 'yellow',
                  width: '15vw',
                  borderRadius: '8px',
                  padding: '10px',
                  color: 'red',
                }}
              >
                <h2>R. UDAY KIRAN</h2>
                <h3 style={{color: 'blue'}}>20054-CM-018</h3>
              </div>
            </div>
            <div
              style={{
                textAlign: 'center',
                backgroundColor: 'yellow',
                width: '15vw',
                borderRadius: '8px',
                padding: '10px',
                marginLeft: '20vw',
                color: 'red',
              }}
            >
              <h2>P. ABHIRAM</h2>
              <h3 style={{color: 'blue'}}>20054-CM-024</h3>
            </div>
          </div>
        </div>
      </div>
      <div style={{textAlign: 'center'}}>
        <button
          style={{
            backgroundColor: 'green',
            color: 'white',
            padding: '10px',
            borderRadius: '8px',
            borderWidth: '0px',
            width: '8vw',
            marginTop: '4vh',
            cursor: 'pointer',
          }}
          onClick={goHome}
          type="button"
        >
          Back
        </button>
      </div>
    </div>
  )
}

export default ProfilePage
