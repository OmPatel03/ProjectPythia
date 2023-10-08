import { useState , useEffect} from 'react';
import World  from './World';;
import KpBar from './KpBar';
import KpActual from './KpActual';


function App() {

  // const [data , setData] = useState(1.2);

  useEffect(() => {
    window.focus();
    
    const world = new World();
    world.init();

    world.animate();
    // for (const key in object) {
    //   if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    //   }
    // }setData(world.simulation.kpActual);
    // console.log(data)

    // add react gradient bar to left of screen below 
  
  }, []);

  return (
    <div> 
      <canvas id="display"></canvas>
      {/* <KpBar kpValue={0.5} /> */}
      {/* <KpActual number={data} /> */}
	  </div>
    // kp bar
    
  );
}

export default App;