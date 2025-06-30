---
permalink: /program/
title: "Program - SQAI 2026"
author_profile: true
---

<style>
/* Main Program Page Styles */
.program-container {
  margin-bottom: 2rem;
}

.program-header-image {
  width: 100%;
  max-width: 100%;
  border-radius: 12px;
  margin-bottom: 0.5rem;
}

.image-caption {
  text-align: center;
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 2rem;
}

.program-notice {
  background-color: #f8f9fa;
  border-left: 4px solid #0366d6;
  padding: 1rem;
  margin: 1.5rem 0;
  border-radius: 0 8px 8px 0;
}

/* Timeline Design */
.timeline-container {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  margin-bottom: 2rem;
}

.timeline-header {
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 0.8rem;
  margin-bottom: 1.2rem;
  color: #333;
  font-weight: 600;
}

.event-card {
  display: flex;
  border-left: 4px solid;
  padding: 0.8rem 1rem;
  margin-bottom: 1rem;
  background: #fcfcfc;
  border-radius: 0 8px 8px 0;
}

.taipei-event { border-color: #28a745; }
.dc-event { border-color: #0366d6; }
.virtual-event { border-color: #6610f2; }

.event-details {
  flex-grow: 1;
}

.event-location {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  margin-bottom: 0.5rem;
}

.location-taipei { background-color: #e7f5ea; color: #28a745; }
.location-dc { background-color: #e1f0ff; color: #0366d6; }
.location-virtual { background-color: #efe7ff; color: #6610f2; }

.event-time {
  font-size: 0.9rem;
  color: #555;
}

.event-name {
  font-weight: 500;
  margin-bottom: 0.2rem;
}

/* Program Navigation */
.program-nav-container {
  margin: 2.5rem 0;
}

.program-nav {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  text-align: center;
}

.nav-header {
  margin-top: 0;
  margin-bottom: 1.2rem;
  font-size: 1.4rem;
  color: #333;
  position: relative;
  padding-bottom: 0.8rem;
  display: inline-block;
}

.nav-header:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #28a745, #0366d6, #6610f2, #fd7e14, #20c997);
  border-radius: 3px;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.nav-button {
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  color: white;
  text-align: center;
  min-width: 160px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.nav-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.overview-button { background-color: #0366d6; }
.schedule-button { background-color: #28a745; }
.taipei-button { background-color: #fd7e14; }
.dc-button { background-color: #6610f2; }
.virtual-button { background-color: #20c997; }

/* Program Sections */
.program-section {
  margin: 2.5rem 0;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.section-title {
  position: relative;
  padding-bottom: 0.8rem;
  margin-bottom: 1.5rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: #333;
}

.section-title:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80px;
  height: 3px;
  background-color: #0366d6;
  border-radius: 3px;
}

.program-feature {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #f0f0f0;
}

.program-feature:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.feature-icon {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  margin-right: 1rem;
  background: #f0f4f8;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #0366d6;
}

.feature-content {
  flex-grow: 1;
}

.feature-title {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
}

.feature-description {
  color: #555;
  line-height: 1.5;
}

.location-tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.8rem;
  border-radius: 999px;
  margin-left: 0.5rem;
  vertical-align: middle;
}

.location-taipei-tag { background-color: #e7f5ea; color: #28a745; }
.location-dc-tag { background-color: #e1f0ff; color: #0366d6; }
.location-virtual-tag { background-color: #efe7ff; color: #6610f2; }

/* Responsive */
@media (max-width: 992px) {
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
  margin-top: 1.5rem;
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
        <a href="#overview" class="nav-button overview-button">📅 Quick Overview</a>
        <a href="#schedule" class="nav-button schedule-button">🗓️ Full Schedule</a>
        <a href="#taipei" class="nav-button taipei-button">🇹🇼 Taipei Events</a>
        <a href="#dc" class="nav-button dc-button">🇺🇸 DC Events</a>
        <a href="#virtual" class="nav-button virtual-button">🌐 Virtual Events</a>
      </div>
    </div>
  </div>

  <!-- Program Overview Timeline -->
  <div id="overview" class="program-section">
    <h2 class="section-title">Quick Overview</h2>
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
    <h2 class="section-title">Live Program Schedule</h2>
    <p>View our complete conference schedule for all events and sessions. This schedule is regularly updated.</p>
    <div class="schedule-iframe-container">
      <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSokOukw8E-OhH-E1xESJ0ooLVc2bcdySVJRVE9f1knAyAXZ8CXudRQB1JZiKrf0l8PDHFSltB0zzya/pubhtml?widget=true&amp;headers=false" width="100%" height="600" style="border:none;overflow:auto;"></iframe>
    </div>
  </div>

  <!-- SQAI 2026 Composition -->
  <div id="taipei" class="program-section">
    <h2 class="section-title">SQAI Taipei Events <span class="location-tag location-taipei-tag">Taipei</span></h2>

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
    <h2 class="section-title">SQAI Washington, D.C. Events <span class="location-tag location-dc-tag">DC</span></h2>

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
    <h2 class="section-title">SQAI Universal Events <span class="location-tag location-virtual-tag">Virtual</span></h2>

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
