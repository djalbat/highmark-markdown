"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PhraseMatcher;
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
var PhraseMatcher = /*#__PURE__*/ function() {
    function PhraseMatcher(regularExpression, replacement) {
        _class_call_check(this, PhraseMatcher);
        this.regularExpression = regularExpression;
        this.replacement = replacement;
    }
    _create_class(PhraseMatcher, [
        {
            key: "getRegularExpression",
            value: function getRegularExpression() {
                return this.regularExpression;
            }
        },
        {
            key: "getReplacement",
            value: function getReplacement() {
                return this.replacement;
            }
        },
        {
            key: "replace",
            value: function replace(plainText) {
                plainText = plainText.replace(this.regularExpression, this.replacement); ///
                return plainText;
            }
        }
    ], [
        {
            key: "revert",
            value: function revert(entry) {
                entry = entry.replace(/_/g, _constants.SINGLE_SPACE);
                return entry;
            }
        },
        {
            key: "fromPhrase",
            value: function fromPhrase(phrase) {
                var regularExpression = new RegExp(phrase, _constants.GLOBAL_FLAG), replacement = phrase.replace(/\s/g, _constants.UNDERSCORE), phraseMatcher = new PhraseMatcher(regularExpression, replacement);
                return phraseMatcher;
            }
        }
    ]);
    return PhraseMatcher;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC9waHJhc2VNYXRjaGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBVTkRFUlNDT1JFLCBHTE9CQUxfRkxBRywgU0lOR0xFX1NQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaHJhc2VNYXRjaGVyIHtcbiAgY29uc3RydWN0b3IocmVndWxhckV4cHJlc3Npb24sIHJlcGxhY2VtZW50KSB7XG4gICAgdGhpcy5yZWd1bGFyRXhwcmVzc2lvbiA9IHJlZ3VsYXJFeHByZXNzaW9uO1xuICAgIHRoaXMucmVwbGFjZW1lbnQgPSByZXBsYWNlbWVudDtcbiAgfVxuXG4gIGdldFJlZ3VsYXJFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZW1lbnQ7XG4gIH1cblxuICByZXBsYWNlKHBsYWluVGV4dCkge1xuICAgIHBsYWluVGV4dCA9IHBsYWluVGV4dC5yZXBsYWNlKHRoaXMucmVndWxhckV4cHJlc3Npb24sIHRoaXMucmVwbGFjZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gcGxhaW5UZXh0O1xuICB9XG5cbiAgc3RhdGljIHJldmVydChlbnRyeSkge1xuICAgIGVudHJ5ID0gZW50cnkucmVwbGFjZSgvXy9nLCBTSU5HTEVfU1BBQ0UpO1xuXG4gICAgcmV0dXJuIGVudHJ5O1xuICB9XG5cbiAgc3RhdGljIGZyb21QaHJhc2UocGhyYXNlKSB7XG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb24gPSBuZXcgUmVnRXhwKHBocmFzZSwgR0xPQkFMX0ZMQUcpLFxuICAgICAgICAgIHJlcGxhY2VtZW50ID0gcGhyYXNlLnJlcGxhY2UoL1xccy9nLCBVTkRFUlNDT1JFKSxcbiAgICAgICAgICBwaHJhc2VNYXRjaGVyID0gbmV3IFBocmFzZU1hdGNoZXIocmVndWxhckV4cHJlc3Npb24sIHJlcGxhY2VtZW50KTtcblxuICAgIHJldHVybiBwaHJhc2VNYXRjaGVyO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUGhyYXNlTWF0Y2hlciIsInJlZ3VsYXJFeHByZXNzaW9uIiwicmVwbGFjZW1lbnQiLCJnZXRSZWd1bGFyRXhwcmVzc2lvbiIsImdldFJlcGxhY2VtZW50IiwicmVwbGFjZSIsInBsYWluVGV4dCIsInJldmVydCIsImVudHJ5IiwiU0lOR0xFX1NQQUNFIiwiZnJvbVBocmFzZSIsInBocmFzZSIsIlJlZ0V4cCIsIkdMT0JBTF9GTEFHIiwiVU5ERVJTQ09SRSIsInBocmFzZU1hdGNoZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3lCQUZpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkMsSUFBQSxBQUFNQSw4QkFBRCxBQUFMO2FBQU1BLGNBQ1BDLGlCQUFpQixFQUFFQyxXQUFXO2dDQUR2QkY7UUFFakIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0E7UUFDekIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztrQkFIRkY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLGlCQUFpQjtZQUMvQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsV0FBVztZQUN6Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxTQUFTO2dCQUNmQSxZQUFZQSxVQUFVRCxPQUFPLENBQUMsSUFBSSxDQUFDSixpQkFBaUIsRUFBRSxJQUFJLENBQUNDLFdBQVcsR0FBSSxHQUFHO2dCQUU3RSxPQUFPSTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLE9BQU9DLEtBQUs7Z0JBQ2pCQSxRQUFRQSxNQUFNSCxPQUFPLENBQUMsTUFBTUksdUJBQVk7Z0JBRXhDLE9BQU9EO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxXQUFXQyxNQUFNO2dCQUN0QixJQUFNVixvQkFBb0IsSUFBSVcsT0FBT0QsUUFBUUUsc0JBQVcsR0FDbERYLGNBQWNTLE9BQU9OLE9BQU8sQ0FBQyxPQUFPUyxxQkFBVSxHQUM5Q0MsZ0JBQWdCLElBN0JMZixjQTZCdUJDLG1CQUFtQkM7Z0JBRTNELE9BQU9hO1lBQ1Q7OztXQWhDbUJmIn0=