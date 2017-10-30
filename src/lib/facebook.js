const appId = '1462447443831110';
export const redirectUrl = process.env.NODE_ENV && process.env.NODE_ENV === 'production'
  ? 'https://dvkiin.xyz/bfp-react/profile'
  : 'http://local.dvkiin.xyz:3000/profile';
const facebookCookie = 'fb_login';
const facebookRelogKey = 'auto_relog_facebook';

export const facebookLoginUrl = 'https://www.facebook.com/v2.10/dialog/oauth' +
  `?client_id=${appId}` +
  `&redirect_uri=${redirectUrl}` +
  '&response_type=token' +
  '&scope=public_profile,user_friends';

export function saveAccessToken(accessToken, expiresInSeconds) {
  const expiredDate = new Date(new Date().getTime() + expiresInSeconds * 1000).toGMTString();
  document.cookie = `${facebookCookie}=${accessToken};expires=${expiredDate}`;
  window.localStorage.setItem(facebookRelogKey, true);
  window.history.replaceState(null, null, window.location.href.split('?')[0]);
}

const getCookie = function (name) {
  const value = '; ' + document.cookie;
  const parts = value.split('; ' + name + '=');
  if (parts.length === 2) return parts.pop().split(';').shift();
};

export function getAccessToken() {
  return getCookie(facebookCookie);
}

export function shouldRelog() {
  const storageValue = window.localStorage.getItem(facebookRelogKey);
  return storageValue && storageValue === 'true';
}

export function logout() {
  const expiredDate = new Date(new Date().getTime() - 1).toGMTString();
  document.cookie = `${facebookCookie}=null;expires=${expiredDate}`;
  window.localStorage.setItem(facebookRelogKey, false);
}
