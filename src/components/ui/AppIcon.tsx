import type { ComponentType, SVGProps } from 'react';
import * as OutlineIcons from '@heroicons/react/24/outline';
import * as SolidIcons from '@heroicons/react/24/solid';

type IconVariant = 'outline' | 'solid';

type OutlineIconName =
  | 'AcademicCapIcon'
  | 'ArrowLeftIcon'
  | 'ArrowTopRightOnSquareIcon'
  | 'ArrowsRightLeftIcon'
  | 'CalendarIcon'
  | 'CheckCircleIcon'
  | 'ChatBubbleLeftRightIcon'
  | 'ClockIcon'
  | 'GlobeAltIcon'
  | 'HomeIcon'
  | 'MapPinIcon'
  | 'PlusIcon'
  | 'SunIcon';

type SolidIconName = 'StarIcon';

type AppIconName = OutlineIconName | SolidIconName;

const outlineIconMap: Record<OutlineIconName, ComponentType<SVGProps<SVGSVGElement>>> = {
  AcademicCapIcon: OutlineIcons.AcademicCapIcon,
  ArrowLeftIcon: OutlineIcons.ArrowLeftIcon,
  ArrowTopRightOnSquareIcon: OutlineIcons.ArrowTopRightOnSquareIcon,
  ArrowsRightLeftIcon: OutlineIcons.ArrowsRightLeftIcon,
  CalendarIcon: OutlineIcons.CalendarIcon,
  CheckCircleIcon: OutlineIcons.CheckCircleIcon,
  ChatBubbleLeftRightIcon: OutlineIcons.ChatBubbleLeftRightIcon,
  ClockIcon: OutlineIcons.ClockIcon,
  GlobeAltIcon: OutlineIcons.GlobeAltIcon,
  HomeIcon: OutlineIcons.HomeIcon,
  MapPinIcon: OutlineIcons.MapPinIcon,
  PlusIcon: OutlineIcons.PlusIcon,
  SunIcon: OutlineIcons.SunIcon,
};

const solidIconMap: Record<SolidIconName, ComponentType<SVGProps<SVGSVGElement>>> = {
  StarIcon: SolidIcons.StarIcon,
};

export type AppIconProps = {
  name: AppIconName;
  size?: number;
  className?: string;
  variant?: IconVariant;
} & Omit<SVGProps<SVGSVGElement>, 'size' | 'color'>;

export default function AppIcon({
  name,
  size = 20,
  className = '',
  variant = 'outline',
  ...props
}: AppIconProps) {
  const IconComponent =
    variant === 'solid'
      ? solidIconMap[name as SolidIconName] ?? outlineIconMap[name as OutlineIconName]
      : outlineIconMap[name as OutlineIconName] ?? solidIconMap[name as SolidIconName];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      className={className}
      width={size}
      height={size}
      style={{ width: size, height: size }}
      {...props}
    />
  );
}
