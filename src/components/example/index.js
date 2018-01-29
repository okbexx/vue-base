import CheckBox from 'components/example/checkbox'
import SearchBox from 'components/example/search-box'
import Slide from 'components/example/slide'
import Transfer from 'components/example/transfer'

const install= function (Vue,opts={}) {
  if (install.installed) return;
  Vue.component(CheckBox.name,CheckBox)
  Vue.component(SearchBox.name,SearchBox)
  Vue.component(Slide.name,Slide)
  for (let item in Transfer) {
    let component= Transfer[item]
    Vue.component(component.name,component)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  CheckBox,
  SearchBox,
  Slide,
 // ...Transfer
}
