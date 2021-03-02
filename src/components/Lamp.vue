<template>
  <div class="canvas">
    <div class="square-canvas">
      <div class="top"></div>
      <div class="glass">
        <div class="lava">
          <div class="blob-drop"></div>
          <div class="blob-drop"></div>
          <div class="blob-bounce"></div>
          <div class="blob-rise"></div>
          <div class="blob-top"></div>
          <div class="blob-bottom"></div>
        </div>
      </div>
      <div class="glass-round"></div>
      <div class="base">
        <div class="trapezoid"></div>
        <div class="trapezoid"></div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.canvas {
  position: relative;
  /* padding-top: 62.5%; */
}
.canvas .square-canvas {
  position: absolute;
  width: 10rem;
  height: 10rem;
  /* width: 50%; */
  /* height: 80%; */
  bottom: 0;
}

.top {
  position: absolute;
  width: 28%;
  height: 15.1%;
  top: 0%;
  left: 36%;
  background: #837e88;
  clip-path: polygon(25% 0, 75% 0, 87% 100%, 12% 100%);
  z-index: 4;
}

.base {
  position: absolute;
  width: 40%;
  height: 25%;
  top: 75%;
  left: 30%;
  z-index: 3;
}

.base .trapezoid:nth-of-type(1) {
  position: absolute;
  background: #837e88;
  width: 100%;
  height: 75%;
  top: 25%;
  clip-path: polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%);
}

.base .trapezoid:nth-of-type(2) {
  position: absolute;
  background: #837e88;
  width: 70%;
  height: 30%;
  left: 15%;
  clip-path: polygon(0 0, 100% 0, 86% 100%, 14% 100%);
}

.glass {
  position: absolute;
  width: 20%;
  height: 60%;
  left: 40%;
  top: 15%;
  background: linear-gradient(#291938, #3c1640);
  z-index: 2;
}

.glass::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: -5%;
  background: linear-gradient(#291938, #3c1640);
  left: -33%;
  transform: rotate(13deg);
  border-radius: 5% 5% 0% 30%;
}

.glass::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: -5%;
  background: linear-gradient(#291938, #3c1640);
  right: -33%;
  transform: rotate(-13.5deg);
  border-radius: 5% 5% 30% 0%;
}

.glass-round {
  position: absolute;
  width: 40%;
  height: 35%;
  left: 30%;
  top: 44%;
  background: #3c1640;
  border-radius: 45%;
  z-index: 1;
}

.lava {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  filter: url("#goo");
}

.lava .blob-top {
  position: absolute;
  width: 90%;
  height: 25%;
  top: -15%;
  left: 5%;
  background: #5f14a2;
  border-radius: 50%;
}

.lava .blob-drop:nth-of-type(1) {
  position: absolute;
  width: 70%;
  height: 25%;
  top: -15%;
  left: 1%;
  border-radius: 50%;
  border-radius: 43% 45% 43% 44%;
  animation: drop 10s ease-in-out infinite, colorDown 10s ease-in-out infinite;
}

.lava .blob-bounce {
  position: absolute;
  width: 32%;
  height: 11%;
  top: 90%;
  right: 10%;
  background: #cd5492;
  border-radius: 50%;
  animation: bounce 10s 6.25s ease-in-out infinite;
}

.lava .blob-rise {
  position: absolute;
  width: 65%;
  height: 22%;
  top: 90%;
  right: 2%;
  background: #cd5492;
  border-radius: 50%;
  animation: rise 10s 5s ease-in-out infinite,
    colorUp 10s 5s ease-in-out infinite;
}

.lava .blob-bottom {
  position: absolute;
  width: 120%;
  height: 30%;
  top: 85%;
  left: -10%;
  background: #cd5492;
  border-radius: 50%;
}

@keyframes rise {
  0% {
    top: 90%;
    height: 22%;
    width: 65%;
  }
  30% {
    height: 40%;
  }
  50% {
    height: 22%;
  }
  100% {
    top: -16%;
    height: 22%;
  }
}

@keyframes drop {
  0% {
    top: -15%;
  }
  30% {
    height: 25%;
  }
  50% {
    height: 30%;
  }
  70% {
    height: 25%;
  }
  100% {
    top: 90%;
  }
}

@keyframes bounce {
  0% {
    top: 90%;
    background: #cd5492;
  }
  50% {
    top: 60%;
    height: 13%;
  }
  60% {
    background: #ab4297;
  }
  70% {
    background: #cd5492;
    height: 11%;
  }
  100% {
    top: 90%;
  }
}

@keyframes colorDown {
  0%,
  30% {
    background: #5f14a2;
  }
  70%,
  100% {
    background: #cd5492;
  }
}

@keyframes colorUp {
  0%,
  35% {
    background: #cd5492;
  }
  70%,
  100% {
    background: #5f14a2;
  }
}
</style>
