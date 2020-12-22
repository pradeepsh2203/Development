import React from "react"
import ReactDOM from "react-dom"
// import { Container,Row,Col } from "react-bootstrap";
import "./Footer.css"
import "./Fontawesome"
import SocialButtonsPage from "./socials"
import Fontawesome from "./Fontawesome"
//import 'font-awesome/css/font-awesome.css'
const Footer = () => {
    return (
        <div>
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        {/* column1 */}
                        <div className="col">
                            <h4>About Us</h4>
                            <ul className="list-unstyled">
                                <li>Edumart Group of Institutions</li>
                                <li>management team</li>
                                <li>approval</li>

                            </ul>
                        </div>
                        {/* column2 */}
                        <div className="col">
                            <h4>courses</h4>
                            <ul className="list-unstyled">
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>D</li>

                            </ul>
                        </div>
                        {/* column3 */}
                        <div className="col">
                            <h4>why edumart</h4>
                            <ul className="list-unstyled">
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>D</li>

                            </ul>
                        </div>
                        {/* column4 */}
                        <div className="col">
                            <h4>learning expirience</h4>
                            <ul className="list-unstyled">
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>D</li>

                            </ul>
                        </div>
                        {/* column5 */}
                        <div className="col">
                            <h4>Learn c++</h4>
                            <hr />
                            <div>© 2020 Edumart. All rights reserved | TERMS OF USE | PRIVACY POLICYSITEMAP</div>
                            <br/>
                        </div>

                    </div>
                </div>
            </div>
            <div className="main-footer" id="row2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="connect-us">
                                <h4>Connect with Us</h4>
                                
                                <ul className="follow-us clearfix">
                                    <Fontawesome />
                                </ul>
                            </div>
                        </div>
                        <div className="vertical"></div>
                        <div className="col-sm-4">
                            <div className="subscribe-us">
                                <h4>Subscribe with Us</h4>
                                <div id="mc_embed_signup">
                                    <form>
                                        <label>

                                            <input type="text" name="name" placeholder="Enter your Email Address" />
                                        </label>
                                        <input type="submit" value="Submit" />
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="vertical" id="line2"></div>
                        <div className="col-sm-4">
                            <div className="insta">
                                <h4>@Instagram</h4>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default Footer;