function ModelConstructor(opts) {
  var id_count = 0;

  function Model(attrs) {
    id_count++;

    var self = this;
    self.attributes = attrs || {};
    self.id = id_count;
    self.attributes.id = id_count;

    if (opts && opts.change && _.isFunction(opts.change)) {
      self.__events.push(opts.change);
    }
  }

  Model.prototype = {
    __events: [],
    set: function(key, val) {
      this.attributes[key] = val;
      this.triggerChange();
    },
    get: function(key) {
      return this.attributes[key];
    },
    remove: function(key) {
      delete this.attributes[key];
      this.triggerChange();
    },
    triggerChange: function() {
      this.__events.forEach(function(cb) {
        cb();
      });
    },
    addCallback: function(cb) {
      this.__events.push(cb);
    }
  };

  _.extend(Model.prototype, opts);

  return Model;
}
