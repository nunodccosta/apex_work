<template>
  <div class="container-about" id="about">
    <div class="wrapper-about">
      <h1 class="title gold">Sobre Nós</h1>
      <div class="text-block">
        <div class="block left-side">
          <p class="paragraph">
            <span class="scaled">
              Aliamos experiência à ambição de superar, criando soluções com
              valor real e impacto duradouro.
            </span>
          </p>
          <p class="paragraph" style="margin-top: 28px">
            A nossa empresa foi criada com um compromisso inabalável de
            proporcionar qualidade e confiabilidade, garantindo resultados
            sólidos e duradouros.
            <br />
            <br />
            Não nos limitamos apenas a ser uma empresa de prestação de serviços,
            comprometemo-nos a contribuir para a valorização do património dos
            nossos clientes e a promover a sustentabilidade de cada projeto.
          </p>
        </div>

        <div class="block right-side">
          <p class="paragraph">
            Cada desenvolvimento em que nos envolvemos é moldado pela vasta
            experiência acumulada ao longo dos anos, refletindo o nosso empenho
            em superar as suas expectativas e percorrer um caminho de sucesso
            nos mercados em que nos encontramos. O diferencial da Apexwork
            reside na formação de equipas altamente experientes, com anos de
            atividade comprovada.
            <br />
            <br />
            Contribuímos para as necessidades de mão de obra, fornecendo equipas
            completas por períodos indefinidos, com o principal objetivo de
            garantir o sucesso contínuo dos projetos. Ao nos integrarmos no
            processo, oferecemos previsibilidade nas tomadas de decisões,
            adaptação a diversos cenários, indicadores de desempenho e um
            planeamento que assegura resultados eficazes.
          </p>
        </div>
      </div>
    </div>

    <img
      class="watermark-about"
      src="/water-mark-apex/water-mark-apex-gold-sobre-nos.svg"
      alt="watermark"
    />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.container-about {
  position: relative;
  height: 880px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .wrapper-about {
    width: 100%;
    max-width: 1610px;
    .title {
      width: 100%;
      text-align: left;
      margin-bottom: 40px;
    }
    .text-block {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .block {
        max-width: 750px;
        width: 50%;
      }
    }
  }
  .watermark-about {
    position: absolute;
    bottom: 0;
    left: 50%;
    max-width: 584px;
    transform: translateX(50%);
    z-index: -1;
  }
}
</style>
