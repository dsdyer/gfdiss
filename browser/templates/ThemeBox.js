// import {makeParticipantList} from './ParticipantList.js'
import {appendSubThemeBox} from '../_shared.js'

export function ThemeBoxTemplate(name, subThemes) {
  // return 0
}


export function appendThemeBox($container, name, subThemes) {
  const $box = $(`<div class="themebox"></div>`)
  const $header = $(`<h2>${name}</h2>`);
  const $contentBox = $('<div class="content"></div>');
  $box.append($header);               
  $box.append($contentBox);

  $header.click(function(e) {
    $contentBox.slideToggle();
  })

  if(subThemes && subThemes.length) subThemes.forEach(s => appendSubThemeBox($contentBox, s.name, s.participants))

  $container.append($box)
}