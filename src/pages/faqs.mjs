import { button, consultationCta, htmlDocument, pageHero, sectionHeading } from "../components.mjs";

const concerns = [
  "Is the house okay?",
  "Did the storm cause any damage or flooding?",
  "Did we close all the windows, adjust the A/C, set the alarm, and take out the garbage when we left town?",
  "The A/C is having issues and we need someone to meet the contractor at the house.",
  "An important package or furniture will be delivered while we are out of town.",
  "We need someone to manage or check up on the home renovation project in Arizona.",
  "Is our landscaper or pool service showing up and doing a thorough job?",
  "We should have someone cover the plants for the upcoming frost.",
  "We accidentally left something important at our Arizona home.",
  "We are working remotely with a designer and need the color code from a paint can in the home.",
];

const faqs = [
  {
    question: "What is a home watch service?",
    answer: [
      "A home watch service consists of a regularly scheduled visit to an unoccupied property to conduct an assessment of both the interior and exterior. Our primary emphasis is ensuring that your residence is secure and that there are no obvious issues with water leaks, plumbing, electrical, air conditioning and heating, microbial growth, rodent or insect infestations, rain or storm damage, vandalism, or other concerns.",
      "A Home Watch Professional has formal training in this field and utilizes a detailed checklist in an effort to locate concerns that could result in damage to your home if left undetected. It is the difference between having someone with good intentions but no training and having a professional inspection. The Home Watch Agency will go above and beyond to ensure that your property receives comprehensive attention with a swift response to issues that may arise.",
    ],
  },
  {
    question: "How is The Home Watch Agency different from having a friend or neighbor check on my property?",
    answer: [
      "Although neighbors and friends are well intentioned and may offer to pick up mail, move trash bins, or take a quick walk around your home, they may not have the seasoned eye or proper tools to identify potential issues before they become costly problems. The Home Watch Agency utilizes an extensive checklist and an experienced eye.",
      "Friends and neighbors also have other priorities, whereas we are focused on monitoring and maintaining one of your most significant assets. The Home Watch Agency is available for emergencies and non-routine visits as well as regular assessment visits.",
      "Having a neighbor or friend watch your home can also create strain on a personal relationship, especially if an issue arises. Privacy can be another precluding factor for clients who require a higher level of discretion relative to their assets and affairs. Some clients simply don’t want neighbors or friends to have that level of access or knowledge.",
    ],
  },
  {
    question: "Why is it important to routinely inspect an unoccupied property, and how often should my home be monitored?",
    answer: [
      "An unoccupied home is a vulnerable home. If an issue arises while the property is unoccupied, a minor issue that goes undetected could evolve into a major and costly problem. Routinely monitoring a property helps mitigate this risk.",
      "How often your property is visited is ultimately based on your comfort level, though in some cases it may also be affected by insurance requirements. One visit per week is usually an appropriate option to identify and address issues early. In some cases, two or three visits per month may work based on a client’s situation.",
      "Many homeowners are unaware that an insurance carrier may require someone to visit or survey an unoccupied home on a prescribed basis. If this requirement is not met, the carrier may have the ability to deny a claim. It is prudent to contact your insurance provider before making a final decision on visit frequency.",
    ],
  },
  {
    question: "Who conducts the home watch visits at my home?",
    answer: [
      "We are an intentionally small firm with a limited client base. This allows us to provide a comprehensive experience and ensures that each client has direct access and communication with our Principals.",
      "Visits are performed primarily by the Principals of The Home Watch Agency—individuals with whom you will already have a personal relationship. On the rare occasions when we are not available, services will be performed by a highly qualified representative of The Home Watch Agency family, intimately known to us and with many years of experience.",
    ],
  },
  {
    question: "How can I verify that my home is being visited and monitored while I am away?",
    answer: [
      "The Home Watch Agency utilizes technology to track and comprehensively report our activities to clients. Our reporting system entails a GPS system that requires the inspector to be on-site at your property in order to access reporting software. The GPS restriction helps ensure someone is physically at your home in order to create the Home Watch report.",
      "For more detail, see the GPS-Enabled Client Reporting section on our Benefits page.",
    ],
    link: ["View GPS-Enabled Reporting", "/benefits/#gps"],
  },
  {
    question: "How do you communicate with clients? What if there is a problem?",
    answer: [
      "We want each client to feel that they receive our undivided attention with direct interaction with our Principals. You can reach us by phone at any time.",
      "Visits can be accompanied by a digital report that includes photos and details regarding issues found. Although reports are typically shared digitally, we are happy to discuss specific concerns directly.",
      "If immediate action is necessary to prevent further damage, we will contact you to discuss what occurred and the appropriate next steps.",
    ],
  },
  {
    question: "Are you available 24/7?",
    answer: ["We make best efforts to be reasonably available for our clients when they need us, including emergencies."],
  },
  {
    question: "Do you only provide the services listed on your website?",
    answer: ["The services reflected on our website are the most commonly requested items. We are often able to accommodate other services requested by our clients. Many relationships go well beyond Basic Home Watch Services. If you have something in mind, ask us and we’ll do our best to find a solution."],
    link: ["Explore Available Services", "/services/"],
  },
  {
    question: "What is the cost for home watch services?",
    answer: [
      "Each client and residence has unique service needs based on size, nature, location, and complexity. In order to provide an accurate assessment of what level of service is most appropriate, an in-person visit to the property is usually necessary.",
      "Fees are typically provided after examining the property and assessing what specific needs may exist. Basic properties, such as a small condo, can start fairly low per visit. Depending on complexity, size, and needs, prices increase from there. You are only charged for the actual visits or services you utilize; there are no other recurring fees.",
      "When assessing cost, it is important to keep in mind the scope and expense of potential damage that could occur if an issue were to arise and go undetected for an extended period in an unoccupied home, as well as the time necessary to deal with and resolve those issues.",
    ],
    link: ["Review Pricing Policy", "/pricing/"],
  },
  {
    question: "Can services be put on hold? Do I pay when my property is occupied?",
    answer: ["Services can be put on hold at any time with proper notice; you are only charged for what you utilize since it is a per-visit fee. Each client has different needs and schedules, and may consequently utilize our services more or less frequently. Our model is designed to provide flexibility so you are charged when we are visiting your home or advocating on your behalf via personal and concierge services."],
  },
  {
    question: "What happens if I forget to say I am in town and you arrive for an inspection?",
    answer: ["We make every effort to avoid these situations. We rely on our clients to keep us informed with proper notice that the home is occupied by themselves, guests, or others in order to avoid the fee for service. Although we prefer as much notice as possible, informing us two days ahead of time is often sufficient."],
  },
  {
    question: "Do you provide regular reconciliation, and how are payments made?",
    answer: ["Regular reconciliation and invoicing is prepared and sent to clients for all services rendered. Certain custom and concierge services, as well as big-ticket services or repairs, may require client prepayment. We offer various payment options which can be discussed during your consultation."],
  },
  {
    question: "Can you recommend or manage vendors for repairs, renovations, or personal needs?",
    answer: ["It is our goal to be your local, single point-of-contact solution providing an all-inclusive set of offerings. We have existing relationships and an extensive list of vendors to meet almost any need."],
  },
  {
    question: "Is The Home Watch Agency experienced and insured?",
    answer: ["We are a professional and experienced firm. The Home Watch Agency is fully insured and bonded with national accreditation and recurring professional training. We have over 25 years of experience working with exclusive and discreet HNW clients."],
    link: ["Learn More About the Agency", "/about/"],
  },
  {
    question: "Is The Home Watch Agency a security company?",
    answer: ["We are not a security company and do not take the place of one. Our regular visits help deter unwanted visitors and identify signs of a break-in or vandalism. We also offer enhancements to our Basic Home Watch service that further mitigate the signs of an unoccupied property and enhance the appearance of occupancy."],
    link: ["View Supplementary Services", "/services/personalized/"],
  },
  {
    question: "Can you inspect my home after a major storm or severe weather?",
    answer: ["In Arizona, especially during the summer, wind and rain from severe storms can cause extensive damage. As part of our offering, your home can be inspected after severe storms unless otherwise requested. This is an abbreviated visit to confirm that there are no major leaks or property damage. If a full, non-routine home watch visit is requested after a storm, we will do our best to accommodate."],
  },
  {
    question: "In what areas of Arizona does The Home Watch Agency provide service?",
    answer: [
      "The Home Watch Agency provides services within the greater Phoenix metropolitan area, including Scottsdale, North Scottsdale, Paradise Valley, Biltmore, Arcadia, Fountain Hills, Phoenix, inter alia.",
      "Communities include Silver Leaf, Estancia, DC Ranch, Desert Highlands, Gainey Ranch, Ancala, McDowell Mountain Ranch, Windgate, Wildhorse Estates, Scottsdale Ranch, Scottsdale Country Club, McCormick Ranch, and a number of Paradise Valley enclaves and communities. We will also service other areas.",
    ],
    link: ["Explore Service Areas", "/about/#clients"],
  },
];

function faqItems() {
  return faqs.map((faq, index) => `<details class="faq-item"${index === 0 ? " open" : ""} data-reveal>
    <summary><span>${String(index + 1).padStart(2, "0")}</span><h3>${faq.question}</h3><i aria-hidden="true"></i></summary>
    <div class="faq-item__answer prose">${faq.answer.map((answer) => `<p>${answer}</p>`).join("")}${faq.link ? `<p><a class="text-link" href="${faq.link[1]}">${faq.link[0]}<svg aria-hidden="true" viewBox="0 0 20 20"><path d="M3 10h13M11 5l5 5-5 5"/></svg></a></p>` : ""}</div>
  </details>`).join("");
}

export function faqPage() {
  const body = `
    ${pageHero({
      eyebrow: "Answers & Guidance",
      title: "Frequently Asked Questions",
      intro: "Clear answers to the concerns seasonal and absentee homeowners most often bring to The Home Watch Agency.",
      image: "/assets/images/generated/scottsdale-estate-entry.webp",
      alt: "Generated concept image of a quiet Scottsdale estate entrance at sunset",
      align: "center",
    })}
    <section class="concerns-section">
      <div class="wrap concerns-section__grid">
        <div data-reveal><span class="eyebrow">Client Concerns / Requests</span><h2>The questions that follow you when you leave.</h2></div>
        <ul data-reveal>${concerns.map((concern) => `<li>${concern}</li>`).join("")}</ul>
      </div>
    </section>
    <section class="faq-section">
      <div class="wrap faq-section__grid">
        <div class="faq-section__intro">
          ${sectionHeading({ eyebrow: "Frequently Asked Questions", title: "What would you like to know?", intro: "Every answer remains in the page markup for accessibility and search visibility." })}
          <div class="faq-section__contact"><p>Have a question specific to your home?</p>${button("Contact Christine", "/contact/", "outline")}</div>
        </div>
        <div class="faq-list">${faqItems()}</div>
      </div>
    </section>
    ${consultationCta()}
  `;
  return htmlDocument({
    title: "Frequently Asked Questions — The Home Watch Agency",
    description: "Answers about home watch visits, reporting, frequency, service areas, pricing, insurance, emergencies, vendors, and property care.",
    path: "/faqs/",
    body,
    overlayHeader: true,
    preloadImage: "/assets/images/generated/scottsdale-estate-entry.webp",
  });
}
