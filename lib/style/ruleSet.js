"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleSet;
    }
});
var _declarations = /*#__PURE__*/ _interop_require_default(require("./declarations"));
var _selectorsList = /*#__PURE__*/ _interop_require_default(require("./selectorsList"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var RuleSet = /*#__PURE__*/ function() {
    function RuleSet(ruleSets, declarations, selectorsList) {
        _class_call_check(this, RuleSet);
        this.ruleSets = ruleSets;
        this.declarations = declarations;
        this.selectorsList = selectorsList;
    }
    _create_class(RuleSet, [
        {
            key: "getRuleSets",
            value: function getRuleSets() {
                return this.ruleSets;
            }
        },
        {
            key: "getDeclarations",
            value: function getDeclarations() {
                return this.declarations;
            }
        },
        {
            key: "getSelectorsList",
            value: function getSelectorsList() {
                return this.selectorsList;
            }
        },
        {
            key: "asCSS",
            value: function asCSS(selectorsList) {
                var outermost = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                selectorsList = selectorsList.combine(this.selectorsList, outermost); ///
                var declarationsCSS = this.declarations.asCSS(selectorsList), ruleSetsCSS = this.ruleSets.asCSS(selectorsList), css = declarationsCSS === _constants.EMPTY_STRING ? ruleSetsCSS : "".concat(declarationsCSS, "\n").concat(ruleSetsCSS);
                return css;
            }
        }
    ], [
        {
            key: "fromRuleSetsNodeAndTokens",
            value: function fromRuleSetsNodeAndTokens(RuleSets, node, tokens) {
                var ruleSets = RuleSets.fromNodeAndTokens(node, tokens), declarations = _declarations.default.fromNodeAndTokens(node, tokens), selectorsList = _selectorsList.default.fromNodeAndTokens(node, tokens), ruleSet = new RuleSet(ruleSets, declarations, selectorsList);
                return ruleSet;
            }
        }
    ]);
    return RuleSet;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9ydWxlU2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb25zIGZyb20gXCIuL2RlY2xhcmF0aW9uc1wiO1xuaW1wb3J0IFNlbGVjdG9yc0xpc3QgZnJvbSBcIi4vc2VsZWN0b3JzTGlzdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVTZXQge1xuICBjb25zdHJ1Y3RvcihydWxlU2V0cywgZGVjbGFyYXRpb25zLCBzZWxlY3RvcnNMaXN0KSB7XG4gICAgdGhpcy5ydWxlU2V0cyA9IHJ1bGVTZXRzO1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICAgIHRoaXMuc2VsZWN0b3JzTGlzdCA9IHNlbGVjdG9yc0xpc3Q7XG4gIH1cblxuICBnZXRSdWxlU2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlU2V0cztcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbnM7XG4gIH1cblxuICBnZXRTZWxlY3RvcnNMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdG9yc0xpc3Q7XG4gIH1cblxuICBhc0NTUyhzZWxlY3RvcnNMaXN0LCBvdXRlcm1vc3QgPSBmYWxzZSkge1xuICAgIHNlbGVjdG9yc0xpc3QgPSBzZWxlY3RvcnNMaXN0LmNvbWJpbmUodGhpcy5zZWxlY3RvcnNMaXN0LCBvdXRlcm1vc3QpOyAgLy8vXG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmRlY2xhcmF0aW9ucy5hc0NTUyhzZWxlY3RvcnNMaXN0KSxcbiAgICAgICAgICBydWxlU2V0c0NTUyA9IHRoaXMucnVsZVNldHMuYXNDU1Moc2VsZWN0b3JzTGlzdCksXG4gICAgICAgICAgY3NzID0gKGRlY2xhcmF0aW9uc0NTUyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICAgICAgICAgICAgICBydWxlU2V0c0NTUyA6IC8vL1xuICAgICAgICAgICAgICAgICAgICBgJHtkZWNsYXJhdGlvbnNDU1N9XG4ke3J1bGVTZXRzQ1NTfWA7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlU2V0c05vZGVBbmRUb2tlbnMoUnVsZVNldHMsIG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHJ1bGVTZXRzID0gUnVsZVNldHMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBEZWNsYXJhdGlvbnMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzZWxlY3RvcnNMaXN0ID0gU2VsZWN0b3JzTGlzdC5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVTZXQgPSBuZXcgUnVsZVNldChydWxlU2V0cywgZGVjbGFyYXRpb25zLCBzZWxlY3RvcnNMaXN0KTtcblxuICAgIHJldHVybiBydWxlU2V0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiUnVsZVNldCIsInJ1bGVTZXRzIiwiZGVjbGFyYXRpb25zIiwic2VsZWN0b3JzTGlzdCIsImdldFJ1bGVTZXRzIiwiZ2V0RGVjbGFyYXRpb25zIiwiZ2V0U2VsZWN0b3JzTGlzdCIsImFzQ1NTIiwib3V0ZXJtb3N0IiwiY29tYmluZSIsImRlY2xhcmF0aW9uc0NTUyIsInJ1bGVTZXRzQ1NTIiwiY3NzIiwiRU1QVFlfU1RSSU5HIiwiZnJvbVJ1bGVTZXRzTm9kZUFuZFRva2VucyIsIlJ1bGVTZXRzIiwibm9kZSIsInRva2VucyIsImZyb21Ob2RlQW5kVG9rZW5zIiwiRGVjbGFyYXRpb25zIiwiU2VsZWN0b3JzTGlzdCIsInJ1bGVTZXQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzttRUFMSTtvRUFDQzt5QkFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEsd0JBQUQsQUFBTDthQUFNQSxRQUNQQyxRQUFRLEVBQUVDLFlBQVksRUFBRUMsYUFBYTtnQ0FEOUJIO1FBRWpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOztrQkFKSkg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFlBQVk7WUFDMUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGFBQWE7WUFDM0I7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUosYUFBYTtvQkFBRUssWUFBQUEsaUVBQVk7Z0JBQy9CTCxnQkFBZ0JBLGNBQWNNLE9BQU8sQ0FBQyxJQUFJLENBQUNOLGFBQWEsRUFBRUssWUFBYSxHQUFHO2dCQUUxRSxJQUFNRSxrQkFBa0IsSUFBSSxDQUFDUixZQUFZLENBQUNLLEtBQUssQ0FBQ0osZ0JBQzFDUSxjQUFjLElBQUksQ0FBQ1YsUUFBUSxDQUFDTSxLQUFLLENBQUNKLGdCQUNsQ1MsTUFBTSxBQUFDRixvQkFBb0JHLHVCQUFZLEdBQy9CRixjQUNFLEFBQUMsR0FDbkJBLE9BRHFCRCxpQkFBZ0IsTUFDekIsT0FBWkM7Z0JBRUUsT0FBT0M7WUFDVDs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSwwQkFBMEJDLFFBQVEsRUFBRUMsSUFBSSxFQUFFQyxNQUFNO2dCQUNyRCxJQUFNaEIsV0FBV2MsU0FBU0csaUJBQWlCLENBQUNGLE1BQU1DLFNBQzVDZixlQUFlaUIscUJBQVksQ0FBQ0QsaUJBQWlCLENBQUNGLE1BQU1DLFNBQ3BEZCxnQkFBZ0JpQixzQkFBYSxDQUFDRixpQkFBaUIsQ0FBQ0YsTUFBTUMsU0FDdERJLFVBQVUsSUFwQ0NyQixRQW9DV0MsVUFBVUMsY0FBY0M7Z0JBRXBELE9BQU9rQjtZQUNUOzs7V0F2Q21CckIifQ==