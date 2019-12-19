<template>
    <div>
        <h1>--- Day 4: Secure Container ---</h1>
        <p>
            You arrive at the Venus fuel depot only to discover it's protected by a password. 
            The Elves had written the password on a sticky note, but someone threw it out.
        </p>
        <h4>However, they do remember a few key facts about the password:</h4>
        <ul class="textDeco">
            <li>
                It is a six-digit number.
            </li>
            <li>
                The value is within the range given in your puzzle input.
            </li>
            <li>
                Two adjacent digits are the same (like 22 in 122345).
            </li>
            <li>
                Going from left to right, the digits never decrease; they only ever,
                increase or stay the same (like 111123 or 135679).
            </li>
        </ul>
        <p>
            Other than the range rule, the following are true:
        </p>
        <ul class="textDeco">
            <li>
                111111 meets these criteria (double 11, never decreases).
            </li>
            <li>
                223450 does not meet these criteria (decreasing pair of digits 50).
            </li>
            <li>
                123789 does not meet these criteria (no double).
            </li>
        </ul>
        <h3>
            How many different passwords within the range given in your puzzle input meet these criteria?
        </h3>
        <h4>Your puzzle answer was 1665.</h4>
        <br>
        <h1>--- Part Two ---</h1>
        <p>
            An Elf just remembered one more important detail: the two adjacent matching digits are not 
            part of a larger group of matching digits.
        </p>
        <p>
            An Elf just remembered one more important detail: the two adjacent matching digits are not 
            part of a larger group of matching digits.
        </p>
        <p>
            Given this additional criterion, but still ignoring the range rule, the following are now true:
        </p>
        <ul class="textDeco">
            <li>
                112233 meets these criteria because the digits never decrease and all repeated digits are exactly two digits long.
            </li>
            <li>
                123444 no longer meets the criteria (the repeated 44 is part of a larger group of 444).
            </li>
        </ul>
        <h2>How many different passwords within the range given in your puzzle input meet all of the criteria?</h2>
        <h2> {{ solution }} </h2>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                solution: 0
            }
        },
        methods: {
            crackVenusCode () {
                
                const matching = []
                
                for(let i = 158126; i <= 624574; i++) {
                    const s = i.toString()
                    const a = [...s]
                    
                    const count = {}
                    a.map((x) => (count[x] || 0) + 1)
                    // console.log(count)
                    // let filter = (a) => {return a.find(x => x[1] == 2)}

                    // a.reduce((total, filter) => {return total + this.filter}, 0)
                    // return matching.push(a)

                    if(/^[0-9][0-9][0-9][0-9][0-9][0-9]$/i && s == a.sort().join(``)) {
                        matching.push(s)
                    }
                    // if(s.length == 6 && Object.entries(count).find(matches => matches == matches[i]) && a.sort().join``))
                    // matching.push(s)
                    // s.length == 6 &&
                    // Object.entries(count).find(tuple => tuple[1] == 2)
                    // /[^0-9\/]/
                } console.log(matching.length) 
                this.solution = matching.length
            }
        },
        mounted () {
            this.crackVenusCode()
        }
    }
</script>

<style scoped>
.textDeco {
    list-style-type: none;
}
</style>