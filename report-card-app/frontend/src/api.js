const API_BASE = 'http://localhost:3001/api/students';

export async function fetchStudents() {
  const res = await fetch(API_BASE);
  return res.json();
}

export async function addStudent(student) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student)
  });
  return res.json();
}
