import{p as at}from"./chunk-JWPE2WC7-LZ5Wr0zv.js";import{g as rt,s as it,a as nt,b as st,t as ot,q as lt,_ as l,l as R,c as ct,O as dt,R as gt,U as pt,V,d as ht,A as ft,W as ut,P as mt}from"./mermaid.core-BQoYkumk.js";import{p as vt}from"./cynefin-EF2NZ3EQ-DjRQD4vg.js";import{o as xt}from"./d3-scale-dt9J1MbY.js";import"./doc-D4mARDbN.js";import"./vendor-vue-B9foJKPF.js";import"./vendor-antd-r9DXLsA-.js";import"./vendor-marked-Br4yleP7.js";import"./vendor-lodash-BcZsTO3x.js";var St=mt.pie,L={sections:new Map,showData:!1},b=L.sections,O=L.showData,wt=structuredClone(St),$t=l(()=>structuredClone(wt),"getConfig"),Ct=l(()=>{b=new Map,O=L.showData,ft()},"clear"),Dt=l(({label:t,value:r})=>{if(r<0)throw new Error(`"${t}" has invalid value: ${r}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);b.has(t)||(b.set(t,r),R.debug(`added new section: ${t}, with value: ${r}`))},"addSection"),yt=l(()=>b,"getSections"),Tt=l(t=>{O=t},"setShowData"),bt=l(()=>O,"getShowData"),q={getConfig:$t,clear:Ct,setDiagramTitle:lt,getDiagramTitle:ot,setAccTitle:st,getAccTitle:nt,setAccDescription:it,getAccDescription:rt,addSection:Dt,getSections:yt,setShowData:Tt,getShowData:bt},At=l((t,r)=>{at(t,r),r.setShowData(t.showData),t.sections.map(r.addSection)},"populateDb"),_t={parse:l(async t=>{const r=await vt("pie",t);R.debug(r),At(r,q)},"parse")},kt=l(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),zt=kt,Et=l(t=>{const r=[...t.values()].reduce((s,m)=>s+m,0),P=[...t.entries()].map(([s,m])=>({label:s,value:m})).filter(s=>s.value/r*100>=1);return ut().value(s=>s.value).sort(null)(P)},"createPieArcs"),Rt=l((t,r,P,F)=>{var I,U;R.debug(`rendering pie chart
`+t);const s=F.db,m=ct(),h=dt(s.getConfig(),m.pie),H=40,i=18,c=4,C=450,x=C,A=gt(r),D=A.append("g");D.attr("transform","translate("+x/2+","+C/2+")");const{themeVariables:n}=m;let[S]=pt(n.pieOuterStrokeWidth);S!=null||(S=2);const X=h.legendPosition,M=h.textPosition,Z=h.donutHole>0&&h.donutHole<=.9?h.donutHole:0,f=Math.min(x,C)/2-H,j=V().innerRadius(Z*f).outerRadius(f),J=V().innerRadius(f*M).outerRadius(f*M),w=D.append("g");w.append("circle").attr("cx",0).attr("cy",0).attr("r",f+S/2).attr("class","pieOuterCircle");const y=s.getSections(),K=Et(y),Q=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12];let _=0;y.forEach(e=>{_+=e});const G=K.filter(e=>(e.data.value/_*100).toFixed(0)!=="0"),k=xt(Q).domain([...y.keys()]);w.selectAll("mySlices").data(G).enter().append("path").attr("d",j).attr("fill",e=>k(e.data.label)).attr("class",e=>{let a="pieCircle";return h.highlightSlice==="hover"?a+=" highlightedOnHover":h.highlightSlice===e.data.label&&(a+=" highlighted"),a}),w.selectAll("mySlices").data(G).enter().append("text").text(e=>(e.data.value/_*100).toFixed(0)+"%").attr("transform",e=>"translate("+J.centroid(e)+")").style("text-anchor","middle").attr("class","slice");const Y=D.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),$=[...y.entries()].map(([e,a])=>({label:e,value:a})),u=D.selectAll(".legend").data($).enter().append("g").attr("class","legend");u.append("rect").attr("width",i).attr("height",i).style("fill",e=>k(e.label)).style("stroke",e=>k(e.label)),u.append("text").attr("x",i+c).attr("y",i-c).text(e=>s.getShowData()?`${e.label} [${e.value}]`:e.label);const v=Math.max(...u.selectAll("text").nodes().map(e=>{var a;return(a=e==null?void 0:e.getBoundingClientRect().width)!=null?a:0}));let T=C,z=x+H;const o=i+c,E=$.length*o;switch(X){case"center":u.attr("transform",(e,a)=>{const d=o*$.length/2,g=-v/2-(i+c),p=a*o-d;return"translate("+g+","+p+")"});break;case"top":T+=E,u.attr("transform",(e,a)=>{const d=f,g=-v/2-(i+c),p=a*o-d;return`translate(${g}, ${p})`}),w.attr("transform",()=>`translate(0, ${E+o})`);break;case"bottom":T+=E,u.attr("transform",(e,a)=>{const d=-f-o,g=-v/2-(i+c),p=a*o-d;return"translate("+g+","+p+")"});break;case"left":z+=i+c+v,u.attr("transform",(e,a)=>{const d=o*$.length/2,g=-f-(i+c),p=a*o-d;return"translate("+g+","+p+")"}),w.attr("transform",()=>`translate(${v+i+c}, 0)`);break;default:z+=i+c+v,u.attr("transform",(e,a)=>{const d=o*$.length/2,g=12*i,p=a*o-d;return"translate("+g+","+p+")"});break}const W=(U=(I=Y.node())==null?void 0:I.getBoundingClientRect().width)!=null?U:0,tt=x/2-W/2,et=x/2+W/2,B=Math.min(0,tt),N=Math.max(z,et)-B;A.attr("viewBox",`${B} 0 ${N} ${T}`),ht(A,T,N,h.useMaxWidth)},"draw"),Lt={draw:Rt},Ut={parser:_t,db:q,renderer:Lt,styles:zt};export{Ut as diagram};
