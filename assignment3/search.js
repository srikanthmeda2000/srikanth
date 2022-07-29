var app = angular.module("search", []);
app.controller("searchController", function ($scope) {
  $scope.searchItems = [
    {
      section: 'men|boys',
      id: 1,
      name: 'shirts',
      desc: 'Mens double-breasted fake two-piece long-sleeved shirt',
      quntity: 1,
      Image: '../assignment3/shirts.jpg',
      price: '$550',
    },
    {
      section: 'men|boys',
      id: 2,
      name: 'shirts',
      desc: 'Mens double-breasted fake two-piece long-sleeved shirt',
      quntity: 1,
      Image: '../assignment3/sh.png',
      price: '$500',
    },
    {
      section: 'men|boys',
      id: 3,
      name: 'shirts',
      desc: 'Mens double-breasted fake two-piece long-sleeved shirt',
      quntity: 1,
      Image: '../assignment3/41QRuRZCAZL.jpg',
      price: '$350',
    },
    {
      section: 'men|boys',
      id: 4,
      name: 'shirts',
      desc: 'Mens double-breasted fake two-piece long-sleeved shirt',
      quntity: 1,
      Image: '../assignment3/shirts1.jpg',
      price: '$300',
    },
    {
      section: 'men|boys',
      id: 5,
      name: 'shirts',
      desc: 'Mens double-breasted fake two-piece long-sleeved shirt',
      quntity: 1,
      Image: '../assignment3/shirts2.jpg',
      price: '$250',
    },
    {
      section: 'men|boys',
      id: 6,
      name: 'shirts',
      desc: 'Mens double-breasted fake two-piece long-sleeved shirt',
      quntity: 1,
      Image: '../assignment3/shirts3.jpg',
      price: '$400',
    },
    {
      section: 'pants',
      id: 7,
      name: 'pants',
      desc: 'Designed for wildlife explorations in dry weather. Trousers offering durability thanks to the solid',
      quntity: 1,
      Image: '../assignment3/pants.jpg',
      price: '$400',
    },
    {
      section: 'men|boys',
      id: 8,
      name: 'Tshirts',
      desc: ' Due to monitor settings, monitor pixel definitions, we cannot guarantee that the color of the product.',
      quntity: 1,
      Image: '../assignment3/tshirt.jpg',
      price: '$400',
    },
    {
      section: 'shoes',
      id: 9,
      name: 'shoes',
      desc: 'Each feature of the FLYBOLT, from the aerodynamic shape profile to the premium Rydefoam cushioning',
      quntity: 1,
      Image: '../assignment3/shopping.png',
      price: '$400',
    },
    {
      section: 'shoes',
      id: 10,
      name: 'shoes',
      desc: 'Each feature of the FLYBOLT, from the aerodynamic shape profile to the premium Rydefoam cushioning',
      quntity: 1,
      Image: '../assignment3/shopping (1).png',
      price: '$400',
    },
    {
      section: 'men|boys',
      id: 11,
      name: 'shirts',
      desc: 'Due to monitor settings, monitor pixel definitions, we cannot guarantee that the color of the product.',
      quntity: 1,
      Image: '../assignment3/download.jpg',
      price: '$400',
    },
    {
      section: 'shoes',
      id: 12,
      name: 'shoes',
      desc: 'Each feature of the FLYBOLT, from the aerodynamic shape profile to the premium Rydefoam cushioning',
      quntity: 1,
      Image: '../assignment3/shopping (2).png',
      price: '$400',
    },
  ]
  $scope.foundList = [];
  $scope.message = '';
  $scope.isVisible = false;
  $scope.show = function () {
    $scope.isVisible = $scope.isVisible ? false : true
  };

  $scope.store = function (item) {
    if (item) {
      $scope.foundList.push({ section: item.section, id: item.id, name: item.name, desc: item.desc, Image: item.Image, price: item.price })
      console.log($scope.foundList)
    }

  }

  $scope.getCost = function(cart) {
    return cart.quntity *price;
  };

  $scope.remove = function (cart) {
    if (cart) {
      $scope.foundList.splice($scope.foundList.indexOf(cart), 1);
      // $scope.total -= cart.price;
    }
  }


  app.filter('searchFor', function () {
    return function (arr, searchString) {
      if (!searchString) {
        return arr
      }
      var result = []
      searchString = searchString.toLowerCase()
      angular.forEach(arr, (item) => {
        if (item.section.toLowerCase().indexOf(searchString) !== -1) {
          result.push(item)
        }
      })
      return result;
    }
  })
});