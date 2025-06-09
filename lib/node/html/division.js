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
            key: "getDivDOMElement",
            value: function getDivDOMElement() {
                var domElement = this.getDOMElement(), divDOMElement = domElement; ///
                return divDOMElement;
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
                var ref, ref1;
                ref = context, ref1 = ref.start, start = ref1 === void 0 ? 1 : ref1, ref;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuaW1wb3J0IFBhZ2VOdW1iZXJIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sL3BhZ2VOdW1iZXJcIjtcbmltcG9ydCBQYWdlTnVtYmVySFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvcGFnZU51bWJlclwiO1xuaW1wb3J0IEluZGV4QW5jaG9ySFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvaW5kZXhBbmNob3JcIjtcbmltcG9ydCBGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9pdGVtL2Zvb3Rub3RlXCI7XG5pbXBvcnQgRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2xpc3QvZm9vdG5vdGVzXCI7XG5cbmltcG9ydCB7IERJVklTSU9OX01BUktET1dOX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXMvbWFya2Rvd25cIjtcbmltcG9ydCB7IGdyb3VwSFRNTE5vZGVzLCByZW1vdmVIVE1MTm9kZXMsIHBhZ2luYXRlR3JvdXBlZEhUTUxOb2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZGl2aXNpb25cIjtcbmltcG9ydCB7IGZvb3Rub3Rlc0hUTUxOb2Rlc0Zyb21Ob2RlLFxuICAgICAgICAgZm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUsXG4gICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlLFxuICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2h0bWxcIjtcblxuY29uc3QgeyBleHRyYWN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25IVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgY29uc3RydWN0b3Iob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50LCBkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHN1cGVyKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldERpdkRPTUVsZW1lbnQoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIGRpdkRPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gZGl2RE9NRWxlbWVudDtcbiAgfVxuXG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgcnVsZU5tZSA9IERJVklTSU9OX01BUktET1dOX1JVTEVfTkFNRTtcblxuICAgIHJldHVybiBydWxlTm1lO1xuICB9XG5cbiAgcGFnZU51bWJlcigpIHtcbiAgICBjb25zdCBwYWdlTnVtYmVyID0gdGhpcy5mcm9tRmlyc3RMYXN0Q2hpbGROb2RlKChmaXJzdExhc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGxldCBwYWdlTnVtYmVyID0gbnVsbDtcblxuICAgICAgY29uc3QgZmlyc3RMYXN0Q2hpbGROb2RlUGFnZU51bWJlckhUTUxOb2RlID0gKGZpcnN0TGFzdENoaWxkTm9kZSBpbnN0YW5jZW9mIFBhZ2VOdW1iZXJIVE1MTm9kZSk7XG5cbiAgICAgIGlmIChmaXJzdExhc3RDaGlsZE5vZGVQYWdlTnVtYmVySFRNTE5vZGUpIHtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlckhUTUxOb2RlID0gZmlyc3RMYXN0Q2hpbGROb2RlOyAgLy8vXG5cbiAgICAgICAgcGFnZU51bWJlciA9IHBhZ2VOdW1iZXJIVE1MTm9kZS5nZXRQYWdlTnVtYmVyKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYWdlTnVtYmVyO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhZ2VOdW1iZXI7XG4gIH1cblxuICBwYWdpbmF0ZShkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLFxuICAgICAgICAgIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlID0gZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUgPSBwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgIGNvbnN0IGh0bWxOb2RlcyA9IHJlbW92ZUhUTUxOb2Rlcyhub2RlKSxcbiAgICAgICAgICBncm91cGVkSFRNTE5vZGVzQXJyYXkgPSBncm91cEhUTUxOb2RlcyhodG1sTm9kZXMpLFxuICAgICAgICAgIHBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5ID0gcGFnaW5hdGVHcm91cGVkSFRNTE5vZGVzKGdyb3VwZWRIVE1MTm9kZXNBcnJheSwgY29udGV4dCk7XG5cbiAgICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgICAgb3V0ZXJOb2RlID0gdGhpcy5nZXRPdXRlck5vZGUoKSxcbiAgICAgICAgICBkaXZpc2lvbkNsYXNzTmFtZSA9IG91dGVyTm9kZS5jbGFzc05hbWUoY29udGV4dCk7XG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHN0YXJ0XG4gICAgfSk7XG5cbiAgICBwYWdpbmF0ZWRIVE1MTm9kZXNBcnJheS5mb3JFYWNoKChwYWdpbmF0ZWRIVE1MTm9kZXMpID0+IHtcbiAgICAgIGxldCBwYWdlTnVtYmVyO1xuXG4gICAgICAoeyBwYWdlTnVtYmVyIH0gPSBjb250ZXh0KTtcblxuICAgICAgY29uc3QgZGl2aXNpb25IVE1MTm9kZSA9IERpdmlzaW9uSFRNTE5vZGUuZnJvbVBhZ2luYXRlZEhUTUxOb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2luYXRlZEhUTUxOb2RlcywgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgICBpZiAoZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0gID0gZGl2aXNpb25IVE1MTm9kZS5yZXNvbHZlRm9vdG5vdGVzKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgICAgIGZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtLmFwcGVuZFRvRGl2aXNpb25IVE1MTm9kZShkaXZpc2lvbkhUTUxOb2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtID0gZGl2aXNpb25IVE1MTm9kZS5yZXNvbHZlUGFnZU51bWJlcihwYWdlTnVtYmVyKTtcblxuICAgICAgICBwYWdlTnVtYmVySFRNTFRyYW5zZm9ybS5hcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSk7XG5cbiAgICAgICAgZGl2aXNpb25IVE1MTm9kZS5yZXNvbHZlSW5kZXhBbmNob3IocGFnZU51bWJlcik7XG4gICAgICB9XG5cbiAgICAgIGRpdmlzaW9uSFRNTE5vZGVzLnB1c2goZGl2aXNpb25IVE1MTm9kZSk7XG5cbiAgICAgIHBhZ2VOdW1iZXIrKztcblxuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIHBhZ2VOdW1iZXJcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZGVsZXRlIGNvbnRleHQuc3RhcnQ7XG4gIH1cblxuICByZXNvbHZlRm9vdG5vdGVzKGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3RlSFRNTE5vZGVzID0gZm9vdG5vdGVzSFRNTE5vZGVzRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgZm9vdG5vdGVMaW5rSFRNTE5vZGVzID0gZm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICBsZXQgc3RhcnQ7XG5cbiAgICAoeyBzdGFydCA9IDEgfSA9IGNvbnRleHQpO1xuXG4gICAgY29uc3QgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMgPSBbXTtcblxuICAgIGxldCBudW1iZXIgPSBzdGFydDsgLy8vXG5cbiAgICBmb290bm90ZUxpbmtIVE1MTm9kZXMuZm9yRWFjaCgoZm9vdG5vdGVMaW5rSFRNTE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBmb290bm90ZUxpbmtIVE1MTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgICAgZm9vdG5vdGVIVE1MTm9kZSA9IGV4dHJhY3QoZm9vdG5vdGVIVE1MTm9kZXMsIChmb290bm90ZUhUTUxOb2RlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXJNYXRjaGVzID0gZm9vdG5vdGVIVE1MTm9kZS5tYXRjaElkZW50aWZpZXIoaWRlbnRpZmllcik7XG5cbiAgICAgICAgICAgICAgaWYgKGlkZW50aWZpZXJNYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChmb290bm90ZUhUTUxOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHBhcmFncmFwaEhUTUxOb2RlID0gZm9vdG5vdGVIVE1MTm9kZS5nZXRQYXJhZ3JhcGhIVE1MTm9kZSgpLFxuICAgICAgICAgICAgICBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtID0gRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybS5mcm9tUGFyYWdyYXBoSFRNTE5PZGVBbmRJZGVudGlmaWVyKHBhcmFncmFwaEhUTUxOb2RlLCBpZGVudGlmaWVyKVxuXG4gICAgICAgIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zLnB1c2goZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybSk7XG5cbiAgICAgICAgZm9vdG5vdGVMaW5rSFRNTE5vZGUuc2V0TnVtYmVyKG51bWJlcik7XG5cbiAgICAgICAgbnVtYmVyKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb290bm90ZUxpbmtIVE1MTm9kZS5yZXNldE51bWJlcigpXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSA9IEZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtLmZyb21TdGFydEFuZEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zKHN0YXJ0LCBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtcyk7XG5cbiAgICBzdGFydCA9IG51bWJlcjsgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHN0YXJ0XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm07XG4gIH1cblxuICByZXNvbHZlUGFnZU51bWJlcihwYWdlTnVtYmVyKSB7XG4gICAgY29uc3QgcGFnZU51bWJlckhUTUxUcmFuc2Zvcm0gPSBQYWdlTnVtYmVySFRNTFRyYW5zZm9ybS5mcm9tUGFnZU51bWJlcihwYWdlTnVtYmVyKTtcblxuICAgIHJldHVybiBwYWdlTnVtYmVySFRNTFRyYW5zZm9ybTtcbiAgfVxuXG4gIHJlc29sdmVJbmRleEFuY2hvcihwYWdlTnVtYmVyKSB7XG4gICAgdGhpcy5mcm9tRmlyc3RDaGlsZE5vZGUoKGZpcnN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBpbmRleEFuY2hvckhUTUxUcmFuc2Zvcm0gPSBJbmRleEFuY2hvckhUTUxUcmFuc2Zvcm0uZnJvbVBhZ2VOdW1iZXIocGFnZU51bWJlciksXG4gICAgICAgICAgICBodG1sTm9kZSA9IGZpcnN0Q2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIGluZGV4QW5jaG9ySFRNTFRyYW5zZm9ybS5hcHBlbmRUb0hUTUxOb2RlKGh0bWxOb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IHJ1bGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBudWxsO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBkaXZpc2lvbkNsYXNzTmFtZSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25IVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21Ob3RoaW5nKERpdmlzaW9uSFRNTE5vZGUsIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBvdXRlck5vZGUsIC8vL1xuICAgICAgICAgIGRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25NYXJrZG93bk5vZGUuZ2V0RGl2aXNpb25DbGFzc05hbWUoKSxcbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShEaXZpc2lvbkhUTUxOb2RlLCBvdXRlck5vZGUsIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYWdpbmF0ZWRIVE1MTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZShwYWdpbmF0ZWRIVE1MTm9kZXMsIGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgY29uc3QgY2hpbGRIVE1MTm9kZXMgPSBwYWdpbmF0ZWRIVE1MTm9kZXMsICAvLy9cbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbUNoaWxkSFRNTE5vZGVzKERpdmlzaW9uSFRNTE5vZGUsIGNoaWxkSFRNTE5vZGVzLCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRpdmlzaW9uSFRNTE5vZGUiLCJleHRyYWN0IiwiYXJyYXlVdGlsaXRpZXMiLCJvdXRlck5vZGUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsImRvbUVsZW1lbnQiLCJkaXZpc2lvbkNsYXNzTmFtZSIsImdldERpdmlzaW9uQ2xhc3NOYW1lIiwiZ2V0RGl2RE9NRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJkaXZET01FbGVtZW50IiwiY2xhc3NOYW1lIiwiY29udGV4dCIsImdldFJ1bGVOYW1lIiwicnVsZU5tZSIsIkRJVklTSU9OX01BUktET1dOX1JVTEVfTkFNRSIsInBhZ2VOdW1iZXIiLCJmcm9tRmlyc3RMYXN0Q2hpbGROb2RlIiwiZmlyc3RMYXN0Q2hpbGROb2RlIiwiZmlyc3RMYXN0Q2hpbGROb2RlUGFnZU51bWJlckhUTUxOb2RlIiwiUGFnZU51bWJlckhUTUxOb2RlIiwicGFnZU51bWJlckhUTUxOb2RlIiwiZ2V0UGFnZU51bWJlciIsInBhZ2luYXRlIiwiZGl2aXNpb25IVE1MTm9kZXMiLCJub2RlIiwiZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUiLCJmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIiwicGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlIiwicGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUiLCJodG1sTm9kZXMiLCJyZW1vdmVIVE1MTm9kZXMiLCJncm91cGVkSFRNTE5vZGVzQXJyYXkiLCJncm91cEhUTUxOb2RlcyIsInBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5IiwicGFnaW5hdGVHcm91cGVkSFRNTE5vZGVzIiwic3RhcnQiLCJnZXRPdXRlck5vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJmb3JFYWNoIiwicGFnaW5hdGVkSFRNTE5vZGVzIiwiZGl2aXNpb25IVE1MTm9kZSIsImZyb21QYWdpbmF0ZWRIVE1MTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZSIsImZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIiwicmVzb2x2ZUZvb3Rub3RlcyIsImFwcGVuZFRvRGl2aXNpb25IVE1MTm9kZSIsInBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtIiwicmVzb2x2ZVBhZ2VOdW1iZXIiLCJyZXNvbHZlSW5kZXhBbmNob3IiLCJwdXNoIiwiZm9vdG5vdGVIVE1MTm9kZXMiLCJmb290bm90ZXNIVE1MTm9kZXNGcm9tTm9kZSIsImZvb3Rub3RlTGlua0hUTUxOb2RlcyIsImZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlIiwiZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMiLCJudW1iZXIiLCJmb290bm90ZUxpbmtIVE1MTm9kZSIsImlkZW50aWZpZXIiLCJmb290bm90ZUhUTUxOb2RlIiwiaWRlbnRpZmllck1hdGNoZXMiLCJtYXRjaElkZW50aWZpZXIiLCJwYXJhZ3JhcGhIVE1MTm9kZSIsImdldFBhcmFncmFwaEhUTUxOb2RlIiwiZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybSIsIkZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0iLCJmcm9tUGFyYWdyYXBoSFRNTE5PZGVBbmRJZGVudGlmaWVyIiwic2V0TnVtYmVyIiwicmVzZXROdW1iZXIiLCJGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSIsImZyb21TdGFydEFuZEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zIiwiUGFnZU51bWJlckhUTUxUcmFuc2Zvcm0iLCJmcm9tUGFnZU51bWJlciIsImZyb21GaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwiaW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtIiwiSW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtIiwiaHRtbE5vZGUiLCJhcHBlbmRUb0hUTUxOb2RlIiwiYXNTdHJpbmciLCJydWxlTmFtZSIsInN0cmluZyIsImZyb21Ob3RoaW5nIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjaGlsZEhUTUxOb2RlcyIsImZyb21DaGlsZEhUTUxOb2RlcyIsInRhZ05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBb0JxQkE7Ozt5QkFsQlU7MkRBRVY7aUVBQ1U7a0VBQ0s7a0VBQ0M7K0RBQ0M7Z0VBQ0M7d0JBRUs7d0JBQzhCO3FCQUl0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELElBQU0sQUFBRUMsVUFBWUMseUJBQWMsQ0FBMUJEO0FBRU8sSUFBQSxBQUFNRCxpQ0FBTjtjQUFNQTthQUFBQSxpQkFDUEcsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxpQkFBaUI7Z0NBRHpEUDs7Z0JBRWpCLGtCQUZpQkE7WUFFWEc7WUFBV0M7WUFBWUM7WUFBWUM7O1FBRXpDLE1BQUtDLGlCQUFpQixHQUFHQTs7O2tCQUpSUDs7WUFPbkJRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Qs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