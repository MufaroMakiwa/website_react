"use strict";var precacheConfig=[["/index.html","a0e3f3fa5223f964bf6d4ba697af0ead"],["/static/css/main.70ffc1af.css","32742fd14c432a1a4aa03bad95747f04"],["/static/js/main.bb22c350.js","9922078ab2bad0458bc7d25ffd49da9b"],["/static/media/africa_print.33f942d6.png","33f942d6a50736d36ab169382db65358"],["/static/media/cover_photo.504d79de.jpg","504d79de1966b9d07dd7cb22e9123210"],["/static/media/footer_logo_red.d39a73f0.png","d39a73f072a29c4ee439b8eb7ce41d8f"],["/static/media/header_logo.fa4c30d5.png","fa4c30d5950a96ca3458112df8768415"],["/static/media/logo.2dbcd00d.png","2dbcd00dab65c2198464ec0eb77e033d"],["/static/media/partner_alc.1d83d8b4.png","1d83d8b4d6a66f5e63e91364cb304729"],["/static/media/partner_bsu.eff87c8f.png","eff87c8fd6edc4310a72b3dda90e11a2"],["/static/media/partner_ease.e5e21fed.png","e5e21fed8103cd699362feb9d70e5fae"],["/static/media/partner_misti.07e83deb.png","07e83deb2374043acfe129496e8b5cee"],["/static/media/partner_mitafrica.3dbf53b0.png","3dbf53b0b6fe49a9ffc88cc4902075a1"],["/static/media/partner_ome.2b5c8791.png","2b5c879161189d4517bfafc6a47b54b2"],["/static/media/partner_omp.f1c94149.png","f1c9414927824610e6f275c4e51722b5"],["/static/media/partner_sakata.48b572a9.jpg","48b572a98eaacb306e480d728b4c4e91"],["/static/media/photo_ayo.fc4fe009.jpg","fc4fe0098273164e7d0193d0c6ab6343"],["/static/media/photo_delight.dc178557.jpg","dc17855707a7b87d4d1260b745e37170"],["/static/media/photo_denzel.f730b5cd.jpg","f730b5cd74f64f948681109fac68586e"],["/static/media/photo_gianna.bc6799ea.jpg","bc6799ea51bfeeb7d2aefa52e29d948e"],["/static/media/photo_michael.bc3df759.png","bc3df759dc70decad2fed4f13844fa82"],["/static/media/photo_mojo.ac416898.jpg","ac4168984c590e617cc733e070141675"],["/static/media/photo_mufaro.4c313adf.jpg","4c313adf42298f9056b0b706d47d06d6"],["/static/media/photo_nickie.b74e4647.jpg","b74e46479cec70d4cf6812f8abd15ec1"],["/static/media/photo_sharon.8b32e103.jpg","8b32e1037faa60f1447e742849df2f12"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});