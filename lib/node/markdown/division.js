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
            // const { linesPerPage } = context,
            //       pageNumberDirectiveSubDivisionReplacement = this.removeSubDivisionMarkdownNode(PageNumberDirectiveSubDivisionReplacement, context),
            //       subDivisionMarkdownNodes = this.findSubDivisionMarkdownNodes(),
            //       divisionMarkdownNodes = [],
            //       paginatedChildNodes = [];
            //
            //
            //   let totalLines = 0;
            //
            // childNodes.forEach((childNode) => {
            //   const lines = childNode.lines(context),
            //         paginatedChildNode = childNode;  ///
            //
            //   totalLines += lines;
            //
            //   paginatedChildNodes.push(paginatedChildNode);
            //
            //   if (totalLines > linesPerPage) {
            //     const divisionMarkdownNode = DivisionMarkdownNode.fromPageNumberDirectiveSubDivisionReplacementPaginatedChildNodesAndDivisionClassName(pageNumberDirectiveSubDivisionReplacement, paginatedChildNodes, this.divisionClassName, context);
            //
            //     divisionMarkdownNodes.push(divisionMarkdownNode);
            //
            //     clear(paginatedChildNodes);
            //
            //     totalLines = 0;
            //   }
            // });
            //
            // if (totalLines > 0) {
            //   const divisionMarkdownNode = DivisionMarkdownNode.fromPageNumberDirectiveSubDivisionReplacementPaginatedChildNodesAndDivisionClassName(pageNumberDirectiveSubDivisionReplacement, paginatedChildNodes, this.divisionClassName, context);
            //
            //   divisionMarkdownNodes.push(divisionMarkdownNode);
            // }
            //
            // return divisionMarkdownNodes;
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
            value: function createFootnotes(footnoteReplacements, context) {
            // const footnotesDirectiveSubDivisionReplacement = this.removeSubDivisionMarkdownNode(FootnotesDirectiveSubDivisionReplacement, context);
            //
            // if (footnotesDirectiveSubDivisionReplacement !== null) {
            //   const divisionMarkdownNode = this,  ///
            //         footnoteReplacements = footnoteReplacementsFromFootnoteSubDivisionReplacements(footnoteSubDivisionReplacements),
            //         footnotesListReplacement = FootnotesListReplacement.fromFootnoteReplacementsAndDivisionMarkdownNode(footnoteReplacements, divisionMarkdownNode, context);
            //
            //   if (footnotesListReplacement !== null) {
            //     renumberLinkMarkdownNodes(divisionMarkdownNode, callback, context);
            //
            //     footnotesListReplacement.appendToDivisionMarkdownNode(divisionMarkdownNode, context);
            //   }
            // }
            //
            // function callback() {
            //   ///
            // }
            }
        },
        {
            key: "prepareFootnotes",
            value: function prepareFootnotes(footnoteMap, context) {
                var footnoteSubDivisionReplacements = this.removeSubDivisionMarkdownNodes(_footnote1.default, context);
                footnoteSubDivisionReplacements.forEach(function(footnoteSubDivisionReplacement) {
                    var identifier = footnoteSubDivisionReplacement.identifier(context);
                    footnoteMap[identifier] = footnoteSubDivisionReplacement;
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
            value: function createFootnotesListReplacement(context) {
                var footnoteSubDivisionReplacements = this.findSubDivisionReplacements(_footnote1.default, context), footnoteReplacements = footnoteReplacementsFromFootnoteSubDivisionReplacements(footnoteSubDivisionReplacements), divisionMarkdownNode = this, footnotesListReplacement = _footnotesList.default.fromFootnoteReplacementsAndDivisionMarkdownNode(footnoteReplacements, divisionMarkdownNode, context);
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
function footnoteReplacementsFromFootnoteSubDivisionReplacements(footnoteSubDivisionReplacements) {
    var footnoteReplacements = footnoteSubDivisionReplacements.map(function(footnoteSubDivisionReplacement) {
        var footnoteReplacement = _footnote.default.fromFootnoteSubDivisionReplacement(footnoteSubDivisionReplacement);
        return footnoteReplacement;
    });
    return footnoteReplacements;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgRm9vdG5vdGVSZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvZm9vdG5vdGVcIjtcbmltcG9ydCBDb250ZW50c0xpc3RSZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvY29udGVudHNMaXN0XCI7XG5pbXBvcnQgRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudC9mb290bm90ZXNMaXN0XCI7XG5pbXBvcnQgRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudC9zdWJEaXZpc2lvbi9mb290bm90ZVwiO1xuaW1wb3J0IENvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvc3ViRGl2aXNpb24vY29udGVudHNEaXJlY3RpdmVcIjtcbmltcG9ydCBGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudC9zdWJEaXZpc2lvbi9mb290bm90ZXNEaXJlY3RpdmVcIjtcbmltcG9ydCBQYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvc3ViRGl2aXNpb24vcGFnZU51bWJlckRpcmVjdGl2ZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBESVZJU0lPTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyByZW51bWJlckxpbmtNYXJrZG93bk5vZGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mb290bm90ZXNcIjtcbmltcG9ydCB7IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlLCBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSwgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpc2lvbk1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50LCBkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldERpdmlzaW9uQ2xhc3NOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgc2V0RGl2aXNpb25DbGFzc05hbWUoZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZGl2aXNpb25DbGFzc05hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGlzSWdub3JlZCgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcyxcbiAgICAgICAgICBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBpZ25vcmVkID0gKGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gaWdub3JlZDtcbiAgfVxuXG4gIHBhZ2luYXRlKGNvbnRleHQpIHtcbiAgICAvLyBjb25zdCB7IGxpbmVzUGVyUGFnZSB9ID0gY29udGV4dCxcbiAgICAvLyAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IHRoaXMucmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoUGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpLFxuICAgIC8vICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpLFxuICAgIC8vICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IFtdLFxuICAgIC8vICAgICAgIHBhZ2luYXRlZENoaWxkTm9kZXMgPSBbXTtcbiAgICAvL1xuICAgIC8vXG4gICAgLy8gICBsZXQgdG90YWxMaW5lcyA9IDA7XG4gICAgLy9cbiAgICAvLyBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIC8vICAgY29uc3QgbGluZXMgPSBjaGlsZE5vZGUubGluZXMoY29udGV4dCksXG4gICAgLy8gICAgICAgICBwYWdpbmF0ZWRDaGlsZE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cbiAgICAvL1xuICAgIC8vICAgdG90YWxMaW5lcyArPSBsaW5lcztcbiAgICAvL1xuICAgIC8vICAgcGFnaW5hdGVkQ2hpbGROb2Rlcy5wdXNoKHBhZ2luYXRlZENoaWxkTm9kZSk7XG4gICAgLy9cbiAgICAvLyAgIGlmICh0b3RhbExpbmVzID4gbGluZXNQZXJQYWdlKSB7XG4gICAgLy8gICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gRGl2aXNpb25NYXJrZG93bk5vZGUuZnJvbVBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50UGFnaW5hdGVkQ2hpbGROb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBwYWdpbmF0ZWRDaGlsZE5vZGVzLCB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lLCBjb250ZXh0KTtcbiAgICAvL1xuICAgIC8vICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMucHVzaChkaXZpc2lvbk1hcmtkb3duTm9kZSk7XG4gICAgLy9cbiAgICAvLyAgICAgY2xlYXIocGFnaW5hdGVkQ2hpbGROb2Rlcyk7XG4gICAgLy9cbiAgICAvLyAgICAgdG90YWxMaW5lcyA9IDA7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG4gICAgLy9cbiAgICAvLyBpZiAodG90YWxMaW5lcyA+IDApIHtcbiAgICAvLyAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gRGl2aXNpb25NYXJrZG93bk5vZGUuZnJvbVBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50UGFnaW5hdGVkQ2hpbGROb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBwYWdpbmF0ZWRDaGlsZE5vZGVzLCB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lLCBjb250ZXh0KTtcbiAgICAvL1xuICAgIC8vICAgZGl2aXNpb25NYXJrZG93bk5vZGVzLnB1c2goZGl2aXNpb25NYXJrZG93bk5vZGUpO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZXM7XG4gIH1cblxuICBzZXRQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcyxcbiAgICAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlID0gcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgaWYgKHBhZ2VOdW1iZXJEaXJlY3RpdmUgIT09IG51bGwpIHtcbiAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmUuc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVDb250ZW50cyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgY29udGVudHNDcmVhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSB0aGlzLmZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50KENvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoY29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIGNvbnRlbnRzTGlzdFJlcGxhY2VtZW50ID0gQ29udGVudHNMaXN0UmVwbGFjZW1lbnQuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoY29udGVudHNMaXN0UmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgY29udGVudHNMaXN0UmVwbGFjZW1lbnQucmVwbGFjZUNvbnRlbnRzRGlyZWN0aXZlU3ViZGl2aXNpb25SZXBsYWNlbWVudChjb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZW50c0NyZWF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50c0NyZWF0ZWQ7XG4gIH1cblxuICBjcmVhdGVGb290bm90ZXMoZm9vdG5vdGVSZXBsYWNlbWVudHMsIGNvbnRleHQpIHtcbiAgICAvLyBjb25zdCBmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gdGhpcy5yZW1vdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZShGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KTtcbiAgICAvL1xuICAgIC8vIGlmIChmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgLy8gICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAvLyAgICAgICAgIGZvb3Rub3RlUmVwbGFjZW1lbnRzID0gZm9vdG5vdGVSZXBsYWNlbWVudHNGcm9tRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cyhmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzKSxcbiAgICAvLyAgICAgICAgIGZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCA9IEZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudC5mcm9tRm9vdG5vdGVSZXBsYWNlbWVudHNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShmb290bm90ZVJlcGxhY2VtZW50cywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIC8vXG4gICAgLy8gICBpZiAoZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgLy8gICAgIHJlbnVtYmVyTGlua01hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNhbGxiYWNrLCBjb250ZXh0KTtcbiAgICAvL1xuICAgIC8vICAgICBmb290bm90ZXNMaXN0UmVwbGFjZW1lbnQuYXBwZW5kVG9EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgLy8gICAvLy9cbiAgICAvLyB9XG4gIH1cblxuICBwcmVwYXJlRm9vdG5vdGVzKGZvb3Rub3RlTWFwLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cyA9IHRoaXMucmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzKEZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCk7XG5cbiAgICBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLmZvckVhY2goKGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgY29uc3QgaWRlbnRpZmllciA9IGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudC5pZGVudGlmaWVyKGNvbnRleHQpO1xuXG4gICAgICBmb290bm90ZU1hcFtpZGVudGlmaWVyXSA9IGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudDtcbiAgICB9KVxuICB9XG5cbiAgcmVzb2x2ZUluY2x1ZGVzKGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcblxuICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUucmVzb2x2ZUluY2x1ZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc29sdmVFbWJlZGRpbmdzKGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcblxuICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUucmVzb2x2ZUVtYmVkZGluZ3MoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQoU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBzdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpO1xuXG4gICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLnNvbWUoKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gU3ViRGl2aXNpb25SZXBsYWNlbWVudC5mcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3ViRGl2aXNpb25SZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvblJlcGxhY2VtZW50O1xuICB9XG5cbiAgZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzKFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKSxcbiAgICAgICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50cyA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5yZWR1Y2UoKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMucHVzaChzdWJEaXZpc2lvblJlcGxhY2VtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvblJlcGxhY2VtZW50cztcbiAgfVxuXG4gIGZpbmRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXM7XG4gIH1cblxuICByZW1vdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZShTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy9cbiAgICAgICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gdGhpcy5maW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudChTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChzdWJEaXZpc2lvblJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50LnJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQ7XG4gIH1cblxuICByZW1vdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vXG4gICAgICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMgPSB0aGlzLmZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50cyhTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KTtcblxuICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLmZvckVhY2goKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQucmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvblJlcGxhY2VtZW50cztcbiAgfVxuXG4gIGNyZWF0ZUZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudChjb250ZXh0KSB7XG4gICAgY29uc3QgZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzKEZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCksXG4gICAgICAgICAgZm9vdG5vdGVSZXBsYWNlbWVudHMgPSBmb290bm90ZVJlcGxhY2VtZW50c0Zyb21Gb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzKGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMpLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCA9IEZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudC5mcm9tRm9vdG5vdGVSZXBsYWNlbWVudHNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShmb290bm90ZVJlcGxhY2VtZW50cywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudDtcbiAgfVxuXG4gIGFzSFRNTChjb250ZXh0KSB7XG4gICAgbGV0IGh0bWwgPSBudWxsO1xuXG4gICAgY29uc3QgaW5kZW50ID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0hUTUwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXJ0aW5nVGFnID0gdGhpcy5zdGFydGluZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICAgIGh0bWwgPSBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ31cbiR7Y2hpbGROb2Rlc0hUTUx9JHtpbmRlbnR9JHtjbG9zaW5nVGFnfVxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUodGhpcy5kaXZpc2lvbkNsYXNzTmFtZSk7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHtcbiAgICBjb25zdCBkaXZpc2lvbkNsYXNzTmFtZSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50UGFnaW5hdGVkQ2hpbGROb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBwYWdpbmF0ZWRDaGlsZE5vZGVzLCBkaXZpc2lvbkNsYXNzTmFtZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRElWSVNJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXG4gICAgICAgICAgICAuLi5wYWdpbmF0ZWRDaGlsZE5vZGVzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShEaXZpc2lvbk1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIGlmIChwYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSBwYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudC5jbG9uZSgpOyAgLy8vXG5cbiAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LmFwcGVuZFRvRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb290bm90ZVJlcGxhY2VtZW50c0Zyb21Gb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzKGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMpIHtcbiAgY29uc3QgZm9vdG5vdGVSZXBsYWNlbWVudHMgPSBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLm1hcCgoZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50KSA9PiB7XG4gICAgY29uc3QgZm9vdG5vdGVSZXBsYWNlbWVudCA9IEZvb3Rub3RlUmVwbGFjZW1lbnQuZnJvbUZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudChmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlUmVwbGFjZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBmb290bm90ZVJlcGxhY2VtZW50cztcbn1cbiJdLCJuYW1lcyI6WyJEaXZpc2lvbk1hcmtkb3duTm9kZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsInByZWNlZGVuY2UiLCJvcGFjaXR5IiwiZG9tRWxlbWVudCIsImRpdmlzaW9uQ2xhc3NOYW1lIiwiZ2V0RGl2aXNpb25DbGFzc05hbWUiLCJzZXREaXZpc2lvbkNsYXNzTmFtZSIsImNsYXNzTmFtZSIsImNvbnRleHQiLCJpc0lnbm9yZWQiLCJub2RlIiwiaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJpZ25vcmVkIiwicGFnaW5hdGUiLCJzZXRQYWdlTnVtYmVyIiwicGFnZU51bWJlciIsInBhZ2VOdW1iZXJEaXJlY3RpdmUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJjcmVhdGVDb250ZW50cyIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImNvbnRlbnRzQ3JlYXRlZCIsImNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiQ29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZW50c0xpc3RSZXBsYWNlbWVudCIsIkNvbnRlbnRzTGlzdFJlcGxhY2VtZW50IiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwicmVwbGFjZUNvbnRlbnRzRGlyZWN0aXZlU3ViZGl2aXNpb25SZXBsYWNlbWVudCIsImNyZWF0ZUZvb3Rub3RlcyIsImZvb3Rub3RlUmVwbGFjZW1lbnRzIiwicHJlcGFyZUZvb3Rub3RlcyIsImZvb3Rub3RlTWFwIiwiZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cyIsInJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsIkZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImZvckVhY2giLCJmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJpZGVudGlmaWVyIiwicmVzb2x2ZUluY2x1ZGVzIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGVzIiwiZmluZFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwicmVzb2x2ZUVtYmVkZGluZ3MiLCJTdWJEaXZpc2lvblJlcGxhY2VtZW50Iiwic3ViRGl2aXNpb25SZXBsYWNlbWVudCIsInNvbWUiLCJmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJmaW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudHMiLCJzdWJEaXZpc2lvblJlcGxhY2VtZW50cyIsInJlZHVjZSIsInB1c2giLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSIsInJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwicmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY3JlYXRlRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50IiwiZm9vdG5vdGVSZXBsYWNlbWVudHNGcm9tRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cyIsImZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCIsIkZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCIsImZyb21Gb290bm90ZVJlcGxhY2VtZW50c0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwiYXNIVE1MIiwiaHRtbCIsImluZGVudCIsIkVNUFRZX1NUUklORyIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsImNsb25lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJNYXJrZG93bk5vZGUiLCJmcm9tUGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRQYWdpbmF0ZWRDaGlsZE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsInBhZ2luYXRlZENoaWxkTm9kZXMiLCJESVZJU0lPTl9SVUxFX05BTUUiLCJhcHBlbmRUb0RpdmlzaW9uTWFya2Rvd25Ob2RlIiwibWFwIiwiZm9vdG5vdGVSZXBsYWNlbWVudCIsIkZvb3Rub3RlUmVwbGFjZW1lbnQiLCJmcm9tRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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