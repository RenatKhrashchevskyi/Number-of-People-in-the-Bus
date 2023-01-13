let number = function(busStops){
  let a = busStops.reduce((acc , i) => acc + i[0], 0)
  let b = busStops.reduce((acc , i) => acc + i[1], 0)
  let result = a - b
  return result
}