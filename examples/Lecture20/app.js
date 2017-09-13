(function () {
'use strict';
    
var shoppingList1=["Milk","Donuts","Chocolate"];    
 
var shoppingList2=[
    {name:"Milk",
     quantity:"2"
    },
    {name:"Donuts",
     quantity:"200"
    },
    {name:"Chocolate",
     quantity:"2"
    }
];

angular.module('ShoppingListApp',[])
.controller('ShoppingListAddController',ShoppingListAddController)
.controller('ShoppingListShowController',ShoppingListShowController)
.service("ShoppingListService",ShoppingListService);
    
ShoppingListAddController.$inject=['ShoppingListService'];
    function ShoppingListAddController(ShoppingListService){
       var itemAdder=this;
        itemAdder.itemName="";
        itemAdder.itemQuantity="";
        
        itemAdder.addItem=function(){
           console.log("valores"+itemAdder.itemName+itemAdder.itemQuantity); ShoppingListService.addItem(itemAdder.itemName,
            itemAdder.itemQuantity);
        }
       
    }
    
    ShoppingListShowController.$inject=['ShoppingListService'];
    function ShoppingListShowController(ShoppingListService){
       var showList=this;
        showList.removeItem=function(index){
            ShoppingListService.remoteItem(index);
        };
        showList.items=ShoppingListService.getItems();     
    }
    
    function ShoppingListService(){
        var service=this;
        var items=[{name:"Milk",
            quantity:"2"
            }];
        service.addItem=function(itemName,quantity){
            var item={
                name:itemName,
                quantity:quantity
            };
            items.push(item);
            
        };
        
        service.remoteItem=function(itemIndex){
            items.splice(itemIndex,1);
        };
        service.getItems=function(){
            return items;
        };
    }
    
    
    
    
})();

