class Vector
  x: 0
  y: 0
  z: 0

  constructor: (x,y,z)-> @set x, y, z
  
  add: (v)->
    @x += v.x
    @y += v.y
    @z += v.z
  
  get: -> new Vector @x, @y, @z

  cross: (v)->
    new Vector @y * v.z - v.y * @z, @z * v.x - v.z * @x, @x * v.y - v.x * @y

  div: (v)->
    v = new Vector v, v, v if typeof v is 'number'
    @x /= v.x
    @y /= v.y
    @z /= v.z

  dist: (v)->
    v = new Vector v, v, v if typeof v is 'number'
    dx = v.x - @x
    dy = v.y - @y
    dz = v.z - @z
    Math.sqrt dx*dx + dy*dy + dz*dz

  dot: (v)-> @x * v.x + @y * v.y + @z * v.z

  heading2D: -> -Math.atan2 -@y, @x

  limit: (high)-> 
    if @mag() > high 
      @normalize()
      @mult(high)

  mag: -> Math.sqrt @x * @x + @y * @y + @z * @z

  mult: (v)->
    @x *= v.x
    @y *= v.y
    @z *= v.z

  normalize: ->
      m = @mag()
      @div m if m > 0

  set: (x, y, z)-> [ @x, @y, @z ] = [ x, y, z ]

  sub: (v)->
    @x -= v.z
    @y -= v.y
    @z -= v.z
 
  toArray: -> [@x, @y, @z]

  toString: -> "x:@x, y:@y, z:@z"
  
Vector.dist = (v1, v2)-> v1.dist v2

Vector.dot = (v1, v2)-> v1.dot(v2)

Vector.cross = (v1, v2)-> v1.cross(v2)

Vector.angleBetween = (v1, v2)-> Math.acos v1.dot(v2) / (v1.mag() * v2.mag())

exports.Vector = Vector if exports? 
