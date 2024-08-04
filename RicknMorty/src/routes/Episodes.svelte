<script>
import { onMount } from 'svelte';

    let episodes = [];
    let characterNames = {};

    onMount(async () => {
        //personajes
        const response = await fetch('https://rickandmortyapi.com/api/episode');
        const data = await response.json();
        episodes = data.results;

        const characterUrls = episodes.flatMap(episode => episode.characters.slice(0, 3));
        const uniqueCharacterUrls = [...new Set(characterUrls)];
        for (const url of uniqueCharacterUrls) {
            const response = await fetch(url);
            const episodeData = await response.json();
            characterNames[url] = episodeData.name;
        }
    });
        function insertLineBreaks(name) {
        return name.replace(/ /g, '<br>');
    }
</script>
<h2 class="p-3 text-uppercase fw-bold mb-0 mt-3">Episodes</h2>
<div class="container text-center p-3">
  {#if episodes.length > 0}
    <div class="row row-cols-1 row-cols-md-3 g-4">
      {#each episodes as episode (episode.id)}
        <div class="col">
            <div class="card border border-danger">
                <div class="card-body d-flex flex-column justify-content-evenly p-2">
                    <h5 class="card-title">{episode.name}</h5>
                    <div class="d-flex flex-row justify-content-evenly align-items-center p-2">
                        <div><span>Air date </span><p class="card-text mt-0">{episode.air_date}</p></div>
                        <div><span>Episode name </span><p class="card-text mt-0">{episode.episode}</p></div>
                    </div>
                    <div class="d-flex flex-column justify-content-evenly p-2">
                    <span>Top characters</span>
                    <div class="d-flex flex-row justify-content-evenly p-2">
                        {#each episode.characters as characterUrl}
                            {#if characterNames[characterUrl] !== undefined}
                                <div>
                                  <p class="card-text mt-0">{@html insertLineBreaks(characterNames[characterUrl])}</p>                                </div>
                            {/if}
                        {/each}
                    </div>
                    </div>
                </div>
            </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  h2 {
    color: var(--main-bg-color-ChilliRed);
    font-family: var(--main-fontFamily-Roboto);
  }
  p{
    color: var(--main-bg-color-Gray);
  }
  span, .card-title{
    color: var(--main-bg-color-gunMetal);
    font-weight: 700;
  }
  .card {
    font-family: var(--main-fontFamily-Archivo) !important;
    height: 100%;
  }
</style>
