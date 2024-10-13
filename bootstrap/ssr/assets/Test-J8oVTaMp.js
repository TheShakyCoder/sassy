import { computed, resolveComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString, openBlock, createBlock, createVNode, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Test",
  __ssrInlineRender: true,
  props: {
    edit: {
      type: Boolean,
      default: false
    },
    sectionId: {
      type: String,
      default: ""
    },
    markdown: {
      type: String,
      default: ""
    },
    json: {
      type: String,
      default: {
        "name": "Test Component",
        "links": {
          "control": "List",
          "data": [
            {
              "label": "Test",
              "href": "/"
            }
          ]
        }
      }
    }
  },
  setup(__props) {
    const props = __props;
    const renderJson = computed(() => JSON.parse(props.json));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Highlight = resolveComponent("Highlight");
      _push(ssrRenderComponent(_component_Highlight, mergeProps({
        edit: __props.edit,
        "section-id": __props.sectionId,
        json: __props.json
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (renderJson.value) {
              _push2(`<header class="bg-gray-900"${_scopeId}><nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 bg-gray-900 bg-opacity-109" aria-label="Global"${_scopeId}><div class="flex lg:flex-1"${_scopeId}><a href="#" class="-m-1.5 p-1.5"${_scopeId}><span class="sr-only"${_scopeId}>Your Company</span><img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&amp;shade=500" alt=""${_scopeId}></a></div><div class="flex lg:hidden"${_scopeId}><button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"${_scopeId}><span class="sr-only"${_scopeId}>Open main menu</span><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"${_scopeId}></path></svg></button></div><div class="hidden lg:flex lg:gap-x-12"${_scopeId}><!--[-->`);
              ssrRenderList(renderJson.value.links.data, (link) => {
                _push2(ssrRenderComponent(unref(Link), {
                  href: link.href,
                  class: "text-sm font-semibold leading-6 text-white"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(link.label)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(link.label), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div><div class="hidden lg:flex lg:flex-1 lg:justify-end"${_scopeId}><a href="#" class="text-sm font-semibold leading-6 text-white"${_scopeId}>Log in <span aria-hidden="true"${_scopeId}>→</span></a></div></nav></header>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              renderJson.value ? (openBlock(), createBlock("header", {
                key: 0,
                class: "bg-gray-900"
              }, [
                createVNode("nav", {
                  class: "mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 bg-gray-900 bg-opacity-109",
                  "aria-label": "Global"
                }, [
                  createVNode("div", { class: "flex lg:flex-1" }, [
                    createVNode("a", {
                      href: "#",
                      class: "-m-1.5 p-1.5"
                    }, [
                      createVNode("span", { class: "sr-only" }, "Your Company"),
                      createVNode("img", {
                        class: "h-8 w-auto",
                        src: "https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500",
                        alt: ""
                      })
                    ])
                  ]),
                  createVNode("div", { class: "flex lg:hidden" }, [
                    createVNode("button", {
                      type: "button",
                      class: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                    }, [
                      createVNode("span", { class: "sr-only" }, "Open main menu"),
                      (openBlock(), createBlock("svg", {
                        class: "h-6 w-6",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "stroke-width": "1.5",
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        "data-slot": "icon"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        })
                      ]))
                    ])
                  ]),
                  createVNode("div", { class: "hidden lg:flex lg:gap-x-12" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(renderJson.value.links.data, (link) => {
                      return openBlock(), createBlock(unref(Link), {
                        href: link.href,
                        class: "text-sm font-semibold leading-6 text-white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(link.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["href"]);
                    }), 256))
                  ]),
                  createVNode("div", { class: "hidden lg:flex lg:flex-1 lg:justify-end" }, [
                    createVNode("a", {
                      href: "#",
                      class: "text-sm font-semibold leading-6 text-white"
                    }, [
                      createTextVNode("Log in "),
                      createVNode("span", { "aria-hidden": "true" }, "→")
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Blocks/Test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
