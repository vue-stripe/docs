import{_ as r,M as e,p as d,q as k,R as n,t as s,N as a,W as t,a3 as o}from"./framework-2661be7f.js";const h={},v={id:"checkout",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#checkout","aria-hidden":"true"},"#",-1),b=o('<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>Install from <strong>Yarn</strong> or <strong>NPM</strong>.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p><strong>Checkout</strong> is now <code>deprecated</code>. You can still use it, but better to move to either <strong>Payment Element</strong> or <strong>Link Authentication Element</strong>. While this is still supported in Stripe and Vue Stripe, lesser priority for maintenance will be spent on this module.</p></div>',3),g=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` @vue-stripe/vue-stripe
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` @vue-stripe/vue-stripe
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),f=o(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>In version 5 <strong>Checkout</strong> is now a composable unlike in previous versions where <strong>Checkout</strong> is a vue component.</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useCheckout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue-stripe/vue-stripe&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token constant">PUBLISHABLE_KEY</span> <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PUBLISHABLE_KEY</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> redirectToCheckout <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCheckout</span><span class="token punctuation">(</span><span class="token constant">PUBLISHABLE_KEY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">onCheckout</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> payload <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token comment">// See https://stripe.com/docs/js/deprecated/redirect_to_checkout#stripe_checkout_redirect_to_checkout-options</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">await</span> <span class="token function">redirectToCheckout</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> Import</h3><p>Use named import to import the Checkout composable.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useCheckout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue-stripe/vue-stripe&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="initialize" tabindex="-1"><a class="header-anchor" href="#initialize" aria-hidden="true">#</a> Initialize</h3><p>Initialize Stripe using your <strong>Publishable Key</strong>.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">PUBLISHABLE_KEY</span> <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PUBLISHABLE_KEY</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> redirectToCheckout <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCheckout</span><span class="token punctuation">(</span><span class="token constant">PUBLISHABLE_KEY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9),y=o(`<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Always keep your publishable key or any other client secrets to <code>p<wbr>rocess.env</code>. Not only it is safer that way, it will also be easier to maintain.</p></div><h3 id="redirect-to-checkout" tabindex="-1"><a class="header-anchor" href="#redirect-to-checkout" aria-hidden="true">#</a> Redirect to Checkout</h3><p>Prepare the payload for the checkout and call the async <code>redirectoToCheckout</code> method.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">onCheckout</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> payload <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token function">redirectToCheckout</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),w={href:"https://stripe.com/docs/js/deprecated/redirect_to_checkout#stripe_checkout_redirect_to_checkout-options",target:"_blank",rel:"noopener noreferrer"};function C(x,I){const p=e("Badge"),c=e("CodeGroupItem"),i=e("CodeGroup"),l=e("RouterLink"),u=e("ExternalLinkIcon");return d(),k("div",null,[n("h1",v,[m,s(" Checkout "),a(p,{type:"tip",text:"deprecated",vertical:"top"})]),b,a(i,null,{default:t(()=>[a(c,{title:"Yarn"},{default:t(()=>[g]),_:1}),a(c,{title:"NPM"},{default:t(()=>[_]),_:1})]),_:1}),f,n("p",null,[s("See also: "),a(l,{to:"/faqs/getting-the-publishable-key.html"},{default:t(()=>[s("Getting the Publishable Key")]),_:1})]),y,n("p",null,[s("See all the "),n("a",w,[s("checkout options here"),a(u)]),s(".")])])}const E=r(h,[["render",C],["__file","checkout.html.vue"]]);export{E as default};
