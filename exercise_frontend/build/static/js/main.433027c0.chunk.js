(this.webpackJsonpexercise=this.webpackJsonpexercise||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(2),i=n.n(s),r=n(20),c=n.n(r),o=(n(27),n(4)),h=n(5),u=n(7),l=n(6),d=(n(28),n(8)),m=n.n(d),j=n(9),b=n(21),p=n(3),g=n(10),f=n.n(g),O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).generalChangeHandler=function(e){console.log("change"),a.setState(Object(b.a)({},e.target.name,e.target.value))},a.send=Object(j.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("click works"),e.next=3,f.a.post("/send",{firstname:a.state.firstname,lastname:a.state.lastname,date:a.state.date,email:a.state.email,phone:a.state.phone,InvestmentFund:a.state.InvestmentFund,amount:a.state.amount,headers:{"Content-Type":"application/json"}}).catch((function(e){console.log(e)}));case 3:t=e.sent,console.log(t),a.setState({sent:!0});case 6:case"end":return e.stop()}}),e)}))),a.state={fund_amount_check:!1,InvestmentFund:"Premium",sent:!1,firstname:"",lastname:"",date:"",email:"",phone:0,amount:0},a.handlefundChange=a.handlefundChange.bind(Object(p.a)(a)),a.handleamountChange=a.handleamountChange.bind(Object(p.a)(a)),a}return Object(h.a)(n,[{key:"handleamountChange",value:function(e){this.setState({amount:e.target.value}),console.log("Amount Changed"),"Premium"===this.state.InvestmentFund?this.state.amount<1e3?this.setState({fund_amount_check:!1}):this.state.amount>=1e3&&this.state.amount<25e4?this.setState({fund_amount_check:!0}):this.state.fund_amount>=25e4&&this.setState({fund_amount_check:!1}):"Normal"===this.state.InvestmentFund&&(this.state.amount<2500?this.setState({fund_amount_check:!1}):this.state.amount>=2500&&this.state.amount<25e4?this.setState({fund_amount_check:!0}):this.state.amount>=25e4&&this.setState({fund_amount_check:!1}))}},{key:"handlefundChange",value:function(e){this.setState({InvestmentFund:e.target.value}),console.log(this.state)}},{key:"render",value:function(){var e=this.state,t=e.firstname,n=e.lastname,s=e.date,i=e.email,r=e.phone,c="Normal"===this.state.InvestmentFund?Object(a.jsx)("p",{children:" The amount to invest for Normal fund needs to be between $25,000 and $250,000 "}):Object(a.jsx)("p",{children:" The amount to invest for Premium fund needs to be between $10,000 and $250,000 "}),o=this.state.sent?Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:" All Done! "}),Object(a.jsxs)("p",{children:[" Your response is recorded. ",Object(a.jsx)("br",{})," Please check the confirmation sent to your mail.",Object(a.jsx)("br",{})," Thank you! "]})]}):Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:" Register "}),Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{type:"text",placeholder:"First Name",name:"firstname",value:t,onChange:this.generalChangeHandler}),Object(a.jsx)("input",{type:"text",placeholder:"Last Name",name:"lastname",value:n,onChange:this.generalChangeHandler}),Object(a.jsx)("input",{type:"date",name:"date",value:s,onChange:this.generalChangeHandler}),Object(a.jsx)("input",{type:"mail",placeholder:"email address",name:"email",value:i,onChange:this.generalChangeHandler}),Object(a.jsx)("input",{type:"number",placeholder:"phone number",name:"phone",value:r,onChange:this.generalChangeHandler}),Object(a.jsxs)("select",{name:"InvestmentFund",value:this.state.fund,onChange:this.handlefundChange,children:[Object(a.jsx)("option",{value:"Premium",children:" Premium "}),Object(a.jsx)("option",{value:"Normal",children:" Normal "})]}),Object(a.jsx)("input",{type:"number",placeholder:"amount",name:"amount",value:this.state.amount,onChange:this.handleamountChange})]}),Object(a.jsx)("button",{onClick:this.send.bind(this),disabled:!this.state.fund_amount_check,children:" Send "}),c]});return Object(a.jsx)("div",{children:o})}}]),n}(i.a.Component),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={signedIn:!1,username:"",password:"",users:[]},a.signin=Object(j.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("users",{username:a.state.username,password:a.state.password,headers:{"Content-Type":"application/json"}}).catch((function(e){console.log(e)}));case 2:t=e.sent,console.log(t),a.setState({users:t.data,signedIn:!0});case 5:case"end":return e.stop()}}),e)}))),a.handleusernameChange=a.handleusernameChange.bind(Object(p.a)(a)),a.handlepasswordChange=a.handlepasswordChange.bind(Object(p.a)(a)),a}return Object(h.a)(n,[{key:"handleusernameChange",value:function(e){this.setState({username:e.target.value})}},{key:"handlepasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){var e=this.state.signedIn?Object(a.jsxs)("div",{children:[Object(a.jsx)("h5",{children:" Signed In "}),this.state.users]}):Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:" Sign In "}),Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{type:"text",placeholder:"Username",name:"username",value:this.state.username,onChange:this.handleusernameChange}),Object(a.jsx)("input",{type:"password",placeholder:"Password",name:"password",value:this.state.password,onChange:this.handlepasswordChange})]}),Object(a.jsx)("button",{onClick:this.signin.bind(this),children:" Sign In "})]});return Object(a.jsx)("div",{children:e})}}]),n}(i.a.Component),x=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(O,{}),Object(a.jsx)(v,{})]})}}]),n}(i.a.Component),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),C()}},[[48,1,2]]]);
//# sourceMappingURL=main.433027c0.chunk.js.map