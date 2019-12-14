<template>
    <div>
        <h1>--- Day 4: Secure Container ---</h1>
        <h2> {{ solution }} </h2>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
            solution: 0,
            input: 0,
            secondSolution: 0
            }
        },
        methods: {
            crackVenusCode () {
                const matching = []
                // const x = 158126
                // const y = 624574

                for(let i = 158126; i <= 624574; i++) {
                    const s = i.toString()
                    const a = [...s]
                    if(s.length == 6 && /(.)\1/.test(s) && s == a.sort().join``) {
                        matching.push(s)
                    }
                }
                console.log(matching.length)
            }
        },
        mounted () {
            this.crackVenusCode()
        }
    }
</script>

<style scoped>

</style>