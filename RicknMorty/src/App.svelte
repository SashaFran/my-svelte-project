<script>
  import { Router, Route } from 'svelte-navigator';
  import Nav from './components/Nav.svelte'
  import Characters from './routes/Character.svelte';
  import Locations from './routes/Location.svelte';
  import Episodes from './routes/Episodes.svelte';
  import Footer from './components/Footer.svelte';

   const base = import.meta.env.MODE === 'development' ? '' : '/my-svelte-project';
</script>

<Router>
  <Nav />
  <Route path="/characters" component={Characters} />
  <Route path="/locations" component={Locations} />
  <Route path="/episodes" component={Episodes} />
  <!-- default -->
  <Route path="/" component={Characters} />
  <Footer />
</Router>