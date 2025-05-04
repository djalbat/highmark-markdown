"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DivisionHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
var _pageNumber = /*#__PURE__*/ _interop_require_default(require("../../transform/html/pageNumber"));
var _footnotesList = /*#__PURE__*/ _interop_require_default(require("../../transform/html/footnotesList"));
var _ruleNames = require("../../ruleNames");
var _html1 = require("../../utilities/html");
var _division = require("../../utilities/division");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var DivisionHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(DivisionHTMLNode, HTMLNode);
    function DivisionHTMLNode() {
        _class_call_check(this, DivisionHTMLNode);
        return _call_super(this, DivisionHTMLNode, arguments);
    }
    _create_class(DivisionHTMLNode, [
        {
            key: "className",
            value: function className(context) {
                var className = this.constructor.className;
                return className;
            }
        },
        {
            key: "getRuleName",
            value: function getRuleName() {
                var ruleNme = _ruleNames.DIVISION_RULE_NAME;
                return ruleNme;
            }
        },
        {
            key: "getFootnoteHTMLNodes",
            value: function getFootnoteHTMLNodes() {
                var node = this, footnoteHTMLNodes = (0, _html1.footnoteHTMLNodesFromNode)(node);
                return footnoteHTMLNodes;
            }
        },
        {
            key: "getFootnotesDirectiveHTMLNode",
            value: function getFootnotesDirectiveHTMLNode() {
                var node = this, footnotesDirectiveHTMLNode = (0, _html1.footnotesDirectiveHTMLNodeFromNode)(node);
                return footnotesDirectiveHTMLNode;
            }
        },
        {
            key: "resolve",
            value: function resolve(divisionHTMLNodes, pageNumber, context) {
                var node = this;
                (0, _division.removeNestedFootnoteLinkHTMLNodes)(node);
                var pageNumbers = (0, _division.removePageNumberDirectiveHTMLNode)(node), footnoteHTMLNodes = this.getFootnoteHTMLNodes(), footnoteHTMLTransforms = (0, _division.removeFootnoteHTMLNodes)(footnoteHTMLNodes), footnotesDirectiveHTMLNode = this.getFootnotesDirectiveHTMLNode();
                if (footnotesDirectiveHTMLNode !== null) {
                    (0, _division.removeFootnotesDirectiveHTMLNode)(footnotesDirectiveHTMLNode);
                    var footnoteLinkHTMLNodes = (0, _html1.footnoteLinkHTMLNodesFromNode)(node);
                    (0, _division.reorderFootnoteHTMLNodes)(footnoteLinkHTMLNodes, footnoteHTMLTransforms, context);
                }
                var htmlNodes = (0, _division.removeHTMLNodes)(node), identifierMap = {}, groupedHTMLNodesArray = (0, _division.groupHTMLNodes)(htmlNodes), paginatedHTMLNodesArray = (0, _division.paginateGroupedHTMLNodes)(groupedHTMLNodesArray, context);
                paginatedHTMLNodesArray.forEach(function(paginatedHTMLNodes) {
                    var divisionHTMLNode = DivisionHTMLNode.fromPaginatedHTMLNodes(paginatedHTMLNodes);
                    divisionHTMLNode.resolveFootnotes(identifierMap, context);
                    if (pageNumbers) {
                        var pageNumberHTMLTransform = _pageNumber.default.fromPageNumber(pageNumber);
                        pageNumberHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
                    }
                    divisionHTMLNodes.push(divisionHTMLNode);
                    pageNumber++;
                });
                return pageNumber;
            }
        },
        {
            key: "resolveFootnotes",
            value: function resolveFootnotes(identifierMap, context) {
                var node = this, divisionHTMLNode = node, footnoteHTMLNodes = (0, _html1.footnoteHTMLNodesFromNode)(node), footnoteLinkHTMLNodes = (0, _html1.footnoteLinkHTMLNodesFromNode)(node), footnoteHTMLTransforms = (0, _division.removeFootnoteHTMLNodes)(footnoteHTMLNodes);
                var start = (0, _division.numberFootnoteLinkHTMLNodes)(footnoteHTMLNodes, footnoteLinkHTMLNodes, identifierMap, context), lineHTMLTransforms = (0, _division.lineHTMLTransformsFromFootnoteHTMLTransforms)(footnoteHTMLTransforms), footnoteItemHTMLTransforms = (0, _division.footnoteItemHTMLTransformsFromLineHTMLTransforms)(lineHTMLTransforms, identifierMap, start), footnotesListHTMLTransform = _footnotesList.default.fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms);
                footnotesListHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
            }
        },
        {
            key: "asString",
            value: function asString() {
                var string = _ruleNames.DIVISION_RULE_NAME; ///
                return string;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(DivisionHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(DivisionHTMLNode, outerNode);
            }
        },
        {
            key: "fromPaginatedHTMLNodes",
            value: function fromPaginatedHTMLNodes(paginatedHTMLNodes) {
                var childNodes = paginatedHTMLNodes, divisionHTMLNode = _html.default.fromChildNodes(DivisionHTMLNode, childNodes);
                return divisionHTMLNode;
            }
        }
    ]);
    return DivisionHTMLNode;
}(_html.default);
_define_property(DivisionHTMLNode, "tagName", "div");
_define_property(DivisionHTMLNode, "className", null);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5pbXBvcnQgUGFnZU51bWJlckhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL3BhZ2VOdW1iZXJcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvZm9vdG5vdGVzTGlzdFwiO1xuXG5pbXBvcnQgeyBESVZJU0lPTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBmb290bm90ZUhUTUxOb2Rlc0Zyb21Ob2RlLCBmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZSwgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvaHRtbFwiO1xuaW1wb3J0IHsgZ3JvdXBIVE1MTm9kZXMsXG4gICAgICAgICByZW1vdmVIVE1MTm9kZXMsXG4gICAgICAgICByZW1vdmVGb290bm90ZUhUTUxOb2RlcyxcbiAgICAgICAgIHBhZ2luYXRlR3JvdXBlZEhUTUxOb2RlcyxcbiAgICAgICAgIHJlb3JkZXJGb290bm90ZUhUTUxOb2RlcyxcbiAgICAgICAgIG51bWJlckZvb3Rub3RlTGlua0hUTUxOb2RlcyxcbiAgICAgICAgIHJlbW92ZUZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlLFxuICAgICAgICAgcmVtb3ZlUGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlLFxuICAgICAgICAgcmVtb3ZlTmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzLFxuICAgICAgICAgbGluZUhUTUxUcmFuc2Zvcm1zRnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybXMsXG4gICAgICAgICBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21MaW5lSFRNTFRyYW5zZm9ybXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RpdmlzaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlzaW9uSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgcnVsZU5tZSA9IERJVklTSU9OX1JVTEVfTkFNRTtcblxuICAgIHJldHVybiBydWxlTm1lO1xuICB9XG5cbiAgZ2V0Rm9vdG5vdGVIVE1MTm9kZXMoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmb290bm90ZUhUTUxOb2RlcyA9IGZvb3Rub3RlSFRNTE5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVIVE1MTm9kZXM7XG4gIH1cblxuICBnZXRGb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlID0gZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKVxuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlO1xuICB9XG5cbiAgcmVzb2x2ZShkaXZpc2lvbkhUTUxOb2RlcywgcGFnZU51bWJlciwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzO1xuXG4gICAgcmVtb3ZlTmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzKG5vZGUpO1xuXG4gICAgY29uc3QgcGFnZU51bWJlcnMgPSByZW1vdmVQYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUobm9kZSksXG4gICAgICAgICAgZm9vdG5vdGVIVE1MTm9kZXMgPSB0aGlzLmdldEZvb3Rub3RlSFRNTE5vZGVzKCksXG4gICAgICAgICAgZm9vdG5vdGVIVE1MVHJhbnNmb3JtcyA9IHJlbW92ZUZvb3Rub3RlSFRNTE5vZGVzKGZvb3Rub3RlSFRNTE5vZGVzKSxcbiAgICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSA9IHRoaXMuZ2V0Rm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUoKTtcblxuICAgIGlmIChmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSAhPT0gbnVsbCkge1xuICAgICAgcmVtb3ZlRm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUoZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUpO1xuXG4gICAgICBjb25zdCBmb290bm90ZUxpbmtIVE1MTm9kZXMgPSBmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgICAgcmVvcmRlckZvb3Rub3RlSFRNTE5vZGVzKGZvb3Rub3RlTGlua0hUTUxOb2RlcywgZm9vdG5vdGVIVE1MVHJhbnNmb3JtcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3QgaHRtbE5vZGVzID0gcmVtb3ZlSFRNTE5vZGVzKG5vZGUpLFxuICAgICAgICAgIGlkZW50aWZpZXJNYXAgPSB7fSxcbiAgICAgICAgICBncm91cGVkSFRNTE5vZGVzQXJyYXkgPSBncm91cEhUTUxOb2RlcyhodG1sTm9kZXMpLFxuICAgICAgICAgIHBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5ID0gcGFnaW5hdGVHcm91cGVkSFRNTE5vZGVzKGdyb3VwZWRIVE1MTm9kZXNBcnJheSwgY29udGV4dCk7XG5cbiAgICBwYWdpbmF0ZWRIVE1MTm9kZXNBcnJheS5mb3JFYWNoKChwYWdpbmF0ZWRIVE1MTm9kZXMpID0+IHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5vZGUgPSBEaXZpc2lvbkhUTUxOb2RlLmZyb21QYWdpbmF0ZWRIVE1MTm9kZXMocGFnaW5hdGVkSFRNTE5vZGVzKTtcblxuICAgICAgZGl2aXNpb25IVE1MTm9kZS5yZXNvbHZlRm9vdG5vdGVzKGlkZW50aWZpZXJNYXAsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocGFnZU51bWJlcnMpIHtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlckhUTUxUcmFuc2Zvcm0gPSBQYWdlTnVtYmVySFRNTFRyYW5zZm9ybS5mcm9tUGFnZU51bWJlcihwYWdlTnVtYmVyKTtcblxuICAgICAgICBwYWdlTnVtYmVySFRNTFRyYW5zZm9ybS5hcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSk7XG4gICAgICB9XG5cbiAgICAgIGRpdmlzaW9uSFRNTE5vZGVzLnB1c2goZGl2aXNpb25IVE1MTm9kZSk7XG5cbiAgICAgIHBhZ2VOdW1iZXIrKztcbiAgICB9KTtcblxuICAgIHJldHVybiBwYWdlTnVtYmVyO1xuICB9XG5cbiAgcmVzb2x2ZUZvb3Rub3RlcyhpZGVudGlmaWVyTWFwLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGZvb3Rub3RlSFRNTE5vZGVzID0gZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZUxpbmtIVE1MTm9kZXMgPSBmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zID0gcmVtb3ZlRm9vdG5vdGVIVE1MTm9kZXMoZm9vdG5vdGVIVE1MTm9kZXMpO1xuXG4gICAgY29uc3Qgc3RhcnQgPSBudW1iZXJGb290bm90ZUxpbmtIVE1MTm9kZXMoZm9vdG5vdGVIVE1MTm9kZXMsIGZvb3Rub3RlTGlua0hUTUxOb2RlcywgaWRlbnRpZmllck1hcCwgY29udGV4dCksXG4gICAgICAgICAgbGluZUhUTUxUcmFuc2Zvcm1zID0gbGluZUhUTUxUcmFuc2Zvcm1zRnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybXMoZm9vdG5vdGVIVE1MVHJhbnNmb3JtcyksXG4gICAgICAgICAgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMgPSBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21MaW5lSFRNTFRyYW5zZm9ybXMobGluZUhUTUxUcmFuc2Zvcm1zLCBpZGVudGlmaWVyTWFwLCBzdGFydCksXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0gPSBGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybS5mcm9tU3RhcnRBbmRGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyhzdGFydCwgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMpO1xuXG4gICAgZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0uYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlKGRpdmlzaW9uSFRNTE5vZGUpO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gRElWSVNJT05fUlVMRV9OQU1FOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoRGl2aXNpb25IVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoRGl2aXNpb25IVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tUGFnaW5hdGVkSFRNTE5vZGVzKHBhZ2luYXRlZEhUTUxOb2Rlcykge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBwYWdpbmF0ZWRIVE1MTm9kZXMsICAvLy9cbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbUNoaWxkTm9kZXMoRGl2aXNpb25IVE1MTm9kZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRpdmlzaW9uSFRNTE5vZGUiLCJjbGFzc05hbWUiLCJjb250ZXh0IiwiY29uc3RydWN0b3IiLCJnZXRSdWxlTmFtZSIsInJ1bGVObWUiLCJESVZJU0lPTl9SVUxFX05BTUUiLCJnZXRGb290bm90ZUhUTUxOb2RlcyIsIm5vZGUiLCJmb290bm90ZUhUTUxOb2RlcyIsImZvb3Rub3RlSFRNTE5vZGVzRnJvbU5vZGUiLCJnZXRGb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSIsImZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlIiwiZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSIsInJlc29sdmUiLCJkaXZpc2lvbkhUTUxOb2RlcyIsInBhZ2VOdW1iZXIiLCJyZW1vdmVOZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXMiLCJwYWdlTnVtYmVycyIsInJlbW92ZVBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZSIsImZvb3Rub3RlSFRNTFRyYW5zZm9ybXMiLCJyZW1vdmVGb290bm90ZUhUTUxOb2RlcyIsInJlbW92ZUZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlIiwiZm9vdG5vdGVMaW5rSFRNTE5vZGVzIiwiZm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUiLCJyZW9yZGVyRm9vdG5vdGVIVE1MTm9kZXMiLCJodG1sTm9kZXMiLCJyZW1vdmVIVE1MTm9kZXMiLCJpZGVudGlmaWVyTWFwIiwiZ3JvdXBlZEhUTUxOb2Rlc0FycmF5IiwiZ3JvdXBIVE1MTm9kZXMiLCJwYWdpbmF0ZWRIVE1MTm9kZXNBcnJheSIsInBhZ2luYXRlR3JvdXBlZEhUTUxOb2RlcyIsImZvckVhY2giLCJwYWdpbmF0ZWRIVE1MTm9kZXMiLCJkaXZpc2lvbkhUTUxOb2RlIiwiZnJvbVBhZ2luYXRlZEhUTUxOb2RlcyIsInJlc29sdmVGb290bm90ZXMiLCJwYWdlTnVtYmVySFRNTFRyYW5zZm9ybSIsIlBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtIiwiZnJvbVBhZ2VOdW1iZXIiLCJhcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUiLCJwdXNoIiwic3RhcnQiLCJudW1iZXJGb290bm90ZUxpbmtIVE1MTm9kZXMiLCJsaW5lSFRNTFRyYW5zZm9ybXMiLCJsaW5lSFRNTFRyYW5zZm9ybXNGcm9tRm9vdG5vdGVIVE1MVHJhbnNmb3JtcyIsImZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zIiwiZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXNGcm9tTGluZUhUTUxUcmFuc2Zvcm1zIiwiZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0iLCJGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSIsImZyb21TdGFydEFuZEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zIiwiYXNTdHJpbmciLCJzdHJpbmciLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsIm91dGVyTm9kZSIsImNoaWxkTm9kZXMiLCJmcm9tQ2hpbGROb2RlcyIsInRhZ05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBb0JxQkE7OzsyREFsQkE7aUVBQ2U7b0VBQ0c7eUJBRUo7cUJBQzBFO3dCQVc1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEQsSUFBQSxBQUFNQSxpQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxPQUFPO2dCQUNmLElBQU0sQUFBRUQsWUFBYyxJQUFJLENBQUNFLFdBQVcsQ0FBOUJGO2dCQUVSLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsVUFBVUMsNkJBQWtCO2dCQUVsQyxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9B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