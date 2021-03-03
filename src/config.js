module.exports = {
  // change bulb colour commands
  resetbulb: {
    action: "resetBulb",
    sfx: {
      src: "pop.mp3"
    }
  },
  bulb: {
    action: "changeBulb",
    sfx: {
      src: "pop.mp3"
    }
  },
  // turn logo light on/off commands
  off: {
    action: "lightsOut"
  },
  lightsout: {
    action: "lightsOut"
  },
  lightsoff: {
    action: "lightsOut"
  },
  darkness: {
    action: "lightsOut"
  },
  lightson: {
    action: "lightsOn"
  },
  lightness: {
    action: "lightsOn"
  },
  on: {
    action: "lightsOn"
  },
  // sfx
  pop: {
    sfx: {
      src: "pop.mp3"
    }
  },
  drop: {
    sfx: {
      src: "drop.mp3"
    }
  },
  grounded: {
    sfx: {
      src: "grounded.mp3"
    }
  },
  energize: {
    sfx: {
      src: "transport.mp3"
    }
  },
  absolutely: {
    sfx: {
      src: "absolutely.mp3"
    }
  },
  look: {
    sfx: {
      src: "look.mp3"
    }
  },
  // vfx
  vonage: {
    sfx: {
      src: "vonage.mp3"
    },
    vfx: {
      src: "vonage.png",
      ttl: 5000,
      pos: "topright",
      animation: "flicker"
    }
  },
  vonagedevs: {
    sfx: {
      src: "vonage.mp3"
    },
    vfx: {
      src: "vonage.png",
      ttl: 5000,
      pos: "topright",
      animation: "flicker"
    }
  }
};
