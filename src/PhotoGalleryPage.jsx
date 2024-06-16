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
          <div className="text">A photo of Steve in his "Cool Dude" phase, jorts and all. Bonus cool points for the partially unzipped fly!</div>
        </div>
      </div>
      <div className="image-container">
        <img src={dadbeach} alt="Image 3" className="image" />
        <div className="overlay">
          <div className="text">A trip taken to one of many historic sites, a favorite of his during his time in Europe.</div>
        </div>
        </div>
        <div className="image-container">
        <img src={dadcamel} alt="Image 4" className="image" />
        <div className="overlay">
          <div className="text">Riding a camel for the first time was an unforgettable memory for Steve, still blissfully unaware in this photo of his allergy to camels...</div>
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
          <div className="text">The ultimate game night, DnD, in this photo most likely making up their own rules as they even at a young age knew they could make a better game</div>
        </div>
      </div>
      <div className="image-container">
        <img src={daddnd2} alt="Image 2" className="image" />
        <div className="overlay">
          <div className="text">More time spent playing DnD, perfecting his storytelling as a DM from a young age.</div>
        </div>
      </div>
      <div className="image-container">
        <img src={dadflowers} alt="Image 3" className="image" />
        <div className="overlay">
          <div className="text">The picture that inspired the cover art to popular album "Flower Boy" from musical artist Tyler, The Creator (or so the legend says)</div>
        </div>
        </div>
        <div className="image-container">
        <img src={dadforest} alt="Image 4" className="image" />
        <div className="overlay">
          <div className="text">Steve standing atop a hill in the forest near their Germany home where he found ancient ruins!</div>
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
          <div className="text">A fond trip taken with his father, holding a souvenir that will be the first of many from his time in Europe</div>
        </div>
      </div>
      <div className="image-container">
        <img src={dadgrandpastatue} alt="Image 2" className="image" />
        <div className="overlay">
          <div className="text">A family trip again to another historic site this time featuring Roman Statues and plaques.</div>
        </div>
      </div>
      <div className="image-container">
        <img src={dadgreatgrandpa} alt="Image 3" className="image" />
        <div className="overlay">
          <div className="text">Family time spent with Steve's Grandfather.</div>
        </div>
        </div>
        <div className="image-container">
        <img src={dadgreatgrandma} alt="Image 4" className="image" />
        <div className="overlay">
          <div className="text">Steve spending time with his Grandmother as a young adult.</div>
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
          <div className="text"> A charismatic Steve with the top 4 buttons undone, rockin the hell out of that white linen </div>
        </div>
      </div>
      <div className="image-container">
        <img src={dadheadshot2} alt="Image 2" className="image" />
        <div className="overlay">
          <div className="text">A nice sunny day, class of '85 t-shirt on, matching the watch band to the belt. Now thats fashion</div>
        </div>
      </div>
      <div className="image-container">
        <img src={dadhighschool} alt="Image 3" className="image" />
        <div className="overlay">
          <div className="text">A candid of Steve, to this day no one knows what he was doing in this picture...</div>
        </div>
        </div>
        <div className="image-container">
        <img src={dadhighschool2} alt="Image 4" className="image" />
        <div className="overlay">
          <div className="text">Yearbook photos, I'm sure his brothers Dan and Mike had nothing but good things to say about this one!</div>
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
          <div className="text"> The family taking a trip, a improptu photo taken with his siblings and father.</div>
        </div>
      </div>
      <div className="image-container">
        <img src={dadruins} alt="Image 2" className="image" />
        <div className="overlay">
          <div className="text">Steve and his Dad taking a picture of their discorvery of stronghold ruins.</div>
        </div>
      </div>
      <div className="image-container">
        <img src={youngdadtown} alt="Image 3" className="image" />
        <div className="overlay">
          <div className="text">A trip taken to an old European village with his siblings.</div>
        </div>
        </div>
        <div className="image-container">
        <img src={dadspeech} alt="Image 4" className="image" />
        <div className="overlay">
          <div className="text">Steve speaking at Future Stores conference,one of the many events where he was a key speaker</div>
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
          <div className="text">Steve Freeman (Center) with his 2 children, Alex (Left) and Cori (Right)</div>
        </div>
      </div>
      <div className="image-container">
        <img src={dadkids2} alt="Image 2" className="image" />
        <div className="overlay">
          <div className="text">A family trip to Leavenworth,WA where this was just what the family chose to wear out that day. Just so happened there was a photoshoot</div>
        </div>
      </div>
      <div className="image-container">
        <img src={youngdad} alt="Image 3" className="image" />
        <div className="overlay">
          <div className="text">Young Steve during his time in the scouts, here pictured during his Cub Scout days.</div>
        </div>
        </div>
        <div className="image-container">
        <img src={youngdad2} alt="Image 4" className="image" />
        <div className="overlay">
          <div className="text">Steve celebrating with a cake topped with Chess pieces, checkers pieces, and what appears to be Sorry! pieces as well. Hopefully not consumed...</div>
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
          <div className="text">The day 2 families became 1, Cori (Left) Kellie (Left Middle) Steve (Right Middle) Alex (Right) and Josh (Bottom Middle)</div>
        </div>
      </div>
      <div className="image-container">
        <img src={younggrandpa} alt="Image 2" className="image" />
        <div className="overlay">
          <div className="text">A candid shot featuring their childhood cat, legends say that cat was a mean ol' bastard...</div>
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