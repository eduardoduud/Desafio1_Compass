import { ProductView } from "./views/productView.js";
import { bindEvents } from "./event-binders/bindUiEvents.js";

const view = new ProductView();

bindEvents();
