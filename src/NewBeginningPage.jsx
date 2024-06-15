import React from 'react';
import { Link } from 'react-router-dom';
import "./NewBeginning.css";


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

      <p>In his search for a lifelong partner, Steve matched with a young lady named Kellie. Like Steve, she was a single parent who had faced similar hardships in her adult life. 
        Their shared experiences and mutual understanding of the challenges of single parenthood created an instant bond. They connected over their dreams and aspirations, 
        finding solace and admiration in each other's ability to provide stable lives for their children despite the difficulties they had encountered. As they began dating, 
        their relationship quickly blossomed, rooted in a deep respect for one another's resilience and dedication to their families. Steve and Kellie found joy in their growing connection, 
        each recognizing the potential for a loving partnership that would bring their families together and pave the way for a brighter future.</p>

      <p>After a brief courtship, Steve proposed to Kellie, and they decided to merge their families and embark on a lifelong partnership. Along with Kellie came her son, Josh, 
        who would now become the third and final child in Steve's life. 
        Steve continued his work at Amazon, while both he and Kellie lived on opposite ends of the greater Seattle area. 
        Determined to build a new life together, they pooled every last dime to move their newly combined family into their first home in Redmond. 
        This move brought Steve closer to his work in Seattle, while Kellie embraced the opportunity to start fresh in a new area, supported by her loving new family. 
        Their new home in Redmond symbolized not just a geographical shift but the beginning of a united and hopeful future for Steve, Kellie, and their children—Alex, Cori, and Josh.</p>

      <p></p>
    </div>
  );
}

export default NewBeginning;