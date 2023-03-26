<template>
  <div class="clock">
    <div class="hour">
      <div ref="hoursArrow" class="hours"></div>
    </div>
    <div class="minute">
      <div ref="minutesArrow" class="minutes"></div>
    </div>
    <div class="second">
      <div ref="secondsArrow" class="seconds"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import useTimer from '@/hooks/useTimer';

const { tick } = useTimer(calculate, 1000);
const hoursArrow = ref<HTMLDivElement | null>(null);
const minutesArrow = ref<HTMLDivElement | null>(null);
const secondsArrow = ref<HTMLDivElement | null>(null);
const deg = 6;

function calculate() {
  const date = new Date();
  const hours = date.getHours() * 30;
  const minutes = date.getMinutes() * deg;
  const seconds = date.getSeconds() * deg;
  if (hoursArrow.value) {
    hoursArrow.value.style.transform = `rotateZ(${hours + minutes / 12}deg)`;
  }
  if (minutesArrow.value) {
    minutesArrow.value.style.transform = `rotateZ(${minutes}deg)`;
  }
  if (secondsArrow.value) {
    secondsArrow.value.style.transform = `rotateZ(${seconds}deg)`;
  }
}

onMounted(() => {
  calculate();
  tick();
});
</script>

<style scoped lang="scss">
.clock {
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../assets/clock.png') center / cover;
  border: 4px solid #091921;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  filter: invert(1);

  &::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: black;
    z-index: 5;
  }

  & .hour {
    position: absolute;

    & .hours {
      width: 160px;
      height: 160px;
      display: flex;
      justify-content: center;
      position: relative;
      border-radius: 50%;

      &::before {
        content: '';
        position: absolute;
        width: 8px;
        height: 80px;
        background: #ff105e;
        z-index: 2;
        border-radius: 6px 6px 0 0;
      }
    }
  }

  & .minute {
    position: absolute;

    & .minutes {
      width: 190px;
      height: 190px;
      display: flex;
      justify-content: center;
      position: relative;
      border-radius: 50%;

      &::before {
        content: '';
        position: absolute;
        width: 4px;
        height: 90px;
        background: black;
        z-index: 3;
        border-radius: 6px 6px 0 0;
      }
    }
  }

  & .second {
    position: absolute;

    & .seconds {
      width: 230px;
      height: 230px;
      display: flex;
      justify-content: center;
      position: relative;
      border-radius: 50%;

      &::before {
        content: '';
        position: absolute;
        width: 2px;
        height: 150px;
        background: black;
        z-index: 4;
        border-radius: 6px 6px 0 0;
      }
    }
  }
}
</style>
