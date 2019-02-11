// Code your solution in this file

function findMatching(array, string) {
  return array.filter(function(name) {return name.toLowerCase() === string.toLowerCase(); });
}

function fuzzyMatch(array, letters) {
  return array.filter(function(string) {return letters === string.slice(0,1); });
}

function matchName(array, string) {
  return array.filter(function(name) {return name === string; });
}
