const map=[
  '                          ',
  '                   S      ',
  '                          ',
  '                          ',
  '                          ',
  '                          ',
  'xxxxxxxxxxxxxxxxxxxxxxxxxx',
]
const levelCfg={
  height:30,
  width:30,
  'x':[sprite('ground')],
  'S':[sprite('sun'),scale(2)],
  
}
const car=add([
sprite('car'), pos(30, height() / 2),
  origin('center'),
  solid()
])
addLevel(map,levelCfg)