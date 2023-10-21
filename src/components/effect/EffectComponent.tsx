import { ChangeEvent, useEffect, useState } from "react";

export default function EffectComponent() {
  const [userIndex, setUserIndex] = useState(1);
  const [userData, setUserData] = useState<Object>();

  useEffect(() => {
    let ignore = false;

    async function fetchUser() {
      setUserData(undefined);

      const result = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userIndex}`
      );

      const jsonData = await result.json();

      setTimeout(() => {
        if (!ignore && typeof jsonData === "object") {
          setUserData(jsonData);
        }
      }, 1000);
    }

    fetchUser();

    return () => {
      ignore = true;
    };
  }, [userIndex]);

  function handleChangeUserIndex(event: ChangeEvent<HTMLSelectElement>) {
    setUserIndex(parseInt(event.currentTarget.value));
  }

  return (
    <>
      <h1>Effect Component</h1>

      <p>
        This Component uses the <code>useEffect</code> hook
      </p>

      <select value={userIndex} onChange={handleChangeUserIndex}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <hr />

      {userData ? <pre>{JSON.stringify(userData)}</pre> : <div>Loading...</div>}
    </>
  );
}
