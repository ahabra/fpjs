/*global _, window */

function Namespace(path) {
  if (_.isUndefined(path) || path===null || _.isBlank(path)) { return;}
  
  var parent= window;
  _.each(path.split('.'), function(part) {
    part= _.trim(part);
    parent[part]= parent[part] || {};
    parent= parent[part];
  });
  
}
