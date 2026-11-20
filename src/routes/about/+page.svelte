<script>
  // Each chapter folds open to show its paragraphs
  const chapters = [
    {
      heading: '2019-2021 Radio & Television, NTUA',
      paragraphs: [
        'The program cultivated my creativity from arts and multimedia production judgement. I built a solid foundation for my video editing and audio production skills.',
        'In summer 2020, I interned at <strong>National Education Radio</strong>, where I interviewed experts from different fields, host and produced radio programs.'
      ]
    },
    {
      heading: '2021-2024 Journalism & Political Science, NCCU',
      paragraphs: [
        "Driven by passion for journalism, I transferred to National Chengchi University's Journalism program. Here, I immersed in communications theories and journalism case studies to better understand media effect, while delving in political systems, institution, human rights and election in political science.",
        'Outside school, I explored different roles in a more commerce industry through internships – I interned at <strong>Elite PR Group</strong>, where I assisted in writing press releases, doing market researches and coordinating campaigns. I joined <strong>SurgMate</strong>, a medical simulator start-up, as a marketing intern. I assisted in creating marketing assets, doing marketing researches, organized CRM system and analyzed sales data to provide insights.'
      ]
    },
    {
      heading: '2024-2026 Multimedia and Data Journalism, UC Berkeley',
      paragraphs: [
        'The course computational social science and Infographics and Data Visualization sparked my interest in data and quantitative studies, driving me to pursue my master’s degree at Journalism School at UC Berkeley.',
        'I strengthened my skills in data storytelling, coding and designing. I reported on 2024 city council election in District 5 in Oakland for Oakland North, produced short-form videos for the Stakes Explained. Right after graduation, I interned at <strong>The Seattle Times</strong> as a graphics intern, creating static charts and maps for news articles, reporting on data and developing interactive graphics.'
      ]
    }
  ];
</script>

<svelte:head>
  <title>Winnie Yao</title>
</svelte:head>

<div class="about-container">
  <div class="photo-container">
    <img src="/image/about-me.png" alt="Winnie Yao" class="about-page-photo" />
  </div>

  <div class="about-text-container">
    <h2>About Me & My Journey</h2>
    <p>
      I recently graduated from the University of California, Berkeley with a master's degree in journalism and a data science certificate.
    </p>
    <!-- <p>My interest in storytelling started early. I journaled about my everyday experiences and observations since I was little.</p> -->
    <p>Growing up, I’ve always been curious about what is happening in society, from student protests to debates over legislation. That curiosity eventually led me into the worlds of communications and social science, where I’ve explored different ways to digest information and tell stories.</p>

    <div class="chapters">
      {#each chapters as chapter (chapter.heading)}
        <details class="chapter">
          <summary class="chapter-heading">
            {chapter.heading}
            <i class="fa-solid fa-chevron-down chapter-arrow"></i>
          </summary>
          <div class="chapter-content">
            {#each chapter.paragraphs as paragraph (paragraph)}
              <!-- Paragraphs are hard-coded in this file, not user input, so @html is safe here -->
              <!-- eslint-disable-next-line svelte/no-at-html-tags -->
              <p>{@html paragraph}</p>
            {/each}
          </div>
        </details>
      {/each}
    </div>

    <p>My background spans several fields, but to me, these experiences are connected. Each has taught me a different way to ask questions, understand audiences and work with information.</p>
    <p>I was born and raised in Taiwan. I speak Mandarin, English, Hokkien and basic Korean.</p>
    <p style="font-size: 1rem; color: grey;">When I’m not on a deadline, you might find me doodling on my tablet or piecing together a jigsaw puzzle. 🧩✨</p>
    <!-- <p>📄 View my resume <a href="/asset/pdf-file/winnieyao-cv.pdf" target="_blank" class="hover bio-work-experience">here</a>.</p> -->
    <p>📩 Contact me at <strong>winnieyao22@gmail.com</strong></p>
  </div>
</div>


<style>
  /* Container for the photo + text: photo stacked on top on every screen size */
.about-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* center the photo */
  gap: 1rem;
  margin: 2rem auto;
  width: 60%; /* container width on desktop */
  max-width: 1000px; /* optional: prevent too wide */
  padding: 0 1rem;
}

/* Photo container */
.photo-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

/* Photo styling */
.about-page-photo {
  max-width: 300px; 
  width: 100%;
  object-fit: cover;
}

/* Text container */
.about-text-container {
  width: 100%;
  font-family: var(--font-body);
  line-height: 1.7;
  color: black;
}

.about-text-container h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: left; /* align heading with text */
  color: black;
}

.about-text-container p {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

/* Foldable chapters */
.chapters {
  margin-bottom: 1rem;
}

.chapter {
  border-top: 1px solid #d6d4c4;
}

.chapter:last-child {
  border-bottom: 1px solid #d6d4c4;
}

.chapter-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
  padding: 0.6rem 0;
  font-size: 1.1rem; /* same size as the body text */
  font-weight: 700;
  cursor: pointer;
  list-style: none;
}

.chapter-heading::-webkit-details-marker {
  display: none;
}

.chapter-heading:hover {
  background-color: #64a2df;
  z-index: -1;
}

.chapter-heading:active {
  background-color: #64a2df;
}

.chapter-arrow {
  font-size: 0.85rem;
  transition: transform 0.25s ease;
}

.chapter[open] .chapter-arrow {
  transform: rotate(180deg);
}

.chapter-content {
  padding-bottom: 0.4rem;
}

/* #email {
  text-decoration: underline;
} */

/* Responsive layout for smaller screens */
/* Responsive layout */
/* Tablet */
@media (min-width: 768px) and (max-width: 1024px) {
  .about-container {
    width: 75%;
  }
}

@media (max-width: 767px) {
  .about-container {
    width: 90%; /* narrower width for mobile */
  }

  .about-text-container {
    text-align: center;
  }
  .about-text-container h2 {
  text-align: center;
  }

  .chapter-heading,
  .chapter-content {
    text-align: left;
  }
}
</style>