<<<<<<< Updated upstream
// src/utils/sendMail.js

import nodemailer from 'nodemailer';

import { SMTP } from '../constants/index.js';
import { env } from '../utils/env.js';

const transporter = nodemailer.createTransport({
  host: env(SMTP.SMTP_HOST),
  port: Number(env(SMTP.SMTP_PORT)),
  auth: {
    user: env(SMTP.SMTP_USER),
    pass: env(SMTP.SMTP_PASSWORD),
=======
import nodemailer from 'nodemailer';
import { env } from '../utils/env.js';
const transporter = nodemailer.createTransport({
  host: env('SMTP_HOST'),
  port: env('SMTP_PORT'),
  auth: {
    user: env('SMTP_USER'),
    pass: env('SMTP_PASSWORD'),
>>>>>>> Stashed changes
  },
});

export const sendEmail = async (options) => {
  return await transporter.sendMail(options);
};