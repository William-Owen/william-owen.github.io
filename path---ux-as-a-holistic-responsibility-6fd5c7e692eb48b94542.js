webpackJsonp([0xcd2f8ebbadac],{350:function(e,a){e.exports={data:{markdownRemark:{html:"<p>User experience (UX) isn't a role; it's a responsibility shared across all aspects of a project.</p>\n<p>Slow or poorly designed databases can be just as likely to lead to bad users experiences as a poor page layout. Fantastic, well written, web products with great user interfaces (UI) will lose customers quickly if the servers go down frequently for updates without resiliency. Similarly, a well-designed backend and frontend can't always fix lousy user journey design or clumsy application logic.</p>\n<p>Solutions to user experience challenges can be found across the whole application; from application flow, delivery architecture and backend services to the use of language, heuristics, and colours within individual UI elements. Taking the holistic project approach means finding the right solution to a problem across the whole product.</p>\n<p>Ensuring that your product delivers a great user experience requires every aspect of the product to be sharing the same vision of success and working towards it as a team of peers.</p>\n<p>Having a good working knowledge of the full application platform and architecture as well as business analysis and project planning experience has allowed me to help build great products no matter what my specific role on a project might be. It helps me work with new teams quickly, support others and communicate effectively. Above all, it helps me find solutions across the whole project along with the rest of the team, deliver a great user experience.</p>\n<h2>Caring about the details</h2>\n<p>In the past, I have been lucky enough to work directly with Google's site optimisation teams. They are passionate about identifying the tiny changes that have tremendous impact. The had lots of examples of real-world optimisations such as removing a word from label above a registration resulting in a 15% increase in sign-ups. Also, changing the colour of a 'Buy button' that leads to 4% increase in conversion for an e-commerce platform.</p>\n<p>Knowing the impact of small, low-cost changes has been hugely valuable to my work an help me appreciate the value of the little details.</p>",frontmatter:{date:"December 02, 2017",path:"/ux-as-a-holistic-responsibility",tags:["User-Experience"],title:"User experience (UX) isn't a role; it's a responsibility "}}},pathContext:{prev:{excerpt:"I recently came across this fantastic project by  Dan Leech  called Simple Icons. The project aim to create free SVG icons for popular brands. Having all these standardised and freely available in one place is a fantastic idea and I would love to see…",html:'<p>I recently came across this fantastic project by <a href="https://twitter.com/bathtype">Dan Leech</a> called Simple Icons. The project aim to create free SVG icons for popular brands. Having all these standardised and freely available in one place is a fantastic idea and I would love to see this project get more support.</p>\n<p>You can clone <a href="https://github.com/simple-icons/simple-icons">Simple Icons Git Hub project</a> or you can see all the icons on there site <a href="SimpleIcons.org">SimpleIcons.org</a> and just download the icons you need.</p>\n<h2>CDN Usage</h2>\n<p>A really nice bonus is that the icons can be used directly from a CDN; JSDelivr or Unpkg. Simply use URL for the CDN:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>32<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>32<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/stackoverflow.svg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>32<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>32<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://unpkg.com/simple-icons@latest/icons/stackoverflow.svg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<h2>Adding it to React</h2>\n<p>I used the CDN links and the (react-svg)[https://github.com/atomic-app/react-svg] React component to inject the icons into my page.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">\'react-dom\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> ReactSVG <span class="token keyword">from</span> <span class="token string">\'react-svg\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>ReactSVG\n    path<span class="token operator">=</span><span class="token string">"https://unpkg.com/simple-icons@latest/icons/stackoverflow.svg"</span>\n    className<span class="token operator">=</span><span class="token string">"svg"</span>\n    wrapperClassName<span class="token operator">=</span><span class="token string">"svg-wrapper"</span>\n  <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.Root\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>See it in action</h3>\n<p>You can see this all working in the footer of this site :)</p>',id:"/Users/neotoxic/SpiderOak Backup/Projects/William Owen UL Limited/William-Owen.github.io/src/posts/simple-icons/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2017-12-03T00:00:00.000Z",path:"/simple-icons-project",tags:["Resource","Icons","React"],title:"Simple Icons project for great SVG Icons"}},next:{excerpt:'As a web developer, I should have a website. There is that old expression  "Eat Your Own Dog Food" , and I would be suspicious of a web developer who tried to sell me their services who didn\'t have one. As a web designer and developer, I should…',html:'<p>As a web developer, I should have a website. There is that old expression <a href="https://en.wikipedia.org/wiki/Eating_your_own_dog_food">"Eat Your Own Dog Food"</a>, and I would be suspicious of a web developer who tried to sell me their services who didn\'t have one.</p>\n<p>As a web designer and developer, I should really use the latest tech and have implement lots of lovely modern design with great features to show off what I can do. However \'the latest tech\' is continuously evolving as new ideas, techniques and platforms become available. Design trends are both fleeting and subjective. I love web design and development there is no one style of design or technical platform that I think I could settle on being the one that fundamentally defines my company or me.</p>\n<p>The site would need to represent the pinnacle of my creative and design ability while building on the shifting sands of the modern web development technique - the site was simply impossible.</p>\n<p>But that\'s no good. So instead, <a href="https://en.wikipedia.org/wiki/Release_early,_release_often">Release early, release often</a></p>\n<p>So here is a new site; it\'s super simple, and crazy fast. It\'s a <a href="https://davidwalsh.name/introduction-static-site-generators">static site</a> built using <a href="https://reactjs.org/">React.JS</a> and <a href="https://www.gatsbyjs.org/">Gatsby.js</a> and hosted on <a href="https://pages.github.com/">Github Pages</a>.</p>\n<p>I stopped worrying about it showing what I could do and was happy with it just to be live. Keep things simple. Keep it clean. Keep it elegant.</p>',id:"/Users/neotoxic/SpiderOak Backup/Projects/William Owen UL Limited/William-Owen.github.io/src/posts/eating-my-own-dog-food/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2017-07-12T00:00:00.000Z",path:"/eating-my-own-dog-food",tags:["Website"],title:"Creating my own website and 'Eating my own dog food'"}}}}}});
//# sourceMappingURL=path---ux-as-a-holistic-responsibility-6fd5c7e692eb48b94542.js.map