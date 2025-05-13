"use client";
import Image from 'next/image';

const HomePage = () => {
  return (
    <>
      <div id="page" className="site" style={{ fontFamily: 'Arial, sans-serif', color: '#333', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <header id="masthead" className="site-header" role="banner" style={{ backgroundColor: '#f0f0f0', padding: '20px 0', borderBottom: '1px solid #ccc', width: '100%' }}>
          <div className="site-header-main" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
            <div className="site-branding">
              <Image src="/images/GlobalLender-Logo-Transparent.png" alt="GlobalLender Logo" width={200} height={46} className="custom-logo" />
            </div>
            <nav id="site-navigation" className="main-navigation" role="navigation" aria-label="Primary Menu">
              <div className="menu-main-menu-container">
                <ul id="menu-main-menu" className="menu" style={{ display: 'flex', listStyle: 'none', gap: '20px', padding: 0 }}>
                  <li className="menu-item"><a href="#about" style={{ textDecoration: 'none', color: '#1F2937' }}>About Us</a></li>
                  <li className="menu-item"><a href="#services" style={{ textDecoration: 'none', color: '#1F2937' }}>Services</a></li>
                  <li className="menu-item"><a href="#contact" style={{ textDecoration: 'none', color: '#1F2937' }}>Contact</a></li>
                </ul>
              </div>
            </nav>
            <div className="header-buttons" style={{ display: 'flex', gap: '10px' }}>
              <a href="#learn-more" className="elementor-button elementor-button-link elementor-size-sm" style={{ backgroundColor: '#3B82F6', color: 'white', padding: '10px 15px', borderRadius: '5px', textDecoration: 'none' }}>Learn More</a>
              <a href="#get-started" className="elementor-button elementor-button-link elementor-size-sm" style={{ backgroundColor: '#1F2937', color: 'white', padding: '10px 15px', borderRadius: '5px', textDecoration: 'none' }}>Get Started</a>
            </div>
          </div>
        </header>

        <main id="content" className="site-content" style={{ flexGrow: 1, padding: '20px' }}>
          <section id="hero" className="elementor-section elementor-top-section elementor-element elementor-section-boxed elementor-section-height-default elementor-section-height-default" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#f8f9fa', padding: '50px', borderRadius: '10px', marginBottom: '30px' }}>
            <div className="elementor-container elementor-column-gap-default" style={{ flex: 1 }}>
              <div className="elementor-widget-wrap">
                <div className="elementor-element elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h1 className="elementor-heading-title elementor-size-default" style={{ fontSize: '2.5em', fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>
                      Empowering <span style={{ textDecoration: 'underline', color: '#3B82F6' }}>Financial Freedom</span> for Everyone.
                    </h1>
                  </div>
                </div>
                <div className="elementor-element elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <p style={{ fontSize: '1.1em', lineHeight: '1.6', color: '#555' }}>GlobalLender is a cutting-edge platform connecting borrowers and lenders, offering seamless transactions on your terms. Experience the freedom to choose options that suit your financial needs, with a user-friendly interface ensuring a smooth and efficient process.</p>
                  </div>
                </div>
                <div className="elementor-element elementor-widget elementor-widget-button" style={{ marginTop: '30px' }}>
                  <div className="elementor-widget-container">
                    <a href="#borrow" className="elementor-button elementor-button-link elementor-size-md" role="button" style={{ backgroundColor: '#3B82F6', color: 'white', padding: '15px 30px', borderRadius: '5px', textDecoration: 'none', marginRight: '10px' }}>
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">Borrow</span>
                      </span>
                    </a>
                    <a href="#invest" className="elementor-button elementor-button-link elementor-size-md" role="button" style={{ backgroundColor: '#1F2937', color: 'white', padding: '15px 30px', borderRadius: '5px', textDecoration: 'none' }}>
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">Invest</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-column elementor-col-50 elementor-top-column elementor-element" style={{ flex: 1, paddingLeft: '20px' }}>
              <div className="elementor-widget-wrap">
                <div className="elementor-element elementor-widget elementor-widget-image">
                  <div className="elementor-widget-container">
                    <Image src="/images/representation-user-experience-interface-design-scaled.jpg" alt="Financial Freedom Illustration" width={500} height={300} style={{ objectFit: 'cover', borderRadius: '8px' }} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Journey and Mission Section */}
          <section id="journey-mission" className="elementor-section elementor-section-boxed" style={{ padding: '50px 20px', backgroundColor: '#ffffff', borderRadius: '10px', marginBottom: '30px', textAlign: 'center' }}>
            <div className="elementor-container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div className="elementor-widget-wrap">
                <div className="elementor-element elementor-widget elementor-widget-heading" style={{ marginBottom: '30px' }}>
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default" style={{ fontSize: '2.2em', fontWeight: 'bold', color: '#333', marginBottom: '15px' }}>Our Journey and Mission</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-widget elementor-widget-text-editor" style={{ marginBottom: '30px' }}>
                  <div className="elementor-widget-container">
                    <p style={{ fontSize: '1.1em', lineHeight: '1.7', color: '#555', textAlign: 'left', maxWidth: '800px', margin: '0 auto 20px auto' }}>At GlobalLender, we are committed to empowering individuals and businesses through a seamless lending experience. Our core values of transparency, innovation, and integrity guide us in every transaction.</p>
                  </div>
                </div>
                <div className="elementor-element elementor-widget elementor-widget-image">
                  <div className="elementor-widget-container">
                    {/* Placeholder for the journey and mission image, assuming it will be named journey-mission.jpg - User provided screenshot 2025-05-10 at 12.36.41 AM.png for this */}
                    <Image src="/images/journey-mission.jpg" alt="Our Journey and Mission Illustration" width={960} height={540} style={{ objectFit: 'cover', borderRadius: '8px', maxWidth: '100%', height: 'auto' }} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Explore Our Diverse Range of Lending and Investment Solutions Section */}
          <section id="lending-investment-solutions" className="elementor-section" style={{ padding: '50px 20px', backgroundColor: '#000000', color: '#ffffff', borderRadius: '10px', marginBottom: '30px' }}>
            <div className="elementor-container" style={{ maxWidth: '1200px
', margin: '0 auto' }}>
              <div className="elementor-widget-wrap">
                <div className="elementor-element elementor-widget elementor-widget-heading" style={{ marginBottom: '20px', textAlign: 'left' }}>
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title" style={{ fontSize: '2.2em
', fontWeight: 'bold', marginBottom: '10px' }}>Explore Our Diverse Range of Lending and Investment Solutions</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-widget elementor-widget-text-editor" style={{ marginBottom: '40px', textAlign: 'left' }}>
                  <div className="elementor-widget-container">
                    <p style={{ fontSize: '1.1em
', lineHeight: '1.7' }}>At GlobalLender, we understand that every financial journey is unique. That’s why we offer a comprehensive suite of services designed to meet your specific needs, whether you’re seeking funding or looking to grow your wealth. Discover the possibilities with our tailored solutions.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
                  {/* Personal Loans Card */}
                  <div className="solution-card" style={{ backgroundColor: '#1A1A1A', padding: '20px', borderRadius: '8px', flex: 1, textAlign: 'left' }}>
                    {/* Placeholder for personal loans image - generation failed due to safety system. Original filename: personal-loans.jpg */}
                    <Image src="/images/personal-loans-placeholder.jpg" alt="Personal Loans" width={350} height={200} style={{ objectFit: 'cover', borderRadius: '8px', marginBottom: '15px', width: '100%' }} />
                    <h3 style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '10px' }}>Personal Loans: Achieve Your Dreams</h3>
                    <p style={{ fontSize: '1em', lineHeight: '1.6' }}>Our personal loans are designed to meet your individual financial needs. With flexible terms and competitive rates, you can choose the loan that fits your life.</p>
                  </div>
                  {/* Business Loans Card */}
                  <div className="solution-card" style={{ backgroundColor: '#1A1A1A', padding: '20px', borderRadius: '8px', flex: 1, textAlign: 'left' }}>
                    <Image src="/images/business-loans.jpg" alt="Business Loans" width={350} height={200} style={{ objectFit: 'cover', borderRadius: '8px', marginBottom: '15px', width: '100%' }} />
                    <h3 style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '10px' }}>Business Loans: Fuel Your Growth</h3>
                    <p style={{ fontSize: '1em', lineHeight: '1.6' }}>GlobalLender offers tailored business loans to help entrepreneurs and small businesses grow. Whether you need funds for inventory, equipment, or expansion, we have solutions for you.</p>
                  </div>
                  {/* Investment Opportunities Card */}
                  <div className="solution-card" style={{ backgroundColor: '#1A1A1A', padding: '20px', borderRadius: '8px', flex: 1, textAlign: 'left' }}>
                    <Image src="/images/investment-opportunities.jpg" alt="Investment Opportunities" width={350} height={200} style={{ objectFit: 'cover', borderRadius: '8px', marginBottom: '15px', width: '100%' }} />
                    <h3 style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '10px' }}>Investment Opportunities: Grow Your Wealth</h3>
                    <p style={{ fontSize: '1em', lineHeight: '1.6' }}>Explore various investment opportunities through our platform, allowing you to invest in loans and earn attractive returns. Join a community of investors shaping the future of finance.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
};

export default HomePage;

