export class Quiz {
  constructor(src, xPosition) {
    this.x = xPosition;
    this.y = 0;
    this.width = 90;
    this.height = 90;
    this.speed = 3;
    this.movement = this.speed;
    this.img = new Image();

    this.img.src = src;
    this.onHitFloor = null;
  }

  update() {
    this.y += this.movement;
    // 바닥에 닿는다면 이벤트 함수 실행
    if (this.y > 600 && this.onHitFloor) this.onHitFloor();
  }
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y);
  }
}
