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
var _constants = require("../../constants");
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
    function DivisionHTMLNode(outerNode, parentNode, childNodes, domElement, divisionClassName) {
        _class_call_check(this, DivisionHTMLNode);
        var _this;
        _this = _call_super(this, DivisionHTMLNode, [
            outerNode,
            parentNode,
            childNodes,
            domElement
        ]);
        _this.divisionClassName = divisionClassName;
        return _this;
    }
    _create_class(DivisionHTMLNode, [
        {
            key: "getDivisionClassName",
            value: function getDivisionClassName() {
                return this.divisionClassName;
            }
        },
        {
            key: "className",
            value: function className(context) {
                var className = this.divisionClassName; ///
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
                var outerNode = this.getOuterNode(), htmlNodes = (0, _division.removeHTMLNodes)(node), identifierMap = {}, divisionClassName = outerNode.className(context), groupedHTMLNodesArray = (0, _division.groupHTMLNodes)(htmlNodes), paginatedHTMLNodesArray = (0, _division.paginateGroupedHTMLNodes)(groupedHTMLNodesArray, context);
                paginatedHTMLNodesArray.forEach(function(paginatedHTMLNodes) {
                    var divisionHTMLNode = DivisionHTMLNode.fromPaginatedHTMLNodesAndDivisionClassName(paginatedHTMLNodes, divisionClassName);
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
                var node = this, footnoteHTMLNodes = (0, _html1.footnoteHTMLNodesFromNode)(node), footnoteHTMLTransforms = (0, _division.removeFootnoteHTMLNodes)(footnoteHTMLNodes), footnoteHTMLTransformsLength = footnoteHTMLTransforms.length;
                if (footnoteHTMLTransformsLength === 0) {
                    return;
                }
                var footnoteLinkHTMLNodes = (0, _html1.footnoteLinkHTMLNodesFromNode)(node), divisionHTMLNode = node, start = (0, _division.numberFootnoteLinkHTMLNodes)(footnoteHTMLNodes, footnoteLinkHTMLNodes, identifierMap, context), lineHTMLTransforms = (0, _division.lineHTMLTransformsFromFootnoteHTMLTransforms)(footnoteHTMLTransforms), footnoteItemHTMLTransforms = (0, _division.footnoteItemHTMLTransformsFromLineHTMLTransforms)(lineHTMLTransforms, identifierMap, start), footnotesListHTMLTransform = _footnotesList.default.fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms);
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
                var divisionClassName = null, divisionHTMLNode = _html.default.fromNothing(DivisionHTMLNode, divisionClassName);
                return divisionHTMLNode;
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                var divisionClassName = null, divisionHTMLNode = _html.default.fromOuterNode(DivisionHTMLNode, outerNode, divisionClassName);
                return divisionHTMLNode;
            }
        },
        {
            key: "fromPaginatedHTMLNodesAndDivisionClassName",
            value: function fromPaginatedHTMLNodesAndDivisionClassName(paginatedHTMLNodes, divisionClassName) {
                var childNodes = paginatedHTMLNodes, divisionHTMLNode = _html.default.fromChildNodes(DivisionHTMLNode, childNodes, divisionClassName);
                return divisionHTMLNode;
            }
        }
    ]);
    return DivisionHTMLNode;
}(_html.default);
_define_property(DivisionHTMLNode, "tagName", "div");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5pbXBvcnQgUGFnZU51bWJlckhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL3BhZ2VOdW1iZXJcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvZm9vdG5vdGVzTGlzdFwiO1xuXG5pbXBvcnQgeyBESVZJU0lPTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBmb290bm90ZUhUTUxOb2Rlc0Zyb21Ob2RlLCBmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZSwgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvaHRtbFwiO1xuaW1wb3J0IHsgZ3JvdXBIVE1MTm9kZXMsXG4gICAgICAgICByZW1vdmVIVE1MTm9kZXMsXG4gICAgICAgICByZW1vdmVGb290bm90ZUhUTUxOb2RlcyxcbiAgICAgICAgIHBhZ2luYXRlR3JvdXBlZEhUTUxOb2RlcyxcbiAgICAgICAgIHJlb3JkZXJGb290bm90ZUhUTUxOb2RlcyxcbiAgICAgICAgIG51bWJlckZvb3Rub3RlTGlua0hUTUxOb2RlcyxcbiAgICAgICAgIHJlbW92ZUZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlLFxuICAgICAgICAgcmVtb3ZlUGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlLFxuICAgICAgICAgcmVtb3ZlTmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzLFxuICAgICAgICAgbGluZUhUTUxUcmFuc2Zvcm1zRnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybXMsXG4gICAgICAgICBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21MaW5lSFRNTFRyYW5zZm9ybXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RpdmlzaW9uXCI7XG5pbXBvcnQge0VNUFRZX1NUUklOR30gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpc2lvbkhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBjb25zdHJ1Y3RvcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQsIGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgc3VwZXIob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldERpdmlzaW9uQ2xhc3NOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lOyAvLy9cblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTm1lID0gRElWSVNJT05fUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVObWU7XG4gIH1cblxuICBnZXRGb290bm90ZUhUTUxOb2RlcygpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3RlSFRNTE5vZGVzID0gZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIHJldHVybiBmb290bm90ZUhUTUxOb2RlcztcbiAgfVxuXG4gIGdldEZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgPSBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlKG5vZGUpXG5cbiAgICByZXR1cm4gZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGU7XG4gIH1cblxuICByZXNvbHZlKGRpdmlzaW9uSFRNTE5vZGVzLCBwYWdlTnVtYmVyLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXM7XG5cbiAgICByZW1vdmVOZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXMobm9kZSk7XG5cbiAgICBjb25zdCBwYWdlTnVtYmVycyA9IHJlbW92ZVBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZUhUTUxOb2RlcyA9IHRoaXMuZ2V0Rm9vdG5vdGVIVE1MTm9kZXMoKSxcbiAgICAgICAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zID0gcmVtb3ZlRm9vdG5vdGVIVE1MTm9kZXMoZm9vdG5vdGVIVE1MTm9kZXMpLFxuICAgICAgICAgIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlID0gdGhpcy5nZXRGb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSgpO1xuXG4gICAgaWYgKGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlICE9PSBudWxsKSB7XG4gICAgICByZW1vdmVGb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZShmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSk7XG5cbiAgICAgIGNvbnN0IGZvb3Rub3RlTGlua0hUTUxOb2RlcyA9IGZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gICAgICByZW9yZGVyRm9vdG5vdGVIVE1MTm9kZXMoZm9vdG5vdGVMaW5rSFRNTE5vZGVzLCBmb290bm90ZUhUTUxUcmFuc2Zvcm1zLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBjb25zdCBvdXRlck5vZGUgPSB0aGlzLmdldE91dGVyTm9kZSgpLFxuICAgICAgICAgIGh0bWxOb2RlcyA9IHJlbW92ZUhUTUxOb2Rlcyhub2RlKSxcbiAgICAgICAgICBpZGVudGlmaWVyTWFwID0ge30sXG4gICAgICAgICAgZGl2aXNpb25DbGFzc05hbWUgPSBvdXRlck5vZGUuY2xhc3NOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGdyb3VwZWRIVE1MTm9kZXNBcnJheSA9IGdyb3VwSFRNTE5vZGVzKGh0bWxOb2RlcyksXG4gICAgICAgICAgcGFnaW5hdGVkSFRNTE5vZGVzQXJyYXkgPSBwYWdpbmF0ZUdyb3VwZWRIVE1MTm9kZXMoZ3JvdXBlZEhUTUxOb2Rlc0FycmF5LCBjb250ZXh0KTtcblxuICAgIHBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5LmZvckVhY2goKHBhZ2luYXRlZEhUTUxOb2RlcykgPT4ge1xuICAgICAgY29uc3QgZGl2aXNpb25IVE1MTm9kZSA9IERpdmlzaW9uSFRNTE5vZGUuZnJvbVBhZ2luYXRlZEhUTUxOb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2luYXRlZEhUTUxOb2RlcywgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgICBkaXZpc2lvbkhUTUxOb2RlLnJlc29sdmVGb290bm90ZXMoaWRlbnRpZmllck1hcCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChwYWdlTnVtYmVycykge1xuICAgICAgICBjb25zdCBwYWdlTnVtYmVySFRNTFRyYW5zZm9ybSA9IFBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtLmZyb21QYWdlTnVtYmVyKHBhZ2VOdW1iZXIpO1xuXG4gICAgICAgIHBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtLmFwcGVuZFRvRGl2aXNpb25IVE1MTm9kZShkaXZpc2lvbkhUTUxOb2RlKTtcbiAgICAgIH1cblxuICAgICAgZGl2aXNpb25IVE1MTm9kZXMucHVzaChkaXZpc2lvbkhUTUxOb2RlKTtcblxuICAgICAgcGFnZU51bWJlcisrO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhZ2VOdW1iZXI7XG4gIH1cblxuICByZXNvbHZlRm9vdG5vdGVzKGlkZW50aWZpZXJNYXAsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3RlSFRNTE5vZGVzID0gZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zID0gcmVtb3ZlRm9vdG5vdGVIVE1MTm9kZXMoZm9vdG5vdGVIVE1MTm9kZXMpLFxuICAgICAgICAgIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXNMZW5ndGggPSBmb290bm90ZUhUTUxUcmFuc2Zvcm1zLmxlbmd0aDtcblxuICAgIGlmIChmb290bm90ZUhUTUxUcmFuc2Zvcm1zTGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZm9vdG5vdGVMaW5rSFRNTE5vZGVzID0gZm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgZGl2aXNpb25IVE1MTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICBzdGFydCA9IG51bWJlckZvb3Rub3RlTGlua0hUTUxOb2Rlcyhmb290bm90ZUhUTUxOb2RlcywgZm9vdG5vdGVMaW5rSFRNTE5vZGVzLCBpZGVudGlmaWVyTWFwLCBjb250ZXh0KSxcbiAgICAgICAgICBsaW5lSFRNTFRyYW5zZm9ybXMgPSBsaW5lSFRNTFRyYW5zZm9ybXNGcm9tRm9vdG5vdGVIVE1MVHJhbnNmb3Jtcyhmb290bm90ZUhUTUxUcmFuc2Zvcm1zKSxcbiAgICAgICAgICBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyA9IGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zRnJvbUxpbmVIVE1MVHJhbnNmb3JtcyhsaW5lSFRNTFRyYW5zZm9ybXMsIGlkZW50aWZpZXJNYXAsIHN0YXJ0KSxcbiAgICAgICAgICBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSA9IEZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtLmZyb21TdGFydEFuZEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zKHN0YXJ0LCBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtcyk7XG5cbiAgICBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybS5hcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSk7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBESVZJU0lPTl9SVUxFX05BTUU7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgZGl2aXNpb25DbGFzc05hbWUgPSBudWxsLFxuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tTm90aGluZyhEaXZpc2lvbkhUTUxOb2RlLCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkge1xuICAgIGNvbnN0IGRpdmlzaW9uQ2xhc3NOYW1lID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShEaXZpc2lvbkhUTUxOb2RlLCBvdXRlck5vZGUsIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYWdpbmF0ZWRIVE1MTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZShwYWdpbmF0ZWRIVE1MTm9kZXMsIGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHBhZ2luYXRlZEhUTUxOb2RlcywgIC8vL1xuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tQ2hpbGROb2RlcyhEaXZpc2lvbkhUTUxOb2RlLCBjaGlsZE5vZGVzLCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRpdmlzaW9uSFRNTE5vZGUiLCJvdXRlck5vZGUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsImRvbUVsZW1lbnQiLCJkaXZpc2lvbkNsYXNzTmFtZSIsImdldERpdmlzaW9uQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsImdldFJ1bGVOYW1lIiwicnVsZU5tZSIsIkRJVklTSU9OX1JVTEVfTkFNRSIsImdldEZvb3Rub3RlSFRNTE5vZGVzIiwibm9kZSIsImZvb3Rub3RlSFRNTE5vZGVzIiwiZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZSIsImdldEZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlIiwiZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUiLCJmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIiwicmVzb2x2ZSIsImRpdmlzaW9uSFRNTE5vZGVzIiwicGFnZU51bWJlciIsInJlbW92ZU5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2RlcyIsInBhZ2VOdW1iZXJzIiwicmVtb3ZlUGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3JtcyIsInJlbW92ZUZvb3Rub3RlSFRNTE5vZGVzIiwicmVtb3ZlRm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUiLCJmb290bm90ZUxpbmtIVE1MTm9kZXMiLCJmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZSIsInJlb3JkZXJGb290bm90ZUhUTUxOb2RlcyIsImdldE91dGVyTm9kZSIsImh0bWxOb2RlcyIsInJlbW92ZUhUTUxOb2RlcyIsImlkZW50aWZpZXJNYXAiLCJncm91cGVkSFRNTE5vZGVzQXJyYXkiLCJncm91cEhUTUxOb2RlcyIsInBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5IiwicGFnaW5hdGVHcm91cGVkSFRNTE5vZGVzIiwiZm9yRWFjaCIsInBhZ2luYXRlZEhUTUxOb2RlcyIsImRpdmlzaW9uSFRNTE5vZGUiLCJmcm9tUGFnaW5hdGVkSFRNTE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUiLCJyZXNvbHZlRm9vdG5vdGVzIiwicGFnZU51bWJlckhUTUxUcmFuc2Zvcm0iLCJQYWdlTnVtYmVySFRNTFRyYW5zZm9ybSIsImZyb21QYWdlTnVtYmVyIiwiYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlIiwicHVzaCIsImZvb3Rub3RlSFRNTFRyYW5zZm9ybXNMZW5ndGgiLCJsZW5ndGgiLCJzdGFydCIsIm51bWJlckZvb3Rub3RlTGlua0hUTUxOb2RlcyIsImxpbmVIVE1MVHJhbnNmb3JtcyIsImxpbmVIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUhUTUxUcmFuc2Zvcm1zIiwiZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMiLCJmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21MaW5lSFRNTFRyYW5zZm9ybXMiLCJmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSIsIkZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIiwiZnJvbVN0YXJ0QW5kRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMiLCJhc1N0cmluZyIsInN0cmluZyIsImZyb21Ob3RoaW5nIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwiZnJvbUNoaWxkTm9kZXMiLCJ0YWdOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQXFCcUJBOzs7MkRBbkJBO2lFQUNlO29FQUNHO3lCQUVKO3FCQUMwRTt3QkFXNUM7eUJBQ3RDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVaLElBQUEsQUFBTUEsaUNBQU47Y0FBTUE7YUFBQUEsaUJBQ1BDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsaUJBQWlCO2dDQUR6REw7O2dCQUVqQixrQkFGaUJBO1lBRVhDO1lBQVdDO1lBQVlDO1lBQVlDOztRQUV6QyxNQUFLQyxpQkFBaUIsR0FBR0E7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