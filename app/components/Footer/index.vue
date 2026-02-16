<script setup lang="ts">
import { FOOTER_NAV } from '@/data/navigation'
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div v-for="nav in FOOTER_NAV" :key="nav.title" class="footer__column">
        <p class="footer__title">{{ nav.title }}</p>
        <NuxtLink v-for="link in nav.links" :key="link.label" :to="link.src" class="footer__link">{{ link.label }}</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding-block: 60px;
  padding-inline: 20px;
  background-color: black;

  &__container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 60px;
  }

  &__column {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  &__title {
    color: #6F6F6F;
  }

  &__link {
    color: white;
  }
}

@media (min-width: 763px) {
  .footer {
    padding-block: 100px;
    padding-inline: 60px;

    &__container {
      grid-template-columns: repeat(4, 1fr);
      gap: 20px; 
    }
  }
}
</style>