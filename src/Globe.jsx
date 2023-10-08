import * as THREE from 'three'
import ThreeGlobe from 'three-globe';

export default class Globe {
  constructor(scene) {
		this.Globe = new ThreeGlobe()
		.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
		.bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
	
		this.gData;
		scene.add(this.Globe);
	}

	update(kP) {
		// this.gData = data;
		const N = 1 + Math.trunc(kP*100/3);
		const gData = [...Array(N).keys()].map(() => ({
			lat: (Math.random() - 0.5) * 180,
			lng: (Math.random() - 0.5) * 360,
			maxR: Math.random() * 20 + 3,
			propagationSpeed: (Math.random() - 0.5) * 20 + 1,
			repeatPeriod: Math.random() * 2000 + 200
		}));
		
		const colorInterpolator = t => `rgba(255,100,50,${1-t})`;

		this.Globe
		.ringsData(gData)
		.ringColor(() => colorInterpolator)
		.ringMaxRadius('maxR')
		.ringPropagationSpeed('propagationSpeed')
		.ringRepeatPeriod('repeatPeriod');
	}
}


