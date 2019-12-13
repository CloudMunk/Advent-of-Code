<template>
    <div>
        <h1>--- Day 3: Crossed Wires ---</h1>
        <p>
            The gravity assist was successful, and you're well on your way to the Venus refuelling station. 
            During the rush back on Earth, the fuel management system wasn't completely installed, so that's 
            next on the priority list.
        </p>
        <p>
            Opening the front panel reveals a jumble of wires. Specifically, two wires are connected to a 
            central port and extend outward on a grid. You trace the path each wire takes as it leaves the 
            central port, one wire per line of text (your puzzle input).
        </p>
        <p>
            The wires twist and turn, but the two wires occasionally cross paths. To fix the circuit, you 
            need to find the intersection point closest to the central port. Because the wires are on a 
            grid, use the Manhattan distance for this measurement. While the wires do technically cross 
            right at the central port where they both start, this point does not count, nor does a wire 
            count as crossing with itself.
        </p>
        <p>
            For example, if the first wire's path is R8,U5,L5,D3, then starting from the central port (o), 
            it goes right 8, up 5, left 5, and finally down 3:
        </p>
        <img src="https://i.imgur.com/hwnCbRF.png" alt="fristimg">
        <p>
            Then, if the second wire's path is U7,R6,D4,L4, it goes up 7, right 6, down 4, and left 4:
        </p>
        <img src="https://i.imgur.com/s7Zl8ZM.png" alt="scndimg">
        <p>
            These wires cross at two locations (marked X), but the lower-left one is closer to the central 
            port: its distance is 3 + 3 = 6.
        </p>
        <h4>
            Here are a few more examples:
        </h4>
        <p>
            <ul>
                <li>
                    <strong>
                        R75,D30,R83,U83,L12,D49,R71,U7,L72
                        U62,R66,U55,R34,D71,R55,D58,R83 = distance 159
                    </strong>
                </li>
                <li>
                    <strong>
                        R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51
                        U98,R91,D20,R16,D67,R40,U7,R15,U6,R7 = distance 135
                    </strong>
                </li>
            </ul>
        </p>
        <h2>
            What is the Manhattan distance from the central port to the closest intersection?
        </h2>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
           solution: 0,
           input: `R75,D30,R83,U83,L12,D49,R71,U7,L72
           U62,R66,U55,R34,D71,R55,D58,R83`
        }
    },
    methods: {
        
            // const input = this.input
             parse (line) {
                const segments = []
                let position = { x: 0, y: 0 }
                line
                    .split(`,`)
                    .map((tuple) => {
                        const array = [...tuple]
                        const letter = array.shift()
                        const distance = parseInt(array.join``)
                        const nextPosition = { x: position.x, y: position.y }
                            switch(letter) {
                                case 'U':
                                    nextPosition.y -= distance
                                    break
                                case 'D':
                                    nextPosition.y += distance
                                    break
                                case 'R':
                                    nextPosition.x += distance
                                    break
                                case 'L':
                                    nextPosition.x -= distance
                                    break
                            }
                            segments.push({
                                from: {
                                    x: position.x,
                                    y: position.y
                                },
                                to: {
                                    x: nextPosition.x,
                                    y: nextPosition.y
                                },
                            })
                            position = nextPosition
                    })
                    return segments
            },
            print (variable) { 
                console.log(JSON.stringify(variable, null, 2))
            },
            solve (input) {
                const wires = input.split(`\n`).map(wire => this.parse(wire))
                console.log(JSON.stringify(wires))
                const intersections = []

                wires[0].map((segment1) => {
                    wires[1].map((segment2) => {
                        if((segment1.from.x == segment1.to.x) ^ (segment2.from.x == segment2.to.x)) {
                            const vertical = segment1.to.x == segment1.to.x ? segment1 : segment2
                            const horizontal = segment1.to.x == segment1.to.x ? segment2 : segment1

                            const minX = Math.min(horizontal.from.x, horizontal.to.x)
                            const maxX = Math.max(horizontal.from.x, horizontal.to.x)

                            const minY = Math.min(vertical.from.y, vertical.to.y)
                            const maxY = Math.max(vertical.from.y, vertical.to.y)

                            if(vertical.from.x >= minX && vertical.from.x <= maxX
                                && horizontal.from.y >= minY && horizontal.from.y <= maxY) {
                                intersections.push({
                                    x: vertical.from.x,
                                    y: horizontal.from.y
                                })
                            }
                        }
                    })
                })
                
            }
        
    },
    mounted () {
        //    console.log(this.solve(this.input))
           console.log(this.solve(this.input))
        }
}
</script>

<style scoped>

</style>