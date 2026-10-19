// micromorph's package.json "exports" does not expose its typings, so they are
// unreachable with moduleResolution "bundler". Re-declare the default export.
declare module "micromorph" {
  export default function micromorph(from: Node, to: Node): Promise<void>
}
