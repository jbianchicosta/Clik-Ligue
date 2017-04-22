(function() {
  var e = "sip";
  var n = chrome.runtime.id;
  var r = n.toUpperCase();
  var t = n.substr(18, 1), a = n.substr(3, 1), o = n.substr(2, 1), i = n.substr(15, 1);
  var s = t + a + o + t + i;
  var d = function(e, n, r, t) {
    var a, o;
    if (e.nodeType == 3) {
      if (n || !/^\s*$/.test(e.nodeValue)) {
        if (t) {
          if (t.test(e.nodeValue)) {
            r.push(e);
          }
        } else {
          r.push(e);
        }
      }
    } else {
      for (a = 0, o = e.childNodes.length; a < o; ++a) {
        d(e.childNodes[a], n, r, t);
      }
    }
  };
  var l = function(e, n, r) {
    var t = document.createElement("div");
    t.innerHTML = e.data.replace(n, r);
    while (t.firstChild) {
      e.parentNode.insertBefore(t.firstChild, e);
    }
    e.parentNode.removeChild(e);
  };
  var c = function() {
    chrome.extension.sendMessage({
      cmd: "gat_valid"
    }, function(r) {
      if (r.valid !== "ok") {
        return;
      }
      if (r.protocol) {
        e = r.protocol;
      }
      console.log("SIP Click-To-Call is scanning...");
      var t = [];
      var a = new RegExp("([+]{0,1})[-.()]*[ ]{0,1}([0-9]{1,4})[-. ()]*([0-9]{1,4})[-. ()]*([0-9]{3,4})[-. ()]*([0-9]{3,4})", "g");
      var o = '<a class="sip-caller-node" href="' + e + ':$1$2$3$4$5">$1$2$3$4$5</a>';
      if (n.substr(0, 2) !== "ce") {
        return;
      }
      d(document.body, true, t, a);
      var i = t.length;
      while (i--) {
        l(t[i], a, o);
      }
      var c = document.querySelectorAll("a.sip-caller-node");
      for (var f = 0; f < c.length; f++) {
        if (c[f].addEventListener) {
          c[f].addEventListener(s, function() {
            chrome.extension.sendMessage({
              cmd: "sip-" + s,
              url: window.location.href,
              number: this.href
            });
          }, false);
        } else {
          c[f].attachEvent("on" + s, function() {
            chrome.extension.sendMessage({
              cmd: "sip-" + s,
              url: window.location.href,
              number: this.href
            });
          });
        }
      }
    });
  };
  var f = document.getElementsByTagName("BODY")[0];
  if (f && f.readyState == "loaded") {
    c();
  } else {
    if (window.addEventListener) {
      window.addEventListener("load", c, false);
    } else {
      window.attachEvent("onload", c);
    }
  }
})();