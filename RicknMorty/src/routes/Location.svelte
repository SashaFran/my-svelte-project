<script>
import { onMount } from 'svelte';

    let locations = [];

    onMount(async () => {
        //personajes
        const response = await fetch('https://rickandmortyapi.com/api/location');
        const data = await response.json();
        locations = data.results;
    });
    //Residents
    locations.forEach(location => {
    const numberOfResidents = location.residents.length;
    });
</script>

<h2 class="p-3 text-uppercase fw-bold mb-0 mt-3">Locations</h2>
<div class="container text-center p-3">
  {#if locations.length > 0}
    <div class="row row-cols-1 row-cols-md-3 g-4">
      {#each locations as location (location.id)}
        <div class="col">
          <div class="card border border-danger">
            <div class="card-body d-flex flex-column justify-content-evenly p-2">
              <h5 class="card-title">{location.name}</h5>
              <div class="d-flex flex-row justify-content-evenly align-items-center p-2">
                <div><span> Type </span><p class="card-text mt-0">{location.type}</p></div>
                <div><span> Dimension </span><p class="card-text mt-0">{location.dimension}</p></div>
              </div>
              <div class="d-flex justify-content-center p-2 column-gap-3">
                <span> Number of residents: </span><p class="card-text">{location.residents.length}</p>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>


<style>
  h2{
    color: var(--main-bg-color-ChilliRed);
    font-family: var(--main-fontFamily-Roboto);
  }
  .card{
    font-family: var(--main-fontFamily-Archivo) !important;
  }
  .card-body span{
    font-weight: bold;
    color: var(--main-bg-color-gunMetal);
  }
  .card-title{
    font-weight: 700;
  }
  .card-body span, h5{
    font-weight: bold;
    color: var(--main-bg-color-gunMetal);
  }
  .card-text{
    color: var(--main-bg-color-Gray)
  }

</style>
