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
                if (footnotesDirectiveHTMLNode === null) {
                    return;
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuaW1wb3J0IExpbmVIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9saW5lXCI7XG5pbXBvcnQgRm9vdG5vdGVIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9mb290bm90ZVwiO1xuaW1wb3J0IEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2Zvb3Rub3RlSXRlbVwiO1xuaW1wb3J0IEZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9mb290bm90ZXNMaXN0XCI7XG5pbXBvcnQgRm9vdG5vdGVzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvZm9vdG5vdGVzRGlyZWN0aXZlXCI7XG5cbmltcG9ydCB7IGZvb3Rub3RlSFRNTE5vZGVzRnJvbU5vZGUsIGZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlLCBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9odG1sXCI7XG5cbmNvbnN0IHsgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25IVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgY2xhc3NOYW1lKGNvbnRleHQpIHsgcmV0dXJuIHRoaXMub3V0ZXJOb2RlLmNsYXNzTmFtZShjb250ZXh0KTsgfVxuXG4gIHJlc29sdmUoc3RhcnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmb290bm90ZUhUTUxOb2RlcyA9IHRoaXMuZ2V0Rm9vdG5vdGVIVE1MTm9kZXMoKSxcbiAgICAgICAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zID0gZm9vdG5vdGVIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUhUTUxOb2Rlcyhmb290bm90ZUhUTUxOb2Rlcyk7XG5cbiAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zLmZvckVhY2goKGZvb3Rub3RlSFRNTFRyYW5zZm9ybSkgPT4ge1xuICAgICAgZm9vdG5vdGVIVE1MVHJhbnNmb3JtLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgPSB0aGlzLmdldEZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlKCk7XG5cbiAgICBpZiAoZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmb290bm90ZXNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtID0gRm9vdG5vdGVzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybS5mcm9tRm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUoZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUpO1xuXG4gICAgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybS5yZW1vdmUoKTtcblxuICAgIGNvbnN0IGZvb3Rub3RlSFRNTFRyYW5zZm9ybXNMZW5ndGggPSBmb290bm90ZUhUTUxUcmFuc2Zvcm1zLmxlbmd0aDtcblxuICAgIGlmIChmb290bm90ZUhUTUxUcmFuc2Zvcm1zTGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBwcmV2aW91c1N0YXJ0ID0gc3RhcnQsICAvLy9cbiAgICAgICAgICBmb290bm90ZUxpbmtIVE1MTm9kZXMgPSBmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIHN0YXJ0ID0gZmlsdGVyQW5kU29ydEZvb3Rub3RlSFRNTFRyYW5zZm9ybXMoZm9vdG5vdGVIVE1MVHJhbnNmb3JtcywgZm9vdG5vdGVMaW5rSFRNTE5vZGVzLCBzdGFydCwgY29udGV4dCk7XG5cbiAgICBjb25zdCBsYXRlc3RTdGFydCA9IHN0YXJ0LCAgLy8vXG4gICAgICAgICAgbGluZUhUTUxUcmFuc2Zvcm1zID0gbGluZUhUTUxUcmFuc2Zvcm1zRnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybXMoZm9vdG5vdGVIVE1MVHJhbnNmb3JtcyksXG4gICAgICAgICAgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMgPSBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21MaW5lSFRNTFRyYW5zZm9ybXMobGluZUhUTUxUcmFuc2Zvcm1zKTtcblxuICAgIHN0YXJ0ID0gcHJldmlvdXNTdGFydDsgIC8vL1xuXG4gICAgY29uc3QgZGl2aXNpb25IVE1MTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSA9IEZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtLmZyb21TdGFydEFuZEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zKHN0YXJ0LCBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtcyk7XG5cbiAgICBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybS5hcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSk7XG5cbiAgICBzdGFydCA9IGxhdGVzdFN0YXJ0OyAgLy8vXG5cbiAgICByZXR1cm4gc3RhcnQ7XG4gIH1cblxuICBnZXRGb290bm90ZUhUTUxOb2RlcygpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3RlSFRNTE5vZGVzID0gZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIHJldHVybiBmb290bm90ZUhUTUxOb2RlcztcbiAgfVxuXG4gIGdldEZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgPSBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlKG5vZGUpXG5cbiAgICByZXR1cm4gZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoRGl2aXNpb25IVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoRGl2aXNpb25IVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJBbmRTb3J0Rm9vdG5vdGVIVE1MVHJhbnNmb3Jtcyhmb290bm90ZUhUTUxUcmFuc2Zvcm1zLCBmb290bm90ZUxpbmtIVE1MTm9kZXMsIHN0YXJ0LCBjb250ZXh0KSB7XG4gIGNvbnN0IGlkZW50aWZpZXJzID0gaWRlbnRpZmllcnNGcm9tRm9vdG5vdGVMaW5rSFRNTE5vZGVzKGZvb3Rub3RlTGlua0hUTUxOb2RlcywgY29udGV4dCk7XG5cbiAgZmlsdGVyKGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMsIChmb290bm90ZUhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gZm9vdG5vdGVIVE1MVHJhbnNmb3JtLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgaWRlbnRpZmllcnNJbmNsdWRlc0lkZW50aWZpZXIgPSBpZGVudGlmaWVycy5pbmNsdWRlcyhpZGVudGlmaWVyKTtcblxuICAgIGlmIChpZGVudGlmaWVyc0luY2x1ZGVzSWRlbnRpZmllcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zLnNvcnQoKGZvb3Rub3RlSFRNTFRyYW5zZm9ybUEsIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXNCKSA9PiB7XG4gICAgY29uc3QgZm9vdG5vdGVIVE1MVHJhbnNmb3JtQUlkZW50aWZpZXIgPSBmb290bm90ZUhUTUxUcmFuc2Zvcm1BLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgZm9vdG5vdGVIVE1MVHJhbnNmb3JtQklkZW50aWZpZXIgPSBmb290bm90ZUhUTUxUcmFuc2Zvcm1zQi5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgIGlkZW50aWZpZXJBID0gZm9vdG5vdGVIVE1MVHJhbnNmb3JtQUlkZW50aWZpZXIsIC8vL1xuICAgICAgICAgIGlkZW50aWZpZXJCID0gZm9vdG5vdGVIVE1MVHJhbnNmb3JtQklkZW50aWZpZXIsIC8vL1xuICAgICAgICAgIGluZGV4QSA9IGlkZW50aWZpZXJzLmluZGV4T2YoaWRlbnRpZmllckEpLFxuICAgICAgICAgIGluZGV4QiA9IGlkZW50aWZpZXJzLmluZGV4T2YoaWRlbnRpZmllckIpLFxuICAgICAgICAgIGRpZmZlcmVuY2UgPSAoaW5kZXhBIC0gaW5kZXhCKTtcblxuICAgIHJldHVybiBkaWZmZXJlbmNlO1xuICB9KTtcblxuICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zLmZvckVhY2goKGZvb3Rub3RlSFRNTFRyYW5zZm9ybSkgPT4ge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBmb290bm90ZUhUTUxUcmFuc2Zvcm0uaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICBpZGVudGlmaWVyQSA9IGlkZW50aWZpZXIsIC8vL1xuICAgICAgICAgIGZvb3Rub3RlTGlua0hUTUxOb2RlID0gZm9vdG5vdGVMaW5rSFRNTE5vZGVzLmZpbmQoKGZvb3Rub3RlTGlua0hUTUxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gZm9vdG5vdGVMaW5rSFRNTE5vZGUuaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgIGlkZW50aWZpZXJCID0gaWRlbnRpZmllcjsgLy8vXG5cbiAgICAgICAgICAgIGlmIChpZGVudGlmaWVyQSA9PT0gaWRlbnRpZmllckIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbnVtYmVyID0gc3RhcnQ7IC8vL1xuXG4gICAgZm9vdG5vdGVMaW5rSFRNTE5vZGUuc2V0TnVtYmVyKG51bWJlcik7XG5cbiAgICBzdGFydCsrO1xuICB9KTtcblxuICByZXR1cm4gc3RhcnQ7XG59XG5cbmZ1bmN0aW9uIGlkZW50aWZpZXJzRnJvbUZvb3Rub3RlTGlua0hUTUxOb2Rlcyhmb290bm90ZUxpbmtIVE1MTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgaWRlbnRpZmllcnMgPSBmb290bm90ZUxpbmtIVE1MTm9kZXMubWFwKChmb290bm90ZUhUTUxOb2RlKSA9PiB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IGZvb3Rub3RlSFRNTE5vZGUuaWRlbnRpZmllcihjb250ZXh0KTtcblxuICAgIHJldHVybiBpZGVudGlmaWVyO1xuICB9KTtcblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXNGcm9tRm9vdG5vdGVIVE1MTm9kZXMoZm9vdG5vdGVIVE1MTm9kZXMpIHtcbiAgY29uc3QgZm9vdG5vdGVIVE1MVHJhbnNmb3JtcyA9IGZvb3Rub3RlSFRNTE5vZGVzLm1hcCgoZm9vdG5vdGVIVE1MTm9kZSkgPT4ge1xuICAgIGNvbnN0IGZvb3Rub3RlSFRNTFRyYW5zZm9ybSA9IEZvb3Rub3RlSFRNTFRyYW5zZm9ybS5mcm9tRm9vdG5vdGVIVE1MTm9kZShmb290bm90ZUhUTUxOb2RlKTtcblxuICAgIHJldHVybiBmb290bm90ZUhUTUxUcmFuc2Zvcm07XG4gIH0pO1xuXG4gIHJldHVybiBmb290bm90ZUhUTUxUcmFuc2Zvcm1zO1xufVxuXG5mdW5jdGlvbiBsaW5lSFRNTFRyYW5zZm9ybXNGcm9tRm9vdG5vdGVIVE1MVHJhbnNmb3Jtcyhmb290bm90ZUhUTUxUcmFuc2Zvcm1zKSB7XG4gIGNvbnN0IGxpbmVIVE1MVHJhbnNmb3JtcyA9IGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMubWFwKChmb290bm90ZUhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICBjb25zdCBsaW5lSFRNTFRyYW5zZm9ybSA9IExpbmVIVE1MVHJhbnNmb3JtLmZyb21Gb290bm90ZUhUTUxUcmFuc2Zvcm0oZm9vdG5vdGVIVE1MVHJhbnNmb3JtKTtcblxuICAgIHJldHVybiBsaW5lSFRNTFRyYW5zZm9ybTtcbiAgfSk7XG5cbiAgcmV0dXJuIGxpbmVIVE1MVHJhbnNmb3Jtcztcbn1cblxuZnVuY3Rpb24gZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXNGcm9tTGluZUhUTUxUcmFuc2Zvcm1zKGxpbmVIVE1MVHJhbnNmb3Jtcykge1xuICBjb25zdCBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyA9IGxpbmVIVE1MVHJhbnNmb3Jtcy5tYXAoKGxpbmVIVE1MVHJhbnNmb3JtKSA9PiB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IG51bGwsXG4gICAgICAgICAgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybSA9IEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0uZnJvbUxpbmVUTUxUcmFuc2Zvcm1BbmRJZGVudGlmaWVyKGxpbmVIVE1MVHJhbnNmb3JtLCBpZGVudGlmaWVyKTtcblxuICAgIHJldHVybiBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtO1xuICB9KTtcblxuICByZXR1cm4gZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXM7XG59XG5cbi8vIGdldFBhZ2VOdW1iZXIoKSB7XG4vLyAgIGxldCBwYWdlTnVtYmVyID0gbnVsbDtcbi8vXG4vLyAgIGNvbnN0IHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSB0aGlzLmZpbmRQYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlKCk7XG4vL1xuLy8gICBpZiAocGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuLy8gICAgIHBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlLmdldFBhZ2VOdW1iZXIoKTtcbi8vICAgfVxuLy9cbi8vICAgcmV0dXJuIHBhZ2VOdW1iZXI7XG4vLyB9XG4vL1xuLy8gc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKSB7XG4vLyAgIGNvbnN0IHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSB0aGlzLmZpbmRQYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlKCk7XG4vL1xuLy8gICBpZiAocGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuLy8gICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUuc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIHBhZ2luYXRlKG1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbi8vICAgY29uc3QgZm9vdG5vdGVzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gPSB0aGlzLnJlbW92ZURpdmlzaW9uTWFya2Rvd25Ob2RlKEZvb3Rub3Rlc0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KSxcbi8vICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtID0gdGhpcy5yZW1vdmVEaXZpc2lvbk1hcmtkb3duTm9kZShQYWdlTnVtYmVyRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpLFxuLy8gICAgICAgICBzdWJEaXZpc2lvblRyYW5zZm9ybXMgPSBbXG4vLyAgICAgICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sXG4vLyAgICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtXG4vLyAgICAgICAgIF07XG4vL1xuLy8gICBmaWx0ZXIoc3ViRGl2aXNpb25UcmFuc2Zvcm1zLCAoc3ViRGl2aXNpb25UcmFuc2Zvcm0pID0+IHtcbi8vICAgICBpZiAoc3ViRGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbi8vICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgIH1cbi8vICAgfSk7XG4vL1xuLy8gICBjb25zdCB7IGxpbmVzUGVyUGFnZSB9ID0gY29udGV4dCxcbi8vICAgICAgICAgcGFnaW5hdGVkQ2hpbGROb2RlcyA9IFtdO1xuLy9cbi8vICAgbGV0IHsgcGFnZU51bWJlciB9ID0gY29udGV4dCxcbi8vICAgICAgIHRvdGFsTGluZXMgPSAwO1xuLy9cbi8vICAgdGhpcy5mb3JFYWNoQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbi8vICAgICBjb25zdCBsaW5lcyA9IGNoaWxkTm9kZS5saW5lcyhjb250ZXh0KTtcbi8vXG4vLyAgICAgaWYgKCh0b3RhbExpbmVzICsgbGluZXMpID4gbGluZXNQZXJQYWdlKSB7XG4vLyAgICAgICBwYWdpbmF0ZURpdmlzaW9uTWFya2Rvd25Ob2RlKHBhZ2luYXRlZENoaWxkTm9kZXMsIHN1YkRpdmlzaW9uVHJhbnNmb3JtcywgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSwgbWFya2Rvd25Ob2RlcywgcGFnZU51bWJlciwgY29udGV4dCk7XG4vL1xuLy8gICAgICAgcGFnZU51bWJlcisrO1xuLy9cbi8vICAgICAgIHRvdGFsTGluZXMgPSAwO1xuLy9cbi8vICAgICAgIGNsZWFyKHBhZ2luYXRlZENoaWxkTm9kZXMpO1xuLy8gICAgIH1cbi8vXG4vLyAgICAgY29uc3QgcGFnaW5hdGVkQ2hpbGROb2RlID0gY2hpbGROb2RlOyAgLy8vXG4vL1xuLy8gICAgIHBhZ2luYXRlZENoaWxkTm9kZXMucHVzaChwYWdpbmF0ZWRDaGlsZE5vZGUpO1xuLy9cbi8vICAgICB0b3RhbExpbmVzICs9IGxpbmVzO1xuLy8gICB9KTtcbi8vXG4vLyAgIGlmICh0b3RhbExpbmVzID4gMCkge1xuLy8gICAgIHBhZ2luYXRlRGl2aXNpb25NYXJrZG93bk5vZGUocGFnaW5hdGVkQ2hpbGROb2Rlcywgc3ViRGl2aXNpb25UcmFuc2Zvcm1zLCB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lLCBtYXJrZG93bk5vZGVzLCBwYWdlTnVtYmVyLCBjb250ZXh0KTtcbi8vXG4vLyAgICAgcGFnZU51bWJlcisrO1xuLy8gICB9XG4vL1xuLy8gICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbi8vICAgICBwYWdlTnVtYmVyXG4vLyAgIH0pO1xuLy8gfVxuLy9cbi8vIGNyZWF0ZUluZGV4KGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuLy8gICBsZXQgaW5kZXhDcmVhdGVkID0gZmFsc2U7XG4vL1xuLy8gICBjb25zdCBpbmRleERpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtID0gdGhpcy5maW5kRGl2aXNpb25UcmFuc2Zvcm0oSW5kZXhEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCk7XG4vL1xuLy8gICBpZiAoaW5kZXhEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuLy8gICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuLy8gICAgICAgICAgIGluZGV4VHJhbnNmb3JtID0gSW5kZXhUcmFuc2Zvcm0uZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuLy9cbi8vICAgICBpZiAoaW5kZXhUcmFuc2Zvcm0gIT09IG51bGwpIHtcbi8vICAgICAgIGluZGV4VHJhbnNmb3JtLnJlcGxhY2VJbmRleERpcmVjdGl2ZVN1YmRpdmlzaW9uVHJhbnNmb3JtKGluZGV4RGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbi8vXG4vLyAgICAgICBpbmRleENyZWF0ZWQgPSB0cnVlO1xuLy8gICAgIH1cbi8vICAgfVxuLy9cbi8vICAgcmV0dXJuIGluZGV4Q3JlYXRlZDtcbi8vIH1cbi8vXG4vLyBjcmVhdGVDb250ZW50cyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbi8vICAgbGV0IGNvbnRlbnRzQ3JlYXRlZCA9IGZhbHNlO1xuLy9cbi8vICAgY29uc3QgY29udGVudHNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSA9IHRoaXMuZmluZERpdmlzaW9uVHJhbnNmb3JtKENvbnRlbnRzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpO1xuLy9cbi8vICAgaWYgKGNvbnRlbnRzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbi8vICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbi8vICAgICAgICAgICBjb250ZW50c0xpc3RUcmFuc2Zvcm0gPSBDb250ZW50c0xpc3RUcmFuc2Zvcm0uZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuLy9cbi8vICAgICBpZiAoY29udGVudHNMaXN0VHJhbnNmb3JtICE9PSBudWxsKSB7XG4vLyAgICAgICBjb250ZW50c0xpc3RUcmFuc2Zvcm0ucmVwbGFjZUNvbnRlbnRzRGlyZWN0aXZlU3ViZGl2aXNpb25UcmFuc2Zvcm0oY29udGVudHNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuLy9cbi8vICAgICAgIGNvbnRlbnRzQ3JlYXRlZCA9IHRydWU7XG4vLyAgICAgfVxuLy8gICB9XG4vL1xuLy8gICByZXR1cm4gY29udGVudHNDcmVhdGVkO1xuLy8gfVxuLy9cbi8vIHByZXBhcmVGb290bm90ZXMoZm9vdG5vdGVUcmFuc2Zvcm1NYXAsIGNvbnRleHQpIHtcbi8vICAgY29uc3QgZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybXMgPSB0aGlzLnJlbW92ZURpdmlzaW9uTWFya2Rvd25Ob2RlcyhGb290bm90ZURpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KTtcbi8vXG4vLyAgIGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm1zLmZvckVhY2goKGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0pID0+IHtcbi8vICAgICBjb25zdCBmb290bm90ZVRyYW5zZm9ybSA9IEZvb3Rub3RlVHJhbnNmb3JtLmZyb21Gb290bm90ZURpdmlzaW9uVHJhbnNmb3JtKGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0pLFxuLy8gICAgICAgICAgIGlkZW50aWZpZXIgPSBmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtLmlkZW50aWZpZXIoY29udGV4dCk7XG4vL1xuLy8gICAgIGZvb3Rub3RlVHJhbnNmb3JtTWFwW2lkZW50aWZpZXJdID0gZm9vdG5vdGVUcmFuc2Zvcm07XG4vLyAgIH0pO1xuLy8gfVxuLy9cbi8vIGZpbmRQYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlKCkge1xuLy8gICBsZXQgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IG51bGw7XG4vL1xuLy8gICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmREaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcbi8vXG4vLyAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5zb21lKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuLy8gICAgIGNvbnN0IG5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZTsgLy8vXG4vL1xuLy8gICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSk7XG4vL1xuLy8gICAgIGlmIChwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4vLyAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICB9XG4vLyAgIH0pO1xuLy9cbi8vICAgcmV0dXJuIHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGU7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHBhZ2luYXRlRGl2aXNpb25NYXJrZG93bk5vZGUocGFnaW5hdGVkQ2hpbGROb2Rlcywgc3ViRGl2aXNpb25UcmFuc2Zvcm1zLCBkaXZpc2lvbkNsYXNzTmFtZSwgbWFya2Rvd25Ob2RlcywgcGFnZU51bWJlciwgY29udGV4dCkge1xuLy8gICBsZXQgbWFya2Rvd25Ob2RlO1xuLy9cbi8vICAgY29uc3QgaW5kZXhBbmNob3JUcmFuc2Zvcm0gPSBJbmRleEFuY2hvclRyYW5zZm9ybS5mcm9tUGFnZU51bWJlcihwYWdlTnVtYmVyLCBjb250ZXh0KSxcbi8vICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBEaXZpc2lvbk1hcmtkb3duTm9kZS5mcm9tUGFnaW5hdGVkQ2hpbGROb2Rlc0RpdmlzaW9uVHJhbnNmb3Jtc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2luYXRlZENoaWxkTm9kZXMsIHN1YkRpdmlzaW9uVHJhbnNmb3JtcywgZGl2aXNpb25DbGFzc05hbWUsIGNvbnRleHQpLFxuLy8gICAgICAgICBhbmNob3JNYXJrZG93bk5vZGUgPSBpbmRleEFuY2hvclRyYW5zZm9ybS5nZXRBbmNob3JNYXJrZG93bk5vZGUoKTtcbi8vXG4vLyAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnNldFBhZ2VOdW1iZXIocGFnZU51bWJlcik7XG4vL1xuLy8gICBtYXJrZG93bk5vZGUgPSBhbmNob3JNYXJrZG93bk5vZGU7ICAvLy9cbi8vXG4vLyAgIG1hcmtkb3duTm9kZXMucHVzaChtYXJrZG93bk5vZGUpO1xuLy9cbi8vICAgbWFya2Rvd25Ob2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7IC8vL1xuLy9cbi8vICAgbWFya2Rvd25Ob2Rlcy5wdXNoKG1hcmtkb3duTm9kZSk7XG4vLyB9XG4iXSwibmFtZXMiOlsiRGl2aXNpb25IVE1MTm9kZSIsImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsIm91dGVyTm9kZSIsInJlc29sdmUiLCJzdGFydCIsImZvb3Rub3RlSFRNTE5vZGVzIiwiZ2V0Rm9vdG5vdGVIVE1MTm9kZXMiLCJmb290bm90ZUhUTUxUcmFuc2Zvcm1zIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUhUTUxOb2RlcyIsImZvckVhY2giLCJmb290bm90ZUhUTUxUcmFuc2Zvcm0iLCJyZW1vdmUiLCJmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSIsImdldEZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlIiwiZm9vdG5vdGVzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSIsIkZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0iLCJmcm9tRm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUiLCJmb290bm90ZUhUTUxUcmFuc2Zvcm1zTGVuZ3RoIiwibGVuZ3RoIiwibm9kZSIsInByZXZpb3VzU3RhcnQiLCJmb290bm90ZUxpbmtIVE1MTm9kZXMiLCJmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZSIsImZpbHRlckFuZFNvcnRGb290bm90ZUhUTUxUcmFuc2Zvcm1zIiwibGF0ZXN0U3RhcnQiLCJsaW5lSFRNTFRyYW5zZm9ybXMiLCJsaW5lSFRNTFRyYW5zZm9ybXNGcm9tRm9vdG5vdGVIVE1MVHJhbnNmb3JtcyIsImZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zIiwiZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXNGcm9tTGluZUhUTUxUcmFuc2Zvcm1zIiwiZGl2aXNpb25IVE1MTm9kZSIsImZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIiwiRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0iLCJmcm9tU3RhcnRBbmRGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyIsImFwcGVuZFRvRGl2aXNpb25IVE1MTm9kZSIsImZvb3Rub3RlSFRNTE5vZGVzRnJvbU5vZGUiLCJmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJ0YWdOYW1lIiwiaWRlbnRpZmllcnMiLCJpZGVudGlmaWVyc0Zyb21Gb290bm90ZUxpbmtIVE1MTm9kZXMiLCJpZGVudGlmaWVyIiwiaWRlbnRpZmllcnNJbmNsdWRlc0lkZW50aWZpZXIiLCJpbmNsdWRlcyIsInNvcnQiLCJmb290bm90ZUhUTUxUcmFuc2Zvcm1BIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3Jtc0IiLCJmb290bm90ZUhUTUxUcmFuc2Zvcm1BSWRlbnRpZmllciIsImZvb3Rub3RlSFRNTFRyYW5zZm9ybUJJZGVudGlmaWVyIiwiaWRlbnRpZmllckEiLCJpZGVudGlmaWVyQiIsImluZGV4QSIsImluZGV4T2YiLCJpbmRleEIiLCJkaWZmZXJlbmNlIiwiZm9vdG5vdGVMaW5rSFRNTE5vZGUiLCJmaW5kIiwibnVtYmVyIiwic2V0TnVtYmVyIiwibWFwIiwiZm9vdG5vdGVIVE1MTm9kZSIsIkZvb3Rub3RlSFRNTFRyYW5zZm9ybSIsImZyb21Gb290bm90ZUhUTUxOb2RlIiwibGluZUhUTUxUcmFuc2Zvcm0iLCJMaW5lSFRNTFRyYW5zZm9ybSIsImZyb21Gb290bm90ZUhUTUxUcmFuc2Zvcm0iLCJmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtIiwiRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybSIsImZyb21MaW5lVE1MVHJhbnNmb3JtQW5kSWRlbnRpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFlcUJBOzs7eUJBYlU7MkRBRVY7MkRBQ1M7K0RBQ0k7bUVBQ0k7b0VBQ0M7eUVBQ0s7cUJBRWlFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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