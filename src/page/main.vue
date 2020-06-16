<template>
  <div>
    <Add />
    <Draw />
    <Result v-if="this.$store.state.done" />
  </div>
</template>

<script>
import Add from '../components/add/add';
import Draw from '../components/draw _nummber/draw';
import Result from '../components/result/result';
export default {
  name: 'Main',
  components: {
    Add,
    Draw,
    Result,
  },
};
</script>

<style scoped></style>
