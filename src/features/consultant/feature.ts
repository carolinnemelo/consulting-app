import { createService } from "./createService";

export function createFeature() {
  const service = createService();
  return {
    service,
  };
}
