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
var _html1 = /*#__PURE__*/ _interop_require_default(require("../../transform/html"));
var _footnote = /*#__PURE__*/ _interop_require_default(require("../../node/html/footnote"));
var _line = /*#__PURE__*/ _interop_require_default(require("../../transform/html/line"));
var _footnote1 = /*#__PURE__*/ _interop_require_default(require("../../transform/html/footnote"));
var _pageNumber = /*#__PURE__*/ _interop_require_default(require("../../transform/html/pageNumber"));
var _footnoteItem = /*#__PURE__*/ _interop_require_default(require("../../transform/html/footnoteItem"));
var _footnoteLink = /*#__PURE__*/ _interop_require_default(require("../../transform/html/footnoteLink"));
var _footnotesList = /*#__PURE__*/ _interop_require_default(require("../../transform/html/footnotesList"));
var _nestedFootnoteLink = /*#__PURE__*/ _interop_require_default(require("../../transform/html/nestedFootnoteLink"));
var _footnotes = /*#__PURE__*/ _interop_require_default(require("../../transform/html/directive/footnotes"));
var _pageNumber1 = /*#__PURE__*/ _interop_require_default(require("../../transform/html/directive/pageNumber"));
var _ruleNames = require("../../ruleNames");
var _constants = require("../../constants");
var _html2 = require("../../utilities/html");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var backwardsForEach = _necessary.arrayUtilities.backwardsForEach;
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
                var className = this.constructor.className;
                return className;
            }
        },
        {
            key: "getRuleName",
            value: function getRuleName() {
                var ruleNme = _ruleNames.DIVISION_RULE_NAME;
                return ruleNme;
            }
        },
        {
            key: "getFootnoteHTMLNodes",
            value: function getFootnoteHTMLNodes() {
                var node = this, footnoteHTMLNodes = (0, _html2.footnoteHTMLNodesFromNode)(node);
                return footnoteHTMLNodes;
            }
        },
        {
            key: "getFootnotesDirectiveHTMLNode",
            value: function getFootnotesDirectiveHTMLNode() {
                var node = this, footnotesDirectiveHTMLNode = (0, _html2.footnotesDirectiveHTMLNodeFromNode)(node);
                return footnotesDirectiveHTMLNode;
            }
        },
        {
            key: "resolve",
            value: function resolve(divisionHTMLNodes, pageNumber, context) {
                var node = this;
                removeNestedFootnoteLinkHTMLNodes(node);
                var pageNumbers = removePageNumberDirectiveHTMLNode(node), footnoteHTMLNodes = this.getFootnoteHTMLNodes(), footnoteHTMLTransforms = removeFootnoteHTMLNodes(footnoteHTMLNodes), footnotesDirectiveHTMLNode = this.getFootnotesDirectiveHTMLNode();
                if (footnotesDirectiveHTMLNode !== null) {
                    removeFootnotesDirectiveHTMLNode(footnotesDirectiveHTMLNode);
                    var footnoteLinkHTMLNodes = (0, _html2.footnoteLinkHTMLNodesFromNode)(node);
                    reorderFootnoteHTMLNodes(footnoteLinkHTMLNodes, footnoteHTMLTransforms, context);
                }
                var htmlNodes = removeHTMLNodes(node), identifierMap = {}, groupedHTMLNodesArray = groupHTMLNodes(htmlNodes), paginatedHTMLNodesArray = paginateGroupedHTMLNodes(groupedHTMLNodesArray, context);
                paginatedHTMLNodesArray.forEach(function(paginatedHTMLNodes) {
                    var divisionHTMLNode = DivisionHTMLNode.fromPaginatedHTMLNodes(paginatedHTMLNodes);
                    divisionHTMLNode.resolveFootnotes(identifierMap, context);
                    if (pageNumbers) {
                        var pageNumberHTMLTransform = _pageNumber.default.fromPageNumber(pageNumber);
                        pageNumberHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
                    }
                    divisionHTMLNodes.push(divisionHTMLNode);
                    pageNumber++;
                });
                return pageNumber;
            }
        },
        {
            key: "resolveFootnotes",
            value: function resolveFootnotes(identifierMap, context) {
                var node = this, divisionHTMLNode = node, footnoteHTMLNodes = (0, _html2.footnoteHTMLNodesFromNode)(node), footnoteLinkHTMLNodes = (0, _html2.footnoteLinkHTMLNodesFromNode)(node), footnoteHTMLTransforms = removeFootnoteHTMLNodes(footnoteHTMLNodes);
                var start = numberFootnoteLinkHTMLNodes(footnoteHTMLNodes, footnoteLinkHTMLNodes, identifierMap, context), lineHTMLTransforms = lineHTMLTransformsFromFootnoteHTMLTransforms(footnoteHTMLTransforms), footnoteItemHTMLTransforms = footnoteItemHTMLTransformsFromLineHTMLTransforms(lineHTMLTransforms, identifierMap, start), footnotesListHTMLTransform = _footnotesList.default.fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms);
                footnotesListHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
            }
        },
        {
            key: "asString",
            value: function asString() {
                var string = _ruleNames.DIVISION_RULE_NAME; ///
                return string;
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
        },
        {
            key: "fromPaginatedHTMLNodes",
            value: function fromPaginatedHTMLNodes(paginatedHTMLNodes) {
                var childNodes = paginatedHTMLNodes, divisionHTMLNode = _html.default.fromChildNodes(DivisionHTMLNode, childNodes);
                return divisionHTMLNode;
            }
        }
    ]);
    return DivisionHTMLNode;
}(_html.default);
_define_property(DivisionHTMLNode, "tagName", "div");
_define_property(DivisionHTMLNode, "className", null);
function groupHTMLNodes(htmlNodes) {
    var groupedHTMLNodesArray = [];
    var groupedHTMLNodes = [];
    htmlNodes.forEach(function(htmlNode) {
        var htmlNodeFootnoteHTMLNode = _instanceof(htmlNode, _footnote.default);
        if (!htmlNodeFootnoteHTMLNode) {
            var groupedHTMLNodeLength = groupedHTMLNodes.length;
            if (groupedHTMLNodeLength > 0) {
                groupedHTMLNodesArray.push(groupedHTMLNodes);
                groupedHTMLNodes = [];
            }
        }
        var groupedHTMLNode = htmlNode; ///
        groupedHTMLNodes.push(groupedHTMLNode);
    });
    var groupedHTMLNodeLength = groupedHTMLNodes.length;
    if (groupedHTMLNodeLength) {
        groupedHTMLNodesArray.push(groupedHTMLNodes);
    }
    return groupedHTMLNodesArray;
}
function removeHTMLNodes(node) {
    var htmlNodes = (0, _html2.htmlNodesFromNode)(node);
    htmlNodes.forEach(function(htmlNode) {
        var htmlTransform = _html1.default.fromHTNLNOde(htmlNode);
        htmlTransform.remove();
    });
    return htmlNodes;
}
function removeFootnoteHTMLNodes(footnoteHTMLNodes) {
    var footnoteHTMLTransforms = footnoteHTMLTransformsFromFootnoteHTMLNodes(footnoteHTMLNodes);
    footnoteHTMLTransforms.forEach(function(footnoteHTMLTransform) {
        footnoteHTMLTransform.remove();
    });
    return footnoteHTMLTransforms;
}
function paginateGroupedHTMLNodes(groupedHTMLNodesArray, context) {
    var paginatedHTMLNodesArray = [];
    var _context_maximumPageLines = context.maximumPageLines, maximumPageLines = _context_maximumPageLines === void 0 ? _constants.DEFAULT_MAXIMUM_PAGE_LINES : _context_maximumPageLines;
    var pageLines = 0, paginatedHTMLNodes = [];
    groupedHTMLNodesArray.forEach(function(groupedHTMLNodes) {
        var _paginatedHTMLNodes;
        var groupLines = groupedHTMLNodes.reduce(function(groupLines, groupedHTMLNode) {
            var lines = groupedHTMLNode.lines(context);
            groupLines += lines;
            return groupLines;
        }, 0);
        var paginatedHTMLNodesLength = paginatedHTMLNodes.length;
        if (paginatedHTMLNodesLength > 0) {
            if (pageLines + groupLines > maximumPageLines) {
                paginatedHTMLNodesArray.push(paginatedHTMLNodes);
                pageLines = 0;
                paginatedHTMLNodes = [];
            }
        }
        (_paginatedHTMLNodes = paginatedHTMLNodes).push.apply(_paginatedHTMLNodes, _to_consumable_array(groupedHTMLNodes));
        pageLines += groupLines;
    });
    var paginatedHTMLNodesLength = paginatedHTMLNodes.length;
    if (paginatedHTMLNodesLength) {
        paginatedHTMLNodesArray.push(paginatedHTMLNodes);
    }
    return paginatedHTMLNodesArray;
}
function reorderFootnoteHTMLNodes(footnoteLinkHTMLNodes, footnoteHTMLTransforms, context) {
    var footnoteLinkHTMLTransforms = footnoteLinkHTMLTransformsFromFootnoteLinkHTMLNodes(footnoteLinkHTMLNodes);
    backwardsForEach(footnoteLinkHTMLTransforms, function(footnoteLinkHTMLTransform) {
        var identifier = footnoteLinkHTMLTransform.identifier(context), footnoteHTMLTransform = footnoteHTMLTransforms.find(function(footnoteHTMLTransform) {
            var identifierMatches = footnoteHTMLTransform.matchIdentifier(identifier, context);
            if (identifierMatches) {
                return true;
            }
        }) || null;
        if (footnoteHTMLTransform !== null) {
            footnoteHTMLTransform.addAfterFootnoteLinkHTMLTransform(footnoteLinkHTMLTransform);
        }
    });
}
function numberFootnoteLinkHTMLNodes(footnoteHTMLNodes, footnoteLinkHTMLNodes, identifierMap, context) {
    var identifiers = Object.keys(identifierMap), identifiersLength = identifiers.length, start = identifiersLength + 1;
    footnoteHTMLNodes.forEach(function(footnoteHTMLNode, index) {
        var identifier = footnoteHTMLNode.identifier(context), number = start + index;
        identifierMap[identifier] = number;
    });
    footnoteLinkHTMLNodes.forEach(function(footnoteLinkHTMLNode) {
        var identifier = footnoteLinkHTMLNode.identifier(context), number = identifierMap[identifier];
        footnoteLinkHTMLNode.setNumber(number);
    });
    return start;
}
function removeFootnotesDirectiveHTMLNode(footnotesDirectiveHTMLNode) {
    var footnotesDirectiveHTMLTransform = _footnotes.default.fromFootnotesDirectiveHTMLNode(footnotesDirectiveHTMLNode);
    footnotesDirectiveHTMLTransform.remove();
}
function removePageNumberDirectiveHTMLNode(node) {
    var pageNumbers = false;
    var pageNumberDirectiveHTMLNode = (0, _html2.pageNumberDirectiveHTMLNodeFromNode)(node);
    if (pageNumberDirectiveHTMLNode !== null) {
        var pageNumberDirectiveHTNLTransform = _pageNumber1.default.fromPageNumberDirectiveHTMLNode(pageNumberDirectiveHTMLNode);
        pageNumberDirectiveHTNLTransform.remove();
        pageNumbers = true;
    }
    return pageNumbers;
}
function removeNestedFootnoteLinkHTMLNodes(node) {
    var nestedFootnoteLinkHTMLNodes = (0, _html2.nestedFootnoteLinkHTMLNodesFromNode)(node), nestedFootnoteLinkHTMLTransforms = nestedFootnoteLinkHTMLTransformsFromNestedFootnoteLinkHTMLNodes(nestedFootnoteLinkHTMLNodes);
    nestedFootnoteLinkHTMLTransforms.forEach(function(nestedFootnoteLinkHTMLTransform) {
        nestedFootnoteLinkHTMLTransform.remove();
    });
}
function footnoteHTMLTransformsFromFootnoteHTMLNodes(footnoteHTMLNodes) {
    var footnoteHTMLTransforms = footnoteHTMLNodes.map(function(footnoteHTMLNode) {
        var footnoteHTMLTransform = _footnote1.default.fromFootnoteHTMLNode(footnoteHTMLNode);
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
function footnoteItemHTMLTransformsFromLineHTMLTransforms(lineHTMLTransforms, identifierMap, start) {
    var numbers = Object.values(identifierMap), identifiers = Object.keys(identifierMap), footnoteItemHTMLTransforms = lineHTMLTransforms.map(function(lineHTMLTransform, index) {
        var number = start + index;
        index = numbers.indexOf(number);
        var identifier = identifiers[index], footnoteItemHTMLTransform = _footnoteItem.default.fromLineTMLTransformAndIdentifier(lineHTMLTransform, identifier);
        return footnoteItemHTMLTransform;
    });
    return footnoteItemHTMLTransforms;
}
function footnoteLinkHTMLTransformsFromFootnoteLinkHTMLNodes(footnoteLinkHTMLNodes) {
    var footnoteLinkHTMLTransforms = footnoteLinkHTMLNodes.map(function(footnoteLinkHTMLNode) {
        var footnoteLinkHTMLTransform = _footnoteLink.default.fromFootnoteLinkHTMLNode(footnoteLinkHTMLNode);
        return footnoteLinkHTMLTransform;
    });
    return footnoteLinkHTMLTransforms;
}
function nestedFootnoteLinkHTMLTransformsFromNestedFootnoteLinkHTMLNodes(nestedFootnoteLinkHTMLNodes) {
    var nestedFootnoteLinkHTMLTransforms = nestedFootnoteLinkHTMLNodes.map(function(nestedFootnoteLinkHTMLNode) {
        var nestedFootnoteLinkHTMLTransform = _nestedFootnoteLink.default.fromNestedFootnoteLinkHTMLNode(nestedFootnoteLinkHTMLNode);
        return nestedFootnoteLinkHTMLTransform;
    });
    return nestedFootnoteLinkHTMLTransforms;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuaW1wb3J0IEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sXCI7XG5pbXBvcnQgRm9vdG5vdGVIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sL2Zvb3Rub3RlXCI7XG5pbXBvcnQgTGluZUhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2xpbmVcIjtcbmltcG9ydCBGb290bm90ZUhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2Zvb3Rub3RlXCI7XG5pbXBvcnQgUGFnZU51bWJlckhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL3BhZ2VOdW1iZXJcIjtcbmltcG9ydCBGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9mb290bm90ZUl0ZW1cIjtcbmltcG9ydCBGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9mb290bm90ZUxpbmtcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvZm9vdG5vdGVzTGlzdFwiO1xuaW1wb3J0IE5lc3RlZEZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL25lc3RlZEZvb3Rub3RlTGlua1wiO1xuaW1wb3J0IEZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2RpcmVjdGl2ZS9mb290bm90ZXNcIjtcbmltcG9ydCBQYWdlTnVtYmVyRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvZGlyZWN0aXZlL3BhZ2VOdW1iZXJcIjtcblxuaW1wb3J0IHsgRElWSVNJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9NQVhJTVVNX1BBR0VfTElORVMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBodG1sTm9kZXNGcm9tTm9kZSxcbiAgICAgICAgIGZvb3Rub3RlSFRNTE5vZGVzRnJvbU5vZGUsXG4gICAgICAgICBmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZSxcbiAgICAgICAgIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUsXG4gICAgICAgICBuZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZSxcbiAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9odG1sXCI7XG5cbmNvbnN0IHsgYmFja3dhcmRzRm9yRWFjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlzaW9uSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgcnVsZU5tZSA9IERJVklTSU9OX1JVTEVfTkFNRTtcblxuICAgIHJldHVybiBydWxlTm1lO1xuICB9XG5cbiAgZ2V0Rm9vdG5vdGVIVE1MTm9kZXMoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmb290bm90ZUhUTUxOb2RlcyA9IGZvb3Rub3RlSFRNTE5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVIVE1MTm9kZXM7XG4gIH1cblxuICBnZXRGb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlID0gZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKVxuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlO1xuICB9XG5cbiAgcmVzb2x2ZShkaXZpc2lvbkhUTUxOb2RlcywgcGFnZU51bWJlciwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzO1xuXG4gICAgcmVtb3ZlTmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzKG5vZGUpO1xuXG4gICAgY29uc3QgcGFnZU51bWJlcnMgPSByZW1vdmVQYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUobm9kZSksXG4gICAgICAgICAgZm9vdG5vdGVIVE1MTm9kZXMgPSB0aGlzLmdldEZvb3Rub3RlSFRNTE5vZGVzKCksXG4gICAgICAgICAgZm9vdG5vdGVIVE1MVHJhbnNmb3JtcyA9IHJlbW92ZUZvb3Rub3RlSFRNTE5vZGVzKGZvb3Rub3RlSFRNTE5vZGVzKSxcbiAgICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSA9IHRoaXMuZ2V0Rm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUoKTtcblxuICAgIGlmIChmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSAhPT0gbnVsbCkge1xuICAgICAgcmVtb3ZlRm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUoZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUpO1xuXG4gICAgICBjb25zdCBmb290bm90ZUxpbmtIVE1MTm9kZXMgPSBmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgICAgcmVvcmRlckZvb3Rub3RlSFRNTE5vZGVzKGZvb3Rub3RlTGlua0hUTUxOb2RlcywgZm9vdG5vdGVIVE1MVHJhbnNmb3JtcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3QgaHRtbE5vZGVzID0gcmVtb3ZlSFRNTE5vZGVzKG5vZGUpLFxuICAgICAgICAgIGlkZW50aWZpZXJNYXAgPSB7fSxcbiAgICAgICAgICBncm91cGVkSFRNTE5vZGVzQXJyYXkgPSBncm91cEhUTUxOb2RlcyhodG1sTm9kZXMpLFxuICAgICAgICAgIHBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5ID0gcGFnaW5hdGVHcm91cGVkSFRNTE5vZGVzKGdyb3VwZWRIVE1MTm9kZXNBcnJheSwgY29udGV4dCk7XG5cbiAgICBwYWdpbmF0ZWRIVE1MTm9kZXNBcnJheS5mb3JFYWNoKChwYWdpbmF0ZWRIVE1MTm9kZXMpID0+IHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5vZGUgPSBEaXZpc2lvbkhUTUxOb2RlLmZyb21QYWdpbmF0ZWRIVE1MTm9kZXMocGFnaW5hdGVkSFRNTE5vZGVzKTtcblxuICAgICAgZGl2aXNpb25IVE1MTm9kZS5yZXNvbHZlRm9vdG5vdGVzKGlkZW50aWZpZXJNYXAsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocGFnZU51bWJlcnMpIHtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlckhUTUxUcmFuc2Zvcm0gPSBQYWdlTnVtYmVySFRNTFRyYW5zZm9ybS5mcm9tUGFnZU51bWJlcihwYWdlTnVtYmVyKTtcblxuICAgICAgICBwYWdlTnVtYmVySFRNTFRyYW5zZm9ybS5hcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSk7XG4gICAgICB9XG5cbiAgICAgIGRpdmlzaW9uSFRNTE5vZGVzLnB1c2goZGl2aXNpb25IVE1MTm9kZSk7XG5cbiAgICAgIHBhZ2VOdW1iZXIrKztcbiAgICB9KTtcblxuICAgIHJldHVybiBwYWdlTnVtYmVyO1xuICB9XG5cbiAgcmVzb2x2ZUZvb3Rub3RlcyhpZGVudGlmaWVyTWFwLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGZvb3Rub3RlSFRNTE5vZGVzID0gZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZUxpbmtIVE1MTm9kZXMgPSBmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zID0gcmVtb3ZlRm9vdG5vdGVIVE1MTm9kZXMoZm9vdG5vdGVIVE1MTm9kZXMpO1xuXG4gICAgY29uc3Qgc3RhcnQgPSBudW1iZXJGb290bm90ZUxpbmtIVE1MTm9kZXMoZm9vdG5vdGVIVE1MTm9kZXMsIGZvb3Rub3RlTGlua0hUTUxOb2RlcywgaWRlbnRpZmllck1hcCwgY29udGV4dCksXG4gICAgICAgICAgbGluZUhUTUxUcmFuc2Zvcm1zID0gbGluZUhUTUxUcmFuc2Zvcm1zRnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybXMoZm9vdG5vdGVIVE1MVHJhbnNmb3JtcyksXG4gICAgICAgICAgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMgPSBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21MaW5lSFRNTFRyYW5zZm9ybXMobGluZUhUTUxUcmFuc2Zvcm1zLCBpZGVudGlmaWVyTWFwLCBzdGFydCksXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0gPSBGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybS5mcm9tU3RhcnRBbmRGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyhzdGFydCwgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMpO1xuXG4gICAgZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0uYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlKGRpdmlzaW9uSFRNTE5vZGUpO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gRElWSVNJT05fUlVMRV9OQU1FOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoRGl2aXNpb25IVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoRGl2aXNpb25IVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tUGFnaW5hdGVkSFRNTE5vZGVzKHBhZ2luYXRlZEhUTUxOb2Rlcykge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBwYWdpbmF0ZWRIVE1MTm9kZXMsICAvLy9cbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbUNoaWxkTm9kZXMoRGl2aXNpb25IVE1MTm9kZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBncm91cEhUTUxOb2RlcyhodG1sTm9kZXMpIHtcbiAgY29uc3QgZ3JvdXBlZEhUTUxOb2Rlc0FycmF5ID0gW107XG5cbiAgbGV0IGdyb3VwZWRIVE1MTm9kZXMgPSBbXTtcblxuICBodG1sTm9kZXMuZm9yRWFjaCgoaHRtbE5vZGUpID0+IHtcbiAgICBjb25zdCBodG1sTm9kZUZvb3Rub3RlSFRNTE5vZGUgPSAoaHRtbE5vZGUgaW5zdGFuY2VvZiBGb290bm90ZUhUTUxOb2RlKTtcblxuICAgIGlmICghaHRtbE5vZGVGb290bm90ZUhUTUxOb2RlKSB7XG4gICAgICBjb25zdCBncm91cGVkSFRNTE5vZGVMZW5ndGggPSBncm91cGVkSFRNTE5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKGdyb3VwZWRIVE1MTm9kZUxlbmd0aCA+IDApIHtcbiAgICAgICAgZ3JvdXBlZEhUTUxOb2Rlc0FycmF5LnB1c2goZ3JvdXBlZEhUTUxOb2Rlcyk7XG5cbiAgICAgICAgZ3JvdXBlZEhUTUxOb2RlcyA9IFtdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdyb3VwZWRIVE1MTm9kZSA9IGh0bWxOb2RlOyAvLy9cblxuICAgIGdyb3VwZWRIVE1MTm9kZXMucHVzaChncm91cGVkSFRNTE5vZGUpO1xuICB9KTtcblxuICBjb25zdCBncm91cGVkSFRNTE5vZGVMZW5ndGggPSBncm91cGVkSFRNTE5vZGVzLmxlbmd0aDtcblxuICBpZiAoZ3JvdXBlZEhUTUxOb2RlTGVuZ3RoKSB7XG4gICAgZ3JvdXBlZEhUTUxOb2Rlc0FycmF5LnB1c2goZ3JvdXBlZEhUTUxOb2Rlcyk7XG4gIH1cblxuICByZXR1cm4gZ3JvdXBlZEhUTUxOb2Rlc0FycmF5O1xufVxuXG5mdW5jdGlvbiByZW1vdmVIVE1MTm9kZXMobm9kZSkge1xuICBjb25zdCBodG1sTm9kZXMgPSBodG1sTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICBodG1sTm9kZXMuZm9yRWFjaCgoaHRtbE5vZGUpID0+IHtcbiAgICBjb25zdCBodG1sVHJhbnNmb3JtID0gSFRNTFRyYW5zZm9ybS5mcm9tSFROTE5PZGUoaHRtbE5vZGUpO1xuXG4gICAgaHRtbFRyYW5zZm9ybS5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGh0bWxOb2Rlcztcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRm9vdG5vdGVIVE1MTm9kZXMoZm9vdG5vdGVIVE1MTm9kZXMpIHtcbiAgY29uc3QgZm9vdG5vdGVIVE1MVHJhbnNmb3JtcyA9IGZvb3Rub3RlSFRNTFRyYW5zZm9ybXNGcm9tRm9vdG5vdGVIVE1MTm9kZXMoZm9vdG5vdGVIVE1MTm9kZXMpO1xuXG4gIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMuZm9yRWFjaCgoZm9vdG5vdGVIVE1MVHJhbnNmb3JtKSA9PiB7XG4gICAgZm9vdG5vdGVIVE1MVHJhbnNmb3JtLnJlbW92ZSgpO1xuICB9KTtcblxuICByZXR1cm4gZm9vdG5vdGVIVE1MVHJhbnNmb3Jtcztcbn1cblxuZnVuY3Rpb24gcGFnaW5hdGVHcm91cGVkSFRNTE5vZGVzKGdyb3VwZWRIVE1MTm9kZXNBcnJheSwgY29udGV4dCkge1xuICBjb25zdCBwYWdpbmF0ZWRIVE1MTm9kZXNBcnJheSA9IFtdO1xuXG4gIGNvbnN0IHsgbWF4aW11bVBhZ2VMaW5lcyA9IERFRkFVTFRfTUFYSU1VTV9QQUdFX0xJTkVTIH0gPSBjb250ZXh0O1xuXG4gIGxldCBwYWdlTGluZXMgPSAwLFxuICAgICAgcGFnaW5hdGVkSFRNTE5vZGVzID0gW107XG5cbiAgZ3JvdXBlZEhUTUxOb2Rlc0FycmF5LmZvckVhY2goKGdyb3VwZWRIVE1MTm9kZXMpID0+IHtcbiAgICBjb25zdCBncm91cExpbmVzID0gZ3JvdXBlZEhUTUxOb2Rlcy5yZWR1Y2UoKGdyb3VwTGluZXMsIGdyb3VwZWRIVE1MTm9kZSkgPT4ge1xuICAgICAgY29uc3QgbGluZXMgPSBncm91cGVkSFRNTE5vZGUubGluZXMoY29udGV4dCk7XG5cbiAgICAgIGdyb3VwTGluZXMgKz0gbGluZXM7XG5cbiAgICAgIHJldHVybiBncm91cExpbmVzO1xuICAgIH0sIDApO1xuXG4gICAgY29uc3QgcGFnaW5hdGVkSFRNTE5vZGVzTGVuZ3RoID0gcGFnaW5hdGVkSFRNTE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChwYWdpbmF0ZWRIVE1MTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICBpZiAocGFnZUxpbmVzICsgZ3JvdXBMaW5lcyA+IG1heGltdW1QYWdlTGluZXMpIHtcbiAgICAgICAgcGFnaW5hdGVkSFRNTE5vZGVzQXJyYXkucHVzaChwYWdpbmF0ZWRIVE1MTm9kZXMpO1xuXG4gICAgICAgIHBhZ2VMaW5lcyA9IDA7XG5cbiAgICAgICAgcGFnaW5hdGVkSFRNTE5vZGVzID0gW107XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGFnaW5hdGVkSFRNTE5vZGVzLnB1c2goLi4uZ3JvdXBlZEhUTUxOb2Rlcyk7XG5cbiAgICBwYWdlTGluZXMgKz0gZ3JvdXBMaW5lcztcbiAgfSk7XG5cbiAgY29uc3QgcGFnaW5hdGVkSFRNTE5vZGVzTGVuZ3RoID0gcGFnaW5hdGVkSFRNTE5vZGVzLmxlbmd0aDtcblxuICBpZiAocGFnaW5hdGVkSFRNTE5vZGVzTGVuZ3RoKSB7XG4gICAgcGFnaW5hdGVkSFRNTE5vZGVzQXJyYXkucHVzaChwYWdpbmF0ZWRIVE1MTm9kZXMpO1xuICB9XG5cbiAgcmV0dXJuIHBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5O1xufVxuXG5mdW5jdGlvbiByZW9yZGVyRm9vdG5vdGVIVE1MTm9kZXMoZm9vdG5vdGVMaW5rSFRNTE5vZGVzLCBmb290bm90ZUhUTUxUcmFuc2Zvcm1zLCBjb250ZXh0KSB7XG4gIGNvbnN0IGZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm1zID0gZm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybXNGcm9tRm9vdG5vdGVMaW5rSFRNTE5vZGVzKGZvb3Rub3RlTGlua0hUTUxOb2Rlcyk7XG5cbiAgYmFja3dhcmRzRm9yRWFjaChmb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtcywgKGZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gZm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybS5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgIGZvb3Rub3RlSFRNTFRyYW5zZm9ybSA9IGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMuZmluZCgoZm9vdG5vdGVIVE1MVHJhbnNmb3JtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyTWF0Y2hlcyA9IGZvb3Rub3RlSFRNTFRyYW5zZm9ybS5tYXRjaElkZW50aWZpZXIoaWRlbnRpZmllciwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChpZGVudGlmaWVyTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGZvb3Rub3RlSFRNTFRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgZm9vdG5vdGVIVE1MVHJhbnNmb3JtLmFkZEFmdGVyRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybShmb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBudW1iZXJGb290bm90ZUxpbmtIVE1MTm9kZXMoZm9vdG5vdGVIVE1MTm9kZXMsIGZvb3Rub3RlTGlua0hUTUxOb2RlcywgaWRlbnRpZmllck1hcCwgY29udGV4dCkge1xuICBjb25zdCBpZGVudGlmaWVycyA9IE9iamVjdC5rZXlzKGlkZW50aWZpZXJNYXApLFxuICAgICAgICBpZGVudGlmaWVyc0xlbmd0aCA9IGlkZW50aWZpZXJzLmxlbmd0aCxcbiAgICAgICAgc3RhcnQgPSBpZGVudGlmaWVyc0xlbmd0aCArIDE7XG5cbiAgZm9vdG5vdGVIVE1MTm9kZXMuZm9yRWFjaCgoZm9vdG5vdGVIVE1MTm9kZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gZm9vdG5vdGVIVE1MTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgIG51bWJlciA9IHN0YXJ0ICsgaW5kZXg7XG5cbiAgICBpZGVudGlmaWVyTWFwW2lkZW50aWZpZXJdID0gbnVtYmVyO1xuICB9KTtcblxuICBmb290bm90ZUxpbmtIVE1MTm9kZXMuZm9yRWFjaCgoZm9vdG5vdGVMaW5rSFRNTE5vZGUpID0+IHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gZm9vdG5vdGVMaW5rSFRNTE5vZGUuaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICBudW1iZXIgPSBpZGVudGlmaWVyTWFwW2lkZW50aWZpZXJdO1xuXG4gICAgZm9vdG5vdGVMaW5rSFRNTE5vZGUuc2V0TnVtYmVyKG51bWJlcik7XG4gIH0pXG5cbiAgcmV0dXJuIHN0YXJ0O1xufVxuXG5mdW5jdGlvbiByZW1vdmVGb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZShmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSkge1xuICBjb25zdCBmb290bm90ZXNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtID0gRm9vdG5vdGVzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybS5mcm9tRm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUoZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUpO1xuXG4gIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0ucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZShub2RlKSB7XG4gIGxldCBwYWdlTnVtYmVycyA9IGZhbHNlO1xuXG4gIGNvbnN0IHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZSA9IHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gIGlmIChwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBwYWdlTnVtYmVyRGlyZWN0aXZlSFROTFRyYW5zZm9ybSA9IFBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MVHJhbnNmb3JtLmZyb21QYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUocGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlKTtcblxuICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE5MVHJhbnNmb3JtLnJlbW92ZSgpO1xuXG4gICAgcGFnZU51bWJlcnMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHBhZ2VOdW1iZXJzO1xufVxuXG5mdW5jdGlvbiByZW1vdmVOZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXMobm9kZSkge1xuICBjb25zdCBuZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXMgPSBuZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgbmVzdGVkRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybXMgPSBuZXN0ZWRGb290bm90ZUxpbmtIVE1MVHJhbnNmb3Jtc0Zyb21OZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXMobmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzKTtcblxuICBuZXN0ZWRGb290bm90ZUxpbmtIVE1MVHJhbnNmb3Jtcy5mb3JFYWNoKChuZXN0ZWRGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtKSA9PiB7XG4gICAgbmVzdGVkRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybS5yZW1vdmUoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXNGcm9tRm9vdG5vdGVIVE1MTm9kZXMoZm9vdG5vdGVIVE1MTm9kZXMpIHtcbiAgY29uc3QgZm9vdG5vdGVIVE1MVHJhbnNmb3JtcyA9IGZvb3Rub3RlSFRNTE5vZGVzLm1hcCgoZm9vdG5vdGVIVE1MTm9kZSkgPT4ge1xuICAgIGNvbnN0IGZvb3Rub3RlSFRNTFRyYW5zZm9ybSA9IEZvb3Rub3RlSFRNTFRyYW5zZm9ybS5mcm9tRm9vdG5vdGVIVE1MTm9kZShmb290bm90ZUhUTUxOb2RlKTtcblxuICAgIHJldHVybiBmb290bm90ZUhUTUxUcmFuc2Zvcm07XG4gIH0pO1xuXG4gIHJldHVybiBmb290bm90ZUhUTUxUcmFuc2Zvcm1zO1xufVxuXG5mdW5jdGlvbiBsaW5lSFRNTFRyYW5zZm9ybXNGcm9tRm9vdG5vdGVIVE1MVHJhbnNmb3Jtcyhmb290bm90ZUhUTUxUcmFuc2Zvcm1zKSB7XG4gIGNvbnN0IGxpbmVIVE1MVHJhbnNmb3JtcyA9IGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMubWFwKChmb290bm90ZUhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICBjb25zdCBsaW5lSFRNTFRyYW5zZm9ybSA9IExpbmVIVE1MVHJhbnNmb3JtLmZyb21Gb290bm90ZUhUTUxUcmFuc2Zvcm0oZm9vdG5vdGVIVE1MVHJhbnNmb3JtKTtcblxuICAgIHJldHVybiBsaW5lSFRNTFRyYW5zZm9ybTtcbiAgfSk7XG5cbiAgcmV0dXJuIGxpbmVIVE1MVHJhbnNmb3Jtcztcbn1cblxuZnVuY3Rpb24gZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXNGcm9tTGluZUhUTUxUcmFuc2Zvcm1zKGxpbmVIVE1MVHJhbnNmb3JtcywgaWRlbnRpZmllck1hcCwgc3RhcnQpIHtcbiAgY29uc3QgbnVtYmVycyA9IE9iamVjdC52YWx1ZXMoaWRlbnRpZmllck1hcCksXG4gICAgICAgIGlkZW50aWZpZXJzID0gT2JqZWN0LmtleXMoaWRlbnRpZmllck1hcCksXG4gICAgICAgIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zID0gbGluZUhUTUxUcmFuc2Zvcm1zLm1hcCgobGluZUhUTUxUcmFuc2Zvcm0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgbnVtYmVyID0gc3RhcnQgKyBpbmRleDtcblxuICAgICAgICAgIGluZGV4ID0gbnVtYmVycy5pbmRleE9mKG51bWJlcik7XG5cbiAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gaWRlbnRpZmllcnNbaW5kZXhdLFxuICAgICAgICAgICAgICAgIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0gPSBGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtLmZyb21MaW5lVE1MVHJhbnNmb3JtQW5kSWRlbnRpZmllcihsaW5lSFRNTFRyYW5zZm9ybSwgaWRlbnRpZmllcik7XG5cbiAgICAgICAgICByZXR1cm4gZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zO1xufVxuXG5mdW5jdGlvbiBmb290bm90ZUxpbmtIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUxpbmtIVE1MTm9kZXMoZm9vdG5vdGVMaW5rSFRNTE5vZGVzKSB7XG4gIGNvbnN0IGZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm1zID0gZm9vdG5vdGVMaW5rSFRNTE5vZGVzLm1hcCgoZm9vdG5vdGVMaW5rSFRNTE5vZGUpID0+IHtcbiAgICBjb25zdCBmb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtID0gRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybS5mcm9tRm9vdG5vdGVMaW5rSFRNTE5vZGUoZm9vdG5vdGVMaW5rSFRNTE5vZGUpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm07XG4gIH0pO1xuXG4gIHJldHVybiBmb290bm90ZUxpbmtIVE1MVHJhbnNmb3Jtcztcbn1cblxuZnVuY3Rpb24gbmVzdGVkRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybXNGcm9tTmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzKG5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2Rlcykge1xuICBjb25zdCBuZXN0ZWRGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtcyA9IG5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2Rlcy5tYXAoKG5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2RlKSA9PiB7XG4gICAgY29uc3QgbmVzdGVkRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybSA9IE5lc3RlZEZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm0uZnJvbU5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2RlKG5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2RlKTtcblxuICAgIHJldHVybiBuZXN0ZWRGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtO1xuICB9KTtcblxuICByZXR1cm4gbmVzdGVkRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybXM7XG59XG4iXSwibmFtZXMiOlsiRGl2aXNpb25IVE1MTm9kZSIsImJhY2t3YXJkc0ZvckVhY2giLCJhcnJheVV0aWxpdGllcyIsImNsYXNzTmFtZSIsImNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImdldFJ1bGVOYW1lIiwicnVsZU5tZSIsIkRJVklTSU9OX1JVTEVfTkFNRSIsImdldEZvb3Rub3RlSFRNTE5vZGVzIiwibm9kZSIsImZvb3Rub3RlSFRNTE5vZGVzIiwiZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZSIsImdldEZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlIiwiZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUiLCJmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIiwicmVzb2x2ZSIsImRpdmlzaW9uSFRNTE5vZGVzIiwicGFnZU51bWJlciIsInJlbW92ZU5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2RlcyIsInBhZ2VOdW1iZXJzIiwicmVtb3ZlUGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3JtcyIsInJlbW92ZUZvb3Rub3RlSFRNTE5vZGVzIiwicmVtb3ZlRm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUiLCJmb290bm90ZUxpbmtIVE1MTm9kZXMiLCJmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZSIsInJlb3JkZXJGb290bm90ZUhUTUxOb2RlcyIsImh0bWxOb2RlcyIsInJlbW92ZUhUTUxOb2RlcyIsImlkZW50aWZpZXJNYXAiLCJncm91cGVkSFRNTE5vZGVzQXJyYXkiLCJncm91cEhUTUxOb2RlcyIsInBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5IiwicGFnaW5hdGVHcm91cGVkSFRNTE5vZGVzIiwiZm9yRWFjaCIsInBhZ2luYXRlZEhUTUxOb2RlcyIsImRpdmlzaW9uSFRNTE5vZGUiLCJmcm9tUGFnaW5hdGVkSFRNTE5vZGVzIiwicmVzb2x2ZUZvb3Rub3RlcyIsInBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtIiwiUGFnZU51bWJlckhUTUxUcmFuc2Zvcm0iLCJmcm9tUGFnZU51bWJlciIsImFwcGVuZFRvRGl2aXNpb25IVE1MTm9kZSIsInB1c2giLCJzdGFydCIsIm51bWJlckZvb3Rub3RlTGlua0hUTUxOb2RlcyIsImxpbmVIVE1MVHJhbnNmb3JtcyIsImxpbmVIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUhUTUxUcmFuc2Zvcm1zIiwiZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMiLCJmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21MaW5lSFRNTFRyYW5zZm9ybXMiLCJmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSIsIkZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIiwiZnJvbVN0YXJ0QW5kRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMiLCJhc1N0cmluZyIsInN0cmluZyIsImZyb21Ob3RoaW5nIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIiwiY2hpbGROb2RlcyIsImZyb21DaGlsZE5vZGVzIiwidGFnTmFtZSIsImdyb3VwZWRIVE1MTm9kZXMiLCJodG1sTm9kZSIsImh0bWxOb2RlRm9vdG5vdGVIVE1MTm9kZSIsIkZvb3Rub3RlSFRNTE5vZGUiLCJncm91cGVkSFRNTE5vZGVMZW5ndGgiLCJsZW5ndGgiLCJncm91cGVkSFRNTE5vZGUiLCJodG1sTm9kZXNGcm9tTm9kZSIsImh0bWxUcmFuc2Zvcm0iLCJIVE1MVHJhbnNmb3JtIiwiZnJvbUhUTkxOT2RlIiwicmVtb3ZlIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUhUTUxOb2RlcyIsImZvb3Rub3RlSFRNTFRyYW5zZm9ybSIsIm1heGltdW1QYWdlTGluZXMiLCJERUZBVUxUX01BWElNVU1fUEFHRV9MSU5FUyIsInBhZ2VMaW5lcyIsImdyb3VwTGluZXMiLCJyZWR1Y2UiLCJsaW5lcyIsInBhZ2luYXRlZEhUTUxOb2Rlc0xlbmd0aCIsImZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm1zIiwiZm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybXNGcm9tRm9vdG5vdGVMaW5rSFRNTE5vZGVzIiwiZm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybSIsImlkZW50aWZpZXIiLCJmaW5kIiwiaWRlbnRpZmllck1hdGNoZXMiLCJtYXRjaElkZW50aWZpZXIiLCJhZGRBZnRlckZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm0iLCJpZGVudGlmaWVycyIsIk9iamVjdCIsImtleXMiLCJpZGVudGlmaWVyc0xlbmd0aCIsImZvb3Rub3RlSFRNTE5vZGUiLCJpbmRleCIsIm51bWJlciIsImZvb3Rub3RlTGlua0hUTUxOb2RlIiwic2V0TnVtYmVyIiwiZm9vdG5vdGVzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSIsIkZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0iLCJmcm9tRm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSIsInBhZ2VOdW1iZXJEaXJlY3RpdmVIVE5MVHJhbnNmb3JtIiwiUGFnZU51bWJlckRpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0iLCJmcm9tUGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlIiwibmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzIiwibmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUiLCJuZXN0ZWRGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtcyIsIm5lc3RlZEZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm1zRnJvbU5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2RlcyIsIm5lc3RlZEZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm0iLCJtYXAiLCJGb290bm90ZUhUTUxUcmFuc2Zvcm0iLCJmcm9tRm9vdG5vdGVIVE1MTm9kZSIsImxpbmVIVE1MVHJhbnNmb3JtIiwiTGluZUhUTUxUcmFuc2Zvcm0iLCJmcm9tRm9vdG5vdGVIVE1MVHJhbnNmb3JtIiwibnVtYmVycyIsInZhbHVlcyIsImluZGV4T2YiLCJmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtIiwiRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybSIsImZyb21MaW5lVE1MVHJhbnNmb3JtQW5kSWRlbnRpZmllciIsIkZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm0iLCJmcm9tRm9vdG5vdGVMaW5rSFRNTE5vZGUiLCJuZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZSIsIk5lc3RlZEZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm0iLCJmcm9tTmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBNEJxQkE7Ozt5QkExQlU7MkRB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