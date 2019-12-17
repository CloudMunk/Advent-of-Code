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

                for(let i = 158126; i <= 624574; i++) {
                    const s = i.toString()
                    const a = [...s]
                    
                    const count = {}
                    a.map((x) => (count[x] || 0) + 1)
                    
                    if(s.length == 6 && Object.entries(count).find(tuple => tuple[1] == 2) && s == a.sort().join``) {
                        matching.push(s)
                    }
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

</style>