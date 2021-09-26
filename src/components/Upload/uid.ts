const now = Date.now();
let index = 0;
export default function uid() {
  return `upload-file-${now}-${++index}`;
}
