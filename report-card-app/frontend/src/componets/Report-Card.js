import React, { useState, useEffect } from 'react';
import { fetchStudents } from '../api';

export default function ReportCard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents().then(data => setStudents(data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      {students.map((student) => (
        <div key={student.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '20px 0' }}>
          <h3>{student.name.first} {student.name.middle ?? ''} {student.name.last}</h3>
          <p>Grade: {student.grade} | Section: {student.section}</p>
          <p>Stream: {student.stream} | Age: {student.age} | Sex: {student.sex}</p>
          <table border="1" style={{ width: '100%', marginTop: '10px' }}>
            <thead>
              <tr>
                <th scope="col">Subject</th>
                <th scope="col">15%</th>
                <th scope="col">15%</th>
                <th scope="col">30%</th>
                <th scope="col">40%</th>
                <th scope="col">100%</th>
              </tr>
            </thead>
            <tbody>
              {student.subjects.map((subj) => (
                <tr key={subj.name}>
                  <td>{subj.name}</td>
                  {subj.scores.map((score, j) => <td key={j}>{score}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
          <p><strong>Average:</strong> {student.average}</p>
          <p><strong>Rank:</strong> {student.rank}</p>
        </div>
      ))}
    </div>
  );
}
