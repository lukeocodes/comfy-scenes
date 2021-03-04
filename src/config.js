module.exports = {
  // pet commands
  poke: {
    action: {
      name: "movePet"
    },
    sfx: {
      src: "pop.mp3"
    }
  },
  // change bulb colour commands
  resetbulb: {
    action: {
      name: "resetBulb"
    },
    sfx: {
      src: "pop.mp3"
    }
  },
  bulb: {
    action: {
      name: "changeBulb"
    },
    sfx: {
      src: "pop.mp3"
    }
  },
  // turn logo light on/off commands
  off: {
    action: {
      name: "lightsOut"
    }
  },
  lightsout: {
    action: {
      name: "lightsOut"
    }
  },
  lightsoff: {
    action: {
      name: "lightsOut"
    }
  },
  darkness: {
    action: {
      name: "lightsOut"
    }
  },
  lightson: {
    action: {
      name: "lightsOn"
    }
  },
  lightness: {
    action: {
      name: "lightsOn"
    }
  },
  on: {
    action: {
      name: "lightsOn"
    }
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
