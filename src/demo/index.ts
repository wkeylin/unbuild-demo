import type { CreateAppFunction } from 'vue3'
import type { VueConstructor } from 'vue'

type Params = {
  app: CreateAppFunction<Element>,
  vue: VueConstructor
}

export function createDemo(params: Params) {
  return params
}