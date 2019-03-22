// JavaScript Document
$(document).ready(function(){
	"use strict";
	$(".nav>.history").hover(function(){
		$(this).next("ul").toggle(200);
	});
    $(".xianlogo").hover(function () {
        $(this).addClass('animated pulse');
        $(".xianbar").addClass('animated fadeIn');
        $(".xianbar").css("visibility","inherit");
    },function () {
        $(this).removeClass('animated pulse');
        $(".xianbar").removeClass('animated fadeIn');
        $(".xianbar").css("visibility","hidden");
    }) ;

    $(".lanzhoulogo").hover(function () {
        $(this).addClass('animated pulse');
        $(".lanzhoubar").addClass('animated fadeIn');
        $(".lanzhoubar").css("visibility","inherit");
    },function () {
        $(this).removeClass('animated pulse');
        $(".lanzhoubar").removeClass('animated fadeIn');
        $(".lanzhoubar").css("visibility","hidden");
    }) ;

    $(".wululogo").hover(function () {
        $(this).addClass('animated pulse');
        $(".wulubar").addClass('animated fadeIn');
        $(".wulubar").css("visibility","inherit");
    },function () {
        $(this).removeClass('animated pulse');
        $(".wulubar").removeClass('animated fadeIn');
        $(".wulubar").css("visibility","hidden");
    }) ;

    $(".samalogo").hover(function () {
        $(this).addClass('animated pulse');
        $(".samabar").addClass('animated fadeIn');
        $(".samabar").css("visibility","inherit");
    },function () {
        $(this).removeClass('animated pulse');
        $(".samabar").removeClass('animated fadeIn');
        $(".samabar").css("visibility","hidden");
    }) ;

    $(".deheilanlogo").hover(function () {
        $(this).addClass('animated pulse');
        $(".deheilanbar").addClass('animated fadeIn');
        $(".deheilanbar").css("visibility","inherit");
    },function () {
        $(this).removeClass('animated pulse');
        $(".deheilanbar").removeClass('animated fadeIn');
        $(".deheilanbar").css("visibility","hidden");
    }) ;

    $(".yisitanlogo").hover(function () {
        $(this).addClass('animated pulse');
        $(".yisibar").addClass('animated fadeIn');
        $(".yisibar").css("visibility","inherit");
    },function () {
        $(this).removeClass('animated pulse');
        $(".yisibar").removeClass('animated fadeIn');
        $(".yisibar").css("visibility","hidden");
    }) ;

    $(".moscowlogo").hover(function () {
        $(this).addClass('animated pulse');
        $(".moscowbar").addClass('animated fadeIn');
        $(".moscowbar").css("visibility","inherit");
    },function () {
        $(this).removeClass('animated pulse');
        $(".moscowbar").removeClass('animated fadeIn');
        $(".moscowbar").css("visibility","hidden");
    }) ;

    $(".lutedanlogo").hover(function () {
        $(this).addClass('animated pulse');
        $(".lutedanbar").addClass('animated fadeIn');
        $(".lutedanbar").css("visibility","inherit");
    },function () {
        $(this).removeClass('animated pulse');
        $(".lutedanbar").removeClass('animated fadeIn');
        $(".lutedanbar").css("visibility","hidden");
    }) ;

    $(".weinisilogo").hover(function () {
        $(this).addClass('animated pulse');
        $(".weinisibar").addClass('animated fadeIn');
        $(".weinisibar").css("visibility","inherit");
    },function () {
        $(this).removeClass('animated pulse');
        $(".weinisibar").removeClass('animated fadeIn');
        $(".weinisibar").css("visibility","hidden");
    }) ;
    
    

});