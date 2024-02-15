import './App.css';
import img1 from './assest/vday.png'
import dance from './assest/dance.gif'
import song from './assest/song.mp3'



function App() {

 

  return (
    <>
      <div className="card">
        <div className="front_text">
          <h3>Sending you a special delivery of love mail...</h3>
        </div>
        <img src={img1} className="front_img" alt='' />
        <div className="inside_text">
          <h4>...straight from my heart of someone who adores you more than words can say.</h4>
          <h3>Wishing you a Valentine's Day filled with all the joy and warmth you bring into my life!</h3>
        </div>
      </div>

      <div className='gif'>
        <img src={dance} className="gif-img" alt="" />
      </div>

      
      <audio autoplay="" loop="" controls="" style={{ display: 'none' }}>
      <source src={song} type="audio/mp3"/ >
    </audio>
    </>
  );
}

export default App;
