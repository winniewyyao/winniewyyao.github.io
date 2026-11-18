<script lang="ts">
  import { design } from '$lib/category/design.js';
  import { photography } from '$lib/category/photography.js';

  type GalleryImage = { src: string; alt: string; caption?: string };

  const isGif = (img: GalleryImage) => img.src.toLowerCase().endsWith('.gif');

  const gifs: GalleryImage[] = design.filter(isGif);
  const others: GalleryImage[] = design.filter((img: GalleryImage) => !isGif(img));
  const photos: GalleryImage[] = photography;

  let showPhotography = $state(false);
  let selectedIndex: number | null = $state(null);

  // Lightbox sequence only includes photos while that section is expanded
  let allImages: GalleryImage[] = $derived(
    showPhotography ? [...gifs, ...others, ...photos] : [...gifs, ...others]
  );
  let selected = $derived(selectedIndex !== null ? allImages[selectedIndex] : null);

  function togglePhotography() {
    showPhotography = !showPhotography;
  }

  function open(img: GalleryImage) {
    selectedIndex = allImages.indexOf(img);
  }

  function close() {
    selectedIndex = null;
  }

  function next() {
    if (selectedIndex === null) return;
    selectedIndex = (selectedIndex + 1) % allImages.length;
  }

  function prev() {
    if (selectedIndex === null) return;
    selectedIndex = (selectedIndex - 1 + allImages.length) % allImages.length;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<svelte:head>
  <title>Winnie Yao — Visuals</title>
</svelte:head>

<div class="visuals-intro">
  <p>I create illustrations and motion graphics using Procreate, Adobe Illustrator and After Effects.</p>
</div>

<div class="visuals-gallery">
  {#if gifs.length > 0}
    <div class="design-grid design-grid-2col">
      {#each gifs as img (img.src)}
        <button class="design-gallery-item" onclick={() => open(img)}>
          <img src={img.src} alt={img.alt} />
        </button>
      {/each}
    </div>
  {/if}

  {#if others.length > 0}
    <div class="design-grid design-grid-3col">
      {#each others as img (img.src)}
        <button class="design-gallery-item" onclick={() => open(img)}>
          <img src={img.src} alt={img.alt} />
        </button>
      {/each}
    </div>
  {/if}

  <button class="gallery-subheadline" onclick={togglePhotography} aria-expanded={showPhotography}>
    Photography
    <i class="fa-solid fa-chevron-down subheadline-arrow" class:open={showPhotography}></i>
  </button>

  {#if showPhotography}
    <div class="gallery-grid">
      {#each photos as photo (photo.src)}
        <button class="gallery-item" onclick={() => open(photo)}>
          <img src={photo.src} alt={photo.alt} loading="lazy" />
        </button>
      {/each}
    </div>
  {/if}

</div>

{#if selected}
  <div class="lightbox-overlay">
    <button class="lightbox-backdrop" onclick={close} aria-label="Close gallery image"></button>
    <button class="lightbox-close" onclick={close} aria-label="Close">&times;</button>
    <button class="lightbox-arrow lightbox-prev" onclick={prev} aria-label="Previous image">&#10094;</button>
    <button class="lightbox-arrow lightbox-next" onclick={next} aria-label="Next image">&#10095;</button>
    <img src={selected.src} alt={selected.alt} class="lightbox-image" />
    {#if selected.caption}
      <p class="lightbox-caption">{selected.caption}</p>
    {/if}
  </div>
{/if}

<style>
.visuals-intro {
  width: 50%;
  margin: 4rem auto 2rem auto;
  text-align: center;
  font-family: var(--font-body);
}

.visuals-intro p {
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.6rem;
  color: #000000;
  margin-bottom: 0.8rem;
}

@media (max-width: 768px) {
  .visuals-intro {
    width: 80%;
  }

  .visuals-intro p {
    font-size: 0.85rem;
    line-height: 1.5rem;
  }
}

@media (max-width: 480px) {
  .visuals-intro {
    width: 90%;
  }

  .visuals-intro p {
    font-size: 0.8rem;
  }
}
/* Full-width gallery */
.visuals-gallery {
width: 100%;
margin: 2rem 0;
padding: 0 0.5rem;
box-sizing: border-box;
}

/* Photography toggle headline */
.gallery-subheadline {
display: flex;
align-items: center;
gap: 0.5rem;
font-family: var(--font-heading);
font-size: 1.2rem;
font-weight: 400;
color: #5d5c5c;
margin: 3rem 0 1rem 0;
background: none;
border: none;
padding: 0;
cursor: pointer;
}

.gallery-subheadline:hover {
color: #000;
}

.subheadline-arrow {
font-size: 0.85rem;
transition: transform 0.25s ease;
}

.subheadline-arrow.open {
transform: rotate(180deg);
}

/* Design grids */
.design-grid {
display: grid;
gap: 0.5rem;
width: 100%;
margin-bottom: 0.5rem;
}

.design-grid-2col {
grid-template-columns: repeat(2, 1fr);
}

.design-grid-3col {
grid-template-columns: repeat(3, 1fr);
}

.design-gallery-item {
display: block;
border: none;
padding: 0;
background: none;
cursor: zoom-in;
width: 100%;
overflow: hidden;
}

.design-gallery-item img {
width: 100%;
height: auto;
display: block;
transition: transform 0.3s ease;
}

.design-gallery-item:hover img {
transform: scale(1.05);
}

/* Photography grid */
.gallery-grid {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 0.5rem;
}

.gallery-item {
border: none;
padding: 0;
background: none;
cursor: zoom-in;
aspect-ratio: 1 / 1;
overflow: hidden;
}

.gallery-item img {
width: 100%;
height: 100%;
object-fit: cover;
display: block;
transition: transform 0.3s ease;
}

.gallery-item:hover img {
transform: scale(1.05);
}

@media (max-width: 768px) {
.design-grid-3col,
.gallery-grid {
    grid-template-columns: repeat(2, 1fr);
}
}

@media (max-width: 480px) {
.design-grid-2col,
.design-grid-3col {
    grid-template-columns: 1fr;
}

.gallery-grid {
    grid-template-columns: 1fr;
    gap: 0.6rem;
}
}

/* Lightbox */
.lightbox-overlay {
position: fixed;
inset: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
z-index: 1000;
}

.lightbox-backdrop {
position: absolute;
inset: 0;
background: rgba(0, 0, 0, 0.85);
border: none;
cursor: zoom-out;
z-index: 1;
}

.lightbox-image {
position: relative;
z-index: 2;
max-width: 90vw;
max-height: 80vh;
object-fit: contain;
pointer-events: none;
}

.lightbox-caption {
position: relative;
z-index: 2;
color: white;
margin-top: 1rem;
font-family: var(--font-body);
font-size: 0.9rem;
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
color: rgb(250, 202, 27);
}

.lightbox-close:active {
color: rgb(200, 160, 20);
transform: scale(0.9);
}

.lightbox-arrow {
position: absolute;
top: 50%;
transform: translateY(-50%);
background: none;
border: none;
color: white;
font-size: 2rem;
font-weight: bold;
cursor: pointer;
padding: 0.5rem 1rem;
z-index: 3;
transition: color 0.2s ease, transform 0.15s ease;
}

.lightbox-prev {
left: 1rem;
}

.lightbox-next {
right: 1rem;
}

.lightbox-arrow:hover {
color: rgb(250, 202, 27);
}

.lightbox-arrow:active {
color: rgb(200, 160, 20);
transform: translateY(-50%) scale(0.9);
}
</style>