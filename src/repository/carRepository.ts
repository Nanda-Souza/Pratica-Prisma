import db from "../config/database.js";
import prisma from "../config/database.js";

async function getCars() {
  return prisma.cars.findMany();
}

async function getCar(id: number) {
  return prisma.cars.findUnique({
    where: {
      id: id
    }
  });
}

async function getCarWithLicensePlate(licensePlate: string) {
  return prisma.cars.findUnique({
    where: {
      licensePlate: licensePlate
    }
  });  
}

async function createCar(model: string, licensePlate: string, year: number, color: string) {
  return prisma.cars.create({
    data: {
      model: model,
      licensePlate: licensePlate,
      year: year,
      color: color
    }
  });
}

/*
return prisma.users.create({
        data: user
    });
async function  upsert(user:NewUser) {
    return prisma.users.upsert({
        //need to use a unique field
        where: {
            id: user.id || 0,
        },
        create: user as User,
        update: user
    })    
} */

async function deleteCar(id: number) {
  //await db.query(`DELETE FROM cars WHERE id = $1`, [id]);
  return [];
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;