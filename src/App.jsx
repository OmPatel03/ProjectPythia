import { useEffect } from 'react';
import World  from './World';;
import KpBar from './KpBar';

function App() {
  useEffect(() => {

     
    window.focus();
      
    const world = new World();
    world.init();

    world.animate();

    // add react gradient bar to left of screen below 


  
  }, []);

  return (
    <div> 
      <canvas id="display"></canvas>
      <KpBar kpValue={0.5} />
	  </div>
    // kp bar
    
  );
}

export default App;