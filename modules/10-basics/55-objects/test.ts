import * as ta from 'type-assertions';
import { expect, test } from 'vitest';

import isComplete from './index';

test('function', () => {
  const course1 = {
    name: 'Java',
    lessons: ['variables', 'functions', 'conditions'],
  };
  expect(isComplete(course1)).toBe(false);

  const course2 = {
    name: 'Java',
    lessons: ['variables', 'functions', 'conditions', 'loops'],
  };
  expect(isComplete(course2)).toBe(true);

  const course3 = {
    name: 'Java',
    lessons: ['variables', 'functions', 'conditions', 'loops', 'cringe'],
  };
  expect(isComplete(course3)).toBe(true);

  ta.assert<ta.Equal<ReturnType<typeof isComplete>, boolean>>();
  ta.assert<ta.Equal<Parameters<typeof isComplete>[0], { name: string, lessons: string[] }>>();
});
