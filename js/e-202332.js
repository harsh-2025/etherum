function st_go(t) {
  window._stq.push(["view", t]);
}
function linktracker_init(t, n) {
  window._stq.push(["clickTrackerInit", t, n]);
}
(window.wpcom = window.wpcom || {}),
  (window._stq = window._stq || []),
  (window.wpcom.stats = (function () {
    var t = (function () {
        var t,
          o,
          e = function (t, n, o) {
            "function" == typeof t.addEventListener
              ? t.addEventListener(n, o)
              : "object" == typeof t.attachEvent && t.attachEvent("on" + n, o);
          },
          i = function (t) {
            return "object" == typeof t && t.target
              ? t.target
              : window.event.srcElement;
          },
          r = function (t) {
            var o = 0;
            "object" == typeof InstallTrigger && (o = 100),
              7 === n() && (o = 100),
              c(i(t), o);
          },
          a = function (t) {
            c(i(t), 0);
          },
          c = function (n, e) {
            try {
              if ("object" != typeof n) return;
              for (; "A" !== n.nodeName; ) {
                if (void 0 === n.nodeName) return;
                if ("object" != typeof n.parentNode) return;
                n = n.parentNode;
              }
              if (
                (function (t) {
                  var n = document.location;
                  if (n.host === t.host) return !0;
                  if ("" === t.host) return !0;
                  if (n.protocol === t.protocol && n.host === t.hostname) {
                    if ("http:" === n.protocol && n.host + ":80" === t.host)
                      return !0;
                    if ("https:" === n.protocol && n.host + ":443" === t.host)
                      return !0;
                  }
                  return !1;
                })(n)
              )
                return;
              if ("javascript:" === n.protocol) return;
              if (
                (window._stq.push([
                  "click",
                  {
                    s: "2",
                    u: n.href,
                    r: void 0 !== n.rel ? n.rel : "0",
                    b: void 0 !== t ? t : "0",
                    p: void 0 !== o ? o : "0",
                  },
                ]),
                e)
              )
                for (
                  var i = new Date(), r = i.getTime() + e;
                  !((i = new Date()).getTime() > r);

                );
            } catch (t) {}
          };
        return {
          init: function (n, i) {
            (t = n),
              (o = i),
              document.body
                ? (e(document.body, "click", r),
                  e(document.body, "contextmenu", a))
                : document &&
                  (e(document, "click", r), e(document, "contextmenu", a));
          },
        };
      })(),
      n = function () {
        var t = 0;
        if (
          "object" == typeof navigator &&
          "Microsoft Internet Explorer" == navigator.appName
        ) {
          var n = navigator.userAgent.match(/MSIE ([0-9]{1,})[\.0-9]{0,}/);
          null !== n && (t = parseInt(n[1]));
        }
        return t;
      },
      o = function (t) {
        var n,
          o = [];
        for (n in t)
          t.hasOwnProperty(n) &&
            o.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
        return o.join("&");
      },
      e = function (t, n, o) {
        var e = new Image();
        (e.src =
          document.location.protocol +
          "//pixel.wp.com/" +
          t +
          "?" +
          n +
          "&rand=" +
          Math.random()),
          (e.alt = ""),
          (e.width = "6"),
          (e.height = "5"),
          "string" == typeof o &&
            document.body &&
            ((e.id = o), document.body.appendChild(e));
      },
      i = function (t) {
        if (((this.a = 1), t && t.length))
          for (var n = 0; n < t.length; n++) this.push(t[n]);
      };
    i.prototype.push = function (t) {
      if (t)
        if ("object" == typeof t && t.length) {
          var n = t.splice(0, 1);
          c[n] && c[n].apply(null, t);
        } else "function" == typeof t && t();
    };
    var r = function () {
        window._stq.a || (window._stq = new i(window._stq));
      },
      a = function (t) {
        (t._ui = (function () {
          var t = [];
          if (window.crypto && window.crypto.getRandomValues)
            (t = new Uint8Array(18)), window.crypto.getRandomValues(t);
          else
            for (var n = 0; n < 18; ++n) t[n] = Math.floor(256 * Math.random());
          return btoa(String.fromCharCode.apply(String, t));
        })()),
          (t._ut = "anon"),
          (t._en = "jetpack_pageview_timing");
        var n = new Date();
        (t._ts = n.getTime()), (t._tz = n.getTimezoneOffset() / 60);
        var o = window.navigator,
          e = window.screen;
        (t._lg = o.language),
          (t._pf = o.platform),
          (t._ht = e.height),
          (t._wd = e.width);
        var i =
            void 0 !== window.pageXOffset
              ? window.pageXOffset
              : (
                  document.documentElement ||
                  document.body.parentNode ||
                  document.body
                ).scrollLeft,
          r =
            void 0 !== window.pageYOffset
              ? window.pageYOffset
              : (
                  document.documentElement ||
                  document.body.parentNode ||
                  document.body
                ).scrollTop;
        (t._sx = void 0 !== i ? i : 0),
          (t._sy = void 0 !== r ? r : 0),
          void 0 !== document.location &&
            (t._dl = document.location.toString()),
          void 0 !== document.referrer && (t._dr = document.referrer);
      },
      c = {
        view: function (t) {
          (t.host = document.location.host),
            (t.ref = document.referrer),
            (t.fcp = (function () {
              if (window.performance)
                for (
                  var t = window.performance.getEntriesByType("paint"), n = 0;
                  n < t.length;
                  n++
                )
                  if ("first-contentful-paint" === t[n].name)
                    return Math.round(t[n].startTime);
              return 0;
            })()),
            e("g.gif", o(t), "wpstats"),
            window.performance &&
              Math.random() < 0.005 &&
              window.addEventListener("load", function (n) {
                window.setTimeout(
                  c.samplePerformance.bind(
                    this,
                    t.blog,
                    t.post,
                    t.j.split(":").reverse()[0]
                  ),
                  100
                );
              });
        },
        click: function (t) {
          e("c.gif", o(t), !1);
        },
        clickTrackerInit: function (n, o) {
          t.init(n, o);
        },
        samplePerformance: function (t, n, i) {
          if (window.performance) {
            var r = { blog: t, post: n, blog_id: t, jetpack_version: i };
            a(r),
              (function (t) {
                var n =
                  navigator.connection ||
                  navigator.mozConnection ||
                  navigator.webkitConnection;
                if (
                  (n &&
                    (n.effectiveType && (t.conn_type = n.effectiveType),
                    n.rtt && (t.conn_rtt = n.rtt),
                    n.downlink && (t.conn_downlink = n.downlink)),
                  window.performance)
                ) {
                  var o = window.performance;
                  if (window.PerformanceNavigationTiming) {
                    var e = o.getEntriesByType("navigation")[0];
                    e.nextHopProtocol && (t.protocol = e.nextHopProtocol);
                  }
                  if (
                    o.timing &&
                    o.navigation &&
                    (0 === o.navigation.type || 1 === o.navigation.type)
                  ) {
                    var i = o.timing;
                    (t.dns_latency = Math.round(
                      i.domainLookupEnd - i.domainLookupStart
                    )),
                      (t.conn_latency = Math.round(
                        i.connectEnd - i.connectStart
                      )),
                      (t.resp_latency = Math.round(
                        i.responseStart - i.requestStart
                      )),
                      (t.resp_duration = Math.round(
                        i.responseEnd - i.responseStart
                      )),
                      (t.dom_interact = Math.round(
                        i.domInteractive - i.navigationStart
                      )),
                      (t.dom_load = Math.round(
                        i.domContentLoadedEventStart - i.navigationStart
                      )),
                      i.loadEventStart > 0 &&
                        (t.page_load = Math.round(
                          i.loadEventStart - i.navigationStart
                        ));
                  }
                  var r = o.getEntriesByType("resource");
                  if (r.length > 0) {
                    for (
                      var a = 0,
                        c = 0,
                        d = 0,
                        f = 0,
                        s = 0,
                        u = 0,
                        p = 0,
                        m = 0,
                        l = 0,
                        w = 0,
                        h = 0,
                        v = 0,
                        g = 0,
                        _ = 0,
                        y = 0,
                        b = 0;
                      b < r.length;
                      b++
                    ) {
                      var E,
                        M = r[b];
                      M.nextHopProtocol
                        ? (M.nextHopProtocol.startsWith("http/1")
                            ? (h += 1)
                            : "h2" === M.nextHopProtocol && (v += 1),
                          M.name.startsWith("https") && (g += 1))
                        : ((h += 1), M.name.startsWith("https") && (g += 1)),
                        M.name.indexOf(location.hostname) >= 0
                          ? (_ += 1)
                          : (y += 1),
                        (E =
                          M.name.indexOf("fonts.googleapis.com/css") >= 0
                            ? "css"
                            : M.name.split(/\#|\?/)[0].split(".").pop())
                          ? "js" === (E = E.toLowerCase())
                            ? ((p += M.duration), (c += 1))
                            : "css" === E
                            ? ((u += M.duration), (a += 1))
                            : "gif" === E ||
                              "jpg" === E ||
                              "jpeg" === E ||
                              "png" === E
                            ? ((m += M.duration), (d += 1))
                            : "woff" === E ||
                              "woff2" === E ||
                              "ttf" === E ||
                              "otf" === E
                            ? ((l += M.duration), (f += 1))
                            : ((w += M.duration), (s += 1))
                          : ((w += M.duration), (s += 1));
                    }
                    (t.files_origin = _),
                      (t.files_ext = y),
                      (t.files_ssl = g),
                      (t.files_http1 = h),
                      (t.files_http2 = v),
                      (t.files_js = c),
                      (t.files_css = a),
                      (t.files_img = d),
                      (t.files_font = f),
                      (t.files_other = s),
                      (t.duration_js = Math.round(p)),
                      (t.duration_css = Math.round(u)),
                      (t.duration_img = Math.round(m)),
                      (t.duration_font = Math.round(l)),
                      (t.duration_other = Math.round(w));
                  }
                  var T = o.getEntriesByType("paint");
                  if (void 0 === T) return;
                  for (b = 0; b < T.length; b++) {
                    var j = T[b];
                    "first-paint" === j.name
                      ? (t.first_paint = Math.round(j.startTime))
                      : "first-contentful-paint" === j.name &&
                        (t.first_cf_paint = Math.round(j.startTime));
                  }
                }
              })(r),
              e("t.gif", o(r));
          }
        },
      },
      d = function () {
        document.hidden ||
          (document.removeEventListener("visibilitychange", d), r());
      };
    return (
      6 === n() &&
      "complete" !== document.readyState &&
      "object" == typeof document.attachEvent
        ? document.attachEvent("onreadystatechange", function (t) {
            "complete" === document.readyState && window.setTimeout(r, 250);
          })
        : void 0 !== document.hidden && document.hidden
        ? document.addEventListener("visibilitychange", d)
        : r(),
      c
    );
  })());
