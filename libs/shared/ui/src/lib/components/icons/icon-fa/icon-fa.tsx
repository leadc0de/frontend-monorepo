import { Icon } from '@iconify/react';

export interface IconFaProps {
  name: string
  className?: string
}

export function IconFa ({ name, className = '' }: IconFaProps) {
  return <Icon role='img' className={`${name} ${className}`} icon={name} />
}

export default IconFa
