---
permalink: /program/
title: "Program - SQAI 2026"
author_profile: true
---

<style>
/* Main Program Page Styles */
.program-container {
  margin-bottom: 1rem;
}

.program-header-image {
  width: 100%;
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 0.3rem;
}

.image-caption {
  text-align: center;
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 1rem;
}

.program-notice {
  background-color: transparent;
  border-left: 3px solid #2596be;
  padding: 0.7rem;
  margin: 0.8rem 0;
  border-radius: 0;
}

/* Timeline Design */
.timeline-container {
  background: transparent;
  border-radius: 0;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
}

.timeline-header {
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 0.5rem;
  margin-bottom: 0.8rem;
  color: #333;
  font-weight: 600;
}

.event-card {
  display: flex;
  border-left: 3px solid;
  padding: 0.6rem 0.8rem;
  margin-bottom: 0.7rem;
  background: transparent;
  border-radius: 0 6px 6px 0;
}

.taipei-event { border-color: #2596be; }
.dc-event { border-color: #2596be; }
.virtual-event { border-color: #2596be; }

.event-details {
  flex-grow: 1;
}

.event-location {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  margin-bottom: 0.3rem;
}

.location-taipei { background-color: transparent; border: 1px solid #2596be; color: #2596be; }
.location-dc { background-color: transparent; border: 1px solid #2596be; color: #2596be; }
.location-virtual { background-color: transparent; border: 1px solid #2596be; color: #2596be; }

.event-time {
  font-size: 0.85rem;
  color: #555;
}

.event-name {
  font-weight: 500;
  margin-bottom: 0.2rem;
}

/* Program Navigation */
.program-nav-container {
  margin: 1rem 0;
}

.program-nav {
  background: transparent;
  border-radius: 0;
  padding: 0.7rem 0;
  text-align: center;
}

.nav-header {
  margin-top: 0;
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
  color: #333;
  position: relative;
  padding-bottom: 0.5rem;
  display: inline-block;
}

.nav-header:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: #2596be;
  border-radius: 3px;
}

.nav-links {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 10px;
  max-width: 100%;
  margin: 0 auto;
}

.nav-button {
  padding: 8px 10px;
  border-radius: 6px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  color: white;
  text-align: center;
  font-size: 0.9rem;
  min-width: 120px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  white-space: nowrap;
}

.nav-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

/* Adjust button widths to fit on one line */
.overview-button { 
  background-color: #2596be; 
  min-width: 100px;
}
.schedule-button { 
  background-color: #2596be; 
  min-width: 100px;
}
.taipei-button { 
  background-color: #2596be; 
  min-width: 130px;
}
.dc-button { 
  background-color: #2596be; 
  min-width: 110px;
}
.virtual-button { 
  background-color: #2596be; 
  min-width: 130px;
}

/* Program Sections */
.program-section {
  margin: 1.5rem 0;
  padding: 0.8rem 0;
  background: transparent;
  border-radius: 0;
}

.section-title {
  position: relative;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: #222;
}

.section-title:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 3px;
  background-color: #2596be;
  border-radius: 3px;
}

.program-feature {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f0f0f0;
}

.program-feature:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.feature-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  margin-right: 0.8rem;
  background: transparent;
  border: 1px solid #2596be;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: #2596be;
}

.feature-content {
  flex-grow: 1;
}

.feature-title {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
  color: #333;
}

.feature-description {
  color: #555;
  line-height: 1.4;
  font-size: 0.95rem;
}

.location-tag {
  display: inline-block;
  padding: 0.15rem 0.5rem;
  font-size: 0.75rem;
  border-radius: 999px;
  margin-left: 0.4rem;
  vertical-align: middle;
}

.location-taipei-tag { background-color: transparent; border: 1px solid #2596be; color: #2596be; }
.location-dc-tag { background-color: transparent; border: 1px solid #2596be; color: #2596be; }
.location-virtual-tag { background-color: transparent; border: 1px solid #2596be; color: #2596be; }

/* Responsive */
@media (max-width: 992px) {
  .nav-links {
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .nav-button {
    flex: 1;
    min-width: 0;
    padding: 8px 12px;
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    align-items: center;
  }
  
  .nav-button {
    width: 100%;
    max-width: 300px;
  }
  
  .program-feature {
    flex-direction: column;
  }
  
  .feature-icon {
    margin-bottom: 1rem;
  }
}

/* Add space above iframe */
.schedule-iframe-container {
  margin-top: 0.8rem;
}
</style>

<div class="program-container">
  <img src="/images/quantumlaser.jpg" alt="Quantum Laser" class="program-header-image">
  <div class="image-caption">
    Source: <a href="https://www.quantum.gov/quantum-image-gallery/" target="_blank">quantum.gov</a> - Laser beam passes through a vapor cell of rubidium atoms to measure microwave fields
  </div>

  <div class="program-notice">
    <strong>Note:</strong> The program is subject to change. Final schedule will be announced by 12/31/2025.
  </div>

  <!-- Program Navigation -->
  <div class="program-nav-container">
    <div class="program-nav">
      <h4 class="nav-header">Navigate the Program</h4>
      <div class="nav-links">
        <a href="#overview" class="nav-button overview-button">📅 Overview</a>
        <a href="#schedule" class="nav-button schedule-button">🗓️ Schedule</a>
        <a href="#taipei" class="nav-button taipei-button">🇹🇼 Taipei</a>
        <a href="#dc" class="nav-button dc-button">🇺🇸 DC</a>
        <a href="#virtual" class="nav-button virtual-button">🌐 Virtual</a>
      </div>
    </div>
  </div>

  <!-- Program Overview Timeline -->
  <div id="overview" class="program-section">
    <h2 class="section-title">Overview</h2>
    <div class="timeline-container">
      <div class="event-card taipei-event">
        <div class="event-details">
          <span class="event-location location-taipei">Taipei, Taiwan</span>
          <h4 class="event-name">SQAI Taipei</h4>
          <p class="event-time">June 26–27, 2026</p>
        </div>
      </div>
      
      <div class="event-card dc-event">
        <div class="event-details">
          <span class="event-location location-dc">Washington, D.C.</span>
          <h4 class="event-name">SQAI Washington, D.C.</h4>
          <p class="event-time">June 27, 2026</p>
        </div>
      </div>
      
      <div class="event-card virtual-event">
        <div class="event-details">
          <span class="event-location location-virtual">Virtual (Both)</span>
          <h4 class="event-name">Award Ceremony (Online)</h4>
          <p class="event-time">June 28, 2026 @ 9:00 AM (Taipei)<br>June 27, 2026 @ 9:00 PM (DC)</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Full Schedule -->
  <div id="schedule" class="program-section">
    <h2 class="section-title">Schedule</h2>
    <p style="margin-bottom:0.6rem;">View our complete conference schedule for all events and sessions. This schedule is regularly updated.</p>
    <div class="schedule-iframe-container">
      <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSokOukw8E-OhH-E1xESJ0ooLVc2bcdySVJRVE9f1knAyAXZ8CXudRQB1JZiKrf0l8PDHFSltB0zzya/pubhtml?widget=true&amp;headers=false" width="100%" height="500" style="border:none;overflow:auto;"></iframe>
    </div>
  </div>

  <!-- SQAI 2026 Composition -->
  <div id="taipei" class="program-section">
    <h2 class="section-title">SQAI Taipei <span class="location-tag location-taipei-tag">Taipei</span></h2>

    <div class="program-feature">
      <div class="feature-icon">🎤</div>
      <div class="feature-content">
        <h3 class="feature-title">Keynote Speakers</h3>
        <p class="feature-description">
          Distinguished leaders from academia and industry will present cutting-edge research and insights on quantum computing, artificial intelligence, and their intersection. Each keynote is designed to inspire and inform attendees about the latest advancements and future directions in these fields.
        </p>
      </div>
    </div>

    <div class="program-feature">
      <div class="feature-icon">📝</div>
      <div class="feature-content">
        <h3 class="feature-title">Technical Sessions</h3>
        <p class="feature-description">
          Peer-reviewed research papers on quantum algorithms, quantum-enhanced AI, optimization, and hybrid architectures. Sessions include Q&A and are designed for researchers and advanced practitioners. All accepted papers will be presented in either oral or poster formats.
        </p>
      </div>
    </div>

    <div class="program-feature">
      <div class="feature-icon">🤝</div>
      <div class="feature-content">
        <h3 class="feature-title">"Quantum Meets AI" Networking Event</h3>
        <p class="feature-description">
          A dedicated networking session designed to foster collaborations between quantum computing experts and AI researchers. This event facilitates meaningful connections between academia, industry, and government representatives.
        </p>
      </div>
    </div>

    <div class="program-feature">
      <div class="feature-icon">📊</div>
      <div class="feature-content">
        <h3 class="feature-title">Poster Sessions</h3>
        <p class="feature-description">
          Interactive sessions showcasing emerging research and innovative projects. Presenters will be available to discuss their work in detail, providing an excellent opportunity for in-depth technical discussions and feedback.
        </p>
      </div>
    </div>

    <div class="program-feature">
      <div class="feature-icon">🖥️</div>
      <div class="feature-content">
        <h3 class="feature-title">Tech Business Exhibition & Demos</h3>
        <p class="feature-description">
          A showcase of cutting-edge quantum and AI technologies from leading companies and startups. Attendees can experience hands-on demonstrations of the latest tools, platforms, and applications at the intersection of quantum computing and artificial intelligence.
        </p>
      </div>
    </div>

    <div class="program-feature">
      <div class="feature-icon">☕</div>
      <div class="feature-content">
        <h3 class="feature-title">Networking Breaks</h3>
        <p class="feature-description">
          Catered lunches and coffee breaks provide informal networking opportunities throughout the conference. These breaks are strategically scheduled to encourage discussions and collaborations among attendees.
        </p>
      </div>
    </div>
  </div>

  <div id="dc" class="program-section">
    <h2 class="section-title">SQAI DC <span class="location-tag location-dc-tag">DC</span></h2>

    <div class="program-feature">
      <div class="feature-icon">🎤</div>
      <div class="feature-content">
        <h3 class="feature-title">Keynote Speakers</h3>
        <p class="feature-description">
          Distinguished leaders from government agencies and industry will present insights on quantum policy, national initiatives, and strategic directions. These keynotes will highlight the governmental perspective on quantum computing and AI integration.
        </p>
      </div>
    </div>

    <div class="program-feature">
      <div class="feature-icon">🤝</div>
      <div class="feature-content">
        <h3 class="feature-title">"Quantum Meets AI" Networking Event</h3>
        <p class="feature-description">
          A parallel networking session to the Taipei event, designed specifically for Washington, D.C. attendees. This event focuses on connecting policy makers, government representatives, industry leaders, and researchers in the U.S. capital.
        </p>
      </div>
    </div>

    <div class="program-feature">
      <div class="feature-icon">🖥️</div>
      <div class="feature-content">
        <h3 class="feature-title">Tech Business Exhibition & Demos</h3>
        <p class="feature-description">
          A showcase featuring U.S.-based quantum and AI companies, national laboratories, and government research initiatives. The exhibition highlights technologies with potential government and policy applications.
        </p>
      </div>
    </div>

    <div class="program-feature">
      <div class="feature-icon">🏛️</div>
      <div class="feature-content">
        <h3 class="feature-title">Government & Industry Panel</h3>
        <p class="feature-description">
          A regionally focused panel with public institutions, startups, and major tech companies. Topics include policy, commercialization, and international collaboration. Held live in DC and streamed to Taipei.
        </p>
      </div>
    </div>

    <div class="program-feature">
      <div class="feature-icon">☕</div>
      <div class="feature-content">
        <h3 class="feature-title">Networking Breaks</h3>
        <p class="feature-description">
          Catered lunches and coffee breaks provide informal networking opportunities. These breaks are designed to facilitate discussions between government officials, industry representatives, and researchers.
        </p>
      </div>
    </div>
  </div>

  <div id="virtual" class="program-section">
    <h2 class="section-title">SQAI Virtual <span class="location-tag location-virtual-tag">Virtual</span></h2>

    <div class="program-feature">
      <div class="feature-icon">🏆</div>
      <div class="feature-content">
        <h3 class="feature-title">Best Paper Award Ceremony</h3>
        <p class="feature-description">
          Our closing ceremony brings both communities together:<br>
          <strong>June 27, 2026 @ 9:00 PM (DC)</strong><br>
          <strong>June 28, 2026 @ 9:00 AM (Taipei)</strong><br><br>
          Winners will be honored and invited to give short remarks or lightning talks. The ceremony will recognize outstanding contributions to the field of quantum AI and celebrate the achievements of researchers from around the world.
        </p>
      </div>
    </div>

    <div class="program-feature">
      <div class="feature-icon">🌐</div>
      <div class="feature-content">
        <h3 class="feature-title">Virtual Participation</h3>
        <p class="feature-description">
          Select sessions from both Taipei and DC will be streamed live for virtual attendees. This hybrid format ensures global accessibility and participation in SQAI 2026, regardless of physical location.
        </p>
      </div>
    </div>
  </div>
</div>

<!-- You can add a detailed schedule, speaker list, or session breakdown below -->
