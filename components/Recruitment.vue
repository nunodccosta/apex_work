<template>
  <div class="recruitment-container">
    <img
      src="/water-mark-apex/water-mark-apex-white-recrutamento.svg"
      alt="Watermark"
      class="watermark"
    />
    <div class="input-container">
      <h1 class="title white">Recrutamento</h1>
      <h5 class="description">
        Valorizamos talento, dedicação e vontade de crescer. Preencha o
        formulário e dê o primeiro passo para fazer parte da nossa equipa.
      </h5>
      <div class="top-group group">
        <div class="input-wrapper name">
          <img
            src="/icons/recrutamento/recrutamento-nome.svg"
            alt="RecrutamentoCV"
            class="icon"
          />
          <input
            id="name"
            type="text"
            class="input-el"
            placeholder="Nome Completo"
          />
          <!-- <label class="input-label" for="name">Nome Completo</label> -->
        </div>
        <div class="input-wrapper email">
          <img
            src="/icons/recrutamento/recrutamento-email.svg"
            alt="RecrutamentoCV"
            class="icon"
          />
          <input id="email" type="text" class="input-el" placeholder="Email" />
          <!-- <label class="input-label" for="name">Email</label> -->
        </div>
      </div>
      <div class="bot-group group">
        <div class="input-wrapper contact">
          <img
            src="/icons/recrutamento/recrutamento-contacto.svg"
            alt="Recrutamento Contacto"
            class="icon"
          />
          <input
            id="contact"
            type="text"
            class="input-el"
            placeholder="Contactos"
          />
          <!-- <label for="contact" class="input-label">Contactos</label> -->
        </div>
        <div class="input-wrapper file">
          <img
            src="/icons/recrutamento/recrutamento-cv.svg"
            alt="RecrutamentoCV"
            class="icon"
          />

          <div class="input-el" ref="fileInputBackground"></div>
          <label for="cv_file" class="input-label cv" ref="fileInputLabel">
            {{ message }}
            <input
              type="file"
              class="input-el file"
              name="cvfile"
              id="cv_file"
              :placeholder="message"
              @change="checkFile"
              ref="fileInput"
            />
          </label>
        </div>

        <div class="input-wrapper button">
          <button type="submit" class="input-el button">ENVIAR</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Anexar CV",
    };
  },
  methods: {
    checkFile() {
      const fileInput = this.$refs.fileInput;
      const fileInputBackground = this.$refs.fileInputBackground;
      if (fileInput.files.length > 0) {
        this.message = "CV Anexado!";
        fileInputBackground.classList.add("complete");
      } else {
        this.message = "Anexar CV";
      }
    },
  },
};
</script>

<style lang="scss">
.recruitment-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 656px;
  width: 100%;
  background-color: #c09f55;

  .watermark {
    position: absolute;
    left: 112px;
    bottom: 0;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 750px;

    .title {
      margin: 0 0 20px 0;
    }

    .description {
      text-align: center;
      font: normal normal normal 24px/34px Plus Jakarta Sans;
      letter-spacing: 0px;
      color: #ffffff;
      opacity: 1;

      margin: 0 0 36px 0;
    }

    .group {
      position: relative;
      width: 100%;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      margin: 0 0 16px 0;

      &:last-child {
        margin: 0;
      }

      .input-wrapper {
        position: relative;
        border-radius: 10px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        overflow: hidden;
        padding: 20px 18px;
        gap: 12px;
        height: 60px;

        &.name {
          width: 406px;
        }

        &.email {
          width: 320px;
        }

        &.contact,
        &.file,
        &.button {
          width: 33%;
        }

        .icon {
          position: relative;
          z-index: 1;
          object-fit: contain;
          object-position: center;
          height: 20px;
          width: 20px;
        }

        .input-label,
        .input-el::placeholder {
          font: normal normal 600 16px/28px Plus Jakarta Sans;
          letter-spacing: 0.89px;
          color: #31513c;
          opacity: 1;
          z-index: 1;

          &:hover {
            cursor: pointer;
          }
        }

        & input[type="file"] {
          display: none;
        }

        .input-el {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;

          background: #ffffffe6 0% 0% no-repeat padding-box;
          border: none;
          padding-left: 50px;

          font: normal normal 600 16px/28px Plus Jakarta Sans;
          letter-spacing: 0.89px;
          color: #31513c;

          &.button {
            background-color: #31513c;
            color: white;
            padding: 0;
            transition: all 50ms linear;
          }

          &.complete {
            background-color: #31513c;

            & + .input-label {
              color: white;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1920px) {
  .recruitment-container {
    height: 437.33px; // scaled from 656px

    .watermark {
      left: 74.67px; // scaled from 112px
      width: 286.67px;
    }

    .input-container {
      max-width: 500px; // scaled from 750px

      .title {
        margin: 0 0 13.33px 0; // scaled from 20px
      }

      .description {
        font: normal normal normal 16px/22.67px Plus Jakarta Sans; // scaled from 24px/34px
        margin: 0 0 24px 0; // scaled from 36px
      }

      .group {
        gap: 16px; // scaled from 24px
        margin: 0 0 10.67px 0; // scaled from 16px

        .input-wrapper {
          padding: 13.33px 12px; // scaled from 20px 18px
          height: 40px; // scaled from 60px

          &.name {
            width: 270.67px; // scaled from 406px
          }

          &.email {
            width: 213.33px; // scaled from 320px
          }

          &.contact,
          &.file,
          &.button {
            width: 33%; // scaled from 33%
          }

          .icon {
            height: 15px;
            width: 15px;
          }

          .input-label,
          .input-el::placeholder {
            font: normal normal 600 10.67px/18.67px Plus Jakarta Sans; // scaled from 16px/28px
            letter-spacing: 0.59px; // scaled from 0.89px
          }

          .input-el {
            padding-left: 33.33px; // scaled from 50px

            font: normal normal 600 10.67px/18.67px Plus Jakarta Sans; // scaled from 16px/28px
            letter-spacing: 0.59px; // scaled from 0.89px

            &.button {
              background-color: #31513c;
              padding: 0;
            }

            &.complete {
              background-color: #31513c;

              & + .input-label {
                color: white;
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 992px) {
  .recruitment-container {
    height: 667px;
    padding: 20px;

    .watermark {
      left: 170px; // scaled from 112px
      width: 196px;
    }

    .input-container {
      width: 100%;

      .title {
        margin: 0 0 13.33px 0; // scaled from 20px
      }

      .description {
        font: normal normal normal 16px/22.67px Plus Jakarta Sans; // scaled from 24px/34px
        margin: 0 0 24px 0; // scaled from 36px
      }

      .group {
        flex-direction: column;
        gap: 12px; // scaled from 24px

        .input-wrapper {
          height: 52px; // scaled from 60px

          &.name,
          &.email,
          &.contact,
          &.file {
            width: 100%;
          }
          &.button {
            width: 162px;
          }

          .icon {
            height: 20px;
            width: 20px;
          }

          .input-label,
          .input-el::placeholder {
            width: 100%;
            font: normal normal 600 14px/28px Plus Jakarta Sans;
            letter-spacing: 0.78px;
          }

          .input-el {
            padding-left: 49px; // scaled from 50px

            font: normal normal 600 10.67px/18.67px Plus Jakarta Sans; // scaled from 16px/28px
            letter-spacing: 0.59px; // scaled from 0.89px

            &.button {
              background: #31513c 0% 0% no-repeat padding-box;
              border-radius: 10px;
            }

            &.complete {
              background-color: #31513c;

              & + .input-label {
                color: white;
              }
            }
          }
        }
      }
    }
  }
}
</style>
