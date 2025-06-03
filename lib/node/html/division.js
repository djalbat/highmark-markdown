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
            key: "fromFirstHTMLNode",
            value: function fromFirstHTMLNode(callback) {
                this.fromFirstChildNode(function(firstChildNode) {
                    var firstHTMLNode = firstChildNode; ///
                    callback(firstHTMLNode);
                });
            }
        },
        {
            key: "resolve",
            value: function resolve(divisionHTMLNodes, context) {
                var node = this;
                (0, _division.removeNestedFootnoteLinkHTMLNodes)(node);
                var pageNumberDirectiveHTMLTransform = (0, _division.removePageNumberDirectiveHTMLNode)(node), footnotesDirectiveHTMLNode = (0, _division.removeFootnotesDirectiveHTMLNode)(node), footnoteHTMLTransforms = (0, _division.removeFootnoteHTMLNodes)(node);
                if (footnotesDirectiveHTMLNode !== null) {
                    (0, _division.addFootnoteHTMLNodes)(footnoteHTMLTransforms, node, context);
                }
                this.paginate(pageNumberDirectiveHTMLTransform, divisionHTMLNodes, context);
            }
        },
        {
            key: "paginate",
            value: function paginate(pageNumberDirectiveHTMLTransform, divisionHTMLNodes, context) {
                var _this = this;
                var node = this, outerNode = this.getOuterNode(), pageNumbers = pageNumberDirectiveHTMLTransform !== null, identifierMap = {}, divisionClassName = outerNode.className(context);
                var htmlNodes = (0, _division.removeHTMLNodes)(node), groupedHTMLNodesArray = (0, _division.groupHTMLNodes)(htmlNodes), paginatedHTMLNodesArray = (0, _division.paginateGroupedHTMLNodes)(groupedHTMLNodesArray, context);
                paginatedHTMLNodesArray.forEach(function(paginatedHTMLNodes) {
                    var pageNumber;
                    pageNumber = context.pageNumber;
                    var divisionHTMLNode = DivisionHTMLNode.fromPaginatedHTMLNodesAndDivisionClassName(paginatedHTMLNodes, divisionClassName);
                    divisionHTMLNode.resolveFootnotes(identifierMap, context);
                    if (pageNumbers) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5pbXBvcnQgUGFnZU51bWJlckhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWwvcGFnZU51bWJlclwiO1xuaW1wb3J0IFBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9wYWdlTnVtYmVyXCI7XG5pbXBvcnQgSW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9pbmRleEFuY2hvclwiO1xuaW1wb3J0IEZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9saXN0L2Zvb3Rub3Rlc1wiO1xuXG5pbXBvcnQgeyBESVZJU0lPTl9NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5pbXBvcnQgeyBncm91cEhUTUxOb2RlcyxcbiAgICAgICAgIHJlbW92ZUhUTUxOb2RlcyxcbiAgICAgICAgIGFkZEZvb3Rub3RlSFRNTE5vZGVzLFxuICAgICAgICAgcmVtb3ZlRm9vdG5vdGVIVE1MTm9kZXMsXG4gICAgICAgICBwYWdpbmF0ZUdyb3VwZWRIVE1MTm9kZXMsXG4gICAgICAgICBudW1iZXJGb290bm90ZUxpbmtIVE1MTm9kZXMsXG4gICAgICAgICByZW1vdmVGb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSxcbiAgICAgICAgIHJlbW92ZVBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZSxcbiAgICAgICAgIHJlbW92ZU5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2RlcyxcbiAgICAgICAgIGxpbmVIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUhUTUxUcmFuc2Zvcm1zLFxuICAgICAgICAgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXNGcm9tTGluZUhUTUxUcmFuc2Zvcm1zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kaXZpc2lvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpc2lvbkhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBjb25zdHJ1Y3RvcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQsIGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgc3VwZXIob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldERpdmlzaW9uQ2xhc3NOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lOyAvLy9cblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTm1lID0gRElWSVNJT05fTUFSS0RPV05fUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVObWU7XG4gIH1cblxuICBmcm9tRmlyc3RIVE1MTm9kZShjYWxsYmFjaykge1xuICAgIHRoaXMuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgZmlyc3RIVE1MTm9kZSA9IGZpcnN0Q2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIGNhbGxiYWNrKGZpcnN0SFRNTE5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzb2x2ZShkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzO1xuXG4gICAgcmVtb3ZlTmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzKG5vZGUpO1xuXG4gICAgY29uc3QgcGFnZU51bWJlckRpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0gPSByZW1vdmVQYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUobm9kZSksXG4gICAgICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgPSByZW1vdmVGb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zID0gcmVtb3ZlRm9vdG5vdGVIVE1MTm9kZXMobm9kZSk7XG5cbiAgICBpZiAoZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGFkZEZvb3Rub3RlSFRNTE5vZGVzKGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMsIG5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHRoaXMucGFnaW5hdGUocGFnZU51bWJlckRpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0sIGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KTtcbiAgfVxuXG4gIHBhZ2luYXRlKHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MVHJhbnNmb3JtLCBkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgb3V0ZXJOb2RlID0gdGhpcy5nZXRPdXRlck5vZGUoKSxcbiAgICAgICAgICBwYWdlTnVtYmVycyA9IChwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSAhPT0gbnVsbCksXG4gICAgICAgICAgaWRlbnRpZmllck1hcCA9IHt9LFxuICAgICAgICAgIGRpdmlzaW9uQ2xhc3NOYW1lID0gb3V0ZXJOb2RlLmNsYXNzTmFtZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGh0bWxOb2RlcyA9IHJlbW92ZUhUTUxOb2Rlcyhub2RlKSxcbiAgICAgICAgICBncm91cGVkSFRNTE5vZGVzQXJyYXkgPSBncm91cEhUTUxOb2RlcyhodG1sTm9kZXMpLFxuICAgICAgICAgIHBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5ID0gcGFnaW5hdGVHcm91cGVkSFRNTE5vZGVzKGdyb3VwZWRIVE1MTm9kZXNBcnJheSwgY29udGV4dCk7XG5cbiAgICBwYWdpbmF0ZWRIVE1MTm9kZXNBcnJheS5mb3JFYWNoKChwYWdpbmF0ZWRIVE1MTm9kZXMpID0+IHtcbiAgICAgIGxldCBwYWdlTnVtYmVyO1xuXG4gICAgICAoeyBwYWdlTnVtYmVyIH0gPSBjb250ZXh0KTtcblxuICAgICAgY29uc3QgZGl2aXNpb25IVE1MTm9kZSA9IERpdmlzaW9uSFRNTE5vZGUuZnJvbVBhZ2luYXRlZEhUTUxOb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2luYXRlZEhUTUxOb2RlcywgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgICBkaXZpc2lvbkhUTUxOb2RlLnJlc29sdmVGb290bm90ZXMoaWRlbnRpZmllck1hcCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChwYWdlTnVtYmVycykge1xuICAgICAgICBjb25zdCBwYWdlTnVtYmVySFRNTFRyYW5zZm9ybSA9IFBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtLmZyb21QYWdlTnVtYmVyKHBhZ2VOdW1iZXIpO1xuXG4gICAgICAgIHBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtLmFwcGVuZFRvRGl2aXNpb25IVE1MTm9kZShkaXZpc2lvbkhUTUxOb2RlKTtcblxuICAgICAgICB0aGlzLmZyb21GaXJzdEhUTUxOb2RlKChmaXJzdEhUTUxOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtID0gSW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtLmZyb21QYWdlTnVtYmVyKHBhZ2VOdW1iZXIpLFxuICAgICAgICAgICAgICAgIGh0bWxOb2RlID0gZmlyc3RIVE1MTm9kZTsgIC8vL1xuXG4gICAgICAgICAgaW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtLmFwcGVuZFRvSFRNTE5vZGUoaHRtbE5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZGl2aXNpb25IVE1MTm9kZXMucHVzaChkaXZpc2lvbkhUTUxOb2RlKTtcblxuICAgICAgcGFnZU51bWJlcisrO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgcGFnZU51bWJlclxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwYWdlTnVtYmVyKCkge1xuICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSB0aGlzLmZyb21GaXJzdExhc3RDaGlsZE5vZGUoKGZpcnN0TGFzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgbGV0IHBhZ2VOdW1iZXIgPSBudWxsO1xuXG4gICAgICBjb25zdCBmaXJzdExhc3RDaGlsZE5vZGVQYWdlTnVtYmVySFRNTE5vZGUgPSAoZmlyc3RMYXN0Q2hpbGROb2RlIGluc3RhbmNlb2YgUGFnZU51bWJlckhUTUxOb2RlKTtcblxuICAgICAgaWYgKGZpcnN0TGFzdENoaWxkTm9kZVBhZ2VOdW1iZXJIVE1MTm9kZSkge1xuICAgICAgICBjb25zdCBwYWdlTnVtYmVySFRNTE5vZGUgPSBmaXJzdExhc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgICAgICBwYWdlTnVtYmVyID0gcGFnZU51bWJlckhUTUxOb2RlLmdldFBhZ2VOdW1iZXIoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhZ2VOdW1iZXI7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFnZU51bWJlcjtcbiAgfVxuXG4gIHJlc29sdmVGb290bm90ZXMoaWRlbnRpZmllck1hcCwgY29udGV4dCkge1xuICAgIGxldCBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMgPSByZW1vdmVGb290bm90ZUhUTUxOb2Rlcyhub2RlKSxcbiAgICAgICAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zTGVuZ3RoID0gZm9vdG5vdGVIVE1MVHJhbnNmb3Jtcy5sZW5ndGg7XG5cbiAgICBpZiAoZm9vdG5vdGVIVE1MVHJhbnNmb3Jtc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICBzdGFydCA9IG51bWJlckZvb3Rub3RlTGlua0hUTUxOb2Rlcyhmb290bm90ZUhUTUxUcmFuc2Zvcm1zLCBpZGVudGlmaWVyTWFwLCBub2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGxpbmVIVE1MVHJhbnNmb3JtcyA9IGxpbmVIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUhUTUxUcmFuc2Zvcm1zKGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMpLFxuICAgICAgICAgICAgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMgPSBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21MaW5lSFRNTFRyYW5zZm9ybXMobGluZUhUTUxUcmFuc2Zvcm1zLCBpZGVudGlmaWVyTWFwLCBzdGFydCk7XG5cbiAgICAgIGZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtID0gRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0uZnJvbVN0YXJ0QW5kRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMoc3RhcnQsIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zKTtcblxuICAgICAgZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0uYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlKGRpdmlzaW9uSFRNTE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybTtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IHJ1bGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBudWxsO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBkaXZpc2lvbkNsYXNzTmFtZSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25IVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21Ob3RoaW5nKERpdmlzaW9uSFRNTE5vZGUsIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBvdXRlck5vZGUsIC8vL1xuICAgICAgICAgIGRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25NYXJrZG93bk5vZGUuZ2V0RGl2aXNpb25DbGFzc05hbWUoKSxcbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShEaXZpc2lvbkhUTUxOb2RlLCBvdXRlck5vZGUsIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYWdpbmF0ZWRIVE1MTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZShwYWdpbmF0ZWRIVE1MTm9kZXMsIGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgY29uc3QgY2hpbGRIVE1MTm9kZXMgPSBwYWdpbmF0ZWRIVE1MTm9kZXMsICAvLy9cbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbUNoaWxkSFRNTE5vZGVzKERpdmlzaW9uSFRNTE5vZGUsIGNoaWxkSFRNTE5vZGVzLCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRpdmlzaW9uSFRNTE5vZGUiLCJvdXRlck5vZGUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsImRvbUVsZW1lbnQiLCJkaXZpc2lvbkNsYXNzTmFtZSIsImdldERpdmlzaW9uQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsImdldFJ1bGVOYW1lIiwicnVsZU5tZSIsIkRJVklTSU9OX01BUktET1dOX1JVTEVfTkFNRSIsImZyb21GaXJzdEhUTUxOb2RlIiwiY2FsbGJhY2siLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0SFRNTE5vZGUiLCJyZXNvbHZlIiwiZGl2aXNpb25IVE1MTm9kZXMiLCJub2RlIiwicmVtb3ZlTmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzIiwicGFnZU51bWJlckRpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0iLCJyZW1vdmVQYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUiLCJmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSIsInJlbW92ZUZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3JtcyIsInJlbW92ZUZvb3Rub3RlSFRNTE5vZGVzIiwiYWRkRm9vdG5vdGVIVE1MTm9kZXMiLCJwYWdpbmF0ZSIsImdldE91dGVyTm9kZSIsInBhZ2VOdW1iZXJzIiwiaWRlbnRpZmllck1hcCIsImh0bWxOb2RlcyIsInJlbW92ZUhUTUxOb2RlcyIsImdyb3VwZWRIVE1MTm9kZXNBcnJheSIsImdyb3VwSFRNTE5vZGVzIiwicGFnaW5hdGVkSFRNTE5vZGVzQXJyYXkiLCJwYWdpbmF0ZUdyb3VwZWRIVE1MTm9kZXMiLCJmb3JFYWNoIiwicGFnaW5hdGVkSFRNTE5vZGVzIiwicGFnZU51bWJlciIsImRpdmlzaW9uSFRNTE5vZGUiLCJmcm9tUGFnaW5hdGVkSFRNTE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUiLCJyZXNvbHZlRm9vdG5vdGVzIiwicGFnZU51bWJlckhUTUxUcmFuc2Zvcm0iLCJQYWdlTnVtYmVySFRNTFRyYW5zZm9ybSIsImZyb21QYWdlTnVtYmVyIiwiYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlIiwiaW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtIiwiSW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtIiwiaHRtbE5vZGUiLCJhcHBlbmRUb0hUTUxOb2RlIiwicHVzaCIsIk9iamVjdCIsImFzc2lnbiIsImZyb21GaXJzdExhc3RDaGlsZE5vZGUiLCJmaXJzdExhc3RDaGlsZE5vZGUiLCJmaXJzdExhc3RDaGlsZE5vZGVQYWdlTnVtYmVySFRNTE5vZGUiLCJQYWdlTnVtYmVySFRNTE5vZGUiLCJwYWdlTnVtYmVySFRNTE5vZGUiLCJnZXRQYWdlTnVtYmVyIiwiZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0iLCJmb290bm90ZUhUTUxUcmFuc2Zvcm1zTGVuZ3RoIiwibGVuZ3RoIiwic3RhcnQiLCJudW1iZXJGb290bm90ZUxpbmtIVE1MTm9kZXMiLCJsaW5lSFRNTFRyYW5zZm9ybXMiLCJsaW5lSFRNTFRyYW5zZm9ybXNGcm9tRm9vdG5vdGVIVE1MVHJhbnNmb3JtcyIsImZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zIiwiZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXNGcm9tTGluZUhUTUxUcmFuc2Zvcm1zIiwiRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0iLCJmcm9tU3RhcnRBbmRGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyIsImFzU3RyaW5nIiwicnVsZU5hbWUiLCJzdHJpbmciLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY2hpbGRIVE1MTm9kZXMiLCJmcm9tQ2hpbGRIVE1MTm9kZXMiLCJ0YWdOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQXFCcUJBOzs7MkRBbkJBO2lFQUNVO2tFQUNLO2tFQUNDO2dFQUNFO3dCQUVLO3dCQVdxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxELElBQUEsQUFBTUEsaUNBQU47Y0FBTUE7YUFBQUEsaUJBQ1BDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsaUJBQWlCO2dDQUR6REw7O2dCQUVqQixrQkFGaUJBO1lBRVhDO1lBQVdDO1lBQVlDO1lBQVlDOztRQUV6QyxNQUFLQyxpQkFBaUIsR0FBR0E7OztrQkFKUkw7O1lBT25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELGlCQUFpQjtZQUMvQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxPQUFPO2dCQUNmLElBQU1ELFlBQVksSUFBSSxDQUFDRixpQkFBaUIsRUFBRSxHQUFHO2dCQUU3QyxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFVBQVVDLHFDQUEyQjtnQkFFM0MsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLFFBQVE7Z0JBQ3hCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUMsU0FBQ0M7b0JBQ3ZCLElBQU1DLGdCQUFnQkQsZ0JBQWlCLEdBQUc7b0JBRTFDRixTQUFTRztnQkFDWDtZQUNGOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLGlCQUFpQixFQUFFVixPQUFPO2dCQUNoQyxJQUFNVyxPQUFPLElBQUk7Z0JBRWpCQyxJQUFBQSwyQ0FBaUMsRUFBQ0Q7Z0JBRWxDLElBQU1FLG1DQUFtQ0MsSUFBQUEsMkNBQWlDLEVBQUNILE9BQ3JFSSw2QkFBNkJDLElBQUFBLDBDQUFnQyxFQUFDTCxPQUM5RE0seUJBQXlCQyxJQUFBQSxpQ0FBdUIsRUFBQ1A7Z0JBRXZELElBQUlJLCtCQUErQixNQUFNO29CQUN2Q0ksSUFBQUEsOEJBQW9CLEVBQUNGLHdCQUF3Qk4sTUFBTVg7Z0JBQ3JEO2dCQUVBLElBQUksQ0FBQ29CLFFBQVEsQ0FBQ1Asa0NBQWtDSCxtQkFBbUJWO1lBQ3JFOzs7WUFFQW9CLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTUCxnQ0FBZ0MsRUFBRUgsaUJBQWlCLEVBQUVWLE9BQU87O2dCQUNuRSxJQUFNVyxPQUFPLElBQUksRUFDWGxCLFlBQVksSUFBSSxDQUFDNEIsWUFBWSxJQUM3QkMsY0FBZVQscUNBQXFDLE1BQ3BEVSxnQkFBZ0IsQ0FBQyxHQUNqQjFCLG9CQUFvQkosVUFBVU0sU0FBUyxDQUFDQztnQkFFOUMsSUFBTXdCLFlBQVlDLElBQUFBLHlCQUFlLEVBQUNkLE9BQzVCZSx3QkFBd0JDLElBQUFBLHdCQUFjLEVBQUNILFlBQ3ZDSSwwQkFBMEJDLElBQUFBLGtDQUF3QixFQUFDSCx1QkFBdUIxQjtnQkFFaEY0Qix3QkFBd0JFLE9BQU8sQ0FBQyxTQUFDQztvQkFDL0IsSUFBSUM7b0JBRURBLGFBQWVoQyxRQUFmZ0M7b0JBRUgsSUFBTUMsbUJBQW1CekMsQUEvRFZBLGlCQStEMkIwQywwQ0FBMEMsQ0FBQ0gsb0JBQW9CbEM7b0JBRXpHb0MsaUJBQWlCRSxnQkFBZ0IsQ0FBQ1osZUFBZXZCO29CQUVqRCxJQUFJc0IsYUFBYTt3QkFDZixJQUFNYywwQkFBMEJDLG9CQUF1QixDQUFDQyxjQUFjLENBQUNOO3dCQUV2RUksd0JBQXdCRyx3QkFBd0IsQ0FBQ047d0JBRWpELE1BQUs3QixpQkFBaUIsQ0FBQyxTQUFDSTs0QkFDdEIsSUFBTWdDLDJCQUEyQkMsb0JBQXdCLENBQUNILGNBQWMsQ0FBQ04sYUFDbkVVLFdBQVdsQyxlQUFnQixHQUFHOzRCQUVwQ2dDLHlCQUF5QkcsZ0JBQWdCLENBQUNEO3dCQUM1QztvQkFDRjtvQkFFQWhDLGtCQUFrQmtDLElBQUksQ0FBQ1g7b0JBRXZCRDtvQkFFQWEsT0FBT0MsTUFBTSxDQUFDOUMsU0FBUzt3QkFDckJnQyxZQUFBQTtvQkFDRjtnQkFDRjtZQUNGOzs7WUFFQUEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1BLGFBQWEsSUFBSSxDQUFDZSxzQkFBc0IsQ0FBQyxTQUFDQztvQkFDOUMsSUFBSWhCLGFBQWE7b0JBRWpCLElBQU1pQix1Q0FBd0NELEFBQWtCLFlBQWxCQSxvQkFBOEJFLG1CQUFrQjtvQkFFOUYsSUFBSUQsc0NBQXNDO3dCQUN4QyxJQUFNRSxxQkFBcUJILG9CQUFxQixHQUFHO3dCQUVuRGhCLGFBQWFtQixtQkFBbUJDLGFBQWE7b0JBQy9DO29CQUVBLE9BQU9wQjtnQkFDVDtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQlosYUFBYSxFQUFFdkIsT0FBTztnQkFDckMsSUFBSXFELDZCQUE2QjtnQkFFakMsSUFBTTFDLE9BQU8sSUFBSSxFQUNYTSx5QkFBeUJDLElBQUFBLGlDQUF1QixFQUFDUCxPQUNqRDJDLCtCQUErQnJDLHVCQUF1QnNDLE1BQU07Z0JBRWxFLElBQUlELCtCQUErQixHQUFHO29CQUNwQyxJQUFNckIsbUJBQW1CdEIsTUFDbkI2QyxRQUFRQyxJQUFBQSxxQ0FBMkIsRUFBQ3hDLHdCQUF3Qk0sZUFBZVosTUFBTVgsVUFDakYwRCxxQkFBcUJDLElBQUFBLHNEQUE0QyxFQUFDMUMseUJBQ2xFMkMsNkJBQTZCQyxJQUFBQSwwREFBZ0QsRUFBQ0gsb0JBQW9CbkMsZUFBZWlDO29CQUV2SEgsNkJBQTZCUyxrQkFBMEIsQ0FBQ0Msc0NBQXNDLENBQUNQLE9BQU9JO29CQUV0R1AsMkJBQTJCZCx3QkFBd0IsQ0FBQ047Z0JBQ3REO2dCQUVBLE9BQU9vQjtZQUNUOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVcsSUFBSSxDQUFDaEUsV0FBVyxJQUMzQmlFLFNBQVNELFVBQVcsR0FBRztnQkFFN0IsT0FBT0M7WUFDVDs7OztZQU1PQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNdEUsb0JBQW9CLE1BQ3BCb0MsbUJBQW1CbUMsYUFBUSxDQUFDRCxXQUFXLENBOUk1QjNFLGtCQThJK0NLO2dCQUVoRSxPQUFPb0M7WUFDVDs7O1lBRU9vQyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjNUUsU0FBUztnQkFDNUIsSUFBTTZFLHVCQUF1QjdFLFdBQ3ZCSSxvQkFBb0J5RSxxQkFBcUJ4RSxvQkFBb0IsSUFDN0RtQyxtQkFBbUJtQyxhQUFRLENBQUNDLGFBQWEsQ0F0SjlCN0Usa0JBc0ppREMsV0FBV0k7Z0JBRTdFLE9BQU9vQztZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDSCxrQkFBa0IsRUFBRWxDLGlCQUFpQjtnQkFDckYsSUFBTTBFLGlCQUFpQnhDLG9CQUNqQkUsbUJBQW1CbUMsYUFBUSxDQUFDSSxrQkFBa0IsQ0E3Sm5DaEYsa0JBNkpzRCtFLGdCQUFnQjFFO2dCQUV2RixPQUFPb0M7WUFDVDs7O1dBaEttQnpDO0VBQXlCNEUsYUFBUTtBQXdJcEQsaUJBeEltQjVFLGtCQXdJWmlGLFdBQVU7QUFFakIsaUJBMUltQmpGLGtCQTBJWk8sYUFBWSJ9