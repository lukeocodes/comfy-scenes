module.exports = {
  // other actions
  rain: {
    action: {
      name: "rainDinos"
    }
  },
  // pet actions
  kick: [
    {
      queue: "pet",
      action: {
        name: "movePetToMe"
      }
    },
    {
      queue: "pet",
      action: {
        name: "petKick"
      },
      sfx: {
        src: "hit.mp3"
      }
    },
    {
      queue: "pet",
      action: {
        name: "movePetFast"
      }
    }
  ],
  poke: {
    queue: "pet",
    action: {
      name: "movePet"
    },
    sfx: {
      src: "pop.mp3"
    }
  },
  boo: [
    {
      queue: "pet",
      action: {
        name: "movePetFast"
      }
    },
    {
      queue: "pet",
      action: {
        name: "movePetFast"
      }
    },
    {
      queue: "pet",
      action: {
        name: "movePetFast"
      }
    },
    {
      queue: "pet",
      action: {
        name: "movePetFast"
      }
    },
    {
      queue: "pet",
      action: {
        name: "movePetFast"
      }
    }
  ],
  dave: {
    action: {
      name: "petDave"
    }
  },
  greg: {
    action: {
      name: "petGreg"
    }
  },
  blue: {
    action: {
      name: "petBlue"
    }
  },
  mort: {
    action: {
      name: "petMort"
    }
  },
  biggly: {
    action: {
      name: "petGetBiggly"
    }
  },
  shrink: {
    action: {
      name: "petShrink"
    }
  },
  // change bulb colour commands
  resetbulb: {
    action: {
      name: "resetBulb"
    },
    sfx: {
      src: "switch.mp3"
    }
  },
  bulb: {
    action: {
      name: "changeBulb"
    },
    sfx: {
      src: "switch.mp3"
    }
  },
  // turn logo light on/off commands
  off: {
    action: {
      name: "lightsOut"
    },
    sfx: {
      src: "switch.mp3"
    }
  },
  lightsout: {
    action: {
      name: "lightsOut"
    },
    sfx: {
      src: "switch.mp3"
    }
  },
  lightsoff: {
    action: {
      name: "lightsOut"
    },
    sfx: {
      src: "switch.mp3"
    }
  },
  darkness: {
    action: {
      name: "lightsOut"
    },
    sfx: {
      src: "switch.mp3"
    }
  },
  lightson: {
    action: {
      name: "lightsOn"
    },
    sfx: {
      src: "switch.mp3"
    }
  },
  lightness: {
    action: {
      name: "lightsOn"
    },
    sfx: {
      src: "switch.mp3"
    }
  },
  on: {
    action: {
      name: "lightsOn"
    },
    sfx: {
      src: "switch.mp3"
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
