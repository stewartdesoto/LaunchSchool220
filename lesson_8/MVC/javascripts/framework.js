function ModelConstructor(options) {
  var id_count = 0;
  
  function Model(attrs) {
    id_count++;

    var self = this;
    self.attributes = attrs || {};
    self.id = id_count;
    self.attributes.id = id_count;
    if (options && options.change && _.isFunction(options.change)) {
      this.__events.push(options.change);
    }
  }

  Model.prototype = {
    __events: [],
    set: function(key, val) {
      this.attributes[key] = val;
      this.triggerChange();
    },
    get: function(key) {
      //console.dir(key, this.attributes);
      return this.attributes[key];
    },
    remove: function(key) {
      delete this.attributes[key];
      this.triggerChange();
    },
    triggerChange: function() {
      this.__events.forEach(function(callback) {
        callback();   
      })
    },
    addCallback: function(callback) {
      this.__events.push(callback);
    }
  };

  _.extend(Model.prototype, options);

  return Model; 
}