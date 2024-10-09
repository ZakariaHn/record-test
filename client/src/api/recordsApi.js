import axios from "axios";

export const getAllRecords = async (recordsDispatch) => {
  try {
    const response = await axios.get("http://localhost:8000/records");

    recordsDispatch({ type: "FETCH_RECORDS_SUCCESS", payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
