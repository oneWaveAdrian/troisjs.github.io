import{o as t,c as e,d as s}from"./app.66f48fd8.js";const a='{"title":"Lights (wip)","description":"","frontmatter":{},"headers":[{"level":3,"title":"Common Props (see Light.js)","slug":"common-props-see-light-js"},{"level":3,"title":"Access ThreeJS light","slug":"access-threejs-light"}],"relativePath":"guide/lights/index.md","lastUpdated":1617743101411}',n={},r=s('<h1 id="lights-wip"><a class="header-anchor" href="#lights-wip" aria-hidden="true">#</a> Lights (wip)</h1><p>You can easily create the following lights :</p><ul><li><code>AmbientLight</code> (<a href="https://github.com/troisjs/trois/blob/master/src/lights/AmbientLight.js" target="_blank" rel="noopener noreferrer">source</a>, <a href="https://threejs.org/docs/index.html#api/en/lights/AmbientLight" target="_blank" rel="noopener noreferrer">threejs doc</a>)</li><li><code>DirectionalLight</code> (<a href="https://github.com/troisjs/trois/blob/master/src/lights/DirectionalLight.js" target="_blank" rel="noopener noreferrer">source</a>, <a href="https://threejs.org/docs/index.html#api/en/lights/DirectionalLight" target="_blank" rel="noopener noreferrer">threejs doc</a>)</li><li><code>HemisphereLight</code> (<a href="https://github.com/troisjs/trois/blob/master/src/lights/HemisphereLight.js" target="_blank" rel="noopener noreferrer">source</a>, <a href="https://threejs.org/docs/index.html#api/en/lights/HemisphereLight" target="_blank" rel="noopener noreferrer">threejs doc</a>)</li><li><code>PointLight</code> (<a href="https://github.com/troisjs/trois/blob/master/src/lights/PointLight.js" target="_blank" rel="noopener noreferrer">source</a>, <a href="https://threejs.org/docs/index.html#api/en/lights/PointLight" target="_blank" rel="noopener noreferrer">threejs doc</a>)</li><li><code>RectAreaLight</code> (<a href="https://github.com/troisjs/trois/blob/master/src/lights/RectAreaLight.js" target="_blank" rel="noopener noreferrer">source</a>, <a href="https://threejs.org/docs/#api/en/lights/RectAreaLight" target="_blank" rel="noopener noreferrer">threejs doc</a>)</li><li><code>SpotLight</code> (<a href="https://github.com/troisjs/trois/blob/master/src/lights/AmbientLight.js" target="_blank" rel="noopener noreferrer">source</a>, <a href="https://threejs.org/docs/index.html#api/en/lights/SpotLight" target="_blank" rel="noopener noreferrer">threejs doc</a>)</li></ul><p>Example :</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PointLight</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#ffffff<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:intensity</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0.5<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><h3 id="common-props-see-light-js"><a class="header-anchor" href="#common-props-see-light-js" aria-hidden="true">#</a> Common Props (see <a href="https://github.com/troisjs/trois/blob/master/src/lights/Light.js" target="_blank" rel="noopener noreferrer">Light.js</a>)</h3><table><tbody><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr><tr><td><code>castShadow</code></td><td>Casting shadow</td><td>Boolean</td><td>false</td></tr><tr><td><code>color</code></td><td>Light color</td><td>String, Number</td><td>#ffffff</td></tr><tr><td><code>intensity</code></td><td>Light intensity</td><td>Number</td><td>1</td></tr><tr><td><code>position</code></td><td>Light position</td><td>Object</td><td>{ x: 0, y: 0, z: 0 }</td></tr><tr><td><code>shadowMapSize</code></td><td>Shadow map size</td><td>Object</td><td>{ width: 512, height: 512 }</td></tr></tbody></table><h3 id="access-threejs-light"><a class="header-anchor" href="#access-threejs-light" aria-hidden="true">#</a> Access ThreeJS light</h3><p>You should set a <em>ref</em> on your light :</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PointLight</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>light<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><p>You can then access ThreeJS light in your component script :</p><div class="language-js"><pre><code><span class="token keyword">const</span> light <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$ref<span class="token punctuation">.</span>light<span class="token punctuation">.</span>light<span class="token punctuation">;</span>\n</code></pre></div>',12);n.render=function(s,a,n,o,i,l){return t(),e("div",null,[r])};export default n;export{a as __pageData};