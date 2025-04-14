// Importar los estilos de Tailwind CSS y otros estilos globales
import "./index.css";

// Importar los componentes de la biblioteca
export { CaralIcon } from 'iconcaral2';
export * from './lib/utils';
export * from './ui/Avatar';
export * from './ui/Avatar/stack';
export * from './ui/Button';
export * from './ui/Calendar';
export * from './ui/Checkbox';
export * from './ui/Combobox';
export * from './ui/Command';
export * from './ui/Dialog';
export * from './ui/Field';
export * from './ui/Input';
export * from './ui/Input/InputPassword';
export * from './ui/Label';
export * from './ui/Popover';
export * from './ui/Select';
export * from './ui/Skeleton';
export * from './ui/Sonner';
export * from './ui/Tabs';
export * from './ui/Timeline';
export * from './ui/Title';
export * from './ui/Tooltip';

// Utilidades
import { useIsMobile } from './hooks/use-mobile';
export default { useIsMobile };

