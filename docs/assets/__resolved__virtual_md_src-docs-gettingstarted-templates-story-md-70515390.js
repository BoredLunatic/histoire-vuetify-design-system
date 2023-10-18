const html = `<h2 id="templates" tabindex="-1">Templates <a class="header-anchor" href="#templates" aria-hidden="true">#</a></h2>
<p>There are currently 4 types of Templates:</p>
<ol>
<li>Class Template: Styling that can be applied via a class</li>
<li>Color Template: Display color patches like vuetify</li>
<li>Component Template: Show 1 or more components</li>
<li>Display Template: Show a piece of data or computed property.</li>
</ol>
<p>If you only need to make small changes like hiding certain variants, go check out the examples as you don't need to know anything below besides <code>VuetifyTemplates</code>. The rest of the information is handy if you would like to make more complex updates to the data or even create your own.</p>
<p>Templates interface:</p>
<pre><code class="language-typescript"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">typescript</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #FF7B72">interface</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">VuetifyTemplates</span><span style="color: #C9D1D9"> {</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">blueprint</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">DisplayTemplate</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">typography</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">ClassTemplate</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #A5D6FF">&#39;border-radius&#39;</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">ClassTemplate</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #A5D6FF">&#39;material-colors&#39;</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">ColorTemplate</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">content</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">ComponentTemplate</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">display</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">ClassTemplate</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">elevation</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">ClassTemplate</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">float</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">ClassTemplate</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">overflow</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">ClassTemplate</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">sizing</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">ClassTemplate</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">spacing</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">ComponentTemplate</span></span>
<span class="line"><span style="color: #C9D1D9">}</span></span>
<span class="line"></span></code></pre></div></code></pre>
<p>Each type of template is extended from the <code>BaseTemplate</code></p>
<pre><code class="language-typescript"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">typescript</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #FF7B72">interface</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">BaseTemplate</span><span style="color: #C9D1D9"> {</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Type VariantDiscriminator is a string of either class, color, display, component and is just a quick reference */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">discriminator</span><span style="color: #FF7B72">:</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">VariantDiscriminator</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Should the template be shown/included in the story. */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">show</span><span style="color: #FF7B72">:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">boolean</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Display order in menu. */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">order</span><span style="color: #FF7B72">:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">number</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** This is the current state for the playground - automatically handled */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">state</span><span style="color: #FF7B72">:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">string</span><span style="color: #C9D1D9">[] </span><span style="color: #FF7B72">|</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">object</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Title object for styling titles */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">title</span><span style="color: #FF7B72">:</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">TemplateTitle</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Template icon for menu */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">icon</span><span style="color: #FF7B72">:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">string</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Template icon for menu */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">text</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">string</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Template container classes */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">classes</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">string</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Imports are used when you need to include a package import dynamically. */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">imports</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">string</span><span style="color: #C9D1D9">[]</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Variable definitions to be included dynamically. */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">variables</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">string</span><span style="color: #C9D1D9">[]</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Array of Variant Controls that should be included */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">controls</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">VariantControl</span><span style="color: #C9D1D9">[]</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Whether a description should be included or not. */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">description</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">VariantDescription</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** If true this will add d-inline-block class to each variant */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">inline</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">boolean</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Testing. */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">autoPropsDisabled</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">boolean</span></span>
<span class="line"><span style="color: #C9D1D9">   </span><span style="color: #8B949E">/** Included variants that should be included and shown for this template */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">variants</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">VariantClass</span><span style="color: #C9D1D9">[] </span><span style="color: #FF7B72">|</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">VariantColors</span><span style="color: #C9D1D9">[] </span><span style="color: #FF7B72">|</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">VariantDisplay</span><span style="color: #C9D1D9">[] </span><span style="color: #FF7B72">|</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">VariantComponent</span><span style="color: #C9D1D9">[]</span></span>
<span class="line"><span style="color: #C9D1D9">}</span></span>
<span class="line"></span></code></pre></div></code></pre>
<hr>
<h3 id="classtemplate-colortemplate" tabindex="-1">ClassTemplate &amp; ColorTemplate <a class="header-anchor" href="#classtemplate-colortemplate" aria-hidden="true">#</a></h3>
<p>Both of these templates only extend the BaseTemplate for now. There are no additional attributes.</p>
<hr>
<h3 id="componenttemplate" tabindex="-1">ComponentTemplate <a class="header-anchor" href="#componenttemplate" aria-hidden="true">#</a></h3>
<pre><code class="language-typescript"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">typescript</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #FF7B72">export</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">interface</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">ComponentTemplate</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">extends</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">BaseTemplate</span><span style="color: #C9D1D9"> {</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Puts all component variants into cascading containers */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">containerized</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">boolean</span></span>
<span class="line"><span style="color: #C9D1D9">}</span></span>
<span class="line"></span></code></pre></div></code></pre>
<hr>
<h3 id="displaytemplate" tabindex="-1">DisplayTemplate <a class="header-anchor" href="#displaytemplate" aria-hidden="true">#</a></h3>
<pre><code class="language-typescript"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">typescript</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #FF7B72">export</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">interface</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">DisplayTemplate</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">extends</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">BaseTemplate</span><span style="color: #C9D1D9"> {</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Variable to included from the Variables list */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">variable</span><span style="color: #FF7B72">:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">string</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Link to be Displayed */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">link</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">VariantLink</span></span>
<span class="line"><span style="color: #C9D1D9">}</span></span>
<span class="line"></span></code></pre></div></code></pre>
<hr>
<h3 id="templatetitle" tabindex="-1">TemplateTitle <a class="header-anchor" href="#templatetitle" aria-hidden="true">#</a></h3>
<pre><code class="language-typescript"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">typescript</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #FF7B72">export</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">interface</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">TemplateTitle</span><span style="color: #C9D1D9"> {</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Styling classes to be included on this templates title */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">classes</span><span style="color: #FF7B72">:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">string</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Text to be displayed for this templates title */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">text</span><span style="color: #FF7B72">:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">string</span></span>
<span class="line"><span style="color: #C9D1D9">}</span></span>
<span class="line"></span></code></pre></div></code></pre>
<hr>
<h3 id="variantcontrol" tabindex="-1">VariantControl <a class="header-anchor" href="#variantcontrol" aria-hidden="true">#</a></h3>
<pre><code class="language-typescript"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">typescript</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #FF7B72">export</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">interface</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">VariantControl</span><span style="color: #C9D1D9"> {</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #8B949E">/** Component to be used as control */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">component</span><span style="color: #FF7B72">:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">string</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Which state variable should be used as it&#39;s model */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">model</span><span style="color: #FF7B72">:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">string</span></span>
<span class="line"><span style="color: #C9D1D9">   </span><span style="color: #8B949E">/** Label to display on component */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">label</span><span style="color: #FF7B72">:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">string</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Variable name for how to pull items. If not found in state, will check variants array from the template */</span><span style="color: #C9D1D9"> </span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">items</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">string</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Items attribute for displaying text  */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">itemsTitle</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">string</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Items attribute for the value  */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">itemsValue</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">string</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** object attribute for value  */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">playground</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">VariantControlPlayground</span></span>
<span class="line"><span style="color: #C9D1D9">}</span></span>
<span class="line"></span></code></pre></div></code></pre>
<hr>
<h3 id="variantcontrolplayground" tabindex="-1">VariantControlPlayground <a class="header-anchor" href="#variantcontrolplayground" aria-hidden="true">#</a></h3>
<pre><code class="language-typescript"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">typescript</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #FF7B72">export</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">interface</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">VariantControlPlayground</span><span style="color: #C9D1D9"> {</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #8B949E">/** Just a placeholder for now. */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">type</span><span style="color: #FF7B72">:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">string</span></span>
<span class="line"><span style="color: #C9D1D9">   </span><span style="color: #8B949E">/** Where to pull sample text from for playground */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">sample</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">string</span></span>
<span class="line"><span style="color: #C9D1D9">   </span><span style="color: #8B949E">/** Additional styling for Playground */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">classes</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">string</span></span>
<span class="line"><span style="color: #C9D1D9">}</span></span>
<span class="line"></span></code></pre></div></code></pre>
<hr>
<h3 id="variantlink" tabindex="-1">VariantLink <a class="header-anchor" href="#variantlink" aria-hidden="true">#</a></h3>
<pre><code class="language-typescript"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">typescript</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #FF7B72">export</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">interface</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">VariantLink</span><span style="color: #C9D1D9"> {</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #8B949E">/** Link url */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">url</span><span style="color: #FF7B72">:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">string</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Display text */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">text</span><span style="color: #FF7B72">:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">string</span><span style="color: #C9D1D9"> </span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Classes to style link */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">classes</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">string</span><span style="color: #C9D1D9"> </span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Set target to blank for new tab on click */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">blank</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">boolean</span><span style="color: #C9D1D9"> </span></span>
<span class="line"><span style="color: #C9D1D9">}</span></span>
<span class="line"></span></code></pre></div></code></pre>
<hr>
<h3 id="variantdescription" tabindex="-1">VariantDescription <a class="header-anchor" href="#variantdescription" aria-hidden="true">#</a></h3>
<pre><code class="language-typescript"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">typescript</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #FF7B72">export</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">interface</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">VariantDescription</span><span style="color: #C9D1D9"> {</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #8B949E">/** Text to be displayed in the description area */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">text</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">string</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Provide a link underneath the description */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">link</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">VariantLink</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Provide additional styling to the description section */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">classes</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">string</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Display a divider underneath the description */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">divider</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">VariantDivider</span></span>
<span class="line"><span style="color: #C9D1D9">}</span></span>
<span class="line"></span></code></pre></div></code></pre>
<hr>
<h3 id="variantdivider" tabindex="-1">VariantDivider <a class="header-anchor" href="#variantdivider" aria-hidden="true">#</a></h3>
<pre><code class="language-typescript"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">typescript</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #FF7B72">export</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">interface</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">VariantDivider</span><span style="color: #C9D1D9"> {</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #8B949E">/** Styling classes for the divider */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">classes</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">string</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #8B949E">/** Should the divider be shown */</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">show</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">boolean</span></span>
<span class="line"><span style="color: #C9D1D9">}</span></span>
<span class="line"></span></code></pre></div></code></pre>
`;
const frontmatter = { "group": "getting-started", "icon": "carbon:template", "title": "Templates" };
const relativePath = "src/docs/GettingStarted/Templates.story.md";
export {
  frontmatter,
  html,
  relativePath
};
