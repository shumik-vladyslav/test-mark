/**
* @desc order directive that  create the mark
* @example <mark-click marks='obj' owner='name'></mark-click>
*/
angular
    .module('mark', [])
    .directive('markClick', markClick);

function markClick() {

    var self = this;

    var directive = {

        link: link,

        scope: {
            marks: '=',
            owner: '@',
        },

        templateUrl: 'app/components/mark.directive.html',

        restrict: 'E'
    };
    return directive;

    function link(scope, element, attrs) {
        self.scope = scope;

        scope.index = scope.marks.length - 1;

        scope.offset = scope.marks[scope.index];

        scope.removeMark = removeMark;

        scope.addComment = addComment;

        scope.removeComment = removeComment;
    }

    function addComment(index) {
        var coments = self.scope.marks[index].comments;

        if (coments.length === 0) {
            document.getElementById(`descr${index}`).removeAttribute("style");
        }

        coments.push(self.scope.comment);

        self.scope.comment = ""
    }

    function removeComment(index) {
        self.scope.offset.comments.splice(index, 1);
    }

    function removeMark(index) {
        var parent = document.getElementById("wrapper");

        var child = document.getElementById(`mark${index}`);

        parent.removeChild(child);
    }
}