'use strict';


// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', ['ngRoute']);

$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        slideshowSpeed: 5000,
        itemWidth: 350,
        maxItems: 1,
        nextText: "",
        prevText: "",
        smoothHeight: true,
        controlNav: false,
    });
});

myApp.controller('ProductListCtrl', function ($scope) {
    $scope.shirts = [
        {'name': 'Bare Shirts',
         'pic': '/app/img/shirt.png',
         'link': '/app/products/shirts.html'},
        {'name': 'Bare Cases',
         'pic': '/app/img/case.jpg',
         'link': '/app/products/cases.html'},
        {'name': 'Bare Accessories',
         'pic': '/app/img/decal.jpg',
         'link': '/app/products/accessories.html'}
    ];
    $scope.cases = [
        {'name': 'Arusha 5s',
         'pic': 'img/arusha1.jpg',
         'link': 'products/cases/arusha5s.html'},
        {'name': 'BareAtlas 5s',
         'pic': 'img/BAO1.jpg',
         'link': 'products/cases/bareatlas5s.html'},
        {'name': 'BareAtlas 6',
         'pic': 'img/BOR1.jpg',
         'link': 'products/cases/bareatlas6.html'},
        {'name': 'Decajohn 5s',
         'pic': 'img/decajohn5gy.jpg',
         'link': 'products/cases/decajohn5.html'},
    ];
    $scope.accessories = [
        {'name': 'Bare Decal',
         'pic': 'img/decal1.jpg',
         'link': 'products/accessories/decal.html'},
    ];
});

myApp.controller('ShirtListCtrl', function ($scope) {
    $scope.count = 0;
    $scope.shirts = [
        {'name': 'Graffiti T',
         'pic': ['/app/img/shirt.png',
                '/app/img/shirt-back.jpg'],
         'link': '/app/products/shirts/graffitit.html',
         'price': '$30.00',},
        {'name': 'Simple Crew',
         'pic': ['/app/img/shirt.png',
                '/app/img/shirt-back.jpg'],
         'link': '/app/products/shirts/simplecrew.html',
         'price': '$30.00',},
    ];
});

myApp.controller('CaseListCtrl', function ($scope) {
    $scope.count = 0;
    $scope.cases = [
        {'name': 'Arusha 5s',
         'pic': ['../img/arusha1.jpg',
                '../img/arusha2.jpg'],
         'link': 'cases/arusha5s.html',
         'price': '$25.00'},
        {'name': 'BareAtlas 5s',
         'pic': ['../img/BAO1.jpg',
                '../img/BAO2.jpg'],
         'link': 'cases/bareatlas5s.html',
         'price': '$25.00'},
        {'name': 'BareAtlas 6',
         'pic': ['../img/BOR1.jpg',
                '../img/BOR2.jpg'],
         'link': 'cases/bareatlas6.html',
         'price': '$25.00'},
        {'name': 'Decajohn 5s',
         'pic': ['../img/decajohn5gy.jpg',
                 '../img/decajohn5white.jpg'],
         'link': 'cases/decajohn5.html',
         'price': '$20.00'},
        {'name': 'Arusha 5s Plastic',
         'pic': ['../img/arusha5.jpg'],
         'link': 'cases/arushaplastic.html',
         'price': '$20.00'},
        {'name': 'Highlands 5s',
         'pic': ['../img/highlands5.jpg'],
         'link': 'cases/highlands.html',
         'price': '$20.00'},
        {'name': 'BareAtlas 5s',
         'pic': ['../img/bareatlas5green.jpg'],
         'link': 'cases/bareatlas5.html',
         'price': '$20.00'},
    ];
});

myApp.controller('AccessoryListCtrl', function ($scope) {
    $scope.count = 0;
    $scope.accessories = [
        {'name': 'Bare Decal',
         'pic': ['../img/decal1.jpg',
                '../img/stickerBAabove.jpg'],
         'link': '/app/products/accessories/decal1.html',
         'price': '$2.50'},
    ];
});

myApp.controller('Arusha5sListCtrl', function ($scope) {
    $scope.pictures = [
        {'link': '../../img/arusha1.jpg'},
        {'link': '/app/img/arusha2.jpg'},
    ];
    $scope.colors = [
        {'link': '../../img/arushatexture.jpg',
         'title': 'Bamboo'
        },
    ];
    $scope.sizes = [
        {'letter': 'S',
          'title': 'Small'
        },
        {'letter': 'M',
          'title': 'Medium'
        },
        {'letter': 'L',
          'title': 'Large'
        },
        {'letter': 'XL',
          'title': 'Extra-Large'
        },
    ];
});

myApp.controller('ArushaPlasticListCtrl', function ($scope) {
    $scope.pictures = [
        {'link': '../../img/arusha5.jpg'},
    ];
    $scope.colors = [
        {'link': '../../img/arusha.jpg',
         'title': 'Arusha'
        },
    ];
    $scope.sizes = [
        {'letter': 'S',
          'title': 'Small'
        },
        {'letter': 'M',
          'title': 'Medium'
        },
        {'letter': 'L',
          'title': 'Large'
        },
        {'letter': 'XL',
          'title': 'Extra-Large'
        },
    ];
});

myApp.controller('Highlands5ListCtrl', function ($scope) {
    $scope.pictures = [
        {'link': '../../img/highlands5.jpg'},
    ];
    $scope.colors = [
        {'link': '../../img/highlands.jpg',
         'title': 'Highlands'
        },
    ];
    $scope.sizes = [
        {'letter': 'S',
          'title': 'Small'
        },
        {'letter': 'M',
          'title': 'Medium'
        },
        {'letter': 'L',
          'title': 'Large'
        },
        {'letter': 'XL',
          'title': 'Extra-Large'
        },
    ];
});

myApp.controller('BareAtlas5ListCtrl', function ($scope) {
    $scope.pictures = [
        {'link': '../../img/bareatlas5green.jpg'},
    ];
    $scope.colors = [
        {'link': '../../img/green.jpg',
         'title': 'Green'
        },
    ];
    $scope.sizes = [
        {'letter': 'S',
          'title': 'Small'
        },
        {'letter': 'M',
          'title': 'Medium'
        },
        {'letter': 'L',
          'title': 'Large'
        },
        {'letter': 'XL',
          'title': 'Extra-Large'
        },
    ];
});

myApp.controller('Bareatlas5sListCtrl', function ($scope) {
    $scope.pictures = [
        {'link': '../../img/BAO1.jpg'},
        {'link': '../../img/BAO2.jpg'},
    ];
    $scope.colors = [
        {'link': '../../img/Oaktexture.jpg',
         'title': 'Oak'
        },
    ];
    $scope.sizes = [
        {'letter': 'S',
          'title': 'Small'
        },
        {'letter': 'M',
          'title': 'Medium'
        },
        {'letter': 'L',
          'title': 'Large'
        },
        {'letter': 'XL',
          'title': 'Extra-Large'
        },
    ];
});

myApp.controller('Bareatlas6ListCtrl', function ($scope) {
    $scope.pictures = [
        {'link': '../../img/BOR1.jpg'},
        {'link': '../../img/BOR2.jpg'},
    ];
    $scope.colors = [
        {'link': '../../img/BORtexture.jpg',
         'title': 'Rosewood'
        },
    ];
    $scope.sizes = [
        {'letter': 'S',
          'title': 'Small'
        },
        {'letter': 'M',
          'title': 'Medium'
        },
        {'letter': 'L',
          'title': 'Large'
        },
        {'letter': 'XL',
          'title': 'Extra-Large'
        },
    ];
});

myApp.controller('Decajohn5sListCtrl', function ($scope) {
    $scope.pictures = [
        {'link': '../../img/decajohn5gy.jpg'},
        {'link': '../../img/decajohn5white.jpg'},
    ];
    $scope.colors = [
        {'link': '../../img/decagy.jpg',
         'title': 'Green/Yellow'
        },
        {'link': '../../img/decawhite.jpg',
         'title': 'White'
        },
    ];
    $scope.sizes = [
        {'letter': 'S',
          'title': 'Small'
        },
        {'letter': 'M',
          'title': 'Medium'
        },
        {'letter': 'L',
          'title': 'Large'
        },
        {'letter': 'XL',
          'title': 'Extra-Large'
        },
    ];
});

myApp.controller('BaredecalListCtrl', function ($scope) {
    $scope.pictures = [
        {'link': '../../img/decal1.jpg'},
        {'link': '../../img/stickerBAabove.jpg'},
    ];
    $scope.colors = [
        {'link': '../../img/BORtexture.jpg',
         'title': 'Rosewood'
        },
    ];
    $scope.sizes = [
        {'letter': 'S',
          'title': 'Small'
        },
        {'letter': 'M',
          'title': 'Medium'
        },
        {'letter': 'L',
          'title': 'Large'
        },
        {'letter': 'XL',
          'title': 'Extra-Large'
        },
    ];
});
