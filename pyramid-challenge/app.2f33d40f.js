webpackJsonp([1],{0:function(e,t,a){a("+prg"),e.exports=a("lVK7")},"1h8F":function(e,t,a){"use strict";var n=a("U7vG"),r=a.n(n);t.a=function(e){return r.a.createElement("div",e,e.children)}},"8NV/":function(e,t,a){"use strict";var n=a("U7vG"),r=a.n(n),l=a("KSGD"),i=(a.n(l),a("Owf3")),c=a.n(i),o=a("rLyh"),s=a.n(o),u=r.a.createElement(s.a,{key:"null"}),m=function(e){var t=e.onChangeExercise,a=e.selectedExercise,n=e.exercises,l=n.map(function(e,t){return r.a.createElement(s.a,{key:t,value:e.name,primaryText:e.name})});return l.splice(0,0,u),r.a.createElement(c.a,{onChange:t,errorText:a?"":"You must select an exercise",value:a?a.name:"",fullWidth:!0},l)};m.defaultTypes={exercises:[]},t.a=m},BCOr:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r}),a.d(t,"c",function(){return l});var n=function(e){return{type:"CHANGE_EXERCISE",exerciseName:e}},r=function(e){return{type:"CHANGE_DIFFICULTY_LEVEL",difficultyLevel:e}},l=function(e){return{type:"CHANGE_MAX_LIFT",maxForLift:e}}},ChGC:function(e,t,a){"use strict";var n=(a("2KeS"),a("U9Vk")),r=a("UbKW"),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i={exercises:n.a,difficulties:r.a,selectedExercise:null,selectedDifficulty:r.a[0],maxForLift:0},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(console.log(t),t.type){case"CHANGE_DIFFICULTY_LEVEL":return l({},e,{selectedDifficulty:r.a.find(function(e){return e.level===t.difficultyLevel})});case"CHANGE_EXERCISE":return l({},e,{selectedExercise:n.a.find(function(e){return e.name===t.exerciseName})});case"CHANGE_MAX_LIFT":return l({},e,{maxForLift:Number(t.maxForLift)});default:return e}};t.a=c},F0oz:function(e,t,a){"use strict";var n=a("U7vG"),r=a.n(n),l=r.a.createElement("div",{className:"footer panel panel-default"},r.a.createElement("div",{className:"panel-body"},r.a.createElement("h1",null,"What Is This?"),r.a.createElement("p",null,"This is a personal project I threw together because I wanted a fun challenge to help me progress past my fatigue limits. I don't have a ton of time, though, and was trying to think up a way to break through my limits without spending hours and hours doing it. This is the result."),r.a.createElement("p",null,"The combination of high volume and low rest periods makes for a very challenging, yet quick, workout that absolutely accomplishes its goal of training you to fight through fatigue. The next time you go for a heavy 5-rep lift, it'll feel like a relief after this torture."),r.a.createElement("p",null,"Hopefully this app makes it easier for others to join in the fun! Pyramid lifting schemes are nothing new, of course, but this app helps take some of the guess-work out of the progression and keeps you on a consistent path towards progression."),r.a.createElement("h2",null,"What's Next?"),r.a.createElement("p",null,"I have a lot of ideas I'd like to implement, as time allows. Most of this stuff isn't too difficult, so if you're a coder and want to help out, check out the github page",r.a.createElement("a",{href:"https://github.com/ipalindromi/pyramid-challenge-workout"},"here!")),r.a.createElement("ul",null,r.a.createElement("li",null,"Weight calculator, so you know exactly what to put on the bar."),r.a.createElement("li",null,"More customization of workout parameters"),r.a.createElement("li",null,"Ability to save best times / completions locally"),r.a.createElement("li",null,"Make site work with metric units")))),i=function(){return l};t.a=i},IS78:function(e,t,a){"use strict";var n=a("U7vG"),r=a.n(n),l=a("KSGD"),i=(a.n(l),a("rtxM")),c=a.n(i),o=function(e){return r.a.createElement(c.a,{type:"number",onChange:e.onChange,floatingLabelText:"Enter A Number",errorText:e.maxForLift?"":"You must enter your one rep max"})};t.a=o},KMpy:function(e,t,a){"use strict";var n=a("U7vG"),r=a.n(n),l=a("KSGD"),i=(a.n(l),a("jMXa")),c=a.n(i),o=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2.5;arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(void 0===e)throw new Error("Unrecognized difficulty level");var r=e.sets,l=e.percentOfMax/100,i=t*l,o=2*n,s=[],u=0,m=a,f=1;for(f;f<=15;f++){var h=(i-a)/14,p=Math.round(h/o)*o;u+=h-p;var d=p;Math.abs(u)>o&&(u>-1?(d+=o,u-=o):(d-=o,u+=o)),(d<0||f===r||15===f)&&(d=0);var E=15-(f-1);m+d>i&&(d=Math.round(i-m)),m=Math.round(m),s.push({set:f,reps:E,increase:d,weight:m,totalWeight:m*E,weightUnits:c.a.calculate(m)}),m+=d}if(r>15){var y=s.slice(0,14).reverse().map(function(e,t){return Object.assign({},e,{set:16+t,increase:13===t?0:-1*e.increase})});s=s.concat(y)}return s},s=r.a.createElement("small",null,"(Hover over rows to see how many plates to put on the bar!)"),u=r.a.createElement("hr",null),m=r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Set"),r.a.createElement("th",null,"Reps"),r.a.createElement("th",null,"Weight"),r.a.createElement("th",null,"Increase"),r.a.createElement("th",null,"Total Weight"))),f=r.a.createElement("td",{colSpan:"2"},"Total Reps:"),h=r.a.createElement("td",null,"Total Weight:"),p=function(e){var t=!1;e.selectedExercise?e.maxForLift||(t=r.a.createElement("p",{key:"max",style:{padding:25},className:"bg-warning text-center"},"Your workout will be generated once you enter your one rep maximum for ",e.selectedExercise)):t=r.a.createElement("p",{key:"exercise",style:{padding:25},className:"bg-warning text-center"},"Your workout will be generated once you enter an excercise");var a=r.a.createElement("tr",null,f,r.a.createElement("td",null,i),h,r.a.createElement("td",null,l));if(!t){var n=o(e.selectedDifficulty,e.maxForLift,45),l=0,i=0,c=n.map(function(e,t){l+=e.totalWeight,i+=e.reps;var n=(r.a.createElement("table",{className:"table table-bordered table-striped"},m,r.a.createElement("tbody",null,c,a)),[]),o="Just the bar!";return e.weightUnits&&e.weightUnits.plates&&(e.weightUnits.plates.forEach(function(e){n.push(e.qty+"x"+e.plateWeight)}),n.length&&(o="Put "+n.join(", ")+" pound plates on the bar")),r.a.createElement("tr",{key:t,title:o},r.a.createElement("td",{className:""},e.set),r.a.createElement("td",null,e.reps),r.a.createElement("td",null,e.weight),r.a.createElement("td",null,e.increase),r.a.createElement("td",null,e.totalWeight))});t=r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",{style:{margin:0,padding:0},className:"text-center"},"Let's ",e.selectedExercise.name,"!"),s,u,_ref3)}return r.a.createElement("div",null,t)};t.a=p},M8pY:function(e,t,a){"use strict";var n=a("U7vG"),r=a.n(n),l=a("1h8F"),i=r.a.createElement(l.a,{className:"header"},r.a.createElement("h1",{className:"header--heading1"},"The Pyramid Challenge"),r.a.createElement("h2",{className:"header--heading2"},"A super fun way to just about kill yourself, by ",r.a.createElement("a",{href:"http://dustinbaldwin.com",target:"_blank"},"Dustin Baldwin")),r.a.createElement(l.a,{className:"instructions"},r.a.createElement("h3",null,"Rules / Instructions / More-What-You'd-Call-Guidelines"),r.a.createElement("ol",null,r.a.createElement("li",null,"Choose an exercise"),r.a.createElement("li",null,"Choose a difficulty"),r.a.createElement("li",null,"Enter the maximum weight you can lift for a single rep for the exercise you chose"),r.a.createElement("li",null,"Try to complete the generated workout as quickly as possible ",r.a.createElement("strong",null,"WITH GOOD FORM!"),". Track your time!"),r.a.createElement("li",null,"When you miss a rep, the game is over. You'll do better next time!")))),c=function(e){return i};t.a=c},U9Vk:function(e,t,a){"use strict";t.a=[{name:"Bench Press",isBarbellExercise:!0},{name:"Squat",isBarbellExercise:!0},{name:"Deadlift",isBarbellExercise:!0}]},UbKW:function(e,t,a){"use strict";t.a=[{level:1,name:"I'm Too Young To Die",blurb:"Default difficulty. Start here.",sets:15,percentOfMax:60},{level:2,name:"Hey, Not Too Rough",blurb:"Despite the name, a little rough",percentOfMax:70,sets:15},{level:3,name:"Hurt Me Plenty",blurb:"Harder than you think",percentOfMax:80,sets:15},{level:4,name:"Ultra-Violence",blurb:"Ultra-hard, ultra-painful",percentOfMax:60,sets:29},{level:5,name:"Nightmare!",blurb:"You're gonna have a bad time",percentOfMax:70,sets:29}]},YCZr:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=a("U7vG"),c=a.n(i),o=a("RH2O"),s=a("7L6O"),u=a.n(s),m=a("Su6/"),f=a.n(m),h=a("M8pY"),p=a("F0oz"),d=a("y7Ps"),E=a("aOPp"),y=function(e){var t=function(e){return e};return a.i(o.b)(t)(e)},g=y(d.a),v=y(E.a),b=c.a.createElement(u.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xs-12 col-md-10 col-md-offset-1"},c.a.createElement(f.a,{zDepth:3},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xs-12"},c.a.createElement(h.a,null))),c.a.createElement("div",{className:"row settingsRow flexRow"},c.a.createElement("div",{className:"col-xs-5"},c.a.createElement(g,null)),c.a.createElement("div",{className:"col-xs-7 flexRow"},c.a.createElement(v,null))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xs-12"},c.a.createElement(p.a,null)))))))),x=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return b},t}(i.Component);t.a=x},aOPp:function(e,t,a){"use strict";var n=a("U7vG"),r=a.n(n),l=a("KSGD"),i=(a.n(l),a("1h8F")),c=a("KMpy"),o=r.a.createElement(i.a,{className:"challengeReport--isNull"},r.a.createElement("h3",null,"Fill out the options first!")),s=function(e){return e.selectedExercise&&e.maxForLift?r.a.createElement(i.a,{className:"challengeReport"},r.a.createElement(c.a,e)):o};t.a=s},igfU:function(e,t,a){"use strict";var n=a("U7vG"),r=a.n(n),l=a("KSGD"),i=(a.n(l),r.a.createElement("strong",null,"45 lbs.")),c=function(e){return e.selectedDifficulty?r.a.createElement("div",{className:"difficultyDescription"},r.a.createElement("h3",null,"Selected: ",e.selectedDifficulty.name),r.a.createElement("small",null,e.selectedDifficulty.blurb),r.a.createElement("div",{className:"difficultyDescription--"+e.selectedDifficulty.level+" panel panel-default"},r.a.createElement("div",{className:"panel-body"},function(e){var t=15===e.sets?"half-pyramid":"full-pyramid";return r.a.createElement("div",null,"You will be doing a ",r.a.createElement("strong",null,t)," workout of ",r.a.createElement("strong",null,e.sets)," sets starting at ",i," and working up to ",r.a.createElement("strong",null,e.percentOfMax,"%")," of your one-rep maximum.")}(e.selectedDifficulty)))):null};t.a=c},lVK7:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=a("U7vG"),c=a.n(i),o=a("O27J"),s=(a.n(o),a("CIox")),u=a("RH2O"),m=a("2KeS"),f=a("ChGC"),h=a("S33B"),p=a.n(h),d=a("YCZr"),E=a("vsjR");a.n(E);p()();var y=a.i(m.a)(f.a);console.log(y.getState());var g=c.a.createElement(u.a,{store:y},c.a.createElement(d.a,null)),v=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return g},t}(i.PureComponent);a.i(o.render)(c.a.createElement(s.a,{history:s.b},c.a.createElement(s.c,{path:"/",component:v},c.a.createElement(s.c,{path:"/pyramid-challenge",component:v}))),document.querySelector("#app"))},ntE9:function(e,t,a){"use strict";var n=a("U7vG"),r=a.n(n),l=a("KSGD"),i=(a.n(l),a("hPbZ")),c=a.n(i),o=function(e){return r.a.createElement(c.a,{onChange:e.onChangeDifficulty,step:1,min:1,max:e.difficulties.length,defaultValue:1,value:e.selectedDifficulty?e.selectedDifficulty.level:1})};t.a=o},vsjR:function(e,t){},y7Ps:function(e,t,a){"use strict";var n=a("U7vG"),r=a.n(n),l=a("KSGD"),i=a.n(l),c=a("1h8F"),o=a("BCOr"),s=a("8NV/"),u=a("ntE9"),m=a("igfU"),f=a("IS78"),h=void 0,p=r.a.createElement("h3",null,"Choose Your Difficulty:"),d=r.a.createElement("h3",null,"Your Max Lift For This Exercise"),E=r.a.createElement("h3",null,"Choose Your Exercise"),y=function(e){var t=function(t,n,r){e.dispatch(a.i(o.a)(r))},n=function(t,n){e.dispatch(a.i(o.b)(n))},l=function(t,n){clearTimeout(h),h=setTimeout(function(){e.dispatch(a.i(o.c)(n))},500)},i=(e.selectedExercise,r.a.createElement(c.a,null,p,r.a.createElement(u.a,{onChangeDifficulty:n,difficulties:e.difficulties,selectedDifficulty:e.selectedDifficulty}),r.a.createElement(c.a,null,r.a.createElement(m.a,{selectedDifficulty:e.selectedDifficulty})),r.a.createElement(c.a,null,d,r.a.createElement(f.a,{onChange:l}))));return r.a.createElement(c.a,{className:"settingsForm"},E,r.a.createElement(s.a,{exercises:e.exercises,onChangeExercise:t,selectedExercise:e.selectedExercise}),i)};y.PropTypes={dispatch:i.a.func.isRequired,exercises:i.a.array,selectedDifficulty:i.a.number,selectedExercise:i.a.shape({name:i.a.string.isRequired,isBarbellExercise:i.a.bool})},t.a=y}},[0]);
//# sourceMappingURL=app.2f33d40f.js.map