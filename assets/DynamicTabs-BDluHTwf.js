const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TabOne-BNmsKqhP.js","assets/index-Bf5UDGCi.js","assets/index-CO7kJNdF.css","assets/TabTwo-B5R9adoD.js","assets/TabThree-DvtNoeNw.js"])))=>i.map(i=>d[i]);
import{d,r as p,k as v,l as a,m as f,c,b as s,a as C,t as l,F as T,j as k,e as D,T as E,n as P,p as b,q as y,s as g,v as r,o as i,_ as A}from"./index-Bf5UDGCi.js";const I={class:"container"},V={class:"tabs"},h=["onClick"],x=d({__name:"DynamicTabs",setup(B){const _=["one","two","three"],n=p("one"),m={one:a(()=>r(()=>import("./TabOne-BNmsKqhP.js"),__vite__mapDeps([0,1,2]))),two:a(()=>r(()=>import("./TabTwo-B5R9adoD.js"),__vite__mapDeps([3,1,2]))),three:a(()=>r(()=>import("./TabThree-DvtNoeNw.js"),__vite__mapDeps([4,1,2])))},u=v(()=>m[n.value]),t=f({title:"Hello from Parent",count:5,user:{name:"Alice",age:30}});return(L,o)=>(i(),c("div",I,[s("p",null,"Parent Count: "+l(t.count),1),s("div",V,[(i(),c(T,null,k(_,e=>s("button",{key:e,class:P(["tab-button",{active:e===n.value}]),onClick:w=>n.value=e},l(e),11,h)),64))]),C(E,{name:"fade",mode:"out-in"},{default:D(()=>[(i(),b(g(u.value),y(t,{onIncrement:o[0]||(o[0]=e=>t.count++),onChangeTitle:o[1]||(o[1]=e=>t.title=e)}),null,16))]),_:1})]))}}),R=A(x,[["__scopeId","data-v-083def6e"]]);export{R as default};
