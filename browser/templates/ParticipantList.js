export function makeParticipantList(participants) {
  const $ul = $('<ul></ul>')
  arr.forEach(item=>$ul.append($(`<li>
  ${item.id}, ${item.race}, ${item.sexual}, ${item.gender}, ${item.childAges}, ${item.childRelate}, ${item.relationshipConfig}
  </li>`)));
  return $ul;
}