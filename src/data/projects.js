/**
 * Project dossiers.
 * Drop media files into src/assets/projects/<slug>/ and wire paths in `media`.
 */
import MesfarCover from "../assets/mesfar/main mesfar.webp";
import MesfarLogo from "../assets/mesfar/mesfar-logo.webp";
import MesfarPost1 from "../assets/mesfar/post/mesfar1.webp";
import MesfarPost2 from "../assets/mesfar/post/Artboard 1222.webp";
import MesfarPost3 from "../assets/mesfar/post/Artboard 2-8.webp";
import MesfarPost4 from "../assets/mesfar/post/Artboard 3-8.webp";
import MesfarPost5 from "../assets/mesfar/post/Artboard 4-8.webp";
import MesfarPost6 from "../assets/mesfar/post/Artboard 5-8.webp";
import EwsaliCover from "../assets/ewsali/main.webp";
import EwsaliLogo from "../assets/ewsali/logo-icon-bg.webp";
import EwsaliStickers from "../assets/ewsali/iojioj.webp";
import EwsaliPostBlocking from "../assets/ewsali/بوست١.webp";
import EwsaliPostLights from "../assets/ewsali/بوست٣.webp";
import MaazimCover from "../assets/maazim/Artboard 1.webp";
import MaazimLogo from "../assets/maazim/maazim logo.webp";
import MaazimInvitePhone from "../assets/maazim/invite-phone.webp";
import MaazimGuestDashboard from "../assets/maazim/guest-dashboard.webp";
import MaazimGoldenArabesque from "../assets/maazim/golden-arabesque.webp";
import MaazimFloralElegance from "../assets/maazim/floral-elegance.webp";
import ArosaCover from "../assets/arosa/arosa.webp";
import ArosaLogo from "../assets/arosa/log arosa.webp";
import ArosaTeamWide from "../assets/arosa/472714506_3878647089014251_3829714310295533411_n.webp";
import ArosaTeamCampus from "../assets/arosa/1653762217705.webp";
import ArosaMachineSide from "../assets/arosa/1653762226877.webp";
import ArosaInterior from "../assets/arosa/485746679_3944522532426706_5424598557836337286_n.webp";

export const projects = [
  {
    slug: "mesfar",
    name: "Mesfar",
    nameAr: "مسفار",
    tag: "Travel marketplace",
    accent: "yellow",
    oneLiner:
      "A two-sided marketplace for discovering and booking organized trips in Egypt — instead of hunting through Facebook, Instagram, and WhatsApp.",
    status: "Live on the App Store",
    role: "Product builder / software engineer",
    timeframe: "Concept → production",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Redux Toolkit",
      "NativeWind",
      "Node.js",
      "PostgreSQL",
      "TypeORM",
      "Redis",
      "React",
      "Vite",
      "Cloudinary",
      "AWS S3",
      "Grafana",
    ],
    brief: [
      "Organized travel in Egypt is fragmented. Agencies sell through Facebook pages, Instagram posts, WhatsApp threads, and word of mouth. Travelers compare destinations, dates, prices, pickups, and hotels by hand. Agencies with great trips still struggle to reach anyone outside their existing audience.",
      "Mesfar puts inventory from multiple agencies into one structured marketplace. Travelers browse destinations, compare trips, inspect full itineraries, and book. Agencies get a distribution channel without building their own product.",
      "The product was designed around how Egyptian travelers actually look for trips — not a copy of an international booking site. Discovery comes first: you should be able to open the app without knowing where you want to go and still find something worth taking.",
    ],
    sections: [
      {
        id: "ecosystem",
        label: "Ecosystem",
        heading: "Not one app. A marketplace stack.",
        copy: [
          "Mesfar Mobile is the traveler-facing React Native app: home discovery, destinations, agencies, search, trip details, booking, saved trips, referrals, and bilingual Arabic/English (RTL/LTR).",
          "Mesfar API (Node, TypeScript, TypeORM, PostgreSQL, Redis) owns users, agencies, trips, reservations, auth, search, and booking workflows.",
          "Mesfar Web is the admin and operations surface for agencies, trips, reservations, and the content that has to stay consistent enough to compare.",
        ],
      },
      {
        id: "marketplace",
        label: "Marketplace",
        heading: "Both sides of the stall.",
        copy: [
          "Travelers get destination-first discovery (Dahab → trips → details → book), upcoming and last-minute inventory, agency pages, structured trip content, and a reservation that ties traveler → trip → agency.",
          "Agencies get a publish-and-sell channel. I also designed the onboarding pipeline: potential → contacted → meeting → proposal → negotiation → contract → onboarding → active. Unstructured PDFs, WhatsApp dumps, and Instagram posts became standardized bilingual trip records.",
          "The business model is commission on successful bookings (around 3–7%), not a tax on opening the app. That only works if payment fees, payouts, refunds, and moderation are treated as product problems — Visa, wallets, Fawry, T+3 settlement, cancellation windows, and a PENDING_REVIEW → PUBLISHED content gate.",
        ],
      },
    ],
    built: [
      "Shipped the customer iOS app with Expo/EAS (versions through ~1.2.x) and App Store distribution.",
      "Discovery surfaces: Yalla Mesfar, promotional cards, destinations, nearest/upcoming trips, agencies, universal + agency search, New and solo-trip badges.",
      "Trip detail and booking redesigns covering itinerary, inclusions, pickup, ID upload when required, and email booking notifications plus daily summaries.",
      "Auth with JWT, OTP, Google OAuth, profiles, and role-based access for travelers, agencies, and admins.",
      "Referral loop tied to completed trips (e.g. YOUSEF500 → 500 EGP off for the friend, 500 EGP back after they travel) instead of vanity signups.",
      "Production observability with Grafana: availability, 5xx, latency, traffic spikes, DB connections, cache hit rate — because a marketplace is not done when the happy path works on a simulator.",
    ],
    hardPart:
      "The hard part was never one screen. A travel marketplace only works when travelers, agencies, accurate content, simple booking, viable payments, and a reason to come back all exist at once. That is the chicken-and-egg problem, plus the engineering to keep both sides honest.",
    result:
      "A functioning B2C + B2B2C travel marketplace: travelers discover and book organized trips; agencies get a digital distribution channel. The customer app is live on the App Store. Instagram is where the public product still talks.",
    links: [
      {
        label: "Mesfar on the App Store",
        href: "https://apps.apple.com/us/app/mesfar/id6754666745",
      },
      {
        label: "Instagram · @mesfaregypt",
        href: "https://www.instagram.com/mesfaregypt/",
      },
    ],
    media: {
      cover: MesfarCover,
      cardImage: MesfarLogo,
      shots: [
        { src: MesfarPost2, alt: "Mesfar promotional post" },
        { src: MesfarPost3, alt: "Mesfar promotional post" },
        { src: MesfarPost4, alt: "Mesfar promotional post" },
        { src: MesfarPost5, alt: "Mesfar promotional post" },
        { src: MesfarPost6, alt: "Mesfar promotional post" },
        { src: MesfarPost1, alt: "Mesfar promotional post" },
      ],
    },
  },
  {
    slug: "ewsali",
    name: "Ewsali",
    nameAr: "اوصلي",
    tag: "Private QR relay",
    accent: "green",
    oneLiner:
      "A privacy-first QR sticker that lets someone reach a car owner in seconds — without ever seeing their phone number.",
    status: "Product built · GTM in motion",
    role: "Founder / product builder",
    timeframe: "Concept → physical + software",
    stack: [
      "Next.js",
      "Supabase",
      "Vercel",
      "Resend",
      "WhatsApp Cloud API",
      "SMS APIs",
      "QR generation",
      "Hostinger / DNS",
    ],
    brief: [
      "Sometimes you urgently need the owner of a car: it is blocking you, headlights are on, a window is open, someone hit it, or parking staff need it moved. The usual options are waiting, asking strangers, leaving a paper note, or putting a phone number on the windshield — which is a privacy problem.",
      "Ewsali / اوصلي is a physical QR sticker tied to a private digital relay. Scan the code, pick why you are contacting the owner, and Ewsali alerts them. The scanner never sees a personal number. Person → Ewsali → Owner.",
      "The brand line is “We connect people to what matters.” The Arabic is simpler still: في مشكلة؟ اعمل سكان للكود و اوصلي. The product has to be understandable in seconds because the behavior is new. Cars in Egypt are the first market; the same relay can later sit on keys, bags, luggage, and other belongings.",
    ],
    sections: [
      {
        id: "product",
        label: "Product",
        heading: "Stick. Scan. Alert. Number stays hidden.",
        copy: [
          "The sticker lives where the problem happens — on the windshield — so the reporter does not need an Ewsali account, the app, or a lecture on how it works. Phone camera → page → predefined reason (blocking me, headlights on, car open, I hit it, other) → optional ~50-character note. It is an alert system, not a chat platform between strangers.",
          "Each sticker has a unique identity: QR plus a management code. Design went through shapes, bilingual copy, packaging, and windshield placement (upper passenger side so it is visible without wrecking the driver’s view). Delivery is an A5 branded card, not a loose sticker: “Reach the car owner in seconds.” / “اوصل لصاحب العربية في ثواني.” Onboarding is Stick → Scan → Alert.",
          "Two users, two jobs. The owner buys protection, privacy, and reliability. The scanner may have never heard of Ewsali — the sticker has to teach the interaction by itself. That is also the answer to “nobody knows Ewsali yet”: they do not need to. They see a problem, a sticker that says they can reach the owner, and they scan.",
        ],
      },
      {
        id: "system",
        label: "System",
        heading: "Anonymous scan cannot mean unlimited access.",
        copy: [
          "Public QR codes invite abuse: photos of stickers, repeated scans, bots, identifier guessing. Constraints I designed around include roughly two notifications per device per vehicle per day, owner block/report, predefined reasons instead of free-form spam, and CAPTCHA (Cloudflare Turnstile). Legitimate scanners stay frictionless; automated or repeated abuse should not.",
          "Alerts have to land fast. I integrated SMS (Egyptian number formatting, sender-name limits — the brand often cannot appear as the sender, so the body has to say Ewsali) and WhatsApp Cloud API (templates, languages, dynamic params, Meta error handling). Delivery reliability, cost, and trust are product problems, not just API wiring.",
          "The stack is Next.js, Supabase (data + auth), Vercel, Hostinger DNS, Resend (noreply@ewsali.com, SPF/DKIM). Bulk sticker production is software: unique IDs → QR SVGs → template composite → print-ready art. Lifecycle: record → identifier → QR → artwork → print → purchase → activate → live on the network.",
        ],
      },
      {
        id: "gtm",
        label: "Business",
        heading: "A category people do not already search for.",
        copy: [
          "“QR sticker for your car — 329 EGP” does not sell itself. A blocking-car demo in a parking lot does. Early GTM is offline-first: street sales in mall lots, New Cairo, Maadi, Katameya, Mokattam — show the sticker, scan it, close in under a minute. Commission ~20% weekly rather than a heavy fixed payroll. I modeled approaches per hour, conversion, and ambitious targets (e.g. 10k customers in six months) to reason about the operation, not as a promise.",
          "Pricing evolved from ~199 EGP/year into Standard 229 / Premium 329 / Elite 599, with unit economics attached: SMS ~0.30 EGP, WhatsApp ~0.18 EGP, worst-case annual comms ~18–42 EGP depending on plan, sticker ~7.5 EGP, A5 card ~18 EGP. Digital margins look fat until production, commission, and ops are honest.",
          "The objection “why not just put my number on the glass?” is the product. A windshield number is permanent, photographable, and reusable. Ewsali is reachability without exposure — a private relay / الوسيط الآمن. Copy stayed simple on purpose: your number stays hidden; someone can still reach you when something is wrong.",
        ],
      },
    ],
    built: [
      "End-to-end product: concept, naming (Ewsali / اوصلي), logo (“The Bridge”), orange/black/white identity, sticker and packaging, owner vs scanner journeys.",
      "Website and backend on Next.js + Supabase + Vercel; DNS/email (Hostinger, Resend); unique QR + bulk sticker artwork automation.",
      "Notification layer: SMS provider tests and WhatsApp Cloud API templates, with sender-identity and cost treated as product constraints.",
      "Abuse and privacy rules for anonymous scanners: rate limits, report/block, short notes, CAPTCHA — not a stranger chat app.",
      "Pricing, unit economics, commission sales model, scripts/objection handling, and mockups in real Cairo windshield and street contexts.",
    ],
    hardPart:
      "The interesting constraint is two-sided trust with almost no onboarding for the scanner: the owner’s number must stay hidden, alerts must actually arrive in time-sensitive situations, and a public QR cannot become an unlimited anonymous firehose. Distribution is the other hard part — selling a behavior people do not already have a name for.",
    result:
      "A physical/digital product system: unique QR stickers, a private communication relay, notification infrastructure, and a go-to-market plan aimed at Egyptian drivers. Cars first; the longer bet is a private connection layer for things people own. Scan it. Reach the right person. Keep their information private.",
    links: [
      {
        label: "ewsali.com",
        href: "https://ewsali.com",
      },
      {
        label: "Instagram · @ewsaliegypt",
        href: "https://www.instagram.com/ewsaliegypt/",
      },
    ],
    media: {
      cover: EwsaliCover,
      cardImage: EwsaliLogo,
      shots: [
        {
          src: EwsaliStickers,
          alt: "Sheets of unique Ewsali QR stickers with scan-to-contact copy",
          caption: "Physical stickers — unique codes, hidden numbers",
        },
        {
          src: EwsaliPostBlocking,
          alt: "Ewsali campaign: car blocking you — scan the QR on the window",
          caption: "حد قافل عليك؟ Scan instead of honking.",
        },
        {
          src: EwsaliPostLights,
          alt: "Ewsali campaign: headlights left on — scan to alert the owner",
          caption: "نسيت النور مفتوح؟ One scan before the battery dies.",
        },
      ],
    },
  },
  {
    slug: "maazim",
    name: "Maazim",
    nameAr: "معازيم",
    tag: "Digital invitations",
    accent: "red",
    oneLiner:
      "A digital wedding invitation and guest-management platform — one link instead of a Canva JPEG, a WhatsApp thread, and a spreadsheet.",
    status: "Live · celebratewithus.today",
    role: "Founder / product builder",
    timeframe: "Concept → deployed product",
    stack: [
      "Next.js",
      "Vercel",
      "Hostinger / DNS",
      "Google Search Console",
      "Mobile-first web",
      "RSVP / guest data",
    ],
    brief: [
      "Wedding invitations are still stuck in two bad defaults: expensive printed cards that go stale the moment they leave the printer, or a pretty image dumped into WhatsApp with no RSVP, no map, and no way to update anything. Maazim (معازيم) turns the invitation into a small interactive website with its own shareable URL — celebratewithus.today/[their-wedding] — instead of wedding-invitation.jpg. The product launched on that domain; the brand is the Arabic idea of guests.",
      "The guest taps a link on their phone and gets a mobile-first experience: names, date, venue, photos, dress code, countdown, maps, RSVP. No app download. No account. The couple gets a dashboard instead of reconstructing attendance from three family group chats.",
      "The job is not “make a nicer invitation image.” It is to replace Canva + Google Maps + Google Forms + Excel + WhatsApp with one product that looks like the wedding and actually manages the guests.",
    ],
    sections: [
      {
        id: "two-users",
        label: "Two users",
        heading: "Hosts build once. Guests never onboard.",
        copy: [
          "The paying customer is the couple (or planner). They create an event, pick a theme, add names, photos, venue, dress code, guest rules, preview, publish, share, then watch RSVPs. They should never think about domains, hosting, forms, or responsive layouts. Hide the website-building complexity; sell a wedding invitation.",
          "Almost everyone who actually uses the product is a guest. They receive a link on WhatsApp, Instagram, Messenger, or a QR card, tap it, and the invitation has to feel excellent on a phone immediately. Zero onboarding is a product decision: a guest interacts once. Forcing an app would be the wrong architecture for the behavior.",
        ],
      },
      {
        id: "rsvp",
        label: "RSVP",
        heading: "Structured replies instead of family-group archaeology.",
        copy: [
          "Traditional RSVP is chaos: some tell the bride, some the groom, some the parents, some bring a plus-one they never mentioned, some never reply. The platform centralizes attending / not attending, guest count, optional messages, and event-specific questions into data the couple can filter, search, and export.",
          "That is how an invitation builder becomes guest management: total invited, confirmed, declined, pending — useful when the venue and caterer start asking for numbers. A later version can personalize links per guest (“Welcome, Ahmed”) with plus-one caps and per-event invitations instead of one generic URL.",
        ],
      },
      {
        id: "design",
        label: "Experience",
        heading: "Emotional software, not a form builder in a tuxedo.",
        copy: [
          "Couples do not only ask “does it work?” They ask “does this feel like us?” Themes have to cover luxury editorial, simple modern, floral, beige, black and white, cinematic photography — same event data, different visual systems. Architecture: consistent RSVP and maps underneath, variable presentation on top. That is a design-system problem most SaaS never has.",
          "Photography is the product, not decoration. Engagement and wedding photos become hero, gallery, and atmosphere — with readable type over images, honest ratios, and performance so a photo-heavy page still loads on a mobile network. Dress code, Open Location, Add to Calendar, and a live countdown exist because those are the questions guests already ask. Arabic, English, and mixed-language weddings (including RTL) are a market requirement, not a localization afterthought.",
        ],
      },
      {
        id: "growth",
        label: "Business",
        heading: "The invitation is also the distribution channel.",
        copy: [
          "One couple shares with 100–500 guests. Every guest experiences the product. A quiet “Created with Maazim” is classic product-led growth: visible enough to discover, quiet enough not to cheapen a wedding. Domain, Vercel, Hostinger DNS, and Search Console were treated as product work — couples already search for digital wedding invitations in Egypt.",
          "Acquisition is visual and partnership-shaped: Instagram, Pinterest, planners, photographers, venues — people who already sit between the couple and the wedding. Monetization can be one-time per event, packaged tiers, or B2B for planners. Maazim is the local, memorable name for a product that can grow past weddings into engagements, birthdays, outings, and any celebration where you are inviting guests.",
        ],
      },
    ],
    built: [
      "Product concept through host and guest journeys: create → theme → photos → details → publish → share → manage RSVPs, with guests on a zero-friction public web page.",
      "Custom domain celebratewithus.today on Hostinger, wired to Vercel (apex + www), plus Google Search Console via DNS TXT for search visibility.",
      "Invitation as an information hub: story, schedule, dress code, maps/navigation, countdown, calendar add, WhatsApp-first sharing, QR as a physical/digital bridge.",
      "RSVP and guest-management direction: structured attendance instead of WhatsApp archaeology, with a path to lists, filters, export, and personalized guest links.",
      "Theme and localization thinking: variable visual systems on shared event data; Arabic/English/mixed invitations; luxury editorial direction rather than generic template-site aesthetics.",
      "Go-to-market and brand: wedding SEO terms, planner/photographer/venue partnerships, and Maazim / معازيم as the consumer name beyond a long English domain.",
    ],
    hardPart:
      "Two completely different users share one URL. The host needs a simple builder. The guest needs a premium, mobile-first emotional experience with no signup. Themes must look wildly different while RSVP, maps, and data stay the same. And the product has to beat Canva-plus-WhatsApp on both beauty and usefulness, or there is no reason to pay.",
    result:
      "A live digital invitation platform (celebratewithus.today, branded Maazim): couples get a personalized wedding website and a way to collect RSVPs; guests get one link that answers where, when, what to wear, and whether they are coming. The larger bet is a digital layer around the whole invitation — for weddings first, then any celebration.",
    links: [
      {
        label: "Maazim · celebratewithus.today",
        href: "https://celebratewithus.today",
      },
    ],
    media: {
      cover: MaazimCover,
      cardImage: MaazimLogo,
      shots: [
        {
          src: MaazimInvitePhone,
          alt: "Phone mockup of a Maazim engagement invitation for Ahmed and Salma",
          caption: "Guest experience — one tap from WhatsApp",
        },
        {
          src: MaazimGuestDashboard,
          alt: "Host dashboard tracking confirmed, maybe, and declined RSVPs",
          caption: "Who’s coming — RSVPs as data, not group chats",
        },
        {
          src: MaazimFloralElegance,
          alt: "Floral Elegance theme: invitation, gallery, timeline, and dress code on phones",
          caption: "Floral Elegance theme",
        },
        {
          src: MaazimGoldenArabesque,
          alt: "Golden Arabesque theme: invitation, countdown, timeline, and story on phones",
          caption: "Golden Arabesque theme",
        },
      ],
    },
  },
  {
    slug: "arousa-bolaaq-eldakrour",
    name: "Arousa Bolaaq Eldakrour",
    nameAr: "عروسة بولاق الدكرور",
    tag: "Automated kitchen",
    accent: "blue",
    oneLiner:
      "A fully automated cooking machine that prepares complete meals — heat, ingredients, liquids, stirring, and timing — then lets you start dinner from a phone.",
    status: "First place · Microprocessor II competition",
    role: "Mechanical design / system integration",
    timeframe: "University · 21-person team",
    stack: [
      "Embedded systems",
      "Microprocessors",
      "Mechanical design",
      "Power electronics",
      "Motors & actuators",
      "Automation",
      "IoT / web control",
    ],
    brief: [
      "Arousa Bolaaq Eldakrour was our Microprocessor II project: a 21-person multidisciplinary team building a machine that could cook full meals with almost no standing-over-the-stove. It won first place in the course competition (tied with Micro Menu), judged on a working system — not a slide deck.",
      "The user picks a recipe. The machine runs a predefined sequence: stove heat, dry ingredients from separate compartments, liquids from four tanks (water, milk, oil, cream), stirring, waits, and finish. Six meals were programmed: Chicken Masala, Crispy Potato, Chicken Pasta, Vegetable Soup, Mac & Cheese, and Sweet Rice Pudding.",
      "The point was not a gadget demo. Cooking fails when timing, quantity, or order is wrong. Encoding each recipe as a controlled sequence of physical actions made the process repeatable — closer to an industrial workflow than to “someone remembers to stir.”",
    ],
    sections: [
      {
        id: "machine",
        label: "Machine",
        heading: "A recipe is a sequence of actuators.",
        copy: [
          "Once a meal is selected, the stove starts heating and ingredients hit the pan in the order and timing that recipe demands. Dry goods sit in separate compartments and drop at the right stage. Liquids come from four independent containers; the system decides which fluid and how much.",
          "A typical run looks like: heat → add ingredient → wait → add liquid → stir → keep heating → next ingredient → finish. That is the whole product: turning a cookbook into timed hardware events instead of a human hovering over the pan.",
        ],
      },
      {
        id: "mechanics",
        label: "Mechanics",
        heading: "Software only cooks if the hardware actually drops the rice.",
        copy: [
          "The unglamorous problem was storage and release: hold different ingredients, dump them into the pan at the right instant, stir while cooking, and keep the frame stable with stove, motors, tanks, and dispensers all mounted on it.",
          "I was on the mechanical design team — the group that had to turn an electronic prototype into a physical machine that could prepare food. Dispensing, stirring, layout, and how motors met the structure were not optional extras; the microprocessor could only trigger what the mechanics could repeatably do.",
        ],
      },
      {
        id: "control",
        label: "Control",
        heading: "Too early, too late, or too much ruins the meal.",
        copy: [
          "Cooking is timing, sequence, and heat. The microprocessor coordinates heating, motors, dry dispensing, liquid dispensing, stirring, clocks, and meal selection. A failure in one subsystem aborts the recipe.",
          "Each piece is simple in isolation — spin a motor, fire a heater, open a dispenser, run a timer. The engineering was making them fire in order, on time, every time: heat, wait, oil, ingredient, stir, wait, next ingredient, water, keep stirring, hold duration.",
        ],
      },
      {
        id: "remote",
        label: "Remote",
        heading: "Load it in the morning. Start dinner from campus.",
        copy: [
          "A web server sat on the machine so phones, tablets, and laptops could select a meal and start the sequence. The intended loop: load ingredients before leaving, connect later, start the recipe, arrive to food already cooking or done.",
          "That pushed a traditional embedded assignment into an early IoT / smart-home shape: the physical sequence still had to be trustworthy, but the trigger did not have to be standing next to the stove.",
        ],
      },
      {
        id: "team",
        label: "Team",
        heading: "Twenty-one people, one pan.",
        copy: [
          "Power owned electrical delivery for heaters, motors, and control circuitry. Mechanical owned the physical machine. Software owned recipe sequences and hardware timing. A web team owned remote start. None of those could be designed in a vacuum: software needed to know how dispensers actually moved; mechanics needed to know which actuators electronics would drive; power needed real loads.",
          "Shared interfaces and cross-discipline communication were the project as much as any single mechanism. First place in the Microprocessor II competition came from demonstrating that integration live.",
        ],
      },
    ],
    built: [
      "Physical machine architecture: ingredient storage and drop, four liquid tanks, stirring, stove integration, and a structure that stayed stable under motors and heat.",
      "Mechanical design work so software-triggered actions became real cooking operations — layout, dispensing mechanisms, and how actuators coupled to the frame.",
      "Recipe-as-sequence model for six meals, coordinating heat, dry/liquid dispense, stir, and waits as one pipeline.",
      "Remote web control to select a meal and start cooking from a phone, tablet, or laptop after ingredients were pre-loaded.",
      "Cross-team integration with power, embedded software, and web — because a cooking sequence only exists if every subsystem fires on the same clock.",
    ],
    hardPart:
      "Any one actuator is easy. The product is a cyber-physical loop: mechanical reliability, power delivery, software timing, and hardware control have to succeed together. The meal is the test. A jammed dispenser or a mistimed pump is not a log line — it is dinner.",
    result:
      "A working automated kitchen that could prepare six recipes with microprocessor control of heat, dry and liquid dispensing, stirring, and timing, plus remote start over a web interface. First place in the Microprocessor II course competition, tied with Micro Menu. For the portfolio it is the hardware counterpart to the software products: instructions that move metal, not pixels.",
    video: {
      href: "https://www.facebook.com/yousef.gilany/posts/pfbid0g3XZB7xxUQSoP7bzmJwALntzQcHmtuHjNizpjZxCtibQpJtuTAoEzMx11piGv6Kcl",
      label: "Watch the project video",
    },
    links: [
      {
        label: "Project video on Facebook",
        href: "https://www.facebook.com/yousef.gilany/posts/pfbid0g3XZB7xxUQSoP7bzmJwALntzQcHmtuHjNizpjZxCtibQpJtuTAoEzMx11piGv6Kcl",
      },
    ],
    media: {
      cover: ArosaCover,
      cardImage: ArosaLogo,
      shots: [
        {
          src: ArosaInterior,
          alt: "Interior of the automated kitchen: pot, dispensers, stirring paddle, and LED-lit wooden frame",
          caption: "The cooking chamber — pot, dispensers, stir",
        },
        {
          src: ArosaMachineSide,
          alt: "Side view of the wooden machine with water tanks, hot plate, and team poster",
          caption: "Open frame — tanks, stove, mechanism",
        },
        {
          src: ArosaTeamCampus,
          alt: "The team posed with Arousa Bolaaq Eldakrour on the Faculty of Engineering plaza",
          caption: "The team, first-place machine",
        },
        {
          src: ArosaTeamWide,
          alt: "Team portrait around the decorated automated kitchen cart",
          caption: "Microprocessor II · class of 2022",
        },
      ],
    },
  },
];

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);

export const getAdjacentProjects = (slug) => {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
};
