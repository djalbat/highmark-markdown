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
                var footnoteSubDivisionReplacements = this.removeSubDivisionMarkdownNodes(_footnote1.default, context), footnotesDirectiveSubDivisionReplacement = this.removeSubDivisionMarkdownNode(_footnotesDirective.default, context);
                if (footnotesDirectiveSubDivisionReplacement !== null) {
                    var divisionMarkdownNode = this, footnoteReplacements1 = footnoteReplacementsFromFootnoteSubDivisionReplacements(footnoteSubDivisionReplacements), footnotesListReplacement = _footnotesList.default.fromFootnoteReplacementsAndDivisionMarkdownNode(footnoteReplacements1, divisionMarkdownNode, context);
                    if (footnotesListReplacement !== null) {
                        (0, _footnotes.renumberLinkMarkdownNodes)(divisionMarkdownNode, callback, context);
                        footnotesListReplacement.appendToDivisionMarkdownNode(divisionMarkdownNode, context);
                    }
                }
                function callback() {
                ///
                }
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
                    subDivisionReplacement.removeDivisionFromMarkdownNode(divisionMarkdownNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgRm9vdG5vdGVSZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvZm9vdG5vdGVcIjtcbmltcG9ydCBDb250ZW50c0xpc3RSZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvY29udGVudHNMaXN0XCI7XG5pbXBvcnQgRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudC9mb290bm90ZXNMaXN0XCI7XG5pbXBvcnQgRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudC9zdWJEaXZpc2lvbi9mb290bm90ZVwiO1xuaW1wb3J0IENvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvc3ViRGl2aXNpb24vY29udGVudHNEaXJlY3RpdmVcIjtcbmltcG9ydCBGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudC9zdWJEaXZpc2lvbi9mb290bm90ZXNEaXJlY3RpdmVcIjtcbmltcG9ydCBQYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvc3ViRGl2aXNpb24vcGFnZU51bWJlckRpcmVjdGl2ZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBESVZJU0lPTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyByZW51bWJlckxpbmtNYXJrZG93bk5vZGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mb290bm90ZXNcIjtcbmltcG9ydCB7IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlLCBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSwgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpc2lvbk1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50LCBkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldERpdmlzaW9uQ2xhc3NOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgc2V0RGl2aXNpb25DbGFzc05hbWUoZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZGl2aXNpb25DbGFzc05hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGlzSWdub3JlZCgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcyxcbiAgICAgICAgICBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBpZ25vcmVkID0gKGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gaWdub3JlZDtcbiAgfVxuXG4gIHBhZ2luYXRlKGNvbnRleHQpIHtcbiAgICAvLyBjb25zdCB7IGxpbmVzUGVyUGFnZSB9ID0gY29udGV4dCxcbiAgICAvLyAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IHRoaXMucmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoUGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpLFxuICAgIC8vICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpLFxuICAgIC8vICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IFtdLFxuICAgIC8vICAgICAgIHBhZ2luYXRlZENoaWxkTm9kZXMgPSBbXTtcbiAgICAvL1xuICAgIC8vXG4gICAgLy8gICBsZXQgdG90YWxMaW5lcyA9IDA7XG4gICAgLy9cbiAgICAvLyBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIC8vICAgY29uc3QgbGluZXMgPSBjaGlsZE5vZGUubGluZXMoY29udGV4dCksXG4gICAgLy8gICAgICAgICBwYWdpbmF0ZWRDaGlsZE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cbiAgICAvL1xuICAgIC8vICAgdG90YWxMaW5lcyArPSBsaW5lcztcbiAgICAvL1xuICAgIC8vICAgcGFnaW5hdGVkQ2hpbGROb2Rlcy5wdXNoKHBhZ2luYXRlZENoaWxkTm9kZSk7XG4gICAgLy9cbiAgICAvLyAgIGlmICh0b3RhbExpbmVzID4gbGluZXNQZXJQYWdlKSB7XG4gICAgLy8gICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gRGl2aXNpb25NYXJrZG93bk5vZGUuZnJvbVBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50UGFnaW5hdGVkQ2hpbGROb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBwYWdpbmF0ZWRDaGlsZE5vZGVzLCB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lLCBjb250ZXh0KTtcbiAgICAvL1xuICAgIC8vICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMucHVzaChkaXZpc2lvbk1hcmtkb3duTm9kZSk7XG4gICAgLy9cbiAgICAvLyAgICAgY2xlYXIocGFnaW5hdGVkQ2hpbGROb2Rlcyk7XG4gICAgLy9cbiAgICAvLyAgICAgdG90YWxMaW5lcyA9IDA7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG4gICAgLy9cbiAgICAvLyBpZiAodG90YWxMaW5lcyA+IDApIHtcbiAgICAvLyAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gRGl2aXNpb25NYXJrZG93bk5vZGUuZnJvbVBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50UGFnaW5hdGVkQ2hpbGROb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBwYWdpbmF0ZWRDaGlsZE5vZGVzLCB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lLCBjb250ZXh0KTtcbiAgICAvL1xuICAgIC8vICAgZGl2aXNpb25NYXJrZG93bk5vZGVzLnB1c2goZGl2aXNpb25NYXJrZG93bk5vZGUpO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZXM7XG4gIH1cblxuICBzZXRQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcyxcbiAgICAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlID0gcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgaWYgKHBhZ2VOdW1iZXJEaXJlY3RpdmUgIT09IG51bGwpIHtcbiAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmUuc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVDb250ZW50cyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgY29udGVudHNDcmVhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSB0aGlzLmZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50KENvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoY29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIGNvbnRlbnRzTGlzdFJlcGxhY2VtZW50ID0gQ29udGVudHNMaXN0UmVwbGFjZW1lbnQuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoY29udGVudHNMaXN0UmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgY29udGVudHNMaXN0UmVwbGFjZW1lbnQucmVwbGFjZUNvbnRlbnRzRGlyZWN0aXZlU3ViZGl2aXNpb25SZXBsYWNlbWVudChjb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZW50c0NyZWF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50c0NyZWF0ZWQ7XG4gIH1cblxuICBjcmVhdGVGb290bm90ZXMoZm9vdG5vdGVSZXBsYWNlbWVudHMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzID0gdGhpcy5yZW1vdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gdGhpcy5yZW1vdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZShGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIGZvb3Rub3RlUmVwbGFjZW1lbnRzID0gZm9vdG5vdGVSZXBsYWNlbWVudHNGcm9tRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cyhmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzKSxcbiAgICAgICAgICAgIGZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCA9IEZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudC5mcm9tRm9vdG5vdGVSZXBsYWNlbWVudHNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShmb290bm90ZVJlcGxhY2VtZW50cywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJlbnVtYmVyTGlua01hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNhbGxiYWNrLCBjb250ZXh0KTtcblxuICAgICAgICBmb290bm90ZXNMaXN0UmVwbGFjZW1lbnQuYXBwZW5kVG9EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAvLy9cbiAgICB9XG4gIH1cblxuICByZXNvbHZlSW5jbHVkZXMoY29udGV4dCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpO1xuXG4gICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlSW5jbHVkZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzb2x2ZUVtYmVkZGluZ3MoY29udGV4dCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpO1xuXG4gICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlRW1iZWRkaW5ncyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudChTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gdGhpcy5maW5kU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzKCk7XG5cbiAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMuc29tZSgoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSBTdWJEaXZpc2lvblJlcGxhY2VtZW50LmZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJEaXZpc2lvblJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQ7XG4gIH1cblxuICBmaW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudHMoU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpLFxuICAgICAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLnJlZHVjZSgoc3ViRGl2aXNpb25SZXBsYWNlbWVudHMsIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gU3ViRGl2aXNpb25SZXBsYWNlbWVudC5mcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoc3ViRGl2aXNpb25SZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50cy5wdXNoKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc3ViRGl2aXNpb25SZXBsYWNlbWVudHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzO1xuICB9XG5cbiAgZmluZFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIHJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvL1xuICAgICAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSB0aGlzLmZpbmRTdWJEaXZpc2lvblJlcGxhY2VtZW50KFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQucmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25SZXBsYWNlbWVudDtcbiAgfVxuXG4gIHJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyhTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy9cbiAgICAgICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50cyA9IHRoaXMuZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzKFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMuZm9yRWFjaCgoc3ViRGl2aXNpb25SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudC5yZW1vdmVEaXZpc2lvbkZyb21NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzO1xuICB9XG5cbiAgY3JlYXRlRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzID0gdGhpcy5maW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudHMoRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBmb290bm90ZVJlcGxhY2VtZW50cyA9IGZvb3Rub3RlUmVwbGFjZW1lbnRzRnJvbUZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMoZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cyksXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50ID0gRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50LmZyb21Gb290bm90ZVJlcGxhY2VtZW50c0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGZvb3Rub3RlUmVwbGFjZW1lbnRzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50O1xuICB9XG5cbiAgYXNIVE1MKGNvbnRleHQpIHtcbiAgICBsZXQgaHRtbCA9IG51bGw7XG5cbiAgICBjb25zdCBpbmRlbnQgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChjaGlsZE5vZGVzSFRNTCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgICAgY2xvc2luZ1RhZyA9IHRoaXMuY2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgICAgaHRtbCA9IGAke2luZGVudH0ke3N0YXJ0aW5nVGFnfVxuJHtjaGlsZE5vZGVzSFRNTH0ke2luZGVudH0ke2Nsb3NpbmdUYWd9XG5gO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZSh0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkge1xuICAgIGNvbnN0IGRpdmlzaW9uQ2xhc3NOYW1lID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShEaXZpc2lvbk1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRQYWdpbmF0ZWRDaGlsZE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUocGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIHBhZ2luYXRlZENoaWxkTm9kZXMsIGRpdmlzaW9uQ2xhc3NOYW1lLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBESVZJU0lPTl9SVUxFX05BTUUsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IFtcbiAgICAgICAgICAgIC4uLnBhZ2luYXRlZENoaWxkTm9kZXNcbiAgICAgICAgICBdLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KERpdmlzaW9uTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgaWYgKHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LmNsb25lKCk7ICAvLy9cblxuICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuYXBwZW5kVG9EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvb3Rub3RlUmVwbGFjZW1lbnRzRnJvbUZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMoZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cykge1xuICBjb25zdCBmb290bm90ZVJlcGxhY2VtZW50cyA9IGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMubWFwKChmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpID0+IHtcbiAgICBjb25zdCBmb290bm90ZVJlcGxhY2VtZW50ID0gRm9vdG5vdGVSZXBsYWNlbWVudC5mcm9tRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50KGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVSZXBsYWNlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGZvb3Rub3RlUmVwbGFjZW1lbnRzO1xufVxuIl0sIm5hbWVzIjpbIkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwicHJlY2VkZW5jZSIsIm9wYWNpdHkiLCJkb21FbGVtZW50IiwiZGl2aXNpb25DbGFzc05hbWUiLCJnZXREaXZpc2lvbkNsYXNzTmFtZSIsInNldERpdmlzaW9uQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsImlzSWdub3JlZCIsIm5vZGUiLCJpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSIsImlnbm9yZWQiLCJwYWdpbmF0ZSIsInNldFBhZ2VOdW1iZXIiLCJwYWdlTnVtYmVyIiwicGFnZU51bWJlckRpcmVjdGl2ZSIsInBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSIsImNyZWF0ZUNvbnRlbnRzIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwiY29udGVudHNDcmVhdGVkIiwiY29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiZmluZFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJDb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImNvbnRlbnRzTGlzdFJlcGxhY2VtZW50IiwiQ29udGVudHNMaXN0UmVwbGFjZW1lbnQiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZXBsYWNlQ29udGVudHNEaXJlY3RpdmVTdWJkaXZpc2lvblJlcGxhY2VtZW50IiwiY3JlYXRlRm9vdG5vdGVzIiwiZm9vdG5vdGVSZXBsYWNlbWVudHMiLCJmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzIiwicmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzIiwiRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiZm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsInJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiRm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImZvb3Rub3RlUmVwbGFjZW1lbnRzRnJvbUZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMiLCJmb290bm90ZXNMaXN0UmVwbGFjZW1lbnQiLCJGb290bm90ZXNMaXN0UmVwbGFjZW1lbnQiLCJmcm9tRm9vdG5vdGVSZXBsYWNlbWVudHNBbmREaXZpc2lvbk1hcmtkb3duTm9kZSIsInJlbnVtYmVyTGlua01hcmtkb3duTm9kZXMiLCJjYWxsYmFjayIsImFwcGVuZFRvRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZXNvbHZlSW5jbHVkZXMiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJmaW5kU3ViRGl2aXNpb25NYXJrZG93bk5vZGVzIiwiZm9yRWFjaCIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwicmVzb2x2ZUVtYmVkZGluZ3MiLCJTdWJEaXZpc2lvblJlcGxhY2VtZW50Iiwic3ViRGl2aXNpb25SZXBsYWNlbWVudCIsInNvbWUiLCJmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJmaW5kU3ViRGl2aXNpb25SZXBsYWNlbWVudHMiLCJzdWJEaXZpc2lvblJlcGxhY2VtZW50cyIsInJlZHVjZSIsInB1c2giLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSIsInJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZSIsInJlbW92ZURpdmlzaW9uRnJvbU1hcmtkb3duTm9kZSIsImNyZWF0ZUZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCIsImFzSFRNTCIsImh0bWwiLCJpbmRlbnQiLCJFTVBUWV9TVFJJTkciLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJzdGFydGluZ1RhZyIsImNsb3NpbmdUYWciLCJjbG9uZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwiTWFya2Rvd25Ob2RlIiwiZnJvbVBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50UGFnaW5hdGVkQ2hpbGROb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lIiwicGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJwYWdpbmF0ZWRDaGlsZE5vZGVzIiwiRElWSVNJT05fUlVMRV9OQU1FIiwibWFwIiwiZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiZm9vdG5vdGVSZXBsYWNlbWVudCIsIkZvb3Rub3RlUmVwbGFjZW1lbnQiLCJmcm9tRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFnQnFCQTs7OytEQWRJOytEQUNPO21FQUNJO29FQUNDO2dFQUNNO3dFQUNTO3lFQUNDOzBFQUNDO3lCQUV6Qjt5QkFDTTt5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