<script>
import { onMount } from 'svelte';

  let characters = [];
  let episodeNames = {};

  onMount(async () => {
    //Character
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    characters = data.results;

    //Character episodes
    const episodeUrls = characters.flatMap(character => character.episode.slice(0, 1));
    const uniqueEpisodeUrls = [...new Set(episodeUrls)];
    for (const url of uniqueEpisodeUrls) {
      const response = await fetch(url);
      const episodeData = await response.json();
      episodeNames[url] = episodeData.name;
    }
  });
</script>

<h2 class="p-3 text-uppercase fw-bold mb-0 mt-3">Characters</h2>
<div class="container text-center p-3">
  {#if characters.length > 0}
    <div class="row row-cols-1 row-cols-md-3 g-4">
      {#each characters as character (character.id)}
        <div class="col">
          <div class="card border border-danger">
            <img src={character.image} alt={character.name} class="card-img-top border-bottom border-danger">
            <div class="card-body d-flex flex-column justify-content-evenly p-2">
              <h5 class="card-title text-truncate">{character.name}</h5>
              <div class="d-flex flex-row justify-content-evenly align-items-center p-2">
                <div><span>Status </span><p class={"card-text mt-0" && character.status == 'Dead' ? 'dead-status mt-0 mb-0':' card-text mt-0'}>{character.status}</p></div>
                <div><span>Species </span><p class="card-text mt-0">{character.species}</p></div>
                <div><span>Gender </span><p class="card-text mt-0">{character.gender}</p></div>
              </div>
              <div class="d-flex flex-row justify-content-evenly align-items-center p-2">
                <div class="text-truncate" style="max-width: 9.3rem;"><span>Origin </span><p class="card-text mt-0 text-truncate">{character.origin.name}</p></div>
                <div class="text-truncate" style="max-width: 9.3rem;"><span>Location </span><p class="card-text mt-0 text-truncate">{character.location.name}</p></div>
              </div>
              {#if character.episode.length > 0}
                <div class="d-flex justify-content-center p-2 column-gap-3"><span class="text-nowrap"> First seen in: </span><p class="card-text text-truncate">{episodeNames[character.episode[0]] || 'Loading...'}</p></div>
              {/if}
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
  .card-img-top{
    height: 70%; 
    width: auto; 
    overflow: hidden;
  }
  .card-body span, h5{
    font-weight: bold;
    color: var(--main-bg-color-gunMetal);
  }
  .card-text{
    color: var(--main-bg-color-Gray)
  }
  .dead-status {
    color: var(--main-bg-color-ChilliRed);
    font-weight: bold;
  }
  .card-title{
    font-weight: 700;
  }
</style>
