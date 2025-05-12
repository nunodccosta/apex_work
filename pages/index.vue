<template>
  <div class="page-content">
    <!-- Banner -->
    <div class="banner">
      <img
        class="background desktop background-image"
        alt="Banner Background of Solder"
        src="/img/apex-banner.jpg"
      />
      <img
        class="background mobile background-image"
        alt="Banner Background of Solder - Mobile"
        src="/img/banner-apex-mobile.jpg"
      />

      <h1 class="banner-text">
        DO PLANEAMENTO À EXECUÇÃO, <br />
        EXCELÊNCIA EM CADA ETAPA.
      </h1>
    </div>
    <About></About>
    <Environment></Environment>
    <Values></Values>
    <Business></Business>
    <Services></Services>
    <Recruitment></Recruitment>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.banner {
  position: relative;
  height: 100dvh;
  max-height: 2600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .background {
    position: absolute;
    z-index: -1;
    top: 0;

    height: 100%;
    width: 100%;

    object-position: center;
    object-fit: cover;
  }
  .banner-text {
    position: relative;
    font: normal normal bold 132px/124px Bebas Neue;
    color: white;
    text-transform: uppercase;
    text-align: center;
  }
}


@media (max-width: 1920px) {
  .banner {
    // Perfect
    .banner-text {
      font: normal normal bold 88px/82px Bebas Neue;
    }
  }
}

@media (max-width: 992px) {
  .banner {
    // Perfect
    .banner-text {
      font: normal normal bold 52px/54px Bebas Neue;
      max-width: 310px;
    }
  }
}
</style>
