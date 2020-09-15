import React from 'react';
import Particles from "react-tsparticles";

function Header(props) {
const contacts=props.contacts
const particles = {
    "backgroundMask": {
      "cover": {
        "color": {
          "value": "#0b0c10"
        },
        "opacity": 0.99
      },
      "enable": true
    },
    "detectRetina": true,
    "fpsLimit": 60,
    "interactivity": {
      "detectsOn": "window",
      "events": {
        "onClick": {
          "enable": true,
          "mode": "repulse"
        },
        // "onDiv": {
        //   "ids": [],
        //   "enable": false,
        //   "mode": [],
        //   "type": "circle"
        // },
        "onHover": {
          "enable": true,
          // "mode": "bubble",
          "parallax": {
            "enable": true,
            "force": 20,
            "smooth": 100
          }
        },
        "resize": true
      },
      "modes": {
        "attract": {
          "distance": 300,
          "duration": 0.5,
          "speed": 5
        },
        "bubble": {
          "distance": 100,
          "duration": 1,
          "opacity": 1,
          "size": 100
        },
        // "connect": {
        //   "distance": 200,
        //   "radius": 600
        // },
        // "grab": {
        //   "distance": 400,
        //   "links": {
        //     "opacity": 1
        //   }
        // },
        // "push": {
        //   "quantity": 4
        // },
        // "remove": {
        //   "quantity": 2
        // },
        // "repulse": {
        //   "distance": 200,
        //   "duration": 0.4,
        //   "speed": 1
        // },
        // "slow": {
        //   "factor": 3,
        //   "radius": 200
        // },
        // "trail": {
        //   "delay": 1,
        //   "quantity": 1
        // }
      }
    },
    "particles": {
      "collisions": {
        "enable": true,
        "mode": "bounce"
      },
      "move": {
        "angle": 30,
        "enable": true,
        "noise": {
          "delay": {
            "random": {
              // "enable": false,
              "enable": true,
              "minimumValue": 1
            },
            "value": 10
          },
          // "enable": false
          "enable": true,
        },
        "outMode": "out",
        // "outMode": "bounce",
        "random": true,
      },
      "number": {
        "density": {
          "enable": true,
          "area": 800,
          "factor": 1000
        },
        "limit": 50,
        "value": 40
      },
      "rotate": {
        "direction": "clockwise",
      },

      "size": {
        "random": {
          "enable": true,
          "minimumValue": 5
        },
        "value": 30
      },
    },
    // "pauseOnBlur": true
  }
  return (
    <header id="home">
      <Particles
        id="tsparticles"
        params={particles}
      />
      <div className="home">
        <h1>{contacts.position}</h1>
        <h2>{contacts.name} {contacts.surname}</h2>
      </div>
    </header>
  );
  // }
}
export default Header;

