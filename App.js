import React from 'react';
import './App.css';
import './components/searchcomponent';

function App() {
    return (
        <div className="App">
            <nav>
                <a href="/logo.png" className="logo">
                    <img src="/images/logo.png" alt="Logo" />

                </a>
                <label className="menu-icon" htmlFor="menu-button"></label>
                <span className="nav-icon"></span>

                <ul className="menu">
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/Anime Songs">Anime Songs</a></li>
                    <li><a href="/Latest Animes">Latest Animes</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Contact Us">Contact Us</a></li>
                </ul>
                <searchcomponent />
                <div className="wrapper">
                    <div className="search">
                        <input type="text" placeholder="Type to Search" />
                        <div className="autocom-box">
                            <ul>
                                <li>Attack on Titan (Final Season)</li>
                                <li>Jujutsu Kaisen</li>
                                <li>Our Last Crusade or Rise of The New World</li>
                                <li>Noblesse</li>
                                <li>The Irregular at Magic High School 2 (Visitor Arc)</li>
                                <li>Akudama Drive</li>
                                <li>Date A Bullet (Dead or Bullet)</li>
                                <li>King's Raid (Successors of the Will)</li>
                            </ul>
                        </div>
                        <div className="icon"><i className="fas fa-search"></i></div>
                    </div>
                </div>
            </nav>

            <main>
                <section id="main-showcase">
                    <h1 className="showcase-heading">Anime</h1>
                    <ul id="autoWidth" className="cs-hidden">
                        <li className="item-a">
                            <div className="showcase-box">
                                <img src="{Attack on Titan (Final Season)}" alt="Attack on Titan (Final Season)" />
                            </div>
                        </li>
                        <li className="item-b">
                            <div className="showcase-box">
                                <img src="{Jujutsu Kaisen}" alt="Jujutsu Kaisen" />
                            </div>
                        </li>
                        <li className="item-c">
                            <div className="showcase-box">
                                <img src="{Our Last Crusade or Rise of The New World}" alt="Our Last Crusade or Rise of The New World" />
                            </div>
                        </li>
                        <li className="item-d">
                            <div className="showcase-box">
                                <img src="{Noblesse}" alt="Noblesse" />
                            </div>
                        </li>
                        <li className="item-e">
                            <div className="showcase-box">
                                <img src="{The Irregular at Magic High School 2 (Visitor Arc)}" alt="The Irregular at Magic High School 2 (Visitor Arc)" />
                            </div>
                        </li>
                    </ul>
                </section>

                <section id="latest-anime">
                    <h2 className="latest-heading">Latest Animes</h2>
                    <ul id="autoWidth2" className="cs-hidden">
                        <li className="item-a">
                            <article className="latest-box">
                                <div className="latest-b-img">
                                    <img src="images/Attack on Titan (Final Season).jpg" alt="Attack on Titan (Final Season)" />
                                </div>
                                <div className="latest-b-text">
                                    <strong>Attack on Titan (Final Season)</strong>
                                    <p>Fall 2020</p>
                                    <p>Studio: MAPPA</p>
                                    <p>Source: Manga</p>
                                    <p>Genres: Action, Military, Fantasy</p>
                                </div>
                            </article>
                        </li>
                        <li class="item-b">
                            <div class="latest-box">
                                <div class="latest-b-img">
                                    <img src="images/Jujutsu Kaisen.jpg" alt="Jujutsu Kaisen" />
                                </div>
                                <div class="latest-b-text">
                                    <strong>Jujutsu Kaisen</strong>
                                    <p>Fall 2020</p>
                                    <p>Studio:MAAPA</p>
                                    <p>Source:Manga</p>
                                    <p>Genres:Action,Fantasy,Supernatural,School</p>
                                </div>
                            </div>
                        </li>
                        <li class="item-c">
                            <div class="latest-box">
                                <div class="latest-b-img">
                                    <img src="images/Noblesse.jpg" alt="Noblesse" />
                                </div>
                                <div class="latest-b-text">
                                    <strong>Noblesse</strong>
                                    <p>Fall 2020</p>
                                    <p>Studio:Production I.G</p>
                                    <p>Source:Webtoon</p>
                                    <p>Genres:Action,Fantasy,Vampire</p>
                                </div>
                            </div>
                        </li>
                        <li class="item-d">
                            <div class="latest-box">
                                <div class="latest-b-img">
                                    <img src="images/Our Last Crusade or Rise of The New World.jpg" alt="Our Last Crusade or Rise of The New World" />
                                </div>
                                <div class="latest-b-text">
                                    <strong>Our Last Crusade or Rise of The New World</strong>
                                    <p>Fall 2020</p>
                                    <p>Studio:SILVER LINK</p>
                                    <p>Source:Light Novel</p>
                                    <p>Genres:Action,Fantasy</p>
                                </div>
                            </div>
                        </li>
                        <li class="item-e">
                            <div class="latest-box">
                                <div class="latest-b-img">
                                    <img src="images/Akudama Drive.jpg" alt="Akudama Drive" />
                                </div>
                                <div class="latest-b-text">
                                    <strong>Akudama Drive</strong>
                                    <p>Fall 2020</p>
                                    <p>Studio:Pierrot</p>
                                    <p>Source:Original</p>
                                    <p>Genres:Sci-Fi,Action</p>
                                </div>
                            </div>
                        </li>
                        <li class="item-f">
                            <div class="latest-box">
                                <div class="latest-b-img">
                                    <img src="images/The Irregular at Magic High School 2 (Visitor Arc).jpg" alt="The Irregular at Magic High School 2 (Visitor Arc)" />
                                </div>
                                <div class="latest-b-text">
                                    <strong>The Irregular at Magic High School 2 (Visitor Arc)</strong>
                                    <p>Fall 2020</p>
                                    <p>Studio:8bit</p>
                                    <p>Source:Light Novel</p>
                                    <p>Genres:Magic,Sci-Fi,School</p>
                                </div>
                            </div>
                        </li>
                        <li class="item-g">
                            <div class="latest-box">
                                <div class="latest-b-img">
                                    <img src="images/King's Raid (Successors of the Sword).jpg" alt="King's Raid (Successors of the Sword)" />
                                </div>
                                <div class="latest-b-text">
                                    <strong>King's Raid (Successors of the Will)</strong>
                                    <p>Fall 2020</p>
                                    <p>Studio:OLM,Sunrise Beyond</p>
                                    <p>Source:Game</p>
                                    <p>Genres:Action,Fantasy,Magic</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>

                <section id="anime-list">
                    <h2>Animes</h2>
                    <div className="animes-box">
                        <div className="animes-img">
                            <div className="quality">HDRip</div>
                            <img src="images/Attack on Titan (Final Season).jpg" alt="Attack on Titan (Final Season)" />
                        </div>
                        <a href="/ Attack on Titan (Final Season)">
                            Attack on Titan (Final Season) (2020) [In Japanese] With English Subtitles | HDRip 1080px HD
                        </a>
                    </div>
                    {/* Add remaining anime items */}
                </section>

                <div className="pagination">
                    <a href="/Previous">Previous</a>
                    <a href="/Next">Next</a>
                </div>
            </main>

            <footer>
                <p>NK Kross, Ltd Consumer Website</p>
                <p>&copy; 2023 - NK Kross</p>
            </footer>
        </div>
    );
}

export default App;
