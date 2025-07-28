import { defineCollection, z } from "astro:content";
import { date } from "astro:schema";

const experience = defineCollection({
  schema: z.object({
    id: z.number(),
    fecha_inicio: z.string(),
    fecha_termino: z.string(),
    cargo: z.string(),
    empresa: z.string(),
    lugar: z.string(),
  })
})

const blog = defineCollection({
  schema:z.object({
    id: z.number(),
    fecha: z.string(),
    titulo: z.string(),
  })
})

export const collections = {
  experience,
  blog
};
