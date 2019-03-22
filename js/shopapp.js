//以下是jQuery代码
$(document).ready(function(){
    "use strict";
    
    $(".xianlogo").click(function(){
        $(".xianlogo").addClass("visited");
        $(".lanzhoulogo").removeClass("visited");
        $(".wulumuqilogo").removeClass("visited");
        $(".deheilanlogo").removeClass("visited");
        $(".yisitanlogo").removeClass("visited");
        $(".samaerhanlogo").removeClass("visited");
        $(".mosikelogo").removeClass("visited");
        $(".lutedanlogo").removeClass("visited");
        $(".weinisilogo").removeClass("visited");
    }) ;

    $(".lanzhoulogo").click(function(){
        $(".lanzhoulogo").addClass("visited");
        $(".yisitanlogo").removeClass("visited");
        $(".wulumuqilogo").removeClass("visited");
        $(".deheilanlogo").removeClass("visited");
        $(".xianlogo").removeClass("visited");
        $(".samaerhanlogo").removeClass("visited");
        $(".mosikelogo").removeClass("visited");
        $(".lutedanlogo").removeClass("visited");
        $(".weinisilogo").removeClass("visited");
    }) ;
   
    $(".wulumuqilogo").click(function(){
        $(".wulumuqilogo").addClass("visited");
        $(".lanzhoulogo").removeClass("visited");
        $(".yisitanlogo").removeClass("visited");
        $(".deheilanlogo").removeClass("visited");
        $(".xianlogo").removeClass("visited");
        $(".samaerhanlogo").removeClass("visited");
        $(".mosikelogo").removeClass("visited");
        $(".lutedanlogo").removeClass("visited");
        $(".weinisilogo").removeClass("visited");
    }) ;
   
    $(".deheilanlogo").click(function(){
        $(".deheilanlogo").addClass("visited");
        $(".lanzhoulogo").removeClass("visited");
        $(".wulumuqilogo").removeClass("visited");
        $(".yisitanlogo").removeClass("visited");
        $(".xianlogo").removeClass("visited");
        $(".samaerhanlogo").removeClass("visited");
        $(".mosikelogo").removeClass("visited");
        $(".lutedanlogo").removeClass("visited");
        $(".weinisilogo").removeClass("visited");
    }) ;
    
    $(".yisitanlogo").click(function(){
        $(".yisitanlogo").addClass("visited");
        $(".lanzhoulogo").removeClass("visited");
        $(".wulumuqilogo").removeClass("visited");
        $(".deheilanlogo").removeClass("visited");
        $(".xianlogo").removeClass("visited");
        $(".samaerhanlogo").removeClass("visited");
        $(".mosikelogo").removeClass("visited");
        $(".lutedanlogo").removeClass("visited");
        $(".weinisilogo").removeClass("visited");
    }) ;

    $(".samaerhanlogo").click(function(){
        $(".samaerhanlogo").addClass("visited");
        $(".lanzhoulogo").removeClass("visited");
        $(".wulumuqilogo").removeClass("visited");
        $(".deheilanlogo").removeClass("visited");
        $(".xianlogo").removeClass("visited");
        $(".yisitanlogo").removeClass("visited");
        $(".mosikelogo").removeClass("visited");
        $(".lutedanlogo").removeClass("visited");
        $(".weinisilogo").removeClass("visited");
    }) ;

    $(".mosikelogo").click(function(){
        $(".mosikelogo").addClass("visited");
        $(".lanzhoulogo").removeClass("visited");
        $(".wulumuqilogo").removeClass("visited");
        $(".deheilanlogo").removeClass("visited");
        $(".xianlogo").removeClass("visited");
        $(".yisitanlogo").removeClass("visited");
        $(".samaerhanlogo").removeClass("visited");
        $(".lutedanlogo").removeClass("visited");
        $(".weinisilogo").removeClass("visited");
    }) ;

    $(".lutedanlogo").click(function(){
        $(".lutedanlogo").addClass("visited");
        $(".lanzhoulogo").removeClass("visited");
        $(".wulumuqilogo").removeClass("visited");
        $(".deheilanlogo").removeClass("visited");
        $(".xianlogo").removeClass("visited");
        $(".yisitanlogo").removeClass("visited");
        $(".samaerhanlogo").removeClass("visited");
        $(".mosikelogo").removeClass("visited");
        $(".weinisilogo").removeClass("visited");
    }) ;

    $(".weinisilogo").click(function(){
        $(".weinisilogo").addClass("visited");
        $(".lanzhoulogo").removeClass("visited");
        $(".wulumuqilogo").removeClass("visited");
        $(".deheilanlogo").removeClass("visited");
        $(".xianlogo").removeClass("visited");
        $(".yisitanlogo").removeClass("visited");
        $(".samaerhanlogo").removeClass("visited");
        $(".mosikelogo").removeClass("visited");
        $(".lutedanlogo").removeClass("visited");
    }) ;

});

//以下是vue代码
const Xian = { template:'#tp1' }
const Lanzhou = { template:'#tp2'}
const Wulumuqi = {template:'#tp3'}
const Samaerhan = {template:'#tp4'}
const Deheilan = {template:'#tp5'}
const Yistan = { template:'#tp6' }
const Mosike = { template:'#tp7'}
const Lutedan = {template:'#tp8'}
const Weinisi = {template:'#tp9'}


const routes = [
    {path: '/', component: Xian},
    {path:'/xian',component: Xian},
    {path:'/lanzhou',component: Lanzhou},
    {path:'/wulumuqi',component:Wulumuqi},
    {path:'/samaerhan',component:Samaerhan},
    {path:'/deheilan',component:Deheilan},
    {path:'/yisitan',component: Yistan},
    {path:'/mosike',component: Mosike},
    {path:'/lutedan',component:Lutedan},
    {path:'/weinisi',component:Weinisi}
]

const router = new VueRouter({
    routes
})

const container = new Vue({
    router
}).$mount('.container')