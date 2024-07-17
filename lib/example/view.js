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
var _easylayout = require("easy-layout");
var _index = require("../index");
var _importer = /*#__PURE__*/ _interop_require_wildcard(require("./importer"));
var _indexOptions = /*#__PURE__*/ _interop_require_default(require("./indexOptions"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _css = /*#__PURE__*/ _interop_require_default(require("./view/div/container/css"));
var _html = /*#__PURE__*/ _interop_require_default(require("./view/div/container/html"));
var _left1 = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/right"));
var _preview = /*#__PURE__*/ _interop_require_default(require("./view/div/container/preview"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdown"));
var _plainText = /*#__PURE__*/ _interop_require_default(require("./view/div/container/plainText"));
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
        _define_property(_assert_this_initialized(_this), "plainTextCustomHandler", function(event, element) {
            _this.plainText();
        });
        _define_property(_assert_this_initialized(_this), "markdownCustomHandler", function(event, element) {
            _this.markdown();
        });
        _define_property(_assert_this_initialized(_this), "previewCustomHandler", function(event, element) {
            _this.preview();
        });
        _define_property(_assert_this_initialized(_this), "keyUpCustomHandler", function(event, element) {
            _this.update();
        });
        _define_property(_assert_this_initialized(_this), "htmlCustomHandler", function(event, element) {
            _this.html();
        });
        _define_property(_assert_this_initialized(_this), "cssCustomHandler", function(event, element) {
            _this.css();
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "update",
            value: function update() {
                this.updateMarkdown();
                this.updateMarkdownStyle();
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
            key: "updatePage",
            value: function updatePage(index) {
                var divisionMarkdownNodes = this.getDivisionMarkdownNodes(), divisionMarkdownNode = divisionMarkdownNodes[index], tokens = this.getTokens(), context = {
                    tokens: tokens
                }, length = null, html = divisionMarkdownNode.asHTML(context), plainText = divisionMarkdownNode.asPlainText(context);
                this.updateXMP(html);
                this.updatePreviewDiv(divisionMarkdownNode, context);
                this.updatePageButtonsDiv(length, index);
                this.updatePlainTextTextarea(plainText);
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
                    }, markdownNodes = (0, _processing.postprocess)(divisionMarkdownNode, context), divisionMarkdownNodes = (0, _processing.divisionMarkdownNodesFromMarkdownNodes)(markdownNodes);
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
                    this.clearPlainTextTextarea();
                    this.clearMarkdownParseTreeTextarea();
                    var divisionMarkdownNodes1 = null;
                    this.setDivisionMarkdownNodes(divisionMarkdownNodes1);
                }
            }
        },
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
            key: "markdownStyle",
            value: function markdownStyle() {
                this.hideMarkdownContainerDiv();
                this.showMarkdownStyleContainerDiv();
            }
        },
        {
            key: "plainText",
            value: function plainText() {
                this.hideCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.showPlainTextContainerDiv();
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
            key: "preview",
            value: function preview() {
                this.hideCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.showPreviewContainerDiv();
                this.hidePlainTextContainerDiv();
            }
        },
        {
            key: "html",
            value: function html() {
                this.hideCSSContainerDiv();
                this.showHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.hidePlainTextContainerDiv();
            }
        },
        {
            key: "css",
            value: function css() {
                this.showCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.hidePlainTextContainerDiv();
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
            key: "getDivisionMarkdownNodes",
            value: function getDivisionMarkdownNodes() {
                var divisionMarkdownNodes = this.getState().divisionMarkdownNodes;
                return divisionMarkdownNodes;
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
                return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_left1.default, {
                    onCustomMarkdown: this.markdownCustomHandler,
                    onCustomMarkdownStyle: this.markdownStyleCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdown.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdownStyle.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                })), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_right.default, {
                    onCustomCSS: this.cssCustomHandler,
                    onCustomHTML: this.htmlCustomHandler,
                    onCustomPreview: this.previewCustomHandler,
                    onCustomPlainText: this.plainTextCustomHandler
                }), /*#__PURE__*/ React.createElement(_css.default, null), /*#__PURE__*/ React.createElement(_html.default, null), /*#__PURE__*/ React.createElement(_preview.default, {
                    onCustomPageUpdate: this.pageUpdateCustomHandler
                }), /*#__PURE__*/ React.createElement(_plainText.default, null))));
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
                this.css();
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
_define_property(View, "initialMarkdownStyle", "\n\nwidth: 100%;\nheight: 199%;  \nposition: absolute;\nmin-height: 100%;  \npadding-top: 5rem;  \n\n");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5pbXBvcnQgeyBNYXJrZG93bkxleGVyLCBNYXJrZG93blBhcnNlciwgTWFya2Rvd25TdHlsZUxleGVyLCBNYXJrZG93blN0eWxlUGFyc2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5cbmltcG9ydCBpbXBvcnRlciBmcm9tIFwiLi9pbXBvcnRlclwiO1xuaW1wb3J0IGluZGV4T3B0aW9ucyBmcm9tIFwiLi9pbmRleE9wdGlvbnNcIjtcbmltcG9ydCBMZWZ0U2l6ZWFibGVEaXYgZnJvbSBcIi4vdmlldy9kaXYvc2l6ZWFibGUvbGVmdFwiO1xuaW1wb3J0IENTU0NvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvY3NzXCI7XG5pbXBvcnQgSFRNTENvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvaHRtbFwiO1xuaW1wb3J0IExlZnRUYWJCdXR0b25zRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3RhYkJ1dHRvbnMvbGVmdFwiO1xuaW1wb3J0IFJpZ2h0VGFiQnV0dG9uc0RpdiBmcm9tIFwiLi92aWV3L2Rpdi90YWJCdXR0b25zL3JpZ2h0XCI7XG5pbXBvcnQgUHJldmlld0NvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvcHJldmlld1wiO1xuaW1wb3J0IE1hcmtkb3duQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9tYXJrZG93blwiO1xuaW1wb3J0IFBsYWluVGV4dENvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvcGxhaW5UZXh0XCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvbWFya2Rvd25TdHlsZVwiO1xuXG5pbXBvcnQgeyBkZWZhdWx0Q29udGVudCB9IGZyb20gXCIuL2ltcG9ydGVyXCI7XG5pbXBvcnQgeyBMSU5FU19QRVJfUEFHRSwgQ09OVEVOVFNfREVQVEgsIENIQVJBQ1RFUlNfUEVSX0xJTkUgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHBvc3Rwcm9jZXNzLCBkaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTWFya2Rvd25Ob2RlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcHJvY2Vzc2luZ1wiO1xuXG5jb25zdCBtYXJrZG93bkxleGVyID0gTWFya2Rvd25MZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25QYXJzZXIgPSBNYXJrZG93blBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25TdHlsZUxleGVyID0gTWFya2Rvd25TdHlsZUxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBtYXJrZG93blN0eWxlUGFyc2VyID0gTWFya2Rvd25TdHlsZVBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIG1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93blN0eWxlKCk7XG4gIH1cblxuICBwYWdlVXBkYXRlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICB0aGlzLmNsZWFyUGFnZSgpO1xuXG4gICAgdGhpcy51cGRhdGVQYWdlKGluZGV4KTtcbiAgfVxuXG4gIHBsYWluVGV4dEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnBsYWluVGV4dCgpO1xuICB9XG5cbiAgbWFya2Rvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93bigpO1xuICB9XG5cbiAgcHJldmlld0N1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnByZXZpZXcoKTtcbiAgfVxuXG4gIGtleVVwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBodG1sQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuaHRtbCgpO1xuICB9XG5cbiAgY3NzQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuY3NzKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGVNYXJrZG93bigpO1xuICAgIHRoaXMudXBkYXRlTWFya2Rvd25TdHlsZSgpO1xuICB9XG5cbiAgY2xlYXJQYWdlKCkge1xuICAgIHRoaXMuY2xlYXJYTVAoKTtcbiAgICB0aGlzLmNsZWFyUHJldmlld0RpdigpO1xuICB9XG5cbiAgdXBkYXRlUGFnZShpbmRleCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZ2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKCksXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZXNbaW5kZXhdLFxuICAgICAgICAgIHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbGVuZ3RoID0gbnVsbCxcbiAgICAgICAgICBodG1sID0gZGl2aXNpb25NYXJrZG93bk5vZGUuYXNIVE1MKGNvbnRleHQpLFxuICAgICAgICAgIHBsYWluVGV4dCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmFzUGxhaW5UZXh0KGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVYTVAoaHRtbCk7XG5cbiAgICB0aGlzLnVwZGF0ZVByZXZpZXdEaXYoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVQYWdlQnV0dG9uc0RpdihsZW5ndGgsIGluZGV4KTtcblxuICAgIHRoaXMudXBkYXRlUGxhaW5UZXh0VGV4dGFyZWEocGxhaW5UZXh0KTtcbiAgfVxuXG4gIHVwZGF0ZU1hcmtkb3duKCkge1xuICAgIGNvbnN0IG1hcmtkb3duID0gdGhpcy5nZXRNYXJrZG93bigpLFxuICAgICAgICAgIGxleGVyID0gbWFya2Rvd25MZXhlciwgIC8vL1xuICAgICAgICAgIHBhcnNlciA9ICBtYXJrZG93blBhcnNlciwgLy8vXG4gICAgICAgICAgY29udGVudCA9IG1hcmtkb3duLCAvLy9cbiAgICAgICAgICBzdGFydE9mQ29udGVudCA9IHRydWUsXG4gICAgICAgICAgc3RhcnRSdWxlID0gcGFyc2VyLmdldFN0YXJ0UnVsZSgpLFxuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUsIHN0YXJ0T2ZDb250ZW50KTtcblxuICAgIHRoaXMuc2V0VG9rZW5zKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICBjaGFyYWN0ZXJzUGVyTGluZSA9IENIQVJBQ1RFUlNfUEVSX0xJTkUsXG4gICAgICAgICAgICBjb250ZW50c0RlcHRoID0gQ09OVEVOVFNfREVQVEgsXG4gICAgICAgICAgICBsaW5lc1BlclBhZ2UgPSBMSU5FU19QRVJfUEFHRSxcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgIHRva2VucyxcbiAgICAgICAgICAgICAgaW1wb3J0ZXIsXG4gICAgICAgICAgICAgIGluZGV4T3B0aW9ucyxcbiAgICAgICAgICAgICAgbGluZXNQZXJQYWdlLFxuICAgICAgICAgICAgICBjb250ZW50c0RlcHRoLFxuICAgICAgICAgICAgICBub2RlRnJvbVRva2VucyxcbiAgICAgICAgICAgICAgdG9rZW5zRnJvbUNvbnRlbnQsXG4gICAgICAgICAgICAgIGNoYXJhY3RlcnNQZXJMaW5lXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFya2Rvd25Ob2RlcyA9IHBvc3Rwcm9jZXNzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21NYXJrZG93bk5vZGVzKG1hcmtkb3duTm9kZXMpO1xuXG4gICAgICB0aGlzLnNldERpdmlzaW9uTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMpO1xuXG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuXG4gICAgICB0aGlzLnVwZGF0ZU1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEocGFyc2VUcmVlKTtcblxuICAgICAgY29uc3QgaW5kZXggPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gZGl2aXNpb25NYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlKGluZGV4KTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VCdXR0b25zRGl2KGxlbmd0aCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJQYWdlKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJQYWdlQnV0dG9uc0RpdigpO1xuXG4gICAgICB0aGlzLmNsZWFyUGxhaW5UZXh0VGV4dGFyZWEoKTtcblxuICAgICAgdGhpcy5jbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEoKTtcblxuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gbnVsbDtcblxuICAgICAgdGhpcy5zZXREaXZpc2lvbk1hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGVzKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVNYXJrZG93blN0eWxlKCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25TdHlsZUVsZW1lbnQgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtYXJrZG93blN0eWxlID0gdGhpcy5nZXRNYXJrZG93blN0eWxlKCksXG4gICAgICAgICAgY3NzID0gbWFya2Rvd25TdHlsZUVsZW1lbnQudXBkYXRlKG1hcmtkb3duU3R5bGUpO1xuXG4gICAgdGhpcy5zZXRDU1MoY3NzKTtcblxuICAgIGNvbnN0IGxleGVyID0gbWFya2Rvd25TdHlsZUxleGVyLCAvLy9cbiAgICAgICAgICBwYXJzZXIgPSBtYXJrZG93blN0eWxlUGFyc2VyLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gbWFya2Rvd25TdHlsZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIHN0YXJ0UnVsZSA9IHBhcnNlci5nZXRTdGFydFJ1bGUoKSxcbiAgICAgICAgICBzdGFydE9mQ29udGVudCA9IHRydWUsXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMsIHN0YXJ0UnVsZSwgc3RhcnRPZkNvbnRlbnQpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcblxuICAgICAgdGhpcy51cGRhdGVNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEocGFyc2VUcmVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhck1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtkb3duU3R5bGUoKSB7XG4gICAgdGhpcy5oaWRlTWFya2Rvd25Db250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2KCk7XG4gIH1cblxuICBwbGFpblRleHQoKSB7XG4gICAgdGhpcy5oaWRlQ1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlSFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dQbGFpblRleHRDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIG1hcmtkb3duKCkge1xuICAgIHRoaXMuc2hvd01hcmtkb3duQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgcHJldmlldygpIHtcbiAgICB0aGlzLmhpZGVDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93UHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgaHRtbCgpIHtcbiAgICB0aGlzLmhpZGVDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgY3NzKCkge1xuICAgIHRoaXMuc2hvd0NTU0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZUhUTUxDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQcmV2aWV3Q29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUGxhaW5UZXh0Q29udGFpbmVyRGl2KCk7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBnZXREaXZpc2lvbk1hcmtkb3duTm9kZXMoKSB7XG4gICAgY29uc3QgeyBkaXZpc2lvbk1hcmtkb3duTm9kZXMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZXM7XG4gIH1cblxuICBzZXRUb2tlbnModG9rZW5zKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICB0b2tlbnNcbiAgICB9KTtcbiAgfVxuXG4gIHNldERpdmlzaW9uTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2Rlc1xuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHRva2VucyA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdG9rZW5zLFxuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzXG4gICAgfSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxMZWZ0VGFiQnV0dG9uc0RpdiBvbkN1c3RvbU1hcmtkb3duPXt0aGlzLm1hcmtkb3duQ3VzdG9tSGFuZGxlcn0gb25DdXN0b21NYXJrZG93blN0eWxlPXt0aGlzLm1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgIDxNYXJrZG93bkNvbnRhaW5lckRpdiBvbkN1c3RvbUtleVVwPXt0aGlzLmtleVVwQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICA8TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiBvbkN1c3RvbUtleVVwPXt0aGlzLmtleVVwQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxSaWdodFRhYkJ1dHRvbnNEaXYgb25DdXN0b21DU1M9e3RoaXMuY3NzQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21IVE1MPXt0aGlzLmh0bWxDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVByZXZpZXc9e3RoaXMucHJldmlld0N1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tUGxhaW5UZXh0PXt0aGlzLnBsYWluVGV4dEN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENTU0NvbnRhaW5lckRpdi8+XG4gICAgICAgICAgICA8SFRNTENvbnRhaW5lckRpdi8+XG4gICAgICAgICAgICA8UHJldmlld0NvbnRhaW5lckRpdiBvbkN1c3RvbVBhZ2VVcGRhdGU9e3RoaXMucGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8UGxhaW5UZXh0Q29udGFpbmVyRGl2Lz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsTWFya2Rvd24sIGluaXRpYWxNYXJrZG93blN0eWxlIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSBpbml0aWFsTWFya2Rvd25TdHlsZSwgLy8vXG4gICAgICAgICAgbWFya2Rvd24gPSBpbml0aWFsTWFya2Rvd247IC8vL1xuXG4gICAgdGhpcy5zZXRNYXJrZG93bihtYXJrZG93bik7XG5cbiAgICB0aGlzLnNldE1hcmtkb3duU3R5bGUobWFya2Rvd25TdHlsZSk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgdGhpcy5jc3MoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJtYXJrZG93blN0eWxlRWxlbWVudFwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcblxuICBzdGF0aWMgaW5pdGlhbE1hcmtkb3duID0gZGVmYXVsdENvbnRlbnQ7ICAvLy9cblxuICBzdGF0aWMgaW5pdGlhbE1hcmtkb3duU3R5bGUgPSBgXG5cbndpZHRoOiAxMDAlO1xuaGVpZ2h0OiAxOTklOyAgXG5wb3NpdGlvbjogYWJzb2x1dGU7XG5taW4taGVpZ2h0OiAxMDAlOyAgXG5wYWRkaW5nLXRvcDogNXJlbTsgIFxuXG5gO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuXG5mdW5jdGlvbiB0b2tlbnNGcm9tQ29udGVudChjb250ZW50KSB7XG4gIGNvbnN0IHRva2VucyA9IG1hcmtkb3duTGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZnVuY3Rpb24gbm9kZUZyb21Ub2tlbnModG9rZW5zLCBzdGFydFJ1bGVOYW1lID0gbnVsbCkge1xuICBjb25zdCBydWxlTWFwID0gbWFya2Rvd25QYXJzZXIuZ2V0UnVsZU1hcCgpLFxuICAgICAgICBzdGFydFJ1bGUgPSAoc3RhcnRSdWxlTmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVNYXBbc3RhcnRSdWxlTmFtZV0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2Rvd25QYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgIHN0YXJ0T2ZDb250ZW50ID0gdHJ1ZSxcbiAgICAgICAgbm9kZSA9IG1hcmtkb3duUGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlLCBzdGFydE9mQ29udGVudCk7XG5cbiAgcmV0dXJuIG5vZGU7XG59XG4iXSwibmFtZXMiOlsibWFya2Rvd25MZXhlciIsIk1hcmtkb3duTGV4ZXIiLCJmcm9tTm90aGluZyIsIm1hcmtkb3duUGFyc2VyIiwiTWFya2Rvd25QYXJzZXIiLCJtYXJrZG93blN0eWxlTGV4ZXIiLCJNYXJrZG93blN0eWxlTGV4ZXIiLCJtYXJrZG93blN0eWxlUGFyc2VyIiwiTWFya2Rvd25TdHlsZVBhcnNlciIsIlZpZXciLCJtYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsIm1hcmtkb3duU3R5bGUiLCJwYWdlVXBkYXRlQ3VzdG9tSGFuZGxlciIsImluZGV4IiwiY2xlYXJQYWdlIiwidXBkYXRlUGFnZSIsInBsYWluVGV4dEN1c3RvbUhhbmRsZXIiLCJwbGFpblRleHQiLCJtYXJrZG93bkN1c3RvbUhhbmRsZXIiLCJtYXJrZG93biIsInByZXZpZXdDdXN0b21IYW5kbGVyIiwicHJldmlldyIsImtleVVwQ3VzdG9tSGFuZGxlciIsInVwZGF0ZSIsImh0bWxDdXN0b21IYW5kbGVyIiwiaHRtbCIsImNzc0N1c3RvbUhhbmRsZXIiLCJjc3MiLCJ1cGRhdGVNYXJrZG93biIsInVwZGF0ZU1hcmtkb3duU3R5bGUiLCJjbGVhclhNUCIsImNsZWFyUHJldmlld0RpdiIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImdldERpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwiY29udGV4dCIsImxlbmd0aCIsImFzSFRNTCIsImFzUGxhaW5UZXh0IiwidXBkYXRlWE1QIiwidXBkYXRlUHJldmlld0RpdiIsInVwZGF0ZVBhZ2VCdXR0b25zRGl2IiwidXBkYXRlUGxhaW5UZXh0VGV4dGFyZWEiLCJnZXRNYXJrZG93biIsImxleGVyIiwicGFyc2VyIiwiY29udGVudCIsInN0YXJ0T2ZDb250ZW50Iiwic3RhcnRSdWxlIiwiZ2V0U3RhcnRSdWxlIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJzZXRUb2tlbnMiLCJjaGFyYWN0ZXJzUGVyTGluZSIsIkNIQVJBQ1RFUlNfUEVSX0xJTkUiLCJjb250ZW50c0RlcHRoIiwiQ09OVEVOVFNfREVQVEgiLCJsaW5lc1BlclBhZ2UiLCJMSU5FU19QRVJfUEFHRSIsImltcG9ydGVyIiwiaW5kZXhPcHRpb25zIiwibm9kZUZyb21Ub2tlbnMiLCJ0b2tlbnNGcm9tQ29udGVudCIsIm1hcmtkb3duTm9kZXMiLCJwb3N0cHJvY2VzcyIsImRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21NYXJrZG93bk5vZGVzIiwic2V0RGl2aXNpb25NYXJrZG93bk5vZGVzIiwicGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJ1cGRhdGVNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJQYWdlQnV0dG9uc0RpdiIsImNsZWFyUGxhaW5UZXh0VGV4dGFyZWEiLCJjbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJtYXJrZG93blN0eWxlRWxlbWVudCIsInByb3BlcnRpZXMiLCJnZXRNYXJrZG93blN0eWxlIiwic2V0Q1NTIiwidXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEiLCJoaWRlTWFya2Rvd25Db250YWluZXJEaXYiLCJzaG93TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsImhpZGVDU1NDb250YWluZXJEaXYiLCJoaWRlSFRNTENvbnRhaW5lckRpdiIsImhpZGVQcmV2aWV3Q29udGFpbmVyRGl2Iiwic2hvd1BsYWluVGV4dENvbnRhaW5lckRpdiIsInNob3dNYXJrZG93bkNvbnRhaW5lckRpdiIsImhpZGVNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2Iiwic2hvd1ByZXZpZXdDb250YWluZXJEaXYiLCJoaWRlUGxhaW5UZXh0Q29udGFpbmVyRGl2Iiwic2hvd0hUTUxDb250YWluZXJEaXYiLCJzaG93Q1NTQ29udGFpbmVyRGl2IiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJMZWZ0U2l6ZWFibGVEaXYiLCJMZWZ0VGFiQnV0dG9uc0RpdiIsIm9uQ3VzdG9tTWFya2Rvd24iLCJvbkN1c3RvbU1hcmtkb3duU3R5bGUiLCJNYXJrZG93bkNvbnRhaW5lckRpdiIsIm9uQ3VzdG9tS2V5VXAiLCJNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIlJvd3NEaXYiLCJSaWdodFRhYkJ1dHRvbnNEaXYiLCJvbkN1c3RvbUNTUyIsIm9uQ3VzdG9tSFRNTCIsIm9uQ3VzdG9tUHJldmlldyIsIm9uQ3VzdG9tUGxhaW5UZXh0IiwiQ1NTQ29udGFpbmVyRGl2IiwiSFRNTENvbnRhaW5lckRpdiIsIlByZXZpZXdDb250YWluZXJEaXYiLCJvbkN1c3RvbVBhZ2VVcGRhdGUiLCJQbGFpblRleHRDb250YWluZXJEaXYiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbE1hcmtkb3duIiwiaW5pdGlhbE1hcmtkb3duU3R5bGUiLCJzZXRNYXJrZG93biIsInNldE1hcmtkb3duU3R5bGUiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJkZWZhdWx0Q29udGVudCIsIndpdGhTdHlsZSIsInN0YXJ0UnVsZU5hbWUiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOFRBOzs7ZUFBQTs7O29FQTVUc0I7b0JBRUU7MEJBQzRDO3FCQUNtQjtnRUFFbEU7bUVBQ0k7MkRBQ0c7MERBQ0E7MkRBQ0M7NERBQ0M7NERBQ0M7OERBQ0M7K0RBQ0M7Z0VBQ0M7b0VBQ0k7eUJBRzhCOzBCQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEUsSUFBTUEsZ0JBQWdCQyxvQkFBYSxDQUFDQyxXQUFXLElBQ3pDQyxpQkFBaUJDLHFCQUFjLENBQUNGLFdBQVcsSUFDM0NHLHFCQUFxQkMseUJBQWtCLENBQUNKLFdBQVcsSUFDbkRLLHNCQUFzQkMsMEJBQW1CLENBQUNOLFdBQVc7QUFFM0QsSUFBQSxBQUFNTyxxQkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztRQUNKQyxrREFBQUEsOEJBQTZCLFNBQUNDLE9BQU9DO1lBQ25DLE1BQUtDLGFBQWE7UUFDcEI7UUFFQUMsa0RBQUFBLDJCQUEwQixTQUFDSCxPQUFPQyxTQUFTRztZQUN6QyxNQUFLQyxTQUFTO1lBRWQsTUFBS0MsVUFBVSxDQUFDRjtRQUNsQjtRQUVBRyxrREFBQUEsMEJBQXlCLFNBQUNQLE9BQU9DO1lBQy9CLE1BQUtPLFNBQVM7UUFDaEI7UUFFQUMsa0RBQUFBLHlCQUF3QixTQUFDVCxPQUFPQztZQUM5QixNQUFLUyxRQUFRO1FBQ2Y7UUFFQUMsa0RBQUFBLHdCQUF1QixTQUFDWCxPQUFPQztZQUM3QixNQUFLVyxPQUFPO1FBQ2Q7UUFFQUMs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