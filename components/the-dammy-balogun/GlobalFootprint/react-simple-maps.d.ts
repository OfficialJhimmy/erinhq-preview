declare module "react-simple-maps" {
  import type { ReactNode, CSSProperties } from "react";

  export interface ComposableMapProps {
    projection?: string;
    projectionConfig?: {
      scale?: number;
      center?: [number, number];
      rotate?: [number, number, number];
    };
    className?: string;
    width?: number;
    height?: number;
    children?: ReactNode;
  }
  export function ComposableMap(props: ComposableMapProps): JSX.Element;

  export interface GeographyFeature {
    rsmKey: string;
    [key: string]: unknown;
  }

  export interface GeographiesProps {
    geography: string | object;
    children: (args: { geographies: GeographyFeature[] }) => ReactNode;
  }
  export function Geographies(props: GeographiesProps): JSX.Element;

  export interface GeographyStyle {
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    outline?: string;
  }

  export interface GeographyProps {
    geography: GeographyFeature;
    style?: {
      default?: GeographyStyle;
      hover?: GeographyStyle;
      pressed?: GeographyStyle;
    };
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
  }
  export function Geography(props: GeographyProps): JSX.Element;

  export interface MarkerProps {
    coordinates: [number, number];
    children?: ReactNode;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    style?: CSSProperties;
  }
  export function Marker(props: MarkerProps): JSX.Element;

  export interface LineProps {
    from: [number, number];
    to: [number, number];
    stroke?: string;
    strokeWidth?: number;
    strokeOpacity?: number;
    strokeLinecap?: "butt" | "round" | "square";
    strokeDasharray?: string;
  }
  export function Line(props: LineProps): JSX.Element;

  export interface ZoomableGroupProps {
    center?: [number, number];
    zoom?: number;
    children?: ReactNode;
  }
  export function ZoomableGroup(props: ZoomableGroupProps): JSX.Element;
}