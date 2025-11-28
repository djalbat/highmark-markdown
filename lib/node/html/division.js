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
var _division1 = require("../../utilities/division");
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
            value: function paginate(htmlTransforms, context) {
                var _this = this;
                var node = this, footnotesDirectiveHTMLNode = (0, _html1.footnotesDirectiveHTMLNodeFromNode)(node), pageNumberDirectiveHTMLNode = (0, _html1.pageNumberDirectiveHTMLNodeFromNode)(node);
                var htmlNodes = (0, _division1.removeHTMLNodes)(node), groupedHTMLNodesArray = (0, _division1.groupHTMLNodes)(htmlNodes), paginatedHTMLNodesArray = (0, _division1.paginateGroupedHTMLNodes)(groupedHTMLNodesArray, context);
                var start = 1;
                Object.assign(context, {
                    start: start
                });
                paginatedHTMLNodesArray.forEach(function(paginatedHTMLNodes) {
                    var pageNumber, htmlTransform;
                    pageNumber = context.pageNumber;
                    var divisionHTMLNode = DivisionHTMLNode.fromPaginatedHTMLNodesAndDivisionClassName(paginatedHTMLNodes, _this.divisionClassName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuaW1wb3J0IFBhZ2VOdW1iZXJIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sL3BhZ2VOdW1iZXJcIjtcbmltcG9ydCBEaXZpc2lvbkhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2RpdmlzaW9uXCI7XG5pbXBvcnQgUGFnZU51bWJlckhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL3BhZ2VOdW1iZXJcIjtcbmltcG9ydCBJbmRleEFuY2hvckhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2FuY2hvci9pbmRleFwiO1xuaW1wb3J0IEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2l0ZW0vZm9vdG5vdGVcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvbGlzdC9mb290bm90ZXNcIjtcblxuaW1wb3J0IHsgRElWSVNJT05fTUFSS0RPV05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lcy9tYXJrZG93blwiO1xuaW1wb3J0IHsgZ3JvdXBIVE1MTm9kZXMsIHJlbW92ZUhUTUxOb2RlcywgcGFnaW5hdGVHcm91cGVkSFRNTE5vZGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kaXZpc2lvblwiO1xuaW1wb3J0IHsgZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZSxcbiAgICAgICAgIGZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlLFxuICAgICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSxcbiAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9odG1sXCI7XG5cbmNvbnN0IHsgZXh0cmFjdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlzaW9uSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCwgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBzdXBlcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25DbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBnZXREaXZET01FbGVtZW50KCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICBkaXZET01FbGVtZW50ID0gZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGRpdkRPTUVsZW1lbnQ7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZGl2aXNpb25DbGFzc05hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHJ1bGVObWUgPSBESVZJU0lPTl9NQVJLRE9XTl9SVUxFX05BTUU7XG5cbiAgICByZXR1cm4gcnVsZU5tZTtcbiAgfVxuXG4gIHBhZ2VOdW1iZXIoKSB7XG4gICAgY29uc3QgcGFnZU51bWJlciA9IHRoaXMuZnJvbUZpcnN0TGFzdENoaWxkTm9kZSgoZmlyc3RMYXN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBsZXQgcGFnZU51bWJlciA9IG51bGw7XG5cbiAgICAgIGNvbnN0IGZpcnN0TGFzdENoaWxkTm9kZVBhZ2VOdW1iZXJIVE1MTm9kZSA9IChmaXJzdExhc3RDaGlsZE5vZGUgaW5zdGFuY2VvZiBQYWdlTnVtYmVySFRNTE5vZGUpO1xuXG4gICAgICBpZiAoZmlyc3RMYXN0Q2hpbGROb2RlUGFnZU51bWJlckhUTUxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VOdW1iZXJIVE1MTm9kZSA9IGZpcnN0TGFzdENoaWxkTm9kZTsgIC8vL1xuXG4gICAgICAgIHBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVySFRNTE5vZGUuZ2V0UGFnZU51bWJlcigpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFnZU51bWJlcjtcbiAgICB9KTtcblxuICAgIHJldHVybiBwYWdlTnVtYmVyO1xuICB9XG5cbiAgcGFnaW5hdGUoaHRtbFRyYW5zZm9ybXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlID0gZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUgPSBwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgIGNvbnN0IGh0bWxOb2RlcyA9IHJlbW92ZUhUTUxOb2Rlcyhub2RlKSxcbiAgICAgICAgICBncm91cGVkSFRNTE5vZGVzQXJyYXkgPSBncm91cEhUTUxOb2RlcyhodG1sTm9kZXMpLFxuICAgICAgICAgIHBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5ID0gcGFnaW5hdGVHcm91cGVkSFRNTE5vZGVzKGdyb3VwZWRIVE1MTm9kZXNBcnJheSwgY29udGV4dCk7XG5cbiAgICBjb25zdCBzdGFydCA9IDE7XG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHN0YXJ0XG4gICAgfSk7XG5cbiAgICBwYWdpbmF0ZWRIVE1MTm9kZXNBcnJheS5mb3JFYWNoKChwYWdpbmF0ZWRIVE1MTm9kZXMpID0+IHtcbiAgICAgIGxldCBwYWdlTnVtYmVyLFxuICAgICAgICAgIGh0bWxUcmFuc2Zvcm07XG5cbiAgICAgICh7IHBhZ2VOdW1iZXIgfSA9IGNvbnRleHQpO1xuXG4gICAgICBjb25zdCBkaXZpc2lvbkhUTUxOb2RlID0gRGl2aXNpb25IVE1MTm9kZS5mcm9tUGFnaW5hdGVkSFRNTE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUocGFnaW5hdGVkSFRNTE5vZGVzLCB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgICAgaWYgKGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtICA9IGRpdmlzaW9uSFRNTE5vZGUucmVzb2x2ZUZvb3Rub3Rlcyhjb250ZXh0KTtcblxuICAgICAgICBpZiAoZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgICAgICAgICBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybS5hcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwYWdlTnVtYmVySFRNTFRyYW5zZm9ybSA9IGRpdmlzaW9uSFRNTE5vZGUucmVzb2x2ZVBhZ2VOdW1iZXIocGFnZU51bWJlcik7XG5cbiAgICAgICAgcGFnZU51bWJlckhUTUxUcmFuc2Zvcm0uYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlKGRpdmlzaW9uSFRNTE5vZGUpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpbmRleEFuY2hvckhUTUxUcmFuc2Zvcm0gPSBJbmRleEFuY2hvckhUTUxUcmFuc2Zvcm0uZnJvbVBhZ2VOdW1iZXIocGFnZU51bWJlcik7XG5cbiAgICAgIGh0bWxUcmFuc2Zvcm0gPSBpbmRleEFuY2hvckhUTUxUcmFuc2Zvcm07ICAvLy9cblxuICAgICAgaHRtbFRyYW5zZm9ybXMucHVzaChodG1sVHJhbnNmb3JtKTtcblxuICAgICAgY29uc3QgZGl2aXNpb25IVE1MVHJhbnNmb3JtID0gRGl2aXNpb25IVE1MVHJhbnNmb3JtLmZyb21EaXZpc2lvbkhUTUxOb2RlKGRpdmlzaW9uSFRNTE5vZGUpO1xuXG4gICAgICBodG1sVHJhbnNmb3JtID0gZGl2aXNpb25IVE1MVHJhbnNmb3JtOyAgLy8vXG5cbiAgICAgIGh0bWxUcmFuc2Zvcm1zLnB1c2goaHRtbFRyYW5zZm9ybSk7XG5cbiAgICAgIHBhZ2VOdW1iZXIrKztcblxuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIHBhZ2VOdW1iZXJcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZGVsZXRlIGNvbnRleHQuc3RhcnQ7XG4gIH1cblxuICByZXNvbHZlRm9vdG5vdGVzKGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3RlSFRNTE5vZGVzID0gZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZUxpbmtIVE1MTm9kZXMgPSBmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIGxldCBzdGFydDtcblxuICAgICh7IHN0YXJ0ID0gMSB9ID0gY29udGV4dCk7XG5cbiAgICBjb25zdCBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyA9IFtdO1xuXG4gICAgbGV0IG51bWJlciA9IHN0YXJ0OyAvLy9cblxuICAgIGZvb3Rub3RlTGlua0hUTUxOb2Rlcy5mb3JFYWNoKChmb290bm90ZUxpbmtIVE1MTm9kZSkgPT4ge1xuICAgICAgY29uc3QgaWRlbnRpZmllciA9IGZvb3Rub3RlTGlua0hUTUxOb2RlLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgICBmb290bm90ZUhUTUxOb2RlID0gZXh0cmFjdChmb290bm90ZUhUTUxOb2RlcywgKGZvb3Rub3RlSFRNTE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaWRlbnRpZmllck1hdGNoZXMgPSBmb290bm90ZUhUTUxOb2RlLm1hdGNoSWRlbnRpZmllcihpZGVudGlmaWVyKTtcblxuICAgICAgICAgICAgICBpZiAoaWRlbnRpZmllck1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKGZvb3Rub3RlSFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcGFyYWdyYXBoSFRNTE5vZGUgPSBmb290bm90ZUhUTUxOb2RlLmdldFBhcmFncmFwaEhUTUxOb2RlKCksXG4gICAgICAgICAgICAgIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0gPSBGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtLmZyb21QYXJhZ3JhcGhIVE1MTk9kZUFuZElkZW50aWZpZXIocGFyYWdyYXBoSFRNTE5vZGUsIGlkZW50aWZpZXIpXG5cbiAgICAgICAgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMucHVzaChmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtKTtcblxuICAgICAgICBmb290bm90ZUxpbmtIVE1MTm9kZS5zZXROdW1iZXIobnVtYmVyKTtcblxuICAgICAgICBudW1iZXIrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvb3Rub3RlTGlua0hUTUxOb2RlLnJlc2V0TnVtYmVyKClcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtID0gRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0uZnJvbVN0YXJ0QW5kRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMoc3RhcnQsIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zKTtcblxuICAgIHN0YXJ0ID0gbnVtYmVyOyAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgc3RhcnRcbiAgICB9KTtcblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybTtcbiAgfVxuXG4gIHJlc29sdmVQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpIHtcbiAgICBjb25zdCBwYWdlTnVtYmVySFRNTFRyYW5zZm9ybSA9IFBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtLmZyb21QYWdlTnVtYmVyKHBhZ2VOdW1iZXIpO1xuXG4gICAgcmV0dXJuIHBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gcnVsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGRpdmlzaW9uQ2xhc3NOYW1lID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU5vdGhpbmcoRGl2aXNpb25IVE1MTm9kZSwgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IG91dGVyTm9kZSwgLy8vXG4gICAgICAgICAgZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZS5nZXREaXZpc2lvbkNsYXNzTmFtZSgpLFxuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKERpdmlzaW9uSFRNTE5vZGUsIG91dGVyTm9kZSwgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhZ2luYXRlZEhUTUxOb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2luYXRlZEhUTUxOb2RlcywgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBjb25zdCBjaGlsZEhUTUxOb2RlcyA9IHBhZ2luYXRlZEhUTUxOb2RlcywgIC8vL1xuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tQ2hpbGRIVE1MTm9kZXMoRGl2aXNpb25IVE1MTm9kZSwgY2hpbGRIVE1MTm9kZXMsIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGl2aXNpb25IVE1MTm9kZSIsImV4dHJhY3QiLCJhcnJheVV0aWxpdGllcyIsIm91dGVyTm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZG9tRWxlbWVudCIsImRpdmlzaW9uQ2xhc3NOYW1lIiwiZ2V0RGl2aXNpb25DbGFzc05hbWUiLCJnZXREaXZET01FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImRpdkRPTUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjb250ZXh0IiwiZ2V0UnVsZU5hbWUiLCJydWxlTm1lIiwiRElWSVNJT05fTUFSS0RPV05fUlVMRV9OQU1FIiwicGFnZU51bWJlciIsImZyb21GaXJzdExhc3RDaGlsZE5vZGUiLCJmaXJzdExhc3RDaGlsZE5vZGUiLCJmaXJzdExhc3RDaGlsZE5vZGVQYWdlTnVtYmVySFRNTE5vZGUiLCJQYWdlTnVtYmVySFRNTE5vZGUiLCJwYWdlTnVtYmVySFRNTE5vZGUiLCJnZXRQYWdlTnVtYmVyIiwicGFnaW5hdGUiLCJodG1sVHJhbnNmb3JtcyIsIm5vZGUiLCJmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSIsImZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSIsImh0bWxOb2RlcyIsInJlbW92ZUhUTUxOb2RlcyIsImdyb3VwZWRIVE1MTm9kZXNBcnJheSIsImdyb3VwSFRNTE5vZGVzIiwicGFnaW5hdGVkSFRNTE5vZGVzQXJyYXkiLCJwYWdpbmF0ZUdyb3VwZWRIVE1MTm9kZXMiLCJzdGFydCIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwYWdpbmF0ZWRIVE1MTm9kZXMiLCJodG1sVHJhbnNmb3JtIiwiZGl2aXNpb25IVE1MTm9kZSIsImZyb21QYWdpbmF0ZWRIVE1MTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZSIsImZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIiwicmVzb2x2ZUZvb3Rub3RlcyIsImFwcGVuZFRvRGl2aXNpb25IVE1MTm9kZSIsInBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtIiwicmVzb2x2ZVBhZ2VOdW1iZXIiLCJpbmRleEFuY2hvckhUTUxUcmFuc2Zvcm0iLCJJbmRleEFuY2hvckhUTUxUcmFuc2Zvcm0iLCJmcm9tUGFnZU51bWJlciIsInB1c2giLCJkaXZpc2lvbkhUTUxUcmFuc2Zvcm0iLCJEaXZpc2lvbkhUTUxUcmFuc2Zvcm0iLCJmcm9tRGl2aXNpb25IVE1MTm9kZSIsImZvb3Rub3RlSFRNTE5vZGVzIiwiZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZSIsImZvb3Rub3RlTGlua0hUTUxOb2RlcyIsImZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlIiwiZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMiLCJudW1iZXIiLCJmb290bm90ZUxpbmtIVE1MTm9kZSIsImlkZW50aWZpZXIiLCJmb290bm90ZUhUTUxOb2RlIiwiaWRlbnRpZmllck1hdGNoZXMiLCJtYXRjaElkZW50aWZpZXIiLCJwYXJhZ3JhcGhIVE1MTm9kZSIsImdldFBhcmFncmFwaEhUTUxOb2RlIiwiZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybSIsIkZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0iLCJmcm9tUGFyYWdyYXBoSFRNTE5PZGVBbmRJZGVudGlmaWVyIiwic2V0TnVtYmVyIiwicmVzZXROdW1iZXIiLCJGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSIsImZyb21TdGFydEFuZEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zIiwiUGFnZU51bWJlckhUTUxUcmFuc2Zvcm0iLCJhc1N0cmluZyIsInJ1bGVOYW1lIiwic3RyaW5nIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImNoaWxkSFRNTE5vZGVzIiwiZnJvbUNoaWxkSFRNTE5vZGVzIiwidGFnTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFxQnFCQTs7O3lCQW5CVTsyREFFVjtpRUFDVTsrREFDRztrRUFDRTs0REFDQzsrREFDQztnRUFDQzt3QkFFSzt5QkFDOEI7cUJBSXRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEQsSUFBTSxBQUFFQyxVQUFZQyx5QkFBYyxDQUExQkQ7QUFFTyxJQUFBLEFBQU1ELGlDQUFOO2NBQU1BO2FBQUFBLGlCQUNQRyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLGlCQUFpQjtnQ0FEekRQOztnQkFFakIsa0JBRmlCQTtZQUVYRztZQUFXQztZQUFZQztZQUFZQzs7UUFFekMsTUFBS0MsaUJBQWlCLEdBQUdBOzs7a0JBSlJQOztZQU9uQlEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxpQkFBaUI7WUFDL0I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FB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