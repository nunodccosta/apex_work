<template>
  <div class="footer-container">
    <div class="images-wrapper">
      <img src="/img/apex-service-1.jpg" alt="Metalurgica" />
      <img src="/img/apex-service-2.jpg" alt="Soldadura" />
      <img src="/img/apex-service-3.jpg" alt="Mecanico" />
    </div>

    <div class="footer-wrapper">
      <div class="block">
        <img src="/logo-apex/logo-apex-work.svg" alt="logo" class="logo" />
        <p class="copy">© 2025, Apex Work. Todos os direitos reservados.</p>
      </div>
      <div class="block">
        <h6 class="footer-title">CONTACTOS</h6>

        <p class="first">
          <span class="semibold">Morada</span><br />
          Av. Marechal Humberto Delgado, nº 248, 4760-012 V. N. Famalicão
        </p>

        <p>
          <span class="semibold">
            geral@apexwork.pt • Tel. +351 252 118 679* • Tlm. +351 926 174 096
            ** </span
          ><br />
          <span class="info">
            *Chamada para rede fixa nacional **Chamada para rede móvel nacional
          </span>
        </p>
      </div>
      <div class="block">
        <div class="schedule">
          <h6 class="footer-title">HORÁRIO DE FUNCIONAMENTO</h6>
          <p>9:00H-18:00</p>
        </div>

        <div class="icon-group">
          <a class="link" href="">
            <img src="/icons/btn-social-facebook.svg" alt="Facebook" />
          </a>
          <a class="link" href="">
            <img src="/icons/btn-social-instagram.svg" alt="Instagram" />
          </a>
          <a class="link" href="">
            <img src="/icons/btn-social-whatsapp.svg" alt="WhatsApp" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
.footer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #31513c;
  padding: 0;
  .images-wrapper {
    display: flex;
    max-width: 1920px;
    img {
      width: 33.33%;
    }
  }

  .footer-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 46px 180px 48px 112px;
    height: 233px;
    max-width: 1920px;

    // To delete

    .block {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      height: 100%;


      
      // Block 1
      .logo {
        width: 234px;
      }

      .copy {
        text-align: left;
        font: normal normal normal 14px/30px Plus Jakarta Sans;
        letter-spacing: -0.22px;
        color: #ffffff;
        opacity: 0.34;
      }

      // Block 2
      &:nth-child(2){
        margin-left:200px;
      }


      .footer-title {
        font: normal normal 900 16px/21px Plus Jakarta Sans;
        letter-spacing: -0.26px;
        color: #ffffff;
        text-transform: uppercase;
        margin-bottom: 15px;
      }

      p {
        text-align: left;
        font: normal normal normal 16px/20px Plus Jakarta Sans;
        color: #ffffff;
        letter-spacing: -0.26px;
        &.first {
          margin-bottom: 22px;
        }

        .semibold {
          font-weight: 600;
        }
        .info {
          text-align: left;
          font: normal normal normal 12px/30px Plus Jakarta Sans;
          letter-spacing: -0.19px;
          color: #ffffff;
          opacity: 1;
        }
      }

      // Block 3
      .schedule {
        .footer-title {
          font: normal normal 800 16px/21px Plus Jakarta Sans;
          letter-spacing: -0.26px;
          color: #ffffff;
          text-transform: uppercase;
          opacity: 1;
          margin-bottom: 4px;
        }

        p {
          text-align: left;
          font: normal normal normal 16px/21px Plus Jakarta Sans;
          letter-spacing: -0.26px;
          color: #ffffff;
          opacity: 1;
        }
      }

      .icon-group {
        display: flex;
        flex-direction: row;
        gap: 14px;

        .link {
          box-sizing: content-box;
          padding: 0;
          height: 32px;
          width: auto;
        }
      }
    }
  }
}
</style>
