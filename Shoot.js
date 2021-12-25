AFRAME.registerComponent("Shoot_Ball", {
    init: function(){
        this.shootBalls()
    },

    shootBalls: function(){
        window.addEventListener("keydown", (e)=>{
            if (e.key === "z"){
                var hitter = document.createElement("a-entity")
                
                hitter.setAttribute("geometry", {
                    primitive: "sphere",
                    radius:0.7
                });

                hitter.setAttribute("material", "color", "black");

                var cam = document.querySelector('#camera')

                pos = cam.getAttribute("position")

                hitter.setAttribute("position", {
                    x: pos.x,
                    y: pos.y,
                    z: pos.z
                })

                var camera = document.querySelector("#camera").object3D;

                var direction = new THREE.Vector3();
                camera.getWorldDirection(direction)

                hitter.setAttribute("velocity", direction.multiplyScalar(-10))

                var scene = document.querySelector("#scene")

                scene.appendChild(hitter)
            }
        })
    }
})