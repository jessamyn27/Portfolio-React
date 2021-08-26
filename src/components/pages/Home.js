import React from 'react';
import profile_with_max from '../images/profile_with_max.png';

export default function Home() {
  return (
    
    <main className={"main-container"}>
    <section>
        <section>
        <h2 id="bio"><span className={"first-letter"}>b</span>io</h2>

            <a href="https://www.linkedin.com/in/jessamynmctwigan/" target="_blank" rel="noopener noreferrer"><img className={"profile-image"} src={profile_with_max}  alt="jessamyn mctwigan profile"/></a>
            <div>
                <p>
                    Software developer with a focus on empathy and accessibility. I am knowledgable in both front-end and back-end frameworks with a background in business, marketing, and design. I strive for creative and efficiant solutions in everything I do.
                </p>
                <p>
                    Moved to Austin TX 6 years ago to continue working in music production and events, I decided to pivot into software development, and did the General Assembly Coding Program. I landed a job at a tech company called Personify as part of their “EPIC internship
                    program” where I spent a year doing Quality Assurance, Front End Development, and then Full Stack Development. At the end of the year they promoted me for the what they needed most help with which was Front End Dev. I then
                    worked on the agile team for their Enterprise SaaS Application PersonifyGo. I am currently completing the UT Coding Program as I scout my next project.
                </p>
            </div>
        </section>
    </section>
</main>

  );
}
