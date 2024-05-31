import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  // Function to store data in local storage
  setLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Function to get data from local storage
  getLocalStorage(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  // Function to remove data from local storage
  removeLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }

  // Function to clear all data from local storage
  clearLocalStorage(): void {
    localStorage.clear();
  }

  // Function to store data in session storage
  setSessionStorage(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  // Function to get data from session storage
  getSessionStorage(key: string): any {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  // Function to remove data from session storage
  removeSessionStorage(key: string): void {
    sessionStorage.removeItem(key);
  }

  // Function to clear all data from session storage
  clearSessionStorage(): void {
    sessionStorage.clear();
  }

  // Function to set cookie
  setCookie(name: string, value: string, days: number): void {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
  }

  // Function to get cookie value by name
  getCookie(name: string): string | null {
    const nameEQ = name + '=';
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length, cookie.length);
      }
    }
    return null;
  }

  // Function to erase cookie by name
  eraseCookie(name: string): void {
    document.cookie = name + '=; Max-Age=-99999999;';
  }
}
