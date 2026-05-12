import { Link } from 'react-router-dom';
import clsx from 'clsx';
import type { NavLinkItem } from '@/widgets/header/model/navigation';
import NavLinkBottomLine from '@/widgets/header/assets/borders/NavLinkBottomLine';

interface Props {
    route: NavLinkItem;
    isActive: boolean;
    isLast: boolean;
    onClick: () => void;
}

export const NavListItem = ({ route, isActive, isLast, onClick }: Props) => {
    const Icon = route.icon;

    const targetPath = route.path.startsWith('/#') ? '/' : route.path;

    return (
        <li className='flex flex-col w-full'>
            <Link
                to={targetPath}
                onClick={onClick}
                className={clsx(
                    "text-body-lg px-3 py-3 flex gap-2 items-center w-full transition-colors",
                    isActive ? "text-background/70" : "text-background"
                )}
            >
                {Icon && <Icon className="size-6" />}
                {route.label}
            </Link>
            {!isLast && (
                <NavLinkBottomLine className='w-full' preserveAspectRatio='none' />
            )}
        </li>
    );
};