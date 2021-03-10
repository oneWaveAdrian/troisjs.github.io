import{i as e,_ as t,c as s,a0 as a,$ as i}from"./OrbitControls.9727ee0a.js";import{a as r,D as o,E as n,F as m,I as h,c,d,g as l,m as u,S as p,U as y}from"./trois.module.1c62e14a.js";import{x as f,r as S,o as C,c as g,w as M,a as N}from"./app.91ec005e.js";const{randFloat:A,randFloatSpread:x}=i,O={components:{Camera:r,DodecahedronGeometry:o,EffectComposer:n,FXAAPass:m,InstancedMesh:h,PointLight:c,Renderer:d,RenderPass:l,SubSurfaceMaterial:u,Scene:p,UnrealBloomPass:y},setup(){const s=[],a=f.scale(["#dd3e1b","#0b509c"]),i=new e,r=new t,o=new e;for(let t=0;t<2e3;t++)s.push({position:new e(x(200),x(200),x(200)),scale:A(.2,1),velocity:new e(x(2),x(2),x(2)),attraction:.0025+A(0,.01),vlimit:.3+A(0,.2)});return{NUM_INSTANCES:2e3,instances:s,cscale:a,target:i,dummyO:r,dummyV:o}},mounted(){this.renderer=this.$refs.renderer,this.imesh=this.$refs.imesh.mesh,this.light=this.$refs.light.light,this.init()},methods:{init(){for(let e=0;e<this.NUM_INSTANCES;e++){const{position:t,scale:s}=this.instances[e];this.dummyO.position.copy(t),this.dummyO.scale.set(s,s,s),this.dummyO.updateMatrix(),this.imesh.setMatrixAt(e,this.dummyO.matrix)}this.updateColors(),this.imesh.instanceMatrix.needsUpdate=!0,this.renderer.onBeforeRender(this.animate)},animate(){this.target.copy(this.renderer.three.mouseV3),this.light.position.copy(this.target);for(let e=0;e<this.NUM_INSTANCES;e++){const{position:t,scale:s,velocity:a,attraction:i,vlimit:r}=this.instances[e];this.dummyV.copy(this.target).sub(t).normalize().multiplyScalar(i),a.add(this.dummyV).clampScalar(-r,r),t.add(a),this.dummyO.position.copy(t),this.dummyO.scale.set(s,s,s),this.dummyO.lookAt(this.dummyV.copy(t).add(a)),this.dummyO.updateMatrix(),this.imesh.setMatrixAt(e,this.dummyO.matrix)}this.imesh.instanceMatrix.needsUpdate=!0},randomColors(){const e=f.random(),t=f.random();this.cscale=f.scale([e,t]),this.updateColors()},updateColors(){const e=[];for(let t=0;t<this.NUM_INSTANCES;t++){const t=new s(this.cscale(A(0,1)).hex());e.push(t.r,t.g,t.b)}this.imesh.geometry.setAttribute("color",new a(new Float32Array(e),3))}}};O.render=function(e,t,s,a,i,r){const o=S("Camera"),n=S("PointLight"),m=S("DodecahedronGeometry"),h=S("SubSurfaceMaterial"),c=S("InstancedMesh"),d=S("Scene"),l=S("RenderPass"),u=S("UnrealBloomPass"),p=S("FXAAPass"),y=S("EffectComposer"),f=S("Renderer");return C(),g(f,{ref:"renderer",resize:"","orbit-ctrl":"","mouse-move":"","mouse-raycast":"",onClick:r.randomColors},{default:M((()=>[N(o,{position:{z:200}}),N(d,null,{default:M((()=>[N(n,{ref:"light",color:"#FFC0C0"},null,512),N(c,{ref:"imesh",count:a.NUM_INSTANCES},{default:M((()=>[N(m,{radius:5}),N(h,{"vertex-colors":""})])),_:1},8,["count"])])),_:1}),N(y,null,{default:M((()=>[N(l),N(u,{strength:.5},null,8,["strength"]),N(p)])),_:1})])),_:1},8,["onClick"])};export default O;