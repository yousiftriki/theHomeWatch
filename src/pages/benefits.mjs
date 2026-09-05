import {
  button,
  consultationCta,
  detailGrid,
  htmlDocument,
  longformSection,
  pageHero,
  sectionHeading,
} from "../components.mjs";

const benefits = [
  {
    title: "Home Monitoring",
    text: "Over time, a minor issue—if not caught early—can evolve into a major and costly problem when properties are left unattended and unmonitored. Home monitoring helps ensure you aren’t greeted with an unexpected and unwelcome disaster when you return to your residence.",
  },
  {
    title: "Problem Identification",
    text: "The Home Watch Agency is more than an additional set of eyes that proactively identifies costly issues with your home. We can also assist in mitigating these issues when we find them, including leaking pipes, insect or rodent infestation, A/C, or water-heater issues.",
  },
  {
    title: "Emergency Support",
    text: "Surprises—storms, electrical outages, or unexpected visitors—happen to everyone, even the vigilant. When they do, The Home Watch Agency is available and can make an emergency visit to inspect the premises and investigate potential damage.",
  },
  {
    title: "Extra Security",
    text: "At each visit, we review your property for concerns and take actions that mitigate signs of prolonged absence. These activities help deter unwanted visitors by giving the appearance of occupancy.",
  },
  {
    title: "Insurance Compliance",
    text: "Insurance companies may deny a homeowner’s claim if their property is not regularly occupied or monitored. While we hope you never need them, our reports could provide essential evidence of your home’s upkeep should you ever need to file a claim.",
  },
  {
    title: "Customizable Services",
    text: [
      "Every client and property is unique, so we don’t believe in offering one-size-fits-all packages. Every client receives a custom service plan designed for their property and situation.",
      "We are willing to assist our clients with just about anything. If we don’t offer the service, we will help you find a solution, as long as the request is not illegal, immoral, or unethical.",
    ],
  },
  {
    title: "Vendor Monitoring",
    text: "We provide an additional layer of verification that your existing vendors and contractors are performing their responsibilities as agreed and up to your expectations, while maintaining your residence within HOA guidelines. We can check their work and report back to you.",
  },
  {
    title: "Single Point of Contact",
    text: [
      "Maintaining a residence and all of the related relationships can be an extremely time-consuming task for individuals with busy professional schedules, multiple homes or vehicles, or part-time residents. It can also be challenging to find and manage vendors or contractors remotely.",
      "With over 25+ years of experience working with the HNW clientele segment, as well as exclusive concierge and exotic-vehicle-management experience, The Home Watch Agency has built an extensive network of relationships with trusted providers and vendors to meet almost any client need.",
      "We go beyond finding the service provider and can act as your liaison, letting providers into the property and monitoring their work. We can act as a liaison for contractors, associations, realtors, and anyone else you authorize. Interaction and coordination with your existing vendor relationships is also welcomed.",
    ],
  },
  {
    title: "Vehicle Management Services",
    text: "Keeping your vehicles properly maintained, charged, and exercised is critical in the desert. We offer services including vehicle starting, drives to exercise vehicles, refueling, attending and coordinating service appointments, detailing, vehicle transport and relocation, and other vehicle-valet services.",
  },
  {
    title: "No Long-Term Contracts",
    text: "Our services flex to accommodate your needs and schedule. We don’t require a long-term contract; you only pay for the services you use. Services can be put on hold and recommenced at any time with proper notice, specifically while the property is in use.",
  },
  {
    title: "GPS-Enabled Digital Reporting",
    text: "Our optional reporting application provides detailed, up-to-the-minute reporting via GPS-enabled geofence technology. Clients can track the inspector’s presence at their residence and receive comprehensive reports with time stamps and pictures.",
  },
  {
    title: "Client Satisfaction",
    text: "The current website states 100% client retention. This claim is retained here as existing client content and should be reconfirmed before production publication.",
  },
  {
    title: "Professional / Experienced Firm",
    text: "The Home Watch Agency is fully insured and bonded, nationally accredited, and invests in ongoing professional development.",
  },
];

export function benefitsPage() {
  const body = `
    ${pageHero({
      eyebrow: "Why Home Watch",
      title: "Benefits of Engaging<br />The Home Watch Agency",
      intro: "Execution, exemplary service, accountability, attention to detail, and detailed reporting—with our clients’ best interests always in mind.",
      image: "/assets/images/generated/private-estate-gated-entry.webp",
      alt: "Generated concept image of a private gated Arizona estate at sunset",
      align: "center",
    })}

    ${longformSection({
      id: "peace",
      eyebrow: "Peace of Mind",
      title: "Your eyes & ears while you are away.",
      aside: "The most important benefit is the Peace of Mind to focus on other priorities.",
      paragraphs: [
        "Multiple home ownership and frequent travel can have its challenges, including the vulnerability of an unoccupied home. The Home Watch Agency provides an extensive set of offerings specifically designed to address the various needs and concerns related to absentee property and vehicle ownership, supported by optional digital client reporting, testing, recurring professional training, national accreditation, insurance, and bonding.",
        "We act as your eyes and ears while you are away—as your home manager or home caretaker—performing recurring, thorough, personalized, in-person home monitoring checks unique to each residence, basic maintenance, coordination and management of third-party vendors, as well as other concierge and vehicle collection management services.",
        "Our comprehensive services assist in the pro-active identification of potential issues that may arise while your property is unoccupied, providing comfort that your assets are being regularly monitored and attended to. We also provide an additional layer of verification that your existing vendors are performing their responsibilities in accordance with your expectations.",
      ],
    })}

    <section class="benefits-detail" id="benefits">
      <div class="wrap">
        ${sectionHeading({
          eyebrow: "Homeowner Benefits",
          title: "Comprehensive attention to the property around you.",
          intro: "Recurring, comprehensive, and personalized in-home checks, essential maintenance, service-provider coordination, and vehicle management protect your property and provide peace of mind.",
        })}
        ${detailGrid(benefits, { numbered: true })}
      </div>
    </section>

    <section class="gps-section" id="gps">
      <div class="wrap gps-section__grid">
        <div class="gps-section__copy" data-reveal>
          <span class="eyebrow">GPS-Enabled Client Reporting</span>
          <h2>On-site reporting, documented.</h2>
          <div class="prose">
            <p>Our optional reporting application package provides detailed, up-to-the-minute reporting via GPS-enabled geofence technology. Clients can track the presence of the inspector at their residence and receive comprehensive reports with time stamps and pictures.</p>
            <h3>Certainty that your property is being visited</h3>
            <p>The HomeWatchIT reporting software described on the current site allows us to look after your home efficiently and safely while providing secure cloud storage. Its integrated geofencing means that a report can only be generated while we are physically on-site at your property.</p>
            <h3>Comprehensive visit report</h3>
            <p>Upon arrival, a QR code is scanned to confirm the on-site location via Google Maps, allowing access to a property-specific checklist compiled with the client so that personal requests are addressed. The final report provides a summary of inspected items, issues, and other services performed on location.</p>
            <h3>Verification for insurance</h3>
            <p>This technology also provides detailed evidence that the homeowner can provide to an insurance provider, evidencing that the residence is being regularly visited and adequately monitored.</p>
          </div>
          ${button("Read Frequently Asked Questions", "/faqs/", "outline")}
        </div>
        <figure class="gps-section__image image-frame" data-reveal>
          <img src="/assets/images/authentic/gps-client-reporting.webp" width="1000" height="667" alt="Existing Home Watch Agency illustration representing GPS-enabled client reporting" loading="lazy" />
          <figcaption>Existing public-site imagery retained for the reporting section; confirm final licensing before production use.</figcaption>
        </figure>
      </div>
    </section>

    ${consultationCta()}
  `;

  return htmlDocument({
    title: "Benefits of Home Watch — The Home Watch Agency",
    description: "Explore the peace-of-mind, property-monitoring, vendor-coordination, vehicle-care, and GPS-enabled reporting benefits of The Home Watch Agency.",
    path: "/benefits/",
    body,
    overlayHeader: true,
    preloadImage: "/assets/images/generated/private-estate-gated-entry.webp",
  });
}
