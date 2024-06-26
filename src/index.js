import './fonts/stylesheet.scss';
// import 'jquery';
// import 'jquery/dist/jquery'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import Accordion from 'accordion-js';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'accordion-js/dist/accordion.min.css';
import customSelect from 'custom-select';
// import StickyHeader from "@oveleon/sticky-header";
import './scss/styles.scss';
import './static/js/map'

document.addEventListener('DOMContentLoaded', function () {
	customSelect(document.querySelectorAll('.mySelect'));
	const body = document.querySelector('body')
	const mainMenu = document.querySelector('.main-menu')
	const burger = document.querySelector('.burger')
	const closeMainMenu = document.querySelector('.main-menu__close')
	const overlay = document.querySelector('.overlay')

	burger.addEventListener('click', function () {
		overlay.classList.toggle('active')
		body.style.overflow = 'hidden'
	})
	closeMainMenu.addEventListener('click', function () {
		overlay.classList.remove('active')
		body.style.overflow = ''
	})


	// new StickyHeader({
	// 	selector: 'header',             // Header or container selector
	// 	linkSelector: 'a, strong',
	// 	scrollSettings: {
	// 		startHeight: 100,           // Starting height for the container
	// 		stopHeight: 100,             // StopHeight for the container after reaching the stopPosition
	// 		stopPosition: 200,          // Container will shrink to stopHeight until reaching this position
	// 		breakPosition: 600,         // Hide position
	// 	},
	// 	classes: {
	// 		useClasses: true,          // Toggle classes on or off
	// 		isOpen: 'sh-open',          // Visible and fully open
	// 		onStop: 'sh-stop'           // stopHeight reached
	// 	},

	// });

	const swiper = new Swiper('.news-block__items', {
		slidesPerView: 3,
		spaceBetween: 16,
		breakpoints: {
			1024: {
				slidesPerView: 3,
			},
			0: {
				slidesPerView: 'auto',
			}
		}
	});

	if (window.innerWidth < 1024) {
		const swiper2 = new Swiper('.about__items', {
			slidesPerView: "auto",
		})
	}



	/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-cssanimations-setclasses !*/
	!function (e, n, t) { function r(e, n) { return typeof e === n } function o() { var e, n, t, o, s, i, a; for (var l in C) if (C.hasOwnProperty(l)) { if (e = [], n = C[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (t = 0; t < n.options.aliases.length; t++)e.push(n.options.aliases[t].toLowerCase()); for (o = r(n.fn, "function") ? n.fn() : n.fn, s = 0; s < e.length; s++)i = e[s], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), g.push((o ? "" : "no-") + a.join("-")) } } function s(e) { var n = _.className, t = Modernizr._config.classPrefix || ""; if (S && (n = n.baseVal), Modernizr._config.enableJSClass) { var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)"); n = n.replace(r, "$1" + t + "js$2") } Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), S ? _.className.baseVal = n : _.className = n) } function i(e, n) { return !!~("" + e).indexOf(n) } function a() { return "function" != typeof n.createElement ? n.createElement(arguments[0]) : S ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments) } function l(e) { return e.replace(/([a-z])-([a-z])/g, function (e, n, t) { return n + t.toUpperCase() }).replace(/^-/, "") } function f(e, n) { return function () { return e.apply(n, arguments) } } function u(e, n, t) { var o; for (var s in e) if (e[s] in n) return t === !1 ? e[s] : (o = n[e[s]], r(o, "function") ? f(o, t || n) : o); return !1 } function d(e) { return e.replace(/([A-Z])/g, function (e, n) { return "-" + n.toLowerCase() }).replace(/^ms-/, "-ms-") } function c() { var e = n.body; return e || (e = a(S ? "svg" : "body"), e.fake = !0), e } function p(e, t, r, o) { var s, i, l, f, u = "modernizr", d = a("div"), p = c(); if (parseInt(r, 10)) for (; r--;)l = a("div"), l.id = o ? o[r] : u + (r + 1), d.appendChild(l); return s = a("style"), s.type = "text/css", s.id = "s" + u, (p.fake ? p : d).appendChild(s), p.appendChild(d), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(n.createTextNode(e)), d.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", f = _.style.overflow, _.style.overflow = "hidden", _.appendChild(p)), i = t(d, e), p.fake ? (p.parentNode.removeChild(p), _.style.overflow = f, _.offsetHeight) : d.parentNode.removeChild(d), !!i } function m(n, r) { var o = n.length; if ("CSS" in e && "supports" in e.CSS) { for (; o--;)if (e.CSS.supports(d(n[o]), r)) return !0; return !1 } if ("CSSSupportsRule" in e) { for (var s = []; o--;)s.push("(" + d(n[o]) + ":" + r + ")"); return s = s.join(" or "), p("@supports (" + s + ") { #modernizr { position: absolute; } }", function (e) { return "absolute" == getComputedStyle(e, null).position }) } return t } function h(e, n, o, s) { function f() { d && (delete P.style, delete P.modElem) } if (s = r(s, "undefined") ? !1 : s, !r(o, "undefined")) { var u = m(e, o); if (!r(u, "undefined")) return u } for (var d, c, p, h, v, y = ["modernizr", "tspan"]; !P.style;)d = !0, P.modElem = a(y.shift()), P.style = P.modElem.style; for (p = e.length, c = 0; p > c; c++)if (h = e[c], v = P.style[h], i(h, "-") && (h = l(h)), P.style[h] !== t) { if (s || r(o, "undefined")) return f(), "pfx" == n ? h : !0; try { P.style[h] = o } catch (g) { } if (P.style[h] != v) return f(), "pfx" == n ? h : !0 } return f(), !1 } function v(e, n, t, o, s) { var i = e.charAt(0).toUpperCase() + e.slice(1), a = (e + " " + b.join(i + " ") + i).split(" "); return r(n, "string") || r(n, "undefined") ? h(a, n, o, s) : (a = (e + " " + E.join(i + " ") + i).split(" "), u(a, n, t)) } function y(e, n, r) { return v(e, t, t, n, r) } var g = [], C = [], w = { _version: "3.2.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function (e, n) { var t = this; setTimeout(function () { n(t[e]) }, 0) }, addTest: function (e, n, t) { C.push({ name: e, fn: n, options: t }) }, addAsyncTest: function (e) { C.push({ name: null, fn: e }) } }, Modernizr = function () { }; Modernizr.prototype = w, Modernizr = new Modernizr; var _ = n.documentElement, S = "svg" === _.nodeName.toLowerCase(), x = "Moz O ms Webkit", b = w._config.usePrefixes ? x.split(" ") : []; w._cssomPrefixes = b; var E = w._config.usePrefixes ? x.toLowerCase().split(" ") : []; w._domPrefixes = E; var N = { elem: a("modernizr") }; Modernizr._q.push(function () { delete N.elem }); var P = { style: N.elem.style }; Modernizr._q.unshift(function () { delete P.style }), w.testAllProps = v, w.testAllProps = y, Modernizr.addTest("cssanimations", y("animationName", "a", !0)), o(), s(g), delete w.addTest, delete w.addAsyncTest; for (var z = 0; z < Modernizr._q.length; z++)Modernizr._q[z](); e.Modernizr = Modernizr }(window, document);

})
