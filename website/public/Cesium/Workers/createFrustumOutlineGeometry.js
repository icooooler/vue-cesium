define([
  './defaultValue-0a909f67',
  './Transforms-dadc538f',
  './Matrix3-b6f074fa',
  './ComponentDatatype-77274976',
  './FrustumGeometry-c033d358',
  './GeometryAttribute-e2b38d72',
  './GeometryAttributes-f06a2792',
  './Math-e97915da',
  './Matrix2-163b5a1d',
  './RuntimeError-06c93819',
  './combine-ca22a614',
  './WebGLConstants-a8cc3e8c',
  './Plane-1c5a21a3',
  './VertexFormat-ab2e00e6'
], function (e, t, r, n, a, u, i, o, c, s, p, m, d, f) {
  'use strict'
  function h(n) {
    const u = n.frustum,
      i = n.orientation,
      o = n.origin,
      c = e.defaultValue(n._drawNearPlane, !0)
    let s, p
    u instanceof a.PerspectiveFrustum
      ? ((s = 0), (p = a.PerspectiveFrustum.packedLength))
      : u instanceof a.OrthographicFrustum && ((s = 1), (p = a.OrthographicFrustum.packedLength)),
      (this._frustumType = s),
      (this._frustum = u.clone()),
      (this._origin = r.Cartesian3.clone(o)),
      (this._orientation = t.Quaternion.clone(i)),
      (this._drawNearPlane = c),
      (this._workerName = 'createFrustumOutlineGeometry'),
      (this.packedLength = 2 + p + r.Cartesian3.packedLength + t.Quaternion.packedLength)
  }
  h.pack = function (n, u, i) {
    i = e.defaultValue(i, 0)
    const o = n._frustumType,
      c = n._frustum
    return (
      (u[i++] = o),
      0 === o
        ? (a.PerspectiveFrustum.pack(c, u, i), (i += a.PerspectiveFrustum.packedLength))
        : (a.OrthographicFrustum.pack(c, u, i), (i += a.OrthographicFrustum.packedLength)),
      r.Cartesian3.pack(n._origin, u, i),
      (i += r.Cartesian3.packedLength),
      t.Quaternion.pack(n._orientation, u, i),
      (u[(i += t.Quaternion.packedLength)] = n._drawNearPlane ? 1 : 0),
      u
    )
  }
  const g = new a.PerspectiveFrustum(),
    l = new a.OrthographicFrustum(),
    _ = new t.Quaternion(),
    k = new r.Cartesian3()
  return (
    (h.unpack = function (n, u, i) {
      u = e.defaultValue(u, 0)
      const o = n[u++]
      let c
      0 === o
        ? ((c = a.PerspectiveFrustum.unpack(n, u, g)), (u += a.PerspectiveFrustum.packedLength))
        : ((c = a.OrthographicFrustum.unpack(n, u, l)), (u += a.OrthographicFrustum.packedLength))
      const s = r.Cartesian3.unpack(n, u, k)
      u += r.Cartesian3.packedLength
      const p = t.Quaternion.unpack(n, u, _),
        m = 1 === n[(u += t.Quaternion.packedLength)]
      if (!e.defined(i)) return new h({ frustum: c, origin: s, orientation: p, _drawNearPlane: m })
      const d = o === i._frustumType ? i._frustum : void 0
      return (
        (i._frustum = c.clone(d)),
        (i._frustumType = o),
        (i._origin = r.Cartesian3.clone(s, i._origin)),
        (i._orientation = t.Quaternion.clone(p, i._orientation)),
        (i._drawNearPlane = m),
        i
      )
    }),
    (h.createGeometry = function (e) {
      const r = e._frustumType,
        o = e._frustum,
        c = e._origin,
        s = e._orientation,
        p = e._drawNearPlane,
        m = new Float64Array(24)
      a.FrustumGeometry._computeNearFarPlanes(c, s, r, o, m)
      const d = new i.GeometryAttributes({
        position: new u.GeometryAttribute({ componentDatatype: n.ComponentDatatype.DOUBLE, componentsPerAttribute: 3, values: m })
      })
      let f, h
      const g = p ? 2 : 1,
        l = new Uint16Array(8 * (g + 1))
      let _ = p ? 0 : 1
      for (; _ < 2; ++_)
        (f = p ? 8 * _ : 0),
          (h = 4 * _),
          (l[f] = h),
          (l[f + 1] = h + 1),
          (l[f + 2] = h + 1),
          (l[f + 3] = h + 2),
          (l[f + 4] = h + 2),
          (l[f + 5] = h + 3),
          (l[f + 6] = h + 3),
          (l[f + 7] = h)
      for (_ = 0; _ < 2; ++_)
        (f = 8 * (g + _)),
          (h = 4 * _),
          (l[f] = h),
          (l[f + 1] = h + 4),
          (l[f + 2] = h + 1),
          (l[f + 3] = h + 5),
          (l[f + 4] = h + 2),
          (l[f + 5] = h + 6),
          (l[f + 6] = h + 3),
          (l[f + 7] = h + 7)
      return new u.Geometry({ attributes: d, indices: l, primitiveType: u.PrimitiveType.LINES, boundingSphere: t.BoundingSphere.fromVertices(m) })
    }),
    function (t, r) {
      return e.defined(r) && (t = h.unpack(t, r)), h.createGeometry(t)
    }
  )
})
