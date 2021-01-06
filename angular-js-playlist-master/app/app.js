var myProApp = angular.module('myProApp', ['ngRoute']);
myProApp.config(['$routeProvider', function($routeProvider, ) {

    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'ProItemController'
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'ProController'
        })
        .when('/images', {
            templateUrl: 'views/images.html',
            controller: 'ProImageController'
        }).when('/homePage', {
            templateUrl: 'views/homePage.html',
            controller: 'ProController'
        })
        .otherwise({
            redirectTo: '/home'
        });

}]);

myProApp.controller('ProController', ['$scope', function($scope, ) {
    $scope.removePro = function(pro) {
        var removePro = $scope.proList.indexOf(pro);
        $scope.proList.splice(removePro, 1);
    }

    $scope.addPro = function() {
        $scope.proList.push({
            name: $scope.newPro.name,
            belt: $scope.newPro.belt,
            rate: $scope.newPro.rate,
            available: true
        });
        $scope.newPro.name = "";
        $scope.newPro.belt = "";
        $scope.newPro.rate = " ";
    };

    $scope.proList = [{
        name: "Dinesh",
        belt: "Green",
        rate: 50,
        available: true,
        thumb: "content/img/2.jpg"

    }, {
        name: "Munish",
        belt: "Blue",
        rate: 100,
        available: true,
        thumb: "content/img/4.png"

    }, {
        name: "Arun",
        belt: "Red",
        rate: 40,
        available: true,
        thumb: "content/img/5.png"

    }];

}]);

myProApp.controller('ProItemController', ['$scope', function($scope) {
    $scope.filterOptions = {
        stores: [
            { id: 1, name: 'Show All', type: "all" },
            { id: 2, name: 'Text', type: "text" },
            { id: 3, name: 'Videos', type: "videos" },
            { id: 4, name: 'Photos', type: "photos" }
        ]
    };

    $scope.customFilter = function(data) {
        if (data.type === $scope.filterOptions.store.type) {
            return true;
        } else if ($scope.filterOptions.store.type === "all") {
            return true;
        } else {
            return false;
        }
    };

    $scope.data = [{
            name: "photo1.jpg",

            type: "photos"
        },
        {
            name: "photo2.jpg",

            type: "photos"
        },
        {
            name: "video1.mp4",

            type: "videos"
        },
        {
            name: "video2.mp4",

            type: "videos"
        },
        {
            name: "text1.txt",
            type: "text"
        },
        {
            name: "text1.txt",
            type: "text"
        }
    ];
}]);
myProApp.controller('ProImageController', ['$scope', function($scope) {
    $scope.images = [{
        "src": "content/img/4.png",
    }, {
        "src": "content/img/5.png",

    }, {
        "src": "content/img/6.png",

    }, {
        "src": "content/img/image1.jpg",

    }, {
        "src": "content/img/image2.jpg",


    }];
    $scope.changeImage = function() {
        var src = (this.pics.src);
        $scope.imgSrc = src;
    }
}]);