import prisma from '../config/db.js';

export async function findAll({completed}) {
  console.log(completed);
  let conditions = {};
  if (completed === true || completed === false) {
    conditions = { completed: completed };
  }
  const tasks = await prisma.task.findMany({
    where: conditions
  });
  return tasks;
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
