type Env = {
  STATIC_ASSETS: {
    fetch: typeof fetch;
  };
};

export default {
  fetch(request: Request, env: Env) {
    return env.STATIC_ASSETS.fetch(request);
  },
};
