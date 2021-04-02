import React from "react";
import { useEffect, useState } from "react";
// import Patients from "../components/Patients";
import "./PatientDatabase.css";

export default function PatientDatabase() {
  const [statePatients, setStatePatients] = useState({ status: "idle" });
  const [stateDoctors, setStateDoctors] = useState({ status: "idle" });

  useEffect(() => {
    async function fetchPatients() {
      setStatePatients({ status: "searching" });
      console.log("am state patient ", statePatients);
      const dataPatients = await fetch(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients`
      ).then((r) => r.json());
      console.log("am data patient", dataPatients);
      setStatePatients({ ...statePatients, data: dataPatients });

      console.log("am 2 stat patient", statePatients);
      console.log("set state", setStatePatients.dataPatients);
    }

    fetchPatients();
  }, []);
  useEffect(() => {
    async function fetchDoctors() {
      setStateDoctors({ status: "searching" });

      const dataDoctors = await fetch(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors`
      ).then((r) => r.json());

      setStateDoctors({ ...stateDoctors, data: dataDoctors });
      console.log(dataDoctors);
      console.log(stateDoctors.dataDoctors);
    }
    fetchDoctors();
  }, []);
  console.log("data here", statePatients.dataPatients);

  return (
    <div className="center">
      <h1>Patient Database</h1>
      <div className="form ">
        Doctor
        <select>
          <option value="coventy">Dr.Coventy</option>
          <option value="adenet">Dr.Adenet</option>
          <option value="tollady">Dr.Tollady</option>
          <option valur="all patients">all</option>
        </select>
      </div>

      <div>
        <h2>Patients list</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}>
          console.log("heelo ahain ",dataPatients)
          {statePatients.dataPatients
            ? statePatients.dataPatients.map((patient, index) => {
                return <div key={index}>{patient.id}</div>;
              })
            : "nothing"}
        </div>
      </div>
    </div>
  );
}
