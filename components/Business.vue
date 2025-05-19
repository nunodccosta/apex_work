<template>
  <div class="business-container" id="business">
    <h1 class="title gold">Áreas de Negócio</h1>

    <div class="card-group">
      <div class="card-wrapper">
        <div class="card">
          <div class="front-card">
            <img src="/img/mecanica.png" alt="Mecanica" class="card-image" />
            <h4 class="label-card">MECÂNICA</h4>
          </div>
          <div class="back-card">
            <img src="/favicon.svg" alt="icon" class="logo-card" />
            <h5 class="description-card">
              A integração eficiente da manutenção preventiva e corretiva é
              essencial para garantir a operação contínua da maquinaria
              industrial.
            </h5>
          </div>
        </div>
        <div class="card">
          <div class="front-card">
            <img
              src="/img/soldadura-instalacao-industrial.png"
              alt="Solder"
              class="card-image"
            />
            <h4 class="label-card">SOLDADURA E INSTALAÇÃO INDUSTRIAL</h4>
          </div>
          <div class="back-card">
            <img src="/favicon.svg" alt="icon" class="logo-card" />
            <h5 class="description-card">
              Possuímos conhecimento técnico em processos TIG, MIG, MAG e SER,
              com habilidades especializadas em engenharia de soldagem.
            </h5>
          </div>
        </div>
        <div class="card">
          <div class="front-card">
            <img
              src="/img/automacao-energia-e-instrumentacao.png"
              alt="Automation"
              class="card-image"
            />
            <h4 class="label-card">AUTOMAÇÃO, ENERGIA E INTRUMENTAÇÃO</h4>
          </div>
          <div class="back-card">
            <img src="/favicon.svg" alt="icon" class="logo-card" />
            <h5 class="description-card">
              A automação industrial foca na modernização de equipamentos,
              soluções personalizadas, diagnóstico de avarias e controlo de
              processos para reduzir custos energéticos.
            </h5>
          </div>
        </div>
        <div class="card">
          <div class="front-card">
            <img
              src="/img/metalomecanica-e-caldeiraria.png"
              alt="Metalwork"
              class="card-image"
            />
            <h4 class="label-card">METALOMECÂNICA E CALDEIRARIA</h4>
          </div>
          <div class="back-card">
            <img src="/favicon.svg" alt="icon" class="logo-card" />
            <p class="description-card down">
              • Construção de Equipamentos de Pressão com Marcação CE
            </p>
            <p class="description-card down">
              • Construção de Tanques Atmosféricos
            </p>
            <p class="description-card down">
              • Construção e Montagem de Dutos Industriais
            </p>
            <p class="description-card down">
              • Construção e Montagem tubaria processo OD
            </p>
            <p class="description-card">
              • Construção Metálica de estruturas diversas
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.business-container {
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100dvh;
  max-height: 1080px;

  padding: 20px;

  .title {
    margin-bottom: 52px;
  }

  .card-group {
    display: block;
    width: 100%;
    max-width: 100%;

    .card-wrapper {
      position: relative;
      height: auto;
      width: auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 12px;
      .card {
        flex: 1;
        position: relative;
        max-width: 406px;
        aspect-ratio: 406 / 608;
        height: auto;
        border-radius: 24px;
        overflow: hidden;

        .front-card {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 46px 38px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          .card-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            z-index: -1;
          }
          .label-card {
            text-align: left;
            font: normal normal bold 46px/46px Bebas Neue;
            letter-spacing: 0px;
            color: #ffffff;
            text-transform: uppercase;
            opacity: 1;
          }
        }
        .back-card {
          position: absolute;
          top: 0;
          left: 0;

          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          height: 100%;
          width: 100%;
          padding: 46px 38px;
          opacity: 0;
          background-color: #c09f55;
          transition: opacity 250ms ease-in-out;

          &:hover {
            opacity: 1;
          }

          .logo-card {
            position: absolute;
            top: 40px;
            right: 38px;
            filter: brightness(0%) invert(1);
            height: 38px;
          }

          .description-card {
            font: normal normal 800 18px/26px Plus Jakarta Sans;
            letter-spacing: 0px;
            color: #ffffff;
            margin-bottom: 14px;
            &.down {
              margin-bottom: 14px;
            }
          }
          // DEPRECATED
          // .paragraph-card {
          //   font: normal normal normal 16px/16px Plus Jakarta Sans;
          //   letter-spacing: 0px;
          //   color: #ffffff;
          // }
        }
      }
    }
  }
}

@media (max-width: 1920px) {
  .business-container {
    max-height: 900px;
    .title {
      margin-bottom: 34.67px;
    }

    .card-group {
      .card {
        width: 270.67px; // scaled from 406px
        height: 405.33px; // scaled from 608px
        border-radius: 16px; // scaled from 24px

        .front-card {
          padding: 30.67px 25.33px; // scaled from 46px 38px

          .label-card {
            font: normal normal bold 30.67px/30.67px Bebas Neue; // scaled from 46px/46px
          }
        }

        .back-card {
          padding: 30.67px 25.33px; // scaled from 46px 38px

          .logo-card {
            top: 26.67px; // scaled from 40px
            right: 25.33px; // scaled from 38px
            height: 25.33px; // scaled from 38px
          }

          .description-card {
            font: normal normal 800 12px/17.33px Plus Jakarta Sans;
            margin-bottom: 9.33px;
            &.down {
              margin-bottom: 4px;
            }
          }

          // DEPRECATED
          // .paragraph-card {
          //   font: normal normal normal 10.67px/10.67px Plus Jakarta Sans; // scaled from 16px/16px
          //   &.down {
          //     margin-bottom: 9.33px; // scaled from 14px
          //   }
          // }
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .business-container {
    max-height: unset;
    height: fit-content;
    padding: 70px 0px;

    .title {
      margin-bottom: 34.67px;
    }

    .card-group {
      position: relative;
      width: 100%;
      height: auto;
      overflow-x: scroll;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }

      .card-wrapper {
        padding: 0 0 0 20px;
        width: fit-content;

        .card {
          position: relative;
          display: flex;
          flex-direction: column;

          width: 304px;
          height: 508px;
          border-radius: 24px;
          overflow: hidden;

          .front-card {
            position: relative;
            height: 304px;
            width: 304px;
            padding: 35px 25px;

            .label-card {
              font: normal normal bold 34px/35px Bebas Neue;
            }
          }
          .back-card {
            position: relative;
            height: 204px;
            width: 304px;
            padding: 35px 25px;
            opacity: 1;
            overflow: hidden;

            .logo-card {
              display: none;
            }

            .description-card {
              font: normal normal 600 16px/20px Plus Jakarta Sans;
              margin-bottom: 9.33px; // scaled from 14px
              &.down {
                margin-bottom: 14px;
              }
            }

            &:active {
              position: absolute;
              height: 100%;
              top: 0;
              left: 0;
            }
            // DEPRECATED
            // .paragraph-card {
            //   font: normal normal 600 16px/24px Plus Jakarta Sans;
            //   &.down {
            //     margin-bottom: 9.33px; // scaled from 14px
            //   }
            // }
          }
        }
      }
    }
  }
}
</style>
