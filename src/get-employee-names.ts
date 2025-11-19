type Employee = {
  id: number;
  name: string;
  age: number;
  role: string;
  isActive: boolean;
};

export function getEmployeeNames(employees: Employee[]) {
  return {
    names: employees.map((employee) => employee.name),
    count: employees.length,
  };
}
