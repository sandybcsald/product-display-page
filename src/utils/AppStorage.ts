function AppStorage() {
  function set(key: string, value: any) {
    window?.localStorage?.setItem(key, JSON.stringify(value));
  }

  function get(key: string) {
    const value = window?.localStorage?.getItem(key);
    return JSON.parse(value || "null");
  }

  function remove(key: string) {
    window?.localStorage?.removeItem(key);
  }

  function setItem(key: string, value: any) {
    window?.localStorage?.setItem(key, btoa(unescape(encodeURIComponent(value))));
  }

  function getItem(key: string) {
    const value = window?.localStorage?.getItem(key);
    return value ? decodeURIComponent(escape(window.atob(value))) : "null";
  }

  function removeItem(key: string) {
    window?.localStorage?.removeItem(key);
  }

  return { set, get, remove, getItem, setItem, removeItem };
}

export default AppStorage();
