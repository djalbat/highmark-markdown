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
                        var footnotesListHTMLTransform = divisionHTMLNode.resolveFootnotes(context);
                        if (footnotesListHTMLTransform !== null) {
                            footnotesListHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
                        }
                    }
                    if (pageNumberDirectiveHTMLNode !== null) {
                        var pageNumberHTMLTransform = divisionHTMLNode.resolvePageNumber(pageNumber);
                        pageNumberHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
                        divisionHTMLNode.resolveIndexAnchor(pageNumber);
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
                        var paragraphHTMLNode = footnoteHTMLNode.getParagraphHTMLNode(), footnoteItemHTMLTransform = _footnote.default.fromParagraphHTMLNOdeAndIdentifier(paragraphHTMLNode, identifier);
                        footnoteItemHTMLTransforms.push(footnoteItemHTMLTransform);
                        footnoteLinkHTMLNode.setNumber(number);
                        number++;
                    } else {
                        footnoteLinkHTMLNode.resetNumber();
                    }
                });
                var footnotesListHTMLTransform = _footnotes.default.fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms);
                start = number; ///
                Object.assign(context, {
                    start: start
                });
                return footnotesListHTMLTransform;
            }
        },
        {
            key: "resolvePageNumber",
            value: function resolvePageNumber(pageNumber) {
                var pageNumberHTMLTransform = _pageNumber1.default.fromPageNumber(pageNumber);
                return pageNumberHTMLTransform;
            }
        },
        {
            key: "resolveIndexAnchor",
            value: function resolveIndexAnchor(pageNumber) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuaW1wb3J0IFBhZ2VOdW1iZXJIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sL3BhZ2VOdW1iZXJcIjtcbmltcG9ydCBQYWdlTnVtYmVySFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvcGFnZU51bWJlclwiO1xuaW1wb3J0IEluZGV4QW5jaG9ySFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvaW5kZXhBbmNob3JcIjtcbmltcG9ydCBGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9pdGVtL2Zvb3Rub3RlXCI7XG5pbXBvcnQgRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2xpc3QvZm9vdG5vdGVzXCI7XG5cbmltcG9ydCB7IERJVklTSU9OX01BUktET1dOX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXMvbWFya2Rvd25cIjtcbmltcG9ydCB7IGdyb3VwSFRNTE5vZGVzLCByZW1vdmVIVE1MTm9kZXMsIHBhZ2luYXRlR3JvdXBlZEhUTUxOb2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZGl2aXNpb25cIjtcbmltcG9ydCB7IGZvb3Rub3Rlc0hUTUxOb2Rlc0Zyb21Ob2RlLFxuICAgICAgICAgZm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUsXG4gICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlLFxuICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2h0bWxcIjtcblxuY29uc3QgeyBleHRyYWN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25IVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgY29uc3RydWN0b3Iob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50LCBkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHN1cGVyKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgcnVsZU5tZSA9IERJVklTSU9OX01BUktET1dOX1JVTEVfTkFNRTtcblxuICAgIHJldHVybiBydWxlTm1lO1xuICB9XG5cbiAgcGFnZU51bWJlcigpIHtcbiAgICBjb25zdCBwYWdlTnVtYmVyID0gdGhpcy5mcm9tRmlyc3RMYXN0Q2hpbGROb2RlKChmaXJzdExhc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGxldCBwYWdlTnVtYmVyID0gbnVsbDtcblxuICAgICAgY29uc3QgZmlyc3RMYXN0Q2hpbGROb2RlUGFnZU51bWJlckhUTUxOb2RlID0gKGZpcnN0TGFzdENoaWxkTm9kZSBpbnN0YW5jZW9mIFBhZ2VOdW1iZXJIVE1MTm9kZSk7XG5cbiAgICAgIGlmIChmaXJzdExhc3RDaGlsZE5vZGVQYWdlTnVtYmVySFRNTE5vZGUpIHtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlckhUTUxOb2RlID0gZmlyc3RMYXN0Q2hpbGROb2RlOyAgLy8vXG5cbiAgICAgICAgcGFnZU51bWJlciA9IHBhZ2VOdW1iZXJIVE1MTm9kZS5nZXRQYWdlTnVtYmVyKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYWdlTnVtYmVyO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhZ2VOdW1iZXI7XG4gIH1cblxuICBwYWdpbmF0ZShkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLFxuICAgICAgICAgIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlID0gZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUgPSBwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgIGNvbnN0IGh0bWxOb2RlcyA9IHJlbW92ZUhUTUxOb2Rlcyhub2RlKSxcbiAgICAgICAgICBncm91cGVkSFRNTE5vZGVzQXJyYXkgPSBncm91cEhUTUxOb2RlcyhodG1sTm9kZXMpLFxuICAgICAgICAgIHBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5ID0gcGFnaW5hdGVHcm91cGVkSFRNTE5vZGVzKGdyb3VwZWRIVE1MTm9kZXNBcnJheSwgY29udGV4dCk7XG5cbiAgICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgICAgb3V0ZXJOb2RlID0gdGhpcy5nZXRPdXRlck5vZGUoKSxcbiAgICAgICAgICBkaXZpc2lvbkNsYXNzTmFtZSA9IG91dGVyTm9kZS5jbGFzc05hbWUoY29udGV4dCk7XG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHN0YXJ0XG4gICAgfSk7XG5cbiAgICBwYWdpbmF0ZWRIVE1MTm9kZXNBcnJheS5mb3JFYWNoKChwYWdpbmF0ZWRIVE1MTm9kZXMpID0+IHtcbiAgICAgIGxldCBwYWdlTnVtYmVyO1xuXG4gICAgICAoeyBwYWdlTnVtYmVyIH0gPSBjb250ZXh0KTtcblxuICAgICAgY29uc3QgZGl2aXNpb25IVE1MTm9kZSA9IERpdmlzaW9uSFRNTE5vZGUuZnJvbVBhZ2luYXRlZEhUTUxOb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2luYXRlZEhUTUxOb2RlcywgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgICBpZiAoZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0gID0gZGl2aXNpb25IVE1MTm9kZS5yZXNvbHZlRm9vdG5vdGVzKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgICAgIGZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtLmFwcGVuZFRvRGl2aXNpb25IVE1MTm9kZShkaXZpc2lvbkhUTUxOb2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtID0gZGl2aXNpb25IVE1MTm9kZS5yZXNvbHZlUGFnZU51bWJlcihwYWdlTnVtYmVyKTtcblxuICAgICAgICBwYWdlTnVtYmVySFRNTFRyYW5zZm9ybS5hcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSk7XG5cbiAgICAgICAgZGl2aXNpb25IVE1MTm9kZS5yZXNvbHZlSW5kZXhBbmNob3IocGFnZU51bWJlcik7XG4gICAgICB9XG5cbiAgICAgIGRpdmlzaW9uSFRNTE5vZGVzLnB1c2goZGl2aXNpb25IVE1MTm9kZSk7XG5cbiAgICAgIHBhZ2VOdW1iZXIrKztcblxuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIHBhZ2VOdW1iZXJcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZGVsZXRlIGNvbnRleHQuc3RhcnQ7XG4gIH1cblxuICByZXNvbHZlRm9vdG5vdGVzKGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3RlSFRNTE5vZGVzID0gZm9vdG5vdGVzSFRNTE5vZGVzRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgZm9vdG5vdGVMaW5rSFRNTE5vZGVzID0gZm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICBsZXQgc3RhcnQ7XG5cbiAgICAoeyBzdGFydCB9ID0gY29udGV4dCk7XG5cbiAgICBjb25zdCBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyA9IFtdO1xuXG4gICAgbGV0IG51bWJlciA9IHN0YXJ0OyAvLy9cblxuICAgIGZvb3Rub3RlTGlua0hUTUxOb2Rlcy5mb3JFYWNoKChmb290bm90ZUxpbmtIVE1MTm9kZSkgPT4ge1xuICAgICAgY29uc3QgaWRlbnRpZmllciA9IGZvb3Rub3RlTGlua0hUTUxOb2RlLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgICBmb290bm90ZUhUTUxOb2RlID0gZXh0cmFjdChmb290bm90ZUhUTUxOb2RlcywgKGZvb3Rub3RlSFRNTE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaWRlbnRpZmllck1hdGNoZXMgPSBmb290bm90ZUhUTUxOb2RlLm1hdGNoSWRlbnRpZmllcihpZGVudGlmaWVyKTtcblxuICAgICAgICAgICAgICBpZiAoaWRlbnRpZmllck1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKGZvb3Rub3RlSFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcGFyYWdyYXBoSFRNTE5vZGUgPSBmb290bm90ZUhUTUxOb2RlLmdldFBhcmFncmFwaEhUTUxOb2RlKCksXG4gICAgICAgICAgICAgIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0gPSBGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtLmZyb21QYXJhZ3JhcGhIVE1MTk9kZUFuZElkZW50aWZpZXIocGFyYWdyYXBoSFRNTE5vZGUsIGlkZW50aWZpZXIpXG5cbiAgICAgICAgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMucHVzaChmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtKTtcblxuICAgICAgICBmb290bm90ZUxpbmtIVE1MTm9kZS5zZXROdW1iZXIobnVtYmVyKTtcblxuICAgICAgICBudW1iZXIrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvb3Rub3RlTGlua0hUTUxOb2RlLnJlc2V0TnVtYmVyKClcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtID0gRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0uZnJvbVN0YXJ0QW5kRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMoc3RhcnQsIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zKTtcblxuICAgIHN0YXJ0ID0gbnVtYmVyOyAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgc3RhcnRcbiAgICB9KTtcblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybTtcbiAgfVxuXG4gIHJlc29sdmVQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpIHtcbiAgICBjb25zdCBwYWdlTnVtYmVySFRNTFRyYW5zZm9ybSA9IFBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtLmZyb21QYWdlTnVtYmVyKHBhZ2VOdW1iZXIpO1xuXG4gICAgcmV0dXJuIHBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtO1xuICB9XG5cbiAgcmVzb2x2ZUluZGV4QW5jaG9yKHBhZ2VOdW1iZXIpIHtcbiAgICB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4QW5jaG9ySFRNTFRyYW5zZm9ybSA9IEluZGV4QW5jaG9ySFRNTFRyYW5zZm9ybS5mcm9tUGFnZU51bWJlcihwYWdlTnVtYmVyKSxcbiAgICAgICAgICAgIGh0bWxOb2RlID0gZmlyc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgICAgaW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtLmFwcGVuZFRvSFRNTE5vZGUoaHRtbE5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gcnVsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGRpdmlzaW9uQ2xhc3NOYW1lID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU5vdGhpbmcoRGl2aXNpb25IVE1MTm9kZSwgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IG91dGVyTm9kZSwgLy8vXG4gICAgICAgICAgZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZS5nZXREaXZpc2lvbkNsYXNzTmFtZSgpLFxuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKERpdmlzaW9uSFRNTE5vZGUsIG91dGVyTm9kZSwgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhZ2luYXRlZEhUTUxOb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2luYXRlZEhUTUxOb2RlcywgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBjb25zdCBjaGlsZEhUTUxOb2RlcyA9IHBhZ2luYXRlZEhUTUxOb2RlcywgIC8vL1xuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tQ2hpbGRIVE1MTm9kZXMoRGl2aXNpb25IVE1MTm9kZSwgY2hpbGRIVE1MTm9kZXMsIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGl2aXNpb25IVE1MTm9kZSIsImV4dHJhY3QiLCJhcnJheVV0aWxpdGllcyIsIm91dGVyTm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZG9tRWxlbWVudCIsImRpdmlzaW9uQ2xhc3NOYW1lIiwiZ2V0RGl2aXNpb25DbGFzc05hbWUiLCJjbGFzc05hbWUiLCJjb250ZXh0IiwiZ2V0UnVsZU5hbWUiLCJydWxlTm1lIiwiRElWSVNJT05fTUFSS0RPV05fUlVMRV9OQU1FIiwicGFnZU51bWJlciIsImZyb21GaXJzdExhc3RDaGlsZE5vZGUiLCJmaXJzdExhc3RDaGlsZE5vZGUiLCJmaXJzdExhc3RDaGlsZE5vZGVQYWdlTnVtYmVySFRNTE5vZGUiLCJQYWdlTnVtYmVySFRNTE5vZGUiLCJwYWdlTnVtYmVySFRNTE5vZGUiLCJnZXRQYWdlTnVtYmVyIiwicGFnaW5hdGUiLCJkaXZpc2lvbkhUTUxOb2RlcyIsIm5vZGUiLCJmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSIsImZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSIsImh0bWxOb2RlcyIsInJlbW92ZUhUTUxOb2RlcyIsImdyb3VwZWRIVE1MTm9kZXNBcnJheSIsImdyb3VwSFRNTE5vZGVzIiwicGFnaW5hdGVkSFRNTE5vZGVzQXJyYXkiLCJwYWdpbmF0ZUdyb3VwZWRIVE1MTm9kZXMiLCJzdGFydCIsImdldE91dGVyTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwYWdpbmF0ZWRIVE1MTm9kZXMiLCJkaXZpc2lvbkhUTUxOb2RlIiwiZnJvbVBhZ2luYXRlZEhUTUxOb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lIiwiZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0iLCJyZXNvbHZlRm9vdG5vdGVzIiwiYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlIiwicGFnZU51bWJlckhUTUxUcmFuc2Zvcm0iLCJyZXNvbHZlUGFnZU51bWJlciIsInJlc29sdmVJbmRleEFuY2hvciIsInB1c2giLCJmb290bm90ZUhUTUxOb2RlcyIsImZvb3Rub3Rlc0hUTUxOb2Rlc0Zyb21Ob2RlIiwiZm9vdG5vdGVMaW5rSFRNTE5vZGVzIiwiZm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUiLCJmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyIsIm51bWJlciIsImZvb3Rub3RlTGlua0hUTUxOb2RlIiwiaWRlbnRpZmllciIsImZvb3Rub3RlSFRNTE5vZGUiLCJpZGVudGlmaWVyTWF0Y2hlcyIsIm1hdGNoSWRlbnRpZmllciIsInBhcmFncmFwaEhUTUxOb2RlIiwiZ2V0UGFyYWdyYXBoSFRNTE5vZGUiLCJmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtIiwiRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybSIsImZyb21QYXJhZ3JhcGhIVE1MTk9kZUFuZElkZW50aWZpZXIiLCJzZXROdW1iZXIiLCJyZXNldE51bWJlciIsIkZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIiwiZnJvbVN0YXJ0QW5kRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMiLCJQYWdlTnVtYmVySFRNTFRyYW5zZm9ybSIsImZyb21QYWdlTnVtYmVyIiwiZnJvbUZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJpbmRleEFuY2hvckhUTUxUcmFuc2Zvcm0iLCJJbmRleEFuY2hvckhUTUxUcmFuc2Zvcm0iLCJodG1sTm9kZSIsImFwcGVuZFRvSFRNTE5vZGUiLCJhc1N0cmluZyIsInJ1bGVOYW1lIiwic3RyaW5nIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImNoaWxkSFRNTE5vZGVzIiwiZnJvbUNoaWxkSFRNTE5vZGVzIiwidGFnTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFvQnFCQTs7O3lCQWxCVTsyREFFVjtpRUFDVTtrRUFDSztrRUFDQzsrREFDQztnRUFDQzt3QkFFSzt3QkFDOEI7cUJBSXRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEQsSUFBTSxBQUFFQyxVQUFZQyx5QkFBYyxDQUExQkQ7QUFFTyxJQUFBLEFBQU1ELGlDQUFOO2NBQU1BO2FBQUFBLGlCQUNQRyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLGlCQUFpQjtnQ0FEekRQOztnQkFFakIsa0JBRmlCQTtZQUVYRztZQUFXQztZQUFZQztZQUFZQzs7UUFFekMsTUFBS0MsaUJBQWlCLEdBQUdBOzs7a0JBSlJQOztZQU9uQlEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxpQkFBaUI7WUFDL0I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsT0FBTztnQkFDZixJQUFNRCxZQUFZLElBQUksQ0FBQ0YsaUJBQWlCLEVBQUUsR0FBRztnQkFFN0MsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxVQUFVQyxxQ0FBMkI7Z0JBRTNDLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEs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