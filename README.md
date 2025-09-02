# React Outside Click Handler

A lightweight React hook that returns a ref and triggers a callback when clicks occur outside the referenced element. Perfect for modals, dropdowns, tooltips, and popovers.

## ✨ Features
- Simple API: just one hook
- Works with any React element
- Handles both mouse and touch events
- Supports `stopPropagation` for preventing outside clicks when needed
- Written in TypeScript

## 📦 Installation

```bash
npm install @junaidakbar076/react-outside-click-handler
```

or with yarn:

```bash
yarn add @junaidakbar076/react-outside-click-handler
```

## 🚀 Usage

```tsx
import React, { useState } from "react";
import { useOutsideClickHandler } from "@junaidakbar076/react-outside-click-handler";

function App() {
  const [open, setOpen] = useState(true);
  const ref = useOutsideClickHandler<HTMLDivElement>(() => {
    setOpen(false);
  });

  return (
    <div>
      {open && (
        <div ref={ref} style={{ border: "1px solid black", padding: "20px" }}>
          Click outside me to close
        </div>
      )}
    </div>
  );
}
```

## 🛑 Prevent Outside Clicks with `stopPropagation`

If you want to stop the outside click handler from firing when clicking *inside* your component,  
you can call `event.stopPropagation()` inside your own handler.

### Example

```tsx
import { useOutsideClickHandler } from "@junaidakbar076/react-outside-click-handler";

function App() {
  const ref = useOutsideClickHandler<HTMLDivElement>((event) => {
    alert("Outside clicked!");
  });

  return (
    <div ref={ref} style={{ border: "2px solid red", padding: "20px" }}>
      <button
        onClick={(e) => {
          e.stopPropagation(); // ⛔ prevents outside click handler
          alert("Inside button clicked");
        }}
      >
        Inside Button
      </button>
    </div>
  );
}
```

## 📖 API

### `useOutsideClickHandler<T extends HTMLElement>(handler?: (event: MouseEvent | TouchEvent) => void): RefObject<T>`

- **handler**: Callback invoked when an outside click occurs. Receives the event object.
- **returns**: A React ref you can assign to any DOM element.

## 📄 License

MIT © 2025 [Junaid Akbar](mailto:junaidakbar076@gmail.com)
