import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import {expect, test, describe, afterEach} from 'vitest';
import App from "../../App";

test('Is vitest configured correctly for running __tests__', () => {
    expect('Configured Correctly').toBe('Configured Correctly');
});

afterEach(() => {
    cleanup();
});

// Tests
describe('Renders main page correctly', async () => {
    test('Should render the page correctly', async () => {
        await render(<App/>);
        const h1 = await screen.queryByText('Vite + React');

        // Expectations
        expect(h1).not.toBeNull();
        expect(true).toBeTruthy();
    });

    test('Should show the button count set to 0', async () => {
        await render(<App/>);
        const button = await screen.queryByText('random number is 0');

        // Expectations
        expect(button).not.toBeNull();
    });
});
