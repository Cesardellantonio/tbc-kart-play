var ym=Object.defineProperty;var Sm=(i,t,e)=>t in i?ym(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var br=(i,t,e)=>Sm(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ac="163",bm=0,lh=1,Em=2,ef=1,nf=2,Fn=3,Bn=0,ke=1,un=2,Te=0,Vi=1,rr=2,ch=3,hh=4,lc=5,dn=100,Tm=101,wm=102,Am=103,Rm=104,gs=200,po=201,Cm=202,Pm=203,Sl=204,bl=205,El=206,Lm=207,Tl=208,Im=209,Dm=210,Nm=211,Um=212,Om=213,Fm=214,km=0,zm=1,Bm=2,bo=3,Hm=4,Vm=5,Gm=6,Wm=7,sf=0,Xm=1,qm=2,ai=0,Ym=1,$m=2,Km=3,rf=4,jm=5,cc=6,Zm=7,uh="attached",Jm="detached",of=300,Ss=301,bs=302,wl=303,Al=304,Ho=306,di=1e3,ki=1001,Rl=1002,xe=1003,Qm=1004,Er=1005,fn=1006,aa=1007,zi=1008,zn=1009,t0=1010,e0=1011,af=1012,lf=1013,Es=1014,wn=1015,je=1016,cf=1017,hf=1018,Ns=1020,n0=35902,i0=1021,s0=1022,on=1023,r0=1024,o0=1025,Ms=1026,Ts=1027,uf=1028,df=1029,a0=1030,ff=1031,pf=1033,la=33776,ca=33777,ha=33778,ua=33779,dh=35840,fh=35841,ph=35842,mh=35843,mf=36196,gh=37492,vh=37496,_h=37808,xh=37809,Mh=37810,yh=37811,Sh=37812,bh=37813,Eh=37814,Th=37815,wh=37816,Ah=37817,Rh=37818,Ch=37819,Ph=37820,Lh=37821,da=36492,Ih=36494,Dh=36495,l0=36283,Nh=36284,Uh=36285,Oh=36286,c0=3200,gf=3201,hc=0,h0=1,si="",hn="srgb",vi="srgb-linear",uc="display-p3",Vo="display-p3-linear",Eo="linear",te="srgb",To="rec709",wo="p3",Xi=7680,Fh=519,u0=512,d0=513,f0=514,vf=515,p0=516,m0=517,g0=518,v0=519,kh=35044,zh=35048,Bh="300 es",kn=2e3,Ao=2001;class Us{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fa=Math.PI/180,Cl=180/Math.PI;function Os(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function we(i,t,e){return Math.max(t,Math.min(e,i))}function _0(i,t){return(i%t+t)%t}function pa(i,t,e){return(1-e)*i+e*t}function Hs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,n,s,r,o,a,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],y=s[1],_=s[4],b=s[7],P=s[2],T=s[5],C=s[8];return r[0]=o*v+a*y+l*P,r[3]=o*m+a*_+l*T,r[6]=o*p+a*b+l*C,r[1]=c*v+h*y+u*P,r[4]=c*m+h*_+u*T,r[7]=c*p+h*b+u*C,r[2]=d*v+f*y+g*P,r[5]=d*m+f*_+g*T,r[8]=d*p+f*b+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ma.makeScale(t,e)),this}rotate(t){return this.premultiply(ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new zt;function _f(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ro(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function x0(){const i=Ro("canvas");return i.style.display="block",i}const Hh={};function M0(i){i in Hh||(Hh[i]=!0,console.warn(i))}const Vh=new zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gh=new zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Tr={[vi]:{transfer:Eo,primaries:To,toReference:i=>i,fromReference:i=>i},[hn]:{transfer:te,primaries:To,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Vo]:{transfer:Eo,primaries:wo,toReference:i=>i.applyMatrix3(Gh),fromReference:i=>i.applyMatrix3(Vh)},[uc]:{transfer:te,primaries:wo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Gh),fromReference:i=>i.applyMatrix3(Vh).convertLinearToSRGB()}},y0=new Set([vi,Vo]),Kt={enabled:!0,_workingColorSpace:vi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!y0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Tr[t].toReference,s=Tr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Tr[i].primaries},getTransfer:function(i){return i===si?Eo:Tr[i].transfer}};function ys(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ga(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qi;class S0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qi===void 0&&(qi=Ro("canvas")),qi.width=t.width,qi.height=t.height;const n=qi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=qi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ro("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ys(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ys(e[n]/255)*255):e[n]=ys(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let b0=0;class xf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Os(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(va(s[o].image)):r.push(va(s[o]))}else r=va(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?S0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let E0=0;class De extends Us{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=ki,s=ki,r=fn,o=zi,a=on,l=zn,c=De.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Os(),this.name="",this.source=new xf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==of)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case di:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case Rl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case di:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case Rl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=of;De.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,s=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,b=(f+1)/2,P=(p+1)/2,T=(h+d)/4,C=(u+v)/4,I=(g+m)/4;return _>b&&_>P?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=C/n):b>P?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=T/s,r=I/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=C/r,s=I/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class T0 extends Us{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new De(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new xf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ze extends T0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Mf extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xe,this.minFilter=xe,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class w0 extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xe,this.minFilter=xe,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _i{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*v,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const P=Math.sqrt(_),T=Math.atan2(P,p*y);m=Math.sin(m*T)/P,a=Math.sin(a*T)/P}const b=a*y;if(l=l*m+d*b,c=c*m+f*b,h=h*m+g*b,u=u*m+v*b,m===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _a.copy(this).projectOnVector(t),this.sub(_a)}reflect(t){return this.sub(_a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _a=new R,Wh=new _i;class xi{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)),wr.applyMatrix4(t.matrixWorld),this.union(wr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vs),Ar.subVectors(this.max,Vs),Yi.subVectors(t.a,Vs),$i.subVectors(t.b,Vs),Ki.subVectors(t.c,Vs),Xn.subVectors($i,Yi),qn.subVectors(Ki,$i),wi.subVectors(Yi,Ki);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-wi.z,wi.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,wi.z,0,-wi.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-wi.y,wi.x,0];return!xa(e,Yi,$i,Ki,Ar)||(e=[1,0,0,0,1,0,0,0,1],!xa(e,Yi,$i,Ki,Ar))?!1:(Rr.crossVectors(Xn,qn),e=[Rr.x,Rr.y,Rr.z],xa(e,Yi,$i,Ki,Ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ln=[new R,new R,new R,new R,new R,new R,new R,new R],an=new R,wr=new xi,Yi=new R,$i=new R,Ki=new R,Xn=new R,qn=new R,wi=new R,Vs=new R,Ar=new R,Rr=new R,Ai=new R;function xa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ai.fromArray(i,r);const a=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),l=t.dot(Ai),c=e.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const A0=new xi,Gs=new R,Ma=new R;class Hn{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):A0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gs.subVectors(t,this.center);const e=Gs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Gs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gs.copy(t.center).add(Ma)),this.expandByPoint(Gs.copy(t.center).sub(Ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new R,ya=new R,Cr=new R,Yn=new R,Sa=new R,Pr=new R,ba=new R;class dc{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ya.copy(t).add(e).multiplyScalar(.5),Cr.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(ya);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Cr),a=Yn.dot(this.direction),l=-Yn.dot(Cr),c=Yn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ya).addScaledVector(Cr,d),f}intersectSphere(t,e){In.subVectors(t.center,this.origin);const n=In.dot(this.direction),s=In.dot(In)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,s,r){Sa.subVectors(e,t),Pr.subVectors(n,t),ba.crossVectors(Sa,Pr);let o=this.direction.dot(ba),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,t);const l=a*this.direction.dot(Pr.crossVectors(Yn,Pr));if(l<0)return null;const c=a*this.direction.dot(Sa.cross(Yn));if(c<0||l+c>o)return null;const h=-a*Yn.dot(ba);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,g,v,m){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,v,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ji.setFromMatrixColumn(t,0).length(),r=1/ji.setFromMatrixColumn(t,1).length(),o=1/ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d+v*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(R0,t,C0)}lookAt(t,e,n){const s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),$n.crossVectors(n,Xe),$n.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),$n.crossVectors(n,Xe)),$n.normalize(),Lr.crossVectors(Xe,$n),s[0]=$n.x,s[4]=Lr.x,s[8]=Xe.x,s[1]=$n.y,s[5]=Lr.y,s[9]=Xe.y,s[2]=$n.z,s[6]=Lr.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],_=n[7],b=n[11],P=n[15],T=s[0],C=s[4],I=s[8],S=s[12],x=s[1],D=s[5],O=s[9],L=s[13],k=s[2],X=s[6],Y=s[10],et=s[14],H=s[3],$=s[7],Z=s[11],rt=s[15];return r[0]=o*T+a*x+l*k+c*H,r[4]=o*C+a*D+l*X+c*$,r[8]=o*I+a*O+l*Y+c*Z,r[12]=o*S+a*L+l*et+c*rt,r[1]=h*T+u*x+d*k+f*H,r[5]=h*C+u*D+d*X+f*$,r[9]=h*I+u*O+d*Y+f*Z,r[13]=h*S+u*L+d*et+f*rt,r[2]=g*T+v*x+m*k+p*H,r[6]=g*C+v*D+m*X+p*$,r[10]=g*I+v*O+m*Y+p*Z,r[14]=g*S+v*L+m*et+p*rt,r[3]=y*T+_*x+b*k+P*H,r[7]=y*C+_*D+b*X+P*$,r[11]=y*I+_*O+b*Y+P*Z,r[15]=y*S+_*L+b*et+P*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+v*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],y=u*m*c-v*d*c+v*l*f-a*m*f-u*l*p+a*d*p,_=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,b=h*v*c-g*u*c+g*a*f-o*v*f-h*a*p+o*u*p,P=g*u*l-h*v*l-g*a*d+o*v*d+h*a*m-o*u*m,T=e*y+n*_+s*b+r*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=y*C,t[1]=(v*d*r-u*m*r-v*s*f+n*m*f+u*s*p-n*d*p)*C,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*p+n*l*p)*C,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*C,t[4]=_*C,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*C,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*C,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*C,t[8]=b*C,t[9]=(g*u*r-h*v*r-g*n*f+e*v*f+h*n*p-e*u*p)*C,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*C,t[12]=P*C,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*m+e*u*m)*C,t[14]=(g*a*s-o*v*s-g*n*l+e*v*l+o*n*m-e*a*m)*C,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,v=o*h,m=o*u,p=a*u,y=l*c,_=l*h,b=l*u,P=n.x,T=n.y,C=n.z;return s[0]=(1-(v+p))*P,s[1]=(f+b)*P,s[2]=(g-_)*P,s[3]=0,s[4]=(f-b)*T,s[5]=(1-(d+p))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+_)*C,s[9]=(m-y)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ji.set(s[0],s[1],s[2]).length();const o=ji.set(s[4],s[5],s[6]).length(),a=ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ln.copy(this);const c=1/r,h=1/o,u=1/a;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,e.setFromRotationMatrix(ln),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=kn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===kn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ao)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=kn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h;let g,v;if(a===kn)g=(o+r)*u,v=-2*u;else if(a===Ao)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ji=new R,ln=new Pt,R0=new R(0,0,0),C0=new R(1,1,1),$n=new R,Lr=new R,Xe=new R,Xh=new Pt,qh=new _i;class gn{constructor(t=0,e=0,n=0,s=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qh.setFromEuler(this),this.setFromQuaternion(qh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class yf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let P0=0;const Yh=new R,Zi=new _i,Dn=new Pt,Ir=new R,Ws=new R,L0=new R,I0=new _i,$h=new R(1,0,0),Kh=new R(0,1,0),jh=new R(0,0,1),Zh={type:"added"},D0={type:"removed"},Ji={type:"childadded",child:null},Ea={type:"childremoved",child:null};class Me extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new R,e=new gn,n=new _i,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pt},normalMatrix:{value:new zt}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis($h,t)}rotateY(t){return this.rotateOnAxis(Kh,t)}rotateZ(t){return this.rotateOnAxis(jh,t)}translateOnAxis(t,e){return Yh.copy(t).applyQuaternion(this.quaternion),this.position.add(Yh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($h,t)}translateY(t){return this.translateOnAxis(Kh,t)}translateZ(t){return this.translateOnAxis(jh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ir.copy(t):Ir.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Ws,Ir,this.up):Dn.lookAt(Ir,Ws,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zh),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(D0),Ea.child=t,this.dispatchEvent(Ea),Ea.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zh),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,t,L0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,I0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Me.DEFAULT_UP=new R(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new R,Nn=new R,Ta=new R,Un=new R,Qi=new R,ts=new R,Jh=new R,wa=new R,Aa=new R,Ra=new R;class En{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),cn.subVectors(t,e),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){cn.subVectors(s,e),Nn.subVectors(n,e),Ta.subVectors(t,e);const o=cn.dot(cn),a=cn.dot(Nn),l=cn.dot(Ta),c=Nn.dot(Nn),h=Nn.dot(Ta),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Un.x),l.addScaledVector(o,Un.y),l.addScaledVector(a,Un.z),l)}static isFrontFacing(t,e,n,s){return cn.subVectors(n,e),Nn.subVectors(t,e),cn.cross(Nn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),cn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return En.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Qi.subVectors(s,n),ts.subVectors(r,n),wa.subVectors(t,n);const l=Qi.dot(wa),c=ts.dot(wa);if(l<=0&&c<=0)return e.copy(n);Aa.subVectors(t,s);const h=Qi.dot(Aa),u=ts.dot(Aa);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Qi,o);Ra.subVectors(t,r);const f=Qi.dot(Ra),g=ts.dot(Ra);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ts,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Jh.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Jh,a);const p=1/(m+v+d);return o=v*p,a=d*p,e.copy(n).addScaledVector(Qi,o).addScaledVector(ts,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function Ca(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class _t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=_0(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ca(o,r,t+1/3),this.g=Ca(o,r,t),this.b=Ca(o,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=hn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){const n=Sf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}copyLinearToSRGB(t){return this.r=ga(t.r),this.g=ga(t.g),this.b=ga(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return Kt.fromWorkingColorSpace(Le.copy(this),t),Math.round(we(Le.r*255,0,255))*65536+Math.round(we(Le.g*255,0,255))*256+Math.round(we(Le.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Le.copy(this),e);const n=Le.r,s=Le.g,r=Le.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=hn){Kt.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,s=Le.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(Dr);const n=pa(Kn.h,Dr.h,e),s=pa(Kn.s,Dr.s,e),r=pa(Kn.l,Dr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new _t;_t.NAMES=Sf;let N0=0;class Wi extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=Vi,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=bl,this.blendEquation=dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sl&&(n.blendSrc=this.blendSrc),this.blendDst!==bl&&(n.blendDst=this.blendDst),this.blendEquation!==dn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Mi extends Wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=sf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new R,Nr=new at;class ie{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=kh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return M0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Nr.fromBufferAttribute(this,e),Nr.applyMatrix3(t),this.setXY(e,Nr.x,Nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==kh&&(t.usage=this.usage),t}}class fc extends ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class bf extends ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qt extends ie{constructor(t,e,n){super(new Float32Array(t),e,n)}}let U0=0;const Qe=new Pt,Pa=new Me,es=new R,qe=new xi,Xs=new xi,Ee=new R;class fe extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_f(t)?bf:fc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return Pa.lookAt(t),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new qt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(qe.min,Xs.min),qe.expandByPoint(Ee),Ee.addVectors(qe.max,Xs.max),qe.expandByPoint(Ee)):(qe.expandByPoint(Xs.min),qe.expandByPoint(Xs.max))}qe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ee));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ee.fromBufferAttribute(a,c),l&&(es.fromBufferAttribute(t,c),Ee.add(es)),s=Math.max(s,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ie(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new R,l[I]=new R;const c=new R,h=new R,u=new R,d=new at,f=new at,g=new at,v=new R,m=new R;function p(I,S,x){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[I].add(v),a[S].add(v),a[x].add(v),l[I].add(m),l[S].add(m),l[x].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,S=y.length;I<S;++I){const x=y[I],D=x.start,O=x.count;for(let L=D,k=D+O;L<k;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const _=new R,b=new R,P=new R,T=new R;function C(I){P.fromBufferAttribute(s,I),T.copy(P);const S=a[I];_.copy(S),_.sub(P.multiplyScalar(P.dot(S))).normalize(),b.crossVectors(T,S);const D=b.dot(l[I])<0?-1:1;o.setXYZW(I,_.x,_.y,_.z,D)}for(let I=0,S=y.length;I<S;++I){const x=y[I],D=x.start,O=x.count;for(let L=D,k=D+O;L<k;L+=3)C(t.getX(L+0)),C(t.getX(L+1)),C(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new ie(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new fe,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qh=new Pt,Ri=new dc,Ur=new Hn,tu=new R,ns=new R,is=new R,ss=new R,La=new R,Or=new R,Fr=new at,kr=new at,zr=new at,eu=new R,nu=new R,iu=new R,Br=new R,Hr=new R;class St extends Me{constructor(t=new fe,e=new Mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Or.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(La.fromBufferAttribute(u,t),o?Or.addScaledVector(La,h):Or.addScaledVector(La.sub(e),h))}e.add(Or)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(r),Ri.copy(t.ray).recast(t.near),!(Ur.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Ur,tu)===null||Ri.origin.distanceToSquared(tu)>(t.far-t.near)**2))&&(Qh.copy(r).invert(),Ri.copy(t.ray).applyMatrix4(Qh),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,P=_;b<P;b+=3){const T=a.getX(b),C=a.getX(b+1),I=a.getX(b+2);s=Vr(this,p,t,n,c,h,u,T,C,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=a.getX(m),_=a.getX(m+1),b=a.getX(m+2);s=Vr(this,o,t,n,c,h,u,y,_,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,P=_;b<P;b+=3){const T=b,C=b+1,I=b+2;s=Vr(this,p,t,n,c,h,u,T,C,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=m,_=m+1,b=m+2;s=Vr(this,o,t,n,c,h,u,y,_,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function O0(i,t,e,n,s,r,o,a){let l;if(t.side===ke?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Bn,a),l===null)return null;Hr.copy(a),Hr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Hr);return c<e.near||c>e.far?null:{distance:c,point:Hr.clone(),object:i}}function Vr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ns),i.getVertexPosition(l,is),i.getVertexPosition(c,ss);const h=O0(i,t,e,n,ns,is,ss,Br);if(h){s&&(Fr.fromBufferAttribute(s,a),kr.fromBufferAttribute(s,l),zr.fromBufferAttribute(s,c),h.uv=En.getInterpolation(Br,ns,is,ss,Fr,kr,zr,new at)),r&&(Fr.fromBufferAttribute(r,a),kr.fromBufferAttribute(r,l),zr.fromBufferAttribute(r,c),h.uv1=En.getInterpolation(Br,ns,is,ss,Fr,kr,zr,new at)),o&&(eu.fromBufferAttribute(o,a),nu.fromBufferAttribute(o,l),iu.fromBufferAttribute(o,c),h.normal=En.getInterpolation(Br,ns,is,ss,eu,nu,iu,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new R,materialIndex:0};En.getNormal(ns,is,ss,u.normal),h.face=u}return h}class _e extends fe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(u,2));function g(v,m,p,y,_,b,P,T,C,I,S){const x=b/C,D=P/I,O=b/2,L=P/2,k=T/2,X=C+1,Y=I+1;let et=0,H=0;const $=new R;for(let Z=0;Z<Y;Z++){const rt=Z*D-L;for(let Lt=0;Lt<X;Lt++){const Bt=Lt*x-O;$[v]=Bt*y,$[m]=rt*_,$[p]=k,c.push($.x,$.y,$.z),$[v]=0,$[m]=0,$[p]=T>0?1:-1,h.push($.x,$.y,$.z),u.push(Lt/C),u.push(1-Z/I),et+=1}}for(let Z=0;Z<I;Z++)for(let rt=0;rt<C;rt++){const Lt=d+rt+X*Z,Bt=d+rt+X*(Z+1),W=d+(rt+1)+X*(Z+1),J=d+(rt+1)+X*Z;l.push(Lt,Bt,J),l.push(Bt,W,J),H+=6}a.addGroup(f,H,S),f+=H,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ws(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Oe(i){const t={};for(let e=0;e<i.length;e++){const n=ws(i[e]);for(const s in n)t[s]=n[s]}return t}function F0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ef(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const Tn={clone:ws,merge:Oe};var k0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ce extends Wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k0,this.fragmentShader=z0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=F0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Tf extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new R,su=new at,ru=new at;class rn extends Tf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cl*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,su,ru),e.subVectors(ru,su)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rs=-90,os=1;class wf extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(rs,os,t,e);s.layers=this.layers,this.add(s);const r=new rn(rs,os,t,e);r.layers=this.layers,this.add(r);const o=new rn(rs,os,t,e);o.layers=this.layers,this.add(o);const a=new rn(rs,os,t,e);a.layers=this.layers,this.add(a);const l=new rn(rs,os,t,e);l.layers=this.layers,this.add(l);const c=new rn(rs,os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Af extends De{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ss,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rf extends ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Af(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _e(5,5,5),r=new ce({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:Te});r.uniforms.tEquirect.value=e;const o=new St(s,r),a=e.minFilter;return e.minFilter===zi&&(e.minFilter=fn),new wf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Ia=new R,B0=new R,H0=new zt;class Ni{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ia.subVectors(n,e).cross(B0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ia),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||H0.getNormalMatrix(t),s=this.coplanarPoint(Ia).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Hn,Gr=new R;class pc{constructor(t=new Ni,e=new Ni,n=new Ni,s=new Ni,r=new Ni,o=new Ni){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],y=s[13],_=s[14],b=s[15];if(n[0].setComponents(l-r,d-c,m-f,b-p).normalize(),n[1].setComponents(l+r,d+c,m+f,b+p).normalize(),n[2].setComponents(l+o,d+h,m+g,b+y).normalize(),n[3].setComponents(l-o,d-h,m-g,b-y).normalize(),n[4].setComponents(l-a,d-u,m-v,b-_).normalize(),e===kn)n[5].setComponents(l+a,d+u,m+v,b+_).normalize();else if(e===Ao)n[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Gr.x=s.normal.x>0?t.max.x:t.min.x,Gr.y=s.normal.y>0?t.max.y:t.min.y,Gr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function V0(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,a),u.count===-1&&d.length===0&&i.bufferSubData(c,0,h),d.length!==0){for(let f=0,g=d.length;f<g;f++){const v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Ue extends fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const y=p*d-o;for(let _=0;_<c;_++){const b=_*u-r;g.push(b,-y,0),v.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const _=y+c*p,b=y+c*(p+1),P=y+1+c*(p+1),T=y+1+c*p;f.push(_,b,T),f.push(b,P,T)}this.setIndex(f),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.width,t.height,t.widthSegments,t.heightSegments)}}var G0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W0=`#ifdef USE_ALPHAHASH
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
#endif`,X0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K0=`#ifdef USE_AOMAP
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
#endif`,j0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z0=`#ifdef USE_BATCHING
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
#endif`,J0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Q0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ng=`#ifdef USE_IRIDESCENCE
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
#endif`,ig=`#ifdef USE_BUMPMAP
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
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dg=`#define PI 3.141592653589793
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
} // validated`,fg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pg=`vec3 transformedNormal = objectNormal;
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
#endif`,mg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mg=`
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
}`,yg=`#ifdef USE_ENVMAP
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
#endif`,Sg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bg=`#ifdef USE_ENVMAP
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
#endif`,Eg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tg=`#ifdef USE_ENVMAP
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
#endif`,wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pg=`#ifdef USE_GRADIENTMAP
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
}`,Lg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ig=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ug=`uniform bool receiveShadow;
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
#endif`,Og=`#ifdef USE_ENVMAP
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
#endif`,Fg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hg=`PhysicalMaterial material;
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
#endif`,Vg=`struct PhysicalMaterial {
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
}`,Gg=`
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
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qg=`#if defined( USE_POINTS_UV )
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
#endif`,tv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ev=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sv=`#ifdef USE_MORPHNORMALS
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
#endif`,rv=`#ifdef USE_MORPHTARGETS
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
#endif`,ov=`#ifdef USE_MORPHTARGETS
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
#endif`,av=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dv=`#ifdef USE_NORMALMAP
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
#endif`,fv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_v=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ev=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Av=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rv=`float getShadowMask() {
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
}`,Cv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pv=`#ifdef USE_SKINNING
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
#endif`,Lv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Iv=`#ifdef USE_SKINNING
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
#endif`,Dv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ov=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fv=`#ifdef USE_TRANSMISSION
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
#endif`,kv=`#ifdef USE_TRANSMISSION
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
#endif`,zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wv=`uniform sampler2D t2D;
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
}`,Xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$v=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kv=`#include <common>
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
}`,jv=`#if DEPTH_PACKING == 3200
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
}`,Zv=`#define DISTANCE
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
}`,Jv=`#define DISTANCE
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
}`,Qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`uniform float scale;
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#include <common>
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
}`,s_=`uniform vec3 diffuse;
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
}`,r_=`#define LAMBERT
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
}`,o_=`#define LAMBERT
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
}`,a_=`#define MATCAP
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
}`,l_=`#define MATCAP
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
}`,c_=`#define NORMAL
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
}`,h_=`#define NORMAL
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
}`,u_=`#define PHONG
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
}`,d_=`#define PHONG
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
}`,f_=`#define STANDARD
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
}`,p_=`#define STANDARD
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
}`,m_=`#define TOON
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
}`,g_=`#define TOON
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
}`,v_=`uniform float size;
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
}`,__=`uniform vec3 diffuse;
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
}`,x_=`#include <common>
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
}`,M_=`uniform vec3 color;
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
}`,y_=`uniform float rotation;
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
}`,S_=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:G0,alphahash_pars_fragment:W0,alphamap_fragment:X0,alphamap_pars_fragment:q0,alphatest_fragment:Y0,alphatest_pars_fragment:$0,aomap_fragment:K0,aomap_pars_fragment:j0,batching_pars_vertex:Z0,batching_vertex:J0,begin_vertex:Q0,beginnormal_vertex:tg,bsdfs:eg,iridescence_fragment:ng,bumpmap_pars_fragment:ig,clipping_planes_fragment:sg,clipping_planes_pars_fragment:rg,clipping_planes_pars_vertex:og,clipping_planes_vertex:ag,color_fragment:lg,color_pars_fragment:cg,color_pars_vertex:hg,color_vertex:ug,common:dg,cube_uv_reflection_fragment:fg,defaultnormal_vertex:pg,displacementmap_pars_vertex:mg,displacementmap_vertex:gg,emissivemap_fragment:vg,emissivemap_pars_fragment:_g,colorspace_fragment:xg,colorspace_pars_fragment:Mg,envmap_fragment:yg,envmap_common_pars_fragment:Sg,envmap_pars_fragment:bg,envmap_pars_vertex:Eg,envmap_physical_pars_fragment:Og,envmap_vertex:Tg,fog_vertex:wg,fog_pars_vertex:Ag,fog_fragment:Rg,fog_pars_fragment:Cg,gradientmap_pars_fragment:Pg,lightmap_fragment:Lg,lightmap_pars_fragment:Ig,lights_lambert_fragment:Dg,lights_lambert_pars_fragment:Ng,lights_pars_begin:Ug,lights_toon_fragment:Fg,lights_toon_pars_fragment:kg,lights_phong_fragment:zg,lights_phong_pars_fragment:Bg,lights_physical_fragment:Hg,lights_physical_pars_fragment:Vg,lights_fragment_begin:Gg,lights_fragment_maps:Wg,lights_fragment_end:Xg,logdepthbuf_fragment:qg,logdepthbuf_pars_fragment:Yg,logdepthbuf_pars_vertex:$g,logdepthbuf_vertex:Kg,map_fragment:jg,map_pars_fragment:Zg,map_particle_fragment:Jg,map_particle_pars_fragment:Qg,metalnessmap_fragment:tv,metalnessmap_pars_fragment:ev,morphinstance_vertex:nv,morphcolor_vertex:iv,morphnormal_vertex:sv,morphtarget_pars_vertex:rv,morphtarget_vertex:ov,normal_fragment_begin:av,normal_fragment_maps:lv,normal_pars_fragment:cv,normal_pars_vertex:hv,normal_vertex:uv,normalmap_pars_fragment:dv,clearcoat_normal_fragment_begin:fv,clearcoat_normal_fragment_maps:pv,clearcoat_pars_fragment:mv,iridescence_pars_fragment:gv,opaque_fragment:vv,packing:_v,premultiplied_alpha_fragment:xv,project_vertex:Mv,dithering_fragment:yv,dithering_pars_fragment:Sv,roughnessmap_fragment:bv,roughnessmap_pars_fragment:Ev,shadowmap_pars_fragment:Tv,shadowmap_pars_vertex:wv,shadowmap_vertex:Av,shadowmask_pars_fragment:Rv,skinbase_vertex:Cv,skinning_pars_vertex:Pv,skinning_vertex:Lv,skinnormal_vertex:Iv,specularmap_fragment:Dv,specularmap_pars_fragment:Nv,tonemapping_fragment:Uv,tonemapping_pars_fragment:Ov,transmission_fragment:Fv,transmission_pars_fragment:kv,uv_pars_fragment:zv,uv_pars_vertex:Bv,uv_vertex:Hv,worldpos_vertex:Vv,background_vert:Gv,background_frag:Wv,backgroundCube_vert:Xv,backgroundCube_frag:qv,cube_vert:Yv,cube_frag:$v,depth_vert:Kv,depth_frag:jv,distanceRGBA_vert:Zv,distanceRGBA_frag:Jv,equirect_vert:Qv,equirect_frag:t_,linedashed_vert:e_,linedashed_frag:n_,meshbasic_vert:i_,meshbasic_frag:s_,meshlambert_vert:r_,meshlambert_frag:o_,meshmatcap_vert:a_,meshmatcap_frag:l_,meshnormal_vert:c_,meshnormal_frag:h_,meshphong_vert:u_,meshphong_frag:d_,meshphysical_vert:f_,meshphysical_frag:p_,meshtoon_vert:m_,meshtoon_frag:g_,points_vert:v_,points_frag:__,shadow_vert:x_,shadow_frag:M_,sprite_vert:y_,sprite_frag:S_},ot={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Sn={basic:{uniforms:Oe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Oe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new _t(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Oe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Oe([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Oe([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new _t(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Oe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Oe([ot.points,ot.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Oe([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Oe([ot.common,ot.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Oe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Oe([ot.sprite,ot.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Oe([ot.common,ot.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Oe([ot.lights,ot.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Sn.physical={uniforms:Oe([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Wr={r:0,b:0,g:0},Pi=new gn,b_=new Pt;function E_(i,t,e,n,s,r,o){const a=new _t(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(m,p){let y=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),y=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ho)?(h===void 0&&(h=new St(new _e(1,1,1),new ce({name:"BackgroundCubeMaterial",uniforms:ws(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Pi.copy(p.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(b_.makeRotationFromEuler(Pi)),h.material.toneMapped=Kt.getTransfer(_.colorSpace)!==te,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new St(new Ue(2,2),new ce({name:"BackgroundMaterial",uniforms:ws(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(_.colorSpace)!==te,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,p){m.getRGB(Wr,Ef(i)),n.buffers.color.setClear(Wr.r,Wr.g,Wr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function T_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(x,D,O,L,k){let X=!1;const Y=u(L,O,D);r!==Y&&(r=Y,c(r.object)),X=f(x,L,O,k),X&&g(x,L,O,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,b(x,D,O,L),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,D,O){const L=O.wireframe===!0;let k=n[x.id];k===void 0&&(k={},n[x.id]=k);let X=k[D.id];X===void 0&&(X={},k[D.id]=X);let Y=X[L];return Y===void 0&&(Y=d(l()),X[L]=Y),Y}function d(x){const D=[],O=[],L=[];for(let k=0;k<e;k++)D[k]=0,O[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:L,object:x,attributes:{},index:null}}function f(x,D,O,L){const k=r.attributes,X=D.attributes;let Y=0;const et=O.getAttributes();for(const H in et)if(et[H].location>=0){const Z=k[H];let rt=X[H];if(rt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor)),Z===void 0||Z.attribute!==rt||rt&&Z.data!==rt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==L}function g(x,D,O,L){const k={},X=D.attributes;let Y=0;const et=O.getAttributes();for(const H in et)if(et[H].location>=0){let Z=X[H];Z===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(Z=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(Z=x.instanceColor));const rt={};rt.attribute=Z,Z&&Z.data&&(rt.data=Z.data),k[H]=rt,Y++}r.attributes=k,r.attributesNum=Y,r.index=L}function v(){const x=r.newAttributes;for(let D=0,O=x.length;D<O;D++)x[D]=0}function m(x){p(x,0)}function p(x,D){const O=r.newAttributes,L=r.enabledAttributes,k=r.attributeDivisors;O[x]=1,L[x]===0&&(i.enableVertexAttribArray(x),L[x]=1),k[x]!==D&&(i.vertexAttribDivisor(x,D),k[x]=D)}function y(){const x=r.newAttributes,D=r.enabledAttributes;for(let O=0,L=D.length;O<L;O++)D[O]!==x[O]&&(i.disableVertexAttribArray(O),D[O]=0)}function _(x,D,O,L,k,X,Y){Y===!0?i.vertexAttribIPointer(x,D,O,k,X):i.vertexAttribPointer(x,D,O,L,k,X)}function b(x,D,O,L){v();const k=L.attributes,X=O.getAttributes(),Y=D.defaultAttributeValues;for(const et in X){const H=X[et];if(H.location>=0){let $=k[et];if($===void 0&&(et==="instanceMatrix"&&x.instanceMatrix&&($=x.instanceMatrix),et==="instanceColor"&&x.instanceColor&&($=x.instanceColor)),$!==void 0){const Z=$.normalized,rt=$.itemSize,Lt=t.get($);if(Lt===void 0)continue;const Bt=Lt.buffer,W=Lt.type,J=Lt.bytesPerElement,ht=W===i.INT||W===i.UNSIGNED_INT||$.gpuType===lf;if($.isInterleavedBufferAttribute){const it=$.data,bt=it.stride,Tt=$.offset;if(it.isInstancedInterleavedBuffer){for(let It=0;It<H.locationSize;It++)p(H.location+It,it.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let It=0;It<H.locationSize;It++)m(H.location+It);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let It=0;It<H.locationSize;It++)_(H.location+It,rt/H.locationSize,W,Z,bt*J,(Tt+rt/H.locationSize*It)*J,ht)}else{if($.isInstancedBufferAttribute){for(let it=0;it<H.locationSize;it++)p(H.location+it,$.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let it=0;it<H.locationSize;it++)m(H.location+it);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let it=0;it<H.locationSize;it++)_(H.location+it,rt/H.locationSize,W,Z,rt*J,rt/H.locationSize*it*J,ht)}}else if(Y!==void 0){const Z=Y[et];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(H.location,Z);break;case 3:i.vertexAttrib3fv(H.location,Z);break;case 4:i.vertexAttrib4fv(H.location,Z);break;default:i.vertexAttrib1fv(H.location,Z)}}}}y()}function P(){I();for(const x in n){const D=n[x];for(const O in D){const L=D[O];for(const k in L)h(L[k].object),delete L[k];delete D[O]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;const D=n[x.id];for(const O in D){const L=D[O];for(const k in L)h(L[k].object),delete L[k];delete D[O]}delete n[x.id]}function C(x){for(const D in n){const O=n[D];if(O[x.id]===void 0)continue;const L=O[x.id];for(const k in L)h(L[k].object),delete L[k];delete O[x.id]}}function I(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function w_(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<h;d++)this.render(l[d],c[d]);else{u.multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function A_(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=e.precision!==void 0?e.precision:"highp";const a=r(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=e.logarithmicDepthBuffer===!0,c=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),m=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),p=h>0,y=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:h,maxTextureSize:u,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:m,vertexTextures:p,maxSamples:y}}function R_(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Ni,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,_=y*4;let b=p.clippingState||null;l.value=b,b=h(g,d,_,f);for(let P=0;P!==_;++P)b[P]=e[P];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,b=f;_!==v;++_,b+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function C_(i){let t=new WeakMap;function e(o,a){return a===wl?o.mapping=Ss:a===Al&&(o.mapping=bs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===wl||a===Al)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Rf(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class mc extends Tf{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const vs=4,ou=[.125,.215,.35,.446,.526,.582],Fi=20,Da=new mc,au=new _t;let Na=null,Ua=0,Oa=0,Fa=!1;const Ui=(1+Math.sqrt(5))/2,as=1/Ui,lu=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Ui,as),new R(0,Ui,-as),new R(as,0,Ui),new R(-as,0,Ui),new R(Ui,as,0),new R(-Ui,as,0)];class Co{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Na=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Na,Ua,Oa),this._renderer.xr.enabled=Fa,t.scissorTest=!1,Xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ss||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Na=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:je,format:on,colorSpace:vi,depthBuffer:!1},s=cu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=P_(r)),this._blurMaterial=L_(r,t,e)}return s}_compileMaterial(t){const e=new St(this._lodPlanes[0],t);this._renderer.compile(e,Da)}_sceneToCubeUV(t,e,n,s){const a=new rn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(au),h.toneMapping=ai,h.autoClear=!1;const f=new Mi({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),g=new St(new _e,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(au),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const _=this._cubeSize;Xr(s,y*_,p>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ss||t.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Xr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Da)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=lu[(s-1)%lu.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new St(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Fi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Fi;m>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);const p=[];let y=0;for(let C=0;C<Fi;++C){const I=C/v,S=Math.exp(-I*I/2);p.push(S),C===0?y+=S:C<m&&(y+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const b=this._sizeLods[s],P=3*b*(s>_-vs?s-_+vs:0),T=4*(this._cubeSize-b);Xr(e,P,T,3*b,2*b),l.setRenderTarget(e),l.render(u,Da)}}function P_(i){const t=[],e=[],n=[];let s=i;const r=i-vs+1+ou.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-vs?l=ou[o-i+vs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*f),_=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,I=T>2?0:-1,S=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];y.set(S,v*g*T),_.set(d,m*g*T);const x=[T,T,T,T,T,T];b.set(x,p*g*T)}const P=new fe;P.setAttribute("position",new ie(y,v)),P.setAttribute("uv",new ie(_,m)),P.setAttribute("faceIndex",new ie(b,p)),t.push(P),s>vs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function cu(i,t,e){const n=new ze(i,t,e);return n.texture.mapping=Ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function L_(i,t,e){const n=new Float32Array(Fi),s=new R(0,1,0);return new ce({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Te,depthTest:!1,depthWrite:!1})}function hu(){return new ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Te,depthTest:!1,depthWrite:!1})}function uu(){return new ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Te,depthTest:!1,depthWrite:!1})}function gc(){return`

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
	`}function I_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===wl||l===Al,h=l===Ss||l===bs;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Co(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Co(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function D_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function N_(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let _=0,b=y.length;_<b;_+=3){const P=y[_+0],T=y[_+1],C=y[_+2];d.push(P,T,T,C,C,P)}}else if(g!==void 0){const y=g.array;v=g.version;for(let _=0,b=y.length/3-1;_<b;_+=3){const P=_+0,T=_+1,C=_+2;d.push(P,T,T,C,C,P)}}else return;const m=new(_f(d)?bf:fc)(d,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function U_(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<f;v++)this.render(u[v]/o,d[v]);else{g.multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let m=0;m<f;m++)v+=d[m];e.update(v,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function O_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function F_(i,t,e){const n=new WeakMap,s=new me;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;f===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let b=a.attributes.position.count*_,P=1;b>t.maxTextureSize&&(P=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const T=new Float32Array(b*P*4*u),C=new Mf(T,b,P,u);C.type=wn,C.needsUpdate=!0;const I=_*4;for(let x=0;x<u;x++){const D=m[x],O=p[x],L=y[x],k=b*P*4*x;for(let X=0;X<D.count;X++){const Y=X*I;f===!0&&(s.fromBufferAttribute(D,X),T[k+Y+0]=s.x,T[k+Y+1]=s.y,T[k+Y+2]=s.z,T[k+Y+3]=0),g===!0&&(s.fromBufferAttribute(O,X),T[k+Y+4]=s.x,T[k+Y+5]=s.y,T[k+Y+6]=s.z,T[k+Y+7]=0),v===!0&&(s.fromBufferAttribute(L,X),T[k+Y+8]=s.x,T[k+Y+9]=s.y,T[k+Y+10]=s.z,T[k+Y+11]=L.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new at(b,P)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function k_(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class vc extends De{constructor(t,e,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:Ms,h!==Ms&&h!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ms&&(n=Es),n===void 0&&h===Ts&&(n=Ns),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:xe,this.minFilter=l!==void 0?l:xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Pf=new De,Lf=new vc(1,1);Lf.compareFunction=vf;const If=new Mf,Df=new w0,Nf=new Af,du=[],fu=[],pu=new Float32Array(16),mu=new Float32Array(9),gu=new Float32Array(4);function Fs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=du[s];if(r===void 0&&(r=new Float32Array(s),du[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Go(i,t){let e=fu[t];e===void 0&&(e=new Int32Array(t),fu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function z_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function B_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Se(e,t)}}function H_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Se(e,t)}}function V_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Se(e,t)}}function G_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;gu.set(n),i.uniformMatrix2fv(this.addr,!1,gu),Se(e,n)}}function W_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;mu.set(n),i.uniformMatrix3fv(this.addr,!1,mu),Se(e,n)}}function X_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;pu.set(n),i.uniformMatrix4fv(this.addr,!1,pu),Se(e,n)}}function q_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Y_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Se(e,t)}}function $_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Se(e,t)}}function K_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Se(e,t)}}function j_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Z_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Se(e,t)}}function J_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Se(e,t)}}function Q_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Se(e,t)}}function tx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Lf:Pf;e.setTexture2D(t||r,s)}function ex(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Df,s)}function nx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Nf,s)}function ix(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||If,s)}function sx(i){switch(i){case 5126:return z_;case 35664:return B_;case 35665:return H_;case 35666:return V_;case 35674:return G_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return q_;case 35667:case 35671:return Y_;case 35668:case 35672:return $_;case 35669:case 35673:return K_;case 5125:return j_;case 36294:return Z_;case 36295:return J_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return ex;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}function rx(i,t){i.uniform1fv(this.addr,t)}function ox(i,t){const e=Fs(t,this.size,2);i.uniform2fv(this.addr,e)}function ax(i,t){const e=Fs(t,this.size,3);i.uniform3fv(this.addr,e)}function lx(i,t){const e=Fs(t,this.size,4);i.uniform4fv(this.addr,e)}function cx(i,t){const e=Fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function hx(i,t){const e=Fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ux(i,t){const e=Fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function dx(i,t){i.uniform1iv(this.addr,t)}function fx(i,t){i.uniform2iv(this.addr,t)}function px(i,t){i.uniform3iv(this.addr,t)}function mx(i,t){i.uniform4iv(this.addr,t)}function gx(i,t){i.uniform1uiv(this.addr,t)}function vx(i,t){i.uniform2uiv(this.addr,t)}function _x(i,t){i.uniform3uiv(this.addr,t)}function xx(i,t){i.uniform4uiv(this.addr,t)}function Mx(i,t,e){const n=this.cache,s=t.length,r=Go(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Pf,r[o])}function yx(i,t,e){const n=this.cache,s=t.length,r=Go(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Df,r[o])}function Sx(i,t,e){const n=this.cache,s=t.length,r=Go(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Nf,r[o])}function bx(i,t,e){const n=this.cache,s=t.length,r=Go(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||If,r[o])}function Ex(i){switch(i){case 5126:return rx;case 35664:return ox;case 35665:return ax;case 35666:return lx;case 35674:return cx;case 35675:return hx;case 35676:return ux;case 5124:case 35670:return dx;case 35667:case 35671:return fx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return vx;case 36295:return _x;case 36296:return xx;case 35678:case 36198:case 36298:case 36306:case 35682:return Mx;case 35679:case 36299:case 36307:return yx;case 35680:case 36300:case 36308:case 36293:return Sx;case 36289:case 36303:case 36311:case 36292:return bx}}class Tx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sx(e.type)}}class wx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ex(e.type)}}class Ax{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ka=/(\w+)(\])?(\[|\.)?/g;function vu(i,t){i.seq.push(t),i.map[t.id]=t}function Rx(i,t,e){const n=i.name,s=n.length;for(ka.lastIndex=0;;){const r=ka.exec(n),o=ka.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){vu(e,c===void 0?new Tx(a,i,t):new wx(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Ax(a),vu(e,u)),e=u}}}class mo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Rx(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function _u(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Cx=37297;let Px=0;function Lx(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Ix(i){const t=Kt.getPrimaries(Kt.workingColorSpace),e=Kt.getPrimaries(i);let n;switch(t===e?n="":t===wo&&e===To?n="LinearDisplayP3ToLinearSRGB":t===To&&e===wo&&(n="LinearSRGBToLinearDisplayP3"),i){case vi:case Vo:return[n,"LinearTransferOETF"];case hn:case uc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function xu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Lx(i.getShaderSource(t),o)}else return s}function Dx(i,t){const e=Ix(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Nx(i,t){let e;switch(t){case Ym:e="Linear";break;case $m:e="Reinhard";break;case Km:e="OptimizedCineon";break;case rf:e="ACESFilmic";break;case cc:e="AgX";break;case Zm:e="Neutral";break;case jm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ux(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function Ox(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Js(i){return i!==""}function Mu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const kx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pl(i){return i.replace(kx,Bx)}const zx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Bx(i,t){let e=kt[t];if(e===void 0){const n=zx.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Pl(e)}const Hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Su(i){return i.replace(Hx,Vx)}function Vx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Gx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ef?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===nf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fn&&(t="SHADOWMAP_TYPE_VSM"),t}function Wx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ss:case bs:t="ENVMAP_TYPE_CUBE";break;case Ho:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case bs:t="ENVMAP_MODE_REFRACTION";break}return t}function qx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sf:t="ENVMAP_BLENDING_MULTIPLY";break;case Xm:t="ENVMAP_BLENDING_MIX";break;case qm:t="ENVMAP_BLENDING_ADD";break}return t}function Yx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function $x(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Gx(e),c=Wx(e),h=Xx(e),u=qx(e),d=Yx(e),f=Ux(e),g=Ox(r),v=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Js).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Js).join(`
`),p.length>0&&(p+=`
`)):(m=[bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),p=[bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?kt.tonemapping_pars_fragment:"",e.toneMapping!==ai?Nx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,Dx("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Js).join(`
`)),o=Pl(o),o=Mu(o,e),o=yu(o,e),a=Pl(a),a=Mu(a,e),a=yu(a,e),o=Su(o),a=Su(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=y+m+o,b=y+p+a,P=_u(s,s.VERTEX_SHADER,_),T=_u(s,s.FRAGMENT_SHADER,b);s.attachShader(v,P),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(D){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(v).trim(),L=s.getShaderInfoLog(P).trim(),k=s.getShaderInfoLog(T).trim();let X=!0,Y=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,P,T);else{const et=xu(s,P,"vertex"),H=xu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+et+`
`+H)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(L===""||k==="")&&(Y=!1);Y&&(D.diagnostics={runnable:X,programLog:O,vertexShader:{log:L,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(P),s.deleteShader(T),I=new mo(s,v),S=Fx(s,v)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,Cx)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Px++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=T,this}let Kx=0;class jx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Zx(t),e.set(t,n)),n}}class Zx{constructor(t){this.id=Kx++,this.code=t,this.usedTimes=0}}function Jx(i,t,e,n,s,r,o){const a=new yf,l=new jx,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,x,D,O,L){const k=O.fog,X=L.geometry,Y=S.isMeshStandardMaterial?O.environment:null,et=(S.isMeshStandardMaterial?e:t).get(S.envMap||Y),H=et&&et.mapping===Ho?et.image.height:null,$=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const Z=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,rt=Z!==void 0?Z.length:0;let Lt=0;X.morphAttributes.position!==void 0&&(Lt=1),X.morphAttributes.normal!==void 0&&(Lt=2),X.morphAttributes.color!==void 0&&(Lt=3);let Bt,W,J,ht;if($){const Re=Sn[$];Bt=Re.vertexShader,W=Re.fragmentShader}else Bt=S.vertexShader,W=S.fragmentShader,l.update(S),J=l.getVertexShaderID(S),ht=l.getFragmentShaderID(S);const it=i.getRenderTarget(),bt=L.isInstancedMesh===!0,Tt=L.isBatchedMesh===!0,It=!!S.map,U=!!S.matcap,ut=!!et,gt=!!S.aoMap,$t=!!S.lightMap,yt=!!S.bumpMap,Gt=!!S.normalMap,w=!!S.displacementMap,M=!!S.emissiveMap,z=!!S.metalnessMap,q=!!S.roughnessMap,K=S.anisotropy>0,j=S.clearcoat>0,Et=S.iridescence>0,Q=S.sheen>0,xt=S.transmission>0,wt=K&&!!S.anisotropyMap,st=j&&!!S.clearcoatMap,ct=j&&!!S.clearcoatNormalMap,Rt=j&&!!S.clearcoatRoughnessMap,dt=Et&&!!S.iridescenceMap,ft=Et&&!!S.iridescenceThicknessMap,Ht=Q&&!!S.sheenColorMap,Vt=Q&&!!S.sheenRoughnessMap,Xt=!!S.specularMap,Wt=!!S.specularColorMap,Jt=!!S.specularIntensityMap,mt=xt&&!!S.transmissionMap,A=xt&&!!S.thicknessMap,nt=!!S.gradientMap,tt=!!S.alphaMap,vt=S.alphaTest>0,At=!!S.alphaHash,Qt=!!S.extensions;let se=ai;S.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(se=i.toneMapping);const ae={shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:Bt,fragmentShader:W,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:ht,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Tt,instancing:bt,instancingColor:bt&&L.instanceColor!==null,instancingMorph:bt&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:vi,alphaToCoverage:!!S.alphaToCoverage,map:It,matcap:U,envMap:ut,envMapMode:ut&&et.mapping,envMapCubeUVHeight:H,aoMap:gt,lightMap:$t,bumpMap:yt,normalMap:Gt,displacementMap:d&&w,emissiveMap:M,normalMapObjectSpace:Gt&&S.normalMapType===h0,normalMapTangentSpace:Gt&&S.normalMapType===hc,metalnessMap:z,roughnessMap:q,anisotropy:K,anisotropyMap:wt,clearcoat:j,clearcoatMap:st,clearcoatNormalMap:ct,clearcoatRoughnessMap:Rt,iridescence:Et,iridescenceMap:dt,iridescenceThicknessMap:ft,sheen:Q,sheenColorMap:Ht,sheenRoughnessMap:Vt,specularMap:Xt,specularColorMap:Wt,specularIntensityMap:Jt,transmission:xt,transmissionMap:mt,thicknessMap:A,gradientMap:nt,opaque:S.transparent===!1&&S.blending===Vi&&S.alphaToCoverage===!1,alphaMap:tt,alphaTest:vt,alphaHash:At,combine:S.combine,mapUv:It&&v(S.map.channel),aoMapUv:gt&&v(S.aoMap.channel),lightMapUv:$t&&v(S.lightMap.channel),bumpMapUv:yt&&v(S.bumpMap.channel),normalMapUv:Gt&&v(S.normalMap.channel),displacementMapUv:w&&v(S.displacementMap.channel),emissiveMapUv:M&&v(S.emissiveMap.channel),metalnessMapUv:z&&v(S.metalnessMap.channel),roughnessMapUv:q&&v(S.roughnessMap.channel),anisotropyMapUv:wt&&v(S.anisotropyMap.channel),clearcoatMapUv:st&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ct&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&v(S.sheenRoughnessMap.channel),specularMapUv:Xt&&v(S.specularMap.channel),specularColorMapUv:Wt&&v(S.specularColorMap.channel),specularIntensityMapUv:Jt&&v(S.specularIntensityMap.channel),transmissionMapUv:mt&&v(S.transmissionMap.channel),thicknessMapUv:A&&v(S.thicknessMap.channel),alphaMapUv:tt&&v(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Gt||K),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!X.attributes.uv&&(It||tt),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:L.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:Lt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,useLegacyLights:i._useLegacyLights,decodeVideoTexture:It&&S.map.isVideoTexture===!0&&Kt.getTransfer(S.map.colorSpace)===te,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===un,flipSided:S.side===ke,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Qt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Qt&&S.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ae.vertexUv1s=c.has(1),ae.vertexUv2s=c.has(2),ae.vertexUv3s=c.has(3),c.clear(),ae}function p(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)x.push(D),x.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(y(x,S),_(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function y(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function _(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.useLegacyLights&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.alphaToCoverage&&a.enable(20),S.push(a.mask)}function b(S){const x=g[S.type];let D;if(x){const O=Sn[x];D=Tn.clone(O.uniforms)}else D=S.uniforms;return D}function P(S,x){let D;for(let O=0,L=h.length;O<L;O++){const k=h[O];if(k.cacheKey===x){D=k,++D.usedTimes;break}}return D===void 0&&(D=new $x(i,x,S,r),h.push(D)),D}function T(S){if(--S.usedTimes===0){const x=h.indexOf(S);h[x]=h[h.length-1],h.pop(),S.destroy()}}function C(S){l.remove(S)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:P,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:I}}function Qx(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function t1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Eu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Tu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function a(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||t1),n.length>1&&n.sort(d||Eu),s.length>1&&s.sort(d||Eu)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function e1(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Tu,i.set(n,[o])):s>=r.length?(o=new Tu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function n1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new _t};break;case"SpotLight":e={position:new R,direction:new R,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new _t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":e={color:new _t,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function i1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let s1=0;function r1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function o1(i){const t=new n1,e=i1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const s=new R,r=new Pt,o=new Pt;function a(c,h){let u=0,d=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let g=0,v=0,m=0,p=0,y=0,_=0,b=0,P=0,T=0,C=0,I=0;c.sort(r1);const S=h===!0?Math.PI:1;for(let D=0,O=c.length;D<O;D++){const L=c[D],k=L.color,X=L.intensity,Y=L.distance,et=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=k.r*X*S,d+=k.g*X*S,f+=k.b*X*S;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],X);I++}else if(L.isDirectionalLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity*S),L.castShadow){const $=L.shadow,Z=e.get(L);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,n.directionalShadow[g]=Z,n.directionalShadowMap[g]=et,n.directionalShadowMatrix[g]=L.shadow.matrix,_++}n.directional[g]=H,g++}else if(L.isSpotLight){const H=t.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(k).multiplyScalar(X*S),H.distance=Y,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[m]=H;const $=L.shadow;if(L.map&&(n.spotLightMap[T]=L.map,T++,$.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[m]=$.matrix,L.castShadow){const Z=e.get(L);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,n.spotShadow[m]=Z,n.spotShadowMap[m]=et,P++}m++}else if(L.isRectAreaLight){const H=t.get(L);H.color.copy(k).multiplyScalar(X),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=H,p++}else if(L.isPointLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity*S),H.distance=L.distance,H.decay=L.decay,L.castShadow){const $=L.shadow,Z=e.get(L);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,Z.shadowCameraNear=$.camera.near,Z.shadowCameraFar=$.camera.far,n.pointShadow[v]=Z,n.pointShadowMap[v]=et,n.pointShadowMatrix[v]=L.shadow.matrix,b++}n.point[v]=H,v++}else if(L.isHemisphereLight){const H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(X*S),H.groundColor.copy(L.groundColor).multiplyScalar(X*S),n.hemi[y]=H,y++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const x=n.hash;(x.directionalLength!==g||x.pointLength!==v||x.spotLength!==m||x.rectAreaLength!==p||x.hemiLength!==y||x.numDirectionalShadows!==_||x.numPointShadows!==b||x.numSpotShadows!==P||x.numSpotMaps!==T||x.numLightProbes!==I)&&(n.directional.length=g,n.spot.length=m,n.rectArea.length=p,n.point.length=v,n.hemi.length=y,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=P,n.spotShadowMap.length=P,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=P+T-C,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=I,x.directionalLength=g,x.pointLength=v,x.spotLength=m,x.rectAreaLength=p,x.hemiLength=y,x.numDirectionalShadows=_,x.numPointShadows=b,x.numSpotShadows=P,x.numSpotMaps=T,x.numLightProbes=I,n.version=s1++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const _=c[p];if(_.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(_.isSpotLight){const b=n.spot[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(_.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const b=n.hemi[v];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function wu(i){const t=new o1(i),e=[],n=[];function s(){e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(h){t.setup(e,h)}function l(h){t.setupView(e,h)}return{init:s,state:{lightsArray:e,shadowsArray:n,lights:t,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function a1(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new wu(i),t.set(s,[a])):r>=o.length?(a=new wu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Uf extends Wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=c0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class l1 extends Wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const c1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h1=`uniform sampler2D shadow_pass;
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
}`;function u1(i,t,e){let n=new pc;const s=new at,r=new at,o=new me,a=new Uf({depthPacking:gf}),l=new l1,c={},h=e.maxTextureSize,u={[Bn]:ke,[ke]:Bn,[un]:un},d=new ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:c1,fragmentShader:h1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new fe;g.setAttribute("position",new ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new St(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ef;let p=this.type;this.render=function(T,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),x=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Te),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const L=p!==Fn&&this.type===Fn,k=p===Fn&&this.type!==Fn;for(let X=0,Y=T.length;X<Y;X++){const et=T[X],H=et.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const $=H.getFrameExtents();if(s.multiply($),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,H.mapSize.y=r.y)),H.map===null||L===!0||k===!0){const rt=this.type!==Fn?{minFilter:xe,magFilter:xe}:{};H.map!==null&&H.map.dispose(),H.map=new ze(s.x,s.y,rt),H.map.texture.name=et.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const Z=H.getViewportCount();for(let rt=0;rt<Z;rt++){const Lt=H.getViewport(rt);o.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),O.viewport(o),H.updateMatrices(et,rt),n=H.getFrustum(),b(C,I,H.camera,et,this.type)}H.isPointLightShadow!==!0&&this.type===Fn&&y(H,I),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,x,D)};function y(T,C){const I=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ze(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,I,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,I,f,v,null)}function _(T,C,I,S){let x=null;const D=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)x=D;else if(x=I.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const O=x.uuid,L=C.uuid;let k=c[O];k===void 0&&(k={},c[O]=k);let X=k[L];X===void 0&&(X=x.clone(),k[L]=X,C.addEventListener("dispose",P)),x=X}if(x.visible=C.visible,x.wireframe=C.wireframe,S===Fn?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:u[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const O=i.properties.get(x);O.light=I}return x}function b(T,C,I,S,x){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Fn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const L=t.update(T),k=T.material;if(Array.isArray(k)){const X=L.groups;for(let Y=0,et=X.length;Y<et;Y++){const H=X[Y],$=k[H.materialIndex];if($&&$.visible){const Z=_(T,$,S,x);T.onBeforeShadow(i,T,C,I,L,Z,H),i.renderBufferDirect(I,null,L,Z,T,H),T.onAfterShadow(i,T,C,I,L,Z,H)}}}else if(k.visible){const X=_(T,k,S,x);T.onBeforeShadow(i,T,C,I,L,X,null),i.renderBufferDirect(I,null,L,X,T,null),T.onAfterShadow(i,T,C,I,L,X,null)}}const O=T.children;for(let L=0,k=O.length;L<k;L++)b(O[L],C,I,S,x)}function P(T){T.target.removeEventListener("dispose",P);for(const I in c){const S=c[I],x=T.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}function d1(i){function t(){let A=!1;const nt=new me;let tt=null;const vt=new me(0,0,0,0);return{setMask:function(At){tt!==At&&!A&&(i.colorMask(At,At,At,At),tt=At)},setLocked:function(At){A=At},setClear:function(At,Qt,se,ae,Re){Re===!0&&(At*=ae,Qt*=ae,se*=ae),nt.set(At,Qt,se,ae),vt.equals(nt)===!1&&(i.clearColor(At,Qt,se,ae),vt.copy(nt))},reset:function(){A=!1,tt=null,vt.set(-1,0,0,0)}}}function e(){let A=!1,nt=null,tt=null,vt=null;return{setTest:function(At){At?ht(i.DEPTH_TEST):it(i.DEPTH_TEST)},setMask:function(At){nt!==At&&!A&&(i.depthMask(At),nt=At)},setFunc:function(At){if(tt!==At){switch(At){case km:i.depthFunc(i.NEVER);break;case zm:i.depthFunc(i.ALWAYS);break;case Bm:i.depthFunc(i.LESS);break;case bo:i.depthFunc(i.LEQUAL);break;case Hm:i.depthFunc(i.EQUAL);break;case Vm:i.depthFunc(i.GEQUAL);break;case Gm:i.depthFunc(i.GREATER);break;case Wm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=At}},setLocked:function(At){A=At},setClear:function(At){vt!==At&&(i.clearDepth(At),vt=At)},reset:function(){A=!1,nt=null,tt=null,vt=null}}}function n(){let A=!1,nt=null,tt=null,vt=null,At=null,Qt=null,se=null,ae=null,Re=null;return{setTest:function(ne){A||(ne?ht(i.STENCIL_TEST):it(i.STENCIL_TEST))},setMask:function(ne){nt!==ne&&!A&&(i.stencilMask(ne),nt=ne)},setFunc:function(ne,vn,_n){(tt!==ne||vt!==vn||At!==_n)&&(i.stencilFunc(ne,vn,_n),tt=ne,vt=vn,At=_n)},setOp:function(ne,vn,_n){(Qt!==ne||se!==vn||ae!==_n)&&(i.stencilOp(ne,vn,_n),Qt=ne,se=vn,ae=_n)},setLocked:function(ne){A=ne},setClear:function(ne){Re!==ne&&(i.clearStencil(ne),Re=ne)},reset:function(){A=!1,nt=null,tt=null,vt=null,At=null,Qt=null,se=null,ae=null,Re=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,y=null,_=null,b=null,P=null,T=new _t(0,0,0),C=0,I=!1,S=null,x=null,D=null,O=null,L=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Y=0;const et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(et)[1]),X=Y>=1):et.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),X=Y>=2);let H=null,$={};const Z=i.getParameter(i.SCISSOR_BOX),rt=i.getParameter(i.VIEWPORT),Lt=new me().fromArray(Z),Bt=new me().fromArray(rt);function W(A,nt,tt,vt){const At=new Uint8Array(4),Qt=i.createTexture();i.bindTexture(A,Qt),i.texParameteri(A,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(A,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<tt;se++)A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(nt+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return Qt}const J={};J[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ht(i.DEPTH_TEST),r.setFunc(bo),yt(!1),Gt(lh),ht(i.CULL_FACE),gt(Te);function ht(A){c[A]!==!0&&(i.enable(A),c[A]=!0)}function it(A){c[A]!==!1&&(i.disable(A),c[A]=!1)}function bt(A,nt){return h[A]!==nt?(i.bindFramebuffer(A,nt),h[A]=nt,A===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=nt),A===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function Tt(A,nt){let tt=d,vt=!1;if(A){tt=u.get(nt),tt===void 0&&(tt=[],u.set(nt,tt));const At=A.textures;if(tt.length!==At.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let Qt=0,se=At.length;Qt<se;Qt++)tt[Qt]=i.COLOR_ATTACHMENT0+Qt;tt.length=At.length,vt=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,vt=!0);vt&&i.drawBuffers(tt)}function It(A){return f!==A?(i.useProgram(A),f=A,!0):!1}const U={[dn]:i.FUNC_ADD,[Tm]:i.FUNC_SUBTRACT,[wm]:i.FUNC_REVERSE_SUBTRACT};U[Am]=i.MIN,U[Rm]=i.MAX;const ut={[gs]:i.ZERO,[po]:i.ONE,[Cm]:i.SRC_COLOR,[Sl]:i.SRC_ALPHA,[Dm]:i.SRC_ALPHA_SATURATE,[Tl]:i.DST_COLOR,[El]:i.DST_ALPHA,[Pm]:i.ONE_MINUS_SRC_COLOR,[bl]:i.ONE_MINUS_SRC_ALPHA,[Im]:i.ONE_MINUS_DST_COLOR,[Lm]:i.ONE_MINUS_DST_ALPHA,[Nm]:i.CONSTANT_COLOR,[Um]:i.ONE_MINUS_CONSTANT_COLOR,[Om]:i.CONSTANT_ALPHA,[Fm]:i.ONE_MINUS_CONSTANT_ALPHA};function gt(A,nt,tt,vt,At,Qt,se,ae,Re,ne){if(A===Te){g===!0&&(it(i.BLEND),g=!1);return}if(g===!1&&(ht(i.BLEND),g=!0),A!==lc){if(A!==v||ne!==I){if((m!==dn||_!==dn)&&(i.blendEquation(i.FUNC_ADD),m=dn,_=dn),ne)switch(A){case Vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rr:i.blendFunc(i.ONE,i.ONE);break;case ch:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ch:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}p=null,y=null,b=null,P=null,T.set(0,0,0),C=0,v=A,I=ne}return}At=At||nt,Qt=Qt||tt,se=se||vt,(nt!==m||At!==_)&&(i.blendEquationSeparate(U[nt],U[At]),m=nt,_=At),(tt!==p||vt!==y||Qt!==b||se!==P)&&(i.blendFuncSeparate(ut[tt],ut[vt],ut[Qt],ut[se]),p=tt,y=vt,b=Qt,P=se),(ae.equals(T)===!1||Re!==C)&&(i.blendColor(ae.r,ae.g,ae.b,Re),T.copy(ae),C=Re),v=A,I=!1}function $t(A,nt){A.side===un?it(i.CULL_FACE):ht(i.CULL_FACE);let tt=A.side===ke;nt&&(tt=!tt),yt(tt),A.blending===Vi&&A.transparent===!1?gt(Te):gt(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),r.setFunc(A.depthFunc),r.setTest(A.depthTest),r.setMask(A.depthWrite),s.setMask(A.colorWrite);const vt=A.stencilWrite;o.setTest(vt),vt&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),M(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):it(i.SAMPLE_ALPHA_TO_COVERAGE)}function yt(A){S!==A&&(A?i.frontFace(i.CW):i.frontFace(i.CCW),S=A)}function Gt(A){A!==bm?(ht(i.CULL_FACE),A!==x&&(A===lh?i.cullFace(i.BACK):A===Em?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):it(i.CULL_FACE),x=A}function w(A){A!==D&&(X&&i.lineWidth(A),D=A)}function M(A,nt,tt){A?(ht(i.POLYGON_OFFSET_FILL),(O!==nt||L!==tt)&&(i.polygonOffset(nt,tt),O=nt,L=tt)):it(i.POLYGON_OFFSET_FILL)}function z(A){A?ht(i.SCISSOR_TEST):it(i.SCISSOR_TEST)}function q(A){A===void 0&&(A=i.TEXTURE0+k-1),H!==A&&(i.activeTexture(A),H=A)}function K(A,nt,tt){tt===void 0&&(H===null?tt=i.TEXTURE0+k-1:tt=H);let vt=$[tt];vt===void 0&&(vt={type:void 0,texture:void 0},$[tt]=vt),(vt.type!==A||vt.texture!==nt)&&(H!==tt&&(i.activeTexture(tt),H=tt),i.bindTexture(A,nt||J[A]),vt.type=A,vt.texture=nt)}function j(){const A=$[H];A!==void 0&&A.type!==void 0&&(i.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function Et(){try{i.compressedTexImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function xt(){try{i.texSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function st(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ct(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Rt(){try{i.texStorage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ht(){try{i.texImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Vt(A){Lt.equals(A)===!1&&(i.scissor(A.x,A.y,A.z,A.w),Lt.copy(A))}function Xt(A){Bt.equals(A)===!1&&(i.viewport(A.x,A.y,A.z,A.w),Bt.copy(A))}function Wt(A,nt){let tt=l.get(nt);tt===void 0&&(tt=new WeakMap,l.set(nt,tt));let vt=tt.get(A);vt===void 0&&(vt=i.getUniformBlockIndex(nt,A.name),tt.set(A,vt))}function Jt(A,nt){const vt=l.get(nt).get(A);a.get(nt)!==vt&&(i.uniformBlockBinding(nt,vt,A.__bindingPointIndex),a.set(nt,vt))}function mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},H=null,$={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,y=null,_=null,b=null,P=null,T=new _t(0,0,0),C=0,I=!1,S=null,x=null,D=null,O=null,L=null,Lt.set(0,0,i.canvas.width,i.canvas.height),Bt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ht,disable:it,bindFramebuffer:bt,drawBuffers:Tt,useProgram:It,setBlending:gt,setMaterial:$t,setFlipSided:yt,setCullFace:Gt,setLineWidth:w,setPolygonOffset:M,setScissorTest:z,activeTexture:q,bindTexture:K,unbindTexture:j,compressedTexImage2D:Et,compressedTexImage3D:Q,texImage2D:ft,texImage3D:Ht,updateUBOMapping:Wt,uniformBlockBinding:Jt,texStorage2D:Rt,texStorage3D:dt,texSubImage2D:xt,texSubImage3D:wt,compressedTexSubImage2D:st,compressedTexSubImage3D:ct,scissor:Vt,viewport:Xt,reset:mt}}function f1(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return f?new OffscreenCanvas(w,M):Ro("canvas")}function v(w,M,z){let q=1;const K=Gt(w);if((K.width>z||K.height>z)&&(q=z/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const j=Math.floor(q*K.width),Et=Math.floor(q*K.height);u===void 0&&(u=g(j,Et));const Q=M?g(j,Et):u;return Q.width=j,Q.height=Et,Q.getContext("2d").drawImage(w,0,0,j,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+j+"x"+Et+")."),Q}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function m(w){return w.generateMipmaps&&w.minFilter!==xe&&w.minFilter!==fn}function p(w){i.generateMipmap(w)}function y(w,M,z,q,K=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=M;if(M===i.RED&&(z===i.FLOAT&&(j=i.R32F),z===i.HALF_FLOAT&&(j=i.R16F),z===i.UNSIGNED_BYTE&&(j=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.R8UI),z===i.UNSIGNED_SHORT&&(j=i.R16UI),z===i.UNSIGNED_INT&&(j=i.R32UI),z===i.BYTE&&(j=i.R8I),z===i.SHORT&&(j=i.R16I),z===i.INT&&(j=i.R32I)),M===i.RG&&(z===i.FLOAT&&(j=i.RG32F),z===i.HALF_FLOAT&&(j=i.RG16F),z===i.UNSIGNED_BYTE&&(j=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RG8UI),z===i.UNSIGNED_SHORT&&(j=i.RG16UI),z===i.UNSIGNED_INT&&(j=i.RG32UI),z===i.BYTE&&(j=i.RG8I),z===i.SHORT&&(j=i.RG16I),z===i.INT&&(j=i.RG32I)),M===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),M===i.RGBA){const Et=K?Eo:Kt.getTransfer(q);z===i.FLOAT&&(j=i.RGBA32F),z===i.HALF_FLOAT&&(j=i.RGBA16F),z===i.UNSIGNED_BYTE&&(j=Et===te?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function _(w,M){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==xe&&w.minFilter!==fn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function b(w){const M=w.target;M.removeEventListener("dispose",b),T(M),M.isVideoTexture&&h.delete(M)}function P(w){const M=w.target;M.removeEventListener("dispose",P),I(M)}function T(w){const M=n.get(w);if(M.__webglInit===void 0)return;const z=w.source,q=d.get(z);if(q){const K=q[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&C(w),Object.keys(q).length===0&&d.delete(z)}n.remove(w)}function C(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const z=w.source,q=d.get(z);delete q[M.__cacheKey],o.memory.textures--}function I(w){const M=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let K=0;K<M.__webglFramebuffer[q].length;K++)i.deleteFramebuffer(M.__webglFramebuffer[q][K]);else i.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)i.deleteFramebuffer(M.__webglFramebuffer[q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=w.textures;for(let q=0,K=z.length;q<K;q++){const j=n.get(z[q]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(z[q])}n.remove(w)}let S=0;function x(){S=0}function D(){const w=S;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),S+=1,w}function O(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function L(w,M){const z=n.get(w);if(w.isVideoTexture&&$t(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){const q=w.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(z,w,M);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function k(w,M){const z=n.get(w);if(w.version>0&&z.__version!==w.version){Lt(z,w,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function X(w,M){const z=n.get(w);if(w.version>0&&z.__version!==w.version){Lt(z,w,M);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function Y(w,M){const z=n.get(w);if(w.version>0&&z.__version!==w.version){Bt(z,w,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}const et={[di]:i.REPEAT,[ki]:i.CLAMP_TO_EDGE,[Rl]:i.MIRRORED_REPEAT},H={[xe]:i.NEAREST,[Qm]:i.NEAREST_MIPMAP_NEAREST,[Er]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[aa]:i.LINEAR_MIPMAP_NEAREST,[zi]:i.LINEAR_MIPMAP_LINEAR},$={[u0]:i.NEVER,[v0]:i.ALWAYS,[d0]:i.LESS,[vf]:i.LEQUAL,[f0]:i.EQUAL,[g0]:i.GEQUAL,[p0]:i.GREATER,[m0]:i.NOTEQUAL};function Z(w,M){if(M.type===wn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===fn||M.magFilter===aa||M.magFilter===Er||M.magFilter===zi||M.minFilter===fn||M.minFilter===aa||M.minFilter===Er||M.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,et[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,et[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,et[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,H[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,H[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,$[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===xe||M.minFilter!==Er&&M.minFilter!==zi||M.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function rt(w,M){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",b));const q=M.source;let K=d.get(q);K===void 0&&(K={},d.set(q,K));const j=O(M);if(j!==w.__cacheKey){K[j]===void 0&&(K[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),K[j].usedTimes++;const Et=K[w.__cacheKey];Et!==void 0&&(K[w.__cacheKey].usedTimes--,Et.usedTimes===0&&C(M)),w.__cacheKey=j,w.__webglTexture=K[j].texture}return z}function Lt(w,M,z){let q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=i.TEXTURE_3D);const K=rt(w,M),j=M.source;e.bindTexture(q,w.__webglTexture,i.TEXTURE0+z);const Et=n.get(j);if(j.version!==Et.__version||K===!0){e.activeTexture(i.TEXTURE0+z);const Q=Kt.getPrimaries(Kt.workingColorSpace),xt=M.colorSpace===si?null:Kt.getPrimaries(M.colorSpace),wt=M.colorSpace===si||Q===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let st=v(M.image,!1,s.maxTextureSize);st=yt(M,st);const ct=r.convert(M.format,M.colorSpace),Rt=r.convert(M.type);let dt=y(M.internalFormat,ct,Rt,M.colorSpace,M.isVideoTexture);Z(q,M);let ft;const Ht=M.mipmaps,Vt=M.isVideoTexture!==!0&&dt!==mf,Xt=Et.__version===void 0||K===!0,Wt=j.dataReady,Jt=_(M,st);if(M.isDepthTexture)dt=i.DEPTH_COMPONENT16,M.type===wn?dt=i.DEPTH_COMPONENT32F:M.type===Es?dt=i.DEPTH_COMPONENT24:M.type===Ns&&(dt=i.DEPTH24_STENCIL8),Xt&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,dt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,dt,st.width,st.height,0,ct,Rt,null));else if(M.isDataTexture)if(Ht.length>0){Vt&&Xt&&e.texStorage2D(i.TEXTURE_2D,Jt,dt,Ht[0].width,Ht[0].height);for(let mt=0,A=Ht.length;mt<A;mt++)ft=Ht[mt],Vt?Wt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,ft.width,ft.height,ct,Rt,ft.data):e.texImage2D(i.TEXTURE_2D,mt,dt,ft.width,ft.height,0,ct,Rt,ft.data);M.generateMipmaps=!1}else Vt?(Xt&&e.texStorage2D(i.TEXTURE_2D,Jt,dt,st.width,st.height),Wt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,ct,Rt,st.data)):e.texImage2D(i.TEXTURE_2D,0,dt,st.width,st.height,0,ct,Rt,st.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Vt&&Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Jt,dt,Ht[0].width,Ht[0].height,st.depth);for(let mt=0,A=Ht.length;mt<A;mt++)ft=Ht[mt],M.format!==on?ct!==null?Vt?Wt&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,ft.width,ft.height,st.depth,ct,ft.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,dt,ft.width,ft.height,st.depth,0,ft.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?Wt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,ft.width,ft.height,st.depth,ct,Rt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,mt,dt,ft.width,ft.height,st.depth,0,ct,Rt,ft.data)}else{Vt&&Xt&&e.texStorage2D(i.TEXTURE_2D,Jt,dt,Ht[0].width,Ht[0].height);for(let mt=0,A=Ht.length;mt<A;mt++)ft=Ht[mt],M.format!==on?ct!==null?Vt?Wt&&e.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,ft.width,ft.height,ct,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,mt,dt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?Wt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,ft.width,ft.height,ct,Rt,ft.data):e.texImage2D(i.TEXTURE_2D,mt,dt,ft.width,ft.height,0,ct,Rt,ft.data)}else if(M.isDataArrayTexture)Vt?(Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Jt,dt,st.width,st.height,st.depth),Wt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,ct,Rt,st.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,dt,st.width,st.height,st.depth,0,ct,Rt,st.data);else if(M.isData3DTexture)Vt?(Xt&&e.texStorage3D(i.TEXTURE_3D,Jt,dt,st.width,st.height,st.depth),Wt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,ct,Rt,st.data)):e.texImage3D(i.TEXTURE_3D,0,dt,st.width,st.height,st.depth,0,ct,Rt,st.data);else if(M.isFramebufferTexture){if(Xt)if(Vt)e.texStorage2D(i.TEXTURE_2D,Jt,dt,st.width,st.height);else{let mt=st.width,A=st.height;for(let nt=0;nt<Jt;nt++)e.texImage2D(i.TEXTURE_2D,nt,dt,mt,A,0,ct,Rt,null),mt>>=1,A>>=1}}else if(Ht.length>0){if(Vt&&Xt){const mt=Gt(Ht[0]);e.texStorage2D(i.TEXTURE_2D,Jt,dt,mt.width,mt.height)}for(let mt=0,A=Ht.length;mt<A;mt++)ft=Ht[mt],Vt?Wt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,ct,Rt,ft):e.texImage2D(i.TEXTURE_2D,mt,dt,ct,Rt,ft);M.generateMipmaps=!1}else if(Vt){if(Xt){const mt=Gt(st);e.texStorage2D(i.TEXTURE_2D,Jt,dt,mt.width,mt.height)}Wt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,Rt,st)}else e.texImage2D(i.TEXTURE_2D,0,dt,ct,Rt,st);m(M)&&p(q),Et.__version=j.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Bt(w,M,z){if(M.image.length!==6)return;const q=rt(w,M),K=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);const j=n.get(K);if(K.version!==j.__version||q===!0){e.activeTexture(i.TEXTURE0+z);const Et=Kt.getPrimaries(Kt.workingColorSpace),Q=M.colorSpace===si?null:Kt.getPrimaries(M.colorSpace),xt=M.colorSpace===si||Et===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const wt=M.isCompressedTexture||M.image[0].isCompressedTexture,st=M.image[0]&&M.image[0].isDataTexture,ct=[];for(let A=0;A<6;A++)!wt&&!st?ct[A]=v(M.image[A],!0,s.maxCubemapSize):ct[A]=st?M.image[A].image:M.image[A],ct[A]=yt(M,ct[A]);const Rt=ct[0],dt=r.convert(M.format,M.colorSpace),ft=r.convert(M.type),Ht=y(M.internalFormat,dt,ft,M.colorSpace),Vt=M.isVideoTexture!==!0,Xt=j.__version===void 0||q===!0,Wt=K.dataReady;let Jt=_(M,Rt);Z(i.TEXTURE_CUBE_MAP,M);let mt;if(wt){Vt&&Xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Jt,Ht,Rt.width,Rt.height);for(let A=0;A<6;A++){mt=ct[A].mipmaps;for(let nt=0;nt<mt.length;nt++){const tt=mt[nt];M.format!==on?dt!==null?Vt?Wt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,nt,0,0,tt.width,tt.height,dt,tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,nt,Ht,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?Wt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,nt,0,0,tt.width,tt.height,dt,ft,tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,nt,Ht,tt.width,tt.height,0,dt,ft,tt.data)}}}else{if(mt=M.mipmaps,Vt&&Xt){mt.length>0&&Jt++;const A=Gt(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Jt,Ht,A.width,A.height)}for(let A=0;A<6;A++)if(st){Vt?Wt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,0,0,0,ct[A].width,ct[A].height,dt,ft,ct[A].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,0,Ht,ct[A].width,ct[A].height,0,dt,ft,ct[A].data);for(let nt=0;nt<mt.length;nt++){const vt=mt[nt].image[A].image;Vt?Wt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,nt+1,0,0,vt.width,vt.height,dt,ft,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,nt+1,Ht,vt.width,vt.height,0,dt,ft,vt.data)}}else{Vt?Wt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,0,0,0,dt,ft,ct[A]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,0,Ht,dt,ft,ct[A]);for(let nt=0;nt<mt.length;nt++){const tt=mt[nt];Vt?Wt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,nt+1,0,0,dt,ft,tt.image[A]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,nt+1,Ht,dt,ft,tt.image[A])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),j.__version=K.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function W(w,M,z,q,K,j){const Et=r.convert(z.format,z.colorSpace),Q=r.convert(z.type),xt=y(z.internalFormat,Et,Q,z.colorSpace);if(!n.get(M).__hasExternalTextures){const st=Math.max(1,M.width>>j),ct=Math.max(1,M.height>>j);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,j,xt,st,ct,M.depth,0,Et,Q,null):e.texImage2D(K,j,xt,st,ct,0,Et,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),gt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,K,n.get(z).__webglTexture,0,ut(M)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,K,n.get(z).__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function J(w,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer&&!M.stencilBuffer){let q=i.DEPTH_COMPONENT24;if(z||gt(M)){const K=M.depthTexture;K&&K.isDepthTexture&&(K.type===wn?q=i.DEPTH_COMPONENT32F:K.type===Es&&(q=i.DEPTH_COMPONENT24));const j=ut(M);gt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,q,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,j,q,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,q,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(M.depthBuffer&&M.stencilBuffer){const q=ut(M);z&&gt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,q,i.DEPTH24_STENCIL8,M.width,M.height):gt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,q,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{const q=M.textures;for(let K=0;K<q.length;K++){const j=q[K],Et=r.convert(j.format,j.colorSpace),Q=r.convert(j.type),xt=y(j.internalFormat,Et,Q,j.colorSpace),wt=ut(M);z&&gt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,xt,M.width,M.height):gt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt,xt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,xt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),L(M.depthTexture,0);const q=n.get(M.depthTexture).__webglTexture,K=ut(M);if(M.depthTexture.format===Ms)gt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(M.depthTexture.format===Ts)gt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function it(w){const M=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ht(M.__webglFramebuffer,w)}else if(z){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]=i.createRenderbuffer(),J(M.__webglDepthbuffer[q],w,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),J(M.__webglDepthbuffer,w,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(w,M,z){const q=n.get(w);M!==void 0&&W(q.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&it(w)}function Tt(w){const M=w.texture,z=n.get(w),q=n.get(M);w.addEventListener("dispose",P);const K=w.textures,j=w.isWebGLCubeRenderTarget===!0,Et=K.length>1;if(Et||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=M.version,o.memory.textures++),j){z.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[Q]=[];for(let xt=0;xt<M.mipmaps.length;xt++)z.__webglFramebuffer[Q][xt]=i.createFramebuffer()}else z.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let Q=0;Q<M.mipmaps.length;Q++)z.__webglFramebuffer[Q]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Et)for(let Q=0,xt=K.length;Q<xt;Q++){const wt=n.get(K[Q]);wt.__webglTexture===void 0&&(wt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&gt(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Q=0;Q<K.length;Q++){const xt=K[Q];z.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Q]);const wt=r.convert(xt.format,xt.colorSpace),st=r.convert(xt.type),ct=y(xt.internalFormat,wt,st,xt.colorSpace,w.isXRRenderTarget===!0),Rt=ut(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,ct,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,z.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),J(z.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Z(i.TEXTURE_CUBE_MAP,M);for(let Q=0;Q<6;Q++)if(M.mipmaps&&M.mipmaps.length>0)for(let xt=0;xt<M.mipmaps.length;xt++)W(z.__webglFramebuffer[Q][xt],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt);else W(z.__webglFramebuffer[Q],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let Q=0,xt=K.length;Q<xt;Q++){const wt=K[Q],st=n.get(wt);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),Z(i.TEXTURE_2D,wt),W(z.__webglFramebuffer,w,wt,i.COLOR_ATTACHMENT0+Q,i.TEXTURE_2D,0),m(wt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Q=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,q.__webglTexture),Z(Q,M),M.mipmaps&&M.mipmaps.length>0)for(let xt=0;xt<M.mipmaps.length;xt++)W(z.__webglFramebuffer[xt],w,M,i.COLOR_ATTACHMENT0,Q,xt);else W(z.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,Q,0);m(M)&&p(Q),e.unbindTexture()}w.depthBuffer&&it(w)}function It(w){const M=w.textures;for(let z=0,q=M.length;z<q;z++){const K=M[z];if(m(K)){const j=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Et=n.get(K).__webglTexture;e.bindTexture(j,Et),p(j),e.unbindTexture()}}}function U(w){if(w.samples>0&&gt(w)===!1){const M=w.textures,z=w.width,q=w.height;let K=i.COLOR_BUFFER_BIT;const j=[],Et=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=n.get(w),xt=M.length>1;if(xt)for(let wt=0;wt<M.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let wt=0;wt<M.length;wt++){j.push(i.COLOR_ATTACHMENT0+wt),w.depthBuffer&&j.push(Et);const st=Q.__ignoreDepthValues!==void 0?Q.__ignoreDepthValues:!1;if(st===!1&&(w.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&Q.__isTransmissionRenderTarget!==!0&&(K|=i.STENCIL_BUFFER_BIT)),xt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Q.__webglColorRenderbuffer[wt]),st===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Et]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Et])),xt){const ct=n.get(M[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,z,q,0,0,z,q,K,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let wt=0;wt<M.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,Q.__webglColorRenderbuffer[wt]);const st=n.get(M[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,st,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}}function ut(w){return Math.min(s.maxSamples,w.samples)}function gt(w){const M=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function $t(w){const M=o.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function yt(w,M){const z=w.colorSpace,q=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==vi&&z!==si&&(Kt.getTransfer(z)===te?(q!==on||K!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function Gt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=x,this.setTexture2D=L,this.setTexture2DArray=k,this.setTexture3D=X,this.setTextureCube=Y,this.rebindTextures=bt,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=W,this.useMultisampledRTT=gt}function p1(i,t){function e(n,s=si){let r;const o=Kt.getTransfer(s);if(n===zn)return i.UNSIGNED_BYTE;if(n===cf)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===n0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===t0)return i.BYTE;if(n===e0)return i.SHORT;if(n===af)return i.UNSIGNED_SHORT;if(n===lf)return i.INT;if(n===Es)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===je)return i.HALF_FLOAT;if(n===i0)return i.ALPHA;if(n===s0)return i.RGB;if(n===on)return i.RGBA;if(n===r0)return i.LUMINANCE;if(n===o0)return i.LUMINANCE_ALPHA;if(n===Ms)return i.DEPTH_COMPONENT;if(n===Ts)return i.DEPTH_STENCIL;if(n===uf)return i.RED;if(n===df)return i.RED_INTEGER;if(n===a0)return i.RG;if(n===ff)return i.RG_INTEGER;if(n===pf)return i.RGBA_INTEGER;if(n===la||n===ca||n===ha||n===ua)if(o===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===la)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===la)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dh||n===fh||n===ph||n===mh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===dh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ph)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===mf)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===gh||n===vh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===gh)return o===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vh)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_h||n===xh||n===Mh||n===yh||n===Sh||n===bh||n===Eh||n===Th||n===wh||n===Ah||n===Rh||n===Ch||n===Ph||n===Lh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_h)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xh)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mh)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yh)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sh)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bh)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Eh)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Th)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wh)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ah)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rh)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ch)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ph)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lh)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===da||n===Ih||n===Dh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===da)return o===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ih)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===l0||n===Nh||n===Uh||n===Oh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===da)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Nh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class m1 extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class jt extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const g1={type:"move"};class za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(g1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const v1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_1=`
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

}`;class x1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new De,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,s=new ce({vertexShader:v1,fragmentShader:_1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new St(new Ue(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class M1 extends Us{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=new x1,m=e.getContextAttributes();let p=null,y=null;const _=[],b=[],P=new at;let T=null;const C=new rn;C.layers.enable(1),C.viewport=new me;const I=new rn;I.layers.enable(2),I.viewport=new me;const S=[C,I],x=new m1;x.layers.enable(1),x.layers.enable(2);let D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=_[W];return J===void 0&&(J=new za,_[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=_[W];return J===void 0&&(J=new za,_[W]=J),J.getGripSpace()},this.getHand=function(W){let J=_[W];return J===void 0&&(J=new za,_[W]=J),J.getHandSpace()};function L(W){const J=b.indexOf(W.inputSource);if(J===-1)return;const ht=_[J];ht!==void 0&&(ht.update(W.inputSource,W.frame,c||o),ht.dispatchEvent({type:W.type,data:W.inputSource}))}function k(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",X);for(let W=0;W<_.length;W++){const J=b[W];J!==null&&(b[W]=null,_[W].disconnect(J))}D=null,O=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,y=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",k),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ze(f.framebufferWidth,f.framebufferHeight,{format:on,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,ht=null,it=null;m.depth&&(it=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?Ts:Ms,ht=m.stencil?Ns:Es);const bt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(bt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new ze(d.textureWidth,d.textureHeight,{format:on,type:zn,depthTexture:new vc(d.textureWidth,d.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});const Tt=t.properties.get(y);Tt.__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Bt.setContext(s),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function X(W){for(let J=0;J<W.removed.length;J++){const ht=W.removed[J],it=b.indexOf(ht);it>=0&&(b[it]=null,_[it].disconnect(ht))}for(let J=0;J<W.added.length;J++){const ht=W.added[J];let it=b.indexOf(ht);if(it===-1){for(let Tt=0;Tt<_.length;Tt++)if(Tt>=b.length){b.push(ht),it=Tt;break}else if(b[Tt]===null){b[Tt]=ht,it=Tt;break}if(it===-1)break}const bt=_[it];bt&&bt.connect(ht)}}const Y=new R,et=new R;function H(W,J,ht){Y.setFromMatrixPosition(J.matrixWorld),et.setFromMatrixPosition(ht.matrixWorld);const it=Y.distanceTo(et),bt=J.projectionMatrix.elements,Tt=ht.projectionMatrix.elements,It=bt[14]/(bt[10]-1),U=bt[14]/(bt[10]+1),ut=(bt[9]+1)/bt[5],gt=(bt[9]-1)/bt[5],$t=(bt[8]-1)/bt[0],yt=(Tt[8]+1)/Tt[0],Gt=It*$t,w=It*yt,M=it/(-$t+yt),z=M*-$t;J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(z),W.translateZ(M),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const q=It+M,K=U+M,j=Gt-z,Et=w+(it-z),Q=ut*U/K*q,xt=gt*U/K*q;W.projectionMatrix.makePerspective(j,Et,Q,xt,q,K),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function $(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;v.texture!==null&&(W.near=v.depthNear,W.far=v.depthFar),x.near=I.near=C.near=W.near,x.far=I.far=C.far=W.far,(D!==x.near||O!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),D=x.near,O=x.far,C.near=D,C.far=O,I.near=D,I.far=O,C.updateProjectionMatrix(),I.updateProjectionMatrix(),W.updateProjectionMatrix());const J=W.parent,ht=x.cameras;$(x,J);for(let it=0;it<ht.length;it++)$(ht[it],J);ht.length===2?H(x,C,I):x.projectionMatrix.copy(C.projectionMatrix),Z(W,x,J)};function Z(W,J,ht){ht===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(ht.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Cl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null};let rt=null;function Lt(W,J){if(h=J.getViewerPose(c||o),g=J,h!==null){const ht=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let it=!1;ht.length!==x.cameras.length&&(x.cameras.length=0,it=!0);for(let Tt=0;Tt<ht.length;Tt++){const It=ht[Tt];let U=null;if(f!==null)U=f.getViewport(It);else{const gt=u.getViewSubImage(d,It);U=gt.viewport,Tt===0&&(t.setRenderTargetTextures(y,gt.colorTexture,d.ignoreDepthValues?void 0:gt.depthStencilTexture),t.setRenderTarget(y))}let ut=S[Tt];ut===void 0&&(ut=new rn,ut.layers.enable(Tt),ut.viewport=new me,S[Tt]=ut),ut.matrix.fromArray(It.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(It.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(U.x,U.y,U.width,U.height),Tt===0&&(x.matrix.copy(ut.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),it===!0&&x.cameras.push(ut)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Tt=u.getDepthInformation(ht[0]);Tt&&Tt.isValid&&Tt.texture&&v.init(t,Tt,s.renderState)}}for(let ht=0;ht<_.length;ht++){const it=b[ht],bt=_[ht];it!==null&&bt!==void 0&&bt.update(it,J,c||o)}v.render(t,x),rt&&rt(W,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Bt=new Cf;Bt.setAnimationLoop(Lt),this.setAnimationLoop=function(W){rt=W},this.dispose=function(){}}}const Li=new gn,y1=new Pt;function S1(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ef(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,_,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),_=y.envMap,b=y.envMapRotation;if(_&&(m.envMap.value=_,Li.copy(b),Li.x*=-1,Li.y*=-1,Li.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),m.envMapRotation.value.setFromMatrix4(y1.makeRotationFromEuler(Li)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const P=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*P,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function b1(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const b=_.program;n.uniformBlockBinding(y,b)}function c(y,_){let b=s[y.id];b===void 0&&(g(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",m));const P=_.program;n.updateUBOMapping(y,P);const T=t.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function h(y){const _=u();y.__bindingPointIndex=_;const b=i.createBuffer(),P=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,P,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,b),b}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=s[y.id],b=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,C=b.length;T<C;T++){const I=Array.isArray(b[T])?b[T]:[b[T]];for(let S=0,x=I.length;S<x;S++){const D=I[S];if(f(D,T,S,P)===!0){const O=D.__offset,L=Array.isArray(D.value)?D.value:[D.value];let k=0;for(let X=0;X<L.length;X++){const Y=L[X],et=v(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,O+k,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,k),k+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,b,P){const T=y.value,C=_+"_"+b;if(P[C]===void 0)return typeof T=="number"||typeof T=="boolean"?P[C]=T:P[C]=T.clone(),!0;{const I=P[C];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return P[C]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(y){const _=y.uniforms;let b=0;const P=16;for(let C=0,I=_.length;C<I;C++){const S=Array.isArray(_[C])?_[C]:[_[C]];for(let x=0,D=S.length;x<D;x++){const O=S[x],L=Array.isArray(O.value)?O.value:[O.value];for(let k=0,X=L.length;k<X;k++){const Y=L[k],et=v(Y),H=b%P;H!==0&&P-H<et.boundary&&(b+=P-H),O.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,b+=et.storage}}}const T=b%P;return T>0&&(b+=P-T),y.__size=b,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const b=o.indexOf(_.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class E1{constructor(t={}){const{canvas:e=x0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this._useLegacyLights=!1,this.toneMapping=ai,this.toneMappingExposure=1;const _=this;let b=!1,P=0,T=0,C=null,I=-1,S=null;const x=new me,D=new me;let O=null;const L=new _t(0);let k=0,X=e.width,Y=e.height,et=1,H=null,$=null;const Z=new me(0,0,X,Y),rt=new me(0,0,X,Y);let Lt=!1;const Bt=new pc;let W=!1,J=!1;const ht=new Pt,it=new at,bt=new R,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function It(){return C===null?et:1}let U=n;function ut(E,N){const B=e.getContext(E,N);return B!==null?B:null}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ac}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",tt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),U===null){const N="webgl2";if(U=ut(N,E),U===null)throw ut(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let gt,$t,yt,Gt,w,M,z,q,K,j,Et,Q,xt,wt,st,ct,Rt,dt,ft,Ht,Vt,Xt,Wt,Jt;function mt(){gt=new D_(U),gt.init(),$t=new A_(U,gt,t),Xt=new p1(U,gt),yt=new d1(U),Gt=new O_(U),w=new Qx,M=new f1(U,gt,yt,w,$t,Xt,Gt),z=new C_(_),q=new I_(_),K=new V0(U),Wt=new T_(U,K),j=new N_(U,K,Gt,Wt),Et=new k_(U,j,K,Gt),ft=new F_(U,$t,M),ct=new R_(w),Q=new Jx(_,z,q,gt,$t,Wt,ct),xt=new S1(_,w),wt=new e1,st=new a1(gt),dt=new E_(_,z,q,yt,Et,d,l),Rt=new u1(_,Et,$t),Jt=new b1(U,Gt,$t,yt),Ht=new w_(U,gt,Gt),Vt=new U_(U,gt,Gt),Gt.programs=Q.programs,_.capabilities=$t,_.extensions=gt,_.properties=w,_.renderLists=wt,_.shadowMap=Rt,_.state=yt,_.info=Gt}mt();const A=new M1(_,U);this.xr=A,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=gt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=gt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(E){E!==void 0&&(et=E,this.setSize(X,Y,!1))},this.getSize=function(E){return E.set(X,Y)},this.setSize=function(E,N,B=!0){if(A.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,Y=N,e.width=Math.floor(E*et),e.height=Math.floor(N*et),B===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(X*et,Y*et).floor()},this.setDrawingBufferSize=function(E,N,B){X=E,Y=N,et=B,e.width=Math.floor(E*B),e.height=Math.floor(N*B),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,N,B,V){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,N,B,V),yt.viewport(x.copy(Z).multiplyScalar(et).round())},this.getScissor=function(E){return E.copy(rt)},this.setScissor=function(E,N,B,V){E.isVector4?rt.set(E.x,E.y,E.z,E.w):rt.set(E,N,B,V),yt.scissor(D.copy(rt).multiplyScalar(et).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(E){yt.setScissorTest(Lt=E)},this.setOpaqueSort=function(E){H=E},this.setTransparentSort=function(E){$=E},this.getClearColor=function(E){return E.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(E=!0,N=!0,B=!0){let V=0;if(E){let F=!1;if(C!==null){const lt=C.texture.format;F=lt===pf||lt===ff||lt===df}if(F){const lt=C.texture.type,Mt=lt===zn||lt===Es||lt===af||lt===Ns||lt===cf||lt===hf,Ct=dt.getClearColor(),Dt=dt.getClearAlpha(),Ut=Ct.r,Nt=Ct.g,Ot=Ct.b;Mt?(f[0]=Ut,f[1]=Nt,f[2]=Ot,f[3]=Dt,U.clearBufferuiv(U.COLOR,0,f)):(g[0]=Ut,g[1]=Nt,g[2]=Ot,g[3]=Dt,U.clearBufferiv(U.COLOR,0,g))}else V|=U.COLOR_BUFFER_BIT}N&&(V|=U.DEPTH_BUFFER_BIT),B&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",tt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),wt.dispose(),st.dispose(),w.dispose(),z.dispose(),q.dispose(),Et.dispose(),Wt.dispose(),Jt.dispose(),Q.dispose(),A.dispose(),A.removeEventListener("sessionstart",vn),A.removeEventListener("sessionend",_n),Ei.stop()};function nt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function tt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=Gt.autoReset,N=Rt.enabled,B=Rt.autoUpdate,V=Rt.needsUpdate,F=Rt.type;mt(),Gt.autoReset=E,Rt.enabled=N,Rt.autoUpdate=B,Rt.needsUpdate=V,Rt.type=F}function vt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function At(E){const N=E.target;N.removeEventListener("dispose",At),Qt(N)}function Qt(E){se(E),w.remove(E)}function se(E){const N=w.get(E).programs;N!==void 0&&(N.forEach(function(B){Q.releaseProgram(B)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,B,V,F,lt){N===null&&(N=Tt);const Mt=F.isMesh&&F.matrixWorld.determinant()<0,Ct=vm(E,N,B,V,F);yt.setMaterial(V,Mt);let Dt=B.index,Ut=1;if(V.wireframe===!0){if(Dt=j.getWireframeAttribute(B),Dt===void 0)return;Ut=2}const Nt=B.drawRange,Ot=B.attributes.position;let pe=Nt.start*Ut,We=(Nt.start+Nt.count)*Ut;lt!==null&&(pe=Math.max(pe,lt.start*Ut),We=Math.min(We,(lt.start+lt.count)*Ut)),Dt!==null?(pe=Math.max(pe,0),We=Math.min(We,Dt.count)):Ot!=null&&(pe=Math.max(pe,0),We=Math.min(We,Ot.count));const be=We-pe;if(be<0||be===1/0)return;Wt.setup(F,V,Ct,B,Dt);let Pn,le=Ht;if(Dt!==null&&(Pn=K.get(Dt),le=Vt,le.setIndex(Pn)),F.isMesh)V.wireframe===!0?(yt.setLineWidth(V.wireframeLinewidth*It()),le.setMode(U.LINES)):le.setMode(U.TRIANGLES);else if(F.isLine){let Ft=V.linewidth;Ft===void 0&&(Ft=1),yt.setLineWidth(Ft*It()),F.isLineSegments?le.setMode(U.LINES):F.isLineLoop?le.setMode(U.LINE_LOOP):le.setMode(U.LINE_STRIP)}else F.isPoints?le.setMode(U.POINTS):F.isSprite&&le.setMode(U.TRIANGLES);if(F.isBatchedMesh)le.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)le.renderInstances(pe,be,F.count);else if(B.isInstancedBufferGeometry){const Ft=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ia=Math.min(B.instanceCount,Ft);le.renderInstances(pe,be,ia)}else le.render(pe,be)};function ae(E,N,B){E.transparent===!0&&E.side===un&&E.forceSinglePass===!1?(E.side=ke,E.needsUpdate=!0,Sr(E,N,B),E.side=Bn,E.needsUpdate=!0,Sr(E,N,B),E.side=un):Sr(E,N,B)}this.compile=function(E,N,B=null){B===null&&(B=E),m=st.get(B),m.init(),y.push(m),B.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),E!==B&&E.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(_._useLegacyLights);const V=new Set;return E.traverse(function(F){const lt=F.material;if(lt)if(Array.isArray(lt))for(let Mt=0;Mt<lt.length;Mt++){const Ct=lt[Mt];ae(Ct,B,F),V.add(Ct)}else ae(lt,B,F),V.add(lt)}),y.pop(),m=null,V},this.compileAsync=function(E,N,B=null){const V=this.compile(E,N,B);return new Promise(F=>{function lt(){if(V.forEach(function(Mt){w.get(Mt).currentProgram.isReady()&&V.delete(Mt)}),V.size===0){F(E);return}setTimeout(lt,10)}gt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Re=null;function ne(E){Re&&Re(E)}function vn(){Ei.stop()}function _n(){Ei.start()}const Ei=new Cf;Ei.setAnimationLoop(ne),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(E){Re=E,A.setAnimationLoop(E),E===null?Ei.stop():Ei.start()},A.addEventListener("sessionstart",vn),A.addEventListener("sessionend",_n),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),A.enabled===!0&&A.isPresenting===!0&&(A.cameraAutoUpdate===!0&&A.updateCamera(N),N=A.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,N,C),m=st.get(E,y.length),m.init(),y.push(m),ht.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Bt.setFromProjectionMatrix(ht),J=this.localClippingEnabled,W=ct.init(this.clippingPlanes,J),v=wt.get(E,p.length),v.init(),p.push(v),eh(E,N,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(H,$),this.info.render.frame++,W===!0&&ct.beginShadows();const B=m.state.shadowsArray;if(Rt.render(B,E,N),W===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset(),(A.enabled===!1||A.isPresenting===!1||A.hasDepthSensing()===!1)&&dt.render(v,E),m.setupLights(_._useLegacyLights),N.isArrayCamera){const V=N.cameras;for(let F=0,lt=V.length;F<lt;F++){const Mt=V[F];nh(v,E,Mt,Mt.viewport)}}else nh(v,E,N);C!==null&&(M.updateMultisampleRenderTarget(C),M.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(_,E,N),Wt.resetDefaultState(),I=-1,S=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function eh(E,N,B,V){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Bt.intersectsSprite(E)){V&&bt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ht);const Mt=Et.update(E),Ct=E.material;Ct.visible&&v.push(E,Mt,Ct,B,bt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Bt.intersectsObject(E))){const Mt=Et.update(E),Ct=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),bt.copy(E.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),bt.copy(Mt.boundingSphere.center)),bt.applyMatrix4(E.matrixWorld).applyMatrix4(ht)),Array.isArray(Ct)){const Dt=Mt.groups;for(let Ut=0,Nt=Dt.length;Ut<Nt;Ut++){const Ot=Dt[Ut],pe=Ct[Ot.materialIndex];pe&&pe.visible&&v.push(E,Mt,pe,B,bt.z,Ot)}}else Ct.visible&&v.push(E,Mt,Ct,B,bt.z,null)}}const lt=E.children;for(let Mt=0,Ct=lt.length;Mt<Ct;Mt++)eh(lt[Mt],N,B,V)}function nh(E,N,B,V){const F=E.opaque,lt=E.transmissive,Mt=E.transparent;m.setupLightsView(B),W===!0&&ct.setGlobalState(_.clippingPlanes,B),lt.length>0&&gm(F,lt,N,B),V&&yt.viewport(x.copy(V)),F.length>0&&yr(F,N,B),lt.length>0&&yr(lt,N,B),Mt.length>0&&yr(Mt,N,B),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function gm(E,N,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;if(m.state.transmissionRenderTarget===null){m.state.transmissionRenderTarget=new ze(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?je:zn,minFilter:zi,samples:4,stencilBuffer:r});const Ut=w.get(m.state.transmissionRenderTarget);Ut.__isTransmissionRenderTarget=!0}const lt=m.state.transmissionRenderTarget;_.getDrawingBufferSize(it),lt.setSize(it.x,it.y);const Mt=_.getRenderTarget();_.setRenderTarget(lt),_.getClearColor(L),k=_.getClearAlpha(),k<1&&_.setClearColor(16777215,.5),_.clear();const Ct=_.toneMapping;_.toneMapping=ai,yr(E,B,V),M.updateMultisampleRenderTarget(lt),M.updateRenderTargetMipmap(lt);let Dt=!1;for(let Ut=0,Nt=N.length;Ut<Nt;Ut++){const Ot=N[Ut],pe=Ot.object,We=Ot.geometry,be=Ot.material,Pn=Ot.group;if(be.side===un&&pe.layers.test(V.layers)){const le=be.side;be.side=ke,be.needsUpdate=!0,ih(pe,B,V,We,be,Pn),be.side=le,be.needsUpdate=!0,Dt=!0}}Dt===!0&&(M.updateMultisampleRenderTarget(lt),M.updateRenderTargetMipmap(lt)),_.setRenderTarget(Mt),_.setClearColor(L,k),_.toneMapping=Ct}function yr(E,N,B){const V=N.isScene===!0?N.overrideMaterial:null;for(let F=0,lt=E.length;F<lt;F++){const Mt=E[F],Ct=Mt.object,Dt=Mt.geometry,Ut=V===null?Mt.material:V,Nt=Mt.group;Ct.layers.test(B.layers)&&ih(Ct,N,B,Dt,Ut,Nt)}}function ih(E,N,B,V,F,lt){E.onBeforeRender(_,N,B,V,F,lt),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(_,N,B,V,E,lt),F.transparent===!0&&F.side===un&&F.forceSinglePass===!1?(F.side=ke,F.needsUpdate=!0,_.renderBufferDirect(B,N,V,F,E,lt),F.side=Bn,F.needsUpdate=!0,_.renderBufferDirect(B,N,V,F,E,lt),F.side=un):_.renderBufferDirect(B,N,V,F,E,lt),E.onAfterRender(_,N,B,V,F,lt)}function Sr(E,N,B){N.isScene!==!0&&(N=Tt);const V=w.get(E),F=m.state.lights,lt=m.state.shadowsArray,Mt=F.state.version,Ct=Q.getParameters(E,F.state,lt,N,B),Dt=Q.getProgramCacheKey(Ct);let Ut=V.programs;V.environment=E.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(E.isMeshStandardMaterial?q:z).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Ut===void 0&&(E.addEventListener("dispose",At),Ut=new Map,V.programs=Ut);let Nt=Ut.get(Dt);if(Nt!==void 0){if(V.currentProgram===Nt&&V.lightsStateVersion===Mt)return rh(E,Ct),Nt}else Ct.uniforms=Q.getUniforms(E),E.onBuild(B,Ct,_),E.onBeforeCompile(Ct,_),Nt=Q.acquireProgram(Ct,Dt),Ut.set(Dt,Nt),V.uniforms=Ct.uniforms;const Ot=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ot.clippingPlanes=ct.uniform),rh(E,Ct),V.needsLights=xm(E),V.lightsStateVersion=Mt,V.needsLights&&(Ot.ambientLightColor.value=F.state.ambient,Ot.lightProbe.value=F.state.probe,Ot.directionalLights.value=F.state.directional,Ot.directionalLightShadows.value=F.state.directionalShadow,Ot.spotLights.value=F.state.spot,Ot.spotLightShadows.value=F.state.spotShadow,Ot.rectAreaLights.value=F.state.rectArea,Ot.ltc_1.value=F.state.rectAreaLTC1,Ot.ltc_2.value=F.state.rectAreaLTC2,Ot.pointLights.value=F.state.point,Ot.pointLightShadows.value=F.state.pointShadow,Ot.hemisphereLights.value=F.state.hemi,Ot.directionalShadowMap.value=F.state.directionalShadowMap,Ot.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ot.spotShadowMap.value=F.state.spotShadowMap,Ot.spotLightMatrix.value=F.state.spotLightMatrix,Ot.spotLightMap.value=F.state.spotLightMap,Ot.pointShadowMap.value=F.state.pointShadowMap,Ot.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Nt,V.uniformsList=null,Nt}function sh(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=mo.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function rh(E,N){const B=w.get(E);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function vm(E,N,B,V,F){N.isScene!==!0&&(N=Tt),M.resetTextureUnits();const lt=N.fog,Mt=V.isMeshStandardMaterial?N.environment:null,Ct=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:vi,Dt=(V.isMeshStandardMaterial?q:z).get(V.envMap||Mt),Ut=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Nt=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ot=!!B.morphAttributes.position,pe=!!B.morphAttributes.normal,We=!!B.morphAttributes.color;let be=ai;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(be=_.toneMapping);const Pn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,le=Pn!==void 0?Pn.length:0,Ft=w.get(V),ia=m.state.lights;if(W===!0&&(J===!0||E!==S)){const Je=E===S&&V.id===I;ct.setState(V,E,Je)}let re=!1;V.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==ia.state.version||Ft.outputColorSpace!==Ct||F.isBatchedMesh&&Ft.batching===!1||!F.isBatchedMesh&&Ft.batching===!0||F.isInstancedMesh&&Ft.instancing===!1||!F.isInstancedMesh&&Ft.instancing===!0||F.isSkinnedMesh&&Ft.skinning===!1||!F.isSkinnedMesh&&Ft.skinning===!0||F.isInstancedMesh&&Ft.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ft.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ft.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ft.instancingMorph===!1&&F.morphTexture!==null||Ft.envMap!==Dt||V.fog===!0&&Ft.fog!==lt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==ct.numPlanes||Ft.numIntersection!==ct.numIntersection)||Ft.vertexAlphas!==Ut||Ft.vertexTangents!==Nt||Ft.morphTargets!==Ot||Ft.morphNormals!==pe||Ft.morphColors!==We||Ft.toneMapping!==be||Ft.morphTargetsCount!==le)&&(re=!0):(re=!0,Ft.__version=V.version);let Ti=Ft.currentProgram;re===!0&&(Ti=Sr(V,N,F));let oh=!1,Bs=!1,sa=!1;const Ce=Ti.getUniforms(),Wn=Ft.uniforms;if(yt.useProgram(Ti.program)&&(oh=!0,Bs=!0,sa=!0),V.id!==I&&(I=V.id,Bs=!0),oh||S!==E){Ce.setValue(U,"projectionMatrix",E.projectionMatrix),Ce.setValue(U,"viewMatrix",E.matrixWorldInverse);const Je=Ce.map.cameraPosition;Je!==void 0&&Je.setValue(U,bt.setFromMatrixPosition(E.matrixWorld)),$t.logarithmicDepthBuffer&&Ce.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ce.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Bs=!0,sa=!0)}if(F.isSkinnedMesh){Ce.setOptional(U,F,"bindMatrix"),Ce.setOptional(U,F,"bindMatrixInverse");const Je=F.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),Ce.setValue(U,"boneTexture",Je.boneTexture,M))}F.isBatchedMesh&&(Ce.setOptional(U,F,"batchingTexture"),Ce.setValue(U,"batchingTexture",F._matricesTexture,M));const ra=B.morphAttributes;if((ra.position!==void 0||ra.normal!==void 0||ra.color!==void 0)&&ft.update(F,B,Ti),(Bs||Ft.receiveShadow!==F.receiveShadow)&&(Ft.receiveShadow=F.receiveShadow,Ce.setValue(U,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Wn.envMap.value=Dt,Wn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(Wn.envMapIntensity.value=N.environmentIntensity),Bs&&(Ce.setValue(U,"toneMappingExposure",_.toneMappingExposure),Ft.needsLights&&_m(Wn,sa),lt&&V.fog===!0&&xt.refreshFogUniforms(Wn,lt),xt.refreshMaterialUniforms(Wn,V,et,Y,m.state.transmissionRenderTarget),mo.upload(U,sh(Ft),Wn,M)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(mo.upload(U,sh(Ft),Wn,M),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ce.setValue(U,"center",F.center),Ce.setValue(U,"modelViewMatrix",F.modelViewMatrix),Ce.setValue(U,"normalMatrix",F.normalMatrix),Ce.setValue(U,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Je=V.uniformsGroups;for(let oa=0,Mm=Je.length;oa<Mm;oa++){const ah=Je[oa];Jt.update(ah,Ti),Jt.bind(ah,Ti)}}return Ti}function _m(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function xm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,N,B){w.get(E.texture).__webglTexture=N,w.get(E.depthTexture).__webglTexture=B;const V=w.get(E);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const B=w.get(E);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,B=0){C=E,P=N,T=B;let V=!0,F=null,lt=!1,Mt=!1;if(E){const Dt=w.get(E);Dt.__useDefaultFramebuffer!==void 0?(yt.bindFramebuffer(U.FRAMEBUFFER,null),V=!1):Dt.__webglFramebuffer===void 0?M.setupRenderTarget(E):Dt.__hasExternalTextures&&M.rebindTextures(E,w.get(E.texture).__webglTexture,w.get(E.depthTexture).__webglTexture);const Ut=E.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(Mt=!0);const Nt=w.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Nt[N])?F=Nt[N][B]:F=Nt[N],lt=!0):E.samples>0&&M.useMultisampledRTT(E)===!1?F=w.get(E).__webglMultisampledFramebuffer:Array.isArray(Nt)?F=Nt[B]:F=Nt,x.copy(E.viewport),D.copy(E.scissor),O=E.scissorTest}else x.copy(Z).multiplyScalar(et).floor(),D.copy(rt).multiplyScalar(et).floor(),O=Lt;if(yt.bindFramebuffer(U.FRAMEBUFFER,F)&&V&&yt.drawBuffers(E,F),yt.viewport(x),yt.scissor(D),yt.setScissorTest(O),lt){const Dt=w.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,Dt.__webglTexture,B)}else if(Mt){const Dt=w.get(E.texture),Ut=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Dt.__webglTexture,B||0,Ut)}I=-1},this.readRenderTargetPixels=function(E,N,B,V,F,lt,Mt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=w.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(Ct=Ct[Mt]),Ct){yt.bindFramebuffer(U.FRAMEBUFFER,Ct);try{const Dt=E.texture,Ut=Dt.format,Nt=Dt.type;if(Ut!==on&&Xt.convert(Ut)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ot=Nt===je&&(gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float"));if(Nt!==zn&&Xt.convert(Nt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&Nt!==wn&&!Ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-V&&B>=0&&B<=E.height-F&&U.readPixels(N,B,V,F,Xt.convert(Ut),Xt.convert(Nt),lt)}finally{const Dt=C!==null?w.get(C).__webglFramebuffer:null;yt.bindFramebuffer(U.FRAMEBUFFER,Dt)}}},this.copyFramebufferToTexture=function(E,N,B=0){const V=Math.pow(2,-B),F=Math.floor(N.image.width*V),lt=Math.floor(N.image.height*V);M.setTexture2D(N,0),U.copyTexSubImage2D(U.TEXTURE_2D,B,0,0,E.x,E.y,F,lt),yt.unbindTexture()},this.copyTextureToTexture=function(E,N,B,V=0){const F=N.image.width,lt=N.image.height,Mt=Xt.convert(B.format),Ct=Xt.convert(B.type);M.setTexture2D(B,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment),N.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,V,E.x,E.y,F,lt,Mt,Ct,N.image.data):N.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,V,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,Mt,N.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,V,E.x,E.y,Mt,Ct,N.image),V===0&&B.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(E,N,B,V,F=0){const lt=Math.round(E.max.x-E.min.x),Mt=Math.round(E.max.y-E.min.y),Ct=E.max.z-E.min.z+1,Dt=Xt.convert(V.format),Ut=Xt.convert(V.type);let Nt;if(V.isData3DTexture)M.setTexture3D(V,0),Nt=U.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)M.setTexture2DArray(V,0),Nt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const Ot=U.getParameter(U.UNPACK_ROW_LENGTH),pe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),We=U.getParameter(U.UNPACK_SKIP_PIXELS),be=U.getParameter(U.UNPACK_SKIP_ROWS),Pn=U.getParameter(U.UNPACK_SKIP_IMAGES),le=B.isCompressedTexture?B.mipmaps[F]:B.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,le.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,le.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,E.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,E.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,E.min.z),B.isDataTexture||B.isData3DTexture?U.texSubImage3D(Nt,F,N.x,N.y,N.z,lt,Mt,Ct,Dt,Ut,le.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(Nt,F,N.x,N.y,N.z,lt,Mt,Ct,Dt,le.data):U.texSubImage3D(Nt,F,N.x,N.y,N.z,lt,Mt,Ct,Dt,Ut,le),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ot),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,We),U.pixelStorei(U.UNPACK_SKIP_ROWS,be),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Pn),F===0&&V.generateMipmaps&&U.generateMipmap(Nt),yt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?M.setTextureCube(E,0):E.isData3DTexture?M.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?M.setTexture2DArray(E,0):M.setTexture2D(E,0),yt.unbindTexture()},this.resetState=function(){P=0,T=0,C=null,yt.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===uc?"display-p3":"srgb",e.unpackColorSpace=Kt.workingColorSpace===Vo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class _c{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new _t(t),this.density=e}clone(){return new _c(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Of extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Au=new R,Ru=new me,Cu=new me,T1=new R,Pu=new Pt,qr=new R,Ba=new Hn,Lu=new Pt,Ha=new dc;class w1 extends St{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=uh,this.bindMatrix=new Pt,this.bindMatrixInverse=new Pt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new xi),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,qr),this.boundingBox.expandByPoint(qr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,qr),this.boundingSphere.expandByPoint(qr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ba.copy(this.boundingSphere),Ba.applyMatrix4(s),t.ray.intersectsSphere(Ba)!==!1&&(Lu.copy(s).invert(),Ha.copy(t.ray).applyMatrix4(Lu),!(this.boundingBox!==null&&Ha.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ha)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new me,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===uh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Jm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;Ru.fromBufferAttribute(s.attributes.skinIndex,t),Cu.fromBufferAttribute(s.attributes.skinWeight,t),Au.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=Cu.getComponent(r);if(o!==0){const a=Ru.getComponent(r);Pu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(T1.copy(Au).applyMatrix4(Pu),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Ff extends Me{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Wo extends De{constructor(t=null,e=1,n=1,s,r,o,a,l,c=xe,h=xe,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Iu=new Pt,A1=new Pt;class xc{constructor(t=[],e=[]){this.uuid=Os(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Pt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Pt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:A1;Iu.multiplyMatrices(a,e[r]),Iu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new xc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Wo(e,t,t,on,wn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Ff),this.bones.push(o),this.boneInverses.push(new Pt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class Du extends ie{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ls=new Pt,Nu=new Pt,Yr=[],Uu=new xi,R1=new Pt,qs=new St,Ys=new Hn;class Mc extends St{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Du(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,R1)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new xi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),Uu.copy(t.boundingBox).applyMatrix4(ls),this.boundingBox.union(Uu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),Ys.copy(t.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(Ys)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(n),t.ray.intersectsSphere(Ys)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ls),Nu.multiplyMatrices(n,ls),qs.matrixWorld=Nu,qs.raycast(t,Yr);for(let o=0,a=Yr.length;o<a;o++){const l=Yr[o];l.instanceId=r,l.object=this,e.push(l)}Yr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Du(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wo(new Float32Array(s*this.count),s,this.count,uf,wn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class C1 extends Wi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ou=new Pt,Ll=new dc,$r=new Hn,Kr=new R;class P1 extends Me{constructor(t=new fe,e=new C1){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(s),$r.radius+=r,t.ray.intersectsSphere($r)===!1)return;Ou.copy(s).invert(),Ll.copy(t.ray).applyMatrix4(Ou);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const m=c.getX(g);Kr.fromBufferAttribute(u,m),Fu(Kr,m,l,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)Kr.fromBufferAttribute(u,g),Fu(Kr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Fu(i,t,e,n,s,r,o){const a=Ll.distanceSqToPoint(i);if(a<e){const l=new R;Ll.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class L1 extends De{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new at:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,s=[],r=[],o=[],a=new R,l=new Pt;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(we(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(we(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class kf extends Vn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new at){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class I1 extends kf{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function yc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const jr=new R,Va=new yc,Ga=new yc,Wa=new yc;class Xo extends Vn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(jr.subVectors(s[0],s[1]).add(s[0]),c=jr);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(jr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=jr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Va.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),Ga.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),Wa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Va.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ga.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Wa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Va.calc(l),Ga.calc(l),Wa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ku(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function D1(i,t){const e=1-i;return e*e*t}function N1(i,t){return 2*(1-i)*i*t}function U1(i,t){return i*i*t}function tr(i,t,e,n){return D1(i,t)+N1(i,e)+U1(i,n)}function O1(i,t){const e=1-i;return e*e*e*t}function F1(i,t){const e=1-i;return 3*e*e*i*t}function k1(i,t){return 3*(1-i)*i*i*t}function z1(i,t){return i*i*i*t}function er(i,t,e,n,s){return O1(i,t)+F1(i,e)+k1(i,n)+z1(i,s)}class B1 extends Vn{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(er(t,s.x,r.x,o.x,a.x),er(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class H1 extends Vn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(er(t,s.x,r.x,o.x,a.x),er(t,s.y,r.y,o.y,a.y),er(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class V1 extends Vn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class G1 extends Vn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class W1 extends Vn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(tr(t,s.x,r.x,o.x),tr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zf extends Vn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(tr(t,s.x,r.x,o.x),tr(t,s.y,r.y,o.y),tr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class X1 extends Vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(ku(a,l.x,c.x,h.x,u.x),ku(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new at().fromArray(s))}return this}}var q1=Object.freeze({__proto__:null,ArcCurve:I1,CatmullRomCurve3:Xo,CubicBezierCurve:B1,CubicBezierCurve3:H1,EllipseCurve:kf,LineCurve:V1,LineCurve3:G1,QuadraticBezierCurve:W1,QuadraticBezierCurve3:zf,SplineCurve:X1});class qo extends fe{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=we(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new R,d=new at,f=new R,g=new R,v=new R;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let y=0;y<=e;y++){const _=n+y*h*s,b=Math.sin(_),P=Math.cos(_);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*b,u.y=t[T].y,u.z=t[T].x*P,o.push(u.x,u.y,u.z),d.x=y/e,d.y=T/(t.length-1),a.push(d.x,d.y);const C=l[3*T+0]*b,I=l[3*T+1],S=l[3*T+0]*P;c.push(C,I,S)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){const b=_+y*t.length,P=b,T=b+t.length,C=b+t.length+1,I=b+1;r.push(P,T,I),r.push(C,I,T)}this.setIndex(r),this.setAttribute("position",new qt(o,3)),this.setAttribute("uv",new qt(a,2)),this.setAttribute("normal",new qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.points,t.segments,t.phiStart,t.phiLength)}}class Yo extends fe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new R,h=new at;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(a,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ks extends fe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;y(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(f,2));function y(){const b=new R,P=new R;let T=0;const C=(e-t)/n;for(let I=0;I<=r;I++){const S=[],x=I/r,D=x*(e-t)+t;for(let O=0;O<=s;O++){const L=O/s,k=L*l+a,X=Math.sin(k),Y=Math.cos(k);P.x=D*X,P.y=-x*n+m,P.z=D*Y,u.push(P.x,P.y,P.z),b.set(X,C,Y).normalize(),d.push(b.x,b.y,b.z),f.push(L,1-x),S.push(g++)}v.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){const x=v[S][I],D=v[S+1][I],O=v[S+1][I+1],L=v[S][I+1];h.push(x,D,L),h.push(D,O,L),T+=6}c.addGroup(p,T,0),p+=T}function _(b){const P=g,T=new at,C=new R;let I=0;const S=b===!0?t:e,x=b===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const D=g;for(let O=0;O<=s;O++){const k=O/s*l+a,X=Math.cos(k),Y=Math.sin(k);C.x=S*Y,C.y=m*x,C.z=S*X,u.push(C.x,C.y,C.z),d.push(0,x,0),T.x=X*.5+.5,T.y=Y*.5*x+.5,f.push(T.x,T.y),g++}for(let O=0;O<s;O++){const L=P+O,k=D+O;b===!0?h.push(k,k+1,L):h.push(k+1,k,L),I+=3}c.addGroup(p,I,b===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ks(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $o extends fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new R,d=new R,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const y=[],_=p/n;let b=0;p===0&&o===0?b=.5/e:p===n&&l===Math.PI&&(b=-.5/e);for(let P=0;P<=e;P++){const T=P/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(T+b,1-_),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const _=h[p][y+1],b=h[p][y],P=h[p+1][y],T=h[p+1][y+1];(p!==0||o>0)&&f.push(_,b,T),(p!==n-1||l<Math.PI)&&f.push(b,P,T)}this.setIndex(f),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class or extends fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new R,u=new R,d=new R;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;o.push(v,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new or(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ko extends fe{constructor(t=new zf(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,l=new R,c=new at;let h=new R;const u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(f,2));function v(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),y(),p()}function m(_){h=t.getPointAt(_/e,h);const b=o.normals[_],P=o.binormals[_];for(let T=0;T<=s;T++){const C=T/s*Math.PI*2,I=Math.sin(C),S=-Math.cos(C);l.x=S*b.x+I*P.x,l.y=S*b.y+I*P.y,l.z=S*b.z+I*P.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=e;_++)for(let b=1;b<=s;b++){const P=(s+1)*(_-1)+(b-1),T=(s+1)*_+(b-1),C=(s+1)*_+b,I=(s+1)*(_-1)+b;g.push(P,T,I),g.push(T,C,I)}}function y(){for(let _=0;_<=e;_++)for(let b=0;b<=s;b++)c.x=_/e,c.y=b/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ko(new q1[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Y1 extends ce{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class de extends Wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zu extends de{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return we(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class $1 extends Wi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Bf extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class K1 extends Bf{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Xa=new Pt,Bu=new R,Hu=new R;class j1{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pc,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Bu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bu),Hu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hu),e.updateMatrixWorld(),Xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Z1 extends j1{constructor(){super(new mc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vu extends Bf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new Z1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class J1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Gu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Gu(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ac);class Sc{constructor(){this._handlers=new Map}on(t,e){return this._handlers.has(t)||this._handlers.set(t,new Set),this._handlers.get(t).add(e),()=>this._handlers.get(t).delete(e)}emit(t,e){const n=this._handlers.get(t);if(n)for(const s of n)s(e)}}const qa=(i,t)=>new _t(i).multiplyScalar(t);function Q1(i){const t=new Of,e=(h,u=Bn)=>new Mi({color:h,side:u}),n=(h,u,d,f,g,v=0)=>{const m=new St(h,u);m.position.set(d,f,g),m.rotation.x=v,t.add(m)};n(new _e(80,14,80),e(1382430,ke),0,5,0),n(new Ue(80,80),e(2895411),0,-1.8,0,-Math.PI/2);const s=new Ue(3.4,.7),r=e(qa(16054527,16));for(let h=-30;h<=30;h+=10)for(let u=-30;u<=30;u+=10)n(s,r,h,10.5,u,Math.PI/2);const o=new _e(76,.15,.15),a=[e(qa(58879,4)),e(qa(16722902,4))];for(const[h,u]of[[-39.5,a[0]],[39.5,a[1]]])n(o,u,0,1.4,h);const l=new Co(i),c=l.fromScene(t,.02).texture;return l.dispose(),t.traverse(h=>{var u;return(u=h.geometry)==null?void 0:u.dispose()}),c}function tM(i,t,e,n,s=[]){const r=new Rf(n,{type:je}),o=new wf(.2,500,r);o.position.copy(e);const a=s.map(u=>u.visible);s.forEach(u=>u.visible=!1);const l=t.environment;t.environment=null,o.update(i,t),t.environment=l,s.forEach((u,d)=>u.visible=a[d]);const c=new Co(i),h=c.fromCubemap(r.texture).texture;return c.dispose(),r.dispose(),h}const ar={low:{label:"LOW",pixelRatio:1,msaa:0,shadowMap:1024,gtao:!1,envSize:128,dof:!1,haze:!1,detail:!1,barrierShadows:!1},medium:{label:"MEDIUM",pixelRatio:1.5,msaa:2,shadowMap:2048,gtao:!1,envSize:128,dof:!1,haze:!1,detail:!0,barrierShadows:!1},high:{label:"HIGH",pixelRatio:1.5,msaa:4,shadowMap:4096,gtao:!1,envSize:256,dof:!0,haze:!0,detail:!0,barrierShadows:!0},ultra:{label:"ULTRA",pixelRatio:2,msaa:4,shadowMap:4096,gtao:!0,envSize:512,dof:!0,haze:!0,detail:!0,barrierShadows:!0}},Hf="tbc-kart.gfx";function eM(){var e;if(typeof window>"u")return"high";const i=new URLSearchParams(window.location.search).get("gfx");if(ar[i])return i;let t=null;try{t=localStorage.getItem(Hf)}catch{}return ar[t]?t:(e=window.matchMedia)!=null&&e.call(window,"(pointer: coarse)").matches?"medium":"high"}const go=eM(),Ze=ar[go],nM=Ze.pixelRatio,iM=Ze.msaa,sM=1,rM=724242,oM=724242,aM=.0058,lM=.8,Ya={sky:14674175,ground:3814704,intensity:.35},Oi={color:16774114,intensity:2.4,offset:[7,50,5]},cM=[{color:14673663,intensity:.3,direction:[-1,.75,-.55]},{color:16771542,intensity:.25,direction:[1,.7,.8]}],Il=Ze.shadowMap,hM=-3e-4,uM=.035,dM={maxHalf:58},fM=Ze.barrierShadows,$a={strength:.45,radius:.22,threshold:3},pM={vignette:.38,saturation:1.08,contrast:1.08,grain:.035,fringe:.012},Zr={intensity:1,resolution:.5,gtao:{radius:.6,distanceExponent:1.4,thickness:1.2,scale:1.1,samples:12,distanceFallOff:1},denoise:{lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16}},Vf={intensity:.05,spread:2.2},Wu={aperture:18e-5,maxBlur:.008};class mM{constructor(t=document.body){const e=new E1({antialias:!1,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio,nM)),e.setSize(window.innerWidth,window.innerHeight),e.toneMapping=cc,e.toneMappingExposure=sM,e.shadowMap.enabled=!0,e.shadowMap.type=nf,t.appendChild(e.domElement),this.three=e,this.scene=new Of,this.scene.background=new _t(rM),this.scene.fog=new _c(oM,aM),this.scene.environment=Q1(e),this.scene.environmentIntensity=lM}captureEnvironment(t,e){var s;const n=tM(this.three,this.scene,t,Ze.envSize,e);(s=this.scene.environment)==null||s.dispose(),this.scene.environment=n}get maxAnisotropy(){return this.three.capabilities.getMaxAnisotropy()}setSize(t,e){this.three.setSize(t,e)}}const nr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class yi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const gM=new mc(-1,1,1,-1,0,1);class vM extends fe{constructor(){super(),this.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qt([0,2,0,0,2,0],2))}}const _M=new vM;class dr{constructor(t){this._mesh=new St(_M,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,gM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class xM extends yi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ce?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Tn.clone(t.uniforms),this.material=new ce({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new dr(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Xu extends yi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class MM extends yi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class yM{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new at);this._width=n.width,this._height=n.height,e=new ze(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:je}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xM(nr),this.copyPass.material.blending=Te,this.clock=new J1}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Xu!==void 0&&(o instanceof Xu?n=!0:o instanceof MM&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class SM extends yi{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new _t}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const Jr={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new at},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Pt},cameraProjectionMatrixInverse:{value:new Pt},cameraWorldMatrix:{value:new Pt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new R(-1,-1,-1)},sceneBoxMax:{value:new R(1,1,1)}},vertexShader:`

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
		}`},Qr={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Ka={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function bM(i=5){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=EM(t),n=e.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){const a=e[o],l=2*Math.PI*a/n,c=new R(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}const r=new Wo(s,t,t);return r.wrapS=di,r.wrapT=di,r.needsUpdate=!0,r}function EM(i){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0);let s=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=o++;r++,s--}return n}const to={defines:{SAMPLES:16,SAMPLE_VECTORS:Gf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new at},cameraProjectionMatrixInverse:{value:new Pt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Gf(i,t,e){const n=TM(i,t,e);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function TM(i,t,e){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*t*s/i,o=Math.pow(s/(i-1),e);n.push(new R(Math.cos(r),Math.sin(r),o))}return n}class wM{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r;const o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,g=t-d,v=e-f;let m,p;g>v?(m=1,p=0):(m=0,p=1);const y=g-m+h,_=v-p+h,b=g-1+2*h,P=v-1+2*h,T=l&255,C=c&255,I=this.perm[T+this.perm[C]]%12,S=this.perm[T+m+this.perm[C+p]]%12,x=this.perm[T+1+this.perm[C+1]]%12;let D=.5-g*g-v*v;D<0?n=0:(D*=D,n=D*D*this.dot(this.grad3[I],g,v));let O=.5-y*y-_*_;O<0?s=0:(O*=O,s=O*O*this.dot(this.grad3[S],y,_));let L=.5-b*b-P*P;return L<0?r=0:(L*=L,r=L*L*this.dot(this.grad3[x],b,P)),70*(n+s+r)}noise3d(t,e,n){let s,r,o,a;const c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),d=Math.floor(n+c),f=1/6,g=(h+u+d)*f,v=h-g,m=u-g,p=d-g,y=t-v,_=e-m,b=n-p;let P,T,C,I,S,x;y>=_?_>=b?(P=1,T=0,C=0,I=1,S=1,x=0):y>=b?(P=1,T=0,C=0,I=1,S=0,x=1):(P=0,T=0,C=1,I=1,S=0,x=1):_<b?(P=0,T=0,C=1,I=0,S=1,x=1):y<b?(P=0,T=1,C=0,I=0,S=1,x=1):(P=0,T=1,C=0,I=1,S=1,x=0);const D=y-P+f,O=_-T+f,L=b-C+f,k=y-I+2*f,X=_-S+2*f,Y=b-x+2*f,et=y-1+3*f,H=_-1+3*f,$=b-1+3*f,Z=h&255,rt=u&255,Lt=d&255,Bt=this.perm[Z+this.perm[rt+this.perm[Lt]]]%12,W=this.perm[Z+P+this.perm[rt+T+this.perm[Lt+C]]]%12,J=this.perm[Z+I+this.perm[rt+S+this.perm[Lt+x]]]%12,ht=this.perm[Z+1+this.perm[rt+1+this.perm[Lt+1]]]%12;let it=.6-y*y-_*_-b*b;it<0?s=0:(it*=it,s=it*it*this.dot3(this.grad3[Bt],y,_,b));let bt=.6-D*D-O*O-L*L;bt<0?r=0:(bt*=bt,r=bt*bt*this.dot3(this.grad3[W],D,O,L));let Tt=.6-k*k-X*X-Y*Y;Tt<0?o=0:(Tt*=Tt,o=Tt*Tt*this.dot3(this.grad3[J],k,X,Y));let It=.6-et*et-H*H-$*$;return It<0?a=0:(It*=It,a=It*It*this.dot3(this.grad3[ht],et,H,$)),32*(s+r+o+a)}noise4d(t,e,n,s){const r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,d,f,g;const v=(t+e+n+s)*l,m=Math.floor(t+v),p=Math.floor(e+v),y=Math.floor(n+v),_=Math.floor(s+v),b=(m+p+y+_)*c,P=m-b,T=p-b,C=y-b,I=_-b,S=t-P,x=e-T,D=n-C,O=s-I,L=S>x?32:0,k=S>D?16:0,X=x>D?8:0,Y=S>O?4:0,et=x>O?2:0,H=D>O?1:0,$=L+k+X+Y+et+H,Z=o[$][0]>=3?1:0,rt=o[$][1]>=3?1:0,Lt=o[$][2]>=3?1:0,Bt=o[$][3]>=3?1:0,W=o[$][0]>=2?1:0,J=o[$][1]>=2?1:0,ht=o[$][2]>=2?1:0,it=o[$][3]>=2?1:0,bt=o[$][0]>=1?1:0,Tt=o[$][1]>=1?1:0,It=o[$][2]>=1?1:0,U=o[$][3]>=1?1:0,ut=S-Z+c,gt=x-rt+c,$t=D-Lt+c,yt=O-Bt+c,Gt=S-W+2*c,w=x-J+2*c,M=D-ht+2*c,z=O-it+2*c,q=S-bt+3*c,K=x-Tt+3*c,j=D-It+3*c,Et=O-U+3*c,Q=S-1+4*c,xt=x-1+4*c,wt=D-1+4*c,st=O-1+4*c,ct=m&255,Rt=p&255,dt=y&255,ft=_&255,Ht=a[ct+a[Rt+a[dt+a[ft]]]]%32,Vt=a[ct+Z+a[Rt+rt+a[dt+Lt+a[ft+Bt]]]]%32,Xt=a[ct+W+a[Rt+J+a[dt+ht+a[ft+it]]]]%32,Wt=a[ct+bt+a[Rt+Tt+a[dt+It+a[ft+U]]]]%32,Jt=a[ct+1+a[Rt+1+a[dt+1+a[ft+1]]]]%32;let mt=.6-S*S-x*x-D*D-O*O;mt<0?h=0:(mt*=mt,h=mt*mt*this.dot4(r[Ht],S,x,D,O));let A=.6-ut*ut-gt*gt-$t*$t-yt*yt;A<0?u=0:(A*=A,u=A*A*this.dot4(r[Vt],ut,gt,$t,yt));let nt=.6-Gt*Gt-w*w-M*M-z*z;nt<0?d=0:(nt*=nt,d=nt*nt*this.dot4(r[Xt],Gt,w,M,z));let tt=.6-q*q-K*K-j*j-Et*Et;tt<0?f=0:(tt*=tt,f=tt*tt*this.dot4(r[Wt],q,K,j,Et));let vt=.6-Q*Q-xt*xt-wt*wt-st*st;return vt<0?g=0:(vt*=vt,g=vt*vt*this.dot4(r[Jt],Q,xt,wt,st)),27*(h+u+d+f+g)}}class Mn extends yi{constructor(t,e,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=bM(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new ze(this.width,this.height,{type:je}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ce({defines:Object.assign({},Jr.defines),uniforms:Tn.clone(Jr.uniforms),vertexShader:Jr.vertexShader,fragmentShader:Jr.fragmentShader,blending:Te,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new $1,this.normalMaterial.blending=Te,this.pdMaterial=new ce({defines:Object.assign({},to.defines),uniforms:Tn.clone(to.uniforms),vertexShader:to.vertexShader,fragmentShader:to.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ce({defines:Object.assign({},Qr.defines),uniforms:Tn.clone(Qr.uniforms),vertexShader:Qr.vertexShader,fragmentShader:Qr.fragmentShader,blending:Te}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ce({uniforms:Tn.clone(nr.uniforms),vertexShader:nr.vertexShader,fragmentShader:nr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Tl,blendDst:gs,blendEquation:dn,blendSrcAlpha:El,blendDstAlpha:gs,blendEquationAlpha:dn}),this.blendMaterial=new ce({uniforms:Tn.clone(Ka.uniforms),vertexShader:Ka.vertexShader,fragmentShader:Ka.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:lc,blendSrc:Tl,blendDst:gs,blendEquation:dn,blendSrcAlpha:El,blendDstAlpha:gs,blendEquationAlpha:dn}),this.fsQuad=new dr(null),this.originalClearColor=new _t,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new vc,this.depthTexture.format=Ts,this.depthTexture.type=Ns,this.normalRenderTarget=new ze(this.width,this.height,{minFilter:xe,magFilter:xe,type:je,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Gf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Mn.OUTPUT.Off:break;case Mn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Te,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case Mn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Te,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case Mn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Te,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case Mn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case Mn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Te,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case Mn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Te,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const s=e.get(n);n.visible=s}),e.clear()}generateNoise(t=64){const e=new wM,n=t*t*4,s=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){const l=o,c=a;s[(o*t+a)*4]=(e.noise(l,c)*.5+.5)*255,s[(o*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(o*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(o*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}const r=new Wo(s,t,t,on,zn);return r.wrapS=di,r.wrapT=di,r.needsUpdate=!0,r}}Mn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const AM={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};class RM extends yi{constructor(t,e,n){super(),this.scene=t,this.camera=e;const s=n.focus!==void 0?n.focus:1,r=n.aperture!==void 0?n.aperture:.025,o=n.maxblur!==void 0?n.maxblur:1;this.renderTargetDepth=new ze(1,1,{minFilter:xe,magFilter:xe,type:je}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new Uf,this.materialDepth.depthPacking=gf,this.materialDepth.blending=Te;const a=AM,l=Tn.clone(a.uniforms);l.tDepth.value=this.renderTargetDepth.texture,l.focus.value=s,l.aspect.value=e.aspect,l.aperture.value=r,l.maxblur.value=o,l.nearClip.value=e.near,l.farClip.value=e.far,this.materialBokeh=new ce({defines:Object.assign({},a.defines),uniforms:l,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.uniforms=l,this.fsQuad=new dr(this.materialBokeh),this._oldClearColor=new _t}render(t,e,n){this.scene.overrideMaterial=this.materialDepth,t.getClearColor(this._oldClearColor);const s=t.getClearAlpha(),r=t.autoClear;t.autoClear=!1,t.setClearColor(16777215),t.setClearAlpha(1),t.setRenderTarget(this.renderTargetDepth),t.clear(),t.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),t.clear(),this.fsQuad.render(t)),this.scene.overrideMaterial=null,t.setClearColor(this._oldClearColor),t.setClearAlpha(s),t.autoClear=r}setSize(t,e){this.materialBokeh.uniforms.aspect.value=t/e,this.renderTargetDepth.setSize(t,e)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}const CM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _t(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class li extends yi{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new at(t.x,t.y):new at(256,256),this.clearColor=new _t(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ze(r,o,{type:je}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new ze(r,o,{type:je});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new ze(r,o,{type:je});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=CM;this.highPassUniforms=Tn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ce({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new at(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=nr;this.copyUniforms=Tn.clone(h.uniforms),this.blendMaterial=new ce({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:rr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new _t,this.oldClearAlpha=1,this.basic=new Mi,this.fsQuad=new dr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new at(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=li.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=li.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ce({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new at(.5,.5)},direction:{value:new at(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new ce({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}li.BlurDirectionX=new at(1,0);li.BlurDirectionY=new at(0,1);class PM extends li{get texture(){return this.renderTargetsHorizontal[0].texture}render(t,e,n){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const s=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let r=this.renderTargetBright;for(let o=0;o<this.nMips;o++){const a=this.separableBlurMaterials[o];this.fsQuad.material=a,a.uniforms.colorTexture.value=r.texture,a.uniforms.direction.value=li.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[o]),t.clear(),this.fsQuad.render(t),a.uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,a.uniforms.direction.value=li.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[o]),t.clear(),this.fsQuad.render(t),r=this.renderTargetsVertical[o]}this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=s}}const LM=`
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
  }`,IM=`
  precision highp float;
  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;
  attribute vec3 position;
  attribute vec2 uv;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`;class DM extends yi{constructor(t,e){super(),this.bloom=t,this.uniforms={tDiffuse:{value:null},tBloom:{value:null},uBloom:{value:0},toneMappingExposure:{value:1},uSaturation:{value:e.saturation},uContrast:{value:e.contrast},uVignette:{value:e.vignette},uGrain:{value:e.grain},uFringe:{value:e.fringe},uTime:{value:0}},this.material=new Y1({uniforms:this.uniforms,vertexShader:IM,fragmentShader:LM}),this.fsQuad=new dr(this.material),this._key=""}render(t,e,n){var a;const s=this.uniforms;s.tDiffuse.value=n.texture;const r=(a=this.bloom)==null?void 0:a.enabled;s.tBloom.value=r?this.bloom.texture:n.texture,s.uBloom.value=r?1:0,s.toneMappingExposure.value=t.toneMappingExposure;const o=`${t.outputColorSpace}|${t.toneMapping}`;o!==this._key&&(this._key=o,this.material.defines={},Kt.getTransfer(t.outputColorSpace)===te&&(this.material.defines.SRGB_TRANSFER=""),t.toneMapping===cc?this.material.defines.AGX_TONE_MAPPING="":t.toneMapping===rf&&(this.material.defines.ACES_FILMIC_TONE_MAPPING=""),this.material.needsUpdate=!0),t.setRenderTarget(this.renderToScreen?null:e),this.fsQuad.render(t)}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class NM{constructor(t,e,n){const s=t.three,r=s.getDrawingBufferSize(new at),o=new ze(r.x,r.y,{type:je,samples:iM});if(this.composer=new yM(s,o),this.composer.addPass(new SM(e,n)),Ze.gtao){const a=c=>Math.max(1,Math.round(c*Zr.resolution));this.ao=new Mn(e,n,a(r.x),a(r.y));const l=this.ao.setSize.bind(this.ao);this.ao.setSize=(c,h)=>l(a(c),a(h)),this.ao.blendIntensity=Zr.intensity,this.ao.updateGtaoMaterial(Zr.gtao),this.ao.updatePdMaterial(Zr.denoise),this.composer.addPass(this.ao)}Ze.dof&&(this.dof=new RM(e,n,{focus:10,aperture:Wu.aperture,maxblur:Wu.maxBlur}),this.dof.enabled=!1,this.composer.addPass(this.dof)),this.bloom=new PM(r.clone(),$a.strength,$a.radius,$a.threshold),this.composer.addPass(this.bloom),this.final=new DM(this.bloom,pM),this.composer.addPass(this.final)}setFocus(t){this.dof&&(this.dof.enabled=t!=null,this.dof.enabled&&(this.dof.uniforms.focus.value=t))}setSize(t,e){this.composer.setSize(t,e)}render(t){this.final.uniforms.uTime.value+=t,this.composer.render(t)}}const UM=.2,OM=420,bc=60,Wf=17,FM=17,kM=1,zM=2,BM=.8,HM=3,VM=2.5,Xf={chase:{distance:5.2,height:2,lookAhead:4.5,lookHeight:.75},far:{distance:8.8,height:3.6,lookAhead:6,lookHeight:.4},cockpit:{distance:.22,height:.8,lookAhead:12,lookHeight:-2.2}},ja=["chase","far","cockpit"],Za=9,GM=7,WM=.45,XM=.9,qM=2.4,YM=.32,tn={sway:.0045,swayMax:.06,surge:.004,surgeMax:.05,nod:.012,nodMax:.22,roll:.0022,rollMax:.035,lookInto:.13,stiffness:70,damping:13,gClamp:22},$e={engine:.0045,engineCockpit:.0015,speed:.004,speedCockpit:.002,kerb:.028,kerbCockpit:.014,aim:-2.5,nyquist:.4,buzzCeil:[.331,.379,.353],kerbCeil:[.303,.397,.303],fpsSmoothing:.05},pt=(i,t,e)=>i<t?t:i>e?e:i,An=(i,t,e)=>i+(t-i)*e;function Ge(i,t,e){const n=pt((e-i)/(t-i),0,1);return n*n*(3-2*n)}const Ae=(i,t,e,n)=>An(i,t,1-Math.exp(-e*n)),fi=i=>Math.atan2(Math.sin(i),Math.cos(i)),$M=(i,t,e,n)=>i+fi(t-i)*(1-Math.exp(-7*n));function pi(i){return{x:-Math.sin(i),z:-Math.cos(i)}}function Ec(i){return{x:Math.cos(i),z:-Math.sin(i)}}const KM=(i,t)=>Math.atan2(-i,-t);function fr(i=1){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const qf=i=>pt(i/Wf,0,1);function jM(i,t=0){const e=Math.sign(t)*Math.max(0,Math.abs(t)-zM);return bc+FM*qf(i)+pt(BM*e,-1.5,HM)}function ZM(i,t){if(t<2)return i.yaw;const e=fi(Math.atan2(-i.vx,-i.vz)-i.yaw);return i.yaw+pt(e,-.9,.9)*WM}function qu(i,t,e,n,s){const r=Xf[n],o=pi(e),a=r.distance+(n==="cockpit"?0:XM*qf(t));return s.pos.set(i.x-o.x*a,r.height,i.z-o.z*a),s.look.set(i.x+o.x*r.lookAhead,r.lookHeight,i.z+o.z*r.lookAhead),s}function JM(i,t,e,n){let s=e,r=1/0;for(let a=0;a<i.length;a++){const l=i[a],c=(l.x-t.x)**2+(l.z-t.z)**2;c<r&&([s,r]=[a,c])}if(e>=0&&s!==e){const a=i[e];(a.x-t.x)**2+(a.z-t.z)**2<r*1.6&&(s=e)}const o=i[s];return n.pos.set(o.x,o.y,o.z),n.look.set(t.x,.55,t.z),s}function QM(i){return pt(2*Math.atan(3.2/Math.max(i,1))*180/Math.PI,14,55)}const ty=["sway","surge","nod","roll","look"];class ey{constructor(){this.x={},this.v={},this.reset()}reset(){for(const t of ty)this.x[t]=this.v[t]=0}_spring(t,e,n){const s=tn.stiffness*(e-this.x[t])-tn.damping*this.v[t];return this.v[t]+=s*n,this.x[t]+=this.v[t]*n,this.x[t]}apply(t,e,n,s,r,o){const a=tn.gClamp,l=pt(e.latAccel||0,-a,a),c=pt(e.longAccel||0,-a,a),h=pt((e.speed||0)/6,0,1);if(n>0){const b=Math.min(n,.05);this._spring("sway",pt(l*tn.sway,-.06,tn.swayMax),b),this._spring("surge",pt(-c*tn.surge,-.05,tn.surgeMax),b),this._spring("nod",pt(c*tn.nod,-.22,tn.nodMax),b),this._spring("roll",pt(-l*tn.roll,-.035,tn.rollMax),b),this._spring("look",pt(e.steer||0,-1,1)*tn.lookInto*h,b)}const{sway:u,surge:d,nod:f,roll:g,look:v}=this.x,m=pi(t.yaw),p=Ec(t.yaw),y=o.pos;y.x+=p.x*u+m.x*d,y.z+=p.z*u+m.z*d,y.y-=Math.max(0,d)*.4;const _=pi(t.yaw+v);return o.look.set(y.x+_.x*s,r+f,y.z+_.z*s),o.roll=g,o}}class ny{constructor(){this.view="chase",this._yaw=0,this._fov=bc,this._surge=0,this._target={pos:new R,look:new R,roll:0},this.head=new ey,this._pos=new R}cycle(){return this.view=ja[(ja.indexOf(this.view)+1)%ja.length],this.view}reset(t){this._yaw=t.state.yaw,qu(t.state,0,this._yaw,this.view,this._target),this._pos.copy(this._target.pos),this._surge=0,this.head.reset()}update(t,e,n){const{state:s,telemetry:r}=t,o=this.view==="cockpit";if(this._yaw=o?s.yaw:$M(this._yaw,ZM(s,r.speed),GM,e),qu(s,r.speed,this._yaw,this.view,this._target),this._target.roll=0,o){const a=Xf.cockpit;this.head.apply(s,r,e,a.lookAhead,a.lookHeight,this._target),this._pos.copy(this._target.pos)}else{const a=this._pos,l=this._target.pos;a.set(Ae(a.x,l.x,Za,e),Ae(a.y,l.y,Za,e),Ae(a.z,l.z,Za,e))}return n.pos.copy(this._pos),n.look.copy(this._target.look),n.roll=this._target.roll,this._surge=Ae(this._surge,r.longAccel||0,kM,e),this._fov=Ae(this._fov,jM(r.speed,this._surge),VM,e),this._fov}}class iy{constructor(){this.anchors=[],this._anchor=-1,this._target={pos:new R,look:new R},this._look=new R}reset(){this._anchor=-1}update(t,e,n){const s=this._anchor;return this._anchor=JM(this.anchors,t.state,this._anchor,this._target),this._anchor!==s?this._look.copy(this._target.look):this._look.lerp(this._target.look,1-Math.exp(-8*e)),n.pos.copy(this._target.pos),n.look.copy(this._look),QM(n.pos.distanceTo(n.look))}}class sy{constructor(){this.trauma=0,this._time=0}add(t){this.trauma=Math.min(1,this.trauma+t)}apply(t,e){this._time+=e,this.trauma=Math.max(0,this.trauma-qM*e);const n=this.trauma*this.trauma*YM;if(n===0)return;const s=this._time*31;t.x+=n*(Math.sin(s*1.1)+.5*Math.sin(s*2.7)),t.y+=n*.6*Math.sin(s*1.7+1.3),t.z+=n*(Math.sin(s*1.3+2.1)+.5*Math.sin(s*2.3))}}const Yu=Math.PI*2;class Yf{constructor(t,e=t.map(()=>0),n=t.map(()=>$e.nyquist),s=$e){this.mults=t,this.offsets=e,this.ceil=n,this.cfg=s,this.fps=60,this.phase=t.map(()=>0),this.hz=t.map(()=>0),this.value=t.map(()=>0)}update(t,e){if(!(e>0))return this.value;this.fps+=(1/e-this.fps)*this.cfg.fpsSmoothing;for(let n=0;n<this.mults.length;n++)this.hz[n]=Math.min(t*this.mults[n],this.ceil[n]*this.fps),this.phase[n]=(this.phase[n]+this.hz[n]*e*Yu)%Yu,this.value[n]=Math.sin(this.phase[n]+this.offsets[n]);return this.value}}const ry=157/(2*Math.PI);class oy{constructor(){this._buzz=new Yf([1,241/157,199/157],[0,1.3,.7],$e.buzzCeil),this.offset={x:0,y:0,z:0},this._aim={x:0,y:0,z:0}}update(t,e,n,s){const r=this.offset;if(r.x=r.y=r.z=0,t<=0)return r;const o=e==="cockpit",a=pt((n.speed||0)/Wf,0,1),l=(o?$e.engineCockpit:$e.engine)*(.25+.75*a)+(o?$e.speedCockpit:$e.speed)*a**3,[c,h,u]=this._buzz.update(ry,t);if(r.y+=l*(.6*c+.4*h),r.x+=l*.5*u,s&&s.amount>.01){const d=(o?$e.kerbCockpit:$e.kerb)*s.amount*pt((n.speed||0)/8,.2,1),[f,g,v]=s.rib.value;r.y+=d*(.7*f+.3*g),r.x+=d*.45*s.tilt*v}return r}shake(t,e,n,s,r,o){const a=this.update(n,s,r,o);return t.set(t.x+a.x,t.y+a.y,t.z+a.z),Object.assign(this._aim,{x:e.x+a.x*$e.aim,y:e.y+a.y*$e.aim,z:e.z+a.z*$e.aim})}}const ay=1.3,ly=i=>i*i*(3-2*i);class cy{constructor(t){this.three=new rn(bc,t,UM,OM),this.mode="broadcast",this.followCam=new ny,this.broadcastCam=new iy,this.shaker=new sy,this.vibe=new oy,this._out={pos:new R,look:new R,roll:0},this._from={pos:new R,look:new R},this._look=new R,this._swoop=1}get view(){return this.followCam.view}set anchors(t){this.broadcastCam.anchors=t}cycleView(){return this.followCam.cycle()}follow(t){this._from.pos.copy(this.three.position),this._from.look.copy(this._look),this.followCam.reset(t),this.mode="follow",this._swoop=0}broadcast(t=null){this.broadcastCam.reset(),this.mode="broadcast",t&&(this._swoop=1,this.update(t,0))}shake(t){this.shaker.add(t)}setAspect(t){this.three.aspect=t,this.three.updateProjectionMatrix()}update(t,e,n=null){if(this.mode==="manual")return;const s=Object.assign(this._out,{roll:0}),o=(this.mode==="broadcast"?this.broadcastCam:this.followCam).update(t,e,s);this._swoop=Math.min(1,this._swoop+e/ay);const a=ly(this._swoop),l=this.three;l.position.lerpVectors(this._from.pos,s.pos,a),this._look.lerpVectors(this._from.look,s.look,a),this.shaker.apply(l.position,e);const c=this.mode==="follow"?this.vibe.shake(l.position,this._look,e,this.view,t.telemetry,n):this._look;l.lookAt(c.x,c.y,c.z),s.roll&&l.rotateZ(s.roll*a),Math.abs(l.fov-o)>.01&&(l.fov=o,l.updateProjectionMatrix())}}const cs={throttle:["KeyW","ArrowUp"],brake:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],handbrake:["Space","ShiftLeft","ShiftRight"]},hy={start:["Enter","Space"],pause:["Escape","KeyP"],reset:["KeyR"],camera:["KeyC"],mute:["KeyM"],quit:["KeyQ"],left:["ArrowLeft","KeyA"],right:["ArrowRight","KeyD"],prevTrack:["ArrowUp","KeyW"],nextTrack:["ArrowDown","KeyS","KeyN"],raceAgain:["Enter"],nextRace:["KeyN"],level:["KeyL"],graphics:["KeyG"],debug:["Backquote","F3"]},uy=new Set(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab","F3"]),hs={deadzone:.14,steerAxis:0,throttle:7,brake:6,handbrake:0,actions:{start:9,pause:9,raceAgain:9,quit:1,camera:3,reset:8,prevTrack:12,nextTrack:13,nextRace:13,left:14,right:15,level:2}},dy={slop:18};class fy{constructor(t=window){this.down=new Set,this.pressed=new Set,this._padPressed=new Set,this._padPrev={},this._triggered=new Set,this.pad=null,this.touch=null,t.addEventListener("keydown",e=>{uy.has(e.code)&&e.preventDefault(),e.repeat||this.pressed.add(e.code),this.down.add(e.code)}),t.addEventListener("keyup",e=>this.down.delete(e.code)),window.addEventListener("blur",()=>this.down.clear())}poll(){var t,e;if(this.pad=((t=navigator.getGamepads)==null?void 0:t.call(navigator).find(n=>n&&n.connected))||null,this._padPressed.clear(),!!this.pad)for(const[n,s]of Object.entries(hs.actions)){const r=!!((e=this.pad.buttons[s])!=null&&e.pressed);r&&!this._padPrev[n]&&this._padPressed.add(n),this._padPrev[n]=r}}controls(){var r,o,a,l;const t=c=>c.some(h=>this.down.has(h)),e={throttle:t(cs.throttle)?1:0,throttleDigital:!1,brake:t(cs.brake)?1:0,steer:(t(cs.left)?1:0)-(t(cs.right)?1:0),handbrake:t(cs.handbrake)},n=this.pad;if(n){const c=n.axes[hs.steerAxis]||0;Math.abs(c)>hs.deadzone&&(e.steer=-c),e.throttle=Math.max(e.throttle,((r=n.buttons[hs.throttle])==null?void 0:r.value)||0),e.brake=Math.max(e.brake,((o=n.buttons[hs.brake])==null?void 0:o.value)||0),e.handbrake=e.handbrake||!!((a=n.buttons[hs.handbrake])!=null&&a.pressed)}const s=(l=this.touch)==null?void 0:l.held;return e.throttleDigital=t(cs.throttle)||!!(s!=null&&s.throttle),s&&(e.throttle=Math.max(e.throttle,s.throttle?1:0),e.brake=Math.max(e.brake,s.brake?1:0),e.handbrake=e.handbrake||s.handbrake,s.left!==s.right&&(e.steer=s.left?1:-1)),e}action(t){return hy[t].some(e=>this.pressed.has(e))||this._padPressed.has(t)||this._triggered.has(t)}trigger(t){this._triggered.add(t)}endFrame(){this.pressed.clear(),this._triggered.clear()}}const py=1/240,Rn=160,pr=9.81,zs=1.05,Dl=1,Nl=1.12,mr=.58,Ul=.25,my=52,gy=6,vy=16,$u=.45,_y=1.3,xy=1.6,$f=1.85,Tc=1.1,My=.12,yy=.11,Kf=.1,wc=1.7,Sy=.7,by=.25,lr=1.5,jf=.018,cr=22,Ac=55,jo=30,Ku=.08,Ey=420,Ty=6,wy=2,Ay=.55,fs=[[1500,22],[2400,34],[3e3,39],[3800,39],[4300,31],[4700,20],[5100,11],[5500,6],[5900,2],[6200,0]],Rc=1700,Zf=.035,Ry=3.2,Jf=2200,Cy=3300,Py=45,hr=4.7,Ol=.92,Ly=.32,pn=.14,Ja=520,Iy=.3,Dy=4,Ny=4,Fl=.3,Qf=.54,Uy=.55,Oy=1.5,kl=3,Fy=.13,ju=5,ky=10,zy=5,By=7,Hy=.008,Vy=4,Gy=10,Wy=14,Xy=.04,qy=.25,Yy=12,$y=11,Ky=.4,jy=14,Zy=.12,Jy=1,Qy=.04,tS=.15,eS=.16,nS=.6,iS=.4,sS=.8,rS=.3,oS=.8,aS=4,tp=60/(2*Math.PI),ep=fs.at(-1)[0],Zu=40,lS=3050;function np(i){if(i<=fs[0][0])return fs[0][1];for(let t=1;t<fs.length;t++){const[e,n]=fs[t];if(i<=e){const[s,r]=fs[t-1];return r+(n-r)*(i-s)/(e-s)}}return 0}function cS(i,t){const e=Ry*pt(i/ep,.25,1),n=t<.05?pt((Rc-i)*.02,0,6):0;return t*np(i)-(1-t)*e+n}const ip=i=>Py*Ge(Jf,Cy,i),Cc=i=>Math.abs(i)*hr*tp;function hS(i,t,e,n){const s=Cc(Math.max(0,t)),r=cS(i,e),o=ip(Math.max(i,s));if(Math.abs(i-s)<Zu&&Math.abs(r)<=o&&s>=Jf)return{rpm:s,torque:r*hr*Ol,coupled:!0,slipping:0};const a=o*pt((i-s)/Zu,-1,1);let l=i+(r-a)/Zf*tp*n;return(i-s)*(l-s)<0&&(l=s),{rpm:pt(l,0,ep*1.02),torque:a*hr*Ol,coupled:!1,slipping:o>0?pt(Math.abs(i-s)/1500,0,1):1}}function sp(i){const t=Math.max(Cc(i/pn),lS);return Math.min(np(t),ip(t))*hr*Ol/pn/Rn}const uS=i=>1-Ge(zy,By,i),rp=(i,t)=>1-Ge(0,t,Math.abs(i||0));function dS(i,t){const e=Ge(Gy,Wy,i);return Vy*e*rp(t,Xy)/Math.max(sp(i),1e-6)}function fS(i,t,e,n,s){const r=pt(t||0,0,1);if(r<=i||Math.abs(e||0)>qy||s<kl)return r;if(!Number.isFinite(s))return Math.min(r,i+ju*n);const o=An(ju,ky,uS(s)*rp(e,Hy));return Math.min(r,Math.max(i+o*n,dS(s,e)))}function pS(i,t,e){const n=pt(t||0,-1,1),s=Math.abs(n)>Math.abs(i)?Yy:$y;return i+(n-i)*Math.min(1,s*e)}function mS(i,t){const e=jy*zs/Math.max(t*t,1e-6)+Zy,n=Math.min(Ky,e);return i*n}function gS(i,t,e,n=Jy,s=0,r=0){const o=Ge(nS,1,r)*Math.abs(s),a=n*(1-eS*o)*Ge(Qy,tS,Math.abs(t));return An(i,e+i*iS,a)}function vS(i,t,e){const n=t.throttle||0,s=t.brake||0;let r=e?Ja:0,o=n,a=0;return i>Fl?r=Math.max(r,Ja*s):s>0&&!n&&(a=-Rn*Dy*s*pt((Ny+i)/.25,0,1)),i<-Fl&&n>0&&([r,o]=[Math.max(r,Ja*n),0]),{throttle:o,brake:r,reverse:a}}const Po=Rn*pr,Ju=Po*(1-mr)/2,Qu=Po*mr/2;function _S(i,t,e,n){const s=Rn*i*Ul/zs/2,r=Rn*t*Ul,o=r*$u/Dl,a=r*(1-$u)/Nl,l=_y*Po*e/4;n[0]=Ju-s-o+l,n[1]=Ju-s+o-l,n[2]=Qu+s-a-l,n[3]=Qu+s+a+l;let c=0;for(let h=0;h<4;h++)c+=n[h]=Math.max(0,n[h]);for(let h=0;h<4;h++)n[h]*=Po/c;return n}const td=zs*mr,Lo=zs*(1-mr),zl=[[td,Dl/2],[td,-Dl/2],[-Lo,Nl/2],[-Lo,-Nl/2]];function xS(i,t,e,n,s){const r=Math.cos(n),o=Math.sin(n);for(let a=0;a<4;a++){const[l,c]=zl[a],h=i-e*c,u=t+e*l;s[a].long=a<2?h*r+u*o:h,s[a].lat=a<2?u*r-h*o:u}return s}const MS=i=>-i.lat/Math.max(Math.abs(i.long),lr),op=Math.tan(Math.PI/(2*wc)),yS=Math.tan(yy),SS=Rn*pr/4,bS=(i,t)=>i*Math.min(1.3,Math.max(.6,1-My*(t/SS-1)));function ES(i){const t=Math.sin(wc*Math.atan(op*i));return i>1?Math.max(t,Sy):t}function ap(i,t,e,n,s){const r=e/Kf,o=t/yS,a=Math.hypot(r,o);if(s.s=a,!(i>0)||a<1e-9)return s.fx=0,s.fy=0,s;const l=n*i*ES(a)/a;return s.fx=l*Tc*r,s.fy=l*o,s}const TS=(i,t)=>Math.max(i,0)*t*Tc*op*wc/Kf,wS={fx:0,fy:0,s:0},lp=(i,t)=>(i*pn-t)/Math.max(Math.abs(t),lr);function AS(i,t,e,n,s,r,o){let a=0,l=0;for(const f of t){const g=Math.max(Math.abs(f.v),lr);a+=ap(f.fz,f.tan,lp(i,f.v),f.mu,wS).fx*pn,l+=TS(f.fz,f.mu)*pn*pn/g}const c=s+r*l,h=i+r*(e-a)/c,u=r*n/c;let d=Math.abs(h)<=u?0:h-Math.sign(h)*u;if(o&&n>0){const f=(t[0].v+t[1].v)/2,g=f*(1-Fy)/pn;f>0&&d<g&&h>=g&&(d=g)}return d}function ed(i,t,e,n){const s=i??cr,r=(wy+Ay*Math.abs(e))*(s-cr);return s+(t+Ty*Math.abs(e)-r)/Ey*n}function nd(i){const t=((i??cr)-Ac)/jo;return Math.max(1-2.5*Ku,1-Ku*t*t)}const id=(i,t)=>Math.hypot(i,t)>.3?Math.atan2(t,Math.abs(i)):0,$s=[0,0,0,0],eo=[{},{},{},{}],Zn={fx:0,fy:0,s:0},RS=[1,1,1,1];function CS(i,t,e){if(!(e>0))return PS(i);const n=pS(i.steer,t.steer,e),s=pi(i.yaw),r=Ec(i.yaw),o=i.vx*s.x+i.vz*s.z,a=-(i.vx*r.x+i.vz*r.z),l=i.yawRate??0,c=Math.hypot(o,a),h=Ge(Oy,kl,c),u=mS(n,c),d=Math.atan2(a,Math.max(Math.abs(o),lr)),f=o>0?gS(u,id(o,a),d,t.assist,n,t.throttle||0):u;_S(i.ax??0,i.ay??0,f,$s),xS(o,a,l,f,eo);const g=t.grip??RS,[v,m]=[nd(i.tempF),nd(i.tempR)],p=eo.map((ut,gt)=>{var yt;const $t=((yt=i.tans)==null?void 0:yt[gt])??0;return $t+(MS(ut)-$t)*Math.min(1,Math.max(Math.abs(ut.long),lr)*e/by)}),y=$s.map((ut,gt)=>bS(gt<2?xy:$f,ut)*(gt<2?v:m)*g[gt]),_=t.handbrake?(i.handbrakeTime??0)+e:0,b=_>0&&_<=Iy+1e-9&&c>kl,P=vS(o,t,b),T=i.omega??o/pn,C=i.rpm??Math.max(Rc,Cc(T)),I=hS(C,T,P.throttle,e),S=o<-Fl||P.reverse<0,x=[2,3].map(ut=>({v:eo[ut].long,fz:$s[ut],tan:p[ut],mu:y[ut]})),D=Ly+(I.coupled&&!P.brake?Zf*hr**2:0),O=S?o/pn:AS(T,x,I.torque,P.brake,D,e,!b);let[L,k,X,Y,et,H,$]=[0,0,0,0,0,0,0];for(let ut=0;ut<4;ut++){const gt=eo[ut],$t=ut<2||S?0:lp(O,gt.long);ap($s[ut],p[ut],$t,y[ut],Zn);const[yt,Gt]=ut<2?[Math.cos(f),Math.sin(f)]:[1,0],w=Zn.fx*yt-Zn.fy*Gt,M=Zn.fx*Gt+Zn.fy*yt;[L,k,X]=[L+w,k+M,X+zl[ut][0]*M-zl[ut][1]*w];const z=Math.abs(Zn.fx*(ut<2?0:O*pn-gt.long))+Math.abs(Zn.fy*gt.lat);ut<2?Y+=z:[et,H,$]=[et+z,Math.max(H,Zn.s),$+$t/2]}const Z=Qf*(1-Uy*(t.draft||0))*o*Math.abs(o);let rt=o+(L-Z+P.reverse)/Rn*e;const Lt=jf*pr*e;rt=Math.abs(rt)<=Lt&&!P.throttle?0:rt-Math.sign(rt)*Lt;const Bt=rt*Math.tan(u)/zs,W=Lo*Bt+(a-Lo*Bt)*Math.exp(-15*e),J=An(W,a+k/Rn*e,h),ht=An(Bt,l+X/my*e,h),it=s.x*rt-r.x*J,bt=s.z*rt-r.z*J,Tt=(rt-o)/e,It=An(rt*Bt,k/Rn,h),U=h*Math.min(1,Math.max(0,H-1));return{x:i.x+it*e,z:i.z+bt*e,yaw:i.yaw+ht*e,vx:it,vz:bt,steer:n,yawRate:ht,omega:S?rt/pn:O,rpm:I.rpm,tans:p,ax:Ae(i.ax??0,Tt,gy,e),ay:Ae(i.ay??0,It,vy,e),tempF:ed(i.tempF,Y,c,e),tempR:ed(i.tempR,et,c,e),handbrakeTime:_,forwardSpeed:rt,slip:Math.abs(J),sliding:U>.05||b,longAccel:Tt,latAccel:It,slipAngle:id(rt,J),frontSlip:h*Math.atan((p[0]+p[1])/2),rearSlip:h*Math.atan((p[2]+p[3])/2),drift:U,wheelSpin:S?0:$,clutch:I.slipping,loads:$s.slice()}}function PS(i){return{...i,yawRate:i.yawRate??0,forwardSpeed:i.forwardSpeed??0,slip:i.slip??0,sliding:!1,longAccel:0,latAccel:0,slipAngle:i.slipAngle??0,frontSlip:0,rearSlip:0,drift:0,wheelSpin:0,rpm:i.rpm??Rc,tempF:i.tempF??cr,tempR:i.tempR??cr}}function LS(i,t,e,n){const s=Math.max(1,Math.ceil(e/py-1e-6)),r=e/s;let o=0,a=null,l=i;for(let c=0;c<s;c++){const h=CS(l,t,r),u=n.resolve(h,sS,rS,oS);u>o&&(o=u,a={...n.contact}),l=h}return{state:l,impact:o,contact:a}}const As=1.05,Pc=1,Rs=1.12,IS={radius:.14,width:.13},cp={radius:.15,width:.21},Bl={body:16761370,accent:1776672,frame:8225676,rim:14278115,hub:9409950,tyre:1315860,engine:10791344,exhaust:13225168,shroud:12854830,tank:14209728,seat:2303274,suit:1914199,glove:1381914,boot:1316120,collar:2105894,helmet:16053492,helmetStripe:15087942,trim:1447706,visor:724762},DS="07",NS=.45,US=1.8,sd={speed:18,share:.35},OS=14,FS=.012,kS=.01,zS=.07,Qa={perAccel:.01,max:.12,rate:5},Ke={wheelCentre:[0,.45,-.15],wheelTilt:.76,wheelRadius:.15,shoulder:[.177,.551,.413],upperArm:.31,forearm:.35,elbowOut:[1,-.8,.3],headPivot:[0,.66,.372]},Jn={ridge:.32,tyreHalfWidth:.09,lift:.022,hop:.012,roll:.035,attack:40,release:14},rd={engine:["frame","engine"],exhaust:["frame","exhaust"],shroud:["accent","shroud"],tank:["accent","tank"],seat:["accent","seat"],glove:["suit","glove"],panel:["suit","body"],boot:["suit","boot"],collar:["suit","collar"],stripe:["helmet","helmetStripe"],trim:["helmet","trim"],hub:["rim","hub"]},BS=["body","accent","frame","rim","tyre","suit","helmet","visor"];function HS(i=Bl,t=!1){if(t){const a=new de({color:11766015,emissive:3941488,roughness:.45,transparent:!0,opacity:.4,depthWrite:!1});return{...Object.fromEntries([...BS,...Object.keys(rd)].map(c=>[c,a])),alias:new Map}}const e={...Bl,...i},n=(a,l,c=0)=>new de({color:a,roughness:l,metalness:c}),s=(a,l=.3,c={})=>new zu({color:a,roughness:l,clearcoat:1,clearcoatRoughness:.08,...c}),r=a=>new zu(a),o={body:s(e.body,.38,{clearcoat:.7,clearcoatRoughness:.14}),accent:n(e.accent,.62,.05),frame:r({color:e.frame,roughness:.38,metalness:.55,clearcoat:.35,clearcoatRoughness:.3}),rim:r({color:e.rim,roughness:.32,metalness:1}),tyre:r({color:e.tyre,roughness:.82,sheen:.4,sheenRoughness:.55,sheenColor:5921370}),suit:r({color:e.suit,roughness:.9,sheen:1,sheenRoughness:.4,sheenColor:new _t(e.suit).lerp(new _t(16777215),.35)}),helmet:s(e.helmet,.2),visor:s(e.visor,.04,{metalness:.75,iridescence:1,iridescenceIOR:1.8,iridescenceThicknessRange:[260,820]})};o.alias=new Map;for(const[a,[l,c]]of Object.entries(rd))o[a]=new de({color:e[c]}),o.alias.set(o[a],o[l]);return o}function Be(i,t){const e=Object.assign(document.createElement("canvas"),{width:i,height:t});return{canvas:e,ctx:e.getContext("2d")}}function VS(i,t,e,n,s,r){for(const o of[e-i,e,e+i])for(const a of[n-t,n,n+t])o+s>0&&o-s<i&&a+s>0&&a-s<t&&r(o,a)}function Cs(i,t,e,{count:n,minR:s,maxR:r,alpha:o,seed:a}){const l=fr(a);for(let c=0;c<n;c++){const h=s+l()*(r-s),u=l()>.5,d=o*(.4+l()*.6);VS(t,e,l()*t,l()*e,h,(f,g)=>{const v=i.createRadialGradient(f,g,0,f,g,h);v.addColorStop(0,u?`rgba(255,255,255,${d})`:`rgba(0,0,0,${d})`),v.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=v,i.fillRect(f-h,g-h,h*2,h*2)})}}function Io(i,t,e,{count:n,color:s,minR:r,maxR:o,seed:a}){const l=fr(a);i.fillStyle=s;for(let c=0;c<n;c++)i.beginPath(),i.arc(l()*t,l()*e,r+l()*(o-r),0,Math.PI*2),i.fill()}function gr(i,t,e,n,s){const r=i.getImageData(0,0,t,e),o=r.data,a=fr(s);for(let l=0;l<o.length;l+=4){const c=(a()-.5)*n;[o[l],o[l+1],o[l+2]]=[o[l]+c,o[l+1]+c,o[l+2]+c]}i.putImageData(r,0,0)}function Gn(i,{repeat:t=[1,1],colour:e=!0,anisotropy:n=8}={}){const s=new L1(i);return e&&(s.colorSpace=hn),s.wrapS=s.wrapT=di,s.repeat.set(t[0],t[1]),s.anisotropy=n,s}function Lc(i,t,e='700 64px "Chakra Petch"'){var s,r;t();const n=Gn(i);return(r=(s=document.fonts)==null?void 0:s.load)==null||r.call(s,e).then(()=>{t(),n.needsUpdate=!0}),n}function GS(i,t){const{canvas:e,ctx:n}=Be(256,64);n.fillStyle=i,n.fillRect(0,0,128,64),n.fillStyle=t,n.fillRect(128,0,128,64);const s=n.createLinearGradient(0,0,0,64);return s.addColorStop(0,"rgba(0,0,0,0.35)"),s.addColorStop(.25,"rgba(255,255,255,0.08)"),s.addColorStop(.75,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,0.3)"),n.fillStyle=s,n.fillRect(0,0,256,64),Gn(e)}function WS(i,t,e=64){const{canvas:n,ctx:s}=Be(i*e,t*e);for(let o=0;o<i;o++)for(let a=0;a<t;a++)s.fillStyle=(o+a)%2?"#111214":"#f1f1f1",s.fillRect(o*e,a*e,e,e);const r=Gn(n);return r.magFilter=xe,r}function XS(i){const{canvas:t,ctx:e}=Be(256,256);return e.fillStyle="#f6f6f6",e.beginPath(),e.arc(128,128,120,0,Math.PI*2),e.fill(),e.fillStyle="#111",e.font='700 150px "Chakra Petch", Impact, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(i,128,138),Gn(t)}function hp(i="rgba(0,0,0,0.75)"){const{canvas:t,ctx:e}=Be(128,128),n=e.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,i),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),Gn(t,{colour:!1})}function qS(){const{canvas:i,ctx:t}=Be(256,64);t.fillStyle="#16181c",t.fillRect(0,0,256,64),t.fillStyle="#f2c230";for(let e=-64;e<320;e+=64)t.beginPath(),t.moveTo(e,64),t.lineTo(e+32,64),t.lineTo(e+64,0),t.lineTo(e+32,0),t.fill();return Gn(i)}function vr(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new fe;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=od(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][d]);const g=od(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function od(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new ie(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const v=h.getComponent(d,g);a.setComponent(d+u,g,v)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function YS(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let o=0;const a=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let y=0,_=a.length;y<_;y++){const b=a[y],P=i.attributes[b];l[b]=new ie(new P.array.constructor(P.count*P.itemSize),P.itemSize,P.normalized);const T=i.morphAttributes[b];T&&(c[b]=new ie(new T.array.constructor(T.count*T.itemSize),T.itemSize,T.normalized))}const f=t*.5,g=Math.log10(1/t),v=Math.pow(10,g),m=f*v;for(let y=0;y<r;y++){const _=n?n.getX(y):y;let b="";for(let P=0,T=a.length;P<T;P++){const C=a[P],I=i.getAttribute(C),S=I.itemSize;for(let x=0;x<S;x++)b+=`${~~(I[u[x]](_)*v+m)},`}if(b in e)h.push(e[b]);else{for(let P=0,T=a.length;P<T;P++){const C=a[P],I=i.getAttribute(C),S=i.morphAttributes[C],x=I.itemSize,D=l[C],O=c[C];for(let L=0;L<x;L++){const k=u[L],X=d[L];if(D[X](o,I[k](_)),S)for(let Y=0,et=S.length;Y<et;Y++)O[Y][X](o,S[Y][k](_))}}e[b]=o,h.push(o),o++}}const p=i.clone();for(const y in i.attributes){const _=l[y];if(p.setAttribute(y,new ie(_.array.slice(0,o*_.itemSize),_.itemSize,_.normalized)),y in c)for(let b=0;b<c[y].length;b++){const P=c[y][b];p.morphAttributes[y][b]=new ie(P.array.slice(0,o*P.itemSize),P.itemSize,P.normalized)}}return p.setIndex(h),p}const $S=["position","normal","uv"];function KS(i,t,e){let n=i.geometry.clone();for(const r of Object.keys(n.attributes))$S.includes(r)||n.deleteAttribute(r);n.attributes.uv||n.setAttribute("uv",new qt(new Float32Array(n.attributes.position.count*2),2)),n.index||(n=YS(n));const s=n.attributes.position.count;if(n.applyMatrix4(new Pt().multiplyMatrices(t,i.matrixWorld)),e){const r=new Float32Array(s*3);for(let o=0;o<s;o++)e.toArray(r,o*3);n.setAttribute("color",new qt(r,3))}return n.clearGroups(),n}const tl=new WeakMap;function jS(i){return tl.has(i)||tl.set(i,Object.assign(i.clone(),{vertexColors:!0,color:new _t(16777215)})),tl.get(i)}function ur(i,{keep:t=[],alias:e=new Map}={}){i.updateMatrixWorld(!0);const n=i.matrixWorld.clone().invert(),s=new Map,r=o=>{for(const a of[...o.children])if(!t.includes(a))if(a.isMesh){const l=e.get(a.material)??a.material;s.has(l)||s.set(l,[]),s.get(l).push(a),a.removeFromParent()}else r(a)};r(i);for(const[o,a]of s){const l=new St(...up(a,o,n));l.userData.small=a.every(c=>c.userData.small),i.add(l)}return i}function up(i,t,e=new Pt,n=!1){const s=n||i.some(o=>o.material!==t),r=vr(i.map(o=>KS(o,e,s&&o.material.color)));for(const o of i)o.geometry.dispose();return[r,s?jS(t):t]}const ZS=new R(0,1,0),G=(i,t,e)=>new R(i,t,e),ee=(i,t)=>new St(i,t);function he(i,t,e,n,s=6,r=e,o=!0){const a=G().subVectors(t,i),l=new St(new ks(r,e,a.length(),s,1,o),n);return l.position.copy(i).addScaledVector(a,.5),l.quaternion.setFromUnitVectors(ZS,a.normalize()),l}function Hl(i,t,e,n=12,s=6){const r=new Xo(i,!1,"catmullrom",.2);return new St(new Ko(r,n,t,s,!1),e)}const ve=.058,el=.015,Ii=-As/2,On=As/2,JS=i=>i.map(t=>G(-t.x,t.y,t.z));function QS(i){const t=i.frame,e=[],n=(h,u=el,d=12)=>e.push(Hl(h,u,t,d),Hl(JS(h),u,t,d));n([G(.17,ve,-.84),G(.3,ve,-.7),G(.36,ve,Ii),G(.29,ve,-.3),G(.22,ve,-.05),G(.22,ve,.2),G(.31,ve,.42),G(.36,ve,.6),G(.28,ve,.74)],el,18);for(const[h,u]of[[Ii,.36],[-.2,.26],[.1,.22],[.66,.34]])e.push(he(G(-u,ve,h),G(u,ve,h),el,t));const s=Pc/2;for(const h of[-1,1]){e.push(he(G(h*.36,ve,Ii),G(h*(s-.05),.14,Ii),.013,t));const[u,d]=[G(h*(s-.06),.1,Ii+.02),G(h*(s-.075),.2,Ii-.01)];e.push(he(u,d,.014,t,6,.014,!1)),e.push(he(G(0,.1,-.5),G(h*(s-.08),.12,Ii+.06),.007,t))}n([G(.17,ve,-.84),G(.24,.07,-.93),G(.12,.08,-1),G(0,.08,-1.01)],.012,8),n([G(.3,ve,-.7),G(.3,.09,-.86),G(.14,.1,-.93),G(0,.1,-.94)],.011,8),n([G(.29,ve,-.3),G(.5,.07,-.3),G(.58,.09,-.1),G(.58,.09,.15),G(.5,.07,.3),G(.31,ve,.3)],.011,12),n([G(.28,ve,.74),G(.4,.12,.84),G(.6,.14,.86),G(.66,.16,.8)],.012,8),e.push(he(G(-.4,.12,.84),G(.4,.12,.84),.012,t)),n([G(.15,.44,.485),G(.16,.26,.6),G(.24,ve,.66)],.009,6);const r=new St(new _e(.4,.006,.62),i.frame);r.position.set(0,ve-.012,-.4),e.push(r);const o=cp.radius;e.push(he(G(-Rs/2+.06,o,On),G(Rs/2-.06,o,On),.02,t,8));for(const h of[-1,1])e.push(he(G(h*.34,ve,On),G(h*.34,o+.03,On),.022,t,6,.03,!1));const a=he(G(-.13,o,On),G(-.12,o,On),.085,i.engine,16,.085,!1),l=new St(new _e(.035,.05,.06),i.shroud);l.position.set(-.125,o+.07,On-.03);const c=he(G(.2,o,On),G(.206,o,On),.075,i.engine,16,.075,!1);return e.push(a,l,c),e}function dp(i){const t=i.index.array;for(let e=0;e<t.length;e+=3)[t[e+1],t[e+2]]=[t[e+2],t[e+1]];i.computeVertexNormals()}function mn(i,{wrap:t=!1,out:e=null}={}){const n=i[0].length,s=i.flatMap(l=>l.flatMap(c=>[c.x,c.y,c.z])),r=[];for(let l=0;l<i.length-1;l++)for(let c=0;c<(t?n:n-1);c++){const[h,u]=[l*n+c,l*n+(c+1)%n];r.push(h,u,h+n,u,u+n,h+n)}const o=new fe;if(o.setAttribute("position",new qt(s,3)),o.setIndex(r),o.computeVertexNormals(),!e)return o;const a=(l,c)=>e(l,c).dot(G().fromBufferAttribute(o.attributes.normal,l*n+c));return i.reduce((l,c,h)=>c.reduce((u,d,f)=>u+a(h,f),l),0)<0&&dp(o),o}function Zo(i,t){const[e,n]=[i.length-1,i[0].length-1],s=[mn(i,{out:(a,l)=>i[a][l].clone().sub(t[a][l])}),mn(t,{out:(a,l)=>t[a][l].clone().sub(i[a][l])})],r=(a,l)=>a.map(c=>c[l]),o=[[i[0],t[0],i[1]],[i[e],t[e],i[e-1]],[r(i,0),r(t,0),r(i,1)],[r(i,n),r(t,n),r(i,n-1)]];for(const[a,l,c]of o)s.push(mn([a,l],{out:(h,u)=>a[u].clone().sub(c[u])}));return vr(s)}function _r(i,t,e,n,s,r,o=2,a=s){const l=[];for(let c=0;c<r;c++){const h=c/r*Math.PI*2,[u,d]=[Math.cos(h),Math.sin(h)],f=Math.sign(u)*Math.abs(u)**(2/o)*n,g=Math.sign(d)*Math.abs(d)**(2/o)*(d<0?a:s);l.push(i.clone().addScaledVector(t,f).addScaledVector(e,g))}return l}function Cn(i,t){const e=i.reduce((r,o)=>r.add(o),G()).divideScalar(i.length),n=new fe().setFromPoints([...i,e]),s=i.length;return n.setIndex(i.flatMap((r,o)=>[o,(o+1)%s,s])),n.computeVertexNormals(),G().fromBufferAttribute(n.attributes.normal,s).dot(e.clone().sub(t))<0&&dp(n),n}const Do=i=>Array.from({length:i+1},(t,e)=>e/i);function Ic(i,t,e,n){const s=Do(i).map(r=>Do(t).map(o=>e(r,o)));return Zo(s,s.map(r=>r.map(o=>G(o.x,n,o.z))))}const Dc=(i,t=.35,e=6)=>t+(1-t)*Math.sqrt(1-Math.abs(i)**e);function tb(){return Ic(8,12,(i,t)=>{const e=t*2-1,n=.38+.18*Ge(0,.4,i),s=-1.03+.33*i+.06*e*e*(1-i),r=.125+.1*Ge(0,1,i),o=.1+.04*i,a=o+(r-o)*(1-Math.abs(e)**2.4);return G(e*n,.05+(a-.05)*Dc(e,.4),s)},.05)}const ni={bottom:[.215,-.745],top:[.43,-.5]};function eb(){const i=t=>Do(4).map(e=>Do(6).map(n=>{const s=n*2-1,r=ni.bottom[0]+(ni.top[0]-ni.bottom[0])*e,o=ni.bottom[1]+(ni.top[1]-ni.bottom[1])*e-.035*(1-s*s)-t*.66;return G(s*(.19-.04*e),r+t*.75,o)}));return Zo(i(.012),i(0))}function ad(i){return Ic(9,6,(t,e)=>{const n=Math.sin(Math.PI*t)**.35,s=-.36+.7*t+.05*e*(1-2*t),r=(.075+.085*e)*(.45+.55*n)*Dc(e,.45);return G(i*(.3+.34*e),.065+r,s)},.065)}function nb(){return Ic(12,5,(i,t)=>{const e=i*2-1,n=.72+.24*t-.08*Math.abs(e)**6*t,s=.2+.05*Math.abs(e)**3-.06;return G(e*.7,.06+s*Dc(t*2-1,.5),n)},.06)}const Bi={centre:[0,.3,.86],tilt:-.18,thickness:.012};function ib(i){const t=new St(new _e(.3,.2,Bi.thickness),i.body);return t.position.set(...Bi.centre),t.rotation.x=Bi.tilt,[ee(tb(),i.body),ee(eb(),i.body),ee(ad(-1),i.body),ee(ad(1),i.body),ee(nb(),i.accent),t]}const ld=[[0,.03,.065,-.004],[-.015,.039,.088,-.01],[-.06,.043,.092,-.01],[-.075,.044,.088,0],[-.14,.046,.066,0],[-.2,.045,.05,0],[-.24,.039,.037,.003],[-.26,.024,.024,.008]],fp=.52;function sb(){const i=G(1,0,0),t=G(0,1,0),e=ld.map(([r,o,a,l])=>{const c=l+(a-l)*.35;return _r(G(0,c,r),i,t,o,a-c,10,3.6,c-l)}),n=(r,o)=>e[r][o].clone().sub(G(0,e[r][o].y>.03?.02:.04,ld[r][0])),s=G(0,.035,-.1);return[mn(e,{wrap:!0,out:n}),Cn(e[0],s),Cn(e.at(-1),s)]}const Ks=[[.095,.03],[.07,.14],[.068,.25],[.082,.338],[.223,.398],[.335,.452],[.429,.491],[.519,.524]];function rb(i){const t=e=>Ks.map(([n,s],r)=>{const[o,a]=Ks[Math.max(0,r-1)],[l,c]=Ks[Math.min(Ks.length-1,r+1)],h=G(0,c-a,-(l-o)).normalize(),[u,d]=[.2+.012*(r/Ks.length)+e,.095];return Array.from({length:9},(f,g)=>{const v=(g/8-.5)*Math.PI,m=Math.sign(v)*Math.abs(Math.sin(v))**.55*u;return G(m,n,s).addScaledVector(h,d*(1-Math.cos(v))-e)})});return ee(Zo(t(.012),t(0)),i)}function ob(i){const t=[-.43,-.415,-.17,-.155].map((s,r)=>_r(G(0,.1,s),G(1,0,0),G(0,1,0),r%3?.062:.05,r%3?.048:.036,12,3.5)),[e,n]=[G(0,.1,-.3),(s,r)=>t[s][r].clone().sub(G(0,.1,t[s][r].z))];return[ee(mn(t,{wrap:!0,out:n}),i.tank),ee(Cn(t[0],e),i.tank),ee(Cn(t[3],e),i.tank),he(G(0,.14,-.25),G(0,.165,-.25),.02,i.accent,10,.02,!1)]}function ab(i){const t=[];for(const e of[-1,1]){const n=new St(new _e(.055,.12,.012),i.frame);n.position.set(e*.105,.134,-.649),n.rotation.x=fp-Math.PI/2,t.push(n,he(G(e*.105,.1,-.63),G(e*.105,.055,-.58),.008,i.frame))}return t}function lb(i){const t=Ke.wheelRadius,e=new jt;e.add(new St(new or(t,.012,6,24),i.accent));for(const n of[-.42,Math.PI-.42]){const s=new St(new or(t,.019,6,7,.84),i.accent);s.rotation.z=n,e.add(s)}for(const n of[0,Math.PI,-Math.PI/2])e.add(he(G(0,0,-.03),G(Math.cos(n)*t,Math.sin(n)*t,0),.011,i.frame,4));return e.add(he(G(0,0,-.06),G(0,0,-.025),.038,i.frame,12,.032,!1)),e}function cb(i){const t=G(...Ke.wheelCentre),e=G(0,Math.sin(Ke.wheelTilt),Math.cos(Ke.wheelTilt)),[n,s]=[-.44,-.2].map(a=>t.clone().addScaledVector(e,a)),r=[rb(i.seat),...ob(i),...ab(i),he(t,n,.012,i.frame,8)];for(const a of[-1,1])r.push(he(s,G(a*.12,.058,-.2),.008,i.frame));const o=new jt;return o.position.copy(t),o.rotation.x=-.76,o.add(lb(i)),{parts:r,steering:o,wheel:o.children[0]}}const nn=.31;function Qn(i,[t,e,n],s,r=0){const o=[-.5,-.42,.42,.5].map((l,c)=>{const h=c%3?1:.8;return _r(G(0,l*e,0),G(1,0,0),G(0,0,1),t/2*h,n/2*h,12,4)}),a=new jt;return a.add(ee(mn(o,{wrap:!0,out:(l,c)=>G(o[l][c].x,0,o[l][c].z)}),s)),a.add(ee(Cn(o[0],G()),s),ee(Cn(o[3],G()),s)),a.position.copy(i),a.rotation.x=r,a}function hb(i){const t=[[.001,0],[.035,.002],[.055,.035],[.055,.21],[.04,.24],[.013,.245],[.013,.285]],e=new qo(t.map(([s,r])=>new at(s,r)),14).rotateX(Math.PI/2),n=ee(e,i);return n.position.set(nn+.01,.37,.55),n}function ub(i){const e=Qn(G(nn,.31,.41),[.11,.13,.11],i.engine,-.42);for(let n=0;n<4;n++){const s=new St(new _e(.15,.007,.145),i.engine);s.position.y=-.045+n*.026,e.add(s)}return e.add(Qn(G(0,.083,0),[.1,.04,.1],i.engine)),[Qn(G(nn,.1,.45),[.2,.012,.28],i.frame),Qn(G(nn,.185,.45),[.16,.14,.22],i.engine),e,Qn(G(nn+.095,.255,.45),[.05,.25,.25],i.shroud),he(G(nn+.12,.24,.455),G(nn+.13,.24,.455),.078,i.accent,16,.07,!1),Qn(G(nn+.1,.39,.5),[.022,.02,.06],i.accent),Qn(G(nn,.335,.27),[.15,.12,.09],i.accent),Hl([G(nn,.35,.44),G(nn+.02,.39,.5),G(nn+.01,.37,.56)],.016,i.exhaust,6,6),hb(i.exhaust),Qn(G(.21,.16,.5),[.03,.17,.25],i.accent)]}function cd(i,t,e,n){const s=new St(new Yo(t,20),i);return s.position.copy(e),s.lookAt(e.clone().add(n)),s.userData.small=!0,s}function db(i,t=DS,e=!1){const n=new jt;n.add(...QS(i),...ib(i),...ub(i));const s=cb(i);n.add(...s.parts,s.steering);const r=e?i.body:new de({map:XS(t),roughness:.4}),[o,a]=ni.bottom,[l,c]=ni.top,h=new R(0,c-a,-(l-o)).normalize(),u=new R(0,(o+l)/2+.01,(a+c)/2-.035).addScaledVector(h,.014),d=new R(0,-Math.sin(Bi.tilt),Math.cos(Bi.tilt)),f=new R(...Bi.centre).addScaledVector(d,Bi.thickness/2+.003);n.add(cd(r,.075,u,h),cd(r,.07,f,d));const g=s.wheel;return g.children.forEach(v=>v.userData.small=!0),ur(g,{alias:new Map([...i.alias,[i.frame,i.accent]])}),ur(n,{keep:[s.steering],alias:i.alias}),{group:n,steeringWheel:g}}const xn=.072,fb=22;function hd(i,t){return new qo(i.map(([e,n])=>new at(e,n)),t).rotateZ(-Math.PI/2)}function pb(i,t){const e=xn+.004,n=[[e,.86],[e+.4*(i-e),1],[i-.03,1.03],[i-.012,.95],[i-.003,.8],[i,.45]];return[...n.map(([s,r])=>[s,-r*t]),...n.reverse().map(([s,r])=>[s,r*t])]}function mb(i,t){const e=i.width/2,n=new jt;n.add(new St(hd(pb(i.radius,e),fb),t.tyre));for(const o of[1,-1]){const a=new St(new Yo(xn-.004,14),t.tyre);a.rotation.y=o*Math.PI/2,a.position.x=o*.2*e,n.add(a)}const s=[[xn-.007,-.7*e],[xn-.007,.76*e],[xn+.006,.84*e],[xn+.004,.92*e],[xn-.005,.9*e]];n.add(new St(hd(s,18),t.rim));for(let o=0;o<5;o++){const a=new St(new _e(.012,xn-.02,.017),t.rim),l=o/5*Math.PI*2;a.rotation.x=l,a.position.set(.55*e,Math.cos(l)*(xn/2+.006),Math.sin(l)*(xn/2+.006)),n.add(a)}const r=new St(new ks(.02,.026,.7*e,10).rotateZ(-Math.PI/2),t.hub);return r.position.x=.55*e,n.add(r),n}function gb(i){const t=new jt,e=[];for(const n of[!0,!1]){const s=n?IS:cp,r=(n?Pc:Rs)/2;for(const o of[-1,1]){const a=new jt;a.position.set(o*r,s.radius,(n?-1:1)*(As/2));const l=new jt,c=mb(s,i);o<0&&(c.rotation.y=Math.PI),l.add(c),ur(l,{alias:i.alias}),a.add(l),t.add(a),e.push({steer:a,spin:l,radius:s.radius,front:n,side:o})}}return{group:t,wheels:e}}const No=[[.077,.23,.13,.08,.08],[.13,.245,.17,.115,.105],[.243,.29,.155,.105,.1],[.356,.342,.17,.12,.104],[.45,.381,.186,.124,.104],[.521,.409,.2,.11,.098],[.573,.429,.178,.088,.088],[.613,.437,.105,.068,.072],[.638,.432,.058,.054,.05],[.68,.422,.05,.048,.044]],pp=G(1,0,0),mp=G(0,0,1);function vb(i){const t=No.map(([r,o,a,l,c])=>_r(G(0,r,o),pp,mp,a,c,20,2.6,l)),e=G(0,.35,.3),s=mn(t,{wrap:!0,out:(r,o)=>t[r][o].clone().sub(G(0,t[r][o].y,No[r][1]))});return[ee(s,i),ee(Cn(t[0],e),i),ee(Cn(t.at(-1),e),i)]}function _b(i){const t=No.slice(1,6).map(([e,n,s,r,o])=>_r(G(0,e,n),pp,mp,s*1.012,o*1.012,48,2.6,r*1.012));return[-4,28].map(e=>{const n=t.map(r=>[-2,-1,0,1,2].map(o=>r[(e+o+48)%48]));return ee(mn(n,{out:(r,o)=>n[r][o].clone().sub(G(0,n[r][o].y,No[r+1][1]))}),i)})}function ud(i,t){const e=G(i*.085,.13,.19),n=G(i*.125,.27,-.15),s=G(i*.108,.15,-.512),r=new St(new $o(.056,8,6),t.suit);r.position.copy(n);const o=sb().map(a=>{const l=new St(a,t.boot);return l.position.set(i*.105,.055,-.5),l.rotation.x=fp,l});return[he(e,n,.074,t.suit,8,.058),r,he(n,s,.052,t.suit,8,.04),...o]}function xb(i){const t=new St(new or(.08,.018,7,24),i.collar);return t.scale.set(1,.86,1),t.rotation.x=Math.PI/2-.14,t.position.set(0,.603,.412),[...vb(i.suit),..._b(i.panel),...ud(-1,i),...ud(1,i),t]}const dd=.132,[Mb,gp]=[.138,.185],[yb,Sb]=[.154,.171],[bb,Eb]=[2.3,3.4],Tb=.14,wb=.05,[Ab,Rb]=[-.56,.2],Cb=(i,t)=>G(Math.sin(i)*Math.cos(t),Math.sin(t),-Math.cos(i)*Math.cos(t)),fd=(i,t)=>{const e=i.y>0?bb:Eb;return(Math.hypot(i.x/t,i.z/(i.z<0?yb:Sb))**e+Math.abs(i.y/(i.y>0?Mb:gp))**e)**(-1/e)};function Vl(i){let t=fd(i,dd);i.y<0&&(t=fd(i,dd*(1-Tb*Ge(0,gp,-i.y*t))));const e=Ge(.3,.95,-i.z)*Math.exp(-(((i.y-Ab)/Rb)**2));return t+wb*e}function Nc(i,t,e=0){const n=Cb(i,t);return n.multiplyScalar(Vl(n)+e)}function Uo(i,t){let[e,n]=[-Math.PI/2,Math.PI/2];for(let s=0;s<24;s++){const r=(e+n)/2;Nc(i,r).y<t?e=r:n=r}return(e+n)/2}const _s=(i,t,e=0)=>Nc(i,Uo(i,t),e);function Gl(i){const t=Math.abs(Math.atan2(Math.sin(i),Math.cos(i)))/Math.PI;return-.15-.003*Ge(.5,1,t)+.014*Math.sin(i)**2}const nl=1.52,vo=i=>.058-.026*Math.abs(i)**3,il=i=>-.05+.038*i*i,sl=28,rl=11,ci=(i,t,e)=>Array.from({length:i+1},(n,s)=>t+(e-t)*s/i);function Pb(i){const t=ci(sl-1,-Math.PI,Math.PI-2*Math.PI/sl),e=t.map(c=>Uo(c,Gl(c))),n=(c,h)=>Math.PI/2-c*(Math.PI/2-e[h]),s=ci(rl-1,1/rl,1).map(c=>t.map((h,u)=>Nc(h,n(c,u)))),r=mn(s,{wrap:!0,out:(c,h)=>s[c][h]}),o=s[rl-1].map(c=>c.clone().multiply(G(.9,1,.9)).add(G(0,-.004,0))),a=new Ko(new Xo(o,!0),sl,.016,4,!0),l=Cn(o,G());return[ee(r,i.helmet),ee(Cn(s[0],G()),i.helmet),ee(a,i.trim),ee(l,i.trim)]}function Wl(i,t,e,n,s=8e-4){const r=o=>t.map(a=>i.map(l=>e(l,a,o)));return Zo(r(n),r(s))}function Lb(i){const t=ci(14,-1,1),e=(a,l)=>il(a)+(vo(a)-il(a))*l,n=(a,l,c)=>_s(a*nl,e(a,l),c*(.625+.375*l)),s=[ee(Wl(t,ci(3,0,1),n,.008),i.visor)];s[0].userData.small=!0;for(const a of[-1,1]){const[l,c]=[a*(nl+.04),(vo(1)+il(1))/2];s.push(he(_s(l,c),_s(l,c,.012),.021,i.trim,10,.017,!1))}const r=(a,l)=>l<.01?.005*(1-a*a):0,o=(a,l,c)=>_s(a*.55,vo(a*.55/nl)+l-r(a,l),l<.01?c:c*.1);return s.push(ee(Wl(ci(8,-1,1),[.003,.02],o,.013),i.helmet)),s}function Ib(i){const t=Uo(0,vo(0)+.045),e=Math.PI-Uo(Math.PI,Gl(Math.PI)+.006),n=ci(18,t,e).map(o=>{const a=.02+.016*(o/Math.PI);return[-a,0,a].map(l=>{const c=G(l/Vl(G(0,Math.sin(o),-Math.cos(o))),Math.sin(o),-Math.cos(o)).normalize();return c.multiplyScalar(Vl(c)+.0015)})}),s=ci(12,1.75,2*Math.PI-1.75).map(o=>[.014,.036].map(a=>_s(o,Gl(o)+a,.0015))),r=s[0].map((o,a)=>s.map(l=>l[a]));return[ee(mn(n,{out:(o,a)=>n[o][a]}),i.stripe),ee(mn(r,{out:(o,a)=>r[o][a]}),i.stripe)]}function Db(i){const t=(n,s,r,o)=>Wl(ci(4,n-r,n+r),[s-o,s+o],_s,.005),e=[t(-.42,.118,.07,.008),t(.42,.118,.07,.008)];for(const n of[-.084,-.1])e.push(t(0,n,.13,.0045));return e.map(n=>ee(n,i.trim))}function Nb(i){const t=new jt;return t.add(...Pb(i),...Lb(i),...Ib(i),...Db(i)),t}const{upperArm:ii,forearm:ri,wheelRadius:pd}=Ke,Ub=.07,ol=(i,[t,e,n],s,r)=>new St(new $o(i,8,6).scale(t,e,n).translate(0,s,0),r);function Ob(i,t){const e=t?[he(G(),G(0,ri-.1,0),.043,i.suit,8,.036),he(G(0,ri-.115,0),G(0,ri-.045,0),.041,i.glove,8,.047,!1),ol(1,[.047,.058,.038],ri-.008,i.glove)]:[he(G(),G(0,ii,0),.054,i.suit,8,.044),ol(.052,[1,1,1],0,i.suit),ol(.046,[1,1,1],ii,i.suit)];return new jt().add(...e).updateMatrixWorld(!0),up(e,i.suit,void 0,!0)}function Fb(i){const t=[0,1,2,3].map(()=>new Ff),e=t.map((a,l)=>Ob(i,l%2===1)),n=vr(e.map(([a])=>a)),s=e.map(([a])=>a.attributes.position.count),r=a=>s.flatMap((l,c)=>Array(l).fill(a(c)).flat());n.setAttribute("skinIndex",new fc(r(a=>[a,0,0,0]),4)),n.setAttribute("skinWeight",new qt(r(()=>[1,0,0,0]),4));const o=new w1(n,e[0][1]);return o.add(...t),o.bind(new xc(t,t.map(()=>new Pt)),new Pt),o.boundingSphere=new Hn(G(0,.5,.12),.5),{mesh:o,update:kb(t)}}function kb(i){const t=new Pt().compose(G(...Ke.wheelCentre),new _i().setFromEuler(new gn(-.76,0,0)),G(1,1,1)),[e,n,s,r,o,a,l,c,h]=Array.from({length:9},()=>G()),u=new Pt,d=(f,g,v,m)=>{l.subVectors(v,g).normalize(),a.copy(m).addScaledVector(l,-m.dot(l)).normalize(),c.crossVectors(a,l),f.position.copy(g),f.quaternion.setFromRotationMatrix(u.makeBasis(a,l,c))};return f=>{for(const g of[-1,1]){const[v,m]=[Math.cos(f),Math.sin(f)];n.set(g*pd*v,g*pd*m,0).applyMatrix4(t),h.set(-m,v,0).transformDirection(t),e.set(g*Ke.shoulder[0],Ke.shoulder[1],Ke.shoulder[2]),r.subVectors(n,e);let p=r.length();e.addScaledVector(r,Math.min(Ub,Math.max(0,p-(ii+ri)*.98))/p),p=Math.min(r.subVectors(n,e).length(),(ii+ri)*.999),r.normalize(),o.set(g*Ke.elbowOut[0],Ke.elbowOut[1],Ke.elbowOut[2]),o.addScaledVector(r,-o.dot(r)).normalize();const y=(ii*ii-ri*ri+p*p)/(2*p);s.copy(e).addScaledVector(r,y).addScaledVector(o,Math.sqrt(Math.max(0,ii*ii-y*y)));const[_,b]=g<0?[i[0],i[1]]:[i[2],i[3]];d(_,e,s,o),d(b,s,n,h)}}}function zb(i){const t=new jt;t.add(...xb(i));const e=new jt;e.position.set(...Ke.headPivot);const n=Nb(i);n.position.set(0,.119,-.022),n.scale.setScalar(.95),n.rotation.x=-.06,e.add(n),t.add(e),ur(e,{alias:i.alias});const s=Fb(i);return s.update(0),t.add(s.mesh),ur(t,{keep:[e,s.mesh],alias:i.alias}),{group:t,head:e,arms:s}}const Bb=3,Hb=4;function Vb(i){const t=new Mi({colorWrite:!1,transparent:!0,depthWrite:!0}),e=[];i.traverse(n=>n.isMesh&&e.push(n));for(const n of e){const s=n.clone(!1);s.material=t,s.renderOrder=Bb,n.renderOrder=Hb,n.parent.add(s)}}class Xl{constructor({livery:t,number:e,ghost:n=!1}={}){const s=HS(t,n);this.root=new jt,this.body=new jt,this.root.add(this.body);const r=db(s,e,n);this.steeringWheel=r.steeringWheel,this.driver=zb(s),this.body.add(r.group,this.driver.group);const{group:o,wheels:a}=gb(s);if(this.wheels=a,this.root.add(o),this.root.traverse(c=>{c.isMesh&&(c.receiveShadow=!n,c.castShadow=!n&&!c.userData.small)}),[this._roll,this._pitch,this._lean,this._steer]=[0,0,0,0],n){Vb(this.root);return}const l=new St(new Ue(1.9,2.6).rotateX(-Math.PI/2),new Mi({map:hp(),transparent:!0,depthWrite:!1,toneMapped:!1}));l.position.y=.03,l.renderOrder=2,this.root.add(l)}setFirstPerson(t){this.driver.head.visible=!t}update(t,e,n,s=!1){this.root.position.set(t.x,0,t.z),this.root.rotation.y=t.yaw,this._steer=s?t.steer:Ae(this._steer,t.steer,OS,n)||0;for(const h of this.wheels){const u=!h.front&&Number.isFinite(e.wheelSpeed)?e.wheelSpeed:e.forwardSpeed/h.radius;h.spin.rotation.x-=u*n,h.front&&(h.steer.rotation.y=this._steer*NS)}const r=1-sd.share*Ge(0,sd.speed,Math.abs(e.forwardSpeed));this.steeringWheel.rotation.z=this._steer*US*r,this.driver.arms.update(this.steeringWheel.rotation.z);const o=zS,a=pt(-e.latAccel*FS,-o,o)||0,l=pt(e.longAccel*kS,-o,o)||0;this._roll=s?a:Ae(this._roll,a,7,n)||0,this._pitch=s?l:Ae(this._pitch,l,7,n)||0,this.body.rotation.set(this._pitch,0,this._roll);const c=pt(e.latAccel*Qa.perAccel,-.12,Qa.max)||0;this._lean=s?c:Ae(this._lean,c,Qa.rate,n)||0,this.driver.head.rotation.z=this._lean}}const Gb={throttle:0,brake:0,steer:0,handbrake:!1};class Uc{constructor(t,e={}){this.collider=t,this.model=new Xl(e),this.draft=0,this.surface=null,this.grip=[1,1,1,1],this._surfaceIndex=-1,this.state={x:0,z:0,yaw:0,vx:0,vz:0,steer:0,yawRate:0},this.telemetry={},this.contact={x:0,z:0,nx:0,nz:0},this._resetTelemetry()}get object3d(){return this.model.root}_resetTelemetry(){Object.assign(this.telemetry,{speed:0,forwardSpeed:0,slip:0,sliding:!1,longAccel:0,latAccel:0,yawRate:0,slipAngle:0,drift:0,impact:0,throttle:0,brake:0,steer:0,rpm:1700,clutch:1,wheelSpeed:0,wheelSpin:0,tyreTemp:[22,22],loads:[0,0,0,0]})}setLook(t={}){var n,s;const e=this.model.root;return this.model=new Xl(t),(n=e.parent)==null||n.add(this.model.root),(s=e.parent)==null||s.remove(e),this.model.update(this.state,this.telemetry,0,!0),e}place(t,e,n){this.state={x:t,z:e,yaw:n,vx:0,vz:0,steer:0,yawRate:0},this.draft=0,this._surfaceIndex=-1,this._resetTelemetry(),this.model.update(this.state,this.telemetry,0,!0)}update(t=Gb,e){var l;if(this.surface){const{x:c,z:h}=this.state;this._surfaceIndex=this.surface.path.nearest(c,h,this._surfaceIndex),this.surface.wheels(this.state,this._surfaceIndex,this.grip)}const n={...t,draft:this.draft,grip:this.grip},{state:s,impact:r,contact:o}=LS(this.state,n,e,this.collider);(l=this.surface)==null||l.addDistance(Math.hypot(s.vx,s.vz)*e),o&&Object.assign(this.contact,o),this.state=s;const a=s;Object.assign(this.telemetry,{speed:Math.hypot(a.vx,a.vz),forwardSpeed:a.forwardSpeed,slip:a.slip,sliding:a.sliding,longAccel:a.longAccel,latAccel:a.latAccel,yawRate:a.yawRate,slipAngle:a.slipAngle,drift:a.drift,rpm:a.rpm,clutch:a.clutch,wheelSpeed:a.omega,wheelSpin:a.wheelSpin,tyreTemp:[a.tempF,a.tempR],loads:a.loads,impact:r,throttle:t.throttle,brake:t.brake,steer:a.steer}),this.model.update(a,this.telemetry,e)}}class Wb{constructor(){this.model=new Xl({ghost:!0}),this.frames=null,this.object3d.visible=!1,this._i=0,this._state={x:0,z:0,yaw:0,steer:0},this._tel={forwardSpeed:0,latAccel:0,longAccel:0}}get object3d(){return this.model.root}set(t){this.frames=t&&t.length>=8?t:null,this._i=0}update(t,e,n){const s=this.frames,r=s?s.length/4:0,o=e&&r>1&&t<=s[(r-1)*4];if(this.object3d.visible=o,!o)return void(this._i=0);for(t<s[this._i*4]&&(this._i=0);this._i<r-2&&s[(this._i+1)*4]<=t;)this._i++;const a=this._i*4,l=Math.min(1,Math.max(0,(t-s[a])/(s[a+4]-s[a]||1))),c=this._state,[h,u]=[c.x,c.z];c.x=s[a+1]+(s[a+5]-s[a+1])*l,c.z=s[a+2]+(s[a+6]-s[a+2])*l,c.yaw=s[a+3]+fi(s[a+7]-s[a+3])*l,this._tel.forwardSpeed=n>0?Math.min(25,Math.hypot(c.x-h,c.z-u)/n):0,this.model.update(c,this._tel,n)}}const Xb=`
  attribute float aSize;
  attribute float aAlpha;
  uniform float uScale;
  varying float vAlpha;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = aSize * uScale / max(-mv.z, 0.1);
    vAlpha = aAlpha;
  }`,qb=`
  uniform vec3 uColor;
  varying float vAlpha;
  void main() {
    vec2 d = gl_PointCoord - 0.5;
    float a = vAlpha * (1.0 - smoothstep(0.0, 0.25, dot(d, d)));
    if (a < 0.004) discard;
    gl_FragColor = vec4(uColor, a);
  }`;class md{constructor({max:t,color:e,additive:n=!1,gravity:s=0,drag:r=0}){this.max=t,this.gravity=s,this.drag=r,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.age=new Float32Array(t).fill(1),this.life=new Float32Array(t).fill(1),this.size=new Float32Array(t*2),this.alpha0=new Float32Array(t),this.aSize=new Float32Array(t),this.aAlpha=new Float32Array(t),this.cursor=0;const o=new fe;o.setAttribute("position",new ie(this.pos,3)),o.setAttribute("aSize",new ie(this.aSize,1)),o.setAttribute("aAlpha",new ie(this.aAlpha,1)),this.material=new ce({uniforms:{uColor:{value:e},uScale:{value:600}},vertexShader:Xb,fragmentShader:qb,transparent:!0,depthWrite:!1,blending:n?rr:Vi}),this.points=new P1(o,this.material),this.points.frustumCulled=!1}emit(t,e,n,s,r,o,a,l,c,h){const u=this.cursor;this.cursor=(u+1)%this.max,this.pos.set([t,e,n],u*3),this.vel.set([s,r,o],u*3),this.size.set([l,c],u*2),this.age[u]=0,this.life[u]=a,this.alpha0[u]=h}setScale(t,e){this.material.uniforms.uScale.value=t/(2*Math.tan(e*Math.PI/360))}update(t){const e=Math.exp(-this.drag*t);for(let s=0;s<this.max;s++){if(this.age[s]>=this.life[s]){this.aAlpha[s]=0;continue}this.age[s]+=t;const r=Math.min(1,this.age[s]/this.life[s]),o=s*3;this.vel[o+1]+=this.gravity*t;for(let a=0;a<3;a++)this.vel[o+a]*=e,this.pos[o+a]+=this.vel[o+a]*t;this.aSize[s]=this.size[s*2]+(this.size[s*2+1]-this.size[s*2])*r,this.aAlpha[s]=this.alpha0[s]*(1-r)*Math.min(1,r*8)}const n=this.points.geometry.attributes;n.position.needsUpdate=n.aSize.needsUpdate=n.aAlpha.needsUpdate=!0}}const Yb=.2,no=.028;class $b{constructor(t=2400,e=.2){this.max=t,this.halfWidth=e/2,this.pos=new Float32Array(t*12),this.col=new Float32Array(t*16);const n=new Uint32Array(t*6);for(let r=0;r<t;r++)n.set([r*4,r*4+1,r*4+2,r*4+1,r*4+3,r*4+2],r*6);const s=new fe;s.setAttribute("position",new ie(this.pos,3).setUsage(zh)),s.setAttribute("color",new ie(this.col,4).setUsage(zh)),s.setIndex(new ie(n,1)),this.mesh=new St(s,new Mi({vertexColors:!0,transparent:!0,depthWrite:!1,side:un,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,this.cursor=0,this.last=new Map}add(t,e,n,s){const r=this.last.get(t);if(s<=0)return void this.last.delete(t);if(!r)return void this.last.set(t,{x:e,z:n,s});const o=e-r.x,a=n-r.z,l=Math.hypot(o,a);if(l<Yb)return;if(l>2.5)return void this.last.set(t,{x:e,z:n,s});const c=-a/l*this.halfWidth,h=o/l*this.halfWidth,u=this.cursor;this.cursor=(u+1)%this.max,this.pos.set([r.x+c,no,r.z+h,r.x-c,no,r.z-h,e+c,no,n+h,e-c,no,n-h],u*12);const d=.5*r.s,f=.5*s;this.col.set([.02,.02,.02,d,.02,.02,.02,d,.02,.02,.02,f,.02,.02,.02,f],u*16);const{position:g,color:v}=this.mesh.geometry.attributes;g.addUpdateRange(u*12,12),v.addUpdateRange(u*16,16),g.needsUpdate=v.needsUpdate=!0,this.last.set(t,{x:e,z:n,s})}clear(){this.pos.fill(0),this.col.fill(0),this.last.clear();const{position:t,color:e}=this.mesh.geometry.attributes;t.needsUpdate=e.needsUpdate=!0}}class Oc{constructor(t){this.skids=new $b,this.smoke=new md({max:260,color:new _t(13225170),gravity:.4,drag:1.6}),this.sparks=new md({max:160,color:new _t(1,.55,.15).multiplyScalar(6),additive:!0,gravity:-14,drag:.6}),t.add(this.skids.mesh,this.smoke.points,this.sparks.points),this._smokeDebt=0}update(t,e,n,s){const{state:r,telemetry:o}=t,a=pi(r.yaw),l=Ec(r.yaw),h=o.speed>2?pt((o.slip-1.8)/3.5,0,1):0,u=o.brake>0&&o.forwardSpeed>8?.3:0;this._smokeDebt+=h>.12?h*26*e:0;const d=Math.floor(this._smokeDebt);this._smokeDebt-=d;for(const f of[-1,1]){const g=r.x+l.x*f*(Rs/2)-a.x*(As/2),v=r.z+l.z*f*(Rs/2)-a.z*(As/2);this.skids.add(f,g,v,Math.max(h,u));for(let m=0;m<d;m++){const p=()=>(Math.random()-.5)*.8;this.smoke.emit(g,.12,v,r.vx*.2+p(),.45+Math.random()*.35,r.vz*.2+p(),.8+Math.random()*.5,.35,1.5+Math.random()*.6,.06+.18*h)}}if(o.impact>2.5){const f=t.contact,g=Math.min(40,Math.round(o.impact*4));for(let v=0;v<g;v++){const m=()=>(Math.random()-.5)*5;this.sparks.emit(f.x,.35,f.z,f.nx*3+r.vx*.3+m(),2+Math.random()*3,f.nz*3+r.vz*.3+m(),.3+Math.random()*.35,.09,.03,1)}}this.smoke.setScale(s,n.fov),this.sparks.setScale(s,n.fov),this.smoke.update(e),this.sparks.update(e)}reset(){this.skids.clear()}}const Kb=.7,gd={fade:.012,suspendMs:60},ei={idleRpm:1700,biteRpm:2600,lockRpm:3e3,dropRpm:2e3,maxRpm:5600,topSpeed:17,slipFlare:650,revRate:9,hzPerRev:1.6,cutoffIdle:380,cutoffTop:3400,idleGain:.07,loadGain:.12,rumbleDepth:.3,idleWobble:22},io={pitches:[1.08,.93],hear:34,hold:3,teleport:4},oi={minRpm:.62,lift:.5,pops:[3,7],window:.55,gain:.16},Fe={gripG:[7,15],slip:[1.4,5],squealGain:.19,squealHz:[1350,2150],brakeDecel:[6,12],brakeGain:.16,brakeHz:520,judderHz:19,scrapeGain:.22,scrapeHz:2600,scrapeHold:.18},al={gain:.3,lowpass:420,buzz:.35},vd={minSpeed:1.2,gain:.55},ll={red:660,go:1320,gain:.22},cl={lap:[880,1320],best:[880,1109,1320,1760],gain:.16};class jb{constructor(){var e,n;this.ctx=null,this.master=null,this.muted=!1,this.hidden=((e=globalThis.document)==null?void 0:e.hidden)??!1,this._pending=[],this._noise=null,this._suspendTimer=0;const t=()=>this.unlock();for(const s of["keydown","pointerdown","touchstart"])window.addEventListener(s,t,{once:!0,passive:!0});(n=globalThis.document)==null||n.addEventListener("visibilitychange",()=>this.setHidden(document.hidden))}unlock(){var n,s;if(this.ctx)return void(this.hidden||((s=(n=this.ctx).resume)==null?void 0:s.call(n)));const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t;const e=this.ctx.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=4,this.master=this.ctx.createGain(),this.master.gain.value=this._level(),this.master.connect(e).connect(this.ctx.destination);for(const r of this._pending)r(this.ctx,this.master);this._pending.length=0}onReady(t){this.ctx?t(this.ctx,this.master):this._pending.push(t)}toggleMute(){return this.muted=!this.muted,this.master&&this.master.gain.setTargetAtTime(this._level(),this.ctx.currentTime,.05),this.muted}setHidden(t){var e,n;this.hidden=t,this.ctx&&(clearTimeout(this._suspendTimer),this.master.gain.setTargetAtTime(this._level(),this.ctx.currentTime,gd.fade),t?this._suspendTimer=setTimeout(()=>{var s,r;return this.hidden&&((r=(s=this.ctx).suspend)==null?void 0:r.call(s))},gd.suspendMs):(n=(e=this.ctx).resume)==null||n.call(e))}_level(){return this.muted||this.hidden?0:Kb}noise(){if(!this._noise){const t=this.ctx.sampleRate*2;this._noise=this.ctx.createBuffer(1,t,this.ctx.sampleRate);const e=this._noise.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1}return this._noise}}class vp{constructor(t=ei){this.cfg=t,this.rpm=t.idleRpm,this.load=0,this.liftOff=0,this._peakThrottle=0}roadRpm(t){return Math.abs(t)/this.cfg.topSpeed*this.cfg.maxRpm}step(t,e,n){if(Number.isFinite(t.rpm))return this.rpm=Ae(this.rpm,t.rpm,30,n),this.load=Ae(this.load,e,9,n),this._detectLift(e,n),this.rpm;const s=this.cfg,r=this.roadRpm(t.forwardSpeed??t.speed??0),o=e*pt(((t.slip||0)-1.2)/4,0,1)*(t.sliding?1:.6)*s.slipFlare;let a,l;if(r>=s.lockRpm)[a,l]=[r+o,22];else if(e>.05){const c=s.idleRpm+e*(s.maxRpm-s.idleRpm),h=s.biteRpm+(s.lockRpm-s.biteRpm)*Math.max(r/s.lockRpm,e*.5);[a,l]=[Math.min(c,Math.max(h,r))+o,s.revRate]}else{const c=r>s.dropRpm;[a,l]=[c?r:s.idleRpm,c?18:3.5]}return this.rpm=Ae(this.rpm,Math.min(a,s.maxRpm*1.04),l,n),this.load=Ae(this.load,e,9,n),this._detectLift(e,n),this.rpm}get rev(){const t=this.cfg;return pt((this.rpm-t.idleRpm)/(t.maxRpm-t.idleRpm),0,1.1)}_detectLift(t,e){this._peakThrottle=Math.max(t,this._peakThrottle-e*2);const n=this.rpm/this.cfg.maxRpm;this.liftOff=0,this._peakThrottle-t>=oi.lift&&t<.2&&n>=oi.minRpm&&(this.liftOff=pt((n-oi.minRpm)/(1-oi.minRpm),.3,1),this._peakThrottle=t)}reset(){this.rpm=this.cfg.idleRpm,this.load=this._peakThrottle=this.liftOff=0}}const _d=[1,.75,.9,.62,.55,.36,.3,.2,.18,.12,.1,.08,.06,.05,.04,.03];function Zb(i=1024){const t=new Float32Array(i);for(let e=0;e<i;e++)t[e]=Math.tanh((e/(i-1)*2-1)*2.2)/Math.tanh(2.2);return t}function Jb(i,t,e){const n=_=>new GainNode(i,{gain:_}),s=new Float32Array(_d.length+1);s.set(_d,1);const r=new OscillatorNode(i,{periodicWave:i.createPeriodicWave(new Float32Array(s.length),s)}),o=new OscillatorNode(i,{type:"sine"}),a=new AudioBufferSourceNode(i,{buffer:e,loop:!0}),l=new BiquadFilterNode(i,{type:"bandpass",Q:.9,frequency:400}),c=n(.2),h=n(1),u=new WaveShaperNode(i,{curve:Zb(),oversample:"2x"}),d=new BiquadFilterNode(i,{type:"lowpass",Q:2.6,frequency:600}),f=n(0),g=new OscillatorNode(i,{type:"sine"}),v=n(0),m=n(.15),p=new OscillatorNode(i,{type:"sine",frequency:4.2}),y=n(0);r.connect(n(.5)).connect(h),o.connect(n(.55)).connect(h),a.connect(l).connect(c).connect(h),h.connect(u).connect(d).connect(f).connect(t),g.connect(v).connect(f.gain),g.connect(m).connect(c.gain),p.connect(y),y.connect(r.detune),y.connect(o.detune);for(const _ of[r,o,g,p])_.start();return a.start(0,Math.random()*e.duration),{ctx:i,main:r,sub:o,noiseBand:l,noiseAmp:c,drive:h,filter:d,amp:f,pulse:g,pulseDepth:v,wobble:p,wobbleDepth:y}}class Qb{constructor(t,e=null){this.audio=t,this.out=e,this._left=0,this._next=0,this._level=0}trigger(t){const[e,n]=oi.pops;this._left=Math.round(e+(n-e)*t*(.6+Math.random()*.4)),this._level=t,this._next=.04+Math.random()*.06}update(t,e=1){if(!(!this._left||!this.audio.ctx)){if(e<=0)return void(this._left=0);this._next-=t,!(this._next>0)&&(this._pop(this._level*e*(.45+Math.random()*.55)),this._level*=.85,this._left--,this._next=.025+Math.random()*(oi.window/4))}}_pop(t){const{ctx:e,master:n}=this.audio,s=e.currentTime,r=this.out??n,o=(h,u,d)=>{const f=new GainNode(e,{gain:0});return f.gain.setValueAtTime(0,s),f.gain.linearRampToValueAtTime(u,s+.002),f.gain.exponentialRampToValueAtTime(1e-4,s+.002+d),h.connect(f).connect(r),s+.01+d},a=new AudioBufferSourceNode(e,{buffer:this.audio.noise()}),l=new BiquadFilterNode(e,{type:"bandpass",frequency:700+Math.random()*1100,Q:1.3});a.connect(l),a.start(s,Math.random()*1.5),a.stop(o(l,t*oi.gain*1.6,.025+Math.random()*.035));const c=new OscillatorNode(e,{type:"triangle",frequency:150});c.frequency.exponentialRampToValueAtTime(55,s+.06),c.start(s),c.stop(o(c,t*oi.gain,.06))}}class _p{constructor(t,e=1){this.n=null,this.pitch=e,this.model=new vp,this.pops=new Qb(t),this._wander=0,t.onReady((n,s)=>this.n=Jb(n,s,t.noise()))}get rpm(){return this.model.rpm}update(t,e,n,s=!0,r=1){this.model.step(t,e,n),this.render(this.model,n,s,r)}render(t,e,n=!0,s=1,r=!1){if(r&&this.pops.update(0,0),t.liftOff&&n&&this.pops.trigger(t.liftOff),this.pops.update(e,n?s:0),!this.n)return;const{ctx:o,main:a,sub:l,noiseBand:c,drive:h,filter:u,amp:d,pulse:f,pulseDepth:g,wobble:v,wobbleDepth:m}=this.n,p=o.currentTime,y=t.rev,_=t.load,b=1-pt(y*3,0,1),P=t.rpm/60*ei.hzPerRev*this.pitch,T=r?.002:.03;a.frequency.setTargetAtTime(P,p,T),l.frequency.setTargetAtTime(P*.5,p,T),f.frequency.setTargetAtTime(P/4,p,T),c.frequency.setTargetAtTime(P*5.5,p,.05),this._wander=(this._wander+e*(.7+Math.random()))%1,v.frequency.setTargetAtTime(3+2.5*this._wander,p,.2),m.gain.setTargetAtTime(ei.idleWobble*b,p,.1);const C=.35*y+.65*_;u.frequency.setTargetAtTime(An(ei.cutoffIdle,ei.cutoffTop,pt(C,0,1)),p,.05),h.gain.setTargetAtTime(.7+1.8*_*(.4+.6*y),p,.05);const I=n?(ei.idleGain+ei.loadGain*C)*s:0;d.gain.setTargetAtTime(I,p,.08),g.gain.setTargetAtTime(I*ei.rumbleDepth*(1+.8*b),p,.08)}}const t2={speed:0,forwardSpeed:0,slip:0,sliding:!1};class e2{constructor(t){this.voices=io.pitches.map(e=>new _p(t,e)),this.bound=this.voices.map(()=>null),this._models=new WeakMap}model(t){return this._track(t).rpm}_track(t){let e=this._models.get(t);return e||this._models.set(t,e={rpm:new vp,x:t.state.x,z:t.state.z}),e}_step(t,e){const n=this._track(t);Math.hypot(t.state.x-n.x,t.state.z-n.z)>io.teleport&&n.rpm.reset(),[n.x,n.z]=[t.state.x,t.state.z],n.rpm.step(t.telemetry,t.telemetry.throttle,e)}update(t,e,n,s){const o=e.map(c=>{this._step(c,n);const h=Math.hypot(c.state.x-t.x,c.state.z-t.z);return{k:c,d:h,rank:h-(this.bound.includes(c)?io.hold:0)}}).sort((c,h)=>c.rank-h.rank).slice(0,this.voices.length),a=this.bound.map(c=>o.find(h=>h.k===c)??null),l=o.filter(c=>!a.includes(c));this.voices.forEach((c,h)=>{const u=a[h]??l.shift(),d=((u==null?void 0:u.k)??null)!==this.bound[h];if(this.bound[h]=(u==null?void 0:u.k)??null,!u)return c.update(t2,0,n,!1);const f=Math.max(0,1-u.d/io.hear)**1.6*.75;c.render(this.model(u.k),n,s&&f>0,f,d)})}}class n2{constructor(t){this.audio=t}_env(t,e,n,s,r){const{ctx:o,master:a}=this.audio,l=o.createGain();return l.gain.setValueAtTime(0,r),l.gain.linearRampToValueAtTime(e,r+n),l.gain.exponentialRampToValueAtTime(1e-4,r+n+s),t.connect(l).connect(a),r+n+s}impact(t){const{ctx:e}=this.audio;if(!e||t<vd.minSpeed)return;const n=e.currentTime,s=pt(t/9,.15,1)*vd.gain,r=Object.assign(e.createBufferSource(),{buffer:this.audio.noise()}),o=new BiquadFilterNode(e,{type:"lowpass",frequency:1100});r.connect(o),r.start(n,Math.random()),r.stop(this._env(o,s,.004,.22,n));const a=Object.assign(e.createOscillator(),{type:"sine"});a.frequency.setValueAtTime(95,n),a.frequency.exponentialRampToValueAtTime(42,n+.25),a.start(n),a.stop(this._env(a,s*.9,.004,.28,n))}beep(t){const{ctx:e}=this.audio;if(!e)return;const n=e.currentTime,s=Object.assign(e.createOscillator(),{type:"square"});s.frequency.value=t==="go"?ll.go:ll.red,s.start(n),s.stop(this._env(s,ll.gain*.5,.005,t==="go"?.6:.2,n))}chime(t=!1){const{ctx:e}=this.audio;e&&(t?cl.best:cl.lap).forEach((n,s)=>{const r=e.currentTime+s*.09,o=Object.assign(e.createOscillator(),{type:"triangle"});o.frequency.value=n,o.start(r),o.stop(this._env(o,cl.gain,.01,.35,r))})}}const bn=(i,t=0)=>new GainNode(i,{gain:t}),ps=(i,t,e,n=1)=>new BiquadFilterNode(i,{type:t,frequency:e,Q:n});function Qs(i,t){const e=new AudioBufferSourceNode(i,{buffer:t,loop:!0});return e.start(0,Math.random()*t.duration),e}function _o(i,t,e,n,s){const r=new OscillatorNode(i,{type:t,frequency:e}),o=bn(i,n);return r.connect(o).connect(s),r.start(),{osc:r,depth:o}}const yn=(i,t,e,n=.06)=>i.setTargetAtTime(t,e.currentTime,n),hl=(i,[t,e])=>pt((i-t)/(e-t),0,1);function i2(i,t,e){const n=bn(i),[s,r]=[ps(i,"bandpass",Fe.squealHz[0],9),ps(i,"bandpass",Fe.squealHz[1],7)];Qs(i,e).connect(s).connect(n),Qs(i,e).connect(r).connect(bn(i,.6)).connect(n),_o(i,"sine",6.5,35,s.frequency).depth.connect(r.frequency);const a=bn(i),l=bn(i,.55);Qs(i,e).connect(ps(i,"bandpass",Fe.brakeHz,1.4)).connect(l).connect(a);const c=_o(i,"square",Fe.judderHz,.45,l.gain),h=bn(i),u=bn(i,.6);Qs(i,e).connect(ps(i,"highpass",1500,.7)).connect(ps(i,"bandpass",Fe.scrapeHz,.8)).connect(u).connect(h);const d=_o(i,"sawtooth",27,.4,u.gain);for(const f of[n,a,h])f.connect(t);return{ctx:i,squeal:n,bandA:s,bandB:r,brake:a,judder:c,scrape:h,rasp:d}}class s2{constructor(t){this.n=null,this._scrape=0,t.onReady((e,n)=>this.n=i2(e,n,t.noise()))}update(t,e,n=!0,s=0){if(this._scrape=s>.02?Fe.scrapeHold:Math.max(0,this._scrape-e),!this.n)return;const{ctx:r,squeal:o,bandA:a,bandB:l,brake:c,judder:h,scrape:u,rasp:d}=this.n,f=t.speed||0,g=n?pt((f-2)/3,0,1):0,v=hl(t.slip||0,Fe.slip),m=hl(Math.abs(t.latAccel||0),Fe.gripG),p=pt(v+.55*m*m,0,1);yn(o.gain,g*Fe.squealGain*p**1.3,r),yn(a.frequency,Fe.squealHz[0]*(1+.12*v),r,.1),yn(l.frequency,Fe.squealHz[1]*(1+.08*v),r,.1);const y=Math.abs(t.forwardSpeed||0),_=pt(-(t.longAccel||0),0,30),b=(t.brake||0)>.05&&y>3?hl(_,Fe.brakeDecel)*(t.brake||0):0;yn(c.gain,g*Fe.brakeGain*b*pt(y/8,0,1),r,.04),yn(h.osc.frequency,Fe.judderHz*(.7+.3*pt(y/14,0,1)),r,.1);const P=this._scrape>0&&n?pt(f/10,.2,1):0;yn(u.gain,Fe.scrapeGain*P,r,.03),yn(d.osc.frequency,18+Math.random()*30,r,.02)}}class r2{constructor(t){this.n=null,t.onReady((e,n)=>{const s=bn(e),r=bn(e,.5);Qs(e,t.noise()).connect(ps(e,"lowpass",al.lowpass,1.2)).connect(r).connect(s);const o=_o(e,"square",30,.5,r.gain),a=new OscillatorNode(e,{type:"triangle",frequency:30});a.connect(bn(e,al.buzz)).connect(s),a.start(),s.connect(n),this.n={ctx:e,level:s,ribs:o,buzz:a}})}update(t,e=!0){if(!this.n)return;const{ctx:n,level:s,ribs:r,buzz:o}=this.n,a=pt(t.hz,6,80);yn(r.osc.frequency,a,n,.03),yn(o.frequency,a*1.5,n,.03);const l=pt(t.hz/20,.25,1);yn(s.gain,e?al.gain*t.amount*l:0,n,.025)}}const o2=.25,a2="centripetal",l2=6,c2=5,xp=.012,Jo=.02,h2=.16,ql=.2,u2=.9,d2=.12,f2=1/22,p2=5,m2=2,g2=.9,v2="#d7263d",_2="#dcdcdc",Fc=.8,Mp=1.5,xd=.75,kc=.5,x2=[12853043,14277081],M2=1.2,yp=7,y2=4.6,ti={width:1.9,tile:9,opacity:.34,cornerBoost:.45,color:723725,roughness:.62},Hi={minBrake:.2,minDrop:1,mergeGap:3,streaks:3,spread:.28,width:.16,opacity:.22,rearTrack:1.12},ul={green:.965,rubberStart:.35,rubberLaps:40,lineGain:.04,lineWidth:.9,dust:.05,dustFrom:1.6,dustFull:2.8,kerb:.86};function Sp(i){const t=i.count,e=Math.round(m2/i.spacing),n=new Int8Array(t);for(let a=0;a<t;a++)if(!(Math.abs(i.curvature[a])<f2))for(let l=-e;l<=e;l++){const c=i.wrap(a+l);n[c]||(n[c]=Math.sign(i.curvature[a]))}const s=n.indexOf(0);if(s<0)return[];const r=[];let o=null;for(let a=1;a<=t;a++){const l=i.wrap(s+a);o&&n[l]===o.side?o.indices.push(l):(o&&r.push(o),o=n[l]?{side:n[l],indices:[l]}:null)}return r.filter(a=>a.indices.length*i.spacing>=p2)}const zc=i=>i.halfWidth-d2;function bp(i,t){const e=zc(i);return Math.max(e+.12,Math.min(e+u2,.92/Math.max(1e-6,Math.abs(i.curvature[t]))))}function S2(i){const t=i.count,e={side:new Int8Array(t),inner:new Float32Array(t),outer:new Float32Array(t)},n=zc(i);for(const{side:s,indices:r}of Sp(i))for(const o of r)e.side[o]=s,e.inner[o]=n,e.outer[o]=bp(i,o);return e}const b2=(i,t,e)=>[[i/2,-t/2],[i/2,t/2],[-i/2,-e/2],[-i/2,e/2]];function E2(i,t,e,n,s,r,o){if(o.count=o.left=o.right=0,o.lateral=n>=0?t.lateral(e.x,e.z,n):0,n<0)return o;const a=-Math.sin(e.yaw),l=-Math.cos(e.yaw),[c,h]=[-l,a];for(const[u,d]of s){const f=e.x+a*u+c*d,g=e.z+l*u+h*d,v=(f-t.x[n])*t.tx[n]+(g-t.z[n])*t.tz[n],m=t.wrap(n+Math.round(v/t.spacing)),p=i.side[m];if(!p)continue;const y=t.lateral(f,g,m)*p;y+r<i.inner[m]||y-r>i.outer[m]+.1||(o.count++,d<0?o.left++:o.right++)}return o}const T2=b2(As,Pc,Rs);class Ep{constructor(){this.contact={count:0,left:0,right:0,lateral:0},this.rib=new Yf([1,2.3,.5],[0,.4,1.1],$e.kerbCeil),this.reset()}reset(){this.amount=0,this.tilt=0,this.hz=0}get lateral(){return this.contact.lateral}update(t,e,n,s,r){const o=n?E2(n,e,t.state,s,T2,Jn.tyreHalfWidth,this.contact):this.contact,a=t.telemetry.speed||0,l=a>.5&&n?pt(o.count/2,0,1):0,c=l>this.amount?Jn.attack:Jn.release,h=1-Math.exp(-c*r);this.amount+=(l-this.amount)*h;const u=o.count?(o.right-o.left)/o.count:this.tilt;this.tilt+=(u-this.tilt)*h,this.hz=a/Jn.ridge,this.rib.update(this.hz,r),this._ride(t.model,a)}_ride(t,e){const n=this.amount,s=pt(e/6,0,1),r=this.rib.value[0]*.5+.5;t.root.position.y=n*(Jn.lift+Jn.hop*s*r),t.body.rotation.z+=n*this.tilt*Jn.roll*(.75+.25*r),t.body.rotation.x+=n*Jn.hop*s*this.rib.value[2]}}class Tp{constructor(t,e){this.n=t,this.start=e,this.best=null,this.bestSplits=null,this.reset()}reset(){this.progress=null,this.lastIndex=null,this.lap=0,this.lapStart=0,this.lastLap=null,this.splits=new Float32Array(this.n).fill(NaN),[this._lastK,this._prevTime]=[-1,0]}_wrap(t){return t>this.n/2?t-this.n:t<-this.n/2?t+this.n:t}update(t,e){if(this.lastIndex===null)return this.lastIndex=t,this.progress=this._wrap(t-this.start),this._prevTime=e,null;const n=this.progress;this.progress+=this._wrap(t-this.lastIndex),this.lastIndex=t;let s=null;const r=this.lap*this.n;if(n<r&&this.progress>=r){const o=(r-n)/(this.progress-n),a=this._prevTime+o*(e-this._prevTime);this.lap>=1&&(s=this._complete(a)),this.lap+=1,this.lapStart=a,this.splits.fill(NaN),this._lastK=-1}if(this.lap>=1){const o=Math.floor(this.progress-(this.lap-1)*this.n);for(let a=this._lastK+1;a<=Math.min(o,this.n-1);a++)this.splits[a]=e-this.lapStart;this._lastK=Math.max(this._lastK,Math.min(o,this.n-1))}return this._prevTime=e,s}_complete(t){const e=t-this.lapStart,n=this.best===null||e<this.best,s=this.best===null?null:e-this.best;return this.lastLap=e,n&&(this.best=e,this.bestSplits=Float32Array.from(this.splits)),{type:"lap",lap:this.lap,time:e,isBest:n,delta:s}}lapTime(t){return this.lap>=1?t-this.lapStart:0}delta(t){if(!this.bestSplits||this.lap<1)return null;const e=Math.floor(this.progress-(this.lap-1)*this.n),n=e>=0&&e<this.n?this.bestSplits[e]:NaN;return Number.isNaN(n)?null:t-this.lapStart-n}}const Md=.85,dl=[.5,1.3],w2=1.4,fl=5,A2=2.4,Oo="tbc-kart.v1",Zt={lookAhead:5,lookSpeed:.25,steerGain:2.4,yawDamp:.2,maxSpeed:17.5,latAccel:7.5,planChord:.7,planChordMin:4.5,planChordMax:14,planDecel:4.1,planAhead:.25,throttleBase:.5,throttleGain:.8,brakeMargin:.3,brakeGain:1,lockSteer:.9,lockThrottle:6.5,lockThrottleMin:.35,slipLiftStart:.06,slipLiftRange:.15,slipLiftMin:.15},ir={rowGap:3.4,lateral:1.45,playerSlot:4},R2={maxSpeed:9},Si=[{code:"ROS",name:"M. Rossi",number:"11",body:15087942,suit:2829634,stripe:16777215,skill:1.02,line:-.3,react:.18},{code:"OKA",name:"T. Okafor",number:"23",body:2873724,suit:1786674,stripe:1118481,skill:1,line:.4,react:.24},{code:"LIN",name:"E. Lindqvist",number:"5",body:3835647,suit:730437,stripe:16766474,skill:.98,line:.1,react:.2},{code:"TAN",name:"K. Tanaka",number:"88",body:16743168,suit:2236962,stripe:3835647,skill:.96,line:-.5,react:.3},{code:"MOR",name:"L. Moreau",number:"31",body:11766015,suit:3934572,stripe:16777215,skill:.94,line:.6,react:.34}],C2={code:"YOU",name:"You",number:"07"},ue={lineEdge:1.1,lineMax:2.4,lineTaper:25,sightAhead:9,sightLateral:1.6,sightKeep:11,passOffset:1.7,pullOutAhead:7,passLook:30,passTurn:.35,passGiveUp:8,passAlongside:1.5,passRetry:1,attack:.03,blockAhead:2.6,blockLateral:1.3,offsetRate:2.2,stuckTime:1.6,catchUp:.035,catchUpGap:60,formSpread:.05},P2={tbc:1.014,monaco:.996,monza:1.032,silverstone:1.013,spa:1.022,interlagos:.998,montreal:.984,austin:1.017,spielberg:1.067,singapore:.992},mi={amateur:{label:"AMATEUR",pace:.65},club:{label:"CLUB",pace:.74},pro:{label:"PRO",pace:.795}},L2="club",yd={range:9,lateral:1.3},Sd={radius:.78,restitution:.35},bd=1/20,wp=(i=Math.random)=>dl[0]+i()*(dl[1]-dl[0]);class I2{constructor(t,e,n,s,r){this.laps=r,this.bus=n,this.timer=new Tp(t,e),this.timer.best=s.best,this.timer.bestSplits=s.splits,this.state="title",this.mode="race",this.clock=0,this.lights=0,this.lightsMode="off",[this._t,this._hold,this._goAt,this._resumeTo]=[0,1,0,null],this.elapsed=null}startCountdown(t=this.mode,e=wp()){this.mode=t,this.state="countdown",this._t=0,this.clock=0,this.lights=0,this.lightsMode="red",this._hold=e,this.timer.reset(),this.bus.emit("countdown")}toTitle(){this.state="title",this.lightsMode="off",this.lights=0}finish(){this.state="finished",this.bus.emit("finish")}follow(t){this.elapsed=t}togglePause(){this.state==="paused"?(this.state=this._resumeTo,this.bus.emit("pause",!1)):(this.state==="racing"||this.state==="countdown")&&(this._resumeTo=this.state,this.state="paused",this.bus.emit("pause",!0))}update(t,e){if(this.elapsed&&(t=Math.max(0,this.elapsed()-this._t)),this.state==="countdown"){this._t+=t;const n=Math.min(fl,Math.floor(this._t/Md));n>this.lights&&(this.lights=n,this.bus.emit("light",n));const s=fl*Md+this._hold;n===fl&&this._t>=s&&(this.state="racing",this.lightsMode="go",this._goAt=this._t,this.elapsed&&(this.clock=this._t-s),this.bus.emit("go"))}else if(this.state==="racing"){this._t+=t,this.clock+=t,this.lightsMode==="go"&&this._t-this._goAt>w2&&(this.lightsMode="off");const n=this.timer.update(e,this.clock);n&&this.bus.emit("lap",n)}else this.state==="finished"&&(this._t+=t,this.clock+=t)}get view(){const t=this.timer;return{state:this.state,mode:this.mode,totalLaps:this.laps,lap:t.lap,lapTime:t.lapTime(this.clock),last:t.lastLap,best:t.best,delta:t.delta(this.clock),lights:this.lights,lightsMode:this.lightsMode}}}class Ap{constructor(t,e,n,s){this.n=t,this.laps=n,this.entries=s.map(r=>({...r,timer:new Tp(t,e),passTimes:new Float32Array(t*n+1)})),this.reset()}reset(){for(const t of this.entries)t.timer.reset(),t.passTimes.fill(NaN),Object.assign(t,{finishTime:null,bestLap:null,lapsDone:0,progress:0,_recorded:-1});this.order=[...this.entries]}get player(){return this.entries.find(t=>t.isPlayer)}update(t,e){const n=[];return this.entries.forEach((s,r)=>{if(s.finishTime!==null)return;const o=s.timer.update(t[r],e);s.progress=s.timer.progress;const a=Math.min(Math.floor(s.progress),this.n*this.laps);for(let l=Math.max(0,s._recorded+1);l<=a;l++)s.passTimes[l]=e;s._recorded=Math.max(s._recorded,a),o&&(s.lapsDone=o.lap,s.bestLap=s.bestLap===null?o.time:Math.min(s.bestLap,o.time),o.lap>=this.laps&&(s.finishTime=s.timer.lapStart,n.push(s)))}),this.order=[...this.entries].sort((s,r)=>s.finishTime!==null||r.finishTime!==null?(s.finishTime??1/0)-(r.finishTime??1/0):r.progress-s.progress),n}position(t){return this.order.indexOf(t)+1}gap(t,e){const n=this.order[0];if(t===n)return 0;if(t.finishTime!==null)return t.finishTime-n.finishTime;const s=Math.floor((n.progress-t.progress)/this.n);if(s>=1)return{laps:s};const r=n.passTimes[Math.floor(t.progress)];return Number.isNaN(r)||r===void 0?null:Math.max(0,e-r)}}const so=(i,t)=>Math.round(i*t)/t;class D2{constructor(){this.reset()}reset(){this.lap=-1,this.frames=[],this._next=0}update(t,e,n){t!==this.lap&&([this.lap,this.frames,this._next]=[t,[],0]),!(t<1||e<this._next)&&(this.frames.push(so(e,1e3),so(n.x,100),so(n.z,100),so(n.yaw,1e3)),this._next=Math.max(this._next+bd,e-bd))}take(){return this.frames.length>=8?this.frames.slice():null}}function N2(i){const t=Math.abs(i||0)-Zt.lockSteer;return t>0?Math.max(Zt.lockThrottleMin,1-t*Zt.lockThrottle):1}function U2(i){return pt(1-(Math.abs(i||0)-Zt.slipLiftStart)/Zt.slipLiftRange,Zt.slipLiftMin,1)}function Bc(i,t,e=0,n=0){const s=t-i;return{throttle:Math.min(pt(Zt.throttleBase+s*Zt.throttleGain,0,1),N2(e),U2(n)),brake:pt((-s-Zt.brakeMargin)*Zt.brakeGain,0,1)}}function Rp(i,t,e){const n=t.x-i.x,s=t.z-i.z,r=fi(KM(n,s)-i.yaw),o=2*e*Math.sin(r)/Math.max(Math.hypot(n,s),1),a=(i.yawRate??0)-o;return pt(r*Zt.steerGain-a*Zt.yawDamp,-1,1)}const Ed=new WeakMap;function O2(i,t,{latAccel:e,decel:n,chord:s,chordMin:r,chordMax:o,maxSpeed:a}){const l=`${e}/${n}/${s}/${r}/${o}/${a}`,c=Ed.get(t);if((c==null?void 0:c.key)===l)return c.plan;const h=i.count,u=new Float64Array(h),d=new Float64Array(h);for(let m=0;m<h;m++)[u[m],d[m]]=[i.x[m]-i.tz[m]*t[m],i.z[m]+i.tx[m]*t[m]];const[f,g]=[r,o],v=new Float32Array(h).fill(a);for(let m=0;m<2;m++)for(let p=0;p<h;p++){const y=f===g?f:Math.min(g,Math.max(f,v[p]*s)),_=Math.max(2,Math.round(y/i.spacing)),b=F2(u,d,i.wrap(p-_),p,i.wrap(p+_));v[p]=Math.min(a,Math.sqrt(e/Math.max(b,1e-4)))}for(let m=0;m<2;m++)for(let p=h-1;p>=0;p--){const y=i.wrap(p+1);v[p]=Math.min(v[p],Math.sqrt(v[y]**2+2*n*Math.hypot(u[y]-u[p],d[y]-d[p])))}return Ed.set(t,{key:l,plan:v}),v}function F2(i,t,e,n,s){const r=Math.hypot(i[n]-i[e],t[n]-t[e]),o=Math.hypot(i[s]-i[n],t[s]-t[n]),a=Math.hypot(i[e]-i[s],t[e]-t[s]),l=(i[n]-i[e])*(t[s]-t[e])-(t[n]-t[e])*(i[s]-i[e]);return 2*Math.abs(l)/Math.max(r*o*a,1e-9)}function Hc(i,t,e,n,{skill:s=1,ahead:r,maxSpeed:o}){const a=t.wrap(e+Math.round(n*r/t.spacing));return Math.min(i[a]*s,o)}const Vc=(i,t)=>O2(i,t,{latAccel:Zt.latAccel,decel:Zt.planDecel,chord:Zt.planChord,chordMin:Zt.planChordMin,chordMax:Zt.planChordMax,maxSpeed:99});class k2{constructor(t){this.setPath(t)}setPath(t){this.path=t,this.index=-1,this.plan=t&&Vc(t,new Float32Array(t.count))}controls(t,e,n=Zt.maxSpeed){const s=this.path;this.index=s.nearest(t.x,t.z,this.index);const r=s.wrap(this.index+Math.round((Zt.lookAhead+e*Zt.lookSpeed)/s.spacing)),o=Hc(this.plan,s,this.index,e,{ahead:Zt.planAhead,maxSpeed:n}),a=Rp(t,{x:s.x[r],z:s.z[r]},e);return{...Bc(e,o,a,t.slipAngle),steer:a,handbrake:!1}}}const Td={best:null,splits:null,ghost:null},z2=i=>i==="tbc"?Oo:`${Oo}.${i}`;function B2(i,t=Oo){try{const e=JSON.parse(localStorage.getItem(t)||"null");if(!e||e.signature!==i||typeof e.best!="number")return{...Td};const n=Array.isArray(e.splits)?Float32Array.from(e.splits,r=>r??NaN):null,s=Array.isArray(e.ghost)&&e.ghost.length%4===0&&e.ghost.every(Number.isFinite)?e.ghost:null;return{best:e.best,splits:n,ghost:s}}catch{return{...Td}}}function H2(i,t,e,n=null,s=Oo){try{const r=e?Array.from(e,o=>Number.isNaN(o)?null:Math.round(o*1e3)/1e3):null;localStorage.setItem(s,JSON.stringify({signature:i,best:t,splits:r,ghost:n}))}catch{}}function Yt(i,t="",e=""){const n=document.createElement(i);return t&&(n.className=t),e&&(n.innerHTML=e),n}function xr(i){const t={};for(const e of i.querySelectorAll("[data-ref]"))t[e.dataset.ref]=e;return t}function oe(i,t){i.textContent!==t&&(i.textContent=t)}function Gi(i,t){i.classList.toggle("is-visible",t),i.inert=!t}function hi(i){if(i==null||!Number.isFinite(i))return"-:--.---";const t=Math.max(0,Math.round(i*1e3)),e=Math.floor(t/6e4),n=Math.floor(t%6e4/1e3);return`${e}:${String(n).padStart(2,"0")}.${String(t%1e3).padStart(3,"0")}`}function Yl(i){return i==null||!Number.isFinite(i)?"":`${i<0?"−":"+"}${Math.abs(i).toFixed(3)}`}function Cp(i){return i==null?"—":typeof i=="object"?`+${i.laps} LAP${i.laps>1?"S":""}`:`+${i.toFixed(3)}`}const Pp=i=>`${i}${["TH","ST","ND","RD"][i%10>3||Math.floor(i/10)===1?0:i%10]}`;class V2{constructor(t){this.el=Yt("div","hud-panel hud-lap",`<div class="hud-label">LAP<b data-ref="lap">–</b></div>
       <div class="hud-time" data-ref="time">0:00.000</div>
       <div class="hud-delta" data-ref="delta"></div>
       <div class="hud-rows">
         <span>LAST</span><b data-ref="last">-:--.---</b>
         <span>BEST</span><b data-ref="best" class="is-best">-:--.---</b>
       </div>`),t.appendChild(this.el),this.r=xr(this.el)}update(t){const e=this.r,n=t.mode==="race"?`/${t.totalLaps}`:"";oe(e.lap,`${t.lap>=1?Math.min(t.lap,t.totalLaps??1/0):"–"}${n}`),oe(e.time,hi(t.lapTime)),oe(e.last,hi(t.last)),oe(e.best,hi(t.best)),oe(e.delta,Yl(t.delta)),e.delta.className=`hud-delta ${t.delta==null?"":t.delta<=0?"is-faster":"is-slower"}`}}const G2=70,wd="M 27.25 142 A 84 84 0 1 1 172.75 142";class W2{constructor(t){this.el=Yt("div","hud-speedo",`<svg viewBox="0 0 200 180">
         <defs><linearGradient id="speedGrad" x1="0" x2="1">
           <stop offset="0" stop-color="#ffc21a"/><stop offset="1" stop-color="#ff3b4e"/>
         </linearGradient></defs>
         <path class="arc-bg" d="${wd}" fill="none" stroke-width="10" stroke-linecap="round"/>
         <path class="arc-fg" data-ref="arc" d="${wd}" fill="none" stroke="url(#speedGrad)"
               stroke-width="10" stroke-linecap="round" pathLength="100" stroke-dasharray="100"
               stroke-dashoffset="100"/>
       </svg>
       <div class="speed-num" data-ref="num">0</div>
       <div class="speed-unit">KM/H</div>
       <div class="speed-draft">SLIPSTREAM</div>`),t.appendChild(this.el),this.r=xr(this.el),this._shown=-1}update(t,e=0){const n=e>.15;n!==this._drafting&&(this._drafting=n,this.el.classList.toggle("is-drafting",n));const s=Math.round(t*3.6);s!==this._shown&&(this._shown=s,oe(this.r.num,String(s)),this.r.arc.setAttribute("stroke-dashoffset",String(100-Math.min(100,s/G2*100))))}}const X2=Ac-jo*.6,Ad=Ac+jo*.6,q2=i=>i<X2?"is-cold":i>Ad+jo?"is-cooked":i>Ad?"is-hot":"is-good";class Y2{constructor(t){this.el=Yt("div","hud-tyres",'<span>TYRES</span><i data-axle="f"><b></b><em>F</em></i><i data-axle="r"><b></b><em>R</em></i>'),t.appendChild(this.el),this.axles=[...this.el.querySelectorAll("i")],this._shown=["",""]}update(t){t&&this.axles.forEach((e,n)=>{const s=Math.round(t[n]),r=`${s}`;r!==this._shown[n]&&(this._shown[n]=r,e.className=q2(t[n]),oe(e.firstChild,`${s}°`))})}}function Gc(i,t,e,n,s,r,{band:o=.16,line:a=.7,minBand:l=4}={}){let[c,h,u,d]=[1/0,-1/0,1/0,-1/0];for(let P=0;P<t.count;P++)c=Math.min(c,t.x[P]),h=Math.max(h,t.x[P]),u=Math.min(u,t.z[P]),d=Math.max(d,t.z[P]);const f=Math.min((n-2*r)/(h-c),(s-2*r)/(d-u)),g=(n-(h-c)*f)/2,v=(s-(d-u)*f)/2,m=(P,T)=>[g+(P-c)*f,v+(T-u)*f];i.lineJoin=i.lineCap="round",i.beginPath();const p=Math.max(1,Math.round(t.count/600));for(let P=0;P<t.count;P+=p)i.lineTo(...m(t.x[P],t.z[P]));i.closePath(),i.strokeStyle=`rgba(255,255,255,${o})`,i.lineWidth=Math.max(l,t.halfWidth*2*f),i.stroke(),i.strokeStyle=`rgba(255,255,255,${a})`,i.lineWidth=1.4,i.stroke();const[y,_]=m(t.x[e],t.z[e]),b=Math.atan2(t.tz[e],t.tx[e]);return i.save(),i.translate(y,_),i.rotate(b),i.fillStyle="#ffffff",i.fillRect(-1.5,-6,3,12),i.fillStyle="#ffc21a",i.beginPath(),i.moveTo(14,0),i.lineTo(7,-4),i.lineTo(7,4),i.closePath(),i.fill(),i.restore(),m}const ro=240,oo=172,$2=16;class K2{constructor(t,e,n){this.dpr=Math.min(2,window.devicePixelRatio||1),this.canvas=Yt("canvas","hud-panel hud-minimap"),this.canvas.width=ro*this.dpr,this.canvas.height=oo*this.dpr,t.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.ctx.scale(this.dpr,this.dpr),this.bg=document.createElement("canvas"),this.setPath(e,n)}setPath(t,e){this.bg.width=this.canvas.width,this.bg.height=this.canvas.height;const n=this.bg.getContext("2d");n.scale(this.dpr,this.dpr),this.map=Gc(n,t,e,ro,oo,$2)}update(t,e=[]){const n=this.ctx;n.clearRect(0,0,ro,oo),n.drawImage(this.bg,0,0,ro,oo);for(const l of e){const[c,h]=this.map(l.x,l.z);n.fillStyle=l.color,n.beginPath(),n.arc(c,h,3.6,0,Math.PI*2),n.fill()}const[s,r]=this.map(t.x,t.z),o=pi(t.yaw),a=Math.atan2(o.z,o.x);n.save(),n.translate(s,r),n.rotate(a),n.shadowColor="rgba(255,194,26,0.9)",n.shadowBlur=10,n.fillStyle="#ffc21a",n.beginPath(),n.moveTo(7,0),n.lineTo(-5,4.5),n.lineTo(-3,0),n.lineTo(-5,-4.5),n.closePath(),n.fill(),n.restore()}}class j2{constructor(t){this.el=Yt("div","hud-lights","<i></i>".repeat(5)),t.appendChild(this.el),this.dots=[...this.el.children],this._key=""}update(t){const e=`${t.state}|${t.lights}|${t.lightsMode}`;if(e===this._key)return;this._key=e;const n=t.lightsMode==="red"&&t.state!=="title";this.el.classList.toggle("is-visible",n||t.lightsMode==="go"),this.dots.forEach((s,r)=>{s.className=t.lightsMode==="go"?"is-go":n&&r<t.lights?"is-red":""})}}class Lp{constructor(t){this.el=Yt("div","hud-toasts"),t.appendChild(this.el),this._timers=[]}show(t,{sub:e="",kind:n="",time:s=A2}={}){this._timers.forEach(clearTimeout);const r=Yt("div",`toast${n?` is-${n}`:""}`);r.textContent=t,e&&(r.appendChild(Yt("small")).textContent=e),this.el.replaceChildren(r),this._timers=[setTimeout(()=>r.classList.add("is-out"),s*1e3),setTimeout(()=>r.remove(),s*1e3+500)]}clear(){this._timers.forEach(clearTimeout),this._timers=[],this.el.replaceChildren()}}class Z2{constructor(t){this.el=Yt("div","hud-panel hud-standings",'<div class="st-pos"><b>–</b><span>/ –</span></div><ol></ol>'),t.appendChild(this.el),[this.pos,this.of]=this.el.querySelector(".st-pos").children,this.list=this.el.querySelector("ol"),this._key="",this._rows=[]}setVisible(t){this.el.hidden=!t}update(t,e){const n=t.order,s=n.map(r=>r.code).join();s!==this._key&&(this._key=s,this._rows=n.map((r,o)=>{const a=Yt("li",r.isPlayer?"is-player":"");return a.innerHTML=`<i>${o+1}</i><em></em><span></span><b></b>`,a.children[1].style.background=`#${r.color.toString(16).padStart(6,"0")}`,a.children[2].textContent=r.code,a}),this.list.replaceChildren(...this._rows)),n.forEach((r,o)=>{const a=o===0?r.finishTime!==null?"FINISH":`LAP ${Math.min(t.laps,Math.max(1,r.timer.lap))}`:Cp(t.gap(r,e));oe(this._rows[o].children[3],r.finishTime!==null&&o>0?`${a} ⚑`:a)}),oe(this.pos,`P${t.position(t.player)}`),oe(this.of,`/ ${n.length}`)}}function J2(i,t,e){const n=new Set;for(const[s,r]of i){let o=null,a=1/0;for(const l of t){if(!(l.right>l.left)||s<l.left-e||s>l.right+e||r<l.top-e||r>l.bottom+e)continue;const c=(s-(l.left+l.right)/2)**2+(r-(l.top+l.bottom)/2)**2;c<a&&([o,a]=[l.name,c])}o&&n.add(o)}return n}const Rd=[["left","touch-left","◀"],["right","touch-right","▶"],["brake","touch-brake","BRAKE"],["handbrake","touch-drift","DRIFT"],["throttle","touch-gas","GAS"]],Q2=[["pause","touch-pause","Ⅱ"],["camera","touch-camera","CAM"]],Ip=()=>{var i;return typeof window<"u"&&(((i=window.matchMedia)==null?void 0:i.call(window,"(pointer: coarse)").matches)||"ontouchstart"in window)};class tE{constructor(t,e){this.held=Object.fromEntries(Rd.map(([s])=>[s,!1])),this.points=[],this.el=Yt("div","touch"),t.appendChild(this.el),this.buttons=Rd.map(([s,r,o])=>({name:s,node:this._button(r,o)}));for(const[s,r,o]of Q2)this._button(r,o).addEventListener("pointerdown",a=>(a.preventDefault(),e.trigger(s)));if("ontouchstart"in window){const s=r=>this._set(Array.from(r.touches,o=>[o.clientX,o.clientY]));for(const r of["touchstart","touchmove","touchend","touchcancel"])window.addEventListener(r,s,{passive:!0})}else this._pointers();const n=()=>this.releaseAll();window.addEventListener("blur",n),window.addEventListener("pagehide",n),document.addEventListener("visibilitychange",()=>document.hidden&&n()),document.body.classList.add("is-touch"),e.touch=this}releaseAll(){this._set([])}_button(t,e){const n=Yt("button",`touch-btn ${t}`,e);return n.addEventListener("contextmenu",s=>s.preventDefault()),this.el.appendChild(n),n}_pointers(){const t=new Map,e=()=>this._set([...t.values()]);this.el.addEventListener("pointerdown",n=>(t.set(n.pointerId,[n.clientX,n.clientY]),e())),window.addEventListener("pointermove",n=>t.has(n.pointerId)&&(t.set(n.pointerId,[n.clientX,n.clientY]),e()));for(const n of["pointerup","pointercancel"])window.addEventListener(n,s=>t.delete(s.pointerId)&&e())}_set(t){this.points=t;const e=this.buttons.map(({name:s,node:r})=>{const o=r.getBoundingClientRect();return{name:s,left:o.left,top:o.top,right:o.right,bottom:o.bottom}}),n=J2(t,e,dy.slop);for(const{name:s,node:r}of this.buttons)this.held[s]=n.has(s),r.classList.toggle("is-down",this.held[s])}}const eE=i=>`#${i.toString(16).padStart(6,"0")}`;class nE{constructor(t,e){this.root=Yt("div","hud is-hidden"),document.body.appendChild(this.root),this.lap=new V2(this.root),this.standings=new Z2(this.root),this.speedo=new W2(this.root),this.tyres=new Y2(this.root),this.minimap=null,this.lights=new j2(this.root),this.toasts=new Lp(this.root),this.root.appendChild(Yt("div","hud-hint","<kbd>SPACE</kbd> drift &nbsp; <kbd>C</kbd> camera &nbsp; <kbd>R</kbd> reset &nbsp; <kbd>ESC</kbd> pause")),Ip()&&(this.touch=new tE(this.root,e)),this.mode="race",this.laps=5,this.visible=!1,this._dots=[],this._minimapShown=!0,t.on("go",()=>this.toasts.show("GO!",{kind:"go",time:1.1})),t.on("lap",n=>{const s=this.mode!=="timeattack";if(s&&n.lap>=this.laps)return;const r=n.isBest?n.delta==null?"FIRST LAP ON THE BOARD":`NEW BEST  ${Yl(n.delta)}`:`LAP ${n.lap}  ${Yl(n.delta)}`,o=s&&n.lap===this.laps-1;this.toasts.show(o?"FINAL LAP":hi(n.time),{sub:o?`${hi(n.time)}  ·  ${r}`:r,kind:o?"go":n.isBest?"best":""})}),t.on("finish",()=>this.toasts.show("CHEQUERED FLAG",{kind:"go",time:1.6})),t.on("overtake",n=>this.toasts.show(`P${n}`,{sub:`UP TO ${Pp(n)}`,kind:"info",time:1})),t.on("reset",()=>this.toasts.show("KART RESET",{kind:"info",time:1.2})),t.on("camera",n=>this.toasts.show(`CAMERA · ${n.toUpperCase()}`,{kind:"info",time:1.2})),t.on("mute",n=>this.toasts.show(n?"SOUND OFF":"SOUND ON",{kind:"info",time:1.2}))}setVisible(t){var e;this.visible=t,t||(e=this.touch)==null||e.releaseAll(),this.root.classList.toggle("is-hidden",!t),t&&this.resize()}clearToasts(){this.toasts.clear()}resize(){this._minimapShown=!!this.minimap&&this.minimap.canvas.offsetParent!==null}setTrack(t,e,n){this.laps=n,this.minimap?this.minimap.setPath(t,e):this.minimap=new K2(this.root,t,e)}setMode(t){this.mode=t,this.standings.setVisible(t!=="timeattack")}update(t,e,n){if(!this.visible)return;const s=this.mode!=="timeattack";this.lap.update(t),this.speedo.update(e.telemetry.speed,e.draft),this.tyres.update(e.telemetry.tyreTemp),s&&this.standings.update(n.field,n.session.clock);const r=this.mode==="online"?n.online.others:s?n.rivals:[];this._minimapShown&&this.minimap.update(e.state,this._rivalDots(r)),this.lights.update(t)}_rivalDots(t){const e=this._dots;return e.length=t.length,t.forEach((n,s)=>{const r=e[s]??(e[s]={x:0,z:0,body:-1,color:""});r.body!==n.profile.body&&([r.body,r.color]=[n.profile.body,eE(n.profile.body)]),[r.x,r.z]=[n.kart.state.x,n.kart.state.z]}),e}}const iE=["","VICTORY","SECOND PLACE","PODIUM","SOLID DRIVE","KEEP PUSHING","BACK OF THE FIELD"];class sE{constructor(t){this.el=Yt("div","screen screen-results",`<div class="res-card">
         <div class="title-kicker">CHEQUERED FLAG</div>
         <h2 data-ref="place">–</h2>
         <div class="res-verdict" data-ref="verdict"></div>
         <table><thead><tr><th>POS</th><th>DRIVER</th><th>TIME</th><th>BEST LAP</th></tr></thead>
           <tbody data-ref="rows"></tbody></table>
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
       </div>`),document.body.appendChild(this.el),this.r=xr(this.el),this.el.inert=!0;for(const e of this.el.querySelectorAll("[data-act]"))e.addEventListener("click",()=>t(e.dataset.act));this._key=""}setOnline(t){this.role=t,this.r.solo.hidden=!!t,this.r.online.hidden=!t,this.el.firstElementChild.classList.toggle("is-host",t==="host")}show(t){Gi(this.el,t),this._key=""}update(t){const e=t.player,n=t.position(e),s=t.order.map(o=>`${o.code}${o.finishTime}${o.dnf}`).join()+t.final;if(s===this._key)return;this._key=s;for(const o of this.r.online.querySelectorAll(".host-only"))o.disabled=!t.final;oe(this.r.place,Pp(n)),this.r.place.className=n<=3?`is-p${n}`:"",oe(this.r.verdict,iE[n]??"");const r=t.order[0];this.r.rows.replaceChildren(...t.order.map((o,a)=>{const l=Yt("tr",o.isPlayer?"is-player":""),c=Math.max(1,t.laps-(o.lapsDone??0)),h=t.final?`+${c} LAP${c>1?"S":""}`:"RUNNING",u=o.dnf?"DNF":o.finishTime===null?h:a===0?hi(o.finishTime):Cp(o.finishTime-r.finishTime);l.innerHTML=`<td>${a+1}</td><td><em></em></td><td>${u}</td><td>${hi(o.bestLap)}</td>`;const d=l.children[1];return d.firstChild.style.background=`#${o.color.toString(16).padStart(6,"0")}`,d.append(o.name),l}))}}const Fo="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",Mr=5,Qo=12,Dp="tbc-kart.name",Ne=6,rE=1.8,oE=Object.entries(mi).map(([i,t])=>`<button data-level="${i}">${t.label}</button>`).join(""),aE=`
  <section class="lobby-panel lobby-choose" data-panel="choose">
    <h2>RACE FRIENDS</h2>
    <label class="lobby-name"><span>YOUR NAME</span>
      <input data-ref="name" maxlength="${Qo*2}" autocomplete="nickname" spellcheck="false" enterkeyhint="go"></label>
    <div class="lobby-options">
      <div class="lobby-option"><b>HOST A RACE</b><small>GET A CODE TO SHARE</small>
        <button class="btn btn-primary" data-do="create">CREATE ROOM <kbd>ENTER</kbd></button></div>
      <div class="lobby-option"><b>JOIN A FRIEND</b><small>TYPE THE ${Mr}-CHARACTER CODE</small>
        <div class="lobby-join">
          <input data-ref="codeInput" placeholder="CODE" autocomplete="off" autocapitalize="characters"
            spellcheck="false" enterkeyhint="join" aria-label="Room code">
          <button class="btn" data-do="join" data-ref="joinBtn">JOIN</button></div></div>
    </div>
    <div class="res-actions"><button class="btn" data-do="back">BACK <kbd>ESC</kbd></button></div>
  </section>`,lE=`
  <section class="lobby-panel lobby-status" data-panel="status">
    <div class="lobby-spinner" data-ref="spinner"></div>
    <h2 data-ref="statusTitle"></h2>
    <p data-ref="statusText"></p>
    <div class="res-actions">
      <button class="btn btn-primary" data-do="retry" data-ref="retry">TRY AGAIN <kbd>ENTER</kbd></button>
      <button class="btn" data-do="leave" data-ref="cancel">BACK <kbd>ESC</kbd></button></div>
  </section>`,cE=`
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
      <div class="title-level lobby-level"><span>RIVALS</span>${oE}</div>
      <button class="btn btn-primary lobby-start host-only" data-do="start" data-ref="start">START RACE <kbd>ENTER</kbd></button>
      <div class="lobby-wait client-only">WAITING FOR THE HOST TO START</div>
      <button class="btn lobby-leave" data-do="leave">LEAVE ROOM <kbd>ESC</kbd></button>
    </div>
  </section>`,hE=`<div class="lobby-card"><div class="title-kicker">ONLINE RACE</div>${aE}${lE}${cE}</div>`;function Wc(i){return[...String(i??"").normalize("NFC").replace(/\s+/g," ").replace(/[\u0000-\u001f\u007f-\u009f<>]/g,"").replace(/^ /,"")].slice(0,Qo).join("")}function Np(i,t){return Wc(i).trim()||t}function Up(i=Math.random){return`Driver ${100+Math.floor(i()*900)}`}function Op(i){const t=String(i??""),e=t.match(/[?&]room=([A-Za-z0-9]+)/);return[...(e?e[1]:t).toUpperCase()].filter(s=>Fo.includes(s)).slice(0,Mr).join("")}const xo=i=>Op(i)===i&&i.length===Mr;function uE(i,t){return`${i.origin}${i.pathname}?room=${t}`}function dE(i,t=Math.random){let e=null;try{e=i==null?void 0:i.getItem(Dp)}catch{}return Np(e,Up(t))}function fE(i,t){try{i==null||i.setItem(Dp,t)}catch{}}const Cd=()=>typeof localStorage>"u"?null:localStorage;class pE{constructor(t){this.r=t,this.fallback=Up(),this.last=null,t.name.value=dE(Cd()),t.name.addEventListener("input",()=>t.name.value=Wc(t.name.value)),t.codeInput.addEventListener("input",()=>this.setCode(t.codeInput.value))}setCode(t){const e=Op(t);this.r.codeInput.value!==e&&(this.r.codeInput.value=e),this.r.joinBtn.disabled=!xo(e)}get codeComplete(){return xo(this.r.codeInput.value)}submit(t,e){let n=this.r.codeInput.value;if(t==="retry")n=this.last?this.last.code:e,t=n?"join":"create";else if(t==="join"&&!xo(n))return this.r.codeInput.focus(),null;const s=Np(this.r.name.value,this.fallback);return this.r.name.value=s,fE(Cd(),s),this.last=t==="join"?{code:n}:{},{action:t,code:n,name:s}}}const mE=[[12,31.6],[22,30.6],[31,27.3],[38.5,21.3],[43,12.8],[44,2.8],[41,-6.2],[36.8,-13.2],[34.6,-19.7],[34.2,-25.4],[32.38,-29.78],[28,-31.6],[23.62,-29.78],[21.8,-25.4],[21.8,-23.2],[19.98,-18.82],[15.6,-17],[8,-17.1],[-2,-17],[-12,-16.7],[-23,-15.5],[-32,-12.2],[-39,-5.7],[-43.5,3.8],[-41.8,12.8],[-34,18.8],[-26,21.8],[-18.5,27.1],[-10.5,27.2],[-3.5,25],[3.5,28.6]],gE={id:"tbc",name:"TBC Indoor",location:"Vancouver, Canada",inspiredBy:"TBC Indoor Racing — the home track",blurb:'The original hall layout: sweeper, the "ear" hairpin, a long back straight and a tight chicane.',laps:7,waypoints:mE,startIndex:0,samples:1e3,exempt:["radius","grid"]},vE=[[-66.76,30],[-68.99,18.41],[-69.58,9.64],[-69.39,3.15],[-68.91,-1.62],[-68.25,-5.18],[-66.58,-8.29],[-63.98,-10.6],[-60.7,-11.88],[-56.84,-12.42],[-51.64,-13.11],[-44.61,-14.05],[-35.09,-15.32],[-22.26,-17.03],[-10,-18.54],[-.96,-19.53],[5.75,-20.26],[10.72,-20.8],[14.58,-21.51],[17.95,-23.42],[20.42,-26.34],[21.74,-29.93],[21.75,-33.81],[20.51,-37.27],[18.96,-39.72],[18.17,-42.44],[18.36,-45.21],[19.49,-47.75],[21.44,-49.95],[24.07,-52.67],[26.48,-55.11],[29.18,-56.69],[32.31,-57.25],[35.39,-56.7],[38.13,-55.11],[40.13,-52.7],[41.59,-49.59],[42.93,-46.65],[43.92,-44.48],[44.84,-42.83],[46.25,-41.57],[47.96,-40.9],[49.8,-40.85],[51.59,-41.46],[53.01,-42.62],[53.96,-44.19],[54.42,-46.08],[54.92,-48.61],[55.54,-51.69],[56.03,-54.13],[56.77,-56.08],[58.13,-57.66],[60.01,-58.69],[62.07,-59],[64.61,-59],[67.49,-58.94],[70.19,-58.1],[72.4,-56.4],[73.89,-54.06],[74.49,-51.3],[74.5,-48.09],[74.31,-43.8],[73.31,-38.05],[70.67,-30.67],[64.91,-21.76],[54.43,-13.06],[41.28,-8.32],[28.49,-7.33],[18.91,-6.77],[11.82,-6.36],[6.58,-6.06],[2.69,-5.83],[-.2,-5.66],[-2.57,-5.1],[-4.6,-3.77],[-6.5,-1.75],[-8.35,.2],[-10.41,1.49],[-12.79,2],[-15.64,2],[-19.43,2],[-24.52,2],[-31.06,2],[-36.3,2],[-40.34,2.15],[-43.94,3.44],[-46.92,5.92],[-48.83,9.23],[-49.5,13.05],[-49.5,17.52],[-49.26,21.84],[-47.71,25.76],[-45.37,29.47],[-44.11,33.45],[-44,37.13],[-44.01,39.86],[-44.58,42.26],[-45.94,44.32],[-47.38,46.33],[-48.08,48.7],[-47.93,51.13],[-47.1,53.66],[-45.63,56.01],[-43.4,57.75],[-40.75,58.59],[-37.71,58.72],[-34.86,58.8],[-32.6,59.1],[-30.57,60.14],[-29.02,61.82],[-28.15,63.93],[-28.05,66.18],[-28.72,68.36],[-30.11,70.18],[-31.99,71.38],[-34.21,71.88],[-36.76,71.85],[-40.21,71.79],[-44.8,71.71],[-48.9,71.64],[-52.07,71.34],[-54.95,70.03],[-57.18,67.84],[-58.53,64.97],[-59.36,61.47],[-60.47,56.75],[-61.98,50.33],[-64,41.72]],_E={id:"monaco",name:"Monte Carlo",location:"Monaco",inspiredBy:"Circuit de Monaco",blurb:"Narrow streets, a walking-pace hairpin and a flat-out tunnel: touch the barriers and your race is over.",laps:3,waypoints:vE,startIndex:0,width:6},xE=[[18.14,38.1],[15.64,38.1],[-3.03,38.1],[-21.7,38.1],[-24.2,38.1],[-26.81,37.44],[-28.8,35.62],[-29.68,33.08],[-29.72,32.58],[-30.61,30.04],[-32.59,28.22],[-35.2,27.56],[-37.7,27.56],[-41.7,27.56],[-44.2,27.56],[-48.37,27.2],[-52.41,26.11],[-56.2,24.35],[-59.63,21.95],[-62.59,18.99],[-64.99,15.56],[-66.75,11.77],[-67.84,7.73],[-68.27,5.27],[-69.49,-1.63],[-69.92,-4.09],[-71.17,-6.92],[-73.58,-8.85],[-75.39,-9.7],[-77.32,-11.07],[-78.62,-13.05],[-79.6,-15.35],[-83.12,-23.63],[-84.09,-25.94],[-84.8,-29.08],[-84.36,-32.26],[-82.82,-35.09],[-80.39,-37.2],[-77.37,-38.32],[-74.91,-38.75],[-66.05,-40.31],[-63.59,-40.75],[-60.34,-40.69],[-57.36,-39.42],[-55.06,-37.13],[-53.66,-35.06],[-48.91,-28.01],[-44.16,-20.96],[-42.76,-18.89],[-41.2,-16.79],[-39.47,-14.83],[-37.73,-13.03],[-31.02,-6.07],[-24.3,.88],[-17.59,7.83],[-15.85,9.63],[-13.81,11.16],[-11.39,11.97],[-8.84,11.98],[-6.87,11.66],[-4.09,11.71],[-1.5,12.71],[.6,14.53],[1.86,16.08],[4.57,18.24],[7.94,19.05],[10.44,19.09],[25.58,19.36],[40.72,19.62],[55.86,19.89],[71,20.15],[73.5,20.19],[76.17,20.77],[78.41,22.33],[79.89,24.63],[80.38,27.31],[79.79,30.57],[78.2,33.47],[75.77,35.72],[72.75,37.08],[68.9,37.84],[64.98,38.1],[62.48,38.1],[47.7,38.1],[32.92,38.1]],ME={id:"monza",name:"Monza",location:"Italy",inspiredBy:"Autodromo Nazionale Monza",blurb:"Temple of speed: slipstream duels on two long straights, late braking into the Rettifilo and the Parabolica.",laps:5,waypoints:xE,startIndex:0,width:7},yE=[[-34.4,12.5],[-25.02,2.98],[-22.83,1.15],[-20.34,-.24],[-17.63,-1.13],[-14.8,-1.49],[-7.57,-1.71],[-4.64,-2.02],[-1.79,-2.75],[.92,-3.9],[3.44,-5.43],[8.03,-8.71],[10.32,-9.84],[12.85,-10.19],[15.37,-9.73],[17.61,-8.49],[19.35,-6.61],[20.4,-4.28],[21.23,-1.2],[22.51,1.15],[24.7,2.68],[27.35,3.06],[29.46,2.88],[32.14,1.94],[34.05,-.16],[34.74,-2.92],[34.72,-11.75],[34.47,-14.16],[33.73,-16.47],[32.55,-18.59],[30.97,-20.43],[29.05,-21.91],[19.08,-28.12],[9.1,-34.32],[-.88,-40.52],[-10.86,-46.73],[-13.58,-47.76],[-16.49,-47.67],[-19.15,-46.48],[-21.16,-44.36],[-22.21,-41.64],[-22.43,-40.36],[-23.28,-37.96],[-24.89,-35.99],[-27.07,-34.67],[-29.56,-34.15],[-32.09,-34.5],[-34.38,-35.68],[-36.12,-37.55],[-37.13,-39.9],[-37.3,-42.45],[-36.6,-44.91],[-31.62,-55.23],[-30.27,-57.4],[-28.5,-59.23],[-26.38,-60.65],[-24.01,-61.59],[-21.5,-62],[-10.16,-62.66],[1.19,-63.31],[12.53,-63.96],[23.87,-64.61],[26.72,-64.52],[29.5,-63.92],[32.14,-62.84],[34.55,-61.31],[36.64,-59.37],[38.36,-57.1],[39.65,-54.55],[40.46,-51.82],[42.45,-42.06],[44.43,-32.3],[45.19,-29.57],[46.33,-26.97],[47.98,-23.84],[49,-21.25],[49.45,-18.5],[49.31,-15.71],[48.85,-12.89],[48.72,-10.68],[49.05,-8.5],[49.82,-6.43],[50.67,-4.02],[50.92,-1.48],[50.54,1.04],[49.57,3.4],[48.05,5.45],[46.09,7.08],[45.25,7.62],[43.25,9.16],[41.53,11.01],[34.38,20.16],[27.23,29.32],[20.08,38.47],[12.93,47.63],[5.78,56.78],[3.8,58.78],[1.4,60.27],[-1.28,61.15],[-4.08,61.39],[-6.87,60.96],[-9.48,59.89],[-11.77,58.25],[-21.09,49.73],[-30.42,41.2],[-32.54,39.84],[-34.99,39.25],[-37.49,39.51],[-39.77,40.59],[-42.48,41.82],[-45.43,41.98],[-48.23,41.06],[-50.51,39.19],[-51.96,36.62],[-52.39,33.71],[-51.73,30.85],[-50.09,28.42],[-42.24,20.46]],SE={id:"silverstone",name:"Silverstone",location:"Great Britain",inspiredBy:"Silverstone Circuit",blurb:"Flat-out Copse, the Maggotts–Becketts snake and the long Hangar blast: fast, flowing, brave.",laps:3,waypoints:yE,startIndex:0},bE=[[-66.3,41.9],[-69.5,44.3],[-74.2,48],[-77.3,50.5],[-80.4,51.9],[-83.7,51.9],[-86.7,50.4],[-88.8,47.7],[-89.5,44.4],[-88.6,41.2],[-86.8,37.6],[-84.26,34.72],[-81.72,31.84],[-79.18,28.96],[-76.65,26.07],[-74.11,23.19],[-71.57,20.31],[-69.03,17.43],[-67.68,15.33],[-66.66,13.07],[-65.98,11.04],[-65.41,9.12],[-63.85,5.01],[-62.07,2.1],[-59.68,-.33],[-56.79,-2.16],[-52.71,-3.78],[-50.5,-4.56],[-48.05,-5.78],[-45.85,-7.4],[-44.14,-9.01],[-40.44,-12.78],[-36.9,-16.38],[-35.26,-17.9],[-33.49,-19.27],[-31.6,-20.46],[-29.6,-21.47],[-10.76,-29.93],[9.08,-38.84],[32.4,-49.3],[36,-51],[39.62,-52.71],[43.23,-54.42],[45.15,-55.27],[47.15,-55.86],[49.52,-55.94],[51.8,-55.32],[53.8,-54.05],[55.31,-52.75],[56.83,-51.45],[58.69,-50.36],[60.81,-49.99],[62.92,-50.4],[65.25,-51.31],[67.58,-52.22],[69.67,-52.75],[71.84,-52.77],[73.94,-52.28],[75.87,-51.3],[77.51,-49.88],[80.87,-46.18],[82.38,-44.49],[83.81,-42.73],[85.05,-40.83],[86,-38.77],[86.51,-36.57],[86.47,-34.31],[85.77,-32.16],[84.16,-30.18],[81.92,-28.97],[79.39,-28.72],[76.95,-29.45],[74.98,-31.07],[71.81,-34.94],[69.95,-36.6],[67.66,-37.61],[65.17,-37.86],[62.73,-37.33],[57.95,-35.48],[53.16,-33.62],[48.38,-31.77],[43.6,-29.91],[38.81,-28.06],[34.03,-26.2],[31.81,-24.95],[29.91,-23.26],[28.41,-21.21],[27.38,-18.89],[26.85,-16.4],[26.74,-13.22],[26.81,-11.22],[27.13,-7.87],[27.68,-5.7],[28.59,-3.65],[29.84,-1.79],[31.4,-.18],[33.21,1.15],[35.21,2.14],[38.42,3.17],[51.83,6.51],[56.2,7.6],[59.11,8.33],[61.72,9.28],[64.06,10.77],[65.8,12.9],[66.51,15.57],[66.33,18.34],[65.57,21.01],[64.84,23.67],[64.89,25.8],[65.69,27.79],[67.14,29.36],[69.51,30.77],[73.95,32.74],[78.39,34.72],[81.07,36.33],[82.67,38.14],[83.5,40.42],[83.44,42.84],[82.42,45.79],[81.32,48.03],[80.23,50.28],[78.48,53.08],[76.6,54.83],[74.27,55.89],[71.72,56.16],[68.46,55.64],[64.29,54.52],[60.66,53.24],[57.26,51.42],[54.18,49.1],[48.3,43.9],[38.6,32.4],[30.5,21.8],[21.3,15.8],[13,13.2],[8.53,12.29],[3.96,12.33],[-.49,13.31],[-4.65,15.19],[-8.78,17.59],[-12.91,20],[-17.03,22.4],[-21.16,24.81],[-25.29,27.21],[-29.41,29.62],[-31.13,30.57],[-32.95,31.29],[-34.89,31.55],[-36.84,31.3],[-38.66,30.6],[-40.39,29.66],[-42.13,28.67],[-44.73,27.47],[-46.57,27.3],[-48.36,27.76],[-50.75,29.36],[-54.9,32.7],[-59.05,36.05],[-63.2,39.4]],EE={id:"spa",name:"Spa",location:"Belgium",inspiredBy:"Circuit de Spa-Francorchamps",blurb:"The epic: flat out up Eau Rouge, slipstream down the Kemmel and brave Blanchimont into the Bus Stop.",laps:3,waypoints:bE,startIndex:0,width:6.5},TE=[[-36.08,28.7],[-34.25,33.93],[-29.71,46.92],[-25.17,59.92],[-24.19,61.74],[-22.68,63.16],[-20.8,64.03],[-18.75,64.27],[-16.72,63.85],[-14.93,62.82],[-12.06,60.48],[-10.4,59.48],[-8.53,58.97],[-6.58,58.99],[-4.72,59.55],[.22,61.81],[6.81,63.55],[13.6,62.98],[19.81,60.16],[24.71,55.42],[27.73,49.31],[31.96,35.02],[36.18,20.73],[40.41,6.45],[44.64,-7.84],[48.87,-22.12],[49.15,-24.28],[48.76,-26.42],[47.74,-28.34],[46.17,-29.85],[44.22,-30.8],[42.06,-31.11],[27.81,-30.92],[23.86,-30.29],[20.25,-28.57],[17.27,-25.9],[8.03,-14.88],[-1.2,-3.85],[-10.43,7.18],[-12.08,8.67],[-14.08,9.65],[-16.27,10.04],[-21.41,10.23],[-24.35,9.9],[-27.07,8.72],[-29.33,6.8],[-30.92,4.3],[-31.71,1.45],[-32.53,-5.27],[-32.47,-7.12],[-31.84,-8.86],[-30.72,-10.33],[-29.2,-11.39],[-27.43,-11.93],[-25.58,-11.91],[-23.83,-11.33],[-21.17,-9.96],[-19.44,-9.39],[-17.62,-9.35],[-15.87,-9.87],[-14.36,-10.88],[-13.22,-12.31],[-12.57,-14],[-12.45,-15.82],[-12.75,-18.3],[-13.96,-20.84],[-20.67,-27.46],[-26.94,-33.52],[-28.46,-35.51],[-29.35,-37.91],[-29.46,-40.01],[-28.92,-42],[-27.77,-43.72],[-26.15,-44.99],[-24.2,-45.69],[-22.14,-45.75],[-20.16,-45.16],[-18.47,-43.97],[-9.52,-35.3],[-6.44,-33.19],[-2.82,-32.24],[.9,-32.55],[4.3,-34.09],[7,-36.68],[12.24,-43.81],[17.49,-50.95],[18.5,-52.92],[18.85,-55.1],[18.5,-57.28],[17.48,-59.25],[15.91,-60.8],[13.92,-61.78],[10.17,-62.95],[2.04,-64.28],[-6.14,-63.36],[-16.24,-60.78],[-26.33,-58.2],[-32.75,-55.61],[-38.26,-51.42],[-42.46,-45.92],[-45.07,-39.5],[-48.72,-25.34],[-49.8,-15.14],[-47.87,-5.06],[-43.33,7.93],[-38.79,20.93]],wE={id:"interlagos",name:"Interlagos",location:"Brazil",inspiredBy:"Autódromo José Carlos Pace (Interlagos)",blurb:"Anticlockwise and old-school: a flat-out climb to the line, then a dive-bomb into the Senna S.",laps:3,waypoints:TE,startIndex:0},AE=[[-38,36.9],[-50.1,45.8],[-57.8,50],[-64.1,52.5],[-67.8,55],[-70.4,58.7],[-76.1,64.4],[-84.1,64.3],[-89.8,58.6],[-89.7,50.5],[-82.6,33.7],[-80.3,30.5],[-77,28.5],[-74.4,27.1],[-72.3,24.9],[-67.6,12.5],[-65.5,5.3],[-61.8,.3],[-56.5,-3],[-45.2,-8.3],[-41.9,-10.8],[-40.2,-14.5],[-40.3,-18.6],[-40.4,-23.2],[-38.7,-27.4],[-35.3,-30.4],[-22.4,-35.8],[-9,-41.3],[3.4,-45.1],[17,-47.8],[21.1,-47.6],[24.7,-45.7],[28.3,-43.8],[32.4,-43.6],[42.3,-46.1],[56.8,-52.9],[69.2,-58.7],[80,-63.9],[84.7,-64.4],[88.6,-61.6],[89.8,-57.1],[87.7,-52.8],[78.1,-43.7],[68.5,-34.5],[58.9,-25.4],[46.1,-14.9],[29.9,-3.2],[13.7,8.6],[2.3,16.8],[-1.8,18.6],[-6.4,18.5],[-10.9,18.4],[-15.1,20.2],[-27.7,29.4]],RE={id:"montreal",name:"Montréal",location:"Canada",inspiredBy:"Circuit Gilles Villeneuve",blurb:"Island blast: long straights, late braking into the hairpin and chicanes — and the Wall of Champions.",laps:4,waypoints:AE,startIndex:0,width:6.5},CE=[[-54.29,37.6],[-52.51,39.21],[-42.7,48.05],[-32.9,56.9],[-31.12,58.51],[-29.16,59.68],[-26.92,60.05],[-24.69,59.55],[-22.82,58.26],[-21.56,56.36],[-21.1,54.13],[-21.5,51.88],[-22.37,49.65],[-25.55,41.43],[-26.42,39.19],[-27,37.21],[-27.23,35.16],[-27.1,33.1],[-26.62,31.1],[-25.81,29.2],[-24.69,27.47],[-23.28,25.96],[-21.5,24.35],[-14.52,18.03],[-12.74,16.42],[-11.34,14.91],[-10.22,13.19],[-9.4,11.31],[-8.76,9.37],[-8.12,7.44],[-7.23,5.6],[-5.91,4.04],[-4.23,2.87],[-2.39,1.91],[-.62,.7],[.81,-.9],[1.82,-2.79],[2.36,-4.87],[2.58,-6.47],[2.79,-8.07],[3.01,-9.68],[3.61,-11.99],[4.74,-14.1],[6.34,-15.87],[8.32,-17.22],[10.56,-18.06],[12.93,-18.34],[15.31,-18.05],[17.55,-17.21],[19.51,-16.18],[21.48,-15.16],[23.64,-14.4],[25.93,-14.29],[28.15,-14.83],[30.14,-15.97],[31.71,-17.64],[32.98,-19.44],[34.25,-21.23],[35.72,-22.84],[37.56,-24.02],[39.63,-24.69],[41.81,-24.81],[43.95,-24.37],[45.91,-23.41],[47.55,-21.97],[48.48,-20.93],[49.41,-19.88],[51.22,-18.39],[53.41,-17.53],[55.76,-17.39],[58.03,-17.99],[60.1,-18.89],[62.17,-19.8],[64.24,-20.71],[66.29,-21.77],[68.18,-23.08],[69.9,-24.62],[71.4,-26.37],[72.84,-28.28],[81.03,-39.15],[89.21,-50.02],[90.66,-51.94],[91.69,-53.97],[91.95,-56.24],[91.42,-58.46],[90.15,-60.35],[88.31,-61.69],[86.11,-62.32],[83.84,-62.14],[81.51,-61.54],[67.66,-57.96],[53.8,-54.37],[39.95,-50.79],[26.09,-47.2],[12.24,-43.62],[-1.62,-40.04],[-15.47,-36.45],[-17.8,-35.85],[-19.82,-34.9],[-21.36,-33.26],[-22.18,-31.18],[-22.19,-28.94],[-21.38,-26.86],[-20.1,-24.82],[-16,-18.27],[-14.72,-16.24],[-13.83,-14.09],[-13.69,-11.77],[-14.32,-9.54],[-15.64,-7.63],[-17.52,-6.26],[-19.74,-5.58],[-21.69,-5.61],[-23.53,-6.22],[-25.11,-7.34],[-26.29,-8.88],[-27.45,-10.98],[-31.55,-18.38],[-32.71,-20.48],[-34.22,-22.28],[-36.3,-23.35],[-38.64,-23.54],[-39.29,-23.47],[-41.47,-22.78],[-43.23,-21.33],[-44.32,-19.32],[-44.59,-17.05],[-43.98,-14.85],[-42.92,-12.7],[-37.98,-2.72],[-36.91,-.57],[-36.12,1.65],[-35.88,3.99],[-36.18,6.32],[-37.02,8.52],[-37.92,10.23],[-39.22,12.13],[-40.92,13.69],[-42.93,14.81],[-45.15,15.45],[-47.45,15.56],[-49.15,15.44],[-51.42,15.02],[-53.53,14.09],[-55.37,12.71],[-56.84,10.94],[-57.87,8.88],[-58.69,6.63],[-60.77,.92],[-61.59,-1.34],[-62.58,-3.29],[-64.01,-4.94],[-65.79,-6.2],[-67.83,-6.99],[-70,-7.26],[-72.17,-7.01],[-74.21,-6.24],[-76.34,-5.13],[-81.26,-2.56],[-83.39,-1.45],[-85.18,-.11],[-86.46,1.72],[-87.09,3.87],[-87.02,6.1],[-86.25,8.2],[-84.85,9.94],[-83.07,11.55],[-74.07,19.7],[-65.07,27.84],[-56.07,35.99]],PE={id:"austin",name:"Austin",location:"United States",inspiredBy:"Circuit of the Americas",blurb:"Storm uphill into the Turn 1 hairpin, snake through the esses, then draft down the huge back straight.",laps:3,waypoints:CE,startIndex:0},LE=[[20.48,30.58],[17.4,31.44],[7.98,34.07],[-1.44,36.69],[-4.53,37.55],[-7.41,37.87],[-10.25,37.25],[-12.74,35.76],[-14.63,33.56],[-16.29,30.82],[-22.77,20.19],[-29.24,9.55],[-35.71,-1.09],[-42.18,-11.73],[-43.84,-14.46],[-45.07,-16.35],[-46.39,-18.16],[-47.82,-19.9],[-49.38,-21.71],[-50.95,-23.51],[-52.56,-25.89],[-53.56,-28.59],[-53.89,-31.44],[-53.53,-34.29],[-52.51,-36.37],[-50.73,-37.84],[-48.5,-38.45],[-47.24,-38.52],[-44.96,-38.58],[-42.67,-38.51],[-40.39,-38.31],[-37.22,-37.94],[-23.84,-36.39],[-10.46,-34.83],[2.91,-33.27],[6.09,-32.9],[8.78,-32.09],[11.02,-30.41],[12.54,-28.05],[13.16,-25.31],[12.79,-22.53],[11.49,-20.05],[8.82,-17.52],[5.9,-16.34],[2.74,-16.24],[-.42,-16.71],[-8.59,-17.91],[-11.75,-18.37],[-14.93,-18.33],[-17.94,-17.29],[-20.47,-15.36],[-22.26,-12.73],[-23.13,-9.67],[-23.01,-6.49],[-21.89,-3.52],[-20.42,-.96],[-18.96,1.6],[-17.5,4.16],[-15.5,6.47],[-12.78,7.87],[-9.74,8.15],[-6.81,7.26],[-4.43,5.34],[-3.77,4.55],[-2.16,2.89],[-.32,1.48],[1.69,.36],[4.01,-.73],[6.32,-1.81],[8.4,-2.61],[10.58,-3.12],[12.8,-3.31],[16,-3.37],[30.05,-3.64],[44.1,-3.9],[47.3,-3.96],[50.13,-3.65],[52.79,-2.61],[55.09,-.93],[56.89,1.29],[58.05,3.9],[58.9,6.76],[59.76,9.63],[60.15,12.62],[59.59,15.57],[58.13,18.2],[55.93,20.25],[53.19,21.5],[50.11,22.36],[36.84,26.04],[23.56,29.72]],IE={id:"spielberg",name:"Spielberg",location:"Austria",inspiredBy:"Red Bull Ring",blurb:"Short and punchy: three big straights, three big stops, and the Remus hairpin begging for a late lunge.",laps:5,waypoints:LE,startIndex:0},DE=[[76.94,-14],[75.32,-27.15],[73.7,-40.29],[73,-42.53],[71.56,-44.37],[69.55,-45.58],[67.25,-46],[66.64,-46],[64.44,-46.36],[62.46,-47.39],[60.91,-48.99],[58.03,-53.1],[56.53,-54.6],[54.6,-55.48],[52.48,-55.63],[50.15,-54.94],[48.36,-53.46],[47.26,-51.43],[47.02,-49.12],[47.76,-40.71],[48.18,-38.04],[48.96,-35.45],[52.97,-24.76],[53.79,-21.95],[54.2,-19.06],[54.47,-14.92],[54.23,-12.57],[53.22,-10.43],[51.55,-8.75],[49.43,-7.73],[47.08,-7.47],[30.41,-8.44],[13.75,-9.42],[11.43,-9.69],[9.16,-10.23],[6.97,-11.04],[4.88,-12.09],[-7.36,-19.19],[-19.61,-26.3],[-22.03,-27.12],[-24.58,-26.95],[-26.86,-25.8],[-28.53,-23.87],[-31.58,-18.46],[-33.13,-16.66],[-35.27,-15.61],[-37.64,-15.46],[-39.88,-16.25],[-49.99,-22.29],[-52.62,-23.21],[-55.4,-23.04],[-57.89,-21.79],[-59.7,-19.66],[-65.83,-8.57],[-71.96,2.52],[-78.09,13.61],[-78.94,15.63],[-79.32,17.78],[-79.46,19.89],[-79.01,22.62],[-77.38,24.85],[-74.93,26.12],[-73.64,26.44],[-71.54,27.43],[-69.97,29.13],[-69.17,31.3],[-68.68,34.35],[-67.81,37.11],[-66.18,39.5],[-59.6,46.7],[-57.71,48.13],[-55.43,48.79],[-53.07,48.58],[-50.94,47.55],[-49.33,45.82],[-48.43,43.63],[-45.6,29.87],[-42.77,16.11],[-39.94,2.35],[-38.99,.13],[-37.24,-1.53],[-34.97,-2.37],[-32.55,-2.24],[-30.38,-1.17],[-17.14,9.14],[-14.87,10.53],[-12.36,11.38],[-9.21,12.08],[-7.15,12.97],[-5.55,14.55],[-4.65,16.6],[-3.5,21.62],[-2.42,23.93],[-.47,25.58],[1.98,26.27],[16.7,27.18],[19.52,26.66],[21.78,24.89],[22.97,22.28],[23.53,19.25],[24.72,16.63],[26.99,14.86],[29.83,14.36],[34.1,14.64],[36.22,15.18],[38.01,16.45],[39.22,18.27],[39.7,20.4],[39.8,22.98],[40.29,25.14],[41.53,26.98],[43.36,28.24],[45.52,28.75],[57.11,29.28],[68.7,29.8],[71.3,29.49],[73.66,28.36],[75.53,26.52],[79.14,21.55],[80.42,18.85],[80.61,15.87],[78.78,.93]],NE={id:"singapore",name:"Marina Bay",location:"Singapore",inspiredBy:"Marina Bay Street Circuit",blurb:"Night street fight: blocky 90° corners, the Anderson Bridge hairpin and a dash under the floating grandstand.",laps:3,waypoints:DE,startIndex:0},UE=[gE,_E,ME,SE,EE,wE,RE,PE,IE,NE],Ve=UE.filter(i=>Array.isArray(i.waypoints)),ta=i=>Ve.find(t=>t.id===i)??Ve[0],Pd=(i,t)=>i*1048576+t;class OE{constructor(t,{samples:e,spacing:n=.25,width:s,spline:r="centripetal"}){const o=t.map(([u,d])=>new R(u,0,d)),a=new Xo(o,!0,r);this.length=a.getLength();const l=e??Math.max(200,Math.round(this.length/n));this.count=l,this.spacing=this.length/l,this.halfWidth=s/2,[this.x,this.z]=[new Float32Array(l),new Float32Array(l)],[this.tx,this.tz]=[new Float32Array(l),new Float32Array(l)],this.curvature=new Float32Array(l);const[c,h]=[new R,new R];for(let u=0;u<l;u++){a.getPointAt(u/l,c),a.getTangentAt(u/l,h);const d=Math.hypot(h.x,h.z)||1;[this.x[u],this.z[u],this.tx[u],this.tz[u]]=[c.x,c.z,h.x/d,h.z/d]}for(let u=0;u<l;u++){const d=this.wrap(u-3),f=this.wrap(u+3),g=this.tx[d]*this.tz[f]-this.tz[d]*this.tx[f];this.curvature[u]=Math.asin(Math.max(-1,Math.min(1,g)))/(6*this.spacing)}}wrap(t){return(t%this.count+this.count)%this.count}offset(t,e,n={}){return n.x=this.x[t]-this.tz[t]*e,n.z=this.z[t]+this.tx[t]*e,n}lateral(t,e,n){return(t-this.x[n])*-this.tz[n]+(e-this.z[n])*this.tx[n]}nearest(t,e,n=-1,s=80){let r=-1,o=1/0;const a=(l,c)=>{for(let h=l;h<=c;h++){const u=this.wrap(h),d=(this.x[u]-t)**2+(this.z[u]-e)**2;d<o&&([r,o]=[u,d])}};return n>=0&&a(n-s,n+s),(r<0||o>(this.halfWidth*3)**2)&&a(0,this.count-1),r}within(t,e,n){if(!(n>0))return!1;const s=this._cells(n),[r,o]=[Math.floor(t/n),Math.floor(e/n)],a=n*n;for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){const h=s.get(Pd(r+l,o+c));if(h){for(const u of h)if((this.x[u]-t)**2+(this.z[u]-e)**2<a)return!0}}return!1}_cells(t){this._grids??(this._grids=new Map);let e=this._grids.get(t);if(!e){e=new Map;for(let n=0;n<this.count;n++){const s=Pd(Math.floor(this.x[n]/t),Math.floor(this.z[n]/t)),r=e.get(s);r?r.push(n):e.set(s,[n])}this._grids.set(t,e)}return e}heading(t){return Math.atan2(-this.tx[t],-this.tz[t])}}const FE=1e-9;function kE(i,t,e,n,s,r,o,a){const l=e-i,c=n-t,h=o-s,u=a-r,d=l*u-c*h;if(Math.abs(d)<FE)return null;const f=((s-i)*u-(r-t)*h)/d,g=((s-i)*c-(r-t)*l)/d;return f<0||f>1||g<0||g>1?null:{x:i+l*f,z:t+c*f}}function zE(i,t){const e=i.length,n=[];let s=0;for(;s<e;){const r=i[s],o=i[(s+1)%e];n.push(r);let a=!1;for(let l=s+2;l<Math.min(s+t,e-1);l++){const c=i[l],h=i[(l+1)%e],u=kE(r.x,r.z,o.x,o.z,c.x,c.z,h.x,h.z);if(u){n.push({...u,i:r.i}),s=l+1,a=!0;break}}a||s++}return n}function Fp(i,t,e,n=90){const s=[];for(let l=0;l<i.count;l++)s.push({...i.offset(l,t),i:l});const r=zE(s,n),o=[];let a=[];for(const l of r)i.within(l.x,l.z,e)?a.length&&(o.push(a),a=[]):a.push(l);return a.length&&o.push(a),o.length===1&&o[0].length===r.length?o[0].closed=!0:o.length>1&&o[0][0]===r[0]&&a.length&&a.at(-1)===r.at(-1)&&(o[0]=o.pop().concat(o[0])),o}const kp=i=>i.halfWidth+.35;function BE(i){return[-1,1].flatMap(t=>Fp(i,t*(i.halfWidth+Fc),kp(i)))}function HE(i){const t=i.halfWidth+Fc+kc/2;return[-1,1].flatMap(e=>Fp(i,e*t,kp(i)))}function VE(i,t=0){let e=1/0,n=-1/0,s=1/0,r=-1/0;for(const o of i)for(const a of o)e=Math.min(e,a.x),n=Math.max(n,a.x),s=Math.min(s,a.z),r=Math.max(r,a.z);return e-=t,n+=t,s-=t,r+=t,{minX:e,maxX:n,minZ:s,maxZ:r,width:n-e,depth:r-s,cx:(e+n)/2,cz:(s+r)/2}}function GE(i,t=.5){const e=[{x:i.minX+t,z:i.minZ+t},{x:i.maxX-t,z:i.minZ+t},{x:i.maxX-t,z:i.maxZ-t},{x:i.minX+t,z:i.maxZ-t}];return e.closed=!0,e}function $l(i,t,e){const n=yp+Math.floor(e/2)*ir.rowGap+e%2*(ir.rowGap/2),s=i.wrap(t-Math.round(n/i.spacing)),r=i.offset(s,(e%2?1:-1)*ir.lateral);return{x:r.x,z:r.z,yaw:i.heading(s),i:s}}const zp=i=>new OE(i.waypoints,{samples:i.samples,spacing:o2,width:i.width??l2,spline:a2}),ao=[168,112],pl=new Map;function WE(i){if(!pl.has(i.id)){const t=zp(i);pl.set(i.id,{path:t,startIndex:t.nearest(...i.waypoints[i.startIndex])})}return pl.get(i.id)}function XE(i,t,e,n){const s=ta(typeof n=="object"&&n?n.id:n),{path:r,startIndex:o}=WE(s),a=Math.min(2,window.devicePixelRatio||1);i.width=ao[0]*a,i.height=ao[1]*a;const l=i.getContext("2d");l.scale(a,a),Gc(l,r,o,ao[0],ao[1],12,{band:.22,line:.9,minBand:5}),oe(t,s.name.toUpperCase()),oe(e,`${s.location.toUpperCase()} · ${Math.round(r.length)} M · ${s.laps} LAPS`)}async function qE(i,t){try{return await navigator.clipboard.writeText(i),"copied"}catch{}t.focus(),t.select(),t.setSelectionRange(0,i.length);try{if(document.execCommand("copy"))return"copied"}catch{}return"selected"}class YE{constructor(t,e,n){this.r=e,this.levels=[...t.querySelectorAll(".lobby-room [data-level]")];for(const s of this.levels)s.addEventListener("click",()=>n(s.dataset.level));[this.rowsKey,this.track,this.copyTimer]=["",null,0]}render(t,e){var a;const n=this.r;oe(n.roomCode,t.code);const s=t.code?uE(window.location,t.code):"";n.link.value!==s&&(n.link.value=s),oe(n.count,t.count),oe(n.aiNote,t.aiNote),n.start.disabled=!t.canStart;for(const l of this.levels)l.classList.toggle("is-selected",l.dataset.level===e.level),l.disabled=!t.isHost;const r=typeof e.track=="object"?(a=e.track)==null?void 0:a.id:e.track;r!==this.track&&(this.track=r,XE(n.map,n.trackName,n.trackFacts,r));const o=JSON.stringify(t.rows);o!==this.rowsKey&&(this.rowsKey=o,n.players.replaceChildren(...t.rows.map($E)))}async copy(){const t=this.r,e=await qE(t.link.value,t.link);t.copy.textContent=e==="copied"?"COPIED ✓":"SELECTED",clearTimeout(this.copyTimer),this.copyTimer=setTimeout(()=>t.copy.textContent="COPY LINK",rE*1e3)}}function $E(i){const t=Yt("li",i.ai?"is-ai":i.you?"is-you":""),e=Yt("em");i.ai||(e.style.background=i.color);const n=Yt("span","lp-num");n.textContent=i.ai?"":`#${i.number}`;const s=Yt("span","lp-name");s.textContent=i.name,i.host&&s.append(Yt("i","lp-tag lp-host","HOST")),i.you&&s.append(Yt("i","lp-tag lp-you","YOU"));const r=Yt("span","lp-code");return r.textContent=i.ai?"AI":i.code,t.append(e,n,s,r),t}const KE={"not-found":{title:"ROOM NOT FOUND",text:"No room with that code is open. Check the code, or ask the host for the link.",retry:!0},full:{title:"ROOM FULL",text:`That room already has ${Ne} drivers.`,retry:!0},version:{title:"VERSION MISMATCH",text:"You and the host are running different versions. Both reload the page, then try again.",retry:!1},network:{title:"CONNECTION FAILED",text:"Couldn't reach the online service. Check your connection and try again.",retry:!0},timeout:{title:"NO ANSWER",text:"The room didn't answer in time. Check your connection and try again.",retry:!0},taken:{title:"CODE TAKEN",text:"That room code is already in use. Try again for a fresh one.",retry:!0},racing:{title:"RACE IN PROGRESS",text:"That room is mid-race. Join again when it's back in the lobby.",retry:!0},closed:{title:"HOST LEFT",text:"The host closed the room.",retry:!1},lost:{title:"CONNECTION LOST",text:"Lost touch with the host. The room may still be open: try joining again.",retry:!0},offline:{title:"YOU'RE OFFLINE",text:"Online racing needs an internet connection. Reconnect, then try again.",retry:!0}},jE={title:"SOMETHING WENT WRONG",text:"The connection failed. Try again.",retry:!0};function ZE(i){const t=typeof i=="string"?i:i==null?void 0:i.reason,e=KE[t]??jE,n=typeof i=="object"?i==null?void 0:i.message:null;return{...e,text:n||e.text}}function JE(i=[],t=null){const e=i.slice(0,Ne).map(n=>({id:n.id,name:n.name,code:n.code??"",number:n.number??"",color:QE(n.livery),host:!!n.host,you:n.id===t,ai:!1}));for(;e.length<Ne;)e.push({id:`ai${e.length}`,name:"AI RIVAL",ai:!0});return e}function QE(i){const t=typeof i=="object"&&i!==null?i.body:i;return typeof t=="number"?`#${t.toString(16).padStart(6,"0")}`:typeof t=="string"&&t?t:"#9aa3b2"}const Ld=(i,t)=>`${i} ${t}${i===1?"":"S"}`;function tT(i){var r;const t=i.phase??"choose",e=Math.min(((r=i.players)==null?void 0:r.length)??0,Ne),n=Ne-e,s={title:i.room&&!i.isHost?`JOINING ${i.room}`:"CREATING ROOM",text:"Connecting…",retry:!1};return{panel:t==="connecting"||t==="error"?"status":t,status:t==="error"?{...ZE(i.error),busy:!1}:{...s,busy:!0},code:i.room??"",rows:JE(i.players,i.you),count:`${e} / ${Ld(Ne,"DRIVER")}`,aiNote:n?`AI FILLS THE ${Ld(n,"EMPTY SLOT")}`:"FULL GRID",isHost:!!i.isHost,canStart:!!i.isHost&&e>=1}}function eT(i,{focus:t,codeComplete:e,isHost:n,canStart:s,canRetry:r}={}){return i==="choose"?t==="code"?e?"join":null:t==="name"?"create":e?"join":"create":i==="error"?r?"retry":"leave":i==="room"&&n&&s?"start":null}const nT=i=>i==="choose"?"back":"leave";function iT(i){return t=>{if(!i.visible||(t.stopPropagation(),t.repeat||t.isComposing))return;const e=t.target;if(t.key==="Escape")t.preventDefault(),i.do(nT(i.state.phase));else if(t.key==="Enter"&&(e==null?void 0:e.tagName)!=="BUTTON"){t.preventDefault();const n=i.r,s=eT(i.state.phase,{focus:e===n.name?"name":e===n.codeInput?"code":null,codeComplete:xo(n.codeInput.value),isHost:i.view.isHost,canStart:i.view.canStart,canRetry:i.view.status.retry});s&&i.do(s)}}}class sT{constructor(t={}){this.on=t,this.el=Yt("div","screen screen-lobby",hE),document.body.appendChild(this.el),Gi(this.el,!1),this.visible=!1,this.r=xr(this.el),this.panels=[...this.el.querySelectorAll("[data-panel]")],this.choose=new pE(this.r),this.room=new YE(this.el,this.r,e=>{var n,s;return(s=(n=this.on).onLevel)==null?void 0:s.call(n,e)});for(const e of this.el.querySelectorAll("[data-do]"))e.addEventListener("click",()=>this.do(e.dataset.do));window.addEventListener("keydown",iT(this),!0),this.render({phase:"choose"})}bind(t){this.on={...this.on,...t}}open(t=""){this.choose.setCode(t),this.render({phase:"choose"}),this.show(!0),Ip()||this.r.name.focus()}show(t){this.visible=t,Gi(this.el,t),!t&&this.el.contains(document.activeElement)&&document.activeElement.blur()}render(t){this.state=t;const e=this.view=tT(t);for(const r of this.panels)r.hidden=r.dataset.panel!==e.panel;const n=this.el.firstElementChild;n.classList.toggle("is-host",e.isHost),n.classList.toggle("is-room",e.panel==="room");const{r:s}=this;s.statusTitle.textContent=e.status.title,s.statusText.textContent=e.status.text,s.spinner.hidden=!e.status.busy,s.retry.hidden=!e.status.retry,s.cancel.firstChild.textContent=e.status.busy?"CANCEL ":"BACK ",e.panel==="room"&&this.room.render(e,t)}do(t){var n,s,r,o,a;if(t==="create"||t==="join"||t==="retry"){const l=this.choose.submit(t,this.state.room);(l==null?void 0:l.action)==="create"?(s=(n=this.on).onCreate)==null||s.call(n,l.name):l&&((o=(r=this.on).onJoin)==null||o.call(r,l.code,l.name));return}const e={start:()=>{var l,c;return this.view.canStart&&((c=(l=this.on).onStart)==null?void 0:c.call(l))},leave:()=>{var l,c;return(c=(l=this.on).onLeave)==null?void 0:c.call(l)},back:()=>{var l,c;return(c=(l=this.on).onBack)==null?void 0:c.call(l)},prevTrack:()=>{var l,c;return(c=(l=this.on).onTrack)==null?void 0:c.call(l,-1)},nextTrack:()=>{var l,c;return(c=(l=this.on).onTrack)==null?void 0:c.call(l,1)},copy:()=>this.room.copy()};(a=e[t])==null||a.call(e)}}class rT{constructor(t){this.el=Yt("div","screen screen-online-pause",`<div class="op-card">
         <div class="title-kicker op-kicker">ONLINE RACE</div>
         <p>THE RACE GOES ON WITHOUT YOU</p>
         <div class="res-actions">
           <button class="btn btn-primary" data-act="pause">RESUME <kbd>ESC</kbd></button>
           <button class="btn" data-act="quit">LEAVE RACE <kbd>Q</kbd></button>
         </div>
       </div>`),document.body.appendChild(this.el),this.show(!1);for(const e of this.el.querySelectorAll("[data-act]"))e.addEventListener("click",()=>t(e.dataset.act))}show(t){this.visible=t,Gi(this.el,t)}}class oT{constructor(t,e){this.el=Yt("div","title-level title-gfx",`<span>GRAPHICS</span>${Object.entries(ar).map(([n,s])=>`<button data-gfx="${n}" class="${n===go?"is-selected":""}">${s.label}</button>`).join("")}<kbd>G</kbd>`),t.insertBefore(this.el,e);for(const n of this.el.querySelectorAll("[data-gfx]"))n.addEventListener("click",()=>this.pick(n.dataset.gfx))}cycle(){const t=Object.keys(ar);this.pick(t[(t.indexOf(go)+1)%t.length])}pick(t){if(t===go)return;try{localStorage.setItem(Hf,t)}catch{}const e=new URL(window.location.href);e.searchParams.set("gfx",t),window.location.replace(e.toString())}}const ko=1,aT="tbckart-",Xc=8,lT=8192,cT=20,hT=20,uT=8,dT=2,Id=5e3,ml=100,fT=1,pT=5,mT=.1,gT=16,vT=3,Bp=3,Hp=15,_T=2,xT=.25,MT=.1,yT=.35,ST=32,bT=.06,Dd=.1,ET=3,TT=1,wT=20,AT=.25,RT=1.5,Kl={body:16761370,suit:1914199,stripe:15087942,number:"07"},jl=[{body:16054011,suit:2303274,stripe:15087942,number:"2"},{body:2282478,suit:730437,stripe:16777215,number:"3"},{body:16736162,suit:2829634,stripe:16777215,number:"44"},{body:10215773,suit:1786674,stripe:1118481,number:"63"},{body:1914199,suit:16054011,stripe:16761370,number:"77"}],CT=2e3,PT=.5,LT=.05,IT=.4,DT=.12,NT=6,Vp=3,UT=.5,OT=[["<kbd>W</kbd><kbd>↑</kbd>","throttle"],["<kbd>S</kbd><kbd>↓</kbd>","brake · reverse"],["<kbd>A</kbd><kbd>D</kbd>","steer"],["<kbd>SPACE</kbd>","handbrake drift"],["<kbd>C</kbd>","camera"],["<kbd>R</kbd>","reset kart"],["<kbd>M</kbd>","sound"],["<kbd>ESC</kbd>","pause"]],us=[["race","GRAND PRIX",i=>`${i} LAPS · ${Si.length} RIVALS · SLIPSTREAM & CONTACT`],["timeattack","TIME ATTACK",()=>"SOLO HOT LAPS · RACE YOUR BEST-LAP GHOST"],["online","ONLINE",()=>"RACE FRIENDS · ROOM CODE · UP TO 6 PLAYERS"]],lo=[168,112];class FT{constructor(t){this.mode="race",this.title=Yt("div","screen screen-title is-visible",`<div>
         <div class="title-kicker">INDOOR KART RACING</div>
         <h1 class="title-logo">TBC<span>KART</span></h1>
         <div class="title-meta" data-ref="meta"></div>
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
         <div class="title-modes">${us.map(([n,s])=>`<button class="mode" data-mode="${n}"><b>${s}</b><small data-sub="${n}"></small></button>`).join("")}</div>
         <div class="title-level"><span>RIVALS</span>${Object.entries(mi).map(([n,s])=>`<button data-level="${n}">${s.label}</button>`).join("")}<kbd>L</kbd></div>
         <div class="title-press"><span class="key-hint">PRESS <kbd>ENTER</kbd> TO RACE · <kbd>↑</kbd><kbd>↓</kbd> TRACK · <kbd>←</kbd><kbd>→</kbd> MODE</span><span class="tap-hint">PICK A TRACK · TAP A MODE TO RACE</span></div>
         <div class="title-best" data-ref="best"></div>
         <div class="title-controls">${OT.map(([n,s])=>`<span>${n} ${s}</span>`).join("")}</div>
       </div>`),this.pause=Yt("div","screen screen-pause",`<div><h2>PAUSED</h2>
         <div class="res-actions">
           <button class="btn btn-primary" data-act="pause">RESUME <kbd>ESC</kbd></button>
           <button class="btn" data-act="reset">RESTART <kbd>R</kbd></button>
           <button class="btn" data-act="quit">MENU <kbd>Q</kbd></button>
         </div>
         <p><kbd>C</kbd> camera &nbsp; <kbd>M</kbd> sound</p></div>`),document.body.append(this.title,this.pause),Gi(this.pause,!1),this.results=new sE(t),this.lobby=new sT(kT(this)),this.onlinePause=new rT(t);const e=Yt("div","hud notice-layer");document.body.appendChild(e),this.notices=new Lp(e),this.r=xr(this.title),this.modeButtons=[...this.title.querySelectorAll("[data-mode]")];for(const n of this.modeButtons)n.addEventListener("click",()=>{this.setMode(n.dataset.mode),t("start")});for(const n of[...this.pause.querySelectorAll("[data-act]"),...this.title.querySelectorAll("[data-act]")])n.addEventListener("click",()=>t(n.dataset.act));this.setMode("race")}setTrack(t,e,n,s,r,o){const a=this.r,l=Math.min(2,window.devicePixelRatio||1);a.map.width=lo[0]*l,a.map.height=lo[1]*l;const c=a.map.getContext("2d");c.scale(l,l),Gc(c,e,n,lo[0],lo[1],12,{band:.22,line:.9,minBand:5}),oe(a.count,`TRACK ${s+1} / ${r}`),oe(a.name,t.name.toUpperCase()),oe(a.facts,`${t.location.toUpperCase()} · ${Math.round(e.length)} M · ${t.laps} LAPS`),oe(a.blurb,t.blurb),oe(a.meta,t.id==="tbc"?"VANCOUVER HOME TRACK":`INSPIRED BY ${t.inspiredBy.toUpperCase()}`);for(const[h,,u]of us)oe(this.title.querySelector(`[data-sub="${h}"]`),u(t.laps));this.setBest(o)}addGraphicsPicker(){const t=this.title.querySelector(".title-level");this.graphics=new oT(t.parentNode,t.nextSibling)}bindLevels(t,e){this.levelButtons=[...this.title.querySelectorAll("[data-level]")];for(const n of this.levelButtons)n.addEventListener("click",()=>e(this.setLevel(n.dataset.level)));this.setLevel(t)}setLevel(t){this.level=t;for(const e of this.levelButtons)e.classList.toggle("is-selected",e.dataset.level===t);return t}cycleLevel(){const t=Object.keys(mi);return this.setLevel(t[(t.indexOf(this.level)+1)%t.length])}setMode(t){this.mode=t;for(const e of this.modeButtons)e.classList.toggle("is-selected",e.dataset.mode===t)}cycleMode(t=1){const e=us.findIndex(([n])=>n===this.mode);this.setMode(us[(e+t+us.length)%us.length][0])}openLobby(t){this.showTitle(!1),this.lobby.open(t)}closeLobby(){this.lobby.show(!1),this.showTitle(!0)}showTitle(t){Gi(this.title,t)}showPause(t){Gi(this.pause,t)}showOnlinePause(t){this.onlinePause.show(t)}showResults(t){this.results.show(t)}notify(t,e=""){this.notices.show(t,{sub:e,kind:"info",time:Vp})}update(t){t.session.state==="finished"&&this.results.update(t.field)}setBest(t){oe(this.r.best,t?`BEST LAP  ${hi(t)}`:"NO LAP TIME YET — SET THE BENCHMARK")}}function kT(i){return{onBack:()=>i.closeLobby(),onLeave:()=>i.lobby.render({phase:"choose"})}}class zT{constructor(){this.el=Yt("pre","debug"),document.body.appendChild(this.el),this.visible=!1,this._fps=60,this._stats=null}async toggle(){this.visible=!this.visible,this.el.classList.toggle("is-visible",this.visible),this.visible,this._stats&&(this._stats.dom.style.display=this.visible?"block":"none")}update(t,e){var o;if((o=this._stats)==null||o.update(),!this.visible)return;this._fps=.92*this._fps+.08*(1/Math.max(t,1/240));const n=e.kart.telemetry,s=e.kart.state,r=e.renderer.three.info.render;this.el.textContent=[`fps      ${this._fps.toFixed(0)}   calls ${r.calls}   tris ${r.triangles}`,`state    ${e.session.state}   camera ${e.camera.mode}/${e.camera.view}`,`speed    ${(n.speed*3.6).toFixed(1)} km/h   fwd ${n.forwardSpeed.toFixed(2)} m/s`,`slip     ${n.slip.toFixed(2)} m/s   β ${(n.slipAngle*180/Math.PI).toFixed(0)}°   drift ${n.drift.toFixed(2)}   ${n.sliding?"SLIDING":""}`,`accel    long ${n.longAccel.toFixed(1)}   lat ${n.latAccel.toFixed(1)} m/s²`,`pos      ${s.x.toFixed(1)}, ${s.z.toFixed(1)}   track #${e.trackIndex}`].join(`
`)}}const Nd=(i,t)=>(i+4096)*8192+(t+4096);class BT{constructor(t,e){this.cell=e,this.segs=[],this.grid=new Map,this.contact={x:0,z:0,nx:0,nz:0};for(const n of t){const s=n.closed?n.length:n.length-1;for(let r=0;r<s;r++){const o=n[r],a=n[(r+1)%n.length];this._insert(o.x,o.z,a.x,a.z)}}this._stamp=new Uint32Array(this.segs.length/4),this._frame=0}_insert(t,e,n,s){const r=this.segs.length/4;this.segs.push(t,e,n,s);const o=this.cell;for(let a=Math.floor(Math.min(t,n)/o);a<=Math.floor(Math.max(t,n)/o);a++)for(let l=Math.floor(Math.min(e,s)/o);l<=Math.floor(Math.max(e,s)/o);l++){const c=Nd(a,l);this.grid.has(c)||this.grid.set(c,[]),this.grid.get(c).push(r)}}resolve(t,e,n,s){this._frame++;let r=0;const o=Math.floor(t.x/this.cell),a=Math.floor(t.z/this.cell);for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){const h=this.grid.get(Nd(o+l,a+c));if(h)for(const u of h)this._stamp[u]!==this._frame&&(this._stamp[u]=this._frame,r=Math.max(r,this._collide(u*4,t,e,n,s)))}return r}_collide(t,e,n,s,r){const o=this.segs,a=o[t+2]-o[t],l=o[t+3]-o[t+1],c=Math.max(0,Math.min(1,((e.x-o[t])*a+(e.z-o[t+1])*l)/(a*a+l*l||1e-9))),h=o[t]+a*c,u=o[t+1]+l*c,d=Math.hypot(e.x-h,e.z-u);if(d>=n||d<1e-6)return 0;const[f,g]=[(e.x-h)/d,(e.z-u)/d];[e.x,e.z]=[h+f*n,u+g*n];const v=e.vx*f+e.vz*g;if(v>=0)return 0;const[m,p]=[e.vx-v*f,e.vz-v*g],y=Math.hypot(m,p),_=y>1e-9?Math.max(0,1-r*(1+s)*-v/y):0,b=m*_,P=p*_;return e.vx=b-v*s*f,e.vz=P-v*s*g,Object.assign(this.contact,{x:h,z:u,nx:f,nz:g}),-v}}const Gp=i=>{const{width:t,height:e}=i,n=i.getContext("2d").getImageData(0,0,t,e).data,s=new Float32Array(t*e);for(let r=0;r<t*e;r++)s[r]=(.2126*n[r*4]+.7152*n[r*4+1]+.0722*n[r*4+2])/255;return{lum:s,w:t,h:e}};function qc(i,t=2,e=1){let{lum:n,w:s,h:r}=Gp(i);for(let h=0;h<e;h++){const u=new Float32Array(s*r);for(let d=0;d<r;d++)for(let f=0;f<s;f++){let g=0;for(let v=-1;v<=1;v++)g+=n[d*s+(f+v+s)%s]+n[(d+v+r)%r*s+f];u[d*s+f]=g/6}n=u}const{canvas:o,ctx:a}=Be(s,r),l=a.createImageData(s,r),c=(h,u)=>n[(u+r)%r*s+(h+s)%s];for(let h=0;h<r;h++)for(let u=0;u<s;u++){const d=(c(u+1,h)-c(u-1,h))*t,f=(c(u,h+1)-c(u,h-1))*t,g=Math.hypot(d,f,1),v=(h*s+u)*4;l.data[v]=(-d/g*.5+.5)*255,l.data[v+1]=(f/g*.5+.5)*255,l.data[v+2]=(1/g*.5+.5)*255,l.data[v+3]=255}return a.putImageData(l,0,0),o}function Yc(i,t,e){const{lum:n,w:s,h:r}=Gp(i),{canvas:o,ctx:a}=Be(s,r),l=a.createImageData(s,r);for(let c=0;c<s*r;c++){const h=Math.round(255*Math.min(1,Math.max(0,t+(e-t)*n[c])));l.data.set([h,h,h,255],c*4)}return a.putImageData(l,0,0),o}const gl=new Map,gi=(i,t)=>(gl.has(i)||gl.set(i,t()),gl.get(i)),ea=(i,t)=>Gn(gi(i,t)),Ps=(i,t)=>Gn(gi(i,t),{colour:!1}),HT=()=>ea("concrete",Zl),VT=()=>ea("asphalt",Jl),GT=(i="#d7263d")=>ea(`wall${i}`,()=>Xp(i)),WT=()=>({normalMap:Ps("concreteN",()=>qc(gi("concrete",Zl),1.6,2)),roughnessMap:Ps("concreteR",()=>Yc(gi("concrete",Zl),.62,.22))}),XT=()=>({normalMap:Ps("asphaltN",()=>qc(gi("asphalt",Jl),3.2,1)),roughnessMap:Ps("asphaltR",()=>Yc(gi("asphalt",Jl),.97,.72))}),qT=(i="#d7263d")=>({normalMap:Ps(`wallN${i}`,()=>qc(gi(`wall${i}`,()=>Xp(i)),5,2))}),YT=()=>ea("barrier",Wp),$T=()=>({roughnessMap:Ps("barrierR",()=>Yc(gi("barrier",Wp),.75,.4))});function Wp(){const{canvas:e,ctx:n}=Be(512,256);n.fillStyle="#ffffff",n.fillRect(0,0,512,256),Cs(n,512,256,{count:30,minR:20,maxR:90,alpha:.05,seed:41});let s=7;const r=()=>(s=s*16807%2147483647)/2147483647,o=n.createLinearGradient(0,256*.5,0,256);o.addColorStop(0,"rgba(30,30,32,0)"),o.addColorStop(1,"rgba(30,30,32,0.16)"),n.fillStyle=o,n.fillRect(0,0,512,256),n.filter="blur(10px)";for(let a=0;a<14;a++)n.fillStyle=`rgba(25,25,28,${.04+r()*.08})`,n.beginPath(),n.ellipse(r()*512,256*(.62+r()*.3),30+r()*90,6+r()*12,(r()-.5)*.2,0,Math.PI*2),n.fill();return n.filter="none",gr(n,512,256,8,42),e}function Zl(){const{canvas:t,ctx:e}=Be(1024,1024);return e.fillStyle="#74767b",e.fillRect(0,0,1024,1024),Cs(e,1024,1024,{count:70,minR:60,maxR:260,alpha:.07,seed:11}),Cs(e,1024,1024,{count:160,minR:10,maxR:60,alpha:.05,seed:12}),Io(e,1024,1024,{count:7e3,color:"rgba(40,42,46,0.35)",minR:.5,maxR:1.5,seed:13}),Io(e,1024,1024,{count:2500,color:"rgba(200,202,206,0.25)",minR:.5,maxR:1.2,seed:14}),gr(e,1024,1024,14,15),e.fillStyle="rgba(30,31,34,0.85)",e.fillRect(0,0,1024,3),e.fillRect(0,0,3,1024),e.fillStyle="rgba(255,255,255,0.08)",e.fillRect(0,3,1024,1),e.fillRect(3,0,1,1024),t}function Jl(){const{canvas:e,ctx:n}=Be(512,512);n.fillStyle="#3d4047",n.fillRect(0,0,512,512),Cs(n,512,512,{count:40,minR:30,maxR:140,alpha:.06,seed:21}),Io(n,512,512,{count:9e3,color:"rgba(120,124,132,0.35)",minR:.4,maxR:1.1,seed:22}),Io(n,512,512,{count:5e3,color:"rgba(15,16,18,0.4)",minR:.4,maxR:1.2,seed:23}),gr(n,512,512,18,24);const s=n.createLinearGradient(0,0,0,512);return s.addColorStop(.18,"rgba(0,0,0,0)"),s.addColorStop(.5,"rgba(0,0,0,0.08)"),s.addColorStop(.82,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,512,512),e}function Xp(i){const{canvas:s,ctx:r}=Be(512,1280),o=8;for(let a=0;a<o;a++){const l=a*512/o,c=r.createLinearGradient(l,0,l+512/o,0);c.addColorStop(0,"#4a5059"),c.addColorStop(.45,"#6b727d"),c.addColorStop(.55,"#5a616b"),c.addColorStop(1,"#434851"),r.fillStyle=c,r.fillRect(l,0,512/o,1280)}return Cs(r,512,1280,{count:30,minR:40,maxR:200,alpha:.08,seed:31}),gr(r,512,1280,10,32),r.fillStyle="#16181c",r.fillRect(0,1280-1.4*128,512,1.4*128),r.fillStyle=i,r.fillRect(0,1280-1.85*128,512,.45*128),r.fillStyle="rgba(255,255,255,0.85)",r.fillRect(0,1280-1.95*128,512,.06*128),s}const zo='"Chakra Petch", "Arial Narrow", Impact, sans-serif',KT=" ";function Ql(i,t,e,n,s,r){for(let o=0;o*r<n;o++)for(let a=0;a*r<s;a++)i.fillStyle=(o+a)%2?"#101114":"#f2f2f2",i.fillRect(t+o*r,e+a*r,r,r)}function jT({title:i,sub:t,color:e}){const{canvas:n,ctx:s}=Be(1024,256);return Lc(n,()=>{const r=s.createLinearGradient(0,0,0,256);r.addColorStop(0,"#1c1f26"),r.addColorStop(1,"#0f1115"),s.fillStyle=r,s.fillRect(0,0,1024,256),s.fillStyle=e,s.beginPath(),[[0,0],[70,0],[30,256],[0,256]].forEach(([o,a])=>s.lineTo(o,a)),s.fill(),s.fillStyle="#ffffff",s.font=`italic 700 118px ${zo}`,s.fillText(i,96,150),s.fillStyle=e,s.font=`600 44px ${zo}`,s.fillText(t.split("").join(KT),100,212),Ql(s,896,0,128,256,32)})}function ZT(){const{canvas:i,ctx:t}=Be(1024,160);return Lc(i,()=>{t.fillStyle="#0f1115",t.fillRect(0,0,1024,160),Ql(t,0,0,160,160,40),Ql(t,864,0,160,160,40),t.fillStyle="#ffffff",t.font=`italic 700 92px ${zo}`,t.textAlign="center",t.textBaseline="middle",t.fillText("START · FINISH",512,84)})}function JT(){const{canvas:i,ctx:t}=Be(2048,512);return Lc(i,()=>{t.clearRect(0,0,2048,512),t.fillStyle="rgba(255,255,255,0.9)",t.font=`italic 700 330px ${zo}`,t.textAlign="center",t.textBaseline="middle",t.fillText("TBC KART",1024,230),t.fillStyle="rgba(230,57,70,0.95)",t.fillRect(250,430,1548,26)},'700 200px "Chakra Petch"')}const QT=7,co=10,tw=4,Ud=8,Od=12,Fd=8.8,sn={width:3.4,depth:.6,y:7.9,spacingX:12,spacingZ:10,intensity:9,color:16054527},ds={y:3.2,thickness:.08,colors:[58879,16722902],intensity:2.6},ew=[{title:"TBC KART",sub:"INDOOR RACING",color:"#e63946"},{title:"LAP ATTACK",sub:"BEAT YOUR BEST",color:"#ffc21a"},{title:"FULL THROTTLE",sub:"SINCE 2026",color:"#22c3ee"},{title:"RACE HARD",sub:"RACE CLEAN",color:"#f4f4f4"}],nw=[12,3],iw=5.6,qp=i=>new de({map:i,transparent:!0,roughness:.6,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});function tc(i,t,e,n=0){return i.rotation.x=-Math.PI/2,i.position.set(t,n,e),i.receiveShadow=!0,i}const sw=(i,t)=>{for(const e of Object.values(i))[e.repeat,e.anisotropy]=[t.repeat.clone(),t.anisotropy];return i};function rw(i,t){const e=new jt,n=HT();n.repeat.set(i.width/Ud,i.depth/Ud),n.anisotropy=t;const s=Ze.detail?sw(WT(),n):{},r=new de({map:n,roughness:1,metalness:.02,...s});Ze.detail||(r.roughness=.5),s.normalMap&&r.normalScale.set(.35,.35),e.add(tc(new St(new Ue(i.width,i.depth),r),i.cx,i.cz));const o=qS(),a=.35,l=1.5,c=[[i.width-2*l,i.cx,i.minZ+l,0],[i.width-2*l,i.cx,i.maxZ-l,0],[i.depth-2*l,i.minX+l,i.cz,Math.PI/2],[i.depth-2*l,i.maxX-l,i.cz,Math.PI/2]];for(const[h,u,d,f]of c){const g=o.clone();g.repeat.set(h/1.4,1),g.needsUpdate=!0;const v=tc(new St(new Ue(h,a),qp(g)),u,d,.004);v.rotation.z=f,e.add(v)}return e}function ow(i,t,e){const n=new St(new Ue(e,e/4),qp(JT()));return n.material.opacity=.8,tc(n,i,t,.006)}function Ls(i,t,e,n,s,{closed:r=!1,uPerMetre:o=1,alpha:a=null}={}){const l=t.length,c=new Float32Array(l*6),h=new Float32Array(l*4),u=a?new Float32Array(l*8).fill(1):null,d={},f={};let g=0;for(let y=0;y<l;y++){const _=t[y];y>0&&(g+=i.spacing*o),i.offset(_,typeof e=="function"?e(_):e,d),i.offset(_,typeof n=="function"?n(_):n,f),c.set([d.x,s,d.z,f.x,s,f.z],y*6),h.set([g,0,g,1],y*4),u&&(u[y*8+3]=u[y*8+7]=a(y,_))}const v=[],m=r?l:l-1;for(let y=0;y<m;y++){const _=y*2,b=(y+1)%l*2;v.push(_,_+1,b,_+1,b+1,b)}const p=new fe;return p.setAttribute("position",new ie(c,3)),p.setAttribute("uv",new ie(h,2)),u&&p.setAttribute("color",new ie(u,4)),p.setIndex(v),p.computeVertexNormals(),p}const Yp=i=>Array.from({length:i.count},(t,e)=>e),kd=(i={})=>new de({color:13948116,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,...i}),ec=i=>(i.receiveShadow=!0,i);function zd(i,t,...e){const n=new jt;return n.position.set(i.x[t],Jo+.002,i.z[t]),n.rotation.y=i.heading(t),n.add(...e),n}function ho(i,t,e,n=0,s=0){const r=ec(new St(new Ue(i,t),e));return r.rotation.x=-Math.PI/2,r.position.set(n,0,s),r}function aw(i,t,e,n){const s=new jt,r=i.halfWidth,o=Yp(i),a=VT();a.anisotropy=n;const l=Ls(i,o,-r,r,xp,{closed:!0,uPerMetre:1/c2}),c=Ze.detail?XT():{};for(const p of Object.values(c))p.anisotropy=n;const h=new de({map:a,roughness:c.roughnessMap?1:.86,...c});c.normalMap&&h.normalScale.set(.9,.9),s.add(ec(new St(l,h)));const u=kd();for(const p of[-1,1]){const y=p*(r-ql),_=p*(r-ql-h2),b=Ls(i,o,Math.min(y,_),Math.max(y,_),Jo,{closed:!0});s.add(ec(new St(b,u)))}const d=Math.round(r*2/.6),f=kd({map:WS(d,2),color:16777215});s.add(zd(i,t,ho(r*2,M2,f)));const[g,v,m]=[1.7,2.4,.1];return s.add(zd(i,e,ho(g,m,u,0,-v/2),ho(m,v,u,-g/2,0),ho(m,v,u,g/2,0))),s}function lw(i){const t=zc(i),e=l=>bp(i,l),n={uPerMetre:1/(2*g2)},s=Jo+.004,r=Sp(i).map(({side:l,indices:c})=>l>0?Ls(i,c,t,e,s,n):Ls(i,c,h=>-e(h),-t,s,n)),o=new de({map:GS(v2,_2),roughness:.5,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),a=new St(vr(r),o);return a.receiveShadow=!0,a}const uo=512,Di=128,Bd=.3,Hd=(i,t)=>Math.exp(-(i*i)/(2*t*t));function cw(){const{canvas:i,ctx:t}=Be(uo,Di),e=fr(41),n=Array.from({length:Di},()=>.55+e()*.45),s=n.map((r,o)=>(n[Math.max(0,o-1)]+n[o]*2+n[Math.min(Di-1,o+1)])/4);for(let r=0;r<Di;r++){const o=(r+.5)/Di,a=Math.sin(Math.PI*o)**1.8,l=Hd(o-.5-Bd,.085)+Hd(o-.5+Bd,.085),c=Math.min(1,a*(.55+.5*l)*s[r]),h=Math.round(c*255);t.fillStyle=`rgb(${h},${h},${h})`,t.fillRect(0,r,uo,1)}return Cs(t,uo,Di,{count:26,minR:20,maxR:70,alpha:.28,seed:42}),gr(t,uo,Di,30,43),Gn(i,{colour:!1})}const Vd=$f*Tc,hw=Vd*pr*mr/(1+Vd*Ul/zs);function uw(i,t){const e=jf*pr+Qf*i*i/Rn;return(t.throttle||0)*sp(i)-(t.brake||0)*hw-e}function dw(i,t,{dt:e=1/60,laps:n=2}={}){const s=Vc(i,t),r={ahead:Zt.planAhead,maxSpeed:Zt.maxSpeed},o=i.count,a=new Float32Array(o),l=new Float32Array(o),c=new Float32Array(o);let h=0,u=5;for(;h<i.length*n;){const d=i.wrap(Math.floor(h/i.spacing)),f=Bc(u,Hc(s,i,d,u,r));u=Math.max(.5,u+uw(u,f)*e),h+=u*e,!(h<i.length*(n-1))&&([a[d],l[d],c[d]]=[a[d]+e,l[d]+f.brake*e,c[d]+u*e])}for(let d=0;d<o;d++)a[d]&&([l[d],c[d]]=[l[d]/a[d],c[d]/a[d]]);for(let d=0;d<o;d++)a[d]||([l[d],c[d]]=[l[i.wrap(d-1)],c[i.wrap(d-1)]]);return{brake:l,speed:c}}function fw(i,{minBrake:t,minDrop:e,mergeGap:n},{brake:s,speed:r}){const o=i.count,a=u=>s[i.wrap(u)];let l=0;for(;l<o&&a(l)>0;)l++;if(l===o)return[];const c=Math.round(n/i.spacing),h=[];for(let u=l+1;u<l+o;u++){if(!(a(u)>0))continue;let[d,f]=[u,0];for(let v=u;v<l+o&&v-d<=c;v++)a(v)>0&&([d,f]=[v,Math.max(f,a(v))]);const g=r[i.wrap(u)]-r[i.wrap(d+1)];f>=t&&g>=e&&h.push({start:i.wrap(u),end:i.wrap(d),drop:g,peak:f}),u=d}return h}function pw(i,t,e){const n=[];for(let s=t;;s=i.wrap(s+1))if(n.push(s),s===e||n.length>=i.count)return n}const Gd=(i,t,e)=>{const n=pt((e-i)/(t-i),0,1);return n*n*(3-2*n)};function mw(i,t,e){const n=Math.round(1/i.spacing);return e.map(s=>{let r=0;for(let o=-n;o<=n;o++)r+=t[i.wrap(s+o)];return r/(2*n+1)})}function gw(i,t,e,n,s,r){const o=t.length,a=.5+.5*s(),l=s()*6,c=f=>{const g=f/Math.max(1,o-1),v=.75+.25*Math.sin(l+g*23)*Math.sin(g*9.7+l*2),m=pt(.2+1.3*e[f],0,1);return a*v*m*Gd(0,.1,g)*(1-Gd(.85,1,g))},h=(s()-.5)*.25,u=(f,g)=>n(g)+h*(f/Math.max(1,o-1)),d=new Map(t.map((f,g)=>[f,g]));return Ls(i,t,f=>u(d.get(f),f)-Hi.width/2,f=>u(d.get(f),f)+Hi.width/2,r,{alpha:c})}function vw(i,t){return fw(i,Hi,t).map(e=>pw(i,e.start,e.end))}function _w(i,t,e){const n=fr(i.count),s=dw(i,t),r=[];for(const l of vw(i,s)){if(l.length<8)continue;const c=mw(i,s.brake,l);for(let h=0;h<Hi.streaks;h++){const u=(n()-.5)*2*Hi.spread,d=Math.floor(n()*l.length*.15),f=l.length-Math.floor(n()*l.length*.15);if(!(f-d<6))for(const g of[-1,1]){const v=m=>t[m]+u+g*(Hi.rearTrack/2);r.push(gw(i,l.slice(d,f),c.slice(d,f),v,n,e))}}}const o=new de({color:460552,roughness:.7,opacity:Hi.opacity,transparent:!0,depthWrite:!1,vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-1.5,polygonOffsetUnits:-1.5}),a=new St(r.length?vr(r):new fe,o);return a.receiveShadow=!0,a.renderOrder=1,a}function xw(i,t=5){const e=i.count,n=Math.max(1,Math.round(t/i.spacing)),s=new Float32Array(e);let r=0;for(let o=-n;o<=n;o++)r+=Math.abs(i.curvature[i.wrap(o)]);for(let o=0;o<e;o++)s[o]=pt(r/(2*n+1)*7,0,1),r+=Math.abs(i.curvature[i.wrap(o+n+1)])-Math.abs(i.curvature[i.wrap(o-n)]);return s}function Mw(i,t){const e=new jt,n=i.halfWidth-ql*.5,s=d=>pt(t[d]-ti.width/2,-n,n),r=d=>pt(t[d]+ti.width/2,-n,n),o=xw(i),a=(d,f)=>1-ti.cornerBoost+ti.cornerBoost*o[f],l=(xp+Jo)/2,c=Ls(i,Yp(i),s,r,l,{closed:!0,uPerMetre:1/ti.tile,alpha:a}),h=new de({color:ti.color,roughness:ti.roughness,alphaMap:cw(),opacity:ti.opacity,transparent:!0,depthWrite:!1,vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),u=new St(c,h);return u.receiveShadow=!0,u.renderOrder=1,e.add(u,_w(i,t,l+.001)),e}const yw=[[.52,-.5],[.52,.5],[-.52,-.56],[-.52,.56]];class Sw{constructor(t,e,n){Object.assign(this,{path:t,line:e,curbs:n}),this.rubber=ul.rubberStart}addDistance(t){this.rubber=Math.min(1,this.rubber+t/(this.path.length*ul.rubberLaps))}at(t,e){const n=ul,s=Math.abs(e-this.line[t]),r=n.green+(1-n.green)*this.rubber,o=n.lineGain*this.rubber*Math.exp(-((s/n.lineWidth)**2)),a=n.dust*Ge(n.dustFrom,n.dustFull,s),l=this.curbs.side[t],c=l&&e*l>=this.curbs.inner[t]&&e*l<=this.curbs.outer[t]+.1?n.kerb:1;return r*(1+o-a)*c}wheels(t,e,n){const s=this.path,[r,o]=[-Math.sin(t.yaw),-Math.cos(t.yaw)];for(let a=0;a<4;a++){const[l,c]=yw[a],h=t.x+r*l-o*c,u=t.z+o*l+r*c,d=(h-s.x[e])*s.tx[e]+(u-s.z[e])*s.tz[e],f=s.wrap(e+Math.round(d/s.spacing));n[a]=this.at(f,s.lateral(h,u,f))}return n}}function bw(i,{lineEdge:t,lineMax:e}){const n=i.count,s=Math.max(0,Math.min(e,i.halfWidth-t));let r=new Float64Array(n);for(const o of Ew){const a=Math.max(8,Math.round(i.length/o)),l=Array.from({length:a},(g,v)=>Math.round(v*n/a)%n),c=Float64Array.from(l,g=>r[g]),[h,u]=[new Float64Array(a),new Float64Array(a)],d=g=>{const v=l[g];[h[g],u[g]]=[i.x[v]-i.tz[v]*c[g],i.z[v]+i.tx[v]*c[g]]};for(let g=0;g<a;g++)d(g);const f=g=>(g+a)%a;for(let g=0;g<Tw;g++)for(let v=0;v<a;v++){const[m,p,y,_]=[f(v-2),f(v-1),f(v+1),f(v+2)],b=(4*(h[p]+h[y])-h[m]-h[_])/6,P=(4*(u[p]+u[y])-u[m]-u[_])/6,T=i.lateral(b,P,l[v]);c[v]=Math.max(-s,Math.min(s,c[v]+ww*(T-c[v]))),d(v)}r=Aw(c,l,n)}return Float32Array.from(r)}const Ew=[8,4,2,1],Tw=300,ww=.4;function Aw(i,t,e){const n=new Float64Array(e),s=t.length;for(let r=0;r<s;r++){const[o,a]=[t[r],t[(r+1)%s]],l=(a-o+e)%e||e;for(let c=0;c<l;c++)n[(o+c)%e]=i[r]+(i[(r+1)%s]-i[r])*c/l}return n}function Rw(i,t,e,n){let s=0;for(let r=0;r<=e;r+=3)s=Math.max(s,Math.abs(i.curvature[i.wrap(t+r)]));return n*Math.max(0,Math.min(1,1-s*ue.lineTaper))}const js=new R;function en(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;js.copy(t),js[n]=0,js.normalize();const c=.5*o/(o+a),h=1-js.angleTo(i)/l;return Math.sign(js[e])===1?h*c:a/(o+a)+c+c*(1-h)}class Cw extends _e{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new R,l=new R,c=new R(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new R,v=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=en(g,l,"z","y",r,n),d[p+1]=1-en(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-en(g,l,"z","y",r,n),d[p+1]=1-en(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-en(g,l,"x","z",r,t),d[p+1]=en(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-en(g,l,"x","z",r,t),d[p+1]=1-en(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-en(g,l,"x","y",r,t),d[p+1]=1-en(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=en(g,l,"x","y",r,t),d[p+1]=1-en(g,l,"y","x",r,e);break}}}function Pw(i,t){const e=i.closed?[...i,i[0]]:i,n=[0];for(let l=1;l<e.length;l++)n.push(n[l-1]+Math.hypot(e[l].x-e[l-1].x,e[l].z-e[l-1].z));const s=n.at(-1),r=Math.max(1,Math.round(s/Mp)),o=s/r;let a=1;for(let l=0;l<r;l++){const c=(l+.5)*o;for(;a<e.length-1&&n[a]<c;)a++;const h=e[a-1],u=e[a],d=(c-n[a-1])/Math.max(1e-6,n[a]-n[a-1]);t.push({x:h.x+(u.x-h.x)*d,z:h.z+(u.z-h.z)*d,angle:Math.atan2(-(u.z-h.z),u.x-h.x)})}}function Lw(i){const t=[];for(const d of HE(i))Pw(d,t);const e=BE(i),n=new Cw(Mp*.97,xd,kc,1,.06),s=Ze.detail?{map:YT(),...$T()}:{},r=new de({roughness:s.roughnessMap?1:.45,metalness:0,...s}),o=new Mc(n,r,t.length),a=new Pt,l=new _i,c=new R(0,1,0),h=new R(1,1,1),u=x2.map(d=>new _t(d));return t.forEach((d,f)=>{l.setFromAxisAngle(c,d.angle),o.setMatrixAt(f,a.compose(new R(d.x,xd/2,d.z),l,h)),o.setColorAt(f,u[f%u.length])}),o.castShadow=fM,o.receiveShadow=!0,{mesh:o,faces:e,blocks:t}}function $p(i){return[[i.width,i.cx,i.minZ,0],[i.width,i.cx,i.maxZ,Math.PI],[i.depth,i.minX,i.cz,Math.PI/2],[i.depth,i.maxX,i.cz,-Math.PI/2]]}function Iw(i,t){const e=new jt,n=GT();n.anisotropy=t,$p(i).forEach(([r,o,a,l],c)=>{const h=n.clone();h.repeat.set(r/tw,1),h.needsUpdate=!0;const u=Ze.detail?qT().normalMap:null;u==null||u.repeat.copy(h.repeat);const d=new St(new Ue(r,co),new de({map:h,normalMap:u,roughness:.62,metalness:.35}));d.position.set(o,co/2,a),d.rotation.y=l,d.receiveShadow=!0,e.add(d);const f=new _t(ds.colors[c%ds.colors.length]),g=new St(new _e(r-2,ds.thickness,ds.thickness),new de({color:0,emissive:f,emissiveIntensity:ds.intensity}));g.position.set(0,ds.y-co/2,.12),d.add(g)});const s=new St(new Ue(i.width,i.depth),new de({color:1316379,roughness:.95}));return s.rotation.x=Math.PI/2,s.position.set(i.cx,co,i.cz),e.add(s),e}function Zs(i,t,e){const n=new Mc(i,t,e.length),s=new Pt;return e.forEach(([r,o,a,l=0],c)=>{s.makeRotationY(l).setPosition(r,o,a),n.setMatrixAt(c,s)}),n}function vl(i,t,e,n){const s=t-i-2*n,r=Math.max(1,Math.floor(s/e)+1),o=i+n+(s-(r-1)*e)/2;return Array.from({length:r},(a,l)=>o+l*e)}function Dw(i){const t=new jt,e=new de({color:2895926,roughness:.5,metalness:.7}),n=vl(i.minX,i.maxX,Od,4);t.add(Zs(new _e(.35,.8,i.depth),e,n.map(d=>[d,Fd,i.cz])));const s=vl(i.minZ,i.maxZ,sn.spacingZ,5);t.add(Zs(new _e(i.width,.25,.25),e,s.map(d=>[i.cx,Fd+.3,d])));const r=vl(i.minX,i.maxX,sn.spacingX,6).map(d=>d+Od/2),o=[];for(const d of r)for(const f of s)d<i.maxX-3&&o.push([d,sn.y,f]);const a=new de({color:0,emissive:new _t(sn.color),emissiveIntensity:sn.intensity}),l=new _e(sn.width,.08,sn.depth);t.add(Zs(l,a,o));const c=new _e(sn.width+.2,.14,sn.depth+.2);t.add(Zs(c,e,o.map(([d,f,g])=>[d,f+.1,g])));const h=new Mi({map:hp("rgba(255,255,255,1)"),color:new _t(16773590).multiplyScalar(.07),transparent:!0,blending:rr,depthWrite:!1}),u=new Ue(14,11).rotateX(-Math.PI/2);return t.add(Zs(u,h,o.map(([d,,f])=>[d,.03,f]))),{group:t,lights:o}}const Nw=()=>new ce({uniforms:{uColor:{value:new _t(sn.color).multiplyScalar(Vf.intensity)}},vertexShader:`
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
      }`,transparent:!0,depthWrite:!1,blending:lc,blendSrc:po,blendDst:po,blendSrcAlpha:gs,blendDstAlpha:po,side:un});function Uw(i){const t=sn.y-.1,e=new ks(.5,Vf.spread,t,20,1,!0).translate(0,-t/2,0),n=new Mc(e,Nw(),i.length),s=new Pt,r=new R(sn.width/1.2,1,1);return i.forEach(([o,a,l],c)=>n.setMatrixAt(c,s.compose(new R(o,a-.1,l),new _i,r))),n.frustumCulled=!1,n.renderOrder=3,n}function Ow(i){const t=new jt,e=ew.map(jT),[n,s]=nw;let r=0;for(const[o,a,l,c]of $p(i)){const h=Math.max(1,Math.floor(o/32));for(let u=0;u<h;u++){const d=e[r++%e.length],f=new St(new Ue(n,s),new de({map:d,emissiveMap:d,emissive:16777215,emissiveIntensity:.45,roughness:.55})),g=(u-(h-1)/2)*(o/h),v=.15;f.position.set(a+Math.cos(c)*g+Math.sin(c)*v,iw,l-Math.sin(c)*g+Math.cos(c)*v),f.rotation.y=c,t.add(f)}}return t}function Fw(i,t){const e=new R(...Oi.offset),n=e.clone().normalize(),s=new R(0,1,0).cross(n).normalize(),r=n.clone().cross(s),o=2*t/Il,a=new R,l=c=>Math.round(c/o)*o;return(c,h)=>{a.set(c,0,h);const[u,d,f]=[l(a.dot(s)),l(a.dot(r)),a.dot(n)];a.copy(s).multiplyScalar(u).addScaledVector(r,d).addScaledVector(n,f),i.target.position.copy(a),i.position.copy(a).add(e)}}function kw(i){const t=new jt;t.add(new K1(Ya.sky,Ya.ground,Ya.intensity));for(const o of cM){const a=new Vu(o.color,o.intensity);a.position.set(...o.direction).normalize().multiplyScalar(50).add(new R(i.cx,0,i.cz)),a.target.position.set(i.cx,0,i.cz),t.add(a,a.target)}const e=new Vu(Oi.color,Oi.intensity);e.position.set(i.cx+Oi.offset[0],Oi.offset[1],i.cz+Oi.offset[2]),e.target.position.set(i.cx,0,i.cz),e.castShadow=!0,e.shadow.mapSize.set(Il,Il),e.shadow.bias=hM,e.shadow.normalBias=uM;const n=Math.max(i.width,i.depth)/2+2,s=Math.min(n,dM.maxHalf),r=e.shadow.camera;return[r.left,r.right,r.top,r.bottom]=[-s,s,s,-s],r.near=10,r.far=Oi.offset[1]+40,r.updateProjectionMatrix(),t.add(e,e.target),{group:t,follow:s<n?Fw(e,s):()=>{}}}const zw=new _t(16719661),Bw=new _t(2883434),Wd=new _t(0);class Hw{constructor(t,e){const n=y2,s=t.halfWidth+Fc+.9;this.group=new jt,this.group.position.set(t.x[e],0,t.z[e]),this.group.rotation.y=t.heading(e);const r=new de({color:2303532,roughness:.45,metalness:.8}),o=(c,h,u,d,f,g,v=r)=>{const m=new St(new _e(c,h,u),v);return m.position.set(d,f,g),m.castShadow=!0,this.group.add(m),m};o(.3,n+.4,.3,-s,(n+.4)/2,0),o(.3,n+.4,.3,s,(n+.4)/2,0),o(s*2+.3,.45,.4,0,n,0);const a=new de({map:ZT(),emissive:16777215,roughness:.6});a.emissiveMap=a.map,a.emissiveIntensity=.5;const l=new St(new Ue(s*1.6,s*1.6/6.4),a);l.position.set(0,n+.75,.21),this.group.add(l),o(2.4,.55,.25,0,n-.55,.12),this.bulbs=[];for(let c=0;c<5;c++){const h=new de({color:789518,emissive:Wd,roughness:.3}),u=new St(new ks(.15,.15,.06,20),h);u.rotation.x=Math.PI/2,u.position.set((c-2)*.44,n-.55,.26),this.group.add(u),this.bulbs.push(h)}}setLights(t,e){this.bulbs.forEach((n,s)=>{const r=e==="go"||e==="red"&&s<t;n.emissive.copy(r?e==="go"?Bw:zw:Wd),n.emissiveIntensity=r?3.6:0})}}function Vw(i,t=22,e=9,n=5.2){const s=[],r=Math.max(1,Math.round(t/i.spacing));for(let o=0;o<i.count;o+=r){const a=i.curvature[o]>0?-1:1;for(const l of[a,-a]){const c=i.offset(o,l*e);if(!i.within(c.x,c.z,e-.5)){s.push({x:c.x,y:n,z:c.z});break}}}return s}const _l=34;function Gw(i,t,e,n){const[s,r]=[Math.ceil(t.width),Math.ceil(t.depth)],o=new Uint8Array(s*r),a=Math.ceil(i.halfWidth+2.5),l=Math.max(1,Math.round(1/i.spacing));for(let f=0;f<i.count;f+=l){const[g,v]=[Math.floor(i.x[f]-t.minX),Math.floor(i.z[f]-t.minZ)];for(let m=-a;m<=a;m++)for(let p=-a;p<=a;p++){const[y,_]=[g+m,v+p];y>=0&&_>=0&&y<s&&_<r&&m*m+p*p<=a*a&&(o[_*s+y]=1)}}const c=(f,g)=>{const[v,m]=[Math.floor(f-e/2-t.minX),Math.floor(g-n/2-t.minZ)];if(v<2||m<2||v+e>s-2||m+n>r-2)return!1;for(let p=m;p<=m+n;p++)for(let y=v;y<=v+e;y++)if(o[p*s+y])return!1;return!0},h=i.x.reduce((f,g)=>f+g,0)/i.count,u=i.z.reduce((f,g)=>f+g,0)/i.count,d=[];for(let f=t.minX;f<=t.maxX;f+=2)for(let g=t.minZ;g<=t.maxZ;g+=2)d.push({x:f,z:g,d:(f-h)**2+(g-u)**2});return d.sort((f,g)=>f.d-g.d),c(h,u)?{x:h,z:u}:d.find(f=>c(f.x,f.z))??null}function Ww(i,t){const e=zp(i),n=e.nearest(...i.waypoints[i.startIndex]),s=e.wrap(n-Math.round(yp/e.spacing)),r=Lw(e),o=VE(r.faces,QT+kc),a=new Hw(e,n),l=Dw(o),c=Gw(e,o,_l,_l/4),h=bw(e,ue),u=kw(o),d=new jt;d.add(rw(o,t),...c?[ow(c.x,c.z,_l)]:[],aw(e,n,s,t),Mw(e,h),lw(e),r.mesh,Iw(o,t),l.group,Ow(o),u.group,...Ze.haze?[Uw(l.lights)]:[],a.group),l.group.userData.ceiling=!0;const f=new BT([...r.faces,GE(o)],aS),g=S2(e),v=new Sw(e,h,g);return{track:i,group:d,path:e,line:h,curbs:g,surface:v,startIndex:n,gridIndex:s,bounds:o,collider:f,gantry:a,rig:l,lighting:u,anchors:Vw(e)}}function $c(i){const t=new Set,e=n=>{var s;!n||t.has(n)||(t.add(n),(s=n.dispose)==null||s.call(n))};i.traverse(n=>{var s,r;e(n.geometry);for(const o of[n.material].flat())if(o){for(const a of Object.values(o))a!=null&&a.isTexture&&e(a);e(o)}n.isLight&&((r=(s=n.shadow)==null?void 0:s.dispose)==null||r.call(s)),n.isInstancedMesh&&n.dispose()})}function Xw(i){const{bus:t,sfx:e,camera:n,screens:s}=i;t.on("light",()=>e.beep("red")),t.on("go",()=>e.beep("go")),t.on("lap",r=>{if(e.chime(r.isBest),r.isBest){const{session:o}=i,a=i.recorder.take()??i.record.ghost;i.record={best:r.time,splits:o.timer.bestSplits,ghost:a},H2(i.signature,r.time,o.timer.bestSplits,a,i.recordKey),o.mode==="timeattack"&&i.ghost.set(a),s.setBest(r.time)}}),t.on("finish",()=>{e.chime(i.field.position(i.field.player)===1),n.broadcast(),s.showOnlinePause(!1),s.showResults(!0),i.hud.setVisible(!1)}),t.on("impact",r=>{e.impact(r),n.shake(Math.min(.85,r/9))}),t.on("pause",r=>s.showPause(r))}function qw(i,t,e,n,s=0,r=0){let o=1/0;for(const c of t)c.ahead>.5&&c.ahead<ue.blockAhead&&Math.abs(c.lateral-e)<ue.blockLateral&&(o=Math.min(o,c.speed-.4));const a=t[i.target];(!a||!Yw(a,e))&&Object.assign(i,$w(t,e,n));const l=t[i.target];return i.wait=Math.max(0,(i.wait??0)-s),!l||l.ahead>=ue.pullOutAhead||i.wait>0?{pass:0,speedCap:o}:(i.out||(i.side=r||(l.lateral>0?-1:1)),i.out=(i.out??0)+s,i.out>ue.passGiveUp&&l.ahead>ue.passAlongside?(Object.assign(i,{out:0,wait:ue.passRetry}),{pass:0,speedCap:o}):{pass:i.side*ue.passOffset,speedCap:o})}const Yw=(i,t)=>i.ahead>-1.5&&i.ahead<=ue.sightKeep&&Math.abs(i.lateral-t)<=ue.passOffset+ue.lineMax;function $w(i,t,e){let n=-1;return i.forEach((s,r)=>{s.ahead<=.5||s.ahead>ue.sightAhead||Math.abs(s.lateral-t)>ue.sightLateral||s.speed>=e+1.5||(n<0||s.ahead<i[n].ahead)&&(n=r)}),n<0?{target:-1,side:0,out:0,wait:0}:{target:n,side:0,out:0}}function Kw(i,t){let e=0;for(let n=0;n<ue.passLook;n+=1)e+=i.curvature[i.wrap(t+Math.round(n/i.spacing))];return Math.abs(e)>ue.passTurn?Math.sign(e):0}const Xd={throttle:0,brake:0,steer:0,handbrake:!1};class jw{constructor(t,e,n,s=1){this.profile=n,this.difficulty=1,this.setTrack(t,e,s)}setTrack(t,e,n=1){Object.assign(this,{path:t,line:e,trackPace:n,plan:t&&Vc(t,e)}),this.reset()}reset(t=Math.random){this.index=-1,this.pass=0,this.passMemo={target:-1,side:0,out:0,wait:0},this.stuck=0,this.wait=this.profile.react+t()*.12,this.form=1+(t()-.5)*ue.formSpread}controls(t,e,n,s,r,o=!0){if(!o||(this.wait-=r)>0)return Xd;const a=this.path;this.index=a.nearest(t.x,t.z,this.index);const l=a.lateral(t.x,t.z,this.index),c=this.profile.skill*s*this.form,{pass:h,speedCap:u}=qw(this.passMemo,n,l,e,r,Kw(a,this.index));this.pass=Ae(this.pass,h,ue.offsetRate,r);const d=Math.round((Zt.lookAhead+e*Zt.lookSpeed)/a.spacing),f=a.wrap(this.index+d),g=Rw(a,this.index,d,this.profile.line),v=pt(this.line[f]+g+this.pass,-a.halfWidth+.85,a.halfWidth-.85),m=a.offset(f,v),p=Math.abs(this.pass)>1?1+ue.attack:1,y=Hc(this.plan,a,this.index,e,{skill:c*p*this.trackPace*this.difficulty,ahead:Zt.planAhead,maxSpeed:Zt.maxSpeed*c}),_=Math.min(y,u),b=Rp(t,m,e);return this.stuck=e<1?this.stuck+r:0,{...Bc(e,_,b,t.slipAngle),steer:b,handbrake:!1,reset:this.stuck>ue.stuckTime}}}function Zw(i,t,e){const n=new Array(i.length).fill(0),s=t*2;for(let r=0;r<i.length;r++)for(let o=r+1;o<i.length;o++){const a=i[r],l=i[o],c=l.x-a.x,h=l.z-a.z,u=c*c+h*h;if(u>=s*s||u<1e-8)continue;const d=Math.sqrt(u),[f,g]=[c/d,h/d],v=(s-d)/2;a.x-=f*v,a.z-=g*v,l.x+=f*v,l.z+=g*v;const m=(a.vx-l.vx)*f+(a.vz-l.vz)*g;if(m<=0)continue;const p=m*(1+e)/2;a.vx-=p*f,a.vz-=p*g,l.vx+=p*f,l.vz+=p*g,n[r]=Math.max(n[r],m),n[o]=Math.max(n[o],m)}return n}function Jw(i,t,e){return i.map(n=>{const s=pi(n.yaw);let r=0;for(const o of i){if(o===n)continue;const a=o.x-n.x,l=o.z-n.z,c=a*s.x+l*s.z;if(c<1.2||c>t)continue;const h=Math.abs(a*s.z-l*s.x);h>e||(r=Math.max(r,(1-c/t)*(1-h/e)))}return Math.min(1,r*1.6)})}function Qw(i,t,e){const n=i.count;return e.map(s=>{let r=s.index-t.index;return r=r>n/2?r-n:r<-n/2?r+n:r,{ahead:r*i.spacing,lateral:i.lateral(s.state.x,s.state.z,s.index),speed:s.speed}})}const tA=i=>1+pt(i/ue.catchUpGap,-1,1)*ue.catchUp;function eA(i,t,e=Math.random){const n=Array.from({length:i+1},(s,r)=>r).filter(s=>s!==t);for(let s=n.length-1;s>0;s--){const r=Math.floor(e()*(s+1));[n[s],n[r]]=[n[r],n[s]]}return n}const nA=i=>P2[i]??1;function iA(i){return Si.map(t=>{const e=new Uc(null,{number:t.number,livery:{body:t.body,suit:t.suit,helmet:t.body,helmetStripe:t.stripe}});return i.add(e.object3d),{profile:t,kart:e,driver:new jw(null,null,t),fx:new Oc(i),kerb:new Ep,index:-1}})}function Kp(i){const{path:t,collider:e,line:n,track:s,surface:r}=i.world;i.kart.collider=e,i.kart.surface=r;for(const o of i.rivals)o.kart.collider=e,o.kart.surface=r,o.driver.setTrack(t,n,nA(s.id)),o.driver.difficulty=mi[i.difficulty].pace;i.autopilot.setPath(t)}function Kc(i,t){const{path:e,startIndex:n,gridIndex:s}=i.world,r=t?$l(e,n,ir.playerSlot):{x:e.x[s],z:e.z[s],yaw:e.heading(s),i:s};i.kart.place(r.x,r.z,r.yaw),i.trackIndex=r.i;const o=eA(i.rivals.length,ir.playerSlot);i.rivals.forEach((a,l)=>{const c=$l(e,n,o[l]);a.kart.place(c.x,c.z,c.yaw),a.kart.object3d.visible=t,a.index=c.i,a.driver.reset(),a.fx.reset(),a.kerb.reset()}),i.fx.reset(),i.kerb.reset()}function jp(i,t,e,n=i.rivals,s=[]){var c;const{path:r}=i.world,o=[{kart:i.kart,index:i.trackIndex},...n],a=h=>({state:h.kart.state,index:h.index,speed:h.kart.telemetry.speed}),l=i.field.player.progress;for(const h of n){const u=h.kart.state,d=Qw(r,h,[...o.filter(m=>m!==h).map(a),...s]),f=(l-(((c=i.field.entries.find(m=>m.profile===h.profile))==null?void 0:c.progress)??l))*r.spacing,g=tA(f),v=h.driver.controls(u,h.kart.telemetry.speed,d,g,t,e);v.reset?rA(i,h):h.kart.update(v,t),h.index=r.nearest(h.kart.state.x,h.kart.state.z,h.index),h.kerb.update(h.kart,r,i.world.curbs,h.index,t),h.fx.update(h.kart,t,i.camera.three,i.renderer.three.domElement.height)}sA(o.map(h=>h.kart),s.map(h=>h.state))}function sA(i,t){const e=i.map(r=>r.state);for(const r of t)e.push({...r});const n=Zw(e,Sd.radius,Sd.restitution),s=Jw(e,yd.range,yd.lateral);i.forEach((r,o)=>{r.draft=s[o],n[o]>r.telemetry.impact&&(r.telemetry.impact=n[o],Object.assign(r.contact,{x:r.state.x,z:r.state.z,nx:0,nz:0}))})}function rA(i,t){const{path:e}=i.world,n=e.nearest(t.kart.state.x,t.kart.state.z,t.index),s=e.offset(n,t.driver.line[n]);t.kart.place(s.x,s.z,e.heading(n)),t.driver.stuck=0,t.index=n}function Mo(i,t=i.session.mode,e){i.audio.unlock(),Kc(i,t==="race"),i.field.reset(),i.recorder.reset(),i.ghost.set(i.record.ghost),i.camera.follow(i.kart),i.session.startCountdown(t,e),i.screens.showTitle(!1),i.screens.showPause(!1),i.screens.showResults(!1),i.hud.setMode(t),i.hud.clearToasts(),i.hud.setVisible(!0)}function nc(i){i.session.toTitle(),Kc(i,!0),i.autopilot.index=-1,i.camera.broadcast(),i.screens.showPause(!1),i.screens.showResults(!1),i.screens.showTitle(!0),i.hud.clearToasts(),i.hud.setVisible(!1)}function Zp(i){const{path:t}=i.world,{x:e,z:n}=i.kart.state,s=t.nearest(e,n,i.trackIndex);i.kart.place(t.x[s],t.z[s],t.heading(s)),i.bus.emit("reset")}function Jp(i){return i.action("raceAgain")||i.action("reset")?"again":i.action("nextRace")?"next":i.action("pause")||i.action("quit")?"menu":null}function oA(i){var a;const{input:t,camera:e,bus:n,screens:s}=i,r=i.session,o=r.state;if(o==="title"){if(s.lobby.visible)return;t.action("left")&&s.cycleMode(-1),t.action("right")&&s.cycleMode(1),t.action("level")&&i.setDifficulty(s.cycleLevel()),t.action("graphics")&&((a=s.graphics)==null||a.cycle()),t.action("prevTrack")&&i.selectTrack(-1),t.action("nextTrack")&&i.selectTrack(1),t.action("start")&&(s.mode==="online"?s.openLobby():Mo(i,s.mode))}else if(r.mode==="online")i.online.handle(t,o);else if(o==="finished"){const l=Jp(t);l==="next"&&i.selectTrack(1),l==="again"||l==="next"?Mo(i):l==="menu"&&nc(i)}else{if(t.action("pause")&&r.togglePause(),t.action("quit")&&o==="paused")return nc(i);t.action("reset")&&(o==="paused"?Mo(i):o==="racing"&&Zp(i))}o!=="title"&&t.action("camera")&&n.emit("camera",e.cycleView()),t.action("mute")&&n.emit("mute",i.audio.toggleMute()),t.action("debug")&&i.debug.toggle()}function aA(i,t,{paused:e,state:n,grandPrix:s,wallHit:r}){const{kart:o,input:a}=i,l=o.telemetry,c=!e,h=n==="countdown"?a.controls().throttle:l.throttle;i.engine.update(l,h,t,c);const u=i.online.active?i.online.others:s?i.rivals:[];i.pack.update(o.state,u.map(d=>d.kart),t,c),i.tyres.update(l,e?0:t,c,e?0:r),i.rumble.update(i.kerb,c)}const lA={throttle:0,brake:0,steer:0,handbrake:!1},cA=1.5,hA=.18,uA=.6;function dA(i,t){const e=i.kart.telemetry.speed;return t==="title"?i.autopilot.controls(i.kart.state,e):t==="finished"?i.autopilot.controls(i.kart.state,e,R2.maxSpeed):t==="racing"?i.input.controls():lA}function fA(i,t,e,n){if(e!=="racing"||!t.throttleDigital)return i.playerThrottle=t.throttle,t;const{kart:s}=i;return i.playerThrottle=fS(i.playerThrottle??0,t.throttle,s.state.slipAngle,n,s.telemetry.speed),{...t,throttle:i.playerThrottle}}function pA(i){let t=performance.now();document.addEventListener("visibilitychange",()=>t=performance.now());const e=n=>{const s=Math.min(.05,(n-t)/1e3);t=n,s>0&&i.step(s),i.post.render(Math.max(s,0)),requestAnimationFrame(e)};requestAnimationFrame(e)}function Qp(i,t){const e=i.field.position(i.field.player);e!==i.heldPosition&&([i.heldPosition,i.positionAge]=[e,0]),i.positionAge+=t,i.positionAge>=uA&&e!==i.lastPosition&&(e<i.lastPosition&&i.session.state==="racing"&&i.session.timer.lap>=1&&i.bus.emit("overtake",e),i.lastPosition=e)}function mA(i,t){i.input.poll(),oA(i);const{input:e,session:n,kart:s,world:r,camera:o}=i,a=n.state,l=a==="paused",c=n.mode==="race"||a==="title";let h=0;if(!l){if(s.update(fA(i,i.controlsFor(a),a,t),t),h=s.telemetry.impact,c&&jp(i,t,a!=="countdown"),i.trackIndex=r.path.nearest(s.state.x,s.state.z,i.trackIndex),i.kerb.update(s,r.path,r.curbs,i.trackIndex,t),n.update(t,i.trackIndex),a==="racing"&&i.recorder.update(n.timer.lap,n.timer.lapTime(n.clock),s.state),n.mode==="race"&&(a==="racing"||a==="finished")){const d=i.field.update([i.trackIndex,...i.rivals.map(f=>f.index)],n.clock);a==="racing"&&d.some(f=>f.isPlayer)&&n.finish(),Qp(i,t)}i.online.step(t),i.fx.update(s,t,o.three,i.renderer.three.domElement.height),i.impactCooldown-=t,s.telemetry.impact>cA&&i.impactCooldown<=0&&(i.bus.emit("impact",s.telemetry.impact),i.impactCooldown=hA)}const u=n.view;i.ghost.update(u.lapTime,n.mode==="timeattack"&&a==="racing"&&u.lap>=1,l?0:t),r.gantry.setLights(n.lights,n.lightsMode),r.lighting.follow(s.state.x,s.state.z),o.update(s,l?0:t,i.kerb),i.post.setFocus(o.mode==="broadcast"?o.three.position.distanceTo(s.object3d.position):null),s.model.setFirstPerson(o.mode==="follow"&&o.view==="cockpit"),aA(i,t,{paused:l,state:a,grandPrix:c,wallHit:h}),i.hud.update(u,s,i),i.screens.update(i),i.debug.update(t,i),e.endFrame()}function gA(i,t,e){const n=r=>r?e.find(o=>o.id===r.trim().toLowerCase()):void 0,s=n(i);return{track:s??n(t)??e[0],fromUrl:!!s,unknown:i&&!s?i:null}}function vA(i){let t=2166136261;for(const e of i){const n=Math.round(e*100);for(let s=0;s<32;s+=8)t=Math.imul(t^n>>>s&255,16777619)}return(t>>>0).toString(16).padStart(8,"0")}function _A(i,t,e){const n=`${t.count}:${t.length.toFixed(1)}`;return i.id==="tbc"?n:`${n}:${e}:${(t.halfWidth*2).toFixed(2)}:${vA(i.waypoints.flat())}`}const qd=i=>{const t=[...i].sort((n,s)=>n-s),e=t.length>>1;return t.length%2?t[e]:(t[e-1]+t[e])/2};class xA{constructor({window:t=gT,best:e=vT,enough:n=Bp}={}){this.window=t,this.best=e,this.enough=n,this.samples=[],this.offset=0,this.rtt=0}get ready(){return this.samples.length>=this.enough}sample(t,e,n){const s=n-t;if(!(s>=0))return;this.samples.push({rtt:s,offset:e-(t+n)/2}),this.samples.length>this.window&&this.samples.shift();const r=[...this.samples].sort((o,a)=>o.rtt-a.rtt).slice(0,this.best);this.offset=qd(r.map(o=>o.offset)),this.rtt=qd(r.map(o=>o.rtt))}hostNow(t){return t+this.offset}}const Is=(i,t)=>e=>typeof e=="number"&&Number.isFinite(e)&&e>=i&&e<=t,ui=(i,t)=>e=>Number.isInteger(e)&&e>=i&&e<=t,tm=i=>typeof i=="boolean",jc=i=>t=>i.includes(t),ic=i=>t=>t===null||i(t),em=i=>t=>t===void 0||i(t),bi=(i,t=null)=>e=>typeof e=="string"&&[...e].length<=i&&(!t||t.test(e)),MA=(i,t)=>e=>Array.isArray(e)&&e.length===t&&e.every(i),yo=(i,t,e=0)=>n=>Array.isArray(n)&&n.length>=e&&n.length<=t&&n.every(i),yA=i=>typeof i=="object"&&i!==null&&!Array.isArray(i)&&Object.getPrototypeOf(i)===Object.prototype,Ds=i=>{const t=Object.keys(i);return e=>yA(e)&&Object.keys(e).every(n=>t.includes(n))&&t.every(n=>i[n](e[n]))},SA=new RegExp(`^[${Fo}]{${Mr}}$`);function bA(i=Math.random){let t="";for(let e=0;e<Mr;e++)t+=Fo[Math.floor(i()*Fo.length)];return t}const EA=i=>typeof i=="string"&&SA.test(i),Yd=i=>aT+i,TA=["full","version","racing"],ms=Is(-1e9,1e9),Bo=Is(0,1e5),sc=bi(2,/^p[0-5]$/),na=bi(2,/^(p[0-5]|a[0-4])$/),Zc=bi(Qo,/^[^\u0000-\u001f\u007f-\u009f<>]+$/u),nm=bi(3,/^[A-Z0-9]{3}$/),im=bi(3,/^[0-9]{1,3}$/),sm=ui(0,16777215),rm=bi(24,/^[a-z0-9-]+$/),om=jc(Object.keys(mi)),rc=[Id,Id,4,ml,ml,4,ml,4],wA=rc.map(i=>Is(-i,i)),AA=i=>Array.isArray(i)&&i.length===uT&&i.every((t,e)=>wA[e](t)),$d={id:na,t:ms,s:AA,c:MA(Is(-1,1),dT),i:ui(0,1e5),p:Is(-1e7,1e7),lap:ui(0,999)},RA=Ds({id:sc,name:Zc,livery:sm,number:im,code:nm,host:tm}),Kd={players:yo(RA,Ne,1),track:rm,level:om},CA=Ds({id:na,kind:jc(["human","ai"]),name:Zc,code:nm,livery:sm,number:im,slot:ui(0,Ne-1),rival:em(ui(0,Ne-2))}),PA=Ds({id:na,time:ic(Bo),best:ic(Bo),dnf:tm}),Ye=i=>Ds({type:bi(8),...i}),jd={hello:Ye({v:ui(0,1e6),name:Zc}),welcome:Ye({v:ui(0,1e6),you:sc,room:EA,lobby:Ds(Kd)}),refuse:Ye({reason:jc(TA)}),lobby:Ye(Kd),ping:Ye({t0:ms}),pong:Ye({t0:ms,th:ms}),start:Ye({track:rm,level:om,laps:ui(1,99),roster:yo(CA,Ne,1),countdownAt:ms,hold:Is(0,5)}),kart:Ye($d),snap:Ye({th:ms,karts:yo(Ds($d),Ne)}),finish:Ye({id:na,time:Bo,best:ic(Bo)}),results:Ye({entries:yo(PA,Ne)}),left:Ye({id:sc}),bye:Ye({reason:em(bi(16,/^[a-z-]+$/))})},Ie={hello:(i,t=ko)=>({type:"hello",v:t,name:i}),welcome:(i,t,e)=>({type:"welcome",v:ko,you:i,room:t,lobby:e}),refuse:i=>({type:"refuse",reason:i}),lobby:({players:i,track:t,level:e})=>({type:"lobby",players:i,track:t,level:e}),ping:i=>({type:"ping",t0:i}),pong:(i,t)=>({type:"pong",t0:i,th:t}),start:({track:i,level:t,laps:e,roster:n,countdownAt:s,hold:r})=>({type:"start",track:i,level:t,laps:e,roster:n,countdownAt:s,hold:r}),kart:i=>({type:"kart",...i}),snap:(i,t)=>({type:"snap",th:i,karts:t}),finish:(i,t,e)=>({type:"finish",id:i,time:t,best:e}),results:i=>({type:"results",entries:i}),left:i=>({type:"left",id:i}),bye:i=>i?{type:"bye",reason:i}:{type:"bye"}};function LA(i){let t=i;try{const n=typeof i=="string"?i:JSON.stringify(i);if(typeof n!="string"||n.length>lT)return null;typeof i=="string"&&(t=JSON.parse(i))}catch{return null}const e=t&&Object.hasOwn(jd,t.type)?jd[t.type]:null;return e&&e(t)?t:null}const IA=Si.map(i=>i.name),DA=[...Si.map(i=>i.code),"YOU"],Zd=(i,t)=>i.toLocaleLowerCase()===t.toLocaleLowerCase();function NA(i){for(let t=0;t<Ne;t++)if(!i.some(e=>e.id===`p${t}`))return`p${t}`;return null}function UA(i,t){const e=Wc(i).trim()||"Driver",n=s=>IA.some(r=>Zd(r,s))||t.some(r=>Zd(r.name,s));if(!n(e))return e;for(let s=2;s<=Ne+1;s++){const r=` ${s}`,o=[...e].slice(0,Qo-r.length).join("").trimEnd()+r;if(!n(o))return o}return e}function OA(i,t){const n=(i.normalize("NFD").toUpperCase().replace(/[^A-Z]/g,"")+"DRV").slice(0,3),s=r=>DA.includes(r)||t.some(o=>o.code===r);if(!s(n))return n;for(let r=2;r<=99;r++){const o=n.slice(0,3-String(r).length)+r;if(!s(o))return o}return n}function FA(i,t){return i==="p0"?Kl:jl.find(e=>!t.some(n=>n.livery===e.body))??jl[0]}function am(i,t,e){const n=UA(t,e),{body:s,number:r}=FA(i,e);return{id:i,name:n,code:OA(n,e),livery:s,number:r,host:i==="p0"}}const kA=i=>[Kl,...jl,...Si].find(t=>t.body===i)??Kl;function zA(i,t=Math.random){const e=[...Array(Ne).keys()];for(let r=e.length-1;r>0;r--){const o=Math.floor(t()*(r+1));[e[r],e[o]]=[e[o],e[r]]}const s=[...i].sort((r,o)=>r.id.localeCompare(o.id)).map(({id:r,name:o,code:a,livery:l,number:c})=>({id:r,kind:"human",name:o,code:a,livery:l,number:c}));for(let r=0;s.length<Ne;r++){const{name:o,code:a,body:l,number:c}=Si[r];s.push({id:`a${r}`,kind:"ai",name:o,code:a,livery:l,number:c,rival:r})}return s.forEach((r,o)=>r.slot=e[o]),s}const BA=["kart","finish"],lm=({state:{players:i,track:t,level:e}})=>({players:i,track:t,level:e}),Jc=i=>i.broadcast(Ie.lobby(lm(i))),xs={open(i){i.set({phase:"room",players:[am("p0",i.state.name,[])]})},peer(i,t){i.peers.set(t,null),i.heard.set(t,i.now())},message(i,t,e){if(!i.peers.has(t)&&e.type==="hello"&&xs.peer(i,t),!i.peers.has(t))return;i.heard.set(t,i.now());const n=i.peers.get(t);if(e.type==="hello")return n?void 0:HA(i,t,e);n&&(e.type==="ping"?VA(i,t,e):e.type==="bye"?xl(i,t):BA.includes(e.type)&&e.id===n&&i.bus.emit("race",{from:n,msg:e}))},close:(i,t)=>xl(i,t),update(i,t){for(const[e,n]of i.peers)t-i.heard.get(e)>(n?Hp:Xc)&&xl(i,e);i.waiting&&xs.start(i,i.waiting)},setLobby(i,{track:t=i.state.track,level:e=i.state.level}){i.set({track:t,level:e}),Jc(i)},start(i,t){if(i.waiting=GA(i)?null:t,i.waiting)return null;const{laps:e,hold:n}=t,{track:s,level:r,players:o}=i.state,a=zA(o,i.rand),l=i.now()+TT,c=Ie.start({track:s,level:r,laps:e,roster:a,hold:n,countdownAt:l});return i.racing=!0,i.broadcast(c),i.bus.emit("start",c),c}};function HA(i,t,e){const{players:n}=i.state,s=NA(n),r=e.v!==ko?"version":s?i.racing?"racing":null:"full";if(r)return i.transport.send(t,Ie.refuse(r));i.peers.set(t,s),i.set({players:[...n,am(s,e.name,n)]}),i.transport.send(t,Ie.welcome(s,i.state.room,lm(i))),Jc(i)}function VA(i,t,e){i.transport.send(t,Ie.pong(e.t0,i.now())),i.pongs.set(t,(i.pongs.get(t)??0)+1)}const GA=i=>[...i.peers].every(([t,e])=>!e||(i.pongs.get(t)??0)>=Bp);function xl(i,t){const e=i.peers.get(t);i.peers.delete(t)&&(i.heard.delete(t),i.pongs.delete(t),i.transport.drop(t),e&&(i.set({players:i.state.players.filter(n=>n.id!==e)}),i.broadcast(Ie.left(e)),Jc(i),i.bus.emit("left",e)))}const Ml=(i,t)=>i.bus.emit("race",{from:"p0",msg:t}),So={welcome(i,t){if(i.state.phase==="connecting"){if(t.v!==ko)return i.fail("version");i.set({phase:"room",you:t.you,room:t.room,...t.lobby}),i.pings=pT,i.nextPing=i.now()}},refuse:(i,t)=>i.fail(t.reason),lobby:(i,{players:t,track:e,level:n})=>i.state.phase==="room"&&i.set({players:t,track:e,level:n}),pong(i,t){i.clock.sample(t.t0,t.th,i.now()),i.held&&i.clock.ready&&So.start(i,i.held)},start(i,t){i.racing=!0,i.held=i.clock.ready?null:t,i.held||i.bus.emit("start",t)},snap:Ml,finish:Ml,results(i,t){i.racing=!1,Ml(i,t)},left:(i,t)=>i.bus.emit("left",t.id),bye:i=>i.fail("closed")},WA={open(i,t){i.hostPeer=t,i.heard.set("host",i.now()),i.send(Ie.hello(i.state.name))},close:i=>i.fail(i.state.phase==="room"?"lost":"network"),message(i,t,e){var n;t===i.hostPeer&&(i.heard.set("host",i.now()),(n=So[e.type])==null||n.call(So,i,e))},update(i,t){if(i.state.phase==="connecting"&&t-i.since>Xc)return i.fail("timeout");if(i.state.phase==="room"){if(t-i.heard.get("host")>Hp)return i.fail("lost");t<i.nextPing||(i.send(Ie.ping(t)),i.nextPing=t+(i.pings-- >1?mT:fT))}}};class XA{constructor({makeTransport:t,now:e=()=>performance.now()/1e3,rand:n=Math.random}){Object.assign(this,{makeTransport:t,now:e,rand:n,bus:new Sc}),this.state={phase:"choose",players:[]},this.side=null,this.heard=new Map}on(t,e){return this.bus.on(t,e)}get isHost(){return this.side===xs}create(t,{track:e,level:n}){const s=bA(this.rand);this.begin(xs,{isHost:!0,you:"p0",name:t,room:s,track:e,level:n}).host(s)}join(t,e){this.begin(WA,{isHost:!1,name:e,room:t}).join(t)}begin(t,e){var r;(r=this.transport)==null||r.close();const n=this.transport=this.makeTransport(),s=(o,a)=>n.on(o,l=>n===this.transport&&this.side&&a(l));return s("open",o=>this.side.open(this,o)),s("peer",o=>{var a,l;return(l=(a=this.side).peer)==null?void 0:l.call(a,this,o)}),s("close",o=>this.side.close(this,o)),s("error",o=>this.fail(o)),s("message",({from:o,data:a})=>(a=LA(a))&&this.side.message(this,o,a)),Object.assign(this,{side:t,racing:!1,clock:new xA,since:this.now()}),this.peers=new Map,this.heard=new Map,this.pongs=new Map,this.waiting=null,this.held=null,this.set({phase:"connecting",error:null,players:[],...e}),n}leave(){this.side&&(this.isHost?this.broadcast(Ie.bye("closed")):this.send(Ie.bye())),this.end({phase:"choose",error:null,players:[],room:null})}fail(t){const e=this.state.phase==="room";this.end({phase:"error",error:t}),e&&this.bus.emit("closed",t)}end(t){var e;this.side=null,(e=this.transport)==null||e.close(),this.racing=!1,this.set(t)}update(){var n;const t=this.now(),e=t-(this.stepped??t);if(this.stepped=t,e>_T)for(const[s,r]of this.heard)this.heard.set(s,r+e);(n=this.side)==null||n.update(this,t)}hostNow(){return this.isHost?this.now():this.clock.hostNow(this.now())}set(t){this.state={...this.state,...t},this.bus.emit("change",this.state)}send(t){var e;(e=this.transport)==null||e.send(this.hostPeer,t)}sendTo(t,e){for(const[n,s]of this.peers)s===t&&this.transport.send(n,e)}broadcast(t){for(const[e,n]of this.peers)n&&this.transport.send(e,t)}setLobby(t){this.isHost&&xs.setLobby(this,t)}start(t){return this.isHost&&!this.racing?xs.start(this,t):null}endRace(){this.racing=!1}}const qA="modulepreload",YA=function(i,t){return new URL(i,t).href},Jd={},$A=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(e.map(c=>{if(c=YA(c,n),c in Jd)return;Jd[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let g=o.length-1;g>=0;g--){const v=o[g];if(v.href===c&&(!h||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":qA,h||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),h)return new Promise((g,v)=>{f.addEventListener("load",g),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};class Qc{constructor({lag:t=0,loss:e=0,rand:n=Math.random}={}){this.lag=t,this.loss=e,this.rand=n,this.last=new Map}get active(){return this.lag>0||this.loss>0}arrival(t,e){let n=e+this.lag;const s=Math.max(2*this.lag,LT);for(let r=0;r<20&&this.rand()<this.loss;r++)n+=s;return n=Math.max(n,this.last.get(t)??-1/0),this.last.set(t,n),n}mirror(){return new Qc({lag:this.lag,loss:this.loss,rand:this.rand})}forget(t){this.last.delete(t)}}function KA(i=(t=>(t=globalThis.location)==null?void 0:t.search)()??""){const e=new URLSearchParams(i),n=pt(Number(e.get("netlag"))||0,0,CT)/1e3,s=pt(Number(e.get("netloss"))||0,0,PT);return n>0||s>0?new Qc({lag:n,loss:s}):null}const jA={reliable:!0,serialization:"json"},ZA={"unavailable-id":"taken","peer-unavailable":"not-found","browser-incompatible":"offline"},JA=i=>{var t;return((t=globalThis.navigator)==null?void 0:t.onLine)===!1?"offline":ZA[i]??"network"},Qd=()=>performance.now()/1e3;class QA{constructor({shaper:t=KA(),loadPeer:e=()=>$A(()=>import("./bundler-DXD5IzWF.js"),[],import.meta.url)}={}){Object.assign(this,{shaper:t,loadPeer:e,bus:new Sc,conns:new Map}),this.inbound=t!=null&&t.active?t.mirror():null,this.opened=this.closed=!1,this.onOffline=()=>this._fail("offline")}on(t,e){return this.bus.on(t,e)}host(t){this._start(Yd(t),e=>this._opened(e.id))}join(t){this._start(void 0,e=>this._adopt(e.connect(Yd(t),jA),!0))}async _start(t,e){var r,o;if(((r=globalThis.navigator)==null?void 0:r.onLine)===!1)return queueMicrotask(()=>this._fail("offline"));this.timer=setTimeout(()=>this._fail("timeout"),Xc*1e3),(o=globalThis.addEventListener)==null||o.call(globalThis,"offline",this.onOffline);let n;try{({Peer:n}=await this.loadPeer())}catch{return this._fail("network")}if(this.closed)return;const s=this.peer=new n(t,{debug:0});s.on("open",()=>e(s)),s.on("connection",a=>this._adopt(a,!1)),s.on("error",a=>this._fail(JA(a.type))),s.on("disconnected",()=>!this.closed&&!s.destroyed&&s.reconnect())}_adopt(t,e){t.on("open",()=>{this.conns.set(t.peer,t),e?this._opened(t.peer):this.bus.emit("peer",t.peer)}),t.on("data",n=>this._arrive(t.peer,()=>this.bus.emit("message",{from:t.peer,data:n}))),t.on("close",()=>this.conns.delete(t.peer)&&this._arrive(t.peer,()=>this.bus.emit("close",t.peer))),t.on("error",()=>t.close())}_opened(t){clearTimeout(this.timer),!(this.opened||this.closed)&&(this.opened=!0,this.bus.emit("open",t))}_fail(t){this.opened||this.closed||(this.close(),this.bus.emit("error",t))}_arrive(t,e){if(!this.inbound)return e();const n=Qd();setTimeout(()=>!this.closed&&e(),(this.inbound.arrival(t,n)-n)*1e3)}send(t,e){var r;const n=this.conns.get(t);if(!(n!=null&&n.open))return;if(!((r=this.shaper)!=null&&r.active))return n.send(e);const s=Qd();setTimeout(()=>n.open&&n.send(e),(this.shaper.arrival(t,s)-s)*1e3)}broadcast(t){for(const e of this.conns.keys())this.send(e,t)}drop(t){const e=this.conns.get(t);!e||!this.conns.delete(t)||(e.close(),queueMicrotask(()=>this.bus.emit("close",t)))}close(){var s,r;this.closed=!0,clearTimeout(this.timer),(s=globalThis.removeEventListener)==null||s.call(globalThis,"offline",this.onOffline);const{conns:t,peer:e}=this;this.conns=new Map;const n=()=>{for(const o of t.values())o.close();e==null||e.destroy()};if(!t.size)return n();setTimeout(n,(UT+(((r=this.shaper)==null?void 0:r.lag)??0))*1e3)}}const sr=2;class t3{constructor({size:t=ST,extrapolate:e=yT}={}){this.size=t,this.extrapolate=e,this.snaps=[],this.age=null,this.spread=0}get delay(){return Math.max(MT,(this.age??0)+bT+ET*this.spread)}get newest(){return this.snaps[this.snaps.length-1]??null}push(t,e=t.t){if(this.newest&&t.t<=this.newest.t)return!1;const n=e-t.t;return this.age!==null&&(this.spread+=(Math.abs(n-this.age)-this.spread)*Dd),this.age=this.age===null?n:this.age+(n-this.age)*Dd,this.snaps.push(t),this.snaps.length>this.size&&this.snaps.shift(),!0}sample(t,e=this.extrapolate){const{snaps:n}=this;if(!n.length)return null;if(t<n[0].t)return oc(n[0],n[0].s,!0);const s=this.newest;if(t>=s.t)return e3(s,t-s.t,e);let r=n.length-1;for(;n[r-1].t>t;)r--;const o=n[r-1],a=n[r],l=(t-o.t)/(a.t-o.t),c=o.s.map((h,u)=>u===sr?h+fi(a.s[u]-h)*l:An(h,a.s[u],l));return c[sr]=fi(c[sr]),{...oc(l<.5?o:a,c,!1),c:o.c.map((h,u)=>An(h,a.c[u],l)),p:An(o.p,a.p,l)}}}const oc=(i,t,e)=>({s:t,c:i.c,i:i.i,p:i.p,lap:i.lap,stale:e});function e3(i,t,e){const n=Math.min(t,e),s=[...i.s],[r,o,a]=[s[3],s[4],s[6]],l=a*n,[c,h]=Math.abs(l)<1e-6?[n,0]:[Math.sin(l)/a,(1-Math.cos(l))/a];return s[0]+=r*c+o*h,s[1]+=o*c-r*h,s[3]=r*Math.cos(l)+o*Math.sin(l),s[4]=o*Math.cos(l)-r*Math.sin(l),s[sr]=fi(s[sr]+l),oc(i,s,t>e)}class n3{constructor(){this.interps=new Map}push(t,e){this.interps.has(t.id)||this.interps.set(t.id,new t3),this.interps.get(t.id).push(t,e)}drop(t){this.interps.delete(t)}states(t,e,n){const s=new Map;for(const[r,o]of this.interps){const a=e??t-o.delay,l=o.sample(a,n);l&&s.set(r,{...l,t:a})}return s}}class i3{constructor(t,e){this.humans=t.filter(n=>n.kind==="human").map(n=>n.id),this.ids=t.map(n=>n.id),this.grace=e,this.done=new Map,this.gone=new Set,this.firstHuman=null}record(t,e,n,s){return this.done.has(t)||this.gone.has(t)||!this.ids.includes(t)?!1:(this.done.set(t,{time:e,best:n}),this.humans.includes(t)&&this.firstHuman===null&&(this.firstHuman=s),!0)}leave(t){this.done.has(t)||this.gone.add(t)}due(t){return this.firstHuman===null?!1:this.ids.every(n=>this.done.has(n)||this.gone.has(n))||t-this.firstHuman>=this.grace}entries(t){const e=s=>this.done.has(s)?0:this.gone.has(s)?2:1;return[...this.ids].sort((s,r)=>{const o=e(s)-e(r);return o||(e(s)===0?this.done.get(s).time-this.done.get(r).time:e(s)===1?t(r)-t(s):0)}).map(s=>{const r=this.done.get(s);return{id:s,time:(r==null?void 0:r.time)??null,best:(r==null?void 0:r.best)??null,dnf:this.gone.has(s)}})}}const fo=(i,t)=>Math.round(i*10**t)/10**t,s3=[3,3,4,3,3,4,3,4],r3=4,o3=2,a3=2;function yl(i,t,e){const n=e.s.map((s,r)=>fo(pt(r===2?fi(s):s,-rc[r],rc[r]),s3[r]));return{id:i,t:fo(t,r3),s:n,c:e.c.map(s=>fo(pt(s,-1,1),o3)),i:pt(Math.round(e.i),0,1e5),p:fo(pt(e.p,-1e6,1e6),a3),lap:pt(Math.round(e.lap),0,999)}}class l3{constructor(t){this.period=1/t,this.acc=this.period}due(t){return this.acc+=t,this.acc<this.period?!1:(this.acc=Math.min(this.acc-this.period,this.period),!0)}}class c3{constructor({room:t,start:e}){Object.assign(this,{room:t,roster:e.roster,you:t.state.you,isHost:t.isHost}),this.book=this.isHost?new i3(this.roster,wT):null,this.remote=new n3,this.latest=new Map,this.ticker=new l3(this.isHost?hT:cT),this.events=[],this.results=null,this.lastFrame=this.hostSeen=t.hostNow(),this.away=!1,this.offs=[t.on("race",({msg:n})=>this.receive(n)),t.on("left",n=>this.drop(n)),t.on("closed",n=>this.events.push({type:"host-gone",reason:n}))]}update(t,{own:e=null,ai:n=[]}={}){const s=this.lastFrame=this.room.hostNow();if(!this.isHost){e&&this.ticker.due(t)&&this.room.send(Ie.kart(yl(this.you,s,e)));const r=s-this.hostSeen>RT;r!==this.away&&this.events.push({type:"host-away",away:this.away=r});return}e&&this.latest.set(this.you,yl(this.you,s,e));for(const r of n)this.latest.set(r.id,yl(r.id,s,r));if(this.ticker.due(t))for(const[,r]of this.room.peers)r&&this.room.sendTo(r,Ie.snap(s,[...this.latest.values()].filter(o=>o.id!==r)));!this.results&&this.book.due(s)&&this.settle()}receive(t){const e=this.room.hostNow();if(t.type==="kart"){const{type:n,...s}=t;this.latest.set(s.id,s),this.remote.push(s,e),e-this.lastFrame>AT&&this.relay(s,e)}else if(t.type==="snap"){for(const n of t.karts)n.id!==this.you&&this.remote.push(n,e);t.karts.some(n=>n.id==="p0")&&(this.hostSeen=e)}else t.type==="finish"?this.flag(t.id,t.time,t.best):t.type==="results"&&!this.results&&(this.results=t.entries,this.events.push({type:"results",entries:t.entries}))}relay(t,e){for(const[,n]of this.room.peers)n&&n!==t.id&&this.room.sendTo(n,Ie.snap(e,[t]))}remoteStates(t,e){return this.remote.states(this.room.hostNow(),t,e)}finish(t,e){this.isHost?this.flag(this.you,t,e):this.room.send(Ie.finish(this.you,t,e))}aiFinish(t,e,n){this.isHost&&this.flag(t,e,n)}flag(t,e,n){this.isHost&&!this.book.record(t,e,n,this.room.hostNow())||(this.isHost&&this.room.broadcast(Ie.finish(t,e,n)),t!==this.you&&this.events.push({type:"finish",id:t,time:e,best:n}))}settle(){this.results=this.book.entries(t=>{var e;return((e=this.latest.get(t))==null?void 0:e.p)??-1/0}),this.room.broadcast(Ie.results(this.results)),this.events.push({type:"results",entries:this.results})}drop(t){var e;this.remote.drop(t),this.latest.delete(t),(e=this.book)==null||e.leave(t),this.events.push({type:"left",id:t})}poll(){return this.events.splice(0)}dispose(){for(const t of this.offs)t()}}function h3(i,t){return i.map(e=>({id:e.id,code:e.code,name:e.name,color:e.livery,isPlayer:e.id===t,...e.kind==="ai"?{profile:Si[e.rival]}:{}}))}function u3(i,t,e,n){return new Ap(i.path.count,i.startIndex,n,h3(t,e))}function d3(i,t,e,n){const{path:s,startIndex:r}=i.world,o=new Map(t.map(c=>[c.id,$l(s,r,c.slot)])),a=o.get(e);i.kart.place(a.x,a.z,a.yaw),i.trackIndex=a.i;const l=[];return i.rivals.forEach((c,h)=>{const u=n&&t.find(f=>f.kind==="ai"&&f.rival===h);if(c.kart.object3d.visible=!!u,!u)return;const d=o.get(u.id);c.kart.place(d.x,d.z,d.yaw),c.index=d.i,c.id=u.id,l.push(c)}),{ai:l,spots:o}}function f3(i,t){const e=new Map(i.entries.map(s=>[s.id,s])),n=t.map(s=>e.get(s.id)).filter(Boolean);for(const s of t){const r=e.get(s.id);r&&(r.finishTime=s.time,r.bestLap=s.best??r.bestLap,r.dnf=s.dnf)}i.order=[...n,...i.entries.filter(s=>!n.includes(s))],i.final=!0}function p3(i,{id:t,time:e,best:n}){const s=i.entries.find(r=>r.id===t);s&&(s.finishTime=e,n!=null&&(s.bestLap=n))}class m3{constructor(t,e,n){this.kart=new Uc(null,cm(e)),this.key=th(e),this.profile={body:e.livery},this.fx=n,this.index=0,this.t=null,t.add(this.kart.object3d)}place(t){this.kart.place(t.x,t.z,t.yaw),this.kart.object3d.visible=!0,this.index=t.i,this.t=null,this.fx.reset()}draw(t,e){const[n,s,r,o,a,l,c,h]=t.s,{kart:u}=this,d=u.telemetry,f=pi(r),g=o*f.x+a*f.z,v=e>0?(g-d.forwardSpeed)/e:0;u.state={x:n,z:s,yaw:r,vx:o,vz:a,steer:l,yawRate:c,slipAngle:h},Object.assign(d,{speed:Math.hypot(o,a),forwardSpeed:g,slip:Math.abs(o*f.z-a*f.x),sliding:Math.abs(h)>DT,longAccel:Ae(d.longAccel,v,NT,e)||0,latAccel:g*c,yawRate:c,slipAngle:h,throttle:t.c[0],brake:t.c[1],steer:l}),u.model.update(u.state,d,e),[this.index,this.t]=[t.i,t.t]}dispose(t){t.remove(this.kart.object3d),$c(this.kart.object3d)}}const th=i=>`${i.livery}:${i.number}`;function cm(i){const{body:t,suit:e,stripe:n}=kA(i.livery);return{number:i.number,livery:{body:t,suit:e,helmet:t,helmetStripe:n}}}function hm(i,t){const e=t?th(t):null;(i.kartLook??null)!==e&&(i.kartLook=e,$c(i.kart.setLook(t?cm(t):{})))}function tf(i,t,e){const n=i.state;return{s:[n.x,n.z,n.yaw,n.vx,n.vz,n.steer,n.yawRate,n.slipAngle??0],c:[i.telemetry.throttle??0,i.telemetry.brake??0],i:t,p:(e==null?void 0:e.progress)??0,lap:(e==null?void 0:e.timer.lap)??0}}function g3({s:i,i:t}){const[e,n,s,r,o]=i;return{state:{x:e,z:n,yaw:s,vx:r,vz:o},index:t,speed:Math.hypot(r,o)}}class v3{constructor(t,e,n,s,r){var l;Object.assign(this,{game:t,room:e,pool:s,notify:r,roster:n.roster,you:e.state.you}),this.isHost=e.isHost,this.net=new c3({room:e,start:n}),this.final=!1,this.awayNotice=null;const o=ta(n.track);o!==t.track&&t.loadTrack(o);for(const c of t.rivals)c.driver.difficulty=((l=mi[n.level])==null?void 0:l.pace)??1;t.field=u3(t.world,n.roster,this.you,n.laps),t.session.laps=n.laps,t.session.follow(()=>e.hostNow()-n.countdownAt),Mo(t,"online",n.hold),hm(t,n.roster.find(c=>c.id===this.you));const a=d3(t,n.roster,this.you,this.isHost);this.ai=a.ai,s.setRoster(n.roster.filter(c=>c.id!==this.you&&!this.ai.some(h=>h.id===c.id)),a.spots),this.others=[...this.ai,...s.list],this.indices=t.field.entries.map(c=>this.indexSource(c))}indexSource(t){const{game:e}=this;if(t.id===this.you)return()=>e.trackIndex;const n=this.ai.find(s=>s.id===t.id);return n?()=>n.index:()=>{var s;return((s=this.pool.get(t.id))==null?void 0:s.index)??t.timer.lastIndex??0}}step(t){const{game:e,net:n}=this,{session:s}=e,r=s.state,o=n.room.hostNow(),a=[...n.remoteStates(o,IT)].map(([,l])=>g3(l));jp(e,t,r!=="countdown",this.ai,a),n.update(t,{own:tf(e.kart,e.trackIndex,e.field.player),ai:this.aiStates()}),this.pool.draw(n.remoteStates(),t,e.camera.three,e.renderer.three.domElement.height),(r==="racing"||r==="finished")&&!this.final&&this.time(r,t);for(const l of n.poll())this.on(l);this.remindAway(t)}time(t,e){const{game:n,net:s}=this;for(const r of n.field.update(this.indices.map(o=>o()),n.session.clock))r.isPlayer&&t==="racing"?(n.session.finish(),s.finish(r.finishTime,r.bestLap)):r.profile&&this.isHost&&s.aiFinish(r.id,r.finishTime,r.bestLap);Qp(n,e)}on(t){const{game:e}=this,n=e.field.entries.find(s=>s.id===t.id);if(t.type==="finish")p3(e.field,t);else if(t.type==="left"){const s=this.pool.get(t.id);this.pool.remove(t.id),this.others=this.others.filter(o=>o!==s);const r=n&&!this.final&&n.finishTime===null;r&&(n.dnf=!0),this.notify(`${((n==null?void 0:n.name)??"A driver").toUpperCase()} LEFT`,r?"DNF":"")}else t.type==="results"?(f3(e.field,t.entries),this.final=!0,this.isHost&&this.room.endRace(),e.session.state==="racing"&&e.session.finish()):t.type==="host-gone"?this.hostGone=t.reason:t.type==="host-away"&&this.hostAway(t.away)}hostAway(t){this.awayNotice=t?0:null,t||this.notify("HOST BACK")}remindAway(t){this.awayNotice===null||(this.awayNotice-=t)>0||(this.notify("HOST AWAY","WAITING FOR THEIR GAME"),this.awayNotice=Vp)}aiStates(){if(!this.isHost)return[];const{entries:t}=this.game.field;return this.ai.map(e=>({id:e.id,...tf(e.kart,e.index,t.find(n=>n.id===e.id))}))}dispose(){this.net.dispose(),this.game.session.follow(null)}}class _3{constructor(t){this.scene=t,this.karts=new Map,this.spareFx=[]}setRoster(t,e){const n=new Map(t.map(s=>[s.id,s]));for(const[s,r]of this.karts){const o=n.get(s);(!o||th(o)!==r.key)&&this.remove(s)}for(const s of t){if(!this.karts.has(s.id)){const r=this.spareFx.pop()??new Oc(this.scene);this.karts.set(s.id,new m3(this.scene,s,r))}this.karts.get(s.id).place(e.get(s.id))}}get list(){return[...this.karts.values()]}get(t){return this.karts.get(t)}draw(t,e,n,s){for(const[r,o]of this.karts){const a=t.get(r);a&&o.draw(a,e),o.fx.update(o.kart,e,n,s)}}remove(t){const e=this.karts.get(t);e&&(this.karts.delete(t),e.dispose(this.scene),e.fx.reset(),this.spareFx.push(e.fx))}clear(){for(const t of[...this.karts.keys()])this.remove(t)}}function x3(i,t){const{room:e}=i,{screens:n}=t,{lobby:s}=n;s.bind({onCreate:o=>e.create(o,{track:t.track.id,level:t.difficulty}),onJoin:(o,a)=>e.join(o,a),onStart:()=>i.start(),onLeave:()=>e.leave(),onTrack:o=>e.setLobby({track:um(e.state.track,o)}),onLevel:o=>e.setLobby({level:o}),onBack:()=>n.closeLobby()}),e.on("change",o=>s.render(o));const r=new URLSearchParams(window.location.search);r.has("room")&&!r.has("lobbydemo")&&(n.setMode("online"),n.openLobby(r.get("room")),s.choose.codeComplete&&s.do("join"))}function um(i,t){const e=Ve.indexOf(ta(i));return Ve[(e+t+Ve.length)%Ve.length].id}class M3{constructor(t,e=()=>new QA){br(this,"notify",(t,e="")=>this.game.screens.notify(t,e));this.game=t,this.room=new XA({makeTransport:e}),this.pool=new _3(t.renderer.scene),this.race=null,this.room.on("start",n=>this.begin(n)),x3(this,t),setInterval(()=>this.room.update(),xT*1e3),window.addEventListener("pagehide",()=>this.room.leave())}get active(){return!!this.race}get others(){var t;return((t=this.race)==null?void 0:t.others)??[]}start(t=0){const{room:e}=this;!e.isHost||e.racing||(t&&e.setLobby({track:um(e.state.track,t)}),e.start({laps:ta(e.state.track).laps,hold:wp()}))}begin(t){var e;(e=this.race)==null||e.dispose(),this.game.screens.lobby.show(!1),this.game.screens.showOnlinePause(!1),this.game.screens.results.setOnline(this.room.isHost?"host":"client"),this.race=new v3(this.game,this.room,t,this.pool,this.notify)}step(t){var n,s;this.room.update(),(n=this.race)==null||n.step(t);const e=(s=this.race)==null?void 0:s.hostGone;e&&this.leave(e==="closed"?"HOST LEFT":"CONNECTION LOST")}handle(t,e){const{screens:n}=this.game;if(e==="finished"){n.showOnlinePause(!1);const s=Jp(t);s==="menu"?this.leave():s&&this.start(s==="next"?1:0);return}if(t.action("pause")&&n.showOnlinePause(!n.onlinePause.visible),t.action("quit")&&n.onlinePause.visible)return this.leave();t.action("reset")&&e==="racing"&&Zp(this.game)}leave(t=null){var s;const{game:e}=this;this.room.leave(),(s=this.race)==null||s.dispose(),this.race=null,this.pool.clear(),hm(e,null),e.field=e.soloField,e.field.reset(),Kp(e),e.screens.results.setOnline(null),e.screens.showOnlinePause(!1),e.screens.lobby.show(!1),nc(e),t&&this.notify(t,"BACK TO THE MENU");const n=new URL(window.location.href);n.searchParams.has("room")&&(n.searchParams.delete("room"),window.history.replaceState(window.history.state,"",n))}}const dm="tbc-kart.track",fm="tbc-kart.level";class y3{constructor(){br(this,"controlsFor",t=>dA(this,t));br(this,"step",t=>mA(this,t));this.bus=new Sc,this.renderer=new mM,this.camera=new cy(window.innerWidth/window.innerHeight);const t=this.renderer.scene;this.kart=new Uc(null),this.ghost=new Wb,this.rivals=iA(t),t.add(this.kart.object3d,this.ghost.object3d),this.fx=new Oc(t),this.kerb=new Ep,this.post=new NM(this.renderer,t,this.camera.three),this.audio=new jb,this.engine=new _p(this.audio),this.pack=new e2(this.audio),this.sfx=new n2(this.audio),this.tyres=new s2(this.audio),this.rumble=new r2(this.audio),this.recorder=new D2,this.input=new fy,this.hud=new nE(this.bus,this.input),this.screens=new FT(e=>this.input.trigger(e)),this.difficulty=b3(),this.screens.bindLevels(this.difficulty,e=>this.setDifficulty(e)),this.screens.addGraphicsPicker(),this.debug=new zT,this.autopilot=new k2(null),this.impactCooldown=0,[this.lastPosition,this.heldPosition,this.positionAge]=[0,0,0],Xw(this),this.loadTrack(S3()),this.online=new M3(this),window.addEventListener("resize",()=>this.resize())}loadTrack(t){const e=this.renderer.scene;this.world&&(e.remove(this.world.group),$c(this.world.group)),this.track=t,this.world=Ww(t,this.renderer.maxAnisotropy),e.add(this.world.group);const{bounds:n}=this.world,s=[this.kart,...this.rivals.map(c=>c.kart)].map(c=>c.object3d);this.renderer.captureEnvironment(new R(n.cx,1.2,n.cz),[...s,this.ghost.object3d]);const{path:r,startIndex:o,anchors:a}=this.world;this.camera.anchors=a,Kp(this),this.renderer.three.compile(this.renderer.scene,this.camera.three),this.signature=_A(t,r,o),this.recordKey=z2(t.id),this.record=B2(this.signature,this.recordKey),this.session=new I2(r.count,o,this.bus,this.record,t.laps),this.field=this.soloField=new Ap(r.count,o,t.laps,[{...C2,color:Bl.body,isPlayer:!0},...Si.map(c=>({code:c.code,name:c.name,color:c.body,profile:c,isPlayer:!1}))]),this.hud.setTrack(r,o,t.laps);const l=Ve.indexOf(t);this.screens.setTrack(t,r,o,l,Ve.length,this.record.best);for(const c of this.rivals)c.fx.reset();Kc(this,!0),this.camera.broadcast(this.kart)}setDifficulty(t){this.difficulty=t;for(const e of this.rivals)e.driver.difficulty=mi[t].pace;mm(fm,t)}selectTrack(t){const e=Ve.indexOf(this.track);this.loadTrack(Ve[(e+t+Ve.length)%Ve.length]),pm(this.track.id);const n=new URL(window.location.href);n.searchParams.has("track")&&(n.searchParams.set("track",this.track.id),window.history.replaceState(window.history.state,"",n))}resize(){const[t,e]=[window.innerWidth,window.innerHeight];this.renderer.setSize(t,e),this.post.setSize(t,e),this.camera.setAspect(t/e),this.hud.resize()}start(){pA(this)}advance(t,e=1/60){for(let n=0;n<t;n+=e)this.step(e);this.post.render(e)}}function S3(){const i=new URLSearchParams(window.location.search).get("track");let t=null;try{t=localStorage.getItem(dm)}catch{}const{track:e,fromUrl:n,unknown:s}=gA(i,t,Ve);return s&&console.warn(`?track=${s}: no such track (${Ve.map(r=>r.id).join(", ")})`),n&&pm(e.id),e}function pm(i){mm(dm,i)}function mm(i,t){try{localStorage.setItem(i,t)}catch{}}function b3(){let i=null;try{i=localStorage.getItem(fm)}catch{}return mi[i]?i:L2}const E3=new y3;E3.start();
