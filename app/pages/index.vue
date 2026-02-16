<script setup lang="ts"></script>

<template>
  <section class="main">
    <h1 class="main__title">тестовое задание</h1>
    <button class="main__btn" @click="navigateTo('/catalog')">В каталог</button>
  </section>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
  justify-content: center;
  flex: 1;

  &__title {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 26px;
    width: 50%;
  }

  &__btn {
    width: 124px;
    padding-block: 10px;
    text-align: center;
    background-color: #FF0000;
    color: white;
    border: none;
    cursor: pointer;
  }
}

@media (min-width: 640px) {
  .main {
    padding-inline: 60px;
    
    &__title {
      font-size: 64px;
    }
  }
}

@media (min-width: 420px) {
  .main__title {
    width: 100%;
  }
}
</style>