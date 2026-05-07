
Ye sab **Event Object properties** hoti hain. Jab bhi aap click, keypress, mouse move jaise events lagate ho, browser ek object deta hai jisme event ki puri detail hoti hai. Usko hum usually `e` ya `event` bolte hain.

Example:

```js
document.addEventListener('click', function(e) {
  console.log(e);
});
```

Ab chalo ek-ek property simple language me samajhte hain 👇

---

## ✅ 1. `type`

👉 Kaunsa event hua hai.

```js
console.log(e.type);
```

Output example:

```
click
keydown
mousemove
```

Matlab user ne kya action kiya.

---

## ✅ 2. `timeStamp`

👉 Event kab trigger hua (page load ke baad milliseconds me).

```js
console.log(e.timeStamp);
```

Use case: performance testing, delay measure karna.

---

## ✅ 3. `defaultPrevented`

👉 Kya event ka default behavior roka gaya hai ya nahi.

```js
e.preventDefault();
console.log(e.defaultPrevented); // true
```

Example: link click karne par page open hona rokna.

---

## ✅ 4. `target`

👉 Actual element jis par user ne click kiya.

```js
console.log(e.target);
```

Agar image par click kiya → `<img>` milega.

---

## ✅ 5. `currentTarget`

👉 Jis element par event listener laga hai.

```js
console.log(e.currentTarget);
```

Event bubbling me useful hota hai.

Example:

* Listener UL par laga
* Click IMG par hua
  → `target = IMG`
  → `currentTarget = UL`

---

## ✅ 6. `toElement` / `srcElement`

👉 Old browser properties. Mostly `target` ka alternate hai.
Aajkal rarely use hota hai.

---

## ✅ 7. `clientX` / `clientY`

👉 Mouse click screen ke visible area me kaha hua (browser window ke andar).

```js
console.log(e.clientX, e.clientY);
```

Use case: drawing apps, drag-drop.

---

## ✅ 8. `screenX` / `screenY`

👉 Mouse click pure screen ke hisab se kaha hua.

Monitor ke top-left se distance.

---

## ✅ 9. `altKey`

👉 Kya Alt key press thi jab event hua.

```js
if (e.altKey) {
  console.log("Alt key pressed");
}
```

---

## ✅ 10. `ctrlKey`

👉 Ctrl key press thi ya nahi.

Shortcut detect karne ke kaam aata hai.

---

## ✅ 11. `shiftKey`

👉 Shift key press thi ya nahi.

---

## ✅ 12. `keyCode`

👉 Kaunsa key press hua (old method).
Aajkal `e.key` use karte hain.

```js
console.log(e.key); // a, Enter, Escape etc.
```

---

# 🧪 Small Practice Example

Isko try karo:

```js
document.addEventListener('click', function(e) {
  console.log("Type:", e.type);
  console.log("Target:", e.target.tagName);
  console.log("Mouse X:", e.clientX);
  console.log("Mouse Y:", e.clientY);
  console.log("Ctrl Pressed:", e.ctrlKey);
});
```

Click karo aur console me values dekho 👀

---
