const MOVE_SPEED=300;
layer(['obj', 'ui'], "obj");

const map=[
  [
  '                          ',
  '                          ',
  '                          ',
  '                          ',
  '                          ',
  '       X  X  X            ',
  '       .  .  .      N     ',
  '-------        -----------'],
  [
  '                         ',
  '                         ',
  '                         ',
  '                         ',
  '                         ',
  '         X  X            ',
  '         .  .      N     ',
  '-------       -----------']
  ]
const levelCfg={
  height:30,
  width:30,
  'X':[sprite('answer'),'answer',solid()],
  '-':[sprite('lane'),'lane',solid()],
  '.':[sprite('block'),'block',solid()],
  'N':[sprite('next'),'next',solid()],
  'A':[sprite('slides-right'),'slides-right',solid()],
  'B':[sprite('slides-left'),'slides-left',solid()],
}
const car=add([
sprite('car'),'car',pos(20,20),
  origin('center'),
  solid(),
  body(),
  {
    dead:false,
    speed:200
  }
])

let valueOfScore=args.score
if(args.score==undefined){
  valueOfScore=0;
}
let score = add([
  text(valueOfScore),
  pos(20,20),
  scale(4),
  layer('ui'),
  {
    value: valueOfScore
  }
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

const levelIndex = args.level ?? 0; 
const gameLevel = addLevel(map[levelIndex], levelCfg);

collides('car', 'answer', (c,a) => {
    camShake(2);
    destroy(a);
    score.value++;
  score.text = score.value;
} 
)

collides('car','next',(c,n)=>{
  camShake(5);
    go('main', { 
    level: (levelIndex + 1) % map.length,
    score: score.value })
  }
)

action('car', (s) => {
  if (s.pos.y >= (height())) {
    go('main')
  }
})
