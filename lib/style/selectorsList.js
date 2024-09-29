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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zZWxlY3RvcnNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2VsZWN0b3JzIGZyb20gXCIuL3NlbGVjdG9yc1wiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc2VsZWN0b3JzTGlzdC9zZWxlY3RvcnNcIiksXG4gICAgICBzZWxlY3RvcnNMaXN0Tm9uVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZVNldC9zZWxlY3RvcnNMaXN0XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RvcnNMaXN0IHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIHJlZHVjZVNlbGVjdG9ycyhjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7IHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTsgfVxuXG4gIGZvckVhY2hTZWxlY3RvcnMoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGNvbWJpbmUoc2VsZWN0b3JzTGlzdCwgb3V0ZXJtb3N0ID0gZmFsc2UpIHtcbiAgICBjb25zdCBvdXRlclNlbGVjdG9yc0xpc3QgPSBTZWxlY3RvcnNMaXN0LmZyb21BcnJheSh0aGlzLmFycmF5KSwgLy8vXG4gICAgICAgICAgaW5uZXJTZWxlY3RvcnNMaXN0ID0gc2VsZWN0b3JzTGlzdCwgLy8vXG4gICAgICAgICAgYXJyYXkgPSBvdXRlclNlbGVjdG9yc0xpc3QucmVkdWNlU2VsZWN0b3JzKChhcnJheSwgb3V0ZXJTZWxlY3RvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlubmVyU2VsZWN0b3JzTGlzdC5mb3JFYWNoU2VsZWN0b3JzKChpbm5lclNlbGVjdG9ycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSBvdXRlclNlbGVjdG9ycy5jb21iaW5lKGlubmVyU2VsZWN0b3JzLCBvdXRlcm1vc3QpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RvcnMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICBhcnJheS5wdXNoKHNlbGVjdG9ycyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgc2VsZWN0b3JzTGlzdCA9IFNlbGVjdG9yc0xpc3QuZnJvbUFycmF5KGFycmF5KTtcblxuICAgIHJldHVybiBzZWxlY3RvcnNMaXN0O1xuICB9XG5cbiAgYXNDU1MoKSB7XG4gICAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgY3NzID0gdGhpcy5hcnJheS5yZWR1Y2UoKGNzcywgc2VsZWN0b3JzKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yc0NTUyA9IHNlbGVjdG9ycy5hc0NTUygpO1xuXG4gICAgICAgIGNzcyA9IChjc3MgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBzZWxlY3RvcnNDU1MgOiAvLy9cbiAgICAgICAgICAgICAgICAgIGAke2Nzc30sXG4ke3NlbGVjdG9yc0NTU31gO1xuXG4gICAgICAgIHJldHVybiBjc3M7XG4gICAgICB9LCBudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21BcnJheShhcnJheSkge1xuICAgIGNvbnN0IHNlbGVjdG9yc0xpc3QgPSBuZXcgU2VsZWN0b3JzTGlzdChhcnJheSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBzZWxlY3RvcnNMaXN0Tm9uVGVybWluYWxOb2RlID0gc2VsZWN0b3JzTGlzdE5vblRlcm1pbmFsTm9kZVF1ZXJ5KG5vZGUpO1xuXG4gICAgbm9kZSA9IHNlbGVjdG9yc0xpc3ROb25UZXJtaW5hbE5vZGU7ICAvLy9cblxuICAgIGNvbnN0IHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZXMgPSBzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVzUXVlcnkobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVzLm1hcCgoc2VsZWN0b3JzTm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gc2VsZWN0b3JzTm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICBzZWxlY3RvcnMgPSBTZWxlY3RvcnMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzZWxlY3RvcnNMaXN0ID0gbmV3IFNlbGVjdG9yc0xpc3QoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yc0xpc3Q7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNlbGVjdG9yc1N0cmluZyhzZWxlY3RvcnNTdHJpbmcpIHtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSBTZWxlY3RvcnMuZnJvbVNlbGVjdG9yc1N0cmluZyhzZWxlY3RvcnNTdHJpbmcpLFxuICAgICAgICAgIGFycmF5ID0gW1xuICAgICAgICAgICAgc2VsZWN0b3JzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZWxlY3RvcnNMaXN0ID0gbmV3IFNlbGVjdG9yc0xpc3QoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yc0xpc3Q7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTZWxlY3RvcnNMaXN0Iiwic2VsZWN0b3JzTm9uVGVybWluYWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInNlbGVjdG9yc0xpc3ROb25UZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwicmVkdWNlU2VsZWN0b3JzIiwiY2FsbGJhY2siLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJmb3JFYWNoU2VsZWN0b3JzIiwiZm9yRWFjaCIsImNvbWJpbmUiLCJzZWxlY3RvcnNMaXN0Iiwib3V0ZXJtb3N0Iiwib3V0ZXJTZWxlY3RvcnNMaXN0IiwiZnJvbUFycmF5IiwiaW5uZXJTZWxlY3RvcnNMaXN0Iiwib3V0ZXJTZWxlY3RvcnMiLCJpbm5lclNlbGVjdG9ycyIsInNlbGVjdG9ycyIsInB1c2giLCJhc0NTUyIsImNzcyIsIkVNUFRZX1NUUklORyIsInNlbGVjdG9yc0NTUyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsInNlbGVjdG9yc0xpc3ROb25UZXJtaW5hbE5vZGUiLCJzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVzIiwibWFwIiwic2VsZWN0b3JzTm9uVGVybWluYWxOb2RlIiwiU2VsZWN0b3JzIiwiZnJvbVNlbGVjdG9yc1N0cmluZyIsInNlbGVjdG9yc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7Z0VBUkM7eUJBRU87cUJBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUMsaUNBQWlDQyxJQUFBQSxpQkFBVSxFQUFDLDZCQUM1Q0Msb0NBQW9DQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXJDLElBQUEsQUFBTUosOEJBQU47YUFBTUEsY0FDUEssS0FB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