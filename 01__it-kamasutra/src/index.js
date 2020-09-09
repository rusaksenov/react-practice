import renderSite from './renderSite'
import state from './redux/state'
import * as serviceWorker from './serviceWorker'
import './index.css'

renderSite(state)

serviceWorker.unregister()