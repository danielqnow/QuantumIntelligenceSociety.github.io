---
permalink: /committee/
title: "Committee - SQAI 2026"
author_profile: true
---

<style>
/* 主要样式 */
.committee-container {
  margin: 2rem 0;
}

.committee-header {
  border-left: 4px solid #0366d6;
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

/* 委员会类型样式 */
.oc-header { border-color: #28a745; }
.oc-description { border-color: #28a745; }
.oc-member .member-title { color: #28a745; }

.tpc-header { border-color: #0366d6; }
.tpc-description { border-color: #0366d6; }
.tpc-member .member-title { color: #0366d6; }

.advisory-header { border-color: #6610f2; }
.advisory-description { border-color: #6610f2; }
.advisory-member .member-title { color: #6610f2; }

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
</style>

![SQAI 2023 Committee](/images/sqaicommittee.jpg)
*SQAI 2023 Committee at National Taiwan University - including TAIA Joannie Hsieh, TAIA Jeff Peng, NTUAI President Steven Lu, and SQAI founder Austin Hua*

<div class="committee-description">
The success of the <strong>Symposium for Quantum AI (SQAI)</strong> depends on the dedication of volunteers who help shape both the logistics and the technical quality of the event. Our committees include leaders, researchers, and organizers working together to build a meaningful experience for our community.
</div>

<div class="committee-container">
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
        <div class="member-title">Conference Chair</div>
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

    <div class="member-card oc-member">
      <div class="member-photo" style="background-image: url('/images/farley.jpg')"></div>
      <div class="member-info">
        <h3 class="member-name"><a href="https://www.linkedin.com/in/farley-warner-669054a/" target="_blank">Farley Warner</a></h3>
        <div class="member-title">Finance Chair</div>
        <div class="member-affiliation">DOD Contractor</div>
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
    
    <!-- Ran-Yu Chang -->
    <div class="member-card oc-member">
      <div class="member-photo" style="background-image: url('/images/members/ran-yu-chang.jpg')"></div>
      <div class="member-info">
        <h3 class="member-name"><a href="https://www.linkedin.com/in/ran-yu-chang-72a1041b6/" target="_blank">Ran-Yu Chang</a></h3>
        <div class="member-title">Collaborator</div>
        <div class="member-affiliation">EntangleTech Founder</div>
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
    
    <div class="member-card oc-member">
      <div class="member-photo" style="background-image: url('/images/members/tbd.jpg')"></div>
      <div class="member-info">
        <h3 class="member-name">Open Position</h3>
        <div class="member-title">Publications Chair</div>
        <div class="member-affiliation">To be determined</div>
        <div class="member-contact"><a href="mailto:info@sqai.org">Apply now</a></div>
      </div>
    </div>
  </div>
</div>

<div class="committee-container">
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
  </div>
</div>

<div class="committee-container">
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

<div class="committee-container">
  <h2>Want to Contribute?</h2>
  <p>We're actively recruiting contributors for both the OC and TPC.</p>
  <p>Reach out via email: <a href="mailto:info@sqai.org">info@sqai.org</a></p>
  <p>Whether you're interested in helping with logistics or reviewing papers, this is a great chance to be involved from the ground up in a rapidly growing field.</p>
</div>

<div class="committee-container">
  <h2>About Our Committees</h2>
  
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
  
  <h4>About the Publication Chair (OC)</h4>
  <p>The Publication Chair oversees the preparation, formatting, and dissemination of the conference proceedings and accepted papers. This includes coordinating with authors, managing the submission of camera-ready versions, ensuring proper formatting, and working with publishers or online platforms to make the research accessible to the community.</p>
  
  <h4>About the Publicity Chair (OC)</h4>
  <p>The Publicity Chair is responsible for promoting the conference, increasing its visibility, and engaging the broader community. This includes managing social media, preparing press releases, coordinating outreach to academic and industry partners, and ensuring timely communication of important updates to potential attendees and contributors.</p>
  
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
  
  <h4>About the Poster & Demos Chair</h4>
  <p>The Poster & Demos Chair organizes the poster and demonstration sessions, providing a platform for researchers, students, and industry partners to showcase their work. Responsibilities include managing the call for posters/demos, coordinating the review and selection process, and overseeing the logistics of the poster/demo sessions during the conference.</p>
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
