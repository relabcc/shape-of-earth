import Globe from 'react-globe.gl';
import './App.css'
import beer from './beer.json'

const goodBeer = beer.map(d => {
  const ml = 1 / d.value 
  return {
    lat: d.latitude,
    lng: d.longitude,
    size: ml,
    color: 'red',
    label: `${d.city}\n${Math.round(ml * 500)}ml\n($${d.value} / 500ml)`,
  }
})

function App() {
  return (
    <div className="wrapper">
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        pointsData={goodBeer}
        pointAltitude="size"
        pointColor="color"
        pointLabel="label"
      />
      <div className="title">
        <h1>How full can your beer filled with $1 USD in different cities?</h1>
        <h2>在不同城市，1美元可以讓你的啤酒杯裝多滿？</h2>
      </div>
    </div>
  );
}

export default App;
