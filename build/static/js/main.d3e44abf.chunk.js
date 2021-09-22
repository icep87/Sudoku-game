(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{22:function(e,t){e.exports={baseUri:"https://localhost:5001/api/",useRestAPI:!0}},50:function(e,t,n){},51:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(40),s=n.n(i),o=(n(50),n.p,n(51),n(14)),c=n(9),l=n(22),d=n.n(l),u=n(1),b=Object(r.createContext)();function m(e){var t=e.children,n=Object(r.useState)([]),a=Object(c.a)(n,2),i=a[0],s=a[1],o=Object(r.useState)([]),l=Object(c.a)(o,2),m=l[0],j=l[1],f=Object(r.useState)(!1),g=Object(c.a)(f,2),h=g[0],x=g[1],v=Object(r.useState)([]),O=Object(c.a)(v,2),p=O[0],N=O[1],w=Object(r.useState)(d.a.useRestAPI),y=Object(c.a)(w,2),B=y[0],k=y[1];return Object(u.jsx)(b.Provider,{value:{restAPI:B,setRestAPI:k,boardNumbers:i,updateBoardNumbers:function(e){s(e)},generateBoardDetails:function(e){for(var t=[],n=0;n<e.length;n++){for(var r=[],a=0;a<e[n].length;a++)""!==e[n][a]?r.push({initial:!0,valid:!0}):r.push({initial:!1,valid:!1});t.push(r)}j(t)},boardDetails:m,updateBoardDetails:function(e){j(e)},initialBoard:p,updateInitialBoard:function(e){N(e)},showNewGameButton:h,setShowNewGameButton:x},children:t})}function j(e){var t=e.children;return Object(u.jsx)("div",{className:"h-screen w-screen bg-gray-200",children:t})}var f=function(e){var t=e.children;return Object(u.jsx)(m,{children:Object(u.jsx)(j,{children:t})})},g=n(3),h=n(79);function x(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}var v=n(41),O=n.n(v),p={getSudokuBoard:function(e){return O.a.get(d.a.baseUri+"sudoku/?level="+e).catch((function(e){console.log(e)}))},noBackendBoard:function(e){console.log("Selected level: "+e);var t={"Super Easy":[[9,"",4,2,8,6,1,3,5],[6,2,8,3,5,1,7,4,9],[3,1,5,7,9,4,6,8,2],[2,5,6,9,1,8,4,7,3],[4,3,9,6,7,5,2,1,8],[7,8,1,4,3,2,5,9,6],[5,6,7,8,4,3,9,2,1],[1,4,3,5,2,9,8,6,7],[8,9,2,1,6,7,3,5,""]],Easy:[[5,6,"",1,"",9,"",7,8],[4,"","",5,"","",3,"",2],[2,9,"",3,"","","",1,""],["",4,6,"",8,5,9,2,3],[9,5,7,"",3,"","",4,1],["",3,"",4,"","",7,"",""],["",2,"",8,5,7,"","",""],["","","","",4,"",6,"",""],[3,"",4,"",1,"",2,"",""]],Intermediate:[[1,2,3,"","","","",9,""],["","",7,9,"","",4,"",6],["",6,4,"",5,"","",7,""],[7,"",1,8,"","",9,"",""],["","","","","","",6,3,""],["",8,"","",2,"","",4,""],[5,"","",4,6,9,3,"",""],[4,"","","",8,7,"",2,""],[3,"","","","","",7,6,""]],Hard:[["",5,"","",1,"","","",3],["",7,"","",2,"",8,"",""],["","","",9,7,"","","",4],["",2,"","","","",1,"",""],[8,"","",4,"","",3,"",""],["","","","","","",5,"",""],["","","","",5,"",4,8,6],[9,"",3,"","","",7,1,""],[4,"","",1,"","","",3,""]],Extreme:[[7,1,"",5,"","","","",""],["","","",3,"",4,"","",""],[8,"","","","","","","",""],[2,"","","","","","","",9],["","","","","","","","",3],["","","","",1,8,"","",""],["","","","","","",7,8,""],["","",4,"","","","",1,""],["","",9,"","",6,"","",""]]};return console.log(JSON.stringify(t[e])),t[e]}},N=n(26),w=n.n(N),y=n(78);function B(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function k(e){var t=e.label,n=e.description,r=e.enabled,a=e.changeToggle;return Object(u.jsxs)(y.a.Group,{as:"div",className:"flex items-center justify-between",children:[Object(u.jsxs)("span",{className:"flex-grow flex flex-col",children:[Object(u.jsx)(y.a.Label,{as:"span",className:"text-sm font-medium text-gray-900",passive:!0,children:t}),Object(u.jsx)(y.a.Description,{as:"span",className:"text-sm text-gray-500",children:n})]}),Object(u.jsx)(y.a,{checked:r,onChange:a,className:B(r?"bg-green-600":"bg-gray-200","relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),children:Object(u.jsx)("span",{"aria-hidden":"true",className:B(r?"translate-x-5":"translate-x-0","pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200")})})]})}var C=[{name:"Super Easy",description:"The board will be generated with 79 numbers visible",id:1},{name:"Easy",description:"The board will be generated with 51 numbers visible",id:2},{name:"Intermediate",description:"The board will be generated with 31 numbers visible",id:3},{name:"Hard",description:"The board will be generated with 25 numbers visible",id:4},{name:"Extreme",description:"The board will be generated with 17 numbers visible",id:5}],S=function(){var e=Object(r.useContext)(b),t=e.restAPI,n=e.setRestAPI,a=e.updateBoardNumbers,i=e.setShowNewGameButton,s=e.generateBoardDetails,o=(e.initialBoard,e.updateInitialBoard),l=Object(r.useState)(C[0]),d=Object(c.a)(l,2),m=d[0],j=d[1],f=Object(g.f)();return Object(r.useEffect)((function(){i(!1)})),Object(u.jsxs)("div",{className:"p-2",children:[Object(u.jsxs)(h.a,{value:m,onChange:j,children:[Object(u.jsx)(h.a.Label,{className:"sr-only",children:"Level settings"}),Object(u.jsx)("div",{className:"bg-white rounded-md -space-y-px",children:C.map((function(e,t){return Object(u.jsx)(h.a.Option,{value:e,className:function(e){var n=e.checked;return x(0===t?"rounded-tl-md rounded-tr-md":"",t===C.length-1?"rounded-bl-md rounded-br-md":"",n?"bg-indigo-50 border-indigo-200 z-10":"border-gray-200","relative border p-4 flex cursor-pointer focus:outline-none")},children:function(t){var n=t.active,r=t.checked;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{className:x(r?"bg-indigo-600 border-transparent":"bg-white border-gray-300",n?"ring-2 ring-offset-2 ring-indigo-500":"","h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center"),"aria-hidden":"true",children:Object(u.jsx)("span",{className:"rounded-full bg-white w-1.5 h-1.5"})}),Object(u.jsxs)("div",{className:"ml-3 flex flex-col",children:[Object(u.jsx)(h.a.Label,{as:"span",className:x(r?"text-indigo-900":"text-gray-900","block text-sm font-medium"),children:e.name}),Object(u.jsx)(h.a.Description,{as:"span",className:x(r?"text-indigo-700":"text-gray-500","block text-sm"),children:e.description})]})]})}},e.name)}))})]}),Object(u.jsx)("div",{className:"mt-4",children:Object(u.jsx)("button",{type:"button",className:"w-full items-center px-5 py-4 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:function(){console.log("starting new game");var e=[];t?p.getSudokuBoard(m.id).then((function(t){e=t.data[0]._Board.boardNumber,console.log(e),s(e),a(e),o(w.a.cloneDeep(e)),f.push("/game")})):(e=p.noBackendBoard(m.name),s(e),a(e),o(w.a.cloneDeep(e)),f.push("/game"))},children:"New game"})}),Object(u.jsx)("div",{className:"mt-2",children:Object(u.jsx)(k,{label:"Use Rest API for boards",description:"Boards are currently identical in the local client and REST API",enabled:t,changeToggle:n})})]})},I=n(29),A=n(44),T=function(e){var t=e.colIndex,n=e.number,r=e.valid,a=e.initialNumber,i=e.numberChanged,s=e.liveValidation;return Object(u.jsx)("input",{id:t,type:"text",maxLength:"1",className:x(a?"text-gray-600 font-bold bg-gray-100 bg-opacity-50":"",s&&!a&&!r&&""==!n&&"bg-red-400",s&&!a&&r&&""==!n&&"bg-green-500 bg-opacity-50","block w-full border-0 border-b border-transparent bg-white text-center"),defaultValue:n,onChange:function(e){return t=e.target,!/[1-9]/gm.test(t.value)&&(t.value=""),void i(parseInt(t.value),t.id);var t},disabled:a?"true":"",autoComplete:"off"})},D=function(e){var t=e.rowNumbers,n=e.rowIndex,a=e.onNumberChange,i=e.liveValidation,s=Object(r.useContext)(b).boardDetails,o=function(e,t){a(n,t,e)};return Object(u.jsx)("div",{id:n,className:x(n%3===2&&8!==n?"border-b-2":"","grid grid-cols-9 gap-0 "),children:t.map((function(e,t){return Object(u.jsx)("div",{id:t,className:x(t%3===2&&8!==t?"border-r-4":"","border border-opacity-100 text-center"),children:Object(u.jsx)(T,{colIndex:t,number:e,valid:s[n][t].valid,initialNumber:s[n][t].initial,numberChanged:o,liveValidation:i})},t)}))},n)},E=function(e){var t=e.boardNumbers,n=e.onNumberChange,r=e.liveValidation;Object(A.a)(e,["boardNumbers","onNumberChange","liveValidation"]);return Object(u.jsx)("div",{className:"grid grid-rows-9 gap-0",children:t.map((function(e,t){return Object(u.jsx)(D,{rowIndex:t,rowNumbers:e,onNumberChange:n,liveValidation:r},t)}))})};function L(e,t,n,r){return!!(function(e,t,n,r){for(var a=3*Math.floor(t/3),i=3*Math.floor(n/3),s=0;s<3;s++)for(var o=0;o<3;o++)if(e[a+s][i+o]===r)return!1;return!0}(e,t,n,r)&&function(e,t,n){for(var r=0;r<e[t].length;r++)if(e[t][r]===n)return!1;return!0}(e,t,r)&&function(e,t,n){for(var r=0;r<e.length;r++)if(e[r][t]===n)return!1;return!0}(e,n,r))}function V(e){for(var t=0;t<9;t++)for(var n=0;n<9;n++)if(!Boolean(e[t][n]))return[t,n];return[-1,-1]}var P={checkNumber:L,solveBoard:function e(t){var n=V(t),r=n[0],a=n[1];if(-1===r)return t;for(var i=1;i<=9;i++)L(t,r,a,i)&&(t[r][a]=i,e(t));if(-1===V(t)[0])return t;t[r][a]=""},validateBoardItems:function(e,t,n,r){e[t][n]="";var a=L(e,t,n,r);return e[t][n]=r,a}};function R(e){var t=e.label,n=e.description,r=e.buttonLabel,a=e.clickAction;return Object(u.jsxs)("div",{className:"flex items-center justify-between",children:[Object(u.jsxs)("span",{className:"flex-grow flex flex-col",children:[Object(u.jsx)("span",{className:"text-sm font-medium text-gray-900",children:t}),Object(u.jsx)("span",{className:"text-sm text-gray-500",children:n})]}),Object(u.jsx)("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:a,children:r})]})}function G(e){var t=e.label;return Object(u.jsxs)("div",{className:"relative",children:[Object(u.jsx)("div",{className:"absolute inset-0 flex items-center","aria-hidden":"true",children:Object(u.jsx)("div",{className:"w-full border-t border-gray-200"})}),Object(u.jsx)("div",{className:"relative flex justify-start",children:Object(u.jsx)("span",{className:"pr-2 bg-white text-sm text-gray-500",children:t})})]})}var F=n(28),M=function(e){var t=e.setSolvedModalOpen,n=e.cheater,r=Object(g.f)();return Object(u.jsx)("div",{className:"fixed z-10 inset-0 overflow-y-auto",children:Object(u.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[Object(u.jsx)("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"}),Object(u.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(u.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:x(n?"bg-yellow-400":"bg-green-100","mx-auto flex items-center justify-center h-12 w-12 rounded-full"),children:n?Object(u.jsx)(F.b,{className:"h-6 w-6 text-yellow-600","aria-hidden":"true"}):Object(u.jsx)(F.a,{className:"h-6 w-6 text-green-600","aria-hidden":"true"})}),Object(u.jsxs)("div",{className:"mt-3 text-center sm:mt-5",children:[Object(u.jsx)("h3",{className:"text-lg leading-6 font-medium text-gray-900",children:n?"Congratulations you cheater!":"Congratulations!"}),Object(u.jsx)("div",{className:"mt-2",children:Object(u.jsx)("p",{className:"text-sm text-gray-500",children:"You have completed the game of Sudoku. Would you like to start a new game?"})})]})]}),Object(u.jsxs)("div",{className:"mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense",children:[Object(u.jsx)("button",{type:"button",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm",onClick:function(){return r.push("/")},children:"New game"}),Object(u.jsx)("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm",onClick:function(){return t(!1)},children:"Cancel"})]})]})]})})},J=function(){var e=Object(r.useContext)(b),t=e.boardNumbers,n=e.updateBoardNumbers,a=e.boardDetails,i=e.updateBoardDetails,s=e.initialBoard,o=e.setShowNewGameButton,l=Object(g.f)(),d=Object(r.useState)(),m=Object(c.a)(d,2),j=m[0],f=m[1],h=Object(r.useState)(!0),x=Object(c.a)(h,2),v=x[0],O=x[1],p=Object(r.useState)(!1),N=Object(c.a)(p,2),w=N[0],y=N[1],B=Object(r.useState)(!1),C=Object(c.a)(B,2),S=C[0],A=C[1],T=function(e,n,r){var s=P.validateBoardItems(t,e,n,r);console.log(s);var o=Object(I.a)(a);o[e][n].valid=s,i(o)},D=function(){0===a.flat(1/0).filter((function(e){return!1===e.valid})).length&&y(!0)},L=function(e){return e.flat(1/0).filter((function(e){return""===e})).length};return Object(r.useEffect)((function(){f(L(t))}),[t]),Object(r.useEffect)((function(){0===j&&D()}),[j]),Object(r.useEffect)((function(){o(!0),0===t.length&&(console.log("Boardnumber is empty"),l.push("/"))})),Object(u.jsxs)("div",{className:"p-2",children:[w&&Object(u.jsx)(M,{setSolvedModalOpen:y,cheater:S}),Object(u.jsx)(E,{boardNumbers:t,onNumberChange:function(e,r,a){console.log("NumberChanged to: "+a+" on column: "+r+" in row: "+e),T(e,r,a),function(e,r,a){var i=Object(I.a)(t);i[e][r]=a,n(i)}(e,r,a)},liveValidation:v}),Object(u.jsx)("div",{children:Object(u.jsxs)("p",{className:"text-sm text-gray-400 text-right my-1",children:["Remaining numbers:"," ",Object(u.jsx)("span",{className:"inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800",children:j})]})}),Object(u.jsxs)("div",{className:"my-1",children:[Object(u.jsx)("div",{className:"py-2 mb-1",children:Object(u.jsx)(G,{label:"Options"})}),Object(u.jsxs)("div",{className:"grid grid-cols-1 gap-4",children:[Object(u.jsx)(k,{label:"Live validation",description:"Validate the number upon input",enabled:v,changeToggle:O}),Object(u.jsx)(R,{label:"Validate the board",description:"This action will validate entire board (after running this Live Validation will be enabled)",buttonLabel:"Validate",clickAction:function(){for(var e=0;e<t.length;e++)for(var n=0;n<t[e].length;n++)T(e,n,t[e][n]);O(!0),D()}}),Object(u.jsx)(R,{label:"Solve the board",description:"This action will solve the entire board from the initial board. ",buttonLabel:"Solve",clickAction:function(){console.log("Running solveBoard");var e=P.solveBoard(s);O(!1),n(e),A(!0),f(L(t)),y(!0)}})]})]})]})},U=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(g.c,{children:[Object(u.jsx)(g.a,{exact:!0,path:"/",children:Object(u.jsx)(S,{})}),Object(u.jsx)(g.a,{exact:!0,path:"/game",children:Object(u.jsx)(J,{})})]})})},z=function(){var e=Object(g.f)();return Object(u.jsx)("button",{type:"button",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:function(){return e.push("/")},children:"New game"})},H=function(){var e=Object(r.useContext)(b).showNewGameButton;return Object(u.jsxs)("header",{children:[Object(u.jsxs)("div",{className:"w-full py-2 flex items-end justify-between ",children:[Object(u.jsx)("div",{className:"flex",children:Object(u.jsxs)("a",{href:"#",children:[Object(u.jsx)("span",{className:"sr-only",children:"Workflow"}),Object(u.jsx)("img",{className:"object-none",src:"/icons8-sudoku-100.png",alt:""})]})}),Object(u.jsx)("div",{className:"flex px-2 ",children:e?Object(u.jsx)(z,{}):""})]}),Object(u.jsx)("div",{className:" mb-2 ",children:Object(u.jsx)(G,{})})]})};var W=function(){return Object(u.jsx)(f,{children:Object(u.jsx)(o.a,{children:Object(u.jsxs)("div",{className:"max-w-3xl mx-auto sm:px-6 lg:px-8 pt-5",children:[Object(u.jsx)(H,{}),Object(u.jsx)("div",{className:"bg-white overflow-hidden sm:rounded-lg sm:shadow ",children:Object(u.jsx)(U,{})})]})})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),i(e),s(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(W,{})}),document.getElementById("root")),Y()}},[[77,1,2]]]);
//# sourceMappingURL=main.d3e44abf.chunk.js.map