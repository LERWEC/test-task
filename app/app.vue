<template>
  <div class="layout-wrapper">
    <Header />
    
    <main class="main-content">
      <NuxtPage />
    </main>
    
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  position: relative; 
  min-height: 100vh;
}

.main-content {
  min-height: 100vh;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}

@media (min-width: 1440px) {
  .main-content {
    margin-top: 80px;
  }
}
</style>
