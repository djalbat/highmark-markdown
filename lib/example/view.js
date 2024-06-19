"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _index = require("../index");
var _easylayout = require("easy-layout");
var _html = /*#__PURE__*/ _interop_require_default(require("./view/div/html"));
var _importer = /*#__PURE__*/ _interop_require_wildcard(require("./importer"));
var _preview = /*#__PURE__*/ _interop_require_default(require("./view/div/preview"));
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
var _css = /*#__PURE__*/ _interop_require_default(require("./view/textarea/css"));
var _tabButtons = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/right"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdown"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdownStyle"));
var _processing = require("../utilities/processing");
var _constants = require("./constants");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  padding: 1rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var markdownLexer = _index.MarkdownLexer.fromNothing(), markdownParser = _index.MarkdownParser.fromNothing(), markdownStyleLexer = _index.MarkdownStyleLexer.fromNothing(), markdownStyleParser = _index.MarkdownStyleParser.fromNothing();
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _create_super(View);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "markdownStyleCustomHandler", function(event, element) {
            _this.markdownStyle();
        });
        _define_property(_assert_this_initialized(_this), "pageUpdateCustomHandler", function(event, element, index) {
            _this.clearPage();
            _this.updatePage(index);
        });
        _define_property(_assert_this_initialized(_this), "markdownCustomHandler", function(event, element) {
            _this.markdown();
        });
        _define_property(_assert_this_initialized(_this), "keyUpCustomHandler", function(event, element) {
            _this.update();
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "updateMarkdownStyle",
            value: function updateMarkdownStyle() {
                var markdownStyleElement = this.properties.markdownStyleElement, markdownStyle = this.getMarkdownStyle(), css = markdownStyleElement.update(markdownStyle);
                this.setCSS(css);
                var lexer = markdownStyleLexer, parser = markdownStyleParser, content = markdownStyle, tokens = lexer.tokenise(content), startRule = parser.getStartRule(), startOfContent = true, node = parser.parse(tokens, startRule, startOfContent);
                if (node !== null) {
                    var parseTree = node.asParseTree(tokens);
                    this.updateMarkdownStyleParseTreeTextarea(parseTree);
                } else {
                    this.clearMarkdownStyleParseTreeTextarea();
                }
            }
        },
        {
            key: "updateMarkdown",
            value: function updateMarkdown() {
                var markdown = this.getMarkdown(), lexer = markdownLexer, parser = markdownParser, content = markdown, startOfContent = true, startRule = parser.getStartRule(), tokens = lexer.tokenise(content), node = parser.parse(tokens, startRule, startOfContent);
                this.setTokens(tokens);
                if (node !== null) {
                    var divisionMarkdownNode = node, charactersPerLine = _constants.CHARACTERS_PER_LINE, contentsDepth = _constants.CONTENTS_DEPTH, linePerPage = _constants.LINES_PER_PAGE, context = {
                        tokens: tokens,
                        importer: _importer.default,
                        linePerPage: linePerPage,
                        contentsDepth: contentsDepth,
                        charactersPerLine: charactersPerLine
                    }, divisionMarkdownNodes = (0, _processing.postprocess)(divisionMarkdownNode, context);
                    this.setDivisionMarkdownNodes(divisionMarkdownNodes);
                    var index = 0, length = divisionMarkdownNodes.length, parseTree = divisionMarkdownNode.asParseTree(tokens);
                    this.updatePage(index);
                    this.updatePageButtonsDiv(length);
                    this.updateMarkdownParseTreeTextarea(parseTree);
                } else {
                    this.clearPage();
                    this.clearPageButtonsDiv();
                    this.clearMarkdownParseTreeTextarea();
                    var divisionMarkdownNodes1 = null;
                    this.setDivisionMarkdownNodes(divisionMarkdownNodes1);
                }
            }
        },
        {
            key: "updatePage",
            value: function updatePage(index) {
                var divisionMarkdownNodes = this.getDivisionMarkdownNodes(), divisionMarkdownNode = divisionMarkdownNodes[index], tokens = this.getTokens(), context = {
                    tokens: tokens
                }, length = null, html = divisionMarkdownNode.asHTML(context), domElement = divisionMarkdownNode.createDOMElement(context);
                this.updateXMP(html);
                this.updatePreviewDiv(domElement);
                this.updatePageButtonsDiv(length, index);
            }
        },
        {
            key: "clearPage",
            value: function clearPage() {
                this.clearXMP();
                this.clearPreviewDiv();
            }
        },
        {
            key: "markdownStyle",
            value: function markdownStyle() {
                this.hideMarkdownContainerDiv();
                this.showMarkdownStyleContainerDiv();
            }
        },
        {
            key: "markdown",
            value: function markdown() {
                this.showMarkdownContainerDiv();
                this.hideMarkdownStyleContainerDiv();
            }
        },
        {
            key: "update",
            value: function update() {
                this.updateMarkdown();
                this.updateMarkdownStyle();
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                var tokens = this.getState().tokens;
                return tokens;
            }
        },
        {
            key: "setTokens",
            value: function setTokens(tokens) {
                this.updateState({
                    tokens: tokens
                });
            }
        },
        {
            key: "getDivisionMarkdownNodes",
            value: function getDivisionMarkdownNodes() {
                var divisionMarkdownNodes = this.getState().divisionMarkdownNodes;
                return divisionMarkdownNodes;
            }
        },
        {
            key: "setDivisionMarkdownNodes",
            value: function setDivisionMarkdownNodes(divisionMarkdownNodes) {
                this.updateState({
                    divisionMarkdownNodes: divisionMarkdownNodes
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var tokens = null, divisionMarkdownNodes = null;
                this.setState({
                    tokens: tokens,
                    divisionMarkdownNodes: divisionMarkdownNodes
                });
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_tabButtons.default, {
                    onCustomMarkdown: this.markdownCustomHandler,
                    onCustomMarkdownStyle: this.markdownStyleCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdown.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdownStyle.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                })), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_right.default, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "HTML"), /*#__PURE__*/ React.createElement(_html.default, null)), /*#__PURE__*/ React.createElement(_easylayout.HorizontalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.RowDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "CSS"), /*#__PURE__*/ React.createElement(_css.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Preview"), /*#__PURE__*/ React.createElement(_preview.default, {
                    onCustomPageUpdate: this.pageUpdateCustomHandler
                }))))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                this.setInitialState();
                var _this_constructor = this.constructor, initialMarkdown = _this_constructor.initialMarkdown, initialMarkdownStyle = _this_constructor.initialMarkdownStyle, markdownStyle = initialMarkdownStyle, markdown = initialMarkdown; ///
                this.setMarkdown(markdown);
                this.setMarkdownStyle(markdownStyle);
                this.update();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", [
    "markdownStyleElement"
]);
_define_property(View, "defaultProperties", {
    className: "view"
});
_define_property(View, "initialMarkdown", _importer.defaultContent) ///
;
_define_property(View, "initialMarkdownStyle", "width: 100%;\nposition: absolute;\nmin-height: 100%;  \npadding-top: 5rem;  \n");
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgTWFya2Rvd25MZXhlciwgTWFya2Rvd25QYXJzZXIsIE1hcmtkb3duU3R5bGVMZXhlciwgTWFya2Rvd25TdHlsZVBhcnNlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgUm93RGl2LCBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYsIEhvcml6b250YWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgSFRNTERpdiBmcm9tIFwiLi92aWV3L2Rpdi9odG1sXCI7XG5pbXBvcnQgaW1wb3J0ZXIgZnJvbSBcIi4vaW1wb3J0ZXJcIjtcbmltcG9ydCBQcmV2aWV3RGl2IGZyb20gXCIuL3ZpZXcvZGl2L3ByZXZpZXdcIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3ZpZXcvc3ViSGVhZGluZ1wiO1xuaW1wb3J0IENTU1RleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvY3NzXCI7XG5pbXBvcnQgVGFiQnV0dG9uc0RpdiBmcm9tIFwiLi92aWV3L2Rpdi90YWJCdXR0b25zXCI7XG5pbXBvcnQgTGVmdFNpemVhYmxlRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3NpemVhYmxlL2xlZnRcIjtcbmltcG9ydCBSaWdodFNpemVhYmxlRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3NpemVhYmxlL3JpZ2h0XCI7XG5pbXBvcnQgTWFya2Rvd25Db250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duXCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvbWFya2Rvd25TdHlsZVwiO1xuXG5pbXBvcnQgeyBwb3N0cHJvY2VzcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcHJvY2Vzc2luZ1wiO1xuaW1wb3J0IHsgZGVmYXVsdENvbnRlbnQgfSBmcm9tIFwiLi9pbXBvcnRlclwiO1xuaW1wb3J0IHsgTElORVNfUEVSX1BBR0UsIENPTlRFTlRTX0RFUFRILCBDSEFSQUNURVJTX1BFUl9MSU5FIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IG1hcmtkb3duTGV4ZXIgPSBNYXJrZG93bkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBtYXJrZG93blBhcnNlciA9IE1hcmtkb3duUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICBtYXJrZG93blN0eWxlTGV4ZXIgPSBNYXJrZG93blN0eWxlTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duU3R5bGVQYXJzZXIgPSBNYXJrZG93blN0eWxlUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgbWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLm1hcmtkb3duU3R5bGUoKTtcbiAgfVxuXG4gIHBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIHRoaXMuY2xlYXJQYWdlKCk7XG5cbiAgICB0aGlzLnVwZGF0ZVBhZ2UoaW5kZXgpO1xuICB9XG5cbiAgbWFya2Rvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93bigpO1xuICB9XG5cbiAga2V5VXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZU1hcmtkb3duU3R5bGUoKSB7XG4gICAgY29uc3QgeyBtYXJrZG93blN0eWxlRWxlbWVudCB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSB0aGlzLmdldE1hcmtkb3duU3R5bGUoKSxcbiAgICAgICAgICBjc3MgPSBtYXJrZG93blN0eWxlRWxlbWVudC51cGRhdGUobWFya2Rvd25TdHlsZSk7XG5cbiAgICB0aGlzLnNldENTUyhjc3MpO1xuXG4gICAgY29uc3QgbGV4ZXIgPSBtYXJrZG93blN0eWxlTGV4ZXIsIC8vL1xuICAgICAgICAgIHBhcnNlciA9IG1hcmtkb3duU3R5bGVQYXJzZXIsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBtYXJrZG93blN0eWxlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgc3RhcnRSdWxlID0gcGFyc2VyLmdldFN0YXJ0UnVsZSgpLFxuICAgICAgICAgIHN0YXJ0T2ZDb250ZW50ID0gdHJ1ZSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlLCBzdGFydE9mQ29udGVudCk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuXG4gICAgICB0aGlzLnVwZGF0ZU1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYShwYXJzZVRyZWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTWFya2Rvd24oKSB7XG4gICAgY29uc3QgbWFya2Rvd24gPSB0aGlzLmdldE1hcmtkb3duKCksXG4gICAgICAgICAgbGV4ZXIgPSBtYXJrZG93bkxleGVyLCAgLy8vXG4gICAgICAgICAgcGFyc2VyID0gIG1hcmtkb3duUGFyc2VyLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gbWFya2Rvd24sIC8vL1xuICAgICAgICAgIHN0YXJ0T2ZDb250ZW50ID0gdHJ1ZSxcbiAgICAgICAgICBzdGFydFJ1bGUgPSBwYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMsIHN0YXJ0UnVsZSwgc3RhcnRPZkNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRUb2tlbnModG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIGNoYXJhY3RlcnNQZXJMaW5lID0gQ0hBUkFDVEVSU19QRVJfTElORSxcbiAgICAgICAgICAgIGNvbnRlbnRzRGVwdGggPSBDT05URU5UU19ERVBUSCxcbiAgICAgICAgICAgIGxpbmVQZXJQYWdlID0gTElORVNfUEVSX1BBR0UsXG4gICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICB0b2tlbnMsXG4gICAgICAgICAgICAgIGltcG9ydGVyLFxuICAgICAgICAgICAgICBsaW5lUGVyUGFnZSxcbiAgICAgICAgICAgICAgY29udGVudHNEZXB0aCxcbiAgICAgICAgICAgICAgY2hhcmFjdGVyc1BlckxpbmVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBwb3N0cHJvY2VzcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHRoaXMuc2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2Rlcyk7XG5cbiAgICAgIGNvbnN0IGluZGV4ID0gMCxcbiAgICAgICAgICAgIGxlbmd0aCA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5sZW5ndGgsXG4gICAgICAgICAgICBwYXJzZVRyZWUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuXG4gICAgICB0aGlzLnVwZGF0ZVBhZ2UoaW5kZXgpO1xuXG4gICAgICB0aGlzLnVwZGF0ZVBhZ2VCdXR0b25zRGl2KGxlbmd0aCk7XG5cbiAgICAgIHRoaXMudXBkYXRlTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYShwYXJzZVRyZWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyUGFnZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFnZUJ1dHRvbnNEaXYoKTtcblxuICAgICAgdGhpcy5jbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEoKTtcblxuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gbnVsbDtcblxuICAgICAgdGhpcy5zZXREaXZpc2lvbk1hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGVzKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVQYWdlKGluZGV4KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gdGhpcy5nZXREaXZpc2lvbk1hcmtkb3duTm9kZXMoKSxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlc1tpbmRleF0sXG4gICAgICAgICAgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKSxcbiAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgdG9rZW5zXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsZW5ndGggPSBudWxsLFxuICAgICAgICAgIGh0bWwgPSBkaXZpc2lvbk1hcmtkb3duTm9kZS5hc0hUTUwoY29udGV4dCksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICB0aGlzLnVwZGF0ZVhNUChodG1sKTtcblxuICAgIHRoaXMudXBkYXRlUHJldmlld0Rpdihkb21FbGVtZW50KTtcblxuICAgIHRoaXMudXBkYXRlUGFnZUJ1dHRvbnNEaXYobGVuZ3RoLCBpbmRleCk7XG4gIH1cblxuICBjbGVhclBhZ2UoKSB7XG4gICAgdGhpcy5jbGVhclhNUCgpO1xuXG4gICAgdGhpcy5jbGVhclByZXZpZXdEaXYoKTtcbiAgfVxuXG4gIG1hcmtkb3duU3R5bGUoKSB7XG4gICAgdGhpcy5oaWRlTWFya2Rvd25Db250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2KCk7XG4gIH1cblxuICBtYXJrZG93bigpIHtcbiAgICB0aGlzLnNob3dNYXJrZG93bkNvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZU1hcmtkb3duU3R5bGVDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duKCk7XG4gICAgdGhpcy51cGRhdGVNYXJrZG93blN0eWxlKCk7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBzZXRUb2tlbnModG9rZW5zKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICB0b2tlbnNcbiAgICB9KTtcbiAgfVxuXG4gIGdldERpdmlzaW9uTWFya2Rvd25Ob2RlcygpIHtcbiAgICBjb25zdCB7IGRpdmlzaW9uTWFya2Rvd25Ob2RlcyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIHNldERpdmlzaW9uTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2Rlc1xuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHRva2VucyA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdG9rZW5zLFxuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzXG4gICAgfSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxUYWJCdXR0b25zRGl2IG9uQ3VzdG9tTWFya2Rvd249e3RoaXMubWFya2Rvd25DdXN0b21IYW5kbGVyfSBvbkN1c3RvbU1hcmtkb3duU3R5bGU9e3RoaXMubWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPE1hcmtkb3duQ29udGFpbmVyRGl2IG9uQ3VzdG9tS2V5VXA9e3RoaXMua2V5VXBDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgIDxNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IG9uQ3VzdG9tS2V5VXA9e3RoaXMua2V5VXBDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICA8L0xlZnRTaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFJpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgIEhUTUxcbiAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICA8SFRNTERpdi8+XG4gICAgICAgICAgICA8L1JpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICA8SG9yaXpvbnRhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgICAgIDxSb3dEaXY+XG4gICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgQ1NTXG4gICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxDU1NUZXh0YXJlYS8+XG4gICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICBQcmV2aWV3XG4gICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxQcmV2aWV3RGl2IG9uQ3VzdG9tUGFnZVVwZGF0ZT17dGhpcy5wYWdlVXBkYXRlQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgPC9Sb3dEaXY+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbE1hcmtkb3duLCBpbml0aWFsTWFya2Rvd25TdHlsZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBtYXJrZG93blN0eWxlID0gaW5pdGlhbE1hcmtkb3duU3R5bGUsIC8vL1xuICAgICAgICAgIG1hcmtkb3duID0gaW5pdGlhbE1hcmtkb3duOyAvLy9cblxuICAgIHRoaXMuc2V0TWFya2Rvd24obWFya2Rvd24pO1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blN0eWxlKG1hcmtkb3duU3R5bGUpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJtYXJrZG93blN0eWxlRWxlbWVudFwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcblxuICBzdGF0aWMgaW5pdGlhbE1hcmtkb3duID0gZGVmYXVsdENvbnRlbnQ7ICAvLy9cblxuICBzdGF0aWMgaW5pdGlhbE1hcmtkb3duU3R5bGUgPSBgd2lkdGg6IDEwMCU7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG5taW4taGVpZ2h0OiAxMDAlOyAgXG5wYWRkaW5nLXRvcDogNXJlbTsgIFxuYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJtYXJrZG93bkxleGVyIiwiTWFya2Rvd25MZXhlciIsImZyb21Ob3RoaW5nIiwibWFya2Rvd25QYXJzZXIiLCJNYXJrZG93blBhcnNlciIsIm1hcmtkb3duU3R5bGVMZXhlciIsIk1hcmtkb3duU3R5bGVMZXhlciIsIm1hcmtkb3duU3R5bGVQYXJzZXIiLCJNYXJrZG93blN0eWxlUGFyc2VyIiwiVmlldyIsIm1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwibWFya2Rvd25TdHlsZSIsInBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyIiwiaW5kZXgiLCJjbGVhclBhZ2UiLCJ1cGRhdGVQYWdlIiwibWFya2Rvd25DdXN0b21IYW5kbGVyIiwibWFya2Rvd24iLCJrZXlVcEN1c3RvbUhhbmRsZXIiLCJ1cGRhdGUiLCJ1cGRhdGVNYXJrZG93blN0eWxlIiwibWFya2Rvd25TdHlsZUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiZ2V0TWFya2Rvd25TdHlsZSIsImNzcyIsInNldENTUyIsImxleGVyIiwicGFyc2VyIiwiY29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwic3RhcnRSdWxlIiwiZ2V0U3RhcnRSdWxlIiwic3RhcnRPZkNvbnRlbnQiLCJub2RlIiwicGFyc2UiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInVwZGF0ZU1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhIiwidXBkYXRlTWFya2Rvd24iLCJnZXRNYXJrZG93biIsInNldFRva2VucyIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY2hhcmFjdGVyc1BlckxpbmUiLCJDSEFSQUNURVJTX1BFUl9MSU5FIiwiY29udGVudHNEZXB0aCIsIkNPTlRFTlRTX0RFUFRIIiwibGluZVBlclBhZ2UiLCJMSU5FU19QRVJfUEFHRSIsImNvbnRleHQiLCJpbXBvcnRlciIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInBvc3Rwcm9jZXNzIiwic2V0RGl2aXNpb25NYXJrZG93bk5vZGVzIiwibGVuZ3RoIiwidXBkYXRlUGFnZUJ1dHRvbnNEaXYiLCJ1cGRhdGVNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJQYWdlQnV0dG9uc0RpdiIsImNsZWFyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSIsImdldERpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImdldFRva2VucyIsImh0bWwiLCJhc0hUTUwiLCJkb21FbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsInVwZGF0ZVhNUCIsInVwZGF0ZVByZXZpZXdEaXYiLCJjbGVhclhNUCIsImNsZWFyUHJldmlld0RpdiIsImhpZGVNYXJrZG93bkNvbnRhaW5lckRpdiIsInNob3dNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2Iiwic2hvd01hcmtkb3duQ29udGFpbmVyRGl2IiwiaGlkZU1hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJjaGlsZEVsZW1lbnRzIiwiQ29sdW1uc0RpdiIsIkxlZnRTaXplYWJsZURpdiIsIlRhYkJ1dHRvbnNEaXYiLCJvbkN1c3RvbU1hcmtkb3duIiwib25DdXN0b21NYXJrZG93blN0eWxlIiwiTWFya2Rvd25Db250YWluZXJEaXYiLCJvbkN1c3RvbUtleVVwIiwiTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJSb3dzRGl2IiwiUmlnaHRTaXplYWJsZURpdiIsIlN1YkhlYWRpbmciLCJIVE1MRGl2IiwiSG9yaXpvbnRhbFNwbGl0dGVyRGl2IiwiUm93RGl2IiwiQ1NTVGV4dGFyZWEiLCJQcmV2aWV3RGl2Iiwib25DdXN0b21QYWdlVXBkYXRlIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxNYXJrZG93biIsImluaXRpYWxNYXJrZG93blN0eWxlIiwic2V0TWFya2Rvd24iLCJzZXRNYXJrZG93blN0eWxlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiZGVmYXVsdENvbnRlbnQiLCJ3aXRoU3R5bGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMlFBOzs7ZUFBQTs7O29FQXpRc0I7b0JBRUU7cUJBQytEOzBCQUNZOzJEQUUvRTtnRUFDQzs4REFDRTtpRUFDQTswREFDQztpRUFDRTsyREFDRTs0REFDQzsrREFDSTtvRUFDSzswQkFFVjt5QkFFd0M7Ozs7Ozs7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