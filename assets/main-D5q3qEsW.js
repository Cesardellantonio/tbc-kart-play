var Bm=Object.defineProperty;var Hm=(i,t,e)=>t in i?Bm(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var jr=(i,t,e)=>Hm(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yl="163",Vm=0,tu=1,Gm=2,ip=1,sp=2,Xn=3,Kn=0,ke=1,an=2,Ae=0,Zi=1,Vs=2,eu=3,nu=4,jl=5,gn=100,Wm=101,Xm=102,qm=103,$m=104,Is=200,Go=201,Ym=202,jm=203,il=204,sl=205,rl=206,Km=207,ol=208,Zm=209,Jm=210,Qm=211,tg=212,eg=213,ng=214,ig=0,sg=1,rg=2,Ko=3,og=4,ag=5,cg=6,lg=7,rp=0,hg=1,ug=2,Mi=0,dg=1,fg=2,pg=3,op=4,mg=5,Kl=6,gg=7,iu="attached",vg="detached",ap=300,Gs=301,Ws=302,al=303,cl=304,xa=306,Ei=1e3,$i=1001,ll=1002,ye=1003,xg=1004,Kr=1005,vn=1006,Fa=1007,Yi=1008,Yn=1009,_g=1010,Mg=1011,cp=1012,lp=1013,Xs=1014,Cn=1015,Ze=1016,hp=1017,up=1018,nr=1020,yg=35902,bg=1021,Sg=1022,cn=1023,wg=1024,Eg=1025,ks=1026,qs=1027,dp=1028,fp=1029,Tg=1030,pp=1031,mp=1033,za=33776,Ba=33777,Ha=33778,Va=33779,su=35840,ru=35841,ou=35842,au=35843,gp=36196,cu=37492,lu=37496,hu=37808,uu=37809,du=37810,fu=37811,pu=37812,mu=37813,gu=37814,vu=37815,xu=37816,_u=37817,Mu=37818,yu=37819,bu=37820,Su=37821,Ga=36492,wu=36494,Eu=36495,Ag=36283,Tu=36284,Au=36285,Ru=36286,Rg=3200,vp=3201,Zl=0,Cg=1,vi="",mn="srgb",Ri="srgb-linear",Jl="display-p3",_a="display-p3-linear",Zo="linear",se="srgb",Jo="rec709",Qo="p3",ss=7680,Cu=519,Pg=512,Lg=513,Ig=514,xp=515,Dg=516,Ng=517,Ug=518,Og=519,Pu=35044,Lu=35048,Iu="300 es",$n=2e3,ta=2001;class ir{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wa=Math.PI/180,hl=180/Math.PI;function sr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Re(i,t,e){return Math.max(t,Math.min(e,i))}function kg(i,t){return(i%t+t)%t}function Xa(i,t,e){return(1-e)*i+e*t}function dr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ot{constructor(t=0,e=0){ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,s,r,o,a,c,l){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],_=s[1],x=s[4],y=s[7],A=s[2],w=s[5],T=s[8];return r[0]=o*v+a*_+c*A,r[3]=o*m+a*x+c*w,r[6]=o*p+a*y+c*T,r[1]=l*v+h*_+u*A,r[4]=l*m+h*x+u*w,r[7]=l*p+h*y+u*T,r[2]=d*v+f*_+g*A,r[5]=d*m+f*x+g*w,r[8]=d*p+f*y+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(qa.makeScale(t,e)),this}rotate(t){return this.premultiply(qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new Bt;function _p(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ea(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fg(){const i=ea("canvas");return i.style.display="block",i}const Du={};function zg(i){i in Du||(Du[i]=!0,console.warn(i))}const Nu=new Bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uu=new Bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zr={[Ri]:{transfer:Zo,primaries:Jo,toReference:i=>i,fromReference:i=>i},[mn]:{transfer:se,primaries:Jo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[_a]:{transfer:Zo,primaries:Qo,toReference:i=>i.applyMatrix3(Uu),fromReference:i=>i.applyMatrix3(Nu)},[Jl]:{transfer:se,primaries:Qo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Uu),fromReference:i=>i.applyMatrix3(Nu).convertLinearToSRGB()}},Bg=new Set([Ri,_a]),Qt={enabled:!0,_workingColorSpace:Ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Bg.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Zr[t].toReference,s=Zr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Zr[i].primaries},getTransfer:function(i){return i===vi?Zo:Zr[i].transfer}};function Fs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $a(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let rs;class Hg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{rs===void 0&&(rs=ea("canvas")),rs.width=t.width,rs.height=t.height;const n=rs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=rs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ea("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fs(e[n]/255)*255):e[n]=Fs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vg=0;class Mp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=sr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ya(s[o].image)):r.push(Ya(s[o]))}else r=Ya(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gg=0;class Fe extends ir{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=$i,s=$i,r=vn,o=Yi,a=cn,c=Yn,l=Fe.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=sr(),this.name="",this.source=new Mp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ap)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ei:t.x=t.x-Math.floor(t.x);break;case $i:t.x=t.x<0?0:1;break;case ll:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ei:t.y=t.y-Math.floor(t.y);break;case $i:t.y=t.y<0?0:1;break;case ll:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=ap;Fe.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,s=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,y=(f+1)/2,A=(p+1)/2,w=(h+d)/4,T=(u+v)/4,L=(g+m)/4;return x>y&&x>A?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=w/n,r=T/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=L/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=T/r,s=L/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wg extends ir{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new Fe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Mp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class He extends Wg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yp extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ye,this.minFilter=ye,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xg extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ye,this.minFilter=ye,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class On{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*v,_=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const A=Math.sqrt(x),w=Math.atan2(A,p*_);m=Math.sin(m*w)/A,a=Math.sin(a*w)/A}const y=a*_;if(c=c*m+d*y,l=l*m+f*y,h=h*m+g*y,u=u*m+v*y,m===1-a){const A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ou.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ou.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ja.copy(this).projectOnVector(t),this.sub(ja)}reflect(t){return this.sub(ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ja=new R,Ou=new On;class Ci{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jr.copy(n.boundingBox)),Jr.applyMatrix4(t.matrixWorld),this.union(Jr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fr),Qr.subVectors(this.max,fr),os.subVectors(t.a,fr),as.subVectors(t.b,fr),cs.subVectors(t.c,fr),si.subVectors(as,os),ri.subVectors(cs,as),Ui.subVectors(os,cs);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Ui.z,Ui.y,si.z,0,-si.x,ri.z,0,-ri.x,Ui.z,0,-Ui.x,-si.y,si.x,0,-ri.y,ri.x,0,-Ui.y,Ui.x,0];return!Ka(e,os,as,cs,Qr)||(e=[1,0,0,0,1,0,0,0,1],!Ka(e,os,as,cs,Qr))?!1:(to.crossVectors(si,ri),e=[to.x,to.y,to.z],Ka(e,os,as,cs,Qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const zn=[new R,new R,new R,new R,new R,new R,new R,new R],hn=new R,Jr=new Ci,os=new R,as=new R,cs=new R,si=new R,ri=new R,Ui=new R,fr=new R,Qr=new R,to=new R,Oi=new R;function Ka(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Oi.fromArray(i,r);const a=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),c=t.dot(Oi),l=e.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const qg=new Ci,pr=new R,Za=new R;class ti{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):qg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pr.subVectors(t,this.center);const e=pr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(pr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pr.copy(t.center).add(Za)),this.expandByPoint(pr.copy(t.center).sub(Za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new R,Ja=new R,eo=new R,oi=new R,Qa=new R,no=new R,tc=new R;class Ql{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ja.copy(t).add(e).multiplyScalar(.5),eo.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(Ja);const r=t.distanceTo(e)*.5,o=-this.direction.dot(eo),a=oi.dot(this.direction),c=-oi.dot(eo),l=oi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ja).addScaledVector(eo,d),f}intersectSphere(t,e){Bn.subVectors(t.center,this.origin);const n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,s,r){Qa.subVectors(e,t),no.subVectors(n,t),tc.crossVectors(Qa,no);let o=this.direction.dot(tc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,t);const c=a*this.direction.dot(no.crossVectors(oi,no));if(c<0)return null;const l=a*this.direction.dot(Qa.cross(oi));if(l<0||c+l>o)return null;const h=-a*oi.dot(tc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,g,v,m){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,v,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ls.setFromMatrixColumn(t,0).length(),r=1/ls.setFromMatrixColumn(t,1).length(),o=1/ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d+v*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($g,t,Yg)}lookAt(t,e,n){const s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),ai.crossVectors(n,qe),ai.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),ai.crossVectors(n,qe)),ai.normalize(),io.crossVectors(qe,ai),s[0]=ai.x,s[4]=io.x,s[8]=qe.x,s[1]=ai.y,s[5]=io.y,s[9]=qe.y,s[2]=ai.z,s[6]=io.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],x=n[7],y=n[11],A=n[15],w=s[0],T=s[4],L=s[8],b=s[12],M=s[1],D=s[5],O=s[9],I=s[13],z=s[2],X=s[6],Y=s[10],et=s[14],U=s[3],q=s[7],$=s[11],Q=s[15];return r[0]=o*w+a*M+c*z+l*U,r[4]=o*T+a*D+c*X+l*q,r[8]=o*L+a*O+c*Y+l*$,r[12]=o*b+a*I+c*et+l*Q,r[1]=h*w+u*M+d*z+f*U,r[5]=h*T+u*D+d*X+f*q,r[9]=h*L+u*O+d*Y+f*$,r[13]=h*b+u*I+d*et+f*Q,r[2]=g*w+v*M+m*z+p*U,r[6]=g*T+v*D+m*X+p*q,r[10]=g*L+v*O+m*Y+p*$,r[14]=g*b+v*I+m*et+p*Q,r[3]=_*w+x*M+y*z+A*U,r[7]=_*T+x*D+y*X+A*q,r[11]=_*L+x*O+y*Y+A*$,r[15]=_*b+x*I+y*et+A*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+v*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],_=u*m*l-v*d*l+v*c*f-a*m*f-u*c*p+a*d*p,x=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,y=h*v*l-g*u*l+g*a*f-o*v*f-h*a*p+o*u*p,A=g*u*c-h*v*c-g*a*d+o*v*d+h*a*m-o*u*m,w=e*_+n*x+s*y+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=_*T,t[1]=(v*d*r-u*m*r-v*s*f+n*m*f+u*s*p-n*d*p)*T,t[2]=(a*m*r-v*c*r+v*s*l-n*m*l-a*s*p+n*c*p)*T,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*T,t[4]=x*T,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*T,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*T,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*T,t[8]=y*T,t[9]=(g*u*r-h*v*r-g*n*f+e*v*f+h*n*p-e*u*p)*T,t[10]=(o*v*r-g*a*r+g*n*l-e*v*l-o*n*p+e*a*p)*T,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*T,t[12]=A*T,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*m+e*u*m)*T,t[14]=(g*a*s-o*v*s-g*n*c+e*v*c+o*n*m-e*a*m)*T,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,v=o*h,m=o*u,p=a*u,_=c*l,x=c*h,y=c*u,A=n.x,w=n.y,T=n.z;return s[0]=(1-(v+p))*A,s[1]=(f+y)*A,s[2]=(g-x)*A,s[3]=0,s[4]=(f-y)*w,s[5]=(1-(d+p))*w,s[6]=(m+_)*w,s[7]=0,s[8]=(g+x)*T,s[9]=(m-_)*T,s[10]=(1-(d+v))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ls.set(s[0],s[1],s[2]).length();const o=ls.set(s[4],s[5],s[6]).length(),a=ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],un.copy(this);const l=1/r,h=1/o,u=1/a;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,e.setFromRotationMatrix(un),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=$n){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===$n)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ta)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=$n){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h;let g,v;if(a===$n)g=(o+r)*u,v=-2*u;else if(a===ta)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ls=new R,un=new Pt,$g=new R(0,0,0),Yg=new R(1,1,1),ai=new R,io=new R,qe=new R,ku=new Pt,Fu=new On;class ln{constructor(t=0,e=0,n=0,s=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ku.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ku,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fu.setFromEuler(this),this.setFromQuaternion(Fu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class bp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jg=0;const zu=new R,hs=new On,Hn=new Pt,so=new R,mr=new R,Kg=new R,Zg=new On,Bu=new R(1,0,0),Hu=new R(0,1,0),Vu=new R(0,0,1),Gu={type:"added"},Jg={type:"removed"},us={type:"childadded",child:null},ec={type:"childremoved",child:null};class be extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new R,e=new ln,n=new On,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Bt}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(Bu,t)}rotateY(t){return this.rotateOnAxis(Hu,t)}rotateZ(t){return this.rotateOnAxis(Vu,t)}translateOnAxis(t,e){return zu.copy(t).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bu,t)}translateY(t){return this.translateOnAxis(Hu,t)}translateZ(t){return this.translateOnAxis(Vu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?so.copy(t):so.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(mr,so,this.up):Hn.lookAt(so,mr,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(Hn),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gu),us.child=t,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jg),ec.child=t,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gu),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,t,Kg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,Zg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}be.DEFAULT_UP=new R(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new R,Vn=new R,nc=new R,Gn=new R,ds=new R,fs=new R,Wu=new R,ic=new R,sc=new R,rc=new R;class An{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),dn.subVectors(t,e),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){dn.subVectors(s,e),Vn.subVectors(n,e),nc.subVectors(t,e);const o=dn.dot(dn),a=dn.dot(Vn),c=dn.dot(nc),l=Vn.dot(Vn),h=Vn.dot(nc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Gn.x),c.addScaledVector(o,Gn.y),c.addScaledVector(a,Gn.z),c)}static isFrontFacing(t,e,n,s){return dn.subVectors(n,e),Vn.subVectors(t,e),dn.cross(Vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),dn.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return An.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return An.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return An.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return An.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return An.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ds.subVectors(s,n),fs.subVectors(r,n),ic.subVectors(t,n);const c=ds.dot(ic),l=fs.dot(ic);if(c<=0&&l<=0)return e.copy(n);sc.subVectors(t,s);const h=ds.dot(sc),u=fs.dot(sc);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ds,o);rc.subVectors(t,r);const f=ds.dot(rc),g=fs.dot(rc);if(g>=0&&f<=g)return e.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(fs,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Wu.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Wu,a);const p=1/(m+v+d);return o=v*p,a=d*p,e.copy(n).addScaledVector(ds,o).addScaledVector(fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},ro={h:0,s:0,l:0};function oc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=kg(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=oc(o,r,t+1/3),this.g=oc(o,r,t),this.b=oc(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){const n=Sp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}copyLinearToSRGB(t){return this.r=$a(t.r),this.g=$a(t.g),this.b=$a(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return Qt.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Re(Ne.r*255,0,255))*65536+Math.round(Re(Ne.g*255,0,255))*256+Math.round(Re(Ne.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ne.copy(this),e);const n=Ne.r,s=Ne.g,r=Ne.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=mn){Qt.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,s=Ne.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(ro);const n=Xa(ci.h,ro.h,e),s=Xa(ci.s,ro.s,e),r=Xa(ci.l,ro.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new lt;lt.NAMES=Sp;let Qg=0;class ns extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=sr(),this.name="",this.type="Material",this.blending=Zi,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=il,this.blendDst=sl,this.blendEquation=gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==il&&(n.blendSrc=this.blendSrc),this.blendDst!==sl&&(n.blendDst=this.blendDst),this.blendEquation!==gn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ko&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Zn extends ns{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=rp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new R,oo=new ot;class ce{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return zg("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)oo.fromBufferAttribute(this,e),oo.applyMatrix3(t),this.setXY(e,oo.x,oo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=dr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=dr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=dr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=dr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=dr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pu&&(t.usage=this.usage),t}}class th extends ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wp extends ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Gt extends ce{constructor(t,e,n){super(new Float32Array(t),e,n)}}let tv=0;const tn=new Pt,ac=new be,ps=new R,$e=new Ci,gr=new Ci,Te=new R;class de extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_p(t)?wp:th)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return ac.lookAt(t),ac.updateMatrix(),this.applyMatrix4(ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Gt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors($e.min,gr.min),$e.expandByPoint(Te),Te.addVectors($e.max,gr.max),$e.expandByPoint(Te)):($e.expandByPoint(gr.min),$e.expandByPoint(gr.max))}$e.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Te));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Te.fromBufferAttribute(a,l),c&&(ps.fromBufferAttribute(t,l),Te.add(ps)),s=Math.max(s,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ce(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new R,c[L]=new R;const l=new R,h=new R,u=new R,d=new ot,f=new ot,g=new ot,v=new R,m=new R;function p(L,b,M){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[L].add(v),a[b].add(v),a[M].add(v),c[L].add(m),c[b].add(m),c[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let L=0,b=_.length;L<b;++L){const M=_[L],D=M.start,O=M.count;for(let I=D,z=D+O;I<z;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const x=new R,y=new R,A=new R,w=new R;function T(L){A.fromBufferAttribute(s,L),w.copy(A);const b=a[L];x.copy(b),x.sub(A.multiplyScalar(A.dot(b))).normalize(),y.crossVectors(w,b);const D=y.dot(c[L])<0?-1:1;o.setXYZW(L,x.x,x.y,x.z,D)}for(let L=0,b=_.length;L<b;++L){const M=_[L],D=M.start,O=M.count;for(let I=D,z=D+O;I<z;I+=3)T(t.getX(I+0)),T(t.getX(I+1)),T(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new ce(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new de,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xu=new Pt,ki=new Ql,ao=new ti,qu=new R,ms=new R,gs=new R,vs=new R,cc=new R,co=new R,lo=new ot,ho=new ot,uo=new ot,$u=new R,Yu=new R,ju=new R,fo=new R,po=new R;class pt extends be{constructor(t=new de,e=new Zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){co.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(cc.fromBufferAttribute(u,t),o?co.addScaledVector(cc,h):co.addScaledVector(cc.sub(e),h))}e.add(co)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(ao.containsPoint(ki.origin)===!1&&(ki.intersectSphere(ao,qu)===null||ki.origin.distanceToSquared(qu)>(t.far-t.near)**2))&&(Xu.copy(r).invert(),ki.copy(t.ray).applyMatrix4(Xu),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,A=x;y<A;y+=3){const w=a.getX(y),T=a.getX(y+1),L=a.getX(y+2);s=mo(this,p,t,n,l,h,u,w,T,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);s=mo(this,o,t,n,l,h,u,_,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,A=x;y<A;y+=3){const w=y,T=y+1,L=y+2;s=mo(this,p,t,n,l,h,u,w,T,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=m,x=m+1,y=m+2;s=mo(this,o,t,n,l,h,u,_,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function ev(i,t,e,n,s,r,o,a){let c;if(t.side===ke?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Kn,a),c===null)return null;po.copy(a),po.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(po);return l<e.near||l>e.far?null:{distance:l,point:po.clone(),object:i}}function mo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ms),i.getVertexPosition(c,gs),i.getVertexPosition(l,vs);const h=ev(i,t,e,n,ms,gs,vs,fo);if(h){s&&(lo.fromBufferAttribute(s,a),ho.fromBufferAttribute(s,c),uo.fromBufferAttribute(s,l),h.uv=An.getInterpolation(fo,ms,gs,vs,lo,ho,uo,new ot)),r&&(lo.fromBufferAttribute(r,a),ho.fromBufferAttribute(r,c),uo.fromBufferAttribute(r,l),h.uv1=An.getInterpolation(fo,ms,gs,vs,lo,ho,uo,new ot)),o&&($u.fromBufferAttribute(o,a),Yu.fromBufferAttribute(o,c),ju.fromBufferAttribute(o,l),h.normal=An.getInterpolation(fo,ms,gs,vs,$u,Yu,ju,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new R,materialIndex:0};An.getNormal(ms,gs,vs,u.normal),h.face=u}return h}class me extends de{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(u,2));function g(v,m,p,_,x,y,A,w,T,L,b){const M=y/T,D=A/L,O=y/2,I=A/2,z=w/2,X=T+1,Y=L+1;let et=0,U=0;const q=new R;for(let $=0;$<Y;$++){const Q=$*D-I;for(let dt=0;dt<X;dt++){const _t=dt*M-O;q[v]=_t*_,q[m]=Q*x,q[p]=z,l.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[p]=w>0?1:-1,h.push(q.x,q.y,q.z),u.push(dt/T),u.push(1-$/L),et+=1}}for(let $=0;$<L;$++)for(let Q=0;Q<T;Q++){const dt=d+Q+X*$,_t=d+Q+X*($+1),F=d+(Q+1)+X*($+1),K=d+(Q+1)+X*$;c.push(dt,_t,K),c.push(_t,F,K),U+=6}a.addGroup(f,U,b),f+=U,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function $s(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ze(i){const t={};for(let e=0;e<i.length;e++){const n=$s(i[e]);for(const s in n)t[s]=n[s]}return t}function nv(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ep(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Rn={clone:$s,merge:ze};var iv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class te extends ns{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iv,this.fragmentShader=sv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$s(t.uniforms),this.uniformsGroups=nv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Tp extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=$n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new R,Ku=new ot,Zu=new ot;class on extends Tp{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hl*2*Math.atan(Math.tan(Wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(li.x,li.y).multiplyScalar(-t/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-t/li.z)}getViewSize(t,e){return this.getViewBounds(t,Ku,Zu),e.subVectors(Zu,Ku)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Wa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xs=-90,_s=1;class Ap extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(xs,_s,t,e);s.layers=this.layers,this.add(s);const r=new on(xs,_s,t,e);r.layers=this.layers,this.add(r);const o=new on(xs,_s,t,e);o.layers=this.layers,this.add(o);const a=new on(xs,_s,t,e);a.layers=this.layers,this.add(a);const c=new on(xs,_s,t,e);c.layers=this.layers,this.add(c);const l=new on(xs,_s,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===$n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Rp extends Fe{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Gs,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Cp extends He{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Rp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new me(5,5,5),r=new te({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:Ae});r.uniforms.tEquirect.value=e;const o=new pt(s,r),a=e.minFilter;return e.minFilter===Yi&&(e.minFilter=vn),new Ap(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const lc=new R,rv=new R,ov=new Bt;class Gi{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=lc.subVectors(n,e).cross(rv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(lc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ov.getNormalMatrix(t),s=this.coplanarPoint(lc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new ti,go=new R;class eh{constructor(t=new Gi,e=new Gi,n=new Gi,s=new Gi,r=new Gi,o=new Gi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$n){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],_=s[13],x=s[14],y=s[15];if(n[0].setComponents(c-r,d-l,m-f,y-p).normalize(),n[1].setComponents(c+r,d+l,m+f,y+p).normalize(),n[2].setComponents(c+o,d+h,m+g,y+_).normalize(),n[3].setComponents(c-o,d-h,m-g,y-_).normalize(),n[4].setComponents(c-a,d-u,m-v,y-x).normalize(),e===$n)n[5].setComponents(c+a,d+u,m+v,y+x).normalize();else if(e===ta)n[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(go.x=s.normal.x>0?t.max.x:t.min.x,go.y=s.normal.y>0?t.max.y:t.min.y,go.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(go)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pp(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function av(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c._updateRange,d=c.updateRanges;if(i.bindBuffer(l,a),u.count===-1&&d.length===0&&i.bufferSubData(l,0,h),d.length!==0){for(let f=0,g=d.length;f<g;f++){const v=d[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Pe extends de{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const _=p*d-o;for(let x=0;x<l;x++){const y=x*u-r;g.push(y,-_,0),v.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){const x=_+l*p,y=_+l*(p+1),A=_+1+l*(p+1),w=_+1+l*p;f.push(x,y,w),f.push(y,A,w)}this.setIndex(f),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(v,3)),this.setAttribute("uv",new Gt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.width,t.height,t.widthSegments,t.heightSegments)}}var cv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lv=`#ifdef USE_ALPHAHASH
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
#endif`,hv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pv=`#ifdef USE_AOMAP
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
#endif`,mv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gv=`#ifdef USE_BATCHING
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
#endif`,vv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,xv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_v=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yv=`#ifdef USE_IRIDESCENCE
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
#endif`,bv=`#ifdef USE_BUMPMAP
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
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Av=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Pv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Lv=`#define PI 3.141592653589793
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
} // validated`,Iv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dv=`vec3 transformedNormal = objectNormal;
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
#endif`,Nv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ov=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fv="gl_FragColor = linearToOutputTexel( gl_FragColor );",zv=`
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
}`,Bv=`#ifdef USE_ENVMAP
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
#endif`,Hv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vv=`#ifdef USE_ENVMAP
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
#endif`,Gv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wv=`#ifdef USE_ENVMAP
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
#endif`,Xv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$v=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jv=`#ifdef USE_GRADIENTMAP
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
}`,Kv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tx=`uniform bool receiveShadow;
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
#endif`,ex=`#ifdef USE_ENVMAP
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
#endif`,nx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ox=`PhysicalMaterial material;
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
#endif`,ax=`struct PhysicalMaterial {
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
}`,cx=`
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
#endif`,lx=`#if defined( RE_IndirectDiffuse )
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
#endif`,hx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ux=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,px=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xx=`#if defined( USE_POINTS_UV )
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
#endif`,_x=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sx=`#ifdef USE_MORPHNORMALS
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
#endif`,wx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ex=`#ifdef USE_MORPHTARGETS
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
#endif`,Tx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ax=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Px=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lx=`#ifdef USE_NORMALMAP
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
#endif`,Ix=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ux=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ox=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$x=`float getShadowMask() {
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
}`,Yx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jx=`#ifdef USE_SKINNING
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
#endif`,Kx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zx=`#ifdef USE_SKINNING
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
#endif`,Jx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,n_=`#ifdef USE_TRANSMISSION
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
#endif`,i_=`#ifdef USE_TRANSMISSION
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
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l_=`uniform sampler2D t2D;
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
}`,h_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p_=`#include <common>
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
}`,m_=`#if DEPTH_PACKING == 3200
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
}`,g_=`#define DISTANCE
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
}`,v_=`#define DISTANCE
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
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,__=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M_=`uniform float scale;
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
}`,y_=`uniform vec3 diffuse;
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
}`,b_=`#include <common>
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
}`,S_=`uniform vec3 diffuse;
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
}`,w_=`#define LAMBERT
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
}`,E_=`#define LAMBERT
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
}`,T_=`#define MATCAP
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
}`,A_=`#define MATCAP
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
}`,R_=`#define NORMAL
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
}`,C_=`#define NORMAL
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
}`,P_=`#define PHONG
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
}`,L_=`#define PHONG
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
}`,I_=`#define STANDARD
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
}`,D_=`#define STANDARD
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
}`,N_=`#define TOON
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
}`,U_=`#define TOON
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
}`,O_=`uniform float size;
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
}`,k_=`uniform vec3 diffuse;
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
}`,F_=`#include <common>
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
}`,z_=`uniform vec3 color;
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
}`,B_=`uniform float rotation;
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
}`,H_=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:cv,alphahash_pars_fragment:lv,alphamap_fragment:hv,alphamap_pars_fragment:uv,alphatest_fragment:dv,alphatest_pars_fragment:fv,aomap_fragment:pv,aomap_pars_fragment:mv,batching_pars_vertex:gv,batching_vertex:vv,begin_vertex:xv,beginnormal_vertex:_v,bsdfs:Mv,iridescence_fragment:yv,bumpmap_pars_fragment:bv,clipping_planes_fragment:Sv,clipping_planes_pars_fragment:wv,clipping_planes_pars_vertex:Ev,clipping_planes_vertex:Tv,color_fragment:Av,color_pars_fragment:Rv,color_pars_vertex:Cv,color_vertex:Pv,common:Lv,cube_uv_reflection_fragment:Iv,defaultnormal_vertex:Dv,displacementmap_pars_vertex:Nv,displacementmap_vertex:Uv,emissivemap_fragment:Ov,emissivemap_pars_fragment:kv,colorspace_fragment:Fv,colorspace_pars_fragment:zv,envmap_fragment:Bv,envmap_common_pars_fragment:Hv,envmap_pars_fragment:Vv,envmap_pars_vertex:Gv,envmap_physical_pars_fragment:ex,envmap_vertex:Wv,fog_vertex:Xv,fog_pars_vertex:qv,fog_fragment:$v,fog_pars_fragment:Yv,gradientmap_pars_fragment:jv,lightmap_fragment:Kv,lightmap_pars_fragment:Zv,lights_lambert_fragment:Jv,lights_lambert_pars_fragment:Qv,lights_pars_begin:tx,lights_toon_fragment:nx,lights_toon_pars_fragment:ix,lights_phong_fragment:sx,lights_phong_pars_fragment:rx,lights_physical_fragment:ox,lights_physical_pars_fragment:ax,lights_fragment_begin:cx,lights_fragment_maps:lx,lights_fragment_end:hx,logdepthbuf_fragment:ux,logdepthbuf_pars_fragment:dx,logdepthbuf_pars_vertex:fx,logdepthbuf_vertex:px,map_fragment:mx,map_pars_fragment:gx,map_particle_fragment:vx,map_particle_pars_fragment:xx,metalnessmap_fragment:_x,metalnessmap_pars_fragment:Mx,morphinstance_vertex:yx,morphcolor_vertex:bx,morphnormal_vertex:Sx,morphtarget_pars_vertex:wx,morphtarget_vertex:Ex,normal_fragment_begin:Tx,normal_fragment_maps:Ax,normal_pars_fragment:Rx,normal_pars_vertex:Cx,normal_vertex:Px,normalmap_pars_fragment:Lx,clearcoat_normal_fragment_begin:Ix,clearcoat_normal_fragment_maps:Dx,clearcoat_pars_fragment:Nx,iridescence_pars_fragment:Ux,opaque_fragment:Ox,packing:kx,premultiplied_alpha_fragment:Fx,project_vertex:zx,dithering_fragment:Bx,dithering_pars_fragment:Hx,roughnessmap_fragment:Vx,roughnessmap_pars_fragment:Gx,shadowmap_pars_fragment:Wx,shadowmap_pars_vertex:Xx,shadowmap_vertex:qx,shadowmask_pars_fragment:$x,skinbase_vertex:Yx,skinning_pars_vertex:jx,skinning_vertex:Kx,skinnormal_vertex:Zx,specularmap_fragment:Jx,specularmap_pars_fragment:Qx,tonemapping_fragment:t_,tonemapping_pars_fragment:e_,transmission_fragment:n_,transmission_pars_fragment:i_,uv_pars_fragment:s_,uv_pars_vertex:r_,uv_vertex:o_,worldpos_vertex:a_,background_vert:c_,background_frag:l_,backgroundCube_vert:h_,backgroundCube_frag:u_,cube_vert:d_,cube_frag:f_,depth_vert:p_,depth_frag:m_,distanceRGBA_vert:g_,distanceRGBA_frag:v_,equirect_vert:x_,equirect_frag:__,linedashed_vert:M_,linedashed_frag:y_,meshbasic_vert:b_,meshbasic_frag:S_,meshlambert_vert:w_,meshlambert_frag:E_,meshmatcap_vert:T_,meshmatcap_frag:A_,meshnormal_vert:R_,meshnormal_frag:C_,meshphong_vert:P_,meshphong_frag:L_,meshphysical_vert:I_,meshphysical_frag:D_,meshtoon_vert:N_,meshtoon_frag:U_,points_vert:O_,points_frag:k_,shadow_vert:F_,shadow_frag:z_,sprite_vert:B_,sprite_frag:H_},ct={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},En={basic:{uniforms:ze([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:ze([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new lt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:ze([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:ze([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:ze([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new lt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:ze([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:ze([ct.points,ct.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:ze([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:ze([ct.common,ct.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:ze([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:ze([ct.sprite,ct.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:ze([ct.common,ct.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:ze([ct.lights,ct.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};En.physical={uniforms:ze([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const vo={r:0,b:0,g:0},zi=new ln,V_=new Pt;function G_(i,t,e,n,s,r,o){const a=new lt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(m,p){let _=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?v(a,c):x&&x.isColor&&(v(x,1),_=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===xa)?(h===void 0&&(h=new pt(new me(1,1,1),new te({name:"BackgroundCubeMaterial",uniforms:$s(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),zi.copy(p.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(V_.makeRotationFromEuler(zi)),h.material.toneMapped=Qt.getTransfer(x.colorSpace)!==se,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new pt(new Pe(2,2),new te({name:"BackgroundMaterial",uniforms:$s(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(x.colorSpace)!==se,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,p){m.getRGB(vo,Ep(i)),n.buffers.color.setClear(vo.r,vo.g,vo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(a,c)},render:g}}function W_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,D,O,I,z){let X=!1;const Y=u(I,O,D);r!==Y&&(r=Y,l(r.object)),X=f(M,I,O,z),X&&g(M,I,O,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(M,D,O,I),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,D,O){const I=O.wireframe===!0;let z=n[M.id];z===void 0&&(z={},n[M.id]=z);let X=z[D.id];X===void 0&&(X={},z[D.id]=X);let Y=X[I];return Y===void 0&&(Y=d(c()),X[I]=Y),Y}function d(M){const D=[],O=[],I=[];for(let z=0;z<e;z++)D[z]=0,O[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:I,object:M,attributes:{},index:null}}function f(M,D,O,I){const z=r.attributes,X=D.attributes;let Y=0;const et=O.getAttributes();for(const U in et)if(et[U].location>=0){const $=z[U];let Q=X[U];if(Q===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),$===void 0||$.attribute!==Q||Q&&$.data!==Q.data)return!0;Y++}return r.attributesNum!==Y||r.index!==I}function g(M,D,O,I){const z={},X=D.attributes;let Y=0;const et=O.getAttributes();for(const U in et)if(et[U].location>=0){let $=X[U];$===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&($=M.instanceColor));const Q={};Q.attribute=$,$&&$.data&&(Q.data=$.data),z[U]=Q,Y++}r.attributes=z,r.attributesNum=Y,r.index=I}function v(){const M=r.newAttributes;for(let D=0,O=M.length;D<O;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){const O=r.newAttributes,I=r.enabledAttributes,z=r.attributeDivisors;O[M]=1,I[M]===0&&(i.enableVertexAttribArray(M),I[M]=1),z[M]!==D&&(i.vertexAttribDivisor(M,D),z[M]=D)}function _(){const M=r.newAttributes,D=r.enabledAttributes;for(let O=0,I=D.length;O<I;O++)D[O]!==M[O]&&(i.disableVertexAttribArray(O),D[O]=0)}function x(M,D,O,I,z,X,Y){Y===!0?i.vertexAttribIPointer(M,D,O,z,X):i.vertexAttribPointer(M,D,O,I,z,X)}function y(M,D,O,I){v();const z=I.attributes,X=O.getAttributes(),Y=D.defaultAttributeValues;for(const et in X){const U=X[et];if(U.location>=0){let q=z[et];if(q===void 0&&(et==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),et==="instanceColor"&&M.instanceColor&&(q=M.instanceColor)),q!==void 0){const $=q.normalized,Q=q.itemSize,dt=t.get(q);if(dt===void 0)continue;const _t=dt.buffer,F=dt.type,K=dt.bytesPerElement,at=F===i.INT||F===i.UNSIGNED_INT||q.gpuType===lp;if(q.isInterleavedBufferAttribute){const nt=q.data,bt=nt.stride,Et=q.offset;if(nt.isInstancedInterleavedBuffer){for(let Lt=0;Lt<U.locationSize;Lt++)p(U.location+Lt,nt.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Lt=0;Lt<U.locationSize;Lt++)m(U.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Lt=0;Lt<U.locationSize;Lt++)x(U.location+Lt,Q/U.locationSize,F,$,bt*K,(Et+Q/U.locationSize*Lt)*K,at)}else{if(q.isInstancedBufferAttribute){for(let nt=0;nt<U.locationSize;nt++)p(U.location+nt,q.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let nt=0;nt<U.locationSize;nt++)m(U.location+nt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let nt=0;nt<U.locationSize;nt++)x(U.location+nt,Q/U.locationSize,F,$,Q*K,Q/U.locationSize*nt*K,at)}}else if(Y!==void 0){const $=Y[et];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(U.location,$);break;case 3:i.vertexAttrib3fv(U.location,$);break;case 4:i.vertexAttrib4fv(U.location,$);break;default:i.vertexAttrib1fv(U.location,$)}}}}_()}function A(){L();for(const M in n){const D=n[M];for(const O in D){const I=D[O];for(const z in I)h(I[z].object),delete I[z];delete D[O]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const O in D){const I=D[O];for(const z in I)h(I[z].object),delete I[z];delete D[O]}delete n[M.id]}function T(M){for(const D in n){const O=n[D];if(O[M.id]===void 0)continue;const I=O[M.id];for(const z in I)h(I[z].object),delete I[z];delete O[M.id]}}function L(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function X_(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<h;d++)this.render(c[d],l[d]);else{u.multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];e.update(d,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function q_(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const x=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=e.precision!==void 0?e.precision:"highp";const a=r(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const c=e.logarithmicDepthBuffer===!0,l=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),m=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),p=h>0,_=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:c,maxTextures:l,maxVertexTextures:h,maxTextureSize:u,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:m,vertexTextures:p,maxSamples:_}}function $_(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Gi,a=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const _=r?0:n,x=_*4;let y=p.clippingState||null;c.value=y,y=h(g,d,x,f);for(let A=0;A!==x;++A)y[A]=e[A];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=f;x!==v;++x,y+=4)o.copy(u[x]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Y_(i){let t=new WeakMap;function e(o,a){return a===al?o.mapping=Gs:a===cl&&(o.mapping=Ws),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===al||a===cl)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Cp(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class nh extends Tp{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ds=4,Ju=[.125,.215,.35,.446,.526,.582],qi=20,hc=new nh,Qu=new lt;let uc=null,dc=0,fc=0,pc=!1;const Wi=(1+Math.sqrt(5))/2,Ms=1/Wi,td=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Wi,Ms),new R(0,Wi,-Ms),new R(Ms,0,Wi),new R(-Ms,0,Wi),new R(Wi,Ms,0),new R(-Wi,Ms,0)];class na{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){uc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(uc,dc,fc),this._renderer.xr.enabled=pc,t.scissorTest=!1,xo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gs||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Ze,format:cn,colorSpace:Ri,depthBuffer:!1},s=ed(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ed(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=j_(r)),this._blurMaterial=K_(r,t,e)}return s}_compileMaterial(t){const e=new pt(this._lodPlanes[0],t);this._renderer.compile(e,hc)}_sceneToCubeUV(t,e,n,s){const a=new on(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Qu),h.toneMapping=Mi,h.autoClear=!1;const f=new Zn({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),g=new pt(new me,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Qu),v=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):_===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;xo(s,_*x,p>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Gs||t.mapping===Ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=id()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;xo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,hc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=td[(s-1)%td.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new pt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*qi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):qi;m>qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);const p=[];let _=0;for(let T=0;T<qi;++T){const L=T/v,b=Math.exp(-L*L/2);p.push(b),T===0?_+=b:T<m&&(_+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const y=this._sizeLods[s],A=3*y*(s>x-Ds?s-x+Ds:0),w=4*(this._cubeSize-y);xo(e,A,w,3*y,2*y),c.setRenderTarget(e),c.render(u,hc)}}function j_(i){const t=[],e=[],n=[];let s=i;const r=i-Ds+1+Ju.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ds?c=Ju[o-i+Ds-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*f),x=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let w=0;w<f;w++){const T=w%3*2/3-1,L=w>2?0:-1,b=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];_.set(b,v*g*w),x.set(d,m*g*w);const M=[w,w,w,w,w,w];y.set(M,p*g*w)}const A=new de;A.setAttribute("position",new ce(_,v)),A.setAttribute("uv",new ce(x,m)),A.setAttribute("faceIndex",new ce(y,p)),t.push(A),s>Ds&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ed(i,t,e){const n=new He(i,t,e);return n.texture.mapping=xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function K_(i,t,e){const n=new Float32Array(qi),s=new R(0,1,0);return new te({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ih(),fragmentShader:`

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
		`,blending:Ae,depthTest:!1,depthWrite:!1})}function nd(){return new te({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ih(),fragmentShader:`

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
		`,blending:Ae,depthTest:!1,depthWrite:!1})}function id(){return new te({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ae,depthTest:!1,depthWrite:!1})}function ih(){return`

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
	`}function Z_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===al||c===cl,h=c===Gs||c===Ws;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new na(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new na(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function J_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Q_(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const _=f.array;v=f.version;for(let x=0,y=_.length;x<y;x+=3){const A=_[x+0],w=_[x+1],T=_[x+2];d.push(A,w,w,T,T,A)}}else if(g!==void 0){const _=g.array;v=g.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const A=x+0,w=x+1,T=x+2;d.push(A,w,w,T,T,A)}}else return;const m=new(_p(d)?wp:th)(d,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function t1(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*o),e.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<f;v++)this.render(u[v]/o,d[v]);else{g.multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let m=0;m<f;m++)v+=d[m];e.update(v,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function e1(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function n1(i,t,e){const n=new WeakMap,s=new ve;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let b=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;f===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let y=a.attributes.position.count*x,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const w=new Float32Array(y*A*4*u),T=new yp(w,y,A,u);T.type=Cn,T.needsUpdate=!0;const L=x*4;for(let M=0;M<u;M++){const D=m[M],O=p[M],I=_[M],z=y*A*4*M;for(let X=0;X<D.count;X++){const Y=X*L;f===!0&&(s.fromBufferAttribute(D,X),w[z+Y+0]=s.x,w[z+Y+1]=s.y,w[z+Y+2]=s.z,w[z+Y+3]=0),g===!0&&(s.fromBufferAttribute(O,X),w[z+Y+4]=s.x,w[z+Y+5]=s.y,w[z+Y+6]=s.z,w[z+Y+7]=0),v===!0&&(s.fromBufferAttribute(I,X),w[z+Y+8]=s.x,w[z+Y+9]=s.y,w[z+Y+10]=s.z,w[z+Y+11]=I.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new ot(y,A)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function i1(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class sh extends Fe{constructor(t,e,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:ks,h!==ks&&h!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ks&&(n=Xs),n===void 0&&h===qs&&(n=nr),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ye,this.minFilter=c!==void 0?c:ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Lp=new Fe,Ip=new sh(1,1);Ip.compareFunction=xp;const Dp=new yp,Np=new Xg,Up=new Rp,sd=[],rd=[],od=new Float32Array(16),ad=new Float32Array(9),cd=new Float32Array(4);function rr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=sd[s];if(r===void 0&&(r=new Float32Array(s),sd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ma(i,t){let e=rd[t];e===void 0&&(e=new Int32Array(t),rd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function s1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function r1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function o1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function a1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function c1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Se(e,n))return;cd.set(n),i.uniformMatrix2fv(this.addr,!1,cd),we(e,n)}}function l1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Se(e,n))return;ad.set(n),i.uniformMatrix3fv(this.addr,!1,ad),we(e,n)}}function h1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Se(e,n))return;od.set(n),i.uniformMatrix4fv(this.addr,!1,od),we(e,n)}}function u1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function d1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function f1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function p1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function m1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function g1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function v1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function x1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function _1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Ip:Lp;e.setTexture2D(t||r,s)}function M1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Np,s)}function y1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Up,s)}function b1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Dp,s)}function S1(i){switch(i){case 5126:return s1;case 35664:return r1;case 35665:return o1;case 35666:return a1;case 35674:return c1;case 35675:return l1;case 35676:return h1;case 5124:case 35670:return u1;case 35667:case 35671:return d1;case 35668:case 35672:return f1;case 35669:case 35673:return p1;case 5125:return m1;case 36294:return g1;case 36295:return v1;case 36296:return x1;case 35678:case 36198:case 36298:case 36306:case 35682:return _1;case 35679:case 36299:case 36307:return M1;case 35680:case 36300:case 36308:case 36293:return y1;case 36289:case 36303:case 36311:case 36292:return b1}}function w1(i,t){i.uniform1fv(this.addr,t)}function E1(i,t){const e=rr(t,this.size,2);i.uniform2fv(this.addr,e)}function T1(i,t){const e=rr(t,this.size,3);i.uniform3fv(this.addr,e)}function A1(i,t){const e=rr(t,this.size,4);i.uniform4fv(this.addr,e)}function R1(i,t){const e=rr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function C1(i,t){const e=rr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function P1(i,t){const e=rr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function L1(i,t){i.uniform1iv(this.addr,t)}function I1(i,t){i.uniform2iv(this.addr,t)}function D1(i,t){i.uniform3iv(this.addr,t)}function N1(i,t){i.uniform4iv(this.addr,t)}function U1(i,t){i.uniform1uiv(this.addr,t)}function O1(i,t){i.uniform2uiv(this.addr,t)}function k1(i,t){i.uniform3uiv(this.addr,t)}function F1(i,t){i.uniform4uiv(this.addr,t)}function z1(i,t,e){const n=this.cache,s=t.length,r=Ma(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Lp,r[o])}function B1(i,t,e){const n=this.cache,s=t.length,r=Ma(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Np,r[o])}function H1(i,t,e){const n=this.cache,s=t.length,r=Ma(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Up,r[o])}function V1(i,t,e){const n=this.cache,s=t.length,r=Ma(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Dp,r[o])}function G1(i){switch(i){case 5126:return w1;case 35664:return E1;case 35665:return T1;case 35666:return A1;case 35674:return R1;case 35675:return C1;case 35676:return P1;case 5124:case 35670:return L1;case 35667:case 35671:return I1;case 35668:case 35672:return D1;case 35669:case 35673:return N1;case 5125:return U1;case 36294:return O1;case 36295:return k1;case 36296:return F1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return B1;case 35680:case 36300:case 36308:case 36293:return H1;case 36289:case 36303:case 36311:case 36292:return V1}}class W1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=S1(e.type)}}class X1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=G1(e.type)}}class q1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const mc=/(\w+)(\])?(\[|\.)?/g;function ld(i,t){i.seq.push(t),i.map[t.id]=t}function $1(i,t,e){const n=i.name,s=n.length;for(mc.lastIndex=0;;){const r=mc.exec(n),o=mc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ld(e,l===void 0?new W1(a,i,t):new X1(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new q1(a),ld(e,u)),e=u}}}class Wo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);$1(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function hd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Y1=37297;let j1=0;function K1(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Z1(i){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(i);let n;switch(t===e?n="":t===Qo&&e===Jo?n="LinearDisplayP3ToLinearSRGB":t===Jo&&e===Qo&&(n="LinearSRGBToLinearDisplayP3"),i){case Ri:case _a:return[n,"LinearTransferOETF"];case mn:case Jl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ud(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+K1(i.getShaderSource(t),o)}else return s}function J1(i,t){const e=Z1(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Q1(i,t){let e;switch(t){case dg:e="Linear";break;case fg:e="Reinhard";break;case pg:e="OptimizedCineon";break;case op:e="ACESFilmic";break;case Kl:e="AgX";break;case gg:e="Neutral";break;case mg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function tM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ar).join(`
`)}function eM(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function nM(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ar(i){return i!==""}function dd(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const iM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(i){return i.replace(iM,rM)}const sM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function rM(i,t){let e=zt[t];if(e===void 0){const n=sM.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ul(e)}const oM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pd(i){return i.replace(oM,aM)}function aM(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function md(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function cM(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ip?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===sp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function lM(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gs:case Ws:t="ENVMAP_TYPE_CUBE";break;case xa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hM(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ws:t="ENVMAP_MODE_REFRACTION";break}return t}function uM(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case rp:t="ENVMAP_BLENDING_MULTIPLY";break;case hg:t="ENVMAP_BLENDING_MIX";break;case ug:t="ENVMAP_BLENDING_ADD";break}return t}function dM(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function fM(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=cM(e),l=lM(e),h=hM(e),u=uM(e),d=dM(e),f=tM(e),g=eM(r),v=s.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ar).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ar).join(`
`),p.length>0&&(p+=`
`)):(m=[md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),p=[md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mi?"#define TONE_MAPPING":"",e.toneMapping!==Mi?zt.tonemapping_pars_fragment:"",e.toneMapping!==Mi?Q1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,J1("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ar).join(`
`)),o=ul(o),o=dd(o,e),o=fd(o,e),a=ul(a),a=dd(a,e),a=fd(a,e),o=pd(o),a=pd(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=_+m+o,y=_+p+a,A=hd(s,s.VERTEX_SHADER,x),w=hd(s,s.FRAGMENT_SHADER,y);s.attachShader(v,A),s.attachShader(v,w),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(D){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(v).trim(),I=s.getShaderInfoLog(A).trim(),z=s.getShaderInfoLog(w).trim();let X=!0,Y=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,A,w);else{const et=ud(s,A,"vertex"),U=ud(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+et+`
`+U)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(I===""||z==="")&&(Y=!1);Y&&(D.diagnostics={runnable:X,programLog:O,vertexShader:{log:I,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(A),s.deleteShader(w),L=new Wo(s,v),b=nM(s,v)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,Y1)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=j1++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=w,this}let pM=0;class mM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new gM(t),e.set(t,n)),n}}class gM{constructor(t){this.id=pM++,this.code=t,this.usedTimes=0}}function vM(i,t,e,n,s,r,o){const a=new bp,c=new mM,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,M,D,O,I){const z=O.fog,X=I.geometry,Y=b.isMeshStandardMaterial?O.environment:null,et=(b.isMeshStandardMaterial?e:t).get(b.envMap||Y),U=et&&et.mapping===xa?et.image.height:null,q=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const $=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Q=$!==void 0?$.length:0;let dt=0;X.morphAttributes.position!==void 0&&(dt=1),X.morphAttributes.normal!==void 0&&(dt=2),X.morphAttributes.color!==void 0&&(dt=3);let _t,F,K,at;if(q){const Le=En[q];_t=Le.vertexShader,F=Le.fragmentShader}else _t=b.vertexShader,F=b.fragmentShader,c.update(b),K=c.getVertexShaderID(b),at=c.getFragmentShaderID(b);const nt=i.getRenderTarget(),bt=I.isInstancedMesh===!0,Et=I.isBatchedMesh===!0,Lt=!!b.map,k=!!b.matcap,mt=!!et,Mt=!!b.aoMap,Jt=!!b.lightMap,Tt=!!b.bumpMap,Yt=!!b.normalMap,C=!!b.displacementMap,S=!!b.emissiveMap,H=!!b.metalnessMap,j=!!b.roughnessMap,Z=b.anisotropy>0,J=b.clearcoat>0,At=b.iridescence>0,tt=b.sheen>0,St=b.transmission>0,Rt=Z&&!!b.anisotropyMap,rt=J&&!!b.clearcoatMap,ut=J&&!!b.clearcoatNormalMap,It=J&&!!b.clearcoatRoughnessMap,gt=At&&!!b.iridescenceMap,vt=At&&!!b.iridescenceThicknessMap,Wt=tt&&!!b.sheenColorMap,qt=tt&&!!b.sheenRoughnessMap,Zt=!!b.specularMap,jt=!!b.specularColorMap,ne=!!b.specularIntensityMap,xt=St&&!!b.transmissionMap,P=St&&!!b.thicknessMap,st=!!b.gradientMap,it=!!b.alphaMap,yt=b.alphaTest>0,Ct=!!b.alphaHash,ie=!!b.extensions;let he=Mi;b.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(he=i.toneMapping);const fe={shaderID:q,shaderType:b.type,shaderName:b.name,vertexShader:_t,fragmentShader:F,defines:b.defines,customVertexShaderID:K,customFragmentShaderID:at,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Et,instancing:bt,instancingColor:bt&&I.instanceColor!==null,instancingMorph:bt&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Ri,alphaToCoverage:!!b.alphaToCoverage,map:Lt,matcap:k,envMap:mt,envMapMode:mt&&et.mapping,envMapCubeUVHeight:U,aoMap:Mt,lightMap:Jt,bumpMap:Tt,normalMap:Yt,displacementMap:d&&C,emissiveMap:S,normalMapObjectSpace:Yt&&b.normalMapType===Cg,normalMapTangentSpace:Yt&&b.normalMapType===Zl,metalnessMap:H,roughnessMap:j,anisotropy:Z,anisotropyMap:Rt,clearcoat:J,clearcoatMap:rt,clearcoatNormalMap:ut,clearcoatRoughnessMap:It,iridescence:At,iridescenceMap:gt,iridescenceThicknessMap:vt,sheen:tt,sheenColorMap:Wt,sheenRoughnessMap:qt,specularMap:Zt,specularColorMap:jt,specularIntensityMap:ne,transmission:St,transmissionMap:xt,thicknessMap:P,gradientMap:st,opaque:b.transparent===!1&&b.blending===Zi&&b.alphaToCoverage===!1,alphaMap:it,alphaTest:yt,alphaHash:Ct,combine:b.combine,mapUv:Lt&&v(b.map.channel),aoMapUv:Mt&&v(b.aoMap.channel),lightMapUv:Jt&&v(b.lightMap.channel),bumpMapUv:Tt&&v(b.bumpMap.channel),normalMapUv:Yt&&v(b.normalMap.channel),displacementMapUv:C&&v(b.displacementMap.channel),emissiveMapUv:S&&v(b.emissiveMap.channel),metalnessMapUv:H&&v(b.metalnessMap.channel),roughnessMapUv:j&&v(b.roughnessMap.channel),anisotropyMapUv:Rt&&v(b.anisotropyMap.channel),clearcoatMapUv:rt&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ut&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:qt&&v(b.sheenRoughnessMap.channel),specularMapUv:Zt&&v(b.specularMap.channel),specularColorMapUv:jt&&v(b.specularColorMap.channel),specularIntensityMapUv:ne&&v(b.specularIntensityMap.channel),transmissionMapUv:xt&&v(b.transmissionMap.channel),thicknessMapUv:P&&v(b.thicknessMap.channel),alphaMapUv:it&&v(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Yt||Z),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!X.attributes.uv&&(Lt||it),fog:!!z,useFog:b.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:I.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:dt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Lt&&b.map.isVideoTexture===!0&&Qt.getTransfer(b.map.colorSpace)===se,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===an,flipSided:b.side===ke,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ie&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ie&&b.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return fe.vertexUv1s=l.has(1),fe.vertexUv2s=l.has(2),fe.vertexUv3s=l.has(3),l.clear(),fe}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)M.push(D),M.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(_(M,b),x(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function _(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function x(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),b.push(a.mask)}function y(b){const M=g[b.type];let D;if(M){const O=En[M];D=Rn.clone(O.uniforms)}else D=b.uniforms;return D}function A(b,M){let D;for(let O=0,I=h.length;O<I;O++){const z=h[O];if(z.cacheKey===M){D=z,++D.usedTimes;break}}return D===void 0&&(D=new fM(i,M,b,r),h.push(D)),D}function w(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function T(b){c.remove(b)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:A,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:L}}function xM(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function _M(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function gd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vd(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function a(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||_M),n.length>1&&n.sort(d||gd),s.length>1&&s.sort(d||gd)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function MM(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new vd,i.set(n,[o])):s>=r.length?(o=new vd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function yM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new lt};break;case"SpotLight":e={position:new R,direction:new R,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":e={color:new lt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function bM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let SM=0;function wM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function EM(i){const t=new yM,e=bM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new Pt,o=new Pt;function a(l,h){let u=0,d=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let g=0,v=0,m=0,p=0,_=0,x=0,y=0,A=0,w=0,T=0,L=0;l.sort(wM);const b=h===!0?Math.PI:1;for(let D=0,O=l.length;D<O;D++){const I=l[D],z=I.color,X=I.intensity,Y=I.distance,et=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=z.r*X*b,d+=z.g*X*b,f+=z.b*X*b;else if(I.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(I.sh.coefficients[U],X);L++}else if(I.isDirectionalLight){const U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*b),I.castShadow){const q=I.shadow,$=e.get(I);$.shadowBias=q.bias,$.shadowNormalBias=q.normalBias,$.shadowRadius=q.radius,$.shadowMapSize=q.mapSize,n.directionalShadow[g]=$,n.directionalShadowMap[g]=et,n.directionalShadowMatrix[g]=I.shadow.matrix,x++}n.directional[g]=U,g++}else if(I.isSpotLight){const U=t.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(z).multiplyScalar(X*b),U.distance=Y,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,n.spot[m]=U;const q=I.shadow;if(I.map&&(n.spotLightMap[w]=I.map,w++,q.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[m]=q.matrix,I.castShadow){const $=e.get(I);$.shadowBias=q.bias,$.shadowNormalBias=q.normalBias,$.shadowRadius=q.radius,$.shadowMapSize=q.mapSize,n.spotShadow[m]=$,n.spotShadowMap[m]=et,A++}m++}else if(I.isRectAreaLight){const U=t.get(I);U.color.copy(z).multiplyScalar(X),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=U,p++}else if(I.isPointLight){const U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*b),U.distance=I.distance,U.decay=I.decay,I.castShadow){const q=I.shadow,$=e.get(I);$.shadowBias=q.bias,$.shadowNormalBias=q.normalBias,$.shadowRadius=q.radius,$.shadowMapSize=q.mapSize,$.shadowCameraNear=q.camera.near,$.shadowCameraFar=q.camera.far,n.pointShadow[v]=$,n.pointShadowMap[v]=et,n.pointShadowMatrix[v]=I.shadow.matrix,y++}n.point[v]=U,v++}else if(I.isHemisphereLight){const U=t.get(I);U.skyColor.copy(I.color).multiplyScalar(X*b),U.groundColor.copy(I.groundColor).multiplyScalar(X*b),n.hemi[_]=U,_++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const M=n.hash;(M.directionalLength!==g||M.pointLength!==v||M.spotLength!==m||M.rectAreaLength!==p||M.hemiLength!==_||M.numDirectionalShadows!==x||M.numPointShadows!==y||M.numSpotShadows!==A||M.numSpotMaps!==w||M.numLightProbes!==L)&&(n.directional.length=g,n.spot.length=m,n.rectArea.length=p,n.point.length=v,n.hemi.length=_,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=A+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=L,M.directionalLength=g,M.pointLength=v,M.spotLength=m,M.rectAreaLength=p,M.hemiLength=_,M.numDirectionalShadows=x,M.numPointShadows=y,M.numSpotShadows=A,M.numSpotMaps=w,M.numLightProbes=L,n.version=SM++)}function c(l,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){const x=l[p];if(x.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(x.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function xd(i){const t=new EM(i),e=[],n=[];function s(){e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(h){t.setup(e,h)}function c(h){t.setupView(e,h)}return{init:s,state:{lightsArray:e,shadowsArray:n,lights:t,transmissionRenderTarget:null},setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function TM(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new xd(i),t.set(s,[a])):r>=o.length?(a=new xd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Op extends ns{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class AM extends ns{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const RM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CM=`uniform sampler2D shadow_pass;
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
}`;function PM(i,t,e){let n=new eh;const s=new ot,r=new ot,o=new ve,a=new Op({depthPacking:vp}),c=new AM,l={},h=e.maxTextureSize,u={[Kn]:ke,[ke]:Kn,[an]:an},d=new te({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:RM,fragmentShader:CM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new de;g.setAttribute("position",new ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new pt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ip;let p=this.type;this.render=function(w,T,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const b=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Ae),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const I=p!==Xn&&this.type===Xn,z=p===Xn&&this.type!==Xn;for(let X=0,Y=w.length;X<Y;X++){const et=w[X],U=et.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const q=U.getFrameExtents();if(s.multiply(q),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,U.mapSize.y=r.y)),U.map===null||I===!0||z===!0){const Q=this.type!==Xn?{minFilter:ye,magFilter:ye}:{};U.map!==null&&U.map.dispose(),U.map=new He(s.x,s.y,Q),U.map.texture.name=et.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();const $=U.getViewportCount();for(let Q=0;Q<$;Q++){const dt=U.getViewport(Q);o.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),O.viewport(o),U.updateMatrices(et,Q),n=U.getFrustum(),y(T,L,U.camera,et,this.type)}U.isPointLightShadow!==!0&&this.type===Xn&&_(U,L),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,D)};function _(w,T){const L=t.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new He(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,L,d,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,L,f,v,null)}function x(w,T,L,b){let M=null;const D=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)M=D;else if(M=L.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const O=M.uuid,I=T.uuid;let z=l[O];z===void 0&&(z={},l[O]=z);let X=z[I];X===void 0&&(X=M.clone(),z[I]=X,T.addEventListener("dispose",A)),M=X}if(M.visible=T.visible,M.wireframe=T.wireframe,b===Xn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=i.properties.get(M);O.light=L}return M}function y(w,T,L,b,M){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Xn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const I=t.update(w),z=w.material;if(Array.isArray(z)){const X=I.groups;for(let Y=0,et=X.length;Y<et;Y++){const U=X[Y],q=z[U.materialIndex];if(q&&q.visible){const $=x(w,q,b,M);w.onBeforeShadow(i,w,T,L,I,$,U),i.renderBufferDirect(L,null,I,$,w,U),w.onAfterShadow(i,w,T,L,I,$,U)}}}else if(z.visible){const X=x(w,z,b,M);w.onBeforeShadow(i,w,T,L,I,X,null),i.renderBufferDirect(L,null,I,X,w,null),w.onAfterShadow(i,w,T,L,I,X,null)}}const O=w.children;for(let I=0,z=O.length;I<z;I++)y(O[I],T,L,b,M)}function A(w){w.target.removeEventListener("dispose",A);for(const L in l){const b=l[L],M=w.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}function LM(i){function t(){let P=!1;const st=new ve;let it=null;const yt=new ve(0,0,0,0);return{setMask:function(Ct){it!==Ct&&!P&&(i.colorMask(Ct,Ct,Ct,Ct),it=Ct)},setLocked:function(Ct){P=Ct},setClear:function(Ct,ie,he,fe,Le){Le===!0&&(Ct*=fe,ie*=fe,he*=fe),st.set(Ct,ie,he,fe),yt.equals(st)===!1&&(i.clearColor(Ct,ie,he,fe),yt.copy(st))},reset:function(){P=!1,it=null,yt.set(-1,0,0,0)}}}function e(){let P=!1,st=null,it=null,yt=null;return{setTest:function(Ct){Ct?at(i.DEPTH_TEST):nt(i.DEPTH_TEST)},setMask:function(Ct){st!==Ct&&!P&&(i.depthMask(Ct),st=Ct)},setFunc:function(Ct){if(it!==Ct){switch(Ct){case ig:i.depthFunc(i.NEVER);break;case sg:i.depthFunc(i.ALWAYS);break;case rg:i.depthFunc(i.LESS);break;case Ko:i.depthFunc(i.LEQUAL);break;case og:i.depthFunc(i.EQUAL);break;case ag:i.depthFunc(i.GEQUAL);break;case cg:i.depthFunc(i.GREATER);break;case lg:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}it=Ct}},setLocked:function(Ct){P=Ct},setClear:function(Ct){yt!==Ct&&(i.clearDepth(Ct),yt=Ct)},reset:function(){P=!1,st=null,it=null,yt=null}}}function n(){let P=!1,st=null,it=null,yt=null,Ct=null,ie=null,he=null,fe=null,Le=null;return{setTest:function(le){P||(le?at(i.STENCIL_TEST):nt(i.STENCIL_TEST))},setMask:function(le){st!==le&&!P&&(i.stencilMask(le),st=le)},setFunc:function(le,Mn,yn){(it!==le||yt!==Mn||Ct!==yn)&&(i.stencilFunc(le,Mn,yn),it=le,yt=Mn,Ct=yn)},setOp:function(le,Mn,yn){(ie!==le||he!==Mn||fe!==yn)&&(i.stencilOp(le,Mn,yn),ie=le,he=Mn,fe=yn)},setLocked:function(le){P=le},setClear:function(le){Le!==le&&(i.clearStencil(le),Le=le)},reset:function(){P=!1,st=null,it=null,yt=null,Ct=null,ie=null,he=null,fe=null,Le=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,_=null,x=null,y=null,A=null,w=new lt(0,0,0),T=0,L=!1,b=null,M=null,D=null,O=null,I=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Y=0;const et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(et)[1]),X=Y>=1):et.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),X=Y>=2);let U=null,q={};const $=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),dt=new ve().fromArray($),_t=new ve().fromArray(Q);function F(P,st,it,yt){const Ct=new Uint8Array(4),ie=i.createTexture();i.bindTexture(P,ie),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let he=0;he<it;he++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,Ct):i.texImage2D(st+he,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ct);return ie}const K={};K[i.TEXTURE_2D]=F(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=F(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=F(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=F(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),at(i.DEPTH_TEST),r.setFunc(Ko),Tt(!1),Yt(tu),at(i.CULL_FACE),Mt(Ae);function at(P){l[P]!==!0&&(i.enable(P),l[P]=!0)}function nt(P){l[P]!==!1&&(i.disable(P),l[P]=!1)}function bt(P,st){return h[P]!==st?(i.bindFramebuffer(P,st),h[P]=st,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=st),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=st),!0):!1}function Et(P,st){let it=d,yt=!1;if(P){it=u.get(st),it===void 0&&(it=[],u.set(st,it));const Ct=P.textures;if(it.length!==Ct.length||it[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,he=Ct.length;ie<he;ie++)it[ie]=i.COLOR_ATTACHMENT0+ie;it.length=Ct.length,yt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,yt=!0);yt&&i.drawBuffers(it)}function Lt(P){return f!==P?(i.useProgram(P),f=P,!0):!1}const k={[gn]:i.FUNC_ADD,[Wm]:i.FUNC_SUBTRACT,[Xm]:i.FUNC_REVERSE_SUBTRACT};k[qm]=i.MIN,k[$m]=i.MAX;const mt={[Is]:i.ZERO,[Go]:i.ONE,[Ym]:i.SRC_COLOR,[il]:i.SRC_ALPHA,[Jm]:i.SRC_ALPHA_SATURATE,[ol]:i.DST_COLOR,[rl]:i.DST_ALPHA,[jm]:i.ONE_MINUS_SRC_COLOR,[sl]:i.ONE_MINUS_SRC_ALPHA,[Zm]:i.ONE_MINUS_DST_COLOR,[Km]:i.ONE_MINUS_DST_ALPHA,[Qm]:i.CONSTANT_COLOR,[tg]:i.ONE_MINUS_CONSTANT_COLOR,[eg]:i.CONSTANT_ALPHA,[ng]:i.ONE_MINUS_CONSTANT_ALPHA};function Mt(P,st,it,yt,Ct,ie,he,fe,Le,le){if(P===Ae){g===!0&&(nt(i.BLEND),g=!1);return}if(g===!1&&(at(i.BLEND),g=!0),P!==jl){if(P!==v||le!==L){if((m!==gn||x!==gn)&&(i.blendEquation(i.FUNC_ADD),m=gn,x=gn),le)switch(P){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vs:i.blendFunc(i.ONE,i.ONE);break;case eu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case eu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}p=null,_=null,y=null,A=null,w.set(0,0,0),T=0,v=P,L=le}return}Ct=Ct||st,ie=ie||it,he=he||yt,(st!==m||Ct!==x)&&(i.blendEquationSeparate(k[st],k[Ct]),m=st,x=Ct),(it!==p||yt!==_||ie!==y||he!==A)&&(i.blendFuncSeparate(mt[it],mt[yt],mt[ie],mt[he]),p=it,_=yt,y=ie,A=he),(fe.equals(w)===!1||Le!==T)&&(i.blendColor(fe.r,fe.g,fe.b,Le),w.copy(fe),T=Le),v=P,L=!1}function Jt(P,st){P.side===an?nt(i.CULL_FACE):at(i.CULL_FACE);let it=P.side===ke;st&&(it=!it),Tt(it),P.blending===Zi&&P.transparent===!1?Mt(Ae):Mt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),s.setMask(P.colorWrite);const yt=P.stencilWrite;o.setTest(yt),yt&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),S(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(P){b!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),b=P)}function Yt(P){P!==Vm?(at(i.CULL_FACE),P!==M&&(P===tu?i.cullFace(i.BACK):P===Gm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):nt(i.CULL_FACE),M=P}function C(P){P!==D&&(X&&i.lineWidth(P),D=P)}function S(P,st,it){P?(at(i.POLYGON_OFFSET_FILL),(O!==st||I!==it)&&(i.polygonOffset(st,it),O=st,I=it)):nt(i.POLYGON_OFFSET_FILL)}function H(P){P?at(i.SCISSOR_TEST):nt(i.SCISSOR_TEST)}function j(P){P===void 0&&(P=i.TEXTURE0+z-1),U!==P&&(i.activeTexture(P),U=P)}function Z(P,st,it){it===void 0&&(U===null?it=i.TEXTURE0+z-1:it=U);let yt=q[it];yt===void 0&&(yt={type:void 0,texture:void 0},q[it]=yt),(yt.type!==P||yt.texture!==st)&&(U!==it&&(i.activeTexture(it),U=it),i.bindTexture(P,st||K[P]),yt.type=P,yt.texture=st)}function J(){const P=q[U];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function At(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function St(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Rt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function It(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function gt(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Wt(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function qt(P){dt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),dt.copy(P))}function Zt(P){_t.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),_t.copy(P))}function jt(P,st){let it=c.get(st);it===void 0&&(it=new WeakMap,c.set(st,it));let yt=it.get(P);yt===void 0&&(yt=i.getUniformBlockIndex(st,P.name),it.set(P,yt))}function ne(P,st){const yt=c.get(st).get(P);a.get(st)!==yt&&(i.uniformBlockBinding(st,yt,P.__bindingPointIndex),a.set(st,yt))}function xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},U=null,q={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,_=null,x=null,y=null,A=null,w=new lt(0,0,0),T=0,L=!1,b=null,M=null,D=null,O=null,I=null,dt.set(0,0,i.canvas.width,i.canvas.height),_t.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:at,disable:nt,bindFramebuffer:bt,drawBuffers:Et,useProgram:Lt,setBlending:Mt,setMaterial:Jt,setFlipSided:Tt,setCullFace:Yt,setLineWidth:C,setPolygonOffset:S,setScissorTest:H,activeTexture:j,bindTexture:Z,unbindTexture:J,compressedTexImage2D:At,compressedTexImage3D:tt,texImage2D:vt,texImage3D:Wt,updateUBOMapping:jt,uniformBlockBinding:ne,texStorage2D:It,texStorage3D:gt,texSubImage2D:St,texSubImage3D:Rt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ut,scissor:qt,viewport:Zt,reset:xt}}function IM(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ot,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return f?new OffscreenCanvas(C,S):ea("canvas")}function v(C,S,H){let j=1;const Z=Yt(C);if((Z.width>H||Z.height>H)&&(j=H/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(j*Z.width),At=Math.floor(j*Z.height);u===void 0&&(u=g(J,At));const tt=S?g(J,At):u;return tt.width=J,tt.height=At,tt.getContext("2d").drawImage(C,0,0,J,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+J+"x"+At+")."),tt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==ye&&C.minFilter!==vn}function p(C){i.generateMipmap(C)}function _(C,S,H,j,Z=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=S;if(S===i.RED&&(H===i.FLOAT&&(J=i.R32F),H===i.HALF_FLOAT&&(J=i.R16F),H===i.UNSIGNED_BYTE&&(J=i.R8)),S===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.R8UI),H===i.UNSIGNED_SHORT&&(J=i.R16UI),H===i.UNSIGNED_INT&&(J=i.R32UI),H===i.BYTE&&(J=i.R8I),H===i.SHORT&&(J=i.R16I),H===i.INT&&(J=i.R32I)),S===i.RG&&(H===i.FLOAT&&(J=i.RG32F),H===i.HALF_FLOAT&&(J=i.RG16F),H===i.UNSIGNED_BYTE&&(J=i.RG8)),S===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RG8UI),H===i.UNSIGNED_SHORT&&(J=i.RG16UI),H===i.UNSIGNED_INT&&(J=i.RG32UI),H===i.BYTE&&(J=i.RG8I),H===i.SHORT&&(J=i.RG16I),H===i.INT&&(J=i.RG32I)),S===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),S===i.RGBA){const At=Z?Zo:Qt.getTransfer(j);H===i.FLOAT&&(J=i.RGBA32F),H===i.HALF_FLOAT&&(J=i.RGBA16F),H===i.UNSIGNED_BYTE&&(J=At===se?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==ye&&C.minFilter!==vn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function y(C){const S=C.target;S.removeEventListener("dispose",y),w(S),S.isVideoTexture&&h.delete(S)}function A(C){const S=C.target;S.removeEventListener("dispose",A),L(S)}function w(C){const S=n.get(C);if(S.__webglInit===void 0)return;const H=C.source,j=d.get(H);if(j){const Z=j[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&T(C),Object.keys(j).length===0&&d.delete(H)}n.remove(C)}function T(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const H=C.source,j=d.get(H);delete j[S.__cacheKey],o.memory.textures--}function L(C){const S=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let Z=0;Z<S.__webglFramebuffer[j].length;Z++)i.deleteFramebuffer(S.__webglFramebuffer[j][Z]);else i.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)i.deleteFramebuffer(S.__webglFramebuffer[j]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=C.textures;for(let j=0,Z=H.length;j<Z;j++){const J=n.get(H[j]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(H[j])}n.remove(C)}let b=0;function M(){b=0}function D(){const C=b;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),b+=1,C}function O(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function I(C,S){const H=n.get(C);if(C.isVideoTexture&&Jt(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(H,C,S);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+S)}function z(C,S){const H=n.get(C);if(C.version>0&&H.__version!==C.version){dt(H,C,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+S)}function X(C,S){const H=n.get(C);if(C.version>0&&H.__version!==C.version){dt(H,C,S);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+S)}function Y(C,S){const H=n.get(C);if(C.version>0&&H.__version!==C.version){_t(H,C,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+S)}const et={[Ei]:i.REPEAT,[$i]:i.CLAMP_TO_EDGE,[ll]:i.MIRRORED_REPEAT},U={[ye]:i.NEAREST,[xg]:i.NEAREST_MIPMAP_NEAREST,[Kr]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[Fa]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},q={[Pg]:i.NEVER,[Og]:i.ALWAYS,[Lg]:i.LESS,[xp]:i.LEQUAL,[Ig]:i.EQUAL,[Ug]:i.GEQUAL,[Dg]:i.GREATER,[Ng]:i.NOTEQUAL};function $(C,S){if(S.type===Cn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===vn||S.magFilter===Fa||S.magFilter===Kr||S.magFilter===Yi||S.minFilter===vn||S.minFilter===Fa||S.minFilter===Kr||S.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,et[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,et[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,et[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,U[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,U[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,q[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ye||S.minFilter!==Kr&&S.minFilter!==Yi||S.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Q(C,S){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",y));const j=S.source;let Z=d.get(j);Z===void 0&&(Z={},d.set(j,Z));const J=O(S);if(J!==C.__cacheKey){Z[J]===void 0&&(Z[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Z[J].usedTimes++;const At=Z[C.__cacheKey];At!==void 0&&(Z[C.__cacheKey].usedTimes--,At.usedTimes===0&&T(S)),C.__cacheKey=J,C.__webglTexture=Z[J].texture}return H}function dt(C,S,H){let j=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=i.TEXTURE_3D);const Z=Q(C,S),J=S.source;e.bindTexture(j,C.__webglTexture,i.TEXTURE0+H);const At=n.get(J);if(J.version!==At.__version||Z===!0){e.activeTexture(i.TEXTURE0+H);const tt=Qt.getPrimaries(Qt.workingColorSpace),St=S.colorSpace===vi?null:Qt.getPrimaries(S.colorSpace),Rt=S.colorSpace===vi||tt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let rt=v(S.image,!1,s.maxTextureSize);rt=Tt(S,rt);const ut=r.convert(S.format,S.colorSpace),It=r.convert(S.type);let gt=_(S.internalFormat,ut,It,S.colorSpace,S.isVideoTexture);$(j,S);let vt;const Wt=S.mipmaps,qt=S.isVideoTexture!==!0&&gt!==gp,Zt=At.__version===void 0||Z===!0,jt=J.dataReady,ne=x(S,rt);if(S.isDepthTexture)gt=i.DEPTH_COMPONENT16,S.type===Cn?gt=i.DEPTH_COMPONENT32F:S.type===Xs?gt=i.DEPTH_COMPONENT24:S.type===nr&&(gt=i.DEPTH24_STENCIL8),Zt&&(qt?e.texStorage2D(i.TEXTURE_2D,1,gt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,gt,rt.width,rt.height,0,ut,It,null));else if(S.isDataTexture)if(Wt.length>0){qt&&Zt&&e.texStorage2D(i.TEXTURE_2D,ne,gt,Wt[0].width,Wt[0].height);for(let xt=0,P=Wt.length;xt<P;xt++)vt=Wt[xt],qt?jt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,vt.width,vt.height,ut,It,vt.data):e.texImage2D(i.TEXTURE_2D,xt,gt,vt.width,vt.height,0,ut,It,vt.data);S.generateMipmaps=!1}else qt?(Zt&&e.texStorage2D(i.TEXTURE_2D,ne,gt,rt.width,rt.height),jt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,ut,It,rt.data)):e.texImage2D(i.TEXTURE_2D,0,gt,rt.width,rt.height,0,ut,It,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qt&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ne,gt,Wt[0].width,Wt[0].height,rt.depth);for(let xt=0,P=Wt.length;xt<P;xt++)vt=Wt[xt],S.format!==cn?ut!==null?qt?jt&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,vt.width,vt.height,rt.depth,ut,vt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xt,gt,vt.width,vt.height,rt.depth,0,vt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?jt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,vt.width,vt.height,rt.depth,ut,It,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,xt,gt,vt.width,vt.height,rt.depth,0,ut,It,vt.data)}else{qt&&Zt&&e.texStorage2D(i.TEXTURE_2D,ne,gt,Wt[0].width,Wt[0].height);for(let xt=0,P=Wt.length;xt<P;xt++)vt=Wt[xt],S.format!==cn?ut!==null?qt?jt&&e.compressedTexSubImage2D(i.TEXTURE_2D,xt,0,0,vt.width,vt.height,ut,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,xt,gt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?jt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,vt.width,vt.height,ut,It,vt.data):e.texImage2D(i.TEXTURE_2D,xt,gt,vt.width,vt.height,0,ut,It,vt.data)}else if(S.isDataArrayTexture)qt?(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ne,gt,rt.width,rt.height,rt.depth),jt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,ut,It,rt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,gt,rt.width,rt.height,rt.depth,0,ut,It,rt.data);else if(S.isData3DTexture)qt?(Zt&&e.texStorage3D(i.TEXTURE_3D,ne,gt,rt.width,rt.height,rt.depth),jt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,ut,It,rt.data)):e.texImage3D(i.TEXTURE_3D,0,gt,rt.width,rt.height,rt.depth,0,ut,It,rt.data);else if(S.isFramebufferTexture){if(Zt)if(qt)e.texStorage2D(i.TEXTURE_2D,ne,gt,rt.width,rt.height);else{let xt=rt.width,P=rt.height;for(let st=0;st<ne;st++)e.texImage2D(i.TEXTURE_2D,st,gt,xt,P,0,ut,It,null),xt>>=1,P>>=1}}else if(Wt.length>0){if(qt&&Zt){const xt=Yt(Wt[0]);e.texStorage2D(i.TEXTURE_2D,ne,gt,xt.width,xt.height)}for(let xt=0,P=Wt.length;xt<P;xt++)vt=Wt[xt],qt?jt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,ut,It,vt):e.texImage2D(i.TEXTURE_2D,xt,gt,ut,It,vt);S.generateMipmaps=!1}else if(qt){if(Zt){const xt=Yt(rt);e.texStorage2D(i.TEXTURE_2D,ne,gt,xt.width,xt.height)}jt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,It,rt)}else e.texImage2D(i.TEXTURE_2D,0,gt,ut,It,rt);m(S)&&p(j),At.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function _t(C,S,H){if(S.image.length!==6)return;const j=Q(C,S),Z=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);const J=n.get(Z);if(Z.version!==J.__version||j===!0){e.activeTexture(i.TEXTURE0+H);const At=Qt.getPrimaries(Qt.workingColorSpace),tt=S.colorSpace===vi?null:Qt.getPrimaries(S.colorSpace),St=S.colorSpace===vi||At===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Rt=S.isCompressedTexture||S.image[0].isCompressedTexture,rt=S.image[0]&&S.image[0].isDataTexture,ut=[];for(let P=0;P<6;P++)!Rt&&!rt?ut[P]=v(S.image[P],!0,s.maxCubemapSize):ut[P]=rt?S.image[P].image:S.image[P],ut[P]=Tt(S,ut[P]);const It=ut[0],gt=r.convert(S.format,S.colorSpace),vt=r.convert(S.type),Wt=_(S.internalFormat,gt,vt,S.colorSpace),qt=S.isVideoTexture!==!0,Zt=J.__version===void 0||j===!0,jt=Z.dataReady;let ne=x(S,It);$(i.TEXTURE_CUBE_MAP,S);let xt;if(Rt){qt&&Zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ne,Wt,It.width,It.height);for(let P=0;P<6;P++){xt=ut[P].mipmaps;for(let st=0;st<xt.length;st++){const it=xt[st];S.format!==cn?gt!==null?qt?jt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,st,0,0,it.width,it.height,gt,it.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,st,Wt,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?jt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,st,0,0,it.width,it.height,gt,vt,it.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,st,Wt,it.width,it.height,0,gt,vt,it.data)}}}else{if(xt=S.mipmaps,qt&&Zt){xt.length>0&&ne++;const P=Yt(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ne,Wt,P.width,P.height)}for(let P=0;P<6;P++)if(rt){qt?jt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,ut[P].width,ut[P].height,gt,vt,ut[P].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,Wt,ut[P].width,ut[P].height,0,gt,vt,ut[P].data);for(let st=0;st<xt.length;st++){const yt=xt[st].image[P].image;qt?jt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,st+1,0,0,yt.width,yt.height,gt,vt,yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,st+1,Wt,yt.width,yt.height,0,gt,vt,yt.data)}}else{qt?jt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,gt,vt,ut[P]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,Wt,gt,vt,ut[P]);for(let st=0;st<xt.length;st++){const it=xt[st];qt?jt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,st+1,0,0,gt,vt,it.image[P]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,st+1,Wt,gt,vt,it.image[P])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),J.__version=Z.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function F(C,S,H,j,Z,J){const At=r.convert(H.format,H.colorSpace),tt=r.convert(H.type),St=_(H.internalFormat,At,tt,H.colorSpace);if(!n.get(S).__hasExternalTextures){const rt=Math.max(1,S.width>>J),ut=Math.max(1,S.height>>J);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,J,St,rt,ut,S.depth,0,At,tt,null):e.texImage2D(Z,J,St,rt,ut,0,At,tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Mt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Z,n.get(H).__webglTexture,0,mt(S)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,Z,n.get(H).__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function K(C,S,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let j=i.DEPTH_COMPONENT24;if(H||Mt(S)){const Z=S.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Cn?j=i.DEPTH_COMPONENT32F:Z.type===Xs&&(j=i.DEPTH_COMPONENT24));const J=mt(S);Mt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,j,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,J,j,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,j,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){const j=mt(S);H&&Mt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,j,i.DEPTH24_STENCIL8,S.width,S.height):Mt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{const j=S.textures;for(let Z=0;Z<j.length;Z++){const J=j[Z],At=r.convert(J.format,J.colorSpace),tt=r.convert(J.type),St=_(J.internalFormat,At,tt,J.colorSpace),Rt=mt(S);H&&Mt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,St,S.width,S.height):Mt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,St,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,St,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),I(S.depthTexture,0);const j=n.get(S.depthTexture).__webglTexture,Z=mt(S);if(S.depthTexture.format===ks)Mt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(S.depthTexture.format===qs)Mt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function nt(C){const S=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");at(S.__webglFramebuffer,C)}else if(H){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]=i.createRenderbuffer(),K(S.__webglDepthbuffer[j],C,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),K(S.__webglDepthbuffer,C,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(C,S,H){const j=n.get(C);S!==void 0&&F(j.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&nt(C)}function Et(C){const S=C.texture,H=n.get(C),j=n.get(S);C.addEventListener("dispose",A);const Z=C.textures,J=C.isWebGLCubeRenderTarget===!0,At=Z.length>1;if(At||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=S.version,o.memory.textures++),J){H.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[tt]=[];for(let St=0;St<S.mipmaps.length;St++)H.__webglFramebuffer[tt][St]=i.createFramebuffer()}else H.__webglFramebuffer[tt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let tt=0;tt<S.mipmaps.length;tt++)H.__webglFramebuffer[tt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(At)for(let tt=0,St=Z.length;tt<St;tt++){const Rt=n.get(Z[tt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Mt(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let tt=0;tt<Z.length;tt++){const St=Z[tt];H.__webglColorRenderbuffer[tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[tt]);const Rt=r.convert(St.format,St.colorSpace),rt=r.convert(St.type),ut=_(St.internalFormat,Rt,rt,St.colorSpace,C.isXRRenderTarget===!0),It=mt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,ut,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,H.__webglColorRenderbuffer[tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),K(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),$(i.TEXTURE_CUBE_MAP,S);for(let tt=0;tt<6;tt++)if(S.mipmaps&&S.mipmaps.length>0)for(let St=0;St<S.mipmaps.length;St++)F(H.__webglFramebuffer[tt][St],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St);else F(H.__webglFramebuffer[tt],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);m(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let tt=0,St=Z.length;tt<St;tt++){const Rt=Z[tt],rt=n.get(Rt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),$(i.TEXTURE_2D,Rt),F(H.__webglFramebuffer,C,Rt,i.COLOR_ATTACHMENT0+tt,i.TEXTURE_2D,0),m(Rt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let tt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(tt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,j.__webglTexture),$(tt,S),S.mipmaps&&S.mipmaps.length>0)for(let St=0;St<S.mipmaps.length;St++)F(H.__webglFramebuffer[St],C,S,i.COLOR_ATTACHMENT0,tt,St);else F(H.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,tt,0);m(S)&&p(tt),e.unbindTexture()}C.depthBuffer&&nt(C)}function Lt(C){const S=C.textures;for(let H=0,j=S.length;H<j;H++){const Z=S[H];if(m(Z)){const J=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,At=n.get(Z).__webglTexture;e.bindTexture(J,At),p(J),e.unbindTexture()}}}function k(C){if(C.samples>0&&Mt(C)===!1){const S=C.textures,H=C.width,j=C.height;let Z=i.COLOR_BUFFER_BIT;const J=[],At=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=n.get(C),St=S.length>1;if(St)for(let Rt=0;Rt<S.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,tt.__webglFramebuffer);for(let Rt=0;Rt<S.length;Rt++){J.push(i.COLOR_ATTACHMENT0+Rt),C.depthBuffer&&J.push(At);const rt=tt.__ignoreDepthValues!==void 0?tt.__ignoreDepthValues:!1;if(rt===!1&&(C.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&tt.__isTransmissionRenderTarget!==!0&&(Z|=i.STENCIL_BUFFER_BIT)),St&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt]),rt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[At]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[At])),St){const ut=n.get(S[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ut,0)}i.blitFramebuffer(0,0,H,j,0,0,H,j,Z,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),St)for(let Rt=0;Rt<S.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt]);const rt=n.get(S[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,tt.__webglMultisampledFramebuffer)}}function mt(C){return Math.min(s.maxSamples,C.samples)}function Mt(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Jt(C){const S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Tt(C,S){const H=C.colorSpace,j=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Ri&&H!==vi&&(Qt.getTransfer(H)===se?(j!==cn||Z!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function Yt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=M,this.setTexture2D=I,this.setTexture2DArray=z,this.setTexture3D=X,this.setTextureCube=Y,this.rebindTextures=bt,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=F,this.useMultisampledRTT=Mt}function DM(i,t){function e(n,s=vi){let r;const o=Qt.getTransfer(s);if(n===Yn)return i.UNSIGNED_BYTE;if(n===hp)return i.UNSIGNED_SHORT_4_4_4_4;if(n===up)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yg)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_g)return i.BYTE;if(n===Mg)return i.SHORT;if(n===cp)return i.UNSIGNED_SHORT;if(n===lp)return i.INT;if(n===Xs)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===Ze)return i.HALF_FLOAT;if(n===bg)return i.ALPHA;if(n===Sg)return i.RGB;if(n===cn)return i.RGBA;if(n===wg)return i.LUMINANCE;if(n===Eg)return i.LUMINANCE_ALPHA;if(n===ks)return i.DEPTH_COMPONENT;if(n===qs)return i.DEPTH_STENCIL;if(n===dp)return i.RED;if(n===fp)return i.RED_INTEGER;if(n===Tg)return i.RG;if(n===pp)return i.RG_INTEGER;if(n===mp)return i.RGBA_INTEGER;if(n===za||n===Ba||n===Ha||n===Va)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===su||n===ru||n===ou||n===au)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===su)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ru)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ou)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===au)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gp)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===cu||n===lu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===cu)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===lu)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===hu||n===uu||n===du||n===fu||n===pu||n===mu||n===gu||n===vu||n===xu||n===_u||n===Mu||n===yu||n===bu||n===Su)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hu)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uu)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===du)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fu)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pu)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mu)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gu)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vu)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xu)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_u)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mu)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yu)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bu)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Su)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ga||n===wu||n===Eu)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ga)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ag||n===Tu||n===Au||n===Ru)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ga)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Tu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Au)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ru)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class NM extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Xt extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UM={type:"move"};class gc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(UM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const OM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kM=`
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

}`;class FM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Fe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,s=new te({vertexShader:OM,fragmentShader:kM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pt(new Pe(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class zM extends ir{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const v=new FM,m=e.getContextAttributes();let p=null,_=null;const x=[],y=[],A=new ot;let w=null;const T=new on;T.layers.enable(1),T.viewport=new ve;const L=new on;L.layers.enable(2),L.viewport=new ve;const b=[T,L],M=new NM;M.layers.enable(1),M.layers.enable(2);let D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let K=x[F];return K===void 0&&(K=new gc,x[F]=K),K.getTargetRaySpace()},this.getControllerGrip=function(F){let K=x[F];return K===void 0&&(K=new gc,x[F]=K),K.getGripSpace()},this.getHand=function(F){let K=x[F];return K===void 0&&(K=new gc,x[F]=K),K.getHandSpace()};function I(F){const K=y.indexOf(F.inputSource);if(K===-1)return;const at=x[K];at!==void 0&&(at.update(F.inputSource,F.frame,l||o),at.dispatchEvent({type:F.type,data:F.inputSource}))}function z(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",X);for(let F=0;F<x.length;F++){const K=y[F];K!==null&&(y[F]=null,x[F].disconnect(K))}D=null,O=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,_=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",z),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new He(f.framebufferWidth,f.framebufferHeight,{format:cn,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,at=null,nt=null;m.depth&&(nt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=m.stencil?qs:ks,at=m.stencil?nr:Xs);const bt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(bt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new He(d.textureWidth,d.textureHeight,{format:cn,type:Yn,depthTexture:new sh(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});const Et=t.properties.get(_);Et.__ignoreDepthValues=d.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),_t.setContext(s),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function X(F){for(let K=0;K<F.removed.length;K++){const at=F.removed[K],nt=y.indexOf(at);nt>=0&&(y[nt]=null,x[nt].disconnect(at))}for(let K=0;K<F.added.length;K++){const at=F.added[K];let nt=y.indexOf(at);if(nt===-1){for(let Et=0;Et<x.length;Et++)if(Et>=y.length){y.push(at),nt=Et;break}else if(y[Et]===null){y[Et]=at,nt=Et;break}if(nt===-1)break}const bt=x[nt];bt&&bt.connect(at)}}const Y=new R,et=new R;function U(F,K,at){Y.setFromMatrixPosition(K.matrixWorld),et.setFromMatrixPosition(at.matrixWorld);const nt=Y.distanceTo(et),bt=K.projectionMatrix.elements,Et=at.projectionMatrix.elements,Lt=bt[14]/(bt[10]-1),k=bt[14]/(bt[10]+1),mt=(bt[9]+1)/bt[5],Mt=(bt[9]-1)/bt[5],Jt=(bt[8]-1)/bt[0],Tt=(Et[8]+1)/Et[0],Yt=Lt*Jt,C=Lt*Tt,S=nt/(-Jt+Tt),H=S*-Jt;K.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(H),F.translateZ(S),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const j=Lt+S,Z=k+S,J=Yt-H,At=C+(nt-H),tt=mt*k/Z*j,St=Mt*k/Z*j;F.projectionMatrix.makePerspective(J,At,tt,St,j,Z),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function q(F,K){K===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(K.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;v.texture!==null&&(F.near=v.depthNear,F.far=v.depthFar),M.near=L.near=T.near=F.near,M.far=L.far=T.far=F.far,(D!==M.near||O!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,O=M.far,T.near=D,T.far=O,L.near=D,L.far=O,T.updateProjectionMatrix(),L.updateProjectionMatrix(),F.updateProjectionMatrix());const K=F.parent,at=M.cameras;q(M,K);for(let nt=0;nt<at.length;nt++)q(at[nt],K);at.length===2?U(M,T,L):M.projectionMatrix.copy(T.projectionMatrix),$(F,M,K)};function $(F,K,at){at===null?F.matrix.copy(K.matrixWorld):(F.matrix.copy(at.matrixWorld),F.matrix.invert(),F.matrix.multiply(K.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(K.projectionMatrix),F.projectionMatrixInverse.copy(K.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=hl*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(F){c=F,d!==null&&(d.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)},this.hasDepthSensing=function(){return v.texture!==null};let Q=null;function dt(F,K){if(h=K.getViewerPose(l||o),g=K,h!==null){const at=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let nt=!1;at.length!==M.cameras.length&&(M.cameras.length=0,nt=!0);for(let Et=0;Et<at.length;Et++){const Lt=at[Et];let k=null;if(f!==null)k=f.getViewport(Lt);else{const Mt=u.getViewSubImage(d,Lt);k=Mt.viewport,Et===0&&(t.setRenderTargetTextures(_,Mt.colorTexture,d.ignoreDepthValues?void 0:Mt.depthStencilTexture),t.setRenderTarget(_))}let mt=b[Et];mt===void 0&&(mt=new on,mt.layers.enable(Et),mt.viewport=new ve,b[Et]=mt),mt.matrix.fromArray(Lt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Lt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(k.x,k.y,k.width,k.height),Et===0&&(M.matrix.copy(mt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),nt===!0&&M.cameras.push(mt)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Et=u.getDepthInformation(at[0]);Et&&Et.isValid&&Et.texture&&v.init(t,Et,s.renderState)}}for(let at=0;at<x.length;at++){const nt=y[at],bt=x[at];nt!==null&&bt!==void 0&&bt.update(nt,K,l||o)}v.render(t,M),Q&&Q(F,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const _t=new Pp;_t.setAnimationLoop(dt),this.setAnimationLoop=function(F){Q=F},this.dispose=function(){}}}const Bi=new ln,BM=new Pt;function HM(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ep(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p),x=_.envMap,y=_.envMapRotation;if(x&&(m.envMap.value=x,Bi.copy(y),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),m.envMapRotation.value.setFromMatrix4(BM.makeRotationFromEuler(Bi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const A=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*A,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function VM(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,x){const y=x.program;n.uniformBlockBinding(_,y)}function l(_,x){let y=s[_.id];y===void 0&&(g(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",m));const A=x.program;n.updateUBOMapping(_,A);const w=t.render.frame;r[_.id]!==w&&(d(_),r[_.id]=w)}function h(_){const x=u();_.__bindingPointIndex=x;const y=i.createBuffer(),A=_.__size,w=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const x=s[_.id],y=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,T=y.length;w<T;w++){const L=Array.isArray(y[w])?y[w]:[y[w]];for(let b=0,M=L.length;b<M;b++){const D=L[b];if(f(D,w,b,A)===!0){const O=D.__offset,I=Array.isArray(D.value)?D.value:[D.value];let z=0;for(let X=0;X<I.length;X++){const Y=I[X],et=v(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,O+z,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,z),z+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,x,y,A){const w=_.value,T=x+"_"+y;if(A[T]===void 0)return typeof w=="number"||typeof w=="boolean"?A[T]=w:A[T]=w.clone(),!0;{const L=A[T];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return A[T]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(_){const x=_.uniforms;let y=0;const A=16;for(let T=0,L=x.length;T<L;T++){const b=Array.isArray(x[T])?x[T]:[x[T]];for(let M=0,D=b.length;M<D;M++){const O=b[M],I=Array.isArray(O.value)?O.value:[O.value];for(let z=0,X=I.length;z<X;z++){const Y=I[z],et=v(Y),U=y%A;U!==0&&A-U<et.boundary&&(y+=A-U),O.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=et.storage}}}const w=y%A;return w>0&&(y+=A-w),_.__size=y,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class GM{constructor(t={}){const{canvas:e=Fg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this._useLegacyLights=!1,this.toneMapping=Mi,this.toneMappingExposure=1;const x=this;let y=!1,A=0,w=0,T=null,L=-1,b=null;const M=new ve,D=new ve;let O=null;const I=new lt(0);let z=0,X=e.width,Y=e.height,et=1,U=null,q=null;const $=new ve(0,0,X,Y),Q=new ve(0,0,X,Y);let dt=!1;const _t=new eh;let F=!1,K=!1;const at=new Pt,nt=new ot,bt=new R,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Lt(){return T===null?et:1}let k=n;function mt(E,N){const V=e.getContext(E,N);return V!==null?V:null}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Yl}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",it,!1),e.addEventListener("webglcontextcreationerror",yt,!1),k===null){const N="webgl2";if(k=mt(N,E),k===null)throw mt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Mt,Jt,Tt,Yt,C,S,H,j,Z,J,At,tt,St,Rt,rt,ut,It,gt,vt,Wt,qt,Zt,jt,ne;function xt(){Mt=new J_(k),Mt.init(),Jt=new q_(k,Mt,t),Zt=new DM(k,Mt),Tt=new LM(k),Yt=new e1(k),C=new xM,S=new IM(k,Mt,Tt,C,Jt,Zt,Yt),H=new Y_(x),j=new Z_(x),Z=new av(k),jt=new W_(k,Z),J=new Q_(k,Z,Yt,jt),At=new i1(k,J,Z,Yt),vt=new n1(k,Jt,S),ut=new $_(C),tt=new vM(x,H,j,Mt,Jt,jt,ut),St=new HM(x,C),Rt=new MM,rt=new TM(Mt),gt=new G_(x,H,j,Tt,At,d,c),It=new PM(x,At,Jt),ne=new VM(k,Yt,Jt,Tt),Wt=new X_(k,Mt,Yt),qt=new t1(k,Mt,Yt),Yt.programs=tt.programs,x.capabilities=Jt,x.extensions=Mt,x.properties=C,x.renderLists=Rt,x.shadowMap=It,x.state=Tt,x.info=Yt}xt();const P=new zM(x,k);this.xr=P,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const E=Mt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Mt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(E){E!==void 0&&(et=E,this.setSize(X,Y,!1))},this.getSize=function(E){return E.set(X,Y)},this.setSize=function(E,N,V=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,Y=N,e.width=Math.floor(E*et),e.height=Math.floor(N*et),V===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(X*et,Y*et).floor()},this.setDrawingBufferSize=function(E,N,V){X=E,Y=N,et=V,e.width=Math.floor(E*V),e.height=Math.floor(N*V),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(M)},this.getViewport=function(E){return E.copy($)},this.setViewport=function(E,N,V,G){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,N,V,G),Tt.viewport(M.copy($).multiplyScalar(et).round())},this.getScissor=function(E){return E.copy(Q)},this.setScissor=function(E,N,V,G){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,N,V,G),Tt.scissor(D.copy(Q).multiplyScalar(et).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(E){Tt.setScissorTest(dt=E)},this.setOpaqueSort=function(E){U=E},this.setTransparentSort=function(E){q=E},this.getClearColor=function(E){return E.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(E=!0,N=!0,V=!0){let G=0;if(E){let B=!1;if(T!==null){const ht=T.texture.format;B=ht===mp||ht===pp||ht===fp}if(B){const ht=T.texture.type,wt=ht===Yn||ht===Xs||ht===cp||ht===nr||ht===hp||ht===up,Dt=gt.getClearColor(),Nt=gt.getClearAlpha(),Ot=Dt.r,Ut=Dt.g,kt=Dt.b;wt?(f[0]=Ot,f[1]=Ut,f[2]=kt,f[3]=Nt,k.clearBufferuiv(k.COLOR,0,f)):(g[0]=Ot,g[1]=Ut,g[2]=kt,g[3]=Nt,k.clearBufferiv(k.COLOR,0,g))}else G|=k.COLOR_BUFFER_BIT}N&&(G|=k.DEPTH_BUFFER_BIT),V&&(G|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",it,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Rt.dispose(),rt.dispose(),C.dispose(),H.dispose(),j.dispose(),At.dispose(),jt.dispose(),ne.dispose(),tt.dispose(),P.dispose(),P.removeEventListener("sessionstart",Mn),P.removeEventListener("sessionend",yn),Di.stop()};function st(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=Yt.autoReset,N=It.enabled,V=It.autoUpdate,G=It.needsUpdate,B=It.type;xt(),Yt.autoReset=E,It.enabled=N,It.autoUpdate=V,It.needsUpdate=G,It.type=B}function yt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ct(E){const N=E.target;N.removeEventListener("dispose",Ct),ie(N)}function ie(E){he(E),C.remove(E)}function he(E){const N=C.get(E).programs;N!==void 0&&(N.forEach(function(V){tt.releaseProgram(V)}),E.isShaderMaterial&&tt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,V,G,B,ht){N===null&&(N=Et);const wt=B.isMesh&&B.matrixWorld.determinant()<0,Dt=Om(E,N,V,G,B);Tt.setMaterial(G,wt);let Nt=V.index,Ot=1;if(G.wireframe===!0){if(Nt=J.getWireframeAttribute(V),Nt===void 0)return;Ot=2}const Ut=V.drawRange,kt=V.attributes.position;let ge=Ut.start*Ot,Xe=(Ut.start+Ut.count)*Ot;ht!==null&&(ge=Math.max(ge,ht.start*Ot),Xe=Math.min(Xe,(ht.start+ht.count)*Ot)),Nt!==null?(ge=Math.max(ge,0),Xe=Math.min(Xe,Nt.count)):kt!=null&&(ge=Math.max(ge,0),Xe=Math.min(Xe,kt.count));const Ee=Xe-ge;if(Ee<0||Ee===1/0)return;jt.setup(B,G,Dt,V,Nt);let Fn,pe=Wt;if(Nt!==null&&(Fn=Z.get(Nt),pe=qt,pe.setIndex(Fn)),B.isMesh)G.wireframe===!0?(Tt.setLineWidth(G.wireframeLinewidth*Lt()),pe.setMode(k.LINES)):pe.setMode(k.TRIANGLES);else if(B.isLine){let Ft=G.linewidth;Ft===void 0&&(Ft=1),Tt.setLineWidth(Ft*Lt()),B.isLineSegments?pe.setMode(k.LINES):B.isLineLoop?pe.setMode(k.LINE_LOOP):pe.setMode(k.LINE_STRIP)}else B.isPoints?pe.setMode(k.POINTS):B.isSprite&&pe.setMode(k.TRIANGLES);if(B.isBatchedMesh)pe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)pe.renderInstances(ge,Ee,B.count);else if(V.isInstancedBufferGeometry){const Ft=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Na=Math.min(V.instanceCount,Ft);pe.renderInstances(ge,Ee,Na)}else pe.render(ge,Ee)};function fe(E,N,V){E.transparent===!0&&E.side===an&&E.forceSinglePass===!1?(E.side=ke,E.needsUpdate=!0,Yr(E,N,V),E.side=Kn,E.needsUpdate=!0,Yr(E,N,V),E.side=an):Yr(E,N,V)}this.compile=function(E,N,V=null){V===null&&(V=E),m=rt.get(V),m.init(),_.push(m),V.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),E!==V&&E.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(x._useLegacyLights);const G=new Set;return E.traverse(function(B){const ht=B.material;if(ht)if(Array.isArray(ht))for(let wt=0;wt<ht.length;wt++){const Dt=ht[wt];fe(Dt,V,B),G.add(Dt)}else fe(ht,V,B),G.add(ht)}),_.pop(),m=null,G},this.compileAsync=function(E,N,V=null){const G=this.compile(E,N,V);return new Promise(B=>{function ht(){if(G.forEach(function(wt){C.get(wt).currentProgram.isReady()&&G.delete(wt)}),G.size===0){B(E);return}setTimeout(ht,10)}Mt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Le=null;function le(E){Le&&Le(E)}function Mn(){Di.stop()}function yn(){Di.start()}const Di=new Pp;Di.setAnimationLoop(le),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(E){Le=E,P.setAnimationLoop(E),E===null?Di.stop():Di.start()},P.addEventListener("sessionstart",Mn),P.addEventListener("sessionend",yn),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(N),N=P.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,N,T),m=rt.get(E,_.length),m.init(),_.push(m),at.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),_t.setFromProjectionMatrix(at),K=this.localClippingEnabled,F=ut.init(this.clippingPlanes,K),v=Rt.get(E,p.length),v.init(),p.push(v),$h(E,N,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(U,q),this.info.render.frame++,F===!0&&ut.beginShadows();const V=m.state.shadowsArray;if(It.render(V,E,N),F===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),(P.enabled===!1||P.isPresenting===!1||P.hasDepthSensing()===!1)&&gt.render(v,E),m.setupLights(x._useLegacyLights),N.isArrayCamera){const G=N.cameras;for(let B=0,ht=G.length;B<ht;B++){const wt=G[B];Yh(v,E,wt,wt.viewport)}}else Yh(v,E,N);T!==null&&(S.updateMultisampleRenderTarget(T),S.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(x,E,N),jt.resetDefaultState(),L=-1,b=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function $h(E,N,V,G){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||_t.intersectsSprite(E)){G&&bt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(at);const wt=At.update(E),Dt=E.material;Dt.visible&&v.push(E,wt,Dt,V,bt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||_t.intersectsObject(E))){const wt=At.update(E),Dt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),bt.copy(E.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),bt.copy(wt.boundingSphere.center)),bt.applyMatrix4(E.matrixWorld).applyMatrix4(at)),Array.isArray(Dt)){const Nt=wt.groups;for(let Ot=0,Ut=Nt.length;Ot<Ut;Ot++){const kt=Nt[Ot],ge=Dt[kt.materialIndex];ge&&ge.visible&&v.push(E,wt,ge,V,bt.z,kt)}}else Dt.visible&&v.push(E,wt,Dt,V,bt.z,null)}}const ht=E.children;for(let wt=0,Dt=ht.length;wt<Dt;wt++)$h(ht[wt],N,V,G)}function Yh(E,N,V,G){const B=E.opaque,ht=E.transmissive,wt=E.transparent;m.setupLightsView(V),F===!0&&ut.setGlobalState(x.clippingPlanes,V),ht.length>0&&Um(B,ht,N,V),G&&Tt.viewport(M.copy(G)),B.length>0&&$r(B,N,V),ht.length>0&&$r(ht,N,V),wt.length>0&&$r(wt,N,V),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Um(E,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(m.state.transmissionRenderTarget===null){m.state.transmissionRenderTarget=new He(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float")?Ze:Yn,minFilter:Yi,samples:4,stencilBuffer:r});const Ot=C.get(m.state.transmissionRenderTarget);Ot.__isTransmissionRenderTarget=!0}const ht=m.state.transmissionRenderTarget;x.getDrawingBufferSize(nt),ht.setSize(nt.x,nt.y);const wt=x.getRenderTarget();x.setRenderTarget(ht),x.getClearColor(I),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear();const Dt=x.toneMapping;x.toneMapping=Mi,$r(E,V,G),S.updateMultisampleRenderTarget(ht),S.updateRenderTargetMipmap(ht);let Nt=!1;for(let Ot=0,Ut=N.length;Ot<Ut;Ot++){const kt=N[Ot],ge=kt.object,Xe=kt.geometry,Ee=kt.material,Fn=kt.group;if(Ee.side===an&&ge.layers.test(G.layers)){const pe=Ee.side;Ee.side=ke,Ee.needsUpdate=!0,jh(ge,V,G,Xe,Ee,Fn),Ee.side=pe,Ee.needsUpdate=!0,Nt=!0}}Nt===!0&&(S.updateMultisampleRenderTarget(ht),S.updateRenderTargetMipmap(ht)),x.setRenderTarget(wt),x.setClearColor(I,z),x.toneMapping=Dt}function $r(E,N,V){const G=N.isScene===!0?N.overrideMaterial:null;for(let B=0,ht=E.length;B<ht;B++){const wt=E[B],Dt=wt.object,Nt=wt.geometry,Ot=G===null?wt.material:G,Ut=wt.group;Dt.layers.test(V.layers)&&jh(Dt,N,V,Nt,Ot,Ut)}}function jh(E,N,V,G,B,ht){E.onBeforeRender(x,N,V,G,B,ht),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(x,N,V,G,E,ht),B.transparent===!0&&B.side===an&&B.forceSinglePass===!1?(B.side=ke,B.needsUpdate=!0,x.renderBufferDirect(V,N,G,B,E,ht),B.side=Kn,B.needsUpdate=!0,x.renderBufferDirect(V,N,G,B,E,ht),B.side=an):x.renderBufferDirect(V,N,G,B,E,ht),E.onAfterRender(x,N,V,G,B,ht)}function Yr(E,N,V){N.isScene!==!0&&(N=Et);const G=C.get(E),B=m.state.lights,ht=m.state.shadowsArray,wt=B.state.version,Dt=tt.getParameters(E,B.state,ht,N,V),Nt=tt.getProgramCacheKey(Dt);let Ot=G.programs;G.environment=E.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(E.isMeshStandardMaterial?j:H).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Ot===void 0&&(E.addEventListener("dispose",Ct),Ot=new Map,G.programs=Ot);let Ut=Ot.get(Nt);if(Ut!==void 0){if(G.currentProgram===Ut&&G.lightsStateVersion===wt)return Zh(E,Dt),Ut}else Dt.uniforms=tt.getUniforms(E),E.onBuild(V,Dt,x),E.onBeforeCompile(Dt,x),Ut=tt.acquireProgram(Dt,Nt),Ot.set(Nt,Ut),G.uniforms=Dt.uniforms;const kt=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(kt.clippingPlanes=ut.uniform),Zh(E,Dt),G.needsLights=Fm(E),G.lightsStateVersion=wt,G.needsLights&&(kt.ambientLightColor.value=B.state.ambient,kt.lightProbe.value=B.state.probe,kt.directionalLights.value=B.state.directional,kt.directionalLightShadows.value=B.state.directionalShadow,kt.spotLights.value=B.state.spot,kt.spotLightShadows.value=B.state.spotShadow,kt.rectAreaLights.value=B.state.rectArea,kt.ltc_1.value=B.state.rectAreaLTC1,kt.ltc_2.value=B.state.rectAreaLTC2,kt.pointLights.value=B.state.point,kt.pointLightShadows.value=B.state.pointShadow,kt.hemisphereLights.value=B.state.hemi,kt.directionalShadowMap.value=B.state.directionalShadowMap,kt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,kt.spotShadowMap.value=B.state.spotShadowMap,kt.spotLightMatrix.value=B.state.spotLightMatrix,kt.spotLightMap.value=B.state.spotLightMap,kt.pointShadowMap.value=B.state.pointShadowMap,kt.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=Ut,G.uniformsList=null,Ut}function Kh(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Wo.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Zh(E,N){const V=C.get(E);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Om(E,N,V,G,B){N.isScene!==!0&&(N=Et),S.resetTextureUnits();const ht=N.fog,wt=G.isMeshStandardMaterial?N.environment:null,Dt=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ri,Nt=(G.isMeshStandardMaterial?j:H).get(G.envMap||wt),Ot=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ut=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),kt=!!V.morphAttributes.position,ge=!!V.morphAttributes.normal,Xe=!!V.morphAttributes.color;let Ee=Mi;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ee=x.toneMapping);const Fn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,pe=Fn!==void 0?Fn.length:0,Ft=C.get(G),Na=m.state.lights;if(F===!0&&(K===!0||E!==b)){const Qe=E===b&&G.id===L;ut.setState(G,E,Qe)}let ue=!1;G.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Na.state.version||Ft.outputColorSpace!==Dt||B.isBatchedMesh&&Ft.batching===!1||!B.isBatchedMesh&&Ft.batching===!0||B.isInstancedMesh&&Ft.instancing===!1||!B.isInstancedMesh&&Ft.instancing===!0||B.isSkinnedMesh&&Ft.skinning===!1||!B.isSkinnedMesh&&Ft.skinning===!0||B.isInstancedMesh&&Ft.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ft.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ft.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ft.instancingMorph===!1&&B.morphTexture!==null||Ft.envMap!==Nt||G.fog===!0&&Ft.fog!==ht||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==ut.numPlanes||Ft.numIntersection!==ut.numIntersection)||Ft.vertexAlphas!==Ot||Ft.vertexTangents!==Ut||Ft.morphTargets!==kt||Ft.morphNormals!==ge||Ft.morphColors!==Xe||Ft.toneMapping!==Ee||Ft.morphTargetsCount!==pe)&&(ue=!0):(ue=!0,Ft.__version=G.version);let Ni=Ft.currentProgram;ue===!0&&(Ni=Yr(G,N,B));let Jh=!1,ur=!1,Ua=!1;const Ie=Ni.getUniforms(),ii=Ft.uniforms;if(Tt.useProgram(Ni.program)&&(Jh=!0,ur=!0,Ua=!0),G.id!==L&&(L=G.id,ur=!0),Jh||b!==E){Ie.setValue(k,"projectionMatrix",E.projectionMatrix),Ie.setValue(k,"viewMatrix",E.matrixWorldInverse);const Qe=Ie.map.cameraPosition;Qe!==void 0&&Qe.setValue(k,bt.setFromMatrixPosition(E.matrixWorld)),Jt.logarithmicDepthBuffer&&Ie.setValue(k,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ie.setValue(k,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,ur=!0,Ua=!0)}if(B.isSkinnedMesh){Ie.setOptional(k,B,"bindMatrix"),Ie.setOptional(k,B,"bindMatrixInverse");const Qe=B.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Ie.setValue(k,"boneTexture",Qe.boneTexture,S))}B.isBatchedMesh&&(Ie.setOptional(k,B,"batchingTexture"),Ie.setValue(k,"batchingTexture",B._matricesTexture,S));const Oa=V.morphAttributes;if((Oa.position!==void 0||Oa.normal!==void 0||Oa.color!==void 0)&&vt.update(B,V,Ni),(ur||Ft.receiveShadow!==B.receiveShadow)&&(Ft.receiveShadow=B.receiveShadow,Ie.setValue(k,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ii.envMap.value=Nt,ii.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(ii.envMapIntensity.value=N.environmentIntensity),ur&&(Ie.setValue(k,"toneMappingExposure",x.toneMappingExposure),Ft.needsLights&&km(ii,Ua),ht&&G.fog===!0&&St.refreshFogUniforms(ii,ht),St.refreshMaterialUniforms(ii,G,et,Y,m.state.transmissionRenderTarget),Wo.upload(k,Kh(Ft),ii,S)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Wo.upload(k,Kh(Ft),ii,S),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ie.setValue(k,"center",B.center),Ie.setValue(k,"modelViewMatrix",B.modelViewMatrix),Ie.setValue(k,"normalMatrix",B.normalMatrix),Ie.setValue(k,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Qe=G.uniformsGroups;for(let ka=0,zm=Qe.length;ka<zm;ka++){const Qh=Qe[ka];ne.update(Qh,Ni),ne.bind(Qh,Ni)}}return Ni}function km(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Fm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,N,V){C.get(E.texture).__webglTexture=N,C.get(E.depthTexture).__webglTexture=V;const G=C.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const V=C.get(E);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,V=0){T=E,A=N,w=V;let G=!0,B=null,ht=!1,wt=!1;if(E){const Nt=C.get(E);Nt.__useDefaultFramebuffer!==void 0?(Tt.bindFramebuffer(k.FRAMEBUFFER,null),G=!1):Nt.__webglFramebuffer===void 0?S.setupRenderTarget(E):Nt.__hasExternalTextures&&S.rebindTextures(E,C.get(E.texture).__webglTexture,C.get(E.depthTexture).__webglTexture);const Ot=E.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(wt=!0);const Ut=C.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ut[N])?B=Ut[N][V]:B=Ut[N],ht=!0):E.samples>0&&S.useMultisampledRTT(E)===!1?B=C.get(E).__webglMultisampledFramebuffer:Array.isArray(Ut)?B=Ut[V]:B=Ut,M.copy(E.viewport),D.copy(E.scissor),O=E.scissorTest}else M.copy($).multiplyScalar(et).floor(),D.copy(Q).multiplyScalar(et).floor(),O=dt;if(Tt.bindFramebuffer(k.FRAMEBUFFER,B)&&G&&Tt.drawBuffers(E,B),Tt.viewport(M),Tt.scissor(D),Tt.setScissorTest(O),ht){const Nt=C.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+N,Nt.__webglTexture,V)}else if(wt){const Nt=C.get(E.texture),Ot=N||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Nt.__webglTexture,V||0,Ot)}L=-1},this.readRenderTargetPixels=function(E,N,V,G,B,ht,wt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=C.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){Tt.bindFramebuffer(k.FRAMEBUFFER,Dt);try{const Nt=E.texture,Ot=Nt.format,Ut=Nt.type;if(Ot!==cn&&Zt.convert(Ot)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const kt=Ut===Ze&&(Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float"));if(Ut!==Yn&&Zt.convert(Ut)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&Ut!==Cn&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-G&&V>=0&&V<=E.height-B&&k.readPixels(N,V,G,B,Zt.convert(Ot),Zt.convert(Ut),ht)}finally{const Nt=T!==null?C.get(T).__webglFramebuffer:null;Tt.bindFramebuffer(k.FRAMEBUFFER,Nt)}}},this.copyFramebufferToTexture=function(E,N,V=0){const G=Math.pow(2,-V),B=Math.floor(N.image.width*G),ht=Math.floor(N.image.height*G);S.setTexture2D(N,0),k.copyTexSubImage2D(k.TEXTURE_2D,V,0,0,E.x,E.y,B,ht),Tt.unbindTexture()},this.copyTextureToTexture=function(E,N,V,G=0){const B=N.image.width,ht=N.image.height,wt=Zt.convert(V.format),Dt=Zt.convert(V.type);S.setTexture2D(V,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment),N.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,G,E.x,E.y,B,ht,wt,Dt,N.image.data):N.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,G,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,wt,N.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,G,E.x,E.y,wt,Dt,N.image),G===0&&V.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Tt.unbindTexture()},this.copyTextureToTexture3D=function(E,N,V,G,B=0){const ht=Math.round(E.max.x-E.min.x),wt=Math.round(E.max.y-E.min.y),Dt=E.max.z-E.min.z+1,Nt=Zt.convert(G.format),Ot=Zt.convert(G.type);let Ut;if(G.isData3DTexture)S.setTexture3D(G,0),Ut=k.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)S.setTexture2DArray(G,0),Ut=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,G.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,G.unpackAlignment);const kt=k.getParameter(k.UNPACK_ROW_LENGTH),ge=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Xe=k.getParameter(k.UNPACK_SKIP_PIXELS),Ee=k.getParameter(k.UNPACK_SKIP_ROWS),Fn=k.getParameter(k.UNPACK_SKIP_IMAGES),pe=V.isCompressedTexture?V.mipmaps[B]:V.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,pe.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,pe.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,E.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,E.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,E.min.z),V.isDataTexture||V.isData3DTexture?k.texSubImage3D(Ut,B,N.x,N.y,N.z,ht,wt,Dt,Nt,Ot,pe.data):G.isCompressedArrayTexture?k.compressedTexSubImage3D(Ut,B,N.x,N.y,N.z,ht,wt,Dt,Nt,pe.data):k.texSubImage3D(Ut,B,N.x,N.y,N.z,ht,wt,Dt,Nt,Ot,pe),k.pixelStorei(k.UNPACK_ROW_LENGTH,kt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ge),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Xe),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ee),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Fn),B===0&&G.generateMipmaps&&k.generateMipmap(Ut),Tt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),Tt.unbindTexture()},this.resetState=function(){A=0,w=0,T=null,Tt.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Jl?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===_a?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class rh{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new lt(t),this.density=e}clone(){return new rh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class kp extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const _d=new R,Md=new ve,yd=new ve,WM=new R,bd=new Pt,_o=new R,vc=new ti,Sd=new Pt,xc=new Ql;class XM extends pt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=iu,this.bindMatrix=new Pt,this.bindMatrixInverse=new Pt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ci),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,_o),this.boundingBox.expandByPoint(_o)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ti),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,_o),this.boundingSphere.expandByPoint(_o)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vc.copy(this.boundingSphere),vc.applyMatrix4(s),t.ray.intersectsSphere(vc)!==!1&&(Sd.copy(s).invert(),xc.copy(t.ray).applyMatrix4(Sd),!(this.boundingBox!==null&&xc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,xc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ve,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===iu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;Md.fromBufferAttribute(s.attributes.skinIndex,t),yd.fromBufferAttribute(s.attributes.skinWeight,t),_d.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=yd.getComponent(r);if(o!==0){const a=Md.getComponent(r);bd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(WM.copy(_d).applyMatrix4(bd),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Fp extends be{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ya extends Fe{constructor(t=null,e=1,n=1,s,r,o,a,c,l=ye,h=ye,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wd=new Pt,qM=new Pt;class oh{constructor(t=[],e=[]){this.uuid=sr(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Pt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Pt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:qM;wd.multiplyMatrices(a,e[r]),wd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new oh(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new ya(e,t,t,cn,Cn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Fp),this.bones.push(o),this.boneInverses.push(new Pt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class Ed extends ce{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ys=new Pt,Td=new Pt,Mo=[],Ad=new Ci,$M=new Pt,vr=new pt,xr=new ti;class Ji extends pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ed(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,$M)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ys),Ad.copy(t.boundingBox).applyMatrix4(ys),this.boundingBox.union(Ad)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ys),xr.copy(t.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(xr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(n),t.ray.intersectsSphere(xr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ys),Td.multiplyMatrices(n,ys),vr.matrixWorld=Td,vr.raycast(t,Mo);for(let o=0,a=Mo.length;o<a;o++){const c=Mo[o];c.instanceId=r,c.object=this,e.push(c)}Mo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ed(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ya(new Float32Array(s*this.count),s,this.count,dp,Cn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class YM extends ns{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Rd=new Pt,dl=new Ql,yo=new ti,bo=new R;class jM extends be{constructor(t=new de,e=new YM){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(s),yo.radius+=r,t.ray.intersectsSphere(yo)===!1)return;Rd.copy(s).invert(),dl.copy(t.ray).applyMatrix4(Rd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const m=l.getX(g);bo.fromBufferAttribute(u,m),Cd(bo,m,c,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)bo.fromBufferAttribute(u,g),Cd(bo,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Cd(i,t,e,n,s,r,o){const a=dl.distanceSqToPoint(i);if(a<e){const c=new R;dl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class KM extends Fe{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ot:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,s=[],r=[],o=[],a=new R,c=new Pt;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Re(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Re(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class zp extends ei{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ot){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ZM extends zp{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ah(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const So=new R,_c=new ah,Mc=new ah,yc=new ah;class ba extends ei{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(So.subVectors(s[0],s[1]).add(s[0]),l=So);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(So.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=So),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),_c.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,m),Mc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,m),yc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(_c.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Mc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),yc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(_c.calc(c),Mc.calc(c),yc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Pd(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function JM(i,t){const e=1-i;return e*e*t}function QM(i,t){return 2*(1-i)*i*t}function ty(i,t){return i*i*t}function Pr(i,t,e,n){return JM(i,t)+QM(i,e)+ty(i,n)}function ey(i,t){const e=1-i;return e*e*e*t}function ny(i,t){const e=1-i;return 3*e*e*i*t}function iy(i,t){return 3*(1-i)*i*i*t}function sy(i,t){return i*i*i*t}function Lr(i,t,e,n,s){return ey(i,t)+ny(i,e)+iy(i,n)+sy(i,s)}class ry extends ei{constructor(t=new ot,e=new ot,n=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ot){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Lr(t,s.x,r.x,o.x,a.x),Lr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class oy extends ei{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Lr(t,s.x,r.x,o.x,a.x),Lr(t,s.y,r.y,o.y,a.y),Lr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ay extends ei{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cy extends ei{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ly extends ei{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Pr(t,s.x,r.x,o.x),Pr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bp extends ei{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Pr(t,s.x,r.x,o.x),Pr(t,s.y,r.y,o.y),Pr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hy extends ei{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Pd(a,c.x,l.x,h.x,u.x),Pd(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ot().fromArray(s))}return this}}var uy=Object.freeze({__proto__:null,ArcCurve:ZM,CatmullRomCurve3:ba,CubicBezierCurve:ry,CubicBezierCurve3:oy,EllipseCurve:zp,LineCurve:ay,LineCurve3:cy,QuadraticBezierCurve:ly,QuadraticBezierCurve3:Bp,SplineCurve:hy});class Sa extends de{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Re(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new R,d=new ot,f=new R,g=new R,v=new R;let m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let _=0;_<=e;_++){const x=n+_*h*s,y=Math.sin(x),A=Math.cos(x);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*y,u.y=t[w].y,u.z=t[w].x*A,o.push(u.x,u.y,u.z),d.x=_/e,d.y=w/(t.length-1),a.push(d.x,d.y);const T=c[3*w+0]*y,L=c[3*w+1],b=c[3*w+0]*A;l.push(T,L,b)}}for(let _=0;_<e;_++)for(let x=0;x<t.length-1;x++){const y=x+_*t.length,A=y,w=y+t.length,T=y+t.length+1,L=y+1;r.push(A,w,L),r.push(T,L,w)}this.setIndex(r),this.setAttribute("position",new Gt(o,3)),this.setAttribute("uv",new Gt(a,2)),this.setAttribute("normal",new Gt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sa(t.points,t.segments,t.phiStart,t.phiLength)}}class or extends de{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new R,h=new ot;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(a,3)),this.setAttribute("uv",new Gt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new or(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Pi extends de{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;_(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(f,2));function _(){const y=new R,A=new R;let w=0;const T=(e-t)/n;for(let L=0;L<=r;L++){const b=[],M=L/r,D=M*(e-t)+t;for(let O=0;O<=s;O++){const I=O/s,z=I*c+a,X=Math.sin(z),Y=Math.cos(z);A.x=D*X,A.y=-M*n+m,A.z=D*Y,u.push(A.x,A.y,A.z),y.set(X,T,Y).normalize(),d.push(y.x,y.y,y.z),f.push(I,1-M),b.push(g++)}v.push(b)}for(let L=0;L<s;L++)for(let b=0;b<r;b++){const M=v[b][L],D=v[b+1][L],O=v[b+1][L+1],I=v[b][L+1];h.push(M,D,I),h.push(D,O,I),w+=6}l.addGroup(p,w,0),p+=w}function x(y){const A=g,w=new ot,T=new R;let L=0;const b=y===!0?t:e,M=y===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const D=g;for(let O=0;O<=s;O++){const z=O/s*c+a,X=Math.cos(z),Y=Math.sin(z);T.x=b*Y,T.y=m*M,T.z=b*X,u.push(T.x,T.y,T.z),d.push(0,M,0),w.x=X*.5+.5,w.y=Y*.5*M+.5,f.push(w.x,w.y),g++}for(let O=0;O<s;O++){const I=A+O,z=D+O;y===!0?h.push(z,z+1,I):h.push(z+1,z,I),L+=3}l.addGroup(p,L,y===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wa extends de{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Gt(r,3)),this.setAttribute("normal",new Gt(r.slice(),3)),this.setAttribute("uv",new Gt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const x=new R,y=new R,A=new R;for(let w=0;w<e.length;w+=3)f(e[w+0],x),f(e[w+1],y),f(e[w+2],A),c(x,y,A,_)}function c(_,x,y,A){const w=A+1,T=[];for(let L=0;L<=w;L++){T[L]=[];const b=_.clone().lerp(y,L/w),M=x.clone().lerp(y,L/w),D=w-L;for(let O=0;O<=D;O++)O===0&&L===w?T[L][O]=b:T[L][O]=b.clone().lerp(M,O/D)}for(let L=0;L<w;L++)for(let b=0;b<2*(w-L)-1;b++){const M=Math.floor(b/2);b%2===0?(d(T[L][M+1]),d(T[L+1][M]),d(T[L][M])):(d(T[L][M+1]),d(T[L+1][M+1]),d(T[L+1][M]))}}function l(_){const x=new R;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(_),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){const _=new R;for(let x=0;x<r.length;x+=3){_.x=r[x+0],_.y=r[x+1],_.z=r[x+2];const y=m(_)/2/Math.PI+.5,A=p(_)/Math.PI+.5;o.push(y,1-A)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){const x=o[_+0],y=o[_+2],A=o[_+4],w=Math.max(x,y,A),T=Math.min(x,y,A);w>.9&&T<.1&&(x<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),A<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,x){const y=_*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function g(){const _=new R,x=new R,y=new R,A=new R,w=new ot,T=new ot,L=new ot;for(let b=0,M=0;b<r.length;b+=9,M+=6){_.set(r[b+0],r[b+1],r[b+2]),x.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),w.set(o[M+0],o[M+1]),T.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),A.copy(_).add(x).add(y).divideScalar(3);const D=m(A);v(w,M+0,_,D),v(T,M+2,x,D),v(L,M+4,y,D)}}function v(_,x,y,A){A<0&&_.x===1&&(o[x]=_.x-1),y.x===0&&y.z===0&&(o[x]=A/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wa(t.vertices,t.indices,t.radius,t.details)}}class ch extends wa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ch(t.radius,t.detail)}}class lh extends wa{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new lh(t.radius,t.detail)}}class hh extends de{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,f=new R,g=new ot;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const _=p+m,x=_,y=_+n+1,A=_+n+2,w=_+1;a.push(x,y,w),a.push(y,A,w)}}this.setIndex(a),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(l,3)),this.setAttribute("uv",new Gt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Pn extends de{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new R,d=new R,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const _=[],x=p/n;let y=0;p===0&&o===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){const w=A/e;u.x=-t*Math.cos(s+w*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+w*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(w+y,1-x),_.push(l++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){const x=h[p][_+1],y=h[p][_],A=h[p+1][_],w=h[p+1][_+1];(p!==0||o>0)&&f.push(x,y,w),(p!==n-1||c<Math.PI)&&f.push(y,A,w)}this.setIndex(f),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(v,3)),this.setAttribute("uv",new Gt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ys extends de{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new R,u=new R,d=new R;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,_=(s+1)*f+g;o.push(v,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(c,3)),this.setAttribute("uv",new Gt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ys(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ea extends de{constructor(t=new Bp(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,c=new R,l=new ot;let h=new R;const u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(f,2));function v(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),_(),p()}function m(x){h=t.getPointAt(x/e,h);const y=o.normals[x],A=o.binormals[x];for(let w=0;w<=s;w++){const T=w/s*Math.PI*2,L=Math.sin(T),b=-Math.cos(T);c.x=b*y.x+L*A.x,c.y=b*y.y+L*A.y,c.z=b*y.z+L*A.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=e;x++)for(let y=1;y<=s;y++){const A=(s+1)*(x-1)+(y-1),w=(s+1)*x+(y-1),T=(s+1)*x+y,L=(s+1)*(x-1)+y;g.push(A,w,L),g.push(w,T,L)}}function _(){for(let x=0;x<=e;x++)for(let y=0;y<=s;y++)l.x=x/e,l.y=y/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ea(new uy[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class dy extends te{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Kt extends ns{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ld extends Kt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Re(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class fy extends ns{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Hp extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Vp extends Hp{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const bc=new Pt,Id=new R,Dd=new R;class py{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eh,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Id.setFromMatrixPosition(t.matrixWorld),e.position.copy(Id),Dd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dd),e.updateMatrixWorld(),bc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class my extends py{constructor(){super(new nh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fl extends Hp{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new my}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class gy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Nd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Nd(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yl);class uh{constructor(){this._handlers=new Map}on(t,e){return this._handlers.has(t)||this._handlers.set(t,new Set),this._handlers.get(t).add(e),()=>this._handlers.get(t).delete(e)}emit(t,e){const n=this._handlers.get(t);if(n)for(const s of n)s(e)}}const Sc=(i,t)=>new lt(i).multiplyScalar(t);function vy(i){const t=new kp,e=(h,u=Kn)=>new Zn({color:h,side:u}),n=(h,u,d,f,g,v=0)=>{const m=new pt(h,u);m.position.set(d,f,g),m.rotation.x=v,t.add(m)};n(new me(80,14,80),e(1382430,ke),0,5,0),n(new Pe(80,80),e(2895411),0,-1.8,0,-Math.PI/2);const s=new Pe(3.4,.7),r=e(Sc(16054527,16));for(let h=-30;h<=30;h+=10)for(let u=-30;u<=30;u+=10)n(s,r,h,10.5,u,Math.PI/2);const o=new me(76,.15,.15),a=[e(Sc(58879,4)),e(Sc(16722902,4))];for(const[h,u]of[[-39.5,a[0]],[39.5,a[1]]])n(o,u,0,1.4,h);const c=new na(i),l=c.fromScene(t,.02).texture;return c.dispose(),t.traverse(h=>{var u;return(u=h.geometry)==null?void 0:u.dispose()}),l}function xy(i,t,e,n,s=[],r=500){const o=new Cp(n,{type:Ze}),a=new Ap(.2,r,o);a.position.copy(e);const c=s.map(d=>d.visible);s.forEach(d=>d.visible=!1);const l=t.environment;t.environment=null,a.update(i,t),t.environment=l,s.forEach((d,f)=>d.visible=c[f]);const h=new na(i),u=h.fromCubemap(o.texture).texture;return h.dispose(),o.dispose(),u}const Ur={low:{label:"LOW",pixelRatio:1,msaa:0,shadowMap:1024,gtao:!1,envSize:128,dof:!1,haze:!1,detail:!1,barrierShadows:!1},medium:{label:"MEDIUM",pixelRatio:1.5,msaa:2,shadowMap:2048,gtao:!1,envSize:128,dof:!1,haze:!1,detail:!0,barrierShadows:!1},high:{label:"HIGH",pixelRatio:1.5,msaa:4,shadowMap:4096,gtao:!1,envSize:256,dof:!0,haze:!0,detail:!0,barrierShadows:!0},ultra:{label:"ULTRA",pixelRatio:2,msaa:4,shadowMap:4096,gtao:!0,envSize:512,dof:!0,haze:!0,detail:!0,barrierShadows:!0}},Gp="tbc-kart.gfx";function _y(){var e;if(typeof window>"u")return"high";const i=new URLSearchParams(window.location.search).get("gfx");if(Ur[i])return i;let t=null;try{t=localStorage.getItem(Gp)}catch{}return Ur[t]?t:(e=window.matchMedia)!=null&&e.call(window,"(pointer: coarse)").matches?"medium":"high"}const zs=_y(),Je=Ur[zs],My=Je.pixelRatio,yy=Je.msaa,by=1,Sy=724242,wy=724242,Ey=.0058,Ty=.8,wc={sky:14674175,ground:3814704,intensity:.35},Xi={color:16774114,intensity:2.4,offset:[7,50,5]},Ay=[{color:14673663,intensity:.3,direction:[-1,.75,-.55]},{color:16771542,intensity:.25,direction:[1,.7,.8]}],Or=Je.shadowMap,Wp=-3e-4,Xp=.035,Ry={maxHalf:58},qp=Je.barrierShadows,Ec={strength:.45,radius:.22,threshold:3},Cy={vignette:.38,saturation:1.08,contrast:1.08,grain:.035,fringe:.012},wo={intensity:1,resolution:.5,gtao:{radius:.6,distanceExponent:1.4,thickness:1.2,scale:1.1,samples:12,distanceFallOff:1},denoise:{lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16}},$p={intensity:.05,spread:2.2},Ud={aperture:18e-5,maxBlur:.008};class Py{constructor(t=document.body){const e=new GM({antialias:!1,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio,My)),e.setSize(window.innerWidth,window.innerHeight),e.toneMapping=Kl,e.toneMappingExposure=by,e.shadowMap.enabled=!0,e.shadowMap.type=sp,t.appendChild(e.domElement),this.three=e,this.scene=new kp,this.scene.background=new lt(Sy),this.scene.fog=new rh(wy,Ey),this.scene.environment=vy(e),this.scene.environmentIntensity=Ty}captureEnvironment(t,e,n){var r;const s=xy(this.three,this.scene,t,Je.envSize,e,n);(r=this.scene.environment)==null||r.dispose(),this.scene.environment=s}setAtmosphere({background:t,fog:e,density:n,exposure:s}){this.scene.background=t,this.scene.fog.color.copy(e),this.scene.fog.density=n,this.three.toneMappingExposure=s}get maxAnisotropy(){return this.three.capabilities.getMaxAnisotropy()}setSize(t,e){this.three.setSize(t,e)}}const Ir={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Li{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ly=new nh(-1,1,1,-1,0,1);class Iy extends de{constructor(){super(),this.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Gt([0,2,0,0,2,0],2))}}const Dy=new Iy;class Hr{constructor(t){this._mesh=new pt(Dy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ly)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Ny extends Li{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof te?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Rn.clone(t.uniforms),this.material=new te({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Hr(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Od extends Li{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Uy extends Li{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Oy{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ot);this._width=n.width,this._height=n.height,e=new He(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ze}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ny(Ir),this.copyPass.material.blending=Ae,this.clock=new gy}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Od!==void 0&&(o instanceof Od?n=!0:o instanceof Uy&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ky extends Li{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new lt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const Eo={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ot},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Pt},cameraProjectionMatrixInverse:{value:new Pt},cameraWorldMatrix:{value:new Pt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new R(-1,-1,-1)},sceneBoxMax:{value:new R(1,1,1)}},vertexShader:`

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
		}`},To={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Tc={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Fy(i=5){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=zy(t),n=e.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){const a=e[o],c=2*Math.PI*a/n,l=new R(Math.cos(c),Math.sin(c),0).normalize();s[o*4]=(l.x*.5+.5)*255,s[o*4+1]=(l.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}const r=new ya(s,t,t);return r.wrapS=Ei,r.wrapT=Ei,r.needsUpdate=!0,r}function zy(i){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0);let s=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=o++;r++,s--}return n}const Ao={defines:{SAMPLES:16,SAMPLE_VECTORS:Yp(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ot},cameraProjectionMatrixInverse:{value:new Pt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Yp(i,t,e){const n=By(i,t,e);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function By(i,t,e){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*t*s/i,o=Math.pow(s/(i-1),e);n.push(new R(Math.cos(r),Math.sin(r),o))}return n}class Hy{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r;const o=.5*(Math.sqrt(3)-1),a=(t+e)*o,c=Math.floor(t+a),l=Math.floor(e+a),h=(3-Math.sqrt(3))/6,u=(c+l)*h,d=c-u,f=l-u,g=t-d,v=e-f;let m,p;g>v?(m=1,p=0):(m=0,p=1);const _=g-m+h,x=v-p+h,y=g-1+2*h,A=v-1+2*h,w=c&255,T=l&255,L=this.perm[w+this.perm[T]]%12,b=this.perm[w+m+this.perm[T+p]]%12,M=this.perm[w+1+this.perm[T+1]]%12;let D=.5-g*g-v*v;D<0?n=0:(D*=D,n=D*D*this.dot(this.grad3[L],g,v));let O=.5-_*_-x*x;O<0?s=0:(O*=O,s=O*O*this.dot(this.grad3[b],_,x));let I=.5-y*y-A*A;return I<0?r=0:(I*=I,r=I*I*this.dot(this.grad3[M],y,A)),70*(n+s+r)}noise3d(t,e,n){let s,r,o,a;const l=(t+e+n)*.3333333333333333,h=Math.floor(t+l),u=Math.floor(e+l),d=Math.floor(n+l),f=1/6,g=(h+u+d)*f,v=h-g,m=u-g,p=d-g,_=t-v,x=e-m,y=n-p;let A,w,T,L,b,M;_>=x?x>=y?(A=1,w=0,T=0,L=1,b=1,M=0):_>=y?(A=1,w=0,T=0,L=1,b=0,M=1):(A=0,w=0,T=1,L=1,b=0,M=1):x<y?(A=0,w=0,T=1,L=0,b=1,M=1):_<y?(A=0,w=1,T=0,L=0,b=1,M=1):(A=0,w=1,T=0,L=1,b=1,M=0);const D=_-A+f,O=x-w+f,I=y-T+f,z=_-L+2*f,X=x-b+2*f,Y=y-M+2*f,et=_-1+3*f,U=x-1+3*f,q=y-1+3*f,$=h&255,Q=u&255,dt=d&255,_t=this.perm[$+this.perm[Q+this.perm[dt]]]%12,F=this.perm[$+A+this.perm[Q+w+this.perm[dt+T]]]%12,K=this.perm[$+L+this.perm[Q+b+this.perm[dt+M]]]%12,at=this.perm[$+1+this.perm[Q+1+this.perm[dt+1]]]%12;let nt=.6-_*_-x*x-y*y;nt<0?s=0:(nt*=nt,s=nt*nt*this.dot3(this.grad3[_t],_,x,y));let bt=.6-D*D-O*O-I*I;bt<0?r=0:(bt*=bt,r=bt*bt*this.dot3(this.grad3[F],D,O,I));let Et=.6-z*z-X*X-Y*Y;Et<0?o=0:(Et*=Et,o=Et*Et*this.dot3(this.grad3[K],z,X,Y));let Lt=.6-et*et-U*U-q*q;return Lt<0?a=0:(Lt*=Lt,a=Lt*Lt*this.dot3(this.grad3[at],et,U,q)),32*(s+r+o+a)}noise4d(t,e,n,s){const r=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let h,u,d,f,g;const v=(t+e+n+s)*c,m=Math.floor(t+v),p=Math.floor(e+v),_=Math.floor(n+v),x=Math.floor(s+v),y=(m+p+_+x)*l,A=m-y,w=p-y,T=_-y,L=x-y,b=t-A,M=e-w,D=n-T,O=s-L,I=b>M?32:0,z=b>D?16:0,X=M>D?8:0,Y=b>O?4:0,et=M>O?2:0,U=D>O?1:0,q=I+z+X+Y+et+U,$=o[q][0]>=3?1:0,Q=o[q][1]>=3?1:0,dt=o[q][2]>=3?1:0,_t=o[q][3]>=3?1:0,F=o[q][0]>=2?1:0,K=o[q][1]>=2?1:0,at=o[q][2]>=2?1:0,nt=o[q][3]>=2?1:0,bt=o[q][0]>=1?1:0,Et=o[q][1]>=1?1:0,Lt=o[q][2]>=1?1:0,k=o[q][3]>=1?1:0,mt=b-$+l,Mt=M-Q+l,Jt=D-dt+l,Tt=O-_t+l,Yt=b-F+2*l,C=M-K+2*l,S=D-at+2*l,H=O-nt+2*l,j=b-bt+3*l,Z=M-Et+3*l,J=D-Lt+3*l,At=O-k+3*l,tt=b-1+4*l,St=M-1+4*l,Rt=D-1+4*l,rt=O-1+4*l,ut=m&255,It=p&255,gt=_&255,vt=x&255,Wt=a[ut+a[It+a[gt+a[vt]]]]%32,qt=a[ut+$+a[It+Q+a[gt+dt+a[vt+_t]]]]%32,Zt=a[ut+F+a[It+K+a[gt+at+a[vt+nt]]]]%32,jt=a[ut+bt+a[It+Et+a[gt+Lt+a[vt+k]]]]%32,ne=a[ut+1+a[It+1+a[gt+1+a[vt+1]]]]%32;let xt=.6-b*b-M*M-D*D-O*O;xt<0?h=0:(xt*=xt,h=xt*xt*this.dot4(r[Wt],b,M,D,O));let P=.6-mt*mt-Mt*Mt-Jt*Jt-Tt*Tt;P<0?u=0:(P*=P,u=P*P*this.dot4(r[qt],mt,Mt,Jt,Tt));let st=.6-Yt*Yt-C*C-S*S-H*H;st<0?d=0:(st*=st,d=st*st*this.dot4(r[Zt],Yt,C,S,H));let it=.6-j*j-Z*Z-J*J-At*At;it<0?f=0:(it*=it,f=it*it*this.dot4(r[jt],j,Z,J,At));let yt=.6-tt*tt-St*St-Rt*Rt-rt*rt;return yt<0?g=0:(yt*=yt,g=yt*yt*this.dot4(r[ne],tt,St,Rt,rt)),27*(h+u+d+f+g)}}class Sn extends Li{constructor(t,e,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Fy(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new He(this.width,this.height,{type:Ze}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new te({defines:Object.assign({},Eo.defines),uniforms:Rn.clone(Eo.uniforms),vertexShader:Eo.vertexShader,fragmentShader:Eo.fragmentShader,blending:Ae,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new fy,this.normalMaterial.blending=Ae,this.pdMaterial=new te({defines:Object.assign({},Ao.defines),uniforms:Rn.clone(Ao.uniforms),vertexShader:Ao.vertexShader,fragmentShader:Ao.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new te({defines:Object.assign({},To.defines),uniforms:Rn.clone(To.uniforms),vertexShader:To.vertexShader,fragmentShader:To.fragmentShader,blending:Ae}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new te({uniforms:Rn.clone(Ir.uniforms),vertexShader:Ir.vertexShader,fragmentShader:Ir.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ol,blendDst:Is,blendEquation:gn,blendSrcAlpha:rl,blendDstAlpha:Is,blendEquationAlpha:gn}),this.blendMaterial=new te({uniforms:Rn.clone(Tc.uniforms),vertexShader:Tc.vertexShader,fragmentShader:Tc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:jl,blendSrc:ol,blendDst:Is,blendEquation:gn,blendSrcAlpha:rl,blendDstAlpha:Is,blendEquationAlpha:gn}),this.fsQuad=new Hr(null),this.originalClearColor=new lt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new sh,this.depthTexture.format=qs,this.depthTexture.type=nr,this.normalRenderTarget=new He(this.width,this.height,{minFilter:ye,magFilter:ye,type:Ze,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Yp(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Sn.OUTPUT.Off:break;case Sn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ae,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case Sn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ae,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case Sn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ae,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case Sn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case Sn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ae,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case Sn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ae,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const s=e.get(n);n.visible=s}),e.clear()}generateNoise(t=64){const e=new Hy,n=t*t*4,s=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){const c=o,l=a;s[(o*t+a)*4]=(e.noise(c,l)*.5+.5)*255,s[(o*t+a)*4+1]=(e.noise(c+t,l)*.5+.5)*255,s[(o*t+a)*4+2]=(e.noise(c,l+t)*.5+.5)*255,s[(o*t+a)*4+3]=(e.noise(c+t,l+t)*.5+.5)*255}const r=new ya(s,t,t,cn,Yn);return r.wrapS=Ei,r.wrapT=Ei,r.needsUpdate=!0,r}}Sn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const Vy={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};class Gy extends Li{constructor(t,e,n){super(),this.scene=t,this.camera=e;const s=n.focus!==void 0?n.focus:1,r=n.aperture!==void 0?n.aperture:.025,o=n.maxblur!==void 0?n.maxblur:1;this.renderTargetDepth=new He(1,1,{minFilter:ye,magFilter:ye,type:Ze}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new Op,this.materialDepth.depthPacking=vp,this.materialDepth.blending=Ae;const a=Vy,c=Rn.clone(a.uniforms);c.tDepth.value=this.renderTargetDepth.texture,c.focus.value=s,c.aspect.value=e.aspect,c.aperture.value=r,c.maxblur.value=o,c.nearClip.value=e.near,c.farClip.value=e.far,this.materialBokeh=new te({defines:Object.assign({},a.defines),uniforms:c,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.uniforms=c,this.fsQuad=new Hr(this.materialBokeh),this._oldClearColor=new lt}render(t,e,n){this.scene.overrideMaterial=this.materialDepth,t.getClearColor(this._oldClearColor);const s=t.getClearAlpha(),r=t.autoClear;t.autoClear=!1,t.setClearColor(16777215),t.setClearAlpha(1),t.setRenderTarget(this.renderTargetDepth),t.clear(),t.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),t.clear(),this.fsQuad.render(t)),this.scene.overrideMaterial=null,t.setClearColor(this._oldClearColor),t.setClearAlpha(s),t.autoClear=r}setSize(t,e){this.materialBokeh.uniforms.aspect.value=t/e,this.renderTargetDepth.setSize(t,e)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}const Wy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new lt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class yi extends Li{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ot(t.x,t.y):new ot(256,256),this.clearColor=new lt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new He(r,o,{type:Ze}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new He(r,o,{type:Ze});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new He(r,o,{type:Ze});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=Wy;this.highPassUniforms=Rn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new te({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ot(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Ir;this.copyUniforms=Rn.clone(h.uniforms),this.blendMaterial=new te({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Vs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new lt,this.oldClearAlpha=1,this.basic=new Zn,this.fsQuad=new Hr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ot(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=yi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=yi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new te({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ot(.5,.5)},direction:{value:new ot(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}}yi.BlurDirectionX=new ot(1,0);yi.BlurDirectionY=new ot(0,1);class Xy extends yi{get texture(){return this.renderTargetsHorizontal[0].texture}render(t,e,n){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const s=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let r=this.renderTargetBright;for(let o=0;o<this.nMips;o++){const a=this.separableBlurMaterials[o];this.fsQuad.material=a,a.uniforms.colorTexture.value=r.texture,a.uniforms.direction.value=yi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[o]),t.clear(),this.fsQuad.render(t),a.uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,a.uniforms.direction.value=yi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[o]),t.clear(),this.fsQuad.render(t),r=this.renderTargetsVertical[o]}this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=s}}const qy=`
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
  }`,$y=`
  precision highp float;
  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;
  attribute vec3 position;
  attribute vec2 uv;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`;class Yy extends Li{constructor(t,e){super(),this.bloom=t,this.uniforms={tDiffuse:{value:null},tBloom:{value:null},uBloom:{value:0},toneMappingExposure:{value:1},uSaturation:{value:e.saturation},uContrast:{value:e.contrast},uVignette:{value:e.vignette},uGrain:{value:e.grain},uFringe:{value:e.fringe},uTime:{value:0}},this.material=new dy({uniforms:this.uniforms,vertexShader:$y,fragmentShader:qy}),this.fsQuad=new Hr(this.material),this._key=""}render(t,e,n){var a;const s=this.uniforms;s.tDiffuse.value=n.texture;const r=(a=this.bloom)==null?void 0:a.enabled;s.tBloom.value=r?this.bloom.texture:n.texture,s.uBloom.value=r?1:0,s.toneMappingExposure.value=t.toneMappingExposure;const o=`${t.outputColorSpace}|${t.toneMapping}`;o!==this._key&&(this._key=o,this.material.defines={},Qt.getTransfer(t.outputColorSpace)===se&&(this.material.defines.SRGB_TRANSFER=""),t.toneMapping===Kl?this.material.defines.AGX_TONE_MAPPING="":t.toneMapping===op&&(this.material.defines.ACES_FILMIC_TONE_MAPPING=""),this.material.needsUpdate=!0),t.setRenderTarget(this.renderToScreen?null:e),this.fsQuad.render(t)}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class jy{constructor(t,e,n){const s=t.three,r=s.getDrawingBufferSize(new ot),o=new He(r.x,r.y,{type:Ze,samples:yy});if(this.composer=new Oy(s,o),this.composer.addPass(new ky(e,n)),Je.gtao){const a=l=>Math.max(1,Math.round(l*wo.resolution));this.ao=new Sn(e,n,a(r.x),a(r.y));const c=this.ao.setSize.bind(this.ao);this.ao.setSize=(l,h)=>c(a(l),a(h)),this.ao.blendIntensity=wo.intensity,this.ao.updateGtaoMaterial(wo.gtao),this.ao.updatePdMaterial(wo.denoise),this.composer.addPass(this.ao)}Je.dof&&(this.dof=new Gy(e,n,{focus:10,aperture:Ud.aperture,maxblur:Ud.maxBlur}),this.dof.enabled=!1,this.composer.addPass(this.dof)),this.bloom=new Xy(r.clone(),Ec.strength,Ec.radius,Ec.threshold),this.composer.addPass(this.bloom),this.final=new Yy(this.bloom,Cy),this.composer.addPass(this.final)}setFocus(t){this.dof&&(this.dof.enabled=t!=null,this.dof.enabled&&(this.dof.uniforms.focus.value=t))}setSize(t,e){this.composer.setSize(t,e)}render(t){this.final.uniforms.uTime.value+=t,this.composer.render(t)}}const Ky=typeof document<"u"&&document.documentElement.dataset.edition||"classic",oe=Ky==="nova",Zy=.2,Jy=oe?1e3:420,dh=60,jp=17,Qy=17,tb=1,eb=2,nb=.8,ib=3,sb=2.5,Kp={chase:{distance:5.2,height:2,lookAhead:4.5,lookHeight:.75},far:{distance:8.8,height:3.6,lookAhead:6,lookHeight:.4},cockpit:{distance:.22,height:.8,lookAhead:12,lookHeight:-2.2}},Ac=["chase","far","cockpit"],Rc=9,rb=7,ob=.45,ab=.9,cb=2.4,lb=.32,en={sway:.0045,swayMax:.06,surge:.004,surgeMax:.05,nod:.012,nodMax:.22,roll:.0022,rollMax:.035,lookInto:.13,stiffness:70,damping:13,gClamp:22},je={engine:.0045,engineCockpit:.0015,speed:.004,speedCockpit:.002,kerb:.028,kerbCockpit:.014,aim:-2.5,nyquist:.4,buzzCeil:[.331,.379,.353],kerbCeil:[.303,.397,.303],fpsSmoothing:.05},ft=(i,t,e)=>i<t?t:i>e?e:i,Ln=(i,t,e)=>i+(t-i)*e;function Me(i,t,e){const n=ft((e-i)/(t-i),0,1);return n*n*(3-2*n)}const Ce=(i,t,e,n)=>Ln(i,t,1-Math.exp(-e*n)),Jn=i=>Math.atan2(Math.sin(i),Math.cos(i)),hb=(i,t,e,n)=>i+Jn(t-i)*(1-Math.exp(-7*n));function Ti(i){return{x:-Math.sin(i),z:-Math.cos(i)}}function fh(i){return{x:Math.cos(i),z:-Math.sin(i)}}const ub=(i,t)=>Math.atan2(-i,-t);function ar(i=1){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const Zp=i=>ft(i/jp,0,1);function db(i,t=0){const e=Math.sign(t)*Math.max(0,Math.abs(t)-eb);return dh+Qy*Zp(i)+ft(nb*e,-1.5,ib)}function fb(i,t){if(t<2)return i.yaw;const e=Jn(Math.atan2(-i.vx,-i.vz)-i.yaw);return i.yaw+ft(e,-.9,.9)*ob}function kd(i,t,e,n,s){const r=Kp[n],o=Ti(e),a=r.distance+(n==="cockpit"?0:ab*Zp(t));return s.pos.set(i.x-o.x*a,r.height,i.z-o.z*a),s.look.set(i.x+o.x*r.lookAhead,r.lookHeight,i.z+o.z*r.lookAhead),s}function pb(i,t,e,n){let s=e,r=1/0;for(let a=0;a<i.length;a++){const c=i[a],l=(c.x-t.x)**2+(c.z-t.z)**2;l<r&&([s,r]=[a,l])}if(e>=0&&s!==e){const a=i[e];(a.x-t.x)**2+(a.z-t.z)**2<r*1.6&&(s=e)}const o=i[s];return n.pos.set(o.x,o.y,o.z),n.look.set(t.x,.55,t.z),s}function mb(i){return ft(2*Math.atan(3.2/Math.max(i,1))*180/Math.PI,14,55)}const gb=["sway","surge","nod","roll","look"];class vb{constructor(){this.x={},this.v={},this.reset()}reset(){for(const t of gb)this.x[t]=this.v[t]=0}_spring(t,e,n){const s=en.stiffness*(e-this.x[t])-en.damping*this.v[t];return this.v[t]+=s*n,this.x[t]+=this.v[t]*n,this.x[t]}apply(t,e,n,s,r,o){const a=en.gClamp,c=ft(e.latAccel||0,-a,a),l=ft(e.longAccel||0,-a,a),h=ft((e.speed||0)/6,0,1);if(n>0){const y=Math.min(n,.05);this._spring("sway",ft(c*en.sway,-.06,en.swayMax),y),this._spring("surge",ft(-l*en.surge,-.05,en.surgeMax),y),this._spring("nod",ft(l*en.nod,-.22,en.nodMax),y),this._spring("roll",ft(-c*en.roll,-.035,en.rollMax),y),this._spring("look",ft(e.steer||0,-1,1)*en.lookInto*h,y)}const{sway:u,surge:d,nod:f,roll:g,look:v}=this.x,m=Ti(t.yaw),p=fh(t.yaw),_=o.pos;_.x+=p.x*u+m.x*d,_.z+=p.z*u+m.z*d,_.y-=Math.max(0,d)*.4;const x=Ti(t.yaw+v);return o.look.set(_.x+x.x*s,r+f,_.z+x.z*s),o.roll=g,o}}class xb{constructor(){this.view="chase",this._yaw=0,this._fov=dh,this._surge=0,this._target={pos:new R,look:new R,roll:0},this.head=new vb,this._pos=new R}cycle(){return this.view=Ac[(Ac.indexOf(this.view)+1)%Ac.length],this.view}reset(t){this._yaw=t.state.yaw,kd(t.state,0,this._yaw,this.view,this._target),this._pos.copy(this._target.pos),this._surge=0,this.head.reset()}update(t,e,n){const{state:s,telemetry:r}=t,o=this.view==="cockpit";if(this._yaw=o?s.yaw:hb(this._yaw,fb(s,r.speed),rb,e),kd(s,r.speed,this._yaw,this.view,this._target),this._target.roll=0,o){const a=Kp.cockpit;this.head.apply(s,r,e,a.lookAhead,a.lookHeight,this._target),this._pos.copy(this._target.pos)}else{const a=this._pos,c=this._target.pos;a.set(Ce(a.x,c.x,Rc,e),Ce(a.y,c.y,Rc,e),Ce(a.z,c.z,Rc,e))}return n.pos.copy(this._pos),n.look.copy(this._target.look),n.roll=this._target.roll,this._surge=Ce(this._surge,r.longAccel||0,tb,e),this._fov=Ce(this._fov,db(r.speed,this._surge),sb,e),this._fov}}class _b{constructor(){this.anchors=[],this._anchor=-1,this._target={pos:new R,look:new R},this._look=new R}reset(){this._anchor=-1}update(t,e,n){const s=this._anchor;return this._anchor=pb(this.anchors,t.state,this._anchor,this._target),this._anchor!==s?this._look.copy(this._target.look):this._look.lerp(this._target.look,1-Math.exp(-8*e)),n.pos.copy(this._target.pos),n.look.copy(this._look),mb(n.pos.distanceTo(n.look))}}class Mb{constructor(){this.trauma=0,this._time=0}add(t){this.trauma=Math.min(1,this.trauma+t)}apply(t,e){this._time+=e,this.trauma=Math.max(0,this.trauma-cb*e);const n=this.trauma*this.trauma*lb;if(n===0)return;const s=this._time*31;t.x+=n*(Math.sin(s*1.1)+.5*Math.sin(s*2.7)),t.y+=n*.6*Math.sin(s*1.7+1.3),t.z+=n*(Math.sin(s*1.3+2.1)+.5*Math.sin(s*2.3))}}const Fd=Math.PI*2;class Jp{constructor(t,e=t.map(()=>0),n=t.map(()=>je.nyquist),s=je){this.mults=t,this.offsets=e,this.ceil=n,this.cfg=s,this.fps=60,this.phase=t.map(()=>0),this.hz=t.map(()=>0),this.value=t.map(()=>0)}update(t,e){if(!(e>0))return this.value;this.fps+=(1/e-this.fps)*this.cfg.fpsSmoothing;for(let n=0;n<this.mults.length;n++)this.hz[n]=Math.min(t*this.mults[n],this.ceil[n]*this.fps),this.phase[n]=(this.phase[n]+this.hz[n]*e*Fd)%Fd,this.value[n]=Math.sin(this.phase[n]+this.offsets[n]);return this.value}}const yb=157/(2*Math.PI);class bb{constructor(){this._buzz=new Jp([1,241/157,199/157],[0,1.3,.7],je.buzzCeil),this.offset={x:0,y:0,z:0},this._aim={x:0,y:0,z:0}}update(t,e,n,s){const r=this.offset;if(r.x=r.y=r.z=0,t<=0)return r;const o=e==="cockpit",a=ft((n.speed||0)/jp,0,1),c=(o?je.engineCockpit:je.engine)*(.25+.75*a)+(o?je.speedCockpit:je.speed)*a**3,[l,h,u]=this._buzz.update(yb,t);if(r.y+=c*(.6*l+.4*h),r.x+=c*.5*u,s&&s.amount>.01){const d=(o?je.kerbCockpit:je.kerb)*s.amount*ft((n.speed||0)/8,.2,1),[f,g,v]=s.rib.value;r.y+=d*(.7*f+.3*g),r.x+=d*.45*s.tilt*v}return r}shake(t,e,n,s,r,o){const a=this.update(n,s,r,o);return t.set(t.x+a.x,t.y+a.y,t.z+a.z),Object.assign(this._aim,{x:e.x+a.x*je.aim,y:e.y+a.y*je.aim,z:e.z+a.z*je.aim})}}const Sb=1.3,wb=i=>i*i*(3-2*i);class Eb{constructor(t){this.three=new on(dh,t,Zy,Jy),this.mode="broadcast",this.followCam=new xb,this.broadcastCam=new _b,this.shaker=new Mb,this.vibe=new bb,this._out={pos:new R,look:new R,roll:0},this._from={pos:new R,look:new R},this._look=new R,this._swoop=1}get view(){return this.followCam.view}set anchors(t){this.broadcastCam.anchors=t}cycleView(){return this.followCam.cycle()}follow(t){this._from.pos.copy(this.three.position),this._from.look.copy(this._look),this.followCam.reset(t),this.mode="follow",this._swoop=0}broadcast(t=null){this.broadcastCam.reset(),this.mode="broadcast",t&&(this._swoop=1,this.update(t,0))}shake(t){this.shaker.add(t)}setAspect(t){this.three.aspect=t,this.three.updateProjectionMatrix()}update(t,e,n=null){if(this.mode==="manual")return;const s=Object.assign(this._out,{roll:0}),o=(this.mode==="broadcast"?this.broadcastCam:this.followCam).update(t,e,s);this._swoop=Math.min(1,this._swoop+e/Sb);const a=wb(this._swoop),c=this.three;c.position.lerpVectors(this._from.pos,s.pos,a),this._look.lerpVectors(this._from.look,s.look,a),this.shaker.apply(c.position,e);const l=this.mode==="follow"?this.vibe.shake(c.position,this._look,e,this.view,t.telemetry,n):this._look;c.lookAt(l.x,l.y,l.z),s.roll&&c.rotateZ(s.roll*a),Math.abs(c.fov-o)>.01&&(c.fov=o,c.updateProjectionMatrix())}}const bs={throttle:["KeyW","ArrowUp"],brake:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],handbrake:["Space","ShiftLeft","ShiftRight"]},Tb={start:["Enter","Space"],pause:["Escape","KeyP"],reset:["KeyR"],camera:["KeyC"],mute:["KeyM"],quit:["KeyQ"],left:["ArrowLeft","KeyA"],right:["ArrowRight","KeyD"],prevTrack:["ArrowUp","KeyW"],nextTrack:["ArrowDown","KeyS","KeyN"],raceAgain:["Enter"],nextRace:["KeyN"],level:["KeyL"],aids:["KeyI"],telemetry:["KeyT"],replay:["KeyV"],replayPause:["KeyK","Space"],replayBack:["ArrowLeft","KeyJ"],replayFwd:["ArrowRight","KeyL"],replaySlower:["BracketLeft","Minus","Comma"],replayFaster:["BracketRight","Equal","Period"],replayPrev:["ArrowUp"],replayNext:["ArrowDown"],replayDirector:["KeyA"],graphics:["KeyG"],debug:["Backquote","F3"]},Ab=new Set(["BracketLeft","BracketRight","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab","F3"]),Ss={deadzone:.14,steerAxis:0,throttle:7,brake:6,handbrake:0,actions:{start:9,pause:9,raceAgain:9,quit:1,camera:3,reset:8,prevTrack:12,nextTrack:13,nextRace:13,left:14,right:15,level:2}},Rb={slop:18},ia={seconds:5,speedFull:18,gFull:2,temps:[25,55,85]},fn={period:.1,impactFull:6,slideFrom:1.5,slideRange:4,rpmFrom:4200,rpmTo:5600,kerb:.7,slide:.55,engine:.12};class Cb{constructor(t=window){this.down=new Set,this.pressed=new Set,this._padPressed=new Set,this._padPrev={},this._triggered=new Set,this.pad=null,this.touch=null,t.addEventListener("keydown",e=>{Ab.has(e.code)&&e.preventDefault(),e.repeat||this.pressed.add(e.code),this.down.add(e.code)}),t.addEventListener("keyup",e=>this.down.delete(e.code)),window.addEventListener("blur",()=>this.down.clear())}poll(){var t,e;if(this.pad=((t=navigator.getGamepads)==null?void 0:t.call(navigator).find(n=>n&&n.connected))||null,this._padPressed.clear(),!!this.pad)for(const[n,s]of Object.entries(Ss.actions)){const r=!!((e=this.pad.buttons[s])!=null&&e.pressed);r&&!this._padPrev[n]&&this._padPressed.add(n),this._padPrev[n]=r}}controls(){var r,o,a,c;const t=l=>l.some(h=>this.down.has(h)),e={throttle:t(bs.throttle)?1:0,throttleDigital:!1,brake:t(bs.brake)?1:0,steer:(t(bs.left)?1:0)-(t(bs.right)?1:0),handbrake:t(bs.handbrake)},n=this.pad;if(n){const l=n.axes[Ss.steerAxis]||0;Math.abs(l)>Ss.deadzone&&(e.steer=-l),e.throttle=Math.max(e.throttle,((r=n.buttons[Ss.throttle])==null?void 0:r.value)||0),e.brake=Math.max(e.brake,((o=n.buttons[Ss.brake])==null?void 0:o.value)||0),e.handbrake=e.handbrake||!!((a=n.buttons[Ss.handbrake])!=null&&a.pressed)}const s=(c=this.touch)==null?void 0:c.held;return e.throttleDigital=t(bs.throttle)||!!(s!=null&&s.throttle),s&&(e.throttle=Math.max(e.throttle,s.throttle?1:0),e.brake=Math.max(e.brake,s.brake?1:0),e.handbrake=e.handbrake||s.handbrake,s.left!==s.right&&(e.steer=s.left?1:-1)),e}action(t){return Tb[t].some(e=>this.pressed.has(e))||this._padPressed.has(t)||this._triggered.has(t)}trigger(t){this._triggered.add(t)}endFrame(){this.pressed.clear(),this._triggered.clear()}}const Pb=1/240,In=160,Vr=9.81,cr=1.05,pl=1,ml=1.12,Gr=.58,gl=.25,Lb=52,Ib=6,Db=16,zd=.45,Nb=1.3,Ub=1.6,Qp=1.85,ph=1.1,Ob=.12,kb=.11,t0=.1,mh=1.7,Fb=.7,zb=.25,kr=1.5,e0=.018,Fr=22,gh=55,Ta=30,Bd=.08,Bb=420,Hb=6,Vb=2,Gb=.55,Rs=[[1500,22],[2400,34],[3e3,39],[3800,39],[4300,31],[4700,20],[5100,11],[5500,6],[5900,2],[6200,0]],vh=1700,n0=.035,Wb=3.2,i0=2200,Xb=3300,qb=45,zr=4.7,vl=.92,$b=.32,xn=.14,Cc=520,Yb=.3,jb=4,Kb=4,xl=.3,s0=.54,Zb=.55,Jb=1.5,_l=3,Qb=.13,Hd=5,t2=10,e2=5,n2=7,i2=.008,s2=4,r2=10,o2=14,a2=.04,c2=.25,l2=12,h2=11,u2=.4,d2=14,f2=.12,p2=1,m2=.04,g2=.15,v2=.16,x2=.6,_2=.4,M2=.8,y2=.3,b2=.8,r0=4,o0=60/(2*Math.PI),a0=Rs.at(-1)[0],Vd=40,S2=3050;function c0(i){if(i<=Rs[0][0])return Rs[0][1];for(let t=1;t<Rs.length;t++){const[e,n]=Rs[t];if(i<=e){const[s,r]=Rs[t-1];return r+(n-r)*(i-s)/(e-s)}}return 0}function w2(i,t){const e=Wb*ft(i/a0,.25,1),n=t<.05?ft((vh-i)*.02,0,6):0;return t*c0(i)-(1-t)*e+n}const l0=i=>qb*Me(i0,Xb,i),xh=i=>Math.abs(i)*zr*o0;function E2(i,t,e,n){const s=xh(Math.max(0,t)),r=w2(i,e),o=l0(Math.max(i,s));if(Math.abs(i-s)<Vd&&Math.abs(r)<=o&&s>=i0)return{rpm:s,torque:r*zr*vl,coupled:!0,slipping:0};const a=o*ft((i-s)/Vd,-1,1);let c=i+(r-a)/n0*o0*n;return(i-s)*(c-s)<0&&(c=s),{rpm:ft(c,0,a0*1.02),torque:a*zr*vl,coupled:!1,slipping:o>0?ft(Math.abs(i-s)/1500,0,1):1}}function h0(i){const t=Math.max(xh(i/xn),S2);return Math.min(c0(t),l0(t))*zr*vl/xn/In}const T2=i=>1-Me(e2,n2,i),u0=(i,t)=>1-Me(0,t,Math.abs(i||0));function A2(i,t){const e=Me(r2,o2,i);return s2*e*u0(t,a2)/Math.max(h0(i),1e-6)}function R2(i,t,e,n,s){const r=ft(t||0,0,1);if(r<=i||Math.abs(e||0)>c2||s<_l)return r;if(!Number.isFinite(s))return Math.min(r,i+Hd*n);const o=Ln(Hd,t2,T2(s)*u0(e,i2));return Math.min(r,Math.max(i+o*n,A2(s,e)))}function C2(i,t,e){const n=ft(t||0,-1,1),s=Math.abs(n)>Math.abs(i)?l2:h2;return i+(n-i)*Math.min(1,s*e)}function P2(i,t){const e=d2*cr/Math.max(t*t,1e-6)+f2,n=Math.min(u2,e);return i*n}function L2(i,t,e,n=p2,s=0,r=0){const o=Me(x2,1,r)*Math.abs(s),a=n*(1-v2*o)*Me(m2,g2,Math.abs(t));return Ln(i,e+i*_2,a)}function I2(i,t,e){const n=t.throttle||0,s=t.brake||0;let r=e?Cc:0,o=n,a=0;return i>xl?r=Math.max(r,Cc*s):s>0&&!n&&(a=-In*jb*s*ft((Kb+i)/.25,0,1)),i<-xl&&n>0&&([r,o]=[Math.max(r,Cc*n),0]),{throttle:o,brake:r,reverse:a}}const sa=In*Vr,Gd=sa*(1-Gr)/2,Wd=sa*Gr/2;function D2(i,t,e,n){const s=In*i*gl/cr/2,r=In*t*gl,o=r*zd/pl,a=r*(1-zd)/ml,c=Nb*sa*e/4;n[0]=Gd-s-o+c,n[1]=Gd-s+o-c,n[2]=Wd+s-a-c,n[3]=Wd+s+a+c;let l=0;for(let h=0;h<4;h++)l+=n[h]=Math.max(0,n[h]);for(let h=0;h<4;h++)n[h]*=sa/l;return n}const Xd=cr*Gr,ra=cr*(1-Gr),Ml=[[Xd,pl/2],[Xd,-pl/2],[-ra,ml/2],[-ra,-ml/2]];function N2(i,t,e,n,s){const r=Math.cos(n),o=Math.sin(n);for(let a=0;a<4;a++){const[c,l]=Ml[a],h=i-e*l,u=t+e*c;s[a].long=a<2?h*r+u*o:h,s[a].lat=a<2?u*r-h*o:u}return s}const U2=i=>-i.lat/Math.max(Math.abs(i.long),kr),d0=Math.tan(Math.PI/(2*mh)),O2=Math.tan(kb),k2=In*Vr/4,F2=(i,t)=>i*Math.min(1.3,Math.max(.6,1-Ob*(t/k2-1)));function z2(i){const t=Math.sin(mh*Math.atan(d0*i));return i>1?Math.max(t,Fb):t}function f0(i,t,e,n,s){const r=e/t0,o=t/O2,a=Math.hypot(r,o);if(s.s=a,!(i>0)||a<1e-9)return s.fx=0,s.fy=0,s;const c=n*i*z2(a)/a;return s.fx=c*ph*r,s.fy=c*o,s}const B2=(i,t)=>Math.max(i,0)*t*ph*d0*mh/t0,H2={fx:0,fy:0,s:0},p0=(i,t)=>(i*xn-t)/Math.max(Math.abs(t),kr);function V2(i,t,e,n,s,r,o){let a=0,c=0;for(const f of t){const g=Math.max(Math.abs(f.v),kr);a+=f0(f.fz,f.tan,p0(i,f.v),f.mu,H2).fx*xn,c+=B2(f.fz,f.mu)*xn*xn/g}const l=s+r*c,h=i+r*(e-a)/l,u=r*n/l;let d=Math.abs(h)<=u?0:h-Math.sign(h)*u;if(o&&n>0){const f=(t[0].v+t[1].v)/2,g=f*(1-Qb)/xn;f>0&&d<g&&h>=g&&(d=g)}return d}function qd(i,t,e,n){const s=i??Fr,r=(Vb+Gb*Math.abs(e))*(s-Fr);return s+(t+Hb*Math.abs(e)-r)/Bb*n}function $d(i){const t=((i??Fr)-gh)/Ta;return Math.max(1-2.5*Bd,1-Bd*t*t)}const Yd=(i,t)=>Math.hypot(i,t)>.3?Math.atan2(t,Math.abs(i)):0,_r=[0,0,0,0],Ro=[{},{},{},{}],hi={fx:0,fy:0,s:0},G2=[1,1,1,1];function W2(i,t,e){if(!(e>0))return X2(i);const n=C2(i.steer,t.steer,e),s=Ti(i.yaw),r=fh(i.yaw),o=i.vx*s.x+i.vz*s.z,a=-(i.vx*r.x+i.vz*r.z),c=i.yawRate??0,l=Math.hypot(o,a),h=Me(Jb,_l,l),u=P2(n,l),d=Math.atan2(a,Math.max(Math.abs(o),kr)),f=o>0?L2(u,Yd(o,a),d,t.assist,n,t.throttle||0):u;D2(i.ax??0,i.ay??0,f,_r),N2(o,a,c,f,Ro);const g=t.grip??G2,[v,m]=[$d(i.tempF),$d(i.tempR)],p=Ro.map((mt,Mt)=>{var Tt;const Jt=((Tt=i.tans)==null?void 0:Tt[Mt])??0;return Jt+(U2(mt)-Jt)*Math.min(1,Math.max(Math.abs(mt.long),kr)*e/zb)}),_=_r.map((mt,Mt)=>F2(Mt<2?Ub:Qp,mt)*(Mt<2?v:m)*g[Mt]),x=t.handbrake?(i.handbrakeTime??0)+e:0,y=x>0&&x<=Yb+1e-9&&l>_l,A=I2(o,t,y),w=i.omega??o/xn,T=i.rpm??Math.max(vh,xh(w)),L=E2(T,w,A.throttle,e),b=o<-xl||A.reverse<0,M=[2,3].map(mt=>({v:Ro[mt].long,fz:_r[mt],tan:p[mt],mu:_[mt]})),D=$b+(L.coupled&&!A.brake?n0*zr**2:0),O=b?o/xn:V2(w,M,L.torque,A.brake,D,e,!y&&t.brakeAssist!==!1);let[I,z,X,Y,et,U,q]=[0,0,0,0,0,0,0];for(let mt=0;mt<4;mt++){const Mt=Ro[mt],Jt=mt<2||b?0:p0(O,Mt.long);f0(_r[mt],p[mt],Jt,_[mt],hi);const[Tt,Yt]=mt<2?[Math.cos(f),Math.sin(f)]:[1,0],C=hi.fx*Tt-hi.fy*Yt,S=hi.fx*Yt+hi.fy*Tt;[I,z,X]=[I+C,z+S,X+Ml[mt][0]*S-Ml[mt][1]*C];const H=Math.abs(hi.fx*(mt<2?0:O*xn-Mt.long))+Math.abs(hi.fy*Mt.lat);mt<2?Y+=H:[et,U,q]=[et+H,Math.max(U,hi.s),q+Jt/2]}const $=s0*(1-Zb*(t.draft||0))*o*Math.abs(o);let Q=o+(I-$+A.reverse)/In*e;const dt=e0*Vr*e;Q=Math.abs(Q)<=dt&&!A.throttle?0:Q-Math.sign(Q)*dt;const _t=Q*Math.tan(u)/cr,F=ra*_t+(a-ra*_t)*Math.exp(-15*e),K=Ln(F,a+z/In*e,h),at=Ln(_t,c+X/Lb*e,h),nt=s.x*Q-r.x*K,bt=s.z*Q-r.z*K,Et=(Q-o)/e,Lt=Ln(Q*_t,z/In,h),k=h*Math.min(1,Math.max(0,U-1));return{x:i.x+nt*e,z:i.z+bt*e,yaw:i.yaw+at*e,vx:nt,vz:bt,steer:n,yawRate:at,omega:b?Q/xn:O,rpm:L.rpm,tans:p,ax:Ce(i.ax??0,Et,Ib,e),ay:Ce(i.ay??0,Lt,Db,e),tempF:qd(i.tempF,Y,l,e),tempR:qd(i.tempR,et,l,e),handbrakeTime:x,forwardSpeed:Q,slip:Math.abs(K),sliding:k>.05||y,longAccel:Et,latAccel:Lt,slipAngle:Yd(Q,K),frontSlip:h*Math.atan((p[0]+p[1])/2),rearSlip:h*Math.atan((p[2]+p[3])/2),drift:k,wheelSpin:b?0:q,clutch:L.slipping,loads:_r.slice()}}function X2(i){return{...i,yawRate:i.yawRate??0,forwardSpeed:i.forwardSpeed??0,slip:i.slip??0,sliding:!1,longAccel:0,latAccel:0,slipAngle:i.slipAngle??0,frontSlip:0,rearSlip:0,drift:0,wheelSpin:0,rpm:i.rpm??vh,tempF:i.tempF??Fr,tempR:i.tempR??Fr}}function q2(i,t,e,n){const s=Math.max(1,Math.ceil(e/Pb-1e-6)),r=e/s;let o=0,a=null,c=i;for(let l=0;l<s;l++){const h=W2(c,t,r),u=n.resolve(h,M2,y2,b2);u>o&&(o=u,a={...n.contact}),c=h}return{state:c,impact:o,contact:a}}const Qi=1.05,Aa=1,ts=1.12,$2={radius:.14,width:.13},m0={radius:.15,width:.21},oa={body:16761370,accent:1776672,frame:8225676,rim:14278115,hub:9409950,tyre:1315860,engine:10791344,exhaust:13225168,shroud:12854830,tank:14209728,seat:2303274,suit:1914199,glove:1381914,boot:1316120,collar:2105894,helmet:16053492,helmetStripe:15087942,trim:1447706,visor:724762},Y2="07",jd=.45,j2=1.8,Kd={speed:18,share:.35},K2=14,Z2=.012,J2=.01,Q2=.07,Pc={perAccel:.01,max:.12,rate:5},Ke={wheelCentre:[0,.45,-.15],wheelTilt:.76,wheelRadius:.15,shoulder:[.177,.551,.413],upperArm:.31,forearm:.35,elbowOut:[1,-.8,.3],headPivot:[0,.66,.372]},ui={ridge:.32,tyreHalfWidth:.09,lift:.022,hop:.012,roll:.035,attack:40,release:14},tS=new R(0,1,0),W=(i,t,e)=>new R(i,t,e),ae=(i,t)=>new pt(i,t);function re(i,t,e,n,s=6,r=e,o=!0){const a=W().subVectors(t,i),c=new pt(new Pi(r,e,a.length(),s,1,o),n);return c.position.copy(i).addScaledVector(a,.5),c.quaternion.setFromUnitVectors(tS,a.normalize()),c}function yl(i,t,e,n=12,s=6){const r=new ba(i,!1,"catmullrom",.2);return new pt(new Ea(r,n,t,s,!1),e)}function lr(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new de;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Zd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][d]);const g=Zd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Zd(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new ce(o,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const v=h.getComponent(d,g);a.setComponent(d+u,g,v)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function eS(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let o=0;const a=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let _=0,x=a.length;_<x;_++){const y=a[_],A=i.attributes[y];c[y]=new ce(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized);const w=i.morphAttributes[y];w&&(l[y]=new ce(new w.array.constructor(w.count*w.itemSize),w.itemSize,w.normalized))}const f=t*.5,g=Math.log10(1/t),v=Math.pow(10,g),m=f*v;for(let _=0;_<r;_++){const x=n?n.getX(_):_;let y="";for(let A=0,w=a.length;A<w;A++){const T=a[A],L=i.getAttribute(T),b=L.itemSize;for(let M=0;M<b;M++)y+=`${~~(L[u[M]](x)*v+m)},`}if(y in e)h.push(e[y]);else{for(let A=0,w=a.length;A<w;A++){const T=a[A],L=i.getAttribute(T),b=i.morphAttributes[T],M=L.itemSize,D=c[T],O=l[T];for(let I=0;I<M;I++){const z=u[I],X=d[I];if(D[X](o,L[z](x)),b)for(let Y=0,et=b.length;Y<et;Y++)O[Y][X](o,b[Y][z](x))}}e[y]=o,h.push(o),o++}}const p=i.clone();for(const _ in i.attributes){const x=c[_];if(p.setAttribute(_,new ce(x.array.slice(0,o*x.itemSize),x.itemSize,x.normalized)),_ in l)for(let y=0;y<l[_].length;y++){const A=l[_][y];p.morphAttributes[_][y]=new ce(A.array.slice(0,o*A.itemSize),A.itemSize,A.normalized)}}return p.setIndex(h),p}const nS=["position","normal","uv"];function iS(i,t,e){let n=i.geometry.clone();for(const r of Object.keys(n.attributes))nS.includes(r)||n.deleteAttribute(r);n.attributes.uv||n.setAttribute("uv",new Gt(new Float32Array(n.attributes.position.count*2),2)),n.index||(n=eS(n));const s=n.attributes.position.count;if(n.applyMatrix4(new Pt().multiplyMatrices(t,i.matrixWorld)),e){const r=new Float32Array(s*3);for(let o=0;o<s;o++)e.toArray(r,o*3);n.setAttribute("color",new Gt(r,3))}return n.clearGroups(),n}const Lc=new WeakMap;function sS(i){return Lc.has(i)||Lc.set(i,Object.assign(i.clone(),{vertexColors:!0,color:new lt(16777215)})),Lc.get(i)}function js(i,{keep:t=[],alias:e=new Map}={}){i.updateMatrixWorld(!0);const n=i.matrixWorld.clone().invert(),s=new Map,r=o=>{for(const a of[...o.children])if(!t.includes(a))if(a.isMesh){const c=e.get(a.material)??a.material;s.has(c)||s.set(c,[]),s.get(c).push(a),a.removeFromParent()}else r(a)};r(i);for(const[o,a]of s){const c=new pt(...g0(a,o,n));c.userData.small=a.every(l=>l.userData.small),i.add(c)}return i}function g0(i,t,e=new Pt,n=!1){const s=n||i.some(o=>o.material!==t),r=lr(i.map(o=>iS(o,e,s&&o.material.color)));for(const o of i)o.geometry.dispose();return[r,s?sS(t):t]}const _h=5242111;function rS(i){const t=new Xt,e=[];for(const n of[!0,!1]){const s=(n?Aa:ts)/2+.02;for(const r of[-1,1]){const o=new Xt;o.position.set(r*s,.11,(n?-1:1)*(Qi/2));const a=new Xt,c=n?.15:.17,l=new pt(new Pi(c*.8,c,.1,22),i.frame),h=new pt(new Pn(c*.82,20,8,0,Math.PI*2,0,Math.PI/2).scale(1,.5,1.3),i.body);h.position.y=.05;const u=new pt(new Ys(c*.78,.018,8,28).rotateX(Math.PI/2),i.glow);u.position.y=-.052;const d=new pt(new or(c*.6,22).rotateX(Math.PI/2),i.glow);d.position.y=-.051,a.add(l,h,u,d),js(a,{alias:i.alias}),o.add(a),t.add(o),e.push({steer:o,spin:a,radius:c,front:n,side:r,hover:!0})}}return{group:t,wheels:e}}function oS(i){const t=[];t.push(re(W(.3,.27,.28),W(.3,.27,.62),.095,i.frame,18,.095,!1));for(const n of[.34,.45,.56])t.push(re(W(.3,.27,n),W(.3,.27,n+.025),.1,i.glow,18,.1,!1));for(const n of[-.24,.24]){t.push(re(W(n,.26,.6),W(n,.26,.86),.075,i.frame,16,.06,!1));const s=new pt(new or(.056,18),i.glow);s.position.set(n,.26,.862),t.push(s)}return t.push(re(W(-.24,.26,.66),W(.24,.26,.66),.03,i.frame,8)),t}const Jd={engine:["frame","engine"],exhaust:["frame","exhaust"],shroud:["accent","shroud"],tank:["accent","tank"],seat:["accent","seat"],glove:["suit","glove"],panel:["suit","body"],boot:["suit","boot"],collar:["suit","collar"],stripe:["helmet","helmetStripe"],trim:["helmet","trim"],hub:["rim","hub"]},aS=["body","accent","frame","rim","tyre","suit","helmet","visor"];function cS(i=oa,t=!1){if(t){const a=new Kt({color:11766015,emissive:3941488,roughness:.45,transparent:!0,opacity:.4,depthWrite:!1});return{...Object.fromEntries([...aS,"glow",...Object.keys(Jd)].map(l=>[l,a])),alias:new Map}}const e={...oa,...i},n=(a,c,l=0)=>new Kt({color:a,roughness:c,metalness:l}),s=(a,c=.3,l={})=>new Ld({color:a,roughness:c,clearcoat:1,clearcoatRoughness:.08,...l}),r=a=>new Ld(a),o={body:s(e.body,.38,{clearcoat:.7,clearcoatRoughness:.14}),accent:n(e.accent,.62,.05),frame:r({color:e.frame,roughness:.38,metalness:.55,clearcoat:.35,clearcoatRoughness:.3}),rim:r({color:e.rim,roughness:.32,metalness:1}),tyre:r({color:e.tyre,roughness:.82,sheen:.4,sheenRoughness:.55,sheenColor:5921370}),suit:r({color:e.suit,roughness:.9,sheen:1,sheenRoughness:.4,sheenColor:new lt(e.suit).lerp(new lt(16777215),.35)}),helmet:s(e.helmet,.2),visor:s(e.visor,.04,{metalness:.75,iridescence:1,iridescenceIOR:1.8,iridescenceThicknessRange:[260,820]}),glow:new Kt({color:0,emissive:_h,emissiveIntensity:2})};o.alias=new Map;for(const[a,[c,l]]of Object.entries(Jd))o[a]=new Kt({color:e[l]}),o.alias.set(o[a],o[c]);return o}function Ve(i,t){const e=Object.assign(document.createElement("canvas"),{width:i,height:t});return{canvas:e,ctx:e.getContext("2d")}}function lS(i,t,e,n,s,r){for(const o of[e-i,e,e+i])for(const a of[n-t,n,n+t])o+s>0&&o-s<i&&a+s>0&&a-s<t&&r(o,a)}function Ks(i,t,e,{count:n,minR:s,maxR:r,alpha:o,seed:a}){const c=ar(a);for(let l=0;l<n;l++){const h=s+c()*(r-s),u=c()>.5,d=o*(.4+c()*.6);lS(t,e,c()*t,c()*e,h,(f,g)=>{const v=i.createRadialGradient(f,g,0,f,g,h);v.addColorStop(0,u?`rgba(255,255,255,${d})`:`rgba(0,0,0,${d})`),v.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=v,i.fillRect(f-h,g-h,h*2,h*2)})}}function aa(i,t,e,{count:n,color:s,minR:r,maxR:o,seed:a}){const c=ar(a);i.fillStyle=s;for(let l=0;l<n;l++)i.beginPath(),i.arc(c()*t,c()*e,r+c()*(o-r),0,Math.PI*2),i.fill()}function Wr(i,t,e,n,s){const r=i.getImageData(0,0,t,e),o=r.data,a=ar(s);for(let c=0;c<o.length;c+=4){const l=(a()-.5)*n;[o[c],o[c+1],o[c+2]]=[o[c]+l,o[c+1]+l,o[c+2]+l]}i.putImageData(r,0,0)}function ni(i,{repeat:t=[1,1],colour:e=!0,anisotropy:n=8}={}){const s=new KM(i);return e&&(s.colorSpace=mn),s.wrapS=s.wrapT=Ei,s.repeat.set(t[0],t[1]),s.anisotropy=n,s}function Mh(i,t,e='700 64px "Chakra Petch"'){var s,r;t();const n=ni(i);return(r=(s=document.fonts)==null?void 0:s.load)==null||r.call(s,e).then(()=>{t(),n.needsUpdate=!0}),n}function Qd(i,t){const{canvas:e,ctx:n}=Ve(256,64);n.fillStyle=i,n.fillRect(0,0,128,64),n.fillStyle=t,n.fillRect(128,0,128,64);const s=n.createLinearGradient(0,0,0,64);return s.addColorStop(0,"rgba(0,0,0,0.35)"),s.addColorStop(.25,"rgba(255,255,255,0.08)"),s.addColorStop(.75,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,0.3)"),n.fillStyle=s,n.fillRect(0,0,256,64),ni(e)}function hS(i,t,e=64){const{canvas:n,ctx:s}=Ve(i*e,t*e);for(let o=0;o<i;o++)for(let a=0;a<t;a++)s.fillStyle=(o+a)%2?"#111214":"#f1f1f1",s.fillRect(o*e,a*e,e,e);const r=ni(n);return r.magFilter=ye,r}function uS(i){const{canvas:t,ctx:e}=Ve(256,256);return e.fillStyle="#f6f6f6",e.beginPath(),e.arc(128,128,120,0,Math.PI*2),e.fill(),e.fillStyle="#111",e.font='700 150px "Chakra Petch", Impact, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(i,128,138),ni(t)}function bl(i="rgba(0,0,0,0.75)"){const{canvas:t,ctx:e}=Ve(128,128),n=e.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,i),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),ni(t,{colour:!1})}function dS(){const{canvas:i,ctx:t}=Ve(256,64);t.fillStyle="#16181c",t.fillRect(0,0,256,64),t.fillStyle="#f2c230";for(let e=-64;e<320;e+=64)t.beginPath(),t.moveTo(e,64),t.lineTo(e+32,64),t.lineTo(e+64,0),t.lineTo(e+32,0),t.fill();return ni(i)}const _e=.058,Ic=.015,Hi=-Qi/2,Wn=Qi/2,fS=i=>i.map(t=>W(-t.x,t.y,t.z));function pS(i){const t=i.frame,e=[],n=(h,u=Ic,d=12)=>e.push(yl(h,u,t,d),yl(fS(h),u,t,d));n([W(.17,_e,-.84),W(.3,_e,-.7),W(.36,_e,Hi),W(.29,_e,-.3),W(.22,_e,-.05),W(.22,_e,.2),W(.31,_e,.42),W(.36,_e,.6),W(.28,_e,.74)],Ic,18);for(const[h,u]of[[Hi,.36],[-.2,.26],[.1,.22],[.66,.34]])e.push(re(W(-u,_e,h),W(u,_e,h),Ic,t));const s=Aa/2;for(const h of[-1,1]){e.push(re(W(h*.36,_e,Hi),W(h*(s-.05),.14,Hi),.013,t));const[u,d]=[W(h*(s-.06),.1,Hi+.02),W(h*(s-.075),.2,Hi-.01)];e.push(re(u,d,.014,t,6,.014,!1)),e.push(re(W(0,.1,-.5),W(h*(s-.08),.12,Hi+.06),.007,t))}n([W(.17,_e,-.84),W(.24,.07,-.93),W(.12,.08,-1),W(0,.08,-1.01)],.012,8),n([W(.3,_e,-.7),W(.3,.09,-.86),W(.14,.1,-.93),W(0,.1,-.94)],.011,8),n([W(.29,_e,-.3),W(.5,.07,-.3),W(.58,.09,-.1),W(.58,.09,.15),W(.5,.07,.3),W(.31,_e,.3)],.011,12),n([W(.28,_e,.74),W(.4,.12,.84),W(.6,.14,.86),W(.66,.16,.8)],.012,8),e.push(re(W(-.4,.12,.84),W(.4,.12,.84),.012,t)),n([W(.15,.44,.485),W(.16,.26,.6),W(.24,_e,.66)],.009,6);const r=new pt(new me(.4,.006,.62),i.frame);r.position.set(0,_e-.012,-.4),e.push(r);const o=m0.radius;e.push(re(W(-ts/2+.06,o,Wn),W(ts/2-.06,o,Wn),.02,t,8));for(const h of[-1,1])e.push(re(W(h*.34,_e,Wn),W(h*.34,o+.03,Wn),.022,t,6,.03,!1));const a=re(W(-.13,o,Wn),W(-.12,o,Wn),.085,i.engine,16,.085,!1),c=new pt(new me(.035,.05,.06),i.shroud);c.position.set(-.125,o+.07,Wn-.03);const l=re(W(.2,o,Wn),W(.206,o,Wn),.075,i.engine,16,.075,!1);return e.push(a,c,l),e}function v0(i){const t=i.index.array;for(let e=0;e<t.length;e+=3)[t[e+1],t[e+2]]=[t[e+2],t[e+1]];i.computeVertexNormals()}function _n(i,{wrap:t=!1,out:e=null}={}){const n=i[0].length,s=i.flatMap(c=>c.flatMap(l=>[l.x,l.y,l.z])),r=[];for(let c=0;c<i.length-1;c++)for(let l=0;l<(t?n:n-1);l++){const[h,u]=[c*n+l,c*n+(l+1)%n];r.push(h,u,h+n,u,u+n,h+n)}const o=new de;if(o.setAttribute("position",new Gt(s,3)),o.setIndex(r),o.computeVertexNormals(),!e)return o;const a=(c,l)=>e(c,l).dot(W().fromBufferAttribute(o.attributes.normal,c*n+l));return i.reduce((c,l,h)=>l.reduce((u,d,f)=>u+a(h,f),c),0)<0&&v0(o),o}function Ra(i,t){const[e,n]=[i.length-1,i[0].length-1],s=[_n(i,{out:(a,c)=>i[a][c].clone().sub(t[a][c])}),_n(t,{out:(a,c)=>t[a][c].clone().sub(i[a][c])})],r=(a,c)=>a.map(l=>l[c]),o=[[i[0],t[0],i[1]],[i[e],t[e],i[e-1]],[r(i,0),r(t,0),r(i,1)],[r(i,n),r(t,n),r(i,n-1)]];for(const[a,c,l]of o)s.push(_n([a,c],{out:(h,u)=>a[u].clone().sub(l[u])}));return lr(s)}function Xr(i,t,e,n,s,r,o=2,a=s){const c=[];for(let l=0;l<r;l++){const h=l/r*Math.PI*2,[u,d]=[Math.cos(h),Math.sin(h)],f=Math.sign(u)*Math.abs(u)**(2/o)*n,g=Math.sign(d)*Math.abs(d)**(2/o)*(d<0?a:s);c.push(i.clone().addScaledVector(t,f).addScaledVector(e,g))}return c}function Un(i,t){const e=i.reduce((r,o)=>r.add(o),W()).divideScalar(i.length),n=new de().setFromPoints([...i,e]),s=i.length;return n.setIndex(i.flatMap((r,o)=>[o,(o+1)%s,s])),n.computeVertexNormals(),W().fromBufferAttribute(n.attributes.normal,s).dot(e.clone().sub(t))<0&&v0(n),n}const ca=i=>Array.from({length:i+1},(t,e)=>e/i);function yh(i,t,e,n){const s=ca(i).map(r=>ca(t).map(o=>e(r,o)));return Ra(s,s.map(r=>r.map(o=>W(o.x,n,o.z))))}const bh=(i,t=.35,e=6)=>t+(1-t)*Math.sqrt(1-Math.abs(i)**e);function mS(){return yh(8,12,(i,t)=>{const e=t*2-1,n=.38+.18*Me(0,.4,i),s=-1.03+.33*i+.06*e*e*(1-i),r=.125+.1*Me(0,1,i),o=.1+.04*i,a=o+(r-o)*(1-Math.abs(e)**2.4);return W(e*n,.05+(a-.05)*bh(e,.4),s)},.05)}const mi={bottom:[.215,-.745],top:[.43,-.5]};function gS(){const i=t=>ca(4).map(e=>ca(6).map(n=>{const s=n*2-1,r=mi.bottom[0]+(mi.top[0]-mi.bottom[0])*e,o=mi.bottom[1]+(mi.top[1]-mi.bottom[1])*e-.035*(1-s*s)-t*.66;return W(s*(.19-.04*e),r+t*.75,o)}));return Ra(i(.012),i(0))}function tf(i){return yh(9,6,(t,e)=>{const n=Math.sin(Math.PI*t)**.35,s=-.36+.7*t+.05*e*(1-2*t),r=(.075+.085*e)*(.45+.55*n)*bh(e,.45);return W(i*(.3+.34*e),.065+r,s)},.065)}function vS(){return yh(12,5,(i,t)=>{const e=i*2-1,n=.72+.24*t-.08*Math.abs(e)**6*t,s=.2+.05*Math.abs(e)**3-.06;return W(e*.7,.06+s*bh(t*2-1,.5),n)},.06)}const ji={centre:[0,.3,.86],tilt:-.18,thickness:.012};function xS(i){const t=new pt(new me(.3,.2,ji.thickness),i.body);return t.position.set(...ji.centre),t.rotation.x=ji.tilt,[ae(mS(),i.body),ae(gS(),i.body),ae(tf(-1),i.body),ae(tf(1),i.body),ae(vS(),i.accent),t]}const ef=[[0,.03,.065,-.004],[-.015,.039,.088,-.01],[-.06,.043,.092,-.01],[-.075,.044,.088,0],[-.14,.046,.066,0],[-.2,.045,.05,0],[-.24,.039,.037,.003],[-.26,.024,.024,.008]],x0=.52;function _S(){const i=W(1,0,0),t=W(0,1,0),e=ef.map(([r,o,a,c])=>{const l=c+(a-c)*.35;return Xr(W(0,l,r),i,t,o,a-l,10,3.6,l-c)}),n=(r,o)=>e[r][o].clone().sub(W(0,e[r][o].y>.03?.02:.04,ef[r][0])),s=W(0,.035,-.1);return[_n(e,{wrap:!0,out:n}),Un(e[0],s),Un(e.at(-1),s)]}const Mr=[[.095,.03],[.07,.14],[.068,.25],[.082,.338],[.223,.398],[.335,.452],[.429,.491],[.519,.524]];function MS(i){const t=e=>Mr.map(([n,s],r)=>{const[o,a]=Mr[Math.max(0,r-1)],[c,l]=Mr[Math.min(Mr.length-1,r+1)],h=W(0,l-a,-(c-o)).normalize(),[u,d]=[.2+.012*(r/Mr.length)+e,.095];return Array.from({length:9},(f,g)=>{const v=(g/8-.5)*Math.PI,m=Math.sign(v)*Math.abs(Math.sin(v))**.55*u;return W(m,n,s).addScaledVector(h,d*(1-Math.cos(v))-e)})});return ae(Ra(t(.012),t(0)),i)}function yS(i){const t=[-.43,-.415,-.17,-.155].map((s,r)=>Xr(W(0,.1,s),W(1,0,0),W(0,1,0),r%3?.062:.05,r%3?.048:.036,12,3.5)),[e,n]=[W(0,.1,-.3),(s,r)=>t[s][r].clone().sub(W(0,.1,t[s][r].z))];return[ae(_n(t,{wrap:!0,out:n}),i.tank),ae(Un(t[0],e),i.tank),ae(Un(t[3],e),i.tank),re(W(0,.14,-.25),W(0,.165,-.25),.02,i.accent,10,.02,!1)]}function bS(i){const t=[];for(const e of[-1,1]){const n=new pt(new me(.055,.12,.012),i.frame);n.position.set(e*.105,.134,-.649),n.rotation.x=x0-Math.PI/2,t.push(n,re(W(e*.105,.1,-.63),W(e*.105,.055,-.58),.008,i.frame))}return t}function SS(i){const t=Ke.wheelRadius,e=new Xt;e.add(new pt(new Ys(t,.012,6,24),i.accent));for(const n of[-.42,Math.PI-.42]){const s=new pt(new Ys(t,.019,6,7,.84),i.accent);s.rotation.z=n,e.add(s)}for(const n of[0,Math.PI,-Math.PI/2])e.add(re(W(0,0,-.03),W(Math.cos(n)*t,Math.sin(n)*t,0),.011,i.frame,4));return e.add(re(W(0,0,-.06),W(0,0,-.025),.038,i.frame,12,.032,!1)),e}function wS(i){const t=W(...Ke.wheelCentre),e=W(0,Math.sin(Ke.wheelTilt),Math.cos(Ke.wheelTilt)),[n,s]=[-.44,-.2].map(a=>t.clone().addScaledVector(e,a)),r=[MS(i.seat),...yS(i),...bS(i),re(t,n,.012,i.frame,8)];for(const a of[-1,1])r.push(re(s,W(a*.12,.058,-.2),.008,i.frame));const o=new Xt;return o.position.copy(t),o.rotation.x=-.76,o.add(SS(i)),{parts:r,steering:o,wheel:o.children[0]}}const sn=.31;function di(i,[t,e,n],s,r=0){const o=[-.5,-.42,.42,.5].map((c,l)=>{const h=l%3?1:.8;return Xr(W(0,c*e,0),W(1,0,0),W(0,0,1),t/2*h,n/2*h,12,4)}),a=new Xt;return a.add(ae(_n(o,{wrap:!0,out:(c,l)=>W(o[c][l].x,0,o[c][l].z)}),s)),a.add(ae(Un(o[0],W()),s),ae(Un(o[3],W()),s)),a.position.copy(i),a.rotation.x=r,a}function ES(i){const t=[[.001,0],[.035,.002],[.055,.035],[.055,.21],[.04,.24],[.013,.245],[.013,.285]],e=new Sa(t.map(([s,r])=>new ot(s,r)),14).rotateX(Math.PI/2),n=ae(e,i);return n.position.set(sn+.01,.37,.55),n}function TS(i){const e=di(W(sn,.31,.41),[.11,.13,.11],i.engine,-.42);for(let n=0;n<4;n++){const s=new pt(new me(.15,.007,.145),i.engine);s.position.y=-.045+n*.026,e.add(s)}return e.add(di(W(0,.083,0),[.1,.04,.1],i.engine)),[di(W(sn,.1,.45),[.2,.012,.28],i.frame),di(W(sn,.185,.45),[.16,.14,.22],i.engine),e,di(W(sn+.095,.255,.45),[.05,.25,.25],i.shroud),re(W(sn+.12,.24,.455),W(sn+.13,.24,.455),.078,i.accent,16,.07,!1),di(W(sn+.1,.39,.5),[.022,.02,.06],i.accent),di(W(sn,.335,.27),[.15,.12,.09],i.accent),yl([W(sn,.35,.44),W(sn+.02,.39,.5),W(sn+.01,.37,.56)],.016,i.exhaust,6,6),ES(i.exhaust),di(W(.21,.16,.5),[.03,.17,.25],i.accent)]}function nf(i,t,e,n){const s=new pt(new or(t,20),i);return s.position.copy(e),s.lookAt(e.clone().add(n)),s.userData.small=!0,s}function AS(i,t=Y2,e=!1){const n=new Xt;n.add(...pS(i),...xS(i),...oe?oS(i):TS(i));const s=wS(i);n.add(...s.parts,s.steering);const r=e?i.body:new Kt({map:uS(t),roughness:.4}),[o,a]=mi.bottom,[c,l]=mi.top,h=new R(0,l-a,-(c-o)).normalize(),u=new R(0,(o+c)/2+.01,(a+l)/2-.035).addScaledVector(h,.014),d=new R(0,-Math.sin(ji.tilt),Math.cos(ji.tilt)),f=new R(...ji.centre).addScaledVector(d,ji.thickness/2+.003);n.add(nf(r,.075,u,h),nf(r,.07,f,d));const g=s.wheel;return g.children.forEach(v=>v.userData.small=!0),js(g,{alias:new Map([...i.alias,[i.frame,i.accent]])}),js(n,{keep:[s.steering],alias:i.alias}),{group:n,steeringWheel:g}}const bn=.072,RS=22;function sf(i,t){return new Sa(i.map(([e,n])=>new ot(e,n)),t).rotateZ(-Math.PI/2)}function CS(i,t){const e=bn+.004,n=[[e,.86],[e+.4*(i-e),1],[i-.03,1.03],[i-.012,.95],[i-.003,.8],[i,.45]];return[...n.map(([s,r])=>[s,-r*t]),...n.reverse().map(([s,r])=>[s,r*t])]}function PS(i,t){const e=i.width/2,n=new Xt;n.add(new pt(sf(CS(i.radius,e),RS),t.tyre));for(const o of[1,-1]){const a=new pt(new or(bn-.004,14),t.tyre);a.rotation.y=o*Math.PI/2,a.position.x=o*.2*e,n.add(a)}const s=[[bn-.007,-.7*e],[bn-.007,.76*e],[bn+.006,.84*e],[bn+.004,.92*e],[bn-.005,.9*e]];n.add(new pt(sf(s,18),t.rim));for(let o=0;o<5;o++){const a=new pt(new me(.012,bn-.02,.017),t.rim),c=o/5*Math.PI*2;a.rotation.x=c,a.position.set(.55*e,Math.cos(c)*(bn/2+.006),Math.sin(c)*(bn/2+.006)),n.add(a)}const r=new pt(new Pi(.02,.026,.7*e,10).rotateZ(-Math.PI/2),t.hub);return r.position.x=.55*e,n.add(r),n}function LS(i){const t=new Xt,e=[];for(const n of[!0,!1]){const s=n?$2:m0,r=(n?Aa:ts)/2;for(const o of[-1,1]){const a=new Xt;a.position.set(o*r,s.radius,(n?-1:1)*(Qi/2));const c=new Xt,l=PS(s,i);o<0&&(l.rotation.y=Math.PI),c.add(l),js(c,{alias:i.alias}),a.add(c),t.add(a),e.push({steer:a,spin:c,radius:s.radius,front:n,side:o})}}return{group:t,wheels:e}}const Sl={tbc:{name:"Kairos Prime",system:"Hilbert-7 · Home World",blurb:"Tangerine meadows under a turquoise sky, bulb-trees and a ringed giant on the horizon.",sky:[3047376,11071718],haze:[10479327,.0032],sun:[16773327,3,[.5,.55,-.4]],ground:[14717244,10112890,15774298],apron:3814480,rock:7035526,flora:[15981744,16732042,5767152],crystal:6290687,accent:3404031,body:{color:15698526,ring:16176816,dir:[-.6,.32,-.75],size:150},stars:0,aurora:0,peaks:60,density:{trees:1,crystals:.4,rocks:.7,floaters:.5}},monaco:{name:"Vespera Coast",system:"Oyrokh Loop · Tidal World",blurb:"A magenta dusk over teal lowlands. Golden fronds sway beside a twisting harbour run.",sky:[4004718,16747115],haze:[14711430,.0036],sun:[16756848,2.4,[-.7,.18,-.5]],ground:[2068358,2772858,4835750],apron:2761792,rock:3878748,flora:[2826816,16763196,16769658],crystal:16735432,accent:16732080,body:{color:12822271,ring:null,dir:[.5,.25,-.8],size:110},stars:.35,aurora:0,peaks:45,density:{trees:1,crystals:.5,rocks:.5,floaters:.3}},monza:{name:"Okkar Drift",system:"Veyl Reach · Desert World",blurb:"Endless rust dunes, wind-carved arches and cyan crystal fields. Flat out, all the way.",sky:[6989784,16767408],haze:[15910810,.0034],sun:[16773852,3.4,[.3,.7,.4]],ground:[13657658,10503208,15239762],apron:4863280,rock:11556922,flora:[7223850,15118432,16773280],crystal:4191743,accent:4253951,body:{color:15917248,ring:13150344,dir:[-.4,.4,-.8],size:90},stars:0,aurora:0,peaks:35,density:{trees:.25,crystals:1,rocks:1,floaters:.2}},silverstone:{name:"Helix Verdant",system:"Aslari Cluster · Lush World",blurb:"Acid-green plains under a lemon sky, violet mushroom forests and floating stone.",sky:[9423162,15921824],haze:[14150540,.0035],sun:[16777184,2.8,[-.45,.6,.5]],ground:[6472768,3112266,10215514],apron:2898488,rock:5200994,flora:[15261951,10112511,13667583],crystal:16751856,accent:11889663,body:{color:5231045,ring:12579040,dir:[.7,.3,-.6],size:120},stars:0,aurora:0,peaks:55,density:{trees:1,crystals:.3,rocks:.6,floaters:1}},spa:{name:"Boreal Kess",system:"Tyrannic Deep · Frozen World",blurb:"Blue ice, pink crystal spires and an aurora over the long climb through the pines.",sky:[858682,8369896],haze:[10274540,.0038],sun:[14084351,1.6,[.6,.22,-.6]],ground:[14478591,9416920,16777215],apron:2634312,rock:7308968,flora:[2043984,3042191,9435135],crystal:16743128,accent:8060906,body:{color:10535167,ring:14740735,dir:[-.5,.35,-.8],size:100},stars:.7,aurora:1,peaks:80,density:{trees:.8,crystals:1,rocks:.6,floaters:0},night:!0},interlagos:{name:"Emberfall",system:"Karrow Rift · Volcanic World",blurb:"Black glass plains split by glowing seams under a blood-red sky. Mind the heat.",sky:[2753800,14173482],haze:[8004632,.0042],sun:[16752736,2,[.2,.35,-.9]],ground:[3810340,5909030,4857888],apron:1971736,rock:3810852,flora:[2101264,4199438,16738842],crystal:16734740,accent:16742938,body:{color:3805200,ring:16751194,dir:[-.6,.3,-.7],size:170},stars:.2,aurora:0,peaks:90,density:{trees:.2,crystals:1,rocks:1,floaters:.3},night:!0},montreal:{name:"Lumen Reach",system:"Ooxin Veil · Bioluminescent World",blurb:"Eternal night. The forest glows cyan and rose, and the island loop is lit by life.",sky:[197914,2042474],haze:[1712724,.0045],sun:[10466559,1.1,[-.3,.6,.6]],ground:[2760533,1315386,3877496],apron:1184294,rock:2367306,flora:[1709624,16732120,5242111],crystal:5242111,accent:5242111,body:{color:6967295,ring:10455807,dir:[.4,.45,-.8],size:140},stars:1,aurora:.4,peaks:50,density:{trees:1,crystals:.6,rocks:.4,floaters:.4},night:!0},austin:{name:"Solani Dunes",system:"Eissen Arm · Golden World",blurb:"Honey-gold hills and tall teal spires. A big climb, a bigger view.",sky:[3837887,16770976],haze:[16243082,.0033],sun:[16774360,3.2,[.55,.5,.35]],ground:[14263612,11038762,15779936],apron:3813928,rock:9071178,flora:[2779754,4182208,10551280],crystal:16770138,accent:16762938,body:{color:16748394,ring:null,dir:[-.7,.28,-.6],size:80},stars:0,aurora:0,peaks:70,density:{trees:.7,crystals:.5,rocks:.8,floaters:.2}},spielberg:{name:"Azure Talos",system:"Gugesti Rim · Highland World",blurb:"Blue grass, white cliffs and islands of rock drifting over a mountain bowl.",sky:[1728472,12576511],haze:[12115199,.003],sun:[16777215,3.2,[-.4,.65,-.5]],ground:[3837888,2775690,6996200],apron:2764864,rock:14211304,flora:[15790335,16777215,11466495],crystal:9105663,accent:5945599,body:{color:15787728,ring:13682872,dir:[.6,.35,-.7],size:130},stars:0,aurora:0,peaks:110,density:{trees:.6,crystals:.3,rocks:1,floaters:1}},singapore:{name:"Neon Void",system:"Galactic Core · Anomaly",blurb:"A dead world at the galaxy’s heart: black glass, a violet nebula and a sky full of light.",sky:[328207,3805018],haze:[1837616,.0042],sun:[16765183,1.2,[.3,.5,-.8]],ground:[789014,1708080,2233920],apron:525838,rock:1380388,flora:[1051162,16727988,8015871],crystal:16727988,accent:16727988,body:{color:16743128,ring:16761072,dir:[-.3,.5,-.8],size:190},stars:1,aurora:0,nebula:1,peaks:60,density:{trees:.3,crystals:1,rocks:.5,floaters:.8},night:!0}},IS=i=>Sl[i]??Sl.tbc,DS={low:.35,medium:.6,high:1,ultra:1.3},Zs={reach:320,cell:2,flat:5,rise:40,hills:7,segments:220,trees:420,crystals:160,rocks:260,floaters:26,glowBulbs:500,skyRadius:850,hover:.26},la=[[.077,.23,.13,.08,.08],[.13,.245,.17,.115,.105],[.243,.29,.155,.105,.1],[.356,.342,.17,.12,.104],[.45,.381,.186,.124,.104],[.521,.409,.2,.11,.098],[.573,.429,.178,.088,.088],[.613,.437,.105,.068,.072],[.638,.432,.058,.054,.05],[.68,.422,.05,.048,.044]],_0=W(1,0,0),M0=W(0,0,1);function NS(i){const t=la.map(([r,o,a,c,l])=>Xr(W(0,r,o),_0,M0,a,l,20,2.6,c)),e=W(0,.35,.3),s=_n(t,{wrap:!0,out:(r,o)=>t[r][o].clone().sub(W(0,t[r][o].y,la[r][1]))});return[ae(s,i),ae(Un(t[0],e),i),ae(Un(t.at(-1),e),i)]}function US(i){const t=la.slice(1,6).map(([e,n,s,r,o])=>Xr(W(0,e,n),_0,M0,s*1.012,o*1.012,48,2.6,r*1.012));return[-4,28].map(e=>{const n=t.map(r=>[-2,-1,0,1,2].map(o=>r[(e+o+48)%48]));return ae(_n(n,{out:(r,o)=>n[r][o].clone().sub(W(0,n[r][o].y,la[r+1][1]))}),i)})}function rf(i,t){const e=W(i*.085,.13,.19),n=W(i*.125,.27,-.15),s=W(i*.108,.15,-.512),r=new pt(new Pn(.056,8,6),t.suit);r.position.copy(n);const o=_S().map(a=>{const c=new pt(a,t.boot);return c.position.set(i*.105,.055,-.5),c.rotation.x=x0,c});return[re(e,n,.074,t.suit,8,.058),r,re(n,s,.052,t.suit,8,.04),...o]}function OS(i){const t=new pt(new Ys(.08,.018,7,24),i.collar);return t.scale.set(1,.86,1),t.rotation.x=Math.PI/2-.14,t.position.set(0,.603,.412),[...NS(i.suit),...US(i.panel),...rf(-1,i),...rf(1,i),t]}const of=.132,[kS,y0]=[.138,.185],[FS,zS]=[.154,.171],[BS,HS]=[2.3,3.4],VS=.14,GS=.05,[WS,XS]=[-.56,.2],qS=(i,t)=>W(Math.sin(i)*Math.cos(t),Math.sin(t),-Math.cos(i)*Math.cos(t)),af=(i,t)=>{const e=i.y>0?BS:HS;return(Math.hypot(i.x/t,i.z/(i.z<0?FS:zS))**e+Math.abs(i.y/(i.y>0?kS:y0))**e)**(-1/e)};function wl(i){let t=af(i,of);i.y<0&&(t=af(i,of*(1-VS*Me(0,y0,-i.y*t))));const e=Me(.3,.95,-i.z)*Math.exp(-(((i.y-WS)/XS)**2));return t+GS*e}function Sh(i,t,e=0){const n=qS(i,t);return n.multiplyScalar(wl(n)+e)}function ha(i,t){let[e,n]=[-Math.PI/2,Math.PI/2];for(let s=0;s<24;s++){const r=(e+n)/2;Sh(i,r).y<t?e=r:n=r}return(e+n)/2}const Ns=(i,t,e=0)=>Sh(i,ha(i,t),e);function El(i){const t=Math.abs(Math.atan2(Math.sin(i),Math.cos(i)))/Math.PI;return-.15-.003*Me(.5,1,t)+.014*Math.sin(i)**2}const Dc=1.52,Xo=i=>.058-.026*Math.abs(i)**3,Nc=i=>-.05+.038*i*i,Uc=28,Oc=11,bi=(i,t,e)=>Array.from({length:i+1},(n,s)=>t+(e-t)*s/i);function $S(i){const t=bi(Uc-1,-Math.PI,Math.PI-2*Math.PI/Uc),e=t.map(l=>ha(l,El(l))),n=(l,h)=>Math.PI/2-l*(Math.PI/2-e[h]),s=bi(Oc-1,1/Oc,1).map(l=>t.map((h,u)=>Sh(h,n(l,u)))),r=_n(s,{wrap:!0,out:(l,h)=>s[l][h]}),o=s[Oc-1].map(l=>l.clone().multiply(W(.9,1,.9)).add(W(0,-.004,0))),a=new Ea(new ba(o,!0),Uc,.016,4,!0),c=Un(o,W());return[ae(r,i.helmet),ae(Un(s[0],W()),i.helmet),ae(a,i.trim),ae(c,i.trim)]}function Tl(i,t,e,n,s=8e-4){const r=o=>t.map(a=>i.map(c=>e(c,a,o)));return Ra(r(n),r(s))}function YS(i){const t=bi(14,-1,1),e=(a,c)=>Nc(a)+(Xo(a)-Nc(a))*c,n=(a,c,l)=>Ns(a*Dc,e(a,c),l*(.625+.375*c)),s=[ae(Tl(t,bi(3,0,1),n,.008),i.visor)];s[0].userData.small=!0;for(const a of[-1,1]){const[c,l]=[a*(Dc+.04),(Xo(1)+Nc(1))/2];s.push(re(Ns(c,l),Ns(c,l,.012),.021,i.trim,10,.017,!1))}const r=(a,c)=>c<.01?.005*(1-a*a):0,o=(a,c,l)=>Ns(a*.55,Xo(a*.55/Dc)+c-r(a,c),c<.01?l:l*.1);return s.push(ae(Tl(bi(8,-1,1),[.003,.02],o,.013),i.helmet)),s}function jS(i){const t=ha(0,Xo(0)+.045),e=Math.PI-ha(Math.PI,El(Math.PI)+.006),n=bi(18,t,e).map(o=>{const a=.02+.016*(o/Math.PI);return[-a,0,a].map(c=>{const l=W(c/wl(W(0,Math.sin(o),-Math.cos(o))),Math.sin(o),-Math.cos(o)).normalize();return l.multiplyScalar(wl(l)+.0015)})}),s=bi(12,1.75,2*Math.PI-1.75).map(o=>[.014,.036].map(a=>Ns(o,El(o)+a,.0015))),r=s[0].map((o,a)=>s.map(c=>c[a]));return[ae(_n(n,{out:(o,a)=>n[o][a]}),i.stripe),ae(_n(r,{out:(o,a)=>r[o][a]}),i.stripe)]}function KS(i){const t=(n,s,r,o)=>Tl(bi(4,n-r,n+r),[s-o,s+o],Ns,.005),e=[t(-.42,.118,.07,.008),t(.42,.118,.07,.008)];for(const n of[-.084,-.1])e.push(t(0,n,.13,.0045));return e.map(n=>ae(n,i.trim))}function ZS(i){const t=new Xt;return t.add(...$S(i),...YS(i),...jS(i),...KS(i)),t}const{upperArm:gi,forearm:xi,wheelRadius:cf}=Ke,JS=.07,kc=(i,[t,e,n],s,r)=>new pt(new Pn(i,8,6).scale(t,e,n).translate(0,s,0),r);function QS(i,t){const e=t?[re(W(),W(0,xi-.1,0),.043,i.suit,8,.036),re(W(0,xi-.115,0),W(0,xi-.045,0),.041,i.glove,8,.047,!1),kc(1,[.047,.058,.038],xi-.008,i.glove)]:[re(W(),W(0,gi,0),.054,i.suit,8,.044),kc(.052,[1,1,1],0,i.suit),kc(.046,[1,1,1],gi,i.suit)];return new Xt().add(...e).updateMatrixWorld(!0),g0(e,i.suit,void 0,!0)}function tw(i){const t=[0,1,2,3].map(()=>new Fp),e=t.map((a,c)=>QS(i,c%2===1)),n=lr(e.map(([a])=>a)),s=e.map(([a])=>a.attributes.position.count),r=a=>s.flatMap((c,l)=>Array(c).fill(a(l)).flat());n.setAttribute("skinIndex",new th(r(a=>[a,0,0,0]),4)),n.setAttribute("skinWeight",new Gt(r(()=>[1,0,0,0]),4));const o=new XM(n,e[0][1]);return o.add(...t),o.bind(new oh(t,t.map(()=>new Pt)),new Pt),o.boundingSphere=new ti(W(0,.5,.12),.5),{mesh:o,update:ew(t)}}function ew(i){const t=new Pt().compose(W(...Ke.wheelCentre),new On().setFromEuler(new ln(-.76,0,0)),W(1,1,1)),[e,n,s,r,o,a,c,l,h]=Array.from({length:9},()=>W()),u=new Pt,d=(f,g,v,m)=>{c.subVectors(v,g).normalize(),a.copy(m).addScaledVector(c,-m.dot(c)).normalize(),l.crossVectors(a,c),f.position.copy(g),f.quaternion.setFromRotationMatrix(u.makeBasis(a,c,l))};return f=>{for(const g of[-1,1]){const[v,m]=[Math.cos(f),Math.sin(f)];n.set(g*cf*v,g*cf*m,0).applyMatrix4(t),h.set(-m,v,0).transformDirection(t),e.set(g*Ke.shoulder[0],Ke.shoulder[1],Ke.shoulder[2]),r.subVectors(n,e);let p=r.length();e.addScaledVector(r,Math.min(JS,Math.max(0,p-(gi+xi)*.98))/p),p=Math.min(r.subVectors(n,e).length(),(gi+xi)*.999),r.normalize(),o.set(g*Ke.elbowOut[0],Ke.elbowOut[1],Ke.elbowOut[2]),o.addScaledVector(r,-o.dot(r)).normalize();const _=(gi*gi-xi*xi+p*p)/(2*p);s.copy(e).addScaledVector(r,_).addScaledVector(o,Math.sqrt(Math.max(0,gi*gi-_*_)));const[x,y]=g<0?[i[0],i[1]]:[i[2],i[3]];d(x,e,s,o),d(y,s,n,h)}}}function nw(i){const t=new Xt;t.add(...OS(i));const e=new Xt;e.position.set(...Ke.headPivot);const n=ZS(i);n.position.set(0,.119,-.022),n.scale.setScalar(.95),n.rotation.x=-.06,e.add(n),t.add(e),js(e,{alias:i.alias});const s=tw(i);return s.update(0),t.add(s.mesh),js(t,{keep:[e,s.mesh],alias:i.alias}),{group:t,head:e,arms:s}}const iw=3,sw=4;function rw(i){const t=new Zn({colorWrite:!1,transparent:!0,depthWrite:!0}),e=[];i.traverse(n=>n.isMesh&&e.push(n));for(const n of e){const s=n.clone(!1);s.material=t,s.renderOrder=iw,n.renderOrder=sw,n.parent.add(s)}}class Al{constructor({livery:t,number:e,ghost:n=!1}={}){const s=cS(t,n);this.root=new Xt,this.body=new Xt,this.root.add(this.body);const r=AS(s,e,n);this.steeringWheel=r.steeringWheel,this.driver=nw(s),this.body.add(r.group,this.driver.group);const{group:o,wheels:a}=oe?rS(s):LS(s);if(this.wheels=a,this.mats=s,this.hover=oe?Zs.hover:0,this._bob=Math.random()*10,this.root.add(o),this.root.traverse(l=>{l.isMesh&&(l.receiveShadow=!n,l.castShadow=!n&&!l.userData.small)}),[this._roll,this._pitch,this._lean,this._steer]=[0,0,0,0],n){rw(this.root);return}const c=new pt(new Pe(1.9,2.6).rotateX(-Math.PI/2),new Zn({map:bl(),transparent:!0,depthWrite:!1,toneMapped:!1}));if(c.position.y=.03-this.hover,c.renderOrder=2,this.root.add(c),oe){const l=new pt(new Pe(1.8,2.3).rotateX(-Math.PI/2),new Zn({map:bl("rgba(255,255,255,1)"),color:_h,transparent:!0,opacity:.22,blending:Vs,depthWrite:!1}));l.position.y=.04-this.hover,l.renderOrder=3,this.pool=l,this.root.add(l)}}setFirstPerson(t){this.driver.head.visible=!t}update(t,e,n,s=!1){this._bob+=n;const r=this.hover?this.hover+Math.sin(this._bob*2.6)*.018+Math.sin(this._bob*4.1)*.007:0;this.root.position.set(t.x,r,t.z),this.root.rotation.y=t.yaw,this._steer=s?t.steer:Ce(this._steer,t.steer,K2,n)||0,this.hover&&(this.mats.glow.emissiveIntensity=1.6+3.2*ft(e.throttle||0,0,1));for(const u of this.wheels){if(u.hover){u.front&&(u.steer.rotation.y=this._steer*jd*.6);continue}const d=!u.front&&Number.isFinite(e.wheelSpeed)?e.wheelSpeed:e.forwardSpeed/u.radius;u.spin.rotation.x-=d*n,u.front&&(u.steer.rotation.y=this._steer*jd)}const o=1-Kd.share*Me(0,Kd.speed,Math.abs(e.forwardSpeed));this.steeringWheel.rotation.z=this._steer*j2*o,this.driver.arms.update(this.steeringWheel.rotation.z);const a=Q2,c=ft(-e.latAccel*Z2,-a,a)||0,l=ft(e.longAccel*J2,-a,a)||0;this._roll=s?c:Ce(this._roll,c,7,n)||0,this._pitch=s?l:Ce(this._pitch,l,7,n)||0,this.body.rotation.set(this._pitch,0,this._roll);const h=ft(e.latAccel*Pc.perAccel,-.12,Pc.max)||0;this._lean=s?h:Ce(this._lean,h,Pc.rate,n)||0,this.driver.head.rotation.z=this._lean}}const ow={throttle:0,brake:0,steer:0,handbrake:!1};class wh{constructor(t,e={}){this.collider=t,this.model=new Al(e),this.draft=0,this.surface=null,this.grip=[1,1,1,1],this._surfaceIndex=-1,this.state={x:0,z:0,yaw:0,vx:0,vz:0,steer:0,yawRate:0},this.telemetry={},this.contact={x:0,z:0,nx:0,nz:0},this._resetTelemetry()}get object3d(){return this.model.root}_resetTelemetry(){Object.assign(this.telemetry,{speed:0,forwardSpeed:0,slip:0,sliding:!1,longAccel:0,latAccel:0,yawRate:0,slipAngle:0,drift:0,impact:0,throttle:0,brake:0,steer:0,rpm:1700,clutch:1,wheelSpeed:0,wheelSpin:0,tyreTemp:[22,22],loads:[0,0,0,0]})}setLook(t={}){var n,s;const e=this.model.root;return this.model=new Al(t),(n=e.parent)==null||n.add(this.model.root),(s=e.parent)==null||s.remove(e),this.model.update(this.state,this.telemetry,0,!0),e}place(t,e,n){this.state={x:t,z:e,yaw:n,vx:0,vz:0,steer:0,yawRate:0},this.draft=0,this._surfaceIndex=-1,this._resetTelemetry(),this.model.update(this.state,this.telemetry,0,!0)}update(t=ow,e){var c;if(this.surface){const{x:l,z:h}=this.state;this._surfaceIndex=this.surface.path.nearest(l,h,this._surfaceIndex),this.surface.wheels(this.state,this._surfaceIndex,this.grip)}const n={...t,draft:this.draft,grip:this.grip},{state:s,impact:r,contact:o}=q2(this.state,n,e,this.collider);(c=this.surface)==null||c.addDistance(Math.hypot(s.vx,s.vz)*e),o&&Object.assign(this.contact,o),this.state=s;const a=s;Object.assign(this.telemetry,{speed:Math.hypot(a.vx,a.vz),forwardSpeed:a.forwardSpeed,slip:a.slip,sliding:a.sliding,longAccel:a.longAccel,latAccel:a.latAccel,yawRate:a.yawRate,slipAngle:a.slipAngle,drift:a.drift,rpm:a.rpm,clutch:a.clutch,wheelSpeed:a.omega,wheelSpin:a.wheelSpin,tyreTemp:[a.tempF,a.tempR],loads:a.loads,impact:r,throttle:t.throttle,brake:t.brake,steer:a.steer}),this.model.update(a,this.telemetry,e)}}class aw{constructor(){this.model=new Al({ghost:!0}),this.frames=null,this.object3d.visible=!1,this._i=0,this._state={x:0,z:0,yaw:0,steer:0},this._tel={forwardSpeed:0,latAccel:0,longAccel:0}}get object3d(){return this.model.root}set(t){this.frames=t&&t.length>=8?t:null,this._i=0}update(t,e,n){const s=this.frames,r=s?s.length/4:0,o=e&&r>1&&t<=s[(r-1)*4];if(this.object3d.visible=o,!o)return void(this._i=0);for(t<s[this._i*4]&&(this._i=0);this._i<r-2&&s[(this._i+1)*4]<=t;)this._i++;const a=this._i*4,c=Math.min(1,Math.max(0,(t-s[a])/(s[a+4]-s[a]||1))),l=this._state,[h,u]=[l.x,l.z];l.x=s[a+1]+(s[a+5]-s[a+1])*c,l.z=s[a+2]+(s[a+6]-s[a+2])*c,l.yaw=s[a+3]+Jn(s[a+7]-s[a+3])*c,this._tel.forwardSpeed=n>0?Math.min(25,Math.hypot(l.x-h,l.z-u)/n):0,this.model.update(l,this._tel,n)}}const cw=`
  attribute float aSize;
  attribute float aAlpha;
  uniform float uScale;
  varying float vAlpha;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = aSize * uScale / max(-mv.z, 0.1);
    vAlpha = aAlpha;
  }`,lw=`
  uniform vec3 uColor;
  varying float vAlpha;
  void main() {
    vec2 d = gl_PointCoord - 0.5;
    float a = vAlpha * (1.0 - smoothstep(0.0, 0.25, dot(d, d)));
    if (a < 0.004) discard;
    gl_FragColor = vec4(uColor, a);
  }`;class Co{constructor({max:t,color:e,additive:n=!1,gravity:s=0,drag:r=0}){this.max=t,this.gravity=s,this.drag=r,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.age=new Float32Array(t).fill(1),this.life=new Float32Array(t).fill(1),this.size=new Float32Array(t*2),this.alpha0=new Float32Array(t),this.aSize=new Float32Array(t),this.aAlpha=new Float32Array(t),this.cursor=0;const o=new de;o.setAttribute("position",new ce(this.pos,3)),o.setAttribute("aSize",new ce(this.aSize,1)),o.setAttribute("aAlpha",new ce(this.aAlpha,1)),this.material=new te({uniforms:{uColor:{value:e},uScale:{value:600}},vertexShader:cw,fragmentShader:lw,transparent:!0,depthWrite:!1,blending:n?Vs:Zi}),this.points=new jM(o,this.material),this.points.frustumCulled=!1}emit(t,e,n,s,r,o,a,c,l,h){const u=this.cursor;this.cursor=(u+1)%this.max,this.pos.set([t,e,n],u*3),this.vel.set([s,r,o],u*3),this.size.set([c,l],u*2),this.age[u]=0,this.life[u]=a,this.alpha0[u]=h}setScale(t,e){this.material.uniforms.uScale.value=t/(2*Math.tan(e*Math.PI/360))}update(t){const e=Math.exp(-this.drag*t);for(let s=0;s<this.max;s++){if(this.age[s]>=this.life[s]){this.aAlpha[s]=0;continue}this.age[s]+=t;const r=Math.min(1,this.age[s]/this.life[s]),o=s*3;this.vel[o+1]+=this.gravity*t;for(let a=0;a<3;a++)this.vel[o+a]*=e,this.pos[o+a]+=this.vel[o+a]*t;this.aSize[s]=this.size[s*2]+(this.size[s*2+1]-this.size[s*2])*r,this.aAlpha[s]=this.alpha0[s]*(1-r)*Math.min(1,r*8)}const n=this.points.geometry.attributes;n.position.needsUpdate=n.aSize.needsUpdate=n.aAlpha.needsUpdate=!0}}const hw=.2,Po=.028;class uw{constructor(t=2400,e=.2){this.max=t,this.halfWidth=e/2,this.pos=new Float32Array(t*12),this.col=new Float32Array(t*16);const n=new Uint32Array(t*6);for(let r=0;r<t;r++)n.set([r*4,r*4+1,r*4+2,r*4+1,r*4+3,r*4+2],r*6);const s=new de;s.setAttribute("position",new ce(this.pos,3).setUsage(Lu)),s.setAttribute("color",new ce(this.col,4).setUsage(Lu)),s.setIndex(new ce(n,1)),this.mesh=new pt(s,new Zn({vertexColors:!0,transparent:!0,depthWrite:!1,side:an,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,this.cursor=0,this.last=new Map}add(t,e,n,s){const r=this.last.get(t);if(s<=0)return void this.last.delete(t);if(!r)return void this.last.set(t,{x:e,z:n,s});const o=e-r.x,a=n-r.z,c=Math.hypot(o,a);if(c<hw)return;if(c>2.5)return void this.last.set(t,{x:e,z:n,s});const l=-a/c*this.halfWidth,h=o/c*this.halfWidth,u=this.cursor;this.cursor=(u+1)%this.max,this.pos.set([r.x+l,Po,r.z+h,r.x-l,Po,r.z-h,e+l,Po,n+h,e-l,Po,n-h],u*12);const d=.5*r.s,f=.5*s;this.col.set([.02,.02,.02,d,.02,.02,.02,d,.02,.02,.02,f,.02,.02,.02,f],u*16);const{position:g,color:v}=this.mesh.geometry.attributes;g.addUpdateRange(u*12,12),v.addUpdateRange(u*16,16),g.needsUpdate=v.needsUpdate=!0,this.last.set(t,{x:e,z:n,s})}clear(){this.pos.fill(0),this.col.fill(0),this.last.clear();const{position:t,color:e}=this.mesh.geometry.attributes;t.needsUpdate=e.needsUpdate=!0}}class Eh{constructor(t){this.skids=new uw,this.smoke=oe?new Co({max:260,color:new lt(_h).multiplyScalar(2.2),additive:!0,gravity:-.3,drag:2.2}):new Co({max:260,color:new lt(13225170),gravity:.4,drag:1.6}),this.trail=oe?new Co({max:220,color:new lt(1,.55,.9).multiplyScalar(2.5),additive:!0,drag:3}):null,this.trail&&t.add(this.trail.points),this._trailDebt=0,this.sparks=new Co({max:160,color:new lt(1,.55,.15).multiplyScalar(6),additive:!0,gravity:-14,drag:.6}),t.add(this.skids.mesh,this.smoke.points,this.sparks.points),this._smokeDebt=0}update(t,e,n,s){[this._vh,this._fov]=[s,n.fov];const{state:r,telemetry:o}=t,a=Ti(r.yaw),c=fh(r.yaw),h=o.speed>2?ft((o.slip-1.8)/3.5,0,1):0,u=o.brake>0&&o.forwardSpeed>8?.3:0;this._smokeDebt+=h>.12?h*26*e:0;const d=Math.floor(this._smokeDebt);this._smokeDebt-=d;for(const f of[-1,1]){const g=r.x+c.x*f*(ts/2)-a.x*(Qi/2),v=r.z+c.z*f*(ts/2)-a.z*(Qi/2);oe||this.skids.add(f,g,v,Math.max(h,u));for(let m=0;m<d;m++){const p=()=>(Math.random()-.5)*.8;if(oe){this.smoke.emit(g,.2,v,r.vx*.3+p()*3,.6+Math.random(),r.vz*.3+p()*3,.35+Math.random()*.3,.09,.02,.6);continue}this.smoke.emit(g,.12,v,r.vx*.2+p(),.45+Math.random()*.35,r.vz*.2+p(),.8+Math.random()*.5,.35,1.5+Math.random()*.6,.06+.18*h)}}if(o.impact>2.5){const f=t.contact,g=Math.min(40,Math.round(o.impact*4));for(let v=0;v<g;v++){const m=()=>(Math.random()-.5)*5;this.sparks.emit(f.x,.35,f.z,f.nx*3+r.vx*.3+m(),2+Math.random()*3,f.nz*3+r.vz*.3+m(),.3+Math.random()*.35,.09,.03,1)}}this.trail&&this.thrust(r,o,a,c,e),this.smoke.setScale(s,n.fov),this.sparks.setScale(s,n.fov),this.smoke.update(e),this.sparks.update(e)}thrust(t,e,n,s,r){this._trailDebt+=(e.throttle||0)*34*r;const o=Math.floor(this._trailDebt);this._trailDebt-=o;for(let a=0;a<o;a++){const c=a%2?1:-1,l=t.x+s.x*c*.24+n.x*-.88,h=t.z+s.z*c*.24+n.z*-.88,u=()=>(Math.random()-.5)*.3;this.trail.emit(l,.52,h,t.vx*.55-n.x*2+u(),u(),t.vz*.55-n.z*2+u(),.22+Math.random()*.12,.13,.02,.5)}this.trail.setScale(this._vh??800,this._fov??60),this.trail.update(r)}reset(){this.skids.clear()}}const dw=.7,lf={fade:.012,suspendMs:60},pi={idleRpm:1700,biteRpm:2600,lockRpm:3e3,dropRpm:2e3,maxRpm:5600,topSpeed:17,slipFlare:650,revRate:9,hzPerRev:1.6,cutoffIdle:380,cutoffTop:3400,idleGain:.07,loadGain:.12,rumbleDepth:.3,idleWobble:22},Lo={pitch:2.4,rumble:.04,wobble:.15,cutoff:1.6},Io={pitches:[1.08,.93],hear:34,hold:3,teleport:4},_i={minRpm:.62,lift:.5,pops:[3,7],window:.55,gain:.16},Be={gripG:[7,15],slip:[1.4,5],squealGain:.19,squealHz:[1350,2150],brakeDecel:[6,12],brakeGain:.16,brakeHz:520,judderHz:19,scrapeGain:.22,scrapeHz:2600,scrapeHold:.18},Fc={gain:.3,lowpass:420,buzz:.35},hf={minSpeed:1.2,gain:.55},zc={red:660,go:1320,gain:.22},Bc={lap:[880,1320],best:[880,1109,1320,1760],gain:.16};class fw{constructor(){var e,n;this.ctx=null,this.master=null,this.muted=!1,this.hidden=((e=globalThis.document)==null?void 0:e.hidden)??!1,this._pending=[],this._noise=null,this._suspendTimer=0;const t=()=>this.unlock();for(const s of["keydown","pointerdown","touchstart"])window.addEventListener(s,t,{once:!0,passive:!0});(n=globalThis.document)==null||n.addEventListener("visibilitychange",()=>this.setHidden(document.hidden))}unlock(){var n,s;if(this.ctx)return void(this.hidden||((s=(n=this.ctx).resume)==null?void 0:s.call(n)));const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t;const e=this.ctx.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=4,this.master=this.ctx.createGain(),this.master.gain.value=this._level(),this.master.connect(e).connect(this.ctx.destination);for(const r of this._pending)r(this.ctx,this.master);this._pending.length=0}onReady(t){this.ctx?t(this.ctx,this.master):this._pending.push(t)}toggleMute(){return this.muted=!this.muted,this.master&&this.master.gain.setTargetAtTime(this._level(),this.ctx.currentTime,.05),this.muted}setHidden(t){var e,n;this.hidden=t,this.ctx&&(clearTimeout(this._suspendTimer),this.master.gain.setTargetAtTime(this._level(),this.ctx.currentTime,lf.fade),t?this._suspendTimer=setTimeout(()=>{var s,r;return this.hidden&&((r=(s=this.ctx).suspend)==null?void 0:r.call(s))},lf.suspendMs):(n=(e=this.ctx).resume)==null||n.call(e))}_level(){return this.muted||this.hidden?0:dw}noise(){if(!this._noise){const t=this.ctx.sampleRate*2;this._noise=this.ctx.createBuffer(1,t,this.ctx.sampleRate);const e=this._noise.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1}return this._noise}}class b0{constructor(t=pi){this.cfg=t,this.rpm=t.idleRpm,this.load=0,this.liftOff=0,this._peakThrottle=0}roadRpm(t){return Math.abs(t)/this.cfg.topSpeed*this.cfg.maxRpm}step(t,e,n){if(Number.isFinite(t.rpm))return this.rpm=Ce(this.rpm,t.rpm,30,n),this.load=Ce(this.load,e,9,n),this._detectLift(e,n),this.rpm;const s=this.cfg,r=this.roadRpm(t.forwardSpeed??t.speed??0),o=e*ft(((t.slip||0)-1.2)/4,0,1)*(t.sliding?1:.6)*s.slipFlare;let a,c;if(r>=s.lockRpm)[a,c]=[r+o,22];else if(e>.05){const l=s.idleRpm+e*(s.maxRpm-s.idleRpm),h=s.biteRpm+(s.lockRpm-s.biteRpm)*Math.max(r/s.lockRpm,e*.5);[a,c]=[Math.min(l,Math.max(h,r))+o,s.revRate]}else{const l=r>s.dropRpm;[a,c]=[l?r:s.idleRpm,l?18:3.5]}return this.rpm=Ce(this.rpm,Math.min(a,s.maxRpm*1.04),c,n),this.load=Ce(this.load,e,9,n),this._detectLift(e,n),this.rpm}get rev(){const t=this.cfg;return ft((this.rpm-t.idleRpm)/(t.maxRpm-t.idleRpm),0,1.1)}_detectLift(t,e){this._peakThrottle=Math.max(t,this._peakThrottle-e*2);const n=this.rpm/this.cfg.maxRpm;this.liftOff=0,this._peakThrottle-t>=_i.lift&&t<.2&&n>=_i.minRpm&&(this.liftOff=ft((n-_i.minRpm)/(1-_i.minRpm),.3,1),this._peakThrottle=t)}reset(){this.rpm=this.cfg.idleRpm,this.load=this._peakThrottle=this.liftOff=0}}const uf=oe?[1,.08,.5,.05,.32,.04,.24,.03,.2,.02,.14,.02,.1,.01,.08,.01]:[1,.75,.9,.62,.55,.36,.3,.2,.18,.12,.1,.08,.06,.05,.04,.03];function pw(i=1024){const t=new Float32Array(i);for(let e=0;e<i;e++)t[e]=Math.tanh((e/(i-1)*2-1)*2.2)/Math.tanh(2.2);return t}function mw(i,t,e){const n=x=>new GainNode(i,{gain:x}),s=new Float32Array(uf.length+1);s.set(uf,1);const r=new OscillatorNode(i,{periodicWave:i.createPeriodicWave(new Float32Array(s.length),s)}),o=new OscillatorNode(i,{type:"sine"}),a=new AudioBufferSourceNode(i,{buffer:e,loop:!0}),c=new BiquadFilterNode(i,{type:"bandpass",Q:.9,frequency:400}),l=n(.2),h=n(1),u=new WaveShaperNode(i,{curve:pw(),oversample:"2x"}),d=new BiquadFilterNode(i,{type:"lowpass",Q:2.6,frequency:600}),f=n(0),g=new OscillatorNode(i,{type:"sine"}),v=n(0),m=n(.15),p=new OscillatorNode(i,{type:"sine",frequency:4.2}),_=n(0);r.connect(n(.5)).connect(h),o.connect(n(.55)).connect(h),a.connect(c).connect(l).connect(h),h.connect(u).connect(d).connect(f).connect(t),g.connect(v).connect(f.gain),g.connect(m).connect(l.gain),p.connect(_),_.connect(r.detune),_.connect(o.detune);for(const x of[r,o,g,p])x.start();return a.start(0,Math.random()*e.duration),{ctx:i,main:r,sub:o,noiseBand:c,noiseAmp:l,drive:h,filter:d,amp:f,pulse:g,pulseDepth:v,wobble:p,wobbleDepth:_}}class gw{constructor(t,e=null){this.audio=t,this.out=e,this._left=0,this._next=0,this._level=0}trigger(t){const[e,n]=_i.pops;this._left=Math.round(e+(n-e)*t*(.6+Math.random()*.4)),this._level=t,this._next=.04+Math.random()*.06}update(t,e=1){if(!(!this._left||!this.audio.ctx)){if(e<=0)return void(this._left=0);this._next-=t,!(this._next>0)&&(this._pop(this._level*e*(.45+Math.random()*.55)),this._level*=.85,this._left--,this._next=.025+Math.random()*(_i.window/4))}}_pop(t){const{ctx:e,master:n}=this.audio,s=e.currentTime,r=this.out??n,o=(h,u,d)=>{const f=new GainNode(e,{gain:0});return f.gain.setValueAtTime(0,s),f.gain.linearRampToValueAtTime(u,s+.002),f.gain.exponentialRampToValueAtTime(1e-4,s+.002+d),h.connect(f).connect(r),s+.01+d},a=new AudioBufferSourceNode(e,{buffer:this.audio.noise()}),c=new BiquadFilterNode(e,{type:"bandpass",frequency:700+Math.random()*1100,Q:1.3});a.connect(c),a.start(s,Math.random()*1.5),a.stop(o(c,t*_i.gain*1.6,.025+Math.random()*.035));const l=new OscillatorNode(e,{type:"triangle",frequency:150});l.frequency.exponentialRampToValueAtTime(55,s+.06),l.start(s),l.stop(o(l,t*_i.gain,.06))}}class S0{constructor(t,e=1){this.n=null,this.pitch=e,this.model=new b0,this.pops=new gw(t),this._wander=0,t.onReady((n,s)=>this.n=mw(n,s,t.noise()))}get rpm(){return this.model.rpm}update(t,e,n,s=!0,r=1){this.model.step(t,e,n),this.render(this.model,n,s,r)}render(t,e,n=!0,s=1,r=!1){if(r&&this.pops.update(0,0),t.liftOff&&n&&this.pops.trigger(t.liftOff),this.pops.update(e,n?s:0),!this.n)return;const{ctx:o,main:a,sub:c,noiseBand:l,drive:h,filter:u,amp:d,pulse:f,pulseDepth:g,wobble:v,wobbleDepth:m}=this.n,p=o.currentTime,_=t.rev,x=t.load,y=1-ft(_*3,0,1),A=t.rpm/60*pi.hzPerRev*this.pitch*(oe?Lo.pitch:1),w=r?.002:.03;a.frequency.setTargetAtTime(A,p,w),c.frequency.setTargetAtTime(A*.5,p,w),f.frequency.setTargetAtTime(A/4,p,w),l.frequency.setTargetAtTime(A*5.5,p,.05),this._wander=(this._wander+e*(.7+Math.random()))%1,v.frequency.setTargetAtTime(3+2.5*this._wander,p,.2),m.gain.setTargetAtTime(pi.idleWobble*y*(oe?Lo.wobble:1),p,.1);const T=.35*_+.65*x;u.frequency.setTargetAtTime(Ln(pi.cutoffIdle,pi.cutoffTop,ft(T,0,1))*(oe?Lo.cutoff:1),p,.05),h.gain.setTargetAtTime(.7+1.8*x*(.4+.6*_),p,.05);const L=n?(pi.idleGain+pi.loadGain*T)*s:0;d.gain.setTargetAtTime(L,p,.08),g.gain.setTargetAtTime(L*(oe?Lo.rumble:pi.rumbleDepth)*(1+.8*y),p,.08)}}const vw={speed:0,forwardSpeed:0,slip:0,sliding:!1};class xw{constructor(t){this.voices=Io.pitches.map(e=>new S0(t,e)),this.bound=this.voices.map(()=>null),this._models=new WeakMap}model(t){return this._track(t).rpm}_track(t){let e=this._models.get(t);return e||this._models.set(t,e={rpm:new b0,x:t.state.x,z:t.state.z}),e}_step(t,e){const n=this._track(t);Math.hypot(t.state.x-n.x,t.state.z-n.z)>Io.teleport&&n.rpm.reset(),[n.x,n.z]=[t.state.x,t.state.z],n.rpm.step(t.telemetry,t.telemetry.throttle,e)}update(t,e,n,s){const o=e.map(l=>{this._step(l,n);const h=Math.hypot(l.state.x-t.x,l.state.z-t.z);return{k:l,d:h,rank:h-(this.bound.includes(l)?Io.hold:0)}}).sort((l,h)=>l.rank-h.rank).slice(0,this.voices.length),a=this.bound.map(l=>o.find(h=>h.k===l)??null),c=o.filter(l=>!a.includes(l));this.voices.forEach((l,h)=>{const u=a[h]??c.shift(),d=((u==null?void 0:u.k)??null)!==this.bound[h];if(this.bound[h]=(u==null?void 0:u.k)??null,!u)return l.update(vw,0,n,!1);const f=Math.max(0,1-u.d/Io.hear)**1.6*.75;l.render(this.model(u.k),n,s&&f>0,f,d)})}}class _w{constructor(t){this.audio=t}_env(t,e,n,s,r){const{ctx:o,master:a}=this.audio,c=o.createGain();return c.gain.setValueAtTime(0,r),c.gain.linearRampToValueAtTime(e,r+n),c.gain.exponentialRampToValueAtTime(1e-4,r+n+s),t.connect(c).connect(a),r+n+s}impact(t){const{ctx:e}=this.audio;if(!e||t<hf.minSpeed)return;const n=e.currentTime,s=ft(t/9,.15,1)*hf.gain,r=Object.assign(e.createBufferSource(),{buffer:this.audio.noise()}),o=new BiquadFilterNode(e,{type:"lowpass",frequency:1100});r.connect(o),r.start(n,Math.random()),r.stop(this._env(o,s,.004,.22,n));const a=Object.assign(e.createOscillator(),{type:"sine"});a.frequency.setValueAtTime(95,n),a.frequency.exponentialRampToValueAtTime(42,n+.25),a.start(n),a.stop(this._env(a,s*.9,.004,.28,n))}beep(t){const{ctx:e}=this.audio;if(!e)return;const n=e.currentTime,s=Object.assign(e.createOscillator(),{type:"square"});s.frequency.value=t==="go"?zc.go:zc.red,s.start(n),s.stop(this._env(s,zc.gain*.5,.005,t==="go"?.6:.2,n))}chime(t=!1){const{ctx:e}=this.audio;e&&(t?Bc.best:Bc.lap).forEach((n,s)=>{const r=e.currentTime+s*.09,o=Object.assign(e.createOscillator(),{type:"triangle"});o.frequency.value=n,o.start(r),o.stop(this._env(o,Bc.gain,.01,.35,r))})}}const Tn=(i,t=0)=>new GainNode(i,{gain:t}),Cs=(i,t,e,n=1)=>new BiquadFilterNode(i,{type:t,frequency:e,Q:n});function Rr(i,t){const e=new AudioBufferSourceNode(i,{buffer:t,loop:!0});return e.start(0,Math.random()*t.duration),e}function qo(i,t,e,n,s){const r=new OscillatorNode(i,{type:t,frequency:e}),o=Tn(i,n);return r.connect(o).connect(s),r.start(),{osc:r,depth:o}}const wn=(i,t,e,n=.06)=>i.setTargetAtTime(t,e.currentTime,n),Hc=(i,[t,e])=>ft((i-t)/(e-t),0,1);function Mw(i,t,e){const n=Tn(i),[s,r]=[Cs(i,"bandpass",Be.squealHz[0],9),Cs(i,"bandpass",Be.squealHz[1],7)];Rr(i,e).connect(s).connect(n),Rr(i,e).connect(r).connect(Tn(i,.6)).connect(n),qo(i,"sine",6.5,35,s.frequency).depth.connect(r.frequency);const a=Tn(i),c=Tn(i,.55);Rr(i,e).connect(Cs(i,"bandpass",Be.brakeHz,1.4)).connect(c).connect(a);const l=qo(i,"square",Be.judderHz,.45,c.gain),h=Tn(i),u=Tn(i,.6);Rr(i,e).connect(Cs(i,"highpass",1500,.7)).connect(Cs(i,"bandpass",Be.scrapeHz,.8)).connect(u).connect(h);const d=qo(i,"sawtooth",27,.4,u.gain);for(const f of[n,a,h])f.connect(t);return{ctx:i,squeal:n,bandA:s,bandB:r,brake:a,judder:l,scrape:h,rasp:d}}class yw{constructor(t){this.n=null,this._scrape=0,t.onReady((e,n)=>this.n=Mw(e,n,t.noise()))}update(t,e,n=!0,s=0){if(this._scrape=s>.02?Be.scrapeHold:Math.max(0,this._scrape-e),!this.n)return;const{ctx:r,squeal:o,bandA:a,bandB:c,brake:l,judder:h,scrape:u,rasp:d}=this.n,f=t.speed||0,g=n?ft((f-2)/3,0,1):0,v=Hc(t.slip||0,Be.slip),m=Hc(Math.abs(t.latAccel||0),Be.gripG),p=ft(v+.55*m*m,0,1);wn(o.gain,g*Be.squealGain*p**1.3,r),wn(a.frequency,Be.squealHz[0]*(1+.12*v),r,.1),wn(c.frequency,Be.squealHz[1]*(1+.08*v),r,.1);const _=Math.abs(t.forwardSpeed||0),x=ft(-(t.longAccel||0),0,30),y=(t.brake||0)>.05&&_>3?Hc(x,Be.brakeDecel)*(t.brake||0):0;wn(l.gain,g*Be.brakeGain*y*ft(_/8,0,1),r,.04),wn(h.osc.frequency,Be.judderHz*(.7+.3*ft(_/14,0,1)),r,.1);const A=this._scrape>0&&n?ft(f/10,.2,1):0;wn(u.gain,Be.scrapeGain*A,r,.03),wn(d.osc.frequency,18+Math.random()*30,r,.02)}}class bw{constructor(t){this.n=null,t.onReady((e,n)=>{const s=Tn(e),r=Tn(e,.5);Rr(e,t.noise()).connect(Cs(e,"lowpass",Fc.lowpass,1.2)).connect(r).connect(s);const o=qo(e,"square",30,.5,r.gain),a=new OscillatorNode(e,{type:"triangle",frequency:30});a.connect(Tn(e,Fc.buzz)).connect(s),a.start(),s.connect(n),this.n={ctx:e,level:s,ribs:o,buzz:a}})}update(t,e=!0){if(!this.n)return;const{ctx:n,level:s,ribs:r,buzz:o}=this.n,a=ft(t.hz,6,80);wn(r.osc.frequency,a,n,.03),wn(o.frequency,a*1.5,n,.03);const c=ft(t.hz/20,.25,1);wn(s.gain,e?Fc.gain*t.amount*c:0,n,.025)}}const Sw=.25,ww="centripetal",Ew=6,Tw=5,w0=.012,Ca=.02,Aw=.16,Rl=.2,Rw=.9,Cw=.12,Pw=1/22,Lw=5,Iw=2,Dw=.9,Nw="#d7263d",Uw="#dcdcdc",Pa=.8,Dr=1.5,Cl=.75,es=.5,Ow=[12853043,14277081],kw=1.2,Th=7,Fw=4.6,fi={width:1.9,tile:9,opacity:.34,cornerBoost:.45,color:723725,roughness:.62},Ki={minBrake:.2,minDrop:1,mergeGap:3,streaks:3,spread:.28,width:.16,opacity:.22,rearTrack:1.12},Vc={green:.965,rubberStart:.35,rubberLaps:40,lineGain:.04,lineWidth:.9,dust:.05,dustFrom:1.6,dustFull:2.8,kerb:.86};function E0(i){const t=i.count,e=Math.round(Iw/i.spacing),n=new Int8Array(t);for(let a=0;a<t;a++)if(!(Math.abs(i.curvature[a])<Pw))for(let c=-e;c<=e;c++){const l=i.wrap(a+c);n[l]||(n[l]=Math.sign(i.curvature[a]))}const s=n.indexOf(0);if(s<0)return[];const r=[];let o=null;for(let a=1;a<=t;a++){const c=i.wrap(s+a);o&&n[c]===o.side?o.indices.push(c):(o&&r.push(o),o=n[c]?{side:n[c],indices:[c]}:null)}return r.filter(a=>a.indices.length*i.spacing>=Lw)}const Ah=i=>i.halfWidth-Cw;function T0(i,t){const e=Ah(i);return Math.max(e+.12,Math.min(e+Rw,.92/Math.max(1e-6,Math.abs(i.curvature[t]))))}function A0(i){const t=i.count,e={side:new Int8Array(t),inner:new Float32Array(t),outer:new Float32Array(t)},n=Ah(i);for(const{side:s,indices:r}of E0(i))for(const o of r)e.side[o]=s,e.inner[o]=n,e.outer[o]=T0(i,o);return e}const zw=(i,t,e)=>[[i/2,-t/2],[i/2,t/2],[-i/2,-e/2],[-i/2,e/2]];function Bw(i,t,e,n,s,r,o){if(o.count=o.left=o.right=0,o.lateral=n>=0?t.lateral(e.x,e.z,n):0,n<0)return o;const a=-Math.sin(e.yaw),c=-Math.cos(e.yaw),[l,h]=[-c,a];for(const[u,d]of s){const f=e.x+a*u+l*d,g=e.z+c*u+h*d,v=(f-t.x[n])*t.tx[n]+(g-t.z[n])*t.tz[n],m=t.wrap(n+Math.round(v/t.spacing)),p=i.side[m];if(!p)continue;const _=t.lateral(f,g,m)*p;_+r<i.inner[m]||_-r>i.outer[m]+.1||(o.count++,d<0?o.left++:o.right++)}return o}const Hw=zw(Qi,Aa,ts);class R0{constructor(){this.contact={count:0,left:0,right:0,lateral:0},this.rib=new Jp([1,2.3,.5],[0,.4,1.1],je.kerbCeil),this.reset()}reset(){this.amount=0,this.tilt=0,this.hz=0}get lateral(){return this.contact.lateral}update(t,e,n,s,r){const o=n?Bw(n,e,t.state,s,Hw,ui.tyreHalfWidth,this.contact):this.contact,a=t.telemetry.speed||0,c=a>.5&&n?ft(o.count/2,0,1):0,l=c>this.amount?ui.attack:ui.release,h=1-Math.exp(-l*r);this.amount+=(c-this.amount)*h;const u=o.count?(o.right-o.left)/o.count:this.tilt;this.tilt+=(u-this.tilt)*h,this.hz=a/ui.ridge,this.rib.update(this.hz,r),this._ride(t.model,a)}_ride(t,e){const n=this.amount,s=ft(e/6,0,1),r=this.rib.value[0]*.5+.5;t.root.position.y=n*(ui.lift+ui.hop*s*r),t.body.rotation.z+=n*this.tilt*ui.roll*(.75+.25*r),t.body.rotation.x+=n*ui.hop*s*this.rib.value[2]}}const ws=3;class C0{constructor(t,e){this.n=t,this.start=e,this.best=null,this.bestSplits=null,this.outLap=!1,this.bestSectors=Array(ws).fill(null),this.bounds=Array.from({length:ws},(n,s)=>Math.floor((s+1)*t/ws)),this.reset()}reset(){this.progress=null,this.lastIndex=null,this.lap=0,this.lapStart=0,this.lastLap=null,this.splits=new Float32Array(this.n).fill(NaN),[this._lastK,this._prevTime]=[-1,0],this.sectors=Array(ws).fill(null),this.sectorEvents=[]}_wrap(t){return t>this.n/2?t-this.n:t<-this.n/2?t+this.n:t}update(t,e){if(this.lastIndex===null)return this.lastIndex=t,this.progress=this._wrap(t-this.start),this.outLap&&this.progress>=0&&(this.progress-=this.n),this._prevTime=e,null;const n=this.progress;this.progress+=this._wrap(t-this.lastIndex),this.lastIndex=t,this.sectorEvents.length=0;let s=null;const r=this.lap*this.n;if(n<r&&this.progress>=r){const o=(r-n)/(this.progress-n),a=this._prevTime+o*(e-this._prevTime);this.lap>=1&&(this._sector(ws-1,a-this.lapStart),s=this._complete(a)),this.lap+=1,this.lapStart=a,this.splits.fill(NaN),this.sectors.fill(null),this._lastK=-1}if(this.lap>=1){const o=Math.floor(this.progress-(this.lap-1)*this.n);for(let a=this._lastK+1;a<=Math.min(o,this.n-1);a++){this.splits[a]=e-this.lapStart;const c=this.bounds.indexOf(a);c>=0&&c<ws-1&&this._sector(c,e-this.lapStart)}this._lastK=Math.max(this._lastK,Math.min(o,this.n-1))}return this._prevTime=e,s}_sector(t,e){const n=t===0?0:this.splits[this.bounds[t-1]];if(Number.isNaN(n)||t>0&&this.sectors[t-1]===null)return;const s=e-n,r=this.bestSectors[t],o=r===null||s<r;o&&(this.bestSectors[t]=s),this.sectors[t]=s,this.sectorEvents.push({type:"sector",sector:t,lap:this.lap,time:s,isBest:o,delta:r===null?null:s-r})}_complete(t){const e=t-this.lapStart,n=this.best===null||e<this.best,s=this.best===null?null:e-this.best;return this.lastLap=e,n&&(this.best=e,this.bestSplits=Float32Array.from(this.splits)),{type:"lap",lap:this.lap,time:e,isBest:n,delta:s}}lapTime(t){return this.lap>=1?t-this.lapStart:0}delta(t){if(!this.bestSplits||this.lap<1)return null;const e=Math.floor(this.progress-(this.lap-1)*this.n),n=e>=0&&e<this.n?this.bestSplits[e]:NaN;return Number.isNaN(n)?null:t-this.lapStart-n}}const df=.85,Gc=[.5,1.3],Vw=1.4,Wc=5,Gw=2.4,ua=oe?"tbc-nova.v1":"tbc-kart.v1",ee={lookAhead:5,lookSpeed:.25,steerGain:2.4,yawDamp:.2,maxSpeed:17.5,latAccel:7.5,planChord:.7,planChordMin:4.5,planChordMax:14,planDecel:4.1,planAhead:.25,throttleBase:.5,throttleGain:.8,brakeMargin:.3,brakeGain:1,lockSteer:.9,lockThrottle:6.5,lockThrottleMin:.35,slipLiftStart:.06,slipLiftRange:.15,slipLiftMin:.15},Dn={rowGap:3.4,lateral:1.45,playerSlot:7,size:12},Ww={maxSpeed:9},kn=[{code:"VAL",name:"S. Valente",number:"16",body:14035664,suit:2359366,stripe:16777215,skill:1.02,line:.1,react:.19,aggression:.7},{code:"ROS",name:"M. Rossi",number:"11",body:15087942,suit:2829634,stripe:16777215,skill:1.015,line:-.1,react:.18,aggression:.85},{code:"BRA",name:"A. Braga",number:"9",body:9247549,suit:16053492,stripe:16761370,skill:1.01,line:-.1,react:.21,aggression:.8},{code:"OKA",name:"T. Okafor",number:"23",body:2873724,suit:1786674,stripe:1118481,skill:1.005,line:.15,react:.22,aggression:.55},{code:"SAN",name:"D. Santos",number:"27",body:1023370,suit:730437,stripe:16777215,skill:1,line:.1,react:.23,aggression:.6},{code:"LIN",name:"E. Lindqvist",number:"5",body:3835647,suit:730437,stripe:16766474,skill:.995,line:.05,react:.2,aggression:.65},{code:"KOW",name:"J. Kowalski",number:"14",body:10134445,suit:1776672,stripe:15087942,skill:.99,line:-.15,react:.24,aggression:.5},{code:"TAN",name:"K. Tanaka",number:"88",body:16743168,suit:2236962,stripe:3835647,skill:.985,line:-.2,react:.26,aggression:.4},{code:"MEI",name:"L. Mei",number:"81",body:13208363,suit:2829634,stripe:1118481,skill:.98,line:.2,react:.25,aggression:.55},{code:"MOR",name:"L. Moreau",number:"31",body:11766015,suit:3934572,stripe:16777215,skill:.975,line:.25,react:.28,aggression:.75},{code:"OBR",name:"C. O'Brien",number:"55",body:2763571,suit:16761370,stripe:2282478,skill:.97,line:-.05,react:.27,aggression:.45}],Pl={code:"YOU",name:"You",number:"07"},Bs={points:[25,18,15,12,10,8,6,4,2,1],fastestLap:1,key:oe?"tbc-nova.season":"tbc-kart.season"},Us={laps:3.4,pace:11.5,min:90,max:180,lead:12,overrun:60},Ht={lineEdge:1.1,lineMax:2.4,lineTaper:25,sightAhead:9,sightLateral:1.6,sightKeep:11,passOffset:1.7,pullOutAhead:7,passLook:30,passTurn:.35,passGiveUp:8,passAlongside:1.5,passRetry:1,attack:.03,blockAhead:2.6,blockLateral:1.3,offsetRate:2.2,stuckTime:1.6,catchUp:.025,catchUpGap:60,formSpread:.03,cornerBelow:.9,cornerWindow:12,mistakeMin:.05,mistakeMax:.11,mistakeHot:.6,pressureMistakes:2,defendOdds:.5,defendLateral:3,defendInside:.9,defendHold:2.2,defendCool:2.5,defendPace:.96},Xw={tbc:1.014,monaco:.996,monza:1.032,silverstone:1.013,spa:1.022,interlagos:.998,montreal:.984,austin:1.017,spielberg:1.067,singapore:.992},Qn={amateur:{label:"AMATEUR",pace:.88,sigma:.03,mistakes:.08},club:{label:"CLUB",pace:.97,sigma:.02,mistakes:.05},pro:{label:"PRO",pace:1.05,sigma:.012,mistakes:.03},elite:{label:"ELITE",pace:1.12,sigma:.006,mistakes:.015}},P0="club",ff={range:9,lateral:1.3},pf={radius:.78,restitution:.35},mf=1/20,Br={full:{label:"FULL",steer:1,throttle:!0,brake:!0},reduced:{label:"REDUCED",steer:.5,throttle:!0,brake:!0},off:{label:"OFF",steer:0,throttle:!1,brake:!1}},qw="full",qn={rate:30,maxSeconds:900,speeds:[.25,.5,1,2,4],seek:5,battle:12,directorHold:[5,9]},L0=(i=Math.random)=>Gc[0]+i()*(Gc[1]-Gc[0]);class $w{constructor(t,e,n,s,r){this.laps=r,this.bus=n,this.timer=new C0(t,e),this.timer.best=s.best,this.timer.bestSplits=s.splits,this.state="title",this.mode="race",this.clock=0,this.lights=0,this.lightsMode="off",[this._t,this._hold,this._goAt,this._resumeTo]=[0,1,0,null],this.elapsed=null,this.limit=null,this.flagged=!1}startSession(t,e){this.startCountdown(t),Object.assign(this,{state:"racing",lightsMode:"off",limit:e,flagged:!1}),this.timer.outLap=!0,this.timer.reset(),this.bus.emit("session",e)}startCountdown(t=this.mode,e=L0()){this.mode=t,this.state="countdown",this.limit=null,this.flagged=!1,this.timer.outLap=!1,this._t=0,this.clock=0,this.lights=0,this.lightsMode="red",this._hold=e,this.timer.reset(),this.bus.emit("countdown")}toTitle(){this.state="title",this.lightsMode="off",this.lights=0}finish(){this.state="finished",this.bus.emit("finish")}follow(t){this.elapsed=t}togglePause(){this.state==="paused"?(this.state=this._resumeTo,this.bus.emit("pause",!1)):(this.state==="racing"||this.state==="countdown")&&(this._resumeTo=this.state,this.state="paused",this.bus.emit("pause",!0))}update(t,e){if(this.elapsed&&(t=Math.max(0,this.elapsed()-this._t)),this.state==="countdown"){this._t+=t;const n=Math.min(Wc,Math.floor(this._t/df));n>this.lights&&(this.lights=n,this.bus.emit("light",n));const s=Wc*df+this._hold;n===Wc&&this._t>=s&&(this.state="racing",this.lightsMode="go",this._goAt=this._t,this.elapsed&&(this.clock=this._t-s),this.bus.emit("go"))}else if(this.state==="racing"){this._t+=t,this.clock+=t,this.lightsMode==="go"&&this._t-this._goAt>Vw&&(this.lightsMode="off");const n=this.timer.update(e,this.clock);for(const s of this.timer.sectorEvents)this.bus.emit("sector",s);n&&this.bus.emit("lap",n),this.limit!==null&&!this.flagged&&this.clock>=this.limit&&(this.flagged=!0,this.bus.emit("flag",this.limit))}else this.state==="finished"&&(this._t+=t,this.clock+=t)}get view(){const t=this.timer;return{state:this.state,mode:this.mode,totalLaps:this.laps,lap:t.lap,lapTime:t.lapTime(this.clock),last:t.lastLap,best:t.best,delta:t.delta(this.clock),lights:this.lights,lightsMode:this.lightsMode,timeLeft:this.limit===null?null:Math.max(0,this.limit-this.clock),flagged:this.flagged}}}class Ll{constructor(t,e,n,s,{timed:r=!1}={}){this.n=t,this.laps=r?1/0:n,this.timed=r,this.entries=s.map(o=>({...o,timer:new C0(t,e),passTimes:new Float32Array(t*(r?1:n)+1)})),this.passTimesLength=t*(r?1:n)+1;for(const o of this.entries)o.timer.outLap=r;this.reset()}reset(){for(const t of this.entries)t.timer.reset(),t.passTimes.fill(NaN),Object.assign(t,{finishTime:null,bestLap:null,lapsDone:0,progress:0,_recorded:-1});this.order=[...this.entries],this.flagAt=null}flag(t){this.flagAt??(this.flagAt=t)}get player(){return this.entries.find(t=>t.isPlayer)}update(t,e){const n=[];return this.entries.forEach((s,r)=>{if(s.finishTime!==null)return;const o=s.timer.update(t[r],e);s.progress=s.timer.progress;const a=Math.min(Math.floor(s.progress),this.passTimesLength-1);for(let c=Math.max(0,s._recorded+1);c<=a;c++)s.passTimes[c]=e;s._recorded=Math.max(s._recorded,a),o&&(s.lapsDone=o.lap,s.bestLap=s.bestLap===null?o.time:Math.min(s.bestLap,o.time),(o.lap>=this.laps||this.flagAt!==null&&e>=this.flagAt)&&(s.finishTime=s.timer.lapStart,n.push(s)))}),this.order=[...this.entries].sort((s,r)=>this.timed?(s.bestLap??1/0)-(r.bestLap??1/0)||r.progress-s.progress:s.finishTime!==null||r.finishTime!==null?(s.finishTime??1/0)-(r.finishTime??1/0):r.progress-s.progress),n}position(t){return this.order.indexOf(t)+1}gap(t,e){const n=this.order[0];if(t===n)return 0;if(this.timed)return t.bestLap===null||n.bestLap===null?null:t.bestLap-n.bestLap;if(t.finishTime!==null)return t.finishTime-n.finishTime;const s=Math.floor((n.progress-t.progress)/this.n);if(s>=1)return{laps:s};const r=n.passTimes[Math.floor(t.progress)];return Number.isNaN(r)||r===void 0?null:Math.max(0,e-r)}}const Do=(i,t)=>Math.round(i*t)/t;class Yw{constructor(){this.reset()}reset(){this.lap=-1,this.frames=[],this._next=0}update(t,e,n){t!==this.lap&&([this.lap,this.frames,this._next]=[t,[],0]),!(t<1||e<this._next)&&(this.frames.push(Do(e,1e3),Do(n.x,100),Do(n.z,100),Do(n.yaw,1e3)),this._next=Math.max(this._next+mf,e-mf))}take(){return this.frames.length>=8?this.frames.slice():null}}function jw(i){const t=Math.abs(i||0)-ee.lockSteer;return t>0?Math.max(ee.lockThrottleMin,1-t*ee.lockThrottle):1}function Kw(i){return ft(1-(Math.abs(i||0)-ee.slipLiftStart)/ee.slipLiftRange,ee.slipLiftMin,1)}function Rh(i,t,e=0,n=0){const s=t-i;return{throttle:Math.min(ft(ee.throttleBase+s*ee.throttleGain,0,1),jw(e),Kw(n)),brake:ft((-s-ee.brakeMargin)*ee.brakeGain,0,1)}}function I0(i,t,e){const n=t.x-i.x,s=t.z-i.z,r=Jn(ub(n,s)-i.yaw),o=2*e*Math.sin(r)/Math.max(Math.hypot(n,s),1),a=(i.yawRate??0)-o;return ft(r*ee.steerGain-a*ee.yawDamp,-1,1)}const gf=new WeakMap;function Zw(i,t,{latAccel:e,decel:n,chord:s,chordMin:r,chordMax:o,maxSpeed:a}){const c=`${e}/${n}/${s}/${r}/${o}/${a}`,l=gf.get(t);if((l==null?void 0:l.key)===c)return l.plan;const h=i.count,u=new Float64Array(h),d=new Float64Array(h);for(let m=0;m<h;m++)[u[m],d[m]]=[i.x[m]-i.tz[m]*t[m],i.z[m]+i.tx[m]*t[m]];const[f,g]=[r,o],v=new Float32Array(h).fill(a);for(let m=0;m<2;m++)for(let p=0;p<h;p++){const _=f===g?f:Math.min(g,Math.max(f,v[p]*s)),x=Math.max(2,Math.round(_/i.spacing)),y=Jw(u,d,i.wrap(p-x),p,i.wrap(p+x));v[p]=Math.min(a,Math.sqrt(e/Math.max(y,1e-4)))}for(let m=0;m<2;m++)for(let p=h-1;p>=0;p--){const _=i.wrap(p+1);v[p]=Math.min(v[p],Math.sqrt(v[_]**2+2*n*Math.hypot(u[_]-u[p],d[_]-d[p])))}return gf.set(t,{key:c,plan:v}),v}function Jw(i,t,e,n,s){const r=Math.hypot(i[n]-i[e],t[n]-t[e]),o=Math.hypot(i[s]-i[n],t[s]-t[n]),a=Math.hypot(i[e]-i[s],t[e]-t[s]),c=(i[n]-i[e])*(t[s]-t[e])-(t[n]-t[e])*(i[s]-i[e]);return 2*Math.abs(c)/Math.max(r*o*a,1e-9)}function Ch(i,t,e,n,{skill:s=1,ahead:r,maxSpeed:o}){const a=t.wrap(e+Math.round(n*r/t.spacing));return Math.min(i[a]*s,o)}const Ph=(i,t)=>Zw(i,t,{latAccel:ee.latAccel,decel:ee.planDecel,chord:ee.planChord,chordMin:ee.planChordMin,chordMax:ee.planChordMax,maxSpeed:99});class Qw{constructor(t){this.setPath(t)}setPath(t){this.path=t,this.index=-1,this.plan=t&&Ph(t,new Float32Array(t.count))}controls(t,e,n=ee.maxSpeed){const s=this.path;this.index=s.nearest(t.x,t.z,this.index);const r=s.wrap(this.index+Math.round((ee.lookAhead+e*ee.lookSpeed)/s.spacing)),o=Ch(this.plan,s,this.index,e,{ahead:ee.planAhead,maxSpeed:n}),a=I0(t,{x:s.x[r],z:s.z[r]},e);return{...Rh(e,o,a,t.slipAngle),steer:a,handbrake:!1}}}const vf={best:null,splits:null,ghost:null},tE=i=>i==="tbc"?ua:`${ua}.${i}`;function eE(i,t=ua){try{const e=JSON.parse(localStorage.getItem(t)||"null");if(!e||e.signature!==i||typeof e.best!="number")return{...vf};const n=Array.isArray(e.splits)?Float32Array.from(e.splits,r=>r??NaN):null,s=Array.isArray(e.ghost)&&e.ghost.length%4===0&&e.ghost.every(Number.isFinite)?e.ghost:null;return{best:e.best,splits:n,ghost:s}}catch{return{...vf}}}function nE(i,t,e,n=null,s=ua){try{const r=e?Array.from(e,o=>Number.isNaN(o)?null:Math.round(o*1e3)/1e3):null;localStorage.setItem(s,JSON.stringify({signature:i,best:t,splits:r,ghost:n}))}catch{}}function $t(i,t="",e=""){const n=document.createElement(i);return t&&(n.className=t),e&&(n.innerHTML=e),n}function is(i){const t={};for(const e of i.querySelectorAll("[data-ref]"))t[e.dataset.ref]=e;return t}function Vt(i,t){i.textContent!==t&&(i.textContent=t)}function Si(i,t){i.classList.toggle("is-visible",t),i.inert=!t}function Nn(i){if(i==null||!Number.isFinite(i))return"-:--.---";const t=Math.max(0,Math.round(i*1e3)),e=Math.floor(t/6e4),n=Math.floor(t%6e4/1e3);return`${e}:${String(n).padStart(2,"0")}.${String(t%1e3).padStart(3,"0")}`}function Il(i){return i==null||!Number.isFinite(i)?"":`${i<0?"−":"+"}${Math.abs(i).toFixed(3)}`}function da(i){return i==null?"—":typeof i=="object"?`+${i.laps} LAP${i.laps>1?"S":""}`:`+${i.toFixed(3)}`}const fa=i=>`${i}${["TH","ST","ND","RD"][i%10>3||Math.floor(i/10)===1?0:i%10]}`;class iE{constructor(t){this.el=$t("div","hud-panel hud-lap",`<div class="hud-label">LAP<b data-ref="lap">–</b></div>
       <div class="hud-time" data-ref="time">0:00.000</div>
       <div class="hud-delta" data-ref="delta"></div>
       <div class="hud-sectors" data-ref="sectors"><i></i><i></i><i></i></div>
       <div class="hud-rows">
         <span>LAST</span><b data-ref="last">-:--.---</b>
         <span>BEST</span><b data-ref="best" class="is-best">-:--.---</b>
       </div>`),t.appendChild(this.el),this.r=is(this.el)}setSector({sector:t,colour:e,time:n,delta:s}){const r=this.r.sectors.children;if(t===0)for(const o of r)o.className="",o.textContent="";r[t].className=`is-${e}`,r[t].textContent=s==null?n.toFixed(2):`${s<=0?"−":"+"}${Math.abs(s).toFixed(2)}`}clearSectors(){for(const t of this.r.sectors.children)t.className="",t.textContent=""}update(t){const e=this.r;if(t.mode==="quali"){const n=t.timeLeft??0,s=`${Math.floor(n/60)}:${String(Math.floor(n%60)).padStart(2,"0")}`;Vt(e.lap,`${t.lap>=1?t.lap:"OUT"} · ${t.flagged?"FLAG ⚑":s}`)}else{const n=t.mode==="race"||t.mode==="champ"?`/${t.totalLaps}`:"";Vt(e.lap,`${t.lap>=1?Math.min(t.lap,t.totalLaps??1/0):"–"}${n}`)}Vt(e.time,Nn(t.lapTime)),Vt(e.last,Nn(t.last)),Vt(e.best,Nn(t.best)),Vt(e.delta,Il(t.delta)),e.delta.className=`hud-delta ${t.delta==null?"":t.delta<=0?"is-faster":"is-slower"}`}}const sE=70,xf="M 27.25 142 A 84 84 0 1 1 172.75 142";class rE{constructor(t){this.el=$t("div","hud-speedo",`<svg viewBox="0 0 200 180">
         <defs><linearGradient id="speedGrad" x1="0" x2="1">
           <stop offset="0" stop-color="#ffc21a"/><stop offset="1" stop-color="#ff3b4e"/>
         </linearGradient></defs>
         <path class="arc-bg" d="${xf}" fill="none" stroke-width="10" stroke-linecap="round"/>
         <path class="arc-fg" data-ref="arc" d="${xf}" fill="none" stroke="url(#speedGrad)"
               stroke-width="10" stroke-linecap="round" pathLength="100" stroke-dasharray="100"
               stroke-dashoffset="100"/>
       </svg>
       <div class="speed-num" data-ref="num">0</div>
       <div class="speed-unit">KM/H</div>
       <div class="speed-draft">SLIPSTREAM</div>`),t.appendChild(this.el),this.r=is(this.el),this._shown=-1}update(t,e=0){const n=e>.15;n!==this._drafting&&(this._drafting=n,this.el.classList.toggle("is-drafting",n));const s=Math.round(t*3.6);s!==this._shown&&(this._shown=s,Vt(this.r.num,String(s)),this.r.arc.setAttribute("stroke-dashoffset",String(100-Math.min(100,s/sE*100))))}}const oE=gh-Ta*.6,_f=gh+Ta*.6,aE=i=>i<oE?"is-cold":i>_f+Ta?"is-cooked":i>_f?"is-hot":"is-good";class cE{constructor(t){this.el=$t("div","hud-tyres",'<span>TYRES</span><i data-axle="f"><b></b><em>F</em></i><i data-axle="r"><b></b><em>R</em></i>'),t.appendChild(this.el),this.axles=[...this.el.querySelectorAll("i")],this._shown=["",""]}update(t){t&&this.axles.forEach((e,n)=>{const s=Math.round(t[n]),r=`${s}`;r!==this._shown[n]&&(this._shown[n]=r,e.className=aE(t[n]),Vt(e.firstChild,`${s}°`))})}}function Lh(i,t,e,n,s,r,{band:o=.16,line:a=.7,minBand:c=4}={}){let[l,h,u,d]=[1/0,-1/0,1/0,-1/0];for(let A=0;A<t.count;A++)l=Math.min(l,t.x[A]),h=Math.max(h,t.x[A]),u=Math.min(u,t.z[A]),d=Math.max(d,t.z[A]);const f=Math.min((n-2*r)/(h-l),(s-2*r)/(d-u)),g=(n-(h-l)*f)/2,v=(s-(d-u)*f)/2,m=(A,w)=>[g+(A-l)*f,v+(w-u)*f];i.lineJoin=i.lineCap="round",i.beginPath();const p=Math.max(1,Math.round(t.count/600));for(let A=0;A<t.count;A+=p)i.lineTo(...m(t.x[A],t.z[A]));i.closePath(),i.strokeStyle=`rgba(255,255,255,${o})`,i.lineWidth=Math.max(c,t.halfWidth*2*f),i.stroke(),i.strokeStyle=`rgba(255,255,255,${a})`,i.lineWidth=1.4,i.stroke();const[_,x]=m(t.x[e],t.z[e]),y=Math.atan2(t.tz[e],t.tx[e]);return i.save(),i.translate(_,x),i.rotate(y),i.fillStyle="#ffffff",i.fillRect(-1.5,-6,3,12),i.fillStyle="#ffc21a",i.beginPath(),i.moveTo(14,0),i.lineTo(7,-4),i.lineTo(7,4),i.closePath(),i.fill(),i.restore(),m}const No=240,Uo=172,lE=16;class hE{constructor(t,e,n){this.dpr=Math.min(2,window.devicePixelRatio||1),this.canvas=$t("canvas","hud-panel hud-minimap"),this.canvas.width=No*this.dpr,this.canvas.height=Uo*this.dpr,t.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.ctx.scale(this.dpr,this.dpr),this.bg=document.createElement("canvas"),this.setPath(e,n)}setPath(t,e){this.bg.width=this.canvas.width,this.bg.height=this.canvas.height;const n=this.bg.getContext("2d");n.scale(this.dpr,this.dpr),this.map=Lh(n,t,e,No,Uo,lE)}update(t,e=[]){const n=this.ctx;n.clearRect(0,0,No,Uo),n.drawImage(this.bg,0,0,No,Uo);for(const c of e){const[l,h]=this.map(c.x,c.z);n.fillStyle=c.color,n.beginPath(),n.arc(l,h,3.6,0,Math.PI*2),n.fill()}const[s,r]=this.map(t.x,t.z),o=Ti(t.yaw),a=Math.atan2(o.z,o.x);n.save(),n.translate(s,r),n.rotate(a),n.shadowColor="rgba(255,194,26,0.9)",n.shadowBlur=10,n.fillStyle="#ffc21a",n.beginPath(),n.moveTo(7,0),n.lineTo(-5,4.5),n.lineTo(-3,0),n.lineTo(-5,-4.5),n.closePath(),n.fill(),n.restore()}}class uE{constructor(t){this.el=$t("div","hud-lights","<i></i>".repeat(5)),t.appendChild(this.el),this.dots=[...this.el.children],this._key=""}update(t){const e=`${t.state}|${t.lights}|${t.lightsMode}`;if(e===this._key)return;this._key=e;const n=t.lightsMode==="red"&&t.state!=="title";this.el.classList.toggle("is-visible",n||t.lightsMode==="go"),this.dots.forEach((s,r)=>{s.className=t.lightsMode==="go"?"is-go":n&&r<t.lights?"is-red":""})}}class D0{constructor(t){this.el=$t("div","hud-toasts"),t.appendChild(this.el),this._timers=[]}show(t,{sub:e="",kind:n="",time:s=Gw}={}){this._timers.forEach(clearTimeout);const r=$t("div",`toast${n?` is-${n}`:""}`);r.textContent=t,e&&(r.appendChild($t("small")).textContent=e),this.el.replaceChildren(r),this._timers=[setTimeout(()=>r.classList.add("is-out"),s*1e3),setTimeout(()=>r.remove(),s*1e3+500)]}clear(){this._timers.forEach(clearTimeout),this._timers=[],this.el.replaceChildren()}}class dE{constructor(t){this.el=$t("div","hud-panel hud-standings",'<div class="st-pos"><b>–</b><span>/ –</span></div><ol></ol>'),t.appendChild(this.el),[this.pos,this.of]=this.el.querySelector(".st-pos").children,this.list=this.el.querySelector("ol"),this._key="",this._rows=[]}setVisible(t){this.el.hidden=!t}update(t,e){const n=this._visible(t.order),s=o=>t.order.indexOf(o),r=n.map(o=>`${o.code}${s(o)}`).join();r!==this._key&&(this._key=r,this._rows=n.map(o=>{const a=$t("li",o.isPlayer?"is-player":"");return a.innerHTML=`<i>${s(o)+1}</i><em></em><span></span><b></b>`,a.children[1].style.background=`#${o.color.toString(16).padStart(6,"0")}`,a.children[2].textContent=o.code,a}),this.list.replaceChildren(...this._rows)),n.forEach((o,a)=>{const c=s(o);if(t.timed){Vt(this._rows[a].children[3],o.bestLap===null?"NO TIME":c===0?Nn(o.bestLap):da(t.gap(o,e)));return}const l=c===0?o.finishTime!==null?"FINISH":`LAP ${Math.min(t.laps,Math.max(1,o.timer.lap))}`:da(t.gap(o,e));Vt(this._rows[a].children[3],o.finishTime!==null&&c>0?`${l} ⚑`:l)}),Vt(this.pos,`P${t.position(t.player)}`),Vt(this.of,`/ ${t.order.length}`)}_visible(t){const e=typeof window<"u"&&window.innerHeight<520?6:t.length;if(t.length<=e)return t;const n=Math.max(0,t.findIndex(r=>r.isPlayer)),s=Math.min(Math.max(1,n-Math.floor((e-1)/2)),t.length-(e-1));return[t[0],...t.slice(s,s+e-1)]}}const yr=9.81,Oo=424,br=132,Xc=230,We=Math.round(ia.seconds*60);function fE(i){const[t,e,n]=ia.temps;if(i<e){const r=Math.max(0,Math.min(1,(i-t)/(e-t)));return`rgb(${Math.round(60+20*r)},${Math.round(140+80*r)},${Math.round(255-170*r)})`}const s=Math.max(0,Math.min(1,(i-e)/(n-e)));return`rgb(${Math.round(80+175*s)},${Math.round(220-160*s)},${Math.round(85-30*s)})`}class pE{constructor(t){this.el=$t("div","hud-panel hud-telemetry"),this.canvas=document.createElement("canvas");const e=Math.min(2,window.devicePixelRatio||1);[this.canvas.width,this.canvas.height]=[Oo*e,br*e],this.canvas.style.width=`${Oo}px`,this.canvas.style.height=`${br}px`,this.g=this.canvas.getContext("2d"),this.g.scale(e,e),this.el.appendChild(this.canvas),t.appendChild(this.el),this.buf={thr:new Float32Array(We),brk:new Float32Array(We),str:new Float32Array(We),spd:new Float32Array(We),lat:new Float32Array(We),lon:new Float32Array(We)},this.head=0,this.visible=!1,this.el.hidden=!0}setVisible(t){this.visible=t,this.el.hidden=!t}update(t){const e=this.buf,n=this.head;e.thr[n]=t.throttle||0,e.brk[n]=t.brake||0,e.str[n]=t.steer||0,e.spd[n]=t.speed||0,e.lat[n]=(t.latAccel||0)/yr,e.lon[n]=(t.longAccel||0)/yr,this.head=(n+1)%We,this.visible&&this._draw(t)}_draw(t){const e=this.g,n=this.buf;e.clearRect(0,0,Oo,br);const s=10,r=br-26;e.strokeStyle="rgba(255,255,255,0.08)",e.lineWidth=1;for(const y of[0,.5,1])e.beginPath(),e.moveTo(0,s+r*y),e.lineTo(Xc,s+r*y),e.stroke();const o=(y,A,w,T=1.6)=>{e.strokeStyle=A,e.lineWidth=T,e.beginPath();for(let L=0;L<We;L++){const b=y[(this.head+L)%We],M=L/(We-1)*Xc,D=s+r*(1-w(b));L?e.lineTo(M,D):e.moveTo(M,D)}e.stroke()};o(n.spd,"rgba(160,190,255,0.55)",y=>Math.min(1,y/ia.speedFull),1.2),o(n.str,"rgba(255,255,255,0.85)",y=>.5+y*.5),o(n.brk,"#ff4d5e",y=>y),o(n.thr,"#2bd97c",y=>y),e.font="600 10px Chakra Petch, sans-serif",e.fillStyle="rgba(200,210,230,0.75)",e.fillText(`THR ${Math.round((t.throttle||0)*100)}  BRK ${Math.round((t.brake||0)*100)}  STR ${Math.round((t.steer||0)*100)}`,0,br-4);const a=Xc+64,c=48,l=38,h=l/ia.gFull;e.strokeStyle="rgba(255,255,255,0.12)";for(const y of[.5,1])e.beginPath(),e.arc(a,c,l*y,0,Math.PI*2),e.stroke();e.beginPath(),e.moveTo(a-l,c),e.lineTo(a+l,c),e.moveTo(a,c-l),e.lineTo(a,c+l),e.stroke();for(let y=We-60;y<We;y++){const A=(this.head+y)%We,w=(y-(We-60))/60;e.fillStyle=`rgba(255,194,26,${.08+.4*w})`,e.fillRect(a-n.lat[A]*h-1,c-n.lon[A]*h-1,2,2)}const[u,d]=[a-(t.latAccel||0)/yr*h,c-(t.longAccel||0)/yr*h];e.fillStyle="#ffc21a",e.beginPath(),e.arc(u,d,3.5,0,Math.PI*2),e.fill(),e.fillStyle="rgba(200,210,230,0.75)",e.fillText(`${(Math.hypot(t.latAccel||0,t.longAccel||0)/yr).toFixed(2)} g`,a-16,c+l+12);const f=t.loads||[0,0,0,0],g=f.reduce((y,A)=>y+Math.max(0,A),0)||1,v=t.tyreTemp||[22,22],[m,p,_,x]=[22,44,Oo-64,12];f.forEach((y,A)=>{const w=_+A%2*(m+12),T=x+(A<2?0:p+18),L=Math.min(1,Math.max(0,y)/g*2)*p;e.fillStyle="rgba(255,255,255,0.07)",e.fillRect(w,T,m,p),e.fillStyle=fE(v[A<2?0:1]),e.fillRect(w,T+p-L,m,L)}),e.fillStyle="rgba(200,210,230,0.75)",e.fillText(`${Math.round(v[0])}°`,_+10,x+p+12),e.fillText(`${Math.round(v[1])}°`,_+10,x+2*p+30)}}function mE(i,t,e){const n=new Set;for(const[s,r]of i){let o=null,a=1/0;for(const c of t){if(!(c.right>c.left)||s<c.left-e||s>c.right+e||r<c.top-e||r>c.bottom+e)continue;const l=(s-(c.left+c.right)/2)**2+(r-(c.top+c.bottom)/2)**2;l<a&&([o,a]=[c.name,l])}o&&n.add(o)}return n}const Mf=[["left","touch-left","◀"],["right","touch-right","▶"],["brake","touch-brake","BRAKE"],["handbrake","touch-drift","DRIFT"],["throttle","touch-gas","GAS"]],gE=[["pause","touch-pause","Ⅱ"],["camera","touch-camera","CAM"]],N0=()=>{var i;return typeof window<"u"&&(((i=window.matchMedia)==null?void 0:i.call(window,"(pointer: coarse)").matches)||"ontouchstart"in window)};class vE{constructor(t,e){this.held=Object.fromEntries(Mf.map(([s])=>[s,!1])),this.points=[],this.el=$t("div","touch"),t.appendChild(this.el),this.buttons=Mf.map(([s,r,o])=>({name:s,node:this._button(r,o)}));for(const[s,r,o]of gE)this._button(r,o).addEventListener("pointerdown",a=>(a.preventDefault(),e.trigger(s)));if("ontouchstart"in window){const s=r=>this._set(Array.from(r.touches,o=>[o.clientX,o.clientY]));for(const r of["touchstart","touchmove","touchend","touchcancel"])window.addEventListener(r,s,{passive:!0})}else this._pointers();const n=()=>this.releaseAll();window.addEventListener("blur",n),window.addEventListener("pagehide",n),document.addEventListener("visibilitychange",()=>document.hidden&&n()),document.body.classList.add("is-touch"),e.touch=this}releaseAll(){this._set([])}_button(t,e){const n=$t("button",`touch-btn ${t}`,e);return n.addEventListener("contextmenu",s=>s.preventDefault()),this.el.appendChild(n),n}_pointers(){const t=new Map,e=()=>this._set([...t.values()]);this.el.addEventListener("pointerdown",n=>(t.set(n.pointerId,[n.clientX,n.clientY]),e())),window.addEventListener("pointermove",n=>t.has(n.pointerId)&&(t.set(n.pointerId,[n.clientX,n.clientY]),e()));for(const n of["pointerup","pointercancel"])window.addEventListener(n,s=>t.delete(s.pointerId)&&e())}_set(t){this.points=t;const e=this.buttons.map(({name:s,node:r})=>{const o=r.getBoundingClientRect();return{name:s,left:o.left,top:o.top,right:o.right,bottom:o.bottom}}),n=mE(t,e,Rb.slop);for(const{name:s,node:r}of this.buttons)this.held[s]=n.has(s),r.classList.toggle("is-down",this.held[s])}}const xE=i=>`#${i.toString(16).padStart(6,"0")}`;class _E{constructor(t,e){this.root=$t("div","hud is-hidden"),document.body.appendChild(this.root),this.lap=new iE(this.root),this.standings=new dE(this.root),this.speedo=new rE(this.root),this.tyres=new cE(this.root),this.minimap=null,this.lights=new uE(this.root),this.toasts=new D0(this.root),this.telemetry=new pE(this.root),this.root.appendChild($t("div","hud-hint","<kbd>SPACE</kbd> drift &nbsp; <kbd>C</kbd> camera &nbsp; <kbd>T</kbd> telemetry &nbsp; <kbd>R</kbd> reset &nbsp; <kbd>ESC</kbd> pause")),N0()&&(this.touch=new vE(this.root,e)),this.mode="race",this.laps=5,this.visible=!1,this._dots=[],this._minimapShown=!0,t.on("go",()=>this.toasts.show("GO!",{kind:"go",time:1.1})),t.on("sector-flag",n=>this.lap.setSector(n)),t.on("countdown",()=>this.lap.clearSectors()),t.on("session",n=>this.toasts.show("QUALIFYING",{sub:`${Math.round(n/60*10)/10} MIN · YOUR BEST LAP SETS YOUR GRID SLOT`,kind:"go",time:2.6})),t.on("flag",()=>this.toasts.show("CHEQUERED FLAG",{sub:"FINISH YOUR LAP",kind:"go",time:2})),t.on("lap",n=>{const s=this.mode!=="timeattack"&&this.mode!=="quali";if(s&&n.lap>=this.laps)return;const r=n.isBest?n.delta==null?"FIRST LAP ON THE BOARD":`NEW BEST  ${Il(n.delta)}`:`LAP ${n.lap}  ${Il(n.delta)}`,o=s&&n.lap===this.laps-1;this.toasts.show(o?"FINAL LAP":Nn(n.time),{sub:o?`${Nn(n.time)}  ·  ${r}`:r,kind:o?"go":n.isBest?"best":""})}),t.on("finish",()=>this.mode!=="quali"&&this.toasts.show("CHEQUERED FLAG",{kind:"go",time:1.6})),t.on("overtake",n=>this.toasts.show(`P${n}`,{sub:`UP TO ${fa(n)}`,kind:"info",time:1})),t.on("reset",()=>this.toasts.show("KART RESET",{kind:"info",time:1.2})),t.on("camera",n=>this.toasts.show(`CAMERA · ${n.toUpperCase()}`,{kind:"info",time:1.2})),t.on("mute",n=>this.toasts.show(n?"SOUND OFF":"SOUND ON",{kind:"info",time:1.2}))}setVisible(t){var e;this.visible=t,t||(e=this.touch)==null||e.releaseAll(),this.root.classList.toggle("is-hidden",!t),t&&this.resize()}clearToasts(){this.toasts.clear()}resize(){this._minimapShown=!!this.minimap&&this.minimap.canvas.offsetParent!==null}setTrack(t,e,n){this.laps=n,this.minimap?this.minimap.setPath(t,e):this.minimap=new hE(this.root,t,e)}setMode(t){this.mode=t,this.standings.setVisible(t!=="timeattack")}update(t,e,n){if(!this.visible)return;const s=this.mode!=="timeattack";this.lap.update(t),this.speedo.update(e.telemetry.speed,e.draft),this.tyres.update(e.telemetry.tyreTemp),this.telemetry.update(e.telemetry),s&&this.standings.update(n.field,n.session.clock);const r=this.mode==="online"?n.online.others:s?n.rivals:[];this._minimapShown&&this.minimap.update(e.state,this._rivalDots(r)),this.lights.update(t)}_rivalDots(t){const e=this._dots;return e.length=t.length,t.forEach((n,s)=>{const r=e[s]??(e[s]={x:0,z:0,body:-1,color:""});r.body!==n.profile.body&&([r.body,r.color]=[n.profile.body,xE(n.profile.body)]),[r.x,r.z]=[n.kart.state.x,n.kart.state.z]}),e}}function ME(i,t,e){return{version:1,rounds:[...i],round:0,level:e,drivers:t.map(({code:n,name:s,color:r})=>({code:n,name:s,color:r,points:0,wins:0,podiums:0,finishes:[]})),results:[]}}const Ih=i=>i.round>=i.rounds.length,yE=i=>i.rounds[Math.min(i.round,i.rounds.length-1)],U0=(i,t=!1)=>(Bs.points[i-1]??0)+(t&&i<=Bs.points.length?Bs.fastestLap:0);function bE(i,t){const e=structuredClone(i);let n=null;for(const r of t)r.bestLap!=null&&(n===null||r.bestLap<n.bestLap)&&(n=r);const s={};return t.forEach((r,o)=>{const a=e.drivers.find(l=>l.code===r.code);if(!a)return;const c=U0(o+1,(n==null?void 0:n.code)===r.code);s[r.code]=c,a.points+=c,a.finishes.push(o+1),o===0&&a.wins++,o<3&&a.podiums++}),e.results.push({track:i.rounds[i.round],order:t.map(r=>r.code),fastest:(n==null?void 0:n.code)??null}),e.round++,{season:e,scored:s}}function O0(i){const t=(e,n)=>{for(let s=1;s<=12;s++){const r=n.finishes.filter(o=>o===s).length-e.finishes.filter(o=>o===s).length;if(r)return r}return 0};return[...i.drivers].sort((e,n)=>n.points-e.points||n.wins-e.wins||t(e,n)||e.name.localeCompare(n.name))}function Dh(i,t="YOU"){if(!i)return null;const e=O0(i),n=e.find(s=>s.code===t);return{round:i.round+1,of:i.rounds.length,position:e.indexOf(n)+1,points:(n==null?void 0:n.points)??0,done:Ih(i)}}function SE(i=globalThis.localStorage){try{const t=JSON.parse((i==null?void 0:i.getItem(Bs.key))??"null");return(t==null?void 0:t.version)===1&&Array.isArray(t.rounds)&&Array.isArray(t.drivers)?t:null}catch{return null}}function Nh(i,t=globalThis.localStorage){try{i?t==null||t.setItem(Bs.key,JSON.stringify(i)):t==null||t.removeItem(Bs.key)}catch{}}const wE=["","VICTORY","SECOND PLACE","PODIUM","SOLID DRIVE","KEEP PUSHING","BACK OF THE FIELD"];class EE{constructor(t){this.el=$t("div","screen screen-results",`<div class="res-card">
         <div class="title-kicker" data-ref="kicker">CHEQUERED FLAG</div>
         <h2 data-ref="place">–</h2>
         <div class="res-verdict" data-ref="verdict"></div>
         <table><thead><tr data-ref="head"></tr></thead>
           <tbody data-ref="rows"></tbody></table>
         <div class="res-actions" data-ref="quali" hidden>
           <button class="btn btn-primary" data-act="raceAgain">START THE RACE <kbd>ENTER</kbd></button>
           <button class="btn" data-act="replay">REPLAY <kbd>V</kbd></button>
           <button class="btn" data-act="quit">MENU <kbd>ESC</kbd></button>
         </div>
         <div class="res-actions" data-ref="champ" hidden>
           <button class="btn btn-primary" data-act="raceAgain">STANDINGS <kbd>ENTER</kbd></button>
           <button class="btn" data-act="replay">REPLAY <kbd>V</kbd></button>
           <button class="btn" data-act="quit">MENU <kbd>ESC</kbd></button>
         </div>
         <div class="res-actions" data-ref="solo">
           <button class="btn btn-primary" data-act="raceAgain">RACE AGAIN <kbd>ENTER</kbd></button>
           <button class="btn" data-act="nextRace">NEXT TRACK <kbd>N</kbd></button>
           <button class="btn" data-act="replay">REPLAY <kbd>V</kbd></button>
           <button class="btn" data-act="quit">MENU <kbd>ESC</kbd></button>
         </div>
         <div class="res-actions res-online" data-ref="online" hidden>
           <button class="btn btn-primary host-only" data-act="raceAgain">RACE AGAIN <kbd>ENTER</kbd></button>
           <button class="btn host-only" data-act="nextRace">NEXT TRACK <kbd>N</kbd></button>
           <div class="res-wait client-only">WAITING FOR THE HOST</div>
           <button class="btn" data-act="quit">LEAVE <kbd>ESC</kbd></button>
         </div>
       </div>`),document.body.appendChild(this.el),this.r=is(this.el),this.el.inert=!0;for(const e of this.el.querySelectorAll("[data-act]"))e.addEventListener("click",()=>t(e.dataset.act));this._key=""}setOnline(t){this.role=t,this.r.solo.hidden=!!t,this.r.online.hidden=!t,this.r.quali.hidden=this.r.champ.hidden=!0,this.el.firstElementChild.classList.toggle("is-host",t==="host")}show(t){Si(this.el,t),this._key=""}update(t,e="race"){const n=t.player,s=t.position(n),r=t.order.map(l=>`${l.code}${l.finishTime}${l.dnf}${l.bestLap}`).join()+t.final+e;if(r===this._key)return;this._key=r,this.role||(this.r.solo.hidden=e==="quali"||e==="champ",this.r.quali.hidden=e!=="quali",this.r.champ.hidden=e!=="champ");const o=e==="quali"?["POS","DRIVER","BEST LAP","GAP"]:["POS","DRIVER","TIME","BEST LAP",...e==="champ"?["PTS"]:[]];if(this.r.head.innerHTML=o.map(l=>`<th>${l}</th>`).join(""),Vt(this.r.kicker,e==="quali"?"QUALIFYING":"CHEQUERED FLAG"),e==="quali")return this._grid(t,s);for(const l of this.r.online.querySelectorAll(".host-only"))l.disabled=!t.final;Vt(this.r.place,fa(s)),this.r.place.className=s<=3?`is-p${s}`:"",Vt(this.r.verdict,wE[s]??"");const a=t.order[0];let c=null;for(const l of t.order)l.bestLap!=null&&(c===null||l.bestLap<c.bestLap)&&(c=l);this.r.rows.replaceChildren(...t.order.map((l,h)=>{const u=$t("tr",l.isPlayer?"is-player":""),d=Math.max(1,t.laps-(l.lapsDone??0)),f=t.final?`+${d} LAP${d>1?"S":""}`:"RUNNING",g=l.dnf?"DNF":l.finishTime===null?f:h===0?Nn(l.finishTime):da(l.finishTime-a.finishTime),v=e==="champ"?`<td>${U0(h+1,l===c)||"–"}</td>`:"";u.innerHTML=`<td>${h+1}</td><td><em></em></td><td>${g}</td><td>${Nn(l.bestLap)}</td>${v}`;const m=u.children[1];return m.firstChild.style.background=`#${l.color.toString(16).padStart(6,"0")}`,m.append(l.name),u}))}_grid(t,e){const n=t.player;Vt(this.r.place,n.bestLap==null?"NO TIME":`P${e}`),this.r.place.className=e<=3&&n.bestLap!=null?`is-p${e}`:"",Vt(this.r.verdict,n.bestLap==null?"YOU START FROM THE BACK":e===1?"POLE POSITION":`${fa(e)} ON THE GRID`);const s=t.order[0];this.r.rows.replaceChildren(...t.order.map((r,o)=>{const a=$t("tr",r.isPlayer?"is-player":""),c=r.bestLap==null?"NO TIME":o===0?"–":da(r.bestLap-s.bestLap);return a.innerHTML=`<td>${o+1}</td><td><em></em></td><td>${Nn(r.bestLap)}</td><td>${c}</td>`,a.children[1].firstChild.style.background=`#${r.color.toString(16).padStart(6,"0")}`,a.children[1].append(r.name),a}))}}const pa="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",qr=5,La=12,k0="tbc-kart.name",jn=6,TE=1.8,AE=Object.entries(Qn).map(([i,t])=>`<button data-level="${i}">${t.label}</button>`).join(""),RE=`
  <section class="lobby-panel lobby-choose" data-panel="choose">
    <h2>RACE FRIENDS</h2>
    <label class="lobby-name"><span>YOUR NAME</span>
      <input data-ref="name" maxlength="${La*2}" autocomplete="nickname" spellcheck="false" enterkeyhint="go"></label>
    <div class="lobby-options">
      <div class="lobby-option"><b>HOST A RACE</b><small>GET A CODE TO SHARE</small>
        <button class="btn btn-primary" data-do="create">CREATE ROOM <kbd>ENTER</kbd></button></div>
      <div class="lobby-option"><b>JOIN A FRIEND</b><small>TYPE THE ${qr}-CHARACTER CODE</small>
        <div class="lobby-join">
          <input data-ref="codeInput" placeholder="CODE" autocomplete="off" autocapitalize="characters"
            spellcheck="false" enterkeyhint="join" aria-label="Room code">
          <button class="btn" data-do="join" data-ref="joinBtn">JOIN</button></div></div>
    </div>
    <div class="res-actions"><button class="btn" data-do="back">BACK <kbd>ESC</kbd></button></div>
  </section>`,CE=`
  <section class="lobby-panel lobby-status" data-panel="status">
    <div class="lobby-spinner" data-ref="spinner"></div>
    <h2 data-ref="statusTitle"></h2>
    <p data-ref="statusText"></p>
    <div class="res-actions">
      <button class="btn btn-primary" data-do="retry" data-ref="retry">TRY AGAIN <kbd>ENTER</kbd></button>
      <button class="btn" data-do="leave" data-ref="cancel">BACK <kbd>ESC</kbd></button></div>
  </section>`,PE=`
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
      <div class="title-level lobby-level"><span>RIVALS</span>${AE}</div>
      <button class="btn btn-primary lobby-start host-only" data-do="start" data-ref="start">START RACE <kbd>ENTER</kbd></button>
      <div class="lobby-wait client-only">WAITING FOR THE HOST TO START</div>
      <button class="btn lobby-leave" data-do="leave">LEAVE ROOM <kbd>ESC</kbd></button>
    </div>
  </section>`,LE=`<div class="lobby-card"><div class="title-kicker">ONLINE RACE</div>${RE}${CE}${PE}</div>`;function Uh(i){return[...String(i??"").normalize("NFC").replace(/\s+/g," ").replace(/[\u0000-\u001f\u007f-\u009f<>]/g,"").replace(/^ /,"")].slice(0,La).join("")}function F0(i,t){return Uh(i).trim()||t}function z0(i=Math.random){return`Driver ${100+Math.floor(i()*900)}`}function B0(i){const t=String(i??""),e=t.match(/[?&]room=([A-Za-z0-9]+)/);return[...(e?e[1]:t).toUpperCase()].filter(s=>pa.includes(s)).slice(0,qr).join("")}const $o=i=>B0(i)===i&&i.length===qr;function IE(i,t){return`${i.origin}${i.pathname}?room=${t}`}function DE(i,t=Math.random){let e=null;try{e=i==null?void 0:i.getItem(k0)}catch{}return F0(e,z0(t))}function NE(i,t){try{i==null||i.setItem(k0,t)}catch{}}const yf=()=>typeof localStorage>"u"?null:localStorage;class UE{constructor(t){this.r=t,this.fallback=z0(),this.last=null,t.name.value=DE(yf()),t.name.addEventListener("input",()=>t.name.value=Uh(t.name.value)),t.codeInput.addEventListener("input",()=>this.setCode(t.codeInput.value))}setCode(t){const e=B0(t);this.r.codeInput.value!==e&&(this.r.codeInput.value=e),this.r.joinBtn.disabled=!$o(e)}get codeComplete(){return $o(this.r.codeInput.value)}submit(t,e){let n=this.r.codeInput.value;if(t==="retry")n=this.last?this.last.code:e,t=n?"join":"create";else if(t==="join"&&!$o(n))return this.r.codeInput.focus(),null;const s=F0(this.r.name.value,this.fallback);return this.r.name.value=s,NE(yf(),s),this.last=t==="join"?{code:n}:{},{action:t,code:n,name:s}}}const OE=[[12,31.6],[22,30.6],[31,27.3],[38.5,21.3],[43,12.8],[44,2.8],[41,-6.2],[36.8,-13.2],[34.6,-19.7],[34.2,-25.4],[32.38,-29.78],[28,-31.6],[23.62,-29.78],[21.8,-25.4],[21.8,-23.2],[19.98,-18.82],[15.6,-17],[8,-17.1],[-2,-17],[-12,-16.7],[-23,-15.5],[-32,-12.2],[-39,-5.7],[-43.5,3.8],[-41.8,12.8],[-34,18.8],[-26,21.8],[-18.5,27.1],[-10.5,27.2],[-3.5,25],[3.5,28.6]],kE={id:"tbc",name:"TBC Indoor",location:"Vancouver, Canada",inspiredBy:"TBC Indoor Racing — the home track",blurb:'The original hall layout: sweeper, the "ear" hairpin, a long back straight and a tight chicane.',laps:7,waypoints:OE,startIndex:0,samples:1e3,exempt:["radius","grid"]},FE=[[-66.76,30],[-68.99,18.41],[-69.58,9.64],[-69.39,3.15],[-68.91,-1.62],[-68.25,-5.18],[-66.58,-8.29],[-63.98,-10.6],[-60.7,-11.88],[-56.84,-12.42],[-51.64,-13.11],[-44.61,-14.05],[-35.09,-15.32],[-22.26,-17.03],[-10,-18.54],[-.96,-19.53],[5.75,-20.26],[10.72,-20.8],[14.58,-21.51],[17.95,-23.42],[20.42,-26.34],[21.74,-29.93],[21.75,-33.81],[20.51,-37.27],[18.96,-39.72],[18.17,-42.44],[18.36,-45.21],[19.49,-47.75],[21.44,-49.95],[24.07,-52.67],[26.48,-55.11],[29.18,-56.69],[32.31,-57.25],[35.39,-56.7],[38.13,-55.11],[40.13,-52.7],[41.59,-49.59],[42.93,-46.65],[43.92,-44.48],[44.84,-42.83],[46.25,-41.57],[47.96,-40.9],[49.8,-40.85],[51.59,-41.46],[53.01,-42.62],[53.96,-44.19],[54.42,-46.08],[54.92,-48.61],[55.54,-51.69],[56.03,-54.13],[56.77,-56.08],[58.13,-57.66],[60.01,-58.69],[62.07,-59],[64.61,-59],[67.49,-58.94],[70.19,-58.1],[72.4,-56.4],[73.89,-54.06],[74.49,-51.3],[74.5,-48.09],[74.31,-43.8],[73.31,-38.05],[70.67,-30.67],[64.91,-21.76],[54.43,-13.06],[41.28,-8.32],[28.49,-7.33],[18.91,-6.77],[11.82,-6.36],[6.58,-6.06],[2.69,-5.83],[-.2,-5.66],[-2.57,-5.1],[-4.6,-3.77],[-6.5,-1.75],[-8.35,.2],[-10.41,1.49],[-12.79,2],[-15.64,2],[-19.43,2],[-24.52,2],[-31.06,2],[-36.3,2],[-40.34,2.15],[-43.94,3.44],[-46.92,5.92],[-48.83,9.23],[-49.5,13.05],[-49.5,17.52],[-49.26,21.84],[-47.71,25.76],[-45.37,29.47],[-44.11,33.45],[-44,37.13],[-44.01,39.86],[-44.58,42.26],[-45.94,44.32],[-47.38,46.33],[-48.08,48.7],[-47.93,51.13],[-47.1,53.66],[-45.63,56.01],[-43.4,57.75],[-40.75,58.59],[-37.71,58.72],[-34.86,58.8],[-32.6,59.1],[-30.57,60.14],[-29.02,61.82],[-28.15,63.93],[-28.05,66.18],[-28.72,68.36],[-30.11,70.18],[-31.99,71.38],[-34.21,71.88],[-36.76,71.85],[-40.21,71.79],[-44.8,71.71],[-48.9,71.64],[-52.07,71.34],[-54.95,70.03],[-57.18,67.84],[-58.53,64.97],[-59.36,61.47],[-60.47,56.75],[-61.98,50.33],[-64,41.72]],zE={id:"monaco",name:"Monte Carlo",location:"Monaco",inspiredBy:"Circuit de Monaco",blurb:"Narrow streets, a walking-pace hairpin and a flat-out tunnel: touch the barriers and your race is over.",laps:3,waypoints:FE,startIndex:0,width:6},BE=[[18.14,38.1],[15.64,38.1],[-3.03,38.1],[-21.7,38.1],[-24.2,38.1],[-26.81,37.44],[-28.8,35.62],[-29.68,33.08],[-29.72,32.58],[-30.61,30.04],[-32.59,28.22],[-35.2,27.56],[-37.7,27.56],[-41.7,27.56],[-44.2,27.56],[-48.37,27.2],[-52.41,26.11],[-56.2,24.35],[-59.63,21.95],[-62.59,18.99],[-64.99,15.56],[-66.75,11.77],[-67.84,7.73],[-68.27,5.27],[-69.49,-1.63],[-69.92,-4.09],[-71.17,-6.92],[-73.58,-8.85],[-75.39,-9.7],[-77.32,-11.07],[-78.62,-13.05],[-79.6,-15.35],[-83.12,-23.63],[-84.09,-25.94],[-84.8,-29.08],[-84.36,-32.26],[-82.82,-35.09],[-80.39,-37.2],[-77.37,-38.32],[-74.91,-38.75],[-66.05,-40.31],[-63.59,-40.75],[-60.34,-40.69],[-57.36,-39.42],[-55.06,-37.13],[-53.66,-35.06],[-48.91,-28.01],[-44.16,-20.96],[-42.76,-18.89],[-41.2,-16.79],[-39.47,-14.83],[-37.73,-13.03],[-31.02,-6.07],[-24.3,.88],[-17.59,7.83],[-15.85,9.63],[-13.81,11.16],[-11.39,11.97],[-8.84,11.98],[-6.87,11.66],[-4.09,11.71],[-1.5,12.71],[.6,14.53],[1.86,16.08],[4.57,18.24],[7.94,19.05],[10.44,19.09],[25.58,19.36],[40.72,19.62],[55.86,19.89],[71,20.15],[73.5,20.19],[76.17,20.77],[78.41,22.33],[79.89,24.63],[80.38,27.31],[79.79,30.57],[78.2,33.47],[75.77,35.72],[72.75,37.08],[68.9,37.84],[64.98,38.1],[62.48,38.1],[47.7,38.1],[32.92,38.1]],HE={id:"monza",name:"Monza",location:"Italy",inspiredBy:"Autodromo Nazionale Monza",blurb:"Temple of speed: slipstream duels on two long straights, late braking into the Rettifilo and the Parabolica.",laps:5,waypoints:BE,startIndex:0,width:7},VE=[[-34.4,12.5],[-25.02,2.98],[-22.83,1.15],[-20.34,-.24],[-17.63,-1.13],[-14.8,-1.49],[-7.57,-1.71],[-4.64,-2.02],[-1.79,-2.75],[.92,-3.9],[3.44,-5.43],[8.03,-8.71],[10.32,-9.84],[12.85,-10.19],[15.37,-9.73],[17.61,-8.49],[19.35,-6.61],[20.4,-4.28],[21.23,-1.2],[22.51,1.15],[24.7,2.68],[27.35,3.06],[29.46,2.88],[32.14,1.94],[34.05,-.16],[34.74,-2.92],[34.72,-11.75],[34.47,-14.16],[33.73,-16.47],[32.55,-18.59],[30.97,-20.43],[29.05,-21.91],[19.08,-28.12],[9.1,-34.32],[-.88,-40.52],[-10.86,-46.73],[-13.58,-47.76],[-16.49,-47.67],[-19.15,-46.48],[-21.16,-44.36],[-22.21,-41.64],[-22.43,-40.36],[-23.28,-37.96],[-24.89,-35.99],[-27.07,-34.67],[-29.56,-34.15],[-32.09,-34.5],[-34.38,-35.68],[-36.12,-37.55],[-37.13,-39.9],[-37.3,-42.45],[-36.6,-44.91],[-31.62,-55.23],[-30.27,-57.4],[-28.5,-59.23],[-26.38,-60.65],[-24.01,-61.59],[-21.5,-62],[-10.16,-62.66],[1.19,-63.31],[12.53,-63.96],[23.87,-64.61],[26.72,-64.52],[29.5,-63.92],[32.14,-62.84],[34.55,-61.31],[36.64,-59.37],[38.36,-57.1],[39.65,-54.55],[40.46,-51.82],[42.45,-42.06],[44.43,-32.3],[45.19,-29.57],[46.33,-26.97],[47.98,-23.84],[49,-21.25],[49.45,-18.5],[49.31,-15.71],[48.85,-12.89],[48.72,-10.68],[49.05,-8.5],[49.82,-6.43],[50.67,-4.02],[50.92,-1.48],[50.54,1.04],[49.57,3.4],[48.05,5.45],[46.09,7.08],[45.25,7.62],[43.25,9.16],[41.53,11.01],[34.38,20.16],[27.23,29.32],[20.08,38.47],[12.93,47.63],[5.78,56.78],[3.8,58.78],[1.4,60.27],[-1.28,61.15],[-4.08,61.39],[-6.87,60.96],[-9.48,59.89],[-11.77,58.25],[-21.09,49.73],[-30.42,41.2],[-32.54,39.84],[-34.99,39.25],[-37.49,39.51],[-39.77,40.59],[-42.48,41.82],[-45.43,41.98],[-48.23,41.06],[-50.51,39.19],[-51.96,36.62],[-52.39,33.71],[-51.73,30.85],[-50.09,28.42],[-42.24,20.46]],GE={id:"silverstone",name:"Silverstone",location:"Great Britain",inspiredBy:"Silverstone Circuit",blurb:"Flat-out Copse, the Maggotts–Becketts snake and the long Hangar blast: fast, flowing, brave.",laps:3,waypoints:VE,startIndex:0},WE=[[-66.3,41.9],[-69.5,44.3],[-74.2,48],[-77.3,50.5],[-80.4,51.9],[-83.7,51.9],[-86.7,50.4],[-88.8,47.7],[-89.5,44.4],[-88.6,41.2],[-86.8,37.6],[-84.26,34.72],[-81.72,31.84],[-79.18,28.96],[-76.65,26.07],[-74.11,23.19],[-71.57,20.31],[-69.03,17.43],[-67.68,15.33],[-66.66,13.07],[-65.98,11.04],[-65.41,9.12],[-63.85,5.01],[-62.07,2.1],[-59.68,-.33],[-56.79,-2.16],[-52.71,-3.78],[-50.5,-4.56],[-48.05,-5.78],[-45.85,-7.4],[-44.14,-9.01],[-40.44,-12.78],[-36.9,-16.38],[-35.26,-17.9],[-33.49,-19.27],[-31.6,-20.46],[-29.6,-21.47],[-10.76,-29.93],[9.08,-38.84],[32.4,-49.3],[36,-51],[39.62,-52.71],[43.23,-54.42],[45.15,-55.27],[47.15,-55.86],[49.52,-55.94],[51.8,-55.32],[53.8,-54.05],[55.31,-52.75],[56.83,-51.45],[58.69,-50.36],[60.81,-49.99],[62.92,-50.4],[65.25,-51.31],[67.58,-52.22],[69.67,-52.75],[71.84,-52.77],[73.94,-52.28],[75.87,-51.3],[77.51,-49.88],[80.87,-46.18],[82.38,-44.49],[83.81,-42.73],[85.05,-40.83],[86,-38.77],[86.51,-36.57],[86.47,-34.31],[85.77,-32.16],[84.16,-30.18],[81.92,-28.97],[79.39,-28.72],[76.95,-29.45],[74.98,-31.07],[71.81,-34.94],[69.95,-36.6],[67.66,-37.61],[65.17,-37.86],[62.73,-37.33],[57.95,-35.48],[53.16,-33.62],[48.38,-31.77],[43.6,-29.91],[38.81,-28.06],[34.03,-26.2],[31.81,-24.95],[29.91,-23.26],[28.41,-21.21],[27.38,-18.89],[26.85,-16.4],[26.74,-13.22],[26.81,-11.22],[27.13,-7.87],[27.68,-5.7],[28.59,-3.65],[29.84,-1.79],[31.4,-.18],[33.21,1.15],[35.21,2.14],[38.42,3.17],[51.83,6.51],[56.2,7.6],[59.11,8.33],[61.72,9.28],[64.06,10.77],[65.8,12.9],[66.51,15.57],[66.33,18.34],[65.57,21.01],[64.84,23.67],[64.89,25.8],[65.69,27.79],[67.14,29.36],[69.51,30.77],[73.95,32.74],[78.39,34.72],[81.07,36.33],[82.67,38.14],[83.5,40.42],[83.44,42.84],[82.42,45.79],[81.32,48.03],[80.23,50.28],[78.48,53.08],[76.6,54.83],[74.27,55.89],[71.72,56.16],[68.46,55.64],[64.29,54.52],[60.66,53.24],[57.26,51.42],[54.18,49.1],[48.3,43.9],[38.6,32.4],[30.5,21.8],[21.3,15.8],[13,13.2],[8.53,12.29],[3.96,12.33],[-.49,13.31],[-4.65,15.19],[-8.78,17.59],[-12.91,20],[-17.03,22.4],[-21.16,24.81],[-25.29,27.21],[-29.41,29.62],[-31.13,30.57],[-32.95,31.29],[-34.89,31.55],[-36.84,31.3],[-38.66,30.6],[-40.39,29.66],[-42.13,28.67],[-44.73,27.47],[-46.57,27.3],[-48.36,27.76],[-50.75,29.36],[-54.9,32.7],[-59.05,36.05],[-63.2,39.4]],XE={id:"spa",name:"Spa",location:"Belgium",inspiredBy:"Circuit de Spa-Francorchamps",blurb:"The epic: flat out up Eau Rouge, slipstream down the Kemmel and brave Blanchimont into the Bus Stop.",laps:3,waypoints:WE,startIndex:0,width:6.5},qE=[[-36.08,28.7],[-34.25,33.93],[-29.71,46.92],[-25.17,59.92],[-24.19,61.74],[-22.68,63.16],[-20.8,64.03],[-18.75,64.27],[-16.72,63.85],[-14.93,62.82],[-12.06,60.48],[-10.4,59.48],[-8.53,58.97],[-6.58,58.99],[-4.72,59.55],[.22,61.81],[6.81,63.55],[13.6,62.98],[19.81,60.16],[24.71,55.42],[27.73,49.31],[31.96,35.02],[36.18,20.73],[40.41,6.45],[44.64,-7.84],[48.87,-22.12],[49.15,-24.28],[48.76,-26.42],[47.74,-28.34],[46.17,-29.85],[44.22,-30.8],[42.06,-31.11],[27.81,-30.92],[23.86,-30.29],[20.25,-28.57],[17.27,-25.9],[8.03,-14.88],[-1.2,-3.85],[-10.43,7.18],[-12.08,8.67],[-14.08,9.65],[-16.27,10.04],[-21.41,10.23],[-24.35,9.9],[-27.07,8.72],[-29.33,6.8],[-30.92,4.3],[-31.71,1.45],[-32.53,-5.27],[-32.47,-7.12],[-31.84,-8.86],[-30.72,-10.33],[-29.2,-11.39],[-27.43,-11.93],[-25.58,-11.91],[-23.83,-11.33],[-21.17,-9.96],[-19.44,-9.39],[-17.62,-9.35],[-15.87,-9.87],[-14.36,-10.88],[-13.22,-12.31],[-12.57,-14],[-12.45,-15.82],[-12.75,-18.3],[-13.96,-20.84],[-20.67,-27.46],[-26.94,-33.52],[-28.46,-35.51],[-29.35,-37.91],[-29.46,-40.01],[-28.92,-42],[-27.77,-43.72],[-26.15,-44.99],[-24.2,-45.69],[-22.14,-45.75],[-20.16,-45.16],[-18.47,-43.97],[-9.52,-35.3],[-6.44,-33.19],[-2.82,-32.24],[.9,-32.55],[4.3,-34.09],[7,-36.68],[12.24,-43.81],[17.49,-50.95],[18.5,-52.92],[18.85,-55.1],[18.5,-57.28],[17.48,-59.25],[15.91,-60.8],[13.92,-61.78],[10.17,-62.95],[2.04,-64.28],[-6.14,-63.36],[-16.24,-60.78],[-26.33,-58.2],[-32.75,-55.61],[-38.26,-51.42],[-42.46,-45.92],[-45.07,-39.5],[-48.72,-25.34],[-49.8,-15.14],[-47.87,-5.06],[-43.33,7.93],[-38.79,20.93]],$E={id:"interlagos",name:"Interlagos",location:"Brazil",inspiredBy:"Autódromo José Carlos Pace (Interlagos)",blurb:"Anticlockwise and old-school: a flat-out climb to the line, then a dive-bomb into the Senna S.",laps:3,waypoints:qE,startIndex:0},YE=[[-38,36.9],[-50.1,45.8],[-57.8,50],[-64.1,52.5],[-67.8,55],[-70.4,58.7],[-76.1,64.4],[-84.1,64.3],[-89.8,58.6],[-89.7,50.5],[-82.6,33.7],[-80.3,30.5],[-77,28.5],[-74.4,27.1],[-72.3,24.9],[-67.6,12.5],[-65.5,5.3],[-61.8,.3],[-56.5,-3],[-45.2,-8.3],[-41.9,-10.8],[-40.2,-14.5],[-40.3,-18.6],[-40.4,-23.2],[-38.7,-27.4],[-35.3,-30.4],[-22.4,-35.8],[-9,-41.3],[3.4,-45.1],[17,-47.8],[21.1,-47.6],[24.7,-45.7],[28.3,-43.8],[32.4,-43.6],[42.3,-46.1],[56.8,-52.9],[69.2,-58.7],[80,-63.9],[84.7,-64.4],[88.6,-61.6],[89.8,-57.1],[87.7,-52.8],[78.1,-43.7],[68.5,-34.5],[58.9,-25.4],[46.1,-14.9],[29.9,-3.2],[13.7,8.6],[2.3,16.8],[-1.8,18.6],[-6.4,18.5],[-10.9,18.4],[-15.1,20.2],[-27.7,29.4]],jE={id:"montreal",name:"Montréal",location:"Canada",inspiredBy:"Circuit Gilles Villeneuve",blurb:"Island blast: long straights, late braking into the hairpin and chicanes — and the Wall of Champions.",laps:4,waypoints:YE,startIndex:0,width:6.5},KE=[[-54.29,37.6],[-52.51,39.21],[-42.7,48.05],[-32.9,56.9],[-31.12,58.51],[-29.16,59.68],[-26.92,60.05],[-24.69,59.55],[-22.82,58.26],[-21.56,56.36],[-21.1,54.13],[-21.5,51.88],[-22.37,49.65],[-25.55,41.43],[-26.42,39.19],[-27,37.21],[-27.23,35.16],[-27.1,33.1],[-26.62,31.1],[-25.81,29.2],[-24.69,27.47],[-23.28,25.96],[-21.5,24.35],[-14.52,18.03],[-12.74,16.42],[-11.34,14.91],[-10.22,13.19],[-9.4,11.31],[-8.76,9.37],[-8.12,7.44],[-7.23,5.6],[-5.91,4.04],[-4.23,2.87],[-2.39,1.91],[-.62,.7],[.81,-.9],[1.82,-2.79],[2.36,-4.87],[2.58,-6.47],[2.79,-8.07],[3.01,-9.68],[3.61,-11.99],[4.74,-14.1],[6.34,-15.87],[8.32,-17.22],[10.56,-18.06],[12.93,-18.34],[15.31,-18.05],[17.55,-17.21],[19.51,-16.18],[21.48,-15.16],[23.64,-14.4],[25.93,-14.29],[28.15,-14.83],[30.14,-15.97],[31.71,-17.64],[32.98,-19.44],[34.25,-21.23],[35.72,-22.84],[37.56,-24.02],[39.63,-24.69],[41.81,-24.81],[43.95,-24.37],[45.91,-23.41],[47.55,-21.97],[48.48,-20.93],[49.41,-19.88],[51.22,-18.39],[53.41,-17.53],[55.76,-17.39],[58.03,-17.99],[60.1,-18.89],[62.17,-19.8],[64.24,-20.71],[66.29,-21.77],[68.18,-23.08],[69.9,-24.62],[71.4,-26.37],[72.84,-28.28],[81.03,-39.15],[89.21,-50.02],[90.66,-51.94],[91.69,-53.97],[91.95,-56.24],[91.42,-58.46],[90.15,-60.35],[88.31,-61.69],[86.11,-62.32],[83.84,-62.14],[81.51,-61.54],[67.66,-57.96],[53.8,-54.37],[39.95,-50.79],[26.09,-47.2],[12.24,-43.62],[-1.62,-40.04],[-15.47,-36.45],[-17.8,-35.85],[-19.82,-34.9],[-21.36,-33.26],[-22.18,-31.18],[-22.19,-28.94],[-21.38,-26.86],[-20.1,-24.82],[-16,-18.27],[-14.72,-16.24],[-13.83,-14.09],[-13.69,-11.77],[-14.32,-9.54],[-15.64,-7.63],[-17.52,-6.26],[-19.74,-5.58],[-21.69,-5.61],[-23.53,-6.22],[-25.11,-7.34],[-26.29,-8.88],[-27.45,-10.98],[-31.55,-18.38],[-32.71,-20.48],[-34.22,-22.28],[-36.3,-23.35],[-38.64,-23.54],[-39.29,-23.47],[-41.47,-22.78],[-43.23,-21.33],[-44.32,-19.32],[-44.59,-17.05],[-43.98,-14.85],[-42.92,-12.7],[-37.98,-2.72],[-36.91,-.57],[-36.12,1.65],[-35.88,3.99],[-36.18,6.32],[-37.02,8.52],[-37.92,10.23],[-39.22,12.13],[-40.92,13.69],[-42.93,14.81],[-45.15,15.45],[-47.45,15.56],[-49.15,15.44],[-51.42,15.02],[-53.53,14.09],[-55.37,12.71],[-56.84,10.94],[-57.87,8.88],[-58.69,6.63],[-60.77,.92],[-61.59,-1.34],[-62.58,-3.29],[-64.01,-4.94],[-65.79,-6.2],[-67.83,-6.99],[-70,-7.26],[-72.17,-7.01],[-74.21,-6.24],[-76.34,-5.13],[-81.26,-2.56],[-83.39,-1.45],[-85.18,-.11],[-86.46,1.72],[-87.09,3.87],[-87.02,6.1],[-86.25,8.2],[-84.85,9.94],[-83.07,11.55],[-74.07,19.7],[-65.07,27.84],[-56.07,35.99]],ZE={id:"austin",name:"Austin",location:"United States",inspiredBy:"Circuit of the Americas",blurb:"Storm uphill into the Turn 1 hairpin, snake through the esses, then draft down the huge back straight.",laps:3,waypoints:KE,startIndex:0},JE=[[20.48,30.58],[17.4,31.44],[7.98,34.07],[-1.44,36.69],[-4.53,37.55],[-7.41,37.87],[-10.25,37.25],[-12.74,35.76],[-14.63,33.56],[-16.29,30.82],[-22.77,20.19],[-29.24,9.55],[-35.71,-1.09],[-42.18,-11.73],[-43.84,-14.46],[-45.07,-16.35],[-46.39,-18.16],[-47.82,-19.9],[-49.38,-21.71],[-50.95,-23.51],[-52.56,-25.89],[-53.56,-28.59],[-53.89,-31.44],[-53.53,-34.29],[-52.51,-36.37],[-50.73,-37.84],[-48.5,-38.45],[-47.24,-38.52],[-44.96,-38.58],[-42.67,-38.51],[-40.39,-38.31],[-37.22,-37.94],[-23.84,-36.39],[-10.46,-34.83],[2.91,-33.27],[6.09,-32.9],[8.78,-32.09],[11.02,-30.41],[12.54,-28.05],[13.16,-25.31],[12.79,-22.53],[11.49,-20.05],[8.82,-17.52],[5.9,-16.34],[2.74,-16.24],[-.42,-16.71],[-8.59,-17.91],[-11.75,-18.37],[-14.93,-18.33],[-17.94,-17.29],[-20.47,-15.36],[-22.26,-12.73],[-23.13,-9.67],[-23.01,-6.49],[-21.89,-3.52],[-20.42,-.96],[-18.96,1.6],[-17.5,4.16],[-15.5,6.47],[-12.78,7.87],[-9.74,8.15],[-6.81,7.26],[-4.43,5.34],[-3.77,4.55],[-2.16,2.89],[-.32,1.48],[1.69,.36],[4.01,-.73],[6.32,-1.81],[8.4,-2.61],[10.58,-3.12],[12.8,-3.31],[16,-3.37],[30.05,-3.64],[44.1,-3.9],[47.3,-3.96],[50.13,-3.65],[52.79,-2.61],[55.09,-.93],[56.89,1.29],[58.05,3.9],[58.9,6.76],[59.76,9.63],[60.15,12.62],[59.59,15.57],[58.13,18.2],[55.93,20.25],[53.19,21.5],[50.11,22.36],[36.84,26.04],[23.56,29.72]],QE={id:"spielberg",name:"Spielberg",location:"Austria",inspiredBy:"Red Bull Ring",blurb:"Short and punchy: three big straights, three big stops, and the Remus hairpin begging for a late lunge.",laps:5,waypoints:JE,startIndex:0},tT=[[76.94,-14],[75.32,-27.15],[73.7,-40.29],[73,-42.53],[71.56,-44.37],[69.55,-45.58],[67.25,-46],[66.64,-46],[64.44,-46.36],[62.46,-47.39],[60.91,-48.99],[58.03,-53.1],[56.53,-54.6],[54.6,-55.48],[52.48,-55.63],[50.15,-54.94],[48.36,-53.46],[47.26,-51.43],[47.02,-49.12],[47.76,-40.71],[48.18,-38.04],[48.96,-35.45],[52.97,-24.76],[53.79,-21.95],[54.2,-19.06],[54.47,-14.92],[54.23,-12.57],[53.22,-10.43],[51.55,-8.75],[49.43,-7.73],[47.08,-7.47],[30.41,-8.44],[13.75,-9.42],[11.43,-9.69],[9.16,-10.23],[6.97,-11.04],[4.88,-12.09],[-7.36,-19.19],[-19.61,-26.3],[-22.03,-27.12],[-24.58,-26.95],[-26.86,-25.8],[-28.53,-23.87],[-31.58,-18.46],[-33.13,-16.66],[-35.27,-15.61],[-37.64,-15.46],[-39.88,-16.25],[-49.99,-22.29],[-52.62,-23.21],[-55.4,-23.04],[-57.89,-21.79],[-59.7,-19.66],[-65.83,-8.57],[-71.96,2.52],[-78.09,13.61],[-78.94,15.63],[-79.32,17.78],[-79.46,19.89],[-79.01,22.62],[-77.38,24.85],[-74.93,26.12],[-73.64,26.44],[-71.54,27.43],[-69.97,29.13],[-69.17,31.3],[-68.68,34.35],[-67.81,37.11],[-66.18,39.5],[-59.6,46.7],[-57.71,48.13],[-55.43,48.79],[-53.07,48.58],[-50.94,47.55],[-49.33,45.82],[-48.43,43.63],[-45.6,29.87],[-42.77,16.11],[-39.94,2.35],[-38.99,.13],[-37.24,-1.53],[-34.97,-2.37],[-32.55,-2.24],[-30.38,-1.17],[-17.14,9.14],[-14.87,10.53],[-12.36,11.38],[-9.21,12.08],[-7.15,12.97],[-5.55,14.55],[-4.65,16.6],[-3.5,21.62],[-2.42,23.93],[-.47,25.58],[1.98,26.27],[16.7,27.18],[19.52,26.66],[21.78,24.89],[22.97,22.28],[23.53,19.25],[24.72,16.63],[26.99,14.86],[29.83,14.36],[34.1,14.64],[36.22,15.18],[38.01,16.45],[39.22,18.27],[39.7,20.4],[39.8,22.98],[40.29,25.14],[41.53,26.98],[43.36,28.24],[45.52,28.75],[57.11,29.28],[68.7,29.8],[71.3,29.49],[73.66,28.36],[75.53,26.52],[79.14,21.55],[80.42,18.85],[80.61,15.87],[78.78,.93]],eT={id:"singapore",name:"Marina Bay",location:"Singapore",inspiredBy:"Marina Bay Street Circuit",blurb:"Night street fight: blocky 90° corners, the Anderson Bridge hairpin and a dash under the floating grandstand.",laps:3,waypoints:tT,startIndex:0},bf=[kE,zE,HE,GE,XE,$E,jE,ZE,QE,eT],nT=i=>{const t=Sl[i.id];return t?{...i,name:t.name,location:t.system,blurb:t.blurb}:i},iT=oe?bf.map(nT):bf,Ue=iT.filter(i=>Array.isArray(i.waypoints)),hr=i=>Ue.find(t=>t.id===i)??Ue[0],Sf=(i,t)=>i*1048576+t;class sT{constructor(t,{samples:e,spacing:n=.25,width:s,spline:r="centripetal"}){const o=t.map(([u,d])=>new R(u,0,d)),a=new ba(o,!0,r);this.length=a.getLength();const c=e??Math.max(200,Math.round(this.length/n));this.count=c,this.spacing=this.length/c,this.halfWidth=s/2,[this.x,this.z]=[new Float32Array(c),new Float32Array(c)],[this.tx,this.tz]=[new Float32Array(c),new Float32Array(c)],this.curvature=new Float32Array(c);const[l,h]=[new R,new R];for(let u=0;u<c;u++){a.getPointAt(u/c,l),a.getTangentAt(u/c,h);const d=Math.hypot(h.x,h.z)||1;[this.x[u],this.z[u],this.tx[u],this.tz[u]]=[l.x,l.z,h.x/d,h.z/d]}for(let u=0;u<c;u++){const d=this.wrap(u-3),f=this.wrap(u+3),g=this.tx[d]*this.tz[f]-this.tz[d]*this.tx[f];this.curvature[u]=Math.asin(Math.max(-1,Math.min(1,g)))/(6*this.spacing)}}wrap(t){return(t%this.count+this.count)%this.count}offset(t,e,n={}){return n.x=this.x[t]-this.tz[t]*e,n.z=this.z[t]+this.tx[t]*e,n}lateral(t,e,n){return(t-this.x[n])*-this.tz[n]+(e-this.z[n])*this.tx[n]}nearest(t,e,n=-1,s=80){let r=-1,o=1/0;const a=(c,l)=>{for(let h=c;h<=l;h++){const u=this.wrap(h),d=(this.x[u]-t)**2+(this.z[u]-e)**2;d<o&&([r,o]=[u,d])}};return n>=0&&a(n-s,n+s),(r<0||o>(this.halfWidth*3)**2)&&a(0,this.count-1),r}within(t,e,n){if(!(n>0))return!1;const s=this._cells(n),[r,o]=[Math.floor(t/n),Math.floor(e/n)],a=n*n;for(let c=-1;c<=1;c++)for(let l=-1;l<=1;l++){const h=s.get(Sf(r+c,o+l));if(h){for(const u of h)if((this.x[u]-t)**2+(this.z[u]-e)**2<a)return!0}}return!1}_cells(t){this._grids??(this._grids=new Map);let e=this._grids.get(t);if(!e){e=new Map;for(let n=0;n<this.count;n++){const s=Sf(Math.floor(this.x[n]/t),Math.floor(this.z[n]/t)),r=e.get(s);r?r.push(n):e.set(s,[n])}this._grids.set(t,e)}return e}heading(t){return Math.atan2(-this.tx[t],-this.tz[t])}}const rT=1e-9;function oT(i,t,e,n,s,r,o,a){const c=e-i,l=n-t,h=o-s,u=a-r,d=c*u-l*h;if(Math.abs(d)<rT)return null;const f=((s-i)*u-(r-t)*h)/d,g=((s-i)*l-(r-t)*c)/d;return f<0||f>1||g<0||g>1?null:{x:i+c*f,z:t+l*f}}function aT(i,t){const e=i.length,n=[];let s=0;for(;s<e;){const r=i[s],o=i[(s+1)%e];n.push(r);let a=!1;for(let c=s+2;c<Math.min(s+t,e-1);c++){const l=i[c],h=i[(c+1)%e],u=oT(r.x,r.z,o.x,o.z,l.x,l.z,h.x,h.z);if(u){n.push({...u,i:r.i}),s=c+1,a=!0;break}}a||s++}return n}function H0(i,t,e,n=90){const s=[];for(let c=0;c<i.count;c++)s.push({...i.offset(c,t),i:c});const r=aT(s,n),o=[];let a=[];for(const c of r)i.within(c.x,c.z,e)?a.length&&(o.push(a),a=[]):a.push(c);return a.length&&o.push(a),o.length===1&&o[0].length===r.length?o[0].closed=!0:o.length>1&&o[0][0]===r[0]&&a.length&&a.at(-1)===r.at(-1)&&(o[0]=o.pop().concat(o[0])),o}const V0=i=>i.halfWidth+.35;function G0(i){return[-1,1].flatMap(t=>H0(i,t*(i.halfWidth+Pa),V0(i)))}function W0(i){const t=i.halfWidth+Pa+es/2;return[-1,1].flatMap(e=>H0(i,e*t,V0(i)))}function X0(i,t=0){let e=1/0,n=-1/0,s=1/0,r=-1/0;for(const o of i)for(const a of o)e=Math.min(e,a.x),n=Math.max(n,a.x),s=Math.min(s,a.z),r=Math.max(r,a.z);return e-=t,n+=t,s-=t,r+=t,{minX:e,maxX:n,minZ:s,maxZ:r,width:n-e,depth:r-s,cx:(e+n)/2,cz:(s+r)/2}}function q0(i,t=.5){const e=[{x:i.minX+t,z:i.minZ+t},{x:i.maxX-t,z:i.minZ+t},{x:i.maxX-t,z:i.maxZ-t},{x:i.minX+t,z:i.maxZ-t}];return e.closed=!0,e}function Dl(i,t,e){const n=Th+Math.floor(e/2)*Dn.rowGap+e%2*(Dn.rowGap/2),s=i.wrap(t-Math.round(n/i.spacing)),r=i.offset(s,(e%2?1:-1)*Dn.lateral);return{x:r.x,z:r.z,yaw:i.heading(s),i:s}}const Oh=i=>new sT(i.waypoints,{samples:i.samples,spacing:Sw,width:i.width??Ew,spline:ww}),ko=[168,112],qc=new Map;function cT(i){if(!qc.has(i.id)){const t=Oh(i);qc.set(i.id,{path:t,startIndex:t.nearest(...i.waypoints[i.startIndex])})}return qc.get(i.id)}function lT(i,t,e,n){const s=hr(typeof n=="object"&&n?n.id:n),{path:r,startIndex:o}=cT(s),a=Math.min(2,window.devicePixelRatio||1);i.width=ko[0]*a,i.height=ko[1]*a;const c=i.getContext("2d");c.scale(a,a),Lh(c,r,o,ko[0],ko[1],12,{band:.22,line:.9,minBand:5}),Vt(t,s.name.toUpperCase()),Vt(e,`${s.location.toUpperCase()} · ${Math.round(r.length)} M · ${s.laps} LAPS`)}async function hT(i,t){try{return await navigator.clipboard.writeText(i),"copied"}catch{}t.focus(),t.select(),t.setSelectionRange(0,i.length);try{if(document.execCommand("copy"))return"copied"}catch{}return"selected"}class uT{constructor(t,e,n){this.r=e,this.levels=[...t.querySelectorAll(".lobby-room [data-level]")];for(const s of this.levels)s.addEventListener("click",()=>n(s.dataset.level));[this.rowsKey,this.track,this.copyTimer]=["",null,0]}render(t,e){var a;const n=this.r;Vt(n.roomCode,t.code);const s=t.code?IE(window.location,t.code):"";n.link.value!==s&&(n.link.value=s),Vt(n.count,t.count),Vt(n.aiNote,t.aiNote),n.start.disabled=!t.canStart;for(const c of this.levels)c.classList.toggle("is-selected",c.dataset.level===e.level),c.disabled=!t.isHost;const r=typeof e.track=="object"?(a=e.track)==null?void 0:a.id:e.track;r!==this.track&&(this.track=r,lT(n.map,n.trackName,n.trackFacts,r));const o=JSON.stringify(t.rows);o!==this.rowsKey&&(this.rowsKey=o,n.players.replaceChildren(...t.rows.map(dT)))}async copy(){const t=this.r,e=await hT(t.link.value,t.link);t.copy.textContent=e==="copied"?"COPIED ✓":"SELECTED",clearTimeout(this.copyTimer),this.copyTimer=setTimeout(()=>t.copy.textContent="COPY LINK",TE*1e3)}}function dT(i){const t=$t("li",i.ai?"is-ai":i.you?"is-you":""),e=$t("em");i.ai||(e.style.background=i.color);const n=$t("span","lp-num");n.textContent=i.ai?"":`#${i.number}`;const s=$t("span","lp-name");s.textContent=i.name,i.host&&s.append($t("i","lp-tag lp-host","HOST")),i.you&&s.append($t("i","lp-tag lp-you","YOU"));const r=$t("span","lp-code");return r.textContent=i.ai?"AI":i.code,t.append(e,n,s,r),t}const fT={"not-found":{title:"ROOM NOT FOUND",text:"No room with that code is open. Check the code, or ask the host for the link.",retry:!0},full:{title:"ROOM FULL",text:`That room already has ${jn} drivers.`,retry:!0},version:{title:"VERSION MISMATCH",text:"You and the host are running different versions. Both reload the page, then try again.",retry:!1},network:{title:"CONNECTION FAILED",text:"Couldn't reach the online service. Check your connection and try again.",retry:!0},timeout:{title:"NO ANSWER",text:"The room didn't answer in time. Check your connection and try again.",retry:!0},taken:{title:"CODE TAKEN",text:"That room code is already in use. Try again for a fresh one.",retry:!0},racing:{title:"RACE IN PROGRESS",text:"That room is mid-race. Join again when it's back in the lobby.",retry:!0},closed:{title:"HOST LEFT",text:"The host closed the room.",retry:!1},lost:{title:"CONNECTION LOST",text:"Lost touch with the host. The room may still be open: try joining again.",retry:!0},offline:{title:"YOU'RE OFFLINE",text:"Online racing needs an internet connection. Reconnect, then try again.",retry:!0}},pT={title:"SOMETHING WENT WRONG",text:"The connection failed. Try again.",retry:!0};function mT(i){const t=typeof i=="string"?i:i==null?void 0:i.reason,e=fT[t]??pT,n=typeof i=="object"?i==null?void 0:i.message:null;return{...e,text:n||e.text}}function gT(i=[],t=null){const e=i.slice(0,jn).map(n=>({id:n.id,name:n.name,code:n.code??"",number:n.number??"",color:vT(n.livery),host:!!n.host,you:n.id===t,ai:!1}));for(;e.length<jn;)e.push({id:`ai${e.length}`,name:"AI RIVAL",ai:!0});return e}function vT(i){const t=typeof i=="object"&&i!==null?i.body:i;return typeof t=="number"?`#${t.toString(16).padStart(6,"0")}`:typeof t=="string"&&t?t:"#9aa3b2"}const wf=(i,t)=>`${i} ${t}${i===1?"":"S"}`;function xT(i){var r;const t=i.phase??"choose",e=Math.min(((r=i.players)==null?void 0:r.length)??0,jn),n=jn-e,s={title:i.room&&!i.isHost?`JOINING ${i.room}`:"CREATING ROOM",text:"Connecting…",retry:!1};return{panel:t==="connecting"||t==="error"?"status":t,status:t==="error"?{...mT(i.error),busy:!1}:{...s,busy:!0},code:i.room??"",rows:gT(i.players,i.you),count:`${e} / ${wf(jn,"DRIVER")}`,aiNote:n?`AI FILLS THE ${wf(n,"EMPTY SLOT")}`:"FULL GRID",isHost:!!i.isHost,canStart:!!i.isHost&&e>=1}}function _T(i,{focus:t,codeComplete:e,isHost:n,canStart:s,canRetry:r}={}){return i==="choose"?t==="code"?e?"join":null:t==="name"?"create":e?"join":"create":i==="error"?r?"retry":"leave":i==="room"&&n&&s?"start":null}const MT=i=>i==="choose"?"back":"leave";function yT(i){return t=>{if(!i.visible||(t.stopPropagation(),t.repeat||t.isComposing))return;const e=t.target;if(t.key==="Escape")t.preventDefault(),i.do(MT(i.state.phase));else if(t.key==="Enter"&&(e==null?void 0:e.tagName)!=="BUTTON"){t.preventDefault();const n=i.r,s=_T(i.state.phase,{focus:e===n.name?"name":e===n.codeInput?"code":null,codeComplete:$o(n.codeInput.value),isHost:i.view.isHost,canStart:i.view.canStart,canRetry:i.view.status.retry});s&&i.do(s)}}}class bT{constructor(t={}){this.on=t,this.el=$t("div","screen screen-lobby",LE),document.body.appendChild(this.el),Si(this.el,!1),this.visible=!1,this.r=is(this.el),this.panels=[...this.el.querySelectorAll("[data-panel]")],this.choose=new UE(this.r),this.room=new uT(this.el,this.r,e=>{var n,s;return(s=(n=this.on).onLevel)==null?void 0:s.call(n,e)});for(const e of this.el.querySelectorAll("[data-do]"))e.addEventListener("click",()=>this.do(e.dataset.do));window.addEventListener("keydown",yT(this),!0),this.render({phase:"choose"})}bind(t){this.on={...this.on,...t}}open(t=""){this.choose.setCode(t),this.render({phase:"choose"}),this.show(!0),N0()||this.r.name.focus()}show(t){this.visible=t,Si(this.el,t),!t&&this.el.contains(document.activeElement)&&document.activeElement.blur()}render(t){this.state=t;const e=this.view=xT(t);for(const r of this.panels)r.hidden=r.dataset.panel!==e.panel;const n=this.el.firstElementChild;n.classList.toggle("is-host",e.isHost),n.classList.toggle("is-room",e.panel==="room");const{r:s}=this;s.statusTitle.textContent=e.status.title,s.statusText.textContent=e.status.text,s.spinner.hidden=!e.status.busy,s.retry.hidden=!e.status.retry,s.cancel.firstChild.textContent=e.status.busy?"CANCEL ":"BACK ",e.panel==="room"&&this.room.render(e,t)}do(t){var n,s,r,o,a;if(t==="create"||t==="join"||t==="retry"){const c=this.choose.submit(t,this.state.room);(c==null?void 0:c.action)==="create"?(s=(n=this.on).onCreate)==null||s.call(n,c.name):c&&((o=(r=this.on).onJoin)==null||o.call(r,c.code,c.name));return}const e={start:()=>{var c,l;return this.view.canStart&&((l=(c=this.on).onStart)==null?void 0:l.call(c))},leave:()=>{var c,l;return(l=(c=this.on).onLeave)==null?void 0:l.call(c)},back:()=>{var c,l;return(l=(c=this.on).onBack)==null?void 0:l.call(c)},prevTrack:()=>{var c,l;return(l=(c=this.on).onTrack)==null?void 0:l.call(c,-1)},nextTrack:()=>{var c,l;return(l=(c=this.on).onTrack)==null?void 0:l.call(c,1)},copy:()=>this.room.copy()};(a=e[t])==null||a.call(e)}}class ST{constructor(t){this.el=$t("div","screen screen-online-pause",`<div class="op-card">
         <div class="title-kicker op-kicker">ONLINE RACE</div>
         <p>THE RACE GOES ON WITHOUT YOU</p>
         <div class="res-actions">
           <button class="btn btn-primary" data-act="pause">RESUME <kbd>ESC</kbd></button>
           <button class="btn" data-act="quit">LEAVE RACE <kbd>Q</kbd></button>
         </div>
       </div>`),document.body.appendChild(this.el),this.show(!1);for(const e of this.el.querySelectorAll("[data-act]"))e.addEventListener("click",()=>t(e.dataset.act))}show(t){this.visible=t,Si(this.el,t)}}class wT{constructor(t,e){this.el=$t("div","title-level title-gfx",`<span>GRAPHICS</span>${Object.entries(Ur).map(([n,s])=>`<button data-gfx="${n}" class="${n===zs?"is-selected":""}">${s.label}</button>`).join("")}<kbd>G</kbd>`),t.insertBefore(this.el,e);for(const n of this.el.querySelectorAll("[data-gfx]"))n.addEventListener("click",()=>this.pick(n.dataset.gfx))}cycle(){const t=Object.keys(Ur);this.pick(t[(t.indexOf(zs)+1)%t.length])}pick(t){if(t===zs)return;try{localStorage.setItem(Gp,t)}catch{}const e=new URL(window.location.href);e.searchParams.set("gfx",t),window.location.replace(e.toString())}}const ET=i=>`#${i.toString(16).padStart(6,"0")}`;class TT{constructor(t){this.el=$t("div","screen screen-results screen-season",`<div class="res-card">
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
       </div>`),document.body.appendChild(this.el),this.r=is(this.el),this.el.inert=!0,this.visible=!1;for(const e of this.el.querySelectorAll("[data-act]"))e.addEventListener("click",()=>t(e.dataset.act))}show(t,e=null,n={},s=[]){var u;if(this.visible=t,Si(this.el,t),!t||!e)return;const r=Ih(e),o=O0(e),a=o.findIndex(d=>d.code==="YOU")+1,c=o[0],l=o[a-1];Vt(this.r.kicker,r?"CHAMPIONSHIP · FINAL STANDINGS":`CHAMPIONSHIP · AFTER ROUND ${e.round} / ${e.rounds.length}`),Vt(this.r.place,r&&a===1?"CHAMPION":fa(a)),this.r.place.className=a<=3?`is-p${a}`:"";const h=c.points-l.points;Vt(this.r.verdict,a===1?r?"YOU ARE THE CHAMPION":`LEADING BY ${l.points-(((u=o[1])==null?void 0:u.points)??0)} PTS`:`${h} PTS BEHIND ${c.name.toUpperCase()}`),Vt(this.r.next,""),this.r.next.append(r?"NEW SEASON ":`NEXT · ${(s[e.round]??"").toUpperCase()} `,Object.assign(document.createElement("kbd"),{textContent:"ENTER"})),this.r.fresh.hidden=r,this.r.rows.replaceChildren(...o.map((d,f)=>{const g=$t("tr",d.code==="YOU"?"is-player":""),v=n[d.code];return g.innerHTML=`<td>${f+1}</td><td><em></em></td><td>${v?`+${v}`:"–"}</td><td><b>${d.points}</b></td><td>${d.wins}</td>`,g.children[1].firstChild.style.background=ET(d.color),g.children[1].append(d.name),g}))}}const ma=2,AT=oe?"tbcnova-":"tbckart-",kh=8,RT=8192,CT=20,PT=20,LT=8,IT=2,Ef=5e3,$c=100,DT=1,NT=5,UT=.1,OT=16,kT=3,$0=3,Y0=15,FT=2,zT=.25,BT=.1,HT=.35,VT=32,GT=.06,Tf=.1,WT=3,XT=1,qT=20,$T=.25,YT=1.5,Nl={body:16761370,suit:1914199,stripe:15087942,number:"07"},Ul=[{body:16054011,suit:2303274,stripe:15087942,number:"2"},{body:2282478,suit:730437,stripe:16777215,number:"3"},{body:16736162,suit:2829634,stripe:16777215,number:"44"},{body:10215773,suit:1786674,stripe:1118481,number:"63"},{body:1914199,suit:16054011,stripe:16761370,number:"77"}],jT=2e3,KT=.5,ZT=.05,JT=.4,QT=.12,tA=6,j0=3,eA=.5,nA=[["<kbd>W</kbd><kbd>↑</kbd>","throttle"],["<kbd>S</kbd><kbd>↓</kbd>","brake · reverse"],["<kbd>A</kbd><kbd>D</kbd>","steer"],["<kbd>SPACE</kbd>","handbrake drift"],["<kbd>C</kbd>","camera"],["<kbd>R</kbd>","reset kart"],["<kbd>M</kbd>","sound"],["<kbd>ESC</kbd>","pause"]],Es=[["race","GRAND PRIX",i=>`${i} LAPS · ${kn.length} RIVALS · SLIPSTREAM & CONTACT`],["champ","CHAMPIONSHIP",(i,t)=>K0(t)],["timeattack","TIME ATTACK",()=>"SOLO HOT LAPS · RACE YOUR BEST-LAP GHOST"],["online","ONLINE",()=>"RACE FRIENDS · ROOM CODE · UP TO 6 PLAYERS"]],Fo=[168,112];function K0(i){return i?i.done?`SEASON OVER · ${i.position===1?"CHAMPION":`P${i.position}`} · ${i.points} PTS · GO AGAIN`:`ROUND ${i.round} / ${i.of} · YOU P${i.position} · ${i.points} PTS`:`${Ue.length} ROUNDS · QUALIFYING + RACE · POINTS`}class iA{constructor(t){this.mode="race",this.title=$t("div","screen screen-title is-visible",`<div>
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
         <div class="title-modes">${Es.map(([n,s])=>`<button class="mode" data-mode="${n}"><b>${s}</b><small data-sub="${n}"></small></button>`).join("")}</div>
         <div class="title-level"><span>RIVALS</span>${Object.entries(Qn).map(([n,s])=>`<button data-level="${n}">${s.label}</button>`).join("")}<kbd>L</kbd><span class="title-aids">AIDS</span>${Object.entries(Br).map(([n,s])=>`<button data-aid="${n}">${s.label}</button>`).join("")}<kbd>I</kbd></div>
         <div class="title-press"><span class="key-hint">PRESS <kbd>ENTER</kbd> TO RACE · <kbd>↑</kbd><kbd>↓</kbd> TRACK · <kbd>←</kbd><kbd>→</kbd> MODE</span><span class="tap-hint">PICK A TRACK · TAP A MODE TO RACE</span></div>
         <div class="title-best" data-ref="best"></div>
         <div class="title-controls">${nA.map(([n,s])=>`<span>${n} ${s}</span>`).join("")}</div>
       </div>`),this.pause=$t("div","screen screen-pause",`<div><h2>PAUSED</h2>
         <div class="res-actions">
           <button class="btn btn-primary" data-act="pause">RESUME <kbd>ESC</kbd></button>
           <button class="btn" data-act="reset">RESTART <kbd>R</kbd></button>
           <button class="btn" data-act="quit">MENU <kbd>Q</kbd></button>
         </div>
         <p><kbd>C</kbd> camera &nbsp; <kbd>M</kbd> sound</p></div>`),document.body.append(this.title,this.pause),Si(this.pause,!1),this.results=new EE(t),this.season=new TT(t),this.seasonSummary=null,this.lobby=new bT(sA(this)),this.onlinePause=new ST(t);const e=$t("div","hud notice-layer");document.body.appendChild(e),this.notices=new D0(e),this.r=is(this.title),this.modeButtons=[...this.title.querySelectorAll("[data-mode]")];for(const n of this.modeButtons)n.addEventListener("click",()=>{this.setMode(n.dataset.mode),t("start")});for(const n of[...this.pause.querySelectorAll("[data-act]"),...this.title.querySelectorAll("[data-act]")])n.addEventListener("click",()=>t(n.dataset.act));this.setMode("race")}setTrack(t,e,n,s,r,o){const a=this.r,c=Math.min(2,window.devicePixelRatio||1);a.map.width=Fo[0]*c,a.map.height=Fo[1]*c;const l=a.map.getContext("2d");l.scale(c,c),Lh(l,e,n,Fo[0],Fo[1],12,{band:.22,line:.9,minBand:5}),Vt(a.count,`${oe?"WORLD":"TRACK"} ${s+1} / ${r}`),Vt(a.name,t.name.toUpperCase()),Vt(a.facts,`${t.location.toUpperCase()} · ${Math.round(e.length)} M · ${t.laps} LAPS`),Vt(a.blurb,t.blurb);const h=oe?"HOME WORLD · THE TBC LAYOUT":"VANCOUVER HOME TRACK";Vt(a.meta,t.id==="tbc"?h:`${oe?"LAYOUT":"INSPIRED BY"} ${t.inspiredBy.toUpperCase()}`);for(const[u,,d]of Es)Vt(this.title.querySelector(`[data-sub="${u}"]`),d(t.laps,this.seasonSummary));this.setBest(o)}addGraphicsPicker(){const t=this.title.querySelector(".title-level");this.graphics=new wT(t.parentNode,t.nextSibling)}bindAids(t,e){this.aidButtons=[...this.title.querySelectorAll("[data-aid]")];for(const n of this.aidButtons)n.addEventListener("click",()=>e(this.setAids(n.dataset.aid)));this.setAids(t)}setAids(t){this.aids=t;for(const e of this.aidButtons)e.classList.toggle("is-selected",e.dataset.aid===t);return t}cycleAids(){const t=Object.keys(Br);return this.setAids(t[(t.indexOf(this.aids)+1)%t.length])}bindLevels(t,e){this.levelButtons=[...this.title.querySelectorAll("[data-level]")];for(const n of this.levelButtons)n.addEventListener("click",()=>e(this.setLevel(n.dataset.level)));this.setLevel(t)}setLevel(t){this.level=t;for(const e of this.levelButtons)e.classList.toggle("is-selected",e.dataset.level===t);return t}cycleLevel(){const t=Object.keys(Qn);return this.setLevel(t[(t.indexOf(this.level)+1)%t.length])}setMode(t){this.mode=t;for(const e of this.modeButtons)e.classList.toggle("is-selected",e.dataset.mode===t)}cycleMode(t=1){const e=Es.findIndex(([n])=>n===this.mode);this.setMode(Es[(e+t+Es.length)%Es.length][0])}openLobby(t){this.showTitle(!1),this.lobby.open(t)}closeLobby(){this.lobby.show(!1),this.showTitle(!0)}showTitle(t){Si(this.title,t)}showPause(t){Si(this.pause,t)}showOnlinePause(t){this.onlinePause.show(t)}showResults(t){this.results.show(t)}showSeason(t,e,n,s){(t||this.season.visible)&&this.season.show(t,e,n,s)}setSeason(t){this.seasonSummary=t,Vt(this.title.querySelector('[data-sub="champ"]'),K0(t))}notify(t,e=""){this.notices.show(t,{sub:e,kind:"info",time:j0})}update(t){t.session.state==="finished"&&this.results.update(t.field,t.session.mode)}setBest(t){Vt(this.r.best,t?`BEST LAP  ${Nn(t)}`:"NO LAP TIME YET — SET THE BENCHMARK")}}function sA(i){return{onBack:()=>i.closeLobby(),onLeave:()=>i.lobby.render({phase:"choose"})}}class rA{constructor(){this.el=$t("pre","debug"),document.body.appendChild(this.el),this.visible=!1,this._fps=60,this._stats=null}async toggle(){this.visible=!this.visible,this.el.classList.toggle("is-visible",this.visible),this.visible,this._stats&&(this._stats.dom.style.display=this.visible?"block":"none")}update(t,e){var o;if((o=this._stats)==null||o.update(),!this.visible)return;this._fps=.92*this._fps+.08*(1/Math.max(t,1/240));const n=e.kart.telemetry,s=e.kart.state,r=e.renderer.three.info.render;this.el.textContent=[`fps      ${this._fps.toFixed(0)}   calls ${r.calls}   tris ${r.triangles}`,`state    ${e.session.state}   camera ${e.camera.mode}/${e.camera.view}`,`speed    ${(n.speed*3.6).toFixed(1)} km/h   fwd ${n.forwardSpeed.toFixed(2)} m/s`,`slip     ${n.slip.toFixed(2)} m/s   β ${(n.slipAngle*180/Math.PI).toFixed(0)}°   drift ${n.drift.toFixed(2)}   ${n.sliding?"SLIDING":""}`,`accel    long ${n.longAccel.toFixed(1)}   lat ${n.latAccel.toFixed(1)} m/s²`,`pos      ${s.x.toFixed(1)}, ${s.z.toFixed(1)}   track #${e.trackIndex}`].join(`
`)}}const Af=(i,t)=>(i+4096)*8192+(t+4096);class Z0{constructor(t,e){this.cell=e,this.segs=[],this.grid=new Map,this.contact={x:0,z:0,nx:0,nz:0};for(const n of t){const s=n.closed?n.length:n.length-1;for(let r=0;r<s;r++){const o=n[r],a=n[(r+1)%n.length];this._insert(o.x,o.z,a.x,a.z)}}this._stamp=new Uint32Array(this.segs.length/4),this._frame=0}_insert(t,e,n,s){const r=this.segs.length/4;this.segs.push(t,e,n,s);const o=this.cell;for(let a=Math.floor(Math.min(t,n)/o);a<=Math.floor(Math.max(t,n)/o);a++)for(let c=Math.floor(Math.min(e,s)/o);c<=Math.floor(Math.max(e,s)/o);c++){const l=Af(a,c);this.grid.has(l)||this.grid.set(l,[]),this.grid.get(l).push(r)}}resolve(t,e,n,s){this._frame++;let r=0;const o=Math.floor(t.x/this.cell),a=Math.floor(t.z/this.cell);for(let c=-1;c<=1;c++)for(let l=-1;l<=1;l++){const h=this.grid.get(Af(o+c,a+l));if(h)for(const u of h)this._stamp[u]!==this._frame&&(this._stamp[u]=this._frame,r=Math.max(r,this._collide(u*4,t,e,n,s)))}return r}_collide(t,e,n,s,r){const o=this.segs,a=o[t+2]-o[t],c=o[t+3]-o[t+1],l=Math.max(0,Math.min(1,((e.x-o[t])*a+(e.z-o[t+1])*c)/(a*a+c*c||1e-9))),h=o[t]+a*l,u=o[t+1]+c*l,d=Math.hypot(e.x-h,e.z-u);if(d>=n||d<1e-6)return 0;const[f,g]=[(e.x-h)/d,(e.z-u)/d];[e.x,e.z]=[h+f*n,u+g*n];const v=e.vx*f+e.vz*g;if(v>=0)return 0;const[m,p]=[e.vx-v*f,e.vz-v*g],_=Math.hypot(m,p),x=_>1e-9?Math.max(0,1-r*(1+s)*-v/_):0,y=m*x,A=p*x;return e.vx=y-v*s*f,e.vz=A-v*s*g,Object.assign(this.contact,{x:h,z:u,nx:f,nz:g}),-v}}const J0=i=>{const{width:t,height:e}=i,n=i.getContext("2d").getImageData(0,0,t,e).data,s=new Float32Array(t*e);for(let r=0;r<t*e;r++)s[r]=(.2126*n[r*4]+.7152*n[r*4+1]+.0722*n[r*4+2])/255;return{lum:s,w:t,h:e}};function Fh(i,t=2,e=1){let{lum:n,w:s,h:r}=J0(i);for(let h=0;h<e;h++){const u=new Float32Array(s*r);for(let d=0;d<r;d++)for(let f=0;f<s;f++){let g=0;for(let v=-1;v<=1;v++)g+=n[d*s+(f+v+s)%s]+n[(d+v+r)%r*s+f];u[d*s+f]=g/6}n=u}const{canvas:o,ctx:a}=Ve(s,r),c=a.createImageData(s,r),l=(h,u)=>n[(u+r)%r*s+(h+s)%s];for(let h=0;h<r;h++)for(let u=0;u<s;u++){const d=(l(u+1,h)-l(u-1,h))*t,f=(l(u,h+1)-l(u,h-1))*t,g=Math.hypot(d,f,1),v=(h*s+u)*4;c.data[v]=(-d/g*.5+.5)*255,c.data[v+1]=(f/g*.5+.5)*255,c.data[v+2]=(1/g*.5+.5)*255,c.data[v+3]=255}return a.putImageData(c,0,0),o}function zh(i,t,e){const{lum:n,w:s,h:r}=J0(i),{canvas:o,ctx:a}=Ve(s,r),c=a.createImageData(s,r);for(let l=0;l<s*r;l++){const h=Math.round(255*Math.min(1,Math.max(0,t+(e-t)*n[l])));c.data.set([h,h,h,255],l*4)}return a.putImageData(c,0,0),o}const Yc=new Map,Ai=(i,t)=>(Yc.has(i)||Yc.set(i,t()),Yc.get(i)),Ia=(i,t)=>ni(Ai(i,t)),Js=(i,t)=>ni(Ai(i,t),{colour:!1}),oA=()=>Ia("concrete",Ol),aA=()=>Ia("asphalt",kl),cA=(i="#d7263d")=>Ia(`wall${i}`,()=>tm(i)),lA=()=>({normalMap:Js("concreteN",()=>Fh(Ai("concrete",Ol),1.6,2)),roughnessMap:Js("concreteR",()=>zh(Ai("concrete",Ol),.62,.22))}),hA=()=>({normalMap:Js("asphaltN",()=>Fh(Ai("asphalt",kl),3.2,1)),roughnessMap:Js("asphaltR",()=>zh(Ai("asphalt",kl),.97,.72))}),uA=(i="#d7263d")=>({normalMap:Js(`wallN${i}`,()=>Fh(Ai(`wall${i}`,()=>tm(i)),5,2))}),dA=()=>Ia("barrier",Q0),fA=()=>({roughnessMap:Js("barrierR",()=>zh(Ai("barrier",Q0),.75,.4))});function Q0(){const{canvas:e,ctx:n}=Ve(512,256);n.fillStyle="#ffffff",n.fillRect(0,0,512,256),Ks(n,512,256,{count:30,minR:20,maxR:90,alpha:.05,seed:41});let s=7;const r=()=>(s=s*16807%2147483647)/2147483647,o=n.createLinearGradient(0,256*.5,0,256);o.addColorStop(0,"rgba(30,30,32,0)"),o.addColorStop(1,"rgba(30,30,32,0.16)"),n.fillStyle=o,n.fillRect(0,0,512,256),n.filter="blur(10px)";for(let a=0;a<14;a++)n.fillStyle=`rgba(25,25,28,${.04+r()*.08})`,n.beginPath(),n.ellipse(r()*512,256*(.62+r()*.3),30+r()*90,6+r()*12,(r()-.5)*.2,0,Math.PI*2),n.fill();return n.filter="none",Wr(n,512,256,8,42),e}function Ol(){const{canvas:t,ctx:e}=Ve(1024,1024);return e.fillStyle="#74767b",e.fillRect(0,0,1024,1024),Ks(e,1024,1024,{count:70,minR:60,maxR:260,alpha:.07,seed:11}),Ks(e,1024,1024,{count:160,minR:10,maxR:60,alpha:.05,seed:12}),aa(e,1024,1024,{count:7e3,color:"rgba(40,42,46,0.35)",minR:.5,maxR:1.5,seed:13}),aa(e,1024,1024,{count:2500,color:"rgba(200,202,206,0.25)",minR:.5,maxR:1.2,seed:14}),Wr(e,1024,1024,14,15),e.fillStyle="rgba(30,31,34,0.85)",e.fillRect(0,0,1024,3),e.fillRect(0,0,3,1024),e.fillStyle="rgba(255,255,255,0.08)",e.fillRect(0,3,1024,1),e.fillRect(3,0,1,1024),t}function kl(){const{canvas:e,ctx:n}=Ve(512,512);n.fillStyle="#3d4047",n.fillRect(0,0,512,512),Ks(n,512,512,{count:40,minR:30,maxR:140,alpha:.06,seed:21}),aa(n,512,512,{count:9e3,color:"rgba(120,124,132,0.35)",minR:.4,maxR:1.1,seed:22}),aa(n,512,512,{count:5e3,color:"rgba(15,16,18,0.4)",minR:.4,maxR:1.2,seed:23}),Wr(n,512,512,18,24);const s=n.createLinearGradient(0,0,0,512);return s.addColorStop(.18,"rgba(0,0,0,0)"),s.addColorStop(.5,"rgba(0,0,0,0.08)"),s.addColorStop(.82,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,512,512),e}function tm(i){const{canvas:s,ctx:r}=Ve(512,1280),o=8;for(let a=0;a<o;a++){const c=a*512/o,l=r.createLinearGradient(c,0,c+512/o,0);l.addColorStop(0,"#4a5059"),l.addColorStop(.45,"#6b727d"),l.addColorStop(.55,"#5a616b"),l.addColorStop(1,"#434851"),r.fillStyle=l,r.fillRect(c,0,512/o,1280)}return Ks(r,512,1280,{count:30,minR:40,maxR:200,alpha:.08,seed:31}),Wr(r,512,1280,10,32),r.fillStyle="#16181c",r.fillRect(0,1280-1.4*128,512,1.4*128),r.fillStyle=i,r.fillRect(0,1280-1.85*128,512,.45*128),r.fillStyle="rgba(255,255,255,0.85)",r.fillRect(0,1280-1.95*128,512,.06*128),s}const ga='"Chakra Petch", "Arial Narrow", Impact, sans-serif',pA=" ";function Fl(i,t,e,n,s,r){for(let o=0;o*r<n;o++)for(let a=0;a*r<s;a++)i.fillStyle=(o+a)%2?"#101114":"#f2f2f2",i.fillRect(t+o*r,e+a*r,r,r)}function mA({title:i,sub:t,color:e}){const{canvas:n,ctx:s}=Ve(1024,256);return Mh(n,()=>{const r=s.createLinearGradient(0,0,0,256);r.addColorStop(0,"#1c1f26"),r.addColorStop(1,"#0f1115"),s.fillStyle=r,s.fillRect(0,0,1024,256),s.fillStyle=e,s.beginPath(),[[0,0],[70,0],[30,256],[0,256]].forEach(([o,a])=>s.lineTo(o,a)),s.fill(),s.fillStyle="#ffffff",s.font=`italic 700 118px ${ga}`,s.fillText(i,96,150),s.fillStyle=e,s.font=`600 44px ${ga}`,s.fillText(t.split("").join(pA),100,212),Fl(s,896,0,128,256,32)})}function gA(){const{canvas:i,ctx:t}=Ve(1024,160);return Mh(i,()=>{t.fillStyle="#0f1115",t.fillRect(0,0,1024,160),Fl(t,0,0,160,160,40),Fl(t,864,0,160,160,40),t.fillStyle="#ffffff",t.font=`italic 700 92px ${ga}`,t.textAlign="center",t.textBaseline="middle",t.fillText("START · FINISH",512,84)})}function vA(){const{canvas:i,ctx:t}=Ve(2048,512);return Mh(i,()=>{t.clearRect(0,0,2048,512),t.fillStyle="rgba(255,255,255,0.9)",t.font=`italic 700 330px ${ga}`,t.textAlign="center",t.textBaseline="middle",t.fillText("TBC KART",1024,230),t.fillStyle="rgba(230,57,70,0.95)",t.fillRect(250,430,1548,26)},'700 200px "Chakra Petch"')}const em=7,zo=10,xA=4,Rf=8,Cf=12,Pf=8.8,rn={width:3.4,depth:.6,y:7.9,spacingX:12,spacingZ:10,intensity:9,color:16054527},Ts={y:3.2,thickness:.08,colors:[58879,16722902],intensity:2.6},_A=[{title:"TBC KART",sub:"INDOOR RACING",color:"#e63946"},{title:"LAP ATTACK",sub:"BEAT YOUR BEST",color:"#ffc21a"},{title:"FULL THROTTLE",sub:"SINCE 2026",color:"#22c3ee"},{title:"RACE HARD",sub:"RACE CLEAN",color:"#f4f4f4"}],MA=[12,3],yA=5.6,nm=i=>new Kt({map:i,transparent:!0,roughness:.6,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});function zl(i,t,e,n=0){return i.rotation.x=-Math.PI/2,i.position.set(t,n,e),i.receiveShadow=!0,i}const bA=(i,t)=>{for(const e of Object.values(i))[e.repeat,e.anisotropy]=[t.repeat.clone(),t.anisotropy];return i};function SA(i,t){const e=new Xt,n=oA();n.repeat.set(i.width/Rf,i.depth/Rf),n.anisotropy=t;const s=Je.detail?bA(lA(),n):{},r=new Kt({map:n,roughness:1,metalness:.02,...s});Je.detail||(r.roughness=.5),s.normalMap&&r.normalScale.set(.35,.35),e.add(zl(new pt(new Pe(i.width,i.depth),r),i.cx,i.cz));const o=dS(),a=.35,c=1.5,l=[[i.width-2*c,i.cx,i.minZ+c,0],[i.width-2*c,i.cx,i.maxZ-c,0],[i.depth-2*c,i.minX+c,i.cz,Math.PI/2],[i.depth-2*c,i.maxX-c,i.cz,Math.PI/2]];for(const[h,u,d,f]of l){const g=o.clone();g.repeat.set(h/1.4,1),g.needsUpdate=!0;const v=zl(new pt(new Pe(h,a),nm(g)),u,d,.004);v.rotation.z=f,e.add(v)}return e}function wA(i,t,e){const n=new pt(new Pe(e,e/4),nm(vA()));return n.material.opacity=.8,zl(n,i,t,.006)}function Qs(i,t,e,n,s,{closed:r=!1,uPerMetre:o=1,alpha:a=null}={}){const c=t.length,l=new Float32Array(c*6),h=new Float32Array(c*4),u=a?new Float32Array(c*8).fill(1):null,d={},f={};let g=0;for(let _=0;_<c;_++){const x=t[_];_>0&&(g+=i.spacing*o),i.offset(x,typeof e=="function"?e(x):e,d),i.offset(x,typeof n=="function"?n(x):n,f),l.set([d.x,s,d.z,f.x,s,f.z],_*6),h.set([g,0,g,1],_*4),u&&(u[_*8+3]=u[_*8+7]=a(_,x))}const v=[],m=r?c:c-1;for(let _=0;_<m;_++){const x=_*2,y=(_+1)%c*2;v.push(x,x+1,y,x+1,y+1,y)}const p=new de;return p.setAttribute("position",new ce(l,3)),p.setAttribute("uv",new ce(h,2)),u&&p.setAttribute("color",new ce(u,4)),p.setIndex(v),p.computeVertexNormals(),p}const im=i=>Array.from({length:i.count},(t,e)=>e),jc=(i={})=>new Kt({color:13948116,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,...i}),Bl=i=>(i.receiveShadow=!0,i);function Lf(i,t,...e){const n=new Xt;return n.position.set(i.x[t],Ca+.002,i.z[t]),n.rotation.y=i.heading(t),n.add(...e),n}function Bo(i,t,e,n=0,s=0){const r=Bl(new pt(new Pe(i,t),e));return r.rotation.x=-Math.PI/2,r.position.set(n,0,s),r}function sm(i,t,e,n,s=null){const r=new Xt,o=i.halfWidth,a=im(i),c=aA();c.anisotropy=n;const l=Qs(i,a,-o,o,w0,{closed:!0,uPerMetre:1/Tw}),h=Je.detail?hA():{};for(const _ of Object.values(h))_.anisotropy=n;const u=new Kt({map:c,roughness:h.roughnessMap?1:.86,...h});h.normalMap&&u.normalScale.set(.9,.9),s&&Object.assign(u,{color:new lt(s.surface),metalness:.2,emissive:new lt(s.glow??0)}),r.add(Bl(new pt(l,u)));const d=s?jc({color:0,emissive:s.line,emissiveIntensity:1.3}):jc();for(const _ of[-1,1]){const x=_*(o-Rl),y=_*(o-Rl-Aw),A=Qs(i,a,Math.min(x,y),Math.max(x,y),Ca,{closed:!0});r.add(Bl(new pt(A,d)))}const f=Math.round(o*2/.6),g=jc({map:hS(f,2),color:16777215});r.add(Lf(i,t,Bo(o*2,kw,g)));const[v,m,p]=[1.7,2.4,.1];return r.add(Lf(i,e,Bo(v,p,d,0,-m/2),Bo(p,m,d,-v/2,0),Bo(p,m,d,v/2,0))),r}function rm(i,t=null){const e=Ah(i),n=u=>T0(i,u),s={uPerMetre:1/(2*Dw)},r=Ca+.004,o=E0(i).map(({side:u,indices:d})=>u>0?Qs(i,d,e,n,r,s):Qs(i,d,f=>-n(f),-e,r,s)),a=t?Qd(t.a,t.b):Qd(Nw,Uw),c=t?{emissive:16777215,emissiveMap:a,emissiveIntensity:.9,metalness:.4}:{},l=new Kt({map:a,...c,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),h=new pt(lr(o),l);return h.receiveShadow=!0,h}const Ho=512,Vi=128,If=.3,Df=(i,t)=>Math.exp(-(i*i)/(2*t*t));function EA(){const{canvas:i,ctx:t}=Ve(Ho,Vi),e=ar(41),n=Array.from({length:Vi},()=>.55+e()*.45),s=n.map((r,o)=>(n[Math.max(0,o-1)]+n[o]*2+n[Math.min(Vi-1,o+1)])/4);for(let r=0;r<Vi;r++){const o=(r+.5)/Vi,a=Math.sin(Math.PI*o)**1.8,c=Df(o-.5-If,.085)+Df(o-.5+If,.085),l=Math.min(1,a*(.55+.5*c)*s[r]),h=Math.round(l*255);t.fillStyle=`rgb(${h},${h},${h})`,t.fillRect(0,r,Ho,1)}return Ks(t,Ho,Vi,{count:26,minR:20,maxR:70,alpha:.28,seed:42}),Wr(t,Ho,Vi,30,43),ni(i,{colour:!1})}const Nf=Qp*ph,TA=Nf*Vr*Gr/(1+Nf*gl/cr);function AA(i,t){const e=e0*Vr+s0*i*i/In;return(t.throttle||0)*h0(i)-(t.brake||0)*TA-e}function RA(i,t,{dt:e=1/60,laps:n=2}={}){const s=Ph(i,t),r={ahead:ee.planAhead,maxSpeed:ee.maxSpeed},o=i.count,a=new Float32Array(o),c=new Float32Array(o),l=new Float32Array(o);let h=0,u=5;for(;h<i.length*n;){const d=i.wrap(Math.floor(h/i.spacing)),f=Rh(u,Ch(s,i,d,u,r));u=Math.max(.5,u+AA(u,f)*e),h+=u*e,!(h<i.length*(n-1))&&([a[d],c[d],l[d]]=[a[d]+e,c[d]+f.brake*e,l[d]+u*e])}for(let d=0;d<o;d++)a[d]&&([c[d],l[d]]=[c[d]/a[d],l[d]/a[d]]);for(let d=0;d<o;d++)a[d]||([c[d],l[d]]=[c[i.wrap(d-1)],l[i.wrap(d-1)]]);return{brake:c,speed:l}}function CA(i,{minBrake:t,minDrop:e,mergeGap:n},{brake:s,speed:r}){const o=i.count,a=u=>s[i.wrap(u)];let c=0;for(;c<o&&a(c)>0;)c++;if(c===o)return[];const l=Math.round(n/i.spacing),h=[];for(let u=c+1;u<c+o;u++){if(!(a(u)>0))continue;let[d,f]=[u,0];for(let v=u;v<c+o&&v-d<=l;v++)a(v)>0&&([d,f]=[v,Math.max(f,a(v))]);const g=r[i.wrap(u)]-r[i.wrap(d+1)];f>=t&&g>=e&&h.push({start:i.wrap(u),end:i.wrap(d),drop:g,peak:f}),u=d}return h}function PA(i,t,e){const n=[];for(let s=t;;s=i.wrap(s+1))if(n.push(s),s===e||n.length>=i.count)return n}const Uf=(i,t,e)=>{const n=ft((e-i)/(t-i),0,1);return n*n*(3-2*n)};function LA(i,t,e){const n=Math.round(1/i.spacing);return e.map(s=>{let r=0;for(let o=-n;o<=n;o++)r+=t[i.wrap(s+o)];return r/(2*n+1)})}function IA(i,t,e,n,s,r){const o=t.length,a=.5+.5*s(),c=s()*6,l=f=>{const g=f/Math.max(1,o-1),v=.75+.25*Math.sin(c+g*23)*Math.sin(g*9.7+c*2),m=ft(.2+1.3*e[f],0,1);return a*v*m*Uf(0,.1,g)*(1-Uf(.85,1,g))},h=(s()-.5)*.25,u=(f,g)=>n(g)+h*(f/Math.max(1,o-1)),d=new Map(t.map((f,g)=>[f,g]));return Qs(i,t,f=>u(d.get(f),f)-Ki.width/2,f=>u(d.get(f),f)+Ki.width/2,r,{alpha:l})}function DA(i,t){return CA(i,Ki,t).map(e=>PA(i,e.start,e.end))}function NA(i,t,e){const n=ar(i.count),s=RA(i,t),r=[];for(const c of DA(i,s)){if(c.length<8)continue;const l=LA(i,s.brake,c);for(let h=0;h<Ki.streaks;h++){const u=(n()-.5)*2*Ki.spread,d=Math.floor(n()*c.length*.15),f=c.length-Math.floor(n()*c.length*.15);if(!(f-d<6))for(const g of[-1,1]){const v=m=>t[m]+u+g*(Ki.rearTrack/2);r.push(IA(i,c.slice(d,f),l.slice(d,f),v,n,e))}}}const o=new Kt({color:460552,roughness:.7,opacity:Ki.opacity,transparent:!0,depthWrite:!1,vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-1.5,polygonOffsetUnits:-1.5}),a=new pt(r.length?lr(r):new de,o);return a.receiveShadow=!0,a.renderOrder=1,a}function UA(i,t=5){const e=i.count,n=Math.max(1,Math.round(t/i.spacing)),s=new Float32Array(e);let r=0;for(let o=-n;o<=n;o++)r+=Math.abs(i.curvature[i.wrap(o)]);for(let o=0;o<e;o++)s[o]=ft(r/(2*n+1)*7,0,1),r+=Math.abs(i.curvature[i.wrap(o+n+1)])-Math.abs(i.curvature[i.wrap(o-n)]);return s}function OA(i,t){const e=new Xt,n=i.halfWidth-Rl*.5,s=d=>ft(t[d]-fi.width/2,-n,n),r=d=>ft(t[d]+fi.width/2,-n,n),o=UA(i),a=(d,f)=>1-fi.cornerBoost+fi.cornerBoost*o[f],c=(w0+Ca)/2,l=Qs(i,im(i),s,r,c,{closed:!0,uPerMetre:1/fi.tile,alpha:a}),h=new Kt({color:fi.color,roughness:fi.roughness,alphaMap:EA(),opacity:fi.opacity,transparent:!0,depthWrite:!1,vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),u=new pt(l,h);return u.receiveShadow=!0,u.renderOrder=1,e.add(u,NA(i,t,c+.001)),e}const kA=[[.52,-.5],[.52,.5],[-.52,-.56],[-.52,.56]];class om{constructor(t,e,n){Object.assign(this,{path:t,line:e,curbs:n}),this.rubber=Vc.rubberStart}addDistance(t){this.rubber=Math.min(1,this.rubber+t/(this.path.length*Vc.rubberLaps))}at(t,e){const n=Vc,s=Math.abs(e-this.line[t]),r=n.green+(1-n.green)*this.rubber,o=n.lineGain*this.rubber*Math.exp(-((s/n.lineWidth)**2)),a=n.dust*Me(n.dustFrom,n.dustFull,s),c=this.curbs.side[t],l=c&&e*c>=this.curbs.inner[t]&&e*c<=this.curbs.outer[t]+.1?n.kerb:1;return r*(1+o-a)*l}wheels(t,e,n){const s=this.path,[r,o]=[-Math.sin(t.yaw),-Math.cos(t.yaw)];for(let a=0;a<4;a++){const[c,l]=kA[a],h=t.x+r*c-o*l,u=t.z+o*c+r*l,d=(h-s.x[e])*s.tx[e]+(u-s.z[e])*s.tz[e],f=s.wrap(e+Math.round(d/s.spacing));n[a]=this.at(f,s.lateral(h,u,f))}return n}}function am(i,{lineEdge:t,lineMax:e}){const n=i.count,s=Math.max(0,Math.min(e,i.halfWidth-t));let r=new Float64Array(n);for(const o of FA){const a=Math.max(8,Math.round(i.length/o)),c=Array.from({length:a},(g,v)=>Math.round(v*n/a)%n),l=Float64Array.from(c,g=>r[g]),[h,u]=[new Float64Array(a),new Float64Array(a)],d=g=>{const v=c[g];[h[g],u[g]]=[i.x[v]-i.tz[v]*l[g],i.z[v]+i.tx[v]*l[g]]};for(let g=0;g<a;g++)d(g);const f=g=>(g+a)%a;for(let g=0;g<zA;g++)for(let v=0;v<a;v++){const[m,p,_,x]=[f(v-2),f(v-1),f(v+1),f(v+2)],y=(4*(h[p]+h[_])-h[m]-h[x])/6,A=(4*(u[p]+u[_])-u[m]-u[x])/6,w=i.lateral(y,A,c[v]);l[v]=Math.max(-s,Math.min(s,l[v]+BA*(w-l[v]))),d(v)}r=HA(l,c,n)}return Float32Array.from(r)}const FA=[8,4,2,1],zA=300,BA=.4;function HA(i,t,e){const n=new Float64Array(e),s=t.length;for(let r=0;r<s;r++){const[o,a]=[t[r],t[(r+1)%s]],c=(a-o+e)%e||e;for(let l=0;l<c;l++)n[(o+l)%e]=i[r]+(i[(r+1)%s]-i[r])*l/c}return n}function VA(i,t,e,n){let s=0;for(let r=0;r<=e;r+=3)s=Math.max(s,Math.abs(i.curvature[i.wrap(t+r)]));return n*Math.max(0,Math.min(1,1-s*Ht.lineTaper))}const Sr=new R;function nn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Sr.copy(t),Sr[n]=0,Sr.normalize();const l=.5*o/(o+a),h=1-Sr.angleTo(i)/c;return Math.sign(Sr[e])===1?h*l:a/(o+a)+l+l*(1-h)}class cm extends me{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new R,c=new R,l=new R(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new R,v=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*v,c.y-=Math.sign(c.y)*v,c.z-=Math.sign(c.z)*v,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=nn(g,c,"z","y",r,n),d[p+1]=1-nn(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-nn(g,c,"z","y",r,n),d[p+1]=1-nn(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-nn(g,c,"x","z",r,t),d[p+1]=nn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-nn(g,c,"x","z",r,t),d[p+1]=1-nn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-nn(g,c,"x","y",r,t),d[p+1]=1-nn(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=nn(g,c,"x","y",r,t),d[p+1]=1-nn(g,c,"y","x",r,e);break}}}function lm(i,t){const e=i.closed?[...i,i[0]]:i,n=[0];for(let c=1;c<e.length;c++)n.push(n[c-1]+Math.hypot(e[c].x-e[c-1].x,e[c].z-e[c-1].z));const s=n.at(-1),r=Math.max(1,Math.round(s/Dr)),o=s/r;let a=1;for(let c=0;c<r;c++){const l=(c+.5)*o;for(;a<e.length-1&&n[a]<l;)a++;const h=e[a-1],u=e[a],d=(l-n[a-1])/Math.max(1e-6,n[a]-n[a-1]);t.push({x:h.x+(u.x-h.x)*d,z:h.z+(u.z-h.z)*d,angle:Math.atan2(-(u.z-h.z),u.x-h.x)})}}function GA(i){const t=[];for(const d of W0(i))lm(d,t);const e=G0(i),n=new cm(Dr*.97,Cl,es,1,.06),s=Je.detail?{map:dA(),...fA()}:{},r=new Kt({roughness:s.roughnessMap?1:.45,metalness:0,...s}),o=new Ji(n,r,t.length),a=new Pt,c=new On,l=new R(0,1,0),h=new R(1,1,1),u=Ow.map(d=>new lt(d));return t.forEach((d,f)=>{c.setFromAxisAngle(l,d.angle),o.setMatrixAt(f,a.compose(new R(d.x,Cl/2,d.z),c,h)),o.setColorAt(f,u[f%u.length])}),o.castShadow=qp,o.receiveShadow=!0,{mesh:o,faces:e,blocks:t}}function hm(i){return[[i.width,i.cx,i.minZ,0],[i.width,i.cx,i.maxZ,Math.PI],[i.depth,i.minX,i.cz,Math.PI/2],[i.depth,i.maxX,i.cz,-Math.PI/2]]}function WA(i,t){const e=new Xt,n=cA();n.anisotropy=t,hm(i).forEach(([r,o,a,c],l)=>{const h=n.clone();h.repeat.set(r/xA,1),h.needsUpdate=!0;const u=Je.detail?uA().normalMap:null;u==null||u.repeat.copy(h.repeat);const d=new pt(new Pe(r,zo),new Kt({map:h,normalMap:u,roughness:.62,metalness:.35}));d.position.set(o,zo/2,a),d.rotation.y=c,d.receiveShadow=!0,e.add(d);const f=new lt(Ts.colors[l%Ts.colors.length]),g=new pt(new me(r-2,Ts.thickness,Ts.thickness),new Kt({color:0,emissive:f,emissiveIntensity:Ts.intensity}));g.position.set(0,Ts.y-zo/2,.12),d.add(g)});const s=new pt(new Pe(i.width,i.depth),new Kt({color:1316379,roughness:.95}));return s.rotation.x=Math.PI/2,s.position.set(i.cx,zo,i.cz),e.add(s),e}function wr(i,t,e){const n=new Ji(i,t,e.length),s=new Pt;return e.forEach(([r,o,a,c=0],l)=>{s.makeRotationY(c).setPosition(r,o,a),n.setMatrixAt(l,s)}),n}function Kc(i,t,e,n){const s=t-i-2*n,r=Math.max(1,Math.floor(s/e)+1),o=i+n+(s-(r-1)*e)/2;return Array.from({length:r},(a,c)=>o+c*e)}function XA(i){const t=new Xt,e=new Kt({color:2895926,roughness:.5,metalness:.7}),n=Kc(i.minX,i.maxX,Cf,4);t.add(wr(new me(.35,.8,i.depth),e,n.map(d=>[d,Pf,i.cz])));const s=Kc(i.minZ,i.maxZ,rn.spacingZ,5);t.add(wr(new me(i.width,.25,.25),e,s.map(d=>[i.cx,Pf+.3,d])));const r=Kc(i.minX,i.maxX,rn.spacingX,6).map(d=>d+Cf/2),o=[];for(const d of r)for(const f of s)d<i.maxX-3&&o.push([d,rn.y,f]);const a=new Kt({color:0,emissive:new lt(rn.color),emissiveIntensity:rn.intensity}),c=new me(rn.width,.08,rn.depth);t.add(wr(c,a,o));const l=new me(rn.width+.2,.14,rn.depth+.2);t.add(wr(l,e,o.map(([d,f,g])=>[d,f+.1,g])));const h=new Zn({map:bl("rgba(255,255,255,1)"),color:new lt(16773590).multiplyScalar(.07),transparent:!0,blending:Vs,depthWrite:!1}),u=new Pe(14,11).rotateX(-Math.PI/2);return t.add(wr(u,h,o.map(([d,,f])=>[d,.03,f]))),{group:t,lights:o}}const qA=()=>new te({uniforms:{uColor:{value:new lt(rn.color).multiplyScalar($p.intensity)}},vertexShader:`
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
      }`,transparent:!0,depthWrite:!1,blending:jl,blendSrc:Go,blendDst:Go,blendSrcAlpha:Is,blendDstAlpha:Go,side:an});function $A(i){const t=rn.y-.1,e=new Pi(.5,$p.spread,t,20,1,!0).translate(0,-t/2,0),n=new Ji(e,qA(),i.length),s=new Pt,r=new R(rn.width/1.2,1,1);return i.forEach(([o,a,c],l)=>n.setMatrixAt(l,s.compose(new R(o,a-.1,c),new On,r))),n.frustumCulled=!1,n.renderOrder=3,n}function YA(i){const t=new Xt,e=_A.map(mA),[n,s]=MA;let r=0;for(const[o,a,c,l]of hm(i)){const h=Math.max(1,Math.floor(o/32));for(let u=0;u<h;u++){const d=e[r++%e.length],f=new pt(new Pe(n,s),new Kt({map:d,emissiveMap:d,emissive:16777215,emissiveIntensity:.45,roughness:.55})),g=(u-(h-1)/2)*(o/h),v=.15;f.position.set(a+Math.cos(l)*g+Math.sin(l)*v,yA,c-Math.sin(l)*g+Math.cos(l)*v),f.rotation.y=l,t.add(f)}}return t}function um(i,t,e=new R(...Xi.offset)){const n=e.clone().normalize(),s=new R(0,1,0).cross(n).normalize(),r=n.clone().cross(s),o=2*t/Or,a=new R,c=l=>Math.round(l/o)*o;return(l,h)=>{a.set(l,0,h);const[u,d,f]=[c(a.dot(s)),c(a.dot(r)),a.dot(n)];a.copy(s).multiplyScalar(u).addScaledVector(r,d).addScaledVector(n,f),i.target.position.copy(a),i.position.copy(a).add(e)}}function jA(i){const t=new Xt;t.add(new Vp(wc.sky,wc.ground,wc.intensity));for(const o of Ay){const a=new fl(o.color,o.intensity);a.position.set(...o.direction).normalize().multiplyScalar(50).add(new R(i.cx,0,i.cz)),a.target.position.set(i.cx,0,i.cz),t.add(a,a.target)}const e=new fl(Xi.color,Xi.intensity);e.position.set(i.cx+Xi.offset[0],Xi.offset[1],i.cz+Xi.offset[2]),e.target.position.set(i.cx,0,i.cz),e.castShadow=!0,e.shadow.mapSize.set(Or,Or),e.shadow.bias=Wp,e.shadow.normalBias=Xp;const n=Math.max(i.width,i.depth)/2+2,s=Math.min(n,Ry.maxHalf),r=e.shadow.camera;return[r.left,r.right,r.top,r.bottom]=[-s,s,s,-s],r.near=10,r.far=Xi.offset[1]+40,r.updateProjectionMatrix(),t.add(e,e.target),{group:t,follow:s<n?um(e,s):()=>{}}}const KA=new lt(16719661),ZA=new lt(2883434),Of=new lt(0);class dm{constructor(t,e){const n=Fw,s=t.halfWidth+Pa+.9;this.group=new Xt,this.group.position.set(t.x[e],0,t.z[e]),this.group.rotation.y=t.heading(e);const r=new Kt({color:2303532,roughness:.45,metalness:.8}),o=(l,h,u,d,f,g,v=r)=>{const m=new pt(new me(l,h,u),v);return m.position.set(d,f,g),m.castShadow=!0,this.group.add(m),m};o(.3,n+.4,.3,-s,(n+.4)/2,0),o(.3,n+.4,.3,s,(n+.4)/2,0),o(s*2+.3,.45,.4,0,n,0);const a=new Kt({map:gA(),emissive:16777215,roughness:.6});a.emissiveMap=a.map,a.emissiveIntensity=.5;const c=new pt(new Pe(s*1.6,s*1.6/6.4),a);c.position.set(0,n+.75,.21),this.group.add(c),o(2.4,.55,.25,0,n-.55,.12),this.bulbs=[];for(let l=0;l<5;l++){const h=new Kt({color:789518,emissive:Of,roughness:.3}),u=new pt(new Pi(.15,.15,.06,20),h);u.rotation.x=Math.PI/2,u.position.set((l-2)*.44,n-.55,.26),this.group.add(u),this.bulbs.push(h)}}setLights(t,e){this.bulbs.forEach((n,s)=>{const r=e==="go"||e==="red"&&s<t;n.emissive.copy(r?e==="go"?ZA:KA:Of),n.emissiveIntensity=r?3.6:0})}}function fm(i,t=22,e=9,n=5.2){const s=[],r=Math.max(1,Math.round(t/i.spacing));for(let o=0;o<i.count;o+=r){const a=i.curvature[o]>0?-1:1;for(const c of[a,-a]){const l=i.offset(o,c*e);if(!i.within(l.x,l.z,e-.5)){s.push({x:l.x,y:n,z:l.z});break}}}return s}function JA(i=1){const t=(s,r)=>{let o=Math.imul(s,374761393)^Math.imul(r,668265263)^Math.imul(i,2147483647);return o=Math.imul(o^o>>>13,1274126177),((o^o>>>16)>>>0)/4294967296},e=s=>s*s*(3-2*s),n=(s,r)=>{const[o,a]=[Math.floor(s),Math.floor(r)],[c,l]=[e(s-o),e(r-a)],h=t(o,a)+(t(o+1,a)-t(o,a))*c,u=t(o,a+1)+(t(o+1,a+1)-t(o,a+1))*c;return h+(u-h)*l};return n.fbm=(s,r,o,a=4)=>{let[c,l,h,u]=[0,1,1/o,0];for(let d=0;d<a;d++)c+=(n(s*h+d*17.3,r*h-d*9.1)*2-1)*l,u+=l,l*=.5,h*=2.03;return c/u},n.ridge=(s,r,o,a=4)=>{let[c,l,h,u]=[0,1,1/o,0];for(let d=0;d<a;d++){const f=1-Math.abs(n(s*h+d*31.7,r*h+d*5.9)*2-1);c+=f*f*l,u+=l,l*=.5,h*=2.1}return c/u},n}function QA(i){let t=2166136261;for(const e of i)t=Math.imul(t^e.charCodeAt(0),16777619);return t>>>0}const t3=`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position = p.xyww; // on the far plane
  }
`,e3=`
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
`,Zc=`
  varying vec3 vNormal;
  varying vec3 vLocal;
  void main() {
    vNormal = normalize(mat3(modelMatrix) * normal);
    vLocal = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,kf=`
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
`,n3=`
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
`,pn=i=>new lt(i);function i3(i,t,e){const n=new Xt;n.position.copy(t);const s=new R(...i.sun[2]).normalize(),r=pn(i.haze[0]).multiplyScalar(.55),o={uZenith:{value:pn(i.sky[0])},uHorizon:{value:pn(i.sky[1])},uGround:{value:r},uSunColor:{value:pn(i.sun[0])},uSunDir:{value:s},uStars:{value:i.stars??0},uAurora:{value:i.aurora??0},uNebula:{value:i.nebula??0},uTime:{value:0}},a=new pt(new Pn(e,48,24),new te({uniforms:o,vertexShader:t3,fragmentShader:e3,side:ke,depthWrite:!1,fog:!1}));a.renderOrder=-2,a.frustumCulled=!1,n.add(a);const c=i.body;if(c){const l=new R(...c.dir).normalize(),h=l.clone().multiplyScalar(e*.82),u=c.size*(e/850),d=new pt(new Pn(u,48,32),new te({uniforms:{uColor:{value:pn(c.color)},uSunDir:{value:s},uHaze:{value:pn(i.sky[1])}},vertexShader:Zc,fragmentShader:kf,depthWrite:!1,fog:!1}));if(d.position.copy(h),d.rotation.set(.35,.8,.25),d.renderOrder=-1,n.add(d),c.ring){const g=new pt(new hh(u*1.35,u*2.25,96,1),new te({uniforms:{uColor:{value:pn(c.ring)},uHaze:{value:pn(i.sky[1])}},vertexShader:Zc.replace("vLocal = position;","vLocal = position / "+u.toFixed(3)+";"),fragmentShader:n3,transparent:!0,depthWrite:!1,side:an,fog:!1}));g.position.copy(h);const v=l.clone().multiplyScalar(-.45).add(new R(.15,1,0)).normalize();g.quaternion.setFromUnitVectors(new R(0,0,1),v),g.renderOrder=-1,n.add(g)}const f=new pt(new Pn(u*.18,24,16),new te({uniforms:{uColor:{value:pn(i.rock).lerp(pn(16777215),.5)},uSunDir:{value:s},uHaze:{value:pn(i.sky[1])}},vertexShader:Zc,fragmentShader:kf,depthWrite:!1,fog:!1}));f.position.copy(new R(-c.dir[0]*.7,.45,c.dir[2]*.4).normalize().multiplyScalar(e*.8)),f.renderOrder=-1,n.add(f)}return{group:n,update(l){o.uTime.value+=l}}}function s3(i,t,e){const n=Math.ceil(t.width/e)+1,s=Math.ceil(t.depth/e)+1,r=new Float32Array(n*s).fill(1e9);for(let l=0;l<i.count;l++){const h=Math.round((i.x[l]-t.minX)/e),u=Math.round((i.z[l]-t.minZ)/e);h>=0&&u>=0&&h<n&&u<s&&(r[u*n+h]=0)}const[o,a]=[e,e*Math.SQRT2],c=(l,h,u)=>{r[h]+u<r[l]&&(r[l]=r[h]+u)};for(let l=0;l<s;l++)for(let h=0;h<n;h++){const u=l*n+h;h>0&&c(u,u-1,o),l>0&&(c(u,u-n,o),h>0&&c(u,u-n-1,a),h<n-1&&c(u,u-n+1,a))}for(let l=s-1;l>=0;l--)for(let h=n-1;h>=0;h--){const u=l*n+h;h<n-1&&c(u,u+1,o),l<s-1&&(c(u,u+n,o),h<n-1&&c(u,u+n+1,a),h>0&&c(u,u+n-1,a))}return(l,h)=>{const u=Math.min(n-1.001,Math.max(0,(l-t.minX)/e)),d=Math.min(s-1.001,Math.max(0,(h-t.minZ)/e)),[f,g]=[Math.floor(u),Math.floor(d)],[v,m]=[u-f,d-g],p=g*n+f,_=r[p]+(r[p+1]-r[p])*v,x=r[p+n]+(r[p+n+1]-r[p+n])*v,y=_+(x-_)*m,A=Math.hypot(Math.max(0,t.minX-l,l-(t.minX+t.width)),Math.max(0,t.minZ-h,h-(t.minZ+t.depth)));return y+A}}function r3(i,t,e,n,s=Zs.segments){const r=Zs,o=70,a={minX:e.minX-o,minZ:e.minZ-o,width:e.width+2*o,depth:e.depth+2*o},c=s3(t,a,r.cell),l=t.halfWidth+Pa+es,h=(w,T)=>c(w,T)-l,u=(w,T)=>{const L=h(w,T);if(L<r.flat)return-.01;const b=Me(r.flat,r.flat+r.rise,L),M=(n.fbm(w,T,70,4)*.5+.35)*r.hills*b,D=n.ridge(w+500,T-300,160,5)*i.peaks*Me(60,260,L);return M+D-.01},d=Math.max(e.width,e.depth)+2*r.reach,f=new Pe(d,d,s,s).rotateX(-Math.PI/2),g=f.attributes.position,v=new Float32Array(g.count*3),[m,p,_,x]=[...i.ground,i.apron].map(w=>new lt(w)),y=new lt;for(let w=0;w<g.count;w++){const T=g.getX(w)+e.cx,L=g.getZ(w)+e.cz,b=u(T,L);g.setXYZ(w,T,b,L);const M=Me(0,i.peaks*.7,b);y.copy(m).lerp(p,M),y.lerp(_,Me(.15,.55,n.fbm(T,L,24,3))*.6*(1-M)),y.multiplyScalar(.85+.3*n(T*.35,L*.35)),y.lerp(x,1-Me(1.5,r.flat+3,h(T,L))),y.toArray(v,w*3)}f.setAttribute("color",new ce(v,3)),f.computeVertexNormals();const A=new pt(f,new Kt({vertexColors:!0,roughness:.92,metalness:0}));return A.receiveShadow=!0,A.userData.terrain=!0,{mesh:A,heightAt:u,clearance:h}}function o3(){const i=new Pi(.16,.34,1,8,6,!0).translate(0,.5,0),t=i.attributes.position;for(let e=0;e<t.count;e++){const n=t.getY(e);t.setX(e,t.getX(e)+Math.sin(n*2.2)*.22*n)}return i.computeVertexNormals(),i}function a3(){const i=new Pn(1,16,10,0,Math.PI*2,0,Math.PI*.62),t=i.attributes.position;for(let e=0;e<t.count;e++){const[n,s,r]=[t.getX(e),t.getY(e),t.getZ(e)],o=Math.atan2(r,n),a=1+.08*Math.sin(o*7)*(1-s);t.setXYZ(e,n*a*1.5,s*.75-.25,r*a*1.5)}return i.computeVertexNormals(),i}const Ff=Math.sin(2.2)*.22;function zf(i,t){const e=new ch(1,2),n=e.attributes.position,s=new R;for(let o=0;o<n.count;o++){s.fromBufferAttribute(n,o);const a=1+.28*(i(s.x*1.7+t,s.z*1.7+s.y*1.3)-.5)*2;s.multiplyScalar(a),s.y*=.7,n.setXYZ(o,s.x,s.y,s.z)}const r=e.toNonIndexed();return r.computeVertexNormals(),r}function c3(){const i=(t,e,n,s)=>new lh(1,0).scale(.28,t,.28).translate(0,t*.7,0).rotateZ(e).rotateX(n).rotateY(s);return lr([i(1.6,0,0,0),i(1.1,.35,.1,1.2),i(.9,-.3,.25,2.4),i(.7,.1,-.4,3.9)])}function As(i,t,e,n=!0){const s=new Ji(i,t,Math.max(1,e));return s.count=0,s.castShadow=n,s.receiveShadow=!0,s}function l3(i,t,e,n,s,r){const o=Zs,a=i.density,c=new Xt,l=new Pt,h=new On,u=new R,d=new R,f=new lt,g=i.night?1:0,v=Math.max(e.width,e.depth)/2+o.reach*.75,m=(U,q,$=v)=>{for(let Q=0;Q<30;Q++){const dt=n()*Math.PI*2,_t=Math.sqrt(n())*$,[F,K]=[e.cx+Math.cos(dt)*_t,e.cz+Math.sin(dt)*_t],at=t.clearance(F,K);if(at>=U&&at<=q)return[F,K,at]}return null},p=(U,q,$,Q,dt,_t,F,K,at=0,nt=0,bt=null)=>{h.setFromEuler(new ln(at,K,nt)),l.compose(d.set(q,$,Q),h,u.set(dt,_t,F)),U.setMatrixAt(U.count,l),bt&&U.setColorAt(U.count,bt),U.count++},_=Math.round(o.trees*a.trees*r),x=new Kt({color:i.flora[0],roughness:.7}),y=new Kt({color:i.flora[1],roughness:.45,emissive:i.flora[1],emissiveIntensity:.12+g*.9}),A=new Kt({color:0,emissive:i.flora[2],emissiveIntensity:1.1+g*1.6}),w=As(o3(),x,_),T=As(a3(),y,_),L=As(new Pn(1,8,6),A,_*3+Math.round(o.glowBulbs*r),!1);for(let U=0,q=0;U<_&&q<_*6;q++){const $=m(o.flat+2,400);if(!$)continue;const[Q,dt]=$;if(s.fbm(Q,dt,55,3)<-.05)continue;const _t=3+n()*7*(.6+.4*n()),F=_t*(.35+n()*.25),K=n()*Math.PI*2,at=t.heightAt(Q,dt)-.2;f.set(i.flora[1]).offsetHSL((n()-.5)*.06,0,(n()-.5)*.12),p(w,Q,at,dt,F*.5,_t,F*.5,K);const nt=Q+Math.cos(K)*Ff*F*.5,bt=dt-Math.sin(K)*Ff*F*.5;p(T,nt,at+_t,bt,F,F*.8,F,K,0,0,f);for(let Et=0;Et<3;Et++){const Lt=K+Et/3*Math.PI*2+n(),k=F*1.3;p(L,nt+Math.cos(Lt)*k,at+_t-.5*F,bt+Math.sin(Lt)*k,.1*F,.15*F,.1*F,0)}U++}const b=Math.round(o.glowBulbs*r);for(let U=0,q=0;U<b&&q<b*8;q++){const $=m(.6,9,Math.max(e.width,e.depth)/2+20);if(!$)continue;const[Q,dt]=$,_t=.03+n()*.06;p(L,Q,_t*.5,dt,_t,_t*1.4,_t,0),U++}L.count&&(L.instanceMatrix.needsUpdate=!0),c.add(w,T,L);const M=Math.round(o.crystals*a.crystals*r),D=new Kt({color:i.crystal,roughness:.12,metalness:.15,emissive:i.crystal,emissiveIntensity:.9+g*1.6,flatShading:!0}),O=As(c3(),D,M);for(let U=0,q=0;U<M&&q<M*6;q++){const $=m(o.flat,300);if(!$)continue;const[Q,dt,_t]=$,F=(.6+n()*1.6)*(_t>60?2.2:1);p(O,Q,t.heightAt(Q,dt)-.2,dt,F,F,F,n()*6.28,(n()-.5)*.4,(n()-.5)*.4),U++}c.add(O);const I=Math.round(o.rocks*a.rocks*r),z=new Kt({color:i.rock,roughness:.85,flatShading:!0}),X=As(zf(s,3),z,I);for(let U=0,q=0;U<I&&q<I*6;q++){const $=m(o.flat-2,500);if(!$)continue;const[Q,dt,_t]=$,F=(.4+n()*1.4)*(1+Math.min(4,_t/40));f.set(i.rock).offsetHSL(0,0,(n()-.5)*.1),p(X,Q,t.heightAt(Q,dt)-F*.25,dt,F*(.8+n()*.6),F,F*(.8+n()*.6),n()*6.28,0,0,f),U++}c.add(X);const Y=Math.round(o.floaters*a.floaters*Math.min(1,r*1.2)),et=As(zf(s,11),z,Y,!1);for(let U=0;U<Y;U++){const q=n()*Math.PI*2,$=70+n()*230,[Q,dt]=[e.cx+Math.cos(q)*($+e.width/2),e.cz+Math.sin(q)*($+e.depth/2)],_t=4+n()*14;f.set(i.rock).offsetHSL(0,0,(n()-.5)*.1),p(et,Q,25+n()*70+t.heightAt(Q,dt)*.5,dt,_t*1.4,_t*.9,_t*1.2,n()*6.28,0,0,f)}c.add(et);for(const U of c.children)U.instanceMatrix.needsUpdate=!0,U.instanceColor&&(U.instanceColor.needsUpdate=!0);return c}function h3(i,t){const e=[];for(const f of W0(i))lm(f,e);const n=G0(i),s=Cl*.8,r=new Ji(new cm(Dr*.96,s,es,2,.07),new Kt({color:2106414,roughness:.32,metalness:.85}),e.length),o=new Ji(new me(Dr*.8,.05,.1),new Kt({color:0,emissive:t,emissiveIntensity:4}),e.length),a=new Ji(new me(Dr*.5,.03,es+.01),new Kt({color:0,emissive:t,emissiveIntensity:1.6}),e.length),c=new Pt,l=new On,h=new R(1,1,1),u=new R(0,1,0);e.forEach((f,g)=>{l.setFromAxisAngle(u,f.angle),r.setMatrixAt(g,c.compose(new R(f.x,s/2,f.z),l,h)),o.setMatrixAt(g,c.compose(new R(f.x,s+.02,f.z),l,h)),a.setMatrixAt(g,c.compose(new R(f.x,s*.45,f.z),l,h))}),r.castShadow=qp,r.receiveShadow=!0;const d=new Xt;return d.add(r,o,a),{mesh:d,faces:n,blocks:e}}const Er=45;function u3(i,t){const e=new Xt,n=new lt(i.sky[1]).lerp(new lt(i.sky[0]),.4);e.add(new Vp(n,new lt(i.ground[0]),i.night?.85:.9));const[s,r,o]=i.sun,a=new R(...o).normalize().multiplyScalar(90);a.y=Math.max(a.y,25);const c=new fl(s,r);c.position.set(t.cx,0,t.cz).add(a),c.target.position.set(t.cx,0,t.cz),c.castShadow=!0,c.shadow.mapSize.set(Or,Or),c.shadow.bias=Wp,c.shadow.normalBias=Xp;const l=c.shadow.camera;return[l.left,l.right,l.top,l.bottom]=[-Er,Er,Er,-Er],l.near=5,l.far=200,l.updateProjectionMatrix(),e.add(c,c.target),{group:e,follow:um(c,Er,a)}}const d3=i=>`#${new lt(i).getHexString()}`;function f3(i,t){const e=IS(i.id),n=QA(i.id),s=ar(n),r=JA(n),o=Oh(i),a=o.nearest(...i.waypoints[i.startIndex]),c=o.wrap(a-Math.round(Th/o.spacing)),l=h3(o,e.accent),h=X0(l.faces,em+es),u=new dm(o,a),d=am(o,Ht),f=u3(e,h),g=r3(e,o,h,r,zs==="low"?140:Zs.segments),v=i3(e,new R(h.cx,0,h.cz),Zs.skyRadius),m=new lt(e.apron).lerp(new lt(e.night?9081e3:6975616),.6),p=new Xt;p.add(v.group,g.mesh,sm(o,a,c,t,{surface:m,line:e.accent,glow:e.night?new lt(e.accent).lerp(m,.7).multiplyScalar(.08):0}),rm(o,{a:d3(e.accent),b:"#1c1f28"}),l.mesh,l3(e,g,h,s,r,DS[zs]??1),f.group,u.group);const _=new Z0([...l.faces,q0(h)],r0),x=A0(o),y=new om(o,d,x),A=new lt(e.haze[0]);return{track:i,group:p,path:o,line:d,curbs:x,surface:y,startIndex:a,gridIndex:c,bounds:h,collider:_,gantry:u,lighting:f,anchors:fm(o),planet:e,atmosphere:{background:A,fog:A,density:e.haze[1],exposure:e.night?1.15:1},update:w=>v.update(w)}}const Jc=34;function p3(i,t,e,n){const[s,r]=[Math.ceil(t.width),Math.ceil(t.depth)],o=new Uint8Array(s*r),a=Math.ceil(i.halfWidth+2.5),c=Math.max(1,Math.round(1/i.spacing));for(let f=0;f<i.count;f+=c){const[g,v]=[Math.floor(i.x[f]-t.minX),Math.floor(i.z[f]-t.minZ)];for(let m=-a;m<=a;m++)for(let p=-a;p<=a;p++){const[_,x]=[g+m,v+p];_>=0&&x>=0&&_<s&&x<r&&m*m+p*p<=a*a&&(o[x*s+_]=1)}}const l=(f,g)=>{const[v,m]=[Math.floor(f-e/2-t.minX),Math.floor(g-n/2-t.minZ)];if(v<2||m<2||v+e>s-2||m+n>r-2)return!1;for(let p=m;p<=m+n;p++)for(let _=v;_<=v+e;_++)if(o[p*s+_])return!1;return!0},h=i.x.reduce((f,g)=>f+g,0)/i.count,u=i.z.reduce((f,g)=>f+g,0)/i.count,d=[];for(let f=t.minX;f<=t.maxX;f+=2)for(let g=t.minZ;g<=t.maxZ;g+=2)d.push({x:f,z:g,d:(f-h)**2+(g-u)**2});return d.sort((f,g)=>f.d-g.d),l(h,u)?{x:h,z:u}:d.find(f=>l(f.x,f.z))??null}function m3(i,t){if(oe)return f3(i,t);const e=Oh(i),n=e.nearest(...i.waypoints[i.startIndex]),s=e.wrap(n-Math.round(Th/e.spacing)),r=GA(e),o=X0(r.faces,em+es),a=new dm(e,n),c=XA(o),l=p3(e,o,Jc,Jc/4),h=am(e,Ht),u=jA(o),d=new Xt;d.add(SA(o,t),...l?[wA(l.x,l.z,Jc)]:[],sm(e,n,s,t),OA(e,h),rm(e),r.mesh,WA(o,t),c.group,YA(o),u.group,...Je.haze?[$A(c.lights)]:[],a.group),c.group.userData.ceiling=!0;const f=new Z0([...r.faces,q0(o)],r0),g=A0(e),v=new om(e,h,g);return{track:i,group:d,path:e,line:h,curbs:g,surface:v,startIndex:n,gridIndex:s,bounds:o,collider:f,gantry:a,rig:c,lighting:u,anchors:fm(e)}}function Bh(i){const t=new Set,e=n=>{var s;!n||t.has(n)||(t.add(n),(s=n.dispose)==null||s.call(n))};i.traverse(n=>{var s,r;e(n.geometry);for(const o of[n.material].flat())if(o){for(const a of Object.values(o))a!=null&&a.isTexture&&e(a);e(o)}n.isLight&&((r=(s=n.shadow)==null?void 0:s.dispose)==null||r.call(s)),n.isInstancedMesh&&n.dispose()})}function g3(i){const{bus:t,sfx:e,camera:n,screens:s}=i;t.on("sector",r=>{const o=i.session.mode==="timeattack"?[]:i.field.entries.filter(l=>!l.isPlayer),a=Math.min(...o.map(l=>l.timer.bestSectors[r.sector]??1/0)),c=r.time<=a&&r.isBest?"purple":r.isBest?"green":"yellow";t.emit("sector-flag",{...r,colour:c})}),t.on("light",()=>e.beep("red")),t.on("go",()=>e.beep("go")),t.on("lap",r=>{if(e.chime(r.isBest),r.isBest){const{session:o}=i,a=i.recorder.take()??i.record.ghost;i.record={best:r.time,splits:o.timer.bestSplits,ghost:a},nE(i.signature,r.time,o.timer.bestSplits,a,i.recordKey),o.mode==="timeattack"&&i.ghost.set(a),s.setBest(r.time)}}),t.on("finish",()=>{e.chime(i.field.position(i.field.player)===1),n.broadcast(),s.showOnlinePause(!1),s.showResults(!0),i.hud.setVisible(!1)}),t.on("impact",r=>{e.impact(r),n.shake(Math.min(.85,r/9))}),t.on("pause",r=>s.showPause(r))}function v3(i,t,e,n,s=0,r=0){let o=1/0;for(const l of t)l.ahead>.5&&l.ahead<Ht.blockAhead&&Math.abs(l.lateral-e)<Ht.blockLateral&&(o=Math.min(o,l.speed-.4));const a=t[i.target];(!a||!x3(a,e))&&Object.assign(i,_3(t,e,n));const c=t[i.target];return i.wait=Math.max(0,(i.wait??0)-s),!c||c.ahead>=Ht.pullOutAhead||i.wait>0?{pass:0,speedCap:o}:(i.out||(i.side=r||(c.lateral>0?-1:1)),i.out=(i.out??0)+s,i.out>Ht.passGiveUp&&c.ahead>Ht.passAlongside?(Object.assign(i,{out:0,wait:Ht.passRetry}),{pass:0,speedCap:o}):{pass:i.side*Ht.passOffset,speedCap:o})}const x3=(i,t)=>i.ahead>-1.5&&i.ahead<=Ht.sightKeep&&Math.abs(i.lateral-t)<=Ht.passOffset+Ht.lineMax;function _3(i,t,e){let n=-1;return i.forEach((s,r)=>{s.ahead<=.5||s.ahead>Ht.sightAhead||Math.abs(s.lateral-t)>Ht.sightLateral||s.speed>=e+1.5||(n<0||s.ahead<i[n].ahead)&&(n=r)}),n<0?{target:-1,side:0,out:0,wait:0}:{target:n,side:0,out:0}}function M3(i,t){let e=0;for(let n=0;n<Ht.passLook;n+=1)e+=i.curvature[i.wrap(t+Math.round(n/i.spacing))];return Math.abs(e)>Ht.passTurn?Math.sign(e):0}const Bf=new WeakMap;function y3(i,t){const e=Bf.get(i);if(e)return e;const n=i.length,s=Math.max(1,Math.round(Ht.cornerWindow/t.spacing));let r=0;for(let c=0;c<n;c++)r=Math.max(r,i[c]);const o=[];for(let c=0;c<n;c++){if(i[c]>Ht.cornerBelow*r)continue;let l=!0;for(let h=-s;h<=s&&l;h++){const u=t.wrap(c+h);(i[u]<i[c]||i[u]===i[c]&&u<c)&&(l=!1)}l&&o.push(c)}const a=new Int32Array(n).fill(-1);if(o.length){let c=0;for(let l=o.length-1;l>=0;l--){const h=o[(l-1+o.length)%o.length];for(let u=o[l];a[u]=o[l],!(u===t.wrap(h+1)||++c>n);u=t.wrap(u-1));}}return Bf.set(i,a),a}function b3(i,t,e){const n=(e()+e()+e()-1.5)*2*(i.sigma??0),s=(i.mistakes??0)*(t?Ht.pressureMistakes:1);if(e()>=s)return{factor:1+n,mistake:null};const r=Ht.mistakeMin+e()*(Ht.mistakeMax-Ht.mistakeMin);return e()<Ht.mistakeHot?{factor:1+r,mistake:"hot"}:{factor:1-r,mistake:"early"}}function S3(i,t,e){let n=null;for(const s of i)s.ahead>=-.3||s.ahead<-5||Math.abs(s.lateral-t)>Ht.defendLateral||s.speed<e-1||(!n||s.ahead>n.ahead)&&(n=s);return n}function w3(i,t,e,n,s,r,o){return i.hold=Math.max(0,(i.hold??0)-r),i.cool=Math.max(0,(i.cool??0)-r),i.hold>0&&e!==-i.side?i.side:(i.side=0,!t||!e||i.cool>0||i.corner===n||(i.corner=n,o()>=Ht.defendOdds*s)?0:(Object.assign(i,{side:e,hold:Ht.defendHold,cool:Ht.defendHold+Ht.defendCool}),e))}const Hf={throttle:0,brake:0,steer:0,handbrake:!1},E3={pace:1,sigma:0,mistakes:0};class T3{constructor(t,e,n,s=1){this.profile=n,this.level=E3,this.setTrack(t,e,s)}setTrack(t,e,n=1){Object.assign(this,{path:t,line:e,trackPace:n,plan:t&&Ph(t,e)}),this.corners=t&&y3(this.plan,t),this.reset()}reset(t=Math.random){this.index=-1,this.pass=0,this.passMemo={target:-1,side:0,out:0,wait:0},this.stuck=0,this.wait=this.profile.react+t()*.12,this.form=1+(t()-.5)*Ht.formSpread,this.random=t,this.qualifying??(this.qualifying=!1),this.corner=-2,this.take={factor:1,mistake:null},this.defence={corner:-1,side:0,hold:0,cool:0},this.log={mistakes:0,defences:0},this.cover=0,this.coverSide=0,this.covering=0}controls(t,e,n,s,r,o=!0){if(!o||(this.wait-=r)>0)return Hf;const a=this.path;this.index=a.nearest(t.x,t.z,this.index);const c=a.lateral(t.x,t.z,this.index),l=this.profile.skill*s*this.form,h=S3(n,c,e),u=this.corners[this.index];u!==this.corner&&(this.corner=u,this.take=b3(this.level,!!h,this.random),this.take.mistake&&this.log.mistakes++);const d=M3(a,this.index),{pass:f,speedCap:g}=v3(this.passMemo,n,c,e,r,d);this.pass=Ce(this.pass,f,Ht.offsetRate,r);const v=this.profile.aggression??.5,m=f||this.qualifying?0:w3(this.defence,h,d,u,v,r,this.random);m&&m!==this.covering&&this.log.defences++,this.covering=m,m&&(this.coverSide=m),this.cover=Ce(this.cover,m?1:0,Ht.offsetRate,r);const p=Math.round((ee.lookAhead+e*ee.lookSpeed)/a.spacing),_=a.wrap(this.index+p),x=VA(a,this.index,p,this.profile.line),y=this.line[_]+(this.coverSide*Ht.defendInside-this.line[_])*this.cover,A=ft(y+x+this.pass,-a.halfWidth+.85,a.halfWidth-.85),w=a.offset(_,A),T=Math.abs(this.pass)>1?1+Ht.attack*(.5+v):1,L=1-(1-Ht.defendPace)*this.cover,b=Ch(this.plan,a,this.index,e,{skill:l*T*L*this.take.factor*this.trackPace*this.level.pace,ahead:ee.planAhead,maxSpeed:ee.maxSpeed}),M=Math.min(b,g),D=I0(t,w,e);return this.stuck=e<1?this.stuck+r:0,{...Rh(e,M,D,t.slipAngle),steer:D,handbrake:!1,reset:this.stuck>Ht.stuckTime}}}function A3(i,t,e){const n=new Array(i.length).fill(0),s=t*2;for(let r=0;r<i.length;r++)for(let o=r+1;o<i.length;o++){const a=i[r],c=i[o],l=c.x-a.x,h=c.z-a.z,u=l*l+h*h;if(u>=s*s||u<1e-8)continue;const d=Math.sqrt(u),[f,g]=[l/d,h/d],v=(s-d)/2;a.x-=f*v,a.z-=g*v,c.x+=f*v,c.z+=g*v;const m=(a.vx-c.vx)*f+(a.vz-c.vz)*g;if(m<=0)continue;const p=m*(1+e)/2;a.vx-=p*f,a.vz-=p*g,c.vx+=p*f,c.vz+=p*g,n[r]=Math.max(n[r],m),n[o]=Math.max(n[o],m)}return n}function R3(i,t,e){return i.map(n=>{const s=Ti(n.yaw);let r=0;for(const o of i){if(o===n)continue;const a=o.x-n.x,c=o.z-n.z,l=a*s.x+c*s.z;if(l<1.2||l>t)continue;const h=Math.abs(a*s.z-c*s.x);h>e||(r=Math.max(r,(1-l/t)*(1-h/e)))}return Math.min(1,r*1.6)})}const C3=i=>Math.min(Us.max,Math.max(Us.min,i/Us.pace*Us.laps));function P3(i,t,e){const n=Math.round(Us.lead/i.spacing),s=i.count-2*n;return Array.from({length:e},(r,o)=>i.wrap(t+n+Math.round(o*s/e)))}function L3(i){return[...i].sort((t,e)=>(t.bestLap??1/0)-(e.bestLap??1/0))}function I3(i,t,e){const n=i.count;return e.map(s=>{let r=s.index-t.index;return r=r>n/2?r-n:r<-n/2?r+n:r,{ahead:r*i.spacing,lateral:i.lateral(s.state.x,s.state.z,s.index),speed:s.speed}})}const D3=i=>1+ft(i/Ht.catchUpGap,0,1)*Ht.catchUp;function Vf(i,t,e=Math.random){const n=Array.from({length:i+1},(s,r)=>r).filter(s=>s!==t);for(let s=n.length-1;s>0;s--){const r=Math.floor(e()*(s+1));[n[s],n[r]]=[n[r],n[s]]}return n}const N3=i=>Xw[i]??1;function U3(i){return kn.map(t=>{const e=new wh(null,{number:t.number,livery:{body:t.body,suit:t.suit,helmet:t.body,helmetStripe:t.stripe}});return i.add(e.object3d),{profile:t,kart:e,driver:new T3(null,null,t),fx:new Eh(i),kerb:new R0,index:-1}})}function pm(i){const{path:t,collider:e,line:n,track:s,surface:r}=i.world;i.kart.collider=e,i.kart.surface=r;for(const o of i.rivals)o.kart.collider=e,o.kart.surface=r,o.driver.setTrack(t,n,N3(s.id)),o.driver.level=Qn[i.difficulty];i.autopilot.setPath(t)}function Hh(i,t,e=null){(t===!0||t===!1)&&(t=t?"grid":"solo");const{path:n,startIndex:s,gridIndex:r,line:o}=i.world,a=i.rivals.length+1;let c;if(t==="quali"){const u=Vf(i.rivals.length,-1),d=P3(n,s,a);c=u.map(f=>{const g=d[f],v=n.offset(g,o[g]);return{x:v.x,z:v.z,yaw:n.heading(g),i:g}})}else{const u=t==="qualified"&&e?e:null,d=u?Math.max(0,u.indexOf("YOU")):Dn.playerSlot,f=Vf(i.rivals.length,d),g=(v,m)=>u&&u.includes(v.profile.code)?u.indexOf(v.profile.code):f[m];c=[Dl(n,s,d),...i.rivals.map((v,m)=>Dl(n,s,g(v,m)))]}const l=t==="solo",h=l?{x:n.x[r],z:n.z[r],yaw:n.heading(r),i:r}:c[0];i.kart.place(h.x,h.z,h.yaw),i.trackIndex=h.i,i.rivals.forEach((u,d)=>{const f=c[d+1];u.kart.place(f.x,f.z,f.yaw),u.kart.object3d.visible=!l,u.index=f.i,u.driver.reset(),u.driver.qualifying=t==="quali",u.fx.reset(),u.kerb.reset()}),i.fx.reset(),i.kerb.reset()}function mm(i,t,e,n=i.rivals,s=[]){var l;const{path:r}=i.world,o=[{kart:i.kart,index:i.trackIndex},...n],a=h=>({state:h.kart.state,index:h.index,speed:h.kart.telemetry.speed}),c=i.field.player.progress;for(const h of n){const u=h.kart.state,d=I3(r,h,[...o.filter(p=>p!==h).map(a),...s]),f=(c-(((l=i.field.entries.find(p=>p.profile===h.profile))==null?void 0:l.progress)??c))*r.spacing,g=i.field.entries.find(p=>p.profile===h.profile),v=i.field.timed?(g==null?void 0:g.finishTime)!=null?.85:1:D3(f),m=h.driver.controls(u,h.kart.telemetry.speed,d,v,t,e);m.reset?k3(i,h):h.kart.update(m,t),h.index=r.nearest(h.kart.state.x,h.kart.state.z,h.index),h.kerb.update(h.kart,r,i.world.curbs,h.index,t),h.fx.update(h.kart,t,i.camera.three,i.renderer.three.domElement.height)}O3(o.map(h=>h.kart),s.map(h=>h.state))}function O3(i,t){const e=i.map(r=>r.state);for(const r of t)e.push({...r});const n=A3(e,pf.radius,pf.restitution),s=R3(e,ff.range,ff.lateral);i.forEach((r,o)=>{r.draft=s[o],n[o]>r.telemetry.impact&&(r.telemetry.impact=n[o],Object.assign(r.contact,{x:r.state.x,z:r.state.z,nx:0,nz:0}))})}function k3(i,t){const{path:e}=i.world,n=e.nearest(t.kart.state.x,t.kart.state.z,t.index),s=e.offset(n,t.driver.line[n]);t.kart.place(s.x,s.z,e.heading(n)),t.driver.stuck=0,t.index=n}const F3=()=>[{code:Pl.code,name:Pl.name,color:oa.body},...kn.map(i=>({code:i.code,name:i.name,color:i.body}))];function gm(i){return(!i.season||Ih(i.season))&&(i.season=ME(Ue.map(t=>t.id),F3(),i.difficulty),Nh(i.season),i.screens.setSeason(Dh(i.season))),i.season}function Hl(i){const t=yE(gm(i));i.track.id!==t&&i.loadTrack(hr(t)),i.qualiGrid=null,i.roundScored=!1,i.screens.showSeason(!1),Hs(i,"quali")}function z3(i){const t=i.field.entries.map(e=>({code:e.code,bestLap:e.bestLap}));i.qualiGrid=L3(t).map(e=>e.code),Hs(i,"champ")}function Gf(i,t=!0){if(!i.roundScored){const e=i.field.order.map(r=>({code:r.code,bestLap:r.bestLap})),{season:n,scored:s}=bE(i.season,e);Object.assign(i,{season:n,lastScored:s,roundScored:!0}),Nh(n),i.screens.setSeason(Dh(n))}t&&(i.screens.showResults(!1),i.screens.showSeason(!0,i.season,i.lastScored,i.season.rounds.map(e=>hr(e).name)))}function Wf(i){i.season=null,Nh(null),gm(i),Hl(i)}const Vl=i=>i==="race"||i==="champ"||i==="quali";function Hs(i,t=i.session.mode,e){i.audio.unlock();const n=t==="quali"?"quali":t==="champ"?"qualified":Vl(t)?"grid":"solo";Hh(i,n,i.qualiGrid),t!=="online"&&(i.field=t==="quali"?i.qualiField:i.soloField),i.field.reset(),i.recorder.reset(),i.ghost.set(i.record.ghost),i.camera.follow(i.kart),t==="online"?i.replay.karts=null:i.replay.begin(t==="timeattack"),t==="quali"?i.session.startSession(t,C3(i.world.path.length)):i.session.startCountdown(t,e),i.screens.showTitle(!1),i.screens.showPause(!1),i.screens.showResults(!1),i.screens.showSeason(!1),i.hud.setMode(t),i.hud.clearToasts(),i.hud.setVisible(!0)}function Ps(i){i.session.toTitle(),i.field=i.soloField,Hh(i,"grid"),i.autopilot.index=-1,i.camera.broadcast(),i.screens.showPause(!1),i.screens.showResults(!1),i.screens.showSeason(!1),i.screens.showTitle(!0),i.hud.clearToasts(),i.hud.setVisible(!1)}function vm(i){const{path:t}=i.world,{x:e,z:n}=i.kart.state,s=t.nearest(e,n,i.trackIndex);i.kart.place(t.x[s],t.z[s],t.heading(s)),i.bus.emit("reset")}function Cr(i){return i.action("raceAgain")||i.action("reset")?"again":i.action("nextRace")?"next":i.action("pause")||i.action("quit")?"menu":null}function B3(i){var a;const{input:t,camera:e,bus:n,screens:s}=i;if(i.replay.active)return i.replay.handle(t);const r=i.session,o=r.state;if(o==="title"){if(s.lobby.visible)return;t.action("left")&&s.cycleMode(-1),t.action("right")&&s.cycleMode(1),t.action("level")&&i.setDifficulty(s.cycleLevel()),t.action("aids")&&i.setAids(s.cycleAids()),t.action("graphics")&&((a=s.graphics)==null||a.cycle()),t.action("prevTrack")&&i.selectTrack(-1),t.action("nextTrack")&&i.selectTrack(1),t.action("start")&&(s.mode==="online"?s.openLobby():s.mode==="champ"?Hl(i):Hs(i,s.mode))}else if(s.season.visible){const c=Cr(t);c==="again"?i.season.round>=i.season.rounds.length?Wf(i):Hl(i):c==="next"?Wf(i):c==="menu"&&Ps(i)}else if(r.mode==="online")i.online.handle(t,o);else if(o==="finished"&&t.action("replay"))i.replay.open();else if(o==="finished"&&r.mode==="quali"){const c=Cr(t);c==="again"?z3(i):c==="menu"&&Ps(i)}else if(o==="finished"&&r.mode==="champ"){const c=Cr(t);c==="again"?Gf(i):c==="menu"&&(Gf(i,!1),Ps(i))}else if(o==="finished"){const c=Cr(t);c==="next"&&i.selectTrack(1),c==="again"||c==="next"?Hs(i):c==="menu"&&Ps(i)}else{if(t.action("pause")&&r.togglePause(),t.action("quit")&&o==="paused")return Ps(i);t.action("reset")&&(o==="paused"?Hs(i):o==="racing"&&vm(i))}o!=="title"&&t.action("camera")&&n.emit("camera",e.cycleView()),o!=="title"&&t.action("telemetry")&&i.hud.telemetry.setVisible(!i.hud.telemetry.visible),t.action("mute")&&n.emit("mute",i.audio.toggleMute()),t.action("debug")&&i.debug.toggle()}function H3(i,t,{paused:e,state:n,grandPrix:s,wallHit:r}){const{kart:o,input:a}=i,c=o.telemetry,l=!e,h=n==="countdown"?a.controls().throttle:c.throttle;i.engine.update(c,h,t,l);const u=i.online.active?i.online.others:s?i.rivals:[];i.pack.update(o.state,u.map(d=>d.kart),t,l),i.tyres.update(c,e?0:t,l,e?0:r),i.rumble.update(i.kerb,l),i.haptics.update(i,t,l&&(n==="racing"||n==="countdown"))}const V3={throttle:0,brake:0,steer:0,handbrake:!1},G3=1.5,W3=.18,X3=.6;function q3(i,t){const e=i.kart.telemetry.speed;return t==="title"?i.autopilot.controls(i.kart.state,e):t==="finished"?i.autopilot.controls(i.kart.state,e,Ww.maxSpeed):t==="racing"?i.input.controls():V3}function $3(i,t,e,n){const s=Br[i.aids]??Br.full,r=e==="racing"||e==="countdown",o=r?{assist:s.steer,brakeAssist:s.brake}:{};if(!r||!t.throttleDigital||!s.throttle)return i.playerThrottle=t.throttle,{...t,...o};const{kart:a}=i;return i.playerThrottle=R2(i.playerThrottle??0,t.throttle,a.state.slipAngle,n,a.telemetry.speed),{...t,throttle:i.playerThrottle,...o}}function Y3(i){let t=performance.now();document.addEventListener("visibilitychange",()=>t=performance.now());const e=n=>{const s=Math.min(.05,(n-t)/1e3);t=n,s>0&&i.step(s),i.post.render(Math.max(s,0)),requestAnimationFrame(e)};requestAnimationFrame(e)}function xm(i,t){const e=i.field.position(i.field.player);e!==i.heldPosition&&([i.heldPosition,i.positionAge]=[e,0]),i.positionAge+=t,i.positionAge>=X3&&e!==i.lastPosition&&(e<i.lastPosition&&i.session.state==="racing"&&i.session.timer.lap>=1&&i.bus.emit("overtake",e),i.lastPosition=e)}function j3(i,t){var d;if(i.input.poll(),B3(i),i.replay.active){i.replay.frame(t),i.input.endFrame();return}const{input:e,session:n,kart:s,world:r,camera:o}=i,a=n.state,c=a==="paused",l=Vl(n.mode)||a==="title";let h=0;if(!c){if(s.update($3(i,i.controlsFor(a),a,t),t),h=s.telemetry.impact,l&&mm(i,t,a!=="countdown"),i.trackIndex=r.path.nearest(s.state.x,s.state.z,i.trackIndex),i.kerb.update(s,r.path,r.curbs,i.trackIndex,t),n.update(t,i.trackIndex),a==="racing"&&i.recorder.update(n.timer.lap,n.timer.lapTime(n.clock),s.state),a!=="title"&&n.mode!=="online"&&i.replay.record(t),Vl(n.mode)&&(a==="racing"||a==="finished")){const f=i.field.update([i.trackIndex,...i.rivals.map(g=>g.index)],n.clock);a==="racing"&&f.some(g=>g.isPlayer)&&n.finish(),n.mode==="quali"?(n.flagged&&i.field.flag(n.limit),a==="racing"&&n.clock>n.limit+Us.overrun&&n.finish()):xm(i,t)}i.online.step(t),i.fx.update(s,t,o.three,i.renderer.three.domElement.height),i.impactCooldown-=t,s.telemetry.impact>G3&&i.impactCooldown<=0&&(i.bus.emit("impact",s.telemetry.impact),i.impactCooldown=W3)}const u=n.view;i.ghost.update(u.lapTime,n.mode==="timeattack"&&a==="racing"&&u.lap>=1,c?0:t),r.gantry.setLights(n.lights,n.lightsMode),r.lighting.follow(s.state.x,s.state.z),(d=r.update)==null||d.call(r,t),o.update(s,c?0:t,i.kerb),i.post.setFocus(o.mode==="broadcast"?o.three.position.distanceTo(s.object3d.position):null),s.model.setFirstPerson(o.mode==="follow"&&o.view==="cockpit"),H3(i,t,{paused:c,state:a,grandPrix:l,wallHit:h}),i.hud.update(u,s,i),i.screens.update(i),i.debug.update(t,i),e.endFrame()}function K3(i,t,e){const n=r=>r?e.find(o=>o.id===r.trim().toLowerCase()):void 0,s=n(i);return{track:s??n(t)??e[0],fromUrl:!!s,unknown:i&&!s?i:null}}function Z3(i){let t=2166136261;for(const e of i){const n=Math.round(e*100);for(let s=0;s<32;s+=8)t=Math.imul(t^n>>>s&255,16777619)}return(t>>>0).toString(16).padStart(8,"0")}function J3(i,t,e){const n=`${t.count}:${t.length.toFixed(1)}`;return i.id==="tbc"?n:`${n}:${e}:${(t.halfWidth*2).toFixed(2)}:${Z3(i.waypoints.flat())}`}const Xf=i=>{const t=[...i].sort((n,s)=>n-s),e=t.length>>1;return t.length%2?t[e]:(t[e-1]+t[e])/2};class Q3{constructor({window:t=OT,best:e=kT,enough:n=$0}={}){this.window=t,this.best=e,this.enough=n,this.samples=[],this.offset=0,this.rtt=0}get ready(){return this.samples.length>=this.enough}sample(t,e,n){const s=n-t;if(!(s>=0))return;this.samples.push({rtt:s,offset:e-(t+n)/2}),this.samples.length>this.window&&this.samples.shift();const r=[...this.samples].sort((o,a)=>o.rtt-a.rtt).slice(0,this.best);this.offset=Xf(r.map(o=>o.offset)),this.rtt=Xf(r.map(o=>o.rtt))}hostNow(t){return t+this.offset}}const tr=(i,t)=>e=>typeof e=="number"&&Number.isFinite(e)&&e>=i&&e<=t,wi=(i,t)=>e=>Number.isInteger(e)&&e>=i&&e<=t,_m=i=>typeof i=="boolean",Vh=i=>t=>i.includes(t),Gl=i=>t=>t===null||i(t),Mm=i=>t=>t===void 0||i(t),Ii=(i,t=null)=>e=>typeof e=="string"&&[...e].length<=i&&(!t||t.test(e)),tR=(i,t)=>e=>Array.isArray(e)&&e.length===t&&e.every(i),Yo=(i,t,e=0)=>n=>Array.isArray(n)&&n.length>=e&&n.length<=t&&n.every(i),eR=i=>typeof i=="object"&&i!==null&&!Array.isArray(i)&&Object.getPrototypeOf(i)===Object.prototype,er=i=>{const t=Object.keys(i);return e=>eR(e)&&Object.keys(e).every(n=>t.includes(n))&&t.every(n=>i[n](e[n]))},nR=new RegExp(`^[${pa}]{${qr}}$`);function iR(i=Math.random){let t="";for(let e=0;e<qr;e++)t+=pa[Math.floor(i()*pa.length)];return t}const sR=i=>typeof i=="string"&&nR.test(i),qf=i=>AT+i,rR=["full","version","racing"],Ls=tr(-1e9,1e9),va=tr(0,1e5),Wl=Ii(2,/^p[0-5]$/),Da=Ii(3,/^(p[0-5]|a1?[0-9])$/),Gh=Ii(La,/^[^\u0000-\u001f\u007f-\u009f<>]+$/u),ym=Ii(3,/^[A-Z0-9]{3}$/),bm=Ii(3,/^[0-9]{1,3}$/),Sm=wi(0,16777215),wm=Ii(24,/^[a-z0-9-]+$/),Em=Vh(Object.keys(Qn)),Xl=[Ef,Ef,4,$c,$c,4,$c,4],oR=Xl.map(i=>tr(-i,i)),aR=i=>Array.isArray(i)&&i.length===LT&&i.every((t,e)=>oR[e](t)),$f={id:Da,t:Ls,s:aR,c:tR(tr(-1,1),IT),i:wi(0,1e5),p:tr(-1e7,1e7),lap:wi(0,999)},cR=er({id:Wl,name:Gh,livery:Sm,number:bm,code:ym,host:_m}),Yf={players:Yo(cR,jn,1),track:wm,level:Em},lR=er({id:Da,kind:Vh(["human","ai"]),name:Gh,code:ym,livery:Sm,number:bm,slot:wi(0,Dn.size-1),rival:Mm(wi(0,kn.length-1))}),hR=er({id:Da,time:Gl(va),best:Gl(va),dnf:_m}),Ye=i=>er({type:Ii(8),...i}),jf={hello:Ye({v:wi(0,1e6),name:Gh}),welcome:Ye({v:wi(0,1e6),you:Wl,room:sR,lobby:er(Yf)}),refuse:Ye({reason:Vh(rR)}),lobby:Ye(Yf),ping:Ye({t0:Ls}),pong:Ye({t0:Ls,th:Ls}),start:Ye({track:wm,level:Em,laps:wi(1,99),roster:Yo(lR,Dn.size,1),countdownAt:Ls,hold:tr(0,5)}),kart:Ye($f),snap:Ye({th:Ls,karts:Yo(er($f),Dn.size)}),finish:Ye({id:Da,time:va,best:Gl(va)}),results:Ye({entries:Yo(hR,Dn.size)}),left:Ye({id:Wl}),bye:Ye({reason:Mm(Ii(16,/^[a-z-]+$/))})},Oe={hello:(i,t=ma)=>({type:"hello",v:t,name:i}),welcome:(i,t,e)=>({type:"welcome",v:ma,you:i,room:t,lobby:e}),refuse:i=>({type:"refuse",reason:i}),lobby:({players:i,track:t,level:e})=>({type:"lobby",players:i,track:t,level:e}),ping:i=>({type:"ping",t0:i}),pong:(i,t)=>({type:"pong",t0:i,th:t}),start:({track:i,level:t,laps:e,roster:n,countdownAt:s,hold:r})=>({type:"start",track:i,level:t,laps:e,roster:n,countdownAt:s,hold:r}),kart:i=>({type:"kart",...i}),snap:(i,t)=>({type:"snap",th:i,karts:t}),finish:(i,t,e)=>({type:"finish",id:i,time:t,best:e}),results:i=>({type:"results",entries:i}),left:i=>({type:"left",id:i}),bye:i=>i?{type:"bye",reason:i}:{type:"bye"}};function uR(i){let t=i;try{const n=typeof i=="string"?i:JSON.stringify(i);if(typeof n!="string"||n.length>RT)return null;typeof i=="string"&&(t=JSON.parse(i))}catch{return null}const e=t&&Object.hasOwn(jf,t.type)?jf[t.type]:null;return e&&e(t)?t:null}const dR=kn.map(i=>i.name),fR=[...kn.map(i=>i.code),"YOU"],Kf=(i,t)=>i.toLocaleLowerCase()===t.toLocaleLowerCase();function pR(i){for(let t=0;t<jn;t++)if(!i.some(e=>e.id===`p${t}`))return`p${t}`;return null}function mR(i,t){const e=Uh(i).trim()||"Driver",n=s=>dR.some(r=>Kf(r,s))||t.some(r=>Kf(r.name,s));if(!n(e))return e;for(let s=2;s<=jn+1;s++){const r=` ${s}`,o=[...e].slice(0,La-r.length).join("").trimEnd()+r;if(!n(o))return o}return e}function gR(i,t){const n=(i.normalize("NFD").toUpperCase().replace(/[^A-Z]/g,"")+"DRV").slice(0,3),s=r=>fR.includes(r)||t.some(o=>o.code===r);if(!s(n))return n;for(let r=2;r<=99;r++){const o=n.slice(0,3-String(r).length)+r;if(!s(o))return o}return n}function vR(i,t){return i==="p0"?Nl:Ul.find(e=>!t.some(n=>n.livery===e.body))??Ul[0]}function Tm(i,t,e){const n=mR(t,e),{body:s,number:r}=vR(i,e);return{id:i,name:n,code:gR(n,e),livery:s,number:r,host:i==="p0"}}const xR=i=>[Nl,...Ul,...kn].find(t=>t.body===i)??Nl;function _R(i,t=Math.random){const e=[...Array(Dn.size).keys()];for(let r=e.length-1;r>0;r--){const o=Math.floor(t()*(r+1));[e[r],e[o]]=[e[o],e[r]]}const s=[...i].sort((r,o)=>r.id.localeCompare(o.id)).map(({id:r,name:o,code:a,livery:c,number:l})=>({id:r,kind:"human",name:o,code:a,livery:c,number:l}));for(let r=0;s.length<Dn.size;r++){const{name:o,code:a,body:c,number:l}=kn[r];s.push({id:`a${r}`,kind:"ai",name:o,code:a,livery:c,number:l,rival:r})}return s.forEach((r,o)=>r.slot=e[o]),s}const MR=["kart","finish"],Am=({state:{players:i,track:t,level:e}})=>({players:i,track:t,level:e}),Wh=i=>i.broadcast(Oe.lobby(Am(i))),Os={open(i){i.set({phase:"room",players:[Tm("p0",i.state.name,[])]})},peer(i,t){i.peers.set(t,null),i.heard.set(t,i.now())},message(i,t,e){if(!i.peers.has(t)&&e.type==="hello"&&Os.peer(i,t),!i.peers.has(t))return;i.heard.set(t,i.now());const n=i.peers.get(t);if(e.type==="hello")return n?void 0:yR(i,t,e);n&&(e.type==="ping"?bR(i,t,e):e.type==="bye"?Qc(i,t):MR.includes(e.type)&&e.id===n&&i.bus.emit("race",{from:n,msg:e}))},close:(i,t)=>Qc(i,t),update(i,t){for(const[e,n]of i.peers)t-i.heard.get(e)>(n?Y0:kh)&&Qc(i,e);i.waiting&&Os.start(i,i.waiting)},setLobby(i,{track:t=i.state.track,level:e=i.state.level}){i.set({track:t,level:e}),Wh(i)},start(i,t){if(i.waiting=SR(i)?null:t,i.waiting)return null;const{laps:e,hold:n}=t,{track:s,level:r,players:o}=i.state,a=_R(o,i.rand),c=i.now()+XT,l=Oe.start({track:s,level:r,laps:e,roster:a,hold:n,countdownAt:c});return i.racing=!0,i.broadcast(l),i.bus.emit("start",l),l}};function yR(i,t,e){const{players:n}=i.state,s=pR(n),r=e.v!==ma?"version":s?i.racing?"racing":null:"full";if(r)return i.transport.send(t,Oe.refuse(r));i.peers.set(t,s),i.set({players:[...n,Tm(s,e.name,n)]}),i.transport.send(t,Oe.welcome(s,i.state.room,Am(i))),Wh(i)}function bR(i,t,e){i.transport.send(t,Oe.pong(e.t0,i.now())),i.pongs.set(t,(i.pongs.get(t)??0)+1)}const SR=i=>[...i.peers].every(([t,e])=>!e||(i.pongs.get(t)??0)>=$0);function Qc(i,t){const e=i.peers.get(t);i.peers.delete(t)&&(i.heard.delete(t),i.pongs.delete(t),i.transport.drop(t),e&&(i.set({players:i.state.players.filter(n=>n.id!==e)}),i.broadcast(Oe.left(e)),Wh(i),i.bus.emit("left",e)))}const tl=(i,t)=>i.bus.emit("race",{from:"p0",msg:t}),jo={welcome(i,t){if(i.state.phase==="connecting"){if(t.v!==ma)return i.fail("version");i.set({phase:"room",you:t.you,room:t.room,...t.lobby}),i.pings=NT,i.nextPing=i.now()}},refuse:(i,t)=>i.fail(t.reason),lobby:(i,{players:t,track:e,level:n})=>i.state.phase==="room"&&i.set({players:t,track:e,level:n}),pong(i,t){i.clock.sample(t.t0,t.th,i.now()),i.held&&i.clock.ready&&jo.start(i,i.held)},start(i,t){i.racing=!0,i.held=i.clock.ready?null:t,i.held||i.bus.emit("start",t)},snap:tl,finish:tl,results(i,t){i.racing=!1,tl(i,t)},left:(i,t)=>i.bus.emit("left",t.id),bye:i=>i.fail("closed")},wR={open(i,t){i.hostPeer=t,i.heard.set("host",i.now()),i.send(Oe.hello(i.state.name))},close:i=>i.fail(i.state.phase==="room"?"lost":"network"),message(i,t,e){var n;t===i.hostPeer&&(i.heard.set("host",i.now()),(n=jo[e.type])==null||n.call(jo,i,e))},update(i,t){if(i.state.phase==="connecting"&&t-i.since>kh)return i.fail("timeout");if(i.state.phase==="room"){if(t-i.heard.get("host")>Y0)return i.fail("lost");t<i.nextPing||(i.send(Oe.ping(t)),i.nextPing=t+(i.pings-- >1?UT:DT))}}};class ER{constructor({makeTransport:t,now:e=()=>performance.now()/1e3,rand:n=Math.random}){Object.assign(this,{makeTransport:t,now:e,rand:n,bus:new uh}),this.state={phase:"choose",players:[]},this.side=null,this.heard=new Map}on(t,e){return this.bus.on(t,e)}get isHost(){return this.side===Os}create(t,{track:e,level:n}){const s=iR(this.rand);this.begin(Os,{isHost:!0,you:"p0",name:t,room:s,track:e,level:n}).host(s)}join(t,e){this.begin(wR,{isHost:!1,name:e,room:t}).join(t)}begin(t,e){var r;(r=this.transport)==null||r.close();const n=this.transport=this.makeTransport(),s=(o,a)=>n.on(o,c=>n===this.transport&&this.side&&a(c));return s("open",o=>this.side.open(this,o)),s("peer",o=>{var a,c;return(c=(a=this.side).peer)==null?void 0:c.call(a,this,o)}),s("close",o=>this.side.close(this,o)),s("error",o=>this.fail(o)),s("message",({from:o,data:a})=>(a=uR(a))&&this.side.message(this,o,a)),Object.assign(this,{side:t,racing:!1,clock:new Q3,since:this.now()}),this.peers=new Map,this.heard=new Map,this.pongs=new Map,this.waiting=null,this.held=null,this.set({phase:"connecting",error:null,players:[],...e}),n}leave(){this.side&&(this.isHost?this.broadcast(Oe.bye("closed")):this.send(Oe.bye())),this.end({phase:"choose",error:null,players:[],room:null})}fail(t){const e=this.state.phase==="room";this.end({phase:"error",error:t}),e&&this.bus.emit("closed",t)}end(t){var e;this.side=null,(e=this.transport)==null||e.close(),this.racing=!1,this.set(t)}update(){var n;const t=this.now(),e=t-(this.stepped??t);if(this.stepped=t,e>FT)for(const[s,r]of this.heard)this.heard.set(s,r+e);(n=this.side)==null||n.update(this,t)}hostNow(){return this.isHost?this.now():this.clock.hostNow(this.now())}set(t){this.state={...this.state,...t},this.bus.emit("change",this.state)}send(t){var e;(e=this.transport)==null||e.send(this.hostPeer,t)}sendTo(t,e){for(const[n,s]of this.peers)s===t&&this.transport.send(n,e)}broadcast(t){for(const[e,n]of this.peers)n&&this.transport.send(e,t)}setLobby(t){this.isHost&&Os.setLobby(this,t)}start(t){return this.isHost&&!this.racing?Os.start(this,t):null}endRace(){this.racing=!1}}const TR="modulepreload",AR=function(i,t){return new URL(i,t).href},Zf={},RR=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(e.map(l=>{if(l=AR(l,n),l in Zf)return;Zf[l]=!0;const h=l.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let g=o.length-1;g>=0;g--){const v=o[g];if(v.href===l&&(!h||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":TR,h||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),h)return new Promise((g,v)=>{f.addEventListener("load",g),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};class Xh{constructor({lag:t=0,loss:e=0,rand:n=Math.random}={}){this.lag=t,this.loss=e,this.rand=n,this.last=new Map}get active(){return this.lag>0||this.loss>0}arrival(t,e){let n=e+this.lag;const s=Math.max(2*this.lag,ZT);for(let r=0;r<20&&this.rand()<this.loss;r++)n+=s;return n=Math.max(n,this.last.get(t)??-1/0),this.last.set(t,n),n}mirror(){return new Xh({lag:this.lag,loss:this.loss,rand:this.rand})}forget(t){this.last.delete(t)}}function CR(i=(t=>(t=globalThis.location)==null?void 0:t.search)()??""){const e=new URLSearchParams(i),n=ft(Number(e.get("netlag"))||0,0,jT)/1e3,s=ft(Number(e.get("netloss"))||0,0,KT);return n>0||s>0?new Xh({lag:n,loss:s}):null}const PR={reliable:!0,serialization:"json"},LR={"unavailable-id":"taken","peer-unavailable":"not-found","browser-incompatible":"offline"},IR=i=>{var t;return((t=globalThis.navigator)==null?void 0:t.onLine)===!1?"offline":LR[i]??"network"},Jf=()=>performance.now()/1e3;class DR{constructor({shaper:t=CR(),loadPeer:e=()=>RR(()=>import("./bundler-DXD5IzWF.js"),[],import.meta.url)}={}){Object.assign(this,{shaper:t,loadPeer:e,bus:new uh,conns:new Map}),this.inbound=t!=null&&t.active?t.mirror():null,this.opened=this.closed=!1,this.onOffline=()=>this._fail("offline")}on(t,e){return this.bus.on(t,e)}host(t){this._start(qf(t),e=>this._opened(e.id))}join(t){this._start(void 0,e=>this._adopt(e.connect(qf(t),PR),!0))}async _start(t,e){var r,o;if(((r=globalThis.navigator)==null?void 0:r.onLine)===!1)return queueMicrotask(()=>this._fail("offline"));this.timer=setTimeout(()=>this._fail("timeout"),kh*1e3),(o=globalThis.addEventListener)==null||o.call(globalThis,"offline",this.onOffline);let n;try{({Peer:n}=await this.loadPeer())}catch{return this._fail("network")}if(this.closed)return;const s=this.peer=new n(t,{debug:0});s.on("open",()=>e(s)),s.on("connection",a=>this._adopt(a,!1)),s.on("error",a=>this._fail(IR(a.type))),s.on("disconnected",()=>!this.closed&&!s.destroyed&&s.reconnect())}_adopt(t,e){t.on("open",()=>{this.conns.set(t.peer,t),e?this._opened(t.peer):this.bus.emit("peer",t.peer)}),t.on("data",n=>this._arrive(t.peer,()=>this.bus.emit("message",{from:t.peer,data:n}))),t.on("close",()=>this.conns.delete(t.peer)&&this._arrive(t.peer,()=>this.bus.emit("close",t.peer))),t.on("error",()=>t.close())}_opened(t){clearTimeout(this.timer),!(this.opened||this.closed)&&(this.opened=!0,this.bus.emit("open",t))}_fail(t){this.opened||this.closed||(this.close(),this.bus.emit("error",t))}_arrive(t,e){if(!this.inbound)return e();const n=Jf();setTimeout(()=>!this.closed&&e(),(this.inbound.arrival(t,n)-n)*1e3)}send(t,e){var r;const n=this.conns.get(t);if(!(n!=null&&n.open))return;if(!((r=this.shaper)!=null&&r.active))return n.send(e);const s=Jf();setTimeout(()=>n.open&&n.send(e),(this.shaper.arrival(t,s)-s)*1e3)}broadcast(t){for(const e of this.conns.keys())this.send(e,t)}drop(t){const e=this.conns.get(t);!e||!this.conns.delete(t)||(e.close(),queueMicrotask(()=>this.bus.emit("close",t)))}close(){var s,r;this.closed=!0,clearTimeout(this.timer),(s=globalThis.removeEventListener)==null||s.call(globalThis,"offline",this.onOffline);const{conns:t,peer:e}=this;this.conns=new Map;const n=()=>{for(const o of t.values())o.close();e==null||e.destroy()};if(!t.size)return n();setTimeout(n,(eA+(((r=this.shaper)==null?void 0:r.lag)??0))*1e3)}}const Nr=2;class NR{constructor({size:t=VT,extrapolate:e=HT}={}){this.size=t,this.extrapolate=e,this.snaps=[],this.age=null,this.spread=0}get delay(){return Math.max(BT,(this.age??0)+GT+WT*this.spread)}get newest(){return this.snaps[this.snaps.length-1]??null}push(t,e=t.t){if(this.newest&&t.t<=this.newest.t)return!1;const n=e-t.t;return this.age!==null&&(this.spread+=(Math.abs(n-this.age)-this.spread)*Tf),this.age=this.age===null?n:this.age+(n-this.age)*Tf,this.snaps.push(t),this.snaps.length>this.size&&this.snaps.shift(),!0}sample(t,e=this.extrapolate){const{snaps:n}=this;if(!n.length)return null;if(t<n[0].t)return ql(n[0],n[0].s,!0);const s=this.newest;if(t>=s.t)return UR(s,t-s.t,e);let r=n.length-1;for(;n[r-1].t>t;)r--;const o=n[r-1],a=n[r],c=(t-o.t)/(a.t-o.t),l=o.s.map((h,u)=>u===Nr?h+Jn(a.s[u]-h)*c:Ln(h,a.s[u],c));return l[Nr]=Jn(l[Nr]),{...ql(c<.5?o:a,l,!1),c:o.c.map((h,u)=>Ln(h,a.c[u],c)),p:Ln(o.p,a.p,c)}}}const ql=(i,t,e)=>({s:t,c:i.c,i:i.i,p:i.p,lap:i.lap,stale:e});function UR(i,t,e){const n=Math.min(t,e),s=[...i.s],[r,o,a]=[s[3],s[4],s[6]],c=a*n,[l,h]=Math.abs(c)<1e-6?[n,0]:[Math.sin(c)/a,(1-Math.cos(c))/a];return s[0]+=r*l+o*h,s[1]+=o*l-r*h,s[3]=r*Math.cos(c)+o*Math.sin(c),s[4]=o*Math.cos(c)-r*Math.sin(c),s[Nr]=Jn(s[Nr]+c),ql(i,s,t>e)}class OR{constructor(){this.interps=new Map}push(t,e){this.interps.has(t.id)||this.interps.set(t.id,new NR),this.interps.get(t.id).push(t,e)}drop(t){this.interps.delete(t)}states(t,e,n){const s=new Map;for(const[r,o]of this.interps){const a=e??t-o.delay,c=o.sample(a,n);c&&s.set(r,{...c,t:a})}return s}}class kR{constructor(t,e){this.humans=t.filter(n=>n.kind==="human").map(n=>n.id),this.ids=t.map(n=>n.id),this.grace=e,this.done=new Map,this.gone=new Set,this.firstHuman=null}record(t,e,n,s){return this.done.has(t)||this.gone.has(t)||!this.ids.includes(t)?!1:(this.done.set(t,{time:e,best:n}),this.humans.includes(t)&&this.firstHuman===null&&(this.firstHuman=s),!0)}leave(t){this.done.has(t)||this.gone.add(t)}due(t){return this.firstHuman===null?!1:this.ids.every(n=>this.done.has(n)||this.gone.has(n))||t-this.firstHuman>=this.grace}entries(t){const e=s=>this.done.has(s)?0:this.gone.has(s)?2:1;return[...this.ids].sort((s,r)=>{const o=e(s)-e(r);return o||(e(s)===0?this.done.get(s).time-this.done.get(r).time:e(s)===1?t(r)-t(s):0)}).map(s=>{const r=this.done.get(s);return{id:s,time:(r==null?void 0:r.time)??null,best:(r==null?void 0:r.best)??null,dnf:this.gone.has(s)}})}}const Vo=(i,t)=>Math.round(i*10**t)/10**t,FR=[3,3,4,3,3,4,3,4],zR=4,BR=2,HR=2;function el(i,t,e){const n=e.s.map((s,r)=>Vo(ft(r===2?Jn(s):s,-Xl[r],Xl[r]),FR[r]));return{id:i,t:Vo(t,zR),s:n,c:e.c.map(s=>Vo(ft(s,-1,1),BR)),i:ft(Math.round(e.i),0,1e5),p:Vo(ft(e.p,-1e6,1e6),HR),lap:ft(Math.round(e.lap),0,999)}}class VR{constructor(t){this.period=1/t,this.acc=this.period}due(t){return this.acc+=t,this.acc<this.period?!1:(this.acc=Math.min(this.acc-this.period,this.period),!0)}}class GR{constructor({room:t,start:e}){Object.assign(this,{room:t,roster:e.roster,you:t.state.you,isHost:t.isHost}),this.book=this.isHost?new kR(this.roster,qT):null,this.remote=new OR,this.latest=new Map,this.ticker=new VR(this.isHost?PT:CT),this.events=[],this.results=null,this.lastFrame=this.hostSeen=t.hostNow(),this.away=!1,this.offs=[t.on("race",({msg:n})=>this.receive(n)),t.on("left",n=>this.drop(n)),t.on("closed",n=>this.events.push({type:"host-gone",reason:n}))]}update(t,{own:e=null,ai:n=[]}={}){const s=this.lastFrame=this.room.hostNow();if(!this.isHost){e&&this.ticker.due(t)&&this.room.send(Oe.kart(el(this.you,s,e)));const r=s-this.hostSeen>YT;r!==this.away&&this.events.push({type:"host-away",away:this.away=r});return}e&&this.latest.set(this.you,el(this.you,s,e));for(const r of n)this.latest.set(r.id,el(r.id,s,r));if(this.ticker.due(t))for(const[,r]of this.room.peers)r&&this.room.sendTo(r,Oe.snap(s,[...this.latest.values()].filter(o=>o.id!==r)));!this.results&&this.book.due(s)&&this.settle()}receive(t){const e=this.room.hostNow();if(t.type==="kart"){const{type:n,...s}=t;this.latest.set(s.id,s),this.remote.push(s,e),e-this.lastFrame>$T&&this.relay(s,e)}else if(t.type==="snap"){for(const n of t.karts)n.id!==this.you&&this.remote.push(n,e);t.karts.some(n=>n.id==="p0")&&(this.hostSeen=e)}else t.type==="finish"?this.flag(t.id,t.time,t.best):t.type==="results"&&!this.results&&(this.results=t.entries,this.events.push({type:"results",entries:t.entries}))}relay(t,e){for(const[,n]of this.room.peers)n&&n!==t.id&&this.room.sendTo(n,Oe.snap(e,[t]))}remoteStates(t,e){return this.remote.states(this.room.hostNow(),t,e)}finish(t,e){this.isHost?this.flag(this.you,t,e):this.room.send(Oe.finish(this.you,t,e))}aiFinish(t,e,n){this.isHost&&this.flag(t,e,n)}flag(t,e,n){this.isHost&&!this.book.record(t,e,n,this.room.hostNow())||(this.isHost&&this.room.broadcast(Oe.finish(t,e,n)),t!==this.you&&this.events.push({type:"finish",id:t,time:e,best:n}))}settle(){this.results=this.book.entries(t=>{var e;return((e=this.latest.get(t))==null?void 0:e.p)??-1/0}),this.room.broadcast(Oe.results(this.results)),this.events.push({type:"results",entries:this.results})}drop(t){var e;this.remote.drop(t),this.latest.delete(t),(e=this.book)==null||e.leave(t),this.events.push({type:"left",id:t})}poll(){return this.events.splice(0)}dispose(){for(const t of this.offs)t()}}function WR(i,t){return i.map(e=>({id:e.id,code:e.code,name:e.name,color:e.livery,isPlayer:e.id===t,...e.kind==="ai"?{profile:kn[e.rival]}:{}}))}function XR(i,t,e,n){return new Ll(i.path.count,i.startIndex,n,WR(t,e))}function qR(i,t,e,n){const{path:s,startIndex:r}=i.world,o=new Map(t.map(l=>[l.id,Dl(s,r,l.slot)])),a=o.get(e);i.kart.place(a.x,a.z,a.yaw),i.trackIndex=a.i;const c=[];return i.rivals.forEach((l,h)=>{const u=n&&t.find(f=>f.kind==="ai"&&f.rival===h);if(l.kart.object3d.visible=!!u,!u)return;const d=o.get(u.id);l.kart.place(d.x,d.z,d.yaw),l.index=d.i,l.id=u.id,c.push(l)}),{ai:c,spots:o}}function $R(i,t){const e=new Map(i.entries.map(s=>[s.id,s])),n=t.map(s=>e.get(s.id)).filter(Boolean);for(const s of t){const r=e.get(s.id);r&&(r.finishTime=s.time,r.bestLap=s.best??r.bestLap,r.dnf=s.dnf)}i.order=[...n,...i.entries.filter(s=>!n.includes(s))],i.final=!0}function YR(i,{id:t,time:e,best:n}){const s=i.entries.find(r=>r.id===t);s&&(s.finishTime=e,n!=null&&(s.bestLap=n))}class jR{constructor(t,e,n){this.kart=new wh(null,Rm(e)),this.key=qh(e),this.profile={body:e.livery},this.fx=n,this.index=0,this.t=null,t.add(this.kart.object3d)}place(t){this.kart.place(t.x,t.z,t.yaw),this.kart.object3d.visible=!0,this.index=t.i,this.t=null,this.fx.reset()}draw(t,e){const[n,s,r,o,a,c,l,h]=t.s,{kart:u}=this,d=u.telemetry,f=Ti(r),g=o*f.x+a*f.z,v=e>0?(g-d.forwardSpeed)/e:0;u.state={x:n,z:s,yaw:r,vx:o,vz:a,steer:c,yawRate:l,slipAngle:h},Object.assign(d,{speed:Math.hypot(o,a),forwardSpeed:g,slip:Math.abs(o*f.z-a*f.x),sliding:Math.abs(h)>QT,longAccel:Ce(d.longAccel,v,tA,e)||0,latAccel:g*l,yawRate:l,slipAngle:h,throttle:t.c[0],brake:t.c[1],steer:c}),u.model.update(u.state,d,e),[this.index,this.t]=[t.i,t.t]}dispose(t){t.remove(this.kart.object3d),Bh(this.kart.object3d)}}const qh=i=>`${i.livery}:${i.number}`;function Rm(i){const{body:t,suit:e,stripe:n}=xR(i.livery);return{number:i.number,livery:{body:t,suit:e,helmet:t,helmetStripe:n}}}function Cm(i,t){const e=t?qh(t):null;(i.kartLook??null)!==e&&(i.kartLook=e,Bh(i.kart.setLook(t?Rm(t):{})))}function Qf(i,t,e){const n=i.state;return{s:[n.x,n.z,n.yaw,n.vx,n.vz,n.steer,n.yawRate,n.slipAngle??0],c:[i.telemetry.throttle??0,i.telemetry.brake??0],i:t,p:(e==null?void 0:e.progress)??0,lap:(e==null?void 0:e.timer.lap)??0}}function KR({s:i,i:t}){const[e,n,s,r,o]=i;return{state:{x:e,z:n,yaw:s,vx:r,vz:o},index:t,speed:Math.hypot(r,o)}}class ZR{constructor(t,e,n,s,r){Object.assign(this,{game:t,room:e,pool:s,notify:r,roster:n.roster,you:e.state.you}),this.isHost=e.isHost,this.net=new GR({room:e,start:n}),this.final=!1,this.awayNotice=null;const o=hr(n.track);o!==t.track&&t.loadTrack(o);for(const c of t.rivals)c.driver.level=Qn[n.level]??Qn[P0];t.field=XR(t.world,n.roster,this.you,n.laps),t.session.laps=n.laps,t.session.follow(()=>e.hostNow()-n.countdownAt),Hs(t,"online",n.hold),Cm(t,n.roster.find(c=>c.id===this.you));const a=qR(t,n.roster,this.you,this.isHost);this.ai=a.ai,s.setRoster(n.roster.filter(c=>c.id!==this.you&&!this.ai.some(l=>l.id===c.id)),a.spots),this.others=[...this.ai,...s.list],this.indices=t.field.entries.map(c=>this.indexSource(c))}indexSource(t){const{game:e}=this;if(t.id===this.you)return()=>e.trackIndex;const n=this.ai.find(s=>s.id===t.id);return n?()=>n.index:()=>{var s;return((s=this.pool.get(t.id))==null?void 0:s.index)??t.timer.lastIndex??0}}step(t){const{game:e,net:n}=this,{session:s}=e,r=s.state,o=n.room.hostNow(),a=[...n.remoteStates(o,JT)].map(([,c])=>KR(c));mm(e,t,r!=="countdown",this.ai,a),n.update(t,{own:Qf(e.kart,e.trackIndex,e.field.player),ai:this.aiStates()}),this.pool.draw(n.remoteStates(),t,e.camera.three,e.renderer.three.domElement.height),(r==="racing"||r==="finished")&&!this.final&&this.time(r,t);for(const c of n.poll())this.on(c);this.remindAway(t)}time(t,e){const{game:n,net:s}=this;for(const r of n.field.update(this.indices.map(o=>o()),n.session.clock))r.isPlayer&&t==="racing"?(n.session.finish(),s.finish(r.finishTime,r.bestLap)):r.profile&&this.isHost&&s.aiFinish(r.id,r.finishTime,r.bestLap);xm(n,e)}on(t){const{game:e}=this,n=e.field.entries.find(s=>s.id===t.id);if(t.type==="finish")YR(e.field,t);else if(t.type==="left"){const s=this.pool.get(t.id);this.pool.remove(t.id),this.others=this.others.filter(o=>o!==s);const r=n&&!this.final&&n.finishTime===null;r&&(n.dnf=!0),this.notify(`${((n==null?void 0:n.name)??"A driver").toUpperCase()} LEFT`,r?"DNF":"")}else t.type==="results"?($R(e.field,t.entries),this.final=!0,this.isHost&&this.room.endRace(),e.session.state==="racing"&&e.session.finish()):t.type==="host-gone"?this.hostGone=t.reason:t.type==="host-away"&&this.hostAway(t.away)}hostAway(t){this.awayNotice=t?0:null,t||this.notify("HOST BACK")}remindAway(t){this.awayNotice===null||(this.awayNotice-=t)>0||(this.notify("HOST AWAY","WAITING FOR THEIR GAME"),this.awayNotice=j0)}aiStates(){if(!this.isHost)return[];const{entries:t}=this.game.field;return this.ai.map(e=>({id:e.id,...Qf(e.kart,e.index,t.find(n=>n.id===e.id))}))}dispose(){this.net.dispose(),this.game.session.follow(null)}}class JR{constructor(t){this.scene=t,this.karts=new Map,this.spareFx=[]}setRoster(t,e){const n=new Map(t.map(s=>[s.id,s]));for(const[s,r]of this.karts){const o=n.get(s);(!o||qh(o)!==r.key)&&this.remove(s)}for(const s of t){if(!this.karts.has(s.id)){const r=this.spareFx.pop()??new Eh(this.scene);this.karts.set(s.id,new jR(this.scene,s,r))}this.karts.get(s.id).place(e.get(s.id))}}get list(){return[...this.karts.values()]}get(t){return this.karts.get(t)}draw(t,e,n,s){for(const[r,o]of this.karts){const a=t.get(r);a&&o.draw(a,e),o.fx.update(o.kart,e,n,s)}}remove(t){const e=this.karts.get(t);e&&(this.karts.delete(t),e.dispose(this.scene),e.fx.reset(),this.spareFx.push(e.fx))}clear(){for(const t of[...this.karts.keys()])this.remove(t)}}function QR(i,t){const{room:e}=i,{screens:n}=t,{lobby:s}=n;s.bind({onCreate:o=>e.create(o,{track:t.track.id,level:t.difficulty}),onJoin:(o,a)=>e.join(o,a),onStart:()=>i.start(),onLeave:()=>e.leave(),onTrack:o=>e.setLobby({track:Pm(e.state.track,o)}),onLevel:o=>e.setLobby({level:o}),onBack:()=>n.closeLobby()}),e.on("change",o=>s.render(o));const r=new URLSearchParams(window.location.search);r.has("room")&&!r.has("lobbydemo")&&(n.setMode("online"),n.openLobby(r.get("room")),s.choose.codeComplete&&s.do("join"))}function Pm(i,t){const e=Ue.indexOf(hr(i));return Ue[(e+t+Ue.length)%Ue.length].id}class tC{constructor(t,e=()=>new DR){jr(this,"notify",(t,e="")=>this.game.screens.notify(t,e));this.game=t,this.room=new ER({makeTransport:e}),this.pool=new JR(t.renderer.scene),this.race=null,this.room.on("start",n=>this.begin(n)),QR(this,t),setInterval(()=>this.room.update(),zT*1e3),window.addEventListener("pagehide",()=>this.room.leave())}get active(){return!!this.race}get others(){var t;return((t=this.race)==null?void 0:t.others)??[]}start(t=0){const{room:e}=this;!e.isHost||e.racing||(t&&e.setLobby({track:Pm(e.state.track,t)}),e.start({laps:hr(e.state.track).laps,hold:L0()}))}begin(t){var e;(e=this.race)==null||e.dispose(),this.game.screens.lobby.show(!1),this.game.screens.showOnlinePause(!1),this.game.screens.results.setOnline(this.room.isHost?"host":"client"),this.race=new ZR(this.game,this.room,t,this.pool,this.notify)}step(t){var n,s;this.room.update(),(n=this.race)==null||n.step(t);const e=(s=this.race)==null?void 0:s.hostGone;e&&this.leave(e==="closed"?"HOST LEFT":"CONNECTION LOST")}handle(t,e){const{screens:n}=this.game;if(e==="finished"){n.showOnlinePause(!1);const s=Cr(t);s==="menu"?this.leave():s&&this.start(s==="next"?1:0);return}if(t.action("pause")&&n.showOnlinePause(!n.onlinePause.visible),t.action("quit")&&n.onlinePause.visible)return this.leave();t.action("reset")&&e==="racing"&&vm(this.game)}leave(t=null){var s;const{game:e}=this;this.room.leave(),(s=this.race)==null||s.dispose(),this.race=null,this.pool.clear(),Cm(e,null),e.field=e.soloField,e.field.reset(),pm(e),e.screens.results.setOnline(null),e.screens.showOnlinePause(!1),e.screens.lobby.show(!1),Ps(e),t&&this.notify(t,"BACK TO THE MENU");const n=new URL(window.location.href);n.searchParams.has("room")&&(n.searchParams.delete("room"),window.history.replaceState(window.history.state,"",n))}}class eC{constructor(){this._next=0,this._buzzCooldown=0,this._onKerb=!1}update(t,e,n){var u,d,f;if(this._next-=e,this._buzzCooldown-=e,!n)return;const s=t.kart.telemetry,r=t.kerb.amount||0,o=ft((s.impact||0)/fn.impactFull,0,1),a=ft(((s.slip||0)-fn.slideFrom)/fn.slideRange,0,1),c=ft(((s.rpm||0)-fn.rpmFrom)/(fn.rpmTo-fn.rpmFrom),0,1),l=t.input.pad,h=l==null?void 0:l.vibrationActuator;if(h&&this._next<=0){const g=Math.max(r*fn.kerb,o),v=Math.max(a*fn.slide,c*fn.engine*(s.throttle||0));this._next=fn.period,(g>.02||v>.02)&&((f=(d=(u=h.playEffect)==null?void 0:u.call(h,"dual-rumble",{startDelay:0,duration:fn.period*1e3+30,strongMagnitude:g,weakMagnitude:v}))==null?void 0:d.catch)==null||f.call(d,()=>{}))}!l&&navigator.vibrate&&this._buzzCooldown<=0&&(o>.2?(navigator.vibrate(Math.round(20+50*o)),this._buzzCooldown=.25):r>.4&&!this._onKerb&&(navigator.vibrate(12),this._buzzCooldown=.2)),this._onKerb=r>.4}}const Lm=["x","z","yaw","steer","vx","vz","forwardSpeed","latAccel","longAccel","throttle","brake","slip","rpm"],Tr=Lm.length,tp=["off","red","go"];class nC{constructor(t=qn.rate,e=qn.maxSeconds){this.step=1/t,this.maxFrames=Math.ceil(e*t),this.reset(0)}reset(t){this.karts=t,this.stride=3+t*Tr,this.data=new Float32Array(Math.max(1,this.stride*64)),this.frames=0,this.time=0,this._next=0}get duration(){return this.frames?this.data[(this.frames-1)*this.stride]:0}record(t,e,n=0,s="off"){if(this.time+=t,this.time<this._next||this.frames>=this.maxFrames||e.length!==this.karts)return!1;if(this._next=Math.max(this._next+this.step,this.time-this.step),(this.frames+1)*this.stride>this.data.length){const a=new Float32Array(this.data.length*2);a.set(this.data),this.data=a}const r=this.frames*this.stride,o=this.data;return o[r]=this.time,o[r+1]=n,o[r+2]=Math.max(0,tp.indexOf(s)),e.forEach(({state:a,telemetry:c},l)=>{const h=r+3+l*Tr;[o[h],o[h+1],o[h+2],o[h+3],o[h+4],o[h+5]]=[a.x,a.z,a.yaw,a.steer??0,a.vx??0,a.vz??0],[o[h+6],o[h+7],o[h+8],o[h+9],o[h+10],o[h+11],o[h+12]]=[c.forwardSpeed??0,c.latAccel??0,c.longAccel??0,c.throttle??0,c.brake??0,c.slip??0,c.rpm??0]}),this.frames++,!0}frameAt(t){let[e,n]=[0,this.frames-1];for(;e<n;){const s=e+n+1>>1;this.data[s*this.stride]<=t?e=s:n=s-1}return e}sample(t,e,n={}){if(!this.frames)return n;const s=this.frameAt(t),r=Math.min(s+1,this.frames-1),[o,a]=[s*this.stride,r*this.stride],c=this.data[a]-this.data[o],l=c>0?Math.min(1,Math.max(0,(t-this.data[o])/c)):0,[h,u]=[o+3+e*Tr,a+3+e*Tr];for(let d=0;d<Tr;d++){const[f,g]=[this.data[h+d],this.data[u+d]];n[Lm[d]]=d===2?f+Jn(g-f)*l:f+(g-f)*l}return n}lightsAt(t){const e=this.frameAt(t)*this.stride;return{lights:this.data[e+1],lightsMode:tp[this.data[e+2]]??"off"}}}const ep=i=>`${Math.floor(i/60)}:${(i%60).toFixed(1).padStart(4,"0")}`;class iC{constructor(t){this.el=$t("div","replay-bar",`<div class="rp-top"><b class="rp-tag">REPLAY</b><span data-ref="driver"></span><em data-ref="director">DIRECTOR</em><span class="rp-time" data-ref="time"></span></div>
       <div class="rp-track" data-ref="track"><i data-ref="fill"></i></div>
       <div class="rp-buttons">
         <button data-act="back" title="Back 5 s">« 5s <kbd>←</kbd></button>
         <button data-act="pause" data-ref="play">❚❚ <kbd>K</kbd></button>
         <button data-act="fwd" title="Forward 5 s">5s » <kbd>→</kbd></button>
         <button data-act="slower">− <kbd>[</kbd></button><span class="rp-speed" data-ref="speed">1×</span><button data-act="faster">+ <kbd>]</kbd></button>
         <button data-act="cam" data-ref="cam">TV <kbd>C</kbd></button>
         <button data-act="prev">◀ <kbd>↑</kbd></button><button data-act="next">▶ <kbd>↓</kbd></button>
         <button data-act="director">AUTO <kbd>A</kbd></button>
         <button class="rp-exit" data-act="exit">EXIT <kbd>ESC</kbd></button>
       </div>`),this.el.hidden=!0,document.body.appendChild(this.el),this.r=is(this.el);for(const e of this.el.querySelectorAll("[data-act]"))e.addEventListener("click",()=>t(e.dataset.act));this.r.track.addEventListener("pointerdown",e=>{const n=this.r.track.getBoundingClientRect();t("seek",Math.max(0,Math.min(1,(e.clientX-n.left)/n.width)))})}show(t){this.el.hidden=!t}update({t,end:e,speed:n,paused:s,cam:r,driver:o,auto:a}){Vt(this.r.time,`${ep(t)} / ${ep(e)}`),this.r.fill.style.width=`${e?100*t/e:0}%`,Vt(this.r.speed,`${n}×`),this.r.play.firstChild.textContent=s?"▶ ":"❚❚ ",this.r.cam.firstChild.textContent=`${r} `,Vt(this.r.driver,o.toUpperCase()),this.r.director.hidden=!a}}const nl=["tv","chase","far","cockpit"],sC={tv:"TV",chase:"CHASE",far:"FAR",cockpit:"ONBOARD"};class rC{constructor(t){this.game=t,this.recorder=new nC,this.bar=new iC((e,n)=>this.act(e,n)),this.active=!1,this._sample={}}begin(t){this.karts=t?[this.game.kart]:[this.game.kart,...this.game.rivals.map(e=>e.kart)],this.names=t?["You"]:["You",...this.game.rivals.map(e=>e.profile.name)],this.fx=t?[this.game.fx]:[this.game.fx,...this.game.rivals.map(e=>e.fx)],this.recorder.reset(this.karts.length),this.indices=this.karts.map(()=>-1)}record(t){if(!this.karts)return;const{session:e}=this.game;this.recorder.record(t,this.karts,e.lights,e.lightsMode)}get available(){return!!this.karts&&this.recorder.duration>2}open(){if(!this.available||this.active)return;const t=this.game;this.saved=this.karts.map(e=>({state:e.state,telemetry:{...e.telemetry}})),Object.assign(this,{active:!0,t:0,speed:1,paused:!1,target:0,cam:"tv",auto:!0,_hold:0}),t.screens.showResults(!1),t.screens.showSeason(!1),t.hud.setVisible(!1),t.ghost.object3d.visible=!1;for(const e of this.fx)e.reset();this._camera(),this.bar.show(!0)}close(){if(!this.active)return;const t=this.game;this.active=!1,this.bar.show(!1),this.karts.forEach((e,n)=>{e.state=this.saved[n].state,Object.assign(e.telemetry,this.saved[n].telemetry),e.model.update(e.state,e.telemetry,0,!0)}),t.camera.broadcast(t.kart),t.screens.showResults(!0)}act(t,e){const n=this.recorder.duration;if(t==="pause")this.paused=!this.paused;else if(t==="back")this.t=Math.max(0,this.t-qn.seek);else if(t==="fwd")this.t=Math.min(n,this.t+qn.seek);else if(t==="seek")this.t=Math.max(0,Math.min(n,e*n));else if(t==="slower"||t==="faster"){const s=qn.speeds.indexOf(this.speed)+(t==="faster"?1:-1);this.speed=qn.speeds[Math.max(0,Math.min(qn.speeds.length-1,s))]}else t==="cam"?(this.cam=nl[(nl.indexOf(this.cam)+1)%nl.length],this._camera()):t==="prev"||t==="next"?(this.auto=!1,this.target=(this.target+(t==="next"?1:-1)+this.karts.length)%this.karts.length,this._camera()):t==="director"?this.auto=!0:t==="exit"&&this.close();if(t==="back"||t==="fwd"||t==="seek")for(const s of this.fx)s.reset()}handle(t){const e={replayPause:"pause",replayBack:"back",replayFwd:"fwd",replaySlower:"slower",replayFaster:"faster",camera:"cam",replayPrev:"prev",replayNext:"next",replayDirector:"director"};for(const[n,s]of Object.entries(e))t.action(n)&&this.act(s);(t.action("pause")||t.action("raceAgain")||t.action("replay"))&&this.close()}_camera(){const t=this.game,e=this.karts[this.target];this.cam==="tv"?t.camera.broadcast(e):(t.camera.followCam.view=this.cam,t.camera.follow(e),t.camera._swoop=1)}_direct(t){if(!this.auto||this.karts.length<2||(this._hold-=t,this._hold>0))return;const{path:e}=this.game.world,n=this.karts.map((c,l)=>this.indices[l]=e.nearest(c.state.x,c.state.z,this.indices[l]));let s=this.target,r=1/0;this.karts.forEach((c,l)=>{for(let h=0;h<this.karts.length;h++){if(h===l)continue;let u=(n[h]-n[l])*e.spacing;u<-e.length/2&&(u+=e.length),u>.5&&u<r&&Math.hypot(c.state.vx,c.state.vz)>3&&([s,r]=[l,u])}}),r>qn.battle&&(s=0);const[o,a]=qn.directorHold;this._hold=o+this.t*7.3%1*(a-o),s!==this.target&&(this.target=s,this._camera())}frame(t){var l,h;const e=this.game,n=this.recorder.duration;this.paused||(this.t=Math.min(n,this.t+t*this.speed)),this.t>=n&&(this.paused=!0);const s=this.paused?0:t*this.speed,r=this._sample;this.karts.forEach((u,d)=>{this.recorder.sample(this.t,d,r),u.state={...u.state,x:r.x,z:r.z,yaw:r.yaw,steer:r.steer,vx:r.vx,vz:r.vz,yawRate:0},Object.assign(u.telemetry,{speed:Math.hypot(r.vx,r.vz),forwardSpeed:r.forwardSpeed,latAccel:r.latAccel,longAccel:r.longAccel,throttle:r.throttle,brake:r.brake,slip:r.slip,rpm:r.rpm,impact:0,wheelSpeed:void 0}),u.model.update(u.state,u.telemetry,s),s>0&&this.fx[d].update(u,s,e.camera.three,e.renderer.three.domElement.height)}),this._direct(t);const{lights:o,lightsMode:a}=this.recorder.lightsAt(this.t);e.world.gantry.setLights(o,a);const c=this.karts[this.target];e.world.lighting.follow(c.state.x,c.state.z),(h=(l=e.world).update)==null||h.call(l,t),e.camera.update(c,t),e.post.setFocus(this.cam==="tv"?e.camera.three.position.distanceTo(c.object3d.position):null),c.model.setFirstPerson(this.cam==="cockpit"),e.engine.update(c.telemetry,c.telemetry.throttle,s,s>0),e.tyres.update(c.telemetry,s,s>0,0),e.pack.update(c.state,this.karts.filter(u=>u!==c),s,s>0),this.bar.update({t:this.t,end:n,speed:this.speed,paused:this.paused,cam:sC[this.cam],driver:this.names[this.target],auto:this.auto})}}const Im="tbc-kart.track",Dm="tbc-kart.level",np="tbc-kart.aids";class oC{constructor(){jr(this,"controlsFor",t=>q3(this,t));jr(this,"step",t=>j3(this,t));this.bus=new uh,this.renderer=new Py,this.camera=new Eb(window.innerWidth/window.innerHeight);const t=this.renderer.scene;this.kart=new wh(null),this.ghost=new aw,this.rivals=U3(t),t.add(this.kart.object3d,this.ghost.object3d),this.fx=new Eh(t),this.kerb=new R0,this.post=new jy(this.renderer,t,this.camera.three),this.audio=new fw,this.engine=new S0(this.audio),this.pack=new xw(this.audio),this.sfx=new _w(this.audio),this.tyres=new yw(this.audio),this.rumble=new bw(this.audio),this.haptics=new eC,this.replay=new rC(this),this.recorder=new Yw,this.input=new Cb,this.hud=new _E(this.bus,this.input),this.screens=new iA(e=>this.input.trigger(e)),this.difficulty=cC(),this.season=SE(),this.qualiGrid=null,this.screens.bindLevels(this.difficulty,e=>this.setDifficulty(e)),this.aids=lC(np,Br,qw),this.screens.bindAids(this.aids,e=>this.setAids(e)),this.screens.addGraphicsPicker(),this.screens.setSeason(Dh(this.season)),this.debug=new rA,this.autopilot=new Qw(null),this.impactCooldown=0,[this.lastPosition,this.heldPosition,this.positionAge]=[0,0,0],g3(this),this.loadTrack(aC()),this.online=new tC(this),window.addEventListener("resize",()=>this.resize())}loadTrack(t){const e=this.renderer.scene;this.world&&(e.remove(this.world.group),Bh(this.world.group)),this.track=t,this.world=m3(t,this.renderer.maxAnisotropy),e.add(this.world.group);const{bounds:n,atmosphere:s}=this.world;s&&this.renderer.setAtmosphere(s);const r=[this.kart,...this.rivals.map(u=>u.kart)].map(u=>u.object3d);this.renderer.captureEnvironment(new R(n.cx,1.2,n.cz),[...r,this.ghost.object3d],s?2e3:500);const{path:o,startIndex:a,anchors:c}=this.world;this.camera.anchors=c,pm(this),this.renderer.three.compile(this.renderer.scene,this.camera.three),this.signature=J3(t,o,a),this.recordKey=tE(t.id),this.record=eE(this.signature,this.recordKey),this.session=new $w(o.count,a,this.bus,this.record,t.laps);const l=[{...Pl,color:oa.body,isPlayer:!0},...kn.map(u=>({code:u.code,name:u.name,color:u.body,profile:u,isPlayer:!1}))];this.field=this.soloField=new Ll(o.count,a,t.laps,l),this.qualiField=new Ll(o.count,a,t.laps,l,{timed:!0}),this.hud.setTrack(o,a,t.laps);const h=Ue.indexOf(t);this.screens.setTrack(t,o,a,h,Ue.length,this.record.best);for(const u of this.rivals)u.fx.reset();Hh(this,!0),this.camera.broadcast(this.kart)}setDifficulty(t){this.difficulty=t;for(const e of this.rivals)e.driver.level=Qn[t];$l(Dm,t)}setAids(t){this.aids=t,$l(np,t)}selectTrack(t){const e=Ue.indexOf(this.track);this.loadTrack(Ue[(e+t+Ue.length)%Ue.length]),Nm(this.track.id);const n=new URL(window.location.href);n.searchParams.has("track")&&(n.searchParams.set("track",this.track.id),window.history.replaceState(window.history.state,"",n))}resize(){const[t,e]=[window.innerWidth,window.innerHeight];this.renderer.setSize(t,e),this.post.setSize(t,e),this.camera.setAspect(t/e),this.hud.resize()}start(){Y3(this)}advance(t,e=1/60){for(let n=0;n<t;n+=e)this.step(e);this.post.render(e)}}function aC(){const i=new URLSearchParams(window.location.search).get("track");let t=null;try{t=localStorage.getItem(Im)}catch{}const{track:e,fromUrl:n,unknown:s}=K3(i,t,Ue);return s&&console.warn(`?track=${s}: no such track (${Ue.map(r=>r.id).join(", ")})`),n&&Nm(e.id),e}function Nm(i){$l(Im,i)}function $l(i,t){try{localStorage.setItem(i,t)}catch{}}function cC(){let i=null;try{i=localStorage.getItem(Dm)}catch{}return Qn[i]?i:P0}function lC(i,t,e){let n=null;try{n=localStorage.getItem(i)}catch{}return t[n]?n:e}const hC=new oC;hC.start();
