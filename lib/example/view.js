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
var _indexOptions = /*#__PURE__*/ _interop_require_default(require("./indexOptions"));
var _tabButtons = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/right"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdown"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdownStyle"));
var _constants = require("./constants");
var _processing = require("../utilities/processing");
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
                    var divisionMarkdownNode = node, charactersPerLine = _constants.CHARACTERS_PER_LINE, contentsDepth = _constants.CONTENTS_DEPTH, linesPerPage = _constants.LINES_PER_PAGE, context = {
                        tokens: tokens,
                        importer: _importer.default,
                        indexOptions: _indexOptions.default,
                        linesPerPage: linesPerPage,
                        contentsDepth: contentsDepth,
                        nodeFromTokens: nodeFromTokens,
                        tokensFromContent: tokensFromContent,
                        charactersPerLine: charactersPerLine
                    }, // markdownNodes = postprocess(divisionMarkdownNode, context),
                    // divisionMarkdownNodes = divisionMarkdownNodesFromMarkdownNodes(markdownNodes);
                    divisionMarkdownNodes = [
                        divisionMarkdownNode
                    ];
                    this.setDivisionMarkdownNodes(divisionMarkdownNodes);
                    var parseTree = divisionMarkdownNode.asParseTree(tokens);
                    this.updateMarkdownParseTreeTextarea(parseTree);
                    var index = 0, length = divisionMarkdownNodes.length;
                    if (length > 0) {
                        this.updatePage(index);
                        this.updatePageButtonsDiv(length);
                    }
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
                }, length = null, html = divisionMarkdownNode.asHTML(context);
                this.updateXMP(html);
                this.updatePreviewDiv(divisionMarkdownNode, context);
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
function tokensFromContent(content) {
    var tokens = markdownLexer.tokenise(content);
    return tokens;
}
function nodeFromTokens(tokens) {
    var startRuleName = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    var ruleMap = markdownParser.getRuleMap(), startRule = startRuleName !== null ? ruleMap[startRuleName] : markdownParser.getStartRule(), startOfContent = true, node = markdownParser.parse(tokens, startRule, startOfContent);
    return node;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgTWFya2Rvd25MZXhlciwgTWFya2Rvd25QYXJzZXIsIE1hcmtkb3duU3R5bGVMZXhlciwgTWFya2Rvd25TdHlsZVBhcnNlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgUm93RGl2LCBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYsIEhvcml6b250YWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgSFRNTERpdiBmcm9tIFwiLi92aWV3L2Rpdi9odG1sXCI7XG5pbXBvcnQgaW1wb3J0ZXIgZnJvbSBcIi4vaW1wb3J0ZXJcIjtcbmltcG9ydCBQcmV2aWV3RGl2IGZyb20gXCIuL3ZpZXcvZGl2L3ByZXZpZXdcIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3ZpZXcvc3ViSGVhZGluZ1wiO1xuaW1wb3J0IENTU1RleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvY3NzXCI7XG5pbXBvcnQgaW5kZXhPcHRpb25zIGZyb20gXCIuL2luZGV4T3B0aW9uc1wiO1xuaW1wb3J0IFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvdGFiQnV0dG9uc1wiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9yaWdodFwiO1xuaW1wb3J0IE1hcmtkb3duQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9tYXJrZG93blwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgZGVmYXVsdENvbnRlbnQgfSBmcm9tIFwiLi9pbXBvcnRlclwiO1xuaW1wb3J0IHsgTElORVNfUEVSX1BBR0UsIENPTlRFTlRTX0RFUFRILCBDSEFSQUNURVJTX1BFUl9MSU5FIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwb3N0cHJvY2VzcywgZGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU1hcmtkb3duTm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Byb2Nlc3NpbmdcIjtcblxuY29uc3QgbWFya2Rvd25MZXhlciA9IE1hcmtkb3duTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duUGFyc2VyID0gTWFya2Rvd25QYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duU3R5bGVMZXhlciA9IE1hcmtkb3duU3R5bGVMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25TdHlsZVBhcnNlciA9IE1hcmtkb3duU3R5bGVQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBtYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMubWFya2Rvd25TdHlsZSgpO1xuICB9XG5cbiAgcGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgdGhpcy5jbGVhclBhZ2UoKTtcblxuICAgIHRoaXMudXBkYXRlUGFnZShpbmRleCk7XG4gIH1cblxuICBtYXJrZG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLm1hcmtkb3duKCk7XG4gIH1cblxuICBrZXlVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlTWFya2Rvd25TdHlsZSgpIHtcbiAgICBjb25zdCB7IG1hcmtkb3duU3R5bGVFbGVtZW50IH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbWFya2Rvd25TdHlsZSA9IHRoaXMuZ2V0TWFya2Rvd25TdHlsZSgpLFxuICAgICAgICAgIGNzcyA9IG1hcmtkb3duU3R5bGVFbGVtZW50LnVwZGF0ZShtYXJrZG93blN0eWxlKTtcblxuICAgIHRoaXMuc2V0Q1NTKGNzcyk7XG5cbiAgICBjb25zdCBsZXhlciA9IG1hcmtkb3duU3R5bGVMZXhlciwgLy8vXG4gICAgICAgICAgcGFyc2VyID0gbWFya2Rvd25TdHlsZVBhcnNlciwgLy8vXG4gICAgICAgICAgY29udGVudCA9IG1hcmtkb3duU3R5bGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBzdGFydFJ1bGUgPSBwYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgICAgc3RhcnRPZkNvbnRlbnQgPSB0cnVlLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUsIHN0YXJ0T2ZDb250ZW50KTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG5cbiAgICAgIHRoaXMudXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhKHBhcnNlVHJlZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVNYXJrZG93bigpIHtcbiAgICBjb25zdCBtYXJrZG93biA9IHRoaXMuZ2V0TWFya2Rvd24oKSxcbiAgICAgICAgICBsZXhlciA9IG1hcmtkb3duTGV4ZXIsICAvLy9cbiAgICAgICAgICBwYXJzZXIgPSAgbWFya2Rvd25QYXJzZXIsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBtYXJrZG93biwgLy8vXG4gICAgICAgICAgc3RhcnRPZkNvbnRlbnQgPSB0cnVlLFxuICAgICAgICAgIHN0YXJ0UnVsZSA9IHBhcnNlci5nZXRTdGFydFJ1bGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlLCBzdGFydE9mQ29udGVudCk7XG5cbiAgICB0aGlzLnNldFRva2Vucyh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgY2hhcmFjdGVyc1BlckxpbmUgPSBDSEFSQUNURVJTX1BFUl9MSU5FLFxuICAgICAgICAgICAgY29udGVudHNEZXB0aCA9IENPTlRFTlRTX0RFUFRILFxuICAgICAgICAgICAgbGluZXNQZXJQYWdlID0gTElORVNfUEVSX1BBR0UsXG4gICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICB0b2tlbnMsXG4gICAgICAgICAgICAgIGltcG9ydGVyLFxuICAgICAgICAgICAgICBpbmRleE9wdGlvbnMsXG4gICAgICAgICAgICAgIGxpbmVzUGVyUGFnZSxcbiAgICAgICAgICAgICAgY29udGVudHNEZXB0aCxcbiAgICAgICAgICAgICAgbm9kZUZyb21Ub2tlbnMsXG4gICAgICAgICAgICAgIHRva2Vuc0Zyb21Db250ZW50LFxuICAgICAgICAgICAgICBjaGFyYWN0ZXJzUGVyTGluZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIG1hcmtkb3duTm9kZXMgPSBwb3N0cHJvY2VzcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAvLyBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBkaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTWFya2Rvd25Ob2RlcyhtYXJrZG93bk5vZGVzKTtcbiAgICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IFtcbiAgICAgICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVcbiAgICAgICAgICAgIF07XG5cbiAgICAgIHRoaXMuc2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2Rlcyk7XG5cbiAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG5cbiAgICAgIHRoaXMudXBkYXRlTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYShwYXJzZVRyZWUpO1xuXG4gICAgICBjb25zdCBpbmRleCA9IDAsXG4gICAgICAgICAgICBsZW5ndGggPSBkaXZpc2lvbk1hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2UoaW5kZXgpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlUGFnZUJ1dHRvbnNEaXYobGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhclBhZ2UoKTtcblxuICAgICAgdGhpcy5jbGVhclBhZ2VCdXR0b25zRGl2KCk7XG5cbiAgICAgIHRoaXMuY2xlYXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhKCk7XG5cbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IG51bGw7XG5cbiAgICAgIHRoaXMuc2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2Rlcyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlUGFnZShpbmRleCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZ2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKCksXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZXNbaW5kZXhdLFxuICAgICAgICAgIHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbGVuZ3RoID0gbnVsbCxcbiAgICAgICAgICBodG1sID0gZGl2aXNpb25NYXJrZG93bk5vZGUuYXNIVE1MKGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVYTVAoaHRtbCk7XG5cbiAgICB0aGlzLnVwZGF0ZVByZXZpZXdEaXYoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVQYWdlQnV0dG9uc0RpdihsZW5ndGgsIGluZGV4KTtcbiAgfVxuXG4gIGNsZWFyUGFnZSgpIHtcbiAgICB0aGlzLmNsZWFyWE1QKCk7XG5cbiAgICB0aGlzLmNsZWFyUHJldmlld0RpdigpO1xuICB9XG5cbiAgbWFya2Rvd25TdHlsZSgpIHtcbiAgICB0aGlzLmhpZGVNYXJrZG93bkNvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIG1hcmtkb3duKCkge1xuICAgIHRoaXMuc2hvd01hcmtkb3duQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlTWFya2Rvd24oKTtcbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duU3R5bGUoKTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIHNldFRva2Vucyh0b2tlbnMpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHRva2Vuc1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKCkge1xuICAgIGNvbnN0IHsgZGl2aXNpb25NYXJrZG93bk5vZGVzIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgc2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2Rlcykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0b2tlbnMsXG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXNcbiAgICB9KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxMZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFRhYkJ1dHRvbnNEaXYgb25DdXN0b21NYXJrZG93bj17dGhpcy5tYXJrZG93bkN1c3RvbUhhbmRsZXJ9IG9uQ3VzdG9tTWFya2Rvd25TdHlsZT17dGhpcy5tYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICA8TWFya2Rvd25Db250YWluZXJEaXYgb25DdXN0b21LZXlVcD17dGhpcy5rZXlVcEN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgb25DdXN0b21LZXlVcD17dGhpcy5rZXlVcEN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgIDwvTGVmdFNpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdi8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8UmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgSFRNTFxuICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIDxIVE1MRGl2Lz5cbiAgICAgICAgICAgIDwvUmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgIDxIb3Jpem9udGFsU3BsaXR0ZXJEaXYvPlxuICAgICAgICAgICAgPFJvd0Rpdj5cbiAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICBDU1NcbiAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPENTU1RleHRhcmVhLz5cbiAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIFByZXZpZXdcbiAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPFByZXZpZXdEaXYgb25DdXN0b21QYWdlVXBkYXRlPXt0aGlzLnBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICA8L1Jvd0Rpdj5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsTWFya2Rvd24sIGluaXRpYWxNYXJrZG93blN0eWxlIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSBpbml0aWFsTWFya2Rvd25TdHlsZSwgLy8vXG4gICAgICAgICAgbWFya2Rvd24gPSBpbml0aWFsTWFya2Rvd247IC8vL1xuXG4gICAgdGhpcy5zZXRNYXJrZG93bihtYXJrZG93bik7XG5cbiAgICB0aGlzLnNldE1hcmtkb3duU3R5bGUobWFya2Rvd25TdHlsZSk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm1hcmtkb3duU3R5bGVFbGVtZW50XCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd24gPSBkZWZhdWx0Q29udGVudDsgIC8vL1xuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd25TdHlsZSA9IGB3aWR0aDogMTAwJTtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbm1pbi1oZWlnaHQ6IDEwMCU7ICBcbnBhZGRpbmctdG9wOiA1cmVtOyAgXG5gO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuXG5mdW5jdGlvbiB0b2tlbnNGcm9tQ29udGVudChjb250ZW50KSB7XG4gIGNvbnN0IHRva2VucyA9IG1hcmtkb3duTGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZnVuY3Rpb24gbm9kZUZyb21Ub2tlbnModG9rZW5zLCBzdGFydFJ1bGVOYW1lID0gbnVsbCkge1xuICBjb25zdCBydWxlTWFwID0gbWFya2Rvd25QYXJzZXIuZ2V0UnVsZU1hcCgpLFxuICAgICAgICBzdGFydFJ1bGUgPSAoc3RhcnRSdWxlTmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVNYXBbc3RhcnRSdWxlTmFtZV0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2Rvd25QYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgIHN0YXJ0T2ZDb250ZW50ID0gdHJ1ZSxcbiAgICAgICAgbm9kZSA9IG1hcmtkb3duUGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlLCBzdGFydE9mQ29udGVudCk7XG5cbiAgcmV0dXJuIG5vZGU7XG59XG4iXSwibmFtZXMiOlsibWFya2Rvd25MZXhlciIsIk1hcmtkb3duTGV4ZXIiLCJmcm9tTm90aGluZyIsIm1hcmtkb3duUGFyc2VyIiwiTWFya2Rvd25QYXJzZXIiLCJtYXJrZG93blN0eWxlTGV4ZXIiLCJNYXJrZG93blN0eWxlTGV4ZXIiLCJtYXJrZG93blN0eWxlUGFyc2VyIiwiTWFya2Rvd25TdHlsZVBhcnNlciIsIlZpZXciLCJtYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsIm1hcmtkb3duU3R5bGUiLCJwYWdlVXBkYXRlQ3VzdG9tSGFuZGxlciIsImluZGV4IiwiY2xlYXJQYWdlIiwidXBkYXRlUGFnZSIsIm1hcmtkb3duQ3VzdG9tSGFuZGxlciIsIm1hcmtkb3duIiwia2V5VXBDdXN0b21IYW5kbGVyIiwidXBkYXRlIiwidXBkYXRlTWFya2Rvd25TdHlsZSIsIm1hcmtkb3duU3R5bGVFbGVtZW50IiwicHJvcGVydGllcyIsImdldE1hcmtkb3duU3R5bGUiLCJjc3MiLCJzZXRDU1MiLCJsZXhlciIsInBhcnNlciIsImNvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsInN0YXJ0UnVsZSIsImdldFN0YXJ0UnVsZSIsInN0YXJ0T2ZDb250ZW50Iiwibm9kZSIsInBhcnNlIiwicGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJ1cGRhdGVNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEiLCJjbGVhck1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSIsInVwZGF0ZU1hcmtkb3duIiwiZ2V0TWFya2Rvd24iLCJzZXRUb2tlbnMiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImNoYXJhY3RlcnNQZXJMaW5lIiwiQ0hBUkFDVEVSU19QRVJfTElORSIsImNvbnRlbnRzRGVwdGgiLCJDT05URU5UU19ERVBUSCIsImxpbmVzUGVyUGFnZSIsIkxJTkVTX1BFUl9QQUdFIiwiY29udGV4dCIsImltcG9ydGVyIiwiaW5kZXhPcHRpb25zIiwibm9kZUZyb21Ub2tlbnMiLCJ0b2tlbnNGcm9tQ29udGVudCIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInNldERpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInVwZGF0ZU1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJsZW5ndGgiLCJ1cGRhdGVQYWdlQnV0dG9uc0RpdiIsImNsZWFyUGFnZUJ1dHRvbnNEaXYiLCJjbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJnZXREaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJnZXRUb2tlbnMiLCJodG1sIiwiYXNIVE1MIiwidXBkYXRlWE1QIiwidXBkYXRlUHJldmlld0RpdiIsImNsZWFyWE1QIiwiY2xlYXJQcmV2aWV3RGl2IiwiaGlkZU1hcmtkb3duQ29udGFpbmVyRGl2Iiwic2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJzaG93TWFya2Rvd25Db250YWluZXJEaXYiLCJoaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImNoaWxkRWxlbWVudHMiLCJDb2x1bW5zRGl2IiwiTGVmdFNpemVhYmxlRGl2IiwiVGFiQnV0dG9uc0RpdiIsIm9uQ3VzdG9tTWFya2Rvd24iLCJvbkN1c3RvbU1hcmtkb3duU3R5bGUiLCJNYXJrZG93bkNvbnRhaW5lckRpdiIsIm9uQ3VzdG9tS2V5VXAiLCJNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIlJvd3NEaXYiLCJSaWdodFNpemVhYmxlRGl2IiwiU3ViSGVhZGluZyIsIkhUTUxEaXYiLCJIb3Jpem9udGFsU3BsaXR0ZXJEaXYiLCJSb3dEaXYiLCJDU1NUZXh0YXJlYSIsIlByZXZpZXdEaXYiLCJvbkN1c3RvbVBhZ2VVcGRhdGUiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbE1hcmtkb3duIiwiaW5pdGlhbE1hcmtkb3duU3R5bGUiLCJzZXRNYXJrZG93biIsInNldE1hcmtkb3duU3R5bGUiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJkZWZhdWx0Q29udGVudCIsIndpdGhTdHlsZSIsInN0YXJ0UnVsZU5hbWUiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcVJBOzs7ZUFBQTs7O29FQW5Sc0I7b0JBRUU7cUJBQytEOzBCQUNZOzJEQUUvRTtnRUFDQzs4REFDRTtpRUFDQTswREFDQzttRUFDQztpRUFDQzsyREFDRTs0REFDQzsrREFDSTtvRUFDSzt5QkFHOEI7MEJBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRSxJQUFNQSxnQkFBZ0JDLG9CQUFhLENBQUNDLFdBQVcsSUFDekNDLGlCQUFpQkMscUJBQWMsQ0FBQ0YsV0FBVyxJQUMzQ0cscUJBQXFCQyx5QkFBa0IsQ0FBQ0osV0FBVyxJQUNuREssc0JBQXNCQywwQkFBbUIsQ0FBQ04sV0FBVztBQUUzRCxJQUFBLEFBQU1PLHFCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ0pDLGtEQUFBQSw4QkFBNkIsU0FBQ0MsT0FBT0M7WUFDbkMsTUFB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