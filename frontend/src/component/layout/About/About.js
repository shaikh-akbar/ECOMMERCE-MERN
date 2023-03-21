import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const About = () => {
  const visitLinkedIn = () => {
    window.location = "https://www.linkedin.com/in/shaikh-akbar-1934901ab/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dc5v9obvm/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1678888406/avatars/niyubzcnmv2joywd63mb.png"
              alt="Founder"
            />
            <Typography>Akbar Shaikh</Typography>
            <Button onClick={visitLinkedIn} color="primary">
              Visit LinkedIn
            </Button>
            <span>
              This is a sample wesbite made by @akbarshaikh. with the help of watching videos of youtube 6pack programmer!
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
          

            <a href="https://www.linkedin.com/in/shaikh-akbar-1934901ab/" target="blank">
              <LinkedInIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
