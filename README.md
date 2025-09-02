# react-outside-click-handler

A lightweight React hook that returns a ref and triggers a callback when clicks occur **outside** the referenced element.  
Perfect for modals, dropdowns, tooltips, and popovers.  

---

## 🚀 Installation

```bash
npm install react-outside-click-handler
```

or with yarn:

```bash
yarn add react-outside-click-handler
```

---

## 📦 Usage

```tsx
import React from "react";
import { useOutsideClickHandler } from "react-outside-click-handler";

export default function App() {
  const ref = useOutsideClickHandler<HTMLDivElement>(() => {
    alert("Clicked outside the red box!");
  });

  return (
    <div style={{ padding: "50px" }}>
      <div
        ref={ref}
        style={{
          border: "2px solid red",
          padding: "20px",
          width: "200px",
          textAlign: "center"
        }}
      >
        Click inside me (safe)
      </div>
    </div>
  );
}
```

---

## 📖 API

### `useOutsideClickHandler(handler)`

- **`handler`** *(optional)* → function called when a click/touch happens outside the referenced element.  

**Returns**:  
- A **ref** (`React.RefObject<T>`) that you assign to your target element.  

---

## ✅ Example Use Cases
- Close a **dropdown** when clicking outside.  
- Dismiss a **modal** by clicking outside.  
- Hide a **tooltip/popover** when the user clicks elsewhere.  

---

## ⚙️ Requirements
- React **17+**  
- Works with both **JavaScript** and **TypeScript** projects.  

---

## 📌 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.  

---

## 📜 License
MIT © [Junaid Akbar](mailto:junaidakbar076@gmail.com)  
