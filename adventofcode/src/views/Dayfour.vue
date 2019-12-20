<template>
    <div>
        <h1>--- Day 4: Secure Container ---</h1>
        <p>
            You arrive at the Venus fuel depot only to discover it's protected by a password. 
            The Elves had written the password on a sticky note, but someone threw it out.
        </p>
        <h4 >However, they do remember a few key facts about the password:</h4>
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
        <ul class="textDeco" >
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
                const matching = [];

                for (let i = 158126; i <= 624574; i++) {
                const stringNum = String(i);
                //-------------------------------------------
                let isIncreasing = false;
                // let containsDouble = false;
                let containsTriple = true
                
                
                //-------------------------------------------
                for (let j = 0; j < stringNum.length; j++) {
                    if (j > 0) {
                    // Checks if increasing
                    if (stringNum[j - 1] <= stringNum[j]) {
                        isIncreasing = true;
                    } else {
                        isIncreasing = false;
                        break; 
                    }
                    // If a pair and not part of three in a row but three in a row is still ok if there is a pair
                    if (stringNum[j] === stringNum[j + 1] && stringNum[j] === stringNum[j + 2])
                        containsTriple = false
                    
                    // TRIED: 1609 1232 902 981 173 0 710 1473 1417 880 964 1462 1102 791 
                    // Solutions form others: 1462 1102
                    }
                }
                
                //------------------------------------------
                if (isIncreasing && containsTriple) {
                    matching.push(i)
                }
                this.solution = matching.length
                }

                console.log(matching.length);

            },
            possibleSolution() {
                const day4 = "193651-624574";

                const passCount = (str) => {
                let a = str.split("-")[0];
                let b = str.split("-")[1];
                let count = 0;
                let i = a.toString();
                let j;
                let k;
                while (i < b) {
                    j = 1;
                    while (j < i.length) {
                    k = 1;
                    if (i[j] < i[j-1]) {
                        let nextNum = i.substr(0,j).concat(i[j-1].repeat(i.length-j));
                        i = nextNum;
                        j = i.length;
                    } else if (j == i.length-1) {
                        while (k < i.length) {
                        if (i[k] == i[k-1] && i[k] != i[k+1] && i[k] != i[k-2]) {
                            count++;
                            k = i.length;
                        } else {
                            k++;
                        }
                        }
                        i = (parseInt(i) + 1).toString();
                        j++;
                    } else {
                        j++;
                    }
                    }
                }
                return count && console.log(count);
                };

                passCount(day4);
            }
        },
        mounted () {
            this.crackVenusCode()
            this.possibleSolution()
        }
    }
</script>

<style scoped>
.textDeco {
    list-style-type: none;
}
</style>