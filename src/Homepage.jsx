import React from 'react';
import { Link } from 'react-router-dom';
import "./Homepage.css";
import titlepic from './images/titlepic.jpg';
import earlylife from './images/earlylife.png';
import marriage from './images/marriage.png'; 

function Homepage() {
  return (
    <div className="homepage">
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


      <div className="splashheader">
        <h1>A History of Our Family</h1>
      </div>


      <div className="container">
      <div className="image-container">
        <img src={earlylife} alt="Image 1" className="image" />
        <div className="overlay">
          <div className="text">A memory of surveying the German forest where he spent his youth</div>
        </div>
      </div>
      <div className="image-container">
        <img src={titlepic} alt="Image 2" className="image" />
        <div className="overlay">
          <div className="text">A strapping young Steve imposing his charm on those who ask... or dont</div>
        </div>
      </div>
      <div className="image-container">
        <img src={marriage} alt="Image 3" className="image" />
        <div className="overlay">
          <div className="text">The day his family came together, and the day his future truly started</div>
        </div>
      </div>
    </div>

<br />
<br />
<br />
<br />
<br />
<br />
      <div className="homepage">
        <h2>
          Who is, Steven "The Big Cat" Freeman?
        </h2>

        <p>While most of you know the legends, here are the facts behind the myth.</p>

        <h3>
          Family
        </h3>
        <p>Steven Freeman is a father of 3 (human children that is). His oldest son, Alexander Freeman, is a tech wiz and wonderkin taking the most after his father in terms of personal achievements and intellect. His daughter, Corinne Suchland, a kindhearted and easygoing individual that leads an independent life with their family out west in Oregon. And his youngest and final child Joshua Picallo, while Josh was part of the package deal when marrying his lifelong partner Kellie Boudreau he has treated him as his own blood from the first day together and has done much to mentor and support them to make sure they are on the best path possible for their life ahead. His kids are just a drop in the bucket of his life achievements though.</p>
        <h3>
          His Career
        </h3>
         <p>Mr. Freeman is a high profile name in the e-commerce industry being the keynote speaker at several high profile events and a well-respected member in the industry. Before holding high titled positions at companies such as Amazon, Macy's, and Lowe's he started out at the prestigious University of South Alabama in Mobile, Alabama before shortly moving onto a small school by the name of The University Of Washington. After graduating UW his education did not stop there as he has also attended Penn State while in the workforce to help further his career and supplement his already vast knowledge base. He has multiple bachelor's degrees in many fields of study as well as many other intellectual accolades under his belt. But Steven Freeman is more than just his smarts</p>

        <h3>
          The Short of it all
        </h3>

        <p>In summary, Steve is a pillar of the industry he works in, a loving father, a caring husband, a masterful gamer, and strong but gentle human being.</p>
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
    </div>

  );
}

export default Homepage;
