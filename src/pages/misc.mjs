import {
  button,
  consultationCta,
  contact,
  htmlDocument,
  pageHero,
  sectionHeading,
  services,
} from "../components.mjs";

const pricingDetails = [
  {
    title: "No Long-Term Contract — Only Pay for What You Use",
    text: "Due to the intentional structure of our agreements and pay schedule, clients only pay for services rendered. Home Watch visits and other services can be put on hold and recommenced at any time per client discretion with proper written notice. This allows for client savings when the property is occupied.",
  },
  {
    title: "À La Carte, Custom, Concierge, Emergency & Off-Cycle Services",
    text: "Most Supplementary and Personalized services can be provided at the time of a scheduled Home Watch visit or at a separate off-cycle time. Some select services may be eligible for flat-rate billing; other offerings are assessed at rates based on time incurred. Rates may vary depending on time of day, circumstances, frequency, distance, and other factors. We use best efforts to coordinate vendors, contractors, and deliveries with a Home Watch visit, but conflicting schedules sometimes occur.",
  },
  {
    title: "Other Customized Pricing",
    text: "Depending on the scope and nature of the need, select services such as renovation management and oversight may be eligible for a flat-rate or project-based charge rather than an hourly rate. Estate Management and assistance with Vacation Rentals require a full consultation and are subject to custom pricing and mutual agreement by all parties.",
  },
  {
    title: "Vehicle Services Pricing",
    text: "With the exception of vehicle drives, which are typically a flat-rate service, most other vehicle-related services are assessed at rates based on time incurred. Please contact us for additional information, a consultation, or pricing.",
  },
];

export function pricingPage() {
  const body = `
    ${pageHero({
      eyebrow: "Service Plans",
      title: "Options, Frequency & Pricing",
      intro: "No long-term contracts. Only pay for what you use.",
      image: "/assets/images/generated/scottsdale-estate-entry.webp",
      alt: "Generated concept image of a refined Scottsdale estate entrance",
    })}
    <section class="pricing-intro">
      <div class="wrap pricing-intro__grid">
        <div data-reveal><span class="eyebrow">Flexible Frequency Options</span><h2>Every home and client is unique.</h2></div>
        <div class="prose" data-reveal>
          <p>We understand that every home and client is unique as it relates to size, needs, frequency, and complexity. We intentionally structured our agreements and pay schedule so clients pay only for services needed and utilized, with control and flexibility over the frequency of visits.</p>
          <p>Home Watch visits and other services can be put on hold and recommenced at any time per client discretion with written notice. This allows for client savings when the property is occupied. A Customized Service Plan is prepared for each client and tailored to their needs in terms of services offered and frequency of Home Watch visits.</p>
          <ul class="frequency-list"><li><strong>Daily schedules</strong><span>2–5 visits per week</span></li><li><strong>Weekly schedules</strong><span>Weekly, tri-monthly, or bi-monthly</span></li><li><strong>Other frequency options</strong><span>Available upon request</span></li></ul>
        </div>
      </div>
    </section>
    <section class="plan-options">
      <div class="wrap plan-options__grid">
        <div class="plan-options__visual" data-reveal><span class="eyebrow eyebrow--light">Service Plan Options</span><h2>À La Carte.<br />Custom.<br />Concierge.<br />Emergency.</h2></div>
        <div class="prose" data-reveal>
          <p class="lead">Customizable services and plans are available for a variety of needs. Offerings can be provided during a scheduled Home Watch visit or at a separate off-cycle time.</p>
          <p>Examples include shopping, errands, appointment services, flower and gift delivery, appointment-waiting and key-holder services for cable installers, contractors, and furniture or freight deliveries; property-related upkeep; new flower planting; delivery acceptance; package, dry-cleaning, and prescription pick-up; and vehicle services.</p>
          <p>Regardless of the need, we will help find the solution. We assist our clients with a variety of requests and are willing to help as long as the request is not Illegal, Immoral, or Unethical.</p>
        </div>
      </div>
    </section>
    <section class="pricing-policy">
      <div class="wrap">
        ${sectionHeading({ eyebrow: "Pricing", title: "Subject to a complimentary personal consultation.", intro: "Each client and residence is unique in size, needs, frequency, and complexity. Please inquire directly and we will be delighted to discuss your needs and create a plan to meet them." })}
        <div class="pricing-policy__process" data-reveal>
          <p>Before engaging in a relationship, the Principals of The Home Watch Agency personally meet with prospective clients or representatives to tour the property and conduct a personal consultation and interview. This helps ensure a thorough understanding of the client’s needs, preferences, and expectations for home watch, vehicle management, and other personalized services.</p>
          <p>A Customized Care Plan unique to the property is subsequently assembled to memorialize the specific needs and help ensure execution in line with client expectations. We are happy to make alternative consultation accommodations for clients with health, scheduling, or privacy concerns.</p>
        </div>
        <div class="pricing-policy__list">${pricingDetails.map((item, index) => `<article data-reveal><span>${String(index + 1).padStart(2, "0")}</span><div><h3>${item.title}</h3><p>${item.text}</p></div></article>`).join("")}</div>
      </div>
    </section>
    ${consultationCta()}
  `;
  return htmlDocument({
    title: "Service Plans & Pricing — The Home Watch Agency",
    description: "Flexible Home Watch frequency options, customized service plans, no long-term contracts, and consultation-based pricing from The Home Watch Agency.",
    path: "/pricing/",
    body,
    overlayHeader: true,
    preloadImage: "/assets/images/generated/scottsdale-estate-entry.webp",
  });
}

export function contactPage() {
  const body = `
    ${pageHero({
      eyebrow: "Schedule Your Consultation",
      title: "Contact Us",
      intro: "Regardless of the need, we will help find the solution.",
      image: "/assets/images/generated/arizona-luxury-estate-hero.webp",
      alt: "Generated concept image of a contemporary Arizona desert estate at blue hour",
      compact: true,
    })}
    <section class="contact-section">
      <div class="wrap contact-section__grid">
        <div class="contact-section__details" data-reveal>
          <span class="eyebrow">Contact Information</span>
          <h2>A private conversation begins here.</h2>
          <p>We have been working with exclusive clients for 25+ years and understand your unique needs. We built our agency upon the values most important to you: discretion, privacy, respect, accountability, communication, and above all, trust.</p>
          <address>
            <strong>The Home Watch Agency</strong><br />
            ${contact.city}<br /><br />
            Principal Contact: Christine<br />
            <a href="${contact.phoneHref}">${contact.phoneDisplay}</a><br />
            <a href="${contact.emailHref}">${contact.email}</a>
          </address>
          <p class="contact-section__note">This redesign demo does not connect to the production WordPress/reCAPTCHA submission endpoint. Submitting the form opens your email application with the message addressed to the existing agency email.</p>
        </div>
        <form class="contact-form" action="${contact.emailHref}" method="post" enctype="text/plain" data-contact-form data-reveal>
          <div class="form-field"><label for="name">Name <span aria-hidden="true">*</span></label><input id="name" name="name" type="text" autocomplete="name" required /></div>
          <div class="form-field"><label for="email">Email <span aria-hidden="true">*</span></label><input id="email" name="email" type="email" autocomplete="email" required /></div>
          <div class="form-field"><label for="phone">Phone <span aria-hidden="true">*</span></label><input id="phone" name="phone" type="tel" autocomplete="tel" required /></div>
          <div class="form-field form-field--message"><label for="message">How may we assist? <span aria-hidden="true">*</span></label><textarea id="message" name="message" maxlength="350" rows="7" required aria-describedby="message-count"></textarea><span class="character-count" id="message-count" aria-live="polite"><b data-character-count>0</b> of 350</span></div>
          <button class="button button--fill" type="submit">Send Message<svg aria-hidden="true" viewBox="0 0 20 20"><path d="M3 10h13M11 5l5 5-5 5"/></svg></button>
          <p class="form-required">* Required fields</p>
          <p class="form-status" role="status" hidden data-form-status></p>
        </form>
      </div>
    </section>
  `;
  return htmlDocument({
    title: "Contact & Schedule a Consultation — The Home Watch Agency",
    description: "Contact The Home Watch Agency in Scottsdale at 480-487-0029 or Assist@TheHomeWatchAgency.com to schedule a personal consultation.",
    path: "/contact/",
    body,
    overlayHeader: true,
    preloadImage: "/assets/images/generated/arizona-luxury-estate-hero.webp",
  });
}

export function clientOffersPage() {
  const cards = services.map((service, index) => {
    const routes = ["basic-pr", "personalized-pr", "vehicle-pr", "concierge-pr"];
    return `<article class="presentation-card" data-reveal><span>${service.number}</span><img src="${service.image}" width="640" height="440" alt="${service.alt}" loading="lazy" /><div><h2>${service.title}</h2><p>${service.text}</p><div class="presentation-card__actions">${button("Service Details", service.href, "outline")}${button("Private Presentation", `/client-services-offers/${routes[index]}/`, "line")}</div></div></article>`;
  }).join("");
  const body = `
    ${pageHero({
      eyebrow: "Client Service Offers",
      title: "Our Services",
      intro: "A proactive approach can eliminate the need for costly and untimely repairs in the future.",
      image: "/assets/images/generated/fountain-hills-estate-overlook.webp",
      alt: "Generated concept image of a serene Fountain Hills estate overlooking the desert",
    })}
    <section class="presentation-index"><div class="wrap">
      ${sectionHeading({ eyebrow: "Service Details & Presentations", title: "A complete view of our client offering.", intro: "The presentation routes remain private and continue to require access through the current production website." })}
      <div class="presentation-index__grid">${cards}</div>
      <div class="presentation-faq" data-reveal><h2>Frequently Asked Questions Presentation</h2><p>Access the existing private FAQ presentation route or view the full public FAQ page.</p><div>${button("Public FAQs", "/faqs/", "outline")}${button("Private Presentation", "/faq-pr/", "line")}</div></div>
    </div></section>
    ${consultationCta()}
  `;
  return htmlDocument({
    title: "Client Services Offers — The Home Watch Agency",
    description: "Explore service details and private client presentation access for The Home Watch Agency's home, estate, vehicle, and concierge services.",
    path: "/client-services-offers/",
    body,
    overlayHeader: true,
    preloadImage: "/assets/images/generated/fountain-hills-estate-overlook.webp",
  });
}

export function presentationPage({ path, title, servicePath }) {
  const productionUrl = `https://thehomewatchagency.com${path}`;
  const body = `
    <section class="private-gate">
      <img src="/assets/images/generated/arizona-luxury-estate-sunset.webp" width="1448" height="1086" alt="" />
      <div class="private-gate__veil"></div>
      <div class="private-gate__card">
        <span class="eyebrow eyebrow--light">Private Client Access</span>
        <h1>${title}</h1>
        <p>This presentation is password-protected on the current The Home Watch Agency website. Entering a password below opens the secure production access flow in a new tab; no protected material is stored in this demo.</p>
        <form action="https://thehomewatchagency.com/wp-login.php?action=postpass" method="post" target="_blank" class="private-gate__form">
          <input type="hidden" name="_wp_http_referer" value="${productionUrl}" />
          <label for="post-password">Presentation password</label>
          <div><input id="post-password" name="post_password" type="password" autocomplete="current-password" required /><button type="submit">Continue<span class="sr-only"> to secure production site</span></button></div>
        </form>
        <div class="private-gate__links"><a href="${servicePath}">View public service details</a><a href="/contact/">Request access</a></div>
      </div>
    </section>
  `;
  return htmlDocument({
    title: `${title} — Private Access | The Home Watch Agency`,
    description: `Private access gateway for the ${title} from The Home Watch Agency.`,
    path,
    body,
    overlayHeader: true,
    noindex: true,
  });
}

export function blogPage() {
  const body = `
    ${pageHero({
      eyebrow: "From the Agency",
      title: "Blog",
      intro: "The current public site does not list published articles at this time.",
      image: "/assets/images/generated/fountain-hills-luxury-estate.webp",
      alt: "Generated concept image of the Sonoran Desert beyond a Fountain Hills estate pool",
      compact: true,
    })}
    <section class="empty-editorial"><div class="wrap" data-reveal><span class="eyebrow">Home Watch Notes</span><h2>Thoughtful guidance,<br /><em>arriving soon.</em></h2><p>This route is preserved for future content. No articles or claims have been invented for the redesign demo.</p>${button("Explore Frequently Asked Questions", "/faqs/", "outline")}</div></section>
    ${consultationCta()}
  `;
  return htmlDocument({
    title: "Blog — The Home Watch Agency",
    description: "The Home Watch Agency blog route, preserved for future home watch, estate care, vehicle, and concierge guidance.",
    path: "/blog/",
    body,
    overlayHeader: true,
    preloadImage: "/assets/images/generated/fountain-hills-luxury-estate.webp",
  });
}

export function arrivingSoonPage() {
  const body = `<section class="private-gate private-gate--light"><img src="/assets/images/generated/paradise-valley-estate-arrival.webp" width="1448" height="1086" alt="Generated concept image of a contemporary Paradise Valley estate arrival" /><div class="private-gate__veil"></div><div class="private-gate__card"><span class="eyebrow eyebrow--light">The Home Watch Agency</span><h1>Arriving Soon</h1><p>This existing route is preserved. Continue to the redesigned homepage or schedule a consultation directly.</p><div class="private-gate__links"><a href="/">Return Home</a><a href="/contact/">Schedule a Consultation</a></div></div></section>`;
  return htmlDocument({
    title: "Arriving Soon — The Home Watch Agency",
    description: "Arriving soon at The Home Watch Agency.",
    path: "/arriving-soon/",
    body,
    overlayHeader: true,
    noindex: true,
  });
}
