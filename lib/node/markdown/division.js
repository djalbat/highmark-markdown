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
                        footnotesListReplacement.appendToDivisionMarkdownNode(divisionMarkdownNode, context);
                    }
                    (0, _footnotes.renumberLinkMarkdownNodes)(divisionMarkdownNode, footnoteMap, callback, context);
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
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IEZvb3Rub3RlUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L2Zvb3Rub3RlXCI7XG5pbXBvcnQgQ29udGVudHNMaXN0UmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L2NvbnRlbnRzTGlzdFwiO1xuaW1wb3J0IEZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvZm9vdG5vdGVzTGlzdFwiO1xuaW1wb3J0IEZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvc3ViRGl2aXNpb24vZm9vdG5vdGVcIjtcbmltcG9ydCBDb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L3N1YkRpdmlzaW9uL2NvbnRlbnRzRGlyZWN0aXZlXCI7XG5pbXBvcnQgRm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvc3ViRGl2aXNpb24vZm9vdG5vdGVzRGlyZWN0aXZlXCI7XG5pbXBvcnQgUGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L3N1YkRpdmlzaW9uL3BhZ2VOdW1iZXJEaXJlY3RpdmVcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRElWSVNJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZm9vdG5vdGVzXCI7XG5pbXBvcnQgeyBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSwgaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUsIHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyBjbGVhciwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCwgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIHNldERpdmlzaW9uQ2xhc3NOYW1lKGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lOyAvLy9cblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBpc0lnbm9yZWQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBpZ25vcmVkID0gKGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gaWdub3JlZDtcbiAgfVxuXG4gIHBhZ2luYXRlKHBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSB0aGlzLnJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKEZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpLFxuICAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gdGhpcy5yZW1vdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZShQYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCksXG4gICAgICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMgPSBbXG4gICAgICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LFxuICAgICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRcbiAgICAgICAgICBdO1xuXG4gICAgZmlsdGVyKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLCAoc3ViRGl2aXNpb25SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgaWYgKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB7IGxpbmVzUGVyUGFnZSB9ID0gY29udGV4dCxcbiAgICAgICAgICBwYWdpbmF0ZWRDaGlsZE5vZGVzID0gW10sXG4gICAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgbGV0IHRvdGFsTGluZXMgPSAwO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGxpbmVzID0gY2hpbGROb2RlLmxpbmVzKGNvbnRleHQpLFxuICAgICAgICAgICAgcGFnaW5hdGVkQ2hpbGROb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIHRvdGFsTGluZXMgKz0gbGluZXM7XG5cbiAgICAgIHBhZ2luYXRlZENoaWxkTm9kZXMucHVzaChwYWdpbmF0ZWRDaGlsZE5vZGUpO1xuXG4gICAgICBpZiAodG90YWxMaW5lcyA+IGxpbmVzUGVyUGFnZSkge1xuICAgICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IERpdmlzaW9uTWFya2Rvd25Ob2RlLmZyb21QYWdpbmF0ZWRDaGlsZE5vZGVzU3ViRGl2aXNpb25SZXBsYWNlbWVudHNBbmREaXZpc2lvbkNsYXNzTmFtZShwYWdpbmF0ZWRDaGlsZE5vZGVzLCBzdWJEaXZpc2lvblJlcGxhY2VtZW50cywgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgICAgIHBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2Rlcy5wdXNoKHBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2RlKTtcblxuICAgICAgICBjbGVhcihwYWdpbmF0ZWRDaGlsZE5vZGVzKTtcblxuICAgICAgICB0b3RhbExpbmVzID0gMDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0b3RhbExpbmVzID4gMCkge1xuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBEaXZpc2lvbk1hcmtkb3duTm9kZS5mcm9tUGFnaW5hdGVkQ2hpbGROb2Rlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnRzQW5kRGl2aXNpb25DbGFzc05hbWUocGFnaW5hdGVkQ2hpbGROb2Rlcywgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMsIHRoaXMuZGl2aXNpb25DbGFzc05hbWUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcGFnaW5hdGVkRGl2aXNpb25NYXJrZG93bk5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICAgIHBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2Rlcy5wdXNoKHBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICBzZXRQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpIHtcbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcblxuICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5zb21lKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmUgPSBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICAgIGlmIChwYWdlTnVtYmVyRGlyZWN0aXZlICE9PSBudWxsKSB7XG4gICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmUuc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRlbnRzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICAgIGxldCBjb250ZW50c0NyZWF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IHRoaXMuZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQoQ29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChjb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgY29udGVudHNMaXN0UmVwbGFjZW1lbnQgPSBDb250ZW50c0xpc3RSZXBsYWNlbWVudC5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChjb250ZW50c0xpc3RSZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb250ZW50c0xpc3RSZXBsYWNlbWVudC5yZXBsYWNlQ29udGVudHNEaXJlY3RpdmVTdWJkaXZpc2lvblJlcGxhY2VtZW50KGNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRlbnRzQ3JlYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRzQ3JlYXRlZDtcbiAgfVxuXG4gIGNyZWF0ZUZvb3Rub3Rlcyhmb290bm90ZU1hcCwgY29udGV4dCkge1xuICAgIGNvbnN0IGZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSB0aGlzLnJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKEZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50ID0gRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50LmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZEZvb3Rub3RlTWFwKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZU1hcCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChmb290bm90ZXNMaXN0UmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50LmFwcGVuZFRvRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICByZW51bWJlckxpbmtNYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZU1hcCwgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgLy8vXG4gICAgfVxuICB9XG5cbiAgcHJlcGFyZUZvb3Rub3Rlcyhmb290bm90ZU1hcCwgY29udGV4dCkge1xuICAgIGNvbnN0IGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMgPSB0aGlzLnJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyhGb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cy5mb3JFYWNoKChmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGZvb3Rub3RlUmVwbGFjZW1lbnQgPSBGb290bm90ZVJlcGxhY2VtZW50LmZyb21Gb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQoZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50KSxcbiAgICAgICAgICAgIGlkZW50aWZpZXIgPSBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuaWRlbnRpZmllcihjb250ZXh0KTtcblxuICAgICAgZm9vdG5vdGVNYXBbaWRlbnRpZmllcl0gPSBmb290bm90ZVJlcGxhY2VtZW50O1xuICAgIH0pXG4gIH1cblxuICByZXNvbHZlSW5jbHVkZXMoY29udGV4dCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpO1xuXG4gICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlSW5jbHVkZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzb2x2ZUVtYmVkZGluZ3MoY29udGV4dCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpO1xuXG4gICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlRW1iZWRkaW5ncyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudChTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gdGhpcy5maW5kU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzKCk7XG5cbiAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMuc29tZSgoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSBTdWJEaXZpc2lvblJlcGxhY2VtZW50LmZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJEaXZpc2lvblJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQ7XG4gIH1cblxuICBmaW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudHMoU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpLFxuICAgICAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLnJlZHVjZSgoc3ViRGl2aXNpb25SZXBsYWNlbWVudHMsIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gU3ViRGl2aXNpb25SZXBsYWNlbWVudC5mcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoc3ViRGl2aXNpb25SZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50cy5wdXNoKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc3ViRGl2aXNpb25SZXBsYWNlbWVudHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzO1xuICB9XG5cbiAgZmluZFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIHJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvL1xuICAgICAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSB0aGlzLmZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50KFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQucmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25SZXBsYWNlbWVudDtcbiAgfVxuXG4gIHJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyhTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy9cbiAgICAgICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50cyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzKFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMuZm9yRWFjaCgoc3ViRGl2aXNpb25SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudC5yZW1vdmVGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzO1xuICB9XG5cbiAgLy8gY3JlYXRlRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50KGNvbnRleHQpIHtcbiAgLy8gICBjb25zdCBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzID0gdGhpcy5maW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudHMoRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KSxcbiAgLy8gICAgICAgICBmb290bm90ZVJlcGxhY2VtZW50cyA9IGZvb3Rub3RlUmVwbGFjZW1lbnRzRnJvbUZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMoZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cyksXG4gIC8vICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gIC8vICAgICAgICAgZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50ID0gRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50LmZyb21Gb290bm90ZVJlcGxhY2VtZW50c0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGZvb3Rub3RlUmVwbGFjZW1lbnRzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgcmV0dXJuIGZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudDtcbiAgLy8gfVxuXG4gIGFzSFRNTChjb250ZXh0KSB7XG4gICAgbGV0IGh0bWwgPSBudWxsO1xuXG4gICAgY29uc3QgaW5kZW50ID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0hUTUwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXJ0aW5nVGFnID0gdGhpcy5zdGFydGluZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICAgIGh0bWwgPSBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ31cbiR7Y2hpbGROb2Rlc0hUTUx9JHtpbmRlbnR9JHtjbG9zaW5nVGFnfVxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUodGhpcy5kaXZpc2lvbkNsYXNzTmFtZSk7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHtcbiAgICBjb25zdCBkaXZpc2lvbkNsYXNzTmFtZSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhZ2luYXRlZENoaWxkTm9kZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50c0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2luYXRlZENoaWxkTm9kZXMsIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLCBkaXZpc2lvbkNsYXNzTmFtZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRElWSVNJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXG4gICAgICAgICAgICAuLi5wYWdpbmF0ZWRDaGlsZE5vZGVzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShEaXZpc2lvbk1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLmZvckVhY2goKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSBzdWJEaXZpc2lvblJlcGxhY2VtZW50LmNsb25lKCk7ICAvLy9cblxuICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudC5hcHBlbmRUb0RpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY2xlYXIiLCJhcnJheVV0aWxpdGllcyIsImZpbHRlciIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsInByZWNlZGVuY2UiLCJvcGFjaXR5IiwiZG9tRWxlbWVudCIsImRpdmlzaW9uQ2xhc3NOYW1lIiwiZ2V0RGl2aXNpb25DbGFzc05hbWUiLCJzZXREaXZpc2lvbkNsYXNzTmFtZSIsImNsYXNzTmFtZSIsImNvbnRleHQiLCJpc0lnbm9yZWQiLCJub2RlIiwiaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJpZ25vcmVkIiwicGFnaW5hdGUiLCJwYWdpbmF0ZWREaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwicmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwicGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJQYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsInN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzIiwic3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImxpbmVzUGVyUGFnZSIsInBhZ2luYXRlZENoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwidG90YWxMaW5lcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJsaW5lcyIsInBhZ2luYXRlZENoaWxkTm9kZSIsInB1c2giLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImZyb21QYWdpbmF0ZWRDaGlsZE5vZGVzU3ViRGl2aXNpb25SZXBsYWNlbWVudHNBbmREaXZpc2lvbkNsYXNzTmFtZSIsInBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwic2V0UGFnZU51bWJlciIsInBhZ2VOdW1iZXIiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJmaW5kU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzIiwic29tZSIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwicGFnZU51bWJlckRpcmVjdGl2ZSIsInBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSIsImNyZWF0ZUNvbnRlbnRzIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwiY29udGVudHNDcmVhdGVkIiwiY29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJDb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJjb250ZW50c0xpc3RSZXBsYWNlbWVudCIsIkNvbnRlbnRzTGlzdFJlcGxhY2VtZW50IiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwicmVwbGFjZUNvbnRlbnRzRGlyZWN0aXZlU3ViZGl2aXNpb25SZXBsYWNlbWVudCIsImNyZWF0ZUZvb3Rub3RlcyIsImZvb3Rub3RlTWFwIiwiZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50IiwiRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50IiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kRm9vdG5vdGVNYXAiLCJhcHBlbmRUb0RpdmlzaW9uTWFya2Rvd25Ob2RlIiwicmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyIsImNhbGxiYWNrIiwicHJlcGFyZUZvb3Rub3RlcyIsImZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMiLCJyZW1vdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJGb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJmb290bm90ZVJlcGxhY2VtZW50IiwiRm9vdG5vdGVSZXBsYWNlbWVudCIsImZyb21Gb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJpZGVudGlmaWVyIiwicmVzb2x2ZUluY2x1ZGVzIiwicmVzb2x2ZUVtYmVkZGluZ3MiLCJTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzIiwicmVkdWNlIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJyZW1vdmVGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJhc0hUTUwiLCJodG1sIiwiaW5kZW50IiwiRU1QVFlfU1RSSU5HIiwiY2hpbGROb2Rlc0hUTUwiLCJjaGlsZE5vZGVzQXNIVE1MIiwic3RhcnRpbmdUYWciLCJjbG9zaW5nVGFnIiwiY2xvbmUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsIkRJVklTSU9OX1JVTEVfTkFNRSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFvQnFCQTs7O3lCQWxCVTsrREFFTjsrREFDTzttRUFDSTtvRUFDQztnRUFDTTt3RUFDUzt5RUFDQzswRUFDQzt5QkFFekI7eUJBQ007eUJBQ087cUJBQ3FGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9ILElBQVFDLFFBQWtCQyx5QkFBYyxDQUFoQ0QsT0FBT0UsU0FBV0QseUJBQWMsQ0FBekJDO0FBRUEsSUFBQSxBQUFNSCxxQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQSxxQkFDUEksUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLGlCQUFpQjtnQ0FEakVUOztrQ0FFWEksVUFBVUMsWUFBWUMs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