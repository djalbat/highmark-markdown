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
var _footnoteItem = /*#__PURE__*/ _interop_require_default(require("../../transform/html/footnoteItem"));
var _footnoteLink = /*#__PURE__*/ _interop_require_default(require("../../transform/html/footnoteLink"));
var _footnotesList = /*#__PURE__*/ _interop_require_default(require("../../transform/html/footnotesList"));
var _footnotesDirective = /*#__PURE__*/ _interop_require_default(require("../../transform/html/footnotesDirective"));
var _nestedFootnoteLink = /*#__PURE__*/ _interop_require_default(require("../../transform/html/nestedFootnoteLink"));
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
            value: function resolve(divisionHTMLNodes, context) {
                var node = this, nestedFootnoteLinkHTMLNodes = (0, _html2.nestedFootnoteLinkHTMLNodesFromNode)(node);
                removeNestedFootnoteLinkHTMLNodes(nestedFootnoteLinkHTMLNodes);
                var footnoteHTMLNodes = this.getFootnoteHTMLNodes(), footnoteHTMLTransforms = removeFootnoteHTMLNodes(footnoteHTMLNodes), footnotesDirectiveHTMLNode = this.getFootnotesDirectiveHTMLNode();
                if (footnotesDirectiveHTMLNode !== null) {
                    removeFootnotesDirectiveHTMLNode(footnotesDirectiveHTMLNode);
                    var footnoteLinkHTMLNodes = (0, _html2.footnoteLinkHTMLNodesFromNode)(node);
                    reorderFootnoteHTMLNodes(footnoteLinkHTMLNodes, footnoteHTMLTransforms, context);
                }
                var htmlNodes = (0, _html2.htmlNodesFromNode)(node);
                removeHTMLNodes(htmlNodes);
                var groupedHTMLNodesArray = groupHTMLNodes(htmlNodes), paginatedHTMLNodesArray = paginateGroupedHTMLNodes(groupedHTMLNodesArray, context);
                var start = 1;
                paginatedHTMLNodesArray.forEach(function(paginatedHTMLNodes) {
                    var divisionHTMLNode = DivisionHTMLNode.fromPaginatedHTMLNodes(paginatedHTMLNodes);
                    start = divisionHTMLNode.resolveFootnotes(start, context);
                    divisionHTMLNodes.push(divisionHTMLNode);
                });
            }
        },
        {
            key: "resolveFootnotes",
            value: function resolveFootnotes(start, context) {
                var node = this, previousStart = start, footnoteHTMLNodes = (0, _html2.footnoteHTMLNodesFromNode)(node), footnoteLinkHTMLNodes = (0, _html2.footnoteLinkHTMLNodesFromNode)(node), footnoteHTMLTransforms = removeFootnoteHTMLNodes(footnoteHTMLNodes);
                // start = filterAndSortFootnoteHTMLTransforms(footnoteHTMLTransforms, footnoteLinkHTMLNodes, start, context);
                var latestStart = start, lineHTMLTransforms = lineHTMLTransformsFromFootnoteHTMLTransforms(footnoteHTMLTransforms), footnoteItemHTMLTransforms = footnoteItemHTMLTransformsFromLineHTMLTransforms(lineHTMLTransforms);
                start = previousStart; ///
                var divisionHTMLNode = this, footnotesListHTMLTransform = _footnotesList.default.fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms);
                footnotesListHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
                start = latestStart; ///
                return start;
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
function removeHTMLNodes(htmlNodes) {
    htmlNodes.forEach(function(htmlNode) {
        var htmlTransform = _html1.default.fromHTNLNOde(htmlNode);
        htmlTransform.remove();
    });
}
function removeFootnoteHTMLNodes(footnoteHTMLNodes) {
    var footnoteHTMLTransforms = footnoteHTMLTransformsFromFootnoteHTMLNodes(footnoteHTMLNodes);
    footnoteHTMLTransforms.forEach(function(footnoteHTMLTransform) {
        footnoteHTMLTransform.remove();
    });
    return footnoteHTMLTransforms;
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
function removeFootnotesDirectiveHTMLNode(footnotesDirectiveHTMLNode) {
    var footnotesDirectiveHTMLTransform = _footnotesDirective.default.fromFootnotesDirectiveHTMLNode(footnotesDirectiveHTMLNode);
    footnotesDirectiveHTMLTransform.remove();
}
function removeNestedFootnoteLinkHTMLNodes(nestedFootnoteLinkHTMLNodes) {
    var nestedFootnoteLinkHTMLTransforms = nestedFootnoteLinkHTMLTransformsFromNestedFootnoteLinkHTMLNodes(nestedFootnoteLinkHTMLNodes);
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
function footnoteItemHTMLTransformsFromLineHTMLTransforms(lineHTMLTransforms) {
    var footnoteItemHTMLTransforms = lineHTMLTransforms.map(function(lineHTMLTransform) {
        var identifier = null, footnoteItemHTMLTransform = _footnoteItem.default.fromLineTMLTransformAndIdentifier(lineHTMLTransform, identifier);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuaW1wb3J0IEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sXCI7XG5pbXBvcnQgRm9vdG5vdGVIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sL2Zvb3Rub3RlXCI7XG5pbXBvcnQgTGluZUhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2xpbmVcIjtcbmltcG9ydCBGb290bm90ZUhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2Zvb3Rub3RlXCI7XG5pbXBvcnQgRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvZm9vdG5vdGVJdGVtXCI7XG5pbXBvcnQgRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvZm9vdG5vdGVMaW5rXCI7XG5pbXBvcnQgRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2Zvb3Rub3Rlc0xpc3RcIjtcbmltcG9ydCBGb290bm90ZXNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9mb290bm90ZXNEaXJlY3RpdmVcIjtcbmltcG9ydCBOZXN0ZWRGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9uZXN0ZWRGb290bm90ZUxpbmtcIjtcblxuaW1wb3J0IHsgRElWSVNJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9NQVhJTVVNX1BBR0VfTElORVMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBodG1sTm9kZXNGcm9tTm9kZSwgZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZSwgZm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUsIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUsIG5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9odG1sXCI7XG5cbmNvbnN0IHsgYmFja3dhcmRzRm9yRWFjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlzaW9uSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgcnVsZU5tZSA9IERJVklTSU9OX1JVTEVfTkFNRTtcblxuICAgIHJldHVybiBydWxlTm1lO1xuICB9XG5cbiAgZ2V0Rm9vdG5vdGVIVE1MTm9kZXMoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmb290bm90ZUhUTUxOb2RlcyA9IGZvb3Rub3RlSFRNTE5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVIVE1MTm9kZXM7XG4gIH1cblxuICBnZXRGb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlID0gZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKVxuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlO1xuICB9XG5cbiAgcmVzb2x2ZShkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgbmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzID0gbmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICByZW1vdmVOZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXMobmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzKTtcblxuICAgIGNvbnN0IGZvb3Rub3RlSFRNTE5vZGVzID0gdGhpcy5nZXRGb290bm90ZUhUTUxOb2RlcygpLFxuICAgICAgICAgIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMgPSByZW1vdmVGb290bm90ZUhUTUxOb2Rlcyhmb290bm90ZUhUTUxOb2RlcyksXG4gICAgICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgPSB0aGlzLmdldEZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlKCk7XG5cbiAgICBpZiAoZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHJlbW92ZUZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlKGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlKTtcblxuICAgICAgY29uc3QgZm9vdG5vdGVMaW5rSFRNTE5vZGVzID0gZm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICAgIHJlb3JkZXJGb290bm90ZUhUTUxOb2Rlcyhmb290bm90ZUxpbmtIVE1MTm9kZXMsIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIGNvbnN0IGh0bWxOb2RlcyA9IGh0bWxOb2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gICAgcmVtb3ZlSFRNTE5vZGVzKGh0bWxOb2Rlcyk7XG5cbiAgICBjb25zdCBncm91cGVkSFRNTE5vZGVzQXJyYXkgPSBncm91cEhUTUxOb2RlcyhodG1sTm9kZXMpLFxuICAgICAgICAgIHBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5ID0gcGFnaW5hdGVHcm91cGVkSFRNTE5vZGVzKGdyb3VwZWRIVE1MTm9kZXNBcnJheSwgY29udGV4dCk7XG5cbiAgICBsZXQgc3RhcnQgPSAxO1xuXG4gICAgcGFnaW5hdGVkSFRNTE5vZGVzQXJyYXkuZm9yRWFjaCgocGFnaW5hdGVkSFRNTE5vZGVzKSA9PiB7XG4gICAgICBjb25zdCBkaXZpc2lvbkhUTUxOb2RlID0gRGl2aXNpb25IVE1MTm9kZS5mcm9tUGFnaW5hdGVkSFRNTE5vZGVzKHBhZ2luYXRlZEhUTUxOb2Rlcyk7XG5cbiAgICAgIHN0YXJ0ID0gZGl2aXNpb25IVE1MTm9kZS5yZXNvbHZlRm9vdG5vdGVzKHN0YXJ0LCBjb250ZXh0KTtcblxuICAgICAgZGl2aXNpb25IVE1MTm9kZXMucHVzaChkaXZpc2lvbkhUTUxOb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc29sdmVGb290bm90ZXMoc3RhcnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHByZXZpb3VzU3RhcnQgPSBzdGFydCwgIC8vL1xuICAgICAgICAgIGZvb3Rub3RlSFRNTE5vZGVzID0gZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZUxpbmtIVE1MTm9kZXMgPSBmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zID0gcmVtb3ZlRm9vdG5vdGVIVE1MTm9kZXMoZm9vdG5vdGVIVE1MTm9kZXMpO1xuXG4gICAgLy8gc3RhcnQgPSBmaWx0ZXJBbmRTb3J0Rm9vdG5vdGVIVE1MVHJhbnNmb3Jtcyhmb290bm90ZUhUTUxUcmFuc2Zvcm1zLCBmb290bm90ZUxpbmtIVE1MTm9kZXMsIHN0YXJ0LCBjb250ZXh0KTtcblxuICAgIGNvbnN0IGxhdGVzdFN0YXJ0ID0gc3RhcnQsICAvLy9cbiAgICAgICAgICBsaW5lSFRNTFRyYW5zZm9ybXMgPSBsaW5lSFRNTFRyYW5zZm9ybXNGcm9tRm9vdG5vdGVIVE1MVHJhbnNmb3Jtcyhmb290bm90ZUhUTUxUcmFuc2Zvcm1zKSxcbiAgICAgICAgICBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyA9IGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zRnJvbUxpbmVIVE1MVHJhbnNmb3JtcyhsaW5lSFRNTFRyYW5zZm9ybXMpO1xuXG4gICAgc3RhcnQgPSBwcmV2aW91c1N0YXJ0OyAgLy8vXG5cbiAgICBjb25zdCBkaXZpc2lvbkhUTUxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtID0gRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0uZnJvbVN0YXJ0QW5kRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMoc3RhcnQsIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zKTtcblxuICAgIGZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtLmFwcGVuZFRvRGl2aXNpb25IVE1MTm9kZShkaXZpc2lvbkhUTUxOb2RlKTtcblxuICAgIHN0YXJ0ID0gbGF0ZXN0U3RhcnQ7ICAvLy9cblxuICAgIHJldHVybiBzdGFydDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IERJVklTSU9OX1JVTEVfTkFNRTsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBudWxsO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKERpdmlzaW9uSFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKERpdmlzaW9uSFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbVBhZ2luYXRlZEhUTUxOb2RlcyhwYWdpbmF0ZWRIVE1MTm9kZXMpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gcGFnaW5hdGVkSFRNTE5vZGVzLCAgLy8vXG4gICAgICAgICAgZGl2aXNpb25IVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21DaGlsZE5vZGVzKERpdmlzaW9uSFRNTE5vZGUsIGNoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ3JvdXBIVE1MTm9kZXMoaHRtbE5vZGVzKSB7XG4gIGNvbnN0IGdyb3VwZWRIVE1MTm9kZXNBcnJheSA9IFtdO1xuXG4gIGxldCBncm91cGVkSFRNTE5vZGVzID0gW107XG5cbiAgaHRtbE5vZGVzLmZvckVhY2goKGh0bWxOb2RlKSA9PiB7XG4gICAgY29uc3QgaHRtbE5vZGVGb290bm90ZUhUTUxOb2RlID0gKGh0bWxOb2RlIGluc3RhbmNlb2YgRm9vdG5vdGVIVE1MTm9kZSk7XG5cbiAgICBpZiAoIWh0bWxOb2RlRm9vdG5vdGVIVE1MTm9kZSkge1xuICAgICAgY29uc3QgZ3JvdXBlZEhUTUxOb2RlTGVuZ3RoID0gZ3JvdXBlZEhUTUxOb2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChncm91cGVkSFRNTE5vZGVMZW5ndGggPiAwKSB7XG4gICAgICAgIGdyb3VwZWRIVE1MTm9kZXNBcnJheS5wdXNoKGdyb3VwZWRIVE1MTm9kZXMpO1xuXG4gICAgICAgIGdyb3VwZWRIVE1MTm9kZXMgPSBbXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBncm91cGVkSFRNTE5vZGUgPSBodG1sTm9kZTsgLy8vXG5cbiAgICBncm91cGVkSFRNTE5vZGVzLnB1c2goZ3JvdXBlZEhUTUxOb2RlKTtcbiAgfSk7XG5cbiAgY29uc3QgZ3JvdXBlZEhUTUxOb2RlTGVuZ3RoID0gZ3JvdXBlZEhUTUxOb2Rlcy5sZW5ndGg7XG5cbiAgaWYgKGdyb3VwZWRIVE1MTm9kZUxlbmd0aCkge1xuICAgIGdyb3VwZWRIVE1MTm9kZXNBcnJheS5wdXNoKGdyb3VwZWRIVE1MTm9kZXMpO1xuICB9XG5cbiAgcmV0dXJuIGdyb3VwZWRIVE1MTm9kZXNBcnJheTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSFRNTE5vZGVzKGh0bWxOb2Rlcykge1xuICBodG1sTm9kZXMuZm9yRWFjaCgoaHRtbE5vZGUpID0+IHtcbiAgICBjb25zdCBodG1sVHJhbnNmb3JtID0gSFRNTFRyYW5zZm9ybS5mcm9tSFROTE5PZGUoaHRtbE5vZGUpO1xuXG4gICAgaHRtbFRyYW5zZm9ybS5yZW1vdmUoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZvb3Rub3RlSFRNTE5vZGVzKGZvb3Rub3RlSFRNTE5vZGVzKSB7XG4gIGNvbnN0IGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMgPSBmb290bm90ZUhUTUxUcmFuc2Zvcm1zRnJvbUZvb3Rub3RlSFRNTE5vZGVzKGZvb3Rub3RlSFRNTE5vZGVzKTtcblxuICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zLmZvckVhY2goKGZvb3Rub3RlSFRNTFRyYW5zZm9ybSkgPT4ge1xuICAgIGZvb3Rub3RlSFRNTFRyYW5zZm9ybS5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXM7XG59XG5cbmZ1bmN0aW9uIHJlb3JkZXJGb290bm90ZUhUTUxOb2Rlcyhmb290bm90ZUxpbmtIVE1MTm9kZXMsIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMsIGNvbnRleHQpIHtcbiAgY29uc3QgZm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybXMgPSBmb290bm90ZUxpbmtIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUxpbmtIVE1MTm9kZXMoZm9vdG5vdGVMaW5rSFRNTE5vZGVzKTtcblxuICBiYWNrd2FyZHNGb3JFYWNoKGZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm1zLCAoZm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybSkgPT4ge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBmb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgZm9vdG5vdGVIVE1MVHJhbnNmb3JtID0gZm9vdG5vdGVIVE1MVHJhbnNmb3Jtcy5maW5kKChmb290bm90ZUhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXJNYXRjaGVzID0gZm9vdG5vdGVIVE1MVHJhbnNmb3JtLm1hdGNoSWRlbnRpZmllcihpZGVudGlmaWVyLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGlkZW50aWZpZXJNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoZm9vdG5vdGVIVE1MVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm0uYWRkQWZ0ZXJGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtKGZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBhZ2luYXRlR3JvdXBlZEhUTUxOb2Rlcyhncm91cGVkSFRNTE5vZGVzQXJyYXksIGNvbnRleHQpIHtcbiAgY29uc3QgcGFnaW5hdGVkSFRNTE5vZGVzQXJyYXkgPSBbXTtcblxuICBjb25zdCB7IG1heGltdW1QYWdlTGluZXMgPSBERUZBVUxUX01BWElNVU1fUEFHRV9MSU5FUyB9ID0gY29udGV4dDtcblxuICBsZXQgcGFnZUxpbmVzID0gMCxcbiAgICAgIHBhZ2luYXRlZEhUTUxOb2RlcyA9IFtdO1xuXG4gIGdyb3VwZWRIVE1MTm9kZXNBcnJheS5mb3JFYWNoKChncm91cGVkSFRNTE5vZGVzKSA9PiB7XG4gICAgY29uc3QgZ3JvdXBMaW5lcyA9IGdyb3VwZWRIVE1MTm9kZXMucmVkdWNlKChncm91cExpbmVzLCBncm91cGVkSFRNTE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGxpbmVzID0gZ3JvdXBlZEhUTUxOb2RlLmxpbmVzKGNvbnRleHQpO1xuXG4gICAgICBncm91cExpbmVzICs9IGxpbmVzO1xuXG4gICAgICByZXR1cm4gZ3JvdXBMaW5lcztcbiAgICB9LCAwKTtcblxuICAgIGNvbnN0IHBhZ2luYXRlZEhUTUxOb2Rlc0xlbmd0aCA9IHBhZ2luYXRlZEhUTUxOb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAocGFnaW5hdGVkSFRNTE5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHBhZ2VMaW5lcyArIGdyb3VwTGluZXMgPiBtYXhpbXVtUGFnZUxpbmVzKSB7XG4gICAgICAgIHBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5LnB1c2gocGFnaW5hdGVkSFRNTE5vZGVzKTtcblxuICAgICAgICBwYWdlTGluZXMgPSAwO1xuXG4gICAgICAgIHBhZ2luYXRlZEhUTUxOb2RlcyA9IFtdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhZ2luYXRlZEhUTUxOb2Rlcy5wdXNoKC4uLmdyb3VwZWRIVE1MTm9kZXMpO1xuXG4gICAgcGFnZUxpbmVzICs9IGdyb3VwTGluZXM7XG4gIH0pO1xuXG4gIGNvbnN0IHBhZ2luYXRlZEhUTUxOb2Rlc0xlbmd0aCA9IHBhZ2luYXRlZEhUTUxOb2Rlcy5sZW5ndGg7XG5cbiAgaWYgKHBhZ2luYXRlZEhUTUxOb2Rlc0xlbmd0aCkge1xuICAgIHBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5LnB1c2gocGFnaW5hdGVkSFRNTE5vZGVzKTtcbiAgfVxuXG4gIHJldHVybiBwYWdpbmF0ZWRIVE1MTm9kZXNBcnJheTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUoZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUpIHtcbiAgY29uc3QgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSA9IEZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0uZnJvbUZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlKGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlKTtcblxuICBmb290bm90ZXNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVOZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXMobmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzKSB7XG4gIGNvbnN0IG5lc3RlZEZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm1zID0gbmVzdGVkRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybXNGcm9tTmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzKG5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2Rlcyk7XG5cbiAgbmVzdGVkRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybXMuZm9yRWFjaCgobmVzdGVkRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybSkgPT4ge1xuICAgIG5lc3RlZEZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm0ucmVtb3ZlKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmb290bm90ZUhUTUxUcmFuc2Zvcm1zRnJvbUZvb3Rub3RlSFRNTE5vZGVzKGZvb3Rub3RlSFRNTE5vZGVzKSB7XG4gIGNvbnN0IGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMgPSBmb290bm90ZUhUTUxOb2Rlcy5tYXAoKGZvb3Rub3RlSFRNTE5vZGUpID0+IHtcbiAgICBjb25zdCBmb290bm90ZUhUTUxUcmFuc2Zvcm0gPSBGb290bm90ZUhUTUxUcmFuc2Zvcm0uZnJvbUZvb3Rub3RlSFRNTE5vZGUoZm9vdG5vdGVIVE1MTm9kZSk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVIVE1MVHJhbnNmb3JtO1xuICB9KTtcblxuICByZXR1cm4gZm9vdG5vdGVIVE1MVHJhbnNmb3Jtcztcbn1cblxuZnVuY3Rpb24gbGluZUhUTUxUcmFuc2Zvcm1zRnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybXMoZm9vdG5vdGVIVE1MVHJhbnNmb3Jtcykge1xuICBjb25zdCBsaW5lSFRNTFRyYW5zZm9ybXMgPSBmb290bm90ZUhUTUxUcmFuc2Zvcm1zLm1hcCgoZm9vdG5vdGVIVE1MVHJhbnNmb3JtKSA9PiB7XG4gICAgY29uc3QgbGluZUhUTUxUcmFuc2Zvcm0gPSBMaW5lSFRNTFRyYW5zZm9ybS5mcm9tRm9vdG5vdGVIVE1MVHJhbnNmb3JtKGZvb3Rub3RlSFRNTFRyYW5zZm9ybSk7XG5cbiAgICByZXR1cm4gbGluZUhUTUxUcmFuc2Zvcm07XG4gIH0pO1xuXG4gIHJldHVybiBsaW5lSFRNTFRyYW5zZm9ybXM7XG59XG5cbmZ1bmN0aW9uIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zRnJvbUxpbmVIVE1MVHJhbnNmb3JtcyhsaW5lSFRNTFRyYW5zZm9ybXMpIHtcbiAgY29uc3QgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMgPSBsaW5lSFRNTFRyYW5zZm9ybXMubWFwKChsaW5lSFRNTFRyYW5zZm9ybSkgPT4ge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBudWxsLFxuICAgICAgICAgIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0gPSBGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtLmZyb21MaW5lVE1MVHJhbnNmb3JtQW5kSWRlbnRpZmllcihsaW5lSFRNTFRyYW5zZm9ybSwgaWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zO1xufVxuXG5mdW5jdGlvbiBmb290bm90ZUxpbmtIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUxpbmtIVE1MTm9kZXMoZm9vdG5vdGVMaW5rSFRNTE5vZGVzKSB7XG4gIGNvbnN0IGZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm1zID0gZm9vdG5vdGVMaW5rSFRNTE5vZGVzLm1hcCgoZm9vdG5vdGVMaW5rSFRNTE5vZGUpID0+IHtcbiAgICBjb25zdCBmb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtID0gRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybS5mcm9tRm9vdG5vdGVMaW5rSFRNTE5vZGUoZm9vdG5vdGVMaW5rSFRNTE5vZGUpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm07XG4gIH0pO1xuXG4gIHJldHVybiBmb290bm90ZUxpbmtIVE1MVHJhbnNmb3Jtcztcbn1cblxuZnVuY3Rpb24gbmVzdGVkRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybXNGcm9tTmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzKG5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2Rlcykge1xuICBjb25zdCBuZXN0ZWRGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtcyA9IG5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2Rlcy5tYXAoKG5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2RlKSA9PiB7XG4gICAgY29uc3QgbmVzdGVkRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybSA9IE5lc3RlZEZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm0uZnJvbU5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2RlKG5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2RlKTtcblxuICAgIHJldHVybiBuZXN0ZWRGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtO1xuICB9KTtcblxuICByZXR1cm4gbmVzdGVkRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybXM7XG59XG4iXSwibmFtZXMiOlsiRGl2aXNpb25IVE1MTm9kZSIsImJhY2t3YXJkc0ZvckVhY2giLCJhcnJheVV0aWxpdGllcyIsImNsYXNzTmFtZSIsImNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImdldFJ1bGVOYW1lIiwicnVsZU5tZSIsIkRJVklTSU9OX1JVTEVfTkFNRSIsImdldEZvb3Rub3RlSFRNTE5vZGVzIiwibm9kZSIsImZvb3Rub3RlSFRNTE5vZGVzIiwiZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZSIsImdldEZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlIiwiZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUiLCJmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIiwicmVzb2x2ZSIsImRpdmlzaW9uSFRNTE5vZGVzIiwibmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzIiwibmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUiLCJyZW1vdmVOZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXMiLCJmb290bm90ZUhUTUxUcmFuc2Zvcm1zIiwicmVtb3ZlRm9vdG5vdGVIVE1MTm9kZXMiLCJyZW1vdmVGb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSIsImZvb3Rub3RlTGlua0hUTUxOb2RlcyIsImZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlIiwicmVvcmRlckZvb3Rub3RlSFRNTE5vZGVzIiwiaHRtbE5vZGVzIiwiaHRtbE5vZGVzRnJvbU5vZGUiLCJyZW1vdmVIVE1MTm9kZXMiLCJncm91cGVkSFRNTE5vZGVzQXJyYXkiLCJncm91cEhUTUxOb2RlcyIsInBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5IiwicGFnaW5hdGVHcm91cGVkSFRNTE5vZGVzIiwic3RhcnQiLCJmb3JFYWNoIiwicGFnaW5hdGVkSFRNTE5vZGVzIiwiZGl2aXNpb25IVE1MTm9kZSIsImZyb21QYWdpbmF0ZWRIVE1MTm9kZXMiLCJyZXNvbHZlRm9vdG5vdGVzIiwicHVzaCIsInByZXZpb3VzU3RhcnQiLCJsYXRlc3RTdGFydCIsImxpbmVIVE1MVHJhbnNmb3JtcyIsImxpbmVIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUhUTUxUcmFuc2Zvcm1zIiwiZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMiLCJmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21MaW5lSFRNTFRyYW5zZm9ybXMiLCJmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSIsIkZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIiwiZnJvbVN0YXJ0QW5kRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMiLCJhcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUiLCJhc1N0cmluZyIsInN0cmluZyIsImZyb21Ob3RoaW5nIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIiwiY2hpbGROb2RlcyIsImZyb21DaGlsZE5vZGVzIiwidGFnTmFtZSIsImdyb3VwZWRIVE1MTm9kZXMiLCJodG1sTm9kZSIsImh0bWxOb2RlRm9vdG5vdGVIVE1MTm9kZSIsIkZvb3Rub3RlSFRNTE5vZGUiLCJncm91cGVkSFRNTE5vZGVMZW5ndGgiLCJsZW5ndGgiLCJncm91cGVkSFRNTE5vZGUiLCJodG1sVHJhbnNmb3JtIiwiSFRNTFRyYW5zZm9ybSIsImZyb21IVE5MTk9kZSIsInJlbW92ZSIsImZvb3Rub3RlSFRNTFRyYW5zZm9ybXNGcm9tRm9vdG5vdGVIVE1MTm9kZXMiLCJmb290bm90ZUhUTUxUcmFuc2Zvcm0iLCJmb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtcyIsImZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm1zRnJvbUZvb3Rub3RlTGlua0hUTUxOb2RlcyIsImZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm0iLCJpZGVudGlmaWVyIiwiZmluZCIsImlkZW50aWZpZXJNYXRjaGVzIiwibWF0Y2hJZGVudGlmaWVyIiwiYWRkQWZ0ZXJGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtIiwibWF4aW11bVBhZ2VMaW5lcyIsIkRFRkFVTFRfTUFYSU1VTV9QQUdFX0xJTkVTIiwicGFnZUxpbmVzIiwiZ3JvdXBMaW5lcyIsInJlZHVjZSIsImxpbmVzIiwicGFnaW5hdGVkSFRNTE5vZGVzTGVuZ3RoIiwiZm9vdG5vdGVzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSIsIkZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0iLCJmcm9tRm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUiLCJuZXN0ZWRGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtcyIsIm5lc3RlZEZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm1zRnJvbU5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2RlcyIsIm5lc3RlZEZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm0iLCJtYXAiLCJmb290bm90ZUhUTUxOb2RlIiwiRm9vdG5vdGVIVE1MVHJhbnNmb3JtIiwiZnJvbUZvb3Rub3RlSFRNTE5vZGUiLCJsaW5lSFRNTFRyYW5zZm9ybSIsIkxpbmVIVE1MVHJhbnNmb3JtIiwiZnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybSIsImZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0iLCJGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtIiwiZnJvbUxpbmVUTUxUcmFuc2Zvcm1BbmRJZGVudGlmaWVyIiwiZm9vdG5vdGVMaW5rSFRNTE5vZGUiLCJGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtIiwiZnJvbUZvb3Rub3RlTGlua0hUTUxOb2RlIiwibmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGUiLCJOZXN0ZWRGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtIiwiZnJvbU5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQXFCcUJBOzs7eUJBbkJVOzJEQUVWOzREQUNLOytEQUNHOzJEQUNDO2dFQUNJO21FQUNJO21FQUNBO29FQUNDO3lFQUNLO3lFQUNBO3lCQUVUO3lCQUNRO3FCQUMwSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVySyxJQUFNLEFBQUVDLG1CQUFxQkMseUJBQWMsQ0FBbkNEO0FBRU8sSUFBQSxBQUFNRCxpQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxPQUFPO2dCQUNmLElBQU0sQUFBRUQsWUFBYyxJQUFJLENBQUNFLFdBQVcsQ0FBOUJGO2dCQUVSLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsVUFBVUMsNkJBQWtCO2dCQUVsQyxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU8sSUFBSSxFQUNYQyxvQkFBb0JDLElBQUFBLGdDQUF5QixFQUFDRjtnQkFFcEQsT0FBT0M7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSCxPQUFPLElBQUksRUFDWEksNkJBQTZCQyxJQUFBQSx5Q0FBa0MsRUFBQ0w7Z0JBRXRFLE9BQU9JO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsaUJBQWlCLEVBQUViLE9BQU87Z0JBQ2hDLElBQU1NLE9BQU8sSUFBSSxFQUNYUSw4QkFBOEJDLElBQUFBLDBDQUFtQyxFQUFDVDtnQkFFeEVVLGtDQUFrQ0Y7Z0JBRWxDLElBQU1QLG9CQUFvQixJQUFJLENBQUNGLG9CQUFvQixJQUM3Q1kseUJBQXlCQyx3QkFBd0JYLG9CQUNqREcsNkJBQTZCLElBQUksQ0FBQ0QsNkJBQTZCO2dCQUVyRSxJQUFJQywrQkFBK0IsTUFBTTtvQkFDdkNTLGlDQUFpQ1Q7b0JBRWpDLElBQU1VLHdCQUF3QkMsSUFBQUEsb0NBQTZCLEVBQUNmO29CQUU1RGdCLHlCQUF5QkYsdUJBQXVCSCx3QkFBd0JqQjtnQkFDMUU7Z0JBRUEsSUFBTXVCLFlBQVlDLElBQUFBLHdCQUFpQixFQUFDbEI7Z0JBRXBDbUIsZ0JBQWdCRjtnQkFFaEIsSUFBTUcsd0JBQXdCQyxlQUFlSixZQUN2Q0ssMEJBQTBCQyx5QkFBeUJILHVCQUF1QjFCO2dCQUVoRixJQUFJOEIsUUFBUTtnQkFFWkYsd0JBQXdCRyxPQUFPLENBQUMsU0FBQ0M7b0JBQy9CLElBQU1DLG1CQUFtQnJDLEFBdkRWQSxpQkF1RDJCc0Msc0JBQXNCLENBQUNGO29CQUVqRUYsUUFBUUcsaUJBQWlCRSxnQkFBZ0IsQ0FBQ0wsT0FBTzlCO29CQUVqRGEsa0JBQWtCdUIsSUFBSSxDQUFDSDtnQkFDekI7WUFDRjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJMLEtBQUssRUFBRTlCLE9BQU87Z0JBQzdCLElBQU1NLE9BQU8sSUFBSSxFQUNYK0IsZ0JBQWdCUCxPQUNoQnZCLG9CQUFvQkMsSUFBQUEsZ0NBQXlCLEVBQUNGLE9BQzlDYyx3QkFBd0JDLElBQUFBLG9DQUE2QixFQUFDZixPQUN0RFcseUJBQXlCQyx3QkFBd0JYO2dCQUV2RCw4R0FBOEc7Z0JBRTlHLElBQU0rQixjQUFjUixPQUNkUyxxQkFBcUJDLDZDQUE2Q3ZCLHlCQUNsRXdCLDZCQUE2QkMsaURBQWlESDtnQkFFcEZULFFBQVFPLGVBQWdCLEdBQUc7Z0JBRTNCLElBQU1KLG1CQUFtQixJQUFJLEVBQ3ZCVSw2QkFBNkJDLHNCQUEwQixDQUFDQyxzQ0FBc0MsQ0FBQ2YsT0FBT1c7Z0JBRTVHRSwyQkFBMkJHLHdCQUF3QixDQUFDYjtnQkFFcERILFFBQVFRLGFBQWMsR0FBRztnQkFFekIsT0FBT1I7WUFDVDs7O1lBRUFpQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsU0FBUzVDLDZCQUFrQixFQUFFLEdBQUc7Z0JBRXRDLE9BQU80QztZQUNUOzs7O1lBTU9DLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxhQUFRLENBQUNELFdBQVcsQ0FsRy9CckQ7WUFrR21EOzs7WUFFL0R1RCxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTO2dCQUFJLE9BQU9GLGFBQVEsQ0FBQ0MsYUFBYSxDQXBHNUN2RCxrQkFvRytEd0Q7WUFBWTs7O1lBRXZGbEIsS0FBQUE7bUJBQVAsU0FBT0EsdUJBQXVCRixrQkFBa0I7Z0JBQzlDLElBQU1xQixhQUFhckIsb0JBQ2JDLG1CQUFtQmlCLGFBQVEsQ0FBQ0ksY0FBYyxDQXhHL0IxRCxrQkF3R2tEeUQ7Z0JBRW5FLE9BQU9wQjtZQUNUOzs7V0EzR21CckM7RUFBeUJzRCxhQUFRO0FBOEZwRCxpQkE5Rm1CdEQsa0JBOEZaMkQsV0FBVTtBQUVqQixpQkFoR21CM0Qsa0JBZ0daRyxhQUFZO0FBY3JCLFNBQVM0QixlQUFlSixTQUFTO0lBQy9CLElBQU1HLHdCQUF3QixFQUFFO0lBRWhDLElBQUk4QixtQkFBbUIsRUFBRTtJQUV6QmpDLFVBQVVRLE9BQU8sQ0FBQyxTQUFDMEI7UUFDakIsSUFBTUMsMkJBQTRCRCxBQUFRLFlBQVJBLFVBQW9CRSxpQkFBZ0I7UUFFdEUsSUFBSSxDQUFDRCwwQkFBMEI7WUFDN0IsSUFBTUUsd0JBQXdCSixpQkFBaUJLLE1BQU07WUFFckQsSUFBSUQsd0JBQXdCLEdBQUc7Z0JBQzdCbEMsc0JBQXNCVSxJQUFJLENBQUNvQjtnQkFFM0JBLG1CQUFtQixFQUFFO1lBQ3ZCO1FBQ0Y7UUFFQSxJQUFNTSxrQkFBa0JMLFVBQVUsR0FBRztRQUVyQ0QsaUJBQWlCcEIsSUFBSSxDQUFDMEI7SUFDeEI7SUFFQSxJQUFNRix3QkFBd0JKLGlCQUFpQkssTUFBTTtJQUVyRCxJQUFJRCx1QkFBdUI7UUFDekJsQyxzQkFBc0JVLElBQUksQ0FBQ29CO0lBQzdCO0lBRUEsT0FBTzlCO0FBQ1Q7QUFFQSxTQUFTRCxnQkFBZ0JGLFNBQVM7SUFDaENBLFVBQVVRLE9BQU8sQ0FBQyxTQUFDMEI7UUFDakIsSUFBTU0sZ0JBQWdCQyxjQUFhLENBQUNDLFlBQVksQ0FBQ1I7UUFFakRNLGNBQWNHLE1BQU07SUFDdEI7QUFDRjtBQUVBLFNBQVNoRCx3QkFBd0JYLGlCQUFpQjtJQUNoRCxJQUFNVSx5QkFBeUJrRCw0Q0FBNEM1RDtJQUUzRVUsdUJBQXVCYyxPQUFPLENBQUMsU0FBQ3FDO1FBQzlCQSxzQkFBc0JGLE1BQU07SUFDOUI7SUFFQSxPQUFPakQ7QUFDVDtBQUVBLFNBQVNLLHlCQUF5QkYscUJBQXFCLEVBQUVILHNCQUFzQixFQUFFakIsT0FBTztJQUN0RixJQUFNcUUsNkJBQTZCQyxvREFBb0RsRDtJQUV2RnZCLGlCQUFpQndFLDRCQUE0QixTQUFDRTtRQUM1QyxJQUFNQyxhQUFhRCwwQkFBMEJDLFVBQVUsQ0FBQ3hFLFVBQ2xEb0Usd0JBQXdCbkQsdUJBQXVCd0QsSUFBSSxDQUFDLFNBQUNMO1lBQ25ELElBQU1NLG9CQUFvQk4sc0JBQXNCTyxlQUFlLENBQUNILFlBQVl4RTtZQUU1RSxJQUFJMEUsbUJBQW1CO2dCQUNyQixPQUFPO1lBQ1Q7UUFDRixNQUFNO1FBRVosSUFBSU4sMEJBQTBCLE1BQU07WUFDbENBLHNCQUFzQlEsaUNBQWlDLENBQUNMO1FBQzFEO0lBQ0Y7QUFDRjtBQUVBLFNBQVMxQyx5QkFBeUJILHFCQUFxQixFQUFFMUIsT0FBTztJQUM5RCxJQUFNNEIsMEJBQTBCLEVBQUU7SUFFbEMsZ0NBQTBENUIsUUFBbEQ2RSxrQkFBQUEsMERBQW1CQyxxQ0FBMEI7SUFFckQsSUFBSUMsWUFBWSxHQUNaL0MscUJBQXFCLEVBQUU7SUFFM0JOLHNCQUFzQkssT0FBTyxDQUFDLFNBQUN5QjtZQXFCN0J4QjtRQXBCQSxJQUFNZ0QsYUFBYXhCLGlCQUFpQnlCLE1BQU0sQ0FBQyxTQUFDRCxZQUFZbEI7WUFDdEQsSUFBTW9CLFFBQVFwQixnQkFBZ0JvQixLQUFLLENBQUNsRjtZQUVwQ2dGLGNBQWNFO1lBRWQsT0FBT0Y7UUFDVCxHQUFHO1FBRUgsSUFBTUcsMkJBQTJCbkQsbUJBQW1CNkIsTUFBTTtRQUUxRCxJQUFJc0IsMkJBQTJCLEdBQUc7WUFDaEMsSUFBSUosWUFBWUMsYUFBYUgsa0JBQWtCO2dCQUM3Q2pELHdCQUF3QlEsSUFBSSxDQUFDSjtnQkFFN0IrQyxZQUFZO2dCQUVaL0MscUJBQXFCLEVBQUU7WUFDekI7UUFDRjtRQUVBQSxDQUFBQSxzQkFBQUEsb0JBQW1CSSxJQUFJLE9BQXZCSixxQkFBd0IscUJBQUd3QjtRQUUzQnVCLGFBQWFDO0lBQ2Y7SUFFQSxJQUFNRywyQkFBMkJuRCxtQkFBbUI2QixNQUFNO0lBRTFELElBQUlzQiwwQkFBMEI7UUFDNUJ2RCx3QkFBd0JRLElBQUksQ0FBQ0o7SUFDL0I7SUFFQSxPQUFPSjtBQUNUO0FBRUEsU0FBU1QsaUNBQWlDVCwwQkFBMEI7SUFDbEUsSUFBTTBFLGtDQUFrQ0MsMkJBQStCLENBQUNDLDhCQUE4QixDQUFDNUU7SUFFdkcwRSxnQ0FBZ0NsQixNQUFNO0FBQ3hDO0FBRUEsU0FBU2xELGtDQUFrQ0YsMkJBQTJCO0lBQ3BFLElBQU15RSxtQ0FBbUNDLGdFQUFnRTFFO0lBRXpHeUUsaUNBQWlDeEQsT0FBTyxDQUFDLFNBQUMwRDtRQUN4Q0EsZ0NBQWdDdkIsTUFBTTtJQUN4QztBQUNGO0FBRUEsU0FBU0MsNENBQTRDNUQsaUJBQWlCO0lBQ3BFLElBQU1VLHlCQUF5QlYsa0JBQWtCbUYsR0FBRyxDQUFDLFNBQUNDO1FBQ3BELElBQU12Qix3QkFBd0J3QixrQkFBcUIsQ0FBQ0Msb0JBQW9CLENBQUNGO1FBRXpFLE9BQU92QjtJQUNUO0lBRUEsT0FBT25EO0FBQ1Q7QUFFQSxTQUFTdUIsNkNBQTZDdkIsc0JBQXNCO0lBQzFFLElBQU1zQixxQkFBcUJ0Qix1QkFBdUJ5RSxHQUFHLENBQUMsU0FBQ3RCO1FBQ3JELElBQU0wQixvQkFBb0JDLGFBQWlCLENBQUNDLHlCQUF5QixDQUFDNUI7UUFFdEUsT0FBTzBCO0lBQ1Q7SUFFQSxPQUFPdkQ7QUFDVDtBQUVBLFNBQVNHLGlEQUFpREgsa0JBQWtCO0lBQzFFLElBQU1FLDZCQUE2QkYsbUJBQW1CbUQsR0FBRyxDQUFDLFNBQUNJO1FBQ3pELElBQU10QixhQUFhLE1BQ2J5Qiw0QkFBNEJDLHFCQUF5QixDQUFDQyxpQ0FBaUMsQ0FBQ0wsbUJBQW1CdEI7UUFFakgsT0FBT3lCO0lBQ1Q7SUFFQSxPQUFPeEQ7QUFDVDtBQUVBLFNBQVM2QixvREFBb0RsRCxxQkFBcUI7SUFDaEYsSUFBTWlELDZCQUE2QmpELHNCQUFzQnNFLEdBQUcsQ0FBQyxTQUFDVTtRQUM1RCxJQUFNN0IsNEJBQTRCOEIscUJBQXlCLENBQUNDLHdCQUF3QixDQUFDRjtRQUVyRixPQUFPN0I7SUFDVDtJQUVBLE9BQU9GO0FBQ1Q7QUFFQSxTQUFTbUIsZ0VBQWdFMUUsMkJBQTJCO0lBQ2xHLElBQU15RSxtQ0FBbUN6RSw0QkFBNEI0RSxHQUFHLENBQUMsU0FBQ2E7UUFDeEUsSUFBTWQsa0NBQWtDZSwyQkFBK0IsQ0FBQ0MsOEJBQThCLENBQUNGO1FBRXZHLE9BQU9kO0lBQ1Q7SUFFQSxPQUFPRjtBQUNUIn0=