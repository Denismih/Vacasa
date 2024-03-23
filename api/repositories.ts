const headers = {
    accept: 'application/vnd.github+json',
};
  
export const fetchRepos = async () => {
    const url = `https://api.github.com/search/repositories?q=org:vacasaoss&sort=stars&order=desc`;
    const options = {
      method: 'GET',
      headers,
    };
    const res = await fetch(url, options);
    
    if (!res.ok) {
      throw new Error('Failed to fetch movies');
    }
  
    const json = await res.json();
    console.log(json.items)
    return json.items;
};
  