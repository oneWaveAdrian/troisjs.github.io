import{l as e,a,M as r,d as t,S as o}from"./trois.module.5e557d26.js";import{r as s,o as n,c as i,w as f,a as d}from"./app.1c4a2eec.js";import"./OrbitControls.9727ee0a.js";const c={components:{Box:e,Camera:a,MatcapMaterial:r,Renderer:t,Scene:o},mounted(){const e=this.$refs.renderer,a=this.$refs.mesh.mesh;e.onBeforeRender((()=>{a.rotation.x+=.01}))}};c.render=function(e,a,r,t,o,c){const m=s("Camera"),l=s("MatcapMaterial"),p=s("Box"),u=s("Scene"),h=s("Renderer");return n(),i(h,{ref:"renderer",resize:"",antialias:"","orbit-ctrl":""},{default:f((()=>[d(m,{position:{x:0,y:0,z:10}}),d(u,{background:"#ffffff"},{default:f((()=>[d(p,{ref:"mesh",size:3,rotation:{y:Math.PI/4,z:Math.PI/4}},{default:f((()=>[d(l,{name:"2E763A_78A0B7_B3D1CF_14F209"})])),_:1},8,["rotation"])])),_:1})])),_:1},512)};export default c;
