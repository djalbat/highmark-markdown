"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SelectorsList;
    }
});
var _selectors = /*#__PURE__*/ _interop_require_default(require("./selectors"));
var _constants = require("../constants");
var _query = require("../utilities/query");
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
var selectorsNonTerminalNodesQuery = (0, _query.nodesQuery)("/selectorsList/selectors"), selectorsListNonTerminalNodeQuery = (0, _query.nodeQuery)("/ruleSet/selectorsList");
var SelectorsList = /*#__PURE__*/ function() {
    function SelectorsList(array) {
        _class_call_check(this, SelectorsList);
        this.array = array;
    }
    _create_class(SelectorsList, [
        {
            key: "getLength",
            value: function getLength() {
                return this.array.length;
            }
        },
        {
            key: "reduceSelectors",
            value: function reduceSelectors(callback, initialValue) {
                return this.array.reduce(callback, initialValue);
            }
        },
        {
            key: "forEachSelectors",
            value: function forEachSelectors(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "combine",
            value: function combine(selectorsList) {
                var outermost = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var outerSelectorsList = SelectorsList.fromArray(this.array), innerSelectorsList = selectorsList, array = outerSelectorsList.reduceSelectors(function(array, outerSelectors) {
                    innerSelectorsList.forEachSelectors(function(innerSelectors) {
                        var selectors = outerSelectors.combine(innerSelectors, outermost);
                        if (selectors !== null) {
                            array.push(selectors);
                        }
                    });
                    return array;
                }, []);
                selectorsList = SelectorsList.fromArray(array);
                return selectorsList;
            }
        },
        {
            key: "asCSS",
            value: function asCSS() {
                var css = _constants.EMPTY_STRING;
                var length = this.getLength();
                if (length > 0) {
                    css = this.array.reduce(function(css, selectors) {
                        var selectorsCSS = selectors.asCSS();
                        css = css === null ? selectorsCSS : "".concat(css, ",\n").concat(selectorsCSS);
                        return css;
                    }, null);
                }
                return css;
            }
        }
    ], [
        {
            key: "fromArray",
            value: function fromArray(array) {
                var selectorsList = new SelectorsList(array);
                return selectorsList;
            }
        },
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var selectorsListNonTerminalNode = selectorsListNonTerminalNodeQuery(node);
                node = selectorsListNonTerminalNode; ///
                var selectorsNonTerminalNodes = selectorsNonTerminalNodesQuery(node), array = selectorsNonTerminalNodes.map(function(selectorsNonTerminalNode) {
                    var _$node = selectorsNonTerminalNode, selectors = _selectors.default.fromNodeAndTokens(_$node, tokens);
                    return selectors;
                }), selectorsList = new SelectorsList(array);
                return selectorsList;
            }
        },
        {
            key: "fromSelectorsString",
            value: function fromSelectorsString(selectorsString) {
                var selectors = _selectors.default.fromSelectorsString(selectorsString), array = [
                    selectors
                ], selectorsList = new SelectorsList(array);
                return selectorsList;
            }
        }
    ]);
    return SelectorsList;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zZWxlY3RvcnNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2VsZWN0b3JzIGZyb20gXCIuL3NlbGVjdG9yc1wiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc2VsZWN0b3JzTGlzdC9zZWxlY3RvcnNcIiksXG4gICAgICBzZWxlY3RvcnNMaXN0Tm9uVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZVNldC9zZWxlY3RvcnNMaXN0XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RvcnNMaXN0IHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIHJlZHVjZVNlbGVjdG9ycyhjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7IHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTsgfVxuXG4gIGZvckVhY2hTZWxlY3RvcnMoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGNvbWJpbmUoc2VsZWN0b3JzTGlzdCwgb3V0ZXJtb3N0ID0gZmFsc2UpIHtcbiAgICBjb25zdCBvdXRlclNlbGVjdG9yc0xpc3QgPSBTZWxlY3RvcnNMaXN0LmZyb21BcnJheSh0aGlzLmFycmF5KSwgLy8vXG4gICAgICAgICAgaW5uZXJTZWxlY3RvcnNMaXN0ID0gc2VsZWN0b3JzTGlzdCwgLy8vXG4gICAgICAgICAgYXJyYXkgPSBvdXRlclNlbGVjdG9yc0xpc3QucmVkdWNlU2VsZWN0b3JzKChhcnJheSwgb3V0ZXJTZWxlY3RvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlubmVyU2VsZWN0b3JzTGlzdC5mb3JFYWNoU2VsZWN0b3JzKChpbm5lclNlbGVjdG9ycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSBvdXRlclNlbGVjdG9ycy5jb21iaW5lKGlubmVyU2VsZWN0b3JzLCBvdXRlcm1vc3QpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RvcnMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICBhcnJheS5wdXNoKHNlbGVjdG9ycyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgc2VsZWN0b3JzTGlzdCA9IFNlbGVjdG9yc0xpc3QuZnJvbUFycmF5KGFycmF5KTtcblxuICAgIHJldHVybiBzZWxlY3RvcnNMaXN0O1xuICB9XG5cbiAgYXNDU1MoKSB7XG4gICAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgY3NzID0gdGhpcy5hcnJheS5yZWR1Y2UoKGNzcywgc2VsZWN0b3JzKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yc0NTUyA9IHNlbGVjdG9ycy5hc0NTUygpO1xuXG4gICAgICAgIGNzcyA9IChjc3MgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBzZWxlY3RvcnNDU1MgOiAvLy9cbiAgICAgICAgICAgICAgICAgIGAke2Nzc30sXG4ke3NlbGVjdG9yc0NTU31gO1xuXG4gICAgICAgIHJldHVybiBjc3M7XG4gICAgICB9LCBudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21BcnJheShhcnJheSkge1xuICAgIGNvbnN0IHNlbGVjdG9yc0xpc3QgPSBuZXcgU2VsZWN0b3JzTGlzdChhcnJheSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBzZWxlY3RvcnNMaXN0Tm9uVGVybWluYWxOb2RlID0gc2VsZWN0b3JzTGlzdE5vblRlcm1pbmFsTm9kZVF1ZXJ5KG5vZGUpO1xuXG4gICAgbm9kZSA9IHNlbGVjdG9yc0xpc3ROb25UZXJtaW5hbE5vZGU7ICAvLy9cblxuICAgIGNvbnN0IHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZXMgPSBzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVzUXVlcnkobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVzLm1hcCgoc2VsZWN0b3JzTm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gc2VsZWN0b3JzTm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICBzZWxlY3RvcnMgPSBTZWxlY3RvcnMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzZWxlY3RvcnNMaXN0ID0gbmV3IFNlbGVjdG9yc0xpc3QoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yc0xpc3Q7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNlbGVjdG9yc1N0cmluZyhzZWxlY3RvcnNTdHJpbmcpIHtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSBTZWxlY3RvcnMuZnJvbVNlbGVjdG9yc1N0cmluZyhzZWxlY3RvcnNTdHJpbmcpLFxuICAgICAgICAgIGFycmF5ID0gW1xuICAgICAgICAgICAgc2VsZWN0b3JzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZWxlY3RvcnNMaXN0ID0gbmV3IFNlbGVjdG9yc0xpc3QoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yc0xpc3Q7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTZWxlY3RvcnNMaXN0Iiwic2VsZWN0b3JzTm9uVGVybWluYWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInNlbGVjdG9yc0xpc3ROb25UZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwicmVkdWNlU2VsZWN0b3JzIiwiY2FsbGJhY2siLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJmb3JFYWNoU2VsZWN0b3JzIiwiZm9yRWFjaCIsImNvbWJpbmUiLCJzZWxlY3RvcnNMaXN0Iiwib3V0ZXJtb3N0Iiwib3V0ZXJTZWxlY3RvcnNMaXN0IiwiZnJvbUFycmF5IiwiaW5uZXJTZWxlY3RvcnNMaXN0Iiwib3V0ZXJTZWxlY3RvcnMiLCJpbm5lclNlbGVjdG9ycyIsInNlbGVjdG9ycyIsInB1c2giLCJhc0NTUyIsImNzcyIsIkVNUFRZX1NUUklORyIsInNlbGVjdG9yc0NTUyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsInNlbGVjdG9yc0xpc3ROb25UZXJtaW5hbE5vZGUiLCJzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVzIiwibWFwIiwic2VsZWN0b3JzTm9uVGVybWluYWxOb2RlIiwiU2VsZWN0b3JzIiwiZnJvbVNlbGVjdG9yc1N0cmluZyIsInNlbGVjdG9yc1N0cmluZyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OztnRUFSQzt5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