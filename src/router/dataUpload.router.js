import Home          from '@/pages/home/home'
import DataUpload    from '@/pages/dataUpload/dataUpload'
import Sedimentation from '@/pages/dataUpload/sheet/sedimentation'
import Shifting      from '@/pages/dataUpload/sheet/shifting'
import AxialForce    from '@/pages/dataUpload/sheet/axialForce'
import WaterLevel    from '@/pages/dataUpload/sheet/waterLevel'
import Inclinometer  from '@/pages/dataUpload/sheet/inclinometer'
import Convergence   from '@/pages/dataUpload/sheet/convergence'
import Custom        from '@/pages/dataUpload/sheet/custom'

export default {
  path:'/dataUpload',
  component:Home,
  redirect: '/dataUpload/main/sedimentation',
  children:[{
    path:'main',
    component:DataUpload,
    children: [{
      path      : 'sedimentation',
      component : Sedimentation
    },{
      path      : 'shifting',
      component : Shifting
    },{
      path      : 'axialForce',
      component : AxialForce
    },{
      path      : 'waterLevel',
      component : WaterLevel
    },{
      path      : 'inclinometer',
      component : Inclinometer
    },{
      path      : 'convergence',
      component : Convergence
    },{
      path      : 'custom',
      component : Custom
    }]
  }]
}