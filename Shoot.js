AFRAME.registerComponent("balls", {
    init: function () {
      this.throwBalls();
    },
    throwBalls: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "z") {
          var ball = document.createElement("a-entity");
  
          ball.setAttribute("geometry", {
            primitive: "sphere",
            radius: 1,
          });
  
          ball.setAttribute("material", "color", "black");

          tex_Obj = document.querySelector("#balltexture")
          tex_Source = tex_Obj.getAttribute("src")

          ball.setAttribute("src", tex_Source)

  
          var cam = document.querySelector("#camera");
  
          pos = cam.getAttribute("position");
  
          ball.setAttribute("position", {
            x: pos.x,
            y: pos.y,
            z: pos.z-2,
          });
  
          var camera = document.querySelector("#camera").object3D;
  
          //get the camera direction as Three.js Vector
          var direction = new THREE.Vector3();
          camera.getWorldDirection(direction);
  
          //set the velocity and it's direction
          ball.setAttribute("velocity", direction.multiplyScalar(-3));
  
          var scene = document.querySelector("#scene");
  
          scene.appendChild(ball);
        }
      });
    },
  });
  
  
  