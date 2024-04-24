import { HTMLAttributes } from 'react';

export interface RippleProps extends HTMLAttributes<HTMLDivElement> {
	isActive: boolean
}