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
                var _this = this;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5pbXBvcnQgUGFnZU51bWJlckhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWwvcGFnZU51bWJlclwiO1xuaW1wb3J0IFBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9wYWdlTnVtYmVyXCI7XG5pbXBvcnQgSW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9pbmRleEFuY2hvclwiO1xuaW1wb3J0IEZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9saXN0L2Zvb3Rub3Rlc1wiO1xuXG5pbXBvcnQgeyBESVZJU0lPTl9NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5pbXBvcnQgeyBncm91cEhUTUxOb2RlcyxcbiAgICAgICAgIHJlbW92ZUhUTUxOb2RlcyxcbiAgICAgICAgIGFkZEZvb3Rub3RlSFRNTE5vZGVzLFxuICAgICAgICAgcmVtb3ZlRm9vdG5vdGVIVE1MTm9kZXMsXG4gICAgICAgICBwYWdpbmF0ZUdyb3VwZWRIVE1MTm9kZXMsXG4gICAgICAgICBudW1iZXJGb290bm90ZUxpbmtIVE1MTm9kZXMsXG4gICAgICAgICByZW1vdmVGb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSxcbiAgICAgICAgIHJlbW92ZVBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZSxcbiAgICAgICAgIHJlbW92ZU5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2RlcyxcbiAgICAgICAgIGxpbmVIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUhUTUxUcmFuc2Zvcm1zLFxuICAgICAgICAgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXNGcm9tTGluZUhUTUxUcmFuc2Zvcm1zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kaXZpc2lvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpc2lvbkhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBjb25zdHJ1Y3RvcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQsIGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgc3VwZXIob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldERpdmlzaW9uQ2xhc3NOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lOyAvLy9cblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTm1lID0gRElWSVNJT05fTUFSS0RPV05fUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVObWU7XG4gIH1cblxuICBmcm9tRmlyc3RIVE1MTm9kZShjYWxsYmFjaykge1xuICAgIHRoaXMuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgZmlyc3RIVE1MTm9kZSA9IGZpcnN0Q2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIGNhbGxiYWNrKGZpcnN0SFRNTE5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzb2x2ZShkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzO1xuXG4gICAgcmVtb3ZlTmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzKG5vZGUpO1xuXG4gICAgY29uc3QgcGFnZU51bWJlckRpcmVjdGl2ZUhUTkxUcmFuc2Zvcm0gPSByZW1vdmVQYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUobm9kZSksXG4gICAgICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgPSByZW1vdmVGb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zID0gcmVtb3ZlRm9vdG5vdGVIVE1MTm9kZXMobm9kZSk7XG5cbiAgICBpZiAoZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGFkZEZvb3Rub3RlSFRNTE5vZGVzKGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMsIG5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHRoaXMucGFnaW5hdGUocGFnZU51bWJlckRpcmVjdGl2ZUhUTkxUcmFuc2Zvcm0sIGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KTtcbiAgfVxuXG4gIHBhZ2luYXRlKHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE5MVHJhbnNmb3JtLCBkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgb3V0ZXJOb2RlID0gdGhpcy5nZXRPdXRlck5vZGUoKSxcbiAgICAgICAgICBwYWdlTnVtYmVycyA9IChwYWdlTnVtYmVyRGlyZWN0aXZlSFROTFRyYW5zZm9ybSAhPT0gbnVsbCksXG4gICAgICAgICAgaWRlbnRpZmllck1hcCA9IHt9LFxuICAgICAgICAgIGRpdmlzaW9uQ2xhc3NOYW1lID0gb3V0ZXJOb2RlLmNsYXNzTmFtZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGh0bWxOb2RlcyA9IHJlbW92ZUhUTUxOb2Rlcyhub2RlKSxcbiAgICAgICAgICBncm91cGVkSFRNTE5vZGVzQXJyYXkgPSBncm91cEhUTUxOb2RlcyhodG1sTm9kZXMpLFxuICAgICAgICAgIHBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5ID0gcGFnaW5hdGVHcm91cGVkSFRNTE5vZGVzKGdyb3VwZWRIVE1MTm9kZXNBcnJheSwgY29udGV4dCk7XG5cbiAgICBwYWdpbmF0ZWRIVE1MTm9kZXNBcnJheS5mb3JFYWNoKChwYWdpbmF0ZWRIVE1MTm9kZXMpID0+IHtcbiAgICAgIGxldCBwYWdlTnVtYmVyO1xuXG4gICAgICAoeyBwYWdlTnVtYmVyIH0gPSBjb250ZXh0KTtcblxuICAgICAgY29uc3QgZGl2aXNpb25IVE1MTm9kZSA9IERpdmlzaW9uSFRNTE5vZGUuZnJvbVBhZ2luYXRlZEhUTUxOb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2luYXRlZEhUTUxOb2RlcywgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgICBkaXZpc2lvbkhUTUxOb2RlLnJlc29sdmVGb290bm90ZXMoaWRlbnRpZmllck1hcCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChwYWdlTnVtYmVycykge1xuICAgICAgICBjb25zdCBwYWdlTnVtYmVySFRNTFRyYW5zZm9ybSA9IFBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtLmZyb21QYWdlTnVtYmVyKHBhZ2VOdW1iZXIpO1xuXG4gICAgICAgIHBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtLmFwcGVuZFRvRGl2aXNpb25IVE1MTm9kZShkaXZpc2lvbkhUTUxOb2RlKTtcblxuICAgICAgICB0aGlzLmZyb21GaXJzdEhUTUxOb2RlKChmaXJzdEhUTUxOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtID0gSW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtLmZyb21QYWdlTnVtYmVyKHBhZ2VOdW1iZXIpLFxuICAgICAgICAgICAgICAgIGh0bWxOb2RlID0gZmlyc3RIVE1MTm9kZTsgIC8vL1xuXG4gICAgICAgICAgaW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtLmFwcGVuZFRvSFRNTE5vZGUoaHRtbE5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZGl2aXNpb25IVE1MTm9kZXMucHVzaChkaXZpc2lvbkhUTUxOb2RlKTtcblxuICAgICAgcGFnZU51bWJlcisrO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgcGFnZU51bWJlclxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwYWdlTnVtYmVyKCkge1xuICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSB0aGlzLmZyb21GaXJzdExhc3RDaGlsZE5vZGUoKGZpcnN0TGFzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgbGV0IHBhZ2VOdW1iZXIgPSBudWxsO1xuXG4gICAgICBjb25zdCBmaXJzdExhc3RDaGlsZE5vZGVQYWdlTnVtYmVySFRNTE5vZGUgPSAoZmlyc3RMYXN0Q2hpbGROb2RlIGluc3RhbmNlb2YgUGFnZU51bWJlckhUTUxOb2RlKTtcblxuICAgICAgaWYgKGZpcnN0TGFzdENoaWxkTm9kZVBhZ2VOdW1iZXJIVE1MTm9kZSkge1xuICAgICAgICBjb25zdCBwYWdlTnVtYmVySFRNTE5vZGUgPSBmaXJzdExhc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgICAgICBwYWdlTnVtYmVyID0gcGFnZU51bWJlckhUTUxOb2RlLmdldFBhZ2VOdW1iZXIoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhZ2VOdW1iZXI7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFnZU51bWJlcjtcbiAgfVxuXG4gIHJlc29sdmVGb290bm90ZXMoaWRlbnRpZmllck1hcCwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVIVE1MVHJhbnNmb3JtcyA9IHJlbW92ZUZvb3Rub3RlSFRNTE5vZGVzKG5vZGUpLFxuICAgICAgICAgIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXNMZW5ndGggPSBmb290bm90ZUhUTUxUcmFuc2Zvcm1zLmxlbmd0aDtcblxuICAgIGlmIChmb290bm90ZUhUTUxUcmFuc2Zvcm1zTGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGl2aXNpb25IVE1MTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICBzdGFydCA9IG51bWJlckZvb3Rub3RlTGlua0hUTUxOb2Rlcyhmb290bm90ZUhUTUxUcmFuc2Zvcm1zLCBpZGVudGlmaWVyTWFwLCBub2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBsaW5lSFRNTFRyYW5zZm9ybXMgPSBsaW5lSFRNTFRyYW5zZm9ybXNGcm9tRm9vdG5vdGVIVE1MVHJhbnNmb3Jtcyhmb290bm90ZUhUTUxUcmFuc2Zvcm1zKSxcbiAgICAgICAgICBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyA9IGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zRnJvbUxpbmVIVE1MVHJhbnNmb3JtcyhsaW5lSFRNTFRyYW5zZm9ybXMsIGlkZW50aWZpZXJNYXAsIHN0YXJ0KSxcbiAgICAgICAgICBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSA9IEZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtLmZyb21TdGFydEFuZEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zKHN0YXJ0LCBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtcyk7XG5cbiAgICBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybS5hcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSk7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgZGl2aXNpb25DbGFzc05hbWUgPSBudWxsLFxuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tTm90aGluZyhEaXZpc2lvbkhUTUxOb2RlLCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkge1xuICAgIGNvbnN0IGRpdmlzaW9uQ2xhc3NOYW1lID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShEaXZpc2lvbkhUTUxOb2RlLCBvdXRlck5vZGUsIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYWdpbmF0ZWRIVE1MTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZShwYWdpbmF0ZWRIVE1MTm9kZXMsIGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHBhZ2luYXRlZEhUTUxOb2RlcywgIC8vL1xuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tQ2hpbGROb2RlcyhEaXZpc2lvbkhUTUxOb2RlLCBjaGlsZE5vZGVzLCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRpdmlzaW9uSFRNTE5vZGUiLCJvdXRlck5vZGUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsImRvbUVsZW1lbnQiLCJkaXZpc2lvbkNsYXNzTmFtZSIsImdldERpdmlzaW9uQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsImdldFJ1bGVOYW1lIiwicnVsZU5tZSIsIkRJVklTSU9OX01BUktET1dOX1JVTEVfTkFNRSIsImZyb21GaXJzdEhUTUxOb2RlIiwiY2FsbGJhY2siLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0SFRNTE5vZGUiLCJyZXNvbHZlIiwiZGl2aXNpb25IVE1MTm9kZXMiLCJub2RlIiwicmVtb3ZlTmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzIiwicGFnZU51bWJlckRpcmVjdGl2ZUhUTkxUcmFuc2Zvcm0iLCJyZW1vdmVQYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUiLCJmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSIsInJlbW92ZUZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3JtcyIsInJlbW92ZUZvb3Rub3RlSFRNTE5vZGVzIiwiYWRkRm9vdG5vdGVIVE1MTm9kZXMiLCJwYWdpbmF0ZSIsImdldE91dGVyTm9kZSIsInBhZ2VOdW1iZXJzIiwiaWRlbnRpZmllck1hcCIsImh0bWxOb2RlcyIsInJlbW92ZUhUTUxOb2RlcyIsImdyb3VwZWRIVE1MTm9kZXNBcnJheSIsImdyb3VwSFRNTE5vZGVzIiwicGFnaW5hdGVkSFRNTE5vZGVzQXJyYXkiLCJwYWdpbmF0ZUdyb3VwZWRIVE1MTm9kZXMiLCJmb3JFYWNoIiwicGFnaW5hdGVkSFRNTE5vZGVzIiwicGFnZU51bWJlciIsImRpdmlzaW9uSFRNTE5vZGUiLCJmcm9tUGFnaW5hdGVkSFRNTE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUiLCJyZXNvbHZlRm9vdG5vdGVzIiwicGFnZU51bWJlckhUTUxUcmFuc2Zvcm0iLCJQYWdlTnVtYmVySFRNTFRyYW5zZm9ybSIsImZyb21QYWdlTnVtYmVyIiwiYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlIiwiaW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtIiwiSW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtIiwiaHRtbE5vZGUiLCJhcHBlbmRUb0hUTUxOb2RlIiwicHVzaCIsIk9iamVjdCIsImFzc2lnbiIsImZyb21GaXJzdExhc3RDaGlsZE5vZGUiLCJmaXJzdExhc3RDaGlsZE5vZGUiLCJmaXJzdExhc3RDaGlsZE5vZGVQYWdlTnVtYmVySFRNTE5vZGUiLCJQYWdlTnVtYmVySFRNTE5vZGUiLCJwYWdlTnVtYmVySFRNTE5vZGUiLCJnZXRQYWdlTnVtYmVyIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3Jtc0xlbmd0aCIsImxlbmd0aCIsInN0YXJ0IiwibnVtYmVyRm9vdG5vdGVMaW5rSFRNTE5vZGVzIiwibGluZUhUTUxUcmFuc2Zvcm1zIiwibGluZUhUTUxUcmFuc2Zvcm1zRnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybXMiLCJmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyIsImZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zRnJvbUxpbmVIVE1MVHJhbnNmb3JtcyIsImZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIiwiRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0iLCJmcm9tU3RhcnRBbmRGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyIsImFzU3RyaW5nIiwicnVsZU5hbWUiLCJzdHJpbmciLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsImZyb21DaGlsZE5vZGVzIiwidGFnTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFxQnFCQTs7OzJEQW5CQTtpRUFDVTtrRUFDSztrRUFDQztnRUFDRTt3QkFFSzt3QkFXcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRCxJQUFBLEFBQU1BLGlDQUFOO2NBQU1BO2FBQUFBLGlCQUNQQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLGlCQUFpQjtnQ0FEekRMOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFXQztZQUFZQztZQUFZQzs7UUFFekMsTUFBS0MsaUJBQWlCLEdBQUdBOzs7a0JBSlJMOztZQU9uQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxpQkFBaUI7WUFDL0I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsT0FBTztnQkFDZixJQUFNRCxZQUFZLElBQUksQ0FBQ0YsaUJBQWlCLEVBQUUsR0FBRztnQkFFN0MsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxVQUFVQyxxQ0FBMkI7Z0JBRTNDLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxRQUFRO2dCQUN4QixJQUFJLENBQUNDLGtCQUFrQixDQUFDLFNBQUNDO29CQUN2QixJQUFNQyxnQkFBZ0JELGdCQUFpQixHQUFHO29CQUUxQ0YsU0FBU0c7Z0JBQ1g7WUFDRjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxpQkFBaUIsRUFBRVYsT0FBTztnQkFDaEMsSUFBTVcsT0FBTyxJQUFJO2dCQUVqQkMsSUFBQUEsMkNBQWlDLEVBQUNEO2dCQUVsQyxJQUFNRSxtQ0FBbUNDLElBQUFBLDJDQUFpQyxFQUFDSCxPQUNyRUksNkJBQTZCQyxJQUFBQSwwQ0FBZ0MsRUFBQ0wsT0FDOURNLHlCQUF5QkMsSUFBQUEsaUNBQXVCLEVBQUNQO2dCQUV2RCxJQUFJSSwrQkFBK0IsTUFBTTtvQkFDdkNJLElBQUFBLDhCQUFvQixFQUFDRix3QkFBd0JOLE1BQU1YO2dCQUNyRDtnQkFFQSxJQUFJLENBQUNvQixRQUFRLENBQUNQLGtDQUFrQ0gsbUJBQW1CVjtZQUNyRTs7O1lBRUFvQixLQUFBQTttQkFBQUEsU0FBQUEsU0FBU1AsZ0NBQWdDLEVBQUVILGlCQUFpQixFQUFFVixPQUFPOztnQkFDbkUsSUFBTVcsT0FBTyxJQUFJLEVBQ1hsQixZQUFZLElBQUksQ0FBQzRCLFlBQVksSUFDN0JDLGNBQWVULHFDQUFxQyxNQUNwRFUsZ0JBQWdCLENBQUMsR0FDakIxQixvQkFBb0JKLFVBQVVNLFNBQVMsQ0FBQ0M7Z0JBRTlDLElBQU13QixZQUFZQyxJQUFBQSx5QkFBZSxFQUFDZCxPQUM1QmUsd0JBQXdCQyxJQUFBQSx3QkFBYyxFQUFDSCxZQUN2Q0ksMEJBQTBCQyxJQUFBQSxrQ0FBd0IsRUFBQ0gsdUJBQXVCMUI7Z0JBRWhGNEIsd0JBQXdCRSxPQUFPLENBQUMsU0FBQ0M7b0JBQy9CLElBQUlDO29CQUVEQSxhQUFlaEMsUUFBZmdDO29CQUVILElBQU1DLG1CQUFtQnpDLEFBL0RWQSxpQkErRDJCMEMsMENBQTBDLENBQUNILG9CQUFvQmxDO29CQUV6R29DLGlCQUFpQkUsZ0JBQWdCLENBQUNaLGVBQWV2QjtvQkFFakQsSUFBSXNCLGFBQWE7d0JBQ2YsSUFBTWMsMEJBQTBCQyxvQkFBdUIsQ0FBQ0MsY0FBYyxDQUFDTjt3QkFFdkVJLHdCQUF3Qkcsd0JBQXdCLENBQUNOO3dCQUVqRCxNQUFLN0IsaUJBQWlCLENBQUMsU0FBQ0k7NEJBQ3RCLElBQU1nQywyQkFBMkJDLG9CQUF3QixDQUFDSCxjQUFjLENBQUNOLGFBQ25FVSxXQUFXbEMsZUFBZ0IsR0FBRzs0QkFFcENnQyx5QkFBeUJHLGdCQUFnQixDQUFDRDt3QkFDNUM7b0JBQ0Y7b0JBRUFoQyxrQkFBa0JrQyxJQUFJLENBQUNYO29CQUV2QkQ7b0JBRUFhLE9BQU9DLE1BQU0sQ0FBQzlDLFNBQVM7d0JBQ3JCZ0MsWUFBQUE7b0JBQ0Y7Z0JBQ0Y7WUFDRjs7O1lBRUFBLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQSxhQUFhLElBQUksQ0FBQ2Usc0JBQXNCLENBQUMsU0FBQ0M7b0JBQzlDLElBQUloQixhQUFhO29CQUVqQixJQUFNaUIsdUNBQXdDRCxBQUFrQixZQUFsQkEsb0JBQThCRSxtQkFBa0I7b0JBRTlGLElBQUlELHNDQUFzQzt3QkFDeEMsSUFBTUUscUJBQXFCSCxvQkFBcUIsR0FBRzt3QkFFbkRoQixhQUFhbUIsbUJBQW1CQyxhQUFhO29CQUMvQztvQkFFQSxPQUFPcEI7Z0JBQ1Q7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJaLGFBQWEsRUFBRXZCLE9BQU87Z0JBQ3JDLElBQU1XLE9BQU8sSUFBSSxFQUNYTSx5QkFBeUJDLElBQUFBLGlDQUF1QixFQUFDUCxPQUNqRDBDLCtCQUErQnBDLHVCQUF1QnFDLE1BQU07Z0JBRWxFLElBQUlELGlDQUFpQyxHQUFHO29CQUN0QztnQkFDRjtnQkFFQSxJQUFNcEIsbUJBQW1CdEIsTUFDbkI0QyxRQUFRQyxJQUFBQSxxQ0FBMkIsRUFBQ3ZDLHdCQUF3Qk0sZUFBZVosTUFBTVgsVUFDakZ5RCxxQkFBcUJDLElBQUFBLHNEQUE0QyxFQUFDekMseUJBQ2xFMEMsNkJBQTZCQyxJQUFBQSwwREFBZ0QsRUFBQ0gsb0JBQW9CbEMsZUFBZWdDLFFBQ2pITSw2QkFBNkJDLGtCQUEwQixDQUFDQyxzQ0FBc0MsQ0FBQ1IsT0FBT0k7Z0JBRTVHRSwyQkFBMkJ0Qix3QkFBd0IsQ0FBQ047WUFDdEQ7OztZQUVBK0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVcsSUFBSSxDQUFDaEUsV0FBVyxJQUMzQmlFLFNBQVNELFVBQVcsR0FBRztnQkFFN0IsT0FBT0M7WUFDVDs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNdEUsb0JBQW9CLE1BQ3BCb0MsbUJBQW1CbUMsYUFBUSxDQUFDRCxXQUFXLENBekk1QjNFLGtCQXlJK0NLO2dCQUVoRSxPQUFPb0M7WUFDVDs7O1lBRU9vQyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjNUUsU0FBUztnQkFDNUIsSUFBTUksb0JBQW9CLE1BQ3BCb0MsbUJBQW1CbUMsYUFBUSxDQUFDQyxhQUFhLENBaEo5QjdFLGtCQWdKaURDLFdBQVdJO2dCQUU3RSxPQUFPb0M7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0gsa0JBQWtCLEVBQUVsQyxpQkFBaUI7Z0JBQ3JGLElBQU1GLGFBQWFvQyxvQkFDYkUsbUJBQW1CbUMsYUFBUSxDQUFDRSxjQUFjLENBdkovQjlFLGtCQXVKa0RHLFlBQVlFO2dCQUUvRSxPQUFPb0M7WUFDVDs7O1dBMUptQnpDO0VBQXlCNEUsYUFBUTtBQXFJcEQsaUJBckltQjVFLGtCQXFJWitFLFdBQVUifQ==