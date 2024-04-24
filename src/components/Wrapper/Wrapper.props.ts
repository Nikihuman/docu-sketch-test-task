import { HTMLAttributes, ReactNode } from 'react';

export interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
}