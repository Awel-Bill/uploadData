const sheetType =  [
  {
    name      : "沉降",
    nameEN    : "sedimentation",
    typeId    : 1,
    value     : {
      unit         : 'm',
      numberPowFix : [0,4],
    },
    changeSpeed: {
      unit         : 'mm/d',
      numberPowFix : [3,2],
    },
    amountDeltaValue: {
      unit         : 'mm',
      numberPowFix : [3,2],
    }
  },
  {
    name      : "水平位移",
    nameEN    : "shifting",
    typeId    : 2,
    value     : {
      unit         : 'm',
      numberPowFix : [0,4],
    },
    changeSpeed:{
      unit         : 'mm/d',
      numberPowFix : [3,2],
    },
    amountDeltaValue:{
      unit         : 'mm',
      numberPowFix : [3,2],
    }
  },
  {
    name      : "轴力",
    nameEN    : "axialForce",
    typeId    : 3,
    value     : {
      unit         : 'KN',
      numberPowFix : [0,0],
    },
    changeSpeed:{
      unit         : 'KN/d',
      numberPowFix : [0,2],
    },
    amountDeltaValue:{
      unit         : 'KN',
      numberPowFix : [0,0],
    }
  },
  {
    name      : "水位",
    nameEN    : "waterLevel",
    typeId    : 4,
    value     : {
      unit         : 'm',
      numberPowFix : [0,2],
    },
    changeSpeed:{
      unit         : 'mm/d',
      numberPowFix : [3,0],
    },
    amountDeltaValue:{
      unit         : 'mm',
      numberPowFix : [3,0],
    }
  },
  // 删除墙体内力
  {
    name      : "测斜",
    nameEN    : "inclinometer",
    typeId    : 6,
    value     : {
      unit         : 'mm',
      numberPowFix : [0,2],
    },
    changeSpeed:{
      unit         : 'mm/d',
      numberPowFix : [0,2],
    },
    amountDeltaValue:{
      unit         : 'mm',
      numberPowFix : [0,2],
    }
  },
  {
    name      : "收敛",
    nameEN    : "convergence",
    typeId    : 7,
    value     : {
      unit         : 'm',
      numberPowFix : [0,4],
    },
    changeSpeed:{
      unit         : 'mm/d',
      numberPowFix : [3,2],
    },
    amountDeltaValue:{
      unit         : 'mm',
      numberPowFix : [3,2],
    }
  },
  {
    name      : "自定义",
    nameEN    : "custom",
    id        : 8,
    typeId    : 8,
    items     : [
      {
        name      : `类型一/沉降类`,
        typeId    : 1,
        value     : {
          unit    : 'm',
          numberPowFix : [0,4],
        },
        changeSpeed:{
          unit    : 'mm/d',
          numberPowFix : [3,2],
        },
        amountDeltaValue:{
          unit    : 'mm',
          numberPowFix : [3,2],
        }
      },
      {
        name      : `类型二/测斜类`,
        typeId    : 2,
        value     : {
          unit    : 'mm',
          numberPowFix : [0,2],
        },
        changeSpeed:{
          unit    : 'mm/d',
          numberPowFix : [0,2],
        },
        amountDeltaValue:{
          unit    : 'mm',
          numberPowFix : [0,2],
        }
      },
      {
        name      : `类型三/应力类`,
        typeId    : 3,
        value     : {
          unit    : 'KN',
          numberPowFix : [0,2],
        },
        changeSpeed:{
          unit    : 'KN/d',
          numberPowFix : [0,2],
        },
        amountDeltaValue:{
          unit    : 'KN',
          numberPowFix : [0,2],
        }
      },
    ]
  }
];

export default sheetType