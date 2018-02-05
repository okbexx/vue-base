import HelloWorld from '../../components/HelloWorld'
import Slide from '../../components/example/slide/slide'
import Transfer from '../../components/example/transfer/transfer'
import Transfer2 from '../../components/example/transfer/transfer2'
import AccountVirtual from 'components/eltest/account-virtual'
export default [
  {
    path: '/',
    component: AccountVirtual
  },
  {
    path:'/transfer',
    component: Transfer
  }
]
