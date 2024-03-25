const headers = {
    accept: 'application/vnd.github+json',
};
  
export const fetchRepos = async (searchParam: string) => {
    const url = `https://api.github.com/search/repositories?q=${searchParam}&sort=stars&order=desc`;
    const options = {
      method: 'GET',
      headers,
    };
    const res = await fetch(url, options);
    
    if (!res.ok) {
      throw new Error('Failed to fetch repos');
    }
  
    const json = await res.json();
    return json.items;
};
  