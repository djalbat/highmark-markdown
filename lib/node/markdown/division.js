"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DivisionMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _footnote = /*#__PURE__*/ _interop_require_default(require("../../replacement/footnote"));
var _contentsList = /*#__PURE__*/ _interop_require_default(require("../../replacement/contentsList"));
var _footnotesList = /*#__PURE__*/ _interop_require_default(require("../../replacement/footnotesList"));
var _footnote1 = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision/footnote"));
var _contentsDirective = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision/contentsDirective"));
var _footnotesDirective = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision/footnotesDirective"));
var _pageNumberDirective = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision/pageNumberDirective"));
var _constants = require("../../constants");
var _ruleNames = require("../../ruleNames");
var _footnotes = require("../../utilities/footnotes");
var _query = require("../../utilities/query");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var clear = _necessary.arrayUtilities.clear, filter = _necessary.arrayUtilities.filter;
var DivisionMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(DivisionMarkdownNode, MarkdownNode);
    var _super = _create_super(DivisionMarkdownNode);
    function DivisionMarkdownNode(ruleName, childNodes, precedence, opacity, domElement, divisionClassName) {
        _class_call_check(this, DivisionMarkdownNode);
        var _this;
        _this = _super.call(this, ruleName, childNodes, precedence, opacity, domElement);
        _this.divisionClassName = divisionClassName;
        return _this;
    }
    _create_class(DivisionMarkdownNode, [
        {
            key: "getDivisionClassName",
            value: function getDivisionClassName() {
                return this.divisionClassName;
            }
        },
        {
            key: "setDivisionClassName",
            value: function setDivisionClassName(divisionClassName) {
                this.divisionClassName = divisionClassName;
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
            key: "isIgnored",
            value: function isIgnored() {
                var node = this, ignoreDirectiveMarkdownNode = (0, _query.ignoreDirectiveMarkdownNodeFromNode)(node), ignored = ignoreDirectiveMarkdownNode !== null;
                return ignored;
            }
        },
        {
            key: "paginate",
            value: function paginate(paginatedDivisionMarkdownNodes, context) {
                var _this = this;
                var footnotesDirectiveSubDivisionReplacement = this.removeSubDivisionMarkdownNode(_footnotesDirective.default, context), pageNumberDirectiveSubDivisionReplacement = this.removeSubDivisionMarkdownNode(_pageNumberDirective.default, context), subDivisionReplacements = [
                    footnotesDirectiveSubDivisionReplacement,
                    pageNumberDirectiveSubDivisionReplacement
                ];
                filter(subDivisionReplacements, function(subDivisionReplacement) {
                    if (subDivisionReplacement !== null) {
                        return true;
                    }
                });
                var linesPerPage = context.linesPerPage, paginatedChildNodes = [], childNodes = this.getChildNodes();
                var totalLines = 0;
                childNodes.forEach(function(childNode) {
                    var lines = childNode.lines(context), paginatedChildNode = childNode; ///
                    totalLines += lines;
                    paginatedChildNodes.push(paginatedChildNode);
                    if (totalLines > linesPerPage) {
                        var divisionMarkdownNode = DivisionMarkdownNode.fromPaginatedChildNodesSubDivisionReplacementsAndDivisionClassName(paginatedChildNodes, subDivisionReplacements, _this.divisionClassName, context), paginatedDivisionMarkdownNode = divisionMarkdownNode; ///
                        paginatedDivisionMarkdownNodes.push(paginatedDivisionMarkdownNode);
                        clear(paginatedChildNodes);
                        totalLines = 0;
                    }
                });
                if (totalLines > 0) {
                    var divisionMarkdownNode = DivisionMarkdownNode.fromPaginatedChildNodesSubDivisionReplacementsAndDivisionClassName(paginatedChildNodes, subDivisionReplacements, this.divisionClassName, context), paginatedDivisionMarkdownNode = divisionMarkdownNode; ///
                    paginatedDivisionMarkdownNodes.push(paginatedDivisionMarkdownNode);
                }
            }
        },
        {
            key: "setPageNumber",
            value: function setPageNumber(pageNumber) {
                var subDivisionMarkdownNodes = this.findSubDivisionMarkdownNodes();
                subDivisionMarkdownNodes.some(function(subDivisionMarkdownNode) {
                    var node = subDivisionMarkdownNode, pageNumberDirective = (0, _query.pageNumberDirectiveMarkdownNodeFromNode)(node);
                    if (pageNumberDirective !== null) {
                        pageNumberDirective.setPageNumber(pageNumber);
                        return true;
                    }
                });
            }
        },
        {
            key: "createContents",
            value: function createContents(divisionMarkdownNodes, context) {
                var contentsCreated = false;
                var contentsDirectiveSubDivisionReplacement = this.findSubDivisionReplacement(_contentsDirective.default, context);
                if (contentsDirectiveSubDivisionReplacement !== null) {
                    var divisionMarkdownNode = this, contentsListReplacement = _contentsList.default.fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context);
                    if (contentsListReplacement !== null) {
                        contentsListReplacement.replaceContentsDirectiveSubdivisionReplacement(contentsDirectiveSubDivisionReplacement, divisionMarkdownNode, context);
                        contentsCreated = true;
                    }
                }
                return contentsCreated;
            }
        },
        {
            key: "createFootnotes",
            value: function createFootnotes(footnoteMap, context) {
                var footnotesDirectiveSubDivisionReplacement = this.removeSubDivisionMarkdownNode(_footnotesDirective.default, context);
                if (footnotesDirectiveSubDivisionReplacement !== null) {
                    var divisionMarkdownNode = this, footnotesListReplacement = _footnotesList.default.fromDivisionMarkdownNodeAndFootnoteMap(divisionMarkdownNode, footnoteMap, context);
                    if (footnotesListReplacement !== null) {
                        (0, _footnotes.renumberLinkMarkdownNodes)(divisionMarkdownNode, footnotesListReplacement, callback, context);
                        footnotesListReplacement.appendToDivisionMarkdownNode(divisionMarkdownNode, context);
                    }
                }
                function callback() {
                ///
                }
            }
        },
        {
            key: "prepareFootnotes",
            value: function prepareFootnotes(footnoteMap, context) {
                var footnoteSubDivisionReplacements = this.removeSubDivisionMarkdownNodes(_footnote1.default, context);
                footnoteSubDivisionReplacements.forEach(function(footnoteSubDivisionReplacement) {
                    var footnoteReplacement = _footnote.default.fromFootnoteSubDivisionReplacement(footnoteSubDivisionReplacement), identifier = footnoteSubDivisionReplacement.identifier(context);
                    footnoteMap[identifier] = footnoteReplacement;
                });
            }
        },
        {
            key: "resolveIncludes",
            value: function resolveIncludes(context) {
                var divisionMarkdownNode = this, subDivisionMarkdownNodes = this.findSubDivisionMarkdownNodes();
                subDivisionMarkdownNodes.forEach(function(subDivisionMarkdownNode) {
                    subDivisionMarkdownNode.resolveIncludes(divisionMarkdownNode, context);
                });
            }
        },
        {
            key: "resolveEmbeddings",
            value: function resolveEmbeddings(context) {
                var divisionMarkdownNode = this, subDivisionMarkdownNodes = this.findSubDivisionMarkdownNodes();
                subDivisionMarkdownNodes.forEach(function(subDivisionMarkdownNode) {
                    subDivisionMarkdownNode.resolveEmbeddings(divisionMarkdownNode, context);
                });
            }
        },
        {
            key: "findSubDivisionReplacement",
            value: function findSubDivisionReplacement(SubDivisionReplacement, context) {
                var subDivisionReplacement = null;
                var subDivisionMarkdownNodes = this.findSubDivisionMarkdownNodes();
                subDivisionMarkdownNodes.some(function(subDivisionMarkdownNode) {
                    subDivisionReplacement = SubDivisionReplacement.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);
                    if (subDivisionReplacement !== null) {
                        return true;
                    }
                });
                return subDivisionReplacement;
            }
        },
        {
            key: "findSubDivisionReplacements",
            value: function findSubDivisionReplacements(SubDivisionReplacement, context) {
                var subDivisionMarkdownNodes = this.findSubDivisionMarkdownNodes(), subDivisionReplacements = subDivisionMarkdownNodes.reduce(function(subDivisionReplacements, subDivisionMarkdownNode) {
                    var subDivisionReplacement = SubDivisionReplacement.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);
                    if (subDivisionReplacement !== null) {
                        subDivisionReplacements.push(subDivisionReplacement);
                    }
                    return subDivisionReplacements;
                }, []);
                return subDivisionReplacements;
            }
        },
        {
            key: "findSubDivisionMarkdownNodes",
            value: function findSubDivisionMarkdownNodes() {
                var node = this, subDivisionMarkdownNodes = (0, _query.subDivisionMarkdownNodesFromNode)(node);
                return subDivisionMarkdownNodes;
            }
        },
        {
            key: "removeSubDivisionMarkdownNode",
            value: function removeSubDivisionMarkdownNode(SubDivisionReplacement, context) {
                var divisionMarkdownNode = this, subDivisionReplacement = this.findSubDivisionReplacement(SubDivisionReplacement, context);
                if (subDivisionReplacement !== null) {
                    subDivisionReplacement.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
                }
                return subDivisionReplacement;
            }
        },
        {
            key: "removeSubDivisionMarkdownNodes",
            value: function removeSubDivisionMarkdownNodes(SubDivisionReplacement, context) {
                var divisionMarkdownNode = this, subDivisionReplacements = this.findSubDivisionReplacements(SubDivisionReplacement, context);
                subDivisionReplacements.forEach(function(subDivisionReplacement) {
                    subDivisionReplacement.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
                });
                return subDivisionReplacements;
            }
        },
        {
            // createFootnotesListReplacement(context) {
            //   const footnoteSubDivisionReplacements = this.findSubDivisionReplacements(FootnoteSubDivisionReplacement, context),
            //         footnoteReplacements = footnoteReplacementsFromFootnoteSubDivisionReplacements(footnoteSubDivisionReplacements),
            //         divisionMarkdownNode = this,  ///
            //         footnotesListReplacement = FootnotesListReplacement.fromFootnoteReplacementsAndDivisionMarkdownNode(footnoteReplacements, divisionMarkdownNode, context);
            //
            //   return footnotesListReplacement;
            // }
            key: "asHTML",
            value: function asHTML(context) {
                var html = null;
                var indent = _constants.EMPTY_STRING, childNodesHTML = this.childNodesAsHTML(indent, context);
                if (childNodesHTML !== null) {
                    var startingTag = this.startingTag(context), closingTag = this.closingTag(context);
                    html = "".concat(indent).concat(startingTag, "\n").concat(childNodesHTML).concat(indent).concat(closingTag, "\n");
                }
                return html;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_get_prototype_of(DivisionMarkdownNode.prototype), "clone", this).call(this, this.divisionClassName);
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                var divisionClassName = null, divisionMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);
                return divisionMarkdownNode;
            }
        },
        {
            key: "fromPaginatedChildNodesSubDivisionReplacementsAndDivisionClassName",
            value: function fromPaginatedChildNodesSubDivisionReplacementsAndDivisionClassName(paginatedChildNodes, subDivisionReplacements, divisionClassName, context) {
                var ruleName = _ruleNames.DIVISION_RULE_NAME, childNodes = _to_consumable_array(paginatedChildNodes), opacity = null, divisionMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);
                subDivisionReplacements.forEach(function(subDivisionReplacement) {
                    subDivisionReplacement = subDivisionReplacement.clone(); ///
                    subDivisionReplacement.appendToDivisionMarkdownNode(divisionMarkdownNode, context);
                });
                return divisionMarkdownNode;
            }
        }
    ]);
    return DivisionMarkdownNode;
} // function footnoteReplacementsFromFootnoteSubDivisionReplacements(footnoteSubDivisionReplacements) {
 //   const footnoteReplacements = footnoteSubDivisionReplacements.map((footnoteSubDivisionReplacement) => {
 //     const footnoteReplacement = FootnoteReplacement.fromFootnoteSubDivisionReplacement(footnoteSubDivisionReplacement);
 //
 //     return footnoteReplacement;
 //   });
 //
 //   return footnoteReplacements;
 // }
(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IEZvb3Rub3RlUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L2Zvb3Rub3RlXCI7XG5pbXBvcnQgQ29udGVudHNMaXN0UmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L2NvbnRlbnRzTGlzdFwiO1xuaW1wb3J0IEZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvZm9vdG5vdGVzTGlzdFwiO1xuaW1wb3J0IEZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvc3ViRGl2aXNpb24vZm9vdG5vdGVcIjtcbmltcG9ydCBDb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L3N1YkRpdmlzaW9uL2NvbnRlbnRzRGlyZWN0aXZlXCI7XG5pbXBvcnQgRm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvc3ViRGl2aXNpb24vZm9vdG5vdGVzRGlyZWN0aXZlXCI7XG5pbXBvcnQgUGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L3N1YkRpdmlzaW9uL3BhZ2VOdW1iZXJEaXJlY3RpdmVcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRElWSVNJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZm9vdG5vdGVzXCI7XG5pbXBvcnQgeyBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSwgaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUsIHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyBjbGVhciwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCwgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIHNldERpdmlzaW9uQ2xhc3NOYW1lKGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lOyAvLy9cblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBpc0lnbm9yZWQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBpZ25vcmVkID0gKGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gaWdub3JlZDtcbiAgfVxuXG4gIHBhZ2luYXRlKHBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSB0aGlzLnJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKEZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpLFxuICAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gdGhpcy5yZW1vdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZShQYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCksXG4gICAgICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMgPSBbXG4gICAgICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LFxuICAgICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRcbiAgICAgICAgICBdO1xuXG4gICAgZmlsdGVyKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLCAoc3ViRGl2aXNpb25SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgaWYgKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB7IGxpbmVzUGVyUGFnZSB9ID0gY29udGV4dCxcbiAgICAgICAgICBwYWdpbmF0ZWRDaGlsZE5vZGVzID0gW10sXG4gICAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgbGV0IHRvdGFsTGluZXMgPSAwO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGxpbmVzID0gY2hpbGROb2RlLmxpbmVzKGNvbnRleHQpLFxuICAgICAgICAgICAgcGFnaW5hdGVkQ2hpbGROb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIHRvdGFsTGluZXMgKz0gbGluZXM7XG5cbiAgICAgIHBhZ2luYXRlZENoaWxkTm9kZXMucHVzaChwYWdpbmF0ZWRDaGlsZE5vZGUpO1xuXG4gICAgICBpZiAodG90YWxMaW5lcyA+IGxpbmVzUGVyUGFnZSkge1xuICAgICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IERpdmlzaW9uTWFya2Rvd25Ob2RlLmZyb21QYWdpbmF0ZWRDaGlsZE5vZGVzU3ViRGl2aXNpb25SZXBsYWNlbWVudHNBbmREaXZpc2lvbkNsYXNzTmFtZShwYWdpbmF0ZWRDaGlsZE5vZGVzLCBzdWJEaXZpc2lvblJlcGxhY2VtZW50cywgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgICAgIHBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2Rlcy5wdXNoKHBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2RlKTtcblxuICAgICAgICBjbGVhcihwYWdpbmF0ZWRDaGlsZE5vZGVzKTtcblxuICAgICAgICB0b3RhbExpbmVzID0gMDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0b3RhbExpbmVzID4gMCkge1xuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBEaXZpc2lvbk1hcmtkb3duTm9kZS5mcm9tUGFnaW5hdGVkQ2hpbGROb2Rlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnRzQW5kRGl2aXNpb25DbGFzc05hbWUocGFnaW5hdGVkQ2hpbGROb2Rlcywgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMsIHRoaXMuZGl2aXNpb25DbGFzc05hbWUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcGFnaW5hdGVkRGl2aXNpb25NYXJrZG93bk5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICAgIHBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2Rlcy5wdXNoKHBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICBzZXRQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpIHtcbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcblxuICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5zb21lKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmUgPSBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICAgIGlmIChwYWdlTnVtYmVyRGlyZWN0aXZlICE9PSBudWxsKSB7XG4gICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmUuc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRlbnRzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICAgIGxldCBjb250ZW50c0NyZWF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IHRoaXMuZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQoQ29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChjb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgY29udGVudHNMaXN0UmVwbGFjZW1lbnQgPSBDb250ZW50c0xpc3RSZXBsYWNlbWVudC5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChjb250ZW50c0xpc3RSZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb250ZW50c0xpc3RSZXBsYWNlbWVudC5yZXBsYWNlQ29udGVudHNEaXJlY3RpdmVTdWJkaXZpc2lvblJlcGxhY2VtZW50KGNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRlbnRzQ3JlYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRzQ3JlYXRlZDtcbiAgfVxuXG4gIGNyZWF0ZUZvb3Rub3Rlcyhmb290bm90ZU1hcCwgY29udGV4dCkge1xuICAgIGNvbnN0IGZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSB0aGlzLnJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKEZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50ID0gRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50LmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZEZvb3Rub3RlTWFwKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZU1hcCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChmb290bm90ZXNMaXN0UmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50LCBjYWxsYmFjaywgY29udGV4dCk7XG5cbiAgICAgICAgZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50LmFwcGVuZFRvRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgLy8vXG4gICAgfVxuICB9XG5cbiAgcHJlcGFyZUZvb3Rub3Rlcyhmb290bm90ZU1hcCwgY29udGV4dCkge1xuICAgIGNvbnN0IGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMgPSB0aGlzLnJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyhGb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cy5mb3JFYWNoKChmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGZvb3Rub3RlUmVwbGFjZW1lbnQgPSBGb290bm90ZVJlcGxhY2VtZW50LmZyb21Gb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQoZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50KSxcbiAgICAgICAgICAgIGlkZW50aWZpZXIgPSBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuaWRlbnRpZmllcihjb250ZXh0KTtcblxuICAgICAgZm9vdG5vdGVNYXBbaWRlbnRpZmllcl0gPSBmb290bm90ZVJlcGxhY2VtZW50O1xuICAgIH0pXG4gIH1cblxuICByZXNvbHZlSW5jbHVkZXMoY29udGV4dCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpO1xuXG4gICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlSW5jbHVkZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzb2x2ZUVtYmVkZGluZ3MoY29udGV4dCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpO1xuXG4gICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlRW1iZWRkaW5ncyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudChTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gdGhpcy5maW5kU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzKCk7XG5cbiAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMuc29tZSgoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSBTdWJEaXZpc2lvblJlcGxhY2VtZW50LmZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJEaXZpc2lvblJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQ7XG4gIH1cblxuICBmaW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudHMoU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpLFxuICAgICAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLnJlZHVjZSgoc3ViRGl2aXNpb25SZXBsYWNlbWVudHMsIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gU3ViRGl2aXNpb25SZXBsYWNlbWVudC5mcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoc3ViRGl2aXNpb25SZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50cy5wdXNoKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc3ViRGl2aXNpb25SZXBsYWNlbWVudHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzO1xuICB9XG5cbiAgZmluZFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIHJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvL1xuICAgICAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSB0aGlzLmZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50KFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQucmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25SZXBsYWNlbWVudDtcbiAgfVxuXG4gIHJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyhTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy9cbiAgICAgICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50cyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzKFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMuZm9yRWFjaCgoc3ViRGl2aXNpb25SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudC5yZW1vdmVGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzO1xuICB9XG5cbiAgLy8gY3JlYXRlRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50KGNvbnRleHQpIHtcbiAgLy8gICBjb25zdCBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzID0gdGhpcy5maW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudHMoRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KSxcbiAgLy8gICAgICAgICBmb290bm90ZVJlcGxhY2VtZW50cyA9IGZvb3Rub3RlUmVwbGFjZW1lbnRzRnJvbUZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMoZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cyksXG4gIC8vICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gIC8vICAgICAgICAgZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50ID0gRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50LmZyb21Gb290bm90ZVJlcGxhY2VtZW50c0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGZvb3Rub3RlUmVwbGFjZW1lbnRzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgcmV0dXJuIGZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudDtcbiAgLy8gfVxuXG4gIGFzSFRNTChjb250ZXh0KSB7XG4gICAgbGV0IGh0bWwgPSBudWxsO1xuXG4gICAgY29uc3QgaW5kZW50ID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0hUTUwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXJ0aW5nVGFnID0gdGhpcy5zdGFydGluZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICAgIGh0bWwgPSBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ31cbiR7Y2hpbGROb2Rlc0hUTUx9JHtpbmRlbnR9JHtjbG9zaW5nVGFnfVxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUodGhpcy5kaXZpc2lvbkNsYXNzTmFtZSk7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHtcbiAgICBjb25zdCBkaXZpc2lvbkNsYXNzTmFtZSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhZ2luYXRlZENoaWxkTm9kZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50c0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2luYXRlZENoaWxkTm9kZXMsIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLCBkaXZpc2lvbkNsYXNzTmFtZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRElWSVNJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXG4gICAgICAgICAgICAuLi5wYWdpbmF0ZWRDaGlsZE5vZGVzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShEaXZpc2lvbk1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLmZvckVhY2goKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSBzdWJEaXZpc2lvblJlcGxhY2VtZW50LmNsb25lKCk7ICAvLy9cblxuICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudC5hcHBlbmRUb0RpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxufVxuXG4vLyBmdW5jdGlvbiBmb290bm90ZVJlcGxhY2VtZW50c0Zyb21Gb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzKGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMpIHtcbi8vICAgY29uc3QgZm9vdG5vdGVSZXBsYWNlbWVudHMgPSBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLm1hcCgoZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50KSA9PiB7XG4vLyAgICAgY29uc3QgZm9vdG5vdGVSZXBsYWNlbWVudCA9IEZvb3Rub3RlUmVwbGFjZW1lbnQuZnJvbUZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudChmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpO1xuLy9cbi8vICAgICByZXR1cm4gZm9vdG5vdGVSZXBsYWNlbWVudDtcbi8vICAgfSk7XG4vL1xuLy8gICByZXR1cm4gZm9vdG5vdGVSZXBsYWNlbWVudHM7XG4vLyB9XG4iXSwibmFtZXMiOlsiRGl2aXNpb25NYXJrZG93bk5vZGUiLCJjbGVhciIsImFycmF5VXRpbGl0aWVzIiwiZmlsdGVyIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwicHJlY2VkZW5jZSIsIm9wYWNpdHkiLCJkb21FbGVtZW50IiwiZGl2aXNpb25DbGFzc05hbWUiLCJnZXREaXZpc2lvbkNsYXNzTmFtZSIsInNldERpdmlzaW9uQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsImlzSWdub3JlZCIsIm5vZGUiLCJpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSIsImlnbm9yZWQiLCJwYWdpbmF0ZSIsInBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJyZW1vdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsIkZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJwYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsIlBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50Iiwic3ViRGl2aXNpb25SZXBsYWNlbWVudHMiLCJzdWJEaXZpc2lvblJlcGxhY2VtZW50IiwibGluZXNQZXJQYWdlIiwicGFnaW5hdGVkQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJ0b3RhbExpbmVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsImxpbmVzIiwicGFnaW5hdGVkQ2hpbGROb2RlIiwicHVzaCIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZnJvbVBhZ2luYXRlZENoaWxkTm9kZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50c0FuZERpdmlzaW9uQ2xhc3NOYW1lIiwicGFnaW5hdGVkRGl2aXNpb25NYXJrZG93bk5vZGUiLCJzZXRQYWdlTnVtYmVyIiwicGFnZU51bWJlciIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJzb21lIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlIiwicGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiY3JlYXRlQ29udGVudHMiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJjb250ZW50c0NyZWF0ZWQiLCJjb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJmaW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsIkNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImNvbnRlbnRzTGlzdFJlcGxhY2VtZW50IiwiQ29udGVudHNMaXN0UmVwbGFjZW1lbnQiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZXBsYWNlQ29udGVudHNEaXJlY3RpdmVTdWJkaXZpc2lvblJlcGxhY2VtZW50IiwiY3JlYXRlRm9vdG5vdGVzIiwiZm9vdG5vdGVNYXAiLCJmb290bm90ZXNMaXN0UmVwbGFjZW1lbnQiLCJGb290bm90ZXNMaXN0UmVwbGFjZW1lbnQiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRGb290bm90ZU1hcCIsInJlbnVtYmVyTGlua01hcmtkb3duTm9kZXMiLCJjYWxsYmFjayIsImFwcGVuZFRvRGl2aXNpb25NYXJrZG93bk5vZGUiLCJwcmVwYXJlRm9vdG5vdGVzIiwiZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cyIsInJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsIkZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImZvb3Rub3RlUmVwbGFjZW1lbnQiLCJGb290bm90ZVJlcGxhY2VtZW50IiwiZnJvbUZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImlkZW50aWZpZXIiLCJyZXNvbHZlSW5jbHVkZXMiLCJyZXNvbHZlRW1iZWRkaW5ncyIsIlN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJmaW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudHMiLCJyZWR1Y2UiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSIsInJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZSIsImFzSFRNTCIsImh0bWwiLCJpbmRlbnQiLCJFTVBUWV9TVFJJTkciLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJzdGFydGluZ1RhZyIsImNsb3NpbmdUYWciLCJjbG9uZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwiTWFya2Rvd25Ob2RlIiwiRElWSVNJT05fUlVMRV9OQU1FIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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