(function (window) {
  'use strict';

  class Arahnid {
    constructor(options) {
      this.name = options.name;
      this.sprite = options.sprite;
      this.posX = options.posX;
      this.posY = options.posY;
      this.speed = options.speed;
      this.width = options.width;
      this.height = options.height;
      this.dx = 5;
      this.dy = 0;
    }
    move(dt) {
      this.posX += this.dx;
    };

    checkBounce() {
      let x = this.posX + this.dx;
      if (x + this.width > gameCanvas.width) {
        this.sprite.image = arahnidLeft;
        this.posX = gameCanvas.width - this.width;
        this.dx = -this.speed;
      }
      if (x < 0) {
        this.sprite.image = arahnidRight;
        this.sprite.posX = 0;
        this.dx = this.speed;
      }
    };

    update(dt) {
      this.move(dt);
      this.checkBounce();
      this.sprite.update(dt);
    };

    render(context) {
      this.sprite.render(context, this.posX, this.posY, this.width, this.height);
    }
  }

  window.gameJS = window.gameJS || {};
  window.gameJS.Arahnid = Arahnid;
})(window);