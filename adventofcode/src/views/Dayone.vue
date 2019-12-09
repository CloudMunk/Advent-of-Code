<template>
    <div>
        <h1>This is the solution to Day One Task 1</h1>
        <h2>--- Day 1: The Tyranny of the Rocket Equation ---</h2>
        <p>
            Santa has become stranded at the edge of the Solar System while delivering 
            presents to other planets! To accurately calculate his position in space, 
            safely align his warp drive, and return to Earth in time to save Christmas, 
            he needs you to bring him measurements from fifty stars.
        </p>
        <p>
            Collect stars by solving puzzles. Two puzzles will be made available on 
            each day in the Advent calendar; the second puzzle is unlocked when you 
            complete the first. Each puzzle grants one star. Good luck!
        </p>
        <h3>
            The Elves quickly load you into a spacecraft and prepare to launch.
        </h3>
        <p>
            At the first Go / No Go poll, every Elf is Go until the Fuel 
            Counter-Upper. They haven't determined the amount of fuel required yet.
        </p>
        <p>
            Fuel required to launch a given module is based on its mass. Specifically, 
            to find the fuel required for a module, take its mass, divide by three, 
            round down, and subtract 2.
        </p>
        <h4>For example:</h4>
        <p>
            For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
            For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
            For a mass of 1969, the fuel required is 654.
            For a mass of 100756, the fuel required is 33583.
            The Fuel Counter-Upper needs to know the total fuel requirement. 
            To find it, individually calculate the fuel needed for the mass of each 
            module (your puzzle input), then add together all the fuel values.
        </p>
        <p>
            What is the sum of the fuel requirements for all of the modules on your spacecraft?
        </p>
        <div class="submitSection">
            <input  @keyup.enter="calcFuel(input)" v-model="input" type="text" placeholder="Insert number & hit enter" style="margin-bottom: 15px">
            
        </div>
        
        <h3>Solution: {{solution }}</h3>
        <h4>You input: {{ input }}</h4>
    </div>
</template>

<script>
// import { TxtReader } from "txt-reader"
// import input from 'raw-loader!../Inputs/input.txt'

export default {
    data: function () {
        return {
            modules: 14,
            input: 0,
            solution: 0
        }
    },
    created:{
        // function calcFuel () {
        //         let sum = 0
        //         let mass = this.modules
        //         sum = Math.floor((mass/3) - 2)
        //         this.solution = sum
        //             return sum 
        },
        methods: {
            // console.log("calcFuel: ", calcFuel(modules))
              calcFuel (input) {
                let sum = 0
                let mass = input
                sum = Math.floor((mass/3) - 2)
                return this.solution = sum
              }
        },
        mounted () {
            // let modules = this.modules
            // this.calcFuel(modules)
        }
}
</script>

<style  scoped>
    .submitSection {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-right: 250px;
        margin-left: 250px;
    }
</style>