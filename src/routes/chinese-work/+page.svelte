<script lang="ts">
  import { chineseWork } from '$lib/category/chineseWork.js';

  const videoIds = [
    'I47l00Fw9vM', 'BNa_Ezrp9GM', 'jVRx3T9hx9Q', 'iA_Rhqb_h70',
    'i-egS2a-o-w', '6ILj2Sg7bfA', 'SOa50z4kKvw', '4UGVYGUR66s', 'c4B5BNo55wg'
  ];

  let selectedVideoId: string | null = $state(null);

  function openVideo(id: string) {
    selectedVideoId = id;
  }

  function closeVideo() {
    selectedVideoId = null;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') closeVideo();
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<svelte:head>
  <title>Winnie Yao</title>
</svelte:head>

<div class="chinese-container">
  <div class="introduction-text-container">
    <p class="intro-greeting">我是宛妤，歡迎來到我的作品集網頁！</p>
    <p class="intro-body">大學念了兩所學校三個系，這些文字和影音多半來自課堂作業或實習作品，它們代表了我初成年後對世界的想像。替十八到二十歲初的想法留個念。我曾經是因為吸收知識、反思人生而感到快樂的大學生🌼</p>
  </div>

  <section class="pdf-container">
    {#each chineseWork as item (item.href)}
      <a href={item.href} target="_blank" class="pdf-item">
        <div class="thumbnail-wrapper">
          <img src={item.image} class="thumbnail" alt={item.alt} />
        </div>
        <h3>{item.title}</h3>
      </a>
    {/each}
  </section>

  <section class="iframe-container">
    {#each videoIds as id (id)}
      <button class="video-wrapper" onclick={() => openVideo(id)} aria-label="Play video">
        <img
          src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
          alt="YouTube video thumbnail"
          class="video-thumbnail"
        />
        <span class="play-icon"><i class="fa-solid fa-play"></i></span>
      </button>
    {/each}
  </section>

</div>

{#if selectedVideoId}
  <div class="lightbox-overlay">
    <button class="lightbox-backdrop" onclick={closeVideo} aria-label="Close video"></button>
    <button class="lightbox-close" onclick={closeVideo} aria-label="Close">&times;</button>
    <div class="lightbox-video-wrapper">
      <iframe
        src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  </div>
{/if}

<style>
  .chinese-container {
    width: 55%;
    margin: 4rem auto 0 auto;
  }

  .introduction-text-container {
    width: 85%;
    margin: 0 auto 3.5rem auto;
    text-align: center;
  }

  .intro-greeting {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.8rem;
  }

  .intro-body {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 0.95rem;
    font-weight: 300;
    line-height: 1.8rem;
    color: #444;
  }

  .pdf-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.3rem;
    margin: 0 auto 4rem auto;
  }

  .pdf-item {
    display: block;
    border: 1px solid rgb(225, 223, 223);
    padding: 0.7rem;
    background-color: #ffffffd9;
    position: relative;
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-decoration: none;
  }

  .pdf-item:hover {
    transform: translateY(-4px);
    box-shadow: 0px 8px 16px -4px rgba(92, 91, 91, 0.25);
    border-color: #64a2df;
  }

  .pdf-item h3 {
    font-size: 0.88rem;
    font-weight: 600;
    margin: 0.7rem 0 0 0;
    line-height: 1.3rem;
    color: #222;
  }

  .thumbnail-wrapper {
    position: relative;
    width: 100%;
    padding-top: 100%;
    overflow: hidden;
  }

  .thumbnail {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .pdf-item:hover .thumbnail {
    transform: scale(1.04);
  }

  /* Video grid */
  .iframe-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.8rem;
    margin-bottom: 2rem;
  }

  .video-wrapper {
    position: relative;
    border: none;
    padding: 0;
    cursor: pointer;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0px 4px 10px -4px rgba(0, 0, 0, 0.2);
    aspect-ratio: 16 / 9;
  }

  .video-thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }

  .video-wrapper:hover .video-thumbnail {
    transform: scale(1.05);
  }

  .play-icon {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    color: white;
    background: rgba(0, 0, 0, 0.25);
    transition: background 0.25s ease;
  }

  .video-wrapper:hover .play-icon {
    background: rgba(0, 0, 0, 0.4);
  }

  /* Lightbox */
  .lightbox-overlay {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .lightbox-backdrop {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.88);
    border: none;
    cursor: zoom-out;
    z-index: 1;
  }

  .lightbox-video-wrapper {
    position: relative;
    z-index: 2;
    width: 85vw;
    max-width: 960px;
    aspect-ratio: 16 / 9;
    pointer-events: none;
  }

  .lightbox-video-wrapper iframe {
    width: 100%;
    height: 100%;
    border: none;
    pointer-events: auto;
  }

  .lightbox-close {
    position: absolute;
    top: 1.5rem;
    right: 2rem;
    background: none;
    border: none;
    color: white;
    font-size: 2.5rem;
    cursor: pointer;
    line-height: 1;
    z-index: 3;
    transition: color 0.2s ease, transform 0.15s ease;
  }

  .lightbox-close:hover {
    color: #F54E96;
  }

  .lightbox-close:active {
    color: #F54E96;
    transform: scale(0.9);
  }

  @media (max-width: 820px) {
    .chinese-container {
      width: 80%;
      margin: 2rem auto 0 auto;
    }

    .introduction-text-container {
      width: 95%;
    }

    .pdf-container {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .iframe-container {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.3rem;
    }

    .intro-body {
      font-size: 0.9rem;
      line-height: 1.6rem;
    }

    .pdf-item h3 {
      font-size: 0.8rem;
    }

    .lightbox-video-wrapper {
      width: 92vw;
    }
  }

  @media (max-width: 480px) {
    .chinese-container {
      width: 95%;
      margin: 1rem auto 0 auto;
    }

    .pdf-container {
      grid-template-columns: repeat(1, 1fr);
      gap: 1.5rem;
    }

    .iframe-container {
      grid-template-columns: repeat(1, 1fr);
      gap: 1.5rem;
    }

    .intro-greeting {
      font-size: 1.05rem;
    }

    .intro-body {
      font-size: 0.8rem;
      line-height: 1.5rem;
    }

    .pdf-item h3 {
      font-size: 0.75rem;
    }

    .pdf-item {
      padding: 0.5rem;
    }
  }
</style>