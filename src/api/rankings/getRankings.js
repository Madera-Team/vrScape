import rankingApi from "./rankingApi";

export const getRankings = async () => {
  const APIinstance = new rankingApi();

  try {

    const {data} = await APIinstance.getallRankings()
    return data

  } catch (error) {
    
    console.log(error);

    if (APIinstance.isAxiosError(error)) {
      return {
        hasError: true,
        message: "Error de Axios", //error.response?.data.message
      };
    }
    return {
      hasError: true,
      message: "Error no controlado, hable con el administrador",
    };
  }
};
