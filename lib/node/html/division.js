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
var _indexAnchor = /*#__PURE__*/ _interop_require_default(require("../../transform/html/indexAnchor"));
var _footnotes = /*#__PURE__*/ _interop_require_default(require("../../transform/html/list/footnotes"));
var _markdown = require("../../ruleNames/markdown");
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
                var ruleNme = _markdown.DIVISION_MARKDOWN_RULE_NAME;
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
                        var indexAnchorHTMLTransform = _indexAnchor.default.fromPageNumber(pageNumber), pageNumberHTMLTransform = _pageNumber1.default.fromPageNumber(pageNumber);
                        indexAnchorHTMLTransform.prependToDivisionHTMLNode(divisionHTMLNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5pbXBvcnQgUGFnZU51bWJlckhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWwvcGFnZU51bWJlclwiO1xuaW1wb3J0IFBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9wYWdlTnVtYmVyXCI7XG5pbXBvcnQgSW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9pbmRleEFuY2hvclwiO1xuaW1wb3J0IEZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9saXN0L2Zvb3Rub3Rlc1wiO1xuXG5pbXBvcnQgeyBESVZJU0lPTl9NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5pbXBvcnQgeyBncm91cEhUTUxOb2RlcyxcbiAgICAgICAgIHJlbW92ZUhUTUxOb2RlcyxcbiAgICAgICAgIGFkZEZvb3Rub3RlSFRNTE5vZGVzLFxuICAgICAgICAgcmVtb3ZlRm9vdG5vdGVIVE1MTm9kZXMsXG4gICAgICAgICBwYWdpbmF0ZUdyb3VwZWRIVE1MTm9kZXMsXG4gICAgICAgICBudW1iZXJGb290bm90ZUxpbmtIVE1MTm9kZXMsXG4gICAgICAgICByZW1vdmVGb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSxcbiAgICAgICAgIHJlbW92ZVBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZSxcbiAgICAgICAgIHJlbW92ZU5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2RlcyxcbiAgICAgICAgIGxpbmVIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUhUTUxUcmFuc2Zvcm1zLFxuICAgICAgICAgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXNGcm9tTGluZUhUTUxUcmFuc2Zvcm1zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kaXZpc2lvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpc2lvbkhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBjb25zdHJ1Y3RvcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQsIGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgc3VwZXIob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldERpdmlzaW9uQ2xhc3NOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lOyAvLy9cblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTm1lID0gRElWSVNJT05fTUFSS0RPV05fUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVObWU7XG4gIH1cblxuICByZXNvbHZlKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXM7XG5cbiAgICByZW1vdmVOZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXMobm9kZSk7XG5cbiAgICBjb25zdCBwYWdlTnVtYmVyRGlyZWN0aXZlSFROTFRyYW5zZm9ybSA9IHJlbW92ZVBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSA9IHJlbW92ZUZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlKG5vZGUpLFxuICAgICAgICAgIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMgPSByZW1vdmVGb290bm90ZUhUTUxOb2Rlcyhub2RlKTtcblxuICAgIGlmIChmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSAhPT0gbnVsbCkge1xuICAgICAgYWRkRm9vdG5vdGVIVE1MTm9kZXMoZm9vdG5vdGVIVE1MVHJhbnNmb3Jtcywgbm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgdGhpcy5wYWdpbmF0ZShwYWdlTnVtYmVyRGlyZWN0aXZlSFROTFRyYW5zZm9ybSwgZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpO1xuICB9XG5cbiAgcGFnaW5hdGUocGFnZU51bWJlckRpcmVjdGl2ZUhUTkxUcmFuc2Zvcm0sIGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBvdXRlck5vZGUgPSB0aGlzLmdldE91dGVyTm9kZSgpLFxuICAgICAgICAgIHBhZ2VOdW1iZXJzID0gKHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE5MVHJhbnNmb3JtICE9PSBudWxsKSxcbiAgICAgICAgICBpZGVudGlmaWVyTWFwID0ge30sXG4gICAgICAgICAgZGl2aXNpb25DbGFzc05hbWUgPSBvdXRlck5vZGUuY2xhc3NOYW1lKGNvbnRleHQpO1xuXG4gICAgY29uc3QgaHRtbE5vZGVzID0gcmVtb3ZlSFRNTE5vZGVzKG5vZGUpLFxuICAgICAgICAgIGdyb3VwZWRIVE1MTm9kZXNBcnJheSA9IGdyb3VwSFRNTE5vZGVzKGh0bWxOb2RlcyksXG4gICAgICAgICAgcGFnaW5hdGVkSFRNTE5vZGVzQXJyYXkgPSBwYWdpbmF0ZUdyb3VwZWRIVE1MTm9kZXMoZ3JvdXBlZEhUTUxOb2Rlc0FycmF5LCBjb250ZXh0KTtcblxuICAgIHBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5LmZvckVhY2goKHBhZ2luYXRlZEhUTUxOb2RlcykgPT4ge1xuICAgICAgbGV0IHBhZ2VOdW1iZXI7XG5cbiAgICAgICh7IHBhZ2VOdW1iZXIgfSA9IGNvbnRleHQpO1xuXG4gICAgICBjb25zdCBkaXZpc2lvbkhUTUxOb2RlID0gRGl2aXNpb25IVE1MTm9kZS5mcm9tUGFnaW5hdGVkSFRNTE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUocGFnaW5hdGVkSFRNTE5vZGVzLCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICAgIGRpdmlzaW9uSFRNTE5vZGUucmVzb2x2ZUZvb3Rub3RlcyhpZGVudGlmaWVyTWFwLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHBhZ2VOdW1iZXJzKSB7XG4gICAgICAgIGNvbnN0IGluZGV4QW5jaG9ySFRNTFRyYW5zZm9ybSA9IEluZGV4QW5jaG9ySFRNTFRyYW5zZm9ybS5mcm9tUGFnZU51bWJlcihwYWdlTnVtYmVyKSxcbiAgICAgICAgICAgICAgcGFnZU51bWJlckhUTUxUcmFuc2Zvcm0gPSBQYWdlTnVtYmVySFRNTFRyYW5zZm9ybS5mcm9tUGFnZU51bWJlcihwYWdlTnVtYmVyKTtcblxuICAgICAgICBpbmRleEFuY2hvckhUTUxUcmFuc2Zvcm0ucHJlcGVuZFRvRGl2aXNpb25IVE1MTm9kZShkaXZpc2lvbkhUTUxOb2RlKTtcblxuICAgICAgICBwYWdlTnVtYmVySFRNTFRyYW5zZm9ybS5hcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSk7XG4gICAgICB9XG5cbiAgICAgIGRpdmlzaW9uSFRNTE5vZGVzLnB1c2goZGl2aXNpb25IVE1MTm9kZSk7XG5cbiAgICAgIHBhZ2VOdW1iZXIrKztcblxuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIHBhZ2VOdW1iZXJcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcGFnZU51bWJlcigpIHtcbiAgICBjb25zdCBwYWdlTnVtYmVyID0gdGhpcy5mcm9tRmlyc3RMYXN0Q2hpbGROb2RlKChmaXJzdExhc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGxldCBwYWdlTnVtYmVyID0gbnVsbDtcblxuICAgICAgY29uc3QgZmlyc3RMYXN0Q2hpbGROb2RlUGFnZU51bWJlckhUTUxOb2RlID0gKGZpcnN0TGFzdENoaWxkTm9kZSBpbnN0YW5jZW9mIFBhZ2VOdW1iZXJIVE1MTm9kZSk7XG5cbiAgICAgIGlmIChmaXJzdExhc3RDaGlsZE5vZGVQYWdlTnVtYmVySFRNTE5vZGUpIHtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlckhUTUxOb2RlID0gZmlyc3RMYXN0Q2hpbGROb2RlOyAgLy8vXG5cbiAgICAgICAgcGFnZU51bWJlciA9IHBhZ2VOdW1iZXJIVE1MTm9kZS5nZXRQYWdlTnVtYmVyKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYWdlTnVtYmVyO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhZ2VOdW1iZXI7XG4gIH1cblxuICByZXNvbHZlRm9vdG5vdGVzKGlkZW50aWZpZXJNYXAsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMgPSByZW1vdmVGb290bm90ZUhUTUxOb2Rlcyhub2RlKSxcbiAgICAgICAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zTGVuZ3RoID0gZm9vdG5vdGVIVE1MVHJhbnNmb3Jtcy5sZW5ndGg7XG5cbiAgICBpZiAoZm9vdG5vdGVIVE1MVHJhbnNmb3Jtc0xlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgc3RhcnQgPSBudW1iZXJGb290bm90ZUxpbmtIVE1MTm9kZXMoZm9vdG5vdGVIVE1MVHJhbnNmb3JtcywgaWRlbnRpZmllck1hcCwgbm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbGluZUhUTUxUcmFuc2Zvcm1zID0gbGluZUhUTUxUcmFuc2Zvcm1zRnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybXMoZm9vdG5vdGVIVE1MVHJhbnNmb3JtcyksXG4gICAgICAgICAgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMgPSBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21MaW5lSFRNTFRyYW5zZm9ybXMobGluZUhUTUxUcmFuc2Zvcm1zLCBpZGVudGlmaWVyTWFwLCBzdGFydCksXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0gPSBGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybS5mcm9tU3RhcnRBbmRGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyhzdGFydCwgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMpO1xuXG4gICAgZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0uYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlKGRpdmlzaW9uSFRNTE5vZGUpO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gcnVsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGRpdmlzaW9uQ2xhc3NOYW1lID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU5vdGhpbmcoRGl2aXNpb25IVE1MTm9kZSwgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHtcbiAgICBjb25zdCBkaXZpc2lvbkNsYXNzTmFtZSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25IVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21PdXRlck5vZGUoRGl2aXNpb25IVE1MTm9kZSwgb3V0ZXJOb2RlLCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFnaW5hdGVkSFRNTE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUocGFnaW5hdGVkSFRNTE5vZGVzLCBkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBwYWdpbmF0ZWRIVE1MTm9kZXMsICAvLy9cbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbUNoaWxkTm9kZXMoRGl2aXNpb25IVE1MTm9kZSwgY2hpbGROb2RlcywgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEaXZpc2lvbkhUTUxOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50IiwiZGl2aXNpb25DbGFzc05hbWUiLCJnZXREaXZpc2lvbkNsYXNzTmFtZSIsImNsYXNzTmFtZSIsImNvbnRleHQiLCJnZXRSdWxlTmFtZSIsInJ1bGVObWUiLCJESVZJU0lPTl9NQVJLRE9XTl9SVUxFX05BTUUiLCJyZXNvbHZlIiwiZGl2aXNpb25IVE1MTm9kZXMiLCJub2RlIiwicmVtb3ZlTmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzIiwicGFnZU51bWJlckRpcmVjdGl2ZUhUTkxUcmFuc2Zvcm0iLCJyZW1vdmVQYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUiLCJmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSIsInJlbW92ZUZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3JtcyIsInJlbW92ZUZvb3Rub3RlSFRNTE5vZGVzIiwiYWRkRm9vdG5vdGVIVE1MTm9kZXMiLCJwYWdpbmF0ZSIsImdldE91dGVyTm9kZSIsInBhZ2VOdW1iZXJzIiwiaWRlbnRpZmllck1hcCIsImh0bWxOb2RlcyIsInJlbW92ZUhUTUxOb2RlcyIsImdyb3VwZWRIVE1MTm9kZXNBcnJheSIsImdyb3VwSFRNTE5vZGVzIiwicGFnaW5hdGVkSFRNTE5vZGVzQXJyYXkiLCJwYWdpbmF0ZUdyb3VwZWRIVE1MTm9kZXMiLCJmb3JFYWNoIiwicGFnaW5hdGVkSFRNTE5vZGVzIiwicGFnZU51bWJlciIsImRpdmlzaW9uSFRNTE5vZGUiLCJmcm9tUGFnaW5hdGVkSFRNTE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUiLCJyZXNvbHZlRm9vdG5vdGVzIiwiaW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtIiwiSW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtIiwiZnJvbVBhZ2VOdW1iZXIiLCJwYWdlTnVtYmVySFRNTFRyYW5zZm9ybSIsIlBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtIiwicHJlcGVuZFRvRGl2aXNpb25IVE1MTm9kZSIsImFwcGVuZFRvRGl2aXNpb25IVE1MTm9kZSIsInB1c2giLCJPYmplY3QiLCJhc3NpZ24iLCJmcm9tRmlyc3RMYXN0Q2hpbGROb2RlIiwiZmlyc3RMYXN0Q2hpbGROb2RlIiwiZmlyc3RMYXN0Q2hpbGROb2RlUGFnZU51bWJlckhUTUxOb2RlIiwiUGFnZU51bWJlckhUTUxOb2RlIiwicGFnZU51bWJlckhUTUxOb2RlIiwiZ2V0UGFnZU51bWJlciIsImZvb3Rub3RlSFRNTFRyYW5zZm9ybXNMZW5ndGgiLCJsZW5ndGgiLCJzdGFydCIsIm51bWJlckZvb3Rub3RlTGlua0hUTUxOb2RlcyIsImxpbmVIVE1MVHJhbnNmb3JtcyIsImxpbmVIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUhUTUxUcmFuc2Zvcm1zIiwiZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMiLCJmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21MaW5lSFRNTFRyYW5zZm9ybXMiLCJmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSIsIkZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIiwiZnJvbVN0YXJ0QW5kRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMiLCJhc1N0cmluZyIsInJ1bGVOYW1lIiwic3RyaW5nIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJmcm9tQ2hpbGROb2RlcyIsInRhZ05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBcUJxQkE7OzsyREFuQkE7aUVBQ1U7a0VBQ0s7a0VBQ0M7Z0VBQ0U7d0JBRUs7d0JBV3FCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEQsSUFBQSxBQUFNQSxpQ0FBTjtjQUFNQTthQUFBQSxpQkFDUEMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxpQkFBaUI7Z0NBRHpETDs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7WUFBV0M7WUFBWUM7WUFBWUM7O1FBRXpDLE1BQUtDLGlCQUFpQixHQUFHQTs7O2tCQUpSTDs7WUFPbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsaUJBQWlCO1lBQy9COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLE9BQU87Z0JBQ2YsSUFBTUQsWUFBWSxJQUFJLENBQUNGLGlCQUFpQixFQUFFLEdBQUc7Z0JBRTdDLE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsVUFBVUMscUNBQTJCO2dCQUUzQyxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLGlCQUFpQixFQUFFTCxPQUFPO2dCQUNoQyxJQUFNTSxPQUFPLElBQUk7Z0JBRWpCQyxJQUFBQSwyQ0FBaUMsRUFBQ0Q7Z0JBRWxDLElBQU1FLG1DQUFtQ0MsSUFBQUEsMkNBQWlDLEVBQUNILE9BQ3JFSSw2QkFBNkJDLElBQUFBLDBDQUFnQyxFQUFDTCxPQUM5RE0seUJBQXlCQyxJQUFBQSxpQ0FBdUIsRUFBQ1A7Z0JBRXZELElBQUlJLCtCQUErQixNQUFNO29CQUN2Q0ksSUFBQUEsOEJB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