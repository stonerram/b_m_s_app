import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './styles.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
      {/* Button Section */}
      <div className="footer-top-buttons">
      <p ><img className='footer-top-button' src="./images/hut.svg"></img> List Your Show</p> 
      <p>
        Got a show, event, activity, or a great experience? Partner with us & get listed on BookMyShow.
      </p>
        <button className="footer-button">Contact Today!</button>
      </div>

    
      {/* Links Section */}
      <div className='footer-top-div'>
      <div className="footer-top-content">
  
          <div className="footer-top-item">
            <Link to="#" className='footer-top-links'><img  src="./images/support.png"></img>📞 24/7 Customer Care: Call us at +123 456 789</Link>
          </div>
          <div className="footer-top-item">
            <Link to="#" className='footer-top-links'><img  src="./images/movies.png"></img>Resend Booking Information</Link>
          </div>
          <div className="footer-top-item">
            <Link to="#" className='footer-top-links'><img  src="./images/newsletter.png"></img>📰 Subscribe to our Newsletter for the latest updates!</Link>
          </div>
     
      </div>
      </div>
        {/* Heading Section */}
        <div className="footer-top-headings">
            <div>
                <h2 className="footer-heading">MOVIES NOW SHOWING IN HYDERABAD</h2>
                <Link to="/Movie1/id" target="_blank" rel="noopener noreferrer"> Pushpa 2: The Rule |</Link>
                <Link to="/Movie1/id" target="_blank" rel="noopener noreferrer"> Moana 2 | </Link>
                <Link to="/Movie1/id" target="_blank" rel="noopener noreferrer">  Amaran |</Link>
                <Link to="/Movie1/id" target="_blank" rel="noopener noreferrer"> Zebra |</Link>
                <Link to="/Movie1/id" target="_blank" rel="noopener noreferrer"> Solo Leveling: ReAwakening |</Link>
                <Link to="/Movie1/id" target="_blank" rel="noopener noreferrer">  Ishq (Telugu) | </Link>
                <Link to="/Movie1/id" target="_blank" rel="noopener noreferrer">  Lucky Bhaskar |</Link>
                <Link to="/Movie1/id" target="_blank" rel="noopener noreferrer"> Mechanic Rocky | </Link> 
                <Link to="/Movie1/id" target="_blank" rel="noopener noreferrer">  Roti Kapda Romance |</Link>
                <Link to="/Movie1/id" target="_blank" rel="noopener noreferrer">   Roti Kapda Romance |</Link>
                <Link to="/Movie1/id" target="_blank" rel="noopener noreferrer">  Bhool Bhulaiyaa 3 </Link>
          
            </div>
            <div>
                <h2 className="footer-heading">UPCOMING MOVIES IN HYDERABAD</h2>
                
                <Link to ="#" target="_blank" rel="noopener noreferrer"> Gumti | Dheera Bhagat Roy | Vaagal | Mahaparinirvan | Blood and Black | Thuval |
                Rongdaife | Family Padam | Panjab Files | The Lord of the Rings: The War of the Rohirrim </Link>
            </div>
            <div>
                <h2 className="footer-heading">MOVIE UPDATES AND CELEBRITIES</h2>
                
                <Link to="#" target="_blank" rel="noopener noreferrer">Upcoming Movies | Movies NowShowing | Movie Celebrities </Link>
            </div>
            <div>
                <h2 className="footer-heading">MOVIES PER WEEK</h2>
                <Link to="#" target="_blank" rel="noopener noreferrer">Movies Playing Today | Movies Playing Tomorrow | Movies Playing This Weekend  </Link>
            </div>
            <div>
                <h2 className="footer-heading">MOVIES BY GENRE</h2>
                <Link to="#" target="_blank" rel="noopener noreferrer">Drama Movies | Action Movies | Comedy Movies| Adventure Movies | Ropmantic Movies | Thriller Movies | Crime Movies | Animation Movies | Fantacy Movies | Historical Movies  </Link>
            </div>
            <div>
                <h2 className="footer-heading"> UPCOMING MOVIES BY GENRE</h2>
                
                <Link to="#" target="_blank" rel="noopener noreferrer">Movies in Drama | Movies in Thriller | Movies in Action | Movies in Comedy | Movies in Romantic | Movies in Crime | Movies in Horror | Movies in Adventure |Movies in Historical | Movies in Suspense </Link>
            </div>
            <div>
                <h2 className="footer-heading">MOVIES BY LANGUAGE</h2>
                
                <Link to="#" target="_blank" rel="noopener noreferrer">Movies in Telugu | Movies in Hindi | Movies in English | Movies in Malayalam |
              Movies in Tamil | Movies in Kannada | Movies in Nepali | Movies in Sindhi | 
              Movies in Chattisgarhi | Movies in Japanese </Link>
            </div> 
            <div>
            <h2 className="footer-heading">MOVIES BY FORMAT</h2>
            <p>
              <Link to="#" target="_blank" rel="noopener noreferrer">
                Movies in 2D | Movies in 3D | Movies in 4DX 3D | Movies in 4DX | Movies in
                IMAX 2D | Movies in 2D SCREEN X | Movies in 7D | Movies in ICE | Movies in
                IMAX 3D | Movies in 3D SCREEN X
              </Link>
            </p>
          </div>
          <div>
            <h2 className="footer-heading">UPCOMING MOVIES BY FORMAT</h2>
            <p>
              <Link to="#" target="_blank" rel="noopener noreferrer">
                Movies in 2D | Movies in 3D | Movies in 4DX 3D | Movies in IMAX 3D | Movies
                in 2D SCREEN X | Movies in 7D | Movies in ICE | Movies in 3D SCREEN X |
                Movies in MX4D 3D | Movies in MX4D
              </Link>
            </p>
          </div>
          <div>
            <h2 className="footer-heading">MOVIES IN TOP CITIES</h2>
            <p>
              <Link to="#" target="_blank" rel="noopener noreferrer">
                Movies in Mumbai | Movies in Delhi-NCR | Movies in Chennai | Movies in
                Bengaluru | Movies in Hyderabad | Movies in Pune | Movies in Ahmedabad |
                Movies in Kolkata | Movies in Kochi
              </Link>
            </p>
          </div>
          <div>
            <h2 className="footer-heading">CINEMAS IN TOP CITIES</h2>
            <p>
              <Link to="#" target="_blank" rel="noopener noreferrer">
                Cinemas in Mumbai | Cinemas in Delhi-NCR | Cinemas in Chennai | Cinemas in
                Bengaluru | Cinemas in Hyderabad | Cinemas in Pune | Cinemas in Ahmedabad
                | Cinemas in Kolkata | Cinemas in Kochi
              </Link>
            </p>
          </div>
          <div>
            <h2 className="footer-heading">COUNTRIES</h2>
            <Link to="#">Indonesia | Singapore | UAE | Sri Lanka | West Indies</Link>
          </div>
          <div>
            <h2 className="footer-heading">HELP</h2>
            <Link to="#">About Us | Contact Us | Current Opening |  Press Release | Press Coverage | Sitemap | FAQs | Terms and Conditions | Privacy Policy </Link>
          </div>
          <div>
            <h2 className="footer-heading">BOOKMYSHOW EXCLUSIVES</h2>
            <Link to="#">Lollapalooza India | Superstar | BookAChange | Corporate Vouchers  | Gift Cards | List My Show | Offers | Stream | Trailers</Link>
          </div>
      </div>

    </div>
    <div className="footer-content">
      <p>&copy; 2024 MyBookShow. All rights reserved.</p>
      <div className="social-links">
        <Link to="https://facebook.com" className="social-links" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} />
        </Link>
        <Link to="https://twitter.com" className="social-links" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </Link>
        <Link to="https://instagram.com" className="social-links" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </Link>
        <Link to="https://youtube.com" className="social-links" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={30} />
        </Link>
        <Link to="https://pinterest.com" className="social-links" target="_blank" rel="noopener noreferrer">
          <FaPinterest size={30} />
        </Link>
        <Link to="https://linkedin.com" className="social-links" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </Link>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
