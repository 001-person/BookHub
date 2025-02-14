import { createApp } from 'vue';
import mitt from 'mitt';
const app = createApp({});
export const eventBus = app.config.globalProperties.$emitter = app.config.globalProperties.$emitter || createEventBus();

function createEventBus() {
  const emitter = mitt();
  return emitter;
}