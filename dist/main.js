(()=>{"use strict";function t(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function e(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function n(n,a){const r=t(n);return isNaN(a)?e(n,NaN):a?(r.setDate(r.getDate()+a),r):r}const a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function r(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const o={date:r({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:r({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:r({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},i={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function s(t){return(e,n)=>{let a;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,r=n?.width?String(n.width):e;a=t.formattingValues[r]||t.formattingValues[e]}else{const e=t.defaultWidth,r=n?.width?String(n.width):t.defaultWidth;a=t.values[r]||t.values[e]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function c(t){return(e,n={})=>{const a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;const i=o[0],s=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let u;return u=t.valueCallback?t.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:e.slice(i.length)}}}var u;const d={code:"en-US",formatDistance:(t,e,n)=>{let r;const o=a[t];return r="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:o,formatRelative:(t,e,n,a)=>i[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:s({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:s({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:s({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:s({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:s({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(u={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(u.matchPattern);if(!n)return null;const a=n[0],r=t.match(u.parsePattern);if(!r)return null;let o=u.valueCallback?u.valueCallback(r[0]):r[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(a.length)}}),era:c({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:c({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:c({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:c({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let l={};function h(){return l}Math.pow(10,8);const m=6048e5,f=864e5;function g(e){const n=t(e);return n.setHours(0,0,0,0),n}function y(e){const n=t(e),a=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return a.setUTCFullYear(n.getFullYear()),+e-+a}function w(n){const a=t(n);return function(t,e){const n=g(t),a=g(e),r=+n-y(n),o=+a-y(a);return Math.round((r-o)/f)}(a,function(n){const a=t(n),r=e(n,0);return r.setFullYear(a.getFullYear(),0,1),r.setHours(0,0,0,0),r}(a))+1}function p(e,n){const a=h(),r=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,o=t(e),i=o.getDay(),s=(i<r?7:0)+i-r;return o.setDate(o.getDate()-s),o.setHours(0,0,0,0),o}function b(t){return p(t,{weekStartsOn:1})}function M(n){const a=t(n),r=a.getFullYear(),o=e(n,0);o.setFullYear(r+1,0,4),o.setHours(0,0,0,0);const i=b(o),s=e(n,0);s.setFullYear(r,0,4),s.setHours(0,0,0,0);const c=b(s);return a.getTime()>=i.getTime()?r+1:a.getTime()>=c.getTime()?r:r-1}function D(n){const a=t(n),r=+b(a)-+function(t){const n=M(t),a=e(t,0);return a.setFullYear(n,0,4),a.setHours(0,0,0,0),b(a)}(a);return Math.round(r/m)+1}function v(n,a){const r=t(n),o=r.getFullYear(),i=h(),s=a?.firstWeekContainsDate??a?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,c=e(n,0);c.setFullYear(o+1,0,s),c.setHours(0,0,0,0);const u=p(c,a),d=e(n,0);d.setFullYear(o,0,s),d.setHours(0,0,0,0);const l=p(d,a);return r.getTime()>=u.getTime()?o+1:r.getTime()>=l.getTime()?o:o-1}function k(n,a){const r=t(n),o=+p(r,a)-+function(t,n){const a=h(),r=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,o=v(t,n),i=e(t,0);return i.setFullYear(o,0,r),i.setHours(0,0,0,0),p(i,n)}(r,a);return Math.round(o/m)+1}function T(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const P={y(t,e){const n=t.getFullYear(),a=n>0?n:1-n;return T("yy"===e?a%100:a,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):T(n+1,2)},d:(t,e)=>T(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>T(t.getHours()%12||12,e.length),H:(t,e)=>T(t.getHours(),e.length),m:(t,e)=>T(t.getMinutes(),e.length),s:(t,e)=>T(t.getSeconds(),e.length),S(t,e){const n=e.length,a=t.getMilliseconds();return T(Math.trunc(a*Math.pow(10,n-3)),e.length)}},x={G:function(t,e,n){const a=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),a=e>0?e:1-e;return n.ordinalNumber(a,{unit:"year"})}return P.y(t,e)},Y:function(t,e,n,a){const r=v(t,a),o=r>0?r:1-r;return"YY"===e?T(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):T(o,e.length)},R:function(t,e){return T(M(t),e.length)},u:function(t,e){return T(t.getFullYear(),e.length)},Q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return T(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return T(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){const a=t.getMonth();switch(e){case"M":case"MM":return P.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){const a=t.getMonth();switch(e){case"L":return String(a+1);case"LL":return T(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){const r=k(t,a);return"wo"===e?n.ordinalNumber(r,{unit:"week"}):T(r,e.length)},I:function(t,e,n){const a=D(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):T(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):P.d(t,e)},D:function(t,e,n){const a=w(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):T(a,e.length)},E:function(t,e,n){const a=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return T(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return T(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){const a=t.getDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return T(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const a=t.getHours();let r;switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){const a=t.getHours();let r;switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return P.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):P.H(t,e)},K:function(t,e,n){const a=t.getHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):T(a,e.length)},k:function(t,e,n){let a=t.getHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):T(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):P.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):P.s(t,e)},S:function(t,e){return P.S(t,e)},X:function(t,e,n){const a=t.getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return W(a);case"XXXX":case"XX":return E(a);default:return E(a,":")}},x:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"x":return W(a);case"xxxx":case"xx":return E(a);default:return E(a,":")}},O:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+S(a,":");default:return"GMT"+E(a,":")}},z:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+S(a,":");default:return"GMT"+E(a,":")}},t:function(t,e,n){return T(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return T(t.getTime(),e.length)}};function S(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),r=Math.trunc(a/60),o=a%60;return 0===o?n+String(r):n+String(r)+e+T(o,2)}function W(t,e){return t%60==0?(t>0?"-":"+")+T(Math.abs(t)/60,2):E(t,e)}function E(t,e=""){const n=t>0?"-":"+",a=Math.abs(t);return n+T(Math.trunc(a/60),2)+e+T(a%60,2)}const C=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},O=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},I={p:O,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],a=n[1],r=n[2];if(!r)return C(t,e);let o;switch(a){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",C(a,e)).replace("{{time}}",O(r,e))}},H=/^D+$/,L=/^Y+$/,B=["D","DD","YY","YYYY"];function Y(e){if(!(n=e,n instanceof Date||"object"==typeof n&&"[object Date]"===Object.prototype.toString.call(n)||"number"==typeof e))return!1;var n;const a=t(e);return!isNaN(Number(a))}const N=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,F=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,q=/^'([^]*?)'?$/,$=/''/g,j=/[a-zA-Z]/;function z(e,n,a){const r=h(),o=a?.locale??r.locale??d,i=a?.firstWeekContainsDate??a?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,s=a?.weekStartsOn??a?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,c=t(e);if(!Y(c))throw new RangeError("Invalid time value");let u=n.match(F).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,I[e])(t,o.formatLong):t})).join("").match(N).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:R(t)};if(x[e])return{isToken:!0,value:t};if(e.match(j))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));o.localize.preprocessor&&(u=o.localize.preprocessor(c,u));const l={firstWeekContainsDate:i,weekStartsOn:s,locale:o};return u.map((t=>{if(!t.isToken)return t.value;const r=t.value;return(!a?.useAdditionalWeekYearTokens&&function(t){return L.test(t)}(r)||!a?.useAdditionalDayOfYearTokens&&function(t){return H.test(t)}(r))&&function(t,e,n){const a=function(t,e,n){const a="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(a),B.includes(t))throw new RangeError(a)}(r,n,String(e)),(0,x[r[0]])(c,r,o.localize,l)})).join("")}function R(t){const e=t.match(q);return e?e[1].replace($,"'"):t}const Q=(()=>{let t,e="";function a(t,e){return t+e}function r(t){const e=t.getHours();return e>6&&e<20}const o=[["rain","shower","sleet","drizzle"],["snow","icy"],["cloudy","overcast"],["storm","thunder"],["hail"]];function i(t,e,n){let a=t.toLowerCase(),o=!1,i="";for(let t=0;t<e.length;t++)for(let n=0;n<e[t].length;n++)a.includes(e[t][n])&&(i=e[t][0],o=!0);return o?i:r(n)?(i="sunny",i):(i="night",i)}return{appendSideToID:a,displayLogic:t,updateWeatherDisplay:function(s){console.log(e),e&&(t={description:document.getElementById(a(e,"Desc")),city:document.getElementById(a(e,"City")),date:document.getElementById(a(e,"Date")),time:document.getElementById(a(e,"Time")),temperature:document.getElementById(a(e,"Temp")),icon:document.getElementById(a(e,"Icon")),statsFeelsLike:document.getElementById(a(e,"FeelsLike")),statsHumidity:document.getElementById(a(e,"Humidity")),statsChanceOfRain:document.getElementById(a(e,"ChanceOfRain")),statsWindSpeed:document.getElementById(a(e,"WindSpeed")),forecastDayPlusOneDay:document.getElementById(a(e,"DayPlusOneDay")),forecastDayPlusOneTempHigh:document.getElementById(a(e,"DayPlusOneTempHigh")),forecastDayPlusOneTempLow:document.getElementById(a(e,"DayPlusOneTempLow")),forecastDayPlusOneIcon:document.getElementById(a(e,"DayPlusOneIcon")),forecastDayPlusTwoDay:document.getElementById(a(e,"DayPlusTwoDay")),forecastDayPlusTwoTempHigh:document.getElementById(a(e,"DayPlusTwoTempHigh")),forecastDayPlusTwoTempLow:document.getElementById(a(e,"DayPlusTwoTempLow")),forecastDayPlusTwoIcon:document.getElementById(a(e,"DayPlusTwoIcon")),form:document.querySelector(a(".",a(e,"WeatherForm")))});const c=new Date(s.localTime),u=n(c,1),d=n(c,2);t.description.textContent=s.condition,t.city.textContent=A.splitLocation(s.location),t.date.textContent=z(c,"EEEE d MMMM yyyy"),t.time.textContent=z(c,"h:mm a"),t.temperature.textContent=s.temp,t.statsFeelsLike.textContent=s.feelsLike,t.statsHumidity.textContent=s.humidity,t.statsChanceOfRain.textContent=s.chanceOfRain,t.statsWindSpeed.textContent=s.windSpeed,t.forecastDayPlusOneDay.textContent=z(u,"EEEE"),t.forecastDayPlusOneTempHigh.textContent=s.dayOneTempHigh,t.forecastDayPlusOneTempLow.textContent=s.dayOneTempLow,t.forecastDayPlusTwoDay.textContent=z(d,"EEEE"),t.forecastDayPlusTwoTempHigh.textContent=s.dayTwoTempHigh,t.forecastDayPlusTwoTempLow.textContent=s.dayTwoTempLow,function(e,n,a,s){let c=i(e,o,s);t.icon.src=`../src/Resources/Icons/WeatherIcons/${c}.svg`,r(s)?(t.form.style.color="cloudy"==c||"sunny"==c||"snow"==c?"#272327":"#f1f0f1","cloudy"==c?t.form.style.background="url(../src/Resources/Backgrounds/sunny.gif":"storm"==c||"hail"==c?t.form.style.background="url(../src/Resources/Backgrounds/rain.gif":(t.form.style.background=`url(../src/Resources/Backgrounds/${c}.gif`,t.form.style.background,size,t.form.style.background,position)):(t.form.style.background="url(../src/Resources/Backgrounds/night.gif","sunny"==c&&(t.icon.src="../src/Resources/Icons/WeatherIcons/night.svg"));let u=i(n,o,s);t.forecastDayPlusOneIcon.src="night"==u?"../src/Resources/Icons/WeatherIcons/sunny.svg":`../src/Resources/Icons/WeatherIcons/${u}.svg`;let d=i(a,o,s);t.forecastDayPlusTwoIcon.src="night"==d?"../src/Resources/Icons/WeatherIcons/sunny.svg":`../src/Resources/Icons/WeatherIcons/${d}.svg`}(s.condition,s.dayOneCondition,s.dayTwoCondition,c)},currSideString:e,checkSide:function(t){e=t}}})(),A=function(){async function t(t){try{const e=`https://api.weatherapi.com/v1/forecast.json?key=ffc640388e254040ba122546231611&q=${encodeURIComponent(t)}&days=5&aqi+no&alerts=no`,n=await fetch(e,{mode:"cors"});if(!n.ok)throw new Error("Network response not ok");return await n.json()}catch(t){console.error("Fetching weather data failed:",t),alert("Location not found")}}function e(t){let e=new Date(t.location.localtime).getHours();return{localTime:t.location.localtime,temp:`${Math.round(t.forecast.forecastday[0].hour[e].temp_c)}°`,tempHigh:`${Math.round(t.forecast.forecastday[0].day.maxtemp_c)}°`,tempLow:`${Math.round(t.forecast.forecastday[0].day.mintemp_c)}°`,feelsLike:`${Math.round(t.forecast.forecastday[0].hour[e].feelslike_c)}°`,location:`${t.location.name}, ${t.location.city}`,condition:t.forecast.forecastday[0].hour[e].condition.text,humidity:`${t.forecast.forecastday[0].day.avghumidity} %`,windSpeed:`${t.forecast.forecastday[0].hour[e].wind_kph} km/h`,chanceOfRain:`${t.forecast.forecastday[0].hour[e].chance_of_rain} %`,dayOneTempHigh:`${Math.round(t.forecast.forecastday[1].day.maxtemp_c)}°`,dayOneTempLow:`${Math.round(t.forecast.forecastday[1].day.mintemp_c)}°`,dayOneCondition:t.forecast.forecastday[1].day.condition.text,dayTwoTempHigh:`${Math.round(t.forecast.forecastday[2].day.maxtemp_c)}°`,dayTwoTempLow:`${Math.round(t.forecast.forecastday[2].day.mintemp_c)}°`,dayTwoCondition:t.forecast.forecastday[2].day.condition.text}}return{pullWeatherData:t,formatWeatherData:e,loadWeatherData:function(n){t(n).then((t=>{if(t){const n=e(t);console.log(t),console.log(n),n&&Q.updateWeatherDisplay(n)}})).catch((t=>{console.error("Error processing data:",t)}))},splitLocation:function(t){return t.includes(", undefined")?t.replace(", undefined",""):t}}}(),G=document.getElementById("leftSearchForm");G.addEventListener("submit",(t=>{t.preventDefault(),Q.checkSide("left");const e=document.getElementById("leftSearch").value;A.loadWeatherData(e),G.reset()}));const X=document.getElementById("rightSearchForm");X.addEventListener("submit",(t=>{t.preventDefault(),Q.checkSide("right");const e=document.getElementById("rightSearch").value;A.loadWeatherData(e),X.reset()}))})();