import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', 
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest', 
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'], 
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
