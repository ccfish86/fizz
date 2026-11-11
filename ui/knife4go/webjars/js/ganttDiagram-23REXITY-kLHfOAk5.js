import{g as pe,s as ve,t as Te,q as xe,a as be,b as we,_ as l,c as at,k as kt,d as _e,l as et,m as De,T as Se,A as Ce,u as Ee}from"./mermaid.core-D10PtP71.js";import{g as re,r as q,s as Ie,t as Me}from"./vendor-antd-r9DXLsA-.js";import{t as Ae,m as Fe,a as $e,l as Oe,h as Le,c as jt,d as Ut,e as We,g as Ye,i as Ve,j as Pe,k as Re,n as Ne,p as ze,q as Xt,r as Gt,s as Kt,u as Jt,v as Qt}from"./d3-scale-dt9J1MbY.js";import"./doc-AnZhYuU4.js";import"./vendor-vue-B9foJKPF.js";import"./vendor-marked-Br4yleP7.js";import"./vendor-lodash-BcZsTO3x.js";function Be(t){return t}var gt=1,Ct=2,It=3,yt=4,Zt=1e-6;function He(t){return"translate("+t+",0)"}function qe(t){return"translate(0,"+t+")"}function je(t){return e=>+t(e)}function Ue(t,e){return e=Math.max(0,t.bandwidth()-e*2)/2,t.round()&&(e=Math.round(e)),i=>+t(i)+e}function Xe(){return!this.__axis}function ae(t,e){var i=[],s=null,r=null,k=6,v=6,S=3,M=typeof window!="undefined"&&window.devicePixelRatio>1?0:.5,A=t===gt||t===yt?-1:1,$=t===yt||t===Ct?"x":"y",O=t===gt||t===It?He:qe;function x(b){var P=s==null?e.ticks?e.ticks.apply(e,i):e.domain():s,W=r==null?e.tickFormat?e.tickFormat.apply(e,i):Be:r,E=Math.max(k,0)+S,B=e.range(),K=+B[0]+M,H=+B[B.length-1]+M,X=(e.bandwidth?Ue:je)(e.copy(),M),j=b.selection?b.selection():b,I=j.selectAll(".domain").data([null]),g=j.selectAll(".tick").data(P,e).order(),m=g.exit(),F=g.enter().append("g").attr("class","tick"),f=g.select("line"),T=g.select("text");I=I.merge(I.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),g=g.merge(F),f=f.merge(F.append("line").attr("stroke","currentColor").attr($+"2",A*k)),T=T.merge(F.append("text").attr("fill","currentColor").attr($,A*E).attr("dy",t===gt?"0em":t===It?"0.71em":"0.32em")),b!==j&&(I=I.transition(b),g=g.transition(b),f=f.transition(b),T=T.transition(b),m=m.transition(b).attr("opacity",Zt).attr("transform",function(p){return isFinite(p=X(p))?O(p+M):this.getAttribute("transform")}),F.attr("opacity",Zt).attr("transform",function(p){var y=this.parentNode.__axis;return O((y&&isFinite(y=y(p))?y:X(p))+M)})),m.remove(),I.attr("d",t===yt||t===Ct?v?"M"+A*v+","+K+"H"+M+"V"+H+"H"+A*v:"M"+M+","+K+"V"+H:v?"M"+K+","+A*v+"V"+M+"H"+H+"V"+A*v:"M"+K+","+M+"H"+H),g.attr("opacity",1).attr("transform",function(p){return O(X(p)+M)}),f.attr($+"2",A*k),T.attr($,A*E).text(W),j.filter(Xe).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===Ct?"start":t===yt?"end":"middle"),j.each(function(){this.__axis=X})}return x.scale=function(b){return arguments.length?(e=b,x):e},x.ticks=function(){return i=Array.from(arguments),x},x.tickArguments=function(b){return arguments.length?(i=b==null?[]:Array.from(b),x):i.slice()},x.tickValues=function(b){return arguments.length?(s=b==null?null:Array.from(b),x):s&&s.slice()},x.tickFormat=function(b){return arguments.length?(r=b,x):r},x.tickSize=function(b){return arguments.length?(k=v=+b,x):k},x.tickSizeInner=function(b){return arguments.length?(k=+b,x):k},x.tickSizeOuter=function(b){return arguments.length?(v=+b,x):v},x.tickPadding=function(b){return arguments.length?(S=+b,x):S},x.offset=function(b){return arguments.length?(M=+b,x):M},x}function Ge(t){return ae(gt,t)}function Ke(t){return ae(It,t)}var pt={exports:{}},Je=pt.exports,te;function Qe(){return te||(te=1,(function(t,e){(function(i,s){t.exports=s()})(Je,(function(){var i="day";return function(s,r,k){var v=function(A){return A.add(4-A.isoWeekday(),i)},S=r.prototype;S.isoWeekYear=function(){return v(this).year()},S.isoWeek=function(A){if(!this.$utils().u(A))return this.add(7*(A-this.isoWeek()),i);var $,O,x,b,P=v(this),W=($=this.isoWeekYear(),O=this.$u,x=(O?k.utc:k)().year($).startOf("year"),b=4-x.isoWeekday(),x.isoWeekday()>4&&(b+=7),x.add(b,i));return P.diff(W,"week")+1},S.isoWeekday=function(A){return this.$utils().u(A)?this.day()||7:this.day(this.day()%7?A:A-7)};var M=S.startOf;S.startOf=function(A,$){var O=this.$utils(),x=!!O.u($)||$;return O.p(A)==="isoweek"?x?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):M.bind(this)(A,$)}}}))})(pt)),pt.exports}var Ze=Qe();const ts=re(Ze);var vt={exports:{}},es=vt.exports,ee;function ss(){return ee||(ee=1,(function(t,e){(function(i,s){t.exports=s()})(es,(function(){var i,s,r=1e3,k=6e4,v=36e5,S=864e5,M=31536e6,A=2628e6,$=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,O=/\[([^\]]+)]|YYYY|YY|Y|M{1,2}|D{1,2}|H{1,2}|m{1,2}|s{1,2}|SSS/g,x={years:M,months:A,days:S,hours:v,minutes:k,seconds:r,milliseconds:1,weeks:6048e5},b=function(I){return I instanceof X},P=function(I,g,m){return new X(I,m,g.$l)},W=function(I){return s.p(I)+"s"},E=function(I){return I<0},B=function(I){return E(I)?Math.ceil(I):Math.floor(I)},K=function(I){return Math.abs(I)},H=function(I,g){return I?E(I)?{negative:!0,format:""+K(I)+g}:{negative:!1,format:""+I+g}:{negative:!1,format:""}},X=(function(){function I(m,F,f){var T=this;if(this.$d={},this.$l=f,m===void 0&&(this.$ms=0,this.parseFromMilliseconds()),F)return P(m*x[W(F)],this);if(typeof m=="number")return this.$ms=m,this.parseFromMilliseconds(),this;if(typeof m=="object")return Object.keys(m).forEach((function(a){T.$d[W(a)]=m[a]})),this.calMilliseconds(),this;if(typeof m=="string"){var p=m.match($);if(p){var y=p.slice(2).map((function(a){return a!=null?Number(a):0}));return this.$d.years=y[0],this.$d.months=y[1],this.$d.weeks=y[2],this.$d.days=y[3],this.$d.hours=y[4],this.$d.minutes=y[5],this.$d.seconds=y[6],this.calMilliseconds(),this}}return this}var g=I.prototype;return g.calMilliseconds=function(){var m=this;this.$ms=Object.keys(this.$d).reduce((function(F,f){return F+(m.$d[f]||0)*x[f]}),0)},g.parseFromMilliseconds=function(){var m=this.$ms;this.$d.years=B(m/M),m%=M,this.$d.months=B(m/A),m%=A,this.$d.days=B(m/S),m%=S,this.$d.hours=B(m/v),m%=v,this.$d.minutes=B(m/k),m%=k,this.$d.seconds=B(m/r),m%=r,this.$d.milliseconds=m},g.toISOString=function(){var m=H(this.$d.years,"Y"),F=H(this.$d.months,"M"),f=+this.$d.days||0;this.$d.weeks&&(f+=7*this.$d.weeks);var T=H(f,"D"),p=H(this.$d.hours,"H"),y=H(this.$d.minutes,"M"),a=this.$d.seconds||0;this.$d.milliseconds&&(a+=this.$d.milliseconds/1e3,a=Math.round(1e3*a)/1e3);var d=H(a,"S"),h=m.negative||F.negative||T.negative||p.negative||y.negative||d.negative,u=p.format||y.format||d.format?"T":"",C=(h?"-":"")+"P"+m.format+F.format+T.format+u+p.format+y.format+d.format;return C==="P"||C==="-P"?"P0D":C},g.toJSON=function(){return this.toISOString()},g.format=function(m){var F=m||"YYYY-MM-DDTHH:mm:ss",f={Y:this.$d.years,YY:s.s(this.$d.years,2,"0"),YYYY:s.s(this.$d.years,4,"0"),M:this.$d.months,MM:s.s(this.$d.months,2,"0"),D:this.$d.days,DD:s.s(this.$d.days,2,"0"),H:this.$d.hours,HH:s.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:s.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:s.s(this.$d.seconds,2,"0"),SSS:s.s(this.$d.milliseconds,3,"0")};return F.replace(O,(function(T,p){return p||String(f[T])}))},g.as=function(m){return this.$ms/x[W(m)]},g.get=function(m){var F=this.$ms,f=W(m);return f==="milliseconds"?F%=1e3:F=f==="weeks"?B(F/x[f]):this.$d[f],F||0},g.add=function(m,F,f){var T;return T=F?m*x[W(F)]:b(m)?m.$ms:P(m,this).$ms,P(this.$ms+T*(f?-1:1),this)},g.subtract=function(m,F){return this.add(m,F,!0)},g.locale=function(m){var F=this.clone();return F.$l=m,F},g.clone=function(){return P(this.$ms,this)},g.humanize=function(m){return i().add(this.$ms,"ms").locale(this.$l).fromNow(!m)},g.valueOf=function(){return this.asMilliseconds()},g.milliseconds=function(){return this.get("milliseconds")},g.asMilliseconds=function(){return this.as("milliseconds")},g.seconds=function(){return this.get("seconds")},g.asSeconds=function(){return this.as("seconds")},g.minutes=function(){return this.get("minutes")},g.asMinutes=function(){return this.as("minutes")},g.hours=function(){return this.get("hours")},g.asHours=function(){return this.as("hours")},g.days=function(){return this.get("days")},g.asDays=function(){return this.as("days")},g.weeks=function(){return this.get("weeks")},g.asWeeks=function(){return this.as("weeks")},g.months=function(){return this.get("months")},g.asMonths=function(){return this.as("months")},g.years=function(){return this.get("years")},g.asYears=function(){return this.as("years")},I})(),j=function(I,g,m){return I.add(g.years()*m,"y").add(g.months()*m,"M").add(g.days()*m,"d").add(g.hours()*m,"h").add(g.minutes()*m,"m").add(g.seconds()*m,"s").add(g.milliseconds()*m,"ms")};return function(I,g,m){i=m,s=m().$utils(),m.duration=function(T,p){var y=m.locale();return P(T,{$l:y},p)},m.isDuration=b;var F=g.prototype.add,f=g.prototype.subtract;g.prototype.add=function(T,p){return b(T)?j(this,T,1):F.bind(this)(T,p)},g.prototype.subtract=function(T,p){return b(T)?j(this,T,-1):f.bind(this)(T,p)}}}))})(vt)),vt.exports}var is=ss();const ns=re(is);var Mt=(function(){var t=l(function(y,a,d,h){for(d=d||{},h=y.length;h--;d[y[h]]=a);return d},"o"),e=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],i=[1,26],s=[1,27],r=[1,28],k=[1,29],v=[1,30],S=[1,31],M=[1,32],A=[1,33],$=[1,34],O=[1,9],x=[1,10],b=[1,11],P=[1,12],W=[1,13],E=[1,14],B=[1,15],K=[1,16],H=[1,19],X=[1,20],j=[1,21],I=[1,22],g=[1,23],m=[1,25],F=[1,35],f={trace:l(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:l(function(a,d,h,u,C,n,N){var o=n.length-1;switch(C){case 1:return n[o-1];case 2:this.$=[];break;case 3:n[o-1].push(n[o]),this.$=n[o-1];break;case 4:case 5:this.$=n[o];break;case 6:case 7:this.$=[];break;case 8:u.setWeekday("monday");break;case 9:u.setWeekday("tuesday");break;case 10:u.setWeekday("wednesday");break;case 11:u.setWeekday("thursday");break;case 12:u.setWeekday("friday");break;case 13:u.setWeekday("saturday");break;case 14:u.setWeekday("sunday");break;case 15:u.setWeekend("friday");break;case 16:u.setWeekend("saturday");break;case 17:u.setDateFormat(n[o].substr(11)),this.$=n[o].substr(11);break;case 18:u.enableInclusiveEndDates(),this.$=n[o].substr(18);break;case 19:u.TopAxis(),this.$=n[o].substr(8);break;case 20:u.setAxisFormat(n[o].substr(11)),this.$=n[o].substr(11);break;case 21:u.setTickInterval(n[o].substr(13)),this.$=n[o].substr(13);break;case 22:u.setExcludes(n[o].substr(9)),this.$=n[o].substr(9);break;case 23:u.setIncludes(n[o].substr(9)),this.$=n[o].substr(9);break;case 24:u.setTodayMarker(n[o].substr(12)),this.$=n[o].substr(12);break;case 27:u.setDiagramTitle(n[o].substr(6)),this.$=n[o].substr(6);break;case 28:this.$=n[o].trim(),u.setAccTitle(this.$);break;case 29:case 30:this.$=n[o].trim(),u.setAccDescription(this.$);break;case 31:u.addSection(n[o].substr(8)),this.$=n[o].substr(8);break;case 33:u.addTask(n[o-1],n[o]),this.$="task";break;case 34:this.$=n[o-1],u.setClickEvent(n[o-1],n[o],null);break;case 35:this.$=n[o-2],u.setClickEvent(n[o-2],n[o-1],n[o]);break;case 36:this.$=n[o-2],u.setClickEvent(n[o-2],n[o-1],null),u.setLink(n[o-2],n[o]);break;case 37:this.$=n[o-3],u.setClickEvent(n[o-3],n[o-2],n[o-1]),u.setLink(n[o-3],n[o]);break;case 38:this.$=n[o-2],u.setClickEvent(n[o-2],n[o],null),u.setLink(n[o-2],n[o-1]);break;case 39:this.$=n[o-3],u.setClickEvent(n[o-3],n[o-1],n[o]),u.setLink(n[o-3],n[o-2]);break;case 40:this.$=n[o-1],u.setLink(n[o-1],n[o]);break;case 41:case 47:this.$=n[o-1]+" "+n[o];break;case 42:case 43:case 45:this.$=n[o-2]+" "+n[o-1]+" "+n[o];break;case 44:case 46:this.$=n[o-3]+" "+n[o-2]+" "+n[o-1]+" "+n[o];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:i,13:s,14:r,15:k,16:v,17:S,18:M,19:18,20:A,21:$,22:O,23:x,24:b,25:P,26:W,27:E,28:B,29:K,30:H,31:X,33:j,35:I,36:g,37:24,38:m,40:F},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:36,11:17,12:i,13:s,14:r,15:k,16:v,17:S,18:M,19:18,20:A,21:$,22:O,23:x,24:b,25:P,26:W,27:E,28:B,29:K,30:H,31:X,33:j,35:I,36:g,37:24,38:m,40:F},t(e,[2,5]),t(e,[2,6]),t(e,[2,17]),t(e,[2,18]),t(e,[2,19]),t(e,[2,20]),t(e,[2,21]),t(e,[2,22]),t(e,[2,23]),t(e,[2,24]),t(e,[2,25]),t(e,[2,26]),t(e,[2,27]),{32:[1,37]},{34:[1,38]},t(e,[2,30]),t(e,[2,31]),t(e,[2,32]),{39:[1,39]},t(e,[2,8]),t(e,[2,9]),t(e,[2,10]),t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),t(e,[2,15]),t(e,[2,16]),{41:[1,40],43:[1,41]},t(e,[2,4]),t(e,[2,28]),t(e,[2,29]),t(e,[2,33]),t(e,[2,34],{42:[1,42],43:[1,43]}),t(e,[2,40],{41:[1,44]}),t(e,[2,35],{43:[1,45]}),t(e,[2,36]),t(e,[2,38],{42:[1,46]}),t(e,[2,37]),t(e,[2,39])],defaultActions:{},parseError:l(function(a,d){if(d.recoverable)this.trace(a);else{var h=new Error(a);throw h.hash=d,h}},"parseError"),parse:l(function(a){var d=this,h=[0],u=[],C=[null],n=[],N=this.table,o="",L=0,c=0,D=2,_=1,V=n.slice.call(arguments,1),w=Object.create(this.lexer),R={yy:{}};for(var Y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,Y)&&(R.yy[Y]=this.yy[Y]);w.setInput(a,R.yy),R.yy.lexer=w,R.yy.parser=this,typeof w.yylloc=="undefined"&&(w.yylloc={});var dt=w.yylloc;n.push(dt);var _t=w.options&&w.options.ranges;typeof R.yy.parseError=="function"?this.parseError=R.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ge(G){h.length=h.length-2*G,C.length=C.length-G,n.length=n.length-G}l(ge,"popStack");function Ht(){var G;return G=u.pop()||w.lex()||_,typeof G!="number"&&(G instanceof Array&&(u=G,G=u.pop()),G=d.symbols_[G]||G),G}l(Ht,"lex");for(var U,st,J,Dt,nt={},ht,Z,qt,mt;;){if(st=h[h.length-1],this.defaultActions[st]?J=this.defaultActions[st]:((U===null||typeof U=="undefined")&&(U=Ht()),J=N[st]&&N[st][U]),typeof J=="undefined"||!J.length||!J[0]){var St="";mt=[];for(ht in N[st])this.terminals_[ht]&&ht>D&&mt.push("'"+this.terminals_[ht]+"'");w.showPosition?St="Parse error on line "+(L+1)+`:
`+w.showPosition()+`
Expecting `+mt.join(", ")+", got '"+(this.terminals_[U]||U)+"'":St="Parse error on line "+(L+1)+": Unexpected "+(U==_?"end of input":"'"+(this.terminals_[U]||U)+"'"),this.parseError(St,{text:w.match,token:this.terminals_[U]||U,line:w.yylineno,loc:dt,expected:mt})}if(J[0]instanceof Array&&J.length>1)throw new Error("Parse Error: multiple actions possible at state: "+st+", token: "+U);switch(J[0]){case 1:h.push(U),C.push(w.yytext),n.push(w.yylloc),h.push(J[1]),U=null,c=w.yyleng,o=w.yytext,L=w.yylineno,dt=w.yylloc;break;case 2:if(Z=this.productions_[J[1]][1],nt.$=C[C.length-Z],nt._$={first_line:n[n.length-(Z||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(Z||1)].first_column,last_column:n[n.length-1].last_column},_t&&(nt._$.range=[n[n.length-(Z||1)].range[0],n[n.length-1].range[1]]),Dt=this.performAction.apply(nt,[o,c,L,R.yy,J[1],C,n].concat(V)),typeof Dt!="undefined")return Dt;Z&&(h=h.slice(0,-1*Z*2),C=C.slice(0,-1*Z),n=n.slice(0,-1*Z)),h.push(this.productions_[J[1]][0]),C.push(nt.$),n.push(nt._$),qt=N[h[h.length-2]][h[h.length-1]],h.push(qt);break;case 3:return!0}}return!0},"parse")},T=(function(){var y={EOF:1,parseError:l(function(d,h){if(this.yy.parser)this.yy.parser.parseError(d,h);else throw new Error(d)},"parseError"),setInput:l(function(a,d){return this.yy=d||this.yy||{},this._input=a,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:l(function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var d=a.match(/(?:\r\n?|\n).*/g);return d?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},"input"),unput:l(function(a){var d=a.length,h=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-d),this.offset-=d;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),h.length-1&&(this.yylineno-=h.length-1);var C=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:h?(h.length===u.length?this.yylloc.first_column:0)+u[u.length-h.length].length-h[0].length:this.yylloc.first_column-d},this.options.ranges&&(this.yylloc.range=[C[0],C[0]+this.yyleng-d]),this.yyleng=this.yytext.length,this},"unput"),more:l(function(){return this._more=!0,this},"more"),reject:l(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:l(function(a){this.unput(this.match.slice(a))},"less"),pastInput:l(function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:l(function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:l(function(){var a=this.pastInput(),d=new Array(a.length+1).join("-");return a+this.upcomingInput()+`
`+d+"^"},"showPosition"),test_match:l(function(a,d){var h,u,C;if(this.options.backtrack_lexer&&(C={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(C.yylloc.range=this.yylloc.range.slice(0))),u=a[0].match(/(?:\r\n?|\n).*/g),u&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],h=this.performAction.call(this,this.yy,this,d,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),h)return h;if(this._backtrack){for(var n in C)this[n]=C[n];return!1}return!1},"test_match"),next:l(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,d,h,u;this._more||(this.yytext="",this.match="");for(var C=this._currentRules(),n=0;n<C.length;n++)if(h=this._input.match(this.rules[C[n]]),h&&(!d||h[0].length>d[0].length)){if(d=h,u=n,this.options.backtrack_lexer){if(a=this.test_match(h,C[n]),a!==!1)return a;if(this._backtrack){d=!1;continue}else return!1}else if(!this.options.flex)break}return d?(a=this.test_match(d,C[u]),a!==!1?a:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:l(function(){var d=this.next();return d||this.lex()},"lex"),begin:l(function(d){this.conditionStack.push(d)},"begin"),popState:l(function(){var d=this.conditionStack.length-1;return d>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:l(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:l(function(d){return d=this.conditionStack.length-1-Math.abs(d||0),d>=0?this.conditionStack[d]:"INITIAL"},"topState"),pushState:l(function(d){this.begin(d)},"pushState"),stateStackSize:l(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:l(function(d,h,u,C){switch(u){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return y})();f.lexer=T;function p(){this.yy={}}return l(p,"Parser"),p.prototype=f,f.Parser=p,new p})();Mt.parser=Mt;var rs=Mt;q.extend(ts);q.extend(Ie);q.extend(Me);var se={friday:5,saturday:6},Q="",Ot="",Lt=void 0,Wt="",ct=[],lt=[],Yt=new Map,Vt=[],bt=[],ut="",Pt="",oe=["active","done","crit","milestone","vert"],Rt=[],rt="",ft=!1,Nt=!1,zt="sunday",wt="saturday",At=0,as=l(function(){Vt=[],bt=[],ut="",Rt=[],Tt=0,$t=void 0,xt=void 0,z=[],Q="",Ot="",Pt="",Lt=void 0,Wt="",ct=[],lt=[],ft=!1,Nt=!1,At=0,Yt=new Map,rt="",Ce(),zt="sunday",wt="saturday"},"clear"),os=l(function(t){rt=t},"setDiagramId"),cs=l(function(t){Ot=t},"setAxisFormat"),ls=l(function(){return Ot},"getAxisFormat"),us=l(function(t){Lt=t},"setTickInterval"),ds=l(function(){return Lt},"getTickInterval"),fs=l(function(t){Wt=t},"setTodayMarker"),hs=l(function(){return Wt},"getTodayMarker"),ms=l(function(t){Q=t},"setDateFormat"),ks=l(function(){ft=!0},"enableInclusiveEndDates"),ys=l(function(){return ft},"endDatesAreInclusive"),gs=l(function(){Nt=!0},"enableTopAxis"),ps=l(function(){return Nt},"topAxisEnabled"),vs=l(function(t){Pt=t},"setDisplayMode"),Ts=l(function(){return Pt},"getDisplayMode"),xs=l(function(){return Q},"getDateFormat"),ce=l((t,e)=>{const i=e.toLowerCase().split(/[\s,]+/).filter(s=>s!=="");return[...new Set([...t,...i])]},"mergeTokens"),bs=l(function(t){ct=ce(ct,t)},"setIncludes"),ws=l(function(){return ct},"getIncludes"),_s=l(function(t){lt=ce(lt,t)},"setExcludes"),Ds=l(function(){return lt},"getExcludes"),Ss=l(function(){return Yt},"getLinks"),Cs=l(function(t){ut=t,Vt.push(t)},"addSection"),Es=l(function(){return Vt},"getSections"),Is=l(function(){let t=ie();const e=10;let i=0;for(;!t&&i<e;)t=ie(),i++;return bt=z,bt},"getTasks"),le=l(function(t,e,i,s){const r=t.format(e.trim()),k=t.format("YYYY-MM-DD");return s.includes(r)||s.includes(k)?!1:i.includes("weekends")&&(t.isoWeekday()===se[wt]||t.isoWeekday()===se[wt]+1)||i.includes(t.format("dddd").toLowerCase())?!0:i.includes(r)||i.includes(k)},"isInvalidDate"),Ms=l(function(t){zt=t},"setWeekday"),As=l(function(){return zt},"getWeekday"),Fs=l(function(t){wt=t},"setWeekend"),ue=l(function(t,e,i,s){if(!i.length||t.manualEndTime)return;let r;t.startTime instanceof Date?r=q(t.startTime):r=q(t.startTime,e,!0),r=r.add(1,"d");let k;t.endTime instanceof Date?k=q(t.endTime):k=q(t.endTime,e,!0);const[v,S]=$s(r,k,e,i,s);t.endTime=v.toDate(),t.renderEndTime=S},"checkTaskDates"),$s=l(function(t,e,i,s,r){let k=!1,v=null;const S=e.add(1e4,"d");for(;t<=e;){if(k||(v=e.toDate()),k=le(t,i,s,r),k&&(e=e.add(1,"d"),e>S))throw new Error("Failed to find a valid date that was not excluded by `excludes` after 10,000 iterations.");t=t.add(1,"d")}return[e,v]},"fixTaskDates"),de=l(function(t,e){et.warn(`Gantt: the "${t}" statement references unknown task id(s): ${e.join(", ")}. Make sure the referenced tasks exist and declare an id. Milestones need both an id and a duration, e.g. "Milestone :milestone, m1, 2023-01-01, 0d".`)},"warnAboutUnknownTaskIds"),Ft=l(function(t,e,i){if(i=i.trim(),l(S=>{const M=S.trim();return M==="x"||M==="X"},"isTimestampFormat")(e)&&/^\d+$/.test(i))return new Date(Number(i));const k=/^after\s+(?<ids>[\d\w- ]+)/.exec(i);if(k!==null){let S=null;const M=[],A=k.groups.ids.split(" ").filter(O=>O!=="");for(const O of A){const x=it(O);if(x===void 0){M.push(O);continue}(!S||x.endTime>S.endTime)&&(S=x)}if(M.length>0&&de("after",M),S)return S.endTime;const $=new Date;return $.setHours(0,0,0,0),$}let v=q(i,e.trim(),!0);if(v.isValid())return v.toDate();{et.debug("Invalid date:"+i),et.debug("With date format:"+e.trim());const S=new Date(i);if(S===void 0||isNaN(S.getTime())||S.getFullYear()<-1e4||S.getFullYear()>1e4)throw new Error("Invalid date:"+i);return S}},"getStartDate"),fe=l(function(t){const e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return e!==null?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},"parseDuration"),he=l(function(t,e,i,s=!1){i=i.trim();const k=/^until\s+(?<ids>[\d\w- ]+)/.exec(i);if(k!==null){let $=null;const O=[],x=k.groups.ids.split(" ").filter(P=>P!=="");for(const P of x){const W=it(P);if(W===void 0){O.push(P);continue}(!$||W.startTime<$.startTime)&&($=W)}if(O.length>0&&de("until",O),$)return $.startTime;const b=new Date;return b.setHours(0,0,0,0),b}let v=q(i,e.trim(),!0);if(v.isValid())return s&&(v=v.add(1,"d")),v.toDate();let S=q(t);const[M,A]=fe(i);if(Number.isNaN(M))et.warn(`Gantt: "${i}" is neither a valid date for the "${e.trim()}" date format nor a valid duration (e.g. "3d"), so it is ignored and the task gets a zero duration. Milestones need a duration too, e.g. "Milestone :milestone, m1, 2023-01-01, 0d".`);else{const $=S.add(M,A);$.isValid()&&(S=$)}return S.toDate()},"getEndDate"),Tt=0,ot=l(function(t){return t===void 0?(Tt=Tt+1,"task"+Tt):t},"parseId"),Os=l(function(t,e){let i;e.substr(0,1)===":"?i=e.substr(1,e.length):i=e;const s=i.split(","),r={};Bt(s,r,oe);for(let v=0;v<s.length;v++)s[v]=s[v].trim();let k="";switch(s.length){case 1:r.id=ot(),r.startTime=t.endTime,k=s[0];break;case 2:r.id=ot(),r.startTime=Ft(void 0,Q,s[0]),k=s[1];break;case 3:r.id=ot(s[0]),r.startTime=Ft(void 0,Q,s[1]),k=s[2];break}return k&&(r.endTime=he(r.startTime,Q,k,ft),r.manualEndTime=q(k,"YYYY-MM-DD",!0).isValid(),ue(r,Q,lt,ct)),r},"compileData"),Ls=l(function(t,e){let i;e.substr(0,1)===":"?i=e.substr(1,e.length):i=e;const s=i.split(","),r={};Bt(s,r,oe);for(let k=0;k<s.length;k++)s[k]=s[k].trim();switch(s.length){case 1:r.id=ot(),r.startTime={type:"prevTaskEnd",id:t},r.endTime={data:s[0]};break;case 2:r.id=ot(),r.startTime={type:"getStartDate",startData:s[0]},r.endTime={data:s[1]};break;case 3:r.id=ot(s[0]),r.startTime={type:"getStartDate",startData:s[1]},r.endTime={data:s[2]};break}return r},"parseData"),$t,xt,z=[],me={},Ws=l(function(t,e){const i={section:ut,type:ut,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},s=Ls(xt,e);i.raw.startTime=s.startTime,i.raw.endTime=s.endTime,i.id=s.id,i.prevTaskId=xt,i.active=s.active,i.done=s.done,i.crit=s.crit,i.milestone=s.milestone,i.vert=s.vert,i.vert?i.order=-1:(i.order=At,At++);const r=z.push(i);xt=i.id,me[i.id]=r-1},"addTask"),it=l(function(t){const e=me[t];return z[e]},"findTaskById"),Ys=l(function(t,e){const i={section:ut,type:ut,description:t,task:t,classes:[]},s=Os($t,e);i.startTime=s.startTime,i.endTime=s.endTime,i.id=s.id,i.active=s.active,i.done=s.done,i.crit=s.crit,i.milestone=s.milestone,i.vert=s.vert,$t=i,bt.push(i)},"addTaskOrg"),ie=l(function(){const t=l(function(i){const s=z[i];let r="";switch(z[i].raw.startTime.type){case"prevTaskEnd":{const k=it(s.prevTaskId);s.startTime=k.endTime;break}case"getStartDate":r=Ft(void 0,Q,z[i].raw.startTime.startData),r&&(z[i].startTime=r);break}return z[i].startTime&&(z[i].endTime=he(z[i].startTime,Q,z[i].raw.endTime.data,ft),z[i].endTime&&(z[i].processed=!0,z[i].manualEndTime=q(z[i].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),ue(z[i],Q,lt,ct))),z[i].processed},"compileTask");let e=!0;for(const[i,s]of z.entries())t(i),e=e&&s.processed;return e},"compileTasks"),Vs=l(function(t,e){let i=e;at().securityLevel!=="loose"&&(i=Se.sanitizeUrl(e)),t.split(",").forEach(function(s){it(s)!==void 0&&(ye(s,()=>{window.open(i,"_self")}),Yt.set(s,i))}),ke(t,"clickable")},"setLink"),ke=l(function(t,e){t.split(",").forEach(function(i){let s=it(i);s!==void 0&&s.classes.push(e)})},"setClass"),Ps=l(function(t,e,i){if(at().securityLevel!=="loose"||e===void 0)return;let s=[];if(typeof i=="string"){s=i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let k=0;k<s.length;k++){let v=s[k].trim();v.startsWith('"')&&v.endsWith('"')&&(v=v.substr(1,v.length-2)),s[k]=v}}s.length===0&&s.push(t),it(t)!==void 0&&ye(t,()=>{Ee.runFunc(e,...s)})},"setClickFun"),ye=l(function(t,e){Rt.push(function(){const i=rt?`${rt}-${t}`:t,s=document.querySelector(`[id="${i}"]`);s!==null&&s.addEventListener("click",function(){e()})},function(){const i=rt?`${rt}-${t}`:t,s=document.querySelector(`[id="${i}-text"]`);s!==null&&s.addEventListener("click",function(){e()})})},"pushFun"),Rs=l(function(t,e,i){t.split(",").forEach(function(s){Ps(s,e,i)}),ke(t,"clickable")},"setClickEvent"),Ns=l(function(t){Rt.forEach(function(e){e(t)})},"bindFunctions"),zs={getConfig:l(()=>at().gantt,"getConfig"),clear:as,setDateFormat:ms,getDateFormat:xs,enableInclusiveEndDates:ks,endDatesAreInclusive:ys,enableTopAxis:gs,topAxisEnabled:ps,setAxisFormat:cs,getAxisFormat:ls,setTickInterval:us,getTickInterval:ds,setTodayMarker:fs,getTodayMarker:hs,setAccTitle:we,getAccTitle:be,setDiagramTitle:xe,getDiagramTitle:Te,setDiagramId:os,setDisplayMode:vs,getDisplayMode:Ts,setAccDescription:ve,getAccDescription:pe,addSection:Cs,getSections:Es,getTasks:Is,addTask:Ws,findTaskById:it,addTaskOrg:Ys,setIncludes:bs,getIncludes:ws,setExcludes:_s,getExcludes:Ds,setClickEvent:Rs,setLink:Vs,getLinks:Ss,bindFunctions:Ns,parseDuration:fe,isInvalidDate:le,setWeekday:Ms,getWeekday:As,setWeekend:Fs};function Bt(t,e,i){let s=!0;for(;s;)s=!1,i.forEach(function(r){const k="^\\s*"+r+"\\s*$",v=new RegExp(k);t[0].match(v)&&(e[r]=!0,t.shift(1),s=!0)})}l(Bt,"getTaskTags");q.extend(ns);var Bs=l(function(){et.debug("Something is calling, setConf, remove the call")},"setConf"),ne={monday:ze,tuesday:Ne,wednesday:Re,thursday:Pe,friday:Ve,saturday:Ye,sunday:We},Hs=l((t,e)=>{let i=[...t].map(()=>-1/0),s=[...t].sort((k,v)=>k.startTime-v.startTime||k.order-v.order),r=0;for(const k of s)for(let v=0;v<i.length;v++)if(k.startTime>=i[v]){i[v]=k.endTime,k.order=v+e,v>r&&(r=v);break}return r},"getMaxIntersections"),tt,Et=1e4,qs=l(function(t,e,i,s){const r=at().gantt;s.db.setDiagramId(e);const k=at().securityLevel;let v;k==="sandbox"&&(v=kt("#i"+e));const S=k==="sandbox"?kt(v.nodes()[0].contentDocument.body):kt("body"),M=k==="sandbox"?v.nodes()[0].contentDocument:document,A=M.getElementById(e);tt=A.parentElement.offsetWidth,tt===void 0&&(tt=1200),r.useWidth!==void 0&&(tt=r.useWidth);const $=s.db.getTasks(),O=$.filter(f=>!f.vert);let x=[];for(const f of O)x.push(f.type);x=F(x);const b={};let P=2*r.topPadding;if(s.db.getDisplayMode()==="compact"||r.displayMode==="compact"){const f={};for(const p of O)f[p.section]===void 0?f[p.section]=[p]:f[p.section].push(p);let T=0;for(const p of Object.keys(f)){const y=Hs(f[p],T)+1;T+=y,P+=y*(r.barHeight+r.barGap),b[p]=y}}else{P+=O.length*(r.barHeight+r.barGap);for(const f of x)b[f]=O.filter(T=>T.type===f).length}A.setAttribute("viewBox","0 0 "+tt+" "+P);const W=S.select(`[id="${e}"]`),E=Ae().domain([Fe($,function(f){return f.startTime}),$e($,function(f){return f.endTime})]).rangeRound([0,tt-r.leftPadding-r.rightPadding]);function B(f,T){const p=f.startTime,y=T.startTime;let a=0;return p>y?a=1:p<y&&(a=-1),a}l(B,"taskCompare"),$.sort(B),K($,tt,P),_e(W,P,tt,r.useMaxWidth),W.append("text").text(s.db.getDiagramTitle()).attr("x",tt/2).attr("y",r.titleTopMargin).attr("class","titleText");function K(f,T,p){const y=r.barHeight,a=y+r.barGap,d=r.topPadding,h=r.leftPadding,u=Oe().domain([0,x.length]).range(["#00B9FA","#F95002"]).interpolate(Le);X(a,d,h,T,p,f,s.db.getExcludes(),s.db.getIncludes()),I(h,d,T,p),H(f,a,d,h,y,u,T),g(a,d),m(h,d,T,p)}l(K,"makeGantt");function H(f,T,p,y,a,d,h){f.sort((c,D)=>c.vert===D.vert?0:c.vert?1:-1);const u=f.filter(c=>!c.vert),n=[...new Set(u.map(c=>c.order))].map(c=>u.find(D=>D.order===c));W.append("g").selectAll("rect").data(n).enter().append("rect").attr("x",0).attr("y",function(c,D){return D=c.order,D*T+p-2}).attr("width",function(){return h-r.rightPadding/2}).attr("height",T).attr("class",function(c){for(const[D,_]of x.entries())if(c.type===_)return"section section"+D%r.numberSectionStyles;return"section section0"}).enter();const N=W.append("g").selectAll("rect").data(f).enter(),o=s.db.getLinks();if(N.append("rect").attr("id",function(c){return e+"-"+c.id}).attr("rx",3).attr("ry",3).attr("x",function(c){return c.milestone?E(c.startTime)+y+.5*(E(c.endTime)-E(c.startTime))-.5*a:E(c.startTime)+y}).attr("y",function(c,D){return D=c.order,c.vert?r.gridLineStartPadding:D*T+p}).attr("width",function(c){return c.milestone?a:c.vert?.08*a:E(c.renderEndTime||c.endTime)-E(c.startTime)}).attr("height",function(c){return c.vert?u.length*(r.barHeight+r.barGap)+r.barHeight*2:a}).attr("transform-origin",function(c,D){return D=c.order,(E(c.startTime)+y+.5*(E(c.endTime)-E(c.startTime))).toString()+"px "+(D*T+p+.5*a).toString()+"px"}).attr("class",function(c){const D="task";let _="";c.classes.length>0&&(_=c.classes.join(" "));let V=0;for(const[R,Y]of x.entries())c.type===Y&&(V=R%r.numberSectionStyles);let w="";return c.active?c.crit?w+=" activeCrit":w=" active":c.done?c.crit?w=" doneCrit":w=" done":c.crit&&(w+=" crit"),w.length===0&&(w=" task"),c.milestone&&(w=" milestone "+w),c.vert&&(w=" vert "+w),w+=V,w+=" "+_,D+w}),N.append("text").attr("id",function(c){return e+"-"+c.id+"-text"}).text(function(c){return c.task}).attr("font-size",r.fontSize).attr("x",function(c){let D=E(c.startTime),_=E(c.renderEndTime||c.endTime);if(c.milestone&&(D+=.5*(E(c.endTime)-E(c.startTime))-.5*a,_=D+a),c.vert)return E(c.startTime)+y;const V=this.getBBox().width;return V>_-D?_+V+1.5*r.leftPadding>h?D+y-5:_+y+5:(_-D)/2+D+y}).attr("y",function(c,D){return c.vert?r.gridLineStartPadding+u.length*(r.barHeight+r.barGap)+60:(D=c.order,D*T+r.barHeight/2+(r.fontSize/2-2)+p)}).attr("text-height",a).attr("class",function(c){const D=E(c.startTime);let _=E(c.endTime);c.milestone&&(_=D+a);const V=this.getBBox().width;let w="";c.classes.length>0&&(w=c.classes.join(" "));let R=0;for(const[dt,_t]of x.entries())c.type===_t&&(R=dt%r.numberSectionStyles);let Y="";return c.active&&(c.crit?Y="activeCritText"+R:Y="activeText"+R),c.done?c.crit?Y=Y+" doneCritText"+R:Y=Y+" doneText"+R:c.crit&&(Y=Y+" critText"+R),c.milestone&&(Y+=" milestoneText"),c.vert&&(Y+=" vertText"),V>_-D?_+V+1.5*r.leftPadding>h?w+" taskTextOutsideLeft taskTextOutside"+R+" "+Y:w+" taskTextOutsideRight taskTextOutside"+R+" "+Y+" width-"+V:w+" taskText taskText"+R+" "+Y+" width-"+V}),at().securityLevel==="sandbox"){let c;c=kt("#i"+e);const D=c.nodes()[0].contentDocument;N.filter(function(_){return o.has(_.id)}).each(function(_){var V=D.querySelector("#"+CSS.escape(e+"-"+_.id)),w=D.querySelector("#"+CSS.escape(e+"-"+_.id+"-text"));const R=V.parentNode;var Y=D.createElement("a");Y.setAttribute("xlink:href",o.get(_.id)),Y.setAttribute("target","_top"),R.appendChild(Y),Y.appendChild(V),Y.appendChild(w)})}}l(H,"drawRects");function X(f,T,p,y,a,d,h,u){if(h.length===0&&u.length===0)return;let C,n;for(const{startTime:_,endTime:V}of d)(C===void 0||_<C)&&(C=_),(n===void 0||V>n)&&(n=V);if(!C||!n)return;if(q(n).diff(q(C),"year")>5){et.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const N=s.db.getDateFormat(),o=[];let L=null,c=q(C);for(;c.valueOf()<=n;)s.db.isInvalidDate(c,N,h,u)?L?L.end=c:L={start:c,end:c}:L&&(o.push(L),L=null),c=c.add(1,"d");W.append("g").selectAll("rect").data(o).enter().append("rect").attr("id",_=>e+"-exclude-"+_.start.format("YYYY-MM-DD")).attr("x",_=>E(_.start.startOf("day"))+p).attr("y",r.gridLineStartPadding).attr("width",_=>E(_.end.endOf("day"))-E(_.start.startOf("day"))).attr("height",a-T-r.gridLineStartPadding).attr("transform-origin",function(_,V){return(E(_.start)+p+.5*(E(_.end)-E(_.start))).toString()+"px "+(V*f+.5*a).toString()+"px"}).attr("class","exclude-range")}l(X,"drawExcludeDays");function j(f,T,p,y){if(p<=0||f>T)return 1/0;const a=T-f,d=q.duration({[y!=null?y:"day"]:p}).asMilliseconds();return d<=0?1/0:Math.ceil(a/d)}l(j,"getEstimatedTickCount");function I(f,T,p,y){var N;const a=s.db.getDateFormat(),d=s.db.getAxisFormat();let h;d?h=d:a==="D"?h="%d":h=(N=r.axisFormat)!=null?N:"%Y-%m-%d";let u=Ke(E).tickSize(-y+T+r.gridLineStartPadding).tickFormat(jt(h));const n=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(s.db.getTickInterval()||r.tickInterval);if(n!==null){const o=parseInt(n[1],10);if(isNaN(o)||o<=0)et.warn(`Invalid tick interval value: "${n[1]}". Skipping custom tick interval.`);else{const L=n[2],c=s.db.getWeekday()||r.weekday,D=E.domain(),_=D[0],V=D[1],w=j(_,V,o,L);if(w>Et)et.warn(`The tick interval "${o}${L}" would generate ${w} ticks, which exceeds the maximum allowed (${Et}). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch(L){case"millisecond":u.ticks(Qt.every(o));break;case"second":u.ticks(Jt.every(o));break;case"minute":u.ticks(Kt.every(o));break;case"hour":u.ticks(Gt.every(o));break;case"day":u.ticks(Xt.every(o));break;case"week":u.ticks(ne[c].every(o));break;case"month":u.ticks(Ut.every(o));break}}}if(W.append("g").attr("class","grid").attr("transform","translate("+f+", "+(y-50)+")").call(u).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),s.db.topAxisEnabled()||r.topAxis){let o=Ge(E).tickSize(-y+T+r.gridLineStartPadding).tickFormat(jt(h));if(n!==null){const L=parseInt(n[1],10);if(isNaN(L)||L<=0)et.warn(`Invalid tick interval value: "${n[1]}". Skipping custom tick interval.`);else{const c=n[2],D=s.db.getWeekday()||r.weekday,_=E.domain(),V=_[0],w=_[1];if(j(V,w,L,c)<=Et)switch(c){case"millisecond":o.ticks(Qt.every(L));break;case"second":o.ticks(Jt.every(L));break;case"minute":o.ticks(Kt.every(L));break;case"hour":o.ticks(Gt.every(L));break;case"day":o.ticks(Xt.every(L));break;case"week":o.ticks(ne[D].every(L));break;case"month":o.ticks(Ut.every(L));break}}}W.append("g").attr("class","grid").attr("transform","translate("+f+", "+T+")").call(o).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}l(I,"makeGrid");function g(f,T){let p=0;const y=Object.keys(b).map(a=>[a,b[a]]);W.append("g").selectAll("text").data(y).enter().append(function(a){const d=a[0].split(De.lineBreakRegex),h=-(d.length-1)/2,u=M.createElementNS("http://www.w3.org/2000/svg","text");u.setAttribute("dy",h+"em");for(const[C,n]of d.entries()){const N=M.createElementNS("http://www.w3.org/2000/svg","tspan");N.setAttribute("alignment-baseline","central"),N.setAttribute("x","10"),C>0&&N.setAttribute("dy","1em"),N.textContent=n,u.appendChild(N)}return u}).attr("x",10).attr("y",function(a,d){if(d>0)for(let h=0;h<d;h++)return p+=y[d-1][1],a[1]*f/2+p*f+T;else return a[1]*f/2+T}).attr("font-size",r.sectionFontSize).attr("class",function(a){for(const[d,h]of x.entries())if(a[0]===h)return"sectionTitle sectionTitle"+d%r.numberSectionStyles;return"sectionTitle"})}l(g,"vertLabels");function m(f,T,p,y){const a=s.db.getTodayMarker();if(a==="off")return;const d=W.append("g").attr("class","today"),h=new Date,u=d.append("line");u.attr("x1",E(h)+f).attr("x2",E(h)+f).attr("y1",r.titleTopMargin).attr("y2",y-r.titleTopMargin).attr("class","today"),a!==""&&u.attr("style",a.replace(/,/g,";"))}l(m,"drawToday");function F(f){const T={},p=[];for(let y=0,a=f.length;y<a;++y)Object.prototype.hasOwnProperty.call(T,f[y])||(T[f[y]]=!0,p.push(f[y]));return p}l(F,"checkUnique")},"draw"),js={setConf:Bs,draw:qs},Us=l(t=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done-crit task text outside the bar — same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles"),Xs=Us,si={parser:rs,db:zs,renderer:js,styles:Xs};export{si as diagram};
