inlineAllStylesheets = function(svgEl){

  for (var i = 0; i < document.styleSheets.length; i++) {
    var cssRules = document.styleSheets[i].cssRules;

    for (var j = 0; j < cssRules.length; j++){
      var cssStyleRule = cssRules[j];
      var cssStyleDeclaration = cssStyleRule.style;

      var matchingElements = svgEl.querySelectorAll(cssStyleRule.selectorText);
      for (var k = 0; k < matchingElements.length; k++) {
        var matchingElement = matchingElements[k];

        for (var l = 0; l < cssStyleDeclaration.length; l++) {
          var attr = cssStyleDeclaration[l];
          matchingElement.setAttribute(attr, cssStyleDeclaration[camelCase(attr)]);
        }
      }
    }
  }
}

function camelCase(str){
  return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}
