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
            key: "fromPhrase",
            value: function fromPhrase(phrase) {
                var regularExpression = new RegExp(phrase, _constants.GLOBAL_FLAG), replacement = phrase.replace(/\s/g, _constants.UNDERSCORE), phraseMatcher = new PhraseMatcher(regularExpression, replacement);
                return phraseMatcher;
            }
        }
    ]);
    return PhraseMatcher;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC9waHJhc2VNYXRjaGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBVTkRFUlNDT1JFLCBHTE9CQUxfRkxBRyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGhyYXNlTWF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKHJlZ3VsYXJFeHByZXNzaW9uLCByZXBsYWNlbWVudCkge1xuICAgIHRoaXMucmVndWxhckV4cHJlc3Npb24gPSByZWd1bGFyRXhwcmVzc2lvbjtcbiAgICB0aGlzLnJlcGxhY2VtZW50ID0gcmVwbGFjZW1lbnQ7XG4gIH1cblxuICBnZXRSZWd1bGFyRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2VtZW50O1xuICB9XG5cbiAgcmVwbGFjZShwbGFpblRleHQpIHtcbiAgICBwbGFpblRleHQgPSBwbGFpblRleHQucmVwbGFjZSh0aGlzLnJlZ3VsYXJFeHByZXNzaW9uLCB0aGlzLnJlcGxhY2VtZW50KTsgIC8vL1xuXG4gICAgcmV0dXJuIHBsYWluVGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGhyYXNlKHBocmFzZSkge1xuICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uID0gbmV3IFJlZ0V4cChwaHJhc2UsIEdMT0JBTF9GTEFHKSxcbiAgICAgICAgICByZXBsYWNlbWVudCA9IHBocmFzZS5yZXBsYWNlKC9cXHMvZywgVU5ERVJTQ09SRSksXG4gICAgICAgICAgcGhyYXNlTWF0Y2hlciA9IG5ldyBQaHJhc2VNYXRjaGVyKHJlZ3VsYXJFeHByZXNzaW9uLCByZXBsYWNlbWVudCk7XG5cbiAgICByZXR1cm4gcGhyYXNlTWF0Y2hlcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlBocmFzZU1hdGNoZXIiLCJyZWd1bGFyRXhwcmVzc2lvbiIsInJlcGxhY2VtZW50IiwiZ2V0UmVndWxhckV4cHJlc3Npb24iLCJnZXRSZXBsYWNlbWVudCIsInJlcGxhY2UiLCJwbGFpblRleHQiLCJmcm9tUGhyYXNlIiwicGhyYXNlIiwiUmVnRXhwIiwiR0xPQkFMX0ZMQUciLCJVTkRFUlNDT1JFIiwicGhyYXNlTWF0Y2hlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7eUJBRm1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFBLEFBQU1BLDhCQUFELEFBQUw7YUFBTUEsY0FDUEMsaUJBQWlCLEVBQUVDLFdBQVc7Z0NBRHZCRjtRQUVqQixJQUFJLENBQUNDLGlCQUFpQixHQUFHQTtRQUN6QixJQUFJLENBQUNDLFdBQVcsR0FBR0E7O2tCQUhGRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsaUJBQWlCO1lBQy9COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixXQUFXO1lBQ3pCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLFNBQVM7Z0JBQ2ZBLFlBQVlBLFVBQVVELE9BQU8sQ0FBQyxJQUFJLENBQUNKLGlCQUFpQixFQUFFLElBQUksQ0FBQ0MsV0FBVyxHQUFJLEdBQUc7Z0JBRTdFLE9BQU9JO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsV0FBV0MsTUFBTTtnQkFDdEIsSUFBTVAsb0JBQW9CLElBQUlRLE9BQU9ELFFBQVFFLHNCQUFXLEdBQ2xEUixjQUFjTSxPQUFPSCxPQUFPLENBQUMsT0FBT00scUJBQVUsR0FDOUNDLGdCQUFnQixJQXZCTFosY0F1QnVCQyxtQkFBbUJDO2dCQUUzRCxPQUFPVTtZQUNUOzs7V0ExQm1CWiJ9