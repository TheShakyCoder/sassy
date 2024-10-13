import { useSSRContext, mergeProps, withCtx, renderSlot, computed, ref, watch, onMounted, onUnmounted, createVNode, openBlock, createBlock, useSlots, createTextVNode, unref, Fragment, renderList, toDisplayString, createCommentVNode, watchEffect, withModifiers, Transition, defineAsyncComponent, nextTick, resolveDynamicComponent, withKeys, reactive, withDirectives, vShow, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderSlot, ssrRenderComponent, ssrLooseContain, ssrGetDynamicModelProps, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderVNode } from "vue/server-renderer";
import { useForm, usePage, Link, Head, router, createInertiaApp } from "@inertiajs/vue3";
import { Disclosure, Menu, MenuButton, MenuItems, MenuItem, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { BellIcon, Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _sfc_main$O = {
  __name: "ActionMessage",
  __ssrInlineRender: true,
  props: {
    on: Boolean
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle(__props.on ? null : { display: "none" })}" class="text-sm text-gray-600 dark:text-gray-400">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ActionMessage.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$N = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:col-span-1 flex justify-between" }, _attrs))}><div class="px-4 sm:px-0"><h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">`);
  ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
  _push(`</h3><p class="mt-1 text-sm text-gray-600 dark:text-gray-400">`);
  ssrRenderSlot(_ctx.$slots, "description", {}, null, _push, _parent);
  _push(`</p></div><div class="px-4 sm:px-0">`);
  ssrRenderSlot(_ctx.$slots, "aside", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SectionTitle.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const SectionTitle = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$M = {
  __name: "ActionSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:grid md:grid-cols-3 md:gap-6" }, _attrs))}>`);
      _push(ssrRenderComponent(SectionTitle, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "title")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "description", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "description")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<div class="mt-5 md:mt-0 md:col-span-2"><div class="px-4 py-5 sm:p-6 bg-white dark:bg-gray-800 shadow sm:rounded-lg">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ActionSection.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const _sfc_main$L = {
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    checked: {
      type: [Array, Boolean],
      default: false
    },
    value: {
      type: String,
      default: null
    }
  },
  emits: ["update:checked"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const proxyChecked = computed({
      get() {
        return props.checked;
      },
      set(val) {
        emit("update:checked", val);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        checked: Array.isArray(proxyChecked.value) ? ssrLooseContain(proxyChecked.value, __props.value) : proxyChecked.value,
        type: "checkbox",
        value: __props.value,
        class: "rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, proxyChecked.value))))}>`);
    };
  }
};
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Checkbox.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const _sfc_main$K = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: "2xl"
    },
    closeable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const dialog = ref();
    const showSlot = ref(props.show);
    watch(() => props.show, () => {
      var _a;
      if (props.show) {
        document.body.style.overflow = "hidden";
        showSlot.value = true;
        (_a = dialog.value) == null ? void 0 : _a.showModal();
      } else {
        document.body.style.overflow = null;
        setTimeout(() => {
          var _a2;
          (_a2 = dialog.value) == null ? void 0 : _a2.close();
          showSlot.value = false;
        }, 200);
      }
    });
    const close = () => {
      if (props.closeable) {
        emit("close");
      }
    };
    const closeOnEscape = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        if (props.show) {
          close();
        }
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = null;
    });
    const maxWidthClass = computed(() => {
      return {
        "sm": "sm:max-w-sm",
        "md": "sm:max-w-md",
        "lg": "sm:max-w-lg",
        "xl": "sm:max-w-xl",
        "2xl": "sm:max-w-2xl"
      }[props.maxWidth];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<dialog${ssrRenderAttrs(mergeProps({
        class: "z-50 m-0 min-h-full min-w-full overflow-y-auto bg-transparent backdrop:bg-transparent",
        ref_key: "dialog",
        ref: dialog
      }, _attrs))}><div class="fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50" scroll-region><div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="fixed inset-0 transform transition-all"><div class="absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"></div></div><div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="${ssrRenderClass([maxWidthClass.value, "mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto"])}">`);
      if (showSlot.value) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></dialog>`);
    };
  }
};
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const _sfc_main$J = {
  __name: "ConfirmationModal",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: "2xl"
    },
    closeable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const close = () => {
      emit("close");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$K, mergeProps({
        show: __props.show,
        "max-width": __props.maxWidth,
        closeable: __props.closeable,
        onClose: close
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4"${_scopeId}><div class="sm:flex sm:items-start"${_scopeId}><div class="mx-auto shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"${_scopeId}><svg class="h-6 w-6 text-red-600 dark:text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"${_scopeId}></path></svg></div><div class="mt-3 text-center sm:mt-0 sm:ms-4 sm:text-start"${_scopeId}><h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
            _push2(`</h3><div class="mt-4 text-sm text-gray-600 dark:text-gray-400"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "content", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div></div></div></div><div class="flex flex-row justify-end px-6 py-4 bg-gray-100 dark:bg-gray-800 text-end"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, [
                createVNode("div", { class: "sm:flex sm:items-start" }, [
                  createVNode("div", { class: "mx-auto shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10" }, [
                    (openBlock(), createBlock("svg", {
                      class: "h-6 w-6 text-red-600 dark:text-red-400",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5",
                      stroke: "currentColor"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      })
                    ]))
                  ]),
                  createVNode("div", { class: "mt-3 text-center sm:mt-0 sm:ms-4 sm:text-start" }, [
                    createVNode("h3", { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, [
                      renderSlot(_ctx.$slots, "title")
                    ]),
                    createVNode("div", { class: "mt-4 text-sm text-gray-600 dark:text-gray-400" }, [
                      renderSlot(_ctx.$slots, "content")
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "flex flex-row justify-end px-6 py-4 bg-gray-100 dark:bg-gray-800 text-end" }, [
                renderSlot(_ctx.$slots, "footer")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ConfirmationModal.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const _sfc_main$I = {
  __name: "DangerButton",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: __props.type,
        class: "inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DangerButton.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const _sfc_main$H = {
  __name: "DialogModal",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: "2xl"
    },
    closeable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const close = () => {
      emit("close");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$K, mergeProps({
        show: __props.show,
        "max-width": __props.maxWidth,
        closeable: __props.closeable,
        onClose: close
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-6 py-4"${_scopeId}><div class="text-lg font-medium text-gray-900 dark:text-gray-100"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div><div class="mt-4 text-sm text-gray-600 dark:text-gray-400"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "content", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div></div><div class="flex flex-row justify-end px-6 py-4 bg-gray-100 dark:bg-gray-800 text-end"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "px-6 py-4" }, [
                createVNode("div", { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, [
                  renderSlot(_ctx.$slots, "title")
                ]),
                createVNode("div", { class: "mt-4 text-sm text-gray-600 dark:text-gray-400" }, [
                  renderSlot(_ctx.$slots, "content")
                ])
              ]),
              createVNode("div", { class: "flex flex-row justify-end px-6 py-4 bg-gray-100 dark:bg-gray-800 text-end" }, [
                renderSlot(_ctx.$slots, "footer")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DialogModal.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const _sfc_main$G = {
  __name: "FormSection",
  __ssrInlineRender: true,
  emits: ["submitted"],
  setup(__props) {
    const hasActions = computed(() => !!useSlots().actions);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:grid md:grid-cols-3 md:gap-6" }, _attrs))}>`);
      _push(ssrRenderComponent(SectionTitle, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "title")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "description", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "description")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<div class="mt-5 md:mt-0 md:col-span-2"><form><div class="${ssrRenderClass([hasActions.value ? "sm:rounded-tl-md sm:rounded-tr-md" : "sm:rounded-md", "px-4 py-5 bg-white dark:bg-gray-800 sm:p-6 shadow"])}"><div class="grid grid-cols-6 gap-6">`);
      ssrRenderSlot(_ctx.$slots, "form", {}, null, _push, _parent);
      _push(`</div></div>`);
      if (hasActions.value) {
        _push(`<div class="flex items-center justify-end px-4 py-3 bg-gray-50 dark:bg-gray-800 text-end sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md">`);
        ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div></div>`);
    };
  }
};
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/FormSection.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const _sfc_main$F = {
  __name: "InputError",
  __ssrInlineRender: true,
  props: {
    message: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: __props.message ? null : { display: "none" }
      }, _attrs))}><p class="text-sm text-red-600 dark:text-red-400">${ssrInterpolate(__props.message)}</p></div>`);
    };
  }
};
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputError.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const _sfc_main$E = {
  __name: "InputLabel",
  __ssrInlineRender: true,
  props: {
    value: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "block font-medium text-sm text-gray-700 dark:text-gray-300" }, _attrs))}>`);
      if (__props.value) {
        _push(`<span>${ssrInterpolate(__props.value)}</span>`);
      } else {
        _push(`<span>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</span>`);
      }
      _push(`</label>`);
    };
  }
};
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputLabel.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const _sfc_main$D = {
  __name: "PrimaryButton",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "submit"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: __props.type,
        class: "inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-50 transition ease-in-out duration-150"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/PrimaryButton.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const _sfc_main$C = {
  __name: "SecondaryButton",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: __props.type,
        class: "inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SecondaryButton.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const _sfc_main$B = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "hidden sm:block" }, _attrs))}><div class="py-8"><div class="border-t border-gray-200 dark:border-gray-700"></div></div></div>`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SectionBorder.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const SectionBorder = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$A = {
  __name: "TextInput",
  __ssrInlineRender: true,
  props: {
    modelValue: String
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const input = ref(null);
    onMounted(() => {
      if (input.value.hasAttribute("autofocus")) {
        input.value.focus();
      }
    });
    __expose({ focus: () => input.value.focus() });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<input${ssrRenderAttrs(mergeProps({
        ref_key: "input",
        ref: input,
        class: "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm",
        value: __props.modelValue
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TextInput.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const _sfc_main$z = {
  __name: "ApiTokenManager",
  __ssrInlineRender: true,
  props: {
    tokens: Array,
    availablePermissions: Array,
    defaultPermissions: Array
  },
  setup(__props) {
    const props = __props;
    const createApiTokenForm = useForm({
      name: "",
      permissions: props.defaultPermissions
    });
    const updateApiTokenForm = useForm({
      permissions: []
    });
    const deleteApiTokenForm = useForm({});
    const displayingToken = ref(false);
    const managingPermissionsFor = ref(null);
    const apiTokenBeingDeleted = ref(null);
    const createApiToken = () => {
      createApiTokenForm.post(route("api-tokens.store"), {
        preserveScroll: true,
        onSuccess: () => {
          displayingToken.value = true;
          createApiTokenForm.reset();
        }
      });
    };
    const manageApiTokenPermissions = (token) => {
      updateApiTokenForm.permissions = token.abilities;
      managingPermissionsFor.value = token;
    };
    const updateApiToken = () => {
      updateApiTokenForm.put(route("api-tokens.update", managingPermissionsFor.value), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => managingPermissionsFor.value = null
      });
    };
    const confirmApiTokenDeletion = (token) => {
      apiTokenBeingDeleted.value = token;
    };
    const deleteApiToken = () => {
      deleteApiTokenForm.delete(route("api-tokens.destroy", apiTokenBeingDeleted.value), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => apiTokenBeingDeleted.value = null
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$G, { onSubmitted: createApiToken }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Create API Token `);
          } else {
            return [
              createTextVNode(" Create API Token ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` API tokens allow third-party services to authenticate with our application on your behalf. `);
          } else {
            return [
              createTextVNode(" API tokens allow third-party services to authenticate with our application on your behalf. ")
            ];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$E, {
              for: "name",
              value: "Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "name",
              modelValue: unref(createApiTokenForm).name,
              "onUpdate:modelValue": ($event) => unref(createApiTokenForm).name = $event,
              type: "text",
              class: "mt-1 block w-full",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$F, {
              message: unref(createApiTokenForm).errors.name,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (__props.availablePermissions.length > 0) {
              _push2(`<div class="col-span-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$E, {
                for: "permissions",
                value: "Permissions"
              }, null, _parent2, _scopeId));
              _push2(`<div class="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><!--[-->`);
              ssrRenderList(__props.availablePermissions, (permission) => {
                _push2(`<div${_scopeId}><label class="flex items-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$L, {
                  checked: unref(createApiTokenForm).permissions,
                  "onUpdate:checked": ($event) => unref(createApiTokenForm).permissions = $event,
                  value: permission
                }, null, _parent2, _scopeId));
                _push2(`<span class="ms-2 text-sm text-gray-600 dark:text-gray-400"${_scopeId}>${ssrInterpolate(permission)}</span></label></div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$E, {
                  for: "name",
                  value: "Name"
                }),
                createVNode(_sfc_main$A, {
                  id: "name",
                  modelValue: unref(createApiTokenForm).name,
                  "onUpdate:modelValue": ($event) => unref(createApiTokenForm).name = $event,
                  type: "text",
                  class: "mt-1 block w-full",
                  autofocus: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$F, {
                  message: unref(createApiTokenForm).errors.name,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              __props.availablePermissions.length > 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "col-span-6"
              }, [
                createVNode(_sfc_main$E, {
                  for: "permissions",
                  value: "Permissions"
                }),
                createVNode("div", { class: "mt-2 grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.availablePermissions, (permission) => {
                    return openBlock(), createBlock("div", { key: permission }, [
                      createVNode("label", { class: "flex items-center" }, [
                        createVNode(_sfc_main$L, {
                          checked: unref(createApiTokenForm).permissions,
                          "onUpdate:checked": ($event) => unref(createApiTokenForm).permissions = $event,
                          value: permission
                        }, null, 8, ["checked", "onUpdate:checked", "value"]),
                        createVNode("span", { class: "ms-2 text-sm text-gray-600 dark:text-gray-400" }, toDisplayString(permission), 1)
                      ])
                    ]);
                  }), 128))
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$O, {
              on: unref(createApiTokenForm).recentlySuccessful,
              class: "me-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Created. `);
                } else {
                  return [
                    createTextVNode(" Created. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: { "opacity-25": unref(createApiTokenForm).processing },
              disabled: unref(createApiTokenForm).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Create `);
                } else {
                  return [
                    createTextVNode(" Create ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$O, {
                on: unref(createApiTokenForm).recentlySuccessful,
                class: "me-3"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Created. ")
                ]),
                _: 1
              }, 8, ["on"]),
              createVNode(_sfc_main$D, {
                class: { "opacity-25": unref(createApiTokenForm).processing },
                disabled: unref(createApiTokenForm).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Create ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.tokens.length > 0) {
        _push(`<div>`);
        _push(ssrRenderComponent(SectionBorder, null, null, _parent));
        _push(`<div class="mt-10 sm:mt-0">`);
        _push(ssrRenderComponent(_sfc_main$M, null, {
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Manage API Tokens `);
            } else {
              return [
                createTextVNode(" Manage API Tokens ")
              ];
            }
          }),
          description: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` You may delete any of your existing tokens if they are no longer needed. `);
            } else {
              return [
                createTextVNode(" You may delete any of your existing tokens if they are no longer needed. ")
              ];
            }
          }),
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-6"${_scopeId}><!--[-->`);
              ssrRenderList(__props.tokens, (token) => {
                _push2(`<div class="flex items-center justify-between"${_scopeId}><div class="break-all dark:text-white"${_scopeId}>${ssrInterpolate(token.name)}</div><div class="flex items-center ms-2"${_scopeId}>`);
                if (token.last_used_ago) {
                  _push2(`<div class="text-sm text-gray-400"${_scopeId}> Last used ${ssrInterpolate(token.last_used_ago)}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (__props.availablePermissions.length > 0) {
                  _push2(`<button class="cursor-pointer ms-6 text-sm text-gray-400 underline"${_scopeId}> Permissions </button>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<button class="cursor-pointer ms-6 text-sm text-red-500"${_scopeId}> Delete </button></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "space-y-6" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.tokens, (token) => {
                    return openBlock(), createBlock("div", {
                      key: token.id,
                      class: "flex items-center justify-between"
                    }, [
                      createVNode("div", { class: "break-all dark:text-white" }, toDisplayString(token.name), 1),
                      createVNode("div", { class: "flex items-center ms-2" }, [
                        token.last_used_ago ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-sm text-gray-400"
                        }, " Last used " + toDisplayString(token.last_used_ago), 1)) : createCommentVNode("", true),
                        __props.availablePermissions.length > 0 ? (openBlock(), createBlock("button", {
                          key: 1,
                          class: "cursor-pointer ms-6 text-sm text-gray-400 underline",
                          onClick: ($event) => manageApiTokenPermissions(token)
                        }, " Permissions ", 8, ["onClick"])) : createCommentVNode("", true),
                        createVNode("button", {
                          class: "cursor-pointer ms-6 text-sm text-red-500",
                          onClick: ($event) => confirmApiTokenDeletion(token)
                        }, " Delete ", 8, ["onClick"])
                      ])
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$H, {
        show: displayingToken.value,
        onClose: ($event) => displayingToken.value = false
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` API Token `);
          } else {
            return [
              createTextVNode(" API Token ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}> Please copy your new API token. For your security, it won&#39;t be shown again. </div>`);
            if (_ctx.$page.props.jetstream.flash.token) {
              _push2(`<div class="mt-4 bg-gray-100 dark:bg-gray-900 px-4 py-2 rounded font-mono text-sm text-gray-500 break-all"${_scopeId}>${ssrInterpolate(_ctx.$page.props.jetstream.flash.token)}</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", null, " Please copy your new API token. For your security, it won't be shown again. "),
              _ctx.$page.props.jetstream.flash.token ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mt-4 bg-gray-100 dark:bg-gray-900 px-4 py-2 rounded font-mono text-sm text-gray-500 break-all"
              }, toDisplayString(_ctx.$page.props.jetstream.flash.token), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$C, {
              onClick: ($event) => displayingToken.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Close `);
                } else {
                  return [
                    createTextVNode(" Close ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$C, {
                onClick: ($event) => displayingToken.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Close ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$H, {
        show: managingPermissionsFor.value != null,
        onClose: ($event) => managingPermissionsFor.value = null
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` API Token Permissions `);
          } else {
            return [
              createTextVNode(" API Token Permissions ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><!--[-->`);
            ssrRenderList(__props.availablePermissions, (permission) => {
              _push2(`<div${_scopeId}><label class="flex items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$L, {
                checked: unref(updateApiTokenForm).permissions,
                "onUpdate:checked": ($event) => unref(updateApiTokenForm).permissions = $event,
                value: permission
              }, null, _parent2, _scopeId));
              _push2(`<span class="ms-2 text-sm text-gray-600 dark:text-gray-400"${_scopeId}>${ssrInterpolate(permission)}</span></label></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.availablePermissions, (permission) => {
                  return openBlock(), createBlock("div", { key: permission }, [
                    createVNode("label", { class: "flex items-center" }, [
                      createVNode(_sfc_main$L, {
                        checked: unref(updateApiTokenForm).permissions,
                        "onUpdate:checked": ($event) => unref(updateApiTokenForm).permissions = $event,
                        value: permission
                      }, null, 8, ["checked", "onUpdate:checked", "value"]),
                      createVNode("span", { class: "ms-2 text-sm text-gray-600 dark:text-gray-400" }, toDisplayString(permission), 1)
                    ])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$C, {
              onClick: ($event) => managingPermissionsFor.value = null
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: ["ms-3", { "opacity-25": unref(updateApiTokenForm).processing }],
              disabled: unref(updateApiTokenForm).processing,
              onClick: updateApiToken
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Save `);
                } else {
                  return [
                    createTextVNode(" Save ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$C, {
                onClick: ($event) => managingPermissionsFor.value = null
              }, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$D, {
                class: ["ms-3", { "opacity-25": unref(updateApiTokenForm).processing }],
                disabled: unref(updateApiTokenForm).processing,
                onClick: updateApiToken
              }, {
                default: withCtx(() => [
                  createTextVNode(" Save ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$J, {
        show: apiTokenBeingDeleted.value != null,
        onClose: ($event) => apiTokenBeingDeleted.value = null
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Delete API Token `);
          } else {
            return [
              createTextVNode(" Delete API Token ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Are you sure you would like to delete this API token? `);
          } else {
            return [
              createTextVNode(" Are you sure you would like to delete this API token? ")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$C, {
              onClick: ($event) => apiTokenBeingDeleted.value = null
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$I, {
              class: ["ms-3", { "opacity-25": unref(deleteApiTokenForm).processing }],
              disabled: unref(deleteApiTokenForm).processing,
              onClick: deleteApiToken
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Delete `);
                } else {
                  return [
                    createTextVNode(" Delete ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$C, {
                onClick: ($event) => apiTokenBeingDeleted.value = null
              }, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$I, {
                class: ["ms-3", { "opacity-25": unref(deleteApiTokenForm).processing }],
                disabled: unref(deleteApiTokenForm).processing,
                onClick: deleteApiToken
              }, {
                default: withCtx(() => [
                  createTextVNode(" Delete ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/API/Partials/ApiTokenManager.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$z
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$y = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z" fill="#6875F5"></path><path d="M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z" fill="#6875F5"></path></svg>`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ApplicationMark.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const ApplicationMark = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$x = {
  __name: "Banner",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const show = ref(true);
    const style = ref("success");
    const message = ref("");
    watchEffect(async () => {
      var _a, _b;
      style.value = ((_a = page.props.jetstream.flash) == null ? void 0 : _a.bannerStyle) || "success";
      message.value = ((_b = page.props.jetstream.flash) == null ? void 0 : _b.banner) || "";
      show.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (show.value && message.value) {
        _push(`<div class="${ssrRenderClass({ "bg-indigo-500": style.value == "success", "bg-red-700": style.value == "danger" })}"><div class="max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"><div class="flex items-center justify-between flex-wrap"><div class="w-0 flex-1 flex items-center min-w-0"><span class="${ssrRenderClass([{ "bg-indigo-600": style.value == "success", "bg-red-600": style.value == "danger" }, "flex p-2 rounded-lg"])}">`);
        if (style.value == "success") {
          _push(`<svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        if (style.value == "danger") {
          _push(`<svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span><p class="ms-3 font-medium text-sm text-white truncate">${ssrInterpolate(message.value)}</p></div><div class="shrink-0 sm:ms-3"><button type="button" class="${ssrRenderClass([{ "hover:bg-indigo-600 focus:bg-indigo-600": style.value == "success", "hover:bg-red-600 focus:bg-red-600": style.value == "danger" }, "-me-1 flex p-2 rounded-md focus:outline-none sm:-me-2 transition"])}" aria-label="Dismiss"><svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Banner.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const _sfc_main$w = {
  __name: "Dropdown",
  __ssrInlineRender: true,
  props: {
    align: {
      type: String,
      default: "right"
    },
    width: {
      type: String,
      default: "48"
    },
    contentClasses: {
      type: Array,
      default: () => ["py-1", "bg-white dark:bg-gray-700"]
    }
  },
  setup(__props) {
    const props = __props;
    let open = ref(false);
    const closeOnEscape = (e) => {
      if (open.value && e.key === "Escape") {
        open.value = false;
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
    const widthClass = computed(() => {
      return {
        "48": "w-48"
      }[props.width.toString()];
    });
    const alignmentClasses = computed(() => {
      if (props.align === "left") {
        return "ltr:origin-top-left rtl:origin-top-right start-0";
      }
      if (props.align === "right") {
        return "ltr:origin-top-right rtl:origin-top-left end-0";
      }
      return "origin-top";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div>`);
      ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
      _push(`</div><div style="${ssrRenderStyle(unref(open) ? null : { display: "none" })}" class="fixed inset-0 z-40"></div><div style="${ssrRenderStyle([
        unref(open) ? null : { display: "none" },
        { "display": "none" }
      ])}" class="${ssrRenderClass([[widthClass.value, alignmentClasses.value], "absolute z-50 mt-2 rounded-md shadow-lg"])}"><div class="${ssrRenderClass([__props.contentClasses, "rounded-md ring-1 ring-black ring-opacity-5"])}">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdown.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const _sfc_main$v = {
  __name: "DropdownLink",
  __ssrInlineRender: true,
  props: {
    href: String,
    as: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.as == "button") {
        _push(`<button type="submit" class="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</button>`);
      } else if (__props.as == "a") {
        _push(`<a${ssrRenderAttr("href", __props.href)} class="block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        _push(ssrRenderComponent(unref(Link), {
          href: __props.href,
          class: "block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DropdownLink.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const _sfc_main$u = {
  __name: "NavLink",
  __ssrInlineRender: true,
  props: {
    href: String,
    active: Boolean
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      return props.active ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 dark:border-indigo-600 text-sm font-medium leading-5 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out" : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 transition duration-150 ease-in-out";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: classes.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavLink.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const _sfc_main$t = {
  __name: "ResponsiveNavLink",
  __ssrInlineRender: true,
  props: {
    active: Boolean,
    href: String,
    as: String
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      return props.active ? "block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 dark:border-indigo-600 text-start text-base font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300 transition duration-150 ease-in-out" : "block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600 transition duration-150 ease-in-out";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.as == "button") {
        _push(`<button class="${ssrRenderClass([classes.value, "w-full text-start"])}">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</button>`);
      } else {
        _push(ssrRenderComponent(unref(Link), {
          href: __props.href,
          class: classes.value
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ResponsiveNavLink.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const _sfc_main$s = {
  __name: "AppLayout",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    const showingNavigationDropdown = ref(false);
    const switchToTeam = (team) => {
      router.put(route("current-team.update"), {
        team_id: team.id
      }, {
        preserveState: false
      });
    };
    const logout = () => {
      router.post(route("logout"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Head), { title: __props.title }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$x, null, null, _parent));
      _push(`<div class="min-h-screen bg-gray-100 dark:bg-gray-900"><nav class="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-16"><div class="flex"><div class="shrink-0 flex items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationMark, { class: "block h-9 w-auto" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ApplicationMark, { class: "block h-9 w-auto" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">`);
      _push(ssrRenderComponent(_sfc_main$u, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$u, {
        href: _ctx.route("admin.index"),
        active: _ctx.route().current("admin.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Admin `);
          } else {
            return [
              createTextVNode(" Admin ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden sm:flex sm:items-center sm:ms-6"><div class="ms-3 relative">`);
      if (_ctx.$page.props.jetstream.hasTeamFeatures) {
        _push(ssrRenderComponent(_sfc_main$w, {
          align: "right",
          width: "60"
        }, {
          trigger: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.current_team.name)} <svg class="ms-2 -me-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"${_scopeId}></path></svg></button></span>`);
            } else {
              return [
                createVNode("span", { class: "inline-flex rounded-md" }, [
                  createVNode("button", {
                    type: "button",
                    class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"
                  }, [
                    createTextVNode(toDisplayString(_ctx.$page.props.auth.user.current_team.name) + " ", 1),
                    (openBlock(), createBlock("svg", {
                      class: "ms-2 -me-0.5 h-4 w-4",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5",
                      stroke: "currentColor"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      })
                    ]))
                  ])
                ])
              ];
            }
          }),
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-60"${_scopeId}><div class="block px-4 py-2 text-xs text-gray-400"${_scopeId}> Manage Team </div>`);
              _push2(ssrRenderComponent(_sfc_main$v, {
                href: _ctx.route("teams.show", _ctx.$page.props.auth.user.current_team)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Team Settings `);
                  } else {
                    return [
                      createTextVNode(" Team Settings ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (_ctx.$page.props.jetstream.canCreateTeams) {
                _push2(ssrRenderComponent(_sfc_main$v, {
                  href: _ctx.route("teams.create")
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Create New Team `);
                    } else {
                      return [
                        createTextVNode(" Create New Team ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.$page.props.auth.user.all_teams.length > 1) {
                _push2(`<!--[--><div class="border-t border-gray-200 dark:border-gray-600"${_scopeId}></div><div class="block px-4 py-2 text-xs text-gray-400"${_scopeId}> Switch Teams </div><!--[-->`);
                ssrRenderList(_ctx.$page.props.auth.user.all_teams, (team) => {
                  _push2(`<form${_scopeId}>`);
                  _push2(ssrRenderComponent(_sfc_main$v, { as: "button" }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="flex items-center"${_scopeId2}>`);
                        if (team.id == _ctx.$page.props.auth.user.current_team_id) {
                          _push3(`<svg class="me-2 h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId2}></path></svg>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`<div${_scopeId2}>${ssrInterpolate(team.name)}</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center" }, [
                            team.id == _ctx.$page.props.auth.user.current_team_id ? (openBlock(), createBlock("svg", {
                              key: 0,
                              class: "me-2 h-5 w-5 text-green-400",
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              "stroke-width": "1.5",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              })
                            ])) : createCommentVNode("", true),
                            createVNode("div", null, toDisplayString(team.name), 1)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</form>`);
                });
                _push2(`<!--]--><!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "w-60" }, [
                  createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400" }, " Manage Team "),
                  createVNode(_sfc_main$v, {
                    href: _ctx.route("teams.show", _ctx.$page.props.auth.user.current_team)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Team Settings ")
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  _ctx.$page.props.jetstream.canCreateTeams ? (openBlock(), createBlock(_sfc_main$v, {
                    key: 0,
                    href: _ctx.route("teams.create")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Create New Team ")
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  _ctx.$page.props.auth.user.all_teams.length > 1 ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createVNode("div", { class: "border-t border-gray-200 dark:border-gray-600" }),
                    createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400" }, " Switch Teams "),
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$page.props.auth.user.all_teams, (team) => {
                      return openBlock(), createBlock("form", {
                        key: team.id,
                        onSubmit: withModifiers(($event) => switchToTeam(team), ["prevent"])
                      }, [
                        createVNode(_sfc_main$v, { as: "button" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center" }, [
                              team.id == _ctx.$page.props.auth.user.current_team_id ? (openBlock(), createBlock("svg", {
                                key: 0,
                                class: "me-2 h-5 w-5 text-green-400",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                "stroke-width": "1.5",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                })
                              ])) : createCommentVNode("", true),
                              createVNode("div", null, toDisplayString(team.name), 1)
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ], 40, ["onSubmit"]);
                    }), 128))
                  ], 64)) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="ms-3 relative">`);
      _push(ssrRenderComponent(_sfc_main$w, {
        align: "right",
        width: "48"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$page.props.jetstream.managesProfilePhotos) {
              _push2(`<button class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"${_scopeId}><img class="h-8 w-8 rounded-full object-cover"${ssrRenderAttr("src", _ctx.$page.props.auth.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.auth.user.name)}${_scopeId}></button>`);
            } else {
              _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)} <svg class="ms-2 -me-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"${_scopeId}></path></svg></button></span>`);
            }
          } else {
            return [
              _ctx.$page.props.jetstream.managesProfilePhotos ? (openBlock(), createBlock("button", {
                key: 0,
                class: "flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
              }, [
                createVNode("img", {
                  class: "h-8 w-8 rounded-full object-cover",
                  src: _ctx.$page.props.auth.user.profile_photo_url,
                  alt: _ctx.$page.props.auth.user.name
                }, null, 8, ["src", "alt"])
              ])) : (openBlock(), createBlock("span", {
                key: 1,
                class: "inline-flex rounded-md"
              }, [
                createVNode("button", {
                  type: "button",
                  class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"
                }, [
                  createTextVNode(toDisplayString(_ctx.$page.props.auth.user.name) + " ", 1),
                  (openBlock(), createBlock("svg", {
                    class: "ms-2 -me-0.5 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
                    })
                  ]))
                ])
              ]))
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="block px-4 py-2 text-xs text-gray-400"${_scopeId}> Manage Account </div>`);
            _push2(ssrRenderComponent(_sfc_main$v, {
              href: _ctx.route("profile.show")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Profile `);
                } else {
                  return [
                    createTextVNode(" Profile ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (_ctx.$page.props.jetstream.hasApiFeatures) {
              _push2(ssrRenderComponent(_sfc_main$v, {
                href: _ctx.route("api-tokens.index")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` API Tokens `);
                  } else {
                    return [
                      createTextVNode(" API Tokens ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="border-t border-gray-200 dark:border-gray-600"${_scopeId}></div><form${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$v, { as: "button" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log Out `);
                } else {
                  return [
                    createTextVNode(" Log Out ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400" }, " Manage Account "),
              createVNode(_sfc_main$v, {
                href: _ctx.route("profile.show")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Profile ")
                ]),
                _: 1
              }, 8, ["href"]),
              _ctx.$page.props.jetstream.hasApiFeatures ? (openBlock(), createBlock(_sfc_main$v, {
                key: 0,
                href: _ctx.route("api-tokens.index")
              }, {
                default: withCtx(() => [
                  createTextVNode(" API Tokens ")
                ]),
                _: 1
              }, 8, ["href"])) : createCommentVNode("", true),
              createVNode("div", { class: "border-t border-gray-200 dark:border-gray-600" }),
              createVNode("form", {
                onSubmit: withModifiers(logout, ["prevent"])
              }, [
                createVNode(_sfc_main$v, { as: "button" }, {
                  default: withCtx(() => [
                    createTextVNode(" Log Out ")
                  ]),
                  _: 1
                })
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="-me-2 flex items-center sm:hidden"><button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({ "hidden": showingNavigationDropdown.value, "inline-flex": !showingNavigationDropdown.value })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({ "hidden": !showingNavigationDropdown.value, "inline-flex": showingNavigationDropdown.value })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div><div class="${ssrRenderClass([{ "block": showingNavigationDropdown.value, "hidden": !showingNavigationDropdown.value }, "sm:hidden"])}"><div class="pt-2 pb-3 space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$t, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600"><div class="flex items-center px-4">`);
      if (_ctx.$page.props.jetstream.managesProfilePhotos) {
        _push(`<div class="shrink-0 me-3"><img class="h-10 w-10 rounded-full object-cover"${ssrRenderAttr("src", _ctx.$page.props.auth.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.auth.user.name)}></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><div class="font-medium text-base text-gray-800 dark:text-gray-200">${ssrInterpolate(_ctx.$page.props.auth.user.name)}</div><div class="font-medium text-sm text-gray-500">${ssrInterpolate(_ctx.$page.props.auth.user.email)}</div></div></div><div class="mt-3 space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$t, {
        href: _ctx.route("profile.show"),
        active: _ctx.route().current("profile.show")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Profile `);
          } else {
            return [
              createTextVNode(" Profile ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.$page.props.jetstream.hasApiFeatures) {
        _push(ssrRenderComponent(_sfc_main$t, {
          href: _ctx.route("api-tokens.index"),
          active: _ctx.route().current("api-tokens.index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` API Tokens `);
            } else {
              return [
                createTextVNode(" API Tokens ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<form method="POST">`);
      _push(ssrRenderComponent(_sfc_main$t, { as: "button" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Log Out `);
          } else {
            return [
              createTextVNode(" Log Out ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
      if (_ctx.$page.props.jetstream.hasTeamFeatures) {
        _push(`<!--[--><div class="border-t border-gray-200 dark:border-gray-600"></div><div class="block px-4 py-2 text-xs text-gray-400"> Manage Team </div>`);
        _push(ssrRenderComponent(_sfc_main$t, {
          href: _ctx.route("teams.show", _ctx.$page.props.auth.user.current_team),
          active: _ctx.route().current("teams.show")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Team Settings `);
            } else {
              return [
                createTextVNode(" Team Settings ")
              ];
            }
          }),
          _: 1
        }, _parent));
        if (_ctx.$page.props.jetstream.canCreateTeams) {
          _push(ssrRenderComponent(_sfc_main$t, {
            href: _ctx.route("teams.create"),
            active: _ctx.route().current("teams.create")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Create New Team `);
              } else {
                return [
                  createTextVNode(" Create New Team ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.$page.props.auth.user.all_teams.length > 1) {
          _push(`<!--[--><div class="border-t border-gray-200 dark:border-gray-600"></div><div class="block px-4 py-2 text-xs text-gray-400"> Switch Teams </div><!--[-->`);
          ssrRenderList(_ctx.$page.props.auth.user.all_teams, (team) => {
            _push(`<form>`);
            _push(ssrRenderComponent(_sfc_main$t, { as: "button" }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="flex items-center"${_scopeId}>`);
                  if (team.id == _ctx.$page.props.auth.user.current_team_id) {
                    _push2(`<svg class="me-2 h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<div${_scopeId}>${ssrInterpolate(team.name)}</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      team.id == _ctx.$page.props.auth.user.current_team_id ? (openBlock(), createBlock("svg", {
                        key: 0,
                        class: "me-2 h-5 w-5 text-green-400",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "stroke-width": "1.5",
                        stroke: "currentColor"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        })
                      ])) : createCommentVNode("", true),
                      createVNode("div", null, toDisplayString(team.name), 1)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</form>`);
          });
          _push(`<!--]--><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></nav>`);
      if (_ctx.$slots.header) {
        _push(`<header class="bg-white dark:bg-gray-800 shadow"><div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">`);
        ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
        _push(`</div></header>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div>`);
    };
  }
};
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppLayout.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const _sfc_main$r = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    tokens: Array,
    availablePermissions: Array,
    defaultPermissions: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$s, mergeProps({ title: "API Tokens" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"${_scopeId}> API Tokens </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight" }, " API Tokens ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$z, {
              tokens: __props.tokens,
              "available-permissions": __props.availablePermissions,
              "default-permissions": __props.defaultPermissions
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8" }, [
                  createVNode(_sfc_main$z, {
                    tokens: __props.tokens,
                    "available-permissions": __props.availablePermissions,
                    "default-permissions": __props.defaultPermissions
                  }, null, 8, ["tokens", "available-permissions", "default-permissions"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/API/Index.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$r
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$q = {
  __name: "AdminLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const user = {
      name: "Tom Cook",
      email: "tom@example.com",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    };
    const navigation = [
      { name: "Dashboard", href: "#", current: true },
      { name: "Team", href: "#", current: false },
      { name: "Projects", href: "#", current: false },
      { name: "Calendar", href: "#", current: false },
      { name: "Reports", href: "#", current: false }
    ];
    const userNavigation = [
      { name: "Your Profile", href: "#" },
      { name: "Settings", href: "#" },
      { name: "Sign out", href: "#" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-full" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Disclosure), {
        as: "nav",
        class: "bg-gray-800"
      }, {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex h-16 items-center justify-between"${_scopeId}><div class="flex items-center"${_scopeId}><div class="flex-shrink-0"${_scopeId}><img class="h-8 w-8" src="/media/sassy.png" alt="Your Company"${_scopeId}></div><div class="hidden md:block"${_scopeId}><div class="ml-10 flex items-baseline space-x-4"${_scopeId}><!--[-->`);
            ssrRenderList(navigation, (item) => {
              _push2(`<a${ssrRenderAttr("href", item.href)} class="${ssrRenderClass([item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "rounded-md px-3 py-2 text-sm font-medium"])}"${ssrRenderAttr("aria-current", item.current ? "page" : void 0)}${_scopeId}>${ssrInterpolate(item.name)}</a>`);
            });
            _push2(`<!--]--></div></div></div><div class="hidden md:block"${_scopeId}><div class="ml-4 flex items-center md:ml-6"${_scopeId}><button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"${_scopeId}><span class="absolute -inset-1.5"${_scopeId}></span><span class="sr-only"${_scopeId}>View notifications</span>`);
            _push2(ssrRenderComponent(unref(BellIcon), {
              class: "h-6 w-6",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`</button>`);
            _push2(ssrRenderComponent(unref(Menu), {
              as: "div",
              class: "relative ml-3"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(MenuButton), { class: "relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="absolute -inset-1.5"${_scopeId3}></span><span class="sr-only"${_scopeId3}>Open user menu</span><img class="h-8 w-8 rounded-full"${ssrRenderAttr("src", user.imageUrl)} alt=""${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("span", { class: "absolute -inset-1.5" }),
                          createVNode("span", { class: "sr-only" }, "Open user menu"),
                          createVNode("img", {
                            class: "h-8 w-8 rounded-full",
                            src: user.imageUrl,
                            alt: ""
                          }, null, 8, ["src"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(MenuItems), { class: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(userNavigation, (item) => {
                          _push4(ssrRenderComponent(unref(MenuItem), {
                            key: item.name
                          }, {
                            default: withCtx(({ active }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<a${ssrRenderAttr("href", item.href)} class="${ssrRenderClass([active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"])}"${_scopeId4}>${ssrInterpolate(item.name)}</a>`);
                              } else {
                                return [
                                  createVNode("a", {
                                    href: item.href,
                                    class: [active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"]
                                  }, toDisplayString(item.name), 11, ["href"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(userNavigation, (item) => {
                            return createVNode(unref(MenuItem), {
                              key: item.name
                            }, {
                              default: withCtx(({ active }) => [
                                createVNode("a", {
                                  href: item.href,
                                  class: [active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"]
                                }, toDisplayString(item.name), 11, ["href"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode(unref(MenuButton), { class: "relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "absolute -inset-1.5" }),
                          createVNode("span", { class: "sr-only" }, "Open user menu"),
                          createVNode("img", {
                            class: "h-8 w-8 rounded-full",
                            src: user.imageUrl,
                            alt: ""
                          }, null, 8, ["src"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(Transition, {
                      "enter-active-class": "transition ease-out duration-100",
                      "enter-from-class": "transform opacity-0 scale-95",
                      "enter-to-class": "transform opacity-100 scale-100",
                      "leave-active-class": "transition ease-in duration-75",
                      "leave-from-class": "transform opacity-100 scale-100",
                      "leave-to-class": "transform opacity-0 scale-95"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(MenuItems), { class: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(userNavigation, (item) => {
                              return createVNode(unref(MenuItem), {
                                key: item.name
                              }, {
                                default: withCtx(({ active }) => [
                                  createVNode("a", {
                                    href: item.href,
                                    class: [active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"]
                                  }, toDisplayString(item.name), 11, ["href"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="-mr-2 flex md:hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(DisclosureButton), { class: "relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="absolute -inset-0.5"${_scopeId2}></span><span class="sr-only"${_scopeId2}>Open main menu</span>`);
                  if (!open) {
                    _push3(ssrRenderComponent(unref(Bars3Icon), {
                      class: "block h-6 w-6",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(unref(XMarkIcon), {
                      class: "block h-6 w-6",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    createVNode("span", { class: "absolute -inset-0.5" }),
                    createVNode("span", { class: "sr-only" }, "Open main menu"),
                    !open ? (openBlock(), createBlock(unref(Bars3Icon), {
                      key: 0,
                      class: "block h-6 w-6",
                      "aria-hidden": "true"
                    })) : (openBlock(), createBlock(unref(XMarkIcon), {
                      key: 1,
                      class: "block h-6 w-6",
                      "aria-hidden": "true"
                    }))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
            _push2(ssrRenderComponent(unref(DisclosurePanel), { class: "md:hidden" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-1 px-2 pb-3 pt-2 sm:px-3"${_scopeId2}><!--[-->`);
                  ssrRenderList(navigation, (item) => {
                    _push3(ssrRenderComponent(unref(DisclosureButton), {
                      key: item.name,
                      as: "a",
                      href: item.href,
                      class: [item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium"],
                      "aria-current": item.current ? "page" : void 0
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div><div class="border-t border-gray-700 pb-3 pt-4"${_scopeId2}><div class="flex items-center px-5"${_scopeId2}><div class="flex-shrink-0"${_scopeId2}><img class="h-10 w-10 rounded-full"${ssrRenderAttr("src", user.imageUrl)} alt=""${_scopeId2}></div><div class="ml-3"${_scopeId2}><div class="text-base font-medium leading-none text-white"${_scopeId2}>${ssrInterpolate(user.name)}</div><div class="text-sm font-medium leading-none text-gray-400"${_scopeId2}>${ssrInterpolate(user.email)}</div></div><button type="button" class="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"${_scopeId2}><span class="absolute -inset-1.5"${_scopeId2}></span><span class="sr-only"${_scopeId2}>View notifications</span>`);
                  _push3(ssrRenderComponent(unref(BellIcon), {
                    class: "h-6 w-6",
                    "aria-hidden": "true"
                  }, null, _parent3, _scopeId2));
                  _push3(`</button></div><div class="mt-3 space-y-1 px-2"${_scopeId2}><!--[-->`);
                  ssrRenderList(userNavigation, (item) => {
                    _push3(ssrRenderComponent(unref(DisclosureButton), {
                      key: item.name,
                      as: "a",
                      href: item.href,
                      class: "block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-1 px-2 pb-3 pt-2 sm:px-3" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                        return createVNode(unref(DisclosureButton), {
                          key: item.name,
                          as: "a",
                          href: item.href,
                          class: [item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium"],
                          "aria-current": item.current ? "page" : void 0
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["href", "class", "aria-current"]);
                      }), 64))
                    ]),
                    createVNode("div", { class: "border-t border-gray-700 pb-3 pt-4" }, [
                      createVNode("div", { class: "flex items-center px-5" }, [
                        createVNode("div", { class: "flex-shrink-0" }, [
                          createVNode("img", {
                            class: "h-10 w-10 rounded-full",
                            src: user.imageUrl,
                            alt: ""
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "ml-3" }, [
                          createVNode("div", { class: "text-base font-medium leading-none text-white" }, toDisplayString(user.name), 1),
                          createVNode("div", { class: "text-sm font-medium leading-none text-gray-400" }, toDisplayString(user.email), 1)
                        ]),
                        createVNode("button", {
                          type: "button",
                          class: "relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        }, [
                          createVNode("span", { class: "absolute -inset-1.5" }),
                          createVNode("span", { class: "sr-only" }, "View notifications"),
                          createVNode(unref(BellIcon), {
                            class: "h-6 w-6",
                            "aria-hidden": "true"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "mt-3 space-y-1 px-2" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(userNavigation, (item) => {
                          return createVNode(unref(DisclosureButton), {
                            key: item.name,
                            as: "a",
                            href: item.href,
                            class: "block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["href"]);
                        }), 64))
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" }, [
                createVNode("div", { class: "flex h-16 items-center justify-between" }, [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("div", { class: "flex-shrink-0" }, [
                      createVNode("img", {
                        class: "h-8 w-8",
                        src: "/media/sassy.png",
                        alt: "Your Company"
                      })
                    ]),
                    createVNode("div", { class: "hidden md:block" }, [
                      createVNode("div", { class: "ml-10 flex items-baseline space-x-4" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                          return createVNode("a", {
                            key: item.name,
                            href: item.href,
                            class: [item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "rounded-md px-3 py-2 text-sm font-medium"],
                            "aria-current": item.current ? "page" : void 0
                          }, toDisplayString(item.name), 11, ["href", "aria-current"]);
                        }), 64))
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "hidden md:block" }, [
                    createVNode("div", { class: "ml-4 flex items-center md:ml-6" }, [
                      createVNode("button", {
                        type: "button",
                        class: "relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      }, [
                        createVNode("span", { class: "absolute -inset-1.5" }),
                        createVNode("span", { class: "sr-only" }, "View notifications"),
                        createVNode(unref(BellIcon), {
                          class: "h-6 w-6",
                          "aria-hidden": "true"
                        })
                      ]),
                      createVNode(unref(Menu), {
                        as: "div",
                        class: "relative ml-3"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode(unref(MenuButton), { class: "relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "absolute -inset-1.5" }),
                                createVNode("span", { class: "sr-only" }, "Open user menu"),
                                createVNode("img", {
                                  class: "h-8 w-8 rounded-full",
                                  src: user.imageUrl,
                                  alt: ""
                                }, null, 8, ["src"])
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(Transition, {
                            "enter-active-class": "transition ease-out duration-100",
                            "enter-from-class": "transform opacity-0 scale-95",
                            "enter-to-class": "transform opacity-100 scale-100",
                            "leave-active-class": "transition ease-in duration-75",
                            "leave-from-class": "transform opacity-100 scale-100",
                            "leave-to-class": "transform opacity-0 scale-95"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(MenuItems), { class: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(userNavigation, (item) => {
                                    return createVNode(unref(MenuItem), {
                                      key: item.name
                                    }, {
                                      default: withCtx(({ active }) => [
                                        createVNode("a", {
                                          href: item.href,
                                          class: [active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"]
                                        }, toDisplayString(item.name), 11, ["href"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "-mr-2 flex md:hidden" }, [
                    createVNode(unref(DisclosureButton), { class: "relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "absolute -inset-0.5" }),
                        createVNode("span", { class: "sr-only" }, "Open main menu"),
                        !open ? (openBlock(), createBlock(unref(Bars3Icon), {
                          key: 0,
                          class: "block h-6 w-6",
                          "aria-hidden": "true"
                        })) : (openBlock(), createBlock(unref(XMarkIcon), {
                          key: 1,
                          class: "block h-6 w-6",
                          "aria-hidden": "true"
                        }))
                      ]),
                      _: 2
                    }, 1024)
                  ])
                ])
              ]),
              createVNode(unref(DisclosurePanel), { class: "md:hidden" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-1 px-2 pb-3 pt-2 sm:px-3" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                      return createVNode(unref(DisclosureButton), {
                        key: item.name,
                        as: "a",
                        href: item.href,
                        class: [item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium"],
                        "aria-current": item.current ? "page" : void 0
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["href", "class", "aria-current"]);
                    }), 64))
                  ]),
                  createVNode("div", { class: "border-t border-gray-700 pb-3 pt-4" }, [
                    createVNode("div", { class: "flex items-center px-5" }, [
                      createVNode("div", { class: "flex-shrink-0" }, [
                        createVNode("img", {
                          class: "h-10 w-10 rounded-full",
                          src: user.imageUrl,
                          alt: ""
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "ml-3" }, [
                        createVNode("div", { class: "text-base font-medium leading-none text-white" }, toDisplayString(user.name), 1),
                        createVNode("div", { class: "text-sm font-medium leading-none text-gray-400" }, toDisplayString(user.email), 1)
                      ]),
                      createVNode("button", {
                        type: "button",
                        class: "relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      }, [
                        createVNode("span", { class: "absolute -inset-1.5" }),
                        createVNode("span", { class: "sr-only" }, "View notifications"),
                        createVNode(unref(BellIcon), {
                          class: "h-6 w-6",
                          "aria-hidden": "true"
                        })
                      ])
                    ]),
                    createVNode("div", { class: "mt-3 space-y-1 px-2" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(userNavigation, (item) => {
                        return createVNode(unref(DisclosureButton), {
                          key: item.name,
                          as: "a",
                          href: item.href,
                          class: "block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["href"]);
                      }), 64))
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<header class="bg-white shadow"><div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"><h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1></div></header><main><div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main></div>`);
    };
  }
};
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AdminLayout.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const _sfc_main$p = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$q, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul${_scopeId}><li${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), { href: "/admin/blocks" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Blocks`);
                } else {
                  return [
                    createTextVNode("Blocks")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), { href: "/admin/pages" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Pages`);
                } else {
                  return [
                    createTextVNode("Pages")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li></ul>`);
          } else {
            return [
              createVNode("ul", null, [
                createVNode("li", null, [
                  createVNode(unref(Link), { href: "/admin/blocks" }, {
                    default: withCtx(() => [
                      createTextVNode("Blocks")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("li", null, [
                  createVNode(unref(Link), { href: "/admin/pages" }, {
                    default: withCtx(() => [
                      createTextVNode("Pages")
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Index.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$p
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$o = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    page: {
      type: Object,
      default: {
        sections: []
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h2>${ssrInterpolate(__props.page.slug)}</h2><ul><!--[-->`);
      ssrRenderList(__props.page.sections, (section) => {
        _push(`<li><span>${ssrInterpolate(section.id)}</span>`);
        _push(ssrRenderComponent(unref(Link), {
          href: `/admin/sections/${section.id}/edit`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`edit`);
            } else {
              return [
                createTextVNode("edit")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Page/Edit.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$o
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$n = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    pages: {
      type: Object,
      default: {
        data: []
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(__props.pages.data, (page) => {
        _push(`<li><span>${ssrInterpolate(page.slug)}</span>`);
        _push(ssrRenderComponent(unref(Link), {
          href: `/admin/pages/${page.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`view`);
            } else {
              return [
                createTextVNode("view")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Page/Index.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$n
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$m = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    page: {
      type: Object,
      default: {
        sections: []
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h2>${ssrInterpolate(__props.page.slug)}</h2><ul><!--[-->`);
      ssrRenderList(__props.page.sections, (section) => {
        _push(`<li><span>${ssrInterpolate(section.id)}</span>`);
        _push(ssrRenderComponent(unref(Link), {
          href: `/admin/sections/${section.id}/edit`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`edit`);
            } else {
              return [
                createTextVNode("edit")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Page/Show.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$m
}, Symbol.toStringTag, { value: "Module" }));
const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
const _sfc_main$l = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    section: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const props = __props;
    const Block = defineAsyncComponent(() => __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../Blocks/Test.vue": () => import("./assets/Test-J8oVTaMp.js") }), `../../../Blocks/${props.section.block.name}.vue`, 5));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Block), mergeProps({
        edit: true,
        json: __props.section.json,
        sectionId: __props.section.id
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Section/Edit.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$l
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$k = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900" }, _attrs))}><div>`);
  ssrRenderSlot(_ctx.$slots, "logo", {}, null, _push, _parent);
  _push(`</div><div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AuthenticationCard.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const AuthenticationCard = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$j = {
  __name: "AuthenticationCardLogo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({ href: "/" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-16 h-16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z" fill="#6875F5"${_scopeId}></path><path d="M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z" fill="#6875F5"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-16 h-16",
                viewBox: "0 0 48 48",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",
                  fill: "#6875F5"
                }),
                createVNode("path", {
                  d: "M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",
                  fill: "#6875F5"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AuthenticationCardLogo.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = {
  __name: "ConfirmPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      password: ""
    });
    const passwordInput = ref(null);
    const submit = () => {
      form.post(route("password.confirm"), {
        onFinish: () => {
          form.reset();
          passwordInput.value.focus();
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Secure Area" }, null, _parent));
      _push(ssrRenderComponent(AuthenticationCard, null, {
        logo: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$j, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$j)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 text-sm text-gray-600 dark:text-gray-400"${_scopeId}> This is a secure area of the application. Please confirm your password before continuing. </div><form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$E, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "password",
              ref_key: "passwordInput",
              ref: passwordInput,
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "current-password",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$F, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: ["ms-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Confirm `);
                } else {
                  return [
                    createTextVNode(" Confirm ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 text-sm text-gray-600 dark:text-gray-400" }, " This is a secure area of the application. Please confirm your password before continuing. "),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$E, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$A, {
                    id: "password",
                    ref_key: "passwordInput",
                    ref: passwordInput,
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-full",
                    required: "",
                    autocomplete: "current-password",
                    autofocus: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$F, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex justify-end mt-4" }, [
                  createVNode(_sfc_main$D, {
                    class: ["ms-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Confirm ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ConfirmPassword.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$i
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  props: {
    status: String
  },
  setup(__props) {
    const form = useForm({
      email: ""
    });
    const submit = () => {
      form.post(route("password.email"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Forgot Password" }, null, _parent));
      _push(ssrRenderComponent(AuthenticationCard, null, {
        logo: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$j, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$j)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 text-sm text-gray-600 dark:text-gray-400"${_scopeId}> Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. </div>`);
            if (__props.status) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600 dark:text-green-400"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$E, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              class: "mt-1 block w-full",
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$F, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Email Password Reset Link `);
                } else {
                  return [
                    createTextVNode(" Email Password Reset Link ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 text-sm text-gray-600 dark:text-gray-400" }, " Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. "),
              __props.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600 dark:text-green-400"
              }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$E, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$A, {
                    id: "email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    class: "mt-1 block w-full",
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$F, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode(_sfc_main$D, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Email Password Reset Link ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$h
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: Boolean,
    status: String
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.transform((data) => ({
        ...data,
        remember: form.remember ? "on" : ""
      })).post(route("login"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Log in" }, null, _parent));
      _push(ssrRenderComponent(AuthenticationCard, null, {
        logo: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$j, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$j)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.status) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600 dark:text-green-400"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$E, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              class: "mt-1 block w-full",
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$F, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$E, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "current-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$F, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="block mt-4"${_scopeId}><label class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$L, {
              checked: unref(form).remember,
              "onUpdate:checked": ($event) => unref(form).remember = $event,
              name: "remember"
            }, null, _parent2, _scopeId));
            _push2(`<span class="ms-2 text-sm text-gray-600 dark:text-gray-400"${_scopeId}>Remember me</span></label></div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            if (__props.canResetPassword) {
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("password.request"),
                class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Forgot your password? `);
                  } else {
                    return [
                      createTextVNode(" Forgot your password? ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: ["ms-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log in `);
                } else {
                  return [
                    createTextVNode(" Log in ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              __props.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600 dark:text-green-400"
              }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$E, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$A, {
                    id: "email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    class: "mt-1 block w-full",
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$F, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$E, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$A, {
                    id: "password",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-full",
                    required: "",
                    autocomplete: "current-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$F, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "block mt-4" }, [
                  createVNode("label", { class: "flex items-center" }, [
                    createVNode(_sfc_main$L, {
                      checked: unref(form).remember,
                      "onUpdate:checked": ($event) => unref(form).remember = $event,
                      name: "remember"
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    createVNode("span", { class: "ms-2 text-sm text-gray-600 dark:text-gray-400" }, "Remember me")
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  __props.canResetPassword ? (openBlock(), createBlock(unref(Link), {
                    key: 0,
                    href: _ctx.route("password.request"),
                    class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Forgot your password? ")
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  createVNode(_sfc_main$D, {
                    class: ["ms-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Log in ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$g
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$f = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      terms: false
    });
    const submit = () => {
      form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Register" }, null, _parent));
      _push(ssrRenderComponent(AuthenticationCard, null, {
        logo: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$j, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$j)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$E, {
              for: "name",
              value: "Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "name",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              type: "text",
              class: "mt-1 block w-full",
              required: "",
              autofocus: "",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$F, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$E, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$F, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$E, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$F, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$E, {
              for: "password_confirmation",
              value: "Confirm Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "password_confirmation",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              type: "password",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$F, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (_ctx.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature) {
              _push2(`<div class="mt-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$E, { for: "terms" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$L, {
                      id: "terms",
                      checked: unref(form).terms,
                      "onUpdate:checked": ($event) => unref(form).terms = $event,
                      name: "terms",
                      required: ""
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="ms-2"${_scopeId2}> I agree to the <a target="_blank"${ssrRenderAttr("href", _ctx.route("terms.show"))} class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"${_scopeId2}>Terms of Service</a> and <a target="_blank"${ssrRenderAttr("href", _ctx.route("policy.show"))} class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"${_scopeId2}>Privacy Policy</a></div></div>`);
                    _push3(ssrRenderComponent(_sfc_main$F, {
                      class: "mt-2",
                      message: unref(form).errors.terms
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode(_sfc_main$L, {
                          id: "terms",
                          checked: unref(form).terms,
                          "onUpdate:checked": ($event) => unref(form).terms = $event,
                          name: "terms",
                          required: ""
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        createVNode("div", { class: "ms-2" }, [
                          createTextVNode(" I agree to the "),
                          createVNode("a", {
                            target: "_blank",
                            href: _ctx.route("terms.show"),
                            class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                          }, "Terms of Service", 8, ["href"]),
                          createTextVNode(" and "),
                          createVNode("a", {
                            target: "_blank",
                            href: _ctx.route("policy.show"),
                            class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                          }, "Privacy Policy", 8, ["href"])
                        ])
                      ]),
                      createVNode(_sfc_main$F, {
                        class: "mt-2",
                        message: unref(form).errors.terms
                      }, null, 8, ["message"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("login"),
              class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Already registered? `);
                } else {
                  return [
                    createTextVNode(" Already registered? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: ["ms-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Register `);
                } else {
                  return [
                    createTextVNode(" Register ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$E, {
                    for: "name",
                    value: "Name"
                  }),
                  createVNode(_sfc_main$A, {
                    id: "name",
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    type: "text",
                    class: "mt-1 block w-full",
                    required: "",
                    autofocus: "",
                    autocomplete: "name"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$F, {
                    class: "mt-2",
                    message: unref(form).errors.name
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$E, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$A, {
                    id: "email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    class: "mt-1 block w-full",
                    required: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$F, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$E, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$A, {
                    id: "password",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-full",
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$F, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$E, {
                    for: "password_confirmation",
                    value: "Confirm Password"
                  }),
                  createVNode(_sfc_main$A, {
                    id: "password_confirmation",
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    type: "password",
                    class: "mt-1 block w-full",
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$F, {
                    class: "mt-2",
                    message: unref(form).errors.password_confirmation
                  }, null, 8, ["message"])
                ]),
                _ctx.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mt-4"
                }, [
                  createVNode(_sfc_main$E, { for: "terms" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode(_sfc_main$L, {
                          id: "terms",
                          checked: unref(form).terms,
                          "onUpdate:checked": ($event) => unref(form).terms = $event,
                          name: "terms",
                          required: ""
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        createVNode("div", { class: "ms-2" }, [
                          createTextVNode(" I agree to the "),
                          createVNode("a", {
                            target: "_blank",
                            href: _ctx.route("terms.show"),
                            class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                          }, "Terms of Service", 8, ["href"]),
                          createTextVNode(" and "),
                          createVNode("a", {
                            target: "_blank",
                            href: _ctx.route("policy.show"),
                            class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                          }, "Privacy Policy", 8, ["href"])
                        ])
                      ]),
                      createVNode(_sfc_main$F, {
                        class: "mt-2",
                        message: unref(form).errors.terms
                      }, null, 8, ["message"])
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("login"),
                    class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Already registered? ")
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode(_sfc_main$D, {
                    class: ["ms-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Register ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$f
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$e = {
  __name: "ResetPassword",
  __ssrInlineRender: true,
  props: {
    email: String,
    token: String
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      token: props.token,
      email: props.email,
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("password.update"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Reset Password" }, null, _parent));
      _push(ssrRenderComponent(AuthenticationCard, null, {
        logo: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$j, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$j)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$E, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              class: "mt-1 block w-full",
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$F, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$E, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$F, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$E, {
              for: "password_confirmation",
              value: "Confirm Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "password_confirmation",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              type: "password",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$F, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Reset Password `);
                } else {
                  return [
                    createTextVNode(" Reset Password ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$E, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$A, {
                    id: "email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    class: "mt-1 block w-full",
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$F, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$E, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$A, {
                    id: "password",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-full",
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$F, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$E, {
                    for: "password_confirmation",
                    value: "Confirm Password"
                  }),
                  createVNode(_sfc_main$A, {
                    id: "password_confirmation",
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    type: "password",
                    class: "mt-1 block w-full",
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$F, {
                    class: "mt-2",
                    message: unref(form).errors.password_confirmation
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode(_sfc_main$D, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Reset Password ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$e
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {
  __name: "TwoFactorChallenge",
  __ssrInlineRender: true,
  setup(__props) {
    const recovery = ref(false);
    const form = useForm({
      code: "",
      recovery_code: ""
    });
    const recoveryCodeInput = ref(null);
    const codeInput = ref(null);
    const toggleRecovery = async () => {
      recovery.value ^= true;
      await nextTick();
      if (recovery.value) {
        recoveryCodeInput.value.focus();
        form.code = "";
      } else {
        codeInput.value.focus();
        form.recovery_code = "";
      }
    };
    const submit = () => {
      form.post(route("two-factor.login"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Two-factor Confirmation" }, null, _parent));
      _push(ssrRenderComponent(AuthenticationCard, null, {
        logo: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$j, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$j)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 text-sm text-gray-600 dark:text-gray-400"${_scopeId}>`);
            if (!recovery.value) {
              _push2(`<!--[--> Please confirm access to your account by entering the authentication code provided by your authenticator application. <!--]-->`);
            } else {
              _push2(`<!--[--> Please confirm access to your account by entering one of your emergency recovery codes. <!--]-->`);
            }
            _push2(`</div><form${_scopeId}>`);
            if (!recovery.value) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$E, {
                for: "code",
                value: "Code"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$A, {
                id: "code",
                ref_key: "codeInput",
                ref: codeInput,
                modelValue: unref(form).code,
                "onUpdate:modelValue": ($event) => unref(form).code = $event,
                type: "text",
                inputmode: "numeric",
                class: "mt-1 block w-full",
                autofocus: "",
                autocomplete: "one-time-code"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$F, {
                class: "mt-2",
                message: unref(form).errors.code
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$E, {
                for: "recovery_code",
                value: "Recovery Code"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$A, {
                id: "recovery_code",
                ref_key: "recoveryCodeInput",
                ref: recoveryCodeInput,
                modelValue: unref(form).recovery_code,
                "onUpdate:modelValue": ($event) => unref(form).recovery_code = $event,
                type: "text",
                class: "mt-1 block w-full",
                autocomplete: "one-time-code"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$F, {
                class: "mt-2",
                message: unref(form).errors.recovery_code
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`<div class="flex items-center justify-end mt-4"${_scopeId}><button type="button" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 underline cursor-pointer"${_scopeId}>`);
            if (!recovery.value) {
              _push2(`<!--[--> Use a recovery code <!--]-->`);
            } else {
              _push2(`<!--[--> Use an authentication code <!--]-->`);
            }
            _push2(`</button>`);
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: ["ms-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log in `);
                } else {
                  return [
                    createTextVNode(" Log in ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 text-sm text-gray-600 dark:text-gray-400" }, [
                !recovery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createTextVNode(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")
                ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createTextVNode(" Please confirm access to your account by entering one of your emergency recovery codes. ")
                ], 64))
              ]),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                !recovery.value ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode(_sfc_main$E, {
                    for: "code",
                    value: "Code"
                  }),
                  createVNode(_sfc_main$A, {
                    id: "code",
                    ref_key: "codeInput",
                    ref: codeInput,
                    modelValue: unref(form).code,
                    "onUpdate:modelValue": ($event) => unref(form).code = $event,
                    type: "text",
                    inputmode: "numeric",
                    class: "mt-1 block w-full",
                    autofocus: "",
                    autocomplete: "one-time-code"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$F, {
                    class: "mt-2",
                    message: unref(form).errors.code
                  }, null, 8, ["message"])
                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode(_sfc_main$E, {
                    for: "recovery_code",
                    value: "Recovery Code"
                  }),
                  createVNode(_sfc_main$A, {
                    id: "recovery_code",
                    ref_key: "recoveryCodeInput",
                    ref: recoveryCodeInput,
                    modelValue: unref(form).recovery_code,
                    "onUpdate:modelValue": ($event) => unref(form).recovery_code = $event,
                    type: "text",
                    class: "mt-1 block w-full",
                    autocomplete: "one-time-code"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$F, {
                    class: "mt-2",
                    message: unref(form).errors.recovery_code
                  }, null, 8, ["message"])
                ])),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode("button", {
                    type: "button",
                    class: "text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 underline cursor-pointer",
                    onClick: withModifiers(toggleRecovery, ["prevent"])
                  }, [
                    !recovery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createTextVNode(" Use a recovery code ")
                    ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createTextVNode(" Use an authentication code ")
                    ], 64))
                  ]),
                  createVNode(_sfc_main$D, {
                    class: ["ms-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Log in ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/TwoFactorChallenge.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$d
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = {
  __name: "VerifyEmail",
  __ssrInlineRender: true,
  props: {
    status: String
  },
  setup(__props) {
    const props = __props;
    const form = useForm({});
    const submit = () => {
      form.post(route("verification.send"));
    };
    const verificationLinkSent = computed(() => props.status === "verification-link-sent");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Email Verification" }, null, _parent));
      _push(ssrRenderComponent(AuthenticationCard, null, {
        logo: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$j, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$j)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 text-sm text-gray-600 dark:text-gray-400"${_scopeId}> Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn&#39;t receive the email, we will gladly send you another. </div>`);
            if (verificationLinkSent.value) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600 dark:text-green-400"${_scopeId}> A new verification link has been sent to the email address you provided in your profile settings. </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div class="mt-4 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Resend Verification Email `);
                } else {
                  return [
                    createTextVNode(" Resend Verification Email ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("profile.show"),
              class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Edit Profile`);
                } else {
                  return [
                    createTextVNode(" Edit Profile")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("logout"),
              method: "post",
              as: "button",
              class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 ms-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log Out `);
                } else {
                  return [
                    createTextVNode(" Log Out ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></form>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 text-sm text-gray-600 dark:text-gray-400" }, " Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. "),
              verificationLinkSent.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600 dark:text-green-400"
              }, " A new verification link has been sent to the email address you provided in your profile settings. ")) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", { class: "mt-4 flex items-center justify-between" }, [
                  createVNode(_sfc_main$D, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Resend Verification Email ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"]),
                  createVNode("div", null, [
                    createVNode(unref(Link), {
                      href: _ctx.route("profile.show"),
                      class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Edit Profile")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(unref(Link), {
                      href: _ctx.route("logout"),
                      method: "post",
                      as: "button",
                      class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 ms-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Log Out ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$c
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    pages: {
      type: Array,
      default: []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$s, mergeProps({ title: "Dashboard" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"${_scopeId}> Dashboard </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight" }, " Dashboard ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="text-gray-800 dark:text-white bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg"${_scopeId}><ul${_scopeId}><!--[-->`);
            ssrRenderList(__props.pages, (page) => {
              _push2(`<li${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: `/${page.slug}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(page.id)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(page.id), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "text-gray-800 dark:text-white bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg" }, [
                    createVNode("ul", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.pages, (page) => {
                        return openBlock(), createBlock("li", null, [
                          createVNode(unref(Link), {
                            href: `/${page.slug}`
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(page.id), 1)
                            ]),
                            _: 2
                          }, 1032, ["href"])
                        ]);
                      }), 256))
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$b
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    page: {
      type: Object,
      default: {
        sections: []
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full bg-red-100" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.page.sections, (section) => {
        _push(`<div>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(defineAsyncComponent(() => __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../Blocks/Test.vue": () => import("./assets/Test-J8oVTaMp.js") }), `../../Blocks/${section.block.name}.vue`, 4))), {
          json: section.json,
          sectionId: section.id
        }, null), _parent);
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Page/Show.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {
  __name: "PrivacyPolicy",
  __ssrInlineRender: true,
  props: {
    policy: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Privacy Policy" }, null, _parent));
      _push(`<div class="font-sans text-gray-900 dark:text-gray-100 antialiased"><div class="pt-4 bg-gray-100 dark:bg-gray-900"><div class="min-h-screen flex flex-col items-center pt-6 sm:pt-0"><div>`);
      _push(ssrRenderComponent(_sfc_main$j, null, null, _parent));
      _push(`</div><div class="w-full sm:max-w-2xl mt-6 p-6 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg prose dark:prose-invert">${__props.policy ?? ""}</div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PrivacyPolicy.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$9
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {
  __name: "DeleteUserForm",
  __ssrInlineRender: true,
  setup(__props) {
    const confirmingUserDeletion = ref(false);
    const passwordInput = ref(null);
    const form = useForm({
      password: ""
    });
    const confirmUserDeletion = () => {
      confirmingUserDeletion.value = true;
      setTimeout(() => passwordInput.value.focus(), 250);
    };
    const deleteUser = () => {
      form.delete(route("current-user.destroy"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      confirmingUserDeletion.value = false;
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$M, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Delete Account `);
          } else {
            return [
              createTextVNode(" Delete Account ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Permanently delete your account. `);
          } else {
            return [
              createTextVNode(" Permanently delete your account. ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-xl text-sm text-gray-600 dark:text-gray-400"${_scopeId}> Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. </div><div class="mt-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$I, { onClick: confirmUserDeletion }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Delete Account `);
                } else {
                  return [
                    createTextVNode(" Delete Account ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$H, {
              show: confirmingUserDeletion.value,
              onClose: closeModal
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Delete Account `);
                } else {
                  return [
                    createTextVNode(" Delete Account ")
                  ];
                }
              }),
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. <div class="mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$A, {
                    ref_key: "passwordInput",
                    ref: passwordInput,
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-3/4",
                    placeholder: "Password",
                    autocomplete: "current-password",
                    onKeyup: deleteUser
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$F, {
                    message: unref(form).errors.password,
                    class: "mt-2"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createTextVNode(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),
                    createVNode("div", { class: "mt-4" }, [
                      createVNode(_sfc_main$A, {
                        ref_key: "passwordInput",
                        ref: passwordInput,
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        type: "password",
                        class: "mt-1 block w-3/4",
                        placeholder: "Password",
                        autocomplete: "current-password",
                        onKeyup: withKeys(deleteUser, ["enter"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$F, {
                        message: unref(form).errors.password,
                        class: "mt-2"
                      }, null, 8, ["message"])
                    ])
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$C, { onClick: closeModal }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Cancel `);
                      } else {
                        return [
                          createTextVNode(" Cancel ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$I, {
                    class: ["ms-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: deleteUser
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Delete Account `);
                      } else {
                        return [
                          createTextVNode(" Delete Account ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$C, { onClick: closeModal }, {
                      default: withCtx(() => [
                        createTextVNode(" Cancel ")
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$I, {
                      class: ["ms-3", { "opacity-25": unref(form).processing }],
                      disabled: unref(form).processing,
                      onClick: deleteUser
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Delete Account ")
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "max-w-xl text-sm text-gray-600 dark:text-gray-400" }, " Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. "),
              createVNode("div", { class: "mt-5" }, [
                createVNode(_sfc_main$I, { onClick: confirmUserDeletion }, {
                  default: withCtx(() => [
                    createTextVNode(" Delete Account ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_sfc_main$H, {
                show: confirmingUserDeletion.value,
                onClose: closeModal
              }, {
                title: withCtx(() => [
                  createTextVNode(" Delete Account ")
                ]),
                content: withCtx(() => [
                  createTextVNode(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode(_sfc_main$A, {
                      ref_key: "passwordInput",
                      ref: passwordInput,
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      type: "password",
                      class: "mt-1 block w-3/4",
                      placeholder: "Password",
                      autocomplete: "current-password",
                      onKeyup: withKeys(deleteUser, ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$F, {
                      message: unref(form).errors.password,
                      class: "mt-2"
                    }, null, 8, ["message"])
                  ])
                ]),
                footer: withCtx(() => [
                  createVNode(_sfc_main$C, { onClick: closeModal }, {
                    default: withCtx(() => [
                      createTextVNode(" Cancel ")
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$I, {
                    class: ["ms-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: deleteUser
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Delete Account ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ]),
                _: 1
              }, 8, ["show"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/DeleteUserForm.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {
  __name: "LogoutOtherBrowserSessionsForm",
  __ssrInlineRender: true,
  props: {
    sessions: Array
  },
  setup(__props) {
    const confirmingLogout = ref(false);
    const passwordInput = ref(null);
    const form = useForm({
      password: ""
    });
    const confirmLogout = () => {
      confirmingLogout.value = true;
      setTimeout(() => passwordInput.value.focus(), 250);
    };
    const logoutOtherBrowserSessions = () => {
      form.delete(route("other-browser-sessions.destroy"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      confirmingLogout.value = false;
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$M, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Browser Sessions `);
          } else {
            return [
              createTextVNode(" Browser Sessions ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Manage and log out your active sessions on other browsers and devices. `);
          } else {
            return [
              createTextVNode(" Manage and log out your active sessions on other browsers and devices. ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-xl text-sm text-gray-600 dark:text-gray-400"${_scopeId}> If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password. </div>`);
            if (__props.sessions.length > 0) {
              _push2(`<div class="mt-5 space-y-6"${_scopeId}><!--[-->`);
              ssrRenderList(__props.sessions, (session, i) => {
                _push2(`<div class="flex items-center"${_scopeId}><div${_scopeId}>`);
                if (session.agent.is_desktop) {
                  _push2(`<svg class="w-8 h-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"${_scopeId}></path></svg>`);
                } else {
                  _push2(`<svg class="w-8 h-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"${_scopeId}></path></svg>`);
                }
                _push2(`</div><div class="ms-3"${_scopeId}><div class="text-sm text-gray-600 dark:text-gray-400"${_scopeId}>${ssrInterpolate(session.agent.platform ? session.agent.platform : "Unknown")} - ${ssrInterpolate(session.agent.browser ? session.agent.browser : "Unknown")}</div><div${_scopeId}><div class="text-xs text-gray-500"${_scopeId}>${ssrInterpolate(session.ip_address)}, `);
                if (session.is_current_device) {
                  _push2(`<span class="text-green-500 font-semibold"${_scopeId}>This device</span>`);
                } else {
                  _push2(`<span${_scopeId}>Last active ${ssrInterpolate(session.last_active)}</span>`);
                }
                _push2(`</div></div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center mt-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$D, { onClick: confirmLogout }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log Out Other Browser Sessions `);
                } else {
                  return [
                    createTextVNode(" Log Out Other Browser Sessions ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$O, {
              on: unref(form).recentlySuccessful,
              class: "ms-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Done. `);
                } else {
                  return [
                    createTextVNode(" Done. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$H, {
              show: confirmingLogout.value,
              onClose: closeModal
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log Out Other Browser Sessions `);
                } else {
                  return [
                    createTextVNode(" Log Out Other Browser Sessions ")
                  ];
                }
              }),
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. <div class="mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$A, {
                    ref_key: "passwordInput",
                    ref: passwordInput,
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-3/4",
                    placeholder: "Password",
                    autocomplete: "current-password",
                    onKeyup: logoutOtherBrowserSessions
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$F, {
                    message: unref(form).errors.password,
                    class: "mt-2"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createTextVNode(" Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. "),
                    createVNode("div", { class: "mt-4" }, [
                      createVNode(_sfc_main$A, {
                        ref_key: "passwordInput",
                        ref: passwordInput,
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        type: "password",
                        class: "mt-1 block w-3/4",
                        placeholder: "Password",
                        autocomplete: "current-password",
                        onKeyup: withKeys(logoutOtherBrowserSessions, ["enter"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$F, {
                        message: unref(form).errors.password,
                        class: "mt-2"
                      }, null, 8, ["message"])
                    ])
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$C, { onClick: closeModal }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Cancel `);
                      } else {
                        return [
                          createTextVNode(" Cancel ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$D, {
                    class: ["ms-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: logoutOtherBrowserSessions
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Log Out Other Browser Sessions `);
                      } else {
                        return [
                          createTextVNode(" Log Out Other Browser Sessions ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$C, { onClick: closeModal }, {
                      default: withCtx(() => [
                        createTextVNode(" Cancel ")
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$D, {
                      class: ["ms-3", { "opacity-25": unref(form).processing }],
                      disabled: unref(form).processing,
                      onClick: logoutOtherBrowserSessions
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Log Out Other Browser Sessions ")
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "max-w-xl text-sm text-gray-600 dark:text-gray-400" }, " If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password. "),
              __props.sessions.length > 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mt-5 space-y-6"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.sessions, (session, i) => {
                  return openBlock(), createBlock("div", {
                    key: i,
                    class: "flex items-center"
                  }, [
                    createVNode("div", null, [
                      session.agent.is_desktop ? (openBlock(), createBlock("svg", {
                        key: 0,
                        class: "w-8 h-8 text-gray-500",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "stroke-width": "1.5",
                        stroke: "currentColor"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                        })
                      ])) : (openBlock(), createBlock("svg", {
                        key: 1,
                        class: "w-8 h-8 text-gray-500",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "stroke-width": "1.5",
                        stroke: "currentColor"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        })
                      ]))
                    ]),
                    createVNode("div", { class: "ms-3" }, [
                      createVNode("div", { class: "text-sm text-gray-600 dark:text-gray-400" }, toDisplayString(session.agent.platform ? session.agent.platform : "Unknown") + " - " + toDisplayString(session.agent.browser ? session.agent.browser : "Unknown"), 1),
                      createVNode("div", null, [
                        createVNode("div", { class: "text-xs text-gray-500" }, [
                          createTextVNode(toDisplayString(session.ip_address) + ", ", 1),
                          session.is_current_device ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-green-500 font-semibold"
                          }, "This device")) : (openBlock(), createBlock("span", { key: 1 }, "Last active " + toDisplayString(session.last_active), 1))
                        ])
                      ])
                    ])
                  ]);
                }), 128))
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "flex items-center mt-5" }, [
                createVNode(_sfc_main$D, { onClick: confirmLogout }, {
                  default: withCtx(() => [
                    createTextVNode(" Log Out Other Browser Sessions ")
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$O, {
                  on: unref(form).recentlySuccessful,
                  class: "ms-3"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Done. ")
                  ]),
                  _: 1
                }, 8, ["on"])
              ]),
              createVNode(_sfc_main$H, {
                show: confirmingLogout.value,
                onClose: closeModal
              }, {
                title: withCtx(() => [
                  createTextVNode(" Log Out Other Browser Sessions ")
                ]),
                content: withCtx(() => [
                  createTextVNode(" Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. "),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode(_sfc_main$A, {
                      ref_key: "passwordInput",
                      ref: passwordInput,
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      type: "password",
                      class: "mt-1 block w-3/4",
                      placeholder: "Password",
                      autocomplete: "current-password",
                      onKeyup: withKeys(logoutOtherBrowserSessions, ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$F, {
                      message: unref(form).errors.password,
                      class: "mt-2"
                    }, null, 8, ["message"])
                  ])
                ]),
                footer: withCtx(() => [
                  createVNode(_sfc_main$C, { onClick: closeModal }, {
                    default: withCtx(() => [
                      createTextVNode(" Cancel ")
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$D, {
                    class: ["ms-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: logoutOtherBrowserSessions
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Log Out Other Browser Sessions ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ]),
                _: 1
              }, 8, ["show"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  __name: "ConfirmsPassword",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Confirm Password"
    },
    content: {
      type: String,
      default: "For your security, please confirm your password to continue."
    },
    button: {
      type: String,
      default: "Confirm"
    }
  },
  emits: ["confirmed"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const confirmingPassword = ref(false);
    const form = reactive({
      password: "",
      error: "",
      processing: false
    });
    const passwordInput = ref(null);
    const confirmPassword = () => {
      form.processing = true;
      axios.post(route("password.confirm"), {
        password: form.password
      }).then(() => {
        form.processing = false;
        closeModal();
        nextTick().then(() => emit("confirmed"));
      }).catch((error) => {
        form.processing = false;
        form.error = error.response.data.errors.password[0];
        passwordInput.value.focus();
      });
    };
    const closeModal = () => {
      confirmingPassword.value = false;
      form.password = "";
      form.error = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(_attrs)}><span>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
      _push(ssrRenderComponent(_sfc_main$H, {
        show: confirmingPassword.value,
        onClose: closeModal
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.title), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.content)} <div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$A, {
              ref_key: "passwordInput",
              ref: passwordInput,
              modelValue: form.password,
              "onUpdate:modelValue": ($event) => form.password = $event,
              type: "password",
              class: "mt-1 block w-3/4",
              placeholder: "Password",
              autocomplete: "current-password",
              onKeyup: confirmPassword
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$F, {
              message: form.error,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.content) + " ", 1),
              createVNode("div", { class: "mt-4" }, [
                createVNode(_sfc_main$A, {
                  ref_key: "passwordInput",
                  ref: passwordInput,
                  modelValue: form.password,
                  "onUpdate:modelValue": ($event) => form.password = $event,
                  type: "password",
                  class: "mt-1 block w-3/4",
                  placeholder: "Password",
                  autocomplete: "current-password",
                  onKeyup: withKeys(confirmPassword, ["enter"])
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$F, {
                  message: form.error,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$C, { onClick: closeModal }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: ["ms-3", { "opacity-25": form.processing }],
              disabled: form.processing,
              onClick: confirmPassword
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.button)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.button), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$C, { onClick: closeModal }, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }),
              createVNode(_sfc_main$D, {
                class: ["ms-3", { "opacity-25": form.processing }],
                disabled: form.processing,
                onClick: confirmPassword
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.button), 1)
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ConfirmsPassword.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "TwoFactorAuthenticationForm",
  __ssrInlineRender: true,
  props: {
    requiresConfirmation: Boolean
  },
  setup(__props) {
    const props = __props;
    const page = usePage();
    const enabling = ref(false);
    const confirming = ref(false);
    const disabling = ref(false);
    const qrCode = ref(null);
    const setupKey = ref(null);
    const recoveryCodes = ref([]);
    const confirmationForm = useForm({
      code: ""
    });
    const twoFactorEnabled = computed(
      () => {
        var _a;
        return !enabling.value && ((_a = page.props.auth.user) == null ? void 0 : _a.two_factor_enabled);
      }
    );
    watch(twoFactorEnabled, () => {
      if (!twoFactorEnabled.value) {
        confirmationForm.reset();
        confirmationForm.clearErrors();
      }
    });
    const enableTwoFactorAuthentication = () => {
      enabling.value = true;
      router.post(route("two-factor.enable"), {}, {
        preserveScroll: true,
        onSuccess: () => Promise.all([
          showQrCode(),
          showSetupKey(),
          showRecoveryCodes()
        ]),
        onFinish: () => {
          enabling.value = false;
          confirming.value = props.requiresConfirmation;
        }
      });
    };
    const showQrCode = () => {
      return axios.get(route("two-factor.qr-code")).then((response) => {
        qrCode.value = response.data.svg;
      });
    };
    const showSetupKey = () => {
      return axios.get(route("two-factor.secret-key")).then((response) => {
        setupKey.value = response.data.secretKey;
      });
    };
    const showRecoveryCodes = () => {
      return axios.get(route("two-factor.recovery-codes")).then((response) => {
        recoveryCodes.value = response.data;
      });
    };
    const confirmTwoFactorAuthentication = () => {
      confirmationForm.post(route("two-factor.confirm"), {
        errorBag: "confirmTwoFactorAuthentication",
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
          confirming.value = false;
          qrCode.value = null;
          setupKey.value = null;
        }
      });
    };
    const regenerateRecoveryCodes = () => {
      axios.post(route("two-factor.recovery-codes")).then(() => showRecoveryCodes());
    };
    const disableTwoFactorAuthentication = () => {
      disabling.value = true;
      router.delete(route("two-factor.disable"), {
        preserveScroll: true,
        onSuccess: () => {
          disabling.value = false;
          confirming.value = false;
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$M, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Two Factor Authentication `);
          } else {
            return [
              createTextVNode(" Two Factor Authentication ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Add additional security to your account using two factor authentication. `);
          } else {
            return [
              createTextVNode(" Add additional security to your account using two factor authentication. ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (twoFactorEnabled.value && !confirming.value) {
              _push2(`<h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"${_scopeId}> You have enabled two factor authentication. </h3>`);
            } else if (twoFactorEnabled.value && confirming.value) {
              _push2(`<h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"${_scopeId}> Finish enabling two factor authentication. </h3>`);
            } else {
              _push2(`<h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"${_scopeId}> You have not enabled two factor authentication. </h3>`);
            }
            _push2(`<div class="mt-3 max-w-xl text-sm text-gray-600 dark:text-gray-400"${_scopeId}><p${_scopeId}> When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone&#39;s Google Authenticator application. </p></div>`);
            if (twoFactorEnabled.value) {
              _push2(`<div${_scopeId}>`);
              if (qrCode.value) {
                _push2(`<div${_scopeId}><div class="mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"${_scopeId}>`);
                if (confirming.value) {
                  _push2(`<p class="font-semibold"${_scopeId}> To finish enabling two factor authentication, scan the following QR code using your phone&#39;s authenticator application or enter the setup key and provide the generated OTP code. </p>`);
                } else {
                  _push2(`<p${_scopeId}> Two factor authentication is now enabled. Scan the following QR code using your phone&#39;s authenticator application or enter the setup key. </p>`);
                }
                _push2(`</div><div class="mt-4 p-2 inline-block bg-white"${_scopeId}>${qrCode.value ?? ""}</div>`);
                if (setupKey.value) {
                  _push2(`<div class="mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"${_scopeId}><p class="font-semibold"${_scopeId}> Setup Key: <span${_scopeId}>${setupKey.value ?? ""}</span></p></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (confirming.value) {
                  _push2(`<div class="mt-4"${_scopeId}>`);
                  _push2(ssrRenderComponent(_sfc_main$E, {
                    for: "code",
                    value: "Code"
                  }, null, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_sfc_main$A, {
                    id: "code",
                    modelValue: unref(confirmationForm).code,
                    "onUpdate:modelValue": ($event) => unref(confirmationForm).code = $event,
                    type: "text",
                    name: "code",
                    class: "block mt-1 w-1/2",
                    inputmode: "numeric",
                    autofocus: "",
                    autocomplete: "one-time-code",
                    onKeyup: confirmTwoFactorAuthentication
                  }, null, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_sfc_main$F, {
                    message: unref(confirmationForm).errors.code,
                    class: "mt-2"
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (recoveryCodes.value.length > 0 && !confirming.value) {
                _push2(`<div${_scopeId}><div class="mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"${_scopeId}><p class="font-semibold"${_scopeId}> Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. </p></div><div class="grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 dark:bg-gray-900 dark:text-gray-100 rounded-lg"${_scopeId}><!--[-->`);
                ssrRenderList(recoveryCodes.value, (code) => {
                  _push2(`<div${_scopeId}>${ssrInterpolate(code)}</div>`);
                });
                _push2(`<!--]--></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mt-5"${_scopeId}>`);
            if (!twoFactorEnabled.value) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$6, { onConfirmed: enableTwoFactorAuthentication }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$D, {
                      type: "button",
                      class: { "opacity-25": enabling.value },
                      disabled: enabling.value
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Enable `);
                        } else {
                          return [
                            createTextVNode(" Enable ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$D, {
                        type: "button",
                        class: { "opacity-25": enabling.value },
                        disabled: enabling.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Enable ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$6, { onConfirmed: confirmTwoFactorAuthentication }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (confirming.value) {
                      _push3(ssrRenderComponent(_sfc_main$D, {
                        type: "button",
                        class: ["me-3", { "opacity-25": enabling.value }],
                        disabled: enabling.value
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Confirm `);
                          } else {
                            return [
                              createTextVNode(" Confirm ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      confirming.value ? (openBlock(), createBlock(_sfc_main$D, {
                        key: 0,
                        type: "button",
                        class: ["me-3", { "opacity-25": enabling.value }],
                        disabled: enabling.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Confirm ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$6, { onConfirmed: regenerateRecoveryCodes }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (recoveryCodes.value.length > 0 && !confirming.value) {
                      _push3(ssrRenderComponent(_sfc_main$C, { class: "me-3" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Regenerate Recovery Codes `);
                          } else {
                            return [
                              createTextVNode(" Regenerate Recovery Codes ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      recoveryCodes.value.length > 0 && !confirming.value ? (openBlock(), createBlock(_sfc_main$C, {
                        key: 0,
                        class: "me-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Regenerate Recovery Codes ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$6, { onConfirmed: showRecoveryCodes }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (recoveryCodes.value.length === 0 && !confirming.value) {
                      _push3(ssrRenderComponent(_sfc_main$C, { class: "me-3" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Show Recovery Codes `);
                          } else {
                            return [
                              createTextVNode(" Show Recovery Codes ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      recoveryCodes.value.length === 0 && !confirming.value ? (openBlock(), createBlock(_sfc_main$C, {
                        key: 0,
                        class: "me-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Show Recovery Codes ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$6, { onConfirmed: disableTwoFactorAuthentication }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (confirming.value) {
                      _push3(ssrRenderComponent(_sfc_main$C, {
                        class: { "opacity-25": disabling.value },
                        disabled: disabling.value
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Cancel `);
                          } else {
                            return [
                              createTextVNode(" Cancel ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      confirming.value ? (openBlock(), createBlock(_sfc_main$C, {
                        key: 0,
                        class: { "opacity-25": disabling.value },
                        disabled: disabling.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Cancel ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$6, { onConfirmed: disableTwoFactorAuthentication }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (!confirming.value) {
                      _push3(ssrRenderComponent(_sfc_main$I, {
                        class: { "opacity-25": disabling.value },
                        disabled: disabling.value
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Disable `);
                          } else {
                            return [
                              createTextVNode(" Disable ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      !confirming.value ? (openBlock(), createBlock(_sfc_main$I, {
                        key: 0,
                        class: { "opacity-25": disabling.value },
                        disabled: disabling.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Disable ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              twoFactorEnabled.value && !confirming.value ? (openBlock(), createBlock("h3", {
                key: 0,
                class: "text-lg font-medium text-gray-900 dark:text-gray-100"
              }, " You have enabled two factor authentication. ")) : twoFactorEnabled.value && confirming.value ? (openBlock(), createBlock("h3", {
                key: 1,
                class: "text-lg font-medium text-gray-900 dark:text-gray-100"
              }, " Finish enabling two factor authentication. ")) : (openBlock(), createBlock("h3", {
                key: 2,
                class: "text-lg font-medium text-gray-900 dark:text-gray-100"
              }, " You have not enabled two factor authentication. ")),
              createVNode("div", { class: "mt-3 max-w-xl text-sm text-gray-600 dark:text-gray-400" }, [
                createVNode("p", null, " When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application. ")
              ]),
              twoFactorEnabled.value ? (openBlock(), createBlock("div", { key: 3 }, [
                qrCode.value ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("div", { class: "mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400" }, [
                    confirming.value ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "font-semibold"
                    }, " To finish enabling two factor authentication, scan the following QR code using your phone's authenticator application or enter the setup key and provide the generated OTP code. ")) : (openBlock(), createBlock("p", { key: 1 }, " Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application or enter the setup key. "))
                  ]),
                  createVNode("div", {
                    class: "mt-4 p-2 inline-block bg-white",
                    innerHTML: qrCode.value
                  }, null, 8, ["innerHTML"]),
                  setupKey.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"
                  }, [
                    createVNode("p", { class: "font-semibold" }, [
                      createTextVNode(" Setup Key: "),
                      createVNode("span", { innerHTML: setupKey.value }, null, 8, ["innerHTML"])
                    ])
                  ])) : createCommentVNode("", true),
                  confirming.value ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "mt-4"
                  }, [
                    createVNode(_sfc_main$E, {
                      for: "code",
                      value: "Code"
                    }),
                    createVNode(_sfc_main$A, {
                      id: "code",
                      modelValue: unref(confirmationForm).code,
                      "onUpdate:modelValue": ($event) => unref(confirmationForm).code = $event,
                      type: "text",
                      name: "code",
                      class: "block mt-1 w-1/2",
                      inputmode: "numeric",
                      autofocus: "",
                      autocomplete: "one-time-code",
                      onKeyup: withKeys(confirmTwoFactorAuthentication, ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$F, {
                      message: unref(confirmationForm).errors.code,
                      class: "mt-2"
                    }, null, 8, ["message"])
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                recoveryCodes.value.length > 0 && !confirming.value ? (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode("div", { class: "mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400" }, [
                    createVNode("p", { class: "font-semibold" }, " Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. ")
                  ]),
                  createVNode("div", { class: "grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 dark:bg-gray-900 dark:text-gray-100 rounded-lg" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(recoveryCodes.value, (code) => {
                      return openBlock(), createBlock("div", { key: code }, toDisplayString(code), 1);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "mt-5" }, [
                !twoFactorEnabled.value ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode(_sfc_main$6, { onConfirmed: enableTwoFactorAuthentication }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$D, {
                        type: "button",
                        class: { "opacity-25": enabling.value },
                        disabled: enabling.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Enable ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])
                    ]),
                    _: 1
                  })
                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode(_sfc_main$6, { onConfirmed: confirmTwoFactorAuthentication }, {
                    default: withCtx(() => [
                      confirming.value ? (openBlock(), createBlock(_sfc_main$D, {
                        key: 0,
                        type: "button",
                        class: ["me-3", { "opacity-25": enabling.value }],
                        disabled: enabling.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Confirm ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$6, { onConfirmed: regenerateRecoveryCodes }, {
                    default: withCtx(() => [
                      recoveryCodes.value.length > 0 && !confirming.value ? (openBlock(), createBlock(_sfc_main$C, {
                        key: 0,
                        class: "me-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Regenerate Recovery Codes ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$6, { onConfirmed: showRecoveryCodes }, {
                    default: withCtx(() => [
                      recoveryCodes.value.length === 0 && !confirming.value ? (openBlock(), createBlock(_sfc_main$C, {
                        key: 0,
                        class: "me-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Show Recovery Codes ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$6, { onConfirmed: disableTwoFactorAuthentication }, {
                    default: withCtx(() => [
                      confirming.value ? (openBlock(), createBlock(_sfc_main$C, {
                        key: 0,
                        class: { "opacity-25": disabling.value },
                        disabled: disabling.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Cancel ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$6, { onConfirmed: disableTwoFactorAuthentication }, {
                    default: withCtx(() => [
                      !confirming.value ? (openBlock(), createBlock(_sfc_main$I, {
                        key: 0,
                        class: { "opacity-25": disabling.value },
                        disabled: disabling.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Disable ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/TwoFactorAuthenticationForm.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  __name: "UpdatePasswordForm",
  __ssrInlineRender: true,
  setup(__props) {
    const passwordInput = ref(null);
    const currentPasswordInput = ref(null);
    const form = useForm({
      current_password: "",
      password: "",
      password_confirmation: ""
    });
    const updatePassword = () => {
      form.put(route("user-password.update"), {
        errorBag: "updatePassword",
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
          if (form.errors.password) {
            form.reset("password", "password_confirmation");
            passwordInput.value.focus();
          }
          if (form.errors.current_password) {
            form.reset("current_password");
            currentPasswordInput.value.focus();
          }
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$G, mergeProps({ onSubmitted: updatePassword }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Update Password `);
          } else {
            return [
              createTextVNode(" Update Password ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ensure your account is using a long, random password to stay secure. `);
          } else {
            return [
              createTextVNode(" Ensure your account is using a long, random password to stay secure. ")
            ];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$E, {
              for: "current_password",
              value: "Current Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "current_password",
              ref_key: "currentPasswordInput",
              ref: currentPasswordInput,
              modelValue: unref(form).current_password,
              "onUpdate:modelValue": ($event) => unref(form).current_password = $event,
              type: "password",
              class: "mt-1 block w-full",
              autocomplete: "current-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$F, {
              message: unref(form).errors.current_password,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$E, {
              for: "password",
              value: "New Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "password",
              ref_key: "passwordInput",
              ref: passwordInput,
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "mt-1 block w-full",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$F, {
              message: unref(form).errors.password,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$E, {
              for: "password_confirmation",
              value: "Confirm Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "password_confirmation",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              type: "password",
              class: "mt-1 block w-full",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$F, {
              message: unref(form).errors.password_confirmation,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$E, {
                  for: "current_password",
                  value: "Current Password"
                }),
                createVNode(_sfc_main$A, {
                  id: "current_password",
                  ref_key: "currentPasswordInput",
                  ref: currentPasswordInput,
                  modelValue: unref(form).current_password,
                  "onUpdate:modelValue": ($event) => unref(form).current_password = $event,
                  type: "password",
                  class: "mt-1 block w-full",
                  autocomplete: "current-password"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$F, {
                  message: unref(form).errors.current_password,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$E, {
                  for: "password",
                  value: "New Password"
                }),
                createVNode(_sfc_main$A, {
                  id: "password",
                  ref_key: "passwordInput",
                  ref: passwordInput,
                  modelValue: unref(form).password,
                  "onUpdate:modelValue": ($event) => unref(form).password = $event,
                  type: "password",
                  class: "mt-1 block w-full",
                  autocomplete: "new-password"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$F, {
                  message: unref(form).errors.password,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$E, {
                  for: "password_confirmation",
                  value: "Confirm Password"
                }),
                createVNode(_sfc_main$A, {
                  id: "password_confirmation",
                  modelValue: unref(form).password_confirmation,
                  "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                  type: "password",
                  class: "mt-1 block w-full",
                  autocomplete: "new-password"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$F, {
                  message: unref(form).errors.password_confirmation,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ];
          }
        }),
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$O, {
              on: unref(form).recentlySuccessful,
              class: "me-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Saved. `);
                } else {
                  return [
                    createTextVNode(" Saved. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Save `);
                } else {
                  return [
                    createTextVNode(" Save ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$O, {
                on: unref(form).recentlySuccessful,
                class: "me-3"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Saved. ")
                ]),
                _: 1
              }, 8, ["on"]),
              createVNode(_sfc_main$D, {
                class: { "opacity-25": unref(form).processing },
                disabled: unref(form).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Save ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  __name: "UpdateProfileInformationForm",
  __ssrInlineRender: true,
  props: {
    user: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      _method: "PUT",
      name: props.user.name,
      email: props.user.email,
      photo: null
    });
    const verificationLinkSent = ref(null);
    const photoPreview = ref(null);
    const photoInput = ref(null);
    const updateProfileInformation = () => {
      if (photoInput.value) {
        form.photo = photoInput.value.files[0];
      }
      form.post(route("user-profile-information.update"), {
        errorBag: "updateProfileInformation",
        preserveScroll: true,
        onSuccess: () => clearPhotoFileInput()
      });
    };
    const sendEmailVerification = () => {
      verificationLinkSent.value = true;
    };
    const selectNewPhoto = () => {
      photoInput.value.click();
    };
    const updatePhotoPreview = () => {
      const photo = photoInput.value.files[0];
      if (!photo) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        photoPreview.value = e.target.result;
      };
      reader.readAsDataURL(photo);
    };
    const deletePhoto = () => {
      router.delete(route("current-user-photo.destroy"), {
        preserveScroll: true,
        onSuccess: () => {
          photoPreview.value = null;
          clearPhotoFileInput();
        }
      });
    };
    const clearPhotoFileInput = () => {
      var _a;
      if ((_a = photoInput.value) == null ? void 0 : _a.value) {
        photoInput.value.value = null;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$G, mergeProps({ onSubmitted: updateProfileInformation }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Profile Information `);
          } else {
            return [
              createTextVNode(" Profile Information ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Update your account&#39;s profile information and email address. `);
          } else {
            return [
              createTextVNode(" Update your account's profile information and email address. ")
            ];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$page.props.jetstream.managesProfilePhotos) {
              _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}><input id="photo" type="file" class="hidden"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$E, {
                for: "photo",
                value: "Photo"
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle(!photoPreview.value ? null : { display: "none" })}" class="mt-2"${_scopeId}><img${ssrRenderAttr("src", __props.user.profile_photo_url)}${ssrRenderAttr("alt", __props.user.name)} class="rounded-full h-20 w-20 object-cover"${_scopeId}></div><div style="${ssrRenderStyle(photoPreview.value ? null : { display: "none" })}" class="mt-2"${_scopeId}><span class="block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center" style="${ssrRenderStyle("background-image: url('" + photoPreview.value + "');")}"${_scopeId}></span></div>`);
              _push2(ssrRenderComponent(_sfc_main$C, {
                class: "mt-2 me-2",
                type: "button",
                onClick: selectNewPhoto
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Select A New Photo `);
                  } else {
                    return [
                      createTextVNode(" Select A New Photo ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (__props.user.profile_photo_path) {
                _push2(ssrRenderComponent(_sfc_main$C, {
                  type: "button",
                  class: "mt-2",
                  onClick: deletePhoto
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Remove Photo `);
                    } else {
                      return [
                        createTextVNode(" Remove Photo ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_sfc_main$F, {
                message: unref(form).errors.photo,
                class: "mt-2"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$E, {
              for: "name",
              value: "Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "name",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              type: "text",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$F, {
              message: unref(form).errors.name,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$E, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$F, {
              message: unref(form).errors.email,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            if (_ctx.$page.props.jetstream.hasEmailVerification && __props.user.email_verified_at === null) {
              _push2(`<div${_scopeId}><p class="text-sm mt-2 dark:text-white"${_scopeId}> Your email address is unverified. `);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("verification.send"),
                method: "post",
                as: "button",
                class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
                onClick: sendEmailVerification
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Click here to re-send the verification email. `);
                  } else {
                    return [
                      createTextVNode(" Click here to re-send the verification email. ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</p><div style="${ssrRenderStyle(verificationLinkSent.value ? null : { display: "none" })}" class="mt-2 font-medium text-sm text-green-600 dark:text-green-400"${_scopeId}> A new verification link has been sent to your email address. </div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              _ctx.$page.props.jetstream.managesProfilePhotos ? (openBlock(), createBlock("div", {
                key: 0,
                class: "col-span-6 sm:col-span-4"
              }, [
                createVNode("input", {
                  id: "photo",
                  ref_key: "photoInput",
                  ref: photoInput,
                  type: "file",
                  class: "hidden",
                  onChange: updatePhotoPreview
                }, null, 544),
                createVNode(_sfc_main$E, {
                  for: "photo",
                  value: "Photo"
                }),
                withDirectives(createVNode("div", { class: "mt-2" }, [
                  createVNode("img", {
                    src: __props.user.profile_photo_url,
                    alt: __props.user.name,
                    class: "rounded-full h-20 w-20 object-cover"
                  }, null, 8, ["src", "alt"])
                ], 512), [
                  [vShow, !photoPreview.value]
                ]),
                withDirectives(createVNode("div", { class: "mt-2" }, [
                  createVNode("span", {
                    class: "block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center",
                    style: "background-image: url('" + photoPreview.value + "');"
                  }, null, 4)
                ], 512), [
                  [vShow, photoPreview.value]
                ]),
                createVNode(_sfc_main$C, {
                  class: "mt-2 me-2",
                  type: "button",
                  onClick: withModifiers(selectNewPhoto, ["prevent"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Select A New Photo ")
                  ]),
                  _: 1
                }),
                __props.user.profile_photo_path ? (openBlock(), createBlock(_sfc_main$C, {
                  key: 0,
                  type: "button",
                  class: "mt-2",
                  onClick: withModifiers(deletePhoto, ["prevent"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Remove Photo ")
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode(_sfc_main$F, {
                  message: unref(form).errors.photo,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$E, {
                  for: "name",
                  value: "Name"
                }),
                createVNode(_sfc_main$A, {
                  id: "name",
                  modelValue: unref(form).name,
                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                  type: "text",
                  class: "mt-1 block w-full",
                  required: "",
                  autocomplete: "name"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$F, {
                  message: unref(form).errors.name,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$E, {
                  for: "email",
                  value: "Email"
                }),
                createVNode(_sfc_main$A, {
                  id: "email",
                  modelValue: unref(form).email,
                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                  type: "email",
                  class: "mt-1 block w-full",
                  required: "",
                  autocomplete: "username"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$F, {
                  message: unref(form).errors.email,
                  class: "mt-2"
                }, null, 8, ["message"]),
                _ctx.$page.props.jetstream.hasEmailVerification && __props.user.email_verified_at === null ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("p", { class: "text-sm mt-2 dark:text-white" }, [
                    createTextVNode(" Your email address is unverified. "),
                    createVNode(unref(Link), {
                      href: _ctx.route("verification.send"),
                      method: "post",
                      as: "button",
                      class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
                      onClick: withModifiers(sendEmailVerification, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Click here to re-send the verification email. ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ]),
                  withDirectives(createVNode("div", { class: "mt-2 font-medium text-sm text-green-600 dark:text-green-400" }, " A new verification link has been sent to your email address. ", 512), [
                    [vShow, verificationLinkSent.value]
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$O, {
              on: unref(form).recentlySuccessful,
              class: "me-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Saved. `);
                } else {
                  return [
                    createTextVNode(" Saved. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Save `);
                } else {
                  return [
                    createTextVNode(" Save ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$O, {
                on: unref(form).recentlySuccessful,
                class: "me-3"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Saved. ")
                ]),
                _: 1
              }, 8, ["on"]),
              createVNode(_sfc_main$D, {
                class: { "opacity-25": unref(form).processing },
                disabled: unref(form).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Save ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    confirmsTwoFactorAuthentication: Boolean,
    sessions: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$s, mergeProps({ title: "Profile" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"${_scopeId}> Profile </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight" }, " Profile ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"${_scopeId}>`);
            if (_ctx.$page.props.jetstream.canUpdateProfileInformation) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                user: _ctx.$page.props.auth.user
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.jetstream.canUpdatePassword) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$4, { class: "mt-10 sm:mt-0" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.jetstream.canManageTwoFactorAuthentication) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$5, {
                "requires-confirmation": __props.confirmsTwoFactorAuthentication,
                class: "mt-10 sm:mt-0"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$7, {
              sessions: __props.sessions,
              class: "mt-10 sm:mt-0"
            }, null, _parent2, _scopeId));
            if (_ctx.$page.props.jetstream.hasAccountDeletionFeatures) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$8, { class: "mt-10 sm:mt-0" }, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8" }, [
                  _ctx.$page.props.jetstream.canUpdateProfileInformation ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode(_sfc_main$3, {
                      user: _ctx.$page.props.auth.user
                    }, null, 8, ["user"]),
                    createVNode(SectionBorder)
                  ])) : createCommentVNode("", true),
                  _ctx.$page.props.jetstream.canUpdatePassword ? (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode(_sfc_main$4, { class: "mt-10 sm:mt-0" }),
                    createVNode(SectionBorder)
                  ])) : createCommentVNode("", true),
                  _ctx.$page.props.jetstream.canManageTwoFactorAuthentication ? (openBlock(), createBlock("div", { key: 2 }, [
                    createVNode(_sfc_main$5, {
                      "requires-confirmation": __props.confirmsTwoFactorAuthentication,
                      class: "mt-10 sm:mt-0"
                    }, null, 8, ["requires-confirmation"]),
                    createVNode(SectionBorder)
                  ])) : createCommentVNode("", true),
                  createVNode(_sfc_main$7, {
                    sessions: __props.sessions,
                    class: "mt-10 sm:mt-0"
                  }, null, 8, ["sessions"]),
                  _ctx.$page.props.jetstream.hasAccountDeletionFeatures ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                    createVNode(SectionBorder),
                    createVNode(_sfc_main$8, { class: "mt-10 sm:mt-0" })
                  ], 64)) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Show.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  __name: "TermsOfService",
  __ssrInlineRender: true,
  props: {
    terms: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Terms of Service" }, null, _parent));
      _push(`<div class="font-sans text-gray-900 dark:text-gray-100 antialiased"><div class="pt-4 bg-gray-100 dark:bg-gray-900"><div class="min-h-screen flex flex-col items-center pt-6 sm:pt-0"><div>`);
      _push(ssrRenderComponent(_sfc_main$j, null, null, _parent));
      _push(`</div><div class="w-full sm:max-w-2xl mt-6 p-6 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg prose dark:prose-invert">${__props.terms ?? ""}</div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/TermsOfService.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    canLogin: {
      type: Boolean
    },
    canRegister: {
      type: Boolean
    },
    laravelVersion: {
      type: String,
      required: true
    },
    phpVersion: {
      type: String,
      required: true
    },
    pages: {
      type: Array,
      default: null
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Welcome" }, null, _parent));
      _push(`<div class="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50"><img id="background" class="absolute -left-20 top-0 max-w-[877px]" src="https://laravel.com/assets/img/welcome/background.svg"><div class="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white"><div class="relative w-full max-w-2xl px-6 lg:max-w-7xl"><header class="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3"><div class="flex lg:justify-center lg:col-start-2"><svg class="h-12 w-auto text-white lg:h-16 lg:text-[#FF2D20]" viewBox="0 0 62 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z" fill="currentColor"></path></svg></div>`);
      if (__props.canLogin) {
        _push(`<nav class="-mx-3 flex flex-1 justify-end">`);
        if (_ctx.$page.props.auth.user) {
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("dashboard"),
            class: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Dashboard `);
              } else {
                return [
                  createTextVNode(" Dashboard ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("login"),
            class: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Log in `);
              } else {
                return [
                  createTextVNode(" Log in ")
                ];
              }
            }),
            _: 1
          }, _parent));
          if (__props.canRegister) {
            _push(ssrRenderComponent(unref(Link), {
              href: _ctx.route("register"),
              class: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` Register `);
                } else {
                  return [
                    createTextVNode(" Register ")
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        }
        _push(`</nav>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><main class="mt-6"><div class="grid gap-6 lg:grid-cols-2 lg:gap-8"><!--[-->`);
      ssrRenderList(__props.pages, (page) => {
        _push(ssrRenderComponent(unref(Link), {
          href: `/${page.slug}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(page.slug)}`);
            } else {
              return [
                createTextVNode(toDisplayString(page.slug), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><a href="https://laravel.com/docs" id="docs-card" class="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"><div id="screenshot-container" class="relative flex w-full flex-1 items-stretch"><img src="https://laravel.com/assets/img/welcome/docs-light.svg" alt="Laravel documentation screenshot" class="aspect-video h-full w-full flex-1 rounded-[10px] object-top object-cover drop-shadow-[0px_4px_34px_rgba(0,0,0,0.06)] dark:hidden"><img src="https://laravel.com/assets/img/welcome/docs-dark.svg" alt="Laravel documentation screenshot" class="hidden aspect-video h-full w-full flex-1 rounded-[10px] object-top object-cover drop-shadow-[0px_4px_34px_rgba(0,0,0,0.25)] dark:block"><div class="absolute -bottom-16 -left-16 h-40 w-[calc(100%+8rem)] bg-gradient-to-b from-transparent via-white to-white dark:via-zinc-900 dark:to-zinc-900"></div></div><div class="relative flex items-center gap-6 lg:items-end"><div id="docs-card-content" class="flex items-start gap-6 lg:flex-col"><div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16"><svg class="size-5 sm:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="#FF2D20" d="M23 4a1 1 0 0 0-1.447-.894L12.224 7.77a.5.5 0 0 1-.448 0L2.447 3.106A1 1 0 0 0 1 4v13.382a1.99 1.99 0 0 0 1.105 1.79l9.448 4.728c.14.065.293.1.447.1.154-.005.306-.04.447-.105l9.453-4.724a1.99 1.99 0 0 0 1.1-1.789V4ZM3 6.023a.25.25 0 0 1 .362-.223l7.5 3.75a.251.251 0 0 1 .138.223v11.2a.25.25 0 0 1-.362.224l-7.5-3.75a.25.25 0 0 1-.138-.22V6.023Zm18 11.2a.25.25 0 0 1-.138.224l-7.5 3.75a.249.249 0 0 1-.329-.099.249.249 0 0 1-.033-.12V9.772a.251.251 0 0 1 .138-.224l7.5-3.75a.25.25 0 0 1 .362.224v11.2Z"></path><path fill="#FF2D20" d="m3.55 1.893 8 4.048a1.008 1.008 0 0 0 .9 0l8-4.048a1 1 0 0 0-.9-1.785l-7.322 3.706a.506.506 0 0 1-.452 0L4.454.108a1 1 0 0 0-.9 1.785H3.55Z"></path></svg></div><div class="pt-3 sm:pt-5 lg:pt-0"><h2 class="text-xl font-semibold text-black dark:text-white">Documentation</h2><p class="mt-4 text-sm/relaxed"> Laravel has wonderful documentation covering every aspect of the framework. Whether you are a newcomer or have prior experience with Laravel, we recommend reading our documentation from beginning to end. </p></div></div><svg class="size-6 shrink-0 stroke-[#FF2D20]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></div></a><div class="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800"><div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16"><svg class="size-5 sm:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g fill="#FF2D20"><path d="M16.597 12.635a.247.247 0 0 0-.08-.237 2.234 2.234 0 0 1-.769-1.68c.001-.195.03-.39.084-.578a.25.25 0 0 0-.09-.267 8.8 8.8 0 0 0-4.826-1.66.25.25 0 0 0-.268.181 2.5 2.5 0 0 1-2.4 1.824.045.045 0 0 0-.045.037 12.255 12.255 0 0 0-.093 3.86.251.251 0 0 0 .208.214c2.22.366 4.367 1.08 6.362 2.118a.252.252 0 0 0 .32-.079 10.09 10.09 0 0 0 1.597-3.733ZM13.616 17.968a.25.25 0 0 0-.063-.407A19.697 19.697 0 0 0 8.91 15.98a.25.25 0 0 0-.287.325c.151.455.334.898.548 1.328.437.827.981 1.594 1.619 2.28a.249.249 0 0 0 .32.044 29.13 29.13 0 0 0 2.506-1.99ZM6.303 14.105a.25.25 0 0 0 .265-.274 13.048 13.048 0 0 1 .205-4.045.062.062 0 0 0-.022-.07 2.5 2.5 0 0 1-.777-.982.25.25 0 0 0-.271-.149 11 11 0 0 0-5.6 2.815.255.255 0 0 0-.075.163c-.008.135-.02.27-.02.406.002.8.084 1.598.246 2.381a.25.25 0 0 0 .303.193 19.924 19.924 0 0 1 5.746-.438ZM9.228 20.914a.25.25 0 0 0 .1-.393 11.53 11.53 0 0 1-1.5-2.22 12.238 12.238 0 0 1-.91-2.465.248.248 0 0 0-.22-.187 18.876 18.876 0 0 0-5.69.33.249.249 0 0 0-.179.336c.838 2.142 2.272 4 4.132 5.353a.254.254 0 0 0 .15.048c1.41-.01 2.807-.282 4.117-.802ZM18.93 12.957l-.005-.008a.25.25 0 0 0-.268-.082 2.21 2.21 0 0 1-.41.081.25.25 0 0 0-.217.2c-.582 2.66-2.127 5.35-5.75 7.843a.248.248 0 0 0-.09.299.25.25 0 0 0 .065.091 28.703 28.703 0 0 0 2.662 2.12.246.246 0 0 0 .209.037c2.579-.701 4.85-2.242 6.456-4.378a.25.25 0 0 0 .048-.189 13.51 13.51 0 0 0-2.7-6.014ZM5.702 7.058a.254.254 0 0 0 .2-.165A2.488 2.488 0 0 1 7.98 5.245a.093.093 0 0 0 .078-.062 19.734 19.734 0 0 1 3.055-4.74.25.25 0 0 0-.21-.41 12.009 12.009 0 0 0-10.4 8.558.25.25 0 0 0 .373.281 12.912 12.912 0 0 1 4.826-1.814ZM10.773 22.052a.25.25 0 0 0-.28-.046c-.758.356-1.55.635-2.365.833a.25.25 0 0 0-.022.48c1.252.43 2.568.65 3.893.65.1 0 .2 0 .3-.008a.25.25 0 0 0 .147-.444c-.526-.424-1.1-.917-1.673-1.465ZM18.744 8.436a.249.249 0 0 0 .15.228 2.246 2.246 0 0 1 1.352 2.054c0 .337-.08.67-.23.972a.25.25 0 0 0 .042.28l.007.009a15.016 15.016 0 0 1 2.52 4.6.25.25 0 0 0 .37.132.25.25 0 0 0 .096-.114c.623-1.464.944-3.039.945-4.63a12.005 12.005 0 0 0-5.78-10.258.25.25 0 0 0-.373.274c.547 2.109.85 4.274.901 6.453ZM9.61 5.38a.25.25 0 0 0 .08.31c.34.24.616.561.8.935a.25.25 0 0 0 .3.127.631.631 0 0 1 .206-.034c2.054.078 4.036.772 5.69 1.991a.251.251 0 0 0 .267.024c.046-.024.093-.047.141-.067a.25.25 0 0 0 .151-.23A29.98 29.98 0 0 0 15.957.764a.25.25 0 0 0-.16-.164 11.924 11.924 0 0 0-2.21-.518.252.252 0 0 0-.215.076A22.456 22.456 0 0 0 9.61 5.38Z"></path></g></svg></div><div class="pt-3 sm:pt-5"><h2 class="text-xl font-semibold text-black dark:text-white">Vibrant Ecosystem</h2><p class="mt-4 text-sm/relaxed"> Laravel&#39;s robust library of first-party tools and libraries, such as <a href="https://forge.laravel.com" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white dark:focus-visible:ring-[#FF2D20]">Forge</a>, <a href="https://vapor.laravel.com" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Vapor</a>, <a href="https://nova.laravel.com" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Nova</a>, and <a href="https://envoyer.io" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Envoyer</a> help you take your projects to the next level. Pair them with powerful open source libraries like <a href="https://laravel.com/docs/billing" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Cashier</a>, <a href="https://laravel.com/docs/dusk" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Dusk</a>, <a href="https://laravel.com/docs/broadcasting" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Echo</a>, <a href="https://laravel.com/docs/horizon" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Horizon</a>, <a href="https://laravel.com/docs/sanctum" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Sanctum</a>, <a href="https://laravel.com/docs/telescope" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Telescope</a>, and more. </p></div></div></div></main><footer class="py-16 text-center text-sm text-black dark:text-white/70"> Laravel v${ssrInterpolate(__props.laravelVersion)} (PHP v${ssrInterpolate(__props.phpVersion)}) </footer></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/API/Index.vue": __vite_glob_0_0, "./Pages/API/Partials/ApiTokenManager.vue": __vite_glob_0_1, "./Pages/Admin/Index.vue": __vite_glob_0_2, "./Pages/Admin/Page/Edit.vue": __vite_glob_0_3, "./Pages/Admin/Page/Index.vue": __vite_glob_0_4, "./Pages/Admin/Page/Show.vue": __vite_glob_0_5, "./Pages/Admin/Section/Edit.vue": __vite_glob_0_6, "./Pages/Auth/ConfirmPassword.vue": __vite_glob_0_7, "./Pages/Auth/ForgotPassword.vue": __vite_glob_0_8, "./Pages/Auth/Login.vue": __vite_glob_0_9, "./Pages/Auth/Register.vue": __vite_glob_0_10, "./Pages/Auth/ResetPassword.vue": __vite_glob_0_11, "./Pages/Auth/TwoFactorChallenge.vue": __vite_glob_0_12, "./Pages/Auth/VerifyEmail.vue": __vite_glob_0_13, "./Pages/Dashboard.vue": __vite_glob_0_14, "./Pages/Page/Show.vue": __vite_glob_0_15, "./Pages/PrivacyPolicy.vue": __vite_glob_0_16, "./Pages/Profile/Partials/DeleteUserForm.vue": __vite_glob_0_17, "./Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue": __vite_glob_0_18, "./Pages/Profile/Partials/TwoFactorAuthenticationForm.vue": __vite_glob_0_19, "./Pages/Profile/Partials/UpdatePasswordForm.vue": __vite_glob_0_20, "./Pages/Profile/Partials/UpdateProfileInformationForm.vue": __vite_glob_0_21, "./Pages/Profile/Show.vue": __vite_glob_0_22, "./Pages/TermsOfService.vue": __vite_glob_0_23, "./Pages/Welcome.vue": __vite_glob_0_24 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
