import{a0 as e}from"./OrbitControls.038f510d.js";import{A as t,B as s,a as i,I as o,f as a,q as r,c as h,d as n,S as m}from"./trois.module.08af81d4.js";import{s as d}from"./simplex-noise.0ddbca87.js";import{r as l,o as u,c,w as p,b as f}from"./app.e1cb542e.js";const I=new d,g={components:{AmbientLight:t,BoxGeometry:s,Camera:i,InstancedMesh:o,PhongMaterial:a,Plane:r,PointLight:h,Renderer:n,Scene:m},setup:()=>({SIZE:1.5,NX:20,NY:20,PADDING:1,SIZEP:2.5,W:49,H:49,NUM_INSTANCES:400}),data:()=>({}),mounted(){this.renderer=this.$refs.renderer,this.mouse=this.renderer.three.mouse,this.mouseV3=this.renderer.three.mouseV3,this.imesh=this.$refs.imesh.mesh,this.light=this.$refs.light.light,this.dummy=new e,this.renderer.onBeforeRender(this.animate)},methods:{animate(){this.light.position.x=this.mouseV3.x,this.light.position.y=this.mouseV3.y,this.updateInstanceMatrix()},updateInstanceMatrix(){const e=-this.W/2+this.PADDING,t=-this.H/2+this.PADDING,s=1e-4*Date.now(),i=.1*this.mouse.x,o=.1*this.mouse.y;let a,r,h,n,m,d;for(let l=0;l<this.NX;l++)for(let u=0;u<this.NY;u++)a=e+l*this.SIZEP,r=t+u*this.SIZEP,h=.005*a+i,n=.005*r+o,m=I.noise3D(h,n,s)*Math.PI,d=I.noise3D(n,h,s)*Math.PI,this.dummy.position.set(a,r,-10),this.dummy.rotation.set(m,d,0),this.dummy.updateMatrix(),this.imesh.setMatrixAt(l*this.NY+u,this.dummy.matrix);this.imesh.instanceMatrix.needsUpdate=!0}}};g.render=function(e,t,s,i,o,a){const r=l("Camera"),h=l("AmbientLight"),n=l("PointLight"),m=l("BoxGeometry"),d=l("PhongMaterial"),I=l("InstancedMesh"),g=l("Plane"),N=l("Scene"),P=l("Renderer");return u(),c(P,{ref:"renderer",antialias:"",resize:"","orbit-ctrl":{enableDamping:!0,dampingFactor:.05},"mouse-move":"","mouse-raycast":"",shadow:""},{default:p((()=>[f(r,{position:{z:20}}),f(N,null,{default:p((()=>[f(h,{color:"#808080"}),f(n,{ref:"light","cast-shadow":"","shadow-map-size":{width:1024,height:1024}},null,512),f(I,{ref:"imesh",count:i.NUM_INSTANCES,"cast-shadow":"","receive-shadow":""},{default:p((()=>[f(m,{size:i.SIZE},null,8,["size"]),f(d,{color:"#9C1E15"})])),_:1},8,["count"]),f(g,{width:2*i.W,height:2*i.H,position:{z:-10-i.SIZE},"receive-shadow":""},{default:p((()=>[f(d,{color:"#9C1E15"})])),_:1},8,["width","height","position"])])),_:1})])),_:1},8,["orbit-ctrl"])};export default g;
