define([
  './defaultValue-0a909f67',
  './Transforms-dadc538f',
  './Matrix3-b6f074fa',
  './ComponentDatatype-77274976',
  './GeometryAttribute-e2b38d72',
  './GeometryAttributes-f06a2792',
  './Math-e97915da',
  './Matrix2-163b5a1d',
  './RuntimeError-06c93819',
  './combine-ca22a614',
  './WebGLConstants-a8cc3e8c'
], function (e, t, n, r, a, i, o, u, c, s, y) {
  'use strict'
  function m() {
    this._workerName = 'createPlaneOutlineGeometry'
  }
  ;(m.packedLength = 0),
    (m.pack = function (e, t) {
      return t
    }),
    (m.unpack = function (t, n, r) {
      return e.defined(r) ? r : new m()
    })
  const p = new n.Cartesian3(-0.5, -0.5, 0),
    f = new n.Cartesian3(0.5, 0.5, 0)
  return (
    (m.createGeometry = function () {
      const e = new i.GeometryAttributes(),
        o = new Uint16Array(8),
        u = new Float64Array(12)
      return (
        (u[0] = p.x),
        (u[1] = p.y),
        (u[2] = p.z),
        (u[3] = f.x),
        (u[4] = p.y),
        (u[5] = p.z),
        (u[6] = f.x),
        (u[7] = f.y),
        (u[8] = p.z),
        (u[9] = p.x),
        (u[10] = f.y),
        (u[11] = p.z),
        (e.position = new a.GeometryAttribute({ componentDatatype: r.ComponentDatatype.DOUBLE, componentsPerAttribute: 3, values: u })),
        (o[0] = 0),
        (o[1] = 1),
        (o[2] = 1),
        (o[3] = 2),
        (o[4] = 2),
        (o[5] = 3),
        (o[6] = 3),
        (o[7] = 0),
        new a.Geometry({
          attributes: e,
          indices: o,
          primitiveType: a.PrimitiveType.LINES,
          boundingSphere: new t.BoundingSphere(n.Cartesian3.ZERO, Math.sqrt(2))
        })
      )
    }),
    function (t, n) {
      return e.defined(n) && (t = m.unpack(t, n)), m.createGeometry(t)
    }
  )
})
