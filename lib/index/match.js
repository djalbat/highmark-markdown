"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexMatch;
    }
});
var _constants = require("../constants");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var IndexMatch = /*#__PURE__*/ function() {
    function IndexMatch(regularExpression, transform) {
        _class_call_check(this, IndexMatch);
        this.regularExpression = regularExpression;
        this.transform = transform;
    }
    _create_class(IndexMatch, [
        {
            key: "getRegularExpression",
            value: function getRegularExpression() {
                return this.regularExpression;
            }
        },
        {
            key: "getReplacement",
            value: function getReplacement() {
                return this.transform;
            }
        },
        {
            key: "replace",
            value: function replace(plainText) {
                plainText = plainText.replace(this.regularExpression, this.transform); ///
                return plainText;
            }
        }
    ], [
        {
            key: "revert",
            value: function revert(wordOrPhrase) {
                wordOrPhrase = wordOrPhrase.replace(/_/g, _constants.SINGLE_SPACE);
                return wordOrPhrase;
            }
        },
        {
            key: "fromPhrase",
            value: function fromPhrase(phrase) {
                var regularExpression = new RegExp(phrase, _constants.GLOBAL_FLAG), transform = phrase.replace(/\s/g, _constants.UNDERSCORE), indexMatch = new IndexMatch(regularExpression, transform);
                return indexMatch;
            }
        }
    ]);
    return IndexMatch;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC9tYXRjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVU5ERVJTQ09SRSwgR0xPQkFMX0ZMQUcsIFNJTkdMRV9TUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHJlZ3VsYXJFeHByZXNzaW9uLCB0cmFuc2Zvcm0pIHtcbiAgICB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uID0gcmVndWxhckV4cHJlc3Npb247XG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gIH1cblxuICBnZXRSZWd1bGFyRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybTtcbiAgfVxuXG4gIHJlcGxhY2UocGxhaW5UZXh0KSB7XG4gICAgcGxhaW5UZXh0ID0gcGxhaW5UZXh0LnJlcGxhY2UodGhpcy5yZWd1bGFyRXhwcmVzc2lvbiwgdGhpcy50cmFuc2Zvcm0pOyAgLy8vXG5cbiAgICByZXR1cm4gcGxhaW5UZXh0O1xuICB9XG5cbiAgc3RhdGljIHJldmVydCh3b3JkT3JQaHJhc2UpIHtcbiAgICB3b3JkT3JQaHJhc2UgPSB3b3JkT3JQaHJhc2UucmVwbGFjZSgvXy9nLCBTSU5HTEVfU1BBQ0UpO1xuXG4gICAgcmV0dXJuIHdvcmRPclBocmFzZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGhyYXNlKHBocmFzZSkge1xuICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uID0gbmV3IFJlZ0V4cChwaHJhc2UsIEdMT0JBTF9GTEFHKSxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBwaHJhc2UucmVwbGFjZSgvXFxzL2csIFVOREVSU0NPUkUpLFxuICAgICAgICAgIGluZGV4TWF0Y2ggPSBuZXcgSW5kZXhNYXRjaChyZWd1bGFyRXhwcmVzc2lvbiwgdHJhbnNmb3JtKTtcblxuICAgIHJldHVybiBpbmRleE1hdGNoO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5kZXhNYXRjaCIsInJlZ3VsYXJFeHByZXNzaW9uIiwidHJhbnNmb3JtIiwiZ2V0UmVndWxhckV4cHJlc3Npb24iLCJnZXRSZXBsYWNlbWVudCIsInJlcGxhY2UiLCJwbGFpblRleHQiLCJyZXZlcnQiLCJ3b3JkT3JQaHJhc2UiLCJTSU5HTEVfU1BBQ0UiLCJmcm9tUGhyYXNlIiwicGhyYXNlIiwiUmVnRXhwIiwiR0xPQkFMX0ZMQUciLCJVTkRFUlNDT1JFIiwiaW5kZXhNYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7eUJBRmlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QyxJQUFBLEFBQU1BLDJCQUFOO2FBQU1BLFdBQ1BDLGlCQUFpQixFQUFFQyxTQUFTO2dDQURyQkY7UUFFakIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0E7UUFDekIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFIQUY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLGlCQUFpQjtZQUMvQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxTQUFTO2dCQUNmQSxZQUFZQSxVQUFVRCxPQUFPLENBQUMsSUFBSSxDQUFDSixpQkFBaUIsRUFBRSxJQUFJLENBQUNDLFNBQVMsR0FBSSxHQUFHO2dCQUUzRSxPQUFPSTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLE9BQU9DLFlBQVk7Z0JBQ3hCQSxlQUFlQSxhQUFhSCxPQUFPLENBQUMsTUFBTUksdUJBQVk7Z0JBRXRELE9BQU9EO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxXQUFXQyxNQUFNO2dCQUN0QixJQUFNVixvQkFBb0IsSUFBSVcsT0FBT0QsUUFBUUUsc0JBQVcsR0FDbERYLFlBQVlTLE9BQU9OLE9BQU8sQ0FBQyxPQUFPUyxxQkFBVSxHQUM1Q0MsYUFBYSxJQTdCRmYsV0E2QmlCQyxtQkFBbUJDO2dCQUVyRCxPQUFPYTtZQUNUOzs7V0FoQ21CZiJ9