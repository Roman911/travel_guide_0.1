(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[35],{"5od3":function(e,t,n){"use strict";n.r(t);var o=n("o0o1"),r=n.n(o);function a(e,t,n,o,r,a,c){try{var i=e[a](c),s=i.value}catch(u){return void n(u)}i.done?t(s):Promise.resolve(s).then(o,r)}var c=n("nKUr"),i=n("q1tI"),s=n("KYPV");function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var l=function(e){var t=Object(i.useRef)(e);return Object(i.useEffect)((function(){t.current=e})),t},d=function(e){var t=new window.google.maps.Geocoder;return new Promise((function(n,o){t.geocode(e,(function(t,r){"OK"!==r&&o(r),!e.address&&e.componentRestrictions&&(console.error("\ud83d\udca1 use-places-autocomplete: Please provide an address when using getGeocode() with the componentRestrictions."),n(t)),n(t)}))}))},p=function(e){return new Promise((function(t,n){try{var o=e.geometry.location,r=o.lat,a=o.lng;t({lat:r(),lng:a()})}catch(c){n(c)}}))},f=function(e){var t=void 0===e?{}:e,n=t.requestOptions,o=t.debounce,r=void 0===o?200:o,a=t.googleMaps,c=t.callbackName,s=t.defaultValue,d=void 0===s?"":s,p=Object(i.useState)(!1),f=p[0],g=p[1],v=Object(i.useState)(d),b=v[0],h=v[1],w=Object(i.useState)({loading:!1,status:"",data:[]}),m=w[0],j=w[1],O=Object(i.useRef)(null),x=l(n),y=l(a),S=Object(i.useCallback)((function(){var e,t=window.google,n=y.current,o=(null==n?void 0:n.places)||(null==t||null==(e=t.maps)?void 0:e.places);o?(O.current=new o.AutocompleteService,g(!0)):console.error("\ud83d\udca1 use-places-autocomplete: Google Maps Places API library must be loaded. See: https://github.com/wellyshen/use-places-autocomplete#load-the-library")}),[]),k=Object(i.useCallback)((function(){j({loading:!1,status:"",data:[]})}),[]),P=Object(i.useCallback)(function(e,t){var n;return function(){for(var o=this,r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];null!==n&&(clearTimeout(n),n=null),n=setTimeout((function(){return e.apply(o,a)}),t)}}((function(e){e?(j((function(e){return u({},e,{loading:!0})})),O.current.getPlacePredictions(u({},x.current,{input:e}),(function(e,t){j({loading:!1,status:t,data:e||[]})}))):k()}),r),[r,k]),C=Object(i.useCallback)((function(e,t){void 0===t&&(t=!0),h(e),t&&P(e)}),[P]);return Object(i.useEffect)((function(){var e=window.google;return y.current||(null==e?void 0:e.maps)||!c?S():window[c]=S,function(){window[c]&&delete window[c]}}),[c,S]),{ready:f,value:b,suggestions:m,setValue:C,clearSuggestions:k}},g=n("Rz3U"),v=n("BD5b"),b=g.StyleSheet.create({wrapper:{position:"absolute",zIndex:10,top:60,right:10,width:400},form:{display:"flex",flexDirection:"column",boxShadow:"4px 4px 10px 1px ".concat(v.g.shadow)},input:{padding:10,fontSize:"1.4rem",border:"1px solid ".concat(v.a.borderInput)},select:{overflow:"hidden",border:"1px solid ".concat(v.a.borderInput),padding:0},option:{padding:10,fontSize:"1.2rem",cursor:"pointer",":hover":{color:v.i.hover}}}),h=function(e){var t=e.data,n=e.formik,o=e.value,r=e.setValue,a=e.ready,i=e.status;return Object(c.jsxs)("div",{className:Object(g.css)(b.wrapper),children:[Object(c.jsx)("input",{className:Object(g.css)(b.input),type:"text",value:o,onChange:function(e){r(e.target.value)},disabled:!a,placeholder:"\u041f\u043e\u0448\u0443\u043a \u043d\u0430 Google \u041a\u0430\u0440\u0442\u0430\u0445"}),0!==t.length?Object(c.jsx)("select",{className:Object(g.css)(b.select),size:t.length,id:"description",name:"description",onChange:n.handleChange,onBlur:n.handleBlur,children:"OK"===i&&t.map((function(e,t){return Object(c.jsx)("option",{onClick:n.handleSubmit,className:Object(g.css)(b.option),value:e.description,children:e.description},t)}))}):null]})};t.default=function(e){var t=e.panTo,n=f({requestOptions:{location:{lat:function(){return 49.026151},lng:function(){return 31.48307}},radius:5e4}}),o=n.ready,i=n.value,u=n.suggestions,l=u.status,g=u.data,v=n.setValue,b=n.clearSuggestions,w=function(){var e,n=(e=r.a.mark((function e(n){var o,a,c,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(n.description,!1),b(),e.prev=2,e.next=5,d({address:n.description});case 5:return o=e.sent,e.next=8,p(o[0]);case 8:a=e.sent,c=a.lat,i=a.lng,t({lat:c,lng:i}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})),function(){var t=this,n=arguments;return new Promise((function(o,r){var c=e.apply(t,n);function i(e){a(c,o,r,i,s,"next",e)}function s(e){a(c,o,r,i,s,"throw",e)}i(void 0)}))});return function(e){return n.apply(this,arguments)}}();return Object(c.jsx)(s.e,{initialValues:{description:""},onSubmit:w,children:function(e){return Object(c.jsx)(s.d,{children:Object(c.jsx)(h,{data:g,formik:e,value:i,setValue:v,ready:o,status:l})})}})}}}]);