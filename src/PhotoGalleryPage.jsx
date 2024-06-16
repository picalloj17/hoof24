import React from 'react';
import { Link } from 'react-router-dom';
import "./PhotoGallery.css";
import dadfriends from "./images/dad-and-friends.jpeg";
import dadfriends3 from "./images/dad-and-friends3.jpeg";
import dadkids from "./images/dad-and-kids.jpeg";
import dadbeach from "./images/dad-beach.jpeg";
import dadcamel from "./images/dad-camel.jpeg";
import daddnd from "./images/dad-dnd.jpeg";
import daddnd2 from "./images/dad-dnd2.jpeg";
import dadflowers from "./images/dad-flowers.jpeg";
import dadforest from "./images/dad-forest.jpeg";
import dadgrandpatrain from "./images/dad-grandpa-ontrain.jpeg";
import dadgrandpastatue from "./images/dad-grandpa-statue.jpeg";
import dadgreatgrandma from "./images/dad-greatgrandma.jpeg";
import dadgreatgrandpa from "./images/dad-greatgrandpa.jpeg";
import dadheadshot from "./images/dad-headshot.jpeg";
import dadheadshot2 from "./images/dad-headshot2.jpeg";
import dadhighschool from "./images/dad-highschool.jpeg";
import dadhighschool2 from "./images/dad-hs-2.jpeg";
import dadkids2 from "./images/dad-kids2.jpeg";
import dadspeech from "./images/dad-speach.jpg";
import famgrandpa from "./images/family-with-grandpa.jpeg";
import dadruins from "./images/grandpa-freeman-dad-ruins.jpeg";
import marriage from "./images/marriage.jpeg";
import youngdad from "./images/young-dad.jpeg";
import youngdad2 from "./images/young-dad-2.jpeg";
import youngdadtown from "./images/young-dad-town.jpeg";
import younggrandpa from "./images/young-grandpa-freeman.jpeg";

function PhotoGallery() {
  return (
    <div className = "photogallery">
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
      <h2>The Photo Gallery</h2>
      <p>A digital collection of some of Steves most favorite memories</p>
      <br />
      <br />
      <br />
      <br />

      <div className="container">
      <div className="image-container">
        <img src={dadfriends} alt="Image 1" className="image" />
        <div className="overlay">
          <div className="text">Steve and the crew sharing a laugh of which probably was from him making a right up to the line joke, moments before he most likely took it to far trying too one-up himself.</div>
        </div>
      </div>
      <div className="image-container">
        <img src={dadfriends3} alt="Image 2" className="image" />
        <div className="overlay">
          <div className="text">Riding a camel for the first time was an unforgettable memory for Steve, still blissfully unaware in this photo of his allergy to camels...</div>
        </div>
      </div>
      <div className="image-container">
        <img src={dadbeach} alt="Image 3" className="image" />
        <div className="overlay">
          <div className="text">A fond trip taken with his father, holding a souvenir that will be the first of many from his time in Europe</div>
        </div>
        </div>
        <div className="image-container">
        <img src={dadcamel} alt="Image 4" className="image" />
        <div className="overlay">
          <div className="text">The ultimate game night, DnD, in this photo most likely making up their own rules as they even at a young age knew they could make a better game</div>
        </div>
      </div>
    </div>
    <br />
      <br />
      <br />

    <div className="container">
      <div className="image-container">
        <img src={daddnd} alt="Image 1" className="image" />
        <div className="overlay">
          <div className="text">Steve and the crew sharing a laugh of which probably was from him making a right up to the line joke, moments before he most likely took it to far trying too one-up himself.</div>
        </div>
      </div>
      <div className="image-container">
        <img src={daddnd2} alt="Image 2" className="image" />
        <div className="overlay">
          <div className="text">Riding a camel for the first time was an unforgettable memory for Steve, still blissfully unaware in this photo of his allergy to camels...</div>
        </div>
      </div>
      <div className="image-container">
        <img src={dadflowers} alt="Image 3" className="image" />
        <div className="overlay">
          <div className="text">A fond trip taken with his father, holding a souvenir that will be the first of many from his time in Europe</div>
        </div>
        </div>
        <div className="image-container">
        <img src={dadforest} alt="Image 4" className="image" />
        <div className="overlay">
          <div className="text">The ultimate game night, DnD, in this photo most likely making up their own rules as they even at a young age knew they could make a better game</div>
        </div>
      </div>
    </div>
    <br />
      <br />
      <br />


    <div className="container">
      <div className="image-container">
        <img src={dadgrandpatrain} alt="Image 1" className="image" />
        <div className="overlay">
          <div className="text">Steve and the crew sharing a laugh of which probably was from him making a right up to the line joke, moments before he most likely took it to far trying too one-up himself.</div>
        </div>
      </div>
      <div className="image-container">
        <img src={dadgrandpastatue} alt="Image 2" className="image" />
        <div className="overlay">
          <div className="text">Riding a camel for the first time was an unforgettable memory for Steve, still blissfully unaware in this photo of his allergy to camels...</div>
        </div>
      </div>
      <div className="image-container">
        <img src={dadgreatgrandpa} alt="Image 3" className="image" />
        <div className="overlay">
          <div className="text">A fond trip taken with his father, holding a souvenir that will be the first of many from his time in Europe</div>
        </div>
        </div>
        <div className="image-container">
        <img src={dadgreatgrandma} alt="Image 4" className="image" />
        <div className="overlay">
          <div className="text">The ultimate game night, DnD, in this photo most likely making up their own rules as they even at a young age knew they could make a better game</div>
        </div>
      </div>
    </div>
    <br />
      <br />
      <br />


    <div className="container">
      <div className="image-container">
        <img src={dadheadshot} alt="Image 1" className="image" />
        <div className="overlay">
          <div className="text">Steve and the crew sharing a laugh of which probably was from him making a right up to the line joke, moments before he most likely took it to far trying too one-up himself.</div>
        </div>
      </div>
      <div className="image-container">
        <img src={dadheadshot2} alt="Image 2" className="image" />
        <div className="overlay">
          <div className="text">Riding a camel for the first time was an unforgettable memory for Steve, still blissfully unaware in this photo of his allergy to camels...</div>
        </div>
      </div>
      <div className="image-container">
        <img src={dadhighschool} alt="Image 3" className="image" />
        <div className="overlay">
          <div className="text">A fond trip taken with his father, holding a souvenir that will be the first of many from his time in Europe</div>
        </div>
        </div>
        <div className="image-container">
        <img src={dadhighschool2} alt="Image 4" className="image" />
        <div className="overlay">
          <div className="text">The ultimate game night, DnD, in this photo most likely making up their own rules as they even at a young age knew they could make a better game</div>
        </div>
      </div>
    </div>
    <br />
      <br />
      <br />



    <div className="container">
      <div className="image-container">
        <img src={famgrandpa} alt="Image 1" className="image" />
        <div className="overlay">
          <div className="text">Steve and the crew sharing a laugh of which probably was from him making a right up to the line joke, moments before he most likely took it to far trying too one-up himself.</div>
        </div>
      </div>
      <div className="image-container">
        <img src={dadruins} alt="Image 2" className="image" />
        <div className="overlay">
          <div className="text">Riding a camel for the first time was an unforgettable memory for Steve, still blissfully unaware in this photo of his allergy to camels...</div>
        </div>
      </div>
      <div className="image-container">
        <img src={youngdadtown} alt="Image 3" className="image" />
        <div className="overlay">
          <div className="text">A fond trip taken with his father, holding a souvenir that will be the first of many from his time in Europe</div>
        </div>
        </div>
        <div className="image-container">
        <img src={dadspeech} alt="Image 4" className="image" />
        <div className="overlay">
          <div className="text">The ultimate game night, DnD, in this photo most likely making up their own rules as they even at a young age knew they could make a better game</div>
        </div>
      </div>
    </div>
    <br />
      <br />
      <br />



    <div className="container">
      <div className="image-container">
        <img src={dadkids} alt="Image 1" className="image" />
        <div className="overlay">
          <div className="text">Steve and the crew sharing a laugh of which probably was from him making a right up to the line joke, moments before he most likely took it to far trying too one-up himself.</div>
        </div>
      </div>
      <div className="image-container">
        <img src={dadkids2} alt="Image 2" className="image" />
        <div className="overlay">
          <div className="text">Riding a camel for the first time was an unforgettable memory for Steve, still blissfully unaware in this photo of his allergy to camels...</div>
        </div>
      </div>
      <div className="image-container">
        <img src={youngdad} alt="Image 3" className="image" />
        <div className="overlay">
          <div className="text">A fond trip taken with his father, holding a souvenir that will be the first of many from his time in Europe</div>
        </div>
        </div>
        <div className="image-container">
        <img src={youngdad2} alt="Image 4" className="image" />
        <div className="overlay">
          <div className="text">The ultimate game night, DnD, in this photo most likely making up their own rules as they even at a young age knew they could make a better game</div>
        </div>
      </div>
    </div>
    <br />
      <br />
      <br />



    <div className="container">
      <div className="image-container">
        <img src={marriage} alt="Image 1" className="image" />
        <div className="overlay">
          <div className="text">Steve and the crew sharing a laugh of which probably was from him making a right up to the line joke, moments before he most likely took it to far trying too one-up himself.</div>
        </div>
      </div>
      <div className="image-container">
        <img src={younggrandpa} alt="Image 2" className="image" />
        <div className="overlay">
          <div className="text">Riding a camel for the first time was an unforgettable memory for Steve, still blissfully unaware in this photo of his allergy to camels...</div>
        </div>
      </div>
    </div>
    <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default PhotoGallery;