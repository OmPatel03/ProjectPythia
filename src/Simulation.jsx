import * as THREE from 'three';


export default class Simulation {
    constructor(globe) {
        // dict { time : kP percentage value }
        this.kP = {};         

        this.time = 0;
        this.seconds = 0;
        this.clock = new THREE.Clock();
        this.clock.autoStart = true;
        this.flag = false;
        this.currentkP = 0;

        this.globe = globe;
        this.prevDay = 0;

        for (let day = 0; day < 12000; day++) {
            this.kP[day] = Math.random();
        }

        this.ready = false;

        // gui for currentDay

    }
    update(currentDay) {
        if (currentDay != this.prevDay) {
            this.prevDay = currentDay;
            this.globe.update(this.kP[currentDay]);
            console.log("day: " + currentDay + " kP: " + this.kP[currentDay]);
        }
        
    }


}