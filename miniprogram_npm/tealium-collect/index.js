module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1552571768331, function(require, module, exports) {
// Copyright (c) 2017 Tealium Inc.  All Rights Reserved.

var TEAL = TEAL || {
  tag_functions : []
};

if (typeof require === "function") {
  TEAL.url = require('url');
  TEAL.https = require('punycode');
}


/*! Build: 2018-07-05 */

/**
 *
 * Tealium Collect 1.0.3
 *
 * @license
 * Copyright (c) 2018 Tealium Inc.  All Rights Reserved.
 *
 * Code Libraries:
 *   https://github.com/douglascrockford/JSON-js
 *
 */
"object"==typeof JSON?TEAL.JSON=JSON:(TEAL.JSON=TEAL.JSON||{},function(){"use strict";function e(e){return e<10?"0"+e:e}function t(){return this.valueOf()}function n(e){return r.lastIndex=0,r.test(e)?'"'+e.replace(r,function(e){var t=c[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function o(e,t){var r,c,s,u,g,l=i,d=t[e];switch(d&&"object"==typeof d&&"function"==typeof d.toJSON&&(d=d.toJSON(e)),"function"==typeof f&&(d=f.call(t,e,d)),typeof d){case"string":return n(d);case"number":return isFinite(d)?String(d):"null";case"boolean":case"null":return String(d);case"object":if(!d)return"null";if(i+=a,g=[],"[object Array]"===Object.prototype.toString.apply(d)){for(u=d.length,r=0;r<u;r+=1)g[r]=o(r,d)||"null";return s=0===g.length?"[]":i?"[\n"+i+g.join(",\n"+i)+"\n"+l+"]":"["+g.join(",")+"]",i=l,s}if(f&&"object"==typeof f)for(u=f.length,r=0;r<u;r+=1)"string"==typeof f[r]&&(s=o(c=f[r],d))&&g.push(n(c)+(i?": ":":")+s);else for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(s=o(c,d))&&g.push(n(c)+(i?": ":":")+s);return s=0===g.length?"{}":i?"{\n"+i+g.join(",\n"+i)+"\n"+l+"}":"{"+g.join(",")+"}",i=l,s}}var r=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+e(this.getUTCMonth()+1)+"-"+e(this.getUTCDate())+"T"+e(this.getUTCHours())+":"+e(this.getUTCMinutes())+":"+e(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=t,Number.prototype.toJSON=t,String.prototype.toJSON=t);var i,a,c,f;"function"!=typeof TEAL.JSON.stringify&&(c={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},TEAL.JSON.stringify=function(e,t,n){var r;if(i="",a="","number"==typeof n)for(r=0;r<n;r+=1)a+=" ";else"string"==typeof n&&(a=n);if(f=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw new Error("JSON.stringify");return o("",{"":e})})}()),TEAL.tag_functions.push(["tealium_collect","1.0.3",function(e,t,n,o){"use strict";var r,i,a,c,f={},s=n.util;if("tealium_collect"===e.getName())if(s.isEmpty(t.tealium_account))e.debug("tealium_account not found in data layer");else if(s.isEmpty(t.tealium_profile))e.debug("tealium_profile not found in data layer");else{if(f.server_domain="tealiumiq.com",f.tag_config_method=e.getVendorConfig("method")||"POST",f.tag_config_server=e.getVendorConfig("server"),f.tag_config_sampling=e.getVendorConfig("sampling")||"100",f.tag_config_region=e.getVendorConfig("region")||"default",f.performance_timing_count=0,f.tag_config_server.indexOf("-collect."+f.server_domain)>1&&(f.server_prefix=f.tag_config_server.split("collect."+f.server_domain)[0],f.tag_config_server="https://"+f.server_prefix+"collect."+f.server_domain+"/event"),""===f.tag_config_server&&("default"===f.tag_config_region?f.tag_config_server="https://collect."+f.server_domain+"/event":f.tag_config_server="https://collect-"+f.tag_config_region+"."+f.server_domain+"/event"),f.server=f.tag_config_server,f.is_in_sample_group=function(){return!0},f.get_performance_timing=function(t){function n(e,t){var n=0;return e>t&&(n=e-t),n}var r,a,c,u={};if(void 0!==o.localStorage&&void 0!==o.JSON&&JSON.parse&&o.performance&&o.performance.timing){a=o.performance.timing,null!==(c=o.localStorage.getItem("tealium_timing"))&&"{}"!==c&&void 0!==t&&0===f.performance_timing_count&&s.merge(t,s.flatten({timing:JSON.parse(c)}),1),f.performance_timing_count+=1;for(i in a)(0===i.indexOf("dom")||0===i.indexOf("load"))&&0===a[i]&&f.performance_timing_count<20&&setTimeout(f.get_performance_timing,1e3);u.domain=o.location.hostname+"",u.pathname=o.location.pathname+"",r=""+o.location.search,u.query_string=r.substring(1),u.timestamp=s.getCurrentTime("ms"),u.dns=n(a.domainLookupEnd,a.domainLookupStart),u.connect=n(a.connectEnd,a.connectStart),u.response=n(a.responseEnd,a.responseStart),u.dom_loading_to_interactive=n(a.domInteractive,a.domLoading),u.dom_interactive_to_complete=n(a.domComplete,a.domInteractive),u.load=n(a.loadEventEnd,a.loadEventStart),u.time_to_first_byte=n(a.responseStart,a.connectEnd),u.front_end=n(a.loadEventStart,a.responseEnd),u.fetch_to_response=n(a.responseStart,a.fetchStart),u.fetch_to_complete=n(a.domComplete,a.fetchStart),u.fetch_to_interactive=n(a.domInteractive,a.fetchStart);try{o.localStorage.setItem("tealium_timing",TEAL.JSON.stringify(u))}catch(t){e.debug(t)}}},!f.is_in_sample_group(t))return!1;f.get_performance_timing(t),f.data={},f.data=t;for(a in s.getKeys(f.data))0===(r=a+"").indexOf("qp.")?f.data[r]=encodeURIComponent(f.data[r]):0===r.indexOf("va.")&&delete f.data[a];c=TEAL.JSON.stringify(f.data),o.TEAL.https?s.request({method:f.tag_config_method,url:f.server,data:c},function(t){e.completed({statusCode:t.statusCode,headers:t.headers})}):o.FormData?s.request({method:"POST",url:f.server.replace("/event","/"+f.data.tealium_account+"/"+f.data.tealium_profile+"/2/i.gif"),data:'{"data":'+c+"}"},function(t){var n="";if(void 0!==t&&3===t.readyState){try{n=t.getResponseHeader("X-Region")||""}catch(t){e.debug(["error",t])}e.completed({headers:{"X-Region":n}})}}):(s.request({method:"GET",url:f.server+"?data="+s.encode(c)}),e.completed())}else e.debug("Tag name of "+e.getName()+" does not match tag: tealium_collect")}]);

// Node.js allow for tag to run as module
if (typeof module === "object" && module.exports) {
  module.exports = TEAL.tag_functions[0];
}


}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1552571768331);
})()
//# sourceMappingURL=index.js.map