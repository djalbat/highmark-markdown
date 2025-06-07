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
var _necessary = require("necessary");
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
var _pageNumber = /*#__PURE__*/ _interop_require_default(require("../../node/html/pageNumber"));
var _pageNumber1 = /*#__PURE__*/ _interop_require_default(require("../../transform/html/pageNumber"));
var _indexAnchor = /*#__PURE__*/ _interop_require_default(require("../../transform/html/indexAnchor"));
var _footnote = /*#__PURE__*/ _interop_require_default(require("../../transform/html/item/footnote"));
var _footnotes = /*#__PURE__*/ _interop_require_default(require("../../transform/html/list/footnotes"));
var _markdown = require("../../ruleNames/markdown");
var _division = require("../../utilities/division");
var _html1 = require("../../utilities/html");
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
var extract = _necessary.arrayUtilities.extract;
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
            key: "paginate",
            value: function paginate(divisionHTMLNodes, context) {
                var node = this, footnotesDirectiveHTMLNode = (0, _html1.footnotesDirectiveHTMLNodeFromNode)(node), pageNumberDirectiveHTMLNode = (0, _html1.pageNumberDirectiveHTMLNodeFromNode)(node);
                var htmlNodes = (0, _division.removeHTMLNodes)(node), groupedHTMLNodesArray = (0, _division.groupHTMLNodes)(htmlNodes), paginatedHTMLNodesArray = (0, _division.paginateGroupedHTMLNodes)(groupedHTMLNodesArray, context);
                var start = 0, outerNode = this.getOuterNode(), divisionClassName = outerNode.className(context);
                Object.assign(context, {
                    start: start
                });
                paginatedHTMLNodesArray.forEach(function(paginatedHTMLNodes) {
                    var pageNumber;
                    pageNumber = context.pageNumber;
                    var divisionHTMLNode = DivisionHTMLNode.fromPaginatedHTMLNodesAndDivisionClassName(paginatedHTMLNodes, divisionClassName);
                    if (footnotesDirectiveHTMLNode !== null) {
                        divisionHTMLNode.resolveFootnotes(context);
                    }
                    if (pageNumberDirectiveHTMLNode !== null) {
                        divisionHTMLNode.resolvePageNumber(pageNumber, context);
                    }
                    divisionHTMLNodes.push(divisionHTMLNode);
                    pageNumber++;
                    Object.assign(context, {
                        pageNumber: pageNumber
                    });
                });
                delete context.start;
            }
        },
        {
            key: "resolveFootnotes",
            value: function resolveFootnotes(context) {
                var start;
                var node = this, footnoteHTMLNodes = (0, _html1.footnotesHTMLNodesFromNode)(node), footnoteLinkHTMLNodes = (0, _html1.footnoteLinkHTMLNodesFromNode)(node);
                start = context.start;
                var footnoteItemHTMLTransforms = [];
                var number = start; ///
                footnoteLinkHTMLNodes.forEach(function(footnoteLinkHTMLNode) {
                    var identifier = footnoteLinkHTMLNode.identifier(context), footnoteHTMLNode = extract(footnoteHTMLNodes, function(footnoteHTMLNode) {
                        var identifierMatches = footnoteHTMLNode.matchIdentifier(identifier);
                        if (identifierMatches) {
                            return true;
                        }
                    }) || null;
                    if (footnoteHTMLNode !== null) {
                        footnoteLinkHTMLNode.setNumber(number);
                        var paragraphHTMLNode = footnoteHTMLNode.getParagraphHTMLNode(), footnoteItemHTMLTransform = _footnote.default.fromParagraphHTMLNOdeAndIdentifier(paragraphHTMLNode, identifier);
                        footnoteItemHTMLTransforms.push(footnoteItemHTMLTransform);
                        number++;
                    } else {
                        footnoteLinkHTMLNode.resetNumber();
                    }
                });
                var footnoteItemHTMLTransformsLength = footnoteItemHTMLTransforms.length;
                if (footnoteItemHTMLTransformsLength > 0) {
                    var divisionHTMLNode = node, footnotesListHTMLTransform = _footnotes.default.fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms);
                    footnotesListHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
                }
                start = number; ///
                Object.assign(context, {
                    start: start
                });
            }
        },
        {
            key: "resolvePageNumber",
            value: function resolvePageNumber(pageNumber, context) {
                var divisionHTMLNode = this, pageNumberHTMLTransform = _pageNumber1.default.fromPageNumber(pageNumber);
                pageNumberHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
                this.fromFirstChildNode(function(firstChildNode) {
                    var indexAnchorHTMLTransform = _indexAnchor.default.fromPageNumber(pageNumber), htmlNode = firstChildNode; ///
                    indexAnchorHTMLTransform.appendToHTMLNode(htmlNode);
                });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuaW1wb3J0IFBhZ2VOdW1iZXJIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sL3BhZ2VOdW1iZXJcIjtcbmltcG9ydCBQYWdlTnVtYmVySFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvcGFnZU51bWJlclwiO1xuaW1wb3J0IEluZGV4QW5jaG9ySFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvaW5kZXhBbmNob3JcIjtcbmltcG9ydCBGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9pdGVtL2Zvb3Rub3RlXCI7XG5pbXBvcnQgRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2xpc3QvZm9vdG5vdGVzXCI7XG5cbmltcG9ydCB7IERJVklTSU9OX01BUktET1dOX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXMvbWFya2Rvd25cIjtcbmltcG9ydCB7IGdyb3VwSFRNTE5vZGVzLCByZW1vdmVIVE1MTm9kZXMsIHBhZ2luYXRlR3JvdXBlZEhUTUxOb2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZGl2aXNpb25cIjtcbmltcG9ydCB7IGZvb3Rub3Rlc0hUTUxOb2Rlc0Zyb21Ob2RlLFxuICAgICAgICAgZm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUsXG4gICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlLFxuICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2h0bWxcIjtcblxuY29uc3QgeyBleHRyYWN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25IVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgY29uc3RydWN0b3Iob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50LCBkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHN1cGVyKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgcnVsZU5tZSA9IERJVklTSU9OX01BUktET1dOX1JVTEVfTkFNRTtcblxuICAgIHJldHVybiBydWxlTm1lO1xuICB9XG5cbiAgcGFnZU51bWJlcigpIHtcbiAgICBjb25zdCBwYWdlTnVtYmVyID0gdGhpcy5mcm9tRmlyc3RMYXN0Q2hpbGROb2RlKChmaXJzdExhc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGxldCBwYWdlTnVtYmVyID0gbnVsbDtcblxuICAgICAgY29uc3QgZmlyc3RMYXN0Q2hpbGROb2RlUGFnZU51bWJlckhUTUxOb2RlID0gKGZpcnN0TGFzdENoaWxkTm9kZSBpbnN0YW5jZW9mIFBhZ2VOdW1iZXJIVE1MTm9kZSk7XG5cbiAgICAgIGlmIChmaXJzdExhc3RDaGlsZE5vZGVQYWdlTnVtYmVySFRNTE5vZGUpIHtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlckhUTUxOb2RlID0gZmlyc3RMYXN0Q2hpbGROb2RlOyAgLy8vXG5cbiAgICAgICAgcGFnZU51bWJlciA9IHBhZ2VOdW1iZXJIVE1MTm9kZS5nZXRQYWdlTnVtYmVyKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYWdlTnVtYmVyO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhZ2VOdW1iZXI7XG4gIH1cblxuICBwYWdpbmF0ZShkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLFxuICAgICAgICAgIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlID0gZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUgPSBwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgIGNvbnN0IGh0bWxOb2RlcyA9IHJlbW92ZUhUTUxOb2Rlcyhub2RlKSxcbiAgICAgICAgICBncm91cGVkSFRNTE5vZGVzQXJyYXkgPSBncm91cEhUTUxOb2RlcyhodG1sTm9kZXMpLFxuICAgICAgICAgIHBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5ID0gcGFnaW5hdGVHcm91cGVkSFRNTE5vZGVzKGdyb3VwZWRIVE1MTm9kZXNBcnJheSwgY29udGV4dCk7XG5cbiAgICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgICAgb3V0ZXJOb2RlID0gdGhpcy5nZXRPdXRlck5vZGUoKSxcbiAgICAgICAgICBkaXZpc2lvbkNsYXNzTmFtZSA9IG91dGVyTm9kZS5jbGFzc05hbWUoY29udGV4dCk7XG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHN0YXJ0XG4gICAgfSk7XG5cbiAgICBwYWdpbmF0ZWRIVE1MTm9kZXNBcnJheS5mb3JFYWNoKChwYWdpbmF0ZWRIVE1MTm9kZXMpID0+IHtcbiAgICAgIGxldCBwYWdlTnVtYmVyO1xuXG4gICAgICAoeyBwYWdlTnVtYmVyIH0gPSBjb250ZXh0KTtcblxuICAgICAgY29uc3QgZGl2aXNpb25IVE1MTm9kZSA9IERpdmlzaW9uSFRNTE5vZGUuZnJvbVBhZ2luYXRlZEhUTUxOb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2luYXRlZEhUTUxOb2RlcywgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgICBpZiAoZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgZGl2aXNpb25IVE1MTm9kZS5yZXNvbHZlRm9vdG5vdGVzKGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGRpdmlzaW9uSFRNTE5vZGUucmVzb2x2ZVBhZ2VOdW1iZXIocGFnZU51bWJlciwgY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGRpdmlzaW9uSFRNTE5vZGVzLnB1c2goZGl2aXNpb25IVE1MTm9kZSk7XG5cbiAgICAgIHBhZ2VOdW1iZXIrKztcblxuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIHBhZ2VOdW1iZXJcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZGVsZXRlIGNvbnRleHQuc3RhcnQ7XG4gIH1cblxuICByZXNvbHZlRm9vdG5vdGVzKGNvbnRleHQpIHtcbiAgICBsZXQgc3RhcnQ7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3RlSFRNTE5vZGVzID0gZm9vdG5vdGVzSFRNTE5vZGVzRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgZm9vdG5vdGVMaW5rSFRNTE5vZGVzID0gZm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICAoeyBzdGFydCB9ID0gY29udGV4dCk7XG5cbiAgICBjb25zdCBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyA9IFtdO1xuXG4gICAgbGV0IG51bWJlciA9IHN0YXJ0OyAvLy9cblxuICAgIGZvb3Rub3RlTGlua0hUTUxOb2Rlcy5mb3JFYWNoKChmb290bm90ZUxpbmtIVE1MTm9kZSkgPT4ge1xuICAgICAgY29uc3QgaWRlbnRpZmllciA9IGZvb3Rub3RlTGlua0hUTUxOb2RlLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgICBmb290bm90ZUhUTUxOb2RlID0gZXh0cmFjdChmb290bm90ZUhUTUxOb2RlcywgKGZvb3Rub3RlSFRNTE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaWRlbnRpZmllck1hdGNoZXMgPSBmb290bm90ZUhUTUxOb2RlLm1hdGNoSWRlbnRpZmllcihpZGVudGlmaWVyKTtcblxuICAgICAgICAgICAgICBpZiAoaWRlbnRpZmllck1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKGZvb3Rub3RlSFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgZm9vdG5vdGVMaW5rSFRNTE5vZGUuc2V0TnVtYmVyKG51bWJlcik7XG5cbiAgICAgICAgY29uc3QgcGFyYWdyYXBoSFRNTE5vZGUgPSBmb290bm90ZUhUTUxOb2RlLmdldFBhcmFncmFwaEhUTUxOb2RlKCksXG4gICAgICAgICAgICAgIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0gPSBGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtLmZyb21QYXJhZ3JhcGhIVE1MTk9kZUFuZElkZW50aWZpZXIocGFyYWdyYXBoSFRNTE5vZGUsIGlkZW50aWZpZXIpXG5cbiAgICAgICAgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMucHVzaChmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtKTtcblxuICAgICAgICBudW1iZXIrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvb3Rub3RlTGlua0hUTUxOb2RlLnJlc2V0TnVtYmVyKClcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zTGVuZ3RoID0gZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMubGVuZ3RoO1xuXG4gICAgaWYgKGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZGl2aXNpb25IVE1MTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIGZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtID0gRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0uZnJvbVN0YXJ0QW5kRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMoc3RhcnQsIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zKTtcblxuICAgICAgZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0uYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlKGRpdmlzaW9uSFRNTE5vZGUpO1xuICAgIH1cblxuICAgIHN0YXJ0ID0gbnVtYmVyOyAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgc3RhcnRcbiAgICB9KTtcbiAgfVxuXG4gIHJlc29sdmVQYWdlTnVtYmVyKHBhZ2VOdW1iZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbkhUTUxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtID0gUGFnZU51bWJlckhUTUxUcmFuc2Zvcm0uZnJvbVBhZ2VOdW1iZXIocGFnZU51bWJlcik7XG5cbiAgICBwYWdlTnVtYmVySFRNTFRyYW5zZm9ybS5hcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSk7XG5cbiAgICB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4QW5jaG9ySFRNTFRyYW5zZm9ybSA9IEluZGV4QW5jaG9ySFRNTFRyYW5zZm9ybS5mcm9tUGFnZU51bWJlcihwYWdlTnVtYmVyKSxcbiAgICAgICAgICAgIGh0bWxOb2RlID0gZmlyc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgICAgaW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtLmFwcGVuZFRvSFRNTE5vZGUoaHRtbE5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gcnVsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGRpdmlzaW9uQ2xhc3NOYW1lID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU5vdGhpbmcoRGl2aXNpb25IVE1MTm9kZSwgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IG91dGVyTm9kZSwgLy8vXG4gICAgICAgICAgZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZS5nZXREaXZpc2lvbkNsYXNzTmFtZSgpLFxuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKERpdmlzaW9uSFRNTE5vZGUsIG91dGVyTm9kZSwgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhZ2luYXRlZEhUTUxOb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2luYXRlZEhUTUxOb2RlcywgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBjb25zdCBjaGlsZEhUTUxOb2RlcyA9IHBhZ2luYXRlZEhUTUxOb2RlcywgIC8vL1xuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tQ2hpbGRIVE1MTm9kZXMoRGl2aXNpb25IVE1MTm9kZSwgY2hpbGRIVE1MTm9kZXMsIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGl2aXNpb25IVE1MTm9kZSIsImV4dHJhY3QiLCJhcnJheVV0aWxpdGllcyIsIm91dGVyTm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZG9tRWxlbWVudCIsImRpdmlzaW9uQ2xhc3NOYW1lIiwiZ2V0RGl2aXNpb25DbGFzc05hbWUiLCJjbGFzc05hbWUiLCJjb250ZXh0IiwiZ2V0UnVsZU5hbWUiLCJydWxlTm1lIiwiRElWSVNJT05fTUFSS0RPV05fUlVMRV9OQU1FIiwicGFnZU51bWJlciIsImZyb21GaXJzdExhc3RDaGlsZE5vZGUiLCJmaXJzdExhc3RDaGlsZE5vZGUiLCJmaXJzdExhc3RDaGlsZE5vZGVQYWdlTnVtYmVySFRNTE5vZGUiLCJQYWdlTnVtYmVySFRNTE5vZGUiLCJwYWdlTnVtYmVySFRNTE5vZGUiLCJnZXRQYWdlTnVtYmVyIiwicGFnaW5hdGUiLCJkaXZpc2lvbkhUTUxOb2RlcyIsIm5vZGUiLCJmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSIsImZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSIsImh0bWxOb2RlcyIsInJlbW92ZUhUTUxOb2RlcyIsImdyb3VwZWRIVE1MTm9kZXNBcnJheSIsImdyb3VwSFRNTE5vZGVzIiwicGFnaW5hdGVkSFRNTE5vZGVzQXJyYXkiLCJwYWdpbmF0ZUdyb3VwZWRIVE1MTm9kZXMiLCJzdGFydCIsImdldE91dGVyTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwYWdpbmF0ZWRIVE1MTm9kZXMiLCJkaXZpc2lvbkhUTUxOb2RlIiwiZnJvbVBhZ2luYXRlZEhUTUxOb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lIiwicmVzb2x2ZUZvb3Rub3RlcyIsInJlc29sdmVQYWdlTnVtYmVyIiwicHVzaCIsImZvb3Rub3RlSFRNTE5vZGVzIiwiZm9vdG5vdGVzSFRNTE5vZGVzRnJvbU5vZGUiLCJmb290bm90ZUxpbmtIVE1MTm9kZXMiLCJmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZSIsImZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zIiwibnVtYmVyIiwiZm9vdG5vdGVMaW5rSFRNTE5vZGUiLCJpZGVudGlmaWVyIiwiZm9vdG5vdGVIVE1MTm9kZSIsImlkZW50aWZpZXJNYXRjaGVzIiwibWF0Y2hJZGVudGlmaWVyIiwic2V0TnVtYmVyIiwicGFyYWdyYXBoSFRNTE5vZGUiLCJnZXRQYXJhZ3JhcGhIVE1MTm9kZSIsImZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0iLCJGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtIiwiZnJvbVBhcmFncmFwaEhUTUxOT2RlQW5kSWRlbnRpZmllciIsInJlc2V0TnVtYmVyIiwiZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXNMZW5ndGgiLCJsZW5ndGgiLCJmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSIsIkZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIiwiZnJvbVN0YXJ0QW5kRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMiLCJhcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUiLCJwYWdlTnVtYmVySFRNTFRyYW5zZm9ybSIsIlBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtIiwiZnJvbVBhZ2VOdW1iZXIiLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsImluZGV4QW5jaG9ySFRNTFRyYW5zZm9ybSIsIkluZGV4QW5jaG9ySFRNTFRyYW5zZm9ybSIsImh0bWxOb2RlIiwiYXBwZW5kVG9IVE1MTm9kZSIsImFzU3RyaW5nIiwicnVsZU5hbWUiLCJzdHJpbmciLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY2hpbGRIVE1MTm9kZXMiLCJmcm9tQ2hpbGRIVE1MTm9kZXMiLCJ0YWdOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQW9CcUJBOzs7eUJBbEJVOzJEQUVWO2lFQUNVO2tFQUNLO2tFQUNDOytEQUNDO2dFQUNDO3dCQUVLO3dCQUM4QjtxQkFJdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRCxJQUFNLEFBQUVDLFVBQVlDLHlCQUFjLENBQTFCRDtBQUVPLElBQUEsQUFBTUQsaUNBQU47Y0FBTUE7YUFBQUEsaUJBQ1BHLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsaUJBQWlCO2dDQUR6RFA7O2dCQUVqQixrQkFGaUJBO1lBRVhHO1lBQVdDO1lBQVlDO1lBQVlDOztRQUV6QyxNQUFLQyxpQkFBaUIsR0FBR0E7OztrQkFKUlA7O1lBT25CUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELGlCQUFpQjtZQUMvQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxPQUFPO2dCQUNmLElBQU1ELFlBQVksSUFBSSxDQUFDRixpQkFBaUIsRUFBRSxHQUFHO2dCQUU3QyxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFVBQVVDLHFDQUEyQjtnQkFFM0MsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQSxhQUFhLElBQUksQ0FBQ0Msc0JBQXNCLENBQUMsU0FBQ0M7b0JB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