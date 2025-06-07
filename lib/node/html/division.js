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
            key: "fromFirstHTMLNode",
            value: function fromFirstHTMLNode(callback) {
                this.fromFirstChildNode(function(firstChildNode) {
                    var firstHTMLNode = firstChildNode; ///
                    callback(firstHTMLNode);
                });
            }
        },
        {
            key: "paginate",
            value: function paginate(divisionHTMLNodes, context) {
                var _this = this;
                var node = this;
                var pageNumberDirectiveHTMLNode = (0, _html1.pageNumberDirectiveHTMLNodeFromNode)(node), footnotesDirectiveHTMLNode = (0, _html1.footnotesDirectiveHTMLNodeFromNode)(node);
                if (footnotesDirectiveHTMLNode !== null) {
                    var footnoteHTMLTransforms = (0, _division.removeFootnoteHTMLNodes)(node);
                    (0, _division.addFootnoteHTMLNodes)(footnoteHTMLTransforms, node, context);
                }
                var outerNode = this.getOuterNode(), identifierMap = {}, divisionClassName = outerNode.className(context);
                var htmlNodes = (0, _division.removeHTMLNodes)(node), groupedHTMLNodesArray = (0, _division.groupHTMLNodes)(htmlNodes), paginatedHTMLNodesArray = (0, _division.paginateGroupedHTMLNodes)(groupedHTMLNodesArray, context);
                paginatedHTMLNodesArray.forEach(function(paginatedHTMLNodes) {
                    var pageNumber;
                    pageNumber = context.pageNumber;
                    var divisionHTMLNode = DivisionHTMLNode.fromPaginatedHTMLNodesAndDivisionClassName(paginatedHTMLNodes, divisionClassName);
                    divisionHTMLNode.resolveFootnotes(identifierMap, context);
                    if (pageNumberDirectiveHTMLNode !== null) {
                        var pageNumberHTMLTransform = _pageNumber1.default.fromPageNumber(pageNumber);
                        pageNumberHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
                        _this.fromFirstHTMLNode(function(firstHTMLNode) {
                            var indexAnchorHTMLTransform = _indexAnchor.default.fromPageNumber(pageNumber), htmlNode = firstHTMLNode; ///
                            indexAnchorHTMLTransform.appendToHTMLNode(htmlNode);
                        });
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
                var footnotesListHTMLTransform = null;
                var node = this, footnoteHTMLTransforms = (0, _division.removeFootnoteHTMLNodes)(node), footnoteHTMLTransformsLength = footnoteHTMLTransforms.length;
                if (footnoteHTMLTransformsLength > 0) {
                    var divisionHTMLNode = node, start = (0, _division.numberFootnoteLinkHTMLNodes)(footnoteHTMLTransforms, identifierMap, node, context), lineHTMLTransforms = (0, _division.lineHTMLTransformsFromFootnoteHTMLTransforms)(footnoteHTMLTransforms), footnoteItemHTMLTransforms = (0, _division.footnoteItemHTMLTransformsFromLineHTMLTransforms)(lineHTMLTransforms, identifierMap, start);
                    footnotesListHTMLTransform = _footnotes.default.fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms);
                    footnotesListHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
                }
                return footnotesListHTMLTransform;
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
                var divisionMarkdownNode = outerNode, divisionClassName = divisionMarkdownNode.getDivisionClassName(), divisionHTMLNode = _html.default.fromOuterNode(DivisionHTMLNode, outerNode, divisionClassName);
                return divisionHTMLNode;
            }
        },
        {
            key: "fromPaginatedHTMLNodesAndDivisionClassName",
            value: function fromPaginatedHTMLNodesAndDivisionClassName(paginatedHTMLNodes, divisionClassName) {
                var childHTMLNodes = paginatedHTMLNodes, divisionHTMLNode = _html.default.fromChildHTMLNodes(DivisionHTMLNode, childHTMLNodes, divisionClassName);
                return divisionHTMLNode;
            }
        }
    ]);
    return DivisionHTMLNode;
}(_html.default);
_define_property(DivisionHTMLNode, "tagName", "div");
_define_property(DivisionHTMLNode, "className", null);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5pbXBvcnQgUGFnZU51bWJlckhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWwvcGFnZU51bWJlclwiO1xuaW1wb3J0IFBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9wYWdlTnVtYmVyXCI7XG5pbXBvcnQgSW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9pbmRleEFuY2hvclwiO1xuaW1wb3J0IEZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9saXN0L2Zvb3Rub3Rlc1wiO1xuXG5pbXBvcnQgeyBESVZJU0lPTl9NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5pbXBvcnQgeyBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlLCBwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvaHRtbFwiO1xuaW1wb3J0IHsgZ3JvdXBIVE1MTm9kZXMsXG4gICAgICAgICByZW1vdmVIVE1MTm9kZXMsXG4gICAgICAgICBhZGRGb290bm90ZUhUTUxOb2RlcyxcbiAgICAgICAgIHJlbW92ZUZvb3Rub3RlSFRNTE5vZGVzLFxuICAgICAgICAgcGFnaW5hdGVHcm91cGVkSFRNTE5vZGVzLFxuICAgICAgICAgbnVtYmVyRm9vdG5vdGVMaW5rSFRNTE5vZGVzLFxuICAgICAgICAgbGluZUhUTUxUcmFuc2Zvcm1zRnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybXMsXG4gICAgICAgICBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21MaW5lSFRNTFRyYW5zZm9ybXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RpdmlzaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlzaW9uSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCwgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBzdXBlcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25DbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZGl2aXNpb25DbGFzc05hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHJ1bGVObWUgPSBESVZJU0lPTl9NQVJLRE9XTl9SVUxFX05BTUU7XG5cbiAgICByZXR1cm4gcnVsZU5tZTtcbiAgfVxuXG4gIGZyb21GaXJzdEhUTUxOb2RlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5mcm9tRmlyc3RDaGlsZE5vZGUoKGZpcnN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBmaXJzdEhUTUxOb2RlID0gZmlyc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgICAgY2FsbGJhY2soZmlyc3RIVE1MTm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICBwYWdpbmF0ZShkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzO1xuXG4gICAgY29uc3QgcGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlID0gcGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgPSBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgaWYgKGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmb290bm90ZUhUTUxUcmFuc2Zvcm1zID0gcmVtb3ZlRm9vdG5vdGVIVE1MTm9kZXMobm9kZSk7XG5cbiAgICAgIGFkZEZvb3Rub3RlSFRNTE5vZGVzKGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMsIG5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIGNvbnN0IG91dGVyTm9kZSA9IHRoaXMuZ2V0T3V0ZXJOb2RlKCksXG4gICAgICAgICAgaWRlbnRpZmllck1hcCA9IHt9LFxuICAgICAgICAgIGRpdmlzaW9uQ2xhc3NOYW1lID0gb3V0ZXJOb2RlLmNsYXNzTmFtZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGh0bWxOb2RlcyA9IHJlbW92ZUhUTUxOb2Rlcyhub2RlKSxcbiAgICAgICAgICBncm91cGVkSFRNTE5vZGVzQXJyYXkgPSBncm91cEhUTUxOb2RlcyhodG1sTm9kZXMpLFxuICAgICAgICAgIHBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5ID0gcGFnaW5hdGVHcm91cGVkSFRNTE5vZGVzKGdyb3VwZWRIVE1MTm9kZXNBcnJheSwgY29udGV4dCk7XG5cbiAgICBwYWdpbmF0ZWRIVE1MTm9kZXNBcnJheS5mb3JFYWNoKChwYWdpbmF0ZWRIVE1MTm9kZXMpID0+IHtcbiAgICAgIGxldCBwYWdlTnVtYmVyO1xuXG4gICAgICAoeyBwYWdlTnVtYmVyIH0gPSBjb250ZXh0KTtcblxuICAgICAgY29uc3QgZGl2aXNpb25IVE1MTm9kZSA9IERpdmlzaW9uSFRNTE5vZGUuZnJvbVBhZ2luYXRlZEhUTUxOb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2luYXRlZEhUTUxOb2RlcywgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgICBkaXZpc2lvbkhUTUxOb2RlLnJlc29sdmVGb290bm90ZXMoaWRlbnRpZmllck1hcCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlckhUTUxUcmFuc2Zvcm0gPSBQYWdlTnVtYmVySFRNTFRyYW5zZm9ybS5mcm9tUGFnZU51bWJlcihwYWdlTnVtYmVyKTtcblxuICAgICAgICBwYWdlTnVtYmVySFRNTFRyYW5zZm9ybS5hcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSk7XG5cbiAgICAgICAgdGhpcy5mcm9tRmlyc3RIVE1MTm9kZSgoZmlyc3RIVE1MTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluZGV4QW5jaG9ySFRNTFRyYW5zZm9ybSA9IEluZGV4QW5jaG9ySFRNTFRyYW5zZm9ybS5mcm9tUGFnZU51bWJlcihwYWdlTnVtYmVyKSxcbiAgICAgICAgICAgICAgICBodG1sTm9kZSA9IGZpcnN0SFRNTE5vZGU7ICAvLy9cblxuICAgICAgICAgIGluZGV4QW5jaG9ySFRNTFRyYW5zZm9ybS5hcHBlbmRUb0hUTUxOb2RlKGh0bWxOb2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGRpdmlzaW9uSFRNTE5vZGVzLnB1c2goZGl2aXNpb25IVE1MTm9kZSk7XG5cbiAgICAgIHBhZ2VOdW1iZXIrKztcblxuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIHBhZ2VOdW1iZXJcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcGFnZU51bWJlcigpIHtcbiAgICBjb25zdCBwYWdlTnVtYmVyID0gdGhpcy5mcm9tRmlyc3RMYXN0Q2hpbGROb2RlKChmaXJzdExhc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGxldCBwYWdlTnVtYmVyID0gbnVsbDtcblxuICAgICAgY29uc3QgZmlyc3RMYXN0Q2hpbGROb2RlUGFnZU51bWJlckhUTUxOb2RlID0gKGZpcnN0TGFzdENoaWxkTm9kZSBpbnN0YW5jZW9mIFBhZ2VOdW1iZXJIVE1MTm9kZSk7XG5cbiAgICAgIGlmIChmaXJzdExhc3RDaGlsZE5vZGVQYWdlTnVtYmVySFRNTE5vZGUpIHtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlckhUTUxOb2RlID0gZmlyc3RMYXN0Q2hpbGROb2RlOyAgLy8vXG5cbiAgICAgICAgcGFnZU51bWJlciA9IHBhZ2VOdW1iZXJIVE1MTm9kZS5nZXRQYWdlTnVtYmVyKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYWdlTnVtYmVyO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhZ2VOdW1iZXI7XG4gIH1cblxuICByZXNvbHZlRm9vdG5vdGVzKGlkZW50aWZpZXJNYXAsIGNvbnRleHQpIHtcbiAgICBsZXQgZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0gPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zID0gcmVtb3ZlRm9vdG5vdGVIVE1MTm9kZXMobm9kZSksXG4gICAgICAgICAgZm9vdG5vdGVIVE1MVHJhbnNmb3Jtc0xlbmd0aCA9IGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMubGVuZ3RoO1xuXG4gICAgaWYgKGZvb3Rub3RlSFRNTFRyYW5zZm9ybXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBkaXZpc2lvbkhUTUxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RhcnQgPSBudW1iZXJGb290bm90ZUxpbmtIVE1MTm9kZXMoZm9vdG5vdGVIVE1MVHJhbnNmb3JtcywgaWRlbnRpZmllck1hcCwgbm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBsaW5lSFRNTFRyYW5zZm9ybXMgPSBsaW5lSFRNTFRyYW5zZm9ybXNGcm9tRm9vdG5vdGVIVE1MVHJhbnNmb3Jtcyhmb290bm90ZUhUTUxUcmFuc2Zvcm1zKSxcbiAgICAgICAgICAgIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zID0gZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXNGcm9tTGluZUhUTUxUcmFuc2Zvcm1zKGxpbmVIVE1MVHJhbnNmb3JtcywgaWRlbnRpZmllck1hcCwgc3RhcnQpO1xuXG4gICAgICBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSA9IEZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtLmZyb21TdGFydEFuZEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zKHN0YXJ0LCBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtcyk7XG5cbiAgICAgIGZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtLmFwcGVuZFRvRGl2aXNpb25IVE1MTm9kZShkaXZpc2lvbkhUTUxOb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm07XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gbnVsbDtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgZGl2aXNpb25DbGFzc05hbWUgPSBudWxsLFxuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tTm90aGluZyhEaXZpc2lvbkhUTUxOb2RlLCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gb3V0ZXJOb2RlLCAvLy9cbiAgICAgICAgICBkaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmdldERpdmlzaW9uQ2xhc3NOYW1lKCksXG4gICAgICAgICAgZGl2aXNpb25IVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21PdXRlck5vZGUoRGl2aXNpb25IVE1MTm9kZSwgb3V0ZXJOb2RlLCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFnaW5hdGVkSFRNTE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUocGFnaW5hdGVkSFRNTE5vZGVzLCBkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkSFRNTE5vZGVzID0gcGFnaW5hdGVkSFRNTE5vZGVzLCAgLy8vXG4gICAgICAgICAgZGl2aXNpb25IVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21DaGlsZEhUTUxOb2RlcyhEaXZpc2lvbkhUTUxOb2RlLCBjaGlsZEhUTUxOb2RlcywgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEaXZpc2lvbkhUTUxOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50IiwiZGl2aXNpb25DbGFzc05hbWUiLCJnZXREaXZpc2lvbkNsYXNzTmFtZSIsImNsYXNzTmFtZSIsImNvbnRleHQiLCJnZXRSdWxlTmFtZSIsInJ1bGVObWUiLCJESVZJU0lPTl9NQVJLRE9XTl9SVUxFX05BTUUiLCJmcm9tRmlyc3RIVE1MTm9kZSIsImNhbGxiYWNrIiwiZnJvbUZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdEhUTUxOb2RlIiwicGFnaW5hdGUiLCJkaXZpc2lvbkhUTUxOb2RlcyIsIm5vZGUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSIsImZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlIiwiZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSIsImZvb3Rub3RlSFRNTFRyYW5zZm9ybXMiLCJyZW1vdmVGb290bm90ZUhUTUxOb2RlcyIsImFkZEZvb3Rub3RlSFRNTE5vZGVzIiwiZ2V0T3V0ZXJOb2RlIiwiaWRlbnRpZmllck1hcCIsImh0bWxOb2RlcyIsInJlbW92ZUhUTUxOb2RlcyIsImdyb3VwZWRIVE1MTm9kZXNBcnJheSIsImdyb3VwSFRNTE5vZGVzIiwicGFnaW5hdGVkSFRNTE5vZGVzQXJyYXkiLCJwYWdpbmF0ZUdyb3VwZWRIVE1MTm9kZXMiLCJmb3JFYWNoIiwicGFnaW5hdGVkSFRNTE5vZGVzIiwicGFnZU51bWJlciIsImRpdmlzaW9uSFRNTE5vZGUiLCJmcm9tUGFnaW5hdGVkSFRNTE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUiLCJyZXNvbHZlRm9vdG5vdGVzIiwicGFnZU51bWJlckhUTUxUcmFuc2Zvcm0iLCJQYWdlTnVtYmVySFRNTFRyYW5zZm9ybSIsImZyb21QYWdlTnVtYmVyIiwiYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlIiwiaW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtIiwiSW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtIiwiaHRtbE5vZGUiLCJhcHBlbmRUb0hUTUxOb2RlIiwicHVzaCIsIk9iamVjdCIsImFzc2lnbiIsImZyb21GaXJzdExhc3RDaGlsZE5vZGUiLCJmaXJzdExhc3RDaGlsZE5vZGUiLCJmaXJzdExhc3RDaGlsZE5vZGVQYWdlTnVtYmVySFRNTE5vZGUiLCJQYWdlTnVtYmVySFRNTE5vZGUiLCJwYWdlTnVtYmVySFRNTE5vZGUiLCJnZXRQYWdlTnVtYmVyIiwiZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0iLCJmb290bm90ZUhUTUxUcmFuc2Zvcm1zTGVuZ3RoIiwibGVuZ3RoIiwic3RhcnQiLCJudW1iZXJGb290bm90ZUxpbmtIVE1MTm9kZXMiLCJsaW5lSFRNTFRyYW5zZm9ybXMiLCJsaW5lSFRNTFRyYW5zZm9ybXNGcm9tRm9vdG5vdGVIVE1MVHJhbnNmb3JtcyIsImZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zIiwiZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXNGcm9tTGluZUhUTUxUcmFuc2Zvcm1zIiwiRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0iLCJmcm9tU3RhcnRBbmRGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyIsImFzU3RyaW5nIiwicnVsZU5hbWUiLCJzdHJpbmciLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY2hpbGRIVE1MTm9kZXMiLCJmcm9tQ2hpbGRIVE1MTm9kZXMiLCJ0YWdOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQW1CcUJBOzs7MkRBakJBO2lFQUNVO2tFQUNLO2tFQUNDO2dFQUNFO3dCQUVLO3FCQUM0Qzt3QkFRdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRCxJQUFBLEFBQU1BLGlDQUFOO2NBQU1BO2FBQUFBLGlCQUNQQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLGlCQUFpQjtnQ0FEekRMOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFXQztZQUFZQztZQUFZQzs7UUFFekMsTUFBS0MsaUJBQWlCLEdBQUdBOzs7a0JBSlJMOztZQU9uQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxpQkFBaUI7WUFDL0I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsT0FBTztnQkFDZixJQUFNRCxZQUFZLElBQUksQ0FBQ0YsaUJBQWlCLEVBQUUsR0FBRztnQkFFN0MsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxVQUFVQyxxQ0FBMkI7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