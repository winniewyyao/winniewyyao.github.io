// Data/Graphics tab on the journalism page.
// Each work looks like this (description and tools are optional):
// {
//   href: 'https://link-to-the-work',
//   image: '/image/item-thumbnail/data/thumbnail.png',
//   alt: 'short image description',
//   title: 'Headline',
//   description: 'One-line description.',
//   tools: ['ipynb:Python Jupyter Notebook', 'datawrapper:Datawrapper']
// }

// "Selected Work" section — add your featured data works here
/** @type {any[]} */
export const selectedDataProjects = [
   {
    href: 'https://www.seattletimes.com/seattle-news/mental-health/how-seattle-students-mental-health-rebounded-after-the-pandemic/',
    image: '/image/item-thumbnail/data/student-mental-health.gif',
    alt: 'seattle-times-selected-works',
    title: 'How Seattle students’ mental health rebounded after the pandemic',
    description: 'Data shows today’s Seattle Public Schools students’ mental health is better — and not just since the pandemic. Students today are even doing better than students in 2016.',
    tools: ['datawrapper:Datawrapper', 'javascript:JavaScript'],
  },
  {
    href: 'https://winniewyyao.github.io/st-selected-works/',
    image: '/image/item-thumbnail/data/st-selected.png',
    alt: 'seattle-times-selected-works',
    title: 'The Seattle Times: Selected Works',
    description: 'A collection of data journalism and graphics works published by The Seattle Times.',
    tools: ['datawrapper:Datawrapper', 'javascript:JavaScript', 'illustrator:Adobe Illustrator', 'arcgis:ArcGIS'],
  },
  {
    href: 'https://riley-ramirez.github.io/Moneyball/',
    image: '/image/item-thumbnail/data/moneyball.png',
    alt: 'moneyball-data-reporting',
    title: 'Is Moneyball Dead?',
    description: 'A data-driven story exploring how team payroll correlates with winning percentages in Major League Baseball.',
    tools: ['svelte: Svelte'],
  },
    {
    href: 'https://winniewyyao.github.io/living-under-visa-uncertainty/',
    image: '/image/item-thumbnail/data/living-under-visa-uncertainty.mp4',
    alt: 'living-under-visa-uncertainty',
    title: 'Living Under Visa Uncertainty',
    description: 'A reporting follows students at different stages of life, showing how the policies and bureaucratic processes can deeply shape everyday life.',
    tools: ['d3:D3.js'],
  },
];

// "Everything Else" section
export const otherDataProjects = [
  {
    href: 'https://winniewyyao.github.io/fair-market-rent-visualization/',
    image: '/image/item-thumbnail/data/fair-market-rent-mo.png',
    alt: 'fair-market-rent-map',
    title: 'Fair Market Rent Dataset',
    description: 'Data analysis and visualization of the rental costs across the United States.',
    tools: ['ipynb:Python Jupyter Notebook', 'datawrapper:Datawrapper', 'javascript:JavaScript']
  },
  {
    href: 'https://github.com/winniewyyao/dc-bike-sharing/blob/main/dc-bike-sharing.ipynb',
    image: '/image/item-thumbnail/data/dc-bike-sharing.png',
    alt: 'dc-bike-sharing-plot',
    title: 'Bike-sharing System in D.C.',
    description: 'Data analysis and visualization of bike-sharing ridership in Washington, D.C.',
    tools: ['ipynb:Python Jupyter Notebook']
  },
  {
    href: 'https://winniewyyao.github.io/data-viz-babynames/',
    image: '/image/item-thumbnail/data/babynames.png',
    alt: 'babynames',
    title: 'Olivias in the U.S.',
    description: 'A data visualization project that explores the most popular female baby name in the U.S. today.',
    tools: ['spreadsheet:Spreadsheet', 'datawrapper:Datawrapper']
  },
  {
    href: 'https://winniewyyao.github.io/r-mapping/r-mapping-census-data.html',
    image: '/image/item-thumbnail/data/median-house-value-santa-clara-map.png',
    alt: 'median-house-value-santa-clara-map',
    title: 'Mapping Median House Value',
    description: 'A visual mapping of median house values across Santa Clara County using R programming language.',
    tools: ['R:R']
  },
    {
    href: 'https://winniewyyao.github.io/12-leaflet-map/',
    image: '/image/item-thumbnail/data/leaflet-us-travel.gif',
    alt: 'leaflet-us-travel',
    title: 'Explore Cities in the States',
    description: 'An interactive story that takes readers through four cities on the map for tourism.',
    tools: ['leaflet:Leaflet.js']
  },
];