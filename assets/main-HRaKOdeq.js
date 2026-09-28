var wm=Object.defineProperty;var Em=(i,t,e)=>t in i?wm(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Hr=(i,t,e)=>Em(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ul="163",Tm=0,Hh=1,Am=2,Hf=1,Vf=2,Gn=3,$n=0,Fe=1,on=2,Ae=0,Yi=1,Fs=2,Vh=3,Gh=4,Ol=5,pn=100,Rm=101,Cm=102,Pm=103,Lm=104,As=200,No=201,Im=202,Dm=203,Xc=204,qc=205,$c=206,Nm=207,Yc=208,Um=209,Om=210,Fm=211,km=212,zm=213,Bm=214,Hm=0,Vm=1,Gm=2,Ho=3,Wm=4,Xm=5,qm=6,$m=7,Gf=0,Ym=1,jm=2,gi=0,Km=1,Zm=2,Jm=3,Wf=4,Qm=5,Fl=6,tg=7,Wh="attached",eg="detached",Xf=300,ks=301,zs=302,jc=303,Kc=304,ca=306,yi=1e3,Wi=1001,Zc=1002,ye=1003,ng=1004,Vr=1005,mn=1006,Ra=1007,Xi=1008,Xn=1009,ig=1010,sg=1011,qf=1012,$f=1013,Bs=1014,An=1015,Ke=1016,Yf=1017,jf=1018,Zs=1020,rg=35902,og=1021,ag=1022,an=1023,cg=1024,lg=1025,Is=1026,Hs=1027,Kf=1028,Zf=1029,hg=1030,Jf=1031,Qf=1033,Ca=33776,Pa=33777,La=33778,Ia=33779,Xh=35840,qh=35841,$h=35842,Yh=35843,tp=36196,jh=37492,Kh=37496,Zh=37808,Jh=37809,Qh=37810,tu=37811,eu=37812,nu=37813,iu=37814,su=37815,ru=37816,ou=37817,au=37818,cu=37819,lu=37820,hu=37821,Da=36492,uu=36494,du=36495,ug=36283,fu=36284,pu=36285,mu=36286,dg=3200,ep=3201,kl=0,fg=1,fi="",fn="srgb",Ei="srgb-linear",zl="display-p3",la="display-p3-linear",Vo="linear",se="srgb",Go="rec709",Wo="p3",ts=7680,gu=519,pg=512,mg=513,gg=514,np=515,vg=516,xg=517,_g=518,Mg=519,vu=35044,xu=35048,_u="300 es",Wn=2e3,Xo=2001;class Js{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Na=Math.PI/180,Jc=180/Math.PI;function Qs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Re(i,t,e){return Math.max(t,Math.min(e,i))}function yg(i,t){return(i%t+t)%t}function Ua(i,t,e){return(1-e)*i+e*t}function cr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ot{constructor(t=0,e=0){ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,s,r,o,a,c,l){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],_=s[1],x=s[4],b=s[7],R=s[2],w=s[5],T=s[8];return r[0]=o*v+a*_+c*R,r[3]=o*m+a*x+c*w,r[6]=o*p+a*b+c*T,r[1]=l*v+h*_+u*R,r[4]=l*m+h*x+u*w,r[7]=l*p+h*b+u*T,r[2]=d*v+f*_+g*R,r[5]=d*m+f*x+g*w,r[8]=d*p+f*b+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Oa.makeScale(t,e)),this}rotate(t){return this.premultiply(Oa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Oa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Oa=new Bt;function ip(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sg(){const i=qo("canvas");return i.style.display="block",i}const Mu={};function bg(i){i in Mu||(Mu[i]=!0,console.warn(i))}const yu=new Bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Su=new Bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gr={[Ei]:{transfer:Vo,primaries:Go,toReference:i=>i,fromReference:i=>i},[fn]:{transfer:se,primaries:Go,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[la]:{transfer:Vo,primaries:Wo,toReference:i=>i.applyMatrix3(Su),fromReference:i=>i.applyMatrix3(yu)},[zl]:{transfer:se,primaries:Wo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Su),fromReference:i=>i.applyMatrix3(yu).convertLinearToSRGB()}},wg=new Set([Ei,la]),Qt={enabled:!0,_workingColorSpace:Ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!wg.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Gr[t].toReference,s=Gr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Gr[i].primaries},getTransfer:function(i){return i===fi?Vo:Gr[i].transfer}};function Ds(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let es;class Eg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{es===void 0&&(es=qo("canvas")),es.width=t.width,es.height=t.height;const n=es.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ds(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ds(e[n]/255)*255):e[n]=Ds(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Tg=0;class sp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Qs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ka(s[o].image)):r.push(ka(s[o]))}else r=ka(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ka(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Eg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ag=0;class ke extends Js{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=Wi,s=Wi,r=mn,o=Xi,a=an,c=Xn,l=ke.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Qs(),this.name="",this.source=new sp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yi:t.x=t.x-Math.floor(t.x);break;case Wi:t.x=t.x<0?0:1;break;case Zc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yi:t.y=t.y-Math.floor(t.y);break;case Wi:t.y=t.y<0?0:1;break;case Zc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Xf;ke.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,s=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,b=(f+1)/2,R=(p+1)/2,w=(h+d)/4,T=(u+v)/4,L=(g+m)/4;return x>b&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=w/n,r=T/n):b>R?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=w/s,r=L/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=T/r,s=L/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rg extends Js{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new sp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class He extends Rg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class rp extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ye,this.minFilter=ye,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cg extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ye,this.minFilter=ye,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*v,_=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const R=Math.sqrt(x),w=Math.atan2(R,p*_);m=Math.sin(m*w)/R,a=Math.sin(a*w)/R}const b=a*_;if(c=c*m+d*b,l=l*m+f*b,h=h*m+g*b,u=u*m+v*b,m===1-a){const R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return za.copy(this).projectOnVector(t),this.sub(za)}reflect(t){return this.sub(za.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const za=new A,bu=new Nn;class Ti{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ln):ln.fromBufferAttribute(r,o),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(t.matrixWorld),this.union(Wr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(lr),Xr.subVectors(this.max,lr),ns.subVectors(t.a,lr),is.subVectors(t.b,lr),ss.subVectors(t.c,lr),ti.subVectors(is,ns),ei.subVectors(ss,is),Ii.subVectors(ns,ss);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-Ii.z,Ii.y,ti.z,0,-ti.x,ei.z,0,-ei.x,Ii.z,0,-Ii.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-Ii.y,Ii.x,0];return!Ba(e,ns,is,ss,Xr)||(e=[1,0,0,0,1,0,0,0,1],!Ba(e,ns,is,ss,Xr))?!1:(qr.crossVectors(ti,ei),e=[qr.x,qr.y,qr.z],Ba(e,ns,is,ss,Xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Fn=[new A,new A,new A,new A,new A,new A,new A,new A],ln=new A,Wr=new Ti,ns=new A,is=new A,ss=new A,ti=new A,ei=new A,Ii=new A,lr=new A,Xr=new A,qr=new A,Di=new A;function Ba(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Di.fromArray(i,r);const a=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),c=t.dot(Di),l=e.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Pg=new Ti,hr=new A,Ha=new A;class Kn{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Pg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hr.subVectors(t,this.center);const e=hr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(hr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hr.copy(t.center).add(Ha)),this.expandByPoint(hr.copy(t.center).sub(Ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new A,Va=new A,$r=new A,ni=new A,Ga=new A,Yr=new A,Wa=new A;class Bl{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Va.copy(t).add(e).multiplyScalar(.5),$r.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(Va);const r=t.distanceTo(e)*.5,o=-this.direction.dot($r),a=ni.dot(this.direction),c=-ni.dot($r),l=ni.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Va).addScaledVector($r,d),f}intersectSphere(t,e){kn.subVectors(t.center,this.origin);const n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,s,r){Ga.subVectors(e,t),Yr.subVectors(n,t),Wa.crossVectors(Ga,Yr);let o=this.direction.dot(Wa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ni.subVectors(this.origin,t);const c=a*this.direction.dot(Yr.crossVectors(ni,Yr));if(c<0)return null;const l=a*this.direction.dot(Ga.cross(ni));if(l<0||c+l>o)return null;const h=-a*ni.dot(Wa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,g,v,m){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,v,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),o=1/rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d+v*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lg,t,Ig)}lookAt(t,e,n){const s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),ii.crossVectors(n,Xe),ii.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),ii.crossVectors(n,Xe)),ii.normalize(),jr.crossVectors(Xe,ii),s[0]=ii.x,s[4]=jr.x,s[8]=Xe.x,s[1]=ii.y,s[5]=jr.y,s[9]=Xe.y,s[2]=ii.z,s[6]=jr.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],x=n[7],b=n[11],R=n[15],w=s[0],T=s[4],L=s[8],S=s[12],M=s[1],D=s[5],O=s[9],I=s[13],z=s[2],X=s[6],Y=s[10],et=s[14],U=s[3],q=s[7],$=s[11],Q=s[15];return r[0]=o*w+a*M+c*z+l*U,r[4]=o*T+a*D+c*X+l*q,r[8]=o*L+a*O+c*Y+l*$,r[12]=o*S+a*I+c*et+l*Q,r[1]=h*w+u*M+d*z+f*U,r[5]=h*T+u*D+d*X+f*q,r[9]=h*L+u*O+d*Y+f*$,r[13]=h*S+u*I+d*et+f*Q,r[2]=g*w+v*M+m*z+p*U,r[6]=g*T+v*D+m*X+p*q,r[10]=g*L+v*O+m*Y+p*$,r[14]=g*S+v*I+m*et+p*Q,r[3]=_*w+x*M+b*z+R*U,r[7]=_*T+x*D+b*X+R*q,r[11]=_*L+x*O+b*Y+R*$,r[15]=_*S+x*I+b*et+R*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+v*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],_=u*m*l-v*d*l+v*c*f-a*m*f-u*c*p+a*d*p,x=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,b=h*v*l-g*u*l+g*a*f-o*v*f-h*a*p+o*u*p,R=g*u*c-h*v*c-g*a*d+o*v*d+h*a*m-o*u*m,w=e*_+n*x+s*b+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=_*T,t[1]=(v*d*r-u*m*r-v*s*f+n*m*f+u*s*p-n*d*p)*T,t[2]=(a*m*r-v*c*r+v*s*l-n*m*l-a*s*p+n*c*p)*T,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*T,t[4]=x*T,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*T,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*T,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*T,t[8]=b*T,t[9]=(g*u*r-h*v*r-g*n*f+e*v*f+h*n*p-e*u*p)*T,t[10]=(o*v*r-g*a*r+g*n*l-e*v*l-o*n*p+e*a*p)*T,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*T,t[12]=R*T,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*m+e*u*m)*T,t[14]=(g*a*s-o*v*s-g*n*c+e*v*c+o*n*m-e*a*m)*T,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,v=o*h,m=o*u,p=a*u,_=c*l,x=c*h,b=c*u,R=n.x,w=n.y,T=n.z;return s[0]=(1-(v+p))*R,s[1]=(f+b)*R,s[2]=(g-x)*R,s[3]=0,s[4]=(f-b)*w,s[5]=(1-(d+p))*w,s[6]=(m+_)*w,s[7]=0,s[8]=(g+x)*T,s[9]=(m-_)*T,s[10]=(1-(d+v))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=rs.set(s[0],s[1],s[2]).length();const o=rs.set(s[4],s[5],s[6]).length(),a=rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],hn.copy(this);const l=1/r,h=1/o,u=1/a;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,e.setFromRotationMatrix(hn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Wn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===Wn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Xo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Wn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h;let g,v;if(a===Wn)g=(o+r)*u,v=-2*u;else if(a===Xo)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const rs=new A,hn=new Pt,Lg=new A(0,0,0),Ig=new A(1,1,1),ii=new A,jr=new A,Xe=new A,wu=new Pt,Eu=new Nn;class cn{constructor(t=0,e=0,n=0,s=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Eu.setFromEuler(this),this.setFromQuaternion(Eu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class op{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Dg=0;const Tu=new A,os=new Nn,zn=new Pt,Kr=new A,ur=new A,Ng=new A,Ug=new Nn,Au=new A(1,0,0),Ru=new A(0,1,0),Cu=new A(0,0,1),Pu={type:"added"},Og={type:"removed"},as={type:"childadded",child:null},Xa={type:"childremoved",child:null};class Se extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new A,e=new cn,n=new Nn,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Bt}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new op,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(Au,t)}rotateY(t){return this.rotateOnAxis(Ru,t)}rotateZ(t){return this.rotateOnAxis(Cu,t)}translateOnAxis(t,e){return Tu.copy(t).applyQuaternion(this.quaternion),this.position.add(Tu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Au,t)}translateY(t){return this.translateOnAxis(Ru,t)}translateZ(t){return this.translateOnAxis(Cu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Kr.copy(t):Kr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(ur,Kr,this.up):zn.lookAt(Kr,ur,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),os.setFromRotationMatrix(zn),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pu),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Og),Xa.child=t,this.dispatchEvent(Xa),Xa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pu),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,t,Ng),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,Ug,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Se.DEFAULT_UP=new A(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new A,Bn=new A,qa=new A,Hn=new A,cs=new A,ls=new A,Lu=new A,$a=new A,Ya=new A,ja=new A;class En{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),un.subVectors(t,e),s.cross(un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){un.subVectors(s,e),Bn.subVectors(n,e),qa.subVectors(t,e);const o=un.dot(un),a=un.dot(Bn),c=un.dot(qa),l=Bn.dot(Bn),h=Bn.dot(qa),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Hn.x),c.addScaledVector(o,Hn.y),c.addScaledVector(a,Hn.z),c)}static isFrontFacing(t,e,n,s){return un.subVectors(n,e),Bn.subVectors(t,e),un.cross(Bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),un.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return En.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;cs.subVectors(s,n),ls.subVectors(r,n),$a.subVectors(t,n);const c=cs.dot($a),l=ls.dot($a);if(c<=0&&l<=0)return e.copy(n);Ya.subVectors(t,s);const h=cs.dot(Ya),u=ls.dot(Ya);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(cs,o);ja.subVectors(t,r);const f=cs.dot(ja),g=ls.dot(ja);if(g>=0&&f<=g)return e.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ls,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Lu.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Lu,a);const p=1/(m+v+d);return o=v*p,a=d*p,e.copy(n).addScaledVector(cs,o).addScaledVector(ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function Ka(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=yg(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ka(o,r,t+1/3),this.g=Ka(o,r,t),this.b=Ka(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=fn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){const n=ap[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}copyLinearToSRGB(t){return this.r=Fa(t.r),this.g=Fa(t.g),this.b=Fa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return Qt.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Re(Ne.r*255,0,255))*65536+Math.round(Re(Ne.g*255,0,255))*256+Math.round(Re(Ne.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ne.copy(this),e);const n=Ne.r,s=Ne.g,r=Ne.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=fn){Qt.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,s=Ne.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(Zr);const n=Ua(si.h,Zr.h,e),s=Ua(si.s,Zr.s,e),r=Ua(si.l,Zr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new lt;lt.NAMES=ap;let Fg=0;class Qi extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=Qs(),this.name="",this.type="Material",this.blending=Yi,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xc,this.blendDst=qc,this.blendEquation=pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xc&&(n.blendSrc=this.blendSrc),this.blendDst!==qc&&(n.blendDst=this.blendDst),this.blendEquation!==pn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ho&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Yn extends Qi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Gf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new A,Jr=new ot;class ce{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return bg("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Jr.fromBufferAttribute(this,e),Jr.applyMatrix3(t),this.setXY(e,Jr.x,Jr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=cr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=cr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=cr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=cr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=cr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vu&&(t.usage=this.usage),t}}class Hl extends ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class cp extends ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Vt extends ce{constructor(t,e,n){super(new Float32Array(t),e,n)}}let kg=0;const Qe=new Pt,Za=new Se,hs=new A,qe=new Ti,dr=new Ti,Te=new A;class de extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ip(t)?cp:Hl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return Za.lookAt(t),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Vt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors(qe.min,dr.min),qe.expandByPoint(Te),Te.addVectors(qe.max,dr.max),qe.expandByPoint(Te)):(qe.expandByPoint(dr.min),qe.expandByPoint(dr.max))}qe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Te));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Te.fromBufferAttribute(a,l),c&&(hs.fromBufferAttribute(t,l),Te.add(hs)),s=Math.max(s,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ce(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new A,c[L]=new A;const l=new A,h=new A,u=new A,d=new ot,f=new ot,g=new ot,v=new A,m=new A;function p(L,S,M){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[L].add(v),a[S].add(v),a[M].add(v),c[L].add(m),c[S].add(m),c[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let L=0,S=_.length;L<S;++L){const M=_[L],D=M.start,O=M.count;for(let I=D,z=D+O;I<z;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const x=new A,b=new A,R=new A,w=new A;function T(L){R.fromBufferAttribute(s,L),w.copy(R);const S=a[L];x.copy(S),x.sub(R.multiplyScalar(R.dot(S))).normalize(),b.crossVectors(w,S);const D=b.dot(c[L])<0?-1:1;o.setXYZW(L,x.x,x.y,x.z,D)}for(let L=0,S=_.length;L<S;++L){const M=_[L],D=M.start,O=M.count;for(let I=D,z=D+O;I<z;I+=3)T(t.getX(I+0)),T(t.getX(I+1)),T(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new A,r=new A,o=new A,a=new A,c=new A,l=new A,h=new A,u=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new ce(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new de,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Iu=new Pt,Ni=new Bl,Qr=new Kn,Du=new A,us=new A,ds=new A,fs=new A,Ja=new A,to=new A,eo=new ot,no=new ot,io=new ot,Nu=new A,Uu=new A,Ou=new A,so=new A,ro=new A;class ft extends Se{constructor(t=new de,e=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){to.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Ja.fromBufferAttribute(u,t),o?to.addScaledVector(Ja,h):to.addScaledVector(Ja.sub(e),h))}e.add(to)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(r),Ni.copy(t.ray).recast(t.near),!(Qr.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Qr,Du)===null||Ni.origin.distanceToSquared(Du)>(t.far-t.near)**2))&&(Iu.copy(r).invert(),Ni.copy(t.ray).applyMatrix4(Iu),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=_,R=x;b<R;b+=3){const w=a.getX(b),T=a.getX(b+1),L=a.getX(b+2);s=oo(this,p,t,n,l,h,u,w,T,L),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=a.getX(m),x=a.getX(m+1),b=a.getX(m+2);s=oo(this,o,t,n,l,h,u,_,x,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let b=_,R=x;b<R;b+=3){const w=b,T=b+1,L=b+2;s=oo(this,p,t,n,l,h,u,w,T,L),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=m,x=m+1,b=m+2;s=oo(this,o,t,n,l,h,u,_,x,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function zg(i,t,e,n,s,r,o,a){let c;if(t.side===Fe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===$n,a),c===null)return null;ro.copy(a),ro.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ro);return l<e.near||l>e.far?null:{distance:l,point:ro.clone(),object:i}}function oo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,us),i.getVertexPosition(c,ds),i.getVertexPosition(l,fs);const h=zg(i,t,e,n,us,ds,fs,so);if(h){s&&(eo.fromBufferAttribute(s,a),no.fromBufferAttribute(s,c),io.fromBufferAttribute(s,l),h.uv=En.getInterpolation(so,us,ds,fs,eo,no,io,new ot)),r&&(eo.fromBufferAttribute(r,a),no.fromBufferAttribute(r,c),io.fromBufferAttribute(r,l),h.uv1=En.getInterpolation(so,us,ds,fs,eo,no,io,new ot)),o&&(Nu.fromBufferAttribute(o,a),Uu.fromBufferAttribute(o,c),Ou.fromBufferAttribute(o,l),h.normal=En.getInterpolation(so,us,ds,fs,Nu,Uu,Ou,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new A,materialIndex:0};En.getNormal(us,ds,fs,u.normal),h.face=u}return h}class me extends de{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(u,2));function g(v,m,p,_,x,b,R,w,T,L,S){const M=b/T,D=R/L,O=b/2,I=R/2,z=w/2,X=T+1,Y=L+1;let et=0,U=0;const q=new A;for(let $=0;$<Y;$++){const Q=$*D-I;for(let dt=0;dt<X;dt++){const _t=dt*M-O;q[v]=_t*_,q[m]=Q*x,q[p]=z,l.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[p]=w>0?1:-1,h.push(q.x,q.y,q.z),u.push(dt/T),u.push(1-$/L),et+=1}}for(let $=0;$<L;$++)for(let Q=0;Q<T;Q++){const dt=d+Q+X*$,_t=d+Q+X*($+1),k=d+(Q+1)+X*($+1),K=d+(Q+1)+X*$;c.push(dt,_t,K),c.push(_t,k,K),U+=6}a.addGroup(f,U,S),f+=U,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ze(i){const t={};for(let e=0;e<i.length;e++){const n=Vs(i[e]);for(const s in n)t[s]=n[s]}return t}function Bg(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function lp(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Tn={clone:Vs,merge:ze};var Hg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class te extends Qi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hg,this.fragmentShader=Vg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vs(t.uniforms),this.uniformsGroups=Bg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class hp extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new A,Fu=new ot,ku=new ot;class rn extends hp{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Jc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Na*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jc*2*Math.atan(Math.tan(Na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,Fu,ku),e.subVectors(ku,Fu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Na*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ps=-90,ms=1;class up extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(ps,ms,t,e);s.layers=this.layers,this.add(s);const r=new rn(ps,ms,t,e);r.layers=this.layers,this.add(r);const o=new rn(ps,ms,t,e);o.layers=this.layers,this.add(o);const a=new rn(ps,ms,t,e);a.layers=this.layers,this.add(a);const c=new rn(ps,ms,t,e);c.layers=this.layers,this.add(c);const l=new rn(ps,ms,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class dp extends ke{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ks,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fp extends He{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new dp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new me(5,5,5),r=new te({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:Ae});r.uniforms.tEquirect.value=e;const o=new ft(s,r),a=e.minFilter;return e.minFilter===Xi&&(e.minFilter=mn),new up(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Qa=new A,Gg=new A,Wg=new Bt;class Bi{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Qa.subVectors(n,e).cross(Gg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Qa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Wg.getNormalMatrix(t),s=this.coplanarPoint(Qa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Kn,ao=new A;class Vl{constructor(t=new Bi,e=new Bi,n=new Bi,s=new Bi,r=new Bi,o=new Bi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],_=s[13],x=s[14],b=s[15];if(n[0].setComponents(c-r,d-l,m-f,b-p).normalize(),n[1].setComponents(c+r,d+l,m+f,b+p).normalize(),n[2].setComponents(c+o,d+h,m+g,b+_).normalize(),n[3].setComponents(c-o,d-h,m-g,b-_).normalize(),n[4].setComponents(c-a,d-u,m-v,b-x).normalize(),e===Wn)n[5].setComponents(c+a,d+u,m+v,b+x).normalize();else if(e===Xo)n[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ao.x=s.normal.x>0?t.max.x:t.min.x,ao.y=s.normal.y>0?t.max.y:t.min.y,ao.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ao)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pp(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Xg(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c._updateRange,d=c.updateRanges;if(i.bindBuffer(l,a),u.count===-1&&d.length===0&&i.bufferSubData(l,0,h),d.length!==0){for(let f=0,g=d.length;f<g;f++){const v=d[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Pe extends de{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const _=p*d-o;for(let x=0;x<l;x++){const b=x*u-r;g.push(b,-_,0),v.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){const x=_+l*p,b=_+l*(p+1),R=_+1+l*(p+1),w=_+1+l*p;f.push(x,b,w),f.push(b,R,w)}this.setIndex(f),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(v,3)),this.setAttribute("uv",new Vt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.width,t.height,t.widthSegments,t.heightSegments)}}var qg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$g=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tv=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ev=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,nv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ov=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,av=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_v=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sv="gl_FragColor = linearToOutputTexel( gl_FragColor );",bv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,wv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ev=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Av=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Iv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Uv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ov=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Bv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$v=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ex=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ix=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ox=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,cx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,lx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ux=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,px=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_x=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ax=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Cx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Px=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ix=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ux=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ox=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$x=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,t_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,e_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,r_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,a_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,u_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,f_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,p_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,v_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,__=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,y_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,w_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:qg,alphahash_pars_fragment:$g,alphamap_fragment:Yg,alphamap_pars_fragment:jg,alphatest_fragment:Kg,alphatest_pars_fragment:Zg,aomap_fragment:Jg,aomap_pars_fragment:Qg,batching_pars_vertex:tv,batching_vertex:ev,begin_vertex:nv,beginnormal_vertex:iv,bsdfs:sv,iridescence_fragment:rv,bumpmap_pars_fragment:ov,clipping_planes_fragment:av,clipping_planes_pars_fragment:cv,clipping_planes_pars_vertex:lv,clipping_planes_vertex:hv,color_fragment:uv,color_pars_fragment:dv,color_pars_vertex:fv,color_vertex:pv,common:mv,cube_uv_reflection_fragment:gv,defaultnormal_vertex:vv,displacementmap_pars_vertex:xv,displacementmap_vertex:_v,emissivemap_fragment:Mv,emissivemap_pars_fragment:yv,colorspace_fragment:Sv,colorspace_pars_fragment:bv,envmap_fragment:wv,envmap_common_pars_fragment:Ev,envmap_pars_fragment:Tv,envmap_pars_vertex:Av,envmap_physical_pars_fragment:zv,envmap_vertex:Rv,fog_vertex:Cv,fog_pars_vertex:Pv,fog_fragment:Lv,fog_pars_fragment:Iv,gradientmap_pars_fragment:Dv,lightmap_fragment:Nv,lightmap_pars_fragment:Uv,lights_lambert_fragment:Ov,lights_lambert_pars_fragment:Fv,lights_pars_begin:kv,lights_toon_fragment:Bv,lights_toon_pars_fragment:Hv,lights_phong_fragment:Vv,lights_phong_pars_fragment:Gv,lights_physical_fragment:Wv,lights_physical_pars_fragment:Xv,lights_fragment_begin:qv,lights_fragment_maps:$v,lights_fragment_end:Yv,logdepthbuf_fragment:jv,logdepthbuf_pars_fragment:Kv,logdepthbuf_pars_vertex:Zv,logdepthbuf_vertex:Jv,map_fragment:Qv,map_pars_fragment:tx,map_particle_fragment:ex,map_particle_pars_fragment:nx,metalnessmap_fragment:ix,metalnessmap_pars_fragment:sx,morphinstance_vertex:rx,morphcolor_vertex:ox,morphnormal_vertex:ax,morphtarget_pars_vertex:cx,morphtarget_vertex:lx,normal_fragment_begin:hx,normal_fragment_maps:ux,normal_pars_fragment:dx,normal_pars_vertex:fx,normal_vertex:px,normalmap_pars_fragment:mx,clearcoat_normal_fragment_begin:gx,clearcoat_normal_fragment_maps:vx,clearcoat_pars_fragment:xx,iridescence_pars_fragment:_x,opaque_fragment:Mx,packing:yx,premultiplied_alpha_fragment:Sx,project_vertex:bx,dithering_fragment:wx,dithering_pars_fragment:Ex,roughnessmap_fragment:Tx,roughnessmap_pars_fragment:Ax,shadowmap_pars_fragment:Rx,shadowmap_pars_vertex:Cx,shadowmap_vertex:Px,shadowmask_pars_fragment:Lx,skinbase_vertex:Ix,skinning_pars_vertex:Dx,skinning_vertex:Nx,skinnormal_vertex:Ux,specularmap_fragment:Ox,specularmap_pars_fragment:Fx,tonemapping_fragment:kx,tonemapping_pars_fragment:zx,transmission_fragment:Bx,transmission_pars_fragment:Hx,uv_pars_fragment:Vx,uv_pars_vertex:Gx,uv_vertex:Wx,worldpos_vertex:Xx,background_vert:qx,background_frag:$x,backgroundCube_vert:Yx,backgroundCube_frag:jx,cube_vert:Kx,cube_frag:Zx,depth_vert:Jx,depth_frag:Qx,distanceRGBA_vert:t_,distanceRGBA_frag:e_,equirect_vert:n_,equirect_frag:i_,linedashed_vert:s_,linedashed_frag:r_,meshbasic_vert:o_,meshbasic_frag:a_,meshlambert_vert:c_,meshlambert_frag:l_,meshmatcap_vert:h_,meshmatcap_frag:u_,meshnormal_vert:d_,meshnormal_frag:f_,meshphong_vert:p_,meshphong_frag:m_,meshphysical_vert:g_,meshphysical_frag:v_,meshtoon_vert:x_,meshtoon_frag:__,points_vert:M_,points_frag:y_,shadow_vert:S_,shadow_frag:b_,sprite_vert:w_,sprite_frag:E_},ct={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},bn={basic:{uniforms:ze([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:ze([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new lt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:ze([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:ze([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:ze([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new lt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:ze([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:ze([ct.points,ct.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:ze([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:ze([ct.common,ct.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:ze([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:ze([ct.sprite,ct.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:ze([ct.common,ct.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:ze([ct.lights,ct.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};bn.physical={uniforms:ze([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const co={r:0,b:0,g:0},Oi=new cn,T_=new Pt;function A_(i,t,e,n,s,r,o){const a=new lt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(m,p){let _=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?v(a,c):x&&x.isColor&&(v(x,1),_=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ca)?(h===void 0&&(h=new ft(new me(1,1,1),new te({name:"BackgroundCubeMaterial",uniforms:Vs(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Oi.copy(p.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(T_.makeRotationFromEuler(Oi)),h.material.toneMapped=Qt.getTransfer(x.colorSpace)!==se,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ft(new Pe(2,2),new te({name:"BackgroundMaterial",uniforms:Vs(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(x.colorSpace)!==se,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,p){m.getRGB(co,lp(i)),n.buffers.color.setClear(co.r,co.g,co.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(a,c)},render:g}}function R_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,D,O,I,z){let X=!1;const Y=u(I,O,D);r!==Y&&(r=Y,l(r.object)),X=f(M,I,O,z),X&&g(M,I,O,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,b(M,D,O,I),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,D,O){const I=O.wireframe===!0;let z=n[M.id];z===void 0&&(z={},n[M.id]=z);let X=z[D.id];X===void 0&&(X={},z[D.id]=X);let Y=X[I];return Y===void 0&&(Y=d(c()),X[I]=Y),Y}function d(M){const D=[],O=[],I=[];for(let z=0;z<e;z++)D[z]=0,O[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:I,object:M,attributes:{},index:null}}function f(M,D,O,I){const z=r.attributes,X=D.attributes;let Y=0;const et=O.getAttributes();for(const U in et)if(et[U].location>=0){const $=z[U];let Q=X[U];if(Q===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),$===void 0||$.attribute!==Q||Q&&$.data!==Q.data)return!0;Y++}return r.attributesNum!==Y||r.index!==I}function g(M,D,O,I){const z={},X=D.attributes;let Y=0;const et=O.getAttributes();for(const U in et)if(et[U].location>=0){let $=X[U];$===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&($=M.instanceColor));const Q={};Q.attribute=$,$&&$.data&&(Q.data=$.data),z[U]=Q,Y++}r.attributes=z,r.attributesNum=Y,r.index=I}function v(){const M=r.newAttributes;for(let D=0,O=M.length;D<O;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){const O=r.newAttributes,I=r.enabledAttributes,z=r.attributeDivisors;O[M]=1,I[M]===0&&(i.enableVertexAttribArray(M),I[M]=1),z[M]!==D&&(i.vertexAttribDivisor(M,D),z[M]=D)}function _(){const M=r.newAttributes,D=r.enabledAttributes;for(let O=0,I=D.length;O<I;O++)D[O]!==M[O]&&(i.disableVertexAttribArray(O),D[O]=0)}function x(M,D,O,I,z,X,Y){Y===!0?i.vertexAttribIPointer(M,D,O,z,X):i.vertexAttribPointer(M,D,O,I,z,X)}function b(M,D,O,I){v();const z=I.attributes,X=O.getAttributes(),Y=D.defaultAttributeValues;for(const et in X){const U=X[et];if(U.location>=0){let q=z[et];if(q===void 0&&(et==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),et==="instanceColor"&&M.instanceColor&&(q=M.instanceColor)),q!==void 0){const $=q.normalized,Q=q.itemSize,dt=t.get(q);if(dt===void 0)continue;const _t=dt.buffer,k=dt.type,K=dt.bytesPerElement,at=k===i.INT||k===i.UNSIGNED_INT||q.gpuType===$f;if(q.isInterleavedBufferAttribute){const nt=q.data,St=nt.stride,Et=q.offset;if(nt.isInstancedInterleavedBuffer){for(let Lt=0;Lt<U.locationSize;Lt++)p(U.location+Lt,nt.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Lt=0;Lt<U.locationSize;Lt++)m(U.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Lt=0;Lt<U.locationSize;Lt++)x(U.location+Lt,Q/U.locationSize,k,$,St*K,(Et+Q/U.locationSize*Lt)*K,at)}else{if(q.isInstancedBufferAttribute){for(let nt=0;nt<U.locationSize;nt++)p(U.location+nt,q.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let nt=0;nt<U.locationSize;nt++)m(U.location+nt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let nt=0;nt<U.locationSize;nt++)x(U.location+nt,Q/U.locationSize,k,$,Q*K,Q/U.locationSize*nt*K,at)}}else if(Y!==void 0){const $=Y[et];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(U.location,$);break;case 3:i.vertexAttrib3fv(U.location,$);break;case 4:i.vertexAttrib4fv(U.location,$);break;default:i.vertexAttrib1fv(U.location,$)}}}}_()}function R(){L();for(const M in n){const D=n[M];for(const O in D){const I=D[O];for(const z in I)h(I[z].object),delete I[z];delete D[O]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const O in D){const I=D[O];for(const z in I)h(I[z].object),delete I[z];delete D[O]}delete n[M.id]}function T(M){for(const D in n){const O=n[D];if(O[M.id]===void 0)continue;const I=O[M.id];for(const z in I)h(I[z].object),delete I[z];delete O[M.id]}}function L(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function C_(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<h;d++)this.render(c[d],l[d]);else{u.multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];e.update(d,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function P_(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const x=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=e.precision!==void 0?e.precision:"highp";const a=r(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const c=e.logarithmicDepthBuffer===!0,l=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),m=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),p=h>0,_=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:c,maxTextures:l,maxVertexTextures:h,maxTextureSize:u,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:m,vertexTextures:p,maxSamples:_}}function L_(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Bi,a=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const _=r?0:n,x=_*4;let b=p.clippingState||null;c.value=b,b=h(g,d,x,f);for(let R=0;R!==x;++R)b[R]=e[R];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,b=f;x!==v;++x,b+=4)o.copy(u[x]).applyMatrix4(_,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function I_(i){let t=new WeakMap;function e(o,a){return a===jc?o.mapping=ks:a===Kc&&(o.mapping=zs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===jc||a===Kc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new fp(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Gl extends hp{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Rs=4,zu=[.125,.215,.35,.446,.526,.582],Gi=20,tc=new Gl,Bu=new lt;let ec=null,nc=0,ic=0,sc=!1;const Hi=(1+Math.sqrt(5))/2,gs=1/Hi,Hu=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,Hi,gs),new A(0,Hi,-gs),new A(gs,0,Hi),new A(-gs,0,Hi),new A(Hi,gs,0),new A(-Hi,gs,0)];class $o{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ec=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ec,nc,ic),this._renderer.xr.enabled=sc,t.scissorTest=!1,lo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ks||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ec=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Ke,format:an,colorSpace:Ei,depthBuffer:!1},s=Vu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D_(r)),this._blurMaterial=N_(r,t,e)}return s}_compileMaterial(t){const e=new ft(this._lodPlanes[0],t);this._renderer.compile(e,tc)}_sceneToCubeUV(t,e,n,s){const a=new rn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Bu),h.toneMapping=gi,h.autoClear=!1;const f=new Yn({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new ft(new me,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Bu),v=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):_===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;lo(s,_*x,p>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ks||t.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ft(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;lo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,tc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Hu[(s-1)%Hu.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ft(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Gi;m>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const p=[];let _=0;for(let T=0;T<Gi;++T){const L=T/v,S=Math.exp(-L*L/2);p.push(S),T===0?_+=S:T<m&&(_+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const b=this._sizeLods[s],R=3*b*(s>x-Rs?s-x+Rs:0),w=4*(this._cubeSize-b);lo(e,R,w,3*b,2*b),c.setRenderTarget(e),c.render(u,tc)}}function D_(i){const t=[],e=[],n=[];let s=i;const r=i-Rs+1+zu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Rs?c=zu[o-i+Rs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*f),x=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let w=0;w<f;w++){const T=w%3*2/3-1,L=w>2?0:-1,S=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];_.set(S,v*g*w),x.set(d,m*g*w);const M=[w,w,w,w,w,w];b.set(M,p*g*w)}const R=new de;R.setAttribute("position",new ce(_,v)),R.setAttribute("uv",new ce(x,m)),R.setAttribute("faceIndex",new ce(b,p)),t.push(R),s>Rs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Vu(i,t,e){const n=new He(i,t,e);return n.texture.mapping=ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function N_(i,t,e){const n=new Float32Array(Gi),s=new A(0,1,0);return new te({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ae,depthTest:!1,depthWrite:!1})}function Gu(){return new te({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ae,depthTest:!1,depthWrite:!1})}function Wu(){return new te({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ae,depthTest:!1,depthWrite:!1})}function Wl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function U_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===jc||c===Kc,h=c===ks||c===zs;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new $o(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new $o(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function O_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function F_(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const _=f.array;v=f.version;for(let x=0,b=_.length;x<b;x+=3){const R=_[x+0],w=_[x+1],T=_[x+2];d.push(R,w,w,T,T,R)}}else if(g!==void 0){const _=g.array;v=g.version;for(let x=0,b=_.length/3-1;x<b;x+=3){const R=x+0,w=x+1,T=x+2;d.push(R,w,w,T,T,R)}}else return;const m=new(ip(d)?cp:Hl)(d,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function k_(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*o),e.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<f;v++)this.render(u[v]/o,d[v]);else{g.multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let m=0;m<f;m++)v+=d[m];e.update(v,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function z_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function B_(i,t,e){const n=new WeakMap,s=new ve;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;f===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let b=a.attributes.position.count*x,R=1;b>t.maxTextureSize&&(R=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const w=new Float32Array(b*R*4*u),T=new rp(w,b,R,u);T.type=An,T.needsUpdate=!0;const L=x*4;for(let M=0;M<u;M++){const D=m[M],O=p[M],I=_[M],z=b*R*4*M;for(let X=0;X<D.count;X++){const Y=X*L;f===!0&&(s.fromBufferAttribute(D,X),w[z+Y+0]=s.x,w[z+Y+1]=s.y,w[z+Y+2]=s.z,w[z+Y+3]=0),g===!0&&(s.fromBufferAttribute(O,X),w[z+Y+4]=s.x,w[z+Y+5]=s.y,w[z+Y+6]=s.z,w[z+Y+7]=0),v===!0&&(s.fromBufferAttribute(I,X),w[z+Y+8]=s.x,w[z+Y+9]=s.y,w[z+Y+10]=s.z,w[z+Y+11]=I.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new ot(b,R)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function H_(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Xl extends ke{constructor(t,e,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:Is,h!==Is&&h!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Is&&(n=Bs),n===void 0&&h===Hs&&(n=Zs),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ye,this.minFilter=c!==void 0?c:ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const mp=new ke,gp=new Xl(1,1);gp.compareFunction=np;const vp=new rp,xp=new Cg,_p=new dp,Xu=[],qu=[],$u=new Float32Array(16),Yu=new Float32Array(9),ju=new Float32Array(4);function tr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Xu[s];if(r===void 0&&(r=new Float32Array(s),Xu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ha(i,t){let e=qu[t];e===void 0&&(e=new Int32Array(t),qu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function V_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function G_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function W_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function X_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function q_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;ju.set(n),i.uniformMatrix2fv(this.addr,!1,ju),we(e,n)}}function $_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;Yu.set(n),i.uniformMatrix3fv(this.addr,!1,Yu),we(e,n)}}function Y_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;$u.set(n),i.uniformMatrix4fv(this.addr,!1,$u),we(e,n)}}function j_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function K_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function Z_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function J_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function Q_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function t1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function e1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function n1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function i1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?gp:mp;e.setTexture2D(t||r,s)}function s1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||xp,s)}function r1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||_p,s)}function o1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vp,s)}function a1(i){switch(i){case 5126:return V_;case 35664:return G_;case 35665:return W_;case 35666:return X_;case 35674:return q_;case 35675:return $_;case 35676:return Y_;case 5124:case 35670:return j_;case 35667:case 35671:return K_;case 35668:case 35672:return Z_;case 35669:case 35673:return J_;case 5125:return Q_;case 36294:return t1;case 36295:return e1;case 36296:return n1;case 35678:case 36198:case 36298:case 36306:case 35682:return i1;case 35679:case 36299:case 36307:return s1;case 35680:case 36300:case 36308:case 36293:return r1;case 36289:case 36303:case 36311:case 36292:return o1}}function c1(i,t){i.uniform1fv(this.addr,t)}function l1(i,t){const e=tr(t,this.size,2);i.uniform2fv(this.addr,e)}function h1(i,t){const e=tr(t,this.size,3);i.uniform3fv(this.addr,e)}function u1(i,t){const e=tr(t,this.size,4);i.uniform4fv(this.addr,e)}function d1(i,t){const e=tr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function f1(i,t){const e=tr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function p1(i,t){const e=tr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function m1(i,t){i.uniform1iv(this.addr,t)}function g1(i,t){i.uniform2iv(this.addr,t)}function v1(i,t){i.uniform3iv(this.addr,t)}function x1(i,t){i.uniform4iv(this.addr,t)}function _1(i,t){i.uniform1uiv(this.addr,t)}function M1(i,t){i.uniform2uiv(this.addr,t)}function y1(i,t){i.uniform3uiv(this.addr,t)}function S1(i,t){i.uniform4uiv(this.addr,t)}function b1(i,t,e){const n=this.cache,s=t.length,r=ha(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||mp,r[o])}function w1(i,t,e){const n=this.cache,s=t.length,r=ha(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||xp,r[o])}function E1(i,t,e){const n=this.cache,s=t.length,r=ha(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||_p,r[o])}function T1(i,t,e){const n=this.cache,s=t.length,r=ha(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||vp,r[o])}function A1(i){switch(i){case 5126:return c1;case 35664:return l1;case 35665:return h1;case 35666:return u1;case 35674:return d1;case 35675:return f1;case 35676:return p1;case 5124:case 35670:return m1;case 35667:case 35671:return g1;case 35668:case 35672:return v1;case 35669:case 35673:return x1;case 5125:return _1;case 36294:return M1;case 36295:return y1;case 36296:return S1;case 35678:case 36198:case 36298:case 36306:case 35682:return b1;case 35679:case 36299:case 36307:return w1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return T1}}class R1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=a1(e.type)}}class C1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=A1(e.type)}}class P1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const rc=/(\w+)(\])?(\[|\.)?/g;function Ku(i,t){i.seq.push(t),i.map[t.id]=t}function L1(i,t,e){const n=i.name,s=n.length;for(rc.lastIndex=0;;){const r=rc.exec(n),o=rc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ku(e,l===void 0?new R1(a,i,t):new C1(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new P1(a),Ku(e,u)),e=u}}}class Uo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);L1(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Zu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const I1=37297;let D1=0;function N1(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function U1(i){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(i);let n;switch(t===e?n="":t===Wo&&e===Go?n="LinearDisplayP3ToLinearSRGB":t===Go&&e===Wo&&(n="LinearSRGBToLinearDisplayP3"),i){case Ei:case la:return[n,"LinearTransferOETF"];case fn:case zl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ju(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+N1(i.getShaderSource(t),o)}else return s}function O1(i,t){const e=U1(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function F1(i,t){let e;switch(t){case Km:e="Linear";break;case Zm:e="Reinhard";break;case Jm:e="OptimizedCineon";break;case Wf:e="ACESFilmic";break;case Fl:e="AgX";break;case tg:e="Neutral";break;case Qm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function k1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function z1(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function B1(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Mr(i){return i!==""}function Qu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function td(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const H1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(i){return i.replace(H1,G1)}const V1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function G1(i,t){let e=zt[t];if(e===void 0){const n=V1.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qc(e)}const W1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ed(i){return i.replace(W1,X1)}function X1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function q1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gn&&(t="SHADOWMAP_TYPE_VSM"),t}function $1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ks:case zs:t="ENVMAP_TYPE_CUBE";break;case ca:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Y1(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zs:t="ENVMAP_MODE_REFRACTION";break}return t}function j1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gf:t="ENVMAP_BLENDING_MULTIPLY";break;case Ym:t="ENVMAP_BLENDING_MIX";break;case jm:t="ENVMAP_BLENDING_ADD";break}return t}function K1(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Z1(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=q1(e),l=$1(e),h=Y1(e),u=j1(e),d=K1(e),f=k1(e),g=z1(r),v=s.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mr).join(`
`),p.length>0&&(p+=`
`)):(m=[nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),p=[nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?zt.tonemapping_pars_fragment:"",e.toneMapping!==gi?F1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,O1("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mr).join(`
`)),o=Qc(o),o=Qu(o,e),o=td(o,e),a=Qc(a),a=Qu(a,e),a=td(a,e),o=ed(o),a=ed(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===_u?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=_+m+o,b=_+p+a,R=Zu(s,s.VERTEX_SHADER,x),w=Zu(s,s.FRAGMENT_SHADER,b);s.attachShader(v,R),s.attachShader(v,w),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(D){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(v).trim(),I=s.getShaderInfoLog(R).trim(),z=s.getShaderInfoLog(w).trim();let X=!0,Y=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,w);else{const et=Ju(s,R,"vertex"),U=Ju(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+et+`
`+U)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(I===""||z==="")&&(Y=!1);Y&&(D.diagnostics={runnable:X,programLog:O,vertexShader:{log:I,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(R),s.deleteShader(w),L=new Uo(s,v),S=B1(s,v)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,I1)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=D1++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=w,this}let J1=0;class Q1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new tM(t),e.set(t,n)),n}}class tM{constructor(t){this.id=J1++,this.code=t,this.usedTimes=0}}function eM(i,t,e,n,s,r,o){const a=new op,c=new Q1,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,D,O,I){const z=O.fog,X=I.geometry,Y=S.isMeshStandardMaterial?O.environment:null,et=(S.isMeshStandardMaterial?e:t).get(S.envMap||Y),U=et&&et.mapping===ca?et.image.height:null,q=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const $=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Q=$!==void 0?$.length:0;let dt=0;X.morphAttributes.position!==void 0&&(dt=1),X.morphAttributes.normal!==void 0&&(dt=2),X.morphAttributes.color!==void 0&&(dt=3);let _t,k,K,at;if(q){const Le=bn[q];_t=Le.vertexShader,k=Le.fragmentShader}else _t=S.vertexShader,k=S.fragmentShader,c.update(S),K=c.getVertexShaderID(S),at=c.getFragmentShaderID(S);const nt=i.getRenderTarget(),St=I.isInstancedMesh===!0,Et=I.isBatchedMesh===!0,Lt=!!S.map,F=!!S.matcap,pt=!!et,Mt=!!S.aoMap,Jt=!!S.lightMap,Tt=!!S.bumpMap,qt=!!S.normalMap,C=!!S.displacementMap,y=!!S.emissiveMap,H=!!S.metalnessMap,j=!!S.roughnessMap,Z=S.anisotropy>0,J=S.clearcoat>0,At=S.iridescence>0,tt=S.sheen>0,bt=S.transmission>0,Rt=Z&&!!S.anisotropyMap,rt=J&&!!S.clearcoatMap,ut=J&&!!S.clearcoatNormalMap,It=J&&!!S.clearcoatRoughnessMap,mt=At&&!!S.iridescenceMap,vt=At&&!!S.iridescenceThicknessMap,Gt=tt&&!!S.sheenColorMap,Xt=tt&&!!S.sheenRoughnessMap,Zt=!!S.specularMap,jt=!!S.specularColorMap,ne=!!S.specularIntensityMap,xt=bt&&!!S.transmissionMap,P=bt&&!!S.thicknessMap,st=!!S.gradientMap,it=!!S.alphaMap,yt=S.alphaTest>0,Ct=!!S.alphaHash,ie=!!S.extensions;let he=gi;S.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(he=i.toneMapping);const fe={shaderID:q,shaderType:S.type,shaderName:S.name,vertexShader:_t,fragmentShader:k,defines:S.defines,customVertexShaderID:K,customFragmentShaderID:at,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Et,instancing:St,instancingColor:St&&I.instanceColor!==null,instancingMorph:St&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Ei,alphaToCoverage:!!S.alphaToCoverage,map:Lt,matcap:F,envMap:pt,envMapMode:pt&&et.mapping,envMapCubeUVHeight:U,aoMap:Mt,lightMap:Jt,bumpMap:Tt,normalMap:qt,displacementMap:d&&C,emissiveMap:y,normalMapObjectSpace:qt&&S.normalMapType===fg,normalMapTangentSpace:qt&&S.normalMapType===kl,metalnessMap:H,roughnessMap:j,anisotropy:Z,anisotropyMap:Rt,clearcoat:J,clearcoatMap:rt,clearcoatNormalMap:ut,clearcoatRoughnessMap:It,iridescence:At,iridescenceMap:mt,iridescenceThicknessMap:vt,sheen:tt,sheenColorMap:Gt,sheenRoughnessMap:Xt,specularMap:Zt,specularColorMap:jt,specularIntensityMap:ne,transmission:bt,transmissionMap:xt,thicknessMap:P,gradientMap:st,opaque:S.transparent===!1&&S.blending===Yi&&S.alphaToCoverage===!1,alphaMap:it,alphaTest:yt,alphaHash:Ct,combine:S.combine,mapUv:Lt&&v(S.map.channel),aoMapUv:Mt&&v(S.aoMap.channel),lightMapUv:Jt&&v(S.lightMap.channel),bumpMapUv:Tt&&v(S.bumpMap.channel),normalMapUv:qt&&v(S.normalMap.channel),displacementMapUv:C&&v(S.displacementMap.channel),emissiveMapUv:y&&v(S.emissiveMap.channel),metalnessMapUv:H&&v(S.metalnessMap.channel),roughnessMapUv:j&&v(S.roughnessMap.channel),anisotropyMapUv:Rt&&v(S.anisotropyMap.channel),clearcoatMapUv:rt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ut&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&v(S.sheenRoughnessMap.channel),specularMapUv:Zt&&v(S.specularMap.channel),specularColorMapUv:jt&&v(S.specularColorMap.channel),specularIntensityMapUv:ne&&v(S.specularIntensityMap.channel),transmissionMapUv:xt&&v(S.transmissionMap.channel),thicknessMapUv:P&&v(S.thicknessMap.channel),alphaMapUv:it&&v(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(qt||Z),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!X.attributes.uv&&(Lt||it),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:I.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:dt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Lt&&S.map.isVideoTexture===!0&&Qt.getTransfer(S.map.colorSpace)===se,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===on,flipSided:S.side===Fe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ie&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ie&&S.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return fe.vertexUv1s=l.has(1),fe.vertexUv2s=l.has(2),fe.vertexUv3s=l.has(3),l.clear(),fe}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)M.push(D),M.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(_(M,S),x(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function _(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),S.push(a.mask)}function b(S){const M=g[S.type];let D;if(M){const O=bn[M];D=Tn.clone(O.uniforms)}else D=S.uniforms;return D}function R(S,M){let D;for(let O=0,I=h.length;O<I;O++){const z=h[O];if(z.cacheKey===M){D=z,++D.usedTimes;break}}return D===void 0&&(D=new Z1(i,M,S,r),h.push(D)),D}function w(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function T(S){c.remove(S)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:R,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:L}}function nM(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function iM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function id(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function sd(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function a(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||iM),n.length>1&&n.sort(d||id),s.length>1&&s.sort(d||id)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function sM(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new sd,i.set(n,[o])):s>=r.length?(o=new sd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function rM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new lt};break;case"SpotLight":e={position:new A,direction:new A,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":e={color:new lt,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function oM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let aM=0;function cM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function lM(i){const t=new rM,e=oM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const s=new A,r=new Pt,o=new Pt;function a(l,h){let u=0,d=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let g=0,v=0,m=0,p=0,_=0,x=0,b=0,R=0,w=0,T=0,L=0;l.sort(cM);const S=h===!0?Math.PI:1;for(let D=0,O=l.length;D<O;D++){const I=l[D],z=I.color,X=I.intensity,Y=I.distance,et=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=z.r*X*S,d+=z.g*X*S,f+=z.b*X*S;else if(I.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(I.sh.coefficients[U],X);L++}else if(I.isDirectionalLight){const U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*S),I.castShadow){const q=I.shadow,$=e.get(I);$.shadowBias=q.bias,$.shadowNormalBias=q.normalBias,$.shadowRadius=q.radius,$.shadowMapSize=q.mapSize,n.directionalShadow[g]=$,n.directionalShadowMap[g]=et,n.directionalShadowMatrix[g]=I.shadow.matrix,x++}n.directional[g]=U,g++}else if(I.isSpotLight){const U=t.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(z).multiplyScalar(X*S),U.distance=Y,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,n.spot[m]=U;const q=I.shadow;if(I.map&&(n.spotLightMap[w]=I.map,w++,q.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[m]=q.matrix,I.castShadow){const $=e.get(I);$.shadowBias=q.bias,$.shadowNormalBias=q.normalBias,$.shadowRadius=q.radius,$.shadowMapSize=q.mapSize,n.spotShadow[m]=$,n.spotShadowMap[m]=et,R++}m++}else if(I.isRectAreaLight){const U=t.get(I);U.color.copy(z).multiplyScalar(X),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=U,p++}else if(I.isPointLight){const U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*S),U.distance=I.distance,U.decay=I.decay,I.castShadow){const q=I.shadow,$=e.get(I);$.shadowBias=q.bias,$.shadowNormalBias=q.normalBias,$.shadowRadius=q.radius,$.shadowMapSize=q.mapSize,$.shadowCameraNear=q.camera.near,$.shadowCameraFar=q.camera.far,n.pointShadow[v]=$,n.pointShadowMap[v]=et,n.pointShadowMatrix[v]=I.shadow.matrix,b++}n.point[v]=U,v++}else if(I.isHemisphereLight){const U=t.get(I);U.skyColor.copy(I.color).multiplyScalar(X*S),U.groundColor.copy(I.groundColor).multiplyScalar(X*S),n.hemi[_]=U,_++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const M=n.hash;(M.directionalLength!==g||M.pointLength!==v||M.spotLength!==m||M.rectAreaLength!==p||M.hemiLength!==_||M.numDirectionalShadows!==x||M.numPointShadows!==b||M.numSpotShadows!==R||M.numSpotMaps!==w||M.numLightProbes!==L)&&(n.directional.length=g,n.spot.length=m,n.rectArea.length=p,n.point.length=v,n.hemi.length=_,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=R+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=L,M.directionalLength=g,M.pointLength=v,M.spotLength=m,M.rectAreaLength=p,M.hemiLength=_,M.numDirectionalShadows=x,M.numPointShadows=b,M.numSpotShadows=R,M.numSpotMaps=w,M.numLightProbes=L,n.version=aM++)}function c(l,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){const x=l[p];if(x.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(x.isSpotLight){const b=n.spot[f];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const b=n.hemi[v];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function rd(i){const t=new lM(i),e=[],n=[];function s(){e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(h){t.setup(e,h)}function c(h){t.setupView(e,h)}return{init:s,state:{lightsArray:e,shadowsArray:n,lights:t,transmissionRenderTarget:null},setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function hM(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new rd(i),t.set(s,[a])):r>=o.length?(a=new rd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Mp extends Qi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class uM extends Qi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const dM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pM(i,t,e){let n=new Vl;const s=new ot,r=new ot,o=new ve,a=new Mp({depthPacking:ep}),c=new uM,l={},h=e.maxTextureSize,u={[$n]:Fe,[Fe]:$n,[on]:on},d=new te({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:dM,fragmentShader:fM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new de;g.setAttribute("position",new ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ft(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hf;let p=this.type;this.render=function(w,T,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Ae),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const I=p!==Gn&&this.type===Gn,z=p===Gn&&this.type!==Gn;for(let X=0,Y=w.length;X<Y;X++){const et=w[X],U=et.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const q=U.getFrameExtents();if(s.multiply(q),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,U.mapSize.y=r.y)),U.map===null||I===!0||z===!0){const Q=this.type!==Gn?{minFilter:ye,magFilter:ye}:{};U.map!==null&&U.map.dispose(),U.map=new He(s.x,s.y,Q),U.map.texture.name=et.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();const $=U.getViewportCount();for(let Q=0;Q<$;Q++){const dt=U.getViewport(Q);o.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),O.viewport(o),U.updateMatrices(et,Q),n=U.getFrustum(),b(T,L,U.camera,et,this.type)}U.isPointLightShadow!==!0&&this.type===Gn&&_(U,L),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,D)};function _(w,T){const L=t.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new He(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,L,d,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,L,f,v,null)}function x(w,T,L,S){let M=null;const D=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)M=D;else if(M=L.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const O=M.uuid,I=T.uuid;let z=l[O];z===void 0&&(z={},l[O]=z);let X=z[I];X===void 0&&(X=M.clone(),z[I]=X,T.addEventListener("dispose",R)),M=X}if(M.visible=T.visible,M.wireframe=T.wireframe,S===Gn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=i.properties.get(M);O.light=L}return M}function b(w,T,L,S,M){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Gn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const I=t.update(w),z=w.material;if(Array.isArray(z)){const X=I.groups;for(let Y=0,et=X.length;Y<et;Y++){const U=X[Y],q=z[U.materialIndex];if(q&&q.visible){const $=x(w,q,S,M);w.onBeforeShadow(i,w,T,L,I,$,U),i.renderBufferDirect(L,null,I,$,w,U),w.onAfterShadow(i,w,T,L,I,$,U)}}}else if(z.visible){const X=x(w,z,S,M);w.onBeforeShadow(i,w,T,L,I,X,null),i.renderBufferDirect(L,null,I,X,w,null),w.onAfterShadow(i,w,T,L,I,X,null)}}const O=w.children;for(let I=0,z=O.length;I<z;I++)b(O[I],T,L,S,M)}function R(w){w.target.removeEventListener("dispose",R);for(const L in l){const S=l[L],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function mM(i){function t(){let P=!1;const st=new ve;let it=null;const yt=new ve(0,0,0,0);return{setMask:function(Ct){it!==Ct&&!P&&(i.colorMask(Ct,Ct,Ct,Ct),it=Ct)},setLocked:function(Ct){P=Ct},setClear:function(Ct,ie,he,fe,Le){Le===!0&&(Ct*=fe,ie*=fe,he*=fe),st.set(Ct,ie,he,fe),yt.equals(st)===!1&&(i.clearColor(Ct,ie,he,fe),yt.copy(st))},reset:function(){P=!1,it=null,yt.set(-1,0,0,0)}}}function e(){let P=!1,st=null,it=null,yt=null;return{setTest:function(Ct){Ct?at(i.DEPTH_TEST):nt(i.DEPTH_TEST)},setMask:function(Ct){st!==Ct&&!P&&(i.depthMask(Ct),st=Ct)},setFunc:function(Ct){if(it!==Ct){switch(Ct){case Hm:i.depthFunc(i.NEVER);break;case Vm:i.depthFunc(i.ALWAYS);break;case Gm:i.depthFunc(i.LESS);break;case Ho:i.depthFunc(i.LEQUAL);break;case Wm:i.depthFunc(i.EQUAL);break;case Xm:i.depthFunc(i.GEQUAL);break;case qm:i.depthFunc(i.GREATER);break;case $m:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}it=Ct}},setLocked:function(Ct){P=Ct},setClear:function(Ct){yt!==Ct&&(i.clearDepth(Ct),yt=Ct)},reset:function(){P=!1,st=null,it=null,yt=null}}}function n(){let P=!1,st=null,it=null,yt=null,Ct=null,ie=null,he=null,fe=null,Le=null;return{setTest:function(le){P||(le?at(i.STENCIL_TEST):nt(i.STENCIL_TEST))},setMask:function(le){st!==le&&!P&&(i.stencilMask(le),st=le)},setFunc:function(le,xn,_n){(it!==le||yt!==xn||Ct!==_n)&&(i.stencilFunc(le,xn,_n),it=le,yt=xn,Ct=_n)},setOp:function(le,xn,_n){(ie!==le||he!==xn||fe!==_n)&&(i.stencilOp(le,xn,_n),ie=le,he=xn,fe=_n)},setLocked:function(le){P=le},setClear:function(le){Le!==le&&(i.clearStencil(le),Le=le)},reset:function(){P=!1,st=null,it=null,yt=null,Ct=null,ie=null,he=null,fe=null,Le=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,_=null,x=null,b=null,R=null,w=new lt(0,0,0),T=0,L=!1,S=null,M=null,D=null,O=null,I=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Y=0;const et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(et)[1]),X=Y>=1):et.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),X=Y>=2);let U=null,q={};const $=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),dt=new ve().fromArray($),_t=new ve().fromArray(Q);function k(P,st,it,yt){const Ct=new Uint8Array(4),ie=i.createTexture();i.bindTexture(P,ie),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let he=0;he<it;he++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,Ct):i.texImage2D(st+he,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ct);return ie}const K={};K[i.TEXTURE_2D]=k(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=k(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=k(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=k(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),at(i.DEPTH_TEST),r.setFunc(Ho),Tt(!1),qt(Hh),at(i.CULL_FACE),Mt(Ae);function at(P){l[P]!==!0&&(i.enable(P),l[P]=!0)}function nt(P){l[P]!==!1&&(i.disable(P),l[P]=!1)}function St(P,st){return h[P]!==st?(i.bindFramebuffer(P,st),h[P]=st,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=st),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=st),!0):!1}function Et(P,st){let it=d,yt=!1;if(P){it=u.get(st),it===void 0&&(it=[],u.set(st,it));const Ct=P.textures;if(it.length!==Ct.length||it[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,he=Ct.length;ie<he;ie++)it[ie]=i.COLOR_ATTACHMENT0+ie;it.length=Ct.length,yt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,yt=!0);yt&&i.drawBuffers(it)}function Lt(P){return f!==P?(i.useProgram(P),f=P,!0):!1}const F={[pn]:i.FUNC_ADD,[Rm]:i.FUNC_SUBTRACT,[Cm]:i.FUNC_REVERSE_SUBTRACT};F[Pm]=i.MIN,F[Lm]=i.MAX;const pt={[As]:i.ZERO,[No]:i.ONE,[Im]:i.SRC_COLOR,[Xc]:i.SRC_ALPHA,[Om]:i.SRC_ALPHA_SATURATE,[Yc]:i.DST_COLOR,[$c]:i.DST_ALPHA,[Dm]:i.ONE_MINUS_SRC_COLOR,[qc]:i.ONE_MINUS_SRC_ALPHA,[Um]:i.ONE_MINUS_DST_COLOR,[Nm]:i.ONE_MINUS_DST_ALPHA,[Fm]:i.CONSTANT_COLOR,[km]:i.ONE_MINUS_CONSTANT_COLOR,[zm]:i.CONSTANT_ALPHA,[Bm]:i.ONE_MINUS_CONSTANT_ALPHA};function Mt(P,st,it,yt,Ct,ie,he,fe,Le,le){if(P===Ae){g===!0&&(nt(i.BLEND),g=!1);return}if(g===!1&&(at(i.BLEND),g=!0),P!==Ol){if(P!==v||le!==L){if((m!==pn||x!==pn)&&(i.blendEquation(i.FUNC_ADD),m=pn,x=pn),le)switch(P){case Yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fs:i.blendFunc(i.ONE,i.ONE);break;case Vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}p=null,_=null,b=null,R=null,w.set(0,0,0),T=0,v=P,L=le}return}Ct=Ct||st,ie=ie||it,he=he||yt,(st!==m||Ct!==x)&&(i.blendEquationSeparate(F[st],F[Ct]),m=st,x=Ct),(it!==p||yt!==_||ie!==b||he!==R)&&(i.blendFuncSeparate(pt[it],pt[yt],pt[ie],pt[he]),p=it,_=yt,b=ie,R=he),(fe.equals(w)===!1||Le!==T)&&(i.blendColor(fe.r,fe.g,fe.b,Le),w.copy(fe),T=Le),v=P,L=!1}function Jt(P,st){P.side===on?nt(i.CULL_FACE):at(i.CULL_FACE);let it=P.side===Fe;st&&(it=!it),Tt(it),P.blending===Yi&&P.transparent===!1?Mt(Ae):Mt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),s.setMask(P.colorWrite);const yt=P.stencilWrite;o.setTest(yt),yt&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),y(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(P){S!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),S=P)}function qt(P){P!==Tm?(at(i.CULL_FACE),P!==M&&(P===Hh?i.cullFace(i.BACK):P===Am?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):nt(i.CULL_FACE),M=P}function C(P){P!==D&&(X&&i.lineWidth(P),D=P)}function y(P,st,it){P?(at(i.POLYGON_OFFSET_FILL),(O!==st||I!==it)&&(i.polygonOffset(st,it),O=st,I=it)):nt(i.POLYGON_OFFSET_FILL)}function H(P){P?at(i.SCISSOR_TEST):nt(i.SCISSOR_TEST)}function j(P){P===void 0&&(P=i.TEXTURE0+z-1),U!==P&&(i.activeTexture(P),U=P)}function Z(P,st,it){it===void 0&&(U===null?it=i.TEXTURE0+z-1:it=U);let yt=q[it];yt===void 0&&(yt={type:void 0,texture:void 0},q[it]=yt),(yt.type!==P||yt.texture!==st)&&(U!==it&&(i.activeTexture(it),U=it),i.bindTexture(P,st||K[P]),yt.type=P,yt.texture=st)}function J(){const P=q[U];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function At(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function bt(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Rt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function It(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function mt(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Gt(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Xt(P){dt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),dt.copy(P))}function Zt(P){_t.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),_t.copy(P))}function jt(P,st){let it=c.get(st);it===void 0&&(it=new WeakMap,c.set(st,it));let yt=it.get(P);yt===void 0&&(yt=i.getUniformBlockIndex(st,P.name),it.set(P,yt))}function ne(P,st){const yt=c.get(st).get(P);a.get(st)!==yt&&(i.uniformBlockBinding(st,yt,P.__bindingPointIndex),a.set(st,yt))}function xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},U=null,q={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,_=null,x=null,b=null,R=null,w=new lt(0,0,0),T=0,L=!1,S=null,M=null,D=null,O=null,I=null,dt.set(0,0,i.canvas.width,i.canvas.height),_t.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:at,disable:nt,bindFramebuffer:St,drawBuffers:Et,useProgram:Lt,setBlending:Mt,setMaterial:Jt,setFlipSided:Tt,setCullFace:qt,setLineWidth:C,setPolygonOffset:y,setScissorTest:H,activeTexture:j,bindTexture:Z,unbindTexture:J,compressedTexImage2D:At,compressedTexImage3D:tt,texImage2D:vt,texImage3D:Gt,updateUBOMapping:jt,uniformBlockBinding:ne,texStorage2D:It,texStorage3D:mt,texSubImage2D:bt,texSubImage3D:Rt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ut,scissor:Xt,viewport:Zt,reset:xt}}function gM(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ot,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,y){return f?new OffscreenCanvas(C,y):qo("canvas")}function v(C,y,H){let j=1;const Z=qt(C);if((Z.width>H||Z.height>H)&&(j=H/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(j*Z.width),At=Math.floor(j*Z.height);u===void 0&&(u=g(J,At));const tt=y?g(J,At):u;return tt.width=J,tt.height=At,tt.getContext("2d").drawImage(C,0,0,J,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+J+"x"+At+")."),tt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==ye&&C.minFilter!==mn}function p(C){i.generateMipmap(C)}function _(C,y,H,j,Z=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=y;if(y===i.RED&&(H===i.FLOAT&&(J=i.R32F),H===i.HALF_FLOAT&&(J=i.R16F),H===i.UNSIGNED_BYTE&&(J=i.R8)),y===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.R8UI),H===i.UNSIGNED_SHORT&&(J=i.R16UI),H===i.UNSIGNED_INT&&(J=i.R32UI),H===i.BYTE&&(J=i.R8I),H===i.SHORT&&(J=i.R16I),H===i.INT&&(J=i.R32I)),y===i.RG&&(H===i.FLOAT&&(J=i.RG32F),H===i.HALF_FLOAT&&(J=i.RG16F),H===i.UNSIGNED_BYTE&&(J=i.RG8)),y===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RG8UI),H===i.UNSIGNED_SHORT&&(J=i.RG16UI),H===i.UNSIGNED_INT&&(J=i.RG32UI),H===i.BYTE&&(J=i.RG8I),H===i.SHORT&&(J=i.RG16I),H===i.INT&&(J=i.RG32I)),y===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),y===i.RGBA){const At=Z?Vo:Qt.getTransfer(j);H===i.FLOAT&&(J=i.RGBA32F),H===i.HALF_FLOAT&&(J=i.RGBA16F),H===i.UNSIGNED_BYTE&&(J=At===se?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==ye&&C.minFilter!==mn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function b(C){const y=C.target;y.removeEventListener("dispose",b),w(y),y.isVideoTexture&&h.delete(y)}function R(C){const y=C.target;y.removeEventListener("dispose",R),L(y)}function w(C){const y=n.get(C);if(y.__webglInit===void 0)return;const H=C.source,j=d.get(H);if(j){const Z=j[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&T(C),Object.keys(j).length===0&&d.delete(H)}n.remove(C)}function T(C){const y=n.get(C);i.deleteTexture(y.__webglTexture);const H=C.source,j=d.get(H);delete j[y.__cacheKey],o.memory.textures--}function L(C){const y=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let Z=0;Z<y.__webglFramebuffer[j].length;Z++)i.deleteFramebuffer(y.__webglFramebuffer[j][Z]);else i.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)i.deleteFramebuffer(y.__webglFramebuffer[j]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const H=C.textures;for(let j=0,Z=H.length;j<Z;j++){const J=n.get(H[j]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(H[j])}n.remove(C)}let S=0;function M(){S=0}function D(){const C=S;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),S+=1,C}function O(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function I(C,y){const H=n.get(C);if(C.isVideoTexture&&Jt(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(H,C,y);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+y)}function z(C,y){const H=n.get(C);if(C.version>0&&H.__version!==C.version){dt(H,C,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+y)}function X(C,y){const H=n.get(C);if(C.version>0&&H.__version!==C.version){dt(H,C,y);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+y)}function Y(C,y){const H=n.get(C);if(C.version>0&&H.__version!==C.version){_t(H,C,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+y)}const et={[yi]:i.REPEAT,[Wi]:i.CLAMP_TO_EDGE,[Zc]:i.MIRRORED_REPEAT},U={[ye]:i.NEAREST,[ng]:i.NEAREST_MIPMAP_NEAREST,[Vr]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[Ra]:i.LINEAR_MIPMAP_NEAREST,[Xi]:i.LINEAR_MIPMAP_LINEAR},q={[pg]:i.NEVER,[Mg]:i.ALWAYS,[mg]:i.LESS,[np]:i.LEQUAL,[gg]:i.EQUAL,[_g]:i.GEQUAL,[vg]:i.GREATER,[xg]:i.NOTEQUAL};function $(C,y){if(y.type===An&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===mn||y.magFilter===Ra||y.magFilter===Vr||y.magFilter===Xi||y.minFilter===mn||y.minFilter===Ra||y.minFilter===Vr||y.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,et[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,et[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,et[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,U[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,U[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,q[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===ye||y.minFilter!==Vr&&y.minFilter!==Xi||y.type===An&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Q(C,y){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",b));const j=y.source;let Z=d.get(j);Z===void 0&&(Z={},d.set(j,Z));const J=O(y);if(J!==C.__cacheKey){Z[J]===void 0&&(Z[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Z[J].usedTimes++;const At=Z[C.__cacheKey];At!==void 0&&(Z[C.__cacheKey].usedTimes--,At.usedTimes===0&&T(y)),C.__cacheKey=J,C.__webglTexture=Z[J].texture}return H}function dt(C,y,H){let j=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=i.TEXTURE_3D);const Z=Q(C,y),J=y.source;e.bindTexture(j,C.__webglTexture,i.TEXTURE0+H);const At=n.get(J);if(J.version!==At.__version||Z===!0){e.activeTexture(i.TEXTURE0+H);const tt=Qt.getPrimaries(Qt.workingColorSpace),bt=y.colorSpace===fi?null:Qt.getPrimaries(y.colorSpace),Rt=y.colorSpace===fi||tt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let rt=v(y.image,!1,s.maxTextureSize);rt=Tt(y,rt);const ut=r.convert(y.format,y.colorSpace),It=r.convert(y.type);let mt=_(y.internalFormat,ut,It,y.colorSpace,y.isVideoTexture);$(j,y);let vt;const Gt=y.mipmaps,Xt=y.isVideoTexture!==!0&&mt!==tp,Zt=At.__version===void 0||Z===!0,jt=J.dataReady,ne=x(y,rt);if(y.isDepthTexture)mt=i.DEPTH_COMPONENT16,y.type===An?mt=i.DEPTH_COMPONENT32F:y.type===Bs?mt=i.DEPTH_COMPONENT24:y.type===Zs&&(mt=i.DEPTH24_STENCIL8),Zt&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,mt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,mt,rt.width,rt.height,0,ut,It,null));else if(y.isDataTexture)if(Gt.length>0){Xt&&Zt&&e.texStorage2D(i.TEXTURE_2D,ne,mt,Gt[0].width,Gt[0].height);for(let xt=0,P=Gt.length;xt<P;xt++)vt=Gt[xt],Xt?jt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,vt.width,vt.height,ut,It,vt.data):e.texImage2D(i.TEXTURE_2D,xt,mt,vt.width,vt.height,0,ut,It,vt.data);y.generateMipmaps=!1}else Xt?(Zt&&e.texStorage2D(i.TEXTURE_2D,ne,mt,rt.width,rt.height),jt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,ut,It,rt.data)):e.texImage2D(i.TEXTURE_2D,0,mt,rt.width,rt.height,0,ut,It,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Xt&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ne,mt,Gt[0].width,Gt[0].height,rt.depth);for(let xt=0,P=Gt.length;xt<P;xt++)vt=Gt[xt],y.format!==an?ut!==null?Xt?jt&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,vt.width,vt.height,rt.depth,ut,vt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xt,mt,vt.width,vt.height,rt.depth,0,vt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?jt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,vt.width,vt.height,rt.depth,ut,It,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,xt,mt,vt.width,vt.height,rt.depth,0,ut,It,vt.data)}else{Xt&&Zt&&e.texStorage2D(i.TEXTURE_2D,ne,mt,Gt[0].width,Gt[0].height);for(let xt=0,P=Gt.length;xt<P;xt++)vt=Gt[xt],y.format!==an?ut!==null?Xt?jt&&e.compressedTexSubImage2D(i.TEXTURE_2D,xt,0,0,vt.width,vt.height,ut,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,xt,mt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?jt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,vt.width,vt.height,ut,It,vt.data):e.texImage2D(i.TEXTURE_2D,xt,mt,vt.width,vt.height,0,ut,It,vt.data)}else if(y.isDataArrayTexture)Xt?(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ne,mt,rt.width,rt.height,rt.depth),jt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,ut,It,rt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,mt,rt.width,rt.height,rt.depth,0,ut,It,rt.data);else if(y.isData3DTexture)Xt?(Zt&&e.texStorage3D(i.TEXTURE_3D,ne,mt,rt.width,rt.height,rt.depth),jt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,ut,It,rt.data)):e.texImage3D(i.TEXTURE_3D,0,mt,rt.width,rt.height,rt.depth,0,ut,It,rt.data);else if(y.isFramebufferTexture){if(Zt)if(Xt)e.texStorage2D(i.TEXTURE_2D,ne,mt,rt.width,rt.height);else{let xt=rt.width,P=rt.height;for(let st=0;st<ne;st++)e.texImage2D(i.TEXTURE_2D,st,mt,xt,P,0,ut,It,null),xt>>=1,P>>=1}}else if(Gt.length>0){if(Xt&&Zt){const xt=qt(Gt[0]);e.texStorage2D(i.TEXTURE_2D,ne,mt,xt.width,xt.height)}for(let xt=0,P=Gt.length;xt<P;xt++)vt=Gt[xt],Xt?jt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,ut,It,vt):e.texImage2D(i.TEXTURE_2D,xt,mt,ut,It,vt);y.generateMipmaps=!1}else if(Xt){if(Zt){const xt=qt(rt);e.texStorage2D(i.TEXTURE_2D,ne,mt,xt.width,xt.height)}jt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,It,rt)}else e.texImage2D(i.TEXTURE_2D,0,mt,ut,It,rt);m(y)&&p(j),At.__version=J.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function _t(C,y,H){if(y.image.length!==6)return;const j=Q(C,y),Z=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);const J=n.get(Z);if(Z.version!==J.__version||j===!0){e.activeTexture(i.TEXTURE0+H);const At=Qt.getPrimaries(Qt.workingColorSpace),tt=y.colorSpace===fi?null:Qt.getPrimaries(y.colorSpace),bt=y.colorSpace===fi||At===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Rt=y.isCompressedTexture||y.image[0].isCompressedTexture,rt=y.image[0]&&y.image[0].isDataTexture,ut=[];for(let P=0;P<6;P++)!Rt&&!rt?ut[P]=v(y.image[P],!0,s.maxCubemapSize):ut[P]=rt?y.image[P].image:y.image[P],ut[P]=Tt(y,ut[P]);const It=ut[0],mt=r.convert(y.format,y.colorSpace),vt=r.convert(y.type),Gt=_(y.internalFormat,mt,vt,y.colorSpace),Xt=y.isVideoTexture!==!0,Zt=J.__version===void 0||j===!0,jt=Z.dataReady;let ne=x(y,It);$(i.TEXTURE_CUBE_MAP,y);let xt;if(Rt){Xt&&Zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ne,Gt,It.width,It.height);for(let P=0;P<6;P++){xt=ut[P].mipmaps;for(let st=0;st<xt.length;st++){const it=xt[st];y.format!==an?mt!==null?Xt?jt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,st,0,0,it.width,it.height,mt,it.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,st,Gt,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?jt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,st,0,0,it.width,it.height,mt,vt,it.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,st,Gt,it.width,it.height,0,mt,vt,it.data)}}}else{if(xt=y.mipmaps,Xt&&Zt){xt.length>0&&ne++;const P=qt(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ne,Gt,P.width,P.height)}for(let P=0;P<6;P++)if(rt){Xt?jt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,ut[P].width,ut[P].height,mt,vt,ut[P].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,Gt,ut[P].width,ut[P].height,0,mt,vt,ut[P].data);for(let st=0;st<xt.length;st++){const yt=xt[st].image[P].image;Xt?jt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,st+1,0,0,yt.width,yt.height,mt,vt,yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,st+1,Gt,yt.width,yt.height,0,mt,vt,yt.data)}}else{Xt?jt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,mt,vt,ut[P]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,Gt,mt,vt,ut[P]);for(let st=0;st<xt.length;st++){const it=xt[st];Xt?jt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,st+1,0,0,mt,vt,it.image[P]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,st+1,Gt,mt,vt,it.image[P])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),J.__version=Z.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function k(C,y,H,j,Z,J){const At=r.convert(H.format,H.colorSpace),tt=r.convert(H.type),bt=_(H.internalFormat,At,tt,H.colorSpace);if(!n.get(y).__hasExternalTextures){const rt=Math.max(1,y.width>>J),ut=Math.max(1,y.height>>J);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,J,bt,rt,ut,y.depth,0,At,tt,null):e.texImage2D(Z,J,bt,rt,ut,0,At,tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Mt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Z,n.get(H).__webglTexture,0,pt(y)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,Z,n.get(H).__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function K(C,y,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer&&!y.stencilBuffer){let j=i.DEPTH_COMPONENT24;if(H||Mt(y)){const Z=y.depthTexture;Z&&Z.isDepthTexture&&(Z.type===An?j=i.DEPTH_COMPONENT32F:Z.type===Bs&&(j=i.DEPTH_COMPONENT24));const J=pt(y);Mt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,j,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,J,j,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,j,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(y.depthBuffer&&y.stencilBuffer){const j=pt(y);H&&Mt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,j,i.DEPTH24_STENCIL8,y.width,y.height):Mt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{const j=y.textures;for(let Z=0;Z<j.length;Z++){const J=j[Z],At=r.convert(J.format,J.colorSpace),tt=r.convert(J.type),bt=_(J.internalFormat,At,tt,J.colorSpace),Rt=pt(y);H&&Mt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,bt,y.width,y.height):Mt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,bt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,bt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),I(y.depthTexture,0);const j=n.get(y.depthTexture).__webglTexture,Z=pt(y);if(y.depthTexture.format===Is)Mt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(y.depthTexture.format===Hs)Mt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function nt(C){const y=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");at(y.__webglFramebuffer,C)}else if(H){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]=i.createRenderbuffer(),K(y.__webglDepthbuffer[j],C,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),K(y.__webglDepthbuffer,C,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(C,y,H){const j=n.get(C);y!==void 0&&k(j.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&nt(C)}function Et(C){const y=C.texture,H=n.get(C),j=n.get(y);C.addEventListener("dispose",R);const Z=C.textures,J=C.isWebGLCubeRenderTarget===!0,At=Z.length>1;if(At||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=y.version,o.memory.textures++),J){H.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[tt]=[];for(let bt=0;bt<y.mipmaps.length;bt++)H.__webglFramebuffer[tt][bt]=i.createFramebuffer()}else H.__webglFramebuffer[tt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let tt=0;tt<y.mipmaps.length;tt++)H.__webglFramebuffer[tt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(At)for(let tt=0,bt=Z.length;tt<bt;tt++){const Rt=n.get(Z[tt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Mt(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let tt=0;tt<Z.length;tt++){const bt=Z[tt];H.__webglColorRenderbuffer[tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[tt]);const Rt=r.convert(bt.format,bt.colorSpace),rt=r.convert(bt.type),ut=_(bt.internalFormat,Rt,rt,bt.colorSpace,C.isXRRenderTarget===!0),It=pt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,ut,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,H.__webglColorRenderbuffer[tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),K(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),$(i.TEXTURE_CUBE_MAP,y);for(let tt=0;tt<6;tt++)if(y.mipmaps&&y.mipmaps.length>0)for(let bt=0;bt<y.mipmaps.length;bt++)k(H.__webglFramebuffer[tt][bt],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt);else k(H.__webglFramebuffer[tt],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let tt=0,bt=Z.length;tt<bt;tt++){const Rt=Z[tt],rt=n.get(Rt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),$(i.TEXTURE_2D,Rt),k(H.__webglFramebuffer,C,Rt,i.COLOR_ATTACHMENT0+tt,i.TEXTURE_2D,0),m(Rt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let tt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(tt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,j.__webglTexture),$(tt,y),y.mipmaps&&y.mipmaps.length>0)for(let bt=0;bt<y.mipmaps.length;bt++)k(H.__webglFramebuffer[bt],C,y,i.COLOR_ATTACHMENT0,tt,bt);else k(H.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,tt,0);m(y)&&p(tt),e.unbindTexture()}C.depthBuffer&&nt(C)}function Lt(C){const y=C.textures;for(let H=0,j=y.length;H<j;H++){const Z=y[H];if(m(Z)){const J=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,At=n.get(Z).__webglTexture;e.bindTexture(J,At),p(J),e.unbindTexture()}}}function F(C){if(C.samples>0&&Mt(C)===!1){const y=C.textures,H=C.width,j=C.height;let Z=i.COLOR_BUFFER_BIT;const J=[],At=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=n.get(C),bt=y.length>1;if(bt)for(let Rt=0;Rt<y.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,tt.__webglFramebuffer);for(let Rt=0;Rt<y.length;Rt++){J.push(i.COLOR_ATTACHMENT0+Rt),C.depthBuffer&&J.push(At);const rt=tt.__ignoreDepthValues!==void 0?tt.__ignoreDepthValues:!1;if(rt===!1&&(C.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&tt.__isTransmissionRenderTarget!==!0&&(Z|=i.STENCIL_BUFFER_BIT)),bt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt]),rt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[At]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[At])),bt){const ut=n.get(y[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ut,0)}i.blitFramebuffer(0,0,H,j,0,0,H,j,Z,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),bt)for(let Rt=0;Rt<y.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt]);const rt=n.get(y[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,tt.__webglMultisampledFramebuffer)}}function pt(C){return Math.min(s.maxSamples,C.samples)}function Mt(C){const y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Jt(C){const y=o.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function Tt(C,y){const H=C.colorSpace,j=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Ei&&H!==fi&&(Qt.getTransfer(H)===se?(j!==an||Z!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),y}function qt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=M,this.setTexture2D=I,this.setTexture2DArray=z,this.setTexture3D=X,this.setTextureCube=Y,this.rebindTextures=St,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=k,this.useMultisampledRTT=Mt}function vM(i,t){function e(n,s=fi){let r;const o=Qt.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===Yf)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rg)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ig)return i.BYTE;if(n===sg)return i.SHORT;if(n===qf)return i.UNSIGNED_SHORT;if(n===$f)return i.INT;if(n===Bs)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Ke)return i.HALF_FLOAT;if(n===og)return i.ALPHA;if(n===ag)return i.RGB;if(n===an)return i.RGBA;if(n===cg)return i.LUMINANCE;if(n===lg)return i.LUMINANCE_ALPHA;if(n===Is)return i.DEPTH_COMPONENT;if(n===Hs)return i.DEPTH_STENCIL;if(n===Kf)return i.RED;if(n===Zf)return i.RED_INTEGER;if(n===hg)return i.RG;if(n===Jf)return i.RG_INTEGER;if(n===Qf)return i.RGBA_INTEGER;if(n===Ca||n===Pa||n===La||n===Ia)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xh||n===qh||n===$h||n===Yh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$h)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tp)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===jh||n===Kh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jh)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Kh)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Zh||n===Jh||n===Qh||n===tu||n===eu||n===nu||n===iu||n===su||n===ru||n===ou||n===au||n===cu||n===lu||n===hu)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zh)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jh)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qh)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tu)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===eu)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nu)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===iu)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===su)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ru)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ou)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===au)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cu)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lu)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hu)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Da||n===uu||n===du)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Da)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===du)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ug||n===fu||n===pu||n===mu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Da)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class xM extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Wt extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _M={type:"move"};class oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_M)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const MM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class SM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,s=new te({vertexShader:MM,fragmentShader:yM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ft(new Pe(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class bM extends Js{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const v=new SM,m=e.getContextAttributes();let p=null,_=null;const x=[],b=[],R=new ot;let w=null;const T=new rn;T.layers.enable(1),T.viewport=new ve;const L=new rn;L.layers.enable(2),L.viewport=new ve;const S=[T,L],M=new xM;M.layers.enable(1),M.layers.enable(2);let D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let K=x[k];return K===void 0&&(K=new oc,x[k]=K),K.getTargetRaySpace()},this.getControllerGrip=function(k){let K=x[k];return K===void 0&&(K=new oc,x[k]=K),K.getGripSpace()},this.getHand=function(k){let K=x[k];return K===void 0&&(K=new oc,x[k]=K),K.getHandSpace()};function I(k){const K=b.indexOf(k.inputSource);if(K===-1)return;const at=x[K];at!==void 0&&(at.update(k.inputSource,k.frame,l||o),at.dispatchEvent({type:k.type,data:k.inputSource}))}function z(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",X);for(let k=0;k<x.length;k++){const K=b[k];K!==null&&(b[k]=null,x[k].disconnect(K))}D=null,O=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,_=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",z),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new He(f.framebufferWidth,f.framebufferHeight,{format:an,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,at=null,nt=null;m.depth&&(nt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=m.stencil?Hs:Is,at=m.stencil?Zs:Bs);const St={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(St),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new He(d.textureWidth,d.textureHeight,{format:an,type:Xn,depthTexture:new Xl(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});const Et=t.properties.get(_);Et.__ignoreDepthValues=d.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),_t.setContext(s),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function X(k){for(let K=0;K<k.removed.length;K++){const at=k.removed[K],nt=b.indexOf(at);nt>=0&&(b[nt]=null,x[nt].disconnect(at))}for(let K=0;K<k.added.length;K++){const at=k.added[K];let nt=b.indexOf(at);if(nt===-1){for(let Et=0;Et<x.length;Et++)if(Et>=b.length){b.push(at),nt=Et;break}else if(b[Et]===null){b[Et]=at,nt=Et;break}if(nt===-1)break}const St=x[nt];St&&St.connect(at)}}const Y=new A,et=new A;function U(k,K,at){Y.setFromMatrixPosition(K.matrixWorld),et.setFromMatrixPosition(at.matrixWorld);const nt=Y.distanceTo(et),St=K.projectionMatrix.elements,Et=at.projectionMatrix.elements,Lt=St[14]/(St[10]-1),F=St[14]/(St[10]+1),pt=(St[9]+1)/St[5],Mt=(St[9]-1)/St[5],Jt=(St[8]-1)/St[0],Tt=(Et[8]+1)/Et[0],qt=Lt*Jt,C=Lt*Tt,y=nt/(-Jt+Tt),H=y*-Jt;K.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(H),k.translateZ(y),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const j=Lt+y,Z=F+y,J=qt-H,At=C+(nt-H),tt=pt*F/Z*j,bt=Mt*F/Z*j;k.projectionMatrix.makePerspective(J,At,tt,bt,j,Z),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function q(k,K){K===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(K.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;v.texture!==null&&(k.near=v.depthNear,k.far=v.depthFar),M.near=L.near=T.near=k.near,M.far=L.far=T.far=k.far,(D!==M.near||O!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,O=M.far,T.near=D,T.far=O,L.near=D,L.far=O,T.updateProjectionMatrix(),L.updateProjectionMatrix(),k.updateProjectionMatrix());const K=k.parent,at=M.cameras;q(M,K);for(let nt=0;nt<at.length;nt++)q(at[nt],K);at.length===2?U(M,T,L):M.projectionMatrix.copy(T.projectionMatrix),$(k,M,K)};function $(k,K,at){at===null?k.matrix.copy(K.matrixWorld):(k.matrix.copy(at.matrixWorld),k.matrix.invert(),k.matrix.multiply(K.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Jc*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(k){c=k,d!==null&&(d.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.hasDepthSensing=function(){return v.texture!==null};let Q=null;function dt(k,K){if(h=K.getViewerPose(l||o),g=K,h!==null){const at=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let nt=!1;at.length!==M.cameras.length&&(M.cameras.length=0,nt=!0);for(let Et=0;Et<at.length;Et++){const Lt=at[Et];let F=null;if(f!==null)F=f.getViewport(Lt);else{const Mt=u.getViewSubImage(d,Lt);F=Mt.viewport,Et===0&&(t.setRenderTargetTextures(_,Mt.colorTexture,d.ignoreDepthValues?void 0:Mt.depthStencilTexture),t.setRenderTarget(_))}let pt=S[Et];pt===void 0&&(pt=new rn,pt.layers.enable(Et),pt.viewport=new ve,S[Et]=pt),pt.matrix.fromArray(Lt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Lt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(F.x,F.y,F.width,F.height),Et===0&&(M.matrix.copy(pt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),nt===!0&&M.cameras.push(pt)}const St=s.enabledFeatures;if(St&&St.includes("depth-sensing")){const Et=u.getDepthInformation(at[0]);Et&&Et.isValid&&Et.texture&&v.init(t,Et,s.renderState)}}for(let at=0;at<x.length;at++){const nt=b[at],St=x[at];nt!==null&&St!==void 0&&St.update(nt,K,l||o)}v.render(t,M),Q&&Q(k,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const _t=new pp;_t.setAnimationLoop(dt),this.setAnimationLoop=function(k){Q=k},this.dispose=function(){}}}const Fi=new cn,wM=new Pt;function EM(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,lp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,x,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p),x=_.envMap,b=_.envMapRotation;if(x&&(m.envMap.value=x,Fi.copy(b),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),m.envMapRotation.value.setFromMatrix4(wM.makeRotationFromEuler(Fi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const R=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*R,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function TM(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,x){const b=x.program;n.uniformBlockBinding(_,b)}function l(_,x){let b=s[_.id];b===void 0&&(g(_),b=h(_),s[_.id]=b,_.addEventListener("dispose",m));const R=x.program;n.updateUBOMapping(_,R);const w=t.render.frame;r[_.id]!==w&&(d(_),r[_.id]=w)}function h(_){const x=u();_.__bindingPointIndex=x;const b=i.createBuffer(),R=_.__size,w=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,b),b}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const x=s[_.id],b=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,T=b.length;w<T;w++){const L=Array.isArray(b[w])?b[w]:[b[w]];for(let S=0,M=L.length;S<M;S++){const D=L[S];if(f(D,w,S,R)===!0){const O=D.__offset,I=Array.isArray(D.value)?D.value:[D.value];let z=0;for(let X=0;X<I.length;X++){const Y=I[X],et=v(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,O+z,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,z),z+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,x,b,R){const w=_.value,T=x+"_"+b;if(R[T]===void 0)return typeof w=="number"||typeof w=="boolean"?R[T]=w:R[T]=w.clone(),!0;{const L=R[T];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return R[T]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(_){const x=_.uniforms;let b=0;const R=16;for(let T=0,L=x.length;T<L;T++){const S=Array.isArray(x[T])?x[T]:[x[T]];for(let M=0,D=S.length;M<D;M++){const O=S[M],I=Array.isArray(O.value)?O.value:[O.value];for(let z=0,X=I.length;z<X;z++){const Y=I[z],et=v(Y),U=b%R;U!==0&&R-U<et.boundary&&(b+=R-U),O.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,b+=et.storage}}}const w=b%R;return w>0&&(b+=R-w),_.__size=b,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class AM{constructor(t={}){const{canvas:e=Sg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this._useLegacyLights=!1,this.toneMapping=gi,this.toneMappingExposure=1;const x=this;let b=!1,R=0,w=0,T=null,L=-1,S=null;const M=new ve,D=new ve;let O=null;const I=new lt(0);let z=0,X=e.width,Y=e.height,et=1,U=null,q=null;const $=new ve(0,0,X,Y),Q=new ve(0,0,X,Y);let dt=!1;const _t=new Vl;let k=!1,K=!1;const at=new Pt,nt=new ot,St=new A,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Lt(){return T===null?et:1}let F=n;function pt(E,N){const V=e.getContext(E,N);return V!==null?V:null}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ul}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",it,!1),e.addEventListener("webglcontextcreationerror",yt,!1),F===null){const N="webgl2";if(F=pt(N,E),F===null)throw pt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Mt,Jt,Tt,qt,C,y,H,j,Z,J,At,tt,bt,Rt,rt,ut,It,mt,vt,Gt,Xt,Zt,jt,ne;function xt(){Mt=new O_(F),Mt.init(),Jt=new P_(F,Mt,t),Zt=new vM(F,Mt),Tt=new mM(F),qt=new z_(F),C=new nM,y=new gM(F,Mt,Tt,C,Jt,Zt,qt),H=new I_(x),j=new U_(x),Z=new Xg(F),jt=new R_(F,Z),J=new F_(F,Z,qt,jt),At=new H_(F,J,Z,qt),vt=new B_(F,Jt,y),ut=new L_(C),tt=new eM(x,H,j,Mt,Jt,jt,ut),bt=new EM(x,C),Rt=new sM,rt=new hM(Mt),mt=new A_(x,H,j,Tt,At,d,c),It=new pM(x,At,Jt),ne=new TM(F,qt,Jt,Tt),Gt=new C_(F,Mt,qt),Xt=new k_(F,Mt,qt),qt.programs=tt.programs,x.capabilities=Jt,x.extensions=Mt,x.properties=C,x.renderLists=Rt,x.shadowMap=It,x.state=Tt,x.info=qt}xt();const P=new bM(x,F);this.xr=P,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=Mt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Mt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(E){E!==void 0&&(et=E,this.setSize(X,Y,!1))},this.getSize=function(E){return E.set(X,Y)},this.setSize=function(E,N,V=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,Y=N,e.width=Math.floor(E*et),e.height=Math.floor(N*et),V===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(X*et,Y*et).floor()},this.setDrawingBufferSize=function(E,N,V){X=E,Y=N,et=V,e.width=Math.floor(E*V),e.height=Math.floor(N*V),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(M)},this.getViewport=function(E){return E.copy($)},this.setViewport=function(E,N,V,G){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,N,V,G),Tt.viewport(M.copy($).multiplyScalar(et).round())},this.getScissor=function(E){return E.copy(Q)},this.setScissor=function(E,N,V,G){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,N,V,G),Tt.scissor(D.copy(Q).multiplyScalar(et).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(E){Tt.setScissorTest(dt=E)},this.setOpaqueSort=function(E){U=E},this.setTransparentSort=function(E){q=E},this.getClearColor=function(E){return E.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor.apply(mt,arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha.apply(mt,arguments)},this.clear=function(E=!0,N=!0,V=!0){let G=0;if(E){let B=!1;if(T!==null){const ht=T.texture.format;B=ht===Qf||ht===Jf||ht===Zf}if(B){const ht=T.texture.type,wt=ht===Xn||ht===Bs||ht===qf||ht===Zs||ht===Yf||ht===jf,Dt=mt.getClearColor(),Nt=mt.getClearAlpha(),Ot=Dt.r,Ut=Dt.g,Ft=Dt.b;wt?(f[0]=Ot,f[1]=Ut,f[2]=Ft,f[3]=Nt,F.clearBufferuiv(F.COLOR,0,f)):(g[0]=Ot,g[1]=Ut,g[2]=Ft,g[3]=Nt,F.clearBufferiv(F.COLOR,0,g))}else G|=F.COLOR_BUFFER_BIT}N&&(G|=F.DEPTH_BUFFER_BIT),V&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",it,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Rt.dispose(),rt.dispose(),C.dispose(),H.dispose(),j.dispose(),At.dispose(),jt.dispose(),ne.dispose(),tt.dispose(),P.dispose(),P.removeEventListener("sessionstart",xn),P.removeEventListener("sessionend",_n),Pi.stop()};function st(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=qt.autoReset,N=It.enabled,V=It.autoUpdate,G=It.needsUpdate,B=It.type;xt(),qt.autoReset=E,It.enabled=N,It.autoUpdate=V,It.needsUpdate=G,It.type=B}function yt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ct(E){const N=E.target;N.removeEventListener("dispose",Ct),ie(N)}function ie(E){he(E),C.remove(E)}function he(E){const N=C.get(E).programs;N!==void 0&&(N.forEach(function(V){tt.releaseProgram(V)}),E.isShaderMaterial&&tt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,V,G,B,ht){N===null&&(N=Et);const wt=B.isMesh&&B.matrixWorld.determinant()<0,Dt=Mm(E,N,V,G,B);Tt.setMaterial(G,wt);let Nt=V.index,Ot=1;if(G.wireframe===!0){if(Nt=J.getWireframeAttribute(V),Nt===void 0)return;Ot=2}const Ut=V.drawRange,Ft=V.attributes.position;let ge=Ut.start*Ot,We=(Ut.start+Ut.count)*Ot;ht!==null&&(ge=Math.max(ge,ht.start*Ot),We=Math.min(We,(ht.start+ht.count)*Ot)),Nt!==null?(ge=Math.max(ge,0),We=Math.min(We,Nt.count)):Ft!=null&&(ge=Math.max(ge,0),We=Math.min(We,Ft.count));const Ee=We-ge;if(Ee<0||Ee===1/0)return;jt.setup(B,G,Dt,V,Nt);let On,pe=Gt;if(Nt!==null&&(On=Z.get(Nt),pe=Xt,pe.setIndex(On)),B.isMesh)G.wireframe===!0?(Tt.setLineWidth(G.wireframeLinewidth*Lt()),pe.setMode(F.LINES)):pe.setMode(F.TRIANGLES);else if(B.isLine){let kt=G.linewidth;kt===void 0&&(kt=1),Tt.setLineWidth(kt*Lt()),B.isLineSegments?pe.setMode(F.LINES):B.isLineLoop?pe.setMode(F.LINE_LOOP):pe.setMode(F.LINE_STRIP)}else B.isPoints?pe.setMode(F.POINTS):B.isSprite&&pe.setMode(F.TRIANGLES);if(B.isBatchedMesh)pe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)pe.renderInstances(ge,Ee,B.count);else if(V.isInstancedBufferGeometry){const kt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,wa=Math.min(V.instanceCount,kt);pe.renderInstances(ge,Ee,wa)}else pe.render(ge,Ee)};function fe(E,N,V){E.transparent===!0&&E.side===on&&E.forceSinglePass===!1?(E.side=Fe,E.needsUpdate=!0,Br(E,N,V),E.side=$n,E.needsUpdate=!0,Br(E,N,V),E.side=on):Br(E,N,V)}this.compile=function(E,N,V=null){V===null&&(V=E),m=rt.get(V),m.init(),_.push(m),V.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),E!==V&&E.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(x._useLegacyLights);const G=new Set;return E.traverse(function(B){const ht=B.material;if(ht)if(Array.isArray(ht))for(let wt=0;wt<ht.length;wt++){const Dt=ht[wt];fe(Dt,V,B),G.add(Dt)}else fe(ht,V,B),G.add(ht)}),_.pop(),m=null,G},this.compileAsync=function(E,N,V=null){const G=this.compile(E,N,V);return new Promise(B=>{function ht(){if(G.forEach(function(wt){C.get(wt).currentProgram.isReady()&&G.delete(wt)}),G.size===0){B(E);return}setTimeout(ht,10)}Mt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Le=null;function le(E){Le&&Le(E)}function xn(){Pi.stop()}function _n(){Pi.start()}const Pi=new pp;Pi.setAnimationLoop(le),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(E){Le=E,P.setAnimationLoop(E),E===null?Pi.stop():Pi.start()},P.addEventListener("sessionstart",xn),P.addEventListener("sessionend",_n),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(N),N=P.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,N,T),m=rt.get(E,_.length),m.init(),_.push(m),at.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),_t.setFromProjectionMatrix(at),K=this.localClippingEnabled,k=ut.init(this.clippingPlanes,K),v=Rt.get(E,p.length),v.init(),p.push(v),Nh(E,N,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(U,q),this.info.render.frame++,k===!0&&ut.beginShadows();const V=m.state.shadowsArray;if(It.render(V,E,N),k===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),(P.enabled===!1||P.isPresenting===!1||P.hasDepthSensing()===!1)&&mt.render(v,E),m.setupLights(x._useLegacyLights),N.isArrayCamera){const G=N.cameras;for(let B=0,ht=G.length;B<ht;B++){const wt=G[B];Uh(v,E,wt,wt.viewport)}}else Uh(v,E,N);T!==null&&(y.updateMultisampleRenderTarget(T),y.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(x,E,N),jt.resetDefaultState(),L=-1,S=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Nh(E,N,V,G){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||_t.intersectsSprite(E)){G&&St.setFromMatrixPosition(E.matrixWorld).applyMatrix4(at);const wt=At.update(E),Dt=E.material;Dt.visible&&v.push(E,wt,Dt,V,St.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||_t.intersectsObject(E))){const wt=At.update(E),Dt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),St.copy(E.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),St.copy(wt.boundingSphere.center)),St.applyMatrix4(E.matrixWorld).applyMatrix4(at)),Array.isArray(Dt)){const Nt=wt.groups;for(let Ot=0,Ut=Nt.length;Ot<Ut;Ot++){const Ft=Nt[Ot],ge=Dt[Ft.materialIndex];ge&&ge.visible&&v.push(E,wt,ge,V,St.z,Ft)}}else Dt.visible&&v.push(E,wt,Dt,V,St.z,null)}}const ht=E.children;for(let wt=0,Dt=ht.length;wt<Dt;wt++)Nh(ht[wt],N,V,G)}function Uh(E,N,V,G){const B=E.opaque,ht=E.transmissive,wt=E.transparent;m.setupLightsView(V),k===!0&&ut.setGlobalState(x.clippingPlanes,V),ht.length>0&&_m(B,ht,N,V),G&&Tt.viewport(M.copy(G)),B.length>0&&zr(B,N,V),ht.length>0&&zr(ht,N,V),wt.length>0&&zr(wt,N,V),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function _m(E,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(m.state.transmissionRenderTarget===null){m.state.transmissionRenderTarget=new He(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float")?Ke:Xn,minFilter:Xi,samples:4,stencilBuffer:r});const Ot=C.get(m.state.transmissionRenderTarget);Ot.__isTransmissionRenderTarget=!0}const ht=m.state.transmissionRenderTarget;x.getDrawingBufferSize(nt),ht.setSize(nt.x,nt.y);const wt=x.getRenderTarget();x.setRenderTarget(ht),x.getClearColor(I),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear();const Dt=x.toneMapping;x.toneMapping=gi,zr(E,V,G),y.updateMultisampleRenderTarget(ht),y.updateRenderTargetMipmap(ht);let Nt=!1;for(let Ot=0,Ut=N.length;Ot<Ut;Ot++){const Ft=N[Ot],ge=Ft.object,We=Ft.geometry,Ee=Ft.material,On=Ft.group;if(Ee.side===on&&ge.layers.test(G.layers)){const pe=Ee.side;Ee.side=Fe,Ee.needsUpdate=!0,Oh(ge,V,G,We,Ee,On),Ee.side=pe,Ee.needsUpdate=!0,Nt=!0}}Nt===!0&&(y.updateMultisampleRenderTarget(ht),y.updateRenderTargetMipmap(ht)),x.setRenderTarget(wt),x.setClearColor(I,z),x.toneMapping=Dt}function zr(E,N,V){const G=N.isScene===!0?N.overrideMaterial:null;for(let B=0,ht=E.length;B<ht;B++){const wt=E[B],Dt=wt.object,Nt=wt.geometry,Ot=G===null?wt.material:G,Ut=wt.group;Dt.layers.test(V.layers)&&Oh(Dt,N,V,Nt,Ot,Ut)}}function Oh(E,N,V,G,B,ht){E.onBeforeRender(x,N,V,G,B,ht),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(x,N,V,G,E,ht),B.transparent===!0&&B.side===on&&B.forceSinglePass===!1?(B.side=Fe,B.needsUpdate=!0,x.renderBufferDirect(V,N,G,B,E,ht),B.side=$n,B.needsUpdate=!0,x.renderBufferDirect(V,N,G,B,E,ht),B.side=on):x.renderBufferDirect(V,N,G,B,E,ht),E.onAfterRender(x,N,V,G,B,ht)}function Br(E,N,V){N.isScene!==!0&&(N=Et);const G=C.get(E),B=m.state.lights,ht=m.state.shadowsArray,wt=B.state.version,Dt=tt.getParameters(E,B.state,ht,N,V),Nt=tt.getProgramCacheKey(Dt);let Ot=G.programs;G.environment=E.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(E.isMeshStandardMaterial?j:H).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Ot===void 0&&(E.addEventListener("dispose",Ct),Ot=new Map,G.programs=Ot);let Ut=Ot.get(Nt);if(Ut!==void 0){if(G.currentProgram===Ut&&G.lightsStateVersion===wt)return kh(E,Dt),Ut}else Dt.uniforms=tt.getUniforms(E),E.onBuild(V,Dt,x),E.onBeforeCompile(Dt,x),Ut=tt.acquireProgram(Dt,Nt),Ot.set(Nt,Ut),G.uniforms=Dt.uniforms;const Ft=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ft.clippingPlanes=ut.uniform),kh(E,Dt),G.needsLights=Sm(E),G.lightsStateVersion=wt,G.needsLights&&(Ft.ambientLightColor.value=B.state.ambient,Ft.lightProbe.value=B.state.probe,Ft.directionalLights.value=B.state.directional,Ft.directionalLightShadows.value=B.state.directionalShadow,Ft.spotLights.value=B.state.spot,Ft.spotLightShadows.value=B.state.spotShadow,Ft.rectAreaLights.value=B.state.rectArea,Ft.ltc_1.value=B.state.rectAreaLTC1,Ft.ltc_2.value=B.state.rectAreaLTC2,Ft.pointLights.value=B.state.point,Ft.pointLightShadows.value=B.state.pointShadow,Ft.hemisphereLights.value=B.state.hemi,Ft.directionalShadowMap.value=B.state.directionalShadowMap,Ft.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ft.spotShadowMap.value=B.state.spotShadowMap,Ft.spotLightMatrix.value=B.state.spotLightMatrix,Ft.spotLightMap.value=B.state.spotLightMap,Ft.pointShadowMap.value=B.state.pointShadowMap,Ft.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=Ut,G.uniformsList=null,Ut}function Fh(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Uo.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function kh(E,N){const V=C.get(E);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Mm(E,N,V,G,B){N.isScene!==!0&&(N=Et),y.resetTextureUnits();const ht=N.fog,wt=G.isMeshStandardMaterial?N.environment:null,Dt=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ei,Nt=(G.isMeshStandardMaterial?j:H).get(G.envMap||wt),Ot=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ut=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ft=!!V.morphAttributes.position,ge=!!V.morphAttributes.normal,We=!!V.morphAttributes.color;let Ee=gi;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ee=x.toneMapping);const On=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,pe=On!==void 0?On.length:0,kt=C.get(G),wa=m.state.lights;if(k===!0&&(K===!0||E!==S)){const Je=E===S&&G.id===L;ut.setState(G,E,Je)}let ue=!1;G.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==wa.state.version||kt.outputColorSpace!==Dt||B.isBatchedMesh&&kt.batching===!1||!B.isBatchedMesh&&kt.batching===!0||B.isInstancedMesh&&kt.instancing===!1||!B.isInstancedMesh&&kt.instancing===!0||B.isSkinnedMesh&&kt.skinning===!1||!B.isSkinnedMesh&&kt.skinning===!0||B.isInstancedMesh&&kt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&kt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&kt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&kt.instancingMorph===!1&&B.morphTexture!==null||kt.envMap!==Nt||G.fog===!0&&kt.fog!==ht||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==ut.numPlanes||kt.numIntersection!==ut.numIntersection)||kt.vertexAlphas!==Ot||kt.vertexTangents!==Ut||kt.morphTargets!==Ft||kt.morphNormals!==ge||kt.morphColors!==We||kt.toneMapping!==Ee||kt.morphTargetsCount!==pe)&&(ue=!0):(ue=!0,kt.__version=G.version);let Li=kt.currentProgram;ue===!0&&(Li=Br(G,N,B));let zh=!1,ar=!1,Ea=!1;const Ie=Li.getUniforms(),Qn=kt.uniforms;if(Tt.useProgram(Li.program)&&(zh=!0,ar=!0,Ea=!0),G.id!==L&&(L=G.id,ar=!0),zh||S!==E){Ie.setValue(F,"projectionMatrix",E.projectionMatrix),Ie.setValue(F,"viewMatrix",E.matrixWorldInverse);const Je=Ie.map.cameraPosition;Je!==void 0&&Je.setValue(F,St.setFromMatrixPosition(E.matrixWorld)),Jt.logarithmicDepthBuffer&&Ie.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ie.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,ar=!0,Ea=!0)}if(B.isSkinnedMesh){Ie.setOptional(F,B,"bindMatrix"),Ie.setOptional(F,B,"bindMatrixInverse");const Je=B.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),Ie.setValue(F,"boneTexture",Je.boneTexture,y))}B.isBatchedMesh&&(Ie.setOptional(F,B,"batchingTexture"),Ie.setValue(F,"batchingTexture",B._matricesTexture,y));const Ta=V.morphAttributes;if((Ta.position!==void 0||Ta.normal!==void 0||Ta.color!==void 0)&&vt.update(B,V,Li),(ar||kt.receiveShadow!==B.receiveShadow)&&(kt.receiveShadow=B.receiveShadow,Ie.setValue(F,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Qn.envMap.value=Nt,Qn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(Qn.envMapIntensity.value=N.environmentIntensity),ar&&(Ie.setValue(F,"toneMappingExposure",x.toneMappingExposure),kt.needsLights&&ym(Qn,Ea),ht&&G.fog===!0&&bt.refreshFogUniforms(Qn,ht),bt.refreshMaterialUniforms(Qn,G,et,Y,m.state.transmissionRenderTarget),Uo.upload(F,Fh(kt),Qn,y)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Uo.upload(F,Fh(kt),Qn,y),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ie.setValue(F,"center",B.center),Ie.setValue(F,"modelViewMatrix",B.modelViewMatrix),Ie.setValue(F,"normalMatrix",B.normalMatrix),Ie.setValue(F,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Je=G.uniformsGroups;for(let Aa=0,bm=Je.length;Aa<bm;Aa++){const Bh=Je[Aa];ne.update(Bh,Li),ne.bind(Bh,Li)}}return Li}function ym(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Sm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,N,V){C.get(E.texture).__webglTexture=N,C.get(E.depthTexture).__webglTexture=V;const G=C.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const V=C.get(E);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,V=0){T=E,R=N,w=V;let G=!0,B=null,ht=!1,wt=!1;if(E){const Nt=C.get(E);Nt.__useDefaultFramebuffer!==void 0?(Tt.bindFramebuffer(F.FRAMEBUFFER,null),G=!1):Nt.__webglFramebuffer===void 0?y.setupRenderTarget(E):Nt.__hasExternalTextures&&y.rebindTextures(E,C.get(E.texture).__webglTexture,C.get(E.depthTexture).__webglTexture);const Ot=E.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(wt=!0);const Ut=C.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ut[N])?B=Ut[N][V]:B=Ut[N],ht=!0):E.samples>0&&y.useMultisampledRTT(E)===!1?B=C.get(E).__webglMultisampledFramebuffer:Array.isArray(Ut)?B=Ut[V]:B=Ut,M.copy(E.viewport),D.copy(E.scissor),O=E.scissorTest}else M.copy($).multiplyScalar(et).floor(),D.copy(Q).multiplyScalar(et).floor(),O=dt;if(Tt.bindFramebuffer(F.FRAMEBUFFER,B)&&G&&Tt.drawBuffers(E,B),Tt.viewport(M),Tt.scissor(D),Tt.setScissorTest(O),ht){const Nt=C.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,Nt.__webglTexture,V)}else if(wt){const Nt=C.get(E.texture),Ot=N||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nt.__webglTexture,V||0,Ot)}L=-1},this.readRenderTargetPixels=function(E,N,V,G,B,ht,wt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=C.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){Tt.bindFramebuffer(F.FRAMEBUFFER,Dt);try{const Nt=E.texture,Ot=Nt.format,Ut=Nt.type;if(Ot!==an&&Zt.convert(Ot)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ft=Ut===Ke&&(Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float"));if(Ut!==Xn&&Zt.convert(Ut)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&Ut!==An&&!Ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-G&&V>=0&&V<=E.height-B&&F.readPixels(N,V,G,B,Zt.convert(Ot),Zt.convert(Ut),ht)}finally{const Nt=T!==null?C.get(T).__webglFramebuffer:null;Tt.bindFramebuffer(F.FRAMEBUFFER,Nt)}}},this.copyFramebufferToTexture=function(E,N,V=0){const G=Math.pow(2,-V),B=Math.floor(N.image.width*G),ht=Math.floor(N.image.height*G);y.setTexture2D(N,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,E.x,E.y,B,ht),Tt.unbindTexture()},this.copyTextureToTexture=function(E,N,V,G=0){const B=N.image.width,ht=N.image.height,wt=Zt.convert(V.format),Dt=Zt.convert(V.type);y.setTexture2D(V,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment),N.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,G,E.x,E.y,B,ht,wt,Dt,N.image.data):N.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,G,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,wt,N.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,G,E.x,E.y,wt,Dt,N.image),G===0&&V.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Tt.unbindTexture()},this.copyTextureToTexture3D=function(E,N,V,G,B=0){const ht=Math.round(E.max.x-E.min.x),wt=Math.round(E.max.y-E.min.y),Dt=E.max.z-E.min.z+1,Nt=Zt.convert(G.format),Ot=Zt.convert(G.type);let Ut;if(G.isData3DTexture)y.setTexture3D(G,0),Ut=F.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)y.setTexture2DArray(G,0),Ut=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const Ft=F.getParameter(F.UNPACK_ROW_LENGTH),ge=F.getParameter(F.UNPACK_IMAGE_HEIGHT),We=F.getParameter(F.UNPACK_SKIP_PIXELS),Ee=F.getParameter(F.UNPACK_SKIP_ROWS),On=F.getParameter(F.UNPACK_SKIP_IMAGES),pe=V.isCompressedTexture?V.mipmaps[B]:V.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,pe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,E.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,E.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,E.min.z),V.isDataTexture||V.isData3DTexture?F.texSubImage3D(Ut,B,N.x,N.y,N.z,ht,wt,Dt,Nt,Ot,pe.data):G.isCompressedArrayTexture?F.compressedTexSubImage3D(Ut,B,N.x,N.y,N.z,ht,wt,Dt,Nt,pe.data):F.texSubImage3D(Ut,B,N.x,N.y,N.z,ht,wt,Dt,Nt,Ot,pe),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ft),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ge),F.pixelStorei(F.UNPACK_SKIP_PIXELS,We),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ee),F.pixelStorei(F.UNPACK_SKIP_IMAGES,On),B===0&&G.generateMipmaps&&F.generateMipmap(Ut),Tt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?y.setTextureCube(E,0):E.isData3DTexture?y.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?y.setTexture2DArray(E,0):y.setTexture2D(E,0),Tt.unbindTexture()},this.resetState=function(){R=0,w=0,T=null,Tt.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===zl?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===la?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class ql{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new lt(t),this.density=e}clone(){return new ql(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yp extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const od=new A,ad=new ve,cd=new ve,RM=new A,ld=new Pt,ho=new A,ac=new Kn,hd=new Pt,cc=new Bl;class CM extends ft{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wh,this.bindMatrix=new Pt,this.bindMatrixInverse=new Pt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ti),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ho),this.boundingBox.expandByPoint(ho)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ho),this.boundingSphere.expandByPoint(ho)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ac.copy(this.boundingSphere),ac.applyMatrix4(s),t.ray.intersectsSphere(ac)!==!1&&(hd.copy(s).invert(),cc.copy(t.ray).applyMatrix4(hd),!(this.boundingBox!==null&&cc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,cc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ve,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Wh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===eg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;ad.fromBufferAttribute(s.attributes.skinIndex,t),cd.fromBufferAttribute(s.attributes.skinWeight,t),od.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=cd.getComponent(r);if(o!==0){const a=ad.getComponent(r);ld.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(RM.copy(od).applyMatrix4(ld),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Sp extends Se{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ua extends ke{constructor(t=null,e=1,n=1,s,r,o,a,c,l=ye,h=ye,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ud=new Pt,PM=new Pt;class $l{constructor(t=[],e=[]){this.uuid=Qs(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Pt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Pt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:PM;ud.multiplyMatrices(a,e[r]),ud.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new $l(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new ua(e,t,t,an,An);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Sp),this.bones.push(o),this.boneInverses.push(new Pt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class dd extends ce{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const vs=new Pt,fd=new Pt,uo=[],pd=new Ti,LM=new Pt,fr=new ft,pr=new Kn;class ji extends ft{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new dd(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,LM)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),pd.copy(t.boundingBox).applyMatrix4(vs),this.boundingBox.union(pd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),pr.copy(t.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(pr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(n),t.ray.intersectsSphere(pr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vs),fd.multiplyMatrices(n,vs),fr.matrixWorld=fd,fr.raycast(t,uo);for(let o=0,a=uo.length;o<a;o++){const c=uo[o];c.instanceId=r,c.object=this,e.push(c)}uo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new dd(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ua(new Float32Array(s*this.count),s,this.count,Kf,An));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class IM extends Qi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const md=new Pt,tl=new Bl,fo=new Kn,po=new A;class DM extends Se{constructor(t=new de,e=new IM){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(s),fo.radius+=r,t.ray.intersectsSphere(fo)===!1)return;md.copy(s).invert(),tl.copy(t.ray).applyMatrix4(md);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const m=l.getX(g);po.fromBufferAttribute(u,m),gd(po,m,c,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)po.fromBufferAttribute(u,g),gd(po,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function gd(i,t,e,n,s,r,o){const a=tl.distanceSqToPoint(i);if(a<e){const c=new A;tl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class NM extends ke{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ot:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,s=[],r=[],o=[],a=new A,c=new Pt;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Re(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Re(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class bp extends Zn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ot){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class UM extends bp{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Yl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const mo=new A,lc=new Yl,hc=new Yl,uc=new Yl;class da extends Zn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(mo.subVectors(s[0],s[1]).add(s[0]),l=mo);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(mo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=mo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),lc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,m),hc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,m),uc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(lc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),hc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),uc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(lc.calc(c),hc.calc(c),uc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vd(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function OM(i,t){const e=1-i;return e*e*t}function FM(i,t){return 2*(1-i)*i*t}function kM(i,t){return i*i*t}function br(i,t,e,n){return OM(i,t)+FM(i,e)+kM(i,n)}function zM(i,t){const e=1-i;return e*e*e*t}function BM(i,t){const e=1-i;return 3*e*e*i*t}function HM(i,t){return 3*(1-i)*i*i*t}function VM(i,t){return i*i*i*t}function wr(i,t,e,n,s){return zM(i,t)+BM(i,e)+HM(i,n)+VM(i,s)}class GM extends Zn{constructor(t=new ot,e=new ot,n=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ot){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wr(t,s.x,r.x,o.x,a.x),wr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class WM extends Zn{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wr(t,s.x,r.x,o.x,a.x),wr(t,s.y,r.y,o.y,a.y),wr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class XM extends Zn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qM extends Zn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $M extends Zn{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(br(t,s.x,r.x,o.x),br(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wp extends Zn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(br(t,s.x,r.x,o.x),br(t,s.y,r.y,o.y),br(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class YM extends Zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(vd(a,c.x,l.x,h.x,u.x),vd(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ot().fromArray(s))}return this}}var jM=Object.freeze({__proto__:null,ArcCurve:UM,CatmullRomCurve3:da,CubicBezierCurve:GM,CubicBezierCurve3:WM,EllipseCurve:bp,LineCurve:XM,LineCurve3:qM,QuadraticBezierCurve:$M,QuadraticBezierCurve3:wp,SplineCurve:YM});class fa extends de{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Re(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new A,d=new ot,f=new A,g=new A,v=new A;let m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let _=0;_<=e;_++){const x=n+_*h*s,b=Math.sin(x),R=Math.cos(x);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*b,u.y=t[w].y,u.z=t[w].x*R,o.push(u.x,u.y,u.z),d.x=_/e,d.y=w/(t.length-1),a.push(d.x,d.y);const T=c[3*w+0]*b,L=c[3*w+1],S=c[3*w+0]*R;l.push(T,L,S)}}for(let _=0;_<e;_++)for(let x=0;x<t.length-1;x++){const b=x+_*t.length,R=b,w=b+t.length,T=b+t.length+1,L=b+1;r.push(R,w,L),r.push(T,L,w)}this.setIndex(r),this.setAttribute("position",new Vt(o,3)),this.setAttribute("uv",new Vt(a,2)),this.setAttribute("normal",new Vt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fa(t.points,t.segments,t.phiStart,t.phiLength)}}class er extends de{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new A,h=new ot;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ai extends de{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;_(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(d,3)),this.setAttribute("uv",new Vt(f,2));function _(){const b=new A,R=new A;let w=0;const T=(e-t)/n;for(let L=0;L<=r;L++){const S=[],M=L/r,D=M*(e-t)+t;for(let O=0;O<=s;O++){const I=O/s,z=I*c+a,X=Math.sin(z),Y=Math.cos(z);R.x=D*X,R.y=-M*n+m,R.z=D*Y,u.push(R.x,R.y,R.z),b.set(X,T,Y).normalize(),d.push(b.x,b.y,b.z),f.push(I,1-M),S.push(g++)}v.push(S)}for(let L=0;L<s;L++)for(let S=0;S<r;S++){const M=v[S][L],D=v[S+1][L],O=v[S+1][L+1],I=v[S][L+1];h.push(M,D,I),h.push(D,O,I),w+=6}l.addGroup(p,w,0),p+=w}function x(b){const R=g,w=new ot,T=new A;let L=0;const S=b===!0?t:e,M=b===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const D=g;for(let O=0;O<=s;O++){const z=O/s*c+a,X=Math.cos(z),Y=Math.sin(z);T.x=S*Y,T.y=m*M,T.z=S*X,u.push(T.x,T.y,T.z),d.push(0,M,0),w.x=X*.5+.5,w.y=Y*.5*M+.5,f.push(w.x,w.y),g++}for(let O=0;O<s;O++){const I=R+O,z=D+O;b===!0?h.push(z,z+1,I):h.push(z+1,z,I),L+=3}l.addGroup(p,L,b===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pa extends de{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Vt(r,3)),this.setAttribute("normal",new Vt(r.slice(),3)),this.setAttribute("uv",new Vt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const x=new A,b=new A,R=new A;for(let w=0;w<e.length;w+=3)f(e[w+0],x),f(e[w+1],b),f(e[w+2],R),c(x,b,R,_)}function c(_,x,b,R){const w=R+1,T=[];for(let L=0;L<=w;L++){T[L]=[];const S=_.clone().lerp(b,L/w),M=x.clone().lerp(b,L/w),D=w-L;for(let O=0;O<=D;O++)O===0&&L===w?T[L][O]=S:T[L][O]=S.clone().lerp(M,O/D)}for(let L=0;L<w;L++)for(let S=0;S<2*(w-L)-1;S++){const M=Math.floor(S/2);S%2===0?(d(T[L][M+1]),d(T[L+1][M]),d(T[L][M])):(d(T[L][M+1]),d(T[L+1][M+1]),d(T[L+1][M]))}}function l(_){const x=new A;for(let b=0;b<r.length;b+=3)x.x=r[b+0],x.y=r[b+1],x.z=r[b+2],x.normalize().multiplyScalar(_),r[b+0]=x.x,r[b+1]=x.y,r[b+2]=x.z}function h(){const _=new A;for(let x=0;x<r.length;x+=3){_.x=r[x+0],_.y=r[x+1],_.z=r[x+2];const b=m(_)/2/Math.PI+.5,R=p(_)/Math.PI+.5;o.push(b,1-R)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){const x=o[_+0],b=o[_+2],R=o[_+4],w=Math.max(x,b,R),T=Math.min(x,b,R);w>.9&&T<.1&&(x<.2&&(o[_+0]+=1),b<.2&&(o[_+2]+=1),R<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,x){const b=_*3;x.x=t[b+0],x.y=t[b+1],x.z=t[b+2]}function g(){const _=new A,x=new A,b=new A,R=new A,w=new ot,T=new ot,L=new ot;for(let S=0,M=0;S<r.length;S+=9,M+=6){_.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),b.set(r[S+6],r[S+7],r[S+8]),w.set(o[M+0],o[M+1]),T.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),R.copy(_).add(x).add(b).divideScalar(3);const D=m(R);v(w,M+0,_,D),v(T,M+2,x,D),v(L,M+4,b,D)}}function v(_,x,b,R){R<0&&_.x===1&&(o[x]=_.x-1),b.x===0&&b.z===0&&(o[x]=R/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pa(t.vertices,t.indices,t.radius,t.details)}}class jl extends pa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new jl(t.radius,t.detail)}}class Kl extends pa{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Kl(t.radius,t.detail)}}class Zl extends de{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,f=new A,g=new ot;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const _=p+m,x=_,b=_+n+1,R=_+n+2,w=_+1;a.push(x,b,w),a.push(b,R,w)}}this.setIndex(a),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Rn extends de{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new A,d=new A,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const _=[],x=p/n;let b=0;p===0&&o===0?b=.5/e:p===n&&c===Math.PI&&(b=-.5/e);for(let R=0;R<=e;R++){const w=R/e;u.x=-t*Math.cos(s+w*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+w*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(w+b,1-x),_.push(l++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){const x=h[p][_+1],b=h[p][_],R=h[p+1][_],w=h[p+1][_+1];(p!==0||o>0)&&f.push(x,b,w),(p!==n-1||c<Math.PI)&&f.push(b,R,w)}this.setIndex(f),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(v,3)),this.setAttribute("uv",new Vt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Gs extends de{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new A,u=new A,d=new A;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,_=(s+1)*f+g;o.push(v,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ma extends de{constructor(t=new wp(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new A,c=new A,l=new ot;let h=new A;const u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(d,3)),this.setAttribute("uv",new Vt(f,2));function v(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),_(),p()}function m(x){h=t.getPointAt(x/e,h);const b=o.normals[x],R=o.binormals[x];for(let w=0;w<=s;w++){const T=w/s*Math.PI*2,L=Math.sin(T),S=-Math.cos(T);c.x=S*b.x+L*R.x,c.y=S*b.y+L*R.y,c.z=S*b.z+L*R.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=e;x++)for(let b=1;b<=s;b++){const R=(s+1)*(x-1)+(b-1),w=(s+1)*x+(b-1),T=(s+1)*x+b,L=(s+1)*(x-1)+b;g.push(R,w,L),g.push(w,T,L)}}function _(){for(let x=0;x<=e;x++)for(let b=0;b<=s;b++)l.x=x/e,l.y=b/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ma(new jM[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class KM extends te{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Kt extends Qi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xd extends Kt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Re(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class ZM extends Qi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Ep extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Tp extends Ep{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const dc=new Pt,_d=new A,Md=new A;class JM{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vl,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;_d.setFromMatrixPosition(t.matrixWorld),e.position.copy(_d),Md.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Md),e.updateMatrixWorld(),dc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class QM extends JM{constructor(){super(new Gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class el extends Ep{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new QM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ty{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=yd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function yd(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ul);class Jl{constructor(){this._handlers=new Map}on(t,e){return this._handlers.has(t)||this._handlers.set(t,new Set),this._handlers.get(t).add(e),()=>this._handlers.get(t).delete(e)}emit(t,e){const n=this._handlers.get(t);if(n)for(const s of n)s(e)}}const fc=(i,t)=>new lt(i).multiplyScalar(t);function ey(i){const t=new yp,e=(h,u=$n)=>new Yn({color:h,side:u}),n=(h,u,d,f,g,v=0)=>{const m=new ft(h,u);m.position.set(d,f,g),m.rotation.x=v,t.add(m)};n(new me(80,14,80),e(1382430,Fe),0,5,0),n(new Pe(80,80),e(2895411),0,-1.8,0,-Math.PI/2);const s=new Pe(3.4,.7),r=e(fc(16054527,16));for(let h=-30;h<=30;h+=10)for(let u=-30;u<=30;u+=10)n(s,r,h,10.5,u,Math.PI/2);const o=new me(76,.15,.15),a=[e(fc(58879,4)),e(fc(16722902,4))];for(const[h,u]of[[-39.5,a[0]],[39.5,a[1]]])n(o,u,0,1.4,h);const c=new $o(i),l=c.fromScene(t,.02).texture;return c.dispose(),t.traverse(h=>{var u;return(u=h.geometry)==null?void 0:u.dispose()}),l}function ny(i,t,e,n,s=[],r=500){const o=new fp(n,{type:Ke}),a=new up(.2,r,o);a.position.copy(e);const c=s.map(d=>d.visible);s.forEach(d=>d.visible=!1);const l=t.environment;t.environment=null,a.update(i,t),t.environment=l,s.forEach((d,f)=>d.visible=c[f]);const h=new $o(i),u=h.fromCubemap(o.texture).texture;return h.dispose(),o.dispose(),u}const Rr={low:{label:"LOW",pixelRatio:1,msaa:0,shadowMap:1024,gtao:!1,envSize:128,dof:!1,haze:!1,detail:!1,barrierShadows:!1},medium:{label:"MEDIUM",pixelRatio:1.5,msaa:2,shadowMap:2048,gtao:!1,envSize:128,dof:!1,haze:!1,detail:!0,barrierShadows:!1},high:{label:"HIGH",pixelRatio:1.5,msaa:4,shadowMap:4096,gtao:!1,envSize:256,dof:!0,haze:!0,detail:!0,barrierShadows:!0},ultra:{label:"ULTRA",pixelRatio:2,msaa:4,shadowMap:4096,gtao:!0,envSize:512,dof:!0,haze:!0,detail:!0,barrierShadows:!0}},Ap="tbc-kart.gfx";function iy(){var e;if(typeof window>"u")return"high";const i=new URLSearchParams(window.location.search).get("gfx");if(Rr[i])return i;let t=null;try{t=localStorage.getItem(Ap)}catch{}return Rr[t]?t:(e=window.matchMedia)!=null&&e.call(window,"(pointer: coarse)").matches?"medium":"high"}const Ns=iy(),Ze=Rr[Ns],sy=Ze.pixelRatio,ry=Ze.msaa,oy=1,ay=724242,cy=724242,ly=.0058,hy=.8,pc={sky:14674175,ground:3814704,intensity:.35},Vi={color:16774114,intensity:2.4,offset:[7,50,5]},uy=[{color:14673663,intensity:.3,direction:[-1,.75,-.55]},{color:16771542,intensity:.25,direction:[1,.7,.8]}],Cr=Ze.shadowMap,Rp=-3e-4,Cp=.035,dy={maxHalf:58},Pp=Ze.barrierShadows,mc={strength:.45,radius:.22,threshold:3},fy={vignette:.38,saturation:1.08,contrast:1.08,grain:.035,fringe:.012},go={intensity:1,resolution:.5,gtao:{radius:.6,distanceExponent:1.4,thickness:1.2,scale:1.1,samples:12,distanceFallOff:1},denoise:{lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16}},Lp={intensity:.05,spread:2.2},Sd={aperture:18e-5,maxBlur:.008};class py{constructor(t=document.body){const e=new AM({antialias:!1,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio,sy)),e.setSize(window.innerWidth,window.innerHeight),e.toneMapping=Fl,e.toneMappingExposure=oy,e.shadowMap.enabled=!0,e.shadowMap.type=Vf,t.appendChild(e.domElement),this.three=e,this.scene=new yp,this.scene.background=new lt(ay),this.scene.fog=new ql(cy,ly),this.scene.environment=ey(e),this.scene.environmentIntensity=hy}captureEnvironment(t,e,n){var r;const s=ny(this.three,this.scene,t,Ze.envSize,e,n);(r=this.scene.environment)==null||r.dispose(),this.scene.environment=s}setAtmosphere({background:t,fog:e,density:n,exposure:s}){this.scene.background=t,this.scene.fog.color.copy(e),this.scene.fog.density=n,this.three.toneMappingExposure=s}get maxAnisotropy(){return this.three.capabilities.getMaxAnisotropy()}setSize(t,e){this.three.setSize(t,e)}}const Er={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ri{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const my=new Gl(-1,1,1,-1,0,1);class gy extends de{constructor(){super(),this.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Vt([0,2,0,0,2,0],2))}}const vy=new gy;class Dr{constructor(t){this._mesh=new ft(vy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,my)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class xy extends Ri{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof te?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Tn.clone(t.uniforms),this.material=new te({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Dr(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class bd extends Ri{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class _y extends Ri{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class My{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ot);this._width=n.width,this._height=n.height,e=new He(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ke}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xy(Er),this.copyPass.material.blending=Ae,this.clock=new ty}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}bd!==void 0&&(o instanceof bd?n=!0:o instanceof _y&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class yy extends Ri{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new lt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const vo={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ot},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Pt},cameraProjectionMatrixInverse:{value:new Pt},cameraWorldMatrix:{value:new Pt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new A(-1,-1,-1)},sceneBoxMax:{value:new A(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0, totalWeight = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},xo={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},gc={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Sy(i=5){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=by(t),n=e.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){const a=e[o],c=2*Math.PI*a/n,l=new A(Math.cos(c),Math.sin(c),0).normalize();s[o*4]=(l.x*.5+.5)*255,s[o*4+1]=(l.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}const r=new ua(s,t,t);return r.wrapS=yi,r.wrapT=yi,r.needsUpdate=!0,r}function by(i){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0);let s=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=o++;r++,s--}return n}const _o={defines:{SAMPLES:16,SAMPLE_VECTORS:Ip(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ot},cameraProjectionMatrixInverse:{value:new Pt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Ip(i,t,e){const n=wy(i,t,e);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function wy(i,t,e){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*t*s/i,o=Math.pow(s/(i-1),e);n.push(new A(Math.cos(r),Math.sin(r),o))}return n}class Ey{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r;const o=.5*(Math.sqrt(3)-1),a=(t+e)*o,c=Math.floor(t+a),l=Math.floor(e+a),h=(3-Math.sqrt(3))/6,u=(c+l)*h,d=c-u,f=l-u,g=t-d,v=e-f;let m,p;g>v?(m=1,p=0):(m=0,p=1);const _=g-m+h,x=v-p+h,b=g-1+2*h,R=v-1+2*h,w=c&255,T=l&255,L=this.perm[w+this.perm[T]]%12,S=this.perm[w+m+this.perm[T+p]]%12,M=this.perm[w+1+this.perm[T+1]]%12;let D=.5-g*g-v*v;D<0?n=0:(D*=D,n=D*D*this.dot(this.grad3[L],g,v));let O=.5-_*_-x*x;O<0?s=0:(O*=O,s=O*O*this.dot(this.grad3[S],_,x));let I=.5-b*b-R*R;return I<0?r=0:(I*=I,r=I*I*this.dot(this.grad3[M],b,R)),70*(n+s+r)}noise3d(t,e,n){let s,r,o,a;const l=(t+e+n)*.3333333333333333,h=Math.floor(t+l),u=Math.floor(e+l),d=Math.floor(n+l),f=1/6,g=(h+u+d)*f,v=h-g,m=u-g,p=d-g,_=t-v,x=e-m,b=n-p;let R,w,T,L,S,M;_>=x?x>=b?(R=1,w=0,T=0,L=1,S=1,M=0):_>=b?(R=1,w=0,T=0,L=1,S=0,M=1):(R=0,w=0,T=1,L=1,S=0,M=1):x<b?(R=0,w=0,T=1,L=0,S=1,M=1):_<b?(R=0,w=1,T=0,L=0,S=1,M=1):(R=0,w=1,T=0,L=1,S=1,M=0);const D=_-R+f,O=x-w+f,I=b-T+f,z=_-L+2*f,X=x-S+2*f,Y=b-M+2*f,et=_-1+3*f,U=x-1+3*f,q=b-1+3*f,$=h&255,Q=u&255,dt=d&255,_t=this.perm[$+this.perm[Q+this.perm[dt]]]%12,k=this.perm[$+R+this.perm[Q+w+this.perm[dt+T]]]%12,K=this.perm[$+L+this.perm[Q+S+this.perm[dt+M]]]%12,at=this.perm[$+1+this.perm[Q+1+this.perm[dt+1]]]%12;let nt=.6-_*_-x*x-b*b;nt<0?s=0:(nt*=nt,s=nt*nt*this.dot3(this.grad3[_t],_,x,b));let St=.6-D*D-O*O-I*I;St<0?r=0:(St*=St,r=St*St*this.dot3(this.grad3[k],D,O,I));let Et=.6-z*z-X*X-Y*Y;Et<0?o=0:(Et*=Et,o=Et*Et*this.dot3(this.grad3[K],z,X,Y));let Lt=.6-et*et-U*U-q*q;return Lt<0?a=0:(Lt*=Lt,a=Lt*Lt*this.dot3(this.grad3[at],et,U,q)),32*(s+r+o+a)}noise4d(t,e,n,s){const r=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let h,u,d,f,g;const v=(t+e+n+s)*c,m=Math.floor(t+v),p=Math.floor(e+v),_=Math.floor(n+v),x=Math.floor(s+v),b=(m+p+_+x)*l,R=m-b,w=p-b,T=_-b,L=x-b,S=t-R,M=e-w,D=n-T,O=s-L,I=S>M?32:0,z=S>D?16:0,X=M>D?8:0,Y=S>O?4:0,et=M>O?2:0,U=D>O?1:0,q=I+z+X+Y+et+U,$=o[q][0]>=3?1:0,Q=o[q][1]>=3?1:0,dt=o[q][2]>=3?1:0,_t=o[q][3]>=3?1:0,k=o[q][0]>=2?1:0,K=o[q][1]>=2?1:0,at=o[q][2]>=2?1:0,nt=o[q][3]>=2?1:0,St=o[q][0]>=1?1:0,Et=o[q][1]>=1?1:0,Lt=o[q][2]>=1?1:0,F=o[q][3]>=1?1:0,pt=S-$+l,Mt=M-Q+l,Jt=D-dt+l,Tt=O-_t+l,qt=S-k+2*l,C=M-K+2*l,y=D-at+2*l,H=O-nt+2*l,j=S-St+3*l,Z=M-Et+3*l,J=D-Lt+3*l,At=O-F+3*l,tt=S-1+4*l,bt=M-1+4*l,Rt=D-1+4*l,rt=O-1+4*l,ut=m&255,It=p&255,mt=_&255,vt=x&255,Gt=a[ut+a[It+a[mt+a[vt]]]]%32,Xt=a[ut+$+a[It+Q+a[mt+dt+a[vt+_t]]]]%32,Zt=a[ut+k+a[It+K+a[mt+at+a[vt+nt]]]]%32,jt=a[ut+St+a[It+Et+a[mt+Lt+a[vt+F]]]]%32,ne=a[ut+1+a[It+1+a[mt+1+a[vt+1]]]]%32;let xt=.6-S*S-M*M-D*D-O*O;xt<0?h=0:(xt*=xt,h=xt*xt*this.dot4(r[Gt],S,M,D,O));let P=.6-pt*pt-Mt*Mt-Jt*Jt-Tt*Tt;P<0?u=0:(P*=P,u=P*P*this.dot4(r[Xt],pt,Mt,Jt,Tt));let st=.6-qt*qt-C*C-y*y-H*H;st<0?d=0:(st*=st,d=st*st*this.dot4(r[Zt],qt,C,y,H));let it=.6-j*j-Z*Z-J*J-At*At;it<0?f=0:(it*=it,f=it*it*this.dot4(r[jt],j,Z,J,At));let yt=.6-tt*tt-bt*bt-Rt*Rt-rt*rt;return yt<0?g=0:(yt*=yt,g=yt*yt*this.dot4(r[ne],tt,bt,Rt,rt)),27*(h+u+d+f+g)}}class yn extends Ri{constructor(t,e,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Sy(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new He(this.width,this.height,{type:Ke}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new te({defines:Object.assign({},vo.defines),uniforms:Tn.clone(vo.uniforms),vertexShader:vo.vertexShader,fragmentShader:vo.fragmentShader,blending:Ae,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ZM,this.normalMaterial.blending=Ae,this.pdMaterial=new te({defines:Object.assign({},_o.defines),uniforms:Tn.clone(_o.uniforms),vertexShader:_o.vertexShader,fragmentShader:_o.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new te({defines:Object.assign({},xo.defines),uniforms:Tn.clone(xo.uniforms),vertexShader:xo.vertexShader,fragmentShader:xo.fragmentShader,blending:Ae}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new te({uniforms:Tn.clone(Er.uniforms),vertexShader:Er.vertexShader,fragmentShader:Er.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Yc,blendDst:As,blendEquation:pn,blendSrcAlpha:$c,blendDstAlpha:As,blendEquationAlpha:pn}),this.blendMaterial=new te({uniforms:Tn.clone(gc.uniforms),vertexShader:gc.vertexShader,fragmentShader:gc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ol,blendSrc:Yc,blendDst:As,blendEquation:pn,blendSrcAlpha:$c,blendDstAlpha:As,blendEquationAlpha:pn}),this.fsQuad=new Dr(null),this.originalClearColor=new lt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Xl,this.depthTexture.format=Hs,this.depthTexture.type=Zs,this.normalRenderTarget=new He(this.width,this.height,{minFilter:ye,magFilter:ye,type:Ke,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Ip(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case yn.OUTPUT.Off:break;case yn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ae,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case yn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ae,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case yn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ae,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case yn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case yn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ae,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case yn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ae,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const s=e.get(n);n.visible=s}),e.clear()}generateNoise(t=64){const e=new Ey,n=t*t*4,s=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){const c=o,l=a;s[(o*t+a)*4]=(e.noise(c,l)*.5+.5)*255,s[(o*t+a)*4+1]=(e.noise(c+t,l)*.5+.5)*255,s[(o*t+a)*4+2]=(e.noise(c,l+t)*.5+.5)*255,s[(o*t+a)*4+3]=(e.noise(c+t,l+t)*.5+.5)*255}const r=new ua(s,t,t,an,Xn);return r.wrapS=yi,r.wrapT=yi,r.needsUpdate=!0,r}}yn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const Ty={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class Ay extends Ri{constructor(t,e,n){super(),this.scene=t,this.camera=e;const s=n.focus!==void 0?n.focus:1,r=n.aperture!==void 0?n.aperture:.025,o=n.maxblur!==void 0?n.maxblur:1;this.renderTargetDepth=new He(1,1,{minFilter:ye,magFilter:ye,type:Ke}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new Mp,this.materialDepth.depthPacking=ep,this.materialDepth.blending=Ae;const a=Ty,c=Tn.clone(a.uniforms);c.tDepth.value=this.renderTargetDepth.texture,c.focus.value=s,c.aspect.value=e.aspect,c.aperture.value=r,c.maxblur.value=o,c.nearClip.value=e.near,c.farClip.value=e.far,this.materialBokeh=new te({defines:Object.assign({},a.defines),uniforms:c,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.uniforms=c,this.fsQuad=new Dr(this.materialBokeh),this._oldClearColor=new lt}render(t,e,n){this.scene.overrideMaterial=this.materialDepth,t.getClearColor(this._oldClearColor);const s=t.getClearAlpha(),r=t.autoClear;t.autoClear=!1,t.setClearColor(16777215),t.setClearAlpha(1),t.setRenderTarget(this.renderTargetDepth),t.clear(),t.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),t.clear(),this.fsQuad.render(t)),this.scene.overrideMaterial=null,t.setClearColor(this._oldClearColor),t.setClearAlpha(s),t.autoClear=r}setSize(t,e){this.materialBokeh.uniforms.aspect.value=t/e,this.renderTargetDepth.setSize(t,e)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}const Ry={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new lt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class vi extends Ri{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ot(t.x,t.y):new ot(256,256),this.clearColor=new lt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new He(r,o,{type:Ke}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new He(r,o,{type:Ke});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new He(r,o,{type:Ke});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=Ry;this.highPassUniforms=Tn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new te({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ot(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Er;this.copyUniforms=Tn.clone(h.uniforms),this.blendMaterial=new te({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Fs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new lt,this.oldClearAlpha=1,this.basic=new Yn,this.fsQuad=new Dr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ot(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=vi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=vi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new te({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ot(.5,.5)},direction:{value:new ot(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new te({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}vi.BlurDirectionX=new ot(1,0);vi.BlurDirectionY=new ot(0,1);class Cy extends vi{get texture(){return this.renderTargetsHorizontal[0].texture}render(t,e,n){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const s=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let r=this.renderTargetBright;for(let o=0;o<this.nMips;o++){const a=this.separableBlurMaterials[o];this.fsQuad.material=a,a.uniforms.colorTexture.value=r.texture,a.uniforms.direction.value=vi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[o]),t.clear(),this.fsQuad.render(t),a.uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,a.uniforms.direction.value=vi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[o]),t.clear(),this.fsQuad.render(t),r=this.renderTargetsVertical[o]}this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=s}}const Py=`
  precision highp float;
  uniform sampler2D tDiffuse;
  uniform sampler2D tBloom;
  uniform float uBloom;
  uniform float uSaturation;
  uniform float uContrast;
  uniform float uVignette;
  uniform float uGrain;
  uniform float uFringe;
  uniform float uTime;
  #include <tonemapping_pars_fragment>
  #include <colorspace_pars_fragment>
  varying vec2 vUv;
  float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  // As UnrealBloomPass's additive blend (SRC_ALPHA, ONE): the glow weighted by its own alpha.
  vec4 frame(vec2 uv) { vec4 b = texture2D(tBloom, uv); return texture2D(tDiffuse, uv) + vec4(uBloom * b.rgb * b.a, 0.0); }
  void main() {
    vec2 d = vUv - 0.5;
    float edge = dot(d, d);
    vec2 shift = d * edge * uFringe; // lateral chromatic aberration, zero at the centre
    vec4 c = frame(vUv);
    c.r = frame(vUv + shift).r;
    c.b = frame(vUv - shift).b;
    float luma = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
    c.rgb = mix(vec3(luma), c.rgb, uSaturation);
    c.rgb = max((c.rgb - 0.18) * uContrast + 0.18, 0.0); // pivot on mid-grey
    c.rgb *= 1.0 - uVignette * smoothstep(0.18, 0.62, edge * 1.6);
    float n = hash(vUv * 1024.0 + fract(uTime * 7.3) * 91.0) - 0.5;
    c.rgb *= 1.0 + n * uGrain;
    #if defined( AGX_TONE_MAPPING )
      c.rgb = AgXToneMapping(c.rgb);
    #elif defined( ACES_FILMIC_TONE_MAPPING )
      c.rgb = ACESFilmicToneMapping(c.rgb);
    #endif
    #ifdef SRGB_TRANSFER
      c = sRGBTransferOETF(c);
    #endif
    gl_FragColor = c;
  }`,Ly=`
  precision highp float;
  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;
  attribute vec3 position;
  attribute vec2 uv;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`;class Iy extends Ri{constructor(t,e){super(),this.bloom=t,this.uniforms={tDiffuse:{value:null},tBloom:{value:null},uBloom:{value:0},toneMappingExposure:{value:1},uSaturation:{value:e.saturation},uContrast:{value:e.contrast},uVignette:{value:e.vignette},uGrain:{value:e.grain},uFringe:{value:e.fringe},uTime:{value:0}},this.material=new KM({uniforms:this.uniforms,vertexShader:Ly,fragmentShader:Py}),this.fsQuad=new Dr(this.material),this._key=""}render(t,e,n){var a;const s=this.uniforms;s.tDiffuse.value=n.texture;const r=(a=this.bloom)==null?void 0:a.enabled;s.tBloom.value=r?this.bloom.texture:n.texture,s.uBloom.value=r?1:0,s.toneMappingExposure.value=t.toneMappingExposure;const o=`${t.outputColorSpace}|${t.toneMapping}`;o!==this._key&&(this._key=o,this.material.defines={},Qt.getTransfer(t.outputColorSpace)===se&&(this.material.defines.SRGB_TRANSFER=""),t.toneMapping===Fl?this.material.defines.AGX_TONE_MAPPING="":t.toneMapping===Wf&&(this.material.defines.ACES_FILMIC_TONE_MAPPING=""),this.material.needsUpdate=!0),t.setRenderTarget(this.renderToScreen?null:e),this.fsQuad.render(t)}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Dy{constructor(t,e,n){const s=t.three,r=s.getDrawingBufferSize(new ot),o=new He(r.x,r.y,{type:Ke,samples:ry});if(this.composer=new My(s,o),this.composer.addPass(new yy(e,n)),Ze.gtao){const a=l=>Math.max(1,Math.round(l*go.resolution));this.ao=new yn(e,n,a(r.x),a(r.y));const c=this.ao.setSize.bind(this.ao);this.ao.setSize=(l,h)=>c(a(l),a(h)),this.ao.blendIntensity=go.intensity,this.ao.updateGtaoMaterial(go.gtao),this.ao.updatePdMaterial(go.denoise),this.composer.addPass(this.ao)}Ze.dof&&(this.dof=new Ay(e,n,{focus:10,aperture:Sd.aperture,maxblur:Sd.maxBlur}),this.dof.enabled=!1,this.composer.addPass(this.dof)),this.bloom=new Cy(r.clone(),mc.strength,mc.radius,mc.threshold),this.composer.addPass(this.bloom),this.final=new Iy(this.bloom,fy),this.composer.addPass(this.final)}setFocus(t){this.dof&&(this.dof.enabled=t!=null,this.dof.enabled&&(this.dof.uniforms.focus.value=t))}setSize(t,e){this.composer.setSize(t,e)}render(t){this.final.uniforms.uTime.value+=t,this.composer.render(t)}}const Ny=typeof document<"u"&&document.documentElement.dataset.edition||"classic",oe=Ny==="nova",Uy=.2,Oy=oe?1e3:420,Ql=60,Dp=17,Fy=17,ky=1,zy=2,By=.8,Hy=3,Vy=2.5,Np={chase:{distance:5.2,height:2,lookAhead:4.5,lookHeight:.75},far:{distance:8.8,height:3.6,lookAhead:6,lookHeight:.4},cockpit:{distance:.22,height:.8,lookAhead:12,lookHeight:-2.2}},vc=["chase","far","cockpit"],xc=9,Gy=7,Wy=.45,Xy=.9,qy=2.4,$y=.32,tn={sway:.0045,swayMax:.06,surge:.004,surgeMax:.05,nod:.012,nodMax:.22,roll:.0022,rollMax:.035,lookInto:.13,stiffness:70,damping:13,gClamp:22},Ye={engine:.0045,engineCockpit:.0015,speed:.004,speedCockpit:.002,kerb:.028,kerbCockpit:.014,aim:-2.5,nyquist:.4,buzzCeil:[.331,.379,.353],kerbCeil:[.303,.397,.303],fpsSmoothing:.05},gt=(i,t,e)=>i<t?t:i>e?e:i,Cn=(i,t,e)=>i+(t-i)*e;function Me(i,t,e){const n=gt((e-i)/(t-i),0,1);return n*n*(3-2*n)}const Ce=(i,t,e,n)=>Cn(i,t,1-Math.exp(-e*n)),Si=i=>Math.atan2(Math.sin(i),Math.cos(i)),Yy=(i,t,e,n)=>i+Si(t-i)*(1-Math.exp(-7*n));function bi(i){return{x:-Math.sin(i),z:-Math.cos(i)}}function th(i){return{x:Math.cos(i),z:-Math.sin(i)}}const jy=(i,t)=>Math.atan2(-i,-t);function nr(i=1){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const Up=i=>gt(i/Dp,0,1);function Ky(i,t=0){const e=Math.sign(t)*Math.max(0,Math.abs(t)-zy);return Ql+Fy*Up(i)+gt(By*e,-1.5,Hy)}function Zy(i,t){if(t<2)return i.yaw;const e=Si(Math.atan2(-i.vx,-i.vz)-i.yaw);return i.yaw+gt(e,-.9,.9)*Wy}function wd(i,t,e,n,s){const r=Np[n],o=bi(e),a=r.distance+(n==="cockpit"?0:Xy*Up(t));return s.pos.set(i.x-o.x*a,r.height,i.z-o.z*a),s.look.set(i.x+o.x*r.lookAhead,r.lookHeight,i.z+o.z*r.lookAhead),s}function Jy(i,t,e,n){let s=e,r=1/0;for(let a=0;a<i.length;a++){const c=i[a],l=(c.x-t.x)**2+(c.z-t.z)**2;l<r&&([s,r]=[a,l])}if(e>=0&&s!==e){const a=i[e];(a.x-t.x)**2+(a.z-t.z)**2<r*1.6&&(s=e)}const o=i[s];return n.pos.set(o.x,o.y,o.z),n.look.set(t.x,.55,t.z),s}function Qy(i){return gt(2*Math.atan(3.2/Math.max(i,1))*180/Math.PI,14,55)}const t2=["sway","surge","nod","roll","look"];class e2{constructor(){this.x={},this.v={},this.reset()}reset(){for(const t of t2)this.x[t]=this.v[t]=0}_spring(t,e,n){const s=tn.stiffness*(e-this.x[t])-tn.damping*this.v[t];return this.v[t]+=s*n,this.x[t]+=this.v[t]*n,this.x[t]}apply(t,e,n,s,r,o){const a=tn.gClamp,c=gt(e.latAccel||0,-a,a),l=gt(e.longAccel||0,-a,a),h=gt((e.speed||0)/6,0,1);if(n>0){const b=Math.min(n,.05);this._spring("sway",gt(c*tn.sway,-.06,tn.swayMax),b),this._spring("surge",gt(-l*tn.surge,-.05,tn.surgeMax),b),this._spring("nod",gt(l*tn.nod,-.22,tn.nodMax),b),this._spring("roll",gt(-c*tn.roll,-.035,tn.rollMax),b),this._spring("look",gt(e.steer||0,-1,1)*tn.lookInto*h,b)}const{sway:u,surge:d,nod:f,roll:g,look:v}=this.x,m=bi(t.yaw),p=th(t.yaw),_=o.pos;_.x+=p.x*u+m.x*d,_.z+=p.z*u+m.z*d,_.y-=Math.max(0,d)*.4;const x=bi(t.yaw+v);return o.look.set(_.x+x.x*s,r+f,_.z+x.z*s),o.roll=g,o}}class n2{constructor(){this.view="chase",this._yaw=0,this._fov=Ql,this._surge=0,this._target={pos:new A,look:new A,roll:0},this.head=new e2,this._pos=new A}cycle(){return this.view=vc[(vc.indexOf(this.view)+1)%vc.length],this.view}reset(t){this._yaw=t.state.yaw,wd(t.state,0,this._yaw,this.view,this._target),this._pos.copy(this._target.pos),this._surge=0,this.head.reset()}update(t,e,n){const{state:s,telemetry:r}=t,o=this.view==="cockpit";if(this._yaw=o?s.yaw:Yy(this._yaw,Zy(s,r.speed),Gy,e),wd(s,r.speed,this._yaw,this.view,this._target),this._target.roll=0,o){const a=Np.cockpit;this.head.apply(s,r,e,a.lookAhead,a.lookHeight,this._target),this._pos.copy(this._target.pos)}else{const a=this._pos,c=this._target.pos;a.set(Ce(a.x,c.x,xc,e),Ce(a.y,c.y,xc,e),Ce(a.z,c.z,xc,e))}return n.pos.copy(this._pos),n.look.copy(this._target.look),n.roll=this._target.roll,this._surge=Ce(this._surge,r.longAccel||0,ky,e),this._fov=Ce(this._fov,Ky(r.speed,this._surge),Vy,e),this._fov}}class i2{constructor(){this.anchors=[],this._anchor=-1,this._target={pos:new A,look:new A},this._look=new A}reset(){this._anchor=-1}update(t,e,n){const s=this._anchor;return this._anchor=Jy(this.anchors,t.state,this._anchor,this._target),this._anchor!==s?this._look.copy(this._target.look):this._look.lerp(this._target.look,1-Math.exp(-8*e)),n.pos.copy(this._target.pos),n.look.copy(this._look),Qy(n.pos.distanceTo(n.look))}}class s2{constructor(){this.trauma=0,this._time=0}add(t){this.trauma=Math.min(1,this.trauma+t)}apply(t,e){this._time+=e,this.trauma=Math.max(0,this.trauma-qy*e);const n=this.trauma*this.trauma*$y;if(n===0)return;const s=this._time*31;t.x+=n*(Math.sin(s*1.1)+.5*Math.sin(s*2.7)),t.y+=n*.6*Math.sin(s*1.7+1.3),t.z+=n*(Math.sin(s*1.3+2.1)+.5*Math.sin(s*2.3))}}const Ed=Math.PI*2;class Op{constructor(t,e=t.map(()=>0),n=t.map(()=>Ye.nyquist),s=Ye){this.mults=t,this.offsets=e,this.ceil=n,this.cfg=s,this.fps=60,this.phase=t.map(()=>0),this.hz=t.map(()=>0),this.value=t.map(()=>0)}update(t,e){if(!(e>0))return this.value;this.fps+=(1/e-this.fps)*this.cfg.fpsSmoothing;for(let n=0;n<this.mults.length;n++)this.hz[n]=Math.min(t*this.mults[n],this.ceil[n]*this.fps),this.phase[n]=(this.phase[n]+this.hz[n]*e*Ed)%Ed,this.value[n]=Math.sin(this.phase[n]+this.offsets[n]);return this.value}}const r2=157/(2*Math.PI);class o2{constructor(){this._buzz=new Op([1,241/157,199/157],[0,1.3,.7],Ye.buzzCeil),this.offset={x:0,y:0,z:0},this._aim={x:0,y:0,z:0}}update(t,e,n,s){const r=this.offset;if(r.x=r.y=r.z=0,t<=0)return r;const o=e==="cockpit",a=gt((n.speed||0)/Dp,0,1),c=(o?Ye.engineCockpit:Ye.engine)*(.25+.75*a)+(o?Ye.speedCockpit:Ye.speed)*a**3,[l,h,u]=this._buzz.update(r2,t);if(r.y+=c*(.6*l+.4*h),r.x+=c*.5*u,s&&s.amount>.01){const d=(o?Ye.kerbCockpit:Ye.kerb)*s.amount*gt((n.speed||0)/8,.2,1),[f,g,v]=s.rib.value;r.y+=d*(.7*f+.3*g),r.x+=d*.45*s.tilt*v}return r}shake(t,e,n,s,r,o){const a=this.update(n,s,r,o);return t.set(t.x+a.x,t.y+a.y,t.z+a.z),Object.assign(this._aim,{x:e.x+a.x*Ye.aim,y:e.y+a.y*Ye.aim,z:e.z+a.z*Ye.aim})}}const a2=1.3,c2=i=>i*i*(3-2*i);class l2{constructor(t){this.three=new rn(Ql,t,Uy,Oy),this.mode="broadcast",this.followCam=new n2,this.broadcastCam=new i2,this.shaker=new s2,this.vibe=new o2,this._out={pos:new A,look:new A,roll:0},this._from={pos:new A,look:new A},this._look=new A,this._swoop=1}get view(){return this.followCam.view}set anchors(t){this.broadcastCam.anchors=t}cycleView(){return this.followCam.cycle()}follow(t){this._from.pos.copy(this.three.position),this._from.look.copy(this._look),this.followCam.reset(t),this.mode="follow",this._swoop=0}broadcast(t=null){this.broadcastCam.reset(),this.mode="broadcast",t&&(this._swoop=1,this.update(t,0))}shake(t){this.shaker.add(t)}setAspect(t){this.three.aspect=t,this.three.updateProjectionMatrix()}update(t,e,n=null){if(this.mode==="manual")return;const s=Object.assign(this._out,{roll:0}),o=(this.mode==="broadcast"?this.broadcastCam:this.followCam).update(t,e,s);this._swoop=Math.min(1,this._swoop+e/a2);const a=c2(this._swoop),c=this.three;c.position.lerpVectors(this._from.pos,s.pos,a),this._look.lerpVectors(this._from.look,s.look,a),this.shaker.apply(c.position,e);const l=this.mode==="follow"?this.vibe.shake(c.position,this._look,e,this.view,t.telemetry,n):this._look;c.lookAt(l.x,l.y,l.z),s.roll&&c.rotateZ(s.roll*a),Math.abs(c.fov-o)>.01&&(c.fov=o,c.updateProjectionMatrix())}}const xs={throttle:["KeyW","ArrowUp"],brake:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],handbrake:["Space","ShiftLeft","ShiftRight"]},h2={start:["Enter","Space"],pause:["Escape","KeyP"],reset:["KeyR"],camera:["KeyC"],mute:["KeyM"],quit:["KeyQ"],left:["ArrowLeft","KeyA"],right:["ArrowRight","KeyD"],prevTrack:["ArrowUp","KeyW"],nextTrack:["ArrowDown","KeyS","KeyN"],raceAgain:["Enter"],nextRace:["KeyN"],level:["KeyL"],graphics:["KeyG"],debug:["Backquote","F3"]},u2=new Set(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab","F3"]),_s={deadzone:.14,steerAxis:0,throttle:7,brake:6,handbrake:0,actions:{start:9,pause:9,raceAgain:9,quit:1,camera:3,reset:8,prevTrack:12,nextTrack:13,nextRace:13,left:14,right:15,level:2}},d2={slop:18};class f2{constructor(t=window){this.down=new Set,this.pressed=new Set,this._padPressed=new Set,this._padPrev={},this._triggered=new Set,this.pad=null,this.touch=null,t.addEventListener("keydown",e=>{u2.has(e.code)&&e.preventDefault(),e.repeat||this.pressed.add(e.code),this.down.add(e.code)}),t.addEventListener("keyup",e=>this.down.delete(e.code)),window.addEventListener("blur",()=>this.down.clear())}poll(){var t,e;if(this.pad=((t=navigator.getGamepads)==null?void 0:t.call(navigator).find(n=>n&&n.connected))||null,this._padPressed.clear(),!!this.pad)for(const[n,s]of Object.entries(_s.actions)){const r=!!((e=this.pad.buttons[s])!=null&&e.pressed);r&&!this._padPrev[n]&&this._padPressed.add(n),this._padPrev[n]=r}}controls(){var r,o,a,c;const t=l=>l.some(h=>this.down.has(h)),e={throttle:t(xs.throttle)?1:0,throttleDigital:!1,brake:t(xs.brake)?1:0,steer:(t(xs.left)?1:0)-(t(xs.right)?1:0),handbrake:t(xs.handbrake)},n=this.pad;if(n){const l=n.axes[_s.steerAxis]||0;Math.abs(l)>_s.deadzone&&(e.steer=-l),e.throttle=Math.max(e.throttle,((r=n.buttons[_s.throttle])==null?void 0:r.value)||0),e.brake=Math.max(e.brake,((o=n.buttons[_s.brake])==null?void 0:o.value)||0),e.handbrake=e.handbrake||!!((a=n.buttons[_s.handbrake])!=null&&a.pressed)}const s=(c=this.touch)==null?void 0:c.held;return e.throttleDigital=t(xs.throttle)||!!(s!=null&&s.throttle),s&&(e.throttle=Math.max(e.throttle,s.throttle?1:0),e.brake=Math.max(e.brake,s.brake?1:0),e.handbrake=e.handbrake||s.handbrake,s.left!==s.right&&(e.steer=s.left?1:-1)),e}action(t){return h2[t].some(e=>this.pressed.has(e))||this._padPressed.has(t)||this._triggered.has(t)}trigger(t){this._triggered.add(t)}endFrame(){this.pressed.clear(),this._triggered.clear()}}const p2=1/240,Pn=160,Nr=9.81,ir=1.05,nl=1,il=1.12,Ur=.58,sl=.25,m2=52,g2=6,v2=16,Td=.45,x2=1.3,_2=1.6,Fp=1.85,eh=1.1,M2=.12,y2=.11,kp=.1,nh=1.7,S2=.7,b2=.25,Pr=1.5,zp=.018,Lr=22,ih=55,ga=30,Ad=.08,w2=420,E2=6,T2=2,A2=.55,bs=[[1500,22],[2400,34],[3e3,39],[3800,39],[4300,31],[4700,20],[5100,11],[5500,6],[5900,2],[6200,0]],sh=1700,Bp=.035,R2=3.2,Hp=2200,C2=3300,P2=45,Ir=4.7,rl=.92,L2=.32,gn=.14,_c=520,I2=.3,D2=4,N2=4,ol=.3,Vp=.54,U2=.55,O2=1.5,al=3,F2=.13,Rd=5,k2=10,z2=5,B2=7,H2=.008,V2=4,G2=10,W2=14,X2=.04,q2=.25,$2=12,Y2=11,j2=.4,K2=14,Z2=.12,J2=1,Q2=.04,tS=.15,eS=.16,nS=.6,iS=.4,sS=.8,rS=.3,oS=.8,Gp=4,Wp=60/(2*Math.PI),Xp=bs.at(-1)[0],Cd=40,aS=3050;function qp(i){if(i<=bs[0][0])return bs[0][1];for(let t=1;t<bs.length;t++){const[e,n]=bs[t];if(i<=e){const[s,r]=bs[t-1];return r+(n-r)*(i-s)/(e-s)}}return 0}function cS(i,t){const e=R2*gt(i/Xp,.25,1),n=t<.05?gt((sh-i)*.02,0,6):0;return t*qp(i)-(1-t)*e+n}const $p=i=>P2*Me(Hp,C2,i),rh=i=>Math.abs(i)*Ir*Wp;function lS(i,t,e,n){const s=rh(Math.max(0,t)),r=cS(i,e),o=$p(Math.max(i,s));if(Math.abs(i-s)<Cd&&Math.abs(r)<=o&&s>=Hp)return{rpm:s,torque:r*Ir*rl,coupled:!0,slipping:0};const a=o*gt((i-s)/Cd,-1,1);let c=i+(r-a)/Bp*Wp*n;return(i-s)*(c-s)<0&&(c=s),{rpm:gt(c,0,Xp*1.02),torque:a*Ir*rl,coupled:!1,slipping:o>0?gt(Math.abs(i-s)/1500,0,1):1}}function Yp(i){const t=Math.max(rh(i/gn),aS);return Math.min(qp(t),$p(t))*Ir*rl/gn/Pn}const hS=i=>1-Me(z2,B2,i),jp=(i,t)=>1-Me(0,t,Math.abs(i||0));function uS(i,t){const e=Me(G2,W2,i);return V2*e*jp(t,X2)/Math.max(Yp(i),1e-6)}function dS(i,t,e,n,s){const r=gt(t||0,0,1);if(r<=i||Math.abs(e||0)>q2||s<al)return r;if(!Number.isFinite(s))return Math.min(r,i+Rd*n);const o=Cn(Rd,k2,hS(s)*jp(e,H2));return Math.min(r,Math.max(i+o*n,uS(s,e)))}function fS(i,t,e){const n=gt(t||0,-1,1),s=Math.abs(n)>Math.abs(i)?$2:Y2;return i+(n-i)*Math.min(1,s*e)}function pS(i,t){const e=K2*ir/Math.max(t*t,1e-6)+Z2,n=Math.min(j2,e);return i*n}function mS(i,t,e,n=J2,s=0,r=0){const o=Me(nS,1,r)*Math.abs(s),a=n*(1-eS*o)*Me(Q2,tS,Math.abs(t));return Cn(i,e+i*iS,a)}function gS(i,t,e){const n=t.throttle||0,s=t.brake||0;let r=e?_c:0,o=n,a=0;return i>ol?r=Math.max(r,_c*s):s>0&&!n&&(a=-Pn*D2*s*gt((N2+i)/.25,0,1)),i<-ol&&n>0&&([r,o]=[Math.max(r,_c*n),0]),{throttle:o,brake:r,reverse:a}}const Yo=Pn*Nr,Pd=Yo*(1-Ur)/2,Ld=Yo*Ur/2;function vS(i,t,e,n){const s=Pn*i*sl/ir/2,r=Pn*t*sl,o=r*Td/nl,a=r*(1-Td)/il,c=x2*Yo*e/4;n[0]=Pd-s-o+c,n[1]=Pd-s+o-c,n[2]=Ld+s-a-c,n[3]=Ld+s+a+c;let l=0;for(let h=0;h<4;h++)l+=n[h]=Math.max(0,n[h]);for(let h=0;h<4;h++)n[h]*=Yo/l;return n}const Id=ir*Ur,jo=ir*(1-Ur),cl=[[Id,nl/2],[Id,-nl/2],[-jo,il/2],[-jo,-il/2]];function xS(i,t,e,n,s){const r=Math.cos(n),o=Math.sin(n);for(let a=0;a<4;a++){const[c,l]=cl[a],h=i-e*l,u=t+e*c;s[a].long=a<2?h*r+u*o:h,s[a].lat=a<2?u*r-h*o:u}return s}const _S=i=>-i.lat/Math.max(Math.abs(i.long),Pr),Kp=Math.tan(Math.PI/(2*nh)),MS=Math.tan(y2),yS=Pn*Nr/4,SS=(i,t)=>i*Math.min(1.3,Math.max(.6,1-M2*(t/yS-1)));function bS(i){const t=Math.sin(nh*Math.atan(Kp*i));return i>1?Math.max(t,S2):t}function Zp(i,t,e,n,s){const r=e/kp,o=t/MS,a=Math.hypot(r,o);if(s.s=a,!(i>0)||a<1e-9)return s.fx=0,s.fy=0,s;const c=n*i*bS(a)/a;return s.fx=c*eh*r,s.fy=c*o,s}const wS=(i,t)=>Math.max(i,0)*t*eh*Kp*nh/kp,ES={fx:0,fy:0,s:0},Jp=(i,t)=>(i*gn-t)/Math.max(Math.abs(t),Pr);function TS(i,t,e,n,s,r,o){let a=0,c=0;for(const f of t){const g=Math.max(Math.abs(f.v),Pr);a+=Zp(f.fz,f.tan,Jp(i,f.v),f.mu,ES).fx*gn,c+=wS(f.fz,f.mu)*gn*gn/g}const l=s+r*c,h=i+r*(e-a)/l,u=r*n/l;let d=Math.abs(h)<=u?0:h-Math.sign(h)*u;if(o&&n>0){const f=(t[0].v+t[1].v)/2,g=f*(1-F2)/gn;f>0&&d<g&&h>=g&&(d=g)}return d}function Dd(i,t,e,n){const s=i??Lr,r=(T2+A2*Math.abs(e))*(s-Lr);return s+(t+E2*Math.abs(e)-r)/w2*n}function Nd(i){const t=((i??Lr)-ih)/ga;return Math.max(1-2.5*Ad,1-Ad*t*t)}const Ud=(i,t)=>Math.hypot(i,t)>.3?Math.atan2(t,Math.abs(i)):0,mr=[0,0,0,0],Mo=[{},{},{},{}],oi={fx:0,fy:0,s:0},AS=[1,1,1,1];function RS(i,t,e){if(!(e>0))return CS(i);const n=fS(i.steer,t.steer,e),s=bi(i.yaw),r=th(i.yaw),o=i.vx*s.x+i.vz*s.z,a=-(i.vx*r.x+i.vz*r.z),c=i.yawRate??0,l=Math.hypot(o,a),h=Me(O2,al,l),u=pS(n,l),d=Math.atan2(a,Math.max(Math.abs(o),Pr)),f=o>0?mS(u,Ud(o,a),d,t.assist,n,t.throttle||0):u;vS(i.ax??0,i.ay??0,f,mr),xS(o,a,c,f,Mo);const g=t.grip??AS,[v,m]=[Nd(i.tempF),Nd(i.tempR)],p=Mo.map((pt,Mt)=>{var Tt;const Jt=((Tt=i.tans)==null?void 0:Tt[Mt])??0;return Jt+(_S(pt)-Jt)*Math.min(1,Math.max(Math.abs(pt.long),Pr)*e/b2)}),_=mr.map((pt,Mt)=>SS(Mt<2?_2:Fp,pt)*(Mt<2?v:m)*g[Mt]),x=t.handbrake?(i.handbrakeTime??0)+e:0,b=x>0&&x<=I2+1e-9&&l>al,R=gS(o,t,b),w=i.omega??o/gn,T=i.rpm??Math.max(sh,rh(w)),L=lS(T,w,R.throttle,e),S=o<-ol||R.reverse<0,M=[2,3].map(pt=>({v:Mo[pt].long,fz:mr[pt],tan:p[pt],mu:_[pt]})),D=L2+(L.coupled&&!R.brake?Bp*Ir**2:0),O=S?o/gn:TS(w,M,L.torque,R.brake,D,e,!b);let[I,z,X,Y,et,U,q]=[0,0,0,0,0,0,0];for(let pt=0;pt<4;pt++){const Mt=Mo[pt],Jt=pt<2||S?0:Jp(O,Mt.long);Zp(mr[pt],p[pt],Jt,_[pt],oi);const[Tt,qt]=pt<2?[Math.cos(f),Math.sin(f)]:[1,0],C=oi.fx*Tt-oi.fy*qt,y=oi.fx*qt+oi.fy*Tt;[I,z,X]=[I+C,z+y,X+cl[pt][0]*y-cl[pt][1]*C];const H=Math.abs(oi.fx*(pt<2?0:O*gn-Mt.long))+Math.abs(oi.fy*Mt.lat);pt<2?Y+=H:[et,U,q]=[et+H,Math.max(U,oi.s),q+Jt/2]}const $=Vp*(1-U2*(t.draft||0))*o*Math.abs(o);let Q=o+(I-$+R.reverse)/Pn*e;const dt=zp*Nr*e;Q=Math.abs(Q)<=dt&&!R.throttle?0:Q-Math.sign(Q)*dt;const _t=Q*Math.tan(u)/ir,k=jo*_t+(a-jo*_t)*Math.exp(-15*e),K=Cn(k,a+z/Pn*e,h),at=Cn(_t,c+X/m2*e,h),nt=s.x*Q-r.x*K,St=s.z*Q-r.z*K,Et=(Q-o)/e,Lt=Cn(Q*_t,z/Pn,h),F=h*Math.min(1,Math.max(0,U-1));return{x:i.x+nt*e,z:i.z+St*e,yaw:i.yaw+at*e,vx:nt,vz:St,steer:n,yawRate:at,omega:S?Q/gn:O,rpm:L.rpm,tans:p,ax:Ce(i.ax??0,Et,g2,e),ay:Ce(i.ay??0,Lt,v2,e),tempF:Dd(i.tempF,Y,l,e),tempR:Dd(i.tempR,et,l,e),handbrakeTime:x,forwardSpeed:Q,slip:Math.abs(K),sliding:F>.05||b,longAccel:Et,latAccel:Lt,slipAngle:Ud(Q,K),frontSlip:h*Math.atan((p[0]+p[1])/2),rearSlip:h*Math.atan((p[2]+p[3])/2),drift:F,wheelSpin:S?0:q,clutch:L.slipping,loads:mr.slice()}}function CS(i){return{...i,yawRate:i.yawRate??0,forwardSpeed:i.forwardSpeed??0,slip:i.slip??0,sliding:!1,longAccel:0,latAccel:0,slipAngle:i.slipAngle??0,frontSlip:0,rearSlip:0,drift:0,wheelSpin:0,rpm:i.rpm??sh,tempF:i.tempF??Lr,tempR:i.tempR??Lr}}function PS(i,t,e,n){const s=Math.max(1,Math.ceil(e/p2-1e-6)),r=e/s;let o=0,a=null,c=i;for(let l=0;l<s;l++){const h=RS(c,t,r),u=n.resolve(h,sS,rS,oS);u>o&&(o=u,a={...n.contact}),c=h}return{state:c,impact:o,contact:a}}const Ki=1.05,va=1,Zi=1.12,LS={radius:.14,width:.13},Qp={radius:.15,width:.21},Ko={body:16761370,accent:1776672,frame:8225676,rim:14278115,hub:9409950,tyre:1315860,engine:10791344,exhaust:13225168,shroud:12854830,tank:14209728,seat:2303274,suit:1914199,glove:1381914,boot:1316120,collar:2105894,helmet:16053492,helmetStripe:15087942,trim:1447706,visor:724762},IS="07",Od=.45,DS=1.8,Fd={speed:18,share:.35},NS=14,US=.012,OS=.01,FS=.07,Mc={perAccel:.01,max:.12,rate:5},je={wheelCentre:[0,.45,-.15],wheelTilt:.76,wheelRadius:.15,shoulder:[.177,.551,.413],upperArm:.31,forearm:.35,elbowOut:[1,-.8,.3],headPivot:[0,.66,.372]},ai={ridge:.32,tyreHalfWidth:.09,lift:.022,hop:.012,roll:.035,attack:40,release:14},kS=new A(0,1,0),W=(i,t,e)=>new A(i,t,e),ae=(i,t)=>new ft(i,t);function re(i,t,e,n,s=6,r=e,o=!0){const a=W().subVectors(t,i),c=new ft(new Ai(r,e,a.length(),s,1,o),n);return c.position.copy(i).addScaledVector(a,.5),c.quaternion.setFromUnitVectors(kS,a.normalize()),c}function ll(i,t,e,n=12,s=6){const r=new da(i,!1,"catmullrom",.2);return new ft(new ma(r,n,t,s,!1),e)}function sr(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new de;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=kd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][d]);const g=kd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function kd(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new ce(o,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const v=h.getComponent(d,g);a.setComponent(d+u,g,v)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function zS(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let o=0;const a=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let _=0,x=a.length;_<x;_++){const b=a[_],R=i.attributes[b];c[b]=new ce(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);const w=i.morphAttributes[b];w&&(l[b]=new ce(new w.array.constructor(w.count*w.itemSize),w.itemSize,w.normalized))}const f=t*.5,g=Math.log10(1/t),v=Math.pow(10,g),m=f*v;for(let _=0;_<r;_++){const x=n?n.getX(_):_;let b="";for(let R=0,w=a.length;R<w;R++){const T=a[R],L=i.getAttribute(T),S=L.itemSize;for(let M=0;M<S;M++)b+=`${~~(L[u[M]](x)*v+m)},`}if(b in e)h.push(e[b]);else{for(let R=0,w=a.length;R<w;R++){const T=a[R],L=i.getAttribute(T),S=i.morphAttributes[T],M=L.itemSize,D=c[T],O=l[T];for(let I=0;I<M;I++){const z=u[I],X=d[I];if(D[X](o,L[z](x)),S)for(let Y=0,et=S.length;Y<et;Y++)O[Y][X](o,S[Y][z](x))}}e[b]=o,h.push(o),o++}}const p=i.clone();for(const _ in i.attributes){const x=c[_];if(p.setAttribute(_,new ce(x.array.slice(0,o*x.itemSize),x.itemSize,x.normalized)),_ in l)for(let b=0;b<l[_].length;b++){const R=l[_][b];p.morphAttributes[_][b]=new ce(R.array.slice(0,o*R.itemSize),R.itemSize,R.normalized)}}return p.setIndex(h),p}const BS=["position","normal","uv"];function HS(i,t,e){let n=i.geometry.clone();for(const r of Object.keys(n.attributes))BS.includes(r)||n.deleteAttribute(r);n.attributes.uv||n.setAttribute("uv",new Vt(new Float32Array(n.attributes.position.count*2),2)),n.index||(n=zS(n));const s=n.attributes.position.count;if(n.applyMatrix4(new Pt().multiplyMatrices(t,i.matrixWorld)),e){const r=new Float32Array(s*3);for(let o=0;o<s;o++)e.toArray(r,o*3);n.setAttribute("color",new Vt(r,3))}return n.clearGroups(),n}const yc=new WeakMap;function VS(i){return yc.has(i)||yc.set(i,Object.assign(i.clone(),{vertexColors:!0,color:new lt(16777215)})),yc.get(i)}function Ws(i,{keep:t=[],alias:e=new Map}={}){i.updateMatrixWorld(!0);const n=i.matrixWorld.clone().invert(),s=new Map,r=o=>{for(const a of[...o.children])if(!t.includes(a))if(a.isMesh){const c=e.get(a.material)??a.material;s.has(c)||s.set(c,[]),s.get(c).push(a),a.removeFromParent()}else r(a)};r(i);for(const[o,a]of s){const c=new ft(...t0(a,o,n));c.userData.small=a.every(l=>l.userData.small),i.add(c)}return i}function t0(i,t,e=new Pt,n=!1){const s=n||i.some(o=>o.material!==t),r=sr(i.map(o=>HS(o,e,s&&o.material.color)));for(const o of i)o.geometry.dispose();return[r,s?VS(t):t]}const oh=5242111;function GS(i){const t=new Wt,e=[];for(const n of[!0,!1]){const s=(n?va:Zi)/2+.02;for(const r of[-1,1]){const o=new Wt;o.position.set(r*s,.11,(n?-1:1)*(Ki/2));const a=new Wt,c=n?.15:.17,l=new ft(new Ai(c*.8,c,.1,22),i.frame),h=new ft(new Rn(c*.82,20,8,0,Math.PI*2,0,Math.PI/2).scale(1,.5,1.3),i.body);h.position.y=.05;const u=new ft(new Gs(c*.78,.018,8,28).rotateX(Math.PI/2),i.glow);u.position.y=-.052;const d=new ft(new er(c*.6,22).rotateX(Math.PI/2),i.glow);d.position.y=-.051,a.add(l,h,u,d),Ws(a,{alias:i.alias}),o.add(a),t.add(o),e.push({steer:o,spin:a,radius:c,front:n,side:r,hover:!0})}}return{group:t,wheels:e}}function WS(i){const t=[];t.push(re(W(.3,.27,.28),W(.3,.27,.62),.095,i.frame,18,.095,!1));for(const n of[.34,.45,.56])t.push(re(W(.3,.27,n),W(.3,.27,n+.025),.1,i.glow,18,.1,!1));for(const n of[-.24,.24]){t.push(re(W(n,.26,.6),W(n,.26,.86),.075,i.frame,16,.06,!1));const s=new ft(new er(.056,18),i.glow);s.position.set(n,.26,.862),t.push(s)}return t.push(re(W(-.24,.26,.66),W(.24,.26,.66),.03,i.frame,8)),t}const zd={engine:["frame","engine"],exhaust:["frame","exhaust"],shroud:["accent","shroud"],tank:["accent","tank"],seat:["accent","seat"],glove:["suit","glove"],panel:["suit","body"],boot:["suit","boot"],collar:["suit","collar"],stripe:["helmet","helmetStripe"],trim:["helmet","trim"],hub:["rim","hub"]},XS=["body","accent","frame","rim","tyre","suit","helmet","visor"];function qS(i=Ko,t=!1){if(t){const a=new Kt({color:11766015,emissive:3941488,roughness:.45,transparent:!0,opacity:.4,depthWrite:!1});return{...Object.fromEntries([...XS,"glow",...Object.keys(zd)].map(l=>[l,a])),alias:new Map}}const e={...Ko,...i},n=(a,c,l=0)=>new Kt({color:a,roughness:c,metalness:l}),s=(a,c=.3,l={})=>new xd({color:a,roughness:c,clearcoat:1,clearcoatRoughness:.08,...l}),r=a=>new xd(a),o={body:s(e.body,.38,{clearcoat:.7,clearcoatRoughness:.14}),accent:n(e.accent,.62,.05),frame:r({color:e.frame,roughness:.38,metalness:.55,clearcoat:.35,clearcoatRoughness:.3}),rim:r({color:e.rim,roughness:.32,metalness:1}),tyre:r({color:e.tyre,roughness:.82,sheen:.4,sheenRoughness:.55,sheenColor:5921370}),suit:r({color:e.suit,roughness:.9,sheen:1,sheenRoughness:.4,sheenColor:new lt(e.suit).lerp(new lt(16777215),.35)}),helmet:s(e.helmet,.2),visor:s(e.visor,.04,{metalness:.75,iridescence:1,iridescenceIOR:1.8,iridescenceThicknessRange:[260,820]}),glow:new Kt({color:0,emissive:oh,emissiveIntensity:2})};o.alias=new Map;for(const[a,[c,l]]of Object.entries(zd))o[a]=new Kt({color:e[l]}),o.alias.set(o[a],o[c]);return o}function Ve(i,t){const e=Object.assign(document.createElement("canvas"),{width:i,height:t});return{canvas:e,ctx:e.getContext("2d")}}function $S(i,t,e,n,s,r){for(const o of[e-i,e,e+i])for(const a of[n-t,n,n+t])o+s>0&&o-s<i&&a+s>0&&a-s<t&&r(o,a)}function Xs(i,t,e,{count:n,minR:s,maxR:r,alpha:o,seed:a}){const c=nr(a);for(let l=0;l<n;l++){const h=s+c()*(r-s),u=c()>.5,d=o*(.4+c()*.6);$S(t,e,c()*t,c()*e,h,(f,g)=>{const v=i.createRadialGradient(f,g,0,f,g,h);v.addColorStop(0,u?`rgba(255,255,255,${d})`:`rgba(0,0,0,${d})`),v.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=v,i.fillRect(f-h,g-h,h*2,h*2)})}}function Zo(i,t,e,{count:n,color:s,minR:r,maxR:o,seed:a}){const c=nr(a);i.fillStyle=s;for(let l=0;l<n;l++)i.beginPath(),i.arc(c()*t,c()*e,r+c()*(o-r),0,Math.PI*2),i.fill()}function Or(i,t,e,n,s){const r=i.getImageData(0,0,t,e),o=r.data,a=nr(s);for(let c=0;c<o.length;c+=4){const l=(a()-.5)*n;[o[c],o[c+1],o[c+2]]=[o[c]+l,o[c+1]+l,o[c+2]+l]}i.putImageData(r,0,0)}function Jn(i,{repeat:t=[1,1],colour:e=!0,anisotropy:n=8}={}){const s=new NM(i);return e&&(s.colorSpace=fn),s.wrapS=s.wrapT=yi,s.repeat.set(t[0],t[1]),s.anisotropy=n,s}function ah(i,t,e='700 64px "Chakra Petch"'){var s,r;t();const n=Jn(i);return(r=(s=document.fonts)==null?void 0:s.load)==null||r.call(s,e).then(()=>{t(),n.needsUpdate=!0}),n}function Bd(i,t){const{canvas:e,ctx:n}=Ve(256,64);n.fillStyle=i,n.fillRect(0,0,128,64),n.fillStyle=t,n.fillRect(128,0,128,64);const s=n.createLinearGradient(0,0,0,64);return s.addColorStop(0,"rgba(0,0,0,0.35)"),s.addColorStop(.25,"rgba(255,255,255,0.08)"),s.addColorStop(.75,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,0.3)"),n.fillStyle=s,n.fillRect(0,0,256,64),Jn(e)}function YS(i,t,e=64){const{canvas:n,ctx:s}=Ve(i*e,t*e);for(let o=0;o<i;o++)for(let a=0;a<t;a++)s.fillStyle=(o+a)%2?"#111214":"#f1f1f1",s.fillRect(o*e,a*e,e,e);const r=Jn(n);return r.magFilter=ye,r}function jS(i){const{canvas:t,ctx:e}=Ve(256,256);return e.fillStyle="#f6f6f6",e.beginPath(),e.arc(128,128,120,0,Math.PI*2),e.fill(),e.fillStyle="#111",e.font='700 150px "Chakra Petch", Impact, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(i,128,138),Jn(t)}function hl(i="rgba(0,0,0,0.75)"){const{canvas:t,ctx:e}=Ve(128,128),n=e.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,i),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),Jn(t,{colour:!1})}function KS(){const{canvas:i,ctx:t}=Ve(256,64);t.fillStyle="#16181c",t.fillRect(0,0,256,64),t.fillStyle="#f2c230";for(let e=-64;e<320;e+=64)t.beginPath(),t.moveTo(e,64),t.lineTo(e+32,64),t.lineTo(e+64,0),t.lineTo(e+32,0),t.fill();return Jn(i)}const _e=.058,Sc=.015,ki=-Ki/2,Vn=Ki/2,ZS=i=>i.map(t=>W(-t.x,t.y,t.z));function JS(i){const t=i.frame,e=[],n=(h,u=Sc,d=12)=>e.push(ll(h,u,t,d),ll(ZS(h),u,t,d));n([W(.17,_e,-.84),W(.3,_e,-.7),W(.36,_e,ki),W(.29,_e,-.3),W(.22,_e,-.05),W(.22,_e,.2),W(.31,_e,.42),W(.36,_e,.6),W(.28,_e,.74)],Sc,18);for(const[h,u]of[[ki,.36],[-.2,.26],[.1,.22],[.66,.34]])e.push(re(W(-u,_e,h),W(u,_e,h),Sc,t));const s=va/2;for(const h of[-1,1]){e.push(re(W(h*.36,_e,ki),W(h*(s-.05),.14,ki),.013,t));const[u,d]=[W(h*(s-.06),.1,ki+.02),W(h*(s-.075),.2,ki-.01)];e.push(re(u,d,.014,t,6,.014,!1)),e.push(re(W(0,.1,-.5),W(h*(s-.08),.12,ki+.06),.007,t))}n([W(.17,_e,-.84),W(.24,.07,-.93),W(.12,.08,-1),W(0,.08,-1.01)],.012,8),n([W(.3,_e,-.7),W(.3,.09,-.86),W(.14,.1,-.93),W(0,.1,-.94)],.011,8),n([W(.29,_e,-.3),W(.5,.07,-.3),W(.58,.09,-.1),W(.58,.09,.15),W(.5,.07,.3),W(.31,_e,.3)],.011,12),n([W(.28,_e,.74),W(.4,.12,.84),W(.6,.14,.86),W(.66,.16,.8)],.012,8),e.push(re(W(-.4,.12,.84),W(.4,.12,.84),.012,t)),n([W(.15,.44,.485),W(.16,.26,.6),W(.24,_e,.66)],.009,6);const r=new ft(new me(.4,.006,.62),i.frame);r.position.set(0,_e-.012,-.4),e.push(r);const o=Qp.radius;e.push(re(W(-Zi/2+.06,o,Vn),W(Zi/2-.06,o,Vn),.02,t,8));for(const h of[-1,1])e.push(re(W(h*.34,_e,Vn),W(h*.34,o+.03,Vn),.022,t,6,.03,!1));const a=re(W(-.13,o,Vn),W(-.12,o,Vn),.085,i.engine,16,.085,!1),c=new ft(new me(.035,.05,.06),i.shroud);c.position.set(-.125,o+.07,Vn-.03);const l=re(W(.2,o,Vn),W(.206,o,Vn),.075,i.engine,16,.075,!1);return e.push(a,c,l),e}function e0(i){const t=i.index.array;for(let e=0;e<t.length;e+=3)[t[e+1],t[e+2]]=[t[e+2],t[e+1]];i.computeVertexNormals()}function vn(i,{wrap:t=!1,out:e=null}={}){const n=i[0].length,s=i.flatMap(c=>c.flatMap(l=>[l.x,l.y,l.z])),r=[];for(let c=0;c<i.length-1;c++)for(let l=0;l<(t?n:n-1);l++){const[h,u]=[c*n+l,c*n+(l+1)%n];r.push(h,u,h+n,u,u+n,h+n)}const o=new de;if(o.setAttribute("position",new Vt(s,3)),o.setIndex(r),o.computeVertexNormals(),!e)return o;const a=(c,l)=>e(c,l).dot(W().fromBufferAttribute(o.attributes.normal,c*n+l));return i.reduce((c,l,h)=>l.reduce((u,d,f)=>u+a(h,f),c),0)<0&&e0(o),o}function xa(i,t){const[e,n]=[i.length-1,i[0].length-1],s=[vn(i,{out:(a,c)=>i[a][c].clone().sub(t[a][c])}),vn(t,{out:(a,c)=>t[a][c].clone().sub(i[a][c])})],r=(a,c)=>a.map(l=>l[c]),o=[[i[0],t[0],i[1]],[i[e],t[e],i[e-1]],[r(i,0),r(t,0),r(i,1)],[r(i,n),r(t,n),r(i,n-1)]];for(const[a,c,l]of o)s.push(vn([a,c],{out:(h,u)=>a[u].clone().sub(l[u])}));return sr(s)}function Fr(i,t,e,n,s,r,o=2,a=s){const c=[];for(let l=0;l<r;l++){const h=l/r*Math.PI*2,[u,d]=[Math.cos(h),Math.sin(h)],f=Math.sign(u)*Math.abs(u)**(2/o)*n,g=Math.sign(d)*Math.abs(d)**(2/o)*(d<0?a:s);c.push(i.clone().addScaledVector(t,f).addScaledVector(e,g))}return c}function Dn(i,t){const e=i.reduce((r,o)=>r.add(o),W()).divideScalar(i.length),n=new de().setFromPoints([...i,e]),s=i.length;return n.setIndex(i.flatMap((r,o)=>[o,(o+1)%s,s])),n.computeVertexNormals(),W().fromBufferAttribute(n.attributes.normal,s).dot(e.clone().sub(t))<0&&e0(n),n}const Jo=i=>Array.from({length:i+1},(t,e)=>e/i);function ch(i,t,e,n){const s=Jo(i).map(r=>Jo(t).map(o=>e(r,o)));return xa(s,s.map(r=>r.map(o=>W(o.x,n,o.z))))}const lh=(i,t=.35,e=6)=>t+(1-t)*Math.sqrt(1-Math.abs(i)**e);function QS(){return ch(8,12,(i,t)=>{const e=t*2-1,n=.38+.18*Me(0,.4,i),s=-1.03+.33*i+.06*e*e*(1-i),r=.125+.1*Me(0,1,i),o=.1+.04*i,a=o+(r-o)*(1-Math.abs(e)**2.4);return W(e*n,.05+(a-.05)*lh(e,.4),s)},.05)}const ui={bottom:[.215,-.745],top:[.43,-.5]};function tb(){const i=t=>Jo(4).map(e=>Jo(6).map(n=>{const s=n*2-1,r=ui.bottom[0]+(ui.top[0]-ui.bottom[0])*e,o=ui.bottom[1]+(ui.top[1]-ui.bottom[1])*e-.035*(1-s*s)-t*.66;return W(s*(.19-.04*e),r+t*.75,o)}));return xa(i(.012),i(0))}function Hd(i){return ch(9,6,(t,e)=>{const n=Math.sin(Math.PI*t)**.35,s=-.36+.7*t+.05*e*(1-2*t),r=(.075+.085*e)*(.45+.55*n)*lh(e,.45);return W(i*(.3+.34*e),.065+r,s)},.065)}function eb(){return ch(12,5,(i,t)=>{const e=i*2-1,n=.72+.24*t-.08*Math.abs(e)**6*t,s=.2+.05*Math.abs(e)**3-.06;return W(e*.7,.06+s*lh(t*2-1,.5),n)},.06)}const qi={centre:[0,.3,.86],tilt:-.18,thickness:.012};function nb(i){const t=new ft(new me(.3,.2,qi.thickness),i.body);return t.position.set(...qi.centre),t.rotation.x=qi.tilt,[ae(QS(),i.body),ae(tb(),i.body),ae(Hd(-1),i.body),ae(Hd(1),i.body),ae(eb(),i.accent),t]}const Vd=[[0,.03,.065,-.004],[-.015,.039,.088,-.01],[-.06,.043,.092,-.01],[-.075,.044,.088,0],[-.14,.046,.066,0],[-.2,.045,.05,0],[-.24,.039,.037,.003],[-.26,.024,.024,.008]],n0=.52;function ib(){const i=W(1,0,0),t=W(0,1,0),e=Vd.map(([r,o,a,c])=>{const l=c+(a-c)*.35;return Fr(W(0,l,r),i,t,o,a-l,10,3.6,l-c)}),n=(r,o)=>e[r][o].clone().sub(W(0,e[r][o].y>.03?.02:.04,Vd[r][0])),s=W(0,.035,-.1);return[vn(e,{wrap:!0,out:n}),Dn(e[0],s),Dn(e.at(-1),s)]}const gr=[[.095,.03],[.07,.14],[.068,.25],[.082,.338],[.223,.398],[.335,.452],[.429,.491],[.519,.524]];function sb(i){const t=e=>gr.map(([n,s],r)=>{const[o,a]=gr[Math.max(0,r-1)],[c,l]=gr[Math.min(gr.length-1,r+1)],h=W(0,l-a,-(c-o)).normalize(),[u,d]=[.2+.012*(r/gr.length)+e,.095];return Array.from({length:9},(f,g)=>{const v=(g/8-.5)*Math.PI,m=Math.sign(v)*Math.abs(Math.sin(v))**.55*u;return W(m,n,s).addScaledVector(h,d*(1-Math.cos(v))-e)})});return ae(xa(t(.012),t(0)),i)}function rb(i){const t=[-.43,-.415,-.17,-.155].map((s,r)=>Fr(W(0,.1,s),W(1,0,0),W(0,1,0),r%3?.062:.05,r%3?.048:.036,12,3.5)),[e,n]=[W(0,.1,-.3),(s,r)=>t[s][r].clone().sub(W(0,.1,t[s][r].z))];return[ae(vn(t,{wrap:!0,out:n}),i.tank),ae(Dn(t[0],e),i.tank),ae(Dn(t[3],e),i.tank),re(W(0,.14,-.25),W(0,.165,-.25),.02,i.accent,10,.02,!1)]}function ob(i){const t=[];for(const e of[-1,1]){const n=new ft(new me(.055,.12,.012),i.frame);n.position.set(e*.105,.134,-.649),n.rotation.x=n0-Math.PI/2,t.push(n,re(W(e*.105,.1,-.63),W(e*.105,.055,-.58),.008,i.frame))}return t}function ab(i){const t=je.wheelRadius,e=new Wt;e.add(new ft(new Gs(t,.012,6,24),i.accent));for(const n of[-.42,Math.PI-.42]){const s=new ft(new Gs(t,.019,6,7,.84),i.accent);s.rotation.z=n,e.add(s)}for(const n of[0,Math.PI,-Math.PI/2])e.add(re(W(0,0,-.03),W(Math.cos(n)*t,Math.sin(n)*t,0),.011,i.frame,4));return e.add(re(W(0,0,-.06),W(0,0,-.025),.038,i.frame,12,.032,!1)),e}function cb(i){const t=W(...je.wheelCentre),e=W(0,Math.sin(je.wheelTilt),Math.cos(je.wheelTilt)),[n,s]=[-.44,-.2].map(a=>t.clone().addScaledVector(e,a)),r=[sb(i.seat),...rb(i),...ob(i),re(t,n,.012,i.frame,8)];for(const a of[-1,1])r.push(re(s,W(a*.12,.058,-.2),.008,i.frame));const o=new Wt;return o.position.copy(t),o.rotation.x=-.76,o.add(ab(i)),{parts:r,steering:o,wheel:o.children[0]}}const nn=.31;function ci(i,[t,e,n],s,r=0){const o=[-.5,-.42,.42,.5].map((c,l)=>{const h=l%3?1:.8;return Fr(W(0,c*e,0),W(1,0,0),W(0,0,1),t/2*h,n/2*h,12,4)}),a=new Wt;return a.add(ae(vn(o,{wrap:!0,out:(c,l)=>W(o[c][l].x,0,o[c][l].z)}),s)),a.add(ae(Dn(o[0],W()),s),ae(Dn(o[3],W()),s)),a.position.copy(i),a.rotation.x=r,a}function lb(i){const t=[[.001,0],[.035,.002],[.055,.035],[.055,.21],[.04,.24],[.013,.245],[.013,.285]],e=new fa(t.map(([s,r])=>new ot(s,r)),14).rotateX(Math.PI/2),n=ae(e,i);return n.position.set(nn+.01,.37,.55),n}function hb(i){const e=ci(W(nn,.31,.41),[.11,.13,.11],i.engine,-.42);for(let n=0;n<4;n++){const s=new ft(new me(.15,.007,.145),i.engine);s.position.y=-.045+n*.026,e.add(s)}return e.add(ci(W(0,.083,0),[.1,.04,.1],i.engine)),[ci(W(nn,.1,.45),[.2,.012,.28],i.frame),ci(W(nn,.185,.45),[.16,.14,.22],i.engine),e,ci(W(nn+.095,.255,.45),[.05,.25,.25],i.shroud),re(W(nn+.12,.24,.455),W(nn+.13,.24,.455),.078,i.accent,16,.07,!1),ci(W(nn+.1,.39,.5),[.022,.02,.06],i.accent),ci(W(nn,.335,.27),[.15,.12,.09],i.accent),ll([W(nn,.35,.44),W(nn+.02,.39,.5),W(nn+.01,.37,.56)],.016,i.exhaust,6,6),lb(i.exhaust),ci(W(.21,.16,.5),[.03,.17,.25],i.accent)]}function Gd(i,t,e,n){const s=new ft(new er(t,20),i);return s.position.copy(e),s.lookAt(e.clone().add(n)),s.userData.small=!0,s}function ub(i,t=IS,e=!1){const n=new Wt;n.add(...JS(i),...nb(i),...oe?WS(i):hb(i));const s=cb(i);n.add(...s.parts,s.steering);const r=e?i.body:new Kt({map:jS(t),roughness:.4}),[o,a]=ui.bottom,[c,l]=ui.top,h=new A(0,l-a,-(c-o)).normalize(),u=new A(0,(o+c)/2+.01,(a+l)/2-.035).addScaledVector(h,.014),d=new A(0,-Math.sin(qi.tilt),Math.cos(qi.tilt)),f=new A(...qi.centre).addScaledVector(d,qi.thickness/2+.003);n.add(Gd(r,.075,u,h),Gd(r,.07,f,d));const g=s.wheel;return g.children.forEach(v=>v.userData.small=!0),Ws(g,{alias:new Map([...i.alias,[i.frame,i.accent]])}),Ws(n,{keep:[s.steering],alias:i.alias}),{group:n,steeringWheel:g}}const Mn=.072,db=22;function Wd(i,t){return new fa(i.map(([e,n])=>new ot(e,n)),t).rotateZ(-Math.PI/2)}function fb(i,t){const e=Mn+.004,n=[[e,.86],[e+.4*(i-e),1],[i-.03,1.03],[i-.012,.95],[i-.003,.8],[i,.45]];return[...n.map(([s,r])=>[s,-r*t]),...n.reverse().map(([s,r])=>[s,r*t])]}function pb(i,t){const e=i.width/2,n=new Wt;n.add(new ft(Wd(fb(i.radius,e),db),t.tyre));for(const o of[1,-1]){const a=new ft(new er(Mn-.004,14),t.tyre);a.rotation.y=o*Math.PI/2,a.position.x=o*.2*e,n.add(a)}const s=[[Mn-.007,-.7*e],[Mn-.007,.76*e],[Mn+.006,.84*e],[Mn+.004,.92*e],[Mn-.005,.9*e]];n.add(new ft(Wd(s,18),t.rim));for(let o=0;o<5;o++){const a=new ft(new me(.012,Mn-.02,.017),t.rim),c=o/5*Math.PI*2;a.rotation.x=c,a.position.set(.55*e,Math.cos(c)*(Mn/2+.006),Math.sin(c)*(Mn/2+.006)),n.add(a)}const r=new ft(new Ai(.02,.026,.7*e,10).rotateZ(-Math.PI/2),t.hub);return r.position.x=.55*e,n.add(r),n}function mb(i){const t=new Wt,e=[];for(const n of[!0,!1]){const s=n?LS:Qp,r=(n?va:Zi)/2;for(const o of[-1,1]){const a=new Wt;a.position.set(o*r,s.radius,(n?-1:1)*(Ki/2));const c=new Wt,l=pb(s,i);o<0&&(l.rotation.y=Math.PI),c.add(l),Ws(c,{alias:i.alias}),a.add(c),t.add(a),e.push({steer:a,spin:c,radius:s.radius,front:n,side:o})}}return{group:t,wheels:e}}const ul={tbc:{name:"Kairos Prime",system:"Hilbert-7 · Home World",blurb:"Tangerine meadows under a turquoise sky, bulb-trees and a ringed giant on the horizon.",sky:[3047376,11071718],haze:[10479327,.0032],sun:[16773327,3,[.5,.55,-.4]],ground:[14717244,10112890,15774298],apron:3814480,rock:7035526,flora:[15981744,16732042,5767152],crystal:6290687,accent:3404031,body:{color:15698526,ring:16176816,dir:[-.6,.32,-.75],size:150},stars:0,aurora:0,peaks:60,density:{trees:1,crystals:.4,rocks:.7,floaters:.5}},monaco:{name:"Vespera Coast",system:"Oyrokh Loop · Tidal World",blurb:"A magenta dusk over teal lowlands. Golden fronds sway beside a twisting harbour run.",sky:[4004718,16747115],haze:[14711430,.0036],sun:[16756848,2.4,[-.7,.18,-.5]],ground:[2068358,2772858,4835750],apron:2761792,rock:3878748,flora:[2826816,16763196,16769658],crystal:16735432,accent:16732080,body:{color:12822271,ring:null,dir:[.5,.25,-.8],size:110},stars:.35,aurora:0,peaks:45,density:{trees:1,crystals:.5,rocks:.5,floaters:.3}},monza:{name:"Okkar Drift",system:"Veyl Reach · Desert World",blurb:"Endless rust dunes, wind-carved arches and cyan crystal fields. Flat out, all the way.",sky:[6989784,16767408],haze:[15910810,.0034],sun:[16773852,3.4,[.3,.7,.4]],ground:[13657658,10503208,15239762],apron:4863280,rock:11556922,flora:[7223850,15118432,16773280],crystal:4191743,accent:4253951,body:{color:15917248,ring:13150344,dir:[-.4,.4,-.8],size:90},stars:0,aurora:0,peaks:35,density:{trees:.25,crystals:1,rocks:1,floaters:.2}},silverstone:{name:"Helix Verdant",system:"Aslari Cluster · Lush World",blurb:"Acid-green plains under a lemon sky, violet mushroom forests and floating stone.",sky:[9423162,15921824],haze:[14150540,.0035],sun:[16777184,2.8,[-.45,.6,.5]],ground:[6472768,3112266,10215514],apron:2898488,rock:5200994,flora:[15261951,10112511,13667583],crystal:16751856,accent:11889663,body:{color:5231045,ring:12579040,dir:[.7,.3,-.6],size:120},stars:0,aurora:0,peaks:55,density:{trees:1,crystals:.3,rocks:.6,floaters:1}},spa:{name:"Boreal Kess",system:"Tyrannic Deep · Frozen World",blurb:"Blue ice, pink crystal spires and an aurora over the long climb through the pines.",sky:[858682,8369896],haze:[10274540,.0038],sun:[14084351,1.6,[.6,.22,-.6]],ground:[14478591,9416920,16777215],apron:2634312,rock:7308968,flora:[2043984,3042191,9435135],crystal:16743128,accent:8060906,body:{color:10535167,ring:14740735,dir:[-.5,.35,-.8],size:100},stars:.7,aurora:1,peaks:80,density:{trees:.8,crystals:1,rocks:.6,floaters:0},night:!0},interlagos:{name:"Emberfall",system:"Karrow Rift · Volcanic World",blurb:"Black glass plains split by glowing seams under a blood-red sky. Mind the heat.",sky:[2753800,14173482],haze:[8004632,.0042],sun:[16752736,2,[.2,.35,-.9]],ground:[3810340,5909030,4857888],apron:1971736,rock:3810852,flora:[2101264,4199438,16738842],crystal:16734740,accent:16742938,body:{color:3805200,ring:16751194,dir:[-.6,.3,-.7],size:170},stars:.2,aurora:0,peaks:90,density:{trees:.2,crystals:1,rocks:1,floaters:.3},night:!0},montreal:{name:"Lumen Reach",system:"Ooxin Veil · Bioluminescent World",blurb:"Eternal night. The forest glows cyan and rose, and the island loop is lit by life.",sky:[197914,2042474],haze:[1712724,.0045],sun:[10466559,1.1,[-.3,.6,.6]],ground:[2760533,1315386,3877496],apron:1184294,rock:2367306,flora:[1709624,16732120,5242111],crystal:5242111,accent:5242111,body:{color:6967295,ring:10455807,dir:[.4,.45,-.8],size:140},stars:1,aurora:.4,peaks:50,density:{trees:1,crystals:.6,rocks:.4,floaters:.4},night:!0},austin:{name:"Solani Dunes",system:"Eissen Arm · Golden World",blurb:"Honey-gold hills and tall teal spires. A big climb, a bigger view.",sky:[3837887,16770976],haze:[16243082,.0033],sun:[16774360,3.2,[.55,.5,.35]],ground:[14263612,11038762,15779936],apron:3813928,rock:9071178,flora:[2779754,4182208,10551280],crystal:16770138,accent:16762938,body:{color:16748394,ring:null,dir:[-.7,.28,-.6],size:80},stars:0,aurora:0,peaks:70,density:{trees:.7,crystals:.5,rocks:.8,floaters:.2}},spielberg:{name:"Azure Talos",system:"Gugesti Rim · Highland World",blurb:"Blue grass, white cliffs and islands of rock drifting over a mountain bowl.",sky:[1728472,12576511],haze:[12115199,.003],sun:[16777215,3.2,[-.4,.65,-.5]],ground:[3837888,2775690,6996200],apron:2764864,rock:14211304,flora:[15790335,16777215,11466495],crystal:9105663,accent:5945599,body:{color:15787728,ring:13682872,dir:[.6,.35,-.7],size:130},stars:0,aurora:0,peaks:110,density:{trees:.6,crystals:.3,rocks:1,floaters:1}},singapore:{name:"Neon Void",system:"Galactic Core · Anomaly",blurb:"A dead world at the galaxy’s heart: black glass, a violet nebula and a sky full of light.",sky:[328207,3805018],haze:[1837616,.0042],sun:[16765183,1.2,[.3,.5,-.8]],ground:[789014,1708080,2233920],apron:525838,rock:1380388,flora:[1051162,16727988,8015871],crystal:16727988,accent:16727988,body:{color:16743128,ring:16761072,dir:[-.3,.5,-.8],size:190},stars:1,aurora:0,nebula:1,peaks:60,density:{trees:.3,crystals:1,rocks:.5,floaters:.8},night:!0}},gb=i=>ul[i]??ul.tbc,vb={low:.35,medium:.6,high:1,ultra:1.3},qs={reach:320,cell:2,flat:5,rise:40,hills:7,segments:220,trees:420,crystals:160,rocks:260,floaters:26,glowBulbs:500,skyRadius:850,hover:.26},Qo=[[.077,.23,.13,.08,.08],[.13,.245,.17,.115,.105],[.243,.29,.155,.105,.1],[.356,.342,.17,.12,.104],[.45,.381,.186,.124,.104],[.521,.409,.2,.11,.098],[.573,.429,.178,.088,.088],[.613,.437,.105,.068,.072],[.638,.432,.058,.054,.05],[.68,.422,.05,.048,.044]],i0=W(1,0,0),s0=W(0,0,1);function xb(i){const t=Qo.map(([r,o,a,c,l])=>Fr(W(0,r,o),i0,s0,a,l,20,2.6,c)),e=W(0,.35,.3),s=vn(t,{wrap:!0,out:(r,o)=>t[r][o].clone().sub(W(0,t[r][o].y,Qo[r][1]))});return[ae(s,i),ae(Dn(t[0],e),i),ae(Dn(t.at(-1),e),i)]}function _b(i){const t=Qo.slice(1,6).map(([e,n,s,r,o])=>Fr(W(0,e,n),i0,s0,s*1.012,o*1.012,48,2.6,r*1.012));return[-4,28].map(e=>{const n=t.map(r=>[-2,-1,0,1,2].map(o=>r[(e+o+48)%48]));return ae(vn(n,{out:(r,o)=>n[r][o].clone().sub(W(0,n[r][o].y,Qo[r+1][1]))}),i)})}function Xd(i,t){const e=W(i*.085,.13,.19),n=W(i*.125,.27,-.15),s=W(i*.108,.15,-.512),r=new ft(new Rn(.056,8,6),t.suit);r.position.copy(n);const o=ib().map(a=>{const c=new ft(a,t.boot);return c.position.set(i*.105,.055,-.5),c.rotation.x=n0,c});return[re(e,n,.074,t.suit,8,.058),r,re(n,s,.052,t.suit,8,.04),...o]}function Mb(i){const t=new ft(new Gs(.08,.018,7,24),i.collar);return t.scale.set(1,.86,1),t.rotation.x=Math.PI/2-.14,t.position.set(0,.603,.412),[...xb(i.suit),..._b(i.panel),...Xd(-1,i),...Xd(1,i),t]}const qd=.132,[yb,r0]=[.138,.185],[Sb,bb]=[.154,.171],[wb,Eb]=[2.3,3.4],Tb=.14,Ab=.05,[Rb,Cb]=[-.56,.2],Pb=(i,t)=>W(Math.sin(i)*Math.cos(t),Math.sin(t),-Math.cos(i)*Math.cos(t)),$d=(i,t)=>{const e=i.y>0?wb:Eb;return(Math.hypot(i.x/t,i.z/(i.z<0?Sb:bb))**e+Math.abs(i.y/(i.y>0?yb:r0))**e)**(-1/e)};function dl(i){let t=$d(i,qd);i.y<0&&(t=$d(i,qd*(1-Tb*Me(0,r0,-i.y*t))));const e=Me(.3,.95,-i.z)*Math.exp(-(((i.y-Rb)/Cb)**2));return t+Ab*e}function hh(i,t,e=0){const n=Pb(i,t);return n.multiplyScalar(dl(n)+e)}function ta(i,t){let[e,n]=[-Math.PI/2,Math.PI/2];for(let s=0;s<24;s++){const r=(e+n)/2;hh(i,r).y<t?e=r:n=r}return(e+n)/2}const Cs=(i,t,e=0)=>hh(i,ta(i,t),e);function fl(i){const t=Math.abs(Math.atan2(Math.sin(i),Math.cos(i)))/Math.PI;return-.15-.003*Me(.5,1,t)+.014*Math.sin(i)**2}const bc=1.52,Oo=i=>.058-.026*Math.abs(i)**3,wc=i=>-.05+.038*i*i,Ec=28,Tc=11,xi=(i,t,e)=>Array.from({length:i+1},(n,s)=>t+(e-t)*s/i);function Lb(i){const t=xi(Ec-1,-Math.PI,Math.PI-2*Math.PI/Ec),e=t.map(l=>ta(l,fl(l))),n=(l,h)=>Math.PI/2-l*(Math.PI/2-e[h]),s=xi(Tc-1,1/Tc,1).map(l=>t.map((h,u)=>hh(h,n(l,u)))),r=vn(s,{wrap:!0,out:(l,h)=>s[l][h]}),o=s[Tc-1].map(l=>l.clone().multiply(W(.9,1,.9)).add(W(0,-.004,0))),a=new ma(new da(o,!0),Ec,.016,4,!0),c=Dn(o,W());return[ae(r,i.helmet),ae(Dn(s[0],W()),i.helmet),ae(a,i.trim),ae(c,i.trim)]}function pl(i,t,e,n,s=8e-4){const r=o=>t.map(a=>i.map(c=>e(c,a,o)));return xa(r(n),r(s))}function Ib(i){const t=xi(14,-1,1),e=(a,c)=>wc(a)+(Oo(a)-wc(a))*c,n=(a,c,l)=>Cs(a*bc,e(a,c),l*(.625+.375*c)),s=[ae(pl(t,xi(3,0,1),n,.008),i.visor)];s[0].userData.small=!0;for(const a of[-1,1]){const[c,l]=[a*(bc+.04),(Oo(1)+wc(1))/2];s.push(re(Cs(c,l),Cs(c,l,.012),.021,i.trim,10,.017,!1))}const r=(a,c)=>c<.01?.005*(1-a*a):0,o=(a,c,l)=>Cs(a*.55,Oo(a*.55/bc)+c-r(a,c),c<.01?l:l*.1);return s.push(ae(pl(xi(8,-1,1),[.003,.02],o,.013),i.helmet)),s}function Db(i){const t=ta(0,Oo(0)+.045),e=Math.PI-ta(Math.PI,fl(Math.PI)+.006),n=xi(18,t,e).map(o=>{const a=.02+.016*(o/Math.PI);return[-a,0,a].map(c=>{const l=W(c/dl(W(0,Math.sin(o),-Math.cos(o))),Math.sin(o),-Math.cos(o)).normalize();return l.multiplyScalar(dl(l)+.0015)})}),s=xi(12,1.75,2*Math.PI-1.75).map(o=>[.014,.036].map(a=>Cs(o,fl(o)+a,.0015))),r=s[0].map((o,a)=>s.map(c=>c[a]));return[ae(vn(n,{out:(o,a)=>n[o][a]}),i.stripe),ae(vn(r,{out:(o,a)=>r[o][a]}),i.stripe)]}function Nb(i){const t=(n,s,r,o)=>pl(xi(4,n-r,n+r),[s-o,s+o],Cs,.005),e=[t(-.42,.118,.07,.008),t(.42,.118,.07,.008)];for(const n of[-.084,-.1])e.push(t(0,n,.13,.0045));return e.map(n=>ae(n,i.trim))}function Ub(i){const t=new Wt;return t.add(...Lb(i),...Ib(i),...Db(i),...Nb(i)),t}const{upperArm:di,forearm:pi,wheelRadius:Yd}=je,Ob=.07,Ac=(i,[t,e,n],s,r)=>new ft(new Rn(i,8,6).scale(t,e,n).translate(0,s,0),r);function Fb(i,t){const e=t?[re(W(),W(0,pi-.1,0),.043,i.suit,8,.036),re(W(0,pi-.115,0),W(0,pi-.045,0),.041,i.glove,8,.047,!1),Ac(1,[.047,.058,.038],pi-.008,i.glove)]:[re(W(),W(0,di,0),.054,i.suit,8,.044),Ac(.052,[1,1,1],0,i.suit),Ac(.046,[1,1,1],di,i.suit)];return new Wt().add(...e).updateMatrixWorld(!0),t0(e,i.suit,void 0,!0)}function kb(i){const t=[0,1,2,3].map(()=>new Sp),e=t.map((a,c)=>Fb(i,c%2===1)),n=sr(e.map(([a])=>a)),s=e.map(([a])=>a.attributes.position.count),r=a=>s.flatMap((c,l)=>Array(c).fill(a(l)).flat());n.setAttribute("skinIndex",new Hl(r(a=>[a,0,0,0]),4)),n.setAttribute("skinWeight",new Vt(r(()=>[1,0,0,0]),4));const o=new CM(n,e[0][1]);return o.add(...t),o.bind(new $l(t,t.map(()=>new Pt)),new Pt),o.boundingSphere=new Kn(W(0,.5,.12),.5),{mesh:o,update:zb(t)}}function zb(i){const t=new Pt().compose(W(...je.wheelCentre),new Nn().setFromEuler(new cn(-.76,0,0)),W(1,1,1)),[e,n,s,r,o,a,c,l,h]=Array.from({length:9},()=>W()),u=new Pt,d=(f,g,v,m)=>{c.subVectors(v,g).normalize(),a.copy(m).addScaledVector(c,-m.dot(c)).normalize(),l.crossVectors(a,c),f.position.copy(g),f.quaternion.setFromRotationMatrix(u.makeBasis(a,c,l))};return f=>{for(const g of[-1,1]){const[v,m]=[Math.cos(f),Math.sin(f)];n.set(g*Yd*v,g*Yd*m,0).applyMatrix4(t),h.set(-m,v,0).transformDirection(t),e.set(g*je.shoulder[0],je.shoulder[1],je.shoulder[2]),r.subVectors(n,e);let p=r.length();e.addScaledVector(r,Math.min(Ob,Math.max(0,p-(di+pi)*.98))/p),p=Math.min(r.subVectors(n,e).length(),(di+pi)*.999),r.normalize(),o.set(g*je.elbowOut[0],je.elbowOut[1],je.elbowOut[2]),o.addScaledVector(r,-o.dot(r)).normalize();const _=(di*di-pi*pi+p*p)/(2*p);s.copy(e).addScaledVector(r,_).addScaledVector(o,Math.sqrt(Math.max(0,di*di-_*_)));const[x,b]=g<0?[i[0],i[1]]:[i[2],i[3]];d(x,e,s,o),d(b,s,n,h)}}}function Bb(i){const t=new Wt;t.add(...Mb(i));const e=new Wt;e.position.set(...je.headPivot);const n=Ub(i);n.position.set(0,.119,-.022),n.scale.setScalar(.95),n.rotation.x=-.06,e.add(n),t.add(e),Ws(e,{alias:i.alias});const s=kb(i);return s.update(0),t.add(s.mesh),Ws(t,{keep:[e,s.mesh],alias:i.alias}),{group:t,head:e,arms:s}}const Hb=3,Vb=4;function Gb(i){const t=new Yn({colorWrite:!1,transparent:!0,depthWrite:!0}),e=[];i.traverse(n=>n.isMesh&&e.push(n));for(const n of e){const s=n.clone(!1);s.material=t,s.renderOrder=Hb,n.renderOrder=Vb,n.parent.add(s)}}class ml{constructor({livery:t,number:e,ghost:n=!1}={}){const s=qS(t,n);this.root=new Wt,this.body=new Wt,this.root.add(this.body);const r=ub(s,e,n);this.steeringWheel=r.steeringWheel,this.driver=Bb(s),this.body.add(r.group,this.driver.group);const{group:o,wheels:a}=oe?GS(s):mb(s);if(this.wheels=a,this.mats=s,this.hover=oe?qs.hover:0,this._bob=Math.random()*10,this.root.add(o),this.root.traverse(l=>{l.isMesh&&(l.receiveShadow=!n,l.castShadow=!n&&!l.userData.small)}),[this._roll,this._pitch,this._lean,this._steer]=[0,0,0,0],n){Gb(this.root);return}const c=new ft(new Pe(1.9,2.6).rotateX(-Math.PI/2),new Yn({map:hl(),transparent:!0,depthWrite:!1,toneMapped:!1}));if(c.position.y=.03-this.hover,c.renderOrder=2,this.root.add(c),oe){const l=new ft(new Pe(1.8,2.3).rotateX(-Math.PI/2),new Yn({map:hl("rgba(255,255,255,1)"),color:oh,transparent:!0,opacity:.22,blending:Fs,depthWrite:!1}));l.position.y=.04-this.hover,l.renderOrder=3,this.pool=l,this.root.add(l)}}setFirstPerson(t){this.driver.head.visible=!t}update(t,e,n,s=!1){this._bob+=n;const r=this.hover?this.hover+Math.sin(this._bob*2.6)*.018+Math.sin(this._bob*4.1)*.007:0;this.root.position.set(t.x,r,t.z),this.root.rotation.y=t.yaw,this._steer=s?t.steer:Ce(this._steer,t.steer,NS,n)||0,this.hover&&(this.mats.glow.emissiveIntensity=1.6+3.2*gt(e.throttle||0,0,1));for(const u of this.wheels){if(u.hover){u.front&&(u.steer.rotation.y=this._steer*Od*.6);continue}const d=!u.front&&Number.isFinite(e.wheelSpeed)?e.wheelSpeed:e.forwardSpeed/u.radius;u.spin.rotation.x-=d*n,u.front&&(u.steer.rotation.y=this._steer*Od)}const o=1-Fd.share*Me(0,Fd.speed,Math.abs(e.forwardSpeed));this.steeringWheel.rotation.z=this._steer*DS*o,this.driver.arms.update(this.steeringWheel.rotation.z);const a=FS,c=gt(-e.latAccel*US,-a,a)||0,l=gt(e.longAccel*OS,-a,a)||0;this._roll=s?c:Ce(this._roll,c,7,n)||0,this._pitch=s?l:Ce(this._pitch,l,7,n)||0,this.body.rotation.set(this._pitch,0,this._roll);const h=gt(e.latAccel*Mc.perAccel,-.12,Mc.max)||0;this._lean=s?h:Ce(this._lean,h,Mc.rate,n)||0,this.driver.head.rotation.z=this._lean}}const Wb={throttle:0,brake:0,steer:0,handbrake:!1};class uh{constructor(t,e={}){this.collider=t,this.model=new ml(e),this.draft=0,this.surface=null,this.grip=[1,1,1,1],this._surfaceIndex=-1,this.state={x:0,z:0,yaw:0,vx:0,vz:0,steer:0,yawRate:0},this.telemetry={},this.contact={x:0,z:0,nx:0,nz:0},this._resetTelemetry()}get object3d(){return this.model.root}_resetTelemetry(){Object.assign(this.telemetry,{speed:0,forwardSpeed:0,slip:0,sliding:!1,longAccel:0,latAccel:0,yawRate:0,slipAngle:0,drift:0,impact:0,throttle:0,brake:0,steer:0,rpm:1700,clutch:1,wheelSpeed:0,wheelSpin:0,tyreTemp:[22,22],loads:[0,0,0,0]})}setLook(t={}){var n,s;const e=this.model.root;return this.model=new ml(t),(n=e.parent)==null||n.add(this.model.root),(s=e.parent)==null||s.remove(e),this.model.update(this.state,this.telemetry,0,!0),e}place(t,e,n){this.state={x:t,z:e,yaw:n,vx:0,vz:0,steer:0,yawRate:0},this.draft=0,this._surfaceIndex=-1,this._resetTelemetry(),this.model.update(this.state,this.telemetry,0,!0)}update(t=Wb,e){var c;if(this.surface){const{x:l,z:h}=this.state;this._surfaceIndex=this.surface.path.nearest(l,h,this._surfaceIndex),this.surface.wheels(this.state,this._surfaceIndex,this.grip)}const n={...t,draft:this.draft,grip:this.grip},{state:s,impact:r,contact:o}=PS(this.state,n,e,this.collider);(c=this.surface)==null||c.addDistance(Math.hypot(s.vx,s.vz)*e),o&&Object.assign(this.contact,o),this.state=s;const a=s;Object.assign(this.telemetry,{speed:Math.hypot(a.vx,a.vz),forwardSpeed:a.forwardSpeed,slip:a.slip,sliding:a.sliding,longAccel:a.longAccel,latAccel:a.latAccel,yawRate:a.yawRate,slipAngle:a.slipAngle,drift:a.drift,rpm:a.rpm,clutch:a.clutch,wheelSpeed:a.omega,wheelSpin:a.wheelSpin,tyreTemp:[a.tempF,a.tempR],loads:a.loads,impact:r,throttle:t.throttle,brake:t.brake,steer:a.steer}),this.model.update(a,this.telemetry,e)}}class Xb{constructor(){this.model=new ml({ghost:!0}),this.frames=null,this.object3d.visible=!1,this._i=0,this._state={x:0,z:0,yaw:0,steer:0},this._tel={forwardSpeed:0,latAccel:0,longAccel:0}}get object3d(){return this.model.root}set(t){this.frames=t&&t.length>=8?t:null,this._i=0}update(t,e,n){const s=this.frames,r=s?s.length/4:0,o=e&&r>1&&t<=s[(r-1)*4];if(this.object3d.visible=o,!o)return void(this._i=0);for(t<s[this._i*4]&&(this._i=0);this._i<r-2&&s[(this._i+1)*4]<=t;)this._i++;const a=this._i*4,c=Math.min(1,Math.max(0,(t-s[a])/(s[a+4]-s[a]||1))),l=this._state,[h,u]=[l.x,l.z];l.x=s[a+1]+(s[a+5]-s[a+1])*c,l.z=s[a+2]+(s[a+6]-s[a+2])*c,l.yaw=s[a+3]+Si(s[a+7]-s[a+3])*c,this._tel.forwardSpeed=n>0?Math.min(25,Math.hypot(l.x-h,l.z-u)/n):0,this.model.update(l,this._tel,n)}}const qb=`
  attribute float aSize;
  attribute float aAlpha;
  uniform float uScale;
  varying float vAlpha;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = aSize * uScale / max(-mv.z, 0.1);
    vAlpha = aAlpha;
  }`,$b=`
  uniform vec3 uColor;
  varying float vAlpha;
  void main() {
    vec2 d = gl_PointCoord - 0.5;
    float a = vAlpha * (1.0 - smoothstep(0.0, 0.25, dot(d, d)));
    if (a < 0.004) discard;
    gl_FragColor = vec4(uColor, a);
  }`;class yo{constructor({max:t,color:e,additive:n=!1,gravity:s=0,drag:r=0}){this.max=t,this.gravity=s,this.drag=r,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.age=new Float32Array(t).fill(1),this.life=new Float32Array(t).fill(1),this.size=new Float32Array(t*2),this.alpha0=new Float32Array(t),this.aSize=new Float32Array(t),this.aAlpha=new Float32Array(t),this.cursor=0;const o=new de;o.setAttribute("position",new ce(this.pos,3)),o.setAttribute("aSize",new ce(this.aSize,1)),o.setAttribute("aAlpha",new ce(this.aAlpha,1)),this.material=new te({uniforms:{uColor:{value:e},uScale:{value:600}},vertexShader:qb,fragmentShader:$b,transparent:!0,depthWrite:!1,blending:n?Fs:Yi}),this.points=new DM(o,this.material),this.points.frustumCulled=!1}emit(t,e,n,s,r,o,a,c,l,h){const u=this.cursor;this.cursor=(u+1)%this.max,this.pos.set([t,e,n],u*3),this.vel.set([s,r,o],u*3),this.size.set([c,l],u*2),this.age[u]=0,this.life[u]=a,this.alpha0[u]=h}setScale(t,e){this.material.uniforms.uScale.value=t/(2*Math.tan(e*Math.PI/360))}update(t){const e=Math.exp(-this.drag*t);for(let s=0;s<this.max;s++){if(this.age[s]>=this.life[s]){this.aAlpha[s]=0;continue}this.age[s]+=t;const r=Math.min(1,this.age[s]/this.life[s]),o=s*3;this.vel[o+1]+=this.gravity*t;for(let a=0;a<3;a++)this.vel[o+a]*=e,this.pos[o+a]+=this.vel[o+a]*t;this.aSize[s]=this.size[s*2]+(this.size[s*2+1]-this.size[s*2])*r,this.aAlpha[s]=this.alpha0[s]*(1-r)*Math.min(1,r*8)}const n=this.points.geometry.attributes;n.position.needsUpdate=n.aSize.needsUpdate=n.aAlpha.needsUpdate=!0}}const Yb=.2,So=.028;class jb{constructor(t=2400,e=.2){this.max=t,this.halfWidth=e/2,this.pos=new Float32Array(t*12),this.col=new Float32Array(t*16);const n=new Uint32Array(t*6);for(let r=0;r<t;r++)n.set([r*4,r*4+1,r*4+2,r*4+1,r*4+3,r*4+2],r*6);const s=new de;s.setAttribute("position",new ce(this.pos,3).setUsage(xu)),s.setAttribute("color",new ce(this.col,4).setUsage(xu)),s.setIndex(new ce(n,1)),this.mesh=new ft(s,new Yn({vertexColors:!0,transparent:!0,depthWrite:!1,side:on,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,this.cursor=0,this.last=new Map}add(t,e,n,s){const r=this.last.get(t);if(s<=0)return void this.last.delete(t);if(!r)return void this.last.set(t,{x:e,z:n,s});const o=e-r.x,a=n-r.z,c=Math.hypot(o,a);if(c<Yb)return;if(c>2.5)return void this.last.set(t,{x:e,z:n,s});const l=-a/c*this.halfWidth,h=o/c*this.halfWidth,u=this.cursor;this.cursor=(u+1)%this.max,this.pos.set([r.x+l,So,r.z+h,r.x-l,So,r.z-h,e+l,So,n+h,e-l,So,n-h],u*12);const d=.5*r.s,f=.5*s;this.col.set([.02,.02,.02,d,.02,.02,.02,d,.02,.02,.02,f,.02,.02,.02,f],u*16);const{position:g,color:v}=this.mesh.geometry.attributes;g.addUpdateRange(u*12,12),v.addUpdateRange(u*16,16),g.needsUpdate=v.needsUpdate=!0,this.last.set(t,{x:e,z:n,s})}clear(){this.pos.fill(0),this.col.fill(0),this.last.clear();const{position:t,color:e}=this.mesh.geometry.attributes;t.needsUpdate=e.needsUpdate=!0}}class dh{constructor(t){this.skids=new jb,this.smoke=oe?new yo({max:260,color:new lt(oh).multiplyScalar(2.2),additive:!0,gravity:-.3,drag:2.2}):new yo({max:260,color:new lt(13225170),gravity:.4,drag:1.6}),this.trail=oe?new yo({max:220,color:new lt(1,.55,.9).multiplyScalar(2.5),additive:!0,drag:3}):null,this.trail&&t.add(this.trail.points),this._trailDebt=0,this.sparks=new yo({max:160,color:new lt(1,.55,.15).multiplyScalar(6),additive:!0,gravity:-14,drag:.6}),t.add(this.skids.mesh,this.smoke.points,this.sparks.points),this._smokeDebt=0}update(t,e,n,s){[this._vh,this._fov]=[s,n.fov];const{state:r,telemetry:o}=t,a=bi(r.yaw),c=th(r.yaw),h=o.speed>2?gt((o.slip-1.8)/3.5,0,1):0,u=o.brake>0&&o.forwardSpeed>8?.3:0;this._smokeDebt+=h>.12?h*26*e:0;const d=Math.floor(this._smokeDebt);this._smokeDebt-=d;for(const f of[-1,1]){const g=r.x+c.x*f*(Zi/2)-a.x*(Ki/2),v=r.z+c.z*f*(Zi/2)-a.z*(Ki/2);oe||this.skids.add(f,g,v,Math.max(h,u));for(let m=0;m<d;m++){const p=()=>(Math.random()-.5)*.8;if(oe){this.smoke.emit(g,.2,v,r.vx*.3+p()*3,.6+Math.random(),r.vz*.3+p()*3,.35+Math.random()*.3,.09,.02,.6);continue}this.smoke.emit(g,.12,v,r.vx*.2+p(),.45+Math.random()*.35,r.vz*.2+p(),.8+Math.random()*.5,.35,1.5+Math.random()*.6,.06+.18*h)}}if(o.impact>2.5){const f=t.contact,g=Math.min(40,Math.round(o.impact*4));for(let v=0;v<g;v++){const m=()=>(Math.random()-.5)*5;this.sparks.emit(f.x,.35,f.z,f.nx*3+r.vx*.3+m(),2+Math.random()*3,f.nz*3+r.vz*.3+m(),.3+Math.random()*.35,.09,.03,1)}}this.trail&&this.thrust(r,o,a,c,e),this.smoke.setScale(s,n.fov),this.sparks.setScale(s,n.fov),this.smoke.update(e),this.sparks.update(e)}thrust(t,e,n,s,r){this._trailDebt+=(e.throttle||0)*34*r;const o=Math.floor(this._trailDebt);this._trailDebt-=o;for(let a=0;a<o;a++){const c=a%2?1:-1,l=t.x+s.x*c*.24+n.x*-.88,h=t.z+s.z*c*.24+n.z*-.88,u=()=>(Math.random()-.5)*.3;this.trail.emit(l,.52,h,t.vx*.55-n.x*2+u(),u(),t.vz*.55-n.z*2+u(),.22+Math.random()*.12,.13,.02,.5)}this.trail.setScale(this._vh??800,this._fov??60),this.trail.update(r)}reset(){this.skids.clear()}}const Kb=.7,jd={fade:.012,suspendMs:60},hi={idleRpm:1700,biteRpm:2600,lockRpm:3e3,dropRpm:2e3,maxRpm:5600,topSpeed:17,slipFlare:650,revRate:9,hzPerRev:1.6,cutoffIdle:380,cutoffTop:3400,idleGain:.07,loadGain:.12,rumbleDepth:.3,idleWobble:22},bo={pitch:2.4,rumble:.04,wobble:.15,cutoff:1.6},wo={pitches:[1.08,.93],hear:34,hold:3,teleport:4},mi={minRpm:.62,lift:.5,pops:[3,7],window:.55,gain:.16},Be={gripG:[7,15],slip:[1.4,5],squealGain:.19,squealHz:[1350,2150],brakeDecel:[6,12],brakeGain:.16,brakeHz:520,judderHz:19,scrapeGain:.22,scrapeHz:2600,scrapeHold:.18},Rc={gain:.3,lowpass:420,buzz:.35},Kd={minSpeed:1.2,gain:.55},Cc={red:660,go:1320,gain:.22},Pc={lap:[880,1320],best:[880,1109,1320,1760],gain:.16};class Zb{constructor(){var e,n;this.ctx=null,this.master=null,this.muted=!1,this.hidden=((e=globalThis.document)==null?void 0:e.hidden)??!1,this._pending=[],this._noise=null,this._suspendTimer=0;const t=()=>this.unlock();for(const s of["keydown","pointerdown","touchstart"])window.addEventListener(s,t,{once:!0,passive:!0});(n=globalThis.document)==null||n.addEventListener("visibilitychange",()=>this.setHidden(document.hidden))}unlock(){var n,s;if(this.ctx)return void(this.hidden||((s=(n=this.ctx).resume)==null?void 0:s.call(n)));const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t;const e=this.ctx.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=4,this.master=this.ctx.createGain(),this.master.gain.value=this._level(),this.master.connect(e).connect(this.ctx.destination);for(const r of this._pending)r(this.ctx,this.master);this._pending.length=0}onReady(t){this.ctx?t(this.ctx,this.master):this._pending.push(t)}toggleMute(){return this.muted=!this.muted,this.master&&this.master.gain.setTargetAtTime(this._level(),this.ctx.currentTime,.05),this.muted}setHidden(t){var e,n;this.hidden=t,this.ctx&&(clearTimeout(this._suspendTimer),this.master.gain.setTargetAtTime(this._level(),this.ctx.currentTime,jd.fade),t?this._suspendTimer=setTimeout(()=>{var s,r;return this.hidden&&((r=(s=this.ctx).suspend)==null?void 0:r.call(s))},jd.suspendMs):(n=(e=this.ctx).resume)==null||n.call(e))}_level(){return this.muted||this.hidden?0:Kb}noise(){if(!this._noise){const t=this.ctx.sampleRate*2;this._noise=this.ctx.createBuffer(1,t,this.ctx.sampleRate);const e=this._noise.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1}return this._noise}}class o0{constructor(t=hi){this.cfg=t,this.rpm=t.idleRpm,this.load=0,this.liftOff=0,this._peakThrottle=0}roadRpm(t){return Math.abs(t)/this.cfg.topSpeed*this.cfg.maxRpm}step(t,e,n){if(Number.isFinite(t.rpm))return this.rpm=Ce(this.rpm,t.rpm,30,n),this.load=Ce(this.load,e,9,n),this._detectLift(e,n),this.rpm;const s=this.cfg,r=this.roadRpm(t.forwardSpeed??t.speed??0),o=e*gt(((t.slip||0)-1.2)/4,0,1)*(t.sliding?1:.6)*s.slipFlare;let a,c;if(r>=s.lockRpm)[a,c]=[r+o,22];else if(e>.05){const l=s.idleRpm+e*(s.maxRpm-s.idleRpm),h=s.biteRpm+(s.lockRpm-s.biteRpm)*Math.max(r/s.lockRpm,e*.5);[a,c]=[Math.min(l,Math.max(h,r))+o,s.revRate]}else{const l=r>s.dropRpm;[a,c]=[l?r:s.idleRpm,l?18:3.5]}return this.rpm=Ce(this.rpm,Math.min(a,s.maxRpm*1.04),c,n),this.load=Ce(this.load,e,9,n),this._detectLift(e,n),this.rpm}get rev(){const t=this.cfg;return gt((this.rpm-t.idleRpm)/(t.maxRpm-t.idleRpm),0,1.1)}_detectLift(t,e){this._peakThrottle=Math.max(t,this._peakThrottle-e*2);const n=this.rpm/this.cfg.maxRpm;this.liftOff=0,this._peakThrottle-t>=mi.lift&&t<.2&&n>=mi.minRpm&&(this.liftOff=gt((n-mi.minRpm)/(1-mi.minRpm),.3,1),this._peakThrottle=t)}reset(){this.rpm=this.cfg.idleRpm,this.load=this._peakThrottle=this.liftOff=0}}const Zd=oe?[1,.08,.5,.05,.32,.04,.24,.03,.2,.02,.14,.02,.1,.01,.08,.01]:[1,.75,.9,.62,.55,.36,.3,.2,.18,.12,.1,.08,.06,.05,.04,.03];function Jb(i=1024){const t=new Float32Array(i);for(let e=0;e<i;e++)t[e]=Math.tanh((e/(i-1)*2-1)*2.2)/Math.tanh(2.2);return t}function Qb(i,t,e){const n=x=>new GainNode(i,{gain:x}),s=new Float32Array(Zd.length+1);s.set(Zd,1);const r=new OscillatorNode(i,{periodicWave:i.createPeriodicWave(new Float32Array(s.length),s)}),o=new OscillatorNode(i,{type:"sine"}),a=new AudioBufferSourceNode(i,{buffer:e,loop:!0}),c=new BiquadFilterNode(i,{type:"bandpass",Q:.9,frequency:400}),l=n(.2),h=n(1),u=new WaveShaperNode(i,{curve:Jb(),oversample:"2x"}),d=new BiquadFilterNode(i,{type:"lowpass",Q:2.6,frequency:600}),f=n(0),g=new OscillatorNode(i,{type:"sine"}),v=n(0),m=n(.15),p=new OscillatorNode(i,{type:"sine",frequency:4.2}),_=n(0);r.connect(n(.5)).connect(h),o.connect(n(.55)).connect(h),a.connect(c).connect(l).connect(h),h.connect(u).connect(d).connect(f).connect(t),g.connect(v).connect(f.gain),g.connect(m).connect(l.gain),p.connect(_),_.connect(r.detune),_.connect(o.detune);for(const x of[r,o,g,p])x.start();return a.start(0,Math.random()*e.duration),{ctx:i,main:r,sub:o,noiseBand:c,noiseAmp:l,drive:h,filter:d,amp:f,pulse:g,pulseDepth:v,wobble:p,wobbleDepth:_}}class tw{constructor(t,e=null){this.audio=t,this.out=e,this._left=0,this._next=0,this._level=0}trigger(t){const[e,n]=mi.pops;this._left=Math.round(e+(n-e)*t*(.6+Math.random()*.4)),this._level=t,this._next=.04+Math.random()*.06}update(t,e=1){if(!(!this._left||!this.audio.ctx)){if(e<=0)return void(this._left=0);this._next-=t,!(this._next>0)&&(this._pop(this._level*e*(.45+Math.random()*.55)),this._level*=.85,this._left--,this._next=.025+Math.random()*(mi.window/4))}}_pop(t){const{ctx:e,master:n}=this.audio,s=e.currentTime,r=this.out??n,o=(h,u,d)=>{const f=new GainNode(e,{gain:0});return f.gain.setValueAtTime(0,s),f.gain.linearRampToValueAtTime(u,s+.002),f.gain.exponentialRampToValueAtTime(1e-4,s+.002+d),h.connect(f).connect(r),s+.01+d},a=new AudioBufferSourceNode(e,{buffer:this.audio.noise()}),c=new BiquadFilterNode(e,{type:"bandpass",frequency:700+Math.random()*1100,Q:1.3});a.connect(c),a.start(s,Math.random()*1.5),a.stop(o(c,t*mi.gain*1.6,.025+Math.random()*.035));const l=new OscillatorNode(e,{type:"triangle",frequency:150});l.frequency.exponentialRampToValueAtTime(55,s+.06),l.start(s),l.stop(o(l,t*mi.gain,.06))}}class a0{constructor(t,e=1){this.n=null,this.pitch=e,this.model=new o0,this.pops=new tw(t),this._wander=0,t.onReady((n,s)=>this.n=Qb(n,s,t.noise()))}get rpm(){return this.model.rpm}update(t,e,n,s=!0,r=1){this.model.step(t,e,n),this.render(this.model,n,s,r)}render(t,e,n=!0,s=1,r=!1){if(r&&this.pops.update(0,0),t.liftOff&&n&&this.pops.trigger(t.liftOff),this.pops.update(e,n?s:0),!this.n)return;const{ctx:o,main:a,sub:c,noiseBand:l,drive:h,filter:u,amp:d,pulse:f,pulseDepth:g,wobble:v,wobbleDepth:m}=this.n,p=o.currentTime,_=t.rev,x=t.load,b=1-gt(_*3,0,1),R=t.rpm/60*hi.hzPerRev*this.pitch*(oe?bo.pitch:1),w=r?.002:.03;a.frequency.setTargetAtTime(R,p,w),c.frequency.setTargetAtTime(R*.5,p,w),f.frequency.setTargetAtTime(R/4,p,w),l.frequency.setTargetAtTime(R*5.5,p,.05),this._wander=(this._wander+e*(.7+Math.random()))%1,v.frequency.setTargetAtTime(3+2.5*this._wander,p,.2),m.gain.setTargetAtTime(hi.idleWobble*b*(oe?bo.wobble:1),p,.1);const T=.35*_+.65*x;u.frequency.setTargetAtTime(Cn(hi.cutoffIdle,hi.cutoffTop,gt(T,0,1))*(oe?bo.cutoff:1),p,.05),h.gain.setTargetAtTime(.7+1.8*x*(.4+.6*_),p,.05);const L=n?(hi.idleGain+hi.loadGain*T)*s:0;d.gain.setTargetAtTime(L,p,.08),g.gain.setTargetAtTime(L*(oe?bo.rumble:hi.rumbleDepth)*(1+.8*b),p,.08)}}const ew={speed:0,forwardSpeed:0,slip:0,sliding:!1};class nw{constructor(t){this.voices=wo.pitches.map(e=>new a0(t,e)),this.bound=this.voices.map(()=>null),this._models=new WeakMap}model(t){return this._track(t).rpm}_track(t){let e=this._models.get(t);return e||this._models.set(t,e={rpm:new o0,x:t.state.x,z:t.state.z}),e}_step(t,e){const n=this._track(t);Math.hypot(t.state.x-n.x,t.state.z-n.z)>wo.teleport&&n.rpm.reset(),[n.x,n.z]=[t.state.x,t.state.z],n.rpm.step(t.telemetry,t.telemetry.throttle,e)}update(t,e,n,s){const o=e.map(l=>{this._step(l,n);const h=Math.hypot(l.state.x-t.x,l.state.z-t.z);return{k:l,d:h,rank:h-(this.bound.includes(l)?wo.hold:0)}}).sort((l,h)=>l.rank-h.rank).slice(0,this.voices.length),a=this.bound.map(l=>o.find(h=>h.k===l)??null),c=o.filter(l=>!a.includes(l));this.voices.forEach((l,h)=>{const u=a[h]??c.shift(),d=((u==null?void 0:u.k)??null)!==this.bound[h];if(this.bound[h]=(u==null?void 0:u.k)??null,!u)return l.update(ew,0,n,!1);const f=Math.max(0,1-u.d/wo.hear)**1.6*.75;l.render(this.model(u.k),n,s&&f>0,f,d)})}}class iw{constructor(t){this.audio=t}_env(t,e,n,s,r){const{ctx:o,master:a}=this.audio,c=o.createGain();return c.gain.setValueAtTime(0,r),c.gain.linearRampToValueAtTime(e,r+n),c.gain.exponentialRampToValueAtTime(1e-4,r+n+s),t.connect(c).connect(a),r+n+s}impact(t){const{ctx:e}=this.audio;if(!e||t<Kd.minSpeed)return;const n=e.currentTime,s=gt(t/9,.15,1)*Kd.gain,r=Object.assign(e.createBufferSource(),{buffer:this.audio.noise()}),o=new BiquadFilterNode(e,{type:"lowpass",frequency:1100});r.connect(o),r.start(n,Math.random()),r.stop(this._env(o,s,.004,.22,n));const a=Object.assign(e.createOscillator(),{type:"sine"});a.frequency.setValueAtTime(95,n),a.frequency.exponentialRampToValueAtTime(42,n+.25),a.start(n),a.stop(this._env(a,s*.9,.004,.28,n))}beep(t){const{ctx:e}=this.audio;if(!e)return;const n=e.currentTime,s=Object.assign(e.createOscillator(),{type:"square"});s.frequency.value=t==="go"?Cc.go:Cc.red,s.start(n),s.stop(this._env(s,Cc.gain*.5,.005,t==="go"?.6:.2,n))}chime(t=!1){const{ctx:e}=this.audio;e&&(t?Pc.best:Pc.lap).forEach((n,s)=>{const r=e.currentTime+s*.09,o=Object.assign(e.createOscillator(),{type:"triangle"});o.frequency.value=n,o.start(r),o.stop(this._env(o,Pc.gain,.01,.35,r))})}}const wn=(i,t=0)=>new GainNode(i,{gain:t}),ws=(i,t,e,n=1)=>new BiquadFilterNode(i,{type:t,frequency:e,Q:n});function yr(i,t){const e=new AudioBufferSourceNode(i,{buffer:t,loop:!0});return e.start(0,Math.random()*t.duration),e}function Fo(i,t,e,n,s){const r=new OscillatorNode(i,{type:t,frequency:e}),o=wn(i,n);return r.connect(o).connect(s),r.start(),{osc:r,depth:o}}const Sn=(i,t,e,n=.06)=>i.setTargetAtTime(t,e.currentTime,n),Lc=(i,[t,e])=>gt((i-t)/(e-t),0,1);function sw(i,t,e){const n=wn(i),[s,r]=[ws(i,"bandpass",Be.squealHz[0],9),ws(i,"bandpass",Be.squealHz[1],7)];yr(i,e).connect(s).connect(n),yr(i,e).connect(r).connect(wn(i,.6)).connect(n),Fo(i,"sine",6.5,35,s.frequency).depth.connect(r.frequency);const a=wn(i),c=wn(i,.55);yr(i,e).connect(ws(i,"bandpass",Be.brakeHz,1.4)).connect(c).connect(a);const l=Fo(i,"square",Be.judderHz,.45,c.gain),h=wn(i),u=wn(i,.6);yr(i,e).connect(ws(i,"highpass",1500,.7)).connect(ws(i,"bandpass",Be.scrapeHz,.8)).connect(u).connect(h);const d=Fo(i,"sawtooth",27,.4,u.gain);for(const f of[n,a,h])f.connect(t);return{ctx:i,squeal:n,bandA:s,bandB:r,brake:a,judder:l,scrape:h,rasp:d}}class rw{constructor(t){this.n=null,this._scrape=0,t.onReady((e,n)=>this.n=sw(e,n,t.noise()))}update(t,e,n=!0,s=0){if(this._scrape=s>.02?Be.scrapeHold:Math.max(0,this._scrape-e),!this.n)return;const{ctx:r,squeal:o,bandA:a,bandB:c,brake:l,judder:h,scrape:u,rasp:d}=this.n,f=t.speed||0,g=n?gt((f-2)/3,0,1):0,v=Lc(t.slip||0,Be.slip),m=Lc(Math.abs(t.latAccel||0),Be.gripG),p=gt(v+.55*m*m,0,1);Sn(o.gain,g*Be.squealGain*p**1.3,r),Sn(a.frequency,Be.squealHz[0]*(1+.12*v),r,.1),Sn(c.frequency,Be.squealHz[1]*(1+.08*v),r,.1);const _=Math.abs(t.forwardSpeed||0),x=gt(-(t.longAccel||0),0,30),b=(t.brake||0)>.05&&_>3?Lc(x,Be.brakeDecel)*(t.brake||0):0;Sn(l.gain,g*Be.brakeGain*b*gt(_/8,0,1),r,.04),Sn(h.osc.frequency,Be.judderHz*(.7+.3*gt(_/14,0,1)),r,.1);const R=this._scrape>0&&n?gt(f/10,.2,1):0;Sn(u.gain,Be.scrapeGain*R,r,.03),Sn(d.osc.frequency,18+Math.random()*30,r,.02)}}class ow{constructor(t){this.n=null,t.onReady((e,n)=>{const s=wn(e),r=wn(e,.5);yr(e,t.noise()).connect(ws(e,"lowpass",Rc.lowpass,1.2)).connect(r).connect(s);const o=Fo(e,"square",30,.5,r.gain),a=new OscillatorNode(e,{type:"triangle",frequency:30});a.connect(wn(e,Rc.buzz)).connect(s),a.start(),s.connect(n),this.n={ctx:e,level:s,ribs:o,buzz:a}})}update(t,e=!0){if(!this.n)return;const{ctx:n,level:s,ribs:r,buzz:o}=this.n,a=gt(t.hz,6,80);Sn(r.osc.frequency,a,n,.03),Sn(o.frequency,a*1.5,n,.03);const c=gt(t.hz/20,.25,1);Sn(s.gain,e?Rc.gain*t.amount*c:0,n,.025)}}const aw=.25,cw="centripetal",lw=6,hw=5,c0=.012,_a=.02,uw=.16,gl=.2,dw=.9,fw=.12,pw=1/22,mw=5,gw=2,vw=.9,xw="#d7263d",_w="#dcdcdc",Ma=.8,Tr=1.5,vl=.75,Ji=.5,Mw=[12853043,14277081],yw=1.2,fh=7,Sw=4.6,li={width:1.9,tile:9,opacity:.34,cornerBoost:.45,color:723725,roughness:.62},$i={minBrake:.2,minDrop:1,mergeGap:3,streaks:3,spread:.28,width:.16,opacity:.22,rearTrack:1.12},Ic={green:.965,rubberStart:.35,rubberLaps:40,lineGain:.04,lineWidth:.9,dust:.05,dustFrom:1.6,dustFull:2.8,kerb:.86};function l0(i){const t=i.count,e=Math.round(gw/i.spacing),n=new Int8Array(t);for(let a=0;a<t;a++)if(!(Math.abs(i.curvature[a])<pw))for(let c=-e;c<=e;c++){const l=i.wrap(a+c);n[l]||(n[l]=Math.sign(i.curvature[a]))}const s=n.indexOf(0);if(s<0)return[];const r=[];let o=null;for(let a=1;a<=t;a++){const c=i.wrap(s+a);o&&n[c]===o.side?o.indices.push(c):(o&&r.push(o),o=n[c]?{side:n[c],indices:[c]}:null)}return r.filter(a=>a.indices.length*i.spacing>=mw)}const ph=i=>i.halfWidth-fw;function h0(i,t){const e=ph(i);return Math.max(e+.12,Math.min(e+dw,.92/Math.max(1e-6,Math.abs(i.curvature[t]))))}function u0(i){const t=i.count,e={side:new Int8Array(t),inner:new Float32Array(t),outer:new Float32Array(t)},n=ph(i);for(const{side:s,indices:r}of l0(i))for(const o of r)e.side[o]=s,e.inner[o]=n,e.outer[o]=h0(i,o);return e}const bw=(i,t,e)=>[[i/2,-t/2],[i/2,t/2],[-i/2,-e/2],[-i/2,e/2]];function ww(i,t,e,n,s,r,o){if(o.count=o.left=o.right=0,o.lateral=n>=0?t.lateral(e.x,e.z,n):0,n<0)return o;const a=-Math.sin(e.yaw),c=-Math.cos(e.yaw),[l,h]=[-c,a];for(const[u,d]of s){const f=e.x+a*u+l*d,g=e.z+c*u+h*d,v=(f-t.x[n])*t.tx[n]+(g-t.z[n])*t.tz[n],m=t.wrap(n+Math.round(v/t.spacing)),p=i.side[m];if(!p)continue;const _=t.lateral(f,g,m)*p;_+r<i.inner[m]||_-r>i.outer[m]+.1||(o.count++,d<0?o.left++:o.right++)}return o}const Ew=bw(Ki,va,Zi);class d0{constructor(){this.contact={count:0,left:0,right:0,lateral:0},this.rib=new Op([1,2.3,.5],[0,.4,1.1],Ye.kerbCeil),this.reset()}reset(){this.amount=0,this.tilt=0,this.hz=0}get lateral(){return this.contact.lateral}update(t,e,n,s,r){const o=n?ww(n,e,t.state,s,Ew,ai.tyreHalfWidth,this.contact):this.contact,a=t.telemetry.speed||0,c=a>.5&&n?gt(o.count/2,0,1):0,l=c>this.amount?ai.attack:ai.release,h=1-Math.exp(-l*r);this.amount+=(c-this.amount)*h;const u=o.count?(o.right-o.left)/o.count:this.tilt;this.tilt+=(u-this.tilt)*h,this.hz=a/ai.ridge,this.rib.update(this.hz,r),this._ride(t.model,a)}_ride(t,e){const n=this.amount,s=gt(e/6,0,1),r=this.rib.value[0]*.5+.5;t.root.position.y=n*(ai.lift+ai.hop*s*r),t.body.rotation.z+=n*this.tilt*ai.roll*(.75+.25*r),t.body.rotation.x+=n*ai.hop*s*this.rib.value[2]}}class f0{constructor(t,e){this.n=t,this.start=e,this.best=null,this.bestSplits=null,this.outLap=!1,this.reset()}reset(){this.progress=null,this.lastIndex=null,this.lap=0,this.lapStart=0,this.lastLap=null,this.splits=new Float32Array(this.n).fill(NaN),[this._lastK,this._prevTime]=[-1,0]}_wrap(t){return t>this.n/2?t-this.n:t<-this.n/2?t+this.n:t}update(t,e){if(this.lastIndex===null)return this.lastIndex=t,this.progress=this._wrap(t-this.start),this.outLap&&this.progress>=0&&(this.progress-=this.n),this._prevTime=e,null;const n=this.progress;this.progress+=this._wrap(t-this.lastIndex),this.lastIndex=t;let s=null;const r=this.lap*this.n;if(n<r&&this.progress>=r){const o=(r-n)/(this.progress-n),a=this._prevTime+o*(e-this._prevTime);this.lap>=1&&(s=this._complete(a)),this.lap+=1,this.lapStart=a,this.splits.fill(NaN),this._lastK=-1}if(this.lap>=1){const o=Math.floor(this.progress-(this.lap-1)*this.n);for(let a=this._lastK+1;a<=Math.min(o,this.n-1);a++)this.splits[a]=e-this.lapStart;this._lastK=Math.max(this._lastK,Math.min(o,this.n-1))}return this._prevTime=e,s}_complete(t){const e=t-this.lapStart,n=this.best===null||e<this.best,s=this.best===null?null:e-this.best;return this.lastLap=e,n&&(this.best=e,this.bestSplits=Float32Array.from(this.splits)),{type:"lap",lap:this.lap,time:e,isBest:n,delta:s}}lapTime(t){return this.lap>=1?t-this.lapStart:0}delta(t){if(!this.bestSplits||this.lap<1)return null;const e=Math.floor(this.progress-(this.lap-1)*this.n),n=e>=0&&e<this.n?this.bestSplits[e]:NaN;return Number.isNaN(n)?null:t-this.lapStart-n}}const Jd=.85,Dc=[.5,1.3],Tw=1.4,Nc=5,Aw=2.4,ea=oe?"tbc-nova.v1":"tbc-kart.v1",ee={lookAhead:5,lookSpeed:.25,steerGain:2.4,yawDamp:.2,maxSpeed:17.5,latAccel:7.5,planChord:.7,planChordMin:4.5,planChordMax:14,planDecel:4.1,planAhead:.25,throttleBase:.5,throttleGain:.8,brakeMargin:.3,brakeGain:1,lockSteer:.9,lockThrottle:6.5,lockThrottleMin:.35,slipLiftStart:.06,slipLiftRange:.15,slipLiftMin:.15},Ln={rowGap:3.4,lateral:1.45,playerSlot:7,size:12},Rw={maxSpeed:9},Un=[{code:"VAL",name:"S. Valente",number:"16",body:14035664,suit:2359366,stripe:16777215,skill:1.02,line:.1,react:.19,aggression:.7},{code:"ROS",name:"M. Rossi",number:"11",body:15087942,suit:2829634,stripe:16777215,skill:1.015,line:-.1,react:.18,aggression:.85},{code:"BRA",name:"A. Braga",number:"9",body:9247549,suit:16053492,stripe:16761370,skill:1.01,line:-.1,react:.21,aggression:.8},{code:"OKA",name:"T. Okafor",number:"23",body:2873724,suit:1786674,stripe:1118481,skill:1.005,line:.15,react:.22,aggression:.55},{code:"SAN",name:"D. Santos",number:"27",body:1023370,suit:730437,stripe:16777215,skill:1,line:.1,react:.23,aggression:.6},{code:"LIN",name:"E. Lindqvist",number:"5",body:3835647,suit:730437,stripe:16766474,skill:.995,line:.05,react:.2,aggression:.65},{code:"KOW",name:"J. Kowalski",number:"14",body:10134445,suit:1776672,stripe:15087942,skill:.99,line:-.15,react:.24,aggression:.5},{code:"TAN",name:"K. Tanaka",number:"88",body:16743168,suit:2236962,stripe:3835647,skill:.985,line:-.2,react:.26,aggression:.4},{code:"MEI",name:"L. Mei",number:"81",body:13208363,suit:2829634,stripe:1118481,skill:.98,line:.2,react:.25,aggression:.55},{code:"MOR",name:"L. Moreau",number:"31",body:11766015,suit:3934572,stripe:16777215,skill:.975,line:.25,react:.28,aggression:.75},{code:"OBR",name:"C. O'Brien",number:"55",body:2763571,suit:16761370,stripe:2282478,skill:.97,line:-.05,react:.27,aggression:.45}],xl={code:"YOU",name:"You",number:"07"},Us={points:[25,18,15,12,10,8,6,4,2,1],fastestLap:1,key:oe?"tbc-nova.season":"tbc-kart.season"},Ps={laps:3.4,pace:11.5,min:90,max:180,lead:12,overrun:60},Ht={lineEdge:1.1,lineMax:2.4,lineTaper:25,sightAhead:9,sightLateral:1.6,sightKeep:11,passOffset:1.7,pullOutAhead:7,passLook:30,passTurn:.35,passGiveUp:8,passAlongside:1.5,passRetry:1,attack:.03,blockAhead:2.6,blockLateral:1.3,offsetRate:2.2,stuckTime:1.6,catchUp:.025,catchUpGap:60,formSpread:.03,cornerBelow:.9,cornerWindow:12,mistakeMin:.05,mistakeMax:.11,mistakeHot:.6,pressureMistakes:2,defendOdds:.5,defendLateral:3,defendInside:.9,defendHold:2.2,defendCool:2.5,defendPace:.96},Cw={tbc:1.014,monaco:.996,monza:1.032,silverstone:1.013,spa:1.022,interlagos:.998,montreal:.984,austin:1.017,spielberg:1.067,singapore:.992},jn={amateur:{label:"AMATEUR",pace:.88,sigma:.03,mistakes:.08},club:{label:"CLUB",pace:.97,sigma:.02,mistakes:.05},pro:{label:"PRO",pace:1.05,sigma:.012,mistakes:.03},elite:{label:"ELITE",pace:1.12,sigma:.006,mistakes:.015}},p0="club",Qd={range:9,lateral:1.3},tf={radius:.78,restitution:.35},ef=1/20,m0=(i=Math.random)=>Dc[0]+i()*(Dc[1]-Dc[0]);class Pw{constructor(t,e,n,s,r){this.laps=r,this.bus=n,this.timer=new f0(t,e),this.timer.best=s.best,this.timer.bestSplits=s.splits,this.state="title",this.mode="race",this.clock=0,this.lights=0,this.lightsMode="off",[this._t,this._hold,this._goAt,this._resumeTo]=[0,1,0,null],this.elapsed=null,this.limit=null,this.flagged=!1}startSession(t,e){this.startCountdown(t),Object.assign(this,{state:"racing",lightsMode:"off",limit:e,flagged:!1}),this.timer.outLap=!0,this.timer.reset(),this.bus.emit("session",e)}startCountdown(t=this.mode,e=m0()){this.mode=t,this.state="countdown",this.limit=null,this.flagged=!1,this.timer.outLap=!1,this._t=0,this.clock=0,this.lights=0,this.lightsMode="red",this._hold=e,this.timer.reset(),this.bus.emit("countdown")}toTitle(){this.state="title",this.lightsMode="off",this.lights=0}finish(){this.state="finished",this.bus.emit("finish")}follow(t){this.elapsed=t}togglePause(){this.state==="paused"?(this.state=this._resumeTo,this.bus.emit("pause",!1)):(this.state==="racing"||this.state==="countdown")&&(this._resumeTo=this.state,this.state="paused",this.bus.emit("pause",!0))}update(t,e){if(this.elapsed&&(t=Math.max(0,this.elapsed()-this._t)),this.state==="countdown"){this._t+=t;const n=Math.min(Nc,Math.floor(this._t/Jd));n>this.lights&&(this.lights=n,this.bus.emit("light",n));const s=Nc*Jd+this._hold;n===Nc&&this._t>=s&&(this.state="racing",this.lightsMode="go",this._goAt=this._t,this.elapsed&&(this.clock=this._t-s),this.bus.emit("go"))}else if(this.state==="racing"){this._t+=t,this.clock+=t,this.lightsMode==="go"&&this._t-this._goAt>Tw&&(this.lightsMode="off");const n=this.timer.update(e,this.clock);n&&this.bus.emit("lap",n),this.limit!==null&&!this.flagged&&this.clock>=this.limit&&(this.flagged=!0,this.bus.emit("flag",this.limit))}else this.state==="finished"&&(this._t+=t,this.clock+=t)}get view(){const t=this.timer;return{state:this.state,mode:this.mode,totalLaps:this.laps,lap:t.lap,lapTime:t.lapTime(this.clock),last:t.lastLap,best:t.best,delta:t.delta(this.clock),lights:this.lights,lightsMode:this.lightsMode,timeLeft:this.limit===null?null:Math.max(0,this.limit-this.clock),flagged:this.flagged}}}class _l{constructor(t,e,n,s,{timed:r=!1}={}){this.n=t,this.laps=r?1/0:n,this.timed=r,this.entries=s.map(o=>({...o,timer:new f0(t,e),passTimes:new Float32Array(t*(r?1:n)+1)})),this.passTimesLength=t*(r?1:n)+1;for(const o of this.entries)o.timer.outLap=r;this.reset()}reset(){for(const t of this.entries)t.timer.reset(),t.passTimes.fill(NaN),Object.assign(t,{finishTime:null,bestLap:null,lapsDone:0,progress:0,_recorded:-1});this.order=[...this.entries],this.flagAt=null}flag(t){this.flagAt??(this.flagAt=t)}get player(){return this.entries.find(t=>t.isPlayer)}update(t,e){const n=[];return this.entries.forEach((s,r)=>{if(s.finishTime!==null)return;const o=s.timer.update(t[r],e);s.progress=s.timer.progress;const a=Math.min(Math.floor(s.progress),this.passTimesLength-1);for(let c=Math.max(0,s._recorded+1);c<=a;c++)s.passTimes[c]=e;s._recorded=Math.max(s._recorded,a),o&&(s.lapsDone=o.lap,s.bestLap=s.bestLap===null?o.time:Math.min(s.bestLap,o.time),(o.lap>=this.laps||this.flagAt!==null&&e>=this.flagAt)&&(s.finishTime=s.timer.lapStart,n.push(s)))}),this.order=[...this.entries].sort((s,r)=>this.timed?(s.bestLap??1/0)-(r.bestLap??1/0)||r.progress-s.progress:s.finishTime!==null||r.finishTime!==null?(s.finishTime??1/0)-(r.finishTime??1/0):r.progress-s.progress),n}position(t){return this.order.indexOf(t)+1}gap(t,e){const n=this.order[0];if(t===n)return 0;if(this.timed)return t.bestLap===null||n.bestLap===null?null:t.bestLap-n.bestLap;if(t.finishTime!==null)return t.finishTime-n.finishTime;const s=Math.floor((n.progress-t.progress)/this.n);if(s>=1)return{laps:s};const r=n.passTimes[Math.floor(t.progress)];return Number.isNaN(r)||r===void 0?null:Math.max(0,e-r)}}const Eo=(i,t)=>Math.round(i*t)/t;class Lw{constructor(){this.reset()}reset(){this.lap=-1,this.frames=[],this._next=0}update(t,e,n){t!==this.lap&&([this.lap,this.frames,this._next]=[t,[],0]),!(t<1||e<this._next)&&(this.frames.push(Eo(e,1e3),Eo(n.x,100),Eo(n.z,100),Eo(n.yaw,1e3)),this._next=Math.max(this._next+ef,e-ef))}take(){return this.frames.length>=8?this.frames.slice():null}}function Iw(i){const t=Math.abs(i||0)-ee.lockSteer;return t>0?Math.max(ee.lockThrottleMin,1-t*ee.lockThrottle):1}function Dw(i){return gt(1-(Math.abs(i||0)-ee.slipLiftStart)/ee.slipLiftRange,ee.slipLiftMin,1)}function mh(i,t,e=0,n=0){const s=t-i;return{throttle:Math.min(gt(ee.throttleBase+s*ee.throttleGain,0,1),Iw(e),Dw(n)),brake:gt((-s-ee.brakeMargin)*ee.brakeGain,0,1)}}function g0(i,t,e){const n=t.x-i.x,s=t.z-i.z,r=Si(jy(n,s)-i.yaw),o=2*e*Math.sin(r)/Math.max(Math.hypot(n,s),1),a=(i.yawRate??0)-o;return gt(r*ee.steerGain-a*ee.yawDamp,-1,1)}const nf=new WeakMap;function Nw(i,t,{latAccel:e,decel:n,chord:s,chordMin:r,chordMax:o,maxSpeed:a}){const c=`${e}/${n}/${s}/${r}/${o}/${a}`,l=nf.get(t);if((l==null?void 0:l.key)===c)return l.plan;const h=i.count,u=new Float64Array(h),d=new Float64Array(h);for(let m=0;m<h;m++)[u[m],d[m]]=[i.x[m]-i.tz[m]*t[m],i.z[m]+i.tx[m]*t[m]];const[f,g]=[r,o],v=new Float32Array(h).fill(a);for(let m=0;m<2;m++)for(let p=0;p<h;p++){const _=f===g?f:Math.min(g,Math.max(f,v[p]*s)),x=Math.max(2,Math.round(_/i.spacing)),b=Uw(u,d,i.wrap(p-x),p,i.wrap(p+x));v[p]=Math.min(a,Math.sqrt(e/Math.max(b,1e-4)))}for(let m=0;m<2;m++)for(let p=h-1;p>=0;p--){const _=i.wrap(p+1);v[p]=Math.min(v[p],Math.sqrt(v[_]**2+2*n*Math.hypot(u[_]-u[p],d[_]-d[p])))}return nf.set(t,{key:c,plan:v}),v}function Uw(i,t,e,n,s){const r=Math.hypot(i[n]-i[e],t[n]-t[e]),o=Math.hypot(i[s]-i[n],t[s]-t[n]),a=Math.hypot(i[e]-i[s],t[e]-t[s]),c=(i[n]-i[e])*(t[s]-t[e])-(t[n]-t[e])*(i[s]-i[e]);return 2*Math.abs(c)/Math.max(r*o*a,1e-9)}function gh(i,t,e,n,{skill:s=1,ahead:r,maxSpeed:o}){const a=t.wrap(e+Math.round(n*r/t.spacing));return Math.min(i[a]*s,o)}const vh=(i,t)=>Nw(i,t,{latAccel:ee.latAccel,decel:ee.planDecel,chord:ee.planChord,chordMin:ee.planChordMin,chordMax:ee.planChordMax,maxSpeed:99});class Ow{constructor(t){this.setPath(t)}setPath(t){this.path=t,this.index=-1,this.plan=t&&vh(t,new Float32Array(t.count))}controls(t,e,n=ee.maxSpeed){const s=this.path;this.index=s.nearest(t.x,t.z,this.index);const r=s.wrap(this.index+Math.round((ee.lookAhead+e*ee.lookSpeed)/s.spacing)),o=gh(this.plan,s,this.index,e,{ahead:ee.planAhead,maxSpeed:n}),a=g0(t,{x:s.x[r],z:s.z[r]},e);return{...mh(e,o,a,t.slipAngle),steer:a,handbrake:!1}}}const sf={best:null,splits:null,ghost:null},Fw=i=>i==="tbc"?ea:`${ea}.${i}`;function kw(i,t=ea){try{const e=JSON.parse(localStorage.getItem(t)||"null");if(!e||e.signature!==i||typeof e.best!="number")return{...sf};const n=Array.isArray(e.splits)?Float32Array.from(e.splits,r=>r??NaN):null,s=Array.isArray(e.ghost)&&e.ghost.length%4===0&&e.ghost.every(Number.isFinite)?e.ghost:null;return{best:e.best,splits:n,ghost:s}}catch{return{...sf}}}function zw(i,t,e,n=null,s=ea){try{const r=e?Array.from(e,o=>Number.isNaN(o)?null:Math.round(o*1e3)/1e3):null;localStorage.setItem(s,JSON.stringify({signature:i,best:t,splits:r,ghost:n}))}catch{}}function Yt(i,t="",e=""){const n=document.createElement(i);return t&&(n.className=t),e&&(n.innerHTML=e),n}function rr(i){const t={};for(const e of i.querySelectorAll("[data-ref]"))t[e.dataset.ref]=e;return t}function $t(i,t){i.textContent!==t&&(i.textContent=t)}function _i(i,t){i.classList.toggle("is-visible",t),i.inert=!t}function In(i){if(i==null||!Number.isFinite(i))return"-:--.---";const t=Math.max(0,Math.round(i*1e3)),e=Math.floor(t/6e4),n=Math.floor(t%6e4/1e3);return`${e}:${String(n).padStart(2,"0")}.${String(t%1e3).padStart(3,"0")}`}function Ml(i){return i==null||!Number.isFinite(i)?"":`${i<0?"−":"+"}${Math.abs(i).toFixed(3)}`}function na(i){return i==null?"—":typeof i=="object"?`+${i.laps} LAP${i.laps>1?"S":""}`:`+${i.toFixed(3)}`}const ia=i=>`${i}${["TH","ST","ND","RD"][i%10>3||Math.floor(i/10)===1?0:i%10]}`;class Bw{constructor(t){this.el=Yt("div","hud-panel hud-lap",`<div class="hud-label">LAP<b data-ref="lap">–</b></div>
       <div class="hud-time" data-ref="time">0:00.000</div>
       <div class="hud-delta" data-ref="delta"></div>
       <div class="hud-rows">
         <span>LAST</span><b data-ref="last">-:--.---</b>
         <span>BEST</span><b data-ref="best" class="is-best">-:--.---</b>
       </div>`),t.appendChild(this.el),this.r=rr(this.el)}update(t){const e=this.r;if(t.mode==="quali"){const n=t.timeLeft??0,s=`${Math.floor(n/60)}:${String(Math.floor(n%60)).padStart(2,"0")}`;$t(e.lap,`${t.lap>=1?t.lap:"OUT"} · ${t.flagged?"FLAG ⚑":s}`)}else{const n=t.mode==="race"||t.mode==="champ"?`/${t.totalLaps}`:"";$t(e.lap,`${t.lap>=1?Math.min(t.lap,t.totalLaps??1/0):"–"}${n}`)}$t(e.time,In(t.lapTime)),$t(e.last,In(t.last)),$t(e.best,In(t.best)),$t(e.delta,Ml(t.delta)),e.delta.className=`hud-delta ${t.delta==null?"":t.delta<=0?"is-faster":"is-slower"}`}}const Hw=70,rf="M 27.25 142 A 84 84 0 1 1 172.75 142";class Vw{constructor(t){this.el=Yt("div","hud-speedo",`<svg viewBox="0 0 200 180">
         <defs><linearGradient id="speedGrad" x1="0" x2="1">
           <stop offset="0" stop-color="#ffc21a"/><stop offset="1" stop-color="#ff3b4e"/>
         </linearGradient></defs>
         <path class="arc-bg" d="${rf}" fill="none" stroke-width="10" stroke-linecap="round"/>
         <path class="arc-fg" data-ref="arc" d="${rf}" fill="none" stroke="url(#speedGrad)"
               stroke-width="10" stroke-linecap="round" pathLength="100" stroke-dasharray="100"
               stroke-dashoffset="100"/>
       </svg>
       <div class="speed-num" data-ref="num">0</div>
       <div class="speed-unit">KM/H</div>
       <div class="speed-draft">SLIPSTREAM</div>`),t.appendChild(this.el),this.r=rr(this.el),this._shown=-1}update(t,e=0){const n=e>.15;n!==this._drafting&&(this._drafting=n,this.el.classList.toggle("is-drafting",n));const s=Math.round(t*3.6);s!==this._shown&&(this._shown=s,$t(this.r.num,String(s)),this.r.arc.setAttribute("stroke-dashoffset",String(100-Math.min(100,s/Hw*100))))}}const Gw=ih-ga*.6,of=ih+ga*.6,Ww=i=>i<Gw?"is-cold":i>of+ga?"is-cooked":i>of?"is-hot":"is-good";class Xw{constructor(t){this.el=Yt("div","hud-tyres",'<span>TYRES</span><i data-axle="f"><b></b><em>F</em></i><i data-axle="r"><b></b><em>R</em></i>'),t.appendChild(this.el),this.axles=[...this.el.querySelectorAll("i")],this._shown=["",""]}update(t){t&&this.axles.forEach((e,n)=>{const s=Math.round(t[n]),r=`${s}`;r!==this._shown[n]&&(this._shown[n]=r,e.className=Ww(t[n]),$t(e.firstChild,`${s}°`))})}}function xh(i,t,e,n,s,r,{band:o=.16,line:a=.7,minBand:c=4}={}){let[l,h,u,d]=[1/0,-1/0,1/0,-1/0];for(let R=0;R<t.count;R++)l=Math.min(l,t.x[R]),h=Math.max(h,t.x[R]),u=Math.min(u,t.z[R]),d=Math.max(d,t.z[R]);const f=Math.min((n-2*r)/(h-l),(s-2*r)/(d-u)),g=(n-(h-l)*f)/2,v=(s-(d-u)*f)/2,m=(R,w)=>[g+(R-l)*f,v+(w-u)*f];i.lineJoin=i.lineCap="round",i.beginPath();const p=Math.max(1,Math.round(t.count/600));for(let R=0;R<t.count;R+=p)i.lineTo(...m(t.x[R],t.z[R]));i.closePath(),i.strokeStyle=`rgba(255,255,255,${o})`,i.lineWidth=Math.max(c,t.halfWidth*2*f),i.stroke(),i.strokeStyle=`rgba(255,255,255,${a})`,i.lineWidth=1.4,i.stroke();const[_,x]=m(t.x[e],t.z[e]),b=Math.atan2(t.tz[e],t.tx[e]);return i.save(),i.translate(_,x),i.rotate(b),i.fillStyle="#ffffff",i.fillRect(-1.5,-6,3,12),i.fillStyle="#ffc21a",i.beginPath(),i.moveTo(14,0),i.lineTo(7,-4),i.lineTo(7,4),i.closePath(),i.fill(),i.restore(),m}const To=240,Ao=172,qw=16;class $w{constructor(t,e,n){this.dpr=Math.min(2,window.devicePixelRatio||1),this.canvas=Yt("canvas","hud-panel hud-minimap"),this.canvas.width=To*this.dpr,this.canvas.height=Ao*this.dpr,t.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.ctx.scale(this.dpr,this.dpr),this.bg=document.createElement("canvas"),this.setPath(e,n)}setPath(t,e){this.bg.width=this.canvas.width,this.bg.height=this.canvas.height;const n=this.bg.getContext("2d");n.scale(this.dpr,this.dpr),this.map=xh(n,t,e,To,Ao,qw)}update(t,e=[]){const n=this.ctx;n.clearRect(0,0,To,Ao),n.drawImage(this.bg,0,0,To,Ao);for(const c of e){const[l,h]=this.map(c.x,c.z);n.fillStyle=c.color,n.beginPath(),n.arc(l,h,3.6,0,Math.PI*2),n.fill()}const[s,r]=this.map(t.x,t.z),o=bi(t.yaw),a=Math.atan2(o.z,o.x);n.save(),n.translate(s,r),n.rotate(a),n.shadowColor="rgba(255,194,26,0.9)",n.shadowBlur=10,n.fillStyle="#ffc21a",n.beginPath(),n.moveTo(7,0),n.lineTo(-5,4.5),n.lineTo(-3,0),n.lineTo(-5,-4.5),n.closePath(),n.fill(),n.restore()}}class Yw{constructor(t){this.el=Yt("div","hud-lights","<i></i>".repeat(5)),t.appendChild(this.el),this.dots=[...this.el.children],this._key=""}update(t){const e=`${t.state}|${t.lights}|${t.lightsMode}`;if(e===this._key)return;this._key=e;const n=t.lightsMode==="red"&&t.state!=="title";this.el.classList.toggle("is-visible",n||t.lightsMode==="go"),this.dots.forEach((s,r)=>{s.className=t.lightsMode==="go"?"is-go":n&&r<t.lights?"is-red":""})}}class v0{constructor(t){this.el=Yt("div","hud-toasts"),t.appendChild(this.el),this._timers=[]}show(t,{sub:e="",kind:n="",time:s=Aw}={}){this._timers.forEach(clearTimeout);const r=Yt("div",`toast${n?` is-${n}`:""}`);r.textContent=t,e&&(r.appendChild(Yt("small")).textContent=e),this.el.replaceChildren(r),this._timers=[setTimeout(()=>r.classList.add("is-out"),s*1e3),setTimeout(()=>r.remove(),s*1e3+500)]}clear(){this._timers.forEach(clearTimeout),this._timers=[],this.el.replaceChildren()}}class jw{constructor(t){this.el=Yt("div","hud-panel hud-standings",'<div class="st-pos"><b>–</b><span>/ –</span></div><ol></ol>'),t.appendChild(this.el),[this.pos,this.of]=this.el.querySelector(".st-pos").children,this.list=this.el.querySelector("ol"),this._key="",this._rows=[]}setVisible(t){this.el.hidden=!t}update(t,e){const n=this._visible(t.order),s=o=>t.order.indexOf(o),r=n.map(o=>`${o.code}${s(o)}`).join();r!==this._key&&(this._key=r,this._rows=n.map(o=>{const a=Yt("li",o.isPlayer?"is-player":"");return a.innerHTML=`<i>${s(o)+1}</i><em></em><span></span><b></b>`,a.children[1].style.background=`#${o.color.toString(16).padStart(6,"0")}`,a.children[2].textContent=o.code,a}),this.list.replaceChildren(...this._rows)),n.forEach((o,a)=>{const c=s(o);if(t.timed){$t(this._rows[a].children[3],o.bestLap===null?"NO TIME":c===0?In(o.bestLap):na(t.gap(o,e)));return}const l=c===0?o.finishTime!==null?"FINISH":`LAP ${Math.min(t.laps,Math.max(1,o.timer.lap))}`:na(t.gap(o,e));$t(this._rows[a].children[3],o.finishTime!==null&&c>0?`${l} ⚑`:l)}),$t(this.pos,`P${t.position(t.player)}`),$t(this.of,`/ ${t.order.length}`)}_visible(t){const e=typeof window<"u"&&window.innerHeight<520?6:t.length;if(t.length<=e)return t;const n=Math.max(0,t.findIndex(r=>r.isPlayer)),s=Math.min(Math.max(1,n-Math.floor((e-1)/2)),t.length-(e-1));return[t[0],...t.slice(s,s+e-1)]}}function Kw(i,t,e){const n=new Set;for(const[s,r]of i){let o=null,a=1/0;for(const c of t){if(!(c.right>c.left)||s<c.left-e||s>c.right+e||r<c.top-e||r>c.bottom+e)continue;const l=(s-(c.left+c.right)/2)**2+(r-(c.top+c.bottom)/2)**2;l<a&&([o,a]=[c.name,l])}o&&n.add(o)}return n}const af=[["left","touch-left","◀"],["right","touch-right","▶"],["brake","touch-brake","BRAKE"],["handbrake","touch-drift","DRIFT"],["throttle","touch-gas","GAS"]],Zw=[["pause","touch-pause","Ⅱ"],["camera","touch-camera","CAM"]],x0=()=>{var i;return typeof window<"u"&&(((i=window.matchMedia)==null?void 0:i.call(window,"(pointer: coarse)").matches)||"ontouchstart"in window)};class Jw{constructor(t,e){this.held=Object.fromEntries(af.map(([s])=>[s,!1])),this.points=[],this.el=Yt("div","touch"),t.appendChild(this.el),this.buttons=af.map(([s,r,o])=>({name:s,node:this._button(r,o)}));for(const[s,r,o]of Zw)this._button(r,o).addEventListener("pointerdown",a=>(a.preventDefault(),e.trigger(s)));if("ontouchstart"in window){const s=r=>this._set(Array.from(r.touches,o=>[o.clientX,o.clientY]));for(const r of["touchstart","touchmove","touchend","touchcancel"])window.addEventListener(r,s,{passive:!0})}else this._pointers();const n=()=>this.releaseAll();window.addEventListener("blur",n),window.addEventListener("pagehide",n),document.addEventListener("visibilitychange",()=>document.hidden&&n()),document.body.classList.add("is-touch"),e.touch=this}releaseAll(){this._set([])}_button(t,e){const n=Yt("button",`touch-btn ${t}`,e);return n.addEventListener("contextmenu",s=>s.preventDefault()),this.el.appendChild(n),n}_pointers(){const t=new Map,e=()=>this._set([...t.values()]);this.el.addEventListener("pointerdown",n=>(t.set(n.pointerId,[n.clientX,n.clientY]),e())),window.addEventListener("pointermove",n=>t.has(n.pointerId)&&(t.set(n.pointerId,[n.clientX,n.clientY]),e()));for(const n of["pointerup","pointercancel"])window.addEventListener(n,s=>t.delete(s.pointerId)&&e())}_set(t){this.points=t;const e=this.buttons.map(({name:s,node:r})=>{const o=r.getBoundingClientRect();return{name:s,left:o.left,top:o.top,right:o.right,bottom:o.bottom}}),n=Kw(t,e,d2.slop);for(const{name:s,node:r}of this.buttons)this.held[s]=n.has(s),r.classList.toggle("is-down",this.held[s])}}const Qw=i=>`#${i.toString(16).padStart(6,"0")}`;class tE{constructor(t,e){this.root=Yt("div","hud is-hidden"),document.body.appendChild(this.root),this.lap=new Bw(this.root),this.standings=new jw(this.root),this.speedo=new Vw(this.root),this.tyres=new Xw(this.root),this.minimap=null,this.lights=new Yw(this.root),this.toasts=new v0(this.root),this.root.appendChild(Yt("div","hud-hint","<kbd>SPACE</kbd> drift &nbsp; <kbd>C</kbd> camera &nbsp; <kbd>R</kbd> reset &nbsp; <kbd>ESC</kbd> pause")),x0()&&(this.touch=new Jw(this.root,e)),this.mode="race",this.laps=5,this.visible=!1,this._dots=[],this._minimapShown=!0,t.on("go",()=>this.toasts.show("GO!",{kind:"go",time:1.1})),t.on("session",n=>this.toasts.show("QUALIFYING",{sub:`${Math.round(n/60*10)/10} MIN · YOUR BEST LAP SETS YOUR GRID SLOT`,kind:"go",time:2.6})),t.on("flag",()=>this.toasts.show("CHEQUERED FLAG",{sub:"FINISH YOUR LAP",kind:"go",time:2})),t.on("lap",n=>{const s=this.mode!=="timeattack"&&this.mode!=="quali";if(s&&n.lap>=this.laps)return;const r=n.isBest?n.delta==null?"FIRST LAP ON THE BOARD":`NEW BEST  ${Ml(n.delta)}`:`LAP ${n.lap}  ${Ml(n.delta)}`,o=s&&n.lap===this.laps-1;this.toasts.show(o?"FINAL LAP":In(n.time),{sub:o?`${In(n.time)}  ·  ${r}`:r,kind:o?"go":n.isBest?"best":""})}),t.on("finish",()=>this.mode!=="quali"&&this.toasts.show("CHEQUERED FLAG",{kind:"go",time:1.6})),t.on("overtake",n=>this.toasts.show(`P${n}`,{sub:`UP TO ${ia(n)}`,kind:"info",time:1})),t.on("reset",()=>this.toasts.show("KART RESET",{kind:"info",time:1.2})),t.on("camera",n=>this.toasts.show(`CAMERA · ${n.toUpperCase()}`,{kind:"info",time:1.2})),t.on("mute",n=>this.toasts.show(n?"SOUND OFF":"SOUND ON",{kind:"info",time:1.2}))}setVisible(t){var e;this.visible=t,t||(e=this.touch)==null||e.releaseAll(),this.root.classList.toggle("is-hidden",!t),t&&this.resize()}clearToasts(){this.toasts.clear()}resize(){this._minimapShown=!!this.minimap&&this.minimap.canvas.offsetParent!==null}setTrack(t,e,n){this.laps=n,this.minimap?this.minimap.setPath(t,e):this.minimap=new $w(this.root,t,e)}setMode(t){this.mode=t,this.standings.setVisible(t!=="timeattack")}update(t,e,n){if(!this.visible)return;const s=this.mode!=="timeattack";this.lap.update(t),this.speedo.update(e.telemetry.speed,e.draft),this.tyres.update(e.telemetry.tyreTemp),s&&this.standings.update(n.field,n.session.clock);const r=this.mode==="online"?n.online.others:s?n.rivals:[];this._minimapShown&&this.minimap.update(e.state,this._rivalDots(r)),this.lights.update(t)}_rivalDots(t){const e=this._dots;return e.length=t.length,t.forEach((n,s)=>{const r=e[s]??(e[s]={x:0,z:0,body:-1,color:""});r.body!==n.profile.body&&([r.body,r.color]=[n.profile.body,Qw(n.profile.body)]),[r.x,r.z]=[n.kart.state.x,n.kart.state.z]}),e}}function eE(i,t,e){return{version:1,rounds:[...i],round:0,level:e,drivers:t.map(({code:n,name:s,color:r})=>({code:n,name:s,color:r,points:0,wins:0,podiums:0,finishes:[]})),results:[]}}const _h=i=>i.round>=i.rounds.length,nE=i=>i.rounds[Math.min(i.round,i.rounds.length-1)],_0=(i,t=!1)=>(Us.points[i-1]??0)+(t&&i<=Us.points.length?Us.fastestLap:0);function iE(i,t){const e=structuredClone(i);let n=null;for(const r of t)r.bestLap!=null&&(n===null||r.bestLap<n.bestLap)&&(n=r);const s={};return t.forEach((r,o)=>{const a=e.drivers.find(l=>l.code===r.code);if(!a)return;const c=_0(o+1,(n==null?void 0:n.code)===r.code);s[r.code]=c,a.points+=c,a.finishes.push(o+1),o===0&&a.wins++,o<3&&a.podiums++}),e.results.push({track:i.rounds[i.round],order:t.map(r=>r.code),fastest:(n==null?void 0:n.code)??null}),e.round++,{season:e,scored:s}}function M0(i){const t=(e,n)=>{for(let s=1;s<=12;s++){const r=n.finishes.filter(o=>o===s).length-e.finishes.filter(o=>o===s).length;if(r)return r}return 0};return[...i.drivers].sort((e,n)=>n.points-e.points||n.wins-e.wins||t(e,n)||e.name.localeCompare(n.name))}function Mh(i,t="YOU"){if(!i)return null;const e=M0(i),n=e.find(s=>s.code===t);return{round:i.round+1,of:i.rounds.length,position:e.indexOf(n)+1,points:(n==null?void 0:n.points)??0,done:_h(i)}}function sE(i=globalThis.localStorage){try{const t=JSON.parse((i==null?void 0:i.getItem(Us.key))??"null");return(t==null?void 0:t.version)===1&&Array.isArray(t.rounds)&&Array.isArray(t.drivers)?t:null}catch{return null}}function yh(i,t=globalThis.localStorage){try{i?t==null||t.setItem(Us.key,JSON.stringify(i)):t==null||t.removeItem(Us.key)}catch{}}const rE=["","VICTORY","SECOND PLACE","PODIUM","SOLID DRIVE","KEEP PUSHING","BACK OF THE FIELD"];class oE{constructor(t){this.el=Yt("div","screen screen-results",`<div class="res-card">
         <div class="title-kicker" data-ref="kicker">CHEQUERED FLAG</div>
         <h2 data-ref="place">–</h2>
         <div class="res-verdict" data-ref="verdict"></div>
         <table><thead><tr data-ref="head"></tr></thead>
           <tbody data-ref="rows"></tbody></table>
         <div class="res-actions" data-ref="quali" hidden>
           <button class="btn btn-primary" data-act="raceAgain">START THE RACE <kbd>ENTER</kbd></button>
           <button class="btn" data-act="quit">MENU <kbd>ESC</kbd></button>
         </div>
         <div class="res-actions" data-ref="champ" hidden>
           <button class="btn btn-primary" data-act="raceAgain">STANDINGS <kbd>ENTER</kbd></button>
           <button class="btn" data-act="quit">MENU <kbd>ESC</kbd></button>
         </div>
         <div class="res-actions" data-ref="solo">
           <button class="btn btn-primary" data-act="raceAgain">RACE AGAIN <kbd>ENTER</kbd></button>
           <button class="btn" data-act="nextRace">NEXT TRACK <kbd>N</kbd></button>
           <button class="btn" data-act="quit">MENU <kbd>ESC</kbd></button>
         </div>
         <div class="res-actions res-online" data-ref="online" hidden>
           <button class="btn btn-primary host-only" data-act="raceAgain">RACE AGAIN <kbd>ENTER</kbd></button>
           <button class="btn host-only" data-act="nextRace">NEXT TRACK <kbd>N</kbd></button>
           <div class="res-wait client-only">WAITING FOR THE HOST</div>
           <button class="btn" data-act="quit">LEAVE <kbd>ESC</kbd></button>
         </div>
       </div>`),document.body.appendChild(this.el),this.r=rr(this.el),this.el.inert=!0;for(const e of this.el.querySelectorAll("[data-act]"))e.addEventListener("click",()=>t(e.dataset.act));this._key=""}setOnline(t){this.role=t,this.r.solo.hidden=!!t,this.r.online.hidden=!t,this.r.quali.hidden=this.r.champ.hidden=!0,this.el.firstElementChild.classList.toggle("is-host",t==="host")}show(t){_i(this.el,t),this._key=""}update(t,e="race"){const n=t.player,s=t.position(n),r=t.order.map(l=>`${l.code}${l.finishTime}${l.dnf}${l.bestLap}`).join()+t.final+e;if(r===this._key)return;this._key=r,this.role||(this.r.solo.hidden=e==="quali"||e==="champ",this.r.quali.hidden=e!=="quali",this.r.champ.hidden=e!=="champ");const o=e==="quali"?["POS","DRIVER","BEST LAP","GAP"]:["POS","DRIVER","TIME","BEST LAP",...e==="champ"?["PTS"]:[]];if(this.r.head.innerHTML=o.map(l=>`<th>${l}</th>`).join(""),$t(this.r.kicker,e==="quali"?"QUALIFYING":"CHEQUERED FLAG"),e==="quali")return this._grid(t,s);for(const l of this.r.online.querySelectorAll(".host-only"))l.disabled=!t.final;$t(this.r.place,ia(s)),this.r.place.className=s<=3?`is-p${s}`:"",$t(this.r.verdict,rE[s]??"");const a=t.order[0];let c=null;for(const l of t.order)l.bestLap!=null&&(c===null||l.bestLap<c.bestLap)&&(c=l);this.r.rows.replaceChildren(...t.order.map((l,h)=>{const u=Yt("tr",l.isPlayer?"is-player":""),d=Math.max(1,t.laps-(l.lapsDone??0)),f=t.final?`+${d} LAP${d>1?"S":""}`:"RUNNING",g=l.dnf?"DNF":l.finishTime===null?f:h===0?In(l.finishTime):na(l.finishTime-a.finishTime),v=e==="champ"?`<td>${_0(h+1,l===c)||"–"}</td>`:"";u.innerHTML=`<td>${h+1}</td><td><em></em></td><td>${g}</td><td>${In(l.bestLap)}</td>${v}`;const m=u.children[1];return m.firstChild.style.background=`#${l.color.toString(16).padStart(6,"0")}`,m.append(l.name),u}))}_grid(t,e){const n=t.player;$t(this.r.place,n.bestLap==null?"NO TIME":`P${e}`),this.r.place.className=e<=3&&n.bestLap!=null?`is-p${e}`:"",$t(this.r.verdict,n.bestLap==null?"YOU START FROM THE BACK":e===1?"POLE POSITION":`${ia(e)} ON THE GRID`);const s=t.order[0];this.r.rows.replaceChildren(...t.order.map((r,o)=>{const a=Yt("tr",r.isPlayer?"is-player":""),c=r.bestLap==null?"NO TIME":o===0?"–":na(r.bestLap-s.bestLap);return a.innerHTML=`<td>${o+1}</td><td><em></em></td><td>${In(r.bestLap)}</td><td>${c}</td>`,a.children[1].firstChild.style.background=`#${r.color.toString(16).padStart(6,"0")}`,a.children[1].append(r.name),a}))}}const sa="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",kr=5,ya=12,y0="tbc-kart.name",qn=6,aE=1.8,cE=Object.entries(jn).map(([i,t])=>`<button data-level="${i}">${t.label}</button>`).join(""),lE=`
  <section class="lobby-panel lobby-choose" data-panel="choose">
    <h2>RACE FRIENDS</h2>
    <label class="lobby-name"><span>YOUR NAME</span>
      <input data-ref="name" maxlength="${ya*2}" autocomplete="nickname" spellcheck="false" enterkeyhint="go"></label>
    <div class="lobby-options">
      <div class="lobby-option"><b>HOST A RACE</b><small>GET A CODE TO SHARE</small>
        <button class="btn btn-primary" data-do="create">CREATE ROOM <kbd>ENTER</kbd></button></div>
      <div class="lobby-option"><b>JOIN A FRIEND</b><small>TYPE THE ${kr}-CHARACTER CODE</small>
        <div class="lobby-join">
          <input data-ref="codeInput" placeholder="CODE" autocomplete="off" autocapitalize="characters"
            spellcheck="false" enterkeyhint="join" aria-label="Room code">
          <button class="btn" data-do="join" data-ref="joinBtn">JOIN</button></div></div>
    </div>
    <div class="res-actions"><button class="btn" data-do="back">BACK <kbd>ESC</kbd></button></div>
  </section>`,hE=`
  <section class="lobby-panel lobby-status" data-panel="status">
    <div class="lobby-spinner" data-ref="spinner"></div>
    <h2 data-ref="statusTitle"></h2>
    <p data-ref="statusText"></p>
    <div class="res-actions">
      <button class="btn btn-primary" data-do="retry" data-ref="retry">TRY AGAIN <kbd>ENTER</kbd></button>
      <button class="btn" data-do="leave" data-ref="cancel">BACK <kbd>ESC</kbd></button></div>
  </section>`,uE=`
  <section class="lobby-panel lobby-room" data-panel="room">
    <div class="lobby-col">
      <div class="lobby-code"><small>ROOM CODE</small><b data-ref="roomCode"></b></div>
      <div class="lobby-share"><input data-ref="link" readonly aria-label="Invite link">
        <button class="btn" data-do="copy" data-ref="copy">COPY LINK</button></div>
      <div class="lobby-list-head"><span>DRIVERS</span><span data-ref="count"></span></div>
      <ol class="lobby-players" data-ref="players"></ol>
      <small class="lobby-ai" data-ref="aiNote"></small>
    </div>
    <div class="lobby-col">
      <div class="title-track lobby-track">
        <button class="tt-arrow host-only" data-do="prevTrack" aria-label="Previous track">◀</button>
        <canvas class="tt-map" data-ref="map"></canvas>
        <div class="tt-info"><small>TRACK</small><b data-ref="trackName"></b><span data-ref="trackFacts"></span></div>
        <button class="tt-arrow host-only" data-do="nextTrack" aria-label="Next track">▶</button>
      </div>
      <div class="title-level lobby-level"><span>RIVALS</span>${cE}</div>
      <button class="btn btn-primary lobby-start host-only" data-do="start" data-ref="start">START RACE <kbd>ENTER</kbd></button>
      <div class="lobby-wait client-only">WAITING FOR THE HOST TO START</div>
      <button class="btn lobby-leave" data-do="leave">LEAVE ROOM <kbd>ESC</kbd></button>
    </div>
  </section>`,dE=`<div class="lobby-card"><div class="title-kicker">ONLINE RACE</div>${lE}${hE}${uE}</div>`;function Sh(i){return[...String(i??"").normalize("NFC").replace(/\s+/g," ").replace(/[\u0000-\u001f\u007f-\u009f<>]/g,"").replace(/^ /,"")].slice(0,ya).join("")}function S0(i,t){return Sh(i).trim()||t}function b0(i=Math.random){return`Driver ${100+Math.floor(i()*900)}`}function w0(i){const t=String(i??""),e=t.match(/[?&]room=([A-Za-z0-9]+)/);return[...(e?e[1]:t).toUpperCase()].filter(s=>sa.includes(s)).slice(0,kr).join("")}const ko=i=>w0(i)===i&&i.length===kr;function fE(i,t){return`${i.origin}${i.pathname}?room=${t}`}function pE(i,t=Math.random){let e=null;try{e=i==null?void 0:i.getItem(y0)}catch{}return S0(e,b0(t))}function mE(i,t){try{i==null||i.setItem(y0,t)}catch{}}const cf=()=>typeof localStorage>"u"?null:localStorage;class gE{constructor(t){this.r=t,this.fallback=b0(),this.last=null,t.name.value=pE(cf()),t.name.addEventListener("input",()=>t.name.value=Sh(t.name.value)),t.codeInput.addEventListener("input",()=>this.setCode(t.codeInput.value))}setCode(t){const e=w0(t);this.r.codeInput.value!==e&&(this.r.codeInput.value=e),this.r.joinBtn.disabled=!ko(e)}get codeComplete(){return ko(this.r.codeInput.value)}submit(t,e){let n=this.r.codeInput.value;if(t==="retry")n=this.last?this.last.code:e,t=n?"join":"create";else if(t==="join"&&!ko(n))return this.r.codeInput.focus(),null;const s=S0(this.r.name.value,this.fallback);return this.r.name.value=s,mE(cf(),s),this.last=t==="join"?{code:n}:{},{action:t,code:n,name:s}}}const vE=[[12,31.6],[22,30.6],[31,27.3],[38.5,21.3],[43,12.8],[44,2.8],[41,-6.2],[36.8,-13.2],[34.6,-19.7],[34.2,-25.4],[32.38,-29.78],[28,-31.6],[23.62,-29.78],[21.8,-25.4],[21.8,-23.2],[19.98,-18.82],[15.6,-17],[8,-17.1],[-2,-17],[-12,-16.7],[-23,-15.5],[-32,-12.2],[-39,-5.7],[-43.5,3.8],[-41.8,12.8],[-34,18.8],[-26,21.8],[-18.5,27.1],[-10.5,27.2],[-3.5,25],[3.5,28.6]],xE={id:"tbc",name:"TBC Indoor",location:"Vancouver, Canada",inspiredBy:"TBC Indoor Racing — the home track",blurb:'The original hall layout: sweeper, the "ear" hairpin, a long back straight and a tight chicane.',laps:7,waypoints:vE,startIndex:0,samples:1e3,exempt:["radius","grid"]},_E=[[-66.76,30],[-68.99,18.41],[-69.58,9.64],[-69.39,3.15],[-68.91,-1.62],[-68.25,-5.18],[-66.58,-8.29],[-63.98,-10.6],[-60.7,-11.88],[-56.84,-12.42],[-51.64,-13.11],[-44.61,-14.05],[-35.09,-15.32],[-22.26,-17.03],[-10,-18.54],[-.96,-19.53],[5.75,-20.26],[10.72,-20.8],[14.58,-21.51],[17.95,-23.42],[20.42,-26.34],[21.74,-29.93],[21.75,-33.81],[20.51,-37.27],[18.96,-39.72],[18.17,-42.44],[18.36,-45.21],[19.49,-47.75],[21.44,-49.95],[24.07,-52.67],[26.48,-55.11],[29.18,-56.69],[32.31,-57.25],[35.39,-56.7],[38.13,-55.11],[40.13,-52.7],[41.59,-49.59],[42.93,-46.65],[43.92,-44.48],[44.84,-42.83],[46.25,-41.57],[47.96,-40.9],[49.8,-40.85],[51.59,-41.46],[53.01,-42.62],[53.96,-44.19],[54.42,-46.08],[54.92,-48.61],[55.54,-51.69],[56.03,-54.13],[56.77,-56.08],[58.13,-57.66],[60.01,-58.69],[62.07,-59],[64.61,-59],[67.49,-58.94],[70.19,-58.1],[72.4,-56.4],[73.89,-54.06],[74.49,-51.3],[74.5,-48.09],[74.31,-43.8],[73.31,-38.05],[70.67,-30.67],[64.91,-21.76],[54.43,-13.06],[41.28,-8.32],[28.49,-7.33],[18.91,-6.77],[11.82,-6.36],[6.58,-6.06],[2.69,-5.83],[-.2,-5.66],[-2.57,-5.1],[-4.6,-3.77],[-6.5,-1.75],[-8.35,.2],[-10.41,1.49],[-12.79,2],[-15.64,2],[-19.43,2],[-24.52,2],[-31.06,2],[-36.3,2],[-40.34,2.15],[-43.94,3.44],[-46.92,5.92],[-48.83,9.23],[-49.5,13.05],[-49.5,17.52],[-49.26,21.84],[-47.71,25.76],[-45.37,29.47],[-44.11,33.45],[-44,37.13],[-44.01,39.86],[-44.58,42.26],[-45.94,44.32],[-47.38,46.33],[-48.08,48.7],[-47.93,51.13],[-47.1,53.66],[-45.63,56.01],[-43.4,57.75],[-40.75,58.59],[-37.71,58.72],[-34.86,58.8],[-32.6,59.1],[-30.57,60.14],[-29.02,61.82],[-28.15,63.93],[-28.05,66.18],[-28.72,68.36],[-30.11,70.18],[-31.99,71.38],[-34.21,71.88],[-36.76,71.85],[-40.21,71.79],[-44.8,71.71],[-48.9,71.64],[-52.07,71.34],[-54.95,70.03],[-57.18,67.84],[-58.53,64.97],[-59.36,61.47],[-60.47,56.75],[-61.98,50.33],[-64,41.72]],ME={id:"monaco",name:"Monte Carlo",location:"Monaco",inspiredBy:"Circuit de Monaco",blurb:"Narrow streets, a walking-pace hairpin and a flat-out tunnel: touch the barriers and your race is over.",laps:3,waypoints:_E,startIndex:0,width:6},yE=[[18.14,38.1],[15.64,38.1],[-3.03,38.1],[-21.7,38.1],[-24.2,38.1],[-26.81,37.44],[-28.8,35.62],[-29.68,33.08],[-29.72,32.58],[-30.61,30.04],[-32.59,28.22],[-35.2,27.56],[-37.7,27.56],[-41.7,27.56],[-44.2,27.56],[-48.37,27.2],[-52.41,26.11],[-56.2,24.35],[-59.63,21.95],[-62.59,18.99],[-64.99,15.56],[-66.75,11.77],[-67.84,7.73],[-68.27,5.27],[-69.49,-1.63],[-69.92,-4.09],[-71.17,-6.92],[-73.58,-8.85],[-75.39,-9.7],[-77.32,-11.07],[-78.62,-13.05],[-79.6,-15.35],[-83.12,-23.63],[-84.09,-25.94],[-84.8,-29.08],[-84.36,-32.26],[-82.82,-35.09],[-80.39,-37.2],[-77.37,-38.32],[-74.91,-38.75],[-66.05,-40.31],[-63.59,-40.75],[-60.34,-40.69],[-57.36,-39.42],[-55.06,-37.13],[-53.66,-35.06],[-48.91,-28.01],[-44.16,-20.96],[-42.76,-18.89],[-41.2,-16.79],[-39.47,-14.83],[-37.73,-13.03],[-31.02,-6.07],[-24.3,.88],[-17.59,7.83],[-15.85,9.63],[-13.81,11.16],[-11.39,11.97],[-8.84,11.98],[-6.87,11.66],[-4.09,11.71],[-1.5,12.71],[.6,14.53],[1.86,16.08],[4.57,18.24],[7.94,19.05],[10.44,19.09],[25.58,19.36],[40.72,19.62],[55.86,19.89],[71,20.15],[73.5,20.19],[76.17,20.77],[78.41,22.33],[79.89,24.63],[80.38,27.31],[79.79,30.57],[78.2,33.47],[75.77,35.72],[72.75,37.08],[68.9,37.84],[64.98,38.1],[62.48,38.1],[47.7,38.1],[32.92,38.1]],SE={id:"monza",name:"Monza",location:"Italy",inspiredBy:"Autodromo Nazionale Monza",blurb:"Temple of speed: slipstream duels on two long straights, late braking into the Rettifilo and the Parabolica.",laps:5,waypoints:yE,startIndex:0,width:7},bE=[[-34.4,12.5],[-25.02,2.98],[-22.83,1.15],[-20.34,-.24],[-17.63,-1.13],[-14.8,-1.49],[-7.57,-1.71],[-4.64,-2.02],[-1.79,-2.75],[.92,-3.9],[3.44,-5.43],[8.03,-8.71],[10.32,-9.84],[12.85,-10.19],[15.37,-9.73],[17.61,-8.49],[19.35,-6.61],[20.4,-4.28],[21.23,-1.2],[22.51,1.15],[24.7,2.68],[27.35,3.06],[29.46,2.88],[32.14,1.94],[34.05,-.16],[34.74,-2.92],[34.72,-11.75],[34.47,-14.16],[33.73,-16.47],[32.55,-18.59],[30.97,-20.43],[29.05,-21.91],[19.08,-28.12],[9.1,-34.32],[-.88,-40.52],[-10.86,-46.73],[-13.58,-47.76],[-16.49,-47.67],[-19.15,-46.48],[-21.16,-44.36],[-22.21,-41.64],[-22.43,-40.36],[-23.28,-37.96],[-24.89,-35.99],[-27.07,-34.67],[-29.56,-34.15],[-32.09,-34.5],[-34.38,-35.68],[-36.12,-37.55],[-37.13,-39.9],[-37.3,-42.45],[-36.6,-44.91],[-31.62,-55.23],[-30.27,-57.4],[-28.5,-59.23],[-26.38,-60.65],[-24.01,-61.59],[-21.5,-62],[-10.16,-62.66],[1.19,-63.31],[12.53,-63.96],[23.87,-64.61],[26.72,-64.52],[29.5,-63.92],[32.14,-62.84],[34.55,-61.31],[36.64,-59.37],[38.36,-57.1],[39.65,-54.55],[40.46,-51.82],[42.45,-42.06],[44.43,-32.3],[45.19,-29.57],[46.33,-26.97],[47.98,-23.84],[49,-21.25],[49.45,-18.5],[49.31,-15.71],[48.85,-12.89],[48.72,-10.68],[49.05,-8.5],[49.82,-6.43],[50.67,-4.02],[50.92,-1.48],[50.54,1.04],[49.57,3.4],[48.05,5.45],[46.09,7.08],[45.25,7.62],[43.25,9.16],[41.53,11.01],[34.38,20.16],[27.23,29.32],[20.08,38.47],[12.93,47.63],[5.78,56.78],[3.8,58.78],[1.4,60.27],[-1.28,61.15],[-4.08,61.39],[-6.87,60.96],[-9.48,59.89],[-11.77,58.25],[-21.09,49.73],[-30.42,41.2],[-32.54,39.84],[-34.99,39.25],[-37.49,39.51],[-39.77,40.59],[-42.48,41.82],[-45.43,41.98],[-48.23,41.06],[-50.51,39.19],[-51.96,36.62],[-52.39,33.71],[-51.73,30.85],[-50.09,28.42],[-42.24,20.46]],wE={id:"silverstone",name:"Silverstone",location:"Great Britain",inspiredBy:"Silverstone Circuit",blurb:"Flat-out Copse, the Maggotts–Becketts snake and the long Hangar blast: fast, flowing, brave.",laps:3,waypoints:bE,startIndex:0},EE=[[-66.3,41.9],[-69.5,44.3],[-74.2,48],[-77.3,50.5],[-80.4,51.9],[-83.7,51.9],[-86.7,50.4],[-88.8,47.7],[-89.5,44.4],[-88.6,41.2],[-86.8,37.6],[-84.26,34.72],[-81.72,31.84],[-79.18,28.96],[-76.65,26.07],[-74.11,23.19],[-71.57,20.31],[-69.03,17.43],[-67.68,15.33],[-66.66,13.07],[-65.98,11.04],[-65.41,9.12],[-63.85,5.01],[-62.07,2.1],[-59.68,-.33],[-56.79,-2.16],[-52.71,-3.78],[-50.5,-4.56],[-48.05,-5.78],[-45.85,-7.4],[-44.14,-9.01],[-40.44,-12.78],[-36.9,-16.38],[-35.26,-17.9],[-33.49,-19.27],[-31.6,-20.46],[-29.6,-21.47],[-10.76,-29.93],[9.08,-38.84],[32.4,-49.3],[36,-51],[39.62,-52.71],[43.23,-54.42],[45.15,-55.27],[47.15,-55.86],[49.52,-55.94],[51.8,-55.32],[53.8,-54.05],[55.31,-52.75],[56.83,-51.45],[58.69,-50.36],[60.81,-49.99],[62.92,-50.4],[65.25,-51.31],[67.58,-52.22],[69.67,-52.75],[71.84,-52.77],[73.94,-52.28],[75.87,-51.3],[77.51,-49.88],[80.87,-46.18],[82.38,-44.49],[83.81,-42.73],[85.05,-40.83],[86,-38.77],[86.51,-36.57],[86.47,-34.31],[85.77,-32.16],[84.16,-30.18],[81.92,-28.97],[79.39,-28.72],[76.95,-29.45],[74.98,-31.07],[71.81,-34.94],[69.95,-36.6],[67.66,-37.61],[65.17,-37.86],[62.73,-37.33],[57.95,-35.48],[53.16,-33.62],[48.38,-31.77],[43.6,-29.91],[38.81,-28.06],[34.03,-26.2],[31.81,-24.95],[29.91,-23.26],[28.41,-21.21],[27.38,-18.89],[26.85,-16.4],[26.74,-13.22],[26.81,-11.22],[27.13,-7.87],[27.68,-5.7],[28.59,-3.65],[29.84,-1.79],[31.4,-.18],[33.21,1.15],[35.21,2.14],[38.42,3.17],[51.83,6.51],[56.2,7.6],[59.11,8.33],[61.72,9.28],[64.06,10.77],[65.8,12.9],[66.51,15.57],[66.33,18.34],[65.57,21.01],[64.84,23.67],[64.89,25.8],[65.69,27.79],[67.14,29.36],[69.51,30.77],[73.95,32.74],[78.39,34.72],[81.07,36.33],[82.67,38.14],[83.5,40.42],[83.44,42.84],[82.42,45.79],[81.32,48.03],[80.23,50.28],[78.48,53.08],[76.6,54.83],[74.27,55.89],[71.72,56.16],[68.46,55.64],[64.29,54.52],[60.66,53.24],[57.26,51.42],[54.18,49.1],[48.3,43.9],[38.6,32.4],[30.5,21.8],[21.3,15.8],[13,13.2],[8.53,12.29],[3.96,12.33],[-.49,13.31],[-4.65,15.19],[-8.78,17.59],[-12.91,20],[-17.03,22.4],[-21.16,24.81],[-25.29,27.21],[-29.41,29.62],[-31.13,30.57],[-32.95,31.29],[-34.89,31.55],[-36.84,31.3],[-38.66,30.6],[-40.39,29.66],[-42.13,28.67],[-44.73,27.47],[-46.57,27.3],[-48.36,27.76],[-50.75,29.36],[-54.9,32.7],[-59.05,36.05],[-63.2,39.4]],TE={id:"spa",name:"Spa",location:"Belgium",inspiredBy:"Circuit de Spa-Francorchamps",blurb:"The epic: flat out up Eau Rouge, slipstream down the Kemmel and brave Blanchimont into the Bus Stop.",laps:3,waypoints:EE,startIndex:0,width:6.5},AE=[[-36.08,28.7],[-34.25,33.93],[-29.71,46.92],[-25.17,59.92],[-24.19,61.74],[-22.68,63.16],[-20.8,64.03],[-18.75,64.27],[-16.72,63.85],[-14.93,62.82],[-12.06,60.48],[-10.4,59.48],[-8.53,58.97],[-6.58,58.99],[-4.72,59.55],[.22,61.81],[6.81,63.55],[13.6,62.98],[19.81,60.16],[24.71,55.42],[27.73,49.31],[31.96,35.02],[36.18,20.73],[40.41,6.45],[44.64,-7.84],[48.87,-22.12],[49.15,-24.28],[48.76,-26.42],[47.74,-28.34],[46.17,-29.85],[44.22,-30.8],[42.06,-31.11],[27.81,-30.92],[23.86,-30.29],[20.25,-28.57],[17.27,-25.9],[8.03,-14.88],[-1.2,-3.85],[-10.43,7.18],[-12.08,8.67],[-14.08,9.65],[-16.27,10.04],[-21.41,10.23],[-24.35,9.9],[-27.07,8.72],[-29.33,6.8],[-30.92,4.3],[-31.71,1.45],[-32.53,-5.27],[-32.47,-7.12],[-31.84,-8.86],[-30.72,-10.33],[-29.2,-11.39],[-27.43,-11.93],[-25.58,-11.91],[-23.83,-11.33],[-21.17,-9.96],[-19.44,-9.39],[-17.62,-9.35],[-15.87,-9.87],[-14.36,-10.88],[-13.22,-12.31],[-12.57,-14],[-12.45,-15.82],[-12.75,-18.3],[-13.96,-20.84],[-20.67,-27.46],[-26.94,-33.52],[-28.46,-35.51],[-29.35,-37.91],[-29.46,-40.01],[-28.92,-42],[-27.77,-43.72],[-26.15,-44.99],[-24.2,-45.69],[-22.14,-45.75],[-20.16,-45.16],[-18.47,-43.97],[-9.52,-35.3],[-6.44,-33.19],[-2.82,-32.24],[.9,-32.55],[4.3,-34.09],[7,-36.68],[12.24,-43.81],[17.49,-50.95],[18.5,-52.92],[18.85,-55.1],[18.5,-57.28],[17.48,-59.25],[15.91,-60.8],[13.92,-61.78],[10.17,-62.95],[2.04,-64.28],[-6.14,-63.36],[-16.24,-60.78],[-26.33,-58.2],[-32.75,-55.61],[-38.26,-51.42],[-42.46,-45.92],[-45.07,-39.5],[-48.72,-25.34],[-49.8,-15.14],[-47.87,-5.06],[-43.33,7.93],[-38.79,20.93]],RE={id:"interlagos",name:"Interlagos",location:"Brazil",inspiredBy:"Autódromo José Carlos Pace (Interlagos)",blurb:"Anticlockwise and old-school: a flat-out climb to the line, then a dive-bomb into the Senna S.",laps:3,waypoints:AE,startIndex:0},CE=[[-38,36.9],[-50.1,45.8],[-57.8,50],[-64.1,52.5],[-67.8,55],[-70.4,58.7],[-76.1,64.4],[-84.1,64.3],[-89.8,58.6],[-89.7,50.5],[-82.6,33.7],[-80.3,30.5],[-77,28.5],[-74.4,27.1],[-72.3,24.9],[-67.6,12.5],[-65.5,5.3],[-61.8,.3],[-56.5,-3],[-45.2,-8.3],[-41.9,-10.8],[-40.2,-14.5],[-40.3,-18.6],[-40.4,-23.2],[-38.7,-27.4],[-35.3,-30.4],[-22.4,-35.8],[-9,-41.3],[3.4,-45.1],[17,-47.8],[21.1,-47.6],[24.7,-45.7],[28.3,-43.8],[32.4,-43.6],[42.3,-46.1],[56.8,-52.9],[69.2,-58.7],[80,-63.9],[84.7,-64.4],[88.6,-61.6],[89.8,-57.1],[87.7,-52.8],[78.1,-43.7],[68.5,-34.5],[58.9,-25.4],[46.1,-14.9],[29.9,-3.2],[13.7,8.6],[2.3,16.8],[-1.8,18.6],[-6.4,18.5],[-10.9,18.4],[-15.1,20.2],[-27.7,29.4]],PE={id:"montreal",name:"Montréal",location:"Canada",inspiredBy:"Circuit Gilles Villeneuve",blurb:"Island blast: long straights, late braking into the hairpin and chicanes — and the Wall of Champions.",laps:4,waypoints:CE,startIndex:0,width:6.5},LE=[[-54.29,37.6],[-52.51,39.21],[-42.7,48.05],[-32.9,56.9],[-31.12,58.51],[-29.16,59.68],[-26.92,60.05],[-24.69,59.55],[-22.82,58.26],[-21.56,56.36],[-21.1,54.13],[-21.5,51.88],[-22.37,49.65],[-25.55,41.43],[-26.42,39.19],[-27,37.21],[-27.23,35.16],[-27.1,33.1],[-26.62,31.1],[-25.81,29.2],[-24.69,27.47],[-23.28,25.96],[-21.5,24.35],[-14.52,18.03],[-12.74,16.42],[-11.34,14.91],[-10.22,13.19],[-9.4,11.31],[-8.76,9.37],[-8.12,7.44],[-7.23,5.6],[-5.91,4.04],[-4.23,2.87],[-2.39,1.91],[-.62,.7],[.81,-.9],[1.82,-2.79],[2.36,-4.87],[2.58,-6.47],[2.79,-8.07],[3.01,-9.68],[3.61,-11.99],[4.74,-14.1],[6.34,-15.87],[8.32,-17.22],[10.56,-18.06],[12.93,-18.34],[15.31,-18.05],[17.55,-17.21],[19.51,-16.18],[21.48,-15.16],[23.64,-14.4],[25.93,-14.29],[28.15,-14.83],[30.14,-15.97],[31.71,-17.64],[32.98,-19.44],[34.25,-21.23],[35.72,-22.84],[37.56,-24.02],[39.63,-24.69],[41.81,-24.81],[43.95,-24.37],[45.91,-23.41],[47.55,-21.97],[48.48,-20.93],[49.41,-19.88],[51.22,-18.39],[53.41,-17.53],[55.76,-17.39],[58.03,-17.99],[60.1,-18.89],[62.17,-19.8],[64.24,-20.71],[66.29,-21.77],[68.18,-23.08],[69.9,-24.62],[71.4,-26.37],[72.84,-28.28],[81.03,-39.15],[89.21,-50.02],[90.66,-51.94],[91.69,-53.97],[91.95,-56.24],[91.42,-58.46],[90.15,-60.35],[88.31,-61.69],[86.11,-62.32],[83.84,-62.14],[81.51,-61.54],[67.66,-57.96],[53.8,-54.37],[39.95,-50.79],[26.09,-47.2],[12.24,-43.62],[-1.62,-40.04],[-15.47,-36.45],[-17.8,-35.85],[-19.82,-34.9],[-21.36,-33.26],[-22.18,-31.18],[-22.19,-28.94],[-21.38,-26.86],[-20.1,-24.82],[-16,-18.27],[-14.72,-16.24],[-13.83,-14.09],[-13.69,-11.77],[-14.32,-9.54],[-15.64,-7.63],[-17.52,-6.26],[-19.74,-5.58],[-21.69,-5.61],[-23.53,-6.22],[-25.11,-7.34],[-26.29,-8.88],[-27.45,-10.98],[-31.55,-18.38],[-32.71,-20.48],[-34.22,-22.28],[-36.3,-23.35],[-38.64,-23.54],[-39.29,-23.47],[-41.47,-22.78],[-43.23,-21.33],[-44.32,-19.32],[-44.59,-17.05],[-43.98,-14.85],[-42.92,-12.7],[-37.98,-2.72],[-36.91,-.57],[-36.12,1.65],[-35.88,3.99],[-36.18,6.32],[-37.02,8.52],[-37.92,10.23],[-39.22,12.13],[-40.92,13.69],[-42.93,14.81],[-45.15,15.45],[-47.45,15.56],[-49.15,15.44],[-51.42,15.02],[-53.53,14.09],[-55.37,12.71],[-56.84,10.94],[-57.87,8.88],[-58.69,6.63],[-60.77,.92],[-61.59,-1.34],[-62.58,-3.29],[-64.01,-4.94],[-65.79,-6.2],[-67.83,-6.99],[-70,-7.26],[-72.17,-7.01],[-74.21,-6.24],[-76.34,-5.13],[-81.26,-2.56],[-83.39,-1.45],[-85.18,-.11],[-86.46,1.72],[-87.09,3.87],[-87.02,6.1],[-86.25,8.2],[-84.85,9.94],[-83.07,11.55],[-74.07,19.7],[-65.07,27.84],[-56.07,35.99]],IE={id:"austin",name:"Austin",location:"United States",inspiredBy:"Circuit of the Americas",blurb:"Storm uphill into the Turn 1 hairpin, snake through the esses, then draft down the huge back straight.",laps:3,waypoints:LE,startIndex:0},DE=[[20.48,30.58],[17.4,31.44],[7.98,34.07],[-1.44,36.69],[-4.53,37.55],[-7.41,37.87],[-10.25,37.25],[-12.74,35.76],[-14.63,33.56],[-16.29,30.82],[-22.77,20.19],[-29.24,9.55],[-35.71,-1.09],[-42.18,-11.73],[-43.84,-14.46],[-45.07,-16.35],[-46.39,-18.16],[-47.82,-19.9],[-49.38,-21.71],[-50.95,-23.51],[-52.56,-25.89],[-53.56,-28.59],[-53.89,-31.44],[-53.53,-34.29],[-52.51,-36.37],[-50.73,-37.84],[-48.5,-38.45],[-47.24,-38.52],[-44.96,-38.58],[-42.67,-38.51],[-40.39,-38.31],[-37.22,-37.94],[-23.84,-36.39],[-10.46,-34.83],[2.91,-33.27],[6.09,-32.9],[8.78,-32.09],[11.02,-30.41],[12.54,-28.05],[13.16,-25.31],[12.79,-22.53],[11.49,-20.05],[8.82,-17.52],[5.9,-16.34],[2.74,-16.24],[-.42,-16.71],[-8.59,-17.91],[-11.75,-18.37],[-14.93,-18.33],[-17.94,-17.29],[-20.47,-15.36],[-22.26,-12.73],[-23.13,-9.67],[-23.01,-6.49],[-21.89,-3.52],[-20.42,-.96],[-18.96,1.6],[-17.5,4.16],[-15.5,6.47],[-12.78,7.87],[-9.74,8.15],[-6.81,7.26],[-4.43,5.34],[-3.77,4.55],[-2.16,2.89],[-.32,1.48],[1.69,.36],[4.01,-.73],[6.32,-1.81],[8.4,-2.61],[10.58,-3.12],[12.8,-3.31],[16,-3.37],[30.05,-3.64],[44.1,-3.9],[47.3,-3.96],[50.13,-3.65],[52.79,-2.61],[55.09,-.93],[56.89,1.29],[58.05,3.9],[58.9,6.76],[59.76,9.63],[60.15,12.62],[59.59,15.57],[58.13,18.2],[55.93,20.25],[53.19,21.5],[50.11,22.36],[36.84,26.04],[23.56,29.72]],NE={id:"spielberg",name:"Spielberg",location:"Austria",inspiredBy:"Red Bull Ring",blurb:"Short and punchy: three big straights, three big stops, and the Remus hairpin begging for a late lunge.",laps:5,waypoints:DE,startIndex:0},UE=[[76.94,-14],[75.32,-27.15],[73.7,-40.29],[73,-42.53],[71.56,-44.37],[69.55,-45.58],[67.25,-46],[66.64,-46],[64.44,-46.36],[62.46,-47.39],[60.91,-48.99],[58.03,-53.1],[56.53,-54.6],[54.6,-55.48],[52.48,-55.63],[50.15,-54.94],[48.36,-53.46],[47.26,-51.43],[47.02,-49.12],[47.76,-40.71],[48.18,-38.04],[48.96,-35.45],[52.97,-24.76],[53.79,-21.95],[54.2,-19.06],[54.47,-14.92],[54.23,-12.57],[53.22,-10.43],[51.55,-8.75],[49.43,-7.73],[47.08,-7.47],[30.41,-8.44],[13.75,-9.42],[11.43,-9.69],[9.16,-10.23],[6.97,-11.04],[4.88,-12.09],[-7.36,-19.19],[-19.61,-26.3],[-22.03,-27.12],[-24.58,-26.95],[-26.86,-25.8],[-28.53,-23.87],[-31.58,-18.46],[-33.13,-16.66],[-35.27,-15.61],[-37.64,-15.46],[-39.88,-16.25],[-49.99,-22.29],[-52.62,-23.21],[-55.4,-23.04],[-57.89,-21.79],[-59.7,-19.66],[-65.83,-8.57],[-71.96,2.52],[-78.09,13.61],[-78.94,15.63],[-79.32,17.78],[-79.46,19.89],[-79.01,22.62],[-77.38,24.85],[-74.93,26.12],[-73.64,26.44],[-71.54,27.43],[-69.97,29.13],[-69.17,31.3],[-68.68,34.35],[-67.81,37.11],[-66.18,39.5],[-59.6,46.7],[-57.71,48.13],[-55.43,48.79],[-53.07,48.58],[-50.94,47.55],[-49.33,45.82],[-48.43,43.63],[-45.6,29.87],[-42.77,16.11],[-39.94,2.35],[-38.99,.13],[-37.24,-1.53],[-34.97,-2.37],[-32.55,-2.24],[-30.38,-1.17],[-17.14,9.14],[-14.87,10.53],[-12.36,11.38],[-9.21,12.08],[-7.15,12.97],[-5.55,14.55],[-4.65,16.6],[-3.5,21.62],[-2.42,23.93],[-.47,25.58],[1.98,26.27],[16.7,27.18],[19.52,26.66],[21.78,24.89],[22.97,22.28],[23.53,19.25],[24.72,16.63],[26.99,14.86],[29.83,14.36],[34.1,14.64],[36.22,15.18],[38.01,16.45],[39.22,18.27],[39.7,20.4],[39.8,22.98],[40.29,25.14],[41.53,26.98],[43.36,28.24],[45.52,28.75],[57.11,29.28],[68.7,29.8],[71.3,29.49],[73.66,28.36],[75.53,26.52],[79.14,21.55],[80.42,18.85],[80.61,15.87],[78.78,.93]],OE={id:"singapore",name:"Marina Bay",location:"Singapore",inspiredBy:"Marina Bay Street Circuit",blurb:"Night street fight: blocky 90° corners, the Anderson Bridge hairpin and a dash under the floating grandstand.",laps:3,waypoints:UE,startIndex:0},lf=[xE,ME,SE,wE,TE,RE,PE,IE,NE,OE],FE=i=>{const t=ul[i.id];return t?{...i,name:t.name,location:t.system,blurb:t.blurb}:i},kE=oe?lf.map(FE):lf,Ue=kE.filter(i=>Array.isArray(i.waypoints)),or=i=>Ue.find(t=>t.id===i)??Ue[0],hf=(i,t)=>i*1048576+t;class zE{constructor(t,{samples:e,spacing:n=.25,width:s,spline:r="centripetal"}){const o=t.map(([u,d])=>new A(u,0,d)),a=new da(o,!0,r);this.length=a.getLength();const c=e??Math.max(200,Math.round(this.length/n));this.count=c,this.spacing=this.length/c,this.halfWidth=s/2,[this.x,this.z]=[new Float32Array(c),new Float32Array(c)],[this.tx,this.tz]=[new Float32Array(c),new Float32Array(c)],this.curvature=new Float32Array(c);const[l,h]=[new A,new A];for(let u=0;u<c;u++){a.getPointAt(u/c,l),a.getTangentAt(u/c,h);const d=Math.hypot(h.x,h.z)||1;[this.x[u],this.z[u],this.tx[u],this.tz[u]]=[l.x,l.z,h.x/d,h.z/d]}for(let u=0;u<c;u++){const d=this.wrap(u-3),f=this.wrap(u+3),g=this.tx[d]*this.tz[f]-this.tz[d]*this.tx[f];this.curvature[u]=Math.asin(Math.max(-1,Math.min(1,g)))/(6*this.spacing)}}wrap(t){return(t%this.count+this.count)%this.count}offset(t,e,n={}){return n.x=this.x[t]-this.tz[t]*e,n.z=this.z[t]+this.tx[t]*e,n}lateral(t,e,n){return(t-this.x[n])*-this.tz[n]+(e-this.z[n])*this.tx[n]}nearest(t,e,n=-1,s=80){let r=-1,o=1/0;const a=(c,l)=>{for(let h=c;h<=l;h++){const u=this.wrap(h),d=(this.x[u]-t)**2+(this.z[u]-e)**2;d<o&&([r,o]=[u,d])}};return n>=0&&a(n-s,n+s),(r<0||o>(this.halfWidth*3)**2)&&a(0,this.count-1),r}within(t,e,n){if(!(n>0))return!1;const s=this._cells(n),[r,o]=[Math.floor(t/n),Math.floor(e/n)],a=n*n;for(let c=-1;c<=1;c++)for(let l=-1;l<=1;l++){const h=s.get(hf(r+c,o+l));if(h){for(const u of h)if((this.x[u]-t)**2+(this.z[u]-e)**2<a)return!0}}return!1}_cells(t){this._grids??(this._grids=new Map);let e=this._grids.get(t);if(!e){e=new Map;for(let n=0;n<this.count;n++){const s=hf(Math.floor(this.x[n]/t),Math.floor(this.z[n]/t)),r=e.get(s);r?r.push(n):e.set(s,[n])}this._grids.set(t,e)}return e}heading(t){return Math.atan2(-this.tx[t],-this.tz[t])}}const BE=1e-9;function HE(i,t,e,n,s,r,o,a){const c=e-i,l=n-t,h=o-s,u=a-r,d=c*u-l*h;if(Math.abs(d)<BE)return null;const f=((s-i)*u-(r-t)*h)/d,g=((s-i)*l-(r-t)*c)/d;return f<0||f>1||g<0||g>1?null:{x:i+c*f,z:t+l*f}}function VE(i,t){const e=i.length,n=[];let s=0;for(;s<e;){const r=i[s],o=i[(s+1)%e];n.push(r);let a=!1;for(let c=s+2;c<Math.min(s+t,e-1);c++){const l=i[c],h=i[(c+1)%e],u=HE(r.x,r.z,o.x,o.z,l.x,l.z,h.x,h.z);if(u){n.push({...u,i:r.i}),s=c+1,a=!0;break}}a||s++}return n}function E0(i,t,e,n=90){const s=[];for(let c=0;c<i.count;c++)s.push({...i.offset(c,t),i:c});const r=VE(s,n),o=[];let a=[];for(const c of r)i.within(c.x,c.z,e)?a.length&&(o.push(a),a=[]):a.push(c);return a.length&&o.push(a),o.length===1&&o[0].length===r.length?o[0].closed=!0:o.length>1&&o[0][0]===r[0]&&a.length&&a.at(-1)===r.at(-1)&&(o[0]=o.pop().concat(o[0])),o}const T0=i=>i.halfWidth+.35;function A0(i){return[-1,1].flatMap(t=>E0(i,t*(i.halfWidth+Ma),T0(i)))}function R0(i){const t=i.halfWidth+Ma+Ji/2;return[-1,1].flatMap(e=>E0(i,e*t,T0(i)))}function C0(i,t=0){let e=1/0,n=-1/0,s=1/0,r=-1/0;for(const o of i)for(const a of o)e=Math.min(e,a.x),n=Math.max(n,a.x),s=Math.min(s,a.z),r=Math.max(r,a.z);return e-=t,n+=t,s-=t,r+=t,{minX:e,maxX:n,minZ:s,maxZ:r,width:n-e,depth:r-s,cx:(e+n)/2,cz:(s+r)/2}}function P0(i,t=.5){const e=[{x:i.minX+t,z:i.minZ+t},{x:i.maxX-t,z:i.minZ+t},{x:i.maxX-t,z:i.maxZ-t},{x:i.minX+t,z:i.maxZ-t}];return e.closed=!0,e}function yl(i,t,e){const n=fh+Math.floor(e/2)*Ln.rowGap+e%2*(Ln.rowGap/2),s=i.wrap(t-Math.round(n/i.spacing)),r=i.offset(s,(e%2?1:-1)*Ln.lateral);return{x:r.x,z:r.z,yaw:i.heading(s),i:s}}const bh=i=>new zE(i.waypoints,{samples:i.samples,spacing:aw,width:i.width??lw,spline:cw}),Ro=[168,112],Uc=new Map;function GE(i){if(!Uc.has(i.id)){const t=bh(i);Uc.set(i.id,{path:t,startIndex:t.nearest(...i.waypoints[i.startIndex])})}return Uc.get(i.id)}function WE(i,t,e,n){const s=or(typeof n=="object"&&n?n.id:n),{path:r,startIndex:o}=GE(s),a=Math.min(2,window.devicePixelRatio||1);i.width=Ro[0]*a,i.height=Ro[1]*a;const c=i.getContext("2d");c.scale(a,a),xh(c,r,o,Ro[0],Ro[1],12,{band:.22,line:.9,minBand:5}),$t(t,s.name.toUpperCase()),$t(e,`${s.location.toUpperCase()} · ${Math.round(r.length)} M · ${s.laps} LAPS`)}async function XE(i,t){try{return await navigator.clipboard.writeText(i),"copied"}catch{}t.focus(),t.select(),t.setSelectionRange(0,i.length);try{if(document.execCommand("copy"))return"copied"}catch{}return"selected"}class qE{constructor(t,e,n){this.r=e,this.levels=[...t.querySelectorAll(".lobby-room [data-level]")];for(const s of this.levels)s.addEventListener("click",()=>n(s.dataset.level));[this.rowsKey,this.track,this.copyTimer]=["",null,0]}render(t,e){var a;const n=this.r;$t(n.roomCode,t.code);const s=t.code?fE(window.location,t.code):"";n.link.value!==s&&(n.link.value=s),$t(n.count,t.count),$t(n.aiNote,t.aiNote),n.start.disabled=!t.canStart;for(const c of this.levels)c.classList.toggle("is-selected",c.dataset.level===e.level),c.disabled=!t.isHost;const r=typeof e.track=="object"?(a=e.track)==null?void 0:a.id:e.track;r!==this.track&&(this.track=r,WE(n.map,n.trackName,n.trackFacts,r));const o=JSON.stringify(t.rows);o!==this.rowsKey&&(this.rowsKey=o,n.players.replaceChildren(...t.rows.map($E)))}async copy(){const t=this.r,e=await XE(t.link.value,t.link);t.copy.textContent=e==="copied"?"COPIED ✓":"SELECTED",clearTimeout(this.copyTimer),this.copyTimer=setTimeout(()=>t.copy.textContent="COPY LINK",aE*1e3)}}function $E(i){const t=Yt("li",i.ai?"is-ai":i.you?"is-you":""),e=Yt("em");i.ai||(e.style.background=i.color);const n=Yt("span","lp-num");n.textContent=i.ai?"":`#${i.number}`;const s=Yt("span","lp-name");s.textContent=i.name,i.host&&s.append(Yt("i","lp-tag lp-host","HOST")),i.you&&s.append(Yt("i","lp-tag lp-you","YOU"));const r=Yt("span","lp-code");return r.textContent=i.ai?"AI":i.code,t.append(e,n,s,r),t}const YE={"not-found":{title:"ROOM NOT FOUND",text:"No room with that code is open. Check the code, or ask the host for the link.",retry:!0},full:{title:"ROOM FULL",text:`That room already has ${qn} drivers.`,retry:!0},version:{title:"VERSION MISMATCH",text:"You and the host are running different versions. Both reload the page, then try again.",retry:!1},network:{title:"CONNECTION FAILED",text:"Couldn't reach the online service. Check your connection and try again.",retry:!0},timeout:{title:"NO ANSWER",text:"The room didn't answer in time. Check your connection and try again.",retry:!0},taken:{title:"CODE TAKEN",text:"That room code is already in use. Try again for a fresh one.",retry:!0},racing:{title:"RACE IN PROGRESS",text:"That room is mid-race. Join again when it's back in the lobby.",retry:!0},closed:{title:"HOST LEFT",text:"The host closed the room.",retry:!1},lost:{title:"CONNECTION LOST",text:"Lost touch with the host. The room may still be open: try joining again.",retry:!0},offline:{title:"YOU'RE OFFLINE",text:"Online racing needs an internet connection. Reconnect, then try again.",retry:!0}},jE={title:"SOMETHING WENT WRONG",text:"The connection failed. Try again.",retry:!0};function KE(i){const t=typeof i=="string"?i:i==null?void 0:i.reason,e=YE[t]??jE,n=typeof i=="object"?i==null?void 0:i.message:null;return{...e,text:n||e.text}}function ZE(i=[],t=null){const e=i.slice(0,qn).map(n=>({id:n.id,name:n.name,code:n.code??"",number:n.number??"",color:JE(n.livery),host:!!n.host,you:n.id===t,ai:!1}));for(;e.length<qn;)e.push({id:`ai${e.length}`,name:"AI RIVAL",ai:!0});return e}function JE(i){const t=typeof i=="object"&&i!==null?i.body:i;return typeof t=="number"?`#${t.toString(16).padStart(6,"0")}`:typeof t=="string"&&t?t:"#9aa3b2"}const uf=(i,t)=>`${i} ${t}${i===1?"":"S"}`;function QE(i){var r;const t=i.phase??"choose",e=Math.min(((r=i.players)==null?void 0:r.length)??0,qn),n=qn-e,s={title:i.room&&!i.isHost?`JOINING ${i.room}`:"CREATING ROOM",text:"Connecting…",retry:!1};return{panel:t==="connecting"||t==="error"?"status":t,status:t==="error"?{...KE(i.error),busy:!1}:{...s,busy:!0},code:i.room??"",rows:ZE(i.players,i.you),count:`${e} / ${uf(qn,"DRIVER")}`,aiNote:n?`AI FILLS THE ${uf(n,"EMPTY SLOT")}`:"FULL GRID",isHost:!!i.isHost,canStart:!!i.isHost&&e>=1}}function tT(i,{focus:t,codeComplete:e,isHost:n,canStart:s,canRetry:r}={}){return i==="choose"?t==="code"?e?"join":null:t==="name"?"create":e?"join":"create":i==="error"?r?"retry":"leave":i==="room"&&n&&s?"start":null}const eT=i=>i==="choose"?"back":"leave";function nT(i){return t=>{if(!i.visible||(t.stopPropagation(),t.repeat||t.isComposing))return;const e=t.target;if(t.key==="Escape")t.preventDefault(),i.do(eT(i.state.phase));else if(t.key==="Enter"&&(e==null?void 0:e.tagName)!=="BUTTON"){t.preventDefault();const n=i.r,s=tT(i.state.phase,{focus:e===n.name?"name":e===n.codeInput?"code":null,codeComplete:ko(n.codeInput.value),isHost:i.view.isHost,canStart:i.view.canStart,canRetry:i.view.status.retry});s&&i.do(s)}}}class iT{constructor(t={}){this.on=t,this.el=Yt("div","screen screen-lobby",dE),document.body.appendChild(this.el),_i(this.el,!1),this.visible=!1,this.r=rr(this.el),this.panels=[...this.el.querySelectorAll("[data-panel]")],this.choose=new gE(this.r),this.room=new qE(this.el,this.r,e=>{var n,s;return(s=(n=this.on).onLevel)==null?void 0:s.call(n,e)});for(const e of this.el.querySelectorAll("[data-do]"))e.addEventListener("click",()=>this.do(e.dataset.do));window.addEventListener("keydown",nT(this),!0),this.render({phase:"choose"})}bind(t){this.on={...this.on,...t}}open(t=""){this.choose.setCode(t),this.render({phase:"choose"}),this.show(!0),x0()||this.r.name.focus()}show(t){this.visible=t,_i(this.el,t),!t&&this.el.contains(document.activeElement)&&document.activeElement.blur()}render(t){this.state=t;const e=this.view=QE(t);for(const r of this.panels)r.hidden=r.dataset.panel!==e.panel;const n=this.el.firstElementChild;n.classList.toggle("is-host",e.isHost),n.classList.toggle("is-room",e.panel==="room");const{r:s}=this;s.statusTitle.textContent=e.status.title,s.statusText.textContent=e.status.text,s.spinner.hidden=!e.status.busy,s.retry.hidden=!e.status.retry,s.cancel.firstChild.textContent=e.status.busy?"CANCEL ":"BACK ",e.panel==="room"&&this.room.render(e,t)}do(t){var n,s,r,o,a;if(t==="create"||t==="join"||t==="retry"){const c=this.choose.submit(t,this.state.room);(c==null?void 0:c.action)==="create"?(s=(n=this.on).onCreate)==null||s.call(n,c.name):c&&((o=(r=this.on).onJoin)==null||o.call(r,c.code,c.name));return}const e={start:()=>{var c,l;return this.view.canStart&&((l=(c=this.on).onStart)==null?void 0:l.call(c))},leave:()=>{var c,l;return(l=(c=this.on).onLeave)==null?void 0:l.call(c)},back:()=>{var c,l;return(l=(c=this.on).onBack)==null?void 0:l.call(c)},prevTrack:()=>{var c,l;return(l=(c=this.on).onTrack)==null?void 0:l.call(c,-1)},nextTrack:()=>{var c,l;return(l=(c=this.on).onTrack)==null?void 0:l.call(c,1)},copy:()=>this.room.copy()};(a=e[t])==null||a.call(e)}}class sT{constructor(t){this.el=Yt("div","screen screen-online-pause",`<div class="op-card">
         <div class="title-kicker op-kicker">ONLINE RACE</div>
         <p>THE RACE GOES ON WITHOUT YOU</p>
         <div class="res-actions">
           <button class="btn btn-primary" data-act="pause">RESUME <kbd>ESC</kbd></button>
           <button class="btn" data-act="quit">LEAVE RACE <kbd>Q</kbd></button>
         </div>
       </div>`),document.body.appendChild(this.el),this.show(!1);for(const e of this.el.querySelectorAll("[data-act]"))e.addEventListener("click",()=>t(e.dataset.act))}show(t){this.visible=t,_i(this.el,t)}}class rT{constructor(t,e){this.el=Yt("div","title-level title-gfx",`<span>GRAPHICS</span>${Object.entries(Rr).map(([n,s])=>`<button data-gfx="${n}" class="${n===Ns?"is-selected":""}">${s.label}</button>`).join("")}<kbd>G</kbd>`),t.insertBefore(this.el,e);for(const n of this.el.querySelectorAll("[data-gfx]"))n.addEventListener("click",()=>this.pick(n.dataset.gfx))}cycle(){const t=Object.keys(Rr);this.pick(t[(t.indexOf(Ns)+1)%t.length])}pick(t){if(t===Ns)return;try{localStorage.setItem(Ap,t)}catch{}const e=new URL(window.location.href);e.searchParams.set("gfx",t),window.location.replace(e.toString())}}const oT=i=>`#${i.toString(16).padStart(6,"0")}`;class aT{constructor(t){this.el=Yt("div","screen screen-results screen-season",`<div class="res-card">
         <div class="title-kicker" data-ref="kicker">CHAMPIONSHIP</div>
         <h2 data-ref="place">–</h2>
         <div class="res-verdict" data-ref="verdict"></div>
         <table><thead><tr><th>POS</th><th>DRIVER</th><th>ROUND</th><th>PTS</th><th>WINS</th></tr></thead>
           <tbody data-ref="rows"></tbody></table>
         <div class="res-actions">
           <button class="btn btn-primary" data-act="raceAgain" data-ref="next">NEXT ROUND <kbd>ENTER</kbd></button>
           <button class="btn" data-act="nextRace" data-ref="fresh">NEW SEASON <kbd>N</kbd></button>
           <button class="btn" data-act="quit">MENU <kbd>ESC</kbd></button>
         </div>
       </div>`),document.body.appendChild(this.el),this.r=rr(this.el),this.el.inert=!0,this.visible=!1;for(const e of this.el.querySelectorAll("[data-act]"))e.addEventListener("click",()=>t(e.dataset.act))}show(t,e=null,n={},s=[]){var u;if(this.visible=t,_i(this.el,t),!t||!e)return;const r=_h(e),o=M0(e),a=o.findIndex(d=>d.code==="YOU")+1,c=o[0],l=o[a-1];$t(this.r.kicker,r?"CHAMPIONSHIP · FINAL STANDINGS":`CHAMPIONSHIP · AFTER ROUND ${e.round} / ${e.rounds.length}`),$t(this.r.place,r&&a===1?"CHAMPION":ia(a)),this.r.place.className=a<=3?`is-p${a}`:"";const h=c.points-l.points;$t(this.r.verdict,a===1?r?"YOU ARE THE CHAMPION":`LEADING BY ${l.points-(((u=o[1])==null?void 0:u.points)??0)} PTS`:`${h} PTS BEHIND ${c.name.toUpperCase()}`),$t(this.r.next,""),this.r.next.append(r?"NEW SEASON ":`NEXT · ${(s[e.round]??"").toUpperCase()} `,Object.assign(document.createElement("kbd"),{textContent:"ENTER"})),this.r.fresh.hidden=r,this.r.rows.replaceChildren(...o.map((d,f)=>{const g=Yt("tr",d.code==="YOU"?"is-player":""),v=n[d.code];return g.innerHTML=`<td>${f+1}</td><td><em></em></td><td>${v?`+${v}`:"–"}</td><td><b>${d.points}</b></td><td>${d.wins}</td>`,g.children[1].firstChild.style.background=oT(d.color),g.children[1].append(d.name),g}))}}const ra=2,cT=oe?"tbcnova-":"tbckart-",wh=8,lT=8192,hT=20,uT=20,dT=8,fT=2,df=5e3,Oc=100,pT=1,mT=5,gT=.1,vT=16,xT=3,L0=3,I0=15,_T=2,MT=.25,yT=.1,ST=.35,bT=32,wT=.06,ff=.1,ET=3,TT=1,AT=20,RT=.25,CT=1.5,Sl={body:16761370,suit:1914199,stripe:15087942,number:"07"},bl=[{body:16054011,suit:2303274,stripe:15087942,number:"2"},{body:2282478,suit:730437,stripe:16777215,number:"3"},{body:16736162,suit:2829634,stripe:16777215,number:"44"},{body:10215773,suit:1786674,stripe:1118481,number:"63"},{body:1914199,suit:16054011,stripe:16761370,number:"77"}],PT=2e3,LT=.5,IT=.05,DT=.4,NT=.12,UT=6,D0=3,OT=.5,FT=[["<kbd>W</kbd><kbd>↑</kbd>","throttle"],["<kbd>S</kbd><kbd>↓</kbd>","brake · reverse"],["<kbd>A</kbd><kbd>D</kbd>","steer"],["<kbd>SPACE</kbd>","handbrake drift"],["<kbd>C</kbd>","camera"],["<kbd>R</kbd>","reset kart"],["<kbd>M</kbd>","sound"],["<kbd>ESC</kbd>","pause"]],Ms=[["race","GRAND PRIX",i=>`${i} LAPS · ${Un.length} RIVALS · SLIPSTREAM & CONTACT`],["champ","CHAMPIONSHIP",(i,t)=>N0(t)],["timeattack","TIME ATTACK",()=>"SOLO HOT LAPS · RACE YOUR BEST-LAP GHOST"],["online","ONLINE",()=>"RACE FRIENDS · ROOM CODE · UP TO 6 PLAYERS"]],Co=[168,112];function N0(i){return i?i.done?`SEASON OVER · ${i.position===1?"CHAMPION":`P${i.position}`} · ${i.points} PTS · GO AGAIN`:`ROUND ${i.round} / ${i.of} · YOU P${i.position} · ${i.points} PTS`:`${Ue.length} ROUNDS · QUALIFYING + RACE · POINTS`}class kT{constructor(t){this.mode="race",this.title=Yt("div","screen screen-title is-visible",`<div>
         <div class="title-kicker">${oe?"ANTI-GRAVITY RACING · TEN WORLDS":"INDOOR KART RACING"}</div>
         <h1 class="title-logo">TBC<span>${oe?"NOVA":"KART"}</span></h1>
         <div class="title-meta" data-ref="meta"></div>
         <a class="title-edition" href="${oe?"../":"nova/"}">${oe?"CLASSIC · THE INDOOR HALL ›":"NEW · TBC NOVA: RACE ON ALIEN WORLDS ›"}</a>
       </div>
       <div>
         <div class="title-track">
           <button class="tt-arrow" data-act="prevTrack" aria-label="Previous track">◀</button>
           <canvas class="tt-map" data-ref="map"></canvas>
           <div class="tt-info">
             <small data-ref="count"></small><b data-ref="name"></b>
             <span data-ref="facts"></span><em data-ref="blurb"></em>
           </div>
           <button class="tt-arrow" data-act="nextTrack" aria-label="Next track">▶</button>
         </div>
         <div class="title-modes">${Ms.map(([n,s])=>`<button class="mode" data-mode="${n}"><b>${s}</b><small data-sub="${n}"></small></button>`).join("")}</div>
         <div class="title-level"><span>RIVALS</span>${Object.entries(jn).map(([n,s])=>`<button data-level="${n}">${s.label}</button>`).join("")}<kbd>L</kbd></div>
         <div class="title-press"><span class="key-hint">PRESS <kbd>ENTER</kbd> TO RACE · <kbd>↑</kbd><kbd>↓</kbd> TRACK · <kbd>←</kbd><kbd>→</kbd> MODE</span><span class="tap-hint">PICK A TRACK · TAP A MODE TO RACE</span></div>
         <div class="title-best" data-ref="best"></div>
         <div class="title-controls">${FT.map(([n,s])=>`<span>${n} ${s}</span>`).join("")}</div>
       </div>`),this.pause=Yt("div","screen screen-pause",`<div><h2>PAUSED</h2>
         <div class="res-actions">
           <button class="btn btn-primary" data-act="pause">RESUME <kbd>ESC</kbd></button>
           <button class="btn" data-act="reset">RESTART <kbd>R</kbd></button>
           <button class="btn" data-act="quit">MENU <kbd>Q</kbd></button>
         </div>
         <p><kbd>C</kbd> camera &nbsp; <kbd>M</kbd> sound</p></div>`),document.body.append(this.title,this.pause),_i(this.pause,!1),this.results=new oE(t),this.season=new aT(t),this.seasonSummary=null,this.lobby=new iT(zT(this)),this.onlinePause=new sT(t);const e=Yt("div","hud notice-layer");document.body.appendChild(e),this.notices=new v0(e),this.r=rr(this.title),this.modeButtons=[...this.title.querySelectorAll("[data-mode]")];for(const n of this.modeButtons)n.addEventListener("click",()=>{this.setMode(n.dataset.mode),t("start")});for(const n of[...this.pause.querySelectorAll("[data-act]"),...this.title.querySelectorAll("[data-act]")])n.addEventListener("click",()=>t(n.dataset.act));this.setMode("race")}setTrack(t,e,n,s,r,o){const a=this.r,c=Math.min(2,window.devicePixelRatio||1);a.map.width=Co[0]*c,a.map.height=Co[1]*c;const l=a.map.getContext("2d");l.scale(c,c),xh(l,e,n,Co[0],Co[1],12,{band:.22,line:.9,minBand:5}),$t(a.count,`${oe?"WORLD":"TRACK"} ${s+1} / ${r}`),$t(a.name,t.name.toUpperCase()),$t(a.facts,`${t.location.toUpperCase()} · ${Math.round(e.length)} M · ${t.laps} LAPS`),$t(a.blurb,t.blurb);const h=oe?"HOME WORLD · THE TBC LAYOUT":"VANCOUVER HOME TRACK";$t(a.meta,t.id==="tbc"?h:`${oe?"LAYOUT":"INSPIRED BY"} ${t.inspiredBy.toUpperCase()}`);for(const[u,,d]of Ms)$t(this.title.querySelector(`[data-sub="${u}"]`),d(t.laps,this.seasonSummary));this.setBest(o)}addGraphicsPicker(){const t=this.title.querySelector(".title-level");this.graphics=new rT(t.parentNode,t.nextSibling)}bindLevels(t,e){this.levelButtons=[...this.title.querySelectorAll("[data-level]")];for(const n of this.levelButtons)n.addEventListener("click",()=>e(this.setLevel(n.dataset.level)));this.setLevel(t)}setLevel(t){this.level=t;for(const e of this.levelButtons)e.classList.toggle("is-selected",e.dataset.level===t);return t}cycleLevel(){const t=Object.keys(jn);return this.setLevel(t[(t.indexOf(this.level)+1)%t.length])}setMode(t){this.mode=t;for(const e of this.modeButtons)e.classList.toggle("is-selected",e.dataset.mode===t)}cycleMode(t=1){const e=Ms.findIndex(([n])=>n===this.mode);this.setMode(Ms[(e+t+Ms.length)%Ms.length][0])}openLobby(t){this.showTitle(!1),this.lobby.open(t)}closeLobby(){this.lobby.show(!1),this.showTitle(!0)}showTitle(t){_i(this.title,t)}showPause(t){_i(this.pause,t)}showOnlinePause(t){this.onlinePause.show(t)}showResults(t){this.results.show(t)}showSeason(t,e,n,s){(t||this.season.visible)&&this.season.show(t,e,n,s)}setSeason(t){this.seasonSummary=t,$t(this.title.querySelector('[data-sub="champ"]'),N0(t))}notify(t,e=""){this.notices.show(t,{sub:e,kind:"info",time:D0})}update(t){t.session.state==="finished"&&this.results.update(t.field,t.session.mode)}setBest(t){$t(this.r.best,t?`BEST LAP  ${In(t)}`:"NO LAP TIME YET — SET THE BENCHMARK")}}function zT(i){return{onBack:()=>i.closeLobby(),onLeave:()=>i.lobby.render({phase:"choose"})}}class BT{constructor(){this.el=Yt("pre","debug"),document.body.appendChild(this.el),this.visible=!1,this._fps=60,this._stats=null}async toggle(){this.visible=!this.visible,this.el.classList.toggle("is-visible",this.visible),this.visible,this._stats&&(this._stats.dom.style.display=this.visible?"block":"none")}update(t,e){var o;if((o=this._stats)==null||o.update(),!this.visible)return;this._fps=.92*this._fps+.08*(1/Math.max(t,1/240));const n=e.kart.telemetry,s=e.kart.state,r=e.renderer.three.info.render;this.el.textContent=[`fps      ${this._fps.toFixed(0)}   calls ${r.calls}   tris ${r.triangles}`,`state    ${e.session.state}   camera ${e.camera.mode}/${e.camera.view}`,`speed    ${(n.speed*3.6).toFixed(1)} km/h   fwd ${n.forwardSpeed.toFixed(2)} m/s`,`slip     ${n.slip.toFixed(2)} m/s   β ${(n.slipAngle*180/Math.PI).toFixed(0)}°   drift ${n.drift.toFixed(2)}   ${n.sliding?"SLIDING":""}`,`accel    long ${n.longAccel.toFixed(1)}   lat ${n.latAccel.toFixed(1)} m/s²`,`pos      ${s.x.toFixed(1)}, ${s.z.toFixed(1)}   track #${e.trackIndex}`].join(`
`)}}const pf=(i,t)=>(i+4096)*8192+(t+4096);class U0{constructor(t,e){this.cell=e,this.segs=[],this.grid=new Map,this.contact={x:0,z:0,nx:0,nz:0};for(const n of t){const s=n.closed?n.length:n.length-1;for(let r=0;r<s;r++){const o=n[r],a=n[(r+1)%n.length];this._insert(o.x,o.z,a.x,a.z)}}this._stamp=new Uint32Array(this.segs.length/4),this._frame=0}_insert(t,e,n,s){const r=this.segs.length/4;this.segs.push(t,e,n,s);const o=this.cell;for(let a=Math.floor(Math.min(t,n)/o);a<=Math.floor(Math.max(t,n)/o);a++)for(let c=Math.floor(Math.min(e,s)/o);c<=Math.floor(Math.max(e,s)/o);c++){const l=pf(a,c);this.grid.has(l)||this.grid.set(l,[]),this.grid.get(l).push(r)}}resolve(t,e,n,s){this._frame++;let r=0;const o=Math.floor(t.x/this.cell),a=Math.floor(t.z/this.cell);for(let c=-1;c<=1;c++)for(let l=-1;l<=1;l++){const h=this.grid.get(pf(o+c,a+l));if(h)for(const u of h)this._stamp[u]!==this._frame&&(this._stamp[u]=this._frame,r=Math.max(r,this._collide(u*4,t,e,n,s)))}return r}_collide(t,e,n,s,r){const o=this.segs,a=o[t+2]-o[t],c=o[t+3]-o[t+1],l=Math.max(0,Math.min(1,((e.x-o[t])*a+(e.z-o[t+1])*c)/(a*a+c*c||1e-9))),h=o[t]+a*l,u=o[t+1]+c*l,d=Math.hypot(e.x-h,e.z-u);if(d>=n||d<1e-6)return 0;const[f,g]=[(e.x-h)/d,(e.z-u)/d];[e.x,e.z]=[h+f*n,u+g*n];const v=e.vx*f+e.vz*g;if(v>=0)return 0;const[m,p]=[e.vx-v*f,e.vz-v*g],_=Math.hypot(m,p),x=_>1e-9?Math.max(0,1-r*(1+s)*-v/_):0,b=m*x,R=p*x;return e.vx=b-v*s*f,e.vz=R-v*s*g,Object.assign(this.contact,{x:h,z:u,nx:f,nz:g}),-v}}const O0=i=>{const{width:t,height:e}=i,n=i.getContext("2d").getImageData(0,0,t,e).data,s=new Float32Array(t*e);for(let r=0;r<t*e;r++)s[r]=(.2126*n[r*4]+.7152*n[r*4+1]+.0722*n[r*4+2])/255;return{lum:s,w:t,h:e}};function Eh(i,t=2,e=1){let{lum:n,w:s,h:r}=O0(i);for(let h=0;h<e;h++){const u=new Float32Array(s*r);for(let d=0;d<r;d++)for(let f=0;f<s;f++){let g=0;for(let v=-1;v<=1;v++)g+=n[d*s+(f+v+s)%s]+n[(d+v+r)%r*s+f];u[d*s+f]=g/6}n=u}const{canvas:o,ctx:a}=Ve(s,r),c=a.createImageData(s,r),l=(h,u)=>n[(u+r)%r*s+(h+s)%s];for(let h=0;h<r;h++)for(let u=0;u<s;u++){const d=(l(u+1,h)-l(u-1,h))*t,f=(l(u,h+1)-l(u,h-1))*t,g=Math.hypot(d,f,1),v=(h*s+u)*4;c.data[v]=(-d/g*.5+.5)*255,c.data[v+1]=(f/g*.5+.5)*255,c.data[v+2]=(1/g*.5+.5)*255,c.data[v+3]=255}return a.putImageData(c,0,0),o}function Th(i,t,e){const{lum:n,w:s,h:r}=O0(i),{canvas:o,ctx:a}=Ve(s,r),c=a.createImageData(s,r);for(let l=0;l<s*r;l++){const h=Math.round(255*Math.min(1,Math.max(0,t+(e-t)*n[l])));c.data.set([h,h,h,255],l*4)}return a.putImageData(c,0,0),o}const Fc=new Map,wi=(i,t)=>(Fc.has(i)||Fc.set(i,t()),Fc.get(i)),Sa=(i,t)=>Jn(wi(i,t)),$s=(i,t)=>Jn(wi(i,t),{colour:!1}),HT=()=>Sa("concrete",wl),VT=()=>Sa("asphalt",El),GT=(i="#d7263d")=>Sa(`wall${i}`,()=>k0(i)),WT=()=>({normalMap:$s("concreteN",()=>Eh(wi("concrete",wl),1.6,2)),roughnessMap:$s("concreteR",()=>Th(wi("concrete",wl),.62,.22))}),XT=()=>({normalMap:$s("asphaltN",()=>Eh(wi("asphalt",El),3.2,1)),roughnessMap:$s("asphaltR",()=>Th(wi("asphalt",El),.97,.72))}),qT=(i="#d7263d")=>({normalMap:$s(`wallN${i}`,()=>Eh(wi(`wall${i}`,()=>k0(i)),5,2))}),$T=()=>Sa("barrier",F0),YT=()=>({roughnessMap:$s("barrierR",()=>Th(wi("barrier",F0),.75,.4))});function F0(){const{canvas:e,ctx:n}=Ve(512,256);n.fillStyle="#ffffff",n.fillRect(0,0,512,256),Xs(n,512,256,{count:30,minR:20,maxR:90,alpha:.05,seed:41});let s=7;const r=()=>(s=s*16807%2147483647)/2147483647,o=n.createLinearGradient(0,256*.5,0,256);o.addColorStop(0,"rgba(30,30,32,0)"),o.addColorStop(1,"rgba(30,30,32,0.16)"),n.fillStyle=o,n.fillRect(0,0,512,256),n.filter="blur(10px)";for(let a=0;a<14;a++)n.fillStyle=`rgba(25,25,28,${.04+r()*.08})`,n.beginPath(),n.ellipse(r()*512,256*(.62+r()*.3),30+r()*90,6+r()*12,(r()-.5)*.2,0,Math.PI*2),n.fill();return n.filter="none",Or(n,512,256,8,42),e}function wl(){const{canvas:t,ctx:e}=Ve(1024,1024);return e.fillStyle="#74767b",e.fillRect(0,0,1024,1024),Xs(e,1024,1024,{count:70,minR:60,maxR:260,alpha:.07,seed:11}),Xs(e,1024,1024,{count:160,minR:10,maxR:60,alpha:.05,seed:12}),Zo(e,1024,1024,{count:7e3,color:"rgba(40,42,46,0.35)",minR:.5,maxR:1.5,seed:13}),Zo(e,1024,1024,{count:2500,color:"rgba(200,202,206,0.25)",minR:.5,maxR:1.2,seed:14}),Or(e,1024,1024,14,15),e.fillStyle="rgba(30,31,34,0.85)",e.fillRect(0,0,1024,3),e.fillRect(0,0,3,1024),e.fillStyle="rgba(255,255,255,0.08)",e.fillRect(0,3,1024,1),e.fillRect(3,0,1,1024),t}function El(){const{canvas:e,ctx:n}=Ve(512,512);n.fillStyle="#3d4047",n.fillRect(0,0,512,512),Xs(n,512,512,{count:40,minR:30,maxR:140,alpha:.06,seed:21}),Zo(n,512,512,{count:9e3,color:"rgba(120,124,132,0.35)",minR:.4,maxR:1.1,seed:22}),Zo(n,512,512,{count:5e3,color:"rgba(15,16,18,0.4)",minR:.4,maxR:1.2,seed:23}),Or(n,512,512,18,24);const s=n.createLinearGradient(0,0,0,512);return s.addColorStop(.18,"rgba(0,0,0,0)"),s.addColorStop(.5,"rgba(0,0,0,0.08)"),s.addColorStop(.82,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,512,512),e}function k0(i){const{canvas:s,ctx:r}=Ve(512,1280),o=8;for(let a=0;a<o;a++){const c=a*512/o,l=r.createLinearGradient(c,0,c+512/o,0);l.addColorStop(0,"#4a5059"),l.addColorStop(.45,"#6b727d"),l.addColorStop(.55,"#5a616b"),l.addColorStop(1,"#434851"),r.fillStyle=l,r.fillRect(c,0,512/o,1280)}return Xs(r,512,1280,{count:30,minR:40,maxR:200,alpha:.08,seed:31}),Or(r,512,1280,10,32),r.fillStyle="#16181c",r.fillRect(0,1280-1.4*128,512,1.4*128),r.fillStyle=i,r.fillRect(0,1280-1.85*128,512,.45*128),r.fillStyle="rgba(255,255,255,0.85)",r.fillRect(0,1280-1.95*128,512,.06*128),s}const oa='"Chakra Petch", "Arial Narrow", Impact, sans-serif',jT=" ";function Tl(i,t,e,n,s,r){for(let o=0;o*r<n;o++)for(let a=0;a*r<s;a++)i.fillStyle=(o+a)%2?"#101114":"#f2f2f2",i.fillRect(t+o*r,e+a*r,r,r)}function KT({title:i,sub:t,color:e}){const{canvas:n,ctx:s}=Ve(1024,256);return ah(n,()=>{const r=s.createLinearGradient(0,0,0,256);r.addColorStop(0,"#1c1f26"),r.addColorStop(1,"#0f1115"),s.fillStyle=r,s.fillRect(0,0,1024,256),s.fillStyle=e,s.beginPath(),[[0,0],[70,0],[30,256],[0,256]].forEach(([o,a])=>s.lineTo(o,a)),s.fill(),s.fillStyle="#ffffff",s.font=`italic 700 118px ${oa}`,s.fillText(i,96,150),s.fillStyle=e,s.font=`600 44px ${oa}`,s.fillText(t.split("").join(jT),100,212),Tl(s,896,0,128,256,32)})}function ZT(){const{canvas:i,ctx:t}=Ve(1024,160);return ah(i,()=>{t.fillStyle="#0f1115",t.fillRect(0,0,1024,160),Tl(t,0,0,160,160,40),Tl(t,864,0,160,160,40),t.fillStyle="#ffffff",t.font=`italic 700 92px ${oa}`,t.textAlign="center",t.textBaseline="middle",t.fillText("START · FINISH",512,84)})}function JT(){const{canvas:i,ctx:t}=Ve(2048,512);return ah(i,()=>{t.clearRect(0,0,2048,512),t.fillStyle="rgba(255,255,255,0.9)",t.font=`italic 700 330px ${oa}`,t.textAlign="center",t.textBaseline="middle",t.fillText("TBC KART",1024,230),t.fillStyle="rgba(230,57,70,0.95)",t.fillRect(250,430,1548,26)},'700 200px "Chakra Petch"')}const z0=7,Po=10,QT=4,mf=8,gf=12,vf=8.8,sn={width:3.4,depth:.6,y:7.9,spacingX:12,spacingZ:10,intensity:9,color:16054527},ys={y:3.2,thickness:.08,colors:[58879,16722902],intensity:2.6},tA=[{title:"TBC KART",sub:"INDOOR RACING",color:"#e63946"},{title:"LAP ATTACK",sub:"BEAT YOUR BEST",color:"#ffc21a"},{title:"FULL THROTTLE",sub:"SINCE 2026",color:"#22c3ee"},{title:"RACE HARD",sub:"RACE CLEAN",color:"#f4f4f4"}],eA=[12,3],nA=5.6,B0=i=>new Kt({map:i,transparent:!0,roughness:.6,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});function Al(i,t,e,n=0){return i.rotation.x=-Math.PI/2,i.position.set(t,n,e),i.receiveShadow=!0,i}const iA=(i,t)=>{for(const e of Object.values(i))[e.repeat,e.anisotropy]=[t.repeat.clone(),t.anisotropy];return i};function sA(i,t){const e=new Wt,n=HT();n.repeat.set(i.width/mf,i.depth/mf),n.anisotropy=t;const s=Ze.detail?iA(WT(),n):{},r=new Kt({map:n,roughness:1,metalness:.02,...s});Ze.detail||(r.roughness=.5),s.normalMap&&r.normalScale.set(.35,.35),e.add(Al(new ft(new Pe(i.width,i.depth),r),i.cx,i.cz));const o=KS(),a=.35,c=1.5,l=[[i.width-2*c,i.cx,i.minZ+c,0],[i.width-2*c,i.cx,i.maxZ-c,0],[i.depth-2*c,i.minX+c,i.cz,Math.PI/2],[i.depth-2*c,i.maxX-c,i.cz,Math.PI/2]];for(const[h,u,d,f]of l){const g=o.clone();g.repeat.set(h/1.4,1),g.needsUpdate=!0;const v=Al(new ft(new Pe(h,a),B0(g)),u,d,.004);v.rotation.z=f,e.add(v)}return e}function rA(i,t,e){const n=new ft(new Pe(e,e/4),B0(JT()));return n.material.opacity=.8,Al(n,i,t,.006)}function Ys(i,t,e,n,s,{closed:r=!1,uPerMetre:o=1,alpha:a=null}={}){const c=t.length,l=new Float32Array(c*6),h=new Float32Array(c*4),u=a?new Float32Array(c*8).fill(1):null,d={},f={};let g=0;for(let _=0;_<c;_++){const x=t[_];_>0&&(g+=i.spacing*o),i.offset(x,typeof e=="function"?e(x):e,d),i.offset(x,typeof n=="function"?n(x):n,f),l.set([d.x,s,d.z,f.x,s,f.z],_*6),h.set([g,0,g,1],_*4),u&&(u[_*8+3]=u[_*8+7]=a(_,x))}const v=[],m=r?c:c-1;for(let _=0;_<m;_++){const x=_*2,b=(_+1)%c*2;v.push(x,x+1,b,x+1,b+1,b)}const p=new de;return p.setAttribute("position",new ce(l,3)),p.setAttribute("uv",new ce(h,2)),u&&p.setAttribute("color",new ce(u,4)),p.setIndex(v),p.computeVertexNormals(),p}const H0=i=>Array.from({length:i.count},(t,e)=>e),kc=(i={})=>new Kt({color:13948116,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,...i}),Rl=i=>(i.receiveShadow=!0,i);function xf(i,t,...e){const n=new Wt;return n.position.set(i.x[t],_a+.002,i.z[t]),n.rotation.y=i.heading(t),n.add(...e),n}function Lo(i,t,e,n=0,s=0){const r=Rl(new ft(new Pe(i,t),e));return r.rotation.x=-Math.PI/2,r.position.set(n,0,s),r}function V0(i,t,e,n,s=null){const r=new Wt,o=i.halfWidth,a=H0(i),c=VT();c.anisotropy=n;const l=Ys(i,a,-o,o,c0,{closed:!0,uPerMetre:1/hw}),h=Ze.detail?XT():{};for(const _ of Object.values(h))_.anisotropy=n;const u=new Kt({map:c,roughness:h.roughnessMap?1:.86,...h});h.normalMap&&u.normalScale.set(.9,.9),s&&Object.assign(u,{color:new lt(s.surface),metalness:.2,emissive:new lt(s.glow??0)}),r.add(Rl(new ft(l,u)));const d=s?kc({color:0,emissive:s.line,emissiveIntensity:1.3}):kc();for(const _ of[-1,1]){const x=_*(o-gl),b=_*(o-gl-uw),R=Ys(i,a,Math.min(x,b),Math.max(x,b),_a,{closed:!0});r.add(Rl(new ft(R,d)))}const f=Math.round(o*2/.6),g=kc({map:YS(f,2),color:16777215});r.add(xf(i,t,Lo(o*2,yw,g)));const[v,m,p]=[1.7,2.4,.1];return r.add(xf(i,e,Lo(v,p,d,0,-m/2),Lo(p,m,d,-v/2,0),Lo(p,m,d,v/2,0))),r}function G0(i,t=null){const e=ph(i),n=u=>h0(i,u),s={uPerMetre:1/(2*vw)},r=_a+.004,o=l0(i).map(({side:u,indices:d})=>u>0?Ys(i,d,e,n,r,s):Ys(i,d,f=>-n(f),-e,r,s)),a=t?Bd(t.a,t.b):Bd(xw,_w),c=t?{emissive:16777215,emissiveMap:a,emissiveIntensity:.9,metalness:.4}:{},l=new Kt({map:a,...c,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),h=new ft(sr(o),l);return h.receiveShadow=!0,h}const Io=512,zi=128,_f=.3,Mf=(i,t)=>Math.exp(-(i*i)/(2*t*t));function oA(){const{canvas:i,ctx:t}=Ve(Io,zi),e=nr(41),n=Array.from({length:zi},()=>.55+e()*.45),s=n.map((r,o)=>(n[Math.max(0,o-1)]+n[o]*2+n[Math.min(zi-1,o+1)])/4);for(let r=0;r<zi;r++){const o=(r+.5)/zi,a=Math.sin(Math.PI*o)**1.8,c=Mf(o-.5-_f,.085)+Mf(o-.5+_f,.085),l=Math.min(1,a*(.55+.5*c)*s[r]),h=Math.round(l*255);t.fillStyle=`rgb(${h},${h},${h})`,t.fillRect(0,r,Io,1)}return Xs(t,Io,zi,{count:26,minR:20,maxR:70,alpha:.28,seed:42}),Or(t,Io,zi,30,43),Jn(i,{colour:!1})}const yf=Fp*eh,aA=yf*Nr*Ur/(1+yf*sl/ir);function cA(i,t){const e=zp*Nr+Vp*i*i/Pn;return(t.throttle||0)*Yp(i)-(t.brake||0)*aA-e}function lA(i,t,{dt:e=1/60,laps:n=2}={}){const s=vh(i,t),r={ahead:ee.planAhead,maxSpeed:ee.maxSpeed},o=i.count,a=new Float32Array(o),c=new Float32Array(o),l=new Float32Array(o);let h=0,u=5;for(;h<i.length*n;){const d=i.wrap(Math.floor(h/i.spacing)),f=mh(u,gh(s,i,d,u,r));u=Math.max(.5,u+cA(u,f)*e),h+=u*e,!(h<i.length*(n-1))&&([a[d],c[d],l[d]]=[a[d]+e,c[d]+f.brake*e,l[d]+u*e])}for(let d=0;d<o;d++)a[d]&&([c[d],l[d]]=[c[d]/a[d],l[d]/a[d]]);for(let d=0;d<o;d++)a[d]||([c[d],l[d]]=[c[i.wrap(d-1)],l[i.wrap(d-1)]]);return{brake:c,speed:l}}function hA(i,{minBrake:t,minDrop:e,mergeGap:n},{brake:s,speed:r}){const o=i.count,a=u=>s[i.wrap(u)];let c=0;for(;c<o&&a(c)>0;)c++;if(c===o)return[];const l=Math.round(n/i.spacing),h=[];for(let u=c+1;u<c+o;u++){if(!(a(u)>0))continue;let[d,f]=[u,0];for(let v=u;v<c+o&&v-d<=l;v++)a(v)>0&&([d,f]=[v,Math.max(f,a(v))]);const g=r[i.wrap(u)]-r[i.wrap(d+1)];f>=t&&g>=e&&h.push({start:i.wrap(u),end:i.wrap(d),drop:g,peak:f}),u=d}return h}function uA(i,t,e){const n=[];for(let s=t;;s=i.wrap(s+1))if(n.push(s),s===e||n.length>=i.count)return n}const Sf=(i,t,e)=>{const n=gt((e-i)/(t-i),0,1);return n*n*(3-2*n)};function dA(i,t,e){const n=Math.round(1/i.spacing);return e.map(s=>{let r=0;for(let o=-n;o<=n;o++)r+=t[i.wrap(s+o)];return r/(2*n+1)})}function fA(i,t,e,n,s,r){const o=t.length,a=.5+.5*s(),c=s()*6,l=f=>{const g=f/Math.max(1,o-1),v=.75+.25*Math.sin(c+g*23)*Math.sin(g*9.7+c*2),m=gt(.2+1.3*e[f],0,1);return a*v*m*Sf(0,.1,g)*(1-Sf(.85,1,g))},h=(s()-.5)*.25,u=(f,g)=>n(g)+h*(f/Math.max(1,o-1)),d=new Map(t.map((f,g)=>[f,g]));return Ys(i,t,f=>u(d.get(f),f)-$i.width/2,f=>u(d.get(f),f)+$i.width/2,r,{alpha:l})}function pA(i,t){return hA(i,$i,t).map(e=>uA(i,e.start,e.end))}function mA(i,t,e){const n=nr(i.count),s=lA(i,t),r=[];for(const c of pA(i,s)){if(c.length<8)continue;const l=dA(i,s.brake,c);for(let h=0;h<$i.streaks;h++){const u=(n()-.5)*2*$i.spread,d=Math.floor(n()*c.length*.15),f=c.length-Math.floor(n()*c.length*.15);if(!(f-d<6))for(const g of[-1,1]){const v=m=>t[m]+u+g*($i.rearTrack/2);r.push(fA(i,c.slice(d,f),l.slice(d,f),v,n,e))}}}const o=new Kt({color:460552,roughness:.7,opacity:$i.opacity,transparent:!0,depthWrite:!1,vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-1.5,polygonOffsetUnits:-1.5}),a=new ft(r.length?sr(r):new de,o);return a.receiveShadow=!0,a.renderOrder=1,a}function gA(i,t=5){const e=i.count,n=Math.max(1,Math.round(t/i.spacing)),s=new Float32Array(e);let r=0;for(let o=-n;o<=n;o++)r+=Math.abs(i.curvature[i.wrap(o)]);for(let o=0;o<e;o++)s[o]=gt(r/(2*n+1)*7,0,1),r+=Math.abs(i.curvature[i.wrap(o+n+1)])-Math.abs(i.curvature[i.wrap(o-n)]);return s}function vA(i,t){const e=new Wt,n=i.halfWidth-gl*.5,s=d=>gt(t[d]-li.width/2,-n,n),r=d=>gt(t[d]+li.width/2,-n,n),o=gA(i),a=(d,f)=>1-li.cornerBoost+li.cornerBoost*o[f],c=(c0+_a)/2,l=Ys(i,H0(i),s,r,c,{closed:!0,uPerMetre:1/li.tile,alpha:a}),h=new Kt({color:li.color,roughness:li.roughness,alphaMap:oA(),opacity:li.opacity,transparent:!0,depthWrite:!1,vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),u=new ft(l,h);return u.receiveShadow=!0,u.renderOrder=1,e.add(u,mA(i,t,c+.001)),e}const xA=[[.52,-.5],[.52,.5],[-.52,-.56],[-.52,.56]];class W0{constructor(t,e,n){Object.assign(this,{path:t,line:e,curbs:n}),this.rubber=Ic.rubberStart}addDistance(t){this.rubber=Math.min(1,this.rubber+t/(this.path.length*Ic.rubberLaps))}at(t,e){const n=Ic,s=Math.abs(e-this.line[t]),r=n.green+(1-n.green)*this.rubber,o=n.lineGain*this.rubber*Math.exp(-((s/n.lineWidth)**2)),a=n.dust*Me(n.dustFrom,n.dustFull,s),c=this.curbs.side[t],l=c&&e*c>=this.curbs.inner[t]&&e*c<=this.curbs.outer[t]+.1?n.kerb:1;return r*(1+o-a)*l}wheels(t,e,n){const s=this.path,[r,o]=[-Math.sin(t.yaw),-Math.cos(t.yaw)];for(let a=0;a<4;a++){const[c,l]=xA[a],h=t.x+r*c-o*l,u=t.z+o*c+r*l,d=(h-s.x[e])*s.tx[e]+(u-s.z[e])*s.tz[e],f=s.wrap(e+Math.round(d/s.spacing));n[a]=this.at(f,s.lateral(h,u,f))}return n}}function X0(i,{lineEdge:t,lineMax:e}){const n=i.count,s=Math.max(0,Math.min(e,i.halfWidth-t));let r=new Float64Array(n);for(const o of _A){const a=Math.max(8,Math.round(i.length/o)),c=Array.from({length:a},(g,v)=>Math.round(v*n/a)%n),l=Float64Array.from(c,g=>r[g]),[h,u]=[new Float64Array(a),new Float64Array(a)],d=g=>{const v=c[g];[h[g],u[g]]=[i.x[v]-i.tz[v]*l[g],i.z[v]+i.tx[v]*l[g]]};for(let g=0;g<a;g++)d(g);const f=g=>(g+a)%a;for(let g=0;g<MA;g++)for(let v=0;v<a;v++){const[m,p,_,x]=[f(v-2),f(v-1),f(v+1),f(v+2)],b=(4*(h[p]+h[_])-h[m]-h[x])/6,R=(4*(u[p]+u[_])-u[m]-u[x])/6,w=i.lateral(b,R,c[v]);l[v]=Math.max(-s,Math.min(s,l[v]+yA*(w-l[v]))),d(v)}r=SA(l,c,n)}return Float32Array.from(r)}const _A=[8,4,2,1],MA=300,yA=.4;function SA(i,t,e){const n=new Float64Array(e),s=t.length;for(let r=0;r<s;r++){const[o,a]=[t[r],t[(r+1)%s]],c=(a-o+e)%e||e;for(let l=0;l<c;l++)n[(o+l)%e]=i[r]+(i[(r+1)%s]-i[r])*l/c}return n}function bA(i,t,e,n){let s=0;for(let r=0;r<=e;r+=3)s=Math.max(s,Math.abs(i.curvature[i.wrap(t+r)]));return n*Math.max(0,Math.min(1,1-s*Ht.lineTaper))}const vr=new A;function en(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;vr.copy(t),vr[n]=0,vr.normalize();const l=.5*o/(o+a),h=1-vr.angleTo(i)/c;return Math.sign(vr[e])===1?h*l:a/(o+a)+l+l*(1-h)}class q0 extends me{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new A,c=new A,l=new A(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new A,v=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*v,c.y-=Math.sign(c.y)*v,c.z-=Math.sign(c.z)*v,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=en(g,c,"z","y",r,n),d[p+1]=1-en(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-en(g,c,"z","y",r,n),d[p+1]=1-en(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-en(g,c,"x","z",r,t),d[p+1]=en(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-en(g,c,"x","z",r,t),d[p+1]=1-en(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-en(g,c,"x","y",r,t),d[p+1]=1-en(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=en(g,c,"x","y",r,t),d[p+1]=1-en(g,c,"y","x",r,e);break}}}function $0(i,t){const e=i.closed?[...i,i[0]]:i,n=[0];for(let c=1;c<e.length;c++)n.push(n[c-1]+Math.hypot(e[c].x-e[c-1].x,e[c].z-e[c-1].z));const s=n.at(-1),r=Math.max(1,Math.round(s/Tr)),o=s/r;let a=1;for(let c=0;c<r;c++){const l=(c+.5)*o;for(;a<e.length-1&&n[a]<l;)a++;const h=e[a-1],u=e[a],d=(l-n[a-1])/Math.max(1e-6,n[a]-n[a-1]);t.push({x:h.x+(u.x-h.x)*d,z:h.z+(u.z-h.z)*d,angle:Math.atan2(-(u.z-h.z),u.x-h.x)})}}function wA(i){const t=[];for(const d of R0(i))$0(d,t);const e=A0(i),n=new q0(Tr*.97,vl,Ji,1,.06),s=Ze.detail?{map:$T(),...YT()}:{},r=new Kt({roughness:s.roughnessMap?1:.45,metalness:0,...s}),o=new ji(n,r,t.length),a=new Pt,c=new Nn,l=new A(0,1,0),h=new A(1,1,1),u=Mw.map(d=>new lt(d));return t.forEach((d,f)=>{c.setFromAxisAngle(l,d.angle),o.setMatrixAt(f,a.compose(new A(d.x,vl/2,d.z),c,h)),o.setColorAt(f,u[f%u.length])}),o.castShadow=Pp,o.receiveShadow=!0,{mesh:o,faces:e,blocks:t}}function Y0(i){return[[i.width,i.cx,i.minZ,0],[i.width,i.cx,i.maxZ,Math.PI],[i.depth,i.minX,i.cz,Math.PI/2],[i.depth,i.maxX,i.cz,-Math.PI/2]]}function EA(i,t){const e=new Wt,n=GT();n.anisotropy=t,Y0(i).forEach(([r,o,a,c],l)=>{const h=n.clone();h.repeat.set(r/QT,1),h.needsUpdate=!0;const u=Ze.detail?qT().normalMap:null;u==null||u.repeat.copy(h.repeat);const d=new ft(new Pe(r,Po),new Kt({map:h,normalMap:u,roughness:.62,metalness:.35}));d.position.set(o,Po/2,a),d.rotation.y=c,d.receiveShadow=!0,e.add(d);const f=new lt(ys.colors[l%ys.colors.length]),g=new ft(new me(r-2,ys.thickness,ys.thickness),new Kt({color:0,emissive:f,emissiveIntensity:ys.intensity}));g.position.set(0,ys.y-Po/2,.12),d.add(g)});const s=new ft(new Pe(i.width,i.depth),new Kt({color:1316379,roughness:.95}));return s.rotation.x=Math.PI/2,s.position.set(i.cx,Po,i.cz),e.add(s),e}function xr(i,t,e){const n=new ji(i,t,e.length),s=new Pt;return e.forEach(([r,o,a,c=0],l)=>{s.makeRotationY(c).setPosition(r,o,a),n.setMatrixAt(l,s)}),n}function zc(i,t,e,n){const s=t-i-2*n,r=Math.max(1,Math.floor(s/e)+1),o=i+n+(s-(r-1)*e)/2;return Array.from({length:r},(a,c)=>o+c*e)}function TA(i){const t=new Wt,e=new Kt({color:2895926,roughness:.5,metalness:.7}),n=zc(i.minX,i.maxX,gf,4);t.add(xr(new me(.35,.8,i.depth),e,n.map(d=>[d,vf,i.cz])));const s=zc(i.minZ,i.maxZ,sn.spacingZ,5);t.add(xr(new me(i.width,.25,.25),e,s.map(d=>[i.cx,vf+.3,d])));const r=zc(i.minX,i.maxX,sn.spacingX,6).map(d=>d+gf/2),o=[];for(const d of r)for(const f of s)d<i.maxX-3&&o.push([d,sn.y,f]);const a=new Kt({color:0,emissive:new lt(sn.color),emissiveIntensity:sn.intensity}),c=new me(sn.width,.08,sn.depth);t.add(xr(c,a,o));const l=new me(sn.width+.2,.14,sn.depth+.2);t.add(xr(l,e,o.map(([d,f,g])=>[d,f+.1,g])));const h=new Yn({map:hl("rgba(255,255,255,1)"),color:new lt(16773590).multiplyScalar(.07),transparent:!0,blending:Fs,depthWrite:!1}),u=new Pe(14,11).rotateX(-Math.PI/2);return t.add(xr(u,h,o.map(([d,,f])=>[d,.03,f]))),{group:t,lights:o}}const AA=()=>new te({uniforms:{uColor:{value:new lt(sn.color).multiplyScalar(Lp.intensity)}},vertexShader:`
      varying float vDown;
      varying float vFacing;
      void main() {
        vec4 view = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        vec3 n = normalize(normalMatrix * mat3(instanceMatrix) * normal);
        vFacing = abs(dot(n, normalize(-view.xyz)));
        vDown = 1.0 - uv.y; // 0 at the panel, 1 at the floor
        gl_Position = projectionMatrix * view;
      }`,fragmentShader:`
      uniform vec3 uColor;
      varying float vDown;
      varying float vFacing;
      void main() {
        float up = clamp(1.0 - vDown, 0.0, 1.0);
        float a = pow(clamp(vFacing, 0.0, 1.0), 2.5) * up * up * smoothstep(0.0, 0.08, up);
        gl_FragColor = vec4(uColor * a, 0.0); // pure light added: no alpha written
      }`,transparent:!0,depthWrite:!1,blending:Ol,blendSrc:No,blendDst:No,blendSrcAlpha:As,blendDstAlpha:No,side:on});function RA(i){const t=sn.y-.1,e=new Ai(.5,Lp.spread,t,20,1,!0).translate(0,-t/2,0),n=new ji(e,AA(),i.length),s=new Pt,r=new A(sn.width/1.2,1,1);return i.forEach(([o,a,c],l)=>n.setMatrixAt(l,s.compose(new A(o,a-.1,c),new Nn,r))),n.frustumCulled=!1,n.renderOrder=3,n}function CA(i){const t=new Wt,e=tA.map(KT),[n,s]=eA;let r=0;for(const[o,a,c,l]of Y0(i)){const h=Math.max(1,Math.floor(o/32));for(let u=0;u<h;u++){const d=e[r++%e.length],f=new ft(new Pe(n,s),new Kt({map:d,emissiveMap:d,emissive:16777215,emissiveIntensity:.45,roughness:.55})),g=(u-(h-1)/2)*(o/h),v=.15;f.position.set(a+Math.cos(l)*g+Math.sin(l)*v,nA,c-Math.sin(l)*g+Math.cos(l)*v),f.rotation.y=l,t.add(f)}}return t}function j0(i,t,e=new A(...Vi.offset)){const n=e.clone().normalize(),s=new A(0,1,0).cross(n).normalize(),r=n.clone().cross(s),o=2*t/Cr,a=new A,c=l=>Math.round(l/o)*o;return(l,h)=>{a.set(l,0,h);const[u,d,f]=[c(a.dot(s)),c(a.dot(r)),a.dot(n)];a.copy(s).multiplyScalar(u).addScaledVector(r,d).addScaledVector(n,f),i.target.position.copy(a),i.position.copy(a).add(e)}}function PA(i){const t=new Wt;t.add(new Tp(pc.sky,pc.ground,pc.intensity));for(const o of uy){const a=new el(o.color,o.intensity);a.position.set(...o.direction).normalize().multiplyScalar(50).add(new A(i.cx,0,i.cz)),a.target.position.set(i.cx,0,i.cz),t.add(a,a.target)}const e=new el(Vi.color,Vi.intensity);e.position.set(i.cx+Vi.offset[0],Vi.offset[1],i.cz+Vi.offset[2]),e.target.position.set(i.cx,0,i.cz),e.castShadow=!0,e.shadow.mapSize.set(Cr,Cr),e.shadow.bias=Rp,e.shadow.normalBias=Cp;const n=Math.max(i.width,i.depth)/2+2,s=Math.min(n,dy.maxHalf),r=e.shadow.camera;return[r.left,r.right,r.top,r.bottom]=[-s,s,s,-s],r.near=10,r.far=Vi.offset[1]+40,r.updateProjectionMatrix(),t.add(e,e.target),{group:t,follow:s<n?j0(e,s):()=>{}}}const LA=new lt(16719661),IA=new lt(2883434),bf=new lt(0);class K0{constructor(t,e){const n=Sw,s=t.halfWidth+Ma+.9;this.group=new Wt,this.group.position.set(t.x[e],0,t.z[e]),this.group.rotation.y=t.heading(e);const r=new Kt({color:2303532,roughness:.45,metalness:.8}),o=(l,h,u,d,f,g,v=r)=>{const m=new ft(new me(l,h,u),v);return m.position.set(d,f,g),m.castShadow=!0,this.group.add(m),m};o(.3,n+.4,.3,-s,(n+.4)/2,0),o(.3,n+.4,.3,s,(n+.4)/2,0),o(s*2+.3,.45,.4,0,n,0);const a=new Kt({map:ZT(),emissive:16777215,roughness:.6});a.emissiveMap=a.map,a.emissiveIntensity=.5;const c=new ft(new Pe(s*1.6,s*1.6/6.4),a);c.position.set(0,n+.75,.21),this.group.add(c),o(2.4,.55,.25,0,n-.55,.12),this.bulbs=[];for(let l=0;l<5;l++){const h=new Kt({color:789518,emissive:bf,roughness:.3}),u=new ft(new Ai(.15,.15,.06,20),h);u.rotation.x=Math.PI/2,u.position.set((l-2)*.44,n-.55,.26),this.group.add(u),this.bulbs.push(h)}}setLights(t,e){this.bulbs.forEach((n,s)=>{const r=e==="go"||e==="red"&&s<t;n.emissive.copy(r?e==="go"?IA:LA:bf),n.emissiveIntensity=r?3.6:0})}}function Z0(i,t=22,e=9,n=5.2){const s=[],r=Math.max(1,Math.round(t/i.spacing));for(let o=0;o<i.count;o+=r){const a=i.curvature[o]>0?-1:1;for(const c of[a,-a]){const l=i.offset(o,c*e);if(!i.within(l.x,l.z,e-.5)){s.push({x:l.x,y:n,z:l.z});break}}}return s}function DA(i=1){const t=(s,r)=>{let o=Math.imul(s,374761393)^Math.imul(r,668265263)^Math.imul(i,2147483647);return o=Math.imul(o^o>>>13,1274126177),((o^o>>>16)>>>0)/4294967296},e=s=>s*s*(3-2*s),n=(s,r)=>{const[o,a]=[Math.floor(s),Math.floor(r)],[c,l]=[e(s-o),e(r-a)],h=t(o,a)+(t(o+1,a)-t(o,a))*c,u=t(o,a+1)+(t(o+1,a+1)-t(o,a+1))*c;return h+(u-h)*l};return n.fbm=(s,r,o,a=4)=>{let[c,l,h,u]=[0,1,1/o,0];for(let d=0;d<a;d++)c+=(n(s*h+d*17.3,r*h-d*9.1)*2-1)*l,u+=l,l*=.5,h*=2.03;return c/u},n.ridge=(s,r,o,a=4)=>{let[c,l,h,u]=[0,1,1/o,0];for(let d=0;d<a;d++){const f=1-Math.abs(n(s*h+d*31.7,r*h+d*5.9)*2-1);c+=f*f*l,u+=l,l*=.5,h*=2.1}return c/u},n}function NA(i){let t=2166136261;for(const e of i)t=Math.imul(t^e.charCodeAt(0),16777619);return t>>>0}const UA=`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position = p.xyww; // on the far plane
  }
`,OA=`
  uniform vec3 uZenith, uHorizon, uGround, uSunColor, uSunDir;
  uniform float uStars, uAurora, uNebula, uTime;
  varying vec3 vDir;

  float hash(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
  float noise(vec3 p) {
    vec3 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float n000 = hash(i), n100 = hash(i + vec3(1,0,0)), n010 = hash(i + vec3(0,1,0)), n110 = hash(i + vec3(1,1,0));
    float n001 = hash(i + vec3(0,0,1)), n101 = hash(i + vec3(1,0,1)), n011 = hash(i + vec3(0,1,1)), n111 = hash(i + vec3(1,1,1));
    return mix(mix(mix(n000, n100, f.x), mix(n010, n110, f.x), f.y), mix(mix(n001, n101, f.x), mix(n011, n111, f.x), f.y), f.z);
  }
  float fbm(vec3 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += noise(p) * a; p *= 2.07; a *= 0.5; } return s; }

  void main() {
    vec3 d = normalize(vDir);
    float h = d.y;
    vec3 col = mix(uHorizon, uZenith, pow(smoothstep(0.0, 1.0, max(h, 0.0)), 0.4));
    col = mix(col, uGround, smoothstep(0.0, -0.25, h)); // below the horizon: the haze thickens to ground
    col += uHorizon * 0.15 * exp(-abs(h) * 18.0); // bright band at the horizon
    float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
    col = max(mix(vec3(l), col, 1.35), 0.0); // the vivid skies of a strange world

    float sd = max(dot(d, normalize(uSunDir)), 0.0);
    col += uSunColor * (pow(sd, 900.0) * 30.0 + pow(sd, 60.0) * 0.6 + pow(sd, 6.0) * 0.18);

    float up = smoothstep(-0.02, 0.25, h);
    if (uStars > 0.0) {
      vec3 cell = floor(d * 420.0);
      float s = hash(cell);
      float twinkle = 0.7 + 0.3 * sin(uTime * 2.0 + s * 60.0);
      col += vec3(step(0.9975, s) * 3.0 * twinkle) * uStars * up;
      col += vec3(step(0.9993, hash(cell + 3.1)) * 8.0) * uStars * up * vec3(0.8, 0.9, 1.0);
    }
    if (uNebula > 0.0) {
      float n = fbm(d * 3.0 + vec3(0.0, uTime * 0.005, 0.0));
      float m = fbm(d * 6.0 - 4.0);
      vec3 neb = mix(vec3(0.55, 0.1, 0.8), vec3(1.0, 0.25, 0.65), m) * pow(n, 3.0) * 3.2;
      col += neb * uNebula * up;
    }
    if (uAurora > 0.0) {
      float band = smoothstep(0.08, 0.3, h) * smoothstep(0.75, 0.35, h);
      float wave = sin(d.x * 7.0 + sin(d.z * 5.0 + uTime * 0.25) * 2.2 + uTime * 0.1);
      float curtain = pow(max(wave, 0.0), 6.0) * fbm(vec3(d.xz * 9.0, uTime * 0.08));
      col += mix(vec3(0.1, 1.0, 0.6), vec3(0.6, 0.3, 1.0), smoothstep(0.2, 0.6, h)) * curtain * band * 2.2 * uAurora;
    }
    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,Bc=`
  varying vec3 vNormal;
  varying vec3 vLocal;
  void main() {
    vNormal = normalize(mat3(modelMatrix) * normal);
    vLocal = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,wf=`
  uniform vec3 uColor, uSunDir, uHaze;
  varying vec3 vNormal;
  varying vec3 vLocal;
  float hash(float n) { return fract(sin(n) * 43758.5453); }
  void main() {
    float lat = normalize(vLocal).y;
    float bands = sin(lat * 18.0 + sin(lat * 7.0) * 2.0) * 0.5 + 0.5;
    vec3 col = uColor * (0.75 + 0.35 * bands);
    float lit = max(dot(normalize(vNormal), normalize(uSunDir)), 0.0);
    col *= 0.08 + 1.1 * lit;
    float rim = pow(1.0 - abs(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0))), 3.0);
    col = mix(col, uHaze, 0.35); // seen through the planet's own air
    gl_FragColor = vec4(col + uColor * rim * 0.15, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,FA=`
  uniform vec3 uColor, uHaze;
  varying vec3 vLocal;
  void main() {
    float r = length(vLocal.xy);
    float t = clamp((r - 1.35) / 0.9, 0.0, 1.0);
    float bands = 0.55 + 0.45 * sin(t * 60.0) * sin(t * 13.0 + 1.0);
    float alpha = smoothstep(0.0, 0.08, t) * smoothstep(1.0, 0.85, t) * bands * 0.85;
    gl_FragColor = vec4(mix(uColor, uHaze, 0.3), alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,dn=i=>new lt(i);function kA(i,t,e){const n=new Wt;n.position.copy(t);const s=new A(...i.sun[2]).normalize(),r=dn(i.haze[0]).multiplyScalar(.55),o={uZenith:{value:dn(i.sky[0])},uHorizon:{value:dn(i.sky[1])},uGround:{value:r},uSunColor:{value:dn(i.sun[0])},uSunDir:{value:s},uStars:{value:i.stars??0},uAurora:{value:i.aurora??0},uNebula:{value:i.nebula??0},uTime:{value:0}},a=new ft(new Rn(e,48,24),new te({uniforms:o,vertexShader:UA,fragmentShader:OA,side:Fe,depthWrite:!1,fog:!1}));a.renderOrder=-2,a.frustumCulled=!1,n.add(a);const c=i.body;if(c){const l=new A(...c.dir).normalize(),h=l.clone().multiplyScalar(e*.82),u=c.size*(e/850),d=new ft(new Rn(u,48,32),new te({uniforms:{uColor:{value:dn(c.color)},uSunDir:{value:s},uHaze:{value:dn(i.sky[1])}},vertexShader:Bc,fragmentShader:wf,depthWrite:!1,fog:!1}));if(d.position.copy(h),d.rotation.set(.35,.8,.25),d.renderOrder=-1,n.add(d),c.ring){const g=new ft(new Zl(u*1.35,u*2.25,96,1),new te({uniforms:{uColor:{value:dn(c.ring)},uHaze:{value:dn(i.sky[1])}},vertexShader:Bc.replace("vLocal = position;","vLocal = position / "+u.toFixed(3)+";"),fragmentShader:FA,transparent:!0,depthWrite:!1,side:on,fog:!1}));g.position.copy(h);const v=l.clone().multiplyScalar(-.45).add(new A(.15,1,0)).normalize();g.quaternion.setFromUnitVectors(new A(0,0,1),v),g.renderOrder=-1,n.add(g)}const f=new ft(new Rn(u*.18,24,16),new te({uniforms:{uColor:{value:dn(i.rock).lerp(dn(16777215),.5)},uSunDir:{value:s},uHaze:{value:dn(i.sky[1])}},vertexShader:Bc,fragmentShader:wf,depthWrite:!1,fog:!1}));f.position.copy(new A(-c.dir[0]*.7,.45,c.dir[2]*.4).normalize().multiplyScalar(e*.8)),f.renderOrder=-1,n.add(f)}return{group:n,update(l){o.uTime.value+=l}}}function zA(i,t,e){const n=Math.ceil(t.width/e)+1,s=Math.ceil(t.depth/e)+1,r=new Float32Array(n*s).fill(1e9);for(let l=0;l<i.count;l++){const h=Math.round((i.x[l]-t.minX)/e),u=Math.round((i.z[l]-t.minZ)/e);h>=0&&u>=0&&h<n&&u<s&&(r[u*n+h]=0)}const[o,a]=[e,e*Math.SQRT2],c=(l,h,u)=>{r[h]+u<r[l]&&(r[l]=r[h]+u)};for(let l=0;l<s;l++)for(let h=0;h<n;h++){const u=l*n+h;h>0&&c(u,u-1,o),l>0&&(c(u,u-n,o),h>0&&c(u,u-n-1,a),h<n-1&&c(u,u-n+1,a))}for(let l=s-1;l>=0;l--)for(let h=n-1;h>=0;h--){const u=l*n+h;h<n-1&&c(u,u+1,o),l<s-1&&(c(u,u+n,o),h<n-1&&c(u,u+n+1,a),h>0&&c(u,u+n-1,a))}return(l,h)=>{const u=Math.min(n-1.001,Math.max(0,(l-t.minX)/e)),d=Math.min(s-1.001,Math.max(0,(h-t.minZ)/e)),[f,g]=[Math.floor(u),Math.floor(d)],[v,m]=[u-f,d-g],p=g*n+f,_=r[p]+(r[p+1]-r[p])*v,x=r[p+n]+(r[p+n+1]-r[p+n])*v,b=_+(x-_)*m,R=Math.hypot(Math.max(0,t.minX-l,l-(t.minX+t.width)),Math.max(0,t.minZ-h,h-(t.minZ+t.depth)));return b+R}}function BA(i,t,e,n,s=qs.segments){const r=qs,o=70,a={minX:e.minX-o,minZ:e.minZ-o,width:e.width+2*o,depth:e.depth+2*o},c=zA(t,a,r.cell),l=t.halfWidth+Ma+Ji,h=(w,T)=>c(w,T)-l,u=(w,T)=>{const L=h(w,T);if(L<r.flat)return-.01;const S=Me(r.flat,r.flat+r.rise,L),M=(n.fbm(w,T,70,4)*.5+.35)*r.hills*S,D=n.ridge(w+500,T-300,160,5)*i.peaks*Me(60,260,L);return M+D-.01},d=Math.max(e.width,e.depth)+2*r.reach,f=new Pe(d,d,s,s).rotateX(-Math.PI/2),g=f.attributes.position,v=new Float32Array(g.count*3),[m,p,_,x]=[...i.ground,i.apron].map(w=>new lt(w)),b=new lt;for(let w=0;w<g.count;w++){const T=g.getX(w)+e.cx,L=g.getZ(w)+e.cz,S=u(T,L);g.setXYZ(w,T,S,L);const M=Me(0,i.peaks*.7,S);b.copy(m).lerp(p,M),b.lerp(_,Me(.15,.55,n.fbm(T,L,24,3))*.6*(1-M)),b.multiplyScalar(.85+.3*n(T*.35,L*.35)),b.lerp(x,1-Me(1.5,r.flat+3,h(T,L))),b.toArray(v,w*3)}f.setAttribute("color",new ce(v,3)),f.computeVertexNormals();const R=new ft(f,new Kt({vertexColors:!0,roughness:.92,metalness:0}));return R.receiveShadow=!0,R.userData.terrain=!0,{mesh:R,heightAt:u,clearance:h}}function HA(){const i=new Ai(.16,.34,1,8,6,!0).translate(0,.5,0),t=i.attributes.position;for(let e=0;e<t.count;e++){const n=t.getY(e);t.setX(e,t.getX(e)+Math.sin(n*2.2)*.22*n)}return i.computeVertexNormals(),i}function VA(){const i=new Rn(1,16,10,0,Math.PI*2,0,Math.PI*.62),t=i.attributes.position;for(let e=0;e<t.count;e++){const[n,s,r]=[t.getX(e),t.getY(e),t.getZ(e)],o=Math.atan2(r,n),a=1+.08*Math.sin(o*7)*(1-s);t.setXYZ(e,n*a*1.5,s*.75-.25,r*a*1.5)}return i.computeVertexNormals(),i}const Ef=Math.sin(2.2)*.22;function Tf(i,t){const e=new jl(1,2),n=e.attributes.position,s=new A;for(let o=0;o<n.count;o++){s.fromBufferAttribute(n,o);const a=1+.28*(i(s.x*1.7+t,s.z*1.7+s.y*1.3)-.5)*2;s.multiplyScalar(a),s.y*=.7,n.setXYZ(o,s.x,s.y,s.z)}const r=e.toNonIndexed();return r.computeVertexNormals(),r}function GA(){const i=(t,e,n,s)=>new Kl(1,0).scale(.28,t,.28).translate(0,t*.7,0).rotateZ(e).rotateX(n).rotateY(s);return sr([i(1.6,0,0,0),i(1.1,.35,.1,1.2),i(.9,-.3,.25,2.4),i(.7,.1,-.4,3.9)])}function Ss(i,t,e,n=!0){const s=new ji(i,t,Math.max(1,e));return s.count=0,s.castShadow=n,s.receiveShadow=!0,s}function WA(i,t,e,n,s,r){const o=qs,a=i.density,c=new Wt,l=new Pt,h=new Nn,u=new A,d=new A,f=new lt,g=i.night?1:0,v=Math.max(e.width,e.depth)/2+o.reach*.75,m=(U,q,$=v)=>{for(let Q=0;Q<30;Q++){const dt=n()*Math.PI*2,_t=Math.sqrt(n())*$,[k,K]=[e.cx+Math.cos(dt)*_t,e.cz+Math.sin(dt)*_t],at=t.clearance(k,K);if(at>=U&&at<=q)return[k,K,at]}return null},p=(U,q,$,Q,dt,_t,k,K,at=0,nt=0,St=null)=>{h.setFromEuler(new cn(at,K,nt)),l.compose(d.set(q,$,Q),h,u.set(dt,_t,k)),U.setMatrixAt(U.count,l),St&&U.setColorAt(U.count,St),U.count++},_=Math.round(o.trees*a.trees*r),x=new Kt({color:i.flora[0],roughness:.7}),b=new Kt({color:i.flora[1],roughness:.45,emissive:i.flora[1],emissiveIntensity:.12+g*.9}),R=new Kt({color:0,emissive:i.flora[2],emissiveIntensity:1.1+g*1.6}),w=Ss(HA(),x,_),T=Ss(VA(),b,_),L=Ss(new Rn(1,8,6),R,_*3+Math.round(o.glowBulbs*r),!1);for(let U=0,q=0;U<_&&q<_*6;q++){const $=m(o.flat+2,400);if(!$)continue;const[Q,dt]=$;if(s.fbm(Q,dt,55,3)<-.05)continue;const _t=3+n()*7*(.6+.4*n()),k=_t*(.35+n()*.25),K=n()*Math.PI*2,at=t.heightAt(Q,dt)-.2;f.set(i.flora[1]).offsetHSL((n()-.5)*.06,0,(n()-.5)*.12),p(w,Q,at,dt,k*.5,_t,k*.5,K);const nt=Q+Math.cos(K)*Ef*k*.5,St=dt-Math.sin(K)*Ef*k*.5;p(T,nt,at+_t,St,k,k*.8,k,K,0,0,f);for(let Et=0;Et<3;Et++){const Lt=K+Et/3*Math.PI*2+n(),F=k*1.3;p(L,nt+Math.cos(Lt)*F,at+_t-.5*k,St+Math.sin(Lt)*F,.1*k,.15*k,.1*k,0)}U++}const S=Math.round(o.glowBulbs*r);for(let U=0,q=0;U<S&&q<S*8;q++){const $=m(.6,9,Math.max(e.width,e.depth)/2+20);if(!$)continue;const[Q,dt]=$,_t=.03+n()*.06;p(L,Q,_t*.5,dt,_t,_t*1.4,_t,0),U++}L.count&&(L.instanceMatrix.needsUpdate=!0),c.add(w,T,L);const M=Math.round(o.crystals*a.crystals*r),D=new Kt({color:i.crystal,roughness:.12,metalness:.15,emissive:i.crystal,emissiveIntensity:.9+g*1.6,flatShading:!0}),O=Ss(GA(),D,M);for(let U=0,q=0;U<M&&q<M*6;q++){const $=m(o.flat,300);if(!$)continue;const[Q,dt,_t]=$,k=(.6+n()*1.6)*(_t>60?2.2:1);p(O,Q,t.heightAt(Q,dt)-.2,dt,k,k,k,n()*6.28,(n()-.5)*.4,(n()-.5)*.4),U++}c.add(O);const I=Math.round(o.rocks*a.rocks*r),z=new Kt({color:i.rock,roughness:.85,flatShading:!0}),X=Ss(Tf(s,3),z,I);for(let U=0,q=0;U<I&&q<I*6;q++){const $=m(o.flat-2,500);if(!$)continue;const[Q,dt,_t]=$,k=(.4+n()*1.4)*(1+Math.min(4,_t/40));f.set(i.rock).offsetHSL(0,0,(n()-.5)*.1),p(X,Q,t.heightAt(Q,dt)-k*.25,dt,k*(.8+n()*.6),k,k*(.8+n()*.6),n()*6.28,0,0,f),U++}c.add(X);const Y=Math.round(o.floaters*a.floaters*Math.min(1,r*1.2)),et=Ss(Tf(s,11),z,Y,!1);for(let U=0;U<Y;U++){const q=n()*Math.PI*2,$=70+n()*230,[Q,dt]=[e.cx+Math.cos(q)*($+e.width/2),e.cz+Math.sin(q)*($+e.depth/2)],_t=4+n()*14;f.set(i.rock).offsetHSL(0,0,(n()-.5)*.1),p(et,Q,25+n()*70+t.heightAt(Q,dt)*.5,dt,_t*1.4,_t*.9,_t*1.2,n()*6.28,0,0,f)}c.add(et);for(const U of c.children)U.instanceMatrix.needsUpdate=!0,U.instanceColor&&(U.instanceColor.needsUpdate=!0);return c}function XA(i,t){const e=[];for(const f of R0(i))$0(f,e);const n=A0(i),s=vl*.8,r=new ji(new q0(Tr*.96,s,Ji,2,.07),new Kt({color:2106414,roughness:.32,metalness:.85}),e.length),o=new ji(new me(Tr*.8,.05,.1),new Kt({color:0,emissive:t,emissiveIntensity:4}),e.length),a=new ji(new me(Tr*.5,.03,Ji+.01),new Kt({color:0,emissive:t,emissiveIntensity:1.6}),e.length),c=new Pt,l=new Nn,h=new A(1,1,1),u=new A(0,1,0);e.forEach((f,g)=>{l.setFromAxisAngle(u,f.angle),r.setMatrixAt(g,c.compose(new A(f.x,s/2,f.z),l,h)),o.setMatrixAt(g,c.compose(new A(f.x,s+.02,f.z),l,h)),a.setMatrixAt(g,c.compose(new A(f.x,s*.45,f.z),l,h))}),r.castShadow=Pp,r.receiveShadow=!0;const d=new Wt;return d.add(r,o,a),{mesh:d,faces:n,blocks:e}}const _r=45;function qA(i,t){const e=new Wt,n=new lt(i.sky[1]).lerp(new lt(i.sky[0]),.4);e.add(new Tp(n,new lt(i.ground[0]),i.night?.85:.9));const[s,r,o]=i.sun,a=new A(...o).normalize().multiplyScalar(90);a.y=Math.max(a.y,25);const c=new el(s,r);c.position.set(t.cx,0,t.cz).add(a),c.target.position.set(t.cx,0,t.cz),c.castShadow=!0,c.shadow.mapSize.set(Cr,Cr),c.shadow.bias=Rp,c.shadow.normalBias=Cp;const l=c.shadow.camera;return[l.left,l.right,l.top,l.bottom]=[-_r,_r,_r,-_r],l.near=5,l.far=200,l.updateProjectionMatrix(),e.add(c,c.target),{group:e,follow:j0(c,_r,a)}}const $A=i=>`#${new lt(i).getHexString()}`;function YA(i,t){const e=gb(i.id),n=NA(i.id),s=nr(n),r=DA(n),o=bh(i),a=o.nearest(...i.waypoints[i.startIndex]),c=o.wrap(a-Math.round(fh/o.spacing)),l=XA(o,e.accent),h=C0(l.faces,z0+Ji),u=new K0(o,a),d=X0(o,Ht),f=qA(e,h),g=BA(e,o,h,r,Ns==="low"?140:qs.segments),v=kA(e,new A(h.cx,0,h.cz),qs.skyRadius),m=new lt(e.apron).lerp(new lt(e.night?9081e3:6975616),.6),p=new Wt;p.add(v.group,g.mesh,V0(o,a,c,t,{surface:m,line:e.accent,glow:e.night?new lt(e.accent).lerp(m,.7).multiplyScalar(.08):0}),G0(o,{a:$A(e.accent),b:"#1c1f28"}),l.mesh,WA(e,g,h,s,r,vb[Ns]??1),f.group,u.group);const _=new U0([...l.faces,P0(h)],Gp),x=u0(o),b=new W0(o,d,x),R=new lt(e.haze[0]);return{track:i,group:p,path:o,line:d,curbs:x,surface:b,startIndex:a,gridIndex:c,bounds:h,collider:_,gantry:u,lighting:f,anchors:Z0(o),planet:e,atmosphere:{background:R,fog:R,density:e.haze[1],exposure:e.night?1.15:1},update:w=>v.update(w)}}const Hc=34;function jA(i,t,e,n){const[s,r]=[Math.ceil(t.width),Math.ceil(t.depth)],o=new Uint8Array(s*r),a=Math.ceil(i.halfWidth+2.5),c=Math.max(1,Math.round(1/i.spacing));for(let f=0;f<i.count;f+=c){const[g,v]=[Math.floor(i.x[f]-t.minX),Math.floor(i.z[f]-t.minZ)];for(let m=-a;m<=a;m++)for(let p=-a;p<=a;p++){const[_,x]=[g+m,v+p];_>=0&&x>=0&&_<s&&x<r&&m*m+p*p<=a*a&&(o[x*s+_]=1)}}const l=(f,g)=>{const[v,m]=[Math.floor(f-e/2-t.minX),Math.floor(g-n/2-t.minZ)];if(v<2||m<2||v+e>s-2||m+n>r-2)return!1;for(let p=m;p<=m+n;p++)for(let _=v;_<=v+e;_++)if(o[p*s+_])return!1;return!0},h=i.x.reduce((f,g)=>f+g,0)/i.count,u=i.z.reduce((f,g)=>f+g,0)/i.count,d=[];for(let f=t.minX;f<=t.maxX;f+=2)for(let g=t.minZ;g<=t.maxZ;g+=2)d.push({x:f,z:g,d:(f-h)**2+(g-u)**2});return d.sort((f,g)=>f.d-g.d),l(h,u)?{x:h,z:u}:d.find(f=>l(f.x,f.z))??null}function KA(i,t){if(oe)return YA(i,t);const e=bh(i),n=e.nearest(...i.waypoints[i.startIndex]),s=e.wrap(n-Math.round(fh/e.spacing)),r=wA(e),o=C0(r.faces,z0+Ji),a=new K0(e,n),c=TA(o),l=jA(e,o,Hc,Hc/4),h=X0(e,Ht),u=PA(o),d=new Wt;d.add(sA(o,t),...l?[rA(l.x,l.z,Hc)]:[],V0(e,n,s,t),vA(e,h),G0(e),r.mesh,EA(o,t),c.group,CA(o),u.group,...Ze.haze?[RA(c.lights)]:[],a.group),c.group.userData.ceiling=!0;const f=new U0([...r.faces,P0(o)],Gp),g=u0(e),v=new W0(e,h,g);return{track:i,group:d,path:e,line:h,curbs:g,surface:v,startIndex:n,gridIndex:s,bounds:o,collider:f,gantry:a,rig:c,lighting:u,anchors:Z0(e)}}function Ah(i){const t=new Set,e=n=>{var s;!n||t.has(n)||(t.add(n),(s=n.dispose)==null||s.call(n))};i.traverse(n=>{var s,r;e(n.geometry);for(const o of[n.material].flat())if(o){for(const a of Object.values(o))a!=null&&a.isTexture&&e(a);e(o)}n.isLight&&((r=(s=n.shadow)==null?void 0:s.dispose)==null||r.call(s)),n.isInstancedMesh&&n.dispose()})}function ZA(i){const{bus:t,sfx:e,camera:n,screens:s}=i;t.on("light",()=>e.beep("red")),t.on("go",()=>e.beep("go")),t.on("lap",r=>{if(e.chime(r.isBest),r.isBest){const{session:o}=i,a=i.recorder.take()??i.record.ghost;i.record={best:r.time,splits:o.timer.bestSplits,ghost:a},zw(i.signature,r.time,o.timer.bestSplits,a,i.recordKey),o.mode==="timeattack"&&i.ghost.set(a),s.setBest(r.time)}}),t.on("finish",()=>{e.chime(i.field.position(i.field.player)===1),n.broadcast(),s.showOnlinePause(!1),s.showResults(!0),i.hud.setVisible(!1)}),t.on("impact",r=>{e.impact(r),n.shake(Math.min(.85,r/9))}),t.on("pause",r=>s.showPause(r))}function JA(i,t,e,n,s=0,r=0){let o=1/0;for(const l of t)l.ahead>.5&&l.ahead<Ht.blockAhead&&Math.abs(l.lateral-e)<Ht.blockLateral&&(o=Math.min(o,l.speed-.4));const a=t[i.target];(!a||!QA(a,e))&&Object.assign(i,t3(t,e,n));const c=t[i.target];return i.wait=Math.max(0,(i.wait??0)-s),!c||c.ahead>=Ht.pullOutAhead||i.wait>0?{pass:0,speedCap:o}:(i.out||(i.side=r||(c.lateral>0?-1:1)),i.out=(i.out??0)+s,i.out>Ht.passGiveUp&&c.ahead>Ht.passAlongside?(Object.assign(i,{out:0,wait:Ht.passRetry}),{pass:0,speedCap:o}):{pass:i.side*Ht.passOffset,speedCap:o})}const QA=(i,t)=>i.ahead>-1.5&&i.ahead<=Ht.sightKeep&&Math.abs(i.lateral-t)<=Ht.passOffset+Ht.lineMax;function t3(i,t,e){let n=-1;return i.forEach((s,r)=>{s.ahead<=.5||s.ahead>Ht.sightAhead||Math.abs(s.lateral-t)>Ht.sightLateral||s.speed>=e+1.5||(n<0||s.ahead<i[n].ahead)&&(n=r)}),n<0?{target:-1,side:0,out:0,wait:0}:{target:n,side:0,out:0}}function e3(i,t){let e=0;for(let n=0;n<Ht.passLook;n+=1)e+=i.curvature[i.wrap(t+Math.round(n/i.spacing))];return Math.abs(e)>Ht.passTurn?Math.sign(e):0}const Af=new WeakMap;function n3(i,t){const e=Af.get(i);if(e)return e;const n=i.length,s=Math.max(1,Math.round(Ht.cornerWindow/t.spacing));let r=0;for(let c=0;c<n;c++)r=Math.max(r,i[c]);const o=[];for(let c=0;c<n;c++){if(i[c]>Ht.cornerBelow*r)continue;let l=!0;for(let h=-s;h<=s&&l;h++){const u=t.wrap(c+h);(i[u]<i[c]||i[u]===i[c]&&u<c)&&(l=!1)}l&&o.push(c)}const a=new Int32Array(n).fill(-1);if(o.length){let c=0;for(let l=o.length-1;l>=0;l--){const h=o[(l-1+o.length)%o.length];for(let u=o[l];a[u]=o[l],!(u===t.wrap(h+1)||++c>n);u=t.wrap(u-1));}}return Af.set(i,a),a}function i3(i,t,e){const n=(e()+e()+e()-1.5)*2*(i.sigma??0),s=(i.mistakes??0)*(t?Ht.pressureMistakes:1);if(e()>=s)return{factor:1+n,mistake:null};const r=Ht.mistakeMin+e()*(Ht.mistakeMax-Ht.mistakeMin);return e()<Ht.mistakeHot?{factor:1+r,mistake:"hot"}:{factor:1-r,mistake:"early"}}function s3(i,t,e){let n=null;for(const s of i)s.ahead>=-.3||s.ahead<-5||Math.abs(s.lateral-t)>Ht.defendLateral||s.speed<e-1||(!n||s.ahead>n.ahead)&&(n=s);return n}function r3(i,t,e,n,s,r,o){return i.hold=Math.max(0,(i.hold??0)-r),i.cool=Math.max(0,(i.cool??0)-r),i.hold>0&&e!==-i.side?i.side:(i.side=0,!t||!e||i.cool>0||i.corner===n||(i.corner=n,o()>=Ht.defendOdds*s)?0:(Object.assign(i,{side:e,hold:Ht.defendHold,cool:Ht.defendHold+Ht.defendCool}),e))}const Rf={throttle:0,brake:0,steer:0,handbrake:!1},o3={pace:1,sigma:0,mistakes:0};class a3{constructor(t,e,n,s=1){this.profile=n,this.level=o3,this.setTrack(t,e,s)}setTrack(t,e,n=1){Object.assign(this,{path:t,line:e,trackPace:n,plan:t&&vh(t,e)}),this.corners=t&&n3(this.plan,t),this.reset()}reset(t=Math.random){this.index=-1,this.pass=0,this.passMemo={target:-1,side:0,out:0,wait:0},this.stuck=0,this.wait=this.profile.react+t()*.12,this.form=1+(t()-.5)*Ht.formSpread,this.random=t,this.qualifying??(this.qualifying=!1),this.corner=-2,this.take={factor:1,mistake:null},this.defence={corner:-1,side:0,hold:0,cool:0},this.log={mistakes:0,defences:0},this.cover=0,this.coverSide=0,this.covering=0}controls(t,e,n,s,r,o=!0){if(!o||(this.wait-=r)>0)return Rf;const a=this.path;this.index=a.nearest(t.x,t.z,this.index);const c=a.lateral(t.x,t.z,this.index),l=this.profile.skill*s*this.form,h=s3(n,c,e),u=this.corners[this.index];u!==this.corner&&(this.corner=u,this.take=i3(this.level,!!h,this.random),this.take.mistake&&this.log.mistakes++);const d=e3(a,this.index),{pass:f,speedCap:g}=JA(this.passMemo,n,c,e,r,d);this.pass=Ce(this.pass,f,Ht.offsetRate,r);const v=this.profile.aggression??.5,m=f||this.qualifying?0:r3(this.defence,h,d,u,v,r,this.random);m&&m!==this.covering&&this.log.defences++,this.covering=m,m&&(this.coverSide=m),this.cover=Ce(this.cover,m?1:0,Ht.offsetRate,r);const p=Math.round((ee.lookAhead+e*ee.lookSpeed)/a.spacing),_=a.wrap(this.index+p),x=bA(a,this.index,p,this.profile.line),b=this.line[_]+(this.coverSide*Ht.defendInside-this.line[_])*this.cover,R=gt(b+x+this.pass,-a.halfWidth+.85,a.halfWidth-.85),w=a.offset(_,R),T=Math.abs(this.pass)>1?1+Ht.attack*(.5+v):1,L=1-(1-Ht.defendPace)*this.cover,S=gh(this.plan,a,this.index,e,{skill:l*T*L*this.take.factor*this.trackPace*this.level.pace,ahead:ee.planAhead,maxSpeed:ee.maxSpeed}),M=Math.min(S,g),D=g0(t,w,e);return this.stuck=e<1?this.stuck+r:0,{...mh(e,M,D,t.slipAngle),steer:D,handbrake:!1,reset:this.stuck>Ht.stuckTime}}}function c3(i,t,e){const n=new Array(i.length).fill(0),s=t*2;for(let r=0;r<i.length;r++)for(let o=r+1;o<i.length;o++){const a=i[r],c=i[o],l=c.x-a.x,h=c.z-a.z,u=l*l+h*h;if(u>=s*s||u<1e-8)continue;const d=Math.sqrt(u),[f,g]=[l/d,h/d],v=(s-d)/2;a.x-=f*v,a.z-=g*v,c.x+=f*v,c.z+=g*v;const m=(a.vx-c.vx)*f+(a.vz-c.vz)*g;if(m<=0)continue;const p=m*(1+e)/2;a.vx-=p*f,a.vz-=p*g,c.vx+=p*f,c.vz+=p*g,n[r]=Math.max(n[r],m),n[o]=Math.max(n[o],m)}return n}function l3(i,t,e){return i.map(n=>{const s=bi(n.yaw);let r=0;for(const o of i){if(o===n)continue;const a=o.x-n.x,c=o.z-n.z,l=a*s.x+c*s.z;if(l<1.2||l>t)continue;const h=Math.abs(a*s.z-c*s.x);h>e||(r=Math.max(r,(1-l/t)*(1-h/e)))}return Math.min(1,r*1.6)})}const h3=i=>Math.min(Ps.max,Math.max(Ps.min,i/Ps.pace*Ps.laps));function u3(i,t,e){const n=Math.round(Ps.lead/i.spacing),s=i.count-2*n;return Array.from({length:e},(r,o)=>i.wrap(t+n+Math.round(o*s/e)))}function d3(i){return[...i].sort((t,e)=>(t.bestLap??1/0)-(e.bestLap??1/0))}function f3(i,t,e){const n=i.count;return e.map(s=>{let r=s.index-t.index;return r=r>n/2?r-n:r<-n/2?r+n:r,{ahead:r*i.spacing,lateral:i.lateral(s.state.x,s.state.z,s.index),speed:s.speed}})}const p3=i=>1+gt(i/Ht.catchUpGap,0,1)*Ht.catchUp;function Cf(i,t,e=Math.random){const n=Array.from({length:i+1},(s,r)=>r).filter(s=>s!==t);for(let s=n.length-1;s>0;s--){const r=Math.floor(e()*(s+1));[n[s],n[r]]=[n[r],n[s]]}return n}const m3=i=>Cw[i]??1;function g3(i){return Un.map(t=>{const e=new uh(null,{number:t.number,livery:{body:t.body,suit:t.suit,helmet:t.body,helmetStripe:t.stripe}});return i.add(e.object3d),{profile:t,kart:e,driver:new a3(null,null,t),fx:new dh(i),kerb:new d0,index:-1}})}function J0(i){const{path:t,collider:e,line:n,track:s,surface:r}=i.world;i.kart.collider=e,i.kart.surface=r;for(const o of i.rivals)o.kart.collider=e,o.kart.surface=r,o.driver.setTrack(t,n,m3(s.id)),o.driver.level=jn[i.difficulty];i.autopilot.setPath(t)}function Rh(i,t,e=null){(t===!0||t===!1)&&(t=t?"grid":"solo");const{path:n,startIndex:s,gridIndex:r,line:o}=i.world,a=i.rivals.length+1;let c;if(t==="quali"){const u=Cf(i.rivals.length,-1),d=u3(n,s,a);c=u.map(f=>{const g=d[f],v=n.offset(g,o[g]);return{x:v.x,z:v.z,yaw:n.heading(g),i:g}})}else{const u=t==="qualified"&&e?e:null,d=u?Math.max(0,u.indexOf("YOU")):Ln.playerSlot,f=Cf(i.rivals.length,d),g=(v,m)=>u&&u.includes(v.profile.code)?u.indexOf(v.profile.code):f[m];c=[yl(n,s,d),...i.rivals.map((v,m)=>yl(n,s,g(v,m)))]}const l=t==="solo",h=l?{x:n.x[r],z:n.z[r],yaw:n.heading(r),i:r}:c[0];i.kart.place(h.x,h.z,h.yaw),i.trackIndex=h.i,i.rivals.forEach((u,d)=>{const f=c[d+1];u.kart.place(f.x,f.z,f.yaw),u.kart.object3d.visible=!l,u.index=f.i,u.driver.reset(),u.driver.qualifying=t==="quali",u.fx.reset(),u.kerb.reset()}),i.fx.reset(),i.kerb.reset()}function Q0(i,t,e,n=i.rivals,s=[]){var l;const{path:r}=i.world,o=[{kart:i.kart,index:i.trackIndex},...n],a=h=>({state:h.kart.state,index:h.index,speed:h.kart.telemetry.speed}),c=i.field.player.progress;for(const h of n){const u=h.kart.state,d=f3(r,h,[...o.filter(p=>p!==h).map(a),...s]),f=(c-(((l=i.field.entries.find(p=>p.profile===h.profile))==null?void 0:l.progress)??c))*r.spacing,g=i.field.entries.find(p=>p.profile===h.profile),v=i.field.timed?(g==null?void 0:g.finishTime)!=null?.85:1:p3(f),m=h.driver.controls(u,h.kart.telemetry.speed,d,v,t,e);m.reset?x3(i,h):h.kart.update(m,t),h.index=r.nearest(h.kart.state.x,h.kart.state.z,h.index),h.kerb.update(h.kart,r,i.world.curbs,h.index,t),h.fx.update(h.kart,t,i.camera.three,i.renderer.three.domElement.height)}v3(o.map(h=>h.kart),s.map(h=>h.state))}function v3(i,t){const e=i.map(r=>r.state);for(const r of t)e.push({...r});const n=c3(e,tf.radius,tf.restitution),s=l3(e,Qd.range,Qd.lateral);i.forEach((r,o)=>{r.draft=s[o],n[o]>r.telemetry.impact&&(r.telemetry.impact=n[o],Object.assign(r.contact,{x:r.state.x,z:r.state.z,nx:0,nz:0}))})}function x3(i,t){const{path:e}=i.world,n=e.nearest(t.kart.state.x,t.kart.state.z,t.index),s=e.offset(n,t.driver.line[n]);t.kart.place(s.x,s.z,e.heading(n)),t.driver.stuck=0,t.index=n}const _3=()=>[{code:xl.code,name:xl.name,color:Ko.body},...Un.map(i=>({code:i.code,name:i.name,color:i.body}))];function tm(i){return(!i.season||_h(i.season))&&(i.season=eE(Ue.map(t=>t.id),_3(),i.difficulty),yh(i.season),i.screens.setSeason(Mh(i.season))),i.season}function Cl(i){const t=nE(tm(i));i.track.id!==t&&i.loadTrack(or(t)),i.qualiGrid=null,i.roundScored=!1,i.screens.showSeason(!1),Os(i,"quali")}function M3(i){const t=i.field.entries.map(e=>({code:e.code,bestLap:e.bestLap}));i.qualiGrid=d3(t).map(e=>e.code),Os(i,"champ")}function Pf(i,t=!0){if(!i.roundScored){const e=i.field.order.map(r=>({code:r.code,bestLap:r.bestLap})),{season:n,scored:s}=iE(i.season,e);Object.assign(i,{season:n,lastScored:s,roundScored:!0}),yh(n),i.screens.setSeason(Mh(n))}t&&(i.screens.showResults(!1),i.screens.showSeason(!0,i.season,i.lastScored,i.season.rounds.map(e=>or(e).name)))}function Lf(i){i.season=null,yh(null),tm(i),Cl(i)}const Pl=i=>i==="race"||i==="champ"||i==="quali";function Os(i,t=i.session.mode,e){i.audio.unlock();const n=t==="quali"?"quali":t==="champ"?"qualified":Pl(t)?"grid":"solo";Rh(i,n,i.qualiGrid),t!=="online"&&(i.field=t==="quali"?i.qualiField:i.soloField),i.field.reset(),i.recorder.reset(),i.ghost.set(i.record.ghost),i.camera.follow(i.kart),t==="quali"?i.session.startSession(t,h3(i.world.path.length)):i.session.startCountdown(t,e),i.screens.showTitle(!1),i.screens.showPause(!1),i.screens.showResults(!1),i.screens.showSeason(!1),i.hud.setMode(t),i.hud.clearToasts(),i.hud.setVisible(!0)}function Es(i){i.session.toTitle(),i.field=i.soloField,Rh(i,"grid"),i.autopilot.index=-1,i.camera.broadcast(),i.screens.showPause(!1),i.screens.showResults(!1),i.screens.showSeason(!1),i.screens.showTitle(!0),i.hud.clearToasts(),i.hud.setVisible(!1)}function em(i){const{path:t}=i.world,{x:e,z:n}=i.kart.state,s=t.nearest(e,n,i.trackIndex);i.kart.place(t.x[s],t.z[s],t.heading(s)),i.bus.emit("reset")}function Sr(i){return i.action("raceAgain")||i.action("reset")?"again":i.action("nextRace")?"next":i.action("pause")||i.action("quit")?"menu":null}function y3(i){var a;const{input:t,camera:e,bus:n,screens:s}=i,r=i.session,o=r.state;if(o==="title"){if(s.lobby.visible)return;t.action("left")&&s.cycleMode(-1),t.action("right")&&s.cycleMode(1),t.action("level")&&i.setDifficulty(s.cycleLevel()),t.action("graphics")&&((a=s.graphics)==null||a.cycle()),t.action("prevTrack")&&i.selectTrack(-1),t.action("nextTrack")&&i.selectTrack(1),t.action("start")&&(s.mode==="online"?s.openLobby():s.mode==="champ"?Cl(i):Os(i,s.mode))}else if(s.season.visible){const c=Sr(t);c==="again"?i.season.round>=i.season.rounds.length?Lf(i):Cl(i):c==="next"?Lf(i):c==="menu"&&Es(i)}else if(r.mode==="online")i.online.handle(t,o);else if(o==="finished"&&r.mode==="quali"){const c=Sr(t);c==="again"?M3(i):c==="menu"&&Es(i)}else if(o==="finished"&&r.mode==="champ"){const c=Sr(t);c==="again"?Pf(i):c==="menu"&&(Pf(i,!1),Es(i))}else if(o==="finished"){const c=Sr(t);c==="next"&&i.selectTrack(1),c==="again"||c==="next"?Os(i):c==="menu"&&Es(i)}else{if(t.action("pause")&&r.togglePause(),t.action("quit")&&o==="paused")return Es(i);t.action("reset")&&(o==="paused"?Os(i):o==="racing"&&em(i))}o!=="title"&&t.action("camera")&&n.emit("camera",e.cycleView()),t.action("mute")&&n.emit("mute",i.audio.toggleMute()),t.action("debug")&&i.debug.toggle()}function S3(i,t,{paused:e,state:n,grandPrix:s,wallHit:r}){const{kart:o,input:a}=i,c=o.telemetry,l=!e,h=n==="countdown"?a.controls().throttle:c.throttle;i.engine.update(c,h,t,l);const u=i.online.active?i.online.others:s?i.rivals:[];i.pack.update(o.state,u.map(d=>d.kart),t,l),i.tyres.update(c,e?0:t,l,e?0:r),i.rumble.update(i.kerb,l)}const b3={throttle:0,brake:0,steer:0,handbrake:!1},w3=1.5,E3=.18,T3=.6;function A3(i,t){const e=i.kart.telemetry.speed;return t==="title"?i.autopilot.controls(i.kart.state,e):t==="finished"?i.autopilot.controls(i.kart.state,e,Rw.maxSpeed):t==="racing"?i.input.controls():b3}function R3(i,t,e,n){if(e!=="racing"||!t.throttleDigital)return i.playerThrottle=t.throttle,t;const{kart:s}=i;return i.playerThrottle=dS(i.playerThrottle??0,t.throttle,s.state.slipAngle,n,s.telemetry.speed),{...t,throttle:i.playerThrottle}}function C3(i){let t=performance.now();document.addEventListener("visibilitychange",()=>t=performance.now());const e=n=>{const s=Math.min(.05,(n-t)/1e3);t=n,s>0&&i.step(s),i.post.render(Math.max(s,0)),requestAnimationFrame(e)};requestAnimationFrame(e)}function nm(i,t){const e=i.field.position(i.field.player);e!==i.heldPosition&&([i.heldPosition,i.positionAge]=[e,0]),i.positionAge+=t,i.positionAge>=T3&&e!==i.lastPosition&&(e<i.lastPosition&&i.session.state==="racing"&&i.session.timer.lap>=1&&i.bus.emit("overtake",e),i.lastPosition=e)}function P3(i,t){var d;i.input.poll(),y3(i);const{input:e,session:n,kart:s,world:r,camera:o}=i,a=n.state,c=a==="paused",l=Pl(n.mode)||a==="title";let h=0;if(!c){if(s.update(R3(i,i.controlsFor(a),a,t),t),h=s.telemetry.impact,l&&Q0(i,t,a!=="countdown"),i.trackIndex=r.path.nearest(s.state.x,s.state.z,i.trackIndex),i.kerb.update(s,r.path,r.curbs,i.trackIndex,t),n.update(t,i.trackIndex),a==="racing"&&i.recorder.update(n.timer.lap,n.timer.lapTime(n.clock),s.state),Pl(n.mode)&&(a==="racing"||a==="finished")){const f=i.field.update([i.trackIndex,...i.rivals.map(g=>g.index)],n.clock);a==="racing"&&f.some(g=>g.isPlayer)&&n.finish(),n.mode==="quali"?(n.flagged&&i.field.flag(n.limit),a==="racing"&&n.clock>n.limit+Ps.overrun&&n.finish()):nm(i,t)}i.online.step(t),i.fx.update(s,t,o.three,i.renderer.three.domElement.height),i.impactCooldown-=t,s.telemetry.impact>w3&&i.impactCooldown<=0&&(i.bus.emit("impact",s.telemetry.impact),i.impactCooldown=E3)}const u=n.view;i.ghost.update(u.lapTime,n.mode==="timeattack"&&a==="racing"&&u.lap>=1,c?0:t),r.gantry.setLights(n.lights,n.lightsMode),r.lighting.follow(s.state.x,s.state.z),(d=r.update)==null||d.call(r,t),o.update(s,c?0:t,i.kerb),i.post.setFocus(o.mode==="broadcast"?o.three.position.distanceTo(s.object3d.position):null),s.model.setFirstPerson(o.mode==="follow"&&o.view==="cockpit"),S3(i,t,{paused:c,state:a,grandPrix:l,wallHit:h}),i.hud.update(u,s,i),i.screens.update(i),i.debug.update(t,i),e.endFrame()}function L3(i,t,e){const n=r=>r?e.find(o=>o.id===r.trim().toLowerCase()):void 0,s=n(i);return{track:s??n(t)??e[0],fromUrl:!!s,unknown:i&&!s?i:null}}function I3(i){let t=2166136261;for(const e of i){const n=Math.round(e*100);for(let s=0;s<32;s+=8)t=Math.imul(t^n>>>s&255,16777619)}return(t>>>0).toString(16).padStart(8,"0")}function D3(i,t,e){const n=`${t.count}:${t.length.toFixed(1)}`;return i.id==="tbc"?n:`${n}:${e}:${(t.halfWidth*2).toFixed(2)}:${I3(i.waypoints.flat())}`}const If=i=>{const t=[...i].sort((n,s)=>n-s),e=t.length>>1;return t.length%2?t[e]:(t[e-1]+t[e])/2};class N3{constructor({window:t=vT,best:e=xT,enough:n=L0}={}){this.window=t,this.best=e,this.enough=n,this.samples=[],this.offset=0,this.rtt=0}get ready(){return this.samples.length>=this.enough}sample(t,e,n){const s=n-t;if(!(s>=0))return;this.samples.push({rtt:s,offset:e-(t+n)/2}),this.samples.length>this.window&&this.samples.shift();const r=[...this.samples].sort((o,a)=>o.rtt-a.rtt).slice(0,this.best);this.offset=If(r.map(o=>o.offset)),this.rtt=If(r.map(o=>o.rtt))}hostNow(t){return t+this.offset}}const js=(i,t)=>e=>typeof e=="number"&&Number.isFinite(e)&&e>=i&&e<=t,Mi=(i,t)=>e=>Number.isInteger(e)&&e>=i&&e<=t,im=i=>typeof i=="boolean",Ch=i=>t=>i.includes(t),Ll=i=>t=>t===null||i(t),sm=i=>t=>t===void 0||i(t),Ci=(i,t=null)=>e=>typeof e=="string"&&[...e].length<=i&&(!t||t.test(e)),U3=(i,t)=>e=>Array.isArray(e)&&e.length===t&&e.every(i),zo=(i,t,e=0)=>n=>Array.isArray(n)&&n.length>=e&&n.length<=t&&n.every(i),O3=i=>typeof i=="object"&&i!==null&&!Array.isArray(i)&&Object.getPrototypeOf(i)===Object.prototype,Ks=i=>{const t=Object.keys(i);return e=>O3(e)&&Object.keys(e).every(n=>t.includes(n))&&t.every(n=>i[n](e[n]))},F3=new RegExp(`^[${sa}]{${kr}}$`);function k3(i=Math.random){let t="";for(let e=0;e<kr;e++)t+=sa[Math.floor(i()*sa.length)];return t}const z3=i=>typeof i=="string"&&F3.test(i),Df=i=>cT+i,B3=["full","version","racing"],Ts=js(-1e9,1e9),aa=js(0,1e5),Il=Ci(2,/^p[0-5]$/),ba=Ci(3,/^(p[0-5]|a1?[0-9])$/),Ph=Ci(ya,/^[^\u0000-\u001f\u007f-\u009f<>]+$/u),rm=Ci(3,/^[A-Z0-9]{3}$/),om=Ci(3,/^[0-9]{1,3}$/),am=Mi(0,16777215),cm=Ci(24,/^[a-z0-9-]+$/),lm=Ch(Object.keys(jn)),Dl=[df,df,4,Oc,Oc,4,Oc,4],H3=Dl.map(i=>js(-i,i)),V3=i=>Array.isArray(i)&&i.length===dT&&i.every((t,e)=>H3[e](t)),Nf={id:ba,t:Ts,s:V3,c:U3(js(-1,1),fT),i:Mi(0,1e5),p:js(-1e7,1e7),lap:Mi(0,999)},G3=Ks({id:Il,name:Ph,livery:am,number:om,code:rm,host:im}),Uf={players:zo(G3,qn,1),track:cm,level:lm},W3=Ks({id:ba,kind:Ch(["human","ai"]),name:Ph,code:rm,livery:am,number:om,slot:Mi(0,Ln.size-1),rival:sm(Mi(0,Un.length-1))}),X3=Ks({id:ba,time:Ll(aa),best:Ll(aa),dnf:im}),$e=i=>Ks({type:Ci(8),...i}),Of={hello:$e({v:Mi(0,1e6),name:Ph}),welcome:$e({v:Mi(0,1e6),you:Il,room:z3,lobby:Ks(Uf)}),refuse:$e({reason:Ch(B3)}),lobby:$e(Uf),ping:$e({t0:Ts}),pong:$e({t0:Ts,th:Ts}),start:$e({track:cm,level:lm,laps:Mi(1,99),roster:zo(W3,Ln.size,1),countdownAt:Ts,hold:js(0,5)}),kart:$e(Nf),snap:$e({th:Ts,karts:zo(Ks(Nf),Ln.size)}),finish:$e({id:ba,time:aa,best:Ll(aa)}),results:$e({entries:zo(X3,Ln.size)}),left:$e({id:Il}),bye:$e({reason:sm(Ci(16,/^[a-z-]+$/))})},Oe={hello:(i,t=ra)=>({type:"hello",v:t,name:i}),welcome:(i,t,e)=>({type:"welcome",v:ra,you:i,room:t,lobby:e}),refuse:i=>({type:"refuse",reason:i}),lobby:({players:i,track:t,level:e})=>({type:"lobby",players:i,track:t,level:e}),ping:i=>({type:"ping",t0:i}),pong:(i,t)=>({type:"pong",t0:i,th:t}),start:({track:i,level:t,laps:e,roster:n,countdownAt:s,hold:r})=>({type:"start",track:i,level:t,laps:e,roster:n,countdownAt:s,hold:r}),kart:i=>({type:"kart",...i}),snap:(i,t)=>({type:"snap",th:i,karts:t}),finish:(i,t,e)=>({type:"finish",id:i,time:t,best:e}),results:i=>({type:"results",entries:i}),left:i=>({type:"left",id:i}),bye:i=>i?{type:"bye",reason:i}:{type:"bye"}};function q3(i){let t=i;try{const n=typeof i=="string"?i:JSON.stringify(i);if(typeof n!="string"||n.length>lT)return null;typeof i=="string"&&(t=JSON.parse(i))}catch{return null}const e=t&&Object.hasOwn(Of,t.type)?Of[t.type]:null;return e&&e(t)?t:null}const $3=Un.map(i=>i.name),Y3=[...Un.map(i=>i.code),"YOU"],Ff=(i,t)=>i.toLocaleLowerCase()===t.toLocaleLowerCase();function j3(i){for(let t=0;t<qn;t++)if(!i.some(e=>e.id===`p${t}`))return`p${t}`;return null}function K3(i,t){const e=Sh(i).trim()||"Driver",n=s=>$3.some(r=>Ff(r,s))||t.some(r=>Ff(r.name,s));if(!n(e))return e;for(let s=2;s<=qn+1;s++){const r=` ${s}`,o=[...e].slice(0,ya-r.length).join("").trimEnd()+r;if(!n(o))return o}return e}function Z3(i,t){const n=(i.normalize("NFD").toUpperCase().replace(/[^A-Z]/g,"")+"DRV").slice(0,3),s=r=>Y3.includes(r)||t.some(o=>o.code===r);if(!s(n))return n;for(let r=2;r<=99;r++){const o=n.slice(0,3-String(r).length)+r;if(!s(o))return o}return n}function J3(i,t){return i==="p0"?Sl:bl.find(e=>!t.some(n=>n.livery===e.body))??bl[0]}function hm(i,t,e){const n=K3(t,e),{body:s,number:r}=J3(i,e);return{id:i,name:n,code:Z3(n,e),livery:s,number:r,host:i==="p0"}}const Q3=i=>[Sl,...bl,...Un].find(t=>t.body===i)??Sl;function tR(i,t=Math.random){const e=[...Array(Ln.size).keys()];for(let r=e.length-1;r>0;r--){const o=Math.floor(t()*(r+1));[e[r],e[o]]=[e[o],e[r]]}const s=[...i].sort((r,o)=>r.id.localeCompare(o.id)).map(({id:r,name:o,code:a,livery:c,number:l})=>({id:r,kind:"human",name:o,code:a,livery:c,number:l}));for(let r=0;s.length<Ln.size;r++){const{name:o,code:a,body:c,number:l}=Un[r];s.push({id:`a${r}`,kind:"ai",name:o,code:a,livery:c,number:l,rival:r})}return s.forEach((r,o)=>r.slot=e[o]),s}const eR=["kart","finish"],um=({state:{players:i,track:t,level:e}})=>({players:i,track:t,level:e}),Lh=i=>i.broadcast(Oe.lobby(um(i))),Ls={open(i){i.set({phase:"room",players:[hm("p0",i.state.name,[])]})},peer(i,t){i.peers.set(t,null),i.heard.set(t,i.now())},message(i,t,e){if(!i.peers.has(t)&&e.type==="hello"&&Ls.peer(i,t),!i.peers.has(t))return;i.heard.set(t,i.now());const n=i.peers.get(t);if(e.type==="hello")return n?void 0:nR(i,t,e);n&&(e.type==="ping"?iR(i,t,e):e.type==="bye"?Vc(i,t):eR.includes(e.type)&&e.id===n&&i.bus.emit("race",{from:n,msg:e}))},close:(i,t)=>Vc(i,t),update(i,t){for(const[e,n]of i.peers)t-i.heard.get(e)>(n?I0:wh)&&Vc(i,e);i.waiting&&Ls.start(i,i.waiting)},setLobby(i,{track:t=i.state.track,level:e=i.state.level}){i.set({track:t,level:e}),Lh(i)},start(i,t){if(i.waiting=sR(i)?null:t,i.waiting)return null;const{laps:e,hold:n}=t,{track:s,level:r,players:o}=i.state,a=tR(o,i.rand),c=i.now()+TT,l=Oe.start({track:s,level:r,laps:e,roster:a,hold:n,countdownAt:c});return i.racing=!0,i.broadcast(l),i.bus.emit("start",l),l}};function nR(i,t,e){const{players:n}=i.state,s=j3(n),r=e.v!==ra?"version":s?i.racing?"racing":null:"full";if(r)return i.transport.send(t,Oe.refuse(r));i.peers.set(t,s),i.set({players:[...n,hm(s,e.name,n)]}),i.transport.send(t,Oe.welcome(s,i.state.room,um(i))),Lh(i)}function iR(i,t,e){i.transport.send(t,Oe.pong(e.t0,i.now())),i.pongs.set(t,(i.pongs.get(t)??0)+1)}const sR=i=>[...i.peers].every(([t,e])=>!e||(i.pongs.get(t)??0)>=L0);function Vc(i,t){const e=i.peers.get(t);i.peers.delete(t)&&(i.heard.delete(t),i.pongs.delete(t),i.transport.drop(t),e&&(i.set({players:i.state.players.filter(n=>n.id!==e)}),i.broadcast(Oe.left(e)),Lh(i),i.bus.emit("left",e)))}const Gc=(i,t)=>i.bus.emit("race",{from:"p0",msg:t}),Bo={welcome(i,t){if(i.state.phase==="connecting"){if(t.v!==ra)return i.fail("version");i.set({phase:"room",you:t.you,room:t.room,...t.lobby}),i.pings=mT,i.nextPing=i.now()}},refuse:(i,t)=>i.fail(t.reason),lobby:(i,{players:t,track:e,level:n})=>i.state.phase==="room"&&i.set({players:t,track:e,level:n}),pong(i,t){i.clock.sample(t.t0,t.th,i.now()),i.held&&i.clock.ready&&Bo.start(i,i.held)},start(i,t){i.racing=!0,i.held=i.clock.ready?null:t,i.held||i.bus.emit("start",t)},snap:Gc,finish:Gc,results(i,t){i.racing=!1,Gc(i,t)},left:(i,t)=>i.bus.emit("left",t.id),bye:i=>i.fail("closed")},rR={open(i,t){i.hostPeer=t,i.heard.set("host",i.now()),i.send(Oe.hello(i.state.name))},close:i=>i.fail(i.state.phase==="room"?"lost":"network"),message(i,t,e){var n;t===i.hostPeer&&(i.heard.set("host",i.now()),(n=Bo[e.type])==null||n.call(Bo,i,e))},update(i,t){if(i.state.phase==="connecting"&&t-i.since>wh)return i.fail("timeout");if(i.state.phase==="room"){if(t-i.heard.get("host")>I0)return i.fail("lost");t<i.nextPing||(i.send(Oe.ping(t)),i.nextPing=t+(i.pings-- >1?gT:pT))}}};class oR{constructor({makeTransport:t,now:e=()=>performance.now()/1e3,rand:n=Math.random}){Object.assign(this,{makeTransport:t,now:e,rand:n,bus:new Jl}),this.state={phase:"choose",players:[]},this.side=null,this.heard=new Map}on(t,e){return this.bus.on(t,e)}get isHost(){return this.side===Ls}create(t,{track:e,level:n}){const s=k3(this.rand);this.begin(Ls,{isHost:!0,you:"p0",name:t,room:s,track:e,level:n}).host(s)}join(t,e){this.begin(rR,{isHost:!1,name:e,room:t}).join(t)}begin(t,e){var r;(r=this.transport)==null||r.close();const n=this.transport=this.makeTransport(),s=(o,a)=>n.on(o,c=>n===this.transport&&this.side&&a(c));return s("open",o=>this.side.open(this,o)),s("peer",o=>{var a,c;return(c=(a=this.side).peer)==null?void 0:c.call(a,this,o)}),s("close",o=>this.side.close(this,o)),s("error",o=>this.fail(o)),s("message",({from:o,data:a})=>(a=q3(a))&&this.side.message(this,o,a)),Object.assign(this,{side:t,racing:!1,clock:new N3,since:this.now()}),this.peers=new Map,this.heard=new Map,this.pongs=new Map,this.waiting=null,this.held=null,this.set({phase:"connecting",error:null,players:[],...e}),n}leave(){this.side&&(this.isHost?this.broadcast(Oe.bye("closed")):this.send(Oe.bye())),this.end({phase:"choose",error:null,players:[],room:null})}fail(t){const e=this.state.phase==="room";this.end({phase:"error",error:t}),e&&this.bus.emit("closed",t)}end(t){var e;this.side=null,(e=this.transport)==null||e.close(),this.racing=!1,this.set(t)}update(){var n;const t=this.now(),e=t-(this.stepped??t);if(this.stepped=t,e>_T)for(const[s,r]of this.heard)this.heard.set(s,r+e);(n=this.side)==null||n.update(this,t)}hostNow(){return this.isHost?this.now():this.clock.hostNow(this.now())}set(t){this.state={...this.state,...t},this.bus.emit("change",this.state)}send(t){var e;(e=this.transport)==null||e.send(this.hostPeer,t)}sendTo(t,e){for(const[n,s]of this.peers)s===t&&this.transport.send(n,e)}broadcast(t){for(const[e,n]of this.peers)n&&this.transport.send(e,t)}setLobby(t){this.isHost&&Ls.setLobby(this,t)}start(t){return this.isHost&&!this.racing?Ls.start(this,t):null}endRace(){this.racing=!1}}const aR="modulepreload",cR=function(i,t){return new URL(i,t).href},kf={},lR=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(e.map(l=>{if(l=cR(l,n),l in kf)return;kf[l]=!0;const h=l.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let g=o.length-1;g>=0;g--){const v=o[g];if(v.href===l&&(!h||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":aR,h||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),h)return new Promise((g,v)=>{f.addEventListener("load",g),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};class Ih{constructor({lag:t=0,loss:e=0,rand:n=Math.random}={}){this.lag=t,this.loss=e,this.rand=n,this.last=new Map}get active(){return this.lag>0||this.loss>0}arrival(t,e){let n=e+this.lag;const s=Math.max(2*this.lag,IT);for(let r=0;r<20&&this.rand()<this.loss;r++)n+=s;return n=Math.max(n,this.last.get(t)??-1/0),this.last.set(t,n),n}mirror(){return new Ih({lag:this.lag,loss:this.loss,rand:this.rand})}forget(t){this.last.delete(t)}}function hR(i=(t=>(t=globalThis.location)==null?void 0:t.search)()??""){const e=new URLSearchParams(i),n=gt(Number(e.get("netlag"))||0,0,PT)/1e3,s=gt(Number(e.get("netloss"))||0,0,LT);return n>0||s>0?new Ih({lag:n,loss:s}):null}const uR={reliable:!0,serialization:"json"},dR={"unavailable-id":"taken","peer-unavailable":"not-found","browser-incompatible":"offline"},fR=i=>{var t;return((t=globalThis.navigator)==null?void 0:t.onLine)===!1?"offline":dR[i]??"network"},zf=()=>performance.now()/1e3;class pR{constructor({shaper:t=hR(),loadPeer:e=()=>lR(()=>import("./bundler-DXD5IzWF.js"),[],import.meta.url)}={}){Object.assign(this,{shaper:t,loadPeer:e,bus:new Jl,conns:new Map}),this.inbound=t!=null&&t.active?t.mirror():null,this.opened=this.closed=!1,this.onOffline=()=>this._fail("offline")}on(t,e){return this.bus.on(t,e)}host(t){this._start(Df(t),e=>this._opened(e.id))}join(t){this._start(void 0,e=>this._adopt(e.connect(Df(t),uR),!0))}async _start(t,e){var r,o;if(((r=globalThis.navigator)==null?void 0:r.onLine)===!1)return queueMicrotask(()=>this._fail("offline"));this.timer=setTimeout(()=>this._fail("timeout"),wh*1e3),(o=globalThis.addEventListener)==null||o.call(globalThis,"offline",this.onOffline);let n;try{({Peer:n}=await this.loadPeer())}catch{return this._fail("network")}if(this.closed)return;const s=this.peer=new n(t,{debug:0});s.on("open",()=>e(s)),s.on("connection",a=>this._adopt(a,!1)),s.on("error",a=>this._fail(fR(a.type))),s.on("disconnected",()=>!this.closed&&!s.destroyed&&s.reconnect())}_adopt(t,e){t.on("open",()=>{this.conns.set(t.peer,t),e?this._opened(t.peer):this.bus.emit("peer",t.peer)}),t.on("data",n=>this._arrive(t.peer,()=>this.bus.emit("message",{from:t.peer,data:n}))),t.on("close",()=>this.conns.delete(t.peer)&&this._arrive(t.peer,()=>this.bus.emit("close",t.peer))),t.on("error",()=>t.close())}_opened(t){clearTimeout(this.timer),!(this.opened||this.closed)&&(this.opened=!0,this.bus.emit("open",t))}_fail(t){this.opened||this.closed||(this.close(),this.bus.emit("error",t))}_arrive(t,e){if(!this.inbound)return e();const n=zf();setTimeout(()=>!this.closed&&e(),(this.inbound.arrival(t,n)-n)*1e3)}send(t,e){var r;const n=this.conns.get(t);if(!(n!=null&&n.open))return;if(!((r=this.shaper)!=null&&r.active))return n.send(e);const s=zf();setTimeout(()=>n.open&&n.send(e),(this.shaper.arrival(t,s)-s)*1e3)}broadcast(t){for(const e of this.conns.keys())this.send(e,t)}drop(t){const e=this.conns.get(t);!e||!this.conns.delete(t)||(e.close(),queueMicrotask(()=>this.bus.emit("close",t)))}close(){var s,r;this.closed=!0,clearTimeout(this.timer),(s=globalThis.removeEventListener)==null||s.call(globalThis,"offline",this.onOffline);const{conns:t,peer:e}=this;this.conns=new Map;const n=()=>{for(const o of t.values())o.close();e==null||e.destroy()};if(!t.size)return n();setTimeout(n,(OT+(((r=this.shaper)==null?void 0:r.lag)??0))*1e3)}}const Ar=2;class mR{constructor({size:t=bT,extrapolate:e=ST}={}){this.size=t,this.extrapolate=e,this.snaps=[],this.age=null,this.spread=0}get delay(){return Math.max(yT,(this.age??0)+wT+ET*this.spread)}get newest(){return this.snaps[this.snaps.length-1]??null}push(t,e=t.t){if(this.newest&&t.t<=this.newest.t)return!1;const n=e-t.t;return this.age!==null&&(this.spread+=(Math.abs(n-this.age)-this.spread)*ff),this.age=this.age===null?n:this.age+(n-this.age)*ff,this.snaps.push(t),this.snaps.length>this.size&&this.snaps.shift(),!0}sample(t,e=this.extrapolate){const{snaps:n}=this;if(!n.length)return null;if(t<n[0].t)return Nl(n[0],n[0].s,!0);const s=this.newest;if(t>=s.t)return gR(s,t-s.t,e);let r=n.length-1;for(;n[r-1].t>t;)r--;const o=n[r-1],a=n[r],c=(t-o.t)/(a.t-o.t),l=o.s.map((h,u)=>u===Ar?h+Si(a.s[u]-h)*c:Cn(h,a.s[u],c));return l[Ar]=Si(l[Ar]),{...Nl(c<.5?o:a,l,!1),c:o.c.map((h,u)=>Cn(h,a.c[u],c)),p:Cn(o.p,a.p,c)}}}const Nl=(i,t,e)=>({s:t,c:i.c,i:i.i,p:i.p,lap:i.lap,stale:e});function gR(i,t,e){const n=Math.min(t,e),s=[...i.s],[r,o,a]=[s[3],s[4],s[6]],c=a*n,[l,h]=Math.abs(c)<1e-6?[n,0]:[Math.sin(c)/a,(1-Math.cos(c))/a];return s[0]+=r*l+o*h,s[1]+=o*l-r*h,s[3]=r*Math.cos(c)+o*Math.sin(c),s[4]=o*Math.cos(c)-r*Math.sin(c),s[Ar]=Si(s[Ar]+c),Nl(i,s,t>e)}class vR{constructor(){this.interps=new Map}push(t,e){this.interps.has(t.id)||this.interps.set(t.id,new mR),this.interps.get(t.id).push(t,e)}drop(t){this.interps.delete(t)}states(t,e,n){const s=new Map;for(const[r,o]of this.interps){const a=e??t-o.delay,c=o.sample(a,n);c&&s.set(r,{...c,t:a})}return s}}class xR{constructor(t,e){this.humans=t.filter(n=>n.kind==="human").map(n=>n.id),this.ids=t.map(n=>n.id),this.grace=e,this.done=new Map,this.gone=new Set,this.firstHuman=null}record(t,e,n,s){return this.done.has(t)||this.gone.has(t)||!this.ids.includes(t)?!1:(this.done.set(t,{time:e,best:n}),this.humans.includes(t)&&this.firstHuman===null&&(this.firstHuman=s),!0)}leave(t){this.done.has(t)||this.gone.add(t)}due(t){return this.firstHuman===null?!1:this.ids.every(n=>this.done.has(n)||this.gone.has(n))||t-this.firstHuman>=this.grace}entries(t){const e=s=>this.done.has(s)?0:this.gone.has(s)?2:1;return[...this.ids].sort((s,r)=>{const o=e(s)-e(r);return o||(e(s)===0?this.done.get(s).time-this.done.get(r).time:e(s)===1?t(r)-t(s):0)}).map(s=>{const r=this.done.get(s);return{id:s,time:(r==null?void 0:r.time)??null,best:(r==null?void 0:r.best)??null,dnf:this.gone.has(s)}})}}const Do=(i,t)=>Math.round(i*10**t)/10**t,_R=[3,3,4,3,3,4,3,4],MR=4,yR=2,SR=2;function Wc(i,t,e){const n=e.s.map((s,r)=>Do(gt(r===2?Si(s):s,-Dl[r],Dl[r]),_R[r]));return{id:i,t:Do(t,MR),s:n,c:e.c.map(s=>Do(gt(s,-1,1),yR)),i:gt(Math.round(e.i),0,1e5),p:Do(gt(e.p,-1e6,1e6),SR),lap:gt(Math.round(e.lap),0,999)}}class bR{constructor(t){this.period=1/t,this.acc=this.period}due(t){return this.acc+=t,this.acc<this.period?!1:(this.acc=Math.min(this.acc-this.period,this.period),!0)}}class wR{constructor({room:t,start:e}){Object.assign(this,{room:t,roster:e.roster,you:t.state.you,isHost:t.isHost}),this.book=this.isHost?new xR(this.roster,AT):null,this.remote=new vR,this.latest=new Map,this.ticker=new bR(this.isHost?uT:hT),this.events=[],this.results=null,this.lastFrame=this.hostSeen=t.hostNow(),this.away=!1,this.offs=[t.on("race",({msg:n})=>this.receive(n)),t.on("left",n=>this.drop(n)),t.on("closed",n=>this.events.push({type:"host-gone",reason:n}))]}update(t,{own:e=null,ai:n=[]}={}){const s=this.lastFrame=this.room.hostNow();if(!this.isHost){e&&this.ticker.due(t)&&this.room.send(Oe.kart(Wc(this.you,s,e)));const r=s-this.hostSeen>CT;r!==this.away&&this.events.push({type:"host-away",away:this.away=r});return}e&&this.latest.set(this.you,Wc(this.you,s,e));for(const r of n)this.latest.set(r.id,Wc(r.id,s,r));if(this.ticker.due(t))for(const[,r]of this.room.peers)r&&this.room.sendTo(r,Oe.snap(s,[...this.latest.values()].filter(o=>o.id!==r)));!this.results&&this.book.due(s)&&this.settle()}receive(t){const e=this.room.hostNow();if(t.type==="kart"){const{type:n,...s}=t;this.latest.set(s.id,s),this.remote.push(s,e),e-this.lastFrame>RT&&this.relay(s,e)}else if(t.type==="snap"){for(const n of t.karts)n.id!==this.you&&this.remote.push(n,e);t.karts.some(n=>n.id==="p0")&&(this.hostSeen=e)}else t.type==="finish"?this.flag(t.id,t.time,t.best):t.type==="results"&&!this.results&&(this.results=t.entries,this.events.push({type:"results",entries:t.entries}))}relay(t,e){for(const[,n]of this.room.peers)n&&n!==t.id&&this.room.sendTo(n,Oe.snap(e,[t]))}remoteStates(t,e){return this.remote.states(this.room.hostNow(),t,e)}finish(t,e){this.isHost?this.flag(this.you,t,e):this.room.send(Oe.finish(this.you,t,e))}aiFinish(t,e,n){this.isHost&&this.flag(t,e,n)}flag(t,e,n){this.isHost&&!this.book.record(t,e,n,this.room.hostNow())||(this.isHost&&this.room.broadcast(Oe.finish(t,e,n)),t!==this.you&&this.events.push({type:"finish",id:t,time:e,best:n}))}settle(){this.results=this.book.entries(t=>{var e;return((e=this.latest.get(t))==null?void 0:e.p)??-1/0}),this.room.broadcast(Oe.results(this.results)),this.events.push({type:"results",entries:this.results})}drop(t){var e;this.remote.drop(t),this.latest.delete(t),(e=this.book)==null||e.leave(t),this.events.push({type:"left",id:t})}poll(){return this.events.splice(0)}dispose(){for(const t of this.offs)t()}}function ER(i,t){return i.map(e=>({id:e.id,code:e.code,name:e.name,color:e.livery,isPlayer:e.id===t,...e.kind==="ai"?{profile:Un[e.rival]}:{}}))}function TR(i,t,e,n){return new _l(i.path.count,i.startIndex,n,ER(t,e))}function AR(i,t,e,n){const{path:s,startIndex:r}=i.world,o=new Map(t.map(l=>[l.id,yl(s,r,l.slot)])),a=o.get(e);i.kart.place(a.x,a.z,a.yaw),i.trackIndex=a.i;const c=[];return i.rivals.forEach((l,h)=>{const u=n&&t.find(f=>f.kind==="ai"&&f.rival===h);if(l.kart.object3d.visible=!!u,!u)return;const d=o.get(u.id);l.kart.place(d.x,d.z,d.yaw),l.index=d.i,l.id=u.id,c.push(l)}),{ai:c,spots:o}}function RR(i,t){const e=new Map(i.entries.map(s=>[s.id,s])),n=t.map(s=>e.get(s.id)).filter(Boolean);for(const s of t){const r=e.get(s.id);r&&(r.finishTime=s.time,r.bestLap=s.best??r.bestLap,r.dnf=s.dnf)}i.order=[...n,...i.entries.filter(s=>!n.includes(s))],i.final=!0}function CR(i,{id:t,time:e,best:n}){const s=i.entries.find(r=>r.id===t);s&&(s.finishTime=e,n!=null&&(s.bestLap=n))}class PR{constructor(t,e,n){this.kart=new uh(null,dm(e)),this.key=Dh(e),this.profile={body:e.livery},this.fx=n,this.index=0,this.t=null,t.add(this.kart.object3d)}place(t){this.kart.place(t.x,t.z,t.yaw),this.kart.object3d.visible=!0,this.index=t.i,this.t=null,this.fx.reset()}draw(t,e){const[n,s,r,o,a,c,l,h]=t.s,{kart:u}=this,d=u.telemetry,f=bi(r),g=o*f.x+a*f.z,v=e>0?(g-d.forwardSpeed)/e:0;u.state={x:n,z:s,yaw:r,vx:o,vz:a,steer:c,yawRate:l,slipAngle:h},Object.assign(d,{speed:Math.hypot(o,a),forwardSpeed:g,slip:Math.abs(o*f.z-a*f.x),sliding:Math.abs(h)>NT,longAccel:Ce(d.longAccel,v,UT,e)||0,latAccel:g*l,yawRate:l,slipAngle:h,throttle:t.c[0],brake:t.c[1],steer:c}),u.model.update(u.state,d,e),[this.index,this.t]=[t.i,t.t]}dispose(t){t.remove(this.kart.object3d),Ah(this.kart.object3d)}}const Dh=i=>`${i.livery}:${i.number}`;function dm(i){const{body:t,suit:e,stripe:n}=Q3(i.livery);return{number:i.number,livery:{body:t,suit:e,helmet:t,helmetStripe:n}}}function fm(i,t){const e=t?Dh(t):null;(i.kartLook??null)!==e&&(i.kartLook=e,Ah(i.kart.setLook(t?dm(t):{})))}function Bf(i,t,e){const n=i.state;return{s:[n.x,n.z,n.yaw,n.vx,n.vz,n.steer,n.yawRate,n.slipAngle??0],c:[i.telemetry.throttle??0,i.telemetry.brake??0],i:t,p:(e==null?void 0:e.progress)??0,lap:(e==null?void 0:e.timer.lap)??0}}function LR({s:i,i:t}){const[e,n,s,r,o]=i;return{state:{x:e,z:n,yaw:s,vx:r,vz:o},index:t,speed:Math.hypot(r,o)}}class IR{constructor(t,e,n,s,r){Object.assign(this,{game:t,room:e,pool:s,notify:r,roster:n.roster,you:e.state.you}),this.isHost=e.isHost,this.net=new wR({room:e,start:n}),this.final=!1,this.awayNotice=null;const o=or(n.track);o!==t.track&&t.loadTrack(o);for(const c of t.rivals)c.driver.level=jn[n.level]??jn[p0];t.field=TR(t.world,n.roster,this.you,n.laps),t.session.laps=n.laps,t.session.follow(()=>e.hostNow()-n.countdownAt),Os(t,"online",n.hold),fm(t,n.roster.find(c=>c.id===this.you));const a=AR(t,n.roster,this.you,this.isHost);this.ai=a.ai,s.setRoster(n.roster.filter(c=>c.id!==this.you&&!this.ai.some(l=>l.id===c.id)),a.spots),this.others=[...this.ai,...s.list],this.indices=t.field.entries.map(c=>this.indexSource(c))}indexSource(t){const{game:e}=this;if(t.id===this.you)return()=>e.trackIndex;const n=this.ai.find(s=>s.id===t.id);return n?()=>n.index:()=>{var s;return((s=this.pool.get(t.id))==null?void 0:s.index)??t.timer.lastIndex??0}}step(t){const{game:e,net:n}=this,{session:s}=e,r=s.state,o=n.room.hostNow(),a=[...n.remoteStates(o,DT)].map(([,c])=>LR(c));Q0(e,t,r!=="countdown",this.ai,a),n.update(t,{own:Bf(e.kart,e.trackIndex,e.field.player),ai:this.aiStates()}),this.pool.draw(n.remoteStates(),t,e.camera.three,e.renderer.three.domElement.height),(r==="racing"||r==="finished")&&!this.final&&this.time(r,t);for(const c of n.poll())this.on(c);this.remindAway(t)}time(t,e){const{game:n,net:s}=this;for(const r of n.field.update(this.indices.map(o=>o()),n.session.clock))r.isPlayer&&t==="racing"?(n.session.finish(),s.finish(r.finishTime,r.bestLap)):r.profile&&this.isHost&&s.aiFinish(r.id,r.finishTime,r.bestLap);nm(n,e)}on(t){const{game:e}=this,n=e.field.entries.find(s=>s.id===t.id);if(t.type==="finish")CR(e.field,t);else if(t.type==="left"){const s=this.pool.get(t.id);this.pool.remove(t.id),this.others=this.others.filter(o=>o!==s);const r=n&&!this.final&&n.finishTime===null;r&&(n.dnf=!0),this.notify(`${((n==null?void 0:n.name)??"A driver").toUpperCase()} LEFT`,r?"DNF":"")}else t.type==="results"?(RR(e.field,t.entries),this.final=!0,this.isHost&&this.room.endRace(),e.session.state==="racing"&&e.session.finish()):t.type==="host-gone"?this.hostGone=t.reason:t.type==="host-away"&&this.hostAway(t.away)}hostAway(t){this.awayNotice=t?0:null,t||this.notify("HOST BACK")}remindAway(t){this.awayNotice===null||(this.awayNotice-=t)>0||(this.notify("HOST AWAY","WAITING FOR THEIR GAME"),this.awayNotice=D0)}aiStates(){if(!this.isHost)return[];const{entries:t}=this.game.field;return this.ai.map(e=>({id:e.id,...Bf(e.kart,e.index,t.find(n=>n.id===e.id))}))}dispose(){this.net.dispose(),this.game.session.follow(null)}}class DR{constructor(t){this.scene=t,this.karts=new Map,this.spareFx=[]}setRoster(t,e){const n=new Map(t.map(s=>[s.id,s]));for(const[s,r]of this.karts){const o=n.get(s);(!o||Dh(o)!==r.key)&&this.remove(s)}for(const s of t){if(!this.karts.has(s.id)){const r=this.spareFx.pop()??new dh(this.scene);this.karts.set(s.id,new PR(this.scene,s,r))}this.karts.get(s.id).place(e.get(s.id))}}get list(){return[...this.karts.values()]}get(t){return this.karts.get(t)}draw(t,e,n,s){for(const[r,o]of this.karts){const a=t.get(r);a&&o.draw(a,e),o.fx.update(o.kart,e,n,s)}}remove(t){const e=this.karts.get(t);e&&(this.karts.delete(t),e.dispose(this.scene),e.fx.reset(),this.spareFx.push(e.fx))}clear(){for(const t of[...this.karts.keys()])this.remove(t)}}function NR(i,t){const{room:e}=i,{screens:n}=t,{lobby:s}=n;s.bind({onCreate:o=>e.create(o,{track:t.track.id,level:t.difficulty}),onJoin:(o,a)=>e.join(o,a),onStart:()=>i.start(),onLeave:()=>e.leave(),onTrack:o=>e.setLobby({track:pm(e.state.track,o)}),onLevel:o=>e.setLobby({level:o}),onBack:()=>n.closeLobby()}),e.on("change",o=>s.render(o));const r=new URLSearchParams(window.location.search);r.has("room")&&!r.has("lobbydemo")&&(n.setMode("online"),n.openLobby(r.get("room")),s.choose.codeComplete&&s.do("join"))}function pm(i,t){const e=Ue.indexOf(or(i));return Ue[(e+t+Ue.length)%Ue.length].id}class UR{constructor(t,e=()=>new pR){Hr(this,"notify",(t,e="")=>this.game.screens.notify(t,e));this.game=t,this.room=new oR({makeTransport:e}),this.pool=new DR(t.renderer.scene),this.race=null,this.room.on("start",n=>this.begin(n)),NR(this,t),setInterval(()=>this.room.update(),MT*1e3),window.addEventListener("pagehide",()=>this.room.leave())}get active(){return!!this.race}get others(){var t;return((t=this.race)==null?void 0:t.others)??[]}start(t=0){const{room:e}=this;!e.isHost||e.racing||(t&&e.setLobby({track:pm(e.state.track,t)}),e.start({laps:or(e.state.track).laps,hold:m0()}))}begin(t){var e;(e=this.race)==null||e.dispose(),this.game.screens.lobby.show(!1),this.game.screens.showOnlinePause(!1),this.game.screens.results.setOnline(this.room.isHost?"host":"client"),this.race=new IR(this.game,this.room,t,this.pool,this.notify)}step(t){var n,s;this.room.update(),(n=this.race)==null||n.step(t);const e=(s=this.race)==null?void 0:s.hostGone;e&&this.leave(e==="closed"?"HOST LEFT":"CONNECTION LOST")}handle(t,e){const{screens:n}=this.game;if(e==="finished"){n.showOnlinePause(!1);const s=Sr(t);s==="menu"?this.leave():s&&this.start(s==="next"?1:0);return}if(t.action("pause")&&n.showOnlinePause(!n.onlinePause.visible),t.action("quit")&&n.onlinePause.visible)return this.leave();t.action("reset")&&e==="racing"&&em(this.game)}leave(t=null){var s;const{game:e}=this;this.room.leave(),(s=this.race)==null||s.dispose(),this.race=null,this.pool.clear(),fm(e,null),e.field=e.soloField,e.field.reset(),J0(e),e.screens.results.setOnline(null),e.screens.showOnlinePause(!1),e.screens.lobby.show(!1),Es(e),t&&this.notify(t,"BACK TO THE MENU");const n=new URL(window.location.href);n.searchParams.has("room")&&(n.searchParams.delete("room"),window.history.replaceState(window.history.state,"",n))}}const mm="tbc-kart.track",gm="tbc-kart.level";class OR{constructor(){Hr(this,"controlsFor",t=>A3(this,t));Hr(this,"step",t=>P3(this,t));this.bus=new Jl,this.renderer=new py,this.camera=new l2(window.innerWidth/window.innerHeight);const t=this.renderer.scene;this.kart=new uh(null),this.ghost=new Xb,this.rivals=g3(t),t.add(this.kart.object3d,this.ghost.object3d),this.fx=new dh(t),this.kerb=new d0,this.post=new Dy(this.renderer,t,this.camera.three),this.audio=new Zb,this.engine=new a0(this.audio),this.pack=new nw(this.audio),this.sfx=new iw(this.audio),this.tyres=new rw(this.audio),this.rumble=new ow(this.audio),this.recorder=new Lw,this.input=new f2,this.hud=new tE(this.bus,this.input),this.screens=new kT(e=>this.input.trigger(e)),this.difficulty=kR(),this.season=sE(),this.qualiGrid=null,this.screens.bindLevels(this.difficulty,e=>this.setDifficulty(e)),this.screens.addGraphicsPicker(),this.screens.setSeason(Mh(this.season)),this.debug=new BT,this.autopilot=new Ow(null),this.impactCooldown=0,[this.lastPosition,this.heldPosition,this.positionAge]=[0,0,0],ZA(this),this.loadTrack(FR()),this.online=new UR(this),window.addEventListener("resize",()=>this.resize())}loadTrack(t){const e=this.renderer.scene;this.world&&(e.remove(this.world.group),Ah(this.world.group)),this.track=t,this.world=KA(t,this.renderer.maxAnisotropy),e.add(this.world.group);const{bounds:n,atmosphere:s}=this.world;s&&this.renderer.setAtmosphere(s);const r=[this.kart,...this.rivals.map(u=>u.kart)].map(u=>u.object3d);this.renderer.captureEnvironment(new A(n.cx,1.2,n.cz),[...r,this.ghost.object3d],s?2e3:500);const{path:o,startIndex:a,anchors:c}=this.world;this.camera.anchors=c,J0(this),this.renderer.three.compile(this.renderer.scene,this.camera.three),this.signature=D3(t,o,a),this.recordKey=Fw(t.id),this.record=kw(this.signature,this.recordKey),this.session=new Pw(o.count,a,this.bus,this.record,t.laps);const l=[{...xl,color:Ko.body,isPlayer:!0},...Un.map(u=>({code:u.code,name:u.name,color:u.body,profile:u,isPlayer:!1}))];this.field=this.soloField=new _l(o.count,a,t.laps,l),this.qualiField=new _l(o.count,a,t.laps,l,{timed:!0}),this.hud.setTrack(o,a,t.laps);const h=Ue.indexOf(t);this.screens.setTrack(t,o,a,h,Ue.length,this.record.best);for(const u of this.rivals)u.fx.reset();Rh(this,!0),this.camera.broadcast(this.kart)}setDifficulty(t){this.difficulty=t;for(const e of this.rivals)e.driver.level=jn[t];xm(gm,t)}selectTrack(t){const e=Ue.indexOf(this.track);this.loadTrack(Ue[(e+t+Ue.length)%Ue.length]),vm(this.track.id);const n=new URL(window.location.href);n.searchParams.has("track")&&(n.searchParams.set("track",this.track.id),window.history.replaceState(window.history.state,"",n))}resize(){const[t,e]=[window.innerWidth,window.innerHeight];this.renderer.setSize(t,e),this.post.setSize(t,e),this.camera.setAspect(t/e),this.hud.resize()}start(){C3(this)}advance(t,e=1/60){for(let n=0;n<t;n+=e)this.step(e);this.post.render(e)}}function FR(){const i=new URLSearchParams(window.location.search).get("track");let t=null;try{t=localStorage.getItem(mm)}catch{}const{track:e,fromUrl:n,unknown:s}=L3(i,t,Ue);return s&&console.warn(`?track=${s}: no such track (${Ue.map(r=>r.id).join(", ")})`),n&&vm(e.id),e}function vm(i){xm(mm,i)}function xm(i,t){try{localStorage.setItem(i,t)}catch{}}function kR(){let i=null;try{i=localStorage.getItem(gm)}catch{}return jn[i]?i:p0}const zR=new OR;zR.start();
