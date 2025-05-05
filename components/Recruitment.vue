<template>
  <div class="recruitment-container">
    <img src="/water-mark-apex/water-mark-apex-white-recrutamento.svg" alt="Watermark" class="watermark" />
    <div class="input-container">
      <h1 class="title white">Recrutamento</h1>
      <h5 class="description">
        Valorizamos talento, dedicação e vontade de crescer. Preencha o
        formulário e dê o primeiro passo para fazer parte da nossa equipa.
      </h5>
      <div class="top-group group">
        <div class="input-wrapper name">
          <img src="/icons/recrutamento/recrutamento-nome.svg" alt="RecrutamentoCV" class="icon" />
          <input id="name" type="text" class="input-el" placeholder="Nome Completo" />
          <!-- <label class="input-label" for="name">Nome Completo</label> -->
        </div>
        <div class="input-wrapper email">
          <img src="/icons/recrutamento/recrutamento-email.svg" alt="RecrutamentoCV" class="icon" />
          <input id="email" type="text" class="input-el" placeholder="Email" />
          <!-- <label class="input-label" for="name">Email</label> -->
        </div>
      </div>
      <div class="bot-group group">
        <div class="input-wrapper contact">
          <img src="/icons/recrutamento/recrutamento-contacto.svg" alt="Recrutamento Contacto" class="icon" />
          <input id="contact" type="text" class="input-el" placeholder="Contactos" />
          <!-- <label for="contact" class="input-label">Contactos</label> -->
        </div>
        <div class="input-wrapper file">
          <img src="/icons/recrutamento/recrutamento-cv.svg" alt="RecrutamentoCV" class="icon" />


          <div class="input-el" ref="fileInputBackground"></div>
          <label for="cv_file" class="input-label cv" ref="fileInputLabel"> {{ message }}
            <input type="file" class="input-el file" name="cvfile" id="cv_file" :placeholder="message"
              @change="checkFile" ref="fileInput" />
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
      message: 'Anexar CV'
    };
  },
  methods: {
    checkFile() {
      const fileInput = this.$refs.fileInput;
      const fileInputBackground = this.$refs.fileInputBackground;
      if (fileInput.files.length > 0) {
        this.message = 'CV Anexado!';
        fileInputBackground.classList.add("complete");
      } else {
        this.message = 'Anexar CV';
      }
    }
  }
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
        }

        .input-label,
        .input-el::placeholder {
          font: normal normal 600 16px/28px Plus Jakarta Sans;
          letter-spacing: 0.89px;
          color: #31513C;
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
            background-color: #31513C;

            &+.input-label {
              color: white;
            }

          }
        }
      }
    }
  }
}
</style>
