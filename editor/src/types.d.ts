/// <reference types="@toolkit/layout/types" />
/// <reference types="@toolkit/navbar/types" />

declare module '*.mdx';
declare module '*.css';

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
