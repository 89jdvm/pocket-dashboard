// Hand-written text for the dashboard (28 Sep 2026). Numbers here come from dashboard/data.js
// (tools/build_dashboard_data.py) or from the sources linked beside them.
const L_BLS_PM = '<a href="https://www.bls.gov/ooh/business-and-financial/project-management-specialists.htm" target="_blank" rel="noopener">BLS, Aug 2026</a>';
const L_INDEED = '<a href="https://hiringlab.indeed.com/2026/09/24/us-labor-market-snapshot-september-2026/" target="_blank" rel="noopener">Indeed Hiring Lab, 24 Sep 2026</a>';
const L_SDR = '<a href="https://saastr.com/the-great-sdr-downsizing" target="_blank" rel="noopener">Emergence Capital survey via SaaStr, Jun 2025</a>';
const L_BLS_SALES = '<a href="https://www.bls.gov/ooh/Sales/Wholesale-and-manufacturing-sales-representatives.htm" target="_blank" rel="noopener">BLS, Aug 2026</a>';
const L_WEF = '<a href="https://www.weforum.org/stories/2026/01/ai-has-already-added-1-3-million-new-jobs-according-to-linkedin-data/" target="_blank" rel="noopener">WEF / LinkedIn, Jan 2026</a>';
const L_SCALE = '<a href="https://techcrunch.com/2025/07/16/scale-ai-lays-off-14-of-staff-largely-in-data-labeling-business/" target="_blank" rel="noopener">TechCrunch, Jul 2025</a>';
const L_MERCOR = '<a href="https://www.aol.com/articles/ai-startup-powering-meta-openai-230627434.html" target="_blank" rel="noopener">Forbes via AOL, Nov 2025</a>';
const L_CRUNCH = 'Crunchbase News, Jan 2026';
const L_GOB = '<a href="https://www.getonbrd.com/jobs-Project%20Manager" target="_blank" rel="noopener">Get on Board</a>';
const L_HT_PM = '<a href="https://hiretalent.lat/salaries/project-manager" target="_blank" rel="noopener">HireTalent.lat, Mar 2026</a>';
const L_HT_BDR = '<a href="https://hiretalent.lat/salaries/business-development-representative" target="_blank" rel="noopener">HireTalent.lat, Mar 2026</a>';
const L_PSM = '<a href="https://www.scrum.org/assessments/professional-scrum-master-i-certification" target="_blank" rel="noopener">Scrum.org</a>';
const L_CAPM = '<a href="https://www.pmi.org/certifications/certified-associate-capm" target="_blank" rel="noopener">PMI</a>';
const L_PMP = '<a href="https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/project-management-professional-handbook.pdf" target="_blank" rel="noopener">PMI handbook</a>';
const L_GPM = '<a href="https://grow.google/certificates/project-management/" target="_blank" rel="noopener">Google</a>';
const L_HUB = '<a href="https://academy.hubspot.com/certification-overview" target="_blank" rel="noopener">HubSpot Academy</a>';

const NOTES = {
  names: {
    R09xI14: "Project manager at IT-services firms",
    R13xI13: "Sales for software & AI",
    R13xI11: "Sales for fintech",
    R19xI13: "AI data work",
  },

  answer: `<ol>
    <li><b>Yes, the evidence is strong enough to pick now.</b> On 28 Sep every check that could make the market look different from what is really open to you was run: 348 ads were read one by one to confirm someone living in Ecuador can apply, labels and fit were re-judged by readers who had not seen them, the ranking was redrawn 1,000 times and rebuilt without each job site, and the trend comes from official statistics. No weak spot is left that would change the choice below. Three limits remain and are shown on this page: the counts cover free job sites and leave out LinkedIn; pay for project managers rests on about 15 ads and a pay guide that agree with each other; and no data can say whether an employer will pick you.</li>
    <li><b>The evidence points to project manager (or delivery manager) at IT-services and software-development firms that hire in Latin America.</b> 33 such employers had a job open to you in 60 days. Of the 44 ads the labels called open to you, 43 were confirmed on reading, one had been taken down, and none was closed to you. You would pass the CV screen outright on 36% of these ads, the best of the four options. Latin-American employers pay these roles $2,000 to $4,200 a month, which clears your floor. Project managers in the US are projected to grow 7% to 2035 (${L_BLS_PM}).</li>
    <li><b>What that choice asks of you.</b> A Scrum certificate (PSM I, $200, no course required), working knowledge of Jira, and one software or web project you can describe as your own. Most ads want 5 or more years of project management; you have about 8 years running projects outside software. It is a narrow door: about 5 new ads a week open to you in this group, so you apply to nearly every one, and widen to project-manager jobs in other sectors (155 employers in 60 days by the labels). Pay from Latin-American employers rarely reaches the EUR 4,000 visa bar; US-rate employers pay more and are fewer.</li>
    <li><b>Sales for software is the bigger market and the harder way in.</b> 94 employers had a job open to you (the check removed a quarter of the ones the labels counted). You would pass the CV screen on 29% of ads; the missing piece is a sales job with a revenue target, which no course can give. Latin-American employers pay salespeople a median of $1,500 a month, 43% of software-sales ads mention commission or a quota, and entry sales roles are shrinking: 36% of B2B software companies cut them in a year (${L_SDR}).</li>
    <li><b>Fintech sales and AI data work lose on the evidence.</b> Fintech sales has the same gaps as software sales, some ads need a US insurance licence, and no job-trend data was found. AI data work is open to you but is mostly freelance hourly work for specialists (lawyers, doctors, coders): you would pass the CV screen on 21% of ads, and platforms cut pay sharply in 2025.</li>
  </ol>`,

  tiles: [
    ["348", "ads read one by one on 28 Sep", "to confirm who can apply from Ecuador; 101 of 101 quotes checked word for word"],
    ["33", "employers open to you: project manager, IT services", "43 of 44 ads confirmed, 1 taken down, 0 closed to you; 22 employers say so in the ad itself"],
    ["94", "employers open to you: sales for software", "was 126 before the check; 30 ads were limited to other countries or time zones"],
    ["36% vs 29%", "CV screens you would pass outright", "project manager vs software sales; a blind re-check agreed on 37 of 40 judgements"],
  ],

  day: {
    R09xI14: "Run client projects to delivery: plan, schedule, budget, keep the development team and the client in step, report progress. Mostly software, data and web projects at firms that build for clients; about a third are projects at marketing or translation agencies.",
    R13xI13: "Find and win customers for a software product: prospect, run demos, negotiate, close. 43% of ads with text mention commission, on-target earnings or a quota.",
    R13xI11: "The same sales work for payment, banking, crypto and insurance products.",
    R19xI13: "Contract tasks for AI companies: rate and correct AI answers, write test questions, record or transcribe data, paid by the hour and project by project.",
  },

  gaps: {
    R09xI14: "Agile or Scrum (asked in 24% of ads that list requirements), a software or IT project (21%), project tools such as Jira (19%). Most ads want 5+ years of project management.",
    R13xI13: "A sales job with a revenue target (25% of ads), prospecting and outbound (24%), CRM tools such as Salesforce or HubSpot (15%).",
    R13xI11: "The same as software sales; a few ads need a US insurance or Medicare licence, or Polish or Romanian.",
    R19xI13: "A specific expert background: medicine, law, finance, science or coding (the most common missing item).",
  },

  pay: {
    R09xI14: `Latin-American employers: <b>$2,000 to $4,200</b> a month (4 remote ads in the data on ${L_GOB}, the Latin-American job board, and the same range in its live listings on 28 Sep); a pay guide puts US companies paying Latin-American project managers at about $3,000 (mid-level) to $4,000 (senior) a month (${L_HT_PM}). US-rate employers: $8,750 to $10,000 at the low end of their range (6 ads). <span class="dim">Thin: 3 of this group's 54 ads state pay.</span>`,
    R13xI13: `US-rate software firms: median low end <b>$7,500</b> a month (27 ads open to you that state pay). Latin-American employers: median <b>$1,500</b>, and 4 of 17 clear $2,000; a pay guide puts sales-development reps hired from Latin America at about $900 to $2,000 (${L_HT_BDR}).`,
    R13xI11: "US-rate employers: median about $7,300 a month (13 ads state pay). Latin-American employers: same low range as software sales.",
    R19xI13: "Median <b>$68 an hour</b> (62 ads that state an hourly rate), for specialist tasks; hours are not guaranteed.",
  },

  work: {
    R09xI14: "Full-time; most ads don't say employee or contractor. Senior level: 29 of 51 ads are lead-level.",
    R13xI13: "Full-time, often base plus commission.",
    R13xI11: "Full-time, often base plus commission.",
    R19xI13: "Freelance: 215 of 277 ads are freelance contracts.",
  },

  trend: {
    R09xI14: `Mixed. Project managers +7% to 2035 in the US (${L_BLS_PM}); tech job postings "remain depressed" (${L_INDEED}).`,
    R13xI13: `Entry roles shrinking: 36% of B2B software companies cut sales-development teams in a year, 19% grew them (${L_SDR}). BLS: AI "may limit employment growth for sales representatives" (${L_BLS_SALES}).`,
    R13xI11: `Unknown: no job data found, only investment figures (Latin-American start-up funding up to $4.1 billion in 2025, ${L_CRUNCH}).`,
    R19xI13: `Mixed. Data annotators are among roles AI created (${L_WEF}); Scale AI cut 500 contractors (${L_SCALE}) and Mercor cut one project's rate by about a quarter (${L_MERCOR}).`,
  },

  europe: {
    R09xI14: "Project managers are hired in every sector in Europe, and your project years count toward the PMP. Latin-American pay stays under the EUR 4,000 family visa bar; a US-rate employer clears it.",
    R13xI13: "213 of its 394 reachable ads are jobs in Europe. US-rate remote pay clears the visa bar.",
    R13xI11: "33 of its 107 reachable ads are jobs in Europe.",
    R19xI13: "Hourly income varies month to month; check it can meet a visa's steady-income rule.",
  },

  sure: [
    ["An ad counted as open to you is closed to you", "All 348 ads the labels counted as open in the four options were read on 28 Sep, and the 160 Jobgether pages (a site whose ads carry no text in the data) were opened one by one.", "Project manager, IT services: 43 of 44 confirmed, 1 page taken down, 0 closed to you. Sales for software: 30 of 181 closed to you (US-only, Canada-only, one-city, Asian hours), so its employer count fell from 126 to 94. Sales for fintech: 9 of 74 closed to you. 101 of 101 quotes were found word for word in the ads.", "solid"],
    ["Jobs sit in the wrong job type or sector", "Every ad in the project-manager group was read in full; a fresh reader re-labelled 40 ads without seeing the labels.", "Project manager: 19 of 20 both labels right. Sales for software: 16 of 20; the 4 misses belong to neighbouring groups.", "solid"],
    ["The lead is luck of which ads were collected", "Employers redrawn at random 1,000 times, ranking redone each time.", "Project manager in the top 3 in 996 of 1,000; sales for software in 992. Third place is a coin flip (about 420 each for fintech sales and AI data work).", "solid"],
    ["One job site bends the result", "Ranking rebuilt leaving out each of the 9 largest sites.", "The top two stay in the top 3 every time. Every remote job site shows 3 to 7 times more sales ads than project-manager ads.", "solid"],
    ["The weights in the score decide the winner", "12 different weightings of market size, pay, openness to Ecuador, language and hiring from abroad.", "Project manager in the top 3 under all 12; sales for software under 11.", "solid"],
    ["Your fit is judged wrongly", "A blind reader re-judged the CV-screen verdict on 40 ads.", "Agreed on 37 of 40. The judgement uses your written record: see the last section.", "solid"],
    ["LinkedIn and other large sites are missing", "Can't be tested: LinkedIn's terms forbid collecting its ads.", "The real market is larger than shown for every option. The order between the options is the same on every site that was collected.", "partly"],
    ["Pay is wrong", "Stated pay in the ads, the Latin-American board Get on Board, and two pay guides.", "Sales: 90 ads with pay open to you. Project manager: about 15 ads plus a pay guide, which agree ($2,000 to $4,200 from Latin-American employers).", "partly"],
    ["The trend is wrong", "Official statistics and industry reports from 2024 to 2026; the three key quotes were re-opened and checked.", "Project manager mixed to positive; sales entry roles shrinking; fintech sales unknown.", "partly"],
    ["The ads are old or already filled", "Ads were published in the 60 days to 25 Sep 2026. Links were opened on 25 and 28 Sep.", "14 of the 160 Jobgether pages were already taken down on 28 Sep. The counts show hiring over 60 days, so fewer are open today.", "partly"],
    ["An employer will not pick you", "Can't be measured from job ads.", "Only applications and conversations answer this: see the section below.", "unknown"],
  ],

  entail: {
    R09xI14: {
      job: `<p>You would run projects that a firm delivers for its clients: a website, an app, a data platform, a Salesforce or SAP roll-out. Titles: Project Manager, Delivery Manager, Scrum Master, Technical Project Manager, Project Coordinator. Employers seen: Bluelight Consulting, Nortal, Azumo, Kruger NearShore (Ecuador), Atmosera, phData, Fueled.</p>
      <p>Your record matches the core: 8 years running projects, a grant cycle, a government cooperation office and a start-up. What the ads add is the software way of working: Scrum, Jira and a client software project.</p>`,
      close: `<ul class="plain">
        <li><b>PSM I (Scrum Master)</b>: $200 per attempt, no course required, 80 questions in 60 minutes (${L_PSM}). Closes the Scrum gap that about a quarter of ads name.</li>
        <li><b>Jira</b>: free plan; run one real project in it (for example your job search or a Kitu product launch) and show it.</li>
        <li><b>One software or web project told as a case study</b>: $0. Career-change advice says a delivered project persuades more than a certificate.</li>
        <li><b>Later, PMP</b>: needs 36 months of project experience with a degree plus 35 hours of training; your non-software projects count (${L_PMP}). Fee: check on pmi.org. <b>CAPM</b> ($225 member, $300 non-member, no experience needed; ${L_CAPM}) or the <b>Google Project Management certificate</b> (about $49 a month, under $300 in total; ${L_GPM}) are cheaper first steps.</li>
      </ul>
      <p class="small">Where these jobs are posted for Latin America: Get on Board, Torre, WeRemoto, We Work Remotely, and the career pages of nearshore firms.</p>`,
    },
    R13xI13: {
      job: `<p>You would win customers for a software product. Titles: Account Executive, SDR / BDR (the entry titles), Business Development Manager, Partnerships Manager. Employers seen: ElevenLabs, Grafana Labs, Elastic, Anthropic, Canonical, Twilio.</p>
      <p>Your record has the B2B selling of a founder (exports to a buyer in Spain) and strong stakeholder work. What the ads add is a sales job measured against a target, CRM tools and outbound prospecting.</p>`,
      close: `<ul class="plain">
        <li><b>HubSpot sales certifications</b>: free, 2 to 7 hours each (${L_HUB}). Closes the CRM-literacy gap.</li>
        <li><b>An outbound case study</b>: write to 20 hiring managers the way an SDR writes to customers; sales hiring advice calls this the qualifying test.</li>
        <li><b>The sales-target record</b> can only come from a sales job. The usual entry is an SDR or BDR role, which Latin-American employers pay about $900 to $2,000 a month (${L_HT_BDR}).</li>
      </ul>`,
    },
    R13xI11: {
      job: `<p>Sales for payment, banking, crypto and insurance products. Employers seen: Bybit, Stripe, Airwallex, Yuno, Jeeves. Some ads need a US insurance or Medicare licence, which rules them out.</p>`,
      close: `<ul class="plain"><li>The same steps as software sales, plus knowledge of the financial product. No job-trend data was found for this group.</li></ul>`,
    },
    R19xI13: {
      job: `<p>Freelance tasks for AI companies and data platforms (micro1, Invisible, Mercor, Mindrift). Most ads want a specific expert: physics, law, medicine, coding, finance. Some want voice or language work, where native Spanish helps.</p>`,
      close: `<ul class="plain"><li>Nothing short-term closes an expert gap. Useful as a side income while you apply elsewhere, if a task matches your fields (energy, agriculture, Spanish).</li></ul>`,
    },
  },

  payLede: "Pay depends more on who employs you than on the job title. Latin-American employers pay project managers $2,000 to $4,200 a month and salespeople a median of $1,500. US-rate employers pay both far more, and ask for more.",

  unknown: [
    "Whether employers will pick you over other applicants. Remote jobs draw many applicants: on LinkedIn in 2022, remote jobs got half of all applications while being under a fifth of postings (LinkedIn's own data).",
    "How many of these ads are still open today. They show hiring over 60 days; 14 of 160 Jobgether pages were already taken down on 28 Sep.",
    "Real pay offers for project-manager jobs, since few ads state pay.",
  ],

  findOut: [
    "Apply now to the verified ads of the job you pick (the examples under \"What each choice would ask of you\" are a start). One interview tells more than any ranking.",
    "Hold 5 short advice calls with people who hire project managers at nearshore firms: ask what would make them hire you and what they pay.",
    "The rule set on 25 Sep stands: if 10 good applications bring no reply, the choice is re-checked with the new evidence.",
  ],

  narrow: "Job ads can't carry the narrowing decision. Renewable energy appears in 32 project-manager ads from 20 employers, but none of those employers had an ad open to someone in Ecuador: those jobs are in Europe. \"Indigenous\" appears in no project-manager or sales ad at all. A niche inside the job will need other evidence: which client sectors nearshore firms serve, public tenders, and what the people you talk to say. It can be decided after you start applying.",

  record: [
    "Jira, Asana or another project-management tool",
    "Agile or Scrum on a project",
    "A software, web or IT project",
    "A CRM tool (Salesforce, HubSpot, Pipedrive)",
    "A sales job measured against a revenue target (quota)",
    "SQL or a BI tool (Power BI, Tableau)",
    "Employment at a large company",
  ],

  footer: "How this was made: job ads published in the 60 days to 25 Sep 2026 from more than 20 job sites, labelled by AI, then checked by hand and by independent AI readers on 25 to 28 Sep. Ranking weights, fixed on 25 Sep before any result was seen: employers 35%, pay 25%, open to Ecuador 20%, working language 10%, hiring from abroad 10%. Fit judged against your written record only. Pay from stated pay in the ads, Get on Board and HireTalent.lat. Trend from BLS (Aug 2026), Indeed Hiring Lab (Sep 2026), Emergence Capital via SaaStr (Jun 2025), WEF and LinkedIn (Jan 2026), TechCrunch (Jul 2025) and Forbes (Nov 2025). Built 28 Sep 2026.",
};
