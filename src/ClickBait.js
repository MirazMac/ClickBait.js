import Generator from './Generator.js';


document.addEventListener('DOMContentLoaded', function () {
    const generator = new Generator();
    const slots = document.querySelectorAll('[data-bait-slot]');
    // Append CSS to head
    const cssString = `[data-bait-slot] h3,[data-bait-slot] h4{margin:0 0 .2rem;font-weight:var(--bait-headline-weight,700)}[data-bait-slot]{display:flex;background:var(--bait-bg,#f8f8f8);color:var(--bait-color,#000);border:var(--bait-border-width,2px) var(--bait-border-style,dashed) var(--bait-border-color,#bbb);position:relative;min-height:100px;width:100%;height:100%}[data-bait-slot]:hover{text-decoration:var(--bait-underline-color,#2196f3) underline;background:var(--bait-hover-bg,#ddd)}[data-bait-slot] h3{font-size:var(--bait-headline-size, 1.4rem);line-height:var(--bait-headline-height, 1.5rem)}[data-bait-slot] h4{font-size:var(--bait-sponsor-size, .8rem);color:var(--bait-sponsor-color,#2196f3)}[data-bait-slot] h5{margin:0;font-size:var(--bait-domain-size, .8rem);color:var(--bait-domain-color,#274682);font-weight:var(--bait-domain-weight,500)}[data-bait-slot] .bait-img{max-width:100px;height:auto;position:relative}[data-bait-slot] .bait-img img{height:100%;width:100%;object-fit:cover;background:#fff}[data-bait-slot] .bait-content{padding:.5rem;flex:1}[data-bait-slot] .bait-icon{height:13px;width:13px;text-align:center;position:absolute;right:2px;padding:1px;top:2px;background:var(--bait-icon-bg,#fff)}[data-bait-slot] .bait-logo{font-weight:700;font-size:10px;position:absolute;right:2px;padding:1px;bottom:2px;display:inline-block;z-index:10;color:#bbb}[data-bait-slot] .bait-link{position:absolute;left:0;top:0;height:100%;width:100%}[data-bait-slot=column]{flex-direction:column}[data-bait-slot=column] .bait-img{max-width:100%;height:150px}@media only screen and (max-width:767px){[data-bait-slot]{flex-direction:column}[data-bait-slot] .bait-img{max-width:100%;height:150px}[data-bait-slot] h3{font-size:var(--bait-headline-size-sm, 1.2rem);line-height:var(--bait-headline-height-sm, 1.3rem)}}`;

    if (window.CLICKBAIT_JS_NO_CSS === undefined) {
      const styleElement = document.createElement('style');
      styleElement.appendChild(document.createTextNode(cssString));
      document.head.appendChild(styleElement);
    }

  /**
     *
     * @param {HTMLElement} element
     */
    const insertBait = (element) => {
        const headline = generator.getHeadline();
        const href = element.hasAttribute('data-bait-href') ? element.getAttribute('data-bait-href') : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        element.innerHTML = `<div class="bait-img"><img src="https://image.pollinations.ai/prompt/${encodeURIComponent(headline)}?width=500&height=500" loading="lazy" alt=""/></div><div class="bait-content">
<h4>SPONSORED</h4>
<h3>${headline}</h3><h5>${generator.getDomain()}</h5><a class="bait-link" rel="external" target="_blank" href="${href}"></a>
<svg viewBox=".2 0 19.4 20" class="bait-icon" xmlns="http://www.w3.org/2000/svg"><path d="m2.2 20c1 0 1.7-.5 2.4-.9.6-.3 1.2-.7 1.9-1 3.2-1.7 6.4-3.5 9.6-5.3 1-.5 2.3-1 3-1.9.2-.3.5-.7.4-1.2-.3-1.1-1.7-1.5-2.6-2-2.2-1.2-4.5-2.5-6.7-3.7-.8-.5-2-1.4-3-.7-.4.2-.6.4-.7.7-.1.4 0 .9 0 1.3v3.2c0 .9-.1 1.6.5 2 .2.1.6.2.9.1 1-.4.7-2.2.7-3.6v-1.1c1.7.9 3.4 1.8 5.1 2.6.6.3 1.6.6 1.8 1.4.2.9-1.7 1.6-2.3 1.9l-6.9 3.9c-.5.3-1.8 1.3-2.6 1-.3-.1-.5-.4-.5-.6-.1-.4-.1-1-.1-1.5v-3.2-5.4c0-.8-.1-1.8.2-2.3.7-1 2.3.8 2.8-.8.1-.4-.1-.8-.3-1-.4-.6-2.2-1.5-2.9-1.7-.2-.1-.7-.2-1-.2-1.7.3-1.3 3-1.3 5v9.9c0 1.5-.2 3.5.4 4.4.3.5.6.5 1.2.7zm5.2-6.5c1.5 0 1.6-1.9.2-2.2-.8-.1-1.4.7-1.2 1.4.2.5.5.6 1 .8z" fill="#00aecd"/></svg>
<a class="bait-logo" href="https://github.com/MirazMac/ClickBait.js" target="_blank">clickbait.js</a>
</div>`;
    };

    [].slice.call(slots).map(insertBait);


    const mutationCallback = function (mutationsList, observer) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                // Nodes have been added or removed
                const addedNodes = mutation.addedNodes;

                [].slice.call(addedNodes).map((node) => {
                    if (!node instanceof HTMLElement) {
                      return;
                    }

                    if (node.hasAttribute('data-bait-slot')) {
                      insertBait(node);
                      return;
                    }

                    [].slice.call(node.querySelectorAll('[data-bait-slot]')).map(insertBait);
                });
            }
        }
    };

    const observerConfig = {childList: true, subtree: true};
    const observer = new MutationObserver(mutationCallback);

    if (window.CLICKBAIT_JS_NO_OBSERVER === undefined) {
      observer.observe(document.body, observerConfig);
    }
});
