angular
    .module('app', ['mark', 'ngMaterial'])
    .controller('CoreController', CoreController);

CoreController.$inject = ['$scope', '$compile'];

function CoreController($scope, $compile) {
    var vm = this;
    vm.name = "Pupkin";

    var wrapper = document.getElementById('wrapper');
    
    $scope.marks = [];

    wrapper.addEventListener("click", function (MouseEvent) {
        if (MouseEvent.target.tagName === "IMG") {
            var obj = {
                offsetY: MouseEvent.offsetY,
                offsetX: MouseEvent.offsetX,
                comments: []
            };
            
            $scope.marks.push(obj);
            
            vm.index = $scope.marks.length - 1;
            
            //create new marker
            angular.element(wrapper)
                .append($compile(`<mark-click id="mark${vm.index}" marks='marks' owner='${ vm.name }'></mark-click>`)
                    ($scope));
                    
            //close previous popup marker    
            if (vm.index > 0) {
                getElement("descr", vm.index - 1).removeAttribute("style");
            }
            
            //open popup marker 
            setTimeout(function () {
                getElement("descr", vm.index).style.display = "block"
                getElement("descr", vm.index).style.position = 'absolute';
                getElement("descr", vm.index).style["z-index"] = '19';
            }, 100);
        }
    });
    
    function getElement(name, index) {
        return document.getElementById(`${name}${index}`)
    }
}