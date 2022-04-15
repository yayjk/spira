<script lang="ts">
  import BottomNavigator from './components/organisms/BottomNavigator.svelte';
  import Home from '@/modules/home/views/index.svelte';
</script>

<main>
  <section>
    <Home />
  </section>
  <footer>
    <BottomNavigator />
  </footer>
</main>

<style lang="scss">
  :global(*) {
    box-sizing: border-box;
  }
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Karla', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
  }

  :global(html) {
    height: 100vh;
  }

  :global(body) {
    height: 100%;
    margin: 0;

    :global(#app) {
      height: 100%;
    }
  }

  main {
    padding: 1em;
    padding-bottom: 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    height: 100%;

    section {
      flex: 1;
      overflow: scroll;
    }

    footer {
      margin-left: -1em;
      margin-right: -1em;
    }
  }
</style>
