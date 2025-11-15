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
                var start = 1, outerNode = this.getOuterNode(), divisionClassName = outerNode.className(context);
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
                var node = this, footnoteHTMLNodes = (0, _html1.footnoteHTMLNodesFromNode)(node), footnoteLinkHTMLNodes = (0, _html1.footnoteLinkHTMLNodesFromNode)(node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuaW1wb3J0IFBhZ2VOdW1iZXJIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sL3BhZ2VOdW1iZXJcIjtcbmltcG9ydCBQYWdlTnVtYmVySFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvcGFnZU51bWJlclwiO1xuaW1wb3J0IEluZGV4QW5jaG9ySFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvaW5kZXhBbmNob3JcIjtcbmltcG9ydCBGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9pdGVtL2Zvb3Rub3RlXCI7XG5pbXBvcnQgRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2xpc3QvZm9vdG5vdGVzXCI7XG5cbmltcG9ydCB7IERJVklTSU9OX01BUktET1dOX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXMvbWFya2Rvd25cIjtcbmltcG9ydCB7IGdyb3VwSFRNTE5vZGVzLCByZW1vdmVIVE1MTm9kZXMsIHBhZ2luYXRlR3JvdXBlZEhUTUxOb2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZGl2aXNpb25cIjtcbmltcG9ydCB7IGZvb3Rub3RlSFRNTE5vZGVzRnJvbU5vZGUsXG4gICAgICAgICBmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZSxcbiAgICAgICAgIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUsXG4gICAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvaHRtbFwiO1xuXG5jb25zdCB7IGV4dHJhY3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpc2lvbkhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBjb25zdHJ1Y3RvcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQsIGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgc3VwZXIob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldERpdmlzaW9uQ2xhc3NOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0RGl2RE9NRWxlbWVudCgpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgZGl2RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBkaXZET01FbGVtZW50O1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lOyAvLy9cblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTm1lID0gRElWSVNJT05fTUFSS0RPV05fUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVObWU7XG4gIH1cblxuICBwYWdlTnVtYmVyKCkge1xuICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSB0aGlzLmZyb21GaXJzdExhc3RDaGlsZE5vZGUoKGZpcnN0TGFzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgbGV0IHBhZ2VOdW1iZXIgPSBudWxsO1xuXG4gICAgICBjb25zdCBmaXJzdExhc3RDaGlsZE5vZGVQYWdlTnVtYmVySFRNTE5vZGUgPSAoZmlyc3RMYXN0Q2hpbGROb2RlIGluc3RhbmNlb2YgUGFnZU51bWJlckhUTUxOb2RlKTtcblxuICAgICAgaWYgKGZpcnN0TGFzdENoaWxkTm9kZVBhZ2VOdW1iZXJIVE1MTm9kZSkge1xuICAgICAgICBjb25zdCBwYWdlTnVtYmVySFRNTE5vZGUgPSBmaXJzdExhc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgICAgICBwYWdlTnVtYmVyID0gcGFnZU51bWJlckhUTUxOb2RlLmdldFBhZ2VOdW1iZXIoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhZ2VOdW1iZXI7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFnZU51bWJlcjtcbiAgfVxuXG4gIHBhZ2luYXRlKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsXG4gICAgICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgPSBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZSA9IHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgY29uc3QgaHRtbE5vZGVzID0gcmVtb3ZlSFRNTE5vZGVzKG5vZGUpLFxuICAgICAgICAgIGdyb3VwZWRIVE1MTm9kZXNBcnJheSA9IGdyb3VwSFRNTE5vZGVzKGh0bWxOb2RlcyksXG4gICAgICAgICAgcGFnaW5hdGVkSFRNTE5vZGVzQXJyYXkgPSBwYWdpbmF0ZUdyb3VwZWRIVE1MTm9kZXMoZ3JvdXBlZEhUTUxOb2Rlc0FycmF5LCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHN0YXJ0ID0gMSxcbiAgICAgICAgICBvdXRlck5vZGUgPSB0aGlzLmdldE91dGVyTm9kZSgpLFxuICAgICAgICAgIGRpdmlzaW9uQ2xhc3NOYW1lID0gb3V0ZXJOb2RlLmNsYXNzTmFtZShjb250ZXh0KTtcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgc3RhcnRcbiAgICB9KTtcblxuICAgIHBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5LmZvckVhY2goKHBhZ2luYXRlZEhUTUxOb2RlcykgPT4ge1xuICAgICAgbGV0IHBhZ2VOdW1iZXI7XG5cbiAgICAgICh7IHBhZ2VOdW1iZXIgfSA9IGNvbnRleHQpO1xuXG4gICAgICBjb25zdCBkaXZpc2lvbkhUTUxOb2RlID0gRGl2aXNpb25IVE1MTm9kZS5mcm9tUGFnaW5hdGVkSFRNTE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUocGFnaW5hdGVkSFRNTE5vZGVzLCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSAgPSBkaXZpc2lvbkhUTUxOb2RlLnJlc29sdmVGb290bm90ZXMoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICAgICAgZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0uYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlKGRpdmlzaW9uSFRNTE5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlckhUTUxUcmFuc2Zvcm0gPSBkaXZpc2lvbkhUTUxOb2RlLnJlc29sdmVQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpO1xuXG4gICAgICAgIHBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtLmFwcGVuZFRvRGl2aXNpb25IVE1MTm9kZShkaXZpc2lvbkhUTUxOb2RlKTtcblxuICAgICAgICBkaXZpc2lvbkhUTUxOb2RlLnJlc29sdmVJbmRleEFuY2hvcihwYWdlTnVtYmVyKTtcbiAgICAgIH1cblxuICAgICAgZGl2aXNpb25IVE1MTm9kZXMucHVzaChkaXZpc2lvbkhUTUxOb2RlKTtcblxuICAgICAgcGFnZU51bWJlcisrO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgcGFnZU51bWJlclxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkZWxldGUgY29udGV4dC5zdGFydDtcbiAgfVxuXG4gIHJlc29sdmVGb290bm90ZXMoY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVIVE1MTm9kZXMgPSBmb290bm90ZUhUTUxOb2Rlc0Zyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIGZvb3Rub3RlTGlua0hUTUxOb2RlcyA9IGZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gICAgbGV0IHN0YXJ0O1xuXG4gICAgKHsgc3RhcnQgPSAxIH0gPSBjb250ZXh0KTtcblxuICAgIGNvbnN0IGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zID0gW107XG5cbiAgICBsZXQgbnVtYmVyID0gc3RhcnQ7IC8vL1xuXG4gICAgZm9vdG5vdGVMaW5rSFRNTE5vZGVzLmZvckVhY2goKGZvb3Rub3RlTGlua0hUTUxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBpZGVudGlmaWVyID0gZm9vdG5vdGVMaW5rSFRNTE5vZGUuaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICAgIGZvb3Rub3RlSFRNTE5vZGUgPSBleHRyYWN0KGZvb3Rub3RlSFRNTE5vZGVzLCAoZm9vdG5vdGVIVE1MTm9kZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyTWF0Y2hlcyA9IGZvb3Rub3RlSFRNTE5vZGUubWF0Y2hJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuXG4gICAgICAgICAgICAgIGlmIChpZGVudGlmaWVyTWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoZm9vdG5vdGVIVE1MTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwYXJhZ3JhcGhIVE1MTm9kZSA9IGZvb3Rub3RlSFRNTE5vZGUuZ2V0UGFyYWdyYXBoSFRNTE5vZGUoKSxcbiAgICAgICAgICAgICAgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybSA9IEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0uZnJvbVBhcmFncmFwaEhUTUxOT2RlQW5kSWRlbnRpZmllcihwYXJhZ3JhcGhIVE1MTm9kZSwgaWRlbnRpZmllcilcblxuICAgICAgICBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtcy5wdXNoKGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0pO1xuXG4gICAgICAgIGZvb3Rub3RlTGlua0hUTUxOb2RlLnNldE51bWJlcihudW1iZXIpO1xuXG4gICAgICAgIG51bWJlcisrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9vdG5vdGVMaW5rSFRNTE5vZGUucmVzZXROdW1iZXIoKVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0gPSBGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybS5mcm9tU3RhcnRBbmRGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyhzdGFydCwgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMpO1xuXG4gICAgc3RhcnQgPSBudW1iZXI7IC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICBzdGFydFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtO1xuICB9XG5cbiAgcmVzb2x2ZVBhZ2VOdW1iZXIocGFnZU51bWJlcikge1xuICAgIGNvbnN0IHBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtID0gUGFnZU51bWJlckhUTUxUcmFuc2Zvcm0uZnJvbVBhZ2VOdW1iZXIocGFnZU51bWJlcik7XG5cbiAgICByZXR1cm4gcGFnZU51bWJlckhUTUxUcmFuc2Zvcm07XG4gIH1cblxuICByZXNvbHZlSW5kZXhBbmNob3IocGFnZU51bWJlcikge1xuICAgIHRoaXMuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgaW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtID0gSW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtLmZyb21QYWdlTnVtYmVyKHBhZ2VOdW1iZXIpLFxuICAgICAgICAgICAgaHRtbE5vZGUgPSBmaXJzdENoaWxkTm9kZTsgIC8vL1xuXG4gICAgICBpbmRleEFuY2hvckhUTUxUcmFuc2Zvcm0uYXBwZW5kVG9IVE1MTm9kZShodG1sTm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gbnVsbDtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgZGl2aXNpb25DbGFzc05hbWUgPSBudWxsLFxuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tTm90aGluZyhEaXZpc2lvbkhUTUxOb2RlLCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gb3V0ZXJOb2RlLCAvLy9cbiAgICAgICAgICBkaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmdldERpdmlzaW9uQ2xhc3NOYW1lKCksXG4gICAgICAgICAgZGl2aXNpb25IVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21PdXRlck5vZGUoRGl2aXNpb25IVE1MTm9kZSwgb3V0ZXJOb2RlLCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFnaW5hdGVkSFRNTE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUocGFnaW5hdGVkSFRNTE5vZGVzLCBkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkSFRNTE5vZGVzID0gcGFnaW5hdGVkSFRNTE5vZGVzLCAgLy8vXG4gICAgICAgICAgZGl2aXNpb25IVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21DaGlsZEhUTUxOb2RlcyhEaXZpc2lvbkhUTUxOb2RlLCBjaGlsZEhUTUxOb2RlcywgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEaXZpc2lvbkhUTUxOb2RlIiwiZXh0cmFjdCIsImFycmF5VXRpbGl0aWVzIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50IiwiZGl2aXNpb25DbGFzc05hbWUiLCJnZXREaXZpc2lvbkNsYXNzTmFtZSIsImdldERpdkRPTUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiZGl2RE9NRWxlbWVudCIsImNsYXNzTmFtZSIsImNvbnRleHQiLCJnZXRSdWxlTmFtZSIsInJ1bGVObWUiLCJESVZJU0lPTl9NQVJLRE9XTl9SVUxFX05BTUUiLCJwYWdlTnVtYmVyIiwiZnJvbUZpcnN0TGFzdENoaWxkTm9kZSIsImZpcnN0TGFzdENoaWxkTm9kZSIsImZpcnN0TGFzdENoaWxkTm9kZVBhZ2VOdW1iZXJIVE1MTm9kZSIsIlBhZ2VOdW1iZXJIVE1MTm9kZSIsInBhZ2VOdW1iZXJIVE1MTm9kZSIsImdldFBhZ2VOdW1iZXIiLCJwYWdpbmF0ZSIsImRpdmlzaW9uSFRNTE5vZGVzIiwibm9kZSIsImZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlIiwiZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSIsInBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZSIsInBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIiwiaHRtbE5vZGVzIiwicmVtb3ZlSFRNTE5vZGVzIiwiZ3JvdXBlZEhUTUxOb2Rlc0FycmF5IiwiZ3JvdXBIVE1MTm9kZXMiLCJwYWdpbmF0ZWRIVE1MTm9kZXNBcnJheSIsInBhZ2luYXRlR3JvdXBlZEhUTUxOb2RlcyIsInN0YXJ0IiwiZ2V0T3V0ZXJOb2RlIiwiT2JqZWN0IiwiYXNzaWduIiwiZm9yRWFjaCIsInBhZ2luYXRlZEhUTUxOb2RlcyIsImRpdmlzaW9uSFRNTE5vZGUiLCJmcm9tUGFnaW5hdGVkSFRNTE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUiLCJmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSIsInJlc29sdmVGb290bm90ZXMiLCJhcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUiLCJwYWdlTnVtYmVySFRNTFRyYW5zZm9ybSIsInJlc29sdmVQYWdlTnVtYmVyIiwicmVzb2x2ZUluZGV4QW5jaG9yIiwicHVzaCIsImZvb3Rub3RlSFRNTE5vZGVzIiwiZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZSIsImZvb3Rub3RlTGlua0hUTUxOb2RlcyIsImZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlIiwiZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMiLCJudW1iZXIiLCJmb290bm90ZUxpbmtIVE1MTm9kZSIsImlkZW50aWZpZXIiLCJmb290bm90ZUhUTUxOb2RlIiwiaWRlbnRpZmllck1hdGNoZXMiLCJtYXRjaElkZW50aWZpZXIiLCJwYXJhZ3JhcGhIVE1MTm9kZSIsImdldFBhcmFncmFwaEhUTUxOb2RlIiwiZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybSIsIkZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0iLCJmcm9tUGFyYWdyYXBoSFRNTE5PZGVBbmRJZGVudGlmaWVyIiwic2V0TnVtYmVyIiwicmVzZXROdW1iZXIiLCJGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSIsImZyb21TdGFydEFuZEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zIiwiUGFnZU51bWJlckhUTUxUcmFuc2Zvcm0iLCJmcm9tUGFnZU51bWJlciIsImZyb21GaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwiaW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtIiwiSW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtIiwiaHRtbE5vZGUiLCJhcHBlbmRUb0hUTUxOb2RlIiwiYXNTdHJpbmciLCJydWxlTmFtZSIsInN0cmluZyIsImZyb21Ob3RoaW5nIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjaGlsZEhUTUxOb2RlcyIsImZyb21DaGlsZEhUTUxOb2RlcyIsInRhZ05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBb0JxQkE7Ozt5QkFsQlU7MkRBRVY7aUVBQ1U7a0VBQ0s7a0VBQ0M7K0RBQ0M7Z0VBQ0M7d0JBRUs7d0JBQzhCO3FCQUl0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELElBQU0sQUFBRUMsVUFBWUMseUJBQWMsQ0FBMUJEO0FBRU8sSUFBQSxBQUFNRCxpQ0FBTjtjQUFNQTthQUFBQSxpQkFDUEcsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxpQkFBaUI7Z0NBRHpEUDs7Z0JBRWpCLGtCQUZpQkE7WUFFWEc7WUFBV0M7WUFBWUM7WUFBWUM7O1FBRXpDLE1BQUtDLGlCQUFpQixHQUFHQTs7O2tCQUpSUDs7WUFPbkJRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsaUJB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