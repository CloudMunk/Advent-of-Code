<template>
    <div style="padding-left:50px; padding-right:50px;">
        <h1> --- Day 2: 1202 Program Alarm ---</h1>
       <p>
           On the way to your gravity assist around the Moon, your ship computer beeps angrily about a 
           "1202 program alarm". On the radio, an Elf is already explaining how to handle the situation: 
           "Don't worry, that's perfectly norma--" The ship computer bursts into flames.
       </p>
        <p>
            You notify the Elves that the computer's magic smoke seems to have escaped. "That computer ran 
            Intcode programs like the gravity assist program it was working on; surely there are enough 
            spare parts up there to build a new Intcode computer!"
        </p>
        <p>
            An Intcode program is a list of integers separated by commas (like 1,0,0,3,99). To run one, 
            start by looking at the first integer (called position 0). Here, you will find an opcode - 
            either 1, 2, or 99. The opcode indicates what to do; for example, 99 means that the program 
            is finished and should immediately halt. Encountering an unknown opcode means something went 
            wrong.
        </p>
        <p>
            Opcode 1 adds together numbers read from two positions and stores the result in a third 
            position. The three integers immediately after the opcode tell you these three positions - 
            the first two indicate the positions from which you should read the input values, and the 
            third indicates the position at which the output should be stored.
        </p>
        <p>
            For example, if your Intcode computer encounters 1,10,20,30, it should read the values at 
            positions 10 and 20, add those values, and then overwrite the value at position 30 with 
            their sum.
        </p>
        <p>
            Opcode 2 works exactly like opcode 1, except it multiplies the two inputs instead of 
            adding them. Again, the three integers after the opcode indicate where the inputs and 
            outputs are, not their values.
        </p>
        <p>
            Once you're done processing an opcode, move to the next one by stepping forward 4 positions.
        </p>
        <h3>
            For example, suppose you have the following program:
        </h3>
        <h4><strong>1,9,10,3,2,3,11,0,99,30,40,50</strong></h4>
        <p>
            For the purposes of illustration, here is the same program split into multiple lines:
        </p>
        <img src="https://i.imgur.com/14DBlDL.png" alt="numbers">
        <p>
            The first four integers, 1,9,10,3, are at positions 0, 1, 2, and 3. Together, they represent the 
            first opcode (1, addition), the positions of the two inputs (9 and 10), and the position of the output 
            (3). To handle this opcode, you first need to get the values at the input positions: position 9 
            contains 30, and position 10 contains 40. Add these numbers together to get 70. Then, store this 
            value at the output position; here, the output position (3) is at position 3, so it overwrites itself. 
            Afterward, the program looks like this:
        </p>
        <img src="https://i.imgur.com/RwF5sjU.png" alt="depiction of numbers in system">
        <p>
            Step forward 4 positions to reach the next opcode, 2. This opcode works just like the previous, 
            but it multiplies instead of adding. The inputs are at positions 3 and 11; these positions 
            contain 70 and 50 respectively. Multiplying these produces 3500; this is stored at position 0:
        </p>
        <img src="https://i.imgur.com/Y9WE5YW.png" alt="numbers again">
        <p>
            Stepping forward 4 more positions arrives at opcode 99, halting the program.
        </p>
        <h3>Here are the initial and final states of a few more small programs:</h3>
        <img src="https://i.imgur.com/FJhmzUx.png" width="800px" alt="final image">
        <p>
            Once you have a working computer, the first step is to restore the gravity assist program (your 
            puzzle input) to the "1202 program alarm" state it had just before the last computer caught 
            fire. To do this, before running the program, replace position 1 with the value 12 and replace 
            position 2 with the value 2. 
        </p>
        <h2><strong>What value is left at position 0 after the program halts?</strong></h2>
        <h3>Solution: {{ solution }}</h3>
        <br>
        <h1>--- Part Two ---</h1>
        <p>
            "Good, the new computer seems to be working correctly! Keep it nearby during this mission - 
            you'll probably use it again. Real Intcode computers support many more features than your new 
            one, but we'll let you know what they are as you need them."
        </p>
        <p>
            "However, your current priority should be to complete your gravity assist around the Moon. For 
            this mission to succeed, we should settle on some terminology for the parts you've already 
            built."
        </p>
        <p>
            Intcode programs are given as a list of integers; these values are used as the initial state for 
            the computer's memory. When you run an Intcode program, make sure to start by initializing memory 
            to the program's values. A position in memory is called an address (for example, the first value 
            in memory is at "address 0").
        </p>
        <p>
            Opcodes (like 1, 2, or 99) mark the beginning of an instruction. The values used immediately 
            after an opcode, if any, are called the instruction's parameters. For example, in the 
            instruction 1,2,3,4, 1 is the opcode; 2, 3, and 4 are the parameters. The instruction 99 
            contains only an opcode and has no parameters.
        </p>
        <p>
            The address of the current instruction is called the instruction pointer; it starts at 0. 
            After an instruction finishes, the instruction pointer increases by the number of values in 
            the instruction; until you add more instructions to the computer, this is always 4 
            (1 opcode + 3 parameters) for the add and multiply instructions. (The halt instruction would 
            increase the instruction pointer by 1, but it halts the program instead.)
        </p>
        <h4>
            "With terminology out of the way, we're ready to proceed. To complete the gravity assist, 
            you need to determine what pair of inputs produces the output 19690720."
        </h4>
        <p>
            The inputs should still be provided to the program by replacing the values at addresses 1 
            and 2, just like before. In this program, the value placed in address 1 is called the noun, 
            and the value placed in address 2 is called the verb. Each of the two input values will be 
            between 0 and 99, inclusive.
        </p>
        <p>
            Once the program has halted, its output is available at address 0, also just like before. 
            Each time you try a pair of inputs, make sure you first reset the computer's memory to 
            the values in the program (your puzzle input) - in other words, don't reuse memory from a 
            previous attempt.
        </p>
        <h3>
            Find the input noun and verb that cause the program to produce the output 19690720. 
            What is 100 * noun + verb? (For example, if noun=12 and verb=2, the answer would be 1202.)
        </h3>
        <h1>Solution: {{ secondSolution }} </h1>
    </div>
</template>

<script>


export default {
  data: function () {
        return {
           solution: 0,
           secondSolution: 0,
           input: '1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,9,1,19,1,19,5,23,1,23,5,27,2,27,10,31,1,31,9,35,1,35,5,39,1,6,39,43,2,9,43,47,1,5,47,51,2,6,51,55,1,5,55,59,2,10,59,63,1,63,6,67,2,67,6,71,2,10,71,75,1,6,75,79,2,79,9,83,1,83,5,87,1,87,9,91,1,91,9,95,1,10,95,99,1,99,13,103,2,6,103,107,1,107,5,111,1,6,111,115,1,9,115,119,1,119,9,123,2,123,10,127,1,6,127,131,2,131,13,135,1,13,135,139,1,9,139,143,1,9,143,147,1,147,13,151,1,151,9,155,1,155,13,159,1,6,159,163,1,13,163,167,1,2,167,171,1,171,13,0,99,2,0,14,0'
           // 
        }
    },
    created:{
       
        },
        methods: {
            program1202(input) {
                const s = input.split(`,`)
                // console.log('This is s', s)
                s[1] = 12
                s[2] = 2
                for(let i = 0; i < s.length; i += 4) {
                    const c = s.slice(i, i+4)
                    if(c[0] == 1) {
                        s[c[3]] = parseInt(s[c[1]]) + parseInt(s[c[2]])
                    } else if (c[0] == 2) {
                        s[c[3]] = s[c[1]] * s[c[2]]
                    } else if(c[0] == 99) {
                        break
                    }
                }
                return this.solution = s[0] 
            },
            newProg (first, second, input) {
                 const s = input.split(`,`)
                // console.log('This is s', s)
                s[1] = first
                s[2] = second
                for(let i = 0; i < s.length; i += 4) {
                    const c = s.slice(i, i+4)
                    if(c[0] == 1) {
                        s[c[3]] = parseInt(s[c[1]]) + parseInt(s[c[2]])
                    } else if (c[0] == 2) {
                        s[c[3]] = s[c[1]] * s[c[2]]
                    } else if(c[0] == 99) {
                        break
                    }
                }
                return this.solution = s[0] 
            },
            inputPairs(input) {
                for(let i = 0; i < 100; i++) {
                    for( let j = 0; j < 100; j++) {
                        if(this.newProg(i, j, input) === 19690720) {
                           return this.secondSolution = (100 * i) + j
                        }
                    }
                } 
            }
        },
        mounted () {
            this.program1202(this.input)
            this.inputPairs(this.input)
        }
}
</script>

<style scoped>

</style>