import {appendThemeBox} from './templates/ThemeBox.js'

$(document).ready(function () {
  data.forEach(datum=> {
    appendThemeBox($('#result'), datum.name, datum.subThemes);
  })
})