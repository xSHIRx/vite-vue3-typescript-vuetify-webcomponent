import { defineCustomElement } from "vue";
import myPrettyForm from "./components/MyPrettyForm.ce.vue";

const formComponent = defineCustomElement(myPrettyForm);

customElements.define("my-pretty-form", formComponent);
