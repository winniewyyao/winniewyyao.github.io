<script lang="ts">
  import { page } from '$app/state';

  const links = [
    { href: '/journalism', label: 'JOURNALISM' },
    { href: '/marketing', label: 'MARKETING' },
    { href: '/visuals', label:'VISUALS'},
    { href: '/about', label: 'ABOUT' },
    { href: '/chinese-work', label: '繁/中' }
  ];

  let menuOpen = $state(false);

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }
</script>

<header class="header">
  <div class="header-left">
    <a href="/" class="header-name">WINNIE YAO</a>
  </div>

  <div class="header-right">
    {#each links as link (link.href)}
      <a href={link.href} class="header-link {page.url.pathname === link.href ? 'active' : ''}">{link.label}</a>
    {/each}
  </div>

  <button class="hamburger-icon" onclick={toggleMenu} aria-label="Toggle menu" aria-expanded={menuOpen}>
    <i class="fa-solid {menuOpen ? 'fa-xmark' : 'fa-bars'}"></i>
  </button>
</header>

{#if menuOpen}
  <nav class="mobile-menu">
    {#each links as link (link.href)}
      <a href={link.href} class="mobile-menu-link {page.url.pathname === link.href ? 'active' : ''}" onclick={closeMenu}>{link.label}</a>
    {/each}
  </nav>
{/if}

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.8rem;
    padding: 1rem 3%;
    /* border-bottom: 1px solid #4d4d4d; 70% grey */
  }

  .header-left .header-name {
    font-family: var(--font-body);
    font-size: 0.85rem;
    font-weight: 700;
    /* font-style: italic; */
    color: black;
    text-decoration: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }

  .header-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
    gap: 1.5rem;
  }

  .header-link {
    font-family: var(--font-body);  /* keep whatever font-family line you already have */
    font-size: 0.85rem;
    font-weight: 400;
    text-decoration: underline;
    text-decoration-color: transparent;
    text-decoration-thickness: 2px;
    text-underline-offset: 0.35em;
    transition: text-decoration-color 0.25s ease;
  }

  .header-link:hover,
  .header-right .active {
    text-decoration-color: #64a2df;
  }

  .header-name:hover {
    color: #64a2df;
  }

  .hamburger-icon {
    display: none;
    background: none;
    border: none;
    font-size: 1.3rem;
    color: black;
    cursor: pointer;
    padding: 0.3rem;
  }

  .mobile-menu {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .header {
      padding: 1rem 4%;
    }

    .header-right {
      gap: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    .header-right {
      display: none;
    }

    .hamburger-icon {
      display: block;
    }

    .mobile-menu {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0;
      padding: 0 3% 1rem 3%;
    }

    .mobile-menu-link {
      font-family: var(--font-body);
      font-size: 0.9rem;
      font-weight: 400;
      color: black;
      text-decoration: none;
      padding: 0.6rem 0;
      width: 100%;
      border-bottom: 1px solid #eee;
    }

    .mobile-menu-link.active {
      font-weight: 600;
      color: #64a2df;
    }
  }
</style>