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
		// We want the visuals to scale with the kP value (0-1)

		let kpcase = Math.trunc(kP*10);
		let N_;
		let gData_;
		switch(kpcase) {
			case 0:
				console.log("case 0");
				N_ = 0;
				gData_ = [...Array(N_).keys()].map(() => ({
				lat: (Math.random() - 0.5) * 180,
				lng: (Math.random() - 0.5) * 360,
				maxR: Math.random() * 20 + 3,
				propagationSpeed: (Math.random() - 0.5) * 20 + 1,
				repeatPeriod: Math.random() * 5000 + 200
			}));
				break;
			case 1:
				console.log("case 1");
				N_ = 3;
				gData_ = [...Array(N_).keys()].map(() => ({
					lat: (Math.random() - 0.5) * 180,
					lng: (Math.random() - 0.5) * 360,
					maxR: Math.random() * 20 + 3,
					propagationSpeed: (Math.random() - 0.5) * 20 + 1,
					repeatPeriod: Math.random() * 5000 + 200
				}));
				break;

			case 2:
				console.log("case 2");
				N_ = 6;
				gData_ = [...Array(N_).keys()].map(() => ({
					lat: (Math.random() - 0.5) * 180,
					lng: (Math.random() - 0.5) * 360,
					maxR: Math.random() * 20 + 3,
					propagationSpeed: (Math.random() - 0.5) * 20 + 1,
					repeatPeriod: Math.random() * 5000 + 200
				}));
				break;

			case 3:
				console.log("case 3");
				N_ = 17;
				gData_ = [...Array(N_).keys()].map(() => ({
					lat: (Math.random() - 0.5) * 180,
					lng: (Math.random() - 0.5) * 360,
					maxR: Math.random() * 20 + 3,
					propagationSpeed: (Math.random() - 0.5) * 20 + 1,
					repeatPeriod: Math.random() * 5000 + 200
				}));
				break;

			case 4:
				console.log("case 4");
				N_ = 30;
				gData_ = [...Array(N_).keys()].map(() => ({
					lat: (Math.random() - 0.5) * 180,
					lng: (Math.random() - 0.5) * 360,
					maxR: Math.random() * 20 + 3,
					propagationSpeed: (Math.random() - 0.5) * 20 + 1,
					repeatPeriod: Math.random() * 5000 + 200
				}));
				break;

			case 5:
				console.log("case 5");
				N_ = 40;
				gData_ = [...Array(N_).keys()].map(() => ({
					lat: (Math.random() - 0.5) * 180,
					lng: (Math.random() - 0.5) * 360,
					maxR: Math.random() * 20 + 3,
					propagationSpeed: (Math.random() - 0.5) * 20 + 1,
					repeatPeriod: Math.random() * 5000 + 200
				}));
				break;

			case 6:
				console.log("case 6");
				N_ = 55;
				gData_ = [...Array(N_).keys()].map(() => ({
					lat: (Math.random() - 0.5) * 180,
					lng: (Math.random() - 0.5) * 360,
					maxR: Math.random() * 20 + 3,
					propagationSpeed: (Math.random() - 0.5) * 20 + 1,
					repeatPeriod: Math.random() * 5000 + 200
				}));
				break;

			case 7:
				console.log("case 7");
				N_ = 55;
				gData_ = [...Array(N_).keys()].map(() => ({
					lat: (Math.random() - 0.5) * 180,
					lng: (Math.random() - 0.5) * 360,
					maxR: Math.random() * 20 + 3,
					propagationSpeed: (Math.random() - 0.5) * 20 + 1,
					repeatPeriod: Math.random() * 5000 + 200
				}));
				break;

			case 8:
				console.log("case 8");
				N_ = 65;
				gData_ = [...Array(N_).keys()].map(() => ({
					lat: (Math.random() - 0.5) * 180,
					lng: (Math.random() - 0.5) * 360,
					maxR: Math.random() * 20 + 3,
					propagationSpeed: (Math.random() - 0.5) * 20 + 1,
					repeatPeriod: Math.random() * 5000 + 200
				}));
				break;

			case 9:
				console.log("case 9");
				N_ = 75;
				gData_ = [...Array(N_).keys()].map(() => ({
					lat: (Math.random() - 0.5) * 180,
					lng: (Math.random() - 0.5) * 360,
					maxR: Math.random() * 20 + 3,
					propagationSpeed: (Math.random() - 0.5) * 20 + 1,
					repeatPeriod: Math.random() * 5000 + 200
				}));
				break;

		}


		
		// const gData_ = [...Array(N_).keys()].map(() => ({
		// 	lat: (Math.random() - 0.5) * 180,
		// 	lng: (Math.random() - 0.5) * 360,
		// 	maxR: Math.random() * 20 + 3,
		// 	propagationSpeed: (Math.random() - 0.5) * 20 + 1,
		// 	repeatPeriod: Math.random() * 2000 + 200
		// }));

		// const N = 1 + Math.trunc(kP*100/3);
		// const gData = [...Array(N).keys()].map(() => ({
		// 	lat: (Math.random() - 0.5) * 180,
		// 	lng: (Math.random() - 0.5) * 360,
		// 	maxR: kP * 20 + 3,
		// 	propagationSpeed: (Math.random() - 0.5) * 20 + 1,
		// 	repeatPeriod: kP * 2000 + 200
		// }));
		
		const colorInterpolator = t => `rgba(255,100,50,${1-t})`;

		this.Globe
		.ringsData(gData_)
		.ringColor(() => colorInterpolator)
		.ringMaxRadius('maxR')
		.ringPropagationSpeed('propagationSpeed')
		.ringRepeatPeriod('repeatPeriod');
	}
}


