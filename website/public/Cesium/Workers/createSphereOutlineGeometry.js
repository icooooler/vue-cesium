define([
  './defaultValue-0a909f67',
  './Matrix3-b6f074fa',
  './EllipsoidOutlineGeometry-87fcdae3',
  './Math-e97915da',
  './Transforms-dadc538f',
  './Matrix2-163b5a1d',
  './RuntimeError-06c93819',
  './combine-ca22a614',
  './ComponentDatatype-77274976',
  './WebGLConstants-a8cc3e8c',
  './GeometryAttribute-e2b38d72',
  './GeometryAttributes-f06a2792',
  './GeometryOffsetAttribute-04332ce7',
  './IndexDatatype-2149f06c'
], function (e, i, t, n, r, o, s, a, d, l, c, u, m, p) {
  'use strict'
  function f(n) {
    const r = e.defaultValue(n.radius, 1),
      o = { radii: new i.Cartesian3(r, r, r), stackPartitions: n.stackPartitions, slicePartitions: n.slicePartitions, subdivisions: n.subdivisions }
    ;(this._ellipsoidGeometry = new t.EllipsoidOutlineGeometry(o)), (this._workerName = 'createSphereOutlineGeometry')
  }
  ;(f.packedLength = t.EllipsoidOutlineGeometry.packedLength),
    (f.pack = function (e, i, n) {
      return t.EllipsoidOutlineGeometry.pack(e._ellipsoidGeometry, i, n)
    })
  const y = new t.EllipsoidOutlineGeometry(),
    G = { radius: void 0, radii: new i.Cartesian3(), stackPartitions: void 0, slicePartitions: void 0, subdivisions: void 0 }
  return (
    (f.unpack = function (n, r, o) {
      const s = t.EllipsoidOutlineGeometry.unpack(n, r, y)
      return (
        (G.stackPartitions = s._stackPartitions),
        (G.slicePartitions = s._slicePartitions),
        (G.subdivisions = s._subdivisions),
        e.defined(o)
          ? (i.Cartesian3.clone(s._radii, G.radii), (o._ellipsoidGeometry = new t.EllipsoidOutlineGeometry(G)), o)
          : ((G.radius = s._radii.x), new f(G))
      )
    }),
    (f.createGeometry = function (e) {
      return t.EllipsoidOutlineGeometry.createGeometry(e._ellipsoidGeometry)
    }),
    function (i, t) {
      return e.defined(t) && (i = f.unpack(i, t)), f.createGeometry(i)
    }
  )
})
