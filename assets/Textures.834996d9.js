import{A as e,a as s,d as t,c as a,S as r,o as n,e as i,p as o}from"./trois.module.99ddcb6e.js";import{r as l,o as d,c,w as p,b as m}from"./app.80aaf375.js";import"./OrbitControls.42fcbb91.js";const u={components:{AmbientLight:e,Camera:s,Renderer:t,PointLight:a,Scene:r,Sphere:n,StandardMaterial:i,Texture:o}};u.render=function(e,s,t,a,r,n){const i=l("Camera"),o=l("AmbientLight"),u=l("PointLight"),_=l("Texture"),g=l("StandardMaterial"),f=l("Sphere"),h=l("Scene"),b=l("Renderer");return d(),c(b,{ref:"renderer",resize:"",antialias:"","orbit-ctrl":{autoRotate:!0,enableDamping:!0,dampingFactor:.05}},{default:p((()=>[m(i,{position:{z:10}}),m(h,{background:"#000000"},{default:p((()=>[m(o,{intensity:.5},null,8,["intensity"]),m(u,{position:{y:50,z:0}}),m(u,{color:"#ff6000",intensity:.75,position:{y:-50,z:0}},null,8,["intensity"]),m(f,{ref:"mesh",radius:2.5,"width-segments":200,"height-segments":200},{default:p((()=>[m(g,{"displacement-scale":.2},{default:p((()=>[m(_,{src:"/assets/textures/Wood_Tiles_002_basecolor.jpg"}),m(_,{src:"/assets/textures/Wood_Tiles_002_height.png",name:"displacementMap"}),m(_,{src:"/assets/textures/Wood_Tiles_002_normal.jpg",name:"normalMap"}),m(_,{src:"/assets/textures/Wood_Tiles_002_roughness.jpg",name:"roughnessMap"}),m(_,{src:"/assets/textures/Wood_Tiles_002_ambientOcclusion.jpg",name:"aoMap"})])),_:1},8,["displacement-scale"])])),_:1},8,["radius"])])),_:1})])),_:1},8,["orbit-ctrl"])};export default u;