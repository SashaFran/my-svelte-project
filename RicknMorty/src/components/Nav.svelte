<script>
  import { Link } from 'svelte-navigator';
</script>

<section class="section title">
  <h1 class="title_title"><Link style="margin: 0px;
  color: var(--main-bg-color-LavenderBlush) !important;
  text-decoration: none;
  border: medium;
  font-weight: 900;
  font-size: 5.625rem;" to="/">Rick and Morty</Link></h1>
  <h3>The Rick and Morty API</h3>
</section>

<nav class="navbar navbar-expand-lg bg-body-tertiary navbar-customCSS">
  <div class="container-fluid">
    <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
      <ul class="navbar-nav d-flex">
        <li class="nav-item px-4 text-uppercase">
          <Link class="nav-link active" to="/characters" style="color: var(--main-bg-color-LavenderBlush) !important;">
            Characters
          </Link>
        </li>
        <li class="nav-item px-4 text-uppercase"> 
          <Link class="nav-link" to="/locations" style="color: var(--main-bg-color-LavenderBlush) !important;">
            Locations
          </Link>
        </li>
        <li class="nav-item px-4 text-uppercase" >
          <Link class="nav-link" to="/episodes" style="color: var(--main-bg-color-LavenderBlush) !important;">
            Episodes
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  <style>
  section, nav{
    font-family: var(--main-fontFamily-Roboto);
  }
  .navbar-customCSS {
    background-color: #2b303a !important;
  }
  .title {
    background-color: #d64933;
    height: 350px;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .title h3{
    font-weight: 700;
    text-transform: uppercase;
    margin: 0 auto;
    color: var(--main-bg-color-LavenderBlush)
  }
</style>
