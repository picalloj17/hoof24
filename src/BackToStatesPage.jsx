import React from 'react';
import { Link } from 'react-router-dom';
import "./BackToStates.css";
import dadandkids from './images/dad-and-kids.jpeg';

function BackToStates() {
  return (
    <div className = "states">
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
      <h2>Back To The States</h2>
      <p>Steve's return to the US marked a significant turning point in his life. 
        After spending several formative years in Germany, he had put all his eggs in one basket for college, pinning his hopes on a single opportunity that ultimately fell through. 
        Fortunately, this setback turned into a blessing in disguise, as it led him to the prestigious University of South Alabama in Mobile. This unexpected turn of events promised a life 
        vastly different from his experiences in Germany. The vibrant campus life, the Southern hospitality, and the diverse academic opportunities at South Alabama opened new doors for Steve, 
        setting the stage for a transformative college experience that would shape his future in ways he never anticipated.</p>
        <br />
        <br />
        <br />

        <p>After a short but enriching stint at the University of South Alabama, Steve had the unexpected opportunity to return to his roots in Washington State and attend the University 
          of Washington. This move reunited him with friends and family, providing a comforting sense of familiarity and support. Among the most significant reunions was with his brother Dan, 
          who was also a student at the same university. Together, they navigated the vibrant campus life and rigorous academics, strengthening their bond and sharing in the excitement of their 
          college journey. At the University of Washington, Steve felt a renewed sense of purpose and belonging. Surrounded by loved ones and back in the environment he once called home, 
          he set out to cement his future, focusing on his studies and beginning to lay the groundwork for his career and personal aspirations.</p>
          <br />
        <br />
        <br />
        <p>At the University of Washington, Steve and Dan continued their lighthearted antics reminiscent of their time in Germany, 
          creating a lively and spirited college experience. Despite their playful nature, Steve was deeply committed to his passion for history, 
          diligently working towards his degree. During his time at UW, Steve found his first big twist in his adult life, and before graduating, he would have his first child on the way, Alex. 
          To support his growing family and his dreams of becoming a history teacher, Steve took on a night job as a security guard. 
          Balancing school, work, and family life was demanding, but it also fostered a resilient and later award-winning work ethic. This period of his life, 
          marked by relentless dedication and hard work, not only prepared him for the challenges ahead but also became the foundation of his life and future career.</p>
          <br />
        <br />
        <br />
        <p>After graduation, Steve found himself in need of a steady income to support his growing family. 
          He quickly obtained his insurance license and began working for Safeco. During this period, he welcomed his second child, Cori, into the world. 
          Although his job at Safeco provided financial stability, Steve continued to seek opportunities that aligned more closely with his passions. 
          This search led him to a career at Sierra Online, a small but innovative game studio and software company. At Sierra Online, Steve played a crucial role in developing some of their 
          most popular software titles, channeling his creativity and leadership skills into groundbreaking projects. However, this chapter of his life was not without its challenges. 
          Despite facing personal hardships that we'll not delve into here, Steve navigated the complexities of single parenthood with unwavering dedication. He continued to love and care 
          for Alex and Cori while striving for a brighter future. His work at Sierra Online not only showcased his professional talents but also reinforced his commitment to building a 
          better life for not just himself and his children.</p>
          <br />
        <br />
        <br />
        <p>Steven then leveraged the skills, experience, and connections he had gained at Sierra Online to secure a position at a burgeoning online book retailer called Amazon. 
          This new role represented a significant opportunity, aligning with his ambitions and providing a platform for further growth. As he immersed himself in the dynamic environment of 
          Amazon, he found himself at the cusp of an exciting career transformation. Little did he know, this position would mark both the closing of one chapter and the beginning of another. 
          The knowledge and expertise he brought to Amazon helped shape its early development, setting the stage for future success. At the same time, this role would open doors to unforeseen 
          possibilities, ultimately steering Steven toward a path that would define his professional and personal life in ways he had never imagined.</p>
          <br />
        <br />
        <br />
        <div className="container">
      <div className="image-container">
        <img src={dadandkids} alt="Image 1" className="image" />
        <div className="overlay">
          <div className="text">Steve Freeman (Center) with his 2 children, Alex (Left) and Cori (Right)</div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default BackToStates;