const CLOUDSTACK_ENDPOINT = 'http://172.16.41.101:8080';
const PULSE_PLUGIN_ENDPOINT = 'http://170.16.41.101:8081';
const WEBSHELL_PLUGIN_ENDPOINT = 'http://172.16.41.101:8082';

function onProxyRes(proxyRes, req, res) {
  var cookies = proxyRes.headers[ 'set-cookie' ];
  var cookieRegex = /Secure/i;

  if (cookies) {
    var newCookie = cookies.map(function (cookie) {
      if (cookieRegex.test(cookie)) {
        return cookie.replace(cookieRegex, '');
      }
      return cookie;
    });
    delete proxyRes.headers[ 'set-cookie' ];
    proxyRes.headers[ 'set-cookie' ] = newCookie;
  }
}

const apiProxyConfig = {
  context: [
    '/client/api',
    '/client/console'
  ],
  target: CLOUDSTACK_ENDPOINT,
  secure: false
};

// If server works over https need to change Secure Cookie
if (CLOUDSTACK_ENDPOINT.indexOf('https') === 0) {
  apiProxyConfig.onProxyRes = onProxyRes;
}

const pulseProxyConfig = {
  context: [ '/cs-extensions/pulse/**' ],
  target: PULSE_PLUGIN_ENDPOINT,
  secure: false,
  pathRewrite: { '^/cs-extensions/pulse': '' }
};

const webShellProxyConfig = {
  context: [ '/cs-extensions/webshell/**' ],
  target: WEBSHELL_PLUGIN_ENDPOINT,
  secure: false,
  pathRewrite: { '^/cs-extensions/webshell': '' }
}

const PROXY_CONFIG = [
  apiProxyConfig,
  pulseProxyConfig,
  // webShellProxyConfig
];

module.exports = PROXY_CONFIG;
