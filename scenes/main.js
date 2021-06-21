const MOVE_SPEED=300;

const map=[
  '             -------------',
  '                    X     ',
  '             -------------',
  '                    X     ',
  '             -------------',
  '                    X     ',
  '             -------------',
  '                    X     ',
  '             -------------',]
const levelCfg={
  height:30,
  width:30,
  'X':[sprite('answer')],
  '-':[sprite('lane')],
}
const car=add([
sprite('car'), pos(30, height() / 2-3),
  origin('center'),
  solid()
])

keyDown('right',()=>{
  car.move(MOVE_SPEED,0)
})

keyDown('left',()=>{
  car.move(-MOVE_SPEED,0)
})

keyDown('down',()=>{
  car.move(0,MOVE_SPEED)
})

keyDown('up',()=>{
  car.move(0,-MOVE_SPEED)
})
addLevel(map,levelCfg)