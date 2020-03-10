import React, { Component } from "react";
import "./style.css";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* MAIN DIV*/}
        <div class="loop1" id="home">
          <p class="headtext" id="one">
            The eternal silence of these infinite spaces frightens me.
            <br /> <p class="subtext">~Blaise Pascal</p>
          </p>
        </div>
        {/* DESC DIV*/}
        <div id="about" class="aboutloop">
          <p>
            I'm Ashray Sripathi.
            <br /> Just a student working towards a degree in Computer Science.
            <br /> I love dogs, computers and F1.
          </p>
        </div>
        {/* LINK DIV*/}
        <div id="info" class="loop2">
          <p class="links">
            <a href="https://www.linkedin.com/in/ashray-sripathi-7767b0149/ ">
              <img
                src="https://png2.cleanpng.com/dy/5be51c596a3c77c28620e192d070300b/L0KzQYm3VcA0N5Dxj5H0aYP2gLBuTfl0a5J3Rd9udHHvh7F5iBlvb15oh995dYTogn7wgB9ve15xgdD0ZXTsfn7wjwRmep9mRd9uZHnkPb32hB8uPZJqeqs7YXPpQra3hcgvP2g4TaY5OUK0RYO8U8g4QWU9Uas9OD7zfri=/kisspng-iscar-metalworking-computer-icons-linkedin-interna-media-logo-5aeb92acf2e0e8.7735409215253879489948.png"
                height="65"
                width="65"
              />
            </a>
            &emsp;&emsp;&emsp;
            <a href="https://github.com/ashraysripathi">
              <img
                src="https://www.pngkey.com/png/full/178-1787508_github-icon-download-at-icons8-white-github-icon.png"
                height="65"
                width="65"
              />
            </a>
            &emsp;&emsp;&emsp;
            <a href="https://www.instagram.com/thedaemon/">
              <img
                src="http://icons.iconarchive.com/icons/martz90/circle/512/instagram-icon.png"
                height="65"
                width="65"
              />
            </a>
          </p>
          <div class="inforight">
            Skills↓
            <br />
            <img
              src="http://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/java-icon.png"
              height="65"
              width="65"
            />
            &emsp;&emsp;
            <img
              src="https://www.stickpng.com/assets/images/5847f5c3cef1014c0b5e489d.png"
              height="60"
              width="60"
            />
            &emsp;&emsp;
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg"
              height="75"
              width="75"
            />
            <br />
            <img
              src="http://pluspng.com/img-png/logo-javascript-png-file-javascript-logo-png-1052.png"
              height="55"
              width="55"
            />
            &emsp;&emsp;
            <img
              src="https://www.stickpng.com/assets/images/5848152fcef1014c0b5e4967.png"
              height="55"
              width="55"
            />
            &emsp;&emsp;
            <img
              src="https://www.pngkey.com/png/full/269-2693096_mysql-logo-transparent-png.png"
              height="65"
              width="65"
            />
          </div>
          <div class="infotext">You can find me at ↓</div>
        </div>
      </div>
    );
  }
}

export default Home;
