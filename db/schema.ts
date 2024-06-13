import { integer, serial, text, boolean, pgTable, json } from "drizzle-orm/pg-core";

export const specialities = pgTable("specialities", {
  id: serial("id").primaryKey(),
  specialityName: text("specialityName").notNull(),
});

export const hospitals = pgTable("hospitals", {
    id: serial("id").primaryKey(),
    hospitalName: text("hospitalName").notNull(),
    specialitiesList: json('specialitiesList').default([]),
})

export const doctors = pgTable("doctors",{
    id: serial("id").primaryKey(),
    doctorName: text("doctorName").notNull(),
    specialityId: integer("specialityId").notNull(),
    specialityName: text("specialityName").notNull(),
    hospitalUnitId: integer("hospitalUnitId").notNull(),
    hospitalUnitName: text("hospitalUnitName").notNull(),
})
