"use strict";var precacheConfig=[["/memory_game/index.html","bff4842a812c131042fef97efd8c0c05"],["/memory_game/static/css/main.bbc9ce25.css","2182af33363ec6ff8e1ea27326c06cc5"],["/memory_game/static/js/main.8887d9f7.js","21f97ac2cb175be71cd7d405428bbfc2"],["/memory_game/static/media/cat1.9f7993f1.jpg","9f7993f1b0ee3fec7dcb53f00581f084"],["/memory_game/static/media/cat10.4a9cb2b5.jpg","4a9cb2b53e467ba2cf8d647fc6dd7686"],["/memory_game/static/media/cat11.7d86c51e.jpg","7d86c51eeafde88205a2a05327242b9e"],["/memory_game/static/media/cat12.a0a6bd24.jpg","a0a6bd24e55a84f175cbeb3bac9ba0ea"],["/memory_game/static/media/cat2.40c88bc1.jpg","40c88bc109cd9beb809afd85e701a604"],["/memory_game/static/media/cat3.684a88cc.jpg","684a88ccb1ccf4fa1d4dda905cb9cadd"],["/memory_game/static/media/cat4.6687b09d.jpg","6687b09d3fad081141fe2de36e7fc174"],["/memory_game/static/media/cat5.72e60d84.jpg","72e60d8451719d553a76106a8dbaaa85"],["/memory_game/static/media/cat6.45ccf14b.jpg","45ccf14b6d75c4155d273eac918d2d2c"],["/memory_game/static/media/cat7.f9878d63.jpg","f9878d63172ce4b54d7aa4284e07ae48"],["/memory_game/static/media/cat8.6b9a27bd.jpg","6b9a27bd8e34251c94c93c7e81b0cd2a"],["/memory_game/static/media/cat9.7d4dd0e6.jpg","7d4dd0e6e8ab3290f17d6acfb74446dd"],["/memory_game/static/media/favicon.c92b85a5.ico","c92b85a5b907c70211f4ec25e29a8c4a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),r=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var r="/memory_game/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});