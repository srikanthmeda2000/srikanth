var app = angular.module("search", []);
app.controller("searchController", function ($scope) {
    $scope.searchItems = [
        {
            section: 'men|boys',
            id: 1,
            name: 'zeans',
            desc: 'product description',
            Image: ,
            price: 'product price',
        },
        {
            section: 'men|boys',
            id: 2,
            name: 'shirts',
            desc: 'product description',
            Image: 'image url',
            price: 'product price',
        },
        {
            section: 'men|boys',
            id: 3,
            name: 'product name',
            desc: 'product description',
            Image: 'image url',
            price: 'product price',
        },
        {
            section: 'men|boys',
            id: 4,
            name: 'product name',
            desc: 'product description',
            Image: 'image url',
            price: 'product price',
        },
        {
            section: 'men|boys',
            id: 5,
            name: 'product name',
            desc: 'product description',
            Image: 'image url',
            price: 'product price',
        },
        {
            section: 'women|girls',
            id: 6,
            name: 'product name',
            desc: 'product description',
            Image: 'image url',
            price: 'product price',
        },
        {
            section: 'men|boys',
            id: 7,
            name: 'product name',
            desc: 'product description',
            Image: 'image url',
            price: 'product price',
        }
    ]
    $scope.foundList = [];
    $scope.message = '';
    $scope.isVisible = false;
    $scope.show = function (ite) {
        $scope.isVisible = $scope.isVisible ? fasle : true
    }
})

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
        return result
    }
})
