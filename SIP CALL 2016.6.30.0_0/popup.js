(function() {
  function o() {
    var o = localStorage.getItem("sipProtocol");
    $("#" + o).attr("checked", true);
    if (localStorage.getItem("sipCallerAnyProtocol")) {
      $("#sipCallerAnyProtocol").val(localStorage.getItem("sipCallerAnyProtocol"));
    }
    if (localStorage.getItem("sipCallerGetUrl")) {
      $("#sipCallerGetUrl").val(localStorage.getItem("sipCallerGetUrl"));
    }
  }
  document.addEventListener("DOMContentLoaded", function() {
    o();
    $("#options").on("change", function() {
      var o = $("#options input[name=protocol]:checked").attr("id");
      console.log(o);
      localStorage.setItem("sipProtocol", o);
    });
    $("#sipCallerAnyProtocol").on("change", function() {
      localStorage.setItem("sipCallerAnyProtocol", $("#sipCallerAnyProtocol").val());
    });
    $("#sipCallerGetUrl").on("change", function() {
      localStorage.setItem("sipCallerGetUrl", $("#sipCallerGetUrl").val());
    });
  });
})();