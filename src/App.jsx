import { useEffect } from 'react';
import World  from './World';;

function App() {
  useEffect(() => {

    window.focus();
      
    const world = new World();
    world.init();

    world.animate();
  
  }, []);

  return (
    <div>
      <canvas id="display"></canvas>
	</div>
  );
}

export default App;