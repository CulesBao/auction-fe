// schemas/auth.schemas.ts
import { z } from 'zod';

export const registerSchema = z.object({
    firstName: z.string().min(1, 'First name is required').max(50),
    lastName: z.string().min(1, 'Last name is required').max(50),
    email: z.string().email('Invalid email address'),
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .max(100),
    phoneNumber: z.string().optional(),
    birthday: z.string().optional(),
    gender: z.enum(['MALE', 'FEMALE']).optional(),
});

export const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required'),
});

export const changePasswordSchema = z
    .object({
        currentPassword: z.string().min(8, 'Password must be at least 8 characters'),
        newPassword: z.string().min(8, 'Password must be at least 8 characters'),
        confirmNewPassword: z.string().min(8, 'Password must be at least 8 characters'),
    })
    .refine((data) => data.newPassword === data.confirmNewPassword, {
        message: "Passwords don't match",
        path: ['confirmNewPassword'],
    });

export type RegisterFormValues = z.infer<typeof registerSchema>;
export type LoginFormValues = z.infer<typeof loginSchema>;
export type ChangePasswordFormValues = z.infer<typeof changePasswordSchema>;
