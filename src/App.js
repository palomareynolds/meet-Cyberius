import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='container'>
      <img src="https://robohash.org/Cyberius" alt="green-robot" className="robot"/>
      <div className='title'>
        <h2>Hello, I'm Cyberius!</h2>
        <div className='text'>
          <p>My name is a combination of elements of "cyber" (related to technology and the digital world) and the suffix "-ius" (which can denote something advanced or futuristic). 
            Overall, "Cyberius" evokes a sense of technological sophistication and innovation. 
          </p>
        </div>
        <p>It's really nice to meet you!</p>
        <p>If you want to know more about me, click
        <a href={"https://www.linkedin.com/in/paloma-reynolds-7170a6216/"}> here.</a>
        </p>
        <br></br>
        <input type='email' placeholder='Enter your email'></input>
        <button>Subscribe</button>
        
      </div>
        
    </div>
 
   
  );
}

export default App;
