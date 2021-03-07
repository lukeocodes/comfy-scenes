# Comfy Scenes

![GitHub](https://img.shields.io/github/license/lukeocodes/comfy-scenes?style=flat-square)

### A rudimentary effects board for Twitch streamers. 

It monitors your Twitch channel chat for `!commands` using [Comfy.js](https://github.com/instafluff/ComfyJS) (by [instafluff](https://github.com/instafluff/ComfyJS#instafluff) and [others](https://github.com/instafluff/ComfyJS#credits)), and plays a corresponding `.mp3` file.

## Demo

You can see this in use, in the wild, by tuning into the [lukeocodes stream](https://twitch.tv/lukeocodes) on Twitch.

## Deploy with Netlify

This can be deployed straight to Netlify, to use in your stream. Just click the button!

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/lukeocodes/comfy-scenes)

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
