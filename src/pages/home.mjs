import {
  button,
  consultationCta,
  galleryCarousel,
  htmlDocument,
  sectionHeading,
  serviceIndex,
  trustBand,
} from "../components.mjs";

export function homePage() {
  const body = `
    <section class="home-hero">
      <img class="home-hero__image" src="/assets/images/generated/arizona-luxury-estate-sunset.webp" width="1448" height="1086" alt="Generated concept image of a contemporary Arizona desert estate and pool at sunset" fetchpriority="high" />
      <div class="home-hero__veil"></div>
      <div class="home-hero__content wrap">
        <span class="eyebrow eyebrow--light">Luxury Home Watch · Estate Management · Vehicle Care · Concierge</span>
        <h1>We are always home,<br /><em>so that you don’t have to be.</em></h1>
        <p>Comprehensive Luxury Home Watch Monitoring Visits, essential Home &amp; Vehicle Maintenance, and Personalized Concierge &amp; Estate Management Services throughout the greater Phoenix metropolitan area.</p>
        <div class="button-row">${button("Schedule Your Consultation", "/contact/", "light")}${button("Explore Our Services", "/services/", "ghost-light")}</div>
      </div>
      <a class="hero-scroll" href="#introduction"><span>Discover</span><i aria-hidden="true"></i></a>
    </section>

    ${trustBand()}

    <section class="intro-editorial" id="introduction">
      <div class="wrap intro-editorial__grid">
        <div class="intro-editorial__heading" data-reveal>
          <span class="eyebrow">The Home Watch Agency</span>
          <h2>Comprehensive home monitoring, protection, and maintenance for your home and vehicles.</h2>
        </div>
        <div class="intro-editorial__copy prose" data-reveal>
          <p class="lead">Owning multiple residences has many challenges, including the vulnerability of an unoccupied home. The Home Watch Agency is an experienced, conscientious firm with meticulous attention to detail, a high standard of service, and a thorough understanding of the intricacies of absentee ownership and the needs of seasonal homeowners.</p>
          <p>As a Home Watch company, we serve as the eyes and ears for our seasonal clients while they are away from their luxury Arizona homes and estates. We perform recurring personalized home-monitoring visits which entail a comprehensive assessment of the interior, exterior, and perimeter of the property, along with any essential maintenance that your home and/or vehicles may require while you are away.</p>
          <p>Our comprehensive home watch services assist in the pro-active identification of potential issues and help ensure that your residence and vehicles are secure, appropriately monitored, maintained, exercised, and ready for your return.</p>
          <p>In addition to our Home Watch, Vehicle Maintenance/Management, and Estate Management offerings, we also offer an agile suite of Personalized Concierge Services to assist clients with a variety of unique and personal requests that extend well beyond the needs of our basic Home Watch offerings.</p>
          <p class="pull-quote">Regardless of the need, we will help find the solution…</p>
        </div>
      </div>
      <div class="intro-editorial__image image-frame" data-reveal>
        <img src="/assets/images/generated/gallery-arizona-great-room.webp" width="1448" height="1086" alt="Generated concept image of an Arizona great room with floor-to-ceiling mountain views" loading="lazy" />
        <span class="image-note">Concept imagery · replace with licensed final photography</span>
      </div>
    </section>

    ${galleryCarousel()}

    <section class="services-showcase">
      <div class="wrap">
        ${sectionHeading({
          eyebrow: "Our Services",
          title: "A proactive approach to Arizona home and estate care.",
          intro: "Recurring, comprehensive, and personalized in-home monitoring, essential maintenance, coordination of service providers, and vehicle management services that protect your property and provide peace of mind.",
        })}
        ${serviceIndex()}
      </div>
    </section>

    <section class="model-editorial">
      <div class="model-editorial__media image-frame" data-reveal>
        <img src="/assets/images/generated/gallery-arizona-bedroom.webp" width="1448" height="1086" alt="Generated concept image of a serene Arizona bedroom with a desert mountain view" loading="lazy" />
      </div>
      <div class="model-editorial__content" data-reveal>
        <span class="eyebrow">Our Service Model</span>
        <h2>An intimate boutique firm.<br /><em>Quality over quantity.</em></h2>
        <div class="prose">
          <p>The Home Watch Agency is an intimate boutique firm with 25+ years of experience discreetly providing a comprehensive suite of Home Watch Monitoring Services, essential Home and Vehicle Care/Maintenance, and Personalized Concierge Services to an exclusive and discerning client base of active seasonal residents, absentee owners, and professionals within the high-end residential/client space of Scottsdale, Paradise Valley, Fountain Hills, and Phoenix (Biltmore/Arcadia).</p>
          <p>The small size of our firm and client base is intentional, allowing us to maintain a very finite and exclusive client base in order to provide each client with a meticulous and comprehensive experience, a nimble suite of services, and direct interaction with the Principals of our firm.</p>
          <p>We focus on trust, accountability, privacy, and a fiduciary responsibility.</p>
        </div>
        ${button("Learn More About THWA", "/about/", "outline")}
      </div>
    </section>

    <section class="principles-panel">
      <div class="wrap">
        <div class="principles-panel__heading" data-reveal>
          <span class="eyebrow eyebrow--light">The Difference</span>
          <h2>Discretion. Privacy. Respect.<br />Accountability. Communication.<br /><em>Above all, trust.</em></h2>
        </div>
        <div class="principles-panel__copy prose prose--light" data-reveal>
          <p>Due to our 25+ year background of working with the exclusive clientele segment, we appreciate the need for privacy and discretion. The foundation of our agency was built upon these valued pillars.</p>
          <p>Our high-touch approach and controlled model provides homeowners with the confidence that access to their residence is limited to individuals with whom they are familiar, primarily our Principals.</p>
          ${button("Our Philosophy", "/about/#philosophy", "line-light")}
        </div>
      </div>
    </section>

    <section class="service-area">
      <img src="/assets/images/generated/fountain-hills-estate-overlook.webp" width="1448" height="1086" alt="Generated concept image of a Fountain Hills estate overlooking the Sonoran Desert" loading="lazy" />
      <div class="service-area__veil"></div>
      <div class="service-area__content wrap" data-reveal>
        <span class="eyebrow eyebrow--light">Our Clients &amp; Areas of Service</span>
        <h2>Arizona, attended to.</h2>
        <p>The Home Watch Agency proudly and discreetly serves a select client base within the high-end residential/client space of:</p>
        <ul aria-label="Primary service areas">
          <li>Scottsdale</li><li>North Scottsdale</li><li>Paradise Valley</li><li>Biltmore</li><li>Arcadia</li><li>Fountain Hills</li><li>Phoenix</li>
        </ul>
        <a class="text-link text-link--light" href="/about/#clients">Explore service areas<span class="sr-only"> and communities</span><svg aria-hidden="true" viewBox="0 0 20 20"><path d="M3 10h13M11 5l5 5-5 5"/></svg></a>
      </div>
    </section>

    <section class="family-preview">
      <div class="wrap family-preview__grid">
        <div class="family-preview__image image-frame" data-reveal>
          <img src="/assets/images/authentic/principals-rocky-point.webp" width="571" height="571" alt="Christine, Andrew, and their family" loading="lazy" />
          <span class="image-note image-note--authentic">Authentic client-supplied principal and family photography</span>
        </div>
        <div class="family-preview__copy" data-reveal>
          <span class="eyebrow">Our Story</span>
          <h2>Born from first-hand experience as seasonal Arizona homeowners.</h2>
          <div class="prose">
            <p>Before becoming full-time Scottsdale residents, our Principals split their time between Chicago and a part-time home in Scottsdale’s Gainey Ranch for over 20 years. Through this experience, they gained invaluable first-hand insight into the nuances of life, home, and vehicle ownership in the valley.</p>
            <p>Christine founded The Home Watch Agency to meet the needs and challenges she discovered as a seasonal homeowner in Gainey Ranch. Today, she and her family reside in Scottsdale and are deep-rooted and actively involved in the community.</p>
          </div>
          ${button("Meet the Principals", "/about/#ourteam", "outline")}
        </div>
      </div>
    </section>

    ${consultationCta()}
  `;

  return htmlDocument({
    title: "The Home Watch Agency — Luxury Home Watch & Estate Management",
    description: "Comprehensive luxury home watch monitoring, estate management, vehicle care, and personalized concierge services in Scottsdale, Paradise Valley, Fountain Hills, and Phoenix.",
    path: "/",
    body,
    overlayHeader: true,
    preloadImage: "/assets/images/generated/arizona-luxury-estate-sunset.webp",
  });
}
