function f1(target){
  return Array.from(Array(target), (_,i) => i + 1)
          .filter( p => p%3==0||p%5==0)
          .reduce((prev,curr) => prev+curr)
}
