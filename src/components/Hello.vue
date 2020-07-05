<template>
    <div>
        <h1>hello {{name}}</h1>
        <el-radio v-model="radio" label="1">option 1</el-radio>
        <el-radio v-model="radio" label="2">option 2</el-radio>
    </div>

</template>

<script>
export default {
    data() {
        return {
            name: "horatio",
            radio: "2"
        }
    },
}
</script>

<style lang="">
    
</>