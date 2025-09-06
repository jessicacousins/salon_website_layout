import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  //  Lookbook filter
  const [filter, setFilter] = useState("All");
  const lookbook = [
    {
      id: 1,
      category: "Color",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
      alt: "Dimensional brunette color with glossed finish",
      caption: "Dimensional brunette gloss • low-maintenance shine",
    },
    {
      id: 2,
      category: "Cuts",
      img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1200&auto=format&fit=crop",
      alt: "Precision bob haircut with soft texture",
      caption: "Precision bob • grows out beautifully",
    },
    {
      id: 3,
      category: "Texture",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
      alt: "Defined curls with hydrated finish",
      caption: "Curly shaping • definition without crunch",
    },
    {
      id: 4,
      category: "Scalp",
      img: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200&auto=format&fit=crop",
      alt: "Relaxing scalp therapy session",
      caption: "Scalp therapy • calm, balanced roots",
    },
    {
      id: 5,
      category: "Color",
      img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
      alt: "Lived-in blonde balayage",
      caption: "Lived-in balayage • blended foils",
    },
    {
      id: 6,
      category: "Cuts",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
      alt: "Long layers with polished finish",
      caption: "Long layers • polished movement",
    },
  ];

  const visibleItems =
    filter === "All" ? lookbook : lookbook.filter((i) => i.category === filter);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const handleBookSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();

    const msg = document.createElement("div");
    msg.className = "inline-success";
    msg.textContent =
      "Thanks! We’ll confirm your appointment by email within one business day.";
    form.parentNode.insertBefore(msg, form.nextSibling);
    setTimeout(() => msg.remove(), 5000);
  };

  return (
    <div className="app">
      <meta
        name="description"
        content="Luminé Hair Studio - Premium hair and skin care services. Our expert stylists combine artistry with science to create personalized looks that enhance your natural beauty."
      />
      <meta
        name="keywords"
        content="hair salon, skin care, hair health, professional styling, color specialists, hair treatment, AI hair analysis, premium salon"
      />
      <meta name="author" content="Luminé Hair Studio" />
      <meta
        property="og:title"
        content="Luminé Hair Studio - Where Art Meets Science"
      />
      <meta
        property="og:description"
        content="Experience the perfect blend of fashion-forward styling and science-based hair and skin care at Luminé Hair Studio."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://luminehairstudio.com" />

      {/* Header */}
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <h1>Luminé</h1>
          <span>Hair Studio</span>
        </div>
        <nav>
          <ul>
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className={activeSection === "home" ? "active" : ""}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className={activeSection === "about" ? "active" : ""}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("stylists")}
                className={activeSection === "stylists" ? "active" : ""}
              >
                Stylists
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("lookbook")}
                className={activeSection === "lookbook" ? "active" : ""}
              >
                Lookbook
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("practices")}
                className={activeSection === "practices" ? "active" : ""}
              >
                Best Practices
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("reviews")}
                className={activeSection === "reviews" ? "active" : ""}
              >
                Reviews
              </button>
            </li>
          </ul>
        </nav>
        <button
          className="book-appointment-btn"
          onClick={() => scrollToSection("book")}
        >
          Book Now
        </button>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Where Art Meets Science</h1>
          <p>
            Experience the perfect fusion of fashion-forward styling and
            science-based hair and skin care
          </p>
          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => scrollToSection("stylists")}
            >
              Meet Our Stylists
            </button>
            <button
              className="secondary-btn"
              onClick={() => scrollToSection("about")}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="hero-image"></div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="section-header">
          <h2>Hair & Skin Health</h2>
          <div className="divider"></div>
          <p>
            At Luminé, we believe that beautiful hair starts with a healthy
            foundation. Our approach combines the latest scientific research
            with artistic expertise to deliver exceptional results.
          </p>
        </div>

        <div className="health-grid">
          <div className="health-card">
            <div className="card-icon">🔬</div>
            <h3>Science-Backed Treatments</h3>
            <p>
              Our treatments are formulated based on the latest trichology
              research, addressing hair and scalp health at the cellular level.
            </p>
          </div>
          <div className="health-card">
            <div className="card-icon">🌿</div>
            <h3>Premium Ingredients</h3>
            <p>
              We use only the highest quality products, free from harmful
              sulfates, parabens, and other damaging chemicals.
            </p>
          </div>
          <div className="health-card">
            <div className="card-icon">🧠</div>
            <h3>AI Hair Analysis</h3>
            <p>
              Our proprietary AI technology analyzes your hair's condition to
              create personalized treatment plans tailored to your specific
              needs.
            </p>
          </div>
        </div>
      </section>

      {/* Stylists */}
      <section id="stylists" className="stylists">
        <div className="section-header">
          <h2>Our Expert Stylists</h2>
          <div className="divider"></div>
          <p>
            Each member of our team brings specialized expertise and a unique
            artistic vision to ensure you receive the perfect style for your
            individual needs.
          </p>
        </div>

        <div className="stylists-grid">
          <div className="stylist-card">
            <div
              className="stylist-image"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1593089608156-3e1a839e5e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
              }}
            ></div>
            <h3>Sophia Reynolds</h3>
            <p className="specialty">Color Specialist & Balayage Expert</p>
            <p>
              With over 10 years of experience, Sophia is renowned for her
              natural-looking color applications and expertise in the latest
              highlighting techniques.
            </p>
            <button
              className="book-btn"
              onClick={() => scrollToSection("book")}
            >
              Book with Sophia
            </button>
          </div>

          <div className="stylist-card">
            <div
              className="stylist-image"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1599553485484-1d35e0eda9e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
              }}
            ></div>
            <h3>Marcus Chen</h3>
            <p className="specialty">Precision Cutting & Styling</p>
            <p>
              Marcus combines technical precision with artistic flair to create
              styles that are both modern and timeless. His cuts grow out
              beautifully.
            </p>
            <button
              className="book-btn"
              onClick={() => scrollToSection("book")}
            >
              Book with Marcus
            </button>
          </div>

          <div className="stylist-card">
            <div
              className="stylist-image"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
              }}
            ></div>
            <h3>Elena Rodriguez</h3>
            <p className="specialty">Hair Health & Restoration</p>
            <p>
              Elena specializes in treatments for damaged hair and scalp
              conditions. Her holistic approach has helped countless clients
              restore their hair's vitality.
            </p>
            <button
              className="book-btn"
              onClick={() => scrollToSection("book")}
            >
              Book with Elena
            </button>
          </div>

          <div className="stylist-card">
            <div
              className="stylist-image"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1568702449335-1b5f1a1a5a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
              }}
            ></div>
            <h3>Aisha Johnson</h3>
            <p className="specialty">Texture & Curly Hair Specialist</p>
            <p>
              Aisha is an expert in working with all hair textures, with
              particular expertise in curly and coily hair types. She embraces
              natural beauty.
            </p>
            <button
              className="book-btn"
              onClick={() => scrollToSection("book")}
            >
              Book with Aisha
            </button>
          </div>
        </div>
      </section>

      {/* Lookbook (filterable gallery) */}
      <section id="lookbook" className="lookbook">
        <div className="section-header">
          <h2>Lookbook</h2>
          <div className="divider"></div>
          <p>Real results from our team — filter by focus area.</p>
        </div>

        <div className="filter-bar">
          {["All", "Color", "Cuts", "Texture", "Scalp"].map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="gallery">
          {visibleItems.map((item) => (
            <figure className="gallery-item" key={item.id}>
              <img src={item.img} alt={item.alt} loading="lazy" />
              <figcaption>
                <span className="chip">{item.category}</span>
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Best Practices */}
      <section id="practices" className="practices">
        <div className="section-header">
          <h2>Best Practices for Hair & Skin Health</h2>
          <div className="divider"></div>
          <p>
            Our approach to hair and skin care is rooted in science and enhanced
            by artistry. Here are our recommended practices for maintaining
            optimal health.
          </p>
        </div>

        <div className="practices-container">
          <div className="practice-item">
            <h3>Regular Trims</h3>
            <p>
              Schedule trims every 6-8 weeks to prevent split ends and breakage.
              This promotes healthier growth and maintains your style's shape.
            </p>
          </div>

          <div className="practice-item">
            <h3>Scalp Care</h3>
            <p>
              A healthy scalp is the foundation of healthy hair. Incorporate
              regular scalp treatments and gentle exfoliation into your routine.
            </p>
          </div>

          <div className="practice-item">
            <h3>Heat Protection</h3>
            <p>
              Always use a heat protectant before styling tools. Our AI analysis
              can determine the optimal temperature for your hair type.
            </p>
          </div>

          <div className="practice-item">
            <h3>Nutrition & Hydration</h3>
            <p>
              Hair health begins from within. Stay hydrated and maintain a diet
              rich in proteins, vitamins, and omega-3 fatty acids.
            </p>
          </div>

          <div className="practice-item">
            <h3>Sleep on Silk</h3>
            <p>
              Silk pillowcases reduce friction, preventing breakage and frizz
              while you sleep. They're also better for your skin.
            </p>
          </div>

          <div className="practice-item">
            <h3>Seasonal Adjustments</h3>
            <p>
              Your hair needs change with the seasons. Adjust your care routine
              to address humidity, dryness, and sun exposure.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="reviews">
        <div className="section-header">
          <h2>Client Testimonials</h2>
          <div className="divider"></div>
          <p>
            Don't just take our word for it. Here's what our clients have to say
            about their Luminé experience.
          </p>
        </div>

        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p>
              "After years of struggling with my fine hair, Elena's treatments
              have completely transformed it. Her scientific approach combined
              with her artistic eye is unmatched. My hair has never been
              healthier or looked better!"
            </p>
            <div className="reviewer">- Jennifer T.</div>
          </div>

          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p>
              "Sophia is a color magician! She understood exactly what I wanted
              even when I couldn't articulate it myself. The balayage she
              created looks natural and grows out beautifully. Worth every
              penny!"
            </p>
            <div className="reviewer">- Amanda R.</div>
          </div>

          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p>
              "As someone with curly hair, I've had my share of bad salon
              experiences. Aisha not only understood my hair but educated me on
              how to care for it properly. The AI analysis they use is
              fascinating and spot-on!"
            </p>
            <div className="reviewer">- Danielle K.</div>
          </div>

          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p>
              "Marcus gave me the best haircut I've ever had. His precision is
              incredible, and he really listened to what I wanted. The salon
              atmosphere is so relaxing and professional. I've already booked my
              next appointment!"
            </p>
            <div className="reviewer">- Nicole B.</div>
          </div>

          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p>
              "What sets Luminé apart is their commitment to hair health. They
              don't just focus on making your hair look good for the day; they
              focus on making it healthier for the long term. The skin care
              recommendations have also transformed my routine!"
            </p>
            <div className="reviewer">- Samantha L.</div>
          </div>
        </div>
      </section>

      {/*  Book */}
      <section id="book" className="book">
        <div className="section-header">
          <h2>Book an Appointment</h2>
          <div className="divider"></div>
          <p>
            We’ll confirm within one business day. For same-week openings,
            please call the front desk.
          </p>
        </div>

        <form className="book-form" onSubmit={handleBookSubmit}>
          <div className="two-col">
            <input
              required
              type="text"
              name="firstName"
              placeholder="First name"
            />
            <input
              required
              type="text"
              name="lastName"
              placeholder="Last name"
            />
          </div>

          <div className="two-col">
            <input required type="email" name="email" placeholder="Email" />
            <input type="tel" name="phone" placeholder="Phone (optional)" />
          </div>

          <div className="two-col">
            <select name="stylist" defaultValue="">
              <option value="" disabled>
                Preferred stylist
              </option>
              <option>Sophia Reynolds</option>
              <option>Marcus Chen</option>
              <option>Elena Rodriguez</option>
              <option>Aisha Johnson</option>
              <option>Any available</option>
            </select>

            <select name="service" defaultValue="">
              <option value="" disabled>
                Service
              </option>
              <option>Gloss / Maintenance</option>
              <option>Balayage / Lightening</option>
              <option>Cut & Finish</option>
              <option>Curly Shaping</option>
              <option>Scalp Therapy</option>
            </select>
          </div>

          <div className="two-col">
            <input type="date" name="date" />
            <input type="time" name="time" />
          </div>

          <textarea
            name="notes"
            placeholder="Notes (goals, sensitivities, color history)"
          ></textarea>

          <label className="upload">
            <span>Optional: upload inspiration image</span>
            <input type="file" name="inspo" accept="image/*" />
          </label>

          <div className="book-actions">
            <button className="primary-btn" type="submit">
              Submit Request
            </button>
            <a className="secondary-btn" href="tel:+12125551234">
              Call Front Desk
            </a>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Luminé</h2>
            <span>Hair Studio</span>
          </div>

          <div className="footer-info">
            <h3>Contact Us</h3>
            <p>123 Fashion Avenue</p>
            <p>New York, NY 10001</p>
            <p>(212) 555-1234</p>
            <p>info@luminehairstudio.com</p>
          </div>

          <div className="footer-hours">
            <h3>Hours</h3>
            <p>Monday - Friday: 9am - 8pm</p>
            <p>Saturday: 8am - 6pm</p>
            <p>Sunday: 10am - 4pm</p>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">Pinterest</a>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} Luminé Hair Studio. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
