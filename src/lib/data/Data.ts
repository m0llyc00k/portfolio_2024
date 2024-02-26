const projects = [
  {
    "page_title": "Mapping the Wildfire Destruction in Lahaina",
    "project_url": "https://www.nytimes.com/interactive/2023/08/11/us/hawaii-wildfire-lahaina-damage.html",
    "img_url": "wildfire",
    "date": "",
    "org": "The New York Times",
    "desc_text": "Surveying the community of Lahaina destroyed by a wildfire using satellite imagery.",
    "responsibilities": "Story planning, data analysis, reporting, & development",
    "tools": "Felt, Svelte, Illustrator",
    "publish": "TRUE"
  },
  {
    "page_title": "The Summer of Strikes",
    "project_url": "https://www.nytimes.com/interactive/2023/09/03/business/economy/strikes-union-sag-uaw.html",
    "img_url": "strikes",
    "date": "",
    "org": "The New York Times",
    "desc_text": "Contextualizing union strikes in the summer of 2023 using U.S. Bureau of Labor Statistics data.",
    "responsibilities": "Reporting, graphics & data analysis",
    "tools": "R, Illustrator, Datawrapper",
    "publish": "TRUE"
  },
  {
    "page_title": "The Lineup for the First Republican Presidential Debate",
    "project_url": "https://www.nytimes.com/interactive/2023/08/01/us/elections/republican-debate-qualifications.html",
    "img_url": "campaign-donors",
    "date": "",
    "org": "The New York Times",
    "desc_text": "A tracker determining which candidates have met necessary qualifications for the republican primary debate.",
    "responsibilities": "Data gathering, development & graphics",
    "tools": "Svelte, Layercake, ai2html, javascript, archieML",
    "publish": "TRUE"
  },
  {
    "page_title": "Third Year Anniversary of the Jan. 6 Riot",
    "project_url": "https://www.nytimes.com/interactive/2024/01/04/us/january-6-capitol-trump-investigation.html",
    "img_url": "jan_6_rev",
    "date": "",
    "org": "The New York Times",
    "desc_text": "Animating data from the Department of Justice to show outcomes of the Jan. 6 riots.",
    "responsibilities": "Story planning, design, development & illustration",
    "tools": "Svelte, Illustrator, digital tablet, d3.js",
    "publish": "TRUE"
  },
  {
    "page_title": "Live Debate Tracker",
    "project_url": "https://www.nytimes.com/interactive/2023/08/23/us/politics/republican-debate-live-tracker.html",
    "img_url": "first-debate",
    "date": "",
    "org": "The New York Times",
    "desc_text": "Real-time monitoring of attacks and speaking time during the primary debates, providing up-to-the-second insights into events and discourse dynamics.",
    "responsibilities": "Live data gathering, development & graphics",
    "tools": "Svelte, d3,js, javascript, archieML",
    "publish": "TRUE"
  },
  {
    "page_title": "NYT/ Siena Polls",
    "project_url": "https://www.nytimes.com/2023/11/06/us/politics/trump-biden-times-siena-poll.html",
    "img_url": "trump_biden_polls",
    "date": "",
    "org": "The New York Times",
    "desc_text": "Crafting narratives with New York Times poll data to uncover insights into public opinion, societal trends, and political dynamics.",
    "responsibilities": "Development & graphics",
    "tools": "Svelte, Layercake, ai2html, d3.js",
    "publish": "TRUE"
  },
  {
    "page_title": "Keeping Track of the Trump Investigations",
    "project_url": "https://www.nytimes.com/interactive/2023/us/trump-investigations-charges-indictments.html",
    "img_url": "trump-investigations",
    "date": "",
    "org": "The New York Times",
    "desc_text": "Tracking the status of Trump's investigations.",
    "responsibilities": "Reporting & graphics",
    "tools": "Svelte, javascript, d3.js",
    "publish": "TRUE"
  },
  {
    "page_title": "Which Presidential Candidates are Leading the 2024 Money Race?",
    "project_url": "https://www.nytimes.com/interactive/2023/07/16/us/politics/campaign-finance-july-2023.html",
    "img_url": "campaign-finance",
    "date": "",
    "org": "The New York Times",
    "desc_text": "Visualizing Federal Election Commission (FEC) data to assess the financial status of Republican candidates.",
    "responsibilities": "Reporting, graphics, & design",
    "tools": "Illustrator, ai2html, Svelte",
    "publish": "TRUE"
  },
  {
    "page_title": "Where U.A.W. Strikes are Happening",
    "project_url": "https://www.nytimes.com/interactive/2023/09/15/business/uaw-strike-map.html",
    "img_url": "uaw-map",
    "date": "",
    "org": "The New York Times",
    "desc_text": "Mapping the locations where United Automobile Workers (U.A.W.) strikes are occurring",
    "responsibilities": "Data reporting",
    "tools": "Svelte, d3.js",
    "publish": "TRUE"
  },
  {
    "page_title": "Live Vote Count: House Removes McCarthey as Speaker",
    "project_url": "https://www.nytimes.com/interactive/2023/10/03/us/politics/mccarthy-house-speaker-vote-live.html",
    "img_url": "mccarthy",
    "date": "",
    "org": "The New York Times",
    "desc_text": "Developing a live vote count system to track the House of Representatives' vote on removing McCarthy as Speaker.",
    "responsibilities": "Live data gathering & reporting",
    "tools": "Live reporting, archieML",
    "publish": "TRUE"
  },
  {
    "page_title": "The Long Wait for Help as Massacres Unfolded in Israel",
    "project_url": "https://www.nytimes.com/interactive/2023/10/11/world/middleeast/israel-gaza-hamas-attack-timeline.html",
    "img_url": "gaza-israel",
    "date": "",
    "org": "The New York Times",
    "desc_text": "Constructing a timeline determining how long citizens in Israel waited for IDF assistance, gathering and analyzing news reports, official statements, eyewitness accounts, and social media posts.",
    "responsibilities": "Reporting, data gathering, design & graphics development",
    "tools": "Illustrator, ai2html, Svelte, javascript",
    "publish": "TRUE"
  },
  {
    "page_title": "Ukraine Index",
    "project_url": "https://www.brookings.edu/articles/ukraine-index-tracking-developments-in-the-ukraine-war/",
    "img_url": "ukraine-index",
    "date": "",
    "org": "Brookings Institution",
    "desc_text": "A dashboard that is continuously updated by scholars and research assistants to monitor wartime metrics in Ukraine.",
    "responsibilities": "Design & development",
    "tools": "Svelte, Tailwind, Layercake, d3.js",
    "publish": "TRUE"
  },
  {
    "page_title": "Vulnerability Indicator",
    "project_url": "https://www.brookings.edu/articles/despair-and-vulnerability-to-information-an-interactive-tool/",
    "img_url": "vul-indicator",
    "date": "",
    "org": "Brookings Institution",
    "desc_text": "Identifying the metrics related to vulnerability, despair, and other factors that may contribute to misinformation accross the US.",
    "responsibilities": "Design & development",
    "tools": "Svelte, Tailwind, Layercake, d3.js",
    "publish": "TRUE"
  },
  {
    "page_title": "Political Podcasts",
    "project_url": "https://www.brookings.edu/articles/audible-reckoning-how-top-political-podcasters-spread-unsubstantiated-and-false-claims/",
    "img_url": "political-podcast",
    "date": "",
    "org": "Brookings Institution",
    "desc_text": "Interactive charts that dissect misinformation and extreme rhetoric in conservative political podcasts.",
    "responsibilities": "Development & graphics",
    "tools": "Svelte, Tailwind, Layercake, d3.js",
    "publish": "TRUE"
  },
  {
    "page_title": "Global Weather Dashboard",
    "project_url": "",
    "img_url": "",
    "date": "",
    "org": "Parsons School of Design",
    "desc_text": "",
    "responsibilities": "",
    "tools": "",
    "publish": "FALSE"
  },
  {
    "page_title": "Temporary Objects with Permanent Impact: Ephemera at the Smithsonian",
    "project_url": "",
    "img_url": "",
    "date": "",
    "org": "Parsons School of Design",
    "desc_text": "",
    "responsibilities": "",
    "tools": "",
    "publish": "FALSE"
  },
  {
    "page_title": "Mapping Vulnerability in the Opioid Crisis",
    "project_url": "https://opioid-vulnerability-map.netlify.app/",
    "img_url": "opioid_map",
    "date": "",
    "org": "Parsons School of Design",
    "desc_text": "Using attribute clustering, analyzing overdose deaths, prescription rates, and MAT provider availability to identify vulnerability in the opioid epidemic.",
    "responsibilities": "Design, development, data gathering, analysis & story planning",
    "tools": "Svelte, Tailwind, Layercake, d3.js",
    "publish": "TRUE"
  },
  {
    "page_title": "In Crisis, Again",
    "project_url": "https://in-crisis-again.netlify.app/",
    "img_url": "landing_page",
    "date": "",
    "org": "Parsons School of Design",
    "desc_text": "llustrating, mapping, and charting the enduring impact of the opioid crisis. My masters thesis.",
    "responsibilities": "Design, development, illustration, & story planning",
    "tools": "Vue, javascript, d3.js",
    "publish": "TRUE"
  },
  {
    "page_title": "Titles and Topics: Ephemera at the Smithsonian",
    "project_url": "",
    "img_url": "",
    "date": "",
    "org": "Parsons School of Design",
    "desc_text": "",
    "responsibilities": "",
    "tools": "",
    "publish": "FALSE"
  },
  {
    "page_title": "Thematic Maps: QGIS",
    "project_url": "",
    "img_url": "",
    "date": "",
    "org": "Parsons School of Design",
    "desc_text": "",
    "responsibilities": "",
    "tools": "",
    "publish": "FALSE"
  },
  {
    "page_title": "Raster & Dot Density Maps: QGIS",
    "project_url": "",
    "img_url": "",
    "date": "",
    "org": "Parsons School of Design",
    "desc_text": "",
    "responsibilities": "",
    "tools": "",
    "publish": "FALSE"
  },
  {
    "page_title": "Instacart Maps: Halloween",
    "project_url": "https://www.instacart.com/company/updates/halloweens-ultimate-candy-contenders/",
    "img_url": "halloween_detail_2",
    "date": "",
    "org": "The DataFace",
    "desc_text": "Charts driven by Instacart's insights on trends derived from user purchase data.",
    "responsibilities": "Front-end development",
    "tools": "Svelte, Tailwind, Illustrator",
    "publish": "TRUE"
  },
  {
    "page_title": "Instacart Maps: Summer",
    "project_url": "https://www.instacart.com/company/updates/instacarts-summer-bbq-report-is-hot-off-the-grill/",
    "img_url": "",
    "date": "",
    "org": "The DataFace",
    "desc_text": "",
    "responsibilities": "",
    "tools": "",
    "publish": "FALSE"
  },
  {
    "page_title": "Yelp Economic Average",
    "project_url": "https://data.yelp.com/yea-q2-2022.html",
    "img_url": "yelp_reservations",
    "date": "",
    "org": "The DataFace",
    "desc_text": "Measuring the impacts of inflation on consumer habits with yelp data.",
    "responsibilities": "Front-end development & design",
    "tools": "Svelte, Tailwind, Layercake, d3.js",
    "publish": "TRUE"
  },
  {
    "page_title": "3D Display Production",
    "project_url": "https://mollybcook.com/",
    "img_url": "display-overview",
    "date": "",
    "org": "Saks Fifth Avenue, Anthropologie",
    "desc_text": "A collection of work from my previous career as a 3D production artist and project manager.",
    "responsibilities": "Design, production & project management",
    "tools": "3D production methods. 3ds Max, autoCAD, sketching, and Illustrator for design.",
    "publish": "TRUE"
  }
];

export default projects;