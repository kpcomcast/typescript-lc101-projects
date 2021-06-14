import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
  name: string;
  totalCapacityKg: number;
  cargoItems: Cargo[];
  astronauts: Astronaut[];
  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
    this.cargoItems = [];
    this.astronauts = [];
  }

  sumMass(items: Payload[]): number {
    let sum:number = 0;
    for (let i of items) {
      sum += i.massKg;
    }
    return sum;
  }

  currentMassKg(): number {
    let totalAstro:number = this.sumMass(this.astronauts);
    let totalCargo:number = this.sumMass(this.cargoItems);
    return totalAstro + totalCargo;
  }

  canAdd(item: Payload): boolean {
    if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
      return true;
    }
  }

  addCargo(cargo: Cargo): boolean {
    if (this.canAdd(cargo)) {
      this.cargoItems.push(cargo);
      return true;
    } else {
      return false;
    }
  }

  addAstronaut(astronaut: Astronaut): boolean {
    if (this.canAdd(astronaut)) {
      this.astronauts.push(astronaut);
      return true;
    } else {
      return false;
    }
  }

}