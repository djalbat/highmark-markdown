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
                        divisionHTMLNode.resolvePageNumber(pageNumber);
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
                var footnotesListHTMLNode = null;
                var node = this, footnoteHTMLNodes = (0, _html1.footnotesHTMLNodesFromNode)(node), footnoteLinkHTMLNodes = (0, _html1.footnoteLinkHTMLNodesFromNode)(node);
                var start;
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
                    footnotesListHTMLNode = footnotesListHTMLTransform.getFootnotesListHTMLNode();
                }
                start = number; ///
                Object.assign(context, {
                    start: start
                });
                return footnotesListHTMLNode;
            }
        },
        {
            key: "resolvePageNumber",
            value: function resolvePageNumber(pageNumber) {
                var includeIndexAnchor = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var divisionHTMLNode = this, pageNumberHTMLTransform = _pageNumber1.default.fromPageNumber(pageNumber);
                pageNumberHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
                if (includeIndexAnchor) {
                    this.fromFirstChildNode(function(firstChildNode) {
                        var indexAnchorHTMLTransform = _indexAnchor.default.fromPageNumber(pageNumber), htmlNode = firstChildNode; ///
                        indexAnchorHTMLTransform.appendToHTMLNode(htmlNode);
                    });
                }
                var pageNumberHTMLNode = pageNumberHTMLTransform.getPageNumberHTMLNode();
                return pageNumberHTMLNode;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuaW1wb3J0IFBhZ2VOdW1iZXJIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sL3BhZ2VOdW1iZXJcIjtcbmltcG9ydCBQYWdlTnVtYmVySFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvcGFnZU51bWJlclwiO1xuaW1wb3J0IEluZGV4QW5jaG9ySFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvaW5kZXhBbmNob3JcIjtcbmltcG9ydCBGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9pdGVtL2Zvb3Rub3RlXCI7XG5pbXBvcnQgRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2xpc3QvZm9vdG5vdGVzXCI7XG5cbmltcG9ydCB7IERJVklTSU9OX01BUktET1dOX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXMvbWFya2Rvd25cIjtcbmltcG9ydCB7IGdyb3VwSFRNTE5vZGVzLCByZW1vdmVIVE1MTm9kZXMsIHBhZ2luYXRlR3JvdXBlZEhUTUxOb2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZGl2aXNpb25cIjtcbmltcG9ydCB7IGZvb3Rub3Rlc0hUTUxOb2Rlc0Zyb21Ob2RlLFxuICAgICAgICAgZm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUsXG4gICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlLFxuICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2h0bWxcIjtcblxuY29uc3QgeyBleHRyYWN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25IVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgY29uc3RydWN0b3Iob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50LCBkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHN1cGVyKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgcnVsZU5tZSA9IERJVklTSU9OX01BUktET1dOX1JVTEVfTkFNRTtcblxuICAgIHJldHVybiBydWxlTm1lO1xuICB9XG5cbiAgcGFnZU51bWJlcigpIHtcbiAgICBjb25zdCBwYWdlTnVtYmVyID0gdGhpcy5mcm9tRmlyc3RMYXN0Q2hpbGROb2RlKChmaXJzdExhc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGxldCBwYWdlTnVtYmVyID0gbnVsbDtcblxuICAgICAgY29uc3QgZmlyc3RMYXN0Q2hpbGROb2RlUGFnZU51bWJlckhUTUxOb2RlID0gKGZpcnN0TGFzdENoaWxkTm9kZSBpbnN0YW5jZW9mIFBhZ2VOdW1iZXJIVE1MTm9kZSk7XG5cbiAgICAgIGlmIChmaXJzdExhc3RDaGlsZE5vZGVQYWdlTnVtYmVySFRNTE5vZGUpIHtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlckhUTUxOb2RlID0gZmlyc3RMYXN0Q2hpbGROb2RlOyAgLy8vXG5cbiAgICAgICAgcGFnZU51bWJlciA9IHBhZ2VOdW1iZXJIVE1MTm9kZS5nZXRQYWdlTnVtYmVyKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYWdlTnVtYmVyO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhZ2VOdW1iZXI7XG4gIH1cblxuICBwYWdpbmF0ZShkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLFxuICAgICAgICAgIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlID0gZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUgPSBwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgIGNvbnN0IGh0bWxOb2RlcyA9IHJlbW92ZUhUTUxOb2Rlcyhub2RlKSxcbiAgICAgICAgICBncm91cGVkSFRNTE5vZGVzQXJyYXkgPSBncm91cEhUTUxOb2RlcyhodG1sTm9kZXMpLFxuICAgICAgICAgIHBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5ID0gcGFnaW5hdGVHcm91cGVkSFRNTE5vZGVzKGdyb3VwZWRIVE1MTm9kZXNBcnJheSwgY29udGV4dCk7XG5cbiAgICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgICAgb3V0ZXJOb2RlID0gdGhpcy5nZXRPdXRlck5vZGUoKSxcbiAgICAgICAgICBkaXZpc2lvbkNsYXNzTmFtZSA9IG91dGVyTm9kZS5jbGFzc05hbWUoY29udGV4dCk7XG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHN0YXJ0XG4gICAgfSk7XG5cbiAgICBwYWdpbmF0ZWRIVE1MTm9kZXNBcnJheS5mb3JFYWNoKChwYWdpbmF0ZWRIVE1MTm9kZXMpID0+IHtcbiAgICAgIGxldCBwYWdlTnVtYmVyO1xuXG4gICAgICAoeyBwYWdlTnVtYmVyIH0gPSBjb250ZXh0KTtcblxuICAgICAgY29uc3QgZGl2aXNpb25IVE1MTm9kZSA9IERpdmlzaW9uSFRNTE5vZGUuZnJvbVBhZ2luYXRlZEhUTUxOb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2luYXRlZEhUTUxOb2RlcywgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgICBpZiAoZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgZGl2aXNpb25IVE1MTm9kZS5yZXNvbHZlRm9vdG5vdGVzKGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGRpdmlzaW9uSFRNTE5vZGUucmVzb2x2ZVBhZ2VOdW1iZXIocGFnZU51bWJlcik7XG4gICAgICB9XG5cbiAgICAgIGRpdmlzaW9uSFRNTE5vZGVzLnB1c2goZGl2aXNpb25IVE1MTm9kZSk7XG5cbiAgICAgIHBhZ2VOdW1iZXIrKztcblxuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIHBhZ2VOdW1iZXJcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZGVsZXRlIGNvbnRleHQuc3RhcnQ7XG4gIH1cblxuICByZXNvbHZlRm9vdG5vdGVzKGNvbnRleHQpIHtcbiAgICBsZXQgZm9vdG5vdGVzTGlzdEhUTUxOb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVIVE1MTm9kZXMgPSBmb290bm90ZXNIVE1MTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZUxpbmtIVE1MTm9kZXMgPSBmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIGxldCBzdGFydDtcblxuICAgICh7IHN0YXJ0IH0gPSBjb250ZXh0KTtcblxuICAgIGNvbnN0IGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zID0gW107XG5cbiAgICBsZXQgbnVtYmVyID0gc3RhcnQ7IC8vL1xuXG4gICAgZm9vdG5vdGVMaW5rSFRNTE5vZGVzLmZvckVhY2goKGZvb3Rub3RlTGlua0hUTUxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBpZGVudGlmaWVyID0gZm9vdG5vdGVMaW5rSFRNTE5vZGUuaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICAgIGZvb3Rub3RlSFRNTE5vZGUgPSBleHRyYWN0KGZvb3Rub3RlSFRNTE5vZGVzLCAoZm9vdG5vdGVIVE1MTm9kZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyTWF0Y2hlcyA9IGZvb3Rub3RlSFRNTE5vZGUubWF0Y2hJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuXG4gICAgICAgICAgICAgIGlmIChpZGVudGlmaWVyTWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoZm9vdG5vdGVIVE1MTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBmb290bm90ZUxpbmtIVE1MTm9kZS5zZXROdW1iZXIobnVtYmVyKTtcblxuICAgICAgICBjb25zdCBwYXJhZ3JhcGhIVE1MTm9kZSA9IGZvb3Rub3RlSFRNTE5vZGUuZ2V0UGFyYWdyYXBoSFRNTE5vZGUoKSxcbiAgICAgICAgICAgICAgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybSA9IEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0uZnJvbVBhcmFncmFwaEhUTUxOT2RlQW5kSWRlbnRpZmllcihwYXJhZ3JhcGhIVE1MTm9kZSwgaWRlbnRpZmllcilcblxuICAgICAgICBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtcy5wdXNoKGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0pO1xuXG4gICAgICAgIG51bWJlcisrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9vdG5vdGVMaW5rSFRNTE5vZGUucmVzZXROdW1iZXIoKVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXNMZW5ndGggPSBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtcy5sZW5ndGg7XG5cbiAgICBpZiAoZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBkaXZpc2lvbkhUTUxOb2RlID0gbm9kZSxcbiAgICAgICAgICAgIGZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtID0gRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0uZnJvbVN0YXJ0QW5kRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMoc3RhcnQsIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zKTtcblxuICAgICAgZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0uYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlKGRpdmlzaW9uSFRNTE5vZGUpO1xuXG4gICAgICBmb290bm90ZXNMaXN0SFRNTE5vZGUgPSBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybS5nZXRGb290bm90ZXNMaXN0SFRNTE5vZGUoKTtcbiAgICB9XG5cbiAgICBzdGFydCA9IG51bWJlcjsgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHN0YXJ0XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdEhUTUxOb2RlO1xuICB9XG5cbiAgcmVzb2x2ZVBhZ2VOdW1iZXIocGFnZU51bWJlciwgaW5jbHVkZUluZGV4QW5jaG9yID0gdHJ1ZSkge1xuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgcGFnZU51bWJlckhUTUxUcmFuc2Zvcm0gPSBQYWdlTnVtYmVySFRNTFRyYW5zZm9ybS5mcm9tUGFnZU51bWJlcihwYWdlTnVtYmVyKTtcblxuICAgIHBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtLmFwcGVuZFRvRGl2aXNpb25IVE1MTm9kZShkaXZpc2lvbkhUTUxOb2RlKTtcblxuICAgIGlmIChpbmNsdWRlSW5kZXhBbmNob3IpIHtcbiAgICAgIHRoaXMuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleEFuY2hvckhUTUxUcmFuc2Zvcm0gPSBJbmRleEFuY2hvckhUTUxUcmFuc2Zvcm0uZnJvbVBhZ2VOdW1iZXIocGFnZU51bWJlciksXG4gICAgICAgICAgICAgIGh0bWxOb2RlID0gZmlyc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgICAgICBpbmRleEFuY2hvckhUTUxUcmFuc2Zvcm0uYXBwZW5kVG9IVE1MTm9kZShodG1sTm9kZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBwYWdlTnVtYmVySFRNTE5vZGUgPSBwYWdlTnVtYmVySFRNTFRyYW5zZm9ybS5nZXRQYWdlTnVtYmVySFRNTE5vZGUoKTtcblxuICAgIHJldHVybiBwYWdlTnVtYmVySFRNTE5vZGVcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IHJ1bGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBudWxsO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBkaXZpc2lvbkNsYXNzTmFtZSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25IVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21Ob3RoaW5nKERpdmlzaW9uSFRNTE5vZGUsIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBvdXRlck5vZGUsIC8vL1xuICAgICAgICAgIGRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25NYXJrZG93bk5vZGUuZ2V0RGl2aXNpb25DbGFzc05hbWUoKSxcbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShEaXZpc2lvbkhUTUxOb2RlLCBvdXRlck5vZGUsIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYWdpbmF0ZWRIVE1MTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZShwYWdpbmF0ZWRIVE1MTm9kZXMsIGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgY29uc3QgY2hpbGRIVE1MTm9kZXMgPSBwYWdpbmF0ZWRIVE1MTm9kZXMsICAvLy9cbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbUNoaWxkSFRNTE5vZGVzKERpdmlzaW9uSFRNTE5vZGUsIGNoaWxkSFRNTE5vZGVzLCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRpdmlzaW9uSFRNTE5vZGUiLCJleHRyYWN0IiwiYXJyYXlVdGlsaXRpZXMiLCJvdXRlck5vZGUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsImRvbUVsZW1lbnQiLCJkaXZpc2lvbkNsYXNzTmFtZSIsImdldERpdmlzaW9uQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsImdldFJ1bGVOYW1lIiwicnVsZU5tZSIsIkRJVklTSU9OX01BUktET1dOX1JVTEVfTkFNRSIsInBhZ2VOdW1iZXIiLCJmcm9tRmlyc3RMYXN0Q2hpbGROb2RlIiwiZmlyc3RMYXN0Q2hpbGROb2RlIiwiZmlyc3RMYXN0Q2hpbGROb2RlUGFnZU51bWJlckhUTUxOb2RlIiwiUGFnZU51bWJlckhUTUxOb2RlIiwicGFnZU51bWJlckhUTUxOb2RlIiwiZ2V0UGFnZU51bWJlciIsInBhZ2luYXRlIiwiZGl2aXNpb25IVE1MTm9kZXMiLCJub2RlIiwiZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUiLCJmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIiwicGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlIiwicGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUiLCJodG1sTm9kZXMiLCJyZW1vdmVIVE1MTm9kZXMiLCJncm91cGVkSFRNTE5vZGVzQXJyYXkiLCJncm91cEhUTUxOb2RlcyIsInBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5IiwicGFnaW5hdGVHcm91cGVkSFRNTE5vZGVzIiwic3RhcnQiLCJnZXRPdXRlck5vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJmb3JFYWNoIiwicGFnaW5hdGVkSFRNTE5vZGVzIiwiZGl2aXNpb25IVE1MTm9kZSIsImZyb21QYWdpbmF0ZWRIVE1MTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZSIsInJlc29sdmVGb290bm90ZXMiLCJyZXNvbHZlUGFnZU51bWJlciIsInB1c2giLCJmb290bm90ZXNMaXN0SFRNTE5vZGUiLCJmb290bm90ZUhUTUxOb2RlcyIsImZvb3Rub3Rlc0hUTUxOb2Rlc0Zyb21Ob2RlIiwiZm9vdG5vdGVMaW5rSFRNTE5vZGVzIiwiZm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUiLCJmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyIsIm51bWJlciIsImZvb3Rub3RlTGlua0hUTUxOb2RlIiwiaWRlbnRpZmllciIsImZvb3Rub3RlSFRNTE5vZGUiLCJpZGVudGlmaWVyTWF0Y2hlcyIsIm1hdGNoSWRlbnRpZmllciIsInNldE51bWJlciIsInBhcmFncmFwaEhUTUxOb2RlIiwiZ2V0UGFyYWdyYXBoSFRNTE5vZGUiLCJmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtIiwiRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybSIsImZyb21QYXJhZ3JhcGhIVE1MTk9kZUFuZElkZW50aWZpZXIiLCJyZXNldE51bWJlciIsImZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zTGVuZ3RoIiwibGVuZ3RoIiwiZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0iLCJGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSIsImZyb21TdGFydEFuZEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zIiwiYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlIiwiZ2V0Rm9vdG5vdGVzTGlzdEhUTUxOb2RlIiwiaW5jbHVkZUluZGV4QW5jaG9yIiwicGFnZU51bWJlckhUTUxUcmFuc2Zvcm0iLCJQYWdlTnVtYmVySFRNTFRyYW5zZm9ybSIsImZyb21QYWdlTnVtYmVyIiwiZnJvbUZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJpbmRleEFuY2hvckhUTUxUcmFuc2Zvcm0iLCJJbmRleEFuY2hvckhUTUxUcmFuc2Zvcm0iLCJodG1sTm9kZSIsImFwcGVuZFRvSFRNTE5vZGUiLCJnZXRQYWdlTnVtYmVySFRNTE5vZGUiLCJhc1N0cmluZyIsInJ1bGVOYW1lIiwic3RyaW5nIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImNoaWxkSFRNTE5vZGVzIiwiZnJvbUNoaWxkSFRNTE5vZGVzIiwidGFnTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFvQnFCQTs7O3lCQWxCVTsyREFFVjtpRUFDVTtrRUFDSztrRUFDQzsrREFDQztnRUFDQzt3QkFFSzt3QkFDOEI7cUJBSXRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEQsSUFBTSxBQUFFQyxVQUFZQyx5QkFBYyxDQUExQkQ7QUFFTyxJQUFBLEFBQU1ELGlDQUFOO2NBQU1BO2FBQUFBLGlCQUNQRyxTQUFTLEVBQUVDLFVB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