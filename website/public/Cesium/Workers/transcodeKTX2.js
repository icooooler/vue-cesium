define(['./defaultValue-0a909f67', './WebGLConstants-a8cc3e8c', './RuntimeError-06c93819', './createTaskProcessorWorker'], function (_, R, t, e) {
  'use strict'
  const A = {
    UNSIGNED_BYTE: R.WebGLConstants.UNSIGNED_BYTE,
    UNSIGNED_SHORT: R.WebGLConstants.UNSIGNED_SHORT,
    UNSIGNED_INT: R.WebGLConstants.UNSIGNED_INT,
    FLOAT: R.WebGLConstants.FLOAT,
    HALF_FLOAT: R.WebGLConstants.HALF_FLOAT_OES,
    UNSIGNED_INT_24_8: R.WebGLConstants.UNSIGNED_INT_24_8,
    UNSIGNED_SHORT_4_4_4_4: R.WebGLConstants.UNSIGNED_SHORT_4_4_4_4,
    UNSIGNED_SHORT_5_5_5_1: R.WebGLConstants.UNSIGNED_SHORT_5_5_5_1,
    UNSIGNED_SHORT_5_6_5: R.WebGLConstants.UNSIGNED_SHORT_5_6_5,
    toWebGLConstant: function (_, t) {
      switch (_) {
        case A.UNSIGNED_BYTE:
          return R.WebGLConstants.UNSIGNED_BYTE
        case A.UNSIGNED_SHORT:
          return R.WebGLConstants.UNSIGNED_SHORT
        case A.UNSIGNED_INT:
          return R.WebGLConstants.UNSIGNED_INT
        case A.FLOAT:
          return R.WebGLConstants.FLOAT
        case A.HALF_FLOAT:
          return t.webgl2 ? R.WebGLConstants.HALF_FLOAT : R.WebGLConstants.HALF_FLOAT_OES
        case A.UNSIGNED_INT_24_8:
          return R.WebGLConstants.UNSIGNED_INT_24_8
        case A.UNSIGNED_SHORT_4_4_4_4:
          return R.WebGLConstants.UNSIGNED_SHORT_4_4_4_4
        case A.UNSIGNED_SHORT_5_5_5_1:
          return R.WebGLConstants.UNSIGNED_SHORT_5_5_5_1
        case A.UNSIGNED_SHORT_5_6_5:
          return A.UNSIGNED_SHORT_5_6_5
      }
    },
    isPacked: function (_) {
      return _ === A.UNSIGNED_INT_24_8 || _ === A.UNSIGNED_SHORT_4_4_4_4 || _ === A.UNSIGNED_SHORT_5_5_5_1 || _ === A.UNSIGNED_SHORT_5_6_5
    },
    sizeInBytes: function (_) {
      switch (_) {
        case A.UNSIGNED_BYTE:
          return 1
        case A.UNSIGNED_SHORT:
        case A.UNSIGNED_SHORT_4_4_4_4:
        case A.UNSIGNED_SHORT_5_5_5_1:
        case A.UNSIGNED_SHORT_5_6_5:
        case A.HALF_FLOAT:
          return 2
        case A.UNSIGNED_INT:
        case A.FLOAT:
        case A.UNSIGNED_INT_24_8:
          return 4
      }
    },
    validate: function (_) {
      return (
        _ === A.UNSIGNED_BYTE ||
        _ === A.UNSIGNED_SHORT ||
        _ === A.UNSIGNED_INT ||
        _ === A.FLOAT ||
        _ === A.HALF_FLOAT ||
        _ === A.UNSIGNED_INT_24_8 ||
        _ === A.UNSIGNED_SHORT_4_4_4_4 ||
        _ === A.UNSIGNED_SHORT_5_5_5_1 ||
        _ === A.UNSIGNED_SHORT_5_6_5
      )
    }
  }
  var T = Object.freeze(A)
  const O = {
    DEPTH_COMPONENT: R.WebGLConstants.DEPTH_COMPONENT,
    DEPTH_STENCIL: R.WebGLConstants.DEPTH_STENCIL,
    ALPHA: R.WebGLConstants.ALPHA,
    RED: R.WebGLConstants.RED,
    RG: R.WebGLConstants.RG,
    RGB: R.WebGLConstants.RGB,
    RGBA: R.WebGLConstants.RGBA,
    LUMINANCE: R.WebGLConstants.LUMINANCE,
    LUMINANCE_ALPHA: R.WebGLConstants.LUMINANCE_ALPHA,
    RGB_DXT1: R.WebGLConstants.COMPRESSED_RGB_S3TC_DXT1_EXT,
    RGBA_DXT1: R.WebGLConstants.COMPRESSED_RGBA_S3TC_DXT1_EXT,
    RGBA_DXT3: R.WebGLConstants.COMPRESSED_RGBA_S3TC_DXT3_EXT,
    RGBA_DXT5: R.WebGLConstants.COMPRESSED_RGBA_S3TC_DXT5_EXT,
    RGB_PVRTC_4BPPV1: R.WebGLConstants.COMPRESSED_RGB_PVRTC_4BPPV1_IMG,
    RGB_PVRTC_2BPPV1: R.WebGLConstants.COMPRESSED_RGB_PVRTC_2BPPV1_IMG,
    RGBA_PVRTC_4BPPV1: R.WebGLConstants.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG,
    RGBA_PVRTC_2BPPV1: R.WebGLConstants.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG,
    RGBA_ASTC: R.WebGLConstants.COMPRESSED_RGBA_ASTC_4x4_WEBGL,
    RGB_ETC1: R.WebGLConstants.COMPRESSED_RGB_ETC1_WEBGL,
    RGB8_ETC2: R.WebGLConstants.COMPRESSED_RGB8_ETC2,
    RGBA8_ETC2_EAC: R.WebGLConstants.COMPRESSED_RGBA8_ETC2_EAC,
    RGBA_BC7: R.WebGLConstants.COMPRESSED_RGBA_BPTC_UNORM,
    componentsLength: function (_) {
      switch (_) {
        case O.RGB:
          return 3
        case O.RGBA:
          return 4
        case O.LUMINANCE_ALPHA:
        case O.RG:
          return 2
        case O.ALPHA:
        case O.RED:
        case O.LUMINANCE:
        default:
          return 1
      }
    },
    validate: function (_) {
      return (
        _ === O.DEPTH_COMPONENT ||
        _ === O.DEPTH_STENCIL ||
        _ === O.ALPHA ||
        _ === O.RED ||
        _ === O.RG ||
        _ === O.RGB ||
        _ === O.RGBA ||
        _ === O.LUMINANCE ||
        _ === O.LUMINANCE_ALPHA ||
        _ === O.RGB_DXT1 ||
        _ === O.RGBA_DXT1 ||
        _ === O.RGBA_DXT3 ||
        _ === O.RGBA_DXT5 ||
        _ === O.RGB_PVRTC_4BPPV1 ||
        _ === O.RGB_PVRTC_2BPPV1 ||
        _ === O.RGBA_PVRTC_4BPPV1 ||
        _ === O.RGBA_PVRTC_2BPPV1 ||
        _ === O.RGBA_ASTC ||
        _ === O.RGB_ETC1 ||
        _ === O.RGB8_ETC2 ||
        _ === O.RGBA8_ETC2_EAC ||
        _ === O.RGBA_BC7
      )
    },
    isColorFormat: function (_) {
      return _ === O.ALPHA || _ === O.RGB || _ === O.RGBA || _ === O.LUMINANCE || _ === O.LUMINANCE_ALPHA
    },
    isDepthFormat: function (_) {
      return _ === O.DEPTH_COMPONENT || _ === O.DEPTH_STENCIL
    },
    isCompressedFormat: function (_) {
      return (
        _ === O.RGB_DXT1 ||
        _ === O.RGBA_DXT1 ||
        _ === O.RGBA_DXT3 ||
        _ === O.RGBA_DXT5 ||
        _ === O.RGB_PVRTC_4BPPV1 ||
        _ === O.RGB_PVRTC_2BPPV1 ||
        _ === O.RGBA_PVRTC_4BPPV1 ||
        _ === O.RGBA_PVRTC_2BPPV1 ||
        _ === O.RGBA_ASTC ||
        _ === O.RGB_ETC1 ||
        _ === O.RGB8_ETC2 ||
        _ === O.RGBA8_ETC2_EAC ||
        _ === O.RGBA_BC7
      )
    },
    isDXTFormat: function (_) {
      return _ === O.RGB_DXT1 || _ === O.RGBA_DXT1 || _ === O.RGBA_DXT3 || _ === O.RGBA_DXT5
    },
    isPVRTCFormat: function (_) {
      return _ === O.RGB_PVRTC_4BPPV1 || _ === O.RGB_PVRTC_2BPPV1 || _ === O.RGBA_PVRTC_4BPPV1 || _ === O.RGBA_PVRTC_2BPPV1
    },
    isASTCFormat: function (_) {
      return _ === O.RGBA_ASTC
    },
    isETC1Format: function (_) {
      return _ === O.RGB_ETC1
    },
    isETC2Format: function (_) {
      return _ === O.RGB8_ETC2 || _ === O.RGBA8_ETC2_EAC
    },
    isBC7Format: function (_) {
      return _ === O.RGBA_BC7
    },
    compressedTextureSizeInBytes: function (_, R, t) {
      switch (_) {
        case O.RGB_DXT1:
        case O.RGBA_DXT1:
        case O.RGB_ETC1:
        case O.RGB8_ETC2:
          return Math.floor((R + 3) / 4) * Math.floor((t + 3) / 4) * 8
        case O.RGBA_DXT3:
        case O.RGBA_DXT5:
        case O.RGBA_ASTC:
        case O.RGBA8_ETC2_EAC:
          return Math.floor((R + 3) / 4) * Math.floor((t + 3) / 4) * 16
        case O.RGB_PVRTC_4BPPV1:
        case O.RGBA_PVRTC_4BPPV1:
          return Math.floor((Math.max(R, 8) * Math.max(t, 8) * 4 + 7) / 8)
        case O.RGB_PVRTC_2BPPV1:
        case O.RGBA_PVRTC_2BPPV1:
          return Math.floor((Math.max(R, 16) * Math.max(t, 8) * 2 + 7) / 8)
        case O.RGBA_BC7:
          return Math.ceil(R / 4) * Math.ceil(t / 4) * 16
        default:
          return 0
      }
    },
    textureSizeInBytes: function (_, R, t, e) {
      let A = O.componentsLength(_)
      return T.isPacked(R) && (A = 1), A * T.sizeInBytes(R) * t * e
    },
    alignmentInBytes: function (_, R, t) {
      const e = O.textureSizeInBytes(_, R, t, 1) % 4
      return 0 === e ? 4 : 2 === e ? 2 : 1
    },
    createTypedArray: function (_, R, t, e) {
      let A
      const n = T.sizeInBytes(R)
      A =
        n === Uint8Array.BYTES_PER_ELEMENT
          ? Uint8Array
          : n === Uint16Array.BYTES_PER_ELEMENT
          ? Uint16Array
          : n === Float32Array.BYTES_PER_ELEMENT && R === T.FLOAT
          ? Float32Array
          : Uint32Array
      return new A(O.componentsLength(_) * t * e)
    },
    flipY: function (_, R, t, e, A) {
      if (1 === A) return _
      const T = O.createTypedArray(R, t, e, A),
        n = O.componentsLength(R),
        B = e * n
      for (let R = 0; R < A; ++R) {
        const t = R * e * n,
          O = (A - R - 1) * e * n
        for (let R = 0; R < B; ++R) T[O + R] = _[t + R]
      }
      return T
    },
    toInternalFormat: function (_, t, e) {
      if (!e.webgl2) return _
      if (_ === O.DEPTH_STENCIL) return R.WebGLConstants.DEPTH24_STENCIL8
      if (_ === O.DEPTH_COMPONENT) {
        if (t === T.UNSIGNED_SHORT) return R.WebGLConstants.DEPTH_COMPONENT16
        if (t === T.UNSIGNED_INT) return R.WebGLConstants.DEPTH_COMPONENT24
      }
      if (t === T.FLOAT)
        switch (_) {
          case O.RGBA:
            return R.WebGLConstants.RGBA32F
          case O.RGB:
            return R.WebGLConstants.RGB32F
          case O.RG:
            return R.WebGLConstants.RG32F
          case O.RED:
            return R.WebGLConstants.R32F
        }
      if (t === T.HALF_FLOAT)
        switch (_) {
          case O.RGBA:
            return R.WebGLConstants.RGBA16F
          case O.RGB:
            return R.WebGLConstants.RGB16F
          case O.RG:
            return R.WebGLConstants.RG16F
          case O.RED:
            return R.WebGLConstants.R16F
        }
      return _
    }
  }
  var n = Object.freeze(O)
  var B = Object.freeze({
    VK_FORMAT_UNDEFINED: 0,
    VK_FORMAT_R4G4_UNORM_PACK8: 1,
    VK_FORMAT_R4G4B4A4_UNORM_PACK16: 2,
    VK_FORMAT_B4G4R4A4_UNORM_PACK16: 3,
    VK_FORMAT_R5G6B5_UNORM_PACK16: 4,
    VK_FORMAT_B5G6R5_UNORM_PACK16: 5,
    VK_FORMAT_R5G5B5A1_UNORM_PACK16: 6,
    VK_FORMAT_B5G5R5A1_UNORM_PACK16: 7,
    VK_FORMAT_A1R5G5B5_UNORM_PACK16: 8,
    VK_FORMAT_R8_UNORM: 9,
    VK_FORMAT_R8_SNORM: 10,
    VK_FORMAT_R8_USCALED: 11,
    VK_FORMAT_R8_SSCALED: 12,
    VK_FORMAT_R8_UINT: 13,
    VK_FORMAT_R8_SINT: 14,
    VK_FORMAT_R8_SRGB: 15,
    VK_FORMAT_R8G8_UNORM: 16,
    VK_FORMAT_R8G8_SNORM: 17,
    VK_FORMAT_R8G8_USCALED: 18,
    VK_FORMAT_R8G8_SSCALED: 19,
    VK_FORMAT_R8G8_UINT: 20,
    VK_FORMAT_R8G8_SINT: 21,
    VK_FORMAT_R8G8_SRGB: 22,
    VK_FORMAT_R8G8B8_UNORM: 23,
    VK_FORMAT_R8G8B8_SNORM: 24,
    VK_FORMAT_R8G8B8_USCALED: 25,
    VK_FORMAT_R8G8B8_SSCALED: 26,
    VK_FORMAT_R8G8B8_UINT: 27,
    VK_FORMAT_R8G8B8_SINT: 28,
    VK_FORMAT_R8G8B8_SRGB: 29,
    VK_FORMAT_B8G8R8_UNORM: 30,
    VK_FORMAT_B8G8R8_SNORM: 31,
    VK_FORMAT_B8G8R8_USCALED: 32,
    VK_FORMAT_B8G8R8_SSCALED: 33,
    VK_FORMAT_B8G8R8_UINT: 34,
    VK_FORMAT_B8G8R8_SINT: 35,
    VK_FORMAT_B8G8R8_SRGB: 36,
    VK_FORMAT_R8G8B8A8_UNORM: 37,
    VK_FORMAT_R8G8B8A8_SNORM: 38,
    VK_FORMAT_R8G8B8A8_USCALED: 39,
    VK_FORMAT_R8G8B8A8_SSCALED: 40,
    VK_FORMAT_R8G8B8A8_UINT: 41,
    VK_FORMAT_R8G8B8A8_SINT: 42,
    VK_FORMAT_R8G8B8A8_SRGB: 43,
    VK_FORMAT_B8G8R8A8_UNORM: 44,
    VK_FORMAT_B8G8R8A8_SNORM: 45,
    VK_FORMAT_B8G8R8A8_USCALED: 46,
    VK_FORMAT_B8G8R8A8_SSCALED: 47,
    VK_FORMAT_B8G8R8A8_UINT: 48,
    VK_FORMAT_B8G8R8A8_SINT: 49,
    VK_FORMAT_B8G8R8A8_SRGB: 50,
    VK_FORMAT_A8B8G8R8_UNORM_PACK32: 51,
    VK_FORMAT_A8B8G8R8_SNORM_PACK32: 52,
    VK_FORMAT_A8B8G8R8_USCALED_PACK32: 53,
    VK_FORMAT_A8B8G8R8_SSCALED_PACK32: 54,
    VK_FORMAT_A8B8G8R8_UINT_PACK32: 55,
    VK_FORMAT_A8B8G8R8_SINT_PACK32: 56,
    VK_FORMAT_A8B8G8R8_SRGB_PACK32: 57,
    VK_FORMAT_A2R10G10B10_UNORM_PACK32: 58,
    VK_FORMAT_A2R10G10B10_SNORM_PACK32: 59,
    VK_FORMAT_A2R10G10B10_USCALED_PACK32: 60,
    VK_FORMAT_A2R10G10B10_SSCALED_PACK32: 61,
    VK_FORMAT_A2R10G10B10_UINT_PACK32: 62,
    VK_FORMAT_A2R10G10B10_SINT_PACK32: 63,
    VK_FORMAT_A2B10G10R10_UNORM_PACK32: 64,
    VK_FORMAT_A2B10G10R10_SNORM_PACK32: 65,
    VK_FORMAT_A2B10G10R10_USCALED_PACK32: 66,
    VK_FORMAT_A2B10G10R10_SSCALED_PACK32: 67,
    VK_FORMAT_A2B10G10R10_UINT_PACK32: 68,
    VK_FORMAT_A2B10G10R10_SINT_PACK32: 69,
    VK_FORMAT_R16_UNORM: 70,
    VK_FORMAT_R16_SNORM: 71,
    VK_FORMAT_R16_USCALED: 72,
    VK_FORMAT_R16_SSCALED: 73,
    VK_FORMAT_R16_UINT: 74,
    VK_FORMAT_R16_SINT: 75,
    VK_FORMAT_R16_SFLOAT: 76,
    VK_FORMAT_R16G16_UNORM: 77,
    VK_FORMAT_R16G16_SNORM: 78,
    VK_FORMAT_R16G16_USCALED: 79,
    VK_FORMAT_R16G16_SSCALED: 80,
    VK_FORMAT_R16G16_UINT: 81,
    VK_FORMAT_R16G16_SINT: 82,
    VK_FORMAT_R16G16_SFLOAT: 83,
    VK_FORMAT_R16G16B16_UNORM: 84,
    VK_FORMAT_R16G16B16_SNORM: 85,
    VK_FORMAT_R16G16B16_USCALED: 86,
    VK_FORMAT_R16G16B16_SSCALED: 87,
    VK_FORMAT_R16G16B16_UINT: 88,
    VK_FORMAT_R16G16B16_SINT: 89,
    VK_FORMAT_R16G16B16_SFLOAT: 90,
    VK_FORMAT_R16G16B16A16_UNORM: 91,
    VK_FORMAT_R16G16B16A16_SNORM: 92,
    VK_FORMAT_R16G16B16A16_USCALED: 93,
    VK_FORMAT_R16G16B16A16_SSCALED: 94,
    VK_FORMAT_R16G16B16A16_UINT: 95,
    VK_FORMAT_R16G16B16A16_SINT: 96,
    VK_FORMAT_R16G16B16A16_SFLOAT: 97,
    VK_FORMAT_R32_UINT: 98,
    VK_FORMAT_R32_SINT: 99,
    VK_FORMAT_R32_SFLOAT: 100,
    VK_FORMAT_R32G32_UINT: 101,
    VK_FORMAT_R32G32_SINT: 102,
    VK_FORMAT_R32G32_SFLOAT: 103,
    VK_FORMAT_R32G32B32_UINT: 104,
    VK_FORMAT_R32G32B32_SINT: 105,
    VK_FORMAT_R32G32B32_SFLOAT: 106,
    VK_FORMAT_R32G32B32A32_UINT: 107,
    VK_FORMAT_R32G32B32A32_SINT: 108,
    VK_FORMAT_R32G32B32A32_SFLOAT: 109,
    VK_FORMAT_R64_UINT: 110,
    VK_FORMAT_R64_SINT: 111,
    VK_FORMAT_R64_SFLOAT: 112,
    VK_FORMAT_R64G64_UINT: 113,
    VK_FORMAT_R64G64_SINT: 114,
    VK_FORMAT_R64G64_SFLOAT: 115,
    VK_FORMAT_R64G64B64_UINT: 116,
    VK_FORMAT_R64G64B64_SINT: 117,
    VK_FORMAT_R64G64B64_SFLOAT: 118,
    VK_FORMAT_R64G64B64A64_UINT: 119,
    VK_FORMAT_R64G64B64A64_SINT: 120,
    VK_FORMAT_R64G64B64A64_SFLOAT: 121,
    VK_FORMAT_B10G11R11_UFLOAT_PACK32: 122,
    VK_FORMAT_E5B9G9R9_UFLOAT_PACK32: 123,
    VK_FORMAT_D16_UNORM: 124,
    VK_FORMAT_X8_D24_UNORM_PACK32: 125,
    VK_FORMAT_D32_SFLOAT: 126,
    VK_FORMAT_S8_UINT: 127,
    VK_FORMAT_D16_UNORM_S8_UINT: 128,
    VK_FORMAT_D24_UNORM_S8_UINT: 129,
    VK_FORMAT_D32_SFLOAT_S8_UINT: 130,
    VK_FORMAT_BC1_RGB_UNORM_BLOCK: 131,
    VK_FORMAT_BC1_RGB_SRGB_BLOCK: 132,
    VK_FORMAT_BC1_RGBA_UNORM_BLOCK: 133,
    VK_FORMAT_BC1_RGBA_SRGB_BLOCK: 134,
    VK_FORMAT_BC2_UNORM_BLOCK: 135,
    VK_FORMAT_BC2_SRGB_BLOCK: 136,
    VK_FORMAT_BC3_UNORM_BLOCK: 137,
    VK_FORMAT_BC3_SRGB_BLOCK: 138,
    VK_FORMAT_BC4_UNORM_BLOCK: 139,
    VK_FORMAT_BC4_SNORM_BLOCK: 140,
    VK_FORMAT_BC5_UNORM_BLOCK: 141,
    VK_FORMAT_BC5_SNORM_BLOCK: 142,
    VK_FORMAT_BC6H_UFLOAT_BLOCK: 143,
    VK_FORMAT_BC6H_SFLOAT_BLOCK: 144,
    VK_FORMAT_BC7_UNORM_BLOCK: 145,
    VK_FORMAT_BC7_SRGB_BLOCK: 146,
    VK_FORMAT_ETC2_R8G8B8_UNORM_BLOCK: 147,
    VK_FORMAT_ETC2_R8G8B8_SRGB_BLOCK: 148,
    VK_FORMAT_ETC2_R8G8B8A1_UNORM_BLOCK: 149,
    VK_FORMAT_ETC2_R8G8B8A1_SRGB_BLOCK: 150,
    VK_FORMAT_ETC2_R8G8B8A8_UNORM_BLOCK: 151,
    VK_FORMAT_ETC2_R8G8B8A8_SRGB_BLOCK: 152,
    VK_FORMAT_EAC_R11_UNORM_BLOCK: 153,
    VK_FORMAT_EAC_R11_SNORM_BLOCK: 154,
    VK_FORMAT_EAC_R11G11_UNORM_BLOCK: 155,
    VK_FORMAT_EAC_R11G11_SNORM_BLOCK: 156,
    VK_FORMAT_ASTC_4x4_UNORM_BLOCK: 157,
    VK_FORMAT_ASTC_4x4_SRGB_BLOCK: 158,
    VK_FORMAT_ASTC_5x4_UNORM_BLOCK: 159,
    VK_FORMAT_ASTC_5x4_SRGB_BLOCK: 160,
    VK_FORMAT_ASTC_5x5_UNORM_BLOCK: 161,
    VK_FORMAT_ASTC_5x5_SRGB_BLOCK: 162,
    VK_FORMAT_ASTC_6x5_UNORM_BLOCK: 163,
    VK_FORMAT_ASTC_6x5_SRGB_BLOCK: 164,
    VK_FORMAT_ASTC_6x6_UNORM_BLOCK: 165,
    VK_FORMAT_ASTC_6x6_SRGB_BLOCK: 166,
    VK_FORMAT_ASTC_8x5_UNORM_BLOCK: 167,
    VK_FORMAT_ASTC_8x5_SRGB_BLOCK: 168,
    VK_FORMAT_ASTC_8x6_UNORM_BLOCK: 169,
    VK_FORMAT_ASTC_8x6_SRGB_BLOCK: 170,
    VK_FORMAT_ASTC_8x8_UNORM_BLOCK: 171,
    VK_FORMAT_ASTC_8x8_SRGB_BLOCK: 172,
    VK_FORMAT_ASTC_10x5_UNORM_BLOCK: 173,
    VK_FORMAT_ASTC_10x5_SRGB_BLOCK: 174,
    VK_FORMAT_ASTC_10x6_UNORM_BLOCK: 175,
    VK_FORMAT_ASTC_10x6_SRGB_BLOCK: 176,
    VK_FORMAT_ASTC_10x8_UNORM_BLOCK: 177,
    VK_FORMAT_ASTC_10x8_SRGB_BLOCK: 178,
    VK_FORMAT_ASTC_10x10_UNORM_BLOCK: 179,
    VK_FORMAT_ASTC_10x10_SRGB_BLOCK: 180,
    VK_FORMAT_ASTC_12x10_UNORM_BLOCK: 181,
    VK_FORMAT_ASTC_12x10_SRGB_BLOCK: 182,
    VK_FORMAT_ASTC_12x12_UNORM_BLOCK: 183,
    VK_FORMAT_ASTC_12x12_SRGB_BLOCK: 184,
    VK_FORMAT_G8B8G8R8_422_UNORM: 1000156e3,
    VK_FORMAT_B8G8R8G8_422_UNORM: 1000156001,
    VK_FORMAT_G8_B8_R8_3PLANE_420_UNORM: 1000156002,
    VK_FORMAT_G8_B8R8_2PLANE_420_UNORM: 1000156003,
    VK_FORMAT_G8_B8_R8_3PLANE_422_UNORM: 1000156004,
    VK_FORMAT_G8_B8R8_2PLANE_422_UNORM: 1000156005,
    VK_FORMAT_G8_B8_R8_3PLANE_444_UNORM: 1000156006,
    VK_FORMAT_R10X6_UNORM_PACK16: 1000156007,
    VK_FORMAT_R10X6G10X6_UNORM_2PACK16: 1000156008,
    VK_FORMAT_R10X6G10X6B10X6A10X6_UNORM_4PACK16: 1000156009,
    VK_FORMAT_G10X6B10X6G10X6R10X6_422_UNORM_4PACK16: 1000156010,
    VK_FORMAT_B10X6G10X6R10X6G10X6_422_UNORM_4PACK16: 1000156011,
    VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_420_UNORM_3PACK16: 1000156012,
    VK_FORMAT_G10X6_B10X6R10X6_2PLANE_420_UNORM_3PACK16: 1000156013,
    VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_422_UNORM_3PACK16: 1000156014,
    VK_FORMAT_G10X6_B10X6R10X6_2PLANE_422_UNORM_3PACK16: 1000156015,
    VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_444_UNORM_3PACK16: 1000156016,
    VK_FORMAT_R12X4_UNORM_PACK16: 1000156017,
    VK_FORMAT_R12X4G12X4_UNORM_2PACK16: 1000156018,
    VK_FORMAT_R12X4G12X4B12X4A12X4_UNORM_4PACK16: 1000156019,
    VK_FORMAT_G12X4B12X4G12X4R12X4_422_UNORM_4PACK16: 1000156020,
    VK_FORMAT_B12X4G12X4R12X4G12X4_422_UNORM_4PACK16: 1000156021,
    VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_420_UNORM_3PACK16: 1000156022,
    VK_FORMAT_G12X4_B12X4R12X4_2PLANE_420_UNORM_3PACK16: 1000156023,
    VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_422_UNORM_3PACK16: 1000156024,
    VK_FORMAT_G12X4_B12X4R12X4_2PLANE_422_UNORM_3PACK16: 1000156025,
    VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_444_UNORM_3PACK16: 1000156026,
    VK_FORMAT_G16B16G16R16_422_UNORM: 1000156027,
    VK_FORMAT_B16G16R16G16_422_UNORM: 1000156028,
    VK_FORMAT_G16_B16_R16_3PLANE_420_UNORM: 1000156029,
    VK_FORMAT_G16_B16R16_2PLANE_420_UNORM: 1000156030,
    VK_FORMAT_G16_B16_R16_3PLANE_422_UNORM: 1000156031,
    VK_FORMAT_G16_B16R16_2PLANE_422_UNORM: 1000156032,
    VK_FORMAT_G16_B16_R16_3PLANE_444_UNORM: 1000156033,
    VK_FORMAT_PVRTC1_2BPP_UNORM_BLOCK_IMG: 1000054e3,
    VK_FORMAT_PVRTC1_4BPP_UNORM_BLOCK_IMG: 1000054001,
    VK_FORMAT_PVRTC2_2BPP_UNORM_BLOCK_IMG: 1000054002,
    VK_FORMAT_PVRTC2_4BPP_UNORM_BLOCK_IMG: 1000054003,
    VK_FORMAT_PVRTC1_2BPP_SRGB_BLOCK_IMG: 1000054004,
    VK_FORMAT_PVRTC1_4BPP_SRGB_BLOCK_IMG: 1000054005,
    VK_FORMAT_PVRTC2_2BPP_SRGB_BLOCK_IMG: 1000054006,
    VK_FORMAT_PVRTC2_4BPP_SRGB_BLOCK_IMG: 1000054007,
    VK_FORMAT_ASTC_4x4_SFLOAT_BLOCK_EXT: 1000066e3,
    VK_FORMAT_ASTC_5x4_SFLOAT_BLOCK_EXT: 1000066001,
    VK_FORMAT_ASTC_5x5_SFLOAT_BLOCK_EXT: 1000066002,
    VK_FORMAT_ASTC_6x5_SFLOAT_BLOCK_EXT: 1000066003,
    VK_FORMAT_ASTC_6x6_SFLOAT_BLOCK_EXT: 1000066004,
    VK_FORMAT_ASTC_8x5_SFLOAT_BLOCK_EXT: 1000066005,
    VK_FORMAT_ASTC_8x6_SFLOAT_BLOCK_EXT: 1000066006,
    VK_FORMAT_ASTC_8x8_SFLOAT_BLOCK_EXT: 1000066007,
    VK_FORMAT_ASTC_10x5_SFLOAT_BLOCK_EXT: 1000066008,
    VK_FORMAT_ASTC_10x6_SFLOAT_BLOCK_EXT: 1000066009,
    VK_FORMAT_ASTC_10x8_SFLOAT_BLOCK_EXT: 1000066010,
    VK_FORMAT_ASTC_10x10_SFLOAT_BLOCK_EXT: 1000066011,
    VK_FORMAT_ASTC_12x10_SFLOAT_BLOCK_EXT: 1000066012,
    VK_FORMAT_ASTC_12x12_SFLOAT_BLOCK_EXT: 1000066013,
    VK_FORMAT_G8B8G8R8_422_UNORM_KHR: 1000156e3,
    VK_FORMAT_B8G8R8G8_422_UNORM_KHR: 1000156001,
    VK_FORMAT_G8_B8_R8_3PLANE_420_UNORM_KHR: 1000156002,
    VK_FORMAT_G8_B8R8_2PLANE_420_UNORM_KHR: 1000156003,
    VK_FORMAT_G8_B8_R8_3PLANE_422_UNORM_KHR: 1000156004,
    VK_FORMAT_G8_B8R8_2PLANE_422_UNORM_KHR: 1000156005,
    VK_FORMAT_G8_B8_R8_3PLANE_444_UNORM_KHR: 1000156006,
    VK_FORMAT_R10X6_UNORM_PACK16_KHR: 1000156007,
    VK_FORMAT_R10X6G10X6_UNORM_2PACK16_KHR: 1000156008,
    VK_FORMAT_R10X6G10X6B10X6A10X6_UNORM_4PACK16_KHR: 1000156009,
    VK_FORMAT_G10X6B10X6G10X6R10X6_422_UNORM_4PACK16_KHR: 1000156010,
    VK_FORMAT_B10X6G10X6R10X6G10X6_422_UNORM_4PACK16_KHR: 1000156011,
    VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_420_UNORM_3PACK16_KHR: 1000156012,
    VK_FORMAT_G10X6_B10X6R10X6_2PLANE_420_UNORM_3PACK16_KHR: 1000156013,
    VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_422_UNORM_3PACK16_KHR: 1000156014,
    VK_FORMAT_G10X6_B10X6R10X6_2PLANE_422_UNORM_3PACK16_KHR: 1000156015,
    VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_444_UNORM_3PACK16_KHR: 1000156016,
    VK_FORMAT_R12X4_UNORM_PACK16_KHR: 1000156017,
    VK_FORMAT_R12X4G12X4_UNORM_2PACK16_KHR: 1000156018,
    VK_FORMAT_R12X4G12X4B12X4A12X4_UNORM_4PACK16_KHR: 1000156019,
    VK_FORMAT_G12X4B12X4G12X4R12X4_422_UNORM_4PACK16_KHR: 1000156020,
    VK_FORMAT_B12X4G12X4R12X4G12X4_422_UNORM_4PACK16_KHR: 1000156021,
    VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_420_UNORM_3PACK16_KHR: 1000156022,
    VK_FORMAT_G12X4_B12X4R12X4_2PLANE_420_UNORM_3PACK16_KHR: 1000156023,
    VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_422_UNORM_3PACK16_KHR: 1000156024,
    VK_FORMAT_G12X4_B12X4R12X4_2PLANE_422_UNORM_3PACK16_KHR: 1000156025,
    VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_444_UNORM_3PACK16_KHR: 1000156026,
    VK_FORMAT_G16B16G16R16_422_UNORM_KHR: 1000156027,
    VK_FORMAT_B16G16R16G16_422_UNORM_KHR: 1000156028,
    VK_FORMAT_G16_B16_R16_3PLANE_420_UNORM_KHR: 1000156029,
    VK_FORMAT_G16_B16R16_2PLANE_420_UNORM_KHR: 1000156030,
    VK_FORMAT_G16_B16_R16_3PLANE_422_UNORM_KHR: 1000156031,
    VK_FORMAT_G16_B16R16_2PLANE_422_UNORM_KHR: 1000156032,
    VK_FORMAT_G16_B16_R16_3PLANE_444_UNORM_KHR: 1000156033
  })
  class G {
    constructor() {
      ;(this.vkFormat = 0),
        (this.typeSize = 1),
        (this.pixelWidth = 0),
        (this.pixelHeight = 0),
        (this.pixelDepth = 0),
        (this.layerCount = 0),
        (this.faceCount = 1),
        (this.supercompressionScheme = 0),
        (this.levels = []),
        (this.dataFormatDescriptor = [
          {
            vendorId: 0,
            descriptorType: 0,
            descriptorBlockSize: 0,
            versionNumber: 2,
            colorModel: 0,
            colorPrimaries: 1,
            transferFunction: 2,
            flags: 0,
            texelBlockDimension: [0, 0, 0, 0],
            bytesPlane: [0, 0, 0, 0, 0, 0, 0, 0],
            samples: []
          }
        ]),
        (this.keyValue = {}),
        (this.globalData = null)
    }
  }
  class M {
    constructor(_, R, t, e) {
      ;(this._dataView = void 0),
        (this._littleEndian = void 0),
        (this._offset = void 0),
        (this._dataView = new DataView(_.buffer, _.byteOffset + R, t)),
        (this._littleEndian = e),
        (this._offset = 0)
    }
    _nextUint8() {
      const _ = this._dataView.getUint8(this._offset)
      return (this._offset += 1), _
    }
    _nextUint16() {
      const _ = this._dataView.getUint16(this._offset, this._littleEndian)
      return (this._offset += 2), _
    }
    _nextUint32() {
      const _ = this._dataView.getUint32(this._offset, this._littleEndian)
      return (this._offset += 4), _
    }
    _nextUint64() {
      const _ = this._dataView.getUint32(this._offset, this._littleEndian) + 2 ** 32 * this._dataView.getUint32(this._offset + 4, this._littleEndian)
      return (this._offset += 8), _
    }
    _nextInt32() {
      const _ = this._dataView.getInt32(this._offset, this._littleEndian)
      return (this._offset += 4), _
    }
    _skip(_) {
      return (this._offset += _), this
    }
    _scan(_, R = 0) {
      const t = this._offset
      let e = 0
      for (; this._dataView.getUint8(this._offset) !== R && e < _; ) e++, this._offset++
      return e < _ && this._offset++, new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + t, e)
    }
  }
  const K = [171, 75, 84, 88, 32, 50, 48, 187, 13, 10, 26, 10]
  function C(_) {
    return 'undefined' != typeof TextDecoder ? new TextDecoder().decode(_) : Buffer.from(_).toString('utf8')
  }
  const s = ['positiveX', 'negativeX', 'positiveY', 'negativeY', 'positiveZ', 'negativeZ']
  let r
  function F(R, e) {
    const A = R.ktx2Buffer,
      O = R.supportedTargetFormats
    let F
    try {
      F = (function (_) {
        const R = new Uint8Array(_.buffer, _.byteOffset, K.length)
        if (
          R[0] !== K[0] ||
          R[1] !== K[1] ||
          R[2] !== K[2] ||
          R[3] !== K[3] ||
          R[4] !== K[4] ||
          R[5] !== K[5] ||
          R[6] !== K[6] ||
          R[7] !== K[7] ||
          R[8] !== K[8] ||
          R[9] !== K[9] ||
          R[10] !== K[10] ||
          R[11] !== K[11]
        )
          throw new Error('Missing KTX 2.0 identifier.')
        const t = new G(),
          e = 17 * Uint32Array.BYTES_PER_ELEMENT,
          A = new M(_, K.length, e, !0)
        ;(t.vkFormat = A._nextUint32()),
          (t.typeSize = A._nextUint32()),
          (t.pixelWidth = A._nextUint32()),
          (t.pixelHeight = A._nextUint32()),
          (t.pixelDepth = A._nextUint32()),
          (t.layerCount = A._nextUint32()),
          (t.faceCount = A._nextUint32())
        const T = A._nextUint32()
        t.supercompressionScheme = A._nextUint32()
        const O = A._nextUint32(),
          n = A._nextUint32(),
          B = A._nextUint32(),
          s = A._nextUint32(),
          r = A._nextUint64(),
          F = A._nextUint64(),
          N = new M(_, K.length + e, 3 * T * 8, !0)
        for (let R = 0; R < T; R++)
          t.levels.push({
            levelData: new Uint8Array(_.buffer, _.byteOffset + N._nextUint64(), N._nextUint64()),
            uncompressedByteLength: N._nextUint64()
          })
        const i = new M(_, O, n, !0),
          V = {
            vendorId: i._skip(4)._nextUint16(),
            descriptorType: i._nextUint16(),
            versionNumber: i._nextUint16(),
            descriptorBlockSize: i._nextUint16(),
            colorModel: i._nextUint8(),
            colorPrimaries: i._nextUint8(),
            transferFunction: i._nextUint8(),
            flags: i._nextUint8(),
            texelBlockDimension: [i._nextUint8(), i._nextUint8(), i._nextUint8(), i._nextUint8()],
            bytesPlane: [
              i._nextUint8(),
              i._nextUint8(),
              i._nextUint8(),
              i._nextUint8(),
              i._nextUint8(),
              i._nextUint8(),
              i._nextUint8(),
              i._nextUint8()
            ],
            samples: []
          },
          o = (V.descriptorBlockSize / 4 - 6) / 4
        for (let _ = 0; _ < o; _++) {
          const R = {
            bitOffset: i._nextUint16(),
            bitLength: i._nextUint8(),
            channelType: i._nextUint8(),
            samplePosition: [i._nextUint8(), i._nextUint8(), i._nextUint8(), i._nextUint8()],
            sampleLower: -1 / 0,
            sampleUpper: 1 / 0
          }
          64 & R.channelType
            ? ((R.sampleLower = i._nextInt32()), (R.sampleUpper = i._nextInt32()))
            : ((R.sampleLower = i._nextUint32()), (R.sampleUpper = i._nextUint32())),
            (V.samples[_] = R)
        }
        ;(t.dataFormatDescriptor.length = 0), t.dataFormatDescriptor.push(V)
        const a = new M(_, B, s, !0)
        for (; a._offset < s; ) {
          const _ = a._nextUint32(),
            R = a._scan(_),
            e = C(R),
            A = a._scan(_ - R.byteLength)
          ;(t.keyValue[e] = e.match(/^ktx/i) ? C(A) : A), a._offset % 4 && a._skip(4 - (a._offset % 4))
        }
        if (F <= 0) return t
        const S = new M(_, r, F, !0),
          U = S._nextUint16(),
          E = S._nextUint16(),
          L = S._nextUint32(),
          P = S._nextUint32(),
          c = S._nextUint32(),
          f = S._nextUint32(),
          l = []
        for (let _ = 0; _ < T; _++)
          l.push({
            imageFlags: S._nextUint32(),
            rgbSliceByteOffset: S._nextUint32(),
            rgbSliceByteLength: S._nextUint32(),
            alphaSliceByteOffset: S._nextUint32(),
            alphaSliceByteLength: S._nextUint32()
          })
        const X = r + S._offset,
          u = X + L,
          D = u + P,
          I = D + c,
          x = new Uint8Array(_.buffer, _.byteOffset + X, L),
          h = new Uint8Array(_.buffer, _.byteOffset + u, P),
          d = new Uint8Array(_.buffer, _.byteOffset + D, c),
          H = new Uint8Array(_.buffer, _.byteOffset + I, f)
        return (
          (t.globalData = { endpointCount: U, selectorCount: E, imageDescs: l, endpointsData: x, selectorsData: h, tablesData: d, extendedData: H }),
          t
        )
      })(A)
    } catch (_) {
      throw new t.RuntimeError('Invalid KTX2 file.')
    }
    if (0 !== F.layerCount) throw new t.RuntimeError('KTX2 texture arrays are not supported.')
    if (0 !== F.pixelDepth) throw new t.RuntimeError('KTX2 3D textures are unsupported.')
    const N = F.dataFormatDescriptor[0],
      i = new Array(F.levelCount)
    return (
      0 !== F.vkFormat || (163 !== N.colorModel && 166 !== N.colorModel)
        ? (e.push(A.buffer),
          (function (R, t) {
            const e = R.vkFormat === B.VK_FORMAT_R8G8B8_SRGB ? n.RGB : n.RGBA
            let A
            R.vkFormat === B.VK_FORMAT_R8G8B8A8_UNORM
              ? (A = T.UNSIGNED_BYTE)
              : R.vkFormat === B.VK_FORMAT_R16G16B16A16_SFLOAT
              ? (A = T.HALF_FLOAT)
              : R.vkFormat === B.VK_FORMAT_R32G32B32A32_SFLOAT && (A = T.FLOAT)
            for (let O = 0; O < R.levels.length; ++O) {
              const B = {}
              t[O] = B
              const G = R.levels[O].levelData,
                M = R.pixelWidth >> O,
                K = R.pixelHeight >> O,
                C = M * K * n.componentsLength(e)
              for (let t = 0; t < R.faceCount; ++t) {
                const O = G.byteOffset + C * R.typeSize * t
                let n
                ;(n =
                  _.defined(A) && 1 !== T.sizeInBytes(A)
                    ? 2 === T.sizeInBytes(A)
                      ? new Uint16Array(G.buffer, O, C)
                      : new Float32Array(G.buffer, O, C)
                    : new Uint8Array(G.buffer, O, C)),
                  (B[s[t]] = { internalFormat: e, datatype: A, width: M, height: K, levelBuffer: n })
              }
            }
          })(F, i))
        : (function (R, e, A, T, O, B) {
            const G = new T.KTX2File(R)
            let M = G.getWidth(),
              K = G.getHeight()
            const C = G.getLevels(),
              r = G.getHasAlpha()
            if (!(M > 0 && K > 0 && C > 0)) throw (G.close(), G.delete(), new t.RuntimeError('Invalid KTX2 file'))
            let F, N
            const i = e.dataFormatDescriptor[0],
              V = T.transcoder_texture_format
            if (163 === i.colorModel)
              if (A.etc) (F = r ? n.RGBA8_ETC2_EAC : n.RGB8_ETC2), (N = r ? V.cTFETC2_RGBA : V.cTFETC1_RGB)
              else if (A.etc1 && !r) (F = n.RGB_ETC1), (N = V.cTFETC1_RGB)
              else if (A.s3tc) (F = r ? n.RGBA_DXT5 : n.RGB_DXT1), (N = r ? V.cTFBC3_RGBA : V.cTFBC1_RGB)
              else if (A.pvrtc) (F = r ? n.RGBA_PVRTC_4BPPV1 : n.RGB_PVRTC_4BPPV1), (N = r ? V.cTFPVRTC1_4_RGBA : V.cTFPVRTC1_4_RGB)
              else if (A.astc) (F = n.RGBA_ASTC), (N = V.cTFASTC_4x4_RGBA)
              else {
                if (!A.bc7) throw new t.RuntimeError('No transcoding format target available for ETC1S compressed ktx2.')
                ;(F = n.RGBA_BC7), (N = V.cTFBC7_RGBA)
              }
            else if (166 === i.colorModel)
              if (A.astc) (F = n.RGBA_ASTC), (N = V.cTFASTC_4x4_RGBA)
              else if (A.bc7) (F = n.RGBA_BC7), (N = V.cTFBC7_RGBA)
              else if (A.s3tc) (F = r ? n.RGBA_DXT5 : n.RGB_DXT1), (N = r ? V.cTFBC3_RGBA : V.cTFBC1_RGB)
              else if (A.etc) (F = r ? n.RGBA8_ETC2_EAC : n.RGB8_ETC2), (N = r ? V.cTFETC2_RGBA : V.cTFETC1_RGB)
              else if (A.etc1 && !r) (F = n.RGB_ETC1), (N = V.cTFETC1_RGB)
              else {
                if (!A.pvrtc) throw new t.RuntimeError('No transcoding format target available for UASTC compressed ktx2.')
                ;(F = r ? n.RGBA_PVRTC_4BPPV1 : n.RGB_PVRTC_4BPPV1), (N = r ? V.cTFPVRTC1_4_RGBA : V.cTFPVRTC1_4_RGB)
              }
            if (!G.startTranscoding()) throw (G.close(), G.delete(), new t.RuntimeError('startTranscoding() failed'))
            for (let R = 0; R < e.levels.length; ++R) {
              const A = {}
              ;(B[R] = A), (M = e.pixelWidth >> R), (K = e.pixelHeight >> R)
              const T = G.getImageTranscodedSizeInBytes(R, 0, 0, N.value),
                n = new Uint8Array(T),
                C = G.transcodeImage(n, R, 0, 0, N.value, 0, -1, -1)
              if (!_.defined(C)) throw new t.RuntimeError('transcodeImage() failed.')
              O.push(n.buffer), (A[s[0]] = { internalFormat: F, width: M, height: K, levelBuffer: n })
            }
            G.close(), G.delete()
          })(A, F, O, r, e, i),
      i
    )
  }
  function N(_) {
    ;(r = _), r.initializeBasis(), (self.onmessage = e(F)), self.postMessage(!0)
  }
  return function (R) {
    const t = R.data.webAssemblyConfig
    if (_.defined(t))
      return require([t.modulePath], function (R) {
        if (!_.defined(t.wasmBinaryFile))
          return R().then(function (_) {
            N(_)
          })
        _.defined(R) || (R = self.MSC_TRANSCODER),
          R(t).then(function (_) {
            N(_)
          })
      })
  }
})
