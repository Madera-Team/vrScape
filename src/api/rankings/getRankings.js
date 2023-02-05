import {fetchTool} from "../helpers/fetchTool";

export const getRankings = async(url) => {

  const data = fetchTool(url);
  return data; 
    
}
