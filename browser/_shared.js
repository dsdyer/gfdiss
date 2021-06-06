// import {appendThemeBox} from './templates/ThemeBox.js'

export function makeParticipantList(participants) {
  const $ul = $('<ul></ul>')
  arr.forEach(item=>$ul.append($(`<li>
  ${item.id}, ${item.race}, ${item.sexual}, ${item.gender}, ${item.childAges}, ${item.childRelate}, ${item.relationshipConfig}
  </li>`)));
  return $ul;
}

export function makeUL(arr) {
  const $ul = $('<ul></ul>')
  arr.forEach(item=>$ul.append($(`<li>
  ${item.id}, ${item.race}, ${item.sexual}, ${item.gender}, ${item.childAges}, ${item.childRelate}, ${item.relationshipConfig}
  </li>`)));
  return $ul;
}

export function makeP(arr) {
  const $p = $(`<p>    ${arr.join(', ')}</p>`);


  
  // console.log(`$p: ${JSON.stringify($p, null, 2)}`)
  return $($p)
}


export function appendSubThemeBox($container, name, participants) {
  const $box = $(`<div class="sub-themebox"></div>`)
  const $header = $(`<h3>${name}</h3>`);
  const $contentBox = $('<div class="content"></div>');
  $box.append($header);               
  $box.append($contentBox);

  $header.click(function(e) {
    $contentBox.slideToggle();
  });
  
  if(participants && participants.length) $contentBox.append(makeUL(participants))
  // if(participants && participants.length) $contentBox.append(makeP(participants))

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

