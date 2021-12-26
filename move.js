AFRAME.registerComponent("move-with-cam" ,{
    tick:function(){
        id = this.el.getAttribute("id")

        c = document.querySelector("#camera")
        c_pos = c.getAttribute("position")

        this.el.setAttribute("position", {
            x: c_pos.x,
            y: c_pos.y-0.5,
            z: c_pos.z -0.5
        })

        var camera = document.querySelector("#camera").object3D;

        //get the camera direction as Three.js Vector
        var cam_direction = new THREE.Vector3();
        camera.getWorldDirection(cam_direction);
        
        var object_h = document.querySelector(`#${id}`).object3D

        var object_h_direction = new THREE.Vector3()
        object_h.getWorldDirection(object_h_direction)

        object_h.setWorldDirection(cam_direction)

    }
})