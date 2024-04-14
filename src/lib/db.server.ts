"use server";
import axios, { AxiosError, type AxiosResponse } from "axios";

export const getData = async () => {
  try {
    console.log(process.env.API);
    const response: AxiosResponse = await axios.get(process.env.API as string);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError) {
      console.error("Error fetching data:", error.message);
      return null;
    }
  }
};


