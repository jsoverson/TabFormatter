
var TabFormatter = function(){
  var api = {};

  api.format = function (src,numSpaces,replacement,prefix,suffix) {
    replacement = replacement || ' ';
    prefix = prefix || '';
    suffix = suffix || '';
    var lines = src.split("\n");
    var formatted = '';
    for (var i = 0; i < lines.length; i++) {
      var numTabs = 0, addedChars = '';
      lines[i] = lines[i].replace(/\t/g,function(tab,index,string){
        var offset = (index + addedChars.length - numTabs);
        var spotMidTab = (offset) % numSpaces;
        var replacements = prefix;
        for (var i = 0; i < (numSpaces - spotMidTab); i++) {
          replacements += replacement;
        }
        replacements += suffix;
        addedChars += replacements;
        numTabs++;
        return replacements;
      });
    }
    return lines.join("\n");
  }

  return api;
}();

