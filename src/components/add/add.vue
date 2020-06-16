<template>
  <div>
    <div class="addHeader">Add Nummber...</div>
    <input
      class="addName"
      type="text"
      placeholder="Name"
      :value="inputData.name"
      @change="onChange('name', $event.target.value)"
    /><br />
    <select
      class="addSelect radiusLeft"
      name="num1"
      :value="inputData.num1"
      @change="onChange('num1', $event.target.value)"
    >
      <option v-for="index in 9" :key="index">{{ index }}</option>
    </select>
    <select
      class="addSelect"
      name="num2"
      :value="inputData.num2"
      @change="onChange('num2', $event.target.value)"
    >
      <option v-for="index in 9" :key="index">{{ index }}</option>
    </select>
    <select
      class="addSelect"
      name="num3"
      :value="inputData.num3"
      @change="onChange('num3', $event.target.value)"
    >
      <option v-for="index in 9" :key="index">{{ index }}</option>
    </select>
    <select
      class="addSelect"
      name="num4"
      :value="inputData.num4"
      @change="onChange('num4', $event.target.value)"
    >
      <option v-for="index in 9" :key="index">{{ index }}</option>
    </select>
    <select
      class="addSelect radiusRigth"
      name="num5"
      :value="inputData.num5"
      @change="onChange('num5', $event.target.value)"
    >
      <option v-for="index in 9" :key="index">{{ index }}</option>
    </select>
    <br />
    <br />
    <button
      :disabled="this.$store.state.disBtn"
      class="addBtn"
      @click="addNummber"
    >
      Add Number
    </button>
    <!-- <button @click="test">Log</button> -->
    <div class="addList" v-if="this.$store.state.nummbers">
      <div class="addListHeader"><b>Nummer Lista:</b></div>
      <div v-for="(n, index) in this.$store.state.nummbers" :key="index">
        <span>{{ n.name + ': ' }}</span>
        <span class="green" v-if="n.num1.includes('+')">{{
          n.num1.substr(1)
        }}</span>
        <span class="red" v-else>{{ n.num1 }}</span>
        <span class="green" v-if="n.num2.includes('+')">{{
          n.num2.substr(1)
        }}</span>
        <span class="red" v-else>{{ n.num2 }}</span>
        <span class="green" v-if="n.num3.includes('+')">{{
          n.num3.substr(1)
        }}</span>
        <span class="red" v-else>{{ n.num3 }}</span>
        <span class="green" v-if="n.num4.includes('+')">{{
          n.num4.substr(1)
        }}</span>
        <span class="red" v-else>{{ n.num4 }}</span>
        <span class="green" v-if="n.num5.includes('+')">{{
          n.num5.substr(1)
        }}</span>
        <span class="red" v-else>{{ n.num5 }}</span>
        <br /><br />
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
  name: 'Add',
  data() {
    return {
      inputData: {
        name: '',
        num1: '1',
        num2: '1',
        num3: '1',
        num4: '1',
        num5: '1',
      },
    };
  },

  methods: {
    onChange(num, target) {
      this.inputData[num] = target;
    },
    addNummber() {
      if (this.inputData.name) {
        if (this.$store.state.winner.num1 !== '-') {
          this.$store.state.nummbers = [];
          this.$store.state.winner = {
            num1: '-',
            num2: '-',
            num3: '-',
            num4: '-',
            num5: '-',
          };
        }
        this.inputData.id = uuidv4();
        this.$store.commit('addNummbers', this.inputData);
        this.inputData = {
          name: '',
          num1: '1',
          num2: '1',
          num3: '1',
          num4: '1',
          num5: '1',
        };
      } else {
        console.log('No Name');
      }
    },
    test() {
      console.log(this.$store.state.nummbers);
    },
  },
};
</script>

<style scoped>
.addHeader {
  font-size: 40px;
  margin-top: 100px;
  color: green;
  font-weight: bold;
  -webkit-text-stroke: 1px white;
}
.green {
  color: green;
}
.red {
  color: red;
}
.addName {
  width: 300px;
  height: 50px;
  font-size: 30px;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 3px;
  margin-top: 10px;
}
.addSelect {
  width: 50px;
  height: 50px;
  font-size: 30px;
  margin-top: 10px;
  border: none;
  outline: none;
}
.radiusLeft {
  border-radius: 5px 0 0 5px;
}
.radiusRigth {
  border-radius: 0 5px 5px 0;
}
.addBtn {
  width: 180px;
  height: 40px;
  background-color: green;
  border: none;
  color: white;
  border-radius: 5px;
  font-size: 20px;
  margin-bottom: 30px;
  cursor: pointer;
}
.addBtn:hover {
  background-color: #23a523;
}
.addBtn:disabled {
  background-color: gray;
}
.addList {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 200px;
  height: calc(100vh - 60px);
  background: white;
  text-align: left;
  padding: 10px;
  border-radius: 5px;
}
.addListHeader {
  margin-bottom: 5px;
}
@media only screen and (max-device-width: 901px) {
  .addHeader {
    font-size: 30px;
    margin-top: 10px;
  }
  .addList {
    position: relative;
    width: 300px;
    height: 300px;

    left: 50%;
    transform: translate(-50%);
  }
}
</style>
