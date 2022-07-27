var app = angular.module('checkOff', [])
.controller('toBuyController', toBuyController)
.controller('alreadyBoughtController', alreadyBoughtController)
.service('buyBoughtServer', buyBoughtServer)

toBuyController.$inject = ['buyBoughtServer'];
function toBuyController(buyBoughtServer) {
    var toBuy = this;
    toBuy.items = [
        { name: 'hi', quantity: 3 },
        { name: 'hi', quantity: 5 },
        { name: 'hi', quantity: 6 },
        { name: 'hi', quantity: 1 },
        { name: 'hi', quantity: 6 },
        { name: 'hi', quantity: 9 },
        { name: 'hi', quantity: 6 },
        { name: 'hi', quantity: 5 },
        { name: 'hi', quantity: 5 },
        { name: 'hi', quantity: 5 },
        { name: 'hi', quantity: 3 }

    ];
    toBuy.moveItem = function(itemIndex) {
        buyBoughtServer.moveItem(itemIndex, toBuy.items);
    }
};

alreadyBoughtController.$inject = ['buyBoughtServer'];
function alreadyBoughtController(buyBoughtServer) {
    var alreadyBought = this;
    alreadyBought.items = buyBoughtServer.items;
};

function buyBoughtServer() {
    var buyBought = this;
    buyBought.items = [];
    buyBought.moveItem = function (itemIndex, arrayOfitems) {
        var item = { name: '', quantity: '' }
        item.name = arrayOfitems[itemIndex].name;
        item.quantity = arrayOfitems[itemIndex].quantity;
        arrayOfitems.splice(itemIndex, 1);
        buyBought.items.push(item);
    };

};
