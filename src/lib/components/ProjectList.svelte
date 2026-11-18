<script>
  import ToolkitBadge from './ToolkitBadge.svelte';
  let { projects, emptyMessage = 'More work coming soon.' } = $props();

  // Instagram posts/reels open in an in-page pop-up instead of a new tab
  const instagramPattern = /instagram\.com\/(?:p|reel|tv)\/([\w-]+)/;

  /** @type {{ src: string, href: string, title: string } | null} */
  let preview = $state(null);

  /** @param {string} href */
  function embedUrl(href) {
    const match = href.match(instagramPattern);
    return match ? `https://www.instagram.com/p/${match[1]}/embed/` : null;
  }

  /**
   * @param {MouseEvent} e
   * @param {{ href: string, title: string }} project
   */
  function handleClick(e, project) {
    const src = embedUrl(project.href);
    // Let ctrl/cmd/shift/middle clicks keep their normal open-in-new-tab behavior
    if (!src || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    preview = { src, href: project.href, title: project.title };
  }

  function closePreview() {
    preview = null;
  }

  /** @param {KeyboardEvent} e */
  function handleKeydown(e) {
    if (e.key === 'Escape' && preview) closePreview();
  }

  // Stop the page behind the pop-up from scrolling
  $effect(() => {
    if (!preview) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  });
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="project-list">
  {#each projects as project (project.href)}
    <a href={project.href} target="_blank" class="project-row" onclick={(e) => handleClick(e, project)}>
      <div class="row-thumbnail">
        <img src={project.image} alt={project.alt} loading="lazy" />
      </div>
      <div class="row-content">
        <h3 class="row-title">{project.title}</h3>
        {#if project.description}
          <p class="row-description">{project.description}</p>
        {/if}
        {#if project.tools?.length}
          <div class="row-labels">
            {#each project.tools as tool (tool)}
              <ToolkitBadge {tool} />
            {/each}
          </div>
        {/if}
      </div>
    </a>
  {:else}
    <p class="empty-message">{emptyMessage}</p>
  {/each}
</div>

{#if preview}
  <div class="preview-overlay">
    <button class="preview-backdrop" onclick={closePreview} aria-label="Close video preview"></button>
    <button class="preview-close" onclick={closePreview} aria-label="Close">&times;</button>
    <div class="preview-frame" role="dialog" aria-modal="true" aria-label={preview.title}>
      <iframe src={preview.src} title={preview.title} allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>
    </div>
    <a class="preview-external" href={preview.href} target="_blank" rel="noopener">View on Instagram</a>
  </div>
{/if}

<style>
  .project-list {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
  }

  .project-row {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 1.2rem 0;
    border-top: 1px solid #d6d4c4;
    text-decoration: none;
    font-family: var(--font-body);
  }

  .project-row:last-child {
    border-bottom: 1px solid #d6d4c4;
  }

  .row-thumbnail {
    flex: 0 0 240px;
    aspect-ratio: 3 / 2;
    overflow: hidden;
  }

  .row-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }

  .project-row:hover .row-thumbnail img {
    transform: scale(1.05);
  }

  .row-content {
    flex: 1;
    min-width: 0;
  }

  .row-title {
    font-size: 1.4rem;
    font-weight: 600;
    color: #222;
    margin: 0.5rem 0 1rem 0;
    line-height: 1.4rem;
  }

  .row-description {
    font-size: 0.9rem;
    font-weight: 400;
    color: #555;
    margin: 0.5rem 0 0 0;
    line-height: 1.4rem;
  }

  .row-labels {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.35rem;
    margin-top: 0.8rem;
  }

  .row-labels :global(.toolkit) {
    font-size: 0.7rem;
    font-weight: 400;
    line-height: 1;
    padding: 0.3rem 0.55rem;
    border-radius: 999px;
    white-space: nowrap;
    color: #444;
    background-color: #dcdaca;
    border: 1px solid #dcdaca;
  }

  .empty-message {
    font-family: var(--font-body);
    font-size: 0.9rem;
    color: #777;
    padding: 1.2rem 0;
    margin: 0;
    border-top: 1px solid #d6d4c4;
    border-bottom: 1px solid #d6d4c4;
  }

  @media (max-width: 768px) {
    .row-thumbnail {
      flex-basis: 180px;
    }

    .row-title {
      font-size: 0.95rem;
    }

    .row-description {
      font-size: 0.82rem;
    }
  }

  @media (max-width: 480px) {
    .project-row {
      flex-direction: column;
      gap: 0.8rem;
    }

    .row-thumbnail {
      flex-basis: auto;
      width: 100%;
    }
  }
  /* Instagram preview pop-up */
  .preview-overlay {
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    z-index: 1000;
  }

  .preview-backdrop {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    border: none;
    cursor: zoom-out;
    z-index: 1;
  }

  .preview-frame {
    position: relative;
    z-index: 2;
    width: min(400px, 90vw);
    height: min(720px, 80vh);
    background: #fff;
  }

  .preview-frame iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }

  .preview-external {
    position: relative;
    z-index: 2;
    color: #fff;
    font-family: var(--font-body);
    font-size: 0.85rem;
    text-decoration: underline;
    text-underline-offset: 0.25em;
  }

  .preview-external:hover {
    color: rgb(250, 202, 27);
  }

  .preview-close {
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

  .preview-close:hover {
    color: rgb(250, 202, 27);
  }

  .preview-close:active {
    color: rgb(200, 160, 20);
    transform: scale(0.9);
  }
</style>
