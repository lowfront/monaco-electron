import * as monaco from "monaco-editor";
monaco;
(self as any).MonacoEnvironment = {
  getWorkerUrl: () => "./dist/renderer/editor.worker.bundle.js",
};
import "./client";
