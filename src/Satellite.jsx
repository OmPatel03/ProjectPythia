import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'; 

export default class Satellite {
    constructor(scene) {
        this.loaded = false;
        this.mesh = new THREE.Object3D();

        const objLoader = new OBJLoader();
        objLoader.load(
            '/assets/DSCOVR.obj',
            (object) => {
                this.mesh = object;
                this.mesh.scale.set(0.01, 0.01, 0.01)
                this.mesh.position.set(80, 80, 80);
                let material = new THREE.MeshLambertMaterial({color: 0x777777});
                this.mesh.traverse(function(child) {
                    if (child instanceof THREE.Mesh) {
                        child.material = material;
                    }
                });
                scene.add(this.mesh);
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded satellite')
            },
            (error) => {
                console.log('Error loading satellite: ', error);
            }
        )

    }
}
