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
</style>
