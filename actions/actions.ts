"use server"
import db from "@/db/drizzle";
import { hospitals, specialities, doctors } from "@/db/schema";
import { asc, eq, sql } from 'drizzle-orm';

export const getHospitalsData = async () => {
  const data = await db.select().from(hospitals).orderBy(asc(hospitals.id));
  console.log("hospitals", data);
  return data;
};
export const getSpecialitiesData = async () => {
    const data = await db.select().from(specialities).orderBy(asc(specialities.id));
    console.log("specialities", data);
    return data;
};
export const getDoctorsData = async (hospital:string="", speciality:string="") => {
    const data = await db.select().from(doctors).where(sql `${doctors.hospitalUnitName} = ${hospital} and  ${doctors.specialityName} =  ${speciality}`);
    console.log("doctors", data);
    return data;
};
