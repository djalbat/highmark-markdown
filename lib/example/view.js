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
var _preview = /*#__PURE__*/ _interop_require_default(require("./view/div/preview"));
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
var _css = /*#__PURE__*/ _interop_require_default(require("./view/textarea/css"));
var _tabButtons = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/right"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdown"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdownStyle"));
var _markdown1 = require("../utilities/markdown");
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
                    var divisionClassName = _constants.INTRODUCTION_CLASS_NAME, divisionMarkdownNode = node; ///
                    divisionMarkdownNode.setDivisionClassName(divisionClassName);
                    var linesPerPage = _constants.LINES_PER_PAGE, charactersPerLine = _constants.CHARACTERS_PER_LINE, context = {
                        tokens: tokens,
                        importer: importer,
                        linesPerPage: linesPerPage,
                        charactersPerLine: charactersPerLine
                    }, divisionMarkdownNodes = (0, _markdown1.postprocess)(divisionMarkdownNode, context);
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
                var length = null;
                this.updatePageButtonsDiv(length, index);
                var divisionMarkdownNodes = this.getDivisionMarkdownNodes(), divisionMarkdownNode = divisionMarkdownNodes[index], pageNumber = index + 1, tokens = this.getTokens(), context = {
                    tokens: tokens
                };
                Object.assign(context, {
                    pageNumber: pageNumber
                });
                var html = divisionMarkdownNode.asHTML(context), domElement = divisionMarkdownNode.createDOMElement(context);
                this.updateXMP(html);
                this.updatePreviewDiv(domElement);
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
_define_property(View, "initialMarkdown", "# Introduction\n  \n@embed paragraph.md  \n\nThis book also goes into considerable detail on the subject of Occam's approach to language, which largely boils down to its use of grammars.\nOccam has its own language, called Florence,[^florence] but it will also support controlled natural languages in the near future.\nIndeed, the verifier cannot distinguish between these languages at all.\nThis book explains how this is possible.\n\nAfter explaining Occam's approach to language this book gives a very detailed explanation of how the verifier works.\nSome may find this nauseating but I maintain that it is essential.\nThe whole idea behind Occam is to facilitate human reasoning and not to supplant it, and it is the verifier that reasons on your behalf.\nSo you must understand how it works.\nIn fact I recommend that you read the introduction together with the first four chapters of the Foundations book before going much further with this one.\nThey are neither very long nor very deep and will provide the necessary background for understanding the verifier in particular.\n\nI hope that the verifier's implenentation is both transparent and readable, and therefore understandable, especially augmented as it is with the explanation here.\nApart from anything else even a partial understanding will likely save a good deal of frustration when you begin to work seriously with Occam.\nThe other reason for understanding the verifier is that it has not been verified itself.\nSo you cannot simply press a button and have confidence in it, that is not the idea at all.\n\nIn fact, at the risk of courting controversy, I would argue that it should not be the idea with any verifier.\nAll are failible regardless of what their proponents may claim and therefore I do not believe that their results should ever be trusted without some level of human oversight.\nIndeed in my opinion verification should be an aid to clarity and rigour and never a substitute for it.\nThe idea of a proof as a black box in particular is anathema to me.\n\nMoving on, the standpoint that software should be an aid to human reasonibg and not a substitute for it must these days be tempered by a consideration of artificial intelligence as a tool for reasoning.\nWhat inspired me over the near decade of work that it took to get Occam to its first viable release was a firm belief in what I call the four elephants, expounded in the four chapters of the aforementioned Foundations book.\nI had not heard of large language models when I started out and they were never a motivating factor, but as I came to my first milestone after those many years, they began to loom large.\n\nThe resurgence of artificial intelligence in recent years has hardly changed my views on automated reasoning, however.\nAdmittedly of late there has been some progress in the direction of coupling artificial intelligence with formal reasoning systems.\nBut for its part Occam only has a bearing on the right hand side of this coupling.\nHowever on the left hand side, it is importtant to note that the output of potentially any large language model or such like can serve as input for Occam.\n\nThus the panacea of using computers as tools for symbolic reasoning, be that devising algorithms or protocols; discovering new mathematics or logic; or whatever, is almost upon us.\nAnd it is worth pointing out that this panacea has been eagerly anticipated for around seventy five years now.\nThere is no doubt that artificial intelligence is on the verge of bringing all of this about, but without tools such as Occam the output of artificial intelligence models will always be clouded in doubt.\n\nFinally I should mention Highmark, wihch is a new document preparation system developed in tandem with Occam.\nIt is a necessary intermediate step in working towards Occam's support for controlled natural languages but I hope that in the long run it will succeed in its own right.\nBoth this book and the Foundations book were written using Highmark and it may well turn out that more people use Occam for working with it than for reasoning.\nThere is therefore a chapter dedicated to it immediately after the chapter on getting to grips with the IDE.\nAnd if you are using Occam to work exclusively with Highmark then please do not be daunted by the formal reasoning side of things, you can safely ignore it, and rest assured that support for Highmark will always be included.\n\nTo conclude, I hope that in the coming years at least some people will come to see Occam as an indespensible tool for symbolic reasoning.\nAmongst other things it will enable them to leverage artificial intelligence to aid their own intellectual enquiries.\nHowever artificial intelligence will not, at least not in the foreseeable future, supplant them.\n\n[^occam]: The word Occam is used somewhat nebulously here.\nIt is most often associated with Occam's IDE but in fact it encompasses a range of software and services.\nThis book explains these divers parts and there is a companion book, called The Foundations of Symbolic Reasoning, that covers the underlying theory.\n\n[^florence]: Occam was originally called Florence but the former seemed more apt.\n\n@footnotes\n\n@pageNumber\n");
_define_property(View, "initialMarkdownStyle", "position: absolute;\npadding-top: 5rem;  \n");
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function importer(filePath, context) {
    var content = "\n\nI have tried to make Occam[^occam] as useable as possible but there are limits.\nAt the end of the day it is an expert system and some of its parts, not least the verifier, need detailed explanation.\nIt is the purpose of this book is to provide these explanations.\n  \n", startOfContent = true, startRule = markdownParser.getStartRule(), tokens = markdownLexer.tokenise(content), node = markdownParser.parse(tokens, startRule, startOfContent), importedNode = node, importedTokens = tokens, importedClassName = "introduction";
    Object.assign(context, {
        importedNode: importedNode,
        importedTokens: importedTokens,
        importedClassName: importedClassName
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgTWFya2Rvd25MZXhlciwgTWFya2Rvd25QYXJzZXIsIE1hcmtkb3duU3R5bGVMZXhlciwgTWFya2Rvd25TdHlsZVBhcnNlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgUm93RGl2LCBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYsIEhvcml6b250YWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgSFRNTERpdiBmcm9tIFwiLi92aWV3L2Rpdi9odG1sXCI7XG5pbXBvcnQgUHJldmlld0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9wcmV2aWV3XCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi92aWV3L3N1YkhlYWRpbmdcIjtcbmltcG9ydCBDU1NUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2Nzc1wiO1xuaW1wb3J0IFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvdGFiQnV0dG9uc1wiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9yaWdodFwiO1xuaW1wb3J0IE1hcmtkb3duQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9tYXJrZG93blwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgcG9zdHByb2Nlc3MgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21hcmtkb3duXCI7XG5pbXBvcnQgeyBMSU5FU19QRVJfUEFHRSwgQ0hBUkFDVEVSU19QRVJfTElORSwgSU5UUk9EVUNUSU9OX0NMQVNTX05BTUUgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgbWFya2Rvd25MZXhlciA9IE1hcmtkb3duTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duUGFyc2VyID0gTWFya2Rvd25QYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duU3R5bGVMZXhlciA9IE1hcmtkb3duU3R5bGVMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25TdHlsZVBhcnNlciA9IE1hcmtkb3duU3R5bGVQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBtYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMubWFya2Rvd25TdHlsZSgpO1xuICB9XG5cbiAgcGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgdGhpcy5jbGVhclBhZ2UoKTtcblxuICAgIHRoaXMudXBkYXRlUGFnZShpbmRleCk7XG4gIH1cblxuICBtYXJrZG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLm1hcmtkb3duKCk7XG4gIH1cblxuICBrZXlVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlTWFya2Rvd25TdHlsZSgpIHtcbiAgICBjb25zdCB7IG1hcmtkb3duU3R5bGVFbGVtZW50IH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbWFya2Rvd25TdHlsZSA9IHRoaXMuZ2V0TWFya2Rvd25TdHlsZSgpLFxuICAgICAgICAgIGNzcyA9IG1hcmtkb3duU3R5bGVFbGVtZW50LnVwZGF0ZShtYXJrZG93blN0eWxlKTtcblxuICAgIHRoaXMuc2V0Q1NTKGNzcyk7XG5cbiAgICBjb25zdCBsZXhlciA9IG1hcmtkb3duU3R5bGVMZXhlciwgLy8vXG4gICAgICAgICAgcGFyc2VyID0gbWFya2Rvd25TdHlsZVBhcnNlciwgLy8vXG4gICAgICAgICAgY29udGVudCA9IG1hcmtkb3duU3R5bGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBzdGFydFJ1bGUgPSBwYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgICAgc3RhcnRPZkNvbnRlbnQgPSB0cnVlLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUsIHN0YXJ0T2ZDb250ZW50KTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG5cbiAgICAgIHRoaXMudXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhKHBhcnNlVHJlZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVNYXJrZG93bigpIHtcbiAgICBjb25zdCBtYXJrZG93biA9IHRoaXMuZ2V0TWFya2Rvd24oKSxcbiAgICAgICAgICBsZXhlciA9IG1hcmtkb3duTGV4ZXIsICAvLy9cbiAgICAgICAgICBwYXJzZXIgPSAgbWFya2Rvd25QYXJzZXIsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBtYXJrZG93biwgLy8vXG4gICAgICAgICAgc3RhcnRPZkNvbnRlbnQgPSB0cnVlLFxuICAgICAgICAgIHN0YXJ0UnVsZSA9IHBhcnNlci5nZXRTdGFydFJ1bGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlLCBzdGFydE9mQ29udGVudCk7XG5cbiAgICB0aGlzLnNldFRva2Vucyh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uQ2xhc3NOYW1lID0gSU5UUk9EVUNUSU9OX0NMQVNTX05BTUUsXG4gICAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUuc2V0RGl2aXNpb25DbGFzc05hbWUoZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgICBjb25zdCBsaW5lc1BlclBhZ2UgPSBMSU5FU19QRVJfUEFHRSxcbiAgICAgICAgICAgIGNoYXJhY3RlcnNQZXJMaW5lID0gQ0hBUkFDVEVSU19QRVJfTElORSxcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgIHRva2VucyxcbiAgICAgICAgICAgICAgaW1wb3J0ZXIsXG4gICAgICAgICAgICAgIGxpbmVzUGVyUGFnZSxcbiAgICAgICAgICAgICAgY2hhcmFjdGVyc1BlckxpbmVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBwb3N0cHJvY2VzcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHRoaXMuc2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2Rlcyk7XG5cbiAgICAgIGNvbnN0IGluZGV4ID0gMCxcbiAgICAgICAgICAgIGxlbmd0aCA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5sZW5ndGgsXG4gICAgICAgICAgICBwYXJzZVRyZWUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpXG5cbiAgICAgIHRoaXMudXBkYXRlUGFnZShpbmRleCk7XG5cbiAgICAgIHRoaXMudXBkYXRlUGFnZUJ1dHRvbnNEaXYobGVuZ3RoKTtcblxuICAgICAgdGhpcy51cGRhdGVNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhKHBhcnNlVHJlZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJQYWdlKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJQYWdlQnV0dG9uc0RpdigpO1xuXG4gICAgICB0aGlzLmNsZWFyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSgpO1xuXG4gICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBudWxsO1xuXG4gICAgICB0aGlzLnNldERpdmlzaW9uTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVBhZ2UoaW5kZXgpIHtcbiAgICBjb25zdCBsZW5ndGggPSBudWxsO1xuXG4gICAgdGhpcy51cGRhdGVQYWdlQnV0dG9uc0RpdihsZW5ndGgsIGluZGV4KTtcblxuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZ2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKCksXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZXNbaW5kZXhdLFxuICAgICAgICAgIHBhZ2VOdW1iZXIgPSBpbmRleCArIDEsXG4gICAgICAgICAgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKSxcbiAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgdG9rZW5zXG4gICAgICAgICAgfTtcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgcGFnZU51bWJlclxuICAgIH0pO1xuXG4gICAgY29uc3QgaHRtbCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmFzSFRNTChjb250ZXh0KSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gZGl2aXNpb25NYXJrZG93bk5vZGUuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgIHRoaXMudXBkYXRlWE1QKGh0bWwpO1xuXG4gICAgdGhpcy51cGRhdGVQcmV2aWV3RGl2KGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgY2xlYXJQYWdlKCkge1xuICAgIHRoaXMuY2xlYXJYTVAoKTtcblxuICAgIHRoaXMuY2xlYXJQcmV2aWV3RGl2KCk7XG4gIH1cblxuICBtYXJrZG93blN0eWxlKCkge1xuICAgIHRoaXMuaGlkZU1hcmtkb3duQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgbWFya2Rvd24oKSB7XG4gICAgdGhpcy5zaG93TWFya2Rvd25Db250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2KCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGVNYXJrZG93bigpO1xuICAgIHRoaXMudXBkYXRlTWFya2Rvd25TdHlsZSgpO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgdG9rZW5zXG4gICAgfSk7XG4gIH1cblxuICBnZXREaXZpc2lvbk1hcmtkb3duTm9kZXMoKSB7XG4gICAgY29uc3QgeyBkaXZpc2lvbk1hcmtkb3duTm9kZXMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZXM7XG4gIH1cblxuICBzZXREaXZpc2lvbk1hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGVzKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXNcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRva2VucyxcbiAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2Rlc1xuICAgIH0pO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPExlZnRTaXplYWJsZURpdj5cbiAgICAgICAgICA8VGFiQnV0dG9uc0RpdiBvbkN1c3RvbU1hcmtkb3duPXt0aGlzLm1hcmtkb3duQ3VzdG9tSGFuZGxlcn0gb25DdXN0b21NYXJrZG93blN0eWxlPXt0aGlzLm1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgIDxNYXJrZG93bkNvbnRhaW5lckRpdiBvbkN1c3RvbUtleVVwPXt0aGlzLmtleVVwQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICA8TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiBvbkN1c3RvbUtleVVwPXt0aGlzLmtleVVwQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxSaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICBIVE1MXG4gICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgPEhUTUxEaXYvPlxuICAgICAgICAgICAgPC9SaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgPEhvcml6b250YWxTcGxpdHRlckRpdi8+XG4gICAgICAgICAgICA8Um93RGl2PlxuICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIENTU1xuICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8Q1NTVGV4dGFyZWEvPlxuICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgUHJldmlld1xuICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8UHJldmlld0RpdiBvbkN1c3RvbVBhZ2VVcGRhdGU9e3RoaXMucGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgIDwvUm93RGl2PlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxNYXJrZG93biwgaW5pdGlhbE1hcmtkb3duU3R5bGUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgbWFya2Rvd25TdHlsZSA9IGluaXRpYWxNYXJrZG93blN0eWxlLCAvLy9cbiAgICAgICAgICBtYXJrZG93biA9IGluaXRpYWxNYXJrZG93bjsgLy8vXG5cbiAgICB0aGlzLnNldE1hcmtkb3duKG1hcmtkb3duKTtcblxuICAgIHRoaXMuc2V0TWFya2Rvd25TdHlsZShtYXJrZG93blN0eWxlKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwibWFya2Rvd25TdHlsZUVsZW1lbnRcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG5cbiAgc3RhdGljIGluaXRpYWxNYXJrZG93biA9IGAjIEludHJvZHVjdGlvblxuICBcbkBlbWJlZCBwYXJhZ3JhcGgubWQgIFxuXG5UaGlzIGJvb2sgYWxzbyBnb2VzIGludG8gY29uc2lkZXJhYmxlIGRldGFpbCBvbiB0aGUgc3ViamVjdCBvZiBPY2NhbSdzIGFwcHJvYWNoIHRvIGxhbmd1YWdlLCB3aGljaCBsYXJnZWx5IGJvaWxzIGRvd24gdG8gaXRzIHVzZSBvZiBncmFtbWFycy5cbk9jY2FtIGhhcyBpdHMgb3duIGxhbmd1YWdlLCBjYWxsZWQgRmxvcmVuY2UsW15mbG9yZW5jZV0gYnV0IGl0IHdpbGwgYWxzbyBzdXBwb3J0IGNvbnRyb2xsZWQgbmF0dXJhbCBsYW5ndWFnZXMgaW4gdGhlIG5lYXIgZnV0dXJlLlxuSW5kZWVkLCB0aGUgdmVyaWZpZXIgY2Fubm90IGRpc3Rpbmd1aXNoIGJldHdlZW4gdGhlc2UgbGFuZ3VhZ2VzIGF0IGFsbC5cblRoaXMgYm9vayBleHBsYWlucyBob3cgdGhpcyBpcyBwb3NzaWJsZS5cblxuQWZ0ZXIgZXhwbGFpbmluZyBPY2NhbSdzIGFwcHJvYWNoIHRvIGxhbmd1YWdlIHRoaXMgYm9vayBnaXZlcyBhIHZlcnkgZGV0YWlsZWQgZXhwbGFuYXRpb24gb2YgaG93IHRoZSB2ZXJpZmllciB3b3Jrcy5cblNvbWUgbWF5IGZpbmQgdGhpcyBuYXVzZWF0aW5nIGJ1dCBJIG1haW50YWluIHRoYXQgaXQgaXMgZXNzZW50aWFsLlxuVGhlIHdob2xlIGlkZWEgYmVoaW5kIE9jY2FtIGlzIHRvIGZhY2lsaXRhdGUgaHVtYW4gcmVhc29uaW5nIGFuZCBub3QgdG8gc3VwcGxhbnQgaXQsIGFuZCBpdCBpcyB0aGUgdmVyaWZpZXIgdGhhdCByZWFzb25zIG9uIHlvdXIgYmVoYWxmLlxuU28geW91IG11c3QgdW5kZXJzdGFuZCBob3cgaXQgd29ya3MuXG5JbiBmYWN0IEkgcmVjb21tZW5kIHRoYXQgeW91IHJlYWQgdGhlIGludHJvZHVjdGlvbiB0b2dldGhlciB3aXRoIHRoZSBmaXJzdCBmb3VyIGNoYXB0ZXJzIG9mIHRoZSBGb3VuZGF0aW9ucyBib29rIGJlZm9yZSBnb2luZyBtdWNoIGZ1cnRoZXIgd2l0aCB0aGlzIG9uZS5cblRoZXkgYXJlIG5laXRoZXIgdmVyeSBsb25nIG5vciB2ZXJ5IGRlZXAgYW5kIHdpbGwgcHJvdmlkZSB0aGUgbmVjZXNzYXJ5IGJhY2tncm91bmQgZm9yIHVuZGVyc3RhbmRpbmcgdGhlIHZlcmlmaWVyIGluIHBhcnRpY3VsYXIuXG5cbkkgaG9wZSB0aGF0IHRoZSB2ZXJpZmllcidzIGltcGxlbmVudGF0aW9uIGlzIGJvdGggdHJhbnNwYXJlbnQgYW5kIHJlYWRhYmxlLCBhbmQgdGhlcmVmb3JlIHVuZGVyc3RhbmRhYmxlLCBlc3BlY2lhbGx5IGF1Z21lbnRlZCBhcyBpdCBpcyB3aXRoIHRoZSBleHBsYW5hdGlvbiBoZXJlLlxuQXBhcnQgZnJvbSBhbnl0aGluZyBlbHNlIGV2ZW4gYSBwYXJ0aWFsIHVuZGVyc3RhbmRpbmcgd2lsbCBsaWtlbHkgc2F2ZSBhIGdvb2QgZGVhbCBvZiBmcnVzdHJhdGlvbiB3aGVuIHlvdSBiZWdpbiB0byB3b3JrIHNlcmlvdXNseSB3aXRoIE9jY2FtLlxuVGhlIG90aGVyIHJlYXNvbiBmb3IgdW5kZXJzdGFuZGluZyB0aGUgdmVyaWZpZXIgaXMgdGhhdCBpdCBoYXMgbm90IGJlZW4gdmVyaWZpZWQgaXRzZWxmLlxuU28geW91IGNhbm5vdCBzaW1wbHkgcHJlc3MgYSBidXR0b24gYW5kIGhhdmUgY29uZmlkZW5jZSBpbiBpdCwgdGhhdCBpcyBub3QgdGhlIGlkZWEgYXQgYWxsLlxuXG5JbiBmYWN0LCBhdCB0aGUgcmlzayBvZiBjb3VydGluZyBjb250cm92ZXJzeSwgSSB3b3VsZCBhcmd1ZSB0aGF0IGl0IHNob3VsZCBub3QgYmUgdGhlIGlkZWEgd2l0aCBhbnkgdmVyaWZpZXIuXG5BbGwgYXJlIGZhaWxpYmxlIHJlZ2FyZGxlc3Mgb2Ygd2hhdCB0aGVpciBwcm9wb25lbnRzIG1heSBjbGFpbSBhbmQgdGhlcmVmb3JlIEkgZG8gbm90IGJlbGlldmUgdGhhdCB0aGVpciByZXN1bHRzIHNob3VsZCBldmVyIGJlIHRydXN0ZWQgd2l0aG91dCBzb21lIGxldmVsIG9mIGh1bWFuIG92ZXJzaWdodC5cbkluZGVlZCBpbiBteSBvcGluaW9uIHZlcmlmaWNhdGlvbiBzaG91bGQgYmUgYW4gYWlkIHRvIGNsYXJpdHkgYW5kIHJpZ291ciBhbmQgbmV2ZXIgYSBzdWJzdGl0dXRlIGZvciBpdC5cblRoZSBpZGVhIG9mIGEgcHJvb2YgYXMgYSBibGFjayBib3ggaW4gcGFydGljdWxhciBpcyBhbmF0aGVtYSB0byBtZS5cblxuTW92aW5nIG9uLCB0aGUgc3RhbmRwb2ludCB0aGF0IHNvZnR3YXJlIHNob3VsZCBiZSBhbiBhaWQgdG8gaHVtYW4gcmVhc29uaWJnIGFuZCBub3QgYSBzdWJzdGl0dXRlIGZvciBpdCBtdXN0IHRoZXNlIGRheXMgYmUgdGVtcGVyZWQgYnkgYSBjb25zaWRlcmF0aW9uIG9mIGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlIGFzIGEgdG9vbCBmb3IgcmVhc29uaW5nLlxuV2hhdCBpbnNwaXJlZCBtZSBvdmVyIHRoZSBuZWFyIGRlY2FkZSBvZiB3b3JrIHRoYXQgaXQgdG9vayB0byBnZXQgT2NjYW0gdG8gaXRzIGZpcnN0IHZpYWJsZSByZWxlYXNlIHdhcyBhIGZpcm0gYmVsaWVmIGluIHdoYXQgSSBjYWxsIHRoZSBmb3VyIGVsZXBoYW50cywgZXhwb3VuZGVkIGluIHRoZSBmb3VyIGNoYXB0ZXJzIG9mIHRoZSBhZm9yZW1lbnRpb25lZCBGb3VuZGF0aW9ucyBib29rLlxuSSBoYWQgbm90IGhlYXJkIG9mIGxhcmdlIGxhbmd1YWdlIG1vZGVscyB3aGVuIEkgc3RhcnRlZCBvdXQgYW5kIHRoZXkgd2VyZSBuZXZlciBhIG1vdGl2YXRpbmcgZmFjdG9yLCBidXQgYXMgSSBjYW1lIHRvIG15IGZpcnN0IG1pbGVzdG9uZSBhZnRlciB0aG9zZSBtYW55IHllYXJzLCB0aGV5IGJlZ2FuIHRvIGxvb20gbGFyZ2UuXG5cblRoZSByZXN1cmdlbmNlIG9mIGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlIGluIHJlY2VudCB5ZWFycyBoYXMgaGFyZGx5IGNoYW5nZWQgbXkgdmlld3Mgb24gYXV0b21hdGVkIHJlYXNvbmluZywgaG93ZXZlci5cbkFkbWl0dGVkbHkgb2YgbGF0ZSB0aGVyZSBoYXMgYmVlbiBzb21lIHByb2dyZXNzIGluIHRoZSBkaXJlY3Rpb24gb2YgY291cGxpbmcgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2Ugd2l0aCBmb3JtYWwgcmVhc29uaW5nIHN5c3RlbXMuXG5CdXQgZm9yIGl0cyBwYXJ0IE9jY2FtIG9ubHkgaGFzIGEgYmVhcmluZyBvbiB0aGUgcmlnaHQgaGFuZCBzaWRlIG9mIHRoaXMgY291cGxpbmcuXG5Ib3dldmVyIG9uIHRoZSBsZWZ0IGhhbmQgc2lkZSwgaXQgaXMgaW1wb3J0dGFudCB0byBub3RlIHRoYXQgdGhlIG91dHB1dCBvZiBwb3RlbnRpYWxseSBhbnkgbGFyZ2UgbGFuZ3VhZ2UgbW9kZWwgb3Igc3VjaCBsaWtlIGNhbiBzZXJ2ZSBhcyBpbnB1dCBmb3IgT2NjYW0uXG5cblRodXMgdGhlIHBhbmFjZWEgb2YgdXNpbmcgY29tcHV0ZXJzIGFzIHRvb2xzIGZvciBzeW1ib2xpYyByZWFzb25pbmcsIGJlIHRoYXQgZGV2aXNpbmcgYWxnb3JpdGhtcyBvciBwcm90b2NvbHM7IGRpc2NvdmVyaW5nIG5ldyBtYXRoZW1hdGljcyBvciBsb2dpYzsgb3Igd2hhdGV2ZXIsIGlzIGFsbW9zdCB1cG9uIHVzLlxuQW5kIGl0IGlzIHdvcnRoIHBvaW50aW5nIG91dCB0aGF0IHRoaXMgcGFuYWNlYSBoYXMgYmVlbiBlYWdlcmx5IGFudGljaXBhdGVkIGZvciBhcm91bmQgc2V2ZW50eSBmaXZlIHllYXJzIG5vdy5cblRoZXJlIGlzIG5vIGRvdWJ0IHRoYXQgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UgaXMgb24gdGhlIHZlcmdlIG9mIGJyaW5naW5nIGFsbCBvZiB0aGlzIGFib3V0LCBidXQgd2l0aG91dCB0b29scyBzdWNoIGFzIE9jY2FtIHRoZSBvdXRwdXQgb2YgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UgbW9kZWxzIHdpbGwgYWx3YXlzIGJlIGNsb3VkZWQgaW4gZG91YnQuXG5cbkZpbmFsbHkgSSBzaG91bGQgbWVudGlvbiBIaWdobWFyaywgd2loY2ggaXMgYSBuZXcgZG9jdW1lbnQgcHJlcGFyYXRpb24gc3lzdGVtIGRldmVsb3BlZCBpbiB0YW5kZW0gd2l0aCBPY2NhbS5cbkl0IGlzIGEgbmVjZXNzYXJ5IGludGVybWVkaWF0ZSBzdGVwIGluIHdvcmtpbmcgdG93YXJkcyBPY2NhbSdzIHN1cHBvcnQgZm9yIGNvbnRyb2xsZWQgbmF0dXJhbCBsYW5ndWFnZXMgYnV0IEkgaG9wZSB0aGF0IGluIHRoZSBsb25nIHJ1biBpdCB3aWxsIHN1Y2NlZWQgaW4gaXRzIG93biByaWdodC5cbkJvdGggdGhpcyBib29rIGFuZCB0aGUgRm91bmRhdGlvbnMgYm9vayB3ZXJlIHdyaXR0ZW4gdXNpbmcgSGlnaG1hcmsgYW5kIGl0IG1heSB3ZWxsIHR1cm4gb3V0IHRoYXQgbW9yZSBwZW9wbGUgdXNlIE9jY2FtIGZvciB3b3JraW5nIHdpdGggaXQgdGhhbiBmb3IgcmVhc29uaW5nLlxuVGhlcmUgaXMgdGhlcmVmb3JlIGEgY2hhcHRlciBkZWRpY2F0ZWQgdG8gaXQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIGNoYXB0ZXIgb24gZ2V0dGluZyB0byBncmlwcyB3aXRoIHRoZSBJREUuXG5BbmQgaWYgeW91IGFyZSB1c2luZyBPY2NhbSB0byB3b3JrIGV4Y2x1c2l2ZWx5IHdpdGggSGlnaG1hcmsgdGhlbiBwbGVhc2UgZG8gbm90IGJlIGRhdW50ZWQgYnkgdGhlIGZvcm1hbCByZWFzb25pbmcgc2lkZSBvZiB0aGluZ3MsIHlvdSBjYW4gc2FmZWx5IGlnbm9yZSBpdCwgYW5kIHJlc3QgYXNzdXJlZCB0aGF0IHN1cHBvcnQgZm9yIEhpZ2htYXJrIHdpbGwgYWx3YXlzIGJlIGluY2x1ZGVkLlxuXG5UbyBjb25jbHVkZSwgSSBob3BlIHRoYXQgaW4gdGhlIGNvbWluZyB5ZWFycyBhdCBsZWFzdCBzb21lIHBlb3BsZSB3aWxsIGNvbWUgdG8gc2VlIE9jY2FtIGFzIGFuIGluZGVzcGVuc2libGUgdG9vbCBmb3Igc3ltYm9saWMgcmVhc29uaW5nLlxuQW1vbmdzdCBvdGhlciB0aGluZ3MgaXQgd2lsbCBlbmFibGUgdGhlbSB0byBsZXZlcmFnZSBhcnRpZmljaWFsIGludGVsbGlnZW5jZSB0byBhaWQgdGhlaXIgb3duIGludGVsbGVjdHVhbCBlbnF1aXJpZXMuXG5Ib3dldmVyIGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlIHdpbGwgbm90LCBhdCBsZWFzdCBub3QgaW4gdGhlIGZvcmVzZWVhYmxlIGZ1dHVyZSwgc3VwcGxhbnQgdGhlbS5cblxuW15vY2NhbV06IFRoZSB3b3JkIE9jY2FtIGlzIHVzZWQgc29tZXdoYXQgbmVidWxvdXNseSBoZXJlLlxuSXQgaXMgbW9zdCBvZnRlbiBhc3NvY2lhdGVkIHdpdGggT2NjYW0ncyBJREUgYnV0IGluIGZhY3QgaXQgZW5jb21wYXNzZXMgYSByYW5nZSBvZiBzb2Z0d2FyZSBhbmQgc2VydmljZXMuXG5UaGlzIGJvb2sgZXhwbGFpbnMgdGhlc2UgZGl2ZXJzIHBhcnRzIGFuZCB0aGVyZSBpcyBhIGNvbXBhbmlvbiBib29rLCBjYWxsZWQgVGhlIEZvdW5kYXRpb25zIG9mIFN5bWJvbGljIFJlYXNvbmluZywgdGhhdCBjb3ZlcnMgdGhlIHVuZGVybHlpbmcgdGhlb3J5LlxuXG5bXmZsb3JlbmNlXTogT2NjYW0gd2FzIG9yaWdpbmFsbHkgY2FsbGVkIEZsb3JlbmNlIGJ1dCB0aGUgZm9ybWVyIHNlZW1lZCBtb3JlIGFwdC5cblxuQGZvb3Rub3Rlc1xuXG5AcGFnZU51bWJlclxuYDtcblxuICBzdGF0aWMgaW5pdGlhbE1hcmtkb3duU3R5bGUgPSBgcG9zaXRpb246IGFic29sdXRlO1xucGFkZGluZy10b3A6IDVyZW07ICBcbmA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG5cbmZ1bmN0aW9uIGltcG9ydGVyKGZpbGVQYXRoLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBgXG5cbkkgaGF2ZSB0cmllZCB0byBtYWtlIE9jY2FtW15vY2NhbV0gYXMgdXNlYWJsZSBhcyBwb3NzaWJsZSBidXQgdGhlcmUgYXJlIGxpbWl0cy5cbkF0IHRoZSBlbmQgb2YgdGhlIGRheSBpdCBpcyBhbiBleHBlcnQgc3lzdGVtIGFuZCBzb21lIG9mIGl0cyBwYXJ0cywgbm90IGxlYXN0IHRoZSB2ZXJpZmllciwgbmVlZCBkZXRhaWxlZCBleHBsYW5hdGlvbi5cbkl0IGlzIHRoZSBwdXJwb3NlIG9mIHRoaXMgYm9vayBpcyB0byBwcm92aWRlIHRoZXNlIGV4cGxhbmF0aW9ucy5cbiAgXG5gLFxuICAgICAgICBzdGFydE9mQ29udGVudCA9IHRydWUsXG4gICAgICAgIHN0YXJ0UnVsZSA9IG1hcmtkb3duUGFyc2VyLmdldFN0YXJ0UnVsZSgpLFxuICAgICAgICB0b2tlbnMgPSBtYXJrZG93bkxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICBub2RlID0gbWFya2Rvd25QYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUsIHN0YXJ0T2ZDb250ZW50KSxcbiAgICAgICAgaW1wb3J0ZWROb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICBpbXBvcnRlZFRva2VucyA9IHRva2VucyxcbiAgICAgICAgaW1wb3J0ZWRDbGFzc05hbWUgPSBcImludHJvZHVjdGlvblwiO1xuXG4gIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgIGltcG9ydGVkTm9kZSxcbiAgICBpbXBvcnRlZFRva2VucyxcbiAgICBpbXBvcnRlZENsYXNzTmFtZVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJtYXJrZG93bkxleGVyIiwiTWFya2Rvd25MZXhlciIsImZyb21Ob3RoaW5nIiwibWFya2Rvd25QYXJzZXIiLCJNYXJrZG93blBhcnNlciIsIm1hcmtkb3duU3R5bGVMZXhlciIsIk1hcmtkb3duU3R5bGVMZXhlciIsIm1hcmtkb3duU3R5bGVQYXJzZXIiLCJNYXJrZG93blN0eWxlUGFyc2VyIiwiVmlldyIsIm1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwibWFya2Rvd25TdHlsZSIsInBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyIiwiaW5kZXgiLCJjbGVhclBhZ2UiLCJ1cGRhdGVQYWdlIiwibWFya2Rvd25DdXN0b21IYW5kbGVyIiwibWFya2Rvd24iLCJrZXlVcEN1c3RvbUhhbmRsZXIiLCJ1cGRhdGUiLCJ1cGRhdGVNYXJrZG93blN0eWxlIiwibWFya2Rvd25TdHlsZUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiZ2V0TWFya2Rvd25TdHlsZSIsImNzcyIsInNldENTUyIsImxleGVyIiwicGFyc2VyIiwiY29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwic3RhcnRSdWxlIiwiZ2V0U3RhcnRSdWxlIiwic3RhcnRPZkNvbnRlbnQiLCJub2RlIiwicGFyc2UiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInVwZGF0ZU1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhIiwidXBkYXRlTWFya2Rvd24iLCJnZXRNYXJrZG93biIsInNldFRva2VucyIsImRpdmlzaW9uQ2xhc3NOYW1lIiwiSU5UUk9EVUNUSU9OX0NMQVNTX05BTUUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsInNldERpdmlzaW9uQ2xhc3NOYW1lIiwibGluZXNQZXJQYWdlIiwiTElORVNfUEVSX1BBR0UiLCJjaGFyYWN0ZXJzUGVyTGluZSIsIkNIQVJBQ1RFUlNfUEVSX0xJTkUiLCJjb250ZXh0IiwiaW1wb3J0ZXIiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJwb3N0cHJvY2VzcyIsInNldERpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImxlbmd0aCIsInVwZGF0ZVBhZ2VCdXR0b25zRGl2IiwidXBkYXRlTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyUGFnZUJ1dHRvbnNEaXYiLCJjbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJnZXREaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJwYWdlTnVtYmVyIiwiZ2V0VG9rZW5zIiwiT2JqZWN0IiwiYXNzaWduIiwiaHRtbCIsImFzSFRNTCIsImRvbUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50IiwidXBkYXRlWE1QIiwidXBkYXRlUHJldmlld0RpdiIsImNsZWFyWE1QIiwiY2xlYXJQcmV2aWV3RGl2IiwiaGlkZU1hcmtkb3duQ29udGFpbmVyRGl2Iiwic2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJzaG93TWFya2Rvd25Db250YWluZXJEaXYiLCJoaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImNoaWxkRWxlbWVudHMiLCJDb2x1bW5zRGl2IiwiTGVmdFNpemVhYmxlRGl2IiwiVGFiQnV0dG9uc0RpdiIsIm9uQ3VzdG9tTWFya2Rvd24iLCJvbkN1c3RvbU1hcmtkb3duU3R5bGUiLCJNYXJrZG93bkNvbnRhaW5lckRpdiIsIm9uQ3VzdG9tS2V5VXAiLCJNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIlJvd3NEaXYiLCJSaWdodFNpemVhYmxlRGl2IiwiU3ViSGVhZGluZyIsIkhUTUxEaXYiLCJIb3Jpem9udGFsU3BsaXR0ZXJEaXYiLCJSb3dEaXYiLCJDU1NUZXh0YXJlYSIsIlByZXZpZXdEaXYiLCJvbkN1c3RvbVBhZ2VVcGRhdGUiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbE1hcmtkb3duIiwiaW5pdGlhbE1hcmtkb3duU3R5bGUiLCJzZXRNYXJrZG93biIsInNldE1hcmtkb3duU3R5bGUiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJmaWxlUGF0aCIsImltcG9ydGVkTm9kZSIsImltcG9ydGVkVG9rZW5zIiwiaW1wb3J0ZWRDbGFzc05hbWUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBVQTs7O2VBQUE7OztvRUF4VXNCO29CQUVFO3FCQUMrRDswQkFDWTsyREFFL0U7OERBQ0c7aUVBQ0E7MERBQ0M7aUVBQ0U7MkRBQ0U7NERBQ0M7K0RBQ0k7b0VBQ0s7eUJBRVY7eUJBQ2lEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdFLElBQU1BLGdCQUFnQkMsb0JBQWEsQ0FBQ0MsV0FBVyxJQUN6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