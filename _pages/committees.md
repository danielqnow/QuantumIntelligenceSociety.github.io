---
permalink: /committees/
title: "Committees - SQAI 2026"
author_profile: true
---

<style>
/* Removed navigation button styles in favor of text links */

/* 主要样式 */
.committee-container {
  margin: 2rem 0;
  scroll-margin-top: 2rem; /* 为锚点链接添加顶部空间 */
}

.committee-header,
.oc-header,
.tpc-header,
.sc-header,
.ab-header,
.about-header,
.contribute-header {
  border-left: 4px solid #98d4dc;
  padding-left: 1rem;
  margin-bottom: 1.5rem;
}

.committee-description {
  background-color: #f8f9fa;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 30px;
  font-size: 0.95em;
  border-left: 4px solid #0366d6;
}

/* 人员卡片样式 */
.committee-members {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.member-card {
  width: 200px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  text-align: center;
  margin-bottom: 20px;
}

.member-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.12);
}

.member-photo {
  width: 150px;
  height: 150px;
  margin: 20px auto 10px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #f0f0f0;
  background-position: center;
  background-size: cover;
}

.member-photo img {
  width: 100%;
  height: auto;
}

.member-info {
  padding: 10px 15px 20px;
}

.member-name {
  font-size: 0.9em;
  font-weight: bold;
  margin: 0;
  color: #333;
  text-decoration: none;
}

.member-name a {
  color: #0366d6;
  text-decoration: none;
  transition: color 0.2s;
}

.member-name a:hover {
  color: #0056b3;
  text-decoration: underline;
}

.member-title {
  font-size: 0.9em;
  color: #0366d6;
  margin: 5px 0;
}

.member-affiliation {
  font-size: 0.85em;
  color: #666;
  margin-bottom: 10px;
  font-style: italic;
}

.member-contact {
  font-size: 0.8em;
  color: #888;
}

/* 委员会类型样式 - 统一为蓝色 */
.oc-header,
.tpc-header,
.steering-header,
.advisory-header { border-color: #0366d6; }

.oc-description,
.tpc-description,
.steering-description,
.advisory-description { border-color: #0366d6; }

.oc-member .member-title,
.tpc-member .member-title,
.steering-member .member-title,
.advisory-member .member-title { color: #0366d6; }

/* 响应式设计 */
@media (max-width: 768px) {
  .committee-members {
    gap: 15px;
  }
  
  .member-card {
    width: 180px;
  }
  
  .member-photo {
    width: 120px;
    height: 120px;
  }
}

@media (max-width: 480px) {
  .committee-members {
    justify-content: center;
  }
  
  .member-card {
    width: 230px;
  }
  
  .member-photo {
    width: 150px;
    height: 150px;
  }
}

/* 美化About Committees部分 */
.committee-about-section {
  background-color: transparent;
  border-radius: 12px;
  padding: 1.5rem;
}

.committee-role-card {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.committee-role-card:hover {
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
}

.about-header {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #0366d6;
  position: relative;
  padding-bottom: 0.5rem;
}

.about-header:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: #0366d6;
  border-radius: 3px;
}

.role-descriptions {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.8rem;
}

.role-item {
  padding: 1.2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.role-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.role-item h4 {
  margin-top: 0;
  font-size: 1.1rem;
  color: #0366d6;
  border-bottom: 2px solid #e8f0fe;
  padding-bottom: 8px;
  margin-bottom: 12px;
}

.role-item h5 {
  margin-top: 1.2rem;
  font-size: 1rem;
}

.technical-areas {
  padding-left: 1.2rem;
  margin-top: 10px;
}

.technical-areas li {
  margin-bottom: 0.7rem;
  padding: 4px 0;
}

/* 美化Contribute部分 */
.committee-contribute-section {
  background: transparent;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.contribute-header {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #0366d6;
  position: relative;
  padding-bottom: 0.5rem;
}

.contribute-header:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background-color: #0366d6;
  border-radius: 3px;
}

.contribute-content {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: stretch;
}

.contribute-text {
  flex: 3;
  min-width: 250px;
  max-width: 100%;
}

.contribute-highlight {
  flex: 2;
  min-width: 200px;
  max-width: 100%;
  background-color: transparent;
  border-radius: 10px;
  padding: 1.2rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.contribute-highlight h3 {
  margin-top: 0;
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
}

.open-positions {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.position-item {
  display: flex;
  align-items: center;
  padding: 0.8rem;
  background-color: transparent;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.position-team {
  padding: 3px 8px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.8rem;
  margin-right: 10px;
  color: white;
}

.position-item:nth-child(1) .position-team,
.position-item:nth-child(2) .position-team,
.position-item:nth-child(3) .position-team {
  background-color: #0366d6;
}

.position-role {
  font-size: 0.9rem;
}

.contribute-action {
  margin-top: 1.5rem;
  font-weight: bold;
}

.contribute-email {
  color: #0366d6;
  text-decoration: underline;
  transition: all 0.2s;
}

.contribute-email:hover {
  color: #0056b3;
}

@media (max-width: 768px) {
  .contribute-content {
    flex-direction: column;
  }
  
  .role-descriptions {
    grid-template-columns: 1fr;
    gap: 1.3rem;
  }
  
  .role-item {
    padding: 1rem;
  }
  
  .role-item h4 {
    font-size: 1rem;
  }
}
</style>

![SQAI 2023 Committee](/images/sqaicommittee.jpg)
*SQAI 2023 Committee at National Taiwan University - including TAIA Joannie Hsieh, TAIA Jeff Peng, NTUAI President Steven Lu, and SQAI founder Austin Hua*

<style>
.quick-nav-container {
  background-color: #f5f5f5; 
  padding: 15px; 
  margin-bottom: 20px; 
  text-align: center;
  border-radius: 6px;
}

.quick-nav-title {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 1.1em;
  color: #444;
}

.committees-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
  gap: 8px 16px;
}

.info-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 8px;
  border-top: 1px solid rgba(0,0,0,0.05);
  margin-top: 4px;
  gap: 24px;
}

.nav-link {
  color: #56a3b7;
  text-decoration: none;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.nav-link:hover {
  color: #3a7f93;
  text-decoration: underline;
  background-color: rgba(86, 163, 183, 0.05);
}

.info-link {
  color: #56a3b7;
  font-size: 0.95em;
  opacity: 0.9;
}

.info-link:hover {
  opacity: 1;
}

@media (max-width: 768px) {
  .committees-nav {
    flex-direction: column;
    gap: 10px;
  }
  
  .info-nav {
    gap: 16px;
  }
  
  .nav-link {
    display: block;
    padding: 6px 8px;
  }
}
</style>

<div class="quick-nav-container">
  <div class="quick-nav-title">Quick Navigation</div>
  <div class="committees-nav">
    <a href="#organizing-committee" class="nav-link">Organizing Committee</a>
    <a href="#technical-program-committee" class="nav-link">Technical Program Committee</a>
    <a href="#steering-committee" class="nav-link">Steering Committee</a>
    <a href="#advisory-board" class="nav-link">Advisory Board</a>
  </div>
  <div class="info-nav">
    <a href="#about-committees" class="nav-link info-link">About Roles</a>
    <a href="#contribute" class="nav-link info-link">Join Us</a>
  </div>
</div>

<div id="organizing-committee" class="committee-container">
  <h2 class="committee-header oc-header">Organizing Committee (OC)</h2>
  
  <div class="committee-description oc-description">
    The Organizing Committee coordinates the conference logistics, communications, and overall structure of the event.
  </div>
  
  <div class="committee-members">
    <!-- Austin Hua -->
    <div class="member-card oc-member">
      <div class="member-photo" style="background-image: url('/images/austin_.png')"></div>
      <div class="member-info">
        <h3 class="member-name"><a href="https://www.linkedin.com/in/austin-hua/" target="_blank">Austin Hua</a></h3>
        <div class="member-title">General Chair</div>
        <div class="member-affiliation">SQAI Founder</div>
        <div class="member-contact">r11922203@csie.ntu.edu.tw</div>
      </div>
    </div>
    
    <!-- Chi-Chuan Hwang -->
    <div class="member-card oc-member">
      <div class="member-photo" style="background-image: url('/images/chichuanhwang.jpeg')"></div>
      <div class="member-info">
        <h3 class="member-name"><a href="https://researchoutput.ncku.edu.tw/en/persons/chi-chuan-hwang" target="_blank">Chi-Chuan Hwang</a></h3>
        <div class="member-title">TPC Chair</div>
        <div class="member-affiliation">NCKU ES Professor</div>
        <div class="member-contact">chchwang@mail.ncku.edu.tw</div>
      </div>
    </div>
    
    <!-- Tzu-Yin Chen -->
    <div class="member-card oc-member">
      <div class="member-photo" style="background-image: url('/images/tzuyinchen.jpg')"></div>
      <div class="member-info">
        <h3 class="member-name"><a href="https://www.linkedin.com/in/tzuyin-chen/" target="_blank">Tzu-Yin Chen</a></h3>
        <div class="member-title">Publicity Chair</div>
        <div class="member-affiliation">NTU LIS PhD Student</div>
        <div class="member-contact">d12126008@g.ntu.edu.tw</div>
      </div>
    </div>
    
    <!-- Yen-Chi Chen -->
    <div class="member-card oc-member">
      <div class="member-photo" style="background-image: url('/images/members/Yen-Chi.jpeg')"></div>
      <div class="member-info">
        <h3 class="member-name"><a href="https://www.linkedin.com/in/samuel-yen-chi-chen/" target="_blank">Samuel Yen-Chi Chen</a></h3>
        <div class="member-title">Publications Chair</div>
        <div class="member-affiliation">Lead Research Scientist</div>
        <div class="member-contact">ycchen1989@ieee.org</div>
      </div>
    </div>

    <div class="member-card oc-member">
      <div class="member-photo" style="background-image: url('/images/farley.jpg')"></div>
      <div class="member-info">
        <h3 class="member-name"><a href="https://www.linkedin.com/in/farley-warner-669054a/" target="_blank">Farley Warner (Pending Confirmation)</a></h3>
        <div class="member-title">Finance Co-Chair</div>
        <div class="member-affiliation">Contractor</div>
        <div class="member-contact">cw_netguru@yahoo.com</div>
      </div>
    </div>
    
    <!-- Bernadette Harding -->
    <div class="member-card oc-member">
      <div class="member-photo" style="background-image: url('/images/members/bernadette.jpg')"></div>
      <div class="member-info">
        <h3 class="member-name"><a href="https://www.linkedin.com/in/bernadette-harding-8769025/" target="_blank">Bernadette Harding</a></h3>
        <div class="member-title">Logistics Chair</div>
        <div class="member-affiliation">Startup Founder</div>
        <div class="member-contact">info@sqai.org</div>
      </div>
    </div>
    
    <!-- Jonas Yen -->
    <div class="member-card oc-member">
      <div class="member-photo" style="background-image: url('/images/members/jonas-yen.jpg')"></div>
      <div class="member-info">
        <h3 class="member-name"><a href="https://www.facebook.com/profile.php?id=100001078614941" target="_blank">Jonas Yen</a></h3>
        <div class="member-title">Collaborator</div>
        <div class="member-affiliation">NTU QML Researcher</div>
      </div>
    </div>
    
    <!-- Ryan Landay -->
    <div class="member-card oc-member">
      <div class="member-photo" style="background-image: url('/images/members/ryan-landay.jpg')"></div>
      <div class="member-info">
        <h3 class="member-name"><a href="https://www.linkedin.com/in/rlanday/" target="_blank">Ryan Landay</a></h3>
        <div class="member-title">Collaborator</div>
        <div class="member-affiliation">Founder, ML Engineer</div>
      </div>
    </div>
    
    <!-- Stathes Paganis -->
    <div class="member-card oc-member">
      <div class="member-photo" style="background-image: url('/images/members/stathes-paganis.jpg')"></div>
      <div class="member-info">
        <h3 class="member-name"><a href="https://www.phys.ntu.edu.tw/enphysics/paganis.html" target="_blank">Stathes Paganis</a></h3>
        <div class="member-title">Collaborator</div>
        <div class="member-affiliation">NTU Physics Professor</div>
        <div class="member-contact">paganis@phys.ntu.edu.tw</div>
      </div>
    </div>
    
    <!-- Alexander Frankish -->
    <div class="member-card oc-member">
      <div class="member-photo" style="background-image: url('/images/members/alexander-frankish.jpg')"></div>
      <div class="member-info">
        <h3 class="member-name"><a href="https://www.linkedin.com/in/alexander-frankish/" target="_blank">Alexander Frankish</a></h3>
        <div class="member-title">Collaborator</div>
        <div class="member-affiliation">A Pro Solutions Founder</div>
      </div>
    </div>
    
    <!-- TBD Positions -->
    <div class="member-card oc-member">
      <div class="member-photo" style="background-image: url('/images/members/tbd.jpg')"></div>
      <div class="member-info">
        <h3 class="member-name">Open Position</h3>
        <div class="member-title">Poster & Demos Chair</div>
        <div class="member-affiliation">To be determined</div>
        <div class="member-contact"><a href="mailto:info@sqai.org">Apply now</a></div>
      </div>
    </div>
    
    <!-- Sponsorship Chair Position -->
    <div class="member-card oc-member">
      <div class="member-photo" style="background-image: url('/images/members/tbd.jpg')"></div>
      <div class="member-info">
        <h3 class="member-name">Open Position</h3>
        <div class="member-title">Sponsorship Chair</div>
        <div class="member-affiliation">To be determined</div>
        <div class="member-contact"><a href="mailto:info@sqai.org">Apply now</a></div>
      </div>
    </div>
    
  </div>
</div>

<div id="technical-program-committee" class="committee-container">
  <h2 class="committee-header tpc-header">Technical Program Committee (TPC)</h2>
  
  <div class="committee-description tpc-description">
    The Technical Program Committee (TPC) is responsible for evaluating submissions, shaping the conference program, and ensuring the highest quality of scientific content.
  </div>
  
  <div class="committee-members">
    <!-- Chi-Chuan Hwang (again as TPC Chair) -->
    <div class="member-card tpc-member">
      <div class="member-photo" style="background-image: url('/images/chichuanhwang.jpeg')"></div>
      <div class="member-info">
        <h3 class="member-name"><a href="https://researchoutput.ncku.edu.tw/en/persons/chi-chuan-hwang" target="_blank">Chi-Chuan Hwang</a></h3>
        <div class="member-title">TPC Chair</div>
        <div class="member-affiliation">NCKU ES Professor</div>
        <div class="member-contact">chchwang@mail.ncku.edu.tw</div>
      </div>
    </div>
    
    <!-- Mark Chen -->
    <div class="member-card tpc-member">
      <div class="member-photo" style="background-image: url('/images/members/mark-chen.jpg')"></div>
      <div class="member-info">
        <h3 class="member-name"><a href="https://www.linkedin.com/in/mark-chen-next/" target="_blank">Mark Chen</a></h3>
        <div class="member-title">TPC Member</div>
        <div class="member-affiliation">Mindify AI Founder</div>
        <div class="member-contact">mark.chen.sstm@gmail.com</div>
      </div>
    </div>
    
    <!-- Daniel Ruiz -->
    <div class="member-card tpc-member">
      <div class="member-photo" style="background-image: url('/images/members/daniel-ruiz.jpg')"></div>
      <div class="member-info">
        <h3 class="member-name"><a href="https://www.linkedin.com/in/luisdanielruiz-in" target="_blank">Daniel Ruiz</a></h3>
        <div class="member-title">TPC Member</div>
        <div class="member-affiliation">Qnow.tech Founder</div>
        <div class="member-contact">daniel@qnow.tech</div>
      </div>
    </div>
    
    <!-- Yen-Chi Chen -->
    <div class="member-card tpc-member">
      <div class="member-photo" style="background-image: url('/images/members/Yen-Chi.jpeg')"></div>
      <div class="member-info">
        <h3 class="member-name"><a href="https://www.linkedin.com/in/samuel-yen-chi-chen/" target="_blank">Samuel Yen-Chi Chen</a></h3>
        <div class="member-title">Area Chair: QML</div>
        <div class="member-affiliation">Lead Research Scientist</div>
        <div class="member-contact">ycchen1989@ieee.org</div>
      </div>
    </div>
    
    <!-- Area Chair: QML (2 more) -->
    <div class="member-card tpc-member">
      <div class="member-photo" style="background-image: url('/images/members/tbd.jpg')"></div>
      <div class="member-info">
        <h3 class="member-name">Open Position</h3>
        <div class="member-title">Area Chair: QML</div>
        <div class="member-affiliation">To be determined</div>
        <div class="member-contact"><a href="mailto:info@sqai.org">Apply now</a></div>
      </div>
    </div>
    
    <div class="member-card tpc-member">
      <div class="member-photo" style="background-image: url('/images/members/tbd.jpg')"></div>
      <div class="member-info">
        <h3 class="member-name">Open Position</h3>
        <div class="member-title">Area Chair: QML</div>
        <div class="member-affiliation">To be determined</div>
        <div class="member-contact"><a href="mailto:info@sqai.org">Apply now</a></div>
      </div>
    </div>
    
    <!-- Area Chair: QAI Hardware -->
    <div class="member-card tpc-member">
      <div class="member-photo" style="background-image: url('/images/members/tbd.jpg')"></div>
      <div class="member-info">
        <h3 class="member-name">Open Position</h3>
        <div class="member-title">Area Chair: QAI Hardware</div>
        <div class="member-affiliation">To be determined</div>
        <div class="member-contact"><a href="mailto:info@sqai.org">Apply now</a></div>
      </div>
    </div>
    
    <!-- Area Chair: Quantum Data Science -->
    <div class="member-card tpc-member">
      <div class="member-photo" style="background-image: url('/images/members/tbd.jpg')"></div>
      <div class="member-info">
        <h3 class="member-name">Open Position</h3>
        <div class="member-title">Area Chair: Quantum Data Science</div>
        <div class="member-affiliation">To be determined</div>
        <div class="member-contact"><a href="mailto:info@sqai.org">Apply now</a></div>
      </div>
    </div>
    
    <!-- Area Chair: Hybrid Systems -->
    <div class="member-card tpc-member">
      <div class="member-photo" style="background-image: url('/images/members/tbd.jpg')"></div>
      <div class="member-info">
        <h3 class="member-name">Open Position</h3>
        <div class="member-title">Area Chair: Hybrid Systems</div>
        <div class="member-affiliation">To be determined</div>
        <div class="member-contact"><a href="mailto:info@sqai.org">Apply now</a></div>
      </div>
    </div>
    
    <!-- Area Chair: Applications -->
    <div class="member-card tpc-member">
      <div class="member-photo" style="background-image: url('/images/members/tbd.jpg')"></div>
      <div class="member-info">
        <h3 class="member-name">Open Position</h3>
        <div class="member-title">Area Chair: Applications</div>
        <div class="member-affiliation">To be determined</div>
        <div class="member-contact"><a href="mailto:info@sqai.org">Apply now</a></div>
      </div>
    </div>
    
    <!-- Area Chair: Benchmarking/Performance -->
    <div class="member-card tpc-member">
      <div class="member-photo" style="background-image: url('/images/members/tbd.jpg')"></div>
      <div class="member-info">
        <h3 class="member-name">Open Position</h3>
        <div class="member-title">Area Chair: Benchmarking/Performance</div>
        <div class="member-affiliation">To be determined</div>
        <div class="member-contact"><a href="mailto:info@sqai.org">Apply now</a></div>
      </div>
    </div>
    
    <!-- Area Chair: Ethics/Society/Philosophy -->
    <div class="member-card tpc-member">
      <div class="member-photo" style="background-image: url('/images/members/tbd.jpg')"></div>
      <div class="member-info">
        <h3 class="member-name">Open Position</h3>
        <div class="member-title">Area Chair: Ethics/Society/Philosophy</div>
        <div class="member-affiliation">To be determined</div>
        <div class="member-contact"><a href="mailto:info@sqai.org">Apply now</a></div>
      </div>
    </div>
  </div>
</div>

<div id="steering-committee" class="committee-container">
  <h2 class="committee-header steering-header">Steering Committee (SC)</h2>
  
  <div class="committee-description steering-description">
    The Steering Committee (SC) provides long-term vision and continuity for the conference series, ensuring the event grows and evolves to meet the needs of the quantum AI community.
  </div>
  
  <div class="committee-members">
    <!-- Austin Hua as Steering Committee Chair -->
    <div class="member-card steering-member">
      <div class="member-photo" style="background-image: url('/images/austin_.png')"></div>
      <div class="member-info">
        <h3 class="member-name"><a href="https://www.linkedin.com/in/austin-hua/" target="_blank">Austin Hua</a></h3>
        <div class="member-title">SC Chair</div>
        <div class="member-affiliation">SQAI Founder</div>
        <div class="member-contact">r11922203@csie.ntu.edu.tw</div>
      </div>
    </div>
    
    <!-- Open Position 1 -->
    <div class="member-card steering-member">
      <div class="member-photo" style="background-image: url('/images/members/tbd.jpg')"></div>
      <div class="member-info">
        <h3 class="member-name">Open Position</h3>
        <div class="member-title">SC Member</div>
        <div class="member-affiliation">To be determined</div>
        <div class="member-contact"><a href="mailto:info@sqai.org">Apply now</a></div>
      </div>
    </div>
    
    <!-- Open Position 2 -->
    <div class="member-card steering-member">
      <div class="member-photo" style="background-image: url('/images/members/tbd.jpg')"></div>
      <div class="member-info">
        <h3 class="member-name">Open Position</h3>
        <div class="member-title">SC Member</div>
        <div class="member-affiliation">To be determined</div>
        <div class="member-contact"><a href="mailto:info@sqai.org">Apply now</a></div>
      </div>
    </div>
  </div>
</div>

<div id="advisory-board" class="committee-container">
  <h2 class="committee-header advisory-header">Advisory Board</h2>
  
  <div class="committee-description advisory-description">
    Our Advisory Board consists of industry leaders and academic experts who provide strategic guidance and expertise.
  </div>
  
  <div class="committee-members">
    <!-- Lawrence Gasman -->
    <div class="member-card advisory-member">
      <div class="member-photo" style="background-image: url('/images/members/lawrencegasman.jpeg')"></div>
      <div class="member-info">
        <h3 class="member-name"><a href="https://www.linkedin.com/in/lawrence-gasman-7480511/" target="_blank">Lawrence Gasman</a></h3>
        <div class="member-title">Advisor</div>
        <div class="member-affiliation">President, IQT Research</div>
        <div class="member-contact">lawrence@insidequantumtechnology.com</div>
      </div>
    </div>
    
    <!-- Shih-Wei Liao -->
    <div class="member-card advisory-member">
      <div class="member-photo" style="background-image: url('/images/members/shih-wei-liao.jpg')"></div>
      <div class="member-info">
        <h3 class="member-name"><a href="https://ieeexplore.ieee.org/author/37086846354" target="_blank">Shih-Wei Liao</a></h3>
        <div class="member-title">Advisor</div>
        <div class="member-affiliation">NTU CS Professor</div>
        <div class="member-contact">liao@csie.ntu.edu.tw</div>
      </div>
    </div>
  </div>
</div>

<hr>

<div id="about-committees" class="committee-container committee-about-section">
  <h2 class="about-header">About Our Committees</h2>
  
  <div class="committee-role-card">
    <h3>Organizing Committee (OC)</h3>
    <p>The <strong>Organizing Committee (OC)</strong> oversees the overall planning and execution of the conference, including:</p>
    <ul>
      <li>Coordinating logistics (venue, schedule, communication)</li>
      <li>Managing sponsorships and partnerships</li>
      <li>Publicity and community engagement</li>
      <li>Platform and registration support</li>
      <li>On-site event coordination</li>
    </ul>
    <p>If you have skills in project coordination, event planning, community building, or media outreach, we'd love to have you on the OC.</p>
    
    <div class="role-descriptions">
      <div class="role-item">
        <h4>General Chair</h4>
        <p>The General Chair provides overall leadership for the symposium, setting the vision, coordinating all committees, and serving as the primary representative of SQAI to the broader community. This role involves strategic planning, stakeholder relationship management, and ensuring the event meets its academic and professional objectives.</p>
      </div>
      
      <div class="role-item">
        <h4>Publications Chair</h4>
        <p>The Publications Chair oversees the preparation, formatting, and dissemination of the conference proceedings and accepted papers. This includes coordinating with authors, managing the submission of camera-ready versions, ensuring proper formatting, and working with publishers or online platforms to make the research accessible to the community.</p>
      </div>
      
      <div class="role-item">
        <h4>Publicity Chair</h4>
        <p>The Publicity Chair is responsible for promoting the conference, increasing its visibility, and engaging the broader community. This includes managing social media, preparing press releases, coordinating outreach to academic and industry partners, and ensuring timely communication of important updates to potential attendees and contributors.</p>
      </div>
      
      <div class="role-item">
        <h4>Finance Chair</h4>
        <p>The Finance Chair oversees the conference budget, financial planning, and expense management. This role includes securing sponsorships, managing registration fees, allocating resources efficiently across all aspects of the conference, and ensuring financial transparency and accountability.</p>
      </div>
      
      <div class="role-item">
        <h4>Logistics Chair</h4>
        <p>The Logistics Chair coordinates all operational aspects of the conference, including venue arrangements, audiovisual setup, catering, accommodation coordination, transportation, and on-site management. This role ensures the smooth execution of the conference schedule and attendee experience.</p>
      </div>
      
      <div class="role-item">
        <h4>Poster & Demos Chair</h4>
        <p>The Poster & Demos Chair organizes interactive sessions that showcase cutting-edge research and technology demonstrations. Responsibilities include managing the submission and selection process, coordinating display logistics, scheduling presentations, and creating an engaging environment for knowledge exchange and networking.</p>
      </div>
      
      <div class="role-item">
        <h4>Sponsorship Chair</h4>
        <p>The Sponsorship Chair develops and implements strategies to secure financial support for the conference. This role involves creating sponsorship packages, building relationships with potential sponsors from industry and academia, negotiating agreements, ensuring sponsor visibility, and managing sponsor relationships before, during, and after the event to ensure mutual value.</p>
      </div>
    </div>
  </div>
  
  <div class="committee-role-card">
    <h3>Technical Program Committee (TPC)</h3>
    <p>The <strong>Technical Program Committee (TPC)</strong> ensures the academic and technical quality of the conference by:</p>
    <ul>
      <li>Reviewing paper submissions</li>
      <li>Designing the research track program</li>
      <li>Organizing keynote and panel sessions</li>
      <li>Curating posters, demos, and workshops</li>
      <li>Shaping the scientific direction of SQAI</li>
    </ul>
    <p>If you're an active researcher, academic, or practitioner in quantum computing, AI, or related fields — we welcome your involvement in shaping the technical backbone of SQAI.</p>
    
    <div class="role-descriptions">
      <div class="role-item">
        <h4>TPC Chair</h4>
        <p>The TPC Chair leads the Technical Program Committee, overseeing the entire paper review process and scientific program development. This role involves coordinating area chairs, managing the review timeline, ensuring review quality and fairness, resolving conflicts, and making final decisions on paper acceptance to maintain the highest scientific standards.</p>
      </div>
      
      <div class="role-item">
        <h4>TPC Member</h4>
        <p>TPC Members are experts in quantum computing, AI, or their intersection who evaluate submitted papers, provide detailed reviews, and contribute to the scientific quality of the conference. They assess technical merit, novelty, clarity, and relevance of submissions while participating in discussions to help reach consensus on acceptance decisions.</p>
      </div>
      
      <div class="role-item">
        <h4>Area Chairs</h4>
        <p>Area Chairs are subject-matter experts who supervise the review process for submissions in their specific technical domains. They assign papers to appropriate reviewers, moderate discussions among reviewers, provide recommendations to the TPC Chair, and help shape the technical sessions within their area of expertise.</p>
        
        <h5>Our Technical Areas:</h5>
        <ul class="technical-areas">
          <li><strong>Quantum Machine Learning (QML):</strong> Research at the intersection of quantum computing and machine learning, including quantum neural networks, quantum-enhanced ML algorithms, and theoretical advantages.</li>
          <li><strong>QAI Hardware:</strong> Development of quantum computing hardware specifically designed or optimized for AI applications, including specialized QPUs and hybrid classical-quantum systems.</li>
          <li><strong>Quantum Data Science:</strong> Techniques for quantum data analysis, quantum-enhanced statistical methods, and quantum approaches to handling large datasets.</li>
          <li><strong>Hybrid Systems:</strong> Architectures and algorithms that leverage both classical and quantum resources to achieve superior performance in AI tasks.</li>
          <li><strong>Applications:</strong> Practical implementations of quantum AI in various domains such as finance, healthcare, materials science, optimization, and more.</li>
          <li><strong>Benchmarking/Performance:</strong> Methods for evaluating, comparing, and validating the performance of quantum AI systems against classical counterparts.</li>
          <li><strong>Ethics/Society/Philosophy:</strong> Exploration of the broader implications of quantum AI, including ethical considerations, societal impact, and philosophical questions.</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="committee-role-card">
    <h3>Steering Committee (SC)</h3>
    <p>The <strong>Steering Committee</strong> guides the long-term direction and strategic development of the SQAI conference series by:</p>
    <ul>
      <li>Defining the overall mission and vision of SQAI</li>
      <li>Setting strategic goals for the conference's growth and evolution</li>
      <li>Providing continuity across conference editions</li>
      <li>Advising on major decisions regarding the conference's direction</li>
      <li>Helping build relationships with key stakeholders in academia and industry</li>
    </ul>
    <p>The Steering Committee ensures that SQAI maintains consistent high standards while adapting to the rapidly evolving quantum AI landscape.</p>
    
    <div class="role-descriptions">
      <div class="role-item">
        <h4>SC Chair</h4>
        <p>The Steering Committee Chair leads the strategic oversight group for SQAI, ensuring continuity and vision across conference editions. This role involves facilitating long-term planning, maintaining relationships with key stakeholders in the field, and providing guidance to each year's organizing committee to preserve the conference's identity and standards.</p>
      </div>
      
      <div class="role-item">
        <h4>SC Member</h4>
        <p>Steering Committee Members contribute to the long-term strategic development of SQAI. They help shape the conference's direction, identify emerging trends in quantum AI, establish connections with key communities and organizations, and ensure the event maintains its scientific quality and relevance across editions.</p>
      </div>
    </div>
  </div>
  
  <div class="committee-role-card">
    <h3>Advisory Board</h3>
    <p>The <strong>Advisory Board</strong> consists of distinguished experts from industry and academia who provide strategic guidance, field expertise, and valuable connections to the conference. They help identify emerging trends, suggest keynote speakers, recommend program innovations, and enhance the symposium's reputation and impact in the quantum AI community.</p>
  </div>
</div>

<div id="contribute" class="committee-container committee-contribute-section">
  <h2 class="contribute-header">Join Our Committees</h2>
  
  <div class="contribute-content">
    <div class="contribute-text">
      <p>We're actively recruiting passionate volunteers for all our committees. By joining SQAI, you'll:</p>
      <ul>
        <li>Connect with leading researchers and industry professionals in quantum AI</li>
        <li>Shape the direction of this emerging and transformative field</li>
        <li>Gain valuable experience in academic conference organization</li>
        <li>Be at the forefront of quantum computing and AI integration</li>
      </ul>
      <p>Whether your strengths are in technical reviews, event coordination, communications, or strategic planning, there's a meaningful role for you in building SQAI 2026.</p>
      <p class="contribute-action">Reach out via email: <a href="mailto:info@sqai.org" class="contribute-email">info@sqai.org</a></p>
    </div>
    
    <div class="contribute-highlight">
      <h3>Open Positions</h3>
      <div class="open-positions">
        <div class="position-item">
          <span class="position-team">TPC</span>
          <span class="position-role">Area Chairs (Multiple Areas)</span>
        </div>
        <div class="position-item">
          <span class="position-team">OC</span>
          <span class="position-role">Poster & Demos Chair</span>
        </div>
        <div class="position-item">
          <span class="position-team">OC</span>
          <span class="position-role">Sponsorship Chair</span>
        </div>
        <div class="position-item">
          <span class="position-team">SC</span>
          <span class="position-role">Steering Committee Members</span>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  // 这个脚本会检测缺失的图片并将其替换为默认图片
  document.addEventListener('DOMContentLoaded', function() {
    const memberPhotos = document.querySelectorAll('.member-photo');
    memberPhotos.forEach(function(photo) {
      const bgImage = getComputedStyle(photo).backgroundImage;
      if (bgImage === 'none' || bgImage.includes('undefined')) {
        photo.style.backgroundImage = "url('/images/members/default.jpg')";
      }
    });
  });
</script>
