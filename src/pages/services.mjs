import {
  button,
  consultationCta,
  detailGrid,
  htmlDocument,
  imageBreak,
  pageHero,
  sectionHeading,
  serviceIndex,
} from "../components.mjs";

const sharedServiceIntro = "Additional Home/Estate Management, Concierge, and Vehicle Maintenance/Management services can be added to Basic Home Watch upon client request on an À La Carte basis.";

function servicesNavigation() {
  return `<nav class="section-nav" aria-label="Service pages"><div class="wrap"><span>Explore:</span><a href="/services/basic/">Home Watch</a><a href="/services/personalized/">Estate Management</a><a href="/services/vehicle/">Vehicle Care</a><a href="/services/concierge/">Concierge</a><a href="/pricing/">Pricing</a></div></nav>`;
}

export function servicesPage() {
  const body = `
    ${pageHero({
      eyebrow: "Private Property Care",
      title: "Our Services",
      intro: "A proactive approach can eliminate the need for costly and untimely repairs in the future.",
      image: "/assets/images/generated/paradise-valley-estate-pool.webp",
      alt: "Generated concept image of a contemporary Paradise Valley estate and pool at sunset",
    })}
    ${servicesNavigation()}
    <section class="services-overview" id="overview">
      <div class="wrap">
        ${sectionHeading({
          eyebrow: "Service Overview",
          title: "Recurring, comprehensive, and personalized.",
          intro: "In-home monitoring, essential maintenance, coordination of service providers, concierge support, and vehicle management services that protect your property and provide peace of mind.",
        })}
        ${serviceIndex()}
      </div>
    </section>
    <section class="service-summary-band">
      <div class="wrap service-summary-band__grid">
        <div id="basic"><span>01</span><h3>Basic</h3><p>Recurring Home Watch Monitoring visits with comprehensive interior, exterior, and perimeter assessment.</p><a href="/services/basic/">View service</a></div>
        <div id="supplementary"><span>02</span><h3>Supplementary</h3><p>Personalized Home and Estate Management services provided À La Carte.</p><a href="/services/personalized/">View service</a></div>
        <div id="vehicle"><span>03</span><h3>Vehicle</h3><p>Maintenance, exercising, valet, shipping, transport assistance, and brokerage support.</p><a href="/services/vehicle/">View service</a></div>
        <div id="concierge"><span>04</span><h3>Concierge</h3><p>An agile suite of personal services extending beyond home, estate, and vehicle care.</p><a href="/services/concierge/">View service</a></div>
      </div>
    </section>
    ${consultationCta()}
  `;
  return htmlDocument({
    title: "Home Watch, Estate, Vehicle & Concierge Services — THWA",
    description: "Explore The Home Watch Agency's Basic Home Watch, estate management, vehicle care, and personalized concierge services in greater Phoenix.",
    path: "/services/",
    body,
    overlayHeader: true,
    preloadImage: "/assets/images/generated/paradise-valley-estate-pool.webp",
  });
}

function serviceDetailPage({ path, eyebrow, title, intro, image, alt, leadTitle, paragraphs, items, note = "", breakImage = "" }) {
  const body = `
    ${pageHero({ eyebrow, title, intro, image, alt })}
    ${servicesNavigation()}
    <section class="service-detail-intro">
      <div class="wrap service-detail-intro__grid">
        <div data-reveal><span class="eyebrow">The Service</span><h2>${leadTitle}</h2>${note ? `<blockquote>${note}</blockquote>` : ""}</div>
        <div class="prose" data-reveal>${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div>
      </div>
    </section>
    ${breakImage ? imageBreak(breakImage) : ""}
    <section class="service-detail-list"><div class="wrap">
      ${sectionHeading({ eyebrow: "Service Details", title: `${title} offerings`, intro: "Services are personalized to the needs of each residence and client. Other services not listed may be available upon request." })}
      ${detailGrid(items, { numbered: true })}
      <div class="center-cta" data-reveal>${button("Review Service Plan Options", "/pricing/", "outline")}</div>
    </div></section>
    <section class="related-services"><div class="wrap">
      ${sectionHeading({ eyebrow: "Available Services", title: "A complete relationship around your property.", intro: sharedServiceIntro })}
      ${serviceIndex({ compact: true })}
    </div></section>
    ${consultationCta()}
  `;
  return htmlDocument({
    title: `${title} — The Home Watch Agency`,
    description: intro.replace(/<[^>]+>/g, ""),
    path,
    body,
    overlayHeader: true,
    preloadImage: image,
  });
}

export function basicServicePage() {
  return serviceDetailPage({
    path: "/services/basic/",
    eyebrow: "Basic Home Watch",
    title: "Home Watch Monitoring Services",
    intro: "Our Home Watch Monitoring service can be the difference between minor damage and a major disaster.",
    image: "/assets/images/generated/private-estate-gated-entry.webp",
    alt: "Generated concept image of a secure gated Arizona estate arrival",
    leadTitle: "We act as your eyes & ears while you are away.",
    note: "Each client and residence is unique. A Customized Care Plan is assembled for the property, needs, complexity, and client preferences.",
    paragraphs: [
      "Our services provide seasonal and absentee homeowners with a variety of benefits, including the Peace of Mind that their homes are being appropriately monitored, allowing them to focus on other priorities.",
      "Benefits include pro-active identification of issues before they develop into significant problems or costly repairs; deterrence of unwanted visitors by giving your home the appearance of being occupied; and an extra layer of confirmation that your other service providers and vendors are performing obligations in accordance with your expectations.",
      "Our comprehensive services assist in the pro-active identification of potential issues that may arise while your property is unoccupied, providing comfort that your assets are regularly monitored and attended to.",
      "Each visit entails a detailed visual assessment of the interior, exterior, and perimeter of the property to help ensure that your residence and vehicles are secure and being appropriately monitored, maintained, exercised, and ready for your return. Each visit can be fully documented with details and photographs related to critical areas, components, and client preferences.",
    ],
    breakImage: {
      src: "/assets/images/generated/paradise-valley-estate-arrival.webp",
      alt: "Generated concept image of a carefully illuminated Paradise Valley estate arrival",
      position: "center",
    },
    items: [
      {
        title: "Interior Assessment",
        text: "A full assessment of the interior of the property for apparent signs of damage, water intrusion or leaks, microbial growth, forced entry, obvious maintenance and mechanical issues, and evidence of insect or rodent issues. This includes an assessment of appliances, alarms, cooling, heating, water, electrical and mechanical systems, doors, and windows to ensure proper functionality. Ask your Home Watch Agency representative for full detail.",
      },
      {
        title: "Exterior Assessment",
        text: "A full assessment of the exterior and applicable outdoor areas—including the yard, guest houses, ramadas, patios, pools and spas, water features, and outdoor furniture and décor—for apparent signs of damage, water intrusion, forced entry, maintenance and mechanical issues, or insect and rodent issues. Ask your Home Watch Agency representative for full detail.",
      },
      {
        title: "Systems & Service Verification",
        text: "Review of applicable appliances, cooling, heating, water, electrical and mechanical systems, and an additional layer of confirmation that scheduled service providers and vendors are performing obligations in accordance with your expectations.",
      },
      {
        title: "Before We Leave",
        text: "At the end of each visit, we return your residence into “away” / Home Watch Mode with an optional final report, including photos, sent for your review. Ask your Home Watch Agency representative for full detail.",
      },
    ],
  });
}

export function personalizedServicePage() {
  return serviceDetailPage({
    path: "/services/personalized/",
    eyebrow: "Supplementary · À La Carte",
    title: "Home / Estate Management Services",
    intro: "Personalized supplementary services and white-glove care that go beyond Basic Home Watch Monitoring.",
    image: "/assets/images/generated/arizona-estate-arrival-palms.webp",
    alt: "Generated concept image of a carefully maintained Arizona estate arrival",
    leadTitle: "White-glove service that goes beyond.",
    note: "We strive to assist our clients with almost any request as long as it is not Illegal, Immoral, or Unethical.",
    paragraphs: [
      "Maintaining a residence and all of the related relationships can often prove to be a time-consuming task for individuals with busy professional schedules, multiple homes or vehicles, or part-time residents.",
      "Although our Basic Home Watch Services adequately serve some clients, The Home Watch Agency also offers a nimble and comprehensive suite of additional Personalized Home/Estate Management services that go well beyond the needs of basic Home Watch Monitoring. These offerings provide owners with even greater convenience and the ability to focus on other priorities.",
      "The following are commonly requested services that can often be combined with a Home Watch visit or performed at separate off-cycle times as needed and requested.",
    ],
    breakImage: {
      src: "/assets/images/generated/scottsdale-estate-pool-sunset.webp",
      alt: "Generated concept image of a resort-like Scottsdale estate prepared for sunset",
      position: "center",
    },
    items: [
      { title: "Routine Maintenance Services", text: "A proactive approach with regular preventive maintenance can eliminate the need for costly and untimely repairs in the future, including HVAC and appliance maintenance or cleaning, filters, thermostats, CO2 and smoke detectors, sprinklers, flowers, and more. Ask your representative for full detail." },
      { title: "Storm Readiness — Preparation & Post-Storm Check", text: "Emergency visits are available, including pre- and post-storm visits to check and secure the inside and outside of the home and applicable outdoor areas for potential damage. Ask your representative for full detail." },
      { title: "Emergency Call-Out Services", text: "We’ll do our best to be there when you can’t be. Emergency Services include last-minute requests such as pre- or post-storm visits, an alarm response, or another unexpected event or visitor." },
      { title: "Welcome Home Service", text: "Our Welcome Home Service helps ensure that you arrive at a bright, cool, grocery-stocked home ready for your immediate enjoyment. Before arrival, we perform customized services in line with your personal preferences. Ask your representative for full detail." },
      { title: "Guest or Vacation-Renter Meet & Greet", text: "We meet your guests or vacation renters at your home to familiarize them with the property. To create a welcoming experience, we can perform various services. Ask your representative for full detail." },
      { title: "Fond Farewell Post-Departure Service", text: "In addition to welcoming you home, we can close and secure your residence upon departure, putting it into “away” / Home Watch Mode and performing customized services in line with your preferences." },
      { title: "Pre-Arrival Grocery / Supply Replenishment", text: "Shopping before your arrival or that of your guests to replenish food, spirits, and desired supplies—sporting equipment, toys, bikes, pool items, sunblock, or anything else you may need—so your home is ready for immediate enjoyment." },
      { title: "Fresh Flower / Plant Replacement", text: "Purchase and pot fresh flowers or plants around the home to create a fresh look upon your arrival." },
      { title: "Seasonal Changeover Management", text: "Seasonal changeover management and outdoor furniture and décor care are available. Ask your representative for full detail." },
      { title: "Prolonged Absence Mitigation", text: "Services designed to mitigate visible signs and practical concerns associated with a prolonged absence. Ask your representative for full detail." },
      { title: "Plant Watering & Trash / Recycling", text: "Water indoor or outdoor plants per client specifications and visit the property on appropriate days to transfer trash and recycling bins to or from the curb." },
      { title: "Perishable Items Service", text: "Perishable-items service is available. Ask your representative for full detail." },
      { title: "Estate Management, Project Oversight & Vacation Rentals", text: "Full Estate Management is available for clients requiring a higher level of attention and property administration, with more frequent visits or complete estate management including coordination of vendors, errands, and property upkeep. This may be enhanced to include a dedicated full-time estate manager or a more permanent in-home caretaker scenario, subject to client need. Assistance with Vacation Rental properties may also be available for select clients." },
      { title: "Vendor Coordination / Project Management", text: "We can coordinate and manage services and projects via an extensive network of providers. We have assisted with renovation projects from start to finish, identification of quality tradespeople, and service as the primary liaison to help ensure timely completion. Coordination with existing vendor relationships is welcomed." },
    ],
  });
}

export function vehicleServicePage() {
  return serviceDetailPage({
    path: "/services/vehicle/",
    eyebrow: "Private Vehicle Care",
    title: "Vehicle Services",
    intro: "Maintenance, exercising, valet, shipping, and brokerage support for vehicles that remain in the desert while you are away.",
    image: "/assets/images/generated/car-img.webp",
    alt: "Luxury vehicle prepared for service in an Arizona garage",
    leadTitle: "Our services don’t end with your home.",
    note: "Keeping your vehicles properly maintained, charged, and exercised is critical in the desert.",
    paragraphs: [
      "The Home Watch Agency offers services to assist in the prevention of costlier issues that may arise with sedentary vehicles in our climate. We assist with vehicle maintenance, exercising, valet, shipping, and brokerage. We have experience with luxury cars, exotics and supercars, motorcycles, off-road vehicles, golf carts, and boats.",
      "Services include vehicle starting and driving, coordination and attendance of service appointments, detailing, washes and refueling, vehicle valet service, and assistance with vehicle transport. Due to our experience in the exotic-car segment, we can also assist clients with vehicle purchase, sale, and location services.",
      "These commonly requested services can often be combined with a Home Watch visit or performed at separate off-cycle times as needed. Other services may be available upon request.",
    ],
    items: [
      { title: "Vehicle Driving / Exercising", text: "Sedentary vehicles in the valley climate can develop costly issues involving rodents, dried-out belts, gaskets, seals, tires, and batteries. Our driver is a long-time exotic and supercar enthusiast with years of personal ownership and track experience. We offer an optional vehicle-exercising service so your vehicle can be safely driven and ready for arrival." },
      { title: "Maintenance", text: "Full coordination and transport to various services, including refueling, car washes, maintenance, emissions, detailing, tinting, and paint-protection film. Detailing services are available for cars, boats, RVs, UTVs, motorcycles, and other vehicles, mobile or on-site." },
      { title: "Vehicle Valet Services & Airport Drop-Offs", text: "Your vehicle can be dropped off at the airport or another location before your arrival, or picked up at a requested location. This is also convenient for vehicles that need to be relocated for transport pick-up and drop-off." },
      { title: "Pre-Arrival Vehicle Preparation", text: "To help ensure your ride is ready for you, we can uncover the vehicle, remove the battery tender, check tire pressure, refuel, and wash." },
      { title: "Vehicle Brokerage / Transport Assistance", text: "In addition to coordinating vehicle shipping with transporters, we can assist with vehicle purchase, sale, and location services. This includes locating specific vehicles and assisting with purchase and transport, or helping coordinate a sale including listing, buyer negotiations, and transport." },
      { title: "Vehicle Services Pricing", text: "With the exception of vehicle drives, which are typically a flat-rate service, most other vehicle-related services are assessed at rates based on time incurred. Please inquire directly for an estimate and customized plan." },
      { title: "Other “Specialty” Vehicles", text: "The current site also notes age-appropriate drivers for the smaller “specialty” vehicles in the household—making sure the little “peanuts” are not forgotten." },
    ],
  });
}

export function conciergeServicePage() {
  return serviceDetailPage({
    path: "/services/concierge/",
    eyebrow: "An “Ask Anything” Approach",
    title: "Personalized Concierge Services",
    intro: "Leave the “To-Do” lists to us. Regardless of the need, we will help find the solution.",
    image: "/assets/images/generated/fountain-hills-estate-overlook.webp",
    alt: "Generated concept image of a Fountain Hills estate prepared for a sunset arrival",
    leadTitle: "Personal affairs, handled with care.",
    note: "Services are tailored to our clients’ needs and can range from simple shopping to helping coordinate a major renovation.",
    paragraphs: [
      "Due to the intimate relationships we develop with our clients, they routinely leave the “To-Do” lists to us, allowing them to focus on other priorities, including enjoying their time with family and friends. We assist with a variety of requests and are willing to help as long as it is not Illegal, Immoral, or Unethical.",
      "Examples include shopping, errands, vendor management, property renovation and maintenance, estate management, vacation-property management, project oversight, appointment-waiting and key-holder services, vehicle-appointment services, and shuttle services.",
      "With over 25+ years of experience in the HNW clientele segment, The Home Watch Agency has built an extensive network of relationships to assist clients with unique requests and personal affairs that extend well beyond Basic Home Watch and Estate Management.",
      "We go beyond finding the service provider and can serve as the liaison on your behalf, letting providers into the property and monitoring their work. We can act as the primary contact for contractors, associations, realtors, and anyone else you authorize. Interaction and coordination with your existing vendor relationships is welcomed.",
    ],
    items: [
      { title: "Home Entry, Key-Holder & Appointment-Waiting", text: "Meet and provide property access to guests, renters, or service providers; stand by for diagnosis; communicate the issue to the client; verify completion of service; and secure the residence." },
      { title: "Grocery & Supply Replenishment", text: "Shopping before your arrival or that of your guests to replenish food, spirits, and other supplies so that your home is ready for immediate enjoyment." },
      { title: "Shuttle Services", text: "Airport pick-up and drop-off for you and your guests, as well as occasional rides for clients who can no longer drive to shopping and appointments, including healthcare, prescriptions, and groceries." },
      { title: "Mobile Hair Stylist Services", text: "Access to on-call mobile hair stylists with over 20 years of salon experience. Providers are mobile and can serve you, your children, or guests in the privacy and comfort of your home." },
      { title: "Vendor Coordination / Project Management", text: "We can coordinate and manage services and projects through an extensive network of providers. We have assisted with renovation projects from start to finish, including identifying quality tradespeople and serving as the primary liaison to help ensure timely completion. Coordination with existing vendors is welcomed." },
      { title: "Real Estate Assistance Services", text: "With over 25+ years of residential experience in management, investment, and renovation, we can work with your existing real-estate representatives and introduce personally known providers. Examples include coordinating sale, purchase, or rental details; punch-list and inspection repairs; preparing a home to be market-ready; staging coordination; cleaning; and pre-close walk-throughs." },
      { title: "Estate Management, Project Oversight & Vacation Rentals", text: "Full Estate Management is available for clients requiring a higher level of attention and property administration, with more frequent visits or complete estate management including vendor coordination, errands, and property upkeep. This may be enhanced with a dedicated full-time estate manager or in-home caretaker arrangement, subject to client need. Assistance with Vacation Rental properties may be available for select clients." },
    ],
  });
}
