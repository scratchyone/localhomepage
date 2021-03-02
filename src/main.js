import App from './App.svelte';
import services from './services.json';

const app = new App({
  target: document.body,
  props: {
    services: services,
  },
});

export default app;
