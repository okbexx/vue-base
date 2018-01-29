import Transfer from './transfer'
import Transfer2 from './transfer2'
Transfer.install = function (Vue) {
  Vue.component(Transfer.name,Transfer)
}
Transfer2.install = function (Vue) {
  Vue.component(Transfer2.name,Transfer2)
}
export default {
  Transfer,
  Transfer2
}
