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
var _pageNumber = /*#__PURE__*/ _interop_require_default(require("../../node/html/pageNumber"));
var _pageNumber1 = /*#__PURE__*/ _interop_require_default(require("../../transform/html/pageNumber"));
var _footnotes = /*#__PURE__*/ _interop_require_default(require("../../transform/html/list/footnotes"));
var _ruleNames = require("../../ruleNames");
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
            key: "resolve",
            value: function resolve(divisionHTMLNodes, context) {
                var node = this;
                (0, _division.removeNestedFootnoteLinkHTMLNodes)(node);
                var pageNumberDirectiveHTNLTransform = (0, _division.removePageNumberDirectiveHTMLNode)(node), footnotesDirectiveHTMLNode = (0, _division.removeFootnotesDirectiveHTMLNode)(node), footnoteHTMLTransforms = (0, _division.removeFootnoteHTMLNodes)(node);
                if (footnotesDirectiveHTMLNode !== null) {
                    (0, _division.addFootnoteHTMLNodes)(footnoteHTMLTransforms, node, context);
                }
                this.paginate(pageNumberDirectiveHTNLTransform, divisionHTMLNodes, context);
            }
        },
        {
            key: "paginate",
            value: function paginate(pageNumberDirectiveHTNLTransform, divisionHTMLNodes, context) {
                var node = this, outerNode = this.getOuterNode(), pageNumbers = pageNumberDirectiveHTNLTransform !== null, identifierMap = {}, divisionClassName = outerNode.className(context);
                var htmlNodes = (0, _division.removeHTMLNodes)(node), groupedHTMLNodesArray = (0, _division.groupHTMLNodes)(htmlNodes), paginatedHTMLNodesArray = (0, _division.paginateGroupedHTMLNodes)(groupedHTMLNodesArray, context);
                paginatedHTMLNodesArray.forEach(function(paginatedHTMLNodes) {
                    var pageNumber;
                    pageNumber = context.pageNumber;
                    var divisionHTMLNode = DivisionHTMLNode.fromPaginatedHTMLNodesAndDivisionClassName(paginatedHTMLNodes, divisionClassName);
                    divisionHTMLNode.resolveFootnotes(identifierMap, context);
                    if (pageNumbers) {
                        var pageNumberHTMLTransform = _pageNumber1.default.fromPageNumber(pageNumber);
                        pageNumberHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
                    }
                    divisionHTMLNodes.push(divisionHTMLNode);
                    pageNumber++;
                    Object.assign(context, {
                        pageNumber: pageNumber
                    });
                });
            }
        },
        {
            key: "pageNumber",
            value: function pageNumber() {
                var pageNumber = this.fromFirstLastChildNode(function(firstLastChildNode) {
                    var pageNumber = null;
                    var firstLastChildNodePageNumberHTMLNode = _instanceof(firstLastChildNode, _pageNumber.default);
                    if (firstLastChildNodePageNumberHTMLNode) {
                        var pageNumberHTMLNode = firstLastChildNode; ///
                        pageNumber = pageNumberHTMLNode.getPageNumber();
                    }
                    return pageNumber;
                });
                return pageNumber;
            }
        },
        {
            key: "resolveFootnotes",
            value: function resolveFootnotes(identifierMap, context) {
                var node = this, footnoteHTMLTransforms = (0, _division.removeFootnoteHTMLNodes)(node), footnoteHTMLTransformsLength = footnoteHTMLTransforms.length;
                if (footnoteHTMLTransformsLength === 0) {
                    return;
                }
                var divisionHTMLNode = node, start = (0, _division.numberFootnoteLinkHTMLNodes)(footnoteHTMLTransforms, identifierMap, node, context), lineHTMLTransforms = (0, _division.lineHTMLTransformsFromFootnoteHTMLTransforms)(footnoteHTMLTransforms), footnoteItemHTMLTransforms = (0, _division.footnoteItemHTMLTransformsFromLineHTMLTransforms)(lineHTMLTransforms, identifierMap, start), footnotesListHTMLTransform = _footnotes.default.fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms);
                footnotesListHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
            }
        },
        {
            key: "asString",
            value: function asString() {
                var ruleName = this.getRuleName(), string = ruleName; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5pbXBvcnQgUGFnZU51bWJlckhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWwvcGFnZU51bWJlclwiO1xuaW1wb3J0IFBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9wYWdlTnVtYmVyXCI7XG5pbXBvcnQgRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2xpc3QvZm9vdG5vdGVzXCI7XG5cbmltcG9ydCB7IERJVklTSU9OX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IGdyb3VwSFRNTE5vZGVzLFxuICAgICAgICAgcmVtb3ZlSFRNTE5vZGVzLFxuICAgICAgICAgYWRkRm9vdG5vdGVIVE1MTm9kZXMsXG4gICAgICAgICByZW1vdmVGb290bm90ZUhUTUxOb2RlcyxcbiAgICAgICAgIHBhZ2luYXRlR3JvdXBlZEhUTUxOb2RlcyxcbiAgICAgICAgIG51bWJlckZvb3Rub3RlTGlua0hUTUxOb2RlcyxcbiAgICAgICAgIHJlbW92ZUZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlLFxuICAgICAgICAgcmVtb3ZlUGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlLFxuICAgICAgICAgcmVtb3ZlTmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzLFxuICAgICAgICAgbGluZUhUTUxUcmFuc2Zvcm1zRnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybXMsXG4gICAgICAgICBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21MaW5lSFRNTFRyYW5zZm9ybXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RpdmlzaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlzaW9uSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCwgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBzdXBlcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25DbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZGl2aXNpb25DbGFzc05hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHJ1bGVObWUgPSBESVZJU0lPTl9SVUxFX05BTUU7XG5cbiAgICByZXR1cm4gcnVsZU5tZTtcbiAgfVxuXG4gIHJlc29sdmUoZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcztcblxuICAgIHJlbW92ZU5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2Rlcyhub2RlKTtcblxuICAgIGNvbnN0IHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE5MVHJhbnNmb3JtID0gcmVtb3ZlUGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlKG5vZGUpLFxuICAgICAgICAgIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlID0gcmVtb3ZlRm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUobm9kZSksXG4gICAgICAgICAgZm9vdG5vdGVIVE1MVHJhbnNmb3JtcyA9IHJlbW92ZUZvb3Rub3RlSFRNTE5vZGVzKG5vZGUpO1xuXG4gICAgaWYgKGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlICE9PSBudWxsKSB7XG4gICAgICBhZGRGb290bm90ZUhUTUxOb2Rlcyhmb290bm90ZUhUTUxUcmFuc2Zvcm1zLCBub2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICB0aGlzLnBhZ2luYXRlKHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE5MVHJhbnNmb3JtLCBkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCk7XG4gIH1cblxuICBwYWdpbmF0ZShwYWdlTnVtYmVyRGlyZWN0aXZlSFROTFRyYW5zZm9ybSwgZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIG91dGVyTm9kZSA9IHRoaXMuZ2V0T3V0ZXJOb2RlKCksXG4gICAgICAgICAgcGFnZU51bWJlcnMgPSAocGFnZU51bWJlckRpcmVjdGl2ZUhUTkxUcmFuc2Zvcm0gIT09IG51bGwpLFxuICAgICAgICAgIGlkZW50aWZpZXJNYXAgPSB7fSxcbiAgICAgICAgICBkaXZpc2lvbkNsYXNzTmFtZSA9IG91dGVyTm9kZS5jbGFzc05hbWUoY29udGV4dCk7XG5cbiAgICBjb25zdCBodG1sTm9kZXMgPSByZW1vdmVIVE1MTm9kZXMobm9kZSksXG4gICAgICAgICAgZ3JvdXBlZEhUTUxOb2Rlc0FycmF5ID0gZ3JvdXBIVE1MTm9kZXMoaHRtbE5vZGVzKSxcbiAgICAgICAgICBwYWdpbmF0ZWRIVE1MTm9kZXNBcnJheSA9IHBhZ2luYXRlR3JvdXBlZEhUTUxOb2Rlcyhncm91cGVkSFRNTE5vZGVzQXJyYXksIGNvbnRleHQpO1xuXG4gICAgcGFnaW5hdGVkSFRNTE5vZGVzQXJyYXkuZm9yRWFjaCgocGFnaW5hdGVkSFRNTE5vZGVzKSA9PiB7XG4gICAgICBsZXQgcGFnZU51bWJlcjtcblxuICAgICAgKHsgcGFnZU51bWJlciB9ID0gY29udGV4dCk7XG5cbiAgICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5vZGUgPSBEaXZpc2lvbkhUTUxOb2RlLmZyb21QYWdpbmF0ZWRIVE1MTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZShwYWdpbmF0ZWRIVE1MTm9kZXMsIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgICAgZGl2aXNpb25IVE1MTm9kZS5yZXNvbHZlRm9vdG5vdGVzKGlkZW50aWZpZXJNYXAsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocGFnZU51bWJlcnMpIHtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlckhUTUxUcmFuc2Zvcm0gPSBQYWdlTnVtYmVySFRNTFRyYW5zZm9ybS5mcm9tUGFnZU51bWJlcihwYWdlTnVtYmVyKTtcblxuICAgICAgICBwYWdlTnVtYmVySFRNTFRyYW5zZm9ybS5hcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSk7XG4gICAgICB9XG5cbiAgICAgIGRpdmlzaW9uSFRNTE5vZGVzLnB1c2goZGl2aXNpb25IVE1MTm9kZSk7XG5cbiAgICAgIHBhZ2VOdW1iZXIrKztcblxuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIHBhZ2VOdW1iZXJcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcGFnZU51bWJlcigpIHtcbiAgICBjb25zdCBwYWdlTnVtYmVyID0gdGhpcy5mcm9tRmlyc3RMYXN0Q2hpbGROb2RlKChmaXJzdExhc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGxldCBwYWdlTnVtYmVyID0gbnVsbDtcblxuICAgICAgY29uc3QgZmlyc3RMYXN0Q2hpbGROb2RlUGFnZU51bWJlckhUTUxOb2RlID0gKGZpcnN0TGFzdENoaWxkTm9kZSBpbnN0YW5jZW9mIFBhZ2VOdW1iZXJIVE1MTm9kZSk7XG5cbiAgICAgIGlmIChmaXJzdExhc3RDaGlsZE5vZGVQYWdlTnVtYmVySFRNTE5vZGUpIHtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlckhUTUxOb2RlID0gZmlyc3RMYXN0Q2hpbGROb2RlOyAgLy8vXG5cbiAgICAgICAgcGFnZU51bWJlciA9IHBhZ2VOdW1iZXJIVE1MTm9kZS5nZXRQYWdlTnVtYmVyKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYWdlTnVtYmVyO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhZ2VOdW1iZXI7XG4gIH1cblxuICByZXNvbHZlRm9vdG5vdGVzKGlkZW50aWZpZXJNYXAsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMgPSByZW1vdmVGb290bm90ZUhUTUxOb2Rlcyhub2RlKSxcbiAgICAgICAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zTGVuZ3RoID0gZm9vdG5vdGVIVE1MVHJhbnNmb3Jtcy5sZW5ndGg7XG5cbiAgICBpZiAoZm9vdG5vdGVIVE1MVHJhbnNmb3Jtc0xlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgc3RhcnQgPSBudW1iZXJGb290bm90ZUxpbmtIVE1MTm9kZXMoZm9vdG5vdGVIVE1MVHJhbnNmb3JtcywgaWRlbnRpZmllck1hcCwgbm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbGluZUhUTUxUcmFuc2Zvcm1zID0gbGluZUhUTUxUcmFuc2Zvcm1zRnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybXMoZm9vdG5vdGVIVE1MVHJhbnNmb3JtcyksXG4gICAgICAgICAgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMgPSBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21MaW5lSFRNTFRyYW5zZm9ybXMobGluZUhUTUxUcmFuc2Zvcm1zLCBpZGVudGlmaWVyTWFwLCBzdGFydCksXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0gPSBGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybS5mcm9tU3RhcnRBbmRGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyhzdGFydCwgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMpO1xuXG4gICAgZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0uYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlKGRpdmlzaW9uSFRNTE5vZGUpO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gcnVsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGRpdmlzaW9uQ2xhc3NOYW1lID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU5vdGhpbmcoRGl2aXNpb25IVE1MTm9kZSwgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHtcbiAgICBjb25zdCBkaXZpc2lvbkNsYXNzTmFtZSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25IVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21PdXRlck5vZGUoRGl2aXNpb25IVE1MTm9kZSwgb3V0ZXJOb2RlLCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFnaW5hdGVkSFRNTE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUocGFnaW5hdGVkSFRNTE5vZGVzLCBkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBwYWdpbmF0ZWRIVE1MTm9kZXMsICAvLy9cbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbUNoaWxkTm9kZXMoRGl2aXNpb25IVE1MTm9kZSwgY2hpbGROb2RlcywgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEaXZpc2lvbkhUTUxOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50IiwiZGl2aXNpb25DbGFzc05hbWUiLCJnZXREaXZpc2lvbkNsYXNzTmFtZSIsImNsYXNzTmFtZSIsImNvbnRleHQiLCJnZXRSdWxlTmFtZSIsInJ1bGVObWUiLCJESVZJU0lPTl9SVUxFX05BTUUiLCJyZXNvbHZlIiwiZGl2aXNpb25IVE1MTm9kZXMiLCJub2RlIiwicmVtb3ZlTmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzIiwicGFnZU51bWJlckRpcmVjdGl2ZUhUTkxUcmFuc2Zvcm0iLCJyZW1vdmVQYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUiLCJmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSIsInJlbW92ZUZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3JtcyIsInJlbW92ZUZvb3Rub3RlSFRNTE5vZGVzIiwiYWRkRm9vdG5vdGVIVE1MTm9kZXMiLCJwYWdpbmF0ZSIsImdldE91dGVyTm9kZSIsInBhZ2VOdW1iZXJzIiwiaWRlbnRpZmllck1hcCIsImh0bWxOb2RlcyIsInJlbW92ZUhUTUxOb2RlcyIsImdyb3VwZWRIVE1MTm9kZXNBcnJheSIsImdyb3VwSFRNTE5vZGVzIiwicGFnaW5hdGVkSFRNTE5vZGVzQXJyYXkiLCJwYWdpbmF0ZUdyb3VwZWRIVE1MTm9kZXMiLCJmb3JFYWNoIiwicGFnaW5hdGVkSFRNTE5vZGVzIiwicGFnZU51bWJlciIsImRpdmlzaW9uSFRNTE5vZGUiLCJmcm9tUGFnaW5hdGVkSFRNTE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUiLCJyZXNvbHZlRm9vdG5vdGVzIiwicGFnZU51bWJlckhUTUxUcmFuc2Zvcm0iLCJQYWdlTnVtYmVySFRNTFRyYW5zZm9ybSIsImZyb21QYWdlTnVtYmVyIiwiYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlIiwicHVzaCIsIk9iamVjdCIsImFzc2lnbiIsImZyb21GaXJzdExhc3RDaGlsZE5vZGUiLCJmaXJzdExhc3RDaGlsZE5vZGUiLCJmaXJzdExhc3RDaGlsZE5vZGVQYWdlTnVtYmVySFRNTE5vZGUiLCJQYWdlTnVtYmVySFRNTE5vZGUiLCJwYWdlTnVtYmVySFRNTE5vZGUiLCJnZXRQYWdlTnVtYmVyIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3Jtc0xlbmd0aCIsImxlbmd0aCIsInN0YXJ0IiwibnVtYmVyRm9vdG5vdGVMaW5rSFRNTE5vZGVzIiwibGluZUhUTUxUcmFuc2Zvcm1zIiwibGluZUhUTUxUcmFuc2Zvcm1zRnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybXMiLCJmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyIsImZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zRnJvbUxpbmVIVE1MVHJhbnNmb3JtcyIsImZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIiwiRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0iLCJmcm9tU3RhcnRBbmRGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyIsImFzU3RyaW5nIiwicnVsZU5hbWUiLCJzdHJpbmciLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsImZyb21DaGlsZE5vZGVzIiwidGFnTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFvQnFCQTs7OzJEQWxCQTtpRUFDVTtrRUFDSztnRUFDRzt5QkFFSjt3QkFXOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRCxJQUFBLEFBQU1BLGlDQUFOO2NBQU1BO2FBQUFBLGlCQUNQQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLGlCQUFpQjtnQ0FEekRMOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFXQztZQUFZQztZ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