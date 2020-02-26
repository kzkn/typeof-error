import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'bootstrap'
import './style'

const ctx = require.context('./components', true);
import ReactRailsUJS from 'react_ujs';
ReactRailsUJS.useContext(ctx);
