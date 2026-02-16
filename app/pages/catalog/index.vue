<script setup lang="ts">
const { items, error, pending, isLoadingMore, loadMore } = await useCatalog()
</script>

<template>
  <section class="catalog">
    <h2 class="catalog__title">каталог</h2>
    <div v-if="items.length" class="catalog__list">
      <NuxtLink v-for="item in items" :key="item.id" to="#" class="catalog__item">
        <img src="~/assets/icon/favorite.svg" alt="menu" class="catalog__favorite">
        <div class="catalog__img--wrapper">
          <NuxtImg
            :src="item.image"
            :alt="item.name"
            class="catalog__img"
          />
        </div>
        <div class="catalog__info">
          <div class="catalog__price">
            <p class="catalog__price--full">{{ item.price }} ₽</p>
            <p class="catalog__price--split">{{ Math.ceil(item.price/2) }} × 2</p>
          </div>
          <p class="catalog__name">{{ item.name }}</p>
        </div>
      </NuxtLink>
    </div>
    <p v-if="pending" class="catalog__loading">Загрузка...</p>
    <div v-else class="catalog__load">
      <p v-if="error" class="catalog__error">{{ error }}</p>
      <button v-if="isLoadingMore" class="catalog__btn" @click="loadMore">
        Показать еще
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.catalog {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-inline: 20px;
  padding-top: 20px;
  padding-bottom: 40px;

  &__title {
    font-weight: 500;
    font-size: 24px;
    text-transform: uppercase;
  }
  
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 15px;
    color: black;
    position: relative;
  }

  &__favorite {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }

  &__img {
    width: 100%;

    &--wrapper {
      display: flex;
      align-items: center;
      flex: 1;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  &__price {
    display: flex;
    flex-direction: column;
    gap: 9px;

    &--full {
      font-weight: 500;
      font-size: 24px;
      line-height: 17px;
    }

    &--split {
      padding: 4px;
      background-color: black;
      color: white;
      font-weight: 500;
      font-size: 14px;
      line-height: 10px;
      box-shadow: 0px 4px 4px 0px #0000001F;
      width: fit-content;
    }
  }

  &__name {
    font-size: 12px;
    height: 17px;
  }

  &__load {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  &__error {
    padding-block: 10px;
    padding-inline: 24px;
    font-size: 14px;
    line-height: 20px;
  }

  &__btn {
    padding-block: 10px;
    padding-inline: 24px;
    border: 1px solid black;
    background-color: white;
    cursor: pointer;
  }

  &__loading {
    padding-block: 10px;
  }
}

@media (min-width: 763px) {
  .catalog {
    padding-block: 100px;
    padding-inline: 60px;
    gap: 110px;

    &__title {
      font-size: 42px;
      line-height: 46px;
    }

    &__list {
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }

    &__item {
      gap: 31px;
    }

    &__favorite {
      top: 10px;
      right: 10px;
    }

    &__info {
      gap: 5px;
    }

    &__price {
      flex-direction: row;
      gap: 10px;
    }

    &__name {
      font-size: 16px;
      height: 22px;
    }
  }
}

@media (min-width: 1440px) {
  .catalog {
    &__list {
      grid-template-columns: repeat(4, 1fr);
      gap: 40px;
    }
  }
}
</style>