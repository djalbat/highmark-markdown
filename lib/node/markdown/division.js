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
var _footnotesDirective = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision/footnotesDirective"));
var _pageNumberDirective = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision/pageNumberDirective"));
var _constants = require("../../constants");
var _ruleNames = require("../../ruleNames");
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
var clear = _necessary.arrayUtilities.clear;
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
            value: function paginate(context) {
                var _this = this;
                var linesPerPage = context.linesPerPage, childNodes = this.getChildNodes(), paginatedChildNodes = [], divisionMarkdownNodes = [], pageNumberDirectiveSubDivisionReplacement = this.removeSubDivisionMarkdownNode(_pageNumberDirective.default, context);
                var totalLines = 0;
                childNodes.forEach(function(childNode) {
                    var lines = childNode.lines(context), paginatedChildNode = childNode; ///
                    totalLines += lines;
                    paginatedChildNodes.push(paginatedChildNode);
                    if (totalLines > linesPerPage) {
                        var divisionMarkdownNode = DivisionMarkdownNode.fromPageNumberDirectiveSubDivisionReplacementPaginatedChildNodesAndDivisionClassName(pageNumberDirectiveSubDivisionReplacement, paginatedChildNodes, _this.divisionClassName, context);
                        divisionMarkdownNodes.push(divisionMarkdownNode);
                        clear(paginatedChildNodes);
                        totalLines = 0;
                    }
                });
                if (totalLines > 0) {
                    var divisionMarkdownNode = DivisionMarkdownNode.fromPageNumberDirectiveSubDivisionReplacementPaginatedChildNodesAndDivisionClassName(pageNumberDirectiveSubDivisionReplacement, paginatedChildNodes, this.divisionClassName, context);
                    divisionMarkdownNodes.push(divisionMarkdownNode);
                }
                return divisionMarkdownNodes;
            }
        },
        {
            key: "setPageNumber",
            value: function setPageNumber(pageNumber) {
                var node = this, pageNumberDirective = (0, _query.pageNumberDirectiveMarkdownNodeFromNode)(node);
                if (pageNumberDirective !== null) {
                    pageNumberDirective.setPageNumber(pageNumber);
                }
            }
        },
        {
            key: "createContents",
            value: function createContents(divisionMarkdownNodes, context) {
                var contentsCreated = false;
                var node = this, contentsDirectiveMarkdownNode = (0, _query.contentsDirectiveMarkdownNodeFromNode)(node);
                if (contentsDirectiveMarkdownNode !== null) {
                    var divisionMarkdownNode = this, contentsListReplacement = _contentsList.default.fromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context);
                    if (contentsListReplacement !== null) {
                        contentsListReplacement.replaceContentsDirectiveMarkdownNode(contentsDirectiveMarkdownNode, divisionMarkdownNode, context);
                        contentsCreated = true;
                    }
                }
                return contentsCreated;
            }
        },
        {
            key: "createFootnotes",
            value: function createFootnotes(footnoteReplacements, context) {
                if (footnoteReplacements !== null) {
                    var divisionMarkdownNode = this, footnotesListReplacement = _footnotesList.default.fromFootnoteReplacementsAndDivisionMarkdownNode(footnoteReplacements, divisionMarkdownNode, context);
                    if (footnotesListReplacement !== null) {
                        footnotesListReplacement.appendToDivisionMarkdownNode(divisionMarkdownNode, context);
                    }
                }
            }
        },
        {
            key: "prepareFootnotes",
            value: function prepareFootnotes(context) {
                var footnoteSubDivisionReplacements = this.removeSubDivisionMarkdownNodes(_footnote1.default, context);
                var footnoteReplacements = footnoteSubDivisionReplacements.map(function(footnoteSubDivisionReplacement) {
                    var footnoteReplacement = _footnote.default.fromFootnoteSubDivisionReplacement(footnoteSubDivisionReplacement);
                    return footnoteReplacement;
                });
                var footnotesDirectiveSubDivisionReplacement = this.removeSubDivisionMarkdownNode(_footnotesDirective.default, context);
                if (footnotesDirectiveSubDivisionReplacement === null) {
                    footnoteReplacements = null;
                }
                return footnoteReplacements;
            }
        },
        {
            key: "resolveEmbeddings",
            value: function resolveEmbeddings(context) {
                var _this = this;
                var node = this, embedDirectiveMarkdownNodes = (0, _query.embedDirectiveMarkdownNodesFromNode)(node);
                embedDirectiveMarkdownNodes.map(function(embedDirectiveMarkdownNode) {
                    var importedReplacement = embedDirectiveMarkdownNode.import(context);
                    if (importedReplacement !== null) {
                        var childNode = embedDirectiveMarkdownNode, parentNode = _this.findParentNode(childNode);
                        importedReplacement.replaceEmbedDirectiveMarkdownNode(embedDirectiveMarkdownNode, parentNode, context);
                    }
                });
            }
        },
        {
            key: "removeSubDivisionMarkdownNode",
            value: function removeSubDivisionMarkdownNode(SubDivisionReplacement, context) {
                var _this = this;
                var subDivisionReplacement = null;
                var node = this, subDivisionMarkdownNodes = (0, _query.subDivisionMarkdownNodesFromNode)(node);
                subDivisionMarkdownNodes.some(function(subDivisionMarkdownNode) {
                    subDivisionReplacement = SubDivisionReplacement.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);
                    if (subDivisionReplacement !== null) {
                        var divisionMarkdownNode = _this; ///
                        subDivisionReplacement.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
                        return true;
                    }
                });
                return subDivisionReplacement;
            }
        },
        {
            key: "removeSubDivisionMarkdownNodes",
            value: function removeSubDivisionMarkdownNodes(SubDivisionReplacement, context) {
                var _this = this;
                var node = this, subDivisionMarkdownNodes = (0, _query.subDivisionMarkdownNodesFromNode)(node), subDivisionReplacements = subDivisionMarkdownNodes.reduce(function(subDivisionReplacements, subDivisionMarkdownNode) {
                    var subDivisionReplacement = SubDivisionReplacement.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);
                    if (subDivisionReplacement !== null) {
                        var divisionMarkdownNode = _this; ///
                        subDivisionReplacement.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
                        subDivisionReplacements.push(subDivisionReplacement);
                    }
                    return subDivisionReplacements;
                }, []);
                return subDivisionReplacements;
            }
        },
        {
            key: "createFootnotesListMarkdownNode",
            value: function createFootnotesListMarkdownNode(context) {
            // const divisionMarkdownNode = this,  ///
            //       footnotesListMarkdownNode = FootnotesListMarkdownNode.fromDivisionMarkdownNode(divisionMarkdownNode, context);
            //
            // return footnotesListMarkdownNode;
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
            key: "fromPageNumberDirectiveSubDivisionReplacementPaginatedChildNodesAndDivisionClassName",
            value: function fromPageNumberDirectiveSubDivisionReplacementPaginatedChildNodesAndDivisionClassName(pageNumberDirectiveSubDivisionReplacement, paginatedChildNodes, divisionClassName, context) {
                var ruleName = _ruleNames.DIVISION_RULE_NAME, childNodes = _to_consumable_array(paginatedChildNodes), opacity = null, divisionMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);
                if (pageNumberDirectiveSubDivisionReplacement !== null) {
                    pageNumberDirectiveSubDivisionReplacement = pageNumberDirectiveSubDivisionReplacement.clone(); ///
                    pageNumberDirectiveSubDivisionReplacement.appendToDivisionMarkdownNode(divisionMarkdownNode, context);
                }
                return divisionMarkdownNode;
            }
        }
    ]);
    return DivisionMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IEZvb3Rub3RlUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L2Zvb3Rub3RlXCI7XG5pbXBvcnQgQ29udGVudHNMaXN0UmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L2NvbnRlbnRzTGlzdFwiO1xuaW1wb3J0IEZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvZm9vdG5vdGVzTGlzdFwiO1xuaW1wb3J0IEZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvc3ViRGl2aXNpb24vZm9vdG5vdGVcIjtcbmltcG9ydCBGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudC9zdWJEaXZpc2lvbi9mb290bm90ZXNEaXJlY3RpdmVcIjtcbmltcG9ydCBQYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvc3ViRGl2aXNpb24vcGFnZU51bWJlckRpcmVjdGl2ZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBESVZJU0lPTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSxcbiAgICAgICAgIGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlLFxuICAgICAgICAgaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUsXG4gICAgICAgICBjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlLFxuICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB7IGNsZWFyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCwgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIHNldERpdmlzaW9uQ2xhc3NOYW1lKGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lOyAvLy9cblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBpc0lnbm9yZWQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsXG4gICAgICAgICAgaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgaWdub3JlZCA9IChpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGlnbm9yZWQ7XG4gIH1cblxuICBwYWdpbmF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBsaW5lc1BlclBhZ2UgfSA9IGNvbnRleHQsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHBhZ2luYXRlZENoaWxkTm9kZXMgPSBbXSxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBbXSxcbiAgICAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IHRoaXMucmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoUGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgbGV0IHRvdGFsTGluZXMgPSAwO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGxpbmVzID0gY2hpbGROb2RlLmxpbmVzKGNvbnRleHQpLFxuICAgICAgICAgICAgcGFnaW5hdGVkQ2hpbGROb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIHRvdGFsTGluZXMgKz0gbGluZXM7XG5cbiAgICAgIHBhZ2luYXRlZENoaWxkTm9kZXMucHVzaChwYWdpbmF0ZWRDaGlsZE5vZGUpO1xuXG4gICAgICBpZiAodG90YWxMaW5lcyA+IGxpbmVzUGVyUGFnZSkge1xuICAgICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IERpdmlzaW9uTWFya2Rvd25Ob2RlLmZyb21QYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudFBhZ2luYXRlZENoaWxkTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZShwYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgcGFnaW5hdGVkQ2hpbGROb2RlcywgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSwgY29udGV4dCk7XG5cbiAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzLnB1c2goZGl2aXNpb25NYXJrZG93bk5vZGUpO1xuXG4gICAgICAgIGNsZWFyKHBhZ2luYXRlZENoaWxkTm9kZXMpO1xuXG4gICAgICAgIHRvdGFsTGluZXMgPSAwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRvdGFsTGluZXMgPiAwKSB7XG4gICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IERpdmlzaW9uTWFya2Rvd25Ob2RlLmZyb21QYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudFBhZ2luYXRlZENoaWxkTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZShwYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgcGFnaW5hdGVkQ2hpbGROb2RlcywgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSwgY29udGV4dCk7XG5cbiAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5wdXNoKGRpdmlzaW9uTWFya2Rvd25Ob2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsXG4gICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZSA9IHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgIGlmIChwYWdlTnVtYmVyRGlyZWN0aXZlICE9PSBudWxsKSB7XG4gICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlLnNldFBhZ2VOdW1iZXIocGFnZU51bWJlcik7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlQ29udGVudHMoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnRzQ3JlYXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICBpZiAoY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgY29udGVudHNMaXN0UmVwbGFjZW1lbnQgPSBDb250ZW50c0xpc3RSZXBsYWNlbWVudC5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChjb250ZW50c0xpc3RSZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb250ZW50c0xpc3RSZXBsYWNlbWVudC5yZXBsYWNlQ29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUoY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZW50c0NyZWF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50c0NyZWF0ZWQ7XG4gIH1cblxuICBjcmVhdGVGb290bm90ZXMoZm9vdG5vdGVSZXBsYWNlbWVudHMsIGNvbnRleHQpIHtcbiAgICBpZiAoZm9vdG5vdGVSZXBsYWNlbWVudHMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50ID0gRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50LmZyb21Gb290bm90ZVJlcGxhY2VtZW50c0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGZvb3Rub3RlUmVwbGFjZW1lbnRzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChmb290bm90ZXNMaXN0UmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50LmFwcGVuZFRvRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByZXBhcmVGb290bm90ZXMoY29udGV4dCkge1xuICAgIGNvbnN0IGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMgPSB0aGlzLnJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyhGb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgbGV0IGZvb3Rub3RlUmVwbGFjZW1lbnRzID0gZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cy5tYXAoKGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgY29uc3QgZm9vdG5vdGVSZXBsYWNlbWVudCA9IEZvb3Rub3RlUmVwbGFjZW1lbnQuZnJvbUZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudChmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpO1xuXG4gICAgICByZXR1cm4gZm9vdG5vdGVSZXBsYWNlbWVudDtcbiAgICB9KTtcblxuICAgIGNvbnN0IGZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSB0aGlzLnJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKEZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPT09IG51bGwpIHtcbiAgICAgIGZvb3Rub3RlUmVwbGFjZW1lbnRzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9vdG5vdGVSZXBsYWNlbWVudHM7XG4gIH1cblxuICByZXNvbHZlRW1iZWRkaW5ncyhjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMgPSBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2Rlcy5tYXAoKGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBjb25zdCBpbXBvcnRlZFJlcGxhY2VtZW50ID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUuaW1wb3J0KGNvbnRleHQpO1xuXG4gICAgICBpZiAoaW1wb3J0ZWRSZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGUgPSBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBwYXJlbnROb2RlID0gdGhpcy5maW5kUGFyZW50Tm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICAgIGltcG9ydGVkUmVwbGFjZW1lbnQucmVwbGFjZUVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlKGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlLCBwYXJlbnROb2RlLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLnNvbWUoKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gU3ViRGl2aXNpb25SZXBsYWNlbWVudC5mcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3ViRGl2aXNpb25SZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXM7ICAvLy9cblxuICAgICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50LnJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25SZXBsYWNlbWVudDtcbiAgfVxuXG4gIHJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyhTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50cyA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5yZWR1Y2UoKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudC5yZW1vdmVGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLnB1c2goc3ViRGl2aXNpb25SZXBsYWNlbWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzdWJEaXZpc2lvblJlcGxhY2VtZW50cztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25SZXBsYWNlbWVudHM7XG4gIH1cblxuICBjcmVhdGVGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlKGNvbnRleHQpIHtcbiAgICAvLyBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAvLyAgICAgICBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIC8vXG4gICAgLy8gcmV0dXJuIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGU7XG4gIH1cblxuICBhc0hUTUwoY29udGV4dCkge1xuICAgIGxldCBodG1sID0gbnVsbDtcblxuICAgIGNvbnN0IGluZGVudCA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNIVE1MICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGFydGluZ1RhZyA9IHRoaXMuc3RhcnRpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgICBjbG9zaW5nVGFnID0gdGhpcy5jbG9zaW5nVGFnKGNvbnRleHQpO1xuXG4gICAgICBodG1sID0gYCR7aW5kZW50fSR7c3RhcnRpbmdUYWd9XG4ke2NoaWxkTm9kZXNIVE1MfSR7aW5kZW50fSR7Y2xvc2luZ1RhZ31cbmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKHRoaXMuZGl2aXNpb25DbGFzc05hbWUpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7XG4gICAgY29uc3QgZGl2aXNpb25DbGFzc05hbWUgPSBudWxsLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KERpdmlzaW9uTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudFBhZ2luYXRlZENoaWxkTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZShwYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgcGFnaW5hdGVkQ2hpbGROb2RlcywgZGl2aXNpb25DbGFzc05hbWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IERJVklTSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gW1xuICAgICAgICAgICAgLi4ucGFnaW5hdGVkQ2hpbGROb2Rlc1xuICAgICAgICAgIF0sXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICBpZiAocGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gcGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuY2xvbmUoKTsgIC8vL1xuXG4gICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudC5hcHBlbmRUb0RpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImNsZWFyIiwiYXJyYXlVdGlsaXRpZXMiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJwcmVjZWRlbmNlIiwib3BhY2l0eSIsImRvbUVsZW1lbnQiLCJkaXZpc2lvbkNsYXNzTmFtZSIsImdldERpdmlzaW9uQ2xhc3NOYW1lIiwic2V0RGl2aXNpb25DbGFzc05hbWUiLCJjbGFzc05hbWUiLCJjb250ZXh0IiwiaXNJZ25vcmVkIiwibm9kZSIsImlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiaWdub3JlZCIsInBhZ2luYXRlIiwibGluZXNQZXJQYWdlIiwiZ2V0Q2hpbGROb2RlcyIsInBhZ2luYXRlZENoaWxkTm9kZXMiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJwYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsInJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiUGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJ0b3RhbExpbmVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsImxpbmVzIiwicGFnaW5hdGVkQ2hpbGROb2RlIiwicHVzaCIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZnJvbVBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50UGFnaW5hdGVkQ2hpbGROb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lIiwic2V0UGFnZU51bWJlciIsInBhZ2VOdW1iZXIiLCJwYWdlTnVtYmVyRGlyZWN0aXZlIiwicGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiY3JlYXRlQ29udGVudHMiLCJjb250ZW50c0NyZWF0ZWQiLCJjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJjb250ZW50c0xpc3RSZXBsYWNlbWVudCIsIkNvbnRlbnRzTGlzdFJlcGxhY2VtZW50IiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwicmVwbGFjZUNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiY3JlYXRlRm9vdG5vdGVzIiwiZm9vdG5vdGVSZXBsYWNlbWVudHMiLCJmb290bm90ZXNMaXN0UmVwbGFjZW1lbnQiLCJGb290bm90ZXNMaXN0UmVwbGFjZW1lbnQiLCJmcm9tRm9vdG5vdGVSZXBsYWNlbWVudHNBbmREaXZpc2lvbk1hcmtkb3duTm9kZSIsImFwcGVuZFRvRGl2aXNpb25NYXJrZG93bk5vZGUiLCJwcmVwYXJlRm9vdG5vdGVzIiwiZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cyIsInJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsIkZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsIm1hcCIsImZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImZvb3Rub3RlUmVwbGFjZW1lbnQiLCJGb290bm90ZVJlcGxhY2VtZW50IiwiZnJvbUZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwicmVzb2x2ZUVtYmVkZGluZ3MiLCJlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMiLCJlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZSIsImVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiaW1wb3J0ZWRSZXBsYWNlbWVudCIsImltcG9ydCIsInBhcmVudE5vZGUiLCJmaW5kUGFyZW50Tm9kZSIsInJlcGxhY2VFbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSIsIlN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJzdWJEaXZpc2lvblJlcGxhY2VtZW50Iiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGVzIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJzb21lIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZW1vdmVGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJzdWJEaXZpc2lvblJlcGxhY2VtZW50cyIsInJlZHVjZSIsImNyZWF0ZUZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJhc0hUTUwiLCJodG1sIiwiaW5kZW50IiwiRU1QVFlfU1RSSU5HIiwiY2hpbGROb2Rlc0hUTUwiLCJjaGlsZE5vZGVzQXNIVE1MIiwic3RhcnRpbmdUYWciLCJjbG9zaW5nVGFnIiwiY2xvbmUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsIkRJVklTSU9OX1JVTEVfTkFNRSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBc0JxQkE7Ozt5QkFwQlU7K0RBRU47K0RBQ087bUVBQ0k7b0VBQ0M7Z0VBQ007eUVBQ1U7MEVBQ0M7eUJBRXpCO3lCQUNNO3FCQUtxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RCxJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUQscUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUEscUJBQ1BHLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxpQkFBaUI7Z0NBRGpFUjs7a0NBRVhHLFVBQVVDLFlBQVlDLFlBQVlDLFNBQVNDO1FBRWpELE1BQUtDLGlCQUFpQixHQUFHQTs7O2tCQUpSUjs7WUFPbkJTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFP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