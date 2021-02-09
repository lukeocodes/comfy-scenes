# Comfy Effects
![GitHub](https://img.shields.io/github/license/lukeocodes/comfy-effects?style=flat-square)

### A rudimentary effects board for Twitch streamers. 

It monitors your Twitch channel chat for `!commands` using [Comfy.js](https://github.com/instafluff/ComfyJS) (by [instafluff](https://github.com/instafluff/ComfyJS#instafluff) and [others](https://github.com/instafluff/ComfyJS#credits)), and plays a corresponding `.mp3` file.

## Demo

You can see this in use, in the wild, by tuning into the [lukeocodes stream](https://twitch.tv/lukeocodes) on Twitch.

## Adding Sounds

To add a sound, add the mp3 to `public/sfx/<your-sound>.mp3`. 

Now edit `src/sfx/config.js` and add a new object for your sound.

```diff
 module.exports = {
   grounded: {
     mp3: "grounded.mp3"
   },
   energize: {
     mp3: "transport.mp3"
   },
+  yourcommand: {
+    mp3: "<your-sound>.mp3"
+  }
 };
```

Once built or deployed, `yourcommand` will be available in Twitch chat as `!yourcommand`.

## Recommending SFX

Please create a pull request, having followed the [Adding Sounds](#adding-sounds) section above, to recommend a new sound for the [lukeocodes stream](https://twitch.tv/lukeocodes) on Twitch.

## Deploy with Netlify

This can be deployed straight to Netlify, to use in your stream. Just click the button!

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/lukeocodes/comfy-effects)

Remember to add/edit `VUE_APP_CHANNEL_NAME` in your deploy environment to the channel name to connect to.

## Project Setup

Created with `vue create`, this app can be installed with yarn or npm, then run `serve` to start it locally.

```
npm install
```

### Compiles and hot-reloads for starting locally

```
VUE_APP_CHANNEL_NAME=<your-channel-name> npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## Credit

Uses, and named after, [Comfy.js](https://github.com/instafluff/ComfyJS) (by [instafluff](https://github.com/instafluff/ComfyJS#instafluff)).