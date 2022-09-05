"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/lib/mdx.js":
/*!************************!*\
  !*** ./src/lib/mdx.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllFilesMetadata\": () => (/* binding */ getAllFilesMetadata),\n/* harmony export */   \"getFileBySlug\": () => (/* binding */ getFileBySlug),\n/* harmony export */   \"getFiles\": () => (/* binding */ getFiles)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-mdx-remote/serialize */ \"next-mdx-remote/serialize\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__]);\nnext_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst root = process.cwd();\nconst getFiles = () => fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(root, 'data'));\nconst getFileBySlug = () => async _ref => {\n  let {\n    slug\n  } = _ref;\n  const mdxSource = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(root, 'data', `${slug}.mdx`), 'utf8');\n  const {\n    data,\n    content\n  } = await gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(mdxSource);\n  const source = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__.serialize)(content, {});\n  return {\n    source,\n    frontmatter: {\n      slug,\n      ...data\n    }\n  };\n};\nconst getAllFilesMetadata = () => {\n  const files = getFiles();\n  return files.reduce((allPosts, postSlug) => {\n    const mdxSource = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(root, 'data', postSlug), 'utf8');\n    const {\n      data\n    } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(mdxSource);\n    return [{ ...data,\n      slug: postSlug.replace('.mdx', '')\n    }, ...allPosts];\n  });\n};\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL21keC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNSSxJQUFJLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixFQUFiO0FBRU8sTUFBTUMsUUFBUSxHQUFHLE1BQU1QLHFEQUFBLENBQWVDLGdEQUFBLENBQVVHLElBQVYsRUFBZ0IsTUFBaEIsQ0FBZixDQUF2QjtBQUVBLE1BQU1NLGFBQWEsR0FBRyxNQUFNLGNBQW9CO0VBQUEsSUFBYjtJQUFFQztFQUFGLENBQWE7RUFDbkQsTUFBTUMsU0FBUyxHQUFHWixzREFBQSxDQUNkQyxnREFBQSxDQUFVRyxJQUFWLEVBQWdCLE1BQWhCLEVBQXlCLEdBQUVPLElBQUssTUFBaEMsQ0FEYyxFQUVkLE1BRmMsQ0FBbEI7RUFJQSxNQUFNO0lBQUVHLElBQUY7SUFBUUM7RUFBUixJQUFvQixNQUFNYixrREFBTSxDQUFDVSxTQUFELENBQXRDO0VBQ0EsTUFBTUksTUFBTSxHQUFHLE1BQU1iLG9FQUFTLENBQUNZLE9BQUQsRUFBVSxFQUFWLENBQTlCO0VBRUEsT0FBTztJQUNIQyxNQURHO0lBRUhDLFdBQVcsRUFBRTtNQUNUTixJQURTO01BRVQsR0FBR0c7SUFGTTtFQUZWLENBQVA7QUFPSCxDQWZNO0FBaUJBLE1BQU1JLG1CQUFtQixHQUFHLE1BQU07RUFDckMsTUFBTUMsS0FBSyxHQUFHWixRQUFRLEVBQXRCO0VBRUEsT0FBT1ksS0FBSyxDQUFDQyxNQUFOLENBQWEsQ0FBQ0MsUUFBRCxFQUFXQyxRQUFYLEtBQXdCO0lBQ3hDLE1BQU1WLFNBQVMsR0FBR1osc0RBQUEsQ0FBZ0JDLGdEQUFBLENBQVVHLElBQVYsRUFBZ0IsTUFBaEIsRUFBd0JrQixRQUF4QixDQUFoQixFQUFtRCxNQUFuRCxDQUFsQjtJQUNBLE1BQU07TUFBRVI7SUFBRixJQUFXWixrREFBTSxDQUFDVSxTQUFELENBQXZCO0lBRUEsT0FBTyxDQUFDLEVBQUMsR0FBR0UsSUFBSjtNQUFVSCxJQUFJLEVBQUVXLFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQixNQUFqQixFQUF3QixFQUF4QjtJQUFoQixDQUFELEVBQStDLEdBQUdGLFFBQWxELENBQVA7RUFDSCxDQUxNLENBQVA7QUFNSCxDQVRNLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvbGliL21keC5qcz9jZmQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJztcclxuaW1wb3J0IHsgc2VyaWFsaXplIH0gZnJvbSAnbmV4dC1tZHgtcmVtb3RlL3NlcmlhbGl6ZSc7XHJcblxyXG5jb25zdCByb290ID0gcHJvY2Vzcy5jd2QoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGaWxlcyA9ICgpID0+IGZzLnJlYWRkaXJTeW5jKHBhdGguam9pbihyb290LCAnZGF0YScpKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGaWxlQnlTbHVnID0gKCkgPT4gYXN5bmMgKHsgc2x1ZyB9KSA9PiB7XHJcbiAgICBjb25zdCBtZHhTb3VyY2UgPSBmcy5yZWFkRmlsZVN5bmMoXHJcbiAgICAgICAgcGF0aC5qb2luKHJvb3QsICdkYXRhJywgYCR7c2x1Z30ubWR4YCksIFxyXG4gICAgICAgICd1dGY4Jyk7XHJcbiAgICBcclxuICAgIGNvbnN0IHsgZGF0YSwgY29udGVudCB9ID0gYXdhaXQgbWF0dGVyKG1keFNvdXJjZSk7XHJcbiAgICBjb25zdCBzb3VyY2UgPSBhd2FpdCBzZXJpYWxpemUoY29udGVudCwge30pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc291cmNlLFxyXG4gICAgICAgIGZyb250bWF0dGVyOiB7XHJcbiAgICAgICAgICAgIHNsdWcsXHJcbiAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsRmlsZXNNZXRhZGF0YSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGZpbGVzID0gZ2V0RmlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4gZmlsZXMucmVkdWNlKChhbGxQb3N0cywgcG9zdFNsdWcpID0+IHtcclxuICAgICAgICBjb25zdCBtZHhTb3VyY2UgPSBmcy5yZWFkRmlsZVN5bmMocGF0aC5qb2luKHJvb3QsICdkYXRhJywgcG9zdFNsdWcpLCAndXRmOCcpO1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gbWF0dGVyKG1keFNvdXJjZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBbey4uLmRhdGEsIHNsdWc6IHBvc3RTbHVnLnJlcGxhY2UoJy5tZHgnLCcnKX0sIC4uLmFsbFBvc3RzXVxyXG4gICAgfSk7XHJcbn07Il0sIm5hbWVzIjpbImZzIiwicGF0aCIsIm1hdHRlciIsInNlcmlhbGl6ZSIsInJvb3QiLCJwcm9jZXNzIiwiY3dkIiwiZ2V0RmlsZXMiLCJyZWFkZGlyU3luYyIsImpvaW4iLCJnZXRGaWxlQnlTbHVnIiwic2x1ZyIsIm1keFNvdXJjZSIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJjb250ZW50Iiwic291cmNlIiwiZnJvbnRtYXR0ZXIiLCJnZXRBbGxGaWxlc01ldGFkYXRhIiwiZmlsZXMiLCJyZWR1Y2UiLCJhbGxQb3N0cyIsInBvc3RTbHVnIiwicmVwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/mdx.js\n");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var _lib_mdx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/mdx */ \"./src/lib/mdx.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_mdx__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_mdx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Home(_ref) {\n  let {\n    posts\n  } = _ref;\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"head\", {\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"title\", {\n        children: \"Blog jamstack\"\n      })\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"main\", {\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n        children: \"Mi blog jamstack\"\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"a\", {\n          href: \"https://nextjs.org/docs\",\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h2\", {\n            children: \"Documentation \"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n            children: \"FInd.....\"\n          })]\n        })\n      })]\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"footer\", {\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"a\", {\n        href: \"\",\n        children: [\"Powered by \", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"img\", {\n            src: \"\"\n          })\n        })]\n      })\n    })]\n  });\n}\nasync function getStaticProps() {\n  const posts = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_0__.getAllFilesMetadata)();\n  console.log(posts);\n  return {\n    props: {\n      posts\n    }\n  };\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7O0FBRWUsU0FBU0MsSUFBVCxPQUF5QjtFQUFBLElBQVg7SUFBRUM7RUFBRixDQUFXO0VBQ3BDLG9CQUNJO0lBQUEsd0JBQ0k7TUFBQSx1QkFDSTtRQUFBO01BQUE7SUFESixFQURKLGVBSUk7TUFBQSx3QkFDSTtRQUFBO01BQUEsRUFESixlQUVJO1FBQUEsdUJBQ0k7VUFBRyxJQUFJLEVBQUMseUJBQVI7VUFBQSx3QkFDSTtZQUFBO1VBQUEsRUFESixlQUVJO1lBQUE7VUFBQSxFQUZKO1FBQUE7TUFESixFQUZKO0lBQUEsRUFKSixlQWNJO01BQUEsdUJBQ0k7UUFBRyxJQUFJLEVBQUMsRUFBUjtRQUFBLHVDQUFzQjtVQUFBLHVCQUFPO1lBQUssR0FBRyxFQUFDO1VBQVQ7UUFBUCxFQUF0QjtNQUFBO0lBREosRUFkSjtFQUFBLEVBREo7QUFzQkg7QUFFTSxlQUFlQyxjQUFmLEdBQWdDO0VBQ25DLE1BQU1ELEtBQUssR0FBRyxNQUFNRiw2REFBbUIsRUFBdkM7RUFDQUksT0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7RUFDQSxPQUFPO0lBQ0hJLEtBQUssRUFBRTtNQUFDSjtJQUFEO0VBREosQ0FBUDtBQUdILEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRBbGxGaWxlc01ldGFkYXRhIH0gZnJvbSBcIi4uL2xpYi9tZHhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwb3N0cyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICA8aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5CbG9nIGphbXN0YWNrPC90aXRsZT5cclxuICAgICAgICAgICAgPC9oZWFkPlxyXG4gICAgICAgICAgICA8bWFpbiA+XHJcbiAgICAgICAgICAgICAgICA8aDEgPk1pIGJsb2cgamFtc3RhY2s8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+RG9jdW1lbnRhdGlvbiA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5GSW5kLi4uLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgICAgICAgIDxmb290ZXIgPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPlBvd2VyZWQgYnkgPHNwYW4gPjxpbWcgc3JjPVwiXCI+PC9pbWc+PC9zcGFuPjwvYT5cclxuXHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsRmlsZXNNZXRhZGF0YSgpO1xyXG4gICAgY29uc29sZS5sb2cocG9zdHMpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge3Bvc3RzfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImdldEFsbEZpbGVzTWV0YWRhdGEiLCJIb21lIiwicG9zdHMiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "next-mdx-remote/serialize":
/*!********************************************!*\
  !*** external "next-mdx-remote/serialize" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("next-mdx-remote/serialize");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();