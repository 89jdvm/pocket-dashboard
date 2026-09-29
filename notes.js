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
  pick: "R09xI14",
  sampled: ["R19xI13"], // only a sample of ads was checked for Ecuador access

  names: {
    R09xI14: "Project manager at IT-services firms",
    R13xI13: "Sales for software & AI",
    R13xI11: "Sales for fintech",
    R19xI13: "AI data work",
    R13xI14: "Sales at consulting & service firms",
    R22xI20: "Operations & admin in health",
    R22xI11: "Operations & admin in finance",
    R13xI22: "Sales in media & creative",
    R13xI21: "Sales in education",
    R09xI13: "Project manager at software & AI companies",
  },

  // One line per card: what you would do all day.
  day: {
    R09xI14: "Run client software, data and web projects to delivery: plan, budget, keep the team and the client in step.",
    R13xI13: "Find and win customers for a software product: prospect, demo, negotiate, close. Often base plus commission.",
    R13xI11: "The same sales work for payment, banking, crypto and insurance products.",
    R19xI13: "Freelance tasks for AI companies: rate and correct AI answers, write test questions, paid by the hour.",
  },

  // Card rows that are not counted straight from data.js.
  // pay.latam / pay.us: [low, high] USD a month. The rating uses pay.latam[0]: what Latin-American
  // employers pay, the likelier hirers of a career-changer. unsteady = hours or income not guaranteed.
  card: {
    R09xI14: {
      pay: { latam: [2000, 4200], us: [8750, 10000], text: "<b>$2,000–4,200</b> a month from Latin-American employers; US-rate employers <b>$8,750+</b> (fewer)." },
      trend: ["mixed", "Mixed: US project-manager jobs +7% to 2035, but tech postings are still low."],
      gaps: ["weeks", "Scrum, Jira and one software project. About <b>$200</b> and a few weeks."],
    },
    R13xI13: {
      pay: { latam: [1500, 1500], us: [7500, 7500], text: "Median <b>$1,500</b> a month from Latin-American employers; US-rate median <b>$7,500</b>." },
      trend: ["down", "Entry sales jobs shrinking: 36% of B2B software firms cut them in a year."],
      gaps: ["job", "A sales job with a revenue target. No course gives it; only a sales job does."],
    },
    R13xI11: {
      pay: { latam: [1500, 1500], us: [7300, 7300], text: "Latin-American employers: about the same as software sales (median <b>$1,500</b>); US-rate median about <b>$7,300</b>." },
      trend: ["unknown", "Unknown: no job-trend data found, only investment figures."],
      gaps: ["job", "Same as software sales, and some ads need a US insurance licence."],
    },
    R19xI13: {
      pay: { hourly: 68, unsteady: true, text: "Median <b>$68 an hour</b> for specialist tasks; hours are not guaranteed." },
      trend: ["mixed", "Mixed: AI created these jobs, but platforms cut contractors and rates in 2025."],
      gaps: ["job", "A specific expert background (medicine, law, finance, science or coding)."],
    },
  },

  pickBox: `
    <p class="pick-h">Aim for <b>project manager or delivery manager at IT-services and software firms that hire in Latin America</b>.</p>
    <h3>Why</h3>
    <ul>
      <li><b>Best odds at the CV screen of the four (36%).</b> Your 8 years running projects is the core of the job; what the ads add is the software way of working.</li>
      <li><b>The only option whose gaps close in weeks.</b> A Scrum certificate ($200), Jira (free) and one software project told as a case study. Both sales options need a sales-target record, which only a sales job gives.</li>
      <li><b>Pay clears your floor, and long-term demand grows.</b> Latin-American employers pay $2,000 to $4,200 a month. US project-manager jobs are projected to grow 7% to 2035 (${L_BLS_PM}), though tech job postings are still low today.</li>
    </ul>
    <h3>What you give up</h3>
    <p>A smaller market: about 5 new ads a week open to you, against 94 employers in software sales. Pay from Latin-American employers rarely reaches the EUR 4,000 visa bar; US-rate employers pay more and are fewer. If it is too thin, widen to project-manager jobs in other industries (155 employers in 60 days).</p>
    <h3>How sure</h3>
    <p>Solid. It stayed in the top 3 in 996 of 1,000 redraws of the data and under all 12 weightings, and 43 of 44 of its ads were confirmed open to someone in Ecuador (one had been taken down). <a href="#evidence">See every check</a>.</p>
    <div class="next"><b>Next step:</b> reply "go with project manager" in our chat, and I will draft the first 10 applications from the confirmed ads under <a href="#details">Details</a>.</div>`,

  // Look closer: titles and employers, steps to close the gaps [what, cost, detail], where posted.
  jobline: {
    R09xI14: "Titles: Project Manager, Delivery Manager, Scrum Master, Technical Project Manager, Project Coordinator. Employers seen: Bluelight Consulting, Nortal, Azumo, Kruger NearShore (Ecuador), Atmosera, phData, Fueled.",
    R13xI13: "Titles: Account Executive, SDR / BDR (the entry titles), Business Development Manager, Partnerships Manager. Employers seen: ElevenLabs, Grafana Labs, Elastic, Anthropic, Canonical, Twilio.",
    R13xI11: "Employers seen: Bybit, Stripe, Airwallex, Yuno, Jeeves. Some ads need a US insurance or Medicare licence, which rules them out.",
    R19xI13: "Platforms seen: micro1, Invisible, Mercor, Mindrift. Most ads want a specific expert; some want voice or language work, where native Spanish helps.",
  },
  steps: {
    R09xI14: [
      ["PSM I (Scrum Master certificate)", "$200", `No course required; 80 questions in 60 minutes (${L_PSM}). Closes the Scrum gap that about a quarter of ads name.`],
      ["Jira", "Free", "Run one real project in the free plan (for example your job search or a Kitu product launch) and show it."],
      ["One software or web project told as a case study", "$0", "Career-change advice says a delivered project persuades more than a certificate."],
      ["Later: PMP, or a cheaper first step", "$225–300", `PMP needs 36 months of project experience with a degree plus 35 hours of training; your non-software projects count (${L_PMP}); fee: check on pmi.org. Cheaper first steps: CAPM ($225 member, $300 non-member; ${L_CAPM}) or the Google Project Management certificate (about $49 a month, under $300 in total; ${L_GPM}).`],
    ],
    R13xI13: [
      ["HubSpot sales certifications", "Free", `2 to 7 hours each (${L_HUB}). Closes the CRM-literacy gap.`],
      ["An outbound case study", "$0", "Write to 20 hiring managers the way an SDR writes to customers; sales hiring advice calls this the qualifying test."],
      ["A sales-target record", "A job", `Only a sales job gives it. The usual entry is an SDR or BDR role, which Latin-American employers pay about $900 to $2,000 a month (${L_HT_BDR}).`],
    ],
    R13xI11: [
      ["The same steps as software sales", "Free to a job", "Plus knowledge of the financial product. Some ads need a US insurance or Medicare licence."],
    ],
    R19xI13: [
      ["No short-term fix", "–", "Nothing quick closes an expert gap. Useful as side income while you apply elsewhere, if a task matches your fields (energy, agriculture, Spanish)."],
    ],
  },
  where: {
    R09xI14: "Where these jobs are posted for Latin America: Get on Board, Torre, WeRemoto, We Work Remotely, and the career pages of nearshore firms.",
  },

  // [could the numbers be wrong because..., what was done, what it found, verdict, one-line summary]
  sure: [
    ["An ad counted as open to you is closed to you", "All 348 ads the labels counted as open in the four options were read on 28 Sep, and the 160 Jobgether pages (a site whose ads carry no text in the data) were opened one by one.", "Project manager, IT services: 43 of 44 confirmed, 1 page taken down, 0 closed to you. Sales for software: 30 of 181 closed to you (US-only, Canada-only, one-city, Asian hours), so its employer count fell from 126 to 94. Sales for fintech: 9 of 74 closed to you. 101 of 101 quotes were found word for word in the ads.", "solid", "348 ads read one by one; project manager 43 of 44 confirmed open."],
    ["Jobs sit in the wrong job type or sector", "Every ad in the project-manager group was read in full; a fresh reader re-labelled 40 ads without seeing the labels.", "Project manager: 19 of 20 both labels right. Sales for software: 16 of 20; the 4 misses belong to neighbouring groups.", "solid", "A blind re-label agreed on 19 of 20 (project manager) and 16 of 20 (sales)."],
    ["The lead is luck of which ads were collected", "Employers redrawn at random 1,000 times, ranking redone each time.", "Project manager in the top 3 in 996 of 1,000; sales for software in 992. Third place is a coin flip (about 420 each for fintech sales and AI data work).", "solid", "The top two stay in the top 3 in over 990 of 1,000 redraws."],
    ["One job site bends the result", "Ranking rebuilt leaving out each of the 9 largest sites.", "The top two stay in the top 3 every time. Every remote job site shows 3 to 7 times more sales ads than project-manager ads.", "solid", "Leaving out any one of the 9 largest sites doesn't change the top two."],
    ["The weights in the score decide the winner", "12 different weightings of market size, pay, openness to Ecuador, language and hiring from abroad.", "Project manager in the top 3 under all 12; sales for software under 11.", "solid", "Project manager is in the top 3 under all 12 weightings."],
    ["Your fit is judged wrongly", "A blind reader re-judged the CV-screen verdict on 40 ads.", "Agreed on 37 of 40. The judgement uses your written record: see \"Correct your record\".", "solid", "A blind re-check agreed on 37 of 40 CV-screen verdicts."],
    ["LinkedIn and other large sites are missing", "Can't be tested: LinkedIn's terms forbid collecting its ads.", "The real market is larger than shown for every option. The order between the options is the same on every site that was collected.", "partly", "LinkedIn isn't in the data; the order is the same on every site that is."],
    ["Pay is wrong", "Stated pay in the ads, the Latin-American board Get on Board, and two pay guides.", "Sales: 90 ads with pay open to you. Project manager: about 15 ads plus a pay guide, which agree ($2,000 to $4,200 from Latin-American employers).", "partly", "Project-manager pay rests on about 15 ads and a pay guide that agree."],
    ["The trend is wrong", "Official statistics and industry reports from 2024 to 2026; the three key quotes were re-opened and checked.", "Project manager mixed to positive; sales entry roles shrinking; fintech sales unknown.", "partly", "Official statistics and industry reports; fintech has no trend data."],
    ["The ads are old or already filled", "Ads were published in the 60 days to 25 Sep 2026. Links were opened on 25 and 28 Sep.", "14 of the 160 Jobgether pages were already taken down on 28 Sep. The counts show hiring over 60 days, so fewer are open today.", "partly", "Counts show 60 days of hiring; some ads are already filled."],
    ["An employer will not pick you", "Can't be measured from job ads.", "Only applications and conversations answer this: see \"What no data can tell you\".", "unknown", "No data can say whether an employer picks you."],
  ],

  payLede: "Pay depends more on who employs you than on the job title. Latin-American employers pay project managers $2,000 to $4,200 a month and salespeople a median of $1,500. US-rate employers pay both far more, and ask for more.",

  unknown: [
    "Whether employers will pick you over other applicants. Remote jobs draw many applicants: on LinkedIn in 2022, remote jobs got half of all applications while being under a fifth of postings (LinkedIn's own data).",
    "How many of these ads are still open today. They show hiring over 60 days; 14 of 160 Jobgether pages were already taken down on 28 Sep.",
    "Real pay offers for project-manager jobs, since few ads state pay.",
  ],

  findOut: [
    "Apply now to the confirmed ads of the job you pick (see Details). One interview tells more than any ranking.",
    "Hold 5 short advice calls with people who hire project managers at nearshore firms: ask what would make them hire you and what they pay.",
    "The rule set on 25 Sep stands: if 10 good applications bring no reply, the choice is re-checked with the new evidence.",
  ],

  trendDetail: {
    R09xI14: `Project managers +7% to 2035 in the US (${L_BLS_PM}); tech job postings "remain depressed" (${L_INDEED}).`,
    R13xI13: `36% of B2B software companies cut sales-development teams in a year, 19% grew them (${L_SDR}). BLS: AI "may limit employment growth for sales representatives" (${L_BLS_SALES}).`,
    R13xI11: `No job data found, only investment figures (Latin-American start-up funding up to $4.1 billion in 2025, ${L_CRUNCH}).`,
    R19xI13: `Data annotators are among roles AI created (${L_WEF}); Scale AI cut 500 contractors (${L_SCALE}) and Mercor cut one project's rate by about a quarter (${L_MERCOR}).`,
  },

  payDetail: {
    R09xI14: `4 remote ads on ${L_GOB}, the Latin-American job board, and the same range in its live listings on 28 Sep; a pay guide puts US companies paying Latin-American project managers at about $3,000 (mid-level) to $4,000 (senior) a month (${L_HT_PM}). Thin: 3 of this group's 54 ads state pay.`,
    R13xI13: `27 ads open to you from US-rate software firms state pay. Latin-American employers: 4 of 17 clear $2,000; a pay guide puts sales-development reps hired from Latin America at about $900 to $2,000 (${L_HT_BDR}).`,
    R13xI11: "13 ads state pay.",
    R19xI13: "62 ads state an hourly rate.",
  },

  europe: {
    R09xI14: "Project managers are hired in every sector in Europe, and your project years count toward the PMP. Latin-American pay stays under the EUR 4,000 family visa bar; a US-rate employer clears it.",
    R13xI13: "213 of its 394 reachable ads are jobs in Europe. US-rate remote pay clears the visa bar.",
    R13xI11: "33 of its 107 reachable ads are jobs in Europe.",
    R19xI13: "Hourly income varies month to month; check it can meet a visa's steady-income rule.",
  },

  narrow: "Job ads can't carry the narrowing decision. Renewable energy appears in 32 project-manager ads from 20 employers, but none of those employers had an ad open to someone in Ecuador: those jobs are in Europe. \"Indigenous\" appears in no project-manager or sales ad at all. A niche inside the job will need other evidence: which client sectors nearshore firms serve, public tenders, and what the people you talk to say. It can be decided after you start applying.",

  record: [
    ["Jira, Asana or another project-management tool", "Project manager"],
    ["Agile or Scrum on a project", "Project manager"],
    ["A software, web or IT project", "Project manager"],
    ["A CRM tool (Salesforce, HubSpot, Pipedrive)", "Both sales options"],
    ["A sales job measured against a revenue target (quota)", "Both sales options"],
    ["SQL or a BI tool (Power BI, Tableau)", "Every option asks for it in some ads"],
    ["Employment at a large company", "Some ads in all four"],
  ],

  weights: "Ranking weights, fixed on 25 Sep before any result was seen: employers 35%, pay 25%, open to Ecuador 20%, working language 10%, hiring from abroad 10%.",

  footer: "How this was made: job ads published in the 60 days to 25 Sep 2026 from more than 20 job sites, labelled by AI, then checked by hand and by independent AI readers on 25 to 28 Sep. Fit judged against your written record only. Pay from stated pay in the ads, Get on Board and HireTalent.lat. Trend from BLS (Aug 2026), Indeed Hiring Lab (Sep 2026), Emergence Capital via SaaStr (Jun 2025), WEF and LinkedIn (Jan 2026), TechCrunch (Jul 2025) and Forbes (Nov 2025). Built 28 Sep 2026.",
};
