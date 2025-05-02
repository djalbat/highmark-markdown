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
var _line = /*#__PURE__*/ _interop_require_default(require("../../transform/html/line"));
var _footnote = /*#__PURE__*/ _interop_require_default(require("../../transform/html/footnote"));
var _footnotesItem = /*#__PURE__*/ _interop_require_default(require("../../transform/html/footnotesItem"));
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
            value: function resolve(context) {
                var footnoteHTMLNodes = this.getFootnoteHTMLNodes(), footnoteHTMLTransforms = footnoteHTMLNodes.map(function(footnoteHTMLNode) {
                    var footnoteHTMLTransform = _footnote.default.fromFootnoteHTMLNode(footnoteHTMLNode, context);
                    return footnoteHTMLTransform;
                }), footnoteHTMLTransformsLength = footnoteHTMLTransforms.length;
                if (footnoteHTMLTransformsLength === 0) {
                    return;
                }
                var footnotesDirectiveHTMLNode = this.getFootnotesDirectiveHTMLNode();
                if (footnotesDirectiveHTMLNode === null) {
                    return;
                }
                var lineHTMLTransforms = footnoteHTMLTransforms.map(function(footnoteHTMLTransform) {
                    var lineHTMLTransform = _line.default.fromFootnoteHTMLTransform(footnoteHTMLTransform, context);
                    return lineHTMLTransform;
                });
                footnoteHTMLTransforms.forEach(function(footnoteHTMLTransform) {
                // footnoteHTMLTransform.remove(context);
                });
            // const footnotesItemHTMLTransforms = lineHTMLTransforms.map((lineHTMLTransform) => {
            //         const identifier = null,
            //               footnotesItemHTMLTransform = FootnotesItemHTMLTransform.fromParagraphHTMLTransformAndIdentifier(lineHTMLTransform, identifier, context);
            //
            //         return footnotesItemHTMLTransform;
            //       });
            // FootnotesListHTMLTransform.fromFootnotesItemHTMLTransforms(footnotesItemHTMLTransforms, context);
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
 // createFootnotes(footnoteTransformMap, context) {
 //   const footnotesDirectiveDivisionTransform = this.findDivisionTransform(FootnotesDirectiveDivisionTransform, context);
 //
 //   if (footnotesDirectiveDivisionTransform !== null) {
 //     const divisionMarkdownNode = this,  ///
 //           footnotesListDivisionTransform = FootnotesListTransform.fromDivisionMarkdownNodeAndFootnoteTransformMap(divisionMarkdownNode, footnoteTransformMap, context);
 //
 //     if (footnotesListDivisionTransform !== null) {
 //       footnotesListDivisionTransform.replaceFootnotesDirectiveDivisionTransform(footnotesDirectiveDivisionTransform, divisionMarkdownNode, context);
 //     }
 //
 //     renumberFootnoteLinkMarkdownNodes(divisionMarkdownNode, footnoteTransformMap, context);
 //   }
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
 // findDivisionTransform(DivisionTransform, context) {
 //   let subDivisionTransform = null;
 //
 //   const subDivisionMarkdownNodes = this.findDivisionMarkdownNodes();
 //
 //   subDivisionMarkdownNodes.some((subDivisionMarkdownNode) => {
 //     subDivisionTransform = DivisionTransform.fromDivisionMarkdownNode(subDivisionMarkdownNode, context);
 //
 //     if (subDivisionTransform !== null) {
 //       return true;
 //     }
 //   });
 //
 //   return subDivisionTransform;
 // }
 //
 // findDivisionTransforms(DivisionTransform, context) {
 //   const subDivisionMarkdownNodes = this.findDivisionMarkdownNodes(),
 //         subDivisionTransforms = subDivisionMarkdownNodes.reduce((subDivisionTransforms, subDivisionMarkdownNode) => {
 //           const subDivisionTransform = DivisionTransform.fromDivisionMarkdownNode(subDivisionMarkdownNode, context);
 //
 //           if (subDivisionTransform !== null) {
 //             subDivisionTransforms.push(subDivisionTransform);
 //           }
 //
 //           return subDivisionTransforms;
 //         }, []);
 //
 //   return subDivisionTransforms;
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
 //
 // removeSubDivisionMarkdownNode(subDivisionMarkdownNode) {
 //   const childNode = subDivisionMarkdownNode;  ///
 //
 //   this.removeChildNode(childNode);
 // }
 //
 // createFootnotesListTransform(footnoteTransformMap, context) {
 //   const footnoteDivisionTransforms = this.findDivisionTransforms(FootnoteDivisionTransform, context);
 //
 //   footnoteDivisionTransforms.forEach((footnoteDivisionTransform) => {
 //     const footnoteTransform = FootnoteTransform.fromFootnoteDivisionTransform(footnoteDivisionTransform),
 //           identifier = footnoteDivisionTransform.identifier(context);
 //
 //     footnoteTransformMap[identifier] = footnoteTransform;
 //   });
 //
 //   const divisionMarkdownNode = this,  ///
 //         footnotesListDivisionTransform = FootnotesListTransform.fromDivisionMarkdownNodeAndFootnoteTransformMap(divisionMarkdownNode, footnoteTransformMap, context);
 //
 //   return footnotesListDivisionTransform;
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
(_html.default);
_define_property(DivisionHTMLNode, "tagName", "div");
_define_property(DivisionHTMLNode, "className", null);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5pbXBvcnQgTGluZUhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2xpbmVcIjtcbmltcG9ydCBGb290bm90ZUhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2Zvb3Rub3RlXCI7XG5pbXBvcnQgRm9vdG5vdGVzSXRlbUhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2Zvb3Rub3Rlc0l0ZW1cIjtcbi8vIGltcG9ydCBGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvZm9vdG5vdGVzTGlzdFwiO1xuXG5pbXBvcnQgeyBmb290bm90ZUhUTUxOb2Rlc0Zyb21Ob2RlLCBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9odG1sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlzaW9uSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNsYXNzTmFtZShjb250ZXh0KSB7IHJldHVybiB0aGlzLm91dGVyTm9kZS5jbGFzc05hbWUoY29udGV4dCk7IH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBjb25zdCBmb290bm90ZUhUTUxOb2RlcyA9IHRoaXMuZ2V0Rm9vdG5vdGVIVE1MTm9kZXMoKSxcbiAgICAgICAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zID0gZm9vdG5vdGVIVE1MTm9kZXMubWFwKChmb290bm90ZUhUTUxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb290bm90ZUhUTUxUcmFuc2Zvcm0gPSBGb290bm90ZUhUTUxUcmFuc2Zvcm0uZnJvbUZvb3Rub3RlSFRNTE5vZGUoZm9vdG5vdGVIVE1MTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBmb290bm90ZUhUTUxUcmFuc2Zvcm07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZm9vdG5vdGVIVE1MVHJhbnNmb3Jtc0xlbmd0aCA9IGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMubGVuZ3RoO1xuXG4gICAgaWYgKGZvb3Rub3RlSFRNTFRyYW5zZm9ybXNMZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSA9IHRoaXMuZ2V0Rm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUoKTtcblxuICAgIGlmIChmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxpbmVIVE1MVHJhbnNmb3JtcyA9IGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMubWFwKChmb290bm90ZUhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgIGNvbnN0IGxpbmVIVE1MVHJhbnNmb3JtID0gTGluZUhUTUxUcmFuc2Zvcm0uZnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybShmb290bm90ZUhUTUxUcmFuc2Zvcm0sIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbGluZUhUTUxUcmFuc2Zvcm07XG4gICAgfSk7XG5cbiAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zLmZvckVhY2goKGZvb3Rub3RlSFRNTFRyYW5zZm9ybSkgPT4ge1xuICAgICAgLy8gZm9vdG5vdGVIVE1MVHJhbnNmb3JtLnJlbW92ZShjb250ZXh0KTtcbiAgICB9KTtcblxuXG4gICAgLy8gY29uc3QgZm9vdG5vdGVzSXRlbUhUTUxUcmFuc2Zvcm1zID0gbGluZUhUTUxUcmFuc2Zvcm1zLm1hcCgobGluZUhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBudWxsLFxuICAgIC8vICAgICAgICAgICAgICAgZm9vdG5vdGVzSXRlbUhUTUxUcmFuc2Zvcm0gPSBGb290bm90ZXNJdGVtSFRNTFRyYW5zZm9ybS5mcm9tUGFyYWdyYXBoSFRNTFRyYW5zZm9ybUFuZElkZW50aWZpZXIobGluZUhUTUxUcmFuc2Zvcm0sIGlkZW50aWZpZXIsIGNvbnRleHQpO1xuICAgIC8vXG4gICAgLy8gICAgICAgICByZXR1cm4gZm9vdG5vdGVzSXRlbUhUTUxUcmFuc2Zvcm07XG4gICAgLy8gICAgICAgfSk7XG5cbiAgICAvLyBGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybS5mcm9tRm9vdG5vdGVzSXRlbUhUTUxUcmFuc2Zvcm1zKGZvb3Rub3Rlc0l0ZW1IVE1MVHJhbnNmb3JtcywgY29udGV4dCk7XG5cblxuXG4gIH1cblxuICBnZXRGb290bm90ZUhUTUxOb2RlcygpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3RlSFRNTE5vZGVzID0gZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIHJldHVybiBmb290bm90ZUhUTUxOb2RlcztcbiAgfVxuXG4gIGdldEZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgPSBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlKG5vZGUpXG5cbiAgICByZXR1cm4gZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoRGl2aXNpb25IVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoRGl2aXNpb25IVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuXG5cbi8vIGdldFBhZ2VOdW1iZXIoKSB7XG4vLyAgIGxldCBwYWdlTnVtYmVyID0gbnVsbDtcbi8vXG4vLyAgIGNvbnN0IHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSB0aGlzLmZpbmRQYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlKCk7XG4vL1xuLy8gICBpZiAocGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuLy8gICAgIHBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlLmdldFBhZ2VOdW1iZXIoKTtcbi8vICAgfVxuLy9cbi8vICAgcmV0dXJuIHBhZ2VOdW1iZXI7XG4vLyB9XG4vL1xuLy8gc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKSB7XG4vLyAgIGNvbnN0IHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSB0aGlzLmZpbmRQYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlKCk7XG4vL1xuLy8gICBpZiAocGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuLy8gICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUuc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIHBhZ2luYXRlKG1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbi8vICAgY29uc3QgZm9vdG5vdGVzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gPSB0aGlzLnJlbW92ZURpdmlzaW9uTWFya2Rvd25Ob2RlKEZvb3Rub3Rlc0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KSxcbi8vICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtID0gdGhpcy5yZW1vdmVEaXZpc2lvbk1hcmtkb3duTm9kZShQYWdlTnVtYmVyRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpLFxuLy8gICAgICAgICBzdWJEaXZpc2lvblRyYW5zZm9ybXMgPSBbXG4vLyAgICAgICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sXG4vLyAgICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtXG4vLyAgICAgICAgIF07XG4vL1xuLy8gICBmaWx0ZXIoc3ViRGl2aXNpb25UcmFuc2Zvcm1zLCAoc3ViRGl2aXNpb25UcmFuc2Zvcm0pID0+IHtcbi8vICAgICBpZiAoc3ViRGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbi8vICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgIH1cbi8vICAgfSk7XG4vL1xuLy8gICBjb25zdCB7IGxpbmVzUGVyUGFnZSB9ID0gY29udGV4dCxcbi8vICAgICAgICAgcGFnaW5hdGVkQ2hpbGROb2RlcyA9IFtdO1xuLy9cbi8vICAgbGV0IHsgcGFnZU51bWJlciB9ID0gY29udGV4dCxcbi8vICAgICAgIHRvdGFsTGluZXMgPSAwO1xuLy9cbi8vICAgdGhpcy5mb3JFYWNoQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbi8vICAgICBjb25zdCBsaW5lcyA9IGNoaWxkTm9kZS5saW5lcyhjb250ZXh0KTtcbi8vXG4vLyAgICAgaWYgKCh0b3RhbExpbmVzICsgbGluZXMpID4gbGluZXNQZXJQYWdlKSB7XG4vLyAgICAgICBwYWdpbmF0ZURpdmlzaW9uTWFya2Rvd25Ob2RlKHBhZ2luYXRlZENoaWxkTm9kZXMsIHN1YkRpdmlzaW9uVHJhbnNmb3JtcywgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSwgbWFya2Rvd25Ob2RlcywgcGFnZU51bWJlciwgY29udGV4dCk7XG4vL1xuLy8gICAgICAgcGFnZU51bWJlcisrO1xuLy9cbi8vICAgICAgIHRvdGFsTGluZXMgPSAwO1xuLy9cbi8vICAgICAgIGNsZWFyKHBhZ2luYXRlZENoaWxkTm9kZXMpO1xuLy8gICAgIH1cbi8vXG4vLyAgICAgY29uc3QgcGFnaW5hdGVkQ2hpbGROb2RlID0gY2hpbGROb2RlOyAgLy8vXG4vL1xuLy8gICAgIHBhZ2luYXRlZENoaWxkTm9kZXMucHVzaChwYWdpbmF0ZWRDaGlsZE5vZGUpO1xuLy9cbi8vICAgICB0b3RhbExpbmVzICs9IGxpbmVzO1xuLy8gICB9KTtcbi8vXG4vLyAgIGlmICh0b3RhbExpbmVzID4gMCkge1xuLy8gICAgIHBhZ2luYXRlRGl2aXNpb25NYXJrZG93bk5vZGUocGFnaW5hdGVkQ2hpbGROb2Rlcywgc3ViRGl2aXNpb25UcmFuc2Zvcm1zLCB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lLCBtYXJrZG93bk5vZGVzLCBwYWdlTnVtYmVyLCBjb250ZXh0KTtcbi8vXG4vLyAgICAgcGFnZU51bWJlcisrO1xuLy8gICB9XG4vL1xuLy8gICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbi8vICAgICBwYWdlTnVtYmVyXG4vLyAgIH0pO1xuLy8gfVxuLy9cbi8vIGNyZWF0ZUluZGV4KGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuLy8gICBsZXQgaW5kZXhDcmVhdGVkID0gZmFsc2U7XG4vL1xuLy8gICBjb25zdCBpbmRleERpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtID0gdGhpcy5maW5kRGl2aXNpb25UcmFuc2Zvcm0oSW5kZXhEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCk7XG4vL1xuLy8gICBpZiAoaW5kZXhEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuLy8gICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuLy8gICAgICAgICAgIGluZGV4VHJhbnNmb3JtID0gSW5kZXhUcmFuc2Zvcm0uZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuLy9cbi8vICAgICBpZiAoaW5kZXhUcmFuc2Zvcm0gIT09IG51bGwpIHtcbi8vICAgICAgIGluZGV4VHJhbnNmb3JtLnJlcGxhY2VJbmRleERpcmVjdGl2ZVN1YmRpdmlzaW9uVHJhbnNmb3JtKGluZGV4RGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbi8vXG4vLyAgICAgICBpbmRleENyZWF0ZWQgPSB0cnVlO1xuLy8gICAgIH1cbi8vICAgfVxuLy9cbi8vICAgcmV0dXJuIGluZGV4Q3JlYXRlZDtcbi8vIH1cbi8vXG4vLyBjcmVhdGVDb250ZW50cyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbi8vICAgbGV0IGNvbnRlbnRzQ3JlYXRlZCA9IGZhbHNlO1xuLy9cbi8vICAgY29uc3QgY29udGVudHNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSA9IHRoaXMuZmluZERpdmlzaW9uVHJhbnNmb3JtKENvbnRlbnRzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpO1xuLy9cbi8vICAgaWYgKGNvbnRlbnRzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbi8vICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbi8vICAgICAgICAgICBjb250ZW50c0xpc3RUcmFuc2Zvcm0gPSBDb250ZW50c0xpc3RUcmFuc2Zvcm0uZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuLy9cbi8vICAgICBpZiAoY29udGVudHNMaXN0VHJhbnNmb3JtICE9PSBudWxsKSB7XG4vLyAgICAgICBjb250ZW50c0xpc3RUcmFuc2Zvcm0ucmVwbGFjZUNvbnRlbnRzRGlyZWN0aXZlU3ViZGl2aXNpb25UcmFuc2Zvcm0oY29udGVudHNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuLy9cbi8vICAgICAgIGNvbnRlbnRzQ3JlYXRlZCA9IHRydWU7XG4vLyAgICAgfVxuLy8gICB9XG4vL1xuLy8gICByZXR1cm4gY29udGVudHNDcmVhdGVkO1xuLy8gfVxuLy9cbi8vIGNyZWF0ZUZvb3Rub3Rlcyhmb290bm90ZVRyYW5zZm9ybU1hcCwgY29udGV4dCkge1xuLy8gICBjb25zdCBmb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSA9IHRoaXMuZmluZERpdmlzaW9uVHJhbnNmb3JtKEZvb3Rub3Rlc0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KTtcbi8vXG4vLyAgIGlmIChmb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuLy8gICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuLy8gICAgICAgICAgIGZvb3Rub3Rlc0xpc3REaXZpc2lvblRyYW5zZm9ybSA9IEZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0uZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kRm9vdG5vdGVUcmFuc2Zvcm1NYXAoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3RlVHJhbnNmb3JtTWFwLCBjb250ZXh0KTtcbi8vXG4vLyAgICAgaWYgKGZvb3Rub3Rlc0xpc3REaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuLy8gICAgICAgZm9vdG5vdGVzTGlzdERpdmlzaW9uVHJhbnNmb3JtLnJlcGxhY2VGb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybShmb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuLy8gICAgIH1cbi8vXG4vLyAgICAgcmVudW1iZXJGb290bm90ZUxpbmtNYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZVRyYW5zZm9ybU1hcCwgY29udGV4dCk7XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyBwcmVwYXJlRm9vdG5vdGVzKGZvb3Rub3RlVHJhbnNmb3JtTWFwLCBjb250ZXh0KSB7XG4vLyAgIGNvbnN0IGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm1zID0gdGhpcy5yZW1vdmVEaXZpc2lvbk1hcmtkb3duTm9kZXMoRm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCk7XG4vL1xuLy8gICBmb290bm90ZURpdmlzaW9uVHJhbnNmb3Jtcy5mb3JFYWNoKChmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtKSA9PiB7XG4vLyAgICAgY29uc3QgZm9vdG5vdGVUcmFuc2Zvcm0gPSBGb290bm90ZVRyYW5zZm9ybS5mcm9tRm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybShmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtKSxcbi8vICAgICAgICAgICBpZGVudGlmaWVyID0gZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybS5pZGVudGlmaWVyKGNvbnRleHQpO1xuLy9cbi8vICAgICBmb290bm90ZVRyYW5zZm9ybU1hcFtpZGVudGlmaWVyXSA9IGZvb3Rub3RlVHJhbnNmb3JtO1xuLy8gICB9KTtcbi8vIH1cbi8vXG4vLyBmaW5kRGl2aXNpb25UcmFuc2Zvcm0oRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpIHtcbi8vICAgbGV0IHN1YkRpdmlzaW9uVHJhbnNmb3JtID0gbnVsbDtcbi8vXG4vLyAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZERpdmlzaW9uTWFya2Rvd25Ob2RlcygpO1xuLy9cbi8vICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLnNvbWUoKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4vLyAgICAgc3ViRGl2aXNpb25UcmFuc2Zvcm0gPSBEaXZpc2lvblRyYW5zZm9ybS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuLy9cbi8vICAgICBpZiAoc3ViRGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbi8vICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgIH1cbi8vICAgfSk7XG4vL1xuLy8gICByZXR1cm4gc3ViRGl2aXNpb25UcmFuc2Zvcm07XG4vLyB9XG4vL1xuLy8gZmluZERpdmlzaW9uVHJhbnNmb3JtcyhEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCkge1xuLy8gICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmREaXZpc2lvbk1hcmtkb3duTm9kZXMoKSxcbi8vICAgICAgICAgc3ViRGl2aXNpb25UcmFuc2Zvcm1zID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLnJlZHVjZSgoc3ViRGl2aXNpb25UcmFuc2Zvcm1zLCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuLy8gICAgICAgICAgIGNvbnN0IHN1YkRpdmlzaW9uVHJhbnNmb3JtID0gRGl2aXNpb25UcmFuc2Zvcm0uZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbi8vXG4vLyAgICAgICAgICAgaWYgKHN1YkRpdmlzaW9uVHJhbnNmb3JtICE9PSBudWxsKSB7XG4vLyAgICAgICAgICAgICBzdWJEaXZpc2lvblRyYW5zZm9ybXMucHVzaChzdWJEaXZpc2lvblRyYW5zZm9ybSk7XG4vLyAgICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgICByZXR1cm4gc3ViRGl2aXNpb25UcmFuc2Zvcm1zO1xuLy8gICAgICAgICB9LCBbXSk7XG4vL1xuLy8gICByZXR1cm4gc3ViRGl2aXNpb25UcmFuc2Zvcm1zO1xuLy8gfVxuLy9cbi8vIGZpbmRQYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlKCkge1xuLy8gICBsZXQgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IG51bGw7XG4vL1xuLy8gICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmREaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcbi8vXG4vLyAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5zb21lKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuLy8gICAgIGNvbnN0IG5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZTsgLy8vXG4vL1xuLy8gICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSk7XG4vL1xuLy8gICAgIGlmIChwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4vLyAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICB9XG4vLyAgIH0pO1xuLy9cbi8vICAgcmV0dXJuIHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGU7XG4vLyB9XG4vL1xuLy8gcmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpIHtcbi8vICAgY29uc3QgY2hpbGROb2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cbi8vXG4vLyAgIHRoaXMucmVtb3ZlQ2hpbGROb2RlKGNoaWxkTm9kZSk7XG4vLyB9XG4vL1xuLy8gY3JlYXRlRm9vdG5vdGVzTGlzdFRyYW5zZm9ybShmb290bm90ZVRyYW5zZm9ybU1hcCwgY29udGV4dCkge1xuLy8gICBjb25zdCBmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtcyA9IHRoaXMuZmluZERpdmlzaW9uVHJhbnNmb3JtcyhGb290bm90ZURpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KTtcbi8vXG4vLyAgIGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm1zLmZvckVhY2goKGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0pID0+IHtcbi8vICAgICBjb25zdCBmb290bm90ZVRyYW5zZm9ybSA9IEZvb3Rub3RlVHJhbnNmb3JtLmZyb21Gb290bm90ZURpdmlzaW9uVHJhbnNmb3JtKGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0pLFxuLy8gICAgICAgICAgIGlkZW50aWZpZXIgPSBmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtLmlkZW50aWZpZXIoY29udGV4dCk7XG4vL1xuLy8gICAgIGZvb3Rub3RlVHJhbnNmb3JtTWFwW2lkZW50aWZpZXJdID0gZm9vdG5vdGVUcmFuc2Zvcm07XG4vLyAgIH0pO1xuLy9cbi8vICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4vLyAgICAgICAgIGZvb3Rub3Rlc0xpc3REaXZpc2lvblRyYW5zZm9ybSA9IEZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0uZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kRm9vdG5vdGVUcmFuc2Zvcm1NYXAoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3RlVHJhbnNmb3JtTWFwLCBjb250ZXh0KTtcbi8vXG4vLyAgIHJldHVybiBmb290bm90ZXNMaXN0RGl2aXNpb25UcmFuc2Zvcm07XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHBhZ2luYXRlRGl2aXNpb25NYXJrZG93bk5vZGUocGFnaW5hdGVkQ2hpbGROb2Rlcywgc3ViRGl2aXNpb25UcmFuc2Zvcm1zLCBkaXZpc2lvbkNsYXNzTmFtZSwgbWFya2Rvd25Ob2RlcywgcGFnZU51bWJlciwgY29udGV4dCkge1xuLy8gICBsZXQgbWFya2Rvd25Ob2RlO1xuLy9cbi8vICAgY29uc3QgaW5kZXhBbmNob3JUcmFuc2Zvcm0gPSBJbmRleEFuY2hvclRyYW5zZm9ybS5mcm9tUGFnZU51bWJlcihwYWdlTnVtYmVyLCBjb250ZXh0KSxcbi8vICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBEaXZpc2lvbk1hcmtkb3duTm9kZS5mcm9tUGFnaW5hdGVkQ2hpbGROb2Rlc0RpdmlzaW9uVHJhbnNmb3Jtc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2luYXRlZENoaWxkTm9kZXMsIHN1YkRpdmlzaW9uVHJhbnNmb3JtcywgZGl2aXNpb25DbGFzc05hbWUsIGNvbnRleHQpLFxuLy8gICAgICAgICBhbmNob3JNYXJrZG93bk5vZGUgPSBpbmRleEFuY2hvclRyYW5zZm9ybS5nZXRBbmNob3JNYXJrZG93bk5vZGUoKTtcbi8vXG4vLyAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnNldFBhZ2VOdW1iZXIocGFnZU51bWJlcik7XG4vL1xuLy8gICBtYXJrZG93bk5vZGUgPSBhbmNob3JNYXJrZG93bk5vZGU7ICAvLy9cbi8vXG4vLyAgIG1hcmtkb3duTm9kZXMucHVzaChtYXJrZG93bk5vZGUpO1xuLy9cbi8vICAgbWFya2Rvd25Ob2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7IC8vL1xuLy9cbi8vICAgbWFya2Rvd25Ob2Rlcy5wdXNoKG1hcmtkb3duTm9kZSk7XG4vLyB9XG4iXSwibmFtZXMiOlsiRGl2aXNpb25IVE1MTm9kZSIsImNsYXNzTmFtZSIsImNvbnRleHQiLCJvdXRlck5vZGUiLCJyZXNvbHZlIiwiZm9vdG5vdGVIVE1MTm9kZXMiLCJnZXRGb290bm90ZUhUTUxOb2RlcyIsImZvb3Rub3RlSFRNTFRyYW5zZm9ybXMiLCJtYXAiLCJmb290bm90ZUhUTUxOb2RlIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3JtIiwiRm9vdG5vdGVIVE1MVHJhbnNmb3JtIiwiZnJvbUZvb3Rub3RlSFRNTE5vZGUiLCJmb290bm90ZUhUTUxUcmFuc2Zvcm1zTGVuZ3RoIiwibGVuZ3RoIiwiZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUiLCJnZXRGb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSIsImxpbmVIVE1MVHJhbnNmb3JtcyIsImxpbmVIVE1MVHJhbnNmb3JtIiwiTGluZUhUTUxUcmFuc2Zvcm0iLCJmcm9tRm9vdG5vdGVIVE1MVHJhbnNmb3JtIiwiZm9yRWFjaCIsIm5vZGUiLCJmb290bm90ZUhUTUxOb2Rlc0Zyb21Ob2RlIiwiZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9k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