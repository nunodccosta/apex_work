<template>
  <div class="footer-container" id="footer">
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

        <div class="list">
          <ul>
            <p class="semibold">geral@apexwork.pt</p>
            <li>Tel. +351 252 118 679*</li>
            <li>Tlm. +351 926 174 096 **</li>
          </ul>
          <p class="info">
            *Chamada para rede fixa nacional
            <br class="mobile" />
            **Chamada para rede móvel nacional
          </p>
        </div>
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
  align-items: center;
  background-color: #31513c;
  padding: 0;
  .images-wrapper {
    display: flex;
    width: 100%;
    max-width: 1920px;
    img {
      width: 33.33%;
      object-fit: cover;
      object-position: center;
    }
  }

  .footer-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    padding: 46px 180px 48px 112px;
    width: 100%;
    max-width: 1920px;

    // To delete

    .block {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

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
      &:nth-child(2) {
        margin-left: 200px;
        padding-right: 30px;
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

      .list {
        width: 100%;
        ul {
          padding: 0;
          margin: 0;
          list-style: none;
          p.semibold,
          li {
            display: inline-block;
            margin-right: 4px;
            font: normal normal 600 16px/21px Plus Jakarta Sans;
            color: white;
          }
          li::before {
            content: "•"; /* Adds the bullet */
            margin-right: 4px; /* optional space after the bullet */
          }
        }
      }

      p.info {
        font: normal normal normal 12px/16px Plus Jakarta Sans;
        color: white;
        letter-spacing: -0.19px;
        white-space: pre;
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


@media (max-width: 1920px) {
  .footer-container {
    .footer-wrapper {
      .block .list {
        ul li {
          display: list-item;
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .footer-container {
    position: relative;
    padding-bottom: 92px;
    .images-wrapper {
      flex-direction: column;
      height: fit-content;
      width: 100%;
      img {
        width: 100%;
      }
    }
    .footer-wrapper {
      padding: 20px;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      .block {
        &:nth-child(2) {
          margin-left: 0px;
          margin-bottom: 64px;
        }
        .logo {
          width: 225px;
          height: 52px;
        }
        .copy {
          font: normal normal normal 12px/16px Plus Jakarta Sans;
          letter-spacing: -0.19px;
          position: absolute;
          bottom: 17px;
          left: 20px;
        }

        .footer-title {
          font: normal normal 800 16px/46px Plus Jakarta Sans;
          letter-spacing: -0.26px;
        }

        p {
          font: normal normal normal 16px/20px Plus Jakarta Sans;
          letter-spacing: -0.26px;

          &.first {
            margin-bottom: 16px; // scaled from 22px
          }
          .semibold {
            font-weight: 600;
          }

          .info {
            font: normal normal normal 12px/16px Plus Jakarta Sans;
            letter-spacing: -0.19px;
            opacity: 1;
            display: block;
            br.mobile {
              line-height: 0;
              margin: 0;
            }
          }
        }

        .list {
          ul {
            margin-bottom: 16px;
            p.semibold,
            li {
              display: list-item;
              margin-bottom: 8px;
            }
            li:last-child {
              margin-bottom: 0;
            }
            li::before {
              display: none;
            }
          }
        }

        .schedule {
          margin-bottom: 31px;
          .footer-title {
            font: normal normal 800 16px/46px Plus Jakarta Sans;
            letter-spacing: -0.26px;
            margin-bottom: 4px;
          }

          p {
            font: normal normal normal 16px/30px Plus Jakarta Sans;
            letter-spacing: -0.26px;
          }
        }
        .icon-group {
          gap: 24px;
          .link {
            height: 36px;
            width: 36px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
