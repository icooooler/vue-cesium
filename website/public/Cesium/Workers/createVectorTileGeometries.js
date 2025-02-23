define([
  './Transforms-dadc538f',
  './BoxGeometry-f5437dce',
  './Matrix3-b6f074fa',
  './Color-0a64769f',
  './CylinderGeometry-244c9dda',
  './defaultValue-0a909f67',
  './EllipsoidGeometry-ccc3a2e5',
  './IndexDatatype-2149f06c',
  './Matrix2-163b5a1d',
  './createTaskProcessorWorker',
  './Math-e97915da',
  './combine-ca22a614',
  './RuntimeError-06c93819',
  './ComponentDatatype-77274976',
  './WebGLConstants-a8cc3e8c',
  './GeometryAttribute-e2b38d72',
  './GeometryAttributes-f06a2792',
  './GeometryOffsetAttribute-04332ce7',
  './VertexFormat-ab2e00e6',
  './CylinderGeometryLibrary-20be4f8b'
], function (e, t, n, r, a, i, o, s, c, d, l, f, u, h, p, b, y, x, g, m) {
  'use strict'
  function C(e) {
    ;(this.offset = e.offset), (this.count = e.count), (this.color = e.color), (this.batchIds = e.batchIds)
  }
  const I = new n.Cartesian3(),
    M = c.Matrix4.packedLength + n.Cartesian3.packedLength,
    k = c.Matrix4.packedLength + 2,
    B = c.Matrix4.packedLength + n.Cartesian3.packedLength,
    w = n.Cartesian3.packedLength + 1,
    A = { modelMatrix: new c.Matrix4(), boundingVolume: new e.BoundingSphere() }
  function O(e, t) {
    let r = t * M
    const a = n.Cartesian3.unpack(e, r, I)
    r += n.Cartesian3.packedLength
    const i = c.Matrix4.unpack(e, r, A.modelMatrix)
    c.Matrix4.multiplyByScale(i, a, i)
    const o = A.boundingVolume
    return n.Cartesian3.clone(n.Cartesian3.ZERO, o.center), (o.radius = Math.sqrt(3)), A
  }
  function L(e, t) {
    let r = t * k
    const a = e[r++],
      i = e[r++],
      o = n.Cartesian3.fromElements(a, a, i, I),
      s = c.Matrix4.unpack(e, r, A.modelMatrix)
    c.Matrix4.multiplyByScale(s, o, s)
    const d = A.boundingVolume
    return n.Cartesian3.clone(n.Cartesian3.ZERO, d.center), (d.radius = Math.sqrt(2)), A
  }
  function v(e, t) {
    let r = t * B
    const a = n.Cartesian3.unpack(e, r, I)
    r += n.Cartesian3.packedLength
    const i = c.Matrix4.unpack(e, r, A.modelMatrix)
    c.Matrix4.multiplyByScale(i, a, i)
    const o = A.boundingVolume
    return n.Cartesian3.clone(n.Cartesian3.ZERO, o.center), (o.radius = 1), A
  }
  function E(e, t) {
    let r = t * w
    const a = e[r++],
      i = n.Cartesian3.unpack(e, r, I),
      o = c.Matrix4.fromTranslation(i, A.modelMatrix)
    c.Matrix4.multiplyByUniformScale(o, a, o)
    const s = A.boundingVolume
    return n.Cartesian3.clone(n.Cartesian3.ZERO, s.center), (s.radius = 1), A
  }
  const U = new n.Cartesian3()
  function G(t, a, o, s, d) {
    if (!i.defined(a)) return
    const l = o.length,
      f = s.attributes.position.values,
      u = s.indices,
      h = t.positions,
      p = t.vertexBatchIds,
      b = t.indices,
      y = t.batchIds,
      x = t.batchTableColors,
      g = t.batchedIndices,
      m = t.indexOffsets,
      I = t.indexCounts,
      M = t.boundingVolumes,
      k = t.modelMatrix,
      B = t.center
    let w = t.positionOffset,
      A = t.batchIdIndex,
      O = t.indexOffset
    const L = t.batchedIndicesOffset
    for (let t = 0; t < l; ++t) {
      const i = d(a, t),
        s = i.modelMatrix
      c.Matrix4.multiply(k, s, s)
      const l = o[t],
        v = f.length
      for (let e = 0; e < v; e += 3) {
        const t = n.Cartesian3.unpack(f, e, U)
        c.Matrix4.multiplyByPoint(s, t, t), n.Cartesian3.subtract(t, B, t), n.Cartesian3.pack(t, h, 3 * w + e), (p[A++] = l)
      }
      const E = u.length
      for (let e = 0; e < E; ++e) b[O + e] = u[e] + w
      const G = t + L
      ;(g[G] = new C({ offset: O, count: E, color: r.Color.fromRgba(x[l]), batchIds: [l] })),
        (y[G] = l),
        (m[G] = O),
        (I[G] = E),
        (M[G] = e.BoundingSphere.transform(i.boundingVolume, s)),
        (w += v / 3),
        (O += E)
    }
    ;(t.positionOffset = w), (t.batchIdIndex = A), (t.indexOffset = O), (t.batchedIndicesOffset += l)
  }
  const S = new n.Cartesian3(),
    V = new c.Matrix4()
  function T(t, n, a) {
    const i = a.length,
      o =
        2 +
        i * e.BoundingSphere.packedLength +
        1 +
        (function (e) {
          const t = e.length
          let n = 0
          for (let a = 0; a < t; ++a) n += r.Color.packedLength + 3 + e[a].batchIds.length
          return n
        })(n),
      s = new Float64Array(o)
    let c = 0
    ;(s[c++] = t), (s[c++] = i)
    for (let t = 0; t < i; ++t) e.BoundingSphere.pack(a[t], s, c), (c += e.BoundingSphere.packedLength)
    const d = n.length
    s[c++] = d
    for (let e = 0; e < d; ++e) {
      const t = n[e]
      r.Color.pack(t.color, s, c), (c += r.Color.packedLength), (s[c++] = t.offset), (s[c++] = t.count)
      const a = t.batchIds,
        i = a.length
      s[c++] = i
      for (let e = 0; e < i; ++e) s[c++] = a[e]
    }
    return s
  }
  return d(function (e, r) {
    const d = i.defined(e.boxes) ? new Float32Array(e.boxes) : void 0,
      l = i.defined(e.boxBatchIds) ? new Uint16Array(e.boxBatchIds) : void 0,
      f = i.defined(e.cylinders) ? new Float32Array(e.cylinders) : void 0,
      u = i.defined(e.cylinderBatchIds) ? new Uint16Array(e.cylinderBatchIds) : void 0,
      h = i.defined(e.ellipsoids) ? new Float32Array(e.ellipsoids) : void 0,
      p = i.defined(e.ellipsoidBatchIds) ? new Uint16Array(e.ellipsoidBatchIds) : void 0,
      b = i.defined(e.spheres) ? new Float32Array(e.spheres) : void 0,
      y = i.defined(e.sphereBatchIds) ? new Uint16Array(e.sphereBatchIds) : void 0,
      x = i.defined(d) ? l.length : 0,
      g = i.defined(f) ? u.length : 0,
      m = i.defined(h) ? p.length : 0,
      C = i.defined(b) ? y.length : 0,
      I = t.BoxGeometry.getUnitBox(),
      M = a.CylinderGeometry.getUnitCylinder(),
      k = o.EllipsoidGeometry.getUnitEllipsoid(),
      B = I.attributes.position.values,
      w = M.attributes.position.values,
      A = k.attributes.position.values
    let U = B.length * x
    ;(U += w.length * g), (U += A.length * (m + C))
    const F = I.indices,
      R = M.indices,
      Z = k.indices
    let D = F.length * x
    ;(D += R.length * g), (D += Z.length * (m + C))
    const P = new Float32Array(U),
      q = new Uint16Array(U / 3),
      W = s.IndexDatatype.createTypedArray(U / 3, D),
      _ = x + g + m + C,
      N = new Uint16Array(_),
      Y = new Array(_),
      j = new Uint32Array(_),
      z = new Uint32Array(_),
      H = new Array(_)
    !(function (e) {
      const t = new Float64Array(e)
      let r = 0
      n.Cartesian3.unpack(t, r, S), (r += n.Cartesian3.packedLength), c.Matrix4.unpack(t, r, V)
    })(e.packedBuffer)
    const J = {
      batchTableColors: new Uint32Array(e.batchTableColors),
      positions: P,
      vertexBatchIds: q,
      indices: W,
      batchIds: N,
      batchedIndices: Y,
      indexOffsets: j,
      indexCounts: z,
      boundingVolumes: H,
      positionOffset: 0,
      batchIdIndex: 0,
      indexOffset: 0,
      batchedIndicesOffset: 0,
      modelMatrix: V,
      center: S
    }
    G(J, d, l, I, O), G(J, f, u, M, L), G(J, h, p, k, v), G(J, b, y, k, E)
    const K = T(W.BYTES_PER_ELEMENT, Y, H)
    return (
      r.push(P.buffer, q.buffer, W.buffer),
      r.push(N.buffer, j.buffer, z.buffer),
      r.push(K.buffer),
      {
        positions: P.buffer,
        vertexBatchIds: q.buffer,
        indices: W.buffer,
        indexOffsets: j.buffer,
        indexCounts: z.buffer,
        batchIds: N.buffer,
        packedBuffer: K.buffer
      }
    )
  })
})
