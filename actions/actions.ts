"use server"
import db from "@/db/drizzle";
import { hospitals, specialities, doctors } from "@/db/schema";
import { asc, sql } from 'drizzle-orm';

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
export const getDoctorsData = async (hospital:number=0, speciality:number=0) => {
    if(hospital == 0 && speciality == 0){
      const data = await db.select().from(doctors);
      console.log("doctors", data);
      return data;
    }
    else if(hospital == 0){
      const data = await db.select().from(doctors).where(sql `${doctors.specialityId} =  ${speciality}`);
      console.log("doctors", data);
      return data;
    }
    else if(speciality == 0){
      const data = await db.select().from(doctors).where(sql `${doctors.hospitalUnitId} = ${hospital}`);
      console.log("doctors", data);
      return data;
    }
    else{
      const data = await db.select().from(doctors).where(sql `${doctors.hospitalUnitId} = ${hospital} and  ${doctors.specialityId} =  ${speciality}`);
      console.log("doctors", data);
      return data;
    }
};
