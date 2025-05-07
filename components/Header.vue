<template>
  <nav class="navbar">
    <div class="navbar-container">
      <img
        class="logo"
        alt="logo"
        width="225"
        src="/logo-apex/logo-apex-work.svg"
      />76
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
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleScroll(el_id) {
      const el = document.getElementById(el_id);

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
  }
}
</style>
