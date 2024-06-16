import React from 'react';
import { Link } from 'react-router-dom';
import "./NewBeginning.css";
import dadspeech from "./images/dad-speach.jpg";
import marriage2 from "./images/marriage.jpeg";
import dadandkids2 from "./images/dad-kids2.jpeg";


function NewBeginning() {
  return (
    <div className = "newBeginning">
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
      <h2>A New Beginning</h2>
      <p>
      Despite his promising career trajectory at Amazon, Steve felt that something essential was missing from his life. 
      Seeking a deeper connection and a partner to share his journey with, he turned to the burgeoning trend of online matchmaking. 
      This modern approach to finding love allowed him to search for someone who would not only be his lifelong partner but also share in his dreams and aspirations. 
      Through this online platform, Steve hoped to find a person who could help him build a strong, united family, further deepening the roots he had planted over the years. 
      As he navigated the world of online dating, Steve remained optimistic, driven by the desire to create a loving and stable home for his children and to find a partner who would stand 
      by his side as they built a future together.</p>
      <br />
      <br />
      <br />

      <p>In his search for a lifelong partner, Steve matched with a young lady named Kellie. Like Steve, she was a single parent who had faced similar hardships in her adult life. 
        Their shared experiences and mutual understanding of the challenges of single parenthood created an instant bond. They connected over their dreams and aspirations, 
        finding solace and admiration in each other's ability to provide stable lives for their children despite the difficulties they had encountered. As they began dating, 
        their relationship quickly blossomed, rooted in a deep respect for one another's resilience and dedication to their families. Steve and Kellie found joy in their growing connection, 
        each recognizing the potential for a loving partnership that would bring their families together and pave the way for a brighter future.</p>
        <br />
      <br />
      <br />

      <p>After a brief courtship, Steve proposed to Kellie, and they decided to merge their families and embark on a lifelong partnership. Along with Kellie came her son, Josh, 
        who would now become the third and final child in Steve's life. 
        Steve continued his work at Amazon, while both he and Kellie lived on opposite ends of the greater Seattle area. 
        Determined to build a new life together, they pooled every last dime to move their newly combined family into their first home in Redmond. 
        This move brought Steve closer to his work in Seattle, while Kellie embraced the opportunity to start fresh in a new area, supported by her loving new family. 
        Their new home in Redmond symbolized not just a geographical shift but the beginning of a united and hopeful future for Steve, Kellie, and their children—Alex, Cori, and Josh.</p>
        <br />
      <br />
      <br />

      <p>After seven years in Washington working for Amazon, Steve experienced significant changes in his personal and professional life. 
        Alex, his eldest, had followed in his footsteps by attending and graduating from the University of Washington. Meanwhile, Cori embarked on her own path into adulthood. 
        Seeking new opportunities, Steve transitioned to a role at Macy's in the San Francisco Bay Area, prompting a move for himself, Kellie, and Josh. 
        This relocation allowed Steve to support Josh as he graduated from middle school and high school. Professionally, Steve thrived, earning speaking opportunities at major 
        e-commerce conferences and even winning Macy's prestigious "Magic Man of the Year" award. This period marked a time of growth and achievement for Steve, both in his career 
        and in his role as a supportive father and partner.</p>
        <br />
      <br />
      <br />

        <p>Steven's career journey continued with his work at Macy's, which eventually took him to Ohio. 
          There, he maintained his award-winning performance until the pandemic caused a significant shift in many lives, including his own. Seeking stability, Steven transitioned 
          to a role at Lowe's and moved his family to North Carolina. Not long after, he found a new opportunity at Advance Auto, where he currently works. Now settled in 
          Charlotte with Kellie, Josh, their two cats Bella and Macie, and their two dogs Morgan and Mia, Steven and Kellie are contemplating their future. With a desire to find a 
          place to settle down for the rest of their lives, they are looking forward to discovering where the next chapter of their journey will unfold, aiming to create a lasting and
           peaceful home together.</p>
           <br />
      <br />
      <br />
      <div className="container">
      <div className="image-container">
        <img src={dadspeech} alt="Image 1" className="image" />
        <div className="overlay">
          <div className="text">Steve speaking at Future Stores conference,one of the many events where he was a key speaker</div>
        </div>
      </div>
      <div className="image-container">
        <img src={marriage2} alt="Image 2" className="image" />
        <div className="overlay">
          <div className="text">The day 2 families became 1, Cori (Left) Kellie (Left Middle) Steve (Right Middle) Alex (Right) and Josh (Bottom Middle)</div>
        </div>
      </div>
      <div className="image-container">
        <img src={dadandkids2} alt="Image 3" className="image" />
        <div className="overlay">
          <div className="text">A family trip to Leavenworth,WA where this was just what the family chose to wear out that day. Just so happened there was a photoshoot</div>
        </div>
      </div>
    </div>
    <br />
      <br />
      <br />  
      <br />
      <br />
    </div>
  );
}

export default NewBeginning;