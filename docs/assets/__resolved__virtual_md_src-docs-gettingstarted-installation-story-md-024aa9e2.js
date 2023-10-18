const html = `<h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2>
<hr>
<h3 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-hidden="true">#</a></h3>
<p>Your main project should have the following dependencies installed:</p>
<div class="div data-table"><table>
<thead>
<tr>
<th style="text-align:left">Package</th>
<th style="text-align:center">Minimum Version</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Vue 3</td>
<td style="text-align:center">^3.3.4</td>
</tr>
<tr>
<td style="text-align:left">Vuetify</td>
<td style="text-align:center">^3.3.7</td>
</tr>
<tr>
<td style="text-align:left">Histoire</td>
<td style="text-align:center">^0.17.2</td>
</tr>
</tbody>
</table>
</div>
<hr>
<h3 id="npm-install" tabindex="-1">NPM Install <a class="header-anchor" href="#npm-install" aria-hidden="true">#</a></h3>
<p>Install NPM Package:</p>
<pre><code class="language-shell"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">shell</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #FFA657">npm</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">install</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">histoire-vuetify-design-system</span></span>
<span class="line"></span></code></pre></div></code></pre>
<hr>
<h3 id="making-your-vuetify-options-exportable" tabindex="-1">Making Your Vuetify Options Exportable <a class="header-anchor" href="#making-your-vuetify-options-exportable" aria-hidden="true">#</a></h3>
<p>Typically when setting up Vuetify you don't need to make your options object exportable, but for this package we need to setup vuetify a little bit different. There isn't much you need to change, but start with creating an options file where you would normally initilise your vuetify instance. It needs to export default so this package can import them dynamically.</p>
<pre><code class="language-typescript"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">typescript</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #8B949E">/** plugins/vuetify/options.ts */</span></span>
<span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">type</span><span style="color: #C9D1D9"> { VuetifyOptions, ThemeDefinition } </span><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;vuetify&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">vuetifyTheme</span><span style="color: #FF7B72">:</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">ThemeDefinition</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span></span>
<span class="line"><span style="color: #C9D1D9">  dark: </span><span style="color: #79C0FF">false</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">// other vuetify options</span></span>
<span class="line"><span style="color: #C9D1D9">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">Vuetify3Options</span><span style="color: #FF7B72">:</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">VuetifyOptions</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span></span>
<span class="line"><span style="color: #C9D1D9">  theme: {</span></span>
<span class="line"><span style="color: #C9D1D9">    defaultTheme: </span><span style="color: #A5D6FF">&#39;vuetifyTheme&#39;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">    themes: {</span></span>
<span class="line"><span style="color: #C9D1D9">      vuetifyTheme</span></span>
<span class="line"><span style="color: #C9D1D9">    }</span></span>
<span class="line"><span style="color: #C9D1D9">  }</span></span>
<span class="line"><span style="color: #C9D1D9">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FF7B72">export</span><span style="color: #FFA657"> </span><span style="color: #FF7B72">default</span><span style="color: #FFA657"> </span><span style="color: #C9D1D9">Vuetify3Options</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></code></pre>
<p>Inside your vuetify  file, you can import your options and include anything else.</p>
<pre><code class="language-typescript"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">typescript</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #8B949E">/** plugins/vuetify/index.ts */</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> { createVuetify } </span><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;vuetify&quot;</span><span style="color: #C9D1D9">;</span></span>
<span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">*</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">as</span><span style="color: #C9D1D9"> labs </span><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;vuetify/labs/components&quot;</span><span style="color: #C9D1D9">;</span></span>
<span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">*</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">as</span><span style="color: #C9D1D9"> components </span><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;vuetify/components&quot;</span><span style="color: #C9D1D9">;</span></span>
<span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">*</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">as</span><span style="color: #C9D1D9"> directives </span><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;vuetify/directives&quot;</span><span style="color: #C9D1D9">;</span></span>
<span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> Vuetify3Options </span><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;./options&#39;</span></span>
<span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;vuetify/styles&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FF7B72">export</span><span style="color: #FFA657"> </span><span style="color: #FF7B72">default</span><span style="color: #FFA657"> </span><span style="color: #D2A8FF">createVuetify</span><span style="color: #FFA657">({</span></span>
<span class="line"><span style="color: #FFA657">  </span><span style="color: #C9D1D9">components: {</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #FF7B72">...</span><span style="color: #C9D1D9">components,</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #FF7B72">...</span><span style="color: #C9D1D9">labs,</span></span>
<span class="line"><span style="color: #C9D1D9">  }</span><span style="color: #FFA657">,</span></span>
<span class="line"><span style="color: #FFA657">  </span><span style="color: #C9D1D9">directives</span><span style="color: #FFA657">,</span></span>
<span class="line"><span style="color: #FFA657">  </span><span style="color: #FF7B72">...</span><span style="color: #C9D1D9">Vuetify3Options</span></span>
<span class="line"><span style="color: #FFA657">})</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></code></pre>
<p>Then initialise vuetify how your normally would:</p>
<pre><code class="language-typescript"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">typescript</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #8B949E">/** main.ts */</span></span>
<span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> { createApp } </span><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;vue&#39;</span></span>
<span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> vuetify </span><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;./vuetify&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> App </span><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;./App.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D2A8FF">createApp</span><span style="color: #C9D1D9">(App).</span><span style="color: #D2A8FF">use</span><span style="color: #C9D1D9">(vuetify).</span><span style="color: #D2A8FF">mount</span><span style="color: #C9D1D9">(</span><span style="color: #A5D6FF">&#39;#app&#39;</span><span style="color: #C9D1D9">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></code></pre>
<hr>
<h3 id="histoire-setup-file" tabindex="-1">Histoire Setup File <a class="header-anchor" href="#histoire-setup-file" aria-hidden="true">#</a></h3>
<p>You'll need to make sure you are importing your projects vuetify options (from above) and set these for histoire to display the correct options.</p>
<pre><code class="language-typescript"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">typescript</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #8B949E">/** histoire.setup.ts */</span></span>
<span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> { defineSetupVue3 } </span><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;@histoire/plugin-vue&#39;</span></span>
<span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> vuetify </span><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;./plugins/vuetify&#39;</span></span>
<span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> HistoireVuetifyDS </span><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;histoire-vuetify-design-system&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FF7B72">export</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">setupVue3</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">defineSetupVue3</span><span style="color: #C9D1D9">(({ </span><span style="color: #FFA657">app</span><span style="color: #C9D1D9"> }) </span><span style="color: #FF7B72">=&gt;</span><span style="color: #C9D1D9"> {</span></span>
<span class="line"><span style="color: #C9D1D9">  app</span></span>
<span class="line"><span style="color: #C9D1D9">    .</span><span style="color: #D2A8FF">use</span><span style="color: #C9D1D9">(vuetify)</span></span>
<span class="line"><span style="color: #C9D1D9">    .</span><span style="color: #D2A8FF">use</span><span style="color: #C9D1D9">(HistoireVuetifyDS);</span></span>
<span class="line"><span style="color: #C9D1D9">})</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></code></pre>
<hr>
<h3 id="histoire-configuration-file" tabindex="-1">Histoire Configuration File <a class="header-anchor" href="#histoire-configuration-file" aria-hidden="true">#</a></h3>
<p>The plugin is aimed to be customisable and but will be merged with the defaults.</p>
<pre><code class="language-typescript"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">typescript</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #8B949E">/** histoire.setup.ts */</span></span>
<span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> { defineConfig } </span><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;histoire&quot;</span><span style="color: #C9D1D9">;</span></span>
<span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> { HstVue } </span><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&quot;@histoire/plugin-vue&quot;</span><span style="color: #C9D1D9">;</span></span>
<span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> { vuetifyDesignSystem } </span><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;../dist/design&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #FF7B72">export</span><span style="color: #FFA657"> </span><span style="color: #FF7B72">default</span><span style="color: #FFA657"> </span><span style="color: #D2A8FF">defineConfig</span><span style="color: #FFA657">({</span></span>
<span class="line"><span style="color: #FFA657">  </span><span style="color: #C9D1D9">setupFile: </span><span style="color: #A5D6FF">&#39;histoire.setup.ts&#39;</span><span style="color: #FFA657">,</span></span>
<span class="line"><span style="color: #FFA657">  </span><span style="color: #C9D1D9">routerMode: </span><span style="color: #A5D6FF">&quot;hash&quot;</span><span style="color: #FFA657">,</span></span>
<span class="line"><span style="color: #FFA657">  </span><span style="color: #C9D1D9">plugins: [</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #D2A8FF">HstVue</span><span style="color: #C9D1D9">(), </span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #D2A8FF">vuetifyDesignSystem</span><span style="color: #C9D1D9">({</span></span>
<span class="line"><span style="color: #C9D1D9">      configFile: __dirname </span><span style="color: #FF7B72">+</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;/plugins/vuetify/options.ts&#39;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">    })</span></span>
<span class="line"><span style="color: #C9D1D9">  ]</span><span style="color: #FFA657">,  </span></span>
<span class="line"><span style="color: #FFA657">})</span><span style="color: #C9D1D9">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></code></pre>
<p>The flow is pretty simple.
Vuetify -&gt; Template -&gt; Variants
eg. Vuetify -&gt; Material Colors -&gt; Primary, Secondary etc.</p>
<p>Example of default configuration (this is the same as doing above):</p>
<pre><code class="language-typescript"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">typescript</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #D2A8FF">vuetifyDesignSystem</span><span style="color: #C9D1D9">({</span></span>
<span class="line"><span style="color: #C9D1D9">    configFile: __dirname </span><span style="color: #FF7B72">+</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;/plugins/vuetify/options.ts&#39;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">    sample: </span><span style="color: #A5D6FF">&#39;This is some sample text.&#39;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">    playground:{</span></span>
<span class="line"><span style="color: #C9D1D9">        title: </span><span style="color: #A5D6FF">&quot;Playground&quot;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">        classes: </span><span style="color: #A5D6FF">&quot;mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100&quot;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">        divider: {</span></span>
<span class="line"><span style="color: #C9D1D9">            show: </span><span style="color: #79C0FF">true</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">            classes: </span><span style="color: #A5D6FF">&quot;ma-4&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">        },</span></span>
<span class="line"><span style="color: #C9D1D9">    },</span></span>
<span class="line"><span style="color: #C9D1D9">    display: {</span></span>
<span class="line"><span style="color: #C9D1D9">        icon: </span><span style="color: #A5D6FF">&#39;mdi:vuetify&#39;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">        title: </span><span style="color: #A5D6FF">&#39;Vuetify&#39;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">        group: </span><span style="color: #A5D6FF">&#39;design-system&#39;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">        layout: { type: </span><span style="color: #A5D6FF">&#39;single&#39;</span><span style="color: #C9D1D9">, iframe: </span><span style="color: #79C0FF">true</span><span style="color: #C9D1D9"> },</span></span>
<span class="line"><span style="color: #C9D1D9">        responsiveDisabled: </span><span style="color: #79C0FF">false</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">    },</span></span>
<span class="line"><span style="color: #C9D1D9">    templates: {</span></span>
<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #8B949E">/** Complete list of Templates and Variants to load. */</span></span>
<span class="line"><span style="color: #C9D1D9">    }</span></span>
<span class="line"><span style="color: #C9D1D9">})</span></span>
<span class="line"></span></code></pre></div></code></pre>
<hr>
`;
const frontmatter = { "group": "getting-started", "icon": "carbon:insert-syntax", "title": "Installation" };
const relativePath = "src/docs/GettingStarted/Installation.story.md";
export {
  frontmatter,
  html,
  relativePath
};
