
var TabFormatter = function(){
  var api = {};

  api.format = function (src,numSpaces,replacement,replacementWidth,prefix,suffix) {
    replacement = replacement || ' ';
    replacementWidth = replacementWidth || 1;
    prefix = prefix || '';
    suffix = suffix || '';
    var lines = src.split("\n");
    var formatted = '';
    for (var i = 0; i < lines.length; i++) {
      var numTabs = 0, addedChars = 0;
      lines[i] = lines[i].replace(/\t/g,function(tab,index,string){
        var offset = (index + addedChars - numTabs);
        var spotMidTab = (offset) % numSpaces;
        var replacements = '';
        for (var i = 0; i < (numSpaces - spotMidTab); i++) {
          replacements += replacement;
          addedChars += replacementWidth;
        }
        numTabs++;
        return prefix + replacements + suffix;
      });
    }
    return lines.join("\n");
  }

  return api;
}();

