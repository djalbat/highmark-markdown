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
            value: function createFootnotes(footnoteReplacementMap, context) {
                var footnotesDirectiveSubDivisionReplacement = this.removeSubDivisionMarkdownNode(_footnotesDirective.default, context);
                if (footnotesDirectiveSubDivisionReplacement !== null) {
                    var divisionMarkdownNode = this, footnotesListReplacement = _footnotesList.default.fromDivisionMarkdownNodeAndFootnoteReplacementMap(divisionMarkdownNode, footnoteReplacementMap, context);
                    if (footnotesListReplacement !== null) {
                        footnotesListReplacement.appendToDivisionMarkdownNode(divisionMarkdownNode, context);
                    }
                    (0, _footnotes.renumberLinkMarkdownNodes)(divisionMarkdownNode, footnoteReplacementMap, callback, context);
                }
                function callback(linkMarkdownNode) {
                ///
                }
            }
        },
        {
            key: "prepareFootnotes",
            value: function prepareFootnotes(footnoteReplacementMap, context) {
                var footnoteSubDivisionReplacements = this.removeSubDivisionMarkdownNodes(_footnote1.default, context);
                footnoteSubDivisionReplacements.forEach(function(footnoteSubDivisionReplacement) {
                    var footnoteReplacement = _footnote.default.fromFootnoteSubDivisionReplacement(footnoteSubDivisionReplacement), identifier = footnoteSubDivisionReplacement.identifier(context);
                    footnoteReplacementMap[identifier] = footnoteReplacement;
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
            key: "createFootnotesListReplacement",
            value: function createFootnotesListReplacement(footnoteReplacementMap, context) {
                var footnoteSubDivisionReplacements = this.findSubDivisionReplacements(_footnote1.default, context);
                footnoteSubDivisionReplacements.forEach(function(footnoteSubDivisionReplacement) {
                    var footnoteReplacement = _footnote.default.fromFootnoteSubDivisionReplacement(footnoteSubDivisionReplacement), identifier = footnoteSubDivisionReplacement.identifier(context);
                    footnoteReplacementMap[identifier] = footnoteReplacement;
                });
                var divisionMarkdownNode = this, footnotesListReplacement = _footnotesList.default.fromDivisionMarkdownNodeAndFootnoteReplacementMap(divisionMarkdownNode, footnoteReplacementMap, context);
                return footnotesListReplacement;
            }
        },
        {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IEZvb3Rub3RlUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L2Zvb3Rub3RlXCI7XG5pbXBvcnQgQ29udGVudHNMaXN0UmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L2NvbnRlbnRzTGlzdFwiO1xuaW1wb3J0IEZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvZm9vdG5vdGVzTGlzdFwiO1xuaW1wb3J0IEZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvc3ViRGl2aXNpb24vZm9vdG5vdGVcIjtcbmltcG9ydCBDb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L3N1YkRpdmlzaW9uL2NvbnRlbnRzRGlyZWN0aXZlXCI7XG5pbXBvcnQgRm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvc3ViRGl2aXNpb24vZm9vdG5vdGVzRGlyZWN0aXZlXCI7XG5pbXBvcnQgUGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L3N1YkRpdmlzaW9uL3BhZ2VOdW1iZXJEaXJlY3RpdmVcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRElWSVNJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZm9vdG5vdGVzXCI7XG5pbXBvcnQgeyBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSwgaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUsIHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyBjbGVhciwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCwgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIHNldERpdmlzaW9uQ2xhc3NOYW1lKGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lOyAvLy9cblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBpc0lnbm9yZWQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBpZ25vcmVkID0gKGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gaWdub3JlZDtcbiAgfVxuXG4gIHBhZ2luYXRlKHBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSB0aGlzLnJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKEZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpLFxuICAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gdGhpcy5yZW1vdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZShQYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCksXG4gICAgICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMgPSBbXG4gICAgICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LFxuICAgICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRcbiAgICAgICAgICBdO1xuXG4gICAgZmlsdGVyKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLCAoc3ViRGl2aXNpb25SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgaWYgKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB7IGxpbmVzUGVyUGFnZSB9ID0gY29udGV4dCxcbiAgICAgICAgICBwYWdpbmF0ZWRDaGlsZE5vZGVzID0gW10sXG4gICAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgbGV0IHRvdGFsTGluZXMgPSAwO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGxpbmVzID0gY2hpbGROb2RlLmxpbmVzKGNvbnRleHQpLFxuICAgICAgICAgICAgcGFnaW5hdGVkQ2hpbGROb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIHRvdGFsTGluZXMgKz0gbGluZXM7XG5cbiAgICAgIHBhZ2luYXRlZENoaWxkTm9kZXMucHVzaChwYWdpbmF0ZWRDaGlsZE5vZGUpO1xuXG4gICAgICBpZiAodG90YWxMaW5lcyA+IGxpbmVzUGVyUGFnZSkge1xuICAgICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IERpdmlzaW9uTWFya2Rvd25Ob2RlLmZyb21QYWdpbmF0ZWRDaGlsZE5vZGVzU3ViRGl2aXNpb25SZXBsYWNlbWVudHNBbmREaXZpc2lvbkNsYXNzTmFtZShwYWdpbmF0ZWRDaGlsZE5vZGVzLCBzdWJEaXZpc2lvblJlcGxhY2VtZW50cywgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgICAgIHBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2Rlcy5wdXNoKHBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2RlKTtcblxuICAgICAgICBjbGVhcihwYWdpbmF0ZWRDaGlsZE5vZGVzKTtcblxuICAgICAgICB0b3RhbExpbmVzID0gMDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0b3RhbExpbmVzID4gMCkge1xuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBEaXZpc2lvbk1hcmtkb3duTm9kZS5mcm9tUGFnaW5hdGVkQ2hpbGROb2Rlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnRzQW5kRGl2aXNpb25DbGFzc05hbWUocGFnaW5hdGVkQ2hpbGROb2Rlcywgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMsIHRoaXMuZGl2aXNpb25DbGFzc05hbWUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcGFnaW5hdGVkRGl2aXNpb25NYXJrZG93bk5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICAgIHBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2Rlcy5wdXNoKHBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICBzZXRQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpIHtcbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcblxuICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5zb21lKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmUgPSBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICAgIGlmIChwYWdlTnVtYmVyRGlyZWN0aXZlICE9PSBudWxsKSB7XG4gICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmUuc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRlbnRzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICAgIGxldCBjb250ZW50c0NyZWF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IHRoaXMuZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQoQ29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChjb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgY29udGVudHNMaXN0UmVwbGFjZW1lbnQgPSBDb250ZW50c0xpc3RSZXBsYWNlbWVudC5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChjb250ZW50c0xpc3RSZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb250ZW50c0xpc3RSZXBsYWNlbWVudC5yZXBsYWNlQ29udGVudHNEaXJlY3RpdmVTdWJkaXZpc2lvblJlcGxhY2VtZW50KGNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRlbnRzQ3JlYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRzQ3JlYXRlZDtcbiAgfVxuXG4gIGNyZWF0ZUZvb3Rub3Rlcyhmb290bm90ZVJlcGxhY2VtZW50TWFwLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IHRoaXMucmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoRm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoZm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBmb290bm90ZXNMaXN0UmVwbGFjZW1lbnQgPSBGb290bm90ZXNMaXN0UmVwbGFjZW1lbnQuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kRm9vdG5vdGVSZXBsYWNlbWVudE1hcChkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVSZXBsYWNlbWVudE1hcCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChmb290bm90ZXNMaXN0UmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50LmFwcGVuZFRvRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICByZW51bWJlckxpbmtNYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZVJlcGxhY2VtZW50TWFwLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbGJhY2sobGlua01hcmtkb3duTm9kZSkge1xuICAgICAgLy8vXG4gICAgfVxuICB9XG5cbiAgcHJlcGFyZUZvb3Rub3Rlcyhmb290bm90ZVJlcGxhY2VtZW50TWFwLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cyA9IHRoaXMucmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzKEZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCk7XG5cbiAgICBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLmZvckVhY2goKGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgY29uc3QgZm9vdG5vdGVSZXBsYWNlbWVudCA9IEZvb3Rub3RlUmVwbGFjZW1lbnQuZnJvbUZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudChmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpLFxuICAgICAgICAgICAgaWRlbnRpZmllciA9IGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudC5pZGVudGlmaWVyKGNvbnRleHQpO1xuXG4gICAgICBmb290bm90ZVJlcGxhY2VtZW50TWFwW2lkZW50aWZpZXJdID0gZm9vdG5vdGVSZXBsYWNlbWVudDtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc29sdmVJbmNsdWRlcyhjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gdGhpcy5maW5kU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzKCk7XG5cbiAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaCgoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlc29sdmVJbmNsdWRlcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICByZXNvbHZlRW1iZWRkaW5ncyhjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gdGhpcy5maW5kU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzKCk7XG5cbiAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaCgoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlc29sdmVFbWJlZGRpbmdzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50KFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcblxuICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5zb21lKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25SZXBsYWNlbWVudDtcbiAgfVxuXG4gIGZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50cyhTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gdGhpcy5maW5kU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzKCksXG4gICAgICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMucmVkdWNlKChzdWJEaXZpc2lvblJlcGxhY2VtZW50cywgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSBTdWJEaXZpc2lvblJlcGxhY2VtZW50LmZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJEaXZpc2lvblJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLnB1c2goc3ViRGl2aXNpb25SZXBsYWNlbWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzdWJEaXZpc2lvblJlcGxhY2VtZW50cztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25SZXBsYWNlbWVudHM7XG4gIH1cblxuICBmaW5kU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgcmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vXG4gICAgICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IHRoaXMuZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQoU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3ViRGl2aXNpb25SZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudC5yZW1vdmVGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJEaXZpc2lvblJlcGxhY2VtZW50O1xuICB9XG5cbiAgcmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzKFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvL1xuICAgICAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzID0gdGhpcy5maW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudHMoU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCk7XG5cbiAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50cy5mb3JFYWNoKChzdWJEaXZpc2lvblJlcGxhY2VtZW50KSA9PiB7XG4gICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50LnJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25SZXBsYWNlbWVudHM7XG4gIH1cblxuICBjcmVhdGVGb290bm90ZXNMaXN0UmVwbGFjZW1lbnQoZm9vdG5vdGVSZXBsYWNlbWVudE1hcCwgY29udGV4dCkge1xuICAgIGNvbnN0IGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMgPSB0aGlzLmZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50cyhGb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cy5mb3JFYWNoKChmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGZvb3Rub3RlUmVwbGFjZW1lbnQgPSBGb290bm90ZVJlcGxhY2VtZW50LmZyb21Gb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQoZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50KSxcbiAgICAgICAgICAgIGlkZW50aWZpZXIgPSBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuaWRlbnRpZmllcihjb250ZXh0KTtcblxuICAgICAgZm9vdG5vdGVSZXBsYWNlbWVudE1hcFtpZGVudGlmaWVyXSA9IGZvb3Rub3RlUmVwbGFjZW1lbnQ7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmb290bm90ZXNMaXN0UmVwbGFjZW1lbnQgPSBGb290bm90ZXNMaXN0UmVwbGFjZW1lbnQuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kRm9vdG5vdGVSZXBsYWNlbWVudE1hcChkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVSZXBsYWNlbWVudE1hcCwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50O1xuICB9XG5cbiAgYXNIVE1MKGNvbnRleHQpIHtcbiAgICBsZXQgaHRtbCA9IG51bGw7XG5cbiAgICBjb25zdCBpbmRlbnQgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChjaGlsZE5vZGVzSFRNTCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgICAgY2xvc2luZ1RhZyA9IHRoaXMuY2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgICAgaHRtbCA9IGAke2luZGVudH0ke3N0YXJ0aW5nVGFnfVxuJHtjaGlsZE5vZGVzSFRNTH0ke2luZGVudH0ke2Nsb3NpbmdUYWd9XG5gO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZSh0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkge1xuICAgIGNvbnN0IGRpdmlzaW9uQ2xhc3NOYW1lID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShEaXZpc2lvbk1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFnaW5hdGVkQ2hpbGROb2Rlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnRzQW5kRGl2aXNpb25DbGFzc05hbWUocGFnaW5hdGVkQ2hpbGROb2Rlcywgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMsIGRpdmlzaW9uQ2xhc3NOYW1lLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBESVZJU0lPTl9SVUxFX05BTUUsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IFtcbiAgICAgICAgICAgIC4uLnBhZ2luYXRlZENoaWxkTm9kZXNcbiAgICAgICAgICBdLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KERpdmlzaW9uTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMuZm9yRWFjaCgoc3ViRGl2aXNpb25SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuY2xvbmUoKTsgIC8vL1xuXG4gICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50LmFwcGVuZFRvRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGl2aXNpb25NYXJrZG93bk5vZGUiLCJjbGVhciIsImFycmF5VXRpbGl0aWVzIiwiZmlsdGVyIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwicHJlY2VkZW5jZSIsIm9wYWNpdHkiLCJkb21FbGVtZW50IiwiZGl2aXNpb25DbGFzc05hbWUiLCJnZXREaXZpc2lvbkNsYXNzTmFtZSIsInNldERpdmlzaW9uQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsImlzSWdub3JlZCIsIm5vZGUiLCJpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSIsImlnbm9yZWQiLCJwYWdpbmF0ZSIsInBhZ2luYXRlZERpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJyZW1vdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsIkZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJwYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsIlBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50Iiwic3ViRGl2aXNpb25SZXBsYWNlbWVudHMiLCJzdWJEaXZpc2lvblJlcGxhY2VtZW50IiwibGluZXNQZXJQYWdlIiwicGFnaW5hdGVkQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJ0b3RhbExpbmVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsImxpbmVzIiwicGFnaW5hdGVkQ2hpbGROb2RlIiwicHVzaCIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZnJvbVBhZ2luYXRlZENoaWxkTm9kZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50c0FuZERpdmlzaW9uQ2xhc3NOYW1lIiwicGFnaW5hdGVkRGl2aXNpb25NYXJrZG93bk5vZGUiLCJzZXRQYWdlTnVtYmVyIiwicGFnZU51bWJlciIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJzb21lIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlIiwicGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiY3JlYXRlQ29udGVudHMiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJjb250ZW50c0NyZWF0ZWQiLCJjb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJmaW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsIkNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImNvbnRlbnRzTGlzdFJlcGxhY2VtZW50IiwiQ29udGVudHNMaXN0UmVwbGFjZW1lbnQiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZXBsYWNlQ29udGVudHNEaXJlY3RpdmVTdWJkaXZpc2lvblJlcGxhY2VtZW50IiwiY3JlYXRlRm9vdG5vdGVzIiwiZm9vdG5vdGVSZXBsYWNlbWVudE1hcCIsImZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCIsIkZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZEZvb3Rub3RlUmVwbGFjZW1lbnRNYXAiLCJhcHBlbmRUb0RpdmlzaW9uTWFya2Rvd25Ob2RlIiwicmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyIsImNhbGxiYWNrIiwibGlua01hcmtkb3duTm9kZSIsInByZXBhcmVGb290bm90ZXMiLCJmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzIiwicmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzIiwiRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiZm9vdG5vdGVSZXBsYWNlbWVudCIsIkZvb3Rub3RlUmVwbGFjZW1lbnQiLCJmcm9tRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiaWRlbnRpZmllciIsInJlc29sdmVJbmNsdWRlcyIsInJlc29sdmVFbWJlZGRpbmdzIiwiU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50cyIsInJlZHVjZSIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwicmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY3JlYXRlRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50IiwiYXNIVE1MIiwiaHRtbCIsImluZGVudCIsIkVNUFRZX1NUUklORyIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsImNsb25lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJNYXJrZG93bk5vZGUiLCJESVZJU0lPTl9SVUxFX05BTUUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBb0JxQkE7Ozt5QkFsQlU7K0RBRU47K0RBQ087bUVBQ0k7b0VBQ0M7Z0VBQ007d0VBQ1M7eUVBQ0M7MEVBQ0M7eUJBRXpCO3lCQUNNO3lCQUNPO3FCQUNxRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvSCxJQUFRQyxRQUFrQkMseUJBQWMsQ0FBaENELE9BQU9FLFNBQVdELHlCQUFjLENBQXpCQztBQUVBLElBQUEsQUFBTUgscUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUEscUJBQ1BJLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxpQkFBaUI7Z0NBRGpFVDs7a0NBRVhJLFVBQVVDLFlBQVlDLFlBQVlDLFNBQVNDO1FBRWpELE1BQUtD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