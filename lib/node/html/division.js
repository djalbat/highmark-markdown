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
                var identifierMap = {}, groupedHTMLNodesArray = groupHTMLNodes(htmlNodes), paginatedHTMLNodesArray = paginateGroupedHTMLNodes(groupedHTMLNodesArray, context);
                paginatedHTMLNodesArray.forEach(function(paginatedHTMLNodes) {
                    var divisionHTMLNode = DivisionHTMLNode.fromPaginatedHTMLNodes(paginatedHTMLNodes);
                    divisionHTMLNode.resolveFootnotes(identifierMap, context);
                    divisionHTMLNodes.push(divisionHTMLNode);
                });
            }
        },
        {
            key: "resolveFootnotes",
            value: function resolveFootnotes(identifierMap, context) {
                var node = this, footnoteHTMLNodes = (0, _html2.footnoteHTMLNodesFromNode)(node), footnoteLinkHTMLNodes = (0, _html2.footnoteLinkHTMLNodesFromNode)(node), footnoteHTMLTransforms = removeFootnoteHTMLNodes(footnoteHTMLNodes), start = numberFootnoteLinkHTMLNodes(footnoteHTMLNodes, footnoteLinkHTMLNodes, identifierMap, context), lineHTMLTransforms = lineHTMLTransformsFromFootnoteHTMLTransforms(footnoteHTMLTransforms), footnoteItemHTMLTransforms = footnoteItemHTMLTransformsFromLineHTMLTransforms(lineHTMLTransforms, identifierMap, start), footnotesListHTMLTransform = _footnotesList.default.fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms), divisionHTMLNode = this; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuaW1wb3J0IEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sXCI7XG5pbXBvcnQgRm9vdG5vdGVIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sL2Zvb3Rub3RlXCI7XG5pbXBvcnQgTGluZUhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2xpbmVcIjtcbmltcG9ydCBGb290bm90ZUhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2Zvb3Rub3RlXCI7XG5pbXBvcnQgRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvZm9vdG5vdGVJdGVtXCI7XG5pbXBvcnQgRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvZm9vdG5vdGVMaW5rXCI7XG5pbXBvcnQgRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2Zvb3Rub3Rlc0xpc3RcIjtcbmltcG9ydCBGb290bm90ZXNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9mb290bm90ZXNEaXJlY3RpdmVcIjtcbmltcG9ydCBOZXN0ZWRGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9uZXN0ZWRGb290bm90ZUxpbmtcIjtcblxuaW1wb3J0IHsgRElWSVNJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9NQVhJTVVNX1BBR0VfTElORVMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBodG1sTm9kZXNGcm9tTm9kZSwgZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZSwgZm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUsIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUsIG5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9odG1sXCI7XG5cbmNvbnN0IHsgYmFja3dhcmRzRm9yRWFjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlzaW9uSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgcnVsZU5tZSA9IERJVklTSU9OX1JVTEVfTkFNRTtcblxuICAgIHJldHVybiBydWxlTm1lO1xuICB9XG5cbiAgZ2V0Rm9vdG5vdGVIVE1MTm9kZXMoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmb290bm90ZUhUTUxOb2RlcyA9IGZvb3Rub3RlSFRNTE5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVIVE1MTm9kZXM7XG4gIH1cblxuICBnZXRGb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlID0gZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKVxuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlO1xuICB9XG5cbiAgcmVzb2x2ZShkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgbmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzID0gbmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICByZW1vdmVOZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXMobmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzKTtcblxuICAgIGNvbnN0IGZvb3Rub3RlSFRNTE5vZGVzID0gdGhpcy5nZXRGb290bm90ZUhUTUxOb2RlcygpLFxuICAgICAgICAgIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMgPSByZW1vdmVGb290bm90ZUhUTUxOb2Rlcyhmb290bm90ZUhUTUxOb2RlcyksXG4gICAgICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgPSB0aGlzLmdldEZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlKCk7XG5cbiAgICBpZiAoZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHJlbW92ZUZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlKGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlKTtcblxuICAgICAgY29uc3QgZm9vdG5vdGVMaW5rSFRNTE5vZGVzID0gZm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICAgIHJlb3JkZXJGb290bm90ZUhUTUxOb2Rlcyhmb290bm90ZUxpbmtIVE1MTm9kZXMsIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIGNvbnN0IGh0bWxOb2RlcyA9IGh0bWxOb2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gICAgcmVtb3ZlSFRNTE5vZGVzKGh0bWxOb2Rlcyk7XG5cbiAgICBjb25zdCBpZGVudGlmaWVyTWFwID0ge30sXG4gICAgICAgICAgZ3JvdXBlZEhUTUxOb2Rlc0FycmF5ID0gZ3JvdXBIVE1MTm9kZXMoaHRtbE5vZGVzKSxcbiAgICAgICAgICBwYWdpbmF0ZWRIVE1MTm9kZXNBcnJheSA9IHBhZ2luYXRlR3JvdXBlZEhUTUxOb2Rlcyhncm91cGVkSFRNTE5vZGVzQXJyYXksIGNvbnRleHQpO1xuXG4gICAgcGFnaW5hdGVkSFRNTE5vZGVzQXJyYXkuZm9yRWFjaCgocGFnaW5hdGVkSFRNTE5vZGVzKSA9PiB7XG4gICAgICBjb25zdCBkaXZpc2lvbkhUTUxOb2RlID0gRGl2aXNpb25IVE1MTm9kZS5mcm9tUGFnaW5hdGVkSFRNTE5vZGVzKHBhZ2luYXRlZEhUTUxOb2Rlcyk7XG5cbiAgICAgIGRpdmlzaW9uSFRNTE5vZGUucmVzb2x2ZUZvb3Rub3RlcyhpZGVudGlmaWVyTWFwLCBjb250ZXh0KTtcblxuICAgICAgZGl2aXNpb25IVE1MTm9kZXMucHVzaChkaXZpc2lvbkhUTUxOb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc29sdmVGb290bm90ZXMoaWRlbnRpZmllck1hcCwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVIVE1MTm9kZXMgPSBmb290bm90ZUhUTUxOb2Rlc0Zyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIGZvb3Rub3RlTGlua0hUTUxOb2RlcyA9IGZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMgPSByZW1vdmVGb290bm90ZUhUTUxOb2Rlcyhmb290bm90ZUhUTUxOb2RlcyksXG4gICAgICAgICAgc3RhcnQgPSBudW1iZXJGb290bm90ZUxpbmtIVE1MTm9kZXMoZm9vdG5vdGVIVE1MTm9kZXMsIGZvb3Rub3RlTGlua0hUTUxOb2RlcywgaWRlbnRpZmllck1hcCwgY29udGV4dCksXG4gICAgICAgICAgbGluZUhUTUxUcmFuc2Zvcm1zID0gbGluZUhUTUxUcmFuc2Zvcm1zRnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybXMoZm9vdG5vdGVIVE1MVHJhbnNmb3JtcyksXG4gICAgICAgICAgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMgPSBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21MaW5lSFRNTFRyYW5zZm9ybXMobGluZUhUTUxUcmFuc2Zvcm1zLCBpZGVudGlmaWVyTWFwLCBzdGFydCksXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0gPSBGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybS5mcm9tU3RhcnRBbmRGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyhzdGFydCwgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMpLFxuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSB0aGlzOyAgLy8vXG5cbiAgICBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybS5hcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSk7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBESVZJU0lPTl9SVUxFX05BTUU7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gbnVsbDtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhEaXZpc2lvbkhUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShEaXZpc2lvbkhUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21QYWdpbmF0ZWRIVE1MTm9kZXMocGFnaW5hdGVkSFRNTE5vZGVzKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHBhZ2luYXRlZEhUTUxOb2RlcywgIC8vL1xuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tQ2hpbGROb2RlcyhEaXZpc2lvbkhUTUxOb2RlLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdyb3VwSFRNTE5vZGVzKGh0bWxOb2Rlcykge1xuICBjb25zdCBncm91cGVkSFRNTE5vZGVzQXJyYXkgPSBbXTtcblxuICBsZXQgZ3JvdXBlZEhUTUxOb2RlcyA9IFtdO1xuXG4gIGh0bWxOb2Rlcy5mb3JFYWNoKChodG1sTm9kZSkgPT4ge1xuICAgIGNvbnN0IGh0bWxOb2RlRm9vdG5vdGVIVE1MTm9kZSA9IChodG1sTm9kZSBpbnN0YW5jZW9mIEZvb3Rub3RlSFRNTE5vZGUpO1xuXG4gICAgaWYgKCFodG1sTm9kZUZvb3Rub3RlSFRNTE5vZGUpIHtcbiAgICAgIGNvbnN0IGdyb3VwZWRIVE1MTm9kZUxlbmd0aCA9IGdyb3VwZWRIVE1MTm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoZ3JvdXBlZEhUTUxOb2RlTGVuZ3RoID4gMCkge1xuICAgICAgICBncm91cGVkSFRNTE5vZGVzQXJyYXkucHVzaChncm91cGVkSFRNTE5vZGVzKTtcblxuICAgICAgICBncm91cGVkSFRNTE5vZGVzID0gW107XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ3JvdXBlZEhUTUxOb2RlID0gaHRtbE5vZGU7IC8vL1xuXG4gICAgZ3JvdXBlZEhUTUxOb2Rlcy5wdXNoKGdyb3VwZWRIVE1MTm9kZSk7XG4gIH0pO1xuXG4gIGNvbnN0IGdyb3VwZWRIVE1MTm9kZUxlbmd0aCA9IGdyb3VwZWRIVE1MTm9kZXMubGVuZ3RoO1xuXG4gIGlmIChncm91cGVkSFRNTE5vZGVMZW5ndGgpIHtcbiAgICBncm91cGVkSFRNTE5vZGVzQXJyYXkucHVzaChncm91cGVkSFRNTE5vZGVzKTtcbiAgfVxuXG4gIHJldHVybiBncm91cGVkSFRNTE5vZGVzQXJyYXk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUhUTUxOb2RlcyhodG1sTm9kZXMpIHtcbiAgaHRtbE5vZGVzLmZvckVhY2goKGh0bWxOb2RlKSA9PiB7XG4gICAgY29uc3QgaHRtbFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTkxOT2RlKGh0bWxOb2RlKTtcblxuICAgIGh0bWxUcmFuc2Zvcm0ucmVtb3ZlKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVGb290bm90ZUhUTUxOb2Rlcyhmb290bm90ZUhUTUxOb2Rlcykge1xuICBjb25zdCBmb290bm90ZUhUTUxUcmFuc2Zvcm1zID0gZm9vdG5vdGVIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUhUTUxOb2Rlcyhmb290bm90ZUhUTUxOb2Rlcyk7XG5cbiAgZm9vdG5vdGVIVE1MVHJhbnNmb3Jtcy5mb3JFYWNoKChmb290bm90ZUhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm0ucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIHJldHVybiBmb290bm90ZUhUTUxUcmFuc2Zvcm1zO1xufVxuXG5mdW5jdGlvbiByZW9yZGVyRm9vdG5vdGVIVE1MTm9kZXMoZm9vdG5vdGVMaW5rSFRNTE5vZGVzLCBmb290bm90ZUhUTUxUcmFuc2Zvcm1zLCBjb250ZXh0KSB7XG4gIGNvbnN0IGZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm1zID0gZm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybXNGcm9tRm9vdG5vdGVMaW5rSFRNTE5vZGVzKGZvb3Rub3RlTGlua0hUTUxOb2Rlcyk7XG5cbiAgYmFja3dhcmRzRm9yRWFjaChmb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtcywgKGZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gZm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybS5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgIGZvb3Rub3RlSFRNTFRyYW5zZm9ybSA9IGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMuZmluZCgoZm9vdG5vdGVIVE1MVHJhbnNmb3JtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyTWF0Y2hlcyA9IGZvb3Rub3RlSFRNTFRyYW5zZm9ybS5tYXRjaElkZW50aWZpZXIoaWRlbnRpZmllciwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChpZGVudGlmaWVyTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGZvb3Rub3RlSFRNTFRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgZm9vdG5vdGVIVE1MVHJhbnNmb3JtLmFkZEFmdGVyRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybShmb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwYWdpbmF0ZUdyb3VwZWRIVE1MTm9kZXMoZ3JvdXBlZEhUTUxOb2Rlc0FycmF5LCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5ID0gW107XG5cbiAgY29uc3QgeyBtYXhpbXVtUGFnZUxpbmVzID0gREVGQVVMVF9NQVhJTVVNX1BBR0VfTElORVMgfSA9IGNvbnRleHQ7XG5cbiAgbGV0IHBhZ2VMaW5lcyA9IDAsXG4gICAgICBwYWdpbmF0ZWRIVE1MTm9kZXMgPSBbXTtcblxuICBncm91cGVkSFRNTE5vZGVzQXJyYXkuZm9yRWFjaCgoZ3JvdXBlZEhUTUxOb2RlcykgPT4ge1xuICAgIGNvbnN0IGdyb3VwTGluZXMgPSBncm91cGVkSFRNTE5vZGVzLnJlZHVjZSgoZ3JvdXBMaW5lcywgZ3JvdXBlZEhUTUxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBsaW5lcyA9IGdyb3VwZWRIVE1MTm9kZS5saW5lcyhjb250ZXh0KTtcblxuICAgICAgZ3JvdXBMaW5lcyArPSBsaW5lcztcblxuICAgICAgcmV0dXJuIGdyb3VwTGluZXM7XG4gICAgfSwgMCk7XG5cbiAgICBjb25zdCBwYWdpbmF0ZWRIVE1MTm9kZXNMZW5ndGggPSBwYWdpbmF0ZWRIVE1MTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKHBhZ2luYXRlZEhUTUxOb2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGlmIChwYWdlTGluZXMgKyBncm91cExpbmVzID4gbWF4aW11bVBhZ2VMaW5lcykge1xuICAgICAgICBwYWdpbmF0ZWRIVE1MTm9kZXNBcnJheS5wdXNoKHBhZ2luYXRlZEhUTUxOb2Rlcyk7XG5cbiAgICAgICAgcGFnZUxpbmVzID0gMDtcblxuICAgICAgICBwYWdpbmF0ZWRIVE1MTm9kZXMgPSBbXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYWdpbmF0ZWRIVE1MTm9kZXMucHVzaCguLi5ncm91cGVkSFRNTE5vZGVzKTtcblxuICAgIHBhZ2VMaW5lcyArPSBncm91cExpbmVzO1xuICB9KTtcblxuICBjb25zdCBwYWdpbmF0ZWRIVE1MTm9kZXNMZW5ndGggPSBwYWdpbmF0ZWRIVE1MTm9kZXMubGVuZ3RoO1xuXG4gIGlmIChwYWdpbmF0ZWRIVE1MTm9kZXNMZW5ndGgpIHtcbiAgICBwYWdpbmF0ZWRIVE1MTm9kZXNBcnJheS5wdXNoKHBhZ2luYXRlZEhUTUxOb2Rlcyk7XG4gIH1cblxuICByZXR1cm4gcGFnaW5hdGVkSFRNTE5vZGVzQXJyYXk7XG59XG5cbmZ1bmN0aW9uIG51bWJlckZvb3Rub3RlTGlua0hUTUxOb2Rlcyhmb290bm90ZUhUTUxOb2RlcywgZm9vdG5vdGVMaW5rSFRNTE5vZGVzLCBpZGVudGlmaWVyTWFwLCBjb250ZXh0KSB7XG4gIGNvbnN0IGlkZW50aWZpZXJzID0gT2JqZWN0LmtleXMoaWRlbnRpZmllck1hcCksXG4gICAgICAgIGlkZW50aWZpZXJzTGVuZ3RoID0gaWRlbnRpZmllcnMubGVuZ3RoLFxuICAgICAgICBzdGFydCA9IGlkZW50aWZpZXJzTGVuZ3RoICsgMTtcblxuICBmb290bm90ZUhUTUxOb2Rlcy5mb3JFYWNoKChmb290bm90ZUhUTUxOb2RlLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBmb290bm90ZUhUTUxOb2RlLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgbnVtYmVyID0gc3RhcnQgKyBpbmRleDtcblxuICAgIGlkZW50aWZpZXJNYXBbaWRlbnRpZmllcl0gPSBudW1iZXI7XG4gIH0pO1xuXG4gIGZvb3Rub3RlTGlua0hUTUxOb2Rlcy5mb3JFYWNoKChmb290bm90ZUxpbmtIVE1MTm9kZSkgPT4ge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBmb290bm90ZUxpbmtIVE1MTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgIG51bWJlciA9IGlkZW50aWZpZXJNYXBbaWRlbnRpZmllcl07XG5cbiAgICBmb290bm90ZUxpbmtIVE1MTm9kZS5zZXROdW1iZXIobnVtYmVyKTtcbiAgfSlcblxuICByZXR1cm4gc3RhcnQ7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlKGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlKSB7XG4gIGNvbnN0IGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0gPSBGb290bm90ZXNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtLmZyb21Gb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZShmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSk7XG5cbiAgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzKG5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2Rlcykge1xuICBjb25zdCBuZXN0ZWRGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtcyA9IG5lc3RlZEZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm1zRnJvbU5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2RlcyhuZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXMpO1xuXG4gIG5lc3RlZEZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm1zLmZvckVhY2goKG5lc3RlZEZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICBuZXN0ZWRGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtLnJlbW92ZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZm9vdG5vdGVIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUhUTUxOb2Rlcyhmb290bm90ZUhUTUxOb2Rlcykge1xuICBjb25zdCBmb290bm90ZUhUTUxUcmFuc2Zvcm1zID0gZm9vdG5vdGVIVE1MTm9kZXMubWFwKChmb290bm90ZUhUTUxOb2RlKSA9PiB7XG4gICAgY29uc3QgZm9vdG5vdGVIVE1MVHJhbnNmb3JtID0gRm9vdG5vdGVIVE1MVHJhbnNmb3JtLmZyb21Gb290bm90ZUhUTUxOb2RlKGZvb3Rub3RlSFRNTE5vZGUpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlSFRNTFRyYW5zZm9ybTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXM7XG59XG5cbmZ1bmN0aW9uIGxpbmVIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUhUTUxUcmFuc2Zvcm1zKGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMpIHtcbiAgY29uc3QgbGluZUhUTUxUcmFuc2Zvcm1zID0gZm9vdG5vdGVIVE1MVHJhbnNmb3Jtcy5tYXAoKGZvb3Rub3RlSFRNTFRyYW5zZm9ybSkgPT4ge1xuICAgIGNvbnN0IGxpbmVIVE1MVHJhbnNmb3JtID0gTGluZUhUTUxUcmFuc2Zvcm0uZnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybShmb290bm90ZUhUTUxUcmFuc2Zvcm0pO1xuXG4gICAgcmV0dXJuIGxpbmVIVE1MVHJhbnNmb3JtO1xuICB9KTtcblxuICByZXR1cm4gbGluZUhUTUxUcmFuc2Zvcm1zO1xufVxuXG5mdW5jdGlvbiBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21MaW5lSFRNTFRyYW5zZm9ybXMobGluZUhUTUxUcmFuc2Zvcm1zLCBpZGVudGlmaWVyTWFwLCBzdGFydCkge1xuICBjb25zdCBudW1iZXJzID0gT2JqZWN0LnZhbHVlcyhpZGVudGlmaWVyTWFwKSxcbiAgICAgICAgaWRlbnRpZmllcnMgPSBPYmplY3Qua2V5cyhpZGVudGlmaWVyTWFwKSxcbiAgICAgICAgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMgPSBsaW5lSFRNTFRyYW5zZm9ybXMubWFwKChsaW5lSFRNTFRyYW5zZm9ybSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBudW1iZXIgPSBzdGFydCArIGluZGV4O1xuXG4gICAgICAgICAgaW5kZXggPSBudW1iZXJzLmluZGV4T2YobnVtYmVyKTtcblxuICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBpZGVudGlmaWVyc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybSA9IEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0uZnJvbUxpbmVUTUxUcmFuc2Zvcm1BbmRJZGVudGlmaWVyKGxpbmVIVE1MVHJhbnNmb3JtLCBpZGVudGlmaWVyKTtcblxuICAgICAgICAgIHJldHVybiBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXM7XG59XG5cbmZ1bmN0aW9uIGZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm1zRnJvbUZvb3Rub3RlTGlua0hUTUxOb2Rlcyhmb290bm90ZUxpbmtIVE1MTm9kZXMpIHtcbiAgY29uc3QgZm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybXMgPSBmb290bm90ZUxpbmtIVE1MTm9kZXMubWFwKChmb290bm90ZUxpbmtIVE1MTm9kZSkgPT4ge1xuICAgIGNvbnN0IGZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm0gPSBGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtLmZyb21Gb290bm90ZUxpbmtIVE1MTm9kZShmb290bm90ZUxpbmtIVE1MTm9kZSk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm1zO1xufVxuXG5mdW5jdGlvbiBuZXN0ZWRGb290bm90ZUxpbmtIVE1MVHJhbnNmb3Jtc0Zyb21OZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXMobmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzKSB7XG4gIGNvbnN0IG5lc3RlZEZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm1zID0gbmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzLm1hcCgobmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGUpID0+IHtcbiAgICBjb25zdCBuZXN0ZWRGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtID0gTmVzdGVkRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybS5mcm9tTmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGUobmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGUpO1xuXG4gICAgcmV0dXJuIG5lc3RlZEZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm07XG4gIH0pO1xuXG4gIHJldHVybiBuZXN0ZWRGb290bm90ZUxpbmtIVE1MVHJhbnNmb3Jtcztcbn1cbiJdLCJuYW1lcyI6WyJEaXZpc2lvbkhUTUxOb2RlIiwiYmFja3dhcmRzRm9yRWFjaCIsImFycmF5VXRpbGl0aWVzIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsImNvbnN0cnVjdG9yIiwiZ2V0UnVsZU5hbWUiLCJydWxlTm1lIiwiRElWSVNJT05fUlVMRV9OQU1FIiwiZ2V0Rm9vdG5vdGVIVE1MTm9kZXMiLCJub2RlIiwiZm9vdG5vdGVIVE1MTm9kZXMiLCJmb290bm90ZUhUTUxOb2Rlc0Zyb21Ob2RlIiwiZ2V0Rm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUiLCJmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSIsImZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUiLCJyZXNvbHZlIiwiZGl2aXNpb25IVE1MTm9kZXMiLCJuZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXMiLCJuZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZSIsInJlbW92ZU5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2RlcyIsImZvb3Rub3RlSFRNTFRyYW5zZm9ybXMiLCJyZW1vdmVGb290bm90ZUhUTUxOb2RlcyIsInJlbW92ZUZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlIiwiZm9vdG5vdGVMaW5rSFRNTE5vZGVzIiwiZm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUiLCJyZW9yZGVyRm9vdG5vdGVIVE1MTm9kZXMiLCJodG1sTm9kZXMiLCJodG1sTm9kZXNGcm9tTm9kZSIsInJlbW92ZUhUTUxOb2RlcyIsImlkZW50aWZpZXJNYXAiLCJncm91cGVkSFRNTE5vZGVzQXJyYXkiLCJncm91cEhUTUxOb2RlcyIsInBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5IiwicGFnaW5hdGVHcm91cGVkSFRNTE5vZGVzIiwiZm9yRWFjaCIsInBhZ2luYXRlZEhUTUxOb2RlcyIsImRpdmlzaW9uSFRNTE5vZGUiLCJmcm9tUGFnaW5hdGVkSFRNTE5vZGVzIiwicmVzb2x2ZUZvb3Rub3RlcyIsInB1c2giLCJzdGFydCIsIm51bWJlckZvb3Rub3RlTGlua0hUTUxOb2RlcyIsImxpbmVIVE1MVHJhbnNmb3JtcyIsImxpbmVIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUhUTUxUcmFuc2Zvcm1zIiwiZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMiLCJmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21MaW5lSFRNTFRyYW5zZm9ybXMiLCJmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSIsIkZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIiwiZnJvbVN0YXJ0QW5kRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMiLCJhcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUiLCJhc1N0cmluZyIsInN0cmluZyIsImZyb21Ob3RoaW5nIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwib3V0ZXJOb2RlIiwiY2hpbGROb2RlcyIsImZyb21DaGlsZE5vZGVzIiwidGFnTmFtZSIsImdyb3VwZWRIVE1MTm9kZXMiLCJodG1sTm9kZSIsImh0bWxOb2RlRm9vdG5vdGVIVE1MTm9kZSIsIkZvb3Rub3RlSFRNTE5vZGUiLCJncm91cGVkSFRNTE5vZGVMZW5ndGgiLCJsZW5ndGgiLCJncm91cGVkSFRNTE5vZGUiLCJodG1sVHJhbnNmb3JtIiwiSFRNTFRyYW5zZm9ybSIsImZyb21IVE5MTk9kZSIsInJlbW92ZSIsImZvb3Rub3RlSFRNTFRyYW5zZm9ybXNGcm9tRm9vdG5vdGVIVE1MTm9kZXMiLCJmb290bm90ZUhUTUxUcmFuc2Zvcm0iLCJmb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtcyIsImZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm1zRnJvbUZvb3Rub3RlTGlua0hUTUxOb2RlcyIsImZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm0iLCJpZGVudGlmaWVyIiwiZmluZCIsImlkZW50aWZpZXJNYXRjaGVzIiwibWF0Y2hJZGVudGlmaWVyIiwiYWRkQWZ0ZXJGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtIiwibWF4aW11bVBhZ2VMaW5lcyIsIkRFRkFVTFRfTUFYSU1VTV9QQUdFX0xJTkVTIiwicGFnZUxpbmVzIiwiZ3JvdXBMaW5lcyIsInJlZHVjZSIsImxpbmVzIiwicGFnaW5hdGVkSFRNTE5vZGVzTGVuZ3RoIiwiaWRlbnRpZmllcnMiLCJPYmplY3QiLCJrZXlzIiwiaWRlbnRpZmllcnNMZW5ndGgiLCJmb290bm90ZUhUTUxOb2RlIiwiaW5kZXgiLCJudW1iZXIiLCJmb290bm90ZUxpbmtIVE1MTm9kZSIsInNldE51bWJlciIsImZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0iLCJGb290bm90ZXNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtIiwiZnJvbUZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlIiwibmVzdGVkRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybXMiLCJuZXN0ZWRGb290bm90ZUxpbmtIVE1MVHJhbnNmb3Jtc0Zyb21OZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXMiLCJuZXN0ZWRGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtIiwibWFwIiwiRm9vdG5vdGVIVE1MVHJhbnNmb3JtIiwiZnJvbUZvb3Rub3RlSFRNTE5vZGUiLCJsaW5lSFRNTFRyYW5zZm9ybSIsIkxpbmVIVE1MVHJhbnNmb3JtIiwiZnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybSIsIm51bWJlcnMiLCJ2YWx1ZXMiLCJpbmRleE9mIiwiZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybSIsIkZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0iLCJmcm9tTGluZVRNTFRyYW5zZm9ybUFuZElkZW50aWZpZXIiLCJGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtIiwiZnJvbUZvb3Rub3RlTGlua0hUTUxOb2RlIiwibmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGUiLCJOZXN0ZWRGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtIiwiZnJvbU5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQXFCcUJBOzs7eUJBbkJVOzJEQUVWOzREQUNLOytEQUNHOzJEQUNDO2dFQUNJO21FQUNJO21FQUNBO29FQUNDO3lFQUNLO3lFQUNBO3lCQUVUO3lCQUNRO3FCQUMwSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVySyxJQUFNLEFBQUVDLG1CQUFxQkMseUJBQWMsQ0FBbkNEO0FBRU8sSUFBQSxBQUFNRCxpQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxPQUFPO2dCQUNmLElBQU0sQUFBRUQsWUFBYyxJQUFJLENBQUNFLFdBQVcsQ0FBOUJGO2dCQUVSLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMs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