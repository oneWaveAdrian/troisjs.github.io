import{b2 as t,a0 as e}from"./OrbitControls.038f510d.js";import{A as s,B as i,a as r,E as a,F as o,I as n,f as h,c as d,d as m,g as l,S as u,k as f}from"./trois.module.08af81d4.js";import{s as c}from"./simplex-noise.0ddbca87.js";import{r as p,o as y,c as I,w as P,b as A}from"./app.e1cb542e.js";const M=new c,N={components:{AmbientLight:s,BoxGeometry:i,Camera:r,EffectComposer:a,FXAAPass:o,InstancedMesh:n,PhongMaterial:h,PointLight:d,Renderer:m,RenderPass:l,Scene:u,TiltShiftPass:f},setup:()=>({SIZE:1.6,NX:25,NY:25,PADDING:1,SIZEP:2.6,W:64,H:64,NUM_INSTANCES:625}),data:()=>({tiltRadius:100,tiltY:100}),computed:{tiltStart(){return{x:0,y:this.tiltY}},tiltEnd(){return{x:100,y:this.tiltY}}},mounted(){this.renderer=this.$refs.renderer,this.size=this.renderer.three.size,this.mouse=this.renderer.three.mouse,this.imesh=this.$refs.imesh.mesh;const s=[];for(let t=0;t<this.NUM_INSTANCES;t++){const t=Math.random();s.push(t,t,t)}this.imesh.geometry.setAttribute("color",new t(new Float32Array(s),3)),this.tiltRadius=this.size.height/3,this.tiltY=this.size.height/2,this.renderer.onAfterResize(this.updateTilt),this.dummy=new e,this.renderer.onBeforeRender(this.animate)},methods:{animate(){this.updateInstanceMatrix()},updateTilt(){this.tiltRadius=this.size.height/3,this.tiltY=.5*(this.mouse.y+1)*this.size.height},updateInstanceMatrix(){const t=-this.W/2+this.PADDING,e=-this.H/2+this.PADDING,s=1e-4*Date.now();let i,r,a,o,n,h;for(let d=0;d<this.NX;d++)for(let m=0;m<this.NY;m++)i=t+d*this.SIZEP,r=e+m*this.SIZEP,a=.005*i,o=.005*r,n=M.noise3D(a,o,s)*Math.PI,h=M.noise3D(o,a,s)*Math.PI,this.dummy.position.set(i,r,-10),this.dummy.rotation.set(n,h,0),this.dummy.updateMatrix(),this.imesh.setMatrixAt(d*this.NY+m,this.dummy.matrix);this.imesh.instanceMatrix.needsUpdate=!0}}};N.render=function(t,e,s,i,r,a){const o=p("Camera"),n=p("AmbientLight"),h=p("PointLight"),d=p("BoxGeometry"),m=p("PhongMaterial"),l=p("InstancedMesh"),u=p("Scene"),f=p("RenderPass"),c=p("FXAAPass"),M=p("TiltShiftPass"),N=p("EffectComposer"),S=p("Renderer");return y(),I(S,{ref:"renderer",resize:"","mouse-move":"",onMousemove:a.updateTilt},{default:P((()=>[A(o,{position:{y:-20,z:10},"look-at":{x:0,y:0,z:0}}),A(u,{background:"#ffffff"},{default:P((()=>[A(n),A(h,{ref:"light",position:{y:0,z:20}},null,512),A(l,{ref:"imesh",count:i.NUM_INSTANCES,position:{y:20,z:10}},{default:P((()=>[A(d,{size:i.SIZE},null,8,["size"]),A(m,{"vertex-colors":""})])),_:1},8,["count"])])),_:1}),A(N,null,{default:P((()=>[A(f),A(c),A(M,{"gradient-radius":r.tiltRadius,start:{x:0,y:this.tiltY},end:{x:100,y:this.tiltY}},null,8,["gradient-radius","start","end"])])),_:1})])),_:1},8,["onMousemove"])};export default N;
