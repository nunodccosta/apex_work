<template>
  <nav class="navbar">
    <div class="navbar-container">
      <img
        class="logo"
        alt="logo"
        width="225"
        src="/logo-apex/logo-apex-work.svg"
      />
      <ul class="nav-menu">
        <li>
          <a
            title="Sobre Nós"
            href="#about"
            @click.prevent="handleScroll('about')"
            >Sobre Nós</a
          >
        </li>
        <li>
          <a
            title="Áreas de Negócio"
            href="#business"
            @click.prevent="handleScroll('business')"
            >Áreas de Negócio</a
          >
        </li>
        <li>
          <a
            title="Serviços"
            href="#services"
            @click.prevent="handleScroll('services')"
            >Serviços</a
          >
        </li>
        <li>
          <a
            title="Contactos"
            href="#footer"
            @click.prevent="handleScroll('footer')"
            >Contactos</a
          >
        </li>
      </ul>

      <div class="nav-mobile" @click="handleMenu">
        <img src="/icons/menu-mobile.svg" alt="Menu Mobile" />
      </div>
    </div>

    <div ref="mobile_container" class="mobile-container">
      <div class="top" @click="handleMenu">
        <img src="/icons/close-mobile.svg" alt="remove" />
      </div>
      <ul class="mobile-nav-menu">
        <li>
          <a
            title="Sobre Nós"
            href="#about"
            @click.prevent="handleScroll('about')"
            >Sobre Nós</a
          >
        </li>
        <li>
          <a
            title="Áreas de Negócio"
            href="#business"
            @click.prevent="handleScroll('business')"
            >Áreas de Negócio</a
          >
        </li>
        <li>
          <a
            title="Serviços"
            href="#services"
            @click.prevent="handleScroll('services')"
            >Serviços</a
          >
        </li>
        <li>
          <a
            title="Contactos"
            href="#footer"
            @click.prevent="handleScroll('footer')"
            >Contactos</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleMenu(event) {
      let menu_container = this.$refs.mobile_container;

      if (!menu_container.classList.contains("active")) {
        menu_container.classList.add("active");
        document.body.classList.add("lock");
        return;
      }
      document.body.classList.remove("lock");
      menu_container.classList.remove("active");
    },
    handleScroll(el_id) {
      const menu_container = this.$refs.mobile_container;

      const el = document.getElementById(el_id);

      // Check if mobile was used
      if (menu_container.classList.contains("active")) {
        document.body.classList.remove("lock");
        menu_container.classList.remove("active");
        if (el) {
          el?.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }

      if (el) {
        const elementRect = el.getBoundingClientRect();
        const elementTop = elementRect.top + window.pageYOffset;
        const elementHeight = elementRect.height;
        const viewportHeight = window.innerHeight;

        const scrollTo = elementTop - viewportHeight / 2 + elementHeight / 2;

        window.scrollTo({ top: scrollTo, behavior: "smooth" });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.navbar {
  position: absolute;
  margin: 32px 0 0 0;
  width: 100%;
  padding: 0 112px; //1920px

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  .navbar-container {
    width: 100%;
    max-width: 2400px;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    .nav-menu {
      display: flex;
      flex-direction: row;
      gap: 32px; //1920px
      list-style-type: none;

      // Prevents layout shift on hover.
      li a::before {
        display: block;
        content: attr(title);
        font-weight: bold;
        height: 0;
        overflow: hidden;
        visibility: hidden;
      }
      li a {
        position: relative;
        display: block;
        width: 100%;
        height: fit-content;
        text-decoration: none;
        font: normal normal normal 18px/23px Plus Jakarta Sans;
        color: white;
        font-synthesis: none;
        text-align: center;
        transition: font-weight 150ms linear;
      }

      li a:hover {
        cursor: pointer;
        font-weight: bold;
        border-bottom: solid 2px white;
        margin-bottom: -2px;
      }
    }

    .nav-mobile {
      display: none;
    }
  }
  .mobile-container {
    display: none;
  }
}

// Mobile
@media (max-width: 992px) {
  .navbar {
    margin: 0;
    padding: 15px 20px;

    .navbar-container {
      .logo {
        width: 160px;
      }
      .nav-menu {
        display: none;
      }
      .nav-mobile {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          object-fit: contain;
          object-position: center;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }

    .mobile-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0;
      left: 0;
      height: 100dvh;
      width: 100%;

      transform: translateY(-100%);
      transition: all 250ms linear;

      background-color: #31513c;
      visibility: hidden;
      opacity: 0;

      overflow: auto;
      z-index: 1000;

      &.active {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
        overscroll-behavior: contain;
      }

      .top {
        position: absolute;
        top: 24px;
        right: 20px;
      }
      .mobile-nav-menu {
        display: flex;
        flex-direction: column;
        gap: 58px;
        width: fit-content;
        list-style-type: none;
        li {
          text-decoration: none;
          text-align: center;
          a {
            width: 100%;
            text-align: left;
            font: normal normal normal 18px/46px Plus Jakarta Sans;
            letter-spacing: 0px;
            color: #ffffff;
            opacity: 1;
            text-decoration: none;
            &:hover {
              font: normal normal bold 18px/46px Plus Jakarta Sans;
              color: #c09f55;
            }
          }
        }
      }
    }
  }
}
</style>
