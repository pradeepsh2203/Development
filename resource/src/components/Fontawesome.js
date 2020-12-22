import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faYoutube, faTwitter, faLinkedin, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons'
import "./Fontawesome.css"

const Fontawesome = () => {
    return (
        <>
            <div className="container" id="icons">
                <div className="row row3">
                    <ul className="list-unstyled">
                    <li className="circle">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </li>
                
                    <li className="circle">
                    <FontAwesomeIcon icon={faYoutube} />
                    </li>
                    <li className="circle">
                    <FontAwesomeIcon icon={faLinkedin} />
                    </li>
                    <li className="circle">
                        <FontAwesomeIcon icon={faGoogle} />
                        </li>
                        <li className="circle">
                            <FontAwesomeIcon icon={faInstagram} />
                        </li>
                        </ul>
                    </div>
                    </div>




        </>)
}
export default Fontawesome;