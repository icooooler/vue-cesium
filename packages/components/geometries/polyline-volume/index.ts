import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { polylinePositions, shapePositions, ellipsoid, granularity, vertexFormat, cornerType } from '@vue-cesium/utils/cesium-props'
export default defineComponent({
  name: 'VcGeometryPolylineVolume',
  props: {
    ...polylinePositions,
    ...shapePositions,
    ...ellipsoid,
    ...granularity,
    ...vertexFormat,
    ...cornerType
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PolylineVolumeGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})