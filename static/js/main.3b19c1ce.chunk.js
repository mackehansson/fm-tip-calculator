(this.webpackJsonpwww=this.webpackJsonpwww||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),o=n(5),s=n.n(o),a=(n(11),n(12),n(2)),r=n(6),u=Object(r.a)((function(t){return{billAmount:"",tipAmount:"",tipAmountCustom:"",peopleAmount:"",setBillAmount:function(e){return t(Object(a.a)((function(t){new RegExp("^[0-9]*$").test(e)&&("0"===t.billAmount&&"00"===e||(t.billAmount=e))})))},setTipAmount:function(e){return t(Object(a.a)((function(t){var n=new RegExp("^(100|[1-9]?[0-9])$");""===e&&(t.tipAmount=""),n.test(e)&&(t.tipAmount=e)})))},setTipAmountCustom:function(e){return t(Object(a.a)((function(t){var n=new RegExp("^(100|[1-9]?[0-9])$");""===e&&(t.tipAmountCustom=""),n.test(e)&&(t.tipAmountCustom=e)})))},setPeopleAmount:function(e){return t(Object(a.a)((function(t){new RegExp("^[0-9]*$").test(e)&&("0"===t.peopleAmount&&"00"===e||(t.peopleAmount=e))})))},resetStore:function(){return t(Object(a.a)((function(t){t.billAmount="",t.tipAmount="",t.tipAmountCustom="",t.peopleAmount=""})))}}})),l=n.p+"static/media/icon-person.65bfd204.svg",m=n(0),j=function(){var t=u((function(t){return t.setPeopleAmount})),e=u((function(t){return t.peopleAmount}));return Object(m.jsxs)("div",{className:"actions-amount",children:[Object(m.jsx)("label",{className:"actions-label",htmlFor:"amount",children:"Number of people"}),Object(m.jsxs)("div",{className:["form-input","".concat("0"===e?"has-error":"")].join(" "),children:[Object(m.jsx)("div",{className:"form-input__overlay",children:Object(m.jsx)("img",{src:l,alt:"Person"})}),Object(m.jsx)("div",{className:"form-input__input",children:Object(m.jsx)("input",{type:"text",className:"input-field",placeholder:"0",id:"amount",value:e,onChange:function(e){var n=e.target.value;t(n)}})}),"0"===e&&Object(m.jsx)("div",{className:"form-input__error",children:"Can't be zero"})]})]})},p=n.p+"static/media/icon-dollar.9f9be353.svg",b=function(){var t=u((function(t){return t.billAmount})),e=u((function(t){return t.setBillAmount}));return Object(m.jsxs)("div",{className:"actions-bill",children:[Object(m.jsx)("label",{htmlFor:"bill",className:"actions-label",children:"Bill"}),Object(m.jsxs)("div",{className:["form-input","".concat("0"===t?"has-error":"")].join(" "),children:[Object(m.jsx)("div",{className:"form-input__overlay",children:Object(m.jsx)("img",{src:p,alt:"Bill"})}),Object(m.jsx)("div",{className:"form-input__input",children:Object(m.jsx)("input",{type:"text",className:"input-field",placeholder:"0",id:"bill",value:t,onChange:function(t){var n=t.target.value;e(n)}})}),"0"===t&&Object(m.jsx)("div",{className:"form-input__error",children:"Can't be zero"})]})]})},d=function(){var t=u((function(t){return t.tipAmount})),e=u((function(t){return t.setTipAmount})),n=u((function(t){return t.tipAmountCustom})),c=u((function(t){return t.setTipAmountCustom})),i=function(t){c(""),e(t)};return Object(m.jsxs)("div",{className:"actions-tip",children:[Object(m.jsx)("div",{className:"actions-label",children:"Select tip %"}),Object(m.jsxs)("div",{className:"actions-tip__buttons",children:[Object(m.jsx)("button",{className:["tip-button","".concat("5"===t?"active":"")].join(" "),onClick:function(){return i("5")},children:"5%"}),Object(m.jsx)("button",{className:["tip-button","".concat("10"===t?"active":"")].join(" "),onClick:function(){return i("10")},children:"10%"}),Object(m.jsx)("button",{className:["tip-button","".concat("15"===t?"active":"")].join(" "),onClick:function(){return i("15")},children:"15%"}),Object(m.jsx)("button",{className:["tip-button","".concat("25"===t?"active":"")].join(" "),onClick:function(){return i("25")},children:"25%"}),Object(m.jsx)("button",{className:["tip-button","".concat("50"===t?"active":"")].join(" "),onClick:function(){return i("50")},children:"50%"}),Object(m.jsx)("input",{className:["tip-input","".concat(n?"active":"")].join(" "),type:"text",placeholder:"Custom",value:n,onChange:function(t){var n=t.target.value;e(""),c(n)}})]})]})},O=n.p+"static/media/logo.42794e2d.svg",f=function(){return Object(m.jsx)("div",{className:"page-logo",children:Object(m.jsx)("img",{src:O,alt:"Splitter"})})},v=n(3),x=function(t){var e=t.cost;return Object(m.jsxs)("div",{className:"summary-row",children:[Object(m.jsxs)("div",{className:"summary-row__left",children:[Object(m.jsx)("div",{className:"summary-row__title",children:"Tip amount"}),Object(m.jsx)("div",{className:"summary-row__person",children:"/ person"})]}),Object(m.jsxs)("div",{className:"summary-row__right",children:["$",e]})]})},h=function(t){var e=t.cost;return Object(m.jsxs)("div",{className:"summary-row",children:[Object(m.jsxs)("div",{className:"summary-row__left",children:[Object(m.jsx)("div",{className:"summary-row__title",children:"Total"}),Object(m.jsx)("div",{className:"summary-row__person",children:"/ person"})]}),Object(m.jsxs)("div",{className:"summary-row__right",children:["$",e]})]})},A=function(){var t=u(),e=Object(c.useState)(""),n=Object(v.a)(e,2),o=n[0],s=n[1],a=Object(c.useState)(""),r=Object(v.a)(a,2),l=r[0],j=r[1];return Object(c.useEffect)((function(){s("0.00"),j("0.00");var e,n,c,i=t.tipAmountCustom?t.tipAmountCustom:t.tipAmount?t.tipAmount:"";i&&t.peopleAmount&&t.billAmount&&(j(function(t,e,n){var c=parseFloat(t),i=parseFloat(e)/100,o=parseFloat(n);return(c/o+c*i/o).toFixed(2).toString()}(t.billAmount,i,t.peopleAmount)),s((e=t.billAmount,n=i,c=t.peopleAmount,(parseFloat(e)*(parseFloat(n)/100)/parseFloat(c)).toFixed(2).toString())))}),[t.billAmount,t.tipAmount,t.peopleAmount,t.tipAmountCustom]),Object(m.jsxs)(i.a.Fragment,{children:[Object(m.jsx)(x,{cost:o}),Object(m.jsx)(h,{cost:l}),Object(m.jsx)("button",{className:"reset-button",onClick:t.resetStore,children:"Reset"})]})};var N=function(){return Object(m.jsxs)("div",{className:"page-wrapper",children:[Object(m.jsx)(f,{}),Object(m.jsxs)("div",{className:"page-content",children:[Object(m.jsxs)("div",{className:"page-content__left",children:[Object(m.jsx)(b,{}),Object(m.jsx)(d,{}),Object(m.jsx)(j,{})]}),Object(m.jsx)("div",{className:"page-content__right",children:Object(m.jsx)(A,{})})]})]})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),o(t),s(t)}))};s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root")),g()}},[[14,1,2]]]);
//# sourceMappingURL=main.3b19c1ce.chunk.js.map