define([
  './arrayRemoveDuplicates-e9673044',
  './Transforms-dadc538f',
  './Matrix3-b6f074fa',
  './ComponentDatatype-77274976',
  './CoplanarPolygonGeometryLibrary-8933e3c1',
  './defaultValue-0a909f67',
  './GeometryAttribute-e2b38d72',
  './GeometryAttributes-f06a2792',
  './GeometryInstance-9b27c40d',
  './GeometryPipeline-b7404acc',
  './IndexDatatype-2149f06c',
  './PolygonGeometryLibrary-a917cdd7',
  './Math-e97915da',
  './Matrix2-163b5a1d',
  './RuntimeError-06c93819',
  './combine-ca22a614',
  './WebGLConstants-a8cc3e8c',
  './OrientedBoundingBox-83fb8c71',
  './EllipsoidTangentPlane-f7077c2e',
  './AxisAlignedBoundingBox-e5bb9f92',
  './IntersectionTests-1307e0a8',
  './Plane-1c5a21a3',
  './AttributeCompression-e18a879a',
  './EncodedCartesian3-de837603',
  './ArcType-ce2e50ab',
  './EllipsoidRhumbLine-7f84cca0',
  './PolygonPipeline-1ccef6d7'
], function (e, t, n, o, r, i, a, c, y, l, s, u, p, d, m, f, g, b, h, P, G, L, C, T, E, A, H) {
  'use strict'
  function k(e) {
    const t = e.length,
      n = new Float64Array(3 * t),
      r = s.IndexDatatype.createTypedArray(t, 2 * t)
    let i = 0,
      y = 0
    for (let o = 0; o < t; o++) {
      const a = e[o]
      ;(n[i++] = a.x), (n[i++] = a.y), (n[i++] = a.z), (r[y++] = o), (r[y++] = (o + 1) % t)
    }
    const l = new c.GeometryAttributes({
      position: new a.GeometryAttribute({ componentDatatype: o.ComponentDatatype.DOUBLE, componentsPerAttribute: 3, values: n })
    })
    return new a.Geometry({ attributes: l, indices: r, primitiveType: a.PrimitiveType.LINES })
  }
  function x(e) {
    const t = (e = i.defaultValue(e, i.defaultValue.EMPTY_OBJECT)).polygonHierarchy
    ;(this._polygonHierarchy = t),
      (this._workerName = 'createCoplanarPolygonOutlineGeometry'),
      (this.packedLength = u.PolygonGeometryLibrary.computeHierarchyPackedLength(t, n.Cartesian3) + 1)
  }
  ;(x.fromPositions = function (e) {
    return new x({ polygonHierarchy: { positions: (e = i.defaultValue(e, i.defaultValue.EMPTY_OBJECT)).positions } })
  }),
    (x.pack = function (e, t, o) {
      return (
        (o = i.defaultValue(o, 0)),
        (t[(o = u.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy, t, o, n.Cartesian3))] = e.packedLength),
        t
      )
    })
  const w = { polygonHierarchy: {} }
  return (
    (x.unpack = function (e, t, o) {
      t = i.defaultValue(t, 0)
      const r = u.PolygonGeometryLibrary.unpackPolygonHierarchy(e, t, n.Cartesian3)
      ;(t = r.startingIndex), delete r.startingIndex
      const a = e[t]
      return i.defined(o) || (o = new x(w)), (o._polygonHierarchy = r), (o.packedLength = a), o
    }),
    (x.createGeometry = function (o) {
      const i = o._polygonHierarchy
      let c = i.positions
      if (((c = e.arrayRemoveDuplicates(c, n.Cartesian3.equalsEpsilon, !0)), c.length < 3)) return
      if (!r.CoplanarPolygonGeometryLibrary.validOutline(c)) return
      const s = u.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(i, !1)
      if (0 === s.length) return
      const p = []
      for (let e = 0; e < s.length; e++) {
        const t = new y.GeometryInstance({ geometry: k(s[e]) })
        p.push(t)
      }
      const d = l.GeometryPipeline.combineInstances(p)[0],
        m = t.BoundingSphere.fromPoints(i.positions)
      return new a.Geometry({ attributes: d.attributes, indices: d.indices, primitiveType: d.primitiveType, boundingSphere: m })
    }),
    function (e, t) {
      return i.defined(t) && (e = x.unpack(e, t)), (e._ellipsoid = n.Ellipsoid.clone(e._ellipsoid)), x.createGeometry(e)
    }
  )
})
