!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,d=s||c||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return d.Date.now()};function b(e,t,n){var i,o,a,u,f,l,s=0,c=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=i,r=o;return i=o=void 0,s=t,u=e.apply(r,n)}function S(e){return s=e,f=setTimeout(h,t),c?b(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-s>=a}function h(){var e=g();if(j(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return d?p(n,a-(e-s)):n}(e))}function w(e){return f=void 0,m&&i?b(e):(i=o=void 0,u)}function N(){var e=g(),n=j(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return S(l);if(d)return f=setTimeout(h,t),b(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=O(t)||0,y(n)&&(c=!!n.leading,a=(d="maxWait"in n)?v(O(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),N.cancel=function(){void 0!==f&&clearTimeout(f),s=0,i=l=o=f=void 0},N.flush=function(){return void 0===f?u:w(g())},N}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};var S=document.querySelector(".feedback-form"),j="feedback-form-state",h=localStorage.getItem(j);S.addEventListener("input",e(t)((function(){var e={email:S.elements.email.value,message:S.elements.message.value};localStorage.setItem(j,JSON.stringify(e))}),500)),S.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(h)||""),S.elements.email.value="",S.elements.message.value="",localStorage.clear()})),function(){if(!JSON.parse(h))return S.elements.message.value="",void(S.elements.email.value="");S.elements.email.value=JSON.parse(h).email,S.elements.message.value=JSON.parse(h).message}()}();
//# sourceMappingURL=03-feedback.c2424968.js.map