<template>
  <div class="values-container" id="values">
    <p class="caption">APEXWORK</p>
    <h1 class="title">Os nossos Valores</h1>
    <div class="card-grid">
      <!-- * Security -->
      <div class="card">
        <img
          src="/icons/valores/seguranca-apex.svg"
          alt="Security Icon"
          class="icon"
        />
        <p class="card-caption">SEGURANÇA</p>
        <p class="card-description">
          A segurança é a espinha dorsal da nossa operação, garantindo um
          ambiente de trabalho protegido e promovendo a confiança mútua entre
          todos os membros da equipa.
        </p>
      </div>
      <!-- * Sustainability -->
      <div class="card">
        <img
          src="/icons/valores/sustentabilidade-apex.svg"
          alt="Sustainability Icon"
          class="icon"
        />
        <p class="card-caption">SUSTENTABILIDADE</p>
        <p class="card-description">
          As nossas práticas sustentáveis promovem o bem-estar social e o uso
          eficiente dos recursos, visando um futuro equilibrado para as gerações
          atuais e futuras.
        </p>
      </div>
      <!-- * Quality -->
      <div class="card">
        <img
          src="/icons/valores/qualidade-apex.svg"
          alt="Quality Icon"
          class="icon"
        />
        <p class="card-caption">QUALIDADE</p>
        <p class="card-description">
          A constante procura pela qualidade é o alicerce que sustenta a nossa
          reputação, refletindo o nosso compromisso em entregar produtos e
          serviços que superam as expectativas.
        </p>
      </div>
      <!-- * Deadline -->
      <div class="card">
        <img
          src="/icons/valores/qualidade-apex.svg"
          alt="Quality Icon"
          class="icon"
        />
        <p class="card-caption">CUMPRIMENTO DE PRAZOS</p>
        <p class="card-description">
          A pontualidade é o motor que impulsiona a nossa produtividade,
          assegurando que cada compromisso seja cumprido no tempo certo,
          fortalecendo assim as nossas parcerias.
        </p>
      </div>
      <!-- * Communication -->
      <div class="card">
        <img
          src="/icons/valores/comunicacao-apex.svg"
          alt="Communication Icon"
          class="icon"
        />
        <p class="card-caption">COMUNICAÇÃO</p>
        <p class="card-description">
          A comunicação eficaz é o fio condutor que conecta cada membro da
          equipa, promovendo transparência e alinhamento, essenciais para o
          sucesso e o crescimento contínuo da empresa.
        </p>
      </div>
      <!-- * Persons -->
      <div class="card">
        <img
          src="/icons/valores/pessoas-apex.svg"
          alt="Persons Icon"
          class="icon"
        />
        <p class="card-caption">PESSOAS</p>
        <p class="card-description">
          Colocamos as pessoas no centro de tudo o que fazemos, promovendo o seu
          bem-estar e crescimento, pois colaboradores realizados são essenciais
          para o sucesso de uma empresa.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.values-container {
  position: relative;
  height: 100dvh;
  width: 100%;
  max-height: 1080px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f3ea;

  .caption {
    font: normal normal 500 18px/22px Plus Jakarta Sans;
    color: #c09f55;
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  .title {
    margin-bottom: 52px;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    width: 100%;
    max-width: 1524px;

    .card {
      max-width: 492px;
      height: 280px;
      width: 100%;

      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 30px 60px;
      box-shadow: 10px 32px 72px #0f0d231f;
      border-radius: 24px;
      transition: background-color 150ms linear;
      .icon {
        width: 74px;
        height: 74px;
      }

      .card-caption {
        font: normal normal bold 20px/32px Plus Jakarta Sans;
        letter-spacing: 0px;
        color: #31513c;
        text-transform: uppercase;
        text-align: center;
      }

      .card-description {
        text-align: center;
        font: normal normal normal 16px/22px Plus Jakarta Sans;
        letter-spacing: 0px;
        color: #000d2e;
        opacity: 1;
      }

      &:hover {
        background-color: #c09f5552;
      }
    }
  }
}

@media (max-width: 1920px) {
  .values-container {
    max-height: 900px;
    .caption {
      font: normal normal 500 12px/14.67px Plus Jakarta Sans;
      margin-bottom: 4px;
    }
    .title {
      margin-bottom: 39px;
    }
    .card-grid {
      gap: 16px; // scaled from 24px
      max-width: 1016px; // scaled from 1524px

      .card {
        max-width: 328px; // scaled from 492px
        height: 186.67px; // scaled from 280px
        padding: 20px 40px; // scaled from 30px 60px
        box-shadow: 10px 32px 72px #0f0d231f;
        border-radius: 24px; // scaled from 24px

        .icon {
          width: 74px;
          height: 74px;
        }

        .card-caption {
          font: normal normal bold 13.33px/21.33px Plus Jakarta Sans; // scaled from 20px/32px
        }

        .card-description {
          font: normal normal normal 10.67px/14.67px Plus Jakarta Sans; // scaled from 16px/22px
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .values-container {
    max-height: 667px;
    padding: 20px;
    .caption {
      font: normal normal medium 18px/22px Montserrat;
      margin-bottom: 14px;
    }
    .title {
      margin-bottom: 34.67px;
    }
    .card-grid {
      grid-template-columns: repeat(6, 1fr);
      gap: 16px;
      max-width: 100%;
      height: 360px;
      overflow-x: scroll;
      box-shadow: 10px 32px 72px #0f0d231f;
      .card {
        height: 352px;
        width: 249px;
        padding: 40px 30px;
        border-radius: 24px;

        .icon {
          width: 74px;
          height: 74px;
        }

        .card-caption {
          font: normal normal bold 18px/22px Plus Jakarta Sans;
        }

        .card-description {
          font: normal normal normal 14px/20px Plus Jakarta Sans;
        }
      }
    }
  }
}
</style>
