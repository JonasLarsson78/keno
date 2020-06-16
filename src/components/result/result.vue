<template>
  <div class="resultBack">
    <div v-for="(win, index) in this.win" :key="index">
      {{
        win.name + ' fick ' + antal(win) + ' rätt. Vinst ' + price(antal(win))
      }}
    </div>
    <div v-if="!this.win.length">Ingen vinst.</div>
  </div>
</template>

<script>
export default {
  name: 'Result',
  data() {
    return {
      win: [],
    };
  },
  mounted() {
    this.win = this.uniq(this.$store.state.winnners);
  },
  methods: {
    antal(obj) {
      let count = 0;
      for (let p in obj) {
        if (obj[p].includes('+')) {
          count++;
        }
      }
      return count;
    },
    price(n) {
      if (n === 1) {
        return '10kr';
      } else if (n === 2) {
        return '500kr';
      } else if (n === 3) {
        return '3000kr';
      } else if (n === 4) {
        return '10 000kr';
      } else if (n === 5) {
        return '1000 000kr';
      } else {
        return 'Test';
      }
    },
    uniq(arr) {
      return arr.filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i);
    },
  },
};
</script>

<style scoped></style>
