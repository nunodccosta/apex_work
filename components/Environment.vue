<template>
  <div class="environment-container" id="environment">
    <img
      src="/img/sustentabilidade-banner-apex.jpg"
      alt="Environment Background"
      class="environment-background background-image desktop"
    />
    <img
      src="/img/sustentabilidade-apex-mobile.jpg"
      alt="Environment Background"
      class="environment-background background-image mobile"
    />

    <div class="text-block">
      <h1 class="environment-title">COMPROMISSO COM O PRESENTE, RESPONSABILIDADE COM O FUTURO.</h1>

      <p class="environment-paragraph">
        Promovemos reciclagem, redução de resíduos e práticas conscientes para
        <br />
        construir um ambiente mais sustentável, dentro e fora da empresa.
      </p>
    </div>

    <a
      class="environment-button"
      href="/assets/ApexWork_Políticas_de_Sustentabilidade.pdf"
    >
      <img
        src="/icons/btn-sustentabilidade.svg"
        alt="Icon Arrow Environment"
        class="icon"
      />
    </a>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.environment-container {
  position: relative;
  height: 100dvh;
  width: 100%;
  max-height: 2600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .environment-background {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .text-block {
    max-width: 1080px;

    .environment-title {
      font: normal normal bold 96px/87px Bebas Neue;
      letter-spacing: 0px;
      color: white;
      text-shadow: 0px 3px 19px #000000e2;
      text-transform: uppercase;
      text-align: center;
    }
    .environment-paragraph {
      font: normal normal normal 22px/30px Plus Jakarta Sans;
      letter-spacing: 0px;
      color: white;
      text-shadow: 0px 3px 9px #000000a0;
      text-align: center;
    }
  }
  .environment-button {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 19px;
    width: 60px;
    height: 60px;
    margin-top: 86px;
    padding: 4px;
    text-decoration: none;
    border: 0px;
    border-radius: 35px;
    will-change: width, border;
    &:hover {
      animation: button_styling 250ms forwards;
      &::before {
        transition: all 450ms ease-in;
        opacity: 1;
      }
    }

    &:not(:hover) {
      animation: button_reverse 250ms forwards;
      &::before {
        opacity: 0;
      }
    }
    &::before {
      content: "Saber mais";
      display: inline-block;
      font: normal normal bold 16px/34px Plus Jakarta Sans;
      letter-spacing: 0px;
      color: #ffffff;
      text-transform: uppercase;
      text-align: center;
      opacity: 0;
    }

    @keyframes button_styling {
      0% {
        border: 0px solid white;
        opacity: 1;
        width: 60px;
      }
      5% {
        border: 1px solid white;
      }
      75% {
        width: 200px;
      }
      100% {
        border: 1px solid white;
        width: 200px;
        opacity: 0.86;
      }
    }
    @keyframes button_reverse {
      0% {
        border: 1px solid white;
        width: 200px;
        opacity: 0.86;
      }
      100% {
        border: 0px solid white;
        opacity: 1;
        width: 60px;
      }
    }

    .icon {
      z-index: -1;
      height: 52px;
      width: 52px;
    }
  }
}


@media (max-width: 1920px) {
  .environment-container {
    .text-block {
      max-width: 720px;
      .environment-title {
        font: normal normal bold 64px/58px Bebas Neue;
        text-shadow: 0px 2px 12.67px #000000e2; // 3px and 19px scaled
      }
      .environment-paragraph {
        font: normal normal normal 14.67px/20px Plus Jakarta Sans;
        text-shadow: 0px 2px 6px #000000a0; // 3px and 9px scaled
      }
    }

    .environment-button {
      width: 60px;
      height: 60px;
      margin-top: 60px;
    }
  }
}

@media (max-width: 992px) {
  .environment-container {
    .text-block {
      max-width: 340px;
      .environment-title {
        font: normal normal bold 52px/54px Bebas Neue;
        text-shadow: 0px 3px 19px #000000e2;
        margin-bottom: 14px;
      }
      .environment-paragraph {
        font: normal normal normal 16px/20px Plus Jakarta Sans;
        text-shadow: 0px 3px 9px #000000a0;
      }
    }

    .environment-button {
      width: 52px;
      height: 52px;
      margin-top: 60px;
      .icon {
        height: 100%;
      }
    }
  }
}
</style>
