import React, { useState } from "react";
import { getUser, getRepo } from "./api";

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [repo, setRepo] = useState<any>(null);

  const fetchUser = async () => {
    const userData = await getUser("edijunior88");
    setUser(userData);
  };

  const fetchRepo = async () => {
    const repoData = await getRepo("edijunior88", "certificados");
    setRepo(repoData);
  };

  return (
    <div>
      <h1>GitHub User and Repository Fetcher</h1>
      <button onClick={fetchUser}>Fetch User</button>
      <button onClick={fetchRepo}>Fetch Repository</button>
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
      {repo && <pre>{JSON.stringify(repo, null, 2)}</pre>}
    </div>
  );
};

export default App;
