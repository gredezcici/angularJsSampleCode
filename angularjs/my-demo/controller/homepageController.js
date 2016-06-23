/**
 * Created by Administrator on 2016/6/22.
 */
(function(){
    'use strict';
    // var homepage = angular.module("homepageApp",[]);
    var homepageApp=angular.module("homepageApp",[]);
    homepageApp.controller("searchbarcontroller", SearchbarController);
    function SearchbarController(){
        var se = this;
        se.productCats = [{locale:'en-US',name:'United States'}, {locale:'en-GB',name:'United Kingdom'}, {locale:'en-FR',name:'France'}];
        se.changeCat =changeCategory;
        se.searchhandler=searchhandler;
        function searchhandler(){
            var cat =  angular.element("#search_concept").text();
            var keywords = angular.element("#x-search-keywords").val();
        }
        function changeCategory(ele){
            angular.element("#search_concept").text(ele);
        }
    };
})()