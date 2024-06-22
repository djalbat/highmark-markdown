"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Selectors;
    }
});
var _necessary = require("necessary");
var _selector = /*#__PURE__*/ _interop_require_default(require("./selector"));
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
var selectorNonTerminalNodesQuery = (0, _query.nodesQuery)("/selectors/selector");
var first = _necessary.arrayUtilities.first;
var Selectors = /*#__PURE__*/ function() {
    function Selectors(content, whitespace) {
        _class_call_check(this, Selectors);
        this.content = content;
        this.whitespace = whitespace;
    }
    _create_class(Selectors, [
        {
            key: "getContent",
            value: function getContent() {
                return this.content;
            }
        },
        {
            key: "hasWhitespace",
            value: function hasWhitespace() {
                return this.whitespace;
            }
        },
        {
            key: "combine",
            value: function combine(selectors) {
                var outermost = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                if (selectors !== null) {
                    var outerSelectors = this, innerSelectors = selectors, outerSelectorsContent = outerSelectors.getContent(), innerSelectorsContent = innerSelectors.getContent(), outerSelectorsWhitespace = outerSelectors.hasWhitespace(), innerSelectorsWhitespace = innerSelectors.hasWhitespace();
                    selectors = null;
                    if (outermost && !innerSelectorsWhitespace) {
                    ///
                    } else {
                        if (outerSelectorsContent !== null && innerSelectorsContent !== null) {
                            var content = "".concat(outerSelectorsContent).concat(innerSelectorsContent), whitespace = outerSelectorsWhitespace;
                            selectors = Selectors.fromContentAndWhitespace(content, whitespace);
                        }
                    }
                }
                return selectors;
            }
        },
        {
            key: "asCSS",
            value: function asCSS() {
                var css = this.content; ///
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var selectors = selectorsFromNodeAndTokens(node, tokens);
                return selectors;
            }
        },
        {
            key: "fromSelectorsString",
            value: function fromSelectorsString(selectorsString) {
                var content = selectorsString, whitespace = false, selectors = new Selectors(content, whitespace);
                return selectors;
            }
        },
        {
            key: "fromContentAndWhitespace",
            value: function fromContentAndWhitespace(content, whitespace) {
                var selectors = new Selectors(content, whitespace);
                return selectors;
            }
        }
    ]);
    return Selectors;
}();
function selectorsFromNodeAndTokens(node, tokens) {
    var selectors = null;
    var selectorNonTerminalNodes = selectorNonTerminalNodesQuery(node), selectorArray = selectorNonTerminalNodes.reduce(function(selectorArray, selectorNonTerminalNode) {
        var _$node = selectorNonTerminalNode, selector = _selector.default.fromNodeAndTokens(_$node, tokens);
        if (selector !== null) {
            selectorArray.push(selector);
        }
        return selectorArray;
    }, []), selectorsArrayLength = selectorArray.length;
    if (selectorsArrayLength > 0) {
        var firstSelector = first(selectorArray), selector = firstSelector, content = selectorArray.reduce(function(content, selector) {
            var selectorContent = selector.getContent(), selectorWhitespace = selector.hasWhitespace();
            if (content === null) {
                content = selectorWhitespace ? " ".concat(selectorContent) : "".concat(selectorContent);
            } else {
                content = selectorWhitespace ? "".concat(content, " ").concat(selectorContent) : "".concat(content).concat(selectorContent);
            }
            return content;
        }, null), whitespace = selector.hasWhitespace();
        selectors = new Selectors(content, whitespace);
    }
    return selectors;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zZWxlY3RvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSBcIi4vc2VsZWN0b3JcIjtcblxuaW1wb3J0IHsgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3NlbGVjdG9ycy9zZWxlY3RvclwiKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdG9ycyB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIHdoaXRlc3BhY2UpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMud2hpdGVzcGFjZSA9IHdoaXRlc3BhY2U7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBoYXNXaGl0ZXNwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLndoaXRlc3BhY2U7XG4gIH1cblxuICBjb21iaW5lKHNlbGVjdG9ycywgb3V0ZXJtb3N0ID0gZmFsc2UpIHtcbiAgICBpZiAoc2VsZWN0b3JzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBvdXRlclNlbGVjdG9ycyA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIGlubmVyU2VsZWN0b3JzID0gc2VsZWN0b3JzLCAvLy9cbiAgICAgICAgICAgIG91dGVyU2VsZWN0b3JzQ29udGVudCA9IG91dGVyU2VsZWN0b3JzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIGlubmVyU2VsZWN0b3JzQ29udGVudCA9IGlubmVyU2VsZWN0b3JzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIG91dGVyU2VsZWN0b3JzV2hpdGVzcGFjZSA9IG91dGVyU2VsZWN0b3JzLmhhc1doaXRlc3BhY2UoKSxcbiAgICAgICAgICAgIGlubmVyU2VsZWN0b3JzV2hpdGVzcGFjZSA9IGlubmVyU2VsZWN0b3JzLmhhc1doaXRlc3BhY2UoKTtcblxuICAgICAgc2VsZWN0b3JzID0gbnVsbDtcblxuICAgICAgaWYgKG91dGVybW9zdCAmJiAhaW5uZXJTZWxlY3RvcnNXaGl0ZXNwYWNlKSB7XG4gICAgICAgIC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKChvdXRlclNlbGVjdG9yc0NvbnRlbnQgIT09IG51bGwpICYmIChpbm5lclNlbGVjdG9yc0NvbnRlbnQgIT09IG51bGwpKSB7XG4gICAgICAgICAgY29uc3QgY29udGVudCA9IGAke291dGVyU2VsZWN0b3JzQ29udGVudH0ke2lubmVyU2VsZWN0b3JzQ29udGVudH1gLFxuICAgICAgICAgICAgICAgIHdoaXRlc3BhY2UgPSBvdXRlclNlbGVjdG9yc1doaXRlc3BhY2U7XG5cbiAgICAgICAgICBzZWxlY3RvcnMgPSBTZWxlY3RvcnMuZnJvbUNvbnRlbnRBbmRXaGl0ZXNwYWNlKGNvbnRlbnQsIHdoaXRlc3BhY2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgfVxuXG4gIGFzQ1NTKCkge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMuY29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHNlbGVjdG9ycyA9IHNlbGVjdG9yc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TZWxlY3RvcnNTdHJpbmcoc2VsZWN0b3JzU3RyaW5nKSB7XG4gICAgY29uc3QgY29udGVudCA9IHNlbGVjdG9yc1N0cmluZyxcbiAgICAgICAgICB3aGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgc2VsZWN0b3JzID0gbmV3IFNlbGVjdG9ycyhjb250ZW50LCB3aGl0ZXNwYWNlKTtcblxuICAgIHJldHVybiBzZWxlY3RvcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRXaGl0ZXNwYWNlKGNvbnRlbnQsIHdoaXRlc3BhY2UpIHtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSBuZXcgU2VsZWN0b3JzKGNvbnRlbnQsIHdoaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgfVxufVxuXG5mdW5jdGlvbiBzZWxlY3RvcnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgbGV0IHNlbGVjdG9ycyA9IG51bGw7XG5cbiAgY29uc3Qgc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzID0gc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzUXVlcnkobm9kZSksXG4gICAgICAgIHNlbGVjdG9yQXJyYXkgPSBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXMucmVkdWNlKChzZWxlY3RvckFycmF5LCBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5vZGUgPSBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yID0gU2VsZWN0b3IuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgIGlmIChzZWxlY3RvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc2VsZWN0b3JBcnJheS5wdXNoKHNlbGVjdG9yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc2VsZWN0b3JBcnJheTtcbiAgICAgICAgfSwgW10pLFxuICAgICAgICBzZWxlY3RvcnNBcnJheUxlbmd0aCA9IHNlbGVjdG9yQXJyYXkubGVuZ3RoO1xuXG4gIGlmIChzZWxlY3RvcnNBcnJheUxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBmaXJzdFNlbGVjdG9yID0gZmlyc3Qoc2VsZWN0b3JBcnJheSksXG4gICAgICAgICAgc2VsZWN0b3IgPSBmaXJzdFNlbGVjdG9yLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gc2VsZWN0b3JBcnJheS5yZWR1Y2UoKGNvbnRlbnQsIHNlbGVjdG9yKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RvckNvbnRlbnQgPSBzZWxlY3Rvci5nZXRDb250ZW50KCksXG4gICAgICAgICAgICAgICAgICBzZWxlY3RvcldoaXRlc3BhY2UgPSBzZWxlY3Rvci5oYXNXaGl0ZXNwYWNlKCk7XG5cbiAgICAgICAgICAgIGlmIChjb250ZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBzZWxlY3RvcldoaXRlc3BhY2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIGAgJHtzZWxlY3RvckNvbnRlbnR9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtzZWxlY3RvckNvbnRlbnR9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBzZWxlY3RvcldoaXRlc3BhY2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIGAke2NvbnRlbnR9ICR7c2VsZWN0b3JDb250ZW50fWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7Y29udGVudH0ke3NlbGVjdG9yQ29udGVudH1gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICB3aGl0ZXNwYWNlID0gc2VsZWN0b3IuaGFzV2hpdGVzcGFjZSgpO1xuXG4gICAgc2VsZWN0b3JzID0gbmV3IFNlbGVjdG9ycyhjb250ZW50LCB3aGl0ZXNwYWNlKTtcbiAgfVxuXG4gIHJldHVybiBzZWxlY3RvcnM7XG59XG4iXSwibmFtZXMiOlsiU2VsZWN0b3JzIiwic2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImNvbnRlbnQiLCJ3aGl0ZXNwYWNlIiwiZ2V0Q29udGVudCIsImhhc1doaXRlc3BhY2UiLCJjb21iaW5lIiwic2VsZWN0b3JzIiwib3V0ZXJtb3N0Iiwib3V0ZXJTZWxlY3RvcnMiLCJpbm5lclNlbGVjdG9ycyIsIm91dGVyU2VsZWN0b3JzQ29udGVudCIsImlubmVyU2VsZWN0b3JzQ29udGVudCIsIm91dGVyU2VsZWN0b3JzV2hpdGVzcGFjZSIsImlubmVyU2VsZWN0b3JzV2hpdGVzcGFjZSIsImZyb21Db250ZW50QW5kV2hpdGVzcGFjZSIsImFzQ1NTIiwiY3NzIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwic2VsZWN0b3JzRnJvbU5vZGVBbmRUb2tlbnMiLCJmcm9tU2VsZWN0b3JzU3RyaW5nIiwic2VsZWN0b3JzU3RyaW5nIiwic2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzIiwic2VsZWN0b3JBcnJheSIsInJlZHVjZSIsInNlbGVjdG9yTm9uVGVybWluYWxOb2RlIiwic2VsZWN0b3IiLCJTZWxlY3RvciIsInB1c2giLCJzZWxlY3RvcnNBcnJheUxlbmd0aCIsImxlbmd0aCIsImZpcnN0U2VsZWN0b3IiLCJzZWxlY3RvckNvbnRlbnQiLCJzZWxlY3RvcldoaXRlc3BhY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7O3lCQVZVOytEQUVWO3FCQUVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQU1DLGdDQUFnQ0MsSUFBQUEsaUJBQVUsRUFBQztBQUVqRCxJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUgsMEJBQUQsQUFBTDthQUFNQSxVQUNQSyxPQUFPLEVBQUVDLFVBQVU7Z0NBRFpOO1FBRWpCLElBQUksQ0FBQ0ssT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBSEROOztZQU1uQk8s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