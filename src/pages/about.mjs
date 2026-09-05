import {
  button,
  consultationCta,
  htmlDocument,
  imageBreak,
  longformSection,
  pageHero,
} from "../components.mjs";

export function aboutPage() {
  const body = `
    ${pageHero({
      eyebrow: "The Agency",
      title: "About The Home Watch Agency",
      intro: "Our philosophy, relationships, story, clientele, and commitment to professional development.",
      image: "/assets/images/generated/arizona-estate-arrival-palms.webp",
      alt: "Generated concept image of a refined Arizona estate arrival framed by palms",
      align: "center",
    })}

    ${longformSection({
      id: "philosophy",
      eyebrow: "Our Philosophy",
      title: "A foundation built upon trust.",
      aside: "Discretion, Privacy, Respect, Accountability, Communication, and above all, Trust.",
      paragraphs: [
        "Due to our 25+ year background of working with the exclusive clientele segment, we appreciate the need for privacy and discretion as evidenced by the fact that the foundation of our agency was built upon the valued pillars of Discretion, Privacy, Respect, Accountability, Communication, and above all, Trust.",
        "The Home Watch Agency understands how the intricacies of life and home ownership in the valley can be unique to this part of the country and why the needs of our exclusive clients can be unpredictable based on their demanding careers and lifestyles.",
        "One of the most crucial elements of our company is developing a holistic and transparent relationship with our clients and their loved ones to ensure a thorough understanding of their residence, personal preferences, and unique needs which oftentimes go well beyond Home Watch and basic concierge services.",
        "Our goal is to give our clients more balance and become their utmost trusted provider, creating a rapport and comfort level that allows them to inquire about a variety of unique personal and concierge services while they focus on other priorities.",
      ],
    })}

    <section class="relationship-editorial" id="Relationships">
      <div class="wrap relationship-editorial__grid">
        <div class="relationship-editorial__image image-frame" data-reveal>
          <img src="/assets/images/authentic/principals-rocky-point.webp" width="571" height="571" alt="Christine, Andrew, and their family" loading="lazy" />
        </div>
        <div class="relationship-editorial__copy" data-reveal>
          <span class="eyebrow">Relationships</span>
          <h2>Holistic. Transparent. Personal.</h2>
          <div class="prose">
            <p>One of the most crucial elements of our company is developing a holistic and transparent relationship with our clients and their loved ones to ensure a thorough understanding of their residence, personal preferences, and unique needs which oftentimes go well beyond Home Watch and basic concierge services.</p>
            <h3>Trust</h3>
            <p>Our goal is to give our clients more balance and become their utmost trusted provider, creating a rapport and comfort level that allows them to inquire about a variety of unique personal and concierge services while they focus on other priorities.</p>
            <h3>Mutual goals</h3>
            <p>We strive to assist our clients with almost any request as long as it is not Illegal, Immoral, or Unethical. We are here to assist and just a phone call away.</p>
          </div>
        </div>
      </div>
    </section>

    ${longformSection({
      id: "difference",
      eyebrow: "What Makes Us Different",
      title: "Exclusivity & quality over quantity.",
      paragraphs: [
        "The small size of our firm and client base is intentional, allowing us to maintain a very finite client base in order to provide each client with a meticulous and comprehensive experience, a nimble suite of services, and direct interaction with the Principals of our firm. The Home Watch Agency focuses on “quality over quantity,” allowing us to offer agile services to a select clientele base. We want each client to feel that they receive our undivided attention with the ability for direct interaction with our Principals.",
        "This high-touch approach and controlled model provides our homeowners with the confidence that access to their residence is limited to individuals with whom they are familiar, primarily our Principals. Our Principals are seasoned professionals with a proven reputation of integrity and client service, backed by professional designations that adhere to a strict code of ethics.",
      ],
      dark: true,
    })}

    <section class="areas-editorial" id="clients">
      <div class="areas-editorial__image">
        <img src="/assets/images/generated/fountain-hills-luxury-estate.webp" width="1448" height="1086" alt="Generated concept image of a Fountain Hills luxury estate and desert overlook" loading="lazy" />
      </div>
      <div class="wrap areas-editorial__content">
        <div data-reveal>
          <span class="eyebrow eyebrow--light">Our Clients &amp; Areas of Service</span>
          <h2>Local knowledge. Select relationships.</h2>
        </div>
        <div class="prose prose--light" data-reveal>
          <p>The Home Watch Agency proudly and discreetly serves a select client base within the high-end residential and client space of Scottsdale, North Scottsdale, Paradise Valley, Biltmore, Arcadia, Fountain Hills, Phoenix, inter alia.</p>
          <p>Some of the communities include Silver Leaf, Estancia, DC Ranch, Desert Highlands, Gainey Ranch, Ancala, McDowell Mountain Ranch, Wildhorse Estates, Windgate, Scottsdale Ranch, Scottsdale Country Club, McCormick Ranch, as well as a number of Paradise Valley enclaves and communities.</p>
        </div>
        <ul class="areas-editorial__list" aria-label="Areas served" data-reveal>
          <li>Scottsdale</li><li>North Scottsdale</li><li>Paradise Valley</li><li>Biltmore</li><li>Arcadia</li><li>Fountain Hills</li><li>Phoenix</li>
        </ul>
        <div class="areas-editorial__clientele prose prose--light" data-reveal>
          <h3>Our clientele</h3>
          <p>Due to our Principals’ 25+ years of experience in the HNW clientele segment, our discerning client base ranges from business owners and professional athletes to C-suite executives, bankers, and fund principals. These are often individuals and families who own multiple estates or residences, travel frequently, and need additional assistance with their residence, vehicle collections, and personal affairs.</p>
          <p>Although we service various property types for our clients, small to large, we specialize in the more complex, ultra-luxury residential segment which commands meticulous attention to detail and a high standard of service.</p>
        </div>
      </div>
    </section>

    ${longformSection({
      id: "ourstory",
      eyebrow: "Our Story",
      title: "A need understood first-hand.",
      aside: "Trusting someone with access to one of your most valuable and private assets is a big decision.",
      paragraphs: [
        "Before becoming full-time Scottsdale residents, our Principals split their time between Chicago and a part-time home in Scottsdale’s Gainey Ranch for over 20 years. Through this experience of part-time valley living, they gained invaluable first-hand insight into the nuances of life, home, and vehicle ownership in the valley.",
        "They also became intimately familiar with many of the concerns and issues that can arise when someone doesn’t utilize and live in their Arizona home on a full-time basis, including expensive repairs and an insurance company’s ability to deny a homeowner’s claim if a home is not regularly monitored or visited.",
        "Throughout those years of part-time valley living, our Principals learned that many neighbors, friends, and colleagues also had a need for a service that could check on their homes and attend to other personal requests. The challenge was finding someone who was not only qualified to correctly monitor their home, but someone they felt they could trust to oversee their home and vehicles while they were away.",
        "Although many people had access to relatives or friends who could visit their homes, this informal social relationship could have its shortfalls and complications when compared with a formalized relationship with a specialized firm.",
        "This glaring need acted as the inspiration and catalyst for the birth of The Home Watch Agency.",
      ],
    })}

    ${imageBreak({
      src: "/assets/images/generated/scottsdale-estate-pool-sunset.webp",
      alt: "Generated concept image of a Scottsdale estate pool and mountain sunset",
      position: "center",
    })}

    <section class="team-section" id="ourteam">
      <div class="wrap">
        <header class="team-section__heading" data-reveal><span class="eyebrow">Our Team / Principals</span><h2>Meet Christine &amp; Andrew</h2></header>
        <div class="team-section__grid">
          <figure class="team-section__portrait image-frame" data-reveal><img src="/assets/images/authentic/principals-rocky-point.webp" width="571" height="571" alt="Christine and Andrew with their family" loading="lazy" /></figure>
          <div class="team-section__bios prose" data-reveal>
            <h3>Christine</h3>
            <p>Christine founded The Home Watch Agency to meet the needs and challenges she discovered as a seasonal homeowner in Gainey Ranch. Today, she and her family reside in Scottsdale, Arizona and are deep-rooted and actively involved in the community via their church, sports, and the local theater in Scottsdale and Phoenix.</p>
            <p>Prior to launching The Home Watch Agency, Christine owned a service-industry business for 20 years while also managing a private real estate portfolio. Combining these experiences, she transitioned to assisting clients with home watch and concierge services before officially founding The Home Watch Agency.</p>
            <p>Many of her client relationships developed well beyond home watch services in her prior role. Christine demonstrated a passion and talent for acting as a trusted resource for families and individuals on multiple levels. Christine engaged in various training in the home watch field and obtained accreditations and designations; she also holds another unrelated professional license.</p>
            <h3>Andrew &amp; family</h3>
            <p>With over 25 years of experience in real estate and wealth-management banking at top-tier firms, Andrew has built his career by creating life-long relationships with exclusive and discreet Forbes List clientele and ultra-HNW families. He possesses a deep-rooted passion for client service, real estate, and exotic cars.</p>
            <p>He has used this experience to manage, purchase, and negotiate the sale of substantial assets, including luxury estates, ranches, vineyards, equestrian properties, exotic automobiles and supercars, executive aircraft, yachts, and fine art.</p>
            <p>With his decades of personal real estate investment, management, and construction experience, Andrew had a skill set and network that uniquely positioned him to support Christine during the initial launch of The Home Watch Agency, which now assists clients with the monitoring and management of luxury residences, estates, and auto collections.</p>
            <p>Andrew graduated Magna Cum Laude with a degree in Finance, Accounting, and Japanese. He holds various designations and licenses, including residential accreditations, real-estate-related licenses, and former securities and insurance designations. He is a long-time exotic and supercar enthusiast with many years of personal ownership and track experience.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="training-section" id="training">
      <div class="wrap training-section__grid">
        <div class="training-section__title" data-reveal><span class="eyebrow">Professional Training &amp; Development</span><h2>Education as a foundation.</h2></div>
        <div class="prose" data-reveal>
          <p class="lead">The most dedicated professionals build their business on a strong foundation of education. Homeowners seeking a trusted provider should choose a provider that makes training and regular education a priority.</p>
          <p>At The Home Watch Agency, we are focused on providing exceptional Home Watch, Concierge, Vehicle, and Estate Management Services to our clients. To help achieve this goal and enhance our expertise in the intricacies of home watch, we hold a graduate degree/accreditation from the Home Watch Academy and partake in regular continuing education in the field.</p>
          <p>Graduates of the Home Watch Academy are dedicated to upholding a high level of ethics, integrity, and client service.</p>
          <p>Home Watch is an established industry, and organizations such as The Home Watch Academy and the National Home Watch Association provide support, education, mentoring, and professional development to home watch providers and encourage regular training, communication, and the maintenance of proper insurance and bonding. Even if we are not an appropriate fit for you, we thought it would be helpful to bring these resources to your attention.</p>
        </div>
      </div>
    </section>

    <section class="accreditation-section" id="accreditation">
      <div class="wrap">
        <header data-reveal><span class="eyebrow">Accreditation / Affiliations</span><h2>Current-site credentials, preserved.</h2></header>
        <div class="accreditation-grid" data-reveal>
          <div><img src="/assets/images/authentic/home-watch-academy.jpeg" alt="Home Watch Academy credential mark from the current site" loading="lazy" /></div>
          <div><img src="/assets/images/authentic/nhwa.jpeg" alt="National Home Watch Association mark from the current site" loading="lazy" /></div>
          <div><img src="/assets/images/authentic/ihwa.jpeg" alt="International Home Watch Alliance mark from the current site" loading="lazy" /></div>
          <div><img src="/assets/images/authentic/scottsdale-affiliation.png" alt="Scottsdale affiliation mark from the current site" loading="lazy" /></div>
        </div>
        <p class="asset-disclaimer">Authentic marks downloaded from the current public website for this redesign demo. Final production use should be checked against current membership and brand-guideline requirements.</p>
      </div>
    </section>

    ${consultationCta()}
  `;

  return htmlDocument({
    title: "About The Home Watch Agency — Philosophy, Principals & Service Areas",
    description: "Learn about The Home Watch Agency's philosophy, principals, boutique service model, professional training, and Arizona service areas.",
    path: "/about/",
    body,
    overlayHeader: true,
    preloadImage: "/assets/images/generated/arizona-estate-arrival-palms.webp",
  });
}
