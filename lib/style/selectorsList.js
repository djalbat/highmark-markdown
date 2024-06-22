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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zZWxlY3RvcnNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2VsZWN0b3JzIGZyb20gXCIuL3NlbGVjdG9yc1wiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc2VsZWN0b3JzTGlzdC9zZWxlY3RvcnNcIiksXG4gICAgICBzZWxlY3RvcnNMaXN0Tm9uVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZVNldC9zZWxlY3RvcnNMaXN0XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RvcnNMaXN0IHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIHJlZHVjZVNlbGVjdG9ycyhjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7IHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTsgfVxuXG4gIGZvckVhY2hTZWxlY3RvcnMoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGNvbWJpbmUoc2VsZWN0b3JzTGlzdCwgb3V0ZXJtb3N0ID0gZmFsc2UpIHtcbiAgICBjb25zdCBvdXRlclNlbGVjdG9yc0xpc3QgPSBTZWxlY3RvcnNMaXN0LmZyb21BcnJheSh0aGlzLmFycmF5KSwgLy8vXG4gICAgICAgICAgaW5uZXJTZWxlY3RvcnNMaXN0ID0gc2VsZWN0b3JzTGlzdCwgLy8vXG4gICAgICAgICAgYXJyYXkgPSBvdXRlclNlbGVjdG9yc0xpc3QucmVkdWNlU2VsZWN0b3JzKChhcnJheSwgb3V0ZXJTZWxlY3RvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlubmVyU2VsZWN0b3JzTGlzdC5mb3JFYWNoU2VsZWN0b3JzKChpbm5lclNlbGVjdG9ycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSBvdXRlclNlbGVjdG9ycy5jb21iaW5lKGlubmVyU2VsZWN0b3JzLCBvdXRlcm1vc3QpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RvcnMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICBhcnJheS5wdXNoKHNlbGVjdG9ycyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgc2VsZWN0b3JzTGlzdCA9IFNlbGVjdG9yc0xpc3QuZnJvbUFycmF5KGFycmF5KTtcblxuICAgIHJldHVybiBzZWxlY3RvcnNMaXN0O1xuICB9XG5cbiAgYXNDU1MoKSB7XG4gICAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgY3NzID0gdGhpcy5hcnJheS5yZWR1Y2UoKGNzcywgc2VsZWN0b3JzKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yc0NTUyA9IHNlbGVjdG9ycy5hc0NTUygpO1xuXG4gICAgICAgIGNzcyA9IChjc3MgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBzZWxlY3RvcnNDU1MgOiAvLy9cbiAgICAgICAgICAgICAgICAgIGAke2Nzc30sXG4ke3NlbGVjdG9yc0NTU31gO1xuXG4gICAgICAgIHJldHVybiBjc3M7XG4gICAgICB9LCBudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21BcnJheShhcnJheSkge1xuICAgIGNvbnN0IHNlbGVjdG9yc0xpc3QgPSBuZXcgU2VsZWN0b3JzTGlzdChhcnJheSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBzZWxlY3RvcnNMaXN0Tm9uVGVybWluYWxOb2RlID0gc2VsZWN0b3JzTGlzdE5vblRlcm1pbmFsTm9kZVF1ZXJ5KG5vZGUpO1xuXG4gICAgbm9kZSA9IHNlbGVjdG9yc0xpc3ROb25UZXJtaW5hbE5vZGU7ICAvLy9cblxuICAgIGNvbnN0IHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZXMgPSBzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVzUXVlcnkobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVzLm1hcCgoc2VsZWN0b3JzTm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gc2VsZWN0b3JzTm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICBzZWxlY3RvcnMgPSBTZWxlY3RvcnMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzZWxlY3RvcnNMaXN0ID0gbmV3IFNlbGVjdG9yc0xpc3QoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yc0xpc3Q7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNlbGVjdG9yc1N0cmluZyhzZWxlY3RvcnNTdHJpbmcpIHtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSBTZWxlY3RvcnMuZnJvbVNlbGVjdG9yc1N0cmluZyhzZWxlY3RvcnNTdHJpbmcpLFxuICAgICAgICAgIGFycmF5ID0gW1xuICAgICAgICAgICAgc2VsZWN0b3JzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZWxlY3RvcnNMaXN0ID0gbmV3IFNlbGVjdG9yc0xpc3QoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yc0xpc3Q7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTZWxlY3RvcnNMaXN0Iiwic2VsZWN0b3JzTm9uVGVybWluYWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInNlbGVjdG9yc0xpc3ROb25UZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwicmVkdWNlU2VsZWN0b3JzIiwiY2FsbGJhY2siLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJmb3JFYWNoU2VsZWN0b3JzIiwiZm9yRWFjaCIsImNvbWJpbmUiLCJzZWxlY3RvcnNMaXN0Iiwib3V0ZXJtb3N0Iiwib3V0ZXJTZWxlY3RvcnNMaXN0IiwiZnJvbUFycmF5IiwiaW5uZXJTZWxlY3RvcnNMaXN0Iiwib3V0ZXJTZWxlY3RvcnMiLCJpbm5lclNlbGVjdG9ycyIsInNlbGVjdG9ycyIsInB1c2giLCJhc0NTUyIsImNzcyIsIkVNUFRZX1NUUklORyIsInNlbGVjdG9yc0NTUyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsInNlbGVjdG9yc0xpc3ROb25UZXJtaW5hbE5vZGUiLCJzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVzIiwibWFwIiwic2VsZWN0b3JzTm9uVGVybWluYWxOb2RlIiwiU2VsZWN0b3JzIiwiZnJvbVNlbGVjdG9yc1N0cmluZyIsInNlbGVjdG9yc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7Z0VBUkM7eUJBRU87cUJBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUMsaUNBQWlDQyxJQUFBQSxpQkFBVSxFQUFDLDZCQUM1Q0Msb0NBQW9DQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXJDLElBQUEsQUFBTUosOEJBQUQsQUFBTDthQUFNQSxjQUNQ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