"use server";
import axios, { AxiosError, type AxiosResponse } from "axios";

export const getData = async () => {
  try {
    const response: AxiosResponse = await axios.get(process.env.API as string);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Error fetching data:", error.message);
      return null;
    }
  }
};


