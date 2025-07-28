import { defineCollection, z } from "astro:content";

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

export const collections = {
  experience,
};
