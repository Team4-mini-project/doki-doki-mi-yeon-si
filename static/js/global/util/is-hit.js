export function isHit(firstObj, secondObj) {
  if (
    !(
      firstObj.x >= secondObj.x + secondObj.width ||
      firstObj.x + firstObj.width <= secondObj.x ||
      firstObj.y >= secondObj.y + secondObj.height ||
      firstObj.y + firstObj.height <= secondObj.y
    )
  ) {
    return true;
  }
}
