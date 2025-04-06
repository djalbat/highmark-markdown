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
var _occamdom = require("occam-dom");
var _easylayout = require("easy-layout");
var _index = require("../index");
var _queries = /*#__PURE__*/ _interop_require_default(require("../queries"));
var _importer = /*#__PURE__*/ _interop_require_wildcard(require("./importer"));
var _indexOptions = /*#__PURE__*/ _interop_require_default(require("./indexOptions"));
var _pageButtons = /*#__PURE__*/ _interop_require_default(require("./view/div/pageButtons"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _css = /*#__PURE__*/ _interop_require_default(require("./view/div/container/css"));
var _html = /*#__PURE__*/ _interop_require_default(require("./view/div/container/html"));
var _left1 = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/right"));
var _classFromOuterNode = /*#__PURE__*/ _interop_require_default(require("../classFromOuterNode"));
var _preview = /*#__PURE__*/ _interop_require_default(require("./view/div/container/preview"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdown"));
var _plainText = /*#__PURE__*/ _interop_require_default(require("./view/div/container/plainText"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdownStyle"));
var _inner = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree/markdown/inner"));
var _query = require("../utilities/query");
var _constants = require("./constants");
var _processing = require("../utilities/processing");
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
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
var topmostNodeFromOuterNodes = _occamdom.nodeUtilities.topmostNodeFromOuterNodes;
var markdownLexer = _index.MarkdownLexer.fromNothing(), markdownParser = _index.MarkdownParser.fromNothing(), markdownStyleLexer = _index.MarkdownStyleLexer.fromNothing(), markdownStyleParser = _index.MarkdownStyleParser.fromNothing();
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "markdownStyleCustomHandler", function(event, element) {
            _this.markdownStyle();
        }), _define_property(_this, "pageUpdateCustomHandler", function(event, element, index) {
            _this.clearPage();
            _this.updatePage(index);
        }), _define_property(_this, "plainTextCustomHandler", function(event, element) {
            _this.plainText();
        }), _define_property(_this, "markdownCustomHandler", function(event, element) {
            _this.markdown();
        }), _define_property(_this, "previewCustomHandler", function(event, element) {
            _this.preview();
        }), _define_property(_this, "keyUpCustomHandler", function(event, element) {
            _this.update();
        }), _define_property(_this, "htmlCustomHandler", function(event, element) {
            _this.html();
        }), _define_property(_this, "cssCustomHandler", function(event, element) {
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
                this.clearInnerMarkdownParseTreeTextarea();
            }
        },
        {
            key: "updatePage",
            value: function updatePage(index) {
                var divisionMarkdownNodes = this.getDivisionMarkdownNodes(), divisionMarkdownNode = divisionMarkdownNodes[index], tokens = this.getTokens(), context = {
                    tokens: tokens
                }, length = null;
                var node = divisionMarkdownNode, nodes = (0, _query.nodesFromNodeAndQueries)(node, _queries.default), topmostHTMLNode = topmostNodeFromOuterNodes(_classFromOuterNode.default, nodes), parseTree = topmostHTMLNode.asParseTree(), html = topmostHTMLNode.asHTML(context), plainText = divisionMarkdownNode.asPlainText(context), innerMarkdownParseTree = parseTree; ///
                this.updateXMP(html);
                this.updatePreviewDiv(divisionMarkdownNode, context);
                this.updatePageButtonsDiv(length, index);
                this.updatePlainTextTextarea(plainText);
                this.updateInnerMarkdownParseTreeTextarea(innerMarkdownParseTree);
            }
        },
        {
            key: "updateMarkdown",
            value: function updateMarkdown() {
                var markdown = this.getMarkdown(), lexer = markdownLexer, parser = markdownParser, content = markdown, startRule = parser.getStartRule(), tokens = lexer.tokenise(content), node = parser.parse(tokens, startRule);
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
                    var parseTree = divisionMarkdownNode.asParseTree(tokens), outerMarkdownParseTree = parseTree; ///
                    this.updateOuterMarkdownParseTreeTextarea(outerMarkdownParseTree);
                    var index = 0, length = divisionMarkdownNodes.length;
                    if (length > 0) {
                        this.updatePage(index);
                        this.updatePageButtonsDiv(length);
                    }
                } else {
                    this.clearPage();
                    this.clearPageButtonsDiv();
                    this.clearPlainTextTextarea();
                    this.clearOuterMarkdownParseTreeTextarea();
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
                var lexer = markdownStyleLexer, parser = markdownStyleParser, content = markdownStyle, tokens = lexer.tokenise(content), startRule = parser.getStartRule(), node = parser.parse(tokens, startRule);
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
                }), /*#__PURE__*/ React.createElement(_pageButtons.default, {
                    onCustomPageUpdate: this.pageUpdateCustomHandler
                }), /*#__PURE__*/ React.createElement(_css.default, null), /*#__PURE__*/ React.createElement(_html.default, null), /*#__PURE__*/ React.createElement(_preview.default, null), /*#__PURE__*/ React.createElement(_plainText.default, null), /*#__PURE__*/ React.createElement(_inner.default, null))));
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
_define_property(View, "initialMarkdown", _importer.defaultContent) ///
;
_define_property(View, "initialMarkdownStyle", "width: 100%;\nheight: 199%;  \nposition: absolute;\nmin-height: 100%;  \npadding-top: 5rem;  \n");
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", [
    "markdownStyleElement"
]);
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function tokensFromContent(content) {
    var tokens = markdownLexer.tokenise(content);
    return tokens;
}
function nodeFromTokens(tokens) {
    var startRuleName = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    var ruleMap = markdownParser.getRuleMap(), startRule = startRuleName !== null ? ruleMap[startRuleName] : markdownParser.getStartRule(), node = markdownParser.parse(tokens, startRule);
    return node;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgbm9kZVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1kb21cIjtcbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuaW1wb3J0IHsgTWFya2Rvd25MZXhlciwgTWFya2Rvd25QYXJzZXIsIE1hcmtkb3duU3R5bGVMZXhlciwgTWFya2Rvd25TdHlsZVBhcnNlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuXG5pbXBvcnQgcXVlcmllcyBmcm9tIFwiLi4vcXVlcmllc1wiO1xuaW1wb3J0IGltcG9ydGVyIGZyb20gXCIuL2ltcG9ydGVyXCI7XG5pbXBvcnQgaW5kZXhPcHRpb25zIGZyb20gXCIuL2luZGV4T3B0aW9uc1wiO1xuaW1wb3J0IFBhZ2VCdXR0b25zRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3BhZ2VCdXR0b25zXCI7XG5pbXBvcnQgTGVmdFNpemVhYmxlRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3NpemVhYmxlL2xlZnRcIjtcbmltcG9ydCBDU1NDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL2Nzc1wiO1xuaW1wb3J0IEhUTUxDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL2h0bWxcIjtcbmltcG9ydCBMZWZ0VGFiQnV0dG9uc0RpdiBmcm9tIFwiLi92aWV3L2Rpdi90YWJCdXR0b25zL2xlZnRcIjtcbmltcG9ydCBSaWdodFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvdGFiQnV0dG9ucy9yaWdodFwiO1xuaW1wb3J0IENsYXNzRnJvbU91dGVyTm9kZSBmcm9tIFwiLi4vY2xhc3NGcm9tT3V0ZXJOb2RlXCI7XG5pbXBvcnQgUHJldmlld0NvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvcHJldmlld1wiO1xuaW1wb3J0IE1hcmtkb3duQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9tYXJrZG93blwiO1xuaW1wb3J0IFBsYWluVGV4dENvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvcGxhaW5UZXh0XCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvbWFya2Rvd25TdHlsZVwiO1xuaW1wb3J0IElubmVyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL3BhcnNlVHJlZS9tYXJrZG93bi9pbm5lclwiO1xuXG5pbXBvcnQgeyBkZWZhdWx0Q29udGVudCB9IGZyb20gXCIuL2ltcG9ydGVyXCI7XG5pbXBvcnQgeyBub2Rlc0Zyb21Ob2RlQW5kUXVlcmllcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IExJTkVTX1BFUl9QQUdFLCBDT05URU5UU19ERVBUSCwgQ0hBUkFDVEVSU19QRVJfTElORSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcG9zdHByb2Nlc3MsIGRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21NYXJrZG93bk5vZGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wcm9jZXNzaW5nXCI7XG5cbmNvbnN0IHsgdG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2RlcyB9ID0gbm9kZVV0aWxpdGllcztcblxuY29uc3QgbWFya2Rvd25MZXhlciA9IE1hcmtkb3duTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duUGFyc2VyID0gTWFya2Rvd25QYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duU3R5bGVMZXhlciA9IE1hcmtkb3duU3R5bGVMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25TdHlsZVBhcnNlciA9IE1hcmtkb3duU3R5bGVQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBtYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMubWFya2Rvd25TdHlsZSgpO1xuICB9XG5cbiAgcGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgdGhpcy5jbGVhclBhZ2UoKTtcblxuICAgIHRoaXMudXBkYXRlUGFnZShpbmRleCk7XG4gIH1cblxuICBwbGFpblRleHRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5wbGFpblRleHQoKTtcbiAgfVxuXG4gIG1hcmtkb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMubWFya2Rvd24oKTtcbiAgfVxuXG4gIHByZXZpZXdDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5wcmV2aWV3KCk7XG4gIH1cblxuICBrZXlVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgaHRtbEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmh0bWwoKTtcbiAgfVxuXG4gIGNzc0N1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmNzcygpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlTWFya2Rvd24oKTtcbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duU3R5bGUoKTtcbiAgfVxuXG4gIGNsZWFyUGFnZSgpIHtcbiAgICB0aGlzLmNsZWFyWE1QKCk7XG5cbiAgICB0aGlzLmNsZWFyUHJldmlld0RpdigpO1xuXG4gICAgdGhpcy5jbGVhcklubmVyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSgpO1xuICB9XG5cbiAgdXBkYXRlUGFnZShpbmRleCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZ2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKCksXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZXNbaW5kZXhdLFxuICAgICAgICAgIHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbGVuZ3RoID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIG5vZGVzID0gbm9kZXNGcm9tTm9kZUFuZFF1ZXJpZXMobm9kZSwgcXVlcmllcyksXG4gICAgICAgICAgdG9wbW9zdEhUTUxOb2RlID0gdG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2RlcyhDbGFzc0Zyb21PdXRlck5vZGUsIG5vZGVzKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSB0b3Btb3N0SFRNTE5vZGUuYXNQYXJzZVRyZWUoKSxcbiAgICAgICAgICBodG1sID0gdG9wbW9zdEhUTUxOb2RlLmFzSFRNTChjb250ZXh0KSxcbiAgICAgICAgICBwbGFpblRleHQgPSBkaXZpc2lvbk1hcmtkb3duTm9kZS5hc1BsYWluVGV4dChjb250ZXh0KSxcbiAgICAgICAgICBpbm5lck1hcmtkb3duUGFyc2VUcmVlID0gcGFyc2VUcmVlOyAvLy9cblxuICAgIHRoaXMudXBkYXRlWE1QKGh0bWwpO1xuXG4gICAgdGhpcy51cGRhdGVQcmV2aWV3RGl2KGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHRoaXMudXBkYXRlUGFnZUJ1dHRvbnNEaXYobGVuZ3RoLCBpbmRleCk7XG5cbiAgICB0aGlzLnVwZGF0ZVBsYWluVGV4dFRleHRhcmVhKHBsYWluVGV4dCk7XG5cbiAgICB0aGlzLnVwZGF0ZUlubmVyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYShpbm5lck1hcmtkb3duUGFyc2VUcmVlKTtcbiAgfVxuXG4gIHVwZGF0ZU1hcmtkb3duKCkge1xuICAgIGNvbnN0IG1hcmtkb3duID0gdGhpcy5nZXRNYXJrZG93bigpLFxuICAgICAgICAgIGxleGVyID0gbWFya2Rvd25MZXhlciwgIC8vL1xuICAgICAgICAgIHBhcnNlciA9ICBtYXJrZG93blBhcnNlciwgLy8vXG4gICAgICAgICAgY29udGVudCA9IG1hcmtkb3duLCAvLy9cbiAgICAgICAgICBzdGFydFJ1bGUgPSBwYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMsIHN0YXJ0UnVsZSk7XG5cbiAgICB0aGlzLnNldFRva2Vucyh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgY2hhcmFjdGVyc1BlckxpbmUgPSBDSEFSQUNURVJTX1BFUl9MSU5FLFxuICAgICAgICAgICAgY29udGVudHNEZXB0aCA9IENPTlRFTlRTX0RFUFRILFxuICAgICAgICAgICAgbGluZXNQZXJQYWdlID0gTElORVNfUEVSX1BBR0UsXG4gICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICB0b2tlbnMsXG4gICAgICAgICAgICAgIGltcG9ydGVyLFxuICAgICAgICAgICAgICBpbmRleE9wdGlvbnMsXG4gICAgICAgICAgICAgIGxpbmVzUGVyUGFnZSxcbiAgICAgICAgICAgICAgY29udGVudHNEZXB0aCxcbiAgICAgICAgICAgICAgbm9kZUZyb21Ub2tlbnMsXG4gICAgICAgICAgICAgIHRva2Vuc0Zyb21Db250ZW50LFxuICAgICAgICAgICAgICBjaGFyYWN0ZXJzUGVyTGluZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1hcmtkb3duTm9kZXMgPSBwb3N0cHJvY2VzcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBkaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTWFya2Rvd25Ob2RlcyhtYXJrZG93bk5vZGVzKTtcblxuICAgICAgdGhpcy5zZXREaXZpc2lvbk1hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGVzKTtcblxuICAgICAgY29uc3QgcGFyc2VUcmVlID0gZGl2aXNpb25NYXJrZG93bk5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSxcbiAgICAgICAgICAgIG91dGVyTWFya2Rvd25QYXJzZVRyZWUgPSBwYXJzZVRyZWU7IC8vL1xuXG4gICAgICB0aGlzLnVwZGF0ZU91dGVyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYShvdXRlck1hcmtkb3duUGFyc2VUcmVlKTtcblxuICAgICAgY29uc3QgaW5kZXggPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gZGl2aXNpb25NYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlKGluZGV4KTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VCdXR0b25zRGl2KGxlbmd0aCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJQYWdlKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJQYWdlQnV0dG9uc0RpdigpO1xuXG4gICAgICB0aGlzLmNsZWFyUGxhaW5UZXh0VGV4dGFyZWEoKTtcblxuICAgICAgdGhpcy5jbGVhck91dGVyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSgpO1xuXG4gICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBudWxsO1xuXG4gICAgICB0aGlzLnNldERpdmlzaW9uTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZU1hcmtkb3duU3R5bGUoKSB7XG4gICAgY29uc3QgeyBtYXJrZG93blN0eWxlRWxlbWVudCB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSB0aGlzLmdldE1hcmtkb3duU3R5bGUoKSxcbiAgICAgICAgICBjc3MgPSBtYXJrZG93blN0eWxlRWxlbWVudC51cGRhdGUobWFya2Rvd25TdHlsZSk7XG5cbiAgICB0aGlzLnNldENTUyhjc3MpO1xuXG4gICAgY29uc3QgbGV4ZXIgPSBtYXJrZG93blN0eWxlTGV4ZXIsIC8vL1xuICAgICAgICAgIHBhcnNlciA9IG1hcmtkb3duU3R5bGVQYXJzZXIsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBtYXJrZG93blN0eWxlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgc3RhcnRSdWxlID0gcGFyc2VyLmdldFN0YXJ0UnVsZSgpLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcblxuICAgICAgdGhpcy51cGRhdGVNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEocGFyc2VUcmVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhck1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtkb3duU3R5bGUoKSB7XG4gICAgdGhpcy5oaWRlTWFya2Rvd25Db250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2KCk7XG4gIH1cblxuICBwbGFpblRleHQoKSB7XG4gICAgdGhpcy5oaWRlQ1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlSFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dQbGFpblRleHRDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIG1hcmtkb3duKCkge1xuICAgIHRoaXMuc2hvd01hcmtkb3duQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgcHJldmlldygpIHtcbiAgICB0aGlzLmhpZGVDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93UHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgaHRtbCgpIHtcbiAgICB0aGlzLmhpZGVDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgY3NzKCkge1xuICAgIHRoaXMuc2hvd0NTU0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZUhUTUxDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQcmV2aWV3Q29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUGxhaW5UZXh0Q29udGFpbmVyRGl2KCk7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBnZXREaXZpc2lvbk1hcmtkb3duTm9kZXMoKSB7XG4gICAgY29uc3QgeyBkaXZpc2lvbk1hcmtkb3duTm9kZXMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZXM7XG4gIH1cblxuICBzZXRUb2tlbnModG9rZW5zKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICB0b2tlbnNcbiAgICB9KTtcbiAgfVxuXG4gIHNldERpdmlzaW9uTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2Rlc1xuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHRva2VucyA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdG9rZW5zLFxuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzXG4gICAgfSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxMZWZ0VGFiQnV0dG9uc0RpdiBvbkN1c3RvbU1hcmtkb3duPXt0aGlzLm1hcmtkb3duQ3VzdG9tSGFuZGxlcn0gb25DdXN0b21NYXJrZG93blN0eWxlPXt0aGlzLm1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgIDxNYXJrZG93bkNvbnRhaW5lckRpdiBvbkN1c3RvbUtleVVwPXt0aGlzLmtleVVwQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICA8TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiBvbkN1c3RvbUtleVVwPXt0aGlzLmtleVVwQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxSaWdodFRhYkJ1dHRvbnNEaXYgb25DdXN0b21DU1M9e3RoaXMuY3NzQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21IVE1MPXt0aGlzLmh0bWxDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVByZXZpZXc9e3RoaXMucHJldmlld0N1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tUGxhaW5UZXh0PXt0aGlzLnBsYWluVGV4dEN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFBhZ2VCdXR0b25zRGl2IG9uQ3VzdG9tUGFnZVVwZGF0ZT17dGhpcy5wYWdlVXBkYXRlQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxDU1NDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPEhUTUxDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPFByZXZpZXdDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPFBsYWluVGV4dENvbnRhaW5lckRpdi8+XG4gICAgICAgICAgICA8SW5uZXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsTWFya2Rvd24sIGluaXRpYWxNYXJrZG93blN0eWxlIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSBpbml0aWFsTWFya2Rvd25TdHlsZSwgLy8vXG4gICAgICAgICAgbWFya2Rvd24gPSBpbml0aWFsTWFya2Rvd247IC8vL1xuXG4gICAgdGhpcy5zZXRNYXJrZG93bihtYXJrZG93bik7XG5cbiAgICB0aGlzLnNldE1hcmtkb3duU3R5bGUobWFya2Rvd25TdHlsZSk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgdGhpcy5jc3MoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd24gPSBkZWZhdWx0Q29udGVudDsgIC8vL1xuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd25TdHlsZSA9IGB3aWR0aDogMTAwJTtcbmhlaWdodDogMTk5JTsgIFxucG9zaXRpb246IGFic29sdXRlO1xubWluLWhlaWdodDogMTAwJTsgIFxucGFkZGluZy10b3A6IDVyZW07ICBcbmA7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm1hcmtkb3duU3R5bGVFbGVtZW50XCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuXG5mdW5jdGlvbiB0b2tlbnNGcm9tQ29udGVudChjb250ZW50KSB7XG4gIGNvbnN0IHRva2VucyA9IG1hcmtkb3duTGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZnVuY3Rpb24gbm9kZUZyb21Ub2tlbnModG9rZW5zLCBzdGFydFJ1bGVOYW1lID0gbnVsbCkge1xuICBjb25zdCBydWxlTWFwID0gbWFya2Rvd25QYXJzZXIuZ2V0UnVsZU1hcCgpLFxuICAgICAgICBzdGFydFJ1bGUgPSAoc3RhcnRSdWxlTmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVNYXBbc3RhcnRSdWxlTmFtZV0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2Rvd25QYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgIG5vZGUgPSBtYXJrZG93blBhcnNlci5wYXJzZSh0b2tlbnMsIHN0YXJ0UnVsZSk7XG5cbiAgcmV0dXJuIG5vZGU7XG59XG4iXSwibmFtZXMiOlsidG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2RlcyIsIm5vZGVVdGlsaXRpZXMiLCJtYXJrZG93bkxleGVyIiwiTWFya2Rvd25MZXhlciIsImZyb21Ob3RoaW5nIiwibWFya2Rvd25QYXJzZXIiLCJNYXJrZG93blBhcnNlciIsIm1hcmtkb3duU3R5bGVMZXhlciIsIk1hcmtkb3duU3R5bGVMZXhlciIsIm1hcmtkb3duU3R5bGVQYXJzZXIiLCJNYXJrZG93blN0eWxlUGFyc2VyIiwiVmlldyIsIm1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwibWFya2Rvd25TdHlsZSIsInBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyIiwiaW5kZXgiLCJjbGVhclBhZ2UiLCJ1cGRhdGVQYWdlIiwicGxhaW5UZXh0Q3VzdG9tSGFuZGxlciIsInBsYWluVGV4dCIsIm1hcmtkb3duQ3VzdG9tSGFuZGxlciIsIm1hcmtkb3duIiwicHJldmlld0N1c3RvbUhhbmRsZXIiLCJwcmV2aWV3Iiwia2V5VXBDdXN0b21IYW5kbGVyIiwidXBkYXRlIiwiaHRtbEN1c3RvbUhhbmRsZXIiLCJodG1sIiwiY3NzQ3VzdG9tSGFuZGxlciIsImNzcyIsInVwZGF0ZU1hcmtkb3duIiwidXBkYXRlTWFya2Rvd25TdHlsZSIsImNsZWFyWE1QIiwiY2xlYXJQcmV2aWV3RGl2IiwiY2xlYXJJbm5lck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJnZXREaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsInRva2VucyIsImdldFRva2VucyIsImNvbnRleHQiLCJsZW5ndGgiLCJub2RlIiwibm9kZXMiLCJub2Rlc0Zyb21Ob2RlQW5kUXVlcmllcyIsInF1ZXJpZXMiLCJ0b3Btb3N0SFRNTE5vZGUiLCJDbGFzc0Zyb21PdXRlck5vZGUiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsImFzSFRNTCIsImFzUGxhaW5UZXh0IiwiaW5uZXJNYXJrZG93blBhcnNlVHJlZSIsInVwZGF0ZVhNUCIsInVwZGF0ZVByZXZpZXdEaXYiLCJ1cGRhdGVQYWdlQnV0dG9uc0RpdiIsInVwZGF0ZVBsYWluVGV4dFRleHRhcmVhIiwidXBkYXRlSW5uZXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwiZ2V0TWFya2Rvd24iLCJsZXhlciIsInBhcnNlciIsImNvbnRlbnQiLCJzdGFydFJ1bGUiLCJnZXRTdGFydFJ1bGUiLCJ0b2tlbmlzZSIsInBhcnNlIiwic2V0VG9rZW5zIiwiY2hhcmFjdGVyc1BlckxpbmUiLCJDSEFSQUNURVJTX1BFUl9MSU5FIiwiY29udGVudHNEZXB0aCIsIkNPTlRFTlRTX0RFUFRIIiwibGluZXNQZXJQYWdlIiwiTElORVNfUEVSX1BBR0UiLCJpbXBvcnRlciIsImluZGV4T3B0aW9ucyIsIm5vZGVGcm9tVG9rZW5zIiwidG9rZW5zRnJvbUNvbnRlbnQiLCJtYXJrZG93bk5vZGVzIiwicG9zdHByb2Nlc3MiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTWFya2Rvd25Ob2RlcyIsInNldERpdmlzaW9uTWFya2Rvd25Ob2RlcyIsIm91dGVyTWFya2Rvd25QYXJzZVRyZWUiLCJ1cGRhdGVPdXRlck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJjbGVhclBhZ2VCdXR0b25zRGl2IiwiY2xlYXJQbGFpblRleHRUZXh0YXJlYSIsImNsZWFyT3V0ZXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwibWFya2Rvd25TdHlsZUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiZ2V0TWFya2Rvd25TdHlsZSIsInNldENTUyIsInVwZGF0ZU1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhIiwiaGlkZU1hcmtkb3duQ29udGFpbmVyRGl2Iiwic2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJoaWRlQ1NTQ29udGFpbmVyRGl2IiwiaGlkZUhUTUxDb250YWluZXJEaXYiLCJoaWRlUHJldmlld0NvbnRhaW5lckRpdiIsInNob3dQbGFpblRleHRDb250YWluZXJEaXYiLCJzaG93TWFya2Rvd25Db250YWluZXJEaXYiLCJoaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsInNob3dQcmV2aWV3Q29udGFpbmVyRGl2IiwiaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdiIsInNob3dIVE1MQ29udGFpbmVyRGl2Iiwic2hvd0NTU0NvbnRhaW5lckRpdiIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImNoaWxkRWxlbWVudHMiLCJDb2x1bW5zRGl2IiwiTGVmdFNpemVhYmxlRGl2IiwiTGVmdFRhYkJ1dHRvbnNEaXYiLCJvbkN1c3RvbU1hcmtkb3duIiwib25DdXN0b21NYXJrZG93blN0eWxlIiwiTWFya2Rvd25Db250YWluZXJEaXYiLCJvbkN1c3RvbUtleVVwIiwiTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJSb3dzRGl2IiwiUmlnaHRUYWJCdXR0b25zRGl2Iiwib25DdXN0b21DU1MiLCJvbkN1c3RvbUhUTUwiLCJvbkN1c3RvbVByZXZpZXciLCJvbkN1c3RvbVBsYWluVGV4dCIsIlBhZ2VCdXR0b25zRGl2Iiwib25DdXN0b21QYWdlVXBkYXRlIiwiQ1NTQ29udGFpbmVyRGl2IiwiSFRNTENvbnRhaW5lckRpdiIsIlByZXZpZXdDb250YWluZXJEaXYiLCJQbGFpblRleHRDb250YWluZXJEaXYiLCJJbm5lck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbE1hcmtkb3duIiwiaW5pdGlhbE1hcmtkb3duU3R5bGUiLCJzZXRNYXJrZG93biIsInNldE1hcmtkb3duU3R5bGUiLCJFbGVtZW50IiwiZGVmYXVsdENvbnRlbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsInN0YXJ0UnVsZU5hbWUiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBK1VBOzs7ZUFBQTs7O29FQTdVc0I7b0JBRUU7d0JBQ007MEJBQ3NDO3FCQUNtQjs4REFFbkU7Z0VBQ0M7bUVBQ0k7a0VBQ0U7MkRBQ0M7MERBQ0E7MkRBQ0M7NERBQ0M7NERBQ0M7eUVBQ0E7OERBQ0M7K0RBQ0M7Z0VBQ0M7b0VBQ0k7NERBQ0s7cUJBR0g7eUJBQzRCOzBCQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEUsSUFBTSxBQUFFQSw0QkFBOEJDLHVCQUFhLENBQTNDRDtBQUVSLElBQU1FLGdCQUFnQkMsb0JBQWEsQ0FBQ0MsV0FBVyxJQUN6Q0MsaUJBQWlCQyxxQkFBYyxDQUFDRixXQUFXLElBQzNDRyxxQkFBcUJDLHlCQUFrQixDQUFDSixXQUFXLElBQ25ESyxzQkFBc0JDLDBCQUFtQixDQUFDTixXQUFXO0FBRTNELElBQUEsQUFBTU8scUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztnQkFBTixrQkFBTUEsa0JBQ0pDLHdCQUFBQSw4QkFBNkIsU0FB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