import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import List from ".";

describe('list', () => {
    it('should render without crash', () => {
        const list = ['item1', 'item2', 'item3']
        render(<List items={list} />)

        const items = screen.getAllByTestId('list-item')
        expect(items.length).toBe(3)
    });
});
