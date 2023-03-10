import {GLTFLoader} from "three/examples/jsm/loaders"


export function loadGLTFModel(
    scene,
    glb,
    options={receiveShadow:true,castShadow:true}
){
    const {receiveShadow,castShadow} = options
    return new Promise((resolve,reject)=>{
        const loader = new GLTFLoader()

        loader.load(
            glbPath,
            gltf=>{
                const obj = gltf.scene
                obj.name="dog"
                obj.position.y = 0
                obj.position.x = 0
                obj.receiveShadow = receiveShadow
                obj.castShadow=castShadow
                scene.add(obj)

                obj.tranverse(function(child){
                    if(child.isMesh){
                        child.castShaow = castShadow
                        child.receiveShadow = receiveShadow
                    }
                })
                resolve(obj)
            },
            undefined,
            function(error){
                reject(error)
            }
        )
    })
}