// create cookie
document.cookie = "username=Mahfuz";

// Expiration date সহ Cookie
let date = new Date();
date.setTime(date.getTime() + (7*24*60*60*1000)); // 7 দিনের জন্য
document.cookie = "username=Mahfuz; expires=" + date.toUTCString() + "; path=/";


// read cookie
console.log(document.cookie); 
// Output: username=Mahfuz; theme=dark
function getCookie(name) {
  let cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    let [key, value] = cookies[i].split("=");
    if (key === name) return value;
  }
  return null;
}

console.log(getCookie("username")); // Mahfuz


// update cookie
//Cookie আপডেট মানে একই নাম দিয়ে আবার নতুন ভ্যালু সেট করা:
 document.cookie = "username=Yasin; path=/";

//  delete Cookie 
// Cookie মুছতে চাইলে expiry date অতীতের তারিখে সেট করো:

document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

//  নিরাপত্তা সেটিংস
// Secure → কেবল HTTPS এর মাধ্যমে পাঠানো হবে
// 
// HttpOnly → JavaScript দিয়ে পড়া যাবে না, শুধু সার্ভার অ্যাক্সেস করবে
// 
// SameSite → Cross-site request এ Cookie পাঠানো নিয়ন্ত্রণ করে

document.cookie = "token=abc123; Secure; HttpOnly; SameSite=Strict";


// CREATE
function setCookie(name, value, days) {
  let date = new Date();
  date.setTime(date.getTime() + (days*24*60*60*1000));
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// READ
function getCookie(name) {
  let cookies = document.cookie.split("; ");
  for (let c of cookies) {
    let [key, value] = c.split("=");
    if (key === name) return value;
  }
  return null;
}

// UPDATE (setCookie দিয়ে করা যায়)
setCookie("user", "Mahfuz", 7);

// DELETE
function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}


// ১. Cookie কী?
// Cookie হল ছোট ডেটা যা ব্রাউজারে সেভ থাকে এবং সার্ভার বা ক্লায়েন্ট-সাইড থেকে পড়া বা লেখা যায়।
// এগুলো সাধারণত ব্যবহার হয়:
// 
// User authentication (লগইন স্টেট ধরে রাখতে)
// 
// Preferences (ভাষা, থিম সেটিং)
// 
// Tracking (Analytics, Ads)
// 
// ২. Cookie-এর বৈশিষ্ট্য
// বিষয়	বর্ণনা
// Size Limit	প্রায় 4KB (প্রতি cookie)
// Per Domain Limit	প্রায় 20-50 cookies
// Lifetime	Expiration date থাকলে স্থায়ী, না থাকলে session cookie
// Scope	Domain + Path এর মাধ্যমে নিয়ন্ত্রণ করা যায়
// Security Flags	Secure, HttpOnly, SameSite