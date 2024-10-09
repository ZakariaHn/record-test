import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import RecordCard from "./RecordCard";
import "../styles/RecordsList.scss";
import { DataContext } from "../contexts/Context";
import NoGenreFound from "./NoGenreFound";
import { getAllRecords } from "../api/recordsApi";

const RecordsList = () => {
  const { recordsState, recordsDispatch } = useContext(DataContext);

  const { genre } = useParams();

  useEffect(() => {
    getAllRecords(recordsDispatch);
  }, []);

  const filteredRecords = genre
    ? recordsState.data.filter((record) =>
        record.genre.toLowerCase().includes(genre.toLowerCase())
      )
    : recordsState.data;

  return (
    <div className="records-container">
      {filteredRecords.length ? (
        filteredRecords.map((record, index) => (
          <RecordCard key={record._id} record={record} index={index} />
        ))
      ) : (
        <NoGenreFound genre={genre} />
      )}
    </div>
  );
};

export default RecordsList;
