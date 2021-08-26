import React from 'react';
import weatherapp from '../images/weather-app.png';
import Stargazers from '../images/Stargazers.png';
import SearchForAliens from '../images/Search-For-Aliens.png';
import quizme from '../images/quiz-me.png';
import mortcalc from '../images/mort-calc.png';
import CodingIsTheFuture from '../images/Coding-Is-The-Future.png';

export default function About() {
  return (
    <main className={"main-container"}>
       <section>
            <h2 id="work"><span className={"first-letter"}>w</span>ork</h2>

            <section className={"images-container"}>

                <div className={"images hero-image"}>
                    <h3>Stargazers</h3>
                    <h3>Constellations and Nasa API Data by City</h3>
                    <a href="https://jessamyn27.github.io/Stargazers-App-NASA-API/"target="_blank">website </a> <a href="https://jessamyn27.github.io/Stargazers-App-NASA-API/" target="_blank">| github repo</a>
                    <a href="https://jessamyn27.github.io/Stargazers-App-NASA-API/" target="_blank" rel="noopener noreferrer"><img src={Stargazers} alt="stargazers website"/>
                    </a>
                   
                </div>
                <div className={"images sidekick-image"}>
                    <h3>Responsive Mortgage Calculator</h3>
                    <a href="http://my-mortgage-calculator.surge.sh/"target="_blank">website </a> <a href="https://github.com/jessamyn27/mortgage-calculator" target="_blank">| github repo</a>
                    <a href="http://my-mortgage-calculator.surge.sh/" target="_blank" rel="noopener noreferrer"><img src={mortcalc} alt="mortgage calculator app"/>
                    </a>
                </div>
                <div className={"images sidekick-image"}>
                    <h3>Search For Aliens</h3>
                    <a href="https://jessamyn27.github.io/Search_For_Aliens/"target="_blank">website </a> <a href="https://github.com/jessamyn27/Search_For_Aliens" target="_blank">| github repo</a>
                    <a href="https://jessamyn27.github.io/Search_For_Aliens/" target="_blank" rel="noopener noreferrer"><img src={SearchForAliens} alt="search for aliens app website"/>
                    </a>
                </div>
                <div className={"images baby-image"}>
                    <h3>Weather By City</h3>
                    <a href="https://jessamyn27.github.io/Weather-3rd-Party-API"target="_blank">website </a> <a href="https://github.com/jessamyn27/Weather-3rd-Party-API" target="_blank">| github repo</a>
                    <a href="https://jessamyn27.github.io/Weather-3rd-Party-API" target="_blank" rel="noopener noreferrer"><img src={weatherapp} alt="weather by city app website"/>
                    </a>
                </div>
                <div className={"images baby-image"}>
                    <h3>Coding Is the Future</h3>
                    <a href="https://flashcard-fun-app.firebaseapp.com/"target="_blank">website </a> <a href="https://github.com/jessamyn27/Coding_Is_The_Future_App" target="_blank">| github repo</a>
                    <a href="https://flashcard-fun-app.firebaseapp.com/" target="_blank" rel="noopener noreferrer"><img src={CodingIsTheFuture} alt="coding is the future app website"/>
                    </a>
                </div>
                <div className={"images baby-image"}>
                    <h3>Quiz Me Game</h3>
                    <a href="https://jessamyn27.github.io/Coding-Quiz/"target="_blank">website </a> <a href="https://github.com/jessamyn27/Coding-Quiz" target="_blank">| github repo</a>
                    <a href="https://jessamyn27.github.io/Coding-Quiz/" target="_blank" rel="noopener noreferrer"><img src={quizme} alt="quiz me game website"/>
                    </a>
                </div>
            </section>
            </section>
    </main>
  );
}
