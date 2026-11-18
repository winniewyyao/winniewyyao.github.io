<script lang="ts">
  import { page } from '$app/state';
  import { goto } from '$app/navigation';
  import ProjectList from '$lib/components/ProjectList.svelte';
  import { selectedDataProjects, otherDataProjects } from '$lib/category/dataProject.js';
  import { video } from '$lib/category/video.js';
  import { writing } from '$lib/category/writing.js';

  let activeTab = $derived(page.url.searchParams.get('tab') ?? 'data');

  function setTab(tab: string) {
    goto(`?tab=${tab}`, { noScroll: true, keepFocus: true });
  }
</script>

<svelte:head>
  <title>Winnie Yao</title>
</svelte:head>

<div class="journalism-intro">
  <p>I find patterns in data and develop stories through writing, visualization and web design. I also create short-form, social videos.</p>
  <p>My toolkit includes Python, R, SQL, spreadsheets, Datawrapper, QGIS, ArcGIS, HTML, CSS, JS and Adobe Creative Suite.</p>
</div>

<div class="container">
  <nav class="main-nav-container">
    <button class:active={activeTab === 'data'} onclick={() => setTab('data')}>DATA/GRAPHICS</button>
    <button class:active={activeTab === 'video'} onclick={() => setTab('video')}>VIDEOS</button>
    <button class:active={activeTab === 'writing'} onclick={() => setTab('writing')}>WRITING</button>
  </nav>

  {#if activeTab === 'data'}
    <h2 class="section-subheadline">Selected Work</h2>
    <ProjectList projects={selectedDataProjects} />
    <h2 class="section-subheadline">Others</h2>
    <ProjectList projects={otherDataProjects} />
  {:else if activeTab === 'video'}
    <ProjectList projects={video} />
  {:else if activeTab === 'writing'}
    <ProjectList projects={writing} />
  {/if}
</div>

<style>
  .journalism-intro {
    width: 50%;
    margin: 5rem auto 2rem auto;
    text-align: left;
    font-family: var(--font-body);
  }

  .journalism-intro p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6rem;
    color: #000000;
    margin-bottom: 0.8rem;
  }

  /* Matches the Photography subheadline on the visuals page; width lines up with the project list */
  .section-subheadline {
    width: 80%;
    margin: 3rem auto 1rem auto;
    font-family: var(--font-heading);
    font-size: 1.2rem;
    font-weight: 400;
    color: #5d5c5c;
  }

  @media (max-width: 768px) {
    .journalism-intro {
      width: 80%;
    }

    .journalism-intro p {
      font-size: 0.85rem;
      line-height: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .journalism-intro {
      width: 90%;
    }

    .journalism-intro p {
      font-size: 0.8rem;
    }
  }
</style>