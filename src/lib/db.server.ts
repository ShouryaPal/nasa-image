"use server";
import axios, { AxiosError, type AxiosResponse } from "axios";

export const getData = async (date: string) => {
  try {
    const response: AxiosResponse = await axios.get(
      `${process.env.API}&date=${date}`
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Error fetching data:", error.message);
      console.error("Status Code:", error.response?.status);
      console.error("Error Response:", error.response?.data);
      return null;
    }
  }
};
