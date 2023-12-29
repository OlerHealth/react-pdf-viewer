/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2024 Nguyen Huu Phuoc <me@phuoc.ng>
 */

'use client';

import * as React from 'react';
import { useEscape } from '../hooks/useEscape';

export const PopoverOverlay: React.FC<{
    children: React.ReactNode;
    closeOnEscape: boolean;
    onClose(): void;
}> = ({ children, closeOnEscape, onClose }) => {
    const containerRef = React.useRef<HTMLDivElement>();
    useEscape(() => {
        if (containerRef.current && closeOnEscape) {
            onClose();
        }
    });

    return (
        <div className="rpv-core__popover-overlay" ref={containerRef}>
            {children}
        </div>
    );
};
