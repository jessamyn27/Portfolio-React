import React from 'react';
import Resume2021JessamynMcTwigan from '../images/Resume2021JessamynMcTwigan.png';

export default function Contact() {
  return (
    <main className={"main-container"}>
                  <h2 id="resume"><span className={"first-letter"}>r</span>esume</h2>

      <section>
        <div className={"images hero-image"}>
          <a href="https://github.com/jessamyn27" target="_blank" rel="noopener noreferrer"><img src={Resume2021JessamynMcTwigan} alt="resume jessamyn mctwigan 2021"/>
          </a>
        </div>
      </section>
    </main>
  );
}
