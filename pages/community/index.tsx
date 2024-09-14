import { useState } from "react";

const Community = () => {
  console.log("COMUNITY COMMPONENT - PAGES ROUTER");
  const [title, setTitle] = useState<string>("hello");

  return (
    <div>
      COMMUNTY{""}
      <button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}>
        Press Me
      </button>
    </div>
  );
};

export default Community;
