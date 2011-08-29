(function() {
  var Vector;
  Vector = (function() {
    Vector.prototype.x = 0;
    Vector.prototype.y = 0;
    Vector.prototype.z = 0;
    function Vector(x, y, z) {
      this.set(x, y, z);
    }
    Vector.prototype.add = function(v) {
      this.x += v.x;
      this.y += v.y;
      return this.z += v.z;
    };
    Vector.prototype.get = function() {
      return new Vector(this.x, this.y, this.z);
    };
    Vector.prototype.cross = function(v) {
      return new Vector(this.y * v.z - v.y * this.z, this.z * v.x - v.z * this.x, this.x * v.y - v.x * this.y);
    };
    Vector.prototype.div = function(v) {
      if (typeof v === 'number') {
        v = new Vector(v, v, v);
      }
      this.x /= v.x;
      this.y /= v.y;
      return this.z /= v.z;
    };
    Vector.prototype.dist = function(v) {
      var dx, dy, dz;
      if (typeof v === 'number') {
        v = new Vector(v, v, v);
      }
      dx = v.x - this.x;
      dy = v.y - this.y;
      dz = v.z - this.z;
      return Math.sqrt(dx * dx + dy * dy + dz * dz);
    };
    Vector.prototype.dot = function(v) {
      return this.x * v.x + this.y * v.y + this.z * v.z;
    };
    Vector.prototype.mag = function() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    };
    Vector.prototype.mult = function(v) {
      this.x *= v.x;
      this.y *= v.y;
      return this.z *= v.z;
    };
    Vector.prototype.set = function(x, y, z) {
      var _ref;
      return _ref = [x, y, z], this.x = _ref[0], this.y = _ref[1], this.z = _ref[2], _ref;
    };
    Vector.prototype.sub = function(v) {
      this.x -= v.z;
      this.y -= v.y;
      return this.z -= v.z;
    };
    Vector.prototype.toArray = function() {
      return [this.x, this.y, this.z];
    };
    Vector.prototype.toString = function() {
      return "x:@x, y:@y, z:@z";
    };
    return Vector;
  })();
  Vector.dist = function(v1, v2) {
    return v1.dist(v2);
  };
  Vector.dot = function(v1, v2) {
    return v1.dot(v2);
  };
  Vector.cross = function(v1, v2) {
    return v1.cross(v2);
  };
  Vector.angleBetween = function(v1, v2) {
    return Math.acos(v1.dot(v2) / (v1.mag() * v2.mag()));
  };
}).call(this);
