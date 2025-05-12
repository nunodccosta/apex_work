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

        <div ref="right_side" class="block right-side">
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
        <p class="mobile label-seemore" @click="toggleSee">{{ label_see }}</p>
      </div>
    </div>

    <img
      class="watermark-about desktop"
      src="/water-mark-apex/water-mark-apex-gold-sobre-nos.svg"
      alt="watermark"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      label_see: "VER MAIS",
    };
  },
  methods: {
    toggleSee() {
      const rightBlock = this.$refs.right_side;

      if (!rightBlock.classList.contains("show")) {
        rightBlock.classList.add("show");
        this.label_see = "VER MENOS";
        return;
      }

      rightBlock.classList.remove("show");
      this.label_see = "VER MAIS";
      return;
    },
  },
};
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
    .label-seemore {
      display: none;
      text-align: left;
      font: normal normal bold 14px/18px Plus Jakarta Sans;
      border-bottom: 2px solid #c09f55;
      width: fit-content;
      letter-spacing: 0px;
      color: #c09f55;
      text-transform: uppercase;
      margin-top: 20px;
      padding: 2px;
    }
  }
  .watermark-about {
    position: absolute;
    bottom: 0;
    left: 50%;
    max-width: 584px;
    transform: translateX(125px);
    z-index: -1;
  }
}

@media (max-width: 1920px) {
  .container-about {
    height: 586.67px;

    .wrapper-about {
      max-width: 1073.33px;

      .title {
        margin-bottom: 26.67px;
      }

      .text-block {
        .block {
          max-width: 500px;
        }
      }
    }

    .watermark-about {
      max-width: 389.33px;
    }
  }
}
@media (max-width: 992px) {
  .container-about {
    height: unset;
    padding: 94px 20px 72px 20px;
    .wrapper-about {
      .text-block {
        position: relative;
        flex-direction: column;
        gap: 20px;
        .block {
          width: 100%;
        }
        .left-side {
          background-color: white;
          z-index: 1000;
        }

        .right-side {
          display: block;
          position: relative;
          height: 0px;
          overflow: hidden;

          transition: all 250ms linear;

          &.show {
            display: flex;
            position: relative;
            height: 504px;
          }
        }
      }
      .label-seemore {
        display: block;
      }
    }
  }
}
</style>
