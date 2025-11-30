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
var _division = /*#__PURE__*/ _interop_require_default(require("../../transform/html/division"));
var _pageNumber1 = /*#__PURE__*/ _interop_require_default(require("../../transform/html/pageNumber"));
var _index = /*#__PURE__*/ _interop_require_default(require("../../transform/html/anchor/index"));
var _footnote = /*#__PURE__*/ _interop_require_default(require("../../transform/html/item/footnote"));
var _footnotes = /*#__PURE__*/ _interop_require_default(require("../../transform/html/list/footnotes"));
var _markdown = require("../../ruleNames/markdown");
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
            key: "isIgnored",
            value: function isIgnored() {
                var markdownNode = this.getMarkdownNode(), divisionMarkdownNode = markdownNode, ignored = divisionMarkdownNode.isIgnored();
                return ignored;
            }
        },
        {
            key: "pageNumber",
            value: function pageNumber(context) {
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
            value: function paginate(htmlTransforms, context) {
                var ignored = this.isIgnored();
                if (ignored) {
                    return;
                }
                var node = this, start = 1, divisionHTMLNode = this, footnotesDirectiveHTMLNode = (0, _html1.footnotesDirectiveHTMLNodeFromNode)(node), pageNumberDirectiveHTMLNode = (0, _html1.pageNumberDirectiveHTMLNodeFromNode)(node);
                var pageNumber = context.pageNumber;
                Object.assign(context, {
                    start: start
                });
                if (footnotesDirectiveHTMLNode !== null) {
                    var footnotesListHTMLTransform = divisionHTMLNode.resolveFootnotes(context);
                    if (footnotesListHTMLTransform !== null) {
                        footnotesListHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
                    }
                }
                if (pageNumberDirectiveHTMLNode !== null) {
                    var pageNumberHTMLTransform = divisionHTMLNode.resolvePageNumber(pageNumber);
                    pageNumberHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
                }
                var htmlTransform;
                var indexAnchorHTMLTransform = _index.default.fromPageNumber(pageNumber);
                htmlTransform = indexAnchorHTMLTransform; ///
                htmlTransforms.push(htmlTransform);
                var divisionHTMLTransform = _division.default.fromDivisionHTMLNode(divisionHTMLNode);
                htmlTransform = divisionHTMLTransform; ///
                htmlTransforms.push(htmlTransform);
                pageNumber++;
                Object.assign(context, {
                    pageNumber: pageNumber
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuaW1wb3J0IFBhZ2VOdW1iZXJIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sL3BhZ2VOdW1iZXJcIjtcbmltcG9ydCBEaXZpc2lvbkhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2RpdmlzaW9uXCI7XG5pbXBvcnQgUGFnZU51bWJlckhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL3BhZ2VOdW1iZXJcIjtcbmltcG9ydCBJbmRleEFuY2hvckhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2FuY2hvci9pbmRleFwiO1xuaW1wb3J0IEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2l0ZW0vZm9vdG5vdGVcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvbGlzdC9mb290bm90ZXNcIjtcblxuaW1wb3J0IHsgRElWSVNJT05fTUFSS0RPV05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lcy9tYXJrZG93blwiO1xuaW1wb3J0IHsgZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZSxcbiAgICAgICAgIGZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlLFxuICAgICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSxcbiAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9odG1sXCI7XG5cbmNvbnN0IHsgZXh0cmFjdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlzaW9uSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCwgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBzdXBlcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25DbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBnZXREaXZET01FbGVtZW50KCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICBkaXZET01FbGVtZW50ID0gZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGRpdkRPTUVsZW1lbnQ7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZGl2aXNpb25DbGFzc05hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHJ1bGVObWUgPSBESVZJU0lPTl9NQVJLRE9XTl9SVUxFX05BTUU7XG5cbiAgICByZXR1cm4gcnVsZU5tZTtcbiAgfVxuXG4gIGlzSWdub3JlZCgpIHtcbiAgICBjb25zdCBtYXJrZG93bk5vZGUgPSB0aGlzLmdldE1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gbWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgaWdub3JlZCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmlzSWdub3JlZCgpO1xuXG4gICAgcmV0dXJuIGlnbm9yZWQ7XG4gIH1cblxuICBwYWdlTnVtYmVyKGNvbnRleHQpIHtcbiAgICBjb25zdCBwYWdlTnVtYmVyID0gdGhpcy5mcm9tRmlyc3RMYXN0Q2hpbGROb2RlKChmaXJzdExhc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGxldCBwYWdlTnVtYmVyID0gbnVsbDtcblxuICAgICAgY29uc3QgZmlyc3RMYXN0Q2hpbGROb2RlUGFnZU51bWJlckhUTUxOb2RlID0gKGZpcnN0TGFzdENoaWxkTm9kZSBpbnN0YW5jZW9mIFBhZ2VOdW1iZXJIVE1MTm9kZSk7XG5cbiAgICAgIGlmIChmaXJzdExhc3RDaGlsZE5vZGVQYWdlTnVtYmVySFRNTE5vZGUpIHtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlckhUTUxOb2RlID0gZmlyc3RMYXN0Q2hpbGROb2RlOyAgLy8vXG5cbiAgICAgICAgcGFnZU51bWJlciA9IHBhZ2VOdW1iZXJIVE1MTm9kZS5nZXRQYWdlTnVtYmVyKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYWdlTnVtYmVyO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhZ2VOdW1iZXI7XG4gIH1cblxuICBwYWdpbmF0ZShodG1sVHJhbnNmb3JtcywgY29udGV4dCkge1xuICAgIGNvbnN0IGlnbm9yZWQgPSB0aGlzLmlzSWdub3JlZCgpO1xuXG4gICAgaWYgKGlnbm9yZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHN0YXJ0ID0gMSxcbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gdGhpcyxcbiAgICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSA9IGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlID0gcGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICBsZXQgeyBwYWdlTnVtYmVyIH0gPSBjb250ZXh0O1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICBzdGFydFxuICAgIH0pO1xuXG4gICAgaWYgKGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSAgPSBkaXZpc2lvbkhUTUxOb2RlLnJlc29sdmVGb290bm90ZXMoY29udGV4dCk7XG5cbiAgICAgIGlmIChmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgICBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybS5hcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcGFnZU51bWJlckhUTUxUcmFuc2Zvcm0gPSBkaXZpc2lvbkhUTUxOb2RlLnJlc29sdmVQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpO1xuXG4gICAgICBwYWdlTnVtYmVySFRNTFRyYW5zZm9ybS5hcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSk7XG4gICAgfVxuXG4gICAgbGV0IGh0bWxUcmFuc2Zvcm07XG5cbiAgICBjb25zdCBpbmRleEFuY2hvckhUTUxUcmFuc2Zvcm0gPSBJbmRleEFuY2hvckhUTUxUcmFuc2Zvcm0uZnJvbVBhZ2VOdW1iZXIocGFnZU51bWJlcik7XG5cbiAgICBodG1sVHJhbnNmb3JtID0gaW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtOyAgLy8vXG5cbiAgICBodG1sVHJhbnNmb3Jtcy5wdXNoKGh0bWxUcmFuc2Zvcm0pO1xuXG4gICAgY29uc3QgZGl2aXNpb25IVE1MVHJhbnNmb3JtID0gRGl2aXNpb25IVE1MVHJhbnNmb3JtLmZyb21EaXZpc2lvbkhUTUxOb2RlKGRpdmlzaW9uSFRNTE5vZGUpO1xuXG4gICAgaHRtbFRyYW5zZm9ybSA9IGRpdmlzaW9uSFRNTFRyYW5zZm9ybTsgIC8vL1xuXG4gICAgaHRtbFRyYW5zZm9ybXMucHVzaChodG1sVHJhbnNmb3JtKTtcblxuICAgIHBhZ2VOdW1iZXIrKztcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgcGFnZU51bWJlclxuICAgIH0pO1xuXG4gICAgZGVsZXRlIGNvbnRleHQuc3RhcnQ7XG4gIH1cblxuICByZXNvbHZlRm9vdG5vdGVzKGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3RlSFRNTE5vZGVzID0gZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZUxpbmtIVE1MTm9kZXMgPSBmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIGxldCBzdGFydDtcblxuICAgICh7IHN0YXJ0ID0gMSB9ID0gY29udGV4dCk7XG5cbiAgICBjb25zdCBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyA9IFtdO1xuXG4gICAgbGV0IG51bWJlciA9IHN0YXJ0OyAvLy9cblxuICAgIGZvb3Rub3RlTGlua0hUTUxOb2Rlcy5mb3JFYWNoKChmb290bm90ZUxpbmtIVE1MTm9kZSkgPT4ge1xuICAgICAgY29uc3QgaWRlbnRpZmllciA9IGZvb3Rub3RlTGlua0hUTUxOb2RlLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgICBmb290bm90ZUhUTUxOb2RlID0gZXh0cmFjdChmb290bm90ZUhUTUxOb2RlcywgKGZvb3Rub3RlSFRNTE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaWRlbnRpZmllck1hdGNoZXMgPSBmb290bm90ZUhUTUxOb2RlLm1hdGNoSWRlbnRpZmllcihpZGVudGlmaWVyKTtcblxuICAgICAgICAgICAgICBpZiAoaWRlbnRpZmllck1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKGZvb3Rub3RlSFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcGFyYWdyYXBoSFRNTE5vZGUgPSBmb290bm90ZUhUTUxOb2RlLmdldFBhcmFncmFwaEhUTUxOb2RlKCksXG4gICAgICAgICAgICAgIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0gPSBGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtLmZyb21QYXJhZ3JhcGhIVE1MTk9kZUFuZElkZW50aWZpZXIocGFyYWdyYXBoSFRNTE5vZGUsIGlkZW50aWZpZXIpXG5cbiAgICAgICAgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMucHVzaChmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtKTtcblxuICAgICAgICBmb290bm90ZUxpbmtIVE1MTm9kZS5zZXROdW1iZXIobnVtYmVyKTtcblxuICAgICAgICBudW1iZXIrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvb3Rub3RlTGlua0hUTUxOb2RlLnJlc2V0TnVtYmVyKClcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtID0gRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0uZnJvbVN0YXJ0QW5kRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMoc3RhcnQsIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zKTtcblxuICAgIHN0YXJ0ID0gbnVtYmVyOyAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgc3RhcnRcbiAgICB9KTtcblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybTtcbiAgfVxuXG4gIHJlc29sdmVQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpIHtcbiAgICBjb25zdCBwYWdlTnVtYmVySFRNTFRyYW5zZm9ybSA9IFBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtLmZyb21QYWdlTnVtYmVyKHBhZ2VOdW1iZXIpO1xuXG4gICAgcmV0dXJuIHBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gcnVsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGRpdmlzaW9uQ2xhc3NOYW1lID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU5vdGhpbmcoRGl2aXNpb25IVE1MTm9kZSwgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IG91dGVyTm9kZSwgLy8vXG4gICAgICAgICAgZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZS5nZXREaXZpc2lvbkNsYXNzTmFtZSgpLFxuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKERpdmlzaW9uSFRNTE5vZGUsIG91dGVyTm9kZSwgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhZ2luYXRlZEhUTUxOb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2luYXRlZEhUTUxOb2RlcywgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBjb25zdCBjaGlsZEhUTUxOb2RlcyA9IHBhZ2luYXRlZEhUTUxOb2RlcywgIC8vL1xuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tQ2hpbGRIVE1MTm9kZXMoRGl2aXNpb25IVE1MTm9kZSwgY2hpbGRIVE1MTm9kZXMsIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGl2aXNpb25IVE1MTm9kZSIsImV4dHJhY3QiLCJhcnJheVV0aWxpdGllcyIsIm91dGVyTm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZG9tRWxlbWVudCIsImRpdmlzaW9uQ2xhc3NOYW1lIiwiZ2V0RGl2aXNpb25DbGFzc05hbWUiLCJnZXREaXZET01FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImRpdkRPTUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjb250ZXh0IiwiZ2V0UnVsZU5hbWUiLCJydWxlTm1lIiwiRElWSVNJT05fTUFSS0RPV05fUlVMRV9OQU1FIiwiaXNJZ25vcmVkIiwibWFya2Rvd25Ob2RlIiwiZ2V0TWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJpZ25vcmVkIiwicGFnZU51bWJlciIsImZyb21GaXJzdExhc3RDaGlsZE5vZGUiLCJmaXJzdExhc3RDaGlsZE5vZGUiLCJmaXJzdExhc3RDaGlsZE5vZGVQYWdlTnVtYmVySFRNTE5vZGUiLCJQYWdlTnVtYmVySFRNTE5vZGUiLCJwYWdlTnVtYmVySFRNTE5vZGUiLCJnZXRQYWdlTnVtYmVyIiwicGFnaW5hdGUiLCJodG1sVHJhbnNmb3JtcyIsIm5vZGUiLCJzdGFydCIsImRpdmlzaW9uSFRNTE5vZGUiLCJmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSIsImZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsImZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIiwicmVzb2x2ZUZvb3Rub3RlcyIsImFwcGVuZFRvRGl2aXNpb25IVE1MTm9kZSIsInBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtIiwicmVzb2x2ZVBhZ2VOdW1iZXIiLCJodG1sVHJhbnNmb3JtIiwiaW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtIiwiSW5kZXhBbmNob3JIVE1MVHJhbnNmb3JtIiwiZnJvbVBhZ2VOdW1iZXIiLCJwdXNoIiwiZGl2aXNpb25IVE1MVHJhbnNmb3JtIiwiRGl2aXNpb25IVE1MVHJhbnNmb3JtIiwiZnJvbURpdmlzaW9uSFRNTE5vZGUiLCJmb290bm90ZUhUTUxOb2RlcyIsImZvb3Rub3RlSFRNTE5vZGVzRnJvbU5vZGUiLCJmb290bm90ZUxpbmtIVE1MTm9kZXMiLCJmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZSIsImZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zIiwibnVtYmVyIiwiZm9yRWFjaCIsImZvb3Rub3RlTGlua0hUTUxOb2RlIiwiaWRlbnRpZmllciIsImZvb3Rub3RlSFRNTE5vZGUiLCJpZGVudGlmaWVyTWF0Y2hlcyIsIm1hdGNoSWRlbnRpZmllciIsInBhcmFncmFwaEhUTUxOb2RlIiwiZ2V0UGFyYWdyYXBoSFRNTE5vZGUiLCJmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtIiwiRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybSIsImZyb21QYXJhZ3JhcGhIVE1MTk9kZUFuZElkZW50aWZpZXIiLCJzZXROdW1iZXIiLCJyZXNldE51bWJlciIsIkZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIiwiZnJvbVN0YXJ0QW5kRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMiLCJQYWdlTnVtYmVySFRNTFRyYW5zZm9ybSIsImFzU3RyaW5nIiwicnVsZU5hbWUiLCJzdHJpbmciLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsImZyb21QYWdpbmF0ZWRIVE1MTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZSIsInBhZ2luYXRlZEhUTUxOb2RlcyIsImNoaWxkSFRNTE5vZGVzIiwiZnJvbUNoaWxkSFRNTE5vZGVzIiwidGFnTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFvQnFCQTs7O3lCQWxCVTsyREFFVjtpRUFDVTsrREFDRztrRUFDRTs0REFDQzsrREFDQztnRUFDQzt3QkFFSztxQkFJUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELElBQU0sQUFBRUMsVUFBWUMseUJBQWMsQ0FBMUJEO0FBRU8sSUFBQSxBQUFNRCxpQ0FBTjtjQUFNQTthQUFBQSxpQkFDUEcsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxpQkFBaUI7Z0NBRHpEUDs7Z0JBRWpCLGtCQUZpQkE7WUFFWEc7WUFBV0M7WUFBWUM7WUFBWUM7O1FBRXpDLE1BQUtDLGlCQUFpQixHQUFHQTs7O2tCQUpSUDs7WUFPbkJRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsaUJBQWlCO1lBQy9COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ILGFBQWEsSUFBSSxDQUFDSSxhQUFhLElBQy9CQyxnQkFBZ0JMLFlBQWEsR0FBRztnQkFFdEMsT0FBT0s7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxPQUFPO2dCQUNmLElBQU1ELFlBQVksSUFBSSxDQUFDTCxpQkFBaUIsRUFBRSxHQUFHO2dCQUU3QyxPQUFPSztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFVBQVVDLHFDQUEyQjtnQkFFM0MsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxlQUFlLElBQUksQ0FBQ0MsZUFBZSxJQUNuQ0MsdUJBQXVCRixjQUN2Qkcs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