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
var _line = /*#__PURE__*/ _interop_require_default(require("../../transform/html/line"));
var _footnote = /*#__PURE__*/ _interop_require_default(require("../../transform/html/footnote"));
var _footnoteItem = /*#__PURE__*/ _interop_require_default(require("../../transform/html/footnoteItem"));
var _footnotesList = /*#__PURE__*/ _interop_require_default(require("../../transform/html/footnotesList"));
var _footnotesDirective = /*#__PURE__*/ _interop_require_default(require("../../transform/html/footnotesDirective"));
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
var filter = _necessary.arrayUtilities.filter;
var DivisionHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(DivisionHTMLNode, HTMLNode);
    function DivisionHTMLNode() {
        _class_call_check(this, DivisionHTMLNode);
        return _call_super(this, DivisionHTMLNode, arguments);
    }
    _create_class(DivisionHTMLNode, [
        {
            key: "className",
            value: function className(context) {
                return this.outerNode.className(context);
            }
        },
        {
            key: "resolve",
            value: function resolve(start, context) {
                var footnoteHTMLNodes = this.getFootnoteHTMLNodes(), footnoteHTMLTransforms = footnoteHTMLTransformsFromFootnoteHTMLNodes(footnoteHTMLNodes);
                footnoteHTMLTransforms.forEach(function(footnoteHTMLTransform) {
                    footnoteHTMLTransform.remove();
                });
                var footnotesDirectiveHTMLNode = this.getFootnotesDirectiveHTMLNode();
                if (footnotesDirectiveHTMLNode !== null) {
                    var footnotesDirectiveHTMLTransform = _footnotesDirective.default.fromFootnotesDirectiveHTMLNode(footnotesDirectiveHTMLNode);
                    footnotesDirectiveHTMLTransform.remove();
                    var footnoteHTMLTransformsLength = footnoteHTMLTransforms.length;
                    if (footnoteHTMLTransformsLength === 0) {
                        return;
                    }
                    var node = this, previousStart = start, footnoteLinkHTMLNodes = (0, _html1.footnoteLinkHTMLNodesFromNode)(node);
                    start = filterAndSortFootnoteHTMLTransforms(footnoteHTMLTransforms, footnoteLinkHTMLNodes, start, context);
                    var latestStart = start, lineHTMLTransforms = lineHTMLTransformsFromFootnoteHTMLTransforms(footnoteHTMLTransforms), footnoteItemHTMLTransforms = footnoteItemHTMLTransformsFromLineHTMLTransforms(lineHTMLTransforms);
                    start = previousStart; ///
                    var divisionHTMLNode = this, footnotesListHTMLTransform = _footnotesList.default.fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms);
                    footnotesListHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
                    start = latestStart; ///
                }
                return start;
            }
        },
        {
            key: "getFootnoteHTMLNodes",
            value: function getFootnoteHTMLNodes() {
                var node = this, footnoteHTMLNodes = (0, _html1.footnoteHTMLNodesFromNode)(node);
                return footnoteHTMLNodes;
            }
        },
        {
            key: "getFootnotesDirectiveHTMLNode",
            value: function getFootnotesDirectiveHTMLNode() {
                var node = this, footnotesDirectiveHTMLNode = (0, _html1.footnotesDirectiveHTMLNodeFromNode)(node);
                return footnotesDirectiveHTMLNode;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(DivisionHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(DivisionHTMLNode, outerNode);
            }
        }
    ]);
    return DivisionHTMLNode;
}(_html.default);
_define_property(DivisionHTMLNode, "tagName", "div");
_define_property(DivisionHTMLNode, "className", null);
function filterAndSortFootnoteHTMLTransforms(footnoteHTMLTransforms, footnoteLinkHTMLNodes, start, context) {
    var identifiers = identifiersFromFootnoteLinkHTMLNodes(footnoteLinkHTMLNodes, context);
    filter(footnoteHTMLTransforms, function(footnoteHTMLTransform) {
        var identifier = footnoteHTMLTransform.identifier(context), identifiersIncludesIdentifier = identifiers.includes(identifier);
        if (identifiersIncludesIdentifier) {
            return true;
        }
    });
    footnoteHTMLTransforms.sort(function(footnoteHTMLTransformA, footnoteHTMLTransformsB) {
        var footnoteHTMLTransformAIdentifier = footnoteHTMLTransformA.identifier(context), footnoteHTMLTransformBIdentifier = footnoteHTMLTransformsB.identifier(context), identifierA = footnoteHTMLTransformAIdentifier, identifierB = footnoteHTMLTransformBIdentifier, indexA = identifiers.indexOf(identifierA), indexB = identifiers.indexOf(identifierB), difference = indexA - indexB;
        return difference;
    });
    footnoteHTMLTransforms.forEach(function(footnoteHTMLTransform) {
        var identifier = footnoteHTMLTransform.identifier(context), identifierA = identifier, footnoteLinkHTMLNode = footnoteLinkHTMLNodes.find(function(footnoteLinkHTMLNode) {
            var identifier = footnoteLinkHTMLNode.identifier(context), identifierB = identifier; ///
            if (identifierA === identifierB) {
                return true;
            }
        }), number = start; ///
        footnoteLinkHTMLNode.setNumber(number);
        start++;
    });
    return start;
}
function identifiersFromFootnoteLinkHTMLNodes(footnoteLinkHTMLNodes, context) {
    var identifiers = footnoteLinkHTMLNodes.map(function(footnoteHTMLNode) {
        var identifier = footnoteHTMLNode.identifier(context);
        return identifier;
    });
    return identifiers;
}
function footnoteHTMLTransformsFromFootnoteHTMLNodes(footnoteHTMLNodes) {
    var footnoteHTMLTransforms = footnoteHTMLNodes.map(function(footnoteHTMLNode) {
        var footnoteHTMLTransform = _footnote.default.fromFootnoteHTMLNode(footnoteHTMLNode);
        return footnoteHTMLTransform;
    });
    return footnoteHTMLTransforms;
}
function lineHTMLTransformsFromFootnoteHTMLTransforms(footnoteHTMLTransforms) {
    var lineHTMLTransforms = footnoteHTMLTransforms.map(function(footnoteHTMLTransform) {
        var lineHTMLTransform = _line.default.fromFootnoteHTMLTransform(footnoteHTMLTransform);
        return lineHTMLTransform;
    });
    return lineHTMLTransforms;
}
function footnoteItemHTMLTransformsFromLineHTMLTransforms(lineHTMLTransforms) {
    var footnoteItemHTMLTransforms = lineHTMLTransforms.map(function(lineHTMLTransform) {
        var identifier = null, footnoteItemHTMLTransform = _footnoteItem.default.fromLineTMLTransformAndIdentifier(lineHTMLTransform, identifier);
        return footnoteItemHTMLTransform;
    });
    return footnoteItemHTMLTransforms;
} // getPageNumber() {
 //   let pageNumber = null;
 //
 //   const pageNumberDirectiveMarkdownNode = this.findPageNumberDirectiveMarkdownNode();
 //
 //   if (pageNumberDirectiveMarkdownNode !== null) {
 //     pageNumber = pageNumberDirectiveMarkdownNode.getPageNumber();
 //   }
 //
 //   return pageNumber;
 // }
 //
 // setPageNumber(pageNumber) {
 //   const pageNumberDirectiveMarkdownNode = this.findPageNumberDirectiveMarkdownNode();
 //
 //   if (pageNumberDirectiveMarkdownNode !== null) {
 //     pageNumberDirectiveMarkdownNode.setPageNumber(pageNumber);
 //   }
 // }
 //
 // paginate(markdownNodes, context) {
 //   const footnotesDirectiveDivisionTransform = this.removeDivisionMarkdownNode(FootnotesDirectiveDivisionTransform, context),
 //         pageNumberDirectiveDivisionTransform = this.removeDivisionMarkdownNode(PageNumberDirectiveDivisionTransform, context),
 //         subDivisionTransforms = [
 //           footnotesDirectiveDivisionTransform,
 //           pageNumberDirectiveDivisionTransform
 //         ];
 //
 //   filter(subDivisionTransforms, (subDivisionTransform) => {
 //     if (subDivisionTransform !== null) {
 //       return true;
 //     }
 //   });
 //
 //   const { linesPerPage } = context,
 //         paginatedChildNodes = [];
 //
 //   let { pageNumber } = context,
 //       totalLines = 0;
 //
 //   this.forEachChildNode((childNode) => {
 //     const lines = childNode.lines(context);
 //
 //     if ((totalLines + lines) > linesPerPage) {
 //       paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionTransforms, this.divisionClassName, markdownNodes, pageNumber, context);
 //
 //       pageNumber++;
 //
 //       totalLines = 0;
 //
 //       clear(paginatedChildNodes);
 //     }
 //
 //     const paginatedChildNode = childNode;  ///
 //
 //     paginatedChildNodes.push(paginatedChildNode);
 //
 //     totalLines += lines;
 //   });
 //
 //   if (totalLines > 0) {
 //     paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionTransforms, this.divisionClassName, markdownNodes, pageNumber, context);
 //
 //     pageNumber++;
 //   }
 //
 //   Object.assign(context, {
 //     pageNumber
 //   });
 // }
 //
 // createIndex(divisionMarkdownNodes, context) {
 //   let indexCreated = false;
 //
 //   const indexDirectiveDivisionTransform = this.findDivisionTransform(IndexDirectiveDivisionTransform, context);
 //
 //   if (indexDirectiveDivisionTransform !== null) {
 //     const divisionMarkdownNode = this,  ///
 //           indexTransform = IndexTransform.fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context);
 //
 //     if (indexTransform !== null) {
 //       indexTransform.replaceIndexDirectiveSubdivisionTransform(indexDirectiveDivisionTransform, divisionMarkdownNode, context);
 //
 //       indexCreated = true;
 //     }
 //   }
 //
 //   return indexCreated;
 // }
 //
 // createContents(divisionMarkdownNodes, context) {
 //   let contentsCreated = false;
 //
 //   const contentsDirectiveDivisionTransform = this.findDivisionTransform(ContentsDirectiveDivisionTransform, context);
 //
 //   if (contentsDirectiveDivisionTransform !== null) {
 //     const divisionMarkdownNode = this,  ///
 //           contentsListTransform = ContentsListTransform.fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context);
 //
 //     if (contentsListTransform !== null) {
 //       contentsListTransform.replaceContentsDirectiveSubdivisionTransform(contentsDirectiveDivisionTransform, divisionMarkdownNode, context);
 //
 //       contentsCreated = true;
 //     }
 //   }
 //
 //   return contentsCreated;
 // }
 //
 // prepareFootnotes(footnoteTransformMap, context) {
 //   const footnoteDivisionTransforms = this.removeDivisionMarkdownNodes(FootnoteDivisionTransform, context);
 //
 //   footnoteDivisionTransforms.forEach((footnoteDivisionTransform) => {
 //     const footnoteTransform = FootnoteTransform.fromFootnoteDivisionTransform(footnoteDivisionTransform),
 //           identifier = footnoteDivisionTransform.identifier(context);
 //
 //     footnoteTransformMap[identifier] = footnoteTransform;
 //   });
 // }
 //
 // findPageNumberDirectiveMarkdownNode() {
 //   let pageNumberDirectiveMarkdownNode = null;
 //
 //   const subDivisionMarkdownNodes = this.findDivisionMarkdownNodes();
 //
 //   subDivisionMarkdownNodes.some((subDivisionMarkdownNode) => {
 //     const node = subDivisionMarkdownNode; ///
 //
 //     pageNumberDirectiveMarkdownNode = pageNumberDirectiveMarkdownNodeFromNode(node);
 //
 //     if (pageNumberDirectiveMarkdownNode !== null) {
 //       return true;
 //     }
 //   });
 //
 //   return pageNumberDirectiveMarkdownNode;
 // }
 // function paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionTransforms, divisionClassName, markdownNodes, pageNumber, context) {
 //   let markdownNode;
 //
 //   const indexAnchorTransform = IndexAnchorTransform.fromPageNumber(pageNumber, context),
 //         divisionMarkdownNode = DivisionMarkdownNode.fromPaginatedChildNodesDivisionTransformsAndDivisionClassName(paginatedChildNodes, subDivisionTransforms, divisionClassName, context),
 //         anchorMarkdownNode = indexAnchorTransform.getAnchorMarkdownNode();
 //
 //   divisionMarkdownNode.setPageNumber(pageNumber);
 //
 //   markdownNode = anchorMarkdownNode;  ///
 //
 //   markdownNodes.push(markdownNode);
 //
 //   markdownNode = divisionMarkdownNode; ///
 //
 //   markdownNodes.push(markdownNode);
 // }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuaW1wb3J0IExpbmVIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9saW5lXCI7XG5pbXBvcnQgRm9vdG5vdGVIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9mb290bm90ZVwiO1xuaW1wb3J0IEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2Zvb3Rub3RlSXRlbVwiO1xuaW1wb3J0IEZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9mb290bm90ZXNMaXN0XCI7XG5pbXBvcnQgRm9vdG5vdGVzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvZm9vdG5vdGVzRGlyZWN0aXZlXCI7XG5cbmltcG9ydCB7IGZvb3Rub3RlSFRNTE5vZGVzRnJvbU5vZGUsIGZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlLCBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9odG1sXCI7XG5cbmNvbnN0IHsgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25IVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgY2xhc3NOYW1lKGNvbnRleHQpIHsgcmV0dXJuIHRoaXMub3V0ZXJOb2RlLmNsYXNzTmFtZShjb250ZXh0KTsgfVxuXG4gIHJlc29sdmUoc3RhcnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmb290bm90ZUhUTUxOb2RlcyA9IHRoaXMuZ2V0Rm9vdG5vdGVIVE1MTm9kZXMoKSxcbiAgICAgICAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zID0gZm9vdG5vdGVIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUhUTUxOb2Rlcyhmb290bm90ZUhUTUxOb2Rlcyk7XG5cbiAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zLmZvckVhY2goKGZvb3Rub3RlSFRNTFRyYW5zZm9ybSkgPT4ge1xuICAgICAgZm9vdG5vdGVIVE1MVHJhbnNmb3JtLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgPSB0aGlzLmdldEZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlKCk7XG5cbiAgICBpZiAoZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0gPSBGb290bm90ZXNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtLmZyb21Gb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZShmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSk7XG5cbiAgICAgIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0ucmVtb3ZlKCk7XG5cbiAgICAgIGNvbnN0IGZvb3Rub3RlSFRNTFRyYW5zZm9ybXNMZW5ndGggPSBmb290bm90ZUhUTUxUcmFuc2Zvcm1zLmxlbmd0aDtcblxuICAgICAgaWYgKGZvb3Rub3RlSFRNTFRyYW5zZm9ybXNMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgcHJldmlvdXNTdGFydCA9IHN0YXJ0LCAgLy8vXG4gICAgICAgICAgICBmb290bm90ZUxpbmtIVE1MTm9kZXMgPSBmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgICAgc3RhcnQgPSBmaWx0ZXJBbmRTb3J0Rm9vdG5vdGVIVE1MVHJhbnNmb3Jtcyhmb290bm90ZUhUTUxUcmFuc2Zvcm1zLCBmb290bm90ZUxpbmtIVE1MTm9kZXMsIHN0YXJ0LCBjb250ZXh0KTtcblxuICAgICAgY29uc3QgbGF0ZXN0U3RhcnQgPSBzdGFydCwgIC8vL1xuICAgICAgICAgICAgbGluZUhUTUxUcmFuc2Zvcm1zID0gbGluZUhUTUxUcmFuc2Zvcm1zRnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybXMoZm9vdG5vdGVIVE1MVHJhbnNmb3JtcyksXG4gICAgICAgICAgICBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyA9IGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zRnJvbUxpbmVIVE1MVHJhbnNmb3JtcyhsaW5lSFRNTFRyYW5zZm9ybXMpO1xuXG4gICAgICBzdGFydCA9IHByZXZpb3VzU3RhcnQ7ICAvLy9cblxuICAgICAgY29uc3QgZGl2aXNpb25IVE1MTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIGZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtID0gRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0uZnJvbVN0YXJ0QW5kRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMoc3RhcnQsIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zKTtcblxuICAgICAgZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0uYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlKGRpdmlzaW9uSFRNTE5vZGUpO1xuXG4gICAgICBzdGFydCA9IGxhdGVzdFN0YXJ0OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXJ0O1xuICB9XG5cbiAgZ2V0Rm9vdG5vdGVIVE1MTm9kZXMoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmb290bm90ZUhUTUxOb2RlcyA9IGZvb3Rub3RlSFRNTE5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVIVE1MTm9kZXM7XG4gIH1cblxuICBnZXRGb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlID0gZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKVxuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBudWxsO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKERpdmlzaW9uSFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKERpdmlzaW9uSFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cblxuZnVuY3Rpb24gZmlsdGVyQW5kU29ydEZvb3Rub3RlSFRNTFRyYW5zZm9ybXMoZm9vdG5vdGVIVE1MVHJhbnNmb3JtcywgZm9vdG5vdGVMaW5rSFRNTE5vZGVzLCBzdGFydCwgY29udGV4dCkge1xuICBjb25zdCBpZGVudGlmaWVycyA9IGlkZW50aWZpZXJzRnJvbUZvb3Rub3RlTGlua0hUTUxOb2Rlcyhmb290bm90ZUxpbmtIVE1MTm9kZXMsIGNvbnRleHQpO1xuXG4gIGZpbHRlcihmb290bm90ZUhUTUxUcmFuc2Zvcm1zLCAoZm9vdG5vdGVIVE1MVHJhbnNmb3JtKSA9PiB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IGZvb3Rub3RlSFRNTFRyYW5zZm9ybS5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgIGlkZW50aWZpZXJzSW5jbHVkZXNJZGVudGlmaWVyID0gaWRlbnRpZmllcnMuaW5jbHVkZXMoaWRlbnRpZmllcik7XG5cbiAgICBpZiAoaWRlbnRpZmllcnNJbmNsdWRlc0lkZW50aWZpZXIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgZm9vdG5vdGVIVE1MVHJhbnNmb3Jtcy5zb3J0KChmb290bm90ZUhUTUxUcmFuc2Zvcm1BLCBmb290bm90ZUhUTUxUcmFuc2Zvcm1zQikgPT4ge1xuICAgIGNvbnN0IGZvb3Rub3RlSFRNTFRyYW5zZm9ybUFJZGVudGlmaWVyID0gZm9vdG5vdGVIVE1MVHJhbnNmb3JtQS5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgIGZvb3Rub3RlSFRNTFRyYW5zZm9ybUJJZGVudGlmaWVyID0gZm9vdG5vdGVIVE1MVHJhbnNmb3Jtc0IuaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICBpZGVudGlmaWVyQSA9IGZvb3Rub3RlSFRNTFRyYW5zZm9ybUFJZGVudGlmaWVyLCAvLy9cbiAgICAgICAgICBpZGVudGlmaWVyQiA9IGZvb3Rub3RlSFRNTFRyYW5zZm9ybUJJZGVudGlmaWVyLCAvLy9cbiAgICAgICAgICBpbmRleEEgPSBpZGVudGlmaWVycy5pbmRleE9mKGlkZW50aWZpZXJBKSxcbiAgICAgICAgICBpbmRleEIgPSBpZGVudGlmaWVycy5pbmRleE9mKGlkZW50aWZpZXJCKSxcbiAgICAgICAgICBkaWZmZXJlbmNlID0gKGluZGV4QSAtIGluZGV4Qik7XG5cbiAgICByZXR1cm4gZGlmZmVyZW5jZTtcbiAgfSk7XG5cbiAgZm9vdG5vdGVIVE1MVHJhbnNmb3Jtcy5mb3JFYWNoKChmb290bm90ZUhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gZm9vdG5vdGVIVE1MVHJhbnNmb3JtLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgaWRlbnRpZmllckEgPSBpZGVudGlmaWVyLCAvLy9cbiAgICAgICAgICBmb290bm90ZUxpbmtIVE1MTm9kZSA9IGZvb3Rub3RlTGlua0hUTUxOb2Rlcy5maW5kKChmb290bm90ZUxpbmtIVE1MTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWRlbnRpZmllciA9IGZvb3Rub3RlTGlua0hUTUxOb2RlLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgICAgICAgICBpZGVudGlmaWVyQiA9IGlkZW50aWZpZXI7IC8vL1xuXG4gICAgICAgICAgICBpZiAoaWRlbnRpZmllckEgPT09IGlkZW50aWZpZXJCKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG51bWJlciA9IHN0YXJ0OyAvLy9cblxuICAgIGZvb3Rub3RlTGlua0hUTUxOb2RlLnNldE51bWJlcihudW1iZXIpO1xuXG4gICAgc3RhcnQrKztcbiAgfSk7XG5cbiAgcmV0dXJuIHN0YXJ0O1xufVxuXG5mdW5jdGlvbiBpZGVudGlmaWVyc0Zyb21Gb290bm90ZUxpbmtIVE1MTm9kZXMoZm9vdG5vdGVMaW5rSFRNTE5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGlkZW50aWZpZXJzID0gZm9vdG5vdGVMaW5rSFRNTE5vZGVzLm1hcCgoZm9vdG5vdGVIVE1MTm9kZSkgPT4ge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBmb290bm90ZUhUTUxOb2RlLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICByZXR1cm4gaWRlbnRpZmllcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBmb290bm90ZUhUTUxUcmFuc2Zvcm1zRnJvbUZvb3Rub3RlSFRNTE5vZGVzKGZvb3Rub3RlSFRNTE5vZGVzKSB7XG4gIGNvbnN0IGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMgPSBmb290bm90ZUhUTUxOb2Rlcy5tYXAoKGZvb3Rub3RlSFRNTE5vZGUpID0+IHtcbiAgICBjb25zdCBmb290bm90ZUhUTUxUcmFuc2Zvcm0gPSBGb290bm90ZUhUTUxUcmFuc2Zvcm0uZnJvbUZvb3Rub3RlSFRNTE5vZGUoZm9vdG5vdGVIVE1MTm9kZSk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVIVE1MVHJhbnNmb3JtO1xuICB9KTtcblxuICByZXR1cm4gZm9vdG5vdGVIVE1MVHJhbnNmb3Jtcztcbn1cblxuZnVuY3Rpb24gbGluZUhUTUxUcmFuc2Zvcm1zRnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybXMoZm9vdG5vdGVIVE1MVHJhbnNmb3Jtcykge1xuICBjb25zdCBsaW5lSFRNTFRyYW5zZm9ybXMgPSBmb290bm90ZUhUTUxUcmFuc2Zvcm1zLm1hcCgoZm9vdG5vdGVIVE1MVHJhbnNmb3JtKSA9PiB7XG4gICAgY29uc3QgbGluZUhUTUxUcmFuc2Zvcm0gPSBMaW5lSFRNTFRyYW5zZm9ybS5mcm9tRm9vdG5vdGVIVE1MVHJhbnNmb3JtKGZvb3Rub3RlSFRNTFRyYW5zZm9ybSk7XG5cbiAgICByZXR1cm4gbGluZUhUTUxUcmFuc2Zvcm07XG4gIH0pO1xuXG4gIHJldHVybiBsaW5lSFRNTFRyYW5zZm9ybXM7XG59XG5cbmZ1bmN0aW9uIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zRnJvbUxpbmVIVE1MVHJhbnNmb3JtcyhsaW5lSFRNTFRyYW5zZm9ybXMpIHtcbiAgY29uc3QgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMgPSBsaW5lSFRNTFRyYW5zZm9ybXMubWFwKChsaW5lSFRNTFRyYW5zZm9ybSkgPT4ge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBudWxsLFxuICAgICAgICAgIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0gPSBGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtLmZyb21MaW5lVE1MVHJhbnNmb3JtQW5kSWRlbnRpZmllcihsaW5lSFRNTFRyYW5zZm9ybSwgaWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zO1xufVxuXG4vLyBnZXRQYWdlTnVtYmVyKCkge1xuLy8gICBsZXQgcGFnZU51bWJlciA9IG51bGw7XG4vL1xuLy8gICBjb25zdCBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gdGhpcy5maW5kUGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSgpO1xuLy9cbi8vICAgaWYgKHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbi8vICAgICBwYWdlTnVtYmVyID0gcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZS5nZXRQYWdlTnVtYmVyKCk7XG4vLyAgIH1cbi8vXG4vLyAgIHJldHVybiBwYWdlTnVtYmVyO1xuLy8gfVxuLy9cbi8vIHNldFBhZ2VOdW1iZXIocGFnZU51bWJlcikge1xuLy8gICBjb25zdCBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gdGhpcy5maW5kUGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSgpO1xuLy9cbi8vICAgaWYgKHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbi8vICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlLnNldFBhZ2VOdW1iZXIocGFnZU51bWJlcik7XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyBwYWdpbmF0ZShtYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4vLyAgIGNvbnN0IGZvb3Rub3Rlc0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtID0gdGhpcy5yZW1vdmVEaXZpc2lvbk1hcmtkb3duTm9kZShGb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCksXG4vLyAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSA9IHRoaXMucmVtb3ZlRGl2aXNpb25NYXJrZG93bk5vZGUoUGFnZU51bWJlckRpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KSxcbi8vICAgICAgICAgc3ViRGl2aXNpb25UcmFuc2Zvcm1zID0gW1xuLy8gICAgICAgICAgIGZvb3Rub3Rlc0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLFxuLy8gICAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybVxuLy8gICAgICAgICBdO1xuLy9cbi8vICAgZmlsdGVyKHN1YkRpdmlzaW9uVHJhbnNmb3JtcywgKHN1YkRpdmlzaW9uVHJhbnNmb3JtKSA9PiB7XG4vLyAgICAgaWYgKHN1YkRpdmlzaW9uVHJhbnNmb3JtICE9PSBudWxsKSB7XG4vLyAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICB9XG4vLyAgIH0pO1xuLy9cbi8vICAgY29uc3QgeyBsaW5lc1BlclBhZ2UgfSA9IGNvbnRleHQsXG4vLyAgICAgICAgIHBhZ2luYXRlZENoaWxkTm9kZXMgPSBbXTtcbi8vXG4vLyAgIGxldCB7IHBhZ2VOdW1iZXIgfSA9IGNvbnRleHQsXG4vLyAgICAgICB0b3RhbExpbmVzID0gMDtcbi8vXG4vLyAgIHRoaXMuZm9yRWFjaENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4vLyAgICAgY29uc3QgbGluZXMgPSBjaGlsZE5vZGUubGluZXMoY29udGV4dCk7XG4vL1xuLy8gICAgIGlmICgodG90YWxMaW5lcyArIGxpbmVzKSA+IGxpbmVzUGVyUGFnZSkge1xuLy8gICAgICAgcGFnaW5hdGVEaXZpc2lvbk1hcmtkb3duTm9kZShwYWdpbmF0ZWRDaGlsZE5vZGVzLCBzdWJEaXZpc2lvblRyYW5zZm9ybXMsIHRoaXMuZGl2aXNpb25DbGFzc05hbWUsIG1hcmtkb3duTm9kZXMsIHBhZ2VOdW1iZXIsIGNvbnRleHQpO1xuLy9cbi8vICAgICAgIHBhZ2VOdW1iZXIrKztcbi8vXG4vLyAgICAgICB0b3RhbExpbmVzID0gMDtcbi8vXG4vLyAgICAgICBjbGVhcihwYWdpbmF0ZWRDaGlsZE5vZGVzKTtcbi8vICAgICB9XG4vL1xuLy8gICAgIGNvbnN0IHBhZ2luYXRlZENoaWxkTm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuLy9cbi8vICAgICBwYWdpbmF0ZWRDaGlsZE5vZGVzLnB1c2gocGFnaW5hdGVkQ2hpbGROb2RlKTtcbi8vXG4vLyAgICAgdG90YWxMaW5lcyArPSBsaW5lcztcbi8vICAgfSk7XG4vL1xuLy8gICBpZiAodG90YWxMaW5lcyA+IDApIHtcbi8vICAgICBwYWdpbmF0ZURpdmlzaW9uTWFya2Rvd25Ob2RlKHBhZ2luYXRlZENoaWxkTm9kZXMsIHN1YkRpdmlzaW9uVHJhbnNmb3JtcywgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSwgbWFya2Rvd25Ob2RlcywgcGFnZU51bWJlciwgY29udGV4dCk7XG4vL1xuLy8gICAgIHBhZ2VOdW1iZXIrKztcbi8vICAgfVxuLy9cbi8vICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4vLyAgICAgcGFnZU51bWJlclxuLy8gICB9KTtcbi8vIH1cbi8vXG4vLyBjcmVhdGVJbmRleChkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbi8vICAgbGV0IGluZGV4Q3JlYXRlZCA9IGZhbHNlO1xuLy9cbi8vICAgY29uc3QgaW5kZXhEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSA9IHRoaXMuZmluZERpdmlzaW9uVHJhbnNmb3JtKEluZGV4RGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpO1xuLy9cbi8vICAgaWYgKGluZGV4RGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbi8vICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbi8vICAgICAgICAgICBpbmRleFRyYW5zZm9ybSA9IEluZGV4VHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbi8vXG4vLyAgICAgaWYgKGluZGV4VHJhbnNmb3JtICE9PSBudWxsKSB7XG4vLyAgICAgICBpbmRleFRyYW5zZm9ybS5yZXBsYWNlSW5kZXhEaXJlY3RpdmVTdWJkaXZpc2lvblRyYW5zZm9ybShpbmRleERpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4vL1xuLy8gICAgICAgaW5kZXhDcmVhdGVkID0gdHJ1ZTtcbi8vICAgICB9XG4vLyAgIH1cbi8vXG4vLyAgIHJldHVybiBpbmRleENyZWF0ZWQ7XG4vLyB9XG4vL1xuLy8gY3JlYXRlQ29udGVudHMoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4vLyAgIGxldCBjb250ZW50c0NyZWF0ZWQgPSBmYWxzZTtcbi8vXG4vLyAgIGNvbnN0IGNvbnRlbnRzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gPSB0aGlzLmZpbmREaXZpc2lvblRyYW5zZm9ybShDb250ZW50c0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KTtcbi8vXG4vLyAgIGlmIChjb250ZW50c0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtICE9PSBudWxsKSB7XG4vLyAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4vLyAgICAgICAgICAgY29udGVudHNMaXN0VHJhbnNmb3JtID0gQ29udGVudHNMaXN0VHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbi8vXG4vLyAgICAgaWYgKGNvbnRlbnRzTGlzdFRyYW5zZm9ybSAhPT0gbnVsbCkge1xuLy8gICAgICAgY29udGVudHNMaXN0VHJhbnNmb3JtLnJlcGxhY2VDb250ZW50c0RpcmVjdGl2ZVN1YmRpdmlzaW9uVHJhbnNmb3JtKGNvbnRlbnRzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbi8vXG4vLyAgICAgICBjb250ZW50c0NyZWF0ZWQgPSB0cnVlO1xuLy8gICAgIH1cbi8vICAgfVxuLy9cbi8vICAgcmV0dXJuIGNvbnRlbnRzQ3JlYXRlZDtcbi8vIH1cbi8vXG4vLyBwcmVwYXJlRm9vdG5vdGVzKGZvb3Rub3RlVHJhbnNmb3JtTWFwLCBjb250ZXh0KSB7XG4vLyAgIGNvbnN0IGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm1zID0gdGhpcy5yZW1vdmVEaXZpc2lvbk1hcmtkb3duTm9kZXMoRm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCk7XG4vL1xuLy8gICBmb290bm90ZURpdmlzaW9uVHJhbnNmb3Jtcy5mb3JFYWNoKChmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtKSA9PiB7XG4vLyAgICAgY29uc3QgZm9vdG5vdGVUcmFuc2Zvcm0gPSBGb290bm90ZVRyYW5zZm9ybS5mcm9tRm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybShmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtKSxcbi8vICAgICAgICAgICBpZGVudGlmaWVyID0gZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybS5pZGVudGlmaWVyKGNvbnRleHQpO1xuLy9cbi8vICAgICBmb290bm90ZVRyYW5zZm9ybU1hcFtpZGVudGlmaWVyXSA9IGZvb3Rub3RlVHJhbnNmb3JtO1xuLy8gICB9KTtcbi8vIH1cbi8vXG4vLyBmaW5kUGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSgpIHtcbi8vICAgbGV0IHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBudWxsO1xuLy9cbi8vICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gdGhpcy5maW5kRGl2aXNpb25NYXJrZG93bk5vZGVzKCk7XG4vL1xuLy8gICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMuc29tZSgoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbi8vICAgICBjb25zdCBub2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGU7IC8vL1xuLy9cbi8vICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpO1xuLy9cbi8vICAgICBpZiAocGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuLy8gICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgfVxuLy8gICB9KTtcbi8vXG4vLyAgIHJldHVybiBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBwYWdpbmF0ZURpdmlzaW9uTWFya2Rvd25Ob2RlKHBhZ2luYXRlZENoaWxkTm9kZXMsIHN1YkRpdmlzaW9uVHJhbnNmb3JtcywgZGl2aXNpb25DbGFzc05hbWUsIG1hcmtkb3duTm9kZXMsIHBhZ2VOdW1iZXIsIGNvbnRleHQpIHtcbi8vICAgbGV0IG1hcmtkb3duTm9kZTtcbi8vXG4vLyAgIGNvbnN0IGluZGV4QW5jaG9yVHJhbnNmb3JtID0gSW5kZXhBbmNob3JUcmFuc2Zvcm0uZnJvbVBhZ2VOdW1iZXIocGFnZU51bWJlciwgY29udGV4dCksXG4vLyAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gRGl2aXNpb25NYXJrZG93bk5vZGUuZnJvbVBhZ2luYXRlZENoaWxkTm9kZXNEaXZpc2lvblRyYW5zZm9ybXNBbmREaXZpc2lvbkNsYXNzTmFtZShwYWdpbmF0ZWRDaGlsZE5vZGVzLCBzdWJEaXZpc2lvblRyYW5zZm9ybXMsIGRpdmlzaW9uQ2xhc3NOYW1lLCBjb250ZXh0KSxcbi8vICAgICAgICAgYW5jaG9yTWFya2Rvd25Ob2RlID0gaW5kZXhBbmNob3JUcmFuc2Zvcm0uZ2V0QW5jaG9yTWFya2Rvd25Ob2RlKCk7XG4vL1xuLy8gICBkaXZpc2lvbk1hcmtkb3duTm9kZS5zZXRQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpO1xuLy9cbi8vICAgbWFya2Rvd25Ob2RlID0gYW5jaG9yTWFya2Rvd25Ob2RlOyAgLy8vXG4vL1xuLy8gICBtYXJrZG93bk5vZGVzLnB1c2gobWFya2Rvd25Ob2RlKTtcbi8vXG4vLyAgIG1hcmtkb3duTm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAvLy9cbi8vXG4vLyAgIG1hcmtkb3duTm9kZXMucHVzaChtYXJrZG93bk5vZGUpO1xuLy8gfVxuIl0sIm5hbWVzIjpbIkRpdmlzaW9uSFRNTE5vZGUiLCJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsImNsYXNzTmFtZSIsImNvbnRleHQiLCJvdXRlck5vZGUiLCJyZXNvbHZlIiwic3RhcnQiLCJmb290bm90ZUhUTUxOb2RlcyIsImdldEZvb3Rub3RlSFRNTE5vZGVzIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3JtcyIsImZvb3Rub3RlSFRNTFRyYW5zZm9ybXNGcm9tRm9vdG5vdGVIVE1MTm9kZXMiLCJmb3JFYWNoIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3JtIiwicmVtb3ZlIiwiZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUiLCJnZXRGb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSIsImZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0iLCJGb290bm90ZXNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtIiwiZnJvbUZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3Jtc0xlbmd0aCIsImxlbmd0aCIsIm5vZGUiLCJwcmV2aW91c1N0YXJ0IiwiZm9vdG5vdGVMaW5rSFRNTE5vZGVzIiwiZm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUiLCJmaWx0ZXJBbmRTb3J0Rm9vdG5vdGVIVE1MVHJhbnNmb3JtcyIsImxhdGVzdFN0YXJ0IiwibGluZUhUTUxUcmFuc2Zvcm1zIiwibGluZUhUTUxUcmFuc2Zvcm1zRnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybXMiLCJmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyIsImZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zRnJvbUxpbmVIVE1MVHJhbnNmb3JtcyIsImRpdmlzaW9uSFRNTE5vZGUiLCJmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSIsIkZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIiwiZnJvbVN0YXJ0QW5kRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMiLCJhcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUiLCJmb290bm90ZUhUTUxOb2Rlc0Zyb21Ob2RlIiwiZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSIsImZyb21Ob3RoaW5nIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwidGFnTmFtZSIsImlkZW50aWZpZXJzIiwiaWRlbnRpZmllcnNGcm9tRm9vdG5vdGVMaW5rSFRNTE5vZGVzIiwiaWRlbnRpZmllciIsImlkZW50aWZpZXJzSW5jbHVkZXNJZGVudGlmaWVyIiwiaW5jbHVkZXMiLCJzb3J0IiwiZm9vdG5vdGVIVE1MVHJhbnNmb3JtQSIsImZvb3Rub3RlSFRNTFRyYW5zZm9ybXNCIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3JtQUlkZW50aWZpZXIiLCJmb290bm90ZUhUTUxUcmFuc2Zvcm1CSWRlbnRpZmllciIsImlkZW50aWZpZXJBIiwiaWRlbnRpZmllckIiLCJpbmRleEEiLCJpbmRleE9mIiwiaW5kZXhCIiwiZGlmZmVyZW5jZSIsImZvb3Rub3RlTGlua0hUTUxOb2RlIiwiZmluZCIsIm51bWJlciIsInNldE51bWJlciIsIm1hcCIsImZvb3Rub3RlSFRNTE5vZGUiLCJGb290bm90ZUhUTUxUcmFuc2Zvcm0iLCJmcm9tRm9vdG5vdGVIVE1MTm9kZSIsImxpbmVIVE1MVHJhbnNmb3JtIiwiTGluZUhUTUxUcmFuc2Zvcm0iLCJmcm9tRm9vdG5vdGVIVE1MVHJhbnNmb3JtIiwiZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybSIsIkZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0iLCJmcm9tTGluZVRNTFRyYW5zZm9ybUFuZElkZW50aWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZXFCQTs7O3lCQWJVOzJEQUVWOzJEQUNTOytEQUNJO21FQUNJO29FQUNDO3lFQUNLO3FCQUVpRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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