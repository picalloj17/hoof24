import React from 'react';
import { Link } from 'react-router-dom';
import "./GermanyPage.css";
import dadandfriends from './images/dad-and-friends.jpeg';
import dadcamel from './images/dad-camel.jpeg';
import dadgrandpatrain from './images/dad-grandpa-ontrain.jpeg';
import daddnd from './images/dad-dnd.jpeg';


function GermanyPage() {
  return (
    <div className = "germany">
      <header>
        <h1>HOOF 2024</h1>
      </header>
      <nav>
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to="/germany">Early Life in Germany</Link></li>
          <li><Link to="/back-to-states">Back to the States</Link></li>
          <li><Link to="/new-beginning">A New Beginning</Link></li>
          <li><Link to="/photo-gallery">Photo Gallery</Link></li>
        </ul>
      </nav>
      <h2>Early Life in Germany</h2>
      <p>Steve moved to Germany with his family when he was a child, as his father was stationed on a military base with the Corps of Engineers and his mother worked as a school nurse. 
        The vibrant and supportive community on the base provided Steve with a stable foundation, while the proximity to various European countries opened up a world of adventure. 
        His childhood and teenage years were marked by trips to historic cities, picturesque landscapes, and vibrant cultures, each journey adding to his treasure trove of experiences. 
        Steve embraced every opportunity to explore. Along the way, he formed lifelong friendships with local peers, sharing laughter and creating memories that would last a lifetime. 
        These formative years abroad, supported by his parents' roles in the community, instilled in him a deep appreciation for diverse perspectives and a love for exploration. 
        As he prepared to start college, Steve moved back to the United States, carrying with him a rich tapestry of experiences and a network of friends from across the continent. 
        Ready to embark on the next chapter of his life, he looked forward to applying the lessons learned from his European adventures to his new journey in higher education.</p>
        <br />
        <br />
        <br />
      <p>While in Germany, Steve delved deeply into his love for history, a passion that blossomed through frequent visits to the country's myriad castles and historic sites. 
        He and his friends became avid history buffs, soaking up information from every tour and museum visit. 
        Their enthusiasm and knowledge grew so extensive that they began hosting impromptu, fake tours for unsuspecting tourists. 
        These playful yet informative tours became a cherished pastime, 
        as Steve and his friends relished the opportunity to share their insights and stories, often blending historical facts with their own creative twists. 
        These experiences not only deepened Steve's appreciation for history but also honed his skills in storytelling and public speaking, further enriching his adventurous and 
        educational years in Europe.</p>
        <br />
        <br />
        <br />
      <p>Steve holds cherished memories of his time in Europe close to his heart and dreams of returning one day to revisit the historic sites and cultural wonders that shaped his 
        passion for history. However, as he embarks on the next chapter of his life in America, Steve eagerly anticipates pursuing his love for history through teaching. 
        He looks forward to imparting his knowledge and enthusiasm to students, hoping to inspire them with the same curiosity and appreciation for the past that 
        captivated him in his youth. Yet, Steve knows his journey is just beginning, with many unforeseen challenges and opportunities ahead that will continue to shape his story in ways he 
        cannot yet imagine.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      <div className="container">
      <div className="image-container">
        <img src={dadandfriends} alt="Image 1" className="image" />
        <div className="overlay">
          <div className="text">Steve and the crew sharing a laugh of which probably was from him making a right up to the line joke, moments before he most likely took it to far trying too one-up himself.</div>
        </div>
      </div>
      <div className="image-container">
        <img src={dadcamel} alt="Image 2" className="image" />
        <div className="overlay">
          <div className="text">Riding a camel for the first time was an unforgettable memory for Steve, still blissfully unaware in this photo of his allergy to camels...</div>
        </div>
      </div>
      <div className="image-container">
        <img src={dadgrandpatrain} alt="Image 3" className="image" />
        <div className="overlay">
          <div className="text">A fond trip taken with his father, holding a souvenir that will be the first of many from his time in Europe</div>
        </div>
        </div>
        <div className="image-container">
        <img src={daddnd} alt="Image 4" className="image" />
        <div className="overlay">
          <div className="text">The ultimate game night, DnD, in this photo most likely making up their own rules as they even at a young age knew they could make a better game</div>
        </div>
      </div>
    </div>
    <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    </div>
    
  );
}

export default GermanyPage;
