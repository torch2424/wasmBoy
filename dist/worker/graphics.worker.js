'use strict';(function(){function g(a,b){d?self.postMessage(a,b):h.postMessage(a,b)}function l(a,b){a||console.error("workerapi: No callback was provided to onMessage!");if(b)if(d)b.onmessage=a;else b.on("message",a);else if(d)self.onmessage=a;else h.on("message",a)}function c(a,b,f){b||(b=Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10),e++,b=`${b}-${e}`,1E5<e&&(e=0));return{workerId:f,messageId:b,message:a}}const d="undefined"!==typeof self;let h;d||(h=require("worker_threads").parentPort);
let e=0,k;const m=(a)=>{a=a.data?a.data:a;switch(a.message.type){case "GET_CONSTANTS_DONE":g(c(a.message,a.messageId));break;case "UPDATED":{a=new Uint8ClampedArray(a.message.graphicsFrameBuffer);const f=new Uint8ClampedArray(92160),d=new Uint8ClampedArray(3);for(let c=0;144>c;c++)for(let e=0;160>e;e++){var b=3*(160*c+e);for(let c=0;3>c;c++)d[c]=a[b+c];b=4*(e+160*c);f[b]=d[0];f[b+1]=d[1];f[b+2]=d[2];f[b+3]=255}a=f}g(c({type:"UPDATED",imageDataArrayBuffer:a.buffer}),[a.buffer])}};l((a)=>{a=a.data?
a.data:a;switch(a.message.type){case "CONNECT":k=a.message.ports[0];l(m,k);g(c(void 0,a.messageId));break;case "GET_CONSTANTS":k.postMessage(c({type:"GET_CONSTANTS"},a.messageId));break;default:console.log(a)}})})();