

export const gameService = async () => {
    const rules = fetch("GAMEENDPOINT", {
      method: 'GET'
    }).then((res) => res.json()).then((data) => data);
    const returnObj = await rules;
    return returnObj;
  };
  
  export default gameService();