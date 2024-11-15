import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv'

//const env=process.env.ENV || 'production'||'staging'
dotenv.config({path:`data/testing.env`})


/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
    reporter: 'html',
     use:{
    trace: 'on',
    headless:false,
    screenshot:'on',
  },
 // testMatch:'./tests/session practice/readEnv.spec.ts',
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

  ],
});
