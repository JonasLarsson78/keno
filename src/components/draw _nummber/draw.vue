<template>
  <span>
    <div class="drawBack">
      <span class="drawNum">{{ this.$store.state.winner.num1 }}</span>
      <span class="drawNum">{{ this.$store.state.winner.num2 }}</span>
      <span class="drawNum">{{ this.$store.state.winner.num3 }}</span>
      <span class="drawNum">{{ this.$store.state.winner.num4 }}</span>
      <span class="drawNum">{{ this.$store.state.winner.num5 }}</span>
    </div>
    <button :disabled="this.$store.state.disBtn" class="drawBtn" @click="draw">
      Draw Nummber
    </button>
  </span>
</template>

<script>
export default {
  name: 'DrawANumber',
  data() {
    return {
      data: {
        num1: '-',
        num2: '-',
        num3: '-',
        num4: '-',
        num5: '-',
      },
    };
  },
  /*  watch: {
    '$store.state.nummbers': function() {
      console.log('update nummbers');
    },
  }, */
  methods: {
    filter(key, data) {
      const numArr = this.$store.getters.nummbers;
      let newArr = numArr.filter((x) => x[key] === data);
      if (newArr.length) {
        newArr.forEach((x) => (x[key] = '+' + x[key]));
        this.$store.commit('addWinners', newArr);
      }
    },
    reset(key) {
      const numArr = this.$store.getters.nummbers;
      let newArr = numArr.forEach((x) => {
        if (x[key].includes('+')) {
          x[key] = x[key].substr(1);
        }
      });
    },
    draw() {
      this.$store.commit('changeDisBtn', true);
      if (this.$store.state.winner.num1 !== '-') {
        this.$store.commit('resetWinne');
        this.reset('num1');
        this.reset('num2');
        this.reset('num3');
        this.reset('num4');
        this.reset('num5');
      }
      this.$store.commit('setDone', false);
      this.$store.commit('resetWinners', []);

      const numArr = this.$store.getters.nummbers;
      if (numArr.length) {
        let time = 3000;
        const num1 = Math.floor(Math.random() * 9) + 1;
        this.$store.commit('addWinner', {
          num: 'num1',
          value: num1.toString(),
        });
        this.filter('num1', num1.toString());

        setTimeout(() => {
          const num2 = Math.floor(Math.random() * 9) + 1;
          this.$store.commit('addWinner', {
            num: 'num2',
            value: num2.toString(),
          });
          this.filter('num2', num2.toString());

          setTimeout(() => {
            const num3 = Math.floor(Math.random() * 9) + 1;
            this.$store.commit('addWinner', {
              num: 'num3',
              value: num3.toString(),
            });
            this.filter('num3', num3.toString());

            setTimeout(() => {
              const num4 = Math.floor(Math.random() * 9) + 1;
              this.$store.commit('addWinner', {
                num: 'num4',
                value: num4.toString(),
              });
              this.filter('num4', num4.toString());

              setTimeout(() => {
                const num5 = Math.floor(Math.random() * 9) + 1;
                this.$store.commit('addWinner', {
                  num: 'num5',
                  value: num5.toString(),
                });
                this.filter('num5', num5.toString());
                this.$store.commit('setDone', true);
                this.$store.commit('changeDisBtn', false);
              }, time);
            }, time);
          }, time);
        }, time);
        // presentera alla vinnare
      } else {
        console.log('Add Number or New game');
      }
    },
  },
};
</script>

<style scoped>
.drawBack {
  position: relative;
  left: 50%;
  transform: translate(-50%);
  width: 600px;
  background-color: black;
  border-radius: 5px;
  opacity: 0.8;
  margin-bottom: 10px;
}
.drawNum {
  font-size: 150px;
  color: white;
}
.drawBtn {
  width: 180px;
  height: 40px;
  background-color: blue;
  border: none;
  color: white;
  border-radius: 5px;
  font-size: 20px;
  margin-bottom: 30px;
  cursor: pointer;
}
.drawBtn:hover {
  background-color: #4747fc;
}
.drawBtn:disabled {
  background-color: gray;
}
@media only screen and (max-device-width: 901px) {
  .drawBack {
    width: 400px;
    margin-top: 50px;
  }
  .drawNum {
    font-size: 120px;
  }
}
</style>
