import {$makeParticipantList} from './templates/ParticipantList.js'


export function appendSubThemeBox($container, name, participants) {
  const $box = $(`<div class="sub-themebox"></div>`)
  const $header = $(`<h3>${name}</h3>`);
  const $contentBox = $('<div class="content"></div>');
  $box.append($header);               
  $box.append($contentBox);

  $header.click(function(e) {
    $contentBox.slideToggle();
  });
  
  if(participants && participants.length) $contentBox.append($makeParticipantList(participants))

  $container.append($box)
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

