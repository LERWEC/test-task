<script setup lang="ts">
import { HEADER_NAV } from '@/data/navigation'
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__label" />
    <button class="header__menu">
      <img src="~/assets/icon/menu.svg" alt="menu">
    </button>
    <div class="header__links links">
      <NuxtLink v-for="link in HEADER_NAV" :key="link.label" :to="link.src" class="links__item">{{ link.label }}</NuxtLink>
    </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: white;
  z-index: 999;

  &__container {
    padding-block: 10px;
    padding-inline: 20px;
    justify-content: space-between;
    align-items: center;
    display: flex;
  }

  &__label {
    position: static;
    width: 28px;
    height: 28px;
    background-color: #FF0000;
  }

  &__menu {
    background-color: #F5F5F5;
    padding: 8px;
    cursor: pointer;
    height: 40px;
  }

  .links {
    display: none;
  }
}

@media (min-width: 1024px) {
  .header {
    &__container {
      padding-block: 20px;
      justify-content: center;
    }

    &__label {
      position: absolute;
      top: 19px;
      left: 60px;
      width: 42px;
      height: 42px;
    }

    &__menu {
      display: none;
    }

    .links {
      display: flex;
      padding-block: 10px;
      padding-inline: 24px;
      gap: 40px;
      background-color: #F5F5F5;

      &__item {
        color: black;
      }
    }
  }
}
</style>