const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const host = 'http://localhost:3000'; // Application host (NOT service host - that can be anything)
const interval = 300;
const timeout = 8000;
const DEBUG = false;
const slowMo = 500;

const mockData = {
  blog: {
    "-MSbypx-13fHPDyzNRtf": {
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis maiores eligendi quos quidem ex numquam hic. Eos quos similique voluptates accusamus quae voluptas magni ad a ipsum, quia enim debitis cumque quibusdam exercitationem architecto sint nostrum dolorum dolor repudiandae nulla deserunt, dolorem itaque!",
      id: "-MSbypx-13fHPDyzNRtf",
      title: "Unit Testing And Modules",
    },
  },
  comments: {
    "-MSgyQMjBNfYjW2m6r97": {
      id: "-MSgyQMjBNfYjW2m6r97",
      postId: "-MSbypx-13fHPDyzNRtf",
      text: "A very interesting post!",
    },
    "-MSgySbWEFw3rhCfIIns": {
      id: "-MSgySbWEFw3rhCfIIns",
      postId: "-MSbypx-13fHPDyzNRtf",
      text: "Unit Testing is a useful testing technique in programming.",
    },
  },
};

const endpoints = {
  blog: '/jsonstore/blog/posts',
  comments: '/jsonstore/blog/comments',
};

let browser;
let context;
let page;

describe('E2E tests', function () {
  // Setup
  this.timeout(DEBUG ? 120000 : timeout);
  before(
    async () =>
      (browser = await chromium.launch(
        DEBUG ? { headless: false, slowMo } : {}
      ))
  );
  after(async () => await browser.close());
  beforeEach(async () => {
    context = await browser.newContext();
    setupContext(context);
    page = await context.newPage();
  });
  afterEach(async () => {
    await page.close();
    await context.close();
  });

  // Test proper
  describe('Blog Info', () => {
    it('Load Posts correct API call', async () => {
      const { get } = await handle(endpoints.blog);
      const isCalled = get().isHandled;

      await page.goto(host);
      await page.waitForSelector('#btnLoadPosts', { timeout: interval });
      await page.click('text=Load Posts', { timeout: interval });
      await page.waitForSelector('#posts' , { timeout: interval });

      expect(isCalled()).to.be.true;
    });

    it('Load Posts', async () => {
      const data = mockData.blog;
      const { get } = await handle(endpoints.blog);
      get(data);

      await page.goto(host);
      await page.waitForSelector('#btnLoadPosts', { timeout: interval });
      await page.click('text=Load Posts', { timeout: interval });

      const post = await page.$$eval(`#posts`, (t) =>
        t.map((s) => s.textContent)
      );
      expect(post.length).to.equal(Object.keys(data).length);
    });

    it('Check post title', async () => {
      const data = mockData.blog;
      const comment = mockData.comments;
      const { get } = await handle(endpoints.blog);
      get(data);

      const { get2 } = await handle(endpoints.comments);

      get2(comment);

      await page.goto(host);
      await page.waitForSelector('#btnLoadPosts', { timeout: interval });
      await page.click('text=Load Posts', { timeout: interval });

      await page.waitForSelector('#btnViewPost', { timeout: interval });
      await page.click('text=View', { timeout: interval });

      const postTitle = await page.$eval(`#post-title`, (el) => el.textContent);
      const expectedTitle = data["-MSbypx-13fHPDyzNRtf"].title;
      expect(postTitle).to.equal(expectedTitle);
    });

    it('Check post body', async () => {
      const data = mockData.blog;
      const comment = mockData.comments;

      const { get } = await handle(endpoints.blog);
      get(data);
      const { get2 } = await handle(endpoints.comments);

      get2(comment);
      await page.goto(host);
      await page.waitForSelector('#btnLoadPosts', { timeout: interval });
      await page.click('text=Load Posts', { timeout: interval });

      await page.waitForSelector('#btnViewPost', { timeout: interval });
      await page.click('text=View', { timeout: interval });

      const postBody = await page.$eval(`#post-body`, (el) => el.textContent);
      const expectedBody = data["-MSbypx-13fHPDyzNRtf"].body;
      expect(postBody).to.equal(expectedBody);
    });
  });
});

async function setupContext(context) {
  // Catalog and Details
  await handleContext(context, endpoints.blog, { get: mockData.blog });

  await handleContext(
    context,
    '/jsonstore/blog/posts/-MSbypx-13fHPDyzNRtf',
    { get: mockData.blog["-MSbypx-13fHPDyzNRtf"] }
  );


  await handleContext(context, endpoints.comments('1001'), {
    get: mockData.comments[0],
  });

  await handleContext(context, endpoints.details('1001'), {
    get: mockData.catalog[0],
  });
  await handleContext(context, endpoints.details('1002'), {
    get: mockData.catalog[1],
  });
  await handleContext(context, endpoints.details('1003'), {
    get: mockData.catalog[2],
  });

  await handleContext(
    endpoints.profile('0001'),
    { get: mockData.catalog.slice(0, 2) },
    context
  );

  await handleContext(endpoints.total('1001'), { get: 6 }, context);
  await handleContext(endpoints.total('1002'), { get: 4 }, context);
  await handleContext(endpoints.total('1003'), { get: 7 }, context);

  await handleContext(endpoints.own('1001', '0001'), { get: 1 }, context);
  await handleContext(endpoints.own('1002', '0001'), { get: 0 }, context);
  await handleContext(endpoints.own('1003', '0001'), { get: 0 }, context);

  // Block external calls
  await context.route(
    (url) => url.href.slice(0, host.length) != host,
    (route) => {
      if (DEBUG) {
        console.log('Preventing external call to ' + route.request().url());
      }
      route.abort();
    }
  );
}

function handle(match, handlers) {
  return handleRaw.call(page, match, handlers);
}

function handleContext(context, match, handlers) {
  return handleRaw.call(context, match, handlers);
}

async function handleRaw(match, handlers) {
  const methodHandlers = {};
  const result = {
    get: (returns, options) => request('GET', returns, options),
    get2: (returns, options) => request('GET', returns, options),
    post: (returns, options) => request('POST', returns, options),
    put: (returns, options) => request('PUT', returns, options),
    patch: (returns, options) => request('PATCH', returns, options),
    del: (returns, options) => request('DELETE', returns, options),
    delete: (returns, options) => request('DELETE', returns, options),
  };

  const context = this;

  await context.route(urlPredicate, (route, request) => {
    if (DEBUG) {
      console.log('>>>', request.method(), request.url());
    }

    const handler = methodHandlers[request.method().toLowerCase()];
    if (handler == undefined) {
      route.continue();
    } else {
      handler(route, request);
    }
  });

  if (handlers) {
    for (let method in handlers) {
      if (typeof handlers[method] == 'function') {
        handlers[method](result[method]);
      } else {
        result[method](handlers[method]);
      }
    }
  }

  return result;

  function request(method, returns, options) {
    let handled = false;

    methodHandlers[method.toLowerCase()] = (route, request) => {
      handled = true;
      route.fulfill(respond(returns, options));
    };

    return {
      onRequest: () => context.waitForRequest(urlPredicate),
      onResponse: () => context.waitForResponse(urlPredicate),
      isHandled: () => handled,
    };
  }

  function urlPredicate(current) {
    if (current instanceof URL) {
      return current.href.toLowerCase().includes(match.toLowerCase());
    } else {
      return current.url().toLowerCase().includes(match.toLowerCase());
    }
  }
}

function respond(data, options = {}) {
  options = Object.assign(
    {
      json: true,
      status: 200,
    },
    options
  );

  const headers = {
    'Access-Control-Allow-Origin': '*',
  };
  if (options.json) {
    headers['Content-Type'] = 'application/json';
    data = JSON.stringify(data);
  }

  return {
    status: options.status,
    headers,
    body: data,
  };
}