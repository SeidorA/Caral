// Importar los estilos de Tailwind CSS y otros estilos globales
import "./index.css";

// Importar los componentes de la biblioteca
export { CaralIcon } from 'iconcaral2';
export * from './components/Avatar';
export * from './components/Avatar/stack';
export * from './components/Button';
export * from './components/Calendar';
export * from './components/Checkbox';
export * from './components/Combobox';
export * from './components/Command';
export * from './components/Dialog';
export * from './components/Field';
export * from './components/Input';
export * from './components/Input/InputPassword';
export * from './components/Label';
export * from './components/Popover';
export * from './components/Select';
export * from './components/Skeleton';
export * from './components/Sonner';
export * from './components/Tabs';
export * from './components/Timeline';
export * from './components/Title';
export * from './components/Tooltip';
export * from './lib/utils';

// Utilidades
import { useIsMobile } from './hooks/use-mobile';
export default { useIsMobile };

