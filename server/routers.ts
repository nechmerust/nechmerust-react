import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createEventRegistration, getEventRegistrations } from "./db";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  events: router({
    register: publicProcedure
      .input(z.object({
        eventTitle: z.string(),
        name: z.string(),
        email: z.string().email(),
        message: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        try {
          await createEventRegistration({
            eventTitle: input.eventTitle,
            name: input.name,
            email: input.email,
            message: input.message || null,
          });
          return { success: true, message: 'Registrace byla úspěšně odeslána. Potvrzovací email byl zaslán na vaši adresu.' };
        } catch (error) {
          console.error('Registration error:', error);
          return { success: false, message: 'Chyba při odesílání registrace. Zkuste to prosím znovu.' };
        }
      }),
    list: publicProcedure
      .input(z.object({ eventTitle: z.string().optional() }).optional())
      .query(async ({ input }) => {
        return await getEventRegistrations(input?.eventTitle);
      }),
  }),
});

export type AppRouter = typeof appRouter;
