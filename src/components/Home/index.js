import './index.css'

const Home = props => {
  const ram = ''
  const GotoApp = () => {
    const {history} = props
    history.replace('/weather')
  }
  const GotoStudent = () => {
    const {history} = props
    history.replace('/Profile')
  }
  return (
    <div className="backgroundHome">
      <div className="cardHome">
        <h1 style={{color: 'blue'}}>
          Government Institute Of Electronics, Secunderabad
        </h1>
        <h2 style={{color: 'green'}}>Final Year Project</h2>
        <h3>
          Every body wants happiness, Nobody wants pain but you can`t have a
          rainbow with out a little rain
        </h3>
        <h4 className="head">
          Check the weather of the city which did you want...
        </h4>
        <button className="button" type="button" onClick={GotoApp}>
          Check Weather
        </button>
        <div style={{marginTop: '8px'}}>
          <button
            type="button"
            onClick={GotoStudent}
            style={{
              height: '50px',
              padding: '10px',
              borderRadius: '8px',

              backgroundColor: 'white',
              color: 'red',
              cursor: 'pointer',
              borderStyle: 'dashed',
            }}
          >
            Check Student Information
          </button>
        </div>
      </div>
    </div>
  )
}
export default Home
