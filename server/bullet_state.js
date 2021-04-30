// store all bullets
let bullets = [];
let bullet;

function Bullet() {
  this.bulletId = bullets.length;
  this.bulletx = 10;
  this.bullety = -10;
  this.bulletz = 1;
  this.bulletr_x = 0;
  this.bulletr_y = 0;
  this.bulletr_z = 0;
  this.bullletsizeX = /*0.*/2;
  this.bulletsizeY = 2;
  this.bulletsizeZ = 0.5;
  this.bulletspeed = 500;
}

//adding the bullet when they join
let addBullet = function (id) {
  let bullet = new Bullet();
  bullet.bulletId = id;
  bullets.push(bullet);

  return bullet;
};

//removing the player when they leave
let removeBullet = function (bullet) {
  let index2 = bullets.indexOf(bullet);

  if (index2 > -1) {
    bullets.splice(index2, 1);
  }
};

let bulletForId = function (id) {

  for (let i = 0; i < bullets.length; i++) {
    if (bullets[i].bulletId === id) {
      bullet = bullets[i];
      break;
    }
  }

  return bullet;
};

//updating the bullets position when moving
let updateBulletData = function (data) {
  let bullet = bulletForId(data.bulletId);
  bullet.bulletx = data.bulletx;
  bullet.bullety = data.bullety;
  bullet.bulletz = data.bulletz;
  bullet.bulletr_x = data.bulletr_x;
  bullet.bulletr_y = data.bulletr_y;
  bullet.bulletr_z = data.bulletr_z;

  return bullet;
};

//exproting the function
module.exports.bullets = bullets;
module.exports.addBullet = addBullet;
module.exports.removeBullet = removeBullet;
module.exports.bulletForId = bulletForId;
module.exports.updateBulletData = updateBulletData;
