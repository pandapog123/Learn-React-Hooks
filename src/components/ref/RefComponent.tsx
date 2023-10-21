import { FormEvent, useRef } from "react";

export default function RefComponent() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!inputRef.current) {
      return;
    }

    alert(`Your message is "${inputRef.current.value}"`);

    inputRef.current.value = "";
  }

  return (
    <>
      <h1>Ref Component</h1>

      <p>
        This Component uses the <code>useRef</code> hook
      </p>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Input a message" ref={inputRef} />

        <button>Send a message</button>
      </form>
    </>
  );
}
