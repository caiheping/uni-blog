(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-swiper-dot/uni-swiper-dot"],{"2ba6":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"50dc":function(t,e,n){"use strict";n.r(e);var o=n("de3d"),i=n.n(o);for(var d in o)"default"!==d&&function(t){n.d(e,t,function(){return o[t]})}(d);e["default"]=i.a},"6ebc":function(t,e,n){},a90b:function(t,e,n){"use strict";n.r(e);var o=n("2ba6"),i=n("50dc");for(var d in i)"default"!==d&&function(t){n.d(e,t,function(){return i[t]})}(d);n("e43e");var s=n("2877"),r=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,"2600b65e",null);e["default"]=r.exports},de3d:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"UniSwiperDot",props:{info:{type:Array,default:function(){return[]}},current:{type:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""}},data:function(){return{dots:{width:8,height:8,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}},watch:{dotsStyles:function(t){this.dots=Object.assign(this.dots,this.dotsStyles)},mode:function(t){"indexes"===t?(this.dots.width=20,this.dots.height=20):(this.dots.width=8,this.dots.height=8)}},created:function(){"indexes"===this.mode&&(this.dots.width=20,this.dots.height=20),this.dots=Object.assign(this.dots,this.dotsStyles)}};e.default=o},e43e:function(t,e,n){"use strict";var o=n("6ebc"),i=n.n(o);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-swiper-dot/uni-swiper-dot-create-component',
    {
        'components/uni-swiper-dot/uni-swiper-dot-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("a90b"))
        })
    },
    [['components/uni-swiper-dot/uni-swiper-dot-create-component']]
]);                
