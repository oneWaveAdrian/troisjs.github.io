import{a as e,d as t,S as i}from"./trois.module.08af81d4.js";import{P as s,h as r,x as o,p as a}from"./OrbitControls.038f510d.js";import{n as h,r as n,o as m,c as d,w as u,b as f}from"./app.e1cb542e.js";import{M as l,s as p}from"./snoise2.glsl.7b2d570b.js";import"./tools.41b95e4b.js";const c={components:{Camera:e,NoisyImage:{extends:{emits:["loaded"],extends:l,props:{src:String,width:Number,height:Number,keepSize:Boolean},created(){this.createGeometry(),this.createMaterial(),this.initMesh(),h((()=>this.src),this.refreshTexture),["width","height"].forEach((e=>{h((()=>this[e]),this.resize)})),this.keepSize&&this.three.onAfterResize(this.resize)},methods:{createGeometry(){this.geometry=new s(1,1,1,1)},createMaterial(){this.material=new r({side:o,map:this.loadTexture()})},loadTexture(){return(new a).load(this.src,this.onLoaded)},refreshTexture(){this.texture&&this.texture.dispose(),this.material.map=this.loadTexture(),this.material.needsUpdate=!0},onLoaded(e){this.texture=e,this.resize(),this.$emit("loaded")},resize(){if(!this.texture)return;const e=this.three.size,t=this.texture.image.width/this.texture.image.height;let i,s;this.width&&this.height?(i=this.width*e.wWidth/e.width,s=this.height*e.wHeight/e.height):this.width?(i=this.width*e.wWidth/e.width,s=i/t):this.height&&(s=this.height*e.wHeight/e.height,i=s*t),this.mesh.scale.x=i,this.mesh.scale.y=s}},__hmrId:"Image"},props:{widthSegments:{type:Number,default:20},heightSegments:{type:Number,default:20},timeCoef:{type:Number,default:.001},noiseCoef:{type:Number,default:1},zCoef:{type:Number,default:5},dispCoef:{type:Number,default:.05}},setup(e){const t={value:e.noiseCoef};h((()=>e.noiseCoef),(e=>{t.value=e}));const i={value:e.zCoef};h((()=>e.zCoef),(e=>{i.value=e}));const s={value:e.dispCoef};return h((()=>e.dispCoef),(e=>{s.value=e})),{uTime:{value:0},uNoiseCoef:t,uZCoef:i,uDispCoef:s}},mounted(){this.startTime=Date.now(),this.three.onBeforeRender(this.updateTime)},unmounted(){this.three.offBeforeRender(this.updateTime)},methods:{createGeometry(){this.geometry=new s(1,1,this.widthSegments,this.heightSegments)},createMaterial(){this.material=new r({side:o,map:this.loadTexture()}),this.material.onBeforeCompile=e=>{e.uniforms.uTime=this.uTime,e.uniforms.uNoiseCoef=this.uNoiseCoef,e.uniforms.uZCoef=this.uZCoef,e.uniforms.uDispCoef=this.uDispCoef,e.vertexShader=`\n          uniform float uTime;\n          uniform float uNoiseCoef;\n          uniform float uZCoef;\n          varying float vNoise;\n          ${p}\n        `+e.vertexShader,e.vertexShader=e.vertexShader.replace("#include <begin_vertex>","         \n            vec3 p = vec3(position * uNoiseCoef);\n            p.x += uTime;\n            vNoise = snoise(p.xy);\n            vec3 transformed = vec3(position);\n            transformed.z += vNoise * uZCoef;\n          "),e.fragmentShader="\n          uniform float uDispCoef;\n          varying float vNoise;\n        "+e.fragmentShader,e.fragmentShader=e.fragmentShader.replace("#include <map_fragment>","\n            vec4 texelColor = texture2D(map, vUv);\n            vec4 dispTexel = texture2D(map, vUv + vec2(vNoise * uDispCoef, 0));\n            texelColor.r = dispTexel.r;\n            diffuseColor = texelColor;\n          "),this.materialShader=e}},updateTime(){this.uTime.value=(Date.now()-this.startTime)*this.timeCoef}},__hmrId:"NoisyImage"},Renderer:t,Scene:i}};c.render=function(e,t,i,s,r,o){const a=n("Camera"),h=n("NoisyImage"),l=n("Scene"),p=n("Renderer");return m(),d(p,{ref:"renderer",resize:"","orbit-ctrl":{enableDamping:!0,dampingFactor:.05}},{default:u((()=>[f(a,{position:{x:0,y:0,z:100}}),f(l,{background:"#000000"},{default:u((()=>[f(h,{src:"/assets/images/img2.jpg",width:800,"time-coef":.001,"noise-coef":2,"z-coef":5,"disp-coef":.015,rotation:{x:-Math.PI/6}},null,8,["time-coef","disp-coef","rotation"])])),_:1})])),_:1},8,["orbit-ctrl"])};export default c;
