!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,m=c||d||Function("return this")(),s=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return m.Date.now()};function y(e,t,n){var r,i,a,u,f,l,c=0,d=!1,m=!1,s=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(w,t),d?y(e):u}function h(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function w(){var e=p();if(h(e))return x(e);f=setTimeout(w,function(e){var n=t-(e-l);return m?g(n,a-(e-c)):n}(e))}function x(e){return f=void 0,s&&r?y(e):(r=i=void 0,u)}function O(){var e=p(),n=h(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(m)return f=setTimeout(w,t),y(l)}return void 0===f&&(f=setTimeout(w,t)),u}return t=S(t)||0,b(n)&&(d=!!n.leading,a=(m="maxWait"in n)?v(S(n.maxWait)||0,t):a,s="trailing"in n?!!n.trailing:s),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},O.flush=function(){return void 0===f?u:x(p())},O}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var j="feedback-form-state",h="feedback-mail",w={form:document.querySelector(".feedback-form"),textarea:document.querySelector("[name=message]"),mail:document.querySelector("[name=email]")},x={};w.form.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem(j),localStorage.removeItem(h),console.log(x)})),w.textarea.addEventListener("input",e(t)((function(e){var t=e.target.value;localStorage.setItem(j,t)}),500)),w.mail.addEventListener("input",e(t)((function(e){var t=e.target.value;localStorage.setItem(h,t)}),500)),w.form.addEventListener("input",(function(e){x[e.target.name]=e.target.value,localStorage.setItem("Data",JSON.stringify(x))})),function(){var e=localStorage.getItem(j),t=localStorage.getItem(h);e&&(w.textarea.value=e);t&&(w.mail.value=t)}()}();
//# sourceMappingURL=03-feedback.d6ace9f8.js.map