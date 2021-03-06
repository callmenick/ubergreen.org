const SW_ROOT = '/sw.js';
const SW_VERSION = '1.0.1';
const SW_PATH = `${SW_ROOT}?version=${SW_VERSION}`;

const cannot =
  typeof window === 'undefined' ||
  typeof navigator === 'undefined' ||
  !('serviceWorker' in navigator);

export function register() {
  if (cannot) {
    console.info('SW not available');
    return false;
  }

  if (process.env.NODE_ENV === 'development') {
    console.info('SW only available in production');
    return false;
  }

  navigator.serviceWorker.register(SW_PATH).then(
    function(registration) {
      // Registration was successful
      console.log(
        'ServiceWorker registration successful with scope: ',
        registration.scope,
      );
    },
    function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    },
  );
}

export function unregister() {
  if (cannot) {
    console.info('SW not available');
    return false;
  }

  navigator.serviceWorker.ready.then((registration) => {
    registration.unregister();
  });
}
