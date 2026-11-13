import{p as P}from"./chunk-JWPE2WC7-BTHnQEf0.js";import{_ as f,O as B,R as z,d as A,l as $,b as E,a as F,q as W,t as _,g as M,s as N,M as L,P as O,A as Y}from"./mermaid.core-DHEPCHho.js";import{p as I}from"./cynefin-EF2NZ3EQ-DfL_F2hu.js";import"./doc-CdlWhnvC.js";import"./vendor-vue-B9foJKPF.js";import"./vendor-antd-D80bL8wl.js";import"./vendor-marked-Br4yleP7.js";import"./vendor-lodash-DA3jJpNK.js";var j=O.packet,u,C=(u=class{constructor(){this.packet=[],this.setAccTitle=E,this.getAccTitle=F,this.setDiagramTitle=W,this.getDiagramTitle=_,this.getAccDescription=M,this.setAccDescription=N}getConfig(){const t=B({...j,...L().packet});return t.showBits&&(t.paddingY+=10),t}getPacket(){return this.packet}pushWord(t){t.length>0&&this.packet.push(t)}clear(){Y(),this.packet=[]}},f(u,"PacketDB"),u),q=1e4,G=f((e,t)=>{P(e,t);let s=-1,o=[],n=1;const{bitsPerRow:c}=t.getConfig();for(let{start:a,end:r,bits:i,label:g}of e.blocks){if(a!==void 0&&r!==void 0&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a!=null||(a=s+1),a!==s+1)throw new Error(`Packet block ${a} - ${r!=null?r:a} is not contiguous. It should start from ${s+1}.`);if(i===0)throw new Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);for(r!=null||(r=a+(i!=null?i:1)-1),i!=null||(i=r-a+1),s=r,$.debug(`Packet block ${a} - ${s} with label ${g}`);o.length<=c+1&&t.getPacket().length<q;){const[d,p]=H({start:a,end:r,bits:i,label:g},n,c);if(o.push(d),d.end+1===n*c&&(t.pushWord(o),o=[],n++),!p)break;({start:a,end:r,bits:i,label:g}=p)}}t.pushWord(o)},"populate"),H=f((e,t,s)=>{if(e.start===void 0)throw new Error("start should have been set during first phase");if(e.end===void 0)throw new Error("end should have been set during first phase");if(e.start>e.end)throw new Error(`Block start ${e.start} is greater than block end ${e.end}.`);if(e.end+1<=t*s)return[e,void 0];const o=t*s-1,n=t*s;return[{start:e.start,end:o,label:e.label,bits:o-e.start},{start:n,end:e.end,label:e.label,bits:e.end-n}]},"getNextFittingBlock"),S={parser:{yy:void 0},parse:f(async e=>{var o;const t=await I("packet",e),s=(o=S.parser)==null?void 0:o.yy;if(!(s instanceof C))throw new Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");$.debug(t),G(t,s)},"parse")},K=f((e,t,s,o)=>{const n=o.db,c=n.getConfig(),{rowHeight:a,paddingY:r,bitWidth:i,bitsPerRow:g}=c,d=n.getPacket(),p=n.getDiagramTitle(),b=a+r,l=b*(d.length+1)-(p?0:a),h=i*g+2,k=z(t);k.attr("viewBox",`0 0 ${h} ${l}`),A(k,l,h,c.useMaxWidth);for(const[x,m]of d.entries())R(k,m,x,c);k.append("text").text(p).attr("x",h/2).attr("y",l-b/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),R=f((e,t,s,{rowHeight:o,paddingX:n,paddingY:c,bitWidth:a,bitsPerRow:r,showBits:i,bitOrder:g})=>{const d=e.append("g"),p=s*(o+c)+c,b=g==="descending";for(const l of t){const h=l.end-l.start+1,k=l.start%r,m=(b?r-k-h:k)*a+1,w=h*a-n;if(d.append("rect").attr("x",m).attr("y",p).attr("width",w).attr("height",o).attr("class","packetBlock"),d.append("text").attr("x",m+w/2).attr("y",p+o/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(l.label),!i)continue;const[D,T]=b?[l.end,l.start]:[l.start,l.end],v=h===1,y=p-2;d.append("text").attr("x",m+(v?w/2:0)).attr("y",y).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",v?"middle":"start").text(D),v||d.append("text").attr("x",m+w).attr("y",y).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(T)}},"drawWord"),U={draw:K},X={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},J=f(({packet:e}={})=>{const t=B(X,e);return`
	.packetByte {
		font-size: ${t.byteFontSize};
	}
	.packetByte.start {
		fill: ${t.startByteColor};
	}
	.packetByte.end {
		fill: ${t.endByteColor};
	}
	.packetLabel {
		fill: ${t.labelColor};
		font-size: ${t.labelFontSize};
	}
	.packetTitle {
		fill: ${t.titleColor};
		font-size: ${t.titleFontSize};
	}
	.packetBlock {
		stroke: ${t.blockStrokeColor};
		stroke-width: ${t.blockStrokeWidth};
		fill: ${t.blockFillColor};
	}
	`},"styles"),st={parser:S,get db(){return new C},renderer:U,styles:J};export{st as diagram};
