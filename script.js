let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {

    mainNav.classList.toggle('active');



});

mainNav.addEventListener('click', function () {

    mainNav.classList.toggle('active');



});

function callFunction() {

    window.location.href = "tel://" + 692409120;


}






!function (h) { if (!h.hasInitialised) { var p = { escapeRegExp: function (e) { return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") }, hasClass: function (e, t) { var i = " "; return 1 === e.nodeType && 0 <= (i + e.className + i).replace(/[\n\t]/g, i).indexOf(i + t + i) }, addClass: function (e, t) { e.className += " " + t }, removeClass: function (e, t) { var i = new RegExp("\\b" + this.escapeRegExp(t) + "\\b"); e.className = e.className.replace(i, "") }, interpolateString: function (e, t) { return e.replace(/{{([a-z][a-z0-9\-_]*)}}/gi, function (e) { return t(arguments[1]) || "" }) }, getCookie: function (e) { var t = ("; " + document.cookie).split("; " + e + "="); return t.length < 2 ? void 0 : t.pop().split(";").shift() }, setCookie: function (e, t, i, n, o, s) { var r = new Date; r.setDate(r.getDate() + (i || 365)); var a = [e + "=" + t, "expires=" + r.toUTCString(), "path=" + (o || "/")]; n && a.push("domain=" + n), s && a.push("secure"), document.cookie = a.join(";") }, deepExtend: function (e, t) { for (var i in t) t.hasOwnProperty(i) && (i in e && this.isPlainObject(e[i]) && this.isPlainObject(t[i]) ? this.deepExtend(e[i], t[i]) : e[i] = t[i]); return e }, throttle: function (e, t) { var i = !1; return function () { i || (e.apply(this, arguments), i = !0, setTimeout(function () { i = !1 }, t)) } }, hash: function (e) { var t, i, n = 0; if (0 === e.length) return n; for (t = 0, i = e.length; t < i; ++t)n = (n << 5) - n + e.charCodeAt(t), n |= 0; return n }, normaliseHex: function (e) { return "#" == e[0] && (e = e.substr(1)), 3 == e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e }, getContrast: function (e) { return e = this.normaliseHex(e), 128 <= (299 * parseInt(e.substr(0, 2), 16) + 587 * parseInt(e.substr(2, 2), 16) + 114 * parseInt(e.substr(4, 2), 16)) / 1e3 ? "#000" : "#fff" }, getLuminance: function (e) { var t = parseInt(this.normaliseHex(e), 16), i = 38 + (t >> 16), n = 38 + (t >> 8 & 255), o = 38 + (255 & t); return "#" + (16777216 + 65536 * (i < 255 ? i < 1 ? 0 : i : 255) + 256 * (n < 255 ? n < 1 ? 0 : n : 255) + (o < 255 ? o < 1 ? 0 : o : 255)).toString(16).slice(1) }, isMobile: function () { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) }, isPlainObject: function (e) { return "object" == typeof e && null !== e && e.constructor == Object }, traverseDOMPath: function (e, t) { return e && e.parentNode ? p.hasClass(e, t) ? e : this.traverseDOMPath(e.parentNode, t) : null } }; h.status = { deny: "deny", allow: "allow", dismiss: "dismiss" }, h.transitionEnd = function () { var e = document.createElement("div"), t = { t: "transitionend", OT: "oTransitionEnd", msT: "MSTransitionEnd", MozT: "transitionend", WebkitT: "webkitTransitionEnd" }; for (var i in t) if (t.hasOwnProperty(i) && void 0 !== e.style[i + "ransition"]) return t[i]; return "" }(), h.hasTransition = !!h.transitionEnd; var c = Object.keys(h.status).map(p.escapeRegExp); h.customStyles = {}, h.Popup = function () { function e() { this.initialise.apply(this, arguments) } function i(e) { this.openingTimeout = null, p.removeClass(e, "cc-invisible") } function n(e) { e.style.display = "none", e.removeEventListener(h.transitionEnd, this.afterTransition), this.afterTransition = null } function o() { var e = this.options.position.split("-"), t = []; return e.forEach(function (e) { t.push("cc-" + e) }), t } function s(e) { var t = this.options, i = document.createElement("div"), n = t.container && 1 === t.container.nodeType ? t.container : document.body; i.innerHTML = e; var o = i.children[0]; return o.style.display = "none", p.hasClass(o, "cc-window") && h.hasTransition && p.addClass(o, "cc-invisible"), this.onButtonClick = function (e) { var t = p.traverseDOMPath(e.target, "cc-btn") || e.target; if (p.hasClass(t, "cc-btn")) { var i = t.className.match(new RegExp("\\bcc-(" + c.join("|") + ")\\b")), n = i && i[1] || !1; n && (this.setStatus(n), this.close(!0)) } p.hasClass(t, "cc-close") && (this.setStatus(h.status.dismiss), this.close(!0)), p.hasClass(t, "cc-revoke") && this.revokeChoice() }.bind(this), o.addEventListener("click", this.onButtonClick), t.autoAttach && (n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o)), o } function r(e, t) { for (var i = 0, n = e.length; i < n; ++i) { var o = e[i]; if (o instanceof RegExp && o.test(t) || "string" == typeof o && o.length && o === t) return !0 } return !1 } var a = { enabled: !0, container: null, cookie: { name: "cookieconsent_status", path: "/", domain: "", expiryDays: 365, secure: !1 }, onPopupOpen: function () { }, onPopupClose: function () { }, onInitialise: function (e) { }, onStatusChange: function (e, t) { }, onRevokeChoice: function () { }, onNoCookieLaw: function (e, t) { }, content: { header: "Cookies used on the website!", message: "This website uses cookies to ensure you get the best experience on our website.", dismiss: "Got it!", allow: "Allow cookies", deny: "Decline", link: "Learn more", href: "https://cookiesandyou.com", close: "&#x274c;", target: "_blank", policy: "Cookie Policy" }, elements: { header: '<span class="cc-header">{{header}}</span>&nbsp;', message: '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>', messagelink: '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a></span>', dismiss: '<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>', allow: '<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>', deny: '<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>', link: '<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a>', close: '<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>' }, window: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}">\x3c!--googleoff: all--\x3e{{children}}\x3c!--googleon: all--\x3e</div>', revokeBtn: '<div class="cc-revoke {{classes}}">{{policy}}</div>', compliance: { info: '<div class="cc-compliance">{{dismiss}}</div>', "opt-in": '<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>', "opt-out": '<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>' }, type: "info", layouts: { basic: "{{messagelink}}{{compliance}}", "basic-close": "{{messagelink}}{{compliance}}{{close}}", "basic-header": "{{header}}{{message}}{{link}}{{compliance}}" }, layout: "basic", position: "bottom", theme: "block", static: !1, palette: null, revokable: !1, animateRevokable: !0, showLink: !0, dismissOnScroll: !1, dismissOnTimeout: !1, dismissOnWindowClick: !1, ignoreClicksFrom: ["cc-revoke", "cc-btn"], autoOpen: !0, autoAttach: !0, whitelistPage: [], blacklistPage: [], overrideHTML: null }; return e.prototype.initialise = function (e) { this.options && this.destroy(), p.deepExtend(this.options = {}, a), p.isPlainObject(e) && p.deepExtend(this.options, e), function () { var e = this.options.onInitialise.bind(this); if (!window.navigator.cookieEnabled) return e(h.status.deny), !0; if (window.CookiesOK || window.navigator.CookiesOK) return e(h.status.allow), !0; var t = Object.keys(h.status), i = this.getStatus(), n = 0 <= t.indexOf(i); return n && e(i), n }.call(this) && (this.options.enabled = !1), r(this.options.blacklistPage, location.pathname) && (this.options.enabled = !1), r(this.options.whitelistPage, location.pathname) && (this.options.enabled = !0); var t = this.options.window.replace("{{classes}}", function () { var e = this.options, t = "top" == e.position || "bottom" == e.position ? "banner" : "floating"; p.isMobile() && (t = "floating"); var i = ["cc-" + t, "cc-type-" + e.type, "cc-theme-" + e.theme]; return e.static && i.push("cc-static"), i.push.apply(i, o.call(this)), function (e) { var t = p.hash(JSON.stringify(e)), i = "cc-color-override-" + t, n = p.isPlainObject(e); return this.customStyleSelector = n ? i : null, n && function (e, t, i) { if (h.customStyles[e]) return ++h.customStyles[e].references; var n, o = {}, s = t.popup, r = t.button, a = t.highlight; s && (s.text = s.text ? s.text : p.getContrast(s.background), s.link = s.link ? s.link : s.text, o[i + ".cc-window"] = ["color: " + s.text, "background-color: " + s.background], o[i + ".cc-revoke"] = ["color: " + s.text, "background-color: " + s.background], o[i + " .cc-link," + i + " .cc-link:active," + i + " .cc-link:visited"] = ["color: " + s.link], r && (r.text = r.text ? r.text : p.getContrast(r.background), r.border = r.border ? r.border : "transparent", o[i + " .cc-btn"] = ["color: " + r.text, "border-color: " + r.border, "background-color: " + r.background], r.padding && o[i + " .cc-btn"].push("padding: " + r.padding), "transparent" != r.background && (o[i + " .cc-btn:hover, " + i + " .cc-btn:focus"] = ["background-color: " + (r.hover || (n = r.background, "000000" == (n = p.normaliseHex(n)) ? "#222" : p.getLuminance(n)))]), a ? (a.text = a.text ? a.text : p.getContrast(a.background), a.border = a.border ? a.border : "transparent", o[i + " .cc-highlight .cc-btn:first-child"] = ["color: " + a.text, "border-color: " + a.border, "background-color: " + a.background]) : o[i + " .cc-highlight .cc-btn:first-child"] = ["color: " + s.text])); var c = document.createElement("style"); document.head.appendChild(c), h.customStyles[e] = { references: 1, element: c.sheet }; var l = -1; for (var u in o) o.hasOwnProperty(u) && c.sheet.insertRule(u + "{" + o[u].join(";") + "}", ++l) }(t, e, "." + i), n }.call(this, this.options.palette), this.customStyleSelector && i.push(this.customStyleSelector), i }.call(this).join(" ")).replace("{{children}}", function () { var t = {}, i = this.options; i.showLink || (i.elements.link = "", i.elements.messagelink = i.elements.message), Object.keys(i.elements).forEach(function (e) { t[e] = p.interpolateString(i.elements[e], function (e) { var t = i.content[e]; return e && "string" == typeof t && t.length ? t : "" }) }); var e = i.compliance[i.type]; e || (e = i.compliance.info), t.compliance = p.interpolateString(e, function (e) { return t[e] }); var n = i.layouts[i.layout]; return n || (n = i.layouts.basic), p.interpolateString(n, function (e) { return t[e] }) }.call(this)), i = this.options.overrideHTML; if ("string" == typeof i && i.length && (t = i), this.options.static) { var n = s.call(this, '<div class="cc-grower">' + t + "</div>"); n.style.display = "", this.element = n.firstChild, this.element.style.display = "none", p.addClass(this.element, "cc-invisible") } else this.element = s.call(this, t); (function () { var r = this.setStatus.bind(this), a = this.close.bind(this), e = this.options.dismissOnTimeout; "number" == typeof e && 0 <= e && (this.dismissTimeout = window.setTimeout(function () { r(h.status.dismiss), a(!0) }, Math.floor(e))); var t = this.options.dismissOnScroll; if ("number" == typeof t && 0 <= t) { var i = function (e) { window.pageYOffset > Math.floor(t) && (r(h.status.dismiss), a(!0), window.removeEventListener("scroll", i), this.onWindowScroll = null) }; this.options.enabled && (this.onWindowScroll = i, window.addEventListener("scroll", i)) } var n = this.options.dismissOnWindowClick, c = this.options.ignoreClicksFrom; if (n) { var l = function (e) { for (var t = !1, i = e.path.length, n = c.length, o = 0; o < i; o++)if (!t) for (var s = 0; s < n; s++)t || (t = p.hasClass(e.path[o], c[s])); t || (r(h.status.dismiss), a(!0), window.removeEventListener("click", l), this.onWindowClick = null) }.bind(this); this.options.enabled && (this.onWindowClick = l, window.addEventListener("click", l)) } }).call(this), function () { if ("info" != this.options.type && (this.options.revokable = !0), p.isMobile() && (this.options.animateRevokable = !1), this.options.revokable) { var e = o.call(this); this.options.animateRevokable && e.push("cc-animate"), this.customStyleSelector && e.push(this.customStyleSelector); var t = this.options.revokeBtn.replace("{{classes}}", e.join(" ")).replace("{{policy}}", this.options.content.policy); this.revokeBtn = s.call(this, t); var n = this.revokeBtn; if (this.options.animateRevokable) { var i = p.throttle(function (e) { var t = !1, i = window.innerHeight - 20; p.hasClass(n, "cc-top") && e.clientY < 20 && (t = !0), p.hasClass(n, "cc-bottom") && e.clientY > i && (t = !0), t ? p.hasClass(n, "cc-active") || p.addClass(n, "cc-active") : p.hasClass(n, "cc-active") && p.removeClass(n, "cc-active") }, 200); this.onMouseMove = i, window.addEventListener("mousemove", i) } } }.call(this), this.options.autoOpen && this.autoOpen() }, e.prototype.destroy = function () { this.onButtonClick && this.element && (this.element.removeEventListener("click", this.onButtonClick), this.onButtonClick = null), this.dismissTimeout && (clearTimeout(this.dismissTimeout), this.dismissTimeout = null), this.onWindowScroll && (window.removeEventListener("scroll", this.onWindowScroll), this.onWindowScroll = null), this.onWindowClick && (window.removeEventListener("click", this.onWindowClick), this.onWindowClick = null), this.onMouseMove && (window.removeEventListener("mousemove", this.onMouseMove), this.onMouseMove = null), this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = null, this.revokeBtn && this.revokeBtn.parentNode && this.revokeBtn.parentNode.removeChild(this.revokeBtn), this.revokeBtn = null, function (e) { if (p.isPlainObject(e)) { var t = p.hash(JSON.stringify(e)), i = h.customStyles[t]; if (i && !--i.references) { var n = i.element.ownerNode; n && n.parentNode && n.parentNode.removeChild(n), h.customStyles[t] = null } } }(this.options.palette), this.options = null }, e.prototype.open = function (e) { if (this.element) return this.isOpen() || (h.hasTransition ? this.fadeIn() : this.element.style.display = "", this.options.revokable && this.toggleRevokeButton(), this.options.onPopupOpen.call(this)), this }, e.prototype.close = function (e) { if (this.element) return this.isOpen() && (h.hasTransition ? this.fadeOut() : this.element.style.display = "none", e && this.options.revokable && this.toggleRevokeButton(!0), this.options.onPopupClose.call(this)), this }, e.prototype.fadeIn = function () { var e = this.element; if (h.hasTransition && e && (this.afterTransition && n.call(this, e), p.hasClass(e, "cc-invisible"))) { if (e.style.display = "", this.options.static) { var t = this.element.clientHeight; this.element.parentNode.style.maxHeight = t + "px" } this.openingTimeout = setTimeout(i.bind(this, e), 20) } }, e.prototype.fadeOut = function () { var e = this.element; h.hasTransition && e && (this.openingTimeout && (clearTimeout(this.openingTimeout), i.bind(this, e)), p.hasClass(e, "cc-invisible") || (this.options.static && (this.element.parentNode.style.maxHeight = ""), this.afterTransition = n.bind(this, e), e.addEventListener(h.transitionEnd, this.afterTransition), p.addClass(e, "cc-invisible"))) }, e.prototype.isOpen = function () { return this.element && "" == this.element.style.display && (!h.hasTransition || !p.hasClass(this.element, "cc-invisible")) }, e.prototype.toggleRevokeButton = function (e) { this.revokeBtn && (this.revokeBtn.style.display = e ? "" : "none") }, e.prototype.revokeChoice = function (e) { this.options.enabled = !0, this.clearStatus(), this.options.onRevokeChoice.call(this), e || this.autoOpen() }, e.prototype.hasAnswered = function (e) { return 0 <= Object.keys(h.status).indexOf(this.getStatus()) }, e.prototype.hasConsented = function (e) { var t = this.getStatus(); return t == h.status.allow || t == h.status.dismiss }, e.prototype.autoOpen = function (e) { !this.hasAnswered() && this.options.enabled ? this.open() : this.hasAnswered() && this.options.revokable && this.toggleRevokeButton(!0) }, e.prototype.setStatus = function (e) { var t = this.options.cookie, i = p.getCookie(t.name), n = 0 <= Object.keys(h.status).indexOf(i); 0 <= Object.keys(h.status).indexOf(e) ? (p.setCookie(t.name, e, t.expiryDays, t.domain, t.path, t.secure), this.options.onStatusChange.call(this, e, n)) : this.clearStatus() }, e.prototype.getStatus = function () { return p.getCookie(this.options.cookie.name) }, e.prototype.clearStatus = function () { var e = this.options.cookie; p.setCookie(e.name, "", -1, e.domain, e.path) }, e }(), h.Location = function () { function e(e) { p.deepExtend(this.options = {}, t), p.isPlainObject(e) && p.deepExtend(this.options, e), this.currentServiceIndex = -1 } function n(e) { return new Error("Error [" + (e.code || "UNKNOWN") + "]: " + e.error) } var t = { timeout: 5e3, services: ["ipinfo"], serviceDefinitions: { ipinfo: function () { return { url: "//ipinfo.io", headers: ["Accept: application/json"], callback: function (e, t) { try { var i = JSON.parse(t); return i.error ? n(i) : { code: i.country } } catch (e) { return n({ error: "Invalid response (" + e + ")" }) } } } }, ipinfodb: function (e) { return { url: "//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}", isScript: !0, callback: function (e, t) { try { var i = JSON.parse(t); return "ERROR" == i.statusCode ? n({ error: i.statusMessage }) : { code: i.countryCode } } catch (e) { return n({ error: "Invalid response (" + e + ")" }) } } } }, maxmind: function () { return { url: "//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js", isScript: !0, callback: function (t) { return window.geoip2 ? void geoip2.country(function (e) { try { t({ code: e.country.iso_code }) } catch (e) { t(n(e)) } }, function (e) { t(n(e)) }) : void t(new Error("Unexpected response format. The downloaded script should have exported `geoip2` to the global scope")) } } } } }; return e.prototype.getNextService = function () { for (var e; e = this.getServiceByIdx(++this.currentServiceIndex), this.currentServiceIndex < this.options.services.length && !e;); return e }, e.prototype.getServiceByIdx = function (e) { var t = this.options.services[e]; if ("function" == typeof t) { var i = t(); return i.name && p.deepExtend(i, this.options.serviceDefinitions[i.name](i)), i } return "string" == typeof t ? this.options.serviceDefinitions[t]() : p.isPlainObject(t) ? this.options.serviceDefinitions[t.name](t) : null }, e.prototype.locate = function (e, t) { var i = this.getNextService(); return i ? (this.callbackComplete = e, this.callbackError = t, void this.runService(i, this.runNextServiceOnError.bind(this))) : void t(new Error("No services to run")) }, e.prototype.setupUrl = function (n) { var o = this.getCurrentServiceOpts(); return n.url.replace(/\{(.*?)\}/g, function (e, t) { if ("callback" === t) { var i = "callback" + Date.now(); return window[i] = function (e) { n.__JSONP_DATA = JSON.stringify(e) }, i } if (t in o.interpolateUrl) return o.interpolateUrl[t] }) }, e.prototype.runService = function (i, n) { var o = this; i && i.url && i.callback && (i.isScript ? function (e, t, i) { var n, o = document.createElement("script"); o.type = "text/" + (e.type || "javascript"), o.src = e.src || e, o.async = !1, o.onreadystatechange = o.onload = function () { var e = o.readyState; clearTimeout(n), t.done || e && !/loaded|complete/.test(e) || (t.done = !0, t(), o.onreadystatechange = o.onload = null) }, document.body.appendChild(o), n = setTimeout(function () { t.done = !0, t(), o.onreadystatechange = o.onload = null }, i) } : function (e, t, i, n, o) { var s = new (window.XMLHttpRequest || window.ActiveXObject)("MSXML2.XMLHTTP.3.0"); if (s.open(n ? "POST" : "GET", e, 1), s.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), Array.isArray(o)) for (var r = 0, a = o.length; r < a; ++r) { var c = o[r].split(":", 2); s.setRequestHeader(c[0].replace(/^\s+|\s+$/g, ""), c[1].replace(/^\s+|\s+$/g, "")) } "function" == typeof t && (s.onreadystatechange = function () { 3 < s.readyState && t(s) }), s.send(n) })(this.setupUrl(i), function (e) { var t = e ? e.responseText : ""; i.__JSONP_DATA && (t = i.__JSONP_DATA, delete i.__JSONP_DATA), o.runServiceCallback.call(o, n, i, t) }, this.options.timeout, i.data, i.headers) }, e.prototype.runServiceCallback = function (t, e, i) { var n = this, o = e.callback(function (e) { o || n.onServiceResult.call(n, t, e) }, i); o && this.onServiceResult.call(this, t, o) }, e.prototype.onServiceResult = function (e, t) { t instanceof Error || t && t.error ? e.call(this, t, null) : e.call(this, null, t) }, e.prototype.runNextServiceOnError = function (e, t) { if (e) { this.logError(e); var i = this.getNextService(); i ? this.runService(i, this.runNextServiceOnError.bind(this)) : this.completeService.call(this, this.callbackError, new Error("All services failed")) } else this.completeService.call(this, this.callbackComplete, t) }, e.prototype.getCurrentServiceOpts = function () { var e = this.options.services[this.currentServiceIndex]; return "string" == typeof e ? { name: e } : "function" == typeof e ? e() : p.isPlainObject(e) ? e : {} }, e.prototype.completeService = function (e, t) { this.currentServiceIndex = -1, e && e(t) }, e.prototype.logError = function (e) { var t = this.currentServiceIndex, i = this.getServiceByIdx(t); console.warn("The service[" + t + "] (" + i.url + ") responded with the following error", e) }, e }(), h.Law = function () { function e(e) { this.initialise.apply(this, arguments) } var t = { regionalLaw: !0, hasLaw: ["AT", "BE", "BG", "HR", "CZ", "CY", "DK", "EE", "FI", "FR", "DE", "EL", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "SK", "ES", "SE", "GB", "UK", "GR", "EU"], revokable: ["HR", "CY", "DK", "EE", "FR", "DE", "LV", "LT", "NL", "PT", "ES"], explicitAction: ["HR", "IT", "ES"] }; return e.prototype.initialise = function (e) { p.deepExtend(this.options = {}, t), p.isPlainObject(e) && p.deepExtend(this.options, e) }, e.prototype.get = function (e) { var t = this.options; return { hasLaw: 0 <= t.hasLaw.indexOf(e), revokable: 0 <= t.revokable.indexOf(e), explicitAction: 0 <= t.explicitAction.indexOf(e) } }, e.prototype.applyLaw = function (e, t) { var i = this.get(t); return i.hasLaw || (e.enabled = !1, "function" == typeof e.onNoCookieLaw && e.onNoCookieLaw(t, i)), this.options.regionalLaw && (i.revokable && (e.revokable = !0), i.explicitAction && (e.dismissOnScroll = !1, e.dismissOnTimeout = !1)), e }, e }(), h.initialise = function (t, i, n) { var o = new h.Law(t.law); i || (i = function () { }), n || (n = function () { }); var e = Object.keys(h.status), s = p.getCookie("cookieconsent_status"); return 0 <= e.indexOf(s) ? void i(new h.Popup(t)) : void h.getCountryCode(t, function (e) { delete t.law, delete t.location, e.code && (t = o.applyLaw(t, e.code)), i(new h.Popup(t)) }, function (e) { delete t.law, delete t.location, n(e, new h.Popup(t)) }) }, h.getCountryCode = function (e, t, i) { e.law && e.law.countryCode ? t({ code: e.law.countryCode }) : e.location ? new h.Location(e.location).locate(function (e) { t(e || {}) }, i) : t({}) }, h.utils = p, h.hasInitialised = !0, window.cookieconsent = h } }(window.cookieconsent || {});