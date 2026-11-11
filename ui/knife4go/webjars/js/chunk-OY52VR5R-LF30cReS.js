import{_ as g,l as k,R as H,M as B,A as q,X as G,d as U,j,c as K}from"./mermaid.core-D10PtP71.js";var A="",M="",O="",D=[],b=new Map,v=g(e=>j(e,K()),"sanitizeText"),y=g(e=>{switch(e.type){case"terminal":return{...e,value:v(e.value)};case"nonterminal":return{...e,name:v(e.name)};case"sequence":return{...e,elements:e.elements.map(y)};case"choice":return{...e,alternatives:e.alternatives.map(y)};case"optional":return{...e,element:y(e.element)};case"repetition":return{...e,element:y(e.element),separator:e.separator?y(e.separator):void 0};case"special":return{...e,text:v(e.text)}}},"sanitizeAstNode"),J=g(()=>{A="",M="",O="",D.length=0,b.clear(),q(),k.debug("[Railroad] Database cleared")},"clear"),Y=g(e=>{A=v(e),k.debug("[Railroad] Title set:",e)},"setTitle"),P=g(()=>A,"getTitle"),Q=g(e=>{const i={...e,name:v(e.name),definition:y(e.definition),comment:e.comment?v(e.comment):void 0};k.debug("[Railroad] Adding rule:",i.name),b.has(i.name)&&k.warn(`[Railroad] Rule '${i.name}' is already defined. Overwriting.`),D.push(i),b.set(i.name,i)},"addRule"),Z=g(()=>D,"getRules"),V=g(e=>b.get(e),"getRule"),ee=g(e=>{M=v(e).replace(/^\s+/g,""),k.debug("[Railroad] Accessibility title set:",e)},"setAccTitle"),te=g(()=>M,"getAccTitle"),re=g(e=>{O=v(e).replace(/\n\s+/g,`
`),k.debug("[Railroad] Accessibility description set:",e)},"setAccDescription"),ie=g(()=>O,"getAccDescription"),ne=Y,ae=P,oe={clear:J,setTitle:Y,getTitle:P,addRule:Q,getRules:Z,getRule:V,setAccTitle:ee,getAccTitle:te,setAccDescription:re,getAccDescription:ie,setDiagramTitle:ne,getDiagramTitle:ae},T={compactMode:!1,padding:10,verticalSeparation:8,horizontalSeparation:10,arcRadius:10,fontSize:14,fontFamily:"monospace",terminalFill:"#FFFFC0",terminalStroke:"#000000",terminalTextColor:"#000000",nonTerminalFill:"#FFFFFF",nonTerminalStroke:"#000000",nonTerminalTextColor:"#000000",lineColor:"#000000",strokeWidth:2,markerFill:"#000000",commentFill:"#E8E8E8",commentStroke:"#888888",commentTextColor:"#666666",specialFill:"#F0E0FF",specialStroke:"#8800CC",ruleNameColor:"#000066",showMarkers:!0,markerRadius:5},le=/^#(?:[\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$|^(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch)\([\d\s%+,./-]+\)$|^[a-z]+$/i,se=/^[\w "',.-]+$/,de=new Set(["compactMode","padding","verticalSeparation","horizontalSeparation","arcRadius","fontSize","fontFamily","terminalFill","terminalStroke","terminalTextColor","nonTerminalFill","nonTerminalStroke","nonTerminalTextColor","lineColor","strokeWidth","markerFill","commentFill","commentStroke","commentTextColor","specialFill","specialStroke","ruleNameColor","showMarkers","markerRadius"]),L=g(e=>e?Object.keys(e).every(i=>i==="railroad"||de.has(i)):!1,"isRailroadStyleOptions"),ce=g(e=>e?"railroad"in e&&e.railroad?e.railroad:L(e)?e:{}:{},"extractRailroadOverrides"),me=g(e=>{if(!e||L(e))return{};const{railroad:i,svgId:o,theme:n,look:t,...r}=e;return r},"extractThemeOverrides"),p=g((e,i)=>{if(typeof e!="string")return i;const o=e.trim();return le.test(o)?o:i},"sanitizeColorValue"),X=g((e,i)=>{if(typeof e!="string")return i;const o=e.trim();return se.test(o)?o:i},"sanitizeFontFamilyValue"),F=g((e,i)=>{const o=typeof e=="number"?e:typeof e=="string"?Number.parseFloat(e):Number.NaN;return Number.isFinite(o)&&o>=0?o:i},"sanitizeNumberValue"),he=g(e=>{const i=typeof e=="number"?e:typeof e=="string"?Number.parseFloat(e):Number.NaN;return Number.isFinite(i)&&i>0?i:void 0},"parseThemeFontSize"),pe=g(e=>{var n,t,r,a,c,l,s,h,u,m,x,d,f;const i=X(e.fontFamily,T.fontFamily),o=(n=he(e.fontSize))!=null?n:T.fontSize;return{...T,fontFamily:i,fontSize:o,terminalFill:p((t=e.secondBkg)!=null?t:e.secondaryColor,T.terminalFill),terminalStroke:p((r=e.secondaryBorderColor)!=null?r:e.lineColor,T.terminalStroke),terminalTextColor:p((a=e.secondaryTextColor)!=null?a:e.textColor,T.terminalTextColor),nonTerminalFill:p((c=e.mainBkg)!=null?c:e.background,T.nonTerminalFill),nonTerminalStroke:p((l=e.primaryBorderColor)!=null?l:e.lineColor,T.nonTerminalStroke),nonTerminalTextColor:p((s=e.primaryTextColor)!=null?s:e.textColor,T.nonTerminalTextColor),lineColor:p(e.lineColor,T.lineColor),markerFill:p(e.lineColor,T.markerFill),commentFill:p((h=e.labelBackground)!=null?h:e.tertiaryColor,T.commentFill),commentStroke:p((u=e.tertiaryBorderColor)!=null?u:e.lineColor,T.commentStroke),commentTextColor:p((m=e.tertiaryTextColor)!=null?m:e.textColor,T.commentTextColor),specialFill:p((x=e.tertiaryColor)!=null?x:e.secondaryColor,T.specialFill),specialStroke:p((d=e.tertiaryBorderColor)!=null?d:e.secondaryBorderColor,T.specialStroke),ruleNameColor:p((f=e.titleColor)!=null?f:e.textColor,T.ruleNameColor)}},"buildThemeDefaults"),E=g(e=>{var r,a,c,l;const i=B(),o={...G(),...(r=i.themeVariables)!=null?r:{},...me(e)},n=pe(o),t={...(a=i.railroad)!=null?a:{},...ce(e)};return{compactMode:(c=t.compactMode)!=null?c:n.compactMode,padding:F(t.padding,n.padding),verticalSeparation:F(t.verticalSeparation,n.verticalSeparation),horizontalSeparation:F(t.horizontalSeparation,n.horizontalSeparation),arcRadius:F(t.arcRadius,n.arcRadius),fontSize:F(t.fontSize,n.fontSize),fontFamily:X(t.fontFamily,n.fontFamily),terminalFill:p(t.terminalFill,n.terminalFill),terminalStroke:p(t.terminalStroke,n.terminalStroke),terminalTextColor:p(t.terminalTextColor,n.terminalTextColor),nonTerminalFill:p(t.nonTerminalFill,n.nonTerminalFill),nonTerminalStroke:p(t.nonTerminalStroke,n.nonTerminalStroke),nonTerminalTextColor:p(t.nonTerminalTextColor,n.nonTerminalTextColor),lineColor:p(t.lineColor,n.lineColor),strokeWidth:F(t.strokeWidth,n.strokeWidth),markerFill:p(t.markerFill,n.markerFill),commentFill:p(t.commentFill,n.commentFill),commentStroke:p(t.commentStroke,n.commentStroke),commentTextColor:p(t.commentTextColor,n.commentTextColor),specialFill:p(t.specialFill,n.specialFill),specialStroke:p(t.specialStroke,n.specialStroke),ruleNameColor:p(t.ruleNameColor,n.ruleNameColor),showMarkers:(l=t.showMarkers)!=null?l:n.showMarkers,markerRadius:F(t.markerRadius,n.markerRadius)}},"buildRailroadStyleOptions"),Te=g(e=>{const{fontFamily:i,fontSize:o,terminalFill:n,terminalStroke:t,terminalTextColor:r,nonTerminalFill:a,nonTerminalStroke:c,nonTerminalTextColor:l,lineColor:s,strokeWidth:h,markerFill:u,commentFill:m,commentStroke:x,commentTextColor:d,specialFill:f,specialStroke:z,ruleNameColor:S}=E(e);return`
  .railroad-diagram {
    font-family: ${i};
    font-size: ${o}px;
  }

  .railroad-terminal rect {
    fill: ${n};
    stroke: ${t};
    stroke-width: ${h}px;
  }

  .railroad-terminal text {
    fill: ${r};
    font-family: ${i};
    font-size: ${o}px;
    text-anchor: middle;
    dominant-baseline: middle;
  }

  .railroad-nonterminal rect {
    fill: ${a};
    stroke: ${c};
    stroke-width: ${h}px;
  }

  .railroad-nonterminal text {
    fill: ${l};
    font-family: ${i};
    font-size: ${o}px;
    text-anchor: middle;
    dominant-baseline: middle;
  }

  .railroad-line {
    stroke: ${s};
    stroke-width: ${h}px;
    fill: none;
  }

  .railroad-start circle,
  .railroad-end circle {
    fill: ${u};
  }

  .railroad-comment ellipse {
    fill: ${m};
    stroke: ${x};
    stroke-width: ${h}px;
  }

  .railroad-comment text {
    fill: ${d};
    font-style: italic;
    font-family: ${i};
    font-size: ${o}px;
    text-anchor: middle;
    dominant-baseline: middle;
  }

  .railroad-special rect {
    fill: ${f};
    stroke: ${z};
    stroke-width: ${h}px;
    stroke-dasharray: 5,3;
  }

  .railroad-special text {
    fill: ${l};
    font-family: ${i};
    font-size: ${o}px;
    text-anchor: middle;
    dominant-baseline: middle;
  }

  .railroad-rule-name {
    font-weight: bold;
    fill: ${S};
    font-family: ${i};
    font-size: ${o}px;
  }

  .railroad-group {
    /* Grouping container, no specific styles */
  }
`},"getStyles"),R,w=(R=class{constructor(){this.d=""}moveTo(i,o){return this.d+=`M ${i} ${o} `,this}lineTo(i,o){return this.d+=`L ${i} ${o} `,this}horizontalTo(i){return this.d+=`H ${i} `,this}verticalTo(i){return this.d+=`V ${i} `,this}arcTo(i,o,n,t,r,a,c){return this.d+=`A ${i} ${o} ${n} ${t?1:0} ${r?1:0} ${a} ${c} `,this}build(){return this.d.trim()}},g(R,"PathBuilder"),R),$,ue=($=class{constructor(i,o=E()){this.textCache=new Map,this.svg=i,this.config=o}measureText(i){if(this.textCache.has(i))return this.textCache.get(i);const o=this.svg.append("text").attr("font-family",this.config.fontFamily).attr("font-size",this.config.fontSize).text(i),n=o.node().getBBox(),t={width:n.width,height:n.height};return o.remove(),this.textCache.set(i,t),t}renderTerminal(i,o){const n=this.measureText(o),t=n.width+this.config.padding*2,r=n.height+this.config.padding*2,a=i.append("g").attr("class","railroad-terminal");return a.append("rect").attr("x",0).attr("y",0).attr("width",t).attr("height",r).attr("rx",10).attr("ry",10),a.append("text").attr("x",t/2).attr("y",r/2).text(o),{element:a.node(),dimensions:{width:t,height:r,up:r/2,down:r/2}}}renderNonTerminal(i,o){const n=this.measureText(o),t=n.width+this.config.padding*2,r=n.height+this.config.padding*2,a=i.append("g").attr("class","railroad-nonterminal");return a.append("rect").attr("x",0).attr("y",0).attr("width",t).attr("height",r),a.append("text").attr("x",t/2).attr("y",r/2).text(o),{element:a.node(),dimensions:{width:t,height:r,up:r/2,down:r/2}}}renderSequence(i,o){const n=o.map(s=>this.renderExpression(i,s));let t=0,r=0,a=0;for(const s of n)t+=s.dimensions.width,r=Math.max(r,s.dimensions.up),a=Math.max(a,s.dimensions.down);t+=(n.length-1)*this.config.horizontalSeparation;const c=i.append("g").attr("class","railroad-sequence");let l=0;for(let s=0;s<n.length;s++){const h=n[s],u=r-h.dimensions.up;if(c.node().appendChild(h.element).setAttribute("transform",`translate(${l}, ${u})`),s<n.length-1){const x=l+h.dimensions.width,d=x+this.config.horizontalSeparation,f=r;c.append("path").attr("class","railroad-line").attr("d",new w().moveTo(x,f).lineTo(d,f).build())}l+=h.dimensions.width+this.config.horizontalSeparation}return{element:c.node(),dimensions:{width:t,height:r+a,up:r,down:a}}}renderChoice(i,o){const n=o.map(m=>this.renderExpression(i,m));let t=0,r=0;for(const m of n)t=Math.max(t,m.dimensions.width),r+=m.dimensions.height;r+=(n.length-1)*this.config.verticalSeparation;const a=this.config.arcRadius,c=a*4,l=t+c,s=i.append("g").attr("class","railroad-choice");let h=0;const u=r/2;for(const m of n){const x=h,d=x+m.dimensions.up,f=a*2+(t-m.dimensions.width)/2;s.node().appendChild(m.element).setAttribute("transform",`translate(${f}, ${x})`);const S=new w,C=d>u;d===u?S.moveTo(0,u).lineTo(f,d):S.moveTo(0,u).arcTo(a,a,0,!1,C,a,u+(C?a:-a)).lineTo(a,d-(C?a:-a)).arcTo(a,a,0,!1,!C,a*2,d).lineTo(f,d),s.append("path").attr("class","railroad-line").attr("d",S.build());const N=new w,_=f+m.dimensions.width,I=l-a*2;d===u?N.moveTo(_,d).lineTo(l,u):N.moveTo(_,d).lineTo(I,d).arcTo(a,a,0,!1,!C,l-a,d+(C?-a:a)).lineTo(l-a,u+(C?a:-a)).arcTo(a,a,0,!1,C,l,u),s.append("path").attr("class","railroad-line").attr("d",N.build()),h+=m.dimensions.height+this.config.verticalSeparation}return{element:s.node(),dimensions:{width:l,height:r,up:u,down:r-u}}}renderOptional(i,o){const n=this.renderExpression(i,o),t=this.config.arcRadius,r=t*2,a=n.dimensions.width+t*4,c=n.dimensions.height+r,l=i.append("g").attr("class","railroad-optional"),s=t*2,h=r;l.node().appendChild(n.element).setAttribute("transform",`translate(${s}, ${h})`);const m=h+n.dimensions.up,x=new w().moveTo(0,m).lineTo(t*2,m);l.append("path").attr("class","railroad-line").attr("d",x.build());const d=new w().moveTo(s+n.dimensions.width,m).lineTo(a,m);l.append("path").attr("class","railroad-line").attr("d",d.build());const f=new w().moveTo(0,m).arcTo(t,t,0,!1,!1,t,m-t).lineTo(t,t).arcTo(t,t,0,!1,!0,t*2,0).lineTo(a-t*2,0).arcTo(t,t,0,!1,!0,a-t,t).lineTo(a-t,m-t).arcTo(t,t,0,!1,!1,a,m);return l.append("path").attr("class","railroad-line").attr("d",f.build()),{element:l.node(),dimensions:{width:a,height:c,up:m,down:c-m}}}renderRepetition(i,o,n){const t=this.renderExpression(i,o),r=this.config.arcRadius,a=r*2,c=t.dimensions.width+r*4,l=n===0,s=t.dimensions.height+a+(l?a:0),h=i.append("g").attr("class","railroad-repetition"),u=r*2,m=l?a:0;h.node().appendChild(t.element).setAttribute("transform",`translate(${u}, ${m})`);const d=m+t.dimensions.up;h.append("path").attr("class","railroad-line").attr("d",new w().moveTo(0,d).lineTo(r*2,d).build()),h.append("path").attr("class","railroad-line").attr("d",new w().moveTo(u+t.dimensions.width,d).lineTo(c,d).build());const f=m+t.dimensions.height+r,z=new w().moveTo(u+t.dimensions.width,d).arcTo(r,r,0,!1,!0,u+t.dimensions.width+r,d+r).lineTo(u+t.dimensions.width+r,f).arcTo(r,r,0,!1,!0,u+t.dimensions.width,f+r).lineTo(r*2,f+r).arcTo(r,r,0,!1,!0,r,f).lineTo(r,d+r).arcTo(r,r,0,!1,!0,r*2,d);if(h.append("path").attr("class","railroad-line").attr("d",z.build()),l){const S=new w().moveTo(0,d).arcTo(r,r,0,!1,!1,r,d-r).lineTo(r,r).arcTo(r,r,0,!1,!0,r*2,0).lineTo(c-r*2,0).arcTo(r,r,0,!1,!0,c-r,r).lineTo(c-r,d-r).arcTo(r,r,0,!1,!1,c,d);h.append("path").attr("class","railroad-line").attr("d",S.build())}return{element:h.node(),dimensions:{width:c,height:s,up:d,down:s-d}}}renderSpecial(i,o){const n=this.measureText("? "+o+" ?"),t=n.width+this.config.padding*2,r=n.height+this.config.padding*2,a=i.append("g").attr("class","railroad-special");return a.append("rect").attr("x",0).attr("y",0).attr("width",t).attr("height",r),a.append("text").attr("x",t/2).attr("y",r/2).text("? "+o+" ?"),{element:a.node(),dimensions:{width:t,height:r,up:r/2,down:r/2}}}renderExpression(i,o){switch(o.type){case"terminal":return this.renderTerminal(i,o.value);case"nonterminal":return this.renderNonTerminal(i,o.name);case"sequence":return this.renderSequence(i,o.elements);case"choice":return this.renderChoice(i,o.alternatives);case"optional":return this.renderOptional(i,o.element);case"repetition":return this.renderRepetition(i,o.element,o.min);case"special":return this.renderSpecial(i,o.text);default:throw new Error(`Unknown node type: ${o.type}`)}}renderRule(i,o){const n=this.svg.append("g").attr("class","railroad-rule").attr("transform",`translate(0, ${o})`),t=i.name+" =",r=this.measureText(t).width+20,a=r+20,c=n.append("g"),l=this.renderExpression(c,i.definition),s=Math.max(20,l.dimensions.up),h=s-l.dimensions.up;return c.attr("transform",`translate(${a}, ${h})`),n.append("g").attr("class","railroad-rule-name-group").append("text").attr("class","railroad-rule-name").attr("x",0).attr("y",s).text(t),n.append("g").attr("class","railroad-start").append("circle").attr("cx",r).attr("cy",s).attr("r",this.config.markerRadius),n.append("g").attr("class","railroad-end").append("circle").attr("cx",a+l.dimensions.width+10).attr("cy",s).attr("r",this.config.markerRadius),n.append("path").attr("class","railroad-line").attr("d",new w().moveTo(r+this.config.markerRadius,s).lineTo(a,s).build()),n.append("path").attr("class","railroad-line").attr("d",new w().moveTo(a+l.dimensions.width,s).lineTo(a+l.dimensions.width+10-this.config.markerRadius,s).build()),{height:Math.max(40,h+l.dimensions.height+this.config.padding*2),width:a+l.dimensions.width+10+this.config.markerRadius}}renderDiagram(i){let o=this.config.padding,n=0;for(const t of i){const r=this.renderRule(t,o);o+=r.height+this.config.verticalSeparation,n=Math.max(n,r.width)}return{width:n+this.config.padding*2,height:o+this.config.padding}}},g($,"RailroadRenderer"),$),W=g((e,i,o)=>{U(e,i.height,i.width,o),e.attr("viewBox",`0 0 ${i.width} ${i.height}`)},"configureRailroadSvgSize"),ge=g((e,i,o)=>{var n;k.debug(`[Railroad] Rendering diagram
`+e);try{const t=H(i);t.attr("class","railroad-diagram");const r=B().railroad,a=(n=r==null?void 0:r.useMaxWidth)!=null?n:!0,c=oe.getRules();if(k.debug(`[Railroad] Rendering ${c.length} rules`),c.length===0){k.warn("[Railroad] No rules to render"),W(t,{height:100,width:200},a);return}const s=new ue(t,E()).renderDiagram(c);W(t,s,a),k.debug("[Railroad] Render complete")}catch(t){throw k.error("[Railroad] Render error:",t),t}},"draw"),xe={draw:ge};export{oe as d,Te as g,xe as r};
